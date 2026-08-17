/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：194
 */

var n = function (e) {
  return e && e.Math == Math && e
}
module.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof global && global) || function () {
  return this
}() || Function("return this")()
