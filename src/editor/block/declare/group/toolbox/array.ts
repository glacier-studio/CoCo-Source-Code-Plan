import { getBlockResources } from "../../index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../../../../../../unrestored/shared/1571/2636/4"
import * as /* [auto-meaningful-name] */Module_323 from /* 323 */"../../../../../../unrestored/shared/1571/2636/323"
import type { Blink as Blink_0 } from "../../../../../shared/packages/@crc/blink/src"
import type { BlockProfileManager } from "../../manager/profile"
import type { BlockXMLManager } from "../../manager/xml"
import type { BlockSnippetManager } from "../../manager/snippet"

const INDEX_FIELD = `<shadow type="math_number"><field name="NUM" constraints="1,,1">1</field></shadow>`

type TItemOpt = "nth" | "lastItem" | "allItem"

export function setBlockGroupProfile(manager: BlockProfileManager, Blink: typeof Blink_0) {
  function handleItemOptOnchange(opt: TItemOpt) {
    if (Blink.events.is_undoing()) {
      return
    }
    const { source_block } = this
    if (source_block) {
      if (opt === "nth") {
        source_block.addMutation?.call(source_block)
      } else {
        source_block.removeMutation?.call(source_block)
      }
    }
  }
  manager.insertBlockProfile("array_get", {
    type: "array_get",
    message0: "%1",
    args0: [
      {
        type: "field_coco_dropdown",
        name: "ARRAY",
        custom: true,
        advancedOptions: () => getBlockResources().getArrayVariableList(this)
      }
    ],
    output: "Array",
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: true
  })
  manager.insertBlockProfile("lists_append", {
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
  manager.insertBlockProfile("lists_insert_value", {
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
  manager.insertBlockProfile("array_copy", {
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
  manager.insertBlockProfile("array_get_length", {
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
  manager.insertBlockProfile("lists_index_of", {
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
  manager.insertBlockProfile("lists_is_exist", {
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
  manager.insertBlockProfile("array_remove_item", {
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
        optOnchange: handleItemOptOnchange,
        options: () => [[Blink.Msg.NTH, "nth"], [Blink.Msg.LAST_ITEM, "lastItem"], [Blink.Msg.ALL_ITEM, "allItem"]]
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
  manager.insertBlockProfile("lists_replace", {
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
        optOnchange: handleItemOptOnchange,
        options: () => [[Blink.Msg.NTH, "nth"], [Blink.Msg.LAST_ITEM, "lastItem"]]
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
  manager.insertBlockProfile("array_get_item", {
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
        optOnchange: handleItemOptOnchange,
        options: () => [[Blink.Msg.NTH, "nth"], [Blink.Msg.LAST_ITEM, "lastItem"]]
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
  manager.insertBlockProfile("array_current_item", {
    type: "array_current_item",
    message0: "%{BKY_ARRAY_CURRENT_ITEM}",
    output: ["String", "Number", "Array", "Boolean"],
    required_context: "array_foreach_DO",
    colour: "%{BKY_PARAM_BLOCK_COLOR}",
    extensions: ["param_block"]
  })
  manager.insertBlockProfile("array_foreach", {
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

export function setBlockGroupXML(manager: BlockXMLManager) {
  manager.insertBlockXML("lists_replace", "\n    <mutation pos='nth'></mutation>\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"1,,1\">1</field>\n      </shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n    ", true)
  manager.insertBlockXML("array_remove_item", "\n    <mutation pos='nth'></mutation>\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints='1,,1'>1</field>\n      </shadow>\n    </value>\n  ", true)
  manager.insertBlockXML("array_get", undefined, true)
  manager.insertBlockXML("lists_append", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", true)
  manager.insertBlockXML("lists_insert_value", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints='1,,1'>1</field>\n      </shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", true)
  manager.insertBlockXML("array_copy", "\n    <value name=\"FROM\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"TO\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    ", true)
  manager.insertBlockXML("array_get_item", "\n    <mutation pos='nth'></mutation>\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints='1,,1'>1</field>\n      </shadow>\n    </value>\n  ", true)
  manager.insertBlockXML("array_get_length", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    ", true)
  manager.insertBlockXML("lists_index_of", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", true)
  manager.insertBlockXML("lists_is_exist", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", true)
  manager.insertBlockXML("array_foreach", "<value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>", true)
}

export function setBlockGroupSnippet(manager: BlockSnippetManager) {
  manager.insertBlockSnippetGenerator("array_get", function (t, n) {
    var r = t.blocks[n]
    var o = manager.getFieldValue(r, "ARRAY") || ""
    return Module_4.s("getVariableValue", [Module_4.o(o)])
  })
  var t = function (t, n) {
    var r = Module_323.a(n)
    var o = r.blockId && t.blocks[r.blockId]
    return o && manager.getFieldValue(o, "ARRAY") || ""
  }
  manager.insertBlockSnippetGenerator("lists_append", function (n, r) {
    var o = n.blocks[r]
    var i = manager.valueToCode(n, r, "ARRAY", manager.ORDER_FUNCTION_CALL)
    var a = t(n, i)
    var s = manager.valueToCode(n, r, "VALUE", manager.ORDER_FUNCTION_CALL)
    return Module_4.l(Module_4.n("pushArrayItem", [i, s, Module_4.o(a)]), o, manager)
  })
  manager.insertBlockSnippetGenerator("lists_insert_value", function (n, r) {
    var o = n.blocks[r]
    var i = manager.valueToCode(n, r, "ARRAY", manager.ORDER_FUNCTION_CALL)
    var a = t(n, i)
    var s = manager.valueToCode(n, r, "VALUE", manager.ORDER_FUNCTION_CALL)
    var c = manager.valueToCode(n, r, "INDEX", manager.ORDER_FUNCTION_CALL)
    return Module_4.l(Module_4.n("insertArrayItemByIndex", [i, s, c + " - 1", Module_4.o(a)]), o, manager)
  })
  manager.insertBlockSnippetGenerator("array_remove_item", function (n, r) {
    var o = manager.valueToCode(n, r, "ARRAY", manager.ORDER_FUNCTION_CALL)
    var i = t(n, o)
    var a = n.blocks[r]
    var s = manager.getFieldValue(a, "ITEM_POS") || ""
    if ("nth" === s) {
      var c = manager.valueToCode(n, r, "INDEX", manager.ORDER_FUNCTION_CALL)
      return Module_4.l(Module_4.n("removeArrayItemByIndex", [o, c + " - 1", Module_4.o(i)]), a, manager)
    }
    return "lastItem" === s ? Module_4.l(Module_4.n("removeLastArrayItem", [o, Module_4.o(i)]), a, manager) : Module_4.l(Module_4.n("removeAllArrayItem", [o, Module_4.o(i)]), a, manager)
  })
  manager.insertBlockSnippetGenerator("lists_replace", function (n, r) {
    var o = n.blocks[r]
    var i = manager.valueToCode(n, r, "ARRAY", manager.ORDER_FUNCTION_CALL)
    var a = t(n, i)
    var s = manager.getFieldValue(o, "ITEM_POS") || ""
    var c = manager.valueToCode(n, r, "VALUE", manager.ORDER_FUNCTION_CALL)
    if ("nth" === s) {
      var l = manager.valueToCode(n, r, "INDEX", manager.ORDER_FUNCTION_CALL)
      return Module_4.l(Module_4.n("setArrayItemByIndex", [i, c, l + " - 1", Module_4.o(a)]), o, manager)
    }
    return Module_4.l(Module_4.n("setArrayLastItem", [i, c, Module_4.o(a)]), o, manager)
  })
  manager.insertBlockSnippetGenerator("array_copy", function (n, r) {
    var o = n.blocks[r]
    var i = manager.valueToCode(n, r, "FROM", manager.ORDER_FUNCTION_CALL)
    var a = manager.valueToCode(n, r, "TO", manager.ORDER_FUNCTION_CALL)
    return Module_4.l(Module_4.n("copyArray", [i, a, Module_4.o(t(n, a))]), o, manager)
  })
  manager.insertBlockSnippetGenerator("array_get_item", function (t, n) {
    var r = t.blocks[n]
    var o = manager.valueToCode(t, n, "ARRAY", manager.ORDER_FUNCTION_CALL)
    if ("nth" === (manager.getFieldValue(r, "ITEM_POS") || "")) {
      var i = manager.valueToCode(t, n, "INDEX", manager.ORDER_FUNCTION_CALL)
      return Module_4.l(Module_4.s("getArrayItemByIndex", [o, i + " - 1"]), r, manager, false, true)
    }
    return Module_4.l(Module_4.s("getArrayLastItem", [o]), r, manager, false, true)
  })
  manager.insertBlockSnippetGenerator("array_get_length", function (t, n) {
    var r = manager.valueToCode(t, n, "ARRAY", manager.ORDER_FUNCTION_CALL)
    return Module_4.s("getArrayLength", [r])
  })
  manager.insertBlockSnippetGenerator("lists_index_of", function (t, n) {
    var r = t.blocks[n]
    var o = manager.valueToCode(t, n, "ARRAY", manager.ORDER_FUNCTION_CALL)
    var i = manager.valueToCode(t, n, "VALUE", manager.ORDER_FUNCTION_CALL)
    return Module_4.l(Module_4.s("getArrayItemIndex", [o, i, "1"]), r, manager, false, true)
  })
  manager.insertBlockSnippetGenerator("lists_is_exist", function (t, n) {
    var r = manager.valueToCode(t, n, "ARRAY", manager.ORDER_FUNCTION_CALL)
    var o = manager.valueToCode(t, n, "VALUE", manager.ORDER_FUNCTION_CALL)
    return Module_4.s("checkItemInArray", [r, o])
  })
  manager.insertBlockSnippetGenerator("array_current_item", function () {
    return "arrayCurrentItem"
  })
  manager.insertBlockSnippetGenerator("array_foreach", function (t, n) {
    var r = manager.valueToCode(t, n, "ARRAY", manager.ORDER_FUNCTION_CALL)
    var o = manager.valueToCode(t, n, "ARRAY_CURRENT_ITEM", manager.ORDER_FUNCTION_CALL)
    var i = manager.statementToCode(t, n, "DO")
    return i ? Module_4.l(Module_4.i("asyncScheduler.listForEach", i, [r], [o]), t.blocks[n], manager, true) : ""
  })
}

export function setBlockGroupExtra(Blink: typeof Blink_0) {
  Blink.extensions.register_mutator("ARRAY_ITEM_MUTATOR", {
    updateShape_(optType: "add" | "remove") {
      const isAdd = optType === "add"
      const indexInput = this.get_input("INDEX")
      if (isAdd) {
        if (!indexInput) {
          const inputIndex = this.get_input_index("VALUE")
          var i = inputIndex === -1 ? inputIndex : 2
          this.append_shadow_input("INDEX", INDEX_FIELD, i).set_check("Number")
          this.append_dummy_input("ITEM", i + 1).append_field(Blink.Msg.ARRAY_ITEM)
        }
      } else if (indexInput) {
        this.remove_input("INDEX")
        this.remove_input("ITEM")
      }
    },
    addMutation(index?: number) {
      Module_4.b.call(this, "INDEX", () => {
        var t = this.get_input_index("VALUE")
        var r = -1 === t ? 2 : t
        var o = this.append_value_input("INDEX", r).set_check("Number")
        this.append_dummy_input("ITEM", r + 1).append_field(Blink.Msg.ARRAY_ITEM)
        return o
      }, INDEX_FIELD, index)
    },
    removeMutation() {
      Module_4.t.call(this, "INDEX", "NUM", () => {
        this.remove_input("INDEX")
        this.remove_input("ITEM")
      })
    },
    domToMutation() {
      this.cacheId = {}
      const itemPos = this.get_field("ITEM_POS")?.get_value()
      this.updateShape_(itemPos === "nth" ? "add" : "remove")
    },
    mutationToDom() {
      const mutationElement = document.createElement("mutation")
      const itemPos = this.get_field("ITEM_POS")?.get_value()
      mutationElement.setAttribute("pos", itemPos || "")
      return mutationElement
    }
  })
}
