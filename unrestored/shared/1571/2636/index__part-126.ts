/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-126
 */

"use strict"

import /* [auto-meaningful-name] */Module_186 from /* 186 */"./186"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_2680 from /* 2680 */"./2680/index"
var hw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "templateType" : e$keyName
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var a = e$getValue(n)
  var s = e$getValue("templateRenderType")
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var l = useDispatch()
  var u = useState(false)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  function g(e) {
    if (e$onChange) {
      e$onChange("templateRenderType", e)
    }
  }
  function v(e) {
    if (e !== a) {
      l(Src_editor_redux_common_actions.Af(e$widgetId, e, function () {
        if (e$onChange) {
          e$onChange(n, e)
        }
        m(false)
      }))
    } else {
      m(false)
    }
  }
  return React.createElement("div", {
    className: Classnames(Module_186.formItemWrapper, "templateType")
  }, React.createElement("div", {
    className: "coco-form-item coco-form-item-horizontal"
  }, useIntl$formatMessage({
    id: "ListViewerWidget.templateType"
  }), React.createElement("div", {
    className: Module_186.cardBox
  }, React.createElement("div", {
    onClick: g.bind(null, "tiled"),
    className: Classnames(Module_186.cardItem, "tiled" === s && Module_186.active)
  }, useIntl$formatMessage({
    id: "ListViewerWidget.tiled"
  })), React.createElement("div", {
    onClick: g.bind(null, "card"),
    className: Classnames(Module_186.cardItem, "card" === s && Module_186.active)
  }, useIntl$formatMessage({
    id: "ListViewerWidget.card"
  })))), React.createElement("div", {
    className: Module_186.templateBox,
    onClick: function () {
      m(true)
    }
  }, React.createElement("img", {
    className: Module_186.selectedTemplateImg,
    src: "https://static.bcmcdn.com/coco/image/".concat(a, ".png"),
    alt: ""
  })), React.createElement(Module_2680.a, {
    title: null,
    visible: p,
    footer: null,
    centered: true,
    style: {
      padding: 0
    },
    bodyStyle: {
      margin: "60px 0",
      padding: 0,
      background: "#eff2f8",
      borderRadius: "12px"
    },
    onCancel: function () {
      m(false)
    }
  }, React.createElement("div", {
    className: Module_186.templateListTitle
  }, React.createElement("div", {
    className: Module_186.title
  }, useIntl$formatMessage({
    id: "ListViewerWidget.templateType"
  })), React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-closed"
  })), React.createElement("div", {
    className: Module_186.templateListBox
  }, Object.keys(Src_editor_widget_builtIn_types.o).map(function (e) {
    return React.createElement("div", {
      className: Classnames(Module_186.templateItem, e === a && Module_186.active),
      key: e,
      onClick: v.bind(null, e)
    }, e === a && React.createElement("div", {
      className: Module_186.selectIconBox
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-style-selected"
    })), React.createElement("img", {
      className: Module_186.templateItemImg,
      src: "https://static.bcmcdn.com/coco/image/".concat(e, ".png"),
      alt: ""
    }))
  }))))
})
var mw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "options" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var s = e$formConfig.dropdown || []
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var l = useState(a)
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = useIntl$formatMessage({
    id: e$formConfig.label || "options"
  })
  var g = function (e) {
    p(e)
    if (e$onChange) {
      e$onChange(n, e)
    }
  }
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper),
    label: m,
    align: "horizontal"
  }, React.createElement("div", {
    className: Module_88.optionSwitch
  }, s.map(function (e) {
    return React.createElement("div", {
      key: e.label,
      onClick: g.bind(null, e.value),
      className: Classnames(Module_88.option, d === e.value && Module_88.activeOption)
    }, React.createElement("span", null, e.label))
  })))
})
export { hw }
export { mw }
