/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：269__part-8
 */

"use strict"

import { w, E } from "./index__part-1"
import * as /* [auto-meaningful-name] */Module_154 from /* 154 */"../699/154/index"
import * as /* [auto-meaningful-name] */Module_1065 from /* 1065 */"../699/1065"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../54"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_98 from /* 98 */"../98"
import { forwardRef, createElement } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_2642 from /* 2642 */"../699/2642/index"
var je = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$component = e.component
  var f = undefined === e$component ? "div" : e$component
  var /* [auto-meaningful-name] */e$disablePointerEvents = e.disablePointerEvents
  var h = undefined !== e$disablePointerEvents && e$disablePointerEvents
  var /* [auto-meaningful-name] */e$disableTypography = e.disableTypography
  var _ = undefined !== e$disableTypography && e$disableTypography
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$variant = e.variant
  var v = Module_54.a(e, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"])
  var m = w() || {}
  var y = e$variant
  if (e$variant) {
    m.variant
  }
  if (m && !y) {
    y = m.variant
  }
  return createElement(E.Provider, {
    value: null
  }, createElement(f, Module_19.a({
    className: Module_98.a(e$classes.root, e$className, "end" === e$position ? e$classes.positionEnd : e$classes.positionStart, h && e$classes.disablePointerEvents, m.hiddenLabel && e$classes.hiddenLabel, "filled" === y && e$classes.filled, "dense" === m.margin && e$classes.marginDense),
    ref: t
  }, v), "string" !== typeof e$children || _ ? e$children : createElement(Module_1065.a, {
    color: "textSecondary"
  }, e$children)))
})
var Ue = Module_154.a({
  root: {
    display: "flex",
    height: "0.01em",
    maxHeight: "2em",
    alignItems: "center",
    whiteSpace: "nowrap"
  },
  filled: {
    "&$positionStart:not($hiddenLabel)": {
      marginTop: 16
    }
  },
  positionStart: {
    marginRight: 8
  },
  positionEnd: {
    marginLeft: 8
  },
  disablePointerEvents: {
    pointerEvents: "none"
  },
  hiddenLabel: {},
  marginDense: {}
}, {
  name: "MuiInputAdornment"
})(je)
export { Ue }
