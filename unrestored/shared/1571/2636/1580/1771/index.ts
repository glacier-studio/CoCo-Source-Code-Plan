/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1771
 */

"use strict"

var r = require(/* 257 */"../1754/257/index")
var o = require(/* 256 */"../1775/256")
var i = require(/* 1277 */"./1277/index")
var a = require(/* 309 */"./309")
var s = require(/* 168 */"../1648/168")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("set", function (e) {
  r$aTypedArray(this)
  var t = i(arguments.length > 1 ? arguments[1] : undefined, 1)
  var /* [auto-meaningful-name] */this$length = this.length
  var r = a(e)
  var s = o(r.length)
  var l = 0
  if (s + t > this$length) {
    throw RangeError("Wrong length")
  }
  for (; l < s;) {
    this[t + l] = r[l++]
  }
}, s(function () {
  new Int8Array(1).set({})
}))
