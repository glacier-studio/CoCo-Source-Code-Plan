/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2643__part-4
 */

"use strict"

import { c } from "./2643__part-0"
import { g, me } from "./2643__part-1"
import { Ee, xe, Se, Fe, Le, Qe, Je } from "./2643__part-3"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_79 from /* 79 */"../../../79/index"
var et = ""
var tt = ""
var nt = ""
var rt = ""
var it = c && "ontouchstart" in document.documentElement
if (c) {
  var ot = {
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-",
    Webkit: "-webkit-"
  }
  var /* [auto-meaningful-name] */document$createElementP$style = document.createElement("p").style
  for (var st in ot) if (st + "Transform" in document$createElementP$style) {
    et = st
    tt = ot[st]
    break
  }
  if ("Webkit" === et && "msHyphens" in document$createElementP$style) {
    et = "ms"
    tt = ot.ms
    rt = "edge"
  }
  if ("Webkit" === et && "-apple-trailing-word" in document$createElementP$style) {
    nt = "apple"
  }
}
var ct = et
var ut = tt
var lt = nt
var ft = rt
var dt = it
var ht = {
  noPrefill: ["appearance"],
  supportedProperty: function (e) {
    return "appearance" === e && ("ms" === ct ? "-webkit-" + e : ut + e)
  }
}
var pt = {
  noPrefill: ["color-adjust"],
  supportedProperty: function (e) {
    return "color-adjust" === e && ("Webkit" === ct ? ut + "print-" + e : e)
  }
}
var _t = /[-\s]+(.)?/g
function At(e, t) {
  return t ? t.toUpperCase() : ""
}
function gt(e) {
  return e.replace(_t, At)
}
function vt(e) {
  return gt("-" + e)
}
var mt
var yt = {
  noPrefill: ["mask"],
  supportedProperty: function (e, t) {
    if (!/^mask/.test(e)) {
      return false
    }
    if ("Webkit" === ct) {
      if (gt("mask-image") in t) {
        return e
      }
      if (ct + vt("mask-image") in t) {
        return ut + e
      }
    }
    return e
  }
}
var bt = {
  noPrefill: ["text-orientation"],
  supportedProperty: function (e) {
    return "text-orientation" === e && ("apple" !== lt || dt ? e : ut + e)
  }
}
var wt = {
  noPrefill: ["transform"],
  supportedProperty: function (e, t, n) {
    return "transform" === e && (n.transform ? e : ut + e)
  }
}
var Et = {
  noPrefill: ["transition"],
  supportedProperty: function (e, t, n) {
    return "transition" === e && (n.transition ? e : ut + e)
  }
}
var xt = {
  noPrefill: ["writing-mode"],
  supportedProperty: function (e) {
    return "writing-mode" === e && ("Webkit" === ct || "ms" === ct && "edge" !== ft ? ut + e : e)
  }
}
var Ct = {
  noPrefill: ["user-select"],
  supportedProperty: function (e) {
    return "user-select" === e && ("Moz" === ct || "ms" === ct || "apple" === lt ? ut + e : e)
  }
}
var Ot = {
  supportedProperty: function (e, t) {
    return !!/^break-/.test(e) && ("Webkit" === ct ? "WebkitColumn" + vt(e) in t && ut + "column-" + e : "Moz" === ct && "page" + vt(e) in t && "page-" + e)
  }
}
var kt = {
  supportedProperty: function (e, t) {
    if (!/^(border|margin|padding)-inline/.test(e)) {
      return false
    }
    if ("Moz" === ct) {
      return e
    }
    var n = e.replace("-inline", "")
    return ct + vt(n) in t && ut + n
  }
}
var St = {
  supportedProperty: function (e, t) {
    return gt(e) in t && e
  }
}
var Tt = {
  supportedProperty: function (e, t) {
    var n = vt(e)
    return "-" === e[0] || "-" === e[0] && "-" === e[1] ? e : ct + n in t ? ut + e : "Webkit" !== ct && "Webkit" + n in t && "-webkit-" + e
  }
}
var Bt = {
  supportedProperty: function (e) {
    return "scroll-snap" === e.substring(0, 11) && ("ms" === ct ? "" + ut + e : e)
  }
}
var Dt = {
  supportedProperty: function (e) {
    return "overscroll-behavior" === e && ("ms" === ct ? ut + "scroll-chaining" : e)
  }
}
var It = {
  "flex-grow": "flex-positive",
  "flex-shrink": "flex-negative",
  "flex-basis": "flex-preferred-size",
  "justify-content": "flex-pack",
  order: "flex-order",
  "align-items": "flex-align",
  "align-content": "flex-line-pack"
}
var Rt = {
  supportedProperty: function (e, t) {
    var n = It[e]
    return !!n && ct + vt(n) in t && ut + n
  }
}
var Ft = {
  flex: "box-flex",
  "flex-grow": "box-flex",
  "flex-direction": ["box-orient", "box-direction"],
  order: "box-ordinal-group",
  "align-items": "box-align",
  "flex-flow": ["box-orient", "box-direction"],
  "justify-content": "box-pack"
}
var Pt = Object.keys(Ft)
var Nt = function (e) {
  return ut + e
}
var Mt = [
  ht, pt, yt, bt, wt, Et, xt, Ct, Ot, kt, St, Tt, Bt, Dt, Rt, {
    supportedProperty: function (e, t, n) {
      var /* [auto-meaningful-name] */n$multiple = n.multiple
      if (Pt.indexOf(e) > -1) {
        var i = Ft[e]
        if (!Array.isArray(i)) {
          return ct + vt(i) in t && ut + i
        }
        if (!n$multiple) {
          return false
        }
        for (var o = 0; o < i.length; o++) {
          if (!(ct + vt(i[0]) in t)) {
            return false
          }
        }
        return i.map(Nt)
      }
      return false
    }
  }
]
var Lt = Mt.filter(function (e) {
  return e.supportedProperty
}).map(function (e) {
  return e.supportedProperty
})
var jt = Mt.filter(function (e) {
  return e.noPrefill
}).reduce(function (e, t) {
  e.push.apply(e, Module_79.a(t.noPrefill))
  return e
}, [])
var Ut = {}
if (c) {
  mt = document.createElement("p")
  var Ht = window.getComputedStyle(document.documentElement, "")
  for (var Vt in Ht) if (!isNaN(Vt)) {
    Ut[Ht[Vt]] = Ht[Vt]
  }
  jt.forEach(function (e) {
    return delete Ut[e]
  })
}
function Gt(e, t) {
  if (undefined === t) {
    t = {}
  }
  if (!mt) {
    return e
  }
  if (null != Ut[e]) {
    return Ut[e]
  }
  if (!("transition" !== e && "transform" !== e)) {
    t[e] = e in mt.style
  }
  for (var n = 0; n < Lt.length && (Ut[e] = Lt[n](e, mt.style, t), !Ut[e]); n++) {
    ;
  }
  try {
    mt.style[e] = ""
  } catch (r) {
    return false
  }
  return Ut[e]
}
var zt
var Qt = {}
var Wt = {
  transition: 1,
  "transition-property": 1,
  "-webkit-transition": 1,
  "-webkit-transition-property": 1
}
var Kt = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g
function Xt(e, t, n) {
  if ("var" === t) {
    return "var"
  }
  if ("all" === t) {
    return "all"
  }
  if ("all" === n) {
    return ", all"
  }
  var r = t ? Gt(t) : ", " + Gt(n)
  return r || t || n
}
function Yt(e, t) {
  var n = t
  if (!zt || "content" === e) {
    return t
  }
  if ("string" !== typeof n || !isNaN(parseInt(n, 10))) {
    return n
  }
  var r = e + n
  if (null != Qt[r]) {
    return Qt[r]
  }
  try {
    zt.style[e] = n
  } catch (i) {
    Qt[r] = false
    return false
  }
  if (Wt[e]) {
    n = n.replace(Kt, Xt)
  } else if ("" === zt.style[e] && ("-ms-flex" === (n = ut + n) && (zt.style[e] = "-ms-flexbox"), zt.style[e] = n, "" === zt.style[e])) {
    Qt[r] = false
    return false
  }
  zt.style[e] = ""
  Qt[r] = n
  return Qt[r]
}
if (c) {
  zt = document.createElement("p")
}
var qt = function () {
  function e(t) {
    for (var n in t) {
      var r = t[n]
      if ("fallbacks" === n && Array.isArray(r)) {
        t[n] = r.map(e)
      } else {
        var i = false
        var o = Gt(n)
        if (o && o !== n) {
          i = true
        }
        var a = false
        var s = Yt(o, g(r))
        if (s && s !== r) {
          a = true
        }
        if (i || a) {
          if (i) {
            delete t[n]
          }
          t[o || n] = s || r
        }
      }
    }
    return t
  }
  return {
    onProcessRule: function (e) {
      if ("keyframes" === e.type) {
        var t = e
        t.at = "-" === (n = t.at)[1] || "ms" === ct ? n : "@" + ut + "keyframes" + n.substr(10)
      }
      var n
    },
    onProcessStyle: function (t, n) {
      return "style" !== n.type ? t : e(t)
    },
    onChangeValue: function (e, t) {
      return Yt(t, g(e)) || e
    }
  }
}
var $t = function () {
  var e = function (e, t) {
    return e.length === t.length ? e > t ? 1 : -1 : e.length - t.length
  }
  return {
    onProcessStyle: function (t, n) {
      if ("style" !== n.type) {
        return t
      }
      for (var r = {}, i = Object.keys(t).sort(e), o = 0; o < i.length; o++) {
        r[i[o]] = t[i[o]]
      }
      return r
    }
  }
}
function Jt() {
  return {
    plugins: [Se(), Fe(), Le(), Qe(), Je(), "undefined" === typeof window ? null : qt(), $t()]
  }
}
var Zt = me(Jt())
var en = {
  disableGeneration: false,
  generateClassName: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
    var /* [auto-meaningful-name] */e$disableGlobal = e.disableGlobal
    var n = undefined !== e$disableGlobal && e$disableGlobal
    var /* [auto-meaningful-name] */e$productionPrefix = e.productionPrefix
    var i = undefined === e$productionPrefix ? "jss" : e$productionPrefix
    var /* [auto-meaningful-name] */e$seed = e.seed
    var a = undefined === e$seed ? "" : e$seed
    var s = "" === a ? "" : "".concat(a, "-")
    var c = 0
    var u = function () {
      return c += 1
    }
    return function (e, t) {
      var /* [auto-meaningful-name] */t$options$name = t.options.name
      if (t$options$name && 0 === t$options$name.indexOf("Mui") && !t.options.link && !n) {
        if (-1 !== xe.indexOf(e.key)) {
          return "Mui-".concat(e.key)
        }
        var o = "".concat(s).concat(t$options$name, "-").concat(e.key)
        return t.options.theme[Ee] && "" === a ? "".concat(o, "-").concat(u()) : o
      }
      return "".concat(s).concat(i).concat(u())
    }
  }(),
  jss: Zt,
  sheetsCache: null,
  sheetsManager: new Map(),
  sheetsRegistry: null
}
var tn = React.createContext(en)
var nn = -1e9
function rn() {
  return nn += 1
}
export { tn }
export { rn }
