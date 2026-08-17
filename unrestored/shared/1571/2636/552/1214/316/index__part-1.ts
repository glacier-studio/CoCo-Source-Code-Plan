/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：316__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_154 from /* 154 */"../../../551/1211/699/154/index"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../54"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_98 from /* 98 */"../../../551/1211/98"
import { forwardRef, useRef, createElement, cloneElement } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../../../35"
import * as /* [auto-meaningful-name] */Module_233 from /* 233 */"../../../551/1211/699/233"
import * as /* [auto-meaningful-name] */Module_2682 from /* 2682 */"./2682/index"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../../../40/index"
import * as /* [auto-meaningful-name] */Module_1546 from /* 1546 */"../../../551/1211/699/1546"
import * as /* [auto-meaningful-name] */Module_696 from /* 696 */"./696"
import * as /* [auto-meaningful-name] */Module_690 from /* 690 */"../690/index"
import * as /* [auto-meaningful-name] */Module_701 from /* 701 */"./701"
import * as /* [auto-meaningful-name] */Module_287 from /* 287 */"./287"
var x = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}
var C = {
  enter: Module_696.b.enteringScreen,
  exit: Module_696.b.leavingScreen
}
var O = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$disableStrictModeCompat = e.disableStrictModeCompat
  var s = undefined !== e$disableStrictModeCompat && e$disableStrictModeCompat
  var c = e.in
  var /* [auto-meaningful-name] */e$onEnter = e.onEnter
  var /* [auto-meaningful-name] */e$onEntered = e.onEntered
  var /* [auto-meaningful-name] */e$onEntering = e.onEntering
  var /* [auto-meaningful-name] */e$onExit = e.onExit
  var /* [auto-meaningful-name] */e$onExited = e.onExited
  var /* [auto-meaningful-name] */e$onExiting = e.onExiting
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$TransitionComponent = e.TransitionComponent
  var g = undefined === e$TransitionComponent ? Module_1546.a : e$TransitionComponent
  var /* [auto-meaningful-name] */e$timeout = e.timeout
  var O = undefined === e$timeout ? C : e$timeout
  var k = Module_54.a(e, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"])
  var S = Module_690.a()
  var T = S.unstable_strictMode && !s
  var B = useRef(null)
  var D = Module_287.a(e$children.ref, t)
  var I = Module_287.a(T ? B : undefined, D)
  var R = function (e) {
    return function (t, n) {
      if (e) {
        var r = T ? [B.current, t] : [t, n]
        var i = Module_40.a(r, 2)
        var o = i[0]
        var a = i[1]
        if (undefined === a) {
          e(o)
        } else {
          e(o, a)
        }
      }
    }
  }
  var F = R(e$onEntering)
  var P = R(function (e, t) {
    Module_701.b(e)
    var n = Module_701.a({
      style: e$style,
      timeout: O
    }, {
      mode: "enter"
    })
    e.style.webkitTransition = S.transitions.create("opacity", n)
    e.style.transition = S.transitions.create("opacity", n)
    if (e$onEnter) {
      e$onEnter(e, t)
    }
  })
  var N = R(e$onEntered)
  var M = R(e$onExiting)
  var L = R(function (e) {
    var t = Module_701.a({
      style: e$style,
      timeout: O
    }, {
      mode: "exit"
    })
    e.style.webkitTransition = S.transitions.create("opacity", t)
    e.style.transition = S.transitions.create("opacity", t)
    if (e$onExit) {
      e$onExit(e)
    }
  })
  var j = R(e$onExited)
  return createElement(g, Module_19.a({
    appear: true,
    in: c,
    nodeRef: T ? B : undefined,
    onEnter: P,
    onEntered: N,
    onEntering: F,
    onExit: L,
    onExited: j,
    onExiting: M,
    timeout: O
  }, k), function (e, t) {
    return cloneElement(e$children, Module_19.a({
      style: Module_19.a({
        opacity: 0,
        visibility: "exited" !== e || c ? undefined : "hidden"
      }, x[e], e$style, e$children.props.style),
      ref: I
    }, t))
  })
})
var k = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$invisible = e.invisible
  var l = undefined !== e$invisible && e$invisible
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$transitionDuration = e.transitionDuration
  var /* [auto-meaningful-name] */e$TransitionComponent = e.TransitionComponent
  var p = undefined === e$TransitionComponent ? O : e$TransitionComponent
  var _ = Module_54.a(e, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"])
  return createElement(p, Module_19.a({
    in: e$open,
    timeout: e$transitionDuration
  }, _), createElement("div", {
    className: Module_98.a(e$classes.root, e$className, l && e$classes.invisible),
    "aria-hidden": true,
    ref: t
  }, e$children))
})
var S = Module_154.a({
  root: {
    zIndex: -1,
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
  },
  invisible: {
    backgroundColor: "transparent"
  }
}, {
  name: "MuiBackdrop"
})(k)
export { O }
export { S }
