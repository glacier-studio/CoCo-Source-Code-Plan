/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1262
 */

"use strict"

var r = require(/* 271 */"../1648/271")
var o = require(/* 168 */"../1648/168")
var i = require(/* 831 */"../1581/831/index")
var a = require(/* 1082 */"../1581/1082")
var s = require(/* 944 */"../1581/944")
var c = require(/* 309 */"../1771/309")
var l = require(/* 825 */"../1609/825")
var /* [auto-meaningful-name] */Object$assign = Object.assign
var /* [auto-meaningful-name] */Object$defineProperty = Object.defineProperty
module.exports = !Object$assign || o(function () {
  if (r && 1 !== Object$assign({
    b: 1
  }, Object$assign(Object$defineProperty({}, "a", {
    enumerable: true,
    get: function () {
      Object$defineProperty(this, "b", {
        value: 3,
        enumerable: false
      })
    }
  }), {
    b: 2
  })).b) {
    return true
  }
  var e = {}
  var t = {}
  var n = Symbol()
  e[n] = 7
  "abcdefghijklmnopqrst".split("").forEach(function (e) {
    t[e] = e
  })
  return 7 != Object$assign({}, e)[n] || "abcdefghijklmnopqrst" != i(Object$assign({}, t)).join("")
}) ? function (e, t) {
    for (var n = c(e), /* [auto-meaningful-name] */arguments$length = arguments.length, u = 1, d = a.f, p = s.f; arguments$length > u;) {
      for (var f, h = l(arguments[u++]), m = d ? i(h).concat(d(h)) : i(h), /* [auto-meaningful-name] */m$length = m.length, _ = 0; m$length > _;) {
        f = m[_++]
        if (!(r && !p.call(h, f))) {
          n[f] = h[f]
        }
      }
    }
    return n
  } : Object$assign
