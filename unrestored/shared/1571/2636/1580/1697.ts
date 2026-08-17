/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1697
 */

var r = require(/* 86 */"./1650/86/index")
var o = require(/* 240 */"./1282/240")
var /* [auto-meaningful-name] */require_386_$_1648_386$f = require(/* 386 */"./1648/386").f
r({
  target: "Reflect",
  stat: true
}, {
  deleteProperty: function (e, t) {
    var n = require_386_$_1648_386$f(o(e), t)
    return !(n && !n.configurable) && delete e[t]
  }
})
