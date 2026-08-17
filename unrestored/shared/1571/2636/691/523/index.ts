/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：523
 */

"use strict"

var r = require(/* 921 */"./921")
function i(e, t, n, o) {
  var a
  var s = function (r) {
    for (var /* [auto-meaningful-name] */t$length = t.length, s = 0; s < t$length;) {
      if (e === t[s]) {
        return n[s]
      }
      s += 1
    }
    for (var c in t[s + 1] = e, n[s + 1] = r, e) r[c] = o ? i(e[c], t, n, true) : e[c]
    return r
  }
  switch (r.a(e)) {
    case "Object":
      return s({})
    case "Array":
      return s([])
    case "Date":
      return new Date(e.valueOf())
    case "RegExp":
      a = e
      return new RegExp(a.source, (a.global ? "g" : "") + (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.sticky ? "y" : "") + (a.unicode ? "u" : ""))
    default:
      return e
  }
}
var o = require(/* 394 */"./394")
var a = o.a(function (e) {
  return null != e && "function" === typeof e.clone ? e.clone() : i(e, [], [], true)
})
exports.a = a
