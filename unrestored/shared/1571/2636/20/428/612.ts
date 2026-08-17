/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：612
 */

var r
!function (i) {
  "use strict"

  var o
  var a = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
  }
  var s = true
  var /* [auto-meaningful-name] */DecimalError = "[DecimalError] "
  var u = DecimalError + "Invalid argument: "
  var l = DecimalError + "Exponent out of range: "
  var /* [auto-meaningful-name] */Math$floor = Math.floor
  var /* [auto-meaningful-name] */Math$pow = Math.pow
  var h = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i
  var p = 1e7
  var _ = Math$floor(1286742750677284.5)
  var A = {}
  function g(e, t) {
    var n
    var r
    var i
    var o
    var a
    var c
    var u
    var l
    var /* [auto-meaningful-name] */e$constructor = e.constructor
    var /* [auto-meaningful-name] */e$constructor$precision = e$constructor.precision
    if (!e.s || !t.s) {
      if (!t.s) {
        t = new e$constructor(e)
      }
      return s ? k(t, e$constructor$precision) : t
    }
    u = e.d
    l = t.d
    a = e.e
    i = t.e
    u = u.slice()
    if (o = a - i) {
      for (o < 0 ? (r = u, o = -o, c = l.length) : (r = l, i = a, c = u.length), o > (c = (a = Math.ceil(e$constructor$precision / 7)) > c ? a + 1 : c + 1) && (o = c, r.length = 1), r.reverse(); o--;) {
        r.push(0)
      }
      r.reverse()
    }
    for ((c = u.length) - (o = l.length) < 0 && (o = c, r = l, l = u, u = r), n = 0; o;) {
      n = (u[--o] = u[o] + l[o] + n) / p | 0
      u[o] %= p
    }
    for (n && (u.unshift(n), ++i), c = u.length; 0 == u[--c];) {
      u.pop()
    }
    t.d = u
    t.e = i
    return s ? k(t, e$constructor$precision) : t
  }
  function v(e, t, n) {
    if (e !== ~~e || e < t || e > n) {
      throw Error(u + e)
    }
  }
  function m(e) {
    var t
    var n
    var r
    var i = e.length - 1
    var o = ""
    var a = e[0]
    if (i > 0) {
      for (o += a, t = 1; t < i; t++) {
        if (n = 7 - (r = e[t] + "").length) {
          o += x(n)
        }
        o += r
      }
      if (n = 7 - (r = (a = e[t]) + "").length) {
        o += x(n)
      }
    } else if (0 === a) {
      return "0"
    }
    for (; a % 10 === 0;) {
      a /= 10
    }
    return o + a
  }
  A.absoluteValue = A.abs = function () {
    var e = new this.constructor(this)
    if (e.s) {
      e.s = 1
    }
    return e
  }
  A.comparedTo = A.cmp = function (e) {
    var t
    var n
    var /* [auto-meaningful-name] */o$d$length
    var /* [auto-meaningful-name] */e$d$length
    var o = this
    e = new o.constructor(e)
    if (o.s !== e.s) {
      return o.s || -e.s
    }
    if (o.e !== e.e) {
      return o.e > e.e ^ o.s < 0 ? 1 : -1
    }
    for (t = 0, n = (o$d$length = o.d.length) < (e$d$length = e.d.length) ? o$d$length : e$d$length; t < n; ++t) {
      if (o.d[t] !== e.d[t]) {
        return o.d[t] > e.d[t] ^ o.s < 0 ? 1 : -1
      }
    }
    return o$d$length === e$d$length ? 0 : o$d$length > e$d$length ^ o.s < 0 ? 1 : -1
  }
  A.decimalPlaces = A.dp = function () {
    var e = this
    var t = e.d.length - 1
    var n = 7 * (t - e.e)
    if (t = e.d[t]) {
      for (; t % 10 == 0; t /= 10) {
        n--
      }
    }
    return n < 0 ? 0 : n
  }
  A.dividedBy = A.div = function (e) {
    return y(this, new this.constructor(e))
  }
  A.dividedToIntegerBy = A.idiv = function (e) {
    var /* [auto-meaningful-name] */this$constructor = this.constructor
    return k(y(this, new this$constructor(e), 0, 1), this$constructor.precision)
  }
  A.equals = A.eq = function (e) {
    return !this.cmp(e)
  }
  A.exponent = function () {
    return w(this)
  }
  A.greaterThan = A.gt = function (e) {
    return this.cmp(e) > 0
  }
  A.greaterThanOrEqualTo = A.gte = function (e) {
    return this.cmp(e) >= 0
  }
  A.isInteger = A.isint = function () {
    return this.e > this.d.length - 2
  }
  A.isNegative = A.isneg = function () {
    return this.s < 0
  }
  A.isPositive = A.ispos = function () {
    return this.s > 0
  }
  A.isZero = function () {
    return 0 === this.s
  }
  A.lessThan = A.lt = function (e) {
    return this.cmp(e) < 0
  }
  A.lessThanOrEqualTo = A.lte = function (e) {
    return this.cmp(e) < 1
  }
  A.logarithm = A.log = function (e) {
    var t
    var n = this
    var /* [auto-meaningful-name] */n$constructor = n.constructor
    var /* [auto-meaningful-name] */n$constructor$precision = n$constructor.precision
    var a = n$constructor$precision + 5
    if (undefined === e) {
      e = new n$constructor(10)
    } else if ((e = new n$constructor(e)).s < 1 || e.eq(o)) {
      throw Error(DecimalError + "NaN")
    }
    if (n.s < 1) {
      throw Error(DecimalError + (n.s ? "NaN" : "-Infinity"))
    }
    return n.eq(o) ? new n$constructor(0) : (s = false, t = y(C(n, a), C(e, a), a), s = true, k(t, n$constructor$precision))
  }
  A.minus = A.sub = function (e) {
    var t = this
    e = new t.constructor(e)
    return t.s == e.s ? S(t, e) : g(t, (e.s = -e.s, e))
  }
  A.modulo = A.mod = function (e) {
    var t
    var n = this
    var /* [auto-meaningful-name] */n$constructor = n.constructor
    var /* [auto-meaningful-name] */n$constructor$precision = n$constructor.precision
    if (!(e = new n$constructor(e)).s) {
      throw Error(DecimalError + "NaN")
    }
    return n.s ? (s = false, t = y(n, e, 0, 1).times(e), s = true, n.minus(t)) : k(new n$constructor(n), n$constructor$precision)
  }
  A.naturalExponential = A.exp = function () {
    return b(this)
  }
  A.naturalLogarithm = A.ln = function () {
    return C(this)
  }
  A.negated = A.neg = function () {
    var e = new this.constructor(this)
    e.s = -e.s || 0
    return e
  }
  A.plus = A.add = function (e) {
    var t = this
    e = new t.constructor(e)
    return t.s == e.s ? g(t, e) : S(t, (e.s = -e.s, e))
  }
  A.precision = A.sd = function (e) {
    var t
    var n
    var r
    var i = this
    if (undefined !== e && e !== !!e && 1 !== e && 0 !== e) {
      throw Error(u + e)
    }
    t = w(i) + 1
    n = 7 * (r = i.d.length - 1) + 1
    if (r = i.d[r]) {
      for (; r % 10 == 0; r /= 10) {
        n--
      }
      for (r = i.d[0]; r >= 10; r /= 10) {
        n++
      }
    }
    return e && t > n ? t : n
  }
  A.squareRoot = A.sqrt = function () {
    var e
    var t
    var /* [auto-meaningful-name] */u$constructor$precision
    var r
    var i
    var o
    var a
    var u = this
    var /* [auto-meaningful-name] */u$constructor = u.constructor
    if (u.s < 1) {
      if (!u.s) {
        return new u$constructor(0)
      }
      throw Error(DecimalError + "NaN")
    }
    for (e = w(u), s = false, 0 == (i = Math.sqrt(+u)) || i == 1 / 0 ? (((t = m(u.d)).length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Math$floor((e + 1) / 2) - (e < 0 || e % 2), r = new u$constructor(t = i == 1 / 0 ? "5e" + e : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e)) : r = new u$constructor(i.toString()), i = a = (u$constructor$precision = u$constructor.precision) + 3;;) {
      r = (o = r).plus(y(u, o, a + 2)).times(.5)
      if (m(o.d).slice(0, a) === (t = m(r.d)).slice(0, a)) {
        t = t.slice(a - 3, a + 1)
        if (i == a && "4999" == t) {
          k(o, u$constructor$precision + 1, 0)
          if (o.times(o).eq(u)) {
            r = o
            break
          }
        } else if ("9999" != t) {
          break
        }
        a += 4
      }
    }
    s = true
    return k(r, u$constructor$precision)
  }
  A.times = A.mul = function (e) {
    var t
    var n
    var r
    var i
    var o
    var a
    var c
    var u
    var l
    var f = this
    var /* [auto-meaningful-name] */f$constructor = f.constructor
    var h = f.d
    var /* [auto-meaningful-name] */ENewF$constructorE$d = (e = new f$constructor(e)).d
    if (!f.s || !e.s) {
      return new f$constructor(0)
    }
    for (e.s *= f.s, n = f.e + e.e, (u = h.length) < (l = ENewF$constructorE$d.length) && (o = h, h = ENewF$constructorE$d, ENewF$constructorE$d = o, a = u, u = l, l = a), o = [], r = a = u + l; r--;) {
      o.push(0)
    }
    for (r = l; --r >= 0;) {
      for (t = 0, i = u + r; i > r;) {
        c = o[i] + ENewF$constructorE$d[r] * h[i - r - 1] + t
        o[i--] = c % p | 0
        t = c / p | 0
      }
      o[i] = (o[i] + t) % p | 0
    }
    for (; !o[--a];) {
      o.pop()
    }
    if (t) {
      ++n
    } else {
      o.shift()
    }
    e.d = o
    e.e = n
    return s ? k(e, f$constructor.precision) : e
  }
  A.toDecimalPlaces = A.todp = function (e, t) {
    var n = this
    var /* [auto-meaningful-name] */n$constructor = n.constructor
    n = new n$constructor(n)
    return undefined === e ? n : (v(e, 0, 1e9), undefined === t ? t = n$constructor.rounding : v(t, 0, 8), k(n, e + w(n) + 1, t))
  }
  A.toExponential = function (e, t) {
    var n
    var r = this
    var /* [auto-meaningful-name] */r$constructor = r.constructor
    if (undefined === e) {
      n = T(r, true)
    } else {
      v(e, 0, 1e9)
      if (undefined === t) {
        t = r$constructor.rounding
      } else {
        v(t, 0, 8)
      }
      n = T(r = k(new r$constructor(r), e + 1, t), true, e + 1)
    }
    return n
  }
  A.toFixed = function (e, t) {
    var n
    var r
    var i = this
    var /* [auto-meaningful-name] */i$constructor = i.constructor
    return undefined === e ? T(i) : (v(e, 0, 1e9), undefined === t ? t = i$constructor.rounding : v(t, 0, 8), n = T((r = k(new i$constructor(i), e + w(i) + 1, t)).abs(), false, e + w(r) + 1), i.isneg() && !i.isZero() ? "-" + n : n)
  }
  A.toInteger = A.toint = function () {
    var e = this
    var /* [auto-meaningful-name] */e$constructor = e.constructor
    return k(new e$constructor(e), w(e) + 1, e$constructor.rounding)
  }
  A.toNumber = function () {
    return +this
  }
  A.toPower = A.pow = function (e) {
    var t
    var n
    var /* [auto-meaningful-name] */l$constructor$precision
    var i
    var a
    var u
    var l = this
    var /* [auto-meaningful-name] */l$constructor = l.constructor
    var h = +(e = new l$constructor(e))
    if (!e.s) {
      return new l$constructor(o)
    }
    if (!(l = new l$constructor(l)).s) {
      if (e.s < 1) {
        throw Error(DecimalError + "Infinity")
      }
      return l
    }
    if (l.eq(o)) {
      return l
    }
    l$constructor$precision = l$constructor.precision
    if (e.eq(o)) {
      return k(l, l$constructor$precision)
    }
    u = (t = e.e) >= (n = e.d.length - 1)
    a = l.s
    if (u) {
      if ((n = h < 0 ? -h : h) <= 9007199254740991) {
        for (i = new l$constructor(o), t = Math.ceil(l$constructor$precision / 7 + 4), s = false; n % 2 && B((i = i.times(l)).d, t), 0 !== (n = Math$floor(n / 2));) {
          B((l = l.times(l)).d, t)
        }
        s = true
        return e.s < 0 ? new l$constructor(o).div(i) : k(i, l$constructor$precision)
      }
    } else if (a < 0) {
      throw Error(DecimalError + "NaN")
    }
    a = a < 0 && 1 & e.d[Math.max(t, n)] ? -1 : 1
    l.s = 1
    s = false
    i = e.times(C(l, l$constructor$precision + 12))
    s = true;
    (i = b(i)).s = a
    return i
  }
  A.toPrecision = function (e, t) {
    var n
    var r
    var i = this
    var /* [auto-meaningful-name] */i$constructor = i.constructor
    if (undefined === e) {
      r = T(i, (n = w(i)) <= i$constructor.toExpNeg || n >= i$constructor.toExpPos)
    } else {
      v(e, 1, 1e9)
      if (undefined === t) {
        t = i$constructor.rounding
      } else {
        v(t, 0, 8)
      }
      r = T(i = k(new i$constructor(i), e, t), e <= (n = w(i)) || n <= i$constructor.toExpNeg, e)
    }
    return r
  }
  A.toSignificantDigits = A.tosd = function (e, t) {
    var /* [auto-meaningful-name] */this$constructor = this.constructor
    if (undefined === e) {
      e = this$constructor.precision
      t = this$constructor.rounding
    } else {
      v(e, 1, 1e9)
      if (undefined === t) {
        t = this$constructor.rounding
      } else {
        v(t, 0, 8)
      }
    }
    return k(new this$constructor(this), e, t)
  }
  A.toString = A.valueOf = A.val = A.toJSON = function () {
    var e = this
    var t = w(e)
    var /* [auto-meaningful-name] */e$constructor = e.constructor
    return T(e, t <= e$constructor.toExpNeg || t >= e$constructor.toExpPos)
  }
  var y = function () {
    function e(e, t) {
      var n
      var r = 0
      var /* [auto-meaningful-name] */e$length = e.length
      for (e = e.slice(); e$length--;) {
        n = e[e$length] * t + r
        e[e$length] = n % p | 0
        r = n / p | 0
      }
      if (r) {
        e.unshift(r)
      }
      return e
    }
    function t(e, t, n, r) {
      var i
      var o
      if (n != r) {
        o = n > r ? 1 : -1
      } else {
        for (i = o = 0; i < n; i++) {
          if (e[i] != t[i]) {
            o = e[i] > t[i] ? 1 : -1
            break
          }
        }
      }
      return o
    }
    function n(e, t, n) {
      for (var r = 0; n--;) {
        e[n] -= r
        r = e[n] < t[n] ? 1 : 0
        e[n] = r * p + e[n] - t[n]
      }
      for (; !e[0] && e.length > 1;) {
        e.shift()
      }
    }
    return function (r, i, o, a) {
      var s
      var u
      var l
      var f
      var d
      var h
      var _
      var A
      var g
      var v
      var m
      var y
      var b
      var E
      var x
      var C
      var O
      var S
      var /* [auto-meaningful-name] */r$constructor = r.constructor
      var B = r.s == i.s ? 1 : -1
      var D = r.d
      var I = i.d
      if (!r.s) {
        return new r$constructor(r)
      }
      if (!i.s) {
        throw Error(DecimalError + "Division by zero")
      }
      for (u = r.e - i.e, O = I.length, x = D.length, A = (_ = new r$constructor(B)).d = [], l = 0; I[l] == (D[l] || 0);) {
        ++l
      }
      if (I[l] > (D[l] || 0)) {
        --u
      }
      if ((y = null == o ? o = r$constructor.precision : a ? o + (w(r) - w(i)) + 1 : o) < 0) {
        return new r$constructor(0)
      }
      y = y / 7 + 2 | 0
      l = 0
      if (1 == O) {
        for (f = 0, I = I[0], y++; (l < x || f) && y--; l++) {
          b = f * p + (D[l] || 0)
          A[l] = b / I | 0
          f = b % I | 0
        }
      } else {
        for ((f = p / (I[0] + 1) | 0) > 1 && (I = e(I, f), D = e(D, f), O = I.length, x = D.length), E = O, v = (g = D.slice(0, O)).length; v < O;) {
          g[v++] = 0
        }
        (S = I.slice()).unshift(0)
        C = I[0]
        if (I[1] >= p / 2) {
          ++C
        }
        do {
          f = 0
          if ((s = t(I, g, O, v)) < 0) {
            m = g[0]
            if (O != v) {
              m = m * p + (g[1] || 0)
            }
            if ((f = m / C | 0) > 1) {
              if (f >= p) {
                f = p - 1
              }
              if (1 == (s = t(d = e(I, f), g, h = d.length, v = g.length))) {
                f--
                n(d, O < h ? S : I, h)
              }
            } else {
              if (0 == f) {
                s = f = 1
              }
              d = I.slice()
            }
            if ((h = d.length) < v) {
              d.unshift(0)
            }
            n(g, d, v)
            if (-1 == s && (s = t(I, g, O, v = g.length)) < 1) {
              f++
              n(g, O < v ? S : I, v)
            }
            v = g.length
          } else {
            if (0 === s) {
              f++
              g = [0]
            }
          }
          A[l++] = f
          if (s && g[0]) {
            g[v++] = D[E] || 0
          } else {
            g = [D[E]]
            v = 1
          }
        } while ((E++ < x || undefined !== g[0]) && y--)
      }
      if (!A[0]) {
        A.shift()
      }
      _.e = u
      return k(_, a ? o + w(_) + 1 : o)
    }
  }()
  function b(e, t) {
    var n
    var r
    var i
    var a
    var c
    var u = 0
    var f = 0
    var /* [auto-meaningful-name] */e$constructor = e.constructor
    var /* [auto-meaningful-name] */e$constructor$precision = e$constructor.precision
    if (w(e) > 16) {
      throw Error(l + w(e))
    }
    if (!e.s) {
      return new e$constructor(o)
    }
    for (null == t ? (s = false, c = e$constructor$precision) : c = t, a = new e$constructor(.03125); e.abs().gte(.1);) {
      e = e.times(a)
      f += 5
    }
    for (c += Math.log(Math$pow(2, f)) / Math.LN10 * 2 + 5 | 0, n = r = i = new e$constructor(o), e$constructor.precision = c;;) {
      r = k(r.times(e), c)
      n = n.times(++u)
      if (m((a = i.plus(y(r, n, c))).d).slice(0, c) === m(i.d).slice(0, c)) {
        for (; f--;) {
          i = k(i.times(i), c)
        }
        e$constructor.precision = e$constructor$precision
        return null == t ? (s = true, k(i, e$constructor$precision)) : i
      }
      i = a
    }
  }
  function w(e) {
    for (var t = 7 * e.e, n = e.d[0]; n >= 10; n /= 10) {
      t++
    }
    return t
  }
  function E(e, t, n) {
    if (t > e.LN10.sd()) {
      s = true
      if (n) {
        e.precision = n
      }
      throw Error(DecimalError + "LN10 precision limit exceeded")
    }
    return k(new e(e.LN10), t)
  }
  function x(e) {
    for (var t = ""; e--;) {
      t += "0"
    }
    return t
  }
  function C(e, t) {
    var n
    var r
    var i
    var a
    var u
    var l
    var f
    var d
    var h
    var p = 1
    var _ = e
    var A = _.d
    var /* [auto-meaningful-name] */_$constructor = _.constructor
    var /* [auto-meaningful-name] */_$constructor$precision = _$constructor.precision
    if (_.s < 1) {
      throw Error(DecimalError + (_.s ? "NaN" : "-Infinity"))
    }
    if (_.eq(o)) {
      return new _$constructor(0)
    }
    if (null == t) {
      s = false
      d = _$constructor$precision
    } else {
      d = t
    }
    if (_.eq(10)) {
      if (null == t) {
        s = true
      }
      return E(_$constructor, d)
    }
    d += 10
    _$constructor.precision = d
    r = (n = m(A)).charAt(0)
    a = w(_)
    if (!(Math.abs(a) < 15e14)) {
      f = E(_$constructor, d + 2, _$constructor$precision).times(a + "")
      _ = C(new _$constructor(r + "." + n.slice(1)), d - 10).plus(f)
      _$constructor.precision = _$constructor$precision
      return null == t ? (s = true, k(_, _$constructor$precision)) : _
    }
    for (; r < 7 && 1 != r || 1 == r && n.charAt(1) > 3;) {
      r = (n = m((_ = _.times(e)).d)).charAt(0)
      p++
    }
    for (a = w(_), r > 1 ? (_ = new _$constructor("0." + n), a++) : _ = new _$constructor(r + "." + n.slice(1)), l = u = _ = y(_.minus(o), _.plus(o), d), h = k(_.times(_), d), i = 3;;) {
      u = k(u.times(h), d)
      if (m((f = l.plus(y(u, new _$constructor(i), d))).d).slice(0, d) === m(l.d).slice(0, d)) {
        l = l.times(2)
        if (0 !== a) {
          l = l.plus(E(_$constructor, d + 2, _$constructor$precision).times(a + ""))
        }
        l = y(l, new _$constructor(p), d)
        _$constructor.precision = _$constructor$precision
        return null == t ? (s = true, k(l, _$constructor$precision)) : l
      }
      l = f
      i += 2
    }
  }
  function O(e, t) {
    var n
    var r
    var i
    for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r);) {
      ++r
    }
    for (i = t.length; 48 === t.charCodeAt(i - 1);) {
      --i
    }
    if (t = t.slice(r, i)) {
      i -= r
      n = n - r - 1
      e.e = Math$floor(n / 7)
      e.d = []
      r = (n + 1) % 7
      if (n < 0) {
        r += 7
      }
      if (r < i) {
        for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i;) {
          e.d.push(+t.slice(r, r += 7))
        }
        r = 7 - (t = t.slice(r)).length
      } else {
        r -= i
      }
      for (; r--;) {
        t += "0"
      }
      e.d.push(+t)
      if (s && (e.e > _ || e.e < -_)) {
        throw Error(l + n)
      }
    } else {
      e.s = 0
      e.e = 0
      e.d = [0]
    }
    return e
  }
  function k(e, t, n) {
    var r
    var i
    var o
    var a
    var c
    var u
    var h
    var A
    var g = e.d
    for (a = 1, o = g[0]; o >= 10; o /= 10) {
      a++
    }
    if ((r = t - a) < 0) {
      r += 7
      i = t
      h = g[A = 0]
    } else {
      if ((A = Math.ceil((r + 1) / 7)) >= (o = g.length)) {
        return e
      }
      for (h = o = g[A], a = 1; o >= 10; o /= 10) {
        a++
      }
      i = (r %= 7) - 7 + a
    }
    if (undefined !== n) {
      c = h / (o = Math$pow(10, a - i - 1)) % 10 | 0
      u = t < 0 || undefined !== g[A + 1] || h % o
      u = n < 4 ? (c || u) && (0 == n || n == (e.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == n || u || 6 == n && (r > 0 ? i > 0 ? h / Math$pow(10, a - i) : 0 : g[A - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))
    }
    if (t < 1 || !g[0]) {
      if (u) {
        o = w(e)
        g.length = 1
        t = t - o - 1
        g[0] = Math$pow(10, (7 - t % 7) % 7)
        e.e = Math$floor(-t / 7) || 0
      } else {
        g.length = 1
        g[0] = e.e = e.s = 0
      }
      return e
    }
    if (0 == r) {
      g.length = A
      o = 1
      A--
    } else {
      g.length = A + 1
      o = Math$pow(10, 7 - r)
      g[A] = i > 0 ? (h / Math$pow(10, a - i) % Math$pow(10, i) | 0) * o : 0
    }
    if (u) {
      for (;;) {
        if (0 == A) {
          if ((g[0] += o) == p) {
            g[0] = 1
            ++e.e
          }
          break
        }
        g[A] += o
        if (g[A] != p) {
          break
        }
        g[A--] = 0
        o = 1
      }
    }
    for (r = g.length; 0 === g[--r];) {
      g.pop()
    }
    if (s && (e.e > _ || e.e < -_)) {
      throw Error(l + w(e))
    }
    return e
  }
  function S(e, t) {
    var n
    var r
    var i
    var o
    var a
    var c
    var u
    var l
    var f
    var d
    var /* [auto-meaningful-name] */e$constructor = e.constructor
    var /* [auto-meaningful-name] */e$constructor$precision = e$constructor.precision
    if (!e.s || !t.s) {
      if (t.s) {
        t.s = -t.s
      } else {
        t = new e$constructor(e)
      }
      return s ? k(t, e$constructor$precision) : t
    }
    u = e.d
    d = t.d
    r = t.e
    l = e.e
    u = u.slice()
    if (a = l - r) {
      for ((f = a < 0) ? (n = u, a = -a, c = d.length) : (n = d, r = l, c = u.length), a > (i = Math.max(Math.ceil(e$constructor$precision / 7), c) + 2) && (a = i, n.length = 1), n.reverse(), i = a; i--;) {
        n.push(0)
      }
      n.reverse()
    } else {
      for ((f = (i = u.length) < (c = d.length)) && (c = i), i = 0; i < c; i++) {
        if (u[i] != d[i]) {
          f = u[i] < d[i]
          break
        }
      }
      a = 0
    }
    for (f && (n = u, u = d, d = n, t.s = -t.s), c = u.length, i = d.length - c; i > 0; --i) {
      u[c++] = 0
    }
    for (i = d.length; i > a;) {
      if (u[--i] < d[i]) {
        for (o = i; o && 0 === u[--o];) {
          u[o] = p - 1
        }
        --u[o]
        u[i] += p
      }
      u[i] -= d[i]
    }
    for (; 0 === u[--c];) {
      u.pop()
    }
    for (; 0 === u[0]; u.shift()) {
      --r
    }
    return u[0] ? (t.d = u, t.e = r, s ? k(t, e$constructor$precision) : t) : new e$constructor(0)
  }
  function T(e, t, n) {
    var r
    var i = w(e)
    var o = m(e.d)
    var /* [auto-meaningful-name] */o$length = o.length
    if (t) {
      if (n && (r = n - o$length) > 0) {
        o = o.charAt(0) + "." + o.slice(1) + x(r)
      } else {
        if (o$length > 1) {
          o = o.charAt(0) + "." + o.slice(1)
        }
      }
      o = o + (i < 0 ? "e" : "e+") + i
    } else {
      if (i < 0) {
        o = "0." + x(-i - 1) + o
        if (n && (r = n - o$length) > 0) {
          o += x(r)
        }
      } else {
        if (i >= o$length) {
          o += x(i + 1 - o$length)
          if (n && (r = n - i - 1) > 0) {
            o = o + "." + x(r)
          }
        } else {
          if ((r = i + 1) < o$length) {
            o = o.slice(0, r) + "." + o.slice(r)
          }
          if (n && (r = n - o$length) > 0) {
            if (i + 1 === o$length) {
              o += "."
            }
            o += x(r)
          }
        }
      }
    }
    return e.s < 0 ? "-" + o : o
  }
  function B(e, t) {
    if (e.length > t) {
      e.length = t
      return true
    }
  }
  function D(e) {
    if (!e || "object" !== typeof e) {
      throw Error(DecimalError + "Object expected")
    }
    var t
    var n
    var r
    var i = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0]
    for (t = 0; t < i.length; t += 3) {
      if (undefined !== (r = e[n = i[t]])) {
        if (!(Math$floor(r) === r && r >= i[t + 1] && r <= i[t + 2])) {
          throw Error(u + n + ": " + r)
        }
        this[n] = r
      }
    }
    if (undefined !== (r = e[n = "LN10"])) {
      if (r != Math.LN10) {
        throw Error(u + n + ": " + r)
      }
      this[n] = new this(r)
    }
    return this
  }
  (a = function e(t) {
    var n
    var r
    var i
    function o(e) {
      var t = this
      if (!(t instanceof o)) {
        return new o(e)
      }
      t.constructor = o
      if (e instanceof o) {
        t.s = e.s
        t.e = e.e
        return void (t.d = (e = e.d) ? e.slice() : e)
      }
      if ("number" === typeof e) {
        if (0 * e !== 0) {
          throw Error(u + e)
        }
        if (e > 0) {
          t.s = 1
        } else {
          if (!(e < 0)) {
            t.s = 0
            t.e = 0
            return void (t.d = [0])
          }
          e = -e
          t.s = -1
        }
        return e === ~~e && e < 1e7 ? (t.e = 0, void (t.d = [e])) : O(t, e.toString())
      }
      if ("string" !== typeof e) {
        throw Error(u + e)
      }
      if (45 === e.charCodeAt(0)) {
        e = e.slice(1)
        t.s = -1
      } else {
        t.s = 1
      }
      if (!h.test(e)) {
        throw Error(u + e)
      }
      O(t, e)
    }
    o.prototype = A
    o.ROUND_UP = 0
    o.ROUND_DOWN = 1
    o.ROUND_CEIL = 2
    o.ROUND_FLOOR = 3
    o.ROUND_HALF_UP = 4
    o.ROUND_HALF_DOWN = 5
    o.ROUND_HALF_EVEN = 6
    o.ROUND_HALF_CEIL = 7
    o.ROUND_HALF_FLOOR = 8
    o.clone = e
    o.config = o.set = D
    if (undefined === t) {
      t = {}
    }
    if (t) {
      for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], n = 0; n < i.length;) {
        if (!t.hasOwnProperty(r = i[n++])) {
          t[r] = this[r]
        }
      }
    }
    o.config(t)
    return o
  }(a)).default = a.Decimal = a
  o = new a(1)
  if (!(undefined === (r = function () {
    return a
  }.call(exports, require, exports, module)))) {
    module.exports = r
  }
}()
