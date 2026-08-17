/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1182
 */

var r = require(/* 1441 */"./1441")
module.exports = function (e) {
  var t = new e.constructor(e.byteLength)
  new r(t).set(new r(e))
  return t
}
