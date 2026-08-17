/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2295
 */

"use strict"

var r = require(/* 180 */"../../../../180")
var i = require(/* 204 */"../../../../204")
var o = require(/* 2296 */"./2296")
var a = require(/* 2297 */"./2297")
var s = require(/* 2298 */"./2298")
var c = require(/* 2299 */"./2299")
var u = require(/* 1140 */"../1140/index")
var l = require(/* 2300 */"./2300/index")
var f = require(/* 2301 */"./2301")
var d = function () {
  function e(t, n) {
    r(this, e)
    this.TokenCursor = t
    this.TokenCommentCursor = n
  }
  i(e, [
    {
      key: "createBaseCursor",
      value: function (e, t, n, r, i, o) {
        return new (o ? this.TokenCommentCursor : this.TokenCursor)(e, t, n, r, i)
      }
    }, {
      key: "createCursor",
      value: function (e, t, n, r, i, o, a, c, u) {
        var d = this.createBaseCursor(e, t, n, r, i, o)
        if (a) {
          d = new s(d, a)
        }
        if (c >= 1) {
          d = new f(d, c)
        }
        if (u >= 0) {
          d = new l(d, u)
        }
        return d
      }
    }
  ])
  return e
}()
exports.forward = new d(u, c)
exports.backward = new d(a, o)
