/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1782
 */

var r = require(/* 194 */"../1648/194")
var o = require(/* 1280 */"../1780/1280")
var i = require(/* 949 */"../949/index")
var a = require(/* 425 */"../1780/425")
var s = require(/* 246 */"./246/index")
var c = s("iterator")
var l = s("toStringTag")
var /* [auto-meaningful-name] */i$values = i.values
for (var d in o) {
  var p = r[d]
  var f = p && p.prototype
  if (f) {
    if (f[c] !== i$values) {
      try {
        a(f, c, i$values)
      } catch (m) {
        f[c] = i$values
      }
    }
    if (!f[l]) {
      a(f, l, d)
    }
    if (o[d]) {
      for (var h in i) if (f[h] !== i[h]) {
        try {
          a(f, h, i[h])
        } catch (m) {
          f[h] = i[h]
        }
      }
    }
  }
}
