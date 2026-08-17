/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1665
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 837 */"./1704/837")
var i = require(/* 168 */"./1648/168")
var a = require(/* 231 */"./1282/231")
var /* [auto-meaningful-name] */require_718_$_1778_718$onFreeze = require(/* 718 */"./1778/718").onFreeze
var /* [auto-meaningful-name] */Object$freeze = Object.freeze
r({
  target: "Object",
  stat: true,
  forced: i(function () {
    Object$freeze(1)
  }),
  sham: !o
}, {
  freeze: function (e) {
    return Object$freeze && a(e) ? Object$freeze(require_718_$_1778_718$onFreeze(e)) : e
  }
})
