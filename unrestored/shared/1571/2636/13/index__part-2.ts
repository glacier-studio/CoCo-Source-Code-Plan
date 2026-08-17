/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_294 from /* 294 */"../../../../../src/shared/ui/components/Input/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState, useEffect, useCallback } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import * as /* [auto-meaningful-name] */Module_539 from /* 539 */"../539"
import /* 1101 */"./1101"
import * as /* [auto-meaningful-name] */Module_780 from /* 780 */"./780/index"
import /* [auto-meaningful-name] */Module_7801 from /* 780 */"./780/index"
import /* 842 */"./842"
var y = memo(function (e) {
  var /* [auto-meaningful-name] */e$step = e.step
  var n = undefined === e$step ? 1 : e$step
  var /* [auto-meaningful-name] */e$max = e.max
  var c = undefined === e$max ? 100 : e$max
  var /* [auto-meaningful-name] */e$min = e.min
  var u = undefined === e$min ? 1 : e$min
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$isShowLeftInput = e.isShowLeftInput
  var /* [auto-meaningful-name] */e$isShowRightInput = e.isShowRightInput
  var /* [auto-meaningful-name] */e$inputAfter = e.inputAfter
  var v = useRef(null)
  var y = useState(e$value || u)
  var E = Module_10.a(y, 2)
  var O = E[0]
  var w = E[1]
  useEffect(function () {
    if (undefined !== e$value) {
      T(e$value.toString())
      w(e$value)
    }
  }, [e$value])
  var C = useCallback(function (e) {
    T(e.toString())
    w(e)
    if (e$onChange) {
      e$onChange(e)
    }
  }, [e$onChange])
  var T = function (e) {
    var /* [auto-meaningful-name] */v$current
    var n = null === (v$current = v.current) || undefined === v$current ? undefined : v$current.input
    if (n) {
      n.value = e.toString()
    }
  }
  var S = function (e) {
    w(Number(e))
    if (e$onChange) {
      e$onChange(Number(e))
    }
  }
  return React.createElement("div", {
    className: Classnames("coco-slider", e$className)
  }, e$isShowLeftInput && React.createElement(Module_294.a, {
    defaultValue: O,
    className: Classnames("coco-slider-input", "coco-slider-left-input"),
    type: "number",
    max: c,
    min: u,
    onChange: S,
    ref: v,
    after: e$inputAfter
  }), React.createElement(Module_7801, {
    value: O,
    step: n,
    min: u,
    max: c,
    onChange: C
  }), e$isShowRightInput && React.createElement(Module_294.a, {
    defaultValue: O,
    className: Classnames("coco-slider-input", "coco-slider-right-input"),
    type: "number",
    max: c,
    min: u,
    onChange: S,
    ref: v,
    after: e$inputAfter
  }))
})
export { y }
