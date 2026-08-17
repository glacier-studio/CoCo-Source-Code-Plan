/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-145
 */

"use strict"

import { tT } from "./index__part-144"
import /* [auto-meaningful-name] */Module_1040 from /* 1040 */"./1040"
import /* [auto-meaningful-name] */Module_99 from /* 99 */"./99"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"./238"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState, useEffect, useCallback } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_440 from /* 440 */"./440"
import /* [auto-meaningful-name] */Module_4401 from /* 440 */"./440"
var iT = memo(function () {
  var e = useSelector(function (e) {
    return e.block.get("editObjectDialog")
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$variable = e.variable
  var /* [auto-meaningful-name] */e$scopeType = e.scopeType
  var o = null === e$variable || undefined === e$variable ? undefined : e$variable.id
  var i = useSelector(function (e) {
    return e.project.globalObjectList
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var s = useRef(null)
  var c = Module_238.d()
  var l = useState(false)
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = useState(0)
  var g = Module_10.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useState(0)
  var E = Module_10.a(y, 2)
  var O = E[0]
  var w = E[1]
  var C = useState([])
  var T = Module_10.a(C, 2)
  var A = T[0]
  var j = T[1]
  var R = useRef(false)
  var D = useRef(0)
  var M = useRef(null)
  useEffect(function () {
    if (c && e$visible) {
      var e = c.objectVariables.concat(i).find(function (e) {
        return e.id === o
      })
      if (e && Lodash.isPlainObject(e.defaultValue)) {
        var n = Lodash.cloneDeep(e.defaultValue)
        var r = Object.entries(n)
        j(r)
      }
    }
  }, [c, i, o, e$visible])
  var L = function (e) {
    var t = 2 * e + O
    setTimeout(function () {
      var /* [auto-meaningful-name] */s$current
      var n = null === (s$current = s.current) || undefined === s$current ? undefined : s$current.querySelectorAll("input")[t]
      if (n) {
        if (R.current) {
          n.select()
        } else {
          n.focus()
        }
        R.current = false
      }
    })
  }
  useEffect(function () {
    if (e$visible) {
      p(false)
      b(0)
      w(0)
      D.current = 0
    }
  }, [e$visible])
  useEffect(function () {
    if (M.current) {
      return tT(M.current.button, function (e, t) {
        var /* [auto-meaningful-name] */M$current
        var /* [auto-meaningful-name] */M$current$button
        var /* [auto-meaningful-name] */t$target
        if (!((null === (M$current = M.current) || undefined === M$current || null === (M$current$button = M$current.button) || undefined === M$current$button ? undefined : M$current$button.contains(t.target)) || "INPUT" === (null === (t$target = t.target) || undefined === t$target ? undefined : t$target.tagName))) {
          D.current = 0
        }
      }, true)
    }
  }, [M.current])
  var P = useDispatch()
  useEffect(function () {
    if (e$visible) {
      Module_26.z.unselectCurrentBlock()
    }
  }, [e$visible])
  var B = function () {
    for (var e = A.map(function (e) {
        return e[0]
      }), t = 1; e.includes("key".concat(t));) {
      t++
    }
    var n = "key".concat(t)
    if (!D.current) {
      A.push([n, ""])
      j(Module_25.a(A))
      b(A.length)
      D.current = 1
      L(A.length)
      return void setTimeout(function () {
        if (s.current) {
          s.current.scrollTop = s.current.scrollHeight
        }
      }, 0)
    }
    A.splice(v + 1, 0, [n, ""])
    j(Module_25.a(A))
    b(v + 1)
    L(v + 1)
    if (v === A.length - 1) {
      setTimeout(function () {
        if (s.current) {
          s.current.scrollTop = s.current.scrollHeight
        }
      }, 0)
    }
  }
  var F = useCallback(function () {
    P(Src_editor_redux_common_actions.ph())
  }, [P])
  var G = useCallback(function () {
    if (e$scopeType && o && c) {
      var e = {}
      A.forEach(function (t) {
        var n = Module_10.a(t, 2)
        var r = n[0]
        var o = n[1]
        e[r] = o
      })
      P(Src_editor_redux_common_actions.Gg({
        scopeType: e$scopeType,
        id: o,
        key: "defaultValue",
        value: e,
        screenId: c.id
      }))
      F()
    }
  }, [c, P, A, F, o, e$scopeType])
  var W = function (e, t) {
    if ("Enter" === e.key) {
      if (t === A.length - 1) {
        B()
        if (0 === O) {
          R.current = true
        }
      } else {
        b(t + 1)
        L(t + 1)
      }
    }
  }
  return e$variable ? React.createElement(Src_shared_ui_components_index.f, {
    className: Classnames(Module_99.editDialog, Module_4401.container),
    visible: e$visible,
    withPortal: true,
    onClose: F
  }, React.createElement("p", {
    className: Module_99.dialogTitle
  }, useIntl$formatMessage({
    id: "object.editObjectList"
  })), React.createElement("div", {
    className: Module_99.summary
  }, React.createElement("span", null, e$variable.name), React.createElement("div", {
    className: Module_99.count
  }, React.createElement(Src_shared_ui_components_index.d, {
    onClick: B,
    type: "primary",
    ref: M
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  })))), React.createElement("div", {
    className: Classnames(Module_99.list, Module_4401.list),
    ref: s
  }, A.length > 0 ? React.createElement("ul", null, A.map(function (e, t) {
    var n = Module_10.a(e, 2)
    var r = n[0]
    var o = n[1]
    return React.createElement("li", {
      className: Classnames(Module_4401.row, Module_11.a({}, Module_4401.focus, t === v)),
      key: r
    }, React.createElement("div", {
      className: Module_4401.keyItem
    }, React.createElement("input", {
      type: "text",
      defaultValue: r,
      className: Classnames(Module_4401.input, Module_11.a({}, Module_4401.error, d && v === t)),
      onClick: function () {
        D.current = 1
        b(t)
        w(0)
      },
      onBlur: function (e) {
        !function (e, t) {
          var n = [e.target.value, A[t][1]]
          if (d) {
            var r = A[t][0]
            e.target.value = r
          } else {
            A.splice(t, 1, n)
            j(Module_25.a(A))
          }
          p(false)
        }(e, t)
      },
      onChange: function (e) {
        !function (e, t) {
          var /* [auto-meaningful-name] */e$target$value = e.target.value
          var r = A.some(function (e, r) {
            return t !== r && e[0] === e$target$value
          })
          if (r !== d) {
            p(r)
          }
        }(e, t)
      },
      onKeyPress: function (e) {
        W(e, t)
      }
    })), React.createElement("div", {
      className: Module_4401.valueItem
    }, React.createElement("input", {
      type: "text",
      value: o,
      className: Classnames(Module_4401.input),
      onBlur: function (e) {
        !function (e, t) {
          var /* [auto-meaningful-name] */e$target$value = e.target.value
          if ("" !== e$target$value) {
            var r = Number(e$target$value)
            if (!isNaN(r)) {
              e$target$value = r
            }
          }
          var o = [A[t][0], e$target$value]
          A.splice(t, 1, o)
          j(Module_25.a(A))
        }(e, t)
      },
      onClick: function () {
        D.current = 1
        b(t)
        w(1)
      },
      onKeyPress: function (e) {
        W(e, t)
      },
      onChange: function (e) {
        A[t][1] = e.target.value
        j(Module_25.a(A))
      }
    })), React.createElement("span", {
      className: Module_4401.close,
      onClick: function () {
        !function (e) {
          A.splice(e, 1)
          j(Module_25.a(A))
        }(t)
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-close"
    })))
  })) : React.createElement("div", {
    className: Module_99.emptyContent
  }, React.createElement("img", {
    className: Module_99.image,
    src: Module_1040,
    alt: ""
  }), React.createElement("div", {
    className: Module_99.label
  }, useIntl$formatMessage({
    id: "variableListEmptyContentLabel"
  })))), React.createElement("div", {
    className: Module_4401.footer
  }, React.createElement("p", {
    className: Module_4401.tips
  }, d ? useIntl$formatMessage({
    id: "object.keyRepeat"
  }) : ""), React.createElement(Src_shared_ui_components_index.d, {
    className: Module_4401.save,
    type: "primary",
    onClick: G,
    disabled: d
  }, useIntl$formatMessage({
    id: "save"
  })))) : null
})
export { iT }
