/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1244
 */

"use strict"

var r = require(/* 309 */"../1771/309")
var o = require(/* 715 */"../1775/715")
var i = require(/* 256 */"../1775/256")
var /* [auto-meaningful-name] */Math$min = Math.min
module.exports = [].copyWithin || function (e, t) {
  var n = r(this)
  var s = i(n.length)
  var c = o(e, s)
  var l = o(t, s)
  var u = arguments.length > 2 ? arguments[2] : undefined
  var d = Math$min((undefined === u ? s : o(u, s)) - l, s - c)
  var p = 1
  for (l < c && c < l + d && (p = -1, l += d - 1, c += d - 1); d-- > 0;) {
    if (l in n) {
      n[c] = n[l]
    } else {
      delete n[c]
    }
    c += p
    l += p
  }
  return n
}
