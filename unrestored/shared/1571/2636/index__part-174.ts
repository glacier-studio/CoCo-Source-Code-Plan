/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-174
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"./64/index"
import * as /* [auto-meaningful-name] */AgGridReact from /* 417 */"ag-grid-react"
import /* 653 */"./653"
import /* 654 */"./654"
var EI = function (e, t, n) {
  var r = e.getModel().getRow(t)
  if (r) {
    var o = r.data[n]
    navigator.clipboard.writeText(o)
  }
}
var OI = function (e, t) {
  var n = ""
  e.getModel().forEachNode(function (e) {
    var r = e.data[t] || " "
    n = n.length ? "".concat(n, "\r\n").concat(r) : "".concat(r)
  })
  navigator.clipboard.writeText(n)
}
var wI = function (e, t) {
  var n = e.getModel().getRow(t)
  if (n) {
    var r = ""
    e.getColumnDefs().forEach(function (e) {
      if (!e.pinned) {
        var /* [auto-meaningful-name] */e$colId = e.colId
        if (e$colId) {
          var o = n.data[e$colId] || " "
          r = r.length ? "".concat(r, "\t").concat(o) : "".concat(o)
        }
      }
    })
    r = "".concat(r, "\r\n")
    navigator.clipboard.writeText(r)
  }
}
var CI = function (e, t, n, r) {
  var o = SI(e, n)
  var /* [auto-meaningful-name] */o$columnDefRecord = o.columnDefRecord
  var /* [auto-meaningful-name] */o$startColumnIndex = o.startColumnIndex
  var /* [auto-meaningful-name] */o$columnCount = o.columnCount
  var c = e.getModel().getRowCount()
  var l = o$startColumnIndex
  var u = r
  var d = false
  t.split("\r\n").forEach(function (t) {
    if (t) {
      l = o$startColumnIndex
      if (u >= c) {
        var n = {}
        n.rowId = Module_64.a("ROW")
        var r = {
          add: [n]
        }
        e.applyTransaction(r)
      }
      for (var o = t.split("\t"), p = 0; p < o.length; p++) {
        var f
        if (l >= o$columnCount) {
          l = o$startColumnIndex
          d = true
          break
        }
        var h = o$columnDefRecord[l]
        var m = null === (f = e.getModel().getRow(u)) || undefined === f ? undefined : f.id
        if (m) {
          AI(e, o[p], m, h)
        }
        l++
      }
      u++
    }
  })
  return d
}
var TI = function (e) {
  return e.getColumnDefs()[2].colId || ""
}
var SI = function (e, t) {
  var n = {}
  var r = 0
  var o = 0
  e.getColumnDefs().forEach(function (e) {
    if (!e.pinned) {
      var /* [auto-meaningful-name] */e$colId = e.colId
      if (e$colId) {
        n[r] = e$colId
        if (e$colId === t) {
          o = r
        }
      }
      r++
    }
  })
  return {
    columnDefRecord: n,
    startColumnIndex: o,
    columnCount: r
  }
}
var AI = function (e, t, n, r) {
  var o = e.getRowNode(n)
  if (o) {
    o.setDataValue(r, t)
  }
}
export { EI }
export { OI }
export { wI }
export { CI }
export { TI }
