/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1700
 */

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 240 */"../1282/240")
var i = require(/* 497 */"../1705/497")
r({
  target: "Reflect",
  stat: true,
  sham: !require(/* 1088 */"./1088")
}, {
  getPrototypeOf: function (e) {
    return i(o(e))
  }
})
