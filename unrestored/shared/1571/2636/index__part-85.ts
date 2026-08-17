/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-85
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"./64/index"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"./90"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useRef, useEffect, useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_322 from /* 322 */"./322"
import * as /* [auto-meaningful-name] */Module_82 from /* 82 */"./82"
import * as /* [auto-meaningful-name] */Module_114 from /* 114 */"./114"
import * as /* [auto-meaningful-name] */Module_218 from /* 218 */"./218"
import /* [auto-meaningful-name] */Module_2181 from /* 218 */"./218"
var tv = function (e) {
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$size = e.size
  var r = e.id
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$attributes$textVisible = e$attributes.textVisible
  var /* [auto-meaningful-name] */e$attributes$text = e$attributes.text
  var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
  var /* [auto-meaningful-name] */e$attributes$maxFontSize = e$attributes.maxFontSize
  var /* [auto-meaningful-name] */e$attributes$textColor = e$attributes.textColor
  var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
  var /* [auto-meaningful-name] */e$attributes$iconVisible = e$attributes.iconVisible
  var /* [auto-meaningful-name] */e$attributes$iconId = e$attributes.iconId
  var /* [auto-meaningful-name] */e$attributes$iconColor = e$attributes.iconColor
  var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
  var /* [auto-meaningful-name] */e$attributes$templateMode = e$attributes.templateMode
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var A = e$attributes$textVisible ? e$attributes$textAlign : Module_60.a.CENTER
  var I = useState(false)
  var j = Module_10.a(I, 2)
  var R = j[0]
  var x = j[1]
  var M = useState(false)
  var L = Module_10.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = useRef(null)
  var G = useRef(null)
  useEffect(function () {
    var /* [auto-meaningful-name] */F$current = F.current
    if (F$current && R) {
      F$current.innerText = e$attributes$text
      Module_64.b(F$current)
    }
  }, [R])
  useEffect(function () {
    if (!e$selected) {
      x(false)
    }
  }, [e$selected])
  var W = e$attributes$maxFontSize
  if (!e$attributes$textVisible) {
    W = Module_82.l
  }
  var U = 2 * Module_82.r
  var H = 2 * Module_82.q
  if (e$attributes$backgroundMode === Module_114.a.IMAGE) {
    U = 2 * Module_82.j
    H = 2 * Module_82.i
  }
  var V = (e$size.width - U) / 1.5
  var z = (e$size.height - H) / 1.5
  var Y = Math.min(V, z, W)
  Y = Math.max(Y, Module_82.o)
  Y = Math.floor(Y)
  var K = Module_33.hb(e$attributes$backgroundImage)
  var q = Src_shared_tools_index.U(e$attributes$backgroundImage) ? e$attributes$backgroundImage : K ? (null === K || undefined === K ? undefined : K.source) || (null === K || undefined === K ? undefined : K.cdnUrl) : Module_82.f
  var X = useMemo(function () {
    return function (e, t, n, r) {
      var o
      o = {}
      Module_11.a(o, Module_114.b.RECTANGLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 4
      })
      Module_11.a(o, Module_114.b.RECTANGLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 4,
        padding: "0 10px"
      })
      Module_11.a(o, Module_114.b.CIRCLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 2
      })
      Module_11.a(o, Module_114.b.CIRCLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 2,
        padding: "0 10px"
      })
      return o
    }(e$size.height, e$attributes$textColor, e$attributes$backgroundColor, e$attributes$disabled)
  }, [e$attributes$backgroundColor, e$attributes$disabled, e$size.height, e$attributes$textColor])
  var Q = undefined
  Q = e$attributes$backgroundMode === Module_114.a.IMAGE ? {
    color: e$attributes$disabled ? "#7E7E7E" : e$attributes$textColor,
    backgroundImage: "url(".concat(q, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%"
  } : X[e$attributes$templateMode]
  var Z = Module_6.a({
    top: e$position.y,
    left: e$position.x,
    height: e$size.height,
    lineHeight: "".concat(e$size.height, "px"),
    width: e$size.width,
    minWidth: "".concat(Module_82.p, "px"),
    minHeight: "".concat(Module_82.n, "px"),
    maxWidth: "".concat(Module_82.m, "px"),
    maxHeight: "".concat(Module_82.k, "px"),
    fontSize: Y,
    fontFamily: e$attributes$fontFamily,
    justifyContent: A,
    opacity: undefined === e$opacity ? undefined : e$opacity / 100,
    filter: e$attributes$disabled && e$attributes$backgroundMode === Module_114.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
    padding: e$attributes$backgroundMode === Module_114.a.TEMPLATE || e$size.width < 2 * Module_82.j ? "0 ".concat(Module_82.r, "px") : "0 ".concat(Module_82.j, "px")
  }, Q)
  return React.createElement(React.Fragment, null, React.createElement("button", {
    id: r,
    className: Classnames(Module_90.b, Module_2181.buttonWidget, Module_11.a({}, Module_2181.hide, !e$visible)),
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.z,
    "data-min-width": Module_82.p,
    "data-max-width": Module_82.m,
    "data-min-height": Module_82.n,
    "data-max-height": Module_82.k,
    ref: G,
    onClick: function () {
      if (e$selected && e$attributes$textVisible) {
        var /* [auto-meaningful-name] */G$current
        var /* [auto-meaningful-name] */F$current = F.current
        if ((null === (G$current = G.current) || undefined === G$current ? undefined : G$current.dataset.clickType) === Module_60.d.CLICK) {
          if (F$current && !P) {
            Module_64.b(F$current)
          }
          x(true)
          B(true)
        }
      }
    },
    onDoubleClick: function (e) {
      e.stopPropagation()
      var /* [auto-meaningful-name] */F$current = F.current
      if (F$current) {
        Module_64.c(F$current)
      }
    },
    style: Module_6.a(Module_6.a({}, Z), {}, {
      flexDirection: A === Module_60.a.RIGHT ? "row-reverse" : "row"
    })
  }, e$attributes$iconVisible && React.createElement("div", {
    className: Module_2181.iconWrapper,
    style: {
      color: e$attributes$disabled ? e$attributes$backgroundMode === Module_114.a.TEMPLATE ? Q.color : "#7E7E7E" : e$attributes$iconColor
    }
  }, React.createElement(Module_322.a, {
    icon: Module_33.fb(e$attributes$iconId)
  })), e$attributes$textVisible && React.createElement("div", {
    className: Classnames(Module_2181.textWrapper, e$attributes$iconVisible && (e$attributes$text || R) && (A === Module_60.a.RIGHT ? Module_2181.iconToTextRightSpacing : Module_2181.iconToTextLeftSpacing))
  }, React.createElement("div", {
    className: Module_2181.input,
    style: {
      display: R ? "flex" : "none"
    }
  }, React.createElement("span", {
    className: Module_2181.contentEditable,
    contentEditable: true,
    ref: F,
    onBlur: function (e) {
      if (e$onChange) {
        e$onChange("text", e.target.innerText)
      }
      B(false)
      x(false)
    },
    onKeyDown: function (e) {
      if (13 === e.keyCode) {
        e.currentTarget.blur()
        x(false)
      }
    },
    onClick: function (e) {
      e.stopPropagation()
      if (!P) {
        var /* [auto-meaningful-name] */F$current = F.current
        if (F$current) {
          Module_64.b(F$current)
        }
        B(true)
      }
    },
    onPaste: function (e) {
      if ((null === e || undefined === e ? undefined : e.clipboardData) && document.execCommand) {
        e.preventDefault()
        var t = e.clipboardData.getData("text/plain")
        document.execCommand("insertText", false, t.replace(/\n/g, ""))
      }
    }
  })), React.createElement("div", {
    className: Module_2181.text,
    style: {
      display: R ? "none" : "flex",
      textAlign: A
    }
  }, React.createElement("span", null, e$attributes$text)))))
}
export { tv }
