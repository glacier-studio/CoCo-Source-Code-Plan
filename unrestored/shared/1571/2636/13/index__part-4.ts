/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-4
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_ui_components_Iconfont_index from /* 94 */"../../../../../src/shared/ui/components/Iconfont/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import /* 16 */"react-redux"
import /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"../1213"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_344 from /* 344 */"../133/344"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import /* 651 */"./651"
function L(e) {
  return "#ffffff" === Color1(e).hex().toLocaleLowerCase()
}
var B = memo(function (e) {
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$className = e.className
  var a = Src_shared_tools_index.i(e$color)
  return React.createElement("div", {
    onClick: function () {
      if (e$onClick) {
        e$onClick(e$color)
      }
    },
    style: {
      background: e$color
    },
    className: Classnames("color-palette-block", {
      selected: e$selected
    }, e$className, a && "color-palette-transparent-block", !a && L(e$color) && "color-palette-white-block")
  }, a && React.createElement("div", {
    className: "coco-palette-bias"
  }), e$selected && !a && React.createElement(Src_shared_ui_components_Iconfont_index.a, {
    className: "coco-palette-icon-selected",
    type: "icon-selected"
  }))
})
export { B }
