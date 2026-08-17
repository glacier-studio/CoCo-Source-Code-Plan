/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2475
 */

var r = require(/* 1174 */"../../../../../../../253/2568/2569/2570/2571/1458/1174")
var i = require(/* 2476 */"./2476")
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
module.exports = function (e) {
  if (!r(e)) {
    return i(e)
  }
  var t = []
  for (var n in Object(e)) if (Object$prototype$hasOwnProperty.call(e, n) && "constructor" != n) {
    t.push(n)
  }
  return t
}
