/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1640
 */

var r = require(/* 86 */"./1650/86/index")
var /* [auto-meaningful-name] */Math$log = Math.log
var /* [auto-meaningful-name] */Math$LOG10E = Math.LOG10E
r({
  target: "Math",
  stat: true
}, {
  log10: function (e) {
    return Math$log(e) * Math$LOG10E
  }
})
