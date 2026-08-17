/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：540
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import { memo, useRef, useState, useCallback, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import /* [auto-meaningful-name] */ReactDom1 from /* 80 */"react-dom"
import /* 868 */"./styles.css"
import * as /* [auto-meaningful-name] */Iconfont_index from /* 94 */"../Iconfont/index"
var _a
_a = memo(function (e) {
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$maskClosable = e.maskClosable
  var p = undefined !== e$maskClosable && e$maskClosable
  var /* [auto-meaningful-name] */e$mask = e.mask
  var h = undefined === e$mask || e$mask
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$showCloseButton = e.showCloseButton
  var v = undefined === e$showCloseButton || e$showCloseButton
  var /* [auto-meaningful-name] */e$withPortal = e.withPortal
  var y = undefined !== e$withPortal && e$withPortal
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$footer = e.footer
  var w = useRef(null)
  var C = useRef(null)
  var T = useState(false)
  var S = Module_10.a(T, 2)
  S[0]
  var A = S[1]
  var I = document.getElementById("_cocoDialogContainer")
  if (!I) {
    (I = document.createElement("div")).id = "_cocoDialogContainer"
    document.body.appendChild(I)
  }
  var j = useCallback(function () {
    if (e$onClose) {
      e$onClose()
    }
  }, [e$onClose])
  var N = useCallback(function () {
    if (p) {
      j()
    }
  }, [j, p])
  useEffect(function () {
    var /* [auto-meaningful-name] */w$current = w.current
    var t = function (e) {
      var /* [auto-meaningful-name] */C$current
      if (!(null === (C$current = C.current) || undefined === C$current ? undefined : C$current.contains(e.target))) {
        e.stopPropagation()
      }
    }
    if (w$current) {
      w$current.addEventListener("keydown", t)
    }
    return function () {
      if (!(null === w$current || undefined === w$current)) {
        w$current.removeEventListener("keydown", t)
      }
    }
  }, [])
  useEffect(function () {
    if (e$visible) {
      A(true)
    }
  }, [e$visible])
  var R = React1.createElement("div", {
    "data-html2canvas-ignore": "true",
    ref: w,
    tabIndex: -1,
    className: Classnames1("coco-dialog", e$className),
    style: Module_6.a({
      display: e$visible ? "block" : "none"
    }, e$style)
  }, h && React1.createElement("div", {
    className: e$visible ? "coco-dialog-mask" : Classnames1("coco-dialog-mask", "hidden"),
    onClick: N
  }), React1.createElement("div", {
    className: "coco-dialog-scroll"
  }, React1.createElement("div", {
    className: e$visible ? Classnames1("coco-dialog-wrapper", "show") : Classnames1("coco-dialog-wrapper", "hidden"),
    onAnimationEnd: function () {
      if (!e$visible) {
        A(false)
      }
    }
  }, React1.createElement("div", {
    className: e$title && v ? "coco-dialog-title" : ""
  }, e$title && React1.createElement("div", null, e$title), v && React1.createElement("span", {
    className: "coco-dialog-close",
    onClick: j
  }, React1.createElement(Iconfont_index.a, {
    type: "icon-close"
  }))), React1.createElement("div", {
    className: "coco-dialog-content",
    ref: C
  }, e$children), e$footer && React1.createElement("div", {
    className: "coco-dialog-footer"
  }, e$footer))))
  return y ? ReactDom1.createPortal(R, I) : R
})
export { _a as a }
export default _a
