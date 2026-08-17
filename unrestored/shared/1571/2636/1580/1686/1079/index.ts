/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1079
 */

var r = require(/* 1076 */"./1076")
var /* [auto-meaningful-name] */Function$toString = Function.toString
if ("function" != typeof r.inspectSource) {
  r.inspectSource = function (e) {
    return Function$toString.call(e)
  }
}
module.exports = r.inspectSource
