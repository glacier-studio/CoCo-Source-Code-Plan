/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：493
 */

"use strict"

function r(e) {
  return function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var /* [auto-meaningful-name] */n$width = n.width
    var a = n$width && e.matchPatterns[n$width] || e.matchPatterns[e.defaultMatchWidth]
    var s = t.match(a)
    if (!s) {
      return null
    }
    var c
    var u = s[0]
    var l = n$width && e.parsePatterns[n$width] || e.parsePatterns[e.defaultParseWidth]
    var f = Array.isArray(l) ? o(l, function (e) {
      return e.test(u)
    }) : i(l, function (e) {
      return e.test(u)
    })
    c = e.valueCallback ? e.valueCallback(f) : f
    c = n.valueCallback ? n.valueCallback(c) : c
    var d = t.slice(u.length)
    return {
      value: c,
      rest: d
    }
  }
}
function i(e, t) {
  for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) {
    return n
  }
}
function o(e, t) {
  for (var n = 0; n < e.length; n++) {
    if (t(e[n])) {
      return n
    }
  }
}
export { r as a }
export default r
