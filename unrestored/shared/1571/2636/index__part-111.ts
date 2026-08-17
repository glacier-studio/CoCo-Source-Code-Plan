/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-111
 */

"use strict"

import { gy } from "./index__part-103"
import /* [auto-meaningful-name] */Module_1037 from /* 1037 */"./1037"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1038 from /* 1038 */"./1038"
import /* [auto-meaningful-name] */Module_10381 from /* 1038 */"./1038"
var BE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "textAlign" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var s = (0, useIntl().formatMessage)({
    id: e$formConfig.label || "horizontalAlignment"
  })
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, Module_10381.content, "changeHorizontalAlign"),
    label: s,
    align: "vertical"
  }, React.createElement(gy, {
    keyName: n,
    onChange: e$onChange,
    textAlign: a
  }))
})
var FE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "justifyContent" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$textAlign = e.textAlign
  return React.createElement(Src_shared_ui_components_index.s, {
    value: e$textAlign,
    className: Module_1037.alignRadio,
    onChange: function (e) {
      e$onChange(n, e)
    }
  }, React.createElement(Src_shared_ui_components_index.t, {
    value: Module_60.c.FLEX_START
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-vertical-top"
  })), React.createElement(Src_shared_ui_components_index.t, {
    value: Module_60.c.CENTER
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-vertical-center"
  })), React.createElement(Src_shared_ui_components_index.t, {
    value: Module_60.c.FLEX_END
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-vertical-bottom"
  })))
})
var GE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "justifyContent" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, Module_10381.content, "changeVerticalAlign"),
    label: useIntl$formatMessage({
      id: "verticalAlignment"
    }),
    align: "vertical"
  }, React.createElement(FE, {
    keyName: n,
    onChange: e$onChange,
    textAlign: i
  }))
})
export { BE }
export { FE }
export { GE }
