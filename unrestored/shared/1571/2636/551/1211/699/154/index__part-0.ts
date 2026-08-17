/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：154__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../../19"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../../54"
import /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import /* 50 */"../../../../50/index"
import * as /* [auto-meaningful-name] */Module_695 from /* 695 */"./695"
import /* [auto-meaningful-name] */Module_6951 from /* 695 */"./695"
import * as /* [auto-meaningful-name] */Module_2643 from /* 2643 */"../../709/2643"
import * as /* [auto-meaningful-name] */Module_2677 from /* 2677 */"./2677"
import * as /* [auto-meaningful-name] */Module_2645 from /* 2645 */"../../../../552/1214/690/2645"
var d = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  return function (n) {
    var /* [auto-meaningful-name] */t$defaultTheme = t.defaultTheme
    var /* [auto-meaningful-name] */t$withTheme = t.withTheme
    var d = undefined !== t$withTheme && t$withTheme
    var /* [auto-meaningful-name] */t$name = t.name
    var p = Module_54.a(t, ["defaultTheme", "withTheme", "name"])
    var _ = t$name
    var A = Module_2643.a(e, Module_19.a({
      defaultTheme: t$defaultTheme,
      Component: n,
      name: t$name || n.displayName,
      classNamePrefix: _
    }, p))
    var g = React1.forwardRef(function (e, t) {
      e.classes
      var s
      var /* [auto-meaningful-name] */e$innerRef = e.innerRef
      var u = Module_54.a(e, ["classes", "innerRef"])
      var p = A(Module_19.a({}, n.defaultProps, e))
      var _ = u
      if ("string" === typeof t$name || d) {
        s = Module_2645.a() || t$defaultTheme
        if (t$name) {
          _ = Module_2677.a({
            theme: s,
            name: t$name,
            props: u
          })
        }
        if (d && !_.theme) {
          _.theme = s
        }
      }
      return React1.createElement(n, Module_19.a({
        ref: e$innerRef || t,
        classes: p
      }, _))
    })
    Module_6951(g, n)
    return g
  }
}
export { d }
