/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-74
 */

import { Yh } from "../../../../unrestored/shared/1571/2636/index__part-68"
import { gm } from "../../../../unrestored/shared/1571/2636/index__part-73"
import * as /* [auto-meaningful-name] */Module_235 from /* 235 */"../../../../unrestored/shared/1571/2636/235"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"../../../../unrestored/shared/1571/2636/61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../../../../unrestored/shared/1571/2636/4"
import * as Types from "./types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../unrestored/shared/1571/2636/6"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */Module_552 from /* 552 */"../../../../unrestored/shared/1571/2636/552/index"
var vm = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  return React.createElement(Module_552.a, Object.assign({}, e, {
    onDatePickerChange: function (e) {
      if (e$onChange) {
        e$onChange("timeStamp", new Date(e).getTime())
      }
    }
  }))
}
var bm = {
  type: Types.TIME_PICKER_WIDGET,
  category: {
    iconId: Module_235.h,
    blocks: Types.TIME_PICKER_WIDGET
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"time_picker_on_select_done\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"time_picker_open_select_dialog\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"time_picker_get_time\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"time_picker_get_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, Module_61.e]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("time_picker_on_select_done", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        var a = e.valueToCode(t, n, "PARAM_TIME", e.ORDER_ATOMIC)
        var s = e.valueToCode(t, n, "PARAM_HOUR", e.ORDER_ATOMIC)
        var c = e.valueToCode(t, n, "PARAM_MINUTE", e.ORDER_ATOMIC)
        var l = e.valueToCode(t, n, "PARAM_SECOND", e.ORDER_ATOMIC)
        return o && i ? Module_4.n("argsOnTimePickerSelectDone", [Module_4.o(o)], i, [a, s, c, l]) : ""
      })
      e.insertBlockSnippetGenerator("time_picker_on_select_done_time", function () {
        return "time"
      })
      e.insertBlockSnippetGenerator("time_picker_on_select_done_hour", function () {
        return "hour"
      })
      e.insertBlockSnippetGenerator("time_picker_on_select_done_minute", function () {
        return "minute"
      })
      e.insertBlockSnippetGenerator("time_picker_on_select_done_second", function () {
        return "second"
      })
      e.insertBlockSnippetGenerator("time_picker_open_select_dialog", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? Module_4.n("openTimePickerDialog", [Module_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("time_picker_get_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        if (!o) {
          return ""
        }
        var i = e.getFieldValue(r, "TYPE")
        return i ? Module_4.s("getTimePickerValue", [Module_4.o(o), Module_4.o(i)]) : ""
      })
      e.insertBlockSnippetGenerator("time_picker_get_time", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? Module_4.s("getTimePickerTime", [Module_4.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Types.TIME_PICKER_WIDGET)
        }
      }
      e.insertBlockProfile("time_picker_on_select_done", {
        type: "time_picker_on_select_done",
        message0: "%{BKY_TIME_PICKER_ON_SELECT_DONE}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), Module_6.a({}, n), {
            type: "input_value",
            name: "PARAM_TIME",
            align: "CENTRE",
            default_shadow: "<shadow type=\"time_picker_on_select_done_time\" />"
          }, {
            type: "input_value",
            name: "PARAM_HOUR",
            align: "CENTRE",
            default_shadow: "<shadow type=\"time_picker_on_select_done_hour\" />"
          }, {
            type: "input_value",
            name: "PARAM_MINUTE",
            align: "CENTRE",
            default_shadow: "<shadow type=\"time_picker_on_select_done_minute\" />"
          }, {
            type: "input_value",
            name: "PARAM_SECOND",
            align: "CENTRE",
            default_shadow: "<shadow type=\"time_picker_on_select_done_second\" />"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "time_picker_on_select_done_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("time_picker_on_select_done_time", {
        type: "time_picker_on_select_done_time",
        message0: "%{BKY_TIME}",
        output: ["String"],
        required_context: "time_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("time_picker_on_select_done_hour", {
        type: "time_picker_on_select_done_hour",
        message0: "%{BKY_HOUR}",
        output: ["Number"],
        required_context: "time_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("time_picker_on_select_done_minute", {
        type: "time_picker_on_select_done_minute",
        message0: "%{BKY_MINUTE}",
        output: ["Number"],
        required_context: "time_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("time_picker_on_select_done_second", {
        type: "time_picker_on_select_done_second",
        message0: "%{BKY_SECOND}",
        output: ["Number"],
        required_context: "time_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("time_picker_open_select_dialog", {
        type: "time_picker_open_select_dialog",
        message0: "%{BKY_TIME_PICKER_OPEN_SELECT_DIALOG}",
        args0: [Module_6.a({}, n)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("time_picker_get_time", {
        type: "time_picker_get_time",
        message0: "%{BKY_TIME_PICKER_GET_TIME}",
        args0: [Module_6.a({}, n)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("time_picker_get_value", {
        type: "time_picker_get_value",
        message0: "%1 %{BKY_OF} %2",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "TYPE",
            custom: true,
            options: function () {
              return [[t.Msg.HOUR, "hour"], [t.Msg.MINUTE, "minute"], [t.Msg.SECOND, "second"]]
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
    iconId: Module_235.h,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["time_picker_on_select_done", "time_picker_open_select_dialog", "time_picker_get_value", "time_picker_get_time"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["time_picker_on_select_done"]
}
var ym = {
  icon: Module_235.h,
  title: "TimePickerWidget.widgetName",
  type: Types.TIME_PICKER_WIDGET,
  previewAreaWidgetTitle: "TimePickerWidget.widgetName",
  component: vm,
  editConfig: gm,
  blockConfig: bm,
  isInvisibleWidget: Module_235.f,
  widget: {
    isGlobalWidget: Module_235.e,
    size: {
      width: Module_235.g,
      height: Module_235.d
    },
    attributes: {
      timeStamp: 0,
      fontSize: Module_235.c,
      color: Module_235.b,
      backgroundColor: Module_235.a
    }
  }
}
var Em = [
  {
    type: "WidgetTitle"
  }
]
var Om = {
  type: Types.I,
  category: {
    iconId: "icon-widget-timer",
    blocks: Types.I
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"date_set_timing\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"date_get_timing_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("date_set_timing", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "STATE")
        var i = e.getFieldValue(r, "WIDGET_ID") || ""
        if (!i) {
          return ""
        }
        switch (o) {
          case "start":
            return Module_4.n("startTiming", [Module_4.o(i)])
          case "stop":
            return Module_4.n("stopTiming", [Module_4.o(i)])
          case "reset":
            return Module_4.n("resetTiming", [Module_4.o(i)])
          default:
            return ""
        }
      })
      e.insertBlockSnippetGenerator("date_get_timing_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? Module_4.s("getTimingValue", [Module_4.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Types.I)
        }
      }
      e.insertBlockProfile("date_set_timing", {
        type: "date_set_timing",
        message0: "%{BKY_DATE_SET_TIMER_STATE}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "STATE",
            custom: true,
            options: function () {
              return [[t.Msg.START, "start"], [t.Msg.STOP, "stop"], [t.Msg.RESET, "reset"]]
            }
          }, Module_6.a({}, n)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("date_get_timing_value", {
        type: "date_get_timing_value",
        message0: "%{BKY_DATE_TIMER}",
        args0: [Module_6.a({}, n)],
        output: "Number",
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-timer",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["date_set_timing", "date_get_timing_value"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: []
}
var wm = {
  icon: "icon-widget-timer",
  title: "TimerWidget.widgetName",
  type: Types.I,
  previewAreaWidgetTitle: "TimerWidget.widgetName",
  component: Yh,
  editConfig: Em,
  blockConfig: Om,
  isInvisibleWidget: true,
  widget: {
    isGlobalWidget: false,
    size: {
      width: 0,
      height: 0
    },
    attributes: {}
  }
}
var Am = [
  {
    type: "WidgetTitle"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/cloud-room"
  }
]
export { ym }
export { wm }
export { HTTPClientWidget as Sm } from "./network/http-client"
export { Am }
