/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：999
 */

var r = require(/* 2518 */"./2518")
var i = require(/* 1177 */"../../../../../../253/2568/2569/2570/994/2490/1177/index")
var o = require(/* 2519 */"./2519")
var a = require(/* 2520 */"./2520")
var s = require(/* 2521 */"./2521")
var c = require(/* 727 */"../../../../2466/2467/727/index")
var u = require(/* 1438 */"./1438")
var l = u(r)
var f = u(i)
var d = u(o)
var h = u(a)
var p = u(s)
var _ = c
if (r && "[object DataView]" != _(new r(new ArrayBuffer(1))) || i && "[object Map]" != _(new i()) || o && "[object Promise]" != _(o.resolve()) || a && "[object Set]" != _(new a()) || s && "[object WeakMap]" != _(new s())) {
  _ = function (e) {
    var t = c(e)
    var n = "[object Object]" == t ? e.constructor : undefined
    var r = n ? u(n) : ""
    if (r) {
      switch (r) {
        case l:
          return "[object DataView]"
        case f:
          return "[object Map]"
        case d:
          return "[object Promise]"
        case h:
          return "[object Set]"
        case p:
          return "[object WeakMap]"
      }
    }
    return t
  }
}
module.exports = _
