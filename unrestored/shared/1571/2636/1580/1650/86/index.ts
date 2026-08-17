/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：86
 */

var r = require(/* 194 */"../../1648/194")
var /* [auto-meaningful-name] */require_386_$$_$$_1648_386$f = require(/* 386 */"../../1648/386").f
var i = require(/* 425 */"../../1780/425")
var a = require(/* 400 */"../../1648/400")
var s = require(/* 1077 */"./1077")
var c = require(/* 1239 */"../../1584/1239")
var l = require(/* 829 */"../../1648/829")
module.exports = function (e, t) {
  var n
  var u
  var d
  var p
  var f
  var /* [auto-meaningful-name] */e$target = e.target
  var /* [auto-meaningful-name] */e$global = e.global
  var /* [auto-meaningful-name] */e$stat = e.stat
  if (n = e$global ? r : e$stat ? r[e$target] || s(e$target, {}) : (r[e$target] || {}).prototype) {
    for (u in t) {
      p = t[u]
      d = e.noTargetGet ? (f = require_386_$$_$$_1648_386$f(n, u)) && f.value : n[u]
      if (!l(e$global ? u : e$target + (e$stat ? "." : "#") + u, e.forced) && undefined !== d) {
        if (typeof p === typeof d) {
          continue
        }
        c(p, d)
      }
      if (e.sham || d && d.sham) {
        i(p, "sham", true)
      }
      a(n, u, p, e)
    }
  }
}
