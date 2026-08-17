/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2553
 */

var r = require(/* 479 */"../../../../../2583/2584/479")
var /* [auto-meaningful-name] */Object$create = Object.create
var o = function () {
  function e() {}
  return function (t) {
    if (!r(t)) {
      return {}
    }
    if (Object$create) {
      return Object$create(t)
    }
    e.prototype = t
    var n = new e()
    e.prototype = undefined
    return n
  }
}()
module.exports = o
