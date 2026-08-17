/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-5
 */

"use strict"

import { B } from "./index__part-4"
var P
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_344 from /* 344 */"../133/344"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"../1213"
import { useIntl } from /* 710 */"react-intl"
import { useDispatch } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_Iconfont_index from /* 94 */"../../../../../src/shared/ui/components/Iconfont/index"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useMemo, forwardRef, useRef, useImperativeHandle, useEffect, useCallback } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import * as /* [auto-meaningful-name] */Module_797 from /* 797 */"./797/index"
import * as /* [auto-meaningful-name] */Module_253 from /* 253 */"./253/index"
import * as /* [auto-meaningful-name] */Module_226 from /* 226 */"../15/226"
import /* [auto-meaningful-name] */Module_2261 from /* 226 */"../15/226"
!function (e) {
  e.HEX = "HEX"
  e.HSVA = "HSVA"
  e.RGBA = "RGBA"
}(P || (P = {}))
var H
var V = [P.HEX, P.HSVA, P.RGBA]
var z = memo(function (e) {
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = useState(P.HEX)
  var i = Module_10.a(o, 2)
  var c = i[0]
  var l = i[1]
  var u = useMemo(function () {
    var e = Module_2261(e$color).toHex8()
    var n = Module_2261(e$color).toHsv()
    n.a = Math.round(100 * n.a)
    var r = Module_2261(e$color).toHsl()
    r.a = Math.round(100 * r.a)
    var o = Module_2261(e$color).toRgb()
    o.a = Math.round(100 * o.a)
    return {
      hex: "#".concat(e),
      hsl: r,
      hsv: n,
      rgb: o
    }
  }, [e$color])
  var /* [auto-meaningful-name] */u$hex = u.hex
  var /* [auto-meaningful-name] */u$hsl = u.hsl
  var /* [auto-meaningful-name] */u$hsv = u.hsv
  var /* [auto-meaningful-name] */u$rgb = u.rgb
  var g = function (e) {
    var t
    if (e.HEX) {
      if (Module_2261(e.HEX).isValid()) {
        return void e$onChange({
          hex: Module_2261(e.HEX).toHexString(),
          hsl: u$hsl,
          rgb: u$rgb
        })
      }
    } else if (e.R || e.G || e.B) {
      t = {
        r: e.R || u$rgb.r,
        g: e.G || u$rgb.g,
        b: e.B || u$rgb.b,
        source: "rgb"
      }
    } else {
      if (e.A) {
        if (e.A < 0) {
          e.A = 0
        } else {
          if (e.A > 100) {
            e.A = 100
          }
        }
        t = {
          h: u$hsv.h,
          s: u$hsv.s,
          v: u$hsv.v,
          a: e.A / 100,
          source: "hsv"
        }
      } else {
        if (e.H || e.S || e.V) {
          if (1 === Number(e.S)) {
            e.S = .01
          } else {
            if (1 === Number(e.V)) {
              e.V = .01
            }
          }
          t = {
            h: e.H || u$hsl.h,
            s: Number(Lodash.isUndefined(e.S) ? u$hsv.s : e.S),
            v: Number(Lodash.isUndefined(e.V) ? u$hsv.v : e.V),
            source: "hsv"
          }
        }
      }
    }
    if (t && Src_shared_tools_index.kb(t)) {
      var r = Src_shared_tools_index.C(t, e.H || u$hsv.h)
      e$onChange(r)
    }
  }
  return React.createElement("div", {
    className: "coco-platte-custom-input"
  }, React.createElement("div", {
    className: "coco-platte-input-box"
  }, c === P.HEX && React.createElement("div", {
    className: "coco-platte-hex-box"
  }, React.createElement(Module_253.EditableInput, {
    label: "HEX",
    value: u$hex,
    onChange: g
  })), c === P.HSVA && React.createElement("div", {
    className: "coco-platte-flex-box"
  }, React.createElement("div", {
    className: "coco-platte-field"
  }, React.createElement(Module_253.EditableInput, {
    label: "H",
    value: Math.round(u$hsv.h),
    onChange: g
  })), React.createElement("div", {
    className: "coco-platte-field"
  }, React.createElement(Module_253.EditableInput, {
    label: "S",
    value: Math.round(100 * u$hsv.s),
    onChange: g
  })), React.createElement("div", {
    className: "coco-platte-field"
  }, React.createElement(Module_253.EditableInput, {
    label: "V",
    value: Math.round(100 * u$hsv.v),
    onChange: g
  })), React.createElement("div", {
    className: "coco-platte-field"
  }, React.createElement(Module_253.EditableInput, {
    label: "A",
    value: u$hsl.a,
    onChange: g
  }))), c === P.RGBA && React.createElement("div", {
    className: "coco-platte-flex-box"
  }, React.createElement("div", {
    className: "coco-platte-field"
  }, React.createElement(Module_253.EditableInput, {
    label: "R",
    value: u$rgb.r,
    onChange: g
  })), React.createElement("div", {
    className: "coco-platte-field"
  }, React.createElement(Module_253.EditableInput, {
    label: "G",
    value: u$rgb.g,
    onChange: g
  })), React.createElement("div", {
    className: "coco-platte-field"
  }, React.createElement(Module_253.EditableInput, {
    label: "B",
    value: u$rgb.b,
    onChange: g
  })), React.createElement("div", {
    className: "coco-platte-field"
  }, React.createElement(Module_253.EditableInput, {
    label: "A",
    value: u$rgb.a,
    onChange: g
  })))), React.createElement("div", {
    className: "coco-platte-toggle-color-type"
  }, React.createElement("div", {
    className: "coco-platte-arrow-box",
    onClick: function () {
      var e = V.indexOf(c) - 1
      l(V[e = e < 0 ? 2 : e])
    }
  }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
    className: "coco-palette-arrow-up",
    type: "icon-fold"
  })), React.createElement("div", {
    className: "coco-platte-arrow-box",
    onClick: function () {
      var e = V.indexOf(c) + 1
      e = e >= V.length ? 0 : e
      l(V[e])
    }
  }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
    className: "coco-palette-arrow-down",
    type: "icon-fold"
  }))))
})
var Y = {
  default: {
    picker: {
      width: 248,
      padding: 0,
      background: "#fff",
      borderRadius: 0,
      boxShadow: "none",
      color: "#534C59"
    },
    saturation: {
      width: "100%",
      borderRadius: 4
    },
    sliders: {
      padding: 0
    },
    hue: {
      background: "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"
    },
    controls: {
      width: 216,
      marginLeft: 32,
      marginTop: 15,
      marginBottom: 15
    },
    alpha: {
      marginTop: 8
    },
    color: {
      width: 30,
      height: 30,
      marginTop: -1,
      marginLeft: 10,
      border: "none"
    },
    activeColor: {
      width: 30,
      height: 30,
      borderRadius: 4
    }
  }
}
var K = memo(function (e) {
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$handleColorChange = e.handleColorChange
  var r = function (e) {
    var /* [auto-meaningful-name] */e$hex = e.hex
    if (!Src_shared_tools_index.i(e$hex)) {
      e$hex = undefined !== e.rgb.a ? "".concat(e.hex).concat(function (e) {
        var t = Math.round(255 * Lodash.clamp(e, 0, 1))
        var n = t.toString(16)
        return t <= 15 ? "0".concat(n) : n
      }(e.rgb.a)) : "".concat(e.hex, "FF")
    }
    e$handleColorChange(e$hex)
  }
  return React.createElement(React.Fragment, null, React.createElement(Module_797.a, {
    onChange: r,
    color: e$color,
    presetColors: [],
    disableAlpha: false,
    styles: Y
  }), React.createElement(z, {
    color: e$color,
    onChange: r
  }))
})
var q = []
var X = memo(forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var d = undefined === e$defaultValue ? "#000000ff" : e$defaultValue
  var /* [auto-meaningful-name] */e$style = e.style
  var f = undefined === e$style ? {} : e$style
  var h = useRef(null)
  var m = useRef(null)
  var g = useRef(false)
  var _ = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var b = useState(e$value || d)
  var y = Module_10.a(b, 2)
  var O = y[0]
  var w = y[1]
  var C = useRef(O)
  if (0 === q.length) {
    q.push(O)
  }
  var T = function (e) {
    if (e !== O) {
      w(e)
      if (e$onChange) {
        e$onChange(e, g.current)
      }
      H = e
    }
  }
  var R = function (e) {
    T(e)
  }
  useImperativeHandle(t, function () {
    return {
      setRGBA: w
    }
  })
  useEffect(function () {
    var e = function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */h$current = h.current
      var /* [auto-meaningful-name] */m$current = m.current
      if ((!h$current || !h$current.contains(e$target)) && (!m$current || !m$current.contains(e$target))) {
        if (e$onClose) {
          e$onClose(O)
        }
        _(Src_editor_redux_common_actions.hh())
        if (H) {
          var i = q.indexOf(H)
          if (i > -1) {
            q.splice(i, 1)
          }
          q.unshift(H)
        }
        if (q.length > 9) {
          q.splice(9)
        }
        t()
      }
    }
    var t = function () {
      document.body.removeEventListener("mousedown", e, {
        capture: true
      })
      document.body.removeEventListener("touchstart", e, {
        capture: true
      })
      document.body.removeEventListener("mousewheel", e, {
        capture: true
      })
    }
    document.body.addEventListener("mousedown", e, {
      capture: true
    })
    document.body.addEventListener("touchstart", e, {
      capture: true
    })
    document.body.addEventListener("mousewheel", e, {
      capture: true
    })
    return t
  })
  useEffect(function () {
    C.current = O
  }, [O])
  useEffect(function () {
    var e = function () {
      g.current = true
      document.addEventListener("mouseup", function () {
        g.current = false
      }, {
        once: true
      })
    }
    document.addEventListener("mousedown", e)
    return function () {
      return document.removeEventListener("mousedown", e)
    }
  })
  var L = useCallback(function () {
    if (e$onChange) {
      e$onChange(C.current, g.current)
    }
  }, [e$onChange])
  var P = useCallback(function (e) {
    if (false === e && e$onChange) {
      e$onChange(C.current, g.current)
    }
  }, [e$onChange])
  var F = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      var t
      var /* [auto-meaningful-name] */e$sent
      var r
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (window.EyeDropper) {
                e.next = 3
                break
              }
              _(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "colorPicker.eyeDropperTips"
                })
              }))
              return e.abrupt("return", false)
            case 3:
              e.prev = 3
              t = new window.EyeDropper()
              e.next = 7
              return t.open().catch(function (e) {
                return console.info(e)
              })
            case 7:
              if (null === (e$sent = e.sent) || undefined === e$sent ? undefined : e$sent.sRGBHex) {
                r = Color(e$sent.sRGBHex).hex()
                T(r)
              }
              e.next = 14
              break
            case 11:
              e.prev = 11
              e.t0 = e.catch(3)
              console.error("handleDrawColor", e.t0)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[3, 11]])
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  return React.createElement("div", {
    className: Classnames("coco-palette"),
    style: f,
    ref: h
  }, React.createElement("div", {
    className: "coco-palette-body"
  }, Module_344.b.map(function (e, t) {
    return React.createElement(B, {
      onClick: R,
      key: t,
      color: e,
      selected: O === e,
      className: Src_shared_tools_index.V(e) ? "coco-palette-light-color-selected" : "coco-palette-dark-color-selected"
    })
  })), React.createElement("div", {
    className: "coco-palette-history-color"
  }, React.createElement("span", {
    className: "coco-palette-history-title"
  }, useIntl$formatMessage({
    id: "colorPicker.history"
  })), React.createElement("div", {
    className: "coco-palette-history-color-list"
  }, q.map(function (e, t) {
    return React.createElement(B, {
      onClick: R,
      key: t,
      color: e
    })
  }))), React.createElement(Module_1213.a, {
    placement: "rightBottom",
    overlayClassName: "coco-palette-picker",
    onVisibleChange: P,
    trigger: "click",
    content: React.createElement("div", {
      className: "coco-palette-picker-popover",
      ref: m,
      onBlur: L
    }, React.createElement("div", {
      className: "coco-palette-icon-picker-box",
      onClick: F
    }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
      type: "icon-picker-color"
    })), React.createElement(K, {
      color: O,
      handleColorChange: T
    }))
  }, React.createElement("div", {
    className: "coco-palette-more-color-box"
  }, React.createElement("div", {
    className: "coco-palette-more-color"
  }, React.createElement("div", {
    className: "coco-palette-more-title-box"
  }, React.createElement("img", {
    alt: "",
    className: "coco-palette-more-image",
    src: require(/* 866 */"./866")
  }), React.createElement("span", {
    className: "coco-palette-more-title"
  }, useIntl$formatMessage({
    id: "colorPicker.more"
  }))), React.createElement(Src_shared_ui_components_Iconfont_index.a, {
    className: "coco-palette-more-arrow",
    type: "icon-fold"
  })))))
}))
export { X }
