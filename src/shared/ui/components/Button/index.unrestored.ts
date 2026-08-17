/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-7
 */

"use strict"

import * as /* [auto-meaningful-name] */Iconfont_index from /* 94 */"../Iconfont/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useImperativeHandle } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Dialog_index from /* 540 */"../Dialog/index"
import /* 869 */"./styles.css"
var J = memo(React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$style = e.style
  var u = undefined === e$style ? {} : e$style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$danger = e.danger
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$shape = e.shape
  var m = undefined === e$shape ? "circle" : e$shape
  var g = useRef(null)
  useImperativeHandle(t, function () {
    return {
      button: g.current
    }
  })
  return React.createElement("button", {
    ref: g,
    className: Classnames("coco-button", function () {
      var /* [auto-meaningful-name] */cocoButton = "coco-button-"
      return (e$type ? cocoButton + e$type : "") + " " + (e$danger ? cocoButton + "dangerous" : "") + " " + (m ? cocoButton + m : "")
    }(), e$className),
    disabled: e$disabled,
    style: u,
    onClick: e$onClick
  }, e$icon && React.createElement(Iconfont_index.a, {
    type: e$icon
  }), e$children)
}))
export { J }
