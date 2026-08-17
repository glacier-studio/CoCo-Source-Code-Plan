/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：400
 */

var r = require(/* 194 */"./194")
var o = require(/* 425 */"../1780/425")
var i = require(/* 334 */"./334")
var a = require(/* 1077 */"../1650/86/1077")
var s = require(/* 1079 */"../1686/1079/index")
var c = require(/* 426 */"../1282/426")
var /* [auto-meaningful-name] */c$get = c.get
var /* [auto-meaningful-name] */c$enforce = c.enforce
var d = String(String).split("String");
(module.exports = function (e, t, n, s) {
  var c
  var l = !!s && !!s.unsafe
  var p = !!s && !!s.enumerable
  var f = !!s && !!s.noTargetGet
  if ("function" == typeof n) {
    if (!("string" != typeof t || i(n, "name"))) {
      o(n, "name", t)
    }
    if (!(c = c$enforce(n)).source) {
      c.source = d.join("string" == typeof t ? t : "")
    }
  }
  if (e !== r) {
    if (l) {
      if (!f && e[t]) {
        p = true
      }
    } else {
      delete e[t]
    }
    if (p) {
      e[t] = n
    } else {
      o(e, t, n)
    }
  } else {
    if (p) {
      e[t] = n
    } else {
      a(t, n)
    }
  }
})(Function.prototype, "toString", function () {
  return "function" == typeof this && c$get(this).source || s(this)
})
