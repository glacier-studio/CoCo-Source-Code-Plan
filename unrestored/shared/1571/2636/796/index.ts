/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：796
 */

"use strict"

export { l as a }
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_751 from /* 751 */"./751"
import /* [auto-meaningful-name] */Module_7511 from /* 751 */"./751"
function l(e) {
  var /* [auto-meaningful-name] */e$onCancel = e.onCancel
  var /* [auto-meaningful-name] */e$onOk = e.onOk
  var /* [auto-meaningful-name] */e$title = e.title
  var s = undefined === e$title ? "saveTipsTitle" : e$title
  var /* [auto-meaningful-name] */e$desc = e.desc
  var u = undefined === e$desc ? "saveTipsDesc" : e$desc
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React1.createElement("div", {
    className: Module_7511.saveTipsWrapper
  }, React1.createElement("div", {
    className: Module_7511.saveTipsMask
  }), React1.createElement("div", {
    className: Module_7511.saveTipsContent
  }, React1.createElement("div", {
    className: Module_7511.name
  }, useIntl$formatMessage({
    id: s
  })), React1.createElement("div", {
    className: Module_7511.description
  }, useIntl$formatMessage({
    id: u
  })), React1.createElement("div", {
    className: Module_7511.actions
  }, React1.createElement(Src_shared_ui_components_index.d, {
    onClick: e$onCancel
  }, useIntl$formatMessage({
    id: "notSave"
  })), React1.createElement(Src_shared_ui_components_index.d, {
    type: "primary",
    onClick: e$onOk
  }, useIntl$formatMessage({
    id: "save"
  })))))
}
var _b
_b = memo(l)
export { _b as b }
export default l
