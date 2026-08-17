/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：950
 */

var r = require(/* 443 */"../1774/443")
var o = require(/* 309 */"../1771/309")
var i = require(/* 825 */"../1609/825")
var a = require(/* 256 */"../1775/256")
var s = function (e) {
  return function (t, n, s, c) {
    r(n)
    var l = o(t)
    var u = i(l)
    var d = a(l.length)
    var p = e ? d - 1 : 0
    var f = e ? -1 : 1
    if (s < 2) {
      for (;;) {
        if (p in u) {
          c = u[p]
          p += f
          break
        }
        p += f
        if (e ? p < 0 : d <= p) {
          throw TypeError("Reduce of empty array with no initial value")
        }
      }
    }
    for (; e ? p >= 0 : d > p; p += f) {
      if (p in u) {
        c = n(c, u[p], p, l)
      }
    }
    return c
  }
}
module.exports = {
  left: s(false),
  right: s(true)
}
