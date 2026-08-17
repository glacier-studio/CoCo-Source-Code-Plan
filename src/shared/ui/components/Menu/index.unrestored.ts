/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-14
 */

"use strict"

import { Ee, Oe } from "../Dropdown/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useContext } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* 874 */"./styles.css"
var we = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  return React.createElement(Ee, {
    value: {
      onClick: function (e) {
        if (e$onClick) {
          e$onClick(e)
        }
      }
    }
  }, React.createElement("div", {
    className: "coco-menu"
  }, e$children))
})
var Ce = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var r = useContext(Oe)
  return React.createElement("div", {
    className: "coco-menu-item",
    onClick: function () {
      if (undefined !== e$value && r) {
        r.onClick(e$value)
      }
    }
  }, e$children)
})
export { we }
export { Ce }
