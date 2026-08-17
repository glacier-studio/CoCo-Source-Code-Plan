/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1699
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 271 */"./1648/271")
var i = require(/* 240 */"./1282/240")
var a = require(/* 386 */"./1648/386")
r({
  target: "Reflect",
  stat: true,
  sham: !o
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a.f(i(e), t)
  }
})
