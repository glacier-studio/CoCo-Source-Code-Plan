/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-10
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"./declare/index"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_735 from /* 735 */"../../shared/packages/@crc/blink/src/core/workspace_element/block/input/field/field_colour"
Module_735.FieldColour.prototype.show_editor = function () {
  var /* [auto-meaningful-name] */this$source_block
  var t = this
  Src_shared_packages_Crc_blink_src_index.Blink.widget_div.hide()
  this.widget_div.show(this, this.widget_dispose.bind(this))
  var n = this.get_absolute_xy()
  var r = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.workspace.get_scale()) || 1
  var o = this.get_value()
  var /* [auto-meaningful-name] */window$innerWidth = window.innerWidth
  var /* [auto-meaningful-name] */window$innerHeight = window.innerHeight
  var s = 40 * r
  var c = -10 * r
  if (n[1] + s + 322 > window$innerHeight) {
    n[1] -= 362
  }
  if (n[0] + c + 288 > window$innerWidth) {
    n[0] -= 288
  }
  var l = n[1] + s
  var u = n[0] + c
  var d = Src_editor_redux_common_actions.hj({
    value: o,
    selectValue: function (e) {
      var /* [auto-meaningful-name] */t$border_rect
      if (!(null === (t$border_rect = t.border_rect) || undefined === t$border_rect)) {
        t$border_rect.setAttribute("fill", e)
      }
    },
    setValue: function (e) {
      t.set_value(Src_shared_tools_index.nb(e))
    },
    top: l,
    left: u
  })
  Module_46.c().dispatchAction(d)
}
