/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2675
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../../19"
import * as /* [auto-meaningful-name] */Module_107 from /* 107 */"../../../../107"
function o(e) {
  return e && "object" === Module_107.a(e) && e.constructor === Object
}
function a(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {
    clone: true
  }
  var i = n.clone ? Module_19.a({}, e) : e
  if (o(e) && o(t)) {
    Object.keys(t).forEach(function (r) {
      if ("__proto__" !== r) {
        if (o(t[r]) && r in e) {
          i[r] = a(e[r], t[r], n)
        } else {
          i[r] = t[r]
        }
      }
    })
  }
  return i
}
export default a
