/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1263
 */

var r = require(/* 271 */"../1648/271")
var o = require(/* 831 */"../1581/831/index")
var i = require(/* 441 */"../1718/441")
var /* [auto-meaningful-name] */require_944_$$_1581_944$f = require(/* 944 */"../1581/944").f
var s = function (e) {
  return function (t) {
    for (var n, s = i(t), c = o(s), /* [auto-meaningful-name] */c$length = c.length, u = 0, d = []; c$length > u;) {
      n = c[u++]
      if (!(r && !require_944_$$_1581_944$f.call(s, n))) {
        d.push(e ? [n, s[n]] : s[n])
      }
    }
    return d
  }
}
module.exports = {
  entries: s(true),
  values: s(false)
}
