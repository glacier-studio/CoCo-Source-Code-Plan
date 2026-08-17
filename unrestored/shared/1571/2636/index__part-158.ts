/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-158
 */

"use strict"

import { nI } from "../../../../src/editor/ui/EditArea/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_474 from /* 474 */"./474"
import /* [auto-meaningful-name] */Module_4741 from /* 474 */"./474"
var GS = function (e, t) {
  var n = React.createElement("div", {
    className: Module_4741.screenIcon
  }, React.createElement(Src_shared_ui_components_index.j, {
    className: "coco-iconfont-screen-bg",
    type: e >= 9 ? "icon-screen-variable-plus" : "icon-screen-variable"
  }), React.createElement("span", {
    className: Classnames(Module_4741.iconNumber, e >= 9 ? Module_4741.iconFat : Module_4741.iconThin, e > 0 && e < 9 ? Module_4741.iconMiddle : "")
  }, e + 1))
  var r = React.createElement("div", {
    className: Module_4741.tips
  }, null === t || undefined === t ? undefined : t.title)
  return t ? React.createElement(Module_748.a, {
    placement: "bottom",
    trigger: ["hover"],
    title: r
  }, n) : n
}
var WS = React.memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useRef(null)
  var /* [auto-meaningful-name] */React$useContextNI$setBulkSelectVisible = React.useContext(nI).setBulkSelectVisible
  return React.createElement("div", {
    className: Classnames(Module_4741.wrapper)
  }, React.createElement("div", {
    className: Classnames(Module_4741.header)
  }, React.createElement("div", {
    className: Classnames(Module_4741.addButton),
    ref: t
  }, React.createElement("div", {
    className: Classnames(Module_4741.AddIcon),
    onClick: function () {
      React$useContextNI$setBulkSelectVisible(true)
    }
  }, React.createElement("div", {
    className: Module_4741.icon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  })), React.createElement("div", {
    className: Classnames(Module_4741.addText)
  }, useIntl$formatMessage({
    id: "DataWatch.addData"
  }))))))
})
export { GS }
export { WS }
