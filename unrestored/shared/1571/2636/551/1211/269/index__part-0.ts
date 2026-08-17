/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：269__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../../../35"
import { forwardRef, createElement } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import /* 50 */"../../../50/index"
import * as /* [auto-meaningful-name] */Module_278 from /* 278 */"../../278"
import * as /* [auto-meaningful-name] */Module_98 from /* 98 */"../98"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../54"
import * as /* [auto-meaningful-name] */Module_1065 from /* 1065 */"../699/1065"
import * as /* [auto-meaningful-name] */Module_709 from /* 709 */"../709/index"
import * as /* [auto-meaningful-name] */Module_396 from /* 396 */"./396"
import * as /* [auto-meaningful-name] */Module_1550 from /* 1550 */"../../../552/1214/366/1550"
import * as /* [auto-meaningful-name] */Module_154 from /* 154 */"../699/154/index"
import * as /* [auto-meaningful-name] */Module_2678 from /* 2678 */"../../../552/1214/316/2678"
var A = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$component = e.component
  var a = undefined === e$component ? "div" : e$component
  var /* [auto-meaningful-name] */e$disableGutters = e.disableGutters
  var f = undefined !== e$disableGutters && e$disableGutters
  var /* [auto-meaningful-name] */e$variant = e.variant
  var h = undefined === e$variant ? "regular" : e$variant
  var p = Module_54.a(e, ["classes", "className", "component", "disableGutters", "variant"])
  return createElement(a, Module_19.a({
    className: Module_98.a(e$classes.root, e$classes[h], e$className, !f && e$classes.gutters),
    ref: t
  }, p))
})
var g = Module_154.a(function (e) {
  return {
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    gutters: Module_35.a({
      paddingLeft: e.spacing(2),
      paddingRight: e.spacing(2)
    }, e.breakpoints.up("sm"), {
      paddingLeft: e.spacing(3),
      paddingRight: e.spacing(3)
    }),
    regular: e.mixins.toolbar,
    dense: {
      minHeight: 48
    }
  }
}, {
  name: "MuiToolbar"
})(A)
export { g }
