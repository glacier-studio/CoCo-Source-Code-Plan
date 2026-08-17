/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1603
 */

"use strict"

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 1245 */"./1245")
var i = require(/* 309 */"../1771/309")
var a = require(/* 256 */"../1775/256")
var s = require(/* 477 */"../1720/477")
var c = require(/* 832 */"../1597/832/index")
r({
  target: "Array",
  proto: true
}, {
  flat: function () {
    var e = arguments.length ? arguments[0] : undefined
    var t = i(this)
    var n = a(t.length)
    var r = c(t, 0)
    r.length = o(r, t, t, n, 0, undefined === e ? 1 : s(e))
    return r
  }
})
