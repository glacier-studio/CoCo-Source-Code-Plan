/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-136
 */

"use strict"

import { hb, mb } from "./index__part-94"
import { Lw } from "./index__part-130"
import * as /* [auto-meaningful-name] */Module_286 from /* 286 */"./286"
import * as /* [auto-meaningful-name] */Module_277 from /* 277 */"./277"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_383 from /* 383 */"./383"
import /* [auto-meaningful-name] */Module_3831 from /* 383 */"./383"
var tC = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = e$getValue("drawProcess") || false
  var i = e$getValue("drawSpeed")
  var a = undefined === i ? Module_277.b : i
  function s(e) {
    e$onChange("drawSpeed", Number(e))
  }
  return React.createElement("div", {
    className: Classnames(Module_3831.formItemWrapper, Module_3831.brushWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: Module_3831.processWrapper
  }, React.createElement("div", null, React.createElement("span", null, useIntl$formatMessage({
    id: "drawProcess"
  })), React.createElement(Module_1213.a, {
    overlayClassName: Module_3831.helpPopover,
    placement: "rightTop",
    title: "绘图过程是什么？",
    content: React.createElement("div", null, "这是对绘画过程的解释内容，待定。这是对绘画过程的解释内容， 待定。这是对绘画过程的解释内容，待定。")
  }, React.createElement("span", null, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-help-circle",
    className: Module_3831.helpIcon
  })))), React.createElement(Lw, {
    defaultChecked: o,
    onChange: function (e) {
      e$onChange("drawProcess", e)
    }
  })), o && React.createElement("div", {
    className: Module_3831.speedWrapper
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "drawSpeed"
  })), React.createElement(Src_shared_ui_components_index.o, {
    className: Module_3831.speedInput,
    label: useIntl$formatMessage({
      id: "drawSpeedUnit"
    }),
    type: "number",
    defaultValue: a,
    max: Module_277.d,
    min: Module_277.f,
    onBlur: s,
    onStep: s
  })))
})
var nC = [
  {
    value: Module_286.a.ARROW,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Module_3831.cursorArrow,
        style: {
          color: e
        }
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-brush-arrow"
      }))
    }
  }, {
    value: Module_286.a.CIRCLE,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Module_3831.cursorCircle,
        style: {
          backgroundColor: e,
          outlineColor: e
        }
      })
    }
  }, {
    value: Module_286.a.NONE,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Module_3831.cursorNone
      }, "空")
    }
  }
]
var rC = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "color" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = e$getValue(n)
  var s = e$getValue("cursorShape") || Module_286.a.NONE
  return React.createElement("div", {
    className: Classnames(Module_3831.formItemWrapper, Module_3831.colorWrapper, "coco-form-item", "coco-form-item-horizontal")
  }, React.createElement("div", {
    className: Module_3831.brushPenColor
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "brushPenColor"
  })), React.createElement(mb, {
    width: 43,
    keyName: n,
    onChange: e$onChange,
    color: a
  })), React.createElement("div", {
    className: Module_3831.brushPenCursor
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "brushCursorShape"
  })), React.createElement(hb, {
    value: s,
    modeList: nC,
    onChange: function (e) {
      if (e !== s && e$onChange) {
        e$onChange("cursorShape", e)
      }
    },
    params: [a]
  }, nC.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.p, {
      key: e.value,
      value: e.value,
      className: Module_3831.cursorOption
    }, e.renderContent(a))
  }))))
})
export { tC }
export { rC }
