/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_ui_components_Iconfont_index from /* 94 */"../../../../../src/shared/ui/components/Iconfont/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useCallback } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_294 from /* 294 */"../../../../../src/shared/ui/components/Input/index"
import * as /* [auto-meaningful-name] */Module_295 from /* 295 */"../295"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import /* 640 */"./640"
var g = memo(function (e) {
  var /* [auto-meaningful-name] */e$onStep = e.onStep
  var /* [auto-meaningful-name] */e$max = e.max
  var /* [auto-meaningful-name] */e$min = e.min
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var c = Module_295.a(e, ["onStep", "max", "min", "defaultValue", "disabled"])
  var l = Number(e$max) <= Number(e$defaultValue)
  var u = Number(e$min) >= Number(e$defaultValue)
  var d = Number(e$defaultValue)
  var p = useCallback(function (e) {
    if (!l && Lodash.isFunction(e$onStep)) {
      e$onStep("".concat(d + 1), e, "up")
    }
  }, [l, e$onStep, d])
  var g = useCallback(function (e) {
    if (!u && Lodash.isFunction(e$onStep)) {
      e$onStep("".concat(d - 1), e, "down")
    }
  }, [u, e$onStep, d])
  return React.createElement(Module_294.a, Object.assign({}, c, {
    defaultValue: e$defaultValue,
    min: e$min,
    max: e$max,
    disabled: e$disabled,
    after: React.createElement("div", {
      className: "coco-number-input"
    }, React.createElement("span", {
      className: l || e$disabled ? "disable" : "",
      onClick: p
    }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
      type: "icon-up"
    })), React.createElement("span", {
      className: u || e$disabled ? "disable" : "",
      onClick: g
    }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
      type: "icon-down"
    })))
  }))
})
export { g }
