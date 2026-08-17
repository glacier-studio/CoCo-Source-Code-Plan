/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2478
 */

var r = require(/* 2479 */"./2479/index")
var i = require(/* 2523 */"./2523/index")
var o = require(/* 993 */"../../1167/1435/993")
var a = require(/* 451 */"../../2467/451")
var s = require(/* 2533 */"./2533/index")
module.exports = function (e) {
  return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? a(e) ? i(e[0], e[1]) : r(e) : s(e)
}
