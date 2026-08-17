/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-218
 */

"use strict"

import { rA } from "./index__part-160"
import * as /* [auto-meaningful-name] */AgGridReact from /* 417 */"ag-grid-react"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"./20/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1220 from /* 1220 */"./1220/index"
import /* [auto-meaningful-name] */Module_12201 from /* 1220 */"./1220/index"
import * as /* [auto-meaningful-name] */Module_1221 from /* 1221 */"./1221"
import * as /* [auto-meaningful-name] */Module_529 from /* 529 */"./529"
import /* [auto-meaningful-name] */Module_5291 from /* 529 */"./529"
var oB = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var /* [auto-meaningful-name] */useSelectorFunctionEReturnE$dataWatch$tableDataDialog$id = useSelector(function (e) {
    return e.dataWatch.tableDataDialog
  }).id
  var n = useSelector(function (e) {
    return e.dataWatch.variableList
  })
  var r = useState()
  var o = Module_10.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = n.find(function (e) {
    return e.id === useSelectorFunctionEReturnE$dataWatch$tableDataDialog$id
  })
  if (!s) {
    return null
  }
  var /* [auto-meaningful-name] */s$value = s.value
  var /* [auto-meaningful-name] */s$value$header = s$value.header
  var /* [auto-meaningful-name] */s$value$data = s$value.data
  if (!(null === i || undefined === i)) {
    i.setRowData(s$value$data)
  }
  var d = {
    onGridReady: function (e) {
      a(e.api)
    },
    context: {
      animationHeaders: [],
      lastFocusedCell: {
        rowIndex: undefined,
        columnId: undefined
      },
      scrollToRowIndex: -1
    },
    getRowHeight: function (e) {
      return 32
    },
    enableCellChangeFlash: false,
    suppressColumnVirtualisation: true,
    suppressMovableColumns: true,
    suppressScrollOnNewData: true,
    alwaysShowHorizontalScroll: true,
    frameworkComponents: {
      agColumnHeader: function (e) {
        return React.createElement("div", {
          className: Module_5291.gridHeaderCell
        }, e.displayName)
      },
      indexCellRenderer: function (e) {
        return React.createElement("div", null, e.rowIndex + 1)
      },
      baseCellRenderer: function (e) {
        return React.createElement("div", {
          className: Module_5291.baseCell
        }, e.value)
      }
    },
    overlayNoRowsTemplate: useIntl$formatMessage({
      id: "noData"
    })
  }
  return React.createElement("div", {
    className: "ag-theme-alpine"
  }, React.createElement(AgGridReact.AgGridReact, {
    gridOptions: d
  }, React.createElement(AgGridReact.AgGridColumn, {
    colId: "indexColumn",
    headerName: "",
    field: "indexColumn",
    key: "index",
    editable: false,
    resizable: false,
    width: 60,
    pinned: "left",
    cellRenderer: "indexCellRenderer"
  }), Object.entries(s$value$header).map(function (e) {
    var t = Module_10.a(e, 2)
    var n = t[0]
    var r = t[1]
    return React.createElement(AgGridReact.AgGridColumn, {
      colId: n,
      headerName: r.field,
      field: n,
      key: n,
      editable: false,
      resizable: true,
      minWidth: 150,
      width: r.width,
      cellRenderer: "baseCellRenderer"
    })
  })))
})
var iB = function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useState({
    x: document.body.clientWidth - 886,
    y: 100
  })
  var r = Module_10.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = useState(0)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState(0)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState(0)
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = useState(0)
  var C = Module_10.a(w, 2)
  var T = C[0]
  var j = C[1]
  var R = useState(876)
  var k = Module_10.a(R, 2)
  var x = k[0]
  var D = k[1]
  var M = useState(540)
  var L = Module_10.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = useRef(x)
  var G = useRef(P)
  var W = useSelector(function (e) {
    return e.project.playing
  })
  var U = useSelector(function (e) {
    return e.dataWatch.tableDataDialog
  })
  var H = U.id
  var /* [auto-meaningful-name] */U$visible = U.visible
  var K = useSelector(function (e) {
    return e.dataWatch.variableList
  }).find(function (e) {
    return e.id === H
  })
  var q = useState(false)
  var X = Module_10.a(q, 2)
  var Q = X[0]
  var Z = X[1]
  if (!K) {
    return null
  }
  if (!U$visible) {
    return null
  }
  var J = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!H) {
                e.next = 4
                break
              }
              e.next = 3
              return Module_20.resetTableDataIndexedDB(H)
            case 3:
              Z(true)
            case 4:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  return React.createElement("div", {
    className: Module_5291.container
  }, React.createElement(Module_12201, {
    allowAnyClick: true,
    position: o,
    onDrag: function (e, t) {
      i({
        x: t.x,
        y: Math.max(t.y, -16)
      })
    },
    handle: ".handle"
  }, React.createElement(Module_1221.a, {
    defaultSize: {
      width: x,
      height: P
    },
    minWidth: 300,
    minHeight: 300,
    maxWidth: document.body.clientWidth,
    maxHeight: document.body.clientHeight,
    onResize: function (e, t, n, r) {
      var a = o.x
      var s = o.y
      switch (t) {
        case "left":
          a = c - (b + r.width)
          break
        case "top":
          s = p - (T + r.height)
          break
        case "bottomLeft":
          a = c - (b + r.width)
          break
        case "topLeft":
          a = c - (b + r.width)
          s = p - (T + r.height)
          break
        case "topRight":
          s = p - (T + r.height)
      }
      i({
        x: a,
        y: Math.max(s, -16)
      })
      D(F.current + r.width)
      B(G.current + r.height)
    },
    onResizeStart: function (e, t, n, r) {
      var /* [auto-meaningful-name] */n$getBoundingClientRect$right = n.getBoundingClientRect().right
      var /* [auto-meaningful-name] */n$getBoundingClientRect$bottom = n.getBoundingClientRect().bottom
      var /* [auto-meaningful-name] */n$offsetWidth = n.offsetWidth
      var /* [auto-meaningful-name] */n$offsetHeight = n.offsetHeight
      l(n$getBoundingClientRect$right)
      m(n$getBoundingClientRect$bottom)
      y(n$offsetWidth)
      j(n$offsetHeight)
    },
    onResizeStop: function () {
      F.current = x
      G.current = P
    }
  }, React.createElement("div", {
    className: Module_5291.wrapper,
    style: {
      width: x,
      height: P
    }
  }, React.createElement("div", {
    className: Classnames(Module_5291.header, "handle")
  }, React.createElement("div", {
    className: Module_5291.toast
  }, React.createElement(rA, {
    visible: Q,
    toast: "".concat(K.name),
    showIcon: true,
    setVisible: Z
  })), React.createElement("div", {
    className: Module_5291.name
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-widget-table-data"
  }), React.createElement("span", null, K.name)), React.createElement("div", {
    className: Module_5291.actions
  }, W ? "" : React.createElement(Module_748.a, {
    placement: "bottom",
    trigger: ["hover"],
    title: useIntl$formatMessage({
      id: "resetData"
    })
  }, React.createElement("div", {
    className: Module_5291.closeIconBox,
    onClick: J
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-resetData"
  }))), React.createElement("div", {
    className: Module_5291.closeIconBox,
    onClick: function () {
      e(Src_editor_redux_common_actions.aj(false))
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-close-bold"
  })))), React.createElement(oB, null)))))
}
export { iB }
