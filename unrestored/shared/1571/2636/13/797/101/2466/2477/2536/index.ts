/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2536
 */

var r = require(/* 1450 */"../../../../../253/2588/2589/2590/2591/1450/index")
var i = require(/* 771 */"./771/index")
module.exports = function (e, t) {
  var n = -1
  var o = i(e) ? Array(e.length) : []
  r(e, function (e, r, i) {
    o[++n] = t(e, r, i)
  })
  return o
}
