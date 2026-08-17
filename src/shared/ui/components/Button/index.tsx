/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-7
 */

import { IconFont } from "../Iconfont"
import React, { memo, useRef, useImperativeHandle, MouseEventHandler, ReactNode } from "react"
import classNames from "classnames"
import "./styles.css"

export interface IButtonProps {
  type?: "primary" | "light"
  icon?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  style?: React.CSSProperties
  className?: classNames.Argument
  danger?: boolean
  children?: ReactNode
  shape?: "circle" | "square"
}

export const Button = memo(React.forwardRef(({
  type,
  icon,
  onClick,
  disabled,
  style = {},
  className,
  danger,
  children,
  shape = "circle"
}: IButtonProps, ref) => {

  const elementRef = useRef(null)

  useImperativeHandle(ref, () => elementRef.current)

  return <button
    ref={elementRef}
    className={classNames("coco-button", function () {
      const prefix = "coco-button-"
      return (type ? prefix + type : "") + " " + (danger ? prefix + "dangerous" : "") + " " + (shape ? prefix + shape : "")
    }(), className)}
    disabled={disabled}
    style={style}
    onClick={onClick}
  >
    {icon && <IconFont type={icon} />}
    {children}
  </button>
}))
