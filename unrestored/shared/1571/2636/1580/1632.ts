/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1632
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 1090 */"./1643/1090")
var /* [auto-meaningful-name] */Math$abs = Math.abs
var /* [auto-meaningful-name] */Math$pow = Math.pow
r({
  target: "Math",
  stat: true
}, {
  cbrt: function (e) {
    return o(e = +e) * Math$pow(Math$abs(e), 1 / 3)
  }
})
