/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2540
 */

var r = require(/* 994 */"../../../../../253/2568/2569/2570/994/index")
var i = require(/* 1451 */"../../../../../253/2588/2589/2590/2591/1451")
var o = require(/* 1452 */"./1452")
var a = require(/* 2541 */"./2541/index")
var s = require(/* 2542 */"./2542")
var c = require(/* 1454 */"../../../../../253/2568/2569/2570/2571/1454")
var u = require(/* 1455 */"../../../../../253/2568/2569/2570/2571/1455")
var l = require(/* 2545 */"./2545/index")
var f = require(/* 2546 */"./2546/index")
var d = require(/* 1442 */"./1442/index")
var h = require(/* 2547 */"./2547")
var p = require(/* 999 */"./999/index")
var _ = require(/* 2548 */"./2548")
var A = require(/* 2549 */"./2549/index")
var g = require(/* 1458 */"../../../../../253/2568/2569/2570/2571/1458/index")
var v = require(/* 451 */"../../../2466/2467/451")
var m = require(/* 992 */"../../../../../253/2568/2569/2570/2571/992/index")
var y = require(/* 2554 */"./2554/index")
var b = require(/* 479 */"../../../../../253/2583/2584/479")
var w = require(/* 2556 */"./2556/index")
var E = require(/* 862 */"../../../2466/1167/1431/862/index")
var x = require(/* 865 */"../../../../../253/2568/2569/2570/865/index")
var C = {}
C["[object Arguments]"] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C["[object Object]"] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = true
C["[object Error]"] = C["[object Function]"] = C["[object WeakMap]"] = false
module.exports = function e(t, n, O, k, S, T) {
  var B
  var D = 1 & n
  var I = 2 & n
  var R = 4 & n
  if (O) {
    B = S ? O(t, k, S, T) : O(t)
  }
  if (undefined !== B) {
    return B
  }
  if (!b(t)) {
    return t
  }
  var F = v(t)
  if (F) {
    B = _(t)
    if (!D) {
      return u(t, B)
    }
  } else {
    var P = p(t)
    var N = "[object Function]" == P || "[object GeneratorFunction]" == P
    if (m(t)) {
      return c(t, D)
    }
    if ("[object Object]" == P || "[object Arguments]" == P || N && !S) {
      B = I || N ? {} : g(t)
      if (!D) {
        return I ? f(t, s(B, t)) : l(t, a(B, t))
      }
    } else {
      if (!C[P]) {
        return S ? t : {}
      }
      B = A(t, P, D)
    }
  }
  if (!T) {
    T = new r()
  }
  var M = T.get(t)
  if (M) {
    return M
  }
  T.set(t, B)
  if (w(t)) {
    t.forEach(function (r) {
      B.add(e(r, n, O, r, t, T))
    })
  } else {
    if (y(t)) {
      t.forEach(function (r, i) {
        B.set(i, e(r, n, O, i, t, T))
      })
    }
  }
  var L = F ? undefined : (R ? I ? h : d : I ? x : E)(t)
  i(L || t, function (r, i) {
    if (L) {
      r = t[i = r]
    }
    o(B, i, e(r, n, O, i, t, T))
  })
  return B
}
