/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-65
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_277 from /* 277 */"./277"
var /* [auto-meaningful-name] */ShadowType_Math_number_FieldName_NUM_Constraints_1_0_field_shadow = "<shadow type=\"math_number\"><field name=\"NUM\" constraints=\",,1\">0</field></shadow>"
var Ah = {
  itemCount_: 1,
  addMutation: function (e) {
    if (Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing()) {
      if ("number" === typeof e) {
        this.itemCount_ = e
        this.updateShape_()
      }
    } else {
      var /* [auto-meaningful-name] */this$itemCount_ = this.itemCount_
      this.itemCount_++
      this.updateShape_()
      var n = Module_4.c("mutation", {
        block: this,
        old_value: this$itemCount_,
        new_value: this.itemCount_
      })
      Src_shared_packages_Crc_blink_src_index.Blink.events.fire(n)
    }
  },
  removeMutation: function (e) {
    if (Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing()) {
      if ("number" === typeof e) {
        this.itemCount_ = e
        this.updateShape_()
      }
    } else {
      var /* [auto-meaningful-name] */this$itemCount_ = this.itemCount_
      this.itemCount_--
      this.updateShape_()
      var n = Module_4.c("mutation", {
        block: this,
        old_value: this$itemCount_,
        new_value: this.itemCount_
      })
      Src_shared_packages_Crc_blink_src_index.Blink.events.fire(n)
    }
  },
  updateShape_: function () {
    Src_shared_packages_Crc_blink_src_index.Blink.events.disable()
    if (1 === this.itemCount_) {
      if (this.get_input("X")) {
        this.remove_input("X")
      }
      if (this.get_input("Y")) {
        this.remove_input("Y")
      }
      if (this.get_input("MUTATE_REMOVE_BUTTON")) {
        this.remove_input("MUTATE_REMOVE_BUTTON")
      }
      this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Module_4.p(), "MUTATE_ADD_BUTTON")
    } else {
      if (!this.get_input("X")) {
        var e = this.append_shadow_input("X", ShadowType_Math_number_FieldName_NUM_Constraints_1_0_field_shadow)
        e.set_check(["Number"])
        e.append_field(", 圆心 x")
      }
      if (!this.get_input("Y")) {
        var t = this.append_shadow_input("Y", ShadowType_Math_number_FieldName_NUM_Constraints_1_0_field_shadow)
        t.set_check(["Number"])
        t.append_field("y")
      }
      if (this.get_input("MUTATE_ADD_BUTTON")) {
        this.remove_input("MUTATE_ADD_BUTTON")
      }
      this.append_dummy_input("MUTATE_REMOVE_BUTTON").append_field(Module_4.q(undefined), "MUTATE_REMOVE_BUTTON")
    }
    Src_shared_packages_Crc_blink_src_index.Blink.events.enable()
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
}
var Ih = {
  itemCount_: 1,
  addMutation: function (e) {
    if (Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing()) {
      if ("number" === typeof e) {
        this.itemCount_ = e
        this.updateShape_()
      }
    } else {
      var /* [auto-meaningful-name] */this$itemCount_ = this.itemCount_
      this.itemCount_++
      this.updateShape_()
      var n = Module_4.c("mutation", {
        block: this,
        old_value: this$itemCount_,
        new_value: this.itemCount_
      })
      Src_shared_packages_Crc_blink_src_index.Blink.events.fire(n)
    }
  },
  removeMutation: function (e) {
    if (Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing()) {
      if ("number" === typeof e) {
        this.itemCount_ = e
        this.updateShape_()
      }
    } else {
      var /* [auto-meaningful-name] */this$itemCount_ = this.itemCount_
      this.itemCount_--
      this.updateShape_()
      var n = Module_4.c("mutation", {
        block: this,
        old_value: this$itemCount_,
        new_value: this.itemCount_
      })
      Src_shared_packages_Crc_blink_src_index.Blink.events.fire(n)
    }
  },
  updateShape_: function () {
    Src_shared_packages_Crc_blink_src_index.Blink.events.disable()
    if (1 === this.itemCount_) {
      if (this.get_input("X")) {
        this.remove_input("X")
      }
      if (this.get_input("Y")) {
        this.remove_input("Y")
      }
      if (this.get_input("START_ANGLE")) {
        this.remove_input("START_ANGLE")
      }
      if (this.get_input("START_ANGLE_TEXT")) {
        this.remove_input("START_ANGLE_TEXT")
      }
      if (this.get_input("MUTATE_REMOVE_BUTTON")) {
        this.remove_input("MUTATE_REMOVE_BUTTON")
      }
      this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Module_4.p(), "MUTATE_ADD_BUTTON")
    } else {
      if (!this.get_input("X")) {
        var e = this.append_shadow_input("X", ShadowType_Math_number_FieldName_NUM_Constraints_1_0_field_shadow)
        e.set_check(["Number"])
        e.append_field(", 圆心 x")
      }
      if (!this.get_input("Y")) {
        var t = this.append_shadow_input("Y", ShadowType_Math_number_FieldName_NUM_Constraints_1_0_field_shadow)
        t.set_check(["Number"])
        t.append_field("y")
      }
      if (!this.get_input("START_ANGLE")) {
        var n = this.append_shadow_input("START_ANGLE", "<shadow type=\"math_number\"><field name=\"NUM\" controller=\"ANGLE_SCALE,,\" constraints=\"-180,180,,true\">-90</field></shadow>")
        n.set_check(["Number"])
        n.append_field(", 起始位置")
        this.append_dummy_input("START_ANGLE_TEXT").append_field("度")
      }
      if (this.get_input("MUTATE_ADD_BUTTON")) {
        this.remove_input("MUTATE_ADD_BUTTON")
      }
      this.append_dummy_input("MUTATE_REMOVE_BUTTON").append_field(Module_4.q(undefined), "MUTATE_REMOVE_BUTTON")
    }
    Src_shared_packages_Crc_blink_src_index.Blink.events.enable()
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
}
var jh = {
  itemCount_: 1,
  addMutation: function (e) {
    if (Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing()) {
      if ("number" === typeof e) {
        this.itemCount_ = e
        this.updateShape_()
      }
    } else {
      var /* [auto-meaningful-name] */this$itemCount_ = this.itemCount_
      this.itemCount_++
      this.updateShape_()
      var n = Module_4.c("mutation", {
        block: this,
        old_value: this$itemCount_,
        new_value: this.itemCount_
      })
      Src_shared_packages_Crc_blink_src_index.Blink.events.fire(n)
    }
  },
  removeMutation: function (e) {
    if (Src_shared_packages_Crc_blink_src_index.Blink.events.is_undoing()) {
      if ("number" === typeof e) {
        this.itemCount_ = e
        this.updateShape_()
      }
    } else {
      var /* [auto-meaningful-name] */this$itemCount_ = this.itemCount_
      this.itemCount_--
      this.updateShape_()
      var n = Module_4.c("mutation", {
        block: this,
        old_value: this$itemCount_,
        new_value: this.itemCount_
      })
      Src_shared_packages_Crc_blink_src_index.Blink.events.fire(n)
    }
  },
  updateShape_: function () {
    Src_shared_packages_Crc_blink_src_index.Blink.events.disable()
    if (1 === this.itemCount_) {
      if (this.get_input("X")) {
        this.remove_input("X")
      }
      if (this.get_input("Y")) {
        this.remove_input("Y")
      }
      if (this.get_input("MUTATE_REMOVE_BUTTON")) {
        this.remove_input("MUTATE_REMOVE_BUTTON")
      }
      this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Module_4.p(), "MUTATE_ADD_BUTTON")
    } else {
      if (!this.get_input("X")) {
        var e = this.append_shadow_input("X", ShadowType_Math_number_FieldName_NUM_Constraints_1_0_field_shadow)
        e.set_check(["Number"])
        e.append_field(", 起点 x")
      }
      if (!this.get_input("Y")) {
        var t = this.append_shadow_input("Y", ShadowType_Math_number_FieldName_NUM_Constraints_1_0_field_shadow)
        t.set_check(["Number"])
        t.append_field("y")
      }
      if (this.get_input("MUTATE_ADD_BUTTON")) {
        this.remove_input("MUTATE_ADD_BUTTON")
      }
      this.append_dummy_input("MUTATE_REMOVE_BUTTON").append_field(Module_4.q(undefined), "MUTATE_REMOVE_BUTTON")
    }
    Src_shared_packages_Crc_blink_src_index.Blink.events.enable()
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
}
var Nh = {
  type: Src_editor_widget_builtIn_types.c,
  category: {
    iconId: "icon-widget-brush",
    blocks: Src_editor_widget_builtIn_types.c
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-brush",
    blocks: []
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.c,
        title: "图形",
        lineId: "graph"
      }), "<block type=\"brush_draw_point\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"X\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>0</field>\n        </shadow>\n      </value>\n      <value name=\"Y\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>0</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"brush_draw_line\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"X1\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>0</field>\n        </shadow>\n      </value>\n      <value name=\"Y1\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>0</field>\n        </shadow>\n      </value>\n      <value name=\"X2\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>60</field>\n        </shadow>\n      </value>\n      <value name=\"Y2\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>60</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"brush_draw_circle\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"RADIUS\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='0,,1'>40</field>\n        </shadow>\n      </value>\n      <mutation items=\"1\"></mutation>\n    </block>"), "<block type=\"brush_draw_arc\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"RADIUS\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='0,,1'>40</field>\n        </shadow>\n      </value>\n      <value name=\"ANGLE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\">180</field>\n        </shadow>\n      </value>\n      <mutation items=\"1\"></mutation>\n    </block>"), "<block type=\"brush_draw_polygon\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"STEP\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='0,,1'>4</field>\n        </shadow>\n      </value>\n      <value name=\"SIDE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='0,,1'>40</field>\n        </shadow>\n      </value>\n      <mutation items=\"1\"></mutation>\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.c,
        title: "移动",
        lineId: "move"
      }), "<block type=\"brush_set_pen_up_or_down\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"brush_move_forward_or_backward\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>10</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"brush_move_to\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"brush_move_to_position\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"X\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n      <value name=\"Y\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"brush_move_to_position_in_time\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"X\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n      <value name=\"Y\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n      <value name=\"SECONDS\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\"0\">1</field>\n        </shadow>\n      </value>\n    </block>"), Module_61.d, "<block type=\"brush_set_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"brush_change_position\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"brush_change_position_type_in_time\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\">100</field>\n        </shadow>\n      </value>\n      <value name=\"SECONDS\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\"0\">1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"brush_change_z_index\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.c,
        title: "方向",
        lineId: "rotate"
      }), "<block type=\"brush_set_rotation\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" controller=\"ANGLE_SCALE,,\" constraints='-180,180,,true'>90</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"brush_face_to\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"brush_rotate_left_or_right\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\">90</field>\n        </shadow>\n      </value>\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.c,
        title: "颜色",
        lineId: "color"
      }), "<block type=\"brush_set_color\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"COLOR\">\n        <shadow type=\"color_picker\"><field name=\"COLOR_PALETTE\">").concat(Module_277.a, "</field></shadow>\n      </value>\n    </block>"), "<block type=\"brush_set_color_value\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" controller=\"SLIDER,0,360\" constraints='0,360,1'>50</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"brush_change_color_value\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>10</field>\n        </shadow>\n      </value>\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.c,
        title: "粗细",
        lineId: "size"
      }), "<block type=\"brush_set_pen_size\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" controller=\"SLIDER,").concat(Module_277.g, ",").concat(Module_277.e, "\" constraints=\"").concat(Module_277.g, ",").concat(Module_277.e, ",1\">3</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"brush_change_pen_size\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>1</field>\n        </shadow>\n      </value>\n    </block>"), Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.c,
        title: "填充",
        lineId: "fill"
      }), "<block type=\"brush_set_fill_color\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"COLOR\">\n        <shadow type=\"color_picker\"><field name=\"COLOR_PALETTE\">").concat(Module_277.a, "</field></shadow>\n      </value>\n    </block>"), "<block type=\"brush_set_fill_path\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, Module_33.cb({
        widgetType: Src_editor_widget_builtIn_types.c,
        title: "返回值",
        lineId: "getter"
      }), "<block type=\"brush_get_color_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"brush_get_pen_size\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"brush_get_rotation\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"brush_get_position\" uncache=\"true\">\n      ".concat(t, "\n    </block>")
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
      e.insertBlockSnippetGenerator("brush_set_pen_down", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.n("setBrushPenDown", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("brush_set_pen_up", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.n("setBrushPenUp", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("brush_set_pen_up_or_down", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "STATUS")
        return s ? "up" === s ? Module_4.n("setBrushPenUp", [Module_4.o(o$widgetId)]) : Module_4.n("setBrushPenDown", [Module_4.o(o$widgetId)]) : ""
      })
      e.insertBlockSnippetGenerator("brush_draw_point", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "X", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "Y", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("brushDrawPoint", [Module_4.o(o$widgetId), s, c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_draw_line", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "X1", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "Y1", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(n, r, "X2", e.ORDER_FUNCTION_CALL)
        var u = e.valueToCode(n, r, "Y2", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("brushDrawLine", [Module_4.o(o$widgetId), s, c, l, u]), o$block, e, true)
      })
      e.insertBlockSnippetGenerator("brush_draw_circle", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "RADIUS", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "X", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(n, r, "Y", e.ORDER_FUNCTION_CALL)
        return "" === c || "" === l ? Module_4.l(Module_4.j("brushDrawCircleCurrentPosition", [Module_4.o(o$widgetId), s]), o$block, e, true) : Module_4.l(Module_4.j("brushDrawCircle", [Module_4.o(o$widgetId), s, c, l]), o$block, e, true)
      })
      e.insertBlockSnippetGenerator("brush_draw_arc", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "RADIUS", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "ANGLE", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(n, r, "X", e.ORDER_FUNCTION_CALL)
        var u = e.valueToCode(n, r, "Y", e.ORDER_FUNCTION_CALL)
        var d = e.valueToCode(n, r, "START_ANGLE", e.ORDER_FUNCTION_CALL)
        return "" === l || "" === u ? Module_4.l(Module_4.j("brushDrawArcCurrentPosition", [Module_4.o(o$widgetId), s, c]), o$block, e, true) : Module_4.l(Module_4.j("brushDrawArc", [Module_4.o(o$widgetId), s, c, l, u, d]), o$block, e, true)
      })
      e.insertBlockSnippetGenerator("brush_draw_polygon", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "STEP", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "SIDE", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(n, r, "X", e.ORDER_FUNCTION_CALL)
        var u = e.valueToCode(n, r, "Y", e.ORDER_FUNCTION_CALL)
        return "" === l || "" === u ? Module_4.l(Module_4.j("brushDrawPolygonCurrentPosition", [Module_4.o(o$widgetId), s, c]), o$block, e, true) : Module_4.l(Module_4.j("brushDrawPolygon", [Module_4.o(o$widgetId), s, c, l, u]), o$block, e, true)
      })
      e.insertBlockSnippetGenerator("brush_set_pen_size", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setBrushPenSize", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_change_pen_size", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "METHOD")
        if (!s) {
          return ""
        }
        var c = "increase" === s ? "1" : "-1"
        var l = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("changeBrushPenSize", [Module_4.o(o$widgetId), c, l]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_set_color", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "COLOR", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setBrushColor", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_set_color_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "PROPERTY")
        if (!s) {
          return ""
        }
        var c = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setBrushColorProperty", [Module_4.o(o$widgetId), Module_4.o(s), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_set_color_value", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "PROPERTY")
        if (!s) {
          return ""
        }
        var c = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setBrushColorProperty", [Module_4.o(o$widgetId), Module_4.o(s), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_change_color_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "PROPERTY")
        if (!s) {
          return ""
        }
        var c = e.getFieldValue(o$block, "METHOD")
        if (!c) {
          return ""
        }
        var l = "increase" === c ? "1" : "-1"
        var u = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("changeBrushColorProperty", [Module_4.o(o$widgetId), Module_4.o(s), l, u]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_change_color_value", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "PROPERTY")
        if (!s) {
          return ""
        }
        var c = e.getFieldValue(o$block, "METHOD")
        if (!c) {
          return ""
        }
        var l = "increase" === c ? "1" : "-1"
        var u = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("changeBrushColorProperty", [Module_4.o(o$widgetId), Module_4.o(s), l, u]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_move_forward", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("actorMoveForward", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_move_forward_or_backward", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "DIRECTION")
        if (!s) {
          return ""
        }
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return "forward" === s ? Module_4.l(Module_4.n("actorMoveForward", [Module_4.o(o$widgetId), c]), o$block, e) : Module_4.l(Module_4.n("actorMoveBackward", [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_rotate", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("actorRotate", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_rotate_left_or_right", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "DIRECTION")
        if (!s) {
          return ""
        }
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return "left" === s ? Module_4.l(Module_4.n("actorRotate", [Module_4.o(o$widgetId), c]), o$block, e) : Module_4.l(Module_4.n("actorRotateBackward", [Module_4.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_set_rotation", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("actorSetRotation", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_face_to", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "TARGET")
        return s ? Module_4.j("actorFaceTo", [Module_4.o(o$widgetId), Module_4.o(s)]) : ""
      })
      e.insertBlockSnippetGenerator("brush_move_to", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "TARGET")
        return s ? Module_4.n("actorMoveTo", [Module_4.o(o$widgetId), Module_4.o(s)]) : ""
      })
      e.insertBlockSnippetGenerator("brush_move_to_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "X", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "Y", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("actorMoveToPosition", [Module_4.o(o$widgetId), s, c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var c = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "actorSetPositionX" : "actorSetPositionY"
        return Module_4.l(Module_4.n(c, [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_change_position", function (n, r) {
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
      e.insertBlockSnippetGenerator("brush_move_to_position_in_time", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "X", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "Y", e.ORDER_FUNCTION_CALL)
        var l = e.valueToCode(n, r, "SECONDS", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.j("moveToPositionInTime", [Module_4.o(o$widgetId), l, s, c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_change_position_type_in_time", function (n, r) {
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
        return Module_4.l(Module_4.j(l, [Module_4.o(o$widgetId), c, d, s]), o$block, e, true)
      })
      e.insertBlockSnippetGenerator("brush_set_fill_color", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "COLOR", e.ORDER_FUNCTION_CALL)
        return Module_4.l(Module_4.n("setBrushFillColor", [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("brush_set_fill_path", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.getFieldValue(o$block, "PATH")
        return Module_4.n("setBrushFillPath", [Module_4.o(o$widgetId), Module_4.o(s)])
      })
      e.insertBlockSnippetGenerator("brush_change_z_index", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "INDEX_TYPE")
        return Module_4.n("changeBrushZIndex", [Module_4.o(o$widgetId), Module_4.o(s)])
      })
      e.insertBlockSnippetGenerator("brush_get_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "getActorPositionX" : "getActorPositionY"
        return Module_4.s(s, [Module_4.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("brush_get_color", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getBrushColor", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("brush_get_pen_size", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getBrushPenSize", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("brush_get_rotation", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getBrushRotation", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("brush_get_color_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "PROPERTY")
        return s ? "color" === s ? Module_4.s("getBrushColor", [Module_4.o(o$widgetId)]) : Module_4.s("getBrushColorProperty", [Module_4.o(o$widgetId), Module_4.o(s)]) : ""
      })
      e.insertBlockSnippetGenerator("brush_get_color_value", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "PROPERTY")
        return s ? "color" === s ? Module_4.s("getBrushColor", [Module_4.o(o$widgetId)]) : Module_4.s("getBrushColorProperty", [Module_4.o(o$widgetId), Module_4.o(s)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      t.extensions.register_mutator("BRUSH_DRAW_CIRCLE_MUTATOR", Ah)
      t.extensions.register_mutator("BRUSH_DRAW_ARC_MUTATOR", Ih)
      t.extensions.register_mutator("BRUSH_DRAW_POLYGON_MUTATOR", jh)
      var n = {
        type: "field_coco_dropdown",
        custom: true,
        name: "WIDGET_ID",
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.c)
        }
      }
      function r(e) {
        var /* [auto-meaningful-name] */this$source_block = this.source_block
        var n = e || (null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_field_value("PROPERTY"))
        var r = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_shadow_field("VALUE")
        if (r && "FieldNumber" === r.field_type) {
          var o = "hue" === n ? 360 : 100
          r.set_controller_option({
            type: Src_shared_packages_Crc_blink_src_index.I.ControllerType.SLIDER,
            left_text: "0",
            right_text: o.toString()
          })
          r.set_constraints(0, o, 1)
        }
      }
      function o(e) {
        var t
        var n
        var r
        var /* [auto-meaningful-name] */this$source_block = this.source_block
        var i = e || (null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID"))
        var a = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_field_value("TARGET")
        if (i && a && !["__mouse", "__random"].includes(a)) {
          if ((null === (t = Module_33.Cb(i)) || undefined === t ? undefined : t.parentId) !== (null === (n = Module_33.Cb(a)) || undefined === n ? undefined : n.parentId)) {
            if (!(null === this$source_block || undefined === this$source_block || null === (r = this$source_block.get_field("TARGET")) || undefined === r)) {
              r.set_value(Module_61.c)
            }
          }
        }
      }
      e.insertBlockProfile("brush_set_pen_down", {
        type: "brush_set_pen_down",
        message0: "%{BKY_BRUSH_SET_PEN_DOWN}",
        args0: [Module_6.a({}, n)],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true
      })
      e.insertBlockProfile("brush_set_pen_up", {
        type: "brush_set_pen_up",
        message0: "%{BKY_BRUSH_SET_PEN_UP}",
        args0: [Module_6.a({}, n)],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true
      })
      e.insertBlockProfile("brush_set_pen_up_or_down", {
        type: "brush_set_pen_up_or_down",
        message0: "%{BKY_BRUSH_SET_PEN_UP_OR_DOWN}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "STATUS",
            options: function () {
              return [[t.Msg.PEN_DOWN, "down"], [t.Msg.PEN_UP, "up"]]
            }
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true
      })
      e.insertBlockProfile("brush_draw_point", {
        type: "brush_draw_point",
        message0: "%{BKY_BRUSH_DRAW_POINT}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("brush_draw_line", {
        type: "brush_draw_line",
        message0: "%{BKY_BRUSH_DRAW_LINE}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "X1",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "Y1",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "X2",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "Y2",
            check: ["Number"]
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true
      })
      e.insertBlockProfile("brush_draw_circle", {
        type: "brush_draw_circle",
        message0: "%{BKY_BRUSH_DRAW_CIRCLE}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "RADIUS",
            check: ["Number"]
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        mutator: "BRUSH_DRAW_CIRCLE_MUTATOR"
      })
      e.insertBlockProfile("brush_draw_arc", {
        type: "brush_draw_arc",
        message0: "%{BKY_BRUSH_DRAW_ARC}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "RADIUS",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "ANGLE",
            check: ["Number"]
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        mutator: "BRUSH_DRAW_ARC_MUTATOR"
      })
      e.insertBlockProfile("brush_draw_polygon", {
        type: "brush_draw_polygon",
        message0: "%{BKY_BRUSH_DRAW_POLYGON}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "STEP",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "SIDE",
            check: ["Number"]
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        mutator: "BRUSH_DRAW_POLYGON_MUTATOR"
      })
      e.insertBlockProfile("brush_set_color", {
        type: "brush_set_color",
        message0: "%{BKY_BRUSH_SET_COLOR}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            check: ["Color", "String"],
            name: "COLOR"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_set_fill_color", {
        type: "brush_set_fill_color",
        message0: "%{BKY_BRUSH_SET_FILL_COLOR}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            check: ["Color", "String"],
            name: "COLOR"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_set_fill_path", {
        type: "brush_set_fill_path",
        message0: "%{BKY_BRUSH_SET_FILL_PATH}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "PATH",
            options: function () {
              return [[t.Msg.POINT_START, "start"], [t.Msg.POINT_END, "end"]]
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_set_pen_size", {
        type: "brush_set_pen_size",
        message0: "%{BKY_BRUSH_SET_PEN_SIZE}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_change_pen_size", {
        type: "brush_change_pen_size",
        message0: "%{BKY_BRUSH_CHANGE_PEN_SIZE}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "METHOD",
            options: function () {
              return [[t.Msg.INCREASE, "increase"], [t.Msg.DECREASE, "decrease"]]
            }
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_set_color_property", {
        type: "brush_set_color_property",
        message0: "%{BKY_BRUSH_SET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "PROPERTY",
            options: function () {
              return [[t.Msg.HUE, "hue"], [t.Msg.SATURATION, "saturation"], [t.Msg.BRIGHTNESS, "brightness"], [t.Msg.ALPHA, "alpha"]]
            },
            optOnchange: r
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_set_color_value", {
        type: "brush_set_color_value",
        message0: "%{BKY_BRUSH_SET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "PROPERTY",
            options: function () {
              return [[t.Msg.HUE, "hue"], [t.Msg.SATURATION, "saturation"], [t.Msg.BRIGHTNESS, "brightness"], [t.Msg.WIDGET_OPACITY, "opacity"]]
            },
            optOnchange: r
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_change_color_property", {
        type: "brush_change_color_property",
        message0: "%{BKY_BRUSH_CHANGE_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "PROPERTY",
            options: function () {
              return [[t.Msg.HUE, "hue"], [t.Msg.SATURATION, "saturation"], [t.Msg.BRIGHTNESS, "brightness"], [t.Msg.ALPHA, "alpha"]]
            }
          }, {
            type: "field_coco_dropdown",
            custom: true,
            name: "METHOD",
            options: function () {
              return [[t.Msg.INCREASE, "increase"], [t.Msg.DECREASE, "decrease"]]
            }
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_change_color_value", {
        type: "brush_change_color_value",
        message0: "%{BKY_BRUSH_CHANGE_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "PROPERTY",
            options: function () {
              return [[t.Msg.HUE, "hue"], [t.Msg.SATURATION, "saturation"], [t.Msg.BRIGHTNESS, "brightness"], [t.Msg.WIDGET_OPACITY, "opacity"]]
            }
          }, {
            type: "field_coco_dropdown",
            custom: true,
            name: "METHOD",
            options: function () {
              return [[t.Msg.INCREASE, "increase"], [t.Msg.DECREASE, "decrease"]]
            }
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_move_forward", {
        type: "brush_move_forward",
        message0: "%{BKY_BRUSH_MOVE_FORWARD}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("brush_move_forward_or_backward", {
        type: "brush_move_forward_or_backward",
        message0: "%{BKY_BRUSH_MOVE_FORWARD_OR_BACKWARD}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "DIRECTION",
            options: function () {
              return [[t.Msg.FORWARD, "forward"], [t.Msg.BACKWARD, "backward"]]
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
      e.insertBlockProfile("brush_rotate", {
        type: "brush_rotate",
        message0: "%{BKY_BRUSH_ROTATE}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("brush_rotate_left_or_right", {
        type: "brush_rotate_left_or_right",
        message0: "%{BKY_BRUSH_ROTATE_LEFT_OR_RIGHT}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "DIRECTION",
            options: function () {
              return [[t.Msg.ROTATE_LEFT, "left"], [t.Msg.ROTATE_RIGHT, "right"]]
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
      e.insertBlockProfile("brush_set_rotation", {
        type: "brush_set_rotation",
        message0: "%{BKY_BRUSH_SET_ROTATION}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("brush_face_to", {
        type: "brush_face_to",
        message0: "%{BKY_BRUSH_FACE_TO}",
        args0: [
          Module_6.a(Module_6.a({}, n), {}, {
            optOnchange: o
          }), {
            type: "field_coco_dropdown",
            custom: true,
            name: "TARGET",
            advancedOptions: function () {
              var /* [auto-meaningful-name] */this$source_block
              var n
              var r = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")
              var o = r ? null === (n = Module_33.Cb(r)) || undefined === n ? undefined : n.parentId : undefined
              return [
                {
                  type: "basic",
                  text: t.Msg.TOUCH_POINT,
                  value: "__mouse"
                }, {
                  type: "basic",
                  text: t.Msg.RANDOM,
                  value: "__random"
                }, {
                  type: "group",
                  name: t.Msg.ACTOR,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a, o)
                }, {
                  type: "group",
                  name: t.Msg.BRUSH,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.c, o)
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
      e.insertBlockProfile("brush_move_to_position", {
        type: "brush_move_to_position",
        message0: "%{BKY_BRUSH_MOVE_TO_POSITION}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("brush_move_to", {
        type: "brush_move_to",
        message0: "%{BKY_BRUSH_MOVE_TO}",
        args0: [
          Module_6.a(Module_6.a({}, n), {}, {
            optOnchange: o
          }), {
            type: "field_coco_dropdown",
            name: "TARGET",
            custom: true,
            advancedOptions: function () {
              var /* [auto-meaningful-name] */this$source_block
              var n
              var r = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")
              var o = r ? null === (n = Module_33.Cb(r)) || undefined === n ? undefined : n.parentId : undefined
              return [
                {
                  type: "basic",
                  text: t.Msg.TOUCH_POINT,
                  value: "__mouse"
                }, {
                  type: "basic",
                  text: t.Msg.RANDOM,
                  value: "__random"
                }, {
                  type: "group",
                  name: t.Msg.ACTOR,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.a, o)
                }, {
                  type: "group",
                  name: t.Msg.BRUSH,
                  options: Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.c, o)
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
      e.insertBlockProfile("brush_set_position", {
        type: "brush_set_position",
        message0: "%{BKY_BRUSH_SET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("brush_change_position", {
        type: "brush_change_position",
        message0: "%{BKY_BRUSH_CHANGE_POSITION}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("brush_move_to_position_in_time", {
        type: "brush_move_to_position_in_time",
        message0: "%{BKY_BRUSH_CHANGE_POSITION_IN_TIME}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("brush_change_position_type_in_time", {
        type: "brush_change_position_type_in_time",
        message0: "%{BKY_BRUSH_CHANGE_POSITION_TYPE_IN_TIME}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("brush_change_z_index", {
        type: "brush_change_z_index",
        message0: "%{BKY_BRUSH_CHANGE_Z_INDEX}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "INDEX_TYPE",
            options: function () {
              return [[t.Msg.INDEX_UP, "up"], [t.Msg.INDEX_DOWN, "down"], [t.Msg.INDEX_TOP, "top"], [t.Msg.INDEX_BOTTOM, "bottom"]]
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_get_position", {
        type: "brush_get_position",
        message0: "%{BKY_BRUSH_GET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
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
      e.insertBlockProfile("brush_get_color", {
        type: "brush_get_color",
        message0: "%{BKY_BRUSH_GET_COLOR}",
        args0: [Module_6.a({}, n)],
        output: ["String", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_get_pen_size", {
        type: "brush_get_pen_size",
        message0: "%{BKY_BRUSH_GET_PEN_SIZE}",
        args0: [Module_6.a({}, n)],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_get_rotation", {
        type: "brush_get_rotation",
        message0: "%{BKY_BRUSH_GET_ROTATION}",
        args0: [Module_6.a({}, n)],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_get_color_property", {
        type: "brush_get_color_property",
        message0: "%{BKY_BRUSH_GET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "PROPERTY",
            options: function () {
              return [[t.Msg.COLOR, "color"], [t.Msg.HUE, "hue"], [t.Msg.SATURATION, "saturation"], [t.Msg.BRIGHTNESS, "brightness"], [t.Msg.ALPHA, "alpha"]]
            }
          }
        ],
        output: ["Number", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("brush_get_color_value", {
        type: "brush_get_color_value",
        message0: "%{BKY_BRUSH_GET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            custom: true,
            name: "PROPERTY",
            options: function () {
              return [[t.Msg.COLOR, "color"], [t.Msg.HUE, "hue"], [t.Msg.SATURATION, "saturation"], [t.Msg.BRIGHTNESS, "brightness"], [t.Msg.WIDGET_OPACITY, "opacity"]]
            }
          }
        ],
        output: ["Number", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["brush_draw_point", "brush_draw_line", "brush_set_color", "brush_set_pen_size", "brush_change_pen_size", "brush_set_rotation", "brush_face_to", "brush_move_to_position", "brush_move_to", "brush_set_position", "brush_change_position", "brush_move_to_position_in_time", "brush_change_position_type_in_time", "brush_get_pen_size", "brush_get_position", "brush_set_pen_down", "brush_set_pen_up", "brush_move_forward", "brush_rotate", "brush_get_color", "brush_set_color_property", "brush_change_color_property", "brush_get_color_property", "brush_change_z_index", "brush_get_rotation", "brush_draw_circle", "brush_draw_arc", "brush_draw_polygon", "brush_set_fill_color", "brush_set_fill_path", "brush_set_pen_up_or_down", "brush_move_forward_or_backward", "brush_rotate_left_or_right", "brush_set_color_value", "brush_change_color_value", "brush_get_color_value"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: []
}
export { Nh }
