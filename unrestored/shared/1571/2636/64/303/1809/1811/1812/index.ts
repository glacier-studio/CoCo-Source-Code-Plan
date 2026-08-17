/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1812
 */

"use strict"

var r = require(/* 965 */"../../965/index")
var i = require(/* 1813 */"./1813")
var o = require(/* 1814 */"./1814")
module.exports = function (e) {
  for (var t, n = 0, a = ""; !t;) {
    a += o(i, r.get(), 1)
    t = e < Math.pow(16, n + 1)
    n++
  }
  return a
}
