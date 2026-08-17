/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-28
 */

"use strict"

import { version, createElement, Component, PureComponent } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_452 from /* 452 */"./452/index"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"./49"
function fo(e, t) {
  for (var /* [auto-meaningful-name] */e$length = e.length, r = 0; r < e$length; ++r) {
    if (t(e[r], r)) {
      return true
    }
  }
  return false
}
function ho(e, t) {
  for (var /* [auto-meaningful-name] */e$length = e.length, r = 0; r < e$length; ++r) {
    if (t(e[r], r)) {
      return e[r]
    }
  }
  return null
}
function mo(e, t) {
  try {
    return new RegExp(e, "g").exec(t)
  } catch (n) {
    return null
  }
}
function go() {
  if ("undefined" === typeof navigator || !navigator || !navigator.userAgentData) {
    return false
  }
  var /* [auto-meaningful-name] */navigator$userAgentData = navigator.userAgentData
  var t = navigator$userAgentData.brands || navigator$userAgentData.uaList
  return !(!t || !t.length)
}
function _o(e) {
  return e.replace(/_/g, ".")
}
function vo(e, t) {
  var n = null
  var r = "-1"
  fo(e, function (e) {
    var o = mo("(" + e.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", t)
    return !(!o || e.brand) && (n = e, r = o[3] || "-1", e.versionAlias ? r = e.versionAlias : e.versionTest && (r = function (e, t) {
      var n = mo("(" + e + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", t)
      return n ? n[3] : ""
    }(e.versionTest.toLowerCase(), t) || r), r = _o(r), true)
  })
  return {
    preset: n,
    version: r
  }
}
function bo(e, t) {
  var n = {
    brand: "",
    version: "-1"
  }
  fo(e, function (e) {
    var r = yo(t, e)
    return !!r && (n.brand = e.id, n.version = e.versionAlias || r.version, "-1" !== n.version)
  })
  return n
}
function yo(e, t) {
  return ho(e, function (e) {
    var /* [auto-meaningful-name] */e$brand = e.brand
    return mo("" + t.test, e$brand.toLowerCase())
  })
}
var Eo = [
  {
    test: "phantomjs",
    id: "phantomjs"
  }, {
    test: "whale",
    id: "whale"
  }, {
    test: "edgios|edge|edg",
    id: "edge"
  }, {
    test: "msie|trident|windows phone",
    id: "ie",
    versionTest: "iemobile|msie|rv"
  }, {
    test: "miuibrowser",
    id: "miui browser"
  }, {
    test: "samsungbrowser",
    id: "samsung internet"
  }, {
    test: "samsung",
    id: "samsung internet",
    versionTest: "version"
  }, {
    test: "chrome|crios",
    id: "chrome"
  }, {
    test: "firefox|fxios",
    id: "firefox"
  }, {
    test: "android",
    id: "android browser",
    versionTest: "version"
  }, {
    test: "safari|iphone|ipad|ipod",
    id: "safari",
    versionTest: "version"
  }
]
var Oo = [
  {
    test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
    id: "chrome",
    versionTest: "chrome"
  }, {
    test: "chromium",
    id: "chrome"
  }, {
    test: "whale",
    id: "chrome",
    versionAlias: "-1",
    brand: true
  }
]
var wo = [
  {
    test: "applewebkit",
    id: "webkit",
    versionTest: "applewebkit|safari"
  }
]
var Co = [
  {
    test: "(?=(iphone|ipad))(?!(.*version))",
    id: "webview"
  }, {
    test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
    id: "webview"
  }, {
    test: "webview",
    id: "webview"
  }
]
var To = [
  {
    test: "windows phone",
    id: "windows phone"
  }, {
    test: "windows 2000",
    id: "window",
    versionAlias: "5.0"
  }, {
    test: "windows nt",
    id: "window"
  }, {
    test: "iphone|ipad|ipod",
    id: "ios",
    versionTest: "iphone os|cpu os"
  }, {
    test: "mac os x",
    id: "mac"
  }, {
    test: "android",
    id: "android"
  }, {
    test: "tizen",
    id: "tizen"
  }, {
    test: "webos|web0s",
    id: "webos"
  }
]
function So(e) {
  var /* [auto-meaningful-name] */navigator$userAgentData = navigator.userAgentData
  var n = (navigator$userAgentData.uaList || navigator$userAgentData.brands).slice()
  var r = navigator$userAgentData.mobile || false
  var o = n[0]
  var i = {
    name: o.brand,
    version: o.version,
    majorVersion: -1,
    webkit: false,
    webkitVersion: "-1",
    chromium: false,
    chromiumVersion: "-1",
    webview: !!bo(Co, n).brand
  }
  var a = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }
  i.webkit = !i.chromium && fo(wo, function (e) {
    return yo(n, e)
  })
  var s = bo(Oo, n)
  i.chromium = !!s.brand
  i.chromiumVersion = s.version
  if (!i.chromium) {
    var c = bo(wo, n)
    i.webkit = !!c.brand
    i.webkitVersion = c.version
  }
  if (e) {
    var l = e.platform.toLowerCase()
    var u = ho(To, function (e) {
      return new RegExp("" + e.test, "g").exec(l)
    })
    a.name = u ? u.id : l
    a.version = e.platformVersion
  }
  var d = bo(Eo, n)
  if (d.brand) {
    i.name = d.brand
    i.version = e ? e.uaFullVersion : d.version
  }
  if ("Linux armv8l" === navigator.platform) {
    a.name = "android"
  } else {
    if (i.webkit) {
      a.name = r ? "ios" : "mac"
    }
  }
  if ("ios" === a.name && i.webview) {
    i.version = "-1"
  }
  a.version = _o(a.version)
  i.version = _o(i.version)
  a.majorVersion = parseInt(a.version, 10)
  i.majorVersion = parseInt(i.version, 10)
  return {
    browser: i,
    os: a,
    isMobile: r,
    isHints: true
  }
}
function Ao(e) {
  var t = function (e) {
    var t = e
    if ("undefined" === typeof t) {
      if ("undefined" === typeof navigator || !navigator) {
        return ""
      }
      t = navigator.userAgent || ""
    }
    return t.toLowerCase()
  }(e)
  var n = !!/mobi/g.exec(t)
  var r = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: !!vo(Co, t).preset,
    chromium: false,
    chromiumVersion: "-1",
    webkit: false,
    webkitVersion: "-1"
  }
  var o = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }
  var i = vo(Eo, t)
  var /* [auto-meaningful-name] */i$preset = i.preset
  var /* [auto-meaningful-name] */i$version = i.version
  var c = vo(To, t)
  var /* [auto-meaningful-name] */c$preset = c.preset
  var /* [auto-meaningful-name] */c$version = c.version
  var d = vo(Oo, t)
  r.chromium = !!d.preset
  r.chromiumVersion = d.version
  if (!r.chromium) {
    var p = vo(wo, t)
    r.webkit = !!p.preset
    r.webkitVersion = p.version
  }
  if (c$preset) {
    o.name = c$preset.id
    o.version = c$version
    o.majorVersion = parseInt(c$version, 10)
  }
  if (i$preset) {
    r.name = i$preset.id
    r.version = i$version
    if (r.webview && "ios" === o.name && "safari" !== r.name) {
      r.webview = false
    }
  }
  r.majorVersion = parseInt(r.version, 10)
  return {
    browser: r,
    os: o,
    isMobile: n,
    isHints: false
  }
}
function Io(e) {
  return "undefined" === typeof e && go() ? So() : Ao(e)
}
var jo = Io
function No(e) {
  for (var t = [], n = 1; n < arguments.length; n++) {
    t[n - 1] = arguments[n]
  }
  return t.map(function (t) {
    return t.split(" ").map(function (t) {
      return t ? "" + e + t : ""
    }).join(" ")
  }).join(" ")
}
function Ro(e, t) {
  return t.replace(/([^}{]*){/gm, function (t, n) {
    return n.replace(/\.([^{,\s\d.]+)/g, "." + e + "$1") + "{"
  })
}
function ko(e, t) {
  return function (n) {
    if (n) {
      e[t] = n
    }
  }
}
function xo(e, t, n) {
  return function (r) {
    if (r) {
      e[t][n] = r
    }
  }
}
if ("undefined" !== typeof document) {
  document
}
var Do = [
  {
    open: "(",
    close: ")"
  }, {
    open: "\"",
    close: "\""
  }, {
    open: "'",
    close: "'"
  }, {
    open: "\\\"",
    close: "\\\""
  }, {
    open: "\\'",
    close: "\\'"
  }
]
var Mo = {
  cm: function (e) {
    return 96 * e / 2.54
  },
  mm: function (e) {
    return 96 * e / 254
  },
  in: function (e) {
    return 96 * e
  },
  pt: function (e) {
    return 96 * e / 72
  },
  pc: function (e) {
    return 96 * e / 6
  },
  "%": function (e, t) {
    return e * t / 100
  },
  vw: function (e, t) {
    if (undefined === t) {
      t = window.innerWidth
    }
    return e / 100 * t
  },
  vh: function (e, t) {
    if (undefined === t) {
      t = window.innerHeight
    }
    return e / 100 * t
  },
  vmax: function (e, t) {
    if (undefined === t) {
      t = Math.max(window.innerWidth, window.innerHeight)
    }
    return e / 100 * t
  },
  vmin: function (e, t) {
    if (undefined === t) {
      t = Math.min(window.innerWidth, window.innerHeight)
    }
    return e / 100 * t
  }
}
function Lo(e) {
  return "undefined" === typeof e
}
function Po(e) {
  return e && "object" === typeof e
}
function Bo(e) {
  return Array.isArray(e)
}
function Fo(e) {
  return "string" === typeof e
}
function Go(e) {
  return "function" === typeof e
}
function Wo(e, t, n, r, o) {
  return Uo(e, t, n) ? n : function (e, t, n, r, o) {
    for (var i, a = function (n) {
        var a = t[n].trim()
        if (a === e.close && !Uo(e, t, n)) {
          return {
            value: n
          }
        }
        var s = n
        var c = Xo(o, function (e) {
          return e.open === a
        })
        if (c) {
          s = Wo(c, t, n, r, o)
        }
        if (-1 === s) {
          i = n
          return "break"
        }
        i = n = s
      }, s = n; s < r; ++s) {
      var c = a(s)
      s = i
      if ("object" === typeof c) {
        return c.value
      }
      if ("break" === c) {
        break
      }
    }
    return -1
  }(e, t, n + 1, r, o)
}
function Uo(e, t, n) {
  if (!e.ignore) {
    return null
  }
  var r = t.slice(Math.max(n - 3, 0), n + 3).join("")
  return new RegExp(e.ignore).exec(r)
}
function Ho(e, t) {
  var n = Fo(t) ? {
    separator: t
  } : t
  var /* [auto-meaningful-name] */n$separator = n.separator
  var o = undefined === n$separator ? "," : n$separator
  var /* [auto-meaningful-name] */n$isSeparateFirst = n.isSeparateFirst
  var /* [auto-meaningful-name] */n$isSeparateOnlyOpenClose = n.isSeparateOnlyOpenClose
  var /* [auto-meaningful-name] */n$isSeparateOpenClose = n.isSeparateOpenClose
  var c = undefined === n$isSeparateOpenClose ? n$isSeparateOnlyOpenClose : n$isSeparateOpenClose
  var /* [auto-meaningful-name] */n$openCloseCharacters = n.openCloseCharacters
  var u = undefined === n$openCloseCharacters ? Do : n$openCloseCharacters
  var d = u.map(function (e) {
    var /* [auto-meaningful-name] */e$open = e.open
    var /* [auto-meaningful-name] */e$close = e.close
    return e$open === e$close ? e$open : e$open + "|" + e$close
  }).join("|")
  var p = new RegExp("(\\s*" + o + "\\s*|" + d + "|\\s+)", "g")
  var f = e.split(p).filter(Boolean)
  var /* [auto-meaningful-name] */f$length = f.length
  var m = []
  var g = []
  function _() {
    return !!g.length && (m.push(g.join("")), g = [], true)
  }
  for (var v, b = function (e) {
      var t = f[e].trim()
      var n = e
      var r = Xo(u, function (e) {
        return e.open === t
      })
      var s = Xo(u, function (e) {
        return e.close === t
      })
      if (r) {
        if (-1 !== (n = Wo(r, f, e, f$length, u)) && c) {
          return _() && n$isSeparateFirst ? (v = e, "break") : (m.push(f.slice(e, n + 1).join("")), e = n, n$isSeparateFirst ? (v = e, "break") : (v = e, "continue"))
        }
      } else {
        if (s && !Uo(s, f, e)) {
          throw new Error("invalid format: " + s.close)
        }
        if (function (e, t) {
          return ("" === t || " " == t) && ("" === e || " " == e) || e === t
        }(t, o) && !n$isSeparateOnlyOpenClose) {
          _()
          return n$isSeparateFirst ? (v = e, "break") : (v = e, "continue")
        }
      }
      if (-1 === n) {
        n = f$length - 1
      }
      g.push(f.slice(e, n + 1).join(""))
      v = e = n
    }, y = 0; y < f$length; ++y) {
    var E = b(y)
    y = v
    if ("break" === E) {
      break
    }
  }
  if (g.length) {
    m.push(g.join(""))
  }
  return m
}
function Vo(e) {
  return Ho(e, "")
}
function zo(e) {
  return Ho(e, ",")
}
function Yo(e) {
  var t = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(e)
  return !t || t.length < 4 ? {} : {
    prefix: t[1],
    value: t[2],
    suffix: t[3]
  }
}
function Ko(e) {
  var t = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(e)
  if (!t) {
    return {
      prefix: "",
      unit: "",
      value: NaN
    }
  }
  var n = t[1]
  var r = t[2]
  return {
    prefix: n,
    unit: t[3],
    value: parseFloat(r)
  }
}
function qo(e, t, n) {
  if (undefined === n) {
    n = -1
  }
  for (var /* [auto-meaningful-name] */e$length = e.length, o = 0; o < e$length; ++o) {
    if (t(e[o], o, e)) {
      return o
    }
  }
  return n
}
function Xo(e, t, n) {
  var r = qo(e, t)
  return r > -1 ? e[r] : n
}
function Qo(e) {
  if (Object.keys) {
    return Object.keys(e)
  }
  var t = []
  for (var n in t) t.push(n)
  return t
}
function Zo(e, t) {
  var n = Ko(e)
  var /* [auto-meaningful-name] */n$value = n.value
  var /* [auto-meaningful-name] */n$unit = n.unit
  if (Po(t)) {
    var i = t[n$unit]
    if (i) {
      if (Go(i)) {
        return i(n$value)
      }
      if (Mo[n$unit]) {
        return Mo[n$unit](n$value, i)
      }
    }
  } else if ("%" === n$unit) {
    return n$value * t / 100
  }
  return Mo[n$unit] ? Mo[n$unit](n$value) : n$value
}
function Jo(e, t, n) {
  return [[oi(t[0], 1e-7), oi(t[0] * e[1] / e[0], 1e-7)], [oi(t[1] * e[0] / e[1], 1e-7), oi(t[1], 1e-7)]].filter(function (e) {
    return e.every(function (e, r) {
      return n ? e <= t[r] : e >= t[r]
    })
  })[0] || e
}
function $o(e, t, n, r) {
  if (!r) {
    return e.map(function (e, r) {
      return function (e, t, n) {
        return Math.max(t, Math.min(e, n))
      }(e, t[r], n[r])
    })
  }
  var o = e[0]
  var i = e[1]
  var a = Jo(e, t, false)
  var s = a[0]
  var c = a[1]
  var l = Jo(e, n, true)
  var u = l[0]
  var d = l[1]
  if (o < s || i < c) {
    o = s
    i = c
  } else {
    if (o > u || i > d) {
      o = u
      i = d
    }
  }
  return [o, i]
}
function ei(e) {
  for (var /* [auto-meaningful-name] */e$length = e.length, n = 0, r = e$length - 1; r >= 0; --r) {
    n += e[r]
  }
  return e$length ? n / e$length : 0
}
function ti(e, t) {
  var n = t[0] - e[0]
  var r = t[1] - e[1]
  var o = Math.atan2(r, n)
  return o >= 0 ? o : o + 2 * Math.PI
}
function ni(e) {
  var t = function (e) {
    return [0, 1].map(function (t) {
      return ei(e.map(function (e) {
        return e[t]
      }))
    })
  }(e)
  var n = ti(t, e[0])
  var r = ti(t, e[1])
  return n < r && r - n < Math.PI || n > r && r - n < -Math.PI ? 1 : -1
}
function ri(e, t) {
  return Math.sqrt(Math.pow((t ? t[0] : 0) - e[0], 2) + Math.pow((t ? t[1] : 0) - e[1], 2))
}
function oi(e, t) {
  return t ? Math.round(e / t) * t : e
}
function ii(e, t) {
  e.forEach(function (n, r) {
    e[r] = oi(e[r], t)
  })
  return e
}
function ai(e, t) {
  return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
}
function si(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
if ("undefined" !== typeof document) {
  document
}
var ci = ["\"", "'", "\\\"", "\\'"]
var li = {
  cm: function (e) {
    return 96 * e / 2.54
  },
  mm: function (e) {
    return 96 * e / 254
  },
  in: function (e) {
    return 96 * e
  },
  pt: function (e) {
    return 96 * e / 72
  },
  pc: function (e) {
    return 96 * e / 6
  },
  "%": function (e, t) {
    return e * t / 100
  },
  vw: function (e, t) {
    if (undefined === t) {
      t = window.innerWidth
    }
    return e / 100 * t
  },
  vh: function (e, t) {
    if (undefined === t) {
      t = window.innerHeight
    }
    return e / 100 * t
  },
  vmax: function (e, t) {
    if (undefined === t) {
      t = Math.max(window.innerWidth, window.innerHeight)
    }
    return e / 100 * t
  },
  vmin: function (e, t) {
    if (undefined === t) {
      t = Math.min(window.innerWidth, window.innerHeight)
    }
    return e / 100 * t
  }
}
function ui(e) {
  return e && "object" === typeof e
}
function di(e, t, n, r) {
  for (var o = n; o < r; ++o) {
    var i = t[o].trim()
    if (i === e) {
      return o
    }
    var a = o
    if ("(" === i) {
      a = di(")", t, o + 1, r)
    } else {
      if (ci.indexOf(i) > -1) {
        a = di(i, t, o + 1, r)
      }
    }
    if (-1 === a) {
      break
    }
    o = a
  }
  return -1
}
function pi(e, t) {
  for (var n = new RegExp("(\\s*" + (t || ",") + "\\s*|\\(|\\)|\"|'|\\\\\"|\\\\'|\\s+)", "g"), r = e.split(n).filter(Boolean), /* [auto-meaningful-name] */r$length = r.length, i = [], a = [], s = 0; s < r$length; ++s) {
    var c = r[s].trim()
    var l = s
    if ("(" === c) {
      l = di(")", r, s + 1, r$length)
    } else {
      if (")" === c) {
        throw new Error("invalid format")
      }
      if (ci.indexOf(c) > -1) {
        l = di(c, r, s + 1, r$length)
      } else if (c === t) {
        if (a.length) {
          i.push(a.join(""))
          a = []
        }
        continue
      }
    }
    if (-1 === l) {
      l = r$length - 1
    }
    a.push(r.slice(s, l + 1).join(""))
    s = l
  }
  if (a.length) {
    i.push(a.join(""))
  }
  return i
}
function fi(e) {
  return pi(e, ",")
}
function hi(e) {
  var t = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(e)
  return !t || t.length < 4 ? {} : {
    prefix: t[1],
    value: t[2],
    suffix: t[3]
  }
}
function mi(e) {
  var t = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(e)
  if (!t) {
    return {
      prefix: "",
      unit: "",
      value: NaN
    }
  }
  var n = t[1]
  var r = t[2]
  return {
    prefix: n,
    unit: t[3],
    value: parseFloat(r)
  }
}
function gi() {
  return Date.now ? Date.now() : new Date().getTime()
}
function _i(e, t, n) {
  if (undefined === n) {
    n = -1
  }
  for (var /* [auto-meaningful-name] */e$length = e.length, o = 0; o < e$length; ++o) {
    if (t(e[o], o, e)) {
      return o
    }
  }
  return n
}
function vi(e, t) {
  var n = mi(e)
  var /* [auto-meaningful-name] */n$value = n.value
  var /* [auto-meaningful-name] */n$unit = n.unit
  if (ui(t)) {
    var i = t[n$unit]
    if (i) {
      if (function (e) {
        return "function" === typeof e
      }(i)) {
        return i(n$value)
      }
      if (li[n$unit]) {
        return li[n$unit](n$value, i)
      }
    }
  } else if ("%" === n$unit) {
    return n$value * t / 100
  }
  return li[n$unit] ? li[n$unit](n$value) : n$value
}
function bi(e, t) {
  return t ? Math.round(e / t) * t : e
}
function yi(e) {
  for (var /* [auto-meaningful-name] */e$length = e.length, n = 0, r = e$length - 1; r >= 0; --r) {
    n += e[r]
  }
  return e$length ? n / e$length : 0
}
function Ei(e, t) {
  var n = t[0] - e[0]
  var r = t[1] - e[1]
  var o = Math.atan2(r, n)
  return o >= 0 ? o : o + 2 * Math.PI
}
function Oi(e) {
  var t = function (e) {
    return [0, 1].map(function (t) {
      return yi(e.map(function (e) {
        return e[t]
      }))
    })
  }(e)
  var n = Ei(t, e[0])
  var r = Ei(t, e[1])
  return n < r && r - n < Math.PI || n > r && r - n < -Math.PI ? 1 : -1
}
function wi(e, t) {
  return Math.sqrt(Math.pow((t ? t[0] : 0) - e[0], 2) + Math.pow((t ? t[1] : 0) - e[1], 2))
}
function Ci(e, t) {
  if (e.classList) {
    e.classList.add(t)
  } else {
    e.className += " " + t
  }
}
function Ti(e, t) {
  if (e.classList) {
    e.classList.remove(t)
  } else {
    var n = new RegExp("(\\s|^)" + t + "(\\s|$)")
    e.className = e.className.replace(n, " ")
  }
}
function Si(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function Ai(e, t, n) {
  e.removeEventListener(t, n)
}
function Ii(e, t, n, r, o, i) {
  for (var a = 0; a < o; ++a) {
    var s = n + a * o
    var c = r + a * o
    e[s] += e[c] * i
    t[s] += t[c] * i
  }
}
function ji(e, t, n, r, o) {
  for (var i = 0; i < o; ++i) {
    var a = n + i * o
    var s = r + i * o
    var c = e[a]
    var l = t[a]
    e[a] = e[s]
    e[s] = c
    t[a] = t[s]
    t[s] = l
  }
}
function Ni(e, t, n, r, o) {
  for (var i = 0; i < r; ++i) {
    var a = n + i * r
    e[a] /= o
    t[a] /= o
  }
}
function Ri(e, t, n) {
  if (undefined === n) {
    n = Math.sqrt(e.length)
  }
  for (var r = e.slice(), o = 0; o < n; ++o) {
    r[o * n + t - 1] = 0
    r[(t - 1) * n + o] = 0
  }
  r[(t - 1) * (n + 1)] = 1
  return r
}
function ki(e, t) {
  if (undefined === t) {
    t = Math.sqrt(e.length)
  }
  for (var n = e.slice(), r = Xi(t), o = 0; o < t; ++o) {
    var i = t * o + o
    if (!bi(n[i], 1e-7)) {
      for (var a = o + 1; a < t; ++a) {
        if (n[t * o + a]) {
          ji(n, r, o, a, t)
          break
        }
      }
    }
    if (!bi(n[i], 1e-7)) {
      return []
    }
    Ni(n, r, o, t, n[i])
    for (a = 0; a < t; ++a) {
      var s = a
      var c = n[a + o * t]
      if (bi(c, 1e-7) && o !== a) {
        Ii(n, r, s, o, t, -c)
      }
    }
  }
  return r
}
function xi(e, t) {
  for (var n = e.slice(), /* [auto-meaningful-name] */e$length = e.length; e$length < t - 1; ++e$length) {
    n[e$length] = 0
  }
  n[t - 1] = 1
  return n
}
function Di(e, t, n) {
  if (undefined === t) {
    t = Math.sqrt(e.length)
  }
  if (t === n) {
    return e
  }
  for (var r = Xi(n), o = Math.min(t, n), i = 0; i < o - 1; ++i) {
    for (var a = 0; a < o - 1; ++a) {
      r[i * n + a] = e[i * t + a]
    }
    r[(i + 1) * n - 1] = e[(i + 1) * t - 1]
    r[(n - 1) * n + i] = e[(t - 1) * t + i]
  }
  r[n * n - 1] = e[t * t - 1]
  return r
}
function Mi(e) {
  for (var t = [], n = 1; n < arguments.length; n++) {
    t[n - 1] = arguments[n]
  }
  var r = Xi(e)
  t.forEach(function (t) {
    r = Li(r, t, e)
  })
  return r
}
function Li(e, t, n) {
  if (undefined === n) {
    n = Math.sqrt(e.length)
  }
  var r = []
  var o = e.length / n
  var i = t.length / o
  if (!o) {
    return t
  }
  if (!i) {
    return e
  }
  for (var a = 0; a < n; ++a) {
    for (var s = 0; s < i; ++s) {
      r[s * n + a] = 0
      for (var c = 0; c < o; ++c) {
        r[s * n + a] += e[c * n + a] * t[s * o + c]
      }
    }
  }
  return r
}
function Pi(e, t) {
  for (var n = Math.min(e.length, t.length), r = e.slice(), o = 0; o < n; ++o) {
    r[o] = r[o] + t[o]
  }
  return r
}
function Bi(e, t) {
  for (var n = Math.min(e.length, t.length), r = e.slice(), o = 0; o < n; ++o) {
    r[o] = r[o] - t[o]
  }
  return r
}
function Fi(e, t) {
  if (undefined === t) {
    t = 9 === e.length
  }
  return t ? [e[0], e[1], e[3], e[4], e[6], e[7]] : e
}
function Gi(e, t, n) {
  if (undefined === n) {
    n = t.length
  }
  var r = Li(e, t, n)
  var o = r[n - 1]
  return r.map(function (e) {
    return e / o
  })
}
function Wi(e, t) {
  return Li(e, [1, 0, 0, 0, 0, Math.cos(t), Math.sin(t), 0, 0, -Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1], 4)
}
function Ui(e, t) {
  return Li(e, [Math.cos(t), 0, -Math.sin(t), 0, 0, 1, 0, 0, Math.sin(t), 0, Math.cos(t), 0, 0, 0, 0, 1], 4)
}
function Hi(e, t) {
  return Li(e, qi(t, 4))
}
function Vi(e, t) {
  var n = t[0]
  var r = undefined === n ? 1 : n
  var o = t[1]
  var i = undefined === o ? 1 : o
  var a = t[2]
  return Li(e, [r, 0, 0, 0, 0, i, 0, 0, 0, 0, undefined === a ? 1 : a, 0, 0, 0, 0, 1], 4)
}
function zi(e, t) {
  return Gi(qi(t, 3), xi(e, 3))
}
function Yi(e, t) {
  var n = t[0]
  var r = undefined === n ? 0 : n
  var o = t[1]
  var i = undefined === o ? 0 : o
  var a = t[2]
  return Li(e, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r, i, undefined === a ? 0 : a, 1], 4)
}
function Ki(e, t) {
  return Li(e, t, 4)
}
function qi(e, t) {
  var n = Math.cos(e)
  var r = Math.sin(e)
  var o = Xi(t)
  o[0] = n
  o[1] = r
  o[t] = -r
  o[t + 1] = n
  return o
}
function Xi(e) {
  for (var t = e * e, n = [], r = 0; r < t; ++r) {
    n[r] = r % (e + 1) ? 0 : 1
  }
  return n
}
function Qi(e, t) {
  for (var n = Xi(t), r = Math.min(e.length, t - 1), o = 0; o < r; ++o) {
    n[(t + 1) * o] = e[o]
  }
  return n
}
function Zi(e, t) {
  for (var n = Xi(t), r = Math.min(e.length, t - 1), o = 0; o < r; ++o) {
    n[t * (t - 1) + o] = e[o]
  }
  return n
}
function Ji(e, t, n, r, o, i, a, s) {
  var c = e[0]
  var l = e[1]
  var u = t[0]
  var d = t[1]
  var p = n[0]
  var f = n[1]
  var h = r[0]
  var m = r[1]
  var g = o[0]
  var _ = o[1]
  var v = i[0]
  var b = i[1]
  var y = a[0]
  var E = a[1]
  var O = s[0]
  var w = s[1]
  var C = ki([c, 0, u, 0, p, 0, h, 0, l, 0, d, 0, f, 0, m, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, c, 0, u, 0, p, 0, h, 0, l, 0, d, 0, f, 0, m, 0, 1, 0, 1, 0, 1, 0, 1, -g * c, -_ * c, -v * u, -b * u, -y * p, -E * p, -O * h, -w * h, -g * l, -_ * l, -v * d, -b * d, -y * f, -E * f, -O * m, -w * m], 8)
  if (!C.length) {
    return []
  }
  var T = Li(C, [g, _, v, b, y, E, O, w], 8)
  T[8] = 1
  return Di(function (e, t) {
    if (undefined === t) {
      t = Math.sqrt(e.length)
    }
    for (var n = [], r = 0; r < t; ++r) {
      for (var o = 0; o < t; ++o) {
        n[o * t + r] = e[t * r + o]
      }
    }
    return n
  }(T), 3, 4)
}
function $i(e) {
  return ta(na(e))
}
function ea(e, t) {
  var n = Gi(e, [t[0], t[1] || 0, t[2] || 0, 1], 4)
  var r = n[3] || 1
  return [n[0] / r, n[1] / r, n[2] / r]
}
function ta(e) {
  var t = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  e.forEach(function (e) {
    var /* [auto-meaningful-name] */e$matrixFunction = e.matrixFunction
    var /* [auto-meaningful-name] */e$functionValue = e.functionValue
    if (e$matrixFunction) {
      t = e$matrixFunction(t, e$functionValue)
    }
  })
  return t
}
function na(e) {
  return (function (e) {
    return Array.isArray(e)
  }(e) ? e : pi(e, "")).map(function (e) {
    var t = hi(e)
    var /* [auto-meaningful-name] */t$prefix = t.prefix
    var /* [auto-meaningful-name] */t$value = t.value
    var o = null
    var i = t$prefix
    var a = ""
    if ("translate" === t$prefix || "translateX" === t$prefix || "translate3d" === t$prefix) {
      var s = fi(t$value).map(function (e) {
        return parseFloat(e)
      })
      var c = s[0]
      var l = s[1]
      var u = undefined === l ? 0 : l
      var d = s[2]
      o = Yi
      a = [c, u, undefined === d ? 0 : d]
    } else if ("translateY" === t$prefix) {
      o = Yi
      a = [0, u = parseFloat(t$value), 0]
    } else if ("translateZ" === t$prefix) {
      o = Yi
      a = [0, 0, parseFloat(t$value)]
    } else if ("scale" === t$prefix || "scale3d" === t$prefix) {
      var p = fi(t$value).map(function (e) {
        return parseFloat(e)
      })
      var f = p[0]
      var h = p[1]
      var m = undefined === h ? f : h
      var g = p[2]
      o = Vi
      a = [f, m, undefined === g ? 1 : g]
    } else if ("scaleX" === t$prefix) {
      o = Vi
      a = [f = parseFloat(t$value), 1, 1]
    } else if ("scaleY" === t$prefix) {
      o = Vi
      a = [1, m = parseFloat(t$value), 1]
    } else if ("scaleZ" === t$prefix) {
      o = Vi
      a = [1, 1, parseFloat(t$value)]
    } else if ("rotate" === t$prefix || "rotateZ" === t$prefix || "rotateX" === t$prefix || "rotateY" === t$prefix) {
      var _ = mi(t$value)
      var /* [auto-meaningful-name] */_$unit = _.unit
      var /* [auto-meaningful-name] */_$value = _.value
      if ("rotate" === t$prefix || "rotateZ" === t$prefix) {
        i = "rotateZ"
        o = Hi
      } else {
        if ("rotateX" === t$prefix) {
          o = Wi
        } else {
          if ("rotateY" === t$prefix) {
            o = Ui
          }
        }
      }
      a = "rad" === _$unit ? _$value : _$value * Math.PI / 180
    } else if ("matrix3d" === t$prefix) {
      o = Ki
      a = fi(t$value).map(function (e) {
        return parseFloat(e)
      })
    } else if ("matrix" === t$prefix) {
      var y = fi(t$value).map(function (e) {
        return parseFloat(e)
      })
      o = Ki
      a = [y[0], y[1], 0, 0, y[2], y[3], 0, 0, 0, 0, 1, 0, y[4], y[5], 0, 1]
    } else {
      i = ""
    }
    return {
      name: t$prefix,
      functionName: i,
      value: t$value,
      matrixFunction: o,
      functionValue: a
    }
  })
}
var ra = function () {
  function e() {
    this.keys = []
    this.values = []
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.get = function (e) {
    return this.values[this.keys.indexOf(e)]
  }
  e$prototype.set = function (e, t) {
    var /* [auto-meaningful-name] */this$keys = this.keys
    var /* [auto-meaningful-name] */this$values = this.values
    var o = this$keys.indexOf(e)
    var i = -1 === o ? this$keys.length : o
    this$keys[i] = e
    this$values[i] = t
  }
  return e
}()
var oa = function () {
  function e() {
    this.object = {}
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.get = function (e) {
    return this.object[e]
  }
  e$prototype.set = function (e, t) {
    this.object[e] = t
  }
  return e
}()
var ia = "function" === typeof Map
var aa = function () {
  function e() {}
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.connect = function (e, t) {
    this.prev = e
    this.next = t
    if (e) {
      e.next = this
    }
    if (t) {
      t.prev = this
    }
  }
  e$prototype.disconnect = function () {
    var /* [auto-meaningful-name] */this$prev = this.prev
    var /* [auto-meaningful-name] */this$next = this.next
    if (this$prev) {
      this$prev.next = this$next
    }
    if (this$next) {
      this$next.prev = this$prev
    }
  }
  e$prototype.getIndex = function () {
    for (var e = this, t = -1; e;) {
      e = e.prev
      ++t
    }
    return t
  }
  return e
}()
var sa = function () {
  function e(e, t, n, r, o, i, a, s) {
    this.prevList = e
    this.list = t
    this.added = n
    this.removed = r
    this.changed = o
    this.maintained = i
    this.changedBeforeAdded = a
    this.fixed = s
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  Object.defineProperty(e$prototype, "ordered", {
    get: function () {
      if (!this.cacheOrdered) {
        this.caculateOrdered()
      }
      return this.cacheOrdered
    },
    enumerable: true,
    configurable: true
  })
  Object.defineProperty(e$prototype, "pureChanged", {
    get: function () {
      if (!this.cachePureChanged) {
        this.caculateOrdered()
      }
      return this.cachePureChanged
    },
    enumerable: true,
    configurable: true
  })
  e$prototype.caculateOrdered = function () {
    var e = function (e, t) {
      var n = []
      var r = []
      e.forEach(function (e) {
        var t = e[0]
        var o = e[1]
        var i = new aa()
        n[t] = i
        r[o] = i
      })
      n.forEach(function (e, t) {
        e.connect(n[t - 1])
      })
      return e.filter(function (e, n) {
        return !t[n]
      }).map(function (e, t) {
        var o = e[0]
        var i = e[1]
        if (o === i) {
          return [0, 0]
        }
        var a = n[o]
        var s = r[i - 1]
        var c = a.getIndex()
        a.disconnect()
        if (s) {
          a.connect(s, s.next)
        } else {
          a.connect(undefined, n[0])
        }
        return [c, a.getIndex()]
      })
    }(this.changedBeforeAdded, this.fixed)
    var /* [auto-meaningful-name] */this$changed = this.changed
    var n = []
    this.cacheOrdered = e.filter(function (e, r) {
      var o = e[0]
      var i = e[1]
      var a = this$changed[r]
      var s = a[0]
      var c = a[1]
      if (o !== i) {
        n.push([s, c])
        return true
      }
    })
    this.cachePureChanged = n
  }
  return e
}()
function ca(e, t, n) {
  var r = ia ? Map : n ? oa : ra
  var o = n || function (e) {
    return e
  }
  var i = []
  var a = []
  var s = []
  var c = e.map(o)
  var l = t.map(o)
  var u = new r()
  var d = new r()
  var p = []
  var f = []
  var h = {}
  var m = []
  var g = 0
  var _ = 0
  c.forEach(function (e, t) {
    u.set(e, t)
  })
  l.forEach(function (e, t) {
    d.set(e, t)
  })
  c.forEach(function (e, t) {
    var n = d.get(e)
    if ("undefined" === typeof n) {
      ++_
      a.push(t)
    } else {
      h[n] = _
    }
  })
  l.forEach(function (e, t) {
    var n = u.get(e)
    if ("undefined" === typeof n) {
      i.push(t)
      ++g
    } else {
      s.push([n, t])
      _ = h[t] || 0
      p.push([n - _, t - g])
      f.push(t === n)
      if (n !== t) {
        m.push([n, t])
      }
    }
  })
  a.reverse()
  return new sa(e, t, i, a, m, s, p, f)
}
var la = function () {
  function e(e, t) {
    if (undefined === e) {
      e = []
    }
    this.findKeyCallback = t
    this.list = [].slice.call(e)
  }
  e.prototype.update = function (e) {
    var t = [].slice.call(e)
    var n = ca(this.list, t, this.findKeyCallback)
    this.list = t
    return n
  }
  return e
}()
var ua = function (e, t) {
  return (ua = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var da = "function" === typeof Map ? undefined : function () {
  var e = 0
  return function (t) {
    return t.__DIFF_KEY__ || (t.__DIFF_KEY__ = ++e)
  }
}()
var pa = function (e) {
  function t(t) {
    if (undefined === t) {
      t = []
    }
    return e.call(this, t, da) || this
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    ua(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  return t
}(la)
function fa(e) {
  return e.length < 3 ? 0 : Math.abs(function (e) {
    for (var t = 0, n = e.length - 1; n >= 0; --n) {
      t += e[n]
    }
    return t
  }(e.map(function (t, n) {
    var r = e[n + 1] || e[0]
    return t[0] * r[1] - r[0] * t[1]
  }))) / 2
}
function ha(e, t) {
  var /* [auto-meaningful-name] */t$width = t.width
  var /* [auto-meaningful-name] */t$height = t.height
  var /* [auto-meaningful-name] */t$left = t.left
  var /* [auto-meaningful-name] */t$top = t.top
  var a = ma(e)
  var /* [auto-meaningful-name] */a$minX = a.minX
  var /* [auto-meaningful-name] */a$minY = a.minY
  var /* [auto-meaningful-name] */a$maxX = a.maxX
  var /* [auto-meaningful-name] */a$maxY = a.maxY
  var d = t$width / (a$maxX - a$minX)
  var p = t$height / (a$maxY - a$minY)
  return e.map(function (e) {
    return [t$left + (e[0] - a$minX) * d, t$top + (e[1] - a$minY) * p]
  })
}
function ma(e) {
  var t = e.map(function (e) {
    return e[0]
  })
  var n = e.map(function (e) {
    return e[1]
  })
  return {
    minX: Math.min.apply(Math, t),
    minY: Math.min.apply(Math, n),
    maxX: Math.max.apply(Math, t),
    maxY: Math.max.apply(Math, n)
  }
}
function ga(e, t, n) {
  var r = e[0]
  var o = e[1]
  var i = ma(t)
  var /* [auto-meaningful-name] */i$minX = i.minX
  var /* [auto-meaningful-name] */i$minY = i.minY
  var /* [auto-meaningful-name] */i$maxX = i.maxX
  var /* [auto-meaningful-name] */i$maxY = i.maxY
  var u = [[i$minX, o], [i$maxX, o]]
  var d = [[r, i$minY], [r, i$maxY]]
  var p = _a(u[0], u[1])
  var f = _a(d[0], d[1])
  var h = ya(t)
  var m = []
  var g = []
  h.forEach(function (e) {
    var t = _a(e[0], e[1])
    var n = ba(va(p, t), [u, e])
    var i = ba(va(f, t), [d, e])
    if (!(1 === n.length && e[0][1] === o)) {
      m.push.apply(m, n)
    }
    if (!(1 === i.length && e[0][0] === r)) {
      g.push.apply(g, i)
    }
    if (!t[0]) {
      m.push.apply(m, n)
    }
    if (!t[1]) {
      g.push.apply(g, i)
    }
  })
  return !n && (_i(m, function (e) {
    return e[0] === r
  }) > -1 || _i(g, function (e) {
    return e[1] === o
  }) > -1) || !!(m.filter(function (e) {
    return e[0] > r
  }).length % 2 && g.filter(function (e) {
    return e[1] > o
  }).length % 2)
}
function _a(e, t) {
  var n = e[0]
  var r = e[1]
  var o = t[0]
  var i = t[1]
  if (n === o && r === i) {
    return [0, 0, 0]
  }
  if (n === o) {
    return [1, 0, -n]
  }
  if (r === i) {
    return [0, 1, -r]
  }
  var a = (o - n) / (r - i)
  return [1, a, -n - a * r]
}
function va(e, t) {
  var n
  var r
  var o = e[0]
  var i = e[1]
  var a = e[2]
  var s = t[0]
  var c = t[1]
  var l = t[2]
  var u = 0 === o && 0 === s
  var d = 0 === i && 0 === c
  if (u && d) {
    return []
  }
  if (u) {
    var p = -a / i
    return p !== -l / c ? [] : [[-1 / 0, p], [1 / 0, p]]
  }
  if (d) {
    var f = -a / o
    return f !== -l / s ? [] : [[f, -1 / 0], [f, 1 / 0]]
  }
  return 0 === o ? [[n = -(c * (r = -a / i) + l) / s, r]] : 0 === s ? [[n = -(i * (r = -l / c) + a) / o, r]] : 0 === i ? [[n = -a / o, r = -(s * n + l) / c]] : 0 === c ? [[n = -l / s, r = -(o * n + a) / i]] : [[n = (i * l - c * a) / (c * o - i * s), r = -(o * n + a) / i]]
}
function ba(e, t) {
  var n = t.map(function (e) {
    return [0, 1].map(function (t) {
      return [Math.min(e[0][t], e[1][t]), Math.max(e[0][t], e[1][t])]
    })
  })
  if (2 === e.length) {
    var r = e[0]
    var o = r[0]
    var i = r[1]
    if (o === e[1][0]) {
      var a = Math.max.apply(Math, n.map(function (e) {
        return e[1][0]
      }))
      var s = Math.min.apply(Math, n.map(function (e) {
        return e[1][1]
      }))
      return a > s ? [] : [[o, a], [o, s]]
    }
    if (i === e[1][1]) {
      var c = Math.max.apply(Math, n.map(function (e) {
        return e[0][0]
      }))
      var l = Math.min.apply(Math, n.map(function (e) {
        return e[0][1]
      }))
      return c > l ? [] : [[c, i], [l, i]]
    }
  }
  return e.filter(function (e) {
    return n.every(function (t) {
      return t[0][0] <= e[0] && e[0] <= t[0][1] && t[1][0] <= e[1] && e[1] <= t[1][1]
    })
  })
}
function ya(e) {
  return function () {
    for (var e = 0, t = 0, /* [auto-meaningful-name] */arguments$length = arguments.length; t < arguments$length; t++) {
      e += arguments[t].length
    }
    var r = Array(e)
    var o = 0
    for (t = 0; t < arguments$length; t++) {
      for (var i = arguments[t], a = 0, /* [auto-meaningful-name] */i$length = i.length; a < i$length; a++, o++) {
        r[o] = i[a]
      }
    }
    return r
  }(e.slice(1), [e[0]]).map(function (t, n) {
    return [e[n], t]
  })
}
function Ea(e, t) {
  return fa(function (e, t) {
    var n = e.slice()
    var r = t.slice()
    if (-1 === Oi(n)) {
      n.reverse()
    }
    if (-1 === Oi(r)) {
      r.reverse()
    }
    var o = ya(n)
    var i = ya(r)
    var a = o.map(function (e) {
      return _a(e[0], e[1])
    })
    var s = i.map(function (e) {
      return _a(e[0], e[1])
    })
    var c = []
    a.forEach(function (e, t) {
      var n = o[t]
      var a = []
      s.forEach(function (r, o) {
        var s = ba(va(e, r), [n, i[o]])
        a.push.apply(a, s.map(function (e) {
          return {
            index1: t,
            index2: o,
            pos: e
          }
        }))
      })
      a.sort(function (e, t) {
        return wi(n[0], e.pos) - wi(n[0], t.pos)
      })
      c.push.apply(c, a)
      if (ga(n[1], r)) {
        c.push({
          index1: t,
          index2: -1,
          pos: n[1]
        })
      }
    })
    i.forEach(function (e, t) {
      if (ga(e[1], n)) {
        var r = false
        var o = _i(c, function (e) {
          return e.index2 === t ? (r = true, false) : !!r
        })
        if (-1 === o) {
          r = false
          o = _i(c, function (e) {
            var /* [auto-meaningful-name] */e$index1 = e.index1
            var /* [auto-meaningful-name] */e$index2 = e.index2
            return -1 === e$index1 && e$index2 + 1 === t ? (r = true, false) : !!r
          })
        }
        if (-1 === o) {
          c.push({
            index1: -1,
            index2: t,
            pos: e[1]
          })
        } else {
          c.splice(o, 0, {
            index1: -1,
            index2: t,
            pos: e[1]
          })
        }
      }
    })
    var l = c.map(function (e) {
      return e.pos
    })
    var u = {}
    return l.filter(function (e) {
      var t = e[0] + "x" + e[1]
      return !u[t] && (u[t] = true, true)
    })
  }(e, t))
}
var Oa = function () {
  return (Oa = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o]
      }
    }
    return e
  }).apply(this, arguments)
}
var wa = function () {
  function e() {
    this._events = {}
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.on = function (e, t) {
    if (ui(e)) {
      for (var n in e) this.on(n, e[n])
    } else {
      this._addEvent(e, t, {})
    }
    return this
  }
  e$prototype.off = function (e, t) {
    if (e) {
      if (ui(e)) {
        for (var n in e) this.off(n)
      } else if (t) {
        var r = this._events[e]
        if (r) {
          var o = _i(r, function (e) {
            return e.listener === t
          })
          if (o > -1) {
            r.splice(o, 1)
          }
        }
      } else {
        this._events[e] = []
      }
    } else {
      this._events = {}
    }
    return this
  }
  e$prototype.once = function (e, t) {
    var n = this
    if (t) {
      this._addEvent(e, t, {
        once: true
      })
    }
    return new Promise(function (t) {
      n._addEvent(e, t, {
        once: true
      })
    })
  }
  e$prototype.emit = function (e, t) {
    var n = this
    if (undefined === t) {
      t = {}
    }
    var r = this._events[e]
    if (!e || !r) {
      return true
    }
    var o = false
    t.eventType = e
    t.stop = function () {
      o = true
    }
    t.currentTarget = this;
    (function () {
      for (var e = 0, t = 0, /* [auto-meaningful-name] */arguments$length = arguments.length; t < arguments$length; t++) {
        e += arguments[t].length
      }
      var r = Array(e)
      var o = 0
      for (t = 0; t < arguments$length; t++) {
        for (var i = arguments[t], a = 0, /* [auto-meaningful-name] */i$length = i.length; a < i$length; a++, o++) {
          r[o] = i[a]
        }
      }
      return r
    })(r).forEach(function (r) {
      r.listener(t)
      if (r.once) {
        n.off(e, r.listener)
      }
    })
    return !o
  }
  e$prototype.trigger = function (e, t) {
    if (undefined === t) {
      t = {}
    }
    return this.emit(e, t)
  }
  e$prototype._addEvent = function (e, t, n) {
    var /* [auto-meaningful-name] */this$_events = this._events
    this$_events[e] = this$_events[e] || []
    this$_events[e].push(Oa({
      listener: t
    }, n))
  }
  return e
}()
if ("undefined" !== typeof document) {
  document
}
function Ca() {
  return Date.now ? Date.now() : new Date().getTime()
}
var Ta = function (e, t) {
  return (Ta = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function Sa(e) {
  var /* [auto-meaningful-name] */e$container = e.container
  return e$container === document.body ? [e$container.scrollLeft || document.documentElement.scrollLeft, e$container.scrollTop || document.documentElement.scrollTop] : [e$container.scrollLeft, e$container.scrollTop]
}
var Aa = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.startRect = null
    t.startPos = []
    t.prevTime = 0
    t.timer = 0
    return t
  }
  !function (e, t) {
    function n() {
      this.constructor = e
    }
    Ta(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  }(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.dragStart = function (e, t) {
    var /* [auto-meaningful-name] */t$container = t.container
    var r = 0
    var o = 0
    var i = 0
    var a = 0
    if (t$container === document.body) {
      i = window.innerWidth
      a = window.innerHeight
    } else {
      var s = t$container.getBoundingClientRect()
      r = s.top
      o = s.left
      i = s.width
      a = s.height
    }
    this.startPos = [e.clientX, e.clientY]
    this.startRect = {
      top: r,
      left: o,
      width: i,
      height: a
    }
  }
  t$prototype.drag = function (e, t) {
    var n = this
    var /* [auto-meaningful-name] */e$clientX = e.clientX
    var /* [auto-meaningful-name] */e$clientY = e.clientY
    var /* [auto-meaningful-name] */t$container = t.container
    var /* [auto-meaningful-name] */t$threshold = t.threshold
    var s = undefined === t$threshold ? 0 : t$threshold
    var /* [auto-meaningful-name] */t$throttleTime = t.throttleTime
    var l = undefined === t$throttleTime ? 0 : t$throttleTime
    var /* [auto-meaningful-name] */t$getScrollPosition = t.getScrollPosition
    var d = undefined === t$getScrollPosition ? Sa : t$getScrollPosition
    var /* [auto-meaningful-name] */this$startRect = this.startRect
    var /* [auto-meaningful-name] */this$startPos = this.startPos
    var h = Ca()
    var m = Math.max(l + this.prevTime - h, 0)
    var g = [0, 0]
    if (this$startRect.top > e$clientY - s) {
      if (this$startPos[1] > this$startRect.top || e$clientY < this$startPos[1]) {
        g[1] = -1
      }
    } else {
      if (this$startRect.top + this$startRect.height < e$clientY + s && (this$startPos[1] < this$startRect.top + this$startRect.height || e$clientY > this$startPos[1])) {
        g[1] = 1
      }
    }
    if (this$startRect.left > e$clientX - s) {
      if (this$startPos[0] > this$startRect.left || e$clientX < this$startPos[0]) {
        g[0] = -1
      }
    } else {
      if (this$startRect.left + this$startRect.width < e$clientX + s && (this$startPos[0] < this$startRect.left + this$startRect.width || e$clientX > this$startPos[0])) {
        g[0] = 1
      }
    }
    clearTimeout(this.timer)
    if (!g[0] && !g[1]) {
      return false
    }
    if (m > 0) {
      this.timer = window.setTimeout(function () {
        n.drag(e, t)
      }, m)
      return false
    }
    this.prevTime = h
    var _ = d({
      container: t$container,
      direction: g
    })
    this.trigger("scroll", {
      container: t$container,
      direction: g,
      inputEvent: e
    })
    var v = d({
      container: t$container,
      direction: g
    })
    var b = v[0] - _[0]
    var y = v[1] - _[1]
    return !(!b && !y) && (this.trigger("move", {
      offsetX: g[0] ? b : 0,
      offsetY: g[1] ? y : 0,
      inputEvent: e
    }), l && (this.timer = window.setTimeout(function () {
      n.drag(e, t)
    }, l)), true)
  }
  t$prototype.dragEnd = function () {
    clearTimeout(this.timer)
  }
  return t
}(wa)
var Ia = function (e, t) {
  return (Ia = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var ja = function () {
  return (ja = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o]
      }
    }
    return e
  }).apply(this, arguments)
}
function Na(e) {
  return function (e, t) {
    var n = t[0] - e[0]
    var r = t[1] - e[1]
    var o = Math.atan2(r, n)
    return o >= 0 ? o : o + 2 * Math.PI
  }([e[0].clientX, e[0].clientY], [e[1].clientX, e[1].clientY]) / Math.PI * 180
}
function Ra(e) {
  return e.touches ? function (e) {
    for (var t = Math.min(e.length, 2), n = [], r = 0; r < t; ++r) {
      n.push(Da(e[r]))
    }
    return n
  }(e.touches) : [Da(e)]
}
function ka(e, t, n) {
  var /* [auto-meaningful-name] */n$length = n.length
  var o = Ma(e, n$length)
  var /* [auto-meaningful-name] */o$clientX = o.clientX
  var /* [auto-meaningful-name] */o$clientY = o.clientY
  var /* [auto-meaningful-name] */o$originalClientX = o.originalClientX
  var /* [auto-meaningful-name] */o$originalClientY = o.originalClientY
  var l = Ma(t, n$length)
  var /* [auto-meaningful-name] */l$clientX = l.clientX
  var /* [auto-meaningful-name] */l$clientY = l.clientY
  var p = Ma(n, n$length)
  return {
    clientX: o$originalClientX,
    clientY: o$originalClientY,
    deltaX: o$clientX - l$clientX,
    deltaY: o$clientY - l$clientY,
    distX: o$clientX - p.clientX,
    distY: o$clientY - p.clientY
  }
}
function xa(e) {
  return Math.sqrt(Math.pow(e[0].clientX - e[1].clientX, 2) + Math.pow(e[0].clientY - e[1].clientY, 2))
}
function Da(e) {
  return {
    clientX: e.clientX,
    clientY: e.clientY
  }
}
function Ma(e, t) {
  if (undefined === t) {
    t = e.length
  }
  for (var n = {
      clientX: 0,
      clientY: 0,
      originalClientX: 0,
      originalClientY: 0
    }, r = 0; r < t; ++r) {
    var o = e[r]
    n.originalClientX += "originalClientX" in o ? o.originalClientX : o.clientX
    n.originalClientY += "originalClientY" in o ? o.originalClientY : o.clientY
    n.clientX += o.clientX
    n.clientY += o.clientY
  }
  return t ? {
    clientX: n.clientX / t,
    clientY: n.clientY / t,
    originalClientX: n.originalClientX / t,
    originalClientY: n.originalClientY / t
  } : n
}
var La = function () {
  function e(e) {
    this.prevClients = []
    this.startClients = []
    this.movement = 0
    this.length = 0
    this.startClients = e
    this.prevClients = e
    this.length = e.length
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.addClients = function (e) {
    if (undefined === e) {
      e = this.prevClients
    }
    var t = this.getPosition(e)
    var /* [auto-meaningful-name] */t$deltaX = t.deltaX
    var /* [auto-meaningful-name] */t$deltaY = t.deltaY
    this.movement += Math.sqrt(t$deltaX * t$deltaX + t$deltaY * t$deltaY)
    this.prevClients = e
    return t
  }
  e$prototype.getAngle = function (e) {
    if (undefined === e) {
      e = this.prevClients
    }
    return Na(e)
  }
  e$prototype.getRotation = function (e) {
    if (undefined === e) {
      e = this.prevClients
    }
    return Na(e) - Na(this.startClients)
  }
  e$prototype.getPosition = function (e) {
    return ka(e || this.prevClients, this.prevClients, this.startClients)
  }
  e$prototype.getPositions = function (e) {
    if (undefined === e) {
      e = this.prevClients
    }
    var /* [auto-meaningful-name] */this$prevClients = this.prevClients
    return this.startClients.map(function (n, r) {
      return ka([e[r]], [this$prevClients[r]], [n])
    })
  }
  e$prototype.getMovement = function (e) {
    var /* [auto-meaningful-name] */this$movement = this.movement
    if (!e) {
      return this$movement
    }
    var n = Ma(e, this.length)
    var r = Ma(this.prevClients, this.length)
    var o = n.clientX - r.clientX
    var i = n.clientY - r.clientY
    return Math.sqrt(o * o + i * i) + this$movement
  }
  e$prototype.getDistance = function (e) {
    if (undefined === e) {
      e = this.prevClients
    }
    return xa(e)
  }
  e$prototype.getScale = function (e) {
    if (undefined === e) {
      e = this.prevClients
    }
    return xa(e) / xa(this.startClients)
  }
  e$prototype.move = function (e, t) {
    this.startClients.forEach(function (n) {
      n.clientX -= e
      n.clientY -= t
    })
    this.prevClients.forEach(function (n) {
      n.clientX -= e
      n.clientY -= t
    })
  }
  return e
}()
var Pa = ["textarea", "input"]
var Ba = function (e) {
  function t(t, n) {
    if (undefined === n) {
      n = {}
    }
    var r = e.call(this) || this
    r.options = {}
    r.flag = false
    r.pinchFlag = false
    r.datas = {}
    r.isDrag = false
    r.isPinch = false
    r.isMouse = false
    r.isTouch = false
    r.clientStores = []
    r.targets = []
    r.prevTime = 0
    r.doubleFlag = false
    r.onDragStart = function (e, t) {
      if (undefined === t) {
        t = true
      }
      if (r.flag || false !== e.cancelable) {
        var /* [auto-meaningful-name] */r$options = r.options
        var /* [auto-meaningful-name] */r$options$container = r$options.container
        var /* [auto-meaningful-name] */r$options$pinchOutside = r$options.pinchOutside
        var /* [auto-meaningful-name] */r$options$preventRightClick = r$options.preventRightClick
        var /* [auto-meaningful-name] */r$options$preventDefault = r$options.preventDefault
        var /* [auto-meaningful-name] */r$options$checkInput = r$options.checkInput
        var /* [auto-meaningful-name] */r$isTouch = r.isTouch
        var u = !r.flag
        if (u) {
          var /* [auto-meaningful-name] */document$activeElement = document.activeElement
          var /* [auto-meaningful-name] */e$target = e.target
          var f = e$target.tagName.toLowerCase()
          var h = Pa.indexOf(f) > -1
          var /* [auto-meaningful-name] */e$target$isContentEditable = e$target.isContentEditable
          if (h || e$target$isContentEditable) {
            if (r$options$checkInput || document$activeElement === e$target) {
              return false
            }
            if (document$activeElement && e$target$isContentEditable && document$activeElement.isContentEditable && document$activeElement.contains(e$target)) {
              return false
            }
          } else if ((r$options$preventDefault || "touchstart" === e.type) && document$activeElement) {
            var /* [auto-meaningful-name] */document$activeElement$tagName = document$activeElement.tagName
            if (document$activeElement.isContentEditable || Pa.indexOf(document$activeElement$tagName) > -1) {
              document$activeElement.blur()
            }
          }
          r.clientStores = [new La(Ra(e))]
          r.flag = true
          r.isDrag = false
          r.datas = {}
          if (r$options$preventRightClick && (3 === e.which || 2 === e.button)) {
            r.initDrag()
            return false
          }
          r.doubleFlag = gi() - r.prevTime < 200
          if (false === r.emit("dragStart", ja({
            datas: r.datas,
            inputEvent: e,
            isTrusted: t,
            isDouble: r.doubleFlag
          }, r.getCurrentStore().getPosition()))) {
            r.initDrag()
          }
          if (r.flag && r$options$preventDefault) {
            e.preventDefault()
          }
        }
        if (!r.flag) {
          return false
        }
        var _ = 0
        if (u && r$isTouch && r$options$pinchOutside) {
          _ = setTimeout(function () {
            Si(r$options$container, "touchstart", r.onDragStart, {
              passive: false
            })
          })
        }
        if (!u && r$isTouch && r$options$pinchOutside) {
          Ai(r$options$container, "touchstart", r.onDragStart)
        }
        if (r.flag && function (e) {
          return e.touches && e.touches.length >= 2
        }(e)) {
          clearTimeout(_)
          if (u && e.touches.length !== e.changedTouches.length) {
            return
          }
          if (!r.pinchFlag) {
            r.onPinchStart(e)
          }
        }
      }
    }
    r.onDrag = function (e, t) {
      if (r.flag) {
        var n = Ra(e)
        var o = r.moveClients(n, e, false)
        if (r.pinchFlag || o.deltaX || o.deltaY) {
          r.emit("drag", ja({}, o, {
            isScroll: !!t,
            inputEvent: e
          }))
        }
        if (r.pinchFlag) {
          r.onPinch(e, n)
        }
        r.getCurrentStore().addClients(n)
      }
    }
    r.onDragEnd = function (e) {
      if (r.flag) {
        var /* [auto-meaningful-name] */r$options = r.options
        var /* [auto-meaningful-name] */r$options$pinchOutside = r$options.pinchOutside
        var /* [auto-meaningful-name] */r$options$container = r$options.container
        if (r.isTouch && r$options$pinchOutside) {
          Ai(r$options$container, "touchstart", r.onDragStart)
        }
        r.flag = false
        var i = r.getCurrentStore().getPosition()
        var a = gi()
        var s = !r.isDrag && r.doubleFlag
        r.prevTime = r.isDrag || s ? 0 : a
        r.emit("dragEnd", ja({
          datas: r.datas,
          isDouble: s,
          isDrag: r.isDrag,
          inputEvent: e
        }, i))
        if (r.pinchFlag) {
          r.onPinchEnd(e)
        }
        r.clientStores = []
      }
    }
    r.onBlur = function () {
      r.onDragEnd()
    }
    var o = [].concat(t)
    r.options = ja({
      checkInput: false,
      container: o.length > 1 ? window : o[0],
      preventRightClick: true,
      preventDefault: true,
      checkWindowBlur: false,
      pinchThreshold: 0,
      events: ["touch", "mouse"]
    }, n)
    var /* [auto-meaningful-name] */r$options = r.options
    var /* [auto-meaningful-name] */r$options$container = r$options.container
    var /* [auto-meaningful-name] */r$options$events = r$options.events
    var /* [auto-meaningful-name] */r$options$checkWindowBlur = r$options.checkWindowBlur
    r.isTouch = r$options$events.indexOf("touch") > -1
    r.isMouse = r$options$events.indexOf("mouse") > -1
    r.targets = o
    if (r.isMouse) {
      o.forEach(function (e) {
        Si(e, "mousedown", r.onDragStart)
      })
      Si(r$options$container, "mousemove", r.onDrag)
      Si(r$options$container, "mouseup", r.onDragEnd)
      Si(r$options$container, "contextmenu", r.onDragEnd)
    }
    if (r$options$checkWindowBlur) {
      Si(window, "blur", r.onBlur)
    }
    if (r.isTouch) {
      var l = {
        passive: false
      }
      o.forEach(function (e) {
        Si(e, "touchstart", r.onDragStart, l)
      })
      Si(r$options$container, "touchmove", r.onDrag, l)
      Si(r$options$container, "touchend", r.onDragEnd, l)
      Si(r$options$container, "touchcancel", r.onDragEnd, l)
    }
    return r
  }
  !function (e, t) {
    function n() {
      this.constructor = e
    }
    Ia(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  }(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.getMovement = function (e) {
    return this.getCurrentStore().getMovement(e) + this.clientStores.slice(1).reduce(function (e, t) {
      return e + t.movement
    }, 0)
  }
  t$prototype.isDragging = function () {
    return this.isDrag
  }
  t$prototype.isFlag = function () {
    return this.flag
  }
  t$prototype.isPinchFlag = function () {
    return this.pinchFlag
  }
  t$prototype.isDoubleFlag = function () {
    return this.doubleFlag
  }
  t$prototype.isPinching = function () {
    return this.isPinch
  }
  t$prototype.scrollBy = function (e, t, n, r) {
    if (undefined === r) {
      r = true
    }
    if (this.flag) {
      this.clientStores[0].move(e, t)
      if (r) {
        this.onDrag(n, true)
      }
    }
  }
  t$prototype.move = function (e, t) {
    var n = e[0]
    var r = e[1]
    var /* [auto-meaningful-name] */this$getCurrentStore$prevClients = this.getCurrentStore().prevClients
    return this.moveClients(this$getCurrentStore$prevClients.map(function (e) {
      var /* [auto-meaningful-name] */e$clientX = e.clientX
      var /* [auto-meaningful-name] */e$clientY = e.clientY
      return {
        clientX: e$clientX + n,
        clientY: e$clientY + r,
        originalClientX: e$clientX,
        originalClientY: e$clientY
      }
    }), t, true)
  }
  t$prototype.triggerDragStart = function (e) {
    this.onDragStart(e, false)
  }
  t$prototype.setEventDatas = function (e) {
    var /* [auto-meaningful-name] */this$datas = this.datas
    for (var n in e) this$datas[n] = e[n]
    return this
  }
  t$prototype.getEventDatas = function () {
    return this.datas
  }
  t$prototype.unset = function () {
    var e = this
    var /* [auto-meaningful-name] */this$targets = this.targets
    var /* [auto-meaningful-name] */this$options$container = this.options.container
    this.off()
    Ai(window, "blur", this.onBlur)
    if (this.isMouse) {
      this$targets.forEach(function (t) {
        Ai(t, "mousedown", e.onDragStart)
      })
      Ai(this$options$container, "mousemove", this.onDrag)
      Ai(this$options$container, "mouseup", this.onDragEnd)
      Ai(this$options$container, "contextmenu", this.onDragEnd)
    }
    if (this.isTouch) {
      this$targets.forEach(function (t) {
        Ai(t, "touchstart", e.onDragStart)
      })
      Ai(this$options$container, "touchstart", this.onDragStart)
      Ai(this$options$container, "touchmove", this.onDrag)
      Ai(this$options$container, "touchend", this.onDragEnd)
      Ai(this$options$container, "touchcancel", this.onDragEnd)
    }
  }
  t$prototype.onPinchStart = function (e) {
    var /* [auto-meaningful-name] */this$options$pinchThreshold = this.options.pinchThreshold
    if (!(this.isDrag && this.getMovement() > this$options$pinchThreshold)) {
      var n = new La(Ra(e))
      this.pinchFlag = true
      this.clientStores.splice(0, 0, n)
      if (false === this.emit("pinchStart", ja({
        datas: this.datas,
        angle: n.getAngle(),
        touches: this.getCurrentStore().getPositions()
      }, n.getPosition(), {
        inputEvent: e
      }))) {
        this.pinchFlag = false
      }
    }
  }
  t$prototype.onPinch = function (e, t) {
    if (this.flag && this.pinchFlag && !(t.length < 2)) {
      var n = this.getCurrentStore()
      this.isPinch = true
      this.emit("pinch", ja({
        datas: this.datas,
        movement: this.getMovement(t),
        angle: n.getAngle(t),
        rotation: n.getRotation(t),
        touches: n.getPositions(t),
        scale: n.getScale(t),
        distance: n.getDistance(t)
      }, n.getPosition(t), {
        inputEvent: e
      }))
    }
  }
  t$prototype.onPinchEnd = function (e) {
    if (this.pinchFlag) {
      var /* [auto-meaningful-name] */this$isPinch = this.isPinch
      this.isPinch = false
      this.pinchFlag = false
      var n = this.getCurrentStore()
      this.emit("pinchEnd", ja({
        datas: this.datas,
        isPinch: this$isPinch,
        touches: n.getPositions()
      }, n.getPosition(), {
        inputEvent: e
      }))
      this.isPinch = false
      this.pinchFlag = false
    }
  }
  t$prototype.initDrag = function () {
    this.clientStores = []
    this.pinchFlag = false
    this.doubleFlag = false
    this.prevTime = 0
    this.flag = false
  }
  t$prototype.getCurrentStore = function () {
    return this.clientStores[0]
  }
  t$prototype.moveClients = function (e, t, n) {
    var r = this.getCurrentStore()[n ? "addClients" : "getPosition"](e)
    this.isDrag = true
    return ja({
      datas: this.datas
    }, r, {
      movement: this.getMovement(e),
      isDrag: this.isDrag,
      isPinch: this.isPinch,
      isScroll: false,
      inputEvent: t
    })
  }
  return t
}(wa)
var Fa = function (e) {
  for (var t = 5381, /* [auto-meaningful-name] */e$length = e.length; e$length;) {
    t = 33 * t ^ e.charCodeAt(--e$length)
  }
  return t >>> 0
}
function Ga(e, t, n, r) {
  var o = document.createElement("style")
  o.setAttribute("type", "text/css")
  o.setAttribute("data-styled-id", e)
  if (n.nonce) {
    o.setAttribute("nonce", n.nonce)
  }
  o.innerHTML = function (e, t, n) {
    return n.original ? t : t.replace(/([^};{\s}][^};{]*|^\s*){/gm, function (t, n) {
      var r = n.trim()
      return (r ? fi(r) : [""]).map(function (t) {
        var n = t.trim()
        return 0 === n.indexOf("@") ? n : n.indexOf(":global") > -1 ? n.replace(/\:global/g, "") : n.indexOf(":host") > -1 ? "" + n.replace(/\:host/g, "." + e) : n ? "." + e + " " + n : "." + e
      }).join(", ") + " {"
    })
  }(e, t, n);
  (r || document.head || document.body).appendChild(o)
  return o
}
var Wa = function (e) {
  var t
  var n = "rCS" + Fa(e).toString(36)
  var r = 0
  return {
    className: n,
    inject: function (o, i) {
      if (undefined === i) {
        i = {}
      }
      var a
      var s = function (e) {
        if (e && e.getRootNode) {
          var t = e.getRootNode()
          if (11 === t.nodeType) {
            return t
          }
        }
      }(o)
      var c = 0 === r
      if (s || c) {
        a = Ga(n, e, i, s)
      }
      if (c) {
        t = a
      }
      if (!s) {
        ++r
      }
      return {
        destroy: function () {
          if (s) {
            o.removeChild(a)
            a = null
          } else {
            if (r > 0) {
              --r
            }
            if (0 === r && t) {
              t.parentNode.removeChild(t)
              t = null
            }
          }
        }
      }
    }
  }
}
var Ua = function (e, t) {
  return (Ua = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function Ha(e, t) {
  function n() {
    this.constructor = e
  }
  Ua(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var Va = function () {
  return (Va = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o]
      }
    }
    return e
  }).apply(this, arguments)
}
var za = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.injectResult = null
    t.tag = "div"
    return t
  }
  Ha(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.render = function () {
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$className = this$props.className
    var n = undefined === this$props$className ? "" : this$props$className
    this$props.cspNonce
    var /* [auto-meaningful-name] */this$props$portalContainer = this$props.portalContainer
    var o = function (e, t) {
      var n = {}
      for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r]
      }
      if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
          if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
            n[r[o]] = e[r[o]]
          }
        }
      }
      return n
    }(this$props, ["className", "cspNonce", "portalContainer"])
    var /* [auto-meaningful-name] */this$injector$className = this.injector.className
    var /* [auto-meaningful-name] */this$tag = this.tag
    var s = {}
    if ((version || "").indexOf("simple") > -1 && this$props$portalContainer) {
      s = {
        portalContainer: this$props$portalContainer
      }
    }
    return createElement(this$tag, Va({
      ref: ko(this, "element"),
      "data-styled-id": this$injector$className,
      className: n + " " + this$injector$className
    }, s, o))
  }
  t$prototype.componentDidMount = function () {
    this.injectResult = this.injector.inject(this.element, {
      nonce: this.props.cspNonce
    })
  }
  t$prototype.componentWillUnmount = function () {
    this.injectResult.destroy()
    this.injectResult = null
  }
  t$prototype.getElement = function () {
    return this.element
  }
  return t
}(Component)
var Ya = function (e, t) {
  var n = Wa(t)
  return function (t) {
    function r() {
      var r = null !== t && t.apply(this, arguments) || this
      r.injector = n
      r.tag = e
      return r
    }
    Ha(r, t)
    return r
  }(za)
}
var Ka = function (e, t) {
  return (Ka = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function qa(e, t) {
  function n() {
    this.constructor = e
  }
  Ka(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var Xa = function () {
  return (Xa = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o]
      }
    }
    return e
  }).apply(this, arguments)
}
function Qa() {
  for (var e = 0, t = 0, /* [auto-meaningful-name] */arguments$length = arguments.length; t < arguments$length; t++) {
    e += arguments[t].length
  }
  var r = Array(e)
  var o = 0
  for (t = 0; t < arguments$length; t++) {
    for (var i = arguments[t], a = 0, /* [auto-meaningful-name] */i$length = i.length; a < i$length; a++, o++) {
      r[o] = i[a]
    }
  }
  return r
}
function Za(e, t) {
  var n
  return Xa({
    events: {},
    props: (n = {}, n[e] = Boolean, n),
    name: e
  }, t)
}
function Ja(e, t) {
  return "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + 32 * e + "px\" height=\"" + 32 * e + "px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(" + t + "deg);transform-origin: 16px 16px\"></path></svg>"
}
var /* [auto-meaningful-name] */jo$browser$webkit = jo().browser.webkit
var es = jo$browser$webkit && function () {
  var e = "undefined" === typeof window ? {
    userAgent: ""
  } : window.navigator
  var t = /applewebkit\/([^\s]+)/g.exec(e.userAgent.toLowerCase())
  return !!t && parseFloat(t[1]) < 605
}()
var /* [auto-meaningful-name] */Moveable = "moveable-"
var ns = "\n{\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tleft: 0;\n\ttop: 0;\n    z-index: 3000;\n    --moveable-color: #4af;\n    --zoom: 1;\n    --zoompx: 1px;\n    will-change: transform;\n}\n.control-box {\n    z-index: 0;\n}\n.line, .control {\n    position: absolute;\n\tleft: 0;\n    top: 0;\n    will-change: transform;\n}\n.control {\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 50%;\n\tborder: 2px solid #fff;\n\tbox-sizing: border-box;\n    background: #4af;\n    background: var(--moveable-color);\n\tmargin-top: -7px;\n    margin-left: -7px;\n    border: 2px solid #fff;\n    z-index: 10;\n}\n.padding {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100px;\n    height: 100px;\n    transform-origin: 0 0;\n}\n.line {\n\twidth: 1px;\n    height: 1px;\n    background: #4af;\n    background: var(--moveable-color);\n\ttransform-origin: 0px 50%;\n}\n.line.dashed {\n    box-sizing: border-box;\n    background: transparent;\n}\n.line.dashed.horizontal {\n    border-top: 1px dashed #4af;\n    border-top-color: #4af;\n    border-top-color: var(--moveable-color);\n}\n.line.dashed.vertical {\n    border-left: 1px dashed #4af;\n    border-left-color: #4af;\n    border-left-color: var(--moveable-color);\n}\n.line.vertical {\n    transform: translateX(-50%);\n}\n.line.horizontal {\n    transform: translateY(-50%);\n}\n.line.vertical.bold {\n    width: 2px;\n}\n.line.horizontal.bold {\n    height: 2px;\n}\n\n.control.origin {\n\tborder-color: #f55;\n\tbackground: #fff;\n\twidth: 12px;\n\theight: 12px;\n\tmargin-top: -6px;\n    margin-left: -6px;\n\tpointer-events: none;\n}\n" + [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map(function (e) {
  return "\n.direction[data-rotation=\"" + e + "\"] {\n\t" + function (e) {
    var t = Ja(1, e)
    var n = Ja(2, e)
    var r = 45 * Math.round(e / 45) % 180
    var /* [auto-meaningful-name] */NsResize = "ns-resize"
    if (135 === r) {
      NsResize = "nwse-resize"
    } else {
      if (45 === r) {
        NsResize = "nesw-resize"
      } else {
        if (90 === r) {
          NsResize = "ew-resize"
        }
      }
    }
    return "cursor:" + NsResize + ";cursor: url('" + t + "') 16 16, " + NsResize + ";cursor: -webkit-image-set(url('" + t + "') 1x, url('" + n + "') 2x) 16 16, " + NsResize + ";"
  }(e) + "\n}\n"
}).join("\n") + "\n.group {\n    z-index: -1;\n}\n.area {\n    position: absolute;\n}\n.area-pieces {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: none;\n}\n.area.avoid, .area.pass {\n    pointer-events: none;\n}\n.area.avoid+.area-pieces {\n    display: block;\n}\n.area-piece {\n    position: absolute;\n}\n\n" + (es ? ":global svg *:before {\n\tcontent:\"\";\n\ttransform-origin: inherit;\n}" : "") + "\n"
var rs = [[0, 1, 2], [1, 0, 3], [2, 0, 3], [3, 1, 2]]
var os = Math.pow(10, 10)
var is = -os
var as = ["n", "w", "s", "e", "nw", "ne", "sw", "se"]
var ss = {
  n: [0, 1],
  s: [2, 3],
  w: [2, 0],
  e: [1, 3],
  nw: [0],
  ne: [1],
  sw: [2],
  se: [3]
}
var cs = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}
var ls = ["isMoveableElement", "updateRect", "updateTarget", "destroy", "dragStart", "isInside", "hitTest", "setState", "getRect", "request", "isDragging", "getManager"]
function us() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e[t] = arguments[t]
  }
  return No.apply(undefined, Qa([Moveable], e))
}
function ds(e, t, n) {
  return Mi(t, Zi(n, t), e, Zi(n.map(function (e) {
    return -e
  }), t))
}
function ps(e) {
  return fs(Hs(e, ":before")).map(function (t, n) {
    var r = Ko(t)
    var /* [auto-meaningful-name] */r$value = r.value
    var /* [auto-meaningful-name] */r$unit = r.unit
    return r$value * function (e, t, n) {
      return "%" === t ? Es(e.ownerSVGElement)[n ? "width" : "height"] / 100 : 1
    }(e, r$unit, 0 === n)
  })
}
function fs(e) {
  var /* [auto-meaningful-name] */e$transformOrigin = e.transformOrigin
  return e$transformOrigin ? e$transformOrigin.split(" ") : ["0", "0"]
}
function hs(e, t, n) {
  for (var /* [auto-meaningful-name] */document$body = document.body, o = !e || n ? e : e.parentElement, i = e === t || o === t, /* [auto-meaningful-name] */Relative = "relative"; o && o !== document$body;) {
    if (t === o) {
      i = true
    }
    var s = Hs(o)
    var /* [auto-meaningful-name] */s$transform = s.transform
    Relative = s.position
    if ("svg" === o.tagName.toLowerCase() || "static" !== Relative || s$transform && "none" !== s$transform) {
      break
    }
    o = o.parentElement
    Relative = "relative"
  }
  return {
    isStatic: "static" === Relative,
    isEnd: i || !o || o === document$body,
    offsetParent: o || document$body
  }
}
function ms(e, t, n, r) {
  var o
  var i = e.tagName.toLowerCase()
  var /* [auto-meaningful-name] */e$offsetLeft = e.offsetLeft
  var /* [auto-meaningful-name] */e$offsetTop = e.offsetTop
  if (r) {
    var c = (t || document.documentElement).getBoundingClientRect()
    e$offsetLeft -= c.left
    e$offsetTop -= c.top
  }
  var l
  var u
  var d = Lo(e$offsetLeft)
  var p = !d
  if (p || "svg" === i) {
    u = (l = fs(n).map(function (e) {
      return parseFloat(e)
    })).slice()
  } else {
    u = (l = es ? ps(e) : fs(n).map(function (e) {
      return parseFloat(e)
    })).slice()
    p = true
    e$offsetLeft = (o = function (e, t) {
      if (!e.getBBox) {
        return [0, 0]
      }
      var n = e.getBBox()
      var r = Es(e.ownerSVGElement)
      var o = n.x - r.x
      var i = n.y - r.y
      return [o, i, t[0] - o, t[1] - i]
    }(e, l))[0]
    e$offsetTop = o[1]
    l[0] = o[2]
    l[1] = o[3]
  }
  return {
    tagName: i,
    isSVG: d,
    hasOffset: p,
    offset: [e$offsetLeft || 0, e$offsetTop || 0],
    origin: l,
    targetOrigin: u
  }
}
function gs(e, t, n) {
  if (undefined === n) {
    n = Hs(e)
  }
  var r = Hs(document.body)
  var /* [auto-meaningful-name] */r$position = r.position
  if (!t && (!r$position || "static" === r$position)) {
    return [0, 0]
  }
  var i = parseInt(r.marginLeft, 10)
  var a = parseInt(r.marginTop, 10)
  if ("absolute" === n.position) {
    if (!("auto" === n.top && "auto" === n.bottom)) {
      a = 0
    }
    if (!("auto" === n.left && "auto" === n.right)) {
      i = 0
    }
  }
  return [i, a]
}
function _s(e) {
  e.forEach(function (e) {
    var /* [auto-meaningful-name] */e$matrix = e.matrix
    if (e$matrix) {
      e.matrix = Di(e$matrix, 3, 4)
    }
  })
}
function vs(e, t, n) {
  for (var r, o, i, a, s, /* [auto-meaningful-name] */g$transform, l = e, u = [], d = !n && e === t, p = d, f = false, h = 3, /* [auto-meaningful-name] */hsTTTrue$offsetParent = hs(t, t, true).offsetParent; l && !p;) {
    p = d
    var g = Hs(l)
    var /* [auto-meaningful-name] */g$position = g.position
    var v = "fixed" === g$position
    g$transform = g.transform
    a = g$transform && "none" !== g$transform ? Po(g$transform) ? g$transform : Yo(g$transform).value.split(/s*,\s*/g).map(function (e) {
      return parseFloat(e)
    }) : [1, 0, 0, 1, 0, 0]
    if (undefined === (s = undefined)) {
      s = 6 === a.length
    }
    var b = s ? [a[0], a[1], 0, a[2], a[3], 0, a[4], a[5], 1] : a
    var /* [auto-meaningful-name] */b$length = b.length
    if (!(f || 16 !== b$length)) {
      f = true
      h = 4
      _s(u)
      if (i) {
        i = Di(i, 3, 4)
      }
    }
    if (f && 9 === b$length) {
      b = Di(b, 3, 4)
    }
    var E = ms(l, t, g, v)
    var /* [auto-meaningful-name] */E$tagName = E.tagName
    var /* [auto-meaningful-name] */E$hasOffset = E.hasOffset
    var /* [auto-meaningful-name] */E$isSVG = E.isSVG
    var /* [auto-meaningful-name] */E$origin = E.origin
    var /* [auto-meaningful-name] */E$targetOrigin = E.targetOrigin
    var /* [auto-meaningful-name] */E$offset = E.offset
    var I = E$offset[0]
    var j = E$offset[1]
    if ("svg" === E$tagName && i) {
      u.push({
        type: "target",
        target: l,
        matrix: Os(l, h)
      })
      u.push({
        type: "offset",
        target: l,
        matrix: Xi(h)
      })
    } else {
      if ("g" === E$tagName && e !== l) {
        I = 0
        j = 0
      }
    }
    var N = hs(l, t)
    var /* [auto-meaningful-name] */N$offsetParent = N.offsetParent
    var /* [auto-meaningful-name] */N$isEnd = N.isEnd
    var /* [auto-meaningful-name] */N$isStatic = N.isStatic
    if (jo$browser$webkit && E$hasOffset && !E$isSVG && N$isStatic && ("relative" === g$position || "static" === g$position)) {
      I -= N$offsetParent.offsetLeft
      j -= N$offsetParent.offsetTop
      d = d || N$isEnd
    }
    var D = 0
    var M = 0
    if (E$hasOffset && hsTTTrue$offsetParent !== N$offsetParent) {
      D = N$offsetParent.clientLeft
      M = N$offsetParent.clientTop
    }
    if (E$hasOffset && N$offsetParent === document.body) {
      var L = gs(l, false, g)
      I += L[0]
      j += L[1]
    }
    u.push({
      type: "target",
      target: l,
      matrix: ds(b, h, E$origin)
    })
    if (E$hasOffset) {
      u.push({
        type: "offset",
        target: l,
        matrix: Zi([I - l.scrollLeft + D, j - l.scrollTop + M], h)
      })
    } else {
      u.push({
        type: "offset",
        target: l,
        origin: E$origin
      })
    }
    if (!i) {
      i = b
    }
    if (!r) {
      r = E$origin
    }
    if (!o) {
      o = E$targetOrigin
    }
    if (p || v) {
      break
    }
    l = N$offsetParent
    d = N$isEnd
    if (!(n && l !== document.body)) {
      p = d
    }
  }
  if (!i) {
    i = Xi(h)
  }
  if (!r) {
    r = [0, 0]
  }
  if (!o) {
    o = [0, 0]
  }
  return {
    offsetContainer: hsTTTrue$offsetParent,
    matrixes: u,
    targetMatrix: i,
    transformOrigin: r,
    targetOrigin: o,
    is3d: f
  }
}
function bs(e, t, n, r) {
  var o
  if (undefined === n) {
    n = t
  }
  var i = 0
  var a = 0
  var s = 0
  var c = {}
  if (e) {
    var l = Hs(e)
    i = e.offsetWidth
    a = e.offsetHeight
    if (Lo(i)) {
      i = (o = ks(e, l, true))[0]
      a = o[1]
    }
  }
  if (e) {
    var u = function (e, t, n, r) {
      if (undefined === n) {
        n = t
      }
      var o = vs(e, t)
      var /* [auto-meaningful-name] */o$matrixes = o.matrixes
      var /* [auto-meaningful-name] */o$is3d = o.is3d
      var /* [auto-meaningful-name] */o$targetMatrix = o.targetMatrix
      var /* [auto-meaningful-name] */o$transformOrigin = o.transformOrigin
      var /* [auto-meaningful-name] */o$targetOrigin = o.targetOrigin
      var u = vs(o.offsetContainer, n, true)
      var /* [auto-meaningful-name] */u$matrixes = u.matrixes
      var /* [auto-meaningful-name] */u$is3d = u.is3d
      var f = r || u$is3d || o$is3d
      var h = f ? 4 : 3
      var m = "svg" !== e.tagName.toLowerCase() && "ownerSVGElement" in e
      var g = o$targetMatrix
      var _ = Xi(h)
      var v = Xi(h)
      var b = Xi(h)
      var y = Xi(h)
      var /* [auto-meaningful-name] */o$matrixes$length = o$matrixes.length
      var O = n || document.body
      var /* [auto-meaningful-name] */hsOOTrue$offsetParent = hs(O, O, true).offsetParent
      u$matrixes.reverse()
      o$matrixes.reverse()
      if (!o$is3d && f) {
        g = Di(g, 3, 4)
        _s(o$matrixes)
      }
      if (!u$is3d && f) {
        _s(u$matrixes)
      }
      u$matrixes.forEach(function (e) {
        v = Li(v, e.matrix, h)
      })
      o$matrixes.forEach(function (e, t) {
        if (o$matrixes$length - 2 === t) {
          b = _.slice()
        }
        if (o$matrixes$length - 1 === t) {
          y = _.slice()
        }
        if (!e.matrix) {
          var n = function (e, t, n, r, o) {
            var i
            var /* [auto-meaningful-name] */e$target = e.target
            var /* [auto-meaningful-name] */e$origin = e.origin
            var /* [auto-meaningful-name] */t$matrix = t.matrix
            var l = ks(e$target, undefined, true)
            var u = l[0]
            var d = l[1]
            var p = n.getBoundingClientRect()
            var f = [0, 0]
            if (n === document.body) {
              f = gs(e$target, true)
            }
            var h = e$target.getBoundingClientRect()
            var m = h.left - p.left + n.scrollLeft - (n.clientLeft || 0) + f[0]
            var g = h.top - p.top + n.scrollTop - (n.clientTop || 0) + f[1]
            var /* [auto-meaningful-name] */h$width = h.width
            var /* [auto-meaningful-name] */h$height = h.height
            var b = Mi(r, o, t$matrix)
            var y = Ss(b, u, d, r)
            var /* [auto-meaningful-name] */y$left = y.left
            var /* [auto-meaningful-name] */y$top = y.top
            var /* [auto-meaningful-name] */y$width = y.width
            var /* [auto-meaningful-name] */y$height = y.height
            var T = ws(b, e$origin, r)
            var S = Bi(T, [y$left, y$top])
            var A = [m + S[0] * h$width / y$width, g + S[1] * h$height / y$height]
            var I = [0, 0]
            var j = 0
            for (; ++j < 10;) {
              var N = ki(o, r)
              i = Bi(ws(N, A, r), ws(N, T, r))
              I[0] = i[0]
              I[1] = i[1]
              var R = Ss(Mi(r, o, Zi(I, r), t$matrix), u, d, r)
              var /* [auto-meaningful-name] */R$left = R.left
              var /* [auto-meaningful-name] */R$top = R.top
              var D = R$left - m
              var M = R$top - g
              if (Math.abs(D) < 2 && Math.abs(M) < 2) {
                break
              }
              A[0] -= D
              A[1] -= M
            }
            return I.map(function (e) {
              return Math.round(e)
            })
          }(e, o$matrixes[t + 1], hsOOTrue$offsetParent, h, Li(v, _, h))
          e.matrix = Zi(n, h)
        }
        _ = Li(_, e.matrix, h)
      })
      var C = !m && o$is3d
      if (!g) {
        g = Xi(C ? 4 : 3)
      }
      var T = ys(m && 16 === g.length ? Di(g, 4, 3) : g, C)
      return {
        rootMatrix: v = Ri(v, h, h),
        beforeMatrix: b,
        offsetMatrix: y,
        allMatrix: _,
        targetMatrix: g,
        targetTransform: T,
        transformOrigin: o$transformOrigin,
        targetOrigin: o$targetOrigin,
        is3d: f
      }
    }(e, t, n, r)
    var d = As(u.allMatrix, u.transformOrigin, i, a)
    c = Xa(Xa({}, u), d)
    var p = As(u.allMatrix, [50, 50], 100, 100)
    s = xs([p.pos1, p.pos2], p.direction)
  }
  var f = r ? 4 : 3
  return Xa({
    width: i,
    height: a,
    rotation: s,
    rootMatrix: Xi(f),
    beforeMatrix: Xi(f),
    offsetMatrix: Xi(f),
    allMatrix: Xi(f),
    targetMatrix: Xi(f),
    targetTransform: "",
    transformOrigin: [0, 0],
    targetOrigin: [0, 0],
    is3d: !!r,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    origin: [0, 0],
    pos1: [0, 0],
    pos2: [0, 0],
    pos3: [0, 0],
    pos4: [0, 0],
    direction: 1
  }, c)
}
function ys(e, t) {
  if (undefined === t) {
    t = e.length > 9
  }
  return (t ? "matrix3d" : "matrix") + "(" + Fi(e, !t).join(",") + ")"
}
function Es(e) {
  var /* [auto-meaningful-name] */e$clientWidth = e.clientWidth
  var /* [auto-meaningful-name] */e$clientHeight = e.clientHeight
  if (!e) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      clientWidth: e$clientWidth,
      clientHeight: e$clientHeight
    }
  }
  var /* [auto-meaningful-name] */e$viewBox = e.viewBox
  var o = e$viewBox && e$viewBox.baseVal || {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }
  return {
    x: o.x,
    y: o.y,
    width: o.width || e$clientWidth,
    height: o.height || e$clientHeight,
    clientWidth: e$clientWidth,
    clientHeight: e$clientHeight
  }
}
function Os(e, t) {
  var n = Es(e)
  var /* [auto-meaningful-name] */n$width = n.width
  var /* [auto-meaningful-name] */n$height = n.height
  var /* [auto-meaningful-name] */n$clientWidth = n.clientWidth
  var /* [auto-meaningful-name] */n$clientHeight = n.clientHeight
  var s = n$clientWidth / n$width
  var c = n$clientHeight / n$height
  var /* [auto-meaningful-name] */e$preserveAspectRatio$baseVal = e.preserveAspectRatio.baseVal
  var /* [auto-meaningful-name] */e$preserveAspectRatio$baseVal$align = e$preserveAspectRatio$baseVal.align
  var /* [auto-meaningful-name] */e$preserveAspectRatio$baseVal$meetOrSlice = e$preserveAspectRatio$baseVal.meetOrSlice
  var p = [0, 0]
  var f = [s, c]
  var h = [0, 0]
  if (1 !== e$preserveAspectRatio$baseVal$align) {
    var m = (e$preserveAspectRatio$baseVal$align - 2) % 3
    var g = Math.floor((e$preserveAspectRatio$baseVal$align - 2) / 3)
    p[0] = n$width * m / 2
    p[1] = n$height * g / 2
    var _ = 2 === e$preserveAspectRatio$baseVal$meetOrSlice ? Math.max(c, s) : Math.min(s, c)
    f[0] = _
    f[1] = _
    h[0] = (n$clientWidth - n$width) / 2 * m
    h[1] = (n$clientHeight - n$height) / 2 * g
  }
  var v = Qi(f, t)
  v[t * (t - 1)] = h[0]
  v[t * (t - 1) + 1] = h[1]
  return ds(v, t, p)
}
function ws(e, t, n) {
  return Gi(e, xi(t, n), n)
}
function Cs(e, t, n, r) {
  return [[0, 0], [t, 0], [0, n], [t, n]].map(function (t) {
    return ws(e, t, r)
  })
}
function Ts(e) {
  var t = e.map(function (e) {
    return e[0]
  })
  var n = e.map(function (e) {
    return e[1]
  })
  var r = Math.min.apply(Math, t)
  var o = Math.min.apply(Math, n)
  var i = Math.max.apply(Math, t)
  var a = Math.max.apply(Math, n)
  return {
    left: r,
    top: o,
    right: i,
    bottom: a,
    width: i - r,
    height: a - o
  }
}
function Ss(e, t, n, r) {
  return Ts(Cs(e, t, n, r))
}
function As(e, t, n, r) {
  var o = 16 === e.length ? 4 : 3
  var i = Cs(e, n, r, o)
  var a = i[0]
  var s = a[0]
  var c = a[1]
  var l = i[1]
  var u = l[0]
  var d = l[1]
  var p = i[2]
  var f = p[0]
  var h = p[1]
  var m = i[3]
  var g = m[0]
  var _ = m[1]
  var v = ws(e, t, o)
  var b = v[0]
  var y = v[1]
  var E = Math.min(s, u, f, g)
  var O = Math.min(c, d, h, _)
  var w = Math.max(s, u, f, g)
  s = s - E || 0
  return {
    left: E,
    top: O,
    right: w,
    bottom: Math.max(c, d, h, _),
    origin: [b = b - E || 0, y = y - O || 0],
    pos1: [s, c = c - O || 0],
    pos2: [u = u - E || 0, d = d - O || 0],
    pos3: [f = f - E || 0, h = h - O || 0],
    pos4: [g = g - E || 0, _ = _ - O || 0],
    direction: ni(i)
  }
}
function Is(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1])
}
function js(e, t) {
  return Is([t[0] - e[0], t[1] - e[1]])
}
function Ns(e, t, n, r) {
  if (undefined === n) {
    n = 1
  }
  if (undefined === r) {
    r = ti(e, t)
  }
  var o = js(e, t)
  return {
    transform: "translateY(-50%) translate(" + e[0] + "px, " + e[1] + "px) rotate(" + r + "rad) scaleY(" + n + ")",
    width: o + "px"
  }
}
function Rs(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r]
  }
  var /* [auto-meaningful-name] */n$length = n.length
  var i = n.reduce(function (e, t) {
    return e + t[0]
  }, 0) / n$length
  var a = n.reduce(function (e, t) {
    return e + t[1]
  }, 0) / n$length
  return {
    transform: "translateZ(0px) translate(" + i + "px, " + a + "px) rotate(" + e + "rad) scale(" + t + ")"
  }
}
function ks(e, t, n, r) {
  if (undefined === t) {
    t = Hs(e)
  }
  if (undefined === r) {
    r = n || "border-box" === t.boxSizing
  }
  var /* [auto-meaningful-name] */e$offsetWidth = e.offsetWidth
  var /* [auto-meaningful-name] */e$offsetHeight = e.offsetHeight
  var a = !Lo(e$offsetWidth)
  if ((n || r) && a) {
    return [e$offsetWidth, e$offsetHeight]
  }
  if (!a && "svg" !== e.tagName.toLowerCase()) {
    var s = e.getBBox()
    return [s.width, s.height]
  }
  e$offsetWidth = e.clientWidth
  e$offsetHeight = e.clientHeight
  return n || r ? [e$offsetWidth + (parseFloat(t.borderLeftWidth) || 0) + (parseFloat(t.borderRightWidth) || 0), e$offsetHeight + (parseFloat(t.borderTopWidth) || 0) + (parseFloat(t.borderBottomWidth) || 0)] : [e$offsetWidth - (parseFloat(t.paddingLeft) || 0) - (parseFloat(t.paddingRight) || 0), e$offsetHeight - (parseFloat(t.paddingTop) || 0) - (parseFloat(t.paddingBottom) || 0)]
}
function xs(e, t) {
  return ti(t > 0 ? e[0] : e[1], t > 0 ? e[1] : e[0])
}
function Ds(e, t, n, r, o) {
  var i = 1
  var a = [0, 0]
  var s = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
    clientLeft: 0,
    clientTop: 0,
    clientWidth: 0,
    clientHeight: 0,
    scrollWidth: 0,
    scrollHeight: 0
  }
  var c = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
    clientLeft: 0,
    clientTop: 0,
    clientWidth: 0,
    clientHeight: 0,
    scrollWidth: 0,
    scrollHeight: 0
  }
  var l = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
    clientLeft: 0,
    clientTop: 0,
    clientWidth: 0,
    clientHeight: 0,
    scrollWidth: 0,
    scrollHeight: 0
  }
  var u = bs(t, n, o, false)
  if (t) {
    var d = u.is3d ? 4 : 3
    var p = As(u.offsetMatrix, Pi(u.transformOrigin, function (e, t) {
      if (undefined === t) {
        t = Math.sqrt(e.length)
      }
      for (var n = [], r = e[t * t - 1], o = 0; o < t - 1; ++o) {
        n[o] = e[t * (t - 1) + o] / r
      }
      n[t - 1] = 0
      return n
    }(u.targetMatrix, d)), u.width, u.height)
    i = p.direction
    a = Pi(p.origin, [p.left - u.left, p.top - u.top])
    s = Ms(t)
    c = Ms(hs(r, r, true).offsetParent || document.body, true)
    if (e) {
      l = Ms(e)
    }
  }
  return Xa({
    targetClientRect: s,
    containerClientRect: c,
    moveableClientRect: l,
    beforeDirection: i,
    beforeOrigin: a,
    originalBeforeOrigin: a,
    target: t
  }, u)
}
function Ms(e, t) {
  var n = 0
  var r = 0
  var o = 0
  var i = 0
  if (e === document.body || e === document.documentElement) {
    o = window.innerWidth
    i = window.innerHeight
    n = -(document.documentElement.scrollLeft || document.body.scrollLeft)
    r = -(document.documentElement.scrollTop || document.body.scrollTop)
  } else {
    var a = e.getBoundingClientRect()
    n = a.left
    r = a.top
    o = a.width
    i = a.height
  }
  var s = {
    left: n,
    right: n + o,
    top: r,
    bottom: r + i,
    width: o,
    height: i
  }
  if (t) {
    s.clientLeft = e.clientLeft
    s.clientTop = e.clientTop
    s.clientWidth = e.clientWidth
    s.clientHeight = e.clientHeight
    s.scrollWidth = e.scrollWidth
    s.scrollHeight = e.scrollHeight
    s.overflow = "visible" !== Hs(e).overflow
  }
  return s
}
function Ls(e) {
  if (e) {
    var t = e.getAttribute("data-direction")
    if (t) {
      var n = [0, 0]
      if (t.indexOf("w") > -1) {
        n[0] = -1
      }
      if (t.indexOf("e") > -1) {
        n[0] = 1
      }
      if (t.indexOf("n") > -1) {
        n[1] = -1
      }
      if (t.indexOf("s") > -1) {
        n[1] = 1
      }
      return n
    }
  }
}
function Ps(e, t) {
  return [Pi(t, e[0]), Pi(t, e[1]), Pi(t, e[2]), Pi(t, e[3])]
}
function Bs(e) {
  var /* [auto-meaningful-name] */e$left = e.left
  var /* [auto-meaningful-name] */e$top = e.top
  return Ps([e.pos1, e.pos2, e.pos3, e.pos4], [e$left, e$top])
}
function Fs(e, t) {
  if (e[t]) {
    e[t].unset()
    e[t] = null
  }
}
function Gs(e, t, n) {
  var /* [auto-meaningful-name] */t$datas = t.datas
  if (!t$datas.datas) {
    t$datas.datas = {}
  }
  var o = Xa(Xa({}, n), {
    target: e.state.target,
    clientX: t.clientX,
    clientY: t.clientY,
    inputEvent: t.inputEvent,
    currentTarget: e,
    moveable: e,
    datas: t$datas.datas
  })
  if (t$datas.isStartEvent) {
    t$datas.lastEvent = o
  } else {
    t$datas.isStartEvent = true
  }
  return o
}
function Ws(e, t, n) {
  var /* [auto-meaningful-name] */t$datas = t.datas
  var o = "isDrag" in n ? n.isDrag : t.isDrag
  if (!t$datas.datas) {
    t$datas.datas = {}
  }
  return Xa(Xa({
    isDrag: o
  }, n), {
    moveable: e,
    target: e.state.target,
    clientX: t.clientX,
    clientY: t.clientY,
    inputEvent: t.inputEvent,
    currentTarget: e,
    lastEvent: t$datas.lastEvent,
    isDouble: t.isDouble,
    datas: t$datas.datas
  })
}
function Us(e, t, n, r) {
  return e.triggerEvent(t, n, r)
}
function Hs(e, t) {
  return window.getComputedStyle(e, t)
}
function Vs(e, t, n) {
  var r = {}
  var o = {}
  return e.filter(function (e) {
    var /* [auto-meaningful-name] */e$name = e.name
    if (r[e$name] || !t.some(function (t) {
      return e[t]
    })) {
      return false
    }
    if (!n && e.ableGroup) {
      if (o[e.ableGroup]) {
        return false
      }
      o[e.ableGroup] = true
    }
    r[e$name] = true
    return true
  })
}
function zs(e, t) {
  return e === t || null == e && null == t
}
function Ys() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e[t] = arguments[t]
  }
  e.sort(function (e, t) {
    return Math.abs(t) - Math.abs(e)
  })
  return e[0]
}
function Ks(e, t, n) {
  return Gi(ki(e, n), xi(t, n), n)
}
function qs(e, t) {
  var n
  var r = e.is3d ? 4 : 3
  n = Ks(e.rootMatrix, [t.distX, t.distY], r)
  t.distX = n[0]
  t.distY = n[1]
  return t
}
function Xs(e, t, n, r, o) {
  return Bi(ws(e, Pi(n, t), o), r)
}
function Qs(e, t, n) {
  return n ? e / t * 100 + "%" : e + "px"
}
function Zs(e) {
  return Math.abs(e) <= 1e-7 ? 0 : e
}
function Js(e, t) {
  return t.isRequest ? ("resizable" === t.requestAble || "scalable" === t.requestAble) && t.parentDirection : ai(t.inputEvent.target, us("direction"))
}
function $s(e) {
  var t = {}
  for (var n in e) t[e[n]] = n
  return t
}
function ec(e, t) {
  return e ? Fo(e) ? t ? document.querySelector(e) : e : Go(e) ? e() : "current" in e ? e.current : e : null
}
function tc(e, t) {
  return e ? ((n = e) && Po(n) && (Bo(n) || "length" in n) ? [].slice.call(e) : [e]).reduce(function (e, n) {
    return Fo(n) && t ? Qa(e, [].slice.call(document.querySelectorAll(n))) : (e.push(ec(n, t)), e)
  }, []) : []
  var n
}
function nc(e, t) {
  var /* [auto-meaningful-name] */e$rootMatrix = e.rootMatrix
  var /* [auto-meaningful-name] */e$is3d = e.is3d
  var o = ki(e$rootMatrix, e$is3d ? 4 : 3)
  if (!e$is3d) {
    o = Di(o, 3, 4)
  }
  o[12] = 0
  o[13] = 0
  o[14] = 0
  return ea(o, t)
}
var rc = Za("pinchable", {
  events: {
    onPinchStart: "pinchStart",
    onPinch: "pinch",
    onPinchEnd: "pinchEnd",
    onPinchGroupStart: "pinchGroupStart",
    onPinchGroup: "pinchGroup",
    onPinchGroupEnd: "pinchGroupEnd"
  },
  dragStart: function () {
    return true
  },
  pinchStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$targets = t.targets
    var /* [auto-meaningful-name] */t$angle = t.angle
    var /* [auto-meaningful-name] */t$originalDatas = t.originalDatas
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$pinchable = e$props.pinchable
    var /* [auto-meaningful-name] */e$props$ables = e$props.ables
    if (!e$props$pinchable) {
      return false
    }
    var l = "onPinch" + (t$targets ? "Group" : "") + "Start"
    var u = "drag" + (t$targets ? "Group" : "") + "ControlStart"
    var d = (true === e$props$pinchable ? e.controlAbles : e$props$ables.filter(function (e) {
      return e$props$pinchable.indexOf(e.name) > -1
    })).filter(function (e) {
      return e.canPinch && e[u]
    })
    var p = Gs(e, t, {})
    if (t$targets) {
      p.targets = t$targets
    }
    var f = Us(e, l, p)
    t$datas.isPinch = false !== f
    t$datas.ables = d
    var /* [auto-meaningful-name] */t$datas$isPinch = t$datas.isPinch
    return !!t$datas$isPinch && (d.forEach(function (n) {
      t$originalDatas[n.name] = t$originalDatas[n.name] || {}
      if (n[u]) {
        var r = Xa(Xa({}, t), {
          datas: t$originalDatas[n.name],
          parentRotate: t$angle,
          isPinch: true
        })
        n[u](e, r)
      }
    }), e.state.snapRenderInfo = {
      request: t.isRequest,
      direction: [0, 0]
    }, t$datas$isPinch)
  },
  pinch: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$scale = t.scale
    var /* [auto-meaningful-name] */t$distance = t.distance
    var /* [auto-meaningful-name] */t$originalDatas = t.originalDatas
    var /* [auto-meaningful-name] */t$inputEvent = t.inputEvent
    var /* [auto-meaningful-name] */t$targets = t.targets
    var /* [auto-meaningful-name] */t$angle = t.angle
    if (t$datas.isPinch) {
      var l = t$distance * (1 - 1 / t$scale)
      var u = Gs(e, t, {})
      if (t$targets) {
        u.targets = t$targets
      }
      Us(e, "onPinch" + (t$targets ? "Group" : ""), u)
      var /* [auto-meaningful-name] */t$datas$ables = t$datas.ables
      var p = "drag" + (t$targets ? "Group" : "") + "Control"
      t$datas$ables.forEach(function (n) {
        if (n[p]) {
          n[p](e, Xa(Xa({}, t), {
            datas: t$originalDatas[n.name],
            inputEvent: t$inputEvent,
            parentDistance: l,
            parentRotate: t$angle,
            isPinch: true
          }))
        }
      })
      return u
    }
  },
  pinchEnd: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isPinch = t.isPinch
    var /* [auto-meaningful-name] */t$inputEvent = t.inputEvent
    var /* [auto-meaningful-name] */t$targets = t.targets
    var /* [auto-meaningful-name] */t$originalDatas = t.originalDatas
    if (t$datas.isPinch) {
      var s = "onPinch" + (t$targets ? "Group" : "") + "End"
      var c = Ws(e, t, {
        isDrag: t$isPinch
      })
      if (t$targets) {
        c.targets = t$targets
      }
      Us(e, s, c)
      var /* [auto-meaningful-name] */t$datas$ables = t$datas.ables
      var u = "drag" + (t$targets ? "Group" : "") + "ControlEnd"
      t$datas$ables.forEach(function (n) {
        if (n[u]) {
          n[u](e, Xa(Xa({}, t), {
            isDrag: t$isPinch,
            datas: t$originalDatas[n.name],
            inputEvent: t$inputEvent,
            isPinch: true
          }))
        }
      })
      return t$isPinch
    }
  },
  pinchGroupStart: function (e, t) {
    return this.pinchStart(e, Xa(Xa({}, t), {
      targets: e.props.targets
    }))
  },
  pinchGroup: function (e, t) {
    return this.pinch(e, Xa(Xa({}, t), {
      targets: e.props.targets
    }))
  },
  pinchGroupEnd: function (e, t) {
    return this.pinchEnd(e, Xa(Xa({}, t), {
      targets: e.props.targets
    }))
  }
})
function oc(e, t, n, r, o) {
  var i = t.gesto.move(n, e.inputEvent)
  var a = i.originalDatas || i.datas
  var s = a.draggable || (a.draggable = {})
  return Xa(Xa({}, o ? qs(t, i) : i), {
    isDrag: true,
    isPinch: !!r,
    parentEvent: true,
    datas: s,
    originalDatas: e.originalDatas
  })
}
var ic = function () {
  function e() {
    this.prevX = 0
    this.prevY = 0
    this.startX = 0
    this.startY = 0
    this.isDrag = false
    this.isFlag = false
    this.datas = {
      draggable: {}
    }
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.dragStart = function (e, t) {
    this.isDrag = false
    this.isFlag = false
    var /* [auto-meaningful-name] */t$originalDatas = t.originalDatas
    this.datas = t$originalDatas
    if (!t$originalDatas.draggable) {
      t$originalDatas.draggable = {}
    }
    return Xa(Xa({}, this.move(e, t.inputEvent)), {
      type: "dragstart"
    })
  }
  e$prototype.drag = function (e, t) {
    return this.move([e[0] - this.prevX, e[1] - this.prevY], t)
  }
  e$prototype.move = function (e, t) {
    var n
    var r
    if (this.isFlag) {
      n = this.prevX + e[0]
      r = this.prevY + e[1]
      this.isDrag = true
    } else {
      this.prevX = e[0]
      this.prevY = e[1]
      this.startX = e[0]
      this.startY = e[1]
      n = e[0]
      r = e[1]
      this.isFlag = true
    }
    this.prevX = n
    this.prevY = r
    return {
      type: "drag",
      clientX: n,
      clientY: r,
      inputEvent: t,
      isDrag: this.isDrag,
      distX: n - this.startX,
      distY: r - this.startY,
      deltaX: e[0],
      deltaY: e[1],
      datas: this.datas.draggable,
      originalDatas: this.datas,
      parentEvent: true,
      parentGesto: this
    }
  }
  return e
}()
function ac(e, t, n) {
  var /* [auto-meaningful-name] */n$originalDatas = n.originalDatas
  n$originalDatas.groupable = n$originalDatas.groupable || {}
  var /* [auto-meaningful-name] */n$originalDatas$groupable = n$originalDatas.groupable
  n$originalDatas$groupable.childDatas = n$originalDatas$groupable.childDatas || []
  var /* [auto-meaningful-name] */n$originalDatas$groupable$childDatas = n$originalDatas$groupable.childDatas
  return e.moveables.map(function (e, r) {
    n$originalDatas$groupable$childDatas[r] = n$originalDatas$groupable$childDatas[r] || {}
    n$originalDatas$groupable$childDatas[r][t] = n$originalDatas$groupable$childDatas[r][t] || {}
    return Xa(Xa({}, n), {
      datas: n$originalDatas$groupable$childDatas[r][t],
      originalDatas: n$originalDatas$groupable$childDatas[r]
    })
  })
}
function sc(e, t, n, r, o, i) {
  var a = !!n.match(/Start$/g)
  var s = !!n.match(/End$/g)
  var /* [auto-meaningful-name] */o$isPinch = o.isPinch
  var /* [auto-meaningful-name] */o$datas = o.datas
  var u = ac(e, t.name, o)
  var /* [auto-meaningful-name] */e$moveables = e.moveables
  var p = u.map(function (e, o) {
    var u = e$moveables[o]
    var p = e
    if (a) {
      p = new ic().dragStart(r, e)
    } else {
      if (!u.state.gesto) {
        u.state.gesto = o$datas.childGestos[o]
      }
      p = oc(e, u.state, r, o$isPinch, i)
    }
    var f = t[n](u, Xa(Xa({}, p), {
      parentFlag: true
    }))
    if (s) {
      u.state.gesto = null
    }
    return f
  })
  if (a) {
    o$datas.childGestos = e$moveables.map(function (e) {
      return e.state.gesto
    })
  }
  return p
}
function cc(e, t, n, r, o, i) {
  if (undefined === o) {
    o = function (e, t) {
      return t
    }
  }
  var a = !!n.match(/End$/g)
  var s = ac(e, t.name, r)
  var /* [auto-meaningful-name] */e$moveables = e.moveables
  return s.map(function (e, r) {
    var s
    var l = e$moveables[r]
    s = o(l, e)
    var u = t[n](l, Xa(Xa({}, s), {
      parentFlag: true
    }))
    if (u && i) {
      i(l, e, u, r)
    }
    if (a) {
      l.state.gesto = null
    }
    return u
  })
}
function lc(e, t) {
  var /* [auto-meaningful-name] */t$clientX = t.clientX
  var /* [auto-meaningful-name] */t$clientY = t.clientY
  var /* [auto-meaningful-name] */t$datas = t.datas
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$moveableClientRect = e$state.moveableClientRect
  var /* [auto-meaningful-name] */e$state$rootMatrix = e$state.rootMatrix
  var /* [auto-meaningful-name] */e$state$is3d = e$state.is3d
  var /* [auto-meaningful-name] */e$state$pos1 = e$state.pos1
  var u = Bi(Ks(e$state$rootMatrix, [t$clientX - e$state$moveableClientRect.left, t$clientY - e$state$moveableClientRect.top], e$state$is3d ? 4 : 3), e$state$pos1)
  var d = gc({
    datas: t$datas,
    distX: u[0],
    distY: u[1]
  })
  return [d[0], d[1]]
}
function uc(e, t) {
  var /* [auto-meaningful-name] */t$datas = t.datas
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$allMatrix = e$state.allMatrix
  var /* [auto-meaningful-name] */e$state$beforeMatrix = e$state.beforeMatrix
  var /* [auto-meaningful-name] */e$state$is3d = e$state.is3d
  var /* [auto-meaningful-name] */e$state$left = e$state.left
  var /* [auto-meaningful-name] */e$state$top = e$state.top
  var /* [auto-meaningful-name] */e$state$origin = e$state.origin
  var /* [auto-meaningful-name] */e$state$offsetMatrix = e$state.offsetMatrix
  var /* [auto-meaningful-name] */e$state$targetMatrix = e$state.targetMatrix
  var /* [auto-meaningful-name] */e$state$transformOrigin = e$state.transformOrigin
  var f = e$state$is3d ? 4 : 3
  t$datas.is3d = e$state$is3d
  t$datas.matrix = e$state$allMatrix
  t$datas.targetMatrix = e$state$targetMatrix
  t$datas.beforeMatrix = e$state$beforeMatrix
  t$datas.offsetMatrix = e$state$offsetMatrix
  t$datas.transformOrigin = e$state$transformOrigin
  t$datas.inverseMatrix = ki(e$state$allMatrix, f)
  t$datas.inverseBeforeMatrix = ki(e$state$beforeMatrix, f)
  t$datas.absoluteOrigin = xi(Pi([e$state$left, e$state$top], e$state$origin), f)
  t$datas.startDragBeforeDist = Gi(t$datas.inverseBeforeMatrix, t$datas.absoluteOrigin, f)
  t$datas.startDragDist = Gi(t$datas.inverseMatrix, t$datas.absoluteOrigin, f)
}
function dc(e, t) {
  var /* [auto-meaningful-name] */e$datas = e.datas
  var /* [auto-meaningful-name] */e$originalDatas$beforeRenderable = e.originalDatas.beforeRenderable
  var /* [auto-meaningful-name] */e$datas$transformIndex = e$datas.transformIndex
  var /* [auto-meaningful-name] */e$originalDatas$beforeRenderable$nextTransforms = e$originalDatas$beforeRenderable.nextTransforms
  var /* [auto-meaningful-name] */e$originalDatas$beforeRenderable$nextTransformAppendedIndexes = e$originalDatas$beforeRenderable.nextTransformAppendedIndexes
  var s = -1 === e$datas$transformIndex ? e$originalDatas$beforeRenderable$nextTransforms.length : e$datas$transformIndex + e$originalDatas$beforeRenderable$nextTransformAppendedIndexes.filter(function (e) {
    return e < e$datas$transformIndex
  }).length
  var c = function (e, t) {
    var n = e.slice(0, t < 0 ? undefined : t)
    var r = e.slice(0, t < 0 ? undefined : t + 1)
    var o = e[t] || ""
    var i = t < 0 ? [] : e.slice(t)
    var a = t < 0 ? [] : e.slice(t + 1)
    var s = na(n)
    var c = na(r)
    var l = na([o])
    var u = na(i)
    var d = na(a)
    var p = ta(s)
    var f = ta(c)
    var h = ta(u)
    var m = ta(d)
    var g = Li(p, h, 4)
    return {
      transforms: e,
      beforeFunctionMatrix: p,
      beforeFunctionMatrix2: f,
      targetFunctionMatrix: ta(l),
      afterFunctionMatrix: h,
      afterFunctionMatrix2: m,
      allFunctionMatrix: g,
      beforeFunctions: s,
      beforeFunctions2: c,
      targetFunction: l[0],
      afterFunctions: u,
      afterFunctions2: d,
      beforeFunctionTexts: n,
      beforeFunctionTexts2: r,
      targetFunctionText: o,
      afterFunctionTexts: i,
      afterFunctionTexts2: a
    }
  }(e$originalDatas$beforeRenderable$nextTransforms, s)
  var /* [auto-meaningful-name] */c$targetFunction = c.targetFunction
  var u = "rotate" === t ? "rotateZ" : t
  e$datas.beforeFunctionTexts = c.beforeFunctionTexts
  e$datas.afterFunctionTexts = c.afterFunctionTexts
  e$datas.beforeTransform = c.beforeFunctionMatrix
  e$datas.beforeTransform2 = c.beforeFunctionMatrix2
  e$datas.targetTansform = c.targetFunctionMatrix
  e$datas.afterTransform = c.afterFunctionMatrix
  e$datas.afterTransform2 = c.afterFunctionMatrix2
  e$datas.targetAllTransform = c.allFunctionMatrix
  if (c$targetFunction.functionName === u) {
    e$datas.afterFunctionTexts.splice(0, 1)
    e$datas.isAppendTransform = false
  } else {
    e$datas.isAppendTransform = true
    e$originalDatas$beforeRenderable.nextTransformAppendedIndexes = Qa(e$originalDatas$beforeRenderable$nextTransformAppendedIndexes, [s])
  }
}
function pc(e, t, n) {
  return e.beforeFunctionTexts.join(" ") + " " + (e.isAppendTransform ? n : t) + " " + e.afterFunctionTexts.join(" ")
}
function fc(e) {
  var /* [auto-meaningful-name] */e$datas = e.datas
  var n = mc({
    datas: e$datas,
    distX: e.distX,
    distY: e.distY
  })
  return Gi(hc(e$datas, function (e, t) {
    for (var n = Xi(t), r = 0; r < t - 1; ++r) {
      n[t * (t - 1) + r] = e[r] || 0
    }
    return n
  }([n[0], n[1]], 4)), xi([0, 0, 0], 4), 4)
}
function hc(e, t, n) {
  var /* [auto-meaningful-name] */e$beforeTransform = e.beforeTransform
  var /* [auto-meaningful-name] */e$afterTransform = e.afterTransform
  var /* [auto-meaningful-name] */e$beforeTransform2 = e.beforeTransform2
  var /* [auto-meaningful-name] */e$afterTransform2 = e.afterTransform2
  var /* [auto-meaningful-name] */e$targetAllTransform = e.targetAllTransform
  var c = n ? Li(e$targetAllTransform, t, 4) : Li(t, e$targetAllTransform, 4)
  var l = Li(ki(n ? e$beforeTransform2 : e$beforeTransform, 4), c, 4)
  return Li(l, ki(n ? e$afterTransform2 : e$afterTransform, 4), 4)
}
function mc(e) {
  var /* [auto-meaningful-name] */e$datas = e.datas
  var /* [auto-meaningful-name] */e$distX = e.distX
  var /* [auto-meaningful-name] */e$distY = e.distY
  var /* [auto-meaningful-name] */e$datas$inverseBeforeMatrix = e$datas.inverseBeforeMatrix
  var /* [auto-meaningful-name] */e$datas$is3d = e$datas.is3d
  var /* [auto-meaningful-name] */e$datas$startDragBeforeDist = e$datas.startDragBeforeDist
  var s = e$datas$is3d ? 4 : 3
  return Bi(Gi(e$datas$inverseBeforeMatrix, Pi(e$datas.absoluteOrigin, [e$distX, e$distY]), s), e$datas$startDragBeforeDist)
}
function gc(e, t) {
  var /* [auto-meaningful-name] */e$datas = e.datas
  var /* [auto-meaningful-name] */e$distX = e.distX
  var /* [auto-meaningful-name] */e$distY = e.distY
  var /* [auto-meaningful-name] */e$datas$inverseBeforeMatrix = e$datas.inverseBeforeMatrix
  var /* [auto-meaningful-name] */e$datas$inverseMatrix = e$datas.inverseMatrix
  var /* [auto-meaningful-name] */e$datas$is3d = e$datas.is3d
  var /* [auto-meaningful-name] */e$datas$startDragBeforeDist = e$datas.startDragBeforeDist
  var /* [auto-meaningful-name] */e$datas$startDragDist = e$datas.startDragDist
  var u = e$datas$is3d ? 4 : 3
  return Bi(Gi(t ? e$datas$inverseBeforeMatrix : e$datas$inverseMatrix, Pi(e$datas.absoluteOrigin, [e$distX, e$distY]), u), t ? e$datas$startDragBeforeDist : e$datas$startDragDist)
}
function _c(e) {
  var t = []
  if (e[1] >= 0) {
    if (e[0] >= 0) {
      t.push(3)
    }
    if (e[0] <= 0) {
      t.push(2)
    }
  }
  if (e[1] <= 0) {
    if (e[0] >= 0) {
      t.push(1)
    }
    if (e[0] <= 0) {
      t.push(0)
    }
  }
  return t
}
function vc(e, t) {
  return _c(t).map(function (t) {
    return e[t]
  })
}
function bc(e, t) {
  var n = vc(e, t)
  return [
    ei(n.map(function (e) {
      return e[0]
    })), ei(n.map(function (e) {
      return e[1]
    }))
  ]
}
function yc(e, t, n, r) {
  return Li(e, ds(t, r, n), r)
}
function Ec(e) {
  var /* [auto-meaningful-name] */e$originalDatas$beforeRenderable = e.originalDatas.beforeRenderable
  return {
    setTransform: function (n, r) {
      if (undefined === r) {
        r = -1
      }
      e$originalDatas$beforeRenderable.startTransforms = Bo(n) ? n : Vo(n)
      wc(e, r)
    },
    setTransformIndex: function (t) {
      wc(e, t)
    }
  }
}
function Oc(e, t) {
  wc(e, qo(e.originalDatas.beforeRenderable.startTransforms, function (e) {
    return 0 === e.indexOf(t + "(")
  }))
}
function wc(e, t) {
  var /* [auto-meaningful-name] */e$originalDatas$beforeRenderable = e.originalDatas.beforeRenderable
  var /* [auto-meaningful-name] */e$datas = e.datas
  e$datas.transformIndex = t
  if (-1 !== t) {
    var o = e$originalDatas$beforeRenderable.startTransforms[t]
    if (o) {
      var i = na([o])
      e$datas.startValue = i[0].functionValue
    }
  }
}
function Cc(e, t) {
  e.originalDatas.beforeRenderable.nextTransforms = Vo(t)
}
function Tc(e, t, n, r, o) {
  Cc(o, t)
  return {
    transform: t,
    drag: Rl.drag(e, oc(o, e.state, n, r, false))
  }
}
function Sc(e, t, n, r, o) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$left = e$state.left
  var /* [auto-meaningful-name] */e$state$top = e$state.top
  var /* [auto-meaningful-name] */e$props$groupable = e.props.groupable
  var l = e$props$groupable ? e$state$left : 0
  var u = e$props$groupable ? e$state$top : 0
  var d = Bi(r, Ic(e, n, function (e, t, n) {
    var /* [auto-meaningful-name] */e$transformOrigin = e.transformOrigin
    var /* [auto-meaningful-name] */e$offsetMatrix = e.offsetMatrix
    var /* [auto-meaningful-name] */e$is3d = e.is3d
    var /* [auto-meaningful-name] */t$beforeTransform = t.beforeTransform
    var /* [auto-meaningful-name] */t$afterTransform = t.afterTransform
    var c = e$is3d ? 4 : 3
    return yc(e$offsetMatrix, Di(Li(Li(t$beforeTransform, $i([n]), 4), t$afterTransform, 4), 4, c), e$transformOrigin, c)
  }(e.state, o, t)))
  return Bi(d, [l, u])
}
function Ac(e) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$width = e$state.width
  var /* [auto-meaningful-name] */e$state$height = e$state.height
  var /* [auto-meaningful-name] */e$state$transformOrigin = e$state.transformOrigin
  return [e$state$transformOrigin[0] / (e$state$width / 2) - 1, e$state$transformOrigin[1] / (e$state$height / 2) - 1]
}
function Ic(e, t, n) {
  if (undefined === n) {
    n = e.state.allMatrix
  }
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$width = e$state.width
  var /* [auto-meaningful-name] */e$state$height = e$state.height
  var a = e$state.is3d ? 4 : 3
  return ws(n, [e$state$width / 2 * (1 + t[0]), e$state$height / 2 * (1 + t[1])], a)
}
function jc(e, t, n, r, o, i) {
  var /* [auto-meaningful-name] */e$props$groupable = e.props.groupable
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$transformOrigin = e$state.transformOrigin
  var /* [auto-meaningful-name] */e$state$targetMatrix = e$state.targetMatrix
  var /* [auto-meaningful-name] */e$state$offsetMatrix = e$state.offsetMatrix
  var /* [auto-meaningful-name] */e$state$is3d = e$state.is3d
  var /* [auto-meaningful-name] */e$state$width = e$state.width
  var /* [auto-meaningful-name] */e$state$height = e$state.height
  var /* [auto-meaningful-name] */e$state$left = e$state.left
  var /* [auto-meaningful-name] */e$state$top = e$state.top
  var g = e$state$is3d ? 4 : 3
  var _ = e$props$groupable ? e$state$left : 0
  var v = e$props$groupable ? e$state$top : 0
  return Bi(function (e, t, n, r, o, i) {
    var a = bc(Cs(t, n, r, o), i)
    return [e[0] - a[0], e[1] - a[1]]
  }(o, yc(e$state$offsetMatrix, e$state$targetMatrix, function (e, t, n, r, o, i) {
    if (undefined === r) {
      r = t
    }
    if (undefined === o) {
      o = n
    }
    if (undefined === i) {
      i = [0, 0]
    }
    return e ? e.map(function (e, a) {
      var s = Ko(e)
      var /* [auto-meaningful-name] */s$value = s.value
      var /* [auto-meaningful-name] */s$unit = s.unit
      var u = a ? o : r
      var d = a ? n : t
      return "%" === e || isNaN(s$value) ? d * (u ? i[a] / u : 0) : "%" !== s$unit ? s$value : d * s$value / 100
    }) : i
  }(i, t, n, e$state$width, e$state$height, e$state$transformOrigin), g), t, n, g, r), [_, v])
}
function Nc(e, t) {
  return bc(Bs(e.state), t)
}
var Rc = ["left", "right", "center"]
var kc = ["top", "bottom", "middle"]
var xc = {
  start: "left",
  end: "right",
  center: "center"
}
var Dc = {
  start: "top",
  end: "bottom",
  center: "middle"
}
function Mc(e, t) {
  var /* [auto-meaningful-name] */e$props = e.props
  var /* [auto-meaningful-name] */e$props$snappable = e$props.snappable
  var /* [auto-meaningful-name] */e$props$bounds = e$props.bounds
  var /* [auto-meaningful-name] */e$props$innerBounds = e$props.innerBounds
  var /* [auto-meaningful-name] */e$props$verticalGuidelines = e$props.verticalGuidelines
  var /* [auto-meaningful-name] */e$props$horizontalGuidelines = e$props.horizontalGuidelines
  var /* [auto-meaningful-name] */e$props$snapGridWidth = e$props.snapGridWidth
  var /* [auto-meaningful-name] */e$props$snapGridHeight = e$props.snapGridHeight
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$guidelines = e$state.guidelines
  var /* [auto-meaningful-name] */e$state$enableSnap = e$state.enableSnap
  return !(!e$props$snappable || !e$state$enableSnap || t && true !== e$props$snappable && e$props$snappable.indexOf(t) < 0) && !!(e$props$snapGridWidth || e$props$snapGridHeight || e$props$bounds || e$props$innerBounds || e$state$guidelines && e$state$guidelines.length || e$props$verticalGuidelines && e$props$verticalGuidelines.length || e$props$horizontalGuidelines && e$props$horizontalGuidelines.length)
}
function Lc(e) {
  return false === e ? {} : true !== e && e ? e : {
    left: true,
    right: true,
    top: true,
    bottom: true
  }
}
function Pc(e, t) {
  var n = function (e, t) {
    var n = Lc(e)
    var r = {}
    for (var o in n) if (o in t && n[o]) {
      r[o] = t[o]
    }
    return r
  }(e, t)
  var r = kc.filter(function (e) {
    return e in n
  })
  var o = Rc.filter(function (e) {
    return e in n
  })
  return {
    horizontal: r.map(function (e) {
      return n[e]
    }),
    vertical: o.map(function (e) {
      return n[e]
    })
  }
}
function Bc(e, t, n, r, o, i, a) {
  if (undefined === o) {
    o = 0
  }
  if (undefined === i) {
    i = 0
  }
  if (undefined === a) {
    a = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  }
  var s = []
  var /* [auto-meaningful-name] */a$left = a.left
  var /* [auto-meaningful-name] */a$top = a.top
  var /* [auto-meaningful-name] */a$bottom = a.bottom
  var d = n + a.right - a$left
  var p = r + a$bottom - a$top
  if (e) {
    e.forEach(function (e) {
      s.push({
        type: "horizontal",
        pos: [a$left, oi(e - i + a$top, .1)],
        size: d
      })
    })
  }
  if (t) {
    t.forEach(function (e) {
      s.push({
        type: "vertical",
        pos: [oi(e - o + a$left, .1), a$top],
        size: p
      })
    })
  }
  return s
}
function Fc(e, t) {
  if (!t.length) {
    return []
  }
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$containerClientRect = e$state.containerClientRect
  var /* [auto-meaningful-name] */e$state$targetClientRect = e$state.targetClientRect
  var /* [auto-meaningful-name] */e$state$targetClientRect$top = e$state$targetClientRect.top
  var /* [auto-meaningful-name] */e$state$targetClientRect$left = e$state$targetClientRect.left
  var /* [auto-meaningful-name] */e$state$rootMatrix = e$state.rootMatrix
  var c = e$state.is3d ? 4 : 3
  var l = function (e, t, n) {
    var r = ws(e, [t.clientLeft, t.clientTop], n)
    return [t.left + r[0], t.top + r[1]]
  }(e$state$rootMatrix, e$state$containerClientRect, c)
  var u = l[0]
  var d = l[1]
  var p = ma(Bs(e$state))
  var f = Bi([p.minX, p.minY], Ks(e$state$rootMatrix, [e$state$targetClientRect$left - u, e$state$targetClientRect$top - d], c)).map(function (e) {
    t = e
    return Math.round(t % 1 === -.5 ? t - 1 : t)
    var t
  })
  var h = f[0]
  var m = f[1]
  return t.map(function (e) {
    var t = e.element.getBoundingClientRect()
    var n = t.left - u
    var r = t.top - d
    var o = r + t.height
    var i = n + t.width
    var a = Ks(e$state$rootMatrix, [n, r], c)
    var l = a[0]
    var p = a[1]
    var f = Ks(e$state$rootMatrix, [i, o], c)
    var g = f[0]
    var _ = f[1]
    return Xa(Xa({}, e), {
      rect: {
        left: l + h,
        right: g + h,
        top: p + m,
        bottom: _ + m,
        center: (l + g) / 2 + h,
        middle: (p + _) / 2 + m
      }
    })
  })
}
function Gc(e) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$props$elementGuidelines = e.props.elementGuidelines
  var r = undefined === e$props$elementGuidelines ? [] : e$props$elementGuidelines
  if (!r.length) {
    e$state.elementRects = []
    return []
  }
  var o
  var i
  var a = (e$state.elementRects || []).filter(function (e) {
    return !e.refresh
  })
  var s = r.map(function (e) {
    return Po(e) && "element" in e ? e : {
      element: ec(e, true)
    }
  }).filter(function (e) {
    return e.element
  })
  o = a.map(function (e) {
    return e.element
  })
  i = s.map(function (e) {
    return e.element
  })
  var c = ca(o, i, da)
  var /* [auto-meaningful-name] */c$maintained = c.maintained
  var /* [auto-meaningful-name] */c$added = c.added
  var d = []
  c$maintained.forEach(function (e) {
    var t = e[0]
    var n = e[1]
    d[n] = a[t]
  })
  Fc(e, c$added.map(function (e) {
    return s[e]
  })).map(function (e, t) {
    d[c$added[t]] = e
  })
  e$state.elementRects = d
  var p = Lc(e.props.elementSnapDirections)
  var f = []
  d.forEach(function (e) {
    var /* [auto-meaningful-name] */e$element = e.element
    var /* [auto-meaningful-name] */e$top = e.top
    var r = undefined === e$top ? p.top : e$top
    var /* [auto-meaningful-name] */e$left = e.left
    var i = undefined === e$left ? p.left : e$left
    var /* [auto-meaningful-name] */e$right = e.right
    var s = undefined === e$right ? p.right : e$right
    var /* [auto-meaningful-name] */e$bottom = e.bottom
    var l = undefined === e$bottom ? p.bottom : e$bottom
    var /* [auto-meaningful-name] */e$center = e.center
    var d = undefined === e$center ? p.center : e$center
    var /* [auto-meaningful-name] */e$middle = e.middle
    var m = undefined === e$middle ? p.middle : e$middle
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */e$rect = e.rect
    var v = Pc({
      top: r,
      right: s,
      left: i,
      bottom: l,
      center: d,
      middle: m
    }, e$rect)
    var /* [auto-meaningful-name] */v$horizontal = v.horizontal
    var /* [auto-meaningful-name] */v$vertical = v.vertical
    var /* [auto-meaningful-name] */e$rect$top = e$rect.top
    var /* [auto-meaningful-name] */e$rect$left = e$rect.left
    var w = e$rect.right - e$rect$left
    var C = e$rect.bottom - e$rect$top
    var T = [w, C]
    v$vertical.forEach(function (n) {
      f.push({
        type: "vertical",
        element: e$element,
        pos: [oi(n, .1), e$rect$top],
        size: C,
        sizes: T,
        className: e$className,
        elementRect: e
      })
    })
    v$horizontal.forEach(function (n) {
      f.push({
        type: "horizontal",
        element: e$element,
        pos: [e$rect$left, oi(n, .1)],
        size: w,
        sizes: T,
        className: e$className,
        elementRect: e
      })
    })
  })
  return f
}
function Wc(e) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$snapOffset = e$state.snapOffset
  var /* [auto-meaningful-name] */e$state$containerClientRect = e$state.containerClientRect
  var /* [auto-meaningful-name] */e$state$containerClientRect$overflow = e$state$containerClientRect.overflow
  var /* [auto-meaningful-name] */e$state$containerClientRect$scrollHeight = e$state$containerClientRect.scrollHeight
  var /* [auto-meaningful-name] */e$state$containerClientRect$scrollWidth = e$state$containerClientRect.scrollWidth
  var /* [auto-meaningful-name] */e$state$containerClientRect$clientHeight = e$state$containerClientRect.clientHeight
  var /* [auto-meaningful-name] */e$state$containerClientRect$clientWidth = e$state$containerClientRect.clientWidth
  var /* [auto-meaningful-name] */e$state$containerClientRect$clientLeft = e$state$containerClientRect.clientLeft
  var /* [auto-meaningful-name] */e$state$containerClientRect$clientTop = e$state$containerClientRect.clientTop
  var /* [auto-meaningful-name] */e$props = e.props
  var /* [auto-meaningful-name] */e$props$snapGap = e$props.snapGap
  var f = undefined === e$props$snapGap || e$props$snapGap
  var /* [auto-meaningful-name] */e$props$verticalGuidelines = e$props.verticalGuidelines
  var /* [auto-meaningful-name] */e$props$horizontalGuidelines = e$props.horizontalGuidelines
  var /* [auto-meaningful-name] */e$props$snapThreshold = e$props.snapThreshold
  var _ = undefined === e$props$snapThreshold ? 5 : e$props$snapThreshold
  var /* [auto-meaningful-name] */e$props$snapGridWidth = e$props.snapGridWidth
  var b = undefined === e$props$snapGridWidth ? 0 : e$props$snapGridWidth
  var /* [auto-meaningful-name] */e$props$snapGridHeight = e$props.snapGridHeight
  var E = undefined === e$props$snapGridHeight ? 0 : e$props$snapGridHeight
  var O = Qa(Gc(e))
  if (f) {
    var w = Ts(Bs(e.state))
    var /* [auto-meaningful-name] */w$top = w.top
    var /* [auto-meaningful-name] */w$left = w.left
    var /* [auto-meaningful-name] */w$bottom = w.bottom
    var /* [auto-meaningful-name] */w$right = w.right
    O.push.apply(O, function (e, t, n) {
      var /* [auto-meaningful-name] */e$state$elementRects = e.state.elementRects
      var o = [];
      [["vertical", xc, Dc], ["horizontal", Dc, xc]].forEach(function (e) {
        var i = e[0]
        var a = e[1]
        var s = e[2]
        var c = t[a.start]
        var l = t[a.end]
        var u = t[a.center]
        var d = t[s.start]
        var p = t[s.end]
        function f(e) {
          var /* [auto-meaningful-name] */e$rect = e.rect
          return e$rect[a.end] < c + n ? c - e$rect[a.end] : l - n < e$rect[a.start] ? e$rect[a.start] - l : -1
        }
        var h = e$state$elementRects.filter(function (e) {
          var /* [auto-meaningful-name] */e$rect = e.rect
          return !(e$rect[s.start] > p || e$rect[s.end] < d) && f(e) > 0
        }).sort(function (e, t) {
          return f(e) - f(t)
        })
        var m = []
        h.forEach(function (e) {
          h.forEach(function (t) {
            if (e !== t) {
              var /* [auto-meaningful-name] */e$rect = e.rect
              var /* [auto-meaningful-name] */t$rect = t.rect
              var o = e$rect[s.start]
              var i = e$rect[s.end]
              var a = t$rect[s.start]
              if (!(o > t$rect[s.end] || a > i)) {
                m.push([e, t])
              }
            }
          })
        })
        m.forEach(function (e) {
          var t = e[0]
          var r = e[1]
          var /* [auto-meaningful-name] */t$rect = t.rect
          var /* [auto-meaningful-name] */r$rect = r.rect
          var p = t$rect[a.start]
          var f = t$rect[a.end]
          var h = r$rect[a.start]
          var m = r$rect[a.end]
          var g = 0
          var _ = 0
          var v = false
          var b = false
          var y = false
          if (f <= c && l <= h) {
            b = true
            _ = f + (g = (h - f - (l - c)) / 2) + (l - c) / 2
            if (Math.abs(_ - u) > n) {
              return
            }
          } else if (f < h && m < c + n) {
            v = true
            _ = m + (g = h - f)
            if (Math.abs(_ - c) > n) {
              return
            }
          } else {
            if (!(f < h && l - n < p)) {
              return
            }
            y = true
            _ = p - (g = h - f)
            if (Math.abs(_ - l) > n) {
              return
            }
          }
          if (g) {
            o.push({
              type: i,
              pos: "vertical" === i ? [_, 0] : [0, _],
              element: r.element,
              size: 0,
              className: r.className,
              isStart: v,
              isCenter: b,
              isEnd: y,
              gap: g,
              hide: true,
              gapRects: [t, r]
            })
          }
        })
      })
      return o
    }(e, {
      top: w$top,
      left: w$left,
      bottom: w$bottom,
      right: w$right,
      center: (w$left + w$right) / 2,
      middle: (w$top + w$bottom) / 2
    }, _))
  }
  O.push.apply(O, function (e, t, n, r, o, i) {
    if (undefined === o) {
      o = 0
    }
    if (undefined === i) {
      i = 0
    }
    var a = []
    if (t) {
      for (var s = 0; s <= r; s += t) {
        a.push({
          type: "horizontal",
          pos: [0, oi(s - i, .1)],
          size: n,
          hide: true
        })
      }
    }
    if (e) {
      for (s = 0; s <= n; s += e) {
        a.push({
          type: "vertical",
          pos: [oi(s - o, .1), 0],
          size: r,
          hide: true
        })
      }
    }
    return a
  }(b, E, e$state$containerClientRect$overflow ? e$state$containerClientRect$scrollWidth : e$state$containerClientRect$clientWidth, e$state$containerClientRect$overflow ? e$state$containerClientRect$scrollHeight : e$state$containerClientRect$clientHeight, e$state$containerClientRect$clientLeft, e$state$containerClientRect$clientTop))
  O.push.apply(O, Bc(e$props$horizontalGuidelines || false, e$props$verticalGuidelines || false, e$state$containerClientRect$overflow ? e$state$containerClientRect$scrollWidth : e$state$containerClientRect$clientWidth, e$state$containerClientRect$overflow ? e$state$containerClientRect$scrollHeight : e$state$containerClientRect$clientHeight, e$state$containerClientRect$clientLeft, e$state$containerClientRect$clientTop, e$state$snapOffset))
  return O
}
function Uc(e, t, n, r) {
  var o = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t]
    }
    for (var n = e.length - 1, r = 0; r < n; ++r) {
      var o = e[r]
      if (!Lo(o)) {
        return o
      }
    }
    return e[n]
  }(r, e.props.snapThreshold, 5)
  return Hc(e.state.guidelines, t, n, o)
}
function Hc(e, t, n, r) {
  return {
    vertical: Yc(e, "vertical", t, r),
    horizontal: Yc(e, "horizontal", n, r)
  }
}
function Vc(e, t, n) {
  var r = Pc(e.props.snapDirections, t)
  return Uc(e, r.vertical, r.horizontal, n)
}
function zc(e) {
  var /* [auto-meaningful-name] */e$isSnap = e.isSnap
  if (!e$isSnap) {
    return {
      isSnap: false,
      offset: 0,
      dist: -1,
      pos: 0,
      guideline: null
    }
  }
  var n = e.posInfos[0]
  var r = n.guidelineInfos[0]
  var /* [auto-meaningful-name] */r$offset = r.offset
  var /* [auto-meaningful-name] */r$dist = r.dist
  var /* [auto-meaningful-name] */r$guideline = r.guideline
  return {
    isSnap: e$isSnap,
    offset: r$offset,
    dist: r$dist,
    pos: n.pos,
    guideline: r$guideline
  }
}
function Yc(e, t, n, r) {
  if (!e || !e.length) {
    return {
      isSnap: false,
      index: -1,
      posInfos: []
    }
  }
  var o = "vertical" === t ? 0 : 1
  var i = n.map(function (n, i) {
    var a = e.map(function (e) {
      var /* [auto-meaningful-name] */e$pos = e.pos
      var r = n - e$pos[o]
      return {
        offset: r,
        dist: Math.abs(r),
        guideline: e
      }
    }).filter(function (e) {
      var /* [auto-meaningful-name] */e$guideline = e.guideline
      var /* [auto-meaningful-name] */e$dist = e.dist
      return !(e$guideline.type !== t || e$dist > r)
    }).sort(function (e, t) {
      return e.dist - t.dist
    })
    return {
      pos: n,
      index: i,
      guidelineInfos: a
    }
  }).filter(function (e) {
    return e.guidelineInfos.length > 0
  }).sort(function (e, t) {
    return e.guidelineInfos[0].dist - t.guidelineInfos[0].dist
  })
  var a = i.length > 0
  return {
    isSnap: a,
    index: a ? i[0].index : -1,
    posInfos: i
  }
}
function Kc(e, t) {
  var n = Math.abs(e.offset)
  var r = Math.abs(t.offset)
  return e.isBound && t.isBound ? r - n : e.isBound ? -1 : t.isBound ? 1 : e.isSnap && t.isSnap ? r - n : e.isSnap ? -1 : t.isSnap || n < 1e-7 ? 1 : r < 1e-7 ? -1 : n - r
}
function qc(e, t) {
  return e.slice().sort(function (e, n) {
    var r = e.sign[t]
    var o = n.sign[t]
    var i = e.offset[t]
    var a = n.offset[t]
    return r ? o ? Kc({
      isBound: e.isBound,
      isSnap: e.isSnap,
      offset: i
    }, {
      isBound: n.isBound,
      isSnap: n.isSnap,
      offset: a
    }) : -1 : 1
  })[0]
}
function Xc(e, t) {
  var n = ei([t[0][0], t[1][0]])
  var r = ei([t[0][1], t[1][1]])
  return {
    vertical: n <= e[0],
    horizontal: r <= e[1]
  }
}
function Qc(e, t) {
  var n
  var r
  var o = t[0]
  var i = t[1]
  var a = i[0] - o[0]
  var s = i[1] - o[1]
  if (Math.abs(a) < 1e-7) {
    a = 0
  }
  if (Math.abs(s) < 1e-7) {
    s = 0
  }
  if (a) {
    if (s) {
      n = s / a * (e[0] - o[0]) + o[1]
      r = e[1]
    } else {
      n = o[1]
      r = e[1]
    }
  } else {
    n = o[0]
    r = e[0]
  }
  return n - r
}
function Zc(e, t, n) {
  if (undefined === n) {
    n = 1e-7
  }
  var r = Qc(e[0], t) <= 0
  return e.slice(1).every(function (e) {
    var o = Qc(e, t)
    return o <= 0 === r || Math.abs(o) <= n
  })
}
function Jc(e, t, n, r, o) {
  if (undefined === o) {
    o = 0
  }
  return r && t - o <= e || !r && e <= n + o ? {
    isBound: true,
    offset: r ? t - e : n - e
  } : {
    isBound: false,
    offset: 0
  }
}
function $c(e, t, n, r, o) {
  var i = e[0]
  var a = e[1]
  var s = t[0]
  var c = t[1]
  var l = Zs(a[1] - i[1])
  var u = Zs(a[0] - i[0])
  var d = Zs(c[1] - s[1])
  if (!Zs(c[0] - s[0])) {
    if (o && !l) {
      return {
        isBound: false,
        offset: 0
      }
    }
    if (u) {
      return Jc(l / u * (s[0] - i[0]) + i[1], s[1], c[1], n, r)
    }
    var p = s[0] - i[0]
    return {
      isBound: f = Math.abs(p) <= (r || 0),
      offset: f ? p : 0
    }
  }
  if (!d) {
    if (o && !u) {
      return {
        isBound: false,
        offset: 0
      }
    }
    if (l) {
      return Jc((s[1] - i[1]) / (l / u) + i[0], s[0], c[0], n, r)
    }
    var f
    p = s[1] - i[1]
    return {
      isBound: f = Math.abs(p) <= (r || 0),
      offset: f ? p : 0
    }
  }
  return {
    isBound: false,
    offset: 0
  }
}
function el(e, t, n, r) {
  return t.map(function (t) {
    var o = t[0]
    var i = t[1]
    var a = t[2]
    var s = function (e, t, n) {
      var /* [auto-meaningful-name] */e$props$innerBounds = e.props.innerBounds
      if (!e$props$innerBounds) {
        return {
          isAllBound: false,
          isBound: false,
          isVerticalBound: false,
          isHorizontalBound: false,
          offset: [0, 0]
        }
      }
      var /* [auto-meaningful-name] */e$props$innerBounds$left = e$props$innerBounds.left
      var /* [auto-meaningful-name] */e$props$innerBounds$top = e$props$innerBounds.top
      var /* [auto-meaningful-name] */e$props$innerBounds$width = e$props$innerBounds.width
      var /* [auto-meaningful-name] */e$props$innerBounds$height = e$props$innerBounds.height
      var c = [[e$props$innerBounds$left, e$props$innerBounds$top], [e$props$innerBounds$left, e$props$innerBounds$top + e$props$innerBounds$height]]
      var l = [[e$props$innerBounds$left, e$props$innerBounds$top], [e$props$innerBounds$left + e$props$innerBounds$width, e$props$innerBounds$top]]
      var u = [[e$props$innerBounds$left + e$props$innerBounds$width, e$props$innerBounds$top], [e$props$innerBounds$left + e$props$innerBounds$width, e$props$innerBounds$top + e$props$innerBounds$height]]
      var d = [[e$props$innerBounds$left, e$props$innerBounds$top + e$props$innerBounds$height], [e$props$innerBounds$left + e$props$innerBounds$width, e$props$innerBounds$top + e$props$innerBounds$height]]
      var p = Xc(n, t)
      var /* [auto-meaningful-name] */p$horizontal = p.horizontal
      var /* [auto-meaningful-name] */p$vertical = p.vertical
      if (Zc([n, [e$props$innerBounds$left, e$props$innerBounds$top], [e$props$innerBounds$left + e$props$innerBounds$width, e$props$innerBounds$top], [e$props$innerBounds$left, e$props$innerBounds$top + e$props$innerBounds$height], [e$props$innerBounds$left + e$props$innerBounds$width, e$props$innerBounds$top + e$props$innerBounds$height]], t)) {
        return {
          isAllBound: false,
          isBound: false,
          isVerticalBound: false,
          isHorizontalBound: false,
          offset: [0, 0]
        }
      }
      var m = $c(t, l, p$vertical)
      var g = $c(t, d, p$vertical)
      var _ = $c(t, c, p$horizontal)
      var v = $c(t, u, p$horizontal)
      var b = m.isBound && g.isBound
      var y = m.isBound || g.isBound
      var E = _.isBound && v.isBound
      var O = _.isBound || v.isBound
      var w = Ys(m.offset, g.offset)
      var C = Ys(_.offset, v.offset)
      var T = [0, 0]
      var S = false
      var A = false
      if (Math.abs(C) < Math.abs(w)) {
        T = [w, 0]
        S = y
        A = b
      } else {
        T = [0, C]
        S = O
        A = E
      }
      return {
        isAllBound: A,
        isVerticalBound: y,
        isHorizontalBound: O,
        isBound: S,
        offset: T
      }
    }(e, [i, a], n)
    var /* [auto-meaningful-name] */s$isBound = s.isBound
    var /* [auto-meaningful-name] */s$offset = s.offset
    var /* [auto-meaningful-name] */s$isVerticalBound = s.isVerticalBound
    var /* [auto-meaningful-name] */s$isHorizontalBound = s.isHorizontalBound
    var p = gc({
      datas: r,
      distX: s$offset[0],
      distY: s$offset[1]
    }).map(function (e, t) {
      return e * (o[t] ? 2 / o[t] : 0)
    })
    return {
      sign: o,
      isBound: s$isBound,
      isVerticalBound: s$isVerticalBound,
      isHorizontalBound: s$isHorizontalBound,
      isSnap: false,
      offset: p
    }
  })
}
function tl(e, t, n) {
  var r
  var o = el(e, nl(t, [0, 0], false).map(function (e) {
    var t = e[0]
    var n = e[1]
    var r = e[2]
    return [
      t.map(function (e) {
        return 2 * Math.abs(e)
      }), n, r
    ]
  }), bc(t, [0, 0]), n)
  var i = qc(o, 0)
  var a = qc(o, 1)
  var s = 0
  var c = 0
  var l = i.isVerticalBound || a.isVerticalBound
  var u = i.isHorizontalBound || a.isHorizontalBound
  if (l || u) {
    s = (r = function (e, t) {
      var /* [auto-meaningful-name] */e$datas = e.datas
      var /* [auto-meaningful-name] */e$distX = e.distX
      var /* [auto-meaningful-name] */e$distY = e.distY
      var /* [auto-meaningful-name] */e$datas$beforeMatrix = e$datas.beforeMatrix
      var /* [auto-meaningful-name] */e$datas$matrix = e$datas.matrix
      var /* [auto-meaningful-name] */e$datas$is3d = e$datas.is3d
      var /* [auto-meaningful-name] */e$datas$startDragBeforeDist = e$datas.startDragBeforeDist
      var /* [auto-meaningful-name] */e$datas$startDragDist = e$datas.startDragDist
      var /* [auto-meaningful-name] */e$datas$absoluteOrigin = e$datas.absoluteOrigin
      var d = e$datas$is3d ? 4 : 3
      return Bi(Gi(t ? e$datas$beforeMatrix : e$datas$matrix, Pi(t ? e$datas$startDragBeforeDist : e$datas$startDragDist, [e$distX, e$distY]), d), e$datas$absoluteOrigin)
    }({
      datas: n,
      distX: -i.offset[0],
      distY: -a.offset[1]
    }))[0]
    c = r[1]
  }
  return {
    vertical: {
      isBound: l,
      offset: s
    },
    horizontal: {
      isBound: u,
      offset: c
    }
  }
}
function nl(e, t, n) {
  return function (e, t) {
    var n = []
    var r = e[0]
    var o = e[1]
    if (r && o) {
      n.push([[0, 2 * o], e, [-r, o]], [[2 * r, 0], e, [r, -o]])
    } else {
      if (r) {
        n.push([[2 * r, 0], [r, 1], [r, -1]])
        if (t) {
          n.push([[0, -1], [r, -1], [-r, -1]], [[0, 1], [r, 1], [-r, 1]])
        }
      } else {
        if (o) {
          n.push([[0, 2 * o], [1, o], [-1, o]])
          if (t) {
            n.push([[-1, 0], [-1, o], [-1, -o]], [[1, 0], [1, o], [1, -o]])
          }
        } else {
          n.push([[-1, 0], [-1, -1], [-1, 1]], [[1, 0], [1, -1], [1, 1]], [[0, -1], [-1, -1], [1, -1]], [[0, 1], [-1, 1], [1, 1]])
        }
      }
    }
    return n
  }(t, n).map(function (t) {
    var n = t[0]
    var r = t[1]
    var o = t[2]
    return [n, bc(e, r), bc(e, o)]
  })
}
function rl(e, t, n, r) {
  var o = r ? e.map(function (e) {
    return zi(e, r)
  }) : e
  var i = Qa([n], t)
  return [[o[0], o[1]], [o[1], o[3]], [o[3], o[2]], [o[2], o[0]]].some(function (e) {
    return !Zc(i, e)
  })
}
function ol(e, t, n, r, o) {
  var /* [auto-meaningful-name] */e$props$innerBounds = e.props.innerBounds
  var a = o * Math.PI / 180
  if (!e$props$innerBounds) {
    return []
  }
  var /* [auto-meaningful-name] */e$props$innerBounds$left = e$props$innerBounds.left
  var /* [auto-meaningful-name] */e$props$innerBounds$top = e$props$innerBounds.top
  var /* [auto-meaningful-name] */e$props$innerBounds$width = e$props$innerBounds.width
  var /* [auto-meaningful-name] */e$props$innerBounds$height = e$props$innerBounds.height
  var d = e$props$innerBounds$left - r[0]
  var p = e$props$innerBounds$left + e$props$innerBounds$width - r[0]
  var f = e$props$innerBounds$top - r[1]
  var h = e$props$innerBounds$top + e$props$innerBounds$height - r[1]
  var m = [[d, f], [p, f], [d, h], [p, h]]
  var g = bc(n, [0, 0])
  if (!rl(n, m, g, 0)) {
    return []
  }
  var _ = []
  var v = m.map(function (e) {
    return [Is(e), ti([0, 0], e)]
  });
  [[n[0], n[1]], [n[1], n[3]], [n[3], n[2]], [n[2], n[0]]].forEach(function (e) {
    var n = ti([0, 0], function (e) {
      var t = e[0]
      var n = e[1]
      var r = n[0] - t[0]
      var o = n[1] - t[1]
      if (!r) {
        return [t[0], 0]
      }
      if (!o) {
        return [0, t[1]]
      }
      var i = o / r
      var a = -i * t[0] + t[1]
      return [-a / (i + 1 / i), a / (i * i + 1)]
    }(e))
    var r = function (e) {
      var t = e[0]
      var n = e[1]
      var r = n[0] - t[0]
      var o = n[1] - t[1]
      if (!r) {
        return Math.abs(t[0])
      }
      if (!o) {
        return Math.abs(t[1])
      }
      var i = o / r
      return Math.abs((-i * t[0] + t[1]) / Math.sqrt(Math.pow(i, 2) + 1))
    }(e)
    _.push.apply(_, v.filter(function (e) {
      var t = e[0]
      return t && r <= t
    }).map(function (e) {
      var t = e[0]
      var o = e[1]
      var i = Math.acos(t ? r / t : 0)
      return [a + (o + i) - n, a + (o - i) - n]
    }).reduce(function (e, t) {
      e.push.apply(e, t)
      return e
    }, []).filter(function (e) {
      return !rl(t, m, g, e)
    }).map(function (e) {
      return oi(180 * e / Math.PI, 1e-7)
    }))
  })
  return _
}
function il(e, t, n) {
  var r = e || {}
  var /* [auto-meaningful-name] */r$position = r.position
  var i = undefined === r$position ? "client" : r$position
  var /* [auto-meaningful-name] */r$left = r.left
  var s = undefined === r$left ? -1 / 0 : r$left
  var /* [auto-meaningful-name] */r$top = r.top
  var l = undefined === r$top ? -1 / 0 : r$top
  var /* [auto-meaningful-name] */r$right = r.right
  var d = undefined === r$right ? 1 / 0 : r$right
  var /* [auto-meaningful-name] */r$bottom = r.bottom
  var f = {
    position: i,
    left: s,
    top: l,
    right: d,
    bottom: undefined === r$bottom ? 1 / 0 : r$bottom
  }
  return {
    vertical: sl(f, t, true),
    horizontal: sl(f, n, false)
  }
}
function al(e, t) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$containerClientRect = e$state.containerClientRect
  var /* [auto-meaningful-name] */e$state$containerClientRect$clientHeight = e$state$containerClientRect.clientHeight
  var /* [auto-meaningful-name] */e$state$containerClientRect$clientWidth = e$state$containerClientRect.clientWidth
  var /* [auto-meaningful-name] */e$state$containerClientRect$clientLeft = e$state$containerClientRect.clientLeft
  var /* [auto-meaningful-name] */e$state$containerClientRect$clientTop = e$state$containerClientRect.clientTop
  var /* [auto-meaningful-name] */e$state$snapOffset = e$state.snapOffset
  var /* [auto-meaningful-name] */e$state$snapOffset$left = e$state$snapOffset.left
  var /* [auto-meaningful-name] */e$state$snapOffset$top = e$state$snapOffset.top
  var /* [auto-meaningful-name] */e$state$snapOffset$right = e$state$snapOffset.right
  var /* [auto-meaningful-name] */e$state$snapOffset$bottom = e$state$snapOffset.bottom
  var f = t || e.props.bounds || {}
  var h = "css" === (f.position || "client")
  var /* [auto-meaningful-name] */f$left = f.left
  var g = undefined === f$left ? -1 / 0 : f$left
  var /* [auto-meaningful-name] */f$top = f.top
  var v = undefined === f$top ? -1 / 0 : f$top
  var /* [auto-meaningful-name] */f$right = f.right
  var y = undefined === f$right ? h ? -1 / 0 : 1 / 0 : f$right
  var /* [auto-meaningful-name] */f$bottom = f.bottom
  var O = undefined === f$bottom ? h ? -1 / 0 : 1 / 0 : f$bottom
  if (h) {
    y = e$state$containerClientRect$clientWidth + e$state$snapOffset$right - e$state$snapOffset$left - y
    O = e$state$containerClientRect$clientHeight + e$state$snapOffset$bottom - e$state$snapOffset$top - O
  }
  return {
    left: g + e$state$snapOffset$left - e$state$containerClientRect$clientLeft,
    right: y + e$state$snapOffset$left - e$state$containerClientRect$clientLeft,
    top: v + e$state$snapOffset$top - e$state$containerClientRect$clientTop,
    bottom: O + e$state$snapOffset$top - e$state$containerClientRect$clientTop
  }
}
function sl(e, t, n) {
  var r = e[n ? "left" : "top"]
  var o = e[n ? "right" : "bottom"]
  var i = Math.min.apply(Math, t)
  var a = Math.max.apply(Math, t)
  var s = []
  if (r + 1 > i) {
    s.push({
      isBound: true,
      offset: i - r,
      pos: r
    })
  }
  if (o - 1 < a) {
    s.push({
      isBound: true,
      offset: a - o,
      pos: o
    })
  }
  if (!s.length) {
    s.push({
      isBound: false,
      offset: 0,
      pos: 0
    })
  }
  return s.sort(function (e, t) {
    return Math.abs(t.offset) - Math.abs(e.offset)
  })
}
function cl(e, t, n) {
  return (n ? e.map(function (e) {
    return zi(e, n)
  }) : e).some(function (e) {
    return e[0] < t.left && Math.abs(e[0] - t.left) > .1 || e[0] > t.right && Math.abs(e[0] - t.right) > .1 || e[1] < t.top && Math.abs(e[1] - t.top) > .1 || e[1] > t.bottom && Math.abs(e[1] - t.bottom) > .1
  })
}
function ll(e, t, n, r, o) {
  if (!e.props.bounds) {
    return []
  }
  var i = o * Math.PI / 180
  var a = al(e)
  var /* [auto-meaningful-name] */a$left = a.left
  var /* [auto-meaningful-name] */a$top = a.top
  var /* [auto-meaningful-name] */a$right = a.right
  var /* [auto-meaningful-name] */a$bottom = a.bottom
  var d = a$left - r[0]
  var p = a$right - r[0]
  var f = a$top - r[1]
  var h = a$bottom - r[1]
  var m = {
    left: d,
    top: f,
    right: p,
    bottom: h
  }
  if (!cl(n, m, 0)) {
    return []
  }
  var g = [];
  [[d, 0], [p, 0], [f, 1], [h, 1]].forEach(function (e) {
    var r = e[0]
    var o = e[1]
    n.forEach(function (e) {
      var n = ti([0, 0], e)
      g.push.apply(g, function (e, t, n) {
        var r = Is(e)
        var o = Math.sqrt(r * r - t * t) || 0
        return [o, -o].sort(function (t, r) {
          return Math.abs(t - e[n ? 0 : 1]) - Math.abs(r - e[n ? 0 : 1])
        }).map(function (e) {
          return ti([0, 0], n ? [e, t] : [t, e])
        })
      }(e, r, o).map(function (e) {
        return i + e - n
      }).filter(function (e) {
        return !cl(t, m, e)
      }).map(function (e) {
        return oi(180 * e / Math.PI, 1e-7)
      }))
    })
  })
  return g
}
function ul(e, t) {
  return function (e, t) {
    var n
    var /* [auto-meaningful-name] */e$direction = e.direction
    var /* [auto-meaningful-name] */e$classNames = e.classNames
    var /* [auto-meaningful-name] */e$size = e.size
    var /* [auto-meaningful-name] */e$pos = e.pos
    var /* [auto-meaningful-name] */e$zoom = e.zoom
    var /* [auto-meaningful-name] */e$key = e.key
    var l = "horizontal" === e$direction
    var u = l ? "Y" : "X"
    return t.createElement("div", {
      key: e$key,
      className: e$classNames.join(" "),
      style: (n = {}, n[l ? "width" : "height"] = "" + e$size, n.transform = "translate(" + e$pos[0] + ", " + e$pos[1] + ") translate" + u + "(-50%) scale" + u + "(" + e$zoom + ")", n)
    })
  }(Xa(Xa({}, e), {
    classNames: Qa([us("line", "guideline", e.direction)], e.classNames).filter(function (e) {
      return e
    }),
    size: e.size || e.sizeValue + "px",
    pos: e.pos || e.posValue.map(function (e) {
      return oi(e, .1) + "px"
    })
  }), t)
}
function dl(e, t, n, r, o, i, a, s) {
  var /* [auto-meaningful-name] */e$props$zoom = e.props.zoom
  return n.map(function (e, n) {
    var /* [auto-meaningful-name] */e$type = e.type
    var /* [auto-meaningful-name] */e$pos = e.pos
    var d = [0, 0]
    d[a] = r
    d[a ? 0 : 1] = -o + e$pos
    return ul({
      key: t + "TargetGuideline" + n,
      classNames: [us("target", "bold", e$type)],
      posValue: d,
      sizeValue: i,
      zoom: e$props$zoom,
      direction: t
    }, s)
  })
}
function pl(e, t, n, r, o, i) {
  var /* [auto-meaningful-name] */e$props = e.props
  var /* [auto-meaningful-name] */e$props$zoom = e$props.zoom
  var /* [auto-meaningful-name] */e$props$isDisplayInnerSnapDigit = e$props.isDisplayInnerSnapDigit
  var l = "horizontal" === t ? xc : Dc
  var u = o[l.start]
  var d = o[l.end]
  return n.filter(function (e) {
    var /* [auto-meaningful-name] */e$hide = e.hide
    var /* [auto-meaningful-name] */e$elementRect = e.elementRect
    if (e$hide) {
      return false
    }
    if (e$props$isDisplayInnerSnapDigit && e$elementRect) {
      var /* [auto-meaningful-name] */e$elementRect$rect = e$elementRect.rect
      if (e$elementRect$rect[l.start] <= u && d <= e$elementRect$rect[l.end]) {
        return false
      }
    }
    return true
  }).map(function (e, n) {
    var /* [auto-meaningful-name] */e$pos = e.pos
    var /* [auto-meaningful-name] */e$size = e.size
    var /* [auto-meaningful-name] */e$element = e.element
    var l = [-r[0] + e$pos[0], -r[1] + e$pos[1]]
    return ul({
      key: t + "-default-guideline-" + n,
      classNames: e$element ? [us("bold")] : [],
      direction: t,
      posValue: l,
      sizeValue: e$size,
      zoom: e$props$zoom
    }, i)
  })
}
function fl(e, t, n, r, o, i, a, s) {
  var c
  var /* [auto-meaningful-name] */e$props = e.props
  var /* [auto-meaningful-name] */e$props$snapDigit = e$props.snapDigit
  var d = undefined === e$props$snapDigit ? 0 : e$props$snapDigit
  var /* [auto-meaningful-name] */e$props$isDisplaySnapDigit = e$props.isDisplaySnapDigit
  var f = undefined === e$props$isDisplaySnapDigit || e$props$isDisplaySnapDigit
  var /* [auto-meaningful-name] */e$props$snapDistFormat = e$props.snapDistFormat
  var m = undefined === e$props$snapDistFormat ? function (e) {
    return e
  } : e$props$snapDistFormat
  var /* [auto-meaningful-name] */e$props$zoom = e$props.zoom
  var _ = "horizontal" === t ? "X" : "Y"
  var v = "vertical" === t ? "height" : "width"
  var b = Math.abs(o)
  var y = f ? parseFloat(b.toFixed(d)) : 0
  return s.createElement("div", {
    key: t + "-" + n + "-guideline-" + r,
    className: us("guideline-group", t),
    style: (c = {
      left: i[0] + "px",
      top: i[1] + "px"
    }, c[v] = b + "px", c)
  }, ul({
    direction: t,
    classNames: [us(n), a],
    size: "100%",
    posValue: [0, 0],
    sizeValue: b,
    zoom: e$props$zoom
  }, s), s.createElement("div", {
    className: us("size-value", "gap"),
    style: {
      transform: "translate" + _ + "(-50%) scale(" + e$props$zoom + ")"
    }
  }, y > 0 ? m(y) : ""))
}
function hl(e, t, n, r, o) {
  var /* [auto-meaningful-name] */e$props$isDisplayInnerSnapDigit = e.props.isDisplayInnerSnapDigit
  var a = [];
  ["vertical", "horizontal"].forEach(function (s) {
    var c = t.filter(function (e) {
      return e.type === s
    })
    var l = "vertical" === s ? 1 : 0
    var u = l ? 0 : 1
    var d = function (e, t, n, r) {
      var o = "vertical" === e ? 0 : 1
      var i = "vertical" === e ? 1 : 0
      var a = o ? xc : Dc
      var s = n[a.start]
      var c = n[a.end]
      return function (e, t) {
        var n = []
        var r = []
        e.forEach(function (o, i) {
          var a = t(o, i, e)
          var s = r.indexOf(a)
          var c = n[s] || []
          if (-1 === s) {
            r.push(a)
            n.push(c)
          }
          c.push(o)
        })
        return n
      }(t, function (e) {
        return e.pos[o]
      }).map(function (t) {
        var n = []
        var l = []
        t.forEach(function (t) {
          var u
          var d
          var /* [auto-meaningful-name] */t$element = t.element
          var /* [auto-meaningful-name] */t$elementRect$rect = t.elementRect.rect
          if (t$elementRect$rect[a.end] < s) {
            n.push(t)
          } else if (c < t$elementRect$rect[a.start]) {
            l.push(t)
          } else if (t$elementRect$rect[a.start] <= s && c <= t$elementRect$rect[a.end] && r) {
            var /* [auto-meaningful-name] */t$pos = t.pos
            var m = {
              element: t$element,
              rect: Xa(Xa({}, t$elementRect$rect), (u = {}, u[a.end] = t$elementRect$rect[a.start], u))
            }
            var g = {
              element: t$element,
              rect: Xa(Xa({}, t$elementRect$rect), (d = {}, d[a.start] = t$elementRect$rect[a.end], d))
            }
            var _ = [0, 0]
            var v = [0, 0]
            _[o] = t$pos[o]
            _[i] = t$pos[i]
            v[o] = t$pos[o]
            v[i] = t$pos[i] + t.size
            n.push({
              type: e,
              pos: _,
              size: 0,
              elementRect: m
            })
            l.push({
              type: e,
              pos: v,
              size: 0,
              elementRect: g
            })
          }
        })
        n.sort(function (e, t) {
          return t.pos[i] - e.pos[i]
        })
        l.sort(function (e, t) {
          return e.pos[i] - t.pos[i]
        })
        return {
          total: t,
          start: n,
          end: l,
          inner: []
        }
      })
    }(s, c, r, e$props$isDisplayInnerSnapDigit)
    var p = l ? Dc : xc
    var f = l ? xc : Dc
    var h = r[p.start]
    var m = r[p.end]
    d.forEach(function (t) {
      var /* [auto-meaningful-name] */t$total = t.total
      var /* [auto-meaningful-name] */t$start = t.start
      var /* [auto-meaningful-name] */t$end = t.end
      var /* [auto-meaningful-name] */t$inner = t.inner
      var _ = n[u] + t$total[0].pos[u] - r[f.start]
      var v = r
      t$start.forEach(function (t) {
        var /* [auto-meaningful-name] */t$elementRect$rect = t.elementRect.rect
        var i = v[p.start] - t$elementRect$rect[p.end]
        if (i > 0) {
          var c = [0, 0]
          c[l] = n[l] + v[p.start] - h - i
          c[u] = _
          a.push(fl(e, s, "dashed", a.length, i, c, t.className, o))
        }
        v = t$elementRect$rect
      })
      v = r
      t$end.forEach(function (t) {
        var /* [auto-meaningful-name] */t$elementRect$rect = t.elementRect.rect
        var i = t$elementRect$rect[p.start] - v[p.end]
        if (i > 0) {
          var c = [0, 0]
          c[l] = n[l] + v[p.end] - h
          c[u] = _
          a.push(fl(e, s, "dashed", a.length, i, c, t.className, o))
        }
        v = t$elementRect$rect
      })
      t$inner.forEach(function (t) {
        var /* [auto-meaningful-name] */t$elementRect$rect = t.elementRect.rect
        var i = h - t$elementRect$rect[p.start]
        var c = t$elementRect$rect[p.end] - m
        var d = [0, 0]
        var f = [0, 0]
        d[l] = n[l] - i
        d[u] = _
        f[l] = n[l] + m - h
        f[u] = _
        a.push(fl(e, s, "dashed", a.length, i, d, t.className, o))
        a.push(fl(e, s, "dashed", a.length, c, f, t.className, o))
      })
    })
  })
  return a
}
function ml(e, t, n, r, o) {
  var i = function (e, t, n, r) {
    var o = t[0] - e[0]
    var i = t[1] - e[1]
    if (Math.abs(o) < 1e-7) {
      o = 0
    }
    if (Math.abs(i) < 1e-7) {
      i = 0
    }
    if (!o) {
      return r ? [0, 0] : [0, n]
    }
    if (!i) {
      return r ? [n, 0] : [0, 0]
    }
    var a = i / o
    var s = e[1] - a * e[0]
    return r ? [n, a * (t[0] + n) + s - t[1]] : [(t[1] + n - s) / a - t[0], n]
  }(e, t, n, r)
  if (!i) {
    return {
      isOutside: false,
      offset: [0, 0]
    }
  }
  var a = ri(e, t)
  var s = ri(i, e)
  var c = ri(i, t)
  var l = s > a || c > a
  var u = gc({
    datas: o,
    distX: i[0],
    distY: i[1]
  })
  return {
    offset: [u[0], u[1]],
    isOutside: l
  }
}
function gl(e, t) {
  return e.isBound ? e.offset : t.isSnap ? zc(t).offset : 0
}
function _l(e, t, n, r, o, i) {
  if (!Mc(e, "draggable")) {
    return [
      {
        isSnap: false,
        isBound: false,
        offset: 0
      }, {
        isSnap: false,
        isBound: false,
        offset: 0
      }
    ]
  }
  var a = Ps(i.absolutePoses, [t, n])
  var s = Ts(a)
  var /* [auto-meaningful-name] */s$left = s.left
  var /* [auto-meaningful-name] */s$right = s.right
  var /* [auto-meaningful-name] */s$top = s.top
  var /* [auto-meaningful-name] */s$bottom = s.bottom
  var p = {
    horizontal: a.map(function (e) {
      return e[1]
    }),
    vertical: a.map(function (e) {
      return e[0]
    })
  }
  var f = vl(e, o, Pc(Lc(e.props.snapDirections), {
    left: s$left,
    right: s$right,
    top: s$top,
    bottom: s$bottom,
    center: (s$left + s$right) / 2,
    middle: (s$top + s$bottom) / 2
  }), p)
  var /* [auto-meaningful-name] */f$vertical = f.vertical
  var /* [auto-meaningful-name] */f$horizontal = f.horizontal
  var g = tl(e, a, i)
  var /* [auto-meaningful-name] */g$vertical = g.vertical
  var /* [auto-meaningful-name] */g$horizontal = g.horizontal
  var /* [auto-meaningful-name] */f$vertical$isSnap = f$vertical.isSnap
  var /* [auto-meaningful-name] */f$horizontal$isSnap = f$horizontal.isSnap
  var E = f$vertical.isBound || g$vertical.isBound
  var O = f$horizontal.isBound || g$horizontal.isBound
  var w = function (e, t, n, r, o) {
    var i = t[0]
    var a = t[1]
    var s = n[0]
    var c = n[1]
    var l = r[0]
    var u = r[1]
    var d = o[0]
    var p = o[1]
    var f = -d
    var h = -p
    if (e && i && a) {
      f = 0
      h = 0
      var m = []
      if (s && c) {
        m.push([0, p], [d, 0])
      } else {
        if (s) {
          m.push([d, 0])
        } else {
          if (c) {
            m.push([0, p])
          } else {
            if (l && u) {
              m.push([0, p], [d, 0])
            } else {
              if (l) {
                m.push([d, 0])
              } else {
                if (u) {
                  m.push([0, p])
                }
              }
            }
          }
        }
      }
      if (m.length) {
        m.sort(function (e, t) {
          return Is(Bi([i, a], e)) - Is(Bi([i, a], t))
        })
        var g = m[0]
        if (g[0] && Math.abs(i) > 1e-7) {
          f = -g[0]
          h = a * Math.abs(i + f) / Math.abs(i) - a
        } else if (g[1] && Math.abs(a) > 1e-7) {
          var _ = a
          h = -g[1]
          f = i * Math.abs(a + h) / Math.abs(_) - i
        }
        if (e && c && s) {
          if (Math.abs(f) > 1e-7 && Math.abs(f) < Math.abs(d)) {
            f *= v = Math.abs(d) / Math.abs(f)
            h *= v
          } else if (Math.abs(h) > 1e-7 && Math.abs(h) < Math.abs(p)) {
            var v
            f *= v = Math.abs(p) / Math.abs(h)
            h *= v
          } else {
            f = Ys(-d, f)
            h = Ys(-p, h)
          }
        }
      }
    } else {
      f = i || s ? -d : 0
      h = a || c ? -p : 0
    }
    return [f, h]
  }(r, [t, n], [E, O], [f$vertical$isSnap, f$horizontal$isSnap], [Ys(f$vertical.offset, g$vertical.offset), Ys(f$horizontal.offset, g$horizontal.offset)])
  return [
    {
      isBound: E,
      isSnap: f$vertical$isSnap,
      offset: w[0]
    }, {
      isBound: O,
      isSnap: f$horizontal$isSnap,
      offset: w[1]
    }
  ]
}
function vl(e, t, n, r) {
  if (undefined === r) {
    r = n
  }
  var o = il(al(e), r.vertical, r.horizontal)
  var /* [auto-meaningful-name] */o$horizontal = o.horizontal
  var /* [auto-meaningful-name] */o$vertical = o.vertical
  var s = t ? {
    horizontal: {
      isSnap: false,
      index: -1
    },
    vertical: {
      isSnap: false,
      index: -1
    }
  } : Uc(e, n.vertical, n.horizontal)
  var /* [auto-meaningful-name] */s$horizontal = s.horizontal
  var /* [auto-meaningful-name] */s$vertical = s.vertical
  var u = gl(o$horizontal[0], s$horizontal)
  var d = gl(o$vertical[0], s$vertical)
  var p = Math.abs(u)
  var f = Math.abs(d)
  return {
    horizontal: {
      isBound: o$horizontal[0].isBound,
      isSnap: s$horizontal.isSnap,
      snapIndex: s$horizontal.index,
      offset: u,
      dist: p,
      bounds: o$horizontal,
      snap: s$horizontal
    },
    vertical: {
      isBound: o$vertical[0].isBound,
      isSnap: s$vertical.isSnap,
      snapIndex: s$vertical.index,
      offset: d,
      dist: f,
      bounds: o$vertical,
      snap: s$vertical
    }
  }
}
function bl(e, t, n, r, o) {
  var i = il(t, n, r)
  var /* [auto-meaningful-name] */i$horizontal = i.horizontal
  var /* [auto-meaningful-name] */i$vertical = i.vertical
  var c = Hc(e, n, r, o)
  var /* [auto-meaningful-name] */c$horizontal = c.horizontal
  var /* [auto-meaningful-name] */c$vertical = c.vertical
  var d = gl(i$horizontal[0], c$horizontal)
  var p = gl(i$vertical[0], c$vertical)
  var f = Math.abs(d)
  var h = Math.abs(p)
  return {
    horizontal: {
      isBound: i$horizontal[0].isBound,
      isSnap: c$horizontal.isSnap,
      snapIndex: c$horizontal.index,
      offset: d,
      dist: f,
      bounds: i$horizontal,
      snap: c$horizontal
    },
    vertical: {
      isBound: i$vertical[0].isBound,
      isSnap: c$vertical.isSnap,
      snapIndex: c$vertical.index,
      offset: p,
      dist: h,
      bounds: i$vertical,
      snap: c$vertical
    }
  }
}
function yl(e, t, n, r, o, i) {
  return n.map(function (n) {
    var a = n[0]
    var s = n[1]
    var c = bc(t, a)
    var l = bc(t, s)
    var u = r ? function (e, t, n, r) {
      var o = function (e, t, n) {
        var r = al(e)
        var /* [auto-meaningful-name] */r$left = r.left
        var /* [auto-meaningful-name] */r$top = r.top
        var /* [auto-meaningful-name] */r$right = r.right
        var /* [auto-meaningful-name] */r$bottom = r.bottom
        var c = n[0]
        var l = n[1]
        var u = Bi(n, t)
        var d = u[0]
        var p = u[1]
        if (Math.abs(d) < 1e-7) {
          d = 0
        }
        if (Math.abs(p) < 1e-7) {
          p = 0
        }
        var f = p > 0
        var h = d > 0
        var m = {
          isBound: false,
          offset: 0,
          pos: 0
        }
        var g = {
          isBound: false,
          offset: 0,
          pos: 0
        }
        if (0 === d && 0 === p) {
          return {
            vertical: m,
            horizontal: g
          }
        }
        if (0 === d) {
          if (f) {
            if (r$bottom < l) {
              g.pos = r$bottom
              g.offset = l - r$bottom
            }
          } else {
            if (r$top > l) {
              g.pos = r$top
              g.offset = l - r$top
            }
          }
        } else if (0 === p) {
          if (h) {
            if (r$right < c) {
              m.pos = r$right
              m.offset = c - r$right
            }
          } else {
            if (r$left > c) {
              m.pos = r$left
              m.offset = c - r$left
            }
          }
        } else {
          var _ = p / d
          var v = n[1] - _ * c
          var b = 0
          var y = 0
          var E = false
          if (h && r$right <= c) {
            b = _ * r$right + v
            y = r$right
            E = true
          } else {
            if (!h && c <= r$left) {
              b = _ * r$left + v
              y = r$left
              E = true
            }
          }
          if (E && (b < r$top || b > r$bottom)) {
            E = false
          }
          if (!E) {
            if (f && r$bottom <= l) {
              y = ((b = r$bottom) - v) / _
              E = true
            } else {
              if (!f && l <= r$top) {
                y = ((b = r$top) - v) / _
                E = true
              }
            }
          }
          if (E) {
            m.isBound = true
            m.pos = y
            m.offset = c - y
            g.isBound = true
            g.pos = b
            g.offset = l - b
          }
        }
        return {
          vertical: m,
          horizontal: g
        }
      }(e, t, n)
      var /* [auto-meaningful-name] */o$horizontal = o.horizontal
      var /* [auto-meaningful-name] */o$vertical = o.vertical
      var s = r ? {
        horizontal: {
          isSnap: false
        },
        vertical: {
          isSnap: false
        }
      } : function (e, t, n) {
        var r = n[0]
        var o = n[1]
        var i = t[0]
        var a = t[1]
        var s = Bi(n, t)
        var c = s[0]
        var l = s[1]
        var u = l > 0
        var d = c > 0
        c = Zs(c)
        l = Zs(l)
        var p = {
          isSnap: false,
          offset: 0,
          pos: 0
        }
        var f = {
          isSnap: false,
          offset: 0,
          pos: 0
        }
        if (0 === c && 0 === l) {
          return {
            vertical: p,
            horizontal: f
          }
        }
        var h = Uc(e, c ? [r] : [], l ? [o] : [])
        var /* [auto-meaningful-name] */h$vertical = h.vertical
        var /* [auto-meaningful-name] */h$horizontal = h.horizontal
        h$vertical.posInfos.filter(function (e) {
          var /* [auto-meaningful-name] */e$pos = e.pos
          return d ? e$pos >= i : e$pos <= i
        })
        h$horizontal.posInfos.filter(function (e) {
          var /* [auto-meaningful-name] */e$pos = e.pos
          return u ? e$pos >= a : e$pos <= a
        })
        h$vertical.isSnap = h$vertical.posInfos.length > 0
        h$horizontal.isSnap = h$horizontal.posInfos.length > 0
        var _ = zc(h$vertical)
        var /* [auto-meaningful-name] */_$isSnap = _.isSnap
        var /* [auto-meaningful-name] */_$guideline = _.guideline
        var y = zc(h$horizontal)
        var /* [auto-meaningful-name] */y$isSnap = y.isSnap
        var /* [auto-meaningful-name] */y$guideline = y.guideline
        var w = y$isSnap ? y$guideline.pos[1] : 0
        var C = _$isSnap ? _$guideline.pos[0] : 0
        if (0 === c) {
          if (y$isSnap) {
            f.isSnap = true
            f.pos = y$guideline.pos[1]
            f.offset = o - f.pos
          }
        } else if (0 === l) {
          if (_$isSnap) {
            p.isSnap = true
            p.pos = C
            p.offset = r - C
          }
        } else {
          var T = l / c
          var S = n[1] - T * r
          var A = 0
          var I = 0
          var j = false
          if (_$isSnap) {
            A = T * (I = C) + S
            j = true
          } else {
            if (y$isSnap) {
              I = ((A = w) - S) / T
              j = true
            }
          }
          if (j) {
            p.isSnap = true
            p.pos = I
            p.offset = r - I
            f.isSnap = true
            f.pos = A
            f.offset = o - A
          }
        }
        return {
          vertical: p,
          horizontal: f
        }
      }(e, t, n)
      var /* [auto-meaningful-name] */s$horizontal = s.horizontal
      var /* [auto-meaningful-name] */s$vertical = s.vertical
      var u = El(o$horizontal, s$horizontal)
      var d = El(o$vertical, s$vertical)
      var p = Math.abs(u)
      var f = Math.abs(d)
      return {
        horizontal: {
          isBound: o$horizontal.isBound,
          isSnap: s$horizontal.isSnap,
          offset: u,
          dist: p
        },
        vertical: {
          isBound: o$vertical.isBound,
          isSnap: s$vertical.isSnap,
          offset: d,
          dist: f
        }
      }
    }(e, c, l, o) : vl(e, o, {
      vertical: [l[0]],
      horizontal: [l[1]]
    })
    var /* [auto-meaningful-name] */u$horizontal = u.horizontal
    var /* [auto-meaningful-name] */u$horizontal$offset = u$horizontal.offset
    var /* [auto-meaningful-name] */u$horizontal$isBound = u$horizontal.isBound
    var /* [auto-meaningful-name] */u$horizontal$isSnap = u$horizontal.isSnap
    var /* [auto-meaningful-name] */u$vertical = u.vertical
    var /* [auto-meaningful-name] */u$vertical$offset = u$vertical.offset
    var /* [auto-meaningful-name] */u$vertical$isBound = u$vertical.isBound
    var /* [auto-meaningful-name] */u$vertical$isSnap = u$vertical.isSnap
    var b = Bi(s, a)
    if (!u$vertical$offset && !u$horizontal$offset) {
      return {
        isBound: u$vertical$isBound || u$horizontal$isBound,
        isSnap: u$vertical$isSnap || u$horizontal$isSnap,
        sign: b,
        offset: [0, 0]
      }
    }
    var y = function (e, t, n, r) {
      var o = ti(e, t) / Math.PI * 180
      var /* [auto-meaningful-name] */n$vertical = n.vertical
      var /* [auto-meaningful-name] */n$vertical$isBound = n$vertical.isBound
      var /* [auto-meaningful-name] */n$vertical$isSnap = n$vertical.isSnap
      var /* [auto-meaningful-name] */n$vertical$dist = n$vertical.dist
      var /* [auto-meaningful-name] */n$horizontal = n.horizontal
      var /* [auto-meaningful-name] */n$horizontal$isBound = n$horizontal.isBound
      var /* [auto-meaningful-name] */n$horizontal$isSnap = n$horizontal.isSnap
      var p = o % 180
      var f = p < 3 || p > 177
      var h = p > 87 && p < 93
      return n$horizontal.dist < n$vertical$dist && (n$vertical$isBound || n$vertical$isSnap && !h && (!r || !f)) ? "vertical" : !n$horizontal$isBound && (!n$horizontal$isSnap || f || r && h) ? "" : "horizontal"
    }(c, l, u, r)
    if (!y) {
      return {
        sign: b,
        isBound: false,
        isSnap: false,
        offset: [0, 0]
      }
    }
    var E = "vertical" === y
    var O = ml(c, l, -(E ? u$vertical$offset : u$horizontal$offset), E, i).offset.map(function (e, t) {
      return e * (b[t] ? 2 / b[t] : 0)
    })
    return {
      sign: b,
      isBound: E ? u$vertical$isBound : u$horizontal$isBound,
      isSnap: E ? u$vertical$isSnap : u$horizontal$isSnap,
      offset: O
    }
  })
}
function El(e, t) {
  return e.isBound ? e.offset : t.isSnap ? t.offset : 0
}
function Ol(e) {
  var /* [auto-meaningful-name] */e$state = e.state
  if (!e$state.guidelines || !e$state.guidelines.length) {
    var /* [auto-meaningful-name] */e$state$container = e.state.container
    var r = e.props.snapContainer || e$state$container
    var /* [auto-meaningful-name] */e$state$containerClientRect = e$state.containerClientRect
    var i = {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    }
    if (e$state$container !== r) {
      var a = ec(r, true)
      if (a) {
        var s = Ms(a)
        var c = nc(e$state, [s.left - e$state$containerClientRect.left, s.top - e$state$containerClientRect.top])
        var l = nc(e$state, [s.right - e$state$containerClientRect.right, s.bottom - e$state$containerClientRect.bottom])
        i.left = oi(c[0], .1)
        i.top = oi(c[1], .1)
        i.right = oi(l[0], .1)
        i.bottom = oi(l[1], .1)
      }
    }
    e$state.snapOffset = i
    e$state.guidelines = Wc(e)
    e$state.enableSnap = true
  }
}
function wl(e, t, n, r, o, i) {
  var a = Cs(e, t, n, i ? 4 : 3)
  return Ps(a, Bi(r, function (e, t) {
    return bc(e, t.map(function (e) {
      return -e
    }))
  }(a, o)))
}
function Cl(e, t, n, r, o, i) {
  var a = function (e, t) {
    var n = []
    var r = [-e[0], -e[1]]
    if (e[0] && e[1]) {
      n.push([r, [e[0], -e[1]]], [r, [-e[0], e[1]]])
      if (t) {
        n.push([r, e])
      }
    } else {
      if (e[0]) {
        if (t) {
          n.push([r, [r[0], -1]], [r, [r[0], 1]], [r, [e[0], -1]], [r, e], [r, [e[0], 1]])
        } else {
          n.push([[r[0], -1], [e[0], -1]], [[r[0], 0], [e[0], 0]], [[r[0], 1], [e[0], 1]])
        }
      } else {
        if (e[1]) {
          if (t) {
            n.push([r, [-1, r[1]]], [r, [1, r[1]]], [r, [-1, e[1]]], [r, [1, e[1]]], [r, e])
          } else {
            n.push([[-1, r[1]], [-1, e[1]]], [[0, r[1]], [0, e[1]]], [[1, r[1]], [1, e[1]]])
          }
        } else {
          n.push([r, [1, 0]], [r, [-1, 0]], [r, [0, -1]], [r, [0, 1]], [[1, 0], [1, -1]], [[1, 0], [1, 1]], [[0, 1], [1, 1]], [[0, 1], [-1, 1]], [[-1, 0], [-1, -1]], [[-1, 0], [-1, 1]], [[0, -1], [1, -1]], [[0, -1], [-1, -1]])
        }
      }
    }
    return n
  }(n, r)
  var s = nl(t, n, r)
  var c = Qa(yl(e, t, a, r, o, i), el(e, s, bc(t, [0, 0]), i))
  var l = qc(c, 0)
  var u = qc(c, 1)
  return {
    width: {
      isBound: l.isBound,
      offset: l.offset[0]
    },
    height: {
      isBound: u.isBound,
      offset: u.offset[1]
    }
  }
}
function Tl(e, t, n, r, o, i, a, s) {
  for (var c = Bs(e.state), /* [auto-meaningful-name] */e$props$keepRatio = e.props.keepRatio, u = 0, d = 0, p = 0; p < 2; ++p) {
    var f = Cl(e, t(u, d), o, e$props$keepRatio, a, s)
    var /* [auto-meaningful-name] */f$width = f.width
    var /* [auto-meaningful-name] */f$height = f.height
    var /* [auto-meaningful-name] */f$width$isBound = f$width.isBound
    var /* [auto-meaningful-name] */f$height$isBound = f$height.isBound
    var /* [auto-meaningful-name] */f$width$offset = f$width.offset
    var /* [auto-meaningful-name] */f$height$offset = f$height.offset
    if (1 === p) {
      if (!f$width$isBound) {
        f$width$offset = 0
      }
      if (!f$height$isBound) {
        f$height$offset = 0
      }
    }
    if (0 === p && a && !f$width$isBound && !f$height$isBound) {
      return [0, 0]
    }
    if (e$props$keepRatio) {
      var y = Math.abs(f$width$offset) * (n ? 1 / n : 1)
      var E = Math.abs(f$height$offset) * (r ? 1 / r : 1)
      if (f$width$isBound && f$height$isBound ? y < E : f$height$isBound || !f$width$isBound && y < E) {
        f$width$offset = n * f$height$offset / r
      } else {
        f$height$offset = r * f$width$offset / n
      }
    }
    u += f$width$offset
    d += f$height$offset
  }
  if (o[0] && o[1]) {
    var O = function (e, t, n, r, o) {
      var i = [-n[0], -n[1]]
      var /* [auto-meaningful-name] */e$state = e.state
      var /* [auto-meaningful-name] */e$state$width = e$state.width
      var /* [auto-meaningful-name] */e$state$height = e$state.height
      var /* [auto-meaningful-name] */e$props$bounds = e.props.bounds
      var u = 1 / 0
      var d = 1 / 0
      if (e$props$bounds) {
        var p = [[n[0], -n[1]], [-n[0], n[1]]]
        var /* [auto-meaningful-name] */e$props$bounds$left = e$props$bounds.left
        var h = undefined === e$props$bounds$left ? -1 / 0 : e$props$bounds$left
        var /* [auto-meaningful-name] */e$props$bounds$top = e$props$bounds.top
        var g = undefined === e$props$bounds$top ? -1 / 0 : e$props$bounds$top
        var /* [auto-meaningful-name] */e$props$bounds$right = e$props$bounds.right
        var v = undefined === e$props$bounds$right ? 1 / 0 : e$props$bounds$right
        var /* [auto-meaningful-name] */e$props$bounds$bottom = e$props$bounds.bottom
        var y = undefined === e$props$bounds$bottom ? 1 / 0 : e$props$bounds$bottom
        p.forEach(function (e) {
          var n = e[0] !== i[0]
          var a = e[1] !== i[1]
          var l = bc(t, e)
          var p = 360 * ti(r, l) / Math.PI
          if (a) {
            var f = l.slice()
            if (Math.abs(p - 360) < 2 || Math.abs(p - 180) < 2) {
              f[1] = r[1]
            }
            var m = ml(r, f, (r[1] < l[1] ? y : g) - l[1], false, o)
            var _ = m.offset[1]
            var /* [auto-meaningful-name] */m$isOutside = m.isOutside
            if (!isNaN(_)) {
              d = e$state$height + (m$isOutside ? 1 : -1) * Math.abs(_)
            }
          }
          if (n) {
            f = l.slice()
            if (Math.abs(p - 90) < 2 || Math.abs(p - 270) < 2) {
              f[0] = r[0]
            }
            var E = ml(r, f, (r[0] < l[0] ? v : h) - l[0], true, o)
            var O = E.offset[0]
            var /* [auto-meaningful-name] */E$isOutside = E.isOutside
            if (!isNaN(O)) {
              u = e$state$width + (E$isOutside ? 1 : -1) * Math.abs(O)
            }
          }
        })
      }
      return {
        maxWidth: u,
        maxHeight: d
      }
    }(e, c, o, i, s)
    var /* [auto-meaningful-name] */O$maxWidth = O.maxWidth
    var /* [auto-meaningful-name] */O$maxHeight = O.maxHeight
    var T = function (e, t, n, r, o, i, a, s, c) {
      var l = bc(t, a)
      var u = vl(e, s, {
        vertical: [l[0]],
        horizontal: [l[1]]
      })
      var /* [auto-meaningful-name] */u$horizontal$offset = u.horizontal.offset
      var /* [auto-meaningful-name] */u$vertical$offset = u.vertical.offset
      if (u$vertical$offset || u$horizontal$offset) {
        var f = gc({
          datas: c,
          distX: -u$vertical$offset,
          distY: -u$horizontal$offset
        })
        var h = f[0]
        var m = f[1]
        return [Math.min(o || 1 / 0, n + a[0] * h) - n, Math.min(i || 1 / 0, r + a[1] * m) - r]
      }
      return [0, 0]
    }(e, t(u, d).map(function (e) {
      return e.map(function (e) {
        return oi(e, 1e-4)
      })
    }), n + u, r + d, O$maxWidth, O$maxHeight, o, a, s)
    u += f$width$offset = T[0]
    d += f$height$offset = T[1]
  }
  return [u, d]
}
function Sl(e, t, n, r) {
  if (!Mc(e, "rotatable")) {
    return r
  }
  var /* [auto-meaningful-name] */t$pos1 = t.pos1
  var /* [auto-meaningful-name] */t$pos2 = t.pos2
  var /* [auto-meaningful-name] */t$pos3 = t.pos3
  var /* [auto-meaningful-name] */t$pos4 = t.pos4
  var c = r * Math.PI / 180
  var l = [t$pos1, t$pos2, t$pos3, t$pos4].map(function (e) {
    return Bi(e, n)
  })
  var u = l.map(function (e) {
    return zi(e, c)
  })
  var d = Qa(ll(e, l, u, n, r), ol(e, l, u, n, r))
  d.sort(function (e, t) {
    return Math.abs(e - r) - Math.abs(t - r)
  })
  return d.length ? d[0] : r
}
function Al(e, t, n, r, o) {
  var /* [auto-meaningful-name] */o$width = o.width
  var /* [auto-meaningful-name] */o$height = o.height
  var /* [auto-meaningful-name] */o$fixedPosition = o.fixedPosition
  if (!Mc(e, "scalable")) {
    return [0, 0]
  }
  var /* [auto-meaningful-name] */o$is3d = o.is3d
  var l = Tl(e, function (e, r) {
    return wl(function (e, t) {
      var /* [auto-meaningful-name] */e$transformOrigin = e.transformOrigin
      var /* [auto-meaningful-name] */e$offsetMatrix = e.offsetMatrix
      var o = e.is3d ? 4 : 3
      return yc(e$offsetMatrix, Li(e.targetMatrix, Qi(t, o), o), e$transformOrigin, o)
    }(o, Pi(t, [e / o$width, r / o$height])), o$width, o$height, o$fixedPosition, n, o$is3d)
  }, o$width, o$height, n, o$fixedPosition, r, o)
  return [l[0] / o$width, l[1] / o$height]
}
function Il(e) {
  var t = []
  e.forEach(function (e) {
    e.guidelineInfos.forEach(function (e) {
      var /* [auto-meaningful-name] */e$guideline = e.guideline
      if (!(t.indexOf(e$guideline) > -1)) {
        t.push(e$guideline)
      }
    })
  })
  return t
}
function jl(e, t, n, r, o, i) {
  var a = il(al(e, i), t, n)
  var /* [auto-meaningful-name] */a$vertical = a.vertical
  var /* [auto-meaningful-name] */a$horizontal = a.horizontal
  a$vertical.forEach(function (e) {
    if (e.isBound) {
      r.push({
        type: "bounds",
        pos: e.pos
      })
    }
  })
  a$horizontal.forEach(function (e) {
    if (e.isBound) {
      o.push({
        type: "bounds",
        pos: e.pos
      })
    }
  })
  var l = function (e) {
    var /* [auto-meaningful-name] */e$props$innerBounds = e.props.innerBounds
    if (!e$props$innerBounds) {
      return {
        vertical: [],
        horizontal: []
      }
    }
    var n = e.getRect()
    var /* [auto-meaningful-name] */n$pos1 = n.pos1
    var /* [auto-meaningful-name] */n$pos2 = n.pos2
    var /* [auto-meaningful-name] */n$pos3 = n.pos3
    var /* [auto-meaningful-name] */n$pos4 = n.pos4
    var s = bc([n$pos1, n$pos2, n$pos3, n$pos4], [0, 0])
    var /* [auto-meaningful-name] */e$props$innerBounds$left = e$props$innerBounds.left
    var /* [auto-meaningful-name] */e$props$innerBounds$top = e$props$innerBounds.top
    var /* [auto-meaningful-name] */e$props$innerBounds$width = e$props$innerBounds.width
    var /* [auto-meaningful-name] */e$props$innerBounds$height = e$props$innerBounds.height
    var p = [[e$props$innerBounds$left, e$props$innerBounds$top], [e$props$innerBounds$left, e$props$innerBounds$top + e$props$innerBounds$height]]
    var f = [[e$props$innerBounds$left, e$props$innerBounds$top], [e$props$innerBounds$left + e$props$innerBounds$width, e$props$innerBounds$top]]
    var h = [[e$props$innerBounds$left + e$props$innerBounds$width, e$props$innerBounds$top], [e$props$innerBounds$left + e$props$innerBounds$width, e$props$innerBounds$top + e$props$innerBounds$height]]
    var m = [[e$props$innerBounds$left, e$props$innerBounds$top + e$props$innerBounds$height], [e$props$innerBounds$left + e$props$innerBounds$width, e$props$innerBounds$top + e$props$innerBounds$height]]
    var g = []
    var _ = []
    var v = {
      top: false,
      bottom: false,
      left: false,
      right: false
    };
    [[n$pos1, n$pos2], [n$pos2, n$pos4], [n$pos4, n$pos3], [n$pos3, n$pos1]].forEach(function (e) {
      var t = Xc(s, e)
      var /* [auto-meaningful-name] */t$horizontal = t.horizontal
      var /* [auto-meaningful-name] */t$vertical = t.vertical
      var o = $c(e, f, t$vertical, 1, true)
      var i = $c(e, m, t$vertical, 1, true)
      var a = $c(e, p, t$horizontal, 1, true)
      var b = $c(e, h, t$horizontal, 1, true)
      if (o.isBound && !v.top) {
        g.push(e$props$innerBounds$top)
        v.top = true
      }
      if (i.isBound && !v.bottom) {
        g.push(e$props$innerBounds$top + e$props$innerBounds$height)
        v.bottom = true
      }
      if (a.isBound && !v.left) {
        _.push(e$props$innerBounds$left)
        v.left = true
      }
      if (b.isBound && !v.right) {
        _.push(e$props$innerBounds$left + e$props$innerBounds$width)
        v.right = true
      }
    })
    return {
      horizontal: g,
      vertical: _
    }
  }(e)
  var /* [auto-meaningful-name] */l$vertical = l.vertical
  var /* [auto-meaningful-name] */l$horizontal = l.horizontal
  l$vertical.forEach(function (e) {
    if (!(qo(r, function (t) {
      var /* [auto-meaningful-name] */t$type = t.type
      var /* [auto-meaningful-name] */t$pos = t.pos
      return "bounds" === t$type && t$pos === e
    }) >= 0)) {
      r.push({
        type: "bounds",
        pos: e
      })
    }
  })
  l$horizontal.forEach(function (e) {
    if (!(qo(o, function (t) {
      var /* [auto-meaningful-name] */t$type = t.type
      var /* [auto-meaningful-name] */t$pos = t.pos
      return "bounds" === t$type && t$pos === e
    }) >= 0)) {
      o.push({
        type: "bounds",
        pos: e
      })
    }
  })
}
var Nl = {
  name: "snappable",
  props: {
    snappable: [Boolean, Array],
    snapContainer: Object,
    snapDirections: [Boolean, Object],
    elementSnapDirections: [Boolean, Object],
    snapGap: Boolean,
    snapGridWidth: Number,
    snapGridHeight: Number,
    isDisplaySnapDigit: Boolean,
    isDisplayInnerSnapDigit: Boolean,
    snapDigit: Number,
    snapThreshold: Number,
    horizontalGuidelines: Array,
    verticalGuidelines: Array,
    elementGuidelines: Array,
    bounds: Object,
    innerBounds: Object,
    snapDistFormat: Function
  },
  events: {
    onSnap: "snap"
  },
  css: [":host {\n    --bounds-color: #d66;\n}\n.guideline {\n    pointer-events: none;\n    z-index: 2;\n}\n.guideline.bounds {\n    background: #d66;\n    background: var(--bounds-color);\n}\n.guideline-group {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.guideline-group .size-value {\n    position: absolute;\n    color: #f55;\n    font-size: 12px;\n    font-weight: bold;\n}\n.guideline-group.horizontal .size-value {\n    transform-origin: 50% 100%;\n    transform: translateX(-50%);\n    left: 50%;\n    bottom: 5px;\n}\n.guideline-group.vertical .size-value {\n    transform-origin: 0% 50%;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 5px;\n}\n.guideline.gap {\n    background: #f55;\n}\n.size-value.gap {\n    color: #f55;\n}\n"],
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$top = e$state.top
    var /* [auto-meaningful-name] */e$state$left = e$state.left
    var /* [auto-meaningful-name] */e$state$pos1 = e$state.pos1
    var /* [auto-meaningful-name] */e$state$pos2 = e$state.pos2
    var /* [auto-meaningful-name] */e$state$pos3 = e$state.pos3
    var /* [auto-meaningful-name] */e$state$pos4 = e$state.pos4
    var /* [auto-meaningful-name] */e$state$snapRenderInfo = e$state.snapRenderInfo
    if (!e$state$snapRenderInfo || !Mc(e, "")) {
      return []
    }
    e$state.guidelines = Wc(e)
    var u = Math.min(e$state$pos1[0], e$state$pos2[0], e$state$pos3[0], e$state$pos4[0])
    var d = Math.min(e$state$pos1[1], e$state$pos2[1], e$state$pos3[1], e$state$pos4[1])
    var p = e$state$snapRenderInfo.externalPoses || []
    var f = Bs(e.state)
    var h = []
    var m = []
    var g = []
    var _ = []
    var v = []
    var b = Ts(f)
    var /* [auto-meaningful-name] */b$width = b.width
    var /* [auto-meaningful-name] */b$height = b.height
    var /* [auto-meaningful-name] */b$top = b.top
    var /* [auto-meaningful-name] */b$left = b.left
    var /* [auto-meaningful-name] */b$bottom = b.bottom
    var /* [auto-meaningful-name] */b$right = b.right
    var S = {
      left: b$left,
      right: b$right,
      top: b$top,
      bottom: b$bottom,
      center: (b$left + b$right) / 2,
      middle: (b$top + b$bottom) / 2
    }
    var A = p.length > 0
    var I = A ? Ts(p) : {}
    if (!e$state$snapRenderInfo.request) {
      if (e$state$snapRenderInfo.direction) {
        v.push(function (e, t, n) {
          var r = []
          if (n[0] && n[1]) {
            r = [n, [-n[0], n[1]], [n[0], -n[1]]].map(function (e) {
              return bc(t, e)
            })
          } else if (n[0] || n[1]) {
            if (e.props.keepRatio) {
              r = [[-1, -1], [-1, 1], [1, -1], [1, 1], n].map(function (e) {
                return bc(t, e)
              })
            } else {
              if ((r = vc(t, n)).length > 1) {
                r.push([(r[0][0] + r[1][0]) / 2, (r[0][1] + r[1][1]) / 2])
              }
            }
          } else {
            for (var o = [t[0], t[1], t[3], t[2], t[0]], i = 0; i < 4; ++i) {
              r.push(o[i])
              r.push([(o[i][0] + o[i + 1][0]) / 2, (o[i][1] + o[i + 1][1]) / 2])
            }
          }
          return Uc(e, r.map(function (e) {
            return e[0]
          }), r.map(function (e) {
            return e[1]
          }), 1)
        }(e, f, e$state$snapRenderInfo.direction))
      }
      if (e$state$snapRenderInfo.snap) {
        var j = Ts(f)
        if (e$state$snapRenderInfo.center) {
          j.middle = (j.top + j.bottom) / 2
          j.center = (j.left + j.right) / 2
        }
        v.push(Vc(e, j, 1))
      }
      if (A) {
        if (e$state$snapRenderInfo.center) {
          I.middle = (I.top + I.bottom) / 2
          I.center = (I.left + I.right) / 2
        }
        v.push(Vc(e, I, 1))
      }
      v.forEach(function (e) {
        var /* [auto-meaningful-name] */e$vertical$posInfos = e.vertical.posInfos
        var /* [auto-meaningful-name] */e$horizontal$posInfos = e.horizontal.posInfos
        h.push.apply(h, e$vertical$posInfos.filter(function (e) {
          return e.guidelineInfos.some(function (e) {
            return !e.guideline.hide
          })
        }).map(function (e) {
          return {
            type: "snap",
            pos: e.pos
          }
        }))
        m.push.apply(m, e$horizontal$posInfos.filter(function (e) {
          return e.guidelineInfos.some(function (e) {
            return !e.guideline.hide
          })
        }).map(function (e) {
          return {
            type: "snap",
            pos: e.pos
          }
        }))
        g.push.apply(g, Il(e$vertical$posInfos))
        _.push.apply(_, Il(e$horizontal$posInfos))
      })
    }
    jl(e, [b$left, b$right], [b$top, b$bottom], h, m)
    if (A) {
      jl(e, [I.left, I.right], [I.top, I.bottom], h, m, e$state$snapRenderInfo.externalBounds)
    }
    var N = Qa(g, _)
    var R = N.filter(function (e) {
      return e.element && !e.gapRects
    })
    var k = N.filter(function (e) {
      return e.gapRects
    })
    Us(e, "onSnap", {
      guidelines: N.filter(function (e) {
        return !e.element
      }),
      elements: R,
      gaps: k
    }, true)
    return Qa(hl(e, R, [u, d], S, t), function (e, t, n, r, o) {
      var i = [];
      ["horizontal", "vertical"].forEach(function (a) {
        var s = t.filter(function (e) {
          return e.type === a
        })
        var c = "vertical" === a ? 0 : 1
        var l = c ? 0 : 1
        var u = c ? Dc : xc
        var d = c ? xc : Dc
        var p = r[u.start]
        var f = r[u.end]
        var h = r[d.start]
        var m = r[d.end]
        s.forEach(function (t) {
          var /* [auto-meaningful-name] */t$gap = t.gap
          var /* [auto-meaningful-name] */t$gapRects = t.gapRects
          var /* [auto-meaningful-name] */t$className = t.className
          var g = Math.max.apply(Math, Qa([h], t$gapRects.map(function (e) {
            return e.rect[d.start]
          })))
          var _ = Math.min.apply(Math, Qa([m], t$gapRects.map(function (e) {
            return e.rect[d.end]
          })))
          var v = (g + _) / 2
          if (g !== _ && v !== (h + m) / 2) {
            t$gapRects.forEach(function (t) {
              var /* [auto-meaningful-name] */t$rect = t.rect
              var d = [n[0], n[1]]
              if (t$rect[u.end] < p) {
                d[c] += t$rect[u.end] - p
              } else {
                if (!(f < t$rect[u.start])) {
                  return
                }
                d[c] += t$rect[u.start] - p - t$gap
              }
              d[l] += v - h
              i.push(fl(e, c ? "vertical" : "horizontal", "gap", i.length, t$gap, d, t$className, o))
            })
          }
        })
      })
      return i
    }(e, k, [u, d], S, t), pl(e, "horizontal", _, [e$state$left, e$state$top], S, t), pl(e, "vertical", g, [e$state$left, e$state$top], S, t), dl(e, "horizontal", m, u, e$state$top, b$width, 0, t), dl(e, "vertical", h, d, e$state$left, b$height, 1, t))
  },
  dragStart: function (e, t) {
    e.state.snapRenderInfo = {
      request: t.isRequest,
      snap: true,
      center: true
    }
    Ol(e)
  },
  drag: function (e) {
    e.state.guidelines = Wc(e)
  },
  pinchStart: function (e) {
    this.unset(e)
  },
  dragEnd: function (e) {
    this.unset(e)
  },
  dragControlCondition: function (e, t) {
    return !(!Js(0, t) && !Gl(e, t)) || (!t.isRequest && t.inputEvent ? ai(t.inputEvent.target, us("snap-control")) : undefined)
  },
  dragControlStart: function (e) {
    e.state.snapRenderInfo = null
    Ol(e)
  },
  dragControl: function (e) {
    this.drag(e)
  },
  dragControlEnd: function (e) {
    this.unset(e)
  },
  dragGroupStart: function (e, t) {
    this.dragStart(e, t)
  },
  dragGroup: function (e) {
    this.drag(e)
  },
  dragGroupEnd: function (e) {
    this.unset(e)
  },
  dragGroupControlStart: function (e) {
    e.state.snapRenderInfo = null
    Ol(e)
  },
  dragGroupControl: function (e) {
    this.drag(e)
  },
  dragGroupControlEnd: function (e) {
    this.unset(e)
  },
  unset: function (e) {
    var /* [auto-meaningful-name] */e$state = e.state
    e$state.enableSnap = false
    e$state.guidelines = []
    e$state.snapRenderInfo = null
    e$state.elementRects = []
  }
}
var Rl = {
  name: "draggable",
  props: {
    draggable: Boolean,
    throttleDrag: Number,
    throttleDragRotate: Number,
    startDragRotate: Number,
    edgeDraggable: Boolean
  },
  events: {
    onDragStart: "dragStart",
    onDrag: "drag",
    onDragEnd: "dragEnd",
    onDragGroupStart: "dragGroupStart",
    onDragGroup: "dragGroup",
    onDragGroupEnd: "dragGroupEnd"
  },
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$throttleDragRotate = e$props.throttleDragRotate
    var /* [auto-meaningful-name] */e$props$zoom = e$props.zoom
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$dragInfo = e$state.dragInfo
    var /* [auto-meaningful-name] */e$state$beforeOrigin = e$state.beforeOrigin
    if (!e$props$throttleDragRotate || !e$state$dragInfo) {
      return []
    }
    var /* [auto-meaningful-name] */e$state$dragInfo$dist = e$state$dragInfo.dist
    if (!e$state$dragInfo$dist[0] && !e$state$dragInfo$dist[1]) {
      return []
    }
    var l = Is(e$state$dragInfo$dist)
    var u = ti(e$state$dragInfo$dist, [0, 0])
    return [
      t.createElement("div", {
        className: us("line", "horizontal", "dragline", "dashed"),
        key: "dragRotateGuideline",
        style: {
          width: l + "px",
          transform: "translate(" + e$state$beforeOrigin[0] + "px, " + e$state$beforeOrigin[1] + "px) rotate(" + u + "rad) scaleY(" + e$props$zoom + ")"
        }
      })
    ]
  },
  dragStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$parentEvent = t.parentEvent
    var /* [auto-meaningful-name] */t$parentGesto = t.parentGesto
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$target = e$state.target
    if (e$state.gesto) {
      return false
    }
    e$state.gesto = t$parentGesto || e.targetGesto
    var s = Hs(e$state$target)
    t$datas.datas = {}
    t$datas.left = parseFloat(s.left || "") || 0
    t$datas.top = parseFloat(s.top || "") || 0
    t$datas.bottom = parseFloat(s.bottom || "") || 0
    t$datas.right = parseFloat(s.right || "") || 0
    t$datas.startValue = [0, 0]
    uc(e, t)
    Oc(t, "translate");
    (function (e, t) {
      t.absolutePoses = Bs(e.state)
    })(e, t$datas)
    t$datas.prevDist = [0, 0]
    t$datas.prevBeforeDist = [0, 0]
    t$datas.isDrag = false
    t$datas.deltaOffset = [0, 0]
    t$datas.distOffset = [0, 0]
    var c = Gs(e, t, Xa({
      set: function (e) {
        t$datas.startValue = e
      }
    }, Ec(t)))
    if (false !== (t$parentEvent || Us(e, "onDragStart", c))) {
      t$datas.isDrag = true
      e.state.dragInfo = {
        startRect: e.getRect(),
        dist: [0, 0]
      }
    } else {
      e$state.gesto = null
      t$datas.isPinch = false
    }
    return !!t$datas.isDrag && c
  },
  drag: function (e, t) {
    if (t) {
      dc(t, "translate")
      var /* [auto-meaningful-name] */t$datas = t.datas
      var /* [auto-meaningful-name] */t$parentEvent = t.parentEvent
      var /* [auto-meaningful-name] */t$parentFlag = t.parentFlag
      var /* [auto-meaningful-name] */t$isPinch = t.isPinch
      var /* [auto-meaningful-name] */t$isRequest = t.isRequest
      var /* [auto-meaningful-name] */t$distX = t.distX
      var /* [auto-meaningful-name] */t$distY = t.distY
      var /* [auto-meaningful-name] */t$datas$isDrag = t$datas.isDrag
      var /* [auto-meaningful-name] */t$datas$prevDist = t$datas.prevDist
      var /* [auto-meaningful-name] */t$datas$prevBeforeDist = t$datas.prevBeforeDist
      var /* [auto-meaningful-name] */t$datas$startValue = t$datas.startValue
      var /* [auto-meaningful-name] */t$datas$distOffset = t$datas.distOffset
      if (t$datas$isDrag) {
        t$distX += t$datas$distOffset[0]
        t$distY += t$datas$distOffset[1]
        var /* [auto-meaningful-name] */e$props = e.props
        var /* [auto-meaningful-name] */e$props$parentMoveable = e$props.parentMoveable
        var g = t$parentEvent ? 0 : e$props.throttleDrag || 0
        var _ = t$parentEvent ? 0 : e$props.throttleDragRotate || 0
        var v = false
        var b = 0
        if (!t$parentEvent && _ > 0 && (t$distX || t$distY)) {
          var y = e$props.startDragRotate || 0
          var E = oi(y + 180 * ti([0, 0], [t$distX, t$distY]) / Math.PI, _) - y
          var O = t$distY * Math.abs(Math.cos((E - 90) / 180 * Math.PI))
          var w = Is([t$distX * Math.abs(Math.cos(E / 180 * Math.PI)), O])
          b = E * Math.PI / 180
          t$distX = w * Math.cos(b)
          t$distY = w * Math.sin(b)
        }
        if (!t$isPinch && !t$parentEvent && !t$parentFlag && (!_ || t$distX || t$distY)) {
          var C = _l(e, t$distX, t$distY, _, t$isRequest, t$datas)
          var T = C[0]
          var S = C[1]
          var /* [auto-meaningful-name] */T$isSnap = T.isSnap
          var /* [auto-meaningful-name] */T$isBound = T.isBound
          var /* [auto-meaningful-name] */T$offset = T.offset
          var /* [auto-meaningful-name] */S$isSnap = S.isSnap
          var /* [auto-meaningful-name] */S$isBound = S.isBound
          v = T$isSnap || S$isSnap || T$isBound || S$isBound
          t$distX += T$offset
          t$distY += S.offset
        }
        var k = Pi(mc({
          datas: t$datas,
          distX: t$distX,
          distY: t$distY
        }), t$datas$startValue)
        var x = Pi(fc({
          datas: t$datas,
          distX: t$distX,
          distY: t$distY
        }), t$datas$startValue)
        if (!(_ || v)) {
          ii(x, g)
          ii(k, g)
        }
        var D = Bi(k, t$datas$startValue)
        var M = Bi(x, t$datas$startValue)
        var L = Bi(M, t$datas$prevDist)
        var P = Bi(D, t$datas$prevBeforeDist)
        t$datas.prevDist = M
        t$datas.prevBeforeDist = D
        t$datas.passDelta = L
        t$datas.passDist = M
        var B = t$datas.left + D[0]
        var F = t$datas.top + D[1]
        var G = t$datas.right - D[0]
        var W = t$datas.bottom - D[1]
        var U = pc(t$datas, "translate(" + x[0] + "px, " + x[1] + "px)", "translate(" + M[0] + "px, " + M[1] + "px)")
        e.state.dragInfo.dist = t$parentEvent ? [0, 0] : M
        if (t$parentEvent || e$props$parentMoveable || !L.every(function (e) {
          return !e
        }) || !P.some(function (e) {
          return !e
        })) {
          var /* [auto-meaningful-name] */e$state = e.state
          var V = Gs(e, t, {
            transform: U,
            dist: M,
            delta: L,
            translate: x,
            beforeDist: D,
            beforeDelta: P,
            beforeTranslate: k,
            left: B,
            top: F,
            right: G,
            bottom: W,
            width: e$state.width,
            height: e$state.height,
            isPinch: t$isPinch
          })
          if (!t$parentEvent) {
            Us(e, "onDrag", V)
          }
          return V
        }
      }
    }
  },
  dragAfter: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$datas1 = t.datas
    var /* [auto-meaningful-name] */t$datas1$deltaOffset = t$datas1.deltaOffset
    var /* [auto-meaningful-name] */t$datas1$distOffset = t$datas1.distOffset
    return !(!t$datas1$deltaOffset[0] && !t$datas1$deltaOffset[1]) && (t$datas.deltaOffset = [0, 0], t$datas1$distOffset[0] += t$datas1$deltaOffset[0], t$datas1$distOffset[1] += t$datas1$deltaOffset[1], this.drag(e, t))
  },
  dragEnd: function (e, t) {
    var /* [auto-meaningful-name] */t$parentEvent = t.parentEvent
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isDrag = t.isDrag
    e.state.gesto = null
    e.state.dragInfo = null
    if (t$datas.isDrag) {
      t$datas.isDrag = false
      if (!t$parentEvent) {
        Us(e, "onDragEnd", Ws(e, t, {}))
      }
      return t$isDrag
    }
  },
  dragGroupStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$clientX = t.clientX
    var /* [auto-meaningful-name] */t$clientY = t.clientY
    var i = this.dragStart(e, t)
    if (!i) {
      return false
    }
    var a = sc(e, this, "dragStart", [t$clientX || 0, t$clientY || 0], t, false)
    var s = Us(e, "onDragGroupStart", Xa(Xa({}, i), {
      targets: e.props.targets,
      events: a
    }))
    t$datas.isDrag = false !== s
    return !!t$datas.isDrag && i
  },
  dragGroup: function (e, t) {
    if (t.datas.isDrag) {
      var n = this.drag(e, t)
      var r = sc(e, this, "drag", t.datas.passDelta, t, false)
      if (n) {
        var o = Xa({
          targets: e.props.targets,
          events: r
        }, n)
        Us(e, "onDragGroup", o)
        return o
      }
    }
  },
  dragGroupEnd: function (e, t) {
    var /* [auto-meaningful-name] */t$isDrag = t.isDrag
    if (t.datas.isDrag) {
      this.dragEnd(e, t)
      sc(e, this, "dragEnd", [0, 0], t, false)
      Us(e, "onDragGroupEnd", Ws(e, t, {
        targets: e.props.targets
      }))
      return t$isDrag
    }
  },
  request: function (e) {
    var t = {}
    var n = e.getRect()
    var r = 0
    var o = 0
    return {
      isControl: false,
      requestStart: function () {
        return {
          datas: t
        }
      },
      request: function (e) {
        if ("x" in e) {
          r = e.x - n.left
        } else {
          if ("deltaX" in e) {
            r += e.deltaX
          }
        }
        if ("y" in e) {
          o = e.y - n.top
        } else {
          if ("deltaY" in e) {
            o += e.deltaY
          }
        }
        return {
          datas: t,
          distX: r,
          distY: o
        }
      },
      requestEnd: function () {
        return {
          datas: t,
          isDrag: true
        }
      }
    }
  },
  unset: function (e) {
    e.state.dragInfo = null
  }
}
function kl(e, t, n, r) {
  if (undefined === r) {
    r = ""
  }
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$renderPoses = e$state.renderPoses
  var /* [auto-meaningful-name] */e$state$rotation = e$state.rotation
  var /* [auto-meaningful-name] */e$state$direction = e$state.direction
  var /* [auto-meaningful-name] */e$props = e.props
  var /* [auto-meaningful-name] */e$props$renderDirections = e$props.renderDirections
  var u = undefined === e$props$renderDirections ? t : e$props$renderDirections
  var /* [auto-meaningful-name] */e$props$zoom = e$props.zoom
  var p = {}
  if (!u) {
    return []
  }
  var f = e$state$direction > 0 ? 1 : -1
  var h = true === u ? as : u
  var m = e$state$rotation / Math.PI * 180
  h.forEach(function (e) {
    p[e] = true
  })
  return h.map(function (e) {
    var t = ss[e]
    if (!t || !p[e]) {
      return null
    }
    var o = (oi(m, 15) + f * cs[e] + 720) % 180
    return n.createElement("div", {
      className: us("control", "direction", e, r),
      "data-rotation": o,
      "data-direction": e,
      key: "direction-" + e,
      style: Rs.apply(undefined, Qa([e$state$rotation, e$props$zoom], t.map(function (e) {
        return e$state$renderPoses[e]
      })))
    })
  })
}
function xl(e, t, n, r, o, i) {
  for (var a = [], s = 6; s < arguments.length; s++) {
    a[s - 6] = arguments[s]
  }
  var c = ti(n, r)
  var l = t ? oi(c / Math.PI * 180, 15) % 180 : -1
  return e.createElement("div", {
    key: "line" + i,
    className: us.apply(undefined, Qa(["line", "direction", t], a)),
    "data-rotation": l,
    "data-line-index": i,
    "data-direction": t,
    style: Ns(n, r, o, c)
  })
}
function Dl(e, t) {
  return kl(e, as, t)
}
function Ml(e, t) {
  return kl(e, ["nw", "ne", "sw", "se"], t)
}
function Ll(e, t, n, r, o, i) {
  var a = e.state.is3d ? 4 : 3
  var s = ws(e.state.rootMatrix, o, a)
  var c = Pi([i.left, i.top], s)
  t.startAbsoluteOrigin = c
  t.prevDeg = ti(c, [n, r]) / Math.PI * 180
  t.prevSnapDeg = t.prevDeg
  t.startDeg = t.prevDeg
  t.loop = 0
}
function Pl(e, t, n, r, o, i) {
  var /* [auto-meaningful-name] */n$prevDeg = n.prevDeg
  var s = Sl(e, t, n.origin, r)
  n.prevDeg = s
  return [s - n$prevDeg, s, i + s]
}
function Bl(e, t, n, r, o, i, a, s) {
  var /* [auto-meaningful-name] */n$prevDeg = n.prevDeg
  var /* [auto-meaningful-name] */n$prevSnapDeg = n.prevSnapDeg
  var /* [auto-meaningful-name] */n$startDeg = n.startDeg
  var /* [auto-meaningful-name] */n$loop = n.loop
  if (n$prevDeg > r && n$prevDeg > 270 && r < 90) {
    ++n.loop
  } else {
    if (n$prevDeg < r && n$prevDeg < 90 && r > 270) {
      --n.loop
    }
  }
  var /* [auto-meaningful-name] */n$loop1 = n.loop
  var f = 360 * n$loop + n$prevSnapDeg - n$startDeg + i
  var h = 360 * n$loop1 + r - n$startDeg + i
  n.prevDeg = h - 360 * n$loop1 + n$startDeg - i
  var m = o * ((h = oi(h, a)) - i)
  if (s) {
    h = (m = Sl(e, t, n.origin, m)) / o + i
  }
  n.prevSnapDeg = h - 360 * n$loop1 + n$startDeg - i
  return [o * (h - f), m, i + m]
}
function Fl(e, t, n, r, o, i, a, s) {
  return Bl(e, t, n, ti(n.startAbsoluteOrigin, [o, i]) / Math.PI * 180, r, a, s, true)
}
function Gl(e, t) {
  if (t.isRequest) {
    return "rotatable" === t.requestAble
  }
  var /* [auto-meaningful-name] */t$inputEvent$target = t.inputEvent.target
  if (ai(t$inputEvent$target, us("rotation-control"))) {
    return true
  }
  var /* [auto-meaningful-name] */e$props$rotationTarget = e.props.rotationTarget
  return !!e$props$rotationTarget && tc(e$props$rotationTarget, true).some(function (e) {
    return !!e && (t$inputEvent$target === e || t$inputEvent$target.contains(e))
  })
}
var Wl = {
  name: "rotatable",
  canPinch: true,
  props: {
    rotatable: Boolean,
    rotationPosition: String,
    throttleRotate: Number,
    renderDirections: Object,
    rotationTarget: Object
  },
  events: {
    onRotateStart: "rotateStart",
    onRotate: "rotate",
    onRotateEnd: "rotateEnd",
    onRotateGroupStart: "rotateGroupStart",
    onRotateGroup: "rotateGroup",
    onRotateGroupEnd: "rotateGroupEnd"
  },
  css: [".rotation {\n            position: absolute;\n            height: 40px;\n            width: 1px;\n            transform-origin: 50% 100%;\n            height: calc(40px * var(--zoom));\n            top: auto;\n            left: 0;\n            bottom: 100%;\n            will-change: transform;\n        }\n        .rotation .rotation-line {\n            display: block;\n            width: 100%;\n            height: 100%;\n            transform-origin: 50% 50%;\n        }\n        .rotation .rotation-control {\n            border-color: #4af;\n            border-color: var(--moveable-color);\n            background:#fff;\n            cursor: alias;\n        }"],
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$rotatable = e$props.rotatable
    var /* [auto-meaningful-name] */e$props$rotationPosition = e$props.rotationPosition
    var /* [auto-meaningful-name] */e$props$zoom = e$props.zoom
    var /* [auto-meaningful-name] */e$props$renderDirections = e$props.renderDirections
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$renderPoses = e$state.renderPoses
    var /* [auto-meaningful-name] */e$state$direction = e$state.direction
    if (!e$props$rotatable) {
      return null
    }
    var u = function (e, t, n) {
      var r = t[0]
      var o = t[1]
      var i = t[2]
      var a = t[3]
      if ("none" !== e) {
        var s = (e || "top").split("-")
        var c = s[0]
        var l = s[1]
        var u = [r, o]
        if ("left" === c) {
          u = [i, r]
        } else {
          if ("right" === c) {
            u = [o, a]
          } else {
            if ("bottom" === c) {
              u = [a, i]
            }
          }
        }
        var d = [(u[0][0] + u[1][0]) / 2, (u[0][1] + u[1][1]) / 2]
        var p = xs(u, n)
        if (l) {
          var f = "top" === l || "left" === l
          var h = "bottom" === c || "left" === c
          d = u[f && !h || !f && h ? 0 : 1]
        }
        return [d, p]
      }
    }(e$props$rotationPosition, e$state$renderPoses, e$state$direction)
    var d = []
    if (u) {
      var p = u[0]
      var f = u[1]
      d.push(t.createElement("div", {
        key: "rotation",
        className: us("rotation"),
        style: {
          transform: "translate(-50%) translate(" + p[0] + "px, " + p[1] + "px) rotate(" + f + "rad)"
        }
      }, t.createElement("div", {
        className: us("line rotation-line"),
        style: {
          transform: "scaleX(" + e$props$zoom + ")"
        }
      }), t.createElement("div", {
        className: us("control rotation-control"),
        style: {
          transform: "translate(0.5px) scale(" + e$props$zoom + ")"
        }
      })))
    }
    if (e$props$renderDirections) {
      d.push.apply(d, kl(e, [], t))
    }
    return d
  },
  dragControlCondition: Gl,
  dragControlStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$clientX = t.clientX
    var /* [auto-meaningful-name] */t$clientY = t.clientY
    var /* [auto-meaningful-name] */t$parentRotate = t.parentRotate
    var /* [auto-meaningful-name] */t$parentFlag = t.parentFlag
    var /* [auto-meaningful-name] */t$isPinch = t.isPinch
    var /* [auto-meaningful-name] */t$isRequest = t.isRequest
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$target = e$state.target
    var /* [auto-meaningful-name] */e$state$left = e$state.left
    var /* [auto-meaningful-name] */e$state$top = e$state.top
    var /* [auto-meaningful-name] */e$state$origin = e$state.origin
    var /* [auto-meaningful-name] */e$state$beforeOrigin = e$state.beforeOrigin
    var /* [auto-meaningful-name] */e$state$direction = e$state.direction
    var /* [auto-meaningful-name] */e$state$beforeDirection = e$state.beforeDirection
    var /* [auto-meaningful-name] */e$state$targetTransform = e$state.targetTransform
    var /* [auto-meaningful-name] */e$state$moveableClientRect = e$state.moveableClientRect
    if (!t$isRequest && !e$state$target) {
      return false
    }
    var b = e.getRect()
    t$datas.rect = b
    t$datas.transform = e$state$targetTransform
    t$datas.left = e$state$left
    t$datas.top = e$state$top
    t$datas.fixedPosition = Ic(e, Ac(e))
    t$datas.absoluteInfo = {
      origin: b.origin,
      startValue: b.rotation
    }
    Ll(e, t$datas.absoluteInfo, t$clientX, t$clientY, e$state$origin, e$state$moveableClientRect)
    if (t$isRequest || t$isPinch || t$parentFlag) {
      var y = t$parentRotate || 0
      t$datas.beforeInfo = {
        origin: b.beforeOrigin,
        prevDeg: y,
        startDeg: y,
        prevSnapDeg: y,
        loop: 0
      }
      t$datas.afterInfo = {
        origin: b.origin,
        prevDeg: y,
        startDeg: y,
        prevSnapDeg: y,
        loop: 0
      }
    } else {
      t$datas.beforeInfo = {
        origin: b.beforeOrigin
      }
      t$datas.afterInfo = {
        origin: b.origin
      }
      Ll(e, t$datas.beforeInfo, t$clientX, t$clientY, e$state$beforeOrigin, e$state$moveableClientRect)
      Ll(e, t$datas.afterInfo, t$clientX, t$clientY, e$state$origin, e$state$moveableClientRect)
    }
    t$datas.direction = e$state$direction
    t$datas.beforeDirection = e$state$beforeDirection
    t$datas.startValue = 0
    t$datas.datas = {}
    Oc(t, "rotate")
    var E = Gs(e, t, Xa(Xa({
      set: function (e) {
        t$datas.startValue = e * Math.PI / 180
      }
    }, Ec(t)), {
      dragStart: Rl.dragStart(e, new ic().dragStart([0, 0], t))
    }))
    var O = Us(e, "onRotateStart", E)
    t$datas.isRotate = false !== O
    e.state.snapRenderInfo = {
      request: t.isRequest
    }
    return !!t$datas.isRotate && E
  },
  dragControl: function (e, t) {
    var n
    var r
    var o
    var i
    var a
    var s
    var c
    var l
    var u
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$clientX = t.clientX
    var /* [auto-meaningful-name] */t$clientY = t.clientY
    var /* [auto-meaningful-name] */t$parentRotate = t.parentRotate
    var /* [auto-meaningful-name] */t$parentFlag = t.parentFlag
    var /* [auto-meaningful-name] */t$isPinch = t.isPinch
    var /* [auto-meaningful-name] */t$groupDelta = t.groupDelta
    var /* [auto-meaningful-name] */t$datas$beforeDirection = t$datas.beforeDirection
    var /* [auto-meaningful-name] */t$datas$beforeInfo = t$datas.beforeInfo
    var /* [auto-meaningful-name] */t$datas$afterInfo = t$datas.afterInfo
    var /* [auto-meaningful-name] */t$datas$absoluteInfo = t$datas.absoluteInfo
    var /* [auto-meaningful-name] */t$datas$isRotate = t$datas.isRotate
    var /* [auto-meaningful-name] */t$datas$startValue = t$datas.startValue
    var /* [auto-meaningful-name] */t$datas$rect = t$datas.rect
    if (t$datas$isRotate) {
      dc(t, "rotate")
      var T
      var S
      var A
      var I
      var j
      var N
      var R
      var k
      var x
      var D = t$datas$beforeDirection * function (e) {
        return As(e.datas.beforeTransform, [50, 50], 100, 100).direction
      }(t)
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$throttleRotate = e$props.throttleRotate
      var P = undefined === e$props$throttleRotate ? 0 : e$props$throttleRotate
      var /* [auto-meaningful-name] */e$props$parentMoveable = e$props.parentMoveable
      var F = 180 / Math.PI * t$datas$startValue
      var /* [auto-meaningful-name] */t$datas$absoluteInfo$startValue = t$datas$absoluteInfo.startValue
      if (!t$parentFlag && "parentDist" in t) {
        var /* [auto-meaningful-name] */t$parentDist = t.parentDist
        T = (n = Pl(e, t$datas$rect, t$datas$afterInfo, t$parentDist, 0, F))[0]
        S = n[1]
        A = n[2]
        I = (r = Pl(e, t$datas$rect, t$datas$beforeInfo, t$parentDist, 0, F))[0]
        j = r[1]
        N = r[2]
        R = (o = Pl(e, t$datas$rect, t$datas$absoluteInfo, t$parentDist, 0, t$datas$absoluteInfo$startValue))[0]
        k = o[1]
        x = o[2]
      } else if (t$isPinch || t$parentFlag) {
        T = (i = Bl(e, t$datas$rect, t$datas$afterInfo, t$parentRotate, D, F, P))[0]
        S = i[1]
        A = i[2]
        I = (a = Bl(e, t$datas$rect, t$datas$beforeInfo, t$parentRotate, t$datas$beforeDirection, F, P))[0]
        j = a[1]
        N = a[2]
        R = (s = Bl(e, t$datas$rect, t$datas$absoluteInfo, t$parentRotate, D, t$datas$absoluteInfo$startValue, P))[0]
        k = s[1]
        x = s[2]
      } else {
        T = (c = Fl(e, t$datas$rect, t$datas$afterInfo, D, t$clientX, t$clientY, F, P))[0]
        S = c[1]
        A = c[2]
        I = (l = Fl(e, t$datas$rect, t$datas$beforeInfo, t$datas$beforeDirection, t$clientX, t$clientY, F, P))[0]
        j = l[1]
        N = l[2]
        R = (u = Fl(e, t$datas$rect, t$datas$absoluteInfo, D, t$clientX, t$clientY, t$datas$absoluteInfo$startValue, P))[0]
        k = u[1]
        x = u[2]
      }
      if (R || T || I || e$props$parentMoveable) {
        var U = pc(t$datas, "rotate(" + A + "deg)", "rotate(" + S + "deg)")
        var H = function (e, t, n, r) {
          return Sc(e, "rotate(" + t + "deg)", Ac(e), n, r)
        }(e, S, t$datas.fixedPosition, t$datas)
        var V = Bi(Pi(t$groupDelta || [0, 0], H), t$datas.prevInverseDist || [0, 0])
        t$datas.prevInverseDist = H
        var z = Gs(e, t, Xa({
          delta: T,
          dist: S,
          rotate: A,
          beforeDist: j,
          beforeDelta: I,
          beforeRotate: N,
          absoluteDist: k,
          absoluteDelta: R,
          absoluteRotate: x,
          isPinch: !!t$isPinch
        }, Tc(e, U, V, t$isPinch, t)))
        Us(e, "onRotate", z)
        return z
      }
    }
  },
  dragControlEnd: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isDrag = t.isDrag
    return !!t$datas.isRotate && (t$datas.isRotate = false, Us(e, "onRotateEnd", Ws(e, t, {})), t$isDrag)
  },
  dragGroupControlCondition: Gl,
  dragGroupControlStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$left = e$state.left
    var /* [auto-meaningful-name] */e$state$top = e$state.top
    var /* [auto-meaningful-name] */e$state$beforeOrigin = e$state.beforeOrigin
    var s = this.dragControlStart(e, t)
    if (!s) {
      return false
    }
    s.set(t$datas.beforeDirection * e.rotation)
    var c = cc(e, this, "dragControlStart", t, function (e, t) {
      var /* [auto-meaningful-name] */e$state1 = e.state
      var /* [auto-meaningful-name] */e$state1$left = e$state1.left
      var /* [auto-meaningful-name] */e$state1$top = e$state1.top
      var /* [auto-meaningful-name] */e$state1$beforeOrigin = e$state1.beforeOrigin
      var l = Pi(Bi([e$state1$left, e$state1$top], [e$state$left, e$state$top]), Bi(e$state1$beforeOrigin, e$state$beforeOrigin))
      t.datas.groupClient = l
      return Xa(Xa({}, t), {
        parentRotate: 0
      })
    })
    var l = Us(e, "onRotateGroupStart", Xa(Xa({}, s), {
      targets: e.props.targets,
      events: c
    }))
    t$datas.isRotate = false !== l
    return !!t$datas.isRotate && s
  },
  dragGroupControl: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    if (t$datas.isRotate) {
      var r = this.dragControl(e, t)
      if (r) {
        var /* [auto-meaningful-name] */t$datas$beforeDirection = t$datas.beforeDirection
        var /* [auto-meaningful-name] */r$beforeDist = r.beforeDist
        var a = r.beforeDelta / 180 * Math.PI
        var s = cc(e, this, "dragControl", t, function (e, t) {
          var /* [auto-meaningful-name] */t$datas$groupClient = t.datas.groupClient
          var r = t$datas$groupClient[0]
          var s = t$datas$groupClient[1]
          var c = zi([r, s], a * t$datas$beforeDirection)
          var l = c[0]
          var u = c[1]
          var d = [l - r, u - s]
          t.datas.groupClient = [l, u]
          return Xa(Xa({}, t), {
            parentRotate: r$beforeDist,
            groupDelta: d
          })
        })
        e.rotation = t$datas$beforeDirection * r.beforeRotate
        var c = Xa({
          targets: e.props.targets,
          events: s,
          set: function (t) {
            e.rotation = t
          }
        }, r)
        Us(e, "onRotateGroup", c)
        return c
      }
    }
  },
  dragGroupControlEnd: function (e, t) {
    var /* [auto-meaningful-name] */t$isDrag = t.isDrag
    if (t.datas.isRotate) {
      this.dragControlEnd(e, t)
      cc(e, this, "dragControlEnd", t)
      Us(e, "onRotateGroupEnd", Ws(e, t, {
        targets: e.props.targets
      }))
      return t$isDrag
    }
  },
  request: function (e) {
    var t = {}
    var n = 0
    var r = e.getRotation()
    return {
      isControl: true,
      requestStart: function () {
        return {
          datas: t
        }
      },
      request: function (e) {
        if ("deltaRotate" in e) {
          n += e.deltaRotate
        } else {
          if ("rotate" in e) {
            n = e.rotate - r
          }
        }
        return {
          datas: t,
          parentDist: n
        }
      },
      requestEnd: function () {
        return {
          datas: t,
          isDrag: true
        }
      }
    }
  }
}
var Ul = {
  name: "resizable",
  ableGroup: "size",
  canPinch: true,
  props: {
    resizable: Boolean,
    throttleResize: Number,
    renderDirections: Array,
    keepRatio: Boolean
  },
  events: {
    onResizeStart: "resizeStart",
    onResize: "resize",
    onResizeEnd: "resizeEnd",
    onResizeGroupStart: "resizeGroupStart",
    onResizeGroup: "resizeGroup",
    onResizeGroupEnd: "resizeGroupEnd"
  },
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$resizable = e$props.resizable
    var /* [auto-meaningful-name] */e$props$edge = e$props.edge
    if (e$props$resizable) {
      return e$props$edge ? Ml(e, t) : Dl(e, t)
    }
  },
  dragControlCondition: Js,
  dragControlStart: function (e, t) {
    var n
    var /* [auto-meaningful-name] */t$inputEvent = t.inputEvent
    var /* [auto-meaningful-name] */t$isPinch = t.isPinch
    var /* [auto-meaningful-name] */t$parentDirection = t.parentDirection
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$parentFlag = t.parentFlag
    var c = t$parentDirection || (t$isPinch ? [0, 0] : Ls(t$inputEvent.target))
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$target = e$state.target
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    if (!c || !e$state$target) {
      return false
    }
    if (!t$isPinch) {
      uc(e, t)
    }
    t$datas.datas = {}
    t$datas.direction = c
    t$datas.startOffsetWidth = e$state$width
    t$datas.startOffsetHeight = e$state$height
    t$datas.prevWidth = 0
    t$datas.prevHeight = 0
    n = function (e) {
      var t = Hs(e)
      return [parseFloat(t.width), parseFloat(t.height)]
    }(e$state$target)
    t$datas.startWidth = n[0]
    t$datas.startHeight = n[1]
    var f = [Math.max(0, e$state$width - t$datas.startWidth), Math.max(0, e$state$height - t$datas.startHeight)]
    t$datas.minSize = f
    t$datas.maxSize = [1 / 0, 1 / 0]
    if (!t$parentFlag) {
      var h = Hs(e$state$target)
      var /* [auto-meaningful-name] */h$position = h.position
      var /* [auto-meaningful-name] */h$minWidth = h.minWidth
      var /* [auto-meaningful-name] */h$minHeight = h.minHeight
      var /* [auto-meaningful-name] */h$maxWidth = h.maxWidth
      var /* [auto-meaningful-name] */h$maxHeight = h.maxHeight
      var y = "static" === h$position || "relative" === h$position
      var E = y ? e$state$target.parentElement : e$state$target.offsetParent
      var O = e$state$width
      var w = e$state$height
      if (E && (O = E.clientWidth, w = E.clientHeight, y)) {
        var C = Hs(E)
        O -= parseFloat(C.paddingLeft) || 0
        w -= parseFloat(C.paddingTop) || 0
      }
      t$datas.minSize = Pi([Zo(h$minWidth, O) || 0, Zo(h$minHeight, w) || 0], f)
      t$datas.maxSize = Pi([Zo(h$maxWidth, O) || 1 / 0, Zo(h$maxHeight, w) || 1 / 0], f)
    }
    var T = e.props.transformOrigin || "% %"
    function S(e) {
      t$datas.ratio = e && isFinite(e) ? e : 0
    }
    function A(t) {
      t$datas.fixedDirection = t
      t$datas.fixedPosition = Nc(e, t)
    }
    t$datas.transformOrigin = T && Fo(T) ? T.split(" ") : T
    t$datas.isWidth = !c[0] && !c[1] || c[0] || !c[1]
    S(e$state$width / e$state$height)
    A([-c[0], -c[1]])
    var I = Gs(e, t, {
      direction: c,
      set: function (e) {
        var t = e[0]
        var n = e[1]
        t$datas.startWidth = t
        t$datas.startHeight = n
      },
      setMin: function (e) {
        t$datas.minSize = e
      },
      setMax: function (e) {
        t$datas.maxSize = [e[0] || 1 / 0, e[1] || 1 / 0]
      },
      setRatio: S,
      setFixedDirection: A,
      setOrigin: function (e) {
        t$datas.transformOrigin = e
      },
      dragStart: Rl.dragStart(e, new ic().dragStart([0, 0], t))
    })
    if (false !== Us(e, "onResizeStart", I)) {
      t$datas.isResize = true
      e.state.snapRenderInfo = {
        request: t.isRequest,
        direction: c
      }
    }
    return !!t$datas.isResize && I
  },
  dragControl: function (e, t) {
    var n
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$distX = t.distX
    var /* [auto-meaningful-name] */t$distY = t.distY
    var /* [auto-meaningful-name] */t$parentFlag = t.parentFlag
    var /* [auto-meaningful-name] */t$isPinch = t.isPinch
    var /* [auto-meaningful-name] */t$parentDistance = t.parentDistance
    var /* [auto-meaningful-name] */t$parentScale = t.parentScale
    var /* [auto-meaningful-name] */t$parentKeepRatio = t.parentKeepRatio
    var /* [auto-meaningful-name] */t$dragClient = t.dragClient
    var /* [auto-meaningful-name] */t$parentDist = t.parentDist
    var /* [auto-meaningful-name] */t$isRequest = t.isRequest
    var /* [auto-meaningful-name] */t$datas$isResize = t$datas.isResize
    var /* [auto-meaningful-name] */t$datas$transformOrigin = t$datas.transformOrigin
    var /* [auto-meaningful-name] */t$datas$fixedDirection = t$datas.fixedDirection
    var /* [auto-meaningful-name] */t$datas$startWidth = t$datas.startWidth
    var /* [auto-meaningful-name] */t$datas$startHeight = t$datas.startHeight
    var /* [auto-meaningful-name] */t$datas$prevWidth = t$datas.prevWidth
    var /* [auto-meaningful-name] */t$datas$prevHeight = t$datas.prevHeight
    var /* [auto-meaningful-name] */t$datas$minSize = t$datas.minSize
    var /* [auto-meaningful-name] */t$datas$maxSize = t$datas.maxSize
    var /* [auto-meaningful-name] */t$datas$ratio = t$datas.ratio
    var /* [auto-meaningful-name] */t$datas$isWidth = t$datas.isWidth
    var /* [auto-meaningful-name] */t$datas$startOffsetWidth = t$datas.startOffsetWidth
    var /* [auto-meaningful-name] */t$datas$startOffsetHeight = t$datas.startOffsetHeight
    if (t$datas$isResize) {
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$throttleResize = e$props.throttleResize
      var j = undefined === e$props$throttleResize ? 0 : e$props$throttleResize
      var /* [auto-meaningful-name] */e$props$parentMoveable = e$props.parentMoveable
      var /* [auto-meaningful-name] */e$props$snapThreshold = e$props.snapThreshold
      var k = undefined === e$props$snapThreshold ? 5 : e$props$snapThreshold
      var /* [auto-meaningful-name] */t$datas$direction = t$datas.direction
      var D = t$datas$direction
      var M = 0
      var L = 0
      if (!(t$datas$direction[0] || t$datas$direction[1])) {
        D = [1, 1]
      }
      var P = t$datas$ratio && (e.props.keepRatio || t$parentKeepRatio)
      var B = t$dragClient
      if (!t$dragClient) {
        B = !t$parentFlag && t$isPinch ? Nc(e, [0, 0]) : t$datas.fixedPosition
      }
      if (t$parentDist) {
        M = t$parentDist[0]
        L = t$parentDist[1]
        if (P) {
          if (M) {
            if (!L) {
              L = M / t$datas$ratio
            }
          } else {
            M = L * t$datas$ratio
          }
        }
      } else if (t$parentScale) {
        M = (t$parentScale[0] - 1) * t$datas$startOffsetWidth
        L = (t$parentScale[1] - 1) * t$datas$startOffsetHeight
      } else if (t$isPinch) {
        if (t$parentDistance) {
          M = t$parentDistance
          L = t$parentDistance * t$datas$startOffsetHeight / t$datas$startOffsetWidth
        }
      } else {
        var F = gc({
          datas: t$datas,
          distX: t$distX,
          distY: t$distY
        })
        M = D[0] * F[0]
        L = D[1] * F[1]
        if (P && t$datas$startOffsetWidth && t$datas$startOffsetHeight) {
          var G = ti([0, 0], F)
          var W = ti([0, 0], D)
          var U = Is([M, L])
          var H = Math.cos(G - W) * U
          if (D[0]) {
            if (D[1]) {
              var V = 2 * D[0] * t$datas$startOffsetWidth
              var z = 2 * D[1] * t$datas$startOffsetHeight
              var Y = Is([V + F[0], z + F[1]]) - Is([V, z])
              var K = ti([0, 0], [t$datas$ratio, 1])
              M = Math.cos(K) * Y
              L = Math.sin(K) * Y
            } else {
              L = (M = H) * t$datas$ratio
            }
          } else {
            M = (L = H) / t$datas$ratio
          }
        } else if (!P) {
          var q = Qa(t$datas$direction)
          if (!t$datas$startOffsetWidth) {
            if (F[0] < 0) {
              q[0] = -1
            } else {
              if (F[0] > 0) {
                q[0] = 1
              }
            }
          }
          if (!t$datas$startOffsetHeight) {
            if (F[1] < 0) {
              q[1] = -1
            } else {
              if (F[1] > 0) {
                q[1] = 1
              }
            }
          }
          t$datas$direction = q
          M = (D = q)[0] * F[0]
          L = D[1] * F[1]
        }
      }
      var X = D[0] || P ? Math.max(t$datas$startOffsetWidth + M, 1e-7) : t$datas$startOffsetWidth
      var Q = D[1] || P ? Math.max(t$datas$startOffsetHeight + L, 1e-7) : t$datas$startOffsetHeight
      if (P && t$datas$startOffsetWidth && t$datas$startOffsetHeight) {
        if (t$datas$isWidth) {
          Q = X / t$datas$ratio
        } else {
          X = Q * t$datas$ratio
        }
      }
      var Z = [0, 0]
      if (!t$isPinch) {
        Z = function (e, t, n, r, o, i, a) {
          if (!Mc(e, "resizable")) {
            return [0, 0]
          }
          var /* [auto-meaningful-name] */e$state = e.state
          var /* [auto-meaningful-name] */e$state$allMatrix = e$state.allMatrix
          var /* [auto-meaningful-name] */e$state$is3d = e$state.is3d
          return Tl(e, function (e, i) {
            return wl(e$state$allMatrix, t + e, n + i, o, r, e$state$is3d)
          }, t, n, r, o, i, a)
        }(e, X, Q, t$datas$direction, B, t$isRequest, t$datas)
      }
      if (t$parentDist) {
        if (!t$parentDist[0]) {
          Z[0] = 0
        }
        if (!t$parentDist[1]) {
          Z[1] = 0
        }
      }
      if (P) {
        if (D[0] && D[1] && Z[0] && Z[1]) {
          if (Math.abs(Z[0]) > Math.abs(Z[1])) {
            Z[1] = 0
          } else {
            Z[0] = 0
          }
        }
        var J = !Z[0] && !Z[1]
        if (J) {
          if (t$datas$isWidth) {
            X = oi(X, j)
          } else {
            Q = oi(Q, j)
          }
        }
        if (D[0] && !D[1] || Z[0] && !Z[1] || J && t$datas$isWidth) {
          Q = (X += Z[0]) / t$datas$ratio
        } else {
          if (!D[0] && D[1] || !Z[0] && Z[1] || J && !t$datas$isWidth) {
            X = (Q += Z[1]) * t$datas$ratio
          }
        }
      } else {
        if (t$datas$startOffsetWidth + M < -k) {
          Z[0] = 0
        }
        if (t$datas$startOffsetWidth + L < -k) {
          Z[1] = 0
        }
        X += Z[0]
        Q += Z[1]
        if (!Z[0]) {
          X = oi(X, j)
        }
        if (!Z[1]) {
          Q = oi(Q, j)
        }
      }
      X = (n = $o([X, Q], t$datas$minSize, t$datas$maxSize, P))[0]
      Q = n[1]
      var $ = [(M = (X = Math.round(X)) - t$datas$startOffsetWidth) - t$datas$prevWidth, (L = (Q = Math.round(Q)) - t$datas$startOffsetHeight) - t$datas$prevHeight]
      t$datas.prevWidth = M
      t$datas.prevHeight = L
      var ee = jc(e, X, Q, t$datas$fixedDirection, B, t$datas$transformOrigin)
      if (e$props$parentMoveable || !$.every(function (e) {
        return !e
      }) || !ee.every(function (e) {
        return !e
      })) {
        var te = Gs(e, t, {
          width: t$datas$startWidth + M,
          height: t$datas$startHeight + L,
          offsetWidth: X,
          offsetHeight: Q,
          direction: t$datas$direction,
          dist: [M, L],
          delta: $,
          isPinch: !!t$isPinch,
          drag: Rl.drag(e, oc(t, e.state, ee, !!t$isPinch, false))
        })
        Us(e, "onResize", te)
        return te
      }
    }
  },
  dragControlAfter: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$datas$isResize = t$datas.isResize
    var /* [auto-meaningful-name] */t$datas$startOffsetWidth = t$datas.startOffsetWidth
    var /* [auto-meaningful-name] */t$datas$startOffsetHeight = t$datas.startOffsetHeight
    var /* [auto-meaningful-name] */t$datas$prevWidth = t$datas.prevWidth
    var /* [auto-meaningful-name] */t$datas$prevHeight = t$datas.prevHeight
    if (t$datas$isResize) {
      var /* [auto-meaningful-name] */e$state = e.state
      var l = e$state.width - (t$datas$startOffsetWidth + t$datas$prevWidth)
      var u = e$state.height - (t$datas$startOffsetHeight + t$datas$prevHeight)
      var d = Math.abs(l) > 3
      var p = Math.abs(u) > 3
      if (d) {
        t$datas.startWidth += l
        t$datas.startOffsetWidth += l
        t$datas.prevWidth += l
      }
      if (p) {
        t$datas.startHeight += u
        t$datas.startOffsetHeight += u
        t$datas.prevHeight += u
      }
      return d || p ? (this.dragControl(e, t), true) : undefined
    }
  },
  dragControlEnd: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isDrag = t.isDrag
    return !!t$datas.isResize && (t$datas.isResize = false, Us(e, "onResizeEnd", Ws(e, t, {})), t$isDrag)
  },
  dragGroupControlCondition: Js,
  dragGroupControlStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var r = this.dragControlStart(e, t)
    if (!r) {
      return false
    }
    var o = ac(e, "resizable", t)
    function i(t, r) {
      var /* [auto-meaningful-name] */t$datas$fixedDirection = t$datas.fixedDirection
      var /* [auto-meaningful-name] */t$datas$fixedPosition = t$datas.fixedPosition
      var a = Nc(t, t$datas$fixedDirection)
      var s = Gi(qi(-e.rotation / 180 * Math.PI, 3), [a[0] - t$datas$fixedPosition[0], a[1] - t$datas$fixedPosition[1], 1], 3)
      var c = s[0]
      var l = s[1]
      r.datas.originalX = c
      r.datas.originalY = l
      return r
    }
    var a = cc(e, this, "dragControlStart", t, function (e, t) {
      return i(e, t)
    })
    var s = Xa(Xa({}, r), {
      targets: e.props.targets,
      events: a,
      setFixedDirection: function (t) {
        r.setFixedDirection(t)
        a.forEach(function (n, r) {
          n.setFixedDirection(t)
          i(e.moveables[r], o[r])
        })
      }
    })
    var c = Us(e, "onResizeGroupStart", s)
    t$datas.isResize = false !== c
    return !!t$datas.isResize && r
  },
  dragGroupControl: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    if (t$datas.isResize) {
      var r = this.dragControl(e, t)
      if (r) {
        var /* [auto-meaningful-name] */r$offsetWidth = r.offsetWidth
        var /* [auto-meaningful-name] */r$offsetHeight = r.offsetHeight
        var /* [auto-meaningful-name] */r$dist = r.dist
        var /* [auto-meaningful-name] */e$props$keepRatio = e.props.keepRatio
        var c = [r$offsetWidth / (r$offsetWidth - r$dist[0]), r$offsetHeight / (r$offsetHeight - r$dist[1])]
        var /* [auto-meaningful-name] */t$datas$fixedPosition = t$datas.fixedPosition
        var u = cc(e, this, "dragControl", t, function (t, n) {
          var r = Gi(qi(e.rotation / 180 * Math.PI, 3), [n.datas.originalX * c[0], n.datas.originalY * c[1], 1], 3)
          var o = r[0]
          var i = r[1]
          return Xa(Xa({}, n), {
            parentDist: null,
            parentScale: c,
            dragClient: Pi(t$datas$fixedPosition, [o, i]),
            parentKeepRatio: e$props$keepRatio
          })
        })
        var d = Xa({
          targets: e.props.targets,
          events: u
        }, r)
        Us(e, "onResizeGroup", d)
        return d
      }
    }
  },
  dragGroupControlEnd: function (e, t) {
    var /* [auto-meaningful-name] */t$isDrag = t.isDrag
    if (t.datas.isResize) {
      this.dragControlEnd(e, t)
      cc(e, this, "dragControlEnd", t)
      Us(e, "onResizeGroupEnd", Ws(e, t, {
        targets: e.props.targets
      }))
      return t$isDrag
    }
  },
  request: function (e) {
    var t = {}
    var n = 0
    var r = 0
    var o = e.getRect()
    return {
      isControl: true,
      requestStart: function (e) {
        return {
          datas: t,
          parentDirection: e.direction || [1, 1]
        }
      },
      request: function (e) {
        if ("offsetWidth" in e) {
          n = e.offsetWidth - o.offsetWidth
        } else {
          if ("deltaWidth" in e) {
            n += e.deltaWidth
          }
        }
        if ("offsetHeight" in e) {
          r = e.offsetHeight - o.offsetHeight
        } else {
          if ("deltaHeight" in e) {
            r += e.deltaHeight
          }
        }
        return {
          datas: t,
          parentDist: [n, r]
        }
      },
      requestEnd: function () {
        return {
          datas: t,
          isDrag: true
        }
      }
    }
  }
}
var Hl = {
  name: "scalable",
  ableGroup: "size",
  canPinch: true,
  props: {
    scalable: Boolean,
    throttleScale: Number,
    renderDirections: String,
    keepRatio: Boolean
  },
  events: {
    onScaleStart: "scaleStart",
    onScale: "scale",
    onScaleEnd: "scaleEnd",
    onScaleGroupStart: "scaleGroupStart",
    onScaleGroup: "scaleGroup",
    onScaleGroupEnd: "scaleGroupEnd"
  },
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$resizable = e$props.resizable
    var /* [auto-meaningful-name] */e$props$scalable = e$props.scalable
    var /* [auto-meaningful-name] */e$props$edge = e$props.edge
    if (!e$props$resizable && e$props$scalable) {
      return e$props$edge ? Ml(e, t) : Dl(e, t)
    }
  },
  dragControlCondition: Js,
  dragControlStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isPinch = t.isPinch
    var /* [auto-meaningful-name] */t$inputEvent = t.inputEvent
    var i = t.parentDirection || (t$isPinch ? [0, 0] : Ls(t$inputEvent.target))
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    var /* [auto-meaningful-name] */e$state$targetTransform = e$state.targetTransform
    var /* [auto-meaningful-name] */e$state$target = e$state.target
    var /* [auto-meaningful-name] */e$state$pos1 = e$state.pos1
    var /* [auto-meaningful-name] */e$state$pos2 = e$state.pos2
    var /* [auto-meaningful-name] */e$state$pos4 = e$state.pos4
    if (!i || !e$state$target) {
      return false
    }
    if (!t$isPinch) {
      uc(e, t)
    }
    t$datas.datas = {}
    t$datas.transform = e$state$targetTransform
    t$datas.prevDist = [1, 1]
    t$datas.direction = i
    t$datas.width = e$state$width
    t$datas.height = e$state$height
    t$datas.startValue = [1, 1]
    var h = ri(e$state$pos1, e$state$pos2)
    var m = ri(e$state$pos2, e$state$pos4)
    var g = !i[0] && !i[1] || i[0] || !i[1]
    function _(e) {
      t$datas.ratio = e && isFinite(e) ? e : 0
    }
    function v(t) {
      t$datas.fixedDirection = t
      t$datas.fixedPosition = Nc(e, t)
    }
    t$datas.scaleWidth = h
    t$datas.scaleHeight = m
    t$datas.scaleXRatio = h / e$state$width
    t$datas.scaleYRatio = m / e$state$height
    Oc(t, "scale")
    t$datas.isWidth = g
    _(ri(e$state$pos1, e$state$pos2) / ri(e$state$pos2, e$state$pos4))
    v([-i[0], -i[1]])
    var b = Gs(e, t, Xa(Xa({
      direction: i,
      set: function (e) {
        t$datas.startValue = e
      },
      setRatio: _,
      setFixedDirection: v
    }, Ec(t)), {
      dragStart: Rl.dragStart(e, new ic().dragStart([0, 0], t))
    }))
    if (false !== Us(e, "onScaleStart", b)) {
      t$datas.isScale = true
      e.state.snapRenderInfo = {
        request: t.isRequest,
        direction: i
      }
    }
    return !!t$datas.isScale && b
  },
  dragControl: function (e, t) {
    dc(t, "scale")
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$distX = t.distX
    var /* [auto-meaningful-name] */t$distY = t.distY
    var /* [auto-meaningful-name] */t$parentScale = t.parentScale
    var /* [auto-meaningful-name] */t$parentDistance = t.parentDistance
    var /* [auto-meaningful-name] */t$parentKeepRatio = t.parentKeepRatio
    var /* [auto-meaningful-name] */t$parentFlag = t.parentFlag
    var /* [auto-meaningful-name] */t$isPinch = t.isPinch
    var /* [auto-meaningful-name] */t$dragClient = t.dragClient
    var /* [auto-meaningful-name] */t$parentDist = t.parentDist
    var /* [auto-meaningful-name] */t$isRequest = t.isRequest
    var /* [auto-meaningful-name] */t$datas$prevDist = t$datas.prevDist
    var /* [auto-meaningful-name] */t$datas$direction = t$datas.direction
    var /* [auto-meaningful-name] */t$datas$width = t$datas.width
    var /* [auto-meaningful-name] */t$datas$height = t$datas.height
    var /* [auto-meaningful-name] */t$datas$isScale = t$datas.isScale
    var /* [auto-meaningful-name] */t$datas$startValue = t$datas.startValue
    var /* [auto-meaningful-name] */t$datas$isWidth = t$datas.isWidth
    var /* [auto-meaningful-name] */t$datas$ratio = t$datas.ratio
    var /* [auto-meaningful-name] */t$datas$fixedDirection = t$datas.fixedDirection
    var /* [auto-meaningful-name] */t$datas$scaleXRatio = t$datas.scaleXRatio
    var /* [auto-meaningful-name] */t$datas$scaleYRatio = t$datas.scaleYRatio
    if (!t$datas$isScale) {
      return false
    }
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$throttleScale = e$props.throttleScale
    var /* [auto-meaningful-name] */e$props$parentMoveable = e$props.parentMoveable
    var A = t$datas$direction
    if (!(t$datas$direction[0] || t$datas$direction[1])) {
      A = [1, 1]
    }
    var I = t$datas$ratio && (e.props.keepRatio || t$parentKeepRatio)
    var /* [auto-meaningful-name] */e$state = e.state
    var N = 1
    var R = 1
    var k = t$dragClient
    if (!t$dragClient) {
      k = !t$parentFlag && t$isPinch ? Nc(e, [0, 0]) : t$datas.fixedPosition
    }
    if (t$parentDist) {
      N = (t$datas$width + t$parentDist[0]) / t$datas$width
      R = (t$datas$height + t$parentDist[1]) / t$datas$height
    } else if (t$parentScale) {
      N = t$parentScale[0]
      R = t$parentScale[1]
    } else if (t$isPinch) {
      if (t$parentDistance) {
        N = (t$datas$width + t$parentDistance) / t$datas$width
        R = (t$datas$height + t$parentDistance * t$datas$height / t$datas$width) / t$datas$height
      }
    } else {
      var x = gc({
        datas: t$datas,
        distX: t$distX,
        distY: t$distY
      })
      var D = A[0] * x[0] * t$datas$scaleXRatio
      var M = A[1] * x[1] * t$datas$scaleYRatio
      if (I && t$datas$width && t$datas$height) {
        if (A[0]) {
          if (A[1]) {
            var L = Is([D, M])
            var P = ti([0, 0], x)
            var B = ti([0, 0], A)
            var F = Math.cos(P - B) * L
            var G = ti([0, 0], [t$datas$ratio, 1])
            D = Math.cos(G) * F
            M = Math.sin(G) * F
          } else {
            M = D / t$datas$ratio
          }
        } else {
          D = M * t$datas$ratio
        }
      }
      N = (t$datas$width + D / t$datas$scaleXRatio) / t$datas$width
      R = (t$datas$height + M / t$datas$scaleYRatio) / t$datas$height
    }
    N = A[0] || I ? N * t$datas$startValue[0] : t$datas$startValue[0]
    R = A[1] || I ? R * t$datas$startValue[1] : t$datas$startValue[1]
    if (0 === N) {
      N = 1e-9 * (t$datas$prevDist[0] > 0 ? 1 : -1)
    }
    if (0 === R) {
      R = 1e-9 * (t$datas$prevDist[1] > 0 ? 1 : -1)
    }
    var W = [N / t$datas$startValue[0], R / t$datas$startValue[1]]
    var U = [N, R]
    if (!t$isPinch && e.props.groupable) {
      var /* [auto-meaningful-name] */E$state$snapRenderInfo$direction = (e$state.snapRenderInfo || {}).direction
      if (Bo(E$state$snapRenderInfo$direction) && (E$state$snapRenderInfo$direction[0] || E$state$snapRenderInfo$direction[1])) {
        e$state.snapRenderInfo = {
          direction: t$datas$direction,
          request: t.isRequest
        }
      }
    }
    var V = [0, 0]
    if (!t$isPinch) {
      V = Al(e, W, t$datas$direction, t$isRequest, t$datas)
    }
    if (I) {
      if (A[0] && A[1] && V[0] && V[1]) {
        if (Math.abs(V[0] * t$datas$width) > Math.abs(V[1] * t$datas$height)) {
          V[1] = 0
        } else {
          V[0] = 0
        }
      }
      var z = !V[0] && !V[1]
      if (z) {
        if (t$datas$isWidth) {
          W[0] = oi(W[0] * t$datas$startValue[0], e$props$throttleScale) / t$datas$startValue[0]
        } else {
          W[1] = oi(W[1] * t$datas$startValue[1], e$props$throttleScale) / t$datas$startValue[1]
        }
      }
      if (A[0] && !A[1] || V[0] && !V[1] || z && t$datas$isWidth) {
        W[0] += V[0]
        var Y = t$datas$width * W[0] * t$datas$startValue[0] / t$datas$ratio
        W[1] = Y / t$datas$height / t$datas$startValue[1]
      } else if (!A[0] && A[1] || !V[0] && V[1] || z && !t$datas$isWidth) {
        W[1] += V[1]
        var K = t$datas$height * W[1] * t$datas$startValue[1] * t$datas$ratio
        W[0] = K / t$datas$width / t$datas$startValue[0]
      }
    } else {
      W[0] += V[0]
      W[1] += V[1]
      if (!V[0]) {
        W[0] = oi(W[0] * t$datas$startValue[0], e$props$throttleScale) / t$datas$startValue[0]
      }
      if (!V[1]) {
        W[1] = oi(W[1] * t$datas$startValue[1], e$props$throttleScale) / t$datas$startValue[1]
      }
    }
    if (0 === W[0]) {
      W[0] = 1e-9 * (t$datas$prevDist[0] > 0 ? 1 : -1)
    }
    if (0 === W[1]) {
      W[1] = 1e-9 * (t$datas$prevDist[1] > 0 ? 1 : -1)
    }
    var q
    var X
    var Q = [W[0] / t$datas$prevDist[0], W[1] / t$datas$prevDist[1]]
    X = t$datas$startValue
    U = [(q = W)[0] * X[0], q[1] * X[1]]
    var Z = function (e, t, n, r, o) {
      return Sc(e, "scale(" + t.join(", ") + ")", n, r, o)
    }(e, W, t$datas$fixedDirection, k, t$datas)
    var J = Bi(Z, t$datas.prevInverseDist || [0, 0])
    t$datas.prevDist = W
    t$datas.prevInverseDist = Z
    if (N === t$datas$prevDist[0] && R === t$datas$prevDist[1] && J.every(function (e) {
      return !e
    }) && !e$props$parentMoveable) {
      return false
    }
    var $ = pc(t$datas, "scale(" + U.join(", ") + ")", "scale(" + W.join(", ") + ")")
    var ee = Gs(e, t, Xa({
      offsetWidth: t$datas$width,
      offsetHeight: t$datas$height,
      direction: t$datas$direction,
      scale: U,
      dist: W,
      delta: Q,
      isPinch: !!t$isPinch
    }, Tc(e, $, J, t$isPinch, t)))
    Us(e, "onScale", ee)
    return ee
  },
  dragControlEnd: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isDrag = t.isDrag
    return !!t$datas.isScale && (t$datas.isScale = false, Us(e, "onScaleEnd", Ws(e, t, {})), t$isDrag)
  },
  dragGroupControlCondition: Js,
  dragGroupControlStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var r = this.dragControlStart(e, t)
    if (!r) {
      return false
    }
    var o = ac(e, "resizable", t)
    function i(t, r) {
      var /* [auto-meaningful-name] */t$datas$fixedDirection = t$datas.fixedDirection
      var /* [auto-meaningful-name] */t$datas$fixedPosition = t$datas.fixedPosition
      var a = Nc(t, t$datas$fixedDirection)
      var s = Gi(qi(-e.rotation / 180 * Math.PI, 3), [a[0] - t$datas$fixedPosition[0], a[1] - t$datas$fixedPosition[1], 1], 3)
      var c = s[0]
      var l = s[1]
      r.datas.originalX = c
      r.datas.originalY = l
      return r
    }
    t$datas.moveableScale = e.scale
    var a = cc(e, this, "dragControlStart", t, function (e, t) {
      return i(e, t)
    })
    var s = Xa(Xa({}, r), {
      targets: e.props.targets,
      events: a,
      setFixedDirection: function (t) {
        r.setFixedDirection(t)
        a.forEach(function (n, r) {
          n.setFixedDirection(t)
          i(e.moveables[r], o[r])
        })
      }
    })
    var c = Us(e, "onScaleGroupStart", s)
    t$datas.isScale = false !== c
    return !!t$datas.isScale && s
  },
  dragGroupControl: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    if (t$datas.isScale) {
      var r = this.dragControl(e, t)
      if (r) {
        var /* [auto-meaningful-name] */t$datas$moveableScale = t$datas.moveableScale
        e.scale = [r.scale[0] * t$datas$moveableScale[0], r.scale[1] * t$datas$moveableScale[1]]
        var /* [auto-meaningful-name] */e$props$keepRatio = e.props.keepRatio
        var /* [auto-meaningful-name] */r$dist = r.dist
        var /* [auto-meaningful-name] */r$scale = r.scale
        var /* [auto-meaningful-name] */t$datas$fixedPosition = t$datas.fixedPosition
        var l = cc(e, this, "dragControl", t, function (t, n) {
          var r = Gi(qi(e.rotation / 180 * Math.PI, 3), [n.datas.originalX * r$dist[0], n.datas.originalY * r$dist[1], 1], 3)
          var o = r[0]
          var l = r[1]
          return Xa(Xa({}, n), {
            parentDist: null,
            parentScale: r$scale,
            parentKeepRatio: e$props$keepRatio,
            dragClient: Pi(t$datas$fixedPosition, [o, l])
          })
        })
        var u = Xa({
          targets: e.props.targets,
          events: l
        }, r)
        Us(e, "onScaleGroup", u)
        return u
      }
    }
  },
  dragGroupControlEnd: function (e, t) {
    var /* [auto-meaningful-name] */t$isDrag = t.isDrag
    if (t.datas.isScale) {
      this.dragControlEnd(e, t)
      cc(e, this, "dragControlEnd", t)
      Us(e, "onScaleGroupEnd", Ws(e, t, {
        targets: e.props.targets
      }))
      return t$isDrag
    }
  },
  request: function () {
    var e = {}
    var t = 0
    var n = 0
    return {
      isControl: true,
      requestStart: function (t) {
        return {
          datas: e,
          parentDirection: t.direction || [1, 1]
        }
      },
      request: function (r) {
        t += r.deltaWidth
        n += r.deltaHeight
        return {
          datas: e,
          parentDist: [t, n]
        }
      },
      requestEnd: function () {
        return {
          datas: e,
          isDrag: true
        }
      }
    }
  }
}
function Vl(e, t) {
  return e.map(function (e, n) {
    r = e
    o = t[n]
    return (r * (a = 2) + o * (i = 1)) / (i + a)
    var r
    var o
    var i
    var a
  })
}
function zl(e, t, n) {
  var r = ti(e, t)
  var o = ti(e, n) - r
  return o >= 0 ? o : o + 2 * Math.PI
}
var Yl = {
  name: "warpable",
  ableGroup: "size",
  props: {
    warpable: Boolean,
    renderDirections: Array
  },
  events: {
    onWarpStart: "warpStart",
    onWarp: "warp",
    onWarpEnd: "warpEnd"
  },
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$resizable = e$props.resizable
    var /* [auto-meaningful-name] */e$props$scalable = e$props.scalable
    var /* [auto-meaningful-name] */e$props$warpable = e$props.warpable
    var /* [auto-meaningful-name] */e$props$zoom = e$props.zoom
    if (e$props$resizable || e$props$scalable || !e$props$warpable) {
      return []
    }
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$pos1 = e$state.pos1
    var /* [auto-meaningful-name] */e$state$pos2 = e$state.pos2
    var /* [auto-meaningful-name] */e$state$pos3 = e$state.pos3
    var /* [auto-meaningful-name] */e$state$pos4 = e$state.pos4
    var p = Vl(e$state$pos1, e$state$pos2)
    var f = Vl(e$state$pos2, e$state$pos1)
    var h = Vl(e$state$pos1, e$state$pos3)
    var m = Vl(e$state$pos3, e$state$pos1)
    var g = Vl(e$state$pos3, e$state$pos4)
    var _ = Vl(e$state$pos4, e$state$pos3)
    var v = Vl(e$state$pos2, e$state$pos4)
    var b = Vl(e$state$pos4, e$state$pos2)
    return Qa([
      t.createElement("div", {
        className: us("line"),
        key: "middeLine1",
        style: Ns(p, g, e$props$zoom)
      }), t.createElement("div", {
        className: us("line"),
        key: "middeLine2",
        style: Ns(f, _, e$props$zoom)
      }), t.createElement("div", {
        className: us("line"),
        key: "middeLine3",
        style: Ns(h, v, e$props$zoom)
      }), t.createElement("div", {
        className: us("line"),
        key: "middeLine4",
        style: Ns(m, b, e$props$zoom)
      })
    ], Dl(e, t))
  },
  dragControlCondition: function (e, t) {
    return !t.isRequest && ai(t.inputEvent.target, us("direction"))
  },
  dragControlStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$inputEvent = t.inputEvent
    var /* [auto-meaningful-name] */e$props$target = e.props.target
    var i = Ls(t$inputEvent.target)
    if (!i || !e$props$target) {
      return false
    }
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$transformOrigin = e$state.transformOrigin
    var /* [auto-meaningful-name] */e$state$is3d = e$state.is3d
    var /* [auto-meaningful-name] */e$state$targetTransform = e$state.targetTransform
    var /* [auto-meaningful-name] */e$state$targetMatrix = e$state.targetMatrix
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    var /* [auto-meaningful-name] */e$state$left = e$state.left
    var /* [auto-meaningful-name] */e$state$top = e$state.top
    t$datas.datas = {}
    t$datas.targetTransform = e$state$targetTransform
    t$datas.warpTargetMatrix = e$state$is3d ? e$state$targetMatrix : Di(e$state$targetMatrix, 3, 4)
    t$datas.targetInverseMatrix = Ri(ki(t$datas.warpTargetMatrix, 4), 3, 4)
    t$datas.direction = i
    t$datas.left = e$state$left
    t$datas.top = e$state$top
    t$datas.poses = [[0, 0], [e$state$width, 0], [0, e$state$height], [e$state$width, e$state$height]].map(function (e) {
      return Bi(e, e$state$transformOrigin)
    })
    t$datas.nextPoses = t$datas.poses.map(function (e) {
      var t = e[0]
      var r = e[1]
      return Gi(t$datas.warpTargetMatrix, [t, r, 0, 1], 4)
    })
    t$datas.startValue = Xi(4)
    t$datas.prevMatrix = Xi(4)
    t$datas.absolutePoses = Bs(e$state)
    t$datas.posIndexes = _c(i)
    uc(e, t)
    Oc(t, "matrix3d")
    e$state.snapRenderInfo = {
      request: t.isRequest,
      direction: i
    }
    if (false !== Us(e, "onWarpStart", Gs(e, t, Xa({
      set: function (e) {
        t$datas.startValue = e
      }
    }, Ec(t))))) {
      t$datas.isWarp = true
    }
    return t$datas.isWarp
  },
  dragControl: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isRequest = t.isRequest
    var /* [auto-meaningful-name] */t$distX = t.distX
    var /* [auto-meaningful-name] */t$distY = t.distY
    var /* [auto-meaningful-name] */t$datas$targetInverseMatrix = t$datas.targetInverseMatrix
    var /* [auto-meaningful-name] */t$datas$prevMatrix = t$datas.prevMatrix
    var /* [auto-meaningful-name] */t$datas$isWarp = t$datas.isWarp
    var /* [auto-meaningful-name] */t$datas$startValue = t$datas.startValue
    var /* [auto-meaningful-name] */t$datas$poses = t$datas.poses
    var /* [auto-meaningful-name] */t$datas$posIndexes = t$datas.posIndexes
    var /* [auto-meaningful-name] */t$datas$absolutePoses = t$datas.absolutePoses
    if (!t$datas$isWarp) {
      return false
    }
    dc(t, "matrix3d")
    if (Mc(e, "warpable")) {
      var f = t$datas$posIndexes.map(function (e) {
        return t$datas$absolutePoses[e]
      })
      if (f.length > 1) {
        f.push([(f[0][0] + f[1][0]) / 2, (f[0][1] + f[1][1]) / 2])
      }
      var h = vl(e, t$isRequest, {
        horizontal: f.map(function (e) {
          return e[1] + t$distY
        }),
        vertical: f.map(function (e) {
          return e[0] + t$distX
        })
      })
      var /* [auto-meaningful-name] */h$horizontal = h.horizontal
      var /* [auto-meaningful-name] */h$vertical = h.vertical
      t$distY -= h$horizontal.offset
      t$distX -= h$vertical.offset
    }
    var _ = gc({
      datas: t$datas,
      distX: t$distX,
      distY: t$distY
    }, true)
    var v = t$datas.nextPoses.slice()
    t$datas$posIndexes.forEach(function (e) {
      v[e] = Pi(v[e], _)
    })
    if (!rs.every(function (e) {
      return function (e, t) {
        var n = zl(e[0], e[1], e[2])
        var r = zl(t[0], t[1], t[2])
        var /* [auto-meaningful-name] */Math$PI = Math.PI
        return !(n >= Math$PI && r <= Math$PI || n <= Math$PI && r >= Math$PI)
      }(e.map(function (e) {
        return t$datas$poses[e]
      }), e.map(function (e) {
        return v[e]
      }))
    })) {
      return false
    }
    var b = Ji(t$datas$poses[0], t$datas$poses[2], t$datas$poses[1], t$datas$poses[3], v[0], v[2], v[1], v[3])
    if (!b.length) {
      return false
    }
    var y = hc(t$datas, Li(t$datas$targetInverseMatrix, b, 4), true)
    var E = Li(ki(t$datas$prevMatrix, 4), y, 4)
    t$datas.prevMatrix = y
    var O = Li(t$datas$startValue, y, 4)
    var w = pc(t$datas, "matrix3d(" + O.join(", ") + ")", "matrix3d(" + y.join(", ") + ")")
    Cc(t, w)
    Us(e, "onWarp", Gs(e, t, {
      delta: E,
      matrix: O,
      dist: y,
      multiply: Li,
      transform: w
    }))
    return true
  },
  dragControlEnd: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isDrag = t.isDrag
    return !!t$datas.isWarp && (t$datas.isWarp = false, Us(e, "onWarpEnd", Ws(e, t, {})), t$isDrag)
  }
}
var Kl = us("area-pieces")
var ql = us("area-piece")
var Xl = us("avoid")
function Ql(e) {
  var /* [auto-meaningful-name] */e$areaElement = e.areaElement
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$width = e$state.width
  var /* [auto-meaningful-name] */e$state$height = e$state.height
  !function (e, t) {
    if (e.classList) {
      e.classList.remove(t)
    } else {
      var n = new RegExp("(\\s|^)" + t + "(\\s|$)")
      e.className = e.className.replace(n, " ")
    }
  }(e$areaElement, Xl)
  e$areaElement.style.cssText += "left: 0px; top: 0px; width: " + e$state$width + "px; height: " + e$state$height + "px"
}
function Zl(e) {
  return e.createElement("div", {
    key: "area_pieces",
    className: Kl
  }, e.createElement("div", {
    className: ql
  }), e.createElement("div", {
    className: ql
  }), e.createElement("div", {
    className: ql
  }), e.createElement("div", {
    className: ql
  }))
}
var Jl = {
  name: "dragArea",
  props: {
    dragArea: Boolean,
    passDragArea: Boolean
  },
  events: {
    onClick: "click",
    onClickGroup: "clickGroup"
  },
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$target = e$props.target
    var /* [auto-meaningful-name] */e$props$dragArea = e$props.dragArea
    var /* [auto-meaningful-name] */e$props$groupable = e$props.groupable
    var /* [auto-meaningful-name] */e$props$passDragArea = e$props.passDragArea
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    var /* [auto-meaningful-name] */e$state$renderPoses = e$state.renderPoses
    var d = e$props$passDragArea ? us("area", "pass") : us("area")
    if (e$props$groupable) {
      return [
        t.createElement("div", {
          key: "area",
          ref: ko(e, "areaElement"),
          className: d
        }), Zl(t)
      ]
    }
    if (!e$props$target || !e$props$dragArea) {
      return []
    }
    var p = Ji([0, 0], [e$state$width, 0], [0, e$state$height], [e$state$width, e$state$height], e$state$renderPoses[0], e$state$renderPoses[1], e$state$renderPoses[2], e$state$renderPoses[3])
    var f = p.length ? ys(p, true) : "none"
    return [
      t.createElement("div", {
        key: "area",
        ref: ko(e, "areaElement"),
        className: d,
        style: {
          top: "0px",
          left: "0px",
          width: e$state$width + "px",
          height: e$state$height + "px",
          transformOrigin: "0 0",
          transform: f
        }
      }), Zl(t)
    ]
  },
  dragStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$clientX = t.clientX
    var /* [auto-meaningful-name] */t$clientY = t.clientY
    if (!t.inputEvent) {
      return false
    }
    t$datas.isDragArea = false
    var i
    var a
    var /* [auto-meaningful-name] */e$areaElement = e.areaElement
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$moveableClientRect = e$state.moveableClientRect
    var /* [auto-meaningful-name] */e$state$renderPoses = e$state.renderPoses
    var /* [auto-meaningful-name] */e$state$rootMatrix = e$state.rootMatrix
    var /* [auto-meaningful-name] */e$state$is3d = e$state.is3d
    var /* [auto-meaningful-name] */e$state$moveableClientRect$left = e$state$moveableClientRect.left
    var /* [auto-meaningful-name] */e$state$moveableClientRect$top = e$state$moveableClientRect.top
    var m = Ts(e$state$renderPoses)
    var /* [auto-meaningful-name] */m$left = m.left
    var /* [auto-meaningful-name] */m$top = m.top
    var /* [auto-meaningful-name] */m$width = m.width
    var /* [auto-meaningful-name] */m$height = m.height
    var y = Ks(e$state$rootMatrix, [t$clientX - e$state$moveableClientRect$left, t$clientY - e$state$moveableClientRect$top], e$state$is3d ? 4 : 3)
    var E = y[0]
    var O = y[1]
    var w = [
      {
        left: m$left,
        top: m$top,
        width: m$width,
        height: (O -= m$top) - 10
      }, {
        left: m$left,
        top: m$top,
        width: (E -= m$left) - 10,
        height: m$height
      }, {
        left: m$left,
        top: m$top + O + 10,
        width: m$width,
        height: m$height - O - 10
      }, {
        left: m$left + E + 10,
        top: m$top,
        width: m$width - E - 10,
        height: m$height
      }
    ]
    var C = [].slice.call(e$areaElement.nextElementSibling.children)
    w.forEach(function (e, t) {
      C[t].style.cssText = "left: " + e.left + "px;top: " + e.top + "px; width: " + e.width + "px; height: " + e.height + "px;"
    })
    a = Xl
    if ((i = e$areaElement).classList) {
      i.classList.add(a)
    } else {
      i.className += " " + a
    }
    e$state.disableNativeEvent = true
  },
  drag: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$inputEvent = t.inputEvent
    this.enableNativeEvent(e)
    if (!t$inputEvent) {
      return false
    }
    if (!t$datas.isDragArea) {
      t$datas.isDragArea = true
      Ql(e)
    }
  },
  dragEnd: function (e, t) {
    this.enableNativeEvent(e)
    var /* [auto-meaningful-name] */t$inputEvent = t.inputEvent
    var /* [auto-meaningful-name] */t$datas = t.datas
    if (!t$inputEvent) {
      return false
    }
    if (!t$datas.isDragArea) {
      Ql(e)
    }
  },
  dragGroupStart: function (e, t) {
    return this.dragStart(e, t)
  },
  dragGroup: function (e, t) {
    return this.drag(e, t)
  },
  dragGroupEnd: function (e, t) {
    return this.dragEnd(e, t)
  },
  unset: function (e) {
    Ql(e)
    e.state.disableNativeEvent = false
  },
  enableNativeEvent: function (e) {
    var /* [auto-meaningful-name] */e$state = e.state
    if (e$state.disableNativeEvent) {
      requestAnimationFrame(function () {
        e$state.disableNativeEvent = false
      })
    }
  }
}
var $l = Za("origin", {
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$props$zoom = e.props.zoom
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$beforeOrigin = e$state.beforeOrigin
    var /* [auto-meaningful-name] */e$state$rotation = e$state.rotation
    return [
      t.createElement("div", {
        className: us("control", "origin"),
        style: Rs(e$state$rotation, e$props$zoom, e$state$beforeOrigin),
        key: "beforeOrigin"
      })
    ]
  }
})
function eu(e) {
  var /* [auto-meaningful-name] */e$scrollContainer = e.scrollContainer
  return [e$scrollContainer.scrollLeft, e$scrollContainer.scrollTop]
}
var tu = {
  name: "scrollable",
  canPinch: true,
  props: {
    scrollable: Boolean,
    scrollContainer: Object,
    scrollThreshold: Number,
    getScrollPosition: Function
  },
  events: {
    onScroll: "scroll",
    onScrollGroup: "scrollGroup"
  },
  dragStart: function (e, t) {
    var /* [auto-meaningful-name] */e$props$scrollContainer = e.props.scrollContainer
    var r = undefined === e$props$scrollContainer ? e.getContainer() : e$props$scrollContainer
    var o = new Aa()
    var i = ec(r, true)
    t.datas.dragScroll = o
    var a = t.isControl ? "controlGesto" : "targetGesto"
    var /* [auto-meaningful-name] */t$targets = t.targets
    o.on("scroll", function (n) {
      var /* [auto-meaningful-name] */n$container = n.container
      var /* [auto-meaningful-name] */n$direction = n.direction
      var i = Gs(e, t, {
        scrollContainer: n$container,
        direction: n$direction
      })
      var a = t$targets ? "onScrollGroup" : "onScroll"
      if (t$targets) {
        i.targets = t$targets
      }
      Us(e, a, i)
    }).on("move", function (n) {
      var /* [auto-meaningful-name] */n$offsetX = n.offsetX
      var /* [auto-meaningful-name] */n$offsetY = n.offsetY
      e[a].scrollBy(n$offsetX, n$offsetY, t.inputEvent, false)
    })
    o.dragStart(t, {
      container: i
    })
  },
  checkScroll: function (e, t) {
    var /* [auto-meaningful-name] */t$datas$dragScroll = t.datas.dragScroll
    if (t$datas$dragScroll) {
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$scrollContainer = e$props.scrollContainer
      var i = undefined === e$props$scrollContainer ? e.getContainer() : e$props$scrollContainer
      var /* [auto-meaningful-name] */e$props$scrollThreshold = e$props.scrollThreshold
      var s = undefined === e$props$scrollThreshold ? 0 : e$props$scrollThreshold
      var /* [auto-meaningful-name] */e$props$getScrollPosition = e$props.getScrollPosition
      var l = undefined === e$props$getScrollPosition ? eu : e$props$getScrollPosition
      t$datas$dragScroll.drag(t, {
        container: i,
        threshold: s,
        getScrollPosition: function (e) {
          return l({
            scrollContainer: e.container,
            direction: e.direction
          })
        }
      })
      return true
    }
  },
  drag: function (e, t) {
    return this.checkScroll(e, t)
  },
  dragEnd: function (e, t) {
    t.datas.dragScroll.dragEnd()
    t.datas.dragScroll = null
  },
  dragControlStart: function (e, t) {
    return this.dragStart(e, Xa(Xa({}, t), {
      isControl: true
    }))
  },
  dragControl: function (e, t) {
    return this.drag(e, t)
  },
  dragControlEnd: function (e, t) {
    return this.dragEnd(e, t)
  },
  dragGroupStart: function (e, t) {
    return this.dragStart(e, Xa(Xa({}, t), {
      targets: e.props.targets
    }))
  },
  dragGroup: function (e, t) {
    return this.drag(e, Xa(Xa({}, t), {
      targets: e.props.targets
    }))
  },
  dragGroupEnd: function (e, t) {
    return this.dragEnd(e, Xa(Xa({}, t), {
      targets: e.props.targets
    }))
  },
  dragGroupControlStart: function (e, t) {
    return this.dragStart(e, Xa(Xa({}, t), {
      targets: e.props.targets,
      isControl: true
    }))
  },
  dragGroupContro: function (e, t) {
    return this.drag(e, Xa(Xa({}, t), {
      targets: e.props.targets
    }))
  },
  dragGroupControEnd: function (e, t) {
    return this.dragEnd(e, Xa(Xa({}, t), {
      targets: e.props.targets
    }))
  }
}
var nu = {
  name: "",
  props: {
    target: Object,
    dragTarget: Object,
    container: Object,
    portalContainer: Object,
    rootContainer: Object,
    zoom: Number,
    transformOrigin: Array,
    edge: Boolean,
    ables: Array,
    className: String,
    pinchThreshold: Number,
    pinchOutside: Boolean,
    triggerAblesSimultaneously: Boolean,
    checkInput: Boolean,
    cspNonce: String,
    translateZ: Number,
    hideDefaultLines: Boolean,
    props: Object
  },
  events: {}
}
var ru = Za("padding", {
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$props = e.props
    if (e$props.dragArea) {
      return []
    }
    var r = e$props.padding || {}
    var /* [auto-meaningful-name] */r$left = r.left
    var i = undefined === r$left ? 0 : r$left
    var /* [auto-meaningful-name] */r$top = r.top
    var s = undefined === r$top ? 0 : r$top
    var /* [auto-meaningful-name] */r$right = r.right
    var l = undefined === r$right ? 0 : r$right
    var /* [auto-meaningful-name] */r$bottom = r.bottom
    var d = undefined === r$bottom ? 0 : r$bottom
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$renderPoses = e$state.renderPoses
    var h = [e$state.pos1, e$state.pos2, e$state.pos3, e$state.pos4]
    var m = []
    if (i > 0) {
      m.push([0, 2])
    }
    if (s > 0) {
      m.push([0, 1])
    }
    if (l > 0) {
      m.push([1, 3])
    }
    if (d > 0) {
      m.push([2, 3])
    }
    return m.map(function (e, n) {
      var r = e[0]
      var o = e[1]
      var i = Ji([0, 0], [100, 0], [0, 100], [100, 100], h[r], h[o], e$state$renderPoses[r], e$state$renderPoses[o])
      if (i.length) {
        return t.createElement("div", {
          key: "padding" + n,
          className: us("padding"),
          style: {
            transform: ys(i, true)
          }
        })
      }
    })
  }
})
var ou = ["nw", "ne", "se", "sw"]
function iu(e, t) {
  var n = e[0] + e[1]
  var r = n > t ? t / n : 1
  e[0] *= r
  e[1] = t - e[1] * r
  return e
}
var au = [1, 2, 5, 6]
var su = [0, 3, 4, 7]
var cu = [1, -1, -1, 1]
var lu = [1, 1, -1, -1]
function uu(e, t, n, r, o, i, a, s, c) {
  if (undefined === i) {
    i = 0
  }
  if (undefined === a) {
    a = 0
  }
  if (undefined === s) {
    s = r
  }
  if (undefined === c) {
    c = o
  }
  var l = []
  var u = false
  var d = e.map(function (e, d) {
    var p = t[d]
    var /* [auto-meaningful-name] */p$horizontal = p.horizontal
    var /* [auto-meaningful-name] */p$vertical = p.vertical
    if (p$vertical && !u) {
      u = true
      l.push("/")
    }
    if (u) {
      var m = Math.max(0, 1 === p$vertical ? e[1] - a : c - e[1])
      l.push(Qs(m, o, n))
      return m
    }
    m = Math.max(0, 1 === p$horizontal ? e[0] - i : s - e[0])
    l.push(Qs(m, r, n))
    return m
  })
  return {
    styles: l,
    raws: d
  }
}
function du(e) {
  for (var t = [0, 0], n = [0, 0], /* [auto-meaningful-name] */e$length = e.length, o = 0; o < e$length; ++o) {
    var i = e[o]
    if (i.sub) {
      if (i.horizontal) {
        if (0 === t[1]) {
          t[0] = o
        }
        t[1] = o - t[0] + 1
        n[0] = o + 1
      }
      if (i.vertical) {
        if (0 === n[1]) {
          n[0] = o
        }
        n[1] = o - n[0] + 1
      }
    }
  }
  return {
    horizontalRange: t,
    verticalRange: n
  }
}
function pu(e, t, n, r, o, i) {
  var a
  var s
  var c
  var l
  if (undefined === i) {
    i = [0, 0]
  }
  var u = e.indexOf("/")
  var /* [auto-meaningful-name] */U1E$slice0UE$length = (u > -1 ? e.slice(0, u) : e).length
  var p = e.slice(0, U1E$slice0UE$length)
  var f = e.slice(U1E$slice0UE$length + 1)
  var h = p[0]
  var m = undefined === h ? "0px" : h
  var g = p[1]
  var _ = undefined === g ? m : g
  var v = p[2]
  var b = undefined === v ? m : v
  var y = p[3]
  var E = undefined === y ? _ : y
  var O = f[0]
  var w = undefined === O ? m : O
  var C = f[1]
  var T = undefined === C ? w : C
  var S = f[2]
  var A = undefined === S ? w : S
  var I = f[3]
  var j = undefined === I ? T : I
  var N = [m, _, b, E].map(function (e) {
    return Zo(e, t)
  })
  var R = [w, T, A, j].map(function (e) {
    return Zo(e, n)
  })
  var k = N.slice()
  var x = R.slice()
  a = iu([k[0], k[1]], t)
  k[0] = a[0]
  k[1] = a[1]
  s = iu([k[3], k[2]], t)
  k[3] = s[0]
  k[2] = s[1]
  c = iu([x[0], x[3]], n)
  x[0] = c[0]
  x[3] = c[1]
  l = iu([x[1], x[2]], n)
  x[1] = l[0]
  x[2] = l[1]
  var D = k.slice(0, Math.max(i[0], p.length))
  var M = x.slice(0, Math.max(i[1], f.length))
  return Qa(D.map(function (e, t) {
    var i = ou[t]
    return {
      horizontal: cu[t],
      vertical: 0,
      pos: [r + e, o + (-1 === lu[t] ? n : 0)],
      sub: true,
      raw: N[t],
      direction: i
    }
  }), M.map(function (e, n) {
    var i = ou[n]
    return {
      horizontal: 0,
      vertical: lu[n],
      pos: [r + (-1 === cu[n] ? t : 0), o + e],
      sub: true,
      raw: R[n],
      direction: i
    }
  }))
}
function fu(e, t, n, r, o) {
  if (undefined === o) {
    o = t.length
  }
  var i = du(e.slice(r))
  var /* [auto-meaningful-name] */i$horizontalRange = i.horizontalRange
  var /* [auto-meaningful-name] */i$verticalRange = i.verticalRange
  var c = n - r
  var l = 0
  if (0 === c) {
    l = o
  } else if (c > 0 && c < i$horizontalRange[1]) {
    l = i$horizontalRange[1] - c
  } else {
    if (!(c >= i$verticalRange[0])) {
      return
    }
    l = i$verticalRange[0] + i$verticalRange[1] - c
  }
  e.splice(n, l)
  t.splice(n, l)
}
function hu(e, t, n, r, o, i, a, s, c, l, u) {
  if (undefined === l) {
    l = 0
  }
  if (undefined === u) {
    u = 0
  }
  var d = du(e.slice(n))
  var /* [auto-meaningful-name] */d$horizontalRange = d.horizontalRange
  var /* [auto-meaningful-name] */d$verticalRange = d.verticalRange
  if (r > -1) {
    for (var h = 1 === cu[r] ? i - l : s - i, m = d$horizontalRange[1]; m <= r; ++m) {
      var g = 1 === lu[m] ? u : c
      var _ = 0
      if (r === m) {
        _ = i
      } else {
        if (0 === m) {
          _ = l + h
        } else {
          if (-1 === cu[m]) {
            _ = s - (t[n][0] - l)
          }
        }
      }
      e.splice(n + m, 0, {
        horizontal: cu[m],
        vertical: 0,
        pos: [_, g]
      })
      t.splice(n + m, 0, [_, g])
      if (0 === m) {
        break
      }
    }
  } else if (o > -1) {
    var v = 1 === lu[o] ? a - u : c - a
    if (0 === d$horizontalRange[1] && 0 === d$verticalRange[1]) {
      var b = [l + v, u]
      e.push({
        horizontal: cu[0],
        vertical: 0,
        pos: b
      })
      t.push(b)
    }
    var y = d$verticalRange[0]
    for (m = d$verticalRange[1]; m <= o; ++m) {
      _ = 1 === cu[m] ? l : s
      g = 0
      if (o === m) {
        g = a
      } else {
        if (0 === m) {
          g = u + v
        } else {
          if (1 === lu[m]) {
            g = t[n + y][1]
          } else {
            if (-1 === lu[m]) {
              g = c - (t[n + y][1] - u)
            }
          }
        }
      }
      e.push({
        horizontal: 0,
        vertical: lu[m],
        pos: [_, g]
      })
      t.push([_, g])
      if (0 === m) {
        break
      }
    }
  }
}
function mu(e, t) {
  if (undefined === t) {
    t = e.map(function (e) {
      return e.raw
    })
  }
  return {
    horizontals: e.map(function (e, n) {
      return e.horizontal ? t[n] : null
    }).filter(function (e) {
      return null != e
    }),
    verticals: e.map(function (e, n) {
      return e.vertical ? t[n] : null
    }).filter(function (e) {
      return null != e
    })
  }
}
var gu = [[0, -1, "n"], [1, 0, "e"]]
var _u = [[-1, -1, "nw"], [0, -1, "n"], [1, -1, "ne"], [1, 0, "e"], [1, 1, "se"], [0, 1, "s"], [-1, 1, "sw"], [-1, 0, "w"]]
function vu(e, t, n) {
  var /* [auto-meaningful-name] */e$props$clipRelative = e.props.clipRelative
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$width = e$state.width
  var /* [auto-meaningful-name] */e$state$height = e$state.height
  var s = t
  var /* [auto-meaningful-name] */s$type = s.type
  var /* [auto-meaningful-name] */s$poses = s.poses
  var u = "rect" === s$type
  var d = "circle" === s$type
  if ("polygon" === s$type) {
    return n.map(function (e) {
      return Qs(e[0], e$state$width, e$props$clipRelative) + " " + Qs(e[1], e$state$height, e$props$clipRelative)
    })
  }
  if (u || "inset" === s$type) {
    var p = n[1][1]
    var f = n[3][0]
    var h = n[7][0]
    var m = n[5][1]
    if (u) {
      return [p, f, m, h].map(function (e) {
        return e + "px"
      })
    }
    var g = [p, e$state$width - f, e$state$height - m, h].map(function (e, t) {
      return Qs(e, t % 2 ? e$state$width : e$state$height, e$props$clipRelative)
    })
    if (n.length > 8) {
      var _ = Bi(n[4], n[0])
      var v = _[0]
      var b = _[1]
      g.push.apply(g, Qa(["round"], uu(n.slice(8), s$poses.slice(8), e$props$clipRelative, v, b, h, p, f, m).styles))
    }
    return g
  }
  if (d || "ellipse" === s$type) {
    var y = n[0]
    var E = Qs(Math.abs(n[1][1] - y[1]), d ? Math.sqrt((e$state$width * e$state$width + e$state$height * e$state$height) / 2) : e$state$height, e$props$clipRelative);
    (g = d ? [E] : [Qs(Math.abs(n[2][0] - y[0]), e$state$width, e$props$clipRelative), E]).push("at", Qs(y[0], e$state$width, e$props$clipRelative), Qs(y[1], e$state$height, e$props$clipRelative))
    return g
  }
}
function bu(e, t, n, r) {
  var o = [r, (r + t) / 2, t]
  var i = [e, (e + n) / 2, n]
  return _u.map(function (e) {
    var t = e[0]
    var n = e[1]
    var r = e[2]
    var a = o[t + 1]
    var s = i[n + 1]
    return {
      vertical: Math.abs(n),
      horizontal: Math.abs(t),
      direction: r,
      pos: [a, s]
    }
  })
}
function yu(e, t, n, r, o) {
  var i
  var a
  var s
  var c
  var l
  var u
  var d
  var p = o
  if (!p) {
    var f = Hs(e)
    var /* [auto-meaningful-name] */f$clipPath = f.clipPath
    p = "none" !== f$clipPath ? f$clipPath : f.clip
  }
  if (p && "none" !== p && "auto" !== p || (p = r)) {
    var m = Yo(p)
    var /* [auto-meaningful-name] */m$prefix = m.prefix
    var _ = undefined === m$prefix ? p : m$prefix
    var /* [auto-meaningful-name] */m$value = m.value
    var b = undefined === m$value ? "" : m$value
    var y = "circle" === _
    var E = " "
    if ("polygon" === _) {
      E = ","
      return {
        type: _,
        clipText: p,
        poses: R = (S = zo(b || "0% 0%, 100% 0%, 100% 100%, 0% 100%")).map(function (e) {
          var r = e.split(" ")
          var o = r[0]
          var i = r[1]
          return {
            vertical: 1,
            horizontal: 1,
            pos: [Zo(o, t), Zo(i, n)]
          }
        }),
        splitter: E
      }
    }
    if (y || "ellipse" === _) {
      var O = ""
      var w = ""
      var C = 0
      var T = 0
      var S = Vo(b)
      if (y) {
        var A
        A = undefined === (i = S[0]) ? "50%" : i
        O = undefined === (a = S[2]) ? "50%" : a
        w = undefined === (s = S[3]) ? "50%" : s
        C = Zo(A, Math.sqrt((t * t + n * n) / 2))
        T = C
      } else {
        var I
        var j
        I = undefined === (c = S[0]) ? "50%" : c
        j = undefined === (l = S[1]) ? "50%" : l
        O = undefined === (u = S[3]) ? "50%" : u
        w = undefined === (d = S[4]) ? "50%" : d
        C = Zo(I, t)
        T = Zo(j, n)
      }
      var N = [Zo(O, t), Zo(w, n)]
      var R = Qa([
        {
          vertical: 1,
          horizontal: 1,
          pos: N,
          direction: "nesw"
        }
      ], gu.slice(0, y ? 1 : 2).map(function (e) {
        return {
          vertical: Math.abs(e[1]),
          horizontal: e[0],
          direction: e[2],
          sub: true,
          pos: [N[0] + e[0] * C, N[1] + e[1] * T]
        }
      }))
      return {
        type: _,
        clipText: p,
        radiusX: C,
        radiusY: T,
        left: N[0] - C,
        top: N[1] - T,
        poses: R,
        splitter: E
      }
    }
    if ("inset" === _) {
      var k = (S = Vo(b || "0 0 0 0")).indexOf("round")
      var /* [auto-meaningful-name] */K1S$slice0KS$length = (k > -1 ? S.slice(0, k) : S).length
      var D = S.slice(K1S$slice0KS$length + 1)
      var M = S.slice(0, K1S$slice0KS$length)
      var L = M[0]
      var P = M[1]
      var B = undefined === P ? L : P
      var F = M[2]
      var G = undefined === F ? L : F
      var W = M[3]
      var U = undefined === W ? B : W
      var H = [L, G].map(function (e) {
        return Zo(e, n)
      })
      var V = H[0]
      var z = H[1]
      var Y = [U, B].map(function (e) {
        return Zo(e, t)
      })
      var K = Y[0]
      var q = Y[1]
      var X = t - q
      var Q = n - z
      var Z = pu(D, X - K, Q - V, K, V)
      return {
        type: "inset",
        clipText: p,
        poses: R = Qa(bu(V, X, Q, K), Z),
        top: V,
        left: K,
        right: X,
        bottom: Q,
        radius: D,
        splitter: E
      }
    }
    if ("rect" === _) {
      E = ","
      var J = (S = zo(b || "0px, " + t + "px, " + n + "px, 0px")).map(function (e) {
        return Ko(e).value
      })
      return {
        type: "rect",
        clipText: p,
        poses: R = bu(V = J[0], q = J[1], z = J[2], K = J[3]),
        top: V,
        right: q,
        bottom: z,
        left: K,
        values: S,
        splitter: E
      }
    }
  }
}
var Eu = {
  name: "clippable",
  props: {
    clippable: Boolean,
    defaultClipPath: String,
    customClipPath: String,
    clipRelative: Boolean,
    clipArea: Boolean,
    dragWithClip: Boolean,
    clipTargetBounds: Boolean,
    clipVerticalGuidelines: Array,
    clipHorizontalGuidelines: Array,
    clipSnapThreshold: Boolean
  },
  events: {
    onClipStart: "clipStart",
    onClip: "clip",
    onClipEnd: "clipEnd"
  },
  css: [".control.clip-control {\n    background: #6d6;\n    cursor: pointer;\n}\n.control.clip-control.clip-radius {\n    background: #d66;\n}\n.line.clip-line {\n    background: #6e6;\n    cursor: move;\n    z-index: 1;\n}\n.clip-area {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.clip-ellipse {\n    position: absolute;\n    cursor: move;\n    border: 1px solid #6d6;\n    border: var(--zoompx) solid #6d6;\n    border-radius: 50%;\n    transform-origin: 0px 0px;\n}", ":host {\n    --bounds-color: #d66;\n}", ".guideline {\n    pointer-events: none;\n    z-index: 2;\n}", ".line.guideline.bounds {\n    background: #d66;\n    background: var(--bounds-color);\n}"],
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$customClipPath = e$props.customClipPath
    var /* [auto-meaningful-name] */e$props$defaultClipPath = e$props.defaultClipPath
    var /* [auto-meaningful-name] */e$props$clipArea = e$props.clipArea
    var /* [auto-meaningful-name] */e$props$zoom = e$props.zoom
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$target = e$state.target
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    var /* [auto-meaningful-name] */e$state$allMatrix = e$state.allMatrix
    var /* [auto-meaningful-name] */e$state$is3d = e$state.is3d
    var /* [auto-meaningful-name] */e$state$left = e$state.left
    var /* [auto-meaningful-name] */e$state$top = e$state.top
    var /* [auto-meaningful-name] */e$state$pos1 = e$state.pos1
    var /* [auto-meaningful-name] */e$state$pos2 = e$state.pos2
    var /* [auto-meaningful-name] */e$state$pos3 = e$state.pos3
    var /* [auto-meaningful-name] */e$state$pos4 = e$state.pos4
    var /* [auto-meaningful-name] */e$state$clipPathState = e$state.clipPathState
    var /* [auto-meaningful-name] */e$state$snapBoundInfos = e$state.snapBoundInfos
    if (!e$state$target) {
      return []
    }
    var E = yu(e$state$target, e$state$width, e$state$height, e$props$defaultClipPath || "inset", e$state$clipPathState || e$props$customClipPath)
    if (!E) {
      return []
    }
    var O = e$state$is3d ? 4 : 3
    var /* [auto-meaningful-name] */E$type = E.type
    var C = E.poses.map(function (e) {
      var t = ws(e$state$allMatrix, e.pos, O)
      return [t[0] - e$state$left, t[1] - e$state$top]
    })
    var T = []
    var S = []
    var A = "rect" === E$type
    var I = "inset" === E$type
    var j = "polygon" === E$type
    if (A || I || j) {
      var N = I ? C.slice(0, 8) : C
      S = N.map(function (e, n) {
        var r = 0 === n ? N[N.length - 1] : N[n - 1]
        var o = ti(r, e)
        var i = js(r, e)
        return t.createElement("div", {
          key: "clipLine" + n,
          className: us("line", "clip-line", "snap-control"),
          "data-clip-index": n,
          style: {
            width: i + "px",
            transform: "translate(" + r[0] + "px, " + r[1] + "px) rotate(" + o + "rad) scaleY(" + e$props$zoom + ")"
          }
        })
      })
    }
    T = C.map(function (e, n) {
      return t.createElement("div", {
        key: "clipControl" + n,
        className: us("control", "clip-control", "snap-control"),
        "data-clip-index": n,
        style: {
          transform: "translate(" + e[0] + "px, " + e[1] + "px) scale(" + e$props$zoom + ")"
        }
      })
    })
    if (I) {
      T.push.apply(T, C.slice(8).map(function (e, n) {
        return t.createElement("div", {
          key: "clipRadiusControl" + n,
          className: us("control", "clip-control", "clip-radius", "snap-control"),
          "data-clip-index": 8 + n,
          style: {
            transform: "translate(" + e[0] + "px, " + e[1] + "px) scale(" + e$props$zoom + ")"
          }
        })
      }))
    }
    if ("circle" === E$type || "ellipse" === E$type) {
      var /* [auto-meaningful-name] */E$left = E.left
      var /* [auto-meaningful-name] */E$top = E.top
      var /* [auto-meaningful-name] */E$radiusX = E.radiusX
      var /* [auto-meaningful-name] */E$radiusY = E.radiusY
      var M = Bi(ws(e$state$allMatrix, [E$left, E$top], O), ws(e$state$allMatrix, [0, 0], O))
      var L = M[0]
      var P = M[1]
      var B = "none"
      if (!e$props$clipArea) {
        for (var F = Math.max(10, E$radiusX / 5, E$radiusY / 5), G = [], W = 0; W <= F; ++W) {
          var U = 2 * Math.PI / F * W
          G.push([E$radiusX + (E$radiusX - e$props$zoom) * Math.cos(U), E$radiusY + (E$radiusY - e$props$zoom) * Math.sin(U)])
        }
        G.push([E$radiusX, -2])
        G.push([-2, -2])
        G.push([-2, 2 * E$radiusY + 2])
        G.push([2 * E$radiusX + 2, 2 * E$radiusY + 2])
        G.push([2 * E$radiusX + 2, -2])
        G.push([E$radiusX, -2])
        B = "polygon(" + G.map(function (e) {
          return e[0] + "px " + e[1] + "px"
        }).join(", ") + ")"
      }
      T.push(t.createElement("div", {
        key: "clipEllipse",
        className: us("clip-ellipse", "snap-control"),
        style: {
          width: 2 * E$radiusX + "px",
          height: 2 * E$radiusY + "px",
          clipPath: B,
          transform: "translate(" + (-e$state$left + L) + "px, " + (-e$state$top + P) + "px) " + ys(e$state$allMatrix)
        }
      }))
    }
    if (e$props$clipArea) {
      var H = Ts(Qa([e$state$pos1, e$state$pos2, e$state$pos3, e$state$pos4], C))
      var /* [auto-meaningful-name] */H$width = H.width
      var /* [auto-meaningful-name] */H$height = H.height
      var /* [auto-meaningful-name] */H$left = H.left
      var /* [auto-meaningful-name] */H$top = H.top
      if (j || A || I) {
        G = I ? C.slice(0, 8) : C
        T.push(t.createElement("div", {
          key: "clipArea",
          className: us("clip-area", "snap-control"),
          style: {
            width: H$width + "px",
            height: H$height + "px",
            transform: "translate(" + H$left + "px, " + H$top + "px)",
            clipPath: "polygon(" + G.map(function (e) {
              return e[0] - H$left + "px " + (e[1] - H$top) + "px"
            }).join(", ") + ")"
          }
        }))
      }
    }
    if (e$state$snapBoundInfos) {
      ["vertical", "horizontal"].forEach(function (e) {
        var n = e$state$snapBoundInfos[e]
        var r = "horizontal" === e
        if (n.isSnap) {
          S.push.apply(S, n.snap.posInfos.map(function (n, o) {
            var /* [auto-meaningful-name] */n$pos = n.pos
            var s = Bi(ws(e$state$allMatrix, r ? [0, n$pos] : [n$pos, 0], O), [e$state$left, e$state$top])
            var c = Bi(ws(e$state$allMatrix, r ? [e$state$width, n$pos] : [n$pos, e$state$height], O), [e$state$left, e$state$top])
            return xl(t, "", s, c, e$props$zoom, "clip" + e + "snap" + o, "guideline")
          }))
        }
        if (n.isBound) {
          S.push.apply(S, n.bounds.map(function (n, o) {
            var /* [auto-meaningful-name] */n$pos = n.pos
            var s = Bi(ws(e$state$allMatrix, r ? [0, n$pos] : [n$pos, 0], O), [e$state$left, e$state$top])
            var c = Bi(ws(e$state$allMatrix, r ? [e$state$width, n$pos] : [n$pos, e$state$height], O), [e$state$left, e$state$top])
            return xl(t, "", s, c, e$props$zoom, "clip" + e + "bounds" + o, "guideline", "bounds", "bold")
          }))
        }
      })
    }
    return Qa(T, S)
  },
  dragControlCondition: function (e, t) {
    return t.inputEvent && (t.inputEvent.target.getAttribute("class") || "").indexOf("clip") > -1
  },
  dragStart: function (e, t) {
    var /* [auto-meaningful-name] */e$props$dragWithClip = e.props.dragWithClip
    return !(undefined === e$props$dragWithClip || e$props$dragWithClip) && this.dragControlStart(e, t)
  },
  drag: function (e, t) {
    return this.dragControl(e, t)
  },
  dragEnd: function (e, t) {
    return this.dragControlEnd(e, t)
  },
  dragControlStart: function (e, t) {
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$defaultClipPath = e$props.defaultClipPath
    var /* [auto-meaningful-name] */e$props$customClipPath = e$props.customClipPath
    var /* [auto-meaningful-name] */e$state$target = e$state.target
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    var l = t.inputEvent ? t.inputEvent.target : null
    var u = l ? l.getAttribute("class") : ""
    var /* [auto-meaningful-name] */t$datas = t.datas
    var p = yu(e$state$target, e$state$width, e$state$height, e$props$defaultClipPath || "inset", e$props$customClipPath)
    if (!p) {
      return false
    }
    var /* [auto-meaningful-name] */p$clipText = p.clipText
    return false === Us(e, "onClipStart", Gs(e, t, {
      clipType: p.type,
      clipStyle: p$clipText,
      poses: p.poses.map(function (e) {
        return e.pos
      })
    })) ? (t$datas.isClipStart = false, false) : (t$datas.isControl = u.indexOf("clip-control") > -1, t$datas.isLine = u.indexOf("clip-line") > -1, t$datas.isArea = u.indexOf("clip-area") > -1 || u.indexOf("clip-ellipse") > -1, t$datas.index = l ? parseInt(l.getAttribute("data-clip-index"), 10) : -1, t$datas.clipPath = p, t$datas.isClipStart = true, e$state.clipPathState = p$clipText, uc(e, t), true)
  },
  dragControl: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$originalDatas = t.originalDatas
    if (!t$datas.isClipStart) {
      return false
    }
    var o = t$originalDatas && t$originalDatas.draggable || {}
    var i = t$datas
    var /* [auto-meaningful-name] */i$isControl = i.isControl
    var /* [auto-meaningful-name] */i$isLine = i.isLine
    var /* [auto-meaningful-name] */i$isArea = i.isArea
    var /* [auto-meaningful-name] */i$index = i.index
    var /* [auto-meaningful-name] */i$clipPath = i.clipPath
    if (!i$clipPath) {
      return false
    }
    var d = o.isDrag ? o.prevDist : gc(t)
    var p = d[0]
    var f = d[1]
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    var v = !i$isArea && !i$isControl && !i$isLine
    var /* [auto-meaningful-name] */i$clipPath$type = i$clipPath.type
    var /* [auto-meaningful-name] */i$clipPath$poses = i$clipPath.poses
    var /* [auto-meaningful-name] */i$clipPath$splitter = i$clipPath.splitter
    var O = i$clipPath$poses.map(function (e) {
      return e.pos
    })
    if (v) {
      p = -p
      f = -f
    }
    var w = !i$isControl || "nesw" === i$clipPath$poses[i$index].direction
    var C = "inset" === i$clipPath$type || "rect" === i$clipPath$type
    var T = i$clipPath$poses.map(function () {
      return [0, 0]
    })
    if (i$isControl && !w) {
      var S = i$clipPath$poses[i$index]
      var /* [auto-meaningful-name] */S$horizontal = S.horizontal
      var /* [auto-meaningful-name] */S$vertical = S.vertical
      var j = [p * Math.abs(S$horizontal), f * Math.abs(S$vertical)]
      T = function (e, t, n, r) {
        var o = e[t]
        var /* [auto-meaningful-name] */o$direction = o.direction
        var /* [auto-meaningful-name] */o$sub = o.sub
        var s = e.map(function () {
          return [0, 0]
        })
        var c = o$direction ? o$direction.split("") : []
        if (r && t < 8) {
          var l = c.filter(function (e) {
            return "w" === e || "e" === e
          })[0]
          var u = c.filter(function (e) {
            return "n" === e || "s" === e
          })[0]
          s[t] = n
          e.forEach(function (e, t) {
            var /* [auto-meaningful-name] */e$direction = e.direction
            if (e$direction) {
              if (e$direction.indexOf(l) > -1) {
                s[t][0] = n[0]
              }
              if (e$direction.indexOf(u) > -1) {
                s[t][1] = n[1]
              }
            }
          })
          if (l) {
            s[1][0] = n[0] / 2
            s[5][0] = n[0] / 2
          }
          if (u) {
            s[3][1] = n[1] / 2
            s[7][1] = n[1] / 2
          }
        } else if (o$direction && !o$sub) {
          c.forEach(function (t) {
            var r = "n" === t || "s" === t
            e.forEach(function (e, o) {
              var /* [auto-meaningful-name] */e$direction = e.direction
              var /* [auto-meaningful-name] */e$horizontal = e.horizontal
              var /* [auto-meaningful-name] */e$vertical = e.vertical
              if (e$direction && -1 !== e$direction.indexOf(t)) {
                s[o] = [r || !e$horizontal ? 0 : n[0], r && e$vertical ? n[1] : 0]
              }
            })
          })
        } else {
          s[t] = n
        }
        return s
      }(i$clipPath$poses, i$index, j, C)
    } else if (w) {
      T = O.map(function () {
        return [p, f]
      })
    }
    var N = O.map(function (e, t) {
      return Pi(e, T[t])
    })
    var R = Qa(N)
    e$state.snapBoundInfos = null
    var k = "circle" === i$clipPath.type
    var x = "ellipse" === i$clipPath.type
    if (k || x) {
      var D = Ts(N)
      var M = Math.abs(D.bottom - D.top)
      var L = Math.abs(x ? D.right - D.left : M)
      var P = N[0][1] + M
      var B = N[0][0] - L
      var F = N[0][0] + L
      if (k) {
        R.push([F, D.bottom])
        T.push([1, 0])
      }
      R.push([D.left, P])
      T.push([0, 1])
      R.push([B, D.bottom])
      T.push([1, 0])
    }
    var G = Bc((e$props.clipHorizontalGuidelines || []).map(function (e) {
      return Zo("" + e, e$state$height)
    }), (e$props.clipVerticalGuidelines || []).map(function (e) {
      return Zo("" + e, e$state$width)
    }), e$state$width, e$state$height)
    var W = []
    var U = []
    if (k || x) {
      W = [R[4][0], R[2][0]]
      U = [R[1][1], R[3][1]]
    } else if (C) {
      var H = [R[0], R[2], R[4], R[6]]
      var V = [T[0], T[2], T[4], T[6]]
      W = H.filter(function (e, t) {
        return V[t][0]
      }).map(function (e) {
        return e[0]
      })
      U = H.filter(function (e, t) {
        return V[t][1]
      }).map(function (e) {
        return e[1]
      })
    } else {
      W = R.filter(function (e, t) {
        return T[t][0]
      }).map(function (e) {
        return e[0]
      })
      U = R.filter(function (e, t) {
        return T[t][1]
      }).map(function (e) {
        return e[1]
      })
    }
    for (var z = [0, 0], Y = function (e) {
        var t = bl(G, e$props.clipTargetBounds && {
          left: 0,
          top: 0,
          right: e$state$width,
          bottom: e$state$height
        }, W, U, 5)
        var /* [auto-meaningful-name] */t$horizontal = t.horizontal
        var /* [auto-meaningful-name] */t$vertical = t.vertical
        var /* [auto-meaningful-name] */t$horizontal$offset = t$horizontal.offset
        var /* [auto-meaningful-name] */t$vertical$offset = t$vertical.offset
        if (t$horizontal.isBound) {
          z[1] += t$horizontal$offset
        }
        if (t$vertical.isBound) {
          z[0] += t$vertical$offset
        }
        if (!x && !k || 0 !== T[0][0] || 0 !== T[0][1]) {
          R.forEach(function (e, t) {
            var n = T[t]
            if (n[0]) {
              e[0] -= t$vertical$offset
            }
            if (n[1]) {
              e[1] -= t$horizontal$offset
            }
          })
          return "break"
        }
        var a = Ts(N)
        var s = a.bottom - a.top
        var c = x ? a.right - a.left : s
        c -= t$vertical.isBound ? Math.abs(t$vertical$offset) : 0 === t$vertical.snapIndex ? -t$vertical$offset : t$vertical$offset
        s -= t$horizontal.isBound ? Math.abs(t$horizontal$offset) : 0 === t$horizontal.snapIndex ? -t$horizontal$offset : t$horizontal$offset
        if (k) {
          c = s = Kc(t$vertical, t$horizontal) > 0 ? s : c
        }
        var l = R[0]
        R[1][1] = l[1] - s
        R[2][0] = l[0] + c
        R[3][1] = l[1] + s
        R[4][0] = l[0] - c
      }, K = 0; K < 2; ++K) {
      if ("break" === Y()) {
        break
      }
    }
    var q = vu(e, i$clipPath, N)
    var X = i$clipPath$type + "(" + q.join(i$clipPath$splitter) + ")"
    e$state.clipPathState = X
    if (k || x) {
      W = [R[4][0], R[2][0]]
      U = [R[1][1], R[3][1]]
    } else if (C) {
      H = [R[0], R[2], R[4], R[6]]
      W = H.map(function (e) {
        return e[0]
      })
      U = H.map(function (e) {
        return e[1]
      })
    } else {
      W = R.map(function (e) {
        return e[0]
      })
      U = R.map(function (e) {
        return e[1]
      })
    }
    e$state.snapBoundInfos = bl(G, e$props.clipTargetBounds && {
      left: 0,
      top: 0,
      right: e$state$width,
      bottom: e$state$height
    }, W, U, 1)
    if (t$originalDatas.draggable) {
      t$originalDatas.draggable.deltaOffset = z
    }
    Us(e, "onClip", Gs(e, t, {
      clipEventType: "changed",
      clipType: i$clipPath$type,
      poses: N,
      clipStyle: X,
      clipStyles: q,
      distX: p,
      distY: f
    }))
    return true
  },
  dragControlEnd: function (e, t) {
    this.unset(e)
    var /* [auto-meaningful-name] */t$isDrag = t.isDrag
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isDouble = t.isDouble
    var /* [auto-meaningful-name] */t$datas$isLine = t$datas.isLine
    var /* [auto-meaningful-name] */t$datas$isClipStart = t$datas.isClipStart
    var /* [auto-meaningful-name] */t$datas$isControl = t$datas.isControl
    return !!t$datas$isClipStart && (Us(e, "onClipEnd", Ws(e, t, {})), t$isDouble && (t$datas$isControl ? function (e, t) {
      var /* [auto-meaningful-name] */t$datas1 = t.datas
      var /* [auto-meaningful-name] */t$datas1$clipPath = t$datas1.clipPath
      var /* [auto-meaningful-name] */t$datas1$index = t$datas1.index
      var i = t$datas1$clipPath
      var /* [auto-meaningful-name] */i$type = i.type
      var /* [auto-meaningful-name] */i$poses = i.poses
      var /* [auto-meaningful-name] */i$splitter = i.splitter
      var l = i$poses.map(function (e) {
        return e.pos
      })
      var /* [auto-meaningful-name] */l$length = l.length
      if ("polygon" === i$type) {
        i$poses.splice(t$datas1$index, 1)
        l.splice(t$datas1$index, 1)
      } else {
        if ("inset" !== i$type) {
          return
        }
        if (t$datas1$index < 8) {
          return
        }
        fu(i$poses, l, t$datas1$index, 8, l$length)
        if (l$length === i$poses.length) {
          return
        }
      }
      var d = vu(e, t$datas1$clipPath, l)
      Us(e, "onClip", Gs(e, t, {
        clipEventType: "removed",
        clipType: i$type,
        poses: l,
        clipStyles: d,
        clipStyle: i$type + "(" + d.join(i$splitter) + ")",
        distX: 0,
        distY: 0
      }))
    }(e, t) : t$datas$isLine && function (e, t) {
      var n = lc(e, t)
      var r = n[0]
      var o = n[1]
      var /* [auto-meaningful-name] */t$datas1 = t.datas
      var /* [auto-meaningful-name] */t$datas1$clipPath = t$datas1.clipPath
      var /* [auto-meaningful-name] */t$datas1$index = t$datas1.index
      var c = t$datas1$clipPath
      var /* [auto-meaningful-name] */c$type = c.type
      var /* [auto-meaningful-name] */c$poses = c.poses
      var /* [auto-meaningful-name] */c$splitter = c.splitter
      var p = c$poses.map(function (e) {
        return e.pos
      })
      if ("polygon" === c$type) {
        p.splice(t$datas1$index, 0, [r, o])
      } else {
        if ("inset" !== c$type) {
          return
        }
        var f = au.indexOf(t$datas1$index)
        var h = su.indexOf(t$datas1$index)
        var /* [auto-meaningful-name] */c$poses$length = c$poses.length
        hu(c$poses, p, 8, f, h, r, o, p[4][0], p[4][1], p[0][0], p[0][1])
        if (c$poses$length === c$poses.length) {
          return
        }
      }
      var g = vu(e, t$datas1$clipPath, p)
      Us(e, "onClip", Gs(e, t, {
        clipEventType: "added",
        clipType: c$type,
        poses: p,
        clipStyles: g,
        clipStyle: c$type + "(" + g.join(c$splitter) + ")",
        distX: 0,
        distY: 0
      }))
    }(e, t)), t$isDouble || t$isDrag)
  },
  unset: function (e) {
    e.state.clipPathState = ""
    e.state.snapBoundInfos = null
  }
}
var Ou = {
  name: "originDraggable",
  props: {
    originDraggable: Boolean,
    originRelative: Boolean
  },
  events: {
    onDragOriginStart: "dragOriginStart",
    onDragOrigin: "dragOrigin",
    onDragOriginEnd: "dragOriginEnd"
  },
  css: [":host[data-able-origindraggable] .control.origin {\n    pointer-events: auto;\n}"],
  dragControlCondition: function (e, t) {
    return t.isRequest ? "originDraggable" === t.requestAble : ai(t.inputEvent.target, us("origin"))
  },
  dragControlStart: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    uc(e, t)
    var r = Gs(e, t, {
      dragStart: Rl.dragStart(e, new ic().dragStart([0, 0], t))
    })
    var o = Us(e, "onDragOriginStart", r)
    t$datas.startOrigin = e.state.transformOrigin
    t$datas.startTargetOrigin = e.state.targetOrigin
    t$datas.prevOrigin = [0, 0]
    t$datas.isDragOrigin = true
    return false === o ? (t$datas.isDragOrigin = false, false) : r
  },
  dragControl: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isPinch = t.isPinch
    var /* [auto-meaningful-name] */t$isRequest = t.isRequest
    if (!t$datas.isDragOrigin) {
      return false
    }
    var i = gc(t)
    var a = i[0]
    var s = i[1]
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    var /* [auto-meaningful-name] */e$state$offsetMatrix = e$state.offsetMatrix
    var /* [auto-meaningful-name] */e$state$targetMatrix = e$state.targetMatrix
    var /* [auto-meaningful-name] */e$state$is3d = e$state.is3d
    var /* [auto-meaningful-name] */e$props$originRelative = e.props.originRelative
    var m = undefined === e$props$originRelative || e$props$originRelative
    var g = e$state$is3d ? 4 : 3
    var _ = [a, s]
    if (t$isRequest) {
      var /* [auto-meaningful-name] */t$distOrigin = t.distOrigin
      if (t$distOrigin[0] || t$distOrigin[1]) {
        _ = t$distOrigin
      }
    }
    var b = Pi(t$datas.startOrigin, _)
    var y = Pi(t$datas.startTargetOrigin, _)
    var E = Bi(_, t$datas.prevOrigin)
    var O = yc(e$state$offsetMatrix, e$state$targetMatrix, b, g)
    var w = e.getRect()
    var C = Ts(Cs(O, e$state$width, e$state$height, g))
    var T = [w.left - C.left, w.top - C.top]
    t$datas.prevOrigin = _
    var S = Gs(e, t, {
      width: e$state$width,
      height: e$state$height,
      origin: b,
      dist: _,
      delta: E,
      transformOrigin: [Qs(y[0], e$state$width, m), Qs(y[1], e$state$height, m)].join(" "),
      drag: Rl.drag(e, oc(t, e.state, T, !!t$isPinch, false))
    })
    Us(e, "onDragOrigin", S)
    return S
  },
  dragControlEnd: function (e, t) {
    return !!t.datas.isDragOrigin && (Us(e, "onDragOriginEnd", Ws(e, t, {})), true)
  },
  dragGroupControlCondition: function (e, t) {
    return this.dragControlCondition(e, t)
  },
  dragGroupControlStart: function (e, t) {
    return !!this.dragControlStart(e, t)
  },
  dragGroupControl: function (e, t) {
    var n = this.dragControl(e, t)
    return !!n && (e.transformOrigin = n.transformOrigin, true)
  },
  request: function (e) {
    var t = {}
    var n = e.getRect()
    var r = 0
    var o = 0
    var /* [auto-meaningful-name] */n$transformOrigin = n.transformOrigin
    var a = [0, 0]
    return {
      isControl: true,
      requestStart: function () {
        return {
          datas: t
        }
      },
      request: function (e) {
        if ("deltaOrigin" in e) {
          a[0] += e.deltaOrigin[0]
          a[1] += e.deltaOrigin[1]
        } else {
          if ("origin" in e) {
            a[0] = e.origin[0] - n$transformOrigin[0]
            a[1] = e.origin[1] - n$transformOrigin[1]
          } else {
            if ("x" in e) {
              r = e.x - n.left
            } else {
              if ("deltaX" in e) {
                r += e.deltaX
              }
            }
            if ("y" in e) {
              o = e.y - n.top
            } else {
              if ("deltaY" in e) {
                o += e.deltaY
              }
            }
          }
        }
        return {
          datas: t,
          distX: r,
          distY: o,
          distOrigin: a
        }
      },
      requestEnd: function () {
        return {
          datas: t,
          isDrag: true
        }
      }
    }
  }
}
function wu(e, t, n, r, o) {
  var i
  if (undefined === r) {
    r = [0, 0]
  }
  if (o) {
    i = o
  } else {
    var a = Hs(e)
    i = a && a.borderRadius || ""
  }
  return pu(!i || !o && "0px" === i ? [] : Vo(i), t, n, 0, 0, r)
}
function Cu(e, t, n, r, o, i) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$state$width = e$state.width
  var /* [auto-meaningful-name] */e$state$height = e$state.height
  var l = uu(i, o, e.props.roundRelative, e$state$width, e$state$height)
  var /* [auto-meaningful-name] */l$raws = l.raws
  var /* [auto-meaningful-name] */l$styles = l.styles
  var p = mu(o, l$raws)
  var /* [auto-meaningful-name] */p$horizontals = p.horizontals
  var /* [auto-meaningful-name] */p$verticals = p.verticals
  var m = l$styles.join(" ")
  e$state.borderRadiusState = m
  Us(e, "onRound", Gs(e, t, {
    horizontals: p$horizontals,
    verticals: p$verticals,
    borderRadius: m,
    width: e$state$width,
    height: e$state$height,
    delta: r,
    dist: n
  }))
}
var Tu = {
  name: "roundable",
  props: {
    roundable: Boolean,
    roundRelative: Boolean,
    minRoundControls: Array,
    maxRoundControls: Array,
    roundClickable: Boolean
  },
  events: {
    onRoundStart: "roundStart",
    onRound: "round",
    onRoundEnd: "roundEnd"
  },
  css: [".control.border-radius {\n    background: #d66;\n    cursor: pointer;\n}", ":host[data-able-roundable] .line.direction {\n    cursor: pointer;\n}"],
  render: function (e, t) {
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$target = e$state.target
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    var /* [auto-meaningful-name] */e$state$allMatrix = e$state.allMatrix
    var /* [auto-meaningful-name] */e$state$is3d = e$state.is3d
    var /* [auto-meaningful-name] */e$state$left = e$state.left
    var /* [auto-meaningful-name] */e$state$top = e$state.top
    var /* [auto-meaningful-name] */e$state$borderRadiusState = e$state.borderRadiusState
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$minRoundControls = e$props.minRoundControls
    var f = undefined === e$props$minRoundControls ? [0, 0] : e$props$minRoundControls
    var /* [auto-meaningful-name] */e$props$maxRoundControls = e$props.maxRoundControls
    var m = undefined === e$props$maxRoundControls ? [4, 4] : e$props$maxRoundControls
    var /* [auto-meaningful-name] */e$props$zoom = e$props.zoom
    if (!e$state$target) {
      return null
    }
    var _ = e$state$is3d ? 4 : 3
    var v = wu(e$state$target, e$state$width, e$state$height, f, e$state$borderRadiusState)
    if (!v) {
      return null
    }
    var b = 0
    var y = 0
    return v.map(function (e, n) {
      y += Math.abs(e.horizontal)
      b += Math.abs(e.vertical)
      var r = Bi(ws(e$state$allMatrix, e.pos, _), [e$state$left, e$state$top])
      var o = e.vertical ? b <= m[1] : y <= m[0]
      return t.createElement("div", {
        key: "borderRadiusControl" + n,
        className: us("control", "border-radius"),
        "data-radius-index": n,
        style: {
          display: o ? "block" : "none",
          transform: "translate(" + r[0] + "px, " + r[1] + "px) scale(" + e$props$zoom + ")"
        }
      })
    })
  },
  dragControlCondition: function (e, t) {
    if (!t.inputEvent || t.isRequest) {
      return false
    }
    var n = t.inputEvent.target.getAttribute("class") || ""
    return n.indexOf("border-radius") > -1 || n.indexOf("moveable-line") > -1 && n.indexOf("moveable-direction") > -1
  },
  dragControlStart: function (e, t) {
    var /* [auto-meaningful-name] */t$inputEvent = t.inputEvent
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$inputEvent$target = t$inputEvent.target
    var i = t$inputEvent$target.getAttribute("class") || ""
    var a = i.indexOf("border-radius") > -1
    var s = i.indexOf("moveable-line") > -1 && i.indexOf("moveable-direction") > -1
    var c = a ? parseInt(t$inputEvent$target.getAttribute("data-radius-index"), 10) : -1
    var l = s ? parseInt(t$inputEvent$target.getAttribute("data-line-index"), 10) : -1
    if (!a && !s) {
      return false
    }
    if (false === Us(e, "onRoundStart", Gs(e, t, {}))) {
      return false
    }
    t$datas.lineIndex = l
    t$datas.controlIndex = c
    t$datas.isControl = a
    t$datas.isLine = s
    uc(e, t)
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$roundRelative = e$props.roundRelative
    var /* [auto-meaningful-name] */e$props$minRoundControls = e$props.minRoundControls
    var f = undefined === e$props$minRoundControls ? [0, 0] : e$props$minRoundControls
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$target = e$state.target
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    t$datas.isRound = true
    t$datas.prevDist = [0, 0]
    var v = wu(e$state$target, e$state$width, e$state$height, f) || []
    t$datas.controlPoses = v
    e$state.borderRadiusState = uu(v.map(function (e) {
      return e.pos
    }), v, e$props$roundRelative, e$state$width, e$state$height).styles.join(" ")
    return true
  },
  dragControl: function (e, t) {
    var /* [auto-meaningful-name] */t$datas = t.datas
    if (!t$datas.isRound || !t$datas.isControl || !t$datas.controlPoses.length) {
      return false
    }
    var /* [auto-meaningful-name] */t$datas$controlIndex = t$datas.controlIndex
    var /* [auto-meaningful-name] */t$datas$controlPoses = t$datas.controlPoses
    var i = gc(t)
    var a = i[0]
    var s = i[1]
    var c = [a, s]
    var l = Bi(c, t$datas.prevDist)
    var /* [auto-meaningful-name] */e$props$maxRoundControls = e.props.maxRoundControls
    var d = undefined === e$props$maxRoundControls ? [4, 4] : e$props$maxRoundControls
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    var m = t$datas$controlPoses[t$datas$controlIndex]
    var /* [auto-meaningful-name] */m$vertical = m.vertical
    var /* [auto-meaningful-name] */m$horizontal = m.horizontal
    var v = t$datas$controlPoses.map(function (e) {
      var /* [auto-meaningful-name] */e$horizontal = e.horizontal
      var /* [auto-meaningful-name] */e$vertical = e.vertical
      var r = [e$horizontal * m$horizontal * c[0], e$vertical * m$vertical * c[1]]
      if (e$horizontal) {
        if (1 === d[0]) {
          return r
        }
        if (d[0] < 4 && e$horizontal !== m$horizontal) {
          return r
        }
      } else {
        if (0 === d[1]) {
          r[1] = e$vertical * m$horizontal * c[0] / e$state$width * e$state$height
          return r
        }
        if (m$vertical) {
          if (1 === d[1]) {
            return r
          }
          if (d[1] < 4 && e$vertical !== m$vertical) {
            return r
          }
        }
      }
      return [0, 0]
    })
    v[t$datas$controlIndex] = c
    var b = t$datas$controlPoses.map(function (e, t) {
      return Pi(e.pos, v[t])
    })
    t$datas.prevDist = [a, s]
    Cu(e, t, c, l, t$datas$controlPoses, b)
    return true
  },
  dragControlEnd: function (e, t) {
    var /* [auto-meaningful-name] */e$state = e.state
    e$state.borderRadiusState = ""
    var /* [auto-meaningful-name] */t$datas = t.datas
    var /* [auto-meaningful-name] */t$isDouble = t.isDouble
    if (!t$datas.isRound) {
      return false
    }
    var /* [auto-meaningful-name] */e$state$width = e$state.width
    var /* [auto-meaningful-name] */e$state$height = e$state.height
    var /* [auto-meaningful-name] */t$datas$isControl = t$datas.isControl
    var /* [auto-meaningful-name] */t$datas$controlIndex = t$datas.controlIndex
    var /* [auto-meaningful-name] */t$datas$isLine = t$datas.isLine
    var /* [auto-meaningful-name] */t$datas$lineIndex = t$datas.lineIndex
    var /* [auto-meaningful-name] */t$datas$controlPoses = t$datas.controlPoses
    var p = t$datas$controlPoses.map(function (e) {
      return e.pos
    })
    var /* [auto-meaningful-name] */p$length = p.length
    var /* [auto-meaningful-name] */e$props$roundClickable = e.props.roundClickable
    if (t$isDouble && (undefined === e$props$roundClickable || e$props$roundClickable)) {
      if (t$datas$isControl) {
        fu(t$datas$controlPoses, p, t$datas$controlIndex, 0)
      } else if (t$datas$isLine) {
        var m = lc(e, t)
        !function (e, t, n, r, o, i, a) {
          var s = mu(e)
          var /* [auto-meaningful-name] */s$horizontals = s.horizontals
          var /* [auto-meaningful-name] */s$verticals = s.verticals
          var /* [auto-meaningful-name] */s$horizontals$length = s$horizontals.length
          var /* [auto-meaningful-name] */s$verticals$length = s$verticals.length
          var p = -1
          var f = -1
          if (0 === n) {
            if (0 === s$horizontals$length) {
              p = 0
            } else {
              if (1 === s$horizontals$length) {
                p = 1
              }
            }
          } else {
            if (3 === n) {
              if (s$horizontals$length <= 2) {
                p = 2
              } else {
                if (s$horizontals$length <= 3) {
                  p = 3
                }
              }
            }
          }
          if (2 === n) {
            if (0 === s$verticals$length) {
              f = 0
            } else {
              if (s$verticals$length < 4) {
                f = 3
              }
            }
          } else {
            if (1 === n) {
              if (s$verticals$length <= 1) {
                f = 1
              } else {
                if (s$verticals$length <= 2) {
                  f = 2
                }
              }
            }
          }
          hu(e, t, 0, p, f, r, o, i, a)
        }(t$datas$controlPoses, p, t$datas$lineIndex, m[0], m[1], e$state$width, e$state$height)
      }
      if (p$length !== t$datas$controlPoses.length) {
        Cu(e, t, [0, 0], [0, 0], t$datas$controlPoses, p)
      }
    }
    Us(e, "onRoundEnd", Ws(e, t, {}))
    e$state.borderRadiusState = ""
    return true
  },
  unset: function (e) {
    e.state.borderRadiusState = ""
  }
}
var Su = {
  isPinch: true,
  name: "beforeRenderable",
  props: {},
  events: {
    onBeforeRenderStart: "beforeRenderStart",
    onBeforeRender: "beforeRender",
    onBeforeRenderEnd: "beforeRenderEnd",
    onBeforeRenderGroupStart: "beforeRenderGroupStart",
    onBeforeRenderGroup: "beforeRenderGroup",
    onBeforeRenderGroupEnd: "beforeRenderGroupEnd"
  },
  setTransform: function (e, t) {
    var /* [auto-meaningful-name] */e$state = e.state
    var /* [auto-meaningful-name] */e$state$is3d = e$state.is3d
    var /* [auto-meaningful-name] */e$state$target = e$state.target
    var /* [auto-meaningful-name] */e$state$targetMatrix = e$state.targetMatrix
    var a = null === e$state$target || undefined === e$state$target ? undefined : e$state$target.style.transform
    var s = e$state$is3d ? "matrix3d(" + e$state$targetMatrix.join(",") + ")" : "matrix(" + Fi(e$state$targetMatrix, true) + ")"
    t.datas.startTransforms = a && "none" !== a ? Vo(a) : [s]
  },
  resetTransform: function (e, t) {
    t.datas.nextTransforms = t.datas.startTransforms
    t.datas.nextTransformAppendedIndexes = []
  },
  fillDragStartParams: function (e, t) {
    return Gs(e, t, {
      setTransform: function (e) {
        t.datas.startTransforms = Bo(e) ? e : Vo(e)
      },
      isPinch: !!t.isPinch
    })
  },
  fillDragParams: function (e, t) {
    return Gs(e, t, {
      isPinch: !!t.isPinch
    })
  },
  dragStart: function (e, t) {
    this.setTransform(e, t)
    Us(e, "onBeforeRenderStart", this.fillDragStartParams(e, t))
  },
  drag: function (e, t) {
    this.resetTransform(e, t)
    Us(e, "onBeforeRender", Gs(e, t, {
      isPinch: !!t.isPinch
    }))
  },
  dragEnd: function (e, t) {
    Us(e, "onBeforeRenderEnd", Gs(e, t, {
      isPinch: !!t.isPinch,
      isDrag: t.isDrag
    }))
  },
  dragGroupStart: function (e, t) {
    var n = this
    this.dragStart(e, t)
    var r = ac(e, "beforeRenderable", t)
    var /* [auto-meaningful-name] */e$moveables = e.moveables
    var i = r.map(function (e, t) {
      var r = e$moveables[t]
      n.setTransform(r, e)
      return n.fillDragStartParams(r, e)
    })
    Us(e, "onBeforeRenderGroupStart", Gs(e, t, {
      isPinch: !!t.isPinch,
      targets: e.props.targets,
      setTransform: function () {},
      events: i
    }))
  },
  dragGroup: function (e, t) {
    var n = this
    this.drag(e, t)
    var r = ac(e, "beforeRenderable", t)
    var /* [auto-meaningful-name] */e$moveables = e.moveables
    var i = r.map(function (e, t) {
      var r = e$moveables[t]
      n.resetTransform(r, e)
      return n.fillDragParams(r, e)
    })
    Us(e, "onBeforeRenderGroup", Gs(e, t, {
      isPinch: !!t.isPinch,
      targets: e.props.targets,
      events: i
    }))
  },
  dragGroupEnd: function (e, t) {
    this.dragEnd(e, t)
    Us(e, "onBeforeRenderGroupEnd", Gs(e, t, {
      isPinch: !!t.isPinch,
      isDrag: t.isDrag,
      targets: e.props.targets
    }))
  },
  dragControlStart: function (e, t) {
    return this.dragStart(e, t)
  },
  dragControl: function (e, t) {
    return this.drag(e, t)
  },
  dragControlEnd: function (e, t) {
    return this.dragEnd(e, t)
  },
  dragGroupControlStart: function (e, t) {
    return this.dragGroupStart(e, t)
  },
  dragGroupControl: function (e, t) {
    return this.dragGroup(e, t)
  },
  dragGroupControlEnd: function (e, t) {
    return this.dragGroupEnd(e, t)
  }
}
var Au = {
  name: "renderable",
  props: {},
  events: {
    onRenderStart: "renderStart",
    onRender: "render",
    onRenderEnd: "renderEnd",
    onRenderGroupStart: "renderGroupStart",
    onRenderGroup: "renderGroup",
    onRenderGroupEnd: "renderGroupEnd"
  },
  dragStart: function (e, t) {
    Us(e, "onRenderStart", Gs(e, t, {
      isPinch: !!t.isPinch
    }))
  },
  drag: function (e, t) {
    Us(e, "onRender", Gs(e, t, {
      isPinch: !!t.isPinch
    }))
  },
  dragEnd: function (e, t) {
    Us(e, "onRenderEnd", Gs(e, t, {
      isPinch: !!t.isPinch,
      isDrag: t.isDrag
    }))
  },
  dragGroupStart: function (e, t) {
    Us(e, "onRenderGroupStart", Gs(e, t, {
      isPinch: !!t.isPinch,
      targets: e.props.targets
    }))
  },
  dragGroup: function (e, t) {
    Us(e, "onRenderGroup", Gs(e, t, {
      isPinch: !!t.isPinch,
      targets: e.props.targets
    }))
  },
  dragGroupEnd: function (e, t) {
    Us(e, "onRenderGroupEnd", Gs(e, t, {
      isPinch: !!t.isPinch,
      isDrag: t.isDrag,
      targets: e.props.targets
    }))
  },
  dragControlStart: function (e, t) {
    return this.dragStart(e, t)
  },
  dragControl: function (e, t) {
    return this.drag(e, t)
  },
  dragControlEnd: function (e, t) {
    return this.dragEnd(e, t)
  },
  dragGroupControlStart: function (e, t) {
    return this.dragGroupStart(e, t)
  },
  dragGroupControl: function (e, t) {
    return this.dragGroup(e, t)
  },
  dragGroupControlEnd: function (e, t) {
    return this.dragGroupEnd(e, t)
  }
}
function Iu(e, t, n, r, o, i, a) {
  var s = "Start" === o
  var /* [auto-meaningful-name] */e$state$target = e.state.target
  var /* [auto-meaningful-name] */i$isRequest = i.isRequest
  if (!e$state$target || s && r.indexOf("Control") > -1 && !i$isRequest && e.areaElement === i.inputEvent.target) {
    return false
  }
  var u = "" + n + r + o
  var d = "" + n + r + "Condition"
  var p = "End" === o
  var f = o.indexOf("After") > -1
  var h = s && (!e.targetGesto || !e.controlGesto || !e.targetGesto.isFlag() || !e.controlGesto.isFlag())
  if (h) {
    e.updateRect(o, true, false)
  }
  if (!("" !== o || f || i$isRequest)) {
    qs(e.state, i)
  }
  var m = Qa([Su], e[t], [Au])
  if (i$isRequest) {
    var /* [auto-meaningful-name] */i$requestAble = i.requestAble
    if (!m.some(function (e) {
      return e.name === i$requestAble
    })) {
      m.push.apply(m, e.props.ables.filter(function (e) {
        return e.name === i$requestAble
      }))
    }
  }
  if (!m.length) {
    return false
  }
  var _ = m.filter(function (e) {
    return e[u]
  })
  var /* [auto-meaningful-name] */i$datas = i.datas
  if (h) {
    _.forEach(function (t) {
      if (t.unset) {
        t.unset(e)
      }
    })
  }
  var b
  var /* [auto-meaningful-name] */i$inputEvent = i.inputEvent
  if (p && i$inputEvent) {
    b = document.elementFromPoint(i.clientX, i.clientY) || i$inputEvent.target
  }
  var /* [auto-meaningful-name] */_$filterFunctionTVar_AutoMeaningfulName_t$nameT$nameVarRI$datasT$nameI$datasT$nameIfSR$isEventStartTDTDEIReturnR$isEventStartTUEXaXaIDatasROriginalDatasI$datasInputTargetB$length = _.filter(function (t) {
    var /* [auto-meaningful-name] */t$name = t.name
    var r = i$datas[t$name] || (i$datas[t$name] = {})
    if (s) {
      r.isEventStart = !t[d] || t[d](e, i)
    }
    return !!r.isEventStart && t[u](e, Xa(Xa({}, i), {
      datas: r,
      originalDatas: i$datas,
      inputTarget: b
    }))
  }).length
  var O = s && _.length && !_$filterFunctionTVar_AutoMeaningfulName_t$nameT$nameVarRI$datasT$nameI$datasT$nameIfSR$isEventStartTDTDEIReturnR$isEventStartTUEXaXaIDatasROriginalDatasI$datasInputTargetB$length
  if (p || O) {
    e.state.gesto = null
    if (e.moveables) {
      e.moveables.forEach(function (e) {
        e.state.gesto = null
      })
    }
  }
  if (h && O) {
    _.forEach(function (t) {
      if (t.unset) {
        t.unset(e)
      }
    })
  }
  return !e.isUnmounted && !O && ((!s && _$filterFunctionTVar_AutoMeaningfulName_t$nameT$nameVarRI$datasT$nameI$datasT$nameIfSR$isEventStartTDTDEIReturnR$isEventStartTUEXaXaIDatasROriginalDatasI$datasInputTargetB$length && !a || p) && (e.updateRect(o, true, false), e.forceUpdate()), s || p || f || !_$filterFunctionTVar_AutoMeaningfulName_t$nameT$nameVarRI$datasT$nameI$datasT$nameIfSR$isEventStartTDTDEIReturnR$isEventStartTUEXaXaIDatasROriginalDatasI$datasInputTargetB$length || a || Iu(e, t, n, r, o + "After", i), true)
}
function ju(e, t, n) {
  var r = e.controlBox.getElement()
  var o = []
  o.push(r)
  if (!(e.props.dragArea && !e.props.dragTarget)) {
    o.push(t)
  }
  var i = function (t) {
    var /* [auto-meaningful-name] */t$inputEvent$target = t.inputEvent.target
    return t$inputEvent$target === e.areaElement || !e.isMoveableElement(t$inputEvent$target) || ai(t$inputEvent$target, "moveable-area") || ai(t$inputEvent$target, "moveable-padding")
  }
  return Nu(e, o, "targetAbles", n, {
    dragStart: i,
    pinchStart: i
  })
}
function Nu(e, t, n, r, o) {
  if (undefined === o) {
    o = {}
  }
  var /* [auto-meaningful-name] */e$props = e.props
  var /* [auto-meaningful-name] */e$props$pinchOutside = e$props.pinchOutside
  var /* [auto-meaningful-name] */e$props$pinchThreshold = e$props.pinchThreshold
  var c = {
    container: window,
    pinchThreshold: e$props$pinchThreshold,
    pinchOutside: e$props$pinchOutside
  }
  var l = new Ba(t, c);
  ["drag", "pinch"].forEach(function (t) {
    ["Start", "", "End"].forEach(function (i) {
      l.on("" + t + i, function (a) {
        var /* [auto-meaningful-name] */a$eventType = a.eventType
        if (!o[a$eventType] || o[a$eventType](a)) {
          if (!Iu(e, n, t, r, i, a)) {
            a.stop()
          }
        } else {
          a.stop()
        }
      })
    })
  })
  return l
}
var Ru = function () {
  function e(e, t, n) {
    var r = this
    this.target = e
    this.moveable = t
    this.eventName = n
    this.ables = []
    this.onEvent = function (e) {
      var /* [auto-meaningful-name] */r$eventName = r.eventName
      var /* [auto-meaningful-name] */r$moveable = r.moveable
      if (!r$moveable.state.disableNativeEvent) {
        r.ables.forEach(function (r) {
          r[r$eventName](r$moveable, {
            inputEvent: e
          })
        })
      }
    }
    this.target.addEventListener(this.eventName.toLowerCase(), this.onEvent)
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.setAbles = function (e) {
    this.ables = e
  }
  e$prototype.destroy = function () {
    this.target.removeEventListener(this.eventName.toLowerCase(), this.onEvent)
    this.target = null
    this.moveable = null
  }
  return e
}()
var ku = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.state = Xa({
      container: null,
      gesto: null,
      renderPoses: [[0, 0], [0, 0], [0, 0], [0, 0]],
      disableNativeEvent: false
    }, Ds(null))
    t.enabledAbles = []
    t.targetAbles = []
    t.controlAbles = []
    t.rotation = 0
    t.scale = [1, 1]
    t.isUnmounted = false
    t.events = {
      mouseEnter: null,
      mouseLeave: null
    }
    t.onPreventClick = function (e) {
      e.stopPropagation()
      si(window, "click", t.onPreventClick, true)
    }
    return t
  }
  qa(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.render = function () {
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$state = this.state
    var /* [auto-meaningful-name] */this$props$parentPosition = this$props.parentPosition
    var /* [auto-meaningful-name] */this$props$className = this$props.className
    var /* [auto-meaningful-name] */this$props$target = this$props.target
    var /* [auto-meaningful-name] */this$props$zoom = this$props.zoom
    var /* [auto-meaningful-name] */this$props$cspNonce = this$props.cspNonce
    var /* [auto-meaningful-name] */this$props$translateZ = this$props.translateZ
    var /* [auto-meaningful-name] */this$props$cssStyled = this$props.cssStyled
    var /* [auto-meaningful-name] */this$props$portalContainer = this$props.portalContainer
    this.checkUpdate()
    this.updateRenderPoses()
    var u = this$props$parentPosition || {
      left: 0,
      top: 0
    }
    var /* [auto-meaningful-name] */u$left = u.left
    var /* [auto-meaningful-name] */u$top = u.top
    var /* [auto-meaningful-name] */this$state$left = this$state.left
    var /* [auto-meaningful-name] */this$state$top = this$state.top
    var /* [auto-meaningful-name] */this$state$target = this$state.target
    var /* [auto-meaningful-name] */this$state$direction = this$state.direction
    var /* [auto-meaningful-name] */this$props$targets = this$props.targets
    var b = (this$props$targets && this$props$targets.length || this$props$target) && this$state$target
    var y = this.isDragging()
    var E = {}
    this.getEnabledAbles().forEach(function (e) {
      E["data-able-" + e.name.toLowerCase()] = true
    })
    return createElement(this$props$cssStyled, Xa({
      cspNonce: this$props$cspNonce,
      ref: ko(this, "controlBox"),
      className: us("control-box", -1 === this$state$direction ? "reverse" : "", y ? "dragging" : "") + " " + this$props$className
    }, E, {
      onClick: this.onPreventClick,
      portalContainer: this$props$portalContainer,
      style: {
        position: "absolute",
        display: b ? "block" : "none",
        transform: "translate3d(" + (this$state$left - u$left) + "px, " + (this$state$top - u$top) + "px, " + this$props$translateZ + ")",
        "--zoom": this$props$zoom,
        "--zoompx": this$props$zoom + "px"
      }
    }), this.renderAbles(), this._renderLines())
  }
  t$prototype.componentDidMount = function () {
    this.controlBox.getElement()
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$parentMoveable = this$props.parentMoveable
    var /* [auto-meaningful-name] */this$props$container = this$props.container
    var /* [auto-meaningful-name] */this$props$wrapperMoveable = this$props.wrapperMoveable
    this.updateEvent(this$props)
    this.updateNativeEvents(this$props)
    if (!(this$props$container || this$props$parentMoveable || this$props$wrapperMoveable)) {
      this.updateRect("", false, true)
    }
    this.updateCheckInput()
  }
  t$prototype.componentDidUpdate = function (e) {
    this.updateNativeEvents(e)
    this.updateEvent(e)
    this.updateCheckInput()
  }
  t$prototype.componentWillUnmount = function () {
    this.isUnmounted = true
    Fs(this, "targetGesto")
    Fs(this, "controlGesto")
    var /* [auto-meaningful-name] */this$events = this.events
    for (var t in this$events) {
      var n = this$events[t]
      if (n) {
        n.destroy()
      }
    }
  }
  t$prototype.getContainer = function () {
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$parentMoveable = this$props.parentMoveable
    var /* [auto-meaningful-name] */this$props$wrapperMoveable = this$props.wrapperMoveable
    return this$props.container || this$props$wrapperMoveable && this$props$wrapperMoveable.getContainer() || this$props$parentMoveable && this$props$parentMoveable.getContainer() || this.controlBox.getElement().parentElement
  }
  t$prototype.isMoveableElement = function (e) {
    return e && (e.getAttribute("class") || "").indexOf(Moveable) > -1
  }
  t$prototype.dragStart = function (e) {
    if (this.targetGesto) {
      this.targetGesto.triggerDragStart(e)
    }
    return this
  }
  t$prototype.hitTest = function (e) {
    var t
    var /* [auto-meaningful-name] */this$state = this.state
    var /* [auto-meaningful-name] */this$state$target = this$state.target
    var /* [auto-meaningful-name] */this$state$pos1 = this$state.pos1
    var /* [auto-meaningful-name] */this$state$pos2 = this$state.pos2
    var /* [auto-meaningful-name] */this$state$pos3 = this$state.pos3
    var /* [auto-meaningful-name] */this$state$pos4 = this$state.pos4
    var /* [auto-meaningful-name] */this$state$targetClientRect = this$state.targetClientRect
    if (!this$state$target) {
      return 0
    }
    if (e instanceof Element) {
      var l = e.getBoundingClientRect()
      t = {
        left: l.left,
        top: l.top,
        width: l.width,
        height: l.height
      }
    } else {
      t = Xa({
        width: 0,
        height: 0
      }, e)
    }
    var /* [auto-meaningful-name] */t$left = t.left
    var /* [auto-meaningful-name] */t$top = t.top
    var /* [auto-meaningful-name] */t$width = t.width
    var /* [auto-meaningful-name] */t$height = t.height
    var h = ha([this$state$pos1, this$state$pos2, this$state$pos4, this$state$pos3], this$state$targetClientRect)
    var m = Ea(h, [[t$left, t$top], [t$left + t$width, t$top], [t$left + t$width, t$top + t$height], [t$left, t$top + t$height]])
    var g = fa(h)
    return m && g ? Math.min(100, m / g * 100) : 0
  }
  t$prototype.isInside = function (e, t) {
    var /* [auto-meaningful-name] */this$state = this.state
    var /* [auto-meaningful-name] */this$state$target = this$state.target
    var /* [auto-meaningful-name] */this$state$pos1 = this$state.pos1
    var /* [auto-meaningful-name] */this$state$pos2 = this$state.pos2
    var /* [auto-meaningful-name] */this$state$pos3 = this$state.pos3
    var /* [auto-meaningful-name] */this$state$pos4 = this$state.pos4
    var /* [auto-meaningful-name] */this$state$targetClientRect = this$state.targetClientRect
    return !!this$state$target && ga([e, t], ha([this$state$pos1, this$state$pos2, this$state$pos4, this$state$pos3], this$state$targetClientRect))
  }
  t$prototype.updateRect = function (e, t, n) {
    if (undefined === n) {
      n = true
    }
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$parentMoveable = this$props.parentMoveable
    var i = this.state.target || this.props.target
    var a = this.getContainer()
    var s = this$props$parentMoveable ? this$props$parentMoveable.props.rootContainer : this$props.rootContainer
    this.updateState(Ds(this.controlBox && this.controlBox.getElement(), i, a, a, s || a), !this$props$parentMoveable && n)
  }
  t$prototype.isTargetChanged = function (e, t) {
    var /* [auto-meaningful-name] */this$props = this.props
    var r = this$props.dragTarget || this$props.target
    var o = e.dragTarget || e.target
    var /* [auto-meaningful-name] */this$props$dragArea = this$props.dragArea
    var /* [auto-meaningful-name] */e$dragArea = e.dragArea
    return !this$props$dragArea && o !== r || (t || this$props$dragArea) && e$dragArea !== this$props$dragArea
  }
  t$prototype.updateNativeEvents = function (e) {
    var t = this
    var n = this.props.dragArea ? this.areaElement : this.state.target
    var /* [auto-meaningful-name] */this$events = this.events
    var o = Qo(this$events)
    if (this.isTargetChanged(e)) {
      for (var i in this$events) {
        var a = this$events[i]
        if (a) {
          a.destroy()
        }
        this$events[i] = null
      }
    }
    if (n) {
      var /* [auto-meaningful-name] */this$enabledAbles = this.enabledAbles
      o.forEach(function (e) {
        var o = Vs(this$enabledAbles, [e])
        var i = o.length > 0
        var a = this$events[e]
        if (i) {
          if (!a) {
            a = new Ru(n, t, e)
            this$events[e] = a
          }
          a.setAbles(o)
        } else {
          if (a) {
            a.destroy()
            this$events[e] = null
          }
        }
      })
    }
  }
  t$prototype.updateEvent = function (e) {
    var t = this.controlBox.getElement()
    var /* [auto-meaningful-name] */this$targetAbles$length = this.targetAbles.length
    var /* [auto-meaningful-name] */this$controlAbles$length = this.controlAbles.length
    var /* [auto-meaningful-name] */this$props = this.props
    var i = this$props.dragTarget || this$props.target
    var a = this.isTargetChanged(e, true)
    var s = !this$targetAbles$length && this.targetGesto || a
    if (s) {
      Fs(this, "targetGesto")
      this.updateState({
        gesto: null
      })
    }
    if (!this$controlAbles$length) {
      Fs(this, "controlGesto")
    }
    if (i && this$targetAbles$length && !this.targetGesto) {
      this.targetGesto = ju(this, i, "")
    }
    if (!this.controlGesto && this$controlAbles$length) {
      this.controlGesto = Nu(this, t, "controlAbles", "Control")
    }
    if (s) {
      this.unsetAbles()
    }
  }
  t$prototype.isDragging = function () {
    return !!this.targetGesto && this.targetGesto.isFlag() || !!this.controlGesto && this.controlGesto.isFlag()
  }
  t$prototype.updateTarget = function (e) {
    this.updateRect(e, true)
  }
  t$prototype.getRect = function () {
    var /* [auto-meaningful-name] */this$state = this.state
    var t = Bs(this.state)
    var n = t[0]
    var r = t[1]
    var o = t[2]
    var i = t[3]
    var a = Ts(t)
    var /* [auto-meaningful-name] */this$state$width = this$state.width
    var /* [auto-meaningful-name] */this$state$height = this$state.height
    var /* [auto-meaningful-name] */a$width = a.width
    var /* [auto-meaningful-name] */a$height = a.height
    var /* [auto-meaningful-name] */a$left = a.left
    var /* [auto-meaningful-name] */a$top = a.top
    var f = [this$state.left, this$state.top]
    var h = Pi(f, this$state.origin)
    return {
      width: a$width,
      height: a$height,
      left: a$left,
      top: a$top,
      pos1: n,
      pos2: r,
      pos3: o,
      pos4: i,
      offsetWidth: this$state$width,
      offsetHeight: this$state$height,
      beforeOrigin: Pi(f, this$state.beforeOrigin),
      origin: h,
      transformOrigin: this$state.transformOrigin,
      rotation: this.getRotation()
    }
  }
  t$prototype.getManager = function () {
    return this
  }
  t$prototype.getRotation = function () {
    var /* [auto-meaningful-name] */this$state = this.state
    return function (e, t, n) {
      var r = ti(e, t) / Math.PI * 180
      return r = (r = n >= 0 ? r : 180 - r) >= 0 ? r : 360 + r
    }(this$state.pos1, this$state.pos2, this$state.direction)
  }
  t$prototype.request = function (e, t, n) {
    if (undefined === t) {
      t = {}
    }
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$ables = this$props.ables
    var /* [auto-meaningful-name] */this$props$groupable = this$props.groupable
    var a = this$props$ables.filter(function (t) {
      return t.name === e
    })[0]
    if (this.isDragging() || !a || !a.request) {
      return {
        request: function () {
          return this
        },
        requestEnd: function () {
          return this
        }
      }
    }
    var s = this
    var c = a.request(this)
    var l = n || t.isInstant
    var u = c.isControl ? "controlAbles" : "targetAbles"
    var d = (this$props$groupable ? "Group" : "") + (c.isControl ? "Control" : "")
    var p = {
      request: function (t) {
        Iu(s, u, "drag", d, "", Xa(Xa({}, c.request(t)), {
          requestAble: e,
          isRequest: true
        }), l)
        return this
      },
      requestEnd: function () {
        Iu(s, u, "drag", d, "End", Xa(Xa({}, c.requestEnd()), {
          requestAble: e,
          isRequest: true
        }), l)
        return this
      }
    }
    Iu(s, u, "drag", d, "Start", Xa(Xa({}, c.requestStart(t)), {
      requestAble: e,
      isRequest: true
    }), l)
    return l ? p.request(t).requestEnd() : p
  }
  t$prototype.destroy = function () {
    this.componentWillUnmount()
  }
  t$prototype.updateRenderPoses = function () {
    var /* [auto-meaningful-name] */this$state = this.state
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$state$originalBeforeOrigin = this$state.originalBeforeOrigin
    var /* [auto-meaningful-name] */this$state$transformOrigin = this$state.transformOrigin
    var /* [auto-meaningful-name] */this$state$allMatrix = this$state.allMatrix
    var /* [auto-meaningful-name] */this$state$is3d = this$state.is3d
    var /* [auto-meaningful-name] */this$state$pos1 = this$state.pos1
    var /* [auto-meaningful-name] */this$state$pos2 = this$state.pos2
    var /* [auto-meaningful-name] */this$state$pos3 = this$state.pos3
    var /* [auto-meaningful-name] */this$state$pos4 = this$state.pos4
    var /* [auto-meaningful-name] */this$state$left = this$state.left
    var /* [auto-meaningful-name] */this$state$top = this$state.top
    var p = this$props.padding || {}
    var /* [auto-meaningful-name] */p$left = p.left
    var h = undefined === p$left ? 0 : p$left
    var /* [auto-meaningful-name] */p$top = p.top
    var g = undefined === p$top ? 0 : p$top
    var /* [auto-meaningful-name] */p$bottom = p.bottom
    var v = undefined === p$bottom ? 0 : p$bottom
    var /* [auto-meaningful-name] */p$right = p.right
    var y = undefined === p$right ? 0 : p$right
    var E = this$state$is3d ? 4 : 3
    var O = this$props.groupable ? this$state$originalBeforeOrigin : Pi(this$state$originalBeforeOrigin, [this$state$left, this$state$top])
    this$state.renderPoses = [Pi(this$state$pos1, Xs(this$state$allMatrix, [-h, -g], this$state$transformOrigin, O, E)), Pi(this$state$pos2, Xs(this$state$allMatrix, [y, -g], this$state$transformOrigin, O, E)), Pi(this$state$pos3, Xs(this$state$allMatrix, [-h, v], this$state$transformOrigin, O, E)), Pi(this$state$pos4, Xs(this$state$allMatrix, [y, v], this$state$transformOrigin, O, E))]
  }
  t$prototype.checkUpdate = function () {
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$target = this$props.target
    var /* [auto-meaningful-name] */this$props$container = this$props.container
    var /* [auto-meaningful-name] */this$props$parentMoveable = this$props.parentMoveable
    var /* [auto-meaningful-name] */this$state = this.state
    var /* [auto-meaningful-name] */this$state$target = this$state.target
    var /* [auto-meaningful-name] */this$state$container = this$state.container
    if (this$state$target || this$props$target) {
      this.updateAbles()
      if (!zs(this$state$target, this$props$target) || !zs(this$state$container, this$props$container)) {
        this.updateState({
          target: this$props$target,
          container: this$props$container
        })
        if (!(this$props$parentMoveable || !this$props$container && !this.controlBox)) {
          this.updateRect("End", false, false)
        }
      }
    }
  }
  t$prototype.triggerEvent = function (e, t) {
    var n = this.props[e]
    return n && n(t)
  }
  t$prototype.useCSS = function (e, t) {
    var /* [auto-meaningful-name] */this$props$customStyledMap = this.props.customStyledMap
    var r = e + t
    if (!this$props$customStyledMap[r]) {
      this$props$customStyledMap[r] = Ya(e, t)
    }
    return this$props$customStyledMap[r]
  }
  t$prototype.unsetAbles = function () {
    var e = this
    if (this.targetAbles.filter(function (t) {
      return !!t.unset && (t.unset(e), true)
    }).length) {
      this.forceUpdate()
    }
  }
  t$prototype.updateAbles = function (e, t) {
    if (undefined === e) {
      e = this.props.ables
    }
    if (undefined === t) {
      t = ""
    }
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$triggerAblesSimultaneously = this$props.triggerAblesSimultaneously
    var o = e.filter(function (e) {
      return e && (e.always || this$props[e.name])
    })
    var i = "drag" + t + "ControlStart"
    var a = Vs(o, ["drag" + t + "Start", "pinch" + t + "Start"], this$props$triggerAblesSimultaneously)
    var s = Vs(o, [i], this$props$triggerAblesSimultaneously)
    this.enabledAbles = o
    this.targetAbles = a
    this.controlAbles = s
  }
  t$prototype.updateState = function (e, t) {
    if (t) {
      this.setState(e)
    } else {
      var /* [auto-meaningful-name] */this$state = this.state
      for (var r in e) this$state[r] = e[r]
    }
  }
  t$prototype.getEnabledAbles = function () {
    var /* [auto-meaningful-name] */this$props = this.props
    return this$props.ables.filter(function (t) {
      return t && this$props[t.name]
    })
  }
  t$prototype.renderAbles = function () {
    var e
    var t = this
    var /* [auto-meaningful-name] */this$props$triggerAblesSimultaneously = this.props.triggerAblesSimultaneously
    var r = {
      createElement: createElement
    }
    return function (e, t) {
      var n = []
      var r = {}
      e.forEach(function (o, i) {
        var a = t(o, i, e)
        var s = r[a]
        if (!s) {
          s = []
          r[a] = s
          n.push(s)
        }
        s.push(o)
      })
      return n
    }((e = Vs(this.getEnabledAbles(), ["render"], this$props$triggerAblesSimultaneously).map(function (e) {
      return (0, e.render)(t, r) || []
    }), e.reduce(function (e, t) {
      return e.concat(t)
    }, [])).filter(function (e) {
      return e
    }), function (e) {
      return e.key
    }).map(function (e) {
      return e[0]
    })
  }
  t$prototype.updateCheckInput = function () {
    if (this.targetGesto) {
      this.targetGesto.options.checkInput = this.props.checkInput
    }
  }
  t$prototype._renderLines = function () {
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$edge = this$props.edge
    var /* [auto-meaningful-name] */this$props$zoom = this$props.zoom
    if (this$props.hideDefaultLines) {
      return []
    }
    var /* [auto-meaningful-name] */this$state$renderPoses = this.state.renderPoses
    var o = {
      createElement: createElement
    }
    return [xl(o, this$props$edge ? "n" : "", this$state$renderPoses[0], this$state$renderPoses[1], this$props$zoom, 0), xl(o, this$props$edge ? "e" : "", this$state$renderPoses[1], this$state$renderPoses[3], this$props$zoom, 1), xl(o, this$props$edge ? "w" : "", this$state$renderPoses[0], this$state$renderPoses[2], this$props$zoom, 2), xl(o, this$props$edge ? "s" : "", this$state$renderPoses[2], this$state$renderPoses[3], this$props$zoom, 3)]
  }
  t.defaultProps = {
    target: null,
    dragTarget: null,
    container: null,
    rootContainer: null,
    origin: true,
    edge: false,
    parentMoveable: null,
    wrapperMoveable: null,
    parentPosition: null,
    portalContainer: null,
    ables: [],
    pinchThreshold: 20,
    dragArea: false,
    passDragArea: false,
    transformOrigin: "",
    className: "",
    zoom: 1,
    triggerAblesSimultaneously: false,
    padding: {},
    pinchOutside: true,
    checkInput: false,
    groupable: false,
    hideDefaultLines: false,
    cspNonce: "",
    translateZ: 0,
    cssStyled: null,
    customStyledMap: {},
    props: {}
  }
  return t
}(PureComponent)
var xu = {
  name: "groupable",
  props: {
    defaultGroupRotate: Number,
    defaultGroupOrigin: String,
    groupable: Boolean
  },
  events: {},
  render: function (e, t) {
    var n = e.props.targets || []
    e.moveables = []
    var /* [auto-meaningful-name] */e$state = e.state
    var o = {
      left: e$state.left,
      top: e$state.top
    }
    return n.map(function (n, r) {
      return t.createElement(ku, {
        key: "moveable" + r,
        ref: xo(e, "moveables", r),
        target: n,
        origin: false,
        cssStyled: e.props.cssStyled,
        customStyledMap: e.props.customStyledMap,
        parentMoveable: e,
        parentPosition: o
      })
    })
  }
}
var Du = Za("clickable", {
  props: {},
  events: {
    onClick: "click",
    onClickGroup: "clickGroup"
  },
  always: true,
  dragStart: function (e, t) {
    var n
    var /* [auto-meaningful-name] */Click
    var /* [auto-meaningful-name] */e$onPreventClick
    var i
    if (!t.isRequest) {
      n = window
      Click = "click"
      e$onPreventClick = e.onPreventClick
      i = true
      n.addEventListener(Click, e$onPreventClick, i)
    }
  },
  dragControlStart: function (e, t) {
    this.dragStart(e, t)
  },
  dragGroupStart: function (e, t) {
    this.dragStart(e, t)
    t.datas.inputTarget = t.inputEvent && t.inputEvent.target
  },
  dragEnd: function (e, t) {
    this.endEvent(e)
    var /* [auto-meaningful-name] */e$state$target = e.state.target
    var /* [auto-meaningful-name] */t$inputEvent = t.inputEvent
    var /* [auto-meaningful-name] */t$inputTarget = t.inputTarget
    if (!t.isDrag) {
      this.unset(e)
    }
    if (t$inputEvent && t$inputTarget && !t.isDrag && !e.isMoveableElement(t$inputTarget)) {
      var i = e$state$target.contains(t$inputTarget)
      Us(e, "onClick", Gs(e, t, {
        isDouble: t.isDouble,
        inputTarget: t$inputTarget,
        isTarget: e$state$target === t$inputTarget,
        containsTarget: i
      }))
    }
  },
  dragGroupEnd: function (e, t) {
    this.endEvent(e)
    var /* [auto-meaningful-name] */t$inputEvent = t.inputEvent
    var /* [auto-meaningful-name] */t$inputTarget = t.inputTarget
    if (t$inputEvent && t$inputTarget && !t.isDrag && !e.isMoveableElement(t$inputTarget) && t.datas.inputTarget !== t$inputTarget) {
      var /* [auto-meaningful-name] */e$props$targets = e.props.targets
      var i = e$props$targets.indexOf(t$inputTarget)
      var a = i > -1
      var s = false
      if (-1 === i) {
        s = (i = qo(e$props$targets, function (e) {
          return e.contains(t$inputTarget)
        })) > -1
      }
      Us(e, "onClickGroup", Gs(e, t, {
        isDouble: t.isDouble,
        targets: e$props$targets,
        inputTarget: t$inputTarget,
        targetIndex: i,
        isTarget: a,
        containsTarget: s
      }))
    }
  },
  dragControlEnd: function (e) {
    this.endEvent(e)
  },
  dragGroupControlEnd: function (e) {
    this.endEvent(e)
  },
  endEvent: function (e) {
    var t = this
    requestAnimationFrame(function () {
      t.unset(e)
    })
  },
  unset: function (e) {
    si(window, "click", e.onPreventClick, true)
  }
})
function Mu(e) {
  var /* [auto-meaningful-name] */e$originalDatas$draggable = e.originalDatas.draggable
  if (!e$originalDatas$draggable) {
    e.originalDatas.draggable = {}
    e$originalDatas$draggable = e.originalDatas.draggable
  }
  return Xa(Xa({}, e), {
    datas: e$originalDatas$draggable
  })
}
var Lu = Za("edgeDraggable", {
  dragControlCondition: function (e, t) {
    if (!e.props.edgeDraggable || !t.inputEvent) {
      return false
    }
    var /* [auto-meaningful-name] */t$inputEvent$target = t.inputEvent.target
    return ai(t$inputEvent$target, us("direction")) && ai(t$inputEvent$target, us("line"))
  },
  dragControlStart: function (e, t) {
    return Rl.dragStart(e, Mu(t))
  },
  dragControl: function (e, t) {
    return Rl.drag(e, Mu(t))
  },
  dragControlEnd: function (e, t) {
    return Rl.dragEnd(e, Mu(t))
  },
  dragGroupControlCondition: function (e, t) {
    if (!e.props.edgeDraggable || !t.inputEvent) {
      return false
    }
    var /* [auto-meaningful-name] */t$inputEvent$target = t.inputEvent.target
    return ai(t$inputEvent$target, us("direction")) && ai(t$inputEvent$target, us("line"))
  },
  dragGroupControlStart: function (e, t) {
    return Rl.dragGroupStart(e, Mu(t))
  },
  dragGroupControl: function (e, t) {
    return Rl.dragGroup(e, Mu(t))
  },
  dragGroupControlEnd: function (e, t) {
    return Rl.dragGroupEnd(e, Mu(t))
  },
  unset: function (e) {
    e.state.dragInfo = null
  }
})
var Pu = {
  name: "individualGroupable",
  props: {
    individualGroupable: Boolean
  },
  events: {}
}
var Bu = [Su, nu, Nl, rc, Rl, Lu, Wl, Ul, Hl, Yl, tu, ru, $l, Ou, Eu, Tu, xu, Pu, Du, Jl, Au]
var Fu = Bu.reduce(function (e, t) {
  return Xa(Xa({}, e), "events" in t ? t.events : {})
}, {})
var Gu = Bu.reduce(function (e, t) {
  return Xa(Xa({}, e), t.props)
}, {})
var Wu = $s(Fu)
Object.keys(Wu)
Object.keys(Gu)
function Uu(e, t) {
  return Math.max.apply(Math, e.map(function (e) {
    var n = e[0]
    var r = e[1]
    var o = e[2]
    var i = e[3]
    return Math.max(n[t], r[t], o[t], i[t])
  }))
}
function Hu(e, t) {
  return Math.min.apply(Math, e.map(function (e) {
    var n = e[0]
    var r = e[1]
    var o = e[2]
    var i = e[3]
    return Math.min(n[t], r[t], o[t], i[t])
  }))
}
var Vu = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.differ = new pa()
    t.moveables = []
    t.transformOrigin = "50% 50%"
    return t
  }
  qa(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.updateEvent = function (e) {
    var /* [auto-meaningful-name] */this$state = this.state
    var /* [auto-meaningful-name] */this$props = this.props
    var r = e.dragTarget || this$state.target
    var o = this$props.dragTarget || this.areaElement
    if (r !== o) {
      Fs(this, "targetGesto")
      Fs(this, "controlGesto")
      this$state.target = null
    }
    if (!this$state.target) {
      this$state.target = this.areaElement
      this.controlBox.getElement().style.display = "block"
      this.targetGesto = ju(this, o, "Group")
      this.controlGesto = Nu(this, this.controlBox.getElement(), "controlAbles", "GroupControl")
    }
    var i = !zs(e.container, this$props.container)
    if (i) {
      this$state.container = this$props.container
    }
    var a = this.differ.update(this$props.targets)
    var /* [auto-meaningful-name] */a$added = a.added
    var /* [auto-meaningful-name] */a$changed = a.changed
    var /* [auto-meaningful-name] */a$removed = a.removed
    if (i || a$added.length || a$changed.length || a$removed.length) {
      this.updateRect()
    }
  }
  t$prototype.checkUpdate = function () {
    this.updateAbles()
  }
  t$prototype.updateRect = function (e, t, n) {
    if (undefined === n) {
      n = true
    }
    if (this.controlBox) {
      this.moveables.forEach(function (t) {
        t.updateRect(e, false, false)
      })
      var /* [auto-meaningful-name] */this$state = this.state
      var /* [auto-meaningful-name] */this$props = this.props
      var i = this$state.target || this$props.target
      if (!t || "" !== e && this$props.updateGroup) {
        this.rotation = this$props.defaultGroupRotate
        this.transformOrigin = this$props.defaultGroupOrigin || "50% 50%"
        this.scale = [1, 1]
      }
      var /* [auto-meaningful-name] */this$rotation = this.rotation
      var /* [auto-meaningful-name] */this$scale = this.scale
      var c = function (e, t) {
        if (!e.length) {
          return [0, 0, 0, 0]
        }
        var n = e.map(function (e) {
          return Bs(e.state)
        })
        var r = os
        var o = os
        var i = 0
        var a = 0
        var s = oi(t, 1e-7)
        if (s % 90) {
          var c = s / 180 * Math.PI
          var l = Math.tan(c)
          var u = -1 / l
          var d = [is, os]
          var p = [is, os]
          n.forEach(function (e) {
            e.forEach(function (e) {
              var t = e[1] - l * e[0]
              var n = e[1] - u * e[0]
              d[0] = Math.max(d[0], t)
              d[1] = Math.min(d[1], t)
              p[0] = Math.max(p[0], n)
              p[1] = Math.min(p[1], n)
            })
          })
          d.forEach(function (e) {
            p.forEach(function (t) {
              var n = (t - e) / (l - u)
              var i = l * n + e
              r = Math.min(r, n)
              o = Math.min(o, i)
            })
          })
          var f = n.map(function (e) {
            var t = e[0]
            var n = e[1]
            var r = e[2]
            var o = e[3]
            return [zi(t, -c), zi(n, -c), zi(r, -c), zi(o, -c)]
          })
          i = Uu(f, 0) - Hu(f, 0)
          a = Uu(f, 1) - Hu(f, 1)
        } else if (r = Hu(n, 0), o = Hu(n, 1), i = Uu(n, 0) - r, a = Uu(n, 1) - o, s % 180) {
          var h = i
          i = a
          a = h
        }
        return [r, o, i, a]
      }(this.moveables, this$rotation)
      var l = c[0]
      var u = c[1]
      var d = c[2]
      var p = c[3]
      var f = "rotate(" + this$rotation + "deg) scale(" + (this$scale[0] >= 0 ? 1 : -1) + ", " + (this$scale[1] >= 0 ? 1 : -1) + ")"
      i.style.cssText += "left:0px;top:0px; transform-origin: " + this.transformOrigin + "; width:" + d + "px; height:" + p + "px;transform:" + f
      this$state.width = d
      this$state.height = p
      var h = this.getContainer()
      var m = Ds(this.controlBox.getElement(), i, this.controlBox.getElement(), this.getContainer(), this.props.rootContainer || h)
      var g = [m.left, m.top]
      var _ = Bs(m)
      var v = _[0]
      var b = _[1]
      var y = _[2]
      var E = _[3]
      var O = ma([v, b, y, E])
      var w = [O.minX, O.minY]
      m.pos1 = Bi(v, w)
      m.pos2 = Bi(b, w)
      m.pos3 = Bi(y, w)
      m.pos4 = Bi(E, w)
      m.left = l - m.left + w[0]
      m.top = u - m.top + w[1]
      m.origin = Bi(Pi(g, m.origin), w)
      m.beforeOrigin = Bi(Pi(g, m.beforeOrigin), w)
      m.originalBeforeOrigin = Pi(g, m.originalBeforeOrigin)
      var /* [auto-meaningful-name] */m$targetClientRect = m.targetClientRect
      var T = this$scale[0] * this$scale[1] > 0 ? 1 : -1
      m$targetClientRect.top += m.top - this$state.top
      m$targetClientRect.left += m.left - this$state.left
      i.style.transform = "translate(" + -w[0] + "px, " + -w[1] + "px) " + f
      this.updateState(Xa(Xa({}, m), {
        direction: T,
        beforeDirection: T
      }), n)
    }
  }
  t$prototype.getRect = function () {
    return Xa(Xa({}, e.prototype.getRect.call(this)), {
      children: this.moveables.map(function (e) {
        return e.getRect()
      })
    })
  }
  t$prototype.triggerEvent = function (t, n, r) {
    if (r || t.indexOf("Group") > -1) {
      return e.prototype.triggerEvent.call(this, t, n)
    }
  }
  t$prototype.updateAbles = function () {
    e.prototype.updateAbles.call(this, Qa(this.props.ables, [xu]), "Group")
  }
  t.defaultProps = Xa(Xa({}, ku.defaultProps), {
    transformOrigin: ["50%", "50%"],
    groupable: true,
    dragArea: true,
    keepRatio: true,
    targets: [],
    defaultGroupRotate: 0,
    defaultGroupOrigin: "50% 50%"
  })
  return t
}(ku)
var zu = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.moveables = []
    return t
  }
  qa(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.render = function () {
    var e = this
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$cspNonce = this$props.cspNonce
    var /* [auto-meaningful-name] */this$props$cssStyled = this$props.cssStyled
    var /* [auto-meaningful-name] */this$props$targets = this$props.targets
    return createElement(this$props$cssStyled, {
      cspNonce: this$props$cspNonce,
      ref: ko(this, "controlBox"),
      className: us("control-box")
    }, this$props$targets.map(function (t, n) {
      return createElement(ku, Xa({
        key: "moveable" + n,
        ref: xo(e, "moveables", n)
      }, e.props, {
        target: t,
        wrapperMoveable: e
      }))
    }))
  }
  t$prototype.componentDidUpdate = function () {}
  t$prototype.updateRect = function (e, t, n) {
    if (undefined === n) {
      n = true
    }
    this.moveables.forEach(function (r) {
      r.updateRect(e, t, n)
    })
  }
  t$prototype.getRect = function () {
    return Xa(Xa({}, e.prototype.getRect.call(this)), {
      children: this.moveables.map(function (e) {
        return e.getRect()
      })
    })
  }
  t$prototype.request = function () {
    return {
      request: function () {
        return this
      },
      requestEnd: function () {
        return this
      }
    }
  }
  t$prototype.dragStart = function () {
    return this
  }
  t$prototype.hitTest = function () {
    return 0
  }
  t$prototype.isInside = function () {
    return false
  }
  t$prototype.isDragging = function () {
    return false
  }
  t$prototype.updateRenderPoses = function () {}
  t$prototype.updateEvent = function () {}
  t$prototype.checkUpdate = function () {}
  t$prototype.triggerEvent = function () {}
  t$prototype.updateAbles = function () {}
  return t
}(ku)
var Yu = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.refTargets = []
    t.selectorMap = {}
    return t
  }
  qa(t, e)
  var n
  var r
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t.makeStyled = function () {
    var e = {}
    this.getTotalAbles().forEach(function (t) {
      var /* [auto-meaningful-name] */t$css = t.css
      if (t$css) {
        t$css.forEach(function (t) {
          e[t] = true
        })
      }
    })
    var t = Qo(e).join("\n")
    this.defaultStyled = Ya("div", Ro(Moveable, ns + t))
  }
  t.getTotalAbles = function () {
    return Qa([nu, xu, Pu, Jl], this.defaultAbles)
  }
  t$prototype.render = function () {
    var /* [auto-meaningful-name] */this$constructor = this.constructor
    if (!this$constructor.defaultStyled) {
      this$constructor.makeStyled()
    }
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$ables = this$props.ables
    var /* [auto-meaningful-name] */this$props$props = this$props.props
    var o = function (e, t) {
      var n = {}
      for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r]
      }
      if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
          if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
            n[r[o]] = e[r[o]]
          }
        }
      }
      return n
    }(this$props, ["ables", "props"])
    var i = tc(o.target || o.targets)
    var a = function (e, t) {
      var n = []
      e.forEach(function (e) {
        if (e) {
          if (Fo(e)) {
            if (t[e]) {
              n.push.apply(n, t[e])
            }
          } else {
            n.push(e)
          }
        }
      })
      return n
    }(i, this.selectorMap)
    this.refTargets = i
    var s = a.length > 1
    var c = Qa(this$constructor.getTotalAbles(), this$props$ables || [])
    var l = Xa(Xa(Xa({}, o), this$props$props || {}), {
      ables: c,
      cssStyled: this$constructor.defaultStyled,
      customStyledMap: this$constructor.customStyledMap
    })
    return s ? o.individualGroupable ? createElement(zu, Xa({
      key: "individual-group",
      ref: ko(this, "moveable")
    }, l, {
      target: null,
      targets: a
    })) : createElement(Vu, Xa({
      key: "group",
      ref: ko(this, "moveable")
    }, l, {
      target: null,
      targets: a
    })) : createElement(ku, Xa({
      key: "single",
      ref: ko(this, "moveable")
    }, l, {
      target: a[0]
    }))
  }
  t$prototype.componentDidMount = function () {
    this.updateRefs()
  }
  t$prototype.componentDidUpdate = function () {
    this.updateRefs()
  }
  t$prototype.updateRefs = function (e) {
    var t = tc(this.props.target || this.props.targets)
    var n = this.refTargets.some(function (e, n) {
      var r = t[n]
      return !(!e && !r) && e !== r
    })
    var r = e ? {} : this.selectorMap
    var o = {}
    this.refTargets.forEach(function (e) {
      if (Fo(e)) {
        if (r[e]) {
          o[e] = r[e]
        } else {
          n = true
          o[e] = [].slice.call(document.querySelectorAll(e))
        }
      }
    })
    this.selectorMap = o
    if (n) {
      this.forceUpdate()
    }
  }
  t$prototype.getManager = function () {
    return this.moveable
  }
  t.defaultAbles = []
  t.customStyledMap = {}
  t.defaultStyled = null;
  (function (e, t, n, r) {
    var o
    var /* [auto-meaningful-name] */arguments$length = arguments.length
    var a = arguments$length < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r
    if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) {
      a = Reflect.decorate(e, t, n, r)
    } else {
      for (var s = e.length - 1; s >= 0; s--) {
        if (o = e[s]) {
          a = (arguments$length < 3 ? o(a) : arguments$length > 3 ? o(t, n, a) : o(t, n)) || a
        }
      }
    }
    if (arguments$length > 3 && a) {
      Object.defineProperty(t, n, a)
    }
  })([
    (n = ls, undefined === r && (r = {}), function (e, t) {
      n.forEach(function (n) {
        var o = r[n] || n
        if (!(o in e)) {
          e[o] = function () {
            for (var e, r = [], o = 0; o < arguments.length; o++) {
              r[o] = arguments[o]
            }
            var i = (e = this[t])[n].apply(e, r)
            return i === this[t] ? this : i
          }
        }
      })
    })
  ], t.prototype, "moveable", undefined)
  return t
}(PureComponent)
var Ku = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  qa(t, e)
  t.defaultAbles = Bu
  return t
}(Yu)
export { No }
export { Ro }
export { ko }
export { xo }
export { vi }
export { Ci }
export { Ti }
export { ki }
export { Ki }
export { $i }
export { ea }
export { Ba }
export { Wa }
export { Ku }
