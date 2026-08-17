/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：680__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"./133/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
var c = {
  type: Src_editor_widget_builtIn_types.v,
  icon: Module_133.a,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    {
      key: "fileId",
      label: "fileId",
      valueType: "image",
      defaultValue: "",
      blockOptions: {
        setter: {
          func: "setImageWidgetImageId"
        },
        getter: {
          func: "getImageWidgetImageId"
        }
      }
    }, {
      key: "backgroundColor",
      label: "backgroundColor",
      valueType: "color",
      defaultValue: Module_133.g
    }, Module_6.a({}, Module_33.i), {
      key: "__width",
      label: "width",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "__height",
      label: "height",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "__size",
      label: "",
      valueType: "number",
      defaultValue: 100,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ["__height", "__width"]
        },
        getter: {
          keys: ["__height", "__width"]
        }
      }
    }
  ],
  methods: [
    {
      key: "__setVisible",
      label: "__setVisible",
      params: [],
      blockOptions: {
        callMethodLabel: false,
        generateBlock: false
      }
    }
  ],
  events: [
    {
      key: "onImagePress",
      label: "onImagePress",
      params: [],
      blockOptions: {
        icon: "%{BKY_BLOCK_TAB_ICON}"
      }
    }
  ]
}
export { c }
