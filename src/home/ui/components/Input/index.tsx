/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：YqO9
 */

import * as React from "react"
import classNames from "classnames"
import IconFont from "../../../../../unrestored/home/components/IconFont-zVV7"
import "./styles.module.css"

interface IInputProps {
  warning?: boolean
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?(value: string, event: React.ChangeEvent<HTMLInputElement>): void
  onBlur?(value: string, event: React.FocusEvent<HTMLInputElement>): void
  onClick?: React.MouseEventHandler<HTMLInputElement>
  onMouseDown?: React.MouseEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onCompositionStart?(): void
  onCompositionEnd?: React.CompositionEventHandler<HTMLInputElement>
  onClearCallback?(): void
  before?: React.ReactNode
  after?: React.ReactNode
  style?: React.CSSProperties
  className?: classNames.ArgumentArray
  max?: number
  min?: number
  maxLength?: number
  disabled?: boolean
  type?: "number" | "text"
  dependency?: unknown
  rules?: TRules
  readOnly?: boolean
  isTrimmed?: boolean
  clearButtonVisible?: boolean
}

type TRules = Iterable<IInputRule>

interface IInputRule {
  rule: RegExp
  message?: string
}

interface IFormatResult {
  status: "success" | "fail"
  value: string
  massage?: string
}

const minusRegEx = /^-+$/
const numberRegEx = /^(-|\+)?\d*$/

function formatNumberOnBlurEvent(value: string, max?: number, min?: number) {
  var number = parseFloat(value) || 0
  if (min !== undefined) {
    number = Math.max(number, min)
  }
  if (max !== undefined) {
    number = Math.min(number, max)
  }
  return number.toString()
}

function formatNumberValueOnChangeEvent(value: string, max?: number): IFormatResult {
  let status: "success" | "fail" = "success"
  if (!numberRegEx.test(value)) {
    status = "fail"
  }
  let number = parseFloat(value)
  // 超过最大值会报错，但超过最小值不会
  if (max && number > max) {
    status = "fail"
    number = max
  }
  return {
    status: status,
    value: isNaN(number) ? "" : number.toString()
  }
}

function formatNumberRulesOnChangeEvent(value: string, oldValue: string, rules: TRules): IFormatResult {
  if (rules) {
    for (const rule of rules) {
      const result = value.match(rule.rule)
      if (!result) {
        return {
          status: "fail",
          value: oldValue,
          massage: rule.message
        }
      }
    }
  }
  return {
    status: "success",
    value: value
  }
}

function formatOnChangeEvent(
  value: string,
  oldInputValueRef: React.MutableRefObject<string>,
  maxLength?: number,
  rules?: TRules
): IFormatResult {
  const oldValue = oldInputValueRef.current!
  if (value !== "") {
    // rule verify
    if (rules) {
      for (const rule of rules) {
        const result = value.match(rule.rule)
        if (!result) {
          return {
            status: "fail",
            value: oldValue,
            massage: rule.message
          }
        }
      }
    }
    // 未超过最大长度 or 删除字符时
    if (maxLength && (value.length <= maxLength || value.length < oldValue.length)) {
      oldInputValueRef.current = value
      return {
        status: "success",
        value: value
      }
    }
    // maxLength verify
    if (maxLength !== undefined && value.length > oldValue.length) {
      return {
        status: "fail",
        value: oldValue,
        massage: "The maximum support length is exceeded"
      }
    }
  }
  let start = -1
  for (var i = 0; i < value.length; i++) {
    if (value[i] !== oldValue[i]) {
      start = i // value 与 oldValue 差异开始的地方
      break
    }
  }
  if (start > -1) {
    let newInputValue = oldValue
    for (let i = start; i < value.length; i++) {
      const str = oldValue.slice(0, start) + value.slice(start, i) + oldValue.slice(start)
      if (maxLength !== undefined && str.length > maxLength) {
        break
      }
      newInputValue = str
    }
    oldInputValueRef.current = newInputValue
    return {
      status: "success",
      value: newInputValue
    }
  }
  return {
    status: "success",
    value: value
  }
}

let animationTimeId: ReturnType<typeof setTimeout> | null | undefined = undefined

function Input({
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
}: IInputProps, ref: React.Ref<unknown> | undefined) {

  const [isFocused, setIsFocused] = React.useState(false)
  const [isWarningAnimation, setWarningAnimation] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const oldInputValueRef = React.useRef("") // 记录input 框改变前的value
  const [isEmptyValue, setIsEmptyValue] = React.useState(!!defaultValue || !!value)
  const isCompositionEnd = React.useRef(true)

  // 记录上一次输入框数据
  // NOTE: reset input value when dependency changed
  React.useEffect(()=> {
    var inputEl = inputRef.current
    if (value === undefined && inputEl) {
      inputEl.value = defaultValue === undefined ? "" : defaultValue.toString().substr(0, maxLength || Infinity)
      setIsEmptyValue(!inputEl.value)
    } else if (value) {
      setIsEmptyValue(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef, dependency, value, defaultValue])

  React.useEffect(() => {
    var inputEl = inputRef.current
    if (value !== undefined && inputEl) {
      inputEl.value = value.toString().substr(0, maxLength)
    }
  }, [inputRef, value, maxLength])

  React.useImperativeHandle(ref, () => {
    if (inputRef.current) {
      return {
        input: inputRef.current,
        value: inputRef.current.value || "",
        focus() {
          return inputRef.current!.focus()
        },
        blur() {
          return inputRef.current!.blur()
        },
        select() {
          return inputRef.current!.select()
        }
      }
    }
    return {
      input: inputRef.current,
      value: ""
    }
  })

  function handleChangeWhenNumberType(e: React.ChangeEvent<HTMLInputElement>) {
    var inputEL = inputRef.current
    if (!inputEL) {
      return
    }
    var inputValue = inputEL.value
    if (rules) {
      var _formatResult = formatNumberRulesOnChangeEvent(inputValue, oldInputValueRef.current, rules)
      if (_formatResult.status === "fail") {
        handleFormatResult(_formatResult)
        inputEL.value = _formatResult.value
        return
      }
    }
    if (minusRegEx.test(inputValue)) {
      // 多个 “-” 号改为一个 “-” 号
      inputEL.value = "-"
      return
    }
    var formatResult = formatNumberValueOnChangeEvent(inputValue, max)
    handleFormatResult(formatResult)
    inputEL.value = formatResult.value
    // 如果input 的值小于最小值时,直接返回，不触发onChange事件
    if (min && Number(formatResult.value) < min) {
      return
    }
    if (onChange) {
      onChange(formatResult.value || "0", e)
    }
  }

  function handleChangeWhenTextType(e: React.ChangeEvent<HTMLInputElement>) {
    var resultValue = handleFormarTextResult()
    if (resultValue !== undefined && onChange) {
      onChange(resultValue, e)
    }
  }

  function handleFormarTextResult() {
    var inputEL = inputRef.current
    if (!inputEL) {
      return
    }
    var inputValue = inputEL.value
    var resultValue = inputValue
    var formatResult = formatOnChangeEvent(inputValue, oldInputValueRef, maxLength, rules)
    resultValue = formatResult.value
    if (!isCompositionEnd.current) {
      resultValue = inputValue
    }
    inputEL.value = resultValue
    handleFormatResult(formatResult)
    return resultValue
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsEmptyValue(!e.target.value)
    if (type === "number") {
      handleChangeWhenNumberType(e)
    } else {
      handleChangeWhenTextType(e)
    }
  }

  function handleFormatResult(result: IFormatResult) {
    if (result.status === "fail") {
      if (!animationTimeId) {
        setWarningAnimation(true)
        animationTimeId = setTimeout(() => {
          setWarningAnimation(false)
          animationTimeId = null
        }, 600)
      }
    } else {
      setWarningAnimation(false)
    }
  }

  const handleFocus = React.useCallback((e) => {
    setIsFocused(true)
    if (onFocus) {
      onFocus(e)
    }
  }, [onFocus])

  const handleBlur = React.useCallback((e) => {
    setIsFocused(false)
    var inputEL = inputRef.current
    if (!inputEL) {
      return
    }
    var previousV = inputEL.value
    var lastV = inputEL.value
    if (type === "number") {
      lastV = formatNumberOnBlurEvent(previousV, max, min)
    }
    if (isTrimmed) {
      lastV = lastV.trim()
    }
    inputEL.value = lastV
    if (onBlur) {
      onBlur(lastV, e)
    }
    if (lastV !== previousV && onChange) {
      onChange(lastV, e)
    }
  }, [inputRef, type, isTrimmed, onBlur, onChange, max, min])

  function handleKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    const inputEL = inputRef.current
    if (!inputEL) {
      return
    }
    if (e.keyCode === 13) {
      inputEL.blur()
    }
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  function handleClearButtonMouseDown(e: React.MouseEvent) {
    var inputEl = inputRef.current
    e.stopPropagation()
    e.preventDefault()
    if (inputEl) {
      inputEl.value = ""
      inputEl.focus()
      setIsEmptyValue(true)
      if (onClearCallback) {
        onClearCallback()
      }
    }
  }

  function handleCompositionStart() {
    isCompositionEnd.current = false
    if (onCompositionStart) {
      onCompositionStart()
    }
  }

  function handleCompositionEnd(e: React.CompositionEvent<HTMLInputElement>) {
    isCompositionEnd.current = true
    handleFormarTextResult()
    if (onCompositionEnd) {
      onCompositionEnd(e)
    }
  }

  const otherProps = {
    disabled,
    placeholder,
    value
  } satisfies React.InputHTMLAttributes<HTMLInputElement>

  return <div
    className={classNames("coco-input", className, {
      "coco-input-focus": isFocused,
      "coco-input-disabled": disabled,
      "coco-input-warning": warning,
      "coco-input-warning-animation": isWarningAnimation
    })}
    style={style}
  >
    {before}
    <input
      ref={inputRef}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onKeyDown={handleKeydown}
      readOnly={readOnly}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      {...otherProps}
    />
    {clearButtonVisible && !isEmptyValue && (
      <div onMouseDown={handleClearButtonMouseDown} className="coco-input-clear-button">
        <IconFont type="icon-close" />
      </div>
    )}
    {after}
  </div>
}

export default React.memo(React.forwardRef(Input))
