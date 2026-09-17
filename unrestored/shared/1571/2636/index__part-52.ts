/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-52
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_131 from /* 131 */"./131"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_548 from /* 548 */"./548/index"
var jf = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  return React.createElement(Module_548.a, Object.assign({}, e, {
    onSwitch: function (n) {
      if (Module_33.r(e.id) && e$onChange) {
        e$onChange("value", n)
      }
    },
    isEditState: true
  }))
}
var Nf = {
  type: "field_coco_dropdown",
  name: "WIDGET_ID",
  custom: true,
  options: function () {
    return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.F)
  }
}
var Rf = {
  type: Src_editor_widget_builtIn_types.F,
  category: {
    iconId: Module_131.e,
    blocks: Src_editor_widget_builtIn_types.F
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"switch_on_change\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"switch_set_state\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"STATE_WRAPPER\">\n        <shadow type=\"switch_state_dropdown\"></shadow>\n      </value>\n    </block>"), Module_61.d, Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.F,
        widgetId: e,
        isSetProperty: true
      }), Module_33.sb({
        property: "__size",
        widgetType: Src_editor_widget_builtIn_types.F,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"switch_set_position\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"switch_set_visible\" uncache=\"true\">\n    ".concat(t, "\n    </block>"), "<block type=\"switch_set_disabled\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"switch_get_state\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.F,
        widgetId: e
      }), Module_33.sb({
        property: "__size",
        widgetType: Src_editor_widget_builtIn_types.F,
        widgetId: e
      }), "<block type=\"switch_get_position\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.F,
        widgetId: e
      }), Module_33.sb({
        property: "__disabled",
        widgetType: Src_editor_widget_builtIn_types.F,
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
      e.insertBlockSnippetGenerator("switch_on_change", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        var a = e.valueToCode(n, r, "STATE", e.ORDER_FUNCTION_CALL)
        return i ? Module_4.n("argsOnSwitchWidgetChange", [Module_4.o(tNR$widgetId)], i, [a]) : ""
      })
      e.insertBlockSnippetGenerator("switch_on_select_change", function () {
        return "state"
      })
      e.insertBlockSnippetGenerator("switch_state_dropdown", function (n, r) {
        var /* [auto-meaningful-name] */tNR$block = t(n, r).block
        return ("open" === e.getFieldValue(tNR$block, "STATE")) + ""
      })
      e.insertBlockSnippetGenerator("switch_set_state", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.valueToCode(n, r, "STATE_WRAPPER", e.ORDER_FUNCTION_CALL)
        return Module_4.n("setSwitchWidgetState", [Module_4.o(tNR$widgetId), i])
      })
      e.insertBlockSnippetGenerator("switch_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "setSwitchWidgetPositionX" : "setSwitchWidgetPositionY"
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n(s, [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("switch_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "show" === e.getFieldValue(o$block, "VISIBLE")
        return Module_4.n("setSwitchWidgetVisible", [Module_4.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("switch_set_disabled", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "disabled" === e.getFieldValue(o$block, "DISPLAY")
        return Module_4.l(Module_4.n("setSwitchWidgetDisabled", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("switch_get_state", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getSwitchWidgetState", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("switch_get_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "PROPERTY")) {
          case "positionX":
            s = "getSwitchWidgetPositionX"
            break
          case "positionY":
            s = "getSwitchWidgetPositionY"
        }
        return Module_4.s(s, [Module_4.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("switch_on_change_state", function () {
        return "".concat(Module_4.a, "state")
      })
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("switch_on_change", {
        type: "switch_on_change",
        message0: "%{BKY_SWITCH_ON_STATE_CHANGE}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), Module_6.a({}, Nf), {
            type: "input_value",
            name: "STATE",
            align: "CENTRE",
            default_shadow: "<shadow type=\"switch_on_change_state\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "switch_on_change_state_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("switch_on_change_state", {
        type: "switch_on_change_state",
        message0: "%{BKY_SWITCH_PARAM_STATE}",
        output: "Boolean",
        required_context: "switch_on_change_state_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("switch_set_state", {
        type: "switch_set_state",
        message0: "%{BKY_SWITCH_SET_STATE}",
        args0: [
          Module_6.a({}, Nf), {
            type: "input_value",
            name: "STATE_WRAPPER",
            check: ["Boolean"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("switch_state_dropdown", {
        type: "switch_state_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "STATE",
            custom: true,
            options: function () {
              return [[t.Msg.OPEN, "open"], [t.Msg.CLOSE, "close"]]
            }
          }
        ],
        output: ["Boolean"]
      })
      e.insertBlockProfile("switch_set_position", {
        type: "switch_set_position",
        message0: "%{BKY_SWITCH_SET_POSITION}",
        args0: [
          Module_6.a({}, Nf), {
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
      e.insertBlockProfile("switch_get_state", {
        type: "switch_get_state",
        message0: "%{BKY_SWITCH_GET_STATE}",
        args0: [Module_6.a({}, Nf)],
        output: ["Boolean"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("switch_set_visible", {
        type: "switch_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: function () {
              return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
            }
          }, Module_6.a({}, Nf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("switch_set_disabled", {
        type: "switch_set_disabled",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: function () {
              return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
            }
          }, Module_6.a({}, Nf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("switch_get_position", {
        type: "switch_get_position",
        message0: "%{BKY_SWITCH_GET_POSITION}",
        args0: [
          Module_6.a({}, Nf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
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
    iconId: Module_131.e,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["switch_on_change", "switch_set_state", "switch_set_position", "switch_set_visible", "switch_set_disabled", "switch_get_state", "switch_get_position"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["switch_on_change"]
}
export { jf }
export { Rf }
