/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-81
 */

"use strict"

import { Yh } from "./index__part-68"
import { Ag } from "./index__part-79"
import { l_ } from "./index__part-80"
var u_
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_263 from /* 263 */"./263"
!function (e) {
  e[e.SUCCESS = 1] = "SUCCESS"
  e[e.FAILED = 2] = "FAILED"
}(u_ || (u_ = {}))
var p_ = {
  failedStatement_: 0,
  successStatement_: 0,
  successConnection: null,
  failedConnection: null,
  addMutation: function (e) {
    var t = false
    var n = e
    if (!n) {
      if (this.successStatement_) {
        if (!this.failedStatement_) {
          n = u_.FAILED
        }
      } else {
        n = u_.SUCCESS
      }
    }
    if (n === u_.SUCCESS) {
      t = true
      this.successStatement_ = 1
      n = u_.SUCCESS
    } else {
      if (n === u_.FAILED) {
        t = true
        this.failedStatement_ = 1
        n = u_.FAILED
      }
    }
    if (t && (this.updateShape_(), Src_shared_packages_Crc_blink_src_index.Blink.events.is_enabled())) {
      var r = Module_4.c("mutation", {
        block: this,
        old_value: undefined,
        new_value: n
      })
      Src_shared_packages_Crc_blink_src_index.Blink.events.fire(r)
    }
  },
  removeMutation: function (e) {
    var t = false
    var n = e || u_.SUCCESS
    if (n === u_.FAILED) {
      this.failedStatement_ = 0
      t = true
    } else {
      if (n === u_.SUCCESS) {
        this.successStatement_ = 0
        t = true
      }
    }
    if (t && (this.updateShape_(), Src_shared_packages_Crc_blink_src_index.Blink.events.is_enabled())) {
      var r = Module_4.c("mutation", {
        block: this,
        old_value: n,
        new_value: undefined
      })
      Src_shared_packages_Crc_blink_src_index.Blink.events.fire(r)
    }
  },
  updateShape_: function () {
    var e
    var /* [auto-meaningful-name] */e$connection
    var n
    var /* [auto-meaningful-name] */n$connection
    var o
    var i
    var a
    var s
    var c
    var l = this
    Src_shared_packages_Crc_blink_src_index.Blink.events.disable()
    if (this.get_input("ERROR_MSG")) {
      this.remove_input("ERROR_MSG")
    }
    if (this.get_input("FAILED_TEXT")) {
      this.remove_input("FAILED_TEXT")
    }
    if (this.get_input("FAILED_MUTATION_BTN")) {
      this.remove_input("FAILED_MUTATION_BTN")
    }
    this.successInputList.forEach(function (e) {
      var /* [auto-meaningful-name] */e$inputName = e.inputName
      if (l.get_input(e$inputName)) {
        l.remove_input(e$inputName)
      }
    })
    Src_shared_packages_Crc_blink_src_index.Blink.events.enable()
    if (this.get_input("ERROR")) {
      this.failedConnection = null === (e = this.get_input("ERROR")) || undefined === e || null === (e$connection = e.connection) || undefined === e$connection ? undefined : e$connection.target_connection
      if (this.failedStatement_) {
        Src_shared_packages_Crc_blink_src_index.Blink.events.disable()
        this.remove_input("ERROR")
        Src_shared_packages_Crc_blink_src_index.Blink.events.enable()
      } else {
        this.remove_input("ERROR")
      }
    } else {
      this.failedConnection = null
    }
    if (this.get_input("SUCCESS")) {
      this.successConnection = null === (n = this.get_input("SUCCESS")) || undefined === n || null === (n$connection = n.connection) || undefined === n$connection ? undefined : n$connection.target_connection
      if (this.successStatement_) {
        Src_shared_packages_Crc_blink_src_index.Blink.events.disable()
        this.remove_input("SUCCESS")
        Src_shared_packages_Crc_blink_src_index.Blink.events.enable()
      } else {
        this.remove_input("SUCCESS")
      }
    } else {
      this.successConnection = null
    }
    Src_shared_packages_Crc_blink_src_index.Blink.events.disable()
    if (this.get_input("SUCCESS_TEXT")) {
      this.remove_input("SUCCESS_TEXT")
    }
    if (this.get_input("SUCCESS_MUTATION_BTN")) {
      this.remove_input("SUCCESS_MUTATION_BTN")
    }
    this.append_dummy_input("SUCCESS_MUTATION_BTN")
    if (this.successStatement_) {
      this.append_dummy_input("SUCCESS_TEXT", "SUCCESS_MUTATION_BTN").append_field(Src_shared_packages_Crc_blink_src_index.Blink.Msg.ROOM_SUCCESS_TEXT)
      this.successInputList.forEach(function (e) {
        var /* [auto-meaningful-name] */e$inputName = e.inputName
        var /* [auto-meaningful-name] */e$default_shadow = e.default_shadow
        l.append_shadow_input(e$inputName, e$default_shadow, "SUCCESS_MUTATION_BTN")
      })
      var /* [auto-meaningful-name] */d$connection
      var d = this.append_statement_input("SUCCESS", undefined, "".concat("CONTEXT_CLOUD_TABLE_SUCCESS_DO", "_").concat(this.successDO))
      if (this.successConnection) {
        if (!(null === (d$connection = d.connection) || undefined === d$connection)) {
          d$connection.connect(this.successConnection)
        }
      }
    }
    if (this.failedStatement_) {
      if (this.get_input("FAILED_MUTATION_BTN")) {
        this.remove_input("FAILED_MUTATION_BTN")
      }
      this.append_dummy_input("FAILED_MUTATION_BTN")
      this.append_dummy_input("FAILED_TEXT", "FAILED_MUTATION_BTN").append_field(Src_shared_packages_Crc_blink_src_index.Blink.Msg.CLOUT_TABLE_FAILED_TEXT)
      this.append_shadow_input("ERROR_MSG", "<shadow type=\"cloudTable_fail_result\"/>", "FAILED_MUTATION_BTN")
      var /* [auto-meaningful-name] */f$connection
      var f = this.append_statement_input("ERROR", undefined, "CONTEXT_CLOUD_TABLE_ERROR_DO")
      if (this.failedConnection) {
        if (!(null === (f$connection = f.connection) || undefined === f$connection)) {
          f$connection.connect(this.failedConnection)
        }
      }
    }
    if (this.successStatement_) {
      if (!(null === (o = this.get_input("SUCCESS_MUTATION_BTN")) || undefined === o)) {
        o.append_field(Module_4.q(u_.SUCCESS), "mutation_remove_button")
      }
    }
    if (this.failedStatement_) {
      if (!(null === (i = this.get_input("FAILED_MUTATION_BTN")) || undefined === i)) {
        i.append_field(Module_4.q(u_.FAILED), "mutation_remove_button")
      }
    }
    if (!this.successStatement_) {
      if (this.failedStatement_) {
        if (!(null === (a = this.get_input("FAILED_MUTATION_BTN")) || undefined === a)) {
          a.append_field(Module_4.p(), "mutation_add_button")
        }
      } else {
        if (!(null === (s = this.get_input("SUCCESS_MUTATION_BTN")) || undefined === s)) {
          s.append_field(Module_4.p(), "mutation_add_button")
        }
      }
    }
    if (!this.failedStatement_) {
      if (this.successStatement_) {
        if (!(null === (c = this.get_input("SUCCESS_MUTATION_BTN")) || undefined === c)) {
          c.append_field(Module_4.p(), "")
        }
      }
    }
    Src_shared_packages_Crc_blink_src_index.Blink.events.enable()
    this.render()
  },
  domToMutation: function (e) {
    this.successStatement_ = parseInt(e.getAttribute("success_statement") || "0")
    this.failedStatement_ = parseInt(e.getAttribute("failed_statement") || "0")
    this.updateShape_()
  },
  mutationToDom: function () {
    var e = document.createElement("mutation")
    e.setAttribute("failed_statement", String(this.failedStatement_))
    e.setAttribute("success_statement", String(this.successStatement_))
    return e
  }
}
var f_ = Object.assign({}, p_, {
  successInputList: [],
  successDO: "NEXT"
})
var h_ = Object.assign({}, p_, {
  successInputList: [
    {
      inputName: "CLOUD_TABLE_QUERY_BY_COLUMN_LIST_RESULT",
      default_shadow: "<shadow type=\"cloudTable_query_by_column_list_result\">\n        </shadow>"
    }
  ],
  successDO: "QUERY_BY_COLUMN"
})
var m_ = Object.assign({}, p_, {
  successInputList: [
    {
      inputName: "CLOUD_TABLE_QUERY_BY_COUNT_RESULT",
      default_shadow: "<shadow type=\"cloudTable_query_by_count_result\">\n        </shadow>"
    }
  ],
  successDO: "QUERY_BY_COUNT"
})
var g_ = {
  type: Src_editor_widget_builtIn_types.k,
  category: {
    iconId: "icon-widget-cloud-table",
    blocks: Src_editor_widget_builtIn_types.k
  },
  getTemplate: function (e) {
    var t
    var n = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    var r = Module_46.c().getCloudTableColumnList(e)
    var o = null === (t = r[1]) || undefined === t ? undefined : t.value
    if (undefined === o || Object.keys(Ag).includes(o)) {
      o = r[0].value
    }
    var i = "<field name=\"COLUMNS\">".concat(o, "</field>")
    return [
      "<block type=\"cloudTable_on_error\" uncache=\"true\">".concat(n, "</block>"), Module_61.d, Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.k,
        title: "修改",
        lineId: "modify"
      }), "<block type=\"cloudTable_insert\" uncache=\"true\">\n      <value name=\"INSERT_ROW\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\" >1,2,3</field>\n        </shadow>\n      </value>\n      ".concat(n, "\n    </block>"), "<block type=\"cloudTable_delete\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"INPUT_COLUMN\">\n        <shadow type=\"cloudTable_all_column_dropdown\">").concat(i, "</shadow>\n      </value>\n      <value name=\"COLUMN_VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">123</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"cloudTable_update\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"INPUT_COLUMN\">\n        <shadow type=\"cloudTable_all_column_dropdown\">").concat(i, "</shadow>\n      </value>\n      <value name=\"COLUMN_VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">123</field>\n        </shadow>\n      </value>\n      <value name=\"UPDATE_COLUMN\">\n        <shadow type=\"cloudTable_all_column_dropdown\">").concat(i, "</shadow>\n      </value>\n      <value name=\"UPDATE_COLUMN_VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">456</field>\n        </shadow>\n      </value>\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.k,
        title: "查询",
        lineId: "query"
      }), "<block type=\"cloudTable_query_by_column\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"INPUT_COLUMN\">\n        <shadow type=\"cloudTable_all_column_dropdown\">").concat(i, "</shadow>\n      </value>\n      <value name=\"COLUMN_VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">123</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"cloudTable_query_by_count\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.k,
        title: "清空",
        lineId: "clear"
      }), "<block type=\"cloudTable_clear_all\" uncache=\"true\">\n      ".concat(n, "\n    </block>")
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("cloudTable_all_column_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "COLUMNS") || ""
        return Module_4.o(o)
      })
      e.insertBlockSnippetGenerator("cloudTable_fail_result", function () {
        return "cloudTableFailResult"
      })
      e.insertBlockSnippetGenerator("cloudTable_query_by_column_list_result", function () {
        return "cloudTableQueryByColumnListResult"
      })
      e.insertBlockSnippetGenerator("cloudTable_query_by_column_line_number_result", function () {
        return "cloudTableQueryByColumnLineNumberResult"
      })
      e.insertBlockSnippetGenerator("cloudTable_query_by_column_result", function () {
        return "cloudTableQueryByColumnResult"
      })
      e.insertBlockSnippetGenerator("cloudTable_query_by_count_result", function () {
        return "cloudTableQueryByCountResult"
      })
      e.insertBlockSnippetGenerator("cloudTable_error_name", function () {
        return "cloudTableErrorName"
      })
      e.insertBlockSnippetGenerator("cloudTable_error_type", function () {
        return "cloudTableErrorType"
      })
      e.insertBlockSnippetGenerator("cloudTable_error_info", function () {
        return "cloudTableErrorInfo"
      })
      e.insertBlockSnippetGenerator("cloudTable_on_error", function (t, n) {
        var r = t.blocks[n]
        var o = e.valueToCode(t, n, "CLOUD_TABLE_ERROR_INFO", e.ORDER_FUNCTION_CALL)
        var i = e.statementToCode(t, n, "DO")
        var a = e.getFieldValue(r, "EVENT")
        return Module_4.n("onCloudTableError", [JSON.stringify(a), Module_4.k([o], i)])
      })
      e.insertBlockSnippetGenerator("cloudTable_insert", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "INSERT_ROW", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "SUCCESS")
        var s = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var c = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudTableInsertRow", [Module_4.o(o), i, Module_4.k([], a), Module_4.k([s], c)]), r, e, true)
      })
      e.insertBlockSnippetGenerator("cloudTable_delete", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "INPUT_COLUMN", e.ORDER_FUNCTION_CALL)
        var a = e.getFieldValue(r, "OPERATOR") || ""
        var s = e.valueToCode(t, n, "COLUMN_VALUE", e.ORDER_FUNCTION_CALL)
        var c = e.statementToCode(t, n, "SUCCESS")
        var l = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var u = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudTableDeleteRows", [Module_4.o(o), i, "'".concat(a, "'"), s, Module_4.k([], c), Module_4.k([l], u)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("cloudTable_update", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "INPUT_COLUMN", e.ORDER_FUNCTION_CALL) || ""
        var a = e.getFieldValue(r, "OPERATOR") || ""
        var s = e.valueToCode(t, n, "COLUMN_VALUE", e.ORDER_FUNCTION_CALL) || ""
        var c = e.valueToCode(t, n, "UPDATE_COLUMN", e.ORDER_FUNCTION_CALL) || ""
        var l = e.valueToCode(t, n, "UPDATE_COLUMN_VALUE", e.ORDER_FUNCTION_CALL) || ""
        var u = e.statementToCode(t, n, "SUCCESS")
        var d = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var p = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudTableUpdate", [Module_4.o(o), i, "'".concat(a, "'"), s, c, l, Module_4.k([], u), Module_4.k([d], p)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("cloudTable_query_by_column", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "INPUT_COLUMN", e.ORDER_FUNCTION_CALL) || ""
        var a = e.getFieldValue(r, "OPERATOR") || ""
        var s = e.valueToCode(t, n, "COLUMN_VALUE", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(t, n, "CLOUD_TABLE_QUERY_BY_COLUMN_LIST_RESULT", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(t, n, "CLOUD_TABLE_QUERY_BY_COLUMN_LINE_NUMBER_RESULT", e.ORDER_FUNCTION_CALL)
        var u = e.statementToCode(t, n, "SUCCESS")
        var d = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var p = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudTableQuery", [Module_4.o(o), i, "'".concat(a, "'"), s, Module_4.k([c, l], u), Module_4.k([d], p)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("cloudTable_query_by_count", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "CLOUD_TABLE_QUERY_BY_COUNT_RESULT", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "SUCCESS")
        var s = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var c = e.statementToCode(t, n, "ERROR")
        var l = e.getFieldValue(r, "OPTIONS") || ""
        return Module_4.l(Module_4.j("cloudTableQueryByCount", [Module_4.o(o), "'".concat(l, "'"), Module_4.k([i], a), Module_4.k([s], c)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("cloudTable_clear_all", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "CLOUD_TABLE_CLEAR_ALL_RESULT", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "SUCCESS")
        var s = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var c = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudTableClearAll", [Module_4.o(o), Module_4.k([i], a), Module_4.k([s], c)]), t.blocks[n], e, true)
      })
    },
    setBlockGroupProfile: function (e, t) {
      t.extensions.register_mutator("cloudTable_default_toggle_statement", f_)
      t.extensions.register_mutator("cloudTable_query_by_column_toggle_statement", h_)
      t.extensions.register_mutator("cloudTable_query_by_count_toggle_statement", m_)
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.k)
        }
      }
      e.insertBlockProfile("cloudTable_all_column_dropdown", {
        type: "cloudTable_all_column_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "COLUMNS",
            custom: true,
            advancedOptions: function () {
              var /* [auto-meaningful-name] */this$source_block
              var /* [auto-meaningful-name] */this$source_block$parent_block
              var n = (null === (this$source_block = this.source_block) || undefined === this$source_block || null === (this$source_block$parent_block = this$source_block.parent_block) || undefined === this$source_block$parent_block ? undefined : this$source_block$parent_block.get_field_value("WIDGET_ID")) || undefined
              return Module_46.c().getCloudTableColumnList(n, this)
            }
          }
        ],
        output: ["String", "Number"]
      })
      e.insertBlockProfile("cloudTable_fail_result", {
        type: "cloudTable_fail_result",
        message0: "%{BKY_CLOUD_TABLE_FAIL_RESULT}",
        output: "String",
        required_context: "".concat("CONTEXT_CLOUD_TABLE_ERROR_DO"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudTable_query_by_column_list_result", {
        type: "cloudTable_query_by_column_list_result",
        message0: "%{BKY_CLOUD_TABLE_QUERY_BY_COLUMN_LIST_RESULT}",
        args0: [Module_4.d("%{BKY_BLOCK_LIST_ICON}")],
        output: "Array",
        required_context: "".concat("CONTEXT_CLOUD_TABLE_SUCCESS_DO", "_QUERY_BY_COLUMN"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudTable_query_by_column_line_number_result", {
        type: "cloudTable_query_by_column_line_number_result",
        message0: "%{BKY_CLOUD_TABLE_QUERY_BY_COLUMN_LINE_NUMBER_RESULT}",
        args0: [Module_4.d("%{BKY_BLOCK_LIST_ICON}")],
        output: "Array",
        required_context: "".concat("CONTEXT_CLOUD_TABLE_SUCCESS_DO", "_QUERY_BY_COLUMN"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudTable_query_by_count_result", {
        type: "cloudTable_query_by_count_result",
        message0: "%{BKY_CLOUD_TABLE_QUERY_BY_COUNT_RESULT}",
        output: "Array",
        required_context: "".concat("CONTEXT_CLOUD_TABLE_SUCCESS_DO", "_QUERY_BY_COUNT"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudTable_error_name", {
        type: "cloudTable_error_name",
        message0: "%{BKY_CLOUD_TABLE_ERROR_NAME}",
        output: "String",
        required_context: "CONTEXT_CLOUD_TABLE_ERROR_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudTable_error_type", {
        type: "cloudTable_error_type",
        message0: "%{BKY_CLOUD_TABLE_ERROR_TYPE}",
        output: "String",
        required_context: "CONTEXT_CLOUD_TABLE_ERROR_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudTable_error_info", {
        type: "cloudTable_error_info",
        message0: "%{BKY_CLOUD_TABLE_ERROR_INFO}",
        output: "String",
        required_context: "cloud_space_table_on_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudTable_on_error", {
        type: "cloudTable_on_error",
        message0: "%{BKY_CLOUD_TABLE_ERROR}",
        args0: [
          Module_4.e("%{BKY_BLOCK_CLOUD_TABLE_ICON}", true), Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "EVENT",
            custom: true,
            options: [["%{BKY_CLOUD_TABLE_EVENT_ADD}", Module_263.a.ADD], ["%{BKY_CLOUD_TABLE_EVENT_DELETE}", Module_263.a.DELETE], ["%{BKY_CLOUD_TABLE_EVENT_SETTER}", Module_263.a.SETTER], ["%{BKY_CLOUD_TABLE_EVENT_QUERY}", Module_263.a.QUERY], ["%{BKY_CLOUD_TABLE_EVENT_CLEAR}", Module_263.a.CLEAR]]
          }, {
            type: "input_value",
            name: "CLOUD_TABLE_ERROR_INFO",
            default_shadow: "<shadow type=\"cloudTable_error_info\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "cloud_space_table_on_error_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CLOUD_TABLE_ERROR_TOOLTIP}"
      })
      e.insertBlockProfile("cloudTable_insert", {
        type: "cloudTable_insert",
        message0: "%{BKY_CLOUD_TABLE_INSERT}",
        args0: [
          {
            type: "input_value",
            name: "INSERT_ROW",
            check: ["String", "Array", "Number"]
          }, Module_6.a({}, n), {
            type: "input_dummy",
            name: "DUMMY"
          }, {
            type: "mutation_add_button",
            name: "mutation_add_button"
          }, {
            type: "input_dummy",
            name: "SUCCESS_MUTATION_BTN"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true,
        mutator: "cloudTable_default_toggle_statement",
        extensions: ["UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE"],
        tooltip: "%{BKY_CLOUD_TABLE_INSERT_TOOLTIP}"
      })
      e.insertBlockProfile("cloudTable_delete", {
        type: "cloudTable_delete",
        message0: "%{BKY_CLOUD_TABLE_DELETE}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "INPUT_COLUMN",
            check: ["String", "Number"]
          }, {
            type: "field_coco_dropdown",
            name: "OPERATOR",
            custom: true,
            options: function () {
              return [["=", "EQ"], ["≠", "NE"]]
            }
          }, {
            type: "input_value",
            name: "COLUMN_VALUE",
            check: ["String", "Number", "Boolean"]
          }, {
            type: "input_dummy",
            name: "DUMMY"
          }, {
            type: "mutation_add_button",
            name: "mutation_add_button"
          }, {
            type: "input_dummy",
            name: "SUCCESS_MUTATION_BTN"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true,
        mutator: "cloudTable_default_toggle_statement",
        extensions: ["UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE"],
        tooltip: "%{BKY_CLOUD_TABLE_DELETE_TOOLTIP}"
      })
      e.insertBlockProfile("cloudTable_update", {
        type: "cloudTable_update",
        message0: "%{BKY_CLOUD_TABLE_UPDATE}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "INPUT_COLUMN",
            check: ["String", "Number"]
          }, {
            type: "field_coco_dropdown",
            name: "OPERATOR",
            custom: true,
            options: function () {
              return [["=", "EQ"], ["≠", "NE"]]
            }
          }, {
            type: "input_value",
            name: "COLUMN_VALUE",
            check: ["String", "Number", "Boolean"]
          }, {
            type: "input_value",
            name: "UPDATE_COLUMN",
            check: ["String", "Number"]
          }, {
            type: "input_value",
            name: "UPDATE_COLUMN_VALUE",
            check: ["String", "Number", "Boolean"]
          }, {
            type: "mutation_add_button",
            name: "mutation_add_button"
          }, {
            type: "input_dummy",
            name: "SUCCESS_MUTATION_BTN"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true,
        mutator: "cloudTable_default_toggle_statement",
        extensions: ["UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE"],
        tooltip: "%{BKY_CLOUD_TABLE_UPDATE_TOOLTIP}"
      })
      e.insertBlockProfile("cloudTable_query_by_column", {
        type: "cloudTable_query_by_column",
        message0: "%{BKY_CLOUD_TABLE_QUERY_BY_COLUMN}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "INPUT_COLUMN",
            check: ["String", "Number"]
          }, {
            type: "field_coco_dropdown",
            name: "OPERATOR",
            custom: true,
            options: function () {
              return [["=", "EQ"], ["≠", "NE"]]
            }
          }, {
            type: "input_value",
            name: "COLUMN_VALUE",
            check: ["String", "Number", "Boolean"]
          }, {
            type: "input_dummy",
            name: "DUMMY"
          }, {
            type: "mutation_add_button",
            name: "mutation_add_button"
          }, {
            type: "input_dummy",
            name: "SUCCESS_MUTATION_BTN"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true,
        mutator: "cloudTable_query_by_column_toggle_statement",
        extensions: ["UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE"],
        tooltip: "%{BKY_CLOUD_TABLE_QUERY_BY_COLUMN_TOOLTIP}"
      })
      e.insertBlockProfile("cloudTable_query_by_count", {
        type: "cloudTable_query_by_count",
        message0: "%{BKY_CLOUD_TABLE_QUERY_BY_COUNT}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "OPTIONS",
            custom: true,
            options: function () {
              return [[t.Msg.CLOUD_TABLE_ROW, "row"], [t.Msg.CLOUD_TABLE_COLUMN, "column"]]
            }
          }, {
            type: "input_dummy",
            name: "DUMMY"
          }, {
            type: "mutation_add_button",
            name: "mutation_add_button"
          }, {
            type: "input_dummy",
            name: "SUCCESS_MUTATION_BTN"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true,
        mutator: "cloudTable_query_by_count_toggle_statement",
        extensions: ["UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE"],
        tooltip: "%{BKY_CLOUD_TABLE_QUERY_BY_COUNT_TOOLTIP}"
      })
      e.insertBlockProfile("cloudTable_clear_all", {
        type: "cloudTable_clear_all",
        message0: "%{BKY_CLOUD_TABLE_CLEAR_ALL}",
        args0: [
          Module_6.a({}, n), {
            type: "input_dummy",
            name: "DUMMY"
          }, {
            type: "mutation_add_button",
            name: "mutation_add_button"
          }, {
            type: "input_dummy",
            name: "SUCCESS_MUTATION_BTN"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true,
        mutator: "cloudTable_default_toggle_statement",
        tooltip: "%{BKY_CLOUD_TABLE_CLEAR_ALL_TOOLTIP}"
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-cloud-table",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["cloudTable_on_error", "cloudTable_insert", "cloudTable_delete", "cloudTable_update", "cloudTable_query_by_column", "cloudTable_query_by_count", "cloudTable_clear_all"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["cloudTable_on_error"]
}
var __ = {
  icon: "icon-widget-cloud-table",
  title: "CloudSpaceDBWidget.widgetName",
  type: Src_editor_widget_builtIn_types.k,
  previewAreaWidgetTitle: "CloudSpaceDBWidget.widgetName",
  component: Yh,
  editConfig: l_,
  blockConfig: g_,
  isInvisibleWidget: true,
  widget: {
    size: {
      width: 0,
      height: 0
    },
    isGlobalWidget: true,
    attributes: {
      cloudTableId: Module_33.f
    }
  }
}
export { __ }
