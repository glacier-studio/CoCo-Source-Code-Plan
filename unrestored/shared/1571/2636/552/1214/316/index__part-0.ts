/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：316__part-0
 */

"use strict"

import { forwardRef, createElement } from /* 0 */"react"
import /* 50 */"../../../50/index"
import * as /* [auto-meaningful-name] */Module_98 from /* 98 */"../../../551/1211/98"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../54"
import * as /* [auto-meaningful-name] */Module_709 from /* 709 */"../../../551/1211/709/index"
import * as /* [auto-meaningful-name] */Module_1550 from /* 1550 */"../366/1550"
import * as /* [auto-meaningful-name] */Module_154 from /* 154 */"../../../551/1211/699/154/index"
import * as /* [auto-meaningful-name] */Module_2678 from /* 2678 */"./2678"
var f = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$disableSpacing = e.disableSpacing
  var s = undefined !== e$disableSpacing && e$disableSpacing
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var l = Module_54.a(e, ["disableSpacing", "classes", "className"])
  return createElement("div", Module_19.a({
    className: Module_98.a(e$classes.root, e$className, !s && e$classes.spacing),
    ref: t
  }, l))
})
var d = Module_154.a({
  root: {
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto"
  },
  spacing: {
    "& > :not(:first-child)": {
      marginLeft: 8
    }
  }
}, {
  name: "MuiDialogActions"
})(f)
var h = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$dividers = e.dividers
  var u = undefined !== e$dividers && e$dividers
  var l = Module_54.a(e, ["classes", "className", "dividers"])
  return createElement("div", Module_19.a({
    className: Module_98.a(e$classes.root, e$className, u && e$classes.dividers),
    ref: t
  }, l))
})
var p = Module_154.a(function (e) {
  return {
    root: {
      flex: "1 1 auto",
      WebkitOverflowScrolling: "touch",
      overflowY: "auto",
      padding: "8px 24px",
      "&:first-child": {
        paddingTop: 20
      }
    },
    dividers: {
      padding: "16px 24px",
      borderTop: "1px solid ".concat(e.palette.divider),
      borderBottom: "1px solid ".concat(e.palette.divider)
    }
  }
}, {
  name: "MuiDialogContent"
})(h)
export { d }
export { p }
