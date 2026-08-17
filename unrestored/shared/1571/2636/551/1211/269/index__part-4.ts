/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：269__part-4
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_154 from /* 154 */"../699/154/index"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../54"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_98 from /* 98 */"../98"
import { createContext, forwardRef, useMemo, createElement } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_2674 from /* 2674 */"./2674"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../../../40/index"
import * as /* [auto-meaningful-name] */Module_107 from /* 107 */"../../../107"
import /* 241 */"../../../241/index"
import * as /* [auto-meaningful-name] */Module_391 from /* 391 */"./391"
import * as /* [auto-meaningful-name] */Module_2684 from /* 2684 */"../../../552/1214/316/2684/index"
import * as /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
var se = createContext({})
var ce = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$component = e.component
  var l = undefined === e$component ? "ul" : e$component
  var /* [auto-meaningful-name] */e$dense = e.dense
  var d = undefined !== e$dense && e$dense
  var /* [auto-meaningful-name] */e$disablePadding = e.disablePadding
  var p = undefined !== e$disablePadding && e$disablePadding
  var /* [auto-meaningful-name] */e$subheader = e.subheader
  var A = Module_54.a(e, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"])
  var g = useMemo(function () {
    return {
      dense: d
    }
  }, [d])
  return createElement(se.Provider, {
    value: g
  }, createElement(l, Module_19.a({
    className: Module_98.a(e$classes.root, e$className, d && e$classes.dense, !p && e$classes.padding, e$subheader && e$classes.subheader),
    ref: t
  }, A), e$subheader, e$children))
})
var ue = Module_154.a({
  root: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative"
  },
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },
  dense: {},
  subheader: {
    paddingTop: 0
  }
}, {
  name: "MuiList"
})(ce)
export { ue }
