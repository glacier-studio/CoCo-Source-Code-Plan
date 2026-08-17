/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1613
 */

"use strict"

var r = require(/* 86 */"./1650/86/index")
var /* [auto-meaningful-name] */require_950_$_1768_950$left = require(/* 950 */"./1768/950").left
var i = require(/* 717 */"./1608/717")
var a = require(/* 633 */"./1774/633")
var s = require(/* 758 */"./1784/758")
r({
  target: "Array",
  proto: true,
  forced: !i("reduce") || !s && a > 79 && a < 83
}, {
  reduce: function (e) {
    return require_950_$_1768_950$left(this, e, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
  }
})
