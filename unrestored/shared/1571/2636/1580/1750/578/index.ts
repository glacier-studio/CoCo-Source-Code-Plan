/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：578
 */

"use strict"

var r = require(/* 86 */"../../1650/86/index")
var o = require(/* 194 */"../../1648/194")
var i = require(/* 271 */"../../1648/271")
var a = require(/* 1100 */"../../1767/1100")
var s = require(/* 257 */"../../1754/257/index")
var c = require(/* 1255 */"../../1621/1255/index")
var l = require(/* 639 */"../../1282/639")
var u = require(/* 631 */"../../1282/631")
var d = require(/* 425 */"../../1780/425")
var p = require(/* 1091 */"../../1652/1091")
var f = require(/* 256 */"../../1775/256")
var h = require(/* 1257 */"./1257")
var m = require(/* 1277 */"../../1771/1277/index")
var g = require(/* 632 */"../../1581/632")
var _ = require(/* 334 */"../../1648/334")
var v = require(/* 836 */"../../1282/836")
var b = require(/* 231 */"../../1282/231")
var y = require(/* 757 */"../../1648/757")
var E = require(/* 577 */"../../1648/577")
var O = require(/* 638 */"../../1706/638")
var /* [auto-meaningful-name] */require_635_$$_$$_1648_635$f = require(/* 635 */"../../1648/635").f
var C = require(/* 1278 */"../../1760/1278")
var /* [auto-meaningful-name] */require_401_$$_$$_1754_401$forEach = require(/* 401 */"../../1754/401").forEach
var S = require(/* 759 */"../../1707/759")
var A = require(/* 300 */"../../1648/300/index")
var I = require(/* 386 */"../../1648/386")
var j = require(/* 426 */"../../1282/426")
var N = require(/* 952 */"../../1648/952")
var /* [auto-meaningful-name] */j$get = j.get
var /* [auto-meaningful-name] */j$set = j.set
var x = A.f
var D = I.f
var /* [auto-meaningful-name] */Math$round = Math.round
var /* [auto-meaningful-name] */o$RangeError = o.RangeError
var /* [auto-meaningful-name] */c$ArrayBuffer = c.ArrayBuffer
var /* [auto-meaningful-name] */c$DataView = c.DataView
var /* [auto-meaningful-name] */s$NATIVE_ARRAY_BUFFER_VIEWS = s.NATIVE_ARRAY_BUFFER_VIEWS
var /* [auto-meaningful-name] */s$TYPED_ARRAY_CONSTRUCTOR = s.TYPED_ARRAY_CONSTRUCTOR
var /* [auto-meaningful-name] */s$TYPED_ARRAY_TAG = s.TYPED_ARRAY_TAG
var /* [auto-meaningful-name] */s$TypedArray = s.TypedArray
var /* [auto-meaningful-name] */s$TypedArrayPrototype = s.TypedArrayPrototype
var /* [auto-meaningful-name] */s$aTypedArrayConstructor = s.aTypedArrayConstructor
var /* [auto-meaningful-name] */s$isTypedArray = s.isTypedArray
var Y = function (e, t) {
  for (var n = 0, /* [auto-meaningful-name] */t$length = t.length, o = new (s$aTypedArrayConstructor(e))(t$length); t$length > n;) {
    o[n] = t[n++]
  }
  return o
}
var K = function (e, t) {
  x(e, t, {
    get: function () {
      return j$get(this)[t]
    }
  })
}
var q = function (e) {
  var t
  return e instanceof c$ArrayBuffer || "ArrayBuffer" == (t = v(e)) || "SharedArrayBuffer" == t
}
var X = function (e, t) {
  return s$isTypedArray(e) && !y(t) && t in e && p(+t) && t >= 0
}
var Q = function (e, t) {
  t = g(t)
  return X(e, t) ? u(2, e[t]) : D(e, t)
}
var Z = function (e, t, n) {
  t = g(t)
  return !(X(e, t) && b(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? x(e, t, n) : (e[t] = n.value, e)
}
if (i) {
  if (!s$NATIVE_ARRAY_BUFFER_VIEWS) {
    I.f = Q
    A.f = Z
    K(s$TypedArrayPrototype, "buffer")
    K(s$TypedArrayPrototype, "byteOffset")
    K(s$TypedArrayPrototype, "byteLength")
    K(s$TypedArrayPrototype, "length")
  }
  r({
    target: "Object",
    stat: true,
    forced: !s$NATIVE_ARRAY_BUFFER_VIEWS
  }, {
    getOwnPropertyDescriptor: Q,
    defineProperty: Z
  })
  module.exports = function (e, t, n) {
    var i = e.match(/\d+$/)[0] / 8
    var s = e + (n ? "Clamped" : "") + "Array"
    var c = "get" + e
    var u = "set" + e
    var p = o[s]
    var g = p
    var _ = g && g.prototype
    var v = {}
    var y = function (e, t) {
      x(e, t, {
        get: function () {
          return function (e, t) {
            var n = j$get(e)
            return n.view[c](t * i + n.byteOffset, true)
          }(this, t)
        },
        set: function (e) {
          return function (e, t, r) {
            var o = j$get(e)
            if (n) {
              r = (r = Math$round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r
            }
            o.view[u](t * i + o.byteOffset, r, true)
          }(this, t, e)
        },
        enumerable: true
      })
    }
    if (s$NATIVE_ARRAY_BUFFER_VIEWS) {
      if (a) {
        g = t(function (e, t, n, r) {
          l(e, g, s)
          return N(b(t) ? q(t) ? undefined !== r ? new p(t, m(n, i), r) : undefined !== n ? new p(t, m(n, i)) : new p(t) : s$isTypedArray(t) ? Y(g, t) : C.call(g, t) : new p(h(t)), e, g)
        })
        if (O) {
          O(g, s$TypedArray)
        }
        require_401_$$_$$_1754_401$forEach(require_635_$$_$$_1648_635$f(p), function (e) {
          if (!(e in g)) {
            d(g, e, p[e])
          }
        })
        g.prototype = _
      }
    } else {
      g = t(function (e, t, n, r) {
        l(e, g, s)
        var o
        var a
        var c
        var u = 0
        var d = 0
        if (b(t)) {
          if (!q(t)) {
            return s$isTypedArray(t) ? Y(g, t) : C.call(g, t)
          }
          o = t
          d = m(n, i)
          var /* [auto-meaningful-name] */t$byteLength = t.byteLength
          if (undefined === r) {
            if (t$byteLength % i) {
              throw o$RangeError("Wrong length")
            }
            if ((a = t$byteLength - d) < 0) {
              throw o$RangeError("Wrong length")
            }
          } else if ((a = f(r) * i) + d > t$byteLength) {
            throw o$RangeError("Wrong length")
          }
          c = a / i
        } else {
          c = h(t)
          o = new c$ArrayBuffer(a = c * i)
        }
        for (j$set(e, {
          buffer: o,
          byteOffset: d,
          byteLength: a,
          length: c,
          view: new c$DataView(o)
        }); u < c;) {
          y(e, u++)
        }
      })
      if (O) {
        O(g, s$TypedArray)
      }
      _ = g.prototype = E(s$TypedArrayPrototype)
    }
    if (_.constructor !== g) {
      d(_, "constructor", g)
    }
    d(_, s$TYPED_ARRAY_CONSTRUCTOR, g)
    if (s$TYPED_ARRAY_TAG) {
      d(_, s$TYPED_ARRAY_TAG, s)
    }
    v[s] = g
    r({
      global: true,
      forced: g != p,
      sham: !s$NATIVE_ARRAY_BUFFER_VIEWS
    }, v)
    if (!("BYTES_PER_ELEMENT" in g)) {
      d(g, "BYTES_PER_ELEMENT", i)
    }
    if (!("BYTES_PER_ELEMENT" in _)) {
      d(_, "BYTES_PER_ELEMENT", i)
    }
    S(s)
  }
} else {
  module.exports = function () {}
}
