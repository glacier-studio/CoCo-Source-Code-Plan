/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2532
 */

var r = require(/* 1449 */"../2524/1448/1449/index")
var i = require(/* 1168 */"../../../../../../../253/2568/2569/2570/2571/1168/index")
var o = require(/* 451 */"../../../../2467/451")
var a = require(/* 1169 */"../../../../../../../253/2568/2569/2574/2582/1169")
var s = require(/* 1171 */"../../../2536/771/1171")
var c = require(/* 1001 */"../../2533/1001")
module.exports = function (e, t, n) {
  for (var u = -1, /* [auto-meaningful-name] */TRTE$length = (t = r(t, e)).length, f = false; ++u < TRTE$length;) {
    var d = c(t[u])
    if (!(f = null != e && n(e, d))) {
      break
    }
    e = e[d]
  }
  return f || ++u != TRTE$length ? f : !!(TRTE$length = null == e ? 0 : e.length) && s(TRTE$length) && a(d, TRTE$length) && (o(e) || i(e))
}
