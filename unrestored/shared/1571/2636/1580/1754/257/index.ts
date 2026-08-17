/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：257
 */

"use strict"

var r
var o
var i
var a = require(/* 1256 */"./1256")
var s = require(/* 271 */"../../1648/271")
var c = require(/* 194 */"../../1648/194")
var l = require(/* 231 */"../../1282/231")
var u = require(/* 334 */"../../1648/334")
var d = require(/* 836 */"../../1282/836")
var p = require(/* 425 */"../../1780/425")
var f = require(/* 400 */"../../1648/400")
var /* [auto-meaningful-name] */require_300_$$_$$_1648_300_index$f = require(/* 300 */"../../1648/300/index").f
var m = require(/* 497 */"../../1705/497")
var g = require(/* 638 */"../../1706/638")
var _ = require(/* 246 */"../../1782/246/index")
var v = require(/* 826 */"../../1581/826")
var /* [auto-meaningful-name] */c$Int8Array = c.Int8Array
var y = c$Int8Array && c$Int8Array.prototype
var /* [auto-meaningful-name] */c$Uint8ClampedArray = c.Uint8ClampedArray
var O = c$Uint8ClampedArray && c$Uint8ClampedArray.prototype
var w = c$Int8Array && m(c$Int8Array)
var C = y && m(y)
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */Object$prototype$isPrototypeOf = Object$prototype.isPrototypeOf
var A = _("toStringTag")
var I = v("TYPED_ARRAY_TAG")
var j = v("TYPED_ARRAY_CONSTRUCTOR")
var N = a && !!g && "Opera" !== d(c.opera)
var R = false
var k = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
}
var x = {
  BigInt64Array: 8,
  BigUint64Array: 8
}
var D = function (e) {
  if (!l(e)) {
    return false
  }
  var t = d(e)
  return u(k, t) || u(x, t)
}
for (r in k) if (i = (o = c[r]) && o.prototype) {
  p(i, j, o)
} else {
  N = false
}
for (r in x) if (i = (o = c[r]) && o.prototype) {
  p(i, j, o)
}
if ((!N || "function" != typeof w || w === Function.prototype) && (w = function () {
  throw TypeError("Incorrect invocation")
}, N)) {
  for (r in k) if (c[r]) {
    g(c[r], w)
  }
}
if ((!N || !C || C === Object$prototype) && (C = w.prototype, N)) {
  for (r in k) if (c[r]) {
    g(c[r].prototype, C)
  }
}
if (N && m(O) !== C) {
  g(O, C)
}
if (s && !u(C, A)) {
  for (r in R = true, require_300_$$_$$_1648_300_index$f(C, A, {
    get: function () {
      return l(this) ? this[I] : undefined
    }
  }), k) if (c[r]) {
    p(c[r], I, r)
  }
}
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: N,
  TYPED_ARRAY_CONSTRUCTOR: j,
  TYPED_ARRAY_TAG: R && I,
  aTypedArray: function (e) {
    if (D(e)) {
      return e
    }
    throw TypeError("Target is not a typed array")
  },
  aTypedArrayConstructor: function (e) {
    if (g && !Object$prototype$isPrototypeOf.call(w, e)) {
      throw TypeError("Target is not a typed array constructor")
    }
    return e
  },
  exportTypedArrayMethod: function (e, t, n) {
    if (s) {
      if (n) {
        for (var r in k) {
          var o = c[r]
          if (o && u(o.prototype, e)) {
            try {
              delete o.prototype[e]
            } catch (i) {}
          }
        }
      }
      if (!(C[e] && !n)) {
        f(C, e, n ? t : N && y[e] || t)
      }
    }
  },
  exportTypedArrayStaticMethod: function (e, t, n) {
    var r
    var o
    if (s) {
      if (g) {
        if (n) {
          for (r in k) if ((o = c[r]) && u(o, e)) {
            try {
              delete o[e]
            } catch (i) {}
          }
        }
        if (w[e] && !n) {
          return
        }
        try {
          return f(w, e, n ? t : N && w[e] || t)
        } catch (i) {}
      }
      for (r in k) if (!(!(o = c[r]) || o[e] && !n)) {
        f(o, e, t)
      }
    }
  },
  isView: function (e) {
    if (!l(e)) {
      return false
    }
    var t = d(e)
    return "DataView" === t || u(k, t) || u(x, t)
  },
  isTypedArray: D,
  TypedArray: w,
  TypedArrayPrototype: C
}
