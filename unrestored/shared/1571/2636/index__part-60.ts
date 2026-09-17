/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-60
 */

"use strict"

import { eh } from "./index__part-59"
import * as /* [auto-meaningful-name] */Module_172 from /* 172 */"./172"
import * as /* [auto-meaningful-name] */Module_228 from /* 228 */"./228/index"
import * as /* [auto-meaningful-name] */Module_42 from /* 42 */"./42/index"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"./90"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_45 from /* 45 */"./45"
import /* [auto-meaningful-name] */Module_451 from /* 45 */"./45"
var rh = {}
var oh = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$templateType = e$attributes.templateType
  var /* [auto-meaningful-name] */e$attributes$templateRenderType = e$attributes.templateRenderType
  var /* [auto-meaningful-name] */e$attributes$templateSlotMap = e$attributes.templateSlotMap
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$dataSource = e$attributes.dataSource
  var f = useDispatch()
  var m = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var g = useSelector(function (e) {
    return e.cloudSpace.cloudTableDataList
  })
  for (var v in e$attributes$templateSlotMap) {
    var b = Module_9.Bb(e$attributes$templateSlotMap[v].widgetId)
    rh[v] = false !== (null === b || undefined === b ? undefined : b.visible)
  }
  function y(e, t) {
    return React.createElement(React.Fragment, null, e$attributes$templateType === Src_editor_widget_builtIn_types.o.ONLY_TITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(Module_451.flexSC, Module_451.template1, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, React.createElement("div", {
        className: Module_451.title
      }, Module_42.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), React.createElement("div", {
        className: Module_451.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_451.icon
      }))))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(Module_451.flexSC, Module_451.template2, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, rh.titleSlot ? React.createElement("div", {
        className: Module_451.title
      }, Module_42.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : React.createElement("div", null), React.createElement("div", {
        className: Classnames(Module_451.flexSC, Module_451.subTitleBox)
      }, rh.subTitleSlot && React.createElement("div", {
        className: Module_451.subTitle
      }, Module_42.e(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_451.icon
      }))))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(Module_451.flexSC, Module_451.template3, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, React.createElement("div", {
        className: Module_451.title
      }, rh.imageSlot && React.createElement("div", {
        className: Module_451.smallImgBox
      }, Module_42.e(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), rh.titleSlot && React.createElement("div", null, Module_42.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t))), React.createElement("div", {
        className: Classnames(Module_451.flexSC, Module_451.subTitleBox)
      }, rh.subTitleSlot && React.createElement("div", {
        className: Module_451.subTitle
      }, Module_42.e(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_451.icon
      }))))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(Module_451.flexSC, Module_451.template4, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, React.createElement("div", {
        className: Module_451.avatarAndTitle
      }, rh.avatarSlot && React.createElement("div", {
        className: Module_451.avatarImgBox
      }, Module_42.e(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: Module_451.titleBox
      }, rh.titleSlot && React.createElement("div", {
        className: Module_451.title
      }, Module_42.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), rh.subTitleSlot && React.createElement("div", {
        className: Module_451.subTitle
      }, Module_42.e(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), React.createElement("div", {
        className: Module_451.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_451.icon
      }))))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_AND_TITLE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(Module_451.flexSC, Module_451.template5, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, React.createElement("div", {
        className: Module_451.imgAndTitleBox
      }, rh.imageSlot && React.createElement("div", {
        className: Module_451.smallImgBox
      }, Module_42.e(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), React.createElement("div", null, rh.titleSlot && React.createElement("div", {
        className: Module_451.title
      }, Module_42.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), rh.descSlot && React.createElement("div", {
        className: Module_451.desc
      }, Module_42.e(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))), React.createElement("div", {
        className: Module_451.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_451.icon
      }))))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(Module_451.template6, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, React.createElement("div", {
        className: Module_451.avatarAndTitle
      }, rh.avatarSlot && React.createElement("div", {
        className: Module_451.avatarImgBox
      }, Module_42.e(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: Module_451.titleBox
      }, rh.titleSlot && React.createElement("div", {
        className: Module_451.title
      }, Module_42.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), rh.subTitleSlot && React.createElement("div", {
        className: Module_451.subTitle
      }, Module_42.e(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), rh.bannerSlot && React.createElement("div", {
        className: Module_451.bannerImgBox
      }, Module_42.e(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), rh.descSlot && React.createElement("div", {
        className: Module_451.desc
      }, Module_42.e(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t))))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(Module_451.template6, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, rh.bannerSlot && React.createElement("div", {
        className: Module_451.bannerImgBox
      }, Module_42.e(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), React.createElement("div", {
        className: Module_451.avatarAndTitle
      }, rh.avatarSlot && React.createElement("div", {
        className: Module_451.avatarImgBox
      }, Module_42.e(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: Module_451.titleBox
      }, rh.titleSlot && React.createElement("div", {
        className: Module_451.title
      }, Module_42.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), rh.subTitleSlot && React.createElement("div", {
        className: Module_451.subTitle
      }, Module_42.e(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), rh.descSlot && React.createElement("div", {
        className: Module_451.desc
      }, Module_42.e(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t))))
    }(e, t))
  }
  return React.createElement("div", {
    id: t,
    onMouseDown: function (e) {
      var n
      var r
      var o
      var i = e.target.closest("." + Module_90.b)
      if (i) {
        if ((null === (n = Module_9.Bb(i.id)) || undefined === n ? undefined : n.parentId) && i.id === m) {
          e.stopPropagation()
        } else if (!m || (null === (r = Module_9.Bb(m)) || undefined === r ? undefined : r.parentId) !== (null === (o = Module_9.Bb(i.id)) || undefined === o ? undefined : o.parentId)) {
          return i.id !== t && m !== t ? (e.stopPropagation(), void f(Src_editor_redux_common_actions.ug(t))) : undefined
        }
      }
    },
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.A,
    "data-min-width": Module_172.k,
    "data-max-width": Module_172.i,
    "data-min-height": Module_172.j,
    "data-max-height": Module_172.h,
    className: Classnames(Module_90.b, Module_11.a({}, Module_451.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      minWidth: "".concat(Module_172.k, "px"),
      minHeight: "".concat(Module_172.j, "px"),
      maxWidth: "".concat(Module_172.i, "px"),
      maxHeight: "".concat(Module_172.h, "px"),
      background: e$attributes$disabled ? Module_172.f : e$attributes$backgroundColor,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled ? "saturate(0)" : undefined
    }
  }, React.createElement("div", {
    className: Module_451.listViewerBox,
    style: {
      width: "100%",
      height: "100%",
      overflowY: "auto"
    }
  }, function () {
    if (e$attributes$dataSource) {
      if ("string" === typeof e$attributes$dataSource) {
        var e = Module_9.Bb(e$attributes$dataSource)
        if ((null === e || undefined === e ? undefined : e.type) === Src_editor_widget_builtIn_types.G && e.attributes.db.data.length > 0) {
          return React.createElement(React.Fragment, null, e.attributes.db.data.map(function (e, t) {
            return React.createElement("div", {
              key: t
            }, y(t, e))
          }))
        }
      } else {
        var /* [auto-meaningful-name] */n$data
        var n = g.find(function (e) {
          return e.id === e$attributes$dataSource
        })
        if (n && (null === (n$data = n.data) || undefined === n$data ? undefined : n$data.length) > 0) {
          return React.createElement(React.Fragment, null, n.data.map(function (e, t) {
            return React.createElement("div", {
              key: t
            }, y(t, e))
          }))
        }
      }
    }
    return React.createElement("div", null, y())
  }()))
})
var ih = {
  type: Src_editor_widget_builtIn_types.A,
  category: {
    iconId: Module_172.g,
    blocks: Src_editor_widget_builtIn_types.A
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"new_list_viewer_on_press\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"new_list_viewer_child_widget_on_press\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n    </block>"), Module_61.d, "<block type=\"new_list_viewer_child_widget_set_color_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(Module_61.c, "</field>\n      <value name=\"VALUE\">\n      <shadow type=\"color_picker\"><field name=\"COLOR_PALETTE\">#000000</field></shadow>\n      </value>\n    </block>"), Module_61.d, Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.A,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"new_list_viewer_set_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='").concat(Module_172.j, ",").concat(Module_172.h, ",1'>100</field>\n        </shadow>\n      </value>\n    </block>"), Module_33.sb({
        property: "__position",
        widgetType: Src_editor_widget_builtIn_types.A,
        widgetId: e,
        isSetProperty: true
      }), Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.A,
        widgetId: e,
        isSetProperty: true
      }), Module_33.sb({
        property: "__disabled",
        widgetType: Src_editor_widget_builtIn_types.A,
        widgetId: e,
        isSetProperty: true
      }), Module_61.d, "<block type=\"new_list_viewer_child_widget_get_color_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(Module_61.c, "</field>\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.A,
        widgetId: e
      }), "<block type=\"new_list_viewer_get_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n    </block>"), Module_33.sb({
        property: "__position",
        widgetType: Src_editor_widget_builtIn_types.A,
        widgetId: e
      }), Module_61.d, Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.A,
        widgetId: e
      }), Module_33.sb({
        property: "__disabled",
        widgetType: Src_editor_widget_builtIn_types.A,
        widgetId: e
      })
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("new_list_viewer_on_press_index", function () {
        return "".concat(Module_4.a, "index")
      })
      e.insertBlockSnippetGenerator("new_list_viewer_on_press", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        var a = e.valueToCode(t, n, "INDEX", e.ORDER_ATOMIC)
        return i ? Module_4.n("onListViewerPress", [Module_4.o(o)], i, [a]) : ""
      })
      e.insertBlockSnippetGenerator("new_list_viewer_set_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
        var a = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "setListViewerWidgetWidth" : "setListViewerWidgetHeight"
        return Module_4.l(Module_4.n(a, [Module_4.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("new_list_viewer_get_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "getListViewerWidgetWidth" : "getListViewerWidgetHeight"
        return Module_4.s(i, [Module_4.o(o)])
      })
      e.insertBlockSnippetGenerator("new_list_viewer_child_widget_on_press_index", function () {
        return "".concat(Module_4.a, "index")
      })
      e.insertBlockSnippetGenerator("new_list_viewer_child_widget_on_press", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.statementToCode(t, n, "DO")
        var s = e.valueToCode(t, n, "INDEX", e.ORDER_ATOMIC)
        if (!i || i === Module_61.c) {
          return ""
        }
        if (!a) {
          return ""
        }
        var c = "".concat(o, "_").concat(i)
        return Module_4.n("onListViewerChildWidgetPress", [Module_4.o(c)], a, [s])
      })
      e.insertBlockSnippetGenerator("new_list_viewer_child_widget_set_color_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return i && i !== Module_61.c && a && a !== Module_61.c ? Module_4.l(Module_4.n("setListViewerChildWidgetAttribute", [Module_4.o(o), s, Module_4.o(i), Module_4.o(a), c]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("new_list_viewer_child_widget_get_color_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        return i && i !== Module_61.c && a ? Module_4.l(Module_4.s("getListViewerChildWidgetAttribute", [Module_4.o(o), s, Module_4.o(i), Module_4.o(a)]), r, e, false, true) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var /* [auto-meaningful-name] */BKY_BLOCK_TAB_ICON = "%{BKY_BLOCK_TAB_ICON}"
      var r = [[t.Msg.TEXT_COLOR, "color"], [t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
      var o = [[t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
      var i = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.A)
        },
        optOnchange: function (e) {
          var /* [auto-meaningful-name] */this$source_block
          var /* [auto-meaningful-name] */this$source_block1
          var r = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field("SLOT_WIDGET")
          var o = null === (this$source_block1 = this.source_block) || undefined === this$source_block1 ? undefined : this$source_block1.get_field("ATTRIBUTE")
          if (!(null === r || undefined === r)) {
            r.set_value(Module_61.c)
          }
          if (!(null === o || undefined === o)) {
            o.set_value(Module_61.c)
          }
        }
      }
      var a = {
        type: "field_coco_dropdown",
        name: "SLOT_WIDGET",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var t = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || Module_228.a()
          var n = Module_46.c().getListViewerChildWidgetList(t)
          return n
        },
        optOnchange: function (e) {
          var /* [auto-meaningful-name] */this$source_block
          var n = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field("ATTRIBUTE")
          if (!(null === n || undefined === n)) {
            n.set_value(Module_61.c)
          }
        }
      }
      var s = {
        type: "field_coco_dropdown",
        name: "ATTRIBUTE",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var /* [auto-meaningful-name] */this$source_block1
          var n = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || Module_228.a()
          var i = null === (this$source_block1 = this.source_block) || undefined === this$source_block1 ? undefined : this$source_block1.get_field_value("SLOT_WIDGET")
          var a = Module_33.Cb(n)
          var s = []
          if (a && i) {
            var /* [auto-meaningful-name] */a$attributes
            var l
            var u = Module_33.Cb(null === (a$attributes = a.attributes) || undefined === a$attributes || null === (l = a$attributes.templateSlotMap[i]) || undefined === l ? undefined : l.widgetId)
            if ((null === u || undefined === u ? undefined : u.type) === Src_editor_widget_builtIn_types.H) {
              s = s.concat(r)
            }
            if ((null === u || undefined === u ? undefined : u.type) === Src_editor_widget_builtIn_types.v) {
              s = s.concat(o)
            }
          }
          return s
        }
      }
      e.insertBlockProfile("new_list_viewer_on_press", {
        type: "new_list_viewer_on_press",
        message0: "%{BKY_LIST_VIEWER_ON_PRESS}",
        args0: [
          Module_4.e(BKY_BLOCK_TAB_ICON, true), Module_6.a({}, i), {
            type: "input_value",
            name: "INDEX",
            check: "String",
            align: "CENTRE",
            default_shadow: "<shadow type=\"new_list_viewer_on_press_index\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "new_list_viewer_on_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("new_list_viewer_on_press_index", {
        type: "new_list_viewer_on_press_index",
        message0: "%{BKY_LIST_VIEWER_ROW_INDEX}",
        output: ["Number", "String"],
        required_context: "new_list_viewer_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("new_list_viewer_set_size", {
        type: "new_list_viewer_set_size",
        message0: "%{BKY_LIST_VIEWER_SET_PROPERTY}",
        args0: [
          Module_6.a({}, i), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]],
            optOnchange: function (e) {
              var t = e || ""
              !function (e, t, n, r) {
                var /* [auto-meaningful-name] */e$source_block = e.source_block
                var i = null === e$source_block || undefined === e$source_block ? undefined : e$source_block.get_shadow_field("NUM")
                if (i && "FieldNumber" === i.field_type) {
                  i.set_value(t)
                  i.set_constraints(r, n, 1)
                }
              }(this, "100", "width" === t ? Module_172.i : Module_172.h, "width" === t ? Module_172.k : Module_172.j)
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
      e.insertBlockProfile("new_list_viewer_get_size", {
        type: "new_list_viewer_get_size",
        message0: "%{BKY_LIST_VIEWER_GET_PROPERTY}",
        args0: [
          Module_6.a({}, i), {
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
      e.insertBlockProfile("new_list_viewer_child_widget_on_press", {
        type: "new_list_viewer_child_widget_on_press",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_ON_PRESS}",
        args0: [
          Module_4.e(BKY_BLOCK_TAB_ICON, true), Module_6.a({}, i), Module_6.a({}, a), {
            type: "input_value",
            name: "INDEX",
            check: "Number",
            align: "CENTRE",
            default_shadow: "<shadow type=\"new_list_viewer_child_widget_on_press_index\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "new_list_viewer_child_widget_on_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("new_list_viewer_child_widget_on_press_index", {
        type: "new_list_viewer_child_widget_on_press_index",
        message0: "%{BKY_LIST_VIEWER_ROW_INDEX}",
        output: "Number",
        required_context: "new_list_viewer_child_widget_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("new_list_viewer_child_widget_set_color_attributes", {
        type: "new_list_viewer_child_widget_set_color_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_SET_ATTRIBUTES}",
        args0: [
          Module_6.a({}, i), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, Module_6.a({}, a), Module_6.a({}, s), {
            type: "input_value",
            name: "VALUE",
            check: ["Color"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("new_list_viewer_child_widget_get_color_attributes", {
        type: "new_list_viewer_child_widget_get_color_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_GET_ATTRIBUTES}",
        args0: [
          Module_6.a({}, i), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, Module_6.a({}, a), Module_6.a({}, s)
        ],
        output: ["String", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: Module_172.g,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["new_list_viewer_on_press", "new_list_viewer_child_widget_on_press", "new_list_viewer_child_widget_set_color_attributes", "new_list_viewer_set_size", "new_list_viewer_child_widget_get_color_attributes", "new_list_viewer_get_size"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["new_list_viewer_on_press", "new_list_viewer_child_widget_on_press"]
}
var ah = {
  icon: Module_172.g,
  title: "ListViewerWidget.widgetName",
  type: Src_editor_widget_builtIn_types.A,
  previewAreaWidgetTitle: "ListViewerWidget.widgetName",
  component: oh,
  editConfig: eh,
  blockConfig: ih,
  isInvisibleWidget: false,
  widget: {
    isGlobalWidget: false,
    size: {
      width: Module_172.e,
      height: Module_172.b
    },
    widgetIds: [],
    attributes: {
      disabled: false,
      backgroundColor: Module_172.a,
      templateRenderType: Module_172.c,
      templateType: Module_172.d,
      dataSource: "",
      templateSlotMap: {}
    }
  }
}
export { ah }
