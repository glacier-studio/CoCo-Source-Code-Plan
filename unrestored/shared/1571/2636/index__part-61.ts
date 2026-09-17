/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-61
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_105 from /* 105 */"./105"
import * as /* [auto-meaningful-name] */Module_244 from /* 244 */"./244"
var lh = {
  type: Src_editor_widget_builtIn_types.f,
  category: {
    iconId: "icon-widget-canvas",
    blocks: Src_editor_widget_builtIn_types.f
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-canvas",
    blocks: []
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"canvas_on_canvas_press\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.f,
        title: "背景",
        lineId: "background"
      }), "<block type=\"canvas_set_background_image\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"IMAGE_FILE_ID\">\n        <shadow type=\"image_file_list_dropdown\">\n          <field name=\"IMAGE_FILE_ID\">").concat(Module_61.c, "</field>\n        </shadow>\n      </value>\n    </block>"), Module_33.sb({
        property: "backgroundColor",
        widgetType: Src_editor_widget_builtIn_types.f,
        widgetId: e,
        isSetProperty: true
      }), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.f,
        title: "笔迹",
        lineId: "brush"
      }), "<block type=\"canvas_clear_all_brush\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.f,
        title: "通用",
        lineId: "common"
      }), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.f,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"canvas_set_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='").concat(Module_244.h, ",").concat(Module_244.f, ",1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"canvas_set_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"canvas_set_visible\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.f,
        title: "返回值",
        lineId: "getter"
      }), Module_33.sb({
        property: "backgroundColor",
        widgetType: Src_editor_widget_builtIn_types.f,
        widgetId: e
      }), "<block type=\"canvas_get_background_image\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.f,
        widgetId: e
      }), "<block type=\"canvas_get_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n    </block>"), "<block type=\"canvas_get_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n    </block>"), "<block type=\"canvas_to_data_url\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"canvas_check_if_pressed\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.f,
        widgetId: e
      })
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      function t(t, n) {
        var r = t.blocks[n]
        return {
          block: r,
          widgetId: e.getFieldValue(r, "WIDGET_ID") || ""
        }
      }
      e.insertBlockSnippetGenerator("canvas_on_canvas_press", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "PRESS_EVENT") || ""
        var c = e.statementToCode(n, r, "DO")
        if (!c) {
          return ""
        }
        var l = e.valueToCode(n, r, "POSITION_X", e.ORDER_FUNCTION_CALL)
        var u = e.valueToCode(n, r, "POSITION_Y", e.ORDER_FUNCTION_CALL)
        return "press" === s ? Module_4.n("argsOnCanvasPress", [Module_4.o(o$widgetId)], c, [l, u]) : "pressIn" === s ? Module_4.n("argsOnCanvasPressIn", [Module_4.o(o$widgetId)], c, [l, u]) : "pressHold" === s ? Module_4.n("argsOnCanvasPressHold", [Module_4.o(o$widgetId)], c, [l, u]) : Module_4.n("argsOnCanvasPressOut", [Module_4.o(o$widgetId)], c, [l, u])
      })
      e.insertBlockSnippetGenerator("canvas_on_canvas_press_positionX", function () {
        return "canvasPressPositionX"
      })
      e.insertBlockSnippetGenerator("canvas_on_canvas_press_positionY", function () {
        return "canvasPressPositionY"
      })
      e.insertBlockSnippetGenerator("canvas_on_canvas_swipe", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        return i ? Module_4.n("onCanvasSwipe", [Module_4.o(tNR$widgetId)], i) : ""
      })
      e.insertBlockSnippetGenerator("canvas_clear_all_brush", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.n("clearCanvasBrush", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("canvas_to_data_url", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.r("canvasToDataUrl", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("canvas_set_background_image", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "IMAGE_FILE_ID", e.ORDER_FUNCTION_CALL)
        return s ? Module_4.l(Module_4.n("setCanvasBackgroundImageId", [Module_4.o(o$widgetId), s]), o$block, e) : ""
      })
      e.insertBlockSnippetGenerator("canvas_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "show" === e.getFieldValue(o$block, "DISPLAY")
        return Module_4.n("setWidgetVisible", [Module_4.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("canvas_set_size", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var c = "width" === e.getFieldValue(o$block, "SIZE_TYPE") ? "setWidgetWidth" : "setWidgetHeight"
        return Module_4.l(Module_4.n(c, [Module_4.o(o$widgetId), s]), o$block, e, true)
      })
      e.insertBlockSnippetGenerator("canvas_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var c = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "setWidgetPositionX" : "setWidgetPositionY"
        return Module_4.l(Module_4.n(c, [Module_4.o(o$widgetId), s]), o$block, e, true)
      })
      e.insertBlockSnippetGenerator("canvas_set_background_color", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "COLOR", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setWidgetAttribute", [Module_4.o(o$widgetId), Module_4.o("backgroundColor"), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("canvas_get_size", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "width" === e.getFieldValue(o$block, "SIZE_TYPE") ? "getWidgetWidth" : "getWidgetHeight"
        return Module_4.s(s, [Module_4.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("canvas_get_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "getWidgetPositionX" : "getWidgetPositionY"
        return Module_4.s(s, [Module_4.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("canvas_get_background_color", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getWidgetAttribute", [Module_4.o(tEN$widgetId), Module_4.o("backgroundColor")])
      })
      e.insertBlockSnippetGenerator("canvas_get_background_image", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getCanvasBackgroundImageName", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("canvas_check_if_pressed", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("checkIfCanvasPressed", [Module_4.o(tEN$widgetId)])
      })
    },
    setBlockGroupProfile: function (e, t) {
      var /* [auto-meaningful-name] */BKY_BLOCK_TAB_ICON = "%{BKY_BLOCK_TAB_ICON}"
      var r = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType("CANVAS_WIDGET")
        }
      }
      e.insertBlockProfile("canvas_on_canvas_press", {
        type: "canvas_on_canvas_press",
        message0: "%{BKY_CANVAS_ON_CANVAS_PRESS_MSG0}",
        args0: [
          Module_4.e(BKY_BLOCK_TAB_ICON, true), Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "PRESS_EVENT",
            custom: true,
            options: function () {
              return [[t.Msg.PRESS, "press"], [t.Msg.PRESS_IN, "pressIn"], [t.Msg.PRESS_HOLD, "pressHold"], [t.Msg.PRESS_OUT, "pressOut"]]
            }
          }, {
            type: "input_value",
            name: "POSITION_X",
            check: ["Number"],
            default_shadow: "<shadow type=\"canvas_on_canvas_press_positionX\" />",
            align: "CENTRE"
          }, {
            type: "input_value",
            name: "POSITION_Y",
            align: "CENTRE",
            check: ["Number"],
            default_shadow: "<shadow type=\"canvas_on_canvas_press_positionY\" />"
          }
        ],
        message1: "%{BKY_CANVAS_ON_CANVAS_PRESS_MSG1}",
        args1: [
          {
            type: "input_statement",
            name: "DO",
            provided_context: "canvas_on_canvas_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("canvas_on_canvas_press_positionX", {
        type: "canvas_on_canvas_press_positionX",
        message0: "%{BKY_PARAM_POSITION_X}",
        output: "Number",
        required_context: "canvas_on_canvas_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("canvas_on_canvas_press_positionY", {
        type: "canvas_on_canvas_press_positionY",
        message0: "%{BKY_PARAM_POSITION_Y}",
        output: "Number",
        required_context: "canvas_on_canvas_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("canvas_on_canvas_swipe", {
        type: "canvas_on_canvas_swipe",
        message0: "%{BKY_CANVAS_ON_CANVAS_SWIPE}",
        args0: [Module_4.e(BKY_BLOCK_TAB_ICON, true), Module_6.a({}, r)],
        message1: "%1",
        args1: [
          {
            type: "input_statement",
            name: "DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("canvas_clear_all_brush", {
        type: "canvas_clear_all_brush",
        message0: "%{BKY_CANVAS_CLEAR_ALL_BRUSH}",
        args0: [Module_6.a({}, r)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}"
      })
      e.insertBlockProfile("canvas_to_data_url", {
        type: "canvas_to_data_url",
        message0: "%{BKY_CANVAS_TO_DATA_URL}",
        args0: [Module_6.a({}, r)],
        colour: "%{BKY_APPEARANCE_HUE}",
        output: ["String"]
      })
      e.insertBlockProfile("canvas_set_visible", {
        type: "canvas_set_visible",
        message0: "%{BKY_CANVAS_SET_VISIBLE}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}"
      })
      e.insertBlockProfile("canvas_set_position", {
        type: "canvas_set_position",
        message0: "%{BKY_CANVAS_SET_PROPERTY}",
        args0: [
          Module_6.a({}, r), {
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
      e.insertBlockProfile("canvas_set_size", {
        type: "canvas_set_size",
        message0: "%{BKY_CANVAS_SET_PROPERTY}",
        args0: [
          Module_6.a({}, r), {
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
              }(this, "100", "width" === t ? Module_244.g : Module_244.f, "width" === t ? Module_244.i : Module_244.h)
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
      e.insertBlockProfile("canvas_set_background_color", {
        type: "canvas_set_background_color",
        message0: "%{BKY_CANVAS_SET_BACKGROUND_COLOR}",
        args0: [
          Module_6.a({}, r), {
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
      e.insertBlockProfile("canvas_set_background_image", {
        type: "canvas_set_background_image",
        message0: "%{BKY_CANVAS_SET_BACKGROUND_IMAGE}",
        args0: [
          Module_6.a({}, r), {
            type: "input_value",
            name: "IMAGE_FILE_ID",
            check: ["String"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("canvas_get_size", {
        type: "canvas_get_size",
        message0: "%{BKY_CANVAS_GET_PROPERTY}",
        args0: [
          Module_6.a({}, r), {
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
      e.insertBlockProfile("canvas_get_position", {
        type: "canvas_get_position",
        message0: "%{BKY_CANVAS_GET_PROPERTY}",
        args0: [
          Module_6.a({}, r), {
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
      e.insertBlockProfile("canvas_get_background_color", {
        type: "canvas_get_background_color",
        message0: "%{BKY_CANVAS_GET_BACKGROUND_COLOR}",
        args0: [Module_6.a({}, r)],
        output: ["String", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("canvas_get_background_image", {
        type: "canvas_get_background_image",
        message0: "%{BKY_CANVAS_GET_BACKGROUND_IMAGE}",
        args0: [Module_6.a({}, r)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("canvas_check_if_pressed", {
        type: "canvas_check_if_pressed",
        message0: "%{BKY_CANVAS_CHECK_IF_PRESSED}",
        args0: [Module_6.a({}, r)],
        output: "Boolean",
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["canvas_on_canvas_press", "canvas_set_position", "canvas_set_size", "canvas_set_background_color", "canvas_set_background_image", "canvas_clear_all_brush", "canvas_set_visible", "canvas_get_position", "canvas_get_background_color", "canvas_get_background_image", "canvas_check_if_pressed"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["canvas_on_canvas_press"]
}
var uh = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, {
    type: "VisibleSwitch"
  }, {
    type: "ChangeImage",
    stillImageShowResizeMode: false,
    key: "backgroundImage",
    label: "backgroundImage"
  }, {
    type: "BackgroundColor"
  }, {
    type: "WidgetOpacity"
  }, {
    type: "Size",
    sizeRange: [[Module_244.i, Module_244.g], [Module_244.h, Module_244.f]]
  }, {
    type: "Coordinate"
  }
]
export { lh }
export { uh }
