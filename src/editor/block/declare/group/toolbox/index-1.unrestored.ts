/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-2
 */

"use strict"

var E
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../../../../../unrestored/shared/1571/2636/4"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Shared_packages_Crc_blink_src_index from /* 17 */"../../../../shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../../unrestored/shared/1571/2636/46/index"
function w(e, t) {
  var /* [auto-meaningful-name] */BKY_BLOCK_TAB_ICON = "%{BKY_BLOCK_TAB_ICON}"
  e.insertBlockProfile("screen_on_open", {
    type: "screen_on_open",
    message0: "%{BKY_SCREEN_ON_OPEN}",
    args0: [Module_4.e(BKY_BLOCK_TAB_ICON, true)],
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
  e.insertBlockProfile("screen_on_open_get_param_value", {
    type: "screen_on_open_get_param_value",
    message0: "%{BKY_SCREEN_PARAM}",
    output: "String",
    required_context: "screen_on_open_get_param_value_DO",
    colour: "%{BKY_PARAM_BLOCK_COLOR}",
    extensions: ["param_block"]
  })
  e.insertBlockProfile("screen_on_open_get_param", {
    type: "screen_on_open_get_param",
    message0: "%{BKY_SCREEN_ON_OPEN_GET_PARAM}",
    args0: [
      Module_4.e(BKY_BLOCK_TAB_ICON, true), {
        type: "input_value",
        name: "PARAMETER",
        align: "CENTRE",
        default_shadow: "<shadow type=\"screen_on_open_get_param_value\" />"
      }, {
        type: "input_dummy",
        align: "CENTRE"
      }, {
        type: "input_statement",
        name: "DO",
        provided_context: "screen_on_open_get_param_value_DO"
      }
    ],
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("screen_navigate_to", {
    type: "screen_navigate_to",
    message0: "%{BKY_SCREEN_NAVIGATE_TO}",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "SCREEN_ID",
        custom: true,
        options: function () {
          return [].concat(Module_25.a(Module_46.c().getScreenList()), [
            {
              type: "line"
            }, {
              type: "basic",
              text: t.Msg.SCREEN_NEXT,
              value: "nextScreen"
            }, {
              type: "basic",
              text: t.Msg.SCREEN_PREV,
              value: "prevScreen"
            }
          ])
        }
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("screen_navigate_to_by_value", {
    type: "screen_navigate_to_by_value",
    message0: "%{BKY_SCREEN_NAVIGATE_TO_BY_VALUE}",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "SCREEN_ID",
        custom: true,
        options: function () {
          return [].concat(Module_25.a(Module_46.c().getScreenList()), [
            {
              type: "line"
            }, {
              type: "basic",
              text: t.Msg.SCREEN_NEXT,
              value: "nextScreen"
            }, {
              type: "basic",
              text: t.Msg.SCREEN_PREV,
              value: "prevScreen"
            }
          ])
        }
      }, {
        type: "input_value",
        name: "PARAMETER"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("new_screen_navigate_to", {
    type: "new_screen_navigate_to",
    message0: "%{BKY_SCREEN_NAVIGATE_TO}",
    args0: [
      {
        type: "input_value",
        name: "SCREEN_ID",
        check: ["String", "Number"]
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("screen_input", {
    type: "screen_input",
    message0: "%1",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "SCREEN_ID",
        custom: true,
        options: function () {
          return [].concat(Module_25.a(Module_46.c().getScreenList()), [
            {
              type: "line"
            }, {
              type: "basic",
              text: t.Msg.SCREEN_NEXT,
              value: "nextScreen"
            }, {
              type: "basic",
              text: t.Msg.SCREEN_PREV,
              value: "prevScreen"
            }
          ])
        }
      }
    ],
    colour: "#ffffff",
    output: "String",
    tooltip: "%{BKY_SCREEN_INPUT_TOOLTIP}"
  })
  e.insertBlockProfile("new_screen_navigate_to_by_value", {
    type: "new_screen_navigate_to_by_value",
    message0: "%{BKY_SCREEN_NAVIGATE_TO_BY_VALUE}",
    args0: [
      {
        type: "input_value",
        name: "SCREEN_ID",
        check: ["String", "Number"]
      }, {
        type: "input_value",
        name: "PARAMETER"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: true
  })
}
function C(e) {
  e.insertBlockXML("screen_on_open")
  e.insertBlockXML("screen_on_open_get_param")
  e.insertBlockXML("screen_input", undefined, true)
  e.insertBlockXML("screen_navigate_to")
  e.insertBlockXML("screen_navigate_to_by_value", "    <value name=\"PARAMETER\">\n  <shadow type=\"text\">\n    <field name=\"TEXT\">参数</field>\n  </shadow>\n</value>")
  e.insertBlockXML("new_screen_navigate_to", "<value name=\"SCREEN_ID\">\n      <shadow type=\"screen_input\"></shadow>\n    </value>", true)
  e.insertBlockXML("new_screen_navigate_to_by_value", "<value name=\"SCREEN_ID\">\n        <shadow type=\"screen_input\"></shadow>\n      </value>\n      <value name=\"PARAMETER\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">参数</field>\n    </shadow>\n  </value>", true)
  e.insertBlockXML("broadcast_on_receive", "<value name=\"BROADCAST\">\n      <shadow type=\"broadcast_input\"></shadow>\n    </value>", true)
  e.insertBlockXML("broadcast_send", "<value name=\"BROADCAST\">\n      <shadow type=\"broadcast_input\"></shadow>\n    </value>", true)
  e.insertBlockXML("broadcast_send_and_wait", "<value name=\"BROADCAST\">\n      <shadow type=\"broadcast_input\"></shadow>\n    </value>", true)
}
function T(e) {
  e.insertBlockSnippetGenerator("screen_input", function (t, n) {
    var r = t.blocks[n]
    return JSON.stringify(e.getFieldValue(r, "SCREEN_ID"))
  })
  e.insertBlockSnippetGenerator("screen_on_open", function (t, n) {
    var r = e.statementToCode(t, n, "DO")
    return r ? Module_4.m("onScreenOpen", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))], r) : ""
  })
  e.insertBlockSnippetGenerator("screen_on_open_get_param_value", function () {
    return "screenOpenParamValue"
  })
  e.insertBlockSnippetGenerator("screen_on_open_get_param", function (t, n) {
    var r = e.statementToCode(t, n, "DO")
    if (!r) {
      return ""
    }
    var o = e.valueToCode(t, n, "PARAMETER", e.ORDER_FUNCTION_CALL)
    return Module_4.n("onScreenOpen", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))], r, [o])
  })
  e.insertBlockSnippetGenerator("screen_navigate_to", function (t, n) {
    var r = Module_4.o(e.getFieldValue(t.blocks[n], "SCREEN_ID") || "")
    return r === Module_4.o("nextScreen") ? Module_4.n("navigateToNextScreen", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))]) : r === Module_4.o("prevScreen") ? Module_4.n("navigateToPrevScreen", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))]) : Module_4.n("navigateToScreen", [r])
  })
  e.insertBlockSnippetGenerator("screen_navigate_to_by_value", function (t, n) {
    var r = Module_4.o(e.getFieldValue(t.blocks[n], "SCREEN_ID") || "")
    var o = e.valueToCode(t, n, "PARAMETER", e.ORDER_FUNCTION_CALL)
    return r === Module_4.o("nextScreen") ? Module_4.n("navigateToNextScreen", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__")), o]) : r === Module_4.o("prevScreen") ? Module_4.n("navigateToPrevScreen", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__")), o]) : Module_4.n("navigateToScreen", [r, o])
  })
  e.insertBlockSnippetGenerator("new_screen_navigate_to", function (t, n) {
    var r = t.blocks[n]
    var o = e.valueToCode(t, n, "SCREEN_ID", e.ORDER_FUNCTION_CALL)
    return o.includes(Module_4.o("nextScreen")) ? Module_4.l(Module_4.n("navigateToNextScreen", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))]), r, e) : o.includes(Module_4.o("prevScreen")) ? Module_4.l(Module_4.n("navigateToPrevScreen", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))]), r, e) : Module_4.l(Module_4.n("navigateToScreen", [o]), r, e)
  })
  e.insertBlockSnippetGenerator("new_screen_navigate_to_by_value", function (t, n) {
    var r = t.blocks[n]
    var o = e.valueToCode(t, n, "SCREEN_ID", e.ORDER_FUNCTION_CALL)
    var i = e.valueToCode(t, n, "PARAMETER", e.ORDER_FUNCTION_CALL)
    return o.includes(Module_4.o("nextScreen")) ? Module_4.l(Module_4.n("navigateToNextScreen", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__")), i]), r, e) : o.includes(Module_4.o("prevScreen")) ? Module_4.l(Module_4.n("navigateToPrevScreen", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__")), i]), r, e) : Module_4.l(Module_4.n("navigateToScreen", [o, i]), r, e)
  })
}
function S(e, t) {
  e.insertBlockProfile("loop_finitely", {
    type: "loop_finitely",
    message0: "%{BKY_REPEAT}",
    args0: [
      {
        type: "input_value",
        name: "TIMES",
        check: "Number",
        align: "CENTRE"
      }, {
        type: "input_dummy",
        align: "CENTRE"
      }, {
        type: "input_statement",
        name: "DO"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("sleep", {
    type: "sleep",
    message0: "%{BKY_WAIT_SECS}",
    args0: [
      {
        type: "input_value",
        name: "SECONDS",
        check: "Number",
        align: "CENTRE"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("loop_conditionally", {
    type: "loop_conditionally",
    message0: "%{BKY_REPEAT_WHEN}",
    args0: [
      {
        type: "input_value",
        name: "CONDITION",
        check: "Boolean",
        align: "CENTRE"
      }, {
        type: "input_dummy",
        align: "CENTRE"
      }, {
        type: "input_statement",
        name: "DO"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true,
    tooltip: "%{BKY_REPEAT_WHEN_TOOLTIP}"
  })
  e.insertBlockProfile("loop_infinitely", {
    type: "loop_infinitely",
    message0: "%{BKY_REPEAT_FOREVER}",
    args0: [
      {
        type: "input_dummy",
        align: "CENTRE"
      }, {
        type: "input_statement",
        name: "DO"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("wait_until", {
    type: "wait_until",
    message0: "%{BKY_SLEEP_UTIL}",
    args0: [
      {
        type: "input_value",
        name: "CONDITION",
        check: "Boolean",
        align: "CENTRE"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("break_loop", {
    type: "break_loop",
    message0: "%{BKY_BREAK}",
    args0: [],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true,
    tooltip: "%{BKY_BREAK_TOOLTIP}"
  })
  e.insertBlockProfile("continue_loop", {
    type: "continue_loop",
    message0: "%{BKY_CONTINUE}",
    args0: [],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("console_log", {
    type: "console_log",
    message0: "%{BKY_CONSOLE_LOG}",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        align: "CENTRE"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true,
    mutator: "CONSOLE_MUTATOR"
  })
  e.insertBlockProfile("new_console_log", {
    type: "new_console_log",
    message0: "%{BKY_NEW_CONSOLE_LOG}",
    args0: [
      {
        type: "field_coco_dropdown",
        custom: true,
        name: "TYPE",
        options: [["%{BKY_TO_LOG}", E.LOG], ["%{BKY_TO_ERROR}", E.ERROR], ["%{BKY_TO_WARNING}", E.WARNING]]
      }, {
        type: "input_value",
        name: "VALUE",
        align: "CENTRE"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true,
    mutator: "CONSOLE_MUTATOR"
  })
  e.insertBlockProfile("console_error", {
    type: "console_error",
    message0: "%{BKY_CONSOLE_ERROR}",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        align: "CENTRE"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true,
    mutator: "CONSOLE_MUTATOR"
  })
  e.insertBlockProfile("controls_for", {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR}",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: ["Number"],
        default_shadow: "<shadow type=\"controls_for_value\" />"
      }, {
        type: "input_value",
        name: "FROM",
        check: "Number"
      }, {
        type: "input_value",
        name: "TO",
        check: "Number"
      }, {
        type: "input_value",
        name: "BY",
        check: "Number"
      }
    ],
    message1: "%1",
    args1: [
      {
        type: "input_statement",
        name: "DO",
        provided_context: "controls_for_DO"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true,
    tooltip: "%{BKY_CONTROLS_FOR_TOOLTIP}"
  })
  e.insertBlockProfile("controls_for_closed_range", {
    type: "controls_for_closed_range",
    message0: "%{BKY_CONTROLS_FOR_CLOSED_RANGE}",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: ["Number"],
        default_shadow: "<shadow type=\"controls_for_value\" />"
      }, {
        type: "input_value",
        name: "FROM",
        check: "Number"
      }, {
        type: "input_value",
        name: "TO",
        check: "Number"
      }, {
        type: "input_value",
        name: "BY",
        check: "Number"
      }
    ],
    message1: "%1",
    args1: [
      {
        type: "input_statement",
        name: "DO",
        provided_context: "controls_for_DO"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: true,
    tooltip: "%{BKY_CONTROLS_FOR_CLOSED_RANGE_TOOLTIP}"
  })
  e.insertBlockProfile("controls_for_value", {
    type: "controls_for_value",
    message0: "%{BKY_CONTROLS_NUMBER}",
    output: "Number",
    required_context: "controls_for_DO",
    colour: "%{BKY_PARAM_BLOCK_COLOR}",
    extensions: ["param_block"]
  })
}
function A(e, t) {
  e.insertBlockXML("controls_if", ["\n    <value name=\"IF0\">\n      <empty type=\"logic_empty\">\n        <field name=\"BOOL\"></field>\n      </empty>\n    </value>\n  ", " \n    <mutation else=\"1\"></mutation>\n    <value name=\"IF0\">\n      <empty type=\"logic_empty\">\n        <field name=\"BOOL\"></field>\n      </empty>\n    </value>"])
  e.insertBlockXML("controls_for_closed_range", ["\n    <value name=\"FROM\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\",,1\">1</field>\n      </shadow>\n    </value>\n    <value name=\"TO\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\",,1\">10</field>\n      </shadow>\n    </value>\n    <value name=\"BY\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\",,1\">1</field>\n      </shadow>\n    </value>"])
  e.insertBlockXML("loop_finitely", "\n    <value name=\"TIMES\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"1,,1\">20</field>\n      </shadow>\n    </value>\n    ")
  e.insertBlockXML("sleep", "\n    <value name=\"SECONDS\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"0\">1</field>\n      </shadow>\n    </value>\n    ")
  e.insertBlockXML("loop_conditionally", "\n    <value name=\"CONDITION\">\n      <empty type=\"logic_empty\">\n        <field name=\"BOOL\"></field>\n      </empty>\n    </value>\n  ")
  e.insertBlockXML("loop_infinitely")
  e.insertBlockXML("wait_until", "\n    <value name=\"CONDITION\">\n      <empty type=\"logic_empty\">\n        <field name=\"BOOL\"></field>\n      </empty>\n    </value>\n    ")
  e.insertBlockXML("console_log", "\n    <mutation items=\"0\"></mutation>\n    <value name=\"VALUE\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">".concat(t.Msg.CONSOLE_LOG_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n    "))
  e.insertBlockXML("new_console_log", "\n    <mutation items=\"0\"></mutation>\n    <value name=\"VALUE\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">".concat(t.Msg.CONSOLE_LOG_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n    "))
  e.insertBlockXML("console_error", "\n    <mutation items=\"0\"></mutation>\n    <value name=\"VALUE\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">".concat(t.Msg.CONSOLE_ERROR_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n    "))
  e.insertBlockXML("break_loop")
  e.insertBlockXML("continue_loop")
}
function I(e) {
  e.insertBlockSnippetGenerator("loop_conditionally", function (t, n) {
    var r = e.valueToCode(t, n, "CONDITION", e.ORDER_FUNCTION_CALL) || "false"
    var o = e.statementToCode(t, n, "DO")
    return o ? Module_4.i("asyncScheduler.loopConditionally", o, [Module_4.g(r, true)]) : ""
  })
  e.insertBlockSnippetGenerator("break_loop", function () {
    return Module_4.i("asyncScheduler.breakLoop")
  })
  e.insertBlockSnippetGenerator("continue_loop", function () {
    return Module_4.i("asyncScheduler.continueLoop")
  })
  e.insertBlockSnippetGenerator("loop_finitely", function (t, n) {
    var r = e.valueToCode(t, n, "TIMES", e.ORDER_FUNCTION_CALL)
    var o = e.statementToCode(t, n, "DO")
    return o ? Module_4.i("asyncScheduler.loopFinitely", o, [r]) : ""
  })
  e.insertBlockSnippetGenerator("loop_infinitely", function (t, n) {
    var r = e.statementToCode(t, n, "DO")
    return r ? Module_4.i("asyncScheduler.loopInfinitely", r) : ""
  })
  e.insertBlockSnippetGenerator("sleep", function (t, n) {
    var r = e.valueToCode(t, n, "SECONDS", e.ORDER_FUNCTION_CALL) || "0"
    return "await AsyncScheduler.sleep(".concat(r, " * 1000);\n")
  })
  e.insertBlockSnippetGenerator("wait_until", function (t, n) {
    var r = e.valueToCode(t, n, "CONDITION", e.ORDER_FUNCTION_CALL) || "false"
    return Module_4.i("asyncScheduler.waitUntil", undefined, [Module_4.g(r, true)])
  })
  e.insertBlockSnippetGenerator("console_log", function (t, n) {
    for (var r = t.blocks[n], o = [e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""], /* [auto-meaningful-name] */r$mutation = r.mutation, a = Shared_packages_Crc_blink_src_index.Blink.xml.text_to_dom(r$mutation).getAttribute("items"), s = a ? parseInt(a) : 0, c = 0; c < s; c++) {
      var l = e.valueToCode(t, n, "VALUE".concat(c), e.ORDER_FUNCTION_CALL)
      if (l) {
        o.push(l)
      }
    }
    var u = e.getDynamicValue("__CURRENT_SCREEN_ID__")
    return Module_4.n("consoleLog", [Module_4.o(u), Module_4.o(r.id)].concat(o))
  })
  e.insertBlockSnippetGenerator("new_console_log", function (t, n) {
    for (var r = t.blocks[n], o = e.getFieldValue(r, "TYPE"), i = [e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""], /* [auto-meaningful-name] */r$mutation = r.mutation, s = Shared_packages_Crc_blink_src_index.Blink.xml.text_to_dom(r$mutation).getAttribute("items"), c = s ? parseInt(s) : 0, l = 0; l < c; l++) {
      var u = e.valueToCode(t, n, "VALUE".concat(l), e.ORDER_FUNCTION_CALL)
      if (u) {
        i.push(u)
      }
    }
    var /* [auto-meaningful-name] */consoleLog = "consoleLog"
    if (o === E.ERROR) {
      consoleLog = "consoleError"
    } else {
      if (o === E.WARNING) {
        consoleLog = "consoleWarning"
      }
    }
    var p = e.getDynamicValue("__CURRENT_SCREEN_ID__")
    return Module_4.n(consoleLog, [Module_4.o(p), Module_4.o(r.id)].concat(i))
  })
  e.insertBlockSnippetGenerator("console_error", function (t, n) {
    for (var r = t.blocks[n], o = [e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""], /* [auto-meaningful-name] */r$mutation = r.mutation, a = Shared_packages_Crc_blink_src_index.Blink.xml.text_to_dom(r$mutation).getAttribute("items"), s = a ? parseInt(a) : 0, c = 0; c < s; c++) {
      var l = e.valueToCode(t, n, "VALUE".concat(c), e.ORDER_FUNCTION_CALL)
      if (l) {
        o.push(l)
      }
    }
    var u = e.getDynamicValue("__CURRENT_SCREEN_ID__")
    return Module_4.n("consoleError", [Module_4.o(u), Module_4.o(r.id)].concat(o))
  })
  e.insertBlockSnippetGenerator("controls_for", function (t, n) {
    var r = e.valueToCode(t, n, "FROM", e.ORDER_FUNCTION_CALL)
    var o = e.valueToCode(t, n, "TO", e.ORDER_FUNCTION_CALL)
    var i = e.valueToCode(t, n, "BY", e.ORDER_FUNCTION_CALL)
    var a = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
    var s = e.statementToCode(t, n, "DO")
    return s ? Module_4.i("asyncScheduler.loopStep", s, [r, o, i], [a]) : ""
  })
  e.insertBlockSnippetGenerator("controls_for_closed_range", function (t, n) {
    var r = e.valueToCode(t, n, "FROM", e.ORDER_FUNCTION_CALL)
    var o = e.valueToCode(t, n, "TO", e.ORDER_FUNCTION_CALL)
    var i = e.valueToCode(t, n, "BY", e.ORDER_FUNCTION_CALL)
    var a = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
    var s = e.statementToCode(t, n, "DO")
    return s ? Module_4.i("asyncScheduler.loopStepClosedRange", s, [r, o, i], [a]) : ""
  })
  e.insertBlockSnippetGenerator("controls_for_value", function () {
    return "".concat(Module_4.a, "value")
  })
}
function j(e) {
  var /* [auto-meaningful-name] */ShadowTypeTextFieldNameTEXT_field_shadow = "<shadow type=\"text\"><field name=\"TEXT\"></field></shadow>"
  e.extensions.register_mutator("CONSOLE_MUTATOR", {
    updateShape_: function () {
      e.events.disable()
      for (var n = 0; n < this.itemCount_; n++) {
        var r = "VALUE".concat(n)
        if (!this.get_input(r)) {
          this.append_shadow_input(r, ShadowTypeTextFieldNameTEXT_field_shadow)
        }
      }
      if (0 === this.itemCount_) {
        if (this.get_input("MUTATE_REMOVE_BUTTON")) {
          this.remove_input("MUTATE_REMOVE_BUTTON")
        }
        if (!this.get_input("MUTATE_ADD_BUTTON")) {
          this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Module_4.p(), "MUTATE_ADD_BUTTON")
        }
      } else {
        if (!this.get_input("MUTATE_REMOVE_BUTTON")) {
          this.append_dummy_input("MUTATE_REMOVE_BUTTON").append_field(Module_4.q(undefined), "MUTATE_REMOVE_BUTTON")
        }
        if (!this.get_input("MUTATE_ADD_BUTTON")) {
          this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Module_4.p(), "MUTATE_ADD_BUTTON")
        }
      }
      e.events.enable()
    },
    addMutation: function (e) {
      var n = this
      var r = "VALUE".concat(this.itemCount_)
      Module_4.b.call(this, r, function () {
        if (!n.get_input("MUTATE_REMOVE_BUTTON")) {
          n.append_dummy_input("MUTATE_REMOVE_BUTTON", "MUTATE_ADD_BUTTON").append_field(Module_4.q(undefined), "MUTATE_REMOVE_BUTTON")
        }
        var e = n.append_value_input(r, "MUTATE_REMOVE_BUTTON")
        n.itemCount_++
        return e
      }, ShadowTypeTextFieldNameTEXT_field_shadow, e)
    },
    removeMutation: function () {
      var e = this
      var t = "VALUE".concat(this.itemCount_ - 1)
      Module_4.t.call(this, t, "TEXT", function () {
        e.remove_input(t)
        if (1 === e.itemCount_) {
          e.remove_input("MUTATE_REMOVE_BUTTON")
        }
        e.itemCount_--
      })
    },
    mutationToDom: function () {
      var e = document.createElement("mutation")
      e.setAttribute("items", String(this.itemCount_))
      return e
    },
    domToMutation: function (e) {
      this.itemCount_ = parseInt(e.getAttribute("items"), 10)
      this.cacheId = {}
      this.updateShape_()
    }
  })
}
function N(e, t) {
  e.insertBlockProfile("variables_get", {
    type: "variables_get",
    message0: "%1",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "VAR",
        custom: true,
        advancedOptions: function () {
          return Module_46.c().getPrimitiveVariableList(this)
        }
      }
    ],
    output: true,
    colour: "%{BKY_VARIABLES_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("variables_set", {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "VAR",
        custom: true,
        advancedOptions: function () {
          return Module_46.c().getPrimitiveVariableList(this)
        }
      }, {
        type: "input_value",
        name: "VALUE",
        align: "CENTRE"
      }
    ],
    inputsInline: true,
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_VARIABLES_HUE}"
  })
  e.insertBlockProfile("variables_change", {
    type: "variables_change",
    message0: "%{BKY_CHANGE_VARIABLE}",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "VAR",
        custom: true,
        advancedOptions: function () {
          return Module_46.c().getPrimitiveVariableList(this)
        }
      }, {
        type: "field_coco_dropdown",
        name: "METHOD",
        custom: true,
        options: function () {
          return [[t.Msg.INCREASE, "increase"], [t.Msg.DECREASE, "decrease"]]
        }
      }, {
        type: "input_value",
        name: "VALUE",
        check: ["Number", "String", "Boolean", "Array"],
        align: "CENTRE"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_VARIABLES_HUE}",
    inputsInline: true
  })
}
function R(e) {
  e.insertBlockXML("variables_get", "", true)
  e.insertBlockXML("variables_set", "<value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\">0</field>\n        </shadow>\n    </value>", true)
  e.insertBlockXML("variables_change", "<value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\">1</field>\n        </shadow>\n    </value>", true)
}
function k(e) {
  e.insertBlockSnippetGenerator("variables_get", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "VAR")
    return o !== Module_9.h && o ? Module_4.s("getVariableValue", [Module_4.o(o)]) : ""
  })
  e.insertBlockSnippetGenerator("variables_set", function (t, n) {
    var r = t.blocks[n]
    var o = e.valueToCode(t, n, "VALUE", e.ORDER_ASSIGNMENT) || "0"
    var i = e.getFieldValue(r, "VAR") || ""
    return i !== Module_9.h && i ? Module_4.n("setVariableValue", [Module_4.o(i), o]) : ""
  })
  e.insertBlockSnippetGenerator("variables_change", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "METHOD") || ""
    var i = e.getFieldValue(r, "VAR") || ""
    var a = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || "0"
    var s = Number(a)
    if (!isNaN(s)) {
      a = s > 0 ? a : "(".concat(a, ")")
    }
    return "increase" === o ? Module_4.n("increaseVariable", [Module_4.o(i), a]) : "decrease" === o ? Module_4.n("decreaseVariable", [Module_4.o(i), a]) : ""
  })
}
!function (e) {
  e.LOG = "LOG"
  e.ERROR = "ERROR"
  e.WARNING = "WARNING"
}(E || (E = {}))
export { w }
export { C }
export { T }
export { S }
export { A }
export { I }
export { j }
export { N }
export { R }
export { k }
