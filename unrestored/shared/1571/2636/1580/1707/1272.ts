/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1272
 */

var r = require(/* 168 */"../1648/168")
var /* [auto-meaningful-name] */require_194_$$_1648_194$RegExp = require(/* 194 */"../1648/194").RegExp
module.exports = r(function () {
  var e = require_194_$$_1648_194$RegExp("(?<a>b)", "g")
  return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
})
