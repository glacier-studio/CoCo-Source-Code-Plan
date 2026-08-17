/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1180
 */

var r = require(/* 451 */"../../../2467/451")
var i = require(/* 1000 */"../../../../../../253/2588/1461/2586/1000")
var o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
var a = /^\w*$/
module.exports = function (e, t) {
  if (r(e)) {
    return false
  }
  var n = typeof e
  return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || a.test(e) || !o.test(e) || null != t && e in Object(t)
}
