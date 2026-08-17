/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：144
 */

"use strict"

export { STYLE_DEFAULT_STYLE_ID as i }
export { a as h }
export { s as c }
export { c as e }
export { l as g }
export { u as f }
export { d as b }
export { p as d }
export { ACTOR_ACTION as a }
export { h as j }
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"./47"
import * as /* [auto-meaningful-name] */Module_550 from /* 550 */"./550"
var /* [auto-meaningful-name] */STYLE_DEFAULT_STYLE_ID = "STYLE_DEFAULT_STYLE_ID"
var a = {
  id: STYLE_DEFAULT_STYLE_ID,
  source: Module_550.a
}
var s = 100
var c = .01
var l = false
var u = false
var d = 9999
var p = 10
var /* [auto-meaningful-name] */ACTOR_ACTION = "ACTOR_ACTION"
function h(e, t) {
  var n
  var o
  var i = Module_47.a(e)
  try {
    for (i.s(); !(o = i.n()).done;) {
      var s
      var /* [auto-meaningful-name] */o$value = o.value
      var l = Module_47.a(o$value.styleList)
      try {
        for (l.s(); !(s = l.n()).done;) {
          var /* [auto-meaningful-name] */s$value = s.value
          if (s$value.id === t) {
            return s$value
          }
          if (!n) {
            n = s$value
          }
        }
      } catch (d) {
        l.e(d)
      } finally {
        l.f()
      }
    }
  } catch (d) {
    i.e(d)
  } finally {
    i.f()
  }
  return n || a
}
export default ACTOR_ACTION
