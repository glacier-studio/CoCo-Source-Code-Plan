/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：15__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_226 from /* 226 */"./226"
import /* [auto-meaningful-name] */Module_2261 from /* 226 */"./226"
var /* [auto-meaningful-name] */B3B3B3 = "#B3B3B3"
var _ = function (e) {
  return "#00000000" === e || "rgba(0,0,0,0)" === e || "transparent" === e
}
var v = function (e, t) {
  return Color1(e).fade(1 - t).string()
}
var b = function (e) {
  return "#ffffff" === Color1(e).hex().toLowerCase()
}
var y = function (e, t) {
  window.Color = Color1
  return Color1(e).darken(t).hex()
}
var E = function (e) {
  try {
    return Color1(e).toString()
  } catch (t) {
    console.error("formatColor error", e)
  }
  return e
}
var O = function (e) {
  return Color1(e).hsl().lightness() > 85.7
}
var w = function (e) {
  if ("string" !== typeof e) {
    return false
  }
  var t = true
  try {
    Color1(e).toString()
  } catch (n) {
    t = false
  }
  return t
}
var C = function (e) {
  var t = e.alpha()
  var n = Math.round(255 * Lodash.clamp(t, 0, 1))
  var r = n.toString(16)
  var o = n <= 15 ? "0".concat(r) : r
  return e.hex() + o.toUpperCase()
}
function T(e) {
  try {
    return C(Color1(e))
  } catch (t) {
    return ""
  }
}
var S = function (e) {
  var t = 0
  var n = 0
  Lodash.each(["r", "g", "b", "a", "h", "s", "l", "v"], function (r) {
    if (e[r] && (t += 1, isNaN(e[r]) || (n += 1), "s" === r || "l" === r)) {
      if (/^\d+%$/.test(e[r])) {
        n += 1
      }
    }
  })
  return t === n && e
}
var A = function (e, t) {
  var n = e.HEX ? Module_2261(e.HEX) : Module_2261(e)
  var r = n.toHsl()
  var o = n.toHsv()
  var i = n.toRgb()
  var a = n.toHex()
  if (0 === r.s) {
    r.h = t || 0
    o.h = t || 0
  }
  return {
    hsl: r,
    hex: "000000" === a && 0 === i.a ? "transparent" : "#".concat(a),
    rgb: i,
    hsv: o,
    oldHue: e.h || t || r.h,
    source: e.source
  }
}
export { B3B3B3 as g }
export { _ }
export { v }
export { b }
export { y }
export { E }
export { O }
export { w }
export { C }
export { T }
export { S }
export { A }
