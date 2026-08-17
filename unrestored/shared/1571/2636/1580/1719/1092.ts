/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1092
 */

"use strict"

var r = require(/* 477 */"../1720/477")
var o = require(/* 310 */"../1282/310")
var i = require(/* 424 */"../1720/424")
module.exports = function (e) {
  var t = o(i(this))
  var n = ""
  var a = r(e)
  if (a < 0 || a == 1 / 0) {
    throw RangeError("Wrong number of repetitions")
  }
  for (; a > 0; (a >>>= 1) && (t += t)) {
    if (1 & a) {
      n += t
    }
  }
  return n
}
