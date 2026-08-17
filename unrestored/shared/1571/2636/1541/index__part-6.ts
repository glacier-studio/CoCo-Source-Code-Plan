/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1541__part-6
 */

"use strict"

import { d } from "./index__part-0"
import { m } from "./index__part-1"
import { Y, K, q, X, Z, J, we, Ce, Te } from "./index__part-5"
import /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import * as /* [auto-meaningful-name] */Module_140 from /* 140 */"../140"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../120"
import * as /* [auto-meaningful-name] */Module_142 from /* 142 */"../142"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../106"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../103"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_241 from /* 241 */"../241/index"
import { forwardRef, useRef, useState, useMemo, useEffect, useImperativeHandle, Children, createElement, createContext, createRef, cloneElement, Component } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../54"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../40/index"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"../21"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../35"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../19"
import * as /* [auto-meaningful-name] */Module_558 from /* 558 */"../1543/558/index"
import * as /* [auto-meaningful-name] */Module_216 from /* 216 */"../627/216"
import /* [auto-meaningful-name] */Module_2161 from /* 216 */"../627/216"
import * as /* [auto-meaningful-name] */Module_326 from /* 326 */"../627/326"
var Ne = ["measure", "align", null, "motion"]
var Re = forwardRef(function (e, t) {
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
  var T = useRef()
  var S = useRef()
  var A = useState()
  var I = Module_40.a(A, 2)
  var j = I[0]
  var N = I[1]
  var R = function (e) {
    var t = useState({
      width: 0,
      height: 0
    })
    var n = Module_40.a(t, 2)
    var r = n[0]
    var o = n[1]
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
        o({
          width: e.offsetWidth,
          height: e.offsetHeight
        })
      }
    ]
  }(e$stretch)
  var k = Module_40.a(R, 2)
  var x = k[0]
  var D = k[1]
  var M = function (e, t) {
    var n = useState(null)
    var r = Module_40.a(n, 2)
    var o = r[0]
    var i = r[1]
    var a = useRef()
    var c = useRef(false)
    function u(e) {
      if (!c.current) {
        i(e)
      }
    }
    function d() {
      Y.cancel(a.current)
    }
    useEffect(function () {
      u("measure")
    }, [e])
    useEffect(function () {
      switch (o) {
        case "measure":
          t()
      }
      if (o) {
        a.current = Y(Module_326.a(Module_2161.mark(function e() {
          var t
          var n
          return Module_2161.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = Ne.indexOf(o)
                  if ((n = Ne[t + 1]) && -1 !== t) {
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
    }, [o])
    useEffect(function () {
      return function () {
        c.current = true
        d()
      }
    }, [])
    return [
      o, function (e) {
        d()
        a.current = Y(function () {
          u(function (e) {
            switch (o) {
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
      D(e$getRootDomNode())
    }
  })
  var L = Module_40.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = useRef()
  function G() {
    var /* [auto-meaningful-name] */T$current
    if (!(null === (T$current = T.current) || undefined === T$current)) {
      T$current.forceAlign()
    }
  }
  function W(e, t) {
    var n = e$getClassNameFromAlign(t)
    if (j !== n) {
      N(n)
    }
    if ("align" === P) {
      if (j !== n) {
        Promise.resolve().then(function () {
          G()
        })
      } else {
        B(function () {
          var /* [auto-meaningful-name] */F$current
          if (!(null === (F$current = F.current) || undefined === F$current)) {
            F$current.call(F)
          }
        })
      }
      if (!(null === e$onAlign || undefined === e$onAlign)) {
        e$onAlign(e, t)
      }
    }
  }
  var U = Module_21.a({}, Ce(e))
  function H() {
    return new Promise(function (e) {
      F.current = e
    })
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = U[e]
    U[e] = function (e, n) {
      B()
      return null === t || undefined === t ? undefined : t(e, n)
    }
  })
  useEffect(function () {
    if (!(U.motionName || "motion" !== P)) {
      B()
    }
  }, [U.motionName, P])
  useImperativeHandle(t, function () {
    return {
      forceAlign: G,
      getElement: function () {
        return S.current
      }
    }
  })
  var V = Module_21.a(Module_21.a({}, x), {}, {
    zIndex: e$zIndex,
    opacity: "motion" !== P && "stable" !== P && e$visible ? 0 : undefined,
    pointerEvents: "stable" === P ? undefined : "none"
  }, e$style)
  var z = true
  if (!(!(null === e$align || undefined === e$align ? undefined : e$align.points) || "align" !== P && "stable" !== P)) {
    z = false
  }
  var K = e$children
  if (Children.count(e$children) > 1) {
    K = createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  return createElement(we, Module_19.a({
    visible: e$visible,
    ref: S,
    leavedClassName: "".concat(e$prefixCls, "-hidden")
  }, U, {
    onAppearPrepare: H,
    onEnterPrepare: H,
    removeOnLeave: e$destroyPopupOnHide,
    forceRender: e$forceRender
  }), function (e, t) {
    var /* [auto-meaningful-name] */e$className1 = e.className
    var /* [auto-meaningful-name] */e$style1 = e.style
    var s = Classnames(e$prefixCls, e$className, j, e$className1)
    return createElement(Module_558.a, {
      target: e$point || e$getRootDomNode,
      key: "popup",
      ref: T,
      monitorWindowResize: true,
      disabled: z,
      align: e$align,
      onAlign: W
    }, createElement("div", {
      ref: t,
      className: s,
      onMouseEnter: e$onMouseEnter,
      onMouseLeave: e$onMouseLeave,
      onMouseDownCapture: e$onMouseDown,
      onTouchStartCapture: e$onTouchStart,
      style: Module_21.a(Module_21.a({}, e$style1), V)
    }, K))
  })
})
Re.displayName = "PopupInner"
var ke = Re
var xe = forwardRef(function (e, t) {
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
  var v = e$children
  if (Children.count(e$children) > 1) {
    v = createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  if (e$mobile$popupRender) {
    v = e$mobile$popupRender(v)
  }
  return createElement(we, Module_19.a({
    visible: e$visible,
    ref: m,
    removeOnLeave: true
  }, f), function (e, t) {
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */e$style = e.style
    var a = Classnames(e$prefixCls, E$mobileUndefinedE$mobileE$mobile$popupClassName, e$className)
    return createElement("div", {
      ref: t,
      className: a,
      style: Module_21.a(Module_21.a({}, e$style), g)
    }, v)
  })
})
xe.displayName = "MobilePopupInner"
var De = xe
var Me = ["visible", "mobile"]
var Le = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$mobile = e.mobile
  var a = Module_54.a(e, Me)
  var u = useState(e$visible)
  var p = Module_40.a(u, 2)
  var f = p[0]
  var h = p[1]
  var m = useState(false)
  var g = Module_40.a(m, 2)
  var _ = g[0]
  var v = g[1]
  var b = Module_21.a(Module_21.a({}, a), {}, {
    visible: f
  })
  useEffect(function () {
    h(e$visible)
    if (e$visible && e$mobile) {
      v(d())
    }
  }, [e$visible, e$mobile])
  var y = _ ? createElement(De, Module_19.a({}, b, {
    mobile: e$mobile,
    ref: t
  })) : createElement(ke, Module_19.a({}, b, {
    ref: t
  }))
  return createElement("div", null, createElement(Te, b), y)
})
Le.displayName = "Popup"
var Pe = Le
var Be = createContext(null)
function Fe() {}
function Ge() {
  return ""
}
function We(e) {
  return e ? e.ownerDocument : window.document
}
var Ue = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"]
var He = function (e) {
  var t = function (t) {
    Module_120.a(o, t)
    var n = Module_140.a(o)
    function o(e) {
      var t
      var i
      Module_103.a(this, o);
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
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && K(null === (t$popupRef$current = t.popupRef.current) || undefined === t$popupRef$current ? undefined : t$popupRef$current.getElement(), e.relatedTarget))) {
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
          if (!(K(r, e$target) && !t.isContextMenuOnly() || K(o, e$target) || t.hasPopupMouseDown)) {
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
          var n = q(t.triggerRef.current)
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
              if (J(e[s].points, n$points, r)) {
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
        return createElement(Pe, Module_19.a({
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
        Y.cancel(t.attachId)
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
          t.attachId = Y(function () {
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
      i = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible
      t.state = {
        prevPopupVisible: i,
        popupVisible: i
      }
      Ue.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n)
        }
      })
      return t
    }
    Module_106.a(o, [
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
              this.clickOutsideHandler = X(e, "mousedown", this.onDocumentClick)
            }
            if (!this.touchOutsideHandler) {
              e = e || this$props.getDocument(this.getRootDomNode())
              this.touchOutsideHandler = X(e, "touchstart", this.onDocumentClick)
            }
            if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
              e = e || this$props.getDocument(this.getRootDomNode())
              this.contextMenuOutsideHandler1 = X(e, "scroll", this.onContextMenuClose)
            }
            return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = X(window, "blur", this.onContextMenuClose)))
          }
          this.clearOutsideHandler()
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.clearDelayTimer()
          this.clearOutsideHandler()
          clearTimeout(this.mouseDownTimeout)
          Y.cancel(this.attachId)
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
          var h = Module_21.a({}, d)
          if (function (e) {
            var /* [auto-meaningful-name] */r$prototype
            var /* [auto-meaningful-name] */e$prototype
            var r = Module_241.isMemo(e) ? e.type.type : e.type
            return !("function" === typeof r && !(null === (r$prototype = r.prototype) || undefined === r$prototype ? undefined : r$prototype.render)) && !("function" === typeof e && !(null === (e$prototype = e.prototype) || undefined === e$prototype ? undefined : e$prototype.render))
          }(u)) {
            h.ref = m(this.triggerRef, u.ref)
          }
          var g
          var v = cloneElement(u, h)
          if (this$state$popupVisible || this.popupRef.current || this$props$forceRender) {
            g = createElement(e, {
              key: "portal",
              getContainer: this.getContainer,
              didUpdate: this.handlePortalUpdate
            }, this.getComponent())
          }
          if (!this$state$popupVisible && this$props$autoDestroy) {
            g = null
          }
          return createElement(Be.Provider, {
            value: this.triggerContextValue
          }, v, g)
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
    return o
  }(Component)
  t.contextType = Be
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: Ge,
    getDocument: We,
    onPopupVisibleChange: Fe,
    afterPopupVisibleChange: Fe,
    onPopupAlign: Fe,
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
}(Z)
var Ve = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange"]
var ze = function (e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  e.disabled
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$popupElement = e.popupElement
  var /* [auto-meaningful-name] */e$containerWidth = e.containerWidth
  var /* [auto-meaningful-name] */e$animation = e.animation
  var /* [auto-meaningful-name] */e$transitionName = e.transitionName
  var /* [auto-meaningful-name] */e$dropdownStyle = e.dropdownStyle
  var /* [auto-meaningful-name] */e$dropdownClassName = e.dropdownClassName
  var /* [auto-meaningful-name] */e$direction = e.direction
  var v = undefined === e$direction ? "ltr" : e$direction
  var /* [auto-meaningful-name] */e$placement = e.placement
  var /* [auto-meaningful-name] */e$dropdownMatchSelectWidth = e.dropdownMatchSelectWidth
  var E = undefined === e$dropdownMatchSelectWidth || e$dropdownMatchSelectWidth
  var /* [auto-meaningful-name] */e$dropdownRender = e.dropdownRender
  var /* [auto-meaningful-name] */e$dropdownAlign = e.dropdownAlign
  var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
  var /* [auto-meaningful-name] */e$empty = e.empty
  var /* [auto-meaningful-name] */e$getTriggerDOMNode = e.getTriggerDOMNode
  var /* [auto-meaningful-name] */e$onPopupVisibleChange = e.onPopupVisibleChange
  var I = Module_54.a(e, Ve)
  var j = "".concat(e$prefixCls, "-dropdown")
  var N = e$popupElement
  if (e$dropdownRender) {
    N = e$dropdownRender(e$popupElement)
  }
  var R = useMemo(function () {
    return function (e) {
      var t = "number" !== typeof e ? 0 : 1
      return {
        bottomLeft: {
          points: ["tl", "bl"],
          offset: [0, 4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        },
        bottomRight: {
          points: ["tr", "br"],
          offset: [0, 4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        },
        topLeft: {
          points: ["bl", "tl"],
          offset: [0, -4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        },
        topRight: {
          points: ["br", "tr"],
          offset: [0, -4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        }
      }
    }(E)
  }, [E])
  var k = e$animation ? "".concat(j, "-").concat(e$animation) : e$transitionName
  var x = useRef(null)
  useImperativeHandle(t, function () {
    return {
      getPopupElement: function () {
        return x.current
      }
    }
  })
  var D = Module_21.a({
    minWidth: e$containerWidth
  }, e$dropdownStyle)
  if ("number" === typeof E) {
    D.width = E
  } else {
    if (E) {
      D.width = e$containerWidth
    }
  }
  return createElement(He, Module_19.a({}, I, {
    showAction: e$onPopupVisibleChange ? ["click"] : [],
    hideAction: e$onPopupVisibleChange ? ["click"] : [],
    popupPlacement: e$placement || ("rtl" === v ? "bottomRight" : "bottomLeft"),
    builtinPlacements: R,
    prefixCls: j,
    popupTransitionName: k,
    popup: createElement("div", {
      ref: x
    }, N),
    popupAlign: e$dropdownAlign,
    popupVisible: e$visible,
    getPopupContainer: e$getPopupContainer,
    popupClassName: Classnames(e$dropdownClassName, Module_35.a({}, "".concat(j, "-empty"), e$empty)),
    popupStyle: D,
    getTriggerDOMNode: e$getTriggerDOMNode,
    onPopupVisibleChange: e$onPopupVisibleChange
  }), e$children)
}
var Ye = forwardRef(ze)
Ye.displayName = "SelectTrigger"
var Ke = Ye
export { Ke }
