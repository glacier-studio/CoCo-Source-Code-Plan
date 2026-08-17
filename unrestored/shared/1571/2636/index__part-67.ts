/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-67
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_228 from /* 228 */"./228/index"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"./46/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_144 from /* 144 */"./144"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"./20/index"
var Ph = function (e) {
  return {
    type: "group",
    name: e.Msg.BOUNDARY,
    options: Bh(e)
  }
}
var Bh = function (e) {
  return [
    {
      type: "basic",
      text: e.Msg.BOUNDARY_ANY,
      value: "__boundary_any"
    }, {
      type: "basic",
      text: e.Msg.BOUNDARY_LEFT,
      value: "__boundary_left"
    }, {
      type: "basic",
      text: e.Msg.BOUNDARY_RIGHT,
      value: "__boundary_right"
    }, {
      type: "basic",
      text: e.Msg.BOUNDARY_TOP,
      value: "__boundary_top"
    }, {
      type: "basic",
      text: e.Msg.BOUNDARY_BOTTOM,
      value: "__boundary_bottom"
    }
  ]
}
var Fh = function (e) {
  return {
    type: "field_coco_dropdown",
    custom: true,
    name: "SECTION",
    options: function () {
      return [[e.Msg.SCALE_A, "scale"], [e.Msg.SCALE_X, "scale_x"], [e.Msg.SCALE_Y, "scale_y"]]
    }
  }
}
var Gh = function (e) {
  return {
    type: "field_coco_dropdown",
    custom: true,
    name: "METHOD",
    options: function () {
      return [[e.Msg.INCREASE, "increase"], [e.Msg.DECREASE, "decrease"]]
    }
  }
}
var Wh = {
  type: Src_editor_widget_builtIn_types.a,
  category: {
    iconId: "icon-widget-actor",
    blocks: Src_editor_widget_builtIn_types.a
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-actor",
    blocks: []
  },
  getTemplate: function (e) {
    var /* [auto-meaningful-name] */r$attributes
    var n = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    var r = Module_33.Cb(e)
    var o = null === r || undefined === r || null === (r$attributes = r.attributes) || undefined === r$attributes ? undefined : r$attributes.actionList[0]
    var i = (null === o || undefined === o ? undefined : o.interval) || 200
    return [
      "<block type=\"actor_on_actor_press\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"actor_on_actor_bump\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"actor_on_actor_leave\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), Module_61.d, Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.a,
        title: "移动",
        lineId: "move"
      }), "<block type=\"actor_move_forward\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\",,1\">10</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"actor_move_to\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"actor_move_to_position\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"X\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\",,1\">100</field>\n        </shadow>\n      </value>\n      <value name=\"Y\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\",,1\">100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"actor_move_to_position_in_time\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"X\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\",,1\">100</field>\n        </shadow>\n      </value>\n      <value name=\"Y\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\",,1\">100</field>\n        </shadow>\n      </value>\n      <value name=\"SECONDS\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\"0\">1</field>\n        </shadow>\n      </value>\n    </block>"), Module_61.d, "<block type=\"actor_set_position\" uncache=\"true\">\n    ".concat(n, "\n    <value name=\"NUM\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=',,1'>100</field>\n      </shadow>\n    </value>\n    </block>"), "<block type=\"actor_change_position\" uncache=\"true\">\n    ".concat(n, "\n    <value name=\"NUM\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=',,1'>100</field>\n      </shadow>\n    </value>\n    </block>"), "<block type=\"actor_change_position_type_in_time\" uncache=\"true\">\n    ".concat(n, "\n    <value name=\"NUM\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=',,1'>100</field>\n      </shadow>\n    </value>\n    <value name=\"SECONDS\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"0\">1</field>\n      </shadow>\n    </value>\n    </block>"), "<block type=\"actor_move_z_index\" uncache=\"true\">\n    ".concat(n, "\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.a,
        title: "方向",
        lineId: "rotate"
      }), "<block type=\"actor_set_rotation\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" controller=\"").concat(Src_shared_packages_Crc_blink_src_index.I.ControllerType.ANGLE_SCALE, "\" constraints=\"-180,180,,true\">90</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"actor_face_to\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"actor_rotate\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\",,1\">90</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"actor_rotate_around\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\",,1\">90</field>\n        </shadow>\n      </value>\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.a,
        title: "造型",
        lineId: "style"
      }), "<block type=\"actor_set_current_style_embed\" uncache=\"true\">\n      ".concat(n, "\n       <value name=\"ACTOR_ACTION_WRAPPER\">\n        <shadow type=\"actor_action_input\"></shadow>\n      </value>\n       <value name=\"ACTOR_STYLE_WRAPPER\">\n        <shadow type=\"actor_style_input\"></shadow>\n      </value>\n    </block>"), "<block type=\"actor_previous_next_style\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.a,
        title: "动作",
        lineId: "action"
      }), "<block type=\"actor_play_action_dropdown\" uncache=\"true\">\n      <mutation pos='true'></mutation>\n      ".concat(n, "\n       <value name=\"ACTOR_ACTION_WRAPPER\">\n        <shadow type=\"actor_action_input\"></shadow>\n      </value>\n      <value name=\"ACTION_INTERVAL\">\n       <shadow type=\"action_interval\">\n           <field name=\"NUM\">").concat(i, "</field>\n        </shadow>\n      </value>\n      <value name=\"PLAY_COUNT\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"actor_play_action_and_wait_dropdown\" uncache=\"true\">\n      ".concat(n, "\n       <value name=\"ACTOR_ACTION_WRAPPER\">\n        <shadow type=\"actor_action_input\"></shadow>\n      </value>\n      <value name=\"ACTION_INTERVAL\">\n        <shadow type=\"action_interval\">\n           <field name=\"NUM\">").concat(i, "</field>\n        </shadow>\n      </value>\n      <value name=\"PLAY_COUNT\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"actor_stop_action\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.a,
        title: "比例大小",
        lineId: "scale"
      }), "<block type=\"actor_set_scale_with_section\" uncache=\"true\">\n      ".concat(n, "\n        <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='").concat(100 * Module_144.e, ",").concat(100 * Module_144.c, ",1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"actor_change_scale_with_section\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='0,,1'>10</field>\n        </shadow>\n      </value>\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.a,
        title: "翻转",
        lineId: "flip"
      }), "<block type=\"actor_set_flipped\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.a,
        title: "不透明度",
        lineId: "opacity"
      }), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.a,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"actor_change_opacity\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='0,,1'>10</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"actor_show_hide_in_time\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"SECONDS\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\"0\">1</field>\n        </shadow>\n      </value>\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.a,
        title: "显隐",
        lineId: "visivle"
      }), Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.a,
        widgetId: e,
        isSetProperty: true
      }), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.a,
        title: "对话",
        lineId: "dialog"
      }), "<block type=\"actor_show_dialog\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"TEXT\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">Hi</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"actor_show_dialog_in_time\" uncache=\"true\">\n      ".concat(n, "\n      <value name=\"TEXT\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">Hi</field>\n        </shadow>\n      </value>\n      <value name=\"SECONDS\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\"0\">2</field>\n        </shadow>\n      </value>\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.a,
        title: "返回值",
        lineId: "getter"
      }), "<block type=\"actor_get_scale_with_section\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"actor_get_rotation\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.a,
        widgetId: e
      }), "<block type=\"actor_get_position\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"actor_get_style_index\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"actor_get_action_name\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), Module_61.d, "<block type=\"actor_check_if_pressed\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"actor_check_if_bumped\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"actor_check_if_left\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), "<block type=\"actor_check_if_flipped\" uncache=\"true\">\n      ".concat(n, "\n    </block>"), Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.a,
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
      e.insertBlockSnippetGenerator("actor_on_actor_press", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "PRESS_EVENT") || ""
        var c = e.statementToCode(n, r, "DO")
        if (!c) {
          return ""
        }
        var l = e.valueToCode(n, r, "POSITION_X", e.ORDER_FUNCTION_CALL)
        var u = e.valueToCode(n, r, "POSITION_Y", e.ORDER_FUNCTION_CALL)
        return "press" === s ? Module_4.n("onActorPress", [Module_4.o(o$widgetId)], c, [l, u]) : "pressIn" === s ? Module_4.n("onActorPressIn", [Module_4.o(o$widgetId)], c, [l, u]) : "pressHold" === s ? Module_4.n("argsOnCanvasPressHold", [Module_4.o(o$widgetId)], c, [l, u]) : Module_4.n("onActorPressOut", [Module_4.o(o$widgetId)], c, [l, u])
      })
      e.insertBlockSnippetGenerator("actor_on_actor_press_positionX", function () {
        return "canvasPressPositionX"
      })
      e.insertBlockSnippetGenerator("actor_on_actor_press_positionY", function () {
        return "canvasPressPositionY"
      })
      e.insertBlockSnippetGenerator("actor_on_actor_bump", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "BUMP_TYPE") || ""
        var c = e.statementToCode(n, r, "DO")
        if (!c) {
          return ""
        }
        var /* [auto-meaningful-name] */OnActorBumpPosition = "onActorBumpPosition"
        if (s.startsWith("ACTOR_")) {
          OnActorBumpPosition = "onActorBumpActor"
        } else {
          if (s.startsWith("__boundary_")) {
            OnActorBumpPosition = "onActorBumpBoundary"
          }
        }
        return Module_4.n(OnActorBumpPosition, [Module_4.o(o$widgetId), Module_4.o(s)], c)
      })
      e.insertBlockSnippetGenerator("actor_on_actor_leave", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "LEAVE_TYPE") || ""
        var c = e.statementToCode(n, r, "DO")
        return c ? Module_4.n("onActorLeaveBoundary", [Module_4.o(o$widgetId), Module_4.o(s)], c) : ""
      })
      e.insertBlockSnippetGenerator("actor_rotate", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("actorRotate", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_move_forward", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("actorMoveForward", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_set_rotation", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("actorSetRotation", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_face_to", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "TARGET")
        return s ? Module_4.n("actorFaceTo", [Module_4.o(o$widgetId), Module_4.o(s)]) : ""
      })
      e.insertBlockSnippetGenerator("actor_rotate_around", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "TARGET")
        if (!s) {
          return ""
        }
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("actorRotateAround", [Module_4.o(o$widgetId), Module_4.o(s), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_play_action", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "ACTOR_ACTION_ID")
        var c = e.getFieldValue(o$block, "CYCLIC_FLAG")
        var l = e.valueToCode(n, r, "ACTION_INTERVAL", e.ORDER_FUNCTION_CALL)
        var u = e.valueToCode(n, r, "PLAY_COUNT", e.ORDER_FUNCTION_CALL)
        return s && l && c ? (u = ("false" === c ? 1 / 0 : u || 1).toString(), Module_4.l(Module_4.n("actorPlayAction", [Module_4.o(o$widgetId), Module_4.o(s), l, u]), o$block, e)) : ""
      })
      e.insertBlockSnippetGenerator("actor_play_action_and_wait", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "ACTOR_ACTION_ID")
        var c = e.valueToCode(n, r, "ACTION_INTERVAL", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(n, r, "PLAY_COUNT", e.ORDER_FUNCTION_CALL)
        return s && c && l ? Module_4.l(Module_4.j("actorPlayActionAndWait", [Module_4.o(o$widgetId), Module_4.o(s), c, l]), o$block, e) : ""
      })
      e.insertBlockSnippetGenerator("action_interval", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "INTERVAL")
        return JSON.stringify(parseInt(o))
      })
      e.insertBlockSnippetGenerator("actor_play_action_embed", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "ACTOR_ACTION_WRAPPER", e.ORDER_FUNCTION_CALL)
        var c = e.getFieldValue(o$block, "CYCLIC_FLAG")
        var l = e.valueToCode(n, r, "ACTION_INTERVAL", e.ORDER_FUNCTION_CALL)
        var u = e.valueToCode(n, r, "PLAY_COUNT", e.ORDER_FUNCTION_CALL)
        return s && l && c ? (u = ("false" === c ? 1 / 0 : u || 1).toString(), Module_4.l(Module_4.n("actorPlayAction", [Module_4.o(o$widgetId), s, l, u]), o$block, e)) : ""
      })
      e.insertBlockSnippetGenerator("actor_play_action_and_wait_embed", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "ACTOR_ACTION_WRAPPER", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "ACTION_INTERVAL", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(n, r, "PLAY_COUNT", e.ORDER_FUNCTION_CALL)
        return s && c && l ? Module_4.l(Module_4.j("actorPlayActionAndWait", [Module_4.o(o$widgetId), s, c, l]), o$block, e) : ""
      })
      e.insertBlockSnippetGenerator("actor_play_action_dropdown", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "ACTOR_ACTION_WRAPPER", e.ORDER_FUNCTION_CALL)
        var c = e.getFieldValue(o$block, "CYCLIC_FLAG")
        var l = e.valueToCode(n, r, "ACTION_INTERVAL", e.ORDER_FUNCTION_CALL)
        var u = e.valueToCode(n, r, "PLAY_COUNT", e.ORDER_FUNCTION_CALL)
        return s && l && c ? (u = ("false" === c ? 1 / 0 : u || 1).toString(), Module_4.l(Module_4.n("actorPlayAction", [Module_4.o(o$widgetId), s, l, u]), o$block, e)) : ""
      })
      e.insertBlockSnippetGenerator("actor_play_action_and_wait_dropdown", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "ACTOR_ACTION_WRAPPER", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "ACTION_INTERVAL", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(n, r, "PLAY_COUNT", e.ORDER_FUNCTION_CALL)
        return s && c && l ? Module_4.l(Module_4.j("actorPlayActionAndWait", [Module_4.o(o$widgetId), s, c, l]), o$block, e) : ""
      })
      e.insertBlockSnippetGenerator("actor_stop_action", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.n("actorStopAction", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("actor_move_to", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "TARGET")
        return s ? Module_4.l(Module_4.n("actorMoveTo", [Module_4.o(o$widgetId), Module_4.o(s)]), o$block, e) : ""
      })
      e.insertBlockSnippetGenerator("actor_move_to_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "X", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "Y", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("actorMoveToPosition", [Module_4.o(o$widgetId), s, c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var c = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "actorSetPositionX" : "actorSetPositionY"
        return Module_4.l(Module_4.n(c, [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_change_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var c = e.getFieldValue(o$block, "METHOD")
        if (!c) {
          return ""
        }
        var l = "increase" === c ? "1" : "-1"
        var u = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "changeActorPositionX" : "changeActorPositionY"
        return Module_4.l(Module_4.n(u, [Module_4.o(o$widgetId), s, l]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_move_to_position_in_time", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "X", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "Y", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(n, r, "SECONDS", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("moveToPositionInTime", [Module_4.o(o$widgetId), l, s, c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_change_position_type_in_time", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "SECONDS", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var l = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "changeActorPositionXInTime" : "changeActorPositionYInTime"
        var u = e.getFieldValue(o$block, "METHOD")
        if (!u) {
          return ""
        }
        var d = "increase" === u ? "1" : "-1"
        return Module_4.l(Module_4.n(l, [Module_4.o(o$widgetId), c, d, s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "show" === e.getFieldValue(o$block, "DISPLAY")
        return Module_4.n("setActorVisible", [Module_4.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("actor_show_hide_in_time", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "SECONDS", e.ORDER_FUNCTION_CALL)
        var c = "show" === e.getFieldValue(o$block, "DISPLAY") ? "setActorFadeIn" : "setActorFadeOut"
        return Module_4.l(Module_4.n(c, [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_set_scale", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return s ? Module_4.l(Module_4.n("setActorScale", [Module_4.o(o$widgetId), s]), o$block, e) : ""
      })
      e.insertBlockSnippetGenerator("actor_change_scale", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        if (!s) {
          return ""
        }
        var c = e.getFieldValue(o$block, "METHOD")
        if (!c) {
          return ""
        }
        var l = "increase" === c ? "1" : "-1"
        return Module_4.l(Module_4.n("changeActorScale", [Module_4.o(o$widgetId), s, l]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_set_scale_with_section", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        if (!s) {
          return ""
        }
        var c = e.getFieldValue(o$block, "SECTION")
        return c ? Module_4.l(Module_4.n("setActorScaleWithSection", [Module_4.o(o$widgetId), Module_4.o(c), s]), o$block, e) : ""
      })
      e.insertBlockSnippetGenerator("actor_change_scale_with_section", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        if (!s) {
          return ""
        }
        var c = e.getFieldValue(o$block, "SECTION")
        if (!c) {
          return ""
        }
        var l = e.getFieldValue(o$block, "METHOD")
        if (!l) {
          return ""
        }
        var u = "increase" === l ? "1" : "-1"
        return Module_4.l(Module_4.n("changeActorScaleWithSection", [Module_4.o(o$widgetId), Module_4.o(c), s, u]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_change_opacity", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        if (!s) {
          return ""
        }
        var c = e.getFieldValue(o$block, "METHOD")
        if (!c) {
          return ""
        }
        var l = "increase" === c ? "1" : "-1"
        return Module_4.l(Module_4.n("changeActorOpacity", [Module_4.o(o$widgetId), s, l]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_get_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "PROPERTY")
        return s ? Module_4.s("getActorProperty", [Module_4.o(o$widgetId), Module_4.o(s)]) : ""
      })
      e.insertBlockSnippetGenerator("actor_get_rotation", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getActorRotation", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("actor_get_scale_with_section", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "SECTION")
        return s ? Module_4.s("getActorScaleWithSection", [Module_4.o(o$widgetId), Module_4.o(s)]) : ""
      })
      e.insertBlockSnippetGenerator("actor_get_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "getActorPositionX" : "getActorPositionY"
        return Module_4.s(s, [Module_4.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("actor_set_flipped", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "FLIPPED")
        return Module_4.n("setActorFlipped", [Module_4.o(o$widgetId), Module_4.o(s)])
      })
      e.insertBlockSnippetGenerator("actor_check_if_flipped", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "FLIPPED")
        return Module_4.s("checkIfActorFlipped", [Module_4.o(o$widgetId), Module_4.o(s)])
      })
      e.insertBlockSnippetGenerator("actor_move_z_index", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "MOVE_TYPE")
        return Module_4.n("moveActorZIndex", [Module_4.o(o$widgetId), Module_4.o(s)])
      })
      e.insertBlockSnippetGenerator("actor_previous_next_style", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "DIRECTION")
        if (!s) {
          return ""
        }
        var c = "random" === s ? Module_4.o("random") : "next" === s ? "1" : "-1"
        return Module_4.n("changeActorStyle", [Module_4.o(o$widgetId), c])
      })
      e.insertBlockSnippetGenerator("actor_set_current_style", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "ACTOR_ACTION_ID")
        var c = e.getFieldValue(o$block, "ACTOR_STYLE_ID")
        return s && c ? Module_4.n("setActorStyle", [Module_4.o(o$widgetId), Module_4.o(c), Module_4.o(s)]) : ""
      })
      e.insertBlockSnippetGenerator("actor_action_input", function (t, n) {
        var r = t.blocks[n]
        return JSON.stringify(e.getFieldValue(r, "ACTOR_ACTION_ID"))
      })
      e.insertBlockSnippetGenerator("actor_style_input", function (t, n) {
        var r = t.blocks[n]
        return JSON.stringify(e.getFieldValue(r, "ACTOR_STYLE_ID"))
      })
      e.insertBlockSnippetGenerator("actor_set_current_style_embed", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "ACTOR_ACTION_WRAPPER", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "ACTOR_STYLE_WRAPPER", e.ORDER_FUNCTION_CALL)
        return s ? Module_4.l(Module_4.n("setActorStyle", [Module_4.o(o$widgetId), c, s]), o$block, e) : ""
      })
      e.insertBlockSnippetGenerator("actor_show_dialog", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "TYPE")
        if (!s) {
          return ""
        }
        var c = e.valueToCode(n, r, "TEXT", e.ORDER_FUNCTION_CALL)
        var l = "talk" === s ? "showActorTalkDialog" : "showActorThinkDialog"
        return Module_4.l(Module_4.n(l, [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_show_dialog_in_time", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "TYPE")
        if (!s) {
          return ""
        }
        var c = e.valueToCode(n, r, "TEXT", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(n, r, "SECONDS", e.ORDER_FUNCTION_CALL)
        var u = "talk" === s ? "showActorTalkDialog" : "showActorThinkDialog"
        return Module_4.l(Module_4.n(u, [Module_4.o(o$widgetId), c, l]), o$block, e)
      })
      e.insertBlockSnippetGenerator("actor_check_if_pressed", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("checkIfActorPressed", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("actor_check_if_bumped", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "BUMP_TYPE") || ""
        var /* [auto-meaningful-name] */CheckIfActorBumpedStageMouse = "checkIfActorBumpedStageMouse"
        if (s.startsWith("ACTOR_")) {
          CheckIfActorBumpedStageMouse = "checkIfActorBumpedActor"
        } else {
          if (s.startsWith("__boundary_")) {
            CheckIfActorBumpedStageMouse = "checkIfActorBumpedBoundary"
          }
        }
        return Module_4.s(CheckIfActorBumpedStageMouse, [Module_4.o(o$widgetId), Module_4.o(s)])
      })
      e.insertBlockSnippetGenerator("actor_check_if_left", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "LEAVE_TYPE") || ""
        return Module_4.s("checkIfActorLeftBoundary", [Module_4.o(o$widgetId), Module_4.o(s)])
      })
      e.insertBlockSnippetGenerator("actor_get_style_index", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getActorStyleIndex", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("actor_get_action_name", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getActorActionName", [Module_4.o(tEN$widgetId)])
      })
    },
    setBlockGroupProfile: function (e, t) {
      var /* [auto-meaningful-name] */BKY_BLOCK_TAB_ICON = "%{BKY_BLOCK_TAB_ICON}"
      var r = {
        type: "field_coco_dropdown",
        custom: true,
        name: "WIDGET_ID",
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
        }
      }
      function o(e) {
        if (!t.events.is_undoing()) {
          var /* [auto-meaningful-name] */this$source_block$addMutation
          var /* [auto-meaningful-name] */this$source_block$removeMutation
          var /* [auto-meaningful-name] */this$source_block = this.source_block
          if (this$source_block) {
            if ("true" === e) {
              if (!(null === (this$source_block$addMutation = this$source_block.addMutation) || undefined === this$source_block$addMutation)) {
                this$source_block$addMutation.call(this$source_block)
              }
            } else if (!(null === (this$source_block$removeMutation = this$source_block.removeMutation) || undefined === this$source_block$removeMutation)) {
              this$source_block$removeMutation.call(this$source_block)
            }
          }
        }
      }
      var i
      var a
      var /* [auto-meaningful-name] */ShadowType_Math_number_FieldName_NUM_Constraints_11_2_field_shadow = "<shadow type=\"math_number\"><field name=\"NUM\" constraints=\"1,,1\">2</field></shadow>"
      function c() {
        var /* [auto-meaningful-name] */this$source_block
        var /* [auto-meaningful-name] */this$source_block1
        var n
        var r = i || (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || (null === (this$source_block1 = this.source_block) || undefined === this$source_block1 || null === (n = this$source_block1.get_parent()) || undefined === n ? undefined : n.get_field_value("WIDGET_ID")) || Module_228.a()
        return Module_46.c().getActorActionList(r)
      }
      function l(e) {
        var t
        var n
        var r
        var o
        var /* [auto-meaningful-name] */this$source_block = this.source_block
        var c = i || (null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || (null === this$source_block || undefined === this$source_block || null === (t = this$source_block.get_parent()) || undefined === t ? undefined : t.get_field_value("WIDGET_ID"))
        var l = Module_46.c().getActorStyleList(c, e)
        var u = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_field("ACTOR_STYLE_ID")
        if (!u) {
          var d = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_parent()
          var p = Module_20.getActorStyleInputField(d)
          if (p) {
            u = p
          }
        }
        if (!(null === l || undefined === l ? undefined : l.length)) {
          if (!(null === (n = u) || undefined === n)) {
            n.set_value(Module_61.c)
          }
          if (!(null === (r = u) || undefined === r)) {
            r.set_text(Module_61.b)
          }
          return void (null === (o = u) || undefined === o || o.force_rerender())
        }
        var f = l[0]
        var h = f.text || Module_61.b
        var m = f.value || Module_61.c
        if (e !== Module_61.c && u) {
          a = e
          u.set_value(m)
          u.set_text(h)
          u.force_rerender()
          a = undefined
          i = undefined
        }
        var g = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_shadow_field("ACTION_INTERVAL")
        var _ = c ? Module_33.Cb(c) : undefined
        if (_ && g) {
          var v = _.attributes.actionList.find(function (t) {
            return t.id === e
          })
          if (v) {
            g.set_value((undefined === v.interval ? 200 : v.interval).toString())
            g.force_rerender()
          }
        }
      }
      function u(e) {
        var t
        var n
        var r
        var /* [auto-meaningful-name] */this$source_block = this.source_block
        var a = Module_46.c().getActorActionList(e)
        var s = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_field("ACTOR_ACTION_ID")
        if (!s) {
          var c = Module_20.getActorActionInputField(this$source_block)
          if (c) {
            s = c
          }
        }
        (function (e, t) {
          var /* [auto-meaningful-name] */e$source_block = e.source_block
          if (((null === e$source_block || undefined === e$source_block ? undefined : e$source_block.get_children()) || []).length > 0) {
            var r = Module_20.getActorActionInputField(e$source_block)
            var o = Module_20.getActorStyleInputField(e$source_block)
            if (r) {
              if (!(null === r || undefined === r)) {
                r.set_value(Module_61.c)
              }
              if (!(null === r || undefined === r)) {
                r.set_text(Module_61.b)
              }
              if (!(null === r || undefined === r)) {
                r.force_rerender()
              }
            }
            if (o) {
              if (!(null === o || undefined === o)) {
                o.set_value(Module_61.c)
              }
              if (!(null === o || undefined === o)) {
                o.set_text(Module_61.b)
              }
              if (!(null === o || undefined === o)) {
                o.force_rerender()
              }
            }
          }
        })(this)
        if (!(null === a || undefined === a ? undefined : a.length)) {
          if (!(null === (t = s) || undefined === t)) {
            t.set_value(Module_61.c)
          }
          if (!(null === (n = s) || undefined === n)) {
            n.set_text(Module_61.b)
          }
          return void (null === (r = s) || undefined === r || r.force_rerender())
        }
        var l
        var u
        var d
        var p = a[0]
        var f = p.text || Module_61.b
        var h = p.value || Module_61.c
        if (s) {
          i = e
          if (!(null === (l = s) || undefined === l)) {
            l.set_value(h)
          }
          if (!(null === (u = s) || undefined === u)) {
            u.set_text(f)
          }
          if (!(null === (d = s) || undefined === d)) {
            d.force_rerender()
          }
        }
      }
      t.extensions.register_mutator("ACTOR_PLAY_ACTION_MUTATOR", {
        updateShape_: function (e) {
          var n = "true" === e
          var r = this.get_input("PLAY_COUNT")
          if (n) {
            if (!r) {
              this.append_shadow_input("PLAY_COUNT", ShadowType_Math_number_FieldName_NUM_Constraints_11_2_field_shadow, 4).set_check("Number")
              this.append_dummy_input("PLAY_TIME", 5).append_field(t.Msg.PLAY_TIME)
            }
          } else if (r) {
            this.remove_input("PLAY_COUNT")
            this.remove_input("PLAY_TIME")
          }
        },
        addMutation: function (e) {
          var n = this
          Module_4.b.call(this, "PLAY_COUNT", function () {
            var e = n.append_value_input("PLAY_COUNT", 4).set_check("Number")
            n.append_dummy_input("PLAY_TIME", 5).append_field(t.Msg.PLAY_TIME)
            return e
          }, ShadowType_Math_number_FieldName_NUM_Constraints_11_2_field_shadow, e)
        },
        removeMutation: function () {
          var e = this
          Module_4.t.call(this, "PLAY_COUNT", "NUM", function () {
            e.remove_input("PLAY_COUNT")
            e.remove_input("PLAY_TIME")
          })
        },
        domToMutation: function () {
          var e
          this.cacheId = {}
          var t = null === (e = this.get_field("CYCLIC_FLAG")) || undefined === e ? undefined : e.get_value()
          this.updateShape_("true" === t ? "true" : "false")
        },
        mutationToDom: function () {
          var e
          var t = document.createElement("mutation")
          var n = null === (e = this.get_field("CYCLIC_FLAG")) || undefined === e ? undefined : e.get_value()
          t.setAttribute("pos", n || "true")
          return t
        }
      })
      e.insertBlockProfile("actor_play_action", {
        type: "actor_play_action",
        message0: "%{BKY_ACTOR_PLAY_ACTION}",
        args0: [
          Module_6.a(Module_6.a({}, r), {}, {
            optOnchange: u
          }), {
            type: "field_coco_dropdown",
            custom: true,
            name: "ACTOR_ACTION_ID",
            options: c,
            optOnchange: l
          }, {
            type: "input_value",
            name: "ACTION_INTERVAL",
            check: ["Number"]
          }, {
            type: "field_coco_dropdown",
            name: "CYCLIC_FLAG",
            custom: true,
            optOnchange: o,
            options: function () {
              return [[t.Msg.PLAY_CIRCULARLY, "true"], [t.Msg.PLAY_INFINITELY, "false"]]
            }
          }
        ],
        message1: "%{BKY_ACTOR_PLAY_COUNT}",
        args1: [
          {
            type: "input_value",
            name: "PLAY_COUNT",
            check: ["Number"]
          }
        ],
        message2: "%{BKY_PLAY_TIME} %1",
        args2: [
          {
            type: "input_dummy",
            name: "PLAY_TIME"
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        mutator: "ACTOR_PLAY_ACTION_MUTATOR"
      })
      e.insertBlockProfile("actor_play_action_and_wait", {
        type: "actor_play_action_and_wait",
        message0: "%{BKY_ACTOR_PLAY_ACTION_AND_WAIT}",
        args0: [
          Module_6.a(Module_6.a({}, r), {}, {
            optOnchange: u
          }), {
            type: "field_coco_dropdown",
            custom: true,
            name: "ACTOR_ACTION_ID",
            options: c,
            optOnchange: l
          }, {
            type: "input_value",
            name: "ACTION_INTERVAL",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "PLAY_COUNT",
            check: ["Number"]
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true
      })
      e.insertBlockProfile("action_interval", {
        type: "action_interval",
        message0: "%1",
        args0: [
          {
            type: "field_coco_number_dropdown",
            name: "INTERVAL",
            custom: true,
            get_options: function () {
              return [
                {
                  value: 100
                }, {
                  value: 200
                }, {
                  value: 500
                }, {
                  value: 1e3
                }
              ]
            },
            numberOptions: {
              opt_max: Module_144.b,
              opt_min: Module_144.d,
              opt_value: 200,
              opt_precision: 1
            }
          }
        ],
        output: "Number",
        tooltip: "动作时间"
      })
      e.insertBlockProfile("actor_play_action_embed", {
        type: "actor_play_action_embed",
        message0: "%{BKY_ACTOR_PLAY_ACTION}",
        args0: [
          Module_6.a(Module_6.a({}, r), {}, {
            optOnchange: u
          }), {
            type: "input_value",
            name: "ACTOR_ACTION_WRAPPER",
            check: ["String"]
          }, {
            type: "input_value",
            name: "ACTION_INTERVAL",
            check: ["Number"]
          }, {
            type: "field_coco_dropdown",
            name: "CYCLIC_FLAG",
            custom: true,
            optOnchange: o,
            options: function () {
              return [[t.Msg.PLAY_CIRCULARLY, "true"], [t.Msg.PLAY_INFINITELY, "false"]]
            }
          }
        ],
        message1: "%{BKY_ACTOR_PLAY_COUNT}",
        args1: [
          {
            type: "input_value",
            name: "PLAY_COUNT",
            check: ["Number"]
          }
        ],
        message2: "%{BKY_PLAY_TIME} %1",
        args2: [
          {
            type: "input_dummy",
            name: "PLAY_TIME"
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        mutator: "ACTOR_PLAY_ACTION_MUTATOR"
      })
      e.insertBlockProfile("actor_play_action_and_wait_embed", {
        type: "actor_play_action_and_wait_embed",
        message0: "%{BKY_ACTOR_PLAY_ACTION_AND_WAIT}",
        args0: [
          Module_6.a(Module_6.a({}, r), {}, {
            optOnchange: u
          }), {
            type: "input_value",
            name: "ACTOR_ACTION_WRAPPER",
            check: ["String"]
          }, {
            type: "input_value",
            name: "ACTION_INTERVAL",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "PLAY_COUNT",
            check: ["Number"]
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true
      })
      e.insertBlockProfile("actor_play_action_dropdown", {
        type: "actor_play_action_dropdown",
        message0: "%{BKY_ACTOR_PLAY_ACTION}",
        args0: [
          Module_6.a(Module_6.a({}, r), {}, {
            optOnchange: u
          }), {
            type: "input_value",
            name: "ACTOR_ACTION_WRAPPER",
            check: ["String"]
          }, {
            type: "input_value",
            name: "ACTION_INTERVAL",
            check: ["Number"]
          }, {
            type: "field_coco_dropdown",
            name: "CYCLIC_FLAG",
            custom: true,
            optOnchange: o,
            options: function () {
              return [[t.Msg.PLAY_CIRCULARLY, "true"], [t.Msg.PLAY_INFINITELY, "false"]]
            }
          }
        ],
        message1: "%{BKY_ACTOR_PLAY_COUNT}",
        args1: [
          {
            type: "input_value",
            name: "PLAY_COUNT",
            check: ["Number"]
          }
        ],
        message2: "%{BKY_PLAY_TIME} %1",
        args2: [
          {
            type: "input_dummy",
            name: "PLAY_TIME"
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        mutator: "ACTOR_PLAY_ACTION_MUTATOR"
      })
      e.insertBlockProfile("actor_play_action_and_wait_dropdown", {
        type: "actor_play_action_and_wait_dropdown",
        message0: "%{BKY_ACTOR_PLAY_ACTION_AND_WAIT}",
        args0: [
          Module_6.a(Module_6.a({}, r), {}, {
            optOnchange: u
          }), {
            type: "input_value",
            name: "ACTOR_ACTION_WRAPPER",
            check: ["String"]
          }, {
            type: "input_value",
            name: "ACTION_INTERVAL",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "PLAY_COUNT",
            check: ["Number"]
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true
      })
      e.insertBlockProfile("actor_stop_action", {
        type: "actor_stop_action",
        message0: "%{BKY_ACTOR_STOP_ACTION}",
        args0: [Module_6.a({}, r)],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true
      })
      e.insertBlockProfile("actor_on_actor_bump", {
        type: "actor_on_actor_bump",
        message0: "%{BKY_ACTOR_ON_ACTOR_BUMP_MSG0}",
        args0: [
          Module_4.e(BKY_BLOCK_TAB_ICON, true), Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "BUMP_TYPE",
            custom: true,
            advancedOptions: function () {
              return [
                Ph(t), {
                  type: "group",
                  name: t.Msg.ACTOR,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
                }, {
                  type: "basic",
                  text: t.Msg.TOUCH_POINT,
                  value: "__mouse"
                }
              ]
            }
          }
        ],
        message1: "%{BKY_ACTOR_ON_ACTOR_BUMP_MSG1}",
        args1: [
          {
            type: "input_statement",
            name: "DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_on_actor_leave", {
        type: "actor_on_actor_leave",
        message0: "%{BKY_ACTOR_ON_ACTOR_LEAVE_MSG0}",
        args0: [
          Module_4.e(BKY_BLOCK_TAB_ICON, true), Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "LEAVE_TYPE",
            custom: true,
            advancedOptions: function () {
              return Bh(t)
            }
          }
        ],
        message1: "%{BKY_ACTOR_ON_ACTOR_BUMP_MSG1}",
        args1: [
          {
            type: "input_statement",
            name: "DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_on_actor_press", {
        type: "actor_on_actor_press",
        message0: "%{BKY_ACTOR_ON_ACTOR_PRESS_MSG0}",
        args0: [
          Module_4.e(BKY_BLOCK_TAB_ICON, true), Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "PRESS_EVENT",
            custom: true,
            options: function () {
              return [[t.Msg.PRESS, "press"], [t.Msg.PRESS_IN, "pressIn"], [t.Msg.PRESS_HOLD, "pressHold"], [t.Msg.PRESS_OUT, "pressOut"]]
            }
          }, {
            type: "input_value",
            name: "POSITION_X",
            align: "CENTRE",
            check: ["Number"],
            default_shadow: "<shadow type=\"actor_on_actor_press_positionX\" />"
          }, {
            type: "input_value",
            name: "POSITION_Y",
            align: "CENTRE",
            check: ["Number"],
            default_shadow: "<shadow type=\"actor_on_actor_press_positionY\" />"
          }
        ],
        message1: "%{BKY_ACTOR_ON_ACTOR_PRESS_MSG1}",
        args1: [
          {
            type: "input_statement",
            name: "DO",
            provided_context: "actor_on_actor_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_on_actor_press_positionX", {
        type: "actor_on_actor_press_positionX",
        message0: "%{BKY_PARAM_POSITION_X}",
        output: "Number",
        required_context: "actor_on_actor_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("actor_on_actor_press_positionY", {
        type: "actor_on_actor_press_positionY",
        message0: "%{BKY_PARAM_POSITION_Y}",
        output: "Number",
        required_context: "actor_on_actor_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("actor_rotate", {
        type: "actor_rotate",
        message0: "%{BKY_ACTOR_ROTATE}",
        args0: [
          Module_6.a({}, r), {
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
      e.insertBlockProfile("actor_move_forward", {
        type: "actor_move_forward",
        message0: "%{BKY_ACTOR_MOVE_FORWARD}",
        args0: [
          Module_6.a({}, r), {
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
      e.insertBlockProfile("actor_set_rotation", {
        type: "actor_set_rotation",
        message0: "%{BKY_ACTOR_SET_ROTATION}",
        args0: [
          Module_6.a({}, r), {
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
      e.insertBlockProfile("actor_face_to", {
        type: "actor_face_to",
        message0: "%{BKY_ACTOR_FACE_TO}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "TARGET",
            custom: true,
            advancedOptions: function () {
              return [
                {
                  type: "basic",
                  text: t.Msg.TOUCH_POINT,
                  value: "__mouse"
                }, {
                  type: "group",
                  name: t.Msg.ACTOR,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
                }, {
                  type: "group",
                  name: t.Msg.BRUSH,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.c)
                }, {
                  type: "basic",
                  text: t.Msg.RANDOM,
                  value: "__random"
                }
              ]
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_rotate_around", {
        type: "actor_rotate_around",
        message0: "%{BKY_ACTOR_ROTATE_AROUND}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "TARGET",
            custom: true,
            advancedOptions: function () {
              return [
                {
                  type: "group",
                  name: t.Msg.ACTOR,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
                }, {
                  type: "group",
                  name: t.Msg.BRUSH,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.c)
                }
              ]
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
      e.insertBlockProfile("actor_move_to_position", {
        type: "actor_move_to_position",
        message0: "%{BKY_ACTOR_MOVE_TO_POSITION}",
        args0: [
          Module_6.a({}, r), {
            type: "input_value",
            name: "X",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "Y",
            check: ["Number"]
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true
      })
      e.insertBlockProfile("actor_move_to", {
        type: "actor_move_to",
        message0: "%{BKY_ACTOR_MOVE_TO}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "TARGET",
            custom: true,
            options: function () {
              return [
                [t.Msg.TOUCH_POINT, "__mouse"], {
                  type: "group",
                  name: t.Msg.ACTOR,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
                }, {
                  type: "group",
                  name: t.Msg.BRUSH,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.c)
                }, [t.Msg.RANDOM, "__random"]
              ]
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_set_position", {
        type: "actor_set_position",
        message0: "%{BKY_ACTOR_SET_PROPERTY}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
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
      e.insertBlockProfile("actor_change_position", {
        type: "actor_change_position",
        message0: "%{BKY_ACTOR_CHANGE_POSITION}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
          }, {
            type: "field_coco_dropdown",
            custom: true,
            name: "METHOD",
            options: function () {
              return [[t.Msg.INCREASE, "increase"], [t.Msg.DECREASE, "decrease"]]
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
      e.insertBlockProfile("actor_move_to_position_in_time", {
        type: "actor_move_to_position_in_time",
        message0: "%{BKY_ACTOR_CHANGE_POSITION_IN_TIME}",
        args0: [
          Module_6.a({}, r), {
            type: "input_value",
            name: "SECONDS",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "X",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "Y",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_change_position_type_in_time", {
        type: "actor_change_position_type_in_time",
        message0: "%{BKY_ACTOR_CHANGE_POSITION_TYPE_IN_TIME}",
        args0: [
          Module_6.a({}, r), {
            type: "input_value",
            name: "SECONDS",
            check: ["Number"]
          }, {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
          }, {
            type: "field_coco_dropdown",
            custom: true,
            name: "METHOD",
            options: function () {
              return [[t.Msg.INCREASE, "increase"], [t.Msg.DECREASE, "decrease"]]
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
      e.insertBlockProfile("actor_set_visible", {
        type: "actor_set_visible",
        message0: "%{BKY_ACTOR_SET_VISIBLE}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}"
      })
      e.insertBlockProfile("actor_show_hide_in_time", {
        type: "actor_show_hide_in_time",
        message0: "%{BKY_ACTOR_SHOW_HIDE_IN_TIME}",
        args0: [
          Module_6.a({}, r), {
            type: "input_value",
            name: "SECONDS",
            check: ["Number"]
          }, {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: [[t.Msg.FADE_IN, "show"], [t.Msg.FADE_OUT, "hide"]]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}"
      })
      e.insertBlockProfile("actor_move_z_index", {
        type: "actor_move_z_index",
        message0: "%{BKY_ACTOR_MOVE_Z_INDEX}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "MOVE_TYPE",
            custom: true,
            options: [[t.Msg.MOVE_UP, "up"], [t.Msg.MOVE_DOWN, "down"], [t.Msg.MOVE_TOP, "top"], [t.Msg.MOVE_BOTTOM, "bottom"]]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_set_scale", {
        type: "actor_set_scale",
        message0: "%{BKY_ACTOR_SET_SCALE}",
        args0: [
          Module_6.a({}, r), {
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
      e.insertBlockProfile("actor_change_scale", {
        type: "actor_change_scale",
        message0: "%{BKY_ACTOR_CHANGE_SCALE}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            custom: true,
            name: "METHOD",
            options: function () {
              return [[t.Msg.INCREASE, "increase"], [t.Msg.DECREASE, "decrease"]]
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
      e.insertBlockProfile("actor_set_scale_with_section", {
        type: "actor_set_scale_with_section",
        message0: "%{BKY_ACTOR_SET_SCALE_WITH_SECTION}",
        args0: [
          Module_6.a({}, r), Fh(t), {
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
      e.insertBlockProfile("actor_change_scale_with_section", {
        type: "actor_change_scale_with_section",
        message0: "%{BKY_ACTOR_CHANGE_SCALE_WITH_SECTION}",
        args0: [
          Module_6.a({}, r), Fh(t), Gh(t), {
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
      e.insertBlockProfile("actor_change_opacity", {
        type: "actor_change_opacity",
        message0: "%{BKY_ACTOR_CHANGE_OPACITY}",
        args0: [
          Module_6.a({}, r), Gh(t), {
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
      e.insertBlockProfile("actor_set_flipped", {
        type: "actor_set_flipped",
        message0: "%{BKY_ACTOR_SET_FLIPPED}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            custom: true,
            name: "FLIPPED",
            options: function () {
              return [[t.Msg.HORIZONTAL_FLIPPED, "horizontal"], [t.Msg.VERTICAL_FLIPPED, "vertical"]]
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_check_if_flipped", {
        type: "actor_check_if_flipped",
        message0: "%{BKY_ACTOR_CHECK_IF_FLIPPED}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            custom: true,
            name: "FLIPPED",
            options: function () {
              return [[t.Msg.HORIZONTAL_FLIPPED, "horizontal"], [t.Msg.VERTICAL_FLIPPED, "vertical"]]
            }
          }
        ],
        output: "Boolean",
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_get_action_name", {
        type: "actor_get_action_name",
        message0: "%{BKY_ACTOR_GET_ACTION_NAME}",
        args0: [Module_6.a({}, r)],
        output: "String",
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_get_style_index", {
        type: "actor_get_style_index",
        message0: "%{BKY_ACTOR_GET_STYLE_INDEX}",
        args0: [Module_6.a({}, r)],
        output: "Number",
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_show_dialog", {
        type: "actor_show_dialog",
        message0: "%{BKY_ACTOR_SHOW_DIALOG}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            custom: true,
            name: "TYPE",
            options: function () {
              return [[t.Msg.ACTOR_TALK, "talk"], [t.Msg.ACTOR_THINK, "think"]]
            }
          }, {
            type: "input_value",
            name: "TEXT",
            check: ["Number", "String", "Boolean"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_show_dialog_in_time", {
        type: "actor_show_dialog_in_time",
        message0: "%{BKY_ACTOR_SHOW_DIALOG_IN_TIME}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            custom: true,
            name: "TYPE",
            options: function () {
              return [[t.Msg.ACTOR_TALK, "talk"], [t.Msg.ACTOR_THINK, "think"]]
            }
          }, {
            type: "input_value",
            name: "TEXT",
            check: ["Number", "String", "Boolean"]
          }, {
            type: "input_value",
            name: "SECONDS",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_get_property", {
        type: "actor_get_property",
        message0: "%{BKY_ACTOR_GET_PROPERTY}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: [[t.Msg.SCALE, "scale"], [t.Msg.DEGREE, "degree"], [t.Msg.ACTOR_STYLE, "style"]]
          }
        ],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_get_rotation", {
        type: "actor_get_rotation",
        message0: "%{BKY_ACTOR_GET_ROTATION}",
        args0: [Module_6.a({}, r)],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_get_scale_with_section", {
        type: "actor_get_scale_with_section",
        message0: "%{BKY_ACTOR_GET_SCALE_WITH_SECTION}",
        args0: [Module_6.a({}, r), Fh(t)],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_get_position", {
        type: "actor_get_position",
        message0: "%{BKY_ACTOR_GET_PROPERTY}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_previous_next_style", {
        type: "actor_previous_next_style",
        message0: "%{BKY_ACTOR_PREVIOUS_NEXT_STYLE}",
        args0: [
          Module_6.a({}, r), {
            type: "field_coco_dropdown",
            custom: true,
            name: "DIRECTION",
            options: function () {
              return [[t.Msg.ACTOR_NEXT_ONE, "next"], [t.Msg.ACTOR_PREVIOUS_ONE, "previous"], [t.Msg.RANDOM, "random"]]
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_action_input", {
        type: "actor_action_input",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            custom: true,
            name: "ACTOR_ACTION_ID",
            options: c,
            optOnchange: l
          }
        ],
        colour: "#ffffff",
        output: "String",
        tooltip: "%{BKY_ACTOR_SET_CURRENT_ACTION_TOOLTIP}"
      })
      e.insertBlockProfile("actor_style_input", {
        type: "actor_style_input",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            custom: true,
            name: "ACTOR_STYLE_ID",
            options: function () {
              var /* [auto-meaningful-name] */this$source_block
              var t
              var /* [auto-meaningful-name] */this$source_block1
              var r = i || (null === (this$source_block = this.source_block) || undefined === this$source_block || null === (t = this$source_block.get_parent()) || undefined === t ? undefined : t.get_field_value("WIDGET_ID")) || Module_228.a()
              var o = a || (null === (this$source_block1 = this.source_block) || undefined === this$source_block1 ? undefined : this$source_block1.get_field_value("ACTOR_ACTION_ID"))
              if (!o) {
                var /* [auto-meaningful-name] */this$source_block2
                var c = null === (this$source_block2 = this.source_block) || undefined === this$source_block2 ? undefined : this$source_block2.get_parent()
                var l = ((null === c || undefined === c ? undefined : c.get_children()) || []).find(function (e) {
                  return "actor_action_input" === e.type
                })
                if (l) {
                  o = l.get_field_value("ACTOR_ACTION_ID")
                }
              }
              var u = Module_46.c().getActorStyleList(r, o)
              return r && Module_33.Cb(r) ? u : u.slice(0, 1)
            }
          }
        ],
        colour: "#ffffff",
        output: "Number",
        tooltip: "%{BKY_ACTOR_SET_CURRENT_STYLE_TOOLTIP}"
      })
      e.insertBlockProfile("actor_set_current_style", {
        type: "actor_set_current_style",
        message0: "%{BKY_ACTOR_SET_CURRENT_STYLE}",
        args0: [
          {
            type: "field_coco_dropdown",
            custom: true,
            name: "WIDGET_ID",
            options: function () {
              return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
            },
            optOnchange: u
          }, {
            type: "field_coco_dropdown",
            custom: true,
            name: "ACTOR_ACTION_ID",
            options: c,
            optOnchange: l
          }, {
            type: "field_coco_dropdown",
            custom: true,
            name: "ACTOR_STYLE_ID",
            options: function () {
              var /* [auto-meaningful-name] */this$source_block
              var /* [auto-meaningful-name] */this$source_block1
              var n = i || (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || Module_228.a()
              var r = a || (null === (this$source_block1 = this.source_block) || undefined === this$source_block1 ? undefined : this$source_block1.get_field_value("ACTOR_ACTION_ID"))
              var o = Module_46.c().getActorStyleList(n, r)
              return n && Module_33.Cb(n) ? o : o.slice(0, 1)
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_set_current_style_embed", {
        type: "actor_set_current_style_embed",
        message0: "%{BKY_ACTOR_SET_CURRENT_STYLE}",
        args0: [
          {
            type: "field_coco_dropdown",
            custom: true,
            name: "WIDGET_ID",
            options: function () {
              return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
            },
            optOnchange: u
          }, {
            type: "input_value",
            name: "ACTOR_ACTION_WRAPPER",
            check: ["String"]
          }, {
            type: "input_value",
            name: "ACTOR_STYLE_WRAPPER",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        extensions: ["UPDATE_ACTION_AFTER_SELECT_ACTOR"]
      })
      e.insertBlockProfile("actor_check_if_pressed", {
        type: "actor_check_if_pressed",
        message0: "%{BKY_ACTOR_CHECK_IF_PRESSED}",
        args0: [
          {
            type: "field_coco_dropdown",
            custom: true,
            name: "WIDGET_ID",
            options: function () {
              return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
            },
            optOnchange: u
          }
        ],
        output: "Boolean",
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_check_if_bumped", {
        type: "actor_check_if_bumped",
        message0: "%{BKY_ACTOR_CHECK_IF_BUMPED}",
        args0: [
          {
            type: "field_coco_dropdown",
            custom: true,
            name: "WIDGET_ID",
            options: function () {
              return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
            },
            optOnchange: u
          }, {
            type: "field_coco_dropdown",
            name: "BUMP_TYPE",
            custom: true,
            advancedOptions: function () {
              return [
                Ph(t), {
                  type: "group",
                  name: t.Msg.ACTOR,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
                }, {
                  type: "basic",
                  text: t.Msg.TOUCH_POINT,
                  value: "__mouse"
                }
              ]
            }
          }
        ],
        output: "Boolean",
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("actor_check_if_left", {
        type: "actor_check_if_left",
        message0: "%{BKY_ACTOR_CHECK_IF_LEFT}",
        args0: [
          {
            type: "field_coco_dropdown",
            custom: true,
            name: "WIDGET_ID",
            options: function () {
              return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a)
            },
            optOnchange: u
          }, {
            type: "field_coco_dropdown",
            name: "LEAVE_TYPE",
            custom: true,
            advancedOptions: function () {
              return Bh(t)
            }
          }
        ],
        output: "Boolean",
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["actor_on_actor_press", "actor_on_actor_bump", "actor_on_actor_leave", "actor_move_forward", "actor_rotate", "actor_set_rotation", "actor_face_to", "actor_move_to_position", "actor_move_to", "actor_set_position", "actor_change_position", "actor_move_to_position_in_time", "actor_change_position_type_in_time", "actor_set_current_style", "actor_set_current_style_embed", "actor_previous_next_style", "actor_set_scale", "actor_change_scale", "actor_set_visible", "actor_show_hide_in_time", "actor_get_position", "actor_get_property", "actor_show_dialog_in_time", "actor_show_dialog", "actor_check_if_pressed", "actor_check_if_bumped", "actor_check_if_left", "actor_rotate_around", "actor_set_scale_with_section", "actor_change_opacity", "actor_change_scale_with_section", "actor_set_flipped", "actor_move_z_index", "actor_play_action", "actor_play_action_and_wait", "actor_play_action_embed", "actor_play_action_and_wait_embed", "actor_play_action_dropdown", "actor_play_action_and_wait_dropdown", "actor_stop_action", "actor_get_rotation", "actor_get_scale_with_section", "actor_get_action_name", "actor_get_style_index", "actor_check_if_flipped"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["actor_on_actor_press", "actor_on_actor_bump", "actor_on_actor_leave"]
}
export { Wh }
