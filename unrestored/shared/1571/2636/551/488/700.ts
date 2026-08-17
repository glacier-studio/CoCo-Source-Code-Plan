/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：700
 */

"use strict"

function r(e) {
  return function () {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
    var n = t.width ? String(t.width) : e.defaultWidth
    var r = e.formats[n] || e.formats[e.defaultWidth]
    return r
  }
}
export { r as a }
export default r
