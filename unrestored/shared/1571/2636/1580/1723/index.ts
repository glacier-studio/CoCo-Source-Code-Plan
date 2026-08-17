/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1723
 */

"use strict"

var r = require(/* 960 */"../1720/960")
var o = require(/* 1094 */"./1094")
var i = require(/* 240 */"../1282/240")
var a = require(/* 424 */"../1720/424")
var s = require(/* 956 */"./956")
var c = require(/* 1098 */"../1720/1098")
var l = require(/* 256 */"../1775/256")
var u = require(/* 310 */"../1282/310")
var d = require(/* 961 */"../1720/961")
var p = require(/* 958 */"./958")
var f = require(/* 1095 */"./1095")
var h = require(/* 168 */"../1648/168")
var /* [auto-meaningful-name] */f$UNSUPPORTED_Y = f.UNSUPPORTED_Y
var /* [auto-meaningful-name] */$push = [].push
var /* [auto-meaningful-name] */Math$min = Math.min
r("split", function (e, t, n) {
  var r
  r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
    var r = u(a(this))
    var i = undefined === n ? 4294967295 : n >>> 0
    if (0 === i) {
      return []
    }
    if (undefined === e) {
      return [r]
    }
    if (!o(e)) {
      return t.call(r, e, i)
    }
    for (var s, /* [auto-meaningful-name] */m$lastIndex, /* [auto-meaningful-name] */s0$length, d = [], f = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), h = 0, m = new RegExp(e.source, f + "g"); (s = p.call(m, r)) && !((m$lastIndex = m.lastIndex) > h && (d.push(r.slice(h, s.index)), s.length > 1 && s.index < r.length && $push.apply(d, s.slice(1)), s0$length = s[0].length, h = m$lastIndex, d.length >= i));) {
      if (m.lastIndex === s.index) {
        m.lastIndex++
      }
    }
    if (h === r.length) {
      if (!(!s0$length && m.test(""))) {
        d.push("")
      }
    } else {
      d.push(r.slice(h))
    }
    return d.length > i ? d.slice(0, i) : d
  } : "0".split(undefined, 0).length ? function (e, n) {
    return undefined === e && 0 === n ? [] : t.call(this, e, n)
  } : t
  return [
    function (t, n) {
      var o = a(this)
      var i = undefined == t ? undefined : t[e]
      return undefined !== i ? i.call(t, o, n) : r.call(u(o), t, n)
    }, function (e, o) {
      var a = i(this)
      var p = u(e)
      var f = n(r, a, p, o, r !== t)
      if (f.done) {
        return f.value
      }
      var h = s(a, RegExp)
      var /* [auto-meaningful-name] */a$unicode = a.unicode
      var v = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (f$UNSUPPORTED_Y ? "g" : "y")
      var b = new h(f$UNSUPPORTED_Y ? "^(?:" + a.source + ")" : a, v)
      var y = undefined === o ? 4294967295 : o >>> 0
      if (0 === y) {
        return []
      }
      if (0 === p.length) {
        return null === d(b, p) ? [p] : []
      }
      for (var E = 0, O = 0, w = []; O < p.length;) {
        b.lastIndex = f$UNSUPPORTED_Y ? 0 : O
        var C
        var T = d(b, f$UNSUPPORTED_Y ? p.slice(O) : p)
        if (null === T || (C = Math$min(l(b.lastIndex + (f$UNSUPPORTED_Y ? O : 0)), p.length)) === E) {
          O = c(p, O, a$unicode)
        } else {
          w.push(p.slice(E, O))
          if (w.length === y) {
            return w
          }
          for (var S = 1; S <= T.length - 1; S++) {
            w.push(T[S])
            if (w.length === y) {
              return w
            }
          }
          O = E = C
        }
      }
      w.push(p.slice(E))
      return w
    }
  ]
}, !!h(function () {
  var e = /(?:)/
  var /* [auto-meaningful-name] */e$exec = e.exec
  e.exec = function () {
    return e$exec.apply(this, arguments)
  }
  var n = "ab".split(e)
  return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
}), f$UNSUPPORTED_Y)
