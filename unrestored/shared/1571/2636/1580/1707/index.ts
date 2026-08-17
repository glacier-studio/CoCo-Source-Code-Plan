/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1707
 */

var r = require(/* 271 */"../1648/271")
var o = require(/* 194 */"../1648/194")
var i = require(/* 829 */"../1648/829")
var a = require(/* 952 */"../1648/952")
var s = require(/* 425 */"../1780/425")
var /* [auto-meaningful-name] */require_300_$$_1648_300_index$f = require(/* 300 */"../1648/300/index").f
var /* [auto-meaningful-name] */require_635_$$_1648_635$f = require(/* 635 */"../1648/635").f
var u = require(/* 1094 */"../1723/1094")
var d = require(/* 310 */"../1282/310")
var p = require(/* 957 */"../1709/957")
var f = require(/* 1095 */"../1723/1095")
var h = require(/* 400 */"../1648/400")
var m = require(/* 168 */"../1648/168")
var g = require(/* 334 */"../1648/334")
var /* [auto-meaningful-name] */require_426_$$_1282_426$enforce = require(/* 426 */"../1282/426").enforce
var v = require(/* 759 */"./759")
var b = require(/* 246 */"../1782/246/index")
var y = require(/* 1271 */"./1271")
var E = require(/* 1272 */"./1272")
var O = b("match")
var /* [auto-meaningful-name] */o$RegExp = o.RegExp
var /* [auto-meaningful-name] */o$RegExp$prototype = o$RegExp.prototype
var T = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
var S = /a/g
var A = /a/g
var I = new o$RegExp(S) !== S
var /* [auto-meaningful-name] */f$UNSUPPORTED_Y = f.UNSUPPORTED_Y
var N = r && (!I || f$UNSUPPORTED_Y || y || E || m(function () {
  A[O] = false
  return o$RegExp(S) != S || o$RegExp(A) == A || "/a/i" != o$RegExp(S, "i")
}))
if (i("RegExp", N)) {
  for (var R = function (e, t) {
      var n
      var r
      var o
      var i
      var c
      var l
      var f = this instanceof R
      var h = u(e)
      var m = undefined === t
      var v = []
      var b = e
      if (!f && h && m && e.constructor === R) {
        return e
      }
      if (h || e instanceof R) {
        e = e.source
        if (m) {
          t = "flags" in b ? b.flags : p.call(b)
        }
      }
      e = undefined === e ? "" : d(e)
      t = undefined === t ? "" : d(t)
      b = e
      if (y && "dotAll" in S && (r = !!t && t.indexOf("s") > -1)) {
        t = t.replace(/s/g, "")
      }
      n = t
      if (f$UNSUPPORTED_Y && "sticky" in S && (o = !!t && t.indexOf("y") > -1)) {
        t = t.replace(/y/g, "")
      }
      if (E) {
        e = (i = function (e) {
          for (var t, /* [auto-meaningful-name] */e$length = e.length, r = 0, o = "", i = [], a = {}, s = false, c = false, l = 0, u = ""; r <= e$length; r++) {
            if ("\\" === (t = e.charAt(r))) {
              t += e.charAt(++r)
            } else if ("]" === t) {
              s = false
            } else if (!s) {
              switch (true) {
                case "[" === t:
                  s = true
                  break
                case "(" === t:
                  if (T.test(e.slice(r + 1))) {
                    r += 2
                    c = true
                  }
                  o += t
                  l++
                  continue
                case ">" === t && c:
                  if ("" === u || g(a, u)) {
                    throw new SyntaxError("Invalid capture group name")
                  }
                  a[u] = true
                  i.push([u, l])
                  c = false
                  u = ""
                  continue
              }
            }
            if (c) {
              u += t
            } else {
              o += t
            }
          }
          return [o, i]
        }(e))[0]
        v = i[1]
      }
      c = a(o$RegExp(e, t), f ? this : o$RegExp$prototype, R)
      if (r || o || v.length) {
        l = require_426_$$_1282_426$enforce(c)
        if (r) {
          l.dotAll = true
          l.raw = R(function (e) {
            for (var t, /* [auto-meaningful-name] */e$length = e.length, r = 0, o = "", i = false; r <= e$length; r++) {
              if ("\\" !== (t = e.charAt(r))) {
                if (i || "." !== t) {
                  if ("[" === t) {
                    i = true
                  } else {
                    if ("]" === t) {
                      i = false
                    }
                  }
                  o += t
                } else {
                  o += "[\\s\\S]"
                }
              } else {
                o += t + e.charAt(++r)
              }
            }
            return o
          }(e), n)
        }
        if (o) {
          l.sticky = true
        }
        if (v.length) {
          l.groups = v
        }
      }
      if (e !== b) {
        try {
          s(c, "source", "" === b ? "(?:)" : b)
        } catch (O) {}
      }
      return c
    }, k = function (e) {
      if (!(e in R)) {
        require_300_$$_1648_300_index$f(R, e, {
          configurable: true,
          get: function () {
            return o$RegExp[e]
          },
          set: function (t) {
            o$RegExp[e] = t
          }
        })
      }
    }, x = require_635_$$_1648_635$f(o$RegExp), D = 0; x.length > D;) {
    k(x[D++])
  }
  o$RegExp$prototype.constructor = R
  R.prototype = o$RegExp$prototype
  h(o, "RegExp", R)
}
v("RegExp")
