/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：835
 */

var r = require(/* 836 */"./836")
var o = require(/* 834 */"../949/834")
var i = require(/* 246 */"../1782/246/index")("iterator")
module.exports = function (e) {
  if (undefined != e) {
    return e[i] || e["@@iterator"] || o[r(e)]
  }
}
