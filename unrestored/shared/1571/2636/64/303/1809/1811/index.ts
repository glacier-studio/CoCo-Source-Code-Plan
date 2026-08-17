/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1811
 */

"use strict"

var r
var i
var o = require(/* 1812 */"./1812/index")
require(/* 965 */"../965/index")
module.exports = function (e) {
  var t = ""
  var n = Math.floor(.001 * (Date.now() - 1567752802062))
  if (n === i) {
    r++
  } else {
    r = 0
    i = n
  }
  t += o(7)
  t += o(e)
  if (r > 0) {
    t += o(r)
  }
  return t += o(n)
}
