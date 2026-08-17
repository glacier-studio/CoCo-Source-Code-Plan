/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：310
 */

var r = require(/* 757 */"../1648/757")
module.exports = function (e) {
  if (r(e)) {
    throw TypeError("Cannot convert a Symbol value to a string")
  }
  return String(e)
}
