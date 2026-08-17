/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：217
 */

"use strict"

var r = require(/* 394 */"../523/394")
var i = require(/* 521 */"./521")
var o = require(/* 292 */"./292")
function a(e) {
  return function t(n, a, s) {
    switch (arguments.length) {
      case 0:
        return t
      case 1:
        return o.a(n) ? t : i.a(function (t, r) {
          return e(n, t, r)
        })
      case 2:
        return o.a(n) && o.a(a) ? t : o.a(n) ? i.a(function (t, n) {
          return e(t, a, n)
        }) : o.a(a) ? i.a(function (t, r) {
          return e(n, t, r)
        }) : r.a(function (t) {
          return e(n, a, t)
        })
      default:
        return o.a(n) && o.a(a) && o.a(s) ? t : o.a(n) && o.a(a) ? i.a(function (t, n) {
          return e(t, n, s)
        }) : o.a(n) && o.a(s) ? i.a(function (t, n) {
          return e(t, a, n)
        }) : o.a(a) && o.a(s) ? i.a(function (t, r) {
          return e(n, t, r)
        }) : o.a(n) ? r.a(function (t) {
          return e(t, a, s)
        }) : o.a(a) ? r.a(function (t) {
          return e(n, t, s)
        }) : o.a(s) ? r.a(function (t) {
          return e(n, a, t)
        }) : e(n, a, s)
    }
  }
}
var s = a(function (e, t, n) {
  if (e > t) {
    throw new Error("min must not be greater than max in clamp(min, max, value)")
  }
  return n < e ? e : n > t ? t : n
})
exports.a = s
