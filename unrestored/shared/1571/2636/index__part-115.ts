/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-115
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_703 from /* 703 */"./703"
import /* [auto-meaningful-name] */Module_7031 from /* 703 */"./703"
var uO = Src_shared_tools_index.p(function () {
  var e = document.querySelector(".".concat(Module_7031.optionsFormItem, " ul li:last-child input"))
  if (e && e instanceof HTMLInputElement) {
    e.focus()
  }
}, 60)
var dO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "options" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var s = useRef({})
  var c = useSelector(function (e) {
    return e.common.widgetAttributeVisible
  })
  useEffect(function () {
    var /* [auto-meaningful-name] */s$current = s.current
    if (s$current && c) {
      Object.entries(s$current).forEach(function (e) {
        var t = Module_10.a(e, 2)[1]
        t.setRows(Math.min(t.getRowCount(), 3))
      })
    }
  }, [c])
  var l = Src_shared_tools_index.p(function (e) {
    e$onChange("options", Module_25.a(e))
  }, 100)
  function u(e, t) {
    i[e].content = t.target.value
    l(Module_25.a(i))
  }
  function d(e, t) {
    e.target.rows = Math.min(t, 3)
  }
  function p(e, t) {
    t.target.rows = 3
  }
  return React.createElement(Src_shared_ui_components_index.i, {
    align: "vertical",
    className: Classnames("changeOptions", Module_7031.optionsFormItem, Module_7031.formItemWrapper)
  }, React.createElement("div", {
    className: Module_7031.formTitle
  }, React.createElement("p", null, useIntl$formatMessage({
    id: "radioOptionsContent"
  })), React.createElement("div", {
    className: Module_7031.count
  }, React.createElement("span", {
    onClick: function () {
      if (i.length > 1) {
        e$onChange("options", i.slice(0, -1))
      }
    },
    className: Classnames(Module_11.a({}, Module_7031.disabled, 1 === i.length))
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-minus"
  })), React.createElement("p", null, i.length, useIntl$formatMessage({
    id: "option"
  })), React.createElement("span", {
    onClick: function () {
      if (i.length < 8) {
        e$onChange("options", i.concat({
          content: "",
          state: "none"
        }))
        uO()
      }
    },
    className: Classnames(Module_11.a({}, Module_7031.disabled, 8 === i.length))
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  })))), React.createElement("ul", null, i.map(function (e, t) {
    return React.createElement("li", {
      key: t
    }, React.createElement("span", null, t + 1, "."), React.createElement(Src_shared_ui_components_index.A, {
      ref: function (e) {
        return e && (s.current[t] = e)
      },
      defaultValue: e.content,
      maxLength: 200,
      onFocus: p.bind(null, t),
      onChange: u.bind(null, t),
      onBlur: d
    }))
  })))
})
export { dO }
