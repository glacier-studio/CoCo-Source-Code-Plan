/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1080
 */

var r = require(/* 476 */"../1282/476")
var o = require(/* 635 */"../1648/635")
var i = require(/* 1082 */"../1581/1082")
var a = require(/* 240 */"../1282/240")
module.exports = r("Reflect", "ownKeys") || function (e) {
  var t = o.f(a(e))
  var n = i.f
  return n ? t.concat(n(e)) : t
}
