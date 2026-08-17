/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2589
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.isvalidColorString = exports.red = exports.getContrastingColor = exports.isValidHex = exports.toState = exports.simpleCheckForValidColor = undefined
var r = o(require(/* 2590 */"./2590/index"))
var i = o(require(/* 226 */"../../../../15/226"))
function o(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
exports.simpleCheckForValidColor = function (e) {
  var t = 0
  var n = 0;
  (0, r.default)(["r", "g", "b", "a", "h", "s", "l", "v"], function (r) {
    if (e[r] && (t += 1, isNaN(e[r]) || (n += 1), "s" === r || "l" === r)) {
      if (/^\d+%$/.test(e[r])) {
        n += 1
      }
    }
  })
  return t === n && e
}
var a = exports.toState = function (e, t) {
  var n = e.hex ? (0, i.default)(e.hex) : (0, i.default)(e)
  var r = n.toHsl()
  var o = n.toHsv()
  var a = n.toRgb()
  var s = n.toHex()
  if (0 === r.s) {
    r.h = t || 0
    o.h = t || 0
  }
  return {
    hsl: r,
    hex: "000000" === s && 0 === a.a ? "transparent" : "#" + s,
    rgb: a,
    hsv: o,
    oldHue: e.h || t || r.h,
    source: e.source
  }
}
exports.isValidHex = function (e) {
  if ("transparent" === e) {
    return true
  }
  var t = "#" === String(e).charAt(0) ? 1 : 0
  return e.length !== 4 + t && e.length < 7 + t && (0, i.default)(e).isValid()
}
exports.getContrastingColor = function (e) {
  if (!e) {
    return "#fff"
  }
  var t = a(e)
  return "transparent" === t.hex ? "rgba(0,0,0,0.4)" : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128 ? "#000" : "#fff"
}
exports.red = {
  hsl: {
    a: 1,
    h: 0,
    l: .5,
    s: 1
  },
  hex: "#ff0000",
  rgb: {
    r: 255,
    g: 0,
    b: 0,
    a: 1
  },
  hsv: {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  }
}
exports.isvalidColorString = function (e, t) {
  var n = e.replace("°", "")
  return (0, i.default)(t + " (" + n + ")")._ok
}
