/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1459
 */

var r = require(/* 1181 */"./1181/index")
var i = require(/* 863 */"./863")
module.exports = function (e, t, n) {
  if (undefined !== n && !i(e[t], n) || undefined === n && !(t in e)) {
    r(e, t, n)
  }
}
