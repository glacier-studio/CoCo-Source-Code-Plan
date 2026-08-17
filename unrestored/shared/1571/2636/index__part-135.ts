/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-135
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1204 from /* 1204 */"./1204"
import /* [auto-meaningful-name] */Module_12041 from /* 1204 */"./1204"
var Jw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "penSize" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var s = undefined === e$formConfig$label ? "brushPenSize" : e$formConfig$label
  var /* [auto-meaningful-name] */e$formConfig$min = e$formConfig.min
  var /* [auto-meaningful-name] */e$formConfig$max = e$formConfig.max
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var d = e$getValue(n)
  return React.createElement(Src_shared_ui_components_index.i, {
    align: "vertical",
    className: Classnames(Module_12041.formItemWrapper, Module_12041.numberSlider),
    label: useIntl$formatMessage({
      id: s
    })
  }, React.createElement(Src_shared_ui_components_index.x, {
    value: d,
    min: e$formConfig$min,
    max: e$formConfig$max,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    isShowRightInput: true
  }))
})
export { Jw }
