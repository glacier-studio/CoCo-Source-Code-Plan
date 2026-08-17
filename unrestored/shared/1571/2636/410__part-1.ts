/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：410__part-1
 */

"use strict"

var i
var o
var r
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"./64/index"
var /* [auto-meaningful-name] */IconWidgetTableData = "icon-widget-table-data"
var l = Module_64.a("COLUMN")
var u = Module_64.a("COLUMN")
r = {}
Module_11.a(r, l, {
  field: "第1列"
})
Module_11.a(r, u, {
  field: "第2列"
})
var d = r
var p = [
  (o = {
    rowId: Module_64.a("ROW")
  }, Module_11.a(o, l, ""), Module_11.a(o, u, ""), o), (i = {
    rowId: Module_64.a("ROW")
  }, Module_11.a(i, l, ""), Module_11.a(i, u, ""), i)
]
function f() {
  var e
  var t
  var n
  var r = Module_64.a("COLUMN")
  var o = Module_64.a("COLUMN")
  return {
    header: (e = {}, Module_11.a(e, r, {
      field: "第1列",
      width: 407
    }), Module_11.a(e, o, {
      field: "第2列",
      width: 407
    }), e),
    data: [
      (t = {
        rowId: Module_64.a("ROW")
      }, Module_11.a(t, r, ""), Module_11.a(t, o, ""), t), (n = {
        rowId: Module_64.a("ROW")
      }, Module_11.a(n, r, ""), Module_11.a(n, o, ""), n)
    ]
  }
}
export { IconWidgetTableData as c }
export { d }
export { p }
export { f }
