/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1702
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 240 */"./1282/240")
var /* [auto-meaningful-name] */Object$isExtensible = Object.isExtensible
r({
  target: "Reflect",
  stat: true
}, {
  isExtensible: function (e) {
    o(e)
    return !Object$isExtensible || Object$isExtensible(e)
  }
})
