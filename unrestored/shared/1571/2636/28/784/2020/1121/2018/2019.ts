/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2019
 */

var r = require(/* 1335 */"./1335")
module.exports = function (e, t) {
  if (";" !== (e = r.trimRight(e))[e.length - 1]) {
    e += ";"
  }
  var /* [auto-meaningful-name] */e$length = e.length
  var i = false
  var o = 0
  var a = 0
  var s = ""
  function c() {
    if (!i) {
      var n = r.trim(e.slice(o, a))
      var c = n.indexOf(":")
      if (-1 !== c) {
        var u = r.trim(n.slice(0, c))
        var l = r.trim(n.slice(c + 1))
        if (u) {
          var f = t(o, s.length, u, l, n)
          if (f) {
            s += f + "; "
          }
        }
      }
    }
    o = a + 1
  }
  for (; a < e$length; a++) {
    var u = e[a]
    if ("/" === u && "*" === e[a + 1]) {
      var l = e.indexOf("*/", a + 2)
      if (-1 === l) {
        break
      }
      o = (a = l + 1) + 1
      i = false
    } else if ("(" === u) {
      i = true
    } else {
      if (")" === u) {
        i = false
      } else {
        if (";" === u) {
          if (!i) {
            c()
          }
        } else {
          if ("\n" === u) {
            c()
          }
        }
      }
    }
  }
  return r.trim(s)
}
