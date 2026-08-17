/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：864
 */

var r = require(/* 1452 */"../1452")
var i = require(/* 1181 */"../../../../../../253/2568/2569/2570/1459/1181/index")
module.exports = function (e, t, n, o) {
  var a = !n
  if (!n) {
    n = {}
  }
  for (var s = -1, /* [auto-meaningful-name] */t$length = t.length; ++s < t$length;) {
    var u = t[s]
    var l = o ? o(n[u], e[u], u, n, e) : undefined
    if (undefined === l) {
      l = e[u]
    }
    if (a) {
      i(n, u, l)
    } else {
      r(n, u, l)
    }
  }
  return n
}
