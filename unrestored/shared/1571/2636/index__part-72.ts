/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-72
 */

"use strict"

import { um } from "./index__part-71"
import * as /* [auto-meaningful-name] */Module_234 from /* 234 */"./234"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_551 from /* 551 */"./551/index"
var pm = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  return React.createElement(Module_551.a, Object.assign({}, e, {
    onDatePickerChange: function (e) {
      if (e$onChange) {
        e$onChange("timeStamp", new Date(e).getTime())
      }
    }
  }))
}
var fm = {
  type: Src_editor_widget_builtIn_types.n,
  category: {
    iconId: Module_234.h,
    blocks: Src_editor_widget_builtIn_types.n
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"date_picker_on_select_done\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"date_picker_open_select_dialog\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"date_picker_get_date\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"date_picker_get_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, Module_61.e]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("date_picker_on_select_done", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        var a = e.valueToCode(t, n, "PARAM_DATE", e.ORDER_ATOMIC)
        var s = e.valueToCode(t, n, "PARAM_YEAR", e.ORDER_ATOMIC)
        var c = e.valueToCode(t, n, "PARAM_MONTH", e.ORDER_ATOMIC)
        var l = e.valueToCode(t, n, "PARAM_DAY", e.ORDER_ATOMIC)
        return o && i ? Module_4.n("argsOnDatePickerSelectDone", [Module_4.o(o)], i, [a, s, c, l]) : ""
      })
      e.insertBlockSnippetGenerator("date_picker_on_select_done_date", function () {
        return "date"
      })
      e.insertBlockSnippetGenerator("date_picker_on_select_done_year", function () {
        return "year"
      })
      e.insertBlockSnippetGenerator("date_picker_on_select_done_month", function () {
        return "month"
      })
      e.insertBlockSnippetGenerator("date_picker_on_select_done_day", function () {
        return "day"
      })
      e.insertBlockSnippetGenerator("date_picker_open_select_dialog", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? Module_4.n("openDatePickerDialog", [Module_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("date_picker_get_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        if (!o) {
          return ""
        }
        var i = e.getFieldValue(r, "TYPE")
        return i ? Module_4.s("getDatePickerValue", [Module_4.o(o), Module_4.o(i)]) : ""
      })
      e.insertBlockSnippetGenerator("date_picker_get_date", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? Module_4.s("getDatePickerDate", [Module_4.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.n)
        }
      }
      e.insertBlockProfile("date_picker_on_select_done", {
        type: "date_picker_on_select_done",
        message0: "%{BKY_DATE_PICKER_ON_SELECT_DONE}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), Module_6.a({}, n), {
            type: "input_value",
            name: "PARAM_DATE",
            align: "CENTRE",
            default_shadow: "<shadow type=\"date_picker_on_select_done_date\" />"
          }, {
            type: "input_value",
            name: "PARAM_YEAR",
            align: "CENTRE",
            default_shadow: "<shadow type=\"date_picker_on_select_done_year\" />"
          }, {
            type: "input_value",
            name: "PARAM_MONTH",
            align: "CENTRE",
            default_shadow: "<shadow type=\"date_picker_on_select_done_month\" />"
          }, {
            type: "input_value",
            name: "PARAM_DAY",
            align: "CENTRE",
            default_shadow: "<shadow type=\"date_picker_on_select_done_day\" />"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "date_picker_on_select_done_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("date_picker_on_select_done_date", {
        type: "date_picker_on_select_done_date",
        message0: "%{BKY_DATE_OBJECT}",
        output: ["String"],
        required_context: "date_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("date_picker_on_select_done_year", {
        type: "date_picker_on_select_done_year",
        message0: "%{BKY_YEAR}",
        output: ["Number"],
        required_context: "date_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("date_picker_on_select_done_month", {
        type: "date_picker_on_select_done_month",
        message0: "%{BKY_MONTH}",
        output: ["Number"],
        required_context: "date_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("date_picker_on_select_done_day", {
        type: "date_picker_on_select_done_day",
        message0: "%{BKY_DATE}",
        output: ["Number"],
        required_context: "date_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("date_picker_open_select_dialog", {
        type: "date_picker_open_select_dialog",
        message0: "%{BKY_DATE_PICKER_OPEN_SELECT_DIALOG}",
        args0: [Module_6.a({}, n)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("date_picker_get_value", {
        type: "date_picker_get_value",
        message0: "%1 %{BKY_OF} %2",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "TYPE",
            custom: true,
            options: function () {
              return [[t.Msg.YEAR, "year"], [t.Msg.MONTH, "month"], [t.Msg.DATE, "date"]]
            }
          }
        ],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("date_picker_get_date", {
        type: "date_picker_get_date",
        message0: "%{BKY_DATE_PICKER_GET_DATE}",
        args0: [Module_6.a({}, n)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: Module_234.h,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["date_picker_on_select_done", "date_picker_open_select_dialog", "date_picker_get_value", "date_picker_get_date"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["date_picker_on_select_done"]
}
var hm = {
  icon: Module_234.h,
  title: "DatePickerWidget.widgetName",
  type: Src_editor_widget_builtIn_types.n,
  previewAreaWidgetTitle: "DatePickerWidget.widgetName",
  component: pm,
  editConfig: um,
  blockConfig: fm,
  isInvisibleWidget: Module_234.f,
  widget: {
    isGlobalWidget: Module_234.e,
    size: {
      width: Module_234.g,
      height: Module_234.d
    },
    attributes: {
      timeStamp: 0,
      fontSize: Module_234.c,
      color: Module_234.b,
      backgroundColor: Module_234.a
    }
  }
}
export { hm }
