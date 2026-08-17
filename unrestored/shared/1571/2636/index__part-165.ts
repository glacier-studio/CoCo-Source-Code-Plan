/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-165
 */

"use strict"

import { EA } from "./index__part-164"
import * as /* [auto-meaningful-name] */Module_135 from /* 135 */"./135"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_473 from /* 473 */"./473"
import /* [auto-meaningful-name] */Module_4731 from /* 473 */"./473"
var CA = function (e) {
  var /* [auto-meaningful-name] */e$onSuccess = e.onSuccess
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isEmpty = e.isEmpty
  var o = useState(false)
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var l = useDispatch()
  function u(t) {
    if (!e.isReadOnly) {
      s(true)
    }
  }
  function d() {
    if (!e.isReadOnly) {
      s(false)
    }
  }
  return React.createElement("div", {
    className: Classnames(Module_4731.SoundDragContainer, a && Module_4731.isDragging),
    onDrop: function (n) {
      if (!e.isReadOnly) {
        l(Src_editor_redux_common_actions.wf(n.dataTransfer.files, e$onSuccess, true))
        s(false)
      }
    },
    onDragEnter: u,
    onDragLeave: d
  }, e$children, e$isEmpty && React.createElement("div", {
    className: Module_4731.SoundLayoutEmpty,
    onDragEnter: u,
    onDragLeave: d
  }, React.createElement("h5", null, useIntl$formatMessage({
    id: "emptySoundLibraryTitle"
  })), React.createElement("div", {
    className: Module_4731.emptyContent
  }, useIntl$formatMessage({
    id: "emptySoundLibraryTips1"
  }), " ", React.createElement("br", null), useIntl$formatMessage({
    id: "emptySoundLibraryTips2"
  }), " ", React.createElement("br", null), useIntl$formatMessage({
    id: "emptySoundLibraryTips3"
  }), " ", React.createElement("br", null), useIntl$formatMessage({
    id: "emptySoundLibraryTips4"
  }), " ", React.createElement("br", null))))
}
var TA = function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useDispatch()
  var r = useSelector(function (e) {
    return e.resource.soundFileList.reverse()
  })
  var o = useState("")
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = function (e) {
    s(e)
  }
  return React.createElement("div", {
    className: Module_4731.soundLayout
  }, React.createElement("div", {
    className: Module_4731.soundLayoutMain
  }, React.createElement(CA, {
    isReadOnly: e.readOnly,
    isEmpty: 0 === r.size
  }, React.createElement("div", {
    className: Module_4731.imageLayoutList
  }, React.createElement("ul", null, React.createElement("li", {
    className: Module_4731.uploadItem
  }, React.createElement(Src_shared_ui_components_index.B, {
    onChange: function (e) {
      if (e) {
        n(Src_editor_redux_common_actions.wf(e, undefined, true))
      }
    },
    multiple: true,
    accept: Module_135.h
  }, React.createElement("div", {
    className: Module_4731.content
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add2",
    className: Module_4731.icon
  }), React.createElement("div", {
    className: Module_4731.name
  }, useIntl$formatMessage({
    id: "Resource.upload"
  }))))), r.map(function (e) {
    return React.createElement(EA, {
      key: e.id,
      id: e.id,
      name: e.name,
      cdnUrl: e.cdnUrl,
      source: e.source,
      duration: e.duration,
      extension: "",
      isPlaying: e.id === a,
      setSoundPlayingId: c
    })
  }))))))
}
export { TA }
