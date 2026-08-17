/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1713
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 715 */"./1775/715")
var /* [auto-meaningful-name] */String$fromCharCode = String.fromCharCode
var /* [auto-meaningful-name] */String$fromCodePoint = String.fromCodePoint
r({
  target: "String",
  stat: true,
  forced: !!String$fromCodePoint && 1 != String$fromCodePoint.length
}, {
  fromCodePoint: function (e) {
    for (var t, n = [], /* [auto-meaningful-name] */arguments$length = arguments.length, a = 0; arguments$length > a;) {
      t = +arguments[a++]
      if (o(t, 1114111) !== t) {
        throw RangeError(t + " is not a valid code point")
      }
      n.push(t < 65536 ? String$fromCharCode(t) : String$fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
    }
    return n.join("")
  }
})
