/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1604
 */

"use strict"

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 1245 */"./1603/1245")
var i = require(/* 309 */"./1771/309")
var a = require(/* 256 */"./1775/256")
var s = require(/* 443 */"./1774/443")
var c = require(/* 832 */"./1597/832/index")
r({
  target: "Array",
  proto: true
}, {
  flatMap: function (e) {
    var t
    var n = i(this)
    var r = a(n.length)
    s(e);
    (t = c(n, 0)).length = o(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : undefined)
    return t
  }
})
