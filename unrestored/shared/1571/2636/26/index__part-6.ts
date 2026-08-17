/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：26__part-6
 */

"use strict"

var Ue
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../47"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
!function (e) {
  e.PRIMITIVE = "PRIMITIVE"
  e.ARRAY = "ARRAY"
  e.STORAGE = "STORAGE"
  e.DOC_KEYS = "DOC_KEYS"
  e.BROADCAST = "BROADCAST"
  e.SCREEN = "SCREEN"
  e.IMAGE_LIBRARY = "IMAGE_LIBRARY"
  e.ICON_LIBRARY = "ICON_LIBRARY"
  e.SOUND_LIBRARY = "SOUND_LIBRARY"
  e.CLOUD_DATABASE = "CLOUD_DATABASE"
  e.CLOUD_DOC_KEYS = "CLOUD_DOC_KEYS"
  e.DATA_SOURCE = "DATA_SOURCE"
  e.GRID = "DATABASE_WIDGET"
  e.COLUMNS = "COLUMNS"
  e.CLOUD_DB = "CLOUD_DB"
  e.TABLE_DATA_COLUMN = "TABLE_DATA_COLUMN"
  e.OBJECT = "OBJECT"
  e.CLOUD_TABLE_COLUMNS = "CLOUD_TABLE_COLUMNS"
  e.CLOUD_DICT_KEYS = "CLOUD_DICT_KEYS"
}(Ue || (Ue = {}))
var Ve = function () {
  var e
  return Module_6.a((e = {}, Module_11.a(e, Ue.PRIMITIVE, {
    blocksList: ["variables_get", "variables_set", "variables_change"],
    fieldName: "VAR"
  }), Module_11.a(e, Ue.ARRAY, {
    blocksList: ["array_get"],
    fieldName: "ARRAY"
  }), Module_11.a(e, Ue.OBJECT, {
    blocksList: ["object_get"],
    fieldName: "OBJECT"
  }), Module_11.a(e, Ue.BROADCAST, {
    blocksList: ["broadcast_input"],
    fieldName: "BROADCAST"
  }), Module_11.a(e, Ue.DOC_KEYS, {
    blocksList: ["local_document_all_key_field_dropdown", "local_document_set_field_item", "local_document_remove_field_item", "local_document_get_field_item", "local_document_check_if_field_key_exists", "new_local_document_all_key_field_dropdown", "new_local_document_set_field_item", "new_local_document_remove_field_item", "new_local_document_get_field_item", "new_local_document_check_if_field_key_exists"],
    fieldName: "DOC_KEYS"
  }), Module_11.a(e, Ue.IMAGE_LIBRARY, {
    blocksList: ["image_file_list_dropdown"],
    fieldName: "IMAGE_FILE_ID"
  }), Module_11.a(e, Ue.ICON_LIBRARY, {
    blocksList: ["icon_file_list_dropdown"],
    fieldName: "ICON_FILE_ID"
  }), Module_11.a(e, Ue.SOUND_LIBRARY, {
    blocksList: ["audio_sound_file_list_dropdown"],
    fieldName: "SOUND_FILE_ID"
  }), Module_11.a(e, Ue.CLOUD_DOC_KEYS, {
    blocksList: ["cloud_document_all_key_field_dropdown"],
    fieldName: "DOC_KEYS"
  }), Module_11.a(e, Ue.SCREEN, {
    blocksList: ["screen_set_background_color", "screen_set_background_image", "screen_navigate_to", "screen_navigate_to_by_value", "new_screen_navigate_to", "new_screen_navigate_to_by_value", "screen_get_size", "screen_get_color", "screen_get_background_image", "screen_check_if_pressed"],
    fieldName: "SCREEN_ID"
  }), Module_11.a(e, Ue.DATA_SOURCE, {
    blocksList: ["data_source_get"],
    fieldName: "DATA_SOURCE"
  }), Module_11.a(e, Ue.GRID, {
    blocksList: ["data_source_get"],
    fieldName: "DATA_SOURCE"
  }), Module_11.a(e, Ue.COLUMNS, {
    blocksList: ["cloudDB_all_column_dropdown"],
    fieldName: "COLUMNS"
  }), Module_11.a(e, Ue.CLOUD_DB, {
    blocksList: ["cloudDB_insert", "cloudDB_delete", "cloudDB_update", "cloudDB_query_by_column", "cloudDB_query_by_count"],
    fieldName: "WIDGET_ID"
  }), Module_11.a(e, Ue.TABLE_DATA_COLUMN, {
    blocksList: ["table_data_column_field_dropdown"],
    fieldName: "COLUMN"
  }), Module_11.a(e, Ue.CLOUD_DICT_KEYS, {
    blocksList: ["cloud_dict_all_key_dropdown"],
    fieldName: "KEYS"
  }), Module_11.a(e, Ue.CLOUD_TABLE_COLUMNS, {
    blocksList: ["cloudTable_all_column_dropdown"],
    fieldName: "COLUMNS"
  }), e), Module_9.N())
}
function ze(e, t, n) {
  var r
  var o = Ve()
  var /* [auto-meaningful-name] */oE$blocksList = o[e].blocksList
  var /* [auto-meaningful-name] */oE$fieldName = o[e].fieldName
  if (Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace) {
    Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      if (oE$blocksList.includes(e.type) && e.inputList.length) {
        var r
        var o = e.get_field(oE$fieldName)
        if (!o || (null === (r = o.get_value()) || undefined === r ? undefined : r.toString()) !== t) {
          return
        }
        if (o.get_text() === n) {
          return
        }
        o.set_text(n)
      }
    })
    if (!(null === (r = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_toolbox()) || undefined === r)) {
      r.refresh_selection()
    }
  }
}
function Ye(e, t) {
  var n
  var r = Ve()
  var /* [auto-meaningful-name] */rE$blocksList = r[e].blocksList
  var /* [auto-meaningful-name] */rE$fieldName = r[e].fieldName
  if (Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace) {
    Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      if (rE$blocksList.includes(e.type) && e.inputList.length) {
        var n
        var r = e.get_field(rE$fieldName)
        if (!r || (null === (n = r.get_value()) || undefined === n ? undefined : n.toString()) !== t) {
          return
        }
        if (!(null === r || undefined === r)) {
          r.set_value(Module_9.h)
        }
        if (!(null === r || undefined === r)) {
          r.set_text(Module_9.g)
        }
      }
    })
    if (!(null === (n = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_toolbox()) || undefined === n)) {
      n.refresh_selection()
    }
  }
}
function Ke() {
  var e
  if (Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace) {
    Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      var /* [auto-meaningful-name] */e$parent_block
      if (e.inputList.length) {
        !function (e) {
          var t = e.get_field("BUMP_TYPE")
          if (t) {
            var n = e.get_field_value("BUMP_TYPE")
            if ((null === n || undefined === n ? undefined : n.startsWith("ACTOR_")) || (null === n || undefined === n ? undefined : n.startsWith("BRUSH_"))) {
              var r = Module_9.Bb(n)
              if (r) {
                t.set_text(r.title)
              } else {
                t.set_value(Module_9.h)
                t.set_text(Module_9.g)
              }
            }
          }
        }(e);
        (function (e) {
          var t = e.get_field("TARGET")
          if (t) {
            var n = e.get_field_value("TARGET")
            if ((null === n || undefined === n ? undefined : n.startsWith("ACTOR_")) || (null === n || undefined === n ? undefined : n.startsWith("BRUSH_"))) {
              var r = Module_9.Bb(n)
              if (r) {
                t.set_text(r.title)
              } else {
                t.set_value(Module_9.h)
                t.set_text(Module_9.g)
              }
            }
          }
        })(e)
        var n = e.get_field("ACTOR_ACTION_ID") || e.get_shadow_field("ACTOR_ACTION_WRAPPER", "ACTOR_ACTION_ID")
        if (n) {
          var r
          var o
          var i
          var a = e.get_field("ACTOR_STYLE_ID") || e.get_shadow_field("ACTOR_STYLE_WRAPPER", "ACTOR_STYLE_ID")
          var s = e.get_field("WIDGET_ID") || (null === (e$parent_block = e.parent_block) || undefined === e$parent_block ? undefined : e$parent_block.get_field("WIDGET_ID"))
          var c = null === s || undefined === s ? undefined : s.get_value()
          if (!c || undefined === (o = Module_9.Bb(c)) || (r = n.get_value()) === Module_9.h || undefined === (i = o.attributes.actionList.find(function (e) {
            return e.id === r
          }))) {
            n.set_value(Module_9.h)
            n.set_text(Module_9.g)
            if (!(null === a || undefined === a)) {
              a.set_value(Module_9.h)
            }
            if (!(null === a || undefined === a)) {
              a.set_text(Module_9.g)
            }
            return void (o || (null === s || undefined === s || s.set_value(Module_9.h), null === s || undefined === s || s.set_text(Module_9.g)))
          }
          n.set_value(i.id)
          n.set_text(i.name)
          if (a) {
            var u = a.get_value()
            var d = i.styleList.findIndex(function (e) {
              return e.id === u
            })
            var p = -1 === d ? undefined : i.styleList[d]
            a.set_value((null === p || undefined === p ? undefined : p.id) || Module_9.h)
          }
        }
      }
    })
    if (!(null === (e = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_toolbox()) || undefined === e)) {
      e.refresh_selection()
    }
  }
}
function qe(e, t, n) {
  if (e && n) {
    ze(n, e, t)
    if (!(n !== Src_editor_widget_builtIn_types.a && n !== Src_editor_widget_builtIn_types.c)) {
      Ke()
    }
  }
}
function Xe(e, t) {
  ze(Ue.SCREEN, e, t)
}
function Qe(e, t, n) {
  var /* [auto-meaningful-name] */VeUe$CLOUD_DOC_KEYS$blocksList = Ve()[Ue.CLOUD_DOC_KEYS].blocksList
  Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (VeUe$CLOUD_DOC_KEYS$blocksList.includes(o.type)) {
      var i
      var /* [auto-meaningful-name] */o$parent_block = o.parent_block
      if (o$parent_block && o$parent_block.get_field_value("WIDGET_ID") === e) {
        if (o.get_field_value("DOC_KEYS") === t) {
          if (!(null === (i = o.get_field("DOC_KEYS")) || undefined === i)) {
            i.set_value(n)
          }
        }
      }
    }
  })
}
function Ze(e) {
  var t = Ve()
  var n = t.LIST_VIEWER_WIDGET.blocksList.concat(t.NEW_LIST_VIEWER_WIDGET.blocksList)
  if (Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace) {
    Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (t) {
      if (n.includes(t.type) && t.inputList.length) {
        var r
        var o = t.get_field("WIDGET_ID")
        if (!o || (null === (r = o.get_value()) || undefined === r ? undefined : r.toString()) !== e) {
          return
        }
        var i = t.get_field("SLOT_WIDGET")
        if (!(null === i || undefined === i)) {
          i.set_value(Module_9.h)
        }
        if (!(null === i || undefined === i)) {
          i.set_text(Module_9.g)
        }
        var a = t.get_field("ATTRIBUTE")
        if (!(null === a || undefined === a)) {
          a.set_value(Module_9.h)
        }
        if (!(null === a || undefined === a)) {
          a.set_text(Module_9.g)
        }
      }
    })
  }
}
function Je(e, t) {
  var /* [auto-meaningful-name] */VeUe$DOC_KEYS$blocksList = Ve()[Ue.DOC_KEYS].blocksList
  Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (r) {
    if (VeUe$DOC_KEYS$blocksList.includes(r.type)) {
      var /* [auto-meaningful-name] */r$parent_block = r.parent_block
      if (r$parent_block && r$parent_block.get_field_value("WIDGET_ID") === e) {
        var i
        var a = r.get_field("DOC_KEYS")
        var s = Module_47.a(t)
        try {
          for (s.s(); !(i = s.n()).done;) {
            var /* [auto-meaningful-name] */i$value = i.value
            if (i$value.id === (null === a || undefined === a ? undefined : a.get_value())) {
              a.set_text(i$value.key)
            }
          }
        } catch (l) {
          s.e(l)
        } finally {
          s.f()
        }
      }
    }
  })
}
function $e(e, t) {
  var /* [auto-meaningful-name] */VeUe$TABLE_DATA_COLUMN$blocksList = Ve()[Ue.TABLE_DATA_COLUMN].blocksList
  Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (r) {
    if (VeUe$TABLE_DATA_COLUMN$blocksList.includes(r.type)) {
      var /* [auto-meaningful-name] */r$parent_block = r.parent_block
      if (r$parent_block && r$parent_block.get_field_value("WIDGET_ID") === e) {
        var i = r.get_field("COLUMN")
        var /* [auto-meaningful-name] */t$header = t.header
        for (var s in t$header) if (s === (null === i || undefined === i ? undefined : i.get_value())) {
          var c = t$header[s]
          i.set_text(c.field)
        }
      }
    }
  })
}
function et(e, t, n) {
  var /* [auto-meaningful-name] */VeUe$CLOUD_DICT_KEYS$blocksList = Ve()[Ue.CLOUD_DICT_KEYS].blocksList
  Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (VeUe$CLOUD_DICT_KEYS$blocksList.includes(o.type)) {
      var /* [auto-meaningful-name] */o$parent_block = o.parent_block
      var a = null === o$parent_block || undefined === o$parent_block ? undefined : o$parent_block.get_field_value("WIDGET_ID")
      if (a) {
        var s = Module_9.Z(a)
        if (e === s && o.get_field_value("KEYS") === t) {
          var c = o.get_field("KEYS")
          if (!(null === c || undefined === c)) {
            c.set_value(n)
          }
          if (!(null === c || undefined === c)) {
            c.set_text(n)
          }
        }
      }
    }
  })
}
function tt(e) {
  var /* [auto-meaningful-name] */VeUe$CLOUD_DICT_KEYS$blocksList = Ve()[Ue.CLOUD_DICT_KEYS].blocksList
  Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (n) {
    if (VeUe$CLOUD_DICT_KEYS$blocksList.includes(n.type)) {
      var /* [auto-meaningful-name] */n$parent_block = n.parent_block
      if (n$parent_block && n$parent_block.get_field_value("WIDGET_ID") === e) {
        var o = n.get_field("KEYS")
        if (!(null === o || undefined === o)) {
          o.set_value(Module_9.h)
        }
        if (!(null === o || undefined === o)) {
          o.set_text(Module_9.g)
        }
      }
    }
  })
}
function nt(e, t, n) {
  var /* [auto-meaningful-name] */VeUe$CLOUD_TABLE_COLUMNS$blocksList = Ve()[Ue.CLOUD_TABLE_COLUMNS].blocksList
  Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (VeUe$CLOUD_TABLE_COLUMNS$blocksList.includes(o.type)) {
      var /* [auto-meaningful-name] */o$parent_block = o.parent_block
      var a = null === o$parent_block || undefined === o$parent_block ? undefined : o$parent_block.get_field_value("WIDGET_ID")
      if (a) {
        var s = Module_9.db(a)
        if (e === s && o.get_field_value("COLUMNS") === t) {
          var c = o.get_field("COLUMNS")
          if (!(null === c || undefined === c)) {
            c.set_value(n)
          }
          if (!(null === c || undefined === c)) {
            c.set_text(n)
          }
        }
      }
    }
  })
}
function rt(e) {
  var /* [auto-meaningful-name] */VeUe$CLOUD_TABLE_COLUMNS$blocksList = Ve()[Ue.CLOUD_TABLE_COLUMNS].blocksList
  Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (n) {
    if (VeUe$CLOUD_TABLE_COLUMNS$blocksList.includes(n.type)) {
      var /* [auto-meaningful-name] */n$parent_block = n.parent_block
      if (n$parent_block && n$parent_block.get_field_value("WIDGET_ID") === e) {
        var o = n.get_field("COLUMNS")
        if (!(null === o || undefined === o)) {
          o.set_value(Module_9.h)
        }
        if (!(null === o || undefined === o)) {
          o.set_text(Module_9.g)
        }
      }
    }
  })
}
export { Ue }
export { ze }
export { Ye }
export { Ke }
export { qe }
export { Xe }
export { Qe }
export { Ze }
export { Je }
export { $e }
export { et }
export { tt }
export { nt }
export { rt }
