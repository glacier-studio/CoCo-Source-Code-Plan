/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1240
 */

var r = require(/* 334 */"../../1648/334")
var o = require(/* 441 */"../../1718/441")
var /* [auto-meaningful-name] */require_828_$$_$$_1761_828$indexOf = require(/* 828 */"../../1761/828").indexOf
var a = require(/* 827 */"../827")
module.exports = function (e, t) {
  var n
  var s = o(e)
  var c = 0
  var l = []
  for (n in s) if (!r(a, n) && r(s, n)) {
    l.push(n)
  }
  for (; t.length > c;) {
    if (r(s, n = t[c++])) {
      if (!~require_828_$$_$$_1761_828$indexOf(l, n)) {
        l.push(n)
      }
    }
  }
  return l
}
