/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-112
 */

"use strict"

import { Xr } from "../../../../src/editor/ui/PreviewArea/ScreenList/index"
import { gy } from "./index__part-103"
import { FE } from "./index__part-111"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1519 from /* 1519 */"./1519"
import /* [auto-meaningful-name] */Module_15191 from /* 1519 */"./1519"
var HE = memo(function (e) {
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var o = (0, useIntl().formatMessage)({
    id: e$formConfig.label || "alignment"
  })
  var /* [auto-meaningful-name] */e$formConfig$horizontalKey = e$formConfig.horizontalKey
  var a = undefined === e$formConfig$horizontalKey ? "textAlign" : e$formConfig$horizontalKey
  var /* [auto-meaningful-name] */e$formConfig$verticalKey = e$formConfig.verticalKey
  var c = undefined === e$formConfig$verticalKey ? "justifyContent" : e$formConfig$verticalKey
  var l = e$getValue(a)
  var u = e$getValue(c)
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, Module_15191.content, "changeHorizontalAlign"),
    label: o,
    align: "vertical"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, React.createElement(gy, {
    keyName: a,
    onChange: e$onChange,
    textAlign: l
  })), React.createElement("div", null, React.createElement(FE, {
    keyName: c,
    onChange: e$onChange,
    textAlign: u
  }))))
})
var VE = function (e) {
  var /* [auto-meaningful-name] */e$formConfig$hasDisableOrVisible = e.formConfig.hasDisableOrVisible
  var n = undefined !== e$formConfig$hasDisableOrVisible && e$formConfig$hasDisableOrVisible
  var r = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var i = useDispatch()
  var a = Module_9.Bb(r || "")
  var s = a ? Module_9.Fb(a.id) : ""
  if (!a) {
    return React.createElement(React.Fragment, null)
  }
  var c = a.id
  var /* [auto-meaningful-name] */a$type = a.type
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, Module_88.formWidgetTitle, "changeTitle", Module_11.a({}, Module_88.formWidgetTitleWithDisableOrVisible, n)),
    label: useIntl$formatMessage({
      id: "WidgetForm.title"
    }),
    align: "vertical"
  }, React.createElement(Xr, {
    value: s,
    renameInputValue: function (e) {
      var t = Module_9.Pb(c, a$type, e)
      i(Src_editor_redux_common_actions.Ng(c, t, true, true))
      return t
    },
    onChange: function (e) {
      i(Src_editor_redux_common_actions.Ng(c, e, true, true))
    },
    checkValueIsRepeat: function (e) {
      return Module_9.t(c, e)
    }
  }))
}
export { HE }
export { VE }
