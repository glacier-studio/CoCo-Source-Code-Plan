/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1618
 */

"use strict"

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 715 */"./1775/715")
var i = require(/* 477 */"./1720/477")
var a = require(/* 256 */"./1775/256")
var s = require(/* 309 */"./1771/309")
var c = require(/* 832 */"./1597/832/index")
var l = require(/* 716 */"./1597/716")
var u = require(/* 833 */"./1597/833")("splice")
var /* [auto-meaningful-name] */Math$max = Math.max
var /* [auto-meaningful-name] */Math$min = Math.min
r({
  target: "Array",
  proto: true,
  forced: !u
}, {
  splice: function (e, t) {
    var n
    var r
    var u
    var f
    var h
    var m
    var g = s(this)
    var _ = a(g.length)
    var v = o(e, _)
    var /* [auto-meaningful-name] */arguments$length = arguments.length
    if (0 === arguments$length) {
      n = r = 0
    } else {
      if (1 === arguments$length) {
        n = 0
        r = _ - v
      } else {
        n = arguments$length - 2
        r = Math$min(Math$max(i(t), 0), _ - v)
      }
    }
    if (_ + n - r > 9007199254740991) {
      throw TypeError("Maximum allowed length exceeded")
    }
    for (u = c(g, r), f = 0; f < r; f++) {
      if ((h = v + f) in g) {
        l(u, f, g[h])
      }
    }
    u.length = r
    if (n < r) {
      for (f = v; f < _ - r; f++) {
        m = f + n
        if ((h = f + r) in g) {
          g[m] = g[h]
        } else {
          delete g[m]
        }
      }
      for (f = _; f > _ - r + n; f--) {
        delete g[f - 1]
      }
    } else if (n > r) {
      for (f = _ - r; f > v; f--) {
        m = f + n - 1
        if ((h = f + r - 1) in g) {
          g[m] = g[h]
        } else {
          delete g[m]
        }
      }
    }
    for (f = 0; f < n; f++) {
      g[f + v] = arguments[f + 2]
    }
    g.length = _ - r + n
    return u
  }
})
