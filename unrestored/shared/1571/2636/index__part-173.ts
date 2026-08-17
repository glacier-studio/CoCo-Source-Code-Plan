/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-173
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_188 from /* 188 */"./188"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Src_editor_ui_App_styles_module_css from /* 937 */"../../../../src/editor/ui/App/styles.module.css"
import /* [auto-meaningful-name] */Src_editor_ui_App_styles_module_css1 from /* 937 */"../../../../src/editor/ui/App/styles.module.css"
import * as /* [auto-meaningful-name] */Module_266 from /* 266 */"./266"
import /* [auto-meaningful-name] */Module_2661 from /* 266 */"./266"
var bI = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useSelector(function (e) {
    return e.common.confirmDialogInfo
  })
  var /* [auto-meaningful-name] */t$visible = t.visible
  var /* [auto-meaningful-name] */t$onClose = t.onClose
  var /* [auto-meaningful-name] */t$title = t.title
  var /* [auto-meaningful-name] */t$onConfirm = t.onConfirm
  var /* [auto-meaningful-name] */t$content = t.content
  var /* [auto-meaningful-name] */t$onDeny = t.onDeny
  var /* [auto-meaningful-name] */t$className = t.className
  var /* [auto-meaningful-name] */t$onCancel = t.onCancel
  var /* [auto-meaningful-name] */t$isDangerous = t.isDangerous
  var /* [auto-meaningful-name] */t$cancelText = t.cancelText
  var p = undefined === t$cancelText ? useIntl$formatMessage({
    id: "cancel"
  }) : t$cancelText
  var /* [auto-meaningful-name] */t$allowText = t.allowText
  var m = undefined === t$allowText ? useIntl$formatMessage({
    id: "confirm"
  }) : t$allowText
  var /* [auto-meaningful-name] */t$denyText = t.denyText
  var /* [auto-meaningful-name] */t$cancelBtnVisible = t.cancelBtnVisible
  var b = undefined === t$cancelBtnVisible || t$cancelBtnVisible
  var /* [auto-meaningful-name] */t$confirmBtnVisible = t.confirmBtnVisible
  var E = undefined === t$confirmBtnVisible || t$confirmBtnVisible
  var O = useDispatch()
  var w = function () {
    if (t$onConfirm) {
      t$onConfirm()
    }
    T()
  }
  var T = function () {
    if (t$onClose) {
      t$onClose()
    }
    O(Src_editor_redux_common_actions.Vg())
  }
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: t$visible,
    showCloseButton: false,
    onClose: T,
    withPortal: true,
    maskClosable: false,
    className: Classnames(Module_2661.dialog, t$className, t$denyText && Module_2661.dialogSecondary)
  }, React.createElement(Module_188.a, null, React.createElement(Module_188.b, {
    keys: "enter",
    callback: w
  })), React.createElement("h3", null, t$title), React.createElement("span", null, t$content), React.createElement("div", {
    className: Classnames(Module_2661.dialogButtons)
  }, b && React.createElement(Src_shared_ui_components_index.d, {
    type: "light",
    onClick: function () {
      if (t$onCancel) {
        t$onCancel()
      }
      T()
    }
  }, p), t$denyText && React.createElement(Src_shared_ui_components_index.d, {
    onClick: function () {
      if (t$onDeny) {
        t$onDeny()
      }
      T()
    },
    className: Module_2661.denyButton
  }, t$denyText), E && React.createElement(Src_shared_ui_components_index.d, {
    type: "primary",
    danger: t$isDangerous,
    onClick: w
  }, m)))
})
export { bI }
