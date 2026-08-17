/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1433
 */

var r = require(/* 2471 */"./2471")
var i = require(/* 1168 */"../../2571/1168/index")
var o = require(/* 451 */"../../../../../../797/101/2466/2467/451")
var a = require(/* 992 */"../../2571/992/index")
var s = require(/* 1169 */"../../../2574/2582/1169")
var c = require(/* 1170 */"../../2571/1170/index")
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
module.exports = function (e, t) {
  var n = o(e)
  var l = !n && i(e)
  var f = !n && !l && a(e)
  var d = !n && !l && !f && c(e)
  var h = n || l || f || d
  var p = h ? r(e.length, String) : []
  var /* [auto-meaningful-name] */p$length = p.length
  for (var A in e) if (!(!t && !Object$prototype$hasOwnProperty.call(e, A) || h && ("length" == A || f && ("offset" == A || "parent" == A) || d && ("buffer" == A || "byteLength" == A || "byteOffset" == A) || s(A, p$length)))) {
    p.push(A)
  }
  return p
}
