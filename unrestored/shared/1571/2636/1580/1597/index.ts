/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1597
 */

"use strict"

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 168 */"../1648/168")
var i = require(/* 830 */"../1581/830")
var a = require(/* 231 */"../1282/231")
var s = require(/* 309 */"../1771/309")
var c = require(/* 256 */"../1775/256")
var l = require(/* 716 */"./716")
var u = require(/* 832 */"./832/index")
var d = require(/* 833 */"./833")
var p = require(/* 246 */"../1782/246/index")
var f = require(/* 633 */"../1774/633")
var h = p("isConcatSpreadable")
var m = f >= 51 || !o(function () {
  var e = []
  e[h] = false
  return e.concat()[0] !== e
})
var g = d("concat")
var _ = function (e) {
  if (!a(e)) {
    return false
  }
  var t = e[h]
  return undefined !== t ? !!t : i(e)
}
r({
  target: "Array",
  proto: true,
  forced: !m || !g
}, {
  concat: function (e) {
    var t
    var n
    var /* [auto-meaningful-name] */arguments$length
    var o
    var i
    var a = s(this)
    var d = u(a, 0)
    var p = 0
    for (t = -1, arguments$length = arguments.length; t < arguments$length; t++) {
      if (_(i = -1 === t ? a : arguments[t])) {
        if (p + (o = c(i.length)) > 9007199254740991) {
          throw TypeError("Maximum allowed index exceeded")
        }
        for (n = 0; n < o; n++, p++) {
          if (n in i) {
            l(d, p, i[n])
          }
        }
      } else {
        if (p >= 9007199254740991) {
          throw TypeError("Maximum allowed index exceeded")
        }
        l(d, p++, i)
      }
    }
    d.length = p
    return d
  }
})
