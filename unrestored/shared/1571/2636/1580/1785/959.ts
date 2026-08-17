/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：959
 */

var r = require(/* 477 */"../1720/477")
var o = require(/* 310 */"../1282/310")
var i = require(/* 424 */"../1720/424")
var a = function (e) {
  return function (t, n) {
    var a
    var s
    var c = o(i(t))
    var l = r(n)
    var /* [auto-meaningful-name] */c$length = c.length
    return l < 0 || l >= c$length ? e ? "" : undefined : (a = c.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === c$length || (s = c.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? c.charAt(l) : a : e ? c.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
  }
}
module.exports = {
  codeAt: a(false),
  charAt: a(true)
}
