/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1676
 */

"use strict"

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 271 */"./1648/271")
var i = require(/* 955 */"./1677/955")
var a = require(/* 309 */"./1771/309")
var s = require(/* 632 */"./1581/632")
var c = require(/* 497 */"./1705/497")
var /* [auto-meaningful-name] */require_386_$_1648_386$f = require(/* 386 */"./1648/386").f
if (o) {
  r({
    target: "Object",
    proto: true,
    forced: i
  }, {
    __lookupGetter__: function (e) {
      var t
      var n = a(this)
      var r = s(e)
      do {
        if (t = require_386_$_1648_386$f(n, r)) {
          return t.get
        }
      } while (n = c(n))
    }
  })
}
