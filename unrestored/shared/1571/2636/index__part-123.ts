/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-123
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_208 from /* 208 */"./208"
import /* [auto-meaningful-name] */Module_2081 from /* 208 */"./208"
var tw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "body" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement("div", {
    className: Classnames(Module_2081.formItemWrapper, Module_2081.httpBody)
  }, React.createElement("div", {
    className: Module_2081.title
  }, React.createElement("div", null, useIntl$formatMessage({
    id: "HttpClientWidget.body"
  }))), React.createElement(Src_shared_ui_components_index.A, {
    onBlur: function (e, t) {
      e$onChange(n, e.target.value)
    },
    rows: 4,
    defaultValue: i
  }))
})
export { tw }
