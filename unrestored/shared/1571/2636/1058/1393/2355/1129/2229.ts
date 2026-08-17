/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2229
 */

if ("function" === typeof Object.create) {
  module.exports = function (e, t) {
    e.super_ = t
    e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
  }
} else {
  module.exports = function (e, t) {
    e.super_ = t
    var n = function () {}
    n.prototype = t.prototype
    e.prototype = new n()
    e.prototype.constructor = e
  }
}
