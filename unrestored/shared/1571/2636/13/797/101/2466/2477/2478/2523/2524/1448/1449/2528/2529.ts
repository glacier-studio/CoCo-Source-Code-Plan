/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2529
 */

var r = require(/* 861 */"../../../../../../../2467/727/861")
var i = require(/* 1437 */"../../../../../../1437")
var o = require(/* 451 */"../../../../../../../2467/451")
var a = require(/* 1000 */"../../../../../../../../../../253/2588/1461/2586/1000")
var s = r ? r.prototype : undefined
var c = s ? s.toString : undefined
module.exports = function e(t) {
  if ("string" == typeof t) {
    return t
  }
  if (o(t)) {
    return i(t, e) + ""
  }
  if (a(t)) {
    return c ? c.call(t) : ""
  }
  var n = t + ""
  return "0" == n && 1 / t == -1 / 0 ? "-0" : n
}
