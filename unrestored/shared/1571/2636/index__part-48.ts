/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-48
 */

"use strict"

import { df } from "./index__part-46"
import { ff } from "./index__part-47"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_200 from /* 200 */"./200"
var mf = {
  type: "field_coco_dropdown",
  name: "WIDGET_ID",
  custom: true,
  options: function () {
    return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.g)
  }
}
var gf = {
  type: Src_editor_widget_builtIn_types.g,
  category: {
    iconId: Module_200.e,
    blocks: Src_editor_widget_builtIn_types.g
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"checkbox_on_select\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"checkbox_on_change\" uncache=\"true\">\n    ".concat(t, "\n  </block>"), Module_61.d, "<block type=\"checkbox_set_headline\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"HEADLINE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), Module_61.d, "<block type=\"checkbox_set_option_count\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"COUNT\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>4</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"checkbox_set_option_content\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n      <value name=\"CONTENT\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"checkbox_set_option_state\" uncache=\"true\">\n      <field name=\"STATE\">selected</field>\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"checkbox_clear_selected\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"checkbox_set_option_feedback\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"STATE\">correct</field>\n    </block>"), "<block type=\"checkbox_clear_feedback\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"checkbox_delete_option\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"checkbox_push_option\" uncache=\"true\">\n      <value name=\"CONTENT\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n      ".concat(t, "\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.g,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"checkbox_set_position\" uncache=\"true\">\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"checkbox_set_visible\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"checkbox_set_disabled\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"checkbox_get_selected_option_index\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"checkbox_get_selected_option_content\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"checkbox_get_option_content_by_index\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"checkbox_get_headline\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"widget_get\">\n      <mutation property=\"optionCount\" widget_type=\"".concat(Src_editor_widget_builtIn_types.g, "\"></mutation>\n      <field name=\"WIDGET_ID\">").concat(e, "</field>\n    </block>"), "<block type=\"widget_get\">\n      <mutation property=\"__position\" widget_type=\"".concat(Src_editor_widget_builtIn_types.g, "\"></mutation>\n      <field name=\"WIDGET_ID\">").concat(e, "</field>\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.g,
        widgetId: e
      }), Module_61.d, Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.g,
        widgetId: e
      }), Module_33.sb({
        property: "__disabled",
        widgetType: Src_editor_widget_builtIn_types.g,
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
      e.insertBlockSnippetGenerator("checkbox_on_select", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        var c = e.getFieldValue(o$block, "TYPE")
        var l = e.valueToCode(n, r, "CONTENT", e.ORDER_FUNCTION_CALL)
        var u = e.statementToCode(n, r, "DO")
        if (!u) {
          return ""
        }
        var d = "selected" === c ? "argsOnCheckboxWidgetSelected" : "argsOnCheckboxWidgetUnselected"
        return Module_4.n(d, [Module_4.o(o$widgetId)], u, [s, l])
      })
      e.insertBlockSnippetGenerator("checkbox_on_select_content", function () {
        return "".concat(Module_4.a, "contentList")
      })
      e.insertBlockSnippetGenerator("checkbox_on_select_index", function () {
        return "".concat(Module_4.a, "indexList")
      })
      e.insertBlockSnippetGenerator("checkbox_on_change", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        var a = e.valueToCode(n, r, "RESULT", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(n, r, "DO")
        return s ? Module_4.n("argsOnCheckboxWidgetChange", [Module_4.o(tNR$widgetId)], s, [i, a]) : ""
      })
      e.insertBlockSnippetGenerator("checkbox_on_change_result", function () {
        return "result"
      })
      e.insertBlockSnippetGenerator("checkbox_on_change_index", function () {
        return "index"
      })
      e.insertBlockSnippetGenerator("checkbox_set_headline", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.valueToCode(n, r, "HEADLINE", e.ORDER_FUNCTION_CALL)
        return Module_4.n("setCheckboxWidgetHeadline", [Module_4.o(tNR$widgetId), i])
      })
      e.insertBlockSnippetGenerator("checkbox_set_option_count", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "COUNT", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setCheckboxWidgetOptionCount", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_set_option_content", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "CONTENT", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setCheckboxWidgetOptionContent", [Module_4.o(o$widgetId), s, c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_set_option_state", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "STATE")) {
          case "selected":
            s = "setCheckboxWidgetOptionSelected"
            break
          case "unselected":
            s = "setCheckboxWidgetOptionUnselected"
            break
          case "disabled":
            s = "setCheckboxWidgetOptionDisabled"
        }
        var c = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n(s, [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_clear_selected", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.n("clearCheckboxWidgetSelected", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("checkbox_set_option_feedback", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.getFieldValue(o$block, "STATE") || ""
        var c = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setCheckboxWidgetOptionFeedback", [Module_4.o(o$widgetId), c, Module_4.o(s)]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_clear_feedback", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.n("clearCheckboxWidgetFeedback", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("checkbox_delete_option", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("deleteCheckboxWidgetOption", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_push_option", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "CONTENT", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("pushOptionToCheckboxWidget", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "POSITION_TYPE") || ""
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var l = "positionX" === s ? "setCheckboxWidgetPositionX" : "setCheckboxWidgetPositionY"
        return Module_4.l(Module_4.n(l, [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "show" === e.getFieldValue(o$block, "VISIBLE")
        return Module_4.n("setCheckboxWidgetVisible", [Module_4.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("checkbox_set_disabled", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "disabled" === e.getFieldValue(o$block, "DISPLAY")
        return Module_4.n("setCheckboxWidgetDisabled", [Module_4.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("checkbox_get_selected_option_index", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getCheckboxWidgetSelectedOptionIndex", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("checkbox_get_selected_option_content", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        return Module_4.l(Module_4.s("getCheckboxWidgetSelectedOptionContent", [Module_4.o(o$widgetId)]), o$block, e, false, true)
      })
      e.insertBlockSnippetGenerator("checkbox_get_option_content_by_index", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.s("getCheckboxWidgetOptionContentByIndex", [Module_4.o(o$widgetId), s]), o$block, e, false, true)
      })
      e.insertBlockSnippetGenerator("checkbox_get_headline", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getCheckboxWidgetHeadline", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("checkbox_get_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "PROPERTY")) {
          case "optionCount":
            s = "getCheckboxWidgetOptionCount"
            break
          case "positionX":
            s = "getCheckboxWidgetPositionX"
            break
          case "positionY":
            s = "getCheckboxWidgetPositionY"
        }
        return s ? Module_4.s(s, [Module_4.o(o$widgetId)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("checkbox_on_select", {
        type: "checkbox_on_select",
        message0: "%{BKY_CHECKBOX_ON_SELECTED}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), Module_6.a({}, mf), {
            type: "field_coco_dropdown",
            name: "TYPE",
            custom: true,
            options: [[t.Msg.SELECTED, "selected"], [t.Msg.UNSELECTED, "unselected"]]
          }, {
            type: "input_value",
            name: "INDEX",
            align: "CENTRE",
            default_shadow: "<shadow type=\"checkbox_on_select_index\" />"
          }, {
            type: "input_value",
            name: "CONTENT",
            align: "CENTRE",
            default_shadow: "<shadow type=\"checkbox_on_select_content\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "checkbox_on_select_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_ON_SELECTED_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_on_select_index", {
        type: "checkbox_on_select_index",
        message0: "%{BKY_CHECKBOX_PARAM_SELECTED_INDEX_LIST}",
        output: "Array",
        required_context: "checkbox_on_select_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("checkbox_on_select_content", {
        type: "checkbox_on_select_content",
        message0: "%{BKY_CHECKBOX_PARAM_SELECTED_CONTENT_LIST}",
        output: "Array",
        required_context: "checkbox_on_select_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("checkbox_on_change", {
        type: "checkbox_on_change",
        message0: "%{BKY_CHECKBOX_ON_CHANGE}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), Module_6.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            align: "CENTRE",
            default_shadow: "<shadow type=\"checkbox_on_change_index\" />"
          }, {
            type: "input_value",
            name: "RESULT",
            align: "CENTRE",
            check: "Boolean",
            default_shadow: "<shadow type=\"checkbox_on_change_result\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "checkbox_on_change_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_ON_CHANGE_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_on_change_index", {
        type: "checkbox_on_change_index",
        message0: "%{BKY_CHECKBOX_PARAM_SELECTED_INDEX}",
        output: "Number",
        required_context: "checkbox_on_change_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("checkbox_on_change_result", {
        type: "checkbox_on_change_result",
        message0: "%{BKY_CHECKBOX_PARAM_SELECTED_RESULT}",
        output: "Boolean",
        required_context: "checkbox_on_change_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("checkbox_set_headline", {
        type: "checkbox_set_headline",
        message0: "%{BKY_CHECKBOX_SET_HEADLINE}",
        args0: [
          Module_6.a({}, mf), {
            type: "input_value",
            name: "HEADLINE",
            align: "CENTRE",
            check: ["String", "Array", "Boolean", "Number", "Object"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_set_option_count", {
        type: "checkbox_set_option_count",
        message0: "%{BKY_CHECKBOX_SET_OPTION_COUNT}",
        args0: [
          Module_6.a({}, mf), {
            type: "input_value",
            name: "COUNT",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_set_option_content", {
        type: "checkbox_set_option_content",
        message0: "%{BKY_CHECKBOX_SET_OPTION_CONTENT}",
        args0: [
          Module_6.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
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
      e.insertBlockProfile("checkbox_set_option_state", {
        type: "checkbox_set_option_state",
        message0: "%{BKY_CHECKBOX_SET_OPTION_STATE}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "STATE",
            custom: true,
            options: [[t.Msg.SELECTED, "selected"], [t.Msg.UNSELECTED, "unselected"], [t.Msg.DISABLED, "disabled"]]
          }, Module_6.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_clear_selected", {
        type: "checkbox_clear_selected",
        message0: "%{BKY_CHECKBOX_CLEAR_SELECTED}",
        args0: [Module_6.a({}, mf)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_CLEAR_SELECTED_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_set_option_feedback", {
        type: "checkbox_set_option_feedback",
        message0: "%{BKY_CHECKBOX_SET_OPTION_FEEDBACK}",
        args0: [
          Module_6.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }, {
            type: "field_coco_dropdown",
            name: "STATE",
            custom: true,
            options: [[t.Msg.CORRECT, "correct"], [t.Msg.INCORRECT, "incorrect"]]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_SET_OPTION_FEEDBACK_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_clear_feedback", {
        type: "checkbox_clear_feedback",
        message0: "%{BKY_CHECKBOX_CLEAR_FEEDBACK}",
        args0: [Module_6.a({}, mf)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_CLEAR_FEEDBACK_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_delete_option", {
        type: "checkbox_delete_option",
        message0: "%{BKY_CHECKBOX_DELETE_OPTION}",
        args0: [
          Module_6.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_push_option", {
        type: "checkbox_push_option",
        message0: "%{BKY_CHECKBOX_PUSH_OPTION}",
        args0: [
          {
            type: "input_value",
            name: "CONTENT",
            check: ["String", "Number", "Boolean", "Array"]
          }, Module_6.a({}, mf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_set_position", {
        type: "checkbox_set_position",
        message0: "%{BKY_CHECKBOX_SET_WIDGET_POSITION}",
        args0: [
          Module_6.a({}, mf), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: function () {
              return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
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
      e.insertBlockProfile("checkbox_set_visible", {
        type: "checkbox_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: function () {
              return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
            }
          }, Module_6.a({}, mf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_set_disabled", {
        type: "checkbox_set_disabled",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: function () {
              return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
            }
          }, Module_6.a({}, mf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_get_selected_option_index", {
        type: "checkbox_get_selected_option_index",
        message0: "%{BKY_CHECKBOX_GET_SELECTED_OPTION_INDEX}",
        args0: [Module_6.a({}, mf)],
        output: ["Array"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_GET_SELECTED_OPTION_INDEX_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_get_selected_option_content", {
        type: "checkbox_get_selected_option_content",
        message0: "%{BKY_CHECKBOX_GET_SELECTED_OPTION_CONTENT}",
        args0: [Module_6.a({}, mf)],
        output: ["Array"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_GET_SELECTED_OPTION_CONTENT_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_get_option_content_by_index", {
        type: "checkbox_get_option_content_by_index",
        message0: "%{BKY_CHECKBOX_GET_OPTION_CONTENT_BY_INDEX}",
        args0: [
          Module_6.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }
        ],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_get_headline", {
        type: "checkbox_get_headline",
        message0: "%{BKY_CHECKBOX_GET_HEADLINE}",
        args0: [Module_6.a({}, mf)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_get_property", {
        type: "checkbox_get_property",
        message0: "%{BKY_CHECKBOX_GET_PROPERTY}",
        args0: [
          Module_6.a({}, mf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.OPTION_COUNT, "optionCount"], [t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
            }
          }
        ],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: Module_200.e,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["checkbox_on_select", "checkbox_on_change", "checkbox_set_headline", "checkbox_set_option_count", "checkbox_set_option_content", "checkbox_set_option_state", "checkbox_clear_selected", "checkbox_set_option_feedback", "checkbox_clear_feedback", "checkbox_delete_option", "checkbox_push_option", "checkbox_set_visible", "checkbox_set_disabled", "checkbox_get_selected_option_index", "checkbox_set_position", "checkbox_get_selected_option_content", "checkbox_get_option_content_by_index", "checkbox_get_headline", "checkbox_get_property"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["checkbox_on_select", "checkbox_on_change"]
}
var _f = {
  icon: Module_200.e,
  title: "checkbox",
  type: Src_editor_widget_builtIn_types.g,
  previewAreaWidgetTitle: "checkbox",
  component: ff,
  editConfig: df,
  blockConfig: gf,
  isInvisibleWidget: Module_200.c,
  widget: {
    isGlobalWidget: Module_200.b,
    size: {
      width: 280,
      height: 119
    },
    attributes: {
      disabled: false,
      sizeAdaptive: Src_editor_widget_builtIn_types.q.AUTO_HEIGHT,
      headlineVisible: true,
      options: [
        {
          content: "%{COCO_defaultOption1}",
          state: "none"
        }, {
          content: "%{COCO_defaultOption2}",
          state: "none"
        }
      ],
      headline: "%{COCO_defaultHeadlineContext}",
      color: Module_200.f,
      sizeType: Src_editor_widget_builtIn_types.s.MEDIUM
    }
  }
}
export { _f }
