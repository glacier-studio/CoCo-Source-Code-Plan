/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：655__part-3
 */

"use strict"

import { p } from "./655__part-2"
import * as /* [auto-meaningful-name] */Module_689 from /* 689 */"../../37/1412/675/689"
import * as /* [auto-meaningful-name] */Module_1412 from /* 1412 */"../../37/1412/index"
function O(e, t, n, r) {
  switch (e) {
    case 0:
      return t & n ^ ~t & r
    case 1:
      return t ^ n ^ r
    case 2:
      return t & n ^ t & r ^ n & r
    case 3:
      return t ^ n ^ r
  }
}
function w(e, t) {
  return e << t | e >>> 32 - t
}
var C = p("v5", 80, function (e) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782]
  var n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
  if ("string" === typeof e) {
    var r = unescape(encodeURIComponent(e))
    e = []
    for (var o = 0; o < r.length; ++o) {
      e.push(r.charCodeAt(o))
    }
  } else if (!Array.isArray(e)) {
    e = Array.prototype.slice.call(e)
  }
  e.push(128)
  for (var i = e.length / 4 + 2, a = Math.ceil(i / 16), s = new Array(a), c = 0; c < a; ++c) {
    for (var l = new Uint32Array(16), u = 0; u < 16; ++u) {
      l[u] = e[64 * c + 4 * u] << 24 | e[64 * c + 4 * u + 1] << 16 | e[64 * c + 4 * u + 2] << 8 | e[64 * c + 4 * u + 3]
    }
    s[c] = l
  }
  s[a - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32)
  s[a - 1][14] = Math.floor(s[a - 1][14])
  s[a - 1][15] = 8 * (e.length - 1) & 4294967295
  for (var d = 0; d < a; ++d) {
    for (var p = new Uint32Array(80), f = 0; f < 16; ++f) {
      p[f] = s[d][f]
    }
    for (var h = 16; h < 80; ++h) {
      p[h] = w(p[h - 3] ^ p[h - 8] ^ p[h - 14] ^ p[h - 16], 1)
    }
    for (var m = n[0], g = n[1], _ = n[2], v = n[3], b = n[4], y = 0; y < 80; ++y) {
      var E = Math.floor(y / 20)
      var C = w(m, 5) + O(E, g, _, v) + b + t[E] + p[y] >>> 0
      b = v
      v = _
      _ = w(g, 30) >>> 0
      g = m
      m = C
    }
    n[0] = n[0] + m >>> 0
    n[1] = n[1] + g >>> 0
    n[2] = n[2] + _ >>> 0
    n[3] = n[3] + v >>> 0
    n[4] = n[4] + b >>> 0
  }
  return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
})
var /* [auto-meaningful-name] */_00000000000000000000000000000000 = "00000000-0000-0000-0000-000000000000"
var S = function (e) {
  if (!Module_689.a(e)) {
    throw TypeError("Invalid UUID")
  }
  return parseInt(e.substr(14, 1), 16)
}
export { C }
export { _00000000000000000000000000000000 as T }
export { S }
