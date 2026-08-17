/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：540
 */

import classNames from "classnames"
import { memo, useRef, useState, useCallback, useEffect, CSSProperties, ReactNode } from "react"
import React from "react"
import ReactDom from "react-dom"
import "./styles.css"
import { IconFont } from "../Iconfont"

export interface IDialogProps {
  className?: classNames.Argument
  style?: CSSProperties
  visible: boolean
  maskClosable?: boolean
  mask?: boolean
  onClose?(): void
  children?: ReactNode
  showCloseButton?: boolean
  withPortal?: boolean
  title?: string
  footer?: ReactNode
}

export const Dialog = memo(({
  className,
  style,
  visible,
  maskClosable = false,
  mask = true,
  onClose,
  children,
  showCloseButton = true,
  withPortal = false,
  title,
  footer
}: IDialogProps) => {

  const elementRef = useRef<HTMLDivElement>(null)
  const contentElementRef = useRef<HTMLDivElement>(null)
  const [, setIsPlayingAnimation] = useState(false)

  let containerElement = document.getElementById("_cocoDialogContainer")
  if (!containerElement) {
    containerElement = document.createElement("div")
    containerElement.id = "_cocoDialogContainer"
    document.body.appendChild(containerElement)
  }

  const onCloseCallback = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const close = useCallback(() => {
    if (maskClosable) {
      onCloseCallback()
    }
  }, [onCloseCallback, maskClosable])

  useEffect(() => {
    const element = elementRef.current
    function listener(event: KeyboardEvent) {
      if (!(contentElementRef.current?.contains(event.target as HTMLElement))) {
        event.stopPropagation()
      }
    }
    if (element) { element.addEventListener("keydown", listener) }
    return () => { element?.removeEventListener("keydown", listener) }
  }, [])

  useEffect(() => {
    if (visible) {
      setIsPlayingAnimation(true)
    }
  }, [visible])

  const node = <div
    data-html2canvas-ignore="true"
    ref={elementRef}
    tabIndex={-1}
    className={classNames("coco-dialog", className)}
    style={{
      display: visible ? "block" : "none",
      ...style
    }}
  >
    {mask && <div
      className={visible ? "coco-dialog-mask" : classNames("coco-dialog-mask", "hidden")}
      onClick={close}
    />}
    <div className="coco-dialog-scroll">
      <div
        className={visible ? classNames("coco-dialog-wrapper", "show") : classNames("coco-dialog-wrapper", "hidden")}
        onAnimationEnd={() => {
          if (!visible) {
            setIsPlayingAnimation(false)
          }
        }}
      >
        <div className={title && showCloseButton ? "coco-dialog-title" : ""}>
          {title && <div>{title}</div>}
          {showCloseButton && <span
            className="coco-dialog-close"
            onClick={onCloseCallback}
          >
            <IconFont type="icon-close" />
          </span>}
        </div>
        <div className="coco-dialog-content" ref={contentElementRef}>{children}</div>
        {footer && <div className="coco-dialog-footer">{footer}</div>}
      </div>
    </div>
  </div>
  return withPortal ? ReactDom.createPortal(node, containerElement) : node
})
export { Dialog as a }
