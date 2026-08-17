/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1543__part-2
 */

"use strict"

import { C } from "./index__part-0"
import { J, $, ee } from "./index__part-1"
import * as /* [auto-meaningful-name] */Module_1021 from /* 1021 */"./1021"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_1020 from /* 1020 */"./1020"
import * as /* [auto-meaningful-name] */Module_491 from /* 491 */"./491"
import * as /* [auto-meaningful-name] */Module_432 from /* 432 */"./432"
import * as /* [auto-meaningful-name] */Module_482 from /* 482 */"./482"
import * as /* [auto-meaningful-name] */Module_561 from /* 561 */"./561"
import * as /* [auto-meaningful-name] */Module_229 from /* 229 */"./229"
import /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import * as /* [auto-meaningful-name] */Module_140 from /* 140 */"../140"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../120"
import * as /* [auto-meaningful-name] */Module_142 from /* 142 */"../142"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../106"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../103"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../19"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"../21"
import { forwardRef, useRef, useState, useMemo, useEffect, useImperativeHandle, Children, createElement, createContext, createRef, cloneElement, Component, Fragment } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../54"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../40/index"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../35"
import * as /* [auto-meaningful-name] */Module_558 from /* 558 */"./558/index"
import * as /* [auto-meaningful-name] */Module_216 from /* 216 */"../627/216"
import /* [auto-meaningful-name] */Module_2161 from /* 216 */"../627/216"
import * as /* [auto-meaningful-name] */Module_326 from /* 326 */"../627/326"
var ie = ["measure", "align", null, "motion"]
var ae = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$stretch = e.stretch
  var /* [auto-meaningful-name] */e$destroyPopupOnHide = e.destroyPopupOnHide
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$align = e.align
  var /* [auto-meaningful-name] */e$point = e.point
  var /* [auto-meaningful-name] */e$getRootDomNode = e.getRootDomNode
  var /* [auto-meaningful-name] */e$getClassNameFromAlign = e.getClassNameFromAlign
  var /* [auto-meaningful-name] */e$onAlign = e.onAlign
  var /* [auto-meaningful-name] */e$onMouseEnter = e.onMouseEnter
  var /* [auto-meaningful-name] */e$onMouseLeave = e.onMouseLeave
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onTouchStart = e.onTouchStart
  var S = useRef()
  var A = useRef()
  var I = useState()
  var j = Module_40.a(I, 2)
  var N = j[0]
  var R = j[1]
  var k = function (e) {
    var t = useState({
      width: 0,
      height: 0
    })
    var n = Module_40.a(t, 2)
    var r = n[0]
    var i = n[1]
    return [
      useMemo(function () {
        var t = {}
        if (e) {
          var /* [auto-meaningful-name] */r$width = r.width
          var /* [auto-meaningful-name] */r$height = r.height
          if (-1 !== e.indexOf("height") && r$height) {
            t.height = r$height
          } else {
            if (-1 !== e.indexOf("minHeight") && r$height) {
              t.minHeight = r$height
            }
          }
          if (-1 !== e.indexOf("width") && r$width) {
            t.width = r$width
          } else {
            if (-1 !== e.indexOf("minWidth") && r$width) {
              t.minWidth = r$width
            }
          }
        }
        return t
      }, [e, r]), function (e) {
        i({
          width: e.offsetWidth,
          height: e.offsetHeight
        })
      }
    ]
  }(e$stretch)
  var x = Module_40.a(k, 2)
  var D = x[0]
  var M = x[1]
  var L = function (e, t) {
    var n = useState(null)
    var r = Module_40.a(n, 2)
    var i = r[0]
    var s = r[1]
    var c = useRef()
    var l = useRef(false)
    function u(e) {
      if (!l.current) {
        s(e)
      }
    }
    function d() {
      Module_229.a.cancel(c.current)
    }
    useEffect(function () {
      u("measure")
    }, [e])
    useEffect(function () {
      switch (i) {
        case "measure":
          t()
      }
      if (i) {
        c.current = Module_229.a(Module_326.a(Module_2161.mark(function e() {
          var t
          var n
          return Module_2161.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = ie.indexOf(i)
                  if ((n = ie[t + 1]) && -1 !== t) {
                    u(n)
                  }
                case 3:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        })))
      }
    }, [i])
    useEffect(function () {
      return function () {
        l.current = true
        d()
      }
    }, [])
    return [
      i, function (e) {
        d()
        c.current = Module_229.a(function () {
          u(function (e) {
            switch (i) {
              case "align":
                return "motion"
              case "motion":
                return "stable"
            }
            return e
          })
          if (!(null === e || undefined === e)) {
            e()
          }
        })
      }
    ]
  }(e$visible, function () {
    if (e$stretch) {
      M(e$getRootDomNode())
    }
  })
  var P = Module_40.a(L, 2)
  var B = P[0]
  var F = P[1]
  var G = useRef()
  function W() {
    var /* [auto-meaningful-name] */S$current
    if (!(null === (S$current = S.current) || undefined === S$current)) {
      S$current.forceAlign()
    }
  }
  function U(e, t) {
    var n = e$getClassNameFromAlign(t)
    if (N !== n) {
      R(n)
    }
    if ("align" === B) {
      if (N !== n) {
        Promise.resolve().then(function () {
          W()
        })
      } else {
        F(function () {
          var /* [auto-meaningful-name] */G$current
          if (!(null === (G$current = G.current) || undefined === G$current)) {
            G$current.call(G)
          }
        })
      }
      if (!(null === e$onAlign || undefined === e$onAlign)) {
        e$onAlign(e, t)
      }
    }
  }
  var H = Module_21.a({}, $(e))
  function V() {
    return new Promise(function (e) {
      G.current = e
    })
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = H[e]
    H[e] = function (e, n) {
      F()
      return null === t || undefined === t ? undefined : t(e, n)
    }
  })
  useEffect(function () {
    if (!(H.motionName || "motion" !== B)) {
      F()
    }
  }, [H.motionName, B])
  useImperativeHandle(t, function () {
    return {
      forceAlign: W,
      getElement: function () {
        return A.current
      }
    }
  })
  var z = Module_21.a(Module_21.a({}, D), {}, {
    zIndex: e$zIndex,
    opacity: "motion" !== B && "stable" !== B && e$visible ? 0 : undefined,
    pointerEvents: "stable" === B ? undefined : "none"
  }, e$style)
  var Y = true
  if (!(!(null === e$align || undefined === e$align ? undefined : e$align.points) || "align" !== B && "stable" !== B)) {
    Y = false
  }
  var K = e$children
  if (Children.count(e$children) > 1) {
    K = createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  return createElement(J, Module_19.a({
    visible: e$visible,
    ref: A,
    leavedClassName: "".concat(e$prefixCls, "-hidden")
  }, H, {
    onAppearPrepare: V,
    onEnterPrepare: V,
    removeOnLeave: e$destroyPopupOnHide,
    forceRender: e$forceRender
  }), function (e, t) {
    var /* [auto-meaningful-name] */e$className1 = e.className
    var /* [auto-meaningful-name] */e$style1 = e.style
    var c = Classnames(e$prefixCls, e$className, N, e$className1)
    return createElement(Module_558.a, {
      target: e$point || e$getRootDomNode,
      key: "popup",
      ref: S,
      monitorWindowResize: true,
      disabled: Y,
      align: e$align,
      onAlign: U
    }, createElement("div", {
      ref: t,
      className: c,
      onMouseEnter: e$onMouseEnter,
      onMouseLeave: e$onMouseLeave,
      onMouseDownCapture: e$onMouseDown,
      onTouchStartCapture: e$onTouchStart,
      style: Module_21.a(Module_21.a({}, e$style1), z)
    }, K))
  })
})
ae.displayName = "PopupInner"
var se = ae
var ce = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$mobile = e.mobile
  var /* [auto-meaningful-name] */E$mobileUndefinedE$mobileE$mobile$popupClassName = (e$mobile = undefined === e$mobile ? {} : e$mobile).popupClassName
  var /* [auto-meaningful-name] */e$mobile$popupStyle = e$mobile.popupStyle
  var /* [auto-meaningful-name] */e$mobile$popupMotion = e$mobile.popupMotion
  var f = undefined === e$mobile$popupMotion ? {} : e$mobile$popupMotion
  var /* [auto-meaningful-name] */e$mobile$popupRender = e$mobile.popupRender
  var m = useRef()
  useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return m.current
      }
    }
  })
  var g = Module_21.a({
    zIndex: e$zIndex
  }, e$mobile$popupStyle)
  var _ = e$children
  if (Children.count(e$children) > 1) {
    _ = createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  if (e$mobile$popupRender) {
    _ = e$mobile$popupRender(_)
  }
  return createElement(J, Module_19.a({
    visible: e$visible,
    ref: m,
    removeOnLeave: true
  }, f), function (e, t) {
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */e$style = e.style
    var i = Classnames(e$prefixCls, E$mobileUndefinedE$mobileE$mobile$popupClassName, e$className)
    return createElement("div", {
      ref: t,
      className: i,
      style: Module_21.a(Module_21.a({}, e$style), g)
    }, _)
  })
})
ce.displayName = "MobilePopupInner"
var le = ce
var ue = ["visible", "mobile"]
var de = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$mobile = e.mobile
  var l = Module_54.a(e, ue)
  var u = useState(e$visible)
  var d = Module_40.a(u, 2)
  var p = d[0]
  var f = d[1]
  var h = useState(false)
  var m = Module_40.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = Module_21.a(Module_21.a({}, l), {}, {
    visible: p
  })
  useEffect(function () {
    f(e$visible)
    if (e$visible && e$mobile) {
      _(Module_1021.a())
    }
  }, [e$visible, e$mobile])
  var b = g ? createElement(le, Module_19.a({}, v, {
    mobile: e$mobile,
    ref: t
  })) : createElement(se, Module_19.a({}, v, {
    ref: t
  }))
  return createElement("div", null, createElement(ee, v), b)
})
de.displayName = "Popup"
var pe = de
var fe = createContext(null)
function he() {}
function me() {
  return ""
}
function ge(e) {
  return e ? e.ownerDocument : window.document
}
var _e = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"]
var ve = function (e) {
  var t = function (t) {
    Module_120.a(r, t)
    var n = Module_140.a(r)
    function r(e) {
      var t
      var o
      Module_103.a(this, r);
      (t = n.call(this, e)).popupRef = createRef()
      t.triggerRef = createRef()
      t.attachId = undefined
      t.clickOutsideHandler = undefined
      t.touchOutsideHandler = undefined
      t.contextMenuOutsideHandler1 = undefined
      t.contextMenuOutsideHandler2 = undefined
      t.mouseDownTimeout = undefined
      t.focusTime = undefined
      t.preClickTime = undefined
      t.preTouchTime = undefined
      t.delayTimer = undefined
      t.hasPopupMouseDown = undefined
      t.onMouseEnter = function (e) {
        var /* [auto-meaningful-name] */t$props$mouseEnterDelay = t.props.mouseEnterDelay
        t.fireEvents("onMouseEnter", e)
        t.delaySetPopupVisible(true, t$props$mouseEnterDelay, t$props$mouseEnterDelay ? null : e)
      }
      t.onMouseMove = function (e) {
        t.fireEvents("onMouseMove", e)
        t.setPoint(e)
      }
      t.onMouseLeave = function (e) {
        t.fireEvents("onMouseLeave", e)
        t.delaySetPopupVisible(false, t.props.mouseLeaveDelay)
      }
      t.onPopupMouseEnter = function () {
        t.clearDelayTimer()
      }
      t.onPopupMouseLeave = function (e) {
        var /* [auto-meaningful-name] */t$popupRef$current
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && Module_561.a(null === (t$popupRef$current = t.popupRef.current) || undefined === t$popupRef$current ? undefined : t$popupRef$current.getElement(), e.relatedTarget))) {
          t.delaySetPopupVisible(false, t.props.mouseLeaveDelay)
        }
      }
      t.onFocus = function (e) {
        t.fireEvents("onFocus", e)
        t.clearDelayTimer()
        if (t.isFocusToShow()) {
          t.focusTime = Date.now()
          t.delaySetPopupVisible(true, t.props.focusDelay)
        }
      }
      t.onMouseDown = function (e) {
        t.fireEvents("onMouseDown", e)
        t.preClickTime = Date.now()
      }
      t.onTouchStart = function (e) {
        t.fireEvents("onTouchStart", e)
        t.preTouchTime = Date.now()
      }
      t.onBlur = function (e) {
        t.fireEvents("onBlur", e)
        t.clearDelayTimer()
        if (t.isBlurToHide()) {
          t.delaySetPopupVisible(false, t.props.blurDelay)
        }
      }
      t.onContextMenu = function (e) {
        e.preventDefault()
        t.fireEvents("onContextMenu", e)
        t.setPopupVisible(true, e)
      }
      t.onContextMenuClose = function () {
        if (t.isContextMenuToShow()) {
          t.close()
        }
      }
      t.onClick = function (e) {
        t.fireEvents("onClick", e)
        if (t.focusTime) {
          var n
          if (t.preClickTime && t.preTouchTime) {
            n = Math.min(t.preClickTime, t.preTouchTime)
          } else {
            if (t.preClickTime) {
              n = t.preClickTime
            } else {
              if (t.preTouchTime) {
                n = t.preTouchTime
              }
            }
          }
          if (Math.abs(n - t.focusTime) < 20) {
            return
          }
          t.focusTime = 0
        }
        t.preClickTime = 0
        t.preTouchTime = 0
        if (t.isClickToShow() && (t.isClickToHide() || t.isBlurToHide()) && e && e.preventDefault) {
          e.preventDefault()
        }
        var r = !t.state.popupVisible
        if (t.isClickToHide() && !r || r && t.isClickToShow()) {
          t.setPopupVisible(!t.state.popupVisible, e)
        }
      }
      t.onPopupMouseDown = function () {
        var /* [auto-meaningful-name] */t$context
        t.hasPopupMouseDown = true
        clearTimeout(t.mouseDownTimeout)
        t.mouseDownTimeout = window.setTimeout(function () {
          t.hasPopupMouseDown = false
        }, 0)
        if (t.context) {
          (t$context = t.context).onPopupMouseDown.apply(t$context, arguments)
        }
      }
      t.onDocumentClick = function (e) {
        if (!t.props.mask || t.props.maskClosable) {
          var /* [auto-meaningful-name] */e$target = e.target
          var r = t.getRootDomNode()
          var o = t.getPopupDomNode()
          if (!(Module_561.a(r, e$target) && !t.isContextMenuOnly() || Module_561.a(o, e$target) || t.hasPopupMouseDown)) {
            t.close()
          }
        }
      }
      t.getRootDomNode = function () {
        var /* [auto-meaningful-name] */t$props$getTriggerDOMNode = t.props.getTriggerDOMNode
        if (t$props$getTriggerDOMNode) {
          return t$props$getTriggerDOMNode(t.triggerRef.current)
        }
        try {
          var n = Module_482.a(t.triggerRef.current)
          if (n) {
            return n
          }
        } catch (r) {}
        return ReactDom.findDOMNode(Module_142.a(t))
      }
      t.getPopupClassNameFromAlign = function (e) {
        var n = []
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$popupPlacement = t$props.popupPlacement
        var /* [auto-meaningful-name] */t$props$builtinPlacements = t$props.builtinPlacements
        var /* [auto-meaningful-name] */t$props$prefixCls = t$props.prefixCls
        var /* [auto-meaningful-name] */t$props$alignPoint = t$props.alignPoint
        var /* [auto-meaningful-name] */t$props$getPopupClassNameFromAlign = t$props.getPopupClassNameFromAlign
        if (t$props$popupPlacement && t$props$builtinPlacements) {
          n.push(function (e, t, n, r) {
            for (var /* [auto-meaningful-name] */n$points = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
              var s = i[a]
              if (C(e[s].points, n$points, r)) {
                return "".concat(t, "-placement-").concat(s)
              }
            }
            return ""
          }(t$props$builtinPlacements, t$props$prefixCls, e, t$props$alignPoint))
        }
        if (t$props$getPopupClassNameFromAlign) {
          n.push(t$props$getPopupClassNameFromAlign(e))
        }
        return n.join(" ")
      }
      t.getComponent = function () {
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$prefixCls = t$props.prefixCls
        var /* [auto-meaningful-name] */t$props$destroyPopupOnHide = t$props.destroyPopupOnHide
        var /* [auto-meaningful-name] */t$props$popupClassName = t$props.popupClassName
        var /* [auto-meaningful-name] */t$props$onPopupAlign = t$props.onPopupAlign
        var /* [auto-meaningful-name] */t$props$popupMotion = t$props.popupMotion
        var /* [auto-meaningful-name] */t$props$popupAnimation = t$props.popupAnimation
        var /* [auto-meaningful-name] */t$props$popupTransitionName = t$props.popupTransitionName
        var /* [auto-meaningful-name] */t$props$popupStyle = t$props.popupStyle
        var /* [auto-meaningful-name] */t$props$mask = t$props.mask
        var /* [auto-meaningful-name] */t$props$maskAnimation = t$props.maskAnimation
        var /* [auto-meaningful-name] */t$props$maskTransitionName = t$props.maskTransitionName
        var /* [auto-meaningful-name] */t$props$maskMotion = t$props.maskMotion
        var /* [auto-meaningful-name] */t$props$zIndex = t$props.zIndex
        var /* [auto-meaningful-name] */t$props$popup = t$props.popup
        var /* [auto-meaningful-name] */t$props$stretch = t$props.stretch
        var /* [auto-meaningful-name] */t$props$alignPoint = t$props.alignPoint
        var /* [auto-meaningful-name] */t$props$mobile = t$props.mobile
        var /* [auto-meaningful-name] */t$props$forceRender = t$props.forceRender
        var /* [auto-meaningful-name] */t$state = t.state
        var /* [auto-meaningful-name] */t$state$popupVisible = t$state.popupVisible
        var /* [auto-meaningful-name] */t$state$point = t$state.point
        var T = t.getPopupAlign()
        var S = {}
        if (t.isMouseEnterToShow()) {
          S.onMouseEnter = t.onPopupMouseEnter
        }
        if (t.isMouseLeaveToHide()) {
          S.onMouseLeave = t.onPopupMouseLeave
        }
        S.onMouseDown = t.onPopupMouseDown
        S.onTouchStart = t.onPopupMouseDown
        return createElement(pe, Module_19.a({
          prefixCls: t$props$prefixCls,
          destroyPopupOnHide: t$props$destroyPopupOnHide,
          visible: t$state$popupVisible,
          point: t$props$alignPoint && t$state$point,
          className: t$props$popupClassName,
          align: T,
          onAlign: t$props$onPopupAlign,
          animation: t$props$popupAnimation,
          getClassNameFromAlign: t.getPopupClassNameFromAlign
        }, S, {
          stretch: t$props$stretch,
          getRootDomNode: t.getRootDomNode,
          style: t$props$popupStyle,
          mask: t$props$mask,
          zIndex: t$props$zIndex,
          transitionName: t$props$popupTransitionName,
          maskAnimation: t$props$maskAnimation,
          maskTransitionName: t$props$maskTransitionName,
          maskMotion: t$props$maskMotion,
          ref: t.popupRef,
          motion: t$props$popupMotion,
          mobile: t$props$mobile,
          forceRender: t$props$forceRender
        }), "function" === typeof t$props$popup ? t$props$popup() : t$props$popup)
      }
      t.attachParent = function (e) {
        Module_229.a.cancel(t.attachId)
        var n
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$getPopupContainer = t$props.getPopupContainer
        var /* [auto-meaningful-name] */t$props$getDocument = t$props.getDocument
        var a = t.getRootDomNode()
        if (t$props$getPopupContainer) {
          if (a || 0 === t$props$getPopupContainer.length) {
            n = t$props$getPopupContainer(a)
          }
        } else {
          n = t$props$getDocument(t.getRootDomNode()).body
        }
        if (n) {
          n.appendChild(e)
        } else {
          t.attachId = Module_229.a(function () {
            t.attachParent(e)
          })
        }
      }
      t.getContainer = function () {
        var e = (0, t.props.getDocument)(t.getRootDomNode()).createElement("div")
        e.style.position = "absolute"
        e.style.top = "0"
        e.style.left = "0"
        e.style.width = "100%"
        t.attachParent(e)
        return e
      }
      t.setPoint = function (e) {
        if (t.props.alignPoint && e) {
          t.setState({
            point: {
              pageX: e.pageX,
              pageY: e.pageY
            }
          })
        }
      }
      t.handlePortalUpdate = function () {
        if (t.state.prevPopupVisible !== t.state.popupVisible) {
          t.props.afterPopupVisibleChange(t.state.popupVisible)
        }
      }
      t.triggerContextValue = {
        onPopupMouseDown: t.onPopupMouseDown
      }
      o = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible
      t.state = {
        prevPopupVisible: o,
        popupVisible: o
      }
      _e.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n)
        }
      })
      return t
    }
    Module_106.a(r, [
      {
        key: "componentDidMount",
        value: function () {
          this.componentDidUpdate()
        }
      }, {
        key: "componentDidUpdate",
        value: function () {
          var e
          var /* [auto-meaningful-name] */this$props = this.props
          if (this.state.popupVisible) {
            if (!(this.clickOutsideHandler || !this.isClickToHide() && !this.isContextMenuToShow())) {
              e = this$props.getDocument(this.getRootDomNode())
              this.clickOutsideHandler = Module_491.a(e, "mousedown", this.onDocumentClick)
            }
            if (!this.touchOutsideHandler) {
              e = e || this$props.getDocument(this.getRootDomNode())
              this.touchOutsideHandler = Module_491.a(e, "touchstart", this.onDocumentClick)
            }
            if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
              e = e || this$props.getDocument(this.getRootDomNode())
              this.contextMenuOutsideHandler1 = Module_491.a(e, "scroll", this.onContextMenuClose)
            }
            return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = Module_491.a(window, "blur", this.onContextMenuClose)))
          }
          this.clearOutsideHandler()
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.clearDelayTimer()
          this.clearOutsideHandler()
          clearTimeout(this.mouseDownTimeout)
          Module_229.a.cancel(this.attachId)
        }
      }, {
        key: "getPopupDomNode",
        value: function () {
          var /* [auto-meaningful-name] */this$popupRef$current
          return (null === (this$popupRef$current = this.popupRef.current) || undefined === this$popupRef$current ? undefined : this$popupRef$current.getElement()) || null
        }
      }, {
        key: "getPopupAlign",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$popupPlacement = this$props.popupPlacement
          var /* [auto-meaningful-name] */this$props$popupAlign = this$props.popupAlign
          var /* [auto-meaningful-name] */this$props$builtinPlacements = this$props.builtinPlacements
          return this$props$popupPlacement && this$props$builtinPlacements ? function (e, t, n) {
            var r = e[t] || {}
            return Module_21.a(Module_21.a({}, r), n)
          }(this$props$builtinPlacements, this$props$popupPlacement, this$props$popupAlign) : this$props$popupAlign
        }
      }, {
        key: "setPopupVisible",
        value: function (e, t) {
          var /* [auto-meaningful-name] */this$props$alignPoint = this.props.alignPoint
          var /* [auto-meaningful-name] */this$state$popupVisible = this.state.popupVisible
          this.clearDelayTimer()
          if (this$state$popupVisible !== e) {
            if (!("popupVisible" in this.props)) {
              this.setState({
                popupVisible: e,
                prevPopupVisible: this$state$popupVisible
              })
            }
            this.props.onPopupVisibleChange(e)
          }
          if (this$props$alignPoint && t && e) {
            this.setPoint(t)
          }
        }
      }, {
        key: "delaySetPopupVisible",
        value: function (e, t, n) {
          var r = this
          var o = 1e3 * t
          this.clearDelayTimer()
          if (o) {
            var i = n ? {
              pageX: n.pageX,
              pageY: n.pageY
            } : null
            this.delayTimer = window.setTimeout(function () {
              r.setPopupVisible(e, i)
              r.clearDelayTimer()
            }, o)
          } else {
            this.setPopupVisible(e, n)
          }
        }
      }, {
        key: "clearDelayTimer",
        value: function () {
          if (this.delayTimer) {
            clearTimeout(this.delayTimer)
            this.delayTimer = null
          }
        }
      }, {
        key: "clearOutsideHandler",
        value: function () {
          if (this.clickOutsideHandler) {
            this.clickOutsideHandler.remove()
            this.clickOutsideHandler = null
          }
          if (this.contextMenuOutsideHandler1) {
            this.contextMenuOutsideHandler1.remove()
            this.contextMenuOutsideHandler1 = null
          }
          if (this.contextMenuOutsideHandler2) {
            this.contextMenuOutsideHandler2.remove()
            this.contextMenuOutsideHandler2 = null
          }
          if (this.touchOutsideHandler) {
            this.touchOutsideHandler.remove()
            this.touchOutsideHandler = null
          }
        }
      }, {
        key: "createTwoChains",
        value: function (e) {
          var /* [auto-meaningful-name] */this$props$children$props = this.props.children.props
          var /* [auto-meaningful-name] */this$props = this.props
          return this$props$children$props[e] && this$props[e] ? this["fire".concat(e)] : this$props$children$props[e] || this$props[e]
        }
      }, {
        key: "isClickToShow",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$action = this$props.action
          var /* [auto-meaningful-name] */this$props$showAction = this$props.showAction
          return -1 !== this$props$action.indexOf("click") || -1 !== this$props$showAction.indexOf("click")
        }
      }, {
        key: "isContextMenuOnly",
        value: function () {
          var /* [auto-meaningful-name] */this$props$action = this.props.action
          return "contextMenu" === this$props$action || 1 === this$props$action.length && "contextMenu" === this$props$action[0]
        }
      }, {
        key: "isContextMenuToShow",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$action = this$props.action
          var /* [auto-meaningful-name] */this$props$showAction = this$props.showAction
          return -1 !== this$props$action.indexOf("contextMenu") || -1 !== this$props$showAction.indexOf("contextMenu")
        }
      }, {
        key: "isClickToHide",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$action = this$props.action
          var /* [auto-meaningful-name] */this$props$hideAction = this$props.hideAction
          return -1 !== this$props$action.indexOf("click") || -1 !== this$props$hideAction.indexOf("click")
        }
      }, {
        key: "isMouseEnterToShow",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$action = this$props.action
          var /* [auto-meaningful-name] */this$props$showAction = this$props.showAction
          return -1 !== this$props$action.indexOf("hover") || -1 !== this$props$showAction.indexOf("mouseEnter")
        }
      }, {
        key: "isMouseLeaveToHide",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$action = this$props.action
          var /* [auto-meaningful-name] */this$props$hideAction = this$props.hideAction
          return -1 !== this$props$action.indexOf("hover") || -1 !== this$props$hideAction.indexOf("mouseLeave")
        }
      }, {
        key: "isFocusToShow",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$action = this$props.action
          var /* [auto-meaningful-name] */this$props$showAction = this$props.showAction
          return -1 !== this$props$action.indexOf("focus") || -1 !== this$props$showAction.indexOf("focus")
        }
      }, {
        key: "isBlurToHide",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$action = this$props.action
          var /* [auto-meaningful-name] */this$props$hideAction = this$props.hideAction
          return -1 !== this$props$action.indexOf("focus") || -1 !== this$props$hideAction.indexOf("blur")
        }
      }, {
        key: "forcePopupAlign",
        value: function () {
          var /* [auto-meaningful-name] */this$popupRef$current
          if (this.state.popupVisible) {
            if (!(null === (this$popupRef$current = this.popupRef.current) || undefined === this$popupRef$current)) {
              this$popupRef$current.forceAlign()
            }
          }
        }
      }, {
        key: "fireEvents",
        value: function (e, t) {
          var n = this.props.children.props[e]
          if (n) {
            n(t)
          }
          var r = this.props[e]
          if (r) {
            r(t)
          }
        }
      }, {
        key: "close",
        value: function () {
          this.setPopupVisible(false)
        }
      }, {
        key: "render",
        value: function () {
          var /* [auto-meaningful-name] */this$state$popupVisible = this.state.popupVisible
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$children = this$props.children
          var /* [auto-meaningful-name] */this$props$forceRender = this$props.forceRender
          var /* [auto-meaningful-name] */this$props$alignPoint = this$props.alignPoint
          var /* [auto-meaningful-name] */this$props$className = this$props.className
          var /* [auto-meaningful-name] */this$props$autoDestroy = this$props.autoDestroy
          var u = Children.only(this$props$children)
          var d = {
            key: "trigger"
          }
          if (this.isContextMenuToShow()) {
            d.onContextMenu = this.onContextMenu
          } else {
            d.onContextMenu = this.createTwoChains("onContextMenu")
          }
          if (this.isClickToHide() || this.isClickToShow()) {
            d.onClick = this.onClick
            d.onMouseDown = this.onMouseDown
            d.onTouchStart = this.onTouchStart
          } else {
            d.onClick = this.createTwoChains("onClick")
            d.onMouseDown = this.createTwoChains("onMouseDown")
            d.onTouchStart = this.createTwoChains("onTouchStart")
          }
          if (this.isMouseEnterToShow()) {
            d.onMouseEnter = this.onMouseEnter
            if (this$props$alignPoint) {
              d.onMouseMove = this.onMouseMove
            }
          } else {
            d.onMouseEnter = this.createTwoChains("onMouseEnter")
          }
          if (this.isMouseLeaveToHide()) {
            d.onMouseLeave = this.onMouseLeave
          } else {
            d.onMouseLeave = this.createTwoChains("onMouseLeave")
          }
          if (this.isFocusToShow() || this.isBlurToHide()) {
            d.onFocus = this.onFocus
            d.onBlur = this.onBlur
          } else {
            d.onFocus = this.createTwoChains("onFocus")
            d.onBlur = this.createTwoChains("onBlur")
          }
          var p = Classnames(u && u.props && u.props.className, this$props$className)
          if (p) {
            d.className = p
          }
          var f = Module_21.a({}, d)
          if (Module_432.c(u)) {
            f.ref = Module_432.a(this.triggerRef, u.ref)
          }
          var h
          var m = cloneElement(u, f)
          if (this$state$popupVisible || this.popupRef.current || this$props$forceRender) {
            h = createElement(e, {
              key: "portal",
              getContainer: this.getContainer,
              didUpdate: this.handlePortalUpdate
            }, this.getComponent())
          }
          if (!this$state$popupVisible && this$props$autoDestroy) {
            h = null
          }
          return createElement(fe.Provider, {
            value: this.triggerContextValue
          }, m, h)
        }
      }
    ], [
      {
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          var /* [auto-meaningful-name] */e$popupVisible = e.popupVisible
          var r = {}
          if (undefined !== e$popupVisible && t.popupVisible !== e$popupVisible) {
            r.popupVisible = e$popupVisible
            r.prevPopupVisible = t.popupVisible
          }
          return r
        }
      }
    ])
    return r
  }(Component)
  t.contextType = fe
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: me,
    getDocument: ge,
    onPopupVisibleChange: he,
    afterPopupVisibleChange: he,
    onPopupAlign: he,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: .1,
    focusDelay: 0,
    blurDelay: .15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  }
  return t
}(Module_1020.a)
var be = {
  adjustX: 1,
  adjustY: 1
}
var ye = [0, 0]
var Ee = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: be,
    offset: [0, -4],
    targetOffset: ye
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: be,
    offset: [0, -4],
    targetOffset: ye
  },
  topRight: {
    points: ["br", "tr"],
    overflow: be,
    offset: [0, -4],
    targetOffset: ye
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: be,
    offset: [0, 4],
    targetOffset: ye
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: be,
    offset: [0, 4],
    targetOffset: ye
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: be,
    offset: [0, 4],
    targetOffset: ye
  }
}
var Oe = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$arrow = e.arrow
  var s = undefined !== e$arrow && e$arrow
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var l = undefined === e$prefixCls ? "rc-dropdown" : e$prefixCls
  var /* [auto-meaningful-name] */e$transitionName = e.transitionName
  var /* [auto-meaningful-name] */e$animation = e.animation
  var /* [auto-meaningful-name] */e$align = e.align
  var /* [auto-meaningful-name] */e$placement = e.placement
  var h = undefined === e$placement ? "bottomLeft" : e$placement
  var /* [auto-meaningful-name] */e$placements = e.placements
  var g = undefined === e$placements ? Ee : e$placements
  var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
  var /* [auto-meaningful-name] */e$showAction = e.showAction
  var /* [auto-meaningful-name] */e$hideAction = e.hideAction
  var /* [auto-meaningful-name] */e$overlayClassName = e.overlayClassName
  var /* [auto-meaningful-name] */e$overlayStyle = e.overlayStyle
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$trigger = e.trigger
  var T = undefined === e$trigger ? ["hover"] : e$trigger
  var S = Module_54.a(e, ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger"])
  var A = useState()
  var I = Module_40.a(A, 2)
  var j = I[0]
  var N = I[1]
  var R = "visible" in e ? e$visible : j
  var k = useRef(null)
  useImperativeHandle(t, function () {
    return k.current
  })
  var x = function () {
    var /* [auto-meaningful-name] */e$overlay = e.overlay
    return "function" === typeof e$overlay ? e$overlay() : e$overlay
  }
  var D = function (t) {
    var /* [auto-meaningful-name] */e$onOverlayClick = e.onOverlayClick
    var /* [auto-meaningful-name] */x$props = x().props
    N(false)
    if (e$onOverlayClick) {
      e$onOverlayClick(t)
    }
    if (x$props.onClick) {
      x$props.onClick(t)
    }
  }
  var M = function () {
    var e = x()
    var t = {
      prefixCls: "".concat(l, "-menu"),
      onClick: D
    }
    if ("string" === typeof e.type) {
      delete t.prefixCls
    }
    return createElement(Fragment, null, s && createElement("div", {
      className: "".concat(l, "-arrow")
    }), cloneElement(e, t))
  }
  var L = e$hideAction
  if (!(L || -1 === T.indexOf("contextMenu"))) {
    L = ["click"]
  }
  return createElement(ve, Object.assign({}, S, {
    prefixCls: l,
    ref: k,
    popupClassName: Classnames(e$overlayClassName, Module_35.a({}, "".concat(l, "-show-arrow"), s)),
    popupStyle: e$overlayStyle,
    builtinPlacements: g,
    action: T,
    showAction: e$showAction,
    hideAction: L || [],
    popupPlacement: h,
    popupAlign: e$align,
    popupTransitionName: e$transitionName,
    popupAnimation: e$animation,
    popupVisible: R,
    stretch: function () {
      var /* [auto-meaningful-name] */e$minOverlayWidthMatchTrigger = e.minOverlayWidthMatchTrigger
      var /* [auto-meaningful-name] */e$alignPoint = e.alignPoint
      return "minOverlayWidthMatchTrigger" in e ? e$minOverlayWidthMatchTrigger : !e$alignPoint
    }() ? "minWidth" : "",
    popup: "function" === typeof e.overlay ? M : M(),
    onPopupVisibleChange: function (t) {
      var /* [auto-meaningful-name] */e$onVisibleChange = e.onVisibleChange
      N(t)
      if ("function" === typeof e$onVisibleChange) {
        e$onVisibleChange(t)
      }
    },
    getPopupContainer: e$getPopupContainer
  }), function () {
    var /* [auto-meaningful-name] */e$children = e.children
    var n = e$children.props ? e$children.props : {}
    var r = Classnames(n.className, function () {
      var /* [auto-meaningful-name] */e$openClassName = e.openClassName
      return undefined !== e$openClassName ? e$openClassName : "".concat(l, "-open")
    }())
    return j && e$children ? cloneElement(e$children, {
      className: r
    }) : e$children
  }())
})
export { Oe }
