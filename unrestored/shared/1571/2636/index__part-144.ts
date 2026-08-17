/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-144
 */

"use strict"

import /* [auto-meaningful-name] */Module_99 from /* 99 */"./99"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"./238"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useEffect, useCallback, useLayoutEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1040 from /* 1040 */"./1040"
import /* [auto-meaningful-name] */Module_10401 from /* 1040 */"./1040"
var eT = new Map()
function tT(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] && arguments[2]
  if (e) {
    eT.set(e.nodeName, t)
    if ("undefined" !== typeof document) {
      document.addEventListener("click", function (r) {
        if (n) {
          t(e, r)
        } else {
          if (!e.contains(r.target)) {
            t(e, r)
          }
        }
      })
    }
    return function () {
      eT.delete(e)
    }
  }
}
var nT = memo(function () {
  var e = useSelector(function (e) {
    return e.block.get("editArrayDialog")
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$array = e.array
  var /* [auto-meaningful-name] */e$arrayType = e.arrayType
  var o = useState([])
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = useState(0)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useRef(1)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var g = useRef(null)
  var v = useRef(null)
  var b = useDispatch()
  var y = Module_238.d()
  useEffect(function () {
    if (e$array) {
      s(Module_25.a(e$array.defaultValue))
      d(e$array.defaultValue.length)
    }
  }, [e$array])
  useEffect(function () {
    var e
    if (v.current) {
      e = tT(v.current.button, function (e, t) {
        var /* [auto-meaningful-name] */t$target
        if ("INPUT" !== (null === (t$target = t.target) || undefined === t$target ? undefined : t$target.tagName)) {
          p.current = 0
        }
      })
    }
    return e && e()
  }, [])
  useEffect(function () {
    var /* [auto-meaningful-name] */g$current
    if (e$visible) {
      if (!(null === (g$current = g.current) || undefined === g$current)) {
        g$current.focus()
      }
      Module_26.z.unselectCurrentBlock()
    }
  }, [e$visible])
  var E = function (e) {
    d(e)
  }
  var O = useCallback(function (e) {
    var t = Number(e) - a.length
    if (t > 0) {
      for (var n = 0; n < t; n++) {
        a.push("")
      }
    } else {
      a.splice(Number(e), a.length)
    }
    s(Module_25.a(a))
    d(a.length)
    p.current = 0
  }, [a])
  var w = function (e, t) {
    if (13 === t.keyCode) {
      var n = e + 1
      a.splice(n, 0, "")
      s(Module_25.a(a))
      E(n + 1)
      setTimeout(function () {
        var e = document.querySelectorAll(".".concat(Module_99.list, " input"))[n]
        if (!(null === e || undefined === e)) {
          e.focus()
        }
      }, 0)
    }
  }
  useLayoutEffect(function () {
    if (p.current) {
      var e = document.querySelectorAll(".".concat(Module_99.list, " input"))[u - 1]
      if (!(null === e || undefined === e)) {
        e.focus()
      }
    }
  }, [u])
  var C = useCallback(function (e) {
    a.splice(e, 1)
    s(Module_25.a(a))
    d(a.length)
    p.current = 0
  }, [a])
  var T = useCallback(function (e, t) {
    a.splice(e, 1, t)
    s(Module_25.a(a))
  }, [a])
  var A = useCallback(function () {
    b(Src_editor_redux_common_actions.oh())
  }, [b])
  var j = useCallback(function () {
    p.current = 0
    if (e$array && y) {
      var e = []
      a.forEach(function (t) {
        if ("string" === typeof t) {
          e.push(Src_shared_tools_index.mb(t))
        } else {
          e.push(t)
        }
      })
      var /* [auto-meaningful-name] */e$array$id = e$array.id
      b(Src_editor_redux_common_actions.yg(e$arrayType || Module_18.i.SCREEN, e$array$id, "defaultValue", e, y.id))
    }
    A()
  }, [e$array, y, A, a, b, e$arrayType])
  useEffect(function () {
    function e(e) {
      var /* [auto-meaningful-name] */e$clipboardData
      var n = null === (e$clipboardData = e.clipboardData) || undefined === e$clipboardData ? undefined : e$clipboardData.getData("text")
      if (n) {
        n.split("\n").forEach(function (e, t) {
          T(t, e)
        })
      }
    }
    if (e$visible && 0 === a.length) {
      document.body.addEventListener("paste", e)
    }
    return function () {
      document.body.removeEventListener("paste", e)
    }
  }, [e$visible, T, a])
  return React.createElement(Src_shared_ui_components_index.f, {
    className: Classnames(Module_99.editListDialog, Module_99.editDialog),
    visible: e$visible,
    withPortal: true,
    onClose: A
  }, React.createElement("p", {
    className: Module_99.dialogTitle
  }, useIntl$formatMessage({
    id: "editVariableList"
  })), React.createElement("div", {
    className: Module_99.summary
  }, React.createElement("span", null, null === e$array || undefined === e$array ? undefined : e$array.name), React.createElement("div", {
    className: Module_99.count
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "itemCount"
  })), React.createElement(Src_shared_ui_components_index.k, {
    type: "number",
    min: 0,
    max: 1e3,
    onBlur: O,
    ref: g,
    className: Module_99.input,
    defaultValue: a.length || "0",
    dependency: a.length.toString()
  }), React.createElement(Src_shared_ui_components_index.d, {
    onClick: function () {
      if (!p.current) {
        a.push("")
        s(Module_25.a(a))
        E(a.length)
        return void (p.current = 1)
      }
      p.current = 1
      if (a.length < 1e3) {
        var e = u + 1
        a.splice(u, 0, "")
        s(Module_25.a(a))
        E(e)
      }
    },
    type: "primary",
    ref: v
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  })))), React.createElement("div", {
    className: Module_99.list
  }, a.length > 0 ? React.createElement("ul", null, a.map(function (e, t) {
    return React.createElement("li", {
      className: Module_99.listItem,
      key: t
    }, React.createElement(Src_shared_ui_components_index.k, {
      type: "text",
      before: React.createElement("div", {
        className: Module_99.inputLabel
      }, t + 1),
      after: React.createElement("div", {
        className: Module_99.inputClose,
        onClick: C.bind(null, t)
      }, "x"),
      onClick: function (e) {
        e.currentTarget.select()
        p.current = 1
        E(t + 1)
      },
      className: Module_99.listInput,
      defaultValue: e,
      onBlur: T.bind(null, t),
      dependency: a.length.toString(),
      onKeyDown: w.bind(null, t)
    }))
  })) : React.createElement("div", {
    className: Module_99.emptyContent
  }, React.createElement("img", {
    className: Module_99.image,
    src: Module_10401,
    alt: ""
  }), React.createElement("div", {
    className: Module_99.label
  }, useIntl$formatMessage({
    id: "variableListEmptyContentLabel"
  })))), React.createElement(Src_shared_ui_components_index.d, {
    className: Module_99.save,
    type: "primary",
    onClick: j
  }, useIntl$formatMessage({
    id: "save"
  })))
})
export { tT }
export { nT }
