/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-116
 */

"use strict"

import { rb } from "./index__part-92"
import { lb } from "./index__part-93"
import * as /* [auto-meaningful-name] */Module_200 from /* 200 */"./200"
import * as /* [auto-meaningful-name] */Module_148 from /* 148 */"./148"
import * as /* [auto-meaningful-name] */Module_379 from /* 379 */"./379"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_811 from /* 811 */"./811"
import /* [auto-meaningful-name] */Module_8111 from /* 811 */"./811"
var hO = [
  {
    value: Module_379.a.DEFAULT,
    renderContent: function () {
      return React.createElement("div", {
        className: Module_8111.defaultRadio
      }, React.createElement("span", null, "Text"))
    }
  }, {
    value: Module_379.a.BUTTON,
    renderContent: function () {
      return React.createElement("div", {
        className: Module_8111.buttonRadio
      }, React.createElement("span", null, "Text"))
    }
  }
]
var mO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "mode" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_8111.formItemWrapper, Module_8111.typeSelector, Module_8111.radioTypeSelector, "changeRadioResizeMode"),
    label: useIntl$formatMessage({
      id: "style"
    })
  }, React.createElement(lb, {
    value: o,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    modeList: hO
  }, hO.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.p, {
      value: e.value,
      key: e.value
    }, e.renderContent())
  })))
})
var gO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = Object.values(Src_editor_widget_builtIn_types.s)
  var a = e$getValue(n)
  var s = e$getValue("size")
  var /* [auto-meaningful-name] */s$height = s.height
  var /* [auto-meaningful-name] */s$width = s.width
  var u = Module_148.g[a]
  var /* [auto-meaningful-name] */u$minWidth = u.minWidth
  var /* [auto-meaningful-name] */u$maxWidth = u.maxWidth
  return React.createElement(rb, {
    sizeType: a,
    sizeTypeList: i,
    width: s$width,
    height: s$height,
    minWidth: u$minWidth,
    maxWidth: u$maxWidth,
    onWidthChange: function (e) {
      !function (e) {
        e$onChange("size", {
          width: e
        })
      }(Math.max(u$minWidth, Math.min(u$maxWidth, Number(e))))
    },
    onSizeTypeChange: function (e) {
      e$onChange(n, e)
    }
  })
})
var _O = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = Object.values(Src_editor_widget_builtIn_types.s)
  var a = e$getValue(n)
  var s = e$getValue("size")
  var /* [auto-meaningful-name] */s$height = s.height
  var /* [auto-meaningful-name] */s$width = s.width
  var u = Module_200.g[a]
  var /* [auto-meaningful-name] */u$minWidth = u.minWidth
  var /* [auto-meaningful-name] */u$maxWidth = u.maxWidth
  return React.createElement(rb, {
    sizeType: a,
    sizeTypeList: i,
    width: s$width,
    height: s$height,
    minWidth: u$minWidth,
    maxWidth: u$maxWidth,
    onWidthChange: function (e) {
      !function (e) {
        e$onChange("size", {
          width: e
        })
      }(Math.max(u$minWidth, Math.min(u$maxWidth, Number(e))))
    },
    onSizeTypeChange: function (e) {
      e$onChange(n, e)
    }
  })
})
export { mO }
export { gO }
export { _O }
