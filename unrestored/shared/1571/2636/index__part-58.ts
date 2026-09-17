/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-58
 */

"use strict"

import { Hf } from "./index__part-56"
import { Xf } from "./index__part-57"
import * as /* [auto-meaningful-name] */Module_127 from /* 127 */"./127"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_228 from /* 228 */"./228/index"
var Zf = {
  type: Src_editor_widget_builtIn_types.x,
  category: {
    iconId: Module_127.i,
    blocks: Src_editor_widget_builtIn_types.x
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"list_viewer_on_press\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.x,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"list_viewer_set_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='").concat(Module_127.l, ",").concat(Module_127.j, ",1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_set_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_set_data_source\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DATA_SOURCE\">\n        <shadow type=\"data_source_get\"></shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_set_visible\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"list_viewer_set_disabled\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.x,
        widgetId: e
      }), "<block type=\"list_viewer_get_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n    </block>"), "<block type=\"list_viewer_get_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n    </block>"), "<block type=\"list_viewer_get_data_source\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.x,
        widgetId: e
      }), Module_33.sb({
        property: "__disabled",
        widgetType: Src_editor_widget_builtIn_types.x,
        widgetId: e
      }), Module_61.d, "<block type=\"list_viewer_child_widget_on_press\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n    </block>"), Module_61.d, "<block type=\"list_viewer_child_widget_bind_column\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <value name=\"COLUMN\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_child_widget_set_string_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(Module_61.c, "</field>\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_child_widget_set_font_size\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <value name=\"VALUE\">\n        <shadow type=\"math_number\"><field name=\"NUM\" constraints=\"12,99,1\">16</field></shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_child_widget_set_color_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(Module_61.c, "</field>\n      <value name=\"VALUE\">\n      <shadow type=\"color_picker\"><field name=\"COLOR_PALETTE\">#000000</field></shadow>\n      </value>\n    </block>"), Module_61.d, "<block type=\"list_viewer_child_widget_get_string_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(Module_61.c, "</field>\n    </block>"), "<block type=\"list_viewer_child_widget_get_font_size\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n    </block>"), "<block type=\"list_viewer_child_widget_get_color_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(Module_61.c, "</field>\n    </block>")
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("list_viewer_on_press_index", function () {
        return "".concat(Module_4.a, "index")
      })
      e.insertBlockSnippetGenerator("list_viewer_on_press", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        var a = e.valueToCode(t, n, "INDEX", e.ORDER_ATOMIC)
        return o && o !== Module_61.c && i ? Module_4.n("onListViewerPress", [Module_4.o(o)], i, [a]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_set_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
        if (!o || o === Module_61.c) {
          return ""
        }
        var a = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "setListViewerWidgetWidth" : "setListViewerWidgetHeight"
        return Module_4.l(Module_4.n(a, [Module_4.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("list_viewer_set_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
        if (!o || o === Module_61.c) {
          return ""
        }
        var a = "positionX" === e.getFieldValue(r, "POSITION_TYPE") ? "setListViewerWidgetPositionX" : "setListViewerWidgetPositionY"
        return Module_4.l(Module_4.n(a, [Module_4.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("data_source_get", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "DATA_SOURCE") || ""
        return o === Module_61.c ? "" : Module_4.o(o)
      })
      e.insertBlockSnippetGenerator("list_viewer_set_data_source", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "DATA_SOURCE", e.ORDER_FUNCTION_CALL) || ""
        return o && o !== Module_61.c && i && i !== Module_61.c ? Module_4.l(Module_4.n("setListViewerWidgetDataSource", [Module_4.o(o), i]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_set_visible", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "show" === e.getFieldValue(r, "VISIBLE")
        return o && o !== Module_61.c ? Module_4.n("setListViewerWidgetVisible", [Module_4.o(o), i]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_set_disabled", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "disabled" === e.getFieldValue(r, "DISABLED")
        return o && o !== Module_61.c ? Module_4.n("setListViewerWidgetDisabled", [Module_4.o(o), i]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_get_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "getListViewerWidgetWidth" : "getListViewerWidgetHeight"
        return o && o !== Module_61.c ? Module_4.s(i, [Module_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_get_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "positionX" === e.getFieldValue(r, "POSITION_TYPE") ? "getListViewerWidgetPositionX" : "getListViewerWidgetPositionY"
        return o && o !== Module_61.c ? Module_4.s(i, [Module_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_get_data_source", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o && o !== Module_61.c ? Module_4.s("getListViewerWidgetDataSource", [Module_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_on_press_index", function () {
        return "".concat(Module_4.a, "index")
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_on_press", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.statementToCode(t, n, "DO")
        var s = e.valueToCode(t, n, "INDEX", e.ORDER_ATOMIC)
        if (!o || o === Module_61.c) {
          return ""
        }
        if (!i || i === Module_61.c) {
          return ""
        }
        if (!a) {
          return ""
        }
        var c = "".concat(o, "_").concat(i)
        return Module_4.n("onListViewerChildWidgetPress", [Module_4.o(c)], a, [s])
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_bind_column", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.valueToCode(t, n, "COLUMN", e.ORDER_FUNCTION_CALL)
        return o && o !== Module_61.c && i && i !== Module_61.c ? Module_4.l(Module_4.n("setListViewerChildWidgetBindColumn", [Module_4.o(o), Module_4.o(i), a]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_set_string_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return o && o !== Module_61.c && i && i !== Module_61.c && a && a !== Module_61.c ? Module_4.l(Module_4.n("setListViewerChildWidgetAttribute", [Module_4.o(o), s, Module_4.o(i), Module_4.o(a), c]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_set_font_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        var s = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return o && o !== Module_61.c && i && i !== Module_61.c ? Module_4.l(Module_4.n("setListViewerChildWidgetAttribute", [Module_4.o(o), a, Module_4.o(i), Module_4.o("fontSize"), s]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_set_color_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return o && o !== Module_61.c && i && i !== Module_61.c && a && a !== Module_61.c ? Module_4.l(Module_4.n("setListViewerChildWidgetAttribute", [Module_4.o(o), s, Module_4.o(i), Module_4.o(a), c]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_get_string_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        return o && o !== Module_61.c && i && i !== Module_61.c && a ? Module_4.l(Module_4.s("getListViewerChildWidgetAttribute", [Module_4.o(o), s, Module_4.o(i), Module_4.o(a)]), r, e, false, true) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_get_font_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        return o && o !== Module_61.c && i && i !== Module_61.c ? Module_4.l(Module_4.s("getListViewerChildWidgetAttribute", [Module_4.o(o), a, Module_4.o(i), Module_4.o("fontSize")]), r, e, false, true) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_get_color_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        return o && o !== Module_61.c && i && i !== Module_61.c && a ? Module_4.l(Module_4.s("getListViewerChildWidgetAttribute", [Module_4.o(o), s, Module_4.o(i), Module_4.o(a)]), r, e, false, true) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var /* [auto-meaningful-name] */BKY_BLOCK_TAB_ICON = "%{BKY_BLOCK_TAB_ICON}"
      var r = [[t.Msg.TEXT_CONTENT, "content"]]
      var o = [[t.Msg.TEXT_COLOR, "color"], [t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
      var i = [[t.Msg.IMAGE, "fileId"]]
      var a = [[t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
      var s = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.x)
        },
        optOnchange: function (e) {
          var /* [auto-meaningful-name] */this$source_block
          var /* [auto-meaningful-name] */this$source_block1
          var r = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field("SLOT_WIDGET")
          var o = null === (this$source_block1 = this.source_block) || undefined === this$source_block1 ? undefined : this$source_block1.get_field("ATTRIBUTE")
          if (!(null === r || undefined === r)) {
            r.set_value(Module_61.c)
          }
          if (!(null === o || undefined === o)) {
            o.set_value(Module_61.c)
          }
        }
      }
      var c = {
        type: "field_coco_dropdown",
        name: "SLOT_WIDGET",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var t = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || Module_228.a()
          var n = Module_46.c().getListViewerChildWidgetList(t)
          return n
        },
        optOnchange: u
      }
      var l = {
        type: "field_coco_dropdown",
        name: "SLOT_WIDGET",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var t = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || Module_228.a()
          var n = Module_46.c().getListViewerChildWidgetList(t, Src_editor_widget_builtIn_types.H)
          return n
        },
        optOnchange: u
      }
      function u(e) {
        var /* [auto-meaningful-name] */this$source_block
        var n = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field("ATTRIBUTE")
        if (!(null === n || undefined === n)) {
          n.set_value(Module_61.c)
        }
      }
      var d = {
        type: "field_coco_dropdown",
        name: "ATTRIBUTE",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var /* [auto-meaningful-name] */this$source_block1
          var n = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || Module_228.a()
          var o = null === (this$source_block1 = this.source_block) || undefined === this$source_block1 ? undefined : this$source_block1.get_field_value("SLOT_WIDGET")
          var a = Module_33.Cb(n)
          var s = []
          if (a && o) {
            var /* [auto-meaningful-name] */a$attributes
            var l
            var u = Module_33.Cb(null === (a$attributes = a.attributes) || undefined === a$attributes || null === (l = a$attributes.templateSlotMap[o]) || undefined === l ? undefined : l.widgetId)
            if ((null === u || undefined === u ? undefined : u.type) === Src_editor_widget_builtIn_types.H) {
              s = s.concat(r)
            }
            if ((null === u || undefined === u ? undefined : u.type) === Src_editor_widget_builtIn_types.v) {
              s = s.concat(i)
            }
          }
          s.push([Module_61.b, Module_61.c])
          return s
        }
      }
      var p = {
        type: "field_coco_dropdown",
        name: "ATTRIBUTE",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var /* [auto-meaningful-name] */this$source_block1
          var n = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || Module_228.a()
          var r = null === (this$source_block1 = this.source_block) || undefined === this$source_block1 ? undefined : this$source_block1.get_field_value("SLOT_WIDGET")
          var i = Module_33.Cb(n)
          var s = []
          if (i && r) {
            var /* [auto-meaningful-name] */i$attributes
            var l
            var u = Module_33.Cb(null === (i$attributes = i.attributes) || undefined === i$attributes || null === (l = i$attributes.templateSlotMap[r]) || undefined === l ? undefined : l.widgetId)
            if ((null === u || undefined === u ? undefined : u.type) === Src_editor_widget_builtIn_types.H) {
              s = s.concat(o)
            }
            if ((null === u || undefined === u ? undefined : u.type) === Src_editor_widget_builtIn_types.v) {
              s = s.concat(a)
            }
          }
          s.push([Module_61.b, Module_61.c])
          return s
        }
      }
      e.insertBlockProfile("list_viewer_on_press", {
        type: "list_viewer_on_press",
        message0: "%{BKY_LIST_VIEWER_ON_PRESS}",
        args0: [
          Module_4.e(BKY_BLOCK_TAB_ICON, true), Module_6.a({}, s), {
            type: "input_value",
            name: "INDEX",
            check: "String",
            align: "CENTRE",
            default_shadow: "<shadow type=\"list_viewer_on_press_index\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "list_viewer_on_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_on_press_index", {
        type: "list_viewer_on_press_index",
        message0: "%{BKY_LIST_VIEWER_ROW_INDEX}",
        output: ["Number", "String"],
        required_context: "list_viewer_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("list_viewer_set_size", {
        type: "list_viewer_set_size",
        message0: "%{BKY_LIST_VIEWER_SET_PROPERTY}",
        args0: [
          Module_6.a({}, s), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]],
            optOnchange: function (e) {
              var t = e || ""
              !function (e, t, n, r) {
                var /* [auto-meaningful-name] */e$source_block = e.source_block
                var i = null === e$source_block || undefined === e$source_block ? undefined : e$source_block.get_shadow_field("NUM")
                if (i && "FieldNumber" === i.field_type) {
                  i.set_value(t)
                  i.set_constraints(r, n, 1)
                }
              }(this, "100", "width" === t ? Module_127.k : Module_127.j, "width" === t ? Module_127.m : Module_127.l)
            }
          }, {
            type: "input_value",
            name: "NUM",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_set_position", {
        type: "list_viewer_set_position",
        message0: "%{BKY_LIST_VIEWER_SET_PROPERTY}",
        args0: [
          Module_6.a({}, s), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
          }, {
            type: "input_value",
            name: "NUM",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("data_source_get", {
        type: "data_source_get",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DATA_SOURCE",
            custom: true,
            advancedOptions: function () {
              return Module_46.c().getGlobalGridList(this)
            }
          }
        ],
        output: "String",
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_set_data_source", {
        type: "list_viewer_set_data_source",
        message0: "%{BKY_LIST_VIEWER_SET_DATA_SOURCE}",
        args0: [
          Module_6.a({}, s), {
            type: "input_value",
            name: "DATA_SOURCE",
            check: ["String"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_set_visible", {
        type: "list_viewer_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
          }, Module_6.a({}, s)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_set_disabled", {
        type: "list_viewer_set_disabled",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISABLED",
            custom: true,
            options: function () {
              return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
            }
          }, Module_6.a({}, s)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_get_size", {
        type: "list_viewer_get_size",
        message0: "%{BKY_LIST_VIEWER_GET_PROPERTY}",
        args0: [
          Module_6.a({}, s), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]]
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_get_position", {
        type: "list_viewer_get_position",
        message0: "%{BKY_LIST_VIEWER_GET_PROPERTY}",
        args0: [
          Module_6.a({}, s), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_get_data_source", {
        type: "list_viewer_get_data_source",
        message0: "%{BKY_LIST_VIEWER_GET_DATA_SOURCE}",
        args0: [Module_6.a({}, s)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_on_press", {
        type: "list_viewer_child_widget_on_press",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_ON_PRESS}",
        args0: [
          Module_4.e(BKY_BLOCK_TAB_ICON, true), Module_6.a({}, s), Module_6.a({}, c), {
            type: "input_value",
            name: "INDEX",
            check: "Number",
            align: "CENTRE",
            default_shadow: "<shadow type=\"list_viewer_child_widget_on_press_index\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "list_viewer_child_widget_on_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_on_press_index", {
        type: "list_viewer_child_widget_on_press_index",
        message0: "%{BKY_LIST_VIEWER_ROW_INDEX}",
        output: "Number",
        required_context: "list_viewer_child_widget_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("list_viewer_child_widget_bind_column", {
        type: "list_viewer_child_widget_bind_column",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_BIND_COLUMN}",
        args0: [
          Module_6.a({}, s), Module_6.a({}, c), {
            type: "input_value",
            name: "COLUMN",
            check: "String"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_set_string_attributes", {
        type: "list_viewer_child_widget_set_string_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_SET_ATTRIBUTES}",
        args0: [
          Module_6.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, Module_6.a({}, c), Module_6.a(Module_6.a({}, d), {}, {
            optOnchange: function (e) {
              var /* [auto-meaningful-name] */this$source_block
              var n = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_input("VALUE")
              if ("content" === e) {
                if (!(null === n || undefined === n)) {
                  n.set_check(["String", "Number", "Boolean", "Array"])
                }
              }
              if ("fileId" === e) {
                if (!(null === n || undefined === n)) {
                  n.set_check(["String"])
                }
              }
            }
          }), {
            type: "input_value",
            name: "VALUE",
            check: ["String", "Number", "Boolean"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_set_color_attributes", {
        type: "list_viewer_child_widget_set_color_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_SET_ATTRIBUTES}",
        args0: [
          Module_6.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, Module_6.a({}, c), Module_6.a({}, p), {
            type: "input_value",
            name: "VALUE",
            check: ["Color"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_set_font_size", {
        type: "list_viewer_child_widget_set_font_size",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_SET_FONT_SIZE}",
        args0: [
          Module_6.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, Module_6.a({}, l), {
            type: "input_value",
            name: "VALUE",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_get_string_attributes", {
        type: "list_viewer_child_widget_get_string_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_GET_ATTRIBUTES}",
        args0: [
          Module_6.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, Module_6.a({}, c), Module_6.a({}, d)
        ],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_get_font_size", {
        type: "list_viewer_child_widget_get_font_size",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_GET_FONT_SIZE}",
        args0: [
          Module_6.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, Module_6.a({}, l)
        ],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_get_color_attributes", {
        type: "list_viewer_child_widget_get_color_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_GET_ATTRIBUTES}",
        args0: [
          Module_6.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, Module_6.a({}, c), Module_6.a({}, p)
        ],
        output: ["String", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: Module_127.i,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["list_viewer_on_press", "list_viewer_set_size", "list_viewer_set_position", "list_viewer_set_data_source", "list_viewer_set_visible", "list_viewer_set_disabled", "list_viewer_get_size", "list_viewer_get_position", "list_viewer_get_data_source", "list_viewer_child_widget_on_press", "list_viewer_child_widget_bind_column", "list_viewer_child_widget_set_string_attributes", "list_viewer_child_widget_set_font_size", "list_viewer_child_widget_set_color_attributes", "list_viewer_child_widget_get_string_attributes", "list_viewer_child_widget_get_font_size", "list_viewer_child_widget_get_color_attributes"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["list_viewer_on_press", "list_viewer_child_widget_on_press"]
}
var Jf = {
  icon: Module_127.i,
  title: "ListViewerWidget.widgetName",
  type: Src_editor_widget_builtIn_types.x,
  previewAreaWidgetTitle: "ListViewerWidget.widgetName",
  component: Xf,
  editConfig: Hf,
  blockConfig: Zf,
  isInvisibleWidget: false,
  widget: {
    isGlobalWidget: false,
    size: {
      width: Module_127.h,
      height: Module_127.d
    },
    widgetIds: [],
    attributes: {
      disabled: false,
      backgroundColor: Module_127.c,
      templateRenderType: Module_127.e,
      templateType: Module_127.g,
      dataSource: "",
      templateSlotMap: {}
    }
  },
  isDiscard: true
}
export { Jf }
