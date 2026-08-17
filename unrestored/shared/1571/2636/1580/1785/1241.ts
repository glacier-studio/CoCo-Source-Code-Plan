/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1241
 */

var r = require(/* 271 */"../1648/271")
var o = require(/* 300 */"../1648/300/index")
var i = require(/* 240 */"../1282/240")
var a = require(/* 831 */"../1581/831/index")
module.exports = r ? Object.defineProperties : function (e, t) {
  i(e)
  for (var n, r = a(t), /* [auto-meaningful-name] */r$length = r.length, c = 0; r$length > c;) {
    o.f(e, n = r[c++], t[n])
  }
  return e
}
