/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：246
 */

var r = require(/* 194 */"../../1648/194")
var o = require(/* 945 */"../../1581/945")
var i = require(/* 334 */"../../1648/334")
var a = require(/* 826 */"../../1581/826")
var s = require(/* 1075 */"../../1581/1075")
var c = require(/* 1235 */"./1235")
var l = o("wks")
var /* [auto-meaningful-name] */r$Symbol = r.Symbol
var d = c ? r$Symbol : r$Symbol && r$Symbol.withoutSetter || a
module.exports = function (e) {
  if (!(i(l, e) && (s || "string" == typeof l[e]))) {
    if (s && i(r$Symbol, e)) {
      l[e] = r$Symbol[e]
    } else {
      l[e] = d("Symbol." + e)
    }
  }
  return l[e]
}
