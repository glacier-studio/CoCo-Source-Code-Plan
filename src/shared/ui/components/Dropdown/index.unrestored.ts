/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-13
 */

"use strict"

import { Q } from "../Popover/index"
import * as /* [auto-meaningful-name] */Iconfont_index from /* 94 */"../Iconfont/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, createContext } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import /* 873 */"./styles.css"
var be = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$showDropdownIcon = e.showDropdownIcon
  var o = undefined === e$showDropdownIcon || e$showDropdownIcon
  var /* [auto-meaningful-name] */e$overlay = e.overlay
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var d = useState(false)
  var p = Module_10.a(d, 2)
  var f = p[0]
  var h = p[1]
  var m = useRef(null)
  function g(e) {
    var /* [auto-meaningful-name] */m$current
    var /* [auto-meaningful-name] */m$current1
    if (e) {
      if (!(null === (m$current = m.current) || undefined === m$current)) {
        m$current.showContent()
      }
    } else {
      if (!(null === (m$current1 = m.current) || undefined === m$current1)) {
        m$current1.hideContent()
      }
    }
  }
  return React.createElement("div", {
    className: Classnames("coco-dropdown", e$className),
    onClick: function () {
      var /* [auto-meaningful-name] */m$current
      if (e$onClick) {
        e$onClick(!!(null === (m$current = m.current) || undefined === m$current ? undefined : m$current.visible), g)
      }
    }
  }, React.createElement(Q, {
    ref: m,
    contentClassName: "coco-dropdown-overlay",
    content: React.createElement("div", {
      onClick: function () {
        var /* [auto-meaningful-name] */m$current
        if (!(null === (m$current = m.current) || undefined === m$current)) {
          m$current.hideContent()
        }
        h(false)
      }
    }, e$overlay),
    onOpen: function () {
      h(true)
    },
    onClose: function () {
      h(false)
    }
  }, React.createElement("div", {
    className: Classnames("coco-dropdown-selector", {
      "coco-dropdown-active": f
    }),
    onClick: function () {
      var /* [auto-meaningful-name] */m$current
      var /* [auto-meaningful-name] */m$current1
      if (null === (m$current = m.current) || undefined === m$current ? undefined : m$current.visible) {
        if (!(null === (m$current1 = m.current) || undefined === m$current1)) {
          m$current1.hideContent()
        }
      }
    }
  }, e$children, o && React.createElement(Iconfont_index.a, {
    type: "icon-dropdown-down",
    className: Classnames("coco-dropdown-down-icon")
  }))))
})
var ye = createContext(null)
var /* [auto-meaningful-name] */ye$Provider = ye.Provider
var Oe = ye
export { be }
export { ye$Provider }
export { Oe }
