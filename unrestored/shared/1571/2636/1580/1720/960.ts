/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：960
 */

"use strict"

require(/* 1273 */"../1273")
var r = require(/* 400 */"../1648/400")
var o = require(/* 958 */"../1723/958")
var i = require(/* 168 */"../1648/168")
var a = require(/* 246 */"../1782/246/index")
var s = require(/* 425 */"../1780/425")
var c = a("species")
var /* [auto-meaningful-name] */RegExp$prototype = RegExp.prototype
module.exports = function (e, t, n, u) {
  var d = a(e)
  var p = !i(function () {
    var t = {}
    t[d] = function () {
      return 7
    }
    return 7 != ""[e](t)
  })
  var f = p && !i(function () {
    var t = false
    var n = /a/
    if ("split" === e) {
      (n = {}).constructor = {}
      n.constructor[c] = function () {
        return n
      }
      n.flags = ""
      n[d] = /./[d]
    }
    n.exec = function () {
      t = true
      return null
    }
    n[d]("")
    return !t
  })
  if (!p || !f || n) {
    var h = /./[d]
    var m = t(d, ""[e], function (e, t, n, r, i) {
      var /* [auto-meaningful-name] */t$exec = t.exec
      return t$exec === o || t$exec === RegExp$prototype.exec ? p && !i ? {
        done: true,
        value: h.call(t, n, r)
      } : {
        done: true,
        value: e.call(n, t, r)
      } : {
        done: false
      }
    })
    r(String.prototype, e, m[0])
    r(RegExp$prototype, d, m[1])
  }
  if (u) {
    s(RegExp$prototype[d], "sham", true)
  }
}
