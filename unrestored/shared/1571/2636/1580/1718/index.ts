/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1718
 */

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 441 */"./441")
var i = require(/* 256 */"../1775/256")
var a = require(/* 310 */"../1282/310")
r({
  target: "String",
  stat: true
}, {
  raw: function (e) {
    for (var t = o(e.raw), n = i(t.length), /* [auto-meaningful-name] */arguments$length = arguments.length, s = [], c = 0; n > c;) {
      s.push(a(t[c++]))
      if (c < arguments$length) {
        s.push(a(arguments[c]))
      }
    }
    return s.join("")
  }
})
