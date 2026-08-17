/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1626
 */

var r = require(/* 271 */"./1648/271")
var /* [auto-meaningful-name] */require_300_$_1648_300_index$f = require(/* 300 */"./1648/300/index").f
var /* [auto-meaningful-name] */Function$prototype = Function.prototype
var /* [auto-meaningful-name] */Function$prototype$toString = Function$prototype.toString
var s = /^\s*function ([^ (]*)/
if (r && !("name" in Function$prototype)) {
  require_300_$_1648_300_index$f(Function$prototype, "name", {
    configurable: true,
    get: function () {
      try {
        return Function$prototype$toString.call(this).match(s)[1]
      } catch (e) {
        return ""
      }
    }
  })
}
