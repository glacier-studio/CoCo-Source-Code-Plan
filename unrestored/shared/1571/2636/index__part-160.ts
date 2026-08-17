/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-160
 */

"use strict"

import { WS } from "./index__part-158"
import { JS } from "./index__part-159"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useEffect, memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_569 from /* 569 */"./569"
import /* [auto-meaningful-name] */Module_5691 from /* 569 */"./569"
import * as /* [auto-meaningful-name] */Module_936 from /* 936 */"./936"
import /* [auto-meaningful-name] */Module_9361 from /* 936 */"./936"
var rA = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$toast = e.toast
  var r = undefined === e$toast ? "" : e$toast
  var /* [auto-meaningful-name] */e$showIcon = e.showIcon
  var i = undefined !== e$showIcon && e$showIcon
  var /* [auto-meaningful-name] */e$setVisible = e.setVisible
  var s = useDispatch()
  var c = useRef(null)
  useEffect(function () {
    if (c.current) {
      clearTimeout(c.current)
    }
    if (e$visible) {
      c.current = window.setTimeout(function () {
        e$setVisible(false)
      }, 3e3)
    }
  }, [s, e$visible, r, e$setVisible])
  return e$visible ? React.createElement("div", {
    className: Module_9361.toastWrapper
  }, React.createElement("div", {
    className: Module_9361.toast
  }, i && React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-alert-success",
    className: Module_9361.icon
  }), React.createElement("div", {
    className: Module_9361.textWrapper
  }, "已重置为初始数据"))) : null
})
var oA = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useDispatch()
  var n = useSelector(function (e) {
    return e.dataWatch.dataWatchToast
  })
  var r = function () {
    t(Src_editor_redux_common_actions.Vi(undefined))
  }
  var o = function () {
    window.open("https://codemao-guide.yuque.com/bfiekm/sbo5kh/mhfhe11vyex2f0w4?singleDoc#", "_blank")
  }
  return React.createElement("div", {
    className: Classnames(Module_5691.wrapper)
  }, React.createElement("div", {
    className: Classnames(Module_5691.flexSc, Module_5691.header)
  }, React.createElement("h3", {
    className: Module_5691.title
  }, useIntl$formatMessage({
    id: "dataWatch"
  })), React.createElement("div", {
    className: Module_5691.toast
  }, React.createElement(rA, {
    visible: n.visible,
    toast: n.toast || "",
    showIcon: true,
    setVisible: function () {
      return t(Src_editor_redux_common_actions.nh())
    }
  })), React.createElement("span", {
    className: Classnames(Module_5691.closeBtn, "DevToolCloseButton"),
    onClick: r
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-close-bold"
  }))), React.createElement("div", {
    className: Classnames(Module_5691.content)
  }, React.createElement("div", {
    className: Module_5691.shadowContent
  }, React.createElement(WS, null), React.createElement(JS, null), React.createElement("div", {
    className: Classnames(Module_5691.help),
    onClick: o
  }, "看看怎么用？"))))
})
export { rA }
export { oA }
