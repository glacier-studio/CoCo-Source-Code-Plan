/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-199
 */

"use strict"

import { ES } from "./index__part-154"
import { GM } from "./index__part-196"
import * as /* [auto-meaningful-name] */Module_364 from /* 364 */"./364/index"
import * as /* [auto-meaningful-name] */Module_315 from /* 315 */"./315"
import * as /* [auto-meaningful-name] */Module_435 from /* 435 */"./435"
import * as /* [auto-meaningful-name] */Module_801 from /* 801 */"./801/index"
import * as /* [auto-meaningful-name] */Module_241 from /* 241 */"./241/index"
import * as /* [auto-meaningful-name] */Module_140 from /* 140 */"./140"
import * as /* [auto-meaningful-name] */Module_486 from /* 486 */"./486"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"./120"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"./106"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"./103"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"./35"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { createContext, useContext, createElement, Fragment, useMemo, Component } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_559 from /* 559 */"./559/index"
import * as /* [auto-meaningful-name] */Module_1034 from /* 1034 */"./1034"
var JM = createContext({
  prefixCls: "",
  firstLevel: true,
  inlineCollapsed: false
})
var $M = function (e) {
  var /* [auto-meaningful-name] */e$icon$props
  var n
  var /* [auto-meaningful-name] */e$popupClassName = e.popupClassName
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$title = e.title
  var a = useContext(JM)
  var /* [auto-meaningful-name] */a$prefixCls = a.prefixCls
  var /* [auto-meaningful-name] */a$inlineCollapsed = a.inlineCollapsed
  var /* [auto-meaningful-name] */a$antdMenuTheme = a.antdMenuTheme
  var u = Module_559.f()
  if (e$icon) {
    var d = Module_315.b(e$title) && "span" === e$title.type
    n = createElement(Fragment, null, Module_315.a(e$icon, {
      className: Classnames(Module_315.b(e$icon) ? null === (e$icon$props = e$icon.props) || undefined === e$icon$props ? undefined : e$icon$props.className : "", "".concat(a$prefixCls, "-item-icon"))
    }), d ? e$title : createElement("span", {
      className: "".concat(a$prefixCls, "-title-content")
    }, e$title))
  } else {
    n = a$inlineCollapsed && !u.length && e$title && "string" === typeof e$title ? createElement("div", {
      className: "".concat(a$prefixCls, "-inline-collapsed-noicon")
    }, e$title.charAt(0)) : createElement("span", {
      className: "".concat(a$prefixCls, "-title-content")
    }, e$title)
  }
  var p = useMemo(function () {
    return Module_19.a(Module_19.a({}, a), {
      firstLevel: false
    })
  }, [a])
  return createElement(JM.Provider, {
    value: p
  }, createElement(Module_559.d, Module_19.a({}, Module_486.a(e, ["icon"]), {
    title: n,
    popupClassName: Classnames(a$prefixCls, "".concat(a$prefixCls, "-").concat(a$antdMenuTheme), e$popupClassName)
  })))
}
function eL(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  var n = []
  React.Children.forEach(e, function (e) {
    if (undefined !== e && null !== e || t.keepEmpty) {
      if (Array.isArray(e)) {
        n = n.concat(eL(e))
      } else {
        if (Module_241.isFragment(e) && e.props) {
          n = n.concat(eL(e.props.children, t))
        } else {
          n.push(e)
        }
      }
    }
  })
  return n
}
var tL = function (e, t) {
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
var nL = function (e) {
  Module_120.a(n, e)
  var t = Module_140.a(n)
  function n() {
    var e
    Module_103.a(this, n);
    (e = t.apply(this, arguments)).renderItem = function (t) {
      var n
      var /* [auto-meaningful-name] */e$props1$icon$props
      var /* [auto-meaningful-name] */t$siderCollapsed = t.siderCollapsed
      var /* [auto-meaningful-name] */e$context = e.context
      var /* [auto-meaningful-name] */e$context$prefixCls = e$context.prefixCls
      var /* [auto-meaningful-name] */e$context$firstLevel = e$context.firstLevel
      var /* [auto-meaningful-name] */e$context$inlineCollapsed = e$context.inlineCollapsed
      var /* [auto-meaningful-name] */e$context$direction = e$context.direction
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$className = e$props.className
      var /* [auto-meaningful-name] */e$props$children = e$props.children
      var /* [auto-meaningful-name] */e$props1 = e.props
      var /* [auto-meaningful-name] */e$props1$title = e$props1.title
      var /* [auto-meaningful-name] */e$props1$icon = e$props1.icon
      var /* [auto-meaningful-name] */e$props1$danger = e$props1.danger
      var v = tL(e$props1, ["title", "icon", "danger"])
      var b = e$props1$title
      if ("undefined" === typeof e$props1$title) {
        b = e$context$firstLevel ? e$props$children : ""
      } else {
        if (false === e$props1$title) {
          b = ""
        }
      }
      var y = {
        title: b
      }
      if (!(t$siderCollapsed || e$context$inlineCollapsed)) {
        y.title = null
        y.visible = false
      }
      var /* [auto-meaningful-name] */eLE$props$children$length = eL(e$props$children).length
      return createElement(Module_748.a, Module_19.a({}, y, {
        placement: "rtl" === e$context$direction ? "left" : "right",
        overlayClassName: "".concat(e$context$prefixCls, "-inline-collapsed-tooltip")
      }), createElement(Module_559.b, Module_19.a({}, v, {
        className: Classnames((n = {}, Module_35.a(n, "".concat(e$context$prefixCls, "-item-danger"), e$props1$danger), Module_35.a(n, "".concat(e$context$prefixCls, "-item-only-child"), 1 === (e$props1$icon ? eLE$props$children$length + 1 : eLE$props$children$length)), n), e$props$className),
        title: "string" === typeof e$props1$title ? e$props1$title : undefined
      }), Module_315.a(e$props1$icon, {
        className: Classnames(Module_315.b(e$props1$icon) ? null === (e$props1$icon$props = e$props1$icon.props) || undefined === e$props1$icon$props ? undefined : e$props1$icon$props.className : "", "".concat(e$context$prefixCls, "-item-icon"))
      }), e.renderItemChildren(e$context$inlineCollapsed)))
    }
    return e
  }
  Module_106.a(n, [
    {
      key: "renderItemChildren",
      value: function (e) {
        var /* [auto-meaningful-name] */this$context = this.context
        var /* [auto-meaningful-name] */this$context$prefixCls = this$context.prefixCls
        var /* [auto-meaningful-name] */this$context$firstLevel = this$context.firstLevel
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$icon = this$props.icon
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var s = createElement("span", {
          className: "".concat(this$context$prefixCls, "-title-content")
        }, this$props$children)
        return (!this$props$icon || Module_315.b(this$props$children) && "span" === this$props$children.type) && this$props$children && e && this$context$firstLevel && "string" === typeof this$props$children ? createElement("div", {
          className: "".concat(this$context$prefixCls, "-inline-collapsed-noicon")
        }, this$props$children.charAt(0)) : s
      }
    }, {
      key: "render",
      value: function () {
        return createElement(ES.Consumer, null, this.renderItem)
      }
    }
  ])
  return n
}(Component)
nL.contextType = JM
var rL = function (e, t) {
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
var oL = function (e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$dashed = e.dashed
  var o = rL(e, ["prefixCls", "className", "dashed"])
  var i = (0, useContext(Module_801.b).getPrefixCls)("menu", e$prefixCls)
  var a = Classnames(Module_35.a({}, "".concat(i, "-item-divider-dashed"), !!e$dashed), e$className)
  return createElement(Module_559.a, Module_19.a({
    className: a
  }, o))
}
var iL = function (e, t) {
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
var aL = function (e) {
  Module_120.a(n, e)
  var t = Module_140.a(n)
  function n(e) {
    var r
    Module_103.a(this, n);
    (r = t.call(this, e)).renderMenu = function (e) {
      var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
      var /* [auto-meaningful-name] */e$getPrefixCls = e.getPrefixCls
      var /* [auto-meaningful-name] */e$direction = e.direction
      var i = e$getPrefixCls()
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$prefixCls = r$props.prefixCls
      var /* [auto-meaningful-name] */r$props$className = r$props.className
      var /* [auto-meaningful-name] */r$props$theme = r$props.theme
      var /* [auto-meaningful-name] */r$props$expandIcon = r$props.expandIcon
      var d = iL(r$props, ["prefixCls", "className", "theme", "expandIcon"])
      var p = Module_486.a(d, ["siderCollapsed", "collapsedWidth"])
      var h = r.getInlineCollapsed()
      var m = {
        horizontal: {
          motionName: "".concat(i, "-slide-up")
        },
        inline: Module_435.a,
        other: {
          motionName: "".concat(i, "-zoom-big")
        }
      }
      var g = e$getPrefixCls("menu", r$props$prefixCls)
      var _ = Classnames("".concat(g, "-").concat(r$props$theme), r$props$className)
      var v = Module_1034.a(function (e, t, n, r) {
        return {
          prefixCls: e,
          inlineCollapsed: t || false,
          antdMenuTheme: n,
          direction: r,
          firstLevel: true
        }
      })(g, h, r$props$theme, e$direction)
      return createElement(JM.Provider, {
        value: v
      }, createElement(Module_559.e, Module_19.a({
        getPopupContainer: e$getPopupContainer,
        overflowedIndicator: createElement(GM, null),
        overflowedIndicatorPopupClassName: "".concat(g, "-").concat(r$props$theme)
      }, p, {
        inlineCollapsed: h,
        className: _,
        prefixCls: g,
        direction: e$direction,
        defaultMotions: m,
        expandIcon: Module_315.a(r$props$expandIcon, {
          className: "".concat(g, "-submenu-expand-icon")
        })
      })))
    }
    Module_364.a(!("inlineCollapsed" in e && "inline" !== e.mode), "Menu", "`inlineCollapsed` should only be used when `mode` is inline.")
    Module_364.a(!(undefined !== e.siderCollapsed && "inlineCollapsed" in e), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")
    return r
  }
  Module_106.a(n, [
    {
      key: "getInlineCollapsed",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$inlineCollapsed = this$props.inlineCollapsed
        var /* [auto-meaningful-name] */this$props$siderCollapsed = this$props.siderCollapsed
        return undefined !== this$props$siderCollapsed ? this$props$siderCollapsed : this$props$inlineCollapsed
      }
    }, {
      key: "render",
      value: function () {
        return createElement(Module_801.a, null, this.renderMenu)
      }
    }
  ])
  return n
}(Component)
aL.defaultProps = {
  theme: "light"
}
var sL = function (e) {
  Module_120.a(n, e)
  var t = Module_140.a(n)
  function n() {
    Module_103.a(this, n)
    return t.apply(this, arguments)
  }
  Module_106.a(n, [
    {
      key: "render",
      value: function () {
        var e = this
        return createElement(ES.Consumer, null, function (t) {
          return createElement(aL, Module_19.a({}, e.props, t))
        })
      }
    }
  ])
  return n
}(Component)
sL.Divider = oL
sL.Item = nL
sL.SubMenu = $M
sL.ItemGroup = Module_559.c
var cL = sL
export { cL }
