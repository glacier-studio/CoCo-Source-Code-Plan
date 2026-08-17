/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1678
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 231 */"./1282/231")
var /* [auto-meaningful-name] */require_718_$_1778_718$onFreeze = require(/* 718 */"./1778/718").onFreeze
var a = require(/* 837 */"./1704/837")
var s = require(/* 168 */"./1648/168")
var /* [auto-meaningful-name] */Object$preventExtensions = Object.preventExtensions
r({
  target: "Object",
  stat: true,
  forced: s(function () {
    Object$preventExtensions(1)
  }),
  sham: !a
}, {
  preventExtensions: function (e) {
    return Object$preventExtensions && o(e) ? Object$preventExtensions(require_718_$_1778_718$onFreeze(e)) : e
  }
})
