/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-20
 */

"use strict"

import { cn } from "./index__part-19"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_806 from /* 806 */"./806"
import /* [auto-meaningful-name] */Module_8061 from /* 806 */"./806"
var dn = memo(function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$save = e.save
  var i = useDispatch()
  return React.createElement(cn, {
    className: Module_8061.container,
    networkErrorVisible: e$visible,
    onRetry: e$save,
    onCancelRetry: e$onClose
  }, React.createElement("h3", null, useIntl$formatMessage({
    id: "saveProject.failDialogTitle"
  })), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", null, useIntl$formatMessage({
    id: "saveProject.failDialogTips1"
  }))), React.createElement("li", null, React.createElement("span", null, useIntl$formatMessage({
    id: "saveProject.failDialogTips2"
  }), React.createElement("button", {
    type: "button",
    className: Module_8061.saveBtn,
    onClick: function () {
      i(Src_editor_redux_common_actions.Of())
      e$onClose()
    }
  }, useIntl$formatMessage({
    id: "saveProject.failDialogSaveLocalTips"
  })), useIntl$formatMessage({
    id: "saveProject.failDialogTips3"
  })))))
})
var pn = memo(function (e) {
  var t = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = useSelector(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */r$packageProgress = r.packageProgress
  var /* [auto-meaningful-name] */r$packageTaskLabel = r.packageTaskLabel
  var /* [auto-meaningful-name] */r$isPackaging = r.isPackaging
  var s = useState(false)
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  useEffect(function () {
    u(!(!r$packageTaskLabel || -1 !== r$packageProgress || r$isPackaging))
  }, [r$isPackaging, r$packageProgress, r$packageTaskLabel])
  return React.createElement(cn, {
    networkErrorVisible: l,
    onRetry: function () {
      u(false)
      t(Src_editor_redux_common_actions.Ki(0))
      Src_editor_redux_common_actions.Nf(t, Src_editor_redux_common_actions.jg())
      t(Src_editor_redux_common_actions.Li(true))
    },
    onCancelRetry: function () {
      u(false)
    }
  }, React.createElement("h3", null, useIntl$formatMessage({
    id: "package.buildFailedTitle"
  })), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", null, useIntl$formatMessage({
    id: "package.buildFailedTips1"
  }))), React.createElement("li", null, React.createElement("span", null, useIntl$formatMessage({
    id: "package.buildFailedTips2"
  }))), React.createElement("li", null, React.createElement("span", null, useIntl$formatMessage({
    id: "package.buildFailedTips3"
  }))), React.createElement("li", null, React.createElement("span", null, useIntl$formatMessage({
    id: "package.buildFailedTips41"
  }), React.createElement("a", {
    href: "https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd",
    target: "_blank",
    rel: "noopener noreferrer"
  }, useIntl$formatMessage({
    id: "feedback"
  })), useIntl$formatMessage({
    id: "package.buildFailedTips42"
  })))))
})
var fn = memo(function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$save = e.save
  var i = useDispatch()
  return React.createElement(cn, {
    className: Module_8061.container,
    networkErrorVisible: e$visible,
    onRetry: e$save,
    onCancelRetry: e$onClose
  }, React.createElement("h3", null, useIntl$formatMessage({
    id: "package.networkErrorTitle"
  })), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", null, useIntl$formatMessage({
    id: "package.networkErrorTips1"
  }))), React.createElement("li", null, React.createElement("span", null, useIntl$formatMessage({
    id: "package.networkErrorTips2"
  }), React.createElement("button", {
    type: "button",
    className: Module_8061.saveBtn,
    onClick: function () {
      i(Src_editor_redux_common_actions.Of())
    }
  }, useIntl$formatMessage({
    id: "saveProject.failDialogSaveLocalTips"
  })), useIntl$formatMessage({
    id: "package.networkErrorTips3"
  })))))
})
export { dn }
export { pn }
export { fn }
