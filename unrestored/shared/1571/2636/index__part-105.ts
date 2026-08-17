/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-105
 */

"use strict"

import { Xr } from "../../../../src/editor/ui/PreviewArea/ScreenList/index"
import { $v } from "./index__part-91"
import { nb } from "./index__part-92"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"./238"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_747 from /* 747 */"./747"
import /* [auto-meaningful-name] */Module_7471 from /* 747 */"./747"
var wy = memo(function () {
  var e = useDispatch()
  var t = Module_238.b()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = Module_238.d()
  var o = useSelector(function (e) {
    return e.project.screens
  })
  var i = useState(false)
  var a = Module_10.a(i, 2)
  var s = a[0]
  var c = a[1]
  if (!r) {
    return null
  }
  var /* [auto-meaningful-name] */r$title = r.title
  var /* [auto-meaningful-name] */r$backgroundColor = r.backgroundColor
  var /* [auto-meaningful-name] */r$backgroundImage = r.backgroundImage
  var /* [auto-meaningful-name] */r$backgroundImageResizeMode = r.backgroundImageResizeMode
  var m = Module_9.hb(r$backgroundImage || "")
  var g = (null === m || undefined === m ? undefined : m.source) || (null === m || undefined === m ? undefined : m.cdnUrl)
  return React.createElement(Src_shared_ui_components_index.h, {
    "data-updated-at": t
  }, React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, Module_88.formWidgetTitle, "changeTitle"),
    align: "vertical",
    label: "名称"
  }, React.createElement(Xr, {
    value: r$title,
    renameInputValue: function (t) {
      var n = Module_9.Ob(r.id, t, o)
      e(Src_editor_redux_common_actions.Jg(r.id, "title", n))
      return n
    },
    onChange: function (t) {
      e(Src_editor_redux_common_actions.Jg(r.id, "title", t))
    },
    checkValueIsRepeat: function (e) {
      return Module_9.r(r.id, e)
    }
  })), React.createElement("div", null, React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, "changeBackgroundColor"),
    label: useIntl$formatMessage({
      id: "color"
    })
  }, React.createElement(Module_1213.a, {
    placement: "rightBottom",
    trigger: "click",
    onVisibleChange: function (e) {
      c(e)
    },
    content: s && React.createElement(Src_shared_ui_components_index.q, {
      value: r$backgroundColor,
      onChange: function (t) {
        e(Src_editor_redux_common_actions.Jg(r.id, "backgroundColor", t))
      }
    })
  }, React.createElement("div", {
    className: Module_88.colorBlock,
    style: {
      backgroundColor: Src_shared_tools_index.i(r$backgroundColor) ? "#ffffff" : r$backgroundColor
    }
  }, Src_shared_tools_index.i(r$backgroundColor) && React.createElement("div", {
    className: Module_88.slash
  })))), React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, Module_7471.changeImageWrapper),
    align: "vertical",
    label: useIntl$formatMessage({
      id: "backgroundImage"
    })
  }, React.createElement(nb, {
    onUploadFileChange: function (t) {
      if (t) {
        e(Src_editor_redux_common_actions.Zf(t, function (t) {
          var n = t[0]
          e(Src_editor_redux_common_actions.Jg(r.id, "backgroundImage", n.id))
        }))
      }
    },
    onResourceLibraryClick: function () {
      e(Src_editor_redux_common_actions.wj(Module_68.c.ImageLibrary, function (t) {
        var n = t[0]
        e(Src_editor_redux_common_actions.Jg(r.id, "backgroundImage", n.id))
        e(Src_editor_redux_common_actions.sh())
      }))
    },
    onDelete: function () {
      e(Src_editor_redux_common_actions.Jg(r.id, "backgroundImage", ""))
    },
    fileId: r$backgroundImage
  })), g && React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper),
    label: useIntl$formatMessage({
      id: "adapt"
    }),
    align: "vertical"
  }, React.createElement($v, {
    mode: r$backgroundImageResizeMode,
    onModeChange: function (t) {
      var n = t
      e(Src_editor_redux_common_actions.Jg(r.id, "backgroundImageResizeMode", n))
    }
  }))))
})
export { wy }
