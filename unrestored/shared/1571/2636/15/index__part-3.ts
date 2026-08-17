/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：15__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_tools_url from /* 312 */"../../../../../src/shared/tools/url"
function x(e, t) {
  var n = new Date(e)
  n.setDate(n.getDate() + t)
  n.setHours(0)
  n.setMinutes(0)
  n.setSeconds(0)
  n.setMilliseconds(0)
  return n.getTime()
}
function D(e) {
  var t = e.getHours()
  var n = "0".concat(e.getMinutes()).slice(-2)
  return "".concat(t, ":").concat(n)
}
export { x }
export { D }
