/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-4
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../../../../../unrestored/shared/1571/2636/4"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */Module_173 from /* 173 */"../../../../../unrestored/shared/1571/2636/1058/173"
function oe(e) {
  e.insertBlockProfile("procedures_2_param_block", {
    type: "procedures_2_param_block",
    message0: "%1",
    args0: [
      {
        type: "field_label_serializable",
        name: "param",
        text: "x"
      }
    ],
    output: true,
    colour: "%{BKY_PARAM_BLOCK_COLOR}",
    extensions: ["param_block"]
  })
}
function ie(e) {
  e.insertBlockXML(Module_173.PROCEDURE_BLOCK_TYPES.DEF, "", true)
  e.insertBlockXML(Module_173.PROCEDURE_BLOCK_TYPES.CALL_RETURN, "", true)
  e.insertBlockXML(Module_173.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, "", true)
}
function ae(e) {
  function t(t, n, r) {
    var o = n.blocks[r]
    var i = e.getDynamicValue("__CURRENT_SCREEN_ID__")
    var a = e.getFieldValue(o, "NAME") || ""
    var s = Module_4.f(a, i)
    var c = Object.keys(o.shadows).filter(function (e) {
      return e.startsWith("ARG")
    }).map(function (t) {
      return e.valueToCode(n, r, t, e.ORDER_ATOMIC)
    })
    return Module_4.l("(await Coco.tryExecute(".concat([
      "".concat(s), JSON.stringify({
        functionName: s,
        screenId: i
      })
    ].concat(Module_25.a(c)).join(", "), "))"), o, e, true, true)
  }
  e.insertBlockSnippetGenerator("procedures_2_param_block", function (t, n) {
    var r = t.blocks[n]
    return e.getFieldValue(r, "param") || ""
  })
  e.insertBlockSnippetGenerator(Module_173.PROCEDURE_BLOCK_TYPES.DEF, function (t, n) {
    var r = t.blocks[n]
    var o = e.getDynamicValue("__CURRENT_SCREEN_ID__")
    var i = e.getFieldValue(r, "NAME") || ""
    var a = Object.keys(r.shadows).filter(function (e) {
      return e.startsWith("PARAMS")
    }).map(function (r) {
      return e.valueToCode(t, n, r, e.ORDER_ATOMIC)
    })
    e.setDynamicValue("__DEFINING_PROCEDURE__", "true")
    var s = e.statementToCode(t, n, "STACK")
    e.deleteDynamicValue("__DEFINING_PROCEDURE__")
    return "async function ".concat(Module_4.f(i, o), "(").concat(a.join(", "), ") {\n").concat(s, "}\n")
  })
  e.insertBlockSnippetGenerator(Module_173.PROCEDURE_BLOCK_TYPES.RETURN, function (t, n) {
    var r = t.blocks[n]
    return "return /* blockId=".concat(n, ";blockType=").concat(Module_173.PROCEDURE_BLOCK_TYPES.RETURN, " */ ").concat(Object.keys(r.shadows).length + Object.keys(r.fields).length > 2 ? e.valueToCode(t, n, "VALUE", e.ORDER_NONE) : "", ";\n")
  })
  e.insertBlockSnippetGenerator(Module_173.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, function (e, n) {
    return t(Module_173.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, e, n) + ";\n"
  })
  e.insertBlockSnippetGenerator(Module_173.PROCEDURE_BLOCK_TYPES.CALL_RETURN, function (n, r) {
    return [t(Module_173.PROCEDURE_BLOCK_TYPES.CALL_RETURN, n, r), e.ORDER_FUNCTION_CALL]
  })
  e.insertBlockSnippetGenerator(Module_173.PROCEDURE_BLOCK_TYPES.PARAM, function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "param_name")
    return [o ? "".concat(o, " /* blockId=").concat(n, ";blockType=").concat(Module_173.PROCEDURE_BLOCK_TYPES.PARAM, " */") : "", e.ORDER_ATOMIC]
  })
  e.insertBlockSnippetGenerator(Module_173.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK, function (t, n) {
    var r = t.blocks[n]
    return [e.getFieldValue(r, "param_name") || "", e.ORDER_ATOMIC]
  })
}
function se(e, t) {
  e.insertBlockProfile("date_get_current_date", {
    type: "date_get_current_date",
    message0: "%{BKY_DATE_GET_CURRENT_DATE}",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "DATE_TYPE",
        custom: true,
        options: function () {
          return [[t.Msg.DATE_CURRENT_TIME, "time"], [t.Msg.DATE_CURRENT_YEAR, "year"], [t.Msg.DATE_CURRENT_MONTH, "month"], [t.Msg.DATE_CURRENT_DATE, "date"], [t.Msg.DATE_CURRENT_DAY_NAME, "dayName"], [t.Msg.DATE_CURRENT_DAY_NUM, "day"], [t.Msg.DATE_CURRENT_HOUR, "hour"], [t.Msg.DATE_CURRENT_MINUTE, "minute"], [t.Msg.DATE_CURRENT_SECOND, "second"]]
        }
      }
    ],
    output: ["Number", "String"],
    colour: "%{BKY_BLUE_6}",
    inputsInline: true,
    tooltip: "%{BKY_DATE_GET_CURRENT_DATE_TOOLTIP}"
  })
  e.insertBlockProfile("date_check_date_is_equal", {
    type: "date_check_date_is_equal",
    message0: "%{BKY_DATE_CHECK_DATE_IS_EQUAL}",
    args0: [
      {
        type: "input_value",
        name: "DATE_A",
        check: "String"
      }, {
        type: "input_value",
        name: "DATE_B",
        check: "String"
      }
    ],
    output: "Boolean",
    colour: "%{BKY_BLUE_6}",
    inputsInline: true
  })
  e.insertBlockProfile("date_get_date_minus_operation", {
    type: "date_get_date_minus_operation",
    message0: "%{BKY_DATE_GET_DATE_MINUS_OPERATION}",
    args0: [
      {
        type: "input_value",
        name: "DATE_A",
        check: "String"
      }, {
        type: "input_value",
        name: "DATE_B",
        check: "String"
      }, {
        type: "field_coco_dropdown",
        name: "OPERATION_TYPE",
        custom: true,
        options: [["%{BKY_DAYS}", "days"], ["%{BKY_YEAR}", "year"], ["%{BKY_MONTH}", "month"], ["%{BKY_HOUR}", "hour"], ["%{BKY_MINUTE}", "minute"], ["%{BKY_SECOND}", "second"]]
      }
    ],
    output: "Number",
    colour: "%{BKY_BLUE_6}",
    inputsInline: true
  })
}
function ce(e) {
  e.insertBlockSnippetGenerator("date_get_current_date", function (t, n) {
    var r = t.blocks[n]
    switch (e.getFieldValue(r, "DATE_TYPE")) {
      case "time":
        return Module_4.s("getCurrentFormatDateTime")
      case "year":
        return Module_4.s("getCurrentYear")
      case "month":
        return Module_4.s("getCurrentMonth")
      case "date":
        return Module_4.s("getCurrentDate")
      case "dayName":
        return Module_4.s("getCurrentDayName")
      case "day":
        return Module_4.s("getCurrentDay")
      case "hour":
        return Module_4.s("getCurrentHour")
      case "minute":
        return Module_4.s("getCurrentMinute")
      case "second":
        return Module_4.s("getCurrentSecond")
      default:
        return ""
    }
  })
  e.insertBlockSnippetGenerator("date_check_date_is_equal", function (t, n) {
    var r = e.valueToCode(t, n, "DATE_A", e.ORDER_FUNCTION_CALL)
    var o = e.valueToCode(t, n, "DATE_B", e.ORDER_FUNCTION_CALL)
    return r && o ? Module_4.s("checkDateIsEqual", [r, o]) : ""
  })
  e.insertBlockSnippetGenerator("date_get_date_minus_operation", function (t, n) {
    var r = e.valueToCode(t, n, "DATE_A", e.ORDER_FUNCTION_CALL)
    var o = e.valueToCode(t, n, "DATE_B", e.ORDER_FUNCTION_CALL)
    var i = t.blocks[n]
    var a = e.getFieldValue(i, "OPERATION_TYPE")
    return a && r && o ? Module_4.s("getDateOperation", [r, o, Module_4.o(a)]) : ""
  })
}
export { oe }
export { ie }
export { ae }
export { se }
export { ce }
