/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-42
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_95 from /* 95 */"./95"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"./76"
var Wp = {
  type: Src_editor_widget_builtIn_types.w,
  category: {
    iconId: Module_95.b,
    blocks: Src_editor_widget_builtIn_types.w
  },
  categoryClass: {
    text: "",
    iconId: Module_95.b,
    blocks: []
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"input_on_focus\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), "<block type=\"input_on_blur\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), "<block type=\"input_on_change\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), "<sep gap=\"50\"></sep>", Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.w,
        title: "文案",
        lineId: "text"
      }), "<block type=\"input_set_content\" uncache=\"true\">\n    ".concat(t, "\n    <value name=\"CONTENT\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">").concat(Src_shared_packages_Crc_blink_src_index.Blink.Msg.INPUT_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n  </block>"), Module_33.sb({
        property: "contentColor",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e,
        isSetProperty: true
      }), Module_33.sb({
        property: "fontSize",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e,
        isSetProperty: true
      }), Module_33.sb({
        property: "textAlign",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e,
        isSetProperty: true
      }), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.w,
        title: "样式",
        lineId: "style"
      }), Module_33.qb({
        property: "setTemplateMode",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e
      }), Module_33.qb({
        property: "setBackgroundImage",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e
      }), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.w,
        title: "通用",
        lineId: "common"
      }), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e,
        isSetProperty: true
      }), Module_33.sb({
        property: "__size",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"input_set_position\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"POSITION_TYPE\">positionX</field>\n        <value name=\"NUM\">\n          <shadow type=\"math_number\">\n            <field name=\"NUM\" constraints=',,1'>100</field>\n          </shadow>\n        </value>\n    </block>"), "<block type=\"input_set_visible\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"VISIBLE\">show</field>\n      </block>"), "<block type=\"input_set_disabled\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"DISABLE\">disabled</field>\n      </block>"), "<block type=\"input_set_error_message\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"OPEN\">open</field>\n        <value name=\"CONTENT\">\n          <shadow type=\"text\">\n            <field name=\"TEXT\">").concat(Src_shared_packages_Crc_blink_src_index.Blink.Msg.INPUT_DEFAULT_ERROR_MESSAGE, "</field>\n          </shadow>\n        </value>\n      </block>"), "<sep gap=\"50\"></sep>", Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.w,
        title: "返回值",
        lineId: "getter"
      }), "<block type=\"input_get_text\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), Module_33.sb({
        property: "errorMessage",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e
      }), Module_33.sb({
        property: "contentColor",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e
      }), Module_33.sb({
        property: "fontSize",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e
      }), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e
      }), Module_33.sb({
        property: "__size",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e
      }), "<block type=\"input_get_position\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"POSITION_TYPE\">positionX</field>\n      </block>"), "<sep gap=\"50\"></sep>", Module_33.sb({
        property: "hasErrorMessage",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e
      }), Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e
      }), Module_33.sb({
        property: "__disabled",
        widgetType: Src_editor_widget_builtIn_types.w,
        widgetId: e
      })
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      [
        {
          type: "input_on_focus",
          funcName: "onInputFocus"
        }, {
          type: "input_on_blur",
          funcName: "onInputBlur"
        }, {
          type: "input_on_change",
          funcName: "onInputChange"
        }
      ].forEach(function (t) {
        e.insertBlockSnippetGenerator(t.type, function (n, r) {
          var o = n.blocks[r]
          var i = e.getFieldValue(o, "WIDGET_ID") || ""
          var a = e.statementToCode(n, r, "DO")
          return a ? Module_4.n(t.funcName, [Module_4.o(i)], a) : ""
        })
      });
      [
        {
          type: "input_set_mode",
          funcName: "setInputWidgetMode",
          field: "MODE"
        }, {
          type: "input_set_size_type",
          funcName: "setInputWidgetSizeType",
          field: "SIZE_TYPE"
        }
      ].forEach(function (t) {
        e.insertBlockSnippetGenerator(t.type, function (n, r) {
          var o = n.blocks[r]
          var i = e.getFieldValue(o, "WIDGET_ID") || ""
          var a = e.getFieldValue(o, t.field)
          return a ? Module_4.n(t.funcName, [Module_4.o(i), Module_4.o(a)]) : ""
        })
      })
      e.insertBlockSnippetGenerator("input_field_color", function (t, n) {
        var r = t.blocks[n]
        return Module_4.o(e.getFieldValue(r, "COLOR_VALUE") || "")
      })
      e.insertBlockSnippetGenerator("input_set_color", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "COLOR", e.ORDER_FUNCTION_CALL)
        return Module_4.n("setInputWidgetColor", [Module_4.o(o), i])
      })
      e.insertBlockSnippetGenerator("input_set_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "POSITION_TYPE")
        var a = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL) || ""
        return a && i ? Module_4.l(Module_4.n("positionX" === i ? "setInputWidgetPositionX" : "setInputWidgetPositionY", [Module_4.o(o), a]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("input_set_visible", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "show" === e.getFieldValue(r, "VISIBLE")
        return Module_4.n("setInputWidgetVisible", [Module_4.o(o), i])
      })
      e.insertBlockSnippetGenerator("input_set_disabled", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "disabled" === e.getFieldValue(r, "DISABLED")
        return Module_4.l(Module_4.n("setInputWidgetDisabled", [Module_4.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("input_set_error_message", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "open" === e.getFieldValue(r, "ERROR_SWITCH")
        var a = e.valueToCode(t, n, "CONTENT", e.ORDER_FUNCTION_CALL) || ""
        return i ? Module_4.n("setInputWidgetErrorMessage", [Module_4.o(o), a]) : Module_4.n("unsetInputWidgetErrorMessage", [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("input_set_content", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "TYPE")
        var a = e.valueToCode(t, n, "CONTENT", e.ORDER_FUNCTION_CALL) || ""
        return i ? Module_4.n("setWidgetTextAttribute", [Module_4.o(o), Module_4.o(i), a]) : ""
      })
      e.insertBlockSnippetGenerator("input_get_color", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return Module_4.s("getInputWidgetColor", [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("input_get_text", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "TEXT")
        if (!i) {
          return ""
        }
        var a = ""
        a = "inputContent" === i ? "getInputWidgetValue" : "getInputWidgetPlaceholder"
        return Module_4.s(a, [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("input_get_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "POSITION_TYPE")
        if (!i) {
          return ""
        }
        var a = ""
        a = "positionX" === i ? "getInputWidgetPositionX" : "getInputWidgetPositionY"
        return Module_4.s(a, [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("input_assert_state", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return "error" === e.getFieldValue(r, "STATE") ? Module_4.s("checkIfInputWidgetHasErrorMessage", [Module_4.o(o)]) : "(\n          Coco.getInputWidgetDisabled(".concat(Module_4.o(o), ")\n        )")
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType("INPUT_WIDGET")
        }
      }
      function r(e) {
        if (this.source_block) {
          var /* [auto-meaningful-name] */this$source_block = this.source_block
          var r = "open" === e
          var /* [auto-meaningful-name] */this$source_block$inputList = this$source_block.inputList
          var /* [auto-meaningful-name] */this$source_block$inputListThis$source_block$inputList$length1$name = this$source_block$inputList[this$source_block$inputList.length - 1].name
          if (r) {
            this$source_block.append_shadow_input_json("CONTENT", "text", t.Msg.INPUT_DEFAULT_ERROR_MESSAGE).set_check(["String", "Number"])
          } else {
            this$source_block.removeInput(this$source_block$inputListThis$source_block$inputList$length1$name)
          }
        }
      }
      [
        {
          type: "input_on_focus",
          message: "%{BKY_INPUT_ON_FOCUS}"
        }, {
          type: "input_on_blur",
          message: "%{BKY_INPUT_ON_BLUR}"
        }, {
          type: "input_on_change",
          message: "%{BKY_INPUT_ON_CHANGE}"
        }
      ].forEach(function (o) {
        e.insertBlockProfile(o.type, {
          type: o.type,
          message0: o.message,
          args0: [
            Module_4.e("%{BKY_BLOCK_INPUT_ICON}", true), Module_6.a({}, n), {
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
        e.insertBlockProfile("input_set_mode", {
          type: "input_set_mode",
          message0: "%{BKY_INPUT_SET_MODE}",
          args0: [
            Module_6.a({}, n), {
              type: "field_coco_dropdown",
              name: "MODE",
              custom: true,
              options: function () {
                return [[t.Msg.INPUT_OUTLINED_NORMAL, Module_76.c.OUTLINED_NORMAL], [t.Msg.INPUT_CONTAINED_NORMAL, Module_76.c.CONTAINED_NORMAL], [t.Msg.INPUT_CONTAINED_ROUND, Module_76.c.CONTAINED_ROUND], [t.Msg.INPUT_OUTLINED_FLAT, Module_76.c.OUTLINED_FLAT]]
              }
            }
          ],
          previousStatement: true,
          nextStatement: true,
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_set_size_type", {
          type: "input_set_size_type",
          message0: "%{BKY_INPUT_SET_SIZE}",
          args0: [
            Module_6.a({}, n), {
              type: "field_coco_dropdown",
              name: "SIZE_TYPE",
              custom: true,
              options: function () {
                return [[t.Msg.SMALL, Src_editor_widget_builtIn_types.s.SMALL], [t.Msg.MEDIUM, Src_editor_widget_builtIn_types.s.MEDIUM], [t.Msg.LARGE, Src_editor_widget_builtIn_types.s.LARGE]]
              }
            }
          ],
          previousStatement: true,
          nextStatement: true,
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_set_color", {
          type: "input_set_color",
          message0: "%{BKY_INPUT_SET_COLOR}",
          args0: [
            Module_6.a({}, n), {
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
        e.insertBlockProfile("input_field_color", {
          type: "input_field_color",
          message0: "%1",
          args0: [
            {
              type: "field_colour",
              name: "COLOR_VALUE",
              colour: Module_95.e
            }
          ],
          colour: "#ffffff",
          output: ["Color"]
        })
        e.insertBlockProfile("input_set_position", {
          type: "input_set_position",
          message0: "%{BKY_INPUT_SET_POSITION}",
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
        e.insertBlockProfile("input_set_visible", {
          type: "input_set_visible",
          message0: "%1 %2",
          args0: [
            {
              type: "field_coco_dropdown",
              name: "VISIBLE",
              custom: true,
              options: function () {
                return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
              }
            }, Module_6.a({}, n)
          ],
          previousStatement: true,
          nextStatement: true,
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_set_disabled", {
          type: "input_set_disabled",
          message0: "%1 %2",
          args0: [
            {
              type: "field_coco_dropdown",
              name: "DISABLED",
              custom: true,
              options: function () {
                return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
              }
            }, Module_6.a({}, n)
          ],
          previousStatement: true,
          nextStatement: true,
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_set_content", {
          type: "input_set_content",
          message0: "%{BKY_INPUT_SET_INPUT_CONTENT}",
          args0: [
            Module_6.a({}, n), {
              type: "field_coco_dropdown",
              name: "TYPE",
              custom: true,
              options: function () {
                return [[t.Msg.INPUT_CONTENT, "value"], [t.Msg.INPUT_PLACEHOLDER, "placeholder"]]
              },
              optOnchange: function (e) {
                var /* [auto-meaningful-name] */this$source_block = this.source_block
                var r = e || (null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_field_value("TYPE"))
                if (r) {
                  var o = "value" === r ? t.Msg.INPUT_DEFAULT_VALUE : t.Msg.INPUT_DEFAULT_PLACEHOLDER
                  var i = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_shadow_field("CONTENT", "TEXT")
                  if (!(null === i || undefined === i)) {
                    i.set_value(o)
                  }
                }
              }
            }, {
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
        e.insertBlockProfile("input_set_error_message", {
          type: "input_set_error_message",
          message0: "%{BKY_INPUT_ERROR_TIPS}",
          args0: [
            {
              type: "field_coco_dropdown",
              name: "ERROR_SWITCH",
              custom: true,
              options: function () {
                return [[t.Msg.OPEN, "open"], [t.Msg.CLOSE, "close"]]
              },
              optOnchange: r
            }, Module_6.a({}, n)
          ],
          message1: "%1",
          args1: [
            {
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
        e.insertBlockProfile("input_get_color", {
          type: "input_get_color",
          message0: "%{BKY_INPUT_GET_COLOR}",
          args0: [Module_6.a({}, n)],
          output: ["String", "Color"],
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_get_text", {
          type: "input_get_text",
          message0: "%{BKY_INPUT_GET_PROPERTY}",
          args0: [
            Module_6.a({}, n), {
              type: "field_coco_dropdown",
              name: "TEXT",
              custom: true,
              options: function () {
                return [[t.Msg.INPUT_CONTENT, "inputContent"], [t.Msg.INPUT_PLACEHOLDER, "placeholder"]]
              }
            }
          ],
          output: ["String"],
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_get_position", {
          type: "input_get_position",
          message0: "%{BKY_INPUT_GET_PROPERTY}",
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
        e.insertBlockProfile("input_assert_state", {
          type: "input_assert_state",
          message0: "%{BKY_INPUT_ASSERT_STATE}",
          args0: [
            Module_6.a({}, n), {
              type: "field_coco_dropdown",
              name: "STATE",
              custom: true,
              options: function () {
                return [[t.Msg.INPUT_REPORT_ERROR, "error"], [t.Msg.DISABLED, "disabled"]]
              }
            }
          ],
          output: ["Boolean"],
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["input_on_focus", "input_on_blur", "input_on_change", "input_set_mode", "input_set_size_type", "input_set_color", "input_set_position", "input_set_visible", "input_set_disabled", "input_set_error_message", "input_get_color", "input_get_text", "input_get_position", "input_assert_state", "input_set_content"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["input_on_focus", "input_on_blur", "input_on_change"]
}
export { Wp }
