/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1512
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import { memo, useRef, useState, useLayoutEffect, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Styles_module_css from /* 472 */"./styles.module.css"
import /* [auto-meaningful-name] */Styles_module_css1 from /* 472 */"./styles.module.css"
import * as /* [auto-meaningful-name] */Widget_builtIn_types from /* 5 */"../../../widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../unrestored/shared/1571/2636/238"
var _a
_a = memo(function () {
  var t
  var n = useRef()
  var s = useRef(null)
  var p = useState(false)
  var b = Module_10.a(p, 2)
  var y = b[0]
  var E = b[1]
  var O = useRef(null)
  var w = useSelector(function (e) {
    return e.project.contextMenuInfo
  }).toJS()
  var /* [auto-meaningful-name] */w$position = w.position
  var /* [auto-meaningful-name] */w$visible = w.visible
  var /* [auto-meaningful-name] */w$widgetId = w.widgetId
  var A = Module_9.Bb(w$widgetId)
  var I = useSelector(function (e) {
    return e.project.screens
  })
  var j = null === (t = Module_238.d()) || undefined === t ? undefined : t.id
  useLayoutEffect(function () {
    var /* [auto-meaningful-name] */s$current = s.current
    if (w$visible && s$current) {
      var /* [auto-meaningful-name] */s$current$clientHeight = s$current.clientHeight
      var n = window.innerHeight - (w$position.y + t)
      if (n < 0) {
        w$position.y += n
      }
      s$current.style.top = w$position.y + "px"
      s$current.style.left = w$position.x + "px"
    }
  }, [w$visible, w$position])
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var R = useDispatch()
  useEffect(function () {
    var t = function t() {
      setImmediate(function () {
        R(Redux_common_actions.Wg())
        document.removeEventListener("mousedown", t, true)
      })
    }
    if (w$visible) {
      document.addEventListener("mousedown", t, true)
    }
    return function () {
      return document.removeEventListener("mousedown", t, true)
    }
  }, [R, w$visible])
  var k = function (e) {
    R(Redux_common_actions.Ef(Module_9.w(w$widgetId), e))
  }
  var x = function () {
    var /* [auto-meaningful-name] */n$current
    var t = null === (n$current = n.current) || undefined === n$current ? undefined : n$current.id
    if (j && t) {
      R(Redux_common_actions.Mf(t, j))
    }
  }
  var D = function () {
    n.current = undefined
  }
  useLayoutEffect(function () {
    var /* [auto-meaningful-name] */O$current = O.current
    if (O$current) {
      if (y) {
        var t = O$current.getClientRects()[0]
        var n = t.height + t.y - window.innerHeight
        if (n > 0) {
          O$current.style.top = O$current.offsetTop - n + "px"
        }
      } else {
        O$current.style.top = "10px"
      }
    }
  }, [y])
  return React1.createElement("div", {
    className: Styles_module_css1.wrapper,
    ref: s,
    style: {
      display: w$visible ? "block" : "none"
    }
  }, React1.createElement("div", {
    className: Classnames1(Styles_module_css1.menuItem),
    onMouseDown: function () {
      R(Redux_common_actions.Ef(Module_9.w(w$widgetId)))
    }
  }, useIntl$formatMessage({
    id: "copyAndPaste"
  })), ![Widget_builtIn_types.a, Widget_builtIn_types.c].includes((null === A || undefined === A ? undefined : A.type) || "") && React1.createElement("div", {
    className: Classnames1(Styles_module_css1.menuItem, Styles_module_css1.copyTo),
    onMouseEnter: function () {
      E(true)
    },
    onMouseLeave: function () {
      E(false)
    }
  }, React1.createElement("span", null, useIntl$formatMessage({
    id: "copyTo"
  })), " ", React1.createElement(Shared_ui_components_index.j, {
    type: "icon-right"
  }), React1.createElement("ul", {
    ref: O,
    className: Styles_module_css1.screens,
    style: {
      display: y ? "block" : "none"
    }
  }, I.map(function (e, t) {
    return React1.createElement("li", {
      key: e.get("id"),
      onMouseDown: k.bind(null, e.id)
    }, React1.createElement("span", null, "".concat(t + 1, ".")), React1.createElement("div", {
      className: Styles_module_css1.screenSnapshot
    }, React1.createElement("img", {
      src: e.get("snapshot"),
      alt: ""
    })), React1.createElement("p", null, e.get("title")))
  }))), React1.createElement("div", {
    onMouseDown: function () {
      var e = Module_9.Fb(w$widgetId || "")
      var t = useIntl$formatMessage({
        id: "deleteWidget"
      }) + "“" + Module_190.f(e, 10) + "”?"
      var r = Module_26.z.checkFieldValueIsSelected("WIDGET_ID", w$widgetId)
      var o = Module_26.z.checkSomeFieldValueIsSelected("WIDGET_ID", Module_9.U(w$widgetId))
      if (r || o) {
        n.current = Module_9.Bb(w$widgetId)
        R(Redux_common_actions.zh({
          onConfirm: x,
          onClose: D,
          allowText: useIntl$formatMessage({
            id: "delete"
          }),
          title: t,
          isDangerous: true,
          content: useIntl$formatMessage({
            id: o ? "deleteParentWidgetTips" : "deleteWidgetTips"
          })
        }))
      } else {
        if (j) {
          R(Redux_common_actions.Mf(w$widgetId, j))
        }
      }
    },
    className: Classnames1(Styles_module_css1.menuItem, Styles_module_css1.delete)
  }, useIntl$formatMessage({
    id: "delete"
  })))
})
export { _a as a }
export default _a
