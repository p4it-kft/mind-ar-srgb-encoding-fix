const tf = require('@tensorflow/tfjs');
const {buildModelViewProjectionTransform, computeScreenCoordiate} = require('../icp/utils.js');
const {computeHomography} = require('../matching/homography.js');
const {multiplyPointHomographyInhomogenous, matrixInverse33} = require('../utils/geometry.js');

const AR2_DEFAULT_TS = 6;
//const AR2_DEFAULT_TS = 22;
const AR2_SEARCH_SIZE = 6;
const AR2_SEARCH_GAP = 1;
const AR2_SIM_THRESH = 0.8;

const INLIER_THRESHOLD = 3;

// For some mobile device, only 16bit floating point texture is supported
//   ref: https://www.tensorflow.org/js/guide/platform_environment#precision
// Empirical results shows that modelViewProjectTransform can go up beyond that, resulting in error
// We get around this by dividing the transform matrix by 1000, and then multiply back inside webgl program
const PRECISION_ADJUST = 1000;

class Tracker {
  constructor(trackingDataList, imageListList, projectionTransform, inputWidth, inputHeight, controller) {
    this.trackingDataList = trackingDataList;
    this.imageListList = imageListList;
    this.projectionTransform = projectionTransform;
    this.width = inputWidth;
    this.height = inputHeight;

    this.controller = controller;

    this.markerWidth = imageListList[0][0].width;
    this.markerHeight = imageListList[0][0].height;

    // prebuild feature and image pixel tensors
    this.featurePointsListT = [];
    this.imagePixelsListT = [];
    this.imagePropertiesListT = [];
    for (let i = 0; i < trackingDataList.length; i++) {
      const {featureList, imagePixelsList, imagePropertiesList} = this._prebuild(trackingDataList[i], imageListList[i]);
      this.featurePointsListT[i] = featureList;
      this.imagePixelsListT[i] = imagePixelsList;
      this.imagePropertiesListT[i] = imagePropertiesList;
    }

    this.kernelCaches = {};
  }

  dummyRun(input) {
    for (let targetIndex = 0; targetIndex < this.featurePointsListT.length; targetIndex++) {
      for (let i = 0; i < this.featurePointsListT[targetIndex].length; i++) {
	this.track(input, [[1,1,1,1], [1,1,1,1], [1,1,1,1]], targetIndex, i);
      }
    }
  }

  filter(selectedFeatures, keyframeIndex) {
    const keyWidth = this.imageListList[0][keyframeIndex].width;
    const keyHeight = this.imageListList[0][keyframeIndex].height;
    const srcPoints = [];
    const dstPoints = [];
    const querypoints = [];
    const keypoints = [];
    selectedFeatures.forEach((f) => {
      srcPoints.push([f.pos3D.x, keyHeight - f.pos3D.y]);
      dstPoints.push([f.pos2D.x, f.pos2D.y]);

      keypoints.push({x: f.pos3D.x, y: keyHeight - f.pos3D.y});
      querypoints.push(f.pos2D);
    });
    const keyframe = {width: keyWidth, height: keyHeight};

    const H = computeHomography({
      srcPoints,
      dstPoints,
      keyframe,
    });

    if (!H) return [];

    const inlierMatches = _findInlierMatches({
      querypoints,
      keypoints,
      H,
      threshold: INLIER_THRESHOLD
    });

    const filtered = [];
    inlierMatches.forEach((index) => {
      filtered.push(selectedFeatures[index]); 
    });
    //console.log("filtered", filtered);
    return filtered;
  }
  

  track(input, lastModelViewTransforms, targetIndex, inputKeyframeIndex=-1) {
    const lastModelViewTransform = lastModelViewTransforms[0];

    const modelViewProjectionTransforms = [];
    const modelViewProjectionTransformsT = [];
    for (let i = 0; i < lastModelViewTransforms.length; i++) {
      modelViewProjectionTransforms.push(buildModelViewProjectionTransform(this.projectionTransform, lastModelViewTransforms[i]));
      modelViewProjectionTransformsT.push(this._buildAdjustedModelViewTransform(modelViewProjectionTransforms[i]));
    }
    const modelViewProjectionTransform = modelViewProjectionTransforms[0];
    const modelViewProjectionTransformT = modelViewProjectionTransformsT[0];

    // expected keyframe, if not provided in input, compute the expected.
    const keyframeIndex = inputKeyframeIndex !== -1? inputKeyframeIndex: this._computeExpectedKeyframe(modelViewProjectionTransform, targetIndex);

    // read input image as tensor
    const inputImageT = this._loadInput(input);

    // prebuilt tensors for current keyframe
    const featurePointsT = this.featurePointsListT[targetIndex][keyframeIndex];
    const imagePixelsT = this.imagePixelsListT[targetIndex][keyframeIndex];
    const imagePropertiesT = this.imagePropertiesListT[targetIndex][keyframeIndex];

    // project the input image into the marker according to previous transform
    const projectedImageT = this._computeProjection(modelViewProjectionTransformT, inputImageT, keyframeIndex);

    // compute a few expected locations for each feature points according to previous 3 transforms 
    const searchPointsT = this._computeSearchPoints(featurePointsT, modelViewProjectionTransformsT);

    // find a best matching point around the neithbours of the expected locations for each feature points
    //   normalized cross-correlation (similarity should be in range [-1, 1]
    const {matchingPointsT, simT} = this._computeMatching(featurePointsT, searchPointsT, imagePixelsT, imagePropertiesT, projectedImageT);

    // re-project matching positions back to input positions 
    const trackedPointsT = this.__markerPointToScreen(matchingPointsT, modelViewProjectionTransformT); 

    const combinedT = this._combine(trackedPointsT, simT);

    // download data for further CPU computatio
    const matchingPoints = matchingPointsT.arraySync();
    const trackedPoints = trackedPointsT.arraySync();
    const searchPoints = searchPointsT.arraySync();
    const projectedImage = projectedImageT.arraySync();
    const sim = simT.arraySync();
    const combinedArr = combinedT.arraySync();

    // tensors cleanup
    modelViewProjectionTransformsT.forEach((modelViewProjectionTransformT) => {
      modelViewProjectionTransformT.dispose();
    });
    inputImageT.dispose();
    projectedImageT.dispose();
    modelViewProjectionTransformT.dispose();
    matchingPointsT.dispose();
    trackedPointsT.dispose();
    combinedT.dispose();

    //console.log("track1 sims", similaritiesArr);

    // tracking features set if similarity exceed certain threshold
    const featureSet = this.trackingDataList[targetIndex][keyframeIndex];
    const selectedFeatures = [];
    for (let i = 0; i < featureSet.coords.length; i++) {
      if (combinedArr[i][2] > AR2_SIM_THRESH) {
        selectedFeatures.push({
          pos2D: {x: combinedArr[i][0], y: combinedArr[i][1]},
          pos3D: {x: featureSet.coords[i].mx, y: featureSet.coords[i].my, z: 0},
          sim: combinedArr[i][2]
        });
      }
    }
    //console.log('n tensorss: ', tf.memory().numTensors);
    //console.log("track2 selectedFeatures", selectedFeatures, mappedTrackedPoints);

    return {projectedImage, searchPoints, matchingPoints, trackedPoints, sim, selectedFeatures};
  }

  _combine(trackedPointsT, similaritiesT) {
    return tf.tidy(() => {
      const combinedT = tf.concat([trackedPointsT, similaritiesT.expandDims(1)], 1);
      return combinedT;
    });
  }

  _computeSearchPoints(featurePointsT, modelViewProjectionTransformsT) {
    return tf.tidy(() => {
      const p0 = this.__markerPointToScreen(featurePointsT, modelViewProjectionTransformsT[0]);
      const p1 = this.__markerPointToScreen(featurePointsT, modelViewProjectionTransformsT[1]);
      const p2 = this.__markerPointToScreen(featurePointsT, modelViewProjectionTransformsT[2]);

      const s0 = p0;
      const s1 = p0.mul(2).sub(p1); // expected location if move at constant speed
      const s2 = p0.mul(3).sub(p1.mul(3)).add(p2); // expected location if move at constant acceleration

      const m0 = this.__screenPointToMarker(s0, modelViewProjectionTransformsT[0]);
      const m1 = this.__screenPointToMarker(s1, modelViewProjectionTransformsT[0]);
      const m2 = this.__screenPointToMarker(s2, modelViewProjectionTransformsT[0]);

      //console.log("F", featurePointsT.arraySync());
      //console.log("P", p0.arraySync(), p1.arraySync(), p2.arraySync());
      //console.log("S", s0.arraySync(), s1.arraySync(), s2.arraySync());
      //console.log("M", m0.arraySync(), m1.arraySync(), m2.arraySync());
      return tf.stack([m0, m1, m2], 0);
    });
  }

  __screenPointToMarker(pointsT, modelViewProjectionTransformT) {
    if (!this.kernelCaches.screenPointToMarker) {
      const kernel = {
	variableNames: ['point', 'M'],
	outputShape: pointsT.shape,
	userCode: `
	  void main() {
	      ivec2 coords = getOutputCoords();

	      float m00 = getM(0, 0) * ${PRECISION_ADJUST}.;
	      float m01 = getM(0, 1) * ${PRECISION_ADJUST}.;
	      float m03 = getM(0, 3) * ${PRECISION_ADJUST}.;
	      float m10 = getM(1, 0) * ${PRECISION_ADJUST}.;
	      float m11 = getM(1, 1) * ${PRECISION_ADJUST}.;
	      float m13 = getM(1, 3) * ${PRECISION_ADJUST}.;
	      float m20 = getM(2, 0) * ${PRECISION_ADJUST}.;
	      float m21 = getM(2, 1) * ${PRECISION_ADJUST}.;
	      float m23 = getM(2, 3) * ${PRECISION_ADJUST}.;

	      float sx2 = getPoint(coords[0], 0);
	      float sy2 = getPoint(coords[0], 1);

	      float c11 = m20 * sx2 - m00;
	      float c12 = m21 * sx2 - m01;
	      float c21 = m20 * sy2 - m10;
	      float c22 = m21 * sy2 - m11;
	      float b1 = m03 - m23 * sx2;
	      float b2 = m13 - m23 * sy2;

	      float m = c11 * c22 - c12 * c21;

	      float mx2 = (c22 * b1 - c12 * b2) / m;
	      float my2 = (c11 * b2 - c21 * b1) / m;

	      if (coords[1] == 0) {
		setOutput(mx2);
	      }
	      if (coords[1] == 1) {
		setOutput(my2);
	      }
	    }
	`
      };
      this.kernelCaches.screenPointToMarker = kernel;
    }

    return tf.tidy(() => {
      const program = this.kernelCaches.screenPointToMarker;
      const result = tf.backend().compileAndRun(program, [pointsT, modelViewProjectionTransformT]);
      return result;
    });
  }

  __markerPointToScreen(pointsT, modelViewProjectionTransformT) {
    if (!this.kernelCaches.markerPointToScreen) {
      const kernel = {
	variableNames: ['point', 'M'],
	outputShape: pointsT.shape,
	userCode: `
	  void main() {
	      ivec2 coords = getOutputCoords();

	      float m00 = getM(0, 0) * ${PRECISION_ADJUST}.;
	      float m01 = getM(0, 1) * ${PRECISION_ADJUST}.;
	      float m03 = getM(0, 3) * ${PRECISION_ADJUST}.;
	      float m10 = getM(1, 0) * ${PRECISION_ADJUST}.;
	      float m11 = getM(1, 1) * ${PRECISION_ADJUST}.;
	      float m13 = getM(1, 3) * ${PRECISION_ADJUST}.;
	      float m20 = getM(2, 0) * ${PRECISION_ADJUST}.;
	      float m21 = getM(2, 1) * ${PRECISION_ADJUST}.;
	      float m23 = getM(2, 3) * ${PRECISION_ADJUST}.;

	      float x = getPoint(coords.x, 0);
	      float y = getPoint(coords.x, 1);
	      float uz = (x * m20) + (y * m21) + m23;

	      if (coords.y == 0) {
		  float ux = (x * m00) + (y * m01) + m03;
		  setOutput(ux / uz);
	      }
	      if (coords.y == 1) {
		  float uy = (x * m10) + (y * m11) + m13;
		  setOutput(uy / uz);
	      }
	    }
	`
      };
      const program = kernel;
      this.kernelCaches.markerPointToScreen = program;
    }

    return tf.tidy(() => {
      const program = this.kernelCaches.markerPointToScreen;
      const result = tf.backend().compileAndRun(program, [pointsT, modelViewProjectionTransformT]);
      return result;
    });
  }

  _computeMatching(featurePointsT, searchPointsT, imagePixelsT, imagePropertiesT, projectedImageT) {
    const templateOneSize = AR2_DEFAULT_TS;
    const templateSize = templateOneSize * 2 + 1;
    const searchOneSize = AR2_SEARCH_SIZE;
    const searchSize = searchOneSize * 2 + 1;
    //const targetWidth = this.width;
    //const targetHeight = this.height;
    const targetHeight = projectedImageT.shape[0];
    const targetWidth = projectedImageT.shape[1];

    const featureLocationCount = searchPointsT.shape[0];
    const featureCount = searchPointsT.shape[1];

    if (!this.kernelCaches.computeMatching) {
      const kernel1 = {
	variableNames: ['features', 'search', 'markerPixels', 'markerProperties', 'targetPixels'],
	outputShape: [featureCount, featureLocationCount * searchSize * searchSize],
	userCode: `
	  void main() {
	    ivec2 coords = getOutputCoords();

	    int featureIndex = coords[0];
	    int searchLocationIndex = coords[1] / ${searchSize * searchSize};
	    int searchOffsetIndex = imod(coords[1], ${searchSize * searchSize});

	    float markerWidth = getMarkerProperties(0);
	    float markerHeight = getMarkerProperties(1);
	    float markerScale = getMarkerProperties(2);

	    int searchOffsetX = imod(searchOffsetIndex, ${searchSize});
	    int searchOffsetY = searchOffsetIndex / ${searchSize};

	    int fCenterX = int(getFeatures(featureIndex, 0) * markerScale);
	    int fCenterY = int(getFeatures(featureIndex, 1) * markerScale);
	    fCenterY = int(markerHeight) - 1 - fCenterY;

	    int sCenterX = int(getSearch(searchLocationIndex, featureIndex, 0) * markerScale);
	    int sCenterY = int(getSearch(searchLocationIndex, featureIndex, 1) * markerScale);
	    sCenterY = int(markerHeight) - 1 - sCenterY; // upside down

	    int sx = sCenterX + searchOffsetX - ${searchOneSize};
	    //int sy = sCenterY + searchOffsetY - ${searchOneSize};
	    int sy = sCenterY - searchOffsetY + ${searchOneSize}; // upside down

	    //setOutput( float(1000 * sy2 + sx2));
	    //return;

	    if (sx < ${templateOneSize} || sx >= (${targetWidth} - ${templateOneSize}) || sy < ${templateOneSize} || sy >= (${targetHeight} - ${templateOneSize})) {
	      setOutput(-2.);
	    } 
	    else {
	      float sumPoint = 0.;
	      float sumPointSquare = 0.;
	      float sumTemplate = 0.;
	      float sumTemplateSquare = 0.;
	      float sumPointTemplate = 0.;

              for (int i = 0; i < ${templateSize} * ${templateSize}; i++) {
		int templateOffsetX = imod(i, ${templateSize});
		int templateOffsetY = i / ${templateSize};

		int fx2 = fCenterX + templateOffsetX - ${templateOneSize};
		int fy2 = fCenterY + templateOffsetY - ${templateOneSize};

		int sx2 = sx + templateOffsetX - ${templateOneSize};
		int sy2 = sy + templateOffsetY - ${templateOneSize};

		int markerPixelIndex = fy2 * int(markerWidth) + fx2;
		float markerPixel = getMarkerPixels(markerPixelIndex);
		float targetPixel = getTargetPixels(sy2, sx2);

	      	sumTemplate += markerPixel;
	      	sumTemplateSquare += markerPixel * markerPixel;
		sumPoint += targetPixel;
		sumPointSquare += targetPixel * targetPixel;
		sumPointTemplate += targetPixel * markerPixel;
	      }

	      //int markerPixelIndex = (int(markerHeight) - 1 - fy) * int(markerWidth) + fx;
	      //float markerPixel = getMarkerPixels(markerPixelIndex);
	      //setOutput(markerPixel);
	      //return;

	      //setOutput(sumTemplate);
	      //return;
	      
	      // Normalized cross-correlation
	      // !important divide first avoid overflow (e.g. sumPoint / count * sumPoint)
	      float count = float(${templateSize} * ${templateSize});
	      float pointVariance = sqrt(sumPointSquare - sumPoint / count * sumPoint);
	      float templateVariance = sqrt(sumTemplateSquare - sumTemplate / count * sumTemplate);

	      if (pointVariance < 0.0000001) {
		setOutput(-3.);
	      } else if (templateVariance < 0.0000001) {
		//setOutput(sumTemplate);
		setOutput(-4.);
	      } else {
		sumPointTemplate -= sumPoint / count * sumTemplate;
		float sim = sumPointTemplate / pointVariance / templateVariance;  
		setOutput(sim);
	      }
	    }
	  }
	`
      };

      const kernel2 = {
	variableNames: ['searchPoints', 'maxIndex'],
	outputShape: [featureCount, 2], // [x, y]
	userCode: `
	  void main() {
	    ivec2 coords = getOutputCoords();

	    int featureIndex = coords[0];
	    int maxIndex = int(getMaxIndex(featureIndex));
	    int searchLocationIndex = maxIndex / ${searchSize * searchSize};
	    int searchOffsetIndex = imod(maxIndex, ${searchSize * searchSize});

	    if (coords[1] == 0) {
	      int searchOffsetX = imod(searchOffsetIndex, ${searchSize});
	      setOutput(getSearchPoints(searchLocationIndex, featureIndex, 0) + float(searchOffsetX) - ${searchOneSize}.);
	    }
	    else if (coords[1] == 1) {
	      int searchOffsetY = searchOffsetIndex / ${searchSize};
	      setOutput(getSearchPoints(searchLocationIndex, featureIndex, 1) + float(searchOffsetY) - ${searchOneSize}.);
	    }
	  }
	`
      }

      const kernel3 = {
	variableNames: ['sims', 'maxIndex'],
	outputShape: [featureCount],
	userCode: `
	  void main() {
	    int coord = getOutputCoords();
	    int featureIndex = coord;
	    int maxIndex = int(getMaxIndex(featureIndex));
	    setOutput(getSims(featureIndex, maxIndex));
	  }
	`
      }

      this.kernelCaches.computeMatching = [kernel1, kernel2, kernel3];
    }

    return tf.tidy(() => {
      const programs = this.kernelCaches.computeMatching;
      const allSims = tf.backend().compileAndRun(programs[0], [featurePointsT, searchPointsT, imagePixelsT, imagePropertiesT, projectedImageT]);
      const maxIndex = allSims.argMax(1);
      const matchingPointsT = tf.backend().compileAndRun(programs[1], [searchPointsT, maxIndex]);
      const simT = tf.backend().compileAndRun(programs[2], [allSims, maxIndex]);
      return {matchingPointsT, simT};
    });
  }

  _computeProjection(modelViewProjectionTransformT, inputImageT, keyframeIndex) {
    if (!this.kernelCaches.computeProjection) {
      this.kernelCaches.computeProjection = [];
    }

    if (!this.kernelCaches.computeProjection[keyframeIndex]) {
      const markerWidth = this.imageListList[0][keyframeIndex].width;
      const markerHeight = this.imageListList[0][keyframeIndex].height;
      const markerScale = this.imageListList[0][keyframeIndex].scale;

      const kernel = {
	variableNames: ['M', 'pixel'],
	outputShape: [markerHeight, markerWidth],
	userCode: `
	  void main() {
	      ivec2 coords = getOutputCoords();

	      float m00 = getM(0, 0) * ${PRECISION_ADJUST}.;
	      float m01 = getM(0, 1) * ${PRECISION_ADJUST}.;
	      float m03 = getM(0, 3) * ${PRECISION_ADJUST}.;
	      float m10 = getM(1, 0) * ${PRECISION_ADJUST}.;
	      float m11 = getM(1, 1) * ${PRECISION_ADJUST}.;
	      float m13 = getM(1, 3) * ${PRECISION_ADJUST}.;
	      float m20 = getM(2, 0) * ${PRECISION_ADJUST}.;
	      float m21 = getM(2, 1) * ${PRECISION_ADJUST}.;
	      float m23 = getM(2, 3) * ${PRECISION_ADJUST}.;

	      float y = float( ${markerHeight} - coords[0]) / float(${markerScale});
	      float x = float(coords[1]) / float(${markerScale});
	      float uz = (x * m20) + (y * m21) + m23;
	      float oneOverUz = 1. / uz;

	      float ux = (x * m00) + (y * m01) + m03;
	      float uy = (x * m10) + (y * m11) + m13;

	      ux = floor(ux * oneOverUz + 0.5);
	      uy = floor(uy * oneOverUz + 0.5);

	      setOutput(getPixel( int(uy), int(ux)));
	    }
	`
      };
      this.kernelCaches.computeProjection[keyframeIndex] = kernel;
    }

    return tf.tidy(() => {
      const program = this.kernelCaches.computeProjection[keyframeIndex];
      const result = tf.backend().compileAndRun(program, [modelViewProjectionTransformT, inputImageT]);
      return result;
    });
  }
  
  
  _buildAdjustedModelViewTransform(modelViewProjectionTransform) {
    return tf.tidy(() => {
      let modelViewProjectionTransformAdjusted = [];
      for (let i = 0; i < modelViewProjectionTransform.length; i++) {
	modelViewProjectionTransformAdjusted.push([]);
	for (let j = 0; j < modelViewProjectionTransform[i].length; j++) {
	  modelViewProjectionTransformAdjusted[i].push(modelViewProjectionTransform[i][j]/PRECISION_ADJUST);
	}
      }
      return tf.tensor(modelViewProjectionTransformAdjusted, [3, 4]);
    });
  }

  _prebuild(featureSets, imageList) {
    return tf.tidy(() => {
      const imagePixelsList = [];
      const imagePropertiesList = [];
      for (let i = 0; i < imageList.length; i++) {
	imagePixelsList.push(tf.tensor(imageList[i].data, [imageList[i].width * imageList[i].height]));
	imagePropertiesList.push(tf.tensor([imageList[i].width, imageList[i].height, imageList[i].scale], [3]));
      }

      const featureList = [];
      let maxCount = 0;
      for (let j = 0; j < featureSets.length; j++) {
        maxCount = Math.max(maxCount, featureSets[j].coords.length);
      }
      for (let j = 0; j < featureSets.length; j++) {
	let p = [];
        for (let k = 0; k < maxCount; k++) {
          if (k < featureSets[j].coords.length) {
	    p.push([featureSets[j].coords[k].mx, featureSets[j].coords[k].my]);
          } else {
	    p.push([-1, -1]);
          }
        }
	featureList.push(tf.tensor(p, [p.length, 2]));
      }

      return {
	featureList,
	imagePixelsList,
	imagePropertiesList
      };
    });
  }

  _loadInput(input) {
    return tf.tidy(() => {
      let inputImage = tf.browser.fromPixels(input);
      inputImage = inputImage.mean(2); //.expandDims(2).expandDims(0);
      return inputImage;
    });
  }

  // get best keyframeIndex
  //  find projected location on screen for position (0, 0), (10, 0) and (0, 10) and see the projected distance.
  //  expected marker ratio would be  distance / 10
  _computeExpectedKeyframe(modelViewProjectionTransform, targetIndex) {
    const u = computeScreenCoordiate(modelViewProjectionTransform, 10, 10, 0);
    const u1 = computeScreenCoordiate(modelViewProjectionTransform, 10+10, 10, 0);
    const u2 = computeScreenCoordiate(modelViewProjectionTransform, 10, 10+10, 0);
    if (u && u1 && u2) {
      const d1 = (u1.x - u.x) * (u1.x - u.x) + (u1.y - u.y) * (u1.y - u.y);
      const d2 = (u2.x - u.x) * (u2.x - u.x) + (u2.y - u.y) * (u2.y - u.y);
      const minD = Math.sqrt(Math.min(d1, d2));
      const targetScale = minD / 10.0; // screen to marker ratio
      const imageList = this.imageListList[targetIndex];

      let keyframeIndex = 0;
      for (let i = 1; i < imageList.length; i++) {
	const rd1 = Math.abs(targetScale - imageList[keyframeIndex].scale);
	const rd2 = Math.abs(targetScale - imageList[i].scale);
	if (rd2 < rd1) keyframeIndex = i;
      }
      return keyframeIndex;
    }
    return 0;
  }
}

const _findInlierMatches = (options) => {
  const {keypoints, querypoints, H, threshold} = options;

  const threshold2 = threshold * threshold;

  const goodMatches = [];
  for (let i = 0; i < keypoints.length; i++) {
    const querypoint = querypoints[i];
    const keypoint = keypoints[i];
    const mp = multiplyPointHomographyInhomogenous([keypoint.x, keypoint.y], H);
    const d2 = (mp[0] - querypoint.x) * (mp[0] - querypoint.x) + (mp[1] - querypoint.y) * (mp[1] - querypoint.y);
    if (d2 <= threshold2) {
      goodMatches.push(i);
    }
  }
  return goodMatches;
}

module.exports = {
  Tracker
};
