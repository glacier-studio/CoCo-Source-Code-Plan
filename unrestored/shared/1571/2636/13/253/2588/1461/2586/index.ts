/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2586
 */

var r = require(/* 479 */"../../../2583/2584/479")
var i = require(/* 1000 */"./1000")
var o = /^\s+|\s+$/g
var a = /^[-+]0x[0-9a-f]+$/i
var s = /^0b[01]+$/i
var c = /^0o[0-7]+$/i
var u = parseInt
module.exports = function (e) {
  if ("number" == typeof e) {
    return e
  }
  if (i(e)) {
    return NaN
  }
  if (r(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e
    e = r(t) ? t + "" : t
  }
  if ("string" != typeof e) {
    return 0 === e ? e : +e
  }
  e = e.replace(o, "")
  var n = s.test(e)
  return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
}
