/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-133
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_526 from /* 526 */"./526"
import /* [auto-meaningful-name] */Module_5261 from /* 526 */"./526"
var Yw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "db" : e$keyName
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var a = e$getValue(n)
  var s = e$getValue("title")
  var c = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  function u() {
    e$onChange("updatedAt", Date.now())
  }
  return React.createElement("div", {
    className: Classnames(Module_5261.formItemWrapper, Module_5261.tableData)
  }, React.createElement("div", {
    className: "coco-form-item coco-form-item-horizontal"
  }, React.createElement("div", {
    className: Module_5261.label
  }, useIntl$formatMessage({
    id: "TableDataWidget.data"
  })), React.createElement("div", {
    className: Module_5261.data
  }, React.createElement("span", {
    className: Module_5261.length
  }, useIntl$formatMessage({
    id: "column"
  }), ":", Object.keys(a.header).length), React.createElement("span", {
    className: Module_5261.length
  }, useIntl$formatMessage({
    id: "row"
  }), ":", a.data.length))), React.createElement("div", {
    className: Module_5261.imageBox
  }, React.createElement("img", {
    className: Module_5261.image,
    src: "https://static.bcmcdn.com/coco/image/edit_grid_data_image.png",
    alt: ""
  }), React.createElement("div", {
    className: Module_5261.edit
  }, React.createElement("div", {
    className: Module_5261.btn,
    onClick: function () {
      c(Src_editor_redux_common_actions.zj({
        grid: Module_6.a({
          id: e$widgetId,
          name: s
        }, a),
        onClose: u
      }))
    }
  }, useIntl$formatMessage({
    id: "edit"
  })))))
})
export { Yw }
