/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1659
 */

"use strict"

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 477 */"../1720/477")
var i = require(/* 1660 */"./1660")
var a = require(/* 1092 */"../1719/1092")
var s = require(/* 168 */"../1648/168")
var /* [auto-meaningful-name] */_1$$toFixed = 1..toFixed
var /* [auto-meaningful-name] */Math$floor = Math.floor
var u = function e(t, n, r) {
  return 0 === n ? r : n % 2 === 1 ? e(t, n - 1, r * t) : e(t * t, n / 2, r)
}
var d = function (e, t, n) {
  for (var r = -1, o = n; ++r < 6;) {
    o += t * e[r]
    e[r] = o % 1e7
    o = Math$floor(o / 1e7)
  }
}
var p = function (e, t) {
  for (var n = 6, r = 0; --n >= 0;) {
    r += e[n]
    e[n] = Math$floor(r / t)
    r = r % t * 1e7
  }
}
var f = function (e) {
  for (var t = 6, n = ""; --t >= 0;) {
    if ("" !== n || 0 === t || 0 !== e[t]) {
      var r = String(e[t])
      n = "" === n ? r : n + a.call("0", 7 - r.length) + r
    }
  }
  return n
}
r({
  target: "Number",
  proto: true,
  forced: _1$$toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !s(function () {
    _1$$toFixed.call({})
  })
}, {
  toFixed: function (e) {
    var t
    var n
    var r
    var /* [auto-meaningful-name] */g$length
    var c = i(this)
    var l = o(e)
    var h = [0, 0, 0, 0, 0, 0]
    var m = ""
    var g = "0"
    if (l < 0 || l > 20) {
      throw RangeError("Incorrect fraction digits")
    }
    if (c != c) {
      return "NaN"
    }
    if (c <= -1e21 || c >= 1e21) {
      return String(c)
    }
    if (c < 0) {
      m = "-"
      c = -c
    }
    if (c > 1e-21) {
      n = (t = function (e) {
        for (var t = 0, n = e; n >= 4096;) {
          t += 12
          n /= 4096
        }
        for (; n >= 2;) {
          t += 1
          n /= 2
        }
        return t
      }(c * u(2, 69, 1)) - 69) < 0 ? c * u(2, -t, 1) : c / u(2, t, 1)
      n *= 4503599627370496
      if ((t = 52 - t) > 0) {
        for (d(h, 0, n), r = l; r >= 7;) {
          d(h, 1e7, 0)
          r -= 7
        }
        for (d(h, u(10, r, 1), 0), r = t - 1; r >= 23;) {
          p(h, 1 << 23)
          r -= 23
        }
        p(h, 1 << r)
        d(h, 1, 1)
        p(h, 2)
        g = f(h)
      } else {
        d(h, 0, n)
        d(h, 1 << -t, 0)
        g = f(h) + a.call("0", l)
      }
    }
    return g = l > 0 ? m + ((g$length = g.length) <= l ? "0." + a.call("0", l - g$length) + g : g.slice(0, g$length - l) + "." + g.slice(g$length - l)) : m + g
  }
})
