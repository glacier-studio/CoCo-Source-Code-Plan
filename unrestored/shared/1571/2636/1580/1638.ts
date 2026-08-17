/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1638
 */

var r = require(/* 86 */"./1650/86/index")
var /* [auto-meaningful-name] */Math$hypot = Math.hypot
var /* [auto-meaningful-name] */Math$abs = Math.abs
var /* [auto-meaningful-name] */Math$sqrt = Math.sqrt
r({
  target: "Math",
  stat: true,
  forced: !!Math$hypot && Math$hypot(1 / 0, NaN) !== 1 / 0
}, {
  hypot: function (e, t) {
    for (var n, r, o = 0, s = 0, /* [auto-meaningful-name] */arguments$length = arguments.length, l = 0; s < arguments$length;) {
      if (l < (n = Math$abs(arguments[s++]))) {
        o = o * (r = l / n) * r + 1
        l = n
      } else {
        o += n > 0 ? (r = n / l) * r : n
      }
    }
    return l === 1 / 0 ? 1 / 0 : l * Math$sqrt(o)
  }
})
