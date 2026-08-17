/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：269__part-5
 */

"use strict"

import { ue } from "./index__part-4"
import * as /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import * as /* [auto-meaningful-name] */Module_391 from /* 391 */"./391"
import * as /* [auto-meaningful-name] */Module_287 from /* 287 */"../../../552/1214/316/287"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../54"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import { useEffect, useLayoutEffect, forwardRef, useRef, useImperativeHandle, useCallback, Children, isValidElement, cloneElement, createElement } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1028 from /* 1028 */"./1028"
function fe(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild
}
function de(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild
}
function he(e, t) {
  if (undefined === t) {
    return true
  }
  var /* [auto-meaningful-name] */e$innerText = e.innerText
  if (undefined === e$innerText) {
    e$innerText = e.textContent
  }
  return 0 !== (e$innerText = e$innerText.trim().toLowerCase()).length && (t.repeating ? e$innerText[0] === t.keys[0] : 0 === e$innerText.indexOf(t.keys.join("")))
}
function pe(e, t, n, r, i, o) {
  for (var a = false, s = i(e, t, !!t && n); s;) {
    if (s === e.firstChild) {
      if (a) {
        return
      }
      a = true
    }
    var c = !r && (s.disabled || "true" === s.getAttribute("aria-disabled"))
    if (s.hasAttribute("tabindex") && he(s, o) && !c) {
      return void s.focus()
    }
    s = i(e, s, n)
  }
}
var _e = "undefined" === typeof window ? useEffect : useLayoutEffect
var Ae = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$actions = e.actions
  var /* [auto-meaningful-name] */e$autoFocus = e.autoFocus
  var o = undefined !== e$autoFocus && e$autoFocus
  var /* [auto-meaningful-name] */e$autoFocusItem = e.autoFocusItem
  var s = undefined !== e$autoFocusItem && e$autoFocusItem
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$disabledItemsFocusable = e.disabledItemsFocusable
  var h = undefined !== e$disabledItemsFocusable && e$disabledItemsFocusable
  var /* [auto-meaningful-name] */e$disableListWrap = e.disableListWrap
  var _ = undefined !== e$disableListWrap && e$disableListWrap
  var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
  var /* [auto-meaningful-name] */e$variant = e.variant
  var v = undefined === e$variant ? "selectedMenu" : e$variant
  var m = Module_54.a(e, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"])
  var y = useRef(null)
  var b = useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  })
  _e(function () {
    if (o) {
      y.current.focus()
    }
  }, [o])
  useImperativeHandle(e$actions, function () {
    return {
      adjustStyleForScrollbar: function (e, t) {
        var n = !y.current.style.width
        if (e.clientHeight < y.current.clientHeight && n) {
          var r = "".concat(Module_1028.a(true), "px")
          y.current.style["rtl" === t.direction ? "paddingLeft" : "paddingRight"] = r
          y.current.style.width = "calc(100% + ".concat(r, ")")
        }
        return y.current
      }
    }
  }, [])
  var w = useCallback(function (e) {
    y.current = ReactDom.findDOMNode(e)
  }, [])
  var E = Module_287.a(w, t)
  var x = -1
  Children.forEach(e$children, function (e, t) {
    if (isValidElement(e)) {
      if (!e.props.disabled) {
        if ("selectedMenu" === v && e.props.selected || -1 === x) {
          x = t
        }
      }
    }
  })
  var O = Children.map(e$children, function (e, t) {
    if (t === x) {
      var n = {}
      if (s) {
        n.autoFocus = true
      }
      if (undefined === e.props.tabIndex && "selectedMenu" === v) {
        n.tabIndex = 0
      }
      return cloneElement(e, n)
    }
    return e
  })
  return createElement(ue, Module_19.a({
    role: "menu",
    ref: E,
    className: e$className,
    onKeyDown: function (e) {
      var /* [auto-meaningful-name] */y$current = y.current
      var /* [auto-meaningful-name] */e$key = e.key
      var /* [auto-meaningful-name] */Module_391$aY$current$activeElement = Module_391.a(y$current).activeElement
      if ("ArrowDown" === e$key) {
        e.preventDefault()
        pe(y$current, Module_391$aY$current$activeElement, _, h, fe)
      } else if ("ArrowUp" === e$key) {
        e.preventDefault()
        pe(y$current, Module_391$aY$current$activeElement, _, h, de)
      } else if ("Home" === e$key) {
        e.preventDefault()
        pe(y$current, null, _, h, fe)
      } else if ("End" === e$key) {
        e.preventDefault()
        pe(y$current, null, _, h, de)
      } else if (1 === e$key.length) {
        var /* [auto-meaningful-name] */b$current = b.current
        var o = e$key.toLowerCase()
        var a = performance.now()
        if (b$current.keys.length > 0) {
          if (a - b$current.lastTime > 500) {
            b$current.keys = []
            b$current.repeating = true
            b$current.previousKeyMatched = true
          } else {
            if (b$current.repeating && o !== b$current.keys[0]) {
              b$current.repeating = false
            }
          }
        }
        b$current.lastTime = a
        b$current.keys.push(o)
        var s = Module_391$aY$current$activeElement && !b$current.repeating && he(Module_391$aY$current$activeElement, b$current)
        if (b$current.previousKeyMatched && (s || pe(y$current, Module_391$aY$current$activeElement, false, h, fe, b$current))) {
          e.preventDefault()
        } else {
          b$current.previousKeyMatched = false
        }
      }
      if (e$onKeyDown) {
        e$onKeyDown(e)
      }
    },
    tabIndex: o ? 0 : -1
  }, m), O)
})
export { Ae }
