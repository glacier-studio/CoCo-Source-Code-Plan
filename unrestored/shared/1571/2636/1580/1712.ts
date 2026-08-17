/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1712
 */

"use strict"

var r = require(/* 86 */"./1650/86/index")
var /* [auto-meaningful-name] */require_386_$_1648_386$f = require(/* 386 */"./1648/386").f
var i = require(/* 256 */"./1775/256")
var a = require(/* 310 */"./1282/310")
var s = require(/* 1096 */"./1724/1096")
var c = require(/* 424 */"./1720/424")
var l = require(/* 1097 */"./1724/1097")
var u = require(/* 533 */"./1724/533")
var /* [auto-meaningful-name] */$endsWith = "".endsWith
var /* [auto-meaningful-name] */Math$min = Math.min
var f = l("endsWith")
r({
  target: "String",
  proto: true,
  forced: !(!u && !f && !!function () {
    var e = require_386_$_1648_386$f(String.prototype, "endsWith")
    return e && !e.writable
  }()) && !f
}, {
  endsWith: function (e) {
    var t = a(c(this))
    s(e)
    var n = arguments.length > 1 ? arguments[1] : undefined
    var r = i(t.length)
    var o = undefined === n ? r : Math$min(i(n), r)
    var l = a(e)
    return $endsWith ? $endsWith.call(t, l, o) : t.slice(o - l.length, o) === l
  }
})
