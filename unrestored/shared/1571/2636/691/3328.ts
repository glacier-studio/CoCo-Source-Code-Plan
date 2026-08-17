/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3328
 */

"use strict"

function i(t) {
  if (undefined === t) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return t
}
function n(t, e) {
  t.prototype = Object.create(e.prototype)
  t.prototype.constructor = t
  t.__proto__ = e
}
export { Ti as gsap }
export default Ti
export { wi as CSSPlugin }
export { Ti$core$Tween as TweenMax }
export { De as TweenLite }
export { xe as TimelineMax }
export { xe as TimelineLite }
export { oe$Power0 as Power0 }
export { oe$Power1 as Power1 }
export { oe$Power2 as Power2 }
export { oe$Power3 as Power3 }
export { oe$Power4 as Power4 }
export { oe$Linear as Linear }
export { oe$Quad as Quad }
export { oe$Cubic as Cubic }
export { oe$Quart as Quart }
export { oe$Quint as Quint }
export { oe$Strong as Strong }
export { oe$Elastic as Elastic }
export { oe$Back as Back }
export { oe$SteppedEase as SteppedEase }
export { oe$Bounce as Bounce }
export { oe$Sine as Sine }
export { oe$Expo as Expo }
export { oe$Circ as Circ }
var s
var a
var o
var u
var h
var /* [auto-meaningful-name] */se$frame
var l
var c
var p = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}
var _ = {
  duration: .5,
  overwrite: false,
  delay: 0
}
var d = 1e8
var m = 2 * Math.PI
var g = m / 4
var v = 0
var /* [auto-meaningful-name] */Math$sqrt = Math.sqrt
var /* [auto-meaningful-name] */Math$cos = Math.cos
var /* [auto-meaningful-name] */Math$sin = Math.sin
var T = function (t) {
  return "string" === typeof t
}
var b = function (t) {
  return "function" === typeof t
}
var M = function (t) {
  return "number" === typeof t
}
var O = function (t) {
  return "undefined" === typeof t
}
var k = function (t) {
  return "object" === typeof t
}
var C = function (t) {
  return false !== t
}
var A = function () {
  return "undefined" !== typeof window
}
var D = function (t) {
  return b(t) || T(t)
}
var /* [auto-meaningful-name] */Array$isArray = Array.isArray
var S = /(?:-?\.?\d|\.)+/gi
var z = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g
var R = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g
var F = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi
var E = /\(([^()]+)\)/i
var B = /[+-]=-?[\.\d]+/
var L = /[#\-+.]*\b[a-z\d-=+%.]+/gi
var I = {}
var Y = {}
var U = function (t) {
  return (Y = ct(t, I)) && Ge
}
var X = function (t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
}
var N = function (t, e) {
  return !e && console.warn(t)
}
var q = function (t, e) {
  return t && (I[t] = e) && Y && (Y[t] = e) || I
}
var V = function () {
  return 0
}
var j = {}
var Q = []
var G = {}
var W = {}
var Z = {}
var H = 30
var J = []
var $ = ""
var K = function (t) {
  var e
  var r
  var i = t[0]
  if (!(k(i) || b(i))) {
    t = [t]
  }
  if (!(e = (i._gsap || {}).harness)) {
    for (r = J.length; r-- && !J[r].targetTest(i);) {
      ;
    }
    e = J[r]
  }
  for (r = t.length; r--;) {
    if (!(t[r] && (t[r]._gsap || (t[r]._gsap = new ve(t[r], e))))) {
      t.splice(r, 1)
    }
  }
  return t
}
var tt = function (t) {
  return t._gsap || K(It(t))[0]._gsap
}
var et = function (t, e) {
  var r = t[e]
  return b(r) ? t[e]() : O(r) && t.getAttribute(e) || r
}
var rt = function (t, e) {
  return (t = t.split(",")).forEach(e) || t
}
var it = function (t) {
  return Math.round(1e5 * t) / 1e5 || 0
}
var nt = function (t, e) {
  for (var /* [auto-meaningful-name] */e$length = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < e$length;) {
    ;
  }
  return i < e$length
}
var st = function (t, e, r) {
  var i
  var n = M(t[1])
  var s = (n ? 2 : 1) + (e < 2 ? 0 : 1)
  var a = t[s]
  if (n) {
    a.duration = t[1]
  }
  a.parent = r
  if (e) {
    for (i = a; r && !("immediateRender" in i);) {
      i = r.vars.defaults || {}
      r = C(r.vars.inherit) && r.parent
    }
    a.immediateRender = C(i.immediateRender)
    if (e < 2) {
      a.runBackwards = 1
    } else {
      a.startAt = t[s - 1]
    }
  }
  return a
}
var at = function () {
  var t
  var e
  var /* [auto-meaningful-name] */Q$length = Q.length
  var i = Q.slice(0)
  for (G = {}, Q.length = 0, t = 0; t < Q$length; t++) {
    if ((e = i[t]) && e._lazy) {
      e.render(e._lazy[0], e._lazy[1], true)._lazy = 0
    }
  }
}
var ot = function (t, e, r, i) {
  if (Q.length) {
    at()
  }
  t.render(e, r, i)
  if (Q.length) {
    at()
  }
}
var ut = function (t) {
  var e = parseFloat(t)
  return (e || 0 === e) && (t + "").match(L).length < 2 ? e : t
}
var ht = function (t) {
  return t
}
var ft = function (t, e) {
  for (var r in e) if (!(r in t)) {
    t[r] = e[r]
  }
  return t
}
var lt = function (t, e) {
  for (var r in e) if (!(r in t || "duration" === r || "ease" === r)) {
    t[r] = e[r]
  }
}
var ct = function (t, e) {
  for (var r in e) t[r] = e[r]
  return t
}
var pt = function t(e, r) {
  for (var i in r) e[i] = k(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]
  return e
}
var _t = function (t, e) {
  var r
  var i = {}
  for (r in t) if (!(r in e)) {
    i[r] = t[r]
  }
  return i
}
var dt = function (t) {
  var e = t.parent || s
  var r = t.keyframes ? lt : ft
  if (C(t.inherit)) {
    for (; e;) {
      r(t, e.vars.defaults)
      e = e.parent || e._dp
    }
  }
  return t
}
var mt = function (t, e, r, i) {
  if (undefined === r) {
    r = "_first"
  }
  if (undefined === i) {
    i = "_last"
  }
  var /* [auto-meaningful-name] */e$_prev = e._prev
  var /* [auto-meaningful-name] */e$_next = e._next
  if (e$_prev) {
    e$_prev._next = e$_next
  } else {
    if (t[r] === e) {
      t[r] = e$_next
    }
  }
  if (e$_next) {
    e$_next._prev = e$_prev
  } else {
    if (t[i] === e) {
      t[i] = e$_prev
    }
  }
  e._next = e._prev = e.parent = null
}
var gt = function (t, e) {
  if (!(!t.parent || e && !t.parent.autoRemoveChildren)) {
    t.parent.remove(t)
  }
  t._act = 0
}
var vt = function (t) {
  for (var e = t; e;) {
    e._dirty = 1
    e = e.parent
  }
  return t
}
var yt = function (t) {
  for (var /* [auto-meaningful-name] */t$parent = t.parent; t$parent && t$parent.parent;) {
    t$parent._dirty = 1
    t$parent.totalDuration()
    t$parent = t$parent.parent
  }
  return t
}
var xt = function (t) {
  return t._repeat ? wt(t._tTime, t = t.duration() + t._rDelay) * t : 0
}
var wt = function (t, e) {
  return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
}
var Tt = function (t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
}
var bt = function (t) {
  return t._end = it(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
}
var Mt = function (t, e) {
  var r
  if (e._time || e._initted && !e._dur) {
    r = Tt(t.rawTime(), e)
    if (!e._dur || Rt(0, e.totalDuration(), r) - e._tTime > 1e-8) {
      e.render(r, true)
    }
  }
  if (vt(t)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration()) {
      for (r = t; r._dp;) {
        if (r.rawTime() >= 0) {
          r.totalTime(r._tTime)
        }
        r = r._dp
      }
    }
    t._zTime = -1e-8
  }
}
var Ot = function (t, e, r, i) {
  if (e.parent) {
    gt(e)
  }
  e._start = it(r + e._delay)
  e._end = it(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0));
  (function (t, e, r, i, n) {
    if (undefined === r) {
      r = "_first"
    }
    if (undefined === i) {
      i = "_last"
    }
    var s
    var a = t[i]
    if (n) {
      for (s = e[n]; a && a[n] > s;) {
        a = a._prev
      }
    }
    if (a) {
      e._next = a._next
      a._next = e
    } else {
      e._next = t[r]
      t[r] = e
    }
    if (e._next) {
      e._next._prev = e
    } else {
      t[i] = e
    }
    e._prev = a
    e.parent = e._dp = t
  })(t, e, "_first", "_last", t._sort ? "_start" : 0)
  t._recent = e
  if (!i) {
    Mt(t, e)
  }
  return t
}
var kt = function (t, e) {
  return (I.ScrollTrigger || X("scrollTrigger", e)) && I.ScrollTrigger.create(e, t)
}
var Ct = function (t, e, r, i) {
  Oe(t, e)
  return t._initted ? !r && t._pt && (t._dur && false !== t.vars.lazy || !t._dur && t.vars.lazy) && se$frame !== se.frame ? (Q.push(t), t._lazy = [e, i], 1) : undefined : 1
}
var At = function (t, e, r) {
  var /* [auto-meaningful-name] */t$_repeat = t._repeat
  var n = it(e) || 0
  t._dur = n
  t._tDur = t$_repeat ? t$_repeat < 0 ? 1e10 : it(n * (t$_repeat + 1) + t._rDelay * t$_repeat) : n
  if (t._time > n) {
    t._time = n
    t._tTime = Math.min(t._tTime, t._tDur)
  }
  if (!r) {
    vt(t.parent)
  }
  if (t.parent) {
    bt(t)
  }
  return t
}
var Dt = function (t) {
  return t instanceof xe ? vt(t) : At(t, t._dur)
}
var Pt = {
  _start: 0,
  endTime: V
}
var St = function t(e, r) {
  var i
  var n
  var /* [auto-meaningful-name] */e$labels = e.labels
  var a = e._recent || Pt
  var o = e.duration() >= d ? a.endTime(false) : e._dur
  return T(r) && (isNaN(r) || r in e$labels) ? "<" === (i = r.charAt(0)) || ">" === i ? ("<" === i ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) : (i = r.indexOf("=")) < 0 ? (r in e$labels || (e$labels[r] = o), e$labels[r]) : (n = +(r.charAt(i - 1) + r.substr(i + 1)), i > 1 ? t(e, r.substr(0, i - 1)) + n : o + n) : null == r ? o : +r
}
var zt = function (t, e) {
  return t || 0 === t ? e(t) : e
}
var Rt = function (t, e, r) {
  return r < t ? t : r > e ? e : r
}
var Ft = function (t) {
  return (t + "").substr((parseFloat(t) + "").length)
}
var /* [auto-meaningful-name] */$slice = [].slice
var Bt = function (t, e) {
  return t && k(t) && "length" in t && (!e && !t.length || t.length - 1 in t && k(t[0])) && !t.nodeType && t !== a
}
var Lt = function (t, e, r) {
  if (undefined === r) {
    r = []
  }
  return t.forEach(function (t) {
    var i
    return T(t) && !e || Bt(t, 1) ? (i = r).push.apply(i, It(t)) : r.push(t)
  }) || r
}
var It = function (t, e) {
  return !T(t) || e || !o && ae() ? Array$isArray(t) ? Lt(t, e) : Bt(t) ? $slice.call(t, 0) : t ? [t] : [] : $slice.call(u.querySelectorAll(t), 0)
}
var Yt = function (t) {
  return t.sort(function () {
    return .5 - Math.random()
  })
}
var Ut = function (t) {
  if (b(t)) {
    return t
  }
  var e = k(t) ? t : {
    each: t
  }
  var r = pe(e.ease)
  var i = e.from || 0
  var n = parseFloat(e.base) || 0
  var s = {}
  var a = i > 0 && i < 1
  var o = isNaN(i) || a
  var /* [auto-meaningful-name] */e$axis = e.axis
  var h = i
  var f = i
  if (T(i)) {
    h = f = {
      center: .5,
      edges: .5,
      end: 1
    }[i] || 0
  } else {
    if (!a && o) {
      h = i[0]
      f = i[1]
    }
  }
  return function (t, a, l) {
    var c
    var p
    var _
    var m
    var g
    var v
    var x
    var w
    var T
    var /* [auto-meaningful-name] */LE$length = (l || e).length
    var M = s[LE$length]
    if (!M) {
      if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, d])[1])) {
        for (x = -d; x < (x = l[T++].getBoundingClientRect().left) && T < LE$length;) {
          ;
        }
        T--
      }
      for (M = s[LE$length] = [], c = o ? Math.min(T, LE$length) * h - .5 : i % T, p = o ? LE$length * f / T - .5 : i / T | 0, x = 0, w = d, v = 0; v < LE$length; v++) {
        _ = v % T - c
        m = p - (v / T | 0)
        M[v] = g = e$axis ? Math.abs("y" === e$axis ? m : _) : Math$sqrt(_ * _ + m * m)
        if (g > x) {
          x = g
        }
        if (g < w) {
          w = g
        }
      }
      if ("random" === i) {
        Yt(M)
      }
      M.max = x - w
      M.min = w
      M.v = LE$length = (parseFloat(e.amount) || parseFloat(e.each) * (T > LE$length ? LE$length - 1 : e$axis ? "y" === e$axis ? LE$length / T : T : Math.max(T, LE$length / T)) || 0) * ("edges" === i ? -1 : 1)
      M.b = LE$length < 0 ? n - LE$length : n
      M.u = Ft(e.amount || e.each) || 0
      r = r && LE$length < 0 ? le(r) : r
    }
    LE$length = (M[t] - M.min) / M.max || 0
    return it(M.b + (r ? r(LE$length) : LE$length) * M.v) + M.u
  }
}
var Xt = function (t) {
  var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1
  return function (r) {
    return Math.floor(Math.round(parseFloat(r) / t) * t * e) / e + (M(r) ? 0 : Ft(r))
  }
}
var Nt = function (t, e) {
  var r
  var i
  var n = Array$isArray(t)
  if (!n && k(t)) {
    r = n = t.radius || d
    if (t.values) {
      t = It(t.values)
      if (i = !M(t[0])) {
        r *= r
      }
    } else {
      t = Xt(t.increment)
    }
  }
  return zt(e, n ? b(t) ? function (e) {
    i = t(e)
    return Math.abs(i - e) <= r ? i : e
  } : function (e) {
    for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), u = d, h = 0, /* [auto-meaningful-name] */t$length = t.length; t$length--;) {
      if ((n = i ? (n = t[t$length].x - a) * n + (s = t[t$length].y - o) * s : Math.abs(t[t$length] - a)) < u) {
        u = n
        h = t$length
      }
    }
    h = !r || u <= r ? t[h] : e
    return i || h === e || M(e) ? h : h + Ft(e)
  } : Xt(t))
}
var qt = function (t, e, r, i) {
  return zt(Array$isArray(t) ? !e : true === r ? !!(r = 0) : !i, function () {
    return Array$isArray(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i
  })
}
var Vt = function (t, e, r) {
  return zt(r, function (r) {
    return t[~~e(r)]
  })
}
var jt = function (t) {
  for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) {
    i = t.indexOf(")", e)
    n = "[" === t.charAt(e + 7)
    r = t.substr(e + 7, i - e - 7).match(n ? L : S)
    a += t.substr(s, e - s) + qt(n ? r : +r[0], +r[1], +r[2] || 1e-5)
    s = i + 1
  }
  return a + t.substr(s, t.length - s)
}
var Qt = function (t, e, r, i, n) {
  var s = e - t
  var a = i - r
  return zt(n, function (e) {
    return r + ((e - t) / s * a || 0)
  })
}
var Gt = function (t, e, r) {
  var i
  var n
  var s
  var /* [auto-meaningful-name] */t$labels = t.labels
  var o = d
  for (i in t$labels) if ((n = t$labels[i] - e) < 0 === !!r && n && o > (n = Math.abs(n))) {
    s = i
    o = n
  }
  return s
}
var Wt = function (t, e, r) {
  var i
  var n
  var /* [auto-meaningful-name] */t$vars = t.vars
  var a = t$vars[e]
  if (a) {
    i = t$vars[e + "Params"]
    n = t$vars.callbackScope || t
    if (r && Q.length) {
      at()
    }
    return i ? a.apply(n, i) : a.call(n)
  }
}
var Zt = function (t) {
  gt(t)
  if (t.progress() < 1) {
    Wt(t, "onInterrupt")
  }
  return t
}
var Ht = function (t) {
  var /* [auto-meaningful-name] */TT$nameT$defaultT$name = (t = !t.name && t.default || t).name
  var r = b(t)
  var i = TT$nameT$defaultT$name && !r && t.init ? function () {
    this._props = []
  } : t
  var n = {
    init: V,
    render: Ie,
    add: be,
    kill: Ue,
    modifier: Ye,
    rawVars: 0
  }
  var s = {
    targetTest: 0,
    get: 0,
    getSetter: Fe,
    aliases: {},
    register: 0
  }
  ae()
  if (t !== i) {
    if (W[TT$nameT$defaultT$name]) {
      return
    }
    ft(i, ft(_t(t, n), s))
    ct(i.prototype, ct(n, _t(t, s)))
    W[i.prop = TT$nameT$defaultT$name] = i
    if (t.targetTest) {
      J.push(i)
      j[TT$nameT$defaultT$name] = 1
    }
    TT$nameT$defaultT$name = ("css" === TT$nameT$defaultT$name ? "CSS" : TT$nameT$defaultT$name.charAt(0).toUpperCase() + TT$nameT$defaultT$name.substr(1)) + "Plugin"
  }
  q(TT$nameT$defaultT$name, i)
  if (t.register) {
    t.register(Ge, i, qe)
  }
}
var Jt = {
  aqua: [0, 255, 255],
  lime: [0, 255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, 255],
  navy: [0, 0, 128],
  white: [255, 255, 255],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [255, 0, 0],
  pink: [255, 192, 203],
  cyan: [0, 255, 255],
  transparent: [255, 255, 255, 0]
}
var $t = function (t, e, r) {
  return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + .5 | 0
}
var Kt = function (t, e, r) {
  var i
  var n
  var s
  var a
  var o
  var u
  var h
  var f
  var l
  var c
  var p = t ? M(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : Jt.black
  if (!p) {
    if ("," === t.substr(-1)) {
      t = t.substr(0, t.length - 1)
    }
    if (Jt[t]) {
      p = Jt[t]
    } else if ("#" === t.charAt(0)) {
      if (4 === t.length) {
        i = t.charAt(1)
        n = t.charAt(2)
        s = t.charAt(3)
        t = "#" + i + i + n + n + s + s
      }
      p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
    } else if ("hsl" === t.substr(0, 3)) {
      p = c = t.match(S)
      if (e) {
        if (~t.indexOf("=")) {
          p = t.match(z)
          if (r && p.length < 4) {
            p[3] = 1
          }
          return p
        }
      } else {
        a = +p[0] % 360 / 360
        o = +p[1] / 100
        i = 2 * (u = +p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o)
        if (p.length > 3) {
          p[3] *= 1
        }
        p[0] = $t(a + 1 / 3, i, n)
        p[1] = $t(a, i, n)
        p[2] = $t(a - 1 / 3, i, n)
      }
    } else {
      p = t.match(S) || Jt.transparent
    }
    p = p.map(Number)
  }
  if (e && !c) {
    i = p[0] / 255
    n = p[1] / 255
    s = p[2] / 255
    u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2
    if (h === f) {
      a = o = 0
    } else {
      l = h - f
      o = u > .5 ? l / (2 - h - f) : l / (h + f)
      a = h === i ? (n - s) / l + (n < s ? 6 : 0) : h === n ? (s - i) / l + 2 : (i - n) / l + 4
      a *= 60
    }
    p[0] = ~~(a + .5)
    p[1] = ~~(100 * o + .5)
    p[2] = ~~(100 * u + .5)
  }
  if (r && p.length < 4) {
    p[3] = 1
  }
  return p
}
var te = function (t) {
  var e = []
  var r = []
  var i = -1
  t.split(re).forEach(function (t) {
    var n = t.match(R) || []
    e.push.apply(e, n)
    r.push(i += n.length + 1)
  })
  e.c = r
  return e
}
var ee = function (t, e, r) {
  var i
  var n
  var s
  var a
  var o = ""
  var u = (t + o).match(re)
  var h = e ? "hsla(" : "rgba("
  var f = 0
  if (!u) {
    return t
  }
  u = u.map(function (t) {
    return (t = Kt(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
  })
  if (r && (s = te(t), (i = r.c).join(o) !== s.c.join(o))) {
    for (a = (n = t.replace(re, "1").split(R)).length - 1; f < a; f++) {
      o += n[f] + (~i.indexOf(f) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift())
    }
  }
  if (!n) {
    for (a = (n = t.split(re)).length - 1; f < a; f++) {
      o += n[f] + u[f]
    }
  }
  return o + n[a]
}
var re = function () {
  var t
  var /* [auto-meaningful-name] */__bRgbRgbaHslHsla__$____B09aF312__b = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"
  for (t in Jt) __bRgbRgbaHslHsla__$____B09aF312__b += "|" + t + "\\b"
  return new RegExp(__bRgbRgbaHslHsla__$____B09aF312__b + ")", "gi")
}()
var ie = /hsl[a]?\(/
var ne = function (t) {
  var e
  var r = t.join(" ")
  re.lastIndex = 0
  if (re.test(r)) {
    e = ie.test(r)
    t[1] = ee(t[1], e)
    t[0] = ee(t[0], e, te(t[1]))
    return true
  }
}
var se = function () {
  var t
  var e
  var /* [auto-meaningful-name] */a$requestAnimationFrame
  var i
  var /* [auto-meaningful-name] */Date$now = Date.now
  var s = 500
  var f = 33
  var l = Date$now()
  var p = l
  var _ = 1 / 240
  var d = _
  var m = []
  var g = function r(a) {
    var o
    var u
    var h = Date$now() - p
    var c = true === a
    if (h > s) {
      l += h - f
    }
    p += h
    i.time = (p - l) / 1e3
    if ((o = i.time - d) > 0 || c) {
      i.frame++
      d += o + (o >= _ ? .004 : _ - o)
      u = 1
    }
    if (!c) {
      t = e(r)
    }
    if (u) {
      m.forEach(function (t) {
        return t(i.time, h, i.frame, a)
      })
    }
  }
  return i = {
    time: 0,
    frame: 0,
    tick: function () {
      g(true)
    },
    wake: function () {
      if (h) {
        if (!o && A()) {
          a = o = window
          u = a.document || {}
          I.gsap = Ge;
          (a.gsapVersions || (a.gsapVersions = [])).push(Ge.version)
          U(Y || a.GreenSockGlobals || !a.gsap && a || {})
          a$requestAnimationFrame = a.requestAnimationFrame
        }
        if (t) {
          i.sleep()
        }
        e = a$requestAnimationFrame || function (t) {
          return setTimeout(t, 1e3 * (d - i.time) + 1 | 0)
        }
        c = 1
        g(2)
      }
    },
    sleep: function () {
      (a$requestAnimationFrame ? a.cancelAnimationFrame : clearTimeout)(t)
      c = 0
      e = V
    },
    lagSmoothing: function (t, e) {
      s = t || 1 / 1e-8
      f = Math.min(e, s, 0)
    },
    fps: function (t) {
      _ = 1 / (t || 240)
      d = i.time + _
    },
    add: function (t) {
      if (m.indexOf(t) < 0) {
        m.push(t)
      }
      ae()
    },
    remove: function (t) {
      var e
      if (~(e = m.indexOf(t))) {
        m.splice(e, 1)
      }
    },
    _listeners: m
  }
}()
var ae = function () {
  return !c && se.wake()
}
var oe = {}
var ue = /^[\d.\-M][\d.\-,\s]/
var he = /["']/g
var fe = function (t) {
  for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, /* [auto-meaningful-name] */s$length = s.length; o < s$length; o++) {
    r = s[o]
    e = o !== s$length - 1 ? r.lastIndexOf(",") : r.length
    i = r.substr(0, e)
    n[a] = isNaN(i) ? i.replace(he, "").trim() : +i
    a = r.substr(e + 1).trim()
  }
  return n
}
var le = function (t) {
  return function (e) {
    return 1 - t(1 - e)
  }
}
var ce = function t(e, r) {
  for (var /* [auto-meaningful-name] */e$_first$_ease, /* [auto-meaningful-name] */e$_first = e._first; e$_first;) {
    if (e$_first instanceof xe) {
      t(e$_first, r)
    } else {
      if (!(!e$_first.vars.yoyoEase || e$_first._yoyo && e$_first._repeat || e$_first._yoyo === r)) {
        if (e$_first.timeline) {
          t(e$_first.timeline, r)
        } else {
          e$_first$_ease = e$_first._ease
          e$_first._ease = e$_first._yEase
          e$_first._yEase = e$_first$_ease
          e$_first._yoyo = r
        }
      }
    }
    e$_first = e$_first._next
  }
}
var pe = function (t, e) {
  return t && (b(t) ? t : oe[t] || function (t) {
    var e = (t + "").split("(")
    var r = oe[e[0]]
    return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [fe(e[1])] : E.exec(t)[1].split(",").map(ut)) : oe._CE && ue.test(t) ? oe._CE("", t) : r
  }(t)) || e
}
var _e = function (t, e, r, i) {
  if (undefined === r) {
    r = function (t) {
      return 1 - e(1 - t)
    }
  }
  if (undefined === i) {
    i = function (t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
    }
  }
  var n
  var s = {
    easeIn: e,
    easeOut: r,
    easeInOut: i
  }
  rt(t, function (t) {
    for (var e in oe[t] = I[t] = s, oe[n = t.toLowerCase()] = r, s) oe[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = oe[t + "." + e] = s[e]
  })
  return s
}
var de = function (t) {
  return function (e) {
    return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
  }
}
var me = function t(e, r, i) {
  var n = r >= 1 ? r : 1
  var s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1)
  var a = s / m * (Math.asin(1 / n) || 0)
  var o = function (t) {
    return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Math$sin((t - a) * s) + 1
  }
  var u = "out" === e ? o : "in" === e ? function (t) {
    return 1 - o(1 - t)
  } : de(o)
  s = m / s
  u.config = function (r, i) {
    return t(e, r, i)
  }
  return u
}
var ge = function t(e, r) {
  if (undefined === r) {
    r = 1.70158
  }
  var i = function (t) {
    return t ? --t * t * ((r + 1) * t + r) + 1 : 0
  }
  var n = "out" === e ? i : "in" === e ? function (t) {
    return 1 - i(1 - t)
  } : de(i)
  n.config = function (r) {
    return t(e, r)
  }
  return n
}
rt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var r = e < 5 ? e + 1 : e
  _e(t + ",Power" + (r - 1), e ? function (t) {
    return Math.pow(t, r)
  } : function (t) {
    return t
  }, function (t) {
    return 1 - Math.pow(1 - t, r)
  }, function (t) {
    return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
  })
})
oe.Linear.easeNone = oe.none = oe.Linear.easeIn
_e("Elastic", me("in"), me("out"), me());
(function (t, e) {
  var r = 1 / e
  var i = function (i) {
    return i < r ? t * i * i : i < .7272727272727273 ? t * Math.pow(i - 1.5 / e, 2) + .75 : i < .9090909090909092 ? t * (i -= 2.25 / e) * i + .9375 : t * Math.pow(i - 2.625 / e, 2) + .984375
  }
  _e("Bounce", function (t) {
    return 1 - i(1 - t)
  }, i)
})(7.5625, 2.75)
_e("Expo", function (t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0
})
_e("Circ", function (t) {
  return -(Math$sqrt(1 - t * t) - 1)
})
_e("Sine", function (t) {
  return 1 === t ? 1 : 1 - Math$cos(t * g)
})
_e("Back", ge("in"), ge("out"), ge())
oe.SteppedEase = oe.steps = I.SteppedEase = {
  config: function (t, e) {
    if (undefined === t) {
      t = 1
    }
    var r = 1 / t
    var i = t + (e ? 0 : 1)
    var n = e ? 1 : 0
    return function (t) {
      return ((i * Rt(0, 1 - 1e-8, t) | 0) + n) * r
    }
  }
}
_.ease = oe["quad.out"]
rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
  return $ += t + "," + t + "Params,"
})
var ve = function (t, e) {
  this.id = v++
  t._gsap = this
  this.target = t
  this.harness = e
  this.get = e ? e.get : et
  this.set = e ? e.getSetter : Fe
}
var ye = function () {
  function t(t, e) {
    var r = t.parent || s
    this.vars = t
    this._delay = +t.delay || 0
    if (this._repeat = t.repeat || 0) {
      this._rDelay = t.repeatDelay || 0
      this._yoyo = !!t.yoyo || !!t.yoyoEase
    }
    this._ts = 1
    At(this, +t.duration, 1)
    this.data = t.data
    if (!c) {
      se.wake()
    }
    if (r) {
      Ot(r, this, e || 0 === e ? e : r._time, 1)
    }
    if (t.reversed) {
      this.reverse()
    }
    if (t.paused) {
      this.paused(true)
    }
  }
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.delay = function (t) {
    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
  }
  t$prototype.duration = function (t) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
  }
  t$prototype.totalDuration = function (t) {
    return arguments.length ? (this._dirty = 0, At(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
  }
  t$prototype.totalTime = function (t, e) {
    ae()
    if (!arguments.length) {
      return this._tTime
    }
    var r = this.parent || this._dp
    if (r && r.smoothChildTiming && this._ts) {
      for (this._start = it(r._time - (this._ts > 0 ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), bt(this), r._dirty || vt(r); r.parent;) {
        if (r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts)) {
          r.totalTime(r._tTime, true)
        }
        r = r.parent
      }
      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t)) {
        Ot(this._dp, this, this._start - this._delay)
      }
    }
    if (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted) {
      if (!this._ts) {
        this._pTime = t
      }
      ot(this, t, e)
    }
    return this
  }
  t$prototype.time = function (t, e) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + xt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
  }
  t$prototype.totalProgress = function (t, e) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
  }
  t$prototype.progress = function (t, e) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + xt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
  }
  t$prototype.iteration = function (t, e) {
    var r = this.duration() + this._rDelay
    return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? wt(this._tTime, r) + 1 : 1
  }
  t$prototype.timeScale = function (t) {
    if (!arguments.length) {
      return -1e-8 === this._rts ? 0 : this._rts
    }
    if (this._rts === t) {
      return this
    }
    var e = this.parent && this._ts ? Tt(this.parent._time, this) : this._tTime
    this._rts = +t || 0
    this._ts = this._ps || -1e-8 === t ? 0 : this._rts
    return yt(this.totalTime(Rt(0, this._tDur, e), true))
  }
  t$prototype.paused = function (t) {
    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ae(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps
  }
  t$prototype.startTime = function (t) {
    if (arguments.length) {
      this._start = t
      var e = this.parent || this._dp
      if (e && (e._sort || !this.parent)) {
        Ot(e, this, t - this._delay)
      }
      return this
    }
    return this._start
  }
  t$prototype.endTime = function (t) {
    return this._start + (C(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
  }
  t$prototype.rawTime = function (t) {
    var e = this.parent || this._dp
    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Tt(e.rawTime(t), this) : this._tTime : this._tTime
  }
  t$prototype.repeat = function (t) {
    return arguments.length ? (this._repeat = t, Dt(this)) : this._repeat
  }
  t$prototype.repeatDelay = function (t) {
    return arguments.length ? (this._rDelay = t, Dt(this)) : this._rDelay
  }
  t$prototype.yoyo = function (t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo
  }
  t$prototype.seek = function (t, e) {
    return this.totalTime(St(this, t), C(e))
  }
  t$prototype.restart = function (t, e) {
    return this.play().totalTime(t ? -this._delay : 0, C(e))
  }
  t$prototype.play = function (t, e) {
    if (null != t) {
      this.seek(t, e)
    }
    return this.reversed(false).paused(false)
  }
  t$prototype.reverse = function (t, e) {
    if (null != t) {
      this.seek(t || this.totalDuration(), e)
    }
    return this.reversed(true).paused(false)
  }
  t$prototype.pause = function (t, e) {
    if (null != t) {
      this.seek(t, e)
    }
    return this.paused(true)
  }
  t$prototype.resume = function () {
    return this.paused(false)
  }
  t$prototype.reversed = function (t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
  }
  t$prototype.invalidate = function () {
    this._initted = 0
    this._zTime = -1e-8
    return this
  }
  t$prototype.isActive = function (t) {
    var e
    var r = this.parent || this._dp
    var /* [auto-meaningful-name] */this$_start = this._start
    return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(true)) >= this$_start && e < this.endTime(true) - 1e-8))
  }
  t$prototype.eventCallback = function (t, e, r) {
    var /* [auto-meaningful-name] */this$vars = this.vars
    return arguments.length > 1 ? (e ? (this$vars[t] = e, r && (this$vars[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete this$vars[t], this) : this$vars[t]
  }
  t$prototype.then = function (t) {
    var e = this
    return new Promise(function (r) {
      var i = b(t) ? t : ht
      var n = function () {
        var /* [auto-meaningful-name] */e$then = e.then
        e.then = null
        if (b(i) && (i = i(e)) && (i.then || i === e)) {
          e.then = e$then
        }
        r(i)
        e.then = e$then
      }
      if (e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0) {
        n()
      } else {
        e._prom = n
      }
    })
  }
  t$prototype.kill = function () {
    Zt(this)
  }
  return t
}()
ft(ye.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: false,
  _rts: 1
})
var xe = function (t) {
  function e(e, r) {
    var n
    if (undefined === e) {
      e = {}
    }
    (n = t.call(this, e, r) || this).labels = {}
    n.smoothChildTiming = !!e.smoothChildTiming
    n.autoRemoveChildren = !!e.autoRemoveChildren
    n._sort = C(e.sortChildren)
    if (n.parent) {
      Mt(n.parent, i(n))
    }
    if (e.scrollTrigger) {
      kt(i(n), e.scrollTrigger)
    }
    return n
  }
  n(e, t)
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.to = function (t, e, r) {
    new De(t, st(arguments, 0, this), St(this, M(e) ? arguments[3] : r))
    return this
  }
  e$prototype.from = function (t, e, r) {
    new De(t, st(arguments, 1, this), St(this, M(e) ? arguments[3] : r))
    return this
  }
  e$prototype.fromTo = function (t, e, r, i) {
    new De(t, st(arguments, 2, this), St(this, M(e) ? arguments[4] : i))
    return this
  }
  e$prototype.set = function (t, e, r) {
    e.duration = 0
    e.parent = this
    if (!dt(e).repeatDelay) {
      e.repeat = 0
    }
    e.immediateRender = !!e.immediateRender
    new De(t, e, St(this, r), 1)
    return this
  }
  e$prototype.call = function (t, e, r) {
    return Ot(this, De.delayedCall(0, t, e), St(this, r))
  }
  e$prototype.staggerTo = function (t, e, r, i, n, s, a) {
    r.duration = e
    r.stagger = r.stagger || i
    r.onComplete = s
    r.onCompleteParams = a
    r.parent = this
    new De(t, r, St(this, n))
    return this
  }
  e$prototype.staggerFrom = function (t, e, r, i, n, s, a) {
    r.runBackwards = 1
    dt(r).immediateRender = C(r.immediateRender)
    return this.staggerTo(t, e, r, i, n, s, a)
  }
  e$prototype.staggerFromTo = function (t, e, r, i, n, s, a, o) {
    i.startAt = r
    dt(i).immediateRender = C(i.immediateRender)
    return this.staggerTo(t, e, i, n, s, a, o)
  }
  e$prototype.render = function (t, e, r) {
    var i
    var n
    var a
    var o
    var u
    var h
    var f
    var /* [auto-meaningful-name] */this$_ts
    var /* [auto-meaningful-name] */this$_start
    var p
    var /* [auto-meaningful-name] */this$_yoyo
    var d
    var /* [auto-meaningful-name] */this$_time = this._time
    var g = this._dirty ? this.totalDuration() : this._tDur
    var /* [auto-meaningful-name] */this$_dur = this._dur
    var y = this !== s && t > g - 1e-8 && t >= 0 ? g : t < 1e-8 ? 0 : t
    var x = this._zTime < 0 !== t < 0 && (this._initted || !this$_dur)
    if (y !== this._tTime || r || x) {
      if (this$_time !== this._time && this$_dur) {
        y += this._time - this$_time
        t += this._time - this$_time
      }
      i = y
      this$_start = this._start
      h = !(this$_ts = this._ts)
      if (x) {
        if (!this$_dur) {
          this$_time = this._zTime
        }
        if (t || !e) {
          this._zTime = t
        }
      }
      if (this._repeat && (this$_yoyo = this._yoyo, u = this$_dur + this._rDelay, ((i = it(y % u)) > this$_dur || g === y) && (i = this$_dur), (o = ~~(y / u)) && o === y / u && (i = this$_dur, o--), p = wt(this._tTime, u), !this$_time && this._tTime && p !== o && (p = o), this$_yoyo && 1 & o && (i = this$_dur - i, d = 1), o !== p && !this._lock)) {
        var w = this$_yoyo && 1 & p
        var T = w === (this$_yoyo && 1 & o)
        if (o < p) {
          w = !w
        }
        this$_time = w ? 0 : this$_dur
        this._lock = 1
        this.render(this$_time || (d ? 0 : it(o * u)), e, !this$_dur)._lock = 0
        if (!e && this.parent) {
          Wt(this, "onRepeat")
        }
        if (this.vars.repeatRefresh && !d) {
          this.invalidate()._lock = 1
        }
        if (this$_time !== this._time || h !== !this._ts) {
          return this
        }
        if (T) {
          this._lock = 2
          this$_time = w ? this$_dur + 1e-4 : -1e-4
          this.render(this$_time, true)
          if (this.vars.repeatRefresh && !d) {
            this.invalidate()
          }
        }
        this._lock = 0
        if (!this._ts && !h) {
          return this
        }
        ce(this, d)
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (f = function (t, e, r) {
        var i
        if (r > e) {
          for (i = t._first; i && i._start <= r;) {
            if (!i._dur && "isPause" === i.data && i._start > e) {
              return i
            }
            i = i._next
          }
        } else {
          for (i = t._last; i && i._start >= r;) {
            if (!i._dur && "isPause" === i.data && i._start < e) {
              return i
            }
            i = i._prev
          }
        }
      }(this, it(this$_time), it(i)))) {
        y -= i - (i = f._start)
      }
      this._tTime = y
      this._time = i
      this._act = !this$_ts
      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate
        this._initted = 1
        this._zTime = t
      }
      if (!(this$_time || !i || e)) {
        Wt(this, "onStart")
      }
      if (i >= this$_time && t >= 0) {
        for (n = this._first; n;) {
          a = n._next
          if ((n._act || i >= n._start) && n._ts && f !== n) {
            if (n.parent !== this) {
              return this.render(t, e, r)
            }
            n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r)
            if (i !== this._time || !this._ts && !h) {
              f = 0
              if (a) {
                y += this._zTime = -1e-8
              }
              break
            }
          }
          n = a
        }
      } else {
        n = this._last
        for (var b = t < 0 ? t : i; n;) {
          a = n._prev
          if ((n._act || b <= n._end) && n._ts && f !== n) {
            if (n.parent !== this) {
              return this.render(t, e, r)
            }
            n.render(n._ts > 0 ? (b - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (b - n._start) * n._ts, e, r)
            if (i !== this._time || !this._ts && !h) {
              f = 0
              if (a) {
                y += this._zTime = b ? -1e-8 : 1e-8
              }
              break
            }
          }
          n = a
        }
      }
      if (f && !e && (this.pause(), f.render(i >= this$_time ? 0 : -1e-8)._zTime = i >= this$_time ? 1 : -1, this._ts)) {
        this._start = this$_start
        bt(this)
        return this.render(t, e, r)
      }
      if (this._onUpdate && !e) {
        Wt(this, "onUpdate", true)
      }
      if (y === g && g >= this.totalDuration() || !y && this$_time) {
        if (!(this$_start !== this._start && Math.abs(this$_ts) === Math.abs(this._ts) || this._lock)) {
          if ((t || !this$_dur) && (y === g && this._ts > 0 || !y && this._ts < 0)) {
            gt(this, 1)
          }
          if (!(e || t < 0 && !this$_time || !y && !this$_time)) {
            Wt(this, y === g ? "onComplete" : "onReverseComplete", true)
            if (this._prom && !(y < g && this.timeScale() > 0)) {
              this._prom()
            }
          }
        }
      }
    }
    return this
  }
  e$prototype.add = function (t, e) {
    var r = this
    if (!M(e)) {
      e = St(this, e)
    }
    if (!(t instanceof ye)) {
      if (Array$isArray(t)) {
        t.forEach(function (t) {
          return r.add(t, e)
        })
        return vt(this)
      }
      if (T(t)) {
        return this.addLabel(t, e)
      }
      if (!b(t)) {
        return this
      }
      t = De.delayedCall(0, t)
    }
    return this !== t ? Ot(this, t, e) : this
  }
  e$prototype.getChildren = function (t, e, r, i) {
    if (undefined === t) {
      t = true
    }
    if (undefined === e) {
      e = true
    }
    if (undefined === r) {
      r = true
    }
    if (undefined === i) {
      i = -d
    }
    for (var n = [], /* [auto-meaningful-name] */this$_first = this._first; this$_first;) {
      if (this$_first._start >= i) {
        if (this$_first instanceof De) {
          if (e) {
            n.push(this$_first)
          }
        } else {
          if (r) {
            n.push(this$_first)
          }
          if (t) {
            n.push.apply(n, this$_first.getChildren(true, e, r))
          }
        }
      }
      this$_first = this$_first._next
    }
    return n
  }
  e$prototype.getById = function (t) {
    for (var e = this.getChildren(1, 1, 1), /* [auto-meaningful-name] */e$length = e.length; e$length--;) {
      if (e[e$length].vars.id === t) {
        return e[e$length]
      }
    }
  }
  e$prototype.remove = function (t) {
    return T(t) ? this.removeLabel(t) : b(t) ? this.killTweensOf(t) : (mt(this, t), t === this._recent && (this._recent = this._last), vt(this))
  }
  e$prototype.totalTime = function (e, r) {
    return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = it(se.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
  }
  e$prototype.addLabel = function (t, e) {
    this.labels[t] = St(this, e)
    return this
  }
  e$prototype.removeLabel = function (t) {
    delete this.labels[t]
    return this
  }
  e$prototype.addPause = function (t, e, r) {
    var i = De.delayedCall(0, e || V, r)
    i.data = "isPause"
    this._hasPause = 1
    return Ot(this, i, St(this, t))
  }
  e$prototype.removePause = function (t) {
    var /* [auto-meaningful-name] */this$_first = this._first
    for (t = St(this, t); this$_first;) {
      if (this$_first._start === t && "isPause" === this$_first.data) {
        gt(this$_first)
      }
      this$_first = this$_first._next
    }
  }
  e$prototype.killTweensOf = function (t, e, r) {
    for (var i = this.getTweensOf(t, r), /* [auto-meaningful-name] */i$length = i.length; i$length--;) {
      if (we !== i[i$length]) {
        i[i$length].kill(t, e)
      }
    }
    return this
  }
  e$prototype.getTweensOf = function (t, e) {
    for (var r, i = [], n = It(t), /* [auto-meaningful-name] */this$_first = this._first; this$_first;) {
      if (this$_first instanceof De) {
        if (!(!nt(this$_first._targets, n) || e && !this$_first.isActive("started" === e))) {
          i.push(this$_first)
        }
      } else {
        if ((r = this$_first.getTweensOf(n, e)).length) {
          i.push.apply(i, r)
        }
      }
      this$_first = this$_first._next
    }
    return i
  }
  e$prototype.tweenTo = function (t, e) {
    e = e || {}
    var r = this
    var i = St(r, t)
    var n = e
    var /* [auto-meaningful-name] */n$startAt = n.startAt
    var /* [auto-meaningful-name] */n$onStart = n.onStart
    var /* [auto-meaningful-name] */n$onStartParams = n.onStartParams
    var u = De.to(r, ft(e, {
      ease: "none",
      lazy: false,
      time: i,
      duration: e.duration || Math.abs((i - (n$startAt && "time" in n$startAt ? n$startAt.time : r._time)) / r.timeScale()) || 1e-8,
      onStart: function () {
        r.pause()
        var t = e.duration || Math.abs((i - r._time) / r.timeScale())
        if (u._dur !== t) {
          At(u, t).render(u._time, true, true)
        }
        if (n$onStart) {
          n$onStart.apply(u, n$onStartParams || [])
        }
      }
    }))
    return u
  }
  e$prototype.tweenFromTo = function (t, e, r) {
    return this.tweenTo(e, ft({
      startAt: {
        time: St(this, t)
      }
    }, r))
  }
  e$prototype.recent = function () {
    return this._recent
  }
  e$prototype.nextLabel = function (t) {
    if (undefined === t) {
      t = this._time
    }
    return Gt(this, St(this, t))
  }
  e$prototype.previousLabel = function (t) {
    if (undefined === t) {
      t = this._time
    }
    return Gt(this, St(this, t), 1)
  }
  e$prototype.currentLabel = function (t) {
    return arguments.length ? this.seek(t, true) : this.previousLabel(this._time + 1e-8)
  }
  e$prototype.shiftChildren = function (t, e, r) {
    if (undefined === r) {
      r = 0
    }
    for (var i, /* [auto-meaningful-name] */this$_first = this._first, /* [auto-meaningful-name] */this$labels = this.labels; this$_first;) {
      if (this$_first._start >= r) {
        this$_first._start += t
      }
      this$_first = this$_first._next
    }
    if (e) {
      for (i in this$labels) if (this$labels[i] >= r) {
        this$labels[i] += t
      }
    }
    return vt(this)
  }
  e$prototype.invalidate = function () {
    var /* [auto-meaningful-name] */this$_first = this._first
    for (this._lock = 0; this$_first;) {
      this$_first.invalidate()
      this$_first = this$_first._next
    }
    return t.prototype.invalidate.call(this)
  }
  e$prototype.clear = function (t) {
    if (undefined === t) {
      t = true
    }
    for (var /* [auto-meaningful-name] */this$_first$_next, /* [auto-meaningful-name] */this$_first = this._first; this$_first;) {
      this$_first$_next = this$_first._next
      this.remove(this$_first)
      this$_first = this$_first$_next
    }
    this._time = this._tTime = this._pTime = 0
    if (t) {
      this.labels = {}
    }
    return vt(this)
  }
  e$prototype.totalDuration = function (t) {
    var /* [auto-meaningful-name] */o$_last$_prev
    var r
    var /* [auto-meaningful-name] */o$_last$_start
    var /* [auto-meaningful-name] */o$parent
    var a = 0
    var o = this
    var /* [auto-meaningful-name] */o$_last = o._last
    var h = d
    if (arguments.length) {
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t))
    }
    if (o._dirty) {
      for (o$parent = o.parent; o$_last;) {
        o$_last$_prev = o$_last._prev
        if (o$_last._dirty) {
          o$_last.totalDuration()
        }
        if ((o$_last$_start = o$_last._start) > h && o._sort && o$_last._ts && !o._lock) {
          o._lock = 1
          Ot(o, o$_last, o$_last$_start - o$_last._delay, 1)._lock = 0
        } else {
          h = o$_last$_start
        }
        if (o$_last$_start < 0 && o$_last._ts) {
          a -= o$_last$_start
          if (!o$parent && !o._dp || o$parent && o$parent.smoothChildTiming) {
            o._start += o$_last$_start / o._ts
            o._time -= o$_last$_start
            o._tTime -= o$_last$_start
          }
          o.shiftChildren(-o$_last$_start, false, -Infinity)
          h = 0
        }
        if ((r = bt(o$_last)) > a && o$_last._ts) {
          a = r
        }
        o$_last = o$_last$_prev
      }
      At(o, o === s && o._time > a ? o._time : a, 1)
      o._dirty = 0
    }
    return o._tDur
  }
  e.updateRoot = function (t) {
    if (s._ts) {
      ot(s, Tt(t, s))
      se$frame = se.frame
    }
    if (se.frame >= H) {
      H += p.autoSleep || 120
      var /* [auto-meaningful-name] */s$_first = s._first
      if ((!s$_first || !s$_first._ts) && p.autoSleep && se._listeners.length < 2) {
        for (; s$_first && !s$_first._ts;) {
          s$_first = s$_first._next
        }
        if (!s$_first) {
          se.sleep()
        }
      }
    }
  }
  return e
}(ye)
ft(xe.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
})
var we
var Te = function (t, e, r, i, n, s, a) {
  var o
  var u
  var h
  var f
  var l
  var c
  var p
  var _
  var d = new qe(this._pt, t, e, 0, 1, Le, null, n)
  var m = 0
  var g = 0
  for (d.b = r, d.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = jt(i)), s && (s(_ = [r, i], t, e), r = _[0], i = _[1]), u = r.match(F) || []; o = F.exec(i);) {
    f = o[0]
    l = i.substring(m, o.index)
    if (h) {
      h = (h + 1) % 5
    } else {
      if ("rgba(" === l.substr(-5)) {
        h = 1
      }
    }
    if (f !== u[g++]) {
      c = parseFloat(u[g - 1]) || 0
      d._pt = {
        _next: d._pt,
        p: l || 1 === g ? l : ",",
        s: c,
        c: "=" === f.charAt(1) ? parseFloat(f.substr(2)) * ("-" === f.charAt(0) ? -1 : 1) : parseFloat(f) - c,
        m: h && h < 4 ? Math.round : 0
      }
      m = F.lastIndex
    }
  }
  d.c = m < i.length ? i.substring(m, i.length) : ""
  d.fp = a
  if (B.test(i) || p) {
    d.e = 0
  }
  this._pt = d
  return d
}
var be = function (t, e, r, i, n, s, a, o, u) {
  if (b(i)) {
    i = i(n || 0, t, s)
  }
  var h
  var f = t[e]
  var l = "get" !== r ? r : b(f) ? u ? t[e.indexOf("set") || !b(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f
  var c = b(f) ? u ? ze : Se : Pe
  if (T(i)) {
    if (~i.indexOf("random(")) {
      i = jt(i)
    }
    if ("=" === i.charAt(1)) {
      i = parseFloat(l) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ft(l) || 0)
    }
  }
  if (l !== i) {
    return isNaN(l + i) ? (!f && !(e in t) && X(e, i), Te.call(this, t, e, l, i, c, o || p.stringFilter, u)) : (h = new qe(this._pt, t, e, +l || 0, i - (l || 0), "boolean" === typeof f ? Be : Ee, 0, c), u && (h.fp = u), a && h.modifier(a, this, t), this._pt = h)
  }
}
var Me = function (t, e, r, i, n, s) {
  var a
  var o
  var u
  var h
  if (W[t] && false !== (a = new W[t]()).init(n, a.rawVars ? e[t] : function (t, e, r, i, n) {
    if (b(t)) {
      t = ke(t, n, e, r, i)
    }
    if (!k(t) || t.style && t.nodeType || Array$isArray(t)) {
      return T(t) ? ke(t, n, e, r, i) : t
    }
    var s
    var a = {}
    for (s in t) a[s] = ke(t[s], n, e, r, i)
    return a
  }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new qe(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== l)) {
    for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--;) {
      u[a._props[h]] = o
    }
  }
  return a
}
var Oe = function t(e, r) {
  var i
  var n
  var a
  var o
  var u
  var h
  var f
  var l
  var c
  var p
  var d
  var m
  var /* [auto-meaningful-name] */e$vars = e.vars
  var /* [auto-meaningful-name] */e$vars$ease = e$vars.ease
  var /* [auto-meaningful-name] */e$vars$startAt = e$vars.startAt
  var /* [auto-meaningful-name] */e$vars$immediateRender = e$vars.immediateRender
  var /* [auto-meaningful-name] */e$vars$lazy = e$vars.lazy
  var /* [auto-meaningful-name] */e$vars$onUpdate = e$vars.onUpdate
  var /* [auto-meaningful-name] */e$vars$onUpdateParams = e$vars.onUpdateParams
  var /* [auto-meaningful-name] */e$vars$callbackScope = e$vars.callbackScope
  var /* [auto-meaningful-name] */e$vars$runBackwards = e$vars.runBackwards
  var /* [auto-meaningful-name] */e$vars$yoyoEase = e$vars.yoyoEase
  var /* [auto-meaningful-name] */e$vars$keyframes = e$vars.keyframes
  var /* [auto-meaningful-name] */e$vars$autoRevert = e$vars.autoRevert
  var /* [auto-meaningful-name] */e$_dur = e._dur
  var /* [auto-meaningful-name] */e$_startAt = e._startAt
  var /* [auto-meaningful-name] */e$_targets = e._targets
  var /* [auto-meaningful-name] */e$parent = e.parent
  var F = e$parent && "nested" === e$parent.data ? e$parent.parent._targets : e$_targets
  var E = "auto" === e._overwrite
  var /* [auto-meaningful-name] */e$timeline = e.timeline
  if (e$timeline && (!e$vars$keyframes || !e$vars$ease)) {
    e$vars$ease = "none"
  }
  e._ease = pe(e$vars$ease, _.ease)
  e._yEase = e$vars$yoyoEase ? le(pe(true === e$vars$yoyoEase ? e$vars$ease : e$vars$yoyoEase, _.ease)) : 0
  if (e$vars$yoyoEase && e._yoyo && !e._repeat) {
    e$vars$yoyoEase = e._yEase
    e._yEase = e._ease
    e._ease = e$vars$yoyoEase
  }
  if (!e$timeline) {
    m = (l = e$_targets[0] ? tt(e$_targets[0]).harness : 0) && e$vars[l.prop]
    i = _t(e$vars, j)
    if (e$_startAt) {
      e$_startAt.render(-1, true).kill()
    }
    if (e$vars$startAt) {
      gt(e._startAt = De.set(e$_targets, ft({
        data: "isStart",
        overwrite: false,
        parent: e$parent,
        immediateRender: true,
        lazy: C(e$vars$lazy),
        startAt: null,
        delay: 0,
        onUpdate: e$vars$onUpdate,
        onUpdateParams: e$vars$onUpdateParams,
        callbackScope: e$vars$callbackScope,
        stagger: 0
      }, e$vars$startAt)))
      if (e$vars$immediateRender) {
        if (r > 0) {
          if (!e$vars$autoRevert) {
            e._startAt = 0
          }
        } else if (e$_dur) {
          return
        }
      }
    } else if (e$vars$runBackwards && e$_dur) {
      if (e$_startAt) {
        if (!e$vars$autoRevert) {
          e._startAt = 0
        }
      } else if (r && (e$vars$immediateRender = false), a = ft({
        overwrite: false,
        data: "isFromStart",
        lazy: e$vars$immediateRender && C(e$vars$lazy),
        immediateRender: e$vars$immediateRender,
        stagger: 0,
        parent: e$parent
      }, i), m && (a[l.prop] = m), gt(e._startAt = De.set(e$_targets, a)), e$vars$immediateRender) {
        if (!r) {
          return
        }
      } else {
        t(e._startAt, 1e-8)
      }
    }
    for (e._pt = 0, e$vars$lazy = e$_dur && C(e$vars$lazy) || e$vars$lazy && !e$_dur, n = 0; n < e$_targets.length; n++) {
      f = (u = e$_targets[n])._gsap || K(e$_targets)[n]._gsap
      e._ptLookup[n] = p = {}
      if (G[f.id]) {
        at()
      }
      d = F === e$_targets ? n : F.indexOf(u)
      if (l && false !== (c = new l()).init(u, m || i, e, d, F)) {
        e._pt = o = new qe(e._pt, u, c.name, 0, 1, c.render, c, 0, c.priority)
        c._props.forEach(function (t) {
          p[t] = o
        })
        if (c.priority) {
          h = 1
        }
      }
      if (!l || m) {
        for (a in i) if (W[a] && (c = Me(a, i, e, d, u, F))) {
          if (c.priority) {
            h = 1
          }
        } else {
          p[a] = o = be.call(e, u, a, "get", i[a], d, F, 0, e$vars.stringFilter)
        }
      }
      if (e._op && e._op[n]) {
        e.kill(u, e._op[n])
      }
      if (E && e._pt) {
        we = e
        s.killTweensOf(u, p, "started")
        we = 0
      }
      if (e._pt && e$vars$lazy) {
        G[f.id] = 1
      }
    }
    if (h) {
      Ne(e)
    }
    if (e._onInit) {
      e._onInit(e)
    }
  }
  e._from = !e$timeline && !!e$vars.runBackwards
  e._onUpdate = e$vars$onUpdate
  e._initted = !!e.parent
}
var ke = function (t, e, r, i, n) {
  return b(t) ? t.call(e, r, i, n) : T(t) && ~t.indexOf("random(") ? jt(t) : t
}
var Ce = $ + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase"
var Ae = (Ce + ",id,stagger,delay,duration,paused,scrollTrigger").split(",")
var De = function (t) {
  function e(e, r, n, a) {
    var o
    if ("number" === typeof r) {
      n.duration = r
      r = n
      n = null
    }
    var u
    var h
    var f
    var /* [auto-meaningful-name] */R$length
    var c
    var _
    var d
    var m
    var /* [auto-meaningful-name] */OT$callThisARDtRNThis$vars = (o = t.call(this, a ? r : dt(r), n) || this).vars
    var /* [auto-meaningful-name] */OT$callThisARDtRNThis$vars$duration = OT$callThisARDtRNThis$vars.duration
    var /* [auto-meaningful-name] */OT$callThisARDtRNThis$vars$delay = OT$callThisARDtRNThis$vars.delay
    var /* [auto-meaningful-name] */OT$callThisARDtRNThis$vars$immediateRender = OT$callThisARDtRNThis$vars.immediateRender
    var /* [auto-meaningful-name] */OT$callThisARDtRNThis$vars$stagger = OT$callThisARDtRNThis$vars.stagger
    var /* [auto-meaningful-name] */OT$callThisARDtRNThis$vars$overwrite = OT$callThisARDtRNThis$vars.overwrite
    var /* [auto-meaningful-name] */OT$callThisARDtRNThis$vars$keyframes = OT$callThisARDtRNThis$vars.keyframes
    var /* [auto-meaningful-name] */OT$callThisARDtRNThis$vars$defaults = OT$callThisARDtRNThis$vars.defaults
    var /* [auto-meaningful-name] */OT$callThisARDtRNThis$vars$scrollTrigger = OT$callThisARDtRNThis$vars.scrollTrigger
    var /* [auto-meaningful-name] */OT$callThisARDtRNThis$vars$yoyoEase = OT$callThisARDtRNThis$vars.yoyoEase
    var /* [auto-meaningful-name] */o$parent = o.parent
    var R = (Array$isArray(e) ? M(e[0]) : "length" in r) ? [e] : It(e)
    o._targets = R.length ? K(R) : N("GSAP target " + e + " not found. https://greensock.com", !p.nullTargetWarn) || []
    o._ptLookup = []
    o._overwrite = OT$callThisARDtRNThis$vars$overwrite
    if (OT$callThisARDtRNThis$vars$keyframes || OT$callThisARDtRNThis$vars$stagger || D(OT$callThisARDtRNThis$vars$duration) || D(OT$callThisARDtRNThis$vars$delay)) {
      r = o.vars;
      (u = o.timeline = new xe({
        data: "nested",
        defaults: OT$callThisARDtRNThis$vars$defaults || {}
      })).kill()
      u.parent = i(o)
      if (OT$callThisARDtRNThis$vars$keyframes) {
        ft(u.vars.defaults, {
          ease: "none"
        })
        OT$callThisARDtRNThis$vars$keyframes.forEach(function (t) {
          return u.to(R, t, ">")
        })
      } else {
        R$length = R.length
        d = OT$callThisARDtRNThis$vars$stagger ? Ut(OT$callThisARDtRNThis$vars$stagger) : V
        if (k(OT$callThisARDtRNThis$vars$stagger)) {
          for (c in OT$callThisARDtRNThis$vars$stagger) if (~Ce.indexOf(c)) {
            if (!m) {
              m = {}
            }
            m[c] = OT$callThisARDtRNThis$vars$stagger[c]
          }
        }
        for (h = 0; h < R$length; h++) {
          for (c in f = {}, r) if (Ae.indexOf(c) < 0) {
            f[c] = r[c]
          }
          f.stagger = 0
          if (OT$callThisARDtRNThis$vars$yoyoEase) {
            f.yoyoEase = OT$callThisARDtRNThis$vars$yoyoEase
          }
          if (m) {
            ct(f, m)
          }
          _ = R[h]
          f.duration = +ke(OT$callThisARDtRNThis$vars$duration, i(o), h, _, R)
          f.delay = (+ke(OT$callThisARDtRNThis$vars$delay, i(o), h, _, R) || 0) - o._delay
          if (!OT$callThisARDtRNThis$vars$stagger && 1 === R$length && f.delay) {
            o._delay = OT$callThisARDtRNThis$vars$delay = f.delay
            o._start += OT$callThisARDtRNThis$vars$delay
            f.delay = 0
          }
          u.to(_, f, d(h, _, R))
        }
        if (u.duration()) {
          OT$callThisARDtRNThis$vars$duration = OT$callThisARDtRNThis$vars$delay = 0
        } else {
          o.timeline = 0
        }
      }
      if (!OT$callThisARDtRNThis$vars$duration) {
        o.duration(OT$callThisARDtRNThis$vars$duration = u.duration())
      }
    } else {
      o.timeline = 0
    }
    if (true === OT$callThisARDtRNThis$vars$overwrite) {
      we = i(o)
      s.killTweensOf(R)
      we = 0
    }
    if (o$parent) {
      Mt(o$parent, i(o))
    }
    if (OT$callThisARDtRNThis$vars$immediateRender || !OT$callThisARDtRNThis$vars$duration && !OT$callThisARDtRNThis$vars$keyframes && o._start === it(o$parent._time) && C(OT$callThisARDtRNThis$vars$immediateRender) && function t(e) {
      return !e || e._ts && t(e.parent)
    }(i(o)) && "nested" !== o$parent.data) {
      o._tTime = -1e-8
      o.render(Math.max(0, -OT$callThisARDtRNThis$vars$delay))
    }
    if (OT$callThisARDtRNThis$vars$scrollTrigger) {
      kt(i(o), OT$callThisARDtRNThis$vars$scrollTrigger)
    }
    return o
  }
  n(e, t)
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.render = function (t, e, r) {
    var i
    var n
    var s
    var a
    var o
    var u
    var h
    var /* [auto-meaningful-name] */this$timeline
    var /* [auto-meaningful-name] */this$_yEase
    var /* [auto-meaningful-name] */this$_time = this._time
    var /* [auto-meaningful-name] */this$_tDur = this._tDur
    var /* [auto-meaningful-name] */this$_dur = this._dur
    var d = t > this$_tDur - 1e-8 && t >= 0 ? this$_tDur : t < 1e-8 ? 0 : t
    if (this$_dur) {
      if (d !== this._tTime || !t || r || this._startAt && this._zTime < 0 !== t < 0) {
        i = d
        this$timeline = this.timeline
        if (this._repeat) {
          a = this$_dur + this._rDelay
          if ((i = it(d % a)) > this$_dur || this$_tDur === d) {
            i = this$_dur
          }
          if ((s = ~~(d / a)) && s === d / a) {
            i = this$_dur
            s--
          }
          if (u = this._yoyo && 1 & s) {
            this$_yEase = this._yEase
            i = this$_dur - i
          }
          o = wt(this._tTime, a)
          if (i === this$_time && !r && this._initted) {
            return this
          }
          if (s !== o) {
            if (this$timeline && this._yEase) {
              ce(this$timeline, u)
            }
            if (!(!this.vars.repeatRefresh || u || this._lock)) {
              this._lock = r = 1
              this.render(it(a * s), true).invalidate()._lock = 0
            }
          }
        }
        if (!this._initted) {
          if (Ct(this, i, r, e)) {
            this._tTime = 0
            return this
          }
          if (this$_dur !== this._dur) {
            return this.render(t, e, r)
          }
        }
        for (this._tTime = d, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (this$_yEase || this._ease)(i / this$_dur), this._from && (this.ratio = h = 1 - h), i && !this$_time && !e && Wt(this, "onStart"), n = this._pt; n;) {
          n.r(h, n.d)
          n = n._next
        }
        if (!(this$timeline && this$timeline.render(t < 0 ? t : !i && u ? -1e-8 : this$timeline._dur * h, e, r))) {
          if (this._startAt) {
            this._zTime = t
          }
        }
        if (this._onUpdate && !e) {
          if (t < 0 && this._startAt) {
            this._startAt.render(t, true, r)
          }
          Wt(this, "onUpdate")
        }
        if (this._repeat && s !== o && this.vars.onRepeat && !e && this.parent) {
          Wt(this, "onRepeat")
        }
        if (!(d !== this._tDur && d || this._tTime !== d)) {
          if (t < 0 && this._startAt && !this._onUpdate) {
            this._startAt.render(t, true, true)
          }
          if ((t || !this$_dur) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0)) {
            gt(this, 1)
          }
          if (!(e || t < 0 && !this$_time || !d && !this$_time)) {
            Wt(this, d === this$_tDur ? "onComplete" : "onReverseComplete", true)
            if (this._prom && !(d < this$_tDur && this.timeScale() > 0)) {
              this._prom()
            }
          }
        }
      }
    } else {
      !function (t, e, r, i) {
        var n
        var s
        var /* [auto-meaningful-name] */t$ratio = t.ratio
        var o = e < 0 || !e && t$ratio && !t._start && t._zTime > 1e-8 && !t._dp._lock || t._ts < 0 || t._dp._ts < 0 ? 0 : 1
        var /* [auto-meaningful-name] */t$_rDelay = t._rDelay
        var h = 0
        if (t$_rDelay && t._repeat) {
          h = Rt(0, t._tDur, e)
          if (wt(h, t$_rDelay) !== (s = wt(t._tTime, t$_rDelay))) {
            t$ratio = 1 - o
            if (t.vars.repeatRefresh && t._initted) {
              t.invalidate()
            }
          }
        }
        if (t._initted || !Ct(t, e, i, r)) {
          if (o !== t$ratio || i || 1e-8 === t._zTime || !e && t._zTime) {
            for (s = t._zTime, t._zTime = e || (r ? 1e-8 : 0), r || (r = e && !s), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, r || Wt(t, "onStart"), n = t._pt; n;) {
              n.r(o, n.d)
              n = n._next
            }
            if (t._startAt && e < 0) {
              t._startAt.render(e, true, true)
            }
            if (t._onUpdate && !r) {
              Wt(t, "onUpdate")
            }
            if (h && t._repeat && !r && t.parent) {
              Wt(t, "onRepeat")
            }
            if ((e >= t._tDur || e < 0) && t.ratio === o) {
              if (o) {
                gt(t, 1)
              }
              if (!r) {
                Wt(t, o ? "onComplete" : "onReverseComplete", true)
                if (t._prom) {
                  t._prom()
                }
              }
            }
          } else if (!t._zTime) {
            t._zTime = e
          }
        }
      }(this, t, e, r)
    }
    return this
  }
  e$prototype.targets = function () {
    return this._targets
  }
  e$prototype.invalidate = function () {
    this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0
    this._ptLookup = []
    if (this.timeline) {
      this.timeline.invalidate()
    }
    return t.prototype.invalidate.call(this)
  }
  e$prototype.kill = function (t, e) {
    if (undefined === e) {
      e = "all"
    }
    if (!t && (!e || "all" === e) && (this._lazy = 0, this.parent)) {
      return Zt(this)
    }
    if (this.timeline) {
      var r = this.timeline.totalDuration()
      if (!this.timeline.killTweensOf(t, e, we && true !== we.vars.overwrite)._first) {
        Zt(this)
      }
      if (this.parent && r !== this.timeline.totalDuration()) {
        At(this, this._dur * this.timeline._tDur / r)
      }
      return this
    }
    var i
    var n
    var s
    var a
    var o
    var u
    var h
    var /* [auto-meaningful-name] */this$_targets = this._targets
    var l = t ? It(t) : this$_targets
    var /* [auto-meaningful-name] */this$_ptLookup = this._ptLookup
    var /* [auto-meaningful-name] */this$_pt = this._pt
    if ((!e || "all" === e) && function (t, e) {
      for (var /* [auto-meaningful-name] */t$length = t.length, i = t$length === e.length; i && t$length-- && t[t$length] === e[t$length];) {
        ;
      }
      return t$length < 0
    }(this$_targets, l)) {
      return Zt(this)
    }
    for (i = this._op = this._op || [], "all" !== e && (T(e) && (o = {}, rt(e, function (t) {
      return o[t] = 1
    }), e = o), e = function (t, e) {
      var r
      var i
      var n
      var s
      var a = t[0] ? tt(t[0]).harness : 0
      var o = a && a.aliases
      if (!o) {
        return e
      }
      for (i in r = ct({}, e), o) if (i in r) {
        for (n = (s = o[i].split(",")).length; n--;) {
          r[s[n]] = r[i]
        }
      }
      return r
    }(this$_targets, e)), h = this$_targets.length; h--;) {
      if (~l.indexOf(this$_targets[h])) {
        for (o in n = this$_ptLookup[h], "all" === e ? (i[h] = e, a = n, s = {}) : (s = i[h] = i[h] || {}, a = e), a) {
          if (u = n && n[o]) {
            if (!("kill" in u.d && true !== u.d.kill(o))) {
              mt(this, u, "_pt")
            }
            delete n[o]
          }
          if ("all" !== s) {
            s[o] = 1
          }
        }
      }
    }
    if (this._initted && !this._pt && this$_pt) {
      Zt(this)
    }
    return this
  }
  e.to = function (t, r) {
    return new e(t, r, arguments[2])
  }
  e.from = function (t, r) {
    return new e(t, st(arguments, 1))
  }
  e.delayedCall = function (t, r, i, n) {
    return new e(r, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: t,
      onComplete: r,
      onReverseComplete: r,
      onCompleteParams: i,
      onReverseCompleteParams: i,
      callbackScope: n
    })
  }
  e.fromTo = function (t, r, i) {
    return new e(t, st(arguments, 2))
  }
  e.set = function (t, r) {
    r.duration = 0
    if (!r.repeatDelay) {
      r.repeat = 0
    }
    return new e(t, r)
  }
  e.killTweensOf = function (t, e, r) {
    return s.killTweensOf(t, e, r)
  }
  return e
}(ye)
ft(De.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
})
rt("staggerTo,staggerFrom,staggerFromTo", function (t) {
  De[t] = function () {
    var e = new xe()
    var r = $slice.call(arguments, 0)
    r.splice("staggerFromTo" === t ? 5 : 4, 0, 0)
    return e[t].apply(e, r)
  }
})
var Pe = function (t, e, r) {
  return t[e] = r
}
var Se = function (t, e, r) {
  return t[e](r)
}
var ze = function (t, e, r, i) {
  return t[e](i.fp, r)
}
var Re = function (t, e, r) {
  return t.setAttribute(e, r)
}
var Fe = function (t, e) {
  return b(t[e]) ? Se : O(t[e]) && t.setAttribute ? Re : Pe
}
var Ee = function (t, e) {
  return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
}
var Be = function (t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e)
}
var Le = function (t, e) {
  var /* [auto-meaningful-name] */e$_pt = e._pt
  var i = ""
  if (!t && e.b) {
    i = e.b
  } else if (1 === t && e.e) {
    i = e.e
  } else {
    for (; e$_pt;) {
      i = e$_pt.p + (e$_pt.m ? e$_pt.m(e$_pt.s + e$_pt.c * t) : Math.round(1e4 * (e$_pt.s + e$_pt.c * t)) / 1e4) + i
      e$_pt = e$_pt._next
    }
    i += e.c
  }
  e.set(e.t, e.p, i, e)
}
var Ie = function (t, e) {
  for (var /* [auto-meaningful-name] */e$_pt = e._pt; e$_pt;) {
    e$_pt.r(t, e$_pt.d)
    e$_pt = e$_pt._next
  }
}
var Ye = function (t, e, r, i) {
  for (var /* [auto-meaningful-name] */this$_pt$_next, /* [auto-meaningful-name] */this$_pt = this._pt; this$_pt;) {
    this$_pt$_next = this$_pt._next
    if (this$_pt.p === i) {
      this$_pt.modifier(t, e, r)
    }
    this$_pt = this$_pt$_next
  }
}
var Ue = function (t) {
  for (var e, /* [auto-meaningful-name] */this$_pt$_next, /* [auto-meaningful-name] */this$_pt = this._pt; this$_pt;) {
    this$_pt$_next = this$_pt._next
    if (this$_pt.p === t && !this$_pt.op || this$_pt.op === t) {
      mt(this, this$_pt, "_pt")
    } else {
      if (!this$_pt.dep) {
        e = 1
      }
    }
    this$_pt = this$_pt$_next
  }
  return !e
}
var Xe = function (t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
}
var Ne = function (t) {
  for (var /* [auto-meaningful-name] */t$_pt$_next, r, i, n, /* [auto-meaningful-name] */t$_pt = t._pt; t$_pt;) {
    for (t$_pt$_next = t$_pt._next, r = i; r && r.pr > t$_pt.pr;) {
      r = r._next
    }
    if (t$_pt._prev = r ? r._prev : n) {
      t$_pt._prev._next = t$_pt
    } else {
      i = t$_pt
    }
    if (t$_pt._next = r) {
      r._prev = t$_pt
    } else {
      n = t$_pt
    }
    t$_pt = t$_pt$_next
  }
  t._pt = i
}
var qe = function () {
  function t(t, e, r, i, n, s, a, o, u) {
    this.t = e
    this.s = i
    this.c = n
    this.p = r
    this.r = s || Ee
    this.d = a || this
    this.set = o || Pe
    this.pr = u || 0
    this._next = t
    if (t) {
      t._prev = this
    }
  }
  t.prototype.modifier = function (t, e, r) {
    this.mSet = this.mSet || this.set
    this.set = Xe
    this.m = t
    this.mt = r
    this.tween = e
  }
  return t
}()
rt($ + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
  return j[t] = 1
})
I.TweenMax = I.TweenLite = De
I.TimelineLite = I.TimelineMax = xe
s = new xe({
  sortChildren: false,
  defaults: _,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
})
p.stringFilter = ne
var Ve = {
  registerPlugin: function () {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, e = new Array(arguments$length), r = 0; r < arguments$length; r++) {
      e[r] = arguments[r]
    }
    e.forEach(function (t) {
      return Ht(t)
    })
  },
  timeline: function (t) {
    return new xe(t)
  },
  getTweensOf: function (t, e) {
    return s.getTweensOf(t, e)
  },
  getProperty: function (t, e, r, i) {
    if (T(t)) {
      t = It(t)[0]
    }
    var /* [auto-meaningful-name] */ttT$get = tt(t || {}).get
    var s = r ? ht : ut
    if ("native" === r) {
      r = ""
    }
    return t ? e ? s((W[e] && W[e].get || ttT$get)(t, e, r, i)) : function (e, r, i) {
      return s((W[e] && W[e].get || ttT$get)(t, e, r, i))
    } : t
  },
  quickSetter: function (t, e, r) {
    if ((t = It(t)).length > 1) {
      var i = t.map(function (t) {
        return Ge.quickSetter(t, e, r)
      })
      var /* [auto-meaningful-name] */i$length = i.length
      return function (t) {
        for (var e = i$length; e--;) {
          i[e](t)
        }
      }
    }
    t = t[0] || {}
    var s = W[e]
    var a = tt(t)
    var o = a.harness && (a.harness.aliases || {})[e] || e
    var u = s ? function (e) {
      var i = new s()
      l._pt = 0
      i.init(t, r ? e + r : e, l, 0, [t])
      i.render(1, i)
      if (l._pt) {
        Ie(1, l)
      }
    } : a.set(t, o)
    return s ? u : function (e) {
      return u(t, o, r ? e + r : e, a, 1)
    }
  },
  isTweening: function (t) {
    return s.getTweensOf(t, true).length > 0
  },
  defaults: function (t) {
    if (t && t.ease) {
      t.ease = pe(t.ease, _.ease)
    }
    return pt(_, t || {})
  },
  config: function (t) {
    return pt(p, t || {})
  },
  registerEffect: function (t) {
    var /* [auto-meaningful-name] */t$name = t.name
    var /* [auto-meaningful-name] */t$effect = t.effect
    var /* [auto-meaningful-name] */t$plugins = t.plugins
    var /* [auto-meaningful-name] */t$defaults = t.defaults
    var /* [auto-meaningful-name] */t$extendTimeline = t.extendTimeline;
    (t$plugins || "").split(",").forEach(function (t) {
      return t && !W[t] && !I[t] && N(t$name + " effect requires " + t + " plugin.")
    })
    Z[t$name] = function (t, e, i) {
      return t$effect(It(t), ft(e || {}, t$defaults), i)
    }
    if (t$extendTimeline) {
      xe.prototype[t$name] = function (t, r, i) {
        return this.add(Z[t$name](t, k(r) ? r : (i = r) && {}, this), i)
      }
    }
  },
  registerEase: function (t, e) {
    oe[t] = pe(e)
  },
  parseEase: function (t, e) {
    return arguments.length ? pe(t, e) : oe
  },
  getById: function (t) {
    return s.getById(t)
  },
  exportRoot: function (t, e) {
    if (undefined === t) {
      t = {}
    }
    var r
    var /* [auto-meaningful-name] */r$_next
    var n = new xe(t)
    for (n.smoothChildTiming = C(t.smoothChildTiming), s.remove(n), n._dp = 0, n._time = n._tTime = s._time, r = s._first; r;) {
      r$_next = r._next
      if (!(!e && !r._dur && r instanceof De && r.vars.onComplete === r._targets[0])) {
        Ot(n, r, r._start - r._delay)
      }
      r = r$_next
    }
    Ot(s, n, 0)
    return n
  },
  utils: {
    wrap: function t(e, r, i) {
      var n = r - e
      return Array$isArray(e) ? Vt(e, t(0, e.length), r) : zt(i, function (t) {
        return (n + (t - e) % n) % n + e
      })
    },
    wrapYoyo: function t(e, r, i) {
      var n = r - e
      var s = 2 * n
      return Array$isArray(e) ? Vt(e, t(0, e.length - 1), r) : zt(i, function (t) {
        return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
      })
    },
    distribute: Ut,
    random: qt,
    snap: Nt,
    normalize: function (t, e, r) {
      return Qt(t, e, 0, 1, r)
    },
    getUnit: Ft,
    clamp: function (t, e, r) {
      return zt(r, function (r) {
        return Rt(t, e, r)
      })
    },
    splitColor: Kt,
    toArray: It,
    mapRange: Qt,
    pipe: function () {
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, e = new Array(arguments$length), r = 0; r < arguments$length; r++) {
        e[r] = arguments[r]
      }
      return function (t) {
        return e.reduce(function (t, e) {
          return e(t)
        }, t)
      }
    },
    unitize: function (t, e) {
      return function (r) {
        return t(parseFloat(r)) + (e || Ft(r))
      }
    },
    interpolate: function t(e, r, i, n) {
      var s = isNaN(e + r) ? 0 : function (t) {
        return (1 - t) * e + t * r
      }
      if (!s) {
        var a
        var o
        var u
        var h
        var f
        var l = T(e)
        var c = {}
        if (true === i && (n = 1)) {
          i = null
        }
        if (l) {
          e = {
            p: e
          }
          r = {
            p: r
          }
        } else if (Array$isArray(e) && !Array$isArray(r)) {
          for (u = [], h = e.length, f = h - 2, o = 1; o < h; o++) {
            u.push(t(e[o - 1], e[o]))
          }
          h--
          s = function (t) {
            t *= h
            var e = Math.min(f, ~~t)
            return u[e](t - e)
          }
          i = r
        } else if (!n) {
          e = ct(Array$isArray(e) ? [] : {}, e)
        }
        if (!u) {
          for (a in r) be.call(c, e, a, "get", r[a])
          s = function (t) {
            return Ie(t, c) || (l ? e.p : e)
          }
        }
      }
      return zt(i, s)
    },
    shuffle: Yt
  },
  install: U,
  effects: Z,
  ticker: se,
  updateRoot: xe.updateRoot,
  plugins: W,
  globalTimeline: s,
  core: {
    PropTween: qe,
    globals: q,
    Tween: De,
    Timeline: xe,
    Animation: ye,
    getCache: tt,
    _removeLinkedListItem: mt
  }
}
rt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return Ve[t] = De[t]
})
se.add(xe.updateRoot)
l = Ve.to({}, {
  duration: 0
})
var je = function (t, e) {
  for (var /* [auto-meaningful-name] */t$_pt = t._pt; t$_pt && t$_pt.p !== e && t$_pt.op !== e && t$_pt.fp !== e;) {
    t$_pt = t$_pt._next
  }
  return t$_pt
}
var Qe = function (t, e) {
  return {
    name: t,
    rawVars: 1,
    init: function (t, r, i) {
      i._onInit = function (t) {
        var i
        var n
        if (T(r)) {
          i = {}
          rt(r, function (t) {
            return i[t] = 1
          })
          r = i
        }
        if (e) {
          for (n in i = {}, r) i[n] = e(r[n])
          r = i
        }
        !function (t, e) {
          var r
          var i
          var n
          var /* [auto-meaningful-name] */t$_targets = t._targets
          for (r in e) for (i = t$_targets.length; i--;) {
            if ((n = t._ptLookup[i][r]) && (n = n.d)) {
              if (n._pt) {
                n = je(n, r)
              }
              if (n && n.modifier) {
                n.modifier(e[r], t, t$_targets[i], r)
              }
            }
          }
        }(t, r)
      }
    }
  }
}
var Ge = Ve.registerPlugin({
  name: "attr",
  init: function (t, e, r, i, n) {
    var s
    var a
    for (s in e) {
      if (a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, n, 0, 0, s)) {
        a.op = s
      }
      this._props.push(s)
    }
  }
}, {
  name: "endArray",
  init: function (t, e) {
    for (var /* [auto-meaningful-name] */e$length = e.length; e$length--;) {
      this.add(t, e$length, t[e$length] || 0, e[e$length])
    }
  }
}, Qe("roundProps", Xt), Qe("modifiers"), Qe("snap", Nt)) || Ve
De.version = xe.version = Ge.version = "3.3.4"
h = 1
if (A()) {
  ae()
}
var We
var /* [auto-meaningful-name] */We$document
var /* [auto-meaningful-name] */We$document$documentElement
var Je
var $e
var Ke
var tr
var er
var /* [auto-meaningful-name] */oe$Power0 = oe.Power0
var /* [auto-meaningful-name] */oe$Power1 = oe.Power1
var /* [auto-meaningful-name] */oe$Power2 = oe.Power2
var /* [auto-meaningful-name] */oe$Power3 = oe.Power3
var /* [auto-meaningful-name] */oe$Power4 = oe.Power4
var /* [auto-meaningful-name] */oe$Linear = oe.Linear
var /* [auto-meaningful-name] */oe$Quad = oe.Quad
var /* [auto-meaningful-name] */oe$Cubic = oe.Cubic
var /* [auto-meaningful-name] */oe$Quart = oe.Quart
var /* [auto-meaningful-name] */oe$Quint = oe.Quint
var /* [auto-meaningful-name] */oe$Strong = oe.Strong
var /* [auto-meaningful-name] */oe$Elastic = oe.Elastic
var /* [auto-meaningful-name] */oe$Back = oe.Back
var /* [auto-meaningful-name] */oe$SteppedEase = oe.SteppedEase
var /* [auto-meaningful-name] */oe$Bounce = oe.Bounce
var /* [auto-meaningful-name] */oe$Sine = oe.Sine
var /* [auto-meaningful-name] */oe$Expo = oe.Expo
var /* [auto-meaningful-name] */oe$Circ = oe.Circ
var xr = {}
var wr = 180 / Math.PI
var Tr = Math.PI / 180
var /* [auto-meaningful-name] */Math$atan2 = Math.atan2
var Mr = /([A-Z])/g
var Or = /(?:left|right|width|margin|padding|x)/i
var kr = /[\s,\(]\S/
var Cr = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}
var Ar = function (t, e) {
  return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
}
var Dr = function (t, e) {
  return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
}
var Pr = function (t, e) {
  return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
}
var Sr = function (t, e) {
  var r = e.s + e.c * t
  e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
}
var zr = function (t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e)
}
var Rr = function (t, e) {
  return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
}
var Fr = function (t, e, r) {
  return t.style[e] = r
}
var Er = function (t, e, r) {
  return t.style.setProperty(e, r)
}
var Br = function (t, e, r) {
  return t._gsap[e] = r
}
var Lr = function (t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r
}
var Ir = function (t, e, r, i, n) {
  var /* [auto-meaningful-name] */t$_gsap = t._gsap
  t$_gsap.scaleX = t$_gsap.scaleY = r
  t$_gsap.renderTransform(n, t$_gsap)
}
var Yr = function (t, e, r, i, n) {
  var /* [auto-meaningful-name] */t$_gsap = t._gsap
  t$_gsap[e] = r
  t$_gsap.renderTransform(n, t$_gsap)
}
var /* [auto-meaningful-name] */Transform = "transform"
var Xr = Transform + "Origin"
var Nr = function (t, e) {
  var r = We$document.createElementNS ? We$document.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : We$document.createElement(t)
  return r.style ? r : We$document.createElement(t)
}
var qr = function t(e, r, i) {
  var n = getComputedStyle(e)
  return n[r] || n.getPropertyValue(r.replace(Mr, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, jr(r) || r, 1) || ""
}
var Vr = "O,Moz,ms,Ms,Webkit".split(",")
var jr = function (t, e, r) {
  var /* [auto-meaningful-name] */E$e$style = (e || $e).style
  var n = 5
  if (t in E$e$style && !r) {
    return t
  }
  for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Vr[n] + t in E$e$style);) {
    ;
  }
  return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Vr[n] : "") + t
}
var Qr = function () {
  if ("undefined" !== typeof window && window.document) {
    We = window
    We$document = We.document
    We$document$documentElement = We$document.documentElement
    $e = Nr("div") || {
      style: {}
    }
    Ke = Nr("div")
    Transform = jr(Transform)
    Xr = jr(Xr)
    $e.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"
    er = !!jr("perspective")
    Je = 1
  }
}
var Gr = function t(e) {
  var r
  var i = Nr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg")
  var /* [auto-meaningful-name] */this$parentNode = this.parentNode
  var /* [auto-meaningful-name] */this$nextSibling = this.nextSibling
  var /* [auto-meaningful-name] */this$style$cssText = this.style.cssText
  We$document$documentElement.appendChild(i)
  i.appendChild(this)
  this.style.display = "block"
  if (e) {
    try {
      r = this.getBBox()
      this._gsapBBox = this.getBBox
      this.getBBox = t
    } catch (o) {}
  } else if (this._gsapBBox) {
    r = this._gsapBBox()
  }
  if (this$parentNode) {
    if (this$nextSibling) {
      this$parentNode.insertBefore(this, this$nextSibling)
    } else {
      this$parentNode.appendChild(this)
    }
  }
  We$document$documentElement.removeChild(i)
  this.style.cssText = this$style$cssText
  return r
}
var Wr = function (t, e) {
  for (var /* [auto-meaningful-name] */e$length = e.length; e$length--;) {
    if (t.hasAttribute(e[e$length])) {
      return t.getAttribute(e[e$length])
    }
  }
}
var Zr = function (t) {
  var e
  try {
    e = t.getBBox()
  } catch (r) {
    e = Gr.call(t, true)
  }
  if (!(e && (e.width || e.height) || t.getBBox === Gr)) {
    e = Gr.call(t, true)
  }
  return !e || e.width || e.x || e.y ? e : {
    x: +Wr(t, ["x", "cx", "x1"]) || 0,
    y: +Wr(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  }
}
var Hr = function (t) {
  return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Zr(t))
}
var Jr = function (t, e) {
  if (e) {
    var /* [auto-meaningful-name] */t$style = t.style
    if (e in xr) {
      e = Transform
    }
    if (t$style.removeProperty) {
      if (!("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6))) {
        e = "-" + e
      }
      t$style.removeProperty(e.replace(Mr, "-$1").toLowerCase())
    } else {
      t$style.removeAttribute(e)
    }
  }
}
var $r = function (t, e, r, i, n, s) {
  var a = new qe(t._pt, e, r, 0, 1, s ? Rr : zr)
  t._pt = a
  a.b = i
  a.e = n
  t._props.push(r)
  return a
}
var Kr = {
  deg: 1,
  rad: 1,
  turn: 1
}
var ti = function t(e, r, i, n) {
  var s
  var a
  var o
  var u
  var h = parseFloat(i) || 0
  var f = (i + "").trim().substr((h + "").length) || "px"
  var /* [auto-meaningful-name] */$e$style = $e.style
  var c = Or.test(r)
  var p = "svg" === e.tagName.toLowerCase()
  var _ = (p ? "client" : "offset") + (c ? "Width" : "Height")
  var d = "px" === n
  var m = "%" === n
  return n === f || !h || Kr[n] || Kr[f] ? h : ("px" !== f && !d && (h = t(e, r, i, "px")), u = e.getCTM && Hr(e), m && (xr[r] || ~r.indexOf("adius")) ? it(h / (u ? e.getBBox()[c ? "width" : "height"] : e[_]) * 100) : ($e$style[c ? "width" : "height"] = 100 + (d ? f : n), a = ~r.indexOf("adius") || "em" === n && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== We$document && a.appendChild || (a = We$document.body), (o = a._gsap) && m && o.width && c && o.time === se.time ? it(h / o.width * 100) : ((m || "%" === f) && ($e$style.position = qr(e, "position")), a === e && ($e$style.position = "static"), a.appendChild($e), s = $e[_], a.removeChild($e), $e$style.position = "absolute", c && m && ((o = tt(a)).time = se.time, o.width = a[_]), it(d ? s * h / 100 : s && h ? 100 / s * h : 0))))
}
var ei = function (t, e, r, i) {
  var n
  if (!Je) {
    Qr()
  }
  if (e in Cr && "transform" !== e && ~(e = Cr[e]).indexOf(",")) {
    e = e.split(",")[0]
  }
  if (xr[e] && "transform" !== e) {
    n = pi(t, i)
    n = "transformOrigin" !== e ? n[e] : _i(qr(t, Xr)) + " " + n.zOrigin + "px"
  } else {
    if (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) {
      n = ai[e] && ai[e](t, e, r) || qr(t, e) || et(t, e) || ("opacity" === e ? 1 : 0)
    }
  }
  return r && !~(n + "").indexOf(" ") ? ti(t, e, n, r) + r : n
}
var ri = function (t, e, r, i) {
  if (!r || "none" === r) {
    var n = jr(e, t, 1)
    var s = n && qr(t, n, 1)
    if (s && s !== r) {
      e = n
      r = s
    }
  }
  var a
  var o
  var u
  var h
  var f
  var l
  var c
  var _
  var d
  var m
  var g
  var v
  var y = new qe(this._pt, t.style, e, 0, 1, Le)
  var x = 0
  var w = 0
  y.b = r
  y.e = i
  r += ""
  if ("auto" === (i += "")) {
    t.style[e] = i
    i = qr(t, e) || i
    t.style[e] = r
  }
  ne(a = [r, i])
  i = a[1]
  u = (r = a[0]).match(R) || []
  if ((i.match(R) || []).length) {
    for (; o = R.exec(i);) {
      c = o[0]
      d = i.substring(x, o.index)
      if (f) {
        f = (f + 1) % 5
      } else {
        if (!("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5))) {
          f = 1
        }
      }
      if (c !== (l = u[w++] || "")) {
        h = parseFloat(l) || 0
        g = l.substr((h + "").length)
        if (v = "=" === c.charAt(1) ? +(c.charAt(0) + "1") : 0) {
          c = c.substr(2)
        }
        _ = parseFloat(c)
        m = c.substr((_ + "").length)
        x = R.lastIndex - m.length
        if (!m) {
          m = m || p.units[e] || g
          if (x === i.length) {
            i += m
            y.e += m
          }
        }
        if (g !== m) {
          h = ti(t, e, l, m) || 0
        }
        y._pt = {
          _next: y._pt,
          p: d || 1 === w ? d : ",",
          s: h,
          c: v ? v * _ : _ - h,
          m: f && f < 4 ? Math.round : 0
        }
      }
    }
    y.c = x < i.length ? i.substring(x, i.length) : ""
  } else {
    y.r = "display" === e && "none" === i ? Rr : zr
  }
  if (B.test(i)) {
    y.e = 0
  }
  this._pt = y
  return y
}
var ii = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}
var ni = function (t) {
  var e = t.split(" ")
  var r = e[0]
  var i = e[1] || "50%"
  if (!("top" !== r && "bottom" !== r && "left" !== i && "right" !== i)) {
    t = r
    r = i
    i = t
  }
  e[0] = ii[r] || r
  e[1] = ii[i] || i
  return e.join(" ")
}
var si = function (t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r
    var i
    var n
    var s = e.t
    var /* [auto-meaningful-name] */s$style = s.style
    var o = e.u
    var /* [auto-meaningful-name] */s$_gsap = s._gsap
    if ("all" === o || true === o) {
      s$style.cssText = ""
      i = 1
    } else {
      for (n = (o = o.split(",")).length; --n > -1;) {
        r = o[n]
        if (xr[r]) {
          i = 1
          r = "transformOrigin" === r ? Xr : Transform
        }
        Jr(s, r)
      }
    }
    if (i) {
      Jr(s, Transform)
      if (s$_gsap) {
        if (s$_gsap.svg) {
          s.removeAttribute("transform")
        }
        pi(s, 1)
        s$_gsap.uncache = 1
      }
    }
  }
}
var ai = {
  clearProps: function (t, e, r, i, n) {
    if ("isFromStart" !== n.data) {
      var s = t._pt = new qe(t._pt, e, r, 0, 0, si)
      s.u = i
      s.pr = -10
      s.tween = n
      t._props.push(r)
      return 1
    }
  }
}
var oi = [1, 0, 0, 1, 0, 0]
var ui = {}
var hi = function (t) {
  return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
}
var fi = function (t) {
  var e = qr(t, Transform)
  return hi(e) ? oi : e.substr(7).match(z).map(it)
}
var li = function (t, e) {
  var /* [auto-meaningful-name] */t$parentNode
  var /* [auto-meaningful-name] */t$nextSibling
  var n
  var s
  var a = t._gsap || tt(t)
  var /* [auto-meaningful-name] */t$style = t.style
  var u = fi(t)
  return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? oi : u : (u !== oi || t.offsetParent || t === We$document$documentElement || a.svg || (n = t$style.display, t$style.display = "block", (t$parentNode = t.parentNode) && t.offsetParent || (s = 1, t$nextSibling = t.nextSibling, We$document$documentElement.appendChild(t)), u = fi(t), n ? t$style.display = n : Jr(t, "display"), s && (t$nextSibling ? t$parentNode.insertBefore(t, t$nextSibling) : t$parentNode ? t$parentNode.appendChild(t) : We$document$documentElement.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
}
var ci = function (t, e, r, i, n, s) {
  var a
  var o
  var u
  var /* [auto-meaningful-name] */t$_gsap = t._gsap
  var f = n || li(t, true)
  var l = t$_gsap.xOrigin || 0
  var c = t$_gsap.yOrigin || 0
  var p = t$_gsap.xOffset || 0
  var _ = t$_gsap.yOffset || 0
  var d = f[0]
  var m = f[1]
  var g = f[2]
  var v = f[3]
  var y = f[4]
  var x = f[5]
  var w = e.split(" ")
  var T = parseFloat(w[0]) || 0
  var b = parseFloat(w[1]) || 0
  if (r) {
    if (f !== oi && (o = d * v - m * g)) {
      u = T * (-m / o) + b * (d / o) - (d * x - m * y) / o
      T = T * (v / o) + b * (-g / o) + (g * x - v * y) / o
      b = u
    }
  } else {
    T = (a = Zr(t)).x + (~w[0].indexOf("%") ? T / 100 * a.width : T)
    b = a.y + (~(w[1] || w[0]).indexOf("%") ? b / 100 * a.height : b)
  }
  if (i || false !== i && t$_gsap.smooth) {
    y = T - l
    x = b - c
    t$_gsap.xOffset = p + (y * d + x * g) - y
    t$_gsap.yOffset = _ + (y * m + x * v) - x
  } else {
    t$_gsap.xOffset = t$_gsap.yOffset = 0
  }
  t$_gsap.xOrigin = T
  t$_gsap.yOrigin = b
  t$_gsap.smooth = !!i
  t$_gsap.origin = e
  t$_gsap.originIsAbsolute = !!r
  t.style[Xr] = "0px 0px"
  if (s) {
    $r(s, t$_gsap, "xOrigin", l, T)
    $r(s, t$_gsap, "yOrigin", c, b)
    $r(s, t$_gsap, "xOffset", p, t$_gsap.xOffset)
    $r(s, t$_gsap, "yOffset", _, t$_gsap.yOffset)
  }
  t.setAttribute("data-svg-origin", T + " " + b)
}
var pi = function (t, e) {
  var r = t._gsap || new ve(t)
  if ("x" in r && !e && !r.uncache) {
    return r
  }
  var i
  var n
  var s
  var a
  var o
  var u
  var h
  var f
  var l
  var c
  var _
  var d
  var m
  var g
  var v
  var y
  var x
  var w
  var T
  var b
  var M
  var O
  var k
  var C
  var A
  var D
  var P
  var S
  var z
  var R
  var F
  var E
  var /* [auto-meaningful-name] */t$style = t.style
  var L = r.scaleX < 0
  var I = qr(t, Xr) || "0"
  i = n = s = u = h = f = l = c = _ = 0
  a = o = 1
  r.svg = !(!t.getCTM || !Hr(t))
  g = li(t, r.svg)
  if (r.svg) {
    C = !r.uncache && t.getAttribute("data-svg-origin")
    ci(t, C || I, !!C || r.originIsAbsolute, false !== r.smooth, g)
  }
  d = r.xOrigin || 0
  m = r.yOrigin || 0
  if (g !== oi) {
    w = g[0]
    T = g[1]
    b = g[2]
    M = g[3]
    i = O = g[4]
    n = k = g[5]
    if (6 === g.length) {
      a = Math.sqrt(w * w + T * T)
      o = Math.sqrt(M * M + b * b)
      u = w || T ? Math$atan2(T, w) * wr : 0
      if (l = b || M ? Math$atan2(b, M) * wr + u : 0) {
        o *= Math.cos(l * Tr)
      }
      if (r.svg) {
        i -= d - (d * w + m * b)
        n -= m - (d * T + m * M)
      }
    } else {
      E = g[6]
      R = g[7]
      P = g[8]
      S = g[9]
      z = g[10]
      F = g[11]
      i = g[12]
      n = g[13]
      s = g[14]
      h = (v = Math$atan2(E, z)) * wr
      if (v) {
        C = O * (y = Math.cos(-v)) + P * (x = Math.sin(-v))
        A = k * y + S * x
        D = E * y + z * x
        P = O * -x + P * y
        S = k * -x + S * y
        z = E * -x + z * y
        F = R * -x + F * y
        O = C
        k = A
        E = D
      }
      f = (v = Math$atan2(-b, z)) * wr
      if (v) {
        y = Math.cos(-v)
        F = M * (x = Math.sin(-v)) + F * y
        w = C = w * y - P * x
        T = A = T * y - S * x
        b = D = b * y - z * x
      }
      u = (v = Math$atan2(T, w)) * wr
      if (v) {
        C = w * (y = Math.cos(v)) + T * (x = Math.sin(v))
        A = O * y + k * x
        T = T * y - w * x
        k = k * y - O * x
        w = C
        O = A
      }
      if (h && Math.abs(h) + Math.abs(u) > 359.9) {
        h = u = 0
        f = 180 - f
      }
      a = it(Math.sqrt(w * w + T * T + b * b))
      o = it(Math.sqrt(k * k + E * E))
      v = Math$atan2(O, k)
      l = Math.abs(v) > 2e-4 ? v * wr : 0
      _ = F ? 1 / (F < 0 ? -F : F) : 0
    }
    if (r.svg) {
      C = t.getAttribute("transform")
      r.forceCSS = t.setAttribute("transform", "") || !hi(qr(t, Transform))
      if (C) {
        t.setAttribute("transform", C)
      }
    }
  }
  if (Math.abs(l) > 90 && Math.abs(l) < 270) {
    if (L) {
      a *= -1
      l += u <= 0 ? 180 : -180
      u += u <= 0 ? 180 : -180
    } else {
      o *= -1
      l += l <= 0 ? 180 : -180
    }
  }
  r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px"
  r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px"
  r.z = s + "px"
  r.scaleX = it(a)
  r.scaleY = it(o)
  r.rotation = it(u) + "deg"
  r.rotationX = it(h) + "deg"
  r.rotationY = it(f) + "deg"
  r.skewX = l + "deg"
  r.skewY = c + "deg"
  r.transformPerspective = _ + "px"
  if (r.zOrigin = parseFloat(I.split(" ")[2]) || 0) {
    t$style[Xr] = _i(I)
  }
  r.xOffset = r.yOffset = 0
  r.force3D = p.force3D
  r.renderTransform = r.svg ? vi : er ? gi : mi
  r.uncache = 0
  return r
}
var _i = function (t) {
  return (t = t.split(" "))[0] + " " + t[1]
}
var di = function (t, e, r) {
  var i = Ft(e)
  return it(parseFloat(e) + parseFloat(ti(t, "x", r + "px", i))) + i
}
var mi = function (t, e) {
  e.z = "0px"
  e.rotationY = e.rotationX = "0deg"
  e.force3D = 0
  gi(t, e)
}
var gi = function (t, e) {
  var r = e || this
  var /* [auto-meaningful-name] */r$xPercent = r.xPercent
  var /* [auto-meaningful-name] */r$yPercent = r.yPercent
  var s = r.x
  var a = r.y
  var o = r.z
  var /* [auto-meaningful-name] */r$rotation = r.rotation
  var /* [auto-meaningful-name] */r$rotationY = r.rotationY
  var /* [auto-meaningful-name] */r$rotationX = r.rotationX
  var /* [auto-meaningful-name] */r$skewX = r.skewX
  var /* [auto-meaningful-name] */r$skewY = r.skewY
  var /* [auto-meaningful-name] */r$scaleX = r.scaleX
  var /* [auto-meaningful-name] */r$scaleY = r.scaleY
  var /* [auto-meaningful-name] */r$transformPerspective = r.transformPerspective
  var /* [auto-meaningful-name] */r$force3D = r.force3D
  var /* [auto-meaningful-name] */r$target = r.target
  var /* [auto-meaningful-name] */r$zOrigin = r.zOrigin
  var y = ""
  var x = "auto" === r$force3D && t && 1 !== t || true === r$force3D
  if (r$zOrigin && ("0deg" !== r$rotationX || "0deg" !== r$rotationY)) {
    var w
    var T = parseFloat(r$rotationY) * Tr
    var b = Math.sin(T)
    var M = Math.cos(T)
    T = parseFloat(r$rotationX) * Tr
    w = Math.cos(T)
    s = di(r$target, s, b * w * -r$zOrigin)
    a = di(r$target, a, -Math.sin(T) * -r$zOrigin)
    o = di(r$target, o, M * w * -r$zOrigin + r$zOrigin)
  }
  if ("0px" !== r$transformPerspective) {
    y += "perspective(" + r$transformPerspective + ") "
  }
  if (r$xPercent || r$yPercent) {
    y += "translate(" + r$xPercent + "%, " + r$yPercent + "%) "
  }
  if (x || "0px" !== s || "0px" !== a || "0px" !== o) {
    y += "0px" !== o || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "
  }
  if ("0deg" !== r$rotation) {
    y += "rotate(" + r$rotation + ") "
  }
  if ("0deg" !== r$rotationY) {
    y += "rotateY(" + r$rotationY + ") "
  }
  if ("0deg" !== r$rotationX) {
    y += "rotateX(" + r$rotationX + ") "
  }
  if (!("0deg" === r$skewX && "0deg" === r$skewY)) {
    y += "skew(" + r$skewX + ", " + r$skewY + ") "
  }
  if (!(1 === r$scaleX && 1 === r$scaleY)) {
    y += "scale(" + r$scaleX + ", " + r$scaleY + ") "
  }
  r$target.style[Transform] = y || "translate(0, 0)"
}
var vi = function (t, e) {
  var r
  var i
  var n
  var s
  var a
  var o = e || this
  var /* [auto-meaningful-name] */o$xPercent = o.xPercent
  var /* [auto-meaningful-name] */o$yPercent = o.yPercent
  var f = o.x
  var l = o.y
  var /* [auto-meaningful-name] */o$rotation = o.rotation
  var /* [auto-meaningful-name] */o$skewX = o.skewX
  var /* [auto-meaningful-name] */o$skewY = o.skewY
  var /* [auto-meaningful-name] */o$scaleX = o.scaleX
  var /* [auto-meaningful-name] */o$scaleY = o.scaleY
  var /* [auto-meaningful-name] */o$target = o.target
  var /* [auto-meaningful-name] */o$xOrigin = o.xOrigin
  var /* [auto-meaningful-name] */o$yOrigin = o.yOrigin
  var /* [auto-meaningful-name] */o$xOffset = o.xOffset
  var /* [auto-meaningful-name] */o$yOffset = o.yOffset
  var /* [auto-meaningful-name] */o$forceCSS = o.forceCSS
  var b = parseFloat(f)
  var M = parseFloat(l)
  o$rotation = parseFloat(o$rotation)
  o$skewX = parseFloat(o$skewX)
  if (o$skewY = parseFloat(o$skewY)) {
    o$skewX += o$skewY = parseFloat(o$skewY)
    o$rotation += o$skewY
  }
  if (o$rotation || o$skewX) {
    o$rotation *= Tr
    o$skewX *= Tr
    r = Math.cos(o$rotation) * o$scaleX
    i = Math.sin(o$rotation) * o$scaleX
    n = Math.sin(o$rotation - o$skewX) * -o$scaleY
    s = Math.cos(o$rotation - o$skewX) * o$scaleY
    if (o$skewX) {
      o$skewY *= Tr
      a = Math.tan(o$skewX - o$skewY)
      n *= a = Math.sqrt(1 + a * a)
      s *= a
      if (o$skewY) {
        a = Math.tan(o$skewY)
        r *= a = Math.sqrt(1 + a * a)
        i *= a
      }
    }
    r = it(r)
    i = it(i)
    n = it(n)
    s = it(s)
  } else {
    r = o$scaleX
    s = o$scaleY
    i = n = 0
  }
  if (b && !~(f + "").indexOf("px") || M && !~(l + "").indexOf("px")) {
    b = ti(o$target, "x", f, "px")
    M = ti(o$target, "y", l, "px")
  }
  if (o$xOrigin || o$yOrigin || o$xOffset || o$yOffset) {
    b = it(b + o$xOrigin - (o$xOrigin * r + o$yOrigin * n) + o$xOffset)
    M = it(M + o$yOrigin - (o$xOrigin * i + o$yOrigin * s) + o$yOffset)
  }
  if (o$xPercent || o$yPercent) {
    a = o$target.getBBox()
    b = it(b + o$xPercent / 100 * a.width)
    M = it(M + o$yPercent / 100 * a.height)
  }
  a = "matrix(" + r + "," + i + "," + n + "," + s + "," + b + "," + M + ")"
  o$target.setAttribute("transform", a)
  if (o$forceCSS) {
    o$target.style[Transform] = a
  }
}
var yi = function (t, e, r, i, n, s) {
  var a
  var o
  var u = T(n)
  var h = parseFloat(n) * (u && ~n.indexOf("rad") ? wr : 1)
  var f = s ? h * s : h - i
  var l = i + f + "deg"
  if (u) {
    if ("short" === (a = n.split("_")[1]) && (f %= 360) !== f % 180) {
      f += f < 0 ? 360 : -360
    }
    if ("cw" === a && f < 0) {
      f = (f + 36e9) % 360 - 360 * ~~(f / 360)
    } else {
      if ("ccw" === a && f > 0) {
        f = (f - 36e9) % 360 - 360 * ~~(f / 360)
      }
    }
  }
  t._pt = o = new qe(t._pt, e, r, i, f, Dr)
  o.e = l
  o.u = "deg"
  t._props.push(r)
  return o
}
var xi = function (t, e, r) {
  var i
  var n
  var s
  var a
  var o
  var u
  var h
  var /* [auto-meaningful-name] */Ke$style = Ke.style
  var /* [auto-meaningful-name] */r$_gsap = r._gsap
  for (n in Ke$style.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", Ke$style[Transform] = e, We$document.body.appendChild(Ke), i = pi(Ke, 1), xr) if ((s = r$_gsap[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0) {
    o = Ft(s) !== (h = Ft(a)) ? ti(r, n, s, h) : parseFloat(s)
    u = parseFloat(a)
    t._pt = new qe(t._pt, r$_gsap, n, o, u - o, Ar)
    t._pt.u = h || 0
    t._props.push(n)
  }
  We$document.body.removeChild(Ke)
}
rt("padding,margin,Width,Radius", function (t, e) {
  var r = "Top"
  var /* [auto-meaningful-name] */Right = "Right"
  var /* [auto-meaningful-name] */Bottom = "Bottom"
  var s = "Left"
  var a = (e < 3 ? [r, Right, Bottom, s] : [r + s, r + Right, Bottom + Right, Bottom + s]).map(function (r) {
    return e < 2 ? t + r : "border" + r + t
  })
  ai[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
    var s
    var o
    if (arguments.length < 4) {
      s = a.map(function (e) {
        return ei(t, e, r)
      })
      return 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
    }
    s = (i + "").split(" ")
    o = {}
    a.forEach(function (t, e) {
      return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
    })
    t.init(e, o, n)
  }
})
var wi = {
  name: "css",
  register: Qr,
  targetTest: function (t) {
    return t.style && t.nodeType
  },
  init: function (t, e, r, i, n) {
    var s
    var a
    var o
    var u
    var h
    var f
    var l
    var c
    var _
    var d
    var m
    var g
    var /* [auto-meaningful-name] */t$_gsap
    var y
    var x
    var /* [auto-meaningful-name] */this$_props = this._props
    var /* [auto-meaningful-name] */t$style = t.style
    for (l in Je || Qr(), e) if ("autoRound" !== l && (a = e[l], !W[l] || !Me(l, e, r, i, t, n))) {
      h = typeof a
      f = ai[l]
      if ("function" === h) {
        h = typeof (a = a.call(r, i, t, n))
      }
      if ("string" === h && ~a.indexOf("random(")) {
        a = jt(a)
      }
      if (f) {
        if (f(this, t, l, a, r)) {
          x = 1
        }
      } else if ("--" === l.substr(0, 2)) {
        this.add(t$style, "setProperty", getComputedStyle(t).getPropertyValue(l) + "", a + "", i, n, 0, 0, l)
      } else {
        s = ei(t, l)
        u = parseFloat(s)
        if (d = "string" === h && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) {
          a = a.substr(2)
        }
        o = parseFloat(a)
        if (l in Cr) {
          if ("autoAlpha" === l) {
            if (1 === u && "hidden" === ei(t, "visibility") && o) {
              u = 0
            }
            $r(this, t$style, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)
          }
          if ("scale" !== l && "transform" !== l && ~(l = Cr[l]).indexOf(",")) {
            l = l.split(",")[0]
          }
        }
        if (m = l in xr) {
          if (!g) {
            if (!(t$_gsap = t._gsap).renderTransform) {
              pi(t)
            }
            y = false !== e.smoothOrigin && t$_gsap.smooth;
            (g = this._pt = new qe(this._pt, t$style, Transform, 0, 1, t$_gsap.renderTransform, t$_gsap, 0, -1)).dep = 1
          }
          if ("scale" === l) {
            this._pt = new qe(this._pt, t$_gsap, "scaleY", t$_gsap.scaleY, d ? d * o : o - t$_gsap.scaleY)
            this$_props.push("scaleY", l)
            l += "X"
          } else {
            if ("transformOrigin" === l) {
              a = ni(a)
              if (t$_gsap.svg) {
                ci(t, a, 0, y, 0, this)
              } else {
                if ((_ = parseFloat(a.split(" ")[2]) || 0) !== t$_gsap.zOrigin) {
                  $r(this, t$_gsap, "zOrigin", t$_gsap.zOrigin, _)
                }
                $r(this, t$style, l, _i(s), _i(a))
              }
              continue
            }
            if ("svgOrigin" === l) {
              ci(t, a, 1, y, 0, this)
              continue
            }
            if (l in ui) {
              yi(this, t$_gsap, l, u, a, d)
              continue
            }
            if ("smoothOrigin" === l) {
              $r(this, t$_gsap, "smooth", t$_gsap.smooth, a)
              continue
            }
            if ("force3D" === l) {
              t$_gsap[l] = a
              continue
            }
            if ("transform" === l) {
              xi(this, a, t)
              continue
            }
          }
        } else if (!(l in t$style)) {
          l = jr(l) || l
        }
        if (m || (o || 0 === o) && (u || 0 === u) && !kr.test(a) && l in t$style) {
          if (!o) {
            o = 0
          }
          if ((c = (s + "").substr((u + "").length)) !== (_ = (a + "").substr((o + "").length) || (l in p.units ? p.units[l] : c))) {
            u = ti(t, l, s, _)
          }
          this._pt = new qe(this._pt, m ? t$_gsap : t$style, l, u, d ? d * o : o - u, "px" !== _ || false === e.autoRound || m ? Ar : Sr)
          this._pt.u = _ || 0
          if (c !== _) {
            this._pt.b = s
            this._pt.r = Pr
          }
        } else if (l in t$style) {
          ri.call(this, t, l, s, a)
        } else {
          if (!(l in t)) {
            X(l, a)
            continue
          }
          this.add(t, l, t[l], a, i, n)
        }
        this$_props.push(l)
      }
    }
    if (x) {
      Ne(this)
    }
  },
  get: ei,
  aliases: Cr,
  getSetter: function (t, e, r) {
    var i = Cr[e]
    if (i && i.indexOf(",") < 0) {
      e = i
    }
    return e in xr && e !== Xr && (t._gsap.x || ei(t, "x")) ? r && tr === r ? "scale" === e ? Lr : Br : (tr = r || {}) && ("scale" === e ? Ir : Yr) : t.style && !O(t.style[e]) ? Fr : ~e.indexOf("-") ? Er : Fe(t, e)
  },
  core: {
    _removeProperty: Jr,
    _getMatrix: li
  }
}
Ge.utils.checkPrefix = jr;
(function (t, e, r, i) {
  var n = rt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    xr[t] = 1
  })
  rt(e, function (t) {
    p.units[t] = "deg"
    ui[t] = 1
  })
  Cr[n[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e
  rt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":")
    Cr[e[1]] = n[e[0]]
  })
})(0, "rotation,rotationX,rotationY,skewX,skewY")
rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
  p.units[t] = "px"
})
Ge.registerPlugin(wi)
var Ti = Ge.registerPlugin(wi) || Ge
var /* [auto-meaningful-name] */Ti$core$Tween = Ti.core.Tween
