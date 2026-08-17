/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-154
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_224 from /* 224 */"./224/index"
import * as /* [auto-meaningful-name] */Module_801 from /* 801 */"./801/index"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"./21"
import * as /* [auto-meaningful-name] */Module_486 from /* 486 */"./486"
import * as /* [auto-meaningful-name] */Module_79 from /* 79 */"./79/index"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"./35"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"./40/index"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import { useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useMemo, createContext, useContext, createElement, useState, forwardRef, useEffect, useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_812 from /* 812 */"./812"
import /* [auto-meaningful-name] */Module_8121 from /* 812 */"./812"
var $T = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onToggle = e.onToggle
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = useSelector(function (e) {
    return e.common.consoleMessages
  })
  var o = useSelector(function (e) {
    return e.common.consoleHeight
  })
  var i = useMemo(function () {
    return {
      errorCount: r.filter(function (e) {
        return "error" === e.get("type") || "lintError" === e.get("type") || "customError" === e.get("type")
      }).size,
      warningCount: r.filter(function (e) {
        return "warning" === e.get("type") || "customWarning" === e.get("type")
      }).size
    }
  }, [r])
  var /* [auto-meaningful-name] */i$errorCount = i.errorCount
  var /* [auto-meaningful-name] */i$warningCount = i.warningCount
  return React.createElement("div", {
    onClick: e$onToggle,
    className: Classnames(Module_8121.wrapper, (i$errorCount > 0 || i$warningCount > 0) && Module_8121.errorWarning),
    style: {
      bottom: o + 18
    }
  }, i$errorCount > 0 || i$warningCount > 0 ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: Module_8121.errorBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-console-error"
  }), i$errorCount), React.createElement("div", {
    className: Module_8121.warningBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-warning"
  }), i$warningCount)) : React.createElement(React.Fragment, null, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-console",
    className: Module_8121.iconConsole
  }), useIntl$formatMessage({
    id: "consolePanel"
  })))
})
var eS = function (e, t) {
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
}
var tS = createContext({
  siderHook: {
    addSider: function () {
      return null
    },
    removeSider: function () {
      return null
    }
  }
})
function nS(e) {
  var /* [auto-meaningful-name] */e$suffixCls = e.suffixCls
  var /* [auto-meaningful-name] */e$tagName = e.tagName
  var /* [auto-meaningful-name] */e$displayName = e.displayName
  return function (e) {
    var o = function (r) {
      var /* [auto-meaningful-name] */useContextModule_801$b$getPrefixCls = useContext(Module_801.b).getPrefixCls
      var /* [auto-meaningful-name] */r$prefixCls = r.prefixCls
      var a = useContextModule_801$b$getPrefixCls(e$suffixCls, r$prefixCls)
      return createElement(e, Module_19.a({
        prefixCls: a,
        tagName: e$tagName
      }, r))
    }
    o.displayName = e$displayName
    return o
  }
}
var rS = function (e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$tagName = e.tagName
  var i = eS(e, ["prefixCls", "className", "children", "tagName"])
  var a = Classnames(e$prefixCls, e$className)
  return createElement(e$tagName, Module_19.a({
    className: a
  }, i), e$children)
}
var oS = nS({
  suffixCls: "layout",
  tagName: "section",
  displayName: "Layout"
})(function (e) {
  var t
  var /* [auto-meaningful-name] */useContextModule_801$b$direction = useContext(Module_801.b).direction
  var r = useState([])
  var o = Module_40.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$hasSider = e.hasSider
  var /* [auto-meaningful-name] */e$tagName = e.tagName
  var p = eS(e, ["prefixCls", "className", "children", "hasSider", "tagName"])
  var h = Classnames(e$prefixCls, (t = {}, Module_35.a(t, "".concat(e$prefixCls, "-has-sider"), "boolean" === typeof e$hasSider ? e$hasSider : i.length > 0), Module_35.a(t, "".concat(e$prefixCls, "-rtl"), "rtl" === useContextModule_801$b$direction), t), e$className)
  var m = useMemo(function () {
    return {
      siderHook: {
        addSider: function (e) {
          a(function (t) {
            return [].concat(Module_79.a(t), [e])
          })
        },
        removeSider: function (e) {
          a(function (t) {
            return t.filter(function (t) {
              return t !== e
            })
          })
        }
      }
    }
  }, [])
  return createElement(tS.Provider, {
    value: m
  }, createElement(e$tagName, Module_19.a({
    className: h
  }, p), e$children))
})
var iS = nS({
  suffixCls: "layout-header",
  tagName: "header",
  displayName: "Header"
})(rS)
var aS = nS({
  suffixCls: "layout-footer",
  tagName: "footer",
  displayName: "Footer"
})(rS)
var sS = nS({
  suffixCls: "layout-content",
  tagName: "main",
  displayName: "Content"
})(rS)
var cS = oS
var lS = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "0 0 1024 1024",
      focusable: "false"
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"
        }
      }
    ]
  },
  name: "bars",
  theme: "outlined"
}
var uS = function (e, t) {
  return createElement(Module_224.a, Module_21.a(Module_21.a({}, e), {}, {
    ref: t,
    icon: lS
  }))
}
uS.displayName = "BarsOutlined"
var dS = forwardRef(uS)
var pS = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
        }
      }
    ]
  },
  name: "right",
  theme: "outlined"
}
var fS = function (e, t) {
  return createElement(Module_224.a, Module_21.a(Module_21.a({}, e), {}, {
    ref: t,
    icon: pS
  }))
}
fS.displayName = "RightOutlined"
var hS = forwardRef(fS)
var mS = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
        }
      }
    ]
  },
  name: "left",
  theme: "outlined"
}
var gS = function (e, t) {
  return createElement(Module_224.a, Module_21.a(Module_21.a({}, e), {}, {
    ref: t,
    icon: mS
  }))
}
gS.displayName = "LeftOutlined"
var _S = forwardRef(gS)
var vS = function (e) {
  return !isNaN(parseFloat(e)) && isFinite(e)
}
var bS = function (e, t) {
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
}
var yS = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}
var ES = createContext({})
var OS = function () {
  var e = 0
  return function () {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : ""
    e += 1
    return "".concat(t).concat(e)
  }
}()
var wS = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$trigger = e.trigger
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$defaultCollapsed = e.defaultCollapsed
  var s = undefined !== e$defaultCollapsed && e$defaultCollapsed
  var /* [auto-meaningful-name] */e$theme = e.theme
  var l = undefined === e$theme ? "dark" : e$theme
  var /* [auto-meaningful-name] */e$style = e.style
  var d = undefined === e$style ? {} : e$style
  var /* [auto-meaningful-name] */e$collapsible = e.collapsible
  var h = undefined !== e$collapsible && e$collapsible
  var /* [auto-meaningful-name] */e$reverseArrow = e.reverseArrow
  var g = undefined !== e$reverseArrow && e$reverseArrow
  var /* [auto-meaningful-name] */e$width = e.width
  var v = undefined === e$width ? 200 : e$width
  var /* [auto-meaningful-name] */e$collapsedWidth = e.collapsedWidth
  var y = undefined === e$collapsedWidth ? 80 : e$collapsedWidth
  var /* [auto-meaningful-name] */e$zeroWidthTriggerStyle = e.zeroWidthTriggerStyle
  var /* [auto-meaningful-name] */e$breakpoint = e.breakpoint
  var /* [auto-meaningful-name] */e$onCollapse = e.onCollapse
  var /* [auto-meaningful-name] */e$onBreakpoint = e.onBreakpoint
  var T = bS(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"])
  var /* [auto-meaningful-name] */useContextTS$siderHook = useContext(tS).siderHook
  var A = useState("collapsed" in T ? T.collapsed : s)
  var I = Module_40.a(A, 2)
  var j = I[0]
  var R = I[1]
  var k = useState(false)
  var x = Module_40.a(k, 2)
  var D = x[0]
  var M = x[1]
  useEffect(function () {
    if ("collapsed" in T) {
      R(T.collapsed)
    }
  }, [T.collapsed])
  var L = function (e, t) {
    if (!("collapsed" in T)) {
      R(e)
    }
    if (!(null === e$onCollapse || undefined === e$onCollapse)) {
      e$onCollapse(e, t)
    }
  }
  var P = useRef()
  P.current = function (e) {
    M(e.matches)
    if (!(null === e$onBreakpoint || undefined === e$onBreakpoint)) {
      e$onBreakpoint(e.matches)
    }
    if (j !== e.matches) {
      L(e.matches, "responsive")
    }
  }
  useEffect(function () {
    function e(e) {
      return P.current(e)
    }
    var t
    if ("undefined" !== typeof window) {
      var /* [auto-meaningful-name] */window$matchMedia = window.matchMedia
      if (window$matchMedia && e$breakpoint && e$breakpoint in yS) {
        t = window$matchMedia("(max-width: ".concat(yS[e$breakpoint], ")"))
        try {
          t.addEventListener("change", e)
        } catch (r) {
          t.addListener(e)
        }
        e(t)
      }
    }
    return function () {
      try {
        if (!(null === t || undefined === t)) {
          t.removeEventListener("change", e)
        }
      } catch (r) {
        if (!(null === t || undefined === t)) {
          t.removeListener(e)
        }
      }
    }
  }, [])
  useEffect(function () {
    var e = OS("ant-sider-")
    useContextTS$siderHook.addSider(e)
    return function () {
      return useContextTS$siderHook.removeSider(e)
    }
  }, [])
  var B = function () {
    L(!j, "clickTrigger")
  }
  var /* [auto-meaningful-name] */useContextModule_801$b$getPrefixCls = useContext(Module_801.b).getPrefixCls
  var G = useMemo(function () {
    return {
      siderCollapsed: j
    }
  }, [j])
  return createElement(ES.Provider, {
    value: G
  }, function () {
    var e
    var a = useContextModule_801$b$getPrefixCls("layout-sider", e$prefixCls)
    var s = Module_486.a(T, ["collapsed"])
    var c = j ? y : v
    var u = vS(c) ? "".concat(c, "px") : String(c)
    var p = 0 === parseFloat(String(y || 0)) ? createElement("span", {
      onClick: B,
      className: Classnames("".concat(a, "-zero-width-trigger"), "".concat(a, "-zero-width-trigger-").concat(g ? "right" : "left")),
      style: e$zeroWidthTriggerStyle
    }, e$trigger || createElement(dS, null)) : null
    var m = {
      expanded: g ? createElement(hS, null) : createElement(_S, null),
      collapsed: g ? createElement(_S, null) : createElement(hS, null)
    }[j ? "collapsed" : "expanded"]
    var _ = null !== e$trigger ? p || createElement("div", {
      className: "".concat(a, "-trigger"),
      onClick: B,
      style: {
        width: u
      }
    }, e$trigger || m) : null
    var b = Module_19.a(Module_19.a({}, d), {
      flex: "0 0 ".concat(u),
      maxWidth: u,
      minWidth: u,
      width: u
    })
    var O = Classnames(a, "".concat(a, "-").concat(l), (e = {}, Module_35.a(e, "".concat(a, "-collapsed"), !!j), Module_35.a(e, "".concat(a, "-has-trigger"), h && null !== e$trigger && !p), Module_35.a(e, "".concat(a, "-below"), !!D), Module_35.a(e, "".concat(a, "-zero-width"), 0 === parseFloat(u)), e), e$className)
    return createElement("aside", Module_19.a({
      className: O
    }, s, {
      style: b,
      ref: t
    }), createElement("div", {
      className: "".concat(a, "-children")
    }, e$children), h || D && p ? _ : null)
  }())
})
wS.displayName = "Sider"
var CS = wS
var TS = cS
TS.Header = iS
TS.Footer = aS
TS.Content = sS
TS.Sider = CS
var SS = TS
export { $T }
export { hS }
export { ES }
export { SS }
