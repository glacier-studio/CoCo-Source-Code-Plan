/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1261
 */

var r = require(/* 194 */"../1648/194")
var o = require(/* 310 */"../1282/310")
var /* [auto-meaningful-name] */require_761_$$_1648_761_index$trim = require(/* 761 */"../1648/761/index").trim
var a = require(/* 954 */"../1648/761/954")
var /* [auto-meaningful-name] */r$parseInt = r.parseInt
var c = /^[+-]?0[Xx]/
var l = 8 !== r$parseInt(a + "08") || 22 !== r$parseInt(a + "0x16")
module.exports = l ? function (e, t) {
  var n = require_761_$$_1648_761_index$trim(o(e))
  return r$parseInt(n, t >>> 0 || (c.test(n) ? 16 : 10))
} : r$parseInt
