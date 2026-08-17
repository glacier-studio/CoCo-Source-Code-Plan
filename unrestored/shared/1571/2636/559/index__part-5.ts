/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：559__part-5
 */

"use strict"

import { m } from "./index__part-0"
import { S, A, j, N, R, x, D, M, P, B, F, G, W, U, H, V, Q } from "./index__part-1"
import { J, $, re } from "./index__part-2"
import { pe, fe, he } from "./index__part-3"
import { ge, _e, be, ye, ze, Ye, Ke } from "./index__part-4"
import /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import * as /* [auto-meaningful-name] */Module_142 from /* 142 */"../142"
import * as /* [auto-meaningful-name] */Module_241 from /* 241 */"../241/index"
import * as /* [auto-meaningful-name] */Module_140 from /* 140 */"../140"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../120"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../106"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../103"
import * as /* [auto-meaningful-name] */Module_560 from /* 560 */"./560"
import /* [auto-meaningful-name] */Module_1041 from /* 1041 */"./1041"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { forwardRef, useRef, useState, useMemo, useEffect, useImperativeHandle, Children, createElement, createContext, createRef, cloneElement, Component, useContext, useCallback } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../54"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../40/index"
import * as /* [auto-meaningful-name] */Module_79 from /* 79 */"../79/index"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"../21"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../35"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../19"
import * as /* [auto-meaningful-name] */Module_558 from /* 558 */"../1543/558/index"
import * as /* [auto-meaningful-name] */Module_216 from /* 216 */"../627/216"
import /* [auto-meaningful-name] */Module_2161 from /* 216 */"../627/216"
import * as /* [auto-meaningful-name] */Module_326 from /* 326 */"../627/326"
var Je = ["measure", "align", null, "motion"]
var $e = forwardRef(function (e, t) {
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
      pe.cancel(a.current)
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
        a.current = pe(Module_326.a(Module_2161.mark(function e() {
          var t
          var n
          return Module_2161.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = Je.indexOf(o)
                  if ((n = Je[t + 1]) && -1 !== t) {
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
        a.current = pe(function () {
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
  var U = Module_21.a({}, Ye(e))
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
  var Y = e$children
  if (Children.count(e$children) > 1) {
    Y = createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  return createElement(ze, Module_19.a({
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
    }, Y))
  })
})
$e.displayName = "PopupInner"
var et = $e
var tt = forwardRef(function (e, t) {
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
  var g = useRef()
  useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return g.current
      }
    }
  })
  var _ = Module_21.a({
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
  return createElement(ze, Module_19.a({
    visible: e$visible,
    ref: g,
    removeOnLeave: true
  }, h), function (e, t) {
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */e$style = e.style
    var a = Classnames(e$prefixCls, E$mobileUndefinedE$mobileE$mobile$popupClassName, e$className)
    return createElement("div", {
      ref: t,
      className: a,
      style: Module_21.a(Module_21.a({}, e$style), _)
    }, v)
  })
})
tt.displayName = "MobilePopupInner"
var nt = tt
var rt = ["visible", "mobile"]
var ot = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$mobile = e.mobile
  var a = Module_54.a(e, rt)
  var u = useState(e$visible)
  var d = Module_40.a(u, 2)
  var p = d[0]
  var f = d[1]
  var h = useState(false)
  var m = Module_40.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = Module_21.a(Module_21.a({}, a), {}, {
    visible: p
  })
  useEffect(function () {
    f(e$visible)
    if (e$visible && e$mobile) {
      _(function () {
        if ("undefined" === typeof navigator || "undefined" === typeof window) {
          return false
        }
        var e = navigator.userAgent || navigator.vendor || window.opera
        return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null === e || undefined === e ? undefined : e.substr(0, 4)))
      }())
    }
  }, [e$visible, e$mobile])
  var b = g ? createElement(nt, Module_19.a({}, v, {
    mobile: e$mobile,
    ref: t
  })) : createElement(et, Module_19.a({}, v, {
    ref: t
  }))
  return createElement("div", null, createElement(Ke, v), b)
})
ot.displayName = "Popup"
var it = ot
var at = createContext(null)
function st() {}
function ct() {
  return ""
}
function lt(e) {
  return e ? e.ownerDocument : window.document
}
var ut = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"]
var dt = function (e) {
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
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && fe(null === (t$popupRef$current = t.popupRef.current) || undefined === t$popupRef$current ? undefined : t$popupRef$current.getElement(), e.relatedTarget))) {
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
          if (!(fe(r, e$target) && !t.isContextMenuOnly() || fe(o, e$target) || t.hasPopupMouseDown)) {
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
          var n = he(t.triggerRef.current)
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
              if (ye(e[s].points, n$points, r)) {
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
        return createElement(it, Module_19.a({
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
        pe.cancel(t.attachId)
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
          t.attachId = pe(function () {
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
      ut.forEach(function (e) {
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
              this.clickOutsideHandler = _e(e, "mousedown", this.onDocumentClick)
            }
            if (!this.touchOutsideHandler) {
              e = e || this$props.getDocument(this.getRootDomNode())
              this.touchOutsideHandler = _e(e, "touchstart", this.onDocumentClick)
            }
            if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
              e = e || this$props.getDocument(this.getRootDomNode())
              this.contextMenuOutsideHandler1 = _e(e, "scroll", this.onContextMenuClose)
            }
            return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = _e(window, "blur", this.onContextMenuClose)))
          }
          this.clearOutsideHandler()
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.clearDelayTimer()
          this.clearOutsideHandler()
          clearTimeout(this.mouseDownTimeout)
          pe.cancel(this.attachId)
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
          var f = Classnames(u && u.props && u.props.className, this$props$className)
          if (f) {
            d.className = f
          }
          var h = Module_21.a({}, d)
          if (function (e) {
            var /* [auto-meaningful-name] */r$prototype
            var /* [auto-meaningful-name] */e$prototype
            var r = Module_241.isMemo(e) ? e.type.type : e.type
            return !("function" === typeof r && !(null === (r$prototype = r.prototype) || undefined === r$prototype ? undefined : r$prototype.render)) && !("function" === typeof e && !(null === (e$prototype = e.prototype) || undefined === e$prototype ? undefined : e$prototype.render))
          }(u)) {
            h.ref = function () {
              for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
                t[n] = arguments[n]
              }
              return function (e) {
                t.forEach(function (t) {
                  ge(t, e)
                })
              }
            }(this.triggerRef, u.ref)
          }
          var m
          var g = cloneElement(u, h)
          if (this$state$popupVisible || this.popupRef.current || this$props$forceRender) {
            m = createElement(e, {
              key: "portal",
              getContainer: this.getContainer,
              didUpdate: this.handlePortalUpdate
            }, this.getComponent())
          }
          if (!this$state$popupVisible && this$props$autoDestroy) {
            m = null
          }
          return createElement(at.Provider, {
            value: this.triggerContextValue
          }, g, m)
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
  t.contextType = at
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: ct,
    getDocument: lt,
    onPopupVisibleChange: st,
    afterPopupVisibleChange: st,
    onPopupAlign: st,
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
}(be)
var pt = {
  adjustX: 1,
  adjustY: 1
}
var ft = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: pt,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: pt,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: pt,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: pt,
    offset: [4, 0]
  }
}
var ht = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: pt,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: pt,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: pt,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: pt,
    offset: [4, 0]
  }
}
function mt(e, t, n) {
  return t || (n ? n[e] || n.other : undefined)
}
var gt = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
}
function _t(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$popup = e.popup
  var /* [auto-meaningful-name] */e$popupClassName = e.popupClassName
  var /* [auto-meaningful-name] */e$popupOffset = e.popupOffset
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$onVisibleChange = e.onVisibleChange
  var m = useContext(j)
  var /* [auto-meaningful-name] */m$getPopupContainer = m.getPopupContainer
  var /* [auto-meaningful-name] */m$rtl = m.rtl
  var /* [auto-meaningful-name] */m$subMenuOpenDelay = m.subMenuOpenDelay
  var /* [auto-meaningful-name] */m$subMenuCloseDelay = m.subMenuCloseDelay
  var /* [auto-meaningful-name] */m$builtinPlacements = m.builtinPlacements
  var /* [auto-meaningful-name] */m$triggerSubMenuAction = m.triggerSubMenuAction
  var /* [auto-meaningful-name] */m$forceSubMenuRender = m.forceSubMenuRender
  var /* [auto-meaningful-name] */m$motion = m.motion
  var /* [auto-meaningful-name] */m$defaultMotions = m.defaultMotions
  var T = useState(false)
  var S = Module_40.a(T, 2)
  var A = S[0]
  var I = S[1]
  var N = m$rtl ? Module_21.a(Module_21.a({}, ht), m$builtinPlacements) : Module_21.a(Module_21.a({}, ft), m$builtinPlacements)
  var R = gt[e$mode]
  var k = mt(e$mode, m$motion, m$defaultMotions)
  var x = Module_21.a(Module_21.a({}, k), {}, {
    leavedClassName: "".concat(e$prefixCls, "-hidden"),
    removeOnLeave: false,
    motionAppear: true
  })
  var D = useRef()
  useEffect(function () {
    D.current = pe(function () {
      I(e$visible)
    })
    return function () {
      pe.cancel(D.current)
    }
  }, [e$visible])
  return createElement(dt, {
    prefixCls: e$prefixCls,
    popupClassName: Classnames("".concat(e$prefixCls, "-popup"), Module_35.a({}, "".concat(e$prefixCls, "-rtl"), m$rtl), e$popupClassName),
    stretch: "horizontal" === e$mode ? "minWidth" : null,
    getPopupContainer: m$getPopupContainer,
    builtinPlacements: N,
    popupPlacement: R,
    popupVisible: A,
    popup: e$popup,
    popupAlign: e$popupOffset && {
      offset: e$popupOffset
    },
    action: e$disabled ? [] : [m$triggerSubMenuAction],
    mouseEnterDelay: m$subMenuOpenDelay,
    mouseLeaveDelay: m$subMenuCloseDelay,
    onPopupVisibleChange: e$onVisibleChange,
    forceRender: m$forceSubMenuRender,
    popupMotion: x
  }, e$children)
}
function vt(e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$keyPath = e.keyPath
  var /* [auto-meaningful-name] */e$children = e.children
  var c = useContext(j)
  var /* [auto-meaningful-name] */c$prefixCls = c.prefixCls
  var /* [auto-meaningful-name] */c$forceSubMenuRender = c.forceSubMenuRender
  var /* [auto-meaningful-name] */c$motion = c.motion
  var /* [auto-meaningful-name] */c$defaultMotions = c.defaultMotions
  var /* [auto-meaningful-name] */c$mode = c.mode
  var m = useRef(false)
  m.current = "inline" === c$mode
  var g = useState(!m.current)
  var _ = Module_40.a(g, 2)
  var v = _[0]
  var b = _[1]
  var y = !!m.current && e$open
  useEffect(function () {
    if (m.current) {
      b(false)
    }
  }, [c$mode])
  var E = Module_21.a({}, mt("inline", c$motion, c$defaultMotions))
  if (e$keyPath.length > 1) {
    E.motionAppear = false
  }
  var /* [auto-meaningful-name] */E$onVisibleChanged = E.onVisibleChanged
  E.onVisibleChanged = function (e) {
    if (!(m.current || e)) {
      b(true)
    }
    return null === E$onVisibleChanged || undefined === E$onVisibleChanged ? undefined : E$onVisibleChanged(e)
  }
  return v ? null : createElement(N, {
    mode: "inline",
    locked: !m.current
  }, createElement(ze, Module_19.a({
    visible: y
  }, E, {
    forceRender: c$forceSubMenuRender,
    removeOnLeave: false,
    leavedClassName: "".concat(c$prefixCls, "-hidden")
  }), function (e) {
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */e$style = e.style
    return createElement(re, {
      id: t,
      className: e$className,
      style: e$style
    }, e$children)
  }))
}
var bt = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"]
var yt = ["active"]
var Et = function (e) {
  var t
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$eventKey = e.eventKey
  e.warnKey
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$internalPopupClose = e.internalPopupClose
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$itemIcon = e.itemIcon
  var /* [auto-meaningful-name] */e$expandIcon = e.expandIcon
  var /* [auto-meaningful-name] */e$popupClassName = e.popupClassName
  var /* [auto-meaningful-name] */e$popupOffset = e.popupOffset
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onMouseEnter = e.onMouseEnter
  var /* [auto-meaningful-name] */e$onMouseLeave = e.onMouseLeave
  var /* [auto-meaningful-name] */e$onTitleClick = e.onTitleClick
  var /* [auto-meaningful-name] */e$onTitleMouseEnter = e.onTitleMouseEnter
  var /* [auto-meaningful-name] */e$onTitleMouseLeave = e.onTitleMouseLeave
  var A = Module_54.a(e, bt)
  var I = V(e$eventKey)
  var k = useContext(j)
  var /* [auto-meaningful-name] */k$prefixCls = k.prefixCls
  var /* [auto-meaningful-name] */k$mode = k.mode
  var /* [auto-meaningful-name] */k$openKeys = k.openKeys
  var /* [auto-meaningful-name] */k$disabled = k.disabled
  var /* [auto-meaningful-name] */k$overflowDisabled = k.overflowDisabled
  var /* [auto-meaningful-name] */k$activeKey = k.activeKey
  var /* [auto-meaningful-name] */k$selectedKeys = k.selectedKeys
  var /* [auto-meaningful-name] */k$itemIcon = k.itemIcon
  var /* [auto-meaningful-name] */k$expandIcon = k.expandIcon
  var /* [auto-meaningful-name] */k$onItemClick = k.onItemClick
  var /* [auto-meaningful-name] */k$onOpenChange = k.onOpenChange
  var /* [auto-meaningful-name] */k$onActive = k.onActive
  var /* [auto-meaningful-name] */useContextW$isSubPathKey = useContext(W).isSubPathKey
  var J = G()
  var ee = "".concat(k$prefixCls, "-submenu")
  var te = k$disabled || e$disabled
  var ne = useRef()
  var oe = useRef()
  var ie = e$itemIcon || k$itemIcon
  var ae = e$expandIcon || k$expandIcon
  var se = k$openKeys.includes(e$eventKey)
  var ce = !k$overflowDisabled && se
  var le = useContextW$isSubPathKey(k$selectedKeys, e$eventKey)
  var ue = R(e$eventKey, te, e$onTitleMouseEnter, e$onTitleMouseLeave)
  var /* [auto-meaningful-name] */ue$active = ue.active
  var pe = Module_54.a(ue, yt)
  var fe = useState(false)
  var he = Module_40.a(fe, 2)
  var me = he[0]
  var ge = he[1]
  var _e = function (e) {
    if (!te) {
      ge(e)
    }
  }
  var ve = useMemo(function () {
    return ue$active || "inline" !== k$mode && (me || useContextW$isSubPathKey([k$activeKey], e$eventKey))
  }, [k$mode, ue$active, k$activeKey, me, e$eventKey, useContextW$isSubPathKey])
  var be = M(J.length)
  var ye = $(function (e) {
    if (!(null === e$onClick || undefined === e$onClick)) {
      e$onClick(x(e))
    }
    k$onItemClick(e)
  })
  var Ee = I && "".concat(I, "-popup")
  var Oe = createElement("div", Module_19.a({
    role: "menuitem",
    style: be,
    className: "".concat(ee, "-title"),
    tabIndex: te ? null : -1,
    ref: ne,
    title: "string" === typeof e$title ? e$title : null,
    "data-menu-id": k$overflowDisabled && I ? null : I,
    "aria-expanded": ce,
    "aria-haspopup": true,
    "aria-controls": Ee,
    "aria-disabled": te,
    onClick: function (e) {
      if (!te) {
        if (!(null === e$onTitleClick || undefined === e$onTitleClick)) {
          e$onTitleClick({
            key: e$eventKey,
            domEvent: e
          })
        }
        if ("inline" === k$mode) {
          k$onOpenChange(e$eventKey, !se)
        }
      }
    },
    onFocus: function () {
      k$onActive(e$eventKey)
    }
  }, pe), e$title, createElement(D, {
    icon: "horizontal" !== k$mode ? ae : null,
    props: Module_21.a(Module_21.a({}, e), {}, {
      isOpen: ce,
      isSubMenu: true
    })
  }, createElement("i", {
    className: "".concat(ee, "-arrow")
  })))
  var we = useRef(k$mode)
  if ("inline" !== k$mode) {
    we.current = J.length > 1 ? "vertical" : k$mode
  }
  if (!k$overflowDisabled) {
    var /* [auto-meaningful-name] */we$current = we.current
    Oe = createElement(_t, {
      mode: we$current,
      prefixCls: ee,
      visible: !e$internalPopupClose && ce && "inline" !== k$mode,
      popupClassName: e$popupClassName,
      popupOffset: e$popupOffset,
      popup: createElement(N, {
        mode: "horizontal" === we$current ? "vertical" : we$current
      }, createElement(re, {
        id: Ee,
        ref: oe
      }, e$children)),
      disabled: te,
      onVisibleChange: function (e) {
        if ("inline" !== k$mode) {
          k$onOpenChange(e$eventKey, e)
        }
      }
    }, Oe)
  }
  return createElement(N, {
    onItemClick: ye,
    mode: "horizontal" === k$mode ? "vertical" : k$mode,
    itemIcon: ie,
    expandIcon: ae
  }, createElement(Module_560.a.Item, Module_19.a({
    role: "none"
  }, A, {
    component: "li",
    style: e$style,
    className: Classnames(ee, "".concat(ee, "-").concat(k$mode), e$className, (t = {}, Module_35.a(t, "".concat(ee, "-open"), ce), Module_35.a(t, "".concat(ee, "-active"), ve), Module_35.a(t, "".concat(ee, "-selected"), le), Module_35.a(t, "".concat(ee, "-disabled"), te), t)),
    onMouseEnter: function (e) {
      _e(true)
      if (!(null === e$onMouseEnter || undefined === e$onMouseEnter)) {
        e$onMouseEnter({
          key: e$eventKey,
          domEvent: e
        })
      }
    },
    onMouseLeave: function (e) {
      _e(false)
      if (!(null === e$onMouseLeave || undefined === e$onMouseLeave)) {
        e$onMouseLeave({
          key: e$eventKey,
          domEvent: e
        })
      }
    }
  }), Oe, !k$overflowDisabled && createElement(vt, {
    id: Ee,
    open: ce,
    keyPath: J
  }, e$children)))
}
function Ot(e) {
  var t
  var /* [auto-meaningful-name] */e$eventKey = e.eventKey
  var /* [auto-meaningful-name] */e$children = e.children
  var o = G(e$eventKey)
  var i = J(e$children, o)
  var a = B()
  useEffect(function () {
    if (a) {
      a.registerPath(e$eventKey, o)
      return function () {
        a.unregisterPath(e$eventKey, o)
      }
    }
  }, [o])
  t = a ? i : createElement(Et, e, i)
  return createElement(F.Provider, {
    value: o
  }, t)
}
var wt = function (e) {
  if (!e) {
    return false
  }
  if (e.offsetParent) {
    return true
  }
  if (e.getBBox) {
    var t = e.getBBox()
    if (t.width || t.height) {
      return true
    }
  }
  if (e.getBoundingClientRect) {
    var n = e.getBoundingClientRect()
    if (n.width || n.height) {
      return true
    }
  }
  return false
}
function Ct(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
  if (wt(e)) {
    var n = e.nodeName.toLowerCase()
    var r = ["input", "select", "textarea", "button"].includes(n) || e.isContentEditable || "a" === n && !!e.getAttribute("href")
    var o = e.getAttribute("tabindex")
    var i = Number(o)
    var a = null
    if (o && !Number.isNaN(i)) {
      a = i
    } else {
      if (r && null === a) {
        a = 0
      }
    }
    if (r && e.disabled) {
      a = null
    }
    return null !== a && (a >= 0 || t && a < 0)
  }
  return false
}
function Tt(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
  var n = Module_79.a(e.querySelectorAll("*")).filter(function (e) {
    return Ct(e, t)
  })
  if (Ct(e, t)) {
    n.unshift(e)
  }
  return n
}
var /* [auto-meaningful-name] */S$LEFT = S.LEFT
var /* [auto-meaningful-name] */S$RIGHT = S.RIGHT
var It = S.UP
var /* [auto-meaningful-name] */S$DOWN = S.DOWN
var /* [auto-meaningful-name] */S$ENTER = S.ENTER
var /* [auto-meaningful-name] */S$ESC = S.ESC
var kt = [It, S$DOWN, S$LEFT, S$RIGHT]
function xt(e, t) {
  return Tt(e, true).filter(function (e) {
    return t.has(e)
  })
}
function Dt(e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 1
  if (!e) {
    return null
  }
  var o = xt(e, t)
  var /* [auto-meaningful-name] */o$length = o.length
  var a = o.findIndex(function (e) {
    return n === e
  })
  if (r < 0) {
    if (-1 === a) {
      a = o$length - 1
    } else {
      a -= 1
    }
  } else {
    if (r > 0) {
      a += 1
    }
  }
  return o[a = (a + o$length) % o$length]
}
function Mt(e, t, n, r, i, a, s, c, u, d) {
  var p = useRef()
  var f = useRef()
  f.current = t
  var h = function () {
    pe.cancel(p.current)
  }
  useEffect(function () {
    return function () {
      h()
    }
  }, [])
  return function (l) {
    var /* [auto-meaningful-name] */l$which = l.which
    if ([].concat(kt, [S$ENTER, S$ESC]).includes(l$which)) {
      var g
      var _
      var v
      var b = function () {
        g = new Set()
        _ = new Map()
        v = new Map()
        a().forEach(function (e) {
          var t = document.querySelector("[data-menu-id='".concat(H(r, e), "']"))
          if (t) {
            g.add(t)
            v.set(t, e)
            _.set(e, t)
          }
        })
        return g
      }
      b()
      var y = function (e, t) {
        for (var n = e || document.activeElement; n;) {
          if (t.has(n)) {
            return n
          }
          n = n.parentElement
        }
        return null
      }(_.get(t), g)
      var E = v.get(y)
      var O = function (e, t, n, r) {
        var i
        var a
        var s
        var c
        if ("inline" === e && r === S$ENTER) {
          return {
            inlineTrigger: true
          }
        }
        i = {}
        Module_35.a(i, It, "prev")
        Module_35.a(i, S$DOWN, "next")
        var l = i
        a = {}
        Module_35.a(a, S$LEFT, n ? "next" : "prev")
        Module_35.a(a, S$RIGHT, n ? "prev" : "next")
        Module_35.a(a, S$DOWN, "children")
        Module_35.a(a, S$ENTER, "children")
        var u = a
        s = {}
        Module_35.a(s, It, "prev")
        Module_35.a(s, S$DOWN, "next")
        Module_35.a(s, S$ENTER, "children")
        Module_35.a(s, S$ESC, "parent")
        Module_35.a(s, S$LEFT, n ? "children" : "parent")
        Module_35.a(s, S$RIGHT, n ? "parent" : "children")
        var d = s
        switch (null === (c = {
          inline: l,
          horizontal: u,
          vertical: d,
          inlineSub: l,
          horizontalSub: d,
          verticalSub: d
        }["".concat(e).concat(t ? "" : "Sub")]) || undefined === c ? undefined : c[r]) {
          case "prev":
            return {
              offset: -1,
              sibling: true
            }
          case "next":
            return {
              offset: 1,
              sibling: true
            }
          case "parent":
            return {
              offset: -1,
              sibling: false
            }
          case "children":
            return {
              offset: 1,
              sibling: false
            }
          default:
            return null
        }
      }(e, 1 === s(E, true).length, n, l$which)
      if (!O) {
        return
      }
      if (kt.includes(l$which)) {
        l.preventDefault()
      }
      var w = function (e) {
        if (e) {
          var t = e
          var n = e.querySelector("a")
          if (null === n || undefined === n ? undefined : n.getAttribute("href")) {
            t = n
          }
          var r = v.get(e)
          c(r)
          h()
          p.current = pe(function () {
            if (f.current === r) {
              t.focus()
            }
          })
        }
      }
      if (O.sibling || !y) {
        var C = Dt(y && "inline" !== e ? function (e) {
          for (var t = e; t;) {
            if (t.getAttribute("data-menu-list")) {
              return t
            }
            t = t.parentElement
          }
          return null
        }(y) : i.current, g, y, O.offset)
        w(C)
      } else if (O.inlineTrigger) {
        u(E)
      } else if (O.offset > 0) {
        u(E, true)
        h()
        p.current = pe(function () {
          b()
          var e = y.getAttribute("aria-controls")
          var t = Dt(document.getElementById(e), g)
          w(t)
        }, 5)
      } else if (O.offset < 0) {
        var T = s(E, true)
        var S = T[T.length - 2]
        var A = _.get(S)
        u(S, false)
        w(A)
      }
    }
    if (!(null === d || undefined === d)) {
      d(l)
    }
  }
}
var Lt = Math.random().toFixed(5).toString().slice(2)
var Pt = 0
var /* [auto-meaningful-name] */__RC_UTIL_PATH_SPLIT__ = "__RC_UTIL_PATH_SPLIT__"
var Ft = function (e) {
  return e.join(__RC_UTIL_PATH_SPLIT__)
}
function Gt() {
  var e = useState({})
  var t = Module_40.a(e, 2)[1]
  var n = useRef(new Map())
  var r = useRef(new Map())
  var o = useState([])
  var i = Module_40.a(o, 2)
  var c = i[0]
  var u = i[1]
  var d = useRef(0)
  var p = useRef(false)
  var f = useCallback(function (e, o) {
    var i = Ft(o)
    r.current.set(i, e)
    n.current.set(e, i)
    d.current += 1
    var a
    var /* [auto-meaningful-name] */d$current = d.current
    a = function () {
      if (d$current === d.current) {
        if (!p.current) {
          t({})
        }
      }
    }
    Promise.resolve().then(a)
  }, [])
  var h = useCallback(function (e, t) {
    var o = Ft(t)
    r.current.delete(o)
    n.current.delete(e)
  }, [])
  var m = useCallback(function (e) {
    u(e)
  }, [])
  var g = useCallback(function (e, t) {
    var r = n.current.get(e) || ""
    var o = r.split(__RC_UTIL_PATH_SPLIT__)
    if (t && c.includes(o[0])) {
      o.unshift("rc-menu-more")
    }
    return o
  }, [c])
  var _ = useCallback(function (e, t) {
    return e.some(function (e) {
      return g(e, true).includes(t)
    })
  }, [g])
  var v = useCallback(function (e) {
    var t = "".concat(n.current.get(e)).concat(__RC_UTIL_PATH_SPLIT__)
    var o = new Set()
    Module_79.a(r.current.keys()).forEach(function (e) {
      if (e.startsWith(t)) {
        o.add(r.current.get(e))
      }
    })
    return o
  }, [])
  useEffect(function () {
    return function () {
      p.current = true
    }
  }, [])
  return {
    registerPath: f,
    unregisterPath: h,
    refreshOverflowKeys: m,
    isSubPathKey: _,
    getKeyPath: g,
    getKeys: function () {
      var e = Module_79.a(n.current.keys())
      if (c.length) {
        e.push("rc-menu-more")
      }
      return e
    },
    getSubPathKeys: v
  }
}
var Wt = ["prefixCls", "style", "className", "tabIndex", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName"]
var Ut = []
var Ht = ["className", "title", "eventKey", "children"]
var Vt = ["children"]
var zt = function (e) {
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$title = e.title
  e.eventKey
  var /* [auto-meaningful-name] */e$children = e.children
  var i = Module_54.a(e, Ht)
  var /* [auto-meaningful-name] */useContextJ$prefixCls = useContext(j).prefixCls
  var s = "".concat(useContextJ$prefixCls, "-item-group")
  return createElement("li", Module_19.a({}, i, {
    onClick: function (e) {
      return e.stopPropagation()
    },
    className: Classnames(s, e$className)
  }), createElement("div", {
    className: "".concat(s, "-title"),
    title: "string" === typeof e$title ? e$title : undefined
  }, e$title), createElement("ul", {
    className: "".concat(s, "-list")
  }, e$children))
}
function Yt(e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var n = Module_54.a(e, Vt)
  var r = J(e$children, G(n.eventKey))
  return B() ? r : createElement(zt, A(n, ["warnKey"]), r)
}
function Kt(e) {
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */useContextJ$prefixCls = useContext(j).prefixCls
  return B() ? null : createElement("li", {
    className: Classnames("".concat(useContextJ$prefixCls, "-item-divider"), e$className),
    style: e$style
  })
}
var qt = G
var Xt = function (e) {
  var t
  var n
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var d = undefined === e$prefixCls ? "rc-menu" : e$prefixCls
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  var v = undefined === e$tabIndex ? 0 : e$tabIndex
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$direction = e.direction
  var O = e.id
  var /* [auto-meaningful-name] */e$mode = e.mode
  var C = undefined === e$mode ? "vertical" : e$mode
  var /* [auto-meaningful-name] */e$inlineCollapsed = e.inlineCollapsed
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$disabledOverflow = e.disabledOverflow
  var /* [auto-meaningful-name] */e$subMenuOpenDelay = e.subMenuOpenDelay
  var j = undefined === e$subMenuOpenDelay ? .1 : e$subMenuOpenDelay
  var /* [auto-meaningful-name] */e$subMenuCloseDelay = e.subMenuCloseDelay
  var k = undefined === e$subMenuCloseDelay ? .1 : e$subMenuCloseDelay
  var /* [auto-meaningful-name] */e$forceSubMenuRender = e.forceSubMenuRender
  var /* [auto-meaningful-name] */e$defaultOpenKeys = e.defaultOpenKeys
  var /* [auto-meaningful-name] */e$openKeys = e.openKeys
  var /* [auto-meaningful-name] */e$activeKey = e.activeKey
  var /* [auto-meaningful-name] */e$defaultActiveFirst = e.defaultActiveFirst
  var /* [auto-meaningful-name] */e$selectable = e.selectable
  var H = undefined === e$selectable || e$selectable
  var /* [auto-meaningful-name] */e$multiple = e.multiple
  var z = undefined !== e$multiple && e$multiple
  var /* [auto-meaningful-name] */e$defaultSelectedKeys = e.defaultSelectedKeys
  var /* [auto-meaningful-name] */e$selectedKeys = e.selectedKeys
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$onDeselect = e.onDeselect
  var /* [auto-meaningful-name] */e$inlineIndent = e.inlineIndent
  var ee = undefined === e$inlineIndent ? 24 : e$inlineIndent
  var /* [auto-meaningful-name] */e$motion = e.motion
  var /* [auto-meaningful-name] */e$defaultMotions = e.defaultMotions
  var /* [auto-meaningful-name] */e$triggerSubMenuAction = e.triggerSubMenuAction
  var oe = undefined === e$triggerSubMenuAction ? "hover" : e$triggerSubMenuAction
  var /* [auto-meaningful-name] */e$builtinPlacements = e.builtinPlacements
  var /* [auto-meaningful-name] */e$itemIcon = e.itemIcon
  var /* [auto-meaningful-name] */e$expandIcon = e.expandIcon
  var /* [auto-meaningful-name] */e$overflowedIndicator = e.overflowedIndicator
  var le = undefined === e$overflowedIndicator ? "..." : e$overflowedIndicator
  var /* [auto-meaningful-name] */e$overflowedIndicatorPopupClassName = e.overflowedIndicatorPopupClassName
  var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onOpenChange = e.onOpenChange
  var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
  e.openAnimation
  e.openTransitionName
  var me = Module_54.a(e, Wt)
  var ge = J(e$children, Ut)
  var _e = useState(false)
  var ve = Module_40.a(_e, 2)
  var be = ve[0]
  var ye = ve[1]
  var Ee = useRef()
  var Oe = function (e) {
    var t = m(e, {
      value: e
    })
    var n = Module_40.a(t, 2)
    var r = n[0]
    var o = n[1]
    useEffect(function () {
      Pt += 1
      var e = "".concat(Lt, "-").concat(Pt)
      o("rc-menu-uuid-".concat(e))
    }, [])
    return r
  }(O)
  var we = "rtl" === e$direction
  var Ce = useMemo(function () {
    return "inline" !== C && "vertical" !== C || !e$inlineCollapsed ? [C, false] : ["vertical", e$inlineCollapsed]
  }, [C, e$inlineCollapsed])
  var Te = Module_40.a(Ce, 2)
  var Se = Te[0]
  var Ae = Te[1]
  var Ie = useState(0)
  var je = Module_40.a(Ie, 2)
  var Ne = je[0]
  var Re = je[1]
  var ke = Ne >= ge.length - 1 || "horizontal" !== Se || e$disabledOverflow
  var xe = m(e$defaultOpenKeys, {
    value: e$openKeys,
    postState: function (e) {
      return e || Ut
    }
  })
  var De = Module_40.a(xe, 2)
  var Me = De[0]
  var Le = De[1]
  var Pe = function (e) {
    Le(e)
    if (!(null === e$onOpenChange || undefined === e$onOpenChange)) {
      e$onOpenChange(e)
    }
  }
  var Be = useState(Me)
  var Fe = Module_40.a(Be, 2)
  var Ge = Fe[0]
  var We = Fe[1]
  var Ue = "inline" === Se
  var He = useRef(false)
  useEffect(function () {
    if (Ue) {
      We(Me)
    }
  }, [Me])
  useEffect(function () {
    if (He.current) {
      if (Ue) {
        Le(Ge)
      } else {
        Pe(Ut)
      }
    } else {
      He.current = true
    }
  }, [Ue])
  var Ve = Gt()
  var /* [auto-meaningful-name] */Ve$registerPath = Ve.registerPath
  var /* [auto-meaningful-name] */Ve$unregisterPath = Ve.unregisterPath
  var /* [auto-meaningful-name] */Ve$refreshOverflowKeys = Ve.refreshOverflowKeys
  var /* [auto-meaningful-name] */Ve$isSubPathKey = Ve.isSubPathKey
  var /* [auto-meaningful-name] */Ve$getKeyPath = Ve.getKeyPath
  var /* [auto-meaningful-name] */Ve$getKeys = Ve.getKeys
  var /* [auto-meaningful-name] */Ve$getSubPathKeys = Ve.getSubPathKeys
  var Je = useMemo(function () {
    return {
      registerPath: Ve$registerPath,
      unregisterPath: Ve$unregisterPath
    }
  }, [Ve$registerPath, Ve$unregisterPath])
  var $e = useMemo(function () {
    return {
      isSubPathKey: Ve$isSubPathKey
    }
  }, [Ve$isSubPathKey])
  useEffect(function () {
    Ve$refreshOverflowKeys(ke ? Ut : ge.slice(Ne + 1).map(function (e) {
      return e.key
    }))
  }, [Ne, ke])
  var et = m(e$activeKey || e$defaultActiveFirst && (null === (t = ge[0]) || undefined === t ? undefined : t.key), {
    value: e$activeKey
  })
  var tt = Module_40.a(et, 2)
  var nt = tt[0]
  var rt = tt[1]
  var ot = $(function (e) {
    rt(e)
  })
  var it = $(function () {
    rt(undefined)
  })
  var at = m(e$defaultSelectedKeys || [], {
    value: e$selectedKeys,
    postState: function (e) {
      return Array.isArray(e) ? e : null === e || undefined === e ? Ut : [e]
    }
  })
  var st = Module_40.a(at, 2)
  var ct = st[0]
  var lt = st[1]
  var ut = $(function (e) {
    if (!(null === e$onClick || undefined === e$onClick)) {
      e$onClick(x(e))
    }
    (function (e) {
      if (H) {
        var t
        var /* [auto-meaningful-name] */e$key = e.key
        var r = ct.includes(e$key)
        t = z ? r ? ct.filter(function (e) {
          return e !== e$key
        }) : [].concat(Module_79.a(ct), [e$key]) : [e$key]
        lt(t)
        var o = Module_21.a(Module_21.a({}, e), {}, {
          selectedKeys: t
        })
        if (r) {
          if (!(null === e$onDeselect || undefined === e$onDeselect)) {
            e$onDeselect(o)
          }
        } else {
          if (!(null === e$onSelect || undefined === e$onSelect)) {
            e$onSelect(o)
          }
        }
      }
      if (!z && Me.length && "inline" !== Se) {
        Pe(Ut)
      }
    })(e)
  })
  var dt = $(function (e, t) {
    var n = Me.filter(function (t) {
      return t !== e
    })
    if (t) {
      n.push(e)
    } else if ("inline" !== Se) {
      var r = Ve$getSubPathKeys(e)
      n = n.filter(function (e) {
        return !r.has(e)
      })
    }
    if (!Module_1041(Me, n)) {
      Pe(n)
    }
  })
  var pt = $(e$getPopupContainer)
  var ft = Mt(Se, nt, we, Oe, Ee, Ve$getKeys, Ve$getKeyPath, rt, function (e, t) {
    var n = null !== t && undefined !== t ? t : !Me.includes(e)
    dt(e, n)
  }, e$onKeyDown)
  useEffect(function () {
    ye(true)
  }, [])
  var ht = "horizontal" !== Se || e$disabledOverflow ? ge : ge.map(function (e, t) {
    return createElement(N, {
      key: e.key,
      overflowDisabled: t > Ne
    }, e)
  })
  var mt = createElement(Module_560.a, Module_19.a({
    id: O,
    ref: Ee,
    prefixCls: "".concat(d, "-overflow"),
    component: "ul",
    itemComponent: Q,
    className: Classnames(d, "".concat(d, "-root"), "".concat(d, "-").concat(Se), e$className, (n = {}, Module_35.a(n, "".concat(d, "-inline-collapsed"), Ae), Module_35.a(n, "".concat(d, "-rtl"), we), n)),
    dir: e$direction,
    style: e$style,
    role: "menu",
    tabIndex: v,
    data: ht,
    renderRawItem: function (e) {
      return e
    },
    renderRawRest: function (e) {
      var /* [auto-meaningful-name] */e$length = e.length
      var n = e$length ? ge.slice(-e$length) : null
      return createElement(Ot, {
        eventKey: "rc-menu-more",
        title: le,
        disabled: ke,
        internalPopupClose: 0 === e$length,
        popupClassName: e$overflowedIndicatorPopupClassName
      }, n)
    },
    maxCount: "horizontal" !== Se || e$disabledOverflow ? Module_560.a.INVALIDATE : Module_560.a.RESPONSIVE,
    ssr: "full",
    "data-menu-list": true,
    onVisibleChange: function (e) {
      Re(e)
    },
    onKeyDown: ft
  }, me))
  return createElement(U.Provider, {
    value: Oe
  }, createElement(N, {
    prefixCls: d,
    mode: Se,
    openKeys: Me,
    rtl: we,
    disabled: e$disabled,
    motion: be ? e$motion : null,
    defaultMotions: be ? e$defaultMotions : null,
    activeKey: nt,
    onActive: ot,
    onInactive: it,
    selectedKeys: ct,
    inlineIndent: ee,
    subMenuOpenDelay: j,
    subMenuCloseDelay: k,
    forceSubMenuRender: e$forceSubMenuRender,
    builtinPlacements: e$builtinPlacements,
    triggerSubMenuAction: oe,
    getPopupContainer: pt,
    itemIcon: e$itemIcon,
    expandIcon: e$expandIcon,
    onItemClick: ut,
    onOpenChange: dt
  }, createElement(W.Provider, {
    value: $e
  }, mt), createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": true
  }, createElement(P.Provider, {
    value: Je
  }, ge))))
}
Xt.Item = Q
Xt.SubMenu = Ot
Xt.ItemGroup = Yt
Xt.Divider = Kt
export { Ot }
export { Yt }
export { Kt }
export { qt }
export { Xt }
