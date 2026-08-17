/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：294
 */

import { IconFont } from "../Iconfont"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../../../../../unrestored/shared/1571/2636/53"
import classNames from "classnames"
import React, { ReactNode, useState, useRef, useEffect, useImperativeHandle, useCallback } from "react"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../../../../unrestored/shared/1571/2636/47"

export interface IInputProps {
  warning?: boolean
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?(value: string, event: React.ChangeEvent<HTMLInputElement>): void
  onBlur?(value: string, event: React.ChangeEvent<HTMLInputElement>): void
  onClick?: React.MouseEventHandler<HTMLInputElement>
  onMouseDown?: React.MouseEventHandler<HTMLInputElement>
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void
  onFocus?(event: React.FocusEventHandler<HTMLInputElement>): void
  onCompositionStart?(): void
  onCompositionEnd?(event: React.CompositionEvent<HTMLInputElement>): void
  onClearCallback?(): void
  before?: ReactNode
  after?: ReactNode
  style?: React.CSSProperties
  className?: classNames.Argument
  max?: number
  min?: number
  maxLength?: number
  disabled?: boolean
  type?: "text" | "number"
  dependency?: unknown
  rules?: TRules
  readOnly?: boolean
  isTrimmed?: boolean
  clearButtonVisible?: boolean
}

export type TRules = Iterable<IInputRule>

export interface IInputRule {
  rule: RegExp
  message?: string
}

type CheckResult = {
  status: "success"
  value: string
} | {
  status: "fail"
  value: string
  massage?: string
}

var r
export const Input = React.memo(React.forwardRef(({
  warning,
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onClick,
  onMouseDown,
  onKeyDown,
  onFocus,
  onCompositionStart,
  onCompositionEnd,
  onClearCallback,
  before,
  after,
  style,
  className,
  max,
  min,
  maxLength,
  disabled,
  type = "text",
  dependency,
  rules,
  readOnly = false,
  isTrimmed = false,
  clearButtonVisible
}: IInputProps, ref) => {

  const [focus, setFocus] = useState(false)
  const [warningAnimation, setWarningAnimation] = useState(false)
  const inputElementRef = useRef<HTMLInputElement>(null)
  const X = useRef("")
  const [isEmpty, setIsEmpty] = useState(!!defaultValue || !!value)
  const ee = useRef(true)

  useEffect(() => {
    const inputElement = inputElementRef.current
    if (value === undefined && inputElement) {
      inputElement.value = defaultValue === undefined ? "" : defaultValue.toString().substr(0, maxLength || 1 / 0)
      setIsEmpty(!inputElement.value)
    }
  }, [inputElementRef, dependency, value, defaultValue])

  useEffect(() => {
    const inputElement = inputElementRef.current
    if (value !== undefined && inputElement) {
      inputElement.value = value.toString().substr(0, maxLength)
    }
  }, [inputElementRef, value, maxLength])

  useImperativeHandle(ref, () => {
    return {
      input: inputElementRef.current,
      value: inputElementRef.current?.value || "",
      focus: () => inputElementRef.current?.focus(),
      blur: () => inputElementRef.current?.blur(),
      select: () => inputElementRef.current?.select()
    }
  })

  function checkNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const inputElement = inputElementRef.current
    if (!inputElement) {
      return
    }
    const { value } = inputElement
    if (rules) {
      const checkResult = ((value, X, rules): CheckResult => {
        for (const rule of rules) {
          if (!value.match(rule.rule)) {
            return {
              status: "fail",
              value: X,
              massage: rule.message
            }
          }
        }
        return {
          status: "success",
          value
        }
      })(value, X.current, rules)
      if (checkResult.status === "fail") {
        updateWarningAnimation(checkResult)
        return void (inputElement.value = checkResult.value)
      }
    }
    if (Module_53.u.test(value)) {
      inputElement.value = "-"
    } else {
      const checkResult = ((value, max) => {
        let success: CheckResult["status"] = "success"
        if (!Module_53.x.test(value)) {
          success = "fail"
        }
        let float = parseFloat(value)
        if (max && float > max) {
          success = "fail"
          float = max
        }
        return {
          status: success,
          value: isNaN(float) ? "" : float.toString()
        }
      })(value, max)
      updateWarningAnimation(checkResult)
      inputElement.value = checkResult.value
      if (!(min && Number(checkResult.value) < min)) {
        if (onChange) {
          onChange(checkResult.value || "0", event)
        }
      }
    }
  }

  function ne() {
    var inputElement = inputElementRef.current
    if (inputElement) {
      var inputElement$value = inputElement.value
      var n = inputElement$value
      var r = function (e, t, n, r) {
        var /* [auto-meaningful-name] */t$current = t.current
        if ("" !== e) {
          if (r) {
            var a
            var s = Module_47.a(r)
            try {
              for (s.s(); !(a = s.n()).done;) {
                var /* [auto-meaningful-name] */a$value = a.value
                if (!e.match(a$value.rule)) {
                  return {
                    status: "fail",
                    value: t$current,
                    massage: a$value.message
                  }
                }
              }
            } catch (h) {
              s.e(h)
            } finally {
              s.f()
            }
          }
          if (n && (e.length <= n || e.length < t$current.length)) {
            t.current = e
            return {
              status: "success",
              value: e
            }
          }
          if (undefined !== n && e.length > t$current.length) {
            return {
              status: "fail",
              value: t$current,
              massage: "The maximum support length is exceeded"
            }
          }
        }
        for (var l = -1, u = 0; u < e.length; u++) {
          if (e[u] !== t$current[u]) {
            l = u
            break
          }
        }
        if (l > -1 && undefined !== n) {
          for (var d = t$current, p = l; p < e.length; p++) {
            var f = t$current.slice(0, l) + e.slice(l, p) + t$current.slice(l)
            if (f.length > n) {
              break
            }
            d = f
          }
          t.current = d
          return {
            status: "success",
            value: d
          }
        }
        return {
          status: "success",
          value: e
        }
      }(inputElement$value, X, maxLength, rules)
      n = r.value
      if (!ee.current) {
        n = inputElement$value
      }
      inputElement.value = n
      updateWarningAnimation(r)
      return n
    }
  }

  function updateWarningAnimation(checkResult: CheckResult) {
    if (checkResult.status === "fail") {
      if (!r) {
        setWarningAnimation(true)
        r = setTimeout(function () {
          setWarningAnimation(false)
          r = null
        }, 600)
      }
    } else {
      setWarningAnimation(false)
    }
  }

  var handleFocus = useCallback(function (e) {
    setFocus(true)
    if (onFocus) {
      onFocus(e)
    }
  }, [onFocus])

  var handleBlur = useCallback(function (e) {
    setFocus(false)
    var inputElement = inputElementRef.current
    if (inputElement) {
      var inputElement$value = inputElement.value
      var inputElement$value1 = inputElement.value
      if ("number" === type) {
        inputElement$value1 = function (e, t, n) {
          var r = parseFloat(e) || 0
          if (undefined !== n) {
            r = Math.max(r, n)
          }
          if (undefined !== t) {
            r = Math.min(r, t)
          }
          return r.toString()
        }(inputElement$value, max, min)
      }
      if (isTrimmed) {
        inputElement$value1 = inputElement$value1.trim()
      }
      inputElement.value = inputElement$value1
      if (inputElement$value1 !== inputElement$value && onChange) {
        onChange(inputElement$value1, e)
      }
      if (onBlur) {
        onBlur(inputElement$value1, e)
      }
    }
  }, [inputElementRef, type, isTrimmed, onBlur, onChange, max, min])

  const inputProps = {
    disabled,
    placeholder,
    value
  }

  return <div
    className={classNames("coco-input", className, {
      "coco-input-focus": focus,
      "coco-input-disabled": disabled,
      "coco-input-warning": warning,
      "coco-input-warning-animation": warningAnimation
    })}
    style={style}
  >
    {before}
    <input
      ref={inputElementRef}
      onChange={(event) => {
        setIsEmpty(!event.currentTarget.value)
        if (type === "number") {
          checkNumber(event)
        } else {
          var t = ne()
          if (undefined !== t && onChange) {
            onChange(t, event)
          }
        }
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onKeyDown={(event) => {
        const inputElement = inputElementRef.current
        if (inputElement) {
          if (event.keyCode === 13) {
            inputElement.blur()
          }
          if (onKeyDown) {
            onKeyDown(event)
          }
        }
      }}
      readOnly={readOnly}
      onCompositionStart={() => {
        ee.current = false
        if (onCompositionStart) {
          onCompositionStart()
        }
      }}
      onCompositionEnd={(event) => {
        ee.current = true
        ne()
        if (onCompositionEnd) {
          onCompositionEnd(event)
        }
      }}
      {...inputProps}
    />
    {clearButtonVisible && !isEmpty && <div
      onMouseDown={(event) => {
        const inputElement = inputElementRef.current
        event.stopPropagation()
        event.preventDefault()
        if (inputElement) {
          inputElement.value = ""
          inputElement.focus()
          setIsEmpty(true)
          if (onClearCallback) {
            onClearCallback()
          }
        }
      }}
      className="coco-input-clear-button"
    >
      <IconFont type="icon-close" />
    </div>}
    {after}
  </div>
}))
export { Input as a }
