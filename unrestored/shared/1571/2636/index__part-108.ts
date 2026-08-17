/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-108
 */

"use strict"

import { rb } from "./index__part-92"
import { lb } from "./index__part-93"
import { mb } from "./index__part-94"
import { _y } from "./index__part-103"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"./76"
import * as /* [auto-meaningful-name] */Module_95 from /* 95 */"./95"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_202 from /* 202 */"./202"
import /* [auto-meaningful-name] */Module_2021 from /* 202 */"./202"
var yE = [
  {
    value: Module_76.c.OUTLINED_NORMAL,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Classnames(Module_2021.outlineNormal, Module_2021.modeItem),
        style: {
          borderColor: e
        }
      })
    }
  }, {
    value: Module_76.c.CONTAINED_NORMAL,
    renderContent: function (e, t) {
      return React.createElement("div", {
        className: Classnames(Module_2021.containedNormal, Module_2021.modeItem),
        style: {
          backgroundColor: t ? e : Src_shared_tools_index.hb(e, .1)
        }
      })
    }
  }, {
    value: Module_76.c.CONTAINED_ROUND,
    renderContent: function (e, t) {
      return React.createElement("div", {
        className: Classnames(Module_2021.containedRound, Module_2021.modeItem),
        style: {
          background: t ? e : Src_shared_tools_index.hb(e, .1)
        }
      })
    }
  }, {
    value: Module_76.c.OUTLINED_FLAT,
    renderContent: function (e, t) {
      return React.createElement("div", {
        className: Classnames(Module_2021.outlineFlat, Module_2021.modeItem),
        style: {
          borderColor: e
        }
      })
    }
  }
]
var EE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "mode" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = e$getValue(n)
  var s = e$getValue("color")
  var c = Src_shared_tools_index.Z(s)
  var l = c ? "coco-option-white" : ""
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_2021.formItemWrapper, Module_2021.typeSelector, Module_2021.inputModeSelector, {
      "coco-input-option-white": c
    }, "changeInputMode"),
    label: useIntl$formatMessage({
      id: "style"
    })
  }, React.createElement(lb, {
    value: a,
    params: [s, c],
    modeList: yE,
    onChange: function (e) {
      e$onChange(n, e)
    }
  }, yE.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.p, {
      key: e.value,
      value: e.value,
      className: l
    }, e.renderContent(s, c))
  })))
})
var OE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = e$getValue(n)
  var a = e$getValue("size")
  var s = Object.values(Src_editor_widget_builtIn_types.s)
  var c = Module_33.ob(i)
  var /* [auto-meaningful-name] */c$height = c.height
  var /* [auto-meaningful-name] */c$minWidth = c.minWidth
  var /* [auto-meaningful-name] */c$maxWidth = c.maxWidth
  return React.createElement(rb, {
    sizeType: i,
    sizeTypeList: s,
    width: null === a || undefined === a ? undefined : a.width,
    height: c$height,
    minWidth: c$minWidth,
    maxWidth: c$maxWidth,
    onWidthChange: function (e) {
      !function (e) {
        e$onChange("size", {
          width: e
        })
      }(Math.max(c$minWidth, Math.min(c$maxWidth, Number(e))))
    },
    onSizeTypeChange: function (e) {
      e$onChange(n, e)
      var t = Module_33.ob(i)
      e$onChange("size", {
        height: t.height,
        width: Math.max(a.width, t.minWidth)
      })
    }
  })
})
var wE = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement("div", {
    className: Classnames(Module_2021.formItemWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: Module_2021.tipsWrapper
  }, React.createElement("div", {
    className: Module_2021.labelWrapper
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "ListViewerWidget.tips"
  }))), React.createElement("div", {
    className: Module_2021.content
  }, React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement(_y, Object.assign({}, e, {
    formConfig: Module_6.a(Module_6.a({}, e.formConfig), {}, {
      emitOnChange: true
    }),
    keyName: "placeholder"
  }))), React.createElement(mb, {
    width: 43,
    keyName: "placeholderColor",
    onChange: e$onChange,
    color: e$getValue("placeholderColor") || Module_95.n
  }))), React.createElement("div", {
    className: Module_2021.valueWrapper
  }, React.createElement("div", {
    className: Module_2021.labelWrapper
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "ListViewerWidget.input"
  }))), React.createElement("div", {
    className: Module_2021.content
  }, React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement(_y, Object.assign({}, e, {
    keyName: "value",
    formConfig: Module_6.a(Module_6.a({}, e.formConfig), {}, {
      emitOnChange: true
    })
  }))), React.createElement(mb, {
    width: 43,
    keyName: "valueColor",
    onChange: e$onChange,
    color: e$getValue("valueColor") || Module_95.o
  }))))
})
export { EE }
export { OE }
export { wE }
