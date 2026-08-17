/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1084
 */

"use strict"

var r = require(/* 309 */"../1771/309")
var o = require(/* 715 */"../1775/715")
var i = require(/* 256 */"../1775/256")
module.exports = function (e) {
  for (var t = r(this), n = i(t.length), /* [auto-meaningful-name] */arguments$length = arguments.length, s = o(arguments$length > 1 ? arguments[1] : undefined, n), c = arguments$length > 2 ? arguments[2] : undefined, l = undefined === c ? n : o(c, n); l > s;) {
    t[s++] = e
  }
  return t
}
