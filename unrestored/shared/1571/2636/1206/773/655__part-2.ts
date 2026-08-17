/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：655__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_675 from /* 675 */"../../37/1412/675/index"
import * as /* [auto-meaningful-name] */Module_689 from /* 689 */"../../37/1412/675/689"
var d = function (e) {
  if (!Module_689.a(e)) {
    throw TypeError("Invalid UUID")
  }
  var t
  var n = new Uint8Array(16)
  n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24
  n[1] = t >>> 16 & 255
  n[2] = t >>> 8 & 255
  n[3] = 255 & t
  n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8
  n[5] = 255 & t
  n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8
  n[7] = 255 & t
  n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8
  n[9] = 255 & t
  n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255
  n[11] = t / 4294967296 & 255
  n[12] = t >>> 24 & 255
  n[13] = t >>> 16 & 255
  n[14] = t >>> 8 & 255
  n[15] = 255 & t
  return n
}
var p = function (e, t, n) {
  function r(e, r, o, i) {
    if ("string" === typeof e) {
      e = function (e) {
        e = unescape(encodeURIComponent(e))
        for (var t = [], n = 0; n < e.length; ++n) {
          t.push(e.charCodeAt(n))
        }
        return t
      }(e)
    }
    if ("string" === typeof r) {
      r = d(r)
    }
    if (16 !== r.length) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)")
    }
    var s = new Uint8Array(16 + e.length)
    s.set(r)
    s.set(e, r.length);
    (s = n(s))[6] = 15 & s[6] | t
    s[8] = 63 & s[8] | 128
    if (o) {
      i = i || 0
      for (var c = 0; c < 16; ++c) {
        o[i + c] = s[c]
      }
      return o
    }
    return Module_675.a(s)
  }
  try {
    r.name = e
  } catch (o) {}
  r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
  r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
  return r
}
function f(e) {
  return 14 + (e + 64 >>> 9 << 4) + 1
}
function h(e, t) {
  var n = (65535 & e) + (65535 & t)
  return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}
function m(e, t, n, r, o, i) {
  return h((a = h(h(t, e), h(r, i))) << (s = o) | a >>> 32 - s, n)
  var a
  var s
}
function g(e, t, n, r, o, i, a) {
  return m(t & n | ~t & r, e, t, o, i, a)
}
function _(e, t, n, r, o, i, a) {
  return m(t & r | n & ~r, e, t, o, i, a)
}
function v(e, t, n, r, o, i, a) {
  return m(t ^ n ^ r, e, t, o, i, a)
}
function b(e, t, n, r, o, i, a) {
  return m(n ^ (t | ~r), e, t, o, i, a)
}
var y = p("v3", 48, function (e) {
  if ("string" === typeof e) {
    var t = unescape(encodeURIComponent(e))
    e = new Uint8Array(t.length)
    for (var n = 0; n < t.length; ++n) {
      e[n] = t.charCodeAt(n)
    }
  }
  return function (e) {
    for (var t = [], n = 32 * e.length, r = 0; r < n; r += 8) {
      var o = e[r >> 5] >>> r % 32 & 255
      var i = parseInt("0123456789abcdef".charAt(o >>> 4 & 15) + "0123456789abcdef".charAt(15 & o), 16)
      t.push(i)
    }
    return t
  }(function (e, t) {
    e[t >> 5] |= 128 << t % 32
    e[f(t) - 1] = t
    for (var n = 1732584193, r = -271733879, o = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
      var s = n
      var c = r
      var l = o
      var u = i
      n = g(n, r, o, i, e[a], 7, -680876936)
      i = g(i, n, r, o, e[a + 1], 12, -389564586)
      o = g(o, i, n, r, e[a + 2], 17, 606105819)
      r = g(r, o, i, n, e[a + 3], 22, -1044525330)
      n = g(n, r, o, i, e[a + 4], 7, -176418897)
      i = g(i, n, r, o, e[a + 5], 12, 1200080426)
      o = g(o, i, n, r, e[a + 6], 17, -1473231341)
      r = g(r, o, i, n, e[a + 7], 22, -45705983)
      n = g(n, r, o, i, e[a + 8], 7, 1770035416)
      i = g(i, n, r, o, e[a + 9], 12, -1958414417)
      o = g(o, i, n, r, e[a + 10], 17, -42063)
      r = g(r, o, i, n, e[a + 11], 22, -1990404162)
      n = g(n, r, o, i, e[a + 12], 7, 1804603682)
      i = g(i, n, r, o, e[a + 13], 12, -40341101)
      o = g(o, i, n, r, e[a + 14], 17, -1502002290)
      r = g(r, o, i, n, e[a + 15], 22, 1236535329)
      n = _(n, r, o, i, e[a + 1], 5, -165796510)
      i = _(i, n, r, o, e[a + 6], 9, -1069501632)
      o = _(o, i, n, r, e[a + 11], 14, 643717713)
      r = _(r, o, i, n, e[a], 20, -373897302)
      n = _(n, r, o, i, e[a + 5], 5, -701558691)
      i = _(i, n, r, o, e[a + 10], 9, 38016083)
      o = _(o, i, n, r, e[a + 15], 14, -660478335)
      r = _(r, o, i, n, e[a + 4], 20, -405537848)
      n = _(n, r, o, i, e[a + 9], 5, 568446438)
      i = _(i, n, r, o, e[a + 14], 9, -1019803690)
      o = _(o, i, n, r, e[a + 3], 14, -187363961)
      r = _(r, o, i, n, e[a + 8], 20, 1163531501)
      n = _(n, r, o, i, e[a + 13], 5, -1444681467)
      i = _(i, n, r, o, e[a + 2], 9, -51403784)
      o = _(o, i, n, r, e[a + 7], 14, 1735328473)
      r = _(r, o, i, n, e[a + 12], 20, -1926607734)
      n = v(n, r, o, i, e[a + 5], 4, -378558)
      i = v(i, n, r, o, e[a + 8], 11, -2022574463)
      o = v(o, i, n, r, e[a + 11], 16, 1839030562)
      r = v(r, o, i, n, e[a + 14], 23, -35309556)
      n = v(n, r, o, i, e[a + 1], 4, -1530992060)
      i = v(i, n, r, o, e[a + 4], 11, 1272893353)
      o = v(o, i, n, r, e[a + 7], 16, -155497632)
      r = v(r, o, i, n, e[a + 10], 23, -1094730640)
      n = v(n, r, o, i, e[a + 13], 4, 681279174)
      i = v(i, n, r, o, e[a], 11, -358537222)
      o = v(o, i, n, r, e[a + 3], 16, -722521979)
      r = v(r, o, i, n, e[a + 6], 23, 76029189)
      n = v(n, r, o, i, e[a + 9], 4, -640364487)
      i = v(i, n, r, o, e[a + 12], 11, -421815835)
      o = v(o, i, n, r, e[a + 15], 16, 530742520)
      r = v(r, o, i, n, e[a + 2], 23, -995338651)
      n = b(n, r, o, i, e[a], 6, -198630844)
      i = b(i, n, r, o, e[a + 7], 10, 1126891415)
      o = b(o, i, n, r, e[a + 14], 15, -1416354905)
      r = b(r, o, i, n, e[a + 5], 21, -57434055)
      n = b(n, r, o, i, e[a + 12], 6, 1700485571)
      i = b(i, n, r, o, e[a + 3], 10, -1894986606)
      o = b(o, i, n, r, e[a + 10], 15, -1051523)
      r = b(r, o, i, n, e[a + 1], 21, -2054922799)
      n = b(n, r, o, i, e[a + 8], 6, 1873313359)
      i = b(i, n, r, o, e[a + 15], 10, -30611744)
      o = b(o, i, n, r, e[a + 6], 15, -1560198380)
      r = b(r, o, i, n, e[a + 13], 21, 1309151649)
      n = b(n, r, o, i, e[a + 4], 6, -145523070)
      i = b(i, n, r, o, e[a + 11], 10, -1120210379)
      o = b(o, i, n, r, e[a + 2], 15, 718787259)
      r = b(r, o, i, n, e[a + 9], 21, -343485551)
      n = h(n, s)
      r = h(r, c)
      o = h(o, l)
      i = h(i, u)
    }
    return [n, r, o, i]
  }(function (e) {
    if (0 === e.length) {
      return []
    }
    for (var t = 8 * e.length, n = new Uint32Array(f(t)), r = 0; r < t; r += 8) {
      n[r >> 5] |= (255 & e[r / 8]) << r % 32
    }
    return n
  }(e), 8 * e.length))
})
export { d }
export { p }
export { y }
