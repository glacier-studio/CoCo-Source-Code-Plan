/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-130
 */

"use strict"

import { Nw } from "./index__part-129"
import * as /* [auto-meaningful-name] */Module_517 from /* 517 */"./517"
import * as /* [auto-meaningful-name] */Module_610 from /* 610 */"./610"
import * as /* [auto-meaningful-name] */Module_801 from /* 801 */"./801/index"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"./35"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { forwardRef, useContext, createElement, memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1048 from /* 1048 */"./1048/index"
import * as /* [auto-meaningful-name] */Module_364 from /* 364 */"./364/index"
var xw = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var Dw = forwardRef(function (e, t) {
  var n
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$loading = e.loading
  var /* [auto-meaningful-name] */e$className = e.className
  var s = undefined === e$className ? "" : e$className
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var l = xw(e, ["prefixCls", "size", "loading", "className", "disabled"])
  Module_364.a("checked" in l || !("value" in l), "Switch", "`value` is not a valid prop, do you mean `checked`?")
  var u = useContext(Module_801.b)
  var /* [auto-meaningful-name] */u$getPrefixCls = u.getPrefixCls
  var /* [auto-meaningful-name] */u$direction = u.direction
  var h = useContext(Module_517.b)
  var m = u$getPrefixCls("switch", e$prefixCls)
  var g = createElement("div", {
    className: "".concat(m, "-handle")
  }, e$loading && createElement(Module_610.a, {
    className: "".concat(m, "-loading-icon")
  }))
  var _ = Classnames((n = {}, Module_35.a(n, "".concat(m, "-small"), "small" === (e$size || h)), Module_35.a(n, "".concat(m, "-loading"), e$loading), Module_35.a(n, "".concat(m, "-rtl"), "rtl" === u$direction), n), s)
  return createElement(Module_1048.a, {
    insertExtraNode: true
  }, createElement(Nw, Module_19.a({}, l, {
    prefixCls: m,
    className: _,
    disabled: e$disabled || e$loading,
    ref: t,
    loadingIcon: g
  })))
})
Dw.__ANT_SWITCH = true
Dw.displayName = "Switch"
var Lw = Dw
var Pw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "switch" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var s = undefined === e$formConfig$label ? "switch" : e$formConfig$label
  var /* [auto-meaningful-name] */e$formConfig$checkedLabel = e$formConfig.checkedLabel
  var /* [auto-meaningful-name] */e$formConfig$unCheckedLabel = e$formConfig.unCheckedLabel
  var /* [auto-meaningful-name] */e$formConfig$convert = e$formConfig.convert
  var /* [auto-meaningful-name] */e$formConfig$reverse = e$formConfig.reverse
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var f = useIntl$formatMessage({
    id: s
  })
  var m = e$formConfig$checkedLabel ? useIntl$formatMessage({
    id: e$formConfig$checkedLabel
  }) : ""
  var g = e$formConfig$unCheckedLabel ? useIntl$formatMessage({
    id: e$formConfig$unCheckedLabel
  }) : ""
  var _ = e$getValue(n)
  if (e$formConfig$convert) {
    _ = e$formConfig$convert(_)
  }
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper),
    label: f
  }, React.createElement(Lw, {
    checkedChildren: m,
    unCheckedChildren: g,
    defaultChecked: _,
    onClick: function (e) {
      var t = e
      if (e$formConfig$reverse) {
        t = e$formConfig$reverse(e)
      }
      if (e$onChange) {
        e$onChange(n, t)
      }
    }
  }))
})
export { Lw }
export { Pw }
