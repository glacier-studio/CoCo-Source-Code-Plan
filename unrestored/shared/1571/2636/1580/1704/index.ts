/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1704
 */

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 476 */"../1282/476")
var i = require(/* 240 */"../1282/240")
r({
  target: "Reflect",
  stat: true,
  sham: !require(/* 837 */"./837")
}, {
  preventExtensions: function (e) {
    i(e)
    try {
      var t = o("Object", "preventExtensions")
      if (t) {
        t(e)
      }
      return true
    } catch (n) {
      return false
    }
  }
})
