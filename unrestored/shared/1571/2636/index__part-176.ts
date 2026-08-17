/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-176
 */

"use strict"

import { Sg } from "./index__part-79"
import { DI } from "./index__part-175"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"./47"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useState, useEffect, memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_619 from /* 619 */"./619"
import /* [auto-meaningful-name] */Module_6191 from /* 619 */"./619"
var PI = function (e) {
  var t = useSelector(function (e) {
    return e.project.globalWidgetIds
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = useRef(null)
  var o = useState(e.gridName)
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState("")
  var m = Module_10.a(p, 2)
  var g = m[0]
  var v = m[1]
  useEffect(function () {
    s(e.gridName)
  }, [e.gridName])
  useEffect(function () {
    if (u && r.current) {
      r.current.focus()
    }
  }, [u])
  var b = [
    {
      validator: function (e) {
        var n = []
        t.forEach(function (e) {
          var t = Module_9.dc.get(e)
          if ((null === t || undefined === t ? undefined : t.type) === Src_editor_widget_builtIn_types.m) {
            n.push(t)
          }
        })
        return !n.some(function (t) {
          return t.title === e
        })
      },
      message: useIntl$formatMessage({
        id: "gridNameRepeat"
      })
    }
  ].concat(Module_25.a(Sg(useIntl$formatMessage)))
  return React.createElement("div", null, u ? React.createElement("div", {
    className: Module_6191.gridNameEditorContainer
  }, React.createElement("input", {
    className: Module_6191.gridNameEditor,
    maxLength: Module_53.j,
    ref: r,
    defaultValue: a,
    placeholder: useIntl$formatMessage({
      id: "addGridNamePlaceholder"
    }),
    onChange: function (t) {
      var n
      var o = ""
      var i = false
      var a = Module_47.a(b)
      try {
        for (a.s(); !(n = a.n()).done;) {
          var /* [auto-meaningful-name] */n$value = n.value
          if (!n$value.validator(t.target.value)) {
            o = n$value.message
            i = true
            break
          }
        }
      } catch (c) {
        a.e(c)
      } finally {
        a.f()
      }
      v(o)
      e.setDisabled(i)
      if (r.current) {
        if (o) {
          r.current.classList.add(Module_6191.invalidGridName)
        } else {
          r.current.classList.remove(Module_6191.invalidGridName)
        }
      }
    },
    onKeyPress: function (e) {
      if ("Enter" === e.key && r.current) {
        r.current.blur()
      }
    },
    onBlur: function (t) {
      d(!u)
      if (g) {
        e.setDisabled(false)
      } else {
        var /* [auto-meaningful-name] */t$target$value = t.target.value
        s(t$target$value)
        e.setGridName(t$target$value)
      }
    }
  }), React.createElement("div", {
    className: Module_6191.warningMessage
  }, g)) : React.createElement("div", {
    className: Module_6191.gridName
  }, React.createElement("span", null, a), React.createElement("span", {
    onClick: function () {
      d(true)
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-edit"
  }))))
}
var BI = memo(function () {
  var e = useSelector(function (e) {
    return e.common.gridDialog
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$grid = e.grid
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$isCreateNewGrid = e.isCreateNewGrid
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = useDispatch()
  var s = useState(false)
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState()
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState("")
  var b = Module_10.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = useState({})
  var w = Module_10.a(O, 2)
  var C = w[0]
  var T = w[1]
  var A = useState([])
  var j = Module_10.a(A, 2)
  var N = j[0]
  var R = j[1]
  useEffect(function () {
    if (e$visible) {
      a(Src_editor_redux_common_actions.ki("grid"))
      E(e$grid.name)
      T(Lodash.cloneDeep(e$grid.header))
      R(Lodash.cloneDeep(e$grid.data))
    }
  }, [a, e$visible, e$grid])
  var k = function () {
    var e = {}
    var t = []
    if (!(null === m || undefined === m)) {
      m.getColumnDefs().map(function (t) {
        var /* [auto-meaningful-name] */t$colId = t.colId
        var /* [auto-meaningful-name] */t$headerName = t.headerName
        if (t$colId && t$headerName) {
          e[t$colId] = {
            field: t$headerName
          }
        }
      })
    }
    if (!(null === m || undefined === m)) {
      m.getModel().forEachNode(function (e) {
        t.push(e.data)
      })
    }
    return {
      header: e,
      data: t
    }
  }
  var x = function () {
    a(Src_editor_redux_common_actions.oi(""))
    a(Src_editor_redux_common_actions.ri("", ""))
    a(Src_editor_redux_common_actions.ni("", ""))
  }
  var D = function () {
    x()
    if (e$onClose) {
      e$onClose(e$grid.id, {
        newName: undefined,
        deleteColumnIdList: undefined,
        isCreateNewGrid: e$isCreateNewGrid
      })
    }
    a(Src_editor_redux_common_actions.qh())
  }
  var M = function () {
    if (!(null === m || undefined === m)) {
      m.stopEditing()
    }
    var e = k()
    var /* [auto-meaningful-name] */e$header = e.header
    var /* [auto-meaningful-name] */e$data = e.data
    if (Lodash.isEqual(e$data, e$grid.data) && Lodash.isEqual(e$header, e$grid.header) && y === e$grid.name) {
      D()
    } else {
      a(Src_editor_redux_common_actions.zh({
        onConfirm: function () {
          D()
        },
        allowText: useIntl$formatMessage({
          id: "giveUp"
        }),
        title: useIntl$formatMessage({
          id: "giveUpTitle"
        }),
        content: useIntl$formatMessage({
          id: "giveUpTips"
        })
      }))
    }
  }
  var L = React.createElement("div", null, React.createElement(Src_shared_ui_components_index.d, {
    type: "default",
    onClick: M
  }, useIntl$formatMessage({
    id: "cancel"
  })), React.createElement(Src_shared_ui_components_index.d, {
    type: "primary",
    disabled: l,
    onClick: function () {
      if (!(null === m || undefined === m)) {
        m.stopEditing()
      }
      var e = k()
      var /* [auto-meaningful-name] */e$header = e.header
      var /* [auto-meaningful-name] */e$data = e.data
      x()
      var s = ""
      var c = false
      var l = []
      if (y !== e$grid.name) {
        s = y
        a(Src_editor_redux_common_actions.Lg(e$grid.id, "title", y, false, false, true))
      }
      if (!Lodash.isEqual(e$header, e$grid.header)) {
        c = true
      }
      if (c || !Lodash.isEqual(e$data, e$grid.data)) {
        if (c) {
          var u = Object.keys(e$header)
          for (var d in e$grid.header) if (!u.includes(d)) {
            l.push(d)
          }
        }
        a(Src_editor_redux_common_actions.Lg(e$grid.id, "db", {
          header: e$header,
          data: e$data
        }, false, false, true))
      }
      if (e$onClose) {
        e$onClose(e$grid.id, {
          newName: s,
          deleteColumnIdList: l,
          isCreateNewGrid: e$isCreateNewGrid
        })
      }
      a(Src_editor_redux_common_actions.qh())
    }
  }, useIntl$formatMessage({
    id: "confirm"
  })))
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: e$visible,
    className: Module_6191.dataViewerGrid,
    title: React.createElement(PI, {
      gridName: y,
      setDisabled: function (e) {
        u(e)
      },
      setGridName: function (e) {
        E(e)
      }
    }),
    footer: L,
    onClose: M
  }, e$visible && React.createElement(DI, {
    id: e$grid.id,
    header: C,
    data: N,
    onGridReady: function (e) {
      g(e)
    },
    visible: e$visible,
    allowEditHeader: true,
    columnUseType: false,
    resizeColumnNumber: 14,
    setSaveDisabled: function (e) {
      u(e)
    }
  }))
})
export { BI }
