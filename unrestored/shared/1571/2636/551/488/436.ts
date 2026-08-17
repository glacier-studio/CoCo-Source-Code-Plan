/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：436
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */Module_169 from /* 169 */"../487/169"
import * as /* [auto-meaningful-name] */Module_109 from /* 109 */"../487/109"
import * as /* [auto-meaningful-name] */Module_104 from /* 104 */"./104"
function a(e, t) {
  Module_104.a(1, arguments)
  var n = t || {}
  var /* [auto-meaningful-name] */n$locale = n.locale
  var s = n$locale && n$locale.options && n$locale.options.weekStartsOn
  var c = null == s ? 0 : Module_169.a(s)
  var u = null == n.weekStartsOn ? c : Module_169.a(n.weekStartsOn)
  if (!(u >= 0 && u <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")
  }
  var l = Module_109.a(e)
  var f = l.getUTCDay()
  var d = (f < u ? 7 : 0) + f - u
  l.setUTCDate(l.getUTCDate() - d)
  l.setUTCHours(0, 0, 0, 0)
  return l
}
export default a
