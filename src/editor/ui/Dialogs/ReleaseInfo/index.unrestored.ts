/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-206
 */

"use strict"

import { LL, PL } from "../DownloadApk/index"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../../../../../unrestored/shared/1571/2636/53"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as BL from /* 1532 */"../../../../../."
import FL from /* 1532 */"../../../../../."
import * as /* [auto-meaningful-name] */Style_styles_module_css from /* 626 */"./style/styles.module.css"
import /* [auto-meaningful-name] */Style_styles_module_css1 from /* 626 */"./style/styles.module.css"
var UL = memo(function () {
  var e = useSelector(function (e) {
    return e.common.releaseInfoDialogVisible
  })
  var t = useSelector(function (e) {
    var /* [auto-meaningful-name] */e$common$userInfo
    return null === (e$common$userInfo = e.common.userInfo) || undefined === e$common$userInfo ? undefined : e$common$userInfo.id
  })
  var n = useSelector(function (e) {
    return e.common.userInfoFetchDone
  })
  var r = useState(false)
  var o = Module_10.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = useDispatch()
  useEffect(function () {
    if (n) {
      if (!i) {
        if (localStorage.getItem("ReleaseVersion") !== Module_53.f) {
          s(Redux_common_actions.vj(true))
          localStorage.setItem("ReleaseVersion", Module_53.f)
        }
        a(true)
      }
    }
  }, [i, s, t, n])
  return React.createElement(Shared_ui_components_index.f, {
    visible: e,
    className: Style_styles_module_css1.ReleaseInfoDialog,
    onClose: function () {
      s(Redux_common_actions.vj(false))
    }
  }, React.createElement("div", {
    className: Style_styles_module_css1.left
  }, React.createElement("img", {
    src: FL,
    alt: ""
  })), React.createElement("div", {
    className: Style_styles_module_css1.right
  }, React.createElement("div", {
    className: Style_styles_module_css1.content
  }, React.createElement("div", {
    className: Style_styles_module_css1.updateInfo
  }, React.createElement("header", null, "版本v", Module_53.f, "更新"), LL.map(function (e) {
    return React.createElement("p", {
      key: e
    }, e)
  }), React.createElement("div", {
    className: Style_styles_module_css1.link
  }, PL.map(function (e) {
    return React.createElement("div", {
      key: e.label
    }, React.createElement("a", {
      href: e.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, e.label))
  }))), React.createElement("div", {
    className: Style_styles_module_css1.overViewInfo
  }, React.createElement("a", {
    href: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/update",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "往期功能更新回顾", React.createElement(Shared_ui_components_index.j, {
    className: Style_styles_module_css1.iconLink,
    type: "icon-dropdown-down"
  }))))))
})
export { UL }
