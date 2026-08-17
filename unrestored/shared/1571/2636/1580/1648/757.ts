/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：757
 */

var r = require(/* 476 */"../1282/476")
var o = require(/* 1235 */"../1782/246/1235")
module.exports = o ? function (e) {
  return "symbol" == typeof e
} : function (e) {
  var t = r("Symbol")
  return "function" == typeof t && Object(e) instanceof t
}
