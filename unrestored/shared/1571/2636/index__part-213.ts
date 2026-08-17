/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-213
 */

"use strict"

import { EP, OP, wP, TP, IP } from "./index__part-212"
var CP = false
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"./28/index"
import /* [auto-meaningful-name] */Quill from /* 620 */"quill"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"./47"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useCallback, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_707 from /* 707 */"./707"
import /* [auto-meaningful-name] */Module_7071 from /* 707 */"./707"
var kP = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useDispatch()
  var n = useSelector(function (e) {
    return e.common.richTextEditorDialogInfo
  })
  var /* [auto-meaningful-name] */n$visible = n.visible
  var /* [auto-meaningful-name] */n$onConfirm = n.onConfirm
  var /* [auto-meaningful-name] */n$content = n.content
  var a = undefined === n$content ? "" : n$content
  var s = useState(false)
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState(null)
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useRef(null)
  var b = useRef(null)
  var y = useRef(null)
  var E = useRef(null)
  var O = useRef(null)
  var w = useRef(null)
  var C = useCallback(function () {
    t(Src_editor_redux_common_actions.Yg())
  }, [t])
  useEffect(function () {
    if (y.current && w.current) {
      var t = {
        placeholder: useIntl$formatMessage({
          id: "RichTextEditor.inputPlaceholder"
        }),
        theme: "snow",
        bounds: w.current,
        modules: {
          toolbar: [
            [
              {
                font: OP
              }, {
                size: wP
              }
            ], [
              "bold", "italic", "underline", "strike", {
                color: ["#000"]
              }, {
                background: ["transparent"]
              }
            ], [
              {
                script: "super"
              }, {
                script: "sub"
              }, {
                header: "1"
              }, {
                header: "2"
              }, "blockquote"
            ], [
              {
                list: "ordered"
              }, {
                list: "bullet"
              }, {
                indent: "-1"
              }, {
                indent: "+1"
              }, {
                align: []
              }
            ], ["link", "clean"]
          ]
        }
      }
      E.current = new Quill(y.current, t);
      (function (e, t) {
        var n
        var r
        if (!(null === (n = t.querySelector(".ql-font .ql-picker-options [data-value=\"sans-serif\"]")) || undefined === n)) {
          n.click()
        }
        if (!(null === (r = t.querySelector(".ql-size .ql-picker-options [data-value=\"".concat(wP[3], "\"]"))) || undefined === r)) {
          r.click()
        }
        TP(t, "color", "#000")
        TP(t, "background", "transparent")
        e.on("selection-change", function () {
          return IP(e, t)
        })
        t.addEventListener("keyup", function (n) {
          if ("Enter" === n.key) {
            setTimeout(function () {
              IP(e, t)
            })
          }
        })
        e.theme.tooltip.boundsContainer = t.querySelector(".ql-editor")
      })(E.current, w.current)
      try {
        E.current.theme.tooltip.root.querySelector("input[data-link]").dataset.link = ""
      } catch (n) {
        console.error("quill link error")
      }
    }
  }, [useIntl$formatMessage])
  useEffect(function () {
    if (n$visible && E.current) {
      E.current.root.innerHTML = Module_28.i(a)
    }
  }, [a, n$visible])
  useEffect(function () {
    if (n$visible) {
      !function () {
        if (!CP) {
          CP = true
          var e
          var t = Module_47.a(Module_53.a)
          try {
            for (t.s(); !(e = t.n()).done;) {
              var /* [auto-meaningful-name] */e$value = e.value
              if (null === e$value || undefined === e$value ? undefined : e$value.cdnUrl) {
                Src_shared_tools_index.bb(e$value.id, e$value.cdnUrl)
              }
            }
          } catch (r) {
            t.e(r)
          } finally {
            t.f()
          }
        }
      }()
      var e = function (e) {
        var /* [auto-meaningful-name] */e$target = e.target
        if (!(e$target instanceof Element ? e$target.closest(".ant-popover") : null)) {
          var n = e$target instanceof Element ? e$target.closest("span.ql-picker") : null
          u(false)
          if (n && (n.classList.contains("ql-color") || n.classList.contains("ql-background")) && n !== v.current) {
            setTimeout(function () {
              g(n)
              u(true)
            }, 0)
          } else {
            setTimeout(function () {
              g(null)
            }, 20)
          }
        }
      }
      document.body.addEventListener("click", e)
      return function () {
        return document.body.removeEventListener("click", e)
      }
    }
    g(null)
  }, [n$visible])
  useEffect(function () {
    v.current = m
  }, [m])
  useEffect(function () {
    var /* [auto-meaningful-name] */E$current = E.current
    if (E$current && n$visible) {
      if (l) {
        O.current = E$current.getSelection(true)
        var t = null === m || undefined === m ? undefined : m.dataset.color
        if (b.current && t) {
          b.current.setRGBA(function (e) {
            if (7 === (e = e.toUpperCase()).length) {
              e += "FF"
            }
            return e
          }(t))
        }
      } else {
        var n = EP(E$current)
        if (n.background) {
          E$current.format("background", n.background)
        }
        if (n.color) {
          E$current.format("color", n.color)
        }
      }
    }
  }, [l, n$visible])
  var T = useCallback(function () {
    if (E.current) {
      var /* [auto-meaningful-name] */E$current$root$innerHTML = E.current.root.innerHTML
      if (n$onConfirm) {
        n$onConfirm(E$current$root$innerHTML)
      }
    }
    C()
  }, [C, n$onConfirm])
  var A = useCallback(function (e) {
    var /* [auto-meaningful-name] */e$target = e.target
    if ((e$target instanceof Element ? e$target.closest("button.ql-clean") : null) && E.current && w.current) {
      IP(E.current, w.current)
    }
  }, [])
  var j = useCallback(function (e, t) {
    var /* [auto-meaningful-name] */document$activeElement
    if ("INPUT" !== (null === (document$activeElement = document.activeElement) || undefined === document$activeElement ? undefined : document$activeElement.nodeName) && !t) {
      var /* [auto-meaningful-name] */v$current = v.current
      var /* [auto-meaningful-name] */E$current = E.current
      var /* [auto-meaningful-name] */O$current = O.current
      if (v$current && E$current) {
        v$current.dataset.color = e
        v$current.style.setProperty("--current-color", e)
        if (O$current) {
          E$current.setSelection(O$current.index, O$current.length)
        }
        if (v$current.classList.contains("ql-color")) {
          E$current.format("color", e)
        }
        if (v$current.classList.contains("ql-background")) {
          E$current.format("background", e)
        }
      }
    }
  }, [])
  var N = Src_shared_tools_index.H(m, null === m || undefined === m ? undefined : m.closest(".coco-dialog-wrapper"))
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: n$visible,
    withPortal: true,
    onClose: C,
    title: useIntl$formatMessage({
      id: "RichTextEditor.editDialogTitle"
    }),
    className: Module_7071.container
  }, React.createElement("div", {
    className: Module_7071.header
  }), React.createElement("div", {
    className: Module_7071.content,
    ref: w,
    onClick: A
  }, React.createElement("div", {
    className: Module_7071.editor
  }, React.createElement("div", {
    ref: y
  }))), React.createElement("div", {
    className: Module_7071.footer
  }, React.createElement(Src_shared_ui_components_index.d, {
    className: Module_7071.save,
    type: "primary",
    onClick: T
  }, useIntl$formatMessage({
    id: "save"
  }))), React.createElement(Module_1213.a, {
    placement: "rightBottom",
    visible: l,
    content: l && React.createElement(Src_shared_ui_components_index.q, {
      ref: b,
      onChange: j
    })
  }, React.createElement("span", {
    className: Module_7071.paletteTrigger,
    style: {
      top: null === N || undefined === N ? undefined : N.top,
      left: null === N || undefined === N ? undefined : N.left
    }
  })))
})
export { kP }
