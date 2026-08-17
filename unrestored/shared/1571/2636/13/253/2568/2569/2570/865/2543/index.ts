/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2543
 */

var r = require(/* 479 */"../../../../../2583/2584/479")
var i = require(/* 1174 */"../../2571/1458/1174")
var o = require(/* 2544 */"./2544")
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
module.exports = function (e) {
  if (!r(e)) {
    return o(e)
  }
  var t = i(e)
  var n = []
  for (var s in e) if ("constructor" != s || !t && Object$prototype$hasOwnProperty.call(e, s)) {
    n.push(s)
  }
  return n
}
