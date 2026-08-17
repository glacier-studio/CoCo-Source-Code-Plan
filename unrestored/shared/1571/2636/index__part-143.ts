/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-143
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"./47"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_188 from /* 188 */"./188"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useEffect, useCallback } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1205 from /* 1205 */"./1205/index"
import * as /* [auto-meaningful-name] */Module_1058 from /* 1058 */"./1058/index"
import * as /* [auto-meaningful-name] */Module_1022 from /* 1022 */"./1022/index"
import * as /* [auto-meaningful-name] */Module_99 from /* 99 */"./99"
import /* [auto-meaningful-name] */Module_991 from /* 99 */"./99"
import * as /* [auto-meaningful-name] */Module_301 from /* 301 */"./301/index"
var QC = ["addPrimitiveVariableName", "addArrayVariableName", "object.createNewObject", "addDocKey"]
var ZC = memo(function () {
  var e = useSelector(function (e) {
    return e.block.get("createVariableDialog")
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$validators = e.validators
  var /* [auto-meaningful-name] */e$onConfirm = e.onConfirm
  var /* [auto-meaningful-name] */e$tips = e.tips
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var c = useState("")
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState("")
  var m = Module_10.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = useState(false)
  var y = Module_10.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = useState(Module_18.i.GLOBAL)
  var T = Module_10.a(w, 2)
  var A = T[0]
  var j = T[1]
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var k = useRef(null)
  var x = useRef(true)
  var D = useSelector(function (e) {
    return e.project.currentScreenIndex
  })
  var M = useDispatch()
  useEffect(function () {
    if (e$visible) {
      setTimeout(function () {
        var /* [auto-meaningful-name] */k$current
        if (!(null === (k$current = k.current) || undefined === k$current)) {
          k$current.focus()
        }
      }, 0)
    }
  }, [e$visible])
  var L = useCallback(function (e) {
    var t = ""
    if (e) {
      if (e$validators && x.current) {
        var n
        var r = Module_47.a(e$validators)
        try {
          for (r.s(); !(n = r.n()).done;) {
            var /* [auto-meaningful-name] */n$value = n.value
            if (!n$value.validator(e, A)) {
              t = n$value.message
              break
            }
          }
        } catch (a) {
          r.e(a)
        } finally {
          r.f()
        }
        d(t)
      }
    } else {
      d("")
    }
    v(e)
  }, [e$validators, A])
  var P = useCallback(function () {
    v("")
    d("")
    j(Module_18.i.GLOBAL)
    M(Src_editor_redux_common_actions.lh())
    if (e$onClose) {
      e$onClose()
    }
  }, [M, e$onClose])
  var B = useCallback(function (e) {
    if (E && !e) {
      d(useIntl$formatMessage({
        id: "invalidVariableName"
      }))
    }
  }, [useIntl$formatMessage, E])
  var F = useCallback(function () {
    if (!u && g) {
      if (e$onConfirm) {
        e$onConfirm(g, A)
      }
      P()
    }
  }, [P, g, e$onConfirm, A, u])
  var G = function () {
    O(true)
  }
  var W = function () {
    O(false)
  }
  var U = useCallback(function () {
    x.current = false
  }, [])
  var H = useCallback(function (e) {
    x.current = true
    var /* [auto-meaningful-name] */e$target$value = e.target.value
    L(e$target$value)
  }, [L])
  var V = function (e) {
    j(e)
    var t = ""
    if (g && e$validators) {
      var n
      var r = Module_47.a(e$validators)
      try {
        for (r.s(); !(n = r.n()).done;) {
          var /* [auto-meaningful-name] */n$value = n.value
          if (!n$value.validator(g, e)) {
            t = n$value.message
            break
          }
        }
      } catch (a) {
        r.e(a)
      } finally {
        r.f()
      }
    }
    d(t)
  }
  var q = ""
  var X = ""
  switch (e$title) {
    case "addPrimitiveVariableName":
      q = useIntl$formatMessage({
        id: "screenVariable"
      })
      X = useIntl$formatMessage({
        id: "globalVariable"
      })
      break
    case "addArrayVariableName":
      q = useIntl$formatMessage({
        id: "screenArray"
      })
      X = useIntl$formatMessage({
        id: "globalArray"
      })
      break
    case "object.createNewObject":
      q = useIntl$formatMessage({
        id: "object.screenObject"
      })
      X = useIntl$formatMessage({
        id: "object.globalObject"
      })
  }
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: e$visible,
    className: Classnames(Module_991.nameDialog),
    withPortal: true,
    onClose: P
  }, React.createElement(Module_188.a, {
    useCapture: true
  }, React.createElement(Module_188.b, {
    keys: "enter",
    callback: F
  })), React.createElement("p", {
    className: Module_991.dialogTitle
  }, QC.includes(e$title) ? useIntl$formatMessage({
    id: e$title
  }) : useIntl$formatMessage({
    id: "addCurrentScreenIndexTitle"
  }, {
    currentScreenIndex: D + 1
  })), React.createElement("div", {
    className: Classnames(Module_991.inputWrapper, u && Module_991.inputWaringWrapper)
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "name"
  })), React.createElement(Src_shared_ui_components_index.k, {
    ref: k,
    warning: !!u,
    onChange: L,
    onBlur: B,
    onCompositionStart: U,
    onCompositionEnd: H,
    value: g,
    isTrimmed: true,
    placeholder: e$placeholder
  }), u && React.createElement("div", {
    className: Module_991.warningTips
  }, " ", u)), ("addPrimitiveVariableName" === e$title || "addArrayVariableName" === e$title || "object.createNewObject" === e$title) && React.createElement("div", {
    className: Module_991.inputWrapper
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "property"
  })), React.createElement("div", {
    className: Module_991.propertyBox,
    onMouseUp: G,
    onMouseDown: W
  }, React.createElement(Src_shared_ui_components_index.d, {
    shape: "square",
    icon: "icon-style-selected",
    className: A === Module_18.i.GLOBAL ? Module_991.active : "",
    onClick: V.bind(null, Module_18.i.GLOBAL)
  }, X), React.createElement(Src_shared_ui_components_index.d, {
    shape: "square",
    icon: "icon-style-selected",
    className: A === Module_18.i.SCREEN ? Module_991.active : "",
    onClick: V.bind(null, Module_18.i.SCREEN)
  }, React.createElement("div", {
    style: {
      display: " inline-block",
      position: "relative",
      marginRight: "4px"
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    className: "coco-iconfont-screen-bg",
    type: D > 8 ? "icon-screen-variable-plus" : "icon-screen-variable"
  }), React.createElement("span", {
    style: {
      position: "absolute",
      transform: "scale(0.5)",
      fontFamily: "sans-serif",
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      top: D > 8 ? "-3px" : "-2px",
      fontSize: 16,
      color: "#fff"
    }
  }, D + 1)), React.createElement("span", null, q)))), React.createElement("div", {
    className: Module_991.confirmBox,
    onMouseUp: G,
    onMouseDown: W
  }, React.createElement(Src_shared_ui_components_index.d, {
    onClick: P
  }, useIntl$formatMessage({
    id: "cancel"
  })), React.createElement(Src_shared_ui_components_index.d, {
    onClick: F,
    type: "primary",
    disabled: !!u || !g
  }, useIntl$formatMessage({
    id: "confirm"
  }))), e$tips && React.createElement("span", {
    className: Module_991.bottomTips
  }, e$tips))
})
export { ZC }
