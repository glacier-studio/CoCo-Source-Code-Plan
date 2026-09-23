/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_374 from /* 374 */"../../shared/packages/@crc/blink/src/core/workspace_element/block/input/field/field_textinput"
import * as /* [auto-meaningful-name] */Module_503 from /* 503 */"../../shared/packages/@crc/blink/src/core/workspace_element/block/input/field/field"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../redux/common/actions"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../unrestored/shared/1571/2636/28/index"
var /* [auto-meaningful-name] */Module_374$FieldTextInput$prototype$show_editor = Module_374.FieldTextInput.prototype.show_editor
Module_374.FieldTextInput.prototype.show_editor = function () {
  var /* [auto-meaningful-name] */this$source_block
  var t = this
  var n = Module_374$FieldTextInput$prototype$show_editor.call(this)
  if ("text_rich_text" === (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.type)) {
    Module_37.a(Src_editor_redux_common_actions.Bh({
      content: this.get_value(),
      onConfirm: function (e) {
        t.set_value(Module_28.i(e))
      }
    }))
    Src_shared_packages_Crc_blink_src_index.Blink.widget_div.hide()
  }
  return n
}
Module_374.FieldTextInput.prototype.get_display_text = function () {
  var /* [auto-meaningful-name] */this$source_block
  if ("text_rich_text" === (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.type)) {
    var t = this.get_value()
    var n = document.createElement("div")
    n.innerHTML = t
    var /* [auto-meaningful-name] */n$innerText = n.innerText
    return Module_28.i(n$innerText)
  }
  return Module_503.Field.prototype.get_display_text.call(this)
}
