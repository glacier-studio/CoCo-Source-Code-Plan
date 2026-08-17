/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：727
 */

var r = require(/* 861 */"./861")
var i = require(/* 2468 */"./2468")
var o = require(/* 2469 */"./2469")
var a = r ? r.toStringTag : undefined
module.exports = function (e) {
  return null == e ? undefined === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e)
}
