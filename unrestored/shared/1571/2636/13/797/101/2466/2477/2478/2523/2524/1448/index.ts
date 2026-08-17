/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1448
 */

var r = require(/* 1449 */"./1449/index")
var i = require(/* 1001 */"../../../2533/1001")
module.exports = function (e, t) {
  for (var n = 0, /* [auto-meaningful-name] */TRTE$length = (t = r(t, e)).length; null != e && n < TRTE$length;) {
    e = e[i(t[n++])]
  }
  return n && n == TRTE$length ? e : undefined
}
