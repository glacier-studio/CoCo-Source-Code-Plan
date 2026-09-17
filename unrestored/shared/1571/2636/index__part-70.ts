/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-70
 */

"use strict"

import { Yh, Qh } from "./index__part-68"
var $h
var Jh
import * as /* [auto-meaningful-name] */Module_135 from /* 135 */"./135"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"./14"
!function (e) {
  e.SOUND_MAN = "SOUND_MAN"
  e.SOUND_WOMAN = "SOUND_WOMAN"
  e.SOUND_CHILD = "SOUND_CHILD"
}(Jh || (Jh = {}));
(function (e) {
  e.SOUND_VOLUME = "SOUND_VOLUME"
  e.SOUND_RATE = "SOUND_RATE"
  e.INCREASE = "INCREASE"
  e.DECREASE = "DECREASE"
})($h || ($h = {}))
var tm = {
  type: Src_editor_widget_builtIn_types.b,
  category: {
    iconId: Module_135.c,
    blocks: Src_editor_widget_builtIn_types.b
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"audio_play_sound\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"audio_stop_sound\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"audio_pause_sound\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"audio_set_sound_file\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"SOUND_FILE_ID\">\n        <shadow type=\"audio_sound_file_list_dropdown\">\n          <field name=\"SOUND_FILE_ID\">").concat(Module_61.c, "</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"audio_set_volume_or_rate\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\"0,100,1\">100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"audio_change_volume_or_rate\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\">10</field>\n        </shadow>\n      </value>\n    </block>"), Module_61.d, "<block type=\"text2speech_speak_text\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat(Src_shared_packages_Crc_blink_src_index.Blink.Msg.TEXT2SPEECH_DEFAULT_TEXT, "</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"text2speech_speak_text_and_wait\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat(Src_shared_packages_Crc_blink_src_index.Blink.Msg.TEXT2SPEECH_DEFAULT_TEXT, "</field>\n        </shadow>\n      </value>\n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("audio_sound_file_list_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "SOUND_FILE_ID") || ""
        return o && o !== Module_9.h ? Module_4.o(o) : ""
      })
      e.insertBlockSnippetGenerator("audio_play_sound", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return Module_4.n("audioPlaySound", [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("audio_stop_sound", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return Module_4.n("audioStopSound", [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("audio_pause_sound", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return Module_4.n("audioPauseSound", [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("audio_set_sound_file", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "SOUND_FILE_ID", e.ORDER_FUNCTION_CALL)
        return i ? Module_4.n("audioSetSoundFile", [Module_4.o(o), i]) : (Module_14.a.condition(false, {
          type: "warning",
          messageId: "soundBlockNoSelectFile"
        }), "")
      })
      e.insertBlockSnippetGenerator("audio_set_volume_or_rate", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "OP") || ""
        var a = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""
        return "SOUND_VOLUME" === i ? Module_4.n("audioSetVolume", [Module_4.o(o), a]) : Module_4.n("audioSetRate", [Module_4.o(o), a])
      })
      e.insertBlockSnippetGenerator("audio_change_volume_or_rate", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "OP") || ""
        var a = e.getFieldValue(r, "CHANGE") || ""
        var s = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""
        return "SOUND_VOLUME" === i ? Module_4.n("audioChangeVolume", [Module_4.o(o), Module_4.o(a), s]) : Module_4.n("audioChangeRate", [Module_4.o(o), Module_4.o(a), s])
      })
      e.insertBlockSnippetGenerator("text2speech_speak_text", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "OP") || ""
        var i = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""
        return (i = i.replace(/[#&%]/g, "").substr(0, 2048)) ? Module_4.n("text2speechSpeakText", [Module_4.o(o), i]) : ""
      })
      e.insertBlockSnippetGenerator("text2speech_speak_text_and_wait", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "OP") || ""
        var i = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""
        return (i = i.replace(/[#&%]/g, "").substr(0, 2048)) ? Module_4.j("text2speechSpeakTextAndWait", [Module_4.o(o), i]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.b)
        }
      }
      e.insertBlockProfile("audio_sound_file_list_dropdown", {
        type: "audio_sound_file_list_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "SOUND_FILE_ID",
            custom: true,
            options: function () {
              return Module_46.c().getSoundFiles()
            }
          }
        ],
        output: ["String"]
      })
      e.insertBlockProfile("audio_play_sound", {
        type: "audio_play_sound",
        message0: "%{BKY_AUDIO_PLAY_SOUND}",
        args0: [Module_6.a({}, n)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("audio_stop_sound", {
        type: "audio_stop_sound",
        message0: "%{BKY_AUDIO_STOP_SOUND}",
        args0: [Module_6.a({}, n)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("audio_pause_sound", {
        type: "audio_pause_sound",
        message0: "%{BKY_AUDIO_PAUSE_SOUND}",
        args0: [Module_6.a({}, n)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("audio_set_sound_file", {
        type: "audio_set_sound_file",
        message0: "%{BKY_AUDIO_SET_SOUND_FILE}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "SOUND_FILE_ID",
            check: ["String"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("audio_set_volume_or_rate", {
        type: "audio_set_volume_or_rate",
        message0: "%{BKY_AUDIO_SET_VOLUME_OR_RATE}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "OP",
            options: [["%{BKY_SOUND_VOLUME}", $h.SOUND_VOLUME], ["%{BKY_SOUND_RATE}", $h.SOUND_RATE]],
            optOnchange: function (e) {
              var /* [auto-meaningful-name] */this$source_block = this.source_block
              var n = e || (null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_field_value("OP")) || ""
              var r = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_shadow_field("VALUE")
              if (r && "FieldNumber" === r.field_type) {
                var o = "SOUND_VOLUME" === n ? Module_135.f : Module_135.d
                var i = "SOUND_VOLUME" === n ? Module_135.g : Module_135.e
                r.set_constraints(i, o, 1)
              }
            }
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("audio_change_volume_or_rate", {
        type: "audio_change_volume_or_rate",
        message0: "%{BKY_AUDIO_CHANGE_VOLUME_OR_RATE}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "OP",
            options: [["%{BKY_SOUND_VOLUME}", $h.SOUND_VOLUME], ["%{BKY_SOUND_RATE}", $h.SOUND_RATE]]
          }, {
            type: "field_coco_dropdown",
            custom: true,
            name: "CHANGE",
            options: [["%{BKY_INCREASE}", $h.INCREASE], ["%{BKY_DECREASE}", $h.DECREASE]]
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text2speech_speak_text", {
        type: "text2speech_speak_text",
        message0: "%{BKY_TEXT2SPEECH_SPEAK_TEXT}",
        args0: [
          {
            type: "field_coco_dropdown",
            custom: true,
            name: "OP",
            options: [["%{BKY_SOUND_MAN}", Jh.SOUND_MAN], ["%{BKY_SOUND_WOMAN}", Jh.SOUND_WOMAN], ["%{BKY_SOUND_CHILD}", Jh.SOUND_CHILD]]
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["String"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text2speech_speak_text_and_wait", {
        type: "text2speech_speak_text_and_wait",
        message0: "%{BKY_TEXT2SPEECH_SPEAK_TEXT_AND_WAIT}",
        args0: [
          {
            type: "field_coco_dropdown",
            custom: true,
            name: "OP",
            options: [["%{BKY_SOUND_MAN}", Jh.SOUND_MAN], ["%{BKY_SOUND_WOMAN}", Jh.SOUND_WOMAN], ["%{BKY_SOUND_CHILD}", Jh.SOUND_CHILD]]
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["String"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: Module_135.c,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["audio_play_sound", "audio_stop_sound", "audio_pause_sound", "audio_set_sound_file", "audio_set_volume_or_rate", "audio_change_volume_or_rate", "text2speech_speak_text", "text2speech_speak_text_and_wait"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: []
}
var nm = {
  icon: Module_135.c,
  title: "AudioWidget.widgetName",
  type: Src_editor_widget_builtIn_types.b,
  previewAreaWidgetTitle: "AudioWidget.widgetName",
  component: Yh,
  editConfig: Qh,
  blockConfig: tm,
  isInvisibleWidget: Module_135.b,
  widget: {
    isGlobalWidget: Module_135.a,
    size: {
      width: 0,
      height: 0
    },
    attributes: {
      fileId: "",
      audioVolume: 100,
      audioRate: 100
    }
  }
}
var rm = [
  {
    type: "WidgetTitle"
  }
]
var om = {
  type: Src_editor_widget_builtIn_types.t,
  category: {
    iconId: "icon-widget-gyroscope",
    blocks: Src_editor_widget_builtIn_types.t
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"gyroscope_on_phone_shake\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"gyroscope_phone_get_compass\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"gyroscope_phone_get_orientation_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("gyroscope_on_phone_shake", function (t, n) {
        var r = e.statementToCode(t, n, "DO")
        return r ? Module_4.n("onGyroscopePhoneShake", [Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))], r) : ""
      })
      e.insertBlockSnippetGenerator("gyroscope_phone_get_compass", function () {
        return Module_4.s("getGyroscopeCompassValue")
      })
      e.insertBlockSnippetGenerator("gyroscope_phone_get_orientation_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "ORIENTATION") || ""
        return "gravity" === (e.getFieldValue(r, "TYPE") || "") ? Module_4.s("getGyroscopeGravity".concat(o.toUpperCase())) : Module_4.s("getGyroscopeRotation".concat(o.toUpperCase()))
      })
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("gyroscope_on_phone_shake", {
        type: "gyroscope_on_phone_shake",
        message0: "%{BKY_GYROSCOPE_ON_PHONE_SHAKE}",
        args0: [
          Module_4.e("%{BKY_BLOCK_PHONE_SHAKE_ICON}", true), {
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
      e.insertBlockProfile("gyroscope_phone_get_compass", {
        type: "gyroscope_phone_get_compass",
        message0: "%{BKY_GYROSCOPE_PHONE_GET_COMPASS}",
        output: ["Number", "String"],
        colour: "%{BKY_SENSING_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_GYROSCOPE_PHONE_GET_COMPASS_TOOLTIP}"
      })
      e.insertBlockProfile("gyroscope_phone_get_orientation_value", {
        type: "gyroscope_phone_get_orientation_value",
        message0: "%{BKY_GYROSCOPE_PHONE_GET_ORIENTATION_VALUE}",
        args0: [
          {
            type: "field_coco_dropdown",
            custom: true,
            name: "ORIENTATION",
            options: [["X", "x"], ["Y", "y"], ["Z", "z"]]
          }, {
            type: "field_coco_dropdown",
            custom: true,
            name: "TYPE",
            options: [[t.Msg.GRAVITY, "gravity"], [t.Msg.ROTATION, "rotation"]]
          }
        ],
        output: ["Number", "String"],
        colour: "%{BKY_SENSING_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-gyroscope",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["gyroscope_on_phone_shake", "gyroscope_phone_get_compass", "gyroscope_phone_get_orientation_value"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["gyroscope_on_phone_shake"]
}
var im = {
  icon: "icon-widget-gyroscope",
  title: "GyroscopeWidget.widgetName",
  type: Src_editor_widget_builtIn_types.t,
  previewAreaWidgetTitle: "GyroscopeWidget.widgetName",
  component: Yh,
  editConfig: rm,
  blockConfig: om,
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
var am = [
  {
    type: "WidgetTitle"
  }
]
var sm = {
  type: Src_editor_widget_builtIn_types.K,
  category: {
    iconId: "icon-widget-volume-sensor",
    blocks: Src_editor_widget_builtIn_types.K
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"volume_sensor_set_detection_state\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"volume_sensor_get_current_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("volume_sensor_set_detection_state", function (t, n) {
        var r = t.blocks[n]
        switch (e.getFieldValue(r, "STATE")) {
          case "open":
            return Module_4.j("startVolumeSensorDetection")
          case "close":
            return Module_4.n("stopVolumeSensorDetection")
          default:
            return ""
        }
      })
      e.insertBlockSnippetGenerator("volume_sensor_get_current_value", function () {
        return Module_4.s("getVolumeSensorCurrentValue")
      })
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("volume_sensor_set_detection_state", {
        type: "volume_sensor_set_detection_state",
        message0: "%{BKY_VOLUME_SENSOR_SET_DETECTION_STATE}",
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
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SENSING_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("volume_sensor_get_current_value", {
        type: "volume_sensor_get_current_value",
        message0: "%{BKY_VOLUME_SENSOR_GET_CURRENT_VALUE}",
        args0: [],
        output: "Number",
        colour: "%{BKY_SENSING_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-volume-sensor",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["volume_sensor_set_detection_state", "volume_sensor_get_current_value"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: []
}
var cm = {
  icon: "icon-widget-volume-sensor",
  title: "VolumeSensorWidget.widgetName",
  type: Src_editor_widget_builtIn_types.K,
  previewAreaWidgetTitle: "VolumeSensorWidget.widgetName",
  component: Yh,
  editConfig: am,
  blockConfig: sm,
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
export { nm }
export { im }
export { cm }
