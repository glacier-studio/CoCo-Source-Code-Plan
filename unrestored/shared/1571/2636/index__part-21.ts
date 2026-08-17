/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-21
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import { useIntl } from /* 710 */"react-intl"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_566 from /* 566 */"./566"
import /* [auto-meaningful-name] */Module_5661 from /* 566 */"./566"
var gn = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useDispatch()
  var n = useSelector(function (e) {
    return e.common.projectSaveProgressDialog
  })
  var /* [auto-meaningful-name] */n$visible = n.visible
  var /* [auto-meaningful-name] */n$progress = n.progress
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: n$visible,
    className: Module_5661.container,
    onClose: function () {
      t(Src_editor_redux_common_actions.Qi(false))
    }
  }, React.createElement("div", {
    className: Module_5661.main
  }, React.createElement("div", {
    className: Module_5661.progress
  }, React.createElement("div", {
    className: Module_5661.progressText,
    style: {
      width: "".concat(n$progress, "%")
    }
  }, "".concat(n$progress, "%")), React.createElement("div", {
    className: Module_5661.progressBg
  }, React.createElement("div", {
    className: Module_5661.progressInner,
    style: {
      width: "".concat(n$progress, "%")
    }
  }))), React.createElement("div", null, React.createElement("p", {
    className: Module_5661.text
  }, useIntl$formatMessage({
    id: "ProjectSaveProgressDialog.content"
  }))), React.createElement("div", {
    className: Module_5661.footer
  }, React.createElement(Src_shared_ui_components_index.d, {
    type: "primary",
    className: Module_5661.cancelBtn,
    onClick: function () {
      t(Src_editor_redux_common_actions.yf())
    }
  }, useIntl$formatMessage({
    id: "ProjectSaveProgressDialog.cancelSave"
  })))))
})
export { gn }
