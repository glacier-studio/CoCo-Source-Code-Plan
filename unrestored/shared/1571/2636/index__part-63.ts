/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-63
 */

"use strict"

import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Src_editor_ui_PreviewArea_ContextMenu_styles_module_css from /* 472 */"../../../../src/editor/ui/PreviewArea/ContextMenu/styles.module.css"
import /* [auto-meaningful-name] */Src_editor_ui_PreviewArea_ContextMenu_styles_module_css1 from /* 472 */"../../../../src/editor/ui/PreviewArea/ContextMenu/styles.module.css"
var bh = memo(function (e) {
  var /* [auto-meaningful-name] */e$actorId = e.actorId
  var /* [auto-meaningful-name] */e$top = e.top
  var /* [auto-meaningful-name] */e$left = e.left
  var /* [auto-meaningful-name] */e$stage = e.stage
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var a = useRef(null)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  useEffect(function () {
    var /* [auto-meaningful-name] */a$current = a.current
    var t = function (t) {
      if (!(t.target instanceof Element && (null === a$current || undefined === a$current ? undefined : a$current.contains(t.target)))) {
        e$onClose()
      }
    }
    document.addEventListener("mousedown", t)
    return function () {
      return document.removeEventListener("mousedown", t)
    }
  }, [e$onClose])
  return React.createElement("div", {
    ref: a,
    className: Src_editor_ui_PreviewArea_ContextMenu_styles_module_css1.wrapper,
    style: {
      top: e$top,
      left: e$left,
      position: "absolute",
      height: "auto"
    }
  }, React.createElement("div", {
    className: Src_editor_ui_PreviewArea_ContextMenu_styles_module_css1.menuItem,
    onClick: function () {
      var /* [auto-meaningful-name] */a$current
      var t
      var n = null === e$stage || undefined === e$stage ? undefined : e$stage.components.get_editor()
      if (n) {
        n.toggle_pivot_mode(true)
        if (!(null === (a$current = a.current) || undefined === a$current || null === (t = a$current.closest("[data-widget-type=\"CANVAS_WIDGET\"]")) || undefined === t)) {
          t.classList.add("actor-changing")
        }
        if (!(null === e$stage || undefined === e$stage)) {
          e$stage.render()
        }
      }
      e$onClose()
    }
  }, useIntl$formatMessage({
    id: "actor.setPivot"
  })), React.createElement("div", {
    className: Src_editor_ui_PreviewArea_ContextMenu_styles_module_css1.menuItem,
    onClick: function () {
      var e = (null === e$stage || undefined === e$stage ? undefined : e$stage.actors.get_actor(e$actorId)) || {}
      var /* [auto-meaningful-name] */e$is_error = e.is_error
      var /* [auto-meaningful-name] */e$value = e.value
      if (e$is_error && e$value && !e$is_error(e$value)) {
        e$value.reset_pivot()
        if (!(null === e$stage || undefined === e$stage)) {
          e$stage.render()
        }
        e$onClose()
      }
    }
  }, useIntl$formatMessage({
    id: "actor.resetPivot"
  })))
})
export { bh }
