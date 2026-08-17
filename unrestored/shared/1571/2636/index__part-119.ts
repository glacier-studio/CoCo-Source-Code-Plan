/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-119
 */

"use strict"

import { Zv } from "./index__part-91"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_144 from /* 144 */"./144"
import * as /* [auto-meaningful-name] */Module_215 from /* 215 */"./215"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useCallback, useMemo, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_397 from /* 397 */"./397"
import /* [auto-meaningful-name] */Module_3971 from /* 397 */"./397"
var MO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "rotation" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig$label = e.formConfig.label
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var s = e$getValue(n)
  var c = 180 * s / Math.PI % 360
  if (c > 180) {
    c -= 360
  }
  if (c <= -180) {
    c += 360
  }
  c = Math.round(c)
  var l = useState(true)
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper),
    label: useIntl$formatMessage({
      id: e$formConfig$label
    })
  }, React.createElement(Src_shared_ui_components_index.k, {
    className: Module_3971.inputRow,
    type: "number",
    defaultValue: c,
    style: {
      width: 60
    },
    after: d && React.createElement("span", {
      className: Module_3971.mask
    }, React.createElement("span", {
      className: Module_3971.text
    }, c), React.createElement("span", {
      className: Module_3971.symbol
    }, "°")),
    onBlur: function (e, t) {
      var r = Number(e)
      var i = (r %= 360) / 180 * Math.PI
      e$onChange(n, i)
      p(true)
    },
    onFocus: function () {
      p(false)
    },
    dependency: s
  }))
})
var LO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "flipped" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig$label = e.formConfig.label
  var a = undefined === e$formConfig$label ? "flip" : e$formConfig$label
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = e$getValue(n) || {}
  var l = function (e) {
    e$onChange(n, Module_6.a(Module_6.a({}, c), {}, Module_11.a({}, e, !c[e])))
    var t = e$getValue("id")
    var i = e$getValue("parentId")
    var a = e$getValue("type")
    if (t && i && a === Src_editor_widget_builtIn_types.a) {
      setTimeout(function () {
        var e = Module_215.b(i)
        var n = (null === e || undefined === e ? undefined : e.actors.get_actor(t)) || {}
        var /* [auto-meaningful-name] */n$is_error = n.is_error
        var /* [auto-meaningful-name] */n$value = n.value
        if (n$is_error && n$value && !n$is_error(n$value)) {
          var s = n$value.get_position()
          var c = n$value.get_center_position()
          var l = {
            x: Math.round(c.x - s.x),
            y: Math.round(c.y - s.y)
          }
          e$onChange("pivotToCenter", Module_6.a({}, l))
        }
      }, 60)
    }
  }
  return React.createElement(Src_shared_ui_components_index.i, {
    align: "vertical",
    className: "".concat(Module_88.formItemWrapper, " ").concat(Module_88.formInputNumberRow)
  }, React.createElement("p", {
    className: "coco-form-item-label"
  }, useIntl$formatMessage({
    id: a
  })), React.createElement("div", {
    className: Module_88.formInputNumberRow
  }, React.createElement(Src_shared_ui_components_index.i, null, React.createElement(Zv, {
    hasIcon: true,
    className: c.horizontal ? Module_88.selected : "",
    onClick: l.bind(undefined, "horizontal")
  }, React.createElement("span", {
    className: Module_88.btnIcon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-actor-horizontal"
  })), useIntl$formatMessage({
    id: "horizontal"
  }))), React.createElement(Src_shared_ui_components_index.i, null, React.createElement(Zv, {
    hasIcon: true,
    className: c.vertical ? Module_88.selected : "",
    onClick: l.bind(undefined, "vertical")
  }, React.createElement("span", {
    className: Module_88.btnIcon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-actor-vertical"
  })), useIntl$formatMessage({
    id: "vertical"
  })))))
})
var PO = [[Module_144.e, Module_144.c], [Module_144.e, Module_144.c]]
var BO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "scaleAndLock" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$formConfig$scaleRange = e$formConfig.scaleRange
  var s = undefined === e$formConfig$scaleRange ? PO : e$formConfig$scaleRange
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var l = undefined === e$formConfig$label ? "actorScale" : e$formConfig$label
  var /* [auto-meaningful-name] */e$formConfig$multiple = e$formConfig.multiple
  var d = undefined === e$formConfig$multiple ? 100 : e$formConfig$multiple
  var p = {
    x: 1,
    y: 1,
    ratio: 1
  }
  var m = e$getValue("scale")
  var g = e$getValue(n) || (undefined !== m ? {
    x: m,
    y: m,
    ratio: false
  } : p)
  var _ = g.x
  var v = g.y
  var b = g.ratio || false
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var E = useRef({})
  var O = useCallback(function () {
    var /* [auto-meaningful-name] */E$current = E.current
    if (E$current && (undefined !== E$current.x || undefined !== E$current.y)) {
      e$onChange(n, E$current)
      E.current = {}
      var t = e$getValue("id")
      var i = e$getValue("parentId")
      var a = e$getValue("type")
      if (t && i && "scaleAndLock" === n && a === Src_editor_widget_builtIn_types.a) {
        setTimeout(function () {
          var e = Module_215.b(i)
          var n = (null === e || undefined === e ? undefined : e.actors.get_actor(t)) || {}
          var /* [auto-meaningful-name] */n$is_error = n.is_error
          var /* [auto-meaningful-name] */n$value = n.value
          if (n$is_error && n$value && !n$is_error(n$value)) {
            var s = n$value.get_position()
            var c = n$value.get_center_position()
            var l = {
              x: c.x - s.x,
              y: c.y - s.y
            }
            e$onChange("pivotToCenter", Module_6.a({}, l))
          }
        }, 60)
      }
    }
  }, [e$getValue, e$onChange, n])
  var w = useMemo(function () {
    return Lodash.debounce(O, 50)
  }, [O])
  var C = useCallback(function (e, t, n) {
    var r = Module_11.a({}, t, parseInt(n || "1") / d)
    if (b) {
      if ("x" === t) {
        r.y = r.x / b
        if (r.y > Module_144.c) {
          r.y = Module_144.c
          r.x = r.y * b
        }
        if (r.y < Module_144.e) {
          r.y = Module_144.e
          r.x = r.y * b
        }
      }
      if ("y" === t) {
        r.x = r.y * b
        if (r.x > Module_144.c) {
          r.x = Module_144.c
          r.y = r.x / b
        }
        if (r.x < Module_144.e) {
          r.x = Module_144.e
          r.y = r.x / b
        }
      }
    }
    var /* [auto-meaningful-name] */E$current = E.current
    E.current = Module_6.a(Module_6.a(Module_6.a({}, g), E$current), r)
    e()
  }, [d, b, g])
  var T = useMemo(function () {
    return C.bind(undefined, w, "x")
  }, [C, w])
  var S = useMemo(function () {
    return C.bind(undefined, w, "y")
  }, [C, w])
  useEffect(function () {
    if (undefined === e$getValue(n)) {
      e$onChange(n, p)
    }
  }, [])
  return React.createElement(Src_shared_ui_components_index.i, {
    align: "vertical",
    className: "".concat(Module_88.formItemWrapper, " ").concat(Module_88.formInputNumberRow)
  }, React.createElement("p", {
    className: "coco-form-item-label"
  }, useIntl$formatMessage({
    id: l
  })), React.createElement("div", {
    className: Module_88.formInputNumberRow
  }, React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames("changeWidth", Module_3971.formItem)
  }, React.createElement(Src_shared_ui_components_index.o, {
    label: useIntl$formatMessage({
      id: "width"
    }),
    defaultValue: Math.round(_ * d),
    type: "number",
    min: s[0][0] * d,
    max: s[0][1] * d,
    rules: [
      {
        rule: Module_53.w(9)
      }, {
        rule: Module_53.v
      }
    ],
    className: "".concat(Module_88.justifyInputContent, " coco-number-inputRow"),
    onChange: T,
    onStep: C.bind(undefined, O, "x")
  }), React.createElement("span", {
    className: Module_3971.placeholder
  }, Math.round(_ * d), "%")), React.createElement("div", {
    className: Module_3971.lockWrapper,
    onClick: function () {
      e$onChange(n, Module_6.a(Module_6.a({}, g), {}, {
        ratio: !b && g.x / g.y
      }))
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: false === b ? "icon-unlocked" : "icon-locked"
  })), React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames("changeHeight", Module_3971.formItem)
  }, React.createElement(Src_shared_ui_components_index.o, {
    label: useIntl$formatMessage({
      id: "height"
    }),
    defaultValue: Math.round(v * d),
    type: "number",
    min: s[1][0] * d,
    max: s[1][1] * d,
    rules: [
      {
        rule: Module_53.w(9)
      }, {
        rule: Module_53.v
      }
    ],
    className: "".concat(Module_88.justifyInputContent, " coco-number-inputRow"),
    onChange: S,
    onStep: C.bind(undefined, O, "y")
  }), React.createElement("span", {
    className: Module_3971.placeholder
  }, Math.round(v * d), "%"))))
})
export { MO }
export { LO }
export { BO }
