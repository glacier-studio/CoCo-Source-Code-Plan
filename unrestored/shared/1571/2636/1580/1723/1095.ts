/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1095
 */

var r = require(/* 168 */"../1648/168")
var /* [auto-meaningful-name] */require_194_$$_1648_194$RegExp = require(/* 194 */"../1648/194").RegExp
exports.UNSUPPORTED_Y = r(function () {
  var e = require_194_$$_1648_194$RegExp("a", "y")
  e.lastIndex = 2
  return null != e.exec("abcd")
})
exports.BROKEN_CARET = r(function () {
  var e = require_194_$$_1648_194$RegExp("^r", "gy")
  e.lastIndex = 2
  return null != e.exec("str")
})
