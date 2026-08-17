/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1612
 */

"use strict"

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 168 */"./1648/168")
var i = require(/* 716 */"./1597/716")
r({
  target: "Array",
  stat: true,
  forced: o(function () {
    function e() {}
    return !(Array.of.call(e) instanceof e)
  })
}, {
  of: function () {
    for (var e = 0, /* [auto-meaningful-name] */arguments$length = arguments.length, n = new ("function" == typeof this ? this : Array)(arguments$length); arguments$length > e;) {
      i(n, e, arguments[e++])
    }
    n.length = arguments$length
    return n
  }
})
