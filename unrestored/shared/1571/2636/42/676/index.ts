/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：676
 */

"use strict"

import { useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */ResizeObserverPolyfill from /* 462 */"resize-observer-polyfill"
import /* 860 */"./860"
import { useSelector } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../../64/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
function u(e) {
  return e instanceof HTMLInputElement ? e.value : e.innerHTML || ""
}
function d(e) {
  return e.replace(/<div><br><\/div>/g, "\n").replace(/<div>|<br>/g, "\n").replace(/<\/div>/g, "")
}
function p(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : Src_editor_widget_builtIn_types.q.FIXED
  var r = arguments.length > 3 ? arguments[3] : undefined
  var o = document.getElementById("COCO_APP_ZONE")
  var i = getComputedStyle(e)
  if (o) {
    var a = e.getClientRects()[0]
    var /* [auto-meaningful-name] */a$width = a.width
    var /* [auto-meaningful-name] */a$height = a.height
    var /* [auto-meaningful-name] */a$top = a.top
    var /* [auto-meaningful-name] */a$left = a.left
    var p = o.getClientRects()[0]
    var /* [auto-meaningful-name] */p$top = p.top
    var /* [auto-meaningful-name] */p$left = p.left
    if (n & Src_editor_widget_builtIn_types.q.AUTO_WIDTH) {
      t.style.width = "auto"
    } else {
      t.style.width = a$width / r + "px"
    }
    if (n & Src_editor_widget_builtIn_types.q.AUTO_HEIGHT) {
      t.style.height = "auto"
    } else {
      t.style.height = a$height / r + "px"
    }
    t.style.top = (a$top - p$top) / r + "px"
    t.style.left = (a$left - p$left) / r + "px"
    t.style.fontSize = i.fontSize
    t.style.color = i.color
    t.style.lineHeight = i.lineHeight
    t.style.textAlign = i.textAlign
    t.style.letterSpacing = i.letterSpacing
    t.style.fontFamily = i.fontFamily
    t.style.whiteSpace = i.whiteSpace
    t.style.display = i.display
    t.style.justifyContent = i.justifyContent
    t.style.alignItems = i.alignItems
    t.style.minWidth = i.minWidth
    t.style.maxWidth = i.maxWidth
    t.style.minHeight = i.minHeight
    t.style.maxHeight = i.maxHeight
  }
}
function f(t) {
  var /* [auto-meaningful-name] */t$target = t.target
  var /* [auto-meaningful-name] */t$callback = t.callback
  var /* [auto-meaningful-name] */t$options = t.options
  var m = undefined === t$options ? {} : t$options
  var /* [auto-meaningful-name] */m$sizeAdaptive = m.sizeAdaptive
  var _ = undefined === m$sizeAdaptive ? Src_editor_widget_builtIn_types.q.FIXED : m$sizeAdaptive
  var /* [auto-meaningful-name] */m$maxLength = m.maxLength
  var b = undefined === m$maxLength ? 1 / 0 : m$maxLength
  var /* [auto-meaningful-name] */m$isMultipleRow = m.isMultipleRow
  var E = undefined === m$isMultipleRow || m$isMultipleRow
  var O = useRef(null)
  var w = useRef()
  var C = useSelector(function (e) {
    return e.common.stageScale
  })
  useEffect(function () {
    var /* [auto-meaningful-name] */O$current = O.current
    if (O$current && t$target) {
      w.current = t$target
      p(t$target, O$current, _, C)
      t$target.style.opacity = "0"
      O$current.contentEditable = "true"
      O$current.innerHTML = u(t$target)
      setImmediate(function () {
        Module_64.b(O$current)
      })
    }
  }, [t$callback, _, C, t$target])
  useEffect(function () {
    var /* [auto-meaningful-name] */O$current = O.current
    if (E && O$current) {
      var t = Src_shared_tools_index.p(function (e) {
        t$callback(e)
      }, 60)
      var n = new ResizeObserverPolyfill.default(function () {
        var n = d(O$current.innerHTML)
        t(n)
      })
      n.observe(O$current)
      return function () {
        if (n) {
          n.disconnect()
        }
        n = null
      }
    }
  }, [t$callback, b, E])
  return React1.createElement("div", {
    className: "coco-widget-editor-div",
    ref: O,
    onBlur: function () {
      var /* [auto-meaningful-name] */O$current = O.current
      if (O$current) {
        if (w.current) {
          w.current.style.opacity = "1"
        }
        O$current.style.display = "none"
      }
    },
    onDoubleClick: function () {
      var /* [auto-meaningful-name] */O$current = O.current
      if (O$current) {
        Module_64.c(O$current)
      }
    },
    onInput: function (e) {
      var /* [auto-meaningful-name] */O$current = O.current
      if (O$current) {
        var n = d(O$current.innerHTML)
        if (n.length >= b) {
          O$current.innerHTML = n.slice(0, b)
          Module_64.b(O$current)
        }
      }
    },
    onPaste: function (e) {
      if ((null === e || undefined === e ? undefined : e.clipboardData) && document.execCommand) {
        e.preventDefault()
        var t = e.clipboardData.getData("text/plain")
        document.execCommand("insertText", false, t)
      }
    }
  })
}
function h(t) {
  var /* [auto-meaningful-name] */t$target = t.target
  var /* [auto-meaningful-name] */t$callback = t.callback
  var /* [auto-meaningful-name] */t$options = t.options
  var /* [auto-meaningful-name] */UndefinedT$optionsT$options$sizeAdaptive = (undefined === t$options ? {} : t$options).sizeAdaptive
  var d = undefined === UndefinedT$optionsT$options$sizeAdaptive ? Src_editor_widget_builtIn_types.q.FIXED : UndefinedT$optionsT$options$sizeAdaptive
  var f = useRef(null)
  var h = useRef()
  var m = useSelector(function (e) {
    return e.common.stageScale
  })
  useEffect(function () {
    var /* [auto-meaningful-name] */f$current = f.current
    if (f$current && t$target) {
      var r = u(t$target)
      h.current = t$target
      p(t$target, f$current, d, m)
      t$target.style.opacity = "0"
      f$current.contentEditable = "true"
      f$current.value = r
      setImmediate(function () {
        f$current.selectionEnd = r.length
        f$current.selectionStart = r.length
        f$current.focus()
      })
    }
  }, [t$callback, d, m, t$target])
  return React1.createElement("input", {
    onKeyDown: function (e) {
      if (13 === e.keyCode) {
        e.currentTarget.blur()
      }
    },
    onDoubleClick: function (e) {
      e.target.select()
    },
    type: "text",
    onBlur: function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      if (e$target) {
        if (h.current) {
          h.current.style.opacity = "1"
        }
        e$target.style.display = "none"
      }
      t$callback(e.target.value)
    },
    ref: f,
    className: "coco-widget-editor-input"
  })
}
var _a
_a = function (e) {
  var /* [auto-meaningful-name] */e$options = e.options
  var /* [auto-meaningful-name] */UndefinedE$optionsE$options$isMultipleRow = (undefined === e$options ? {} : e$options).isMultipleRow
  var r = undefined === UndefinedE$optionsE$options$isMultipleRow || UndefinedE$optionsE$options$isMultipleRow
  return React1.createElement("div", {
    className: "coco-widget-editor"
  }, r ? React1.createElement(f, e) : React1.createElement(h, e))
}
export { _a as a }
export default _a
