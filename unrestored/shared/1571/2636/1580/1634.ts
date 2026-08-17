/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1634
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 953 */"./1645/953")
var /* [auto-meaningful-name] */Math$cosh = Math.cosh
var /* [auto-meaningful-name] */Math$abs = Math.abs
var /* [auto-meaningful-name] */Math$E = Math.E
r({
  target: "Math",
  stat: true,
  forced: !Math$cosh || Math$cosh(710) === 1 / 0
}, {
  cosh: function (e) {
    var t = o(Math$abs(e) - 1) + 1
    return (t + 1 / (t * Math$E * Math$E)) * (Math$E / 2)
  }
})
