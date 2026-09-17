/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-54
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"./75"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_149 from /* 149 */"./149"
import * as /* [auto-meaningful-name] */Module_549 from /* 549 */"./549/index"
var Pf = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$handleImageFileId = e$attributes.handleImageFileId
  var o = undefined === e$attributes$handleImageFileId ? Module_149.c : e$attributes$handleImageFileId
  var /* [auto-meaningful-name] */e$attributes$backgroundImageFileId = e$attributes.backgroundImageFileId
  var a = undefined === e$attributes$backgroundImageFileId ? Module_149.a : e$attributes$backgroundImageFileId
  var /* [auto-meaningful-name] */e$attributes$trackImageFileId = e$attributes.trackImageFileId
  var c = undefined === e$attributes$trackImageFileId ? Module_149.g : e$attributes$trackImageFileId
  var l = useSelector(function (e) {
    return e.resource.resourceLibraryUpdateAt
  })
  var u = useState("")
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState("")
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  var E = useState("")
  var O = Module_10.a(E, 2)
  var w = O[0]
  var C = O[1]
  useEffect(function () {
    var e
    if (Src_shared_tools_index.U(o)) {
      e = o
    } else {
      var t = Module_33.hb(o)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
    }
    m(e || Module_149.c)
  }, [o, l])
  useEffect(function () {
    var e
    if (Src_shared_tools_index.U(a)) {
      e = a
    } else {
      var t = Module_33.hb(a)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
    }
    y(e || Module_149.a)
  }, [a, l])
  useEffect(function () {
    var e
    if (Src_shared_tools_index.U(c)) {
      e = c
    } else {
      var t = Module_33.hb(c)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
    }
    C(e || Module_149.g)
  }, [c, l])
  return React.createElement(Module_549.a, Object.assign({}, e, {
    onSliderChange: function (e) {
      if (e$onChange) {
        e$onChange("value", e, false)
      }
    },
    isEditState: true,
    handleImageUrl: p,
    backgroundImageUrl: b,
    trackImageUrl: w
  }))
}
var Bf = {
  type: "field_coco_dropdown",
  name: "WIDGET_ID",
  custom: true,
  options: function () {
    return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.E)
  }
}
var Ff = {
  type: Src_editor_widget_builtIn_types.E,
  category: {
    iconId: Module_149.d,
    blocks: Src_editor_widget_builtIn_types.E
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"slider_on_change\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"slider_on_start_and_end\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"slider_set_range_value\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='-").concat(Module_75.a, ",").concat(Module_75.a, ",1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"slider_set_slide_value\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='-").concat(Module_75.a, ",").concat(Module_75.a, ",1'>100</field>\n        </shadow>\n      </value>\n    </block>"), Module_61.d, Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.E,
        widgetId: e,
        isSetProperty: true
      }), Module_33.sb({
        property: "__size",
        widgetType: Src_editor_widget_builtIn_types.E,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"slider_set_position\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"slider_set_visible\" uncache=\"true\">\n    ".concat(t, "\n    </block>"), "<block type=\"slider_set_disabled\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"slider_get_range_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"slider_get_slide_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.E,
        widgetId: e
      }), "<block type=\"slider_get_size\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"slider_get_position\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.E,
        widgetId: e
      }), Module_33.sb({
        property: "__disabled",
        widgetType: Src_editor_widget_builtIn_types.E,
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
      e.insertBlockSnippetGenerator("slider_on_change", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        var a = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        return i ? Module_4.n("argsOnSliderWidgetChange", [Module_4.o(tNR$widgetId)], i, [a]) : ""
      })
      e.insertBlockSnippetGenerator("slider_on_change_value", function () {
        return "value"
      })
      e.insertBlockSnippetGenerator("slider_on_start_and_end", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.statementToCode(n, r, "DO")
        var c = "startToSlide" === e.getFieldValue(o$block, "ACTION") ? "argsOnSliderWidgetStartToSlide" : "argsOnSliderWidgetEndToSlide"
        var l = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        return s ? Module_4.n(c, [Module_4.o(o$widgetId)], s, [l]) : ""
      })
      e.insertBlockSnippetGenerator("slider_on_start_and_end_value", function () {
        return "value"
      })
      e.insertBlockSnippetGenerator("slider_set_range_value", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */SetSliderWidgetMaxValue = "setSliderWidgetMaxValue"
        if ("minValue" === e.getFieldValue(o$block, "PROPERTY")) {
          SetSliderWidgetMaxValue = "setSliderWidgetMinValue"
        }
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n(SetSliderWidgetMaxValue, [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("slider_set_slide_value", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setSliderWidgetValue", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("slider_set_size", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setSliderWidgetWidth", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("slider_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */SetSliderWidgetPositionX = "setSliderWidgetPositionX"
        if ("positionY" === e.getFieldValue(o$block, "PROPERTY")) {
          SetSliderWidgetPositionX = "setSliderWidgetPositionY"
        }
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n(SetSliderWidgetPositionX, [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("slider_set_value", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "PROPERTY")) {
          case "maxValue":
            s = "setSliderWidgetMaxValue"
            break
          case "minValue":
            s = "setSliderWidgetMinValue"
            break
          default:
            s = "setSliderWidgetValue"
        }
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n(s, [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("slider_set_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "PROPERTY")) {
          case "positionX":
            s = "setSliderWidgetPositionX"
            break
          case "positionY":
            s = "setSliderWidgetPositionY"
            break
          default:
            s = "setSliderWidgetWidth"
        }
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n(s, [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("slider_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "show" === e.getFieldValue(o$block, "VISIBLE")
        return Module_4.n("setSliderWidgetVisible", [Module_4.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("slider_set_disabled", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "disabled" === e.getFieldValue(o$block, "DISPLAY")
        return Module_4.l(Module_4.n("setSliderWidgetDisabled", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("slider_get_range_value", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */GetSliderWidgetMaxValue = "getSliderWidgetMaxValue"
        if ("minValue" === e.getFieldValue(o$block, "PROPERTY")) {
          GetSliderWidgetMaxValue = "getSliderWidgetMinValue"
        }
        return Module_4.s(GetSliderWidgetMaxValue, [Module_4.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("slider_get_slide_value", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getSliderWidgetValue", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("slider_get_size", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */GetSliderWidgetWidth = "getSliderWidgetWidth"
        if ("height" === e.getFieldValue(o$block, "PROPERTY")) {
          GetSliderWidgetWidth = "getSliderWidgetHeight"
        }
        return Module_4.s(GetSliderWidgetWidth, [Module_4.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("slider_get_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */GetSliderWidgetPositionX = "getSliderWidgetPositionX"
        if ("positionY" === e.getFieldValue(o$block, "PROPERTY")) {
          GetSliderWidgetPositionX = "getSliderWidgetPositionY"
        }
        var c = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        return Module_4.s(GetSliderWidgetPositionX, [Module_4.o(o$widgetId), c])
      })
      e.insertBlockSnippetGenerator("slider_get_value", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getSliderWidgetValue", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("slider_get_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "PROPERTY")) {
          case "positionX":
            s = "getSliderWidgetPositionX"
            break
          case "positionY":
            s = "getSliderWidgetPositionY"
            break
          case "width":
            s = "getSliderWidgetWidth"
            break
          case "height":
            s = "getSliderWidgetHeight"
            break
          case "maxValue":
            s = "getSliderWidgetMaxValue"
            break
          case "minValue":
            s = "getSliderWidgetMinValue"
        }
        var c = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        return Module_4.s(s, [Module_4.o(o$widgetId), c])
      })
    },
    setBlockGroupProfile: function (e, t) {
      function n(e) {
        Module_61.l(this, e, [
          {
            label: "width",
            min: 68,
            max: Module_75.e,
            value: 100
          }, {
            label: "maxValue",
            min: -Module_75.a,
            max: Module_75.a,
            value: 100
          }, {
            label: "minValue",
            min: -Module_75.a,
            max: Module_75.a,
            value: 100
          }
        ])
      }
      e.insertBlockProfile("slider_on_change", {
        type: "slider_on_change",
        message0: "%{BKY_SLIDER_ON_CHANGE}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), Module_6.a({}, Bf), {
            type: "input_value",
            name: "VALUE",
            align: "CENTRE",
            check: ["Number"],
            default_shadow: "<shadow type=\"slider_on_change_value\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "slider_on_change_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("slider_on_change_value", {
        type: "slider_on_change_value",
        message0: "%{BKY_SLIDER_PARAM_VALUE}",
        output: "Number",
        required_context: "slider_on_change_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("slider_on_start_and_end", {
        type: "slider_on_start_and_end",
        message0: "%{BKY_SLIDER_ON_SLIDE_START_AND_END}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), Module_6.a({}, Bf), {
            type: "field_coco_dropdown",
            name: "ACTION",
            custom: true,
            options: function () {
              return [[t.Msg.SLIDER_START_TO_SLIDE, "startToSlide"], [t.Msg.SLIDER_END_TO_SLIDE, "endToSlide"]]
            }
          }, {
            type: "input_value",
            name: "VALUE",
            align: "CENTRE",
            check: ["Number"],
            default_shadow: "<shadow type=\"slider_on_start_and_end_value\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "slider_on_start_and_end_value_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("slider_on_start_and_end_value", {
        type: "slider_on_start_and_end_value",
        message0: "%{BKY_SLIDER_PARAM_VALUE}",
        output: "Number",
        required_context: "slider_on_start_and_end_value_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("slider_set_range_value", {
        type: "slider_set_range_value",
        message0: "%{BKY_SLIDER_SET_PROPERTY}",
        args0: [
          Module_6.a({}, Bf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.SLIDER_MAX_VALUE, "maxValue"], [t.Msg.SLIDER_MIN_VALUE, "minValue"]]
            },
            optOnchange: n
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
      e.insertBlockProfile("slider_set_slide_value", {
        type: "slider_set_slide_value",
        message0: "%{BKY_SLIDER_SET_SLIDE_VALUE}",
        args0: [
          Module_6.a({}, Bf), {
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
      e.insertBlockProfile("slider_set_size", {
        type: "slider_set_size",
        message0: "%{BKY_SLIDER_SET_PROPERTY}",
        args0: [
          Module_6.a({}, Bf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.WIDTH, "width"]]
            },
            optOnchange: function (e) {
              var /* [auto-meaningful-name] */this$source_block = this.source_block
              var n = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_shadow_field("NUM")
              if (n && "FieldNumber" === n.field_type) {
                n.set_value("100")
              }
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
      e.insertBlockProfile("slider_set_position", {
        type: "slider_set_position",
        message0: "%{BKY_SLIDER_SET_PROPERTY}",
        args0: [
          Module_6.a({}, Bf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
            },
            optOnchange: n
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
      e.insertBlockProfile("slider_set_value", {
        type: "slider_set_value",
        message0: "%{BKY_SLIDER_SET_VALUE}",
        args0: [
          Module_6.a({}, Bf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.SLIDER_MAX_VALUE, "maxValue"], [t.Msg.SLIDER_MIN_VALUE, "minValue"], [t.Msg.SLIDER_VALUE, "value"]]
            },
            optOnchange: n
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
      e.insertBlockProfile("slider_set_property", {
        type: "slider_set_property",
        message0: "%{BKY_SLIDER_SET_PROPERTY}",
        args0: [
          Module_6.a({}, Bf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"], [t.Msg.WIDTH, "width"]]
            },
            optOnchange: n
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
      e.insertBlockProfile("slider_set_visible", {
        type: "slider_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: function () {
              return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
            }
          }, Module_6.a({}, Bf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("slider_set_disabled", {
        type: "slider_set_disabled",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: function () {
              return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
            }
          }, Module_6.a({}, Bf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("slider_get_range_value", {
        type: "slider_get_range_value",
        message0: "%{BKY_SLIDER_GET_PROPERTY}",
        args0: [
          Module_6.a({}, Bf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.SLIDER_MAX_VALUE, "maxValue"], [t.Msg.SLIDER_MIN_VALUE, "minValue"]]
            }
          }
        ],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("slider_get_slide_value", {
        type: "slider_get_slide_value",
        message0: "%{BKY_SLIDER_GET_SLIDE_VALUE}",
        args0: [Module_6.a({}, Bf)],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("slider_get_size", {
        type: "slider_get_size",
        message0: "%{BKY_SLIDER_GET_PROPERTY}",
        args0: [
          Module_6.a({}, Bf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.WIDTH, "width"], [t.Msg.HEIGHT, "height"]]
            }
          }
        ],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("slider_get_position", {
        type: "slider_get_position",
        message0: "%{BKY_SLIDER_GET_PROPERTY}",
        args0: [
          Module_6.a({}, Bf), {
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
      e.insertBlockProfile("slider_get_value", {
        type: "slider_get_value",
        message0: "%{BKY_SLIDER_GET_VALUE}",
        args0: [Module_6.a({}, Bf)],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("slider_get_property", {
        type: "slider_get_property",
        message0: "%{BKY_SLIDER_GET_PROPERTY}",
        args0: [
          Module_6.a({}, Bf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"], [t.Msg.WIDTH, "width"], [t.Msg.HEIGHT, "height"], [t.Msg.SLIDER_MAX_VALUE, "maxValue"], [t.Msg.SLIDER_MIN_VALUE, "minValue"]]
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
    iconId: Module_149.d,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["slider_on_change", "slider_on_start_and_end", "slider_set_range_value", "slider_set_slide_value", "slider_set_size", "slider_set_position", "slider_set_visible", "slider_set_disabled", "slider_get_range_value", "slider_get_slide_value", "slider_get_size", "slider_get_position"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["slider_on_change", "slider_on_start_and_end"]
}
export { Pf }
export { Ff }
