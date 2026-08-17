/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2550
 */

var r = require(/* 1182 */"./1182/index")
module.exports = function (e, t) {
  var n = t ? r(e.buffer) : e.buffer
  return new e.constructor(n, e.byteOffset, e.byteLength)
}
