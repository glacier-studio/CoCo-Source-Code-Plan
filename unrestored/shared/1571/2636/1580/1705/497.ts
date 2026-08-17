/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：497
 */

var r = require(/* 334 */"../1648/334")
var o = require(/* 309 */"../1771/309")
var i = require(/* 946 */"../1581/946")
var a = require(/* 1088 */"../1700/1088")
var s = i("IE_PROTO")
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
module.exports = a ? Object.getPrototypeOf : function (e) {
  e = o(e)
  return r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Object$prototype : null
}
