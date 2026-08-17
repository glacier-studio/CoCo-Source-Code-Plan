/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2537
 */

var r = require(/* 771 */"../../../../../../797/101/2466/2477/2536/771/index")
module.exports = function (e, t) {
  return function (n, i) {
    if (null == n) {
      return n
    }
    if (!r(n)) {
      return e(n, i)
    }
    for (var /* [auto-meaningful-name] */n$length = n.length, a = t ? n$length : -1, s = Object(n); (t ? a-- : ++a < n$length) && false !== i(s[a], a, s);) {
      ;
    }
    return n
  }
}
