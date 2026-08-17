/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：316__part-3
 */

"use strict"

import { d, p } from "./index__part-0"
import { I } from "./index__part-2"
import * as /* [auto-meaningful-name] */Module_2678 from /* 2678 */"./2678"
import * as /* [auto-meaningful-name] */Module_154 from /* 154 */"../../../551/1211/699/154/index"
import * as /* [auto-meaningful-name] */Module_1550 from /* 1550 */"../366/1550"
import * as /* [auto-meaningful-name] */Module_709 from /* 709 */"../../../551/1211/709/index"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../54"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_98 from /* 98 */"../../../551/1211/98"
import { createElement, useEffect, useLayoutEffect, useRef, Fragment, createContext } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_2684 from /* 2684 */"./2684/index"
function F(e, t) {
  return Array.isArray(t) ? t.every(function (t) {
    return -1 !== e.indexOf(t)
  }) : -1 !== e.indexOf(t)
}
var P = 310
var N = 325
var M = 305
var L = Module_709.a(function (e) {
  return {
    staticWrapperRoot: {
      overflow: "hidden",
      minWidth: P,
      display: "flex",
      flexDirection: "column",
      backgroundColor: e.palette.background.paper
    }
  }
}, {
  name: "MuiPickersStaticWrapper"
})
var j = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var n = L()
  return createElement("div", {
    className: n.staticWrapperRoot,
    children: e$children
  })
}
var U = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$onAccept = e.onAccept
  var /* [auto-meaningful-name] */e$onDismiss = e.onDismiss
  var /* [auto-meaningful-name] */e$onClear = e.onClear
  var /* [auto-meaningful-name] */e$onSetToday = e.onSetToday
  var /* [auto-meaningful-name] */e$okLabel = e.okLabel
  var /* [auto-meaningful-name] */e$cancelLabel = e.cancelLabel
  var /* [auto-meaningful-name] */e$clearLabel = e.clearLabel
  var /* [auto-meaningful-name] */e$todayLabel = e.todayLabel
  var /* [auto-meaningful-name] */e$clearable = e.clearable
  var /* [auto-meaningful-name] */e$showTodayButton = e.showTodayButton
  e.showTabs
  var /* [auto-meaningful-name] */e$wider = e.wider
  var b = Module_54.a(e, ["children", "classes", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"])
  return createElement(I, Module_19.a({
    role: "dialog",
    onClose: e$onDismiss,
    classes: {
      paper: Module_98.a(e$classes.dialogRoot, e$wider && e$classes.dialogRootWider)
    }
  }, b), createElement(p, {
    children: e$children,
    className: e$classes.dialog
  }), createElement(d, {
    classes: {
      root: Module_98.a((e$clearable || e$showTodayButton) && e$classes.withAdditionalAction)
    }
  }, e$clearable && createElement(Module_2678.a, {
    color: "primary",
    onClick: e$onClear
  }, e$clearLabel), e$showTodayButton && createElement(Module_2678.a, {
    color: "primary",
    onClick: e$onSetToday
  }, e$todayLabel), e$cancelLabel && createElement(Module_2678.a, {
    color: "primary",
    onClick: e$onDismiss
  }, e$cancelLabel), e$okLabel && createElement(Module_2678.a, {
    color: "primary",
    onClick: e$onAccept
  }, e$okLabel)))
}
U.displayName = "ModalDialog"
var H = Module_1550.a({
  dialogRoot: {
    minWidth: P
  },
  dialogRootWider: {
    minWidth: N
  },
  dialog: {
    "&:first-child": {
      padding: 0
    }
  },
  withAdditionalAction: {
    justifyContent: "flex-start",
    "& > *:first-child": {
      marginRight: "auto"
    }
  }
})
var V = Module_154.a(H, {
  name: "MuiPickersModal"
})(U)
var G = "undefined" === typeof window ? useEffect : useLayoutEffect
function z(e, t) {
  var n = t[e.key]
  if (n) {
    n()
    e.preventDefault()
  }
}
function Q(e, t) {
  var n = useRef(t)
  n.current = t
  G(function () {
    if (e) {
      var t = function (e) {
        z(e, n.current)
      }
      window.addEventListener("keydown", t)
      return function () {
        window.removeEventListener("keydown", t)
      }
    }
  }, [e])
}
var W = function (e) {
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$okLabel = e.okLabel
  var /* [auto-meaningful-name] */e$cancelLabel = e.cancelLabel
  var /* [auto-meaningful-name] */e$clearLabel = e.clearLabel
  var /* [auto-meaningful-name] */e$todayLabel = e.todayLabel
  var /* [auto-meaningful-name] */e$showTodayButton = e.showTodayButton
  var /* [auto-meaningful-name] */e$clearable = e.clearable
  var /* [auto-meaningful-name] */e$DialogProps = e.DialogProps
  var /* [auto-meaningful-name] */e$showTabs = e.showTabs
  var /* [auto-meaningful-name] */e$wider = e.wider
  var /* [auto-meaningful-name] */e$InputComponent = e.InputComponent
  var /* [auto-meaningful-name] */e$DateInputProps = e.DateInputProps
  var /* [auto-meaningful-name] */e$onClear = e.onClear
  var /* [auto-meaningful-name] */e$onAccept = e.onAccept
  var /* [auto-meaningful-name] */e$onDismiss = e.onDismiss
  var /* [auto-meaningful-name] */e$onSetToday = e.onSetToday
  var b = Module_54.a(e, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "InputComponent", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday"])
  Q(e$open, {
    Enter: e$onAccept
  })
  return createElement(Fragment, null, createElement(e$InputComponent, Module_19.a({}, b, e$DateInputProps)), createElement(V, Module_19.a({
    wider: e$wider,
    showTabs: e$showTabs,
    open: e$open,
    onClear: e$onClear,
    onAccept: e$onAccept,
    onDismiss: e$onDismiss,
    onSetToday: e$onSetToday,
    clearLabel: e$clearLabel,
    todayLabel: e$todayLabel,
    okLabel: e$okLabel,
    cancelLabel: e$cancelLabel,
    clearable: e$clearable,
    showTodayButton: e$showTodayButton,
    children: e$children
  }, e$DialogProps)))
}
W.defaultProps = {
  okLabel: "OK",
  cancelLabel: "Cancel",
  clearLabel: "Clear",
  todayLabel: "Today",
  clearable: false,
  showTodayButton: false
}
var K = function (e) {
  var /* [auto-meaningful-name] */e$open = e.open
  e.wider
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$PopoverProps = e.PopoverProps
  e.onClear
  var /* [auto-meaningful-name] */e$onDismiss = e.onDismiss
  e.onSetToday
  var /* [auto-meaningful-name] */e$onAccept = e.onAccept
  e.showTabs
  var /* [auto-meaningful-name] */e$DateInputProps = e.DateInputProps
  var /* [auto-meaningful-name] */e$InputComponent = e.InputComponent
  var f = Module_54.a(e, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "InputComponent"])
  var d = useRef()
  Q(e$open, {
    Enter: e$onAccept
  })
  return createElement(Fragment, null, createElement(e$InputComponent, Module_19.a({}, f, e$DateInputProps, {
    inputRef: d
  })), createElement(Module_2684.a, Module_19.a({
    open: e$open,
    onClose: e$onDismiss,
    anchorEl: d.current,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    children: e$children
  }, e$PopoverProps)))
}
var X = createContext(null)
var Y = function (e) {
  var /* [auto-meaningful-name] */e$variant = e.variant
  var n = Module_54.a(e, ["variant"])
  var i = function (e) {
    switch (e) {
      case "inline":
        return K
      case "static":
        return j
      default:
        return W
    }
  }(e$variant)
  return createElement(X.Provider, {
    value: e$variant || "dialog"
  }, createElement(i, n))
}
export { F }
export { P }
export { N }
export { M }
export { G }
export { z }
export { X }
export { Y }
