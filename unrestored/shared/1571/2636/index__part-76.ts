/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-76
 */

"use strict"

import { Yh } from "./index__part-68"
import { tg } from "./index__part-75"
var Jm
var Zm
var Qm
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"./64/index"
var rg = Module_64.a("COLUMN")
var og = Module_64.a("COLUMN")
Qm = {}
Module_11.a(Qm, rg, {
  field: "第1列"
})
Module_11.a(Qm, og, {
  field: "第2列"
})
var ig = Qm
var ag = [
  (Zm = {
    rowId: Module_64.a("ROW")
  }, Module_11.a(Zm, rg, ""), Module_11.a(Zm, og, ""), Zm), (Jm = {
    rowId: Module_64.a("ROW")
  }, Module_11.a(Jm, rg, ""), Module_11.a(Jm, og, ""), Jm)
]
var sg = {
  type: Src_editor_widget_builtIn_types.m,
  category: {
    iconId: "icon-widget-local-storage",
    blocks: Src_editor_widget_builtIn_types.m
  },
  getTemplate: function (e) {
    return []
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {},
    setBlockGroupProfile: function (e, t) {}
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-local-storage",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: [],
    fieldName: ""
  },
  topBlocks: []
}
var cg = {
  icon: "icon-widget-local-storage",
  title: "GridWidget.widgetName",
  type: Src_editor_widget_builtIn_types.m,
  previewAreaWidgetTitle: "GridWidget.widgetName",
  component: Yh,
  editConfig: tg,
  blockConfig: sg,
  isInvisibleWidget: true,
  widget: {
    size: {
      width: 0,
      height: 0
    },
    isGlobalWidget: true,
    attributes: {
      db: {
        header: ig,
        data: ag
      }
    }
  }
}
var lg = [
  {
    type: "WidgetTitle"
  }, {
    type: "TableData"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/table-data"
  }
]
export { cg }
export { lg }
