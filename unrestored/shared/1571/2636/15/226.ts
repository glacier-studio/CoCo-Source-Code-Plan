/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：226
 */

var r
!function (i) {
  var o = /^\s+/
  var a = /\s+$/
  var s = 0
  var /* [auto-meaningful-name] */i$round = i.round
  var /* [auto-meaningful-name] */i$min = i.min
  var /* [auto-meaningful-name] */i$max = i.max
  var /* [auto-meaningful-name] */i$random = i.random
  function d(e, t) {
    t = t || {}
    if ((e = e || "") instanceof d) {
      return e
    }
    if (!(this instanceof d)) {
      return new d(e, t)
    }
    var n = function (e) {
      var t = {
        r: 0,
        g: 0,
        b: 0
      }
      var n = 1
      var r = null
      var s = null
      var c = null
      var f = false
      var d = false
      if ("string" == typeof e) {
        e = function (e) {
          e = e.replace(o, "").replace(a, "").toLowerCase()
          var t
          var n = false
          if (B[e]) {
            e = B[e]
            n = true
          } else if ("transparent" == e) {
            return {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
              format: "name"
            }
          }
          if (t = U.rgb.exec(e)) {
            return {
              r: t[1],
              g: t[2],
              b: t[3]
            }
          }
          if (t = U.rgba.exec(e)) {
            return {
              r: t[1],
              g: t[2],
              b: t[3],
              a: t[4]
            }
          }
          if (t = U.hsl.exec(e)) {
            return {
              h: t[1],
              s: t[2],
              l: t[3]
            }
          }
          if (t = U.hsla.exec(e)) {
            return {
              h: t[1],
              s: t[2],
              l: t[3],
              a: t[4]
            }
          }
          if (t = U.hsv.exec(e)) {
            return {
              h: t[1],
              s: t[2],
              v: t[3]
            }
          }
          if (t = U.hsva.exec(e)) {
            return {
              h: t[1],
              s: t[2],
              v: t[3],
              a: t[4]
            }
          }
          if (t = U.hex8.exec(e)) {
            return {
              r: P(t[1]),
              g: P(t[2]),
              b: P(t[3]),
              a: j(t[4]),
              format: n ? "name" : "hex8"
            }
          }
          if (t = U.hex6.exec(e)) {
            return {
              r: P(t[1]),
              g: P(t[2]),
              b: P(t[3]),
              format: n ? "name" : "hex"
            }
          }
          if (t = U.hex4.exec(e)) {
            return {
              r: P(t[1] + "" + t[1]),
              g: P(t[2] + "" + t[2]),
              b: P(t[3] + "" + t[3]),
              a: j(t[4] + "" + t[4]),
              format: n ? "name" : "hex8"
            }
          }
          if (t = U.hex3.exec(e)) {
            return {
              r: P(t[1] + "" + t[1]),
              g: P(t[2] + "" + t[2]),
              b: P(t[3] + "" + t[3]),
              format: n ? "name" : "hex"
            }
          }
          return false
        }(e)
      }
      if ("object" == typeof e) {
        if (H(e.r) && H(e.g) && H(e.b)) {
          h = e.r
          p = e.g
          _ = e.b
          t = {
            r: 255 * R(h, 255),
            g: 255 * R(p, 255),
            b: 255 * R(_, 255)
          }
          f = true
          d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"
        } else {
          if (H(e.h) && H(e.s) && H(e.v)) {
            r = M(e.s)
            s = M(e.v)
            t = function (e, t, n) {
              e = 6 * R(e, 360)
              t = R(t, 100)
              n = R(n, 100)
              var r = i.floor(e)
              var o = e - r
              var a = n * (1 - t)
              var s = n * (1 - o * t)
              var c = n * (1 - (1 - o) * t)
              var u = r % 6
              return {
                r: 255 * [n, s, a, a, c, n][u],
                g: 255 * [c, n, n, s, a, a][u],
                b: 255 * [a, a, c, n, n, s][u]
              }
            }(e.h, r, s)
            f = true
            d = "hsv"
          } else {
            if (H(e.h) && H(e.s) && H(e.l)) {
              r = M(e.s)
              c = M(e.l)
              t = function (e, t, n) {
                var r
                var i
                var o
                function a(e, t, n) {
                  if (n < 0) {
                    n += 1
                  }
                  if (n > 1) {
                    n -= 1
                  }
                  return n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                }
                e = R(e, 360)
                t = R(t, 100)
                n = R(n, 100)
                if (0 === t) {
                  r = i = o = n
                } else {
                  var s = n < .5 ? n * (1 + t) : n + t - n * t
                  var c = 2 * n - s
                  r = a(c, s, e + 1 / 3)
                  i = a(c, s, e)
                  o = a(c, s, e - 1 / 3)
                }
                return {
                  r: 255 * r,
                  g: 255 * i,
                  b: 255 * o
                }
              }(e.h, r, c)
              f = true
              d = "hsl"
            }
          }
        }
        if (e.hasOwnProperty("a")) {
          n = e.a
        }
      }
      var h
      var p
      var _
      n = I(n)
      return {
        ok: f,
        format: e.format || d,
        r: i$min(255, i$max(t.r, 0)),
        g: i$min(255, i$max(t.g, 0)),
        b: i$min(255, i$max(t.b, 0)),
        a: n
      }
    }(e)
    this._originalInput = e
    this._r = n.r
    this._g = n.g
    this._b = n.b
    this._a = n.a
    this._roundA = i$round(100 * this._a) / 100
    this._format = t.format || n.format
    this._gradientType = t.gradientType
    if (this._r < 1) {
      this._r = i$round(this._r)
    }
    if (this._g < 1) {
      this._g = i$round(this._g)
    }
    if (this._b < 1) {
      this._b = i$round(this._b)
    }
    this._ok = n.ok
    this._tc_id = s++
  }
  function h(e, t, n) {
    e = R(e, 255)
    t = R(t, 255)
    n = R(n, 255)
    var r
    var i
    var o = i$max(e, t, n)
    var a = i$min(e, t, n)
    var s = (o + a) / 2
    if (o == a) {
      r = i = 0
    } else {
      var c = o - a
      switch (i = s > .5 ? c / (2 - o - a) : c / (o + a), o) {
        case e:
          r = (t - n) / c + (t < n ? 6 : 0)
          break
        case t:
          r = (n - e) / c + 2
          break
        case n:
          r = (e - t) / c + 4
      }
      r /= 6
    }
    return {
      h: r,
      s: i,
      l: s
    }
  }
  function p(e, t, n) {
    e = R(e, 255)
    t = R(t, 255)
    n = R(n, 255)
    var r
    var i
    var o = i$max(e, t, n)
    var a = i$min(e, t, n)
    var s = o
    var c = o - a
    i = 0 === o ? 0 : c / o
    if (o == a) {
      r = 0
    } else {
      switch (o) {
        case e:
          r = (t - n) / c + (t < n ? 6 : 0)
          break
        case t:
          r = (n - e) / c + 2
          break
        case n:
          r = (e - t) / c + 4
      }
      r /= 6
    }
    return {
      h: r,
      s: i,
      v: s
    }
  }
  function _(e, t, n, r) {
    var i = [N(i$round(e).toString(16)), N(i$round(t).toString(16)), N(i$round(n).toString(16))]
    return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
  }
  function A(e, t, n, r) {
    return [N(L(r)), N(i$round(e).toString(16)), N(i$round(t).toString(16)), N(i$round(n).toString(16))].join("")
  }
  function g(e, t) {
    t = 0 === t ? 0 : t || 10
    var n = d(e).toHsl()
    n.s -= t / 100
    n.s = F(n.s)
    return d(n)
  }
  function v(e, t) {
    t = 0 === t ? 0 : t || 10
    var n = d(e).toHsl()
    n.s += t / 100
    n.s = F(n.s)
    return d(n)
  }
  function m(e) {
    return d(e).desaturate(100)
  }
  function y(e, t) {
    t = 0 === t ? 0 : t || 10
    var n = d(e).toHsl()
    n.l += t / 100
    n.l = F(n.l)
    return d(n)
  }
  function b(e, t) {
    t = 0 === t ? 0 : t || 10
    var n = d(e).toRgb()
    n.r = i$max(0, i$min(255, n.r - i$round(-t / 100 * 255)))
    n.g = i$max(0, i$min(255, n.g - i$round(-t / 100 * 255)))
    n.b = i$max(0, i$min(255, n.b - i$round(-t / 100 * 255)))
    return d(n)
  }
  function w(e, t) {
    t = 0 === t ? 0 : t || 10
    var n = d(e).toHsl()
    n.l -= t / 100
    n.l = F(n.l)
    return d(n)
  }
  function E(e, t) {
    var n = d(e).toHsl()
    var r = (n.h + t) % 360
    n.h = r < 0 ? 360 + r : r
    return d(n)
  }
  function x(e) {
    var t = d(e).toHsl()
    t.h = (t.h + 180) % 360
    return d(t)
  }
  function C(e) {
    var t = d(e).toHsl()
    var n = t.h
    return [
      d(e), d({
        h: (n + 120) % 360,
        s: t.s,
        l: t.l
      }), d({
        h: (n + 240) % 360,
        s: t.s,
        l: t.l
      })
    ]
  }
  function O(e) {
    var t = d(e).toHsl()
    var n = t.h
    return [
      d(e), d({
        h: (n + 90) % 360,
        s: t.s,
        l: t.l
      }), d({
        h: (n + 180) % 360,
        s: t.s,
        l: t.l
      }), d({
        h: (n + 270) % 360,
        s: t.s,
        l: t.l
      })
    ]
  }
  function k(e) {
    var t = d(e).toHsl()
    var n = t.h
    return [
      d(e), d({
        h: (n + 72) % 360,
        s: t.s,
        l: t.l
      }), d({
        h: (n + 216) % 360,
        s: t.s,
        l: t.l
      })
    ]
  }
  function S(e, t, n) {
    t = t || 6
    n = n || 30
    var r = d(e).toHsl()
    var i = 360 / n
    var o = [d(e)]
    for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) {
      r.h = (r.h + i) % 360
      o.push(d(r))
    }
    return o
  }
  function T(e, t) {
    t = t || 6
    for (var n = d(e).toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / t; t--;) {
      a.push(d({
        h: r,
        s: i,
        v: o
      }))
      o = (o + s) % 1
    }
    return a
  }
  d.prototype = {
    isDark: function () {
      return this.getBrightness() < 128
    },
    isLight: function () {
      return !this.isDark()
    },
    isValid: function () {
      return this._ok
    },
    getOriginalInput: function () {
      return this._originalInput
    },
    getFormat: function () {
      return this._format
    },
    getAlpha: function () {
      return this._a
    },
    getBrightness: function () {
      var e = this.toRgb()
      return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
    },
    getLuminance: function () {
      var e
      var t
      var n
      var r = this.toRgb()
      e = r.r / 255
      t = r.g / 255
      n = r.b / 255
      return .2126 * (e <= .03928 ? e / 12.92 : i.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : i.pow((t + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : i.pow((n + .055) / 1.055, 2.4))
    },
    setAlpha: function (e) {
      this._a = I(e)
      this._roundA = i$round(100 * this._a) / 100
      return this
    },
    toHsv: function () {
      var e = p(this._r, this._g, this._b)
      return {
        h: 360 * e.h,
        s: e.s,
        v: e.v,
        a: this._a
      }
    },
    toHsvString: function () {
      var e = p(this._r, this._g, this._b)
      var t = i$round(360 * e.h)
      var n = i$round(100 * e.s)
      var r = i$round(100 * e.v)
      return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
    },
    toHsl: function () {
      var e = h(this._r, this._g, this._b)
      return {
        h: 360 * e.h,
        s: e.s,
        l: e.l,
        a: this._a
      }
    },
    toHslString: function () {
      var e = h(this._r, this._g, this._b)
      var t = i$round(360 * e.h)
      var n = i$round(100 * e.s)
      var r = i$round(100 * e.l)
      return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
    },
    toHex: function (e) {
      return _(this._r, this._g, this._b, e)
    },
    toHexString: function (e) {
      return "#" + this.toHex(e)
    },
    toHex8: function (e) {
      return function (e, t, n, r, i) {
        var o = [N(i$round(e).toString(16)), N(i$round(t).toString(16)), N(i$round(n).toString(16)), N(L(r))]
        if (i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1)) {
          return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
        }
        return o.join("")
      }(this._r, this._g, this._b, this._a, e)
    },
    toHex8String: function (e) {
      return "#" + this.toHex8(e)
    },
    toRgb: function () {
      return {
        r: i$round(this._r),
        g: i$round(this._g),
        b: i$round(this._b),
        a: this._a
      }
    },
    toRgbString: function () {
      return 1 == this._a ? "rgb(" + i$round(this._r) + ", " + i$round(this._g) + ", " + i$round(this._b) + ")" : "rgba(" + i$round(this._r) + ", " + i$round(this._g) + ", " + i$round(this._b) + ", " + this._roundA + ")"
    },
    toPercentageRgb: function () {
      return {
        r: i$round(100 * R(this._r, 255)) + "%",
        g: i$round(100 * R(this._g, 255)) + "%",
        b: i$round(100 * R(this._b, 255)) + "%",
        a: this._a
      }
    },
    toPercentageRgbString: function () {
      return 1 == this._a ? "rgb(" + i$round(100 * R(this._r, 255)) + "%, " + i$round(100 * R(this._g, 255)) + "%, " + i$round(100 * R(this._b, 255)) + "%)" : "rgba(" + i$round(100 * R(this._r, 255)) + "%, " + i$round(100 * R(this._g, 255)) + "%, " + i$round(100 * R(this._b, 255)) + "%, " + this._roundA + ")"
    },
    toName: function () {
      return 0 === this._a ? "transparent" : !(this._a < 1) && (D[_(this._r, this._g, this._b, true)] || false)
    },
    toFilter: function (e) {
      var t = "#" + A(this._r, this._g, this._b, this._a)
      var n = t
      var r = this._gradientType ? "GradientType = 1, " : ""
      if (e) {
        var i = d(e)
        n = "#" + A(i._r, i._g, i._b, i._a)
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + n + ")"
    },
    toString: function (e) {
      var t = !!e
      e = e || this._format
      var n = false
      var r = this._a < 1 && this._a >= 0
      return t || !r || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(true)), "hex4" === e && (n = this.toHex8String(true)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
    },
    clone: function () {
      return d(this.toString())
    },
    _applyModification: function (e, t) {
      var n = e.apply(null, [this].concat([].slice.call(t)))
      this._r = n._r
      this._g = n._g
      this._b = n._b
      this.setAlpha(n._a)
      return this
    },
    lighten: function () {
      return this._applyModification(y, arguments)
    },
    brighten: function () {
      return this._applyModification(b, arguments)
    },
    darken: function () {
      return this._applyModification(w, arguments)
    },
    desaturate: function () {
      return this._applyModification(g, arguments)
    },
    saturate: function () {
      return this._applyModification(v, arguments)
    },
    greyscale: function () {
      return this._applyModification(m, arguments)
    },
    spin: function () {
      return this._applyModification(E, arguments)
    },
    _applyCombination: function (e, t) {
      return e.apply(null, [this].concat([].slice.call(t)))
    },
    analogous: function () {
      return this._applyCombination(S, arguments)
    },
    complement: function () {
      return this._applyCombination(x, arguments)
    },
    monochromatic: function () {
      return this._applyCombination(T, arguments)
    },
    splitcomplement: function () {
      return this._applyCombination(k, arguments)
    },
    triad: function () {
      return this._applyCombination(C, arguments)
    },
    tetrad: function () {
      return this._applyCombination(O, arguments)
    }
  }
  d.fromRatio = function (e, t) {
    if ("object" == typeof e) {
      var n = {}
      for (var r in e) if (e.hasOwnProperty(r)) {
        n[r] = "a" === r ? e[r] : M(e[r])
      }
      e = n
    }
    return d(e, t)
  }
  d.equals = function (e, t) {
    return !(!e || !t) && d(e).toRgbString() == d(t).toRgbString()
  }
  d.random = function () {
    return d.fromRatio({
      r: i$random(),
      g: i$random(),
      b: i$random()
    })
  }
  d.mix = function (e, t, n) {
    n = 0 === n ? 0 : n || 50
    var r = d(e).toRgb()
    var i = d(t).toRgb()
    var o = n / 100
    return d({
      r: (i.r - r.r) * o + r.r,
      g: (i.g - r.g) * o + r.g,
      b: (i.b - r.b) * o + r.b,
      a: (i.a - r.a) * o + r.a
    })
  }
  d.readability = function (e, t) {
    var n = d(e)
    var r = d(t)
    return (i.max(n.getLuminance(), r.getLuminance()) + .05) / (i.min(n.getLuminance(), r.getLuminance()) + .05)
  }
  d.isReadable = function (e, t, n) {
    var r
    var i
    var o = d.readability(e, t)
    switch (i = false, (r = function (e) {
      var t
      var n
      t = ((e = e || {
        level: "AA",
        size: "small"
      }).level || "AA").toUpperCase()
      n = (e.size || "small").toLowerCase()
      if ("AA" !== t && "AAA" !== t) {
        t = "AA"
      }
      if ("small" !== n && "large" !== n) {
        n = "small"
      }
      return {
        level: t,
        size: n
      }
    }(n)).level + r.size) {
      case "AAsmall":
      case "AAAlarge":
        i = o >= 4.5
        break
      case "AAlarge":
        i = o >= 3
        break
      case "AAAsmall":
        i = o >= 7
    }
    return i
  }
  d.mostReadable = function (e, t, n) {
    var r
    var /* [auto-meaningful-name] */NN$includeFallbackColors
    var /* [auto-meaningful-name] */n$level
    var /* [auto-meaningful-name] */n$size
    var s = null
    var c = 0
    NN$includeFallbackColors = (n = n || {}).includeFallbackColors
    n$level = n.level
    n$size = n.size
    for (var u = 0; u < t.length; u++) {
      if ((r = d.readability(e, t[u])) > c) {
        c = r
        s = d(t[u])
      }
    }
    return d.isReadable(e, s, {
      level: n$level,
      size: n$size
    }) || !NN$includeFallbackColors ? s : (n.includeFallbackColors = false, d.mostReadable(e, ["#fff", "#000"], n))
  }
  var B = d.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  }
  var D = d.hexNames = function (e) {
    var t = {}
    for (var n in e) if (e.hasOwnProperty(n)) {
      t[e[n]] = n
    }
    return t
  }(B)
  function I(e) {
    e = parseFloat(e)
    if (isNaN(e) || e < 0 || e > 1) {
      e = 1
    }
    return e
  }
  function R(e, t) {
    if (function (e) {
      return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
    }(e)) {
      e = "100%"
    }
    var n = function (e) {
      return "string" === typeof e && -1 != e.indexOf("%")
    }(e)
    e = i$min(t, i$max(0, parseFloat(e)))
    if (n) {
      e = parseInt(e * t, 10) / 100
    }
    return i.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
  }
  function F(e) {
    return i$min(1, i$max(0, e))
  }
  function P(e) {
    return parseInt(e, 16)
  }
  function N(e) {
    return 1 == e.length ? "0" + e : "" + e
  }
  function M(e) {
    if (e <= 1) {
      e = 100 * e + "%"
    }
    return e
  }
  function L(e) {
    return i.round(255 * parseFloat(e)).toString(16)
  }
  function j(e) {
    return P(e) / 255
  }
  var U = function () {
    var /* [auto-meaningful-name] */____d__$__d____d = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)"
    var t = "[\\s|\\(]+(" + ____d__$__d____d + ")[,|\\s]+(" + ____d__$__d____d + ")[,|\\s]+(" + ____d__$__d____d + ")\\s*\\)?"
    var n = "[\\s|\\(]+(" + ____d__$__d____d + ")[,|\\s]+(" + ____d__$__d____d + ")[,|\\s]+(" + ____d__$__d____d + ")[,|\\s]+(" + ____d__$__d____d + ")\\s*\\)?"
    return {
      CSS_UNIT: new RegExp(____d__$__d____d),
      rgb: new RegExp("rgb" + t),
      rgba: new RegExp("rgba" + n),
      hsl: new RegExp("hsl" + t),
      hsla: new RegExp("hsla" + n),
      hsv: new RegExp("hsv" + t),
      hsva: new RegExp("hsva" + n),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    }
  }()
  function H(e) {
    return !!U.CSS_UNIT.exec(e)
  }
  if (module.exports) {
    module.exports = d
  } else {
    if (!(undefined === (r = function () {
      return d
    }.call(exports, require, exports, module)))) {
      module.exports = r
    }
  }
}(Math)
