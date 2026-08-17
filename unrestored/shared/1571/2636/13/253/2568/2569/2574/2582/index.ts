/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2582
 */

var r = require(/* 863 */"../../2570/1459/863")
var i = require(/* 771 */"../../../../../797/101/2466/2477/2536/771/index")
var o = require(/* 1169 */"./1169")
var a = require(/* 479 */"../../../../2583/2584/479")
module.exports = function (e, t, n) {
  if (!a(n)) {
    return false
  }
  var s = typeof t
  return !!("number" == s ? i(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e)
}
