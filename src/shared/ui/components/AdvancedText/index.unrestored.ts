/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-19
 */

"use strict"

var ve
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* 541 */"../../../../../unrestored/shared/1571/2636/541/index"
import * as /* [auto-meaningful-name] */Module_303 from /* 303 */"../../../../../unrestored/shared/1571/2636/64/303/index"
import /* [auto-meaningful-name] */Module_3031 from /* 303 */"../../../../../unrestored/shared/1571/2636/64/303/index"
import /* 879 */"./styles.css"
var /* [auto-meaningful-name] */__EMPTY_ADVANCE_TEXT_TIP_ID__ = "@__EMPTY_ADVANCE_TEXT_TIP_ID__@"
var Le = function () {
  var e
  if (!(null === (e = document.getElementById(__EMPTY_ADVANCE_TEXT_TIP_ID__)) || undefined === e)) {
    e.remove()
  }
}
var Pe = function (e) {
  var /* [auto-meaningful-name] */e$text = e.text
  var /* [auto-meaningful-name] */e$duration = e.duration
  var r = undefined === e$duration ? 500 : e$duration
  var /* [auto-meaningful-name] */e$className = e.className
  var c = useRef(null)
  useEffect(function () {
    return function () {
      Le()
    }
  })
  return React.createElement("div", {
    ref: c,
    onMouseMove: function (e) {
      var /* [auto-meaningful-name] */e$clientX = e.clientX
      var /* [auto-meaningful-name] */e$clientY = e.clientY
      function i(e) {
        var /* [auto-meaningful-name] */c$current = c.current
        var /* [auto-meaningful-name] */e$target = e.target
        if (!(c$current && e$target && c$current.contains(e$target))) {
          Le()
          clearTimeout(ve)
          document.removeEventListener("mousemove", i)
        }
      }
      if (ve) {
        clearTimeout(ve)
      }
      ve = setTimeout(function () {
        !function (e, t, n) {
          Le()
          __EMPTY_ADVANCE_TEXT_TIP_ID__ = "coco-advanced-text-tip—" + Module_3031()
          var r = document.createElement("div")
          r.innerHTML = e
          r.className = "coco-advanced-text-tip"
          r.id = __EMPTY_ADVANCE_TEXT_TIP_ID__
          r.style.top = n + 10 + "px"
          r.style.left = t + 10 + "px"
          document.body.appendChild(r)
        }(e$text, e$clientX, e$clientY)
        document.addEventListener("mousemove", i)
      }, r)
    },
    className: Classnames("icon-advanced-text", e$className)
  }, e$text)
}
export { Pe }
