/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：784
 */

var r = require(/* 1333 */"./1333")
var i = require(/* 1336 */"./1336")
var o = require(/* 2020 */"./2020/index")
function a(e, t) {
  return new o(t).process(e)
}
(exports = module.exports = a).filterXSS = a
exports.FilterXSS = o;
(function () {
  for (var e in r) exports[e] = r[e]
  for (var n in i) exports[n] = i[n]
})()
if ("undefined" !== typeof window) {
  window.filterXSS = module.exports
}
if ("undefined" !== typeof self && "undefined" !== typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope) {
  self.filterXSS = module.exports
}
