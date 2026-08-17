/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1715
 */

"use strict"

var r = require(/* 960 */"./1720/960")
var o = require(/* 240 */"./1282/240")
var i = require(/* 256 */"./1775/256")
var a = require(/* 310 */"./1282/310")
var s = require(/* 424 */"./1720/424")
var c = require(/* 1098 */"./1720/1098")
var l = require(/* 961 */"./1720/961")
r("match", function (e, t, n) {
  return [
    function (t) {
      var n = s(this)
      var r = undefined == t ? undefined : t[e]
      return undefined !== r ? r.call(t, n) : new RegExp(t)[e](a(n))
    }, function (e) {
      var r = o(this)
      var s = a(e)
      var u = n(t, r, s)
      if (u.done) {
        return u.value
      }
      if (!r.global) {
        return l(r, s)
      }
      var /* [auto-meaningful-name] */r$unicode = r.unicode
      r.lastIndex = 0
      for (var p, f = [], h = 0; null !== (p = l(r, s));) {
        var m = a(p[0])
        f[h] = m
        if ("" === m) {
          r.lastIndex = c(s, i(r.lastIndex), r$unicode)
        }
        h++
      }
      return 0 === h ? null : f
    }
  ]
})
