/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-11
 */

"use strict"

import { r, o, i, a, s, c, l, u, d, p, f } from "./generate"
import { be } from "./generate/widget/index"
import { Ne } from "./index__part-7"
var We
import * as /* [auto-meaningful-name] */Module_118 from /* 118 */"../../../unrestored/shared/1571/2636/118/index"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../unrestored/shared/1571/2636/46/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../../unrestored/shared/1571/2636/20/index"
function He() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing() && t.type === Src_shared_packages_Crc_blink_src_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("DOC_KEYS_WRAPPER", "DOC_KEYS")
      if (n) {
        var r
        var o = Module_46.c().getLocalDocumentFieldList(null === (r = t.get_new_value()) || undefined === r ? undefined : r.toString(), n)
        n.set_value(o[0].value)
      }
    }
  })
}
function Ve() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing() && t.type === Src_shared_packages_Crc_blink_src_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("DOC_KEYS_WRAPPER", "DOC_KEYS")
      if (n) {
        var r
        var o = Module_46.c().getCloudDocumentFieldList(null === (r = t.get_new_value()) || undefined === r ? undefined : r.toString(), n)
        n.set_value(o[0].value)
      }
    }
  })
}
function ze() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing() && t.type === Src_shared_packages_Crc_blink_src_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("INPUT_COLUMN", "COLUMNS")
      var r = e.get_shadow_field("UPDATE_COLUMN_VALUE", "COLUMNS")
      if (n) {
        var o
        var i = Module_46.c().getCloudDBColumnList(null === (o = t.get_new_value()) || undefined === o ? undefined : o.toString(), n)
        n.set_value(i[0].value)
      }
      if (r) {
        var a
        var s = Module_46.c().getCloudDBColumnList(null === (a = t.get_new_value()) || undefined === a ? undefined : a.toString(), r)
        r.set_value(s[0].value)
      }
    }
  })
}
function Ye() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing() && t.type === Src_shared_packages_Crc_blink_src_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("COLUMN_WRAPPER", "COLUMN")
      if (n) {
        var r
        var o = Module_46.c().getTableDataColumnList(null === (r = t.get_new_value()) || undefined === r ? undefined : r.toString())
        n.set_value(o[0].value)
      }
    }
  })
}
function Ke() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing() && t.type === Src_shared_packages_Crc_blink_src_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = Module_20.getActorActionInputField(e)
      if (n) {
        var r = Module_46.c().getActorActionList(t.get_new_value())[0].value || Module_9.h
        if (!(null === n || undefined === n)) {
          n.set_value(r)
        }
      }
    }
  })
}
function qe() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing() && t.type === Src_shared_packages_Crc_blink_src_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("DICT_KEYS_WRAPPER", "KEYS")
      if (n) {
        var r = Module_46.c().getCloudDictKeyList(t.get_new_value())
        n.set_value(r[0].value)
      }
    }
  })
}
function Xe() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing() && t.type === Src_shared_packages_Crc_blink_src_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("INPUT_COLUMN", "COLUMNS")
      if (n) {
        var r = Module_46.c().getCloudTableColumnList(t.get_new_value())
        n.set_value(r[0].value)
      }
    }
  })
}
function Qe() {
  Src_shared_packages_Crc_blink_src_index.Blink.extensions.register(We.UPDATE_KEY_AFTER_SELECTING_DOC, He)
  Src_shared_packages_Crc_blink_src_index.Blink.extensions.register(We.UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC, Ve)
  Src_shared_packages_Crc_blink_src_index.Blink.extensions.register(We.UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB, ze)
  Src_shared_packages_Crc_blink_src_index.Blink.extensions.register(We.UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA, Ye)
  Src_shared_packages_Crc_blink_src_index.Blink.extensions.register(We.UPDATE_ACTION_AFTER_SELECT_ACTOR, Ke)
  Src_shared_packages_Crc_blink_src_index.Blink.extensions.register(We.UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT, qe)
  Src_shared_packages_Crc_blink_src_index.Blink.extensions.register(We.UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE, Xe)
  Src_shared_packages_Crc_blink_src_index.Blink.registry.field.register(Module_118.a.field_type, Module_118.a)
  Src_shared_packages_Crc_blink_src_index.Blink.registry.field.register(Ne.field_type, Ne)
  Module_46.e.apply(undefined, [Src_shared_packages_Crc_blink_src_index.Blink, Module_118.a, s, c, o, i, u, r, a, d, l, p, f].concat(Module_25.a(Module_9.M())))
  var e = Module_46.a()
  Src_shared_packages_Crc_blink_src_index.Blink.define_blocks_with_json_array(e)
}
function Ze() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "zh-CN"
  return be[e]
}
!function (e) {
  e.UPDATE_KEY_AFTER_SELECTING_DOC = "UPDATE_KEY_AFTER_SELECTING_DOC"
  e.UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC = "UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC"
  e.UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB = "UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB"
  e.UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA = "UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA"
  e.UPDATE_ACTION_AFTER_SELECT_ACTOR = "UPDATE_ACTION_AFTER_SELECT_ACTOR"
  e.UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT = "UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT"
  e.UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE = "UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE"
}(We || (We = {}))
export { Qe }
export { Ze }
