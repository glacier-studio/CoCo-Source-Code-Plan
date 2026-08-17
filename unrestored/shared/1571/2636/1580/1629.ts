/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1629
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 1259 */"./1641/1259")
var /* [auto-meaningful-name] */Math$acosh = Math.acosh
var /* [auto-meaningful-name] */Math$log = Math.log
var /* [auto-meaningful-name] */Math$sqrt = Math.sqrt
var /* [auto-meaningful-name] */Math$LN2 = Math.LN2
r({
  target: "Math",
  stat: true,
  forced: !Math$acosh || 710 != Math.floor(Math$acosh(Number.MAX_VALUE)) || Math$acosh(1 / 0) != 1 / 0
}, {
  acosh: function (e) {
    return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math$log(e) + Math$LN2 : o(e - 1 + Math$sqrt(e - 1) * Math$sqrt(e + 1))
  }
})
