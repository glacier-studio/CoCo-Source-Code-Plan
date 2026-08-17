/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1246
 */

"use strict"

var r = require(/* 636 */"../../1282/636")
var o = require(/* 309 */"../../1771/309")
var i = require(/* 1606 */"./1606")
var a = require(/* 1085 */"./1085")
var s = require(/* 256 */"../../1775/256")
var c = require(/* 716 */"../../1597/716")
var l = require(/* 947 */"../../1282/947")
var u = require(/* 835 */"../../1282/835")
module.exports = function (e) {
  var t
  var n
  var d
  var p
  var /* [auto-meaningful-name] */PLMY$next
  var h
  var m = o(e)
  var g = "function" == typeof this ? this : Array
  var /* [auto-meaningful-name] */arguments$length = arguments.length
  var v = arguments$length > 1 ? arguments[1] : undefined
  var b = undefined !== v
  var y = u(m)
  var E = 0
  if (b) {
    v = r(v, arguments$length > 2 ? arguments[2] : undefined, 2)
  }
  if (undefined == y || g == Array && a(y)) {
    for (n = new g(t = s(m.length)); t > E; E++) {
      h = b ? v(m[E], E) : m[E]
      c(n, E, h)
    }
  } else {
    for (PLMY$next = (p = l(m, y)).next, n = new g(); !(d = PLMY$next.call(p)).done; E++) {
      h = b ? i(p, v, [d.value, E], true) : d.value
      c(n, E, h)
    }
  }
  n.length = E
  return n
}
