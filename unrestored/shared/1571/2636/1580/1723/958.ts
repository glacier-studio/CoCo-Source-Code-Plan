/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：958
 */

"use strict"

var r = require(/* 310 */"../1282/310")
var o = require(/* 957 */"../1709/957")
var i = require(/* 1095 */"./1095")
var a = require(/* 945 */"../1581/945")
var s = require(/* 577 */"../1648/577")
var /* [auto-meaningful-name] */require_426_$$_1282_426$get = require(/* 426 */"../1282/426").get
var l = require(/* 1271 */"../1707/1271")
var u = require(/* 1272 */"../1707/1272")
var /* [auto-meaningful-name] */RegExp$prototype$exec = RegExp.prototype.exec
var p = a("native-string-replace", String.prototype.replace)
var f = RegExp$prototype$exec
var h = function () {
  var e = /a/
  var t = /b*/g
  RegExp$prototype$exec.call(e, "a")
  RegExp$prototype$exec.call(t, "a")
  return 0 !== e.lastIndex || 0 !== t.lastIndex
}()
var m = i.UNSUPPORTED_Y || i.BROKEN_CARET
var g = undefined !== /()??/.exec("")[1]
if (h || g || m || l || u) {
  f = function (e) {
    var t
    var n
    var /* [auto-meaningful-name] */v$lastIndex
    var a
    var l
    var u
    var _
    var v = this
    var b = require_426_$$_1282_426$get(v)
    var y = r(e)
    var /* [auto-meaningful-name] */b$raw = b.raw
    if (b$raw) {
      b$raw.lastIndex = v.lastIndex
      t = f.call(b$raw, y)
      v.lastIndex = b$raw.lastIndex
      return t
    }
    var /* [auto-meaningful-name] */b$groups = b.groups
    var w = m && v.sticky
    var C = o.call(v)
    var /* [auto-meaningful-name] */v$source = v.source
    var S = 0
    var A = y
    if (w) {
      if (-1 === (C = C.replace("y", "")).indexOf("g")) {
        C += "g"
      }
      A = y.slice(v.lastIndex)
      if (v.lastIndex > 0 && (!v.multiline || v.multiline && "\n" !== y.charAt(v.lastIndex - 1))) {
        v$source = "(?: " + v$source + ")"
        A = " " + A
        S++
      }
      n = new RegExp("^(?:" + v$source + ")", C)
    }
    if (g) {
      n = new RegExp("^" + v$source + "$(?!\\s)", C)
    }
    if (h) {
      v$lastIndex = v.lastIndex
    }
    a = RegExp$prototype$exec.call(w ? n : v, A)
    if (w) {
      if (a) {
        a.input = a.input.slice(S)
        a[0] = a[0].slice(S)
        a.index = v.lastIndex
        v.lastIndex += a[0].length
      } else {
        v.lastIndex = 0
      }
    } else {
      if (h && a) {
        v.lastIndex = v.global ? a.index + a[0].length : v$lastIndex
      }
    }
    if (g && a && a.length > 1) {
      p.call(a[0], n, function () {
        for (l = 1; l < arguments.length - 2; l++) {
          if (undefined === arguments[l]) {
            a[l] = undefined
          }
        }
      })
    }
    if (a && b$groups) {
      for (a.groups = u = s(null), l = 0; l < b$groups.length; l++) {
        u[(_ = b$groups[l])[0]] = a[_[1]]
      }
    }
    return a
  }
}
module.exports = f
