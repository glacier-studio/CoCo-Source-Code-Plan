/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3329
 */

"use strict"

export { C as CustomEase }
export default C
var r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
var s = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
var a = Math.PI / 180
Math.PI
var /* [auto-meaningful-name] */Math$sin = Math.sin
var /* [auto-meaningful-name] */Math$cos = Math.cos
var /* [auto-meaningful-name] */Math$abs = Math.abs
var /* [auto-meaningful-name] */Math$sqrt = Math.sqrt
Math.atan2
var c = function (t) {
  return "number" === typeof t
}
var f = function (t) {
  return Math.round(1e5 * t) / 1e5 || 0
}
function l(t, e, n, r, s, c, f, l, g) {
  if (t !== l || e !== g) {
    n = Math$abs(n)
    r = Math$abs(r)
    var p = s % 360 * a
    var x = Math$cos(p)
    var d = Math$sin(p)
    var /* [auto-meaningful-name] */Math$PI = Math.PI
    var M = 2 * Math$PI
    var v = (t - l) / 2
    var m = (e - g) / 2
    var b = x * v + d * m
    var w = -d * v + x * m
    var C = b * b
    var E = w * w
    var N = C / (n * n) + E / (r * r)
    if (N > 1) {
      n = Math$sqrt(N) * n
      r = Math$sqrt(N) * r
    }
    var P = n * n
    var A = r * r
    var S = (P * A - P * E - A * C) / (P * E + A * C)
    if (S < 0) {
      S = 0
    }
    var D = (c === f ? -1 : 1) * Math$sqrt(S)
    var L = D * (n * w / r)
    var V = D * (-r * b / n)
    var I = (t + l) / 2 + (x * L - d * V)
    var q = (e + g) / 2 + (d * L + x * V)
    var G = (b - L) / n
    var O = (w - V) / r
    var R = (-b - L) / n
    var k = (-w - V) / r
    var z = G * G + O * O
    var H = (O < 0 ? -1 : 1) * Math.acos(G / Math$sqrt(z))
    var J = (G * k - O * R < 0 ? -1 : 1) * Math.acos((G * R + O * k) / Math$sqrt(z * (R * R + k * k)))
    if (isNaN(J)) {
      J = Math$PI
    }
    if (!f && J > 0) {
      J -= M
    } else {
      if (f && J < 0) {
        J += M
      }
    }
    H %= M
    J %= M
    var Q
    var T = Math.ceil(Math$abs(J) / (M / 4))
    var Z = []
    var _ = J / T
    var j = 4 / 3 * Math$sin(_ / 2) / (1 + Math$cos(_ / 2))
    var U = x * n
    var Y = d * n
    var B = d * -r
    var F = x * r
    for (Q = 0; Q < T; Q++) {
      b = Math$cos(s = H + Q * _)
      w = Math$sin(s)
      G = Math$cos(s += _)
      O = Math$sin(s)
      Z.push(b - j * w, w + j * b, G + j * O, O - j * G, G, O)
    }
    for (Q = 0; Q < Z.length; Q += 2) {
      b = Z[Q]
      w = Z[Q + 1]
      Z[Q] = b * U + w * B + I
      Z[Q + 1] = b * Y + w * F + q
    }
    Z[Q - 2] = l
    Z[Q - 1] = g
    return Z
  }
}
function g(t) {
  var e
  var n
  var a
  var i
  var h
  var u
  var c
  var f
  var g
  var p
  var x
  var d
  var y
  var M
  var v
  var m = (t + "").replace(s, function (t) {
    var e = +t
    return e < 1e-4 && e > -1e-4 ? 0 : e
  }).match(r) || []
  var b = []
  var w = 0
  var C = 0
  var /* [auto-meaningful-name] */m$length = m.length
  var N = 0
  var P = "ERROR: malformed path: " + t
  var A = function (t, e, n, r) {
    p = (n - t) / 3
    x = (r - e) / 3
    c.push(t + p, e + x, n - p, r - x, n, r)
  }
  if (!t || !isNaN(m[0]) || isNaN(m[1])) {
    console.log(P)
    return b
  }
  for (e = 0; e < m$length; e++) {
    y = h
    if (isNaN(m[e])) {
      u = (h = m[e].toUpperCase()) !== m[e]
    } else {
      e--
    }
    a = +m[e + 1]
    i = +m[e + 2]
    if (u) {
      a += w
      i += C
    }
    if (!e) {
      f = a
      g = i
    }
    if ("M" === h) {
      if (c) {
        if (c.length < 8) {
          b.length -= 1
        } else {
          N += c.length
        }
      }
      w = f = a
      C = g = i
      c = [a, i]
      b.push(c)
      e += 2
      h = "L"
    } else if ("C" === h) {
      if (!c) {
        c = [0, 0]
      }
      if (!u) {
        w = C = 0
      }
      c.push(a, i, w + 1 * m[e + 3], C + 1 * m[e + 4], w += 1 * m[e + 5], C += 1 * m[e + 6])
      e += 6
    } else if ("S" === h) {
      p = w
      x = C
      if (!("C" !== y && "S" !== y)) {
        p += w - c[c.length - 4]
        x += C - c[c.length - 3]
      }
      if (!u) {
        w = C = 0
      }
      c.push(p, x, a, i, w += 1 * m[e + 3], C += 1 * m[e + 4])
      e += 4
    } else if ("Q" === h) {
      p = w + 2 / 3 * (a - w)
      x = C + 2 / 3 * (i - C)
      if (!u) {
        w = C = 0
      }
      w += 1 * m[e + 3]
      C += 1 * m[e + 4]
      c.push(p, x, w + 2 / 3 * (a - w), C + 2 / 3 * (i - C), w, C)
      e += 4
    } else if ("T" === h) {
      p = w - c[c.length - 4]
      x = C - c[c.length - 3]
      c.push(w + p, C + x, a + 2 / 3 * (w + 1.5 * p - a), i + 2 / 3 * (C + 1.5 * x - i), w = a, C = i)
      e += 2
    } else if ("H" === h) {
      A(w, C, w = a, C)
      e += 1
    } else if ("V" === h) {
      A(w, C, w, C = a + (u ? C - w : 0))
      e += 1
    } else if ("L" === h || "Z" === h) {
      if ("Z" === h) {
        a = f
        i = g
        c.closed = true
      }
      if ("L" === h || Math$abs(w - a) > .5 || Math$abs(C - i) > .5) {
        A(w, C, a, i)
        if ("L" === h) {
          e += 2
        }
      }
      w = a
      C = i
    } else if ("A" === h) {
      M = m[e + 4]
      v = m[e + 5]
      p = m[e + 6]
      x = m[e + 7]
      n = 7
      if (M.length > 1) {
        if (M.length < 3) {
          x = p
          p = v
          n--
        } else {
          x = v
          p = M.substr(2)
          n -= 2
        }
        v = M.charAt(1)
        M = M.charAt(0)
      }
      d = l(w, C, +m[e + 1], +m[e + 2], +m[e + 3], +M, +v, (u ? w : 0) + 1 * p, (u ? C : 0) + 1 * x)
      e += n
      if (d) {
        for (n = 0; n < d.length; n++) {
          c.push(d[n])
        }
      }
      w = c[c.length - 2]
      C = c[c.length - 1]
    } else {
      console.log(P)
    }
  }
  if ((e = c.length) < 6) {
    b.pop()
    e = 0
  } else {
    if (c[0] === c[e - 2] && c[1] === c[e - 1]) {
      c.closed = true
    }
  }
  b.totalPoints = N + e
  return b
}
function p(t) {
  if (c(t[0])) {
    t = [t]
  }
  var /* [auto-meaningful-name] */s$length
  var n
  var r
  var s
  var a = ""
  var /* [auto-meaningful-name] */t$length = t.length
  for (n = 0; n < t$length; n++) {
    for (s = t[n], a += "M" + f(s[0]) + "," + f(s[1]) + " C", s$length = s.length, r = 2; r < s$length; r++) {
      a += f(s[r++]) + "," + f(s[r++]) + " " + f(s[r++]) + "," + f(s[r++]) + " " + f(s[r++]) + "," + f(s[r]) + " "
    }
    if (s.closed) {
      a += "z"
    }
  }
  return a
}
var x
var d
var y = function () {
  return x || "undefined" !== typeof window && (x = window.gsap) && x.registerPlugin && x
}
var M = function () {
  if (x = y()) {
    x.registerEase("_CE", C.create)
    d = 1
  } else {
    console.warn("Please gsap.registerPlugin(CustomEase)")
  }
}
var v = function (t) {
  return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
}
var m = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi
var b = /[cLlsSaAhHvVtTqQ]/g
var w = function t(e, n, r, s, a, i, h, o, u, c, f) {
  var /* [auto-meaningful-name] */c$length
  var g = (e + r) / 2
  var p = (n + s) / 2
  var x = (r + a) / 2
  var d = (s + i) / 2
  var y = (a + h) / 2
  var M = (i + o) / 2
  var v = (g + x) / 2
  var m = (p + d) / 2
  var b = (x + y) / 2
  var w = (d + M) / 2
  var C = (v + b) / 2
  var E = (m + w) / 2
  var N = h - e
  var P = o - n
  var A = Math.abs((r - h) * P - (s - o) * N)
  var S = Math.abs((a - h) * P - (i - o) * N)
  if (!c) {
    c = [
      {
        x: e,
        y: n
      }, {
        x: h,
        y: o
      }
    ]
    f = 1
  }
  c.splice(f || c.length - 1, 0, {
    x: C,
    y: E
  })
  if ((A + S) * (A + S) > u * (N * N + P * P)) {
    c$length = c.length
    t(e, n, g, p, v, m, C, E, u, c, f)
    t(C, E, b, w, y, M, h, o, u, c, f + 1 + (c.length - c$length))
  }
  return c
}
var C = function () {
  function t(t, e, n) {
    if (!d) {
      M()
    }
    this.id = t
    this.setData(e, n)
  }
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.setData = function (t, e) {
    e = e || {}
    var n
    var r
    var s
    var a
    var i
    var h
    var o
    var u
    var c
    var f = (t = t || "0,0,1,1").match(m)
    var l = 1
    var p = []
    var d = []
    var y = e.precision || 1
    var M = y <= 1
    this.data = t
    if (b.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) {
      f = g(t)[0]
    }
    if (4 === (n = f.length)) {
      f.unshift(0, 0)
      f.push(1, 1)
      n = 8
    } else if ((n - 2) % 6) {
      throw "Invalid CustomEase"
    }
    for (0 === +f[0] && 1 === +f[n - 2] || function (t, e, n) {
      if (!(n || 0 === n)) {
        n = Math.max(+t[t.length - 1], +t[1])
      }
      var r
      var s = -1 * +t[0]
      var a = -n
      var /* [auto-meaningful-name] */t$length = t.length
      var h = 1 / (+t[t$length - 2] + s)
      var o = -e || (Math.abs(+t[t$length - 1] - +t[1]) < .01 * (+t[t$length - 2] - +t[0]) ? function (t) {
        var e
        var /* [auto-meaningful-name] */t$length1 = t.length
        var r = 1e20
        for (e = 1; e < t$length1; e += 6) {
          if (+t[e] < r) {
            r = +t[e]
          }
        }
        return r
      }(t) + a : +t[t$length - 1] + a)
      for (o = o ? 1 / o : -h, r = 0; r < t$length; r += 2) {
        t[r] = (+t[r] + s) * h
        t[r + 1] = (+t[r + 1] + a) * o
      }
    }(f, e.height, e.originY), this.segment = f, a = 2; a < n; a += 6) {
      r = {
        x: +f[a - 2],
        y: +f[a - 1]
      }
      s = {
        x: +f[a + 4],
        y: +f[a + 5]
      }
      p.push(r, s)
      w(r.x, r.y, +f[a], +f[a + 1], +f[a + 2], +f[a + 3], s.x, s.y, 1 / (2e5 * y), p, p.length - 1)
    }
    for (n = p.length, a = 0; a < n; a++) {
      o = p[a]
      u = p[a - 1] || o
      if (o.x > u.x || u.y !== o.y && u.x === o.x || o === u) {
        u.cx = o.x - u.x
        u.cy = o.y - u.y
        u.n = o
        u.nx = o.x
        if (M && a > 1 && Math.abs(u.cy / u.cx - p[a - 2].cy / p[a - 2].cx) > 2) {
          M = 0
        }
        if (u.cx < l) {
          if (u.cx) {
            l = u.cx
          } else {
            u.cx = .001
            if (a === n - 1) {
              u.x -= .001
              l = Math.min(l, .001)
              M = 0
            }
          }
        }
      } else {
        p.splice(a--, 1)
        n--
      }
    }
    i = 1 / (n = 1 / l + 1 | 0)
    h = 0
    o = p[0]
    if (M) {
      for (a = 0; a < n; a++) {
        c = a * i
        if (o.nx < c) {
          o = p[++h]
        }
        r = o.y + (c - o.x) / o.cx * o.cy
        d[a] = {
          x: c,
          cx: i,
          y: r,
          cy: 0,
          nx: 9
        }
        if (a) {
          d[a - 1].cy = r - d[a - 1].y
        }
      }
      d[n - 1].cy = p[p.length - 1].y - r
    } else {
      for (a = 0; a < n; a++) {
        if (o.nx < a * i) {
          o = p[++h]
        }
        d[a] = o
      }
      if (h < p.length - 1) {
        d[a - 1] = p[p.length - 2]
      }
    }
    this.ease = function (t) {
      var e = d[t * n | 0] || d[n - 1]
      if (e.nx < t) {
        e = e.n
      }
      return e.y + (t - e.x) / e.cx * e.cy
    }
    this.ease.custom = this
    if (this.id) {
      x.registerEase(this.id, this.ease)
    }
    return this
  }
  t$prototype.getSVGData = function (e) {
    return t.getSVGData(this, e)
  }
  t.create = function (e, n, r) {
    return new t(e, n, r).ease
  }
  t.register = function (t) {
    x = t
    M()
  }
  t.get = function (t) {
    return x.parseEase(t)
  }
  t.getSVGData = function (e, n) {
    var r
    var s
    var a
    var i
    var h
    var o
    var u
    var c
    var f
    var l
    var g = (n = n || {}).width || 100
    var d = n.height || 100
    var y = n.x || 0
    var M = (n.y || 0) + d
    var m = x.utils.toArray(n.path)[0]
    if (n.invert) {
      d = -d
      M = 0
    }
    if ("string" === typeof e) {
      e = x.parseEase(e)
    }
    if (e.custom) {
      e = e.custom
    }
    if (e instanceof t) {
      r = p(function (t, e, n, r, s, a, i) {
        for (var h, /* [auto-meaningful-name] */HTT$length$length, u, c, f, /* [auto-meaningful-name] */t$length = t.length; --t$length > -1;) {
          for (HTT$length$length = (h = t[t$length]).length, u = 0; u < HTT$length$length; u += 2) {
            c = h[u]
            f = h[u + 1]
            h[u] = c * e + f * r + a
            h[u + 1] = c * n + f * s + i
          }
        }
        t._dirty = 1
        return t
      }([e.segment], g, 0, 0, -d, y, M))
    } else {
      for (r = [y, M], i = 1 / (u = Math.max(5, 200 * (n.precision || 1))), c = 5 / (u += 2), f = v(y + i * g), s = ((l = v(M + e(i) * -d)) - M) / (f - y), a = 2; a < u; a++) {
        h = v(y + a * i * g)
        o = v(M + e(a * i) * -d)
        if (Math.abs((o - l) / (h - f) - s) > c || a === u - 1) {
          r.push(f, l)
          s = (o - l) / (h - f)
        }
        f = h
        l = o
      }
      r = "M" + r.join(",")
    }
    if (m) {
      m.setAttribute("d", r)
    }
    return r
  }
  return t
}()
if (y()) {
  x.registerPlugin(C)
}
C.version = "3.3.4"
