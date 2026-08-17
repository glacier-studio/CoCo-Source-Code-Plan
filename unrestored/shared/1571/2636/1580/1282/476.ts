/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：476
 */

var r = require(/* 194 */"../1648/194")
var o = function (e) {
  return "function" == typeof e ? e : undefined
}
module.exports = function (e, t) {
  return arguments.length < 2 ? o(r[e]) : r[e] && r[e][t]
}
