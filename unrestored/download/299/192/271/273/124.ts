/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：124
 */

"use strict"

var /* [auto-meaningful-name] */s$location
var i
var o
var /* [auto-meaningful-name] */ONewS$MessageChannel$port2
var s = require(/* 6 */"../../275/6")
var u = require(/* 118 */"../../237/118")
var c = require(/* 43 */"../../204/142/43")
var l = require(/* 14 */"../../228/14")
var f = require(/* 24 */"../../233/24")
var p = require(/* 9 */"../../275/9")
var d = require(/* 147 */"../../233/55/147")
var h = require(/* 71 */"../../280/281/71")
var g = require(/* 82 */"../../268/270/82")
var m = require(/* 75 */"../../275/75")
var v = require(/* 171 */"../../275/276/171")
var y = require(/* 172 */"../../275/276/172/index")
var /* [auto-meaningful-name] */s$setImmediate = s.setImmediate
var /* [auto-meaningful-name] */s$clearImmediate = s.clearImmediate
var /* [auto-meaningful-name] */s$process = s.process
var /* [auto-meaningful-name] */s$Dispatch = s.Dispatch
var /* [auto-meaningful-name] */s$Function = s.Function
var /* [auto-meaningful-name] */s$MessageChannel = s.MessageChannel
var /* [auto-meaningful-name] */s$String = s.String
var T = 0
var x = {}
var /* [auto-meaningful-name] */Onreadystatechange = "onreadystatechange"
p(function () {
  s$location = s.location
})
var P = function (e) {
  if (f(x, e)) {
    var t = x[e]
    delete x[e]
    t()
  }
}
var C = function (e) {
  return function () {
    P(e)
  }
}
var I = function (e) {
  P(e.data)
}
var N = function (e) {
  s.postMessage(s$String(e), s$location.protocol + "//" + s$location.host)
}
if (!(s$setImmediate && s$clearImmediate)) {
  s$setImmediate = function (e) {
    m(arguments.length, 1)
    var t = l(e) ? e : s$Function(e)
    var n = h(arguments, 1)
    x[++T] = function () {
      u(t, undefined, n)
    }
    i(T)
    return T
  }
  s$clearImmediate = function (e) {
    delete x[e]
  }
  if (y) {
    i = function (e) {
      s$process.nextTick(C(e))
    }
  } else {
    if (s$Dispatch && s$Dispatch.now) {
      i = function (e) {
        s$Dispatch.now(C(e))
      }
    } else {
      if (s$MessageChannel && !v) {
        ONewS$MessageChannel$port2 = (o = new s$MessageChannel()).port2
        o.port1.onmessage = I
        i = c(ONewS$MessageChannel$port2.postMessage, ONewS$MessageChannel$port2)
      } else {
        if (s.addEventListener && l(s.postMessage) && !s.importScripts && s$location && "file:" !== s$location.protocol && !p(N)) {
          i = N
          s.addEventListener("message", I, false)
        } else {
          i = Onreadystatechange in g("script") ? function (e) {
            d.appendChild(g("script"))[Onreadystatechange] = function () {
              d.removeChild(this)
              P(e)
            }
          } : function (e) {
            setTimeout(C(e), 0)
          }
        }
      }
    }
  }
}
module.exports = {
  set: s$setImmediate,
  clear: s$clearImmediate
}
