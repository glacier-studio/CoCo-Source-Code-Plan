/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1721
 */

var r = require(/* 309 */"../1771/309")
var /* [auto-meaningful-name] */Math$floor = Math.floor
var /* [auto-meaningful-name] */$replace = "".replace
var a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g
var s = /\$([$&'`]|\d{1,2})/g
module.exports = function (e, t, n, c, l, u) {
  var d = n + e.length
  var /* [auto-meaningful-name] */c$length = c.length
  var f = s
  if (undefined !== l) {
    l = r(l)
    f = a
  }
  return $replace.call(u, f, function (r, i) {
    var a
    switch (i.charAt(0)) {
      case "$":
        return "$"
      case "&":
        return e
      case "`":
        return t.slice(0, n)
      case "'":
        return t.slice(d)
      case "<":
        a = l[i.slice(1, -1)]
        break
      default:
        var s = +i
        if (0 === s) {
          return r
        }
        if (s > c$length) {
          var u = Math$floor(s / 10)
          return 0 === u ? r : u <= c$length ? undefined === c[u - 1] ? i.charAt(1) : c[u - 1] + i.charAt(1) : r
        }
        a = c[s - 1]
    }
    return undefined === a ? "" : a
  })
}
