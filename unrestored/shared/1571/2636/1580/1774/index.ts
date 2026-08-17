/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1774
 */

"use strict"

var r = require(/* 257 */"../1754/257/index")
var o = require(/* 194 */"../1648/194")
var i = require(/* 168 */"../1648/168")
var a = require(/* 443 */"./443")
var s = require(/* 256 */"../1775/256")
var c = require(/* 1252 */"./1252")
var l = require(/* 1253 */"./1253/index")
var u = require(/* 1254 */"./1254")
var d = require(/* 633 */"./633")
var p = require(/* 1089 */"./1089")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray
var /* [auto-meaningful-name] */r$exportTypedArrayMethod = r.exportTypedArrayMethod
var /* [auto-meaningful-name] */o$Uint16Array = o.Uint16Array
var g = o$Uint16Array && o$Uint16Array.prototype.sort
var _ = !!g && !i(function () {
  var e = new o$Uint16Array(2)
  e.sort(null)
  e.sort({})
})
var v = !!g && !i(function () {
  if (d) {
    return d < 74
  }
  if (l) {
    return l < 67
  }
  if (u) {
    return true
  }
  if (p) {
    return p < 602
  }
  var e
  var t
  var n = new o$Uint16Array(516)
  var r = Array(516)
  for (e = 0; e < 516; e++) {
    t = e % 4
    n[e] = 515 - e
    r[e] = e - 2 * t + 3
  }
  for (n.sort(function (e, t) {
    return (e / 4 | 0) - (t / 4 | 0)
  }), e = 0; e < 516; e++) {
    if (n[e] !== r[e]) {
      return true
    }
  }
})
r$exportTypedArrayMethod("sort", function (e) {
  if (undefined !== e) {
    a(e)
  }
  if (v) {
    return g.call(this, e)
  }
  r$aTypedArray(this)
  var t
  var n = s(this.length)
  var r = Array(n)
  for (t = 0; t < n; t++) {
    r[t] = this[t]
  }
  for (r = c(this, function (e) {
    return function (t, n) {
      return undefined !== e ? +e(t, n) || 0 : n !== n ? -1 : t !== t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n
    }
  }(e)), t = 0; t < n; t++) {
    this[t] = r[t]
  }
  return this
}, !v || _)
