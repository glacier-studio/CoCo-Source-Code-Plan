/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1783
 */

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 194 */"../1648/194")
var i = require(/* 1093 */"./1093/index")
r({
  global: true,
  bind: true,
  enumerable: true,
  forced: !o.setImmediate || !o.clearImmediate
}, {
  setImmediate: i.set,
  clearImmediate: i.clear
})
