/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1720
 */

"use strict"

var r = require(/* 960 */"./960")
var o = require(/* 168 */"../1648/168")
var i = require(/* 240 */"../1282/240")
var a = require(/* 477 */"./477")
var s = require(/* 256 */"../1775/256")
var c = require(/* 310 */"../1282/310")
var l = require(/* 424 */"./424")
var u = require(/* 1098 */"./1098")
var d = require(/* 1721 */"./1721")
var p = require(/* 961 */"./961")
var f = require(/* 246 */"../1782/246/index")("replace")
var /* [auto-meaningful-name] */Math$max = Math.max
var /* [auto-meaningful-name] */Math$min = Math.min
var g = "$0" === "a".replace(/./, "$0")
var _ = !!/./[f] && "" === /./[f]("a", "$0")
r("replace", function (e, t, n) {
  var r = _ ? "$" : "$0"
  return [
    function (e, n) {
      var r = l(this)
      var o = undefined == e ? undefined : e[f]
      return undefined !== o ? o.call(e, r, n) : t.call(c(r), e, n)
    }, function (e, o) {
      var l = i(this)
      var f = c(e)
      if ("string" === typeof o && -1 === o.indexOf(r) && -1 === o.indexOf("$<")) {
        var g = n(t, l, f, o)
        if (g.done) {
          return g.value
        }
      }
      var _ = "function" === typeof o
      if (!_) {
        o = c(o)
      }
      var /* [auto-meaningful-name] */l$global = l.global
      if (l$global) {
        var /* [auto-meaningful-name] */l$unicode = l.unicode
        l.lastIndex = 0
      }
      for (var y = [];;) {
        var E = p(l, f)
        if (null === E) {
          break
        }
        y.push(E)
        if (!l$global) {
          break
        }
        if ("" === c(E[0])) {
          l.lastIndex = u(f, s(l.lastIndex), l$unicode)
        }
      }
      for (var O, w = "", C = 0, T = 0; T < y.length; T++) {
        E = y[T]
        for (var S = c(E[0]), A = Math$max(Math$min(a(E.index), f.length), 0), I = [], j = 1; j < E.length; j++) {
          I.push(undefined === (O = E[j]) ? O : String(O))
        }
        var /* [auto-meaningful-name] */E$groups = E.groups
        if (_) {
          var R = [S].concat(I, A, f)
          if (undefined !== E$groups) {
            R.push(E$groups)
          }
          var k = c(o.apply(undefined, R))
        } else {
          k = d(S, f, A, I, E$groups, o)
        }
        if (A >= C) {
          w += f.slice(C, A) + k
          C = A + S.length
        }
      }
      return w + f.slice(C)
    }
  ]
}, !!o(function () {
  var e = /./
  e.exec = function () {
    var e = []
    e.groups = {
      a: "7"
    }
    return e
  }
  return "7" !== "".replace(e, "$<a>")
}) || !g || _)
