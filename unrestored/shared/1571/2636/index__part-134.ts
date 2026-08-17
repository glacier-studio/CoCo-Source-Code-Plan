/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-134
 */

"use strict"

import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_933 from /* 933 */"./933"
import /* [auto-meaningful-name] */Module_9331 from /* 933 */"./933"
var Xw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "text" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = useDispatch()
  var l = useIntl$formatMessage({
    id: e$formConfig.label || "text"
  })
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, Module_9331.form),
    label: l,
    align: "vertical"
  }, React.createElement("div", {
    className: Module_9331.imageBox
  }, React.createElement("div", {
    className: Module_9331.edit
  }, React.createElement("div", {
    className: Module_9331.btn,
    onClick: function () {
      c(Src_editor_redux_common_actions.Bh({
        onConfirm: function (e) {
          e$onChange(n, e)
        },
        content: a
      }))
    }
  }, useIntl$formatMessage({
    id: "edit"
  })))))
})
export { Xw }
