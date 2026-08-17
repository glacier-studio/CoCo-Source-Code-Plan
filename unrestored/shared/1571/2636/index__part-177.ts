/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-177
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"./64/index"
import * as /* [auto-meaningful-name] */Module_796 from /* 796 */"./796/index"
import * as /* [auto-meaningful-name] */Module_91 from /* 91 */"./91"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"./48/index"
var UI = function (e, t, n) {
  var r = e.getModel().getRow(t)
  if (r) {
    var o = r.data[n]
    navigator.clipboard.writeText(o)
  }
}
var HI = function (e, t) {
  var n = ""
  e.getModel().forEachNode(function (e) {
    var r = e.data[t] || " "
    n = n.length ? "".concat(n, "\r\n").concat(r) : "".concat(r)
  })
  navigator.clipboard.writeText(n)
}
var VI = function (e, t) {
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
var zI = function (e, t, n, r) {
  for (var o = KI(e, n), /* [auto-meaningful-name] */o$columnDefRecord = o.columnDefRecord, /* [auto-meaningful-name] */o$startColumnIndex = o.startColumnIndex, /* [auto-meaningful-name] */o$columnCount = o.columnCount, c = e.getDisplayedRowCount(), l = o$startColumnIndex, u = r, d = false, p = false, f = [], h = false, m = 0, g = 0; g < t.length; g++) {
    var _ = t[g]
    if ("\"" === _) {
      h = !h
    }
    if ("\n" !== _ || h) {
      if (!(g !== t.length - 1 || h)) {
        f.push(t.slice(m, g + 1).replace(/\r$/, ""))
        m = g + 1
      }
    } else {
      f.push(t.slice(m, g).replace(/\r$/, ""))
      m = g + 1
    }
  }
  for (var v in 0 === f.length && f.push(""), f) {
    l = o$startColumnIndex
    var b = f[v]
    if ("string" !== typeof b) {
      return
    }
    if (c >= 1e3 && u >= 1e3) {
      p = true
      break
    }
    if (u > e.getLastDisplayedRow()) {
      var y = {}
      y.rowId = Module_64.a("ROW")
      var E = {
        add: [y]
      }
      e.applyTransaction(E)
    }
    for (var O = b.split("\t"), w = 0; w < O.length; w++) {
      var C
      if (l >= o$columnCount) {
        l = o$startColumnIndex
        d = true
        break
      }
      var T = o$columnDefRecord[l]
      var S = null === (C = e.getModel().getRow(u)) || undefined === C ? undefined : C.id
      var A = O[w].replace(/\r\n/g, "\\n")
      if (/^"/.test(A) && /"$/.test(A) && A.includes("\\n")) {
        A = A.slice(1, -1)
      }
      if (S) {
        qI(e, A, S, T)
      }
      l++
    }
    u++
    c++
  }
  return {
    columnOutOfRange: d,
    rowOutOfRange: p
  }
}
var YI = function (e) {
  return e.getColumnDefs()[2].colId || ""
}
var KI = function (e, t) {
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
var qI = function (e, t, n, r) {
  var o = e.getRowNode(n)
  if (o) {
    o.setDataValue(r, t)
  }
}
export { UI }
export { HI }
export { VI }
export { zI }
export { YI }
