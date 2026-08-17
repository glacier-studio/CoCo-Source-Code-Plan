/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1668
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 271 */"./1648/271")
var i = require(/* 1080 */"./1703/1080")
var a = require(/* 441 */"./1718/441")
var s = require(/* 386 */"./1648/386")
var c = require(/* 716 */"./1597/716")
r({
  target: "Object",
  stat: true,
  sham: !o
}, {
  getOwnPropertyDescriptors: function (e) {
    for (var t, n, r = a(e), o = s.f, l = i(r), u = {}, d = 0; l.length > d;) {
      if (undefined !== (n = o(r, t = l[d++]))) {
        c(u, t, n)
      }
    }
    return u
  }
})
