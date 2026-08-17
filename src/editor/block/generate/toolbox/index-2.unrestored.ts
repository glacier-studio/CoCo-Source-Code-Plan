/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-3
 */

"use strict"

var F
var B
var P
var L
var M
var D
var x
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../../unrestored/shared/1571/2636/46/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../../../../../unrestored/shared/1571/2636/4"
import * as /* [auto-meaningful-name] */Module_323 from /* 323 */"../../../../../unrestored/shared/1571/2636/323"
var /* [auto-meaningful-name] */ShadowTypeMath_numberFieldNameNUMConstraints111_field_shadow = "<shadow type=\"math_number\"><field name=\"NUM\" constraints=\"1,,1\">1</field></shadow>"
function U(e, t) {
  function n(e) {
    if (!t.events.is_undoing()) {
      var /* [auto-meaningful-name] */o$addMutation
      var /* [auto-meaningful-name] */o$removeMutation
      var /* [auto-meaningful-name] */this$source_block = this.source_block
      if (o) {
        if ("nth" === e) {
          if (!(null === (o$addMutation = o.addMutation) || undefined === o$addMutation)) {
            o$addMutation.call(o)
          }
        } else if (!(null === (o$removeMutation = o.removeMutation) || undefined === o$removeMutation)) {
          o$removeMutation.call(o)
        }
      }
    }
  }
  e.insertBlockProfile("array_get", {
    type: "array_get",
    message0: "%1",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "ARRAY",
        custom: true,
        advancedOptions: function () {
          return Module_46.c().getArrayVariableList(this)
        }
      }
    ],
    output: "Array",
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("lists_append", {
    type: "lists_append",
    message0: "%{BKY_LISTS_APPEND}",
    args0: [
      {
        type: "input_value",
        name: "VALUE"
      }, {
        type: "input_value",
        name: "ARRAY",
        check: ["Array"]
      }
    ],
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: true,
    previousStatement: true,
    nextStatement: true
  })
  e.insertBlockProfile("lists_insert_value", {
    type: "lists_insert_value",
    message0: "%{BKY_INSERT_LISTS_ITEM_BY_INDEX}",
    args0: [
      {
        type: "input_value",
        name: "ARRAY",
        check: ["Array"]
      }, {
        type: "input_value",
        check: "Number",
        name: "INDEX",
        align: "CENTRE"
      }, {
        type: "input_value",
        name: "VALUE",
        align: "CENTRE"
      }
    ],
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: true,
    previousStatement: true,
    nextStatement: true
  })
  e.insertBlockProfile("array_copy", {
    type: "array_copy",
    message0: "%{BKY_COPY_ARRAY}",
    args0: [
      {
        type: "input_value",
        name: "FROM",
        check: ["Array"]
      }, {
        type: "input_value",
        name: "TO",
        check: ["Array"]
      }
    ],
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: true,
    previousStatement: true,
    nextStatement: true
  })
  e.insertBlockProfile("array_get_length", {
    type: "array_get_length",
    message0: "%{BKY_GET_ARRAY_LENGTH}",
    args0: [
      {
        type: "input_value",
        name: "ARRAY",
        check: ["Array"]
      }
    ],
    output: "Number",
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("lists_index_of", {
    type: "lists_index_of",
    message0: "%{BKY_GET_ARRAY_ITEM_INDEX}",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        align: "CENTRE"
      }, {
        type: "input_value",
        name: "ARRAY",
        check: ["Array"]
      }
    ],
    colour: "%{BKY_LISTS_HUE}",
    output: "Number",
    inputsInline: true
  })
  e.insertBlockProfile("lists_is_exist", {
    type: "lists_is_exist",
    message0: "%{BKY_CHECK_ITEM_IN_ARRAY}",
    args0: [
      {
        type: "input_value",
        name: "ARRAY",
        check: ["Array"]
      }, {
        type: "input_value",
        name: "VALUE",
        align: "CENTRE"
      }
    ],
    colour: "%{BKY_LISTS_HUE}",
    output: "Boolean",
    inputsInline: true
  })
  e.insertBlockProfile("array_remove_item", {
    type: "array_remove_item",
    message0: "%{BKY_REMOVE_ARRAY_ITEM}",
    args0: [
      {
        type: "input_value",
        name: "ARRAY",
        check: ["Array"]
      }, {
        type: "field_coco_dropdown",
        name: "ITEM_POS",
        custom: true,
        optOnchange: n,
        options: function () {
          return [[t.Msg.NTH, "nth"], [t.Msg.LAST_ITEM, "lastItem"], [t.Msg.ALL_ITEM, "allItem"]]
        }
      }
    ],
    message1: "%1",
    args1: [
      {
        type: "input_value",
        name: "INDEX",
        check: ["Number"]
      }
    ],
    message2: "%{BKY_ARRAY_ITEM} %1",
    args2: [
      {
        type: "input_dummy",
        name: "ITEM"
      }
    ],
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: true,
    previousStatement: true,
    nextStatement: true,
    mutator: "ARRAY_ITEM_MUTATOR"
  })
  e.insertBlockProfile("lists_replace", {
    type: "lists_replace",
    message0: "%{BKY_LISTS_REPLACE}",
    args0: [
      {
        type: "input_value",
        name: "ARRAY",
        check: ["Array"]
      }, {
        type: "field_coco_dropdown",
        name: "ITEM_POS",
        custom: true,
        optOnchange: n,
        options: function () {
          return [[t.Msg.NTH, "nth"], [t.Msg.LAST_ITEM, "lastItem"]]
        }
      }
    ],
    message1: "%1",
    args1: [
      {
        type: "input_value",
        name: "INDEX",
        check: ["Number"]
      }
    ],
    message2: "%{BKY_ARRAY_ITEM} %1",
    args2: [
      {
        type: "input_dummy",
        name: "ITEM"
      }
    ],
    message3: "%{BKY_IS} %1",
    args3: [
      {
        type: "input_value",
        name: "VALUE"
      }
    ],
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: true,
    previousStatement: true,
    nextStatement: true,
    mutator: "ARRAY_ITEM_MUTATOR"
  })
  e.insertBlockProfile("array_get_item", {
    type: "array_get_item",
    message0: "%1 %2",
    args0: [
      {
        type: "input_value",
        name: "ARRAY",
        check: ["Array"]
      }, {
        type: "field_coco_dropdown",
        name: "ITEM_POS",
        custom: true,
        optOnchange: n,
        options: function () {
          return [[t.Msg.NTH, "nth"], [t.Msg.LAST_ITEM, "lastItem"]]
        }
      }
    ],
    message1: "%1",
    args1: [
      {
        type: "input_value",
        name: "INDEX",
        check: ["Number"]
      }
    ],
    message2: "%{BKY_ARRAY_ITEM} %1",
    args2: [
      {
        type: "input_dummy",
        name: "ITEM"
      }
    ],
    colour: "%{BKY_LISTS_HUE}",
    output: true,
    inputsInline: true,
    mutator: "ARRAY_ITEM_MUTATOR"
  })
  e.insertBlockProfile("array_current_item", {
    type: "array_current_item",
    message0: "%{BKY_ARRAY_CURRENT_ITEM}",
    output: ["String", "Number", "Array", "Boolean"],
    required_context: "array_foreach_DO",
    colour: "%{BKY_PARAM_BLOCK_COLOR}",
    extensions: ["param_block"]
  })
  e.insertBlockProfile("array_foreach", {
    type: "array_foreach",
    message0: "%{BKY_ARRAY_FOREACH}",
    args0: [
      {
        type: "input_value",
        name: "ARRAY",
        check: ["Array"]
      }, {
        type: "input_value",
        name: "ARRAY_CURRENT_ITEM",
        default_shadow: "<shadow type=\"array_current_item\" />"
      }, {
        type: "input_dummy",
        align: "CENTRE"
      }, {
        type: "input_statement",
        name: "DO",
        provided_context: "array_foreach_DO"
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: true
  })
}
function H(e) {
  e.insertBlockXML("lists_replace", "\n    <mutation pos='nth'></mutation>\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"1,,1\">1</field>\n      </shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n    ", true)
  e.insertBlockXML("array_remove_item", "\n    <mutation pos='nth'></mutation>\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints='1,,1'>1</field>\n      </shadow>\n    </value>\n  ", true)
  e.insertBlockXML("array_get", undefined, true)
  e.insertBlockXML("lists_append", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", true)
  e.insertBlockXML("lists_insert_value", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints='1,,1'>1</field>\n      </shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", true)
  e.insertBlockXML("array_copy", "\n    <value name=\"FROM\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"TO\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    ", true)
  e.insertBlockXML("array_get_item", "\n    <mutation pos='nth'></mutation>\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints='1,,1'>1</field>\n      </shadow>\n    </value>\n  ", true)
  e.insertBlockXML("array_get_length", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    ", true)
  e.insertBlockXML("lists_index_of", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", true)
  e.insertBlockXML("lists_is_exist", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", true)
  e.insertBlockXML("array_foreach", "<value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>", true)
}
function V(e) {
  e.insertBlockSnippetGenerator("array_get", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "ARRAY") || ""
    return Module_4.s("getVariableValue", [Module_4.o(o)])
  })
  var t = function (t, n) {
    var r = Module_323.a(n)
    var o = r.blockId && t.blocks[r.blockId]
    return o && e.getFieldValue(o, "ARRAY") || ""
  }
  e.insertBlockSnippetGenerator("lists_append", function (n, r) {
    var o = n.blocks[r]
    var i = e.valueToCode(n, r, "ARRAY", e.ORDER_FUNCTION_CALL)
    var a = t(n, i)
    var s = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
    return Module_4.l(Module_4.n("pushArrayItem", [i, s, Module_4.o(a)]), o, e)
  })
  e.insertBlockSnippetGenerator("lists_insert_value", function (n, r) {
    var o = n.blocks[r]
    var i = e.valueToCode(n, r, "ARRAY", e.ORDER_FUNCTION_CALL)
    var a = t(n, i)
    var s = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
    var c = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
    return Module_4.l(Module_4.n("insertArrayItemByIndex", [i, s, c + " - 1", Module_4.o(a)]), o, e)
  })
  e.insertBlockSnippetGenerator("array_remove_item", function (n, r) {
    var o = e.valueToCode(n, r, "ARRAY", e.ORDER_FUNCTION_CALL)
    var i = t(n, o)
    var a = n.blocks[r]
    var s = e.getFieldValue(a, "ITEM_POS") || ""
    if ("nth" === s) {
      var c = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
      return Module_4.l(Module_4.n("removeArrayItemByIndex", [o, c + " - 1", Module_4.o(i)]), a, e)
    }
    return "lastItem" === s ? Module_4.l(Module_4.n("removeLastArrayItem", [o, Module_4.o(i)]), a, e) : Module_4.l(Module_4.n("removeAllArrayItem", [o, Module_4.o(i)]), a, e)
  })
  e.insertBlockSnippetGenerator("lists_replace", function (n, r) {
    var o = n.blocks[r]
    var i = e.valueToCode(n, r, "ARRAY", e.ORDER_FUNCTION_CALL)
    var a = t(n, i)
    var s = e.getFieldValue(o, "ITEM_POS") || ""
    var c = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
    if ("nth" === s) {
      var l = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
      return Module_4.l(Module_4.n("setArrayItemByIndex", [i, c, l + " - 1", Module_4.o(a)]), o, e)
    }
    return Module_4.l(Module_4.n("setArrayLastItem", [i, c, Module_4.o(a)]), o, e)
  })
  e.insertBlockSnippetGenerator("array_copy", function (n, r) {
    var o = n.blocks[r]
    var i = e.valueToCode(n, r, "FROM", e.ORDER_FUNCTION_CALL)
    var a = e.valueToCode(n, r, "TO", e.ORDER_FUNCTION_CALL)
    return Module_4.l(Module_4.n("copyArray", [i, a, Module_4.o(t(n, a))]), o, e)
  })
  e.insertBlockSnippetGenerator("array_get_item", function (t, n) {
    var r = t.blocks[n]
    var o = e.valueToCode(t, n, "ARRAY", e.ORDER_FUNCTION_CALL)
    if ("nth" === (e.getFieldValue(r, "ITEM_POS") || "")) {
      var i = e.valueToCode(t, n, "INDEX", e.ORDER_FUNCTION_CALL)
      return Module_4.l(Module_4.s("getArrayItemByIndex", [o, i + " - 1"]), r, e, false, true)
    }
    return Module_4.l(Module_4.s("getArrayLastItem", [o]), r, e, false, true)
  })
  e.insertBlockSnippetGenerator("array_get_length", function (t, n) {
    var r = e.valueToCode(t, n, "ARRAY", e.ORDER_FUNCTION_CALL)
    return Module_4.s("getArrayLength", [r])
  })
  e.insertBlockSnippetGenerator("lists_index_of", function (t, n) {
    var r = t.blocks[n]
    var o = e.valueToCode(t, n, "ARRAY", e.ORDER_FUNCTION_CALL)
    var i = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
    return Module_4.l(Module_4.s("getArrayItemIndex", [o, i, "1"]), r, e, false, true)
  })
  e.insertBlockSnippetGenerator("lists_is_exist", function (t, n) {
    var r = e.valueToCode(t, n, "ARRAY", e.ORDER_FUNCTION_CALL)
    var o = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
    return Module_4.s("checkItemInArray", [r, o])
  })
  e.insertBlockSnippetGenerator("array_current_item", function () {
    return "arrayCurrentItem"
  })
  e.insertBlockSnippetGenerator("array_foreach", function (t, n) {
    var r = e.valueToCode(t, n, "ARRAY", e.ORDER_FUNCTION_CALL)
    var o = e.valueToCode(t, n, "ARRAY_CURRENT_ITEM", e.ORDER_FUNCTION_CALL)
    var i = e.statementToCode(t, n, "DO")
    return i ? Module_4.l(Module_4.i("asyncScheduler.listForEach", i, [r], [o]), t.blocks[n], e, true) : ""
  })
}
function z(e) {
  e.extensions.register_mutator("ARRAY_ITEM_MUTATOR", {
    updateShape_: function (t) {
      var n = "add" === t
      var r = this.get_input("INDEX")
      if (n) {
        if (!r) {
          var o = this.get_input_index("VALUE")
          var i = -1 === o ? o : 2
          this.append_shadow_input("INDEX", ShadowTypeMath_numberFieldNameNUMConstraints111_field_shadow, i).set_check("Number")
          this.append_dummy_input("ITEM", i + 1).append_field(e.Msg.ARRAY_ITEM)
        }
      } else if (r) {
        this.remove_input("INDEX")
        this.remove_input("ITEM")
      }
    },
    addMutation: function (t) {
      var n = this
      Module_4.b.call(this, "INDEX", function () {
        var t = n.get_input_index("VALUE")
        var r = -1 === t ? 2 : t
        var o = n.append_value_input("INDEX", r).set_check("Number")
        n.append_dummy_input("ITEM", r + 1).append_field(e.Msg.ARRAY_ITEM)
        return o
      }, ShadowTypeMath_numberFieldNameNUMConstraints111_field_shadow, t)
    },
    removeMutation: function () {
      var e = this
      Module_4.t.call(this, "INDEX", "NUM", function () {
        e.remove_input("INDEX")
        e.remove_input("ITEM")
      })
    },
    domToMutation: function () {
      var e
      this.cacheId = {}
      var t = null === (e = this.get_field("ITEM_POS")) || undefined === e ? undefined : e.get_value()
      this.updateShape_("nth" === t ? "add" : "remove")
    },
    mutationToDom: function () {
      var e
      var t = document.createElement("mutation")
      var n = null === (e = this.get_field("ITEM_POS")) || undefined === e ? undefined : e.get_value()
      t.setAttribute("pos", n || "")
      return t
    }
  })
}
function Y(e, t) {
  e.insertBlockProfile("object_get", {
    type: "object_get",
    message0: "%{BKY_OBJECT_GET}",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "OBJECT",
        custom: true,
        advancedOptions: function () {
          return Module_46.c().getObjectVariableList(this)
        }
      }
    ],
    output: "Object",
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("object_create", {
    type: "object_create",
    message0: "",
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: true,
    output: "Object",
    mutator: "OBJECT_CREATE_MUTATOR"
  })
  e.insertBlockProfile("object_set_item", {
    type: "object_set_item",
    message0: "%{BKY_OBJECT_SET_ITEM}",
    args0: [
      {
        type: "input_value",
        name: "OBJECT",
        check: ["Object"]
      }, {
        type: "input_value",
        name: "KEY",
        check: ["String", "Number"]
      }, {
        type: "input_value",
        name: "VALUE"
      }
    ],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: true,
    previousStatement: true,
    nextStatement: true
  })
  e.insertBlockProfile("object_delete_item", {
    type: "object_delete_item",
    message0: "%{BKY_OBJECT_DELETE_ITEM}",
    args0: [
      {
        type: "input_value",
        name: "OBJECT",
        check: ["Object"]
      }, {
        type: "input_value",
        name: "KEY",
        check: ["String", "Number"]
      }
    ],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: true,
    previousStatement: true,
    nextStatement: true
  })
  e.insertBlockProfile("object_clear", {
    type: "object_clear",
    message0: "%{BKY_OBJECT_CLEAR}",
    args0: [
      {
        type: "input_value",
        name: "OBJECT",
        check: ["Object"]
      }
    ],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: true,
    previousStatement: true,
    nextStatement: true
  })
  e.insertBlockProfile("object_length", {
    type: "object_length",
    message0: "%{BKY_OBJECT_LENGTH}",
    args0: [
      {
        type: "input_value",
        name: "OBJECT",
        check: ["Object"]
      }
    ],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: true,
    output: "Number"
  })
  e.insertBlockProfile("object_get_item", {
    type: "object_get_item",
    message0: "%{BKY_OBJECT_GET_ITEM}",
    args0: [
      {
        type: "input_value",
        name: "OBJECT",
        check: ["Object"]
      }, {
        type: "input_value",
        name: "KEY",
        check: ["String", "Number"]
      }
    ],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: true,
    output: true
  })
  e.insertBlockProfile("object_include_key", {
    type: "object_include_key",
    message0: "%{BKY_OBJECT_INCLUDE_KEY}",
    args0: [
      {
        type: "input_value",
        name: "OBJECT",
        check: ["Object"]
      }, {
        type: "input_value",
        name: "KEY",
        check: ["String", "Number"]
      }
    ],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: true,
    output: "Boolean"
  })
}
function K(e) {
  e.insertBlockXML("object_get", undefined, true)
  e.insertBlockXML("object_create", "<mutation items='1'></mutation>", true)
  e.insertBlockXML("object_set_item", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>\n    <value name=\"KEY\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">key</field>\n      </shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" allow_text=\"true\">0</field>\n      </shadow>\n    </value>", true)
  e.insertBlockXML("object_delete_item", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>\n    <value name=\"KEY\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">key</field>\n      </shadow>\n    </value>", true)
  e.insertBlockXML("object_clear", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>", true)
  e.insertBlockXML("object_length", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>", true)
  e.insertBlockXML("object_get_item", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>\n    <value name=\"KEY\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">key</field>\n      </shadow>\n    </value>", true)
  e.insertBlockXML("object_include_key", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>\n    <value name=\"KEY\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">key</field>\n      </shadow>\n    </value>", true)
}
function q(e) {
  var t = function (t, n) {
    var r = Module_323.a(n)
    var o = r.blockId && t.blocks[r.blockId]
    var i = o && e.getFieldValue(o, "OBJECT")
    return JSON.stringify(i)
  }
  e.insertBlockSnippetGenerator("object_get", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "OBJECT") || ""
    return Module_4.s("getVariableValue", [Module_4.o(o)])
  })
  e.insertBlockSnippetGenerator("object_create", function (t, n) {
    for (var r = 0, o = "[";;) {
      var i = e.valueToCode(t, n, "KEY".concat(r), e.ORDER_FUNCTION_CALL)
      var a = e.valueToCode(t, n, "VALUE".concat(r), e.ORDER_FUNCTION_CALL)
      if (!i || !a) {
        break
      }
      o += "[".concat(i, ", ").concat(a, "],")
      r++
    }
    o += "]"
    var s = t.blocks[n]
    return Module_4.l(Module_4.s("createTempObject", [o]), s, e, false, true)
  })
  e.insertBlockSnippetGenerator("object_set_item", function (n, r) {
    var o = n.blocks[r]
    var i = e.valueToCode(n, r, "OBJECT", e.ORDER_FUNCTION_CALL)
    var a = e.valueToCode(n, r, "KEY", e.ORDER_FUNCTION_CALL)
    var s = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
    var c = t(n, i)
    return Module_4.l(Module_4.n("setObjectItem", [c, i, a, s]), o, e)
  })
  e.insertBlockSnippetGenerator("object_delete_item", function (n, r) {
    var o = n.blocks[r]
    var i = e.valueToCode(n, r, "OBJECT", e.ORDER_FUNCTION_CALL)
    var a = e.valueToCode(n, r, "KEY", e.ORDER_FUNCTION_CALL)
    var s = t(n, i)
    return Module_4.l(Module_4.n("deleteObjectItem", [s, i, a]), o, e)
  })
  e.insertBlockSnippetGenerator("object_get_item", function (t, n) {
    var r = e.valueToCode(t, n, "OBJECT", e.ORDER_FUNCTION_CALL)
    var o = e.valueToCode(t, n, "KEY", e.ORDER_FUNCTION_CALL)
    var i = t.blocks[n]
    return Module_4.l(Module_4.s("getObjectItem", [r, o]), i, e, false, true)
  })
  e.insertBlockSnippetGenerator("object_clear", function (n, r) {
    var o = n.blocks[r]
    var i = e.valueToCode(n, r, "OBJECT", e.ORDER_FUNCTION_CALL)
    var a = t(n, i)
    return Module_4.l(Module_4.n("clearObject", [a, i]), o, e)
  })
  e.insertBlockSnippetGenerator("object_length", function (t, n) {
    var r = e.valueToCode(t, n, "OBJECT", e.ORDER_FUNCTION_CALL)
    var o = t.blocks[n]
    return Module_4.l(Module_4.s("getObjectLength", [r]), o, e, false, true)
  })
  e.insertBlockSnippetGenerator("object_include_key", function (t, n) {
    var r = e.valueToCode(t, n, "OBJECT", e.ORDER_FUNCTION_CALL)
    var o = e.valueToCode(t, n, "KEY", e.ORDER_FUNCTION_CALL)
    var i = t.blocks[n]
    return Module_4.l(Module_4.s("checkKeyInObject", [r, o]), i, e, false, true)
  })
}
function X(e) {
  e.extensions.register_mutator("OBJECT_CREATE_MUTATOR", {
    itemCount_: 0,
    updateShape_: function () {
      e.events.disable()
      if (!this.get_input("TITLE")) {
        this.append_dummy_input("TITLE").append_field(e.Msg.OBJECT, "TEXT")
      }
      if (this.get_input("MUTATE_REMOVE_BUTTON")) {
        this.remove_input("MUTATE_REMOVE_BUTTON")
      }
      if (this.get_input("MUTATE_ADD_BUTTON")) {
        this.remove_input("MUTATE_ADD_BUTTON")
      }
      for (var /* [auto-meaningful-name] */this$itemCount_ = this.itemCount_;; this$itemCount_++) {
        var n = "KEY".concat(this$itemCount_)
        if (!this.get_input(n)) {
          break
        }
        this.remove_input(n)
        var r = "VALUE".concat(this$itemCount_)
        if (!this.get_input(r)) {
          break
        }
        this.remove_input(r)
      }
      for (var o = 0; o < this.itemCount_; o++) {
        var i = "KEY".concat(o)
        if (!this.get_input(i)) {
          var a = this.append_shadow_input(i, "<shadow type=\"text\"><field name=\"TEXT\">key".concat(o + 1, "</field></shadow>"))
          a.set_check(["Number", "String"])
          if (0 !== o) {
            a.append_field(",")
          }
        }
        var s = "VALUE".concat(o)
        if (!this.get_input(s)) {
          this.append_shadow_input(s, "<shadow type=\"math_number\"><field name=\"NUM\" allow_text=\"true\">0</field></shadow>").append_field(":")
        }
      }
      if (0 === this.itemCount_) {
        if (this.get_input("MUTATE_REMOVE_BUTTON")) {
          this.remove_input("MUTATE_REMOVE_BUTTON")
        }
        this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Module_4.p(), "MUTATE_ADD_BUTTON")
      } else {
        this.append_dummy_input("MUTATE_REMOVE_BUTTON").append_field(Module_4.q(undefined), "MUTATE_REMOVE_BUTTON")
        this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Module_4.p(), "MUTATE_ADD_BUTTON")
      }
      e.events.enable()
    },
    addMutation: function (t) {
      if (e.events.is_undoing()) {
        if ("number" === typeof t) {
          this.itemCount_ = t
          this.updateShape_()
        }
      } else {
        var /* [auto-meaningful-name] */this$itemCount_ = this.itemCount_
        this.itemCount_++
        this.updateShape_()
        var r = Module_4.c("mutation", {
          block: this,
          old_value: n,
          new_value: this.itemCount_
        })
        e.events.fire(r)
      }
    },
    removeMutation: function (t) {
      if (e.events.is_undoing()) {
        if ("number" === typeof t) {
          this.itemCount_ = t
          this.updateShape_()
        }
      } else {
        var /* [auto-meaningful-name] */this$itemCount_ = this.itemCount_
        this.itemCount_--
        this.updateShape_()
        var r = Module_4.c("mutation", {
          block: this,
          old_value: n,
          new_value: this.itemCount_
        })
        e.events.fire(r)
      }
    },
    mutationToDom: function () {
      var e = document.createElement("mutation")
      e.setAttribute("items", String(this.itemCount_))
      return e
    },
    domToMutation: function (e) {
      this.itemCount_ = parseInt(e.getAttribute("items"), 10)
      this.updateShape_()
    }
  })
}
function Q(e, t) {
  var /* [auto-meaningful-name] */BKY_BLOCK_CLOUD_ICON = "%{BKY_BLOCK_CLOUD_ICON}"
  e.insertBlockProfile("app_on_mount", {
    type: "app_on_mount",
    message0: "%{BKY_APP_ON_MOUNT}",
    args0: [
      Module_4.e(BKY_BLOCK_CLOUD_ICON, true), {
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
  e.insertBlockProfile("app_on_switch_background", {
    type: "app_on_switch_background",
    message0: "%{BKY_APP_ON_SWITCH}",
    args0: [
      Module_4.e(BKY_BLOCK_CLOUD_ICON, true), {
        type: "field_coco_dropdown",
        name: "APP_STATE",
        custom: true,
        options: function () {
          return [[t.Msg.APP_BACKGROUND, "background"], [t.Msg.APP_ACTIVE, "active"]]
        }
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
  e.insertBlockProfile("broadcast_input", {
    type: "broadcast_input",
    message0: "%1",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "BROADCAST",
        custom: true,
        advancedOptions: function () {
          return Module_46.c().getBroadcastList(this)
        }
      }
    ],
    colour: "#ffffff",
    output: "String",
    tooltip: "%{BKY_BROADCAST_INPUT_TOOLTIP}"
  })
  e.insertBlockProfile("broadcast_on_receive", {
    type: "broadcast_on_receive",
    message0: "%{BKY_BROADCAST_ON_RECEIVE}",
    args0: [
      Module_4.e(BKY_BLOCK_CLOUD_ICON, true), {
        type: "input_value",
        name: "BROADCAST",
        check: ["String", "Boolean"]
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
  e.insertBlockProfile("broadcast_send", {
    type: "broadcast_send",
    message0: "%{BKY_BROADCAST_SEND}",
    args0: [
      {
        type: "input_value",
        name: "BROADCAST",
        check: ["String", "Boolean"]
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("broadcast_send_and_wait", {
    type: "broadcast_send_and_wait",
    message0: "%{BKY_BROADCAST_SEND_AND_WAIT}",
    args0: [
      {
        type: "input_value",
        name: "BROADCAST",
        check: ["String", "Boolean"]
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: true
  })
}
function Z(e) {
  e.insertBlockXML("app_on_mount")
  e.insertBlockXML("app_on_switch_background")
  e.insertBlockXML("when", "\n      <value name=\"CONDITION\">\n        <empty type=\"logic_empty\">\n          <field name=\"BOOL\"></field>\n        </empty>\n      </value>\n      ")
  e.insertBlockXML("broadcast_input", undefined, true)
}
function J(e) {
  var t = function (t, n) {
    var r = e.valueToCode(t, n, "BROADCAST", e.ORDER_FUNCTION_CALL)
    var o = JSON.stringify(e.getDynamicValue("__CURRENT_SCREEN_ID__"))
    return "".concat(o, " + ").concat(r)
  }
  e.insertBlockSnippetGenerator("app_on_mount", function (t, n) {
    var r = e.statementToCode(t, n, "DO")
    return r ? Module_4.m("onAppMount", undefined, r) : ""
  })
  e.insertBlockSnippetGenerator("app_on_switch_background", function (t, n) {
    var r = t.blocks[n]
    var o = e.statementToCode(t, n, "DO")
    return o ? "active" === (e.getFieldValue(r, "APP_STATE") || "") ? Module_4.m("onAppActive", undefined, o) : Module_4.m("onAppBackground", undefined, o) : ""
  })
  e.insertBlockSnippetGenerator("broadcast_input", function (t, n) {
    var r = t.blocks[n]
    return JSON.stringify(e.getFieldValue(r, "BROADCAST"))
  })
  e.insertBlockSnippetGenerator("broadcast_on_receive", function (n, r) {
    var o = e.statementToCode(n, r, "DO")
    return o ? Module_4.m("onCustomEvent", [t(n, r)], o) : ""
  })
  e.insertBlockSnippetGenerator("broadcast_send", function (e, n) {
    return Module_4.n("emitCustomEvent", [t(e, n)])
  })
  e.insertBlockSnippetGenerator("broadcast_send_and_wait", function (e, n) {
    return Module_4.j("emitCustomEventAndWait", [t(e, n)])
  })
}
function $(e) {
  e.insertBlockProfile("math_compare", {
    type: "math_compare",
    message0: "%1 %2 %3",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: ["Number", "String", "Boolean", "Array"]
      }, {
        type: "field_coco_dropdown",
        custom: true,
        name: "OP",
        options: [["=", F.EQUAL], ["≠", F.UNEQUAL], ["<", F.LESS_THAN], ["≤", F.LESS_THAN_OR_EQUAL], [">", F.GREATER_THAN], ["≥", F.GREATER_THAN_OR_EQUAL]]
      }, {
        type: "input_value",
        name: "B",
        check: ["Number", "String", "Boolean", "Array"]
      }
    ],
    inputsInline: true,
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}"
  })
  e.insertBlockProfile("math_operation", {
    type: "math_operation",
    message0: "%1 %2 %3",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Number"
      }, {
        type: "field_coco_dropdown",
        name: "OP",
        custom: true,
        options: [["%{BKY_MATH_ADDITION_SYMBOL}", D.ADD], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", D.MINUS], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", D.MULTIPLY], ["%{BKY_MATH_DIVISION_SYMBOL}", D.DIVIDE], ["%{BKY_MATH_POWER_SYMBOL}", D.POWER]]
      }, {
        type: "input_value",
        name: "B",
        check: "Number"
      }
    ],
    inputsInline: true,
    output: "Number",
    colour: "%{BKY_MATH_HUE}"
  })
  e.insertBlockProfile("math_random_integer", {
    type: "math_random_integer",
    message0: "%{BKY_RANDOM_NUM}",
    args0: [
      {
        type: "input_value",
        name: "INPUT_A",
        check: "Number",
        align: "CENTRE"
      }, {
        type: "input_value",
        name: "INPUT_B",
        check: "Number",
        align: "CENTRE"
      }
    ],
    output: "Number",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("math_number_property", {
    type: "math_number_property",
    message0: "%1 %{BKY_MATH_IS} %2",
    args0: [
      {
        type: "input_value",
        name: "NUMBER_TO_CHECK",
        check: "Number",
        align: "CENTRE"
      }, {
        type: "field_coco_dropdown",
        name: "PROPERTY",
        custom: true,
        options: [["%{BKY_MATH_EVEN}", x.EVEN], ["%{BKY_MATH_ODD}", x.ODD], ["%{BKY_MATH_PRIME}", x.PRIME], ["%{BKY_MATH_WHOLE}", x.WHOLE], ["%{BKY_MATH_POSITIVE}", x.POSITIVE], ["%{BKY_MATH_NEGATIVE}", x.NEGATIVE]]
      }
    ],
    inputsInline: true,
    output: "Boolean",
    colour: "%{BKY_MATH_HUE}"
  })
  e.insertBlockProfile("logic_operation", {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Boolean"
      }, {
        type: "field_coco_dropdown",
        custom: true,
        name: "OP",
        options: [["%{BKY_LOGIC_OPERATION_AND}", M.AND], ["%{BKY_LOGIC_OPERATION_OR}", M.OR]]
      }, {
        type: "input_value",
        name: "B",
        check: "Boolean"
      }
    ],
    inputsInline: true,
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}"
  })
  e.insertBlockProfile("math_complex_operation", {
    type: "math_complex_operation",
    message0: "%1 %2",
    args0: [
      {
        type: "field_coco_dropdown",
        custom: true,
        name: "OP",
        options: [["%{BKY_MATH_SINGLE_OP_ROOT}", L.ROOT], ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", L.ABS], ["-", L.NEG], ["ln", L.LN], ["log10", L.LOG10], ["e^", L.EXP], ["10^", L.POW10]]
      }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
      }
    ],
    output: "Number",
    colour: "%{BKY_MATH_HUE}"
  })
  e.insertBlockProfile("math_round", {
    type: "math_round",
    message0: "%1 %2",
    args0: [
      {
        type: "field_coco_dropdown",
        custom: true,
        name: "OP",
        options: [["%{BKY_MATH_ROUND_OPERATOR_ROUND}", B.ROUND], ["%{BKY_MATH_ROUND_OPERATOR_CEIL}", B.CEIL], ["%{BKY_MATH_ROUND_OPERATOR_FLOOR}", B.FLOOR]]
      }, {
        type: "input_shadow",
        name: "NUM",
        field_type: "math",
        default_text: "0"
      }
    ],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}"
  })
  e.insertBlockProfile("logic_boolean", {
    type: "logic_boolean",
    message0: "%1",
    args0: [
      {
        type: "field_coco_dropdown",
        custom: true,
        name: "BOOL",
        options: [["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"], ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]]
      }
    ],
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}"
  })
  e.insertBlockProfile("math_check_divisible", {
    type: "math_check_divisible",
    message0: "%{BKY_DIVISIBLE_BY}",
    args0: [
      {
        type: "input_value",
        name: "NUMBER_TO_CHECK",
        check: "Number"
      }, {
        type: "input_value",
        name: "DIVISOR",
        check: "Number"
      }
    ],
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("math_calculate_expression", {
    type: "math_calculate_expression",
    message0: "%{BKY_CALCULATE}",
    args0: [
      {
        type: "input_value",
        name: "INPUT",
        check: ["String", "Number", "Boolean"]
      }
    ],
    output: "Number",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("text_convert_type", {
    type: "text_convert_type",
    message0: "%{BKY_CONVERT_TYPE}",
    args0: [
      {
        type: "input_value",
        name: "ORIGINAL_VALUE",
        check: ["String", "Number", "Array", "Boolean", "Object"],
        align: "CENTRE"
      }, {
        type: "field_coco_dropdown",
        name: "TYPE",
        custom: true,
        options: [["%{BKY_NUMBER_TYPE}", "number"], ["%{BKY_STRING_TYPE}", "string"], ["%{BKY_BOOLEAN_TYPE}", "boolean"]]
      }
    ],
    output: ["String", "Number", "Boolean"],
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("text_get_length", {
    type: "text_get_length",
    message0: "%{BKY_TEXT_LENGTH}",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: ["String", "Number", "Boolean"]
      }
    ],
    output: "Number",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("text_slice", {
    type: "text_slice",
    message0: "%{BKY_TEXT_SLICE}",
    args0: [
      {
        type: "input_value",
        name: "STRING",
        check: ["String", "Boolean", "Number"]
      }, {
        type: "input_value",
        name: "NUM0",
        check: ["Number"]
      }
    ],
    output: "String",
    inputsInline: true,
    colour: "%{BKY_LOGIC_HUE}",
    mutator: "TEXT_SLICE_MUTATOR"
  })
  e.insertBlockProfile("text_check_contain", {
    type: "text_check_contain",
    message0: "%{BKY_TEXT_CONTAIN}",
    args0: [
      {
        type: "input_value",
        name: "TEXT1",
        check: ["String", "Number", "Boolean"]
      }, {
        type: "input_value",
        name: "TEXT2",
        check: ["String", "Number", "Boolean"]
      }
    ],
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("text_split_text", {
    type: "text_split_text",
    message0: "%{BKY_TEXT_SPLIT}",
    args0: [
      {
        type: "input_value",
        name: "STR_TO_SPLIT",
        check: ["String", "Number", "Boolean"]
      }, {
        type: "input_value",
        name: "SPLIT_STR",
        check: ["String", "Number", "Boolean"]
      }
    ],
    output: "Array",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("text_shadow", {
    type: "text_shadow",
    message0: "%1",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: ["String"]
      }
    ],
    output: "String",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("text_rich_text", {
    type: "text_rich_text",
    message0: "%1",
    args0: [
      {
        type: "field_input",
        name: "TEXT",
        text: ""
      }
    ],
    output: "String",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: true,
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
  })
  e.insertBlockProfile("math_shadow_number", {
    type: "math_shadow_number",
    message0: "%1",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: ["Number"]
      }
    ],
    output: "Number",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: true
  })
  e.insertBlockProfile("text_multiline", {
    type: "text_multiline",
    message0: "%1",
    args0: [
      {
        type: "field_multiline_input",
        name: "TEXT",
        text: "",
        max_width: 310
      }
    ],
    output: "String",
    colour: "%{BKY_TEXT_HUE}",
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
  })
}
function ee(e) {
  e.insertBlockXML("math_shadow_number", "\n  <value name=\"VALUE\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("math_calculate_expression", "\n  <value name=\"INPUT\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">1+2</field>\n    </shadow>\n  </value>\n  ")
  e.insertBlockXML("math_operation", "\n  <value name=\"A\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n  <value name=\"B\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("math_random_integer", "\n  <value name=\"INPUT_A\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n  <value name=\"INPUT_B\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">5</field>\n    </shadow>\n  </value>\n  ")
  e.insertBlockXML("math_number_property", "\n  <mutation divisor_input=\"false\"></mutation>\n  <field name=\"PROPERTY\">EVEN</field>\n  <value name=\"NUMBER_TO_CHECK\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("math_check_divisible", "\n  <value name=\"NUMBER_TO_CHECK\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">9</field>\n    </shadow>\n  </value>\n  <value name=\"DIVISOR\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">3</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("logic_operation", "\n  <value name=\"A\">\n    <empty type=\"logic_empty\">\n      <field name=\"BOOL\"></field>\n    </empty>\n  </value>\n  <value name=\"B\">\n    <empty type=\"logic_empty\">\n      <field name=\"BOOL\"></field>\n    </empty>\n  </value>\n  ")
  e.insertBlockXML("math_complex_operation", "\n  <value name=\"NUM\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("math_modulo", "\n  <value name=\"DIVIDEND\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">64</field>\n    </shadow>\n  </value>\n  <value name=\"DIVISOR\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">10</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("math_trig", "\n  <field name=\"OP\">SIN</field>\n  <value name=\"NUM\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">45</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("math_round", "\n  <field name=\"OP\">ROUND</field>\n  <value name=\"NUM\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">3.1</field>\n    </shadow>\n  </value>\n  ")
  e.insertBlockXML("math_compare", "\n  <value name=\"A\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n  <value name=\"B\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("logic_boolean")
  e.insertBlockXML("logic_negate", "\n  <value name=\"BOOL\">\n    <empty type=\"logic_empty\">\n      <field name=\"BOOL\"></field>\n    </empty>\n  </value>\n")
  e.insertBlockXML("text_shadow", "\n  <value name=\"VALUE\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">Hello</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("text_convert_type", "\n  <value name=\"ORIGINAL_VALUE\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">123</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("text_join", "\n  <mutation items=\"2\"></mutation>\n  <value name=\"ADD0\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">ab</field>\n    </shadow>\n  </value>\n  <value name=\"ADD1\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">c</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("text_get_length", "\n  <value name=\"VALUE\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">abc</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("text_slice", "\n      <mutation items=\"1\"></mutation>\n      <value name=\"STRING\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">abc</field>\n        </shadow>\n      </value>\n      <value name=\"NUM0\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\"1,,1\">1</field>\n        </shadow>\n      </value>\n    ")
  e.insertBlockXML("text_check_contain", "\n  <value name=\"TEXT1\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">abc</field>\n    </shadow>\n  </value>\n  <value name=\"TEXT2\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">abc</field>\n    </shadow>\n  </value>\n")
  e.insertBlockXML("text_split_text", "\n  <value name=\"STR_TO_SPLIT\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">1,2,3,4</field>\n    </shadow>\n  </value>\n  <value name=\"SPLIT_STR\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">,</field>\n    </shadow>\n  </value>\n")
}
function te(e, t) {
  e.Blocks.math_trig = {
    shadow: "<shadow type=\"math_number\"><field name=\"NUM\">45</field></shadow>",
    init: function () {
      this.set_colour(e.theme.block_color.MATH_HUE.fill)
      var n = new t({
        type: "field_coco_dropdown",
        name: "OP",
        custom: true,
        options: [[e.Msg.MATH_TRIG_SIN, P.SIN], [e.Msg.MATH_TRIG_COS, P.COS], [e.Msg.MATH_TRIG_TAN, P.TAN], [e.Msg.MATH_TRIG_ASIN, P.ASIN], [e.Msg.MATH_TRIG_ACOS, P.ACOS], [e.Msg.MATH_TRIG_ATAN, P.ATAN]],
        optOnchange: function (e) {
          var /* [auto-meaningful-name] */this$source_block
          var n = "SIN" === e || "COS" === e || "TAN" === e
          if (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.updateShape_) {
            this.source_block.updateShape_(n)
          }
        }
      })
      this.append_dummy_input().append_field(n, "OP")
      this.append_shadow_input("NUM", e.Blocks.math_trig.shadow).set_check("Number")
      this.append_dummy_input("DEGREES").append_field(e.Msg.MATH_DEGREES)
      this.set_inputs_inline(true)
      this.set_output(true)
    },
    updateShape_: function (t) {
      var n = this.get_input("DEGREES")
      if (t) {
        if (!n) {
          this.append_dummy_input("DEGREES").append_field(e.Msg.MATH_DEGREES)
        }
      } else {
        if (n) {
          this.remove_input("DEGREES")
        }
      }
    }
  }
  var /* [auto-meaningful-name] */ShadowTypeMath_numberFieldNameNUMConstraints112_field_shadow = "<shadow type=\"math_number\"><field name=\"NUM\" constraints=\"1,,1\">2</field></shadow>"
  e.extensions.register_mutator("TEXT_SLICE_MUTATOR", {
    updateShape_: function () {
      e.events.disable()
      if (1 === this.itemCount_) {
        this.append_dummy_input("TITLE_TAIL").append_field(e.Msg.OPERATORS_TEXT_SELECT_CHANGEABLE_END)
        this.append_dummy_input("MUTATE_BUTTON").append_field(Module_4.p(), "MUTATE_BUTTON")
      } else {
        this.append_dummy_input("CONTENT_TO").append_field(e.Msg.OPERATORS_TEXT_SELECT_CHANGEABLE_TO)
        this.append_shadow_input("NUM".concat(this.itemCount_ - 1), ShadowTypeMath_numberFieldNameNUMConstraints112_field_shadow)
        this.append_dummy_input("TITLE_TAIL").append_field(e.Msg.OPERATORS_TEXT_SELECT_CHANGEABLE_END)
        this.append_dummy_input("MUTATE_BUTTON").append_field(Module_4.q(undefined), "MUTATE_BUTTON")
      }
      e.events.enable()
    },
    addMutation: function (t) {
      var r = this
      var o = "NUM".concat(this.itemCount_)
      Module_4.b.call(this, o, function () {
        r.append_dummy_input("CONTENT_TO", "TITLE_TAIL").append_field(e.Msg.OPERATORS_TEXT_SELECT_CHANGEABLE_TO)
        var t = r.append_value_input(o, "TITLE_TAIL")
        r.itemCount_++
        if (r.get_input("MUTATE_BUTTON")) {
          r.remove_input("MUTATE_BUTTON")
        }
        r.append_dummy_input("MUTATE_BUTTON").append_field(Module_4.q(undefined), "MUTATE_BUTTON")
        return t
      }, ShadowTypeMath_numberFieldNameNUMConstraints112_field_shadow, t)
    },
    removeMutation: function () {
      var e = this
      var t = "NUM".concat(this.itemCount_ - 1)
      Module_4.t.call(this, t, "NUM", function () {
        e.remove_input("CONTENT_TO")
        e.remove_input(t)
        e.itemCount_--
        if (e.get_input("MUTATE_BUTTON")) {
          e.remove_input("MUTATE_BUTTON")
        }
        e.append_dummy_input("MUTATE_BUTTON").append_field(Module_4.p(), "MUTATE_BUTTON")
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
function ne(e) {
  e.insertBlockSnippetGenerator("math_shadow_number", function (t, n) {
    return e.valueToCode(t, n, "VALUE", e.ORDER_NONE)
  })
  e.insertBlockSnippetGenerator("math_operation", function (t, n) {
    var r = {
      ADD: e.ORDER_ADDITION,
      MINUS: e.ORDER_SUBTRACTION,
      MULTIPLY: e.ORDER_MULTIPLICATION,
      DIVIDE: e.ORDER_DIVISION,
      POWER: e.ORDER_COMMA
    }
    var o = t.blocks[n]
    var i = e.getFieldValue(o, "OP") || ""
    var a = r[i]
    var s = e.valueToCode(t, n, "A", a)
    var c = e.valueToCode(t, n, "B", a)
    return Module_4.s("mathOperation", [Module_4.o(i), s, c])
  })
  e.insertBlockSnippetGenerator("math_random_integer", function (t, n) {
    var r = e.valueToCode(t, n, "INPUT_A", e.ORDER_COMMA)
    var o = e.valueToCode(t, n, "INPUT_B", e.ORDER_COMMA)
    return Module_4.s("getRandomInteger", [r, o])
  })
  e.insertBlockSnippetGenerator("math_number_property", function (t, n) {
    var r = t.blocks[n]
    var o = e.valueToCode(t, n, "NUMBER_TO_CHECK", e.ORDER_MODULUS)
    var i = e.getFieldValue(r, "PROPERTY") || ""
    return Module_4.s("determineNumberType", [Module_4.o(i), o])
  })
  e.insertBlockSnippetGenerator("math_check_divisible", function (t, n) {
    var r = e.valueToCode(t, n, "NUMBER_TO_CHECK", e.ORDER_MODULUS)
    var o = e.valueToCode(t, n, "DIVISOR", e.ORDER_MODULUS)
    return Module_4.s("checkDivisibility", [r, o])
  })
  e.insertBlockSnippetGenerator("logic_operation", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "OP") || ""
    var i = "AND" === o ? e.ORDER_LOGICAL_AND : e.ORDER_LOGICAL_OR
    var a = e.valueToCode(t, n, "A", i) || "false"
    var s = e.valueToCode(t, n, "B", i) || "false"
    return Module_4.s("logicOperation", [Module_4.o(o), a, s])
  })
  e.insertBlockSnippetGenerator("math_calculate_expression", function (t, n) {
    var r = e.valueToCode(t, n, "INPUT", e.ORDER_MEMBER)
    return Module_4.s("calculateMathExpression", [r])
  })
  e.insertBlockSnippetGenerator("math_complex_operation", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "OP") || ""
    var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
    return Module_4.s("complexMathOperation", [Module_4.o(o), i])
  })
  e.insertBlockSnippetGenerator("math_modulo", function (t, n) {
    var r = e.valueToCode(t, n, "DIVIDEND", e.ORDER_MODULUS)
    var o = e.valueToCode(t, n, "DIVISOR", e.ORDER_MODULUS)
    return Module_4.s("remainderOperation", [r, o])
  })
  e.insertBlockSnippetGenerator("math_trig", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "OP") || ""
    var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
    return Module_4.s("mathTrig", [Module_4.o(o), i])
  })
  e.insertBlockSnippetGenerator("math_round", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "OP") || ""
    var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
    return Module_4.s("mathRound", [Module_4.o(o), i])
  })
  e.insertBlockSnippetGenerator("math_compare", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "OP") || ""
    var i = "EQ" === o || "NEQ" === o ? e.ORDER_EQUALITY : e.ORDER_RELATIONAL
    var a = e.valueToCode(t, n, "A", i)
    var s = e.valueToCode(t, n, "B", i)
    return Module_4.s("compareNumbers", [Module_4.o(o), a, s])
  })
  e.insertBlockSnippetGenerator("text_convert_type", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "TYPE") || ""
    var i = e.valueToCode(t, n, "ORIGINAL_VALUE", e.ORDER_FUNCTION_CALL)
    return i ? Module_4.s("convertValueType", [i, Module_4.o(o)]) : ""
  })
  e.insertBlockSnippetGenerator("text_slice", function (t, n) {
    var r = e.valueToCode(t, n, "STRING", e.ORDER_MEMBER)
    var o = e.valueToCode(t, n, "NUM0", e.ORDER_COMMA)
    var i = e.valueToCode(t, n, "NUM1", e.ORDER_COMMA)
    return i ? Module_4.s("extractString", [r, o, i]) : Module_4.s("extractString", [r, o])
  })
  e.insertBlockSnippetGenerator("text_join", function (t, n) {
    for (var /* [auto-meaningful-name] */Object$keysT$connectionsN$length = Object.keys(t.connections[n]).length, o = new Array(Object$keysT$connectionsN$length), i = 0; i < Object$keysT$connectionsN$length; i++) {
      o[i] = e.valueToCode(t, n, "ADD".concat(i), e.ORDER_COMMA) || "''"
    }
    return Module_4.s("concatStrings", o)
  })
  e.insertBlockSnippetGenerator("text_shadow", function (t, n) {
    return e.valueToCode(t, n, "VALUE", e.ORDER_NONE)
  })
  e.insertBlockSnippetGenerator("text_get_length", function (t, n) {
    var r = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
    return Module_4.s("getStringLength", [r])
  })
  e.insertBlockSnippetGenerator("text_check_contain", function (t, n) {
    var r = e.valueToCode(t, n, "TEXT1", e.ORDER_FUNCTION_CALL)
    var o = e.valueToCode(t, n, "TEXT2", e.ORDER_COMMA)
    return Module_4.s("checkStringContain", [r, o])
  })
  e.insertBlockSnippetGenerator("text_split_text", function (t, n) {
    var r = e.valueToCode(t, n, "STR_TO_SPLIT", e.ORDER_FUNCTION_CALL) || "''"
    var o = e.valueToCode(t, n, "SPLIT_STR", e.ORDER_COMMA)
    return Module_4.s("splitString", [r, o])
  })
  e.insertBlockSnippetGenerator("text_multiline", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "TEXT") || ""
    return [JSON.stringify(o), e.ORDER_ATOMIC]
  })
  e.insertBlockSnippetGenerator("text_rich_text", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "TEXT") || ""
    return [JSON.stringify(o), e.ORDER_ATOMIC]
  })
}
!function (e) {
  e.EVEN = "EVEN"
  e.ODD = "ODD"
  e.PRIME = "PRIME"
  e.WHOLE = "WHOLE"
  e.POSITIVE = "POSITIVE"
  e.NEGATIVE = "NEGATIVE"
}(x || (x = {}));
(function (e) {
  e.ADD = "ADD"
  e.MINUS = "MINUS"
  e.MULTIPLY = "MULTIPLY"
  e.DIVIDE = "DIVIDE"
  e.POWER = "POWER"
})(D || (D = {}));
(function (e) {
  e.AND = "AND"
  e.OR = "OR"
})(M || (M = {}));
(function (e) {
  e.ROOT = "ROOT"
  e.ABS = "ABS"
  e.NEG = "NEG"
  e.LN = "LN"
  e.LOG10 = "LOG10"
  e.EXP = "EXP"
  e.POW10 = "POW10"
})(L || (L = {}));
(function (e) {
  e.SIN = "SIN"
  e.COS = "COS"
  e.TAN = "TAN"
  e.ASIN = "ASIN"
  e.ACOS = "ACOS"
  e.ATAN = "ATAN"
})(P || (P = {}));
(function (e) {
  e.ROUND = "ROUND"
  e.CEIL = "CEIL"
  e.FLOOR = "FLOOR"
})(B || (B = {}));
(function (e) {
  e.EQUAL = "EQ"
  e.UNEQUAL = "NEQ"
  e.LESS_THAN = "LT"
  e.LESS_THAN_OR_EQUAL = "LTE"
  e.GREATER_THAN = "GT"
  e.GREATER_THAN_OR_EQUAL = "GTE"
})(F || (F = {}))
export { U }
export { H }
export { V }
export { z }
export { Y }
export { K }
export { q }
export { X }
export { Q }
export { Z }
export { J }
export { $ }
export { ee }
export { te }
export { ne }
