/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：10
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */Module_1479 from /* 1479 */"./1479"
import * as /* [auto-meaningful-name] */Module_779 from /* 779 */"./779"
import * as /* [auto-meaningful-name] */Module_1480 from /* 1480 */"./1480"
function a(e, t) {
  return Module_1479.a(e) || function (e, t) {
    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
      var n = []
      var r = true
      var i = false
      var o = undefined
      try {
        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = true) {
          ;
        }
      } catch (c) {
        i = true
        o = c
      } finally {
        try {
          if (!(r || null == s.return)) {
            s.return()
          }
        } finally {
          if (i) {
            throw o
          }
        }
      }
      return n
    }
  }(e, t) || Module_779.a(e, t) || Module_1480.a()
}
export default a
