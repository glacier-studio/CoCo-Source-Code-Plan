/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-8
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_327 from /* 327 */"../../shared/packages/@crc/blink/src/core/workspace_element/block/input/field/field_number"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"./declare/index"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_135 from /* 135 */"../../../unrestored/shared/1571/2636/135"
var /* [auto-meaningful-name] */Module_327$FieldNumber$prototype$show_editor = Module_327.FieldNumber.prototype.show_editor
Module_327.FieldNumber.prototype.show_editor = function () {
  var e = this
  var t = Src_shared_packages_Crc_blink_src_index.BU.dom.create_dom("input", "blocklyHtmlInput")
  if (!this.source_block) {
    return t
  }
  Module_327$FieldNumber$prototype$show_editor.call(this)
  var n = this.get_absolute_xy()
  var r = this.source_block.is_shadow() && this.source_block.parent_block || this.source_block
  var o = r.workspace.get_scale()
  var /* [auto-meaningful-name] */this$get_size$height = this.get_size().height
  var a = r.is_wrap_shape() ? 42 : r.height + 2
  var s = n[1] + this$get_size$height * o / 2 + a * o / 2
  var c = 0
  var l = 100
  var u = ""
  var d = ""
  if ("audio_set_volume_or_rate" === r.type) {
    var p = r.get_field_value("OP")
    c = "SOUND_VOLUME" === p ? Module_135.g : Module_135.e
    l = "SOUND_VOLUME" === p ? Module_135.f : Module_135.d
    u = "SOUND_VOLUME" === p ? "小" : "慢"
    d = "SOUND_VOLUME" === p ? "大" : "快"
    this.set_constraints(c, l, 1)
    var f = {
      payload: {
        value: this.get_value(),
        left: n[0],
        top: s,
        min: c,
        max: l,
        minText: u,
        maxText: d,
        setValue: function (t) {
          e.set_value(t)
        }
      },
      type: "SHOW_BLOCKS_SLIDER"
    }
    Module_46.c().dispatchAction(f)
  }
  return t
}
var /* [auto-meaningful-name] */Module_327$FieldNumber$prototype$set_value = Module_327.FieldNumber.prototype.set_value
Module_327.FieldNumber.prototype.set_value = function (e) {
  Module_327$FieldNumber$prototype$set_value.call(this, e)
  if (Module_46.c().getSliderVisible()) {
    if (!e || isNaN(Number(e))) {
      return
    }
    Module_46.c().dispatchAction({
      payload: {
        value: e
      },
      type: "UPDATE_BLOCKS_SLIDER_VALUE"
    })
  }
}
