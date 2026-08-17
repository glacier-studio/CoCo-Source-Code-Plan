/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1692
 */

"use strict"

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 533 */"../1724/533")
var i = require(/* 1265 */"./1265")
var a = require(/* 168 */"../1648/168")
var s = require(/* 476 */"../1282/476")
var c = require(/* 956 */"../1723/956")
var l = require(/* 1268 */"./1268")
var u = require(/* 400 */"../1648/400")
r({
  target: "Promise",
  proto: true,
  real: true,
  forced: !!i && a(function () {
    i.prototype.finally.call({
      then: function () {}
    }, function () {})
  })
}, {
  finally: function (e) {
    var t = c(this, s("Promise"))
    var n = "function" == typeof e
    return this.then(n ? function (n) {
      return l(t, e()).then(function () {
        return n
      })
    } : e, n ? function (n) {
      return l(t, e()).then(function () {
        throw n
      })
    } : e)
  }
})
if (!o && "function" == typeof i) {
  var /* [auto-meaningful-name] */sPromise$prototype$finally = s("Promise").prototype.finally
  if (i.prototype.finally !== sPromise$prototype$finally) {
    u(i.prototype, "finally", sPromise$prototype$finally, {
      unsafe: true
    })
  }
}
