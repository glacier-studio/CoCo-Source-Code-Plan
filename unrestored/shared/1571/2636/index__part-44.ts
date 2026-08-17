/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-44
 */

"use strict"

import { qp, Xp, Qp } from "./index__part-43"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"./90"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"./133/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_513 from /* 513 */"./513"
import /* [auto-meaningful-name] */Module_5131 from /* 513 */"./513"
import * as /* [auto-meaningful-name] */Module_433 from /* 433 */"./433"
import * as /* [auto-meaningful-name] */Module_206 from /* 206 */"./206"
var tf = {
  icon: Module_133.a,
  title: Module_133.b,
  type: Src_editor_widget_builtIn_types.v,
  previewAreaWidgetTitle: "imageBox",
  component: function (e) {
    var t = e.id
    var /* [auto-meaningful-name] */e$position = e.position
    var /* [auto-meaningful-name] */e$visible = e.visible
    var /* [auto-meaningful-name] */e$opacity = e.opacity
    var /* [auto-meaningful-name] */e$size = e.size
    var /* [auto-meaningful-name] */e$parentId = e.parentId
    var /* [auto-meaningful-name] */e$attributes = e.attributes
    var /* [auto-meaningful-name] */e$attributes$resizeMode = e$attributes.resizeMode
    var /* [auto-meaningful-name] */e$attributes$borderRadius = e$attributes.borderRadius
    var /* [auto-meaningful-name] */e$attributes$fileId = e$attributes.fileId
    var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
    var p = useRef(null)
    var m = Module_33.Fb(e$attributes$fileId) || Module_133.m
    return React.createElement("div", {
      id: t,
      className: Classnames(Module_5131.imageWidget, Module_90.b, Module_11.a({}, Module_5131.hide, !e$visible)),
      "data-role": Src_editor_widget_builtIn_types.M,
      "data-widget-type": Src_editor_widget_builtIn_types.v,
      "data-scale-mode": Src_editor_widget_builtIn_types.p.PROPORTIONAL,
      ref: p,
      style: {
        top: e$position.y,
        left: e$position.x,
        height: e$parentId ? "100%" : e$size.height,
        width: e$parentId ? "100%" : e$size.width,
        position: e$parentId ? "static" : "absolute",
        backgroundColor: e$attributes$backgroundColor,
        backgroundImage: "url(".concat(m, ")"),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: Module_433.a(e$attributes$resizeMode),
        borderRadius: e$attributes$borderRadius,
        opacity: undefined === e$opacity ? undefined : e$opacity / 100
      }
    }, React.createElement("img", {
      src: m,
      alt: "",
      style: {
        visibility: "hidden",
        borderRadius: e$attributes$borderRadius,
        objectFit: Module_433.b(e$attributes$resizeMode)
      }
    }))
  },
  editConfig: qp,
  childWidgetEditConfig: Xp,
  blockConfig: Qp,
  isInvisibleWidget: Module_133.k,
  hasAnyWidget: true,
  widget: {
    isGlobalWidget: Module_133.j,
    size: {
      width: Module_133.l,
      height: Module_133.h
    },
    attributes: {
      borderRadius: 0,
      fileId: Module_133.i,
      resizeMode: Module_206.a.CONTAIN,
      backgroundColor: Module_133.g
    }
  }
}
var nf = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, [
    {
      type: "VisibleSwitch"
    }, {
      type: "DisabledSwitch"
    }
  ], {
    type: "Headline"
  }, {
    type: "Options"
  }, {
    type: "RadioMode"
  }, {
    type: "Color"
  }, {
    type: "WidgetOpacity"
  }, {
    type: "RadioSizeType"
  }, {
    type: "Coordinate"
  }
]
export { tf }
export { nf }
