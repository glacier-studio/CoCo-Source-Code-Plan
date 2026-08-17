/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-162
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_355 from /* 355 */"./355"
import /* [auto-meaningful-name] */Module_3551 from /* 355 */"./355"
var dA = function (e) {
  var /* [auto-meaningful-name] */e$onSuccess = e.onSuccess
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isEmpty = e.isEmpty
  var i = useState(false)
  var a = Module_10.a(i, 2)
  var s = a[0]
  var c = a[1]
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var u = useDispatch()
  return React.createElement("div", {
    className: Classnames(Module_3551.ImageDragContainer, s && Module_3551.isDragging),
    onDragEnter: function (t) {
      if (!e.isReadOnly) {
        c(true)
      }
    },
    onDragLeave: function () {
      if (!e.isReadOnly) {
        c(false)
      }
    },
    onDrop: function (n) {
      if (!e.isReadOnly) {
        u(Src_editor_redux_common_actions.Zf(n.dataTransfer.files, e$onSuccess, true))
        c(false)
      }
    }
  }, e$children, e$isEmpty && React.createElement("div", {
    className: Classnames(Module_3551.ImageLayoutEmpty, e$className)
  }, React.createElement("h5", null, useIntl$formatMessage({
    id: "emptyImageLibraryTitle"
  })), React.createElement("div", {
    className: Module_3551.emptyContent
  }, useIntl$formatMessage({
    id: "emptyImageLibraryTips1"
  }), " ", React.createElement("br", null), useIntl$formatMessage({
    id: "emptyImageLibraryTips2"
  }), " ", React.createElement("br", null), useIntl$formatMessage({
    id: "emptyImageLibraryTips3"
  }), " ", React.createElement("br", null))))
}
export { dA }
