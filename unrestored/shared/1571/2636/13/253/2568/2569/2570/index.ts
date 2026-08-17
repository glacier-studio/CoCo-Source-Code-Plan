/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2570
 */

var r = require(/* 994 */"./994/index")
var i = require(/* 1459 */"./1459/index")
var o = require(/* 1432 */"./1432/index")
var a = require(/* 2571 */"./2571/index")
var s = require(/* 479 */"../../../2583/2584/479")
var c = require(/* 865 */"./865/index")
var u = require(/* 1460 */"./1460")
module.exports = function e(t, n, l, f, d) {
  if (t !== n) {
    o(n, function (o, c) {
      if (!d) {
        d = new r()
      }
      if (s(o)) {
        a(t, n, c, l, e, f, d)
      } else {
        var h = f ? f(u(t, c), o, c + "", t, n, d) : undefined
        if (undefined === h) {
          h = o
        }
        i(t, c, h)
      }
    }, c)
  }
}
