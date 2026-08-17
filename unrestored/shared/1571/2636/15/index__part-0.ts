/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：15__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../47"
function i(e, t, n) {
  return (e / t * 100).toFixed(n)
}
function a(e, t, n) {
  return Math.min(Math.max(e, t), n)
}
function s(e, t) {
  var n = t.indexOf(e)
  return n > -1 ? t[n] : t.reduce(function (t, n) {
    return Math.abs(n - e) < Math.abs(t - e) ? n : t
  })
}
function c(e) {
  if ("string" !== typeof e || e.startsWith("0x") || "" === e.trim() || "Infinity" === e) {
    return e
  }
  var t = Number(e)
  return isNaN(t) ? e : t
}
function l(e, t) {
  var n
  var r = new Set(e)
  var i = new Set(t)
  var a = []
  var s = Module_47.a(r)
  try {
    for (s.s(); !(n = s.n()).done;) {
      var /* [auto-meaningful-name] */n$value = n.value
      if (!i.has(n$value)) {
        a.push(n$value)
      }
    }
  } catch (l) {
    s.e(l)
  } finally {
    s.f()
  }
  return a
}
function u(e) {
  return /^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5A-Za-z0-9_]*$/.test(e)
}
export { i }
export { a }
export { s }
export { c }
export { l }
export { u }
export default a
