/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-43
 */

"use strict"

import { Bp } from "./index__part-41"
import { Wp } from "./index__part-42"
var Gp
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"./76"
import * as /* [auto-meaningful-name] */Module_95 from /* 95 */"./95"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"./46/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"./90"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"./133/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useState, useEffect, useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_290 from /* 290 */"./290"
import /* [auto-meaningful-name] */Module_2901 from /* 290 */"./290"
function Vp(e, t) {
  return Color(e).alpha(t).toString()
}
var /* [auto-meaningful-name] */Module_76$c$OUTLINED_NORMAL = Module_76.c.OUTLINED_NORMAL
var /* [auto-meaningful-name] */Src_editor_widget_builtIn_types$s$MEDIUM = Src_editor_widget_builtIn_types.s.MEDIUM
var Kp = {
  icon: Module_95.b,
  previewAreaWidgetTitle: "InputWidget.widgetName",
  title: "",
  type: Src_editor_widget_builtIn_types.w,
  component: function (e) {
    var t = e.id
    var /* [auto-meaningful-name] */e$position = e.position
    var /* [auto-meaningful-name] */e$visible = e.visible
    var /* [auto-meaningful-name] */e$size = e.size
    var /* [auto-meaningful-name] */e$selected = e.selected
    var /* [auto-meaningful-name] */e$opacity = e.opacity
    var /* [auto-meaningful-name] */e$onChange = e.onChange
    var /* [auto-meaningful-name] */e$attributes = e.attributes
    var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
    var /* [auto-meaningful-name] */e$attributes$placeholder = e$attributes.placeholder
    var /* [auto-meaningful-name] */e$attributes$value = e$attributes.value
    var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
    var m = undefined === e$attributes$textAlign ? "left" : e$attributes$textAlign
    var /* [auto-meaningful-name] */e$attributes$placeholderColor = e$attributes.placeholderColor
    var /* [auto-meaningful-name] */e$attributes$valueColor = e$attributes.valueColor
    var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
    var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
    var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
    var /* [auto-meaningful-name] */e$attributes$templateMode = e$attributes.templateMode
    var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
    var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
    var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
    var /* [auto-meaningful-name] */e$size$width = e$size.width
    var /* [auto-meaningful-name] */e$size$height = e$size.height
    var I = useRef(null)
    var j = useState(false)
    var R = Module_10.a(j, 2)
    var x = R[0]
    var M = R[1]
    var L = useState(e$attributes$placeholder)
    var P = Module_10.a(L, 2)
    var B = P[0]
    var F = P[1]
    var G = useRef(null)
    useEffect(function () {
      var /* [auto-meaningful-name] */G$current = G.current
      if (G$current) {
        G$current.value = e$attributes$value
      }
    })
    useEffect(function () {
      var /* [auto-meaningful-name] */G$current = G.current
      if (x && G$current) {
        G$current.focus()
        G$current.selectionStart = G$current.selectionEnd = G$current.value.length
      }
    }, [x])
    useEffect(function () {
      F(e$attributes$placeholder)
    }, [e$attributes$placeholder])
    var W = Module_9.hb(e$attributes$backgroundImage)
    var U = Src_shared_tools_index.U(e$attributes$backgroundImage) ? e$attributes$backgroundImage : W ? (null === W || undefined === W ? undefined : W.source) || (null === W || undefined === W ? undefined : W.cdnUrl) : Module_95.a
    var H = undefined
    var V = useMemo(function () {
      return function (e, t, n) {
        var r
        return (r = {}, Module_11.a(r, Module_76.c.OUTLINED_NORMAL, {
          background: "rgba(255, 255, 255)",
          borderRadius: "4px",
          border: "2px solid ".concat(Vp(t, .5)),
          borderColor: Vp(t, .5)
        }), Module_11.a(r, Module_76.c.CONTAINED_NORMAL, {
          background: Vp(t, .14),
          borderRadius: "4px"
        }), Module_11.a(r, Module_76.c.CONTAINED_ROUND, {
          background: Vp(t, .14),
          borderRadius: "".concat(n / 2, "px")
        }), Module_11.a(r, Module_76.c.OUTLINED_FLAT, {
          borderBottom: "2px solid ".concat(Vp(t, .5)),
          borderBottomColor: Vp(t, .5)
        }), r)[e]
      }(e$attributes$templateMode, e$attributes$backgroundColor, e$size$height)
    }, [e$attributes$backgroundColor, e$size$height, e$attributes$templateMode])
    if (e$attributes$backgroundMode === Module_76.a.IMAGE) {
      H = {
        backgroundImage: "url(".concat(U, ")"),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%",
        padding: "6px ".concat(20, "px")
      }
    } else {
      H = Module_6.a(Module_6.a({}, V), {}, {
        padding: "6px ".concat(14, "px")
      })
    }
    var z = useMemo(function () {
      if (e$attributes$disabled) {
        return function (e) {
          var t
          return (t = {}, Module_11.a(t, Module_76.c.OUTLINED_NORMAL, {
            color: "#CCCCCC",
            borderColor: "#E9E9E9"
          }), Module_11.a(t, Module_76.c.CONTAINED_NORMAL, {
            background: "#E7E7E7",
            color: "#FFFFFF"
          }), Module_11.a(t, Module_76.c.CONTAINED_ROUND, {
            background: "#E7E7E7",
            color: "#FFFFFF"
          }), Module_11.a(t, Module_76.c.OUTLINED_FLAT, {
            color: "#CCCCCC",
            borderBottomColor: "#E9E9E9"
          }), t)[e]
        }(e$attributes$templateMode)
      }
    }, [e$attributes$templateMode, e$attributes$disabled])
    useEffect(function () {
      var e
      var n = z ? z.color : e$attributes$placeholderColor
      if (!(null === (e = document.getElementById(t)) || undefined === e)) {
        e.style.setProperty("--input-placeholder-color", n)
      }
    }, [t, e$attributes$placeholderColor, z])
    return React.createElement("div", {
      id: t,
      className: Classnames(Module_2901.inputWidget, e$attributes$backgroundMode === Module_76.a.TEMPLATE && e$attributes$templateMode !== Module_76.c.OUTLINED_FLAT && Module_2901.inputWidgetUnderpainting, Module_90.b, Module_11.a({}, Module_2901.hide, !e$visible)),
      "data-role": Src_editor_widget_builtIn_types.M,
      "data-widget-type": Src_editor_widget_builtIn_types.w,
      "data-min-width": Module_95.m,
      "data-min-height": Module_95.l,
      ref: I,
      style: Module_6.a(Module_6.a({
        top: e$position.y,
        left: e$position.x,
        height: e$size$height,
        width: e$size$width,
        minWidth: "".concat(Module_95.m, "px"),
        minHeight: "".concat(Module_95.l, "px"),
        fontSize: e$attributes$fontSize,
        fontFamily: e$attributes$fontFamily,
        color: e$attributes$valueColor,
        opacity: undefined === e$opacity ? undefined : e$opacity / 100,
        filter: e$attributes$disabled && e$attributes$backgroundMode === Module_76.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined
      }, H), z)
    }, React.createElement("div", {
      className: Classnames(Module_2901.inputWidgetInputWrapper, {}),
      onDoubleClick: function () {
        var /* [auto-meaningful-name] */G$current = G.current
        if (G$current) {
          G$current.focus()
          G$current.selectionStart = 0
          G$current.selectionEnd = G$current.value.length
        }
      },
      onClick: function () {
        var /* [auto-meaningful-name] */I$current
        var /* [auto-meaningful-name] */I$current1 = I.current
        var /* [auto-meaningful-name] */G$current = G.current
        if (I$current1 && G$current && e$selected && (null === (I$current = I.current) || undefined === I$current ? undefined : I$current.dataset.clickType) === Module_53.h.CLICK) {
          M(true)
        }
      }
    }, React.createElement("input", {
      ref: G,
      onFocus: function (e) {
        var /* [auto-meaningful-name] */I$current = I.current
        F("")
        if (I$current && !e$attributes$disabled) {
          I$current.classList.add(Module_90.a, Module_90.c)
        }
      },
      onKeyDown: function (e) {
        var /* [auto-meaningful-name] */G$current
        if (13 === e.keyCode) {
          if (!(null === (G$current = G.current) || undefined === G$current)) {
            G$current.blur()
          }
        }
      },
      onBlur: function (e) {
        var /* [auto-meaningful-name] */I$current = I.current
        if (I$current) {
          I$current.classList.remove(Module_90.a, Module_90.c)
        }
        if (e$onChange) {
          e$onChange("value", e.target.value)
        }
        M(false)
        F(e$attributes$placeholder)
      },
      placeholder: B,
      style: {
        textAlign: m,
        color: e$attributes$disabled ? Module_95.o : e$attributes$valueColor
      }
    }), !x && React.createElement("div", {
      className: Classnames(Module_2901.mask)
    })))
  },
  editConfig: Bp,
  contentTextField: "placeholder",
  blockConfig: Wp,
  isInvisibleWidget: Module_95.j,
  widget: {
    isGlobalWidget: Module_95.i,
    animationRecord: (Gp = {}, Module_11.a(Gp, Module_76.c.OUTLINED_NORMAL, {
      focus: "borderColorEnhance",
      error: "defaultOutlineError"
    }), Module_11.a(Gp, Module_76.c.OUTLINED_FLAT, {
      focus: "borderColorEnhance",
      error: "defaultOutlineError"
    }), Module_11.a(Gp, Module_76.c.CONTAINED_NORMAL, {
      focus: "backgroundColorEnhance",
      error: "defaultContainedError"
    }), Module_11.a(Gp, Module_76.c.CONTAINED_ROUND, {
      focus: "backgroundColorEnhance",
      error: "defaultContainedError"
    }), Gp),
    size: {
      width: Module_95.k,
      height: Module_95.h
    },
    attributes: {
      disabled: false,
      value: "",
      placeholder: "%{COCO_defaultInputWidgetContent}",
      color: Module_95.e,
      sizeType: Src_editor_widget_builtIn_types$s$MEDIUM,
      mode: Module_76$c$OUTLINED_NORMAL,
      textAlign: "left",
      placeholderColor: Module_95.n,
      valueColor: Module_95.o,
      fontFamily: Module_95.f,
      fontSize: Module_95.g,
      backgroundMode: Module_76.a.TEMPLATE,
      templateMode: Module_76$c$OUTLINED_NORMAL,
      backgroundColor: Module_95.c,
      backgroundImage: Module_95.a,
      imageResizeMode: Module_76.b.CONTAIN
    }
  }
}
var qp = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, {
    type: "VisibleSwitch"
  }, {
    type: "ChangeImage",
    stillImageShowResizeMode: true
  }, {
    type: "BackgroundColor"
  }, {
    type: "WidgetOpacity"
  }, {
    type: "Size"
  }, {
    type: "Coordinate"
  }
]
var Xp = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, {
    type: "VisibleSwitch"
  }, {
    type: "ChangeImage",
    stillImageShowResizeMode: true
  }, {
    type: "BackgroundColor"
  }
]
var Qp = {
  type: Src_editor_widget_builtIn_types.v,
  category: {
    iconId: Module_133.a,
    blocks: Src_editor_widget_builtIn_types.v
  },
  categoryClass: {
    text: "",
    iconId: Module_133.a,
    blocks: []
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"image_on_press\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"image_set_file_id\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"IMAGE_FILE_ID_SHADOW\">\n        <shadow type=\"image_file_list_dropdown\"> <field name=\"IMAGE_FILE_ID\">").concat(Module_61.c, "</field></shadow>\n      </value>\n    </block>"), Module_33.sb({
        property: "backgroundColor",
        widgetType: Src_editor_widget_builtIn_types.v,
        widgetId: e,
        isSetProperty: true
      }), Module_61.d, Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.v,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"image_set_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='0,,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"image_set_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"image_set_visible\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"VISIBLE\">show</field>\n    </block>"), Module_61.d, "<block type=\"image_get_file_id\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_33.sb({
        property: "backgroundColor",
        widgetType: Src_editor_widget_builtIn_types.v,
        widgetId: e
      }), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.v,
        widgetId: e
      }), "<block type=\"image_get_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n    </block>"), "<block type=\"image_get_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n    </block>"), Module_61.d, Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.v,
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
      e.insertBlockSnippetGenerator("image_on_press", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        return i ? Module_4.n("onImagePress", [Module_4.o(tNR$widgetId)], i) : ""
      })
      e.insertBlockSnippetGenerator("image_file_list_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "IMAGE_FILE_ID")
        return undefined === o || o === Module_61.a || o === Module_61.c ? e.quote("") : Module_4.o(o)
      })
      e.insertBlockSnippetGenerator("icon_file_list_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "ICON_FILE_ID")
        return undefined === o || o === Module_61.a || o === Module_61.c ? e.quote("") : Module_4.o(o)
      })
      e.insertBlockSnippetGenerator("image_set_file_id", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "IMAGE_FILE_ID_SHADOW", e.ORDER_FUNCTION_CALL)
        return s ? Module_4.l(Module_4.n("setImageWidgetImageId", [Module_4.o(o$widgetId), s]), o$block, e) : ""
      })
      e.insertBlockSnippetGenerator("image_set_size", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var c = "width" === e.getFieldValue(o$block, "SIZE_TYPE") ? "setImageWidgetWidth" : "setImageWidgetHeight"
        return Module_4.l(Module_4.n(c, [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("image_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var c = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "setImageWidgetPositionX" : "setImageWidgetPositionY"
        return Module_4.l(Module_4.n(c, [Module_4.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("image_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "show" === e.getFieldValue(o$block, "VISIBLE")
        return Module_4.n("setImageWidgetVisible", [Module_4.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("image_get_size", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "width" === e.getFieldValue(o$block, "SIZE_TYPE") ? "getImageWidgetWidth" : "getImageWidgetHeight"
        return Module_4.s(s, [Module_4.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("image_get_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "getImageWidgetPositionX" : "getImageWidgetPositionY"
        return Module_4.s(s, [Module_4.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("image_get_file_id", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getImageWidgetImageId", [Module_4.o(tEN$widgetId)])
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType("IMAGE_WIDGET")
        }
      }
      e.insertBlockProfile("image_on_press", {
        type: "image_on_press",
        message0: "%{BKY_IMAGE_ON_PRESS}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), Module_6.a({}, n), {
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
      e.insertBlockProfile("image_set_file_id", {
        type: "image_set_file_id",
        message0: "%{BKY_IMAGE_SET_FIELD_ID}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "IMAGE_FILE_ID_SHADOW",
            check: ["String"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_IMAGE_SET_FIELD_ID_TOOLTIP}"
      })
      e.insertBlockProfile("image_file_list_dropdown", {
        type: "image_file_list_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "IMAGE_FILE_ID",
            custom: true,
            options: function () {
              return Module_46.c().getImageFiles()
            }
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        output: ["String"]
      })
      e.insertBlockProfile("icon_file_list_dropdown", {
        type: "icon_file_list_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "ICON_FILE_ID",
            custom: true,
            options: function () {
              return Module_46.c().getIconFiles()
            }
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        output: ["String"]
      })
      e.insertBlockProfile("image_set_size", {
        type: "image_set_size",
        message0: "%{BKY_IMAGE_SET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]],
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
      e.insertBlockProfile("image_set_position", {
        type: "image_set_position",
        message0: "%{BKY_IMAGE_SET_PROPERTY}",
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
      e.insertBlockProfile("image_set_visible", {
        type: "image_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
          }, Module_6.a({}, n)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("image_get_size", {
        type: "image_get_size",
        message0: "%{BKY_IMAGE_GET_PROPERTY}",
        args0: [
          Module_6.a({}, n), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]]
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("image_get_position", {
        type: "image_get_position",
        message0: "%{BKY_IMAGE_GET_PROPERTY}",
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
      e.insertBlockProfile("image_get_file_id", {
        type: "image_get_file_id",
        message0: "%{BKY_IMAGE_GET_FILE_ID}",
        args0: [Module_6.a({}, n)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_IMAGE_GET_FILE_ID_TOOLTIP}"
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["image_on_press", "image_set_file_id", "image_set_size", "image_set_position", "image_set_visible", "image_get_size", "image_get_position", "image_get_file_id"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["image_on_press"]
}
export { Kp }
export { qp }
export { Xp }
export { Qp }
