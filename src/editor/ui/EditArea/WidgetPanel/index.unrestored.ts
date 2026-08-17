/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-90
 */

"use strict"

import { Fv } from "./WidgetTree/index"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect, useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Styles_module_css from /* 329 */"./styles.module.css"
import /* [auto-meaningful-name] */Styles_module_css1 from /* 329 */"./styles.module.css"
var Uv = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$label = e.label
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$bgColor = e.bgColor
  var a = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var l = useSelector(function (e) {
    return e.block.flyoutVisible
  })
  var u = useState(false)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState("")
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  useEffect(function () {
    y(c === t && l ? e$color : p || c === t && !l ? e$bgColor : "")
  }, [c, t, l, p, e$color, e$bgColor])
  return React.createElement("div", {
    key: t,
    className: Classnames(Styles_module_css1.itemBlock, c === t && l && Styles_module_css1.itemSelected),
    style: {
      backgroundColor: b
    },
    onClick: function () {
      var e
      var n
      a(Redux_common_actions.ug(t))
      a(Redux_common_actions.fj(false))
      if (c === t && l) {
        Module_26.g.setSelectedItem()
        if (!(null === (e = Module_26.g.getToolbox()) || undefined === e)) {
          e.flyout.hide()
        }
      } else {
        Module_26.g.setSelectedItem(null === (n = Module_26.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(t))
      }
    },
    onMouseEnter: function () {
      m(true)
    },
    onMouseLeave: function () {
      m(false)
    }
  }, React.createElement("div", {
    className: Styles_module_css1.itemBlockIcon,
    style: {
      color: e$color
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: e$icon
  })), React.createElement("span", null, useIntl$formatMessage({
    id: e$label
  })))
})
var Hv = [
  {
    id: "toolbox-event",
    icon: "icon-toolbox-event",
    label: "event",
    color: "rgb(84, 115, 248)",
    bgColor: "rgba(84, 115, 248,0.2)"
  }, {
    id: "toolbox-control",
    icon: "icon-toolbox-control",
    label: "control",
    color: "#01ADFF",
    bgColor: "rgba(1,173,255,0.2)"
  }, {
    id: "toolbox-feature",
    icon: "icon-toolbox-feature",
    label: "feature",
    color: "rgb(0, 175, 195)",
    bgColor: "rgb(0, 175, 195, 0.2)"
  }, {
    id: "toolbox-operator",
    icon: "icon-toolbox-operation",
    label: "operators",
    color: "#FF844E",
    bgColor: "rgba(255,132,78,0.2)"
  }, {
    id: "toolbox-primitive",
    icon: "icon-toolbox-variable",
    label: "variable",
    color: "#FFBB55",
    bgColor: "rgba(255,187,85,0.2)"
  }, {
    id: "toolbox-array",
    icon: "icon-toolbox-list",
    label: "list",
    color: "#FFC915",
    bgColor: "rgba(255,201,21,0.2)"
  }, {
    id: "toolbox-object",
    icon: "icon-toolbox-object",
    label: "object",
    color: "rgb(160, 115, 255)",
    bgColor: "rgb(160, 115, 255, 0.2)"
  }, {
    id: "toolbox-function",
    icon: "icon-toolbox-function",
    label: "procedures",
    color: "#F78767",
    bgColor: "rgba(247,135,103,0.2)"
  }
]
var Vv = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement("div", {
    className: Styles_module_css1.basicBlockBox
  }, React.createElement("div", {
    className: Styles_module_css1.categoryTitle
  }, useIntl$formatMessage({
    id: "basicBlock"
  })), React.createElement("div", {
    className: Styles_module_css1.blockList
  }, Hv.map(function (e) {
    return React.createElement(Uv, Object.assign({
      key: e.id
    }, e))
  })), React.createElement("div", {
    className: Styles_module_css1.spaceLine
  }))
})
var zv = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useSelector(function (e) {
    return e.block.isBlockDragDeleteArea
  })
  return React.createElement("div", {
    className: Styles_module_css1.deleteBlockBox
  }, React.createElement("div", {
    className: Classnames(Styles_module_css1.deleteTopIconBox, t && Styles_module_css1.deleteTopIconBoxOff)
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-delete-top",
    className: Styles_module_css1.deleteBlockTopIcon
  })), React.createElement("div", {
    className: Styles_module_css1.deleteBottomIconBox
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-delete-bottom",
    className: Styles_module_css1.deleteBlockBottomIcon
  })), React.createElement("div", null, useIntl$formatMessage({
    id: "Workspace.blockDragDeleteAreaTips"
  })))
})
var Yv = memo(function () {
  var e = useDispatch()
  var t = useRef(null)
  var n = useSelector(function (e) {
    return e.block.isBlockDragDeleteArea
  })
  return React.createElement("div", {
    className: Styles_module_css1.wrapper,
    onMouseEnter: function () {
      return e(Redux_common_actions.ui(true))
    },
    onMouseLeave: function () {
      return e(Redux_common_actions.ui(false))
    }
  }, React.createElement("div", {
    className: Styles_module_css1.basicBlock
  }, React.createElement(Vv, null)), React.createElement("div", {
    className: Styles_module_css1.widgetTree,
    ref: t
  }, React.createElement(Fv, null)), React.createElement("div", {
    className: Classnames(Styles_module_css1.deleteBlockPanel, n && Styles_module_css1.deleteBlockPanelShow)
  }, React.createElement(zv, null)))
})
export { Yv }
