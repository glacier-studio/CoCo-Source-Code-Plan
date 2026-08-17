/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：109
 */

"use strict"

export { i as a }
import * as /* [auto-meaningful-name] */Module_104 from /* 104 */"../488/104"
function i(e) {
  Module_104.a(1, arguments)
  var t = Object.prototype.toString.call(e)
  return e instanceof Date || "object" === typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" === typeof e || "[object Number]" === t ? new Date(e) : ("string" !== typeof e && "[object String]" !== t || "undefined" === typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn(new Error().stack)), new Date(NaN))
}
export default i
