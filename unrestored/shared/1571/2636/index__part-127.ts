/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-127
 */

"use strict"

import { py } from "./index__part-102"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_189 from /* 189 */"./189"
var _w = memo(function (e) {
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var r = e$getValue("style") || Module_189.b.styleA
  var o = e$getValue("themeColor")
  var i = (0, useIntl().formatMessage)({
    id: e$formConfig.label || "previewImage"
  })
  var a = {
    backgroundColor: o
  }
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Module_88.formItemWrapper,
    label: i,
    align: "vertical"
  }, React.createElement("div", {
    className: Module_88.dialog
  }, React.createElement("div", {
    className: Module_88.dialogContent
  }, React.createElement("div", {
    className: Module_88.titleWrapper,
    style: r === Module_189.b.styleB ? {
      paddingLeft: "24px"
    } : {
      paddingLeft: "101px"
    }
  }, React.createElement("div", {
    className: Module_88.title,
    style: a
  }), React.createElement("div", {
    className: Module_88.title,
    style: a
  })), React.createElement("div", {
    className: Module_88.textWrapper
  }, React.createElement("div", {
    className: Classnames(Module_88.line, Module_88.firstLine),
    style: a
  }), React.createElement("div", {
    className: Classnames(Module_88.line, Module_88.secondLine),
    style: a
  })), r === Module_189.b.styleA ? React.createElement("div", {
    className: Module_88.buttonWrapper
  }, React.createElement("div", {
    className: Classnames(Module_88.button, Module_88.secondary)
  }, "BUTTON"), React.createElement("div", {
    className: Classnames(Module_88.button, Module_88.primary),
    style: a
  }, "BUTTON")) : React.createElement("div", {
    className: Module_88.textButtonWrapper
  }, React.createElement("div", {
    className: Module_88.secondary
  }, "BUTTON"), React.createElement("div", {
    className: Module_88.primary,
    style: {
      color: o
    }
  }, "BUTTON")))))
})
var vw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "options" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var s = e$formConfig.dropdown || []
  var c = (0, useIntl().formatMessage)({
    id: e$formConfig.label || "options"
  })
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper),
    label: c,
    align: "horizontal"
  }, React.createElement(py, {
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    value: a,
    optionLabelProp: "label",
    listHeight: 160,
    suffixIcon: React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-dropdown-down"
    })
  }, s.map(function (e) {
    return React.createElement(py.Option, {
      value: e.value,
      key: e.value,
      label: e.label
    }, e.label)
  })))
})
var bw = memo(function (e) {
  var /* [auto-meaningful-name] */e$formConfig$url = e.formConfig.url
  return e$formConfig$url ? React.createElement("div", {
    style: {
      textAlign: "center",
      position: "absolute",
      height: "50px",
      lineHeight: "50px",
      background: "#fff",
      width: "100%",
      bottom: 0
    }
  }, React.createElement("a", {
    href: e$formConfig$url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "如何使用？")) : null
})
export { _w }
export { vw }
export { bw }
