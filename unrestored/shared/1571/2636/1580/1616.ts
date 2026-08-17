/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1616
 */

"use strict"

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 443 */"./1774/443")
var i = require(/* 309 */"./1771/309")
var a = require(/* 256 */"./1775/256")
var s = require(/* 310 */"./1282/310")
var c = require(/* 168 */"./1648/168")
var l = require(/* 1252 */"./1774/1252")
var u = require(/* 717 */"./1608/717")
var d = require(/* 1253 */"./1774/1253/index")
var p = require(/* 1254 */"./1774/1254")
var f = require(/* 633 */"./1774/633")
var h = require(/* 1089 */"./1774/1089")
var m = []
var /* [auto-meaningful-name] */m$sort = m.sort
var _ = c(function () {
  m.sort(undefined)
})
var v = c(function () {
  m.sort(null)
})
var b = u("sort")
var y = !c(function () {
  if (f) {
    return f < 70
  }
  if (!(d && d > 3)) {
    if (p) {
      return true
    }
    if (h) {
      return h < 603
    }
    var e
    var t
    var n
    var r
    var o = ""
    for (e = 65; e < 76; e++) {
      switch (t = String.fromCharCode(e), e) {
        case 66:
        case 69:
        case 70:
        case 72:
          n = 3
          break
        case 68:
        case 71:
          n = 4
          break
        default:
          n = 2
      }
      for (r = 0; r < 47; r++) {
        m.push({
          k: t + r,
          v: n
        })
      }
    }
    for (m.sort(function (e, t) {
      return t.v - e.v
    }), r = 0; r < m.length; r++) {
      t = m[r].k.charAt(0)
      if (o.charAt(o.length - 1) !== t) {
        o += t
      }
    }
    return "DGBEFHACIJK" !== o
  }
})
r({
  target: "Array",
  proto: true,
  forced: _ || !v || !b || !y
}, {
  sort: function (e) {
    if (undefined !== e) {
      o(e)
    }
    var t = i(this)
    if (y) {
      return undefined === e ? m$sort.call(t) : m$sort.call(t, e)
    }
    var /* [auto-meaningful-name] */CLCFunctionEReturnFunctionTNReturnUndefinedN1UndefinedT1UndefinedEETN0STSN11E$length
    var r
    var c = []
    var u = a(t.length)
    for (r = 0; r < u; r++) {
      if (r in t) {
        c.push(t[r])
      }
    }
    for (CLCFunctionEReturnFunctionTNReturnUndefinedN1UndefinedT1UndefinedEETN0STSN11E$length = (c = l(c, function (e) {
      return function (t, n) {
        return undefined === n ? -1 : undefined === t ? 1 : undefined !== e ? +e(t, n) || 0 : s(t) > s(n) ? 1 : -1
      }
    }(e))).length, r = 0; r < CLCFunctionEReturnFunctionTNReturnUndefinedN1UndefinedT1UndefinedEETN0STSN11E$length;) {
      t[r] = c[r++]
    }
    for (; r < u;) {
      delete t[r++]
    }
    return t
  }
})
