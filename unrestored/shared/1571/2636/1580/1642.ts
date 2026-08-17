/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1642
 */

var r = require(/* 86 */"./1650/86/index")
var /* [auto-meaningful-name] */Math$log = Math.log
var /* [auto-meaningful-name] */Math$LN2 = Math.LN2
r({
  target: "Math",
  stat: true
}, {
  log2: function (e) {
    return Math$log(e) / Math$LN2
  }
})
