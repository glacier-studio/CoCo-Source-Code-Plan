/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：61__part-0
 */

"use strict"

import { f, h } from "./61__part-1"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_storage from /* 96 */"../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"./75"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
var d = {
  type: Src_editor_widget_builtIn_types.D,
  category: {
    iconId: "icon-screen",
    blocks: Src_editor_widget_builtIn_types.D
  },
  categoryClass: {
    text: "",
    iconId: "icon-screen",
    blocks: []
  },
  getTemplate: function (e) {
    return ["<block type=\"screen_on_press\" uncache=\"true\"></block>", f, "<block type=\"new_screen_set_background_color\" uncache=\"true\">\n    <value name=\"COLOR\">\n      <shadow type=\"color_picker\"><field name=\"COLOR_PALETTE\">".concat(Module_75.c, "</field></shadow>\n    </value>\n    </block>"), "<block type=\"new_screen_set_background_image\" uncache=\"true\">\n      <value name=\"IMAGE_FILE_ID\">\n        <shadow type=\"image_file_list_dropdown\">\n          <field name=\"IMAGE_FILE_ID\">".concat(h, "</field>\n        </shadow>\n      </value>\n    </block>"), f, "<block type=\"new_screen_get_size\" uncache=\"true\">\n    </block>", "<block type=\"new_screen_get_color\" uncache=\"true\">\n    </block>\n    <block type=\"new_screen_get_background_image\" uncache=\"true\">\n    </block>\n    ", f, "<block type=\"screen_check_if_pressed\" uncache=\"true\">\n    </block>"]
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
      e.insertBlockSnippetGenerator("screen_on_press_positionX", function () {
        return "screenPressPositionX"
      })
      e.insertBlockSnippetGenerator("screen_on_press_positionY", function () {
        return "screenPressPositionY"
      })
      e.insertBlockSnippetGenerator("screen_on_press", function (n, r) {
        var /* [auto-meaningful-name] */tNR$block = t(n, r).block
        var i = e.getFieldValue(tNR$block, "PRESS_EVENT") || ""
        var a = e.statementToCode(n, r, "DO")
        var s = e.valueToCode(n, r, "POSITION_X", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "POSITION_Y", e.ORDER_FUNCTION_CALL)
        if (!a) {
          return ""
        }
        var u = ""
        u = "press" === i ? "argsOnScreenPress" : "pressIn" === i ? "argsOnScreenPressIn" : "pressHold" === i ? "argsOnScreenPressHold" : "argsOnScreenPressOut"
        return Module_4.n(u, [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))], a, [s, c])
      })
      e.insertBlockSnippetGenerator("screen_field_color", function (t, n) {
        var r = t.blocks[n]
        return Module_4.o(e.getFieldValue(r, "COLOR_VALUE") || "")
      })
      e.insertBlockSnippetGenerator("screen_set_background_color", function (t, n) {
        var r = e.getFieldValue(t.blocks[n], "SCREEN_ID") || ""
        var o = e.valueToCode(t, n, "COLOR", e.ORDER_FUNCTION_CALL)
        return Module_4.n("setScreenBackgroundColor", [Module_4.o(r), o])
      })
      e.insertBlockSnippetGenerator("screen_check_if_pressed", function (t, n) {
        return Module_4.s("checkIfScreenPressed", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))])
      })
      e.insertBlockSnippetGenerator("screen_set_background_image", function (t, n) {
        var r = e.getFieldValue(t.blocks[n], "SCREEN_ID") || ""
        var o = e.valueToCode(t, n, "IMAGE_FILE_ID", e.ORDER_FUNCTION_CALL)
        return o ? Module_4.n("setScreenBackgroundImageId", [Module_4.o(r), o]) : ""
      })
      e.insertBlockSnippetGenerator("screen_get_color", function (t, n) {
        var r = e.getFieldValue(t.blocks[n], "SCREEN_ID") || ""
        return Module_4.s("getScreenBackgroundColor", [Module_4.o(r)])
      })
      e.insertBlockSnippetGenerator("screen_get_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "SCREEN_ID") || ""
        var i = e.getFieldValue(r, "PROPERTY") || ""
        return Module_4.s("height" === i ? "getScreenHeight" : "getScreenWidth", [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("screen_get_background_image", function (t, n) {
        var r = e.getFieldValue(t.blocks[n], "SCREEN_ID") || ""
        return Module_4.s("getScreenBackgroundImage", [Module_4.o(r)])
      })
      e.insertBlockSnippetGenerator("new_screen_set_background_color", function (n, r) {
        var /* [auto-meaningful-name] */tNR$block = t(n, r).block
        var i = e.getDynamicValue("__CURRENT_SCREEN_ID__")
        var a = e.valueToCode(n, r, "COLOR", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setScreenBackgroundColor", [Module_4.o(i), a]), tNR$block, e)
      })
      e.insertBlockSnippetGenerator("new_screen_set_background_image", function (n, r) {
        var o = e.getDynamicValue("__CURRENT_SCREEN_ID__")
        var /* [auto-meaningful-name] */tNR$block = t(n, r).block
        var a = e.valueToCode(n, r, "IMAGE_FILE_ID", e.ORDER_FUNCTION_CALL)
        return a ? Module_4.l(Module_4.n("setScreenBackgroundImageId", [Module_4.o(o), a]), tNR$block, e) : ""
      })
      e.insertBlockSnippetGenerator("new_screen_get_color", function (t, n) {
        var r = e.getDynamicValue("__CURRENT_SCREEN_ID__")
        return Module_4.s("getScreenBackgroundColor", [Module_4.o(r)])
      })
      e.insertBlockSnippetGenerator("new_screen_get_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getDynamicValue("__CURRENT_SCREEN_ID__") || ""
        var i = e.getFieldValue(r, "PROPERTY") || ""
        return Module_4.s("height" === i ? "getScreenHeight" : "getScreenWidth", [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("new_screen_get_background_image", function (t, n) {
        var r = e.getDynamicValue("__CURRENT_SCREEN_ID__")
        return Module_4.s("getScreenBackgroundImage", [Module_4.o(r)])
      })
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("screen_on_press", {
        type: "screen_on_press",
        message0: "%{BKY_SCREEN_ON_PRESS_MSG0}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), {
            type: "field_coco_dropdown",
            name: "PRESS_EVENT",
            custom: true,
            options: function () {
              return [[t.Msg.PRESS, "press"], [t.Msg.PRESS_IN, "pressIn"], [t.Msg.PRESS_HOLD, "pressHold"], [t.Msg.PRESS_OUT, "pressOut"]]
            }
          }, {
            type: "input_value",
            name: "POSITION_X",
            align: "CENTRE",
            default_shadow: "<shadow type=\"screen_on_press_positionX\" />"
          }, {
            type: "input_value",
            name: "POSITION_Y",
            align: "CENTRE",
            default_shadow: "<shadow type=\"screen_on_press_positionY\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "screen_on_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("screen_on_press_positionX", {
        type: "screen_on_press_positionX",
        message0: "%{BKY_PARAM_POSITION_X}",
        output: "Number",
        required_context: "screen_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("screen_on_press_positionY", {
        type: "screen_on_press_positionY",
        message0: "%{BKY_PARAM_POSITION_Y}",
        output: "Number",
        required_context: "screen_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("screen_set_background_color", {
        type: "screen_set_background_color",
        message0: "%{BKY_SCREEN_UPDATE_BACKGROUND_COLOR}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "SCREEN_ID",
            custom: true,
            advancedOptions: function () {
              return Module_46.c().getScreenList()
            }
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
      e.insertBlockProfile("screen_field_color", {
        type: "screen_field_color",
        message0: "%1",
        args0: [
          {
            type: "field_colour",
            name: "COLOR_VALUE",
            colour: "#ffffff"
          }
        ],
        colour: "#ffffff",
        output: ["Color"]
      })
      e.insertBlockProfile("screen_get_size", {
        type: "screen_get_size",
        message0: "%{BKY_SCREEN_GET_SIZE}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "SCREEN_ID",
            custom: true,
            options: function () {
              return Module_46.c().getScreenList()
            }
          }, {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [
                {
                  type: "basic",
                  text: t.Msg.SCREEN_HEIGHT,
                  value: "height"
                }, {
                  type: "basic",
                  text: t.Msg.SCREEN_WIDTH,
                  value: "width"
                }
              ]
            }
          }
        ],
        output: ["Number"],
        inputsInline: true,
        colour: "%{BKY_APPEARANCE_HUE}"
      })
      e.insertBlockProfile("screen_get_color", {
        type: "screen_get_color",
        message0: "%{BKY_SCREEN_GET_COLOR}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "SCREEN_ID",
            custom: true,
            options: function () {
              return Module_46.c().getScreenList()
            }
          }
        ],
        output: ["String", "Color"],
        inputsInline: true,
        colour: "%{BKY_APPEARANCE_HUE}"
      })
      e.insertBlockProfile("screen_set_background_image", {
        type: "screen_set_background_image",
        message0: "%{BKY_SCREEN_SET_BACKGROUND_IMAGE}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "SCREEN_ID",
            custom: true,
            advancedOptions: function () {
              return Module_46.c().getScreenList()
            }
          }, {
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
      e.insertBlockProfile("screen_get_background_image", {
        type: "screen_get_background_image",
        message0: "%{BKY_SCREEN_GET_BACKGROUND_IMAGE}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "SCREEN_ID",
            custom: true,
            advancedOptions: function () {
              return Module_46.c().getScreenList()
            }
          }
        ],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("new_screen_get_size", {
        type: "new_screen_get_size",
        message0: "%{BKY_NEW_SCREEN_GET_SIZE}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [
                {
                  type: "basic",
                  text: t.Msg.SCREEN_HEIGHT,
                  value: "height"
                }, {
                  type: "basic",
                  text: t.Msg.SCREEN_WIDTH,
                  value: "width"
                }
              ]
            }
          }
        ],
        output: ["Number"],
        inputsInline: true,
        colour: "%{BKY_APPEARANCE_HUE}"
      })
      e.insertBlockProfile("new_screen_get_color", {
        type: "new_screen_get_color",
        message0: "%{BKY_NEW_SCREEN_GET_COLOR}",
        args0: [],
        output: ["String", "Color"],
        inputsInline: true,
        colour: "%{BKY_APPEARANCE_HUE}"
      })
      e.insertBlockProfile("new_screen_set_background_color", {
        type: "new_screen_set_background_color",
        message0: "%{BKY_NEW_SCREEN_UPDATE_BACKGROUND_COLOR}",
        args0: [
          {
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
      e.insertBlockProfile("new_screen_set_background_image", {
        type: "new_screen_set_background_image",
        message0: "%{BKY_NEW_SCREEN_SET_BACKGROUND_IMAGE}",
        args0: [
          {
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
      e.insertBlockProfile("new_screen_get_background_image", {
        type: "new_screen_get_background_image",
        message0: "%{BKY_NEW_SCREEN_GET_BACKGROUND_IMAGE}",
        args0: [],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("screen_check_if_pressed", {
        type: "screen_check_if_pressed",
        message0: "%{BKY_SCREEN_CHECK_IF_PRESSED}",
        args0: [],
        output: "Boolean",
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["screen_get_size", "screen_on_open_get_param", "screen_set_background_color", "screen_get_color", "screen_navigate_to", "screen_navigate_to_by_value", "screen_set_background_image", "screen_get_background_image", "new_screen_navigate_to", "new_screen_navigate_to_by_value", "screen_check_if_pressed", "screen_input"],
    fieldName: "SCREEN_ID"
  },
  topBlocks: ["screen_on_open_get_param", "screen_on_open", "screen_on_press", "app_on_switch_background", "broadcast_on_receive", "widget_event"]
}
export { d }
