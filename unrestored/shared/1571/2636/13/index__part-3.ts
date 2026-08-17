/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-3
 */

"use strict"

import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useEffect, useCallback, useContext } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_Iconfont_index from /* 94 */"../../../../../src/shared/ui/components/Iconfont/index"
import /* 641 */"./641"
import * as /* [auto-meaningful-name] */Module_361 from /* 361 */"../361"
var w = memo(function (e) {
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$autoCloseWhenChanged = e.autoCloseWhenChanged
  var f = undefined === e$autoCloseWhenChanged || e$autoCloseWhenChanged
  var h = useState(e$value || e$defaultValue)
  var m = Module_10.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = useState(e$open)
  var b = Module_10.a(v, 2)
  var y = b[0]
  var w = b[1]
  var C = useRef(null)
  var T = useState(null)
  var S = Module_10.a(T, 2)
  var A = S[0]
  var I = S[1]
  useEffect(function () {
    if (undefined !== e$value) {
      _(e$value)
    }
  }, [e$value])
  useEffect(function () {
    w(e$open)
  }, [e$open])
  var j = useCallback(function (e) {
    if (undefined === e$value) {
      _(e)
    }
  }, [e$value])
  var N = useCallback(function (e) {
    if (e) {
      I(e)
    }
  }, [])
  var R = useCallback(function () {
    w(!y)
  }, [y])
  useEffect(function () {
    var e = function e(t) {
      var /* [auto-meaningful-name] */t$target = t.target
      if (C.current && !C.current.contains(t$target)) {
        w(false)
        document.body.removeEventListener("click", e)
      }
    }
    if (y) {
      document.body.addEventListener("click", e)
    } else {
      document.body.removeEventListener("click", e)
    }
  }, [y])
  return React.createElement(Module_361.a, {
    value: {
      value: g,
      onChange: function (e) {
        j(e)
        if (e$onChange) {
          e$onChange(e)
        }
        if (f) {
          w(false)
        }
      },
      onChangeSelectorContent: N
    }
  }, React.createElement("div", {
    className: Classnames("coco-select", e$className),
    style: e$style,
    ref: C
  }, React.createElement("div", {
    className: Classnames("coco-select-selector", {
      active: y
    }),
    onClick: R
  }, React.createElement("div", {
    className: Classnames("coco-select-label")
  }, A), React.createElement(Src_shared_ui_components_Iconfont_index.a, {
    type: "icon-up",
    className: Classnames("coco-select-arrow", {
      active: y
    })
  })), React.createElement("div", {
    className: Classnames("coco-select-options", [y ? "show" : "hide"])
  }, e$children)))
})
var C = memo(function (e) {
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$suffix = e.suffix
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  var c = useContext(Module_361.b)
  useEffect(function () {
    if ((null === c || undefined === c ? undefined : c.value) === e$value) {
      c.onChangeSelectorContent(e$children || e$value)
    }
  }, [c, e$children, e$value])
  return React.createElement("div", {
    onClick: function () {
      if (!(null === c || undefined === c)) {
        c.onChange(e$value)
      }
    },
    className: Classnames({
      selected: (null === c || undefined === c ? undefined : c.value) === e$value
    }, e$className, "coco-option")
  }, e$children || React.createElement("div", {
    className: "coco-option-content"
  }, React.createElement("p", null, e$value), e$suffix))
})
export { w }
export { C }
