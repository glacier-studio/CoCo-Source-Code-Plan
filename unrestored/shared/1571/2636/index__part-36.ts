/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-36
 */

"use strict"

import { $d } from "./index__part-35"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_146 from /* 146 */"./146"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_118 from /* 118 */"./118/index"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
var op = {
  type: Src_editor_widget_builtIn_types.H,
  category: {
    iconId: Module_146.b,
    blocks: Src_editor_widget_builtIn_types.H
  },
  categoryClass: {
    text: "",
    iconId: Module_146.b,
    blocks: []
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"text_widget_on_press\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $d, "<block type=\"text_widget_set_content\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"CONTENT\">\n        <shadow type=\"text_multiline\">\n          <field name=\"TEXT\">").concat(Src_shared_packages_Crc_blink_src_index.Blink.Msg.TEXT, "</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"text_widget_set_color\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"COLOR\">\n        <shadow type=\"color_picker\"><field name=\"COLOR_PALETTE\">").concat(Module_146.e, "</field></shadow>\n      </value>\n    </block>"), "<block type=\"text_widget_set_font_size\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='").concat(Module_60.n, ",,1'>16</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"text_widget_set_align\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $d, Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.H,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"text_widget_set_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='").concat(Module_146.l, ",").concat(Module_146.j, ",1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"text_widget_set_position\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"POSITION_TYPE\">positionX</field>\n        <value name=\"NUM\">\n          <shadow type=\"math_number\">\n            <field name=\"NUM\" constraints=',,1'>100</field>\n          </shadow>\n        </value>\n    </block>"), "<block type=\"text_widget_set_visible\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $d, "<block type='text_widget_get_content' uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type='text_widget_get_color' uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type='text_widget_get_font_size' uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.H,
        widgetId: e
      }), "<block type=\"text_widget_get_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n    </block>"), "<block type=\"text_widget_get_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n    </block>"), $d, Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.H,
        widgetId: e
      })
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("text_widget_on_press", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        return i ? Module_4.n("onTextPress", [Module_4.o(o)], i) : ""
      })
      e.insertBlockSnippetGenerator("text_widget_set_visible", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "show" === e.getFieldValue(r, "DISPLAY")
        return Module_4.n("setTextWidgetVisible", [Module_4.o(o), i])
      })
      e.insertBlockSnippetGenerator("text_widget_get_color", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "COLOR_TYPE") || ""
        if (!o || !i) {
          return ""
        }
        var a = "textColor" === i ? "getTextWidgetFontColor" : "getTextWidgetBackgroundColor"
        return Module_4.s(a, [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("text_widget_get_content", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        return o ? Module_4.s("getTextWidgetContent", [Module_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("text_widget_field_color", function (t, n) {
        var r = t.blocks[n]
        return Module_4.o(e.getFieldValue(r, "COLOR_VALUE") || "")
      })
      e.insertBlockSnippetGenerator("text_widget_get_property", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "PROPERTY")
        if (!o || !i) {
          return ""
        }
        var a = ""
        switch (i) {
          case "height":
            a = "getTextWidgetHeight"
            break
          case "width":
            a = "getTextWidgetWidth"
            break
          case "fontSize":
            a = "getTextWidgetFontSize"
            break
          case "positionX":
            a = "getTextWidgetPositionX"
            break
          case "positionY":
            a = "getTextWidgetPositionY"
        }
        return Module_4.s(a, [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("text_widget_set_content", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "CONTENT", e.ORDER_FUNCTION_CALL)
        return o ? Module_4.n("setTextWidgetContent", [Module_4.o(o), i]) : ""
      })
      e.insertBlockSnippetGenerator("text_widget_set_color", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "COLOR_TYPE")
        var a = e.valueToCode(t, n, "COLOR", e.ORDER_FUNCTION_CALL)
        return o && i && a ? Module_4.l(Module_4.n("textColor" === i ? "setTextWidgetFontColor" : "setTextWidgetBackgroundColor", [Module_4.o(o), a]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("text_widget_set_align", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "ALIGN_TYPE")
        var a = e.getFieldValue(r, "ALIGN_VALUE")
        if (!(o && i && a)) {
          return ""
        }
        var s = "horizontal" === i ? "setTextWidgetHorizontalAlignment" : "setTextWidgetVerticalAlignment"
        return Module_4.n(s, [Module_4.o(o), Module_4.o(a)])
      })
      e.insertBlockSnippetGenerator("text_widget_set_property", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "PROPERTY")
        if (!o || !i) {
          return ""
        }
        var a = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL) || "''"
        var s = ""
        switch (i) {
          case "height":
            s = "setTextWidgetHeight"
            break
          case "width":
            s = "setTextWidgetWidth"
            break
          case "fontSize":
            s = "setTextWidgetFontSize"
            break
          case "positionX":
            s = "setTextWidgetPositionX"
            break
          case "positionY":
            s = "setTextWidgetPositionY"
        }
        return Module_4.l(Module_4.n(s, [Module_4.o(o), a]), r, e)
      })
      e.insertBlockSnippetGenerator("text_widget_set_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "POSITION_TYPE") || ""
        var a = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL) || ""
        return Module_4.l(Module_4.n("positionX" === i ? "setTextWidgetPositionX" : "setTextWidgetPositionY", [Module_4.o(o), a]), r, e)
      })
      e.insertBlockSnippetGenerator("text_widget_get_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = "positionX" === (e.getFieldValue(r, "POSITION_TYPE") || "") ? "getTextWidgetPositionX" : "getTextWidgetPositionY"
        return Module_4.s(i, [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("text_widget_set_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
        var a = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "setTextWidgetWidth" : "setTextWidgetHeight"
        return Module_4.l(Module_4.n(a, [Module_4.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("text_widget_get_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "getTextWidgetWidth" : "getTextWidgetHeight"
        return Module_4.s(i, [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("text_widget_set_font_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setTextWidgetFontSize", [Module_4.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("text_widget_get_font_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        return o ? Module_4.s("getTextWidgetFontSize", [Module_4.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.H)
        }
      }
      function r(e) {
        Module_61.l(this, e, [
          {
            label: "width",
            min: Module_146.m,
            max: Module_146.k,
            value: 100
          }, {
            label: "height",
            min: Module_146.l,
            max: Module_146.j,
            value: 100
          }
        ])
      }
      e.insertBlockProfile("text_widget_on_press", {
        type: "text_widget_on_press",
        message0: "%{BKY_TEXT_WIDGET_ON_PRESS}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), Module_6.a({}, n), {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_set_content", {
        type: "text_widget_set_content",
        message0: "%{BKY_TEXT_WIDGET_SET_CONTENT}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "CONTENT",
            check: ["String", "Number", "Boolean", "Array", "Object"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_set_color", {
        type: "text_widget_set_color",
        message0: "%{BKY_TEXT_WIDGET_SET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "COLOR_TYPE",
            custom: true,
            options: [[t.Msg.TEXT_COLOR, "textColor"], [t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
          }, {
            type: "input_value",
            check: ["Color", "String"],
            name: "COLOR"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_field_color", {
        type: "text_widget_field_color",
        message0: "%1",
        args0: [
          {
            type: "field_colour",
            name: "COLOR_VALUE",
            colour: "#000000"
          }
        ],
        colour: "#ffffff",
        output: ["Color"]
      })
      e.insertBlockProfile("text_widget_set_align", {
        type: "text_widget_set_align",
        message0: "%{BKY_TEXT_WIDGET_SET_ALIGN}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "ALIGN_TYPE",
            custom: true,
            options: [[t.Msg.TEXT_WIDGET_HORIZONTAL_ALIGN, "horizontal"], [t.Msg.TEXT_WIDGET_VERTICAL_ALIGN, "vertical"]],
            optOnchange: function (e) {
              if (this.source_block) {
                var /* [auto-meaningful-name] */this$source_block = this.source_block
                var /* [auto-meaningful-name] */this$source_block$inputList = this$source_block.inputList
                var /* [auto-meaningful-name] */this$source_block$inputListThis$source_block$inputList$length1$name = this$source_block$inputList[this$source_block$inputList.length - 1].name
                this$source_block.removeInput(this$source_block$inputListThis$source_block$inputList$length1$name)
                var i = []
                i = "horizontal" === e ? [[t.Msg.LEFT_ALIGN, "left"], [t.Msg.CENTER_ALIGN, "center"], [t.Msg.RIGHT_ALIGN, "right"]] : [[t.Msg.TOP_ALIGN, "flex-start"], [t.Msg.CENTER_ALIGN, "center"], [t.Msg.BOTTOM_ALIGN, "flex-end"]]
                var a = new Module_118.a({
                  type: "field_coco_dropdown",
                  name: "ALIGN_VALUE",
                  custom: true,
                  options: i
                })
                this$source_block.appendDummyInput("ALIGN").append_field(a, "ALIGN_VALUE")
              }
            }
          }
        ],
        message1: "%1 %2",
        args1: [
          {
            type: "field_coco_dropdown",
            name: "ALIGN_VALUE",
            custom: true,
            options: [[t.Msg.LEFT_ALIGN, "left"], [t.Msg.CENTER_ALIGN, "center"], [t.Msg.RIGHT_ALIGN, "right"]]
          }, {
            type: "input_dummy",
            name: "ALIGN"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_set_property", {
        type: "text_widget_set_property",
        message0: "%{BKY_SET} %1 %{BKY_OF} %2 %{BKY_IS}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: [[t.Msg.FONT_SIZE, "fontSize"], [t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"], [t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]],
            optOnchange: r
          }
        ],
        message1: "%1",
        args1: [
          {
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
      e.insertBlockProfile("text_widget_set_visible", {
        type: "text_widget_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: function () {
              return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
            }
          }, {
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: function () {
              return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.H)
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_get_content", {
        type: "text_widget_get_content",
        message0: "%{BKY_TEXT_WIDGET_GET_CONTENT}",
        args0: [Module_6.a({}, n)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_get_color", {
        type: "text_widget_get_color",
        message0: "%{BKY_TEXT_WIDGET_GET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "COLOR_TYPE",
            custom: true,
            options: [[t.Msg.TEXT_COLOR, "textColor"], [t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
          }
        ],
        output: ["String", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_get_property", {
        type: "text_widget_get_property",
        message0: "%{BKY_TEXT_WIDGET_GET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.FONT_SIZE, "fontSize"], [t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"], [t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
            }
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_set_position", {
        type: "text_widget_set_position",
        message0: "%{BKY_SET} %1 %{BKY_OF} %2 %{BKY_IS}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
          }
        ],
        message1: "%1",
        args1: [
          {
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
      e.insertBlockProfile("text_widget_get_position", {
        type: "text_widget_get_position",
        message0: "%1 %{BKY_OF} %2",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: function () {
              return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
            }
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_set_size", {
        type: "text_widget_set_size",
        message0: "%{BKY_SET} %1 %{BKY_OF} %2 %{BKY_IS} %3",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]],
            optOnchange: r
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
      e.insertBlockProfile("text_widget_get_size", {
        type: "text_widget_get_size",
        message0: "%1 %{BKY_OF} %2",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("text_widget_set_font_size", {
        type: "text_widget_set_font_size",
        message0: "%{BKY_TEXT_WIDGET_SET_FONT_SIZE}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("text_widget_get_font_size", {
        type: "text_widget_get_font_size",
        message0: "%{BKY_TEXT_WIDGET_GET_FONT_SIZE}",
        args0: [Module_6.a({}, n)],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["text_widget_on_press", "text_widget_set_visible", "text_widget_set_color", "text_widget_set_content", "text_widget_set_align", "text_widget_set_property", "text_widget_get_property", "text_widget_set_position", "text_widget_get_position", "text_widget_set_size", "text_widget_get_size", "text_widget_set_font_size", "text_widget_get_font_size", "text_widget_get_content", "text_widget_get_color"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["text_widget_on_press"]
}
export { op }
