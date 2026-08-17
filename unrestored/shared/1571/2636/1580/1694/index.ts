/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1694
 */

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 476 */"../1282/476")
var i = require(/* 443 */"../1774/443")
var a = require(/* 240 */"../1282/240")
var s = require(/* 231 */"../1282/231")
var c = require(/* 577 */"../1648/577")
var l = require(/* 1695 */"./1695")
var u = require(/* 168 */"../1648/168")
var d = o("Reflect", "construct")
var p = u(function () {
  function e() {}
  return !(d(function () {}, [], e) instanceof e)
})
var f = !u(function () {
  d(function () {})
})
var h = p || f
r({
  target: "Reflect",
  stat: true,
  forced: h,
  sham: h
}, {
  construct: function (e, t) {
    i(e)
    a(t)
    var n = arguments.length < 3 ? e : i(arguments[2])
    if (f && !p) {
      return d(e, t, n)
    }
    if (e == n) {
      switch (t.length) {
        case 0:
          return new e()
        case 1:
          return new e(t[0])
        case 2:
          return new e(t[0], t[1])
        case 3:
          return new e(t[0], t[1], t[2])
        case 4:
          return new e(t[0], t[1], t[2], t[3])
      }
      var r = [null]
      r.push.apply(r, t)
      return new (l.apply(e, r))()
    }
    var /* [auto-meaningful-name] */n$prototype = n.prototype
    var u = c(s(n$prototype) ? n$prototype : Object.prototype)
    var h = Function.apply.call(e, u, t)
    return s(h) ? h : u
  }
})
