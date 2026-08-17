/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-151
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"./54"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"./40/index"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useRef, useEffect, createElement, useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Src_editor_ui_EditArea_styles_module_css from /* 1060 */"../../../../src/editor/ui/EditArea/styles.module.css"
import /* [auto-meaningful-name] */Src_editor_ui_EditArea_styles_module_css1 from /* 1060 */"../../../../src/editor/ui/EditArea/styles.module.css"
var LT = {
  className: "",
  percent: 0,
  prefixCls: "rc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  style: {},
  trailColor: "#D9D9D9",
  trailWidth: 1
}
var PT = function (e) {
  var t = e.map(function () {
    return useRef()
  })
  var n = useRef(null)
  useEffect(function () {
    var e = Date.now()
    var r = false
    Object.keys(t).forEach(function (o) {
      var /* [auto-meaningful-name] */tO$current = t[o].current
      if (tO$current) {
        r = true
        var /* [auto-meaningful-name] */tO$current$style = tO$current.style
        tO$current$style.transitionDuration = ".3s, .3s, .3s, .06s"
        if (n.current && e - n.current < 100) {
          tO$current$style.transitionDuration = "0s, 0s"
        }
      }
    })
    if (r) {
      n.current = Date.now()
    }
  })
  return [t]
}
var BT = function (e) {
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$percent = e.percent
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$strokeColor = e.strokeColor
  var /* [auto-meaningful-name] */e$strokeLinecap = e.strokeLinecap
  var /* [auto-meaningful-name] */e$strokeWidth = e.strokeWidth
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$trailColor = e.trailColor
  var /* [auto-meaningful-name] */e$trailWidth = e.trailWidth
  var /* [auto-meaningful-name] */e$transition = e.transition
  var d = Module_54.a(e, ["className", "percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "style", "trailColor", "trailWidth", "transition"])
  delete d.gapPosition
  var p = Array.isArray(e$percent) ? e$percent : [e$percent]
  var h = Array.isArray(e$strokeColor) ? e$strokeColor : [e$strokeColor]
  var m = PT(p)
  var g = Module_40.a(m, 1)[0]
  var _ = e$strokeWidth / 2
  var v = 100 - e$strokeWidth / 2
  var b = "M ".concat("round" === e$strokeLinecap ? _ : 0, ",").concat(_, "\n         L ").concat("round" === e$strokeLinecap ? v : 100, ",").concat(_)
  var y = "0 0 100 ".concat(e$strokeWidth)
  var E = 0
  return createElement("svg", Module_19.a({
    className: Classnames("".concat(e$prefixCls, "-line"), e$className),
    viewBox: y,
    preserveAspectRatio: "none",
    style: e$style
  }, d), createElement("path", {
    className: "".concat(e$prefixCls, "-line-trail"),
    d: b,
    strokeLinecap: e$strokeLinecap,
    stroke: e$trailColor,
    strokeWidth: e$trailWidth || e$strokeWidth,
    fillOpacity: "0"
  }), p.map(function (e, t) {
    var n = 1
    switch (e$strokeLinecap) {
      case "round":
        n = 1 - e$strokeWidth / 100
        break
      case "square":
        n = 1 - e$strokeWidth / 2 / 100
        break
      default:
        n = 1
    }
    var o = {
      strokeDasharray: "".concat(e * n, "px, 100px"),
      strokeDashoffset: "-".concat(E, "px"),
      transition: e$transition || "stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"
    }
    var s = h[t] || h[h.length - 1]
    E += e
    return createElement("path", {
      key: t,
      className: "".concat(e$prefixCls, "-line-path"),
      d: b,
      strokeLinecap: e$strokeLinecap,
      stroke: s,
      strokeWidth: e$strokeWidth,
      fillOpacity: "0",
      ref: g[t],
      style: o
    })
  }))
}
BT.defaultProps = LT
BT.displayName = "Line"
var FT = 0
function GT(e) {
  return +e.replace("%", "")
}
function WT(e) {
  return Array.isArray(e) ? e : [e]
}
function UT(e, t, n, r) {
  var o = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : 0
  var i = arguments.length > 5 ? arguments[5] : undefined
  var a = 50 - r / 2
  var s = 0
  var c = -a
  var l = 0
  var u = -2 * a
  switch (i) {
    case "left":
      s = -a
      c = 0
      l = 2 * a
      u = 0
      break
    case "right":
      s = a
      c = 0
      l = -2 * a
      u = 0
      break
    case "bottom":
      c = a
      u = 2 * a
  }
  var d = "M 50,50 m ".concat(s, ",").concat(c, "\n   a ").concat(a, ",").concat(a, " 0 1 1 ").concat(l, ",").concat(-u, "\n   a ").concat(a, ",").concat(a, " 0 1 1 ").concat(-l, ",").concat(u)
  var p = 2 * Math.PI * a
  var f = {
    stroke: "string" === typeof n ? n : undefined,
    strokeDasharray: "".concat(t / 100 * (p - o), "px ").concat(p, "px"),
    strokeDashoffset: "-".concat(o / 2 + e / 100 * (p - o), "px"),
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"
  }
  return {
    pathString: d,
    pathStyle: f
  }
}
var HT = function (e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$strokeWidth = e.strokeWidth
  var /* [auto-meaningful-name] */e$trailWidth = e.trailWidth
  var /* [auto-meaningful-name] */e$gapDegree = e.gapDegree
  var /* [auto-meaningful-name] */e$gapPosition = e.gapPosition
  var /* [auto-meaningful-name] */e$trailColor = e.trailColor
  var /* [auto-meaningful-name] */e$strokeLinecap = e.strokeLinecap
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$strokeColor = e.strokeColor
  var /* [auto-meaningful-name] */e$percent = e.percent
  var p = Module_54.a(e, ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"])
  var h = useMemo(function () {
    return FT += 1
  }, [])
  var m = UT(0, 100, e$trailColor, e$strokeWidth, e$gapDegree, e$gapPosition)
  var /* [auto-meaningful-name] */m$pathString = m.pathString
  var /* [auto-meaningful-name] */m$pathStyle = m.pathStyle
  var v = WT(e$percent)
  var b = WT(e$strokeColor)
  var y = b.find(function (e) {
    return "[object Object]" === Object.prototype.toString.call(e)
  })
  var E = PT(v)
  var O = Module_40.a(E, 1)[0]
  return createElement("svg", Module_19.a({
    className: Classnames("".concat(e$prefixCls, "-circle"), e$className),
    viewBox: "0 0 100 100",
    style: e$style
  }, p), y && createElement("defs", null, createElement("linearGradient", {
    id: "".concat(e$prefixCls, "-gradient-").concat(h),
    x1: "100%",
    y1: "0%",
    x2: "0%",
    y2: "0%"
  }, Object.keys(y).sort(function (e, t) {
    return GT(e) - GT(t)
  }).map(function (e, t) {
    return createElement("stop", {
      key: t,
      offset: e,
      stopColor: y[e]
    })
  }))), createElement("path", {
    className: "".concat(e$prefixCls, "-circle-trail"),
    d: m$pathString,
    stroke: e$trailColor,
    strokeLinecap: e$strokeLinecap,
    strokeWidth: e$trailWidth || e$strokeWidth,
    fillOpacity: "0",
    style: m$pathStyle
  }), function () {
    var e = 0
    return v.map(function (r, a) {
      var c = b[a] || b[b.length - 1]
      var l = "[object Object]" === Object.prototype.toString.call(c) ? "url(#".concat(e$prefixCls, "-gradient-").concat(h, ")") : ""
      var u = UT(e, r, c, e$strokeWidth, e$gapDegree, e$gapPosition)
      e += r
      return createElement("path", {
        key: a,
        className: "".concat(e$prefixCls, "-circle-path"),
        d: u.pathString,
        stroke: l,
        strokeLinecap: e$strokeLinecap,
        strokeWidth: e$strokeWidth,
        opacity: 0 === r ? 0 : 1,
        fillOpacity: "0",
        style: u.pathStyle,
        ref: O[a]
      })
    })
  }().reverse())
}
HT.defaultProps = LT
HT.displayName = "Circle"
var VT = HT
export { VT }
