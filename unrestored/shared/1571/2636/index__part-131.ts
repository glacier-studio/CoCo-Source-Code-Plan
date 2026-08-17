/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-131
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1203 from /* 1203 */"./1203"
import /* [auto-meaningful-name] */Module_12031 from /* 1203 */"./1203"
var Gw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "opacity" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = e$getValue(n)
  return React.createElement(Src_shared_ui_components_index.i, {
    align: "vertical",
    className: Classnames(Module_12031.formItemWrapper, Module_12031.changeOpacity),
    label: useIntl$formatMessage({
      id: "WidgetForm.opacity"
    })
  }, React.createElement(Src_shared_ui_components_index.x, {
    value: undefined === a ? Module_60.j : a,
    min: Module_60.r,
    max: Module_60.j,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    isShowRightInput: true
  }))
})
export { Gw }
