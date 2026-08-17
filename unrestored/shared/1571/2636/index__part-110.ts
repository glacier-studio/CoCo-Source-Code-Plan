/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-110
 */

"use strict"

import { fy } from "./index__part-102"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1518 from /* 1518 */"./1518"
import /* [auto-meaningful-name] */Module_15181 from /* 1518 */"./1518"
var ME = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fontFamily" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = e$getValue(n)
  return React.createElement(Src_shared_ui_components_index.i, {
    align: "vertical",
    className: Classnames(Module_15181.formItemWrapper, "changeFontFamily"),
    label: useIntl$formatMessage({
      id: "fontFamily"
    })
  }, React.createElement(fy, {
    keyName: n,
    onChange: e$onChange,
    fontFamily: a
  }))
})
export { ME }
