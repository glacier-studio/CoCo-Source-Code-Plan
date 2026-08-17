/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1654
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 1091 */"./1652/1091")
var /* [auto-meaningful-name] */Math$abs = Math.abs
r({
  target: "Number",
  stat: true
}, {
  isSafeInteger: function (e) {
    return o(e) && Math$abs(e) <= 9007199254740991
  }
})
