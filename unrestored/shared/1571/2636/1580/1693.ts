/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1693
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 476 */"./1282/476")
var i = require(/* 443 */"./1774/443")
var a = require(/* 240 */"./1282/240")
var s = require(/* 168 */"./1648/168")
var c = o("Reflect", "apply")
var /* [auto-meaningful-name] */Function$apply = Function.apply
r({
  target: "Reflect",
  stat: true,
  forced: !s(function () {
    c(function () {})
  })
}, {
  apply: function (e, t, n) {
    i(e)
    a(n)
    return c ? c(e, t, n) : Function$apply.call(e, t, n)
  }
})
