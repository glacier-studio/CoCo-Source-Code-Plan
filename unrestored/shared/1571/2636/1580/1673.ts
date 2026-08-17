/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1673
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 168 */"./1648/168")
var i = require(/* 231 */"./1282/231")
var /* [auto-meaningful-name] */Object$isFrozen = Object.isFrozen
r({
  target: "Object",
  stat: true,
  forced: o(function () {
    Object$isFrozen(1)
  })
}, {
  isFrozen: function (e) {
    return !i(e) || !!Object$isFrozen && Object$isFrozen(e)
  }
})
