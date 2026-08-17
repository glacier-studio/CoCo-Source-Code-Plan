/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1093
 */

var /* [auto-meaningful-name] */s$location
var o
var i
var /* [auto-meaningful-name] */INewS$MessageChannel$port2
var s = require(/* 194 */"../../1648/194")
var c = require(/* 168 */"../../1648/168")
var l = require(/* 636 */"../../1282/636")
var u = require(/* 1242 */"./1242")
var d = require(/* 1078 */"./1078")
var p = require(/* 1266 */"../../1784/1267/1266")
var f = require(/* 758 */"../../1784/758")
var /* [auto-meaningful-name] */s$setImmediate = s.setImmediate
var /* [auto-meaningful-name] */s$clearImmediate = s.clearImmediate
var /* [auto-meaningful-name] */s$process = s.process
var /* [auto-meaningful-name] */s$MessageChannel = s.MessageChannel
var /* [auto-meaningful-name] */s$Dispatch = s.Dispatch
var b = 0
var y = {}
try {
  s$location = s.location
} catch (T) {}
var E = function (e) {
  if (y.hasOwnProperty(e)) {
    var t = y[e]
    delete y[e]
    t()
  }
}
var O = function (e) {
  return function () {
    E(e)
  }
}
var w = function (e) {
  E(e.data)
}
var C = function (e) {
  s.postMessage(String(e), s$location.protocol + "//" + s$location.host)
}
if (!(s$setImmediate && s$clearImmediate)) {
  s$setImmediate = function (e) {
    for (var t = [], /* [auto-meaningful-name] */arguments$length = arguments.length, r = 1; arguments$length > r;) {
      t.push(arguments[r++])
    }
    y[++b] = function () {
      ("function" == typeof e ? e : Function(e)).apply(undefined, t)
    }
    o(b)
    return b
  }
  s$clearImmediate = function (e) {
    delete y[e]
  }
  if (f) {
    o = function (e) {
      s$process.nextTick(O(e))
    }
  } else {
    if (s$Dispatch && s$Dispatch.now) {
      o = function (e) {
        s$Dispatch.now(O(e))
      }
    } else {
      if (s$MessageChannel && !p) {
        INewS$MessageChannel$port2 = (i = new s$MessageChannel()).port2
        i.port1.onmessage = w
        o = l(INewS$MessageChannel$port2.postMessage, INewS$MessageChannel$port2, 1)
      } else {
        if (s.addEventListener && "function" == typeof postMessage && !s.importScripts && s$location && "file:" !== s$location.protocol && !c(C)) {
          o = C
          s.addEventListener("message", w, false)
        } else {
          o = "onreadystatechange" in d("script") ? function (e) {
            u.appendChild(d("script")).onreadystatechange = function () {
              u.removeChild(this)
              E(e)
            }
          } : function (e) {
            setTimeout(O(e), 0)
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
