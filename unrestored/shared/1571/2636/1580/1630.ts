/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1630
 */

var r = require(/* 86 */"./1650/86/index")
var /* [auto-meaningful-name] */Math$asinh = Math.asinh
var /* [auto-meaningful-name] */Math$log = Math.log
var /* [auto-meaningful-name] */Math$sqrt = Math.sqrt
r({
  target: "Math",
  stat: true,
  forced: !(Math$asinh && 1 / Math$asinh(0) > 0)
}, {
  asinh: function e(t) {
    return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math$log(t + Math$sqrt(t * t + 1)) : t
  }
})
