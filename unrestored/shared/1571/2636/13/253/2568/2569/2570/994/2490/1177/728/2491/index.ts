/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2491
 */

var r = require(/* 1175 */"../../../../../2571/1175")
var i = require(/* 2492 */"./2492/index")
var o = require(/* 479 */"../../../../../../../../2583/2584/479")
var a = require(/* 1438 */"../../../../../../../../../797/101/2538/2539/2540/999/1438")
var s = /^\[object .+?Constructor\]$/
var /* [auto-meaningful-name] */Function$prototype = Function.prototype
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */Function$prototype$toString = Function$prototype.toString
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object$prototype.hasOwnProperty
var d = RegExp("^" + Function$prototype$toString.call(Object$prototype$hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
module.exports = function (e) {
  return !(!o(e) || i(e)) && (r(e) ? d : s).test(a(e))
}
