/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2467
 */

var r = require(/* 727 */"./727/index")
var i = require(/* 451 */"./451")
var o = require(/* 538 */"./538")
module.exports = function (e) {
  return "string" == typeof e || !i(e) && o(e) && "[object String]" == r(e)
}
