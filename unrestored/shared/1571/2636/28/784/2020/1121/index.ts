/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1121
 */

var r = require(/* 1334 */"./1334")
var i = require(/* 2018 */"./2018/index")
for (var o in (exports = module.exports = function (e, t) {
  return new i(t).process(e)
}).FilterCSS = i, r) exports[o] = r[o]
if ("undefined" !== typeof window) {
  window.filterCSS = module.exports
}
