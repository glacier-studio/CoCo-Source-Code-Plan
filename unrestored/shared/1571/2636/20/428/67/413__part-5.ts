/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../../34/347/112"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../../../90"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_513 from /* 513 */"../../../513"
import /* [auto-meaningful-name] */Module_5131 from /* 513 */"../../../513"
import * as /* [auto-meaningful-name] */Module_433 from /* 433 */"../../../433"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"../../../133/index"
var V = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$parentId = e.parentId
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$resizeMode = e$attributes.resizeMode
  var /* [auto-meaningful-name] */e$attributes$borderRadius = e$attributes.borderRadius
  var /* [auto-meaningful-name] */e$attributes$fileId = e$attributes.fileId
  var b = useRef(null)
  var y = Module_112.b(e$attributes$fileId)
  if (!y) {
    y = e$parentId ? Module_133.i : Module_133.m
  }
  return React.createElement("div", {
    id: t,
    className: Classnames(Module_5131.imageWidget, Module_90.b),
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-type": Src_editor_widget_builtIn_types.v,
    "data-scale-mode": Src_editor_widget_builtIn_types.p.PROPORTIONAL,
    ref: b,
    onClick: function () {
      Module_20.emitWidgetEvent(e$type, "onImagePress", t)
      Module_20.emitImagePress(t)
      Module_55.b.playerWidgetLog({
        widgetId: e$parentId ? t.replace(/_\d+$/, "") : t,
        widgetType: e$type,
        message: "onWidgetPress"
      })
    },
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$parentId ? "100%" : e$size.height,
      width: e$parentId ? "100%" : e$size.width,
      visibility: e$visible ? undefined : "hidden",
      pointerEvents: e$visible ? undefined : "none",
      position: e$parentId ? "static" : "absolute",
      backgroundColor: Color(e$attributes$backgroundColor).toString(),
      backgroundImage: "url(".concat(y, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: Module_433.a(e$attributes$resizeMode),
      borderRadius: e$attributes$borderRadius,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    }
  }, React.createElement("img", {
    src: y,
    alt: "",
    style: {
      visibility: "hidden",
      borderRadius: e$attributes$borderRadius,
      objectFit: Module_433.b(e$attributes$resizeMode)
    }
  }))
})
export { V }
