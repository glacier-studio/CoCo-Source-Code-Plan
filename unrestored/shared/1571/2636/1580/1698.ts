/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1698
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 231 */"./1282/231")
var i = require(/* 240 */"./1282/240")
var a = require(/* 1270 */"./1705/1270")
var s = require(/* 386 */"./1648/386")
var c = require(/* 497 */"./1705/497")
r({
  target: "Reflect",
  stat: true
}, {
  get: function e(t, n) {
    var r
    var l
    var u = arguments.length < 3 ? t : arguments[2]
    return i(t) === u ? t[n] : (r = s.f(t, n)) ? a(r) ? r.value : undefined === r.get ? undefined : r.get.call(u) : o(l = c(t)) ? e(l, n, u) : undefined
  }
})
