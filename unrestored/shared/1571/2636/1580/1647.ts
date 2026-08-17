/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1647
 */

var r = require(/* 86 */"./1650/86/index")
var /* [auto-meaningful-name] */Math$ceil = Math.ceil
var /* [auto-meaningful-name] */Math$floor = Math.floor
r({
  target: "Math",
  stat: true
}, {
  trunc: function (e) {
    return (e > 0 ? Math$floor : Math$ceil)(e)
  }
})
