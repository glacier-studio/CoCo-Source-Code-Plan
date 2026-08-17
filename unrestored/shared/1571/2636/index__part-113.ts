/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-113
 */

"use strict"

import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_541 from /* 541 */"./541/index"
import * as /* [auto-meaningful-name] */Module_1056 from /* 1056 */"./1056"
import /* [auto-meaningful-name] */Module_10561 from /* 1056 */"./1056"
var qE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "headline" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var a = e$getValue("headlineVisible")
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = useState(1)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useRef(null)
  var m = useSelector(function (e) {
    return e.common.widgetAttributeVisible
  })
  useEffect(function () {
    var /* [auto-meaningful-name] */p$current = p.current
    if (m && p$current) {
      p$current.setRows(Math.min(p$current.getRowCount(), 3))
    }
  }, [m])
  var g = Src_shared_tools_index.p(function (e) {
    e$onChange("headline", e)
  }, 100)
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_10561.headline, Module_10561.formItemWrapper, "changeHeadline")
  }, React.createElement("div", {
    className: Module_10561.formTitle
  }, React.createElement("p", null, useIntl$formatMessage({
    id: "headline"
  })), React.createElement(Module_541.a, {
    checked: a,
    onChange: function (e) {
      e$onChange("headlineVisible", e)
    }
  })), a && React.createElement(Src_shared_ui_components_index.A, {
    ref: p,
    maxLength: 200,
    defaultValue: i,
    rows: u,
    onFocus: function () {
      d(3)
    },
    onChange: function (e) {
      g(e.target.value)
    },
    onBlur: function (e, t) {
      d(Math.min(t, 3))
    }
  }))
})
var XE = [[Module_60.t, Module_60.l], [Module_60.o, Module_60.g]]
var QE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "size" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig$sizeRange = e.formConfig.sizeRange
  var a = undefined === e$formConfig$sizeRange ? XE : e$formConfig$sizeRange
  var s = e$getValue(n) || {
    width: 0,
    height: 0
  }
  var c = null === s || undefined === s ? undefined : s.width
  var l = null === s || undefined === s ? undefined : s.height
  var u = e$getValue("type")
  var d = e$getValue("id")
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var m = useRef({})
  var g = function (e, t, r) {
    var i = {}
    i[e] = parseInt(r)
    var /* [auto-meaningful-name] */m$current = m.current
    m.current = Module_6.a(Module_6.a({}, m$current), i);
    (function (e) {
      return Lodash.debounce(function () {
        var /* [auto-meaningful-name] */m$current1 = m.current
        if (m$current1) {
          e$onChange(n, m$current1)
          m.current = {}
        }
      }, e)
    })(t)()
    if (u === Src_editor_widget_builtIn_types.H && d && "height" === e) {
      e$onChange("sizeAdaptive", Src_editor_widget_builtIn_types.q.FIXED)
    }
  }
  return React.createElement(Src_shared_ui_components_index.i, {
    align: "vertical",
    className: "".concat(Module_88.formItemWrapper, " ").concat(Module_88.formInputNumberRow)
  }, React.createElement("p", {
    className: "coco-form-item-label"
  }, useIntl$formatMessage({
    id: "size"
  })), React.createElement("div", {
    className: Module_88.formInputNumberRow
  }, React.createElement(Src_shared_ui_components_index.i, {
    className: "changeWidth"
  }, React.createElement(Src_shared_ui_components_index.o, {
    label: useIntl$formatMessage({
      id: "width"
    }),
    defaultValue: c,
    type: "number",
    min: a[0][0],
    max: Math.min(a[0][1], Module_60.m),
    rules: [
      {
        rule: Module_53.w(9)
      }, {
        rule: Module_53.v
      }
    ],
    className: "".concat(Module_88.justifyInputContent, " coco-number-inputRow"),
    onChange: g.bind(undefined, "width", 50),
    onStep: g.bind(undefined, "width", 0)
  })), React.createElement(Src_shared_ui_components_index.i, {
    className: "changeHeight"
  }, React.createElement(Src_shared_ui_components_index.o, {
    label: useIntl$formatMessage({
      id: "height"
    }),
    defaultValue: l,
    type: "number",
    min: a[1][0],
    max: Math.min(a[1][1], Module_60.h),
    rules: [
      {
        rule: Module_53.w(9)
      }, {
        rule: Module_53.v
      }
    ],
    className: "".concat(Module_88.justifyInputContent, " coco-number-inputRow"),
    onChange: g.bind(undefined, "height", 50),
    onStep: g.bind(undefined, "height", 0)
  }))))
})
export { qE }
export { QE }
