/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：444
 */

var r = require(/* 424 */"../1720/424")
var o = require(/* 310 */"../1282/310")
var i = /"/g
module.exports = function (e, t, n, a) {
  var s = o(r(e))
  var c = "<" + t
  if ("" !== n) {
    c += " " + n + "=\"" + o(a).replace(i, "&quot;") + "\""
  }
  return c + ">" + s + "</" + t + ">"
}
