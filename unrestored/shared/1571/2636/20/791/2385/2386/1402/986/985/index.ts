/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：985
 */

var r = require(/* 2388 */"./2388")
module.exports = function (e) {
  return function () {
    return new r(e.apply(this, arguments))
  }
}
