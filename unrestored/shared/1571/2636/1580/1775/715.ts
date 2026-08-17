/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：715
 */

var r = require(/* 477 */"../1720/477")
var /* [auto-meaningful-name] */Math$max = Math.max
var /* [auto-meaningful-name] */Math$min = Math.min
module.exports = function (e, t) {
  var n = r(e)
  return n < 0 ? Math$max(n + t, 0) : Math$min(n, t)
}
