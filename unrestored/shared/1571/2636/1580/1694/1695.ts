/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1695
 */

"use strict"

var r = require(/* 443 */"../1774/443")
var o = require(/* 231 */"../1282/231")
var /* [auto-meaningful-name] */$slice = [].slice
var a = {}
var s = function (e, t, n) {
  if (!(t in a)) {
    for (var r = [], o = 0; o < t; o++) {
      r[o] = "a[" + o + "]"
    }
    a[t] = Function("C,a", "return new C(" + r.join(",") + ")")
  }
  return a[t](e, n)
}
module.exports = Function.bind || function (e) {
  var t = r(this)
  var n = $slice.call(arguments, 1)
  var a = function () {
    var r = n.concat($slice.call(arguments))
    return this instanceof a ? s(t, r.length, r) : t.apply(e, r)
  }
  if (o(t.prototype)) {
    a.prototype = t.prototype
  }
  return a
}
