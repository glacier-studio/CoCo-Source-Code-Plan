/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-46
 */

"use strict"

import { nf } from "./index__part-44"
import { of } from "./index__part-45"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import * as /* [auto-meaningful-name] */Module_379 from /* 379 */"./379"
import * as /* [auto-meaningful-name] */Module_148 from /* 148 */"./148"
var cf = {
  type: "field_coco_dropdown",
  name: "WIDGET_ID",
  custom: true,
  options: function () {
    return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.C)
  }
}
var lf = {
  type: Src_editor_widget_builtIn_types.C,
  category: {
    iconId: Module_148.a,
    blocks: Src_editor_widget_builtIn_types.C
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"radio_on_select\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"radio_set_headline\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"HEADLINE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"radio_set_option_count\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"COUNT\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>4</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"radio_set_option_content\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n      <value name=\"CONTENT\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"radio_set_option_selected_or_disabled\" uncache=\"true\">\n      <field name=\"STATE\">selected</field>\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"radio_clear_selected\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"radio_set_option_feedback\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"STATE\">correct</field>\n    </block>"), "<block type=\"radio_clear_feedback\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"radio_delete_option\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"radio_push_option\" uncache=\"true\">\n      <value name=\"CONTENT\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n      ".concat(t, "\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.C,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"radio_set_position\" uncache=\"true\">\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"radio_set_visible\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"radio_set_disabled\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"radio_get_selected_option_index\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"radio_get_selected_option_content\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"radio_get_option_content_by_index\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"radio_get_headline\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"widget_get\">\n      <mutation property=\"optionCount\" widget_type=\"".concat(Src_editor_widget_builtIn_types.C, "\"></mutation>\n      <field name=\"WIDGET_ID\">").concat(e, "</field>\n    </block>"), "<block type=\"widget_get\">\n      <mutation property=\"__position\" widget_type=\"".concat(Src_editor_widget_builtIn_types.C, "\"></mutation>\n      <field name=\"WIDGET_ID\">").concat(e, "</field>\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.C,
        widgetId: e
      }), Module_61.d, Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.C,
        widgetId: e
      }), Module_33.sb({
        property: "__disabled",
        widgetType: Src_editor_widget_builtIn_types.C,
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
      e.insertBlockSnippetGenerator("radio_on_select", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        var a = e.valueToCode(n, r, "CONTENT", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(n, r, "DO")
        return s ? Module_4.n("argsOnRadioWidgetSelected", [Module_4.o(tNR$widgetId)], s, [i, a]) : ""
      })
      e.insertBlockSnippetGenerator("radio_on_select_content", function () {
        return "content"
      })
      e.insertBlockSnippetGenerator("radio_on_select_index", function () {
        return "index"
      })
      e.insertBlockSnippetGenerator("radio_set_headline", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.valueToCode(n, r, "HEADLINE", e.ORDER_FUNCTION_CALL)
        return Module_4.n("setRadioWidgetHeadline", [Module_4.o(tNR$widgetId), i])
      })
      e.insertBlockSnippetGenerator("radio_set_option_count", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "COUNT", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setRadioWidgetOptionCount", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("radio_set_option_content", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "CONTENT", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setRadioWidgetOptionContent", [Module_4.o(o$widgetId), s, c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("radio_set_option_selected_or_disabled", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.getFieldValue(o$block, "STATE") || ""
        var c = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setRadioWidgetOptionSelectedOrDisabled", [Module_4.o(o$widgetId), c, Module_4.o(s)]), o$block, e)
      })
      e.insertBlockSnippetGenerator("radio_clear_selected", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.n("clearRadioWidgetSelected", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("radio_set_option_feedback", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.getFieldValue(o$block, "STATE") || ""
        var c = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setRadioWidgetOptionFeedback", [Module_4.o(o$widgetId), c, Module_4.o(s)]), o$block, e)
      })
      e.insertBlockSnippetGenerator("radio_clear_feedback", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.n("clearRadioWidgetFeedback", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("radio_delete_option", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("deleteRadioWidgetOption", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("radio_push_option", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "CONTENT", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("pushOptionToRadioWidget", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("radio_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "POSITION_TYPE") || ""
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var l = "positionX" === s ? "setRadioWidgetPositionX" : "setRadioWidgetPositionY"
        return Module_4.l(Module_4.n(l, [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("radio_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "show" === e.getFieldValue(o$block, "VISIBLE")
        return Module_4.n("setRadioWidgetVisible", [Module_4.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("radio_set_disabled", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "disabled" === e.getFieldValue(o$block, "DISPLAY")
        return Module_4.l(Module_4.n("setRadioWidgetDisabled", [Module_4.o(o$widgetId), s]), o$block, e, false, true)
      })
      e.insertBlockSnippetGenerator("radio_get_selected_option_index", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getRadioWidgetSelectedOptionIndex", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("radio_get_selected_option_content", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        return Module_4.l(Module_4.s("getRadioWidgetSelectedOptionContent", [Module_4.o(o$widgetId)]), o$block, e, false, true)
      })
      e.insertBlockSnippetGenerator("radio_get_option_content_by_index", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.s("getRadioWidgetOptionContentByIndex", [Module_4.o(o$widgetId), s]), o$block, e, false, true)
      })
      e.insertBlockSnippetGenerator("radio_get_headline", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getRadioWidgetHeadline", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("radio_get_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "PROPERTY")) {
          case "optionCount":
            s = "getRadioWidgetOptionCount"
            break
          case "positionX":
            s = "getRadioWidgetPositionX"
            break
          case "positionY":
            s = "getRadioWidgetPositionY"
        }
        return s ? Module_4.s(s, [Module_4.o(o$widgetId)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("radio_on_select", {
        type: "radio_on_select",
        message0: "%{BKY_RADIO_ON_SELECTED}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), Module_6.a({}, cf), {
            type: "input_value",
            name: "INDEX",
            align: "CENTRE",
            check: ["Number"],
            default_shadow: "<shadow type=\"radio_on_select_index\" />"
          }, {
            type: "input_value",
            name: "CONTENT",
            align: "CENTRE",
            default_shadow: "<shadow type=\"radio_on_select_content\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "radio_on_select_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_RADIO_ON_SELECTED_TOOLTIP}"
      })
      e.insertBlockProfile("radio_on_select_index", {
        type: "radio_on_select_index",
        message0: "%{BKY_RADIO_PARAM_SELECTED_INDEX}",
        output: "Number",
        required_context: "radio_on_select_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("radio_on_select_content", {
        type: "radio_on_select_content",
        message0: "%{BKY_RADIO_PARAM_SELECTED_CONTENT}",
        output: "String",
        required_context: "radio_on_select_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("radio_set_headline", {
        type: "radio_set_headline",
        message0: "%{BKY_RADIO_SET_HEADLINE}",
        args0: [
          Module_6.a({}, cf), {
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
      e.insertBlockProfile("radio_set_option_count", {
        type: "radio_set_option_count",
        message0: "%{BKY_RADIO_SET_OPTION_COUNT}",
        args0: [
          Module_6.a({}, cf), {
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
      e.insertBlockProfile("radio_set_option_content", {
        type: "radio_set_option_content",
        message0: "%{BKY_RADIO_SET_OPTION_CONTENT}",
        args0: [
          Module_6.a({}, cf), {
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
      e.insertBlockProfile("radio_set_option_selected_or_disabled", {
        type: "radio_set_option_selected_or_disabled",
        message0: "%{BKY_RADIO_SET_OPTION_SELECTED_OR_DISABLED}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "STATE",
            custom: true,
            options: [[t.Msg.SELECTED, "selected"], [t.Msg.DISABLED, "disabled"]]
          }, Module_6.a({}, cf), {
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
      e.insertBlockProfile("radio_clear_selected", {
        type: "radio_clear_selected",
        message0: "%{BKY_RADIO_CLEAR_SELECTED}",
        args0: [Module_6.a({}, cf)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_RADIO_CLEAR_SELECTED_TOOLTIP}"
      })
      e.insertBlockProfile("radio_set_option_feedback", {
        type: "radio_set_option_feedback",
        message0: "%{BKY_RADIO_SET_OPTION_FEEDBACK}",
        args0: [
          Module_6.a({}, cf), {
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
        tooltip: "%{BKY_RADIO_SET_OPTION_FEEDBACK_TOOLTIP}"
      })
      e.insertBlockProfile("radio_clear_feedback", {
        type: "radio_clear_feedback",
        message0: "%{BKY_RADIO_CLEAR_FEEDBACK}",
        args0: [Module_6.a({}, cf)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_RADIO_CLEAR_FEEDBACK_TOOLTIP}"
      })
      e.insertBlockProfile("radio_delete_option", {
        type: "radio_delete_option",
        message0: "%{BKY_RADIO_DELETE_OPTION}",
        args0: [
          Module_6.a({}, cf), {
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
      e.insertBlockProfile("radio_push_option", {
        type: "radio_push_option",
        message0: "%{BKY_RADIO_PUSH_OPTION}",
        args0: [
          {
            type: "input_value",
            name: "CONTENT",
            check: ["String", "Number", "Boolean", "Array"]
          }, Module_6.a({}, cf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("radio_set_position", {
        type: "radio_set_position",
        message0: "%{BKY_RADIO_SET_WIDGET_POSITION}",
        args0: [
          Module_6.a({}, cf), {
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
      e.insertBlockProfile("radio_set_visible", {
        type: "radio_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: function () {
              return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
            }
          }, Module_6.a({}, cf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("radio_set_disabled", {
        type: "radio_set_disabled",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: function () {
              return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
            }
          }, Module_6.a({}, cf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("radio_get_selected_option_index", {
        type: "radio_get_selected_option_index",
        message0: "%{BKY_RADIO_GET_SELECTED_OPTION_INDEX}",
        args0: [Module_6.a({}, cf)],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_RADIO_GET_SELECTED_OPTION_INDEX_TOOLTIP}"
      })
      e.insertBlockProfile("radio_get_selected_option_content", {
        type: "radio_get_selected_option_content",
        message0: "%{BKY_RADIO_GET_SELECTED_OPTION_CONTENT}",
        args0: [Module_6.a({}, cf)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_RADIO_GET_SELECTED_OPTION_CONTENT_TOOLTIP}"
      })
      e.insertBlockProfile("radio_get_option_content_by_index", {
        type: "radio_get_option_content_by_index",
        message0: "%{BKY_RADIO_GET_OPTION_CONTENT_BY_INDEX}",
        args0: [
          Module_6.a({}, cf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }
        ],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("radio_get_headline", {
        type: "radio_get_headline",
        message0: "%{BKY_RADIO_GET_HEADLINE}",
        args0: [Module_6.a({}, cf)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("radio_get_property", {
        type: "radio_get_property",
        message0: "%{BKY_RADIO_GET_PROPERTY}",
        args0: [
          Module_6.a({}, cf), {
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
    iconId: Module_148.a,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["radio_on_select", "radio_set_headline", "radio_set_option_count", "radio_set_option_content", "radio_set_option_selected_or_disabled", "radio_clear_selected", "radio_set_option_feedback", "radio_clear_feedback", "radio_delete_option", "radio_push_option", "radio_set_visible", "radio_set_disabled", "radio_get_selected_option_index", "radio_set_position", "radio_get_selected_option_content", "radio_get_option_content_by_index", "radio_get_headline", "radio_get_property"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["radio_on_select"]
}
var uf = {
  icon: Module_148.a,
  title: "radio",
  type: Src_editor_widget_builtIn_types.C,
  previewAreaWidgetTitle: "radio",
  component: of,
  editConfig: nf,
  blockConfig: lf,
  isInvisibleWidget: Module_148.e,
  widget: {
    isGlobalWidget: Module_148.d,
    size: {
      width: 280,
      height: 89
    },
    animationRecord: Module_11.a({}, Module_379.a.BUTTON, {
      click: "buttonPress"
    }),
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
      color: Module_148.b,
      sizeType: Src_editor_widget_builtIn_types.s.MEDIUM,
      mode: Module_379.a.DEFAULT
    }
  }
}
var df = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, [
    {
      type: "VisibleSwitch"
    }, {
      type: "DisabledSwitch"
    }
  ], {
    type: "Headline"
  }, {
    type: "Options"
  }, {
    type: "Color"
  }, {
    type: "WidgetOpacity"
  }, {
    type: "CheckboxSizeType"
  }, {
    type: "Coordinate"
  }
]
export { uf }
export { df }
