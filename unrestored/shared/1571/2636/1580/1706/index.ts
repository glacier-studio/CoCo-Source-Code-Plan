/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1706
 */

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 240 */"../1282/240")
var i = require(/* 1250 */"./1250")
var a = require(/* 638 */"./638")
if (a) {
  r({
    target: "Reflect",
    stat: true
  }, {
    setPrototypeOf: function (e, t) {
      o(e)
      i(t)
      try {
        a(e, t)
        return true
      } catch (n) {
        return false
      }
    }
  })
}
