/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-80
 */

"use strict"

import { Yh } from "./index__part-68"
import { wg } from "./index__part-78"
import { Ag } from "./index__part-79"
var e_
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_267 from /* 267 */"./267"
!function (e) {
  e[e.SUCCESS = 1] = "SUCCESS"
  e[e.FAILED = 2] = "FAILED"
}(e_ || (e_ = {}))
var n_ = {
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
          n = e_.FAILED
        }
      } else {
        n = e_.SUCCESS
      }
    }
    if (n === e_.SUCCESS) {
      t = true
      this.successStatement_ = 1
      n = e_.SUCCESS
    } else {
      if (n === e_.FAILED) {
        t = true
        this.failedStatement_ = 1
        n = e_.FAILED
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
    var n = e || e_.SUCCESS
    if (n === e_.FAILED) {
      this.failedStatement_ = 0
      t = true
    } else {
      if (n === e_.SUCCESS) {
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
      var d = this.append_statement_input("SUCCESS", undefined, "".concat("cloud_dict_success_DO", "_").concat(this.successDO))
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
      this.append_dummy_input("FAILED_TEXT", "FAILED_MUTATION_BTN").append_field(Src_shared_packages_Crc_blink_src_index.Blink.Msg.ROOM_FAILED_TEXT)
      this.append_shadow_input("ERROR_MSG", "<shadow type=\"cloud_dict_fail_result\"/>", "FAILED_MUTATION_BTN")
      var /* [auto-meaningful-name] */f$connection
      var f = this.append_statement_input("ERROR", undefined, "cloud_dict_error_DO")
      if (this.failedConnection) {
        if (!(null === (f$connection = f.connection) || undefined === f$connection)) {
          f$connection.connect(this.failedConnection)
        }
      }
    }
    if (this.successStatement_) {
      if (!(null === (o = this.get_input("SUCCESS_MUTATION_BTN")) || undefined === o)) {
        o.append_field(Module_4.q(e_.SUCCESS), "mutation_remove_button")
      }
    }
    if (this.failedStatement_) {
      if (!(null === (i = this.get_input("FAILED_MUTATION_BTN")) || undefined === i)) {
        i.append_field(Module_4.q(e_.FAILED), "mutation_remove_button")
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
var r_ = Object.assign({}, n_, {
  successInputList: [],
  successDO: "NEXT"
})
var o_ = Object.assign({}, n_, {
  successInputList: [
    {
      inputName: "CLOUD_DICT_QUERY_VALUE_RESULT",
      default_shadow: "<shadow type=\"cloud_dict_query_value_by_key_result\">\n        </shadow>"
    }
  ],
  successDO: "QUERY_VALUE_BY_KEY"
})
var i_ = Object.assign({}, n_, {
  successInputList: [
    {
      inputName: "CLOUD_DICT_QUERY_KEY_COUNT_RESULT",
      default_shadow: "<shadow type=\"cloud_dict_query_key_count_result\">\n        </shadow>"
    }
  ],
  successDO: "QUERY_KEY_COUNT"
})
var a_ = Object.assign({}, n_, {
  successInputList: [
    {
      inputName: "CLOUD_DICT_QUERY_ALL_KEYS_RESULT",
      default_shadow: "<shadow type=\"cloud_dict_query_all_keys_result\">\n        </shadow>"
    }
  ],
  successDO: "QUERY_ALL_KEYS"
})
var s_ = {
  type: Src_editor_widget_builtIn_types.j,
  category: {
    iconId: "icon-widget-cloud-dict",
    blocks: Src_editor_widget_builtIn_types.j
  },
  getTemplate: function (e) {
    var t
    var n = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    var r = Module_46.c().getCloudDictKeyList(e)
    var o = null === (t = r[1]) || undefined === t ? undefined : t.value
    if (undefined === o || Object.keys(Ag).includes(o)) {
      o = r[0].value
    }
    var i = "<field name=\"KEYS\">".concat(o, "</field>")
    return [
      "<block type=\"cloud_space_dict_on_error\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), Module_61.d, Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.j,
        title: "修改",
        lineId: "setter"
      }), "<block type=\"cloud_space_dict_set_key_value\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"DICT_KEYS_WRAPPER\">\n        <shadow type=\"cloud_dict_all_key_dropdown\">").concat(i, "</shadow>\n      </value>\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\" >0</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"cloud_space_dict_delete_key\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"DICT_KEYS_WRAPPER\">\n        <shadow type=\"cloud_dict_all_key_dropdown\">").concat(i, "</shadow>\n      </value>\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.j,
        title: "查询",
        lineId: "query"
      }), "<block type=\"cloud_space_dict_get_key_value\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"DICT_KEYS_WRAPPER\">\n        <shadow type=\"cloud_dict_all_key_dropdown\">").concat(i, "</shadow>\n      </value>\n    </block>"), "<block type=\"cloud_space_dict_get_key_count\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"cloud_space_dict_get_all_keys\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.j,
        title: "清空",
        lineId: "clear"
      }), "<block type=\"cloud_space_dict_clear_data\" uncache=\"true\">\n      ".concat(n, "\n    </block>")
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("cloud_dict_all_key_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "KEYS") || ""
        return Module_4.o(o)
      })
      e.insertBlockSnippetGenerator("cloud_dict_fail_result", function () {
        return "cloudDictFailResult"
      })
      e.insertBlockSnippetGenerator("cloud_dict_query_value_by_key_result", function () {
        return "cloudDictQueryValueByKeyResult"
      })
      e.insertBlockSnippetGenerator("cloud_dict_query_key_count_result", function () {
        return "cloudDictQueryKeyCountResult"
      })
      e.insertBlockSnippetGenerator("cloud_dict_query_all_keys_result", function () {
        return "cloudDictQueryAllKeysResult"
      })
      e.insertBlockSnippetGenerator("cloud_dict_error_info", function () {
        return "cloudDictErrorInfo"
      })
      e.insertBlockSnippetGenerator("cloud_space_dict_on_error", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "EVENT")
        var a = e.valueToCode(t, n, "CLOUD_DICT_ERROR_INFO", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(t, n, "DO")
        if (!s) {
          return ""
        }
        var c = "".concat(o, "_").concat(i)
        return Module_4.n("onCloudDictError", [Module_4.o(c)], s, [a])
      })
      e.insertBlockSnippetGenerator("cloud_space_dict_set_key_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "DICT_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL)
        var a = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(t, n, "SUCCESS")
        var c = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var l = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudDictSetKeyValue", [Module_4.o(o), i, a, Module_4.k([], s), Module_4.k([c], l)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("cloud_space_dict_delete_key", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "DICT_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "SUCCESS")
        var s = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var c = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudDictDeleteKey", [Module_4.o(o), i, Module_4.k([], a), Module_4.k([s], c)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("cloud_space_dict_clear_data", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.statementToCode(t, n, "SUCCESS")
        var a = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudDictClearData", [Module_4.o(o), Module_4.k([], i), Module_4.k([a], s)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("cloud_space_dict_get_key_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "DICT_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL)
        var a = e.valueToCode(t, n, "CLOUD_DICT_QUERY_VALUE_RESULT", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(t, n, "SUCCESS")
        var c = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var l = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudDictGetValueByKey", [Module_4.o(o), i, Module_4.k([a], s), Module_4.k([c], l)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("cloud_space_dict_get_key_count", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "CLOUD_DICT_QUERY_KEY_COUNT_RESULT", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "SUCCESS")
        var s = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var c = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudDictGetKeyCount", [Module_4.o(o), Module_4.k([i], a), Module_4.k([s], c)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("cloud_space_dict_get_all_keys", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "CLOUD_DICT_QUERY_ALL_KEYS_RESULT", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "SUCCESS")
        var s = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var c = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("cloudDictGetAllKey", [Module_4.o(o), Module_4.k([i], a), Module_4.k([s], c)]), t.blocks[n], e, true)
      })
    },
    setBlockGroupProfile: function (e, t) {
      t.extensions.register_mutator("cloud_dict_default_toggle_statement", r_)
      t.extensions.register_mutator("cloud_dict_query_value_by_key_toggle_statement", o_)
      t.extensions.register_mutator("cloud_dict_query_key_count_toggle_statement", i_)
      t.extensions.register_mutator("cloud_dict_query_all_keys_toggle_statement", a_)
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.j)
        }
      }
      e.insertBlockProfile("cloud_dict_all_key_dropdown", {
        type: "cloud_dict_all_key_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "KEYS",
            custom: true,
            advancedOptions: function () {
              var /* [auto-meaningful-name] */this$source_block
              var /* [auto-meaningful-name] */this$source_block$parent_block
              var n = (null === (this$source_block = this.source_block) || undefined === this$source_block || null === (this$source_block$parent_block = this$source_block.parent_block) || undefined === this$source_block$parent_block ? undefined : this$source_block$parent_block.get_field_value("WIDGET_ID")) || undefined
              return Module_46.c().getCloudDictKeyList(n, this)
            }
          }
        ],
        output: ["String", "Number"]
      })
      e.insertBlockProfile("cloud_dict_fail_result", {
        type: "cloud_dict_fail_result",
        message0: "%{BKY_FAIL_RESULT}",
        output: "String",
        required_context: "".concat("cloud_dict_error_DO"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloud_dict_query_value_by_key_result", {
        type: "cloud_dict_query_value_by_key_result",
        message0: "%{BKY_QUERY_RESULT}",
        output: "Array",
        required_context: "".concat("cloud_dict_success_DO", "_QUERY_VALUE_BY_KEY"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloud_dict_query_key_count_result", {
        type: "cloud_dict_query_key_count_result",
        message0: "%{BKY_QUERY_RESULT}",
        output: "Array",
        required_context: "".concat("cloud_dict_success_DO", "_QUERY_KEY_COUNT"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloud_dict_query_all_keys_result", {
        type: "cloud_dict_query_all_keys_result",
        message0: "%{BKY_ALL_KEYS_RESULT}",
        args0: [Module_4.d("%{BKY_BLOCK_LIST_ICON}")],
        output: "Array",
        required_context: "".concat("cloud_dict_success_DO", "_QUERY_ALL_KEYS"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloud_dict_error_info", {
        type: "cloud_dict_error_info",
        message0: "%{BKY_ERROR_INFO}",
        output: "String",
        required_context: "cloud_space_dict_on_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloud_space_dict_on_error", {
        type: "cloud_space_dict_on_error",
        message0: "%{BKY_CLOUD_SPACE_DICT_ON_ERROR}",
        args0: [
          Module_4.e("%{BKY_BLOCK_CLOUD_DICT_ICON}", true), Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "EVENT",
            custom: true,
            options: [["%{BKY_EVENT_SETTER}", Module_267.a.SETTER], ["%{BKY_EVENT_DELETE}", Module_267.a.DELETE], ["%{BKY_EVENT_QUERY}", Module_267.a.QUERY], ["%{BKY_EVENT_CLEAR}", Module_267.a.CLEAR]]
          }, {
            type: "input_value",
            name: "CLOUD_DICT_ERROR_INFO",
            default_shadow: "<shadow type=\"cloud_dict_error_info\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "cloud_space_dict_on_error_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CLOUD_SPACE_DICT_ON_ERROR_TOOLTIP}"
      })
      e.insertBlockProfile("cloud_space_dict_set_key_value", {
        type: "cloud_space_dict_set_key_value",
        message0: "%{BKY_CLOUD_SPACE_DICT_SET_KEY_VALUE}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "DICT_KEYS_WRAPPER",
            check: ["String", "Number"]
          }, {
            type: "input_value",
            name: "VALUE"
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
        mutator: "cloud_dict_default_toggle_statement",
        extensions: ["UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT"],
        tooltip: "%{BKY_CLOUD_SPACE_DICT_SET_KEY_VALUE_TOOLTIP}"
      })
      e.insertBlockProfile("cloud_space_dict_delete_key", {
        type: "cloud_space_dict_delete_key",
        message0: "%{BKY_CLOUD_SPACE_DICT_DELETE_KEY}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "DICT_KEYS_WRAPPER",
            check: ["String", "Number"]
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
        mutator: "cloud_dict_default_toggle_statement",
        extensions: ["UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT"],
        tooltip: "%{BKY_CLOUD_SPACE_DICT_DELETE_KEY_TOOLTIP}"
      })
      e.insertBlockProfile("cloud_space_dict_get_key_value", {
        type: "cloud_space_dict_get_key_value",
        message0: "%{BKY_CLOUD_SPACE_DICT_GET_VALUE_BY_KEY}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "DICT_KEYS_WRAPPER",
            check: ["String", "Number"]
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
        mutator: "cloud_dict_query_value_by_key_toggle_statement",
        extensions: ["UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT"],
        tooltip: "%{BKY_CLOUD_SPACE_DICT_GET_VALUE_BY_KEY_TOOLTIP}"
      })
      e.insertBlockProfile("cloud_space_dict_get_key_count", {
        type: "cloud_space_dict_get_key_count",
        message0: "%{BKY_CLOUD_SPACE_DICT_GET_KEY_COUNT}",
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
        mutator: "cloud_dict_query_key_count_toggle_statement",
        tooltip: "%{BKY_CLOUD_SPACE_DICT_GET_KEY_COUNT_TOOLTIP}"
      })
      e.insertBlockProfile("cloud_space_dict_get_all_keys", {
        type: "cloud_space_dict_get_all_keys",
        message0: "%{BKY_CLOUD_SPACE_DICT_GET_ALL_KEYS}",
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
        mutator: "cloud_dict_query_all_keys_toggle_statement",
        tooltip: "%{BKY_CLOUD_SPACE_DICT_GET_ALL_KEYS_TOOLTIP}"
      })
      e.insertBlockProfile("cloud_space_dict_clear_data", {
        type: "cloud_space_dict_clear_data",
        message0: "%{BKY_CLOUD_SPACE_DICT_CLEAR_DATA}",
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
        mutator: "cloud_dict_default_toggle_statement",
        tooltip: "%{BKY_CLOUD_SPACE_DICT_CLEAR_DATA_TOOLTIP}"
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-cloud-dict",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["cloud_space_dict_on_error", "cloud_space_dict_set_key_value", "cloud_space_dict_delete_key", "cloud_space_dict_get_key_value", "cloud_space_dict_get_key_count", "cloud_space_dict_get_all_keys", "cloud_space_dict_clear_data"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["cloud_space_dict_on_error"]
}
var c_ = {
  icon: "icon-widget-cloud-dict",
  title: "CloudSpaceDictWidget.widgetName",
  type: Src_editor_widget_builtIn_types.j,
  previewAreaWidgetTitle: "CloudSpaceDictWidget.widgetName",
  component: Yh,
  editConfig: wg,
  blockConfig: s_,
  isInvisibleWidget: true,
  widget: {
    size: {
      width: 0,
      height: 0
    },
    isGlobalWidget: true,
    attributes: {
      cloudDictId: Module_33.f
    }
  }
}
var l_ = [
  {
    type: "WidgetTitle"
  }, {
    type: "TableFields"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/cloud-table"
  }
]
export { c_ }
export { l_ }
