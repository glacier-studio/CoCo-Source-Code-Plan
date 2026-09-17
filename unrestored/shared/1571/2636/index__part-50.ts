/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-50
 */

"use strict"

import { bf } from "./index__part-49"
import * as /* [auto-meaningful-name] */Module_262 from /* 262 */"./262"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"./61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../src/editor/block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"./4"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_547 from /* 547 */"./547/index"
var Ef = function (e) {
  return React.createElement(Module_547.a, Object.assign({}, e, {
    isEditState: true
  }))
}
var /* [auto-meaningful-name] */BKY_BLOCK_INTERNET_ICON = "%{BKY_BLOCK_INTERNET_ICON}"
var wf = {
  type: "field_coco_dropdown",
  name: "WIDGET_ID",
  custom: true,
  options: function () {
    return Module_46.c().getWidgetListByType(Src_editor_widget_builtIn_types.L)
  }
}
var Cf = {
  type: Src_editor_widget_builtIn_types.L,
  category: {
    iconId: Module_262.a,
    blocks: Src_editor_widget_builtIn_types.L
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"webview_on_start_load\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"webview_on_load\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"webview_on_load_error\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"webview_set_url\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.L,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"webview_refresh\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"webview_set_visible\" uncache=\"true\">\n    ".concat(t, "\n    </block>"), "<block type=\"webview_set_disabled\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_61.d, "<block type=\"webview_get_url\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Module_33.sb({
        property: "__opacity",
        widgetType: Src_editor_widget_builtIn_types.L,
        widgetId: e
      }), Module_33.sb({
        property: "__size",
        widgetType: Src_editor_widget_builtIn_types.L,
        widgetId: e
      }), Module_33.sb({
        property: "__position",
        widgetType: Src_editor_widget_builtIn_types.L,
        widgetId: e
      }), Module_61.d, Module_33.sb({
        property: "__visible",
        widgetType: Src_editor_widget_builtIn_types.L,
        widgetId: e
      }), Module_33.sb({
        property: "__disabled",
        widgetType: Src_editor_widget_builtIn_types.L,
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
      e.insertBlockSnippetGenerator("webview_on_start_load", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        return i ? Module_4.n("onWebViewWidgetStartLoad", [Module_4.o(tNR$widgetId)], i) : ""
      })
      e.insertBlockSnippetGenerator("webview_on_load", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        return i ? Module_4.n("onWebViewWidgetLoaded", [Module_4.o(tNR$widgetId)], i) : ""
      })
      e.insertBlockSnippetGenerator("webview_on_load_error", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        return i ? Module_4.n("onWebViewWidgetLoadError", [Module_4.o(tNR$widgetId)], i) : ""
      })
      e.insertBlockSnippetGenerator("webview_set_url", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        var c = Module_4.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))
        var l = Module_4.o(o$block.id)
        return Module_4.l(Module_4.n("setWebViewWidgetUrl", [Module_4.o(o$widgetId), s, c, l]), o$block, e)
      })
      e.insertBlockSnippetGenerator("webview_refresh", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.n("refreshWebViewWidget", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("webview_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "show" === e.getFieldValue(o$block, "VISIBLE")
        return Module_4.n("setWebViewWidgetVisible", [Module_4.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("webview_set_disabled", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "disabled" === e.getFieldValue(o$block, "DISPLAY")
        return Module_4.n("setWebViewWidgetDisabled", [Module_4.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("webview_get_url", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return Module_4.s("getWebViewWidgetUrl", [Module_4.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("webview_get_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "PROPERTY")) {
          case "positionX":
            s = "getWebViewWidgetPositionX"
            break
          case "positionY":
            s = "getWebViewWidgetPositionY"
            break
          case "width":
            s = "getWebViewWidgetWidth"
            break
          case "height":
            s = "getWebViewWidgetHeight"
        }
        return Module_4.s(s, [Module_4.o(o$widgetId)])
      })
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("webview_on_start_load", {
        type: "webview_on_start_load",
        message0: "%{BKY_WEBVIEW_ON_START_LOAD}",
        args0: [
          Module_4.e(BKY_BLOCK_INTERNET_ICON, true), Module_6.a({}, wf), {
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
      e.insertBlockProfile("webview_on_load", {
        type: "webview_on_load",
        message0: "%{BKY_WEBVIEW_ON_LOADED}",
        args0: [
          Module_4.e(BKY_BLOCK_INTERNET_ICON, true), Module_6.a({}, wf), {
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
      e.insertBlockProfile("webview_on_load_error", {
        type: "webview_on_load_error",
        message0: "%{BKY_WEBVIEW_ON_LOAD_ERROR}",
        args0: [
          Module_4.e(BKY_BLOCK_INTERNET_ICON, true), Module_6.a({}, wf), {
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
      e.insertBlockProfile("webview_set_url", {
        type: "webview_set_url",
        message0: "%{BKY_WEBVIEW_SET_URL}",
        args0: [
          Module_6.a({}, wf), {
            type: "input_value",
            name: "VALUE",
            align: "CENTRE",
            check: ["String"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("webview_refresh", {
        type: "webview_refresh",
        message0: "%{BKY_WEBVIEW_REFRESH}",
        args0: [Module_6.a({}, wf)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("webview_get_url", {
        type: "webview_get_url",
        message0: "%{BKY_WEBVIEW_GET_URL}",
        args0: [Module_6.a({}, wf)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("webview_set_visible", {
        type: "webview_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: function () {
              return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
            }
          }, Module_6.a({}, wf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("webview_set_disabled", {
        type: "webview_set_disabled",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: function () {
              return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
            }
          }, Module_6.a({}, wf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("webview_get_property", {
        type: "webview_get_property",
        message0: "%{BKY_WEBVIEW_GET_PROPERTY}",
        args0: [
          Module_6.a({}, wf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"], [t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]]
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
    iconId: Module_262.a,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["webview_on_start_load", "webview_on_load", "webview_on_load_error", "webview_refresh", "webview_set_visible", "webview_set_disabled", "webview_set_url", "webview_get_url", "webview_get_property"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["webview_on_start_load", "webview_on_load", "webview_on_load_error"]
}
var Tf = {
  icon: Module_262.a,
  title: "Webview.widgetName",
  type: Src_editor_widget_builtIn_types.L,
  previewAreaWidgetTitle: "Webview.widgetName",
  component: Ef,
  editConfig: bf,
  blockConfig: Cf,
  isInvisibleWidget: Module_262.e,
  widget: {
    isGlobalWidget: Module_262.d,
    size: {
      width: 360,
      height: 200
    },
    attributes: {
      url: "",
      disabled: false,
      refreshTimestamp: 0
    }
  }
}
export { Tf }
