/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-19
 */

import React, { useRef, useEffect } from "react"
import classNames from "classnames"
// 神秘导入，鬼知道导入 switch 组件是干什么用的
import "../../../../../unrestored/shared/1571/2636/541/index"
import /* [auto-meaningful-name] */Module_303 from /* 303 */"../../../../../unrestored/shared/1571/2636/64/303/index"
import "./styles.css"

let tipElementId = "@__EMPTY_ADVANCE_TEXT_TIP_ID__@"
function removeTipElement() {
  document.getElementById(tipElementId)?.remove()
}

let handle: ReturnType<typeof setTimeout>

export interface IAdvancedTextProps {
  text: string
  duration?: number
  className?: classNames.Argument
}

/**
 * 先进的文本框，把鼠标悬停到文本框上就会出现悬停提示，简直遥遥领先。
 * 一个 title 属性能解决的问题，为啥要搞一个组件出来？
 */
export function AdvancedText({ text, duration = 500, className }: IAdvancedTextProps) {

  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => () => { removeTipElement() })

  return <div
    ref={elementRef}
    onMouseMove={(event) => {
      const { clientX, clientY } = event
      function removeTip(event: MouseEvent) {
        const element = elementRef.current
        const { target } = event as MouseEvent & { target: Node }
        if (!(element && target && element.contains(target))) {
          removeTipElement()
          clearTimeout(handle)
          document.removeEventListener("mousemove", removeTip)
        }
      }
      if (handle) {
        clearTimeout(handle)
      }
      handle = setTimeout(() => {
        removeTipElement()
        tipElementId = "coco-advanced-text-tip—" + Module_303()
        const tipElement = document.createElement("div")
        tipElement.innerHTML = text
        tipElement.className = "coco-advanced-text-tip"
        tipElement.id = tipElementId
        tipElement.style.top = clientY + 10 + "px"
        tipElement.style.left = clientX + 10 + "px"
        document.body.appendChild(tipElement)
        document.addEventListener("mousemove", removeTip)
      }, duration)
    }}
    className={classNames("icon-advanced-text", className)}
  >{text}</div>
}
