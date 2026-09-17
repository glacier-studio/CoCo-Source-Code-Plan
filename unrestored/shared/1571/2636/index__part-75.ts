/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-75
 */

"use strict"

import { Yh } from "./index__part-68"
import { Am } from "../../../../src/editor/widget/built-in/http-client-and-timer"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_323 from /* 323 */"./323"
var jm
!function (e) {
  e[e.SUCCESS = 1] = "SUCCESS"
  e[e.FAILED = 2] = "FAILED"
}(jm || (jm = {}))
var Nm = {
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
          n = jm.FAILED
        }
      } else {
        n = jm.SUCCESS
      }
    }
    if (n === jm.SUCCESS) {
      t = true
      this.successStatement_ = 1
      n = jm.SUCCESS
    } else {
      if (n === jm.FAILED) {
        t = true
        this.failedStatement_ = 1
        n = jm.FAILED
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
    var n = e || jm.SUCCESS
    if (n === jm.FAILED) {
      this.failedStatement_ = 0
      t = true
    } else {
      if (n === jm.SUCCESS) {
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
      var d = this.append_statement_input("SUCCESS", undefined, "".concat("cloud_room_success_DO", "_").concat(this.successDO))
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
      this.append_shadow_input("ERROR_MSG", "<shadow type=\"room_error\"/>", "FAILED_MUTATION_BTN")
      var /* [auto-meaningful-name] */f$connection
      var f = this.append_statement_input("ERROR", undefined, "cloud_room_error_DO")
      if (this.failedConnection) {
        if (!(null === (f$connection = f.connection) || undefined === f$connection)) {
          f$connection.connect(this.failedConnection)
        }
      }
    }
    if (this.successStatement_) {
      if (!(null === (o = this.get_input("SUCCESS_MUTATION_BTN")) || undefined === o)) {
        o.append_field(Module_4.q(jm.SUCCESS), "mutation_remove_button")
      }
    }
    if (this.failedStatement_) {
      if (!(null === (i = this.get_input("FAILED_MUTATION_BTN")) || undefined === i)) {
        i.append_field(Module_4.q(jm.FAILED), "mutation_remove_button")
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
var Rm = Object.assign({}, Nm, {
  successInputList: [
    {
      inputName: "CREATED_NAME",
      default_shadow: "<shadow type=\"room_enter_room_name\">\n        </shadow>"
    }, {
      inputName: "USERS",
      default_shadow: "<shadow type=\"room_enter_room_users\">\n        </shadow>"
    }
  ],
  successDO: "ENTER_ROOM"
})
var km = Object.assign({}, Nm, {
  successInputList: [
    {
      inputName: "CREATED_NAME",
      default_shadow: "<shadow type=\"room_create_room_name\" />"
    }
  ],
  successDO: "CREATED_NAME"
})
var xm = Object.assign({}, Nm, {
  successInputList: [
    {
      inputName: "NAME",
      default_shadow: "<shadow type=\"room_nickname\">\n        </shadow>"
    }
  ],
  successDO: "NICKNAME"
})
var Dm = Object.assign({}, Nm, {
  successInputList: [
    {
      inputName: "ROOMS_LIST",
      default_shadow: "<shadow type=\"room_room_list\">\n        </shadow>"
    }, {
      inputName: "USERS",
      default_shadow: "<shadow type=\"room_user_list\">\n        </shadow>"
    }
  ],
  successDO: "ROOM_LIST"
})
var /* [auto-meaningful-name] */BKY_BLOCK_CLOUD_ICON = "%{BKY_BLOCK_CLOUD_ICON}"
var Lm = {
  type: Src_editor_widget_builtIn_types.i,
  category: {
    iconId: "icon-widget-cloud-room",
    blocks: Src_editor_widget_builtIn_types.i
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"room_receive_message\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"MESSAGE_LIST\">\n        <shadow type=\"array_get\"></shadow>\n      </value>\n    </block>"), "<block type=\"room_receive_room_info\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"room_network_error\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"room_create_room\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROOM_NAME\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\" >").concat(Src_shared_packages_Crc_blink_src_index.Blink.Msg.ROOM_DEFAULT_ROOM_NAME, "</field>\n        </shadow>\n      </value>\n      <value name=\"COUNT\">\n        <shadow type=\"math_number\">\n            <field name=\"NUM\" constraints='1,20,1'>2</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"room_create_nickname\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"NICKNAME\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat(Src_shared_packages_Crc_blink_src_index.Blink.Msg.ROOM_DEFAULT_NICKNAME, "</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"room_get_room_list\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"room_enter_room\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROOM_NAME\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat(Src_shared_packages_Crc_blink_src_index.Blink.Msg.ROOM_NAME, "</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"room_send_message\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"MESSAGE\">\n        <shadow type=\"array_get\"></shadow>\n      </value>\n    </block>"), "<block type=\"room_exit_room\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"room_get_current_room_name\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"room_get_current_online_users\" uncache=\"true\">\n      ".concat(t, "\n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("room_create_room", function (t, n) {
        var r = e.valueToCode(t, n, "ROOM_NAME", e.ORDER_FUNCTION_CALL)
        var o = e.valueToCode(t, n, "COUNT", e.ORDER_FUNCTION_CALL)
        var i = e.valueToCode(t, n, "CREATED_NAME", e.ORDER_FUNCTION_CALL)
        var a = e.valueToCode(t, n, "USERS", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(t, n, "SUCCESS")
        var c = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var l = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("createRoom", [r, o, Module_4.k([i, a], s), Module_4.k([c], l)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("room_enter_room_name", function () {
        return "roomEnterRoomName"
      })
      e.insertBlockSnippetGenerator("room_network_error_value", function () {
        return "roomNetworkErrorValue"
      })
      e.insertBlockSnippetGenerator("room_enter_room_users", function () {
        return "roomEnterRoomUsers"
      })
      e.insertBlockSnippetGenerator("room_create_nickname", function (t, n) {
        var r = e.valueToCode(t, n, "NICKNAME", e.ORDER_FUNCTION_CALL)
        var o = e.statementToCode(t, n, "SUCCESS")
        var i = e.valueToCode(t, n, "NAME", e.ORDER_FUNCTION_CALL)
        var a = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("setRoomNickname", [r, Module_4.k([i], o), Module_4.k([a], s)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("room_info", function (t, n) {
        var r = e.valueToCode(t, n, "ROOM_NAME", e.ORDER_FUNCTION_CALL)
        var o = e.valueToCode(t, n, "USERS", e.ORDER_FUNCTION_CALL)
        var i = e.statementToCode(t, n, "success")
        return i ? Module_4.l(Module_4.j("EnterRoom", [r, o], i), t.blocks[n], e, true) : ""
      })
      e.insertBlockSnippetGenerator("room_user", function () {
        return "user"
      })
      e.insertBlockSnippetGenerator("room_message", function () {
        return "message"
      })
      e.insertBlockSnippetGenerator("room_nickname", function () {
        return "nickname"
      })
      e.insertBlockSnippetGenerator("room_create_room_users", function () {
        return "users"
      })
      e.insertBlockSnippetGenerator("room_room_list", function () {
        return "roomList"
      })
      e.insertBlockSnippetGenerator("room_user_list", function () {
        return "roomUsers"
      })
      e.insertBlockSnippetGenerator("room_error", function () {
        return "error"
      })
      var t = function (t, n) {
        var r = Module_323.a(n)
        var o = r.blockId && t.blocks[r.blockId]
        return o && e.getFieldValue(o, "ARRAY") || ""
      }
      e.insertBlockSnippetGenerator("room_get_room_list", function (t, n) {
        var r = e.valueToCode(t, n, "ROOMS_LIST", e.ORDER_FUNCTION_CALL)
        var o = e.valueToCode(t, n, "USERS", e.ORDER_FUNCTION_CALL)
        var i = e.statementToCode(t, n, "SUCCESS")
        var a = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(t, n, "ERROR")
        return Module_4.j("roomsList", [Module_4.k([r, o], i), Module_4.k([a], s)])
      })
      e.insertBlockSnippetGenerator("room_enter_room", function (t, n) {
        var r = e.valueToCode(t, n, "ROOM_NAME", e.ORDER_FUNCTION_CALL)
        var o = e.valueToCode(t, n, "CREATED_NAME", e.ORDER_FUNCTION_CALL)
        var i = e.valueToCode(t, n, "USERS", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "SUCCESS")
        var s = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var c = e.statementToCode(t, n, "ERROR")
        return Module_4.l(Module_4.j("joinRoom", [r, Module_4.k([o, i], a), Module_4.k([s], c)]), t.blocks[n], e, true)
      })
      e.insertBlockSnippetGenerator("room_send_message", function (n, r) {
        var o = e.valueToCode(n, r, "MESSAGE", e.ORDER_FUNCTION_CALL)
        var i = t(n, o)
        return Module_4.l(Module_4.j("sendRoomMessage", [JSON.stringify(i), o]), n.blocks[r], e, true)
      })
      e.insertBlockSnippetGenerator("room_receive_message", function (n, r) {
        var o = e.valueToCode(n, r, "MESSAGE_LIST", e.ORDER_FUNCTION_CALL)
        var i = e.statementToCode(n, r, "DO")
        var a = t(n, o)
        var s = "".concat(Module_4.a, "msgList")
        var c = [Module_4.n("setVariableValue", [JSON.stringify(a), s]), i].join(";\n")
        return Module_4.n("argsOnRoomMessage", [JSON.stringify(a), Module_4.k([s], c)])
      })
      e.insertBlockSnippetGenerator("room_receive_room_info", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "ROOM_INFO") || ""
        var i = e.valueToCode(t, n, "USER", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "DO")
        return Module_4.n("argsOnRoom".concat(o), [Module_4.k([i], a)])
      })
      e.insertBlockSnippetGenerator("room_network_error", function (t, n) {
        var r = e.valueToCode(t, n, "NETWORK_ERROR", e.ORDER_FUNCTION_CALL)
        var o = e.statementToCode(t, n, "DO")
        return Module_4.n("onRoomError", [Module_4.k([r], o)])
      })
      e.insertBlockSnippetGenerator("room_exit_room", function () {
        return Module_4.j("leaveRoom")
      })
      e.insertBlockSnippetGenerator("room_get_current_room_name", function () {
        return Module_4.r("getCurrentRoomName")
      })
      e.insertBlockSnippetGenerator("room_get_current_online_users", function () {
        return Module_4.r("getCurrentRoomMembers")
      })
    },
    setBlockGroupProfile: function (e, t) {
      t.extensions.register_mutator("room_enter_room_toggle_statement", Rm)
      t.extensions.register_mutator("room_create_room_toggle_statement", km)
      t.extensions.register_mutator("room_create_nickname_toggle_statement", xm)
      t.extensions.register_mutator("room_get_room_list_toggle_statement", Dm)
      e.insertBlockProfile("room_create_room", {
        type: "room_create_room",
        message0: "%{BKY_ROOM_CREATE_ROOM}",
        args0: [
          {
            type: "input_value",
            name: "ROOM_NAME",
            check: "String",
            align: "CENTRE"
          }, {
            type: "input_value",
            align: "CENTRE",
            name: "COUNT",
            check: "Number"
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
        mutator: "room_create_room_toggle_statement"
      })
      e.insertBlockProfile("room_create_room_name", {
        type: "room_create_room_name",
        message0: "".concat(t.Msg.ROOM_DEFAULT_ROOM_NAME),
        output: "String",
        required_context: "cloud_room_success_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_create_nickname", {
        type: "room_create_nickname",
        message0: "%{BKY_ROOM_CREATE_NICKNAME}",
        args0: [
          {
            type: "input_value",
            name: "NICKNAME",
            check: "String",
            align: "CENTRE"
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
        mutator: "room_create_nickname_toggle_statement"
      })
      e.insertBlockProfile("room_get_room_list", {
        type: "room_get_room_list",
        message0: "%{BKY_ROOM_GET_ROOM_LIST}",
        args0: [
          {
            type: "input_dummy",
            name: "PLACEHOLDER"
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
        mutator: "room_get_room_list_toggle_statement"
      })
      e.insertBlockProfile("room_enter_room", {
        type: "room_enter_room",
        message0: "%{BKY_ROOM_ENTER_ROOM}",
        args0: [
          {
            type: "input_value",
            name: "ROOM_NAME",
            check: "String",
            align: "CENTRE"
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
        mutator: "room_enter_room_toggle_statement"
      })
      e.insertBlockProfile("room_send_message", {
        type: "room_send_message",
        message0: "%{BKY_ROOM_SEND_MESSAGE}",
        args0: [
          {
            type: "input_value",
            name: "MESSAGE",
            check: ["Array"],
            align: "CENTRE"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("room_receive_message", {
        type: "room_receive_message",
        message0: "%{BKY_ROOM_RECEIVE_MESSAGE}",
        args0: [
          Module_4.e(BKY_BLOCK_CLOUD_ICON, true), {
            type: "input_value",
            name: "MESSAGE_LIST",
            check: ["Array"]
          }, {
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
      e.insertBlockProfile("room_message", {
        type: "room_message",
        message0: "".concat(t.Msg.ROOM_MESSAGE),
        output: "String",
        required_context: "room_receive_message_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_error", {
        type: "room_error",
        message0: "".concat(t.Msg.ROOM_DEFAULT_CREATE_ERROR),
        output: "String",
        required_context: "room_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_create_room_name", {
        type: "room_create_room_name",
        message0: "".concat(t.Msg.ROOM_DEFAULT_ROOM_NAME),
        output: "String",
        required_context: "".concat("cloud_room_success_DO", "_CREATED_NAME"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_enter_room_name", {
        type: "room_enter_room_name",
        message0: "".concat(t.Msg.ROOM_DEFAULT_ROOM_NAME),
        output: "String",
        required_context: "".concat("cloud_room_success_DO", "_ENTER_ROOM"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_enter_room_users", {
        type: "room_enter_room_users",
        message0: "".concat(t.Msg.ROOM_USERS),
        output: "String",
        required_context: "".concat("cloud_room_success_DO", "_ENTER_ROOM"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_nickname", {
        type: "room_nickname",
        message0: "".concat(t.Msg.ROOM_DEFAULT_NICKNAME),
        output: "String",
        required_context: "".concat("cloud_room_success_DO", "_NICKNAME"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_room_list", {
        type: "room_room_list",
        message0: "".concat(t.Msg.ROOM_LIST),
        output: ["Array"],
        required_context: "".concat("cloud_room_success_DO", "_ROOM_LIST"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_user_list", {
        type: "room_user_list",
        message0: "".concat(t.Msg.ROOM_GET_ONLINE_USERS),
        output: ["Array"],
        required_context: "".concat("cloud_room_success_DO", "_ROOM_LIST"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_receive_room_info", {
        type: "room_receive_room_info",
        message0: "%{BKY_ROOM_RECEIVE_ROOM_INFO}",
        args0: [
          Module_4.e(BKY_BLOCK_CLOUD_ICON, true), {
            type: "field_coco_dropdown",
            name: "ROOM_INFO",
            custom: true,
            options: function () {
              return [[t.Msg.ROOM_ENTER, "MemberJoin"], [t.Msg.ROOM_EXIT, "MemberLeave"]]
            }
          }, {
            type: "input_value",
            name: "USER",
            check: "String",
            default_shadow: "<shadow type=\"room_user\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "room_receive_room_info_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("room_user", {
        type: "room_user",
        message0: "".concat(t.Msg.ROOM_USER_NAME),
        output: "String",
        required_context: "room_receive_room_info_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_network_error", {
        type: "room_network_error",
        message0: "%{BKY_ROOM_NETWORK_ERROR}",
        args0: [
          Module_4.e(BKY_BLOCK_CLOUD_ICON, true), {
            type: "input_value",
            name: "NETWORK_ERROR",
            default_shadow: "<shadow type=\"room_network_error_value\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "room_network_error_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("room_network_error_value", {
        type: "room_network_error_value",
        message0: "".concat(t.Msg.ROOM_ERROR_INFO),
        output: "String",
        required_context: "room_network_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_error", {
        type: "room_error",
        message0: "".concat(t.Msg.ROOM_DEFAULT_CREATE_ERROR),
        output: "String",
        required_context: "cloud_room_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("room_exit_room", {
        type: "room_exit_room",
        message0: "%{BKY_ROOM_EXIT_ROOM}",
        args0: [],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("room_get_current_room_name", {
        type: "room_get_current_room_name",
        message0: "%{BKY_ROOM_CURRENT_ROOM_NAME}",
        args0: [],
        output: "String",
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("room_get_current_online_users", {
        type: "room_get_current_online_users",
        message0: "%{BKY_ROOM_CURRENT_ROOM_USERS}",
        args0: [],
        output: ["Array"],
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-cloud-room",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["room_receive_room_info", "room_network_error", "room_receive_message", "room_create_room", "room_create_nickname", "room_enter_room", "room_get_room_list", "room_send_message", "room_exit_room", "room_get_current_room_name", "room_get_current_online_users"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["room_receive_room_info", "room_network_error", "room_receive_message"]
}
var Pm = {
  icon: "icon-widget-cloud-room",
  title: "CloudRoomWidget.widgetName",
  type: Src_editor_widget_builtIn_types.i,
  previewAreaWidgetTitle: "CloudRoomWidget.widgetName",
  component: Yh,
  editConfig: Am,
  blockConfig: Lm,
  isInvisibleWidget: true,
  widget: {
    isGlobalWidget: true,
    size: {
      width: 0,
      height: 0
    },
    attributes: {}
  }
}
var Bm = [
  {
    type: "WarningFields",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/cloud-table",
    label: "云数据表"
  }, {
    type: "WidgetTitle"
  }, {
    type: "CloudDbList"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/cloud-db"
  }
]
var Fm
!function (e) {
  e[e.SUCCESS = 1] = "SUCCESS"
  e[e.FAILED = 2] = "FAILED"
}(Fm || (Fm = {}))
var Gm = {
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
          n = Fm.FAILED
        }
      } else {
        n = Fm.SUCCESS
      }
    }
    if (n === Fm.SUCCESS) {
      t = true
      this.successStatement_ = 1
      n = Fm.SUCCESS
    } else {
      if (n === Fm.FAILED) {
        t = true
        this.failedStatement_ = 1
        n = Fm.FAILED
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
    var n = e || Fm.SUCCESS
    if (n === Fm.FAILED) {
      this.failedStatement_ = 0
      t = true
    } else {
      if (n === Fm.SUCCESS) {
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
      var d = this.append_statement_input("SUCCESS", undefined, "".concat("cloudDB_success_DO", "_").concat(this.successDO))
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
      this.append_shadow_input("ERROR_MSG", "<shadow type=\"cloudDB_fail_result\"/>", "FAILED_MUTATION_BTN")
      var /* [auto-meaningful-name] */f$connection
      var f = this.append_statement_input("ERROR", undefined, "cloudDB_error_DO")
      if (this.failedConnection) {
        if (!(null === (f$connection = f.connection) || undefined === f$connection)) {
          f$connection.connect(this.failedConnection)
        }
      }
    }
    if (this.successStatement_) {
      if (!(null === (o = this.get_input("SUCCESS_MUTATION_BTN")) || undefined === o)) {
        o.append_field(Module_4.q(Fm.SUCCESS), "mutation_remove_button")
      }
    }
    if (this.failedStatement_) {
      if (!(null === (i = this.get_input("FAILED_MUTATION_BTN")) || undefined === i)) {
        i.append_field(Module_4.q(Fm.FAILED), "mutation_remove_button")
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
var Wm = Object.assign({}, Gm, {
  successInputList: [],
  successDO: "NEXT"
})
var Um = Object.assign({}, Gm, {
  successInputList: [
    {
      inputName: "CLOUD_DB_QUERY_BY_COLUMN_RESULT",
      default_shadow: "<shadow type=\"cloudDB_query_by_column_result\">\n        </shadow>"
    }
  ],
  successDO: "QUERY_BY_COLUMN"
})
var Hm = Object.assign({}, Gm, {
  successInputList: [
    {
      inputName: "CLOUD_DB_QUERY_BY_COUNT_RESULT",
      default_shadow: "<shadow type=\"cloudDB_query_by_count_result\">\n        </shadow>"
    }
  ],
  successDO: "QUERY_BY_COUNT"
})
var Vm = {
  type: Src_editor_widget_builtIn_types.h,
  category: {
    iconId: "icon-widget-cloud-db",
    blocks: Src_editor_widget_builtIn_types.h
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    var /* [auto-meaningful-name] */Module_46$c$getCloudDBColumnListE0$value = Module_46.c().getCloudDBColumnList(e)[0].value
    var r = "<field name=\"COLUMNS\">".concat(Module_46$c$getCloudDBColumnListE0$value, "</field>")
    return ["<block type=\"cloudDB_error\"></block>", Module_61.d, "<block type=\"cloudDB_insert\" uncache=\"true\">\n      <value name=\"INSERT_ROW\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\" >1,2,3</field>\n        </shadow>\n      </value>\n      ".concat(t, "\n    </block>"), "<block type=\"cloudDB_delete\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INPUT_COLUMN\">\n        <shadow type=\"cloudDB_all_column_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"COLUMN_VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" allow_text=\"true\">123</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"cloudDB_update\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INPUT_COLUMN\">\n        <shadow type=\"cloudDB_all_column_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"COLUMN_VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" allow_text=\"true\">123</field>\n        </shadow>\n      </value>\n      <value name=\"UPDATE_COLUMN\">\n        <shadow type=\"cloudDB_all_column_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"UPDATE_COLUMN_VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" allow_text=\"true\">456</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"cloudDB_query_by_column\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INPUT_COLUMN\">\n        <shadow type=\"cloudDB_all_column_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"COLUMN_VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" allow_text=\"true\">123</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"cloudDB_query_by_count\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"array_foreach\" uncache=\"true\">\n      <value name=\"ARRAY\">\n        <shadow type=\"array_get\"></shadow>\n      </value>\n    </block>"]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("cloudDB_all_column_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "COLUMNS") || ""
        return o === Module_9.h ? "" : Module_4.o(o)
      })
      e.insertBlockSnippetGenerator("cloudDB_fail_result", function () {
        return "cloudDBFailResult"
      })
      e.insertBlockSnippetGenerator("cloudDB_query_by_column_result", function () {
        return "cloudDBQueryByColumnResult"
      })
      e.insertBlockSnippetGenerator("cloudDB_query_by_count_result", function () {
        return "cloudDBQueryByCountResult"
      })
      e.insertBlockSnippetGenerator("cloudDB_error_name", function () {
        return "cloudDBErrorName"
      })
      e.insertBlockSnippetGenerator("cloudDB_error_type", function () {
        return "cloudDBErrorType"
      })
      e.insertBlockSnippetGenerator("cloudDB_error_info", function () {
        return "cloudDBErrorInfo"
      })
      e.insertBlockSnippetGenerator("cloudDB_error", function (t, n) {
        var r = e.valueToCode(t, n, "CLOUD_DB_ERROR_NAME", e.ORDER_FUNCTION_CALL)
        var o = e.valueToCode(t, n, "CLOUD_DB_ERROR_INFO", e.ORDER_FUNCTION_CALL)
        var i = e.statementToCode(t, n, "DO")
        return Module_4.n("onCloudDBError", [Module_4.k([r, o], i)])
      })
      e.insertBlockSnippetGenerator("cloudDB_insert", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = Module_9.W(o)
        var a = e.valueToCode(t, n, "INSERT_ROW", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(t, n, "SUCCESS")
        var c = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var l = e.statementToCode(t, n, "ERROR")
        return i ? Module_4.l(Module_4.j("cloudDBInsert", [i, a, Module_4.k([], s), Module_4.k([c], l)]), t.blocks[n], e, true) : ""
      })
      e.insertBlockSnippetGenerator("cloudDB_delete", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = Module_9.W(o)
        var a = e.valueToCode(t, n, "INPUT_COLUMN", e.ORDER_FUNCTION_CALL) || ""
        var s = e.getFieldValue(r, "OPERATOR") || ""
        var c = e.valueToCode(t, n, "COLUMN_VALUE", e.ORDER_FUNCTION_CALL) || ""
        var l = e.statementToCode(t, n, "SUCCESS")
        var u = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var d = e.statementToCode(t, n, "ERROR")
        return a && i ? Module_4.l(Module_4.j("cloudDBDelete", [i, a, "'".concat(s, "'"), c, Module_4.k([], l), Module_4.k([u], d)]), t.blocks[n], e, true) : ""
      })
      e.insertBlockSnippetGenerator("cloudDB_update", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = Module_9.W(o)
        var a = e.valueToCode(t, n, "INPUT_COLUMN", e.ORDER_FUNCTION_CALL) || ""
        var s = e.getFieldValue(r, "OPERATOR") || ""
        var c = e.valueToCode(t, n, "COLUMN_VALUE", e.ORDER_FUNCTION_CALL) || ""
        var l = e.valueToCode(t, n, "UPDATE_COLUMN", e.ORDER_FUNCTION_CALL) || ""
        var u = e.valueToCode(t, n, "UPDATE_COLUMN_VALUE", e.ORDER_FUNCTION_CALL) || ""
        var d = e.statementToCode(t, n, "SUCCESS")
        var p = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var f = e.statementToCode(t, n, "ERROR")
        return a && l && i ? Module_4.l(Module_4.j("cloudDBUpdate", [i, a, "'".concat(s, "'"), c, l, u, Module_4.k([], d), Module_4.k([p], f)]), t.blocks[n], e, true) : ""
      })
      e.insertBlockSnippetGenerator("cloudDB_query_by_column", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = Module_9.W(o)
        var a = e.valueToCode(t, n, "INPUT_COLUMN", e.ORDER_FUNCTION_CALL) || ""
        var s = e.getFieldValue(r, "OPERATOR") || ""
        var c = e.valueToCode(t, n, "COLUMN_VALUE", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(t, n, "CLOUD_DB_QUERY_BY_COLUMN_RESULT", e.ORDER_FUNCTION_CALL)
        var u = e.statementToCode(t, n, "SUCCESS")
        var d = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var p = e.statementToCode(t, n, "ERROR")
        return a && i ? Module_4.l(Module_4.j("cloudDBQuery", [i, a, "'".concat(s, "'"), c, Module_4.k([l], u), Module_4.k([d], p)]), t.blocks[n], e, true) : ""
      })
      e.insertBlockSnippetGenerator("cloudDB_query_by_count", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = Module_9.W(o)
        var a = e.valueToCode(t, n, "CLOUD_DB_QUERY_BY_COUNT_RESULT", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(t, n, "SUCCESS")
        var c = e.valueToCode(t, n, "ERROR_MSG", e.ORDER_FUNCTION_CALL)
        var l = e.statementToCode(t, n, "ERROR")
        if (!i) {
          return ""
        }
        var u = e.getFieldValue(r, "OPTIONS") || ""
        return Module_4.l(Module_4.j("cloudDBQueryByCount", [i, "'".concat(u, "'"), Module_4.k([a], s), Module_4.k([c], l)]), t.blocks[n], e, true)
      })
    },
    setBlockGroupProfile: function (e, t) {
      t.extensions.register_mutator("cloudDB_default_toggle_statement", Wm)
      t.extensions.register_mutator("cloudDB_query_by_column_toggle_statement", Um)
      t.extensions.register_mutator("cloudDB_query_by_count_toggle_statement", Hm)
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.h)
        }
      }
      e.insertBlockProfile("cloudDB_all_column_dropdown", {
        type: "cloudDB_all_column_dropdown",
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
              return Module_46.c().getCloudDBColumnList(n, this)
            }
          }
        ],
        output: ["String", "Number"]
      })
      e.insertBlockProfile("cloudDB_fail_result", {
        type: "cloudDB_fail_result",
        message0: "%{BKY_CLOUD_DB_FAIL_RESULT}",
        output: "String",
        required_context: "".concat("cloudDB_error_DO"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudDB_query_by_column_result", {
        type: "cloudDB_query_by_column_result",
        message0: "%{BKY_CLOUD_DB_QUERY_BY_COLUMN_RESULT}",
        output: "Array",
        required_context: "".concat("cloudDB_success_DO", "_QUERY_BY_COLUMN"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudDB_query_by_count_result", {
        type: "cloudDB_query_by_count_result",
        message0: "%{BKY_CLOUD_DB_QUERY_BY_COUNT_RESULT}",
        output: "Array",
        required_context: "".concat("cloudDB_success_DO", "_QUERY_BY_COUNT"),
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudDB_error_name", {
        type: "cloudDB_error_name",
        message0: "%{BKY_CLOUD_DB_ERROR_NAME}",
        output: "String",
        required_context: "cloudDB_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudDB_error_type", {
        type: "cloudDB_error_type",
        message0: "%{BKY_CLOUD_DB_ERROR_TYPE}",
        output: "String",
        required_context: "cloudDB_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudDB_error_info", {
        type: "cloudDB_error_info",
        message0: "%{BKY_CLOUD_DB_ERROR_INFO}",
        output: "String",
        required_context: "cloudDB_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloudDB_error", {
        type: "cloudDB_error",
        message0: "%{BKY_CLOUD_DB_ERROR}",
        args0: [
          Module_4.e("%{BKY_BLOCK_CLOUD_ICON}", true), {
            type: "input_value",
            name: "CLOUD_DB_ERROR_NAME",
            default_shadow: "<shadow type=\"cloudDB_error_name\" />"
          }, {
            type: "input_value",
            name: "CLOUD_DB_ERROR_INFO",
            default_shadow: "<shadow type=\"cloudDB_error_info\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "cloudDB_error_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("cloudDB_insert", {
        type: "cloudDB_insert",
        message0: "%{BKY_CLOUD_DB_INSERT}",
        args0: [
          {
            type: "input_value",
            name: "INSERT_ROW",
            check: ["String", "Array"]
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
        mutator: "cloudDB_default_toggle_statement"
      })
      e.insertBlockProfile("cloudDB_delete", {
        type: "cloudDB_delete",
        message0: "%{BKY_CLOUD_DB_DELETE}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "INPUT_COLUMN",
            check: ["String"]
          }, {
            type: "field_coco_dropdown",
            name: "OPERATOR",
            custom: true,
            options: function () {
              return [["=", "EQ"], ["≠", "NE"], ["<", "LT"], ["≤", "LTE"], [">", "GT"], ["≥", "GTE"]]
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
        mutator: "cloudDB_default_toggle_statement",
        extensions: ["UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB"]
      })
      e.insertBlockProfile("cloudDB_update", {
        type: "cloudDB_update",
        message0: "%{BKY_CLOUD_DB_UPDATE}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "INPUT_COLUMN",
            check: ["String"]
          }, {
            type: "field_coco_dropdown",
            name: "OPERATOR",
            custom: true,
            options: function () {
              return [["=", "EQ"], ["≠", "NE"], ["<", "LT"], ["≤", "LTE"], [">", "GT"], ["≥", "GTE"]]
            }
          }, {
            type: "input_value",
            name: "COLUMN_VALUE",
            check: ["String", "Number", "Boolean"]
          }, {
            type: "input_value",
            name: "UPDATE_COLUMN",
            check: ["String"]
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
        mutator: "cloudDB_default_toggle_statement",
        extensions: ["UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB"]
      })
      e.insertBlockProfile("cloudDB_query_by_column", {
        type: "cloudDB_query_by_column",
        message0: "%{BKY_CLOUD_DB_QUERY_BY_COLUMN}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "INPUT_COLUMN",
            check: ["String"]
          }, {
            type: "field_coco_dropdown",
            name: "OPERATOR",
            custom: true,
            options: function () {
              return [["=", "EQ"], ["≠", "NE"], ["<", "LT"], ["≤", "LTE"], [">", "GT"], ["≥", "GTE"]]
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
        mutator: "cloudDB_query_by_column_toggle_statement",
        extensions: ["UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB"]
      })
      e.insertBlockProfile("cloudDB_query_by_count", {
        type: "cloudDB_query_by_count",
        message0: "%{BKY_CLOUD_DB_QUERY_BY_COUNT}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "OPTIONS",
            custom: true,
            options: function () {
              return [[t.Msg.CLOUD_DB_ROW, "row"], [t.Msg.CLOUD_DB_COLUMN, "column"]]
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
        mutator: "cloudDB_query_by_count_toggle_statement"
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-cloud-db",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["cloudDB_insert", "cloudDB_delete", "cloudDB_update", "cloudDB_query_by_column", "cloudDB_query_by_count"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["cloudDB_error"]
}
var zm = {
  icon: "icon-widget-cloud-db",
  title: "CloudDbWidget.widgetName",
  type: Src_editor_widget_builtIn_types.h,
  previewAreaWidgetTitle: "CloudDbWidget.widgetName",
  component: Yh,
  editConfig: Bm,
  blockConfig: Vm,
  isInvisibleWidget: true,
  widget: {
    size: {
      width: 0,
      height: 0
    },
    isGlobalWidget: true,
    attributes: {
      cloudDbId: "_EMPTY_CLOUD_DB_ID_",
      columns: [],
      name: "",
      primaryKey: ""
    }
  }
}
var Ym = [
  {
    type: "WidgetTitle"
  }, {
    type: "LocalStorageFields"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/local-storage"
  }
]
var Km = {
  type: Src_editor_widget_builtIn_types.y,
  category: {
    iconId: "icon-widget-local-storage",
    blocks: Src_editor_widget_builtIn_types.y
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    var /* [auto-meaningful-name] */Module_46$c$getLocalDocumentFieldListE0$value = Module_46.c().getLocalDocumentFieldList(e)[0].value
    var r = "<field name=\"DOC_KEYS\">".concat(Module_46$c$getLocalDocumentFieldListE0$value, "</field>")
    return ["<block type=\"local_document_set_field_item\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"local_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">0</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"local_document_remove_field_item\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"local_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n    </block>"), "<block type=\"local_document_clear_all_field_items\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"local_document_get_field_item\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"local_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n    </block>"), "<block type=\"local_document_get_field_key_count\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"local_document_get_all_field_keys\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"local_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n    </block>"), "<block type=\"local_document_check_if_field_key_exists\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"local_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("local_document_all_key_field_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "DOC_KEYS")
        var i = t.blocks[r.parent_id || ""]
        var a = e.getFieldValue(i, "WIDGET_ID")
        var s = Module_46.c().getLocalDocumentFieldList(a).find(function (e) {
          return e.value === o
        })
        var c = ""
        if (s) {
          c = s.text
        }
        return Module_4.o(c)
      })
      e.insertBlockSnippetGenerator("local_document_set_field_item", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        if (!o) {
          return ""
        }
        var a = e.valueToCode(t, n, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        var s = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""
        return Module_4.l(Module_4.j("setLocalDocumentFieldItem", [Module_4.o(i), Module_4.o(o), a, s]), r, e, true)
      })
      e.insertBlockSnippetGenerator("local_document_remove_field_item", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        if (!o) {
          return ""
        }
        var a = e.valueToCode(t, n, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        return Module_4.l(Module_4.n("removeLocalDocumentFieldItem", [Module_4.o(i), Module_4.o(o), a]), r, e, true)
      })
      e.insertBlockSnippetGenerator("local_document_clear_all_field_items", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        return o ? Module_4.n("clearLocalDocumentAllFieldItems", [Module_4.o(i), Module_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("local_document_get_field_item", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        var a = e.valueToCode(t, n, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        return o ? Module_4.l(Module_4.s("getLocalDocumentFieldItem", [Module_4.o(i), Module_4.o(o), a]), r, e, false, true) : ""
      })
      e.insertBlockSnippetGenerator("local_document_get_all_field_keys", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        return o ? Module_4.s("getLocalDocumentAllFieldKeys", [Module_4.o(i), Module_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("local_document_check_if_field_key_exists", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        var a = e.valueToCode(t, n, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        return o ? Module_4.l(Module_4.s("checkIfDocumentFieldKeyExists", [Module_4.o(i), Module_4.o(o), a]), r, e, true, true) : ""
      })
      e.insertBlockSnippetGenerator("local_document_get_field_key_count", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        return o ? Module_4.s("getLocalDocumentFieldKeyCount", [Module_4.o(i), Module_4.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.y)
        }
      }
      e.insertBlockProfile("local_document_all_key_field_dropdown", {
        type: "local_document_all_key_field_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DOC_KEYS",
            custom: true,
            advancedOptions: function () {
              var /* [auto-meaningful-name] */this$source_block
              var /* [auto-meaningful-name] */this$source_block$parent_block
              var n = (null === (this$source_block = this.source_block) || undefined === this$source_block || null === (this$source_block$parent_block = this$source_block.parent_block) || undefined === this$source_block$parent_block ? undefined : this$source_block$parent_block.get_field_value("WIDGET_ID")) || undefined
              return Module_46.c().getLocalDocumentFieldList(n, this)
            }
          }
        ],
        output: ["String", "Number"]
      })
      e.insertBlockProfile("local_document_set_field_item", {
        type: "local_document_set_field_item",
        message0: "%{BKY_LOCAL_STORAGE_SET_VALUE_BY_KEY}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["String", "Number"]
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}",
        extensions: ["UPDATE_KEY_AFTER_SELECTING_DOC"],
        tooltip: "%{BKY_LOCAL_STORAGE_SET_VALUE_BY_KEY_TOOLTIP}"
      })
      e.insertBlockProfile("local_document_remove_field_item", {
        type: "local_document_remove_field_item",
        message0: "%{BKY_LOCAL_STORAGE_DELETE_ITEM}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}",
        extensions: ["UPDATE_KEY_AFTER_SELECTING_DOC"]
      })
      e.insertBlockProfile("local_document_clear_all_field_items", {
        type: "local_document_clear_all_field_items",
        message0: "%{BKY_LOCAL_STORAGE_CLEAR_ALL_DATA}",
        args0: [Module_6.a({}, n)],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}"
      })
      e.insertBlockProfile("local_document_get_field_item", {
        type: "local_document_get_field_item",
        message0: "%{BKY_LOCAL_STORAGE_GET_VALUE_BY_KEY}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true,
        extensions: ["UPDATE_KEY_AFTER_SELECTING_DOC"]
      })
      e.insertBlockProfile("local_document_get_field_key_count", {
        type: "local_document_get_field_key_count",
        message0: "%{BKY_LOCAL_STORAGE_GET_KEY_VALUE_COUNT}",
        args0: [Module_6.a({}, n)],
        output: ["Number"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("local_document_get_all_field_keys", {
        type: "local_document_get_all_field_keys",
        message0: "%{BKY_LOCAL_STORAGE_GET_ALL_FIELD_KEYS}",
        args0: [Module_6.a({}, n)],
        output: ["Array"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("local_document_check_if_field_key_exists", {
        type: "local_document_check_if_field_key_exists",
        message0: "%{BKY_LOCAL_STORAGE_ASSERT_KEY_IN}",
        args0: [
          {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }, Module_6.a({}, n)
        ],
        output: ["Boolean"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true,
        extensions: ["UPDATE_KEY_AFTER_SELECTING_DOC"]
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-local-storage",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["local_document_set_field_item", "local_document_remove_field_item", "local_document_clear_all_field_items", "local_document_get_field_item", "local_document_get_field_key_count", "local_document_get_all_field_keys", "local_document_check_if_field_key_exists"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: []
}
var qm = {
  icon: "icon-widget-local-storage",
  title: "LocalStorageWidget.widgetName",
  type: Src_editor_widget_builtIn_types.y,
  previewAreaWidgetTitle: "LocalStorageWidget.widgetName",
  component: Yh,
  editConfig: Ym,
  blockConfig: Km,
  isInvisibleWidget: true,
  widget: {
    size: {
      width: 0,
      height: 0
    },
    isGlobalWidget: true,
    attributes: {
      fields: []
    }
  },
  isDiscard: true
}
var Xm = [
  {
    type: "WidgetTitle"
  }, {
    type: "LocalStorageFields"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/local-storage"
  }
]
var $m = {
  type: Src_editor_widget_builtIn_types.B,
  category: {
    iconId: "icon-widget-local-storage",
    blocks: Src_editor_widget_builtIn_types.B
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    var /* [auto-meaningful-name] */Module_46$c$getLocalDocumentFieldListE0$value = Module_46.c().getLocalDocumentFieldList(e)[0].value
    var r = "<field name=\"DOC_KEYS\">".concat(Module_46$c$getLocalDocumentFieldListE0$value, "</field>")
    return ["<block type=\"new_local_document_set_field_item\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"new_local_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">0</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"new_local_document_remove_field_item\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"new_local_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n    </block>"), "<block type=\"new_local_document_clear_all_field_items\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"new_local_document_get_field_item\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"new_local_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n    </block>"), "<block type=\"new_local_document_get_all_field_keys\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"new_local_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n    </block>"), "<block type=\"new_local_document_get_field_key_count\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"new_local_document_check_if_field_key_exists\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"new_local_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("new_local_document_all_key_field_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "DOC_KEYS")
        var i = t.blocks[r.parent_id || ""]
        var a = e.getFieldValue(i, "WIDGET_ID")
        var s = Module_46.c().getLocalDocumentFieldList(a).find(function (e) {
          return e.value === o
        })
        var c = ""
        if (s) {
          c = s.text
        }
        return Module_4.o(c)
      })
      e.insertBlockSnippetGenerator("new_local_document_set_field_item", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        if (!o) {
          return ""
        }
        var a = e.valueToCode(t, n, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        var s = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""
        return Module_4.l(Module_4.j("setLocalDocumentFieldItem", [Module_4.o(i), Module_4.o(o), a, s]), r, e, true)
      })
      e.insertBlockSnippetGenerator("new_local_document_remove_field_item", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        if (!o) {
          return ""
        }
        var a = e.valueToCode(t, n, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        return Module_4.l(Module_4.n("removeLocalDocumentFieldItem", [Module_4.o(i), Module_4.o(o), a]), r, e, true)
      })
      e.insertBlockSnippetGenerator("new_local_document_clear_all_field_items", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        return o ? Module_4.n("clearLocalDocumentAllFieldItems", [Module_4.o(i), Module_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("new_local_document_get_field_item", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        var a = e.valueToCode(t, n, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        return o ? Module_4.l(Module_4.s("getLocalDocumentFieldItem", [Module_4.o(i), Module_4.o(o), a]), r, e, false, true) : ""
      })
      e.insertBlockSnippetGenerator("new_local_document_get_all_field_keys", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        return o ? Module_4.s("getLocalDocumentAllFieldKeys", [Module_4.o(i), Module_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("new_local_document_check_if_field_key_exists", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        var a = e.valueToCode(t, n, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        return o ? Module_4.l(Module_4.s("checkIfDocumentFieldKeyExists", [Module_4.o(i), Module_4.o(o), a]), r, e, true, true) : ""
      })
      e.insertBlockSnippetGenerator("new_local_document_get_field_key_count", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getDynamicValue("__CURRENT_PROJECT_ID__")
        return o ? Module_4.s("getLocalDocumentFieldKeyCount", [Module_4.o(i), Module_4.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.B)
        }
      }
      e.insertBlockProfile("new_local_document_all_key_field_dropdown", {
        type: "new_local_document_all_key_field_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DOC_KEYS",
            custom: true,
            advancedOptions: function () {
              var /* [auto-meaningful-name] */this$source_block
              var /* [auto-meaningful-name] */this$source_block$parent_block
              var n = (null === (this$source_block = this.source_block) || undefined === this$source_block || null === (this$source_block$parent_block = this$source_block.parent_block) || undefined === this$source_block$parent_block ? undefined : this$source_block$parent_block.get_field_value("WIDGET_ID")) || undefined
              return Module_46.c().getLocalDocumentFieldList(n, this)
            }
          }
        ],
        output: ["String", "Number"]
      })
      e.insertBlockProfile("new_local_document_set_field_item", {
        type: "new_local_document_set_field_item",
        message0: "%{BKY_LOCAL_STORAGE_SET_VALUE_BY_KEY}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["String", "Number"]
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}",
        extensions: ["UPDATE_KEY_AFTER_SELECTING_DOC"],
        tooltip: "%{BKY_LOCAL_STORAGE_SET_VALUE_BY_KEY_TOOLTIP}"
      })
      e.insertBlockProfile("new_local_document_remove_field_item", {
        type: "new_local_document_remove_field_item",
        message0: "%{BKY_LOCAL_STORAGE_DELETE_ITEM}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}",
        extensions: ["UPDATE_KEY_AFTER_SELECTING_DOC"]
      })
      e.insertBlockProfile("new_local_document_clear_all_field_items", {
        type: "new_local_document_clear_all_field_items",
        message0: "%{BKY_LOCAL_STORAGE_CLEAR_ALL_DATA}",
        args0: [Module_6.a({}, n)],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}"
      })
      e.insertBlockProfile("new_local_document_get_field_item", {
        type: "new_local_document_get_field_item",
        message0: "%{BKY_LOCAL_STORAGE_GET_VALUE_BY_KEY}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }
        ],
        output: ["String"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true,
        extensions: ["UPDATE_KEY_AFTER_SELECTING_DOC"]
      })
      e.insertBlockProfile("new_local_document_get_field_key_count", {
        type: "new_local_document_get_field_key_count",
        message0: "%{BKY_LOCAL_STORAGE_GET_KEY_VALUE_COUNT}",
        args0: [Module_6.a({}, n)],
        output: ["Number"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("new_local_document_get_all_field_keys", {
        type: "new_local_document_get_all_field_keys",
        message0: "%{BKY_NEW_LOCAL_STORAGE_GET_ALL_FIELD_KEYS}",
        args0: [Module_4.d("%{BKY_BLOCK_LIST_ICON}"), Module_6.a({}, n)],
        output: ["Array"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("new_local_document_check_if_field_key_exists", {
        type: "new_local_document_check_if_field_key_exists",
        message0: "%{BKY_LOCAL_STORAGE_ASSERT_KEY_IN}",
        args0: [
          {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }, Module_6.a({}, n)
        ],
        output: ["Boolean"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true,
        extensions: ["UPDATE_KEY_AFTER_SELECTING_DOC"]
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-local-storage",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["new_local_document_set_field_item", "new_local_document_remove_field_item", "new_local_document_clear_all_field_items", "new_local_document_get_field_item", "new_local_document_get_field_key_count", "new_local_document_get_all_field_keys", "new_local_document_check_if_field_key_exists"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: []
}
var eg = {
  icon: "icon-widget-local-storage",
  title: "LocalStorageWidget.widgetName",
  type: Src_editor_widget_builtIn_types.B,
  previewAreaWidgetTitle: "LocalStorageWidget.widgetName",
  component: Yh,
  editConfig: Xm,
  blockConfig: $m,
  isInvisibleWidget: true,
  widget: {
    size: {
      width: 0,
      height: 0
    },
    isGlobalWidget: true,
    attributes: {
      fields: []
    }
  }
}
var tg = [
  {
    type: "WidgetTitle"
  }
]
export { Pm }
export { Bm }
export { zm }
export { qm }
export { eg }
export { tg }
