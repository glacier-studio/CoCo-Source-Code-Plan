/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2734
 */

function n() {
  module.exports = n = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t]
      for (var a in n) if (Object.prototype.hasOwnProperty.call(n, a)) {
        e[a] = n[a]
      }
    }
    return e
  }
  return n.apply(this, arguments)
}
module.exports = n
