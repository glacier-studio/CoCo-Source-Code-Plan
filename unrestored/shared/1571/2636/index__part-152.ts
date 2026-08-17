/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-152
 */

"use strict"

import { VT } from "./index__part-151"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useCallback, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_622 from /* 622 */"./622"
import /* [auto-meaningful-name] */Module_6221 from /* 622 */"./622"
var KT = memo(function () {
  var e = useDispatch()
  var t = useSelector(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */t$packageProgress = t.packageProgress
  var /* [auto-meaningful-name] */t$isPackaging = t.isPackaging
  var o = useState(false)
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var l = useRef(false)
  var u = function () {
    e(Src_editor_redux_common_actions.xf())
  }
  var d = useCallback(function () {
    e(Src_editor_redux_common_actions.Vg())
    if (100 === t$packageProgress) {
      e(Src_editor_redux_common_actions.Hi(false))
    }
  }, [])
  useEffect(function () {
    if (100 === t$packageProgress) {
      var e = setTimeout(function () {
        s(true)
      }, 1e3)
      return function () {
        return clearTimeout(e)
      }
    }
    s(false)
  }, [t$packageProgress])
  useEffect(function () {
    var t = React.createElement("div", {
      className: Classnames(Module_6221.completePackage),
      onClick: function (t) {
        if (!l.current) {
          e(Src_editor_redux_common_actions.Mi(true))
          t.stopPropagation()
        }
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-apk"
    }), React.createElement("p", {
      className: Module_6221.close,
      onClick: function (t) {
        e(Src_editor_redux_common_actions.zh({
          onConfirm: function () {
            e(Src_editor_redux_common_actions.Li(false))
            e(Src_editor_redux_common_actions.Gh("PACKAGE_APK_ICON"))
          },
          onClose: d,
          allowText: useIntl$formatMessage({
            id: "package.cancel"
          }),
          title: "",
          isDangerous: true,
          content: useIntl$formatMessage({
            id: "package.deletePackage"
          })
        }))
        t.stopPropagation()
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-close"
    })))
    if (a) {
      e(Src_editor_redux_common_actions.Qh("PACKAGE_APK_ICON", {
        name: "PACKAGE_APK_ICON",
        content: t,
        visible: true
      }))
    }
    return function () {
      Src_editor_redux_common_actions.Gh("PACKAGE_APK_ICON")
    }
  }, [e, useIntl$formatMessage, d, a])
  return React.createElement(React.Fragment, null, React.createElement("div", null, !a && t$isPackaging && React.createElement("div", {
    className: Module_6221.packageProgress
  }, React.createElement("div", {
    className: Module_6221.circle
  }, React.createElement(VT, {
    percent: t$packageProgress,
    strokeWidth: 4,
    strokeColor: "#6E4FF4"
  }), React.createElement("p", {
    className: Module_6221.percentText
  }, t$packageProgress, React.createElement("span", {
    className: Module_6221.symbol
  }, "%")), React.createElement("p", {
    className: Module_6221.progressType
  }, 0 === t$packageProgress && useIntl$formatMessage({
    id: "package.packagePendingText"
  }), useIntl$formatMessage(100 === t$packageProgress ? {
    id: "package.packageComplete"
  } : {
    id: "package.isPackaging"
  }))), React.createElement("p", {
    className: Module_6221.close,
    onClick: function () {
      if (100 !== t$packageProgress) {
        e(Src_editor_redux_common_actions.zh({
          onConfirm: u,
          onClose: d,
          allowText: useIntl$formatMessage({
            id: "package.cancel"
          }),
          title: "",
          isDangerous: true,
          content: useIntl$formatMessage({
            id: "package.cancelPackage"
          })
        }))
      } else {
        e(Src_editor_redux_common_actions.Ii(true))
        e(Src_editor_redux_common_actions.Li(false))
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-close"
  })))))
})
export { KT }
