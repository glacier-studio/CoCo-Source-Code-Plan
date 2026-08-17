/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1251
 */

"use strict"

var r = require(/* 441 */"../1718/441")
var o = require(/* 477 */"../1720/477")
var i = require(/* 256 */"../1775/256")
var a = require(/* 717 */"../1608/717")
var /* [auto-meaningful-name] */Math$min = Math.min
var /* [auto-meaningful-name] */$lastIndexOf = [].lastIndexOf
var l = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0
var u = a("lastIndexOf")
var d = l || !u
module.exports = d ? function (e) {
  if (l) {
    return $lastIndexOf.apply(this, arguments) || 0
  }
  var t = r(this)
  var n = i(t.length)
  var a = n - 1
  for (arguments.length > 1 && (a = Math$min(a, o(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--) {
    if (a in t && t[a] === e) {
      return a || 0
    }
  }
  return -1
} : $lastIndexOf
