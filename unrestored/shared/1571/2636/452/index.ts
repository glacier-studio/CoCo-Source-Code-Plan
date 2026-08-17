/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：452
 */

"use strict"

export { h as a }
export { m as b }
import /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_42 from /* 42 */"../42/index"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../64/index"
import * as /* [auto-meaningful-name] */Module_206 from /* 206 */"../206"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../33"
import * as /* [auto-meaningful-name] */Module_677 from /* 677 */"./677"
import /* [auto-meaningful-name] */Module_6771 from /* 677 */"./677"
import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"../75"
function f(e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$widgetIds = e.widgetIds
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$backgroundColor = e.backgroundColor
  var /* [auto-meaningful-name] */e$backgroundImage = e.backgroundImage
  var /* [auto-meaningful-name] */e$backgroundImageResizeMode = e.backgroundImageResizeMode
  var h = []
  e$widgetIds.forEach(function (e, t) {
    var n = Module_42.g.get(e)
    if (n) {
      n.zIndex = t
      h.push(n)
    }
  })
  var m = Module_33.hb(e$backgroundImage)
  var g = (null === m || undefined === m ? undefined : m.source) || (null === m || undefined === m ? undefined : m.cdnUrl)
  if (!(g || !e$backgroundImage.includes("://") && !e$backgroundImage.includes("data:image/"))) {
    g = e$backgroundImage
  }
  return React1.createElement("div", {
    id: t,
    className: Module_6771.screenView,
    "data-role": Src_editor_widget_builtIn_types.D,
    "data-widget-type": Src_editor_widget_builtIn_types.D,
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      backgroundColor: e$backgroundColor,
      backgroundImage: g ? "url(".concat(g, ")") : "none",
      backgroundSize: e$backgroundImageResizeMode === Module_206.a.STRETCH ? "100% 100%" : e$backgroundImageResizeMode
    }
  }, h.map(function (e) {
    return Module_42.f({
      widget: e
    })
  }))
}
function h(e) {
  return {
    id: Module_64.a(Src_editor_widget_builtIn_types.D),
    title: e,
    type: Src_editor_widget_builtIn_types.D,
    position: {
      x: 0,
      y: 0
    },
    backgroundColor: Module_75.c,
    backgroundImage: "",
    backgroundImageResizeMode: Module_206.a.COVER,
    size: {
      width: Module_75.e,
      height: Module_75.d
    },
    widgetIds: [],
    invisibleWidgetIds: [],
    blocksXML: "",
    snapshot: "",
    primitiveVariables: [],
    arrayVariables: [],
    objectVariables: [],
    broadcasts: ["Hi"]
  }
}
function m(e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$widgetIds = e.widgetIds
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$backgroundColor = e.backgroundColor
  var /* [auto-meaningful-name] */e$backgroundImage = e.backgroundImage
  var /* [auto-meaningful-name] */e$backgroundImageResizeMode = e.backgroundImageResizeMode
  return React1.createElement(f, {
    id: t,
    widgetIds: e$widgetIds,
    position: e$position,
    size: e$size,
    key: t,
    backgroundColor: e$backgroundColor,
    backgroundImage: e$backgroundImage,
    backgroundImageResizeMode: e$backgroundImageResizeMode
  })
}
export default h
