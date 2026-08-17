/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-27
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26/index"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"./27"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Src_editor_ui_PreviewArea_ContextMenu_index from /* 1512 */"../../../../src/editor/ui/PreviewArea/ContextMenu/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"./39"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"./58/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"./59/index"
import * as /* [auto-meaningful-name] */Src_editor_ui_PreviewArea_styles_module_css from /* 279 */"../../../../src/editor/ui/PreviewArea/styles.module.css"
import /* [auto-meaningful-name] */Src_editor_ui_PreviewArea_styles_module_css1 from /* 279 */"../../../../src/editor/ui/PreviewArea/styles.module.css"
var co = function (e) {
  Module_58.a(n, e)
  var t = Module_59.a(n)
  function n(e) {
    var r
    Module_27.a(this, n);
    (r = t.call(this, e)).handleMouseDown = function (e) {
      if (0 === e.button) {
        r.setState({
          isDragging: true
        })
        document.addEventListener("mousemove", r.handleMouseMove)
        document.addEventListener("mouseup", r.handleMouseUp)
      }
    }
    r.handleMouseMove = function (e) {
      var /* [auto-meaningful-name] */r$props$previewAreaRef$current = r.props.previewAreaRef.current
      if (r$props$previewAreaRef$current) {
        var /* [auto-meaningful-name] */r$props$previewAreaRef$current$getClientRects0$width = r$props$previewAreaRef$current.getClientRects()[0].width
        var o = Math.max(Math.min(window.innerWidth / 2, r$props$previewAreaRef$current$getClientRects0$width + e.movementX), 514)
        r$props$previewAreaRef$current.style.width = o + "px"
        r.props.onDrag(o)
      }
    }
    r.handleMouseUp = function () {
      r.setState({
        isDragging: false
      })
      document.removeEventListener("mousemove", r.handleMouseMove)
      document.removeEventListener("mouseup", r.handleMouseUp)
      Module_26.z.resizeWorkspace()
      var /* [auto-meaningful-name] */r$props$previewAreaRef$current = r.props.previewAreaRef.current
      if (null === r$props$previewAreaRef$current || undefined === r$props$previewAreaRef$current ? undefined : r$props$previewAreaRef$current.getClientRects()[0].width) {
        r.props.onDragEnd(r$props$previewAreaRef$current.getClientRects()[0].width)
      }
    }
    r.state = {
      isDragging: false
    }
    return r
  }
  Module_39.a(n, [
    {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$state$isDragging = this.state.isDragging
        return React.createElement("div", {
          className: Classnames(Src_editor_ui_PreviewArea_styles_module_css1.dragBar, Module_11.a({}, Src_editor_ui_PreviewArea_styles_module_css1.active, this$state$isDragging)),
          onMouseEnter: this.props.onEnter,
          onMouseLeave: this.props.onLeave,
          onMouseDown: this.handleMouseDown
        })
      }
    }
  ])
  return n
}(React.PureComponent)
var lo = memo(co)
export { lo }
