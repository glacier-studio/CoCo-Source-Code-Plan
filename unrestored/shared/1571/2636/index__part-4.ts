/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-4
 */

"use strict"

var V
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"./97/index"
import * as /* [auto-meaningful-name] */Src_editor_ui_Dialogs_ProjectDialog_styles_module_css from /* 525 */"../../../../src/editor/ui/Dialogs/ProjectDialog/styles.module.css"
import /* [auto-meaningful-name] */Src_editor_ui_Dialogs_ProjectDialog_styles_module_css1 from /* 525 */"../../../../src/editor/ui/Dialogs/ProjectDialog/styles.module.css"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
!function (e) {
  e[e.SAVE_BTN = 0] = "SAVE_BTN"
  e[e.MY_PROJECT = 1] = "MY_PROJECT"
}(V || (V = {}))
var ne = React.memo(function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var /* [auto-meaningful-name] */e$time = e.time
  var /* [auto-meaningful-name] */e$currentTime = e.currentTime
  var /* [auto-meaningful-name] */e$renderType = e.renderType
  var i = function (e) {
    return useIntl$formatMessage({
      id: e
    })
  }
  var a = e$time
  var s = e$currentTime
  var c = s - a
  var l = Src_shared_tools_index.G(s, 0)
  var u = Src_shared_tools_index.G(s, -1)
  var d = Src_shared_tools_index.G(s, -2)
  var p = new Date(a)
  var f = ""
  var m = "".concat(i("MyProject.lastSaved"), " ")
  if (c < 6e4) {
    f = "".concat(i("MyProject.just"))
    if (e$renderType === V.SAVE_BTN) {
      f = "".concat(i("MyProject.justSaved"))
    }
  } else if (c < 36e5) {
    var g = Math.ceil(c / 60 / 1e3)
    g = Math.max(g, 1)
    g = Math.min(g, 59)
    f = "".concat(g).concat(i("MyProject.minute")).concat(i("MyProject.ago"))
    if (e$renderType === V.SAVE_BTN) {
      f = m + f
    }
  } else if (c < 216e5 || a > l) {
    var _ = Math.floor(c / 36e5)
    var v = Math.floor(c % 36e5 / 6e4)
    if (_) {
      f += "".concat(_).concat(i("MyProject.hour"))
    }
    if (v) {
      f += "".concat(v).concat(i("MyProject.minute"))
    }
    f += i("MyProject.ago")
    if (e$renderType === V.SAVE_BTN) {
      f = m + f
    }
  } else if (a > u) {
    f = i("MyProject.yesterday") + Src_shared_tools_index.K(p)
    if (e$renderType === V.SAVE_BTN) {
      f = m + f
    }
  } else {
    if (a > d) {
      f = i("MyProject.theDayBeforeYesterday") + Src_shared_tools_index.K(p)
      if (e$renderType === V.SAVE_BTN) {
        f = m + f
      }
    } else {
      f = "".concat(p.getFullYear()).concat(i("MyProject.year"))
      f += "".concat(p.getMonth() + 1).concat(i("MyProject.month"))
      f += "".concat(p.getDate()).concat(i("MyProject.day"))
      if (e$renderType === V.SAVE_BTN) {
        f = m + f
      }
    }
  }
  return React.createElement("span", null, f)
})
export { ne }
