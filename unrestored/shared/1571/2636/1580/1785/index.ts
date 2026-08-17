/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1785
 */

"use strict"

require(/* 1274 */"../1274/index")
var r
var o = require(/* 86 */"../1650/86/index")
var i = require(/* 271 */"../1648/271")
var a = require(/* 1281 */"../1282/1281")
var s = require(/* 194 */"../1648/194")
var c = require(/* 1241 */"./1241")
var l = require(/* 400 */"../1648/400")
var u = require(/* 639 */"../1282/639")
var d = require(/* 334 */"../1648/334")
var p = require(/* 1262 */"./1262")
var f = require(/* 1246 */"./1246/index")
var /* [auto-meaningful-name] */require_959_$_959$codeAt = require(/* 959 */"./959").codeAt
var m = require(/* 1786 */"./1786")
var g = require(/* 310 */"../1282/310")
var _ = require(/* 534 */"../1282/534")
var v = require(/* 1282 */"../1282/index")
var b = require(/* 426 */"../1282/426")
var /* [auto-meaningful-name] */s$URL = s.URL
var /* [auto-meaningful-name] */v$URLSearchParams = v.URLSearchParams
var /* [auto-meaningful-name] */v$getState = v.getState
var /* [auto-meaningful-name] */b$set = b.set
var C = b.getterFor("URL")
var /* [auto-meaningful-name] */Math$floor = Math.floor
var /* [auto-meaningful-name] */Math$pow = Math.pow
var A = /[A-Za-z]/
var I = /[\d+-.A-Za-z]/
var j = /\d/
var N = /^0x/i
var R = /^[0-7]+$/
var k = /^\d+$/
var x = /^[\dA-Fa-f]+$/
var D = /[\0\t\n\r #%/:<>?@[\\\]^|]/
var M = /[\0\t\n\r #/:<>?@[\\\]^|]/
var L = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g
var P = /[\t\n\r]/g
var B = function (e, t) {
  var n
  var r
  var o
  if ("[" == t.charAt(0)) {
    if ("]" != t.charAt(t.length - 1)) {
      return "Invalid host"
    }
    if (!(n = G(t.slice(1, -1)))) {
      return "Invalid host"
    }
    e.host = n
  } else if (q(e)) {
    t = m(t)
    if (D.test(t)) {
      return "Invalid host"
    }
    if (null === (n = F(t))) {
      return "Invalid host"
    }
    e.host = n
  } else {
    if (M.test(t)) {
      return "Invalid host"
    }
    for (n = "", r = f(t), o = 0; o < r.length; o++) {
      n += Y(r[o], U)
    }
    e.host = n
  }
}
var F = function (e) {
  var /* [auto-meaningful-name] */c$length
  var n
  var r
  var o
  var i
  var a
  var s
  var c = e.split(".")
  if (c.length && "" == c[c.length - 1]) {
    c.pop()
  }
  if ((c$length = c.length) > 4) {
    return e
  }
  for (n = [], r = 0; r < c$length; r++) {
    if ("" == (o = c[r])) {
      return e
    }
    i = 10
    if (o.length > 1 && "0" == o.charAt(0)) {
      i = N.test(o) ? 16 : 8
      o = o.slice(8 == i ? 1 : 2)
    }
    if ("" === o) {
      a = 0
    } else {
      if (!(10 == i ? k : 8 == i ? R : x).test(o)) {
        return e
      }
      a = parseInt(o, i)
    }
    n.push(a)
  }
  for (r = 0; r < c$length; r++) {
    a = n[r]
    if (r == c$length - 1) {
      if (a >= Math$pow(256, 5 - c$length)) {
        return null
      }
    } else if (a > 255) {
      return null
    }
  }
  for (s = n.pop(), r = 0; r < n.length; r++) {
    s += n[r] * Math$pow(256, 3 - r)
  }
  return s
}
var G = function (e) {
  var t
  var n
  var r
  var o
  var i
  var a
  var s
  var c = [0, 0, 0, 0, 0, 0, 0, 0]
  var l = 0
  var u = null
  var d = 0
  var p = function () {
    return e.charAt(d)
  }
  if (":" == p()) {
    if (":" != e.charAt(1)) {
      return
    }
    d += 2
    u = ++l
  }
  for (; p();) {
    if (8 == l) {
      return
    }
    if (":" != p()) {
      for (t = n = 0; n < 4 && x.test(p());) {
        t = 16 * t + parseInt(p(), 16)
        d++
        n++
      }
      if ("." == p()) {
        if (0 == n) {
          return
        }
        d -= n
        if (l > 6) {
          return
        }
        for (r = 0; p();) {
          o = null
          if (r > 0) {
            if (!("." == p() && r < 4)) {
              return
            }
            d++
          }
          if (!j.test(p())) {
            return
          }
          for (; j.test(p());) {
            i = parseInt(p(), 10)
            if (null === o) {
              o = i
            } else {
              if (0 == o) {
                return
              }
              o = 10 * o + i
            }
            if (o > 255) {
              return
            }
            d++
          }
          c[l] = 256 * c[l] + o
          if (!(2 != ++r && 4 != r)) {
            l++
          }
        }
        if (4 != r) {
          return
        }
        break
      }
      if (":" == p()) {
        d++
        if (!p()) {
          return
        }
      } else if (p()) {
        return
      }
      c[l++] = t
    } else {
      if (null !== u) {
        return
      }
      d++
      u = ++l
    }
  }
  if (null !== u) {
    for (a = l - u, l = 7; 0 != l && a > 0;) {
      s = c[l]
      c[l--] = c[u + a - 1]
      c[u + --a] = s
    }
  } else if (8 != l) {
    return
  }
  return c
}
var W = function (e) {
  var t
  var n
  var r
  var o
  if ("number" == typeof e) {
    for (t = [], n = 0; n < 4; n++) {
      t.unshift(e % 256)
      e = Math$floor(e / 256)
    }
    return t.join(".")
  }
  if ("object" == typeof e) {
    for (t = "", r = function (e) {
      for (var t = null, n = 1, r = null, o = 0, i = 0; i < 8; i++) {
        if (0 !== e[i]) {
          if (o > n) {
            t = r
            n = o
          }
          r = null
          o = 0
        } else {
          if (null === r) {
            r = i
          }
          ++o
        }
      }
      if (o > n) {
        t = r
        n = o
      }
      return t
    }(e), n = 0; n < 8; n++) {
      if (!(o && 0 === e[n])) {
        if (o) {
          o = false
        }
        if (r === n) {
          t += n ? ":" : "::"
          o = true
        } else {
          t += e[n].toString(16)
          if (n < 7) {
            t += ":"
          }
        }
      }
    }
    return "[" + t + "]"
  }
  return e
}
var U = {}
var H = p({}, U, {
  " ": 1,
  "\"": 1,
  "<": 1,
  ">": 1,
  "`": 1
})
var V = p({}, H, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1
})
var z = p({}, V, {
  "/": 1,
  ":": 1,
  ";": 1,
  "=": 1,
  "@": 1,
  "[": 1,
  "\\": 1,
  "]": 1,
  "^": 1,
  "|": 1
})
var Y = function (e, t) {
  var n = require_959_$_959$codeAt(e, 0)
  return n > 32 && n < 127 && !d(t, e) ? e : encodeURIComponent(e)
}
var K = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}
var q = function (e) {
  return d(K, e.scheme)
}
var X = function (e) {
  return "" != e.username || "" != e.password
}
var Q = function (e) {
  return !e.host || e.cannotBeABaseURL || "file" == e.scheme
}
var Z = function (e, t) {
  var n
  return 2 == e.length && A.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
}
var J = function (e) {
  var t
  return e.length > 1 && Z(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
}
var $ = function (e) {
  var /* [auto-meaningful-name] */e$path = e.path
  var /* [auto-meaningful-name] */e$path$length = e$path.length
  if (!(!e$path$length || "file" == e.scheme && 1 == e$path$length && Z(e$path[0], true))) {
    e$path.pop()
  }
}
var ee = function (e) {
  return "." === e || "%2e" === e.toLowerCase()
}
var te = {}
var ne = {}
var re = {}
var oe = {}
var ie = {}
var ae = {}
var se = {}
var ce = {}
var le = {}
var ue = {}
var de = {}
var pe = {}
var fe = {}
var he = {}
var me = {}
var ge = {}
var _e = {}
var ve = {}
var be = {}
var ye = {}
var Ee = {}
var Oe = function (e, t, n, o) {
  var i
  var a
  var s
  var c
  var l
  var u = n || te
  var p = 0
  var h = ""
  var m = false
  var g = false
  var _ = false
  for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = false, t = t.replace(L, "")), t = t.replace(P, ""), i = f(t); p <= i.length;) {
    switch (a = i[p], u) {
      case te:
        if (!a || !A.test(a)) {
          if (n) {
            return "Invalid scheme"
          }
          u = re
          continue
        }
        h += a.toLowerCase()
        u = ne
        break
      case ne:
        if (a && (I.test(a) || "+" == a || "-" == a || "." == a)) {
          h += a.toLowerCase()
        } else {
          if (":" != a) {
            if (n) {
              return "Invalid scheme"
            }
            h = ""
            u = re
            p = 0
            continue
          }
          if (n && (q(e) != d(K, h) || "file" == h && (X(e) || null !== e.port) || "file" == e.scheme && !e.host)) {
            return
          }
          e.scheme = h
          if (n) {
            return void (q(e) && K[e.scheme] == e.port && (e.port = null))
          }
          h = ""
          if ("file" == e.scheme) {
            u = he
          } else {
            if (q(e) && o && o.scheme == e.scheme) {
              u = oe
            } else {
              if (q(e)) {
                u = ce
              } else {
                if ("/" == i[p + 1]) {
                  u = ie
                  p++
                } else {
                  e.cannotBeABaseURL = true
                  e.path.push("")
                  u = be
                }
              }
            }
          }
        }
        break
      case re:
        if (!o || o.cannotBeABaseURL && "#" != a) {
          return "Invalid scheme"
        }
        if (o.cannotBeABaseURL && "#" == a) {
          e.scheme = o.scheme
          e.path = o.path.slice()
          e.query = o.query
          e.fragment = ""
          e.cannotBeABaseURL = true
          u = Ee
          break
        }
        u = "file" == o.scheme ? he : ae
        continue
      case oe:
        if ("/" != a || "/" != i[p + 1]) {
          u = ae
          continue
        }
        u = le
        p++
        break
      case ie:
        if ("/" == a) {
          u = ue
          break
        }
        u = ve
        continue
      case ae:
        if (e.scheme = o.scheme, a == r) {
          e.username = o.username
          e.password = o.password
          e.host = o.host
          e.port = o.port
          e.path = o.path.slice()
          e.query = o.query
        } else if ("/" == a || "\\" == a && q(e)) {
          u = se
        } else if ("?" == a) {
          e.username = o.username
          e.password = o.password
          e.host = o.host
          e.port = o.port
          e.path = o.path.slice()
          e.query = ""
          u = ye
        } else {
          if ("#" != a) {
            e.username = o.username
            e.password = o.password
            e.host = o.host
            e.port = o.port
            e.path = o.path.slice()
            e.path.pop()
            u = ve
            continue
          }
          e.username = o.username
          e.password = o.password
          e.host = o.host
          e.port = o.port
          e.path = o.path.slice()
          e.query = o.query
          e.fragment = ""
          u = Ee
        }
        break
      case se:
        if (!q(e) || "/" != a && "\\" != a) {
          if ("/" != a) {
            e.username = o.username
            e.password = o.password
            e.host = o.host
            e.port = o.port
            u = ve
            continue
          }
          u = ue
        } else {
          u = le
        }
        break
      case ce:
        if (u = le, "/" != a || "/" != h.charAt(p + 1)) {
          continue
        }
        p++
        break
      case le:
        if ("/" != a && "\\" != a) {
          u = ue
          continue
        }
        break
      case ue:
        if ("@" == a) {
          if (m) {
            h = "%40" + h
          }
          m = true
          s = f(h)
          for (var v = 0; v < s.length; v++) {
            var b = s[v]
            if (":" != b || _) {
              var y = Y(b, z)
              if (_) {
                e.password += y
              } else {
                e.username += y
              }
            } else {
              _ = true
            }
          }
          h = ""
        } else if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && q(e)) {
          if (m && "" == h) {
            return "Invalid authority"
          }
          p -= f(h).length + 1
          h = ""
          u = de
        } else {
          h += a
        }
        break
      case de:
      case pe:
        if (n && "file" == e.scheme) {
          u = ge
          continue
        }
        if (":" != a || g) {
          if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && q(e)) {
            if (q(e) && "" == h) {
              return "Invalid host"
            }
            if (n && "" == h && (X(e) || null !== e.port)) {
              return
            }
            if (c = B(e, h)) {
              return c
            }
            h = ""
            u = _e
            if (n) {
              return
            }
            continue
          }
          if ("[" == a) {
            g = true
          } else {
            if ("]" == a) {
              g = false
            }
          }
          h += a
        } else {
          if ("" == h) {
            return "Invalid host"
          }
          if (c = B(e, h)) {
            return c
          }
          h = ""
          u = fe
          if (n == pe) {
            return
          }
        }
        break
      case fe:
        if (!j.test(a)) {
          if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && q(e) || n) {
            if ("" != h) {
              var E = parseInt(h, 10)
              if (E > 65535) {
                return "Invalid port"
              }
              e.port = q(e) && E === K[e.scheme] ? null : E
              h = ""
            }
            if (n) {
              return
            }
            u = _e
            continue
          }
          return "Invalid port"
        }
        h += a
        break
      case he:
        if (e.scheme = "file", "/" == a || "\\" == a) {
          u = me
        } else {
          if (!o || "file" != o.scheme) {
            u = ve
            continue
          }
          if (a == r) {
            e.host = o.host
            e.path = o.path.slice()
            e.query = o.query
          } else if ("?" == a) {
            e.host = o.host
            e.path = o.path.slice()
            e.query = ""
            u = ye
          } else {
            if ("#" != a) {
              if (!J(i.slice(p).join(""))) {
                e.host = o.host
                e.path = o.path.slice()
                $(e)
              }
              u = ve
              continue
            }
            e.host = o.host
            e.path = o.path.slice()
            e.query = o.query
            e.fragment = ""
            u = Ee
          }
        }
        break
      case me:
        if ("/" == a || "\\" == a) {
          u = ge
          break
        }
        if (o && "file" == o.scheme && !J(i.slice(p).join(""))) {
          if (Z(o.path[0], true)) {
            e.path.push(o.path[0])
          } else {
            e.host = o.host
          }
        }
        u = ve
        continue
      case ge:
        if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
          if (!n && Z(h)) {
            u = ve
          } else if ("" == h) {
            e.host = ""
            if (n) {
              return
            }
            u = _e
          } else {
            if (c = B(e, h)) {
              return c
            }
            if ("localhost" == e.host) {
              e.host = ""
            }
            if (n) {
              return
            }
            h = ""
            u = _e
          }
          continue
        }
        h += a
        break
      case _e:
        if (q(e)) {
          u = ve
          if ("/" != a && "\\" != a) {
            continue
          }
        } else if (n || "?" != a) {
          if (n || "#" != a) {
            if (a != r && (u = ve, "/" != a)) {
              continue
            }
          } else {
            e.fragment = ""
            u = Ee
          }
        } else {
          e.query = ""
          u = ye
        }
        break
      case ve:
        if (a == r || "/" == a || "\\" == a && q(e) || !n && ("?" == a || "#" == a)) {
          if (".." === (l = (l = h).toLowerCase()) || "%2e." === l || ".%2e" === l || "%2e%2e" === l) {
            $(e)
            if (!("/" == a || "\\" == a && q(e))) {
              e.path.push("")
            }
          } else {
            if (ee(h)) {
              if (!("/" == a || "\\" == a && q(e))) {
                e.path.push("")
              }
            } else {
              if ("file" == e.scheme && !e.path.length && Z(h)) {
                if (e.host) {
                  e.host = ""
                }
                h = h.charAt(0) + ":"
              }
              e.path.push(h)
            }
          }
          h = ""
          if ("file" == e.scheme && (a == r || "?" == a || "#" == a)) {
            for (; e.path.length > 1 && "" === e.path[0];) {
              e.path.shift()
            }
          }
          if ("?" == a) {
            e.query = ""
            u = ye
          } else {
            if ("#" == a) {
              e.fragment = ""
              u = Ee
            }
          }
        } else {
          h += Y(a, V)
        }
        break
      case be:
        if ("?" == a) {
          e.query = ""
          u = ye
        } else {
          if ("#" == a) {
            e.fragment = ""
            u = Ee
          } else {
            if (a != r) {
              e.path[0] += Y(a, U)
            }
          }
        }
        break
      case ye:
        if (n || "#" != a) {
          if (a != r) {
            if ("'" == a && q(e)) {
              e.query += "%27"
            } else {
              e.query += "#" == a ? "%23" : Y(a, U)
            }
          }
        } else {
          e.fragment = ""
          u = Ee
        }
        break
      case Ee:
        if (a != r) {
          e.fragment += Y(a, H)
        }
    }
    p++
  }
}
var we = function (e) {
  var t
  var n
  var r = u(this, we, "URL")
  var o = arguments.length > 1 ? arguments[1] : undefined
  var a = g(e)
  var s = b$set(r, {
    type: "URL"
  })
  if (undefined !== o) {
    if (o instanceof we) {
      t = C(o)
    } else if (n = Oe(t = {}, g(o))) {
      throw TypeError(n)
    }
  }
  if (n = Oe(s, a, null, t)) {
    throw TypeError(n)
  }
  var c = s.searchParams = new v$URLSearchParams()
  var l = v$getState(c)
  l.updateSearchParams(s.query)
  l.updateURL = function () {
    s.query = String(c) || null
  }
  if (!i) {
    r.href = Te.call(r)
    r.origin = Se.call(r)
    r.protocol = Ae.call(r)
    r.username = Ie.call(r)
    r.password = je.call(r)
    r.host = Ne.call(r)
    r.hostname = Re.call(r)
    r.port = ke.call(r)
    r.pathname = xe.call(r)
    r.search = De.call(r)
    r.searchParams = Me.call(r)
    r.hash = Le.call(r)
  }
}
var /* [auto-meaningful-name] */we$prototype = we.prototype
var Te = function () {
  var e = C(this)
  var /* [auto-meaningful-name] */e$scheme = e.scheme
  var /* [auto-meaningful-name] */e$username = e.username
  var /* [auto-meaningful-name] */e$password = e.password
  var /* [auto-meaningful-name] */e$host = e.host
  var /* [auto-meaningful-name] */e$port = e.port
  var /* [auto-meaningful-name] */e$path = e.path
  var /* [auto-meaningful-name] */e$query = e.query
  var /* [auto-meaningful-name] */e$fragment = e.fragment
  var l = e$scheme + ":"
  if (null !== e$host) {
    l += "//"
    if (X(e)) {
      l += e$username + (e$password ? ":" + e$password : "") + "@"
    }
    l += W(e$host)
    if (null !== e$port) {
      l += ":" + e$port
    }
  } else {
    if ("file" == e$scheme) {
      l += "//"
    }
  }
  l += e.cannotBeABaseURL ? e$path[0] : e$path.length ? "/" + e$path.join("/") : ""
  if (null !== e$query) {
    l += "?" + e$query
  }
  if (null !== e$fragment) {
    l += "#" + e$fragment
  }
  return l
}
var Se = function () {
  var e = C(this)
  var /* [auto-meaningful-name] */e$scheme = e.scheme
  var /* [auto-meaningful-name] */e$port = e.port
  if ("blob" == e$scheme) {
    try {
      return new we(e$scheme.path[0]).origin
    } catch (r) {
      return "null"
    }
  }
  return "file" != e$scheme && q(e) ? e$scheme + "://" + W(e.host) + (null !== e$port ? ":" + e$port : "") : "null"
}
var Ae = function () {
  return C(this).scheme + ":"
}
var Ie = function () {
  return C(this).username
}
var je = function () {
  return C(this).password
}
var Ne = function () {
  var e = C(this)
  var /* [auto-meaningful-name] */e$host = e.host
  var /* [auto-meaningful-name] */e$port = e.port
  return null === e$host ? "" : null === e$port ? W(e$host) : W(e$host) + ":" + e$port
}
var Re = function () {
  var /* [auto-meaningful-name] */CThis$host = C(this).host
  return null === CThis$host ? "" : W(CThis$host)
}
var ke = function () {
  var /* [auto-meaningful-name] */CThis$port = C(this).port
  return null === CThis$port ? "" : String(CThis$port)
}
var xe = function () {
  var e = C(this)
  var /* [auto-meaningful-name] */e$path = e.path
  return e.cannotBeABaseURL ? e$path[0] : e$path.length ? "/" + e$path.join("/") : ""
}
var De = function () {
  var /* [auto-meaningful-name] */CThis$query = C(this).query
  return CThis$query ? "?" + CThis$query : ""
}
var Me = function () {
  return C(this).searchParams
}
var Le = function () {
  var /* [auto-meaningful-name] */CThis$fragment = C(this).fragment
  return CThis$fragment ? "#" + CThis$fragment : ""
}
var Pe = function (e, t) {
  return {
    get: e,
    set: t,
    configurable: true,
    enumerable: true
  }
}
if (i) {
  c(we$prototype, {
    href: Pe(Te, function (e) {
      var t = C(this)
      var n = g(e)
      var r = Oe(t, n)
      if (r) {
        throw TypeError(r)
      }
      v$getState(t.searchParams).updateSearchParams(t.query)
    }),
    origin: Pe(Se),
    protocol: Pe(Ae, function (e) {
      var t = C(this)
      Oe(t, g(e) + ":", te)
    }),
    username: Pe(Ie, function (e) {
      var t = C(this)
      var n = f(g(e))
      if (!Q(t)) {
        t.username = ""
        for (var r = 0; r < n.length; r++) {
          t.username += Y(n[r], z)
        }
      }
    }),
    password: Pe(je, function (e) {
      var t = C(this)
      var n = f(g(e))
      if (!Q(t)) {
        t.password = ""
        for (var r = 0; r < n.length; r++) {
          t.password += Y(n[r], z)
        }
      }
    }),
    host: Pe(Ne, function (e) {
      var t = C(this)
      if (!t.cannotBeABaseURL) {
        Oe(t, g(e), de)
      }
    }),
    hostname: Pe(Re, function (e) {
      var t = C(this)
      if (!t.cannotBeABaseURL) {
        Oe(t, g(e), pe)
      }
    }),
    port: Pe(ke, function (e) {
      var t = C(this)
      if (!Q(t)) {
        if ("" == (e = g(e))) {
          t.port = null
        } else {
          Oe(t, e, fe)
        }
      }
    }),
    pathname: Pe(xe, function (e) {
      var t = C(this)
      if (!t.cannotBeABaseURL) {
        t.path = []
        Oe(t, g(e), _e)
      }
    }),
    search: Pe(De, function (e) {
      var t = C(this)
      if ("" == (e = g(e))) {
        t.query = null
      } else {
        if ("?" == e.charAt(0)) {
          e = e.slice(1)
        }
        t.query = ""
        Oe(t, e, ye)
      }
      v$getState(t.searchParams).updateSearchParams(t.query)
    }),
    searchParams: Pe(Me),
    hash: Pe(Le, function (e) {
      var t = C(this)
      if ("" != (e = g(e))) {
        if ("#" == e.charAt(0)) {
          e = e.slice(1)
        }
        t.fragment = ""
        Oe(t, e, Ee)
      } else {
        t.fragment = null
      }
    })
  })
}
l(we$prototype, "toJSON", function () {
  return Te.call(this)
}, {
  enumerable: true
})
l(we$prototype, "toString", function () {
  return Te.call(this)
}, {
  enumerable: true
})
if (s$URL) {
  var /* [auto-meaningful-name] */s$URL$createObjectURL = s$URL.createObjectURL
  var /* [auto-meaningful-name] */s$URL$revokeObjectURL = s$URL.revokeObjectURL
  if (s$URL$createObjectURL) {
    l(we, "createObjectURL", function (e) {
      return s$URL$createObjectURL.apply(s$URL, arguments)
    })
  }
  if (s$URL$revokeObjectURL) {
    l(we, "revokeObjectURL", function (e) {
      return s$URL$revokeObjectURL.apply(s$URL, arguments)
    })
  }
}
_(we, "URL")
o({
  global: true,
  forced: !a,
  sham: !i
}, {
  URL: we
})
