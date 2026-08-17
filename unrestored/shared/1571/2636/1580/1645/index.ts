/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1645
 */

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 953 */"./953")
var /* [auto-meaningful-name] */Math$exp = Math.exp
r({
  target: "Math",
  stat: true
}, {
  tanh: function (e) {
    var t = o(e = +e)
    var n = o(-e)
    return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (Math$exp(e) + Math$exp(-e))
  }
})
