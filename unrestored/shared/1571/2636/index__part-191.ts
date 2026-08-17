/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-191
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_938 from /* 938 */"./938"
import /* [auto-meaningful-name] */Module_9381 from /* 938 */"./938"
var aN = function (e) {
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
    className: Classnames(Module_9381.ImageDragContainer, s && Module_9381.isDragging),
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
      var /* [auto-meaningful-name] */n$dataTransfer
      var /* [auto-meaningful-name] */n$dataTransfer$files
      if (!(e.isReadOnly || 0 === (null === n || undefined === n || null === (n$dataTransfer = n.dataTransfer) || undefined === n$dataTransfer || null === (n$dataTransfer$files = n$dataTransfer.files) || undefined === n$dataTransfer$files ? undefined : n$dataTransfer$files.length))) {
        u(Src_editor_redux_common_actions.Zf(n.dataTransfer.files, e$onSuccess, true))
        c(false)
      }
    }
  }, e$children, e$isEmpty && React.createElement("div", {
    className: Classnames(Module_9381.ImageLayoutEmpty, e$className)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-image-upload"
  }), React.createElement("h5", null, useIntl$formatMessage({
    id: "emptyImageLibraryTitle"
  })), React.createElement("div", {
    className: Module_9381.emptyContent
  }, useIntl$formatMessage({
    id: "emptyImageLibraryTips1"
  }), " ", React.createElement("br", null), useIntl$formatMessage({
    id: "emptyImageLibraryTips2"
  }), " ", React.createElement("br", null))))
}
export { aN }
