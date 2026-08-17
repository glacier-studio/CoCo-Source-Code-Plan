/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：779
 */

"use strict"

export { i as a }
import * as /* [auto-meaningful-name] */Module_919 from /* 919 */"../25/919"
function i(e, t) {
  if (e) {
    if ("string" === typeof e) {
      return Module_919.a(e, t)
    }
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ("Object" === n && e.constructor) {
      n = e.constructor.name
    }
    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Module_919.a(e, t) : undefined
  }
}
export default i
