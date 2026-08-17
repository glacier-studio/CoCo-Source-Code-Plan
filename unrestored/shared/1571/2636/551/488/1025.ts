/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1025
 */

"use strict"

function r(e) {
  return function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var r = t.match(e.matchPattern)
    if (!r) {
      return null
    }
    var i = r[0]
    var o = t.match(e.parsePattern)
    if (!o) {
      return null
    }
    var a = e.valueCallback ? e.valueCallback(o[0]) : o[0]
    a = n.valueCallback ? n.valueCallback(a) : a
    var s = t.slice(i.length)
    return {
      value: a,
      rest: s
    }
  }
}
export { r as a }
export default r
