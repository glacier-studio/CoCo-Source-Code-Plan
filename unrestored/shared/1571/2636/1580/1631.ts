/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1631
 */

var r = require(/* 86 */"./1650/86/index")
var /* [auto-meaningful-name] */Math$atanh = Math.atanh
var /* [auto-meaningful-name] */Math$log = Math.log
r({
  target: "Math",
  stat: true,
  forced: !(Math$atanh && 1 / Math$atanh(-0) < 0)
}, {
  atanh: function (e) {
    return 0 == (e = +e) ? e : Math$log((1 + e) / (1 - e)) / 2
  }
})
