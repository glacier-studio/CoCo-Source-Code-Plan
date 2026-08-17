/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1245
 */

"use strict"

var r = require(/* 830 */"../1581/830")
var o = require(/* 256 */"../1775/256")
var i = require(/* 636 */"../1282/636")
module.exports = function e(t, n, a, s, c, l, u, d) {
  for (var p, f = c, h = 0, m = !!u && i(u, d, 3); h < s;) {
    if (h in a) {
      p = m ? m(a[h], h, n) : a[h]
      if (l > 0 && r(p)) {
        f = e(t, n, p, o(p.length), f, l - 1) - 1
      } else {
        if (f >= 9007199254740991) {
          throw TypeError("Exceed the acceptable array length")
        }
        t[f] = p
      }
      f++
    }
    h++
  }
  return f
}
