/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-8
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_ui_components_Iconfont_index from /* 94 */"../../../../../src/shared/ui/components/Iconfont/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { createContext, memo, useState, useEffect, useCallback, useRef, useContext } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import /* 870 */"./870"
var $ = createContext(null)
var /* [auto-meaningful-name] */$$Provider = $.Provider
var te = $
memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var d = undefined === e$style ? {} : e$style
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$onBlur = e.onBlur
  var h = useState(e$value || e$defaultValue)
  var m = Module_10.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = useState(false)
  var b = Module_10.a(v, 2)
  var y = b[0]
  var O = b[1]
  useEffect(function () {
    _(e$value)
  }, [e$value])
  useEffect(function () {
    if (undefined !== e$open) {
      O(e$open)
    }
  }, [e$open])
  useEffect(function () {
    var /* [auto-meaningful-name] */S$current
    if (!(null === (S$current = S.current) || undefined === S$current)) {
      S$current.setAttribute("tabindex", "-1")
    }
  }, [])
  var w = useCallback(function (e) {
    if (undefined === e$open) {
      O(e)
    }
  }, [e$open])
  var C = useCallback(function (e) {
    _(e)
    w(false)
    if (e$onSelect) {
      e$onSelect(e)
    }
  }, [e$onSelect, w])
  var T = useCallback(function () {
    w(!y)
  }, [y, w])
  var S = useRef(null)
  var A = useCallback(function () {
    w(false)
    if (e$onBlur) {
      e$onBlur()
    }
  }, [e$onBlur, w])
  return React.createElement($$Provider, {
    value: {
      onSelect: C,
      selectedValue: g
    }
  }, React.createElement("div", {
    style: d,
    className: Classnames(e$className, "coco-tree-select"),
    onBlur: A,
    ref: S
  }, React.createElement("div", {
    className: "coco-tree-selector",
    onClick: T
  }, g, React.createElement("i", {
    className: Classnames("coco-tree-select-arrow", {
      active: y
    })
  }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
    type: "icon-up"
  }))), React.createElement("div", {
    className: Classnames("coco-tree-select-list", {
      hide: !y
    })
  }, e$children)))
})
var ne = memo(function (e) {
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var c = useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useCallback(function () {
    if (!e$disabled) {
      d(true)
    }
  }, [d, e$disabled])
  var f = useCallback(function () {
    if (!e$disabled) {
      d(false)
    }
  }, [d, e$disabled])
  return React.createElement("div", {
    className: Classnames("coco-tree-node"),
    onMouseEnter: p,
    onMouseLeave: f
  }, React.createElement("div", {
    className: Classnames("coco-tree-group-header", {
      disabled: e$disabled
    })
  }, React.createElement("span", null, e$title), React.createElement("i", {
    className: "coco-tree-node-arrows"
  }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
    type: "icon-right"
  }))), React.createElement("div", {
    className: Classnames("coco-tree-group-main", {
      hide: !u
    })
  }, e$children))
})
var re = memo(function (e) {
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$content = e.content
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var c = useContext(te)
  var l = useCallback(function () {
    if (null === c || undefined === c ? undefined : c.onSelect) {
      c.onSelect(e$value)
    }
  }, [e$value, c])
  return React.createElement("div", {
    className: Classnames("coco-tree-node-item", {
      selected: (null === c || undefined === c ? undefined : c.selectedValue) === e$value,
      disabled: e$disabled
    }),
    onClick: l,
    key: e$value
  }, e$content || React.createElement("span", null, e$title))
})
memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  return React.createElement("div", {
    className: Classnames(e$className, "coco-tree-node")
  }, e$children ? React.createElement(ne, e) : React.createElement(re, e))
})
