/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1412
 */

"use strict"

var r = require(/* 1032 */"./1032")
var i = require(/* 675 */"./675/index")
exports.a = function (e, t, n) {
  var o = (e = e || {}).random || (e.rng || r.a)()
  o[6] = 15 & o[6] | 64
  o[8] = 63 & o[8] | 128
  if (t) {
    n = n || 0
    for (var a = 0; a < 16; ++a) {
      t[n + a] = o[a]
    }
    return t
  }
  return i.a(o)
}
