/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1639
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 168 */"./1648/168")
var /* [auto-meaningful-name] */Math$imul = Math.imul
r({
  target: "Math",
  stat: true,
  forced: o(function () {
    return -5 != Math$imul(4294967295, 5) || 2 != Math$imul.length
  })
}, {
  imul: function (e, t) {
    var n = +e
    var r = +t
    var o = 65535 & n
    var i = 65535 & r
    return 0 | o * i + ((65535 & n >>> 16) * i + o * (65535 & r >>> 16) << 16 >>> 0)
  }
})
