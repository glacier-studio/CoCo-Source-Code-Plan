/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-216
 */

"use strict"

import { nb } from "./index__part-92"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector, useDispatch, batch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_708 from /* 708 */"./708"
import /* [auto-meaningful-name] */Module_7081 from /* 708 */"./708"
var qP = memo(function () {
  var e = useSelector(function (e) {
    return e.common.switchImageDialogInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$imageOpenFileId = e.imageOpenFileId
  var /* [auto-meaningful-name] */e$imageCloseFileId = e.imageCloseFileId
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = useState("")
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState("")
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState("")
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  useEffect(function () {
    if (e$visible) {
      l(e$imageOpenFileId)
      m(e$imageCloseFileId)
    }
  }, [e$imageCloseFileId, e$imageOpenFileId, e$visible])
  var E = useDispatch()
  var O = function (e, t) {
    switch (t) {
      case "open":
        l(e.id)
        break
      case "close":
        m(e.id)
    }
  }
  function w(e) {
    if (e) {
      E(Src_editor_redux_common_actions.Zf(e, function (e) {
        O(e[0], b)
      }))
    }
  }
  function C() {
    E(Src_editor_redux_common_actions.wj(Module_68.c.ImageLibrary, function (e) {
      var t = e[0]
      O(t, b)
      E(Src_editor_redux_common_actions.sh())
    }))
  }
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: e$visible,
    className: Module_7081.sliderImageDialog,
    title: useIntl$formatMessage({
      id: "switch.custom"
    }),
    onClose: function () {
      E(Src_editor_redux_common_actions.Hj({
        visible: false
      }))
    },
    footer: React.createElement(Src_shared_ui_components_index.d, {
      type: "primary",
      onClick: function () {
        batch(function () {
          E(Src_editor_redux_common_actions.Lg(e$widgetId, "backgroundOpenImage", c))
          E(Src_editor_redux_common_actions.Lg(e$widgetId, "backgroundCloseImage", p))
          E(Src_editor_redux_common_actions.Hj({
            visible: false
          }))
        })
      }
    }, useIntl$formatMessage({
      id: "confirm"
    }))
  }, React.createElement("div", {
    className: Module_7081.sliderImage
  }, React.createElement("div", {
    className: Module_7081.imageInfo
  }, React.createElement("span", {
    className: Module_7081.title
  }, useIntl$formatMessage({
    id: "switch.replaceImage"
  })), React.createElement("div", {
    className: Module_7081.imageList
  }, React.createElement("div", {
    className: Module_7081.imageItem,
    onClick: function () {
      y("close")
    }
  }, React.createElement(nb, {
    onUploadFileChange: w,
    onResourceLibraryClick: C,
    fileId: p,
    style: {
      height: 240,
      width: 240,
      padding: "12px",
      marginBottom: "8px"
    }
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "switch.close"
  }))), React.createElement("div", {
    className: Module_7081.imageItem,
    onClick: function () {
      y("open")
    }
  }, React.createElement(nb, {
    onUploadFileChange: w,
    onResourceLibraryClick: C,
    fileId: c,
    style: {
      height: 240,
      width: 240,
      padding: "12px",
      marginBottom: "8px"
    }
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "switch.open"
  })))))))
})
export { qP }
