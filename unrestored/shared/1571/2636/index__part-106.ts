/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-106
 */

"use strict"

import { _y } from "./index__part-103"
import * as /* [auto-meaningful-name] */Module_224 from /* 224 */"./224/index"
import * as /* [auto-meaningful-name] */Module_107 from /* 107 */"./107"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"./21"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"./54"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"./106"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"./103"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"./35"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"./40/index"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useEffect, createElement, useLayoutEffect, forwardRef, useState, useCallback, useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Src_editor_ui_EditArea_WidgetEditor_styles_module_css from /* 420 */"../../../../src/editor/ui/EditArea/WidgetEditor/styles.module.css"
import /* [auto-meaningful-name] */Src_editor_ui_EditArea_WidgetEditor_styles_module_css1 from /* 420 */"../../../../src/editor/ui/EditArea/WidgetEditor/styles.module.css"
var Sy = memo(function (e) {
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var n = (0, useIntl().formatMessage)({
    id: e$formConfig.label || "content"
  })
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, Module_88.textInput, "changeContent"),
    label: n,
    labelWidth: e$formConfig.labelWidth
  }, React.createElement(_y, e))
})
var Ay = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function (e) {
    var /* [auto-meaningful-name] */e$keyCode = e.keyCode
    if (e.altKey && !e.ctrlKey || e.metaKey || e$keyCode >= Ay.F1 && e$keyCode <= Ay.F12) {
      return false
    }
    switch (e$keyCode) {
      case Ay.ALT:
      case Ay.CAPS_LOCK:
      case Ay.CONTEXT_MENU:
      case Ay.CTRL:
      case Ay.DOWN:
      case Ay.END:
      case Ay.ESC:
      case Ay.HOME:
      case Ay.INSERT:
      case Ay.LEFT:
      case Ay.MAC_FF_META:
      case Ay.META:
      case Ay.NUMLOCK:
      case Ay.NUM_CENTER:
      case Ay.PAGE_DOWN:
      case Ay.PAGE_UP:
      case Ay.PAUSE:
      case Ay.PRINT_SCREEN:
      case Ay.RIGHT:
      case Ay.SHIFT:
      case Ay.UP:
      case Ay.WIN_KEY:
      case Ay.WIN_KEY_RIGHT:
        return false
      default:
        return true
    }
  },
  isCharacterKey: function (e) {
    if (e >= Ay.ZERO && e <= Ay.NINE) {
      return true
    }
    if (e >= Ay.NUM_ZERO && e <= Ay.NUM_MULTIPLY) {
      return true
    }
    if (e >= Ay.A && e <= Ay.Z) {
      return true
    }
    if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) {
      return true
    }
    switch (e) {
      case Ay.SPACE:
      case Ay.QUESTION_MARK:
      case Ay.NUM_PLUS:
      case Ay.NUM_MINUS:
      case Ay.NUM_PERIOD:
      case Ay.NUM_DIVISION:
      case Ay.SEMICOLON:
      case Ay.DASH:
      case Ay.EQUALS:
      case Ay.COMMA:
      case Ay.PERIOD:
      case Ay.SLASH:
      case Ay.APOSTROPHE:
      case Ay.SINGLE_QUOTE:
      case Ay.OPEN_SQUARE_BRACKET:
      case Ay.BACKSLASH:
      case Ay.CLOSE_SQUARE_BRACKET:
        return true
      default:
        return false
    }
  }
}
var Iy = Ay
function jy(e, t) {
  if ("function" === typeof e) {
    e(t)
  } else {
    if ("object" === Module_107.a(e) && e && "current" in e) {
      e.current = t
    }
  }
}
function Ny() {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
    t[n] = arguments[n]
  }
  return function (e) {
    t.forEach(function (t) {
      jy(t, e)
    })
  }
}
function Ry() {
  return "function" === typeof BigInt
}
function ky(e) {
  var t = e.trim()
  var n = t.startsWith("-")
  if (n) {
    t = t.slice(1)
  }
  if ((t = t.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, "")).startsWith(".")) {
    t = "0".concat(t)
  }
  var r = t || "0"
  var o = r.split(".")
  var i = o[0] || "0"
  var a = o[1] || "0"
  if ("0" === i && "0" === a) {
    n = false
  }
  var s = n ? "-" : ""
  return {
    negative: n,
    negativeStr: s,
    trimStr: r,
    integerStr: i,
    decimalStr: a,
    fullStr: "".concat(s).concat(r)
  }
}
function xy(e) {
  var t = String(e)
  return !Number.isNaN(Number(t)) && t.includes("e")
}
function Dy(e) {
  var t = String(e)
  if (xy(e)) {
    var n = Number(t.slice(t.indexOf("e-") + 2))
    var r = t.match(/\.(\d+)/)
    if (null === r || undefined === r ? undefined : r[1]) {
      n += r[1].length
    }
    return n
  }
  return t.includes(".") && Ly(t) ? t.length - t.indexOf(".") - 1 : 0
}
function My(e) {
  var t = String(e)
  if (xy(e)) {
    if (e > Number.MAX_SAFE_INTEGER) {
      return String(Ry() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER)
    }
    if (e < Number.MIN_SAFE_INTEGER) {
      return String(Ry() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER)
    }
    t = e.toFixed(Dy(t))
  }
  return ky(t).fullStr
}
function Ly(e) {
  return "number" === typeof e ? !Number.isNaN(e) : !!e && (/^\s*-?\d+(\.\d+)?\s*$/.test(e) || /^\s*-?\d+\.\s*$/.test(e) || /^\s*-?\.\d+\s*$/.test(e))
}
var Py = function () {
  function e(t) {
    Module_103.a(this, e)
    this.origin = ""
    this.number = undefined
    this.empty = undefined
    if ((t || 0 === t) && String(t).trim()) {
      this.origin = String(t)
      this.number = Number(t)
    } else {
      this.empty = true
    }
  }
  Module_106.a(e, [
    {
      key: "negate",
      value: function () {
        return new e(-this.toNumber())
      }
    }, {
      key: "add",
      value: function (t) {
        if (this.isInvalidate()) {
          return new e(t)
        }
        var n = Number(t)
        if (Number.isNaN(n)) {
          return this
        }
        var r = this.number + n
        if (r > Number.MAX_SAFE_INTEGER) {
          return new e(Number.MAX_SAFE_INTEGER)
        }
        if (r < Number.MIN_SAFE_INTEGER) {
          return new e(Number.MIN_SAFE_INTEGER)
        }
        var o = Math.max(Dy(this.number), Dy(n))
        return new e(r.toFixed(o))
      }
    }, {
      key: "isEmpty",
      value: function () {
        return this.empty
      }
    }, {
      key: "isNaN",
      value: function () {
        return Number.isNaN(this.number)
      }
    }, {
      key: "isInvalidate",
      value: function () {
        return this.isEmpty() || this.isNaN()
      }
    }, {
      key: "equals",
      value: function (e) {
        return this.toNumber() === (null === e || undefined === e ? undefined : e.toNumber())
      }
    }, {
      key: "lessEquals",
      value: function (e) {
        return this.add(e.negate().toString()).toNumber() <= 0
      }
    }, {
      key: "toNumber",
      value: function () {
        return this.number
      }
    }, {
      key: "toString",
      value: function () {
        var e = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0]
        return e ? this.isInvalidate() ? "" : My(this.number) : this.origin
      }
    }
  ])
  return e
}()
var By = function () {
  function e(t) {
    Module_103.a(this, e)
    this.origin = ""
    this.negative = undefined
    this.integer = undefined
    this.decimal = undefined
    this.decimalLen = undefined
    this.empty = undefined
    this.nan = undefined
    if ((t || 0 === t) && String(t).trim()) {
      this.origin = String(t)
      if ("-" !== t) {
        var n = t
        if (xy(n)) {
          n = Number(n)
        }
        if (Ly(n = "string" === typeof n ? n : My(n))) {
          var r = ky(n)
          this.negative = r.negative
          var o = r.trimStr.split(".")
          this.integer = BigInt(o[0])
          var i = o[1] || "0"
          this.decimal = BigInt(i)
          this.decimalLen = i.length
        } else {
          this.nan = true
        }
      } else {
        this.nan = true
      }
    } else {
      this.empty = true
    }
  }
  Module_106.a(e, [
    {
      key: "getMark",
      value: function () {
        return this.negative ? "-" : ""
      }
    }, {
      key: "getIntegerStr",
      value: function () {
        return this.integer.toString()
      }
    }, {
      key: "getDecimalStr",
      value: function () {
        return this.decimal.toString().padStart(this.decimalLen, "0")
      }
    }, {
      key: "alignDecimal",
      value: function (e) {
        var t = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e, "0"))
        return BigInt(t)
      }
    }, {
      key: "negate",
      value: function () {
        var t = new e(this.toString())
        t.negative = !t.negative
        return t
      }
    }, {
      key: "add",
      value: function (t) {
        if (this.isInvalidate()) {
          return new e(t)
        }
        var n = new e(t)
        if (n.isInvalidate()) {
          return this
        }
        var r = Math.max(this.getDecimalStr().length, n.getDecimalStr().length)
        var o = ky((this.alignDecimal(r) + n.alignDecimal(r)).toString())
        var /* [auto-meaningful-name] */o$negativeStr = o.negativeStr
        var /* [auto-meaningful-name] */o$trimStr = o.trimStr
        var s = "".concat(o$negativeStr).concat(o$trimStr.padStart(r + 1, "0"))
        return new e("".concat(s.slice(0, -r), ".").concat(s.slice(-r)))
      }
    }, {
      key: "isEmpty",
      value: function () {
        return this.empty
      }
    }, {
      key: "isNaN",
      value: function () {
        return this.nan
      }
    }, {
      key: "isInvalidate",
      value: function () {
        return this.isEmpty() || this.isNaN()
      }
    }, {
      key: "equals",
      value: function (e) {
        return this.toString() === (null === e || undefined === e ? undefined : e.toString())
      }
    }, {
      key: "lessEquals",
      value: function (e) {
        return this.add(e.negate().toString()).toNumber() <= 0
      }
    }, {
      key: "toNumber",
      value: function () {
        return this.isNaN() ? NaN : Number(this.toString())
      }
    }, {
      key: "toString",
      value: function () {
        var e = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0]
        return e ? this.isInvalidate() ? "" : ky("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr : this.origin
      }
    }
  ])
  return e
}()
function Fy(e) {
  return Ry() ? new By(e) : new Py(e)
}
function Gy(e, t, n) {
  if ("" === e) {
    return ""
  }
  var r = ky(e)
  var /* [auto-meaningful-name] */r$negativeStr = r.negativeStr
  var /* [auto-meaningful-name] */r$integerStr = r.integerStr
  var /* [auto-meaningful-name] */r$decimalStr = r.decimalStr
  var s = "".concat(t).concat(r$decimalStr)
  var c = "".concat(r$negativeStr).concat(r$integerStr)
  if (n >= 0) {
    var l = Number(r$decimalStr[n])
    return l >= 5 ? Gy(Fy(e).add("".concat(r$negativeStr, "0.").concat("0".repeat(n)).concat(10 - l)).toString(), t, n) : 0 === n ? c : "".concat(c).concat(t).concat(r$decimalStr.padEnd(n, "0").slice(0, n))
  }
  return ".0" === s ? c : "".concat(c).concat(s)
}
function Wy(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$upNode = e.upNode
  var /* [auto-meaningful-name] */e$downNode = e.downNode
  var /* [auto-meaningful-name] */e$upDisabled = e.upDisabled
  var /* [auto-meaningful-name] */e$downDisabled = e.downDisabled
  var /* [auto-meaningful-name] */e$onStep = e.onStep
  var s = useRef()
  var c = useRef()
  c.current = e$onStep
  var l = function (e, t) {
    e.preventDefault()
    c.current(t)
    s.current = setTimeout(function e() {
      c.current(t)
      s.current = setTimeout(e, 200)
    }, 600)
  }
  var u = function () {
    clearTimeout(s.current)
  }
  useEffect(function () {
    return u
  }, [])
  if (function () {
    if ("undefined" === typeof navigator || "undefined" === typeof window) {
      return false
    }
    var e = navigator.userAgent || navigator.vendor || window.opera
    return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null === e || undefined === e ? undefined : e.substr(0, 4)))
  }()) {
    return null
  }
  var d = "".concat(e$prefixCls, "-handler")
  var p = Classnames(d, "".concat(d, "-up"), Module_35.a({}, "".concat(d, "-up-disabled"), e$upDisabled))
  var h = Classnames(d, "".concat(d, "-down"), Module_35.a({}, "".concat(d, "-down-disabled"), e$downDisabled))
  var m = {
    unselectable: "on",
    role: "button",
    onMouseUp: u,
    onMouseLeave: u
  }
  return createElement("div", {
    className: "".concat(d, "-wrap")
  }, createElement("span", Module_19.a({}, m, {
    onMouseDown: function (e) {
      l(e, true)
    },
    "aria-label": "Increase Value",
    "aria-disabled": e$upDisabled,
    className: p
  }), e$upNode || createElement("span", {
    unselectable: "on",
    className: "".concat(e$prefixCls, "-handler-up-inner")
  })), createElement("span", Module_19.a({}, m, {
    onMouseDown: function (e) {
      l(e, false)
    },
    "aria-label": "Decrease Value",
    "aria-disabled": e$downDisabled,
    className: h
  }), e$downNode || createElement("span", {
    unselectable: "on",
    className: "".concat(e$prefixCls, "-handler-down-inner")
  })))
}
var Uy = {}
function Hy(e, t) {
  0
}
function Vy(e, t, n) {
  if (!(t || Uy[n])) {
    e(false, n)
    Uy[n] = true
  }
}
var zy = function (e, t) {
  Vy(Hy, e, t)
}
var Yy = "undefined" !== typeof window && window.document && window.document.createElement ? useLayoutEffect : useEffect
function Ky(e, t) {
  var n = useRef(false)
  Yy(function () {
    if (n.current) {
      return e()
    }
    n.current = true
  }, t)
}
var qy = function (e) {
  return +setTimeout(e, 16)
}
var Xy = function (e) {
  return clearTimeout(e)
}
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  qy = function (e) {
    return window.requestAnimationFrame(e)
  }
  Xy = function (e) {
    return window.cancelAnimationFrame(e)
  }
}
var Qy = 0
var Zy = new Map()
function Jy(e) {
  Zy.delete(e)
}
function $y(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1
  var n = Qy += 1
  function r(t) {
    if (0 === t) {
      Jy(n)
      e()
    } else {
      var o = qy(function () {
        r(t - 1)
      })
      Zy.set(n, o)
    }
  }
  r(t)
  return n
}
$y.cancel = function (e) {
  var t = Zy.get(e)
  Jy(t)
  return Xy(t)
}
var eE = ["prefixCls", "className", "style", "min", "max", "step", "defaultValue", "value", "disabled", "readOnly", "upHandler", "downHandler", "keyboard", "controls", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep"]
var tE = function (e, t) {
  return e || t.isEmpty() ? t.toString() : t.toNumber()
}
var nE = function (e) {
  var t = Fy(e)
  return t.isInvalidate() ? null : t
}
var rE = forwardRef(function (e, t) {
  var n
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var o = undefined === e$prefixCls ? "rc-input-number" : e$prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$min = e.min
  var /* [auto-meaningful-name] */e$max = e.max
  var /* [auto-meaningful-name] */e$step = e.step
  var u = undefined === e$step ? 1 : e$step
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$readOnly = e.readOnly
  var /* [auto-meaningful-name] */e$upHandler = e.upHandler
  var /* [auto-meaningful-name] */e$downHandler = e.downHandler
  var /* [auto-meaningful-name] */e$keyboard = e.keyboard
  var /* [auto-meaningful-name] */e$controls = e.controls
  var y = undefined === e$controls || e$controls
  var /* [auto-meaningful-name] */e$stringMode = e.stringMode
  var /* [auto-meaningful-name] */e$parser = e.parser
  var /* [auto-meaningful-name] */e$formatter = e.formatter
  var /* [auto-meaningful-name] */e$precision = e.precision
  var /* [auto-meaningful-name] */e$decimalSeparator = e.decimalSeparator
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onInput = e.onInput
  var /* [auto-meaningful-name] */e$onPressEnter = e.onPressEnter
  var /* [auto-meaningful-name] */e$onStep = e.onStep
  var R = Module_54.a(e, eE)
  var k = "".concat(o, "-input")
  var x = useRef(null)
  var D = useState(false)
  var M = Module_40.a(D, 2)
  var L = M[0]
  var P = M[1]
  var B = useRef(false)
  var F = useRef(false)
  var G = useState(function () {
    return Fy(null !== e$value && undefined !== e$value ? e$value : e$defaultValue)
  })
  var W = Module_40.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = useCallback(function (e, t) {
    if (!t) {
      return e$precision >= 0 ? e$precision : Math.max(Dy(e), Dy(u))
    }
  }, [e$precision, u])
  var z = useCallback(function (e) {
    var t = String(e)
    if (e$parser) {
      return e$parser(t)
    }
    var n = t
    if (e$decimalSeparator) {
      n = n.replace(e$decimalSeparator, ".")
    }
    return n.replace(/[^\w.-]+/g, "")
  }, [e$parser, e$decimalSeparator])
  var Y = useRef("")
  var K = useCallback(function (e, t) {
    if (e$formatter) {
      return e$formatter(e, {
        userTyping: t,
        input: String(Y.current)
      })
    }
    var n = "number" === typeof e ? My(e) : e
    if (!t) {
      var r = V(n, t)
      if (Ly(n) && (e$decimalSeparator || r >= 0)) {
        n = Gy(n, e$decimalSeparator || ".", r)
      }
    }
    return n
  }, [e$formatter, V, e$decimalSeparator])
  var q = useState(function () {
    var e = null !== e$defaultValue && undefined !== e$defaultValue ? e$defaultValue : e$value
    return U.isInvalidate() && ["string", "number"].includes(Module_107.a(e)) ? Number.isNaN(e) ? "" : e : K(U.toString(), false)
  })
  var X = Module_40.a(q, 2)
  var Q = X[0]
  var Z = X[1]
  function J(e, t) {
    Z(K(e.isInvalidate() ? e.toString(false) : e.toString(!t), t))
  }
  Y.current = Q
  var $ = useMemo(function () {
    return nE(e$max)
  }, [e$max])
  var ee = useMemo(function () {
    return nE(e$min)
  }, [e$min])
  var te = useMemo(function () {
    return !(!$ || !U || U.isInvalidate()) && $.lessEquals(U)
  }, [$, U])
  var ne = useMemo(function () {
    return !(!ee || !U || U.isInvalidate()) && U.lessEquals(ee)
  }, [ee, U])
  var re = function (e, t) {
    var n = useRef(null)
    return [
      function () {
        try {
          var /* [auto-meaningful-name] */e$selectionStart = e.selectionStart
          var /* [auto-meaningful-name] */e$selectionEnd = e.selectionEnd
          var /* [auto-meaningful-name] */e$value1 = e.value
          var i = e$value1.substring(0, e$selectionStart)
          var a = e$value1.substring(e$selectionEnd)
          n.current = {
            start: e$selectionStart,
            end: e$selectionEnd,
            value: e$value1,
            beforeTxt: i,
            afterTxt: a
          }
        } catch (s) {}
      }, function () {
        if (e && n.current && t) {
          try {
            var /* [auto-meaningful-name] */e$value1 = e.value
            var /* [auto-meaningful-name] */n$current = n.current
            var /* [auto-meaningful-name] */n$current$beforeTxt = n$current.beforeTxt
            var /* [auto-meaningful-name] */n$current$afterTxt = n$current.afterTxt
            var /* [auto-meaningful-name] */n$current$start = n$current.start
            var /* [auto-meaningful-name] */e$value1$length = e$value1.length
            if (e$value1.endsWith(n$current$afterTxt)) {
              e$value1$length = e$value1.length - n.current.afterTxt.length
            } else if (e$value1.startsWith(n$current$beforeTxt)) {
              e$value1$length = n$current$beforeTxt.length
            } else {
              var l = n$current$beforeTxt[n$current$start - 1]
              var u = e$value1.indexOf(l, n$current$start - 1)
              if (-1 !== u) {
                e$value1$length = u + 1
              }
            }
            e.setSelectionRange(e$value1$length, e$value1$length)
          } catch (d) {
            zy(false, "Something warning of cursor restore. Please fire issue about this: ".concat(d.message))
          }
        }
      }
    ]
  }(x.current, L)
  var oe = Module_40.a(re, 2)
  var ie = oe[0]
  var ae = oe[1]
  var se = function (e) {
    return $ && !e.lessEquals($) ? $ : ee && !ee.lessEquals(e) ? ee : null
  }
  var ce = function (e) {
    return !se(e)
  }
  var le = function (e, t) {
    var n
    var r = e
    var o = ce(r) || r.isEmpty()
    if (!(r.isEmpty() || t)) {
      r = se(r) || r
      o = true
    }
    if (!e$readOnly && !e$disabled && o) {
      var i = r.toString()
      var a = V(i, t)
      if (a >= 0) {
        r = Fy(Gy(i, ".", a))
      }
      if (!r.equals(U)) {
        n = r
        if (undefined === e$value) {
          H(n)
        }
        if (!(null === e$onChange || undefined === e$onChange)) {
          e$onChange(r.isEmpty() ? null : tE(e$stringMode, r))
        }
        if (undefined === e$value) {
          J(r, t)
        }
      }
      return r
    }
    return U
  }
  var ue = function () {
    var e = useRef(0)
    var t = function () {
      $y.cancel(e.current)
    }
    useEffect(function () {
      return t
    }, [])
    return function (n) {
      t()
      e.current = $y(function () {
        n()
      })
    }
  }()
  var de = function e(t) {
    ie()
    Z(t)
    if (!F.current) {
      var n = Fy(z(t))
      if (!n.isNaN()) {
        le(n, true)
      }
    }
    if (!(null === e$onInput || undefined === e$onInput)) {
      e$onInput(t)
    }
    ue(function () {
      var n = t
      if (!e$parser) {
        n = t.replace(/\u3002/g, ".")
      }
      if (n !== t) {
        e(n)
      }
    })
  }
  var pe = function (e) {
    var /* [auto-meaningful-name] */x$current
    if (!(e && te || !e && ne)) {
      B.current = false
      var n = Fy(u)
      if (!e) {
        n = n.negate()
      }
      var r = (U || Fy(0)).add(n.toString())
      var o = le(r, false)
      if (!(null === e$onStep || undefined === e$onStep)) {
        e$onStep(tE(e$stringMode, o), {
          offset: u,
          type: e ? "up" : "down"
        })
      }
      if (!(null === (x$current = x.current) || undefined === x$current)) {
        x$current.focus()
      }
    }
  }
  var fe = function (e) {
    var t = Fy(z(Q))
    var n = t
    n = t.isNaN() ? U : le(t, e)
    if (undefined !== e$value) {
      J(U, false)
    } else {
      if (!n.isNaN()) {
        J(n, false)
      }
    }
  }
  Ky(function () {
    if (!U.isInvalidate()) {
      J(U, false)
    }
  }, [e$precision])
  Ky(function () {
    var e = Fy(e$value)
    H(e)
    var t = Fy(z(Q))
    if (!(e.equals(t) && B.current && !e$formatter)) {
      J(e, B.current)
    }
  }, [e$value])
  Ky(function () {
    if (e$formatter) {
      ae()
    }
  }, [Q])
  return createElement("div", {
    className: Classnames(o, e$className, (n = {}, Module_35.a(n, "".concat(o, "-focused"), L), Module_35.a(n, "".concat(o, "-disabled"), e$disabled), Module_35.a(n, "".concat(o, "-readonly"), e$readOnly), Module_35.a(n, "".concat(o, "-not-a-number"), U.isNaN()), Module_35.a(n, "".concat(o, "-out-of-range"), !U.isInvalidate() && !ce(U)), n)),
    style: e$style,
    onFocus: function () {
      P(true)
    },
    onBlur: function () {
      fe(false)
      P(false)
      B.current = false
    },
    onKeyDown: function (e) {
      var /* [auto-meaningful-name] */e$which = e.which
      B.current = true
      if (e$which === Iy.ENTER) {
        if (!F.current) {
          B.current = false
        }
        fe(false)
        if (!(null === e$onPressEnter || undefined === e$onPressEnter)) {
          e$onPressEnter(e)
        }
      }
      if (false !== e$keyboard && !F.current && [Iy.UP, Iy.DOWN].includes(e$which)) {
        pe(Iy.UP === e$which)
        e.preventDefault()
      }
    },
    onKeyUp: function () {
      B.current = false
    },
    onCompositionStart: function () {
      F.current = true
    },
    onCompositionEnd: function () {
      F.current = false
      de(x.current.value)
    }
  }, y && createElement(Wy, {
    prefixCls: o,
    upNode: e$upHandler,
    downNode: e$downHandler,
    upDisabled: te,
    downDisabled: ne,
    onStep: pe
  }), createElement("div", {
    className: "".concat(k, "-wrap")
  }, createElement("input", Module_19.a({
    autoComplete: "off",
    role: "spinbutton",
    "aria-valuemin": e$min,
    "aria-valuemax": e$max,
    "aria-valuenow": U.isInvalidate() ? null : U.toString(),
    step: u
  }, R, {
    ref: Ny(x, t),
    className: k,
    value: Q,
    onChange: function (e) {
      de(e.target.value)
    },
    disabled: e$disabled,
    readOnly: e$readOnly
  }))))
})
rE.displayName = "InputNumber"
var oE = rE
var iE = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
        }
      }
    ]
  },
  name: "up",
  theme: "outlined"
}
var aE = function (e, t) {
  return createElement(Module_224.a, Module_21.a(Module_21.a({}, e), {}, {
    ref: t,
    icon: iE
  }))
}
aE.displayName = "UpOutlined"
var lE = forwardRef(aE)
export { Sy }
export { oE }
export { lE }
