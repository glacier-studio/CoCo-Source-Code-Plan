/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-91
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_206 from /* 206 */"./206"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import /* [auto-meaningful-name] */Module_881 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_1201 from /* 1201 */"./1201"
import /* [auto-meaningful-name] */Module_12011 from /* 1201 */"./1201"
var Zv = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$hasIcon = e.hasIcon
  var /* [auto-meaningful-name] */e$className = e.className
  return React.createElement("button", {
    style: {
      width: "133px"
    },
    className: "".concat(Module_12011.flatButton, " coco-button-flat ").concat(e$hasIcon && Module_12011.hasIcon, " ").concat(e$className),
    onClick: e$onClick
  }, e$children)
})
var Jv = Object.values(Module_206.a)
var $v = memo(function (e) {
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$onModeChange = e.onModeChange
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement(Src_shared_ui_components_index.s, {
    className: Classnames(Module_881.radioWrapper, Module_881.sizeRadioBox),
    value: e$mode,
    onChange: e$onModeChange
  }, Jv.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.t, {
      value: e,
      key: e
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-".concat(e).concat(e$mode === e ? "-active" : "")
    }), useIntl$formatMessage({
      id: "".concat(e)
    }))
  }))
})
export { Zv }
export { $v }
