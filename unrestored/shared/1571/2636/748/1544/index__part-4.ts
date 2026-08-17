/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1544__part-4
 */

"use strict"

import { A } from "./index__part-0"
import { b } from "./index__part-1"
import { x } from "./index__part-2"
import { k, S } from "./index__part-3"
import * as /* [auto-meaningful-name] */Module_692 from /* 692 */"./692"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../../40/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_929 from /* 929 */"./929"
import * as /* [auto-meaningful-name] */Module_698 from /* 698 */"../../1048/698"
import * as /* [auto-meaningful-name] */Module_1030 from /* 1030 */"./1030"
import * as /* [auto-meaningful-name] */Module_416 from /* 416 */"../../1048/416"
import /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import * as /* [auto-meaningful-name] */Module_140 from /* 140 */"../../140"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../../120"
import * as /* [auto-meaningful-name] */Module_142 from /* 142 */"../../142"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../../106"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../../103"
import { forwardRef, useRef, useState, useMemo, useEffect, useImperativeHandle, Children, createElement, createContext, createRef, cloneElement, Component } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../54"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"../../21"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../19"
import * as /* [auto-meaningful-name] */Module_558 from /* 558 */"../../1543/558/index"
import * as /* [auto-meaningful-name] */Module_216 from /* 216 */"../../627/216"
import /* [auto-meaningful-name] */Module_2161 from /* 216 */"../../627/216"
import * as /* [auto-meaningful-name] */Module_326 from /* 326 */"../../627/326"
var R = ["measure", "align", null, "motion"]
var F = forwardRef(function (e, t) {
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
  var B = useRef()
  var F = useState()
  var P = Module_40.a(F, 2)
  var N = P[0]
  var M = P[1]
  var L = function (e) {
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
  var j = Module_40.a(L, 2)
  var U = j[0]
  var H = j[1]
  var V = function (e, t) {
    var n = useState(null)
    var r = Module_40.a(n, 2)
    var i = r[0]
    var o = r[1]
    var a = useRef()
    var c = useRef(false)
    function u(e) {
      if (!c.current) {
        o(e)
      }
    }
    function l() {
      Module_416.a.cancel(a.current)
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
        a.current = Module_416.a(Module_326.a(Module_2161.mark(function e() {
          var t
          var n
          return Module_2161.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = R.indexOf(i)
                  if ((n = R[t + 1]) && -1 !== t) {
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
        c.current = true
        l()
      }
    }, [])
    return [
      i, function (e) {
        l()
        a.current = Module_416.a(function () {
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
      H(e$getRootDomNode())
    }
  })
  var G = Module_40.a(V, 2)
  var z = G[0]
  var Q = G[1]
  var W = useRef()
  function K() {
    var /* [auto-meaningful-name] */S$current
    if (!(null === (S$current = S.current) || undefined === S$current)) {
      S$current.forceAlign()
    }
  }
  function X(e, t) {
    var n = e$getClassNameFromAlign(t)
    if (N !== n) {
      M(n)
    }
    if ("align" === z) {
      if (N !== n) {
        Promise.resolve().then(function () {
          K()
        })
      } else {
        Q(function () {
          var /* [auto-meaningful-name] */W$current
          if (!(null === (W$current = W.current) || undefined === W$current)) {
            W$current.call(W)
          }
        })
      }
      if (!(null === e$onAlign || undefined === e$onAlign)) {
        e$onAlign(e, t)
      }
    }
  }
  var Y = Module_21.a({}, k(e))
  function q() {
    return new Promise(function (e) {
      W.current = e
    })
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = Y[e]
    Y[e] = function (e, n) {
      Q()
      return null === t || undefined === t ? undefined : t(e, n)
    }
  })
  useEffect(function () {
    if (!(Y.motionName || "motion" !== z)) {
      Q()
    }
  }, [Y.motionName, z])
  useImperativeHandle(t, function () {
    return {
      forceAlign: K,
      getElement: function () {
        return B.current
      }
    }
  })
  var $ = Module_21.a(Module_21.a({}, U), {}, {
    zIndex: e$zIndex,
    opacity: "motion" !== z && "stable" !== z && e$visible ? 0 : undefined,
    pointerEvents: "stable" === z ? undefined : "none"
  }, e$style)
  var J = true
  if (!(!(null === e$align || undefined === e$align ? undefined : e$align.points) || "align" !== z && "stable" !== z)) {
    J = false
  }
  var Z = e$children
  if (Children.count(e$children) > 1) {
    Z = createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  return createElement(Module_692.a, Module_19.a({
    visible: e$visible,
    ref: B,
    leavedClassName: "".concat(e$prefixCls, "-hidden")
  }, Y, {
    onAppearPrepare: q,
    onEnterPrepare: q,
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
      disabled: J,
      align: e$align,
      onAlign: X
    }, createElement("div", {
      ref: t,
      className: c,
      onMouseEnter: e$onMouseEnter,
      onMouseLeave: e$onMouseLeave,
      onMouseDownCapture: e$onMouseDown,
      onTouchStartCapture: e$onTouchStart,
      style: Module_21.a(Module_21.a({}, e$style1), $)
    }, Z))
  })
})
F.displayName = "PopupInner"
var P = F
var N = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$mobile = e.mobile
  var /* [auto-meaningful-name] */E$mobileUndefinedE$mobileE$mobile$popupClassName = (e$mobile = undefined === e$mobile ? {} : e$mobile).popupClassName
  var /* [auto-meaningful-name] */e$mobile$popupStyle = e$mobile.popupStyle
  var /* [auto-meaningful-name] */e$mobile$popupMotion = e$mobile.popupMotion
  var h = undefined === e$mobile$popupMotion ? {} : e$mobile$popupMotion
  var /* [auto-meaningful-name] */e$mobile$popupRender = e$mobile.popupRender
  var _ = useRef()
  useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return _.current
      }
    }
  })
  var A = Module_21.a({
    zIndex: e$zIndex
  }, e$mobile$popupStyle)
  var g = e$children
  if (Children.count(e$children) > 1) {
    g = createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  if (e$mobile$popupRender) {
    g = e$mobile$popupRender(g)
  }
  return createElement(Module_692.a, Module_19.a({
    visible: e$visible,
    ref: _,
    removeOnLeave: true
  }, h), function (e, t) {
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */e$style = e.style
    var a = Classnames(e$prefixCls, E$mobileUndefinedE$mobileE$mobile$popupClassName, e$className)
    return createElement("div", {
      ref: t,
      className: a,
      style: Module_21.a(Module_21.a({}, e$style), A)
    }, g)
  })
})
N.displayName = "MobilePopupInner"
var M = N
var L = ["visible", "mobile"]
var j = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$mobile = e.mobile
  var c = Module_54.a(e, L)
  var u = useState(e$visible)
  var l = Module_40.a(u, 2)
  var f = l[0]
  var d = l[1]
  var h = useState(false)
  var p = Module_40.a(h, 2)
  var _ = p[0]
  var A = p[1]
  var g = Module_21.a(Module_21.a({}, c), {}, {
    visible: f
  })
  useEffect(function () {
    d(e$visible)
    if (e$visible && e$mobile) {
      A(function () {
        if ("undefined" === typeof navigator || "undefined" === typeof window) {
          return false
        }
        var e = navigator.userAgent || navigator.vendor || window.opera
        return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null === e || undefined === e ? undefined : e.substr(0, 4)))
      }())
    }
  }, [e$visible, e$mobile])
  var v = _ ? createElement(M, Module_19.a({}, g, {
    mobile: e$mobile,
    ref: t
  })) : createElement(P, Module_19.a({}, g, {
    ref: t
  }))
  return createElement("div", null, createElement(S, g), v)
})
j.displayName = "Popup"
var U = j
var H = createContext(null)
function V() {}
function G() {
  return ""
}
function z(e) {
  return e ? e.ownerDocument : window.document
}
var Q = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"]
var W = function (e) {
  var t = function (t) {
    Module_120.a(i, t)
    var n = Module_140.a(i)
    function i(e) {
      var t
      var o
      Module_103.a(this, i);
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
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && A(null === (t$popupRef$current = t.popupRef.current) || undefined === t$popupRef$current ? undefined : t$popupRef$current.getElement(), e.relatedTarget))) {
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
          var i = t.getPopupDomNode()
          if (!(A(r, e$target) && !t.isContextMenuOnly() || A(i, e$target) || t.hasPopupMouseDown)) {
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
          var n = Module_1030.a(t.triggerRef.current)
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
            for (var /* [auto-meaningful-name] */n$points = n.points, o = Object.keys(e), a = 0; a < o.length; a += 1) {
              var s = o[a]
              if (x(e[s].points, n$points, r)) {
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
        var C = t.getPopupAlign()
        var O = {}
        if (t.isMouseEnterToShow()) {
          O.onMouseEnter = t.onPopupMouseEnter
        }
        if (t.isMouseLeaveToHide()) {
          O.onMouseLeave = t.onPopupMouseLeave
        }
        O.onMouseDown = t.onPopupMouseDown
        O.onTouchStart = t.onPopupMouseDown
        return createElement(U, Module_19.a({
          prefixCls: t$props$prefixCls,
          destroyPopupOnHide: t$props$destroyPopupOnHide,
          visible: t$state$popupVisible,
          point: t$props$alignPoint && t$state$point,
          className: t$props$popupClassName,
          align: C,
          onAlign: t$props$onPopupAlign,
          animation: t$props$popupAnimation,
          getClassNameFromAlign: t.getPopupClassNameFromAlign
        }, O, {
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
        Module_416.a.cancel(t.attachId)
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
          t.attachId = Module_416.a(function () {
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
      Q.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n)
        }
      })
      return t
    }
    Module_106.a(i, [
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
              this.clickOutsideHandler = Module_929.a(e, "mousedown", this.onDocumentClick)
            }
            if (!this.touchOutsideHandler) {
              e = e || this$props.getDocument(this.getRootDomNode())
              this.touchOutsideHandler = Module_929.a(e, "touchstart", this.onDocumentClick)
            }
            if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
              e = e || this$props.getDocument(this.getRootDomNode())
              this.contextMenuOutsideHandler1 = Module_929.a(e, "scroll", this.onContextMenuClose)
            }
            return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = Module_929.a(window, "blur", this.onContextMenuClose)))
          }
          this.clearOutsideHandler()
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.clearDelayTimer()
          this.clearOutsideHandler()
          clearTimeout(this.mouseDownTimeout)
          Module_416.a.cancel(this.attachId)
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
          var i = 1e3 * t
          this.clearDelayTimer()
          if (i) {
            var o = n ? {
              pageX: n.pageX,
              pageY: n.pageY
            } : null
            this.delayTimer = window.setTimeout(function () {
              r.setPopupVisible(e, o)
              r.clearDelayTimer()
            }, i)
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
          var l = Children.only(this$props$children)
          var f = {
            key: "trigger"
          }
          if (this.isContextMenuToShow()) {
            f.onContextMenu = this.onContextMenu
          } else {
            f.onContextMenu = this.createTwoChains("onContextMenu")
          }
          if (this.isClickToHide() || this.isClickToShow()) {
            f.onClick = this.onClick
            f.onMouseDown = this.onMouseDown
            f.onTouchStart = this.onTouchStart
          } else {
            f.onClick = this.createTwoChains("onClick")
            f.onMouseDown = this.createTwoChains("onMouseDown")
            f.onTouchStart = this.createTwoChains("onTouchStart")
          }
          if (this.isMouseEnterToShow()) {
            f.onMouseEnter = this.onMouseEnter
            if (this$props$alignPoint) {
              f.onMouseMove = this.onMouseMove
            }
          } else {
            f.onMouseEnter = this.createTwoChains("onMouseEnter")
          }
          if (this.isMouseLeaveToHide()) {
            f.onMouseLeave = this.onMouseLeave
          } else {
            f.onMouseLeave = this.createTwoChains("onMouseLeave")
          }
          if (this.isFocusToShow() || this.isBlurToHide()) {
            f.onFocus = this.onFocus
            f.onBlur = this.onBlur
          } else {
            f.onFocus = this.createTwoChains("onFocus")
            f.onBlur = this.createTwoChains("onBlur")
          }
          var d = Classnames(l && l.props && l.props.className, this$props$className)
          if (d) {
            f.className = d
          }
          var h = Module_21.a({}, f)
          if (Module_698.c(l)) {
            h.ref = Module_698.a(this.triggerRef, l.ref)
          }
          var p
          var _ = cloneElement(l, h)
          if (this$state$popupVisible || this.popupRef.current || this$props$forceRender) {
            p = createElement(e, {
              key: "portal",
              getContainer: this.getContainer,
              didUpdate: this.handlePortalUpdate
            }, this.getComponent())
          }
          if (!this$state$popupVisible && this$props$autoDestroy) {
            p = null
          }
          return createElement(H.Provider, {
            value: this.triggerContextValue
          }, _, p)
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
    return i
  }(Component)
  t.contextType = H
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: G,
    getDocument: z,
    onPopupVisibleChange: V,
    afterPopupVisibleChange: V,
    onPopupAlign: V,
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
}(b)
export { W }
