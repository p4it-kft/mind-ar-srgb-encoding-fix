import { c as Z2, O as $2 } from "./ui.f7b5eaac.js";
var _3 = {};
(function() {
  var w;
  function c(t) {
    var e = 0;
    return function() {
      return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
    };
  }
  var p = typeof Object.defineProperties == "function" ? Object.defineProperty : function(t, e, r) {
    return t == Array.prototype || t == Object.prototype || (t[e] = r.value), t;
  };
  function g(t) {
    t = [typeof globalThis == "object" && globalThis, t, typeof window == "object" && window, typeof self == "object" && self, typeof Z2 == "object" && Z2];
    for (var e = 0; e < t.length; ++e) {
      var r = t[e];
      if (r && r.Math == Math)
        return r;
    }
    throw Error("Cannot find global object");
  }
  var v = g(this);
  function f(t, e) {
    if (e)
      t: {
        var r = v;
        t = t.split(".");
        for (var n = 0; n < t.length - 1; n++) {
          var i = t[n];
          if (!(i in r))
            break t;
          r = r[i];
        }
        t = t[t.length - 1], n = r[t], e = e(n), e != n && e != null && p(r, t, { configurable: !0, writable: !0, value: e });
      }
  }
  f("Symbol", function(t) {
    function e(s) {
      if (this instanceof e)
        throw new TypeError("Symbol is not a constructor");
      return new r(n + (s || "") + "_" + i++, s);
    }
    function r(s, o) {
      this.g = s, p(this, "description", { configurable: !0, writable: !0, value: o });
    }
    if (t)
      return t;
    r.prototype.toString = function() {
      return this.g;
    };
    var n = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", i = 0;
    return e;
  }), f("Symbol.iterator", function(t) {
    if (t)
      return t;
    t = Symbol("Symbol.iterator");
    for (var e = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), r = 0; r < e.length; r++) {
      var n = v[e[r]];
      typeof n == "function" && typeof n.prototype[t] != "function" && p(n.prototype, t, { configurable: !0, writable: !0, value: function() {
        return M(c(this));
      } });
    }
    return t;
  });
  function M(t) {
    return t = { next: t }, t[Symbol.iterator] = function() {
      return this;
    }, t;
  }
  function y(t) {
    var e = typeof Symbol < "u" && Symbol.iterator && t[Symbol.iterator];
    return e ? e.call(t) : { next: c(t) };
  }
  function V(t) {
    if (!(t instanceof Array)) {
      t = y(t);
      for (var e, r = []; !(e = t.next()).done; )
        r.push(e.value);
      t = r;
    }
    return t;
  }
  var _ = typeof Object.create == "function" ? Object.create : function(t) {
    function e() {
    }
    return e.prototype = t, new e();
  }, U;
  if (typeof Object.setPrototypeOf == "function")
    U = Object.setPrototypeOf;
  else {
    var r2;
    t: {
      var W = { a: !0 }, D = {};
      try {
        D.__proto__ = W, r2 = D.a;
        break t;
      } catch {
      }
      r2 = !1;
    }
    U = r2 ? function(t, e) {
      if (t.__proto__ = e, t.__proto__ !== e)
        throw new TypeError(t + " is not extensible");
      return t;
    } : null;
  }
  var X = U;
  function J(t, e) {
    if (t.prototype = _(e.prototype), t.prototype.constructor = t, X)
      X(t, e);
    else
      for (var r in e)
        if (r != "prototype")
          if (Object.defineProperties) {
            var n = Object.getOwnPropertyDescriptor(e, r);
            n && Object.defineProperty(t, r, n);
          } else
            t[r] = e[r];
    t.ea = e.prototype;
  }
  function t2() {
    this.l = !1, this.i = null, this.h = void 0, this.g = 1, this.s = this.m = 0, this.j = null;
  }
  function y2(t) {
    if (t.l)
      throw new TypeError("Generator is already running");
    t.l = !0;
  }
  t2.prototype.o = function(t) {
    this.h = t;
  };
  function l(t, e) {
    t.j = { U: e, V: !0 }, t.g = t.m || t.s;
  }
  t2.prototype.return = function(t) {
    this.j = { return: t }, this.g = this.s;
  };
  function d(t, e, r) {
    return t.g = r, { value: e };
  }
  function e2(t) {
    this.g = new t2(), this.h = t;
  }
  function b2(t, e) {
    y2(t.g);
    var r = t.g.i;
    return r ? l2(t, "return" in r ? r.return : function(n) {
      return { value: n, done: !0 };
    }, e, t.g.return) : (t.g.return(e), Z(t));
  }
  function l2(t, e, r, n) {
    try {
      var i = e.call(t.g.i, r);
      if (!(i instanceof Object))
        throw new TypeError("Iterator result " + i + " is not an object");
      if (!i.done)
        return t.g.l = !1, i;
      var s = i.value;
    } catch (o) {
      return t.g.i = null, l(t.g, o), Z(t);
    }
    return t.g.i = null, n.call(t.g, s), Z(t);
  }
  function Z(t) {
    for (; t.g.g; )
      try {
        var e = t.h(t.g);
        if (e)
          return t.g.l = !1, { value: e.value, done: !1 };
      } catch (r) {
        t.g.h = void 0, l(t.g, r);
      }
    if (t.g.l = !1, t.g.j) {
      if (e = t.g.j, t.g.j = null, e.V)
        throw e.U;
      return { value: e.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function I2(t) {
    this.next = function(e) {
      return y2(t.g), t.g.i ? e = l2(t, t.g.i.next, e, t.g.o) : (t.g.o(e), e = Z(t)), e;
    }, this.throw = function(e) {
      return y2(t.g), t.g.i ? e = l2(t, t.g.i.throw, e, t.g.o) : (l(t.g, e), e = Z(t)), e;
    }, this.return = function(e) {
      return b2(t, e);
    }, this[Symbol.iterator] = function() {
      return this;
    };
  }
  function K(t, e) {
    return e = new I2(new e2(e)), X && t.prototype && X(e, t.prototype), e;
  }
  function $(t, e) {
    t instanceof String && (t += "");
    var r = 0, n = !1, i = { next: function() {
      if (!n && r < t.length) {
        var s = r++;
        return { value: e(s, t[s]), done: !1 };
      }
      return n = !0, { done: !0, value: void 0 };
    } };
    return i[Symbol.iterator] = function() {
      return i;
    }, i;
  }
  var o2 = typeof Object.assign == "function" ? Object.assign : function(t, e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      if (n)
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  };
  f("Object.assign", function(t) {
    return t || o2;
  }), f("Promise", function(t) {
    function e(o) {
      this.h = 0, this.i = void 0, this.g = [], this.o = !1;
      var a = this.j();
      try {
        o(a.resolve, a.reject);
      } catch (u) {
        a.reject(u);
      }
    }
    function r() {
      this.g = null;
    }
    function n(o) {
      return o instanceof e ? o : new e(function(a) {
        a(o);
      });
    }
    if (t)
      return t;
    r.prototype.h = function(o) {
      if (this.g == null) {
        this.g = [];
        var a = this;
        this.i(function() {
          a.l();
        });
      }
      this.g.push(o);
    };
    var i = v.setTimeout;
    r.prototype.i = function(o) {
      i(o, 0);
    }, r.prototype.l = function() {
      for (; this.g && this.g.length; ) {
        var o = this.g;
        this.g = [];
        for (var a = 0; a < o.length; ++a) {
          var u = o[a];
          o[a] = null;
          try {
            u();
          } catch (h) {
            this.j(h);
          }
        }
      }
      this.g = null;
    }, r.prototype.j = function(o) {
      this.i(function() {
        throw o;
      });
    }, e.prototype.j = function() {
      function o(h) {
        return function(F) {
          u || (u = !0, h.call(a, F));
        };
      }
      var a = this, u = !1;
      return { resolve: o(this.C), reject: o(this.l) };
    }, e.prototype.C = function(o) {
      if (o === this)
        this.l(new TypeError("A Promise cannot resolve to itself"));
      else if (o instanceof e)
        this.F(o);
      else {
        t:
          switch (typeof o) {
            case "object":
              var a = o != null;
              break t;
            case "function":
              a = !0;
              break t;
            default:
              a = !1;
          }
        a ? this.u(o) : this.m(o);
      }
    }, e.prototype.u = function(o) {
      var a = void 0;
      try {
        a = o.then;
      } catch (u) {
        this.l(u);
        return;
      }
      typeof a == "function" ? this.G(a, o) : this.m(o);
    }, e.prototype.l = function(o) {
      this.s(2, o);
    }, e.prototype.m = function(o) {
      this.s(1, o);
    }, e.prototype.s = function(o, a) {
      if (this.h != 0)
        throw Error("Cannot settle(" + o + ", " + a + "): Promise already settled in state" + this.h);
      this.h = o, this.i = a, this.h === 2 && this.D(), this.A();
    }, e.prototype.D = function() {
      var o = this;
      i(function() {
        if (o.B()) {
          var a = v.console;
          typeof a < "u" && a.error(o.i);
        }
      }, 1);
    }, e.prototype.B = function() {
      if (this.o)
        return !1;
      var o = v.CustomEvent, a = v.Event, u = v.dispatchEvent;
      return typeof u > "u" ? !0 : (typeof o == "function" ? o = new o("unhandledrejection", { cancelable: !0 }) : typeof a == "function" ? o = new a("unhandledrejection", { cancelable: !0 }) : (o = v.document.createEvent("CustomEvent"), o.initCustomEvent("unhandledrejection", !1, !0, o)), o.promise = this, o.reason = this.i, u(o));
    }, e.prototype.A = function() {
      if (this.g != null) {
        for (var o = 0; o < this.g.length; ++o)
          s.h(this.g[o]);
        this.g = null;
      }
    };
    var s = new r();
    return e.prototype.F = function(o) {
      var a = this.j();
      o.J(a.resolve, a.reject);
    }, e.prototype.G = function(o, a) {
      var u = this.j();
      try {
        o.call(a, u.resolve, u.reject);
      } catch (h) {
        u.reject(h);
      }
    }, e.prototype.then = function(o, a) {
      function u(k, E) {
        return typeof k == "function" ? function(m) {
          try {
            h(k(m));
          } catch (A) {
            F(A);
          }
        } : E;
      }
      var h, F, C = new e(function(k, E) {
        h = k, F = E;
      });
      return this.J(u(o, h), u(a, F)), C;
    }, e.prototype.catch = function(o) {
      return this.then(void 0, o);
    }, e.prototype.J = function(o, a) {
      function u() {
        switch (h.h) {
          case 1:
            o(h.i);
            break;
          case 2:
            a(h.i);
            break;
          default:
            throw Error("Unexpected state: " + h.h);
        }
      }
      var h = this;
      this.g == null ? s.h(u) : this.g.push(u), this.o = !0;
    }, e.resolve = n, e.reject = function(o) {
      return new e(function(a, u) {
        u(o);
      });
    }, e.race = function(o) {
      return new e(function(a, u) {
        for (var h = y(o), F = h.next(); !F.done; F = h.next())
          n(F.value).J(a, u);
      });
    }, e.all = function(o) {
      var a = y(o), u = a.next();
      return u.done ? n([]) : new e(function(h, F) {
        function C(m) {
          return function(A) {
            k[m] = A, E--, E == 0 && h(k);
          };
        }
        var k = [], E = 0;
        do
          k.push(void 0), E++, n(u.value).J(C(k.length - 1), F), u = a.next();
        while (!u.done);
      });
    }, e;
  }), f("Object.is", function(t) {
    return t || function(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    };
  }), f("Array.prototype.includes", function(t) {
    return t || function(e, r) {
      var n = this;
      n instanceof String && (n = String(n));
      var i = n.length;
      for (r = r || 0, 0 > r && (r = Math.max(r + i, 0)); r < i; r++) {
        var s = n[r];
        if (s === e || Object.is(s, e))
          return !0;
      }
      return !1;
    };
  }), f("String.prototype.includes", function(t) {
    return t || function(e, r) {
      if (this == null)
        throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
      if (e instanceof RegExp)
        throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      return this.indexOf(e, r || 0) !== -1;
    };
  }), f("Array.prototype.keys", function(t) {
    return t || function() {
      return $(this, function(e) {
        return e;
      });
    };
  });
  var w2 = this || self;
  function Q(t, e) {
    t = t.split(".");
    var r = w2;
    t[0] in r || typeof r.execScript > "u" || r.execScript("var " + t[0]);
    for (var n; t.length && (n = t.shift()); )
      t.length || e === void 0 ? r[n] && r[n] !== Object.prototype[n] ? r = r[n] : r = r[n] = {} : r[n] = e;
  }
  function e1(t, e) {
    return e = String.fromCharCode.apply(null, e), t == null ? e : t + e;
  }
  var r1, I1 = typeof TextDecoder < "u", n1, B1 = typeof TextEncoder < "u";
  function i1(t) {
    if (B1)
      t = (n1 || (n1 = new TextEncoder())).encode(t);
    else {
      var e = void 0;
      e = e === void 0 ? !1 : e;
      for (var r = 0, n = new Uint8Array(3 * t.length), i = 0; i < t.length; i++) {
        var s = t.charCodeAt(i);
        if (128 > s)
          n[r++] = s;
        else {
          if (2048 > s)
            n[r++] = s >> 6 | 192;
          else {
            if (55296 <= s && 57343 >= s) {
              if (56319 >= s && i < t.length) {
                var o = t.charCodeAt(++i);
                if (56320 <= o && 57343 >= o) {
                  s = 1024 * (s - 55296) + o - 56320 + 65536, n[r++] = s >> 18 | 240, n[r++] = s >> 12 & 63 | 128, n[r++] = s >> 6 & 63 | 128, n[r++] = s & 63 | 128;
                  continue;
                } else
                  i--;
              }
              if (e)
                throw Error("Found an unpaired surrogate");
              s = 65533;
            }
            n[r++] = s >> 12 | 224, n[r++] = s >> 6 & 63 | 128;
          }
          n[r++] = s & 63 | 128;
        }
      }
      t = n.subarray(0, r);
    }
    return t;
  }
  var o1 = {}, T2 = null;
  function W1(t, e) {
    e === void 0 && (e = 0), s1(), e = o1[e];
    for (var r = Array(Math.floor(t.length / 3)), n = e[64] || "", i = 0, s = 0; i < t.length - 2; i += 3) {
      var o = t[i], a = t[i + 1], u = t[i + 2], h = e[o >> 2];
      o = e[(o & 3) << 4 | a >> 4], a = e[(a & 15) << 2 | u >> 6], u = e[u & 63], r[s++] = h + o + a + u;
    }
    switch (h = 0, u = n, t.length - i) {
      case 2:
        h = t[i + 1], u = e[(h & 15) << 2] || n;
      case 1:
        t = t[i], r[s] = e[t >> 2] + e[(t & 3) << 4 | h >> 4] + u + n;
    }
    return r.join("");
  }
  function X1(t) {
    var e = t.length, r = 3 * e / 4;
    r % 3 ? r = Math.floor(r) : "=.".indexOf(t[e - 1]) != -1 && (r = "=.".indexOf(t[e - 2]) != -1 ? r - 2 : r - 1);
    var n = new Uint8Array(r), i = 0;
    return H1(t, function(s) {
      n[i++] = s;
    }), n.subarray(0, i);
  }
  function H1(t, e) {
    function r(u) {
      for (; n < t.length; ) {
        var h = t.charAt(n++), F = T2[h];
        if (F != null)
          return F;
        if (!/^[\s\xa0]*$/.test(h))
          throw Error("Unknown base64 encoding at char: " + h);
      }
      return u;
    }
    s1();
    for (var n = 0; ; ) {
      var i = r(-1), s = r(0), o = r(64), a = r(64);
      if (a === 64 && i === -1)
        break;
      e(i << 2 | s >> 4), o != 64 && (e(s << 4 & 240 | o >> 2), a != 64 && e(o << 6 & 192 | a));
    }
  }
  function s1() {
    if (!T2) {
      T2 = {};
      for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], r = 0; 5 > r; r++) {
        var n = t.concat(e[r].split(""));
        o1[r] = n;
        for (var i = 0; i < n.length; i++) {
          var s = n[i];
          T2[s] === void 0 && (T2[s] = i);
        }
      }
    }
  }
  var Y1 = typeof Uint8Array.prototype.slice == "function", a1;
  function u1(t, e, r) {
    return e === r ? a1 || (a1 = new Uint8Array(0)) : Y1 ? t.slice(e, r) : new Uint8Array(t.subarray(e, r));
  }
  var a2 = 0, f2 = 0;
  function _2(t, e) {
    e = e === void 0 ? {} : e, e = e.v === void 0 ? !1 : e.v, this.h = null, this.g = this.j = this.l = 0, this.m = !1, this.v = e, t && c1(this, t);
  }
  function c1(t, e) {
    e = e.constructor === Uint8Array ? e : e.constructor === ArrayBuffer ? new Uint8Array(e) : e.constructor === Array ? new Uint8Array(e) : e.constructor === String ? X1(e) : e instanceof Uint8Array ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(0), t.h = e, t.l = 0, t.j = t.h.length, t.g = t.l;
  }
  _2.prototype.reset = function() {
    this.g = this.l;
  };
  function S2(t) {
    for (var e = 128, r = 0, n = 0, i = 0; 4 > i && 128 <= e; i++)
      e = t.h[t.g++], r |= (e & 127) << 7 * i;
    if (128 <= e && (e = t.h[t.g++], r |= (e & 127) << 28, n |= (e & 127) >> 4), 128 <= e)
      for (i = 0; 5 > i && 128 <= e; i++)
        e = t.h[t.g++], n |= (e & 127) << 7 * i + 3;
    if (128 > e)
      return t = r >>> 0, e = n >>> 0, (n = e & 2147483648) && (t = ~t + 1 >>> 0, e = ~e >>> 0, t == 0 && (e = e + 1 >>> 0)), t = 4294967296 * e + (t >>> 0), n ? -t : t;
    t.m = !0;
  }
  _2.prototype.i = function() {
    var t = this.h, e = t[this.g], r = e & 127;
    return 128 > e ? (this.g += 1, r) : (e = t[this.g + 1], r |= (e & 127) << 7, 128 > e ? (this.g += 2, r) : (e = t[this.g + 2], r |= (e & 127) << 14, 128 > e ? (this.g += 3, r) : (e = t[this.g + 3], r |= (e & 127) << 21, 128 > e ? (this.g += 4, r) : (e = t[this.g + 4], r |= (e & 15) << 28, 128 > e ? (this.g += 5, r >>> 0) : (this.g += 5, 128 <= t[this.g++] && 128 <= t[this.g++] && 128 <= t[this.g++] && 128 <= t[this.g++] && this.g++, r)))));
  }, _2.prototype.o = function() {
    var t = this.h[this.g], e = this.h[this.g + 1], r = this.h[this.g + 2], n = this.h[this.g + 3];
    return this.g += 4, r = (t << 0 | e << 8 | r << 16 | n << 24) >>> 0, t = 2 * (r >> 31) + 1, e = r >>> 23 & 255, r &= 8388607, e == 255 ? r ? NaN : 1 / 0 * t : e == 0 ? t * Math.pow(2, -149) * r : t * Math.pow(2, e - 150) * (r + Math.pow(2, 23));
  };
  var l1 = [];
  function R2() {
    this.g = new Uint8Array(64), this.h = 0;
  }
  R2.prototype.push = function(t) {
    if (!(this.h + 1 < this.g.length)) {
      var e = this.g;
      this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length)), this.g.set(e);
    }
    this.g[this.h++] = t;
  }, R2.prototype.length = function() {
    return this.h;
  }, R2.prototype.end = function() {
    var t = this.g, e = this.h;
    return this.h = 0, u1(t, 0, e);
  };
  function h2(t, e) {
    for (; 127 < e; )
      t.push(e & 127 | 128), e >>>= 7;
    t.push(e);
  }
  function j2(t) {
    var e = {}, r = e.N === void 0 ? !1 : e.N;
    this.o = { v: e.v === void 0 ? !1 : e.v }, this.N = r, e = this.o, l1.length ? (r = l1.pop(), e && (r.v = e.v), t && c1(r, t), t = r) : t = new _2(t, e), this.g = t, this.m = this.g.g, this.h = this.i = this.l = -1, this.j = !1;
  }
  j2.prototype.reset = function() {
    this.g.reset(), this.h = this.l = -1;
  };
  function u2(t) {
    var e = t.g;
    if ((e = e.g == e.j) || (e = t.j) || (e = t.g, e = e.m || 0 > e.g || e.g > e.j), e)
      return !1;
    t.m = t.g.g, e = t.g.i();
    var r = e & 7;
    return r != 0 && r != 5 && r != 1 && r != 2 && r != 3 && r != 4 ? (t.j = !0, !1) : (t.i = e, t.l = e >>> 3, t.h = r, !0);
  }
  function F2(t) {
    switch (t.h) {
      case 0:
        if (t.h != 0)
          F2(t);
        else {
          for (t = t.g; t.h[t.g] & 128; )
            t.g++;
          t.g++;
        }
        break;
      case 1:
        t.h != 1 ? F2(t) : (t = t.g, t.g += 8);
        break;
      case 2:
        if (t.h != 2)
          F2(t);
        else {
          var e = t.g.i();
          t = t.g, t.g += e;
        }
        break;
      case 5:
        t.h != 5 ? F2(t) : (t = t.g, t.g += 4);
        break;
      case 3:
        e = t.l;
        do {
          if (!u2(t)) {
            t.j = !0;
            break;
          }
          if (t.h == 4) {
            t.l != e && (t.j = !0);
            break;
          }
          F2(t);
        } while (1);
        break;
      default:
        t.j = !0;
    }
  }
  function L2(t, e, r) {
    var n = t.g.j, i = t.g.i(), s = t.g.g + i;
    if (t.g.j = s, r(e, t), r = s - t.g.g, r !== 0)
      throw Error("Message parsing ended unexpectedly. Expected to read " + i + " bytes, instead read " + (i - r) + " bytes, either the data ended unexpectedly or the message misreported its own length");
    return t.g.g = s, t.g.j = n, e;
  }
  function n2(t) {
    return t.g.o();
  }
  function f1(t) {
    var e = t.g.i();
    t = t.g;
    var r = t.g;
    t.g += e, t = t.h;
    var n;
    if (I1)
      (n = r1) || (n = r1 = new TextDecoder("utf-8", { fatal: !1 })), n = n.decode(t.subarray(r, r + e));
    else {
      e = r + e;
      for (var i = [], s = null, o, a, u; r < e; )
        o = t[r++], 128 > o ? i.push(o) : 224 > o ? r >= e ? i.push(65533) : (a = t[r++], 194 > o || (a & 192) !== 128 ? (r--, i.push(65533)) : i.push((o & 31) << 6 | a & 63)) : 240 > o ? r >= e - 1 ? i.push(65533) : (a = t[r++], (a & 192) !== 128 || o === 224 && 160 > a || o === 237 && 160 <= a || ((n = t[r++]) & 192) !== 128 ? (r--, i.push(65533)) : i.push((o & 15) << 12 | (a & 63) << 6 | n & 63)) : 244 >= o ? r >= e - 2 ? i.push(65533) : (a = t[r++], (a & 192) !== 128 || (o << 28) + (a - 144) >> 30 !== 0 || ((n = t[r++]) & 192) !== 128 || ((u = t[r++]) & 192) !== 128 ? (r--, i.push(65533)) : (o = (o & 7) << 18 | (a & 63) << 12 | (n & 63) << 6 | u & 63, o -= 65536, i.push((o >> 10 & 1023) + 55296, (o & 1023) + 56320))) : i.push(65533), 8192 <= i.length && (s = e1(s, i), i.length = 0);
      n = e1(s, i);
    }
    return n;
  }
  function h1(t, e, r) {
    var n = t.g.i();
    for (n = t.g.g + n; t.g.g < n; )
      r.push(e.call(t.g));
  }
  function g1(t, e) {
    t.h == 2 ? h1(t, _2.prototype.o, e) : e.push(n2(t));
  }
  function B2() {
    this.h = [], this.i = 0, this.g = new R2();
  }
  function A2(t, e) {
    e.length !== 0 && (t.h.push(e), t.i += e.length);
  }
  function W2(t) {
    var e = t.i + t.g.length();
    if (e === 0)
      return new Uint8Array(0);
    e = new Uint8Array(e);
    for (var r = t.h, n = r.length, i = 0, s = 0; s < n; s++) {
      var o = r[s];
      o.length !== 0 && (e.set(o, i), i += o.length);
    }
    return r = t.g, n = r.h, n !== 0 && (e.set(r.g.subarray(0, n), i), r.h = 0), t.h = [e], e;
  }
  function i2(t, e, r) {
    if (r != null) {
      h2(t.g, 8 * e + 5), t = t.g;
      var n = r;
      n = (r = 0 > n ? 1 : 0) ? -n : n, n === 0 ? 0 < 1 / n ? a2 = f2 = 0 : (f2 = 0, a2 = 2147483648) : isNaN(n) ? (f2 = 0, a2 = 2147483647) : 34028234663852886e22 < n ? (f2 = 0, a2 = (r << 31 | 2139095040) >>> 0) : 11754943508222875e-54 > n ? (n = Math.round(n / Math.pow(2, -149)), f2 = 0, a2 = (r << 31 | n) >>> 0) : (e = Math.floor(Math.log(n) / Math.LN2), n *= Math.pow(2, -e), n = Math.round(8388608 * n), 16777216 <= n && ++e, f2 = 0, a2 = (r << 31 | e + 127 << 23 | n & 8388607) >>> 0), r = a2, t.push(r >>> 0 & 255), t.push(r >>> 8 & 255), t.push(r >>> 16 & 255), t.push(r >>> 24 & 255);
    }
  }
  var p1 = typeof Uint8Array == "function";
  function v1(t, e, r) {
    if (t != null)
      return typeof t == "object" ? p1 && t instanceof Uint8Array ? r(t) : d1(t, e, r) : e(t);
  }
  function d1(t, e, r) {
    if (Array.isArray(t)) {
      for (var n = Array(t.length), i = 0; i < t.length; i++)
        n[i] = v1(t[i], e, r);
      return Array.isArray(t) && t.W && k2(n), n;
    }
    n = {};
    for (i in t)
      n[i] = v1(t[i], e, r);
    return n;
  }
  function D1(t) {
    return typeof t == "number" ? isFinite(t) ? t : String(t) : t;
  }
  var J1 = { W: { value: !0, configurable: !0 } };
  function k2(t) {
    return Array.isArray(t) && !Object.isFrozen(t) && Object.defineProperties(t, J1), t;
  }
  var m1;
  function H(t, e, r) {
    var n = m1;
    m1 = null, t || (t = n), n = this.constructor.ca, t || (t = n ? [n] : []), this.j = n ? 0 : -1, this.m = this.g = null, this.h = t;
    t: {
      if (n = this.h.length, t = n - 1, n && (n = this.h[t], !(n === null || typeof n != "object" || Array.isArray(n) || p1 && n instanceof Uint8Array))) {
        this.l = t - this.j, this.i = n;
        break t;
      }
      e !== void 0 && -1 < e ? (this.l = Math.max(e, t + 1 - this.j), this.i = null) : this.l = Number.MAX_VALUE;
    }
    if (r)
      for (e = 0; e < r.length; e++)
        t = r[e], t < this.l ? (t += this.j, (n = this.h[t]) ? k2(n) : this.h[t] = x2) : (y1(this), (n = this.i[t]) ? k2(n) : this.i[t] = x2);
  }
  var x2 = Object.freeze(k2([]));
  function y1(t) {
    var e = t.l + t.j;
    t.h[e] || (t.i = t.h[e] = {});
  }
  function I(t, e, r) {
    return e === -1 ? null : (r === void 0 ? 0 : r) || e >= t.l ? t.i ? t.i[e] : void 0 : t.h[e + t.j];
  }
  function P2(t, e) {
    var r = r === void 0 ? !1 : r, n = I(t, e, r);
    return n == null && (n = x2), n === x2 && (n = k2([]), b(t, e, n, r)), n;
  }
  function w1(t) {
    var e = P2(t, 3);
    if (t.m || (t.m = {}), !t.m[3]) {
      for (var r = 0; r < e.length; r++)
        e[r] = +e[r];
      t.m[3] = !0;
    }
    return e;
  }
  function p2(t, e, r) {
    return t = I(t, e), t == null ? r : t;
  }
  function s2(t, e, r) {
    return t = I(t, e), t = t == null ? t : +t, t == null ? r === void 0 ? 0 : r : t;
  }
  function b(t, e, r, n) {
    (n === void 0 ? 0 : n) || e >= t.l ? (y1(t), t.i[e] = r) : t.h[e + t.j] = r;
  }
  function _1(t, e, r) {
    if (r === -1)
      return null;
    if (t.g || (t.g = {}), !t.g[r]) {
      var n = I(t, r, !1);
      n && (t.g[r] = new e(n));
    }
    return t.g[r];
  }
  function C2(t, e) {
    t.g || (t.g = {});
    var r = t.g[1];
    if (!r) {
      var n = P2(t, 1);
      r = [];
      for (var i = 0; i < n.length; i++)
        r[i] = new e(n[i]);
      t.g[1] = r;
    }
    return r;
  }
  function F1(t, e, r) {
    var n = n === void 0 ? !1 : n;
    t.g || (t.g = {});
    var i = r && v2(r);
    t.g[e] = r, b(t, e, i, n);
  }
  function A1(t, e, r, n) {
    var i = C2(t, r);
    e = e || new r(), t = P2(t, 1), n != null ? (i.splice(n, 0, e), t.splice(n, 0, v2(e))) : (i.push(e), t.push(v2(e)));
  }
  H.prototype.toJSON = function() {
    var t = v2(this);
    return d1(t, D1, W1);
  };
  function v2(t, e) {
    if (t.g)
      for (var r in t.g) {
        var n = t.g[r];
        if (Array.isArray(n))
          for (var i = 0; i < n.length; i++)
            n[i] && v2(n[i]);
        else
          n && v2(n);
      }
    return t.h;
  }
  H.prototype.toString = function() {
    return v2(this).toString();
  };
  function X2(t, e) {
    if (t = t.o) {
      A2(e, e.g.end());
      for (var r = 0; r < t.length; r++)
        A2(e, t[r]);
    }
  }
  function g2(t, e) {
    if (e.h == 4)
      return !1;
    var r = e.m;
    return F2(e), e.N || (e = u1(e.g.h, r, e.g.g), (r = t.o) ? r.push(e) : t.o = [e]), !0;
  }
  function d2(t) {
    H.call(this, t, -1, Z1);
  }
  J(d2, H), d2.prototype.getRows = function() {
    return I(this, 1);
  }, d2.prototype.getCols = function() {
    return I(this, 2);
  }, d2.prototype.getPackedDataList = function() {
    return w1(this);
  }, d2.prototype.getLayout = function() {
    return p2(this, 4, 0);
  };
  function K1(t, e) {
    for (; u2(e); )
      switch (e.i) {
        case 8:
          var r = e.g.i();
          b(t, 1, r);
          break;
        case 16:
          r = e.g.i(), b(t, 2, r);
          break;
        case 29:
        case 26:
          g1(e, t.getPackedDataList());
          break;
        case 32:
          r = S2(e.g), b(t, 4, r);
          break;
        default:
          if (!g2(t, e))
            return t;
      }
    return t;
  }
  var Z1 = [3];
  function z(t, e) {
    var r = void 0;
    return new (r || (r = Promise))(function(n, i) {
      function s(u) {
        try {
          a(e.next(u));
        } catch (h) {
          i(h);
        }
      }
      function o(u) {
        try {
          a(e.throw(u));
        } catch (h) {
          i(h);
        }
      }
      function a(u) {
        u.done ? n(u.value) : new r(function(h) {
          h(u.value);
        }).then(s, o);
      }
      a((e = e.apply(t, void 0)).next());
    });
  }
  function O2(t) {
    H.call(this, t);
  }
  J(O2, H);
  function $1(t, e) {
    for (; u2(e); )
      switch (e.i) {
        case 8:
          var r = e.g.i();
          b(t, 1, r);
          break;
        case 21:
          r = n2(e), b(t, 2, r);
          break;
        case 26:
          r = f1(e), b(t, 3, r);
          break;
        case 34:
          r = f1(e), b(t, 4, r);
          break;
        default:
          if (!g2(t, e))
            return t;
      }
    return t;
  }
  function H2(t) {
    H.call(this, t, -1, Q1);
  }
  J(H2, H), H2.prototype.addClassification = function(t, e) {
    return A1(this, t, O2, e), this;
  };
  var Q1 = [1];
  function E2(t) {
    H.call(this, t);
  }
  J(E2, H);
  function z1(t, e) {
    for (; u2(e); )
      switch (e.i) {
        case 13:
          var r = n2(e);
          b(t, 1, r);
          break;
        case 21:
          r = n2(e), b(t, 2, r);
          break;
        case 29:
          r = n2(e), b(t, 3, r);
          break;
        case 37:
          r = n2(e), b(t, 4, r);
          break;
        case 45:
          r = n2(e), b(t, 5, r);
          break;
        default:
          if (!g2(t, e))
            return t;
      }
    return t;
  }
  function E1(t) {
    H.call(this, t, -1, q1);
  }
  J(E1, H);
  function M1(t) {
    t: {
      var e = new E1();
      for (t = new j2(t); u2(t); )
        switch (t.i) {
          case 10:
            var r = L2(t, new E2(), z1);
            A1(e, r, E2, void 0);
            break;
          default:
            if (!g2(e, t))
              break t;
        }
    }
    return e;
  }
  var q1 = [1];
  function Y2(t) {
    H.call(this, t);
  }
  J(Y2, H);
  function m2(t) {
    H.call(this, t, -1, e3);
  }
  J(m2, H), m2.prototype.getVertexType = function() {
    return p2(this, 1, 0);
  }, m2.prototype.getPrimitiveType = function() {
    return p2(this, 2, 0);
  }, m2.prototype.getVertexBufferList = function() {
    return w1(this);
  }, m2.prototype.getIndexBufferList = function() {
    return P2(this, 4);
  };
  function t3(t, e) {
    for (; u2(e); )
      switch (e.i) {
        case 8:
          var r = S2(e.g);
          b(t, 1, r);
          break;
        case 16:
          r = S2(e.g), b(t, 2, r);
          break;
        case 29:
        case 26:
          g1(e, t.getVertexBufferList());
          break;
        case 32:
        case 34:
          r = e;
          var n = t.getIndexBufferList();
          r.h == 2 ? h1(r, _2.prototype.i, n) : n.push(r.g.i());
          break;
        default:
          if (!g2(t, e))
            return t;
      }
    return t;
  }
  var e3 = [3, 4];
  function U2(t) {
    H.call(this, t);
  }
  J(U2, H), U2.prototype.getMesh = function() {
    return _1(this, m2, 1);
  }, U2.prototype.getPoseTransformMatrix = function() {
    return _1(this, d2, 2);
  };
  function r3(t) {
    t: {
      var e = new U2();
      for (t = new j2(t); u2(t); )
        switch (t.i) {
          case 10:
            var r = L2(t, new m2(), t3);
            F1(e, 1, r);
            break;
          case 18:
            r = L2(t, new d2(), K1), F1(e, 2, r);
            break;
          default:
            if (!g2(e, t))
              break t;
        }
    }
    return e;
  }
  function T1(t, e, r) {
    if (r = t.createShader(r === 0 ? t.VERTEX_SHADER : t.FRAGMENT_SHADER), t.shaderSource(r, e), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS))
      throw Error(`Could not compile WebGL shader.

` + t.getShaderInfoLog(r));
    return r;
  }
  function n3(t) {
    return C2(t, O2).map(function(e) {
      return { index: p2(e, 1, 0), Y: s2(e, 2), label: I(e, 3) != null ? p2(e, 3, "") : void 0, displayName: I(e, 4) != null ? p2(e, 4, "") : void 0 };
    });
  }
  function j1(t) {
    return { x: s2(t, 1), y: s2(t, 2), z: s2(t, 3), visibility: I(t, 4) != null ? s2(t, 4) : void 0 };
  }
  function D2(t, e) {
    this.h = t, this.g = e, this.l = 0;
  }
  function k1(t, e, r) {
    return i3(t, e), typeof t.g.canvas.transferToImageBitmap == "function" ? Promise.resolve(t.g.canvas.transferToImageBitmap()) : r ? Promise.resolve(t.g.canvas) : typeof createImageBitmap == "function" ? createImageBitmap(t.g.canvas) : (t.i === void 0 && (t.i = document.createElement("canvas")), new Promise(function(n) {
      t.i.height = t.g.canvas.height, t.i.width = t.g.canvas.width, t.i.getContext("2d", {}).drawImage(t.g.canvas, 0, 0, t.g.canvas.width, t.g.canvas.height), n(t.i);
    }));
  }
  function i3(t, e) {
    var r = t.g;
    if (t.m === void 0) {
      var n = T1(r, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, 0), i = T1(r, `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`, 1), s = r.createProgram();
      if (r.attachShader(s, n), r.attachShader(s, i), r.linkProgram(s), !r.getProgramParameter(s, r.LINK_STATUS))
        throw Error(`Could not compile WebGL program.

` + r.getProgramInfoLog(s));
      n = t.m = s, r.useProgram(n), i = r.getUniformLocation(n, "sampler0"), t.j = { I: r.getAttribLocation(n, "aVertex"), H: r.getAttribLocation(n, "aTex"), da: i }, t.s = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, t.s), r.enableVertexAttribArray(t.j.I), r.vertexAttribPointer(t.j.I, 2, r.FLOAT, !1, 0, 0), r.bufferData(r.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), r.STATIC_DRAW), r.bindBuffer(r.ARRAY_BUFFER, null), t.o = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, t.o), r.enableVertexAttribArray(t.j.H), r.vertexAttribPointer(
        t.j.H,
        2,
        r.FLOAT,
        !1,
        0,
        0
      ), r.bufferData(r.ARRAY_BUFFER, new Float32Array([0, 1, 0, 0, 1, 0, 1, 1]), r.STATIC_DRAW), r.bindBuffer(r.ARRAY_BUFFER, null), r.uniform1i(i, 0);
    }
    n = t.j, r.useProgram(t.m), r.canvas.width = e.width, r.canvas.height = e.height, r.viewport(0, 0, e.width, e.height), r.activeTexture(r.TEXTURE0), t.h.bindTexture2d(e.glName), r.enableVertexAttribArray(n.I), r.bindBuffer(r.ARRAY_BUFFER, t.s), r.vertexAttribPointer(n.I, 2, r.FLOAT, !1, 0, 0), r.enableVertexAttribArray(n.H), r.bindBuffer(r.ARRAY_BUFFER, t.o), r.vertexAttribPointer(
      n.H,
      2,
      r.FLOAT,
      !1,
      0,
      0
    ), r.bindFramebuffer(r.DRAW_FRAMEBUFFER ? r.DRAW_FRAMEBUFFER : r.FRAMEBUFFER, null), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.colorMask(!0, !0, !0, !0), r.drawArrays(r.TRIANGLE_FAN, 0, 4), r.disableVertexAttribArray(n.I), r.disableVertexAttribArray(n.H), r.bindBuffer(r.ARRAY_BUFFER, null), t.h.bindTexture2d(0);
  }
  function o3(t) {
    this.g = t;
  }
  var s3 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]);
  function a3(t, e) {
    return e + t;
  }
  function O1(t, e) {
    window[t] = e;
  }
  function u3(t) {
    var e = document.createElement("script");
    return e.setAttribute("src", t), e.setAttribute("crossorigin", "anonymous"), new Promise(function(r) {
      e.addEventListener("load", function() {
        r();
      }, !1), e.addEventListener("error", function() {
        r();
      }, !1), document.body.appendChild(e);
    });
  }
  function c3() {
    return z(this, function t() {
      return K(t, function(e) {
        switch (e.g) {
          case 1:
            return e.m = 2, d(e, WebAssembly.instantiate(s3), 4);
          case 4:
            e.g = 3, e.m = 0;
            break;
          case 2:
            return e.m = 0, e.j = null, e.return(!1);
          case 3:
            return e.return(!0);
        }
      });
    });
  }
  function J2(t) {
    if (this.g = t, this.listeners = {}, this.j = {}, this.F = {}, this.m = {}, this.s = {}, this.G = this.o = this.R = !0, this.C = Promise.resolve(), this.P = "", this.B = {}, this.locateFile = t && t.locateFile || a3, typeof window == "object")
      var e = window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/";
    else if (typeof location < "u")
      e = location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/";
    else
      throw Error("solutions can only be loaded on a web page or in a web worker");
    if (this.S = e, t.options) {
      e = y(Object.keys(t.options));
      for (var r = e.next(); !r.done; r = e.next()) {
        r = r.value;
        var n = t.options[r].default;
        n !== void 0 && (this.j[r] = typeof n == "function" ? n() : n);
      }
    }
  }
  w = J2.prototype, w.close = function() {
    return this.i && this.i.delete(), Promise.resolve();
  };
  function l3(t, e) {
    return t.g.files === void 0 ? [] : typeof t.g.files == "function" ? t.g.files(e) : t.g.files;
  }
  function f3(t) {
    return z(t, function e() {
      var r = this, n, i, s, o, a, u, h, F, C, k, E;
      return K(e, function(m) {
        switch (m.g) {
          case 1:
            return n = r, r.R ? (i = l3(r, r.j), d(m, c3(), 2)) : m.return();
          case 2:
            if (s = m.h, typeof window == "object")
              return O1("createMediapipeSolutionsWasm", { locateFile: r.locateFile }), O1("createMediapipeSolutionsPackedAssets", { locateFile: r.locateFile }), u = i.filter(function(A) {
                return A.data !== void 0;
              }), h = i.filter(function(A) {
                return A.data === void 0;
              }), F = Promise.all(u.map(function(A) {
                var j = K2(n, A.url);
                if (A.path !== void 0) {
                  var S = A.path;
                  j = j.then(function(Y) {
                    return n.overrideFile(S, Y), Promise.resolve(Y);
                  });
                }
                return j;
              })), C = Promise.all(h.map(function(A) {
                return A.simd === void 0 || A.simd && s || !A.simd && !s ? u3(n.locateFile(A.url, n.S)) : Promise.resolve();
              })).then(function() {
                return z(n, function A() {
                  var j, S, Y = this;
                  return K(A, function(N) {
                    if (N.g == 1)
                      return j = window.createMediapipeSolutionsWasm, S = window.createMediapipeSolutionsPackedAssets, d(N, j(S), 2);
                    Y.h = N.h, N.g = 0;
                  });
                });
              }), k = function() {
                return z(n, function A() {
                  var j = this;
                  return K(A, function(S) {
                    return j.g.graph && j.g.graph.url ? S = d(S, K2(j, j.g.graph.url), 0) : (S.g = 0, S = void 0), S;
                  });
                });
              }(), d(m, Promise.all([C, F, k]), 7);
            if (typeof importScripts != "function")
              throw Error("solutions can only be loaded on a web page or in a web worker");
            return o = i.filter(function(A) {
              return A.simd === void 0 || A.simd && s || !A.simd && !s;
            }).map(function(A) {
              return n.locateFile(A.url, n.S);
            }), importScripts.apply(null, V(o)), d(m, createMediapipeSolutionsWasm(Module), 6);
          case 6:
            r.h = m.h, r.l = new OffscreenCanvas(1, 1), r.h.canvas = r.l, a = r.h.GL.createContext(
              r.l,
              { antialias: !1, alpha: !1, ba: typeof WebGL2RenderingContext < "u" ? 2 : 1 }
            ), r.h.GL.makeContextCurrent(a), m.g = 4;
            break;
          case 7:
            if (r.l = document.createElement("canvas"), E = r.l.getContext("webgl2", {}), !E && (E = r.l.getContext("webgl", {}), !E))
              return alert("Failed to create WebGL canvas context when passing video frame."), m.return();
            r.D = E, r.h.canvas = r.l, r.h.createContext(r.l, !0, !0, {});
          case 4:
            r.i = new r.h.SolutionWasm(), r.R = !1, m.g = 0;
        }
      });
    });
  }
  function h3(t) {
    return z(t, function e() {
      var r = this, n, i, s, o, a, u, h, F;
      return K(e, function(C) {
        if (C.g == 1) {
          if (r.g.graph && r.g.graph.url && r.P === r.g.graph.url)
            return C.return();
          if (r.o = !0, !r.g.graph || !r.g.graph.url) {
            C.g = 2;
            return;
          }
          return r.P = r.g.graph.url, d(C, K2(r, r.g.graph.url), 3);
        }
        for (C.g != 2 && (n = C.h, r.i.loadGraph(n)), i = y(Object.keys(r.B)), s = i.next(); !s.done; s = i.next())
          o = s.value, r.i.overrideFile(o, r.B[o]);
        if (r.B = {}, r.g.listeners)
          for (a = y(r.g.listeners), u = a.next(); !u.done; u = a.next())
            h = u.value, d3(r, h);
        F = r.j, r.j = {}, r.setOptions(F), C.g = 0;
      });
    });
  }
  w.reset = function() {
    return z(this, function t() {
      var e = this;
      return K(t, function(r) {
        e.i && (e.i.reset(), e.m = {}, e.s = {}), r.g = 0;
      });
    });
  }, w.setOptions = function(t, e) {
    var r = this;
    if (e = e || this.g.options) {
      for (var n = [], i = [], s = {}, o = y(Object.keys(t)), a = o.next(); !a.done; s = { K: s.K, L: s.L }, a = o.next()) {
        var u = a.value;
        u in this.j && this.j[u] === t[u] || (this.j[u] = t[u], a = e[u], a !== void 0 && (a.onChange && (s.K = a.onChange, s.L = t[u], n.push(function(h) {
          return function() {
            return z(r, function F() {
              var C, k = this;
              return K(F, function(E) {
                if (E.g == 1)
                  return d(E, h.K(h.L), 2);
                C = E.h, C === !0 && (k.o = !0), E.g = 0;
              });
            });
          };
        }(s))), a.graphOptionXref && (u = { valueNumber: a.type === 1 ? t[u] : 0, valueBoolean: a.type === 0 ? t[u] : !1, valueString: a.type === 2 ? t[u] : "" }, a = Object.assign(Object.assign(Object.assign({}, { calculatorName: "", calculatorIndex: 0 }), a.graphOptionXref), u), i.push(a))));
      }
      (n.length !== 0 || i.length !== 0) && (this.o = !0, this.A = (this.A === void 0 ? [] : this.A).concat(i), this.u = (this.u === void 0 ? [] : this.u).concat(n));
    }
  };
  function g3(t) {
    return z(t, function e() {
      var r = this, n, i, s, o, a, u, h;
      return K(e, function(F) {
        switch (F.g) {
          case 1:
            if (!r.o)
              return F.return();
            if (!r.u) {
              F.g = 2;
              break;
            }
            n = y(r.u), i = n.next();
          case 3:
            if (i.done) {
              F.g = 5;
              break;
            }
            return s = i.value, d(F, s(), 4);
          case 4:
            i = n.next(), F.g = 3;
            break;
          case 5:
            r.u = void 0;
          case 2:
            if (r.A) {
              for (o = new r.h.GraphOptionChangeRequestList(), a = y(r.A), u = a.next(); !u.done; u = a.next())
                h = u.value, o.push_back(h);
              r.i.changeOptions(o), o.delete(), r.A = void 0;
            }
            r.o = !1, F.g = 0;
        }
      });
    });
  }
  w.initialize = function() {
    return z(this, function t() {
      var e = this;
      return K(t, function(r) {
        return r.g == 1 ? d(r, f3(e), 2) : r.g != 3 ? d(r, h3(e), 3) : d(r, g3(e), 0);
      });
    });
  };
  function K2(t, e) {
    return z(t, function r() {
      var n = this, i, s;
      return K(r, function(o) {
        return e in n.F ? o.return(n.F[e]) : (i = n.locateFile(e, ""), s = fetch(i).then(function(a) {
          return a.arrayBuffer();
        }), n.F[e] = s, o.return(s));
      });
    });
  }
  w.overrideFile = function(t, e) {
    this.i ? this.i.overrideFile(t, e) : this.B[t] = e;
  }, w.clearOverriddenFiles = function() {
    this.B = {}, this.i && this.i.clearOverriddenFiles();
  }, w.send = function(t, e) {
    return z(this, function r() {
      var n = this, i, s, o, a, u, h, F, C, k;
      return K(r, function(E) {
        switch (E.g) {
          case 1:
            return n.g.inputs ? (i = 1e3 * (e == null ? performance.now() : e), d(E, n.C, 2)) : E.return();
          case 2:
            return d(E, n.initialize(), 3);
          case 3:
            for (s = new n.h.PacketDataList(), o = y(Object.keys(t)), a = o.next(); !a.done; a = o.next())
              if (u = a.value, h = n.g.inputs[u]) {
                t: {
                  var m = n, A = t[u];
                  switch (h.type) {
                    case "video":
                      var j = m.m[h.stream];
                      if (j || (j = new D2(m.h, m.D), m.m[h.stream] = j), m = j, m.l === 0 && (m.l = m.h.createTexture()), typeof HTMLVideoElement < "u" && A instanceof HTMLVideoElement) {
                        var S = A.videoWidth;
                        j = A.videoHeight;
                      } else
                        typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (S = A.naturalWidth, j = A.naturalHeight) : (S = A.width, j = A.height);
                      j = { glName: m.l, width: S, height: j }, S = m.g, S.canvas.width = j.width, S.canvas.height = j.height, S.activeTexture(S.TEXTURE0), m.h.bindTexture2d(m.l), S.texImage2D(S.TEXTURE_2D, 0, S.RGBA, S.RGBA, S.UNSIGNED_BYTE, A), m.h.bindTexture2d(0), m = j;
                      break t;
                    case "detections":
                      for (j = m.m[h.stream], j || (j = new o3(m.h), m.m[h.stream] = j), m = j, m.data || (m.data = new m.g.DetectionListData()), m.data.reset(A.length), j = 0; j < A.length; ++j) {
                        S = A[j];
                        var Y = m.data, N = Y.setBoundingBox, q = j, B = S.T, T = new Y2();
                        b(T, 1, B.Z), b(T, 2, B.$), b(T, 3, B.height), b(T, 4, B.width), b(T, 5, B.rotation), b(T, 6, B.X);
                        var R = B = new B2();
                        i2(R, 1, I(T, 1)), i2(R, 2, I(T, 2)), i2(R, 3, I(T, 3)), i2(R, 4, I(T, 4)), i2(R, 5, I(T, 5));
                        var x = I(T, 6);
                        if (x != null && x != null) {
                          h2(R.g, 48);
                          var O = R.g, L = x;
                          x = 0 > L, L = Math.abs(L);
                          var P = L >>> 0;
                          for (L = Math.floor((L - P) / 4294967296), L >>>= 0, x && (L = ~L >>> 0, P = (~P >>> 0) + 1, 4294967295 < P && (P = 0, L++, 4294967295 < L && (L = 0))), a2 = P, f2 = L, x = a2, P = f2; 0 < P || 127 < x; )
                            O.push(x & 127 | 128), x = (x >>> 7 | P << 25) >>> 0, P >>>= 7;
                          O.push(x);
                        }
                        if (X2(T, R), B = W2(B), N.call(Y, q, B), S.O)
                          for (Y = 0; Y < S.O.length; ++Y)
                            T = S.O[Y], R = !!T.visibility, N = m.data, q = N.addNormalizedLandmark, B = j, T = Object.assign(Object.assign({}, T), { visibility: R ? T.visibility : 0 }), R = new E2(), b(R, 1, T.x), b(R, 2, T.y), b(R, 3, T.z), T.visibility && b(R, 4, T.visibility), O = T = new B2(), i2(O, 1, I(R, 1)), i2(O, 2, I(R, 2)), i2(O, 3, I(R, 3)), i2(O, 4, I(R, 4)), i2(O, 5, I(R, 5)), X2(R, O), T = W2(T), q.call(N, B, T);
                        if (S.M)
                          for (Y = 0; Y < S.M.length; ++Y) {
                            if (N = m.data, q = N.addClassification, B = j, T = S.M[Y], R = new O2(), b(R, 2, T.Y), T.index && b(R, 1, T.index), T.label && b(R, 3, T.label), T.displayName && b(R, 4, T.displayName), O = T = new B2(), P = I(R, 1), P != null && P != null)
                              if (h2(O.g, 8), x = O.g, 0 <= P)
                                h2(x, P);
                              else {
                                for (L = 0; 9 > L; L++)
                                  x.push(P & 127 | 128), P >>= 7;
                                x.push(1);
                              }
                            i2(O, 2, I(R, 2)), x = I(R, 3), x != null && (x = i1(x), h2(O.g, 26), h2(O.g, x.length), A2(O, O.g.end()), A2(O, x)), x = I(R, 4), x != null && (x = i1(x), h2(O.g, 34), h2(O.g, x.length), A2(O, O.g.end()), A2(O, x)), X2(R, O), T = W2(T), q.call(N, B, T);
                          }
                      }
                      m = m.data;
                      break t;
                    default:
                      m = {};
                  }
                }
                switch (F = m, C = h.stream, h.type) {
                  case "video":
                    s.pushTexture2d(Object.assign(Object.assign({}, F), { stream: C, timestamp: i }));
                    break;
                  case "detections":
                    k = F, k.stream = C, k.timestamp = i, s.pushDetectionList(k);
                    break;
                  default:
                    throw Error("Unknown input config type: '" + h.type + "'");
                }
              }
            return n.i.send(s), d(E, n.C, 4);
          case 4:
            s.delete(), E.g = 0;
        }
      });
    });
  };
  function p3(t, e, r) {
    return z(t, function n() {
      var i, s, o, a, u, h, F = this, C, k, E, m, A, j, S, Y;
      return K(n, function(N) {
        switch (N.g) {
          case 1:
            if (!r)
              return N.return(e);
            for (i = {}, s = 0, o = y(Object.keys(r)), a = o.next(); !a.done; a = o.next())
              u = a.value, h = r[u], typeof h != "string" && h.type === "texture" && e[h.stream] !== void 0 && ++s;
            1 < s && (F.G = !1), C = y(Object.keys(r)), a = C.next();
          case 2:
            if (a.done) {
              N.g = 4;
              break;
            }
            if (k = a.value, E = r[k], typeof E == "string")
              return S = i, Y = k, d(N, v3(F, k, e[E]), 14);
            if (m = e[E.stream], E.type === "detection_list") {
              if (m) {
                for (var q = m.getRectList(), B = m.getLandmarksList(), T = m.getClassificationsList(), R = [], x = 0; x < q.size(); ++x) {
                  var O = q.get(x);
                  t: {
                    var L = new Y2();
                    for (O = new j2(O); u2(O); )
                      switch (O.i) {
                        case 13:
                          var P = n2(O);
                          b(L, 1, P);
                          break;
                        case 21:
                          P = n2(O), b(L, 2, P);
                          break;
                        case 29:
                          P = n2(O), b(L, 3, P);
                          break;
                        case 37:
                          P = n2(O), b(L, 4, P);
                          break;
                        case 45:
                          P = n2(O), b(L, 5, P);
                          break;
                        case 48:
                          P = S2(O.g), b(L, 6, P);
                          break;
                        default:
                          if (!g2(L, O))
                            break t;
                      }
                  }
                  L = { Z: s2(L, 1), $: s2(L, 2), height: s2(L, 3), width: s2(L, 4), rotation: s2(L, 5, 0), X: p2(L, 6, 0) }, O = C2(M1(B.get(x)), E2).map(j1);
                  var M2 = T.get(x);
                  t:
                    for (P = new H2(), M2 = new j2(M2); u2(M2); )
                      switch (M2.i) {
                        case 10:
                          P.addClassification(L2(M2, new O2(), $1));
                          break;
                        default:
                          if (!g2(P, M2))
                            break t;
                      }
                  L = { T: L, O, M: n3(P) }, R.push(L);
                }
                q = R;
              } else
                q = [];
              i[k] = q, N.g = 7;
              break;
            }
            if (E.type === "proto_list") {
              if (m) {
                for (q = Array(m.size()), B = 0; B < m.size(); B++)
                  q[B] = m.get(B);
                m.delete();
              } else
                q = [];
              i[k] = q, N.g = 7;
              break;
            }
            if (m === void 0) {
              N.g = 3;
              break;
            }
            if (E.type === "float_list") {
              i[k] = m, N.g = 7;
              break;
            }
            if (E.type === "proto") {
              i[k] = m, N.g = 7;
              break;
            }
            if (E.type !== "texture")
              throw Error("Unknown output config type: '" + E.type + "'");
            return A = F.s[k], A || (A = new D2(F.h, F.D), F.s[k] = A), d(N, k1(A, m, F.G), 13);
          case 13:
            j = N.h, i[k] = j;
          case 7:
            E.transform && i[k] && (i[k] = E.transform(i[k])), N.g = 3;
            break;
          case 14:
            S[Y] = N.h;
          case 3:
            a = C.next(), N.g = 2;
            break;
          case 4:
            return N.return(i);
        }
      });
    });
  }
  function v3(t, e, r) {
    return z(t, function n() {
      var i = this, s;
      return K(n, function(o) {
        return typeof r == "number" || r instanceof Uint8Array || r instanceof i.h.Uint8BlobList ? o.return(r) : r instanceof i.h.Texture2dDataOut ? (s = i.s[e], s || (s = new D2(i.h, i.D), i.s[e] = s), o.return(k1(s, r, i.G))) : o.return(void 0);
      });
    });
  }
  function d3(t, e) {
    for (var r = e.name || "$", n = [].concat(V(e.wants)), i = new t.h.StringList(), s = y(e.wants), o = s.next(); !o.done; o = s.next())
      i.push_back(o.value);
    s = t.h.PacketListener.implement({ onResults: function(a) {
      for (var u = {}, h = 0; h < e.wants.length; ++h)
        u[n[h]] = a.get(h);
      var F = t.listeners[r];
      F && (t.C = p3(t, u, e.outs).then(function(C) {
        C = F(C);
        for (var k = 0; k < e.wants.length; ++k) {
          var E = u[n[k]];
          typeof E == "object" && E.hasOwnProperty && E.hasOwnProperty("delete") && E.delete();
        }
        C && (t.C = C);
      }));
    } }), t.i.attachMultiListener(i, s), i.delete();
  }
  w.onResults = function(t, e) {
    this.listeners[e || "$"] = t;
  }, Q("Solution", J2), Q("OptionType", { BOOL: 0, NUMBER: 1, aa: 2, 0: "BOOL", 1: "NUMBER", 2: "STRING" });
  function m3(t) {
    t = r3(t);
    var e = t.getMesh();
    if (!e)
      return t;
    var r = new Float32Array(e.getVertexBufferList());
    e.getVertexBufferList = function() {
      return r;
    };
    var n = new Uint32Array(e.getIndexBufferList());
    return e.getIndexBufferList = function() {
      return n;
    }, t;
  }
  var y3 = { files: [{ url: "face_mesh_solution_packed_assets_loader.js" }, { simd: !0, url: "face_mesh_solution_simd_wasm_bin.js" }, { simd: !1, url: "face_mesh_solution_wasm_bin.js" }], graph: { url: "face_mesh.binarypb" }, listeners: [{ wants: ["multi_face_geometry", "image_transformed", "multi_face_landmarks"], outs: { image: "image_transformed", multiFaceGeometry: { type: "proto_list", stream: "multi_face_geometry", transform: function(t) {
    return t.map(m3);
  } }, multiFaceLandmarks: { type: "proto_list", stream: "multi_face_landmarks", transform: function(t) {
    return t.map(function(e) {
      return C2(
        M1(e),
        E2
      ).map(j1);
    });
  } } } }], inputs: { image: { type: "video", stream: "input_frames_gpu" } }, options: { useCpuInference: { type: 0, graphOptionXref: { calculatorType: "InferenceCalculator", fieldName: "use_cpu_inference" }, default: "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document }, enableFaceGeometry: { type: 0, graphOptionXref: {
    calculatorName: "EnableFaceGeometryConstant",
    calculatorType: "ConstantSidePacketCalculator",
    fieldName: "bool_value"
  } }, selfieMode: { type: 0, graphOptionXref: { calculatorType: "GlScalerCalculator", calculatorIndex: 1, fieldName: "flip_horizontal" } }, maxNumFaces: { type: 1, graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorNumFaces", fieldName: "int_value" } }, refineLandmarks: { type: 0, graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorRefineLandmarks", fieldName: "bool_value" } }, minDetectionConfidence: {
    type: 1,
    graphOptionXref: { calculatorType: "TensorsToDetectionsCalculator", calculatorName: "facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator", fieldName: "min_score_thresh" }
  }, minTrackingConfidence: { type: 1, graphOptionXref: { calculatorType: "ThresholdingCalculator", calculatorName: "facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator", fieldName: "threshold" } }, cameraNear: { type: 1, graphOptionXref: {
    calculatorType: "FaceGeometryEnvGeneratorCalculator",
    fieldName: "near"
  } }, cameraFar: { type: 1, graphOptionXref: { calculatorType: "FaceGeometryEnvGeneratorCalculator", fieldName: "far" } }, cameraVerticalFovDegrees: { type: 1, graphOptionXref: { calculatorType: "FaceGeometryEnvGeneratorCalculator", fieldName: "vertical_fov_degrees" } } } }, b1 = [[61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]], S1 = [[263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [
    386,
    385
  ], [385, 384], [384, 398], [398, 362]], R1 = [[276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]], L1 = [[33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]], x1 = [[46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]], P1 = [
    [10, 338],
    [338, 297],
    [297, 332],
    [332, 284],
    [284, 251],
    [251, 389],
    [389, 356],
    [356, 454],
    [454, 323],
    [323, 361],
    [361, 288],
    [288, 397],
    [397, 365],
    [365, 379],
    [379, 378],
    [378, 400],
    [400, 377],
    [377, 152],
    [152, 148],
    [148, 176],
    [176, 149],
    [149, 150],
    [150, 136],
    [136, 172],
    [172, 58],
    [58, 132],
    [132, 93],
    [93, 234],
    [234, 127],
    [127, 162],
    [162, 21],
    [21, 54],
    [54, 103],
    [103, 67],
    [67, 109],
    [109, 10]
  ], w3 = [].concat(V(b1), V(S1), V(R1), V(L1), V(x1), V(P1));
  function C1(t) {
    t = t || {}, t = Object.assign(Object.assign({}, y3), t), this.g = new J2(t);
  }
  w = C1.prototype, w.close = function() {
    return this.g.close(), Promise.resolve();
  }, w.onResults = function(t) {
    this.g.onResults(t);
  }, w.initialize = function() {
    return z(this, function t() {
      var e = this;
      return K(t, function(r) {
        return d(r, e.g.initialize(), 0);
      });
    });
  }, w.reset = function() {
    this.g.reset();
  }, w.send = function(t) {
    return z(this, function e() {
      var r = this;
      return K(e, function(n) {
        return d(n, r.g.send(t), 0);
      });
    });
  }, w.setOptions = function(t) {
    this.g.setOptions(t);
  }, Q("FACE_GEOMETRY", { Layout: { COLUMN_MAJOR: 0, ROW_MAJOR: 1, 0: "COLUMN_MAJOR", 1: "ROW_MAJOR" }, PrimitiveType: { TRIANGLE: 0, 0: "TRIANGLE" }, VertexType: { VERTEX_PT: 0, 0: "VERTEX_PT" }, DEFAULT_CAMERA_PARAMS: { verticalFovDegrees: 63, near: 1, far: 1e4 } }), Q("FaceMesh", C1), Q("FACEMESH_LIPS", b1), Q("FACEMESH_LEFT_EYE", S1), Q("FACEMESH_LEFT_EYEBROW", R1), Q("FACEMESH_LEFT_IRIS", [[474, 475], [475, 476], [476, 477], [477, 474]]), Q("FACEMESH_RIGHT_EYE", L1), Q("FACEMESH_RIGHT_EYEBROW", x1), Q("FACEMESH_RIGHT_IRIS", [[469, 470], [470, 471], [471, 472], [472, 469]]), Q("FACEMESH_FACE_OVAL", P1), Q("FACEMESH_CONTOURS", w3), Q("FACEMESH_TESSELATION", [
    [127, 34],
    [34, 139],
    [139, 127],
    [11, 0],
    [0, 37],
    [37, 11],
    [232, 231],
    [231, 120],
    [120, 232],
    [72, 37],
    [37, 39],
    [39, 72],
    [128, 121],
    [121, 47],
    [47, 128],
    [232, 121],
    [121, 128],
    [128, 232],
    [104, 69],
    [69, 67],
    [67, 104],
    [175, 171],
    [171, 148],
    [148, 175],
    [118, 50],
    [50, 101],
    [101, 118],
    [73, 39],
    [39, 40],
    [40, 73],
    [9, 151],
    [151, 108],
    [108, 9],
    [48, 115],
    [115, 131],
    [131, 48],
    [194, 204],
    [204, 211],
    [211, 194],
    [74, 40],
    [40, 185],
    [185, 74],
    [80, 42],
    [42, 183],
    [183, 80],
    [40, 92],
    [92, 186],
    [186, 40],
    [230, 229],
    [229, 118],
    [118, 230],
    [202, 212],
    [
      212,
      214
    ],
    [214, 202],
    [83, 18],
    [18, 17],
    [17, 83],
    [76, 61],
    [61, 146],
    [146, 76],
    [160, 29],
    [29, 30],
    [30, 160],
    [56, 157],
    [157, 173],
    [173, 56],
    [106, 204],
    [204, 194],
    [194, 106],
    [135, 214],
    [214, 192],
    [192, 135],
    [203, 165],
    [165, 98],
    [98, 203],
    [21, 71],
    [71, 68],
    [68, 21],
    [51, 45],
    [45, 4],
    [4, 51],
    [144, 24],
    [24, 23],
    [23, 144],
    [77, 146],
    [146, 91],
    [91, 77],
    [205, 50],
    [50, 187],
    [187, 205],
    [201, 200],
    [200, 18],
    [18, 201],
    [91, 106],
    [106, 182],
    [182, 91],
    [90, 91],
    [91, 181],
    [181, 90],
    [85, 84],
    [84, 17],
    [17, 85],
    [206, 203],
    [203, 36],
    [36, 206],
    [148, 171],
    [171, 140],
    [140, 148],
    [
      92,
      40
    ],
    [40, 39],
    [39, 92],
    [193, 189],
    [189, 244],
    [244, 193],
    [159, 158],
    [158, 28],
    [28, 159],
    [247, 246],
    [246, 161],
    [161, 247],
    [236, 3],
    [3, 196],
    [196, 236],
    [54, 68],
    [68, 104],
    [104, 54],
    [193, 168],
    [168, 8],
    [8, 193],
    [117, 228],
    [228, 31],
    [31, 117],
    [189, 193],
    [193, 55],
    [55, 189],
    [98, 97],
    [97, 99],
    [99, 98],
    [126, 47],
    [47, 100],
    [100, 126],
    [166, 79],
    [79, 218],
    [218, 166],
    [155, 154],
    [154, 26],
    [26, 155],
    [209, 49],
    [49, 131],
    [131, 209],
    [135, 136],
    [136, 150],
    [150, 135],
    [47, 126],
    [126, 217],
    [217, 47],
    [223, 52],
    [52, 53],
    [53, 223],
    [45, 51],
    [51, 134],
    [134, 45],
    [211, 170],
    [
      170,
      140
    ],
    [140, 211],
    [67, 69],
    [69, 108],
    [108, 67],
    [43, 106],
    [106, 91],
    [91, 43],
    [230, 119],
    [119, 120],
    [120, 230],
    [226, 130],
    [130, 247],
    [247, 226],
    [63, 53],
    [53, 52],
    [52, 63],
    [238, 20],
    [20, 242],
    [242, 238],
    [46, 70],
    [70, 156],
    [156, 46],
    [78, 62],
    [62, 96],
    [96, 78],
    [46, 53],
    [53, 63],
    [63, 46],
    [143, 34],
    [34, 227],
    [227, 143],
    [123, 117],
    [117, 111],
    [111, 123],
    [44, 125],
    [125, 19],
    [19, 44],
    [236, 134],
    [134, 51],
    [51, 236],
    [216, 206],
    [206, 205],
    [205, 216],
    [154, 153],
    [153, 22],
    [22, 154],
    [39, 37],
    [37, 167],
    [167, 39],
    [200, 201],
    [201, 208],
    [208, 200],
    [36, 142],
    [142, 100],
    [
      100,
      36
    ],
    [57, 212],
    [212, 202],
    [202, 57],
    [20, 60],
    [60, 99],
    [99, 20],
    [28, 158],
    [158, 157],
    [157, 28],
    [35, 226],
    [226, 113],
    [113, 35],
    [160, 159],
    [159, 27],
    [27, 160],
    [204, 202],
    [202, 210],
    [210, 204],
    [113, 225],
    [225, 46],
    [46, 113],
    [43, 202],
    [202, 204],
    [204, 43],
    [62, 76],
    [76, 77],
    [77, 62],
    [137, 123],
    [123, 116],
    [116, 137],
    [41, 38],
    [38, 72],
    [72, 41],
    [203, 129],
    [129, 142],
    [142, 203],
    [64, 98],
    [98, 240],
    [240, 64],
    [49, 102],
    [102, 64],
    [64, 49],
    [41, 73],
    [73, 74],
    [74, 41],
    [212, 216],
    [216, 207],
    [207, 212],
    [42, 74],
    [74, 184],
    [184, 42],
    [169, 170],
    [170, 211],
    [211, 169],
    [
      170,
      149
    ],
    [149, 176],
    [176, 170],
    [105, 66],
    [66, 69],
    [69, 105],
    [122, 6],
    [6, 168],
    [168, 122],
    [123, 147],
    [147, 187],
    [187, 123],
    [96, 77],
    [77, 90],
    [90, 96],
    [65, 55],
    [55, 107],
    [107, 65],
    [89, 90],
    [90, 180],
    [180, 89],
    [101, 100],
    [100, 120],
    [120, 101],
    [63, 105],
    [105, 104],
    [104, 63],
    [93, 137],
    [137, 227],
    [227, 93],
    [15, 86],
    [86, 85],
    [85, 15],
    [129, 102],
    [102, 49],
    [49, 129],
    [14, 87],
    [87, 86],
    [86, 14],
    [55, 8],
    [8, 9],
    [9, 55],
    [100, 47],
    [47, 121],
    [121, 100],
    [145, 23],
    [23, 22],
    [22, 145],
    [88, 89],
    [89, 179],
    [179, 88],
    [6, 122],
    [122, 196],
    [196, 6],
    [88, 95],
    [95, 96],
    [96, 88],
    [138, 172],
    [172, 136],
    [136, 138],
    [215, 58],
    [58, 172],
    [172, 215],
    [115, 48],
    [48, 219],
    [219, 115],
    [42, 80],
    [80, 81],
    [81, 42],
    [195, 3],
    [3, 51],
    [51, 195],
    [43, 146],
    [146, 61],
    [61, 43],
    [171, 175],
    [175, 199],
    [199, 171],
    [81, 82],
    [82, 38],
    [38, 81],
    [53, 46],
    [46, 225],
    [225, 53],
    [144, 163],
    [163, 110],
    [110, 144],
    [52, 65],
    [65, 66],
    [66, 52],
    [229, 228],
    [228, 117],
    [117, 229],
    [34, 127],
    [127, 234],
    [234, 34],
    [107, 108],
    [108, 69],
    [69, 107],
    [109, 108],
    [108, 151],
    [151, 109],
    [48, 64],
    [64, 235],
    [235, 48],
    [62, 78],
    [78, 191],
    [191, 62],
    [129, 209],
    [209, 126],
    [126, 129],
    [111, 35],
    [35, 143],
    [
      143,
      111
    ],
    [117, 123],
    [123, 50],
    [50, 117],
    [222, 65],
    [65, 52],
    [52, 222],
    [19, 125],
    [125, 141],
    [141, 19],
    [221, 55],
    [55, 65],
    [65, 221],
    [3, 195],
    [195, 197],
    [197, 3],
    [25, 7],
    [7, 33],
    [33, 25],
    [220, 237],
    [237, 44],
    [44, 220],
    [70, 71],
    [71, 139],
    [139, 70],
    [122, 193],
    [193, 245],
    [245, 122],
    [247, 130],
    [130, 33],
    [33, 247],
    [71, 21],
    [21, 162],
    [162, 71],
    [170, 169],
    [169, 150],
    [150, 170],
    [188, 174],
    [174, 196],
    [196, 188],
    [216, 186],
    [186, 92],
    [92, 216],
    [2, 97],
    [97, 167],
    [167, 2],
    [141, 125],
    [125, 241],
    [241, 141],
    [164, 167],
    [167, 37],
    [37, 164],
    [72, 38],
    [38, 12],
    [12, 72],
    [38, 82],
    [82, 13],
    [13, 38],
    [63, 68],
    [68, 71],
    [71, 63],
    [226, 35],
    [35, 111],
    [111, 226],
    [101, 50],
    [50, 205],
    [205, 101],
    [206, 92],
    [92, 165],
    [165, 206],
    [209, 198],
    [198, 217],
    [217, 209],
    [165, 167],
    [167, 97],
    [97, 165],
    [220, 115],
    [115, 218],
    [218, 220],
    [133, 112],
    [112, 243],
    [243, 133],
    [239, 238],
    [238, 241],
    [241, 239],
    [214, 135],
    [135, 169],
    [169, 214],
    [190, 173],
    [173, 133],
    [133, 190],
    [171, 208],
    [208, 32],
    [32, 171],
    [125, 44],
    [44, 237],
    [237, 125],
    [86, 87],
    [87, 178],
    [178, 86],
    [85, 86],
    [86, 179],
    [179, 85],
    [84, 85],
    [85, 180],
    [180, 84],
    [83, 84],
    [84, 181],
    [181, 83],
    [201, 83],
    [83, 182],
    [182, 201],
    [137, 93],
    [93, 132],
    [132, 137],
    [76, 62],
    [62, 183],
    [183, 76],
    [61, 76],
    [76, 184],
    [184, 61],
    [57, 61],
    [61, 185],
    [185, 57],
    [212, 57],
    [57, 186],
    [186, 212],
    [214, 207],
    [207, 187],
    [187, 214],
    [34, 143],
    [143, 156],
    [156, 34],
    [79, 239],
    [239, 237],
    [237, 79],
    [123, 137],
    [137, 177],
    [177, 123],
    [44, 1],
    [1, 4],
    [4, 44],
    [201, 194],
    [194, 32],
    [32, 201],
    [64, 102],
    [102, 129],
    [129, 64],
    [213, 215],
    [215, 138],
    [138, 213],
    [59, 166],
    [166, 219],
    [219, 59],
    [242, 99],
    [99, 97],
    [97, 242],
    [2, 94],
    [94, 141],
    [141, 2],
    [75, 59],
    [59, 235],
    [235, 75],
    [24, 110],
    [110, 228],
    [
      228,
      24
    ],
    [25, 130],
    [130, 226],
    [226, 25],
    [23, 24],
    [24, 229],
    [229, 23],
    [22, 23],
    [23, 230],
    [230, 22],
    [26, 22],
    [22, 231],
    [231, 26],
    [112, 26],
    [26, 232],
    [232, 112],
    [189, 190],
    [190, 243],
    [243, 189],
    [221, 56],
    [56, 190],
    [190, 221],
    [28, 56],
    [56, 221],
    [221, 28],
    [27, 28],
    [28, 222],
    [222, 27],
    [29, 27],
    [27, 223],
    [223, 29],
    [30, 29],
    [29, 224],
    [224, 30],
    [247, 30],
    [30, 225],
    [225, 247],
    [238, 79],
    [79, 20],
    [20, 238],
    [166, 59],
    [59, 75],
    [75, 166],
    [60, 75],
    [75, 240],
    [240, 60],
    [147, 177],
    [177, 215],
    [215, 147],
    [20, 79],
    [79, 166],
    [166, 20],
    [187, 147],
    [147, 213],
    [213, 187],
    [112, 233],
    [233, 244],
    [244, 112],
    [233, 128],
    [128, 245],
    [245, 233],
    [128, 114],
    [114, 188],
    [188, 128],
    [114, 217],
    [217, 174],
    [174, 114],
    [131, 115],
    [115, 220],
    [220, 131],
    [217, 198],
    [198, 236],
    [236, 217],
    [198, 131],
    [131, 134],
    [134, 198],
    [177, 132],
    [132, 58],
    [58, 177],
    [143, 35],
    [35, 124],
    [124, 143],
    [110, 163],
    [163, 7],
    [7, 110],
    [228, 110],
    [110, 25],
    [25, 228],
    [356, 389],
    [389, 368],
    [368, 356],
    [11, 302],
    [302, 267],
    [267, 11],
    [452, 350],
    [350, 349],
    [349, 452],
    [302, 303],
    [303, 269],
    [269, 302],
    [357, 343],
    [343, 277],
    [277, 357],
    [452, 453],
    [453, 357],
    [357, 452],
    [333, 332],
    [
      332,
      297
    ],
    [297, 333],
    [175, 152],
    [152, 377],
    [377, 175],
    [347, 348],
    [348, 330],
    [330, 347],
    [303, 304],
    [304, 270],
    [270, 303],
    [9, 336],
    [336, 337],
    [337, 9],
    [278, 279],
    [279, 360],
    [360, 278],
    [418, 262],
    [262, 431],
    [431, 418],
    [304, 408],
    [408, 409],
    [409, 304],
    [310, 415],
    [415, 407],
    [407, 310],
    [270, 409],
    [409, 410],
    [410, 270],
    [450, 348],
    [348, 347],
    [347, 450],
    [422, 430],
    [430, 434],
    [434, 422],
    [313, 314],
    [314, 17],
    [17, 313],
    [306, 307],
    [307, 375],
    [375, 306],
    [387, 388],
    [388, 260],
    [260, 387],
    [286, 414],
    [414, 398],
    [398, 286],
    [335, 406],
    [406, 418],
    [418, 335],
    [364, 367],
    [
      367,
      416
    ],
    [416, 364],
    [423, 358],
    [358, 327],
    [327, 423],
    [251, 284],
    [284, 298],
    [298, 251],
    [281, 5],
    [5, 4],
    [4, 281],
    [373, 374],
    [374, 253],
    [253, 373],
    [307, 320],
    [320, 321],
    [321, 307],
    [425, 427],
    [427, 411],
    [411, 425],
    [421, 313],
    [313, 18],
    [18, 421],
    [321, 405],
    [405, 406],
    [406, 321],
    [320, 404],
    [404, 405],
    [405, 320],
    [315, 16],
    [16, 17],
    [17, 315],
    [426, 425],
    [425, 266],
    [266, 426],
    [377, 400],
    [400, 369],
    [369, 377],
    [322, 391],
    [391, 269],
    [269, 322],
    [417, 465],
    [465, 464],
    [464, 417],
    [386, 257],
    [257, 258],
    [258, 386],
    [466, 260],
    [260, 388],
    [388, 466],
    [456, 399],
    [399, 419],
    [419, 456],
    [284, 332],
    [332, 333],
    [333, 284],
    [417, 285],
    [285, 8],
    [8, 417],
    [346, 340],
    [340, 261],
    [261, 346],
    [413, 441],
    [441, 285],
    [285, 413],
    [327, 460],
    [460, 328],
    [328, 327],
    [355, 371],
    [371, 329],
    [329, 355],
    [392, 439],
    [439, 438],
    [438, 392],
    [382, 341],
    [341, 256],
    [256, 382],
    [429, 420],
    [420, 360],
    [360, 429],
    [364, 394],
    [394, 379],
    [379, 364],
    [277, 343],
    [343, 437],
    [437, 277],
    [443, 444],
    [444, 283],
    [283, 443],
    [275, 440],
    [440, 363],
    [363, 275],
    [431, 262],
    [262, 369],
    [369, 431],
    [297, 338],
    [338, 337],
    [337, 297],
    [273, 375],
    [375, 321],
    [321, 273],
    [450, 451],
    [
      451,
      349
    ],
    [349, 450],
    [446, 342],
    [342, 467],
    [467, 446],
    [293, 334],
    [334, 282],
    [282, 293],
    [458, 461],
    [461, 462],
    [462, 458],
    [276, 353],
    [353, 383],
    [383, 276],
    [308, 324],
    [324, 325],
    [325, 308],
    [276, 300],
    [300, 293],
    [293, 276],
    [372, 345],
    [345, 447],
    [447, 372],
    [352, 345],
    [345, 340],
    [340, 352],
    [274, 1],
    [1, 19],
    [19, 274],
    [456, 248],
    [248, 281],
    [281, 456],
    [436, 427],
    [427, 425],
    [425, 436],
    [381, 256],
    [256, 252],
    [252, 381],
    [269, 391],
    [391, 393],
    [393, 269],
    [200, 199],
    [199, 428],
    [428, 200],
    [266, 330],
    [330, 329],
    [329, 266],
    [287, 273],
    [273, 422],
    [422, 287],
    [250, 462],
    [
      462,
      328
    ],
    [328, 250],
    [258, 286],
    [286, 384],
    [384, 258],
    [265, 353],
    [353, 342],
    [342, 265],
    [387, 259],
    [259, 257],
    [257, 387],
    [424, 431],
    [431, 430],
    [430, 424],
    [342, 353],
    [353, 276],
    [276, 342],
    [273, 335],
    [335, 424],
    [424, 273],
    [292, 325],
    [325, 307],
    [307, 292],
    [366, 447],
    [447, 345],
    [345, 366],
    [271, 303],
    [303, 302],
    [302, 271],
    [423, 266],
    [266, 371],
    [371, 423],
    [294, 455],
    [455, 460],
    [460, 294],
    [279, 278],
    [278, 294],
    [294, 279],
    [271, 272],
    [272, 304],
    [304, 271],
    [432, 434],
    [434, 427],
    [427, 432],
    [272, 407],
    [407, 408],
    [408, 272],
    [394, 430],
    [430, 431],
    [431, 394],
    [395, 369],
    [369, 400],
    [400, 395],
    [334, 333],
    [333, 299],
    [299, 334],
    [351, 417],
    [417, 168],
    [168, 351],
    [352, 280],
    [280, 411],
    [411, 352],
    [325, 319],
    [319, 320],
    [320, 325],
    [295, 296],
    [296, 336],
    [336, 295],
    [319, 403],
    [403, 404],
    [404, 319],
    [330, 348],
    [348, 349],
    [349, 330],
    [293, 298],
    [298, 333],
    [333, 293],
    [323, 454],
    [454, 447],
    [447, 323],
    [15, 16],
    [16, 315],
    [315, 15],
    [358, 429],
    [429, 279],
    [279, 358],
    [14, 15],
    [15, 316],
    [316, 14],
    [285, 336],
    [336, 9],
    [9, 285],
    [329, 349],
    [349, 350],
    [350, 329],
    [374, 380],
    [380, 252],
    [252, 374],
    [318, 402],
    [402, 403],
    [403, 318],
    [6, 197],
    [
      197,
      419
    ],
    [419, 6],
    [318, 319],
    [319, 325],
    [325, 318],
    [367, 364],
    [364, 365],
    [365, 367],
    [435, 367],
    [367, 397],
    [397, 435],
    [344, 438],
    [438, 439],
    [439, 344],
    [272, 271],
    [271, 311],
    [311, 272],
    [195, 5],
    [5, 281],
    [281, 195],
    [273, 287],
    [287, 291],
    [291, 273],
    [396, 428],
    [428, 199],
    [199, 396],
    [311, 271],
    [271, 268],
    [268, 311],
    [283, 444],
    [444, 445],
    [445, 283],
    [373, 254],
    [254, 339],
    [339, 373],
    [282, 334],
    [334, 296],
    [296, 282],
    [449, 347],
    [347, 346],
    [346, 449],
    [264, 447],
    [447, 454],
    [454, 264],
    [336, 296],
    [296, 299],
    [299, 336],
    [338, 10],
    [10, 151],
    [151, 338],
    [278, 439],
    [
      439,
      455
    ],
    [455, 278],
    [292, 407],
    [407, 415],
    [415, 292],
    [358, 371],
    [371, 355],
    [355, 358],
    [340, 345],
    [345, 372],
    [372, 340],
    [346, 347],
    [347, 280],
    [280, 346],
    [442, 443],
    [443, 282],
    [282, 442],
    [19, 94],
    [94, 370],
    [370, 19],
    [441, 442],
    [442, 295],
    [295, 441],
    [248, 419],
    [419, 197],
    [197, 248],
    [263, 255],
    [255, 359],
    [359, 263],
    [440, 275],
    [275, 274],
    [274, 440],
    [300, 383],
    [383, 368],
    [368, 300],
    [351, 412],
    [412, 465],
    [465, 351],
    [263, 467],
    [467, 466],
    [466, 263],
    [301, 368],
    [368, 389],
    [389, 301],
    [395, 378],
    [378, 379],
    [379, 395],
    [412, 351],
    [351, 419],
    [419, 412],
    [436, 426],
    [426, 322],
    [322, 436],
    [2, 164],
    [164, 393],
    [393, 2],
    [370, 462],
    [462, 461],
    [461, 370],
    [164, 0],
    [0, 267],
    [267, 164],
    [302, 11],
    [11, 12],
    [12, 302],
    [268, 12],
    [12, 13],
    [13, 268],
    [293, 300],
    [300, 301],
    [301, 293],
    [446, 261],
    [261, 340],
    [340, 446],
    [330, 266],
    [266, 425],
    [425, 330],
    [426, 423],
    [423, 391],
    [391, 426],
    [429, 355],
    [355, 437],
    [437, 429],
    [391, 327],
    [327, 326],
    [326, 391],
    [440, 457],
    [457, 438],
    [438, 440],
    [341, 382],
    [382, 362],
    [362, 341],
    [459, 457],
    [457, 461],
    [461, 459],
    [434, 430],
    [430, 394],
    [394, 434],
    [414, 463],
    [463, 362],
    [362, 414],
    [396, 369],
    [369, 262],
    [262, 396],
    [354, 461],
    [461, 457],
    [457, 354],
    [316, 403],
    [403, 402],
    [402, 316],
    [315, 404],
    [404, 403],
    [403, 315],
    [314, 405],
    [405, 404],
    [404, 314],
    [313, 406],
    [406, 405],
    [405, 313],
    [421, 418],
    [418, 406],
    [406, 421],
    [366, 401],
    [401, 361],
    [361, 366],
    [306, 408],
    [408, 407],
    [407, 306],
    [291, 409],
    [409, 408],
    [408, 291],
    [287, 410],
    [410, 409],
    [409, 287],
    [432, 436],
    [436, 410],
    [410, 432],
    [434, 416],
    [416, 411],
    [411, 434],
    [264, 368],
    [368, 383],
    [383, 264],
    [309, 438],
    [438, 457],
    [457, 309],
    [352, 376],
    [376, 401],
    [401, 352],
    [274, 275],
    [275, 4],
    [4, 274],
    [421, 428],
    [
      428,
      262
    ],
    [262, 421],
    [294, 327],
    [327, 358],
    [358, 294],
    [433, 416],
    [416, 367],
    [367, 433],
    [289, 455],
    [455, 439],
    [439, 289],
    [462, 370],
    [370, 326],
    [326, 462],
    [2, 326],
    [326, 370],
    [370, 2],
    [305, 460],
    [460, 455],
    [455, 305],
    [254, 449],
    [449, 448],
    [448, 254],
    [255, 261],
    [261, 446],
    [446, 255],
    [253, 450],
    [450, 449],
    [449, 253],
    [252, 451],
    [451, 450],
    [450, 252],
    [256, 452],
    [452, 451],
    [451, 256],
    [341, 453],
    [453, 452],
    [452, 341],
    [413, 464],
    [464, 463],
    [463, 413],
    [441, 413],
    [413, 414],
    [414, 441],
    [258, 442],
    [442, 441],
    [441, 258],
    [257, 443],
    [443, 442],
    [442, 257],
    [259, 444],
    [444, 443],
    [443, 259],
    [260, 445],
    [445, 444],
    [444, 260],
    [467, 342],
    [342, 445],
    [445, 467],
    [459, 458],
    [458, 250],
    [250, 459],
    [289, 392],
    [392, 290],
    [290, 289],
    [290, 328],
    [328, 460],
    [460, 290],
    [376, 433],
    [433, 435],
    [435, 376],
    [250, 290],
    [290, 392],
    [392, 250],
    [411, 416],
    [416, 433],
    [433, 411],
    [341, 463],
    [463, 464],
    [464, 341],
    [453, 464],
    [464, 465],
    [465, 453],
    [357, 465],
    [465, 412],
    [412, 357],
    [343, 412],
    [412, 399],
    [399, 343],
    [360, 363],
    [363, 440],
    [440, 360],
    [437, 399],
    [399, 456],
    [456, 437],
    [420, 456],
    [456, 363],
    [363, 420],
    [401, 435],
    [435, 288],
    [288, 401],
    [
      372,
      383
    ],
    [383, 353],
    [353, 372],
    [339, 255],
    [255, 249],
    [249, 339],
    [448, 261],
    [261, 255],
    [255, 448],
    [133, 243],
    [243, 190],
    [190, 133],
    [133, 155],
    [155, 112],
    [112, 133],
    [33, 246],
    [246, 247],
    [247, 33],
    [33, 130],
    [130, 25],
    [25, 33],
    [398, 384],
    [384, 286],
    [286, 398],
    [362, 398],
    [398, 414],
    [414, 362],
    [362, 463],
    [463, 341],
    [341, 362],
    [263, 359],
    [359, 467],
    [467, 263],
    [263, 249],
    [249, 255],
    [255, 263],
    [466, 467],
    [467, 260],
    [260, 466],
    [75, 60],
    [60, 166],
    [166, 75],
    [238, 239],
    [239, 79],
    [79, 238],
    [162, 127],
    [127, 139],
    [139, 162],
    [72, 11],
    [11, 37],
    [37, 72],
    [121, 232],
    [
      232,
      120
    ],
    [120, 121],
    [73, 72],
    [72, 39],
    [39, 73],
    [114, 128],
    [128, 47],
    [47, 114],
    [233, 232],
    [232, 128],
    [128, 233],
    [103, 104],
    [104, 67],
    [67, 103],
    [152, 175],
    [175, 148],
    [148, 152],
    [119, 118],
    [118, 101],
    [101, 119],
    [74, 73],
    [73, 40],
    [40, 74],
    [107, 9],
    [9, 108],
    [108, 107],
    [49, 48],
    [48, 131],
    [131, 49],
    [32, 194],
    [194, 211],
    [211, 32],
    [184, 74],
    [74, 185],
    [185, 184],
    [191, 80],
    [80, 183],
    [183, 191],
    [185, 40],
    [40, 186],
    [186, 185],
    [119, 230],
    [230, 118],
    [118, 119],
    [210, 202],
    [202, 214],
    [214, 210],
    [84, 83],
    [83, 17],
    [17, 84],
    [77, 76],
    [76, 146],
    [146, 77],
    [161, 160],
    [160, 30],
    [30, 161],
    [190, 56],
    [56, 173],
    [173, 190],
    [182, 106],
    [106, 194],
    [194, 182],
    [138, 135],
    [135, 192],
    [192, 138],
    [129, 203],
    [203, 98],
    [98, 129],
    [54, 21],
    [21, 68],
    [68, 54],
    [5, 51],
    [51, 4],
    [4, 5],
    [145, 144],
    [144, 23],
    [23, 145],
    [90, 77],
    [77, 91],
    [91, 90],
    [207, 205],
    [205, 187],
    [187, 207],
    [83, 201],
    [201, 18],
    [18, 83],
    [181, 91],
    [91, 182],
    [182, 181],
    [180, 90],
    [90, 181],
    [181, 180],
    [16, 85],
    [85, 17],
    [17, 16],
    [205, 206],
    [206, 36],
    [36, 205],
    [176, 148],
    [148, 140],
    [140, 176],
    [165, 92],
    [92, 39],
    [39, 165],
    [245, 193],
    [193, 244],
    [244, 245],
    [27, 159],
    [159, 28],
    [28, 27],
    [
      30,
      247
    ],
    [247, 161],
    [161, 30],
    [174, 236],
    [236, 196],
    [196, 174],
    [103, 54],
    [54, 104],
    [104, 103],
    [55, 193],
    [193, 8],
    [8, 55],
    [111, 117],
    [117, 31],
    [31, 111],
    [221, 189],
    [189, 55],
    [55, 221],
    [240, 98],
    [98, 99],
    [99, 240],
    [142, 126],
    [126, 100],
    [100, 142],
    [219, 166],
    [166, 218],
    [218, 219],
    [112, 155],
    [155, 26],
    [26, 112],
    [198, 209],
    [209, 131],
    [131, 198],
    [169, 135],
    [135, 150],
    [150, 169],
    [114, 47],
    [47, 217],
    [217, 114],
    [224, 223],
    [223, 53],
    [53, 224],
    [220, 45],
    [45, 134],
    [134, 220],
    [32, 211],
    [211, 140],
    [140, 32],
    [109, 67],
    [67, 108],
    [108, 109],
    [146, 43],
    [43, 91],
    [91, 146],
    [231, 230],
    [230, 120],
    [120, 231],
    [113, 226],
    [226, 247],
    [247, 113],
    [105, 63],
    [63, 52],
    [52, 105],
    [241, 238],
    [238, 242],
    [242, 241],
    [124, 46],
    [46, 156],
    [156, 124],
    [95, 78],
    [78, 96],
    [96, 95],
    [70, 46],
    [46, 63],
    [63, 70],
    [116, 143],
    [143, 227],
    [227, 116],
    [116, 123],
    [123, 111],
    [111, 116],
    [1, 44],
    [44, 19],
    [19, 1],
    [3, 236],
    [236, 51],
    [51, 3],
    [207, 216],
    [216, 205],
    [205, 207],
    [26, 154],
    [154, 22],
    [22, 26],
    [165, 39],
    [39, 167],
    [167, 165],
    [199, 200],
    [200, 208],
    [208, 199],
    [101, 36],
    [36, 100],
    [100, 101],
    [43, 57],
    [57, 202],
    [202, 43],
    [242, 20],
    [20, 99],
    [99, 242],
    [56, 28],
    [
      28,
      157
    ],
    [157, 56],
    [124, 35],
    [35, 113],
    [113, 124],
    [29, 160],
    [160, 27],
    [27, 29],
    [211, 204],
    [204, 210],
    [210, 211],
    [124, 113],
    [113, 46],
    [46, 124],
    [106, 43],
    [43, 204],
    [204, 106],
    [96, 62],
    [62, 77],
    [77, 96],
    [227, 137],
    [137, 116],
    [116, 227],
    [73, 41],
    [41, 72],
    [72, 73],
    [36, 203],
    [203, 142],
    [142, 36],
    [235, 64],
    [64, 240],
    [240, 235],
    [48, 49],
    [49, 64],
    [64, 48],
    [42, 41],
    [41, 74],
    [74, 42],
    [214, 212],
    [212, 207],
    [207, 214],
    [183, 42],
    [42, 184],
    [184, 183],
    [210, 169],
    [169, 211],
    [211, 210],
    [140, 170],
    [170, 176],
    [176, 140],
    [104, 105],
    [105, 69],
    [69, 104],
    [193, 122],
    [122, 168],
    [168, 193],
    [50, 123],
    [123, 187],
    [187, 50],
    [89, 96],
    [96, 90],
    [90, 89],
    [66, 65],
    [65, 107],
    [107, 66],
    [179, 89],
    [89, 180],
    [180, 179],
    [119, 101],
    [101, 120],
    [120, 119],
    [68, 63],
    [63, 104],
    [104, 68],
    [234, 93],
    [93, 227],
    [227, 234],
    [16, 15],
    [15, 85],
    [85, 16],
    [209, 129],
    [129, 49],
    [49, 209],
    [15, 14],
    [14, 86],
    [86, 15],
    [107, 55],
    [55, 9],
    [9, 107],
    [120, 100],
    [100, 121],
    [121, 120],
    [153, 145],
    [145, 22],
    [22, 153],
    [178, 88],
    [88, 179],
    [179, 178],
    [197, 6],
    [6, 196],
    [196, 197],
    [89, 88],
    [88, 96],
    [96, 89],
    [135, 138],
    [138, 136],
    [136, 135],
    [138, 215],
    [215, 172],
    [172, 138],
    [
      218,
      115
    ],
    [115, 219],
    [219, 218],
    [41, 42],
    [42, 81],
    [81, 41],
    [5, 195],
    [195, 51],
    [51, 5],
    [57, 43],
    [43, 61],
    [61, 57],
    [208, 171],
    [171, 199],
    [199, 208],
    [41, 81],
    [81, 38],
    [38, 41],
    [224, 53],
    [53, 225],
    [225, 224],
    [24, 144],
    [144, 110],
    [110, 24],
    [105, 52],
    [52, 66],
    [66, 105],
    [118, 229],
    [229, 117],
    [117, 118],
    [227, 34],
    [34, 234],
    [234, 227],
    [66, 107],
    [107, 69],
    [69, 66],
    [10, 109],
    [109, 151],
    [151, 10],
    [219, 48],
    [48, 235],
    [235, 219],
    [183, 62],
    [62, 191],
    [191, 183],
    [142, 129],
    [129, 126],
    [126, 142],
    [116, 111],
    [111, 143],
    [143, 116],
    [118, 117],
    [117, 50],
    [50, 118],
    [223, 222],
    [
      222,
      52
    ],
    [52, 223],
    [94, 19],
    [19, 141],
    [141, 94],
    [222, 221],
    [221, 65],
    [65, 222],
    [196, 3],
    [3, 197],
    [197, 196],
    [45, 220],
    [220, 44],
    [44, 45],
    [156, 70],
    [70, 139],
    [139, 156],
    [188, 122],
    [122, 245],
    [245, 188],
    [139, 71],
    [71, 162],
    [162, 139],
    [149, 170],
    [170, 150],
    [150, 149],
    [122, 188],
    [188, 196],
    [196, 122],
    [206, 216],
    [216, 92],
    [92, 206],
    [164, 2],
    [2, 167],
    [167, 164],
    [242, 141],
    [141, 241],
    [241, 242],
    [0, 164],
    [164, 37],
    [37, 0],
    [11, 72],
    [72, 12],
    [12, 11],
    [12, 38],
    [38, 13],
    [13, 12],
    [70, 63],
    [63, 71],
    [71, 70],
    [31, 226],
    [226, 111],
    [111, 31],
    [36, 101],
    [101, 205],
    [205, 36],
    [203, 206],
    [206, 165],
    [165, 203],
    [126, 209],
    [209, 217],
    [217, 126],
    [98, 165],
    [165, 97],
    [97, 98],
    [237, 220],
    [220, 218],
    [218, 237],
    [237, 239],
    [239, 241],
    [241, 237],
    [210, 214],
    [214, 169],
    [169, 210],
    [140, 171],
    [171, 32],
    [32, 140],
    [241, 125],
    [125, 237],
    [237, 241],
    [179, 86],
    [86, 178],
    [178, 179],
    [180, 85],
    [85, 179],
    [179, 180],
    [181, 84],
    [84, 180],
    [180, 181],
    [182, 83],
    [83, 181],
    [181, 182],
    [194, 201],
    [201, 182],
    [182, 194],
    [177, 137],
    [137, 132],
    [132, 177],
    [184, 76],
    [76, 183],
    [183, 184],
    [185, 61],
    [61, 184],
    [184, 185],
    [186, 57],
    [57, 185],
    [185, 186],
    [216, 212],
    [
      212,
      186
    ],
    [186, 216],
    [192, 214],
    [214, 187],
    [187, 192],
    [139, 34],
    [34, 156],
    [156, 139],
    [218, 79],
    [79, 237],
    [237, 218],
    [147, 123],
    [123, 177],
    [177, 147],
    [45, 44],
    [44, 4],
    [4, 45],
    [208, 201],
    [201, 32],
    [32, 208],
    [98, 64],
    [64, 129],
    [129, 98],
    [192, 213],
    [213, 138],
    [138, 192],
    [235, 59],
    [59, 219],
    [219, 235],
    [141, 242],
    [242, 97],
    [97, 141],
    [97, 2],
    [2, 141],
    [141, 97],
    [240, 75],
    [75, 235],
    [235, 240],
    [229, 24],
    [24, 228],
    [228, 229],
    [31, 25],
    [25, 226],
    [226, 31],
    [230, 23],
    [23, 229],
    [229, 230],
    [231, 22],
    [22, 230],
    [230, 231],
    [232, 26],
    [26, 231],
    [231, 232],
    [233, 112],
    [112, 232],
    [232, 233],
    [244, 189],
    [189, 243],
    [243, 244],
    [189, 221],
    [221, 190],
    [190, 189],
    [222, 28],
    [28, 221],
    [221, 222],
    [223, 27],
    [27, 222],
    [222, 223],
    [224, 29],
    [29, 223],
    [223, 224],
    [225, 30],
    [30, 224],
    [224, 225],
    [113, 247],
    [247, 225],
    [225, 113],
    [99, 60],
    [60, 240],
    [240, 99],
    [213, 147],
    [147, 215],
    [215, 213],
    [60, 20],
    [20, 166],
    [166, 60],
    [192, 187],
    [187, 213],
    [213, 192],
    [243, 112],
    [112, 244],
    [244, 243],
    [244, 233],
    [233, 245],
    [245, 244],
    [245, 128],
    [128, 188],
    [188, 245],
    [188, 114],
    [114, 174],
    [174, 188],
    [134, 131],
    [131, 220],
    [220, 134],
    [174, 217],
    [217, 236],
    [236, 174],
    [236, 198],
    [198, 134],
    [134, 236],
    [215, 177],
    [177, 58],
    [58, 215],
    [156, 143],
    [143, 124],
    [124, 156],
    [25, 110],
    [110, 7],
    [7, 25],
    [31, 228],
    [228, 25],
    [25, 31],
    [264, 356],
    [356, 368],
    [368, 264],
    [0, 11],
    [11, 267],
    [267, 0],
    [451, 452],
    [452, 349],
    [349, 451],
    [267, 302],
    [302, 269],
    [269, 267],
    [350, 357],
    [357, 277],
    [277, 350],
    [350, 452],
    [452, 357],
    [357, 350],
    [299, 333],
    [333, 297],
    [297, 299],
    [396, 175],
    [175, 377],
    [377, 396],
    [280, 347],
    [347, 330],
    [330, 280],
    [269, 303],
    [303, 270],
    [270, 269],
    [151, 9],
    [9, 337],
    [337, 151],
    [344, 278],
    [278, 360],
    [360, 344],
    [424, 418],
    [
      418,
      431
    ],
    [431, 424],
    [270, 304],
    [304, 409],
    [409, 270],
    [272, 310],
    [310, 407],
    [407, 272],
    [322, 270],
    [270, 410],
    [410, 322],
    [449, 450],
    [450, 347],
    [347, 449],
    [432, 422],
    [422, 434],
    [434, 432],
    [18, 313],
    [313, 17],
    [17, 18],
    [291, 306],
    [306, 375],
    [375, 291],
    [259, 387],
    [387, 260],
    [260, 259],
    [424, 335],
    [335, 418],
    [418, 424],
    [434, 364],
    [364, 416],
    [416, 434],
    [391, 423],
    [423, 327],
    [327, 391],
    [301, 251],
    [251, 298],
    [298, 301],
    [275, 281],
    [281, 4],
    [4, 275],
    [254, 373],
    [373, 253],
    [253, 254],
    [375, 307],
    [307, 321],
    [321, 375],
    [280, 425],
    [425, 411],
    [411, 280],
    [200, 421],
    [
      421,
      18
    ],
    [18, 200],
    [335, 321],
    [321, 406],
    [406, 335],
    [321, 320],
    [320, 405],
    [405, 321],
    [314, 315],
    [315, 17],
    [17, 314],
    [423, 426],
    [426, 266],
    [266, 423],
    [396, 377],
    [377, 369],
    [369, 396],
    [270, 322],
    [322, 269],
    [269, 270],
    [413, 417],
    [417, 464],
    [464, 413],
    [385, 386],
    [386, 258],
    [258, 385],
    [248, 456],
    [456, 419],
    [419, 248],
    [298, 284],
    [284, 333],
    [333, 298],
    [168, 417],
    [417, 8],
    [8, 168],
    [448, 346],
    [346, 261],
    [261, 448],
    [417, 413],
    [413, 285],
    [285, 417],
    [326, 327],
    [327, 328],
    [328, 326],
    [277, 355],
    [355, 329],
    [329, 277],
    [309, 392],
    [392, 438],
    [438, 309],
    [381, 382],
    [
      382,
      256
    ],
    [256, 381],
    [279, 429],
    [429, 360],
    [360, 279],
    [365, 364],
    [364, 379],
    [379, 365],
    [355, 277],
    [277, 437],
    [437, 355],
    [282, 443],
    [443, 283],
    [283, 282],
    [281, 275],
    [275, 363],
    [363, 281],
    [395, 431],
    [431, 369],
    [369, 395],
    [299, 297],
    [297, 337],
    [337, 299],
    [335, 273],
    [273, 321],
    [321, 335],
    [348, 450],
    [450, 349],
    [349, 348],
    [359, 446],
    [446, 467],
    [467, 359],
    [283, 293],
    [293, 282],
    [282, 283],
    [250, 458],
    [458, 462],
    [462, 250],
    [300, 276],
    [276, 383],
    [383, 300],
    [292, 308],
    [308, 325],
    [325, 292],
    [283, 276],
    [276, 293],
    [293, 283],
    [264, 372],
    [372, 447],
    [447, 264],
    [346, 352],
    [352, 340],
    [340, 346],
    [354, 274],
    [274, 19],
    [19, 354],
    [363, 456],
    [456, 281],
    [281, 363],
    [426, 436],
    [436, 425],
    [425, 426],
    [380, 381],
    [381, 252],
    [252, 380],
    [267, 269],
    [269, 393],
    [393, 267],
    [421, 200],
    [200, 428],
    [428, 421],
    [371, 266],
    [266, 329],
    [329, 371],
    [432, 287],
    [287, 422],
    [422, 432],
    [290, 250],
    [250, 328],
    [328, 290],
    [385, 258],
    [258, 384],
    [384, 385],
    [446, 265],
    [265, 342],
    [342, 446],
    [386, 387],
    [387, 257],
    [257, 386],
    [422, 424],
    [424, 430],
    [430, 422],
    [445, 342],
    [342, 276],
    [276, 445],
    [422, 273],
    [273, 424],
    [424, 422],
    [306, 292],
    [292, 307],
    [307, 306],
    [
      352,
      366
    ],
    [366, 345],
    [345, 352],
    [268, 271],
    [271, 302],
    [302, 268],
    [358, 423],
    [423, 371],
    [371, 358],
    [327, 294],
    [294, 460],
    [460, 327],
    [331, 279],
    [279, 294],
    [294, 331],
    [303, 271],
    [271, 304],
    [304, 303],
    [436, 432],
    [432, 427],
    [427, 436],
    [304, 272],
    [272, 408],
    [408, 304],
    [395, 394],
    [394, 431],
    [431, 395],
    [378, 395],
    [395, 400],
    [400, 378],
    [296, 334],
    [334, 299],
    [299, 296],
    [6, 351],
    [351, 168],
    [168, 6],
    [376, 352],
    [352, 411],
    [411, 376],
    [307, 325],
    [325, 320],
    [320, 307],
    [285, 295],
    [295, 336],
    [336, 285],
    [320, 319],
    [319, 404],
    [404, 320],
    [329, 330],
    [330, 349],
    [349, 329],
    [334, 293],
    [293, 333],
    [333, 334],
    [366, 323],
    [323, 447],
    [447, 366],
    [316, 15],
    [15, 315],
    [315, 316],
    [331, 358],
    [358, 279],
    [279, 331],
    [317, 14],
    [14, 316],
    [316, 317],
    [8, 285],
    [285, 9],
    [9, 8],
    [277, 329],
    [329, 350],
    [350, 277],
    [253, 374],
    [374, 252],
    [252, 253],
    [319, 318],
    [318, 403],
    [403, 319],
    [351, 6],
    [6, 419],
    [419, 351],
    [324, 318],
    [318, 325],
    [325, 324],
    [397, 367],
    [367, 365],
    [365, 397],
    [288, 435],
    [435, 397],
    [397, 288],
    [278, 344],
    [344, 439],
    [439, 278],
    [310, 272],
    [272, 311],
    [311, 310],
    [248, 195],
    [195, 281],
    [281, 248],
    [375, 273],
    [273, 291],
    [291, 375],
    [175, 396],
    [396, 199],
    [199, 175],
    [312, 311],
    [311, 268],
    [268, 312],
    [276, 283],
    [283, 445],
    [445, 276],
    [390, 373],
    [373, 339],
    [339, 390],
    [295, 282],
    [282, 296],
    [296, 295],
    [448, 449],
    [449, 346],
    [346, 448],
    [356, 264],
    [264, 454],
    [454, 356],
    [337, 336],
    [336, 299],
    [299, 337],
    [337, 338],
    [338, 151],
    [151, 337],
    [294, 278],
    [278, 455],
    [455, 294],
    [308, 292],
    [292, 415],
    [415, 308],
    [429, 358],
    [358, 355],
    [355, 429],
    [265, 340],
    [340, 372],
    [372, 265],
    [352, 346],
    [346, 280],
    [280, 352],
    [295, 442],
    [442, 282],
    [282, 295],
    [354, 19],
    [19, 370],
    [370, 354],
    [285, 441],
    [441, 295],
    [295, 285],
    [
      195,
      248
    ],
    [248, 197],
    [197, 195],
    [457, 440],
    [440, 274],
    [274, 457],
    [301, 300],
    [300, 368],
    [368, 301],
    [417, 351],
    [351, 465],
    [465, 417],
    [251, 301],
    [301, 389],
    [389, 251],
    [394, 395],
    [395, 379],
    [379, 394],
    [399, 412],
    [412, 419],
    [419, 399],
    [410, 436],
    [436, 322],
    [322, 410],
    [326, 2],
    [2, 393],
    [393, 326],
    [354, 370],
    [370, 461],
    [461, 354],
    [393, 164],
    [164, 267],
    [267, 393],
    [268, 302],
    [302, 12],
    [12, 268],
    [312, 268],
    [268, 13],
    [13, 312],
    [298, 293],
    [293, 301],
    [301, 298],
    [265, 446],
    [446, 340],
    [340, 265],
    [280, 330],
    [330, 425],
    [425, 280],
    [322, 426],
    [426, 391],
    [391, 322],
    [
      420,
      429
    ],
    [429, 437],
    [437, 420],
    [393, 391],
    [391, 326],
    [326, 393],
    [344, 440],
    [440, 438],
    [438, 344],
    [458, 459],
    [459, 461],
    [461, 458],
    [364, 434],
    [434, 394],
    [394, 364],
    [428, 396],
    [396, 262],
    [262, 428],
    [274, 354],
    [354, 457],
    [457, 274],
    [317, 316],
    [316, 402],
    [402, 317],
    [316, 315],
    [315, 403],
    [403, 316],
    [315, 314],
    [314, 404],
    [404, 315],
    [314, 313],
    [313, 405],
    [405, 314],
    [313, 421],
    [421, 406],
    [406, 313],
    [323, 366],
    [366, 361],
    [361, 323],
    [292, 306],
    [306, 407],
    [407, 292],
    [306, 291],
    [291, 408],
    [408, 306],
    [291, 287],
    [287, 409],
    [409, 291],
    [287, 432],
    [432, 410],
    [410, 287],
    [427, 434],
    [434, 411],
    [411, 427],
    [372, 264],
    [264, 383],
    [383, 372],
    [459, 309],
    [309, 457],
    [457, 459],
    [366, 352],
    [352, 401],
    [401, 366],
    [1, 274],
    [274, 4],
    [4, 1],
    [418, 421],
    [421, 262],
    [262, 418],
    [331, 294],
    [294, 358],
    [358, 331],
    [435, 433],
    [433, 367],
    [367, 435],
    [392, 289],
    [289, 439],
    [439, 392],
    [328, 462],
    [462, 326],
    [326, 328],
    [94, 2],
    [2, 370],
    [370, 94],
    [289, 305],
    [305, 455],
    [455, 289],
    [339, 254],
    [254, 448],
    [448, 339],
    [359, 255],
    [255, 446],
    [446, 359],
    [254, 253],
    [253, 449],
    [449, 254],
    [253, 252],
    [252, 450],
    [450, 253],
    [252, 256],
    [256, 451],
    [451, 252],
    [
      256,
      341
    ],
    [341, 452],
    [452, 256],
    [414, 413],
    [413, 463],
    [463, 414],
    [286, 441],
    [441, 414],
    [414, 286],
    [286, 258],
    [258, 441],
    [441, 286],
    [258, 257],
    [257, 442],
    [442, 258],
    [257, 259],
    [259, 443],
    [443, 257],
    [259, 260],
    [260, 444],
    [444, 259],
    [260, 467],
    [467, 445],
    [445, 260],
    [309, 459],
    [459, 250],
    [250, 309],
    [305, 289],
    [289, 290],
    [290, 305],
    [305, 290],
    [290, 460],
    [460, 305],
    [401, 376],
    [376, 435],
    [435, 401],
    [309, 250],
    [250, 392],
    [392, 309],
    [376, 411],
    [411, 433],
    [433, 376],
    [453, 341],
    [341, 464],
    [464, 453],
    [357, 453],
    [453, 465],
    [465, 357],
    [343, 357],
    [357, 412],
    [412, 343],
    [437, 343],
    [343, 399],
    [399, 437],
    [344, 360],
    [360, 440],
    [440, 344],
    [420, 437],
    [437, 456],
    [456, 420],
    [360, 420],
    [420, 363],
    [363, 360],
    [361, 401],
    [401, 288],
    [288, 361],
    [265, 372],
    [372, 353],
    [353, 265],
    [390, 339],
    [339, 249],
    [249, 390],
    [339, 448],
    [448, 255],
    [255, 339]
  ]), Q("matrixDataToMatrix", function(t) {
    for (var e = t.getCols(), r = t.getRows(), n = t.getPackedDataList(), i = [], s = 0; s < r; s++)
      i.push(Array(e));
    for (s = 0; s < r; s++)
      for (var o = 0; o < e; o++) {
        var a = t.getLayout() === 1 ? s * e + o : o * r + s;
        i[s][o] = n[a];
      }
    return i;
  }), Q("VERSION", "0.4.1633559619");
}).call(Z2);
class F3 {
  constructor() {
    this.detectResolve = null, this.faceMesh = new _3.FaceMesh({ locateFile: (c) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4/${c}` }), this.faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: !1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    }), this.faceMesh.onResults((c) => {
      this.detectResolve && this.detectResolve(c);
    });
  }
  async detect(c) {
    return await new Promise((g, v) => {
      this.detectResolve = g, this.faceMesh.send({ image: c });
    });
  }
}
const A3 = require("../libs/opencv.js");
let U1 = !1;
const N1 = {}, V1 = [], E3 = async () => U1 ? !0 : new Promise((w, c) => {
  V1.push(w);
});
A3().then((w) => {
  U1 = !0, Object.assign(N1, w), V1.forEach((c) => {
    c();
  });
});
const G = N1, c2 = [[0, -3.406404, 5.979507], [0, -1.126865, 7.475604], [0, -2.089024, 6.058267], [-0.463928, 0.955357, 6.633583], [0, -0.46317, 7.58658], [0, 0.365669, 7.24287], [0, 2.473255, 5.788627], [-4.253081, 2.577646, 3.279702], [0, 4.019042, 5.284764], [0, 4.885979, 5.385258], [0, 8.261778, 4.481535], [0, -3.706811, 5.864924], [0, -3.918301, 5.56943], [0, -3.994436, 5.219482], [0, -4.5424, 5.404754], [0, -4.745577, 5.529457], [0, -5.019567, 5.601448], [0, -5.365123, 5.535441], [0, -6.149624, 5.071372], [0, -1.501095, 7.112196], [-0.416106, -1.466449, 6.447657], [-7.08796, 5.434801, 0.09962], [-2.628639, 2.035898, 3.848121], [-3.198363, 1.985815, 3.796952], [-3.775151, 2.039402, 3.646194], [-4.465819, 2.42295, 3.155168], [-2.164289, 2.189867, 3.851822], [-3.208229, 3.223926, 4.115822], [-2.673803, 3.205337, 4.092203], [-3.745193, 3.165286, 3.972409], [-4.161018, 3.059069, 3.719554], [-5.062006, 1.934418, 2.776093], [-2.266659, -7.425768, 4.389812], [-4.445859, 2.663991, 3.173422], [-7.21453, 2.263009, 0.07315], [-5.799793, 2.349546, 2.204059], [-2.844939, -0.720868, 4.43313], [-0.711452, -3.329355, 5.877044], [-0.606033, -3.924562, 5.444923], [-1.431615, -3.500953, 5.496189], [-1.91491, -3.803146, 5.02893], [-1.131043, -3.973937, 5.189648], [-1.563548, -4.082763, 4.842263], [-2.650112, -5.003649, 4.188483], [-0.427049, -1.094134, 7.360529], [-0.496396, -0.475659, 7.440358], [-5.253307, 3.881582, 3.363159], [-1.718698, 0.974609, 4.558359], [-1.608635, -0.942516, 5.814193], [-1.651267, -0.610868, 5.581319], [-4.765501, -0.701554, 3.534632], [-0.478306, 0.295766, 7.101013], [-3.734964, 4.50823, 4.550454], [-4.588603, 4.302037, 4.048484], [-6.279331, 6.615427, 1.42585], [-1.220941, 4.142165, 5.106035], [-2.193489, 3.100317, 4.000575], [-3.102642, -4.352984, 4.095905], [-6.719682, -4.788645, -1.745401], [-1.193824, -1.306795, 5.737747], [-0.729766, -1.593712, 5.833208], [-2.456206, -4.342621, 4.283884], [-2.204823, -4.304508, 4.162499], [-4.985894, 4.802461, 3.751977], [-1.592294, -1.257709, 5.456949], [-2.644548, 4.524654, 4.921559], [-2.760292, 5.100971, 5.01599], [-3.523964, 8.005976, 3.729163], [-5.599763, 5.71547, 2.724259], [-3.063932, 6.566144, 4.529981], [-5.720968, 4.254584, 2.830852], [-6.374393, 4.78559, 1.591691], [-0.672728, -3.688016, 5.737804], [-1.26256, -3.787691, 5.417779], [-1.732553, -3.952767, 5.000579], [-1.043625, -1.464973, 5.662455], [-2.321234, -4.329069, 4.258156], [-2.056846, -4.477671, 4.520883], [-2.153084, -4.276322, 4.038093], [-0.946874, -1.035249, 6.512274], [-1.469132, -4.036351, 4.604908], [-1.02434, -3.989851, 4.926693], [-0.533422, -3.993222, 5.138202], [-0.76972, -6.095394, 4.985883], [-0.699606, -5.29185, 5.448304], [-0.669687, -4.94977, 5.509612], [-0.630947, -4.695101, 5.449371], [-0.583218, -4.517982, 5.339869], [-1.53717, -4.423206, 4.74547], [-1.6156, -4.475942, 4.813632], [-1.729053, -4.61868, 4.854463], [-1.838624, -4.828746, 4.823737], [-2.36825, -3.106237, 4.868096], [-7.542244, -1.049282, -2.431321], [0, -1.724003, 6.60139], [-1.826614, -4.399531, 4.399021], [-1.929558, -4.411831, 4.497052], [-0.597442, -2.013686, 5.866456], [-1.405627, -1.714196, 5.241087], [-0.662449, -1.819321, 5.863759], [-2.34234, 0.572222, 4.294303], [-3.327324, 0.104863, 4.11386], [-1.726175, -0.919165, 5.273355], [-5.133204, 7.485602, 2.660442], [-4.538641, 6.319907, 3.683424], [-3.986562, 5.109487, 4.466315], [-2.169681, -5.440433, 4.455874], [-1.395634, 5.011963, 5.316032], [-1.6195, 6.599217, 4.921106], [-1.891399, 8.236377, 4.274997], [-4.195832, 2.235205, 3.375099], [-5.733342, 1.411738, 2.431726], [-1.859887, 2.355757, 3.843181], [-4.988612, 3.074654, 3.083858], [-1.303263, 1.416453, 4.831091], [-1.305757, -0.672779, 6.415959], [-6.46517, 0.937119, 1.689873], [-5.258659, 0.945811, 2.974312], [-4.432338, 0.722096, 3.522615], [-3.300681, 0.861641, 3.872784], [-2.430178, 1.131492, 4.039035], [-1.820731, 1.467954, 4.224124], [-0.563221, 2.307693, 5.566789], [-6.338145, -0.529279, 1.881175], [-5.587698, 3.208071, 2.687839], [-0.242624, -1.462857, 7.071491], [-1.611251, 0.339326, 4.895421], [-7.743095, 2.364999, -2.005167], [-1.391142, 1.851048, 4.448999], [-1.785794, -0.978284, 4.85047], [-4.670959, 2.664461, 3.084075], [-1.33397, -0.283761, 6.097047], [-7.270895, -2.890917, -2.252455], [-1.856432, 2.585245, 3.757904], [-0.923388, 0.073076, 6.671944], [-5.000589, -6.135128, 1.892523], [-5.085276, -7.17859, 0.714711], [-7.159291, -0.81182, -0.072044], [-5.843051, -5.248023, 0.924091], [-6.847258, 3.662916, 0.724695], [-2.412942, -8.258853, 4.119213], [-0.179909, -1.689864, 6.573301], [-2.103655, -0.163946, 4.566119], [-6.407571, 2.236021, 1.560843], [-3.670075, 2.360153, 3.63523], [-3.177186, 2.294265, 3.775704], [-2.196121, -4.598322, 4.479786], [-6.234883, -1.94443, 1.663542], [-1.292924, -9.29592, 4.094063], [-3.210651, -8.533278, 2.802001], [-4.068926, -7.993109, 1.925119], [0, 6.54539, 5.027311], [0, -9.403378, 4.264492], [-2.724032, 2.315802, 3.777151], [-2.28846, 2.398891, 3.697603], [-1.998311, 2.496547, 3.689148], [-6.13004, 3.399261, 2.038516], [-2.28846, 2.886504, 3.775031], [-2.724032, 2.96181, 3.871767], [-3.177186, 2.964136, 3.876973], [-3.670075, 2.927714, 3.724325], [-4.018389, 2.857357, 3.482983], [-7.555811, 4.106811, -0.991917], [-4.018389, 2.483695, 3.440898], [0, -2.521945, 5.932265], [-1.776217, -2.683946, 5.213116], [-1.222237, -1.182444, 5.952465], [-0.731493, -2.536683, 5.815343], [0, 3.271027, 5.236015], [-4.135272, -6.996638, 2.67197], [-3.311811, -7.660815, 3.382963], [-1.313701, -8.639995, 4.702456], [-5.940524, -6.223629, -0.631468], [-1.998311, 2.743838, 3.74403], [-0.901447, 1.236992, 5.754256], [0, -8.765243, 4.891441], [-2.308977, -8.974196, 3.60907], [-6.954154, -2.439843, -0.131163], [-1.098819, -4.458788, 5.120727], [-1.181124, -4.579996, 5.189564], [-1.255818, -4.787901, 5.237051], [-1.325085, -5.106507, 5.20501], [-1.546388, -5.819392, 4.757893], [-1.953754, -4.183892, 4.431713], [-2.117802, -4.137093, 4.555096], [-2.285339, -4.051196, 4.582438], [-2.85016, -3.66572, 4.484994], [-5.278538, -2.238942, 2.861224], [-0.946709, 1.907628, 5.196779], [-1.314173, 3.104912, 4.231404], [-1.78, 2.86, 3.881555], [-1.84511, -4.09888, 4.247264], [-5.436187, -4.030482, 2.109852], [-0.766444, 3.182131, 4.861453], [-1.938616, -6.61441, 4.521085], [0, 1.059413, 6.774605], [-0.516573, 1.583572, 6.148363], [0, 1.728369, 6.31675], [-1.246815, 0.230297, 5.681036], [0, -7.942194, 5.181173], [0, -6.991499, 5.153478], [-0.997827, -6.930921, 4.979576], [-3.288807, -5.382514, 3.795752], [-2.311631, -1.566237, 4.590085], [-2.68025, -6.111567, 4.096152], [-3.832928, -1.537326, 4.137731], [-2.96186, -2.274215, 4.440943], [-4.386901, -2.683286, 3.643886], [-1.217295, -7.834465, 4.969286], [-1.542374, -0.136843, 5.201008], [-3.878377, -6.041764, 3.311079], [-3.084037, -6.809842, 3.814195], [-3.747321, -4.503545, 3.726453], [-6.094129, -3.205991, 1.473482], [-4.588995, -4.728726, 2.983221], [-6.583231, -3.941269, 0.070268], [-3.49258, -3.19582, 4.130198], [-1.255543, 0.802341, 5.307551], [-1.126122, -0.933602, 6.538785], [-1.443109, -1.142774, 5.905127], [-0.923043, -0.529042, 7.003423], [-1.755386, 3.529117, 4.327696], [-2.632589, 3.713828, 4.364629], [-3.388062, 3.721976, 4.309028], [-4.075766, 3.675413, 4.076063], [-4.62291, 3.474691, 3.646321], [-5.171755, 2.535753, 2.670867], [-7.297331, 0.763172, -0.048769], [-4.706828, 1.651, 3.109532], [-4.071712, 1.476821, 3.476944], [-3.269817, 1.470659, 3.731945], [-2.527572, 1.617311, 3.865444], [-1.970894, 1.858505, 3.961782], [-1.579543, 2.097941, 4.084996], [-7.664182, 0.673132, -2.435867], [-1.397041, -1.340139, 5.630378], [-0.884838, 0.65874, 6.233232], [-0.767097, -0.968035, 7.077932], [-0.460213, -1.334106, 6.787447], [-0.748618, -1.067994, 6.798303], [-1.236408, -1.585568, 5.48049], [-0.387306, -1.40999, 6.957705], [-0.319925, -1.607931, 6.508676], [-1.639633, 2.556298, 3.863736], [-1.255645, 2.467144, 4.2038], [-1.031362, 2.382663, 4.615849], [-4.253081, 2.772296, 3.315305], [-4.53, 2.91, 3.339685], [0.463928, 0.955357, 6.633583], [4.253081, 2.577646, 3.279702], [0.416106, -1.466449, 6.447657], [7.08796, 5.434801, 0.09962], [2.628639, 2.035898, 3.848121], [3.198363, 1.985815, 3.796952], [3.775151, 2.039402, 3.646194], [4.465819, 2.42295, 3.155168], [2.164289, 2.189867, 3.851822], [3.208229, 3.223926, 4.115822], [2.673803, 3.205337, 4.092203], [3.745193, 3.165286, 3.972409], [4.161018, 3.059069, 3.719554], [5.062006, 1.934418, 2.776093], [2.266659, -7.425768, 4.389812], [4.445859, 2.663991, 3.173422], [7.21453, 2.263009, 0.07315], [5.799793, 2.349546, 2.204059], [2.844939, -0.720868, 4.43313], [0.711452, -3.329355, 5.877044], [0.606033, -3.924562, 5.444923], [1.431615, -3.500953, 5.496189], [1.91491, -3.803146, 5.02893], [1.131043, -3.973937, 5.189648], [1.563548, -4.082763, 4.842263], [2.650112, -5.003649, 4.188483], [0.427049, -1.094134, 7.360529], [0.496396, -0.475659, 7.440358], [5.253307, 3.881582, 3.363159], [1.718698, 0.974609, 4.558359], [1.608635, -0.942516, 5.814193], [1.651267, -0.610868, 5.581319], [4.765501, -0.701554, 3.534632], [0.478306, 0.295766, 7.101013], [3.734964, 4.50823, 4.550454], [4.588603, 4.302037, 4.048484], [6.279331, 6.615427, 1.42585], [1.220941, 4.142165, 5.106035], [2.193489, 3.100317, 4.000575], [3.102642, -4.352984, 4.095905], [6.719682, -4.788645, -1.745401], [1.193824, -1.306795, 5.737747], [0.729766, -1.593712, 5.833208], [2.456206, -4.342621, 4.283884], [2.204823, -4.304508, 4.162499], [4.985894, 4.802461, 3.751977], [1.592294, -1.257709, 5.456949], [2.644548, 4.524654, 4.921559], [2.760292, 5.100971, 5.01599], [3.523964, 8.005976, 3.729163], [5.599763, 5.71547, 2.724259], [3.063932, 6.566144, 4.529981], [5.720968, 4.254584, 2.830852], [6.374393, 4.78559, 1.591691], [0.672728, -3.688016, 5.737804], [1.26256, -3.787691, 5.417779], [1.732553, -3.952767, 5.000579], [1.043625, -1.464973, 5.662455], [2.321234, -4.329069, 4.258156], [2.056846, -4.477671, 4.520883], [2.153084, -4.276322, 4.038093], [0.946874, -1.035249, 6.512274], [1.469132, -4.036351, 4.604908], [1.02434, -3.989851, 4.926693], [0.533422, -3.993222, 5.138202], [0.76972, -6.095394, 4.985883], [0.699606, -5.29185, 5.448304], [0.669687, -4.94977, 5.509612], [0.630947, -4.695101, 5.449371], [0.583218, -4.517982, 5.339869], [1.53717, -4.423206, 4.74547], [1.6156, -4.475942, 4.813632], [1.729053, -4.61868, 4.854463], [1.838624, -4.828746, 4.823737], [2.36825, -3.106237, 4.868096], [7.542244, -1.049282, -2.431321], [1.826614, -4.399531, 4.399021], [1.929558, -4.411831, 4.497052], [0.597442, -2.013686, 5.866456], [1.405627, -1.714196, 5.241087], [0.662449, -1.819321, 5.863759], [2.34234, 0.572222, 4.294303], [3.327324, 0.104863, 4.11386], [1.726175, -0.919165, 5.273355], [5.133204, 7.485602, 2.660442], [4.538641, 6.319907, 3.683424], [3.986562, 5.109487, 4.466315], [2.169681, -5.440433, 4.455874], [1.395634, 5.011963, 5.316032], [1.6195, 6.599217, 4.921106], [1.891399, 8.236377, 4.274997], [4.195832, 2.235205, 3.375099], [5.733342, 1.411738, 2.431726], [1.859887, 2.355757, 3.843181], [4.988612, 3.074654, 3.083858], [1.303263, 1.416453, 4.831091], [1.305757, -0.672779, 6.415959], [6.46517, 0.937119, 1.689873], [5.258659, 0.945811, 2.974312], [4.432338, 0.722096, 3.522615], [3.300681, 0.861641, 3.872784], [2.430178, 1.131492, 4.039035], [1.820731, 1.467954, 4.224124], [0.563221, 2.307693, 5.566789], [6.338145, -0.529279, 1.881175], [5.587698, 3.208071, 2.687839], [0.242624, -1.462857, 7.071491], [1.611251, 0.339326, 4.895421], [7.743095, 2.364999, -2.005167], [1.391142, 1.851048, 4.448999], [1.785794, -0.978284, 4.85047], [4.670959, 2.664461, 3.084075], [1.33397, -0.283761, 6.097047], [7.270895, -2.890917, -2.252455], [1.856432, 2.585245, 3.757904], [0.923388, 0.073076, 6.671944], [5.000589, -6.135128, 1.892523], [5.085276, -7.17859, 0.714711], [7.159291, -0.81182, -0.072044], [5.843051, -5.248023, 0.924091], [6.847258, 3.662916, 0.724695], [2.412942, -8.258853, 4.119213], [0.179909, -1.689864, 6.573301], [2.103655, -0.163946, 4.566119], [6.407571, 2.236021, 1.560843], [3.670075, 2.360153, 3.63523], [3.177186, 2.294265, 3.775704], [2.196121, -4.598322, 4.479786], [6.234883, -1.94443, 1.663542], [1.292924, -9.29592, 4.094063], [3.210651, -8.533278, 2.802001], [4.068926, -7.993109, 1.925119], [2.724032, 2.315802, 3.777151], [2.28846, 2.398891, 3.697603], [1.998311, 2.496547, 3.689148], [6.13004, 3.399261, 2.038516], [2.28846, 2.886504, 3.775031], [2.724032, 2.96181, 3.871767], [3.177186, 2.964136, 3.876973], [3.670075, 2.927714, 3.724325], [4.018389, 2.857357, 3.482983], [7.555811, 4.106811, -0.991917], [4.018389, 2.483695, 3.440898], [1.776217, -2.683946, 5.213116], [1.222237, -1.182444, 5.952465], [0.731493, -2.536683, 5.815343], [4.135272, -6.996638, 2.67197], [3.311811, -7.660815, 3.382963], [1.313701, -8.639995, 4.702456], [5.940524, -6.223629, -0.631468], [1.998311, 2.743838, 3.74403], [0.901447, 1.236992, 5.754256], [2.308977, -8.974196, 3.60907], [6.954154, -2.439843, -0.131163], [1.098819, -4.458788, 5.120727], [1.181124, -4.579996, 5.189564], [1.255818, -4.787901, 5.237051], [1.325085, -5.106507, 5.20501], [1.546388, -5.819392, 4.757893], [1.953754, -4.183892, 4.431713], [2.117802, -4.137093, 4.555096], [2.285339, -4.051196, 4.582438], [2.85016, -3.66572, 4.484994], [5.278538, -2.238942, 2.861224], [0.946709, 1.907628, 5.196779], [1.314173, 3.104912, 4.231404], [1.78, 2.86, 3.881555], [1.84511, -4.09888, 4.247264], [5.436187, -4.030482, 2.109852], [0.766444, 3.182131, 4.861453], [1.938616, -6.61441, 4.521085], [0.516573, 1.583572, 6.148363], [1.246815, 0.230297, 5.681036], [0.997827, -6.930921, 4.979576], [3.288807, -5.382514, 3.795752], [2.311631, -1.566237, 4.590085], [2.68025, -6.111567, 4.096152], [3.832928, -1.537326, 4.137731], [2.96186, -2.274215, 4.440943], [4.386901, -2.683286, 3.643886], [1.217295, -7.834465, 4.969286], [1.542374, -0.136843, 5.201008], [3.878377, -6.041764, 3.311079], [3.084037, -6.809842, 3.814195], [3.747321, -4.503545, 3.726453], [6.094129, -3.205991, 1.473482], [4.588995, -4.728726, 2.983221], [6.583231, -3.941269, 0.070268], [3.49258, -3.19582, 4.130198], [1.255543, 0.802341, 5.307551], [1.126122, -0.933602, 6.538785], [1.443109, -1.142774, 5.905127], [0.923043, -0.529042, 7.003423], [1.755386, 3.529117, 4.327696], [2.632589, 3.713828, 4.364629], [3.388062, 3.721976, 4.309028], [4.075766, 3.675413, 4.076063], [4.62291, 3.474691, 3.646321], [5.171755, 2.535753, 2.670867], [7.297331, 0.763172, -0.048769], [4.706828, 1.651, 3.109532], [4.071712, 1.476821, 3.476944], [3.269817, 1.470659, 3.731945], [2.527572, 1.617311, 3.865444], [1.970894, 1.858505, 3.961782], [1.579543, 2.097941, 4.084996], [7.664182, 0.673132, -2.435867], [1.397041, -1.340139, 5.630378], [0.884838, 0.65874, 6.233232], [0.767097, -0.968035, 7.077932], [0.460213, -1.334106, 6.787447], [0.748618, -1.067994, 6.798303], [1.236408, -1.585568, 5.48049], [0.387306, -1.40999, 6.957705], [0.319925, -1.607931, 6.508676], [1.639633, 2.556298, 3.863736], [1.255645, 2.467144, 4.2038], [1.031362, 2.382663, 4.615849], [4.253081, 2.772296, 3.315305], [4.53, 2.91, 3.339685]], Q2 = [[0.499977, 0.347466], [0.500026, 0.452513], [0.499974, 0.397628], [0.482113, 0.528021], [0.500151, 0.472844], [0.49991, 0.501747], [0.499523, 0.598938], [0.289712, 0.619236], [0.499955, 0.687602], [0.499987, 0.730081], [0.500023, 0.89295], [0.500023, 0.333766], [0.500016, 0.320776], [0.500023, 0.307652], [0.499977, 0.304722], [0.499977, 0.294066], [0.499977, 0.280615], [0.499977, 0.262981], [0.499968, 0.218629], [0.499816, 0.437019], [0.473773, 0.42609], [0.104907, 0.745859], [0.36593, 0.590424], [0.338758, 0.586975], [0.31112, 0.59054], [0.274658, 0.610869], [0.393362, 0.596294], [0.345234, 0.655989], [0.370094, 0.653924], [0.319322, 0.652735], [0.297903, 0.646409], [0.247792, 0.58919], [0.396889, 0.157245], [0.280098, 0.6244], [0.10631, 0.600044], [0.209925, 0.608647], [0.355808, 0.465594], [0.471751, 0.349596], [0.474155, 0.319808], [0.439785, 0.342771], [0.414617, 0.333459], [0.450374, 0.319139], [0.428771, 0.317309], [0.374971, 0.272195], [0.486717, 0.452371], [0.485301, 0.472605], [0.257765, 0.68551], [0.401223, 0.544828], [0.429819, 0.451385], [0.421352, 0.466259], [0.276896, 0.467943], [0.48337, 0.500413], [0.337212, 0.717117], [0.296392, 0.706757], [0.169295, 0.806186], [0.44758, 0.69739], [0.39239, 0.646112], [0.35449, 0.303216], [0.067305, 0.269895], [0.442739, 0.427174], [0.457098, 0.415208], [0.381974, 0.305289], [0.392389, 0.305797], [0.277076, 0.728068], [0.422552, 0.436767], [0.385919, 0.718636], [0.383103, 0.74416], [0.331431, 0.880286], [0.229924, 0.767997], [0.364501, 0.810886], [0.229622, 0.700459], [0.173287, 0.721252], [0.472879, 0.333802], [0.446828, 0.331473], [0.422762, 0.32611], [0.445308, 0.419934], [0.388103, 0.306039], [0.403039, 0.29346], [0.403629, 0.306047], [0.460042, 0.442861], [0.431158, 0.307634], [0.452182, 0.307634], [0.475387, 0.307634], [0.465828, 0.22081], [0.472329, 0.263774], [0.473087, 0.282143], [0.473122, 0.295374], [0.473033, 0.304722], [0.427942, 0.304722], [0.426479, 0.29646], [0.423162, 0.288154], [0.418309, 0.279937], [0.390095, 0.360427], [0.013954, 0.439966], [0.499914, 0.419853], [0.4132, 0.3046], [0.409626, 0.298177], [0.46808, 0.398465], [0.422729, 0.414015], [0.46308, 0.406216], [0.37212, 0.526586], [0.334562, 0.503927], [0.411671, 0.453035], [0.242176, 0.852324], [0.290777, 0.798554], [0.327338, 0.743473], [0.39951, 0.251079], [0.441728, 0.738324], [0.429765, 0.812166], [0.412198, 0.891099], [0.288955, 0.601048], [0.218937, 0.564589], [0.412782, 0.60103], [0.257135, 0.64456], [0.427685, 0.562039], [0.44834, 0.463064], [0.17856, 0.542446], [0.247308, 0.542806], [0.286267, 0.532325], [0.332828, 0.539288], [0.368756, 0.552793], [0.398964, 0.567345], [0.47641, 0.594194], [0.189241, 0.476076], [0.228962, 0.651049], [0.490726, 0.437599], [0.40467, 0.514867], [0.019469, 0.598436], [0.426243, 0.579569], [0.396993, 0.451203], [0.26647, 0.623023], [0.439121, 0.481042], [0.032314, 0.355643], [0.419054, 0.612845], [0.462783, 0.494253], [0.238979, 0.220255], [0.198221, 0.168062], [0.10755, 0.459245], [0.18361, 0.259743], [0.13441, 0.666317], [0.385764, 0.116846], [0.490967, 0.420622], [0.382385, 0.491427], [0.174399, 0.602329], [0.318785, 0.603765], [0.343364, 0.599403], [0.3961, 0.289783], [0.187885, 0.411462], [0.430987, 0.055935], [0.318993, 0.101715], [0.266248, 0.130299], [0.500023, 0.809424], [0.499977, 0.045547], [0.36617, 0.601178], [0.393207, 0.604463], [0.410373, 0.60892], [0.194993, 0.657898], [0.388665, 0.637716], [0.365962, 0.644029], [0.343364, 0.644643], [0.318785, 0.64166], [0.301415, 0.636844], [0.058133, 0.680924], [0.301415, 0.612551], [0.499988, 0.381566], [0.415838, 0.375804], [0.445682, 0.433923], [0.465844, 0.379359], [0.499923, 0.648476], [0.288719, 0.180054], [0.335279, 0.14718], [0.440512, 0.097581], [0.128294, 0.208059], [0.408772, 0.626106], [0.455607, 0.548199], [0.499877, 0.09101], [0.375437, 0.075808], [0.11421, 0.384978], [0.448662, 0.304722], [0.44802, 0.295368], [0.447112, 0.284192], [0.444832, 0.269206], [0.430012, 0.233191], [0.406787, 0.314327], [0.400738, 0.318931], [0.3924, 0.322297], [0.367856, 0.336081], [0.247923, 0.398667], [0.45277, 0.57915], [0.436392, 0.640113], [0.416164, 0.631286], [0.413386, 0.307634], [0.228018, 0.316428], [0.468268, 0.647329], [0.411362, 0.195673], [0.499989, 0.530175], [0.479154, 0.557346], [0.499974, 0.560363], [0.432112, 0.506411], [0.499886, 0.133083], [0.499913, 0.178271], [0.456549, 0.180799], [0.344549, 0.254561], [0.378909, 0.42599], [0.374293, 0.219815], [0.319688, 0.429262], [0.357155, 0.39573], [0.295284, 0.378419], [0.44775, 0.137523], [0.410986, 0.491277], [0.313951, 0.224692], [0.354128, 0.187447], [0.324548, 0.296007], [0.189096, 0.3537], [0.279777, 0.285342], [0.133823, 0.317299], [0.336768, 0.355267], [0.429884, 0.533478], [0.455528, 0.451377], [0.437114, 0.441104], [0.467288, 0.470075], [0.414712, 0.66478], [0.377046, 0.677222], [0.344108, 0.679849], [0.312876, 0.677668], [0.283526, 0.66681], [0.241246, 0.617214], [0.102986, 0.531237], [0.267612, 0.57544], [0.297879, 0.566824], [0.333434, 0.566122], [0.366427, 0.573884], [0.396012, 0.583304], [0.420121, 0.589772], [7561e-6, 0.519223], [0.432949, 0.430482], [0.458639, 0.520911], [0.473466, 0.454256], [0.476088, 0.43617], [0.468472, 0.444943], [0.433991, 0.417638], [0.483518, 0.437016], [0.482483, 0.422151], [0.42645, 0.610201], [0.438999, 0.603505], [0.450067, 0.599566], [0.289712, 0.631747], [0.27667, 0.636627], [0.517862, 0.528052], [0.710288, 0.619236], [0.526227, 0.42609], [0.895093, 0.745859], [0.63407, 0.590424], [0.661242, 0.586975], [0.68888, 0.59054], [0.725342, 0.610869], [0.60663, 0.596295], [0.654766, 0.655989], [0.629906, 0.653924], [0.680678, 0.652735], [0.702097, 0.646409], [0.752212, 0.589195], [0.602918, 0.157137], [0.719902, 0.6244], [0.893693, 0.60004], [0.790082, 0.608646], [0.643998, 0.465512], [0.528249, 0.349596], [0.52585, 0.319809], [0.560215, 0.342771], [0.585384, 0.333459], [0.549626, 0.319139], [0.571228, 0.317308], [0.624852, 0.271901], [0.51305, 0.452718], [0.515097, 0.472748], [0.742247, 0.685493], [0.598631, 0.545021], [0.570338, 0.451425], [0.578632, 0.466377], [0.723087, 0.467946], [0.516446, 0.500361], [0.662801, 0.717082], [0.703624, 0.706729], [0.830705, 0.806186], [0.552386, 0.697432], [0.60761, 0.646112], [0.645429, 0.303293], [0.932695, 0.269895], [0.557261, 0.427174], [0.542902, 0.415208], [0.618026, 0.305289], [0.607591, 0.305797], [0.722943, 0.728037], [0.577414, 0.436833], [0.614083, 0.718613], [0.616907, 0.744114], [0.668509, 0.880086], [0.770092, 0.767979], [0.635536, 0.810751], [0.770391, 0.700444], [0.826722, 0.721245], [0.527121, 0.333802], [0.553172, 0.331473], [0.577238, 0.32611], [0.554692, 0.419934], [0.611897, 0.306039], [0.596961, 0.29346], [0.596371, 0.306047], [0.539958, 0.442861], [0.568842, 0.307634], [0.547818, 0.307634], [0.524613, 0.307634], [0.53409, 0.220859], [0.527671, 0.263774], [0.526913, 0.282143], [0.526878, 0.295374], [0.526967, 0.304722], [0.572058, 0.304722], [0.573521, 0.29646], [0.576838, 0.288154], [0.581691, 0.279937], [0.609945, 0.36009], [0.986046, 0.439966], [0.5868, 0.3046], [0.590372, 0.298177], [0.531915, 0.398463], [0.577268, 0.414065], [0.536915, 0.406214], [0.627543, 0.526648], [0.665586, 0.504049], [0.588354, 0.453138], [0.757824, 0.852324], [0.70925, 0.798492], [0.672684, 0.743419], [0.600409, 0.250995], [0.558266, 0.738328], [0.570304, 0.812129], [0.588166, 0.890956], [0.711045, 0.601048], [0.78107, 0.564595], [0.587247, 0.601068], [0.74287, 0.644554], [0.572156, 0.562348], [0.551868, 0.46343], [0.821442, 0.542444], [0.752702, 0.542818], [0.713757, 0.532373], [0.667113, 0.539327], [0.631101, 0.552846], [0.600862, 0.567527], [0.523481, 0.594373], [0.810748, 0.476074], [0.771046, 0.651041], [0.509127, 0.437282], [0.595293, 0.514976], [0.980531, 0.598436], [0.5735, 0.58], [0.602995, 0.451312], [0.73353, 0.623023], [0.560611, 0.480983], [0.967686, 0.355643], [0.580985, 0.61284], [0.537728, 0.494615], [0.760966, 0.220247], [0.801779, 0.168062], [0.892441, 0.459239], [0.816351, 0.25974], [0.865595, 0.666313], [0.614074, 0.116754], [0.508953, 0.420562], [0.617942, 0.491684], [0.825608, 0.602325], [0.681215, 0.603765], [0.656636, 0.599403], [0.6039, 0.289783], [0.812086, 0.411461], [0.568013, 0.055435], [0.681008, 0.101715], [0.733752, 0.130299], [0.63383, 0.601178], [0.606793, 0.604463], [0.58966, 0.608938], [0.805016, 0.657892], [0.611335, 0.637716], [0.634038, 0.644029], [0.656636, 0.644643], [0.681215, 0.64166], [0.698585, 0.636844], [0.941867, 0.680924], [0.698585, 0.612551], [0.584177, 0.375893], [0.554318, 0.433923], [0.534154, 0.37936], [0.711218, 0.180025], [0.66463, 0.147129], [0.5591, 0.097368], [0.871706, 0.208059], [0.591234, 0.626106], [0.544341, 0.548416], [0.624563, 0.075808], [0.88577, 0.384971], [0.551338, 0.304722], [0.55198, 0.295368], [0.552888, 0.284192], [0.555168, 0.269206], [0.569944, 0.232965], [0.593203, 0.314324], [0.599262, 0.318931], [0.6076, 0.322297], [0.631938, 0.3365], [0.752033, 0.398685], [0.547226, 0.579605], [0.563544, 0.640172], [0.583841, 0.631286], [0.586614, 0.307634], [0.771915, 0.316422], [0.531597, 0.647517], [0.588371, 0.195559], [0.520797, 0.557435], [0.567985, 0.506521], [0.543283, 0.180745], [0.655317, 0.254485], [0.621009, 0.425982], [0.62556, 0.219688], [0.680198, 0.429281], [0.642764, 0.395662], [0.704663, 0.37847], [0.552012, 0.137408], [0.589072, 0.491363], [0.685945, 0.224643], [0.645735, 0.18736], [0.675343, 0.296022], [0.810858, 0.353695], [0.720122, 0.285333], [0.866152, 0.317295], [0.663187, 0.355403], [0.570082, 0.533674], [0.544562, 0.451624], [0.562759, 0.441215], [0.531987, 0.46986], [0.585271, 0.664823], [0.622953, 0.677221], [0.655896, 0.679837], [0.687132, 0.677654], [0.716482, 0.666799], [0.758757, 0.617213], [0.897013, 0.531231], [0.732392, 0.575453], [0.702114, 0.566837], [0.666525, 0.566134], [0.633505, 0.573912], [0.603876, 0.583413], [0.579658, 0.590055], [0.99244, 0.519223], [0.567192, 0.43058], [0.541366, 0.521101], [0.526564, 0.453882], [0.523913, 0.43617], [0.531529, 0.444943], [0.566036, 0.417671], [0.516311, 0.436946], [0.517472, 0.422123], [0.573595, 0.610193], [0.560698, 0.604668], [0.549756, 0.600249], [0.710288, 0.631747], [0.72333, 0.636627]], M3 = [173, 155, 133, 246, 33, 7, 382, 398, 362, 263, 466, 249, 308, 415, 324, 78, 95, 191, 356, 389, 264, 127, 34, 162, 368, 264, 389, 139, 162, 34, 267, 0, 302, 37, 72, 0, 11, 302, 0, 11, 0, 72, 349, 451, 350, 120, 121, 231, 452, 350, 451, 232, 231, 121, 267, 302, 269, 37, 39, 72, 303, 269, 302, 73, 72, 39, 357, 343, 350, 128, 121, 114, 277, 350, 343, 47, 114, 121, 350, 452, 357, 121, 128, 232, 453, 357, 452, 233, 232, 128, 299, 333, 297, 69, 67, 104, 332, 297, 333, 103, 104, 67, 175, 152, 396, 175, 171, 152, 377, 396, 152, 148, 152, 171, 381, 384, 382, 154, 155, 157, 398, 382, 384, 173, 157, 155, 280, 347, 330, 50, 101, 118, 348, 330, 347, 119, 118, 101, 269, 303, 270, 39, 40, 73, 304, 270, 303, 74, 73, 40, 9, 336, 151, 9, 151, 107, 337, 151, 336, 108, 107, 151, 344, 278, 360, 115, 131, 48, 279, 360, 278, 49, 48, 131, 262, 431, 418, 32, 194, 211, 424, 418, 431, 204, 211, 194, 304, 408, 270, 74, 40, 184, 409, 270, 408, 185, 184, 40, 272, 310, 407, 42, 183, 80, 415, 407, 310, 191, 80, 183, 322, 270, 410, 92, 186, 40, 409, 410, 270, 185, 40, 186, 347, 449, 348, 118, 119, 229, 450, 348, 449, 230, 229, 119, 434, 432, 430, 214, 210, 212, 422, 430, 432, 202, 212, 210, 313, 314, 18, 83, 18, 84, 17, 18, 314, 17, 84, 18, 307, 375, 306, 77, 76, 146, 291, 306, 375, 61, 146, 76, 259, 387, 260, 29, 30, 160, 388, 260, 387, 161, 160, 30, 286, 414, 384, 56, 157, 190, 398, 384, 414, 173, 190, 157, 418, 424, 406, 194, 182, 204, 335, 406, 424, 106, 204, 182, 367, 416, 364, 138, 135, 192, 434, 364, 416, 214, 192, 135, 391, 423, 327, 165, 98, 203, 358, 327, 423, 129, 203, 98, 298, 301, 284, 68, 54, 71, 251, 284, 301, 21, 71, 54, 4, 275, 5, 4, 5, 45, 281, 5, 275, 51, 45, 5, 254, 373, 253, 24, 23, 144, 374, 253, 373, 145, 144, 23, 320, 321, 307, 90, 77, 91, 375, 307, 321, 146, 91, 77, 280, 425, 411, 50, 187, 205, 427, 411, 425, 207, 205, 187, 421, 313, 200, 201, 200, 83, 18, 200, 313, 18, 83, 200, 335, 321, 406, 106, 182, 91, 405, 406, 321, 181, 91, 182, 405, 321, 404, 181, 180, 91, 320, 404, 321, 90, 91, 180, 17, 314, 16, 17, 16, 84, 315, 16, 314, 85, 84, 16, 425, 266, 426, 205, 206, 36, 423, 426, 266, 203, 36, 206, 369, 396, 400, 140, 176, 171, 377, 400, 396, 148, 171, 176, 391, 269, 322, 165, 92, 39, 270, 322, 269, 40, 39, 92, 417, 465, 413, 193, 189, 245, 464, 413, 465, 244, 245, 189, 257, 258, 386, 27, 159, 28, 385, 386, 258, 158, 28, 159, 260, 388, 467, 30, 247, 161, 466, 467, 388, 246, 161, 247, 248, 456, 419, 3, 196, 236, 399, 419, 456, 174, 236, 196, 333, 298, 332, 104, 103, 68, 284, 332, 298, 54, 68, 103, 285, 8, 417, 55, 193, 8, 168, 417, 8, 168, 8, 193, 340, 261, 346, 111, 117, 31, 448, 346, 261, 228, 31, 117, 285, 417, 441, 55, 221, 193, 413, 441, 417, 189, 193, 221, 327, 460, 326, 98, 97, 240, 328, 326, 460, 99, 240, 97, 277, 355, 329, 47, 100, 126, 371, 329, 355, 142, 126, 100, 309, 392, 438, 79, 218, 166, 439, 438, 392, 219, 166, 218, 381, 382, 256, 154, 26, 155, 341, 256, 382, 112, 155, 26, 360, 279, 420, 131, 198, 49, 429, 420, 279, 209, 49, 198, 365, 364, 379, 136, 150, 135, 394, 379, 364, 169, 135, 150, 355, 277, 437, 126, 217, 47, 343, 437, 277, 114, 47, 217, 443, 444, 282, 223, 52, 224, 283, 282, 444, 53, 224, 52, 281, 275, 363, 51, 134, 45, 440, 363, 275, 220, 45, 134, 431, 262, 395, 211, 170, 32, 369, 395, 262, 140, 32, 170, 337, 299, 338, 108, 109, 69, 297, 338, 299, 67, 69, 109, 335, 273, 321, 106, 91, 43, 375, 321, 273, 146, 43, 91, 348, 450, 349, 119, 120, 230, 451, 349, 450, 231, 230, 120, 467, 359, 342, 247, 113, 130, 446, 342, 359, 226, 130, 113, 282, 283, 334, 52, 105, 53, 293, 334, 283, 63, 53, 105, 250, 458, 462, 20, 242, 238, 461, 462, 458, 241, 238, 242, 276, 353, 300, 46, 70, 124, 383, 300, 353, 156, 124, 70, 325, 292, 324, 96, 95, 62, 308, 324, 292, 78, 62, 95, 283, 276, 293, 53, 63, 46, 300, 293, 276, 70, 46, 63, 447, 264, 345, 227, 116, 34, 372, 345, 264, 143, 34, 116, 352, 345, 346, 123, 117, 116, 340, 346, 345, 111, 116, 117, 1, 19, 274, 1, 44, 19, 354, 274, 19, 125, 19, 44, 248, 281, 456, 3, 236, 51, 363, 456, 281, 134, 51, 236, 425, 426, 427, 205, 207, 206, 436, 427, 426, 216, 206, 207, 380, 381, 252, 153, 22, 154, 256, 252, 381, 26, 154, 22, 391, 393, 269, 165, 39, 167, 267, 269, 393, 37, 167, 39, 199, 428, 200, 199, 200, 208, 421, 200, 428, 201, 208, 200, 330, 329, 266, 101, 36, 100, 371, 266, 329, 142, 100, 36, 422, 432, 273, 202, 43, 212, 287, 273, 432, 57, 212, 43, 290, 250, 328, 60, 99, 20, 462, 328, 250, 242, 20, 99, 258, 286, 385, 28, 158, 56, 384, 385, 286, 157, 56, 158, 342, 446, 353, 113, 124, 226, 265, 353, 446, 35, 226, 124, 257, 386, 259, 27, 29, 159, 387, 259, 386, 160, 159, 29, 430, 422, 431, 210, 211, 202, 424, 431, 422, 204, 202, 211, 445, 342, 276, 225, 46, 113, 353, 276, 342, 124, 113, 46, 424, 422, 335, 204, 106, 202, 273, 335, 422, 43, 202, 106, 306, 292, 307, 76, 77, 62, 325, 307, 292, 96, 62, 77, 366, 447, 352, 137, 123, 227, 345, 352, 447, 116, 227, 123, 302, 268, 303, 72, 73, 38, 271, 303, 268, 41, 38, 73, 371, 358, 266, 142, 36, 129, 423, 266, 358, 203, 129, 36, 327, 294, 460, 98, 240, 64, 455, 460, 294, 235, 64, 240, 294, 331, 278, 64, 48, 102, 279, 278, 331, 49, 102, 48, 303, 271, 304, 73, 74, 41, 272, 304, 271, 42, 41, 74, 427, 436, 434, 207, 214, 216, 432, 434, 436, 212, 216, 214, 304, 272, 408, 74, 184, 42, 407, 408, 272, 183, 42, 184, 394, 430, 395, 169, 170, 210, 431, 395, 430, 211, 210, 170, 395, 369, 378, 170, 149, 140, 400, 378, 369, 176, 140, 149, 296, 334, 299, 66, 69, 105, 333, 299, 334, 104, 105, 69, 417, 168, 351, 193, 122, 168, 6, 351, 168, 6, 168, 122, 280, 411, 352, 50, 123, 187, 376, 352, 411, 147, 187, 123, 319, 320, 325, 89, 96, 90, 307, 325, 320, 77, 90, 96, 285, 295, 336, 55, 107, 65, 296, 336, 295, 66, 65, 107, 404, 320, 403, 180, 179, 90, 319, 403, 320, 89, 90, 179, 330, 348, 329, 101, 100, 119, 349, 329, 348, 120, 119, 100, 334, 293, 333, 105, 104, 63, 298, 333, 293, 68, 63, 104, 323, 454, 366, 93, 137, 234, 447, 366, 454, 227, 234, 137, 16, 315, 15, 16, 15, 85, 316, 15, 315, 86, 85, 15, 429, 279, 358, 209, 129, 49, 331, 358, 279, 102, 49, 129, 15, 316, 14, 15, 14, 86, 317, 14, 316, 87, 86, 14, 8, 285, 9, 8, 9, 55, 336, 9, 285, 107, 55, 9, 329, 349, 277, 100, 47, 120, 350, 277, 349, 121, 120, 47, 252, 253, 380, 22, 153, 23, 374, 380, 253, 145, 23, 153, 402, 403, 318, 178, 88, 179, 319, 318, 403, 89, 179, 88, 351, 6, 419, 122, 196, 6, 197, 419, 6, 197, 6, 196, 324, 318, 325, 95, 96, 88, 319, 325, 318, 89, 88, 96, 397, 367, 365, 172, 136, 138, 364, 365, 367, 135, 138, 136, 288, 435, 397, 58, 172, 215, 367, 397, 435, 138, 215, 172, 438, 439, 344, 218, 115, 219, 278, 344, 439, 48, 219, 115, 271, 311, 272, 41, 42, 81, 310, 272, 311, 80, 81, 42, 5, 281, 195, 5, 195, 51, 248, 195, 281, 3, 51, 195, 273, 287, 375, 43, 146, 57, 291, 375, 287, 61, 57, 146, 396, 428, 175, 171, 175, 208, 199, 175, 428, 199, 208, 175, 268, 312, 271, 38, 41, 82, 311, 271, 312, 81, 82, 41, 444, 445, 283, 224, 53, 225, 276, 283, 445, 46, 225, 53, 254, 339, 373, 24, 144, 110, 390, 373, 339, 163, 110, 144, 295, 282, 296, 65, 66, 52, 334, 296, 282, 105, 52, 66, 346, 448, 347, 117, 118, 228, 449, 347, 448, 229, 228, 118, 454, 356, 447, 234, 227, 127, 264, 447, 356, 34, 127, 227, 336, 296, 337, 107, 108, 66, 299, 337, 296, 69, 66, 108, 151, 337, 10, 151, 10, 108, 338, 10, 337, 109, 108, 10, 278, 439, 294, 48, 64, 219, 455, 294, 439, 235, 219, 64, 407, 415, 292, 183, 62, 191, 308, 292, 415, 78, 191, 62, 358, 371, 429, 129, 209, 142, 355, 429, 371, 126, 142, 209, 345, 372, 340, 116, 111, 143, 265, 340, 372, 35, 143, 111, 388, 390, 466, 161, 246, 163, 249, 466, 390, 7, 163, 246, 352, 346, 280, 123, 50, 117, 347, 280, 346, 118, 117, 50, 295, 442, 282, 65, 52, 222, 443, 282, 442, 223, 222, 52, 19, 94, 354, 19, 125, 94, 370, 354, 94, 141, 94, 125, 295, 285, 442, 65, 222, 55, 441, 442, 285, 221, 55, 222, 419, 197, 248, 196, 3, 197, 195, 248, 197, 195, 197, 3, 359, 263, 255, 130, 25, 33, 249, 255, 263, 7, 33, 25, 275, 274, 440, 45, 220, 44, 457, 440, 274, 237, 44, 220, 300, 383, 301, 70, 71, 156, 368, 301, 383, 139, 156, 71, 417, 351, 465, 193, 245, 122, 412, 465, 351, 188, 122, 245, 466, 263, 467, 246, 247, 33, 359, 467, 263, 130, 33, 247, 389, 251, 368, 162, 139, 21, 301, 368, 251, 71, 21, 139, 374, 386, 380, 145, 153, 159, 385, 380, 386, 158, 159, 153, 379, 394, 378, 150, 149, 169, 395, 378, 394, 170, 169, 149, 351, 419, 412, 122, 188, 196, 399, 412, 419, 174, 196, 188, 426, 322, 436, 206, 216, 92, 410, 436, 322, 186, 92, 216, 387, 373, 388, 160, 161, 144, 390, 388, 373, 163, 144, 161, 393, 326, 164, 167, 164, 97, 2, 164, 326, 2, 97, 164, 354, 370, 461, 125, 241, 141, 462, 461, 370, 242, 141, 241, 0, 267, 164, 0, 164, 37, 393, 164, 267, 167, 37, 164, 11, 12, 302, 11, 72, 12, 268, 302, 12, 38, 12, 72, 386, 374, 387, 159, 160, 145, 373, 387, 374, 144, 145, 160, 12, 13, 268, 12, 38, 13, 312, 268, 13, 82, 13, 38, 293, 300, 298, 63, 68, 70, 301, 298, 300, 71, 70, 68, 340, 265, 261, 111, 31, 35, 446, 261, 265, 226, 35, 31, 380, 385, 381, 153, 154, 158, 384, 381, 385, 157, 158, 154, 280, 330, 425, 50, 205, 101, 266, 425, 330, 36, 101, 205, 423, 391, 426, 203, 206, 165, 322, 426, 391, 92, 165, 206, 429, 355, 420, 209, 198, 126, 437, 420, 355, 217, 126, 198, 391, 327, 393, 165, 167, 98, 326, 393, 327, 97, 98, 167, 457, 438, 440, 237, 220, 218, 344, 440, 438, 115, 218, 220, 382, 362, 341, 155, 112, 133, 463, 341, 362, 243, 133, 112, 457, 461, 459, 237, 239, 241, 458, 459, 461, 238, 241, 239, 434, 430, 364, 214, 135, 210, 394, 364, 430, 169, 210, 135, 414, 463, 398, 190, 173, 243, 362, 398, 463, 133, 243, 173, 262, 428, 369, 32, 140, 208, 396, 369, 428, 171, 208, 140, 457, 274, 461, 237, 241, 44, 354, 461, 274, 125, 44, 241, 316, 403, 317, 86, 87, 179, 402, 317, 403, 178, 179, 87, 315, 404, 316, 85, 86, 180, 403, 316, 404, 179, 180, 86, 314, 405, 315, 84, 85, 181, 404, 315, 405, 180, 181, 85, 313, 406, 314, 83, 84, 182, 405, 314, 406, 181, 182, 84, 418, 406, 421, 194, 201, 182, 313, 421, 406, 83, 182, 201, 366, 401, 323, 137, 93, 177, 361, 323, 401, 132, 177, 93, 408, 407, 306, 184, 76, 183, 292, 306, 407, 62, 183, 76, 408, 306, 409, 184, 185, 76, 291, 409, 306, 61, 76, 185, 410, 409, 287, 186, 57, 185, 291, 287, 409, 61, 185, 57, 436, 410, 432, 216, 212, 186, 287, 432, 410, 57, 186, 212, 434, 416, 427, 214, 207, 192, 411, 427, 416, 187, 192, 207, 264, 368, 372, 34, 143, 139, 383, 372, 368, 156, 139, 143, 457, 459, 438, 237, 218, 239, 309, 438, 459, 79, 239, 218, 352, 376, 366, 123, 137, 147, 401, 366, 376, 177, 147, 137, 4, 1, 275, 4, 45, 1, 274, 275, 1, 44, 1, 45, 428, 262, 421, 208, 201, 32, 418, 421, 262, 194, 32, 201, 327, 358, 294, 98, 64, 129, 331, 294, 358, 102, 129, 64, 367, 435, 416, 138, 192, 215, 433, 416, 435, 213, 215, 192, 455, 439, 289, 235, 59, 219, 392, 289, 439, 166, 219, 59, 328, 462, 326, 99, 97, 242, 370, 326, 462, 141, 242, 97, 326, 370, 2, 97, 2, 141, 94, 2, 370, 94, 141, 2, 460, 455, 305, 240, 75, 235, 289, 305, 455, 59, 235, 75, 448, 339, 449, 228, 229, 110, 254, 449, 339, 24, 110, 229, 261, 446, 255, 31, 25, 226, 359, 255, 446, 130, 226, 25, 449, 254, 450, 229, 230, 24, 253, 450, 254, 23, 24, 230, 450, 253, 451, 230, 231, 23, 252, 451, 253, 22, 23, 231, 451, 252, 452, 231, 232, 22, 256, 452, 252, 26, 22, 232, 256, 341, 452, 26, 232, 112, 453, 452, 341, 233, 112, 232, 413, 464, 414, 189, 190, 244, 463, 414, 464, 243, 244, 190, 441, 413, 286, 221, 56, 189, 414, 286, 413, 190, 189, 56, 441, 286, 442, 221, 222, 56, 258, 442, 286, 28, 56, 222, 442, 258, 443, 222, 223, 28, 257, 443, 258, 27, 28, 223, 444, 443, 259, 224, 29, 223, 257, 259, 443, 27, 223, 29, 259, 260, 444, 29, 224, 30, 445, 444, 260, 225, 30, 224, 260, 467, 445, 30, 225, 247, 342, 445, 467, 113, 247, 225, 250, 309, 458, 20, 238, 79, 459, 458, 309, 239, 79, 238, 290, 305, 392, 60, 166, 75, 289, 392, 305, 59, 75, 166, 460, 305, 328, 240, 99, 75, 290, 328, 305, 60, 75, 99, 376, 433, 401, 147, 177, 213, 435, 401, 433, 215, 213, 177, 250, 290, 309, 20, 79, 60, 392, 309, 290, 166, 60, 79, 411, 416, 376, 187, 147, 192, 433, 376, 416, 213, 192, 147, 341, 463, 453, 112, 233, 243, 464, 453, 463, 244, 243, 233, 453, 464, 357, 233, 128, 244, 465, 357, 464, 245, 244, 128, 412, 343, 465, 188, 245, 114, 357, 465, 343, 128, 114, 245, 437, 343, 399, 217, 174, 114, 412, 399, 343, 188, 114, 174, 363, 440, 360, 134, 131, 220, 344, 360, 440, 115, 220, 131, 456, 420, 399, 236, 174, 198, 437, 399, 420, 217, 198, 174, 456, 363, 420, 236, 198, 134, 360, 420, 363, 131, 134, 198, 361, 401, 288, 132, 58, 177, 435, 288, 401, 215, 177, 58, 353, 265, 383, 124, 156, 35, 372, 383, 265, 143, 35, 156, 255, 249, 339, 25, 110, 7, 390, 339, 249, 163, 7, 110, 261, 255, 448, 31, 228, 25, 339, 448, 255, 110, 25, 228, 14, 317, 13, 14, 13, 87, 312, 13, 317, 82, 87, 13, 317, 402, 312, 87, 82, 178, 311, 312, 402, 81, 178, 82, 402, 318, 311, 178, 81, 88, 310, 311, 318, 80, 88, 81, 318, 324, 310, 88, 80, 95, 415, 310, 324, 191, 95, 80], G1 = [[4, 0.070909939706326], [6, 0.032100144773722], [10, 0.008446550928056], [33, 0.058724168688059], [54, 0.007667080033571], [67, 0.009078059345484], [117, 0.009791937656701], [119, 0.014565368182957], [121, 0.018591361120343], [127, 0.005197994410992], [129, 0.120625205338001], [132, 0.005560018587857], [133, 0.05328618362546], [136, 0.066890455782413], [143, 0.014816547743976], [147, 0.014262833632529], [198, 0.025462191551924], [205, 0.047252278774977], [263, 0.058724168688059], [284, 0.007667080033571], [297, 0.009078059345484], [346, 0.009791937656701], [348, 0.014565368182957], [350, 0.018591361120343], [356, 0.005197994410992], [358, 0.120625205338001], [361, 0.005560018587857], [362, 0.05328618362546], [365, 0.066890455782413], [372, 0.014816547743976], [376, 0.014262833632529], [420, 0.025462191551924], [425, 0.047252278774977]], V2 = [];
for (let w = 0; w < c2.length; w++)
  V2[w] = 0;
G1.forEach(([w, c]) => {
  V2[w] = c;
});
const z2 = [];
for (let w = 0; w < V2.length; w++)
  z2[w] = Math.sqrt(V2[w]);
const G2 = [33, 263, 61, 291, 199];
G1.forEach(([w, c]) => {
  G2.includes(w) || G2.push(w);
});
G2.sort((w, c) => w - c);
let q2 = 0, t1 = 0;
for (let w = 0; w < c2.length; w++)
  c2[w][0] < c2[q2][0] && (q2 = w), c2[w][0] > c2[t1][0] && (t1 = w);
class T3 {
  constructor(c) {
    const v = c.height, f = c.width, M = f, y = 2 * Math.atan(v / (2 * M)), V = 2 * 1 * Math.tan(0.5 * y), _ = f * V / v;
    this.near = 1, this.far = 1e4, this.frameHeight = v, this.frameWidth = f, this.focalLength = M, this.fov = y, this.left = -0.5 * _, this.right = 0.5 * _, this.bottom = -0.5 * V, this.top = 0.5 * V, this.focalLength = M, this.center = [f / 2, v / 2];
  }
  estimate(c) {
    const p = this._projectToScreen(c);
    let g = this._cloneLandmarks(p);
    this._changeHandedness(g);
    const v = p.reduce(($, o2) => $ + o2[2], 0) / p.length, f = this._estimateScale(g);
    g = this._cloneLandmarks(p), this._moveAndRescaleZ(v, f, g), this._unprojectScreen(g), this._changeHandedness(g);
    const M = this._estimateScale(g);
    let y = this._cloneLandmarks(p);
    const V = f * M;
    this._moveAndRescaleZ(v, V, y), this._unprojectScreen(y), this._changeHandedness(y);
    const _ = this._solveWeightedOrthogonal(c2, y, z2), W = G.matFromArray(4, 4, G.CV_64F, [
      _[0][0],
      _[0][1],
      _[0][2],
      _[0][3],
      _[1][0],
      _[1][1],
      _[1][2],
      _[1][3],
      _[2][0],
      _[2][1],
      _[2][2],
      _[2][3],
      _[3][0],
      _[3][1],
      _[3][2],
      _[3][3]
    ]).inv(0).data64F, D = [
      [W[0], W[1], W[2], W[3]],
      [W[4], W[5], W[6], W[7]],
      [W[8], W[9], W[10], W[11]],
      [W[12], W[13], W[14], W[15]]
    ], X = [];
    for (let $ = 0; $ < y.length; $++) {
      X[$] = [];
      for (let o2 = 0; o2 < 3; o2++) {
        X[$][o2] = D[o2][3];
        for (let w2 = 0; w2 < 3; w2++)
          X[$][o2] += D[o2][w2] * y[$][w2];
      }
    }
    const J = [], t2 = [];
    G2.forEach(($) => {
      J.push(X[$][0], X[$][1], X[$][2]), t2.push(c[$][0] * this.frameWidth, c[$][1] * this.frameHeight);
    });
    const y2 = G.matFromArray(J.length / 3, 3, G.CV_64F, J), l = G.matFromArray(t2.length / 2, 2, G.CV_64F, t2), d = G.matFromArray(3, 3, G.CV_64F, [
      this.focalLength,
      0,
      this.center[0],
      0,
      this.focalLength,
      this.center[1],
      0,
      0,
      1
    ]), e2 = G.Mat.zeros(4, 1, G.CV_64F), b2 = new G.Mat(3, 1, G.CV_64F), l2 = new G.Mat(3, 1, G.CV_64F), Z = new G.Mat(3, 3, G.CV_64F);
    G.solvePnP(y2, l, d, e2, b2, l2, !1), G.Rodrigues(b2, Z);
    const I2 = [
      Z.data64F[0],
      Z.data64F[1],
      Z.data64F[2],
      l2.data64F[0],
      -Z.data64F[3],
      -Z.data64F[4],
      -Z.data64F[5],
      -l2.data64F[1],
      -Z.data64F[6],
      -Z.data64F[7],
      -Z.data64F[8],
      -l2.data64F[2],
      0,
      0,
      0,
      1
    ], K = X[t1][0] - X[q2][0];
    return { metricLandmarks: X, faceMatrix: I2, faceScale: K };
  }
  _estimateScale(c) {
    const p = this._solveWeightedOrthogonal(c2, c, z2);
    return Math.sqrt(p[0][0] * p[0][0] + p[0][1] * p[0][1] + p[0][2] * p[0][2]);
  }
  _solveWeightedOrthogonal(c, p, g) {
    const v = [], f = [];
    for (let l = 0; l < c.length; l++)
      v.push([c[l][0] * g[l], c[l][1] * g[l], c[l][2] * g[l]]), f.push([p[l][0] * g[l], p[l][1] * g[l], p[l][2] * g[l]]);
    const M = g.reduce((l, d) => l + d * d, 0), y = [];
    for (let l = 0; l < v.length; l++)
      y[l] = [
        v[l][0] * g[l],
        v[l][1] * g[l],
        v[l][2] * g[l]
      ];
    const V = [0, 0, 0];
    for (let l = 0; l < 3; l++) {
      for (let d = 0; d < y.length; d++)
        V[l] += y[d][l];
      V[l] /= M;
    }
    const _ = [];
    for (let l = 0; l < y.length; l++) {
      _[l] = [];
      for (let d = 0; d < 3; d++)
        _[l][d] = v[l][d] - V[d] * g[l];
    }
    const U = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let l = 0; l < 3; l++)
      for (let d = 0; d < 3; d++)
        for (let e2 = 0; e2 < f.length; e2++)
          U[l][d] += f[e2][l] * _[e2][d];
    const r2 = this._computeOptimalRotation(U), W = this._computeOptimalScale(_, v, f, r2), D = [[], [], []];
    for (let l = 0; l < 3; l++)
      for (let d = 0; d < 3; d++)
        D[l][d] = W * r2[l][d];
    const X = [];
    for (let l = 0; l < v.length; l++) {
      X[l] = [];
      for (let d = 0; d < 3; d++) {
        X[l][d] = f[l][d];
        for (let e2 = 0; e2 < 3; e2++)
          X[l][d] -= D[d][e2] * v[l][e2];
      }
    }
    const J = [];
    for (let l = 0; l < X.length; l++) {
      J[l] = [];
      for (let d = 0; d < 3; d++)
        J[l][d] = X[l][d] * g[l];
    }
    const t2 = [0, 0, 0];
    for (let l = 0; l < 3; l++) {
      for (let d = 0; d < J.length; d++)
        t2[l] += J[d][l];
      t2[l] /= M;
    }
    return [
      [D[0][0], D[0][1], D[0][2], t2[0]],
      [D[1][0], D[1][1], D[1][2], t2[1]],
      [D[2][0], D[2][1], D[2][2], t2[2]],
      [0, 0, 0, 1]
    ];
  }
  _computeOptimalRotation(c) {
    const p = G.matFromArray(3, 3, G.CV_64F, [
      c[0][0],
      c[0][1],
      c[0][2],
      c[1][0],
      c[1][1],
      c[1][2],
      c[2][0],
      c[2][1],
      c[2][2]
    ]), g = new G.Mat(3, 1, G.CV_64F), v = new G.Mat(3, 3, G.CV_64F), f = new G.Mat(3, 3, G.CV_64F);
    G.SVDecomp(p, g, v, f);
    const M = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let y = 0; y < 3; y++)
      for (let V = 0; V < 3; V++)
        for (let _ = 0; _ < 3; _++)
          M[y][V] += v.data64F[y * 3 + _] * f.data64F[_ * 3 + V];
    return M;
  }
  _computeOptimalScale(c, p, g, v) {
    const f = [];
    for (let _ = 0; _ < c.length; _++) {
      f[_] = [];
      for (let U = 0; U < 3; U++) {
        f[_][U] = 0;
        for (let r2 = 0; r2 < 3; r2++)
          f[_][U] += v[U][r2] * c[_][r2];
      }
    }
    let M = 0;
    for (let _ = 0; _ < f.length; _++)
      for (let U = 0; U < 3; U++)
        M += f[_][U] * g[_][U];
    let y = 0;
    for (let _ = 0; _ < c.length; _++)
      for (let U = 0; U < 3; U++)
        y += c[_][U] * p[_][U];
    return M / y;
  }
  _projectToScreen(c) {
    const p = [], g = this.right - this.left, v = this.top - this.bottom, f = this.left, M = this.bottom;
    for (let y = 0; y < c.length; y++)
      p.push([
        c[y][0] * g + f,
        (1 - c[y][1]) * v + M,
        c[y][2] * g
      ]);
    return p;
  }
  _cloneLandmarks(c) {
    const p = [];
    for (let g = 0; g < c.length; g++)
      p[g] = [c[g][0], c[g][1], c[g][2]];
    return p;
  }
  _changeHandedness(c) {
    for (let p = 0; p < c.length; p++)
      c[p][2] *= -1;
  }
  _moveAndRescaleZ(c, p, g) {
    for (let v = 0; v < g.length; v++)
      g[v][2] = (g[v][2] - c + this.near) / p;
  }
  _unprojectScreen(c) {
    for (let p = 0; p < c.length; p++)
      c[p][0] = c[p][0] * c[p][2] / this.near, c[p][1] = c[p][1] * c[p][2] / this.near;
  }
}
const N2 = Q2.length, j3 = (w) => {
  class c extends w.BufferGeometry {
    constructor(g = {}) {
      super(), this.positions = new Float32Array(N2 * 3), this.uvs = new Float32Array(N2 * 2), this.setAttribute("position", new w.BufferAttribute(this.positions, 3)), this.setAttribute("uv", new w.BufferAttribute(this.uvs, 2)), this.setUvs(), this.setIndex(M3);
    }
    setUvs() {
      for (let g = 0; g < N2; g++)
        this.uvs[g * 2] = Q2[g][0], this.uvs[g * 2 + 1] = Q2[g][1];
      this.getAttribute("uv").needsUpdate = !0;
    }
    updatePositions(g) {
      for (let v = 0; v < N2; v++)
        this.positions[v * 3 + 0] = g[v][0], this.positions[v * 3 + 1] = g[v][1], this.positions[v * 3 + 2] = g[v][2];
      this.attributes.position.needsUpdate = !0, this.computeVertexNormals();
    }
  }
  return new c();
}, k3 = 1e-3, O3 = 1;
class S3 {
  constructor({ onUpdate: c = null, filterMinCF: p = null, filterBeta: g = null }) {
    this.customFaceGeometries = [], this.estimator = null, this.lastEstimateResult = null, this.filterMinCF = p === null ? k3 : p, this.filterBeta = g === null ? O3 : g, this.onUpdate = c, this.landmarkFilters = [];
    for (let v = 0; v < c2.length; v++)
      this.landmarkFilters[v] = new $2({ minCutOff: this.filterMinCF, beta: this.filterBeta });
    this.faceMatrixFilter = new $2({ minCutOff: this.filterMinCF, beta: this.filterBeta }), this.faceScaleFilter = new $2({ minCutOff: this.filterMinCF, beta: this.filterBeta });
  }
  async setup(c) {
    await E3(), this.faceMeshHelper = new F3(), this.estimator = new T3(c);
  }
  getCameraParams() {
    return {
      fov: this.estimator.fov * 180 / Math.PI,
      aspect: this.estimator.frameWidth / this.estimator.frameHeight,
      near: this.estimator.near,
      far: this.estimator.far
    };
  }
  async dummyRun(c) {
    await this.faceMeshHelper.detect(c);
  }
  processVideo(c) {
    if (this.processingVideo)
      return;
    this.processingVideo = !0;
    const p = async () => {
      const g = await this.faceMeshHelper.detect(c);
      if (g.multiFaceLandmarks.length === 0) {
        this.lastEstimateResult = null, this.onUpdate({ hasFace: !1 });
        for (let v = 0; v < this.landmarkFilters.length; v++)
          this.landmarkFilters[v].reset();
        this.faceMatrixFilter.reset(), this.faceScaleFilter.reset();
      } else {
        const v = g.multiFaceLandmarks[0].map((M) => [M.x, M.y, M.z]), f = this.estimator.estimate(v);
        if (this.lastEstimateResult === null)
          this.lastEstimateResult = f;
        else {
          const M = this.lastEstimateResult.metricLandmarks;
          this.lastEstimateResult.faceMatrix, this.lastEstimateResult.faceScale;
          const y = [];
          for (let U = 0; U < M.length; U++)
            y[U] = this.landmarkFilters[U].filter(Date.now(), f.metricLandmarks[U]);
          const V = this.faceMatrixFilter.filter(Date.now(), f.faceMatrix), _ = this.faceScaleFilter.filter(Date.now(), [f.faceScale]);
          this.lastEstimateResult = {
            metricLandmarks: y,
            faceMatrix: V,
            faceScale: _[0]
          };
        }
        this.onUpdate && this.onUpdate({ hasFace: !0, estimateResult: this.lastEstimateResult });
        for (let M = 0; M < this.customFaceGeometries.length; M++)
          this.customFaceGeometries[M].updatePositions(f.metricLandmarks);
      }
      this.processingVideo && window.requestAnimationFrame(p);
    };
    window.requestAnimationFrame(p);
  }
  stopProcessVideo() {
    this.processingVideo = !1;
  }
  createThreeFaceGeometry(c) {
    const p = j3(c);
    return this.customFaceGeometries.push(p), p;
  }
  getLandmarkMatrix(c) {
    const { metricLandmarks: p, faceMatrix: g, faceScale: v } = this.lastEstimateResult, f = g, M = v, y = [p[c][0], p[c][1], p[c][2]];
    return [
      f[0] * M,
      f[1] * M,
      f[2] * M,
      f[0] * y[0] + f[1] * y[1] + f[2] * y[2] + f[3],
      f[4] * M,
      f[5] * M,
      f[6] * M,
      f[4] * y[0] + f[5] * y[1] + f[6] * y[2] + f[7],
      f[8] * M,
      f[9] * M,
      f[10] * M,
      f[8] * y[0] + f[9] * y[1] + f[10] * y[2] + f[11],
      f[12] * M,
      f[13] * M,
      f[14] * M,
      f[12] * y[0] + f[13] * y[1] + f[14] * y[2] + f[15]
    ];
  }
}
export {
  S3 as C
};
