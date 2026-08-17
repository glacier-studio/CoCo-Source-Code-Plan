/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：521
 */

"use strict"

export { o as a }
import * as /* [auto-meaningful-name] */Module_394 from /* 394 */"../523/394"
import * as /* [auto-meaningful-name] */Module_292 from /* 292 */"./292"
function o(e) {
  return function t(n, o) {
    switch (arguments.length) {
      case 0:
        return t
      case 1:
        return Module_292.a(n) ? t : Module_394.a(function (t) {
          return e(n, t)
        })
      default:
        return Module_292.a(n) && Module_292.a(o) ? t : Module_292.a(n) ? Module_394.a(function (t) {
          return e(t, o)
        }) : Module_292.a(o) ? Module_394.a(function (t) {
          return e(n, t)
        }) : e(n, o)
    }
  }
}
export default o
