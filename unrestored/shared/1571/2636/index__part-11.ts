/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-11
 */

"use strict"

var Xe
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_276 from /* 276 */"./276"
import * as /* [auto-meaningful-name] */Src_editor_ui_Header_styles_module_css from /* 161 */"../../../../src/editor/ui/Header/styles.module.css"
import /* [auto-meaningful-name] */Src_editor_ui_Header_styles_module_css1 from /* 161 */"../../../../src/editor/ui/Header/styles.module.css"
import * as /* [auto-meaningful-name] */Module_750 from /* 750 */"./750"
import /* [auto-meaningful-name] */Module_7501 from /* 750 */"./750"
!function (e) {
  e[e.ERROR = 0] = "ERROR"
  e[e.WARN = 1] = "WARN"
}(Xe || (Xe = {}))
var ot = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$message = e.message
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var o = e$type === Xe.ERROR ? Module_7501.error : Module_7501.warn
  return React.createElement("div", {
    className: Classnames(o, Module_7501.container)
  }, React.createElement("span", {
    className: Module_7501.message
  }, e$message), React.createElement("span", {
    className: Module_7501.close,
    onClick: e$onClose
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-close",
    className: Module_7501.icon
  })))
})
export { Xe }
export { ot }
