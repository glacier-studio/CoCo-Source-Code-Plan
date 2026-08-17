/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-175
 */

"use strict"

import { EI, OI, wI, CI, TI } from "./index__part-174"
import * as /* [auto-meaningful-name] */AgGridReact from /* 417 */"ag-grid-react"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"./64/index"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_188 from /* 188 */"./188"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_178 from /* 178 */"./178"
import /* [auto-meaningful-name] */Module_1781 from /* 178 */"./178"
var NI = memo(function (e) {
  var t = useSelector(function (e) {
    return e.common.gridStatus
  })
  var n = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = useRef(null)
  var i = useState(false)
  var a = Module_10.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useState(false)
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = useState(false)
  var g = Module_10.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useState(false)
  var E = Module_10.a(y, 2)
  var O = E[0]
  var w = E[1]
  var C = useState(false)
  var T = Module_10.a(C, 2)
  var A = T[0]
  var j = T[1]
  useEffect(function () {
    if (s) {
      document.addEventListener("mousedown", function e() {
        c(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [s])
  useEffect(function () {
    var /* [auto-meaningful-name] */e$column
    var /* [auto-meaningful-name] */e$column1
    var /* [auto-meaningful-name] */e$column2
    if (t.copiedContent.rowId || t.copiedContent.columnId !== (null === (e$column = e.column) || undefined === e$column ? undefined : e$column.getId())) {
      p(false)
    } else {
      p(true)
    }
    if (t.selectedContent.columnId !== (null === (e$column1 = e.column) || undefined === e$column1 ? undefined : e$column1.getId()) || t.selectedContent.rowId) {
      b(false)
    } else {
      b(true)
      e.setSelectedContent(Module_6.a({}, t.selectedContent))
    }
    if (e.allowEditHeader) {
      if (t.editingHeader === (null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getId())) {
        w(true)
      } else {
        w(false)
      }
    } else {
      w(false)
    }
  }, [t, e])
  useEffect(function () {
    if (o.current) {
      o.current.focus()
      o.current.select()
    }
  })
  var R = function (e) {
    var t = new RegExp("^第(\\d+)列$")
    var n = []
    e.forEach(function (e) {
      var r = e.match(t)
      if (r && r[1]) {
        n.push(parseInt(r[1]))
      }
    })
    n.sort(function (e, t) {
      return e - t
    })
    for (var r = 1, o = 0; o < n.length && !(r < n[o]); o++) {
      r = n[o] + 1
    }
    return "第".concat(r, "列")
  }
  var k = function (e) {
    n(Src_editor_redux_common_actions.mj({
      message: useIntl$formatMessage({
        id: "repeatGridColumnName"
      }),
      showCloseIcon: false,
      showPrefixIcon: false,
      duration: 3e3,
      type: "error"
    }))
    n(Src_editor_redux_common_actions.li(e))
    setTimeout(function () {
      n(Src_editor_redux_common_actions.li([]))
    }, 3e3)
  }
  var x = function () {
    var r = e.column.getId()
    if (e.api.getFocusedCell()) {
      e.api.clearFocusedCell()
    }
    if (t.editingHeader) {
      n(Src_editor_redux_common_actions.oi(""))
    }
    n(Src_editor_redux_common_actions.ri("", r))
  }
  var M = undefined
  var L = function (r) {
    if (t.editingHeader) {
      n(Src_editor_redux_common_actions.oi(""))
    }
    if (t.selectedContent.columnId || t.selectedContent.rowId) {
      n(Src_editor_redux_common_actions.ri("", ""))
    }
    var o = e.api.getColumnDefs()
    var i = Module_64.a("COLUMN")
    var a = e.api.getColumnDefs().map(function (e) {
      return e.headerName || ""
    })
    var s = R(a)
    var c = "boolean" === r ? {
      colId: i,
      headerName: s,
      field: i,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["true", "false"]
      },
      editable: e.editableCallback,
      resizable: true,
      minWidth: 150,
      flex: 1,
      type: r,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    } : {
      colId: i,
      headerName: s,
      field: i,
      editable: e.editableCallback,
      resizable: true,
      minWidth: 150,
      flex: 1,
      type: r,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    }
    o.push(c)
    e.api.setColumnDefs(o)
  }
  var P = function () {
    if (t.editingHeader) {
      n(Src_editor_redux_common_actions.oi(""))
    }
    if (t.selectedContent.columnId || t.selectedContent.rowId) {
      n(Src_editor_redux_common_actions.ri("", ""))
    }
    var r = e.api.getColumnDefs()
    var o = Module_64.a("COLUMN")
    var i = e.api.getColumnDefs().map(function (e) {
      return e.headerName || ""
    })
    var a = {
      colId: o,
      headerName: R(i),
      field: o,
      editable: e.editableCallback,
      resizable: true,
      minWidth: 150,
      flex: 1,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    }
    r.push(a)
    e.api.setColumnDefs(r)
  }
  if ("left" === e.column.getPinned()) {
    return React.createElement("div", {
      id: e.displayName
    }, e.displayName)
  }
  if ("right" === e.column.getPinned()) {
    return React.createElement(Module_1213.a, {
      placement: "bottomLeft",
      trigger: "click",
      onVisibleChange: function (t) {
        if (t) {
          if (e.allowEditHeader) {
            if (e.useType) {
              if (e.api.getColumnDefs().map(function (e) {
                return e.headerName
              }).filter(function (e) {
                return "" !== e
              }).length >= 10) {
                return void n(Src_editor_redux_common_actions.mj({
                  message: useIntl$formatMessage({
                    id: "columnLengthLimit"
                  })
                }))
              }
              j(t)
            } else {
              P()
            }
          }
        } else {
          j(t)
        }
      },
      visible: A,
      content: React.createElement("div", {
        className: Module_1781.cloudDBAddColumnMenuWrapper
      }, React.createElement("div", {
        onMouseDown: function () {
          return L("number")
        },
        className: Module_1781.menuItem
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-grid-number",
        className: Module_1781.columnIcon
      }), useIntl$formatMessage({
        id: "numberGridData"
      })), React.createElement("div", {
        onMouseDown: function () {
          return L("string")
        },
        className: Module_1781.menuItem
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-grid-string",
        className: Module_1781.columnIcon
      }), useIntl$formatMessage({
        id: "stringGridData"
      })), React.createElement("div", {
        onMouseDown: function () {
          return L("boolean")
        },
        className: Module_1781.menuItem
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-grid-boolean",
        className: Module_1781.columnIcon
      }), useIntl$formatMessage({
        id: "booleanGridData"
      })))
    }, React.createElement("div", null, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-add"
    })))
  }
  return React.createElement("div", null, O ? React.createElement("div", {
    className: Module_1781.headerEditor
  }, React.createElement("input", {
    ref: o,
    defaultValue: e.displayName,
    onKeyPress: function (e) {
      if ("Enter" === e.key && o.current) {
        o.current.blur()
      }
    },
    onBlur: function (t) {
      n(Src_editor_redux_common_actions.oi(""))
      var /* [auto-meaningful-name] */t$target$value = t.target.value
      if ("" !== t$target$value) {
        var i = e.column.getColId()
        var a = e.api.getColumnDefs()
        var s = []
        a.forEach(function (e) {
          var /* [auto-meaningful-name] */e$colId = e.colId
          if (e$colId) {
            if (e$colId !== i) {
              if (e$colId && e.headerName === t$target$value) {
                s.push(e$colId)
              }
            } else {
              e.headerName = t$target$value
            }
          }
        })
        e.api.setColumnDefs(a)
        e.api.refreshHeader()
        if (s.length) {
          k([].concat(s, [i]))
        } else {
          n(Src_editor_redux_common_actions.li([]))
        }
      } else {
        n(Src_editor_redux_common_actions.mj({
          message: useIntl$formatMessage({
            id: "emptyColumnName"
          })
        }))
      }
    }
  })) : React.createElement(Module_1213.a, {
    placement: "rightTop",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        c(false)
      }
    },
    visible: e.allowEditHeader && s,
    content: React.createElement("div", {
      className: Module_1781.menuWrapper,
      style: {
        marginTop: 13
      }
    }, React.createElement("div", {
      onMouseDown: function () {
        var t = e.column.getColId()
        OI(e.api, t)
        n(Src_editor_redux_common_actions.ni("", t))
        n(Src_editor_redux_common_actions.ri("", ""))
        n(Src_editor_redux_common_actions.mj({
          message: useIntl$formatMessage({
            id: "copySuccess"
          })
        }))
      },
      className: Module_1781.menuItem
    }, useIntl$formatMessage({
      id: "copyGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        navigator.clipboard.readText().then(function (t) {
          var /* [auto-meaningful-name] */e$column
          var i = null === (e$column = e.column) || undefined === e$column ? undefined : e$column.getColId()
          if (i) {
            if (CI(e.api, t, i, 0)) {
              n(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "pasteColumnOutOfRange"
                })
              }))
            }
          }
        })
      },
      className: Module_1781.menuItem
    }, useIntl$formatMessage({
      id: "pasteGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        n(Src_editor_redux_common_actions.ri("", ""))
        var t = e.column.getId()
        var r = e.api.getColumnDefs().filter(function (e) {
          return e.colId !== t
        })
        e.api.setColumnDefs(r)
        e.api.getModel().forEachNode(function (e) {
          delete e.data[t]
        })
      },
      className: Classnames(Module_1781.menuItem, Module_1781.deleteOption)
    }, useIntl$formatMessage({
      id: "deleteGridData"
    })))
  }, React.createElement("div", {
    onMouseUp: function (r) {
      if (2 !== r.button) {
        if (undefined === M) {
          M = setTimeout(function () {
            M = undefined
            x()
          }, 250)
        } else {
          clearTimeout(M);
          (function () {
            var r = e.column.getId()
            if (e.api.getFocusedCell()) {
              e.api.clearFocusedCell()
            }
            if (t.selectedContent.rowId || t.selectedContent.columnId) {
              n(Src_editor_redux_common_actions.ri("", ""))
            }
            n(Src_editor_redux_common_actions.oi(r))
          })()
        }
      }
    },
    onContextMenu: function (e) {
      e.preventDefault()
      x()
      c(true)
    },
    className: Classnames(Module_1781.header, (d || v) && Module_1781.selectedColumnHeader, t.errorHeaders.includes(e.column.getColId()) && Module_1781.errorColumn, t.animationHeaders.includes(e.column.getColId()) && Module_1781.errorAnimation)
  }, React.createElement("div", {
    className: Module_1781.area
  }, function () {
    var t
    switch (null === (t = e.column.getUserProvidedColDef()) || undefined === t ? undefined : t.type) {
      case "boolean":
        return React.createElement(Src_shared_ui_components_index.j, {
          type: "icon-grid-boolean",
          className: Module_1781.columnIcon
        })
      case "string":
        return React.createElement(Src_shared_ui_components_index.j, {
          type: "icon-grid-string",
          className: Module_1781.columnIcon
        })
      case "number":
        return React.createElement(Src_shared_ui_components_index.j, {
          type: "icon-grid-number",
          className: Module_1781.columnIcon
        })
      default:
        return
    }
  }(), React.createElement("div", {
    className: Module_1781.text,
    title: e.displayName
  }, e.displayName)))))
})
var RI = memo(function (e) {
  var t = useSelector(function (e) {
    return e.common.gridStatus
  })
  var n = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = useState(false)
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState(false)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var v = m[1]
  useEffect(function () {
    if (g) {
      document.addEventListener("mousedown", function e() {
        v(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [g])
  useEffect(function () {
    if (t.copiedContent.rowId !== e.node.id || t.copiedContent.columnId) {
      d(false)
    } else {
      d(true)
    }
    if (t.selectedContent.columnId || t.selectedContent.rowId !== e.node.id) {
      s(false)
    } else {
      s(true)
      e.setSelectedContent(Module_6.a({}, t.selectedContent))
    }
  }, [t, e])
  var b = function () {
    if (e.api.getFocusedCell()) {
      e.api.clearFocusedCell()
    }
    if (t.editingHeader) {
      n(Src_editor_redux_common_actions.oi(""))
    }
    n(Src_editor_redux_common_actions.ri(e.data.rowId, ""))
  }
  return React.createElement(Module_1213.a, {
    placement: "rightTop",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        v(false)
      }
    },
    visible: g,
    content: React.createElement("div", {
      className: Module_1781.menuWrapper,
      style: {
        marginTop: 37
      }
    }, React.createElement("div", {
      onMouseDown: function () {
        var /* [auto-meaningful-name] */e$node$id = e.node.id
        if (e$node$id) {
          wI(e.api, e.rowIndex)
          n(Src_editor_redux_common_actions.ni(e$node$id, ""))
          n(Src_editor_redux_common_actions.ri("", ""))
          n(Src_editor_redux_common_actions.mj({
            message: useIntl$formatMessage({
              id: "copySuccess"
            })
          }))
        }
      },
      className: Module_1781.menuItem
    }, useIntl$formatMessage({
      id: "copyGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        navigator.clipboard.readText().then(function (t) {
          var o = TI(e.api)
          if (CI(e.api, t, o, e.rowIndex)) {
            n(Src_editor_redux_common_actions.mj({
              message: useIntl$formatMessage({
                id: "pasteColumnOutOfRange"
              })
            }))
          }
        })
      },
      className: Module_1781.menuItem
    }, useIntl$formatMessage({
      id: "pasteGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        var t
        n(Src_editor_redux_common_actions.ri("", ""))
        var r = null === (t = e.api.getModel().getRow(e.rowIndex)) || undefined === t ? undefined : t.id
        if (r) {
          var o = {
            remove: [
              {
                rowId: r
              }
            ]
          }
          e.context.scrollToRowIndex = e.rowIndex
          e.api.applyTransaction(o)
        }
      },
      className: Classnames(Module_1781.menuItem, Module_1781.deleteOption)
    }, useIntl$formatMessage({
      id: "deleteGridData"
    })))
  }, React.createElement("div", {
    onMouseUp: function (e) {
      if (2 !== e.button) {
        b()
      }
    },
    onContextMenu: function (e) {
      e.preventDefault()
      b()
      v(true)
    },
    className: Classnames(u || a ? Module_1781.selectedRowIndex : Module_1781.rowIndex)
  }, e.value))
})
var kI = memo(function (e) {
  var /* [auto-meaningful-name] */e$column
  var n = !!(null === (e$column = e.column) || undefined === e$column ? undefined : e$column.isPinnedLeft())
  var r = useSelector(function (e) {
    return e.common.gridStatus
  })
  var o = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = useState(false)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState(false)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  useEffect(function () {
    var /* [auto-meaningful-name] */e$column1
    var /* [auto-meaningful-name] */e$column2
    if ("" === r.copiedContent.rowId && r.copiedContent.columnId === (null === (e$column1 = e.column) || undefined === e$column1 ? undefined : e$column1.getId())) {
      l(true)
    } else {
      l(false)
    }
    if (r.selectedContent.columnId === (null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getId()) && "" === r.selectedContent.rowId) {
      m(true)
    } else {
      m(false)
    }
  }, [r, e.column])
  return n ? React.createElement("div", {
    onClick: function () {
      var t = e.api.getColumnDefs()
      if (t.length <= 2) {
        o(Src_editor_redux_common_actions.mj({
          message: useIntl$formatMessage({
            id: "addColumnFirst"
          }, {
            num: e.limitRow
          })
        }))
      } else {
        if (e.limitRow) {
          if (e.api.getLastDisplayedRow() + 1 >= e.limitRow) {
            return void o(Src_editor_redux_common_actions.mj({
              message: useIntl$formatMessage({
                id: "rowLengthLimit"
              }, {
                num: e.limitRow
              })
            }))
          }
        }
        if (r.editingHeader) {
          o(Src_editor_redux_common_actions.oi(""))
        }
        if (r.selectedContent.columnId || "" !== r.selectedContent.rowId) {
          o(Src_editor_redux_common_actions.ri("", ""))
        }
        var n = {}
        t.forEach(function (e) {
          var /* [auto-meaningful-name] */e$colId = e.colId
          if (e$colId && "indexColumn" !== e$colId && "addColumn" !== e$colId) {
            n[e$colId] = ""
          }
        })
        var a = e.api.getLastDisplayedRow() + 1
        n.rowId = Module_64.a("ROW")
        var s = {
          add: [n]
        }
        e.context.scrollToRowIndex = a
        e.api.applyTransaction(s)
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  })) : React.createElement("div", {
    className: Classnames(c && Module_1781.copiedColumnPinnedRow, p && Module_1781.selectedColumnPinnedRow)
  })
})
var xI = memo(function (e) {
  var /* [auto-meaningful-name] */e$column
  var /* [auto-meaningful-name] */e$column1
  var r = useSelector(function (e) {
    return e.common.gridStatus
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var i = useDispatch()
  var a = useState(false)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState(false)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState(false)
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  var E = useState(false)
  var O = Module_10.a(E, 2)
  var w = O[0]
  var C = O[1]
  var T = useState(false)
  var A = Module_10.a(T, 2)
  var j = A[0]
  var R = A[1]
  var k = useState(false)
  var x = Module_10.a(k, 2)
  var D = x[0]
  var M = x[1]
  useEffect(function () {
    if (D) {
      document.addEventListener("mousedown", function e() {
        M(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [D])
  useEffect(function () {
    var /* [auto-meaningful-name] */e$column2
    var /* [auto-meaningful-name] */e$column3
    if (!e.node.isRowPinned()) {
      var /* [auto-meaningful-name] */e$column4
      l(false)
      y(false)
      m(false)
      if (r.copiedContent.rowId === e.node.id) {
        if (r.copiedContent.columnId === (null === (e$column4 = e.column) || undefined === e$column4 ? undefined : e$column4.getId())) {
          l(true)
        } else {
          if ("" === r.copiedContent.columnId) {
            y(true)
          }
        }
      } else if (!(r.copiedContent.rowId || r.copiedContent.columnId !== (null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getId()))) {
        m(true)
      }
      R(false)
      C(false)
      if (r.selectedContent.rowId === e.node.id) {
        if (!r.selectedContent.columnId) {
          R(true)
        }
      } else {
        if (!(r.selectedContent.rowId || r.selectedContent.columnId !== (null === (e$column3 = e.column) || undefined === e$column3 ? undefined : e$column3.getId()))) {
          C(true)
        }
      }
    }
  }, [r, e.column, e.rowIndex, e.node])
  return React.createElement(Module_1213.a, {
    placement: "rightTop",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        M(false)
      }
    },
    visible: D,
    content: React.createElement("div", {
      className: Module_1781.menuWrapper,
      style: {
        marginTop: 13
      }
    }, React.createElement("div", {
      onMouseDown: function () {
        var /* [auto-meaningful-name] */e$column2
        var n = null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getColId()
        var /* [auto-meaningful-name] */e$node$id = e.node.id
        if (e$node$id && n) {
          EI(e.api, e.rowIndex, n)
          i(Src_editor_redux_common_actions.ni(e$node$id, n))
          i(Src_editor_redux_common_actions.ri("", ""))
          e.api.clearFocusedCell()
          i(Src_editor_redux_common_actions.mj({
            message: useIntl$formatMessage({
              id: "copySuccess"
            })
          }))
        }
      },
      className: Module_1781.menuItem
    }, useIntl$formatMessage({
      id: "copyGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        navigator.clipboard.readText().then(function (t) {
          var /* [auto-meaningful-name] */e$column2
          var r = null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getId()
          if (r) {
            if (CI(e.api, t, r, e.rowIndex)) {
              i(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "pasteColumnOutOfRange"
                })
              }))
            }
          }
        })
      },
      className: Module_1781.menuItem
    }, useIntl$formatMessage({
      id: "pasteGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        var /* [auto-meaningful-name] */e$column2
        var n = e.api.getModel().getRow(e.rowIndex)
        var r = null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getId()
        if (n && r) {
          n.setDataValue(r, "")
        }
      },
      className: Classnames(Module_1781.menuItem, Module_1781.deleteOption)
    }, useIntl$formatMessage({
      id: "deleteGridData"
    })))
  }, React.createElement("div", {
    className: Classnames("coco-table-data-cell", Module_1781.gridCell, c && Module_1781.copiedCell, p && Module_1781.copiedColumnCell, p && 0 === e.rowIndex && Module_1781.copiedColumnFirstRow, b && Module_1781.copiedRowCell, b && "right" === (null === (e$column = e.column) || undefined === e$column ? undefined : e$column.getPinned()) && Module_1781.copiedRowPinnedColumn, w && Module_1781.selectedColumnCell, w && 0 === e.rowIndex && Module_1781.selectedColumnFirstRow, j && Module_1781.selectedRowCell, j && "right" === (null === (e$column1 = e.column) || undefined === e$column1 ? undefined : e$column1.getPinned()) && Module_1781.selectedRowPinnedColumn, function () {
      var /* [auto-meaningful-name] */e$column2
      var /* [auto-meaningful-name] */r$errorCells = r.errorCells
      var /* [auto-meaningful-name] */e$node$id = e.node.id
      var i = null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getId()
      return !!(i && r$errorCells[i] && e$node$id) && r$errorCells[i].includes(e$node$id)
    }() && Module_1781.errorColumn),
    onContextMenu: function (t) {
      var /* [auto-meaningful-name] */e$column2
      t.preventDefault()
      var /* [auto-meaningful-name] */e$node$id = e.node.id
      var o = null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getId()
      if (e$node$id && o) {
        i(Src_editor_redux_common_actions.oi(""))
        i(Src_editor_redux_common_actions.ri(e$node$id, o))
        M(true)
      }
    }
  }, e.value))
})
var DI = memo(function (e) {
  var t = useSelector(function (e) {
    return e.project.focusedWorkspaceArea
  })
  var n = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = useRef(null)
  var i = useRef({
    rowId: "",
    columnId: ""
  })
  var a = useState()
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  useEffect(function () {
    if (e.visible && c) {
      c.setRowData(Lodash.cloneDeep(e.data))
    }
  }, [e.data, c, e.visible])
  useEffect(function () {
    if (c && o.current) {
      if (e.data.length < e.resizeColumnNumber) {
        o.current.style.removeProperty("width")
        o.current.style.removeProperty("height")
        c.setDomLayout("autoHeight")
      } else {
        o.current.style.width = "100%"
        o.current.style.height = "100%"
        c.setDomLayout("normal")
      }
    }
  }, [e.data, c, e.resizeColumnNumber])
  var u = function (e) {
    return !e.node.isRowPinned()
  }
  var d = {
    onGridReady: function (t) {
      l(t.api)
      e.onGridReady(t.api)
    },
    context: {
      animationHeaders: [],
      lastFocusedCell: {
        rowIndex: undefined,
        columnId: undefined
      },
      scrollToRowIndex: -1
    },
    columnTypes: {
      number: {},
      string: {},
      boolean: {}
    },
    domLayout: "autoHeight",
    getRowHeight: function (e) {
      return e.node.rowPinned ? 31 : 32
    },
    suppressColumnVirtualisation: true,
    pinnedBottomRowData: [{}],
    enableCellChangeFlash: true,
    suppressMovableColumns: true,
    suppressScrollOnNewData: true,
    undoRedoCellEditing: true,
    undoRedoCellEditingLimit: 20,
    enterMovesDownAfterEdit: true,
    onCellClicked: function (e) {
      var t
      var r = e.api.getFocusedCell()
      if (r) {
        var o = r.column.getColId()
        if ("indexColumn" !== o) {
          var /* [auto-meaningful-name] */r$rowIndex = r.rowIndex
          var a = null === (t = e.api.getModel().getRow(r$rowIndex)) || undefined === t ? undefined : t.id
          if (a) {
            n(Src_editor_redux_common_actions.ri(a, o))
          }
          n(Src_editor_redux_common_actions.oi(""))
          if (d.context.lastFocusedCell.rowIndex !== r$rowIndex || d.context.lastFocusedCell.columnId !== o) {
            d.context.lastFocusedCell = {
              rowIndex: r$rowIndex,
              columnId: o
            }
          } else {
            e.api.startEditingCell({
              rowIndex: r$rowIndex,
              colKey: o
            })
          }
        }
      }
    },
    onCellValueChanged: function (t) {
      if (e.handleCellChangeEvent) {
        e.handleCellChangeEvent(t)
      }
    },
    onCellEditingStarted: function (e) {
      document.addEventListener("click", function t(n) {
        for (var /* [auto-meaningful-name] */n$target = n.target, o = false; n$target && !o;) {
          o = n$target.classList.contains("ag-cell-focus")
          n$target = n$target.offsetParent
        }
        if (!o) {
          e.api.stopEditing()
        }
        document.removeEventListener("click", t)
      })
    },
    onGridColumnsChanged: function (t) {
      var o = t.api.getColumnDefs()
      var i = document.querySelector(".ag-center-cols-container")
      if (i) {
        if (o.length <= 2) {
          if (!document.querySelector(".noColumn")) {
            var a = document.createElement("div")
            a.innerText = useIntl$formatMessage({
              id: "emptyColumn"
            })
            a.className = "noColumn"
            i.prepend(a)
          }
        } else {
          var s = document.querySelector(".noColumn")
          if (s) {
            i.removeChild(s)
          }
          var c = function (e) {
            var t = {}
            var n = new Set()
            e.forEach(function (e) {
              var /* [auto-meaningful-name] */e$headerName = e.headerName
              var /* [auto-meaningful-name] */e$colId = e.colId
              if (e$headerName && e$colId) {
                if (t[e$headerName]) {
                  n.add(t[e$headerName])
                  n.add(e$colId)
                } else {
                  t[e$headerName] = e$colId
                }
              }
            })
            return Array.from(n)
          }(o)
          if (c.length) {
            e.setSaveDisabled(true)
          } else {
            e.setSaveDisabled(false)
          }
          n(Src_editor_redux_common_actions.qi(c))
          t.api.ensureColumnVisible(c[0])
          if (e.handleGridColumnChange) {
            e.handleGridColumnChange(o)
          }
        }
      }
    },
    onRowDataUpdated: function (t) {
      if (o.current) {
        if (e.handleRowDataUpdate) {
          e.handleRowDataUpdate(t)
        }
        var n = t.api.getModel().getRowCount()
        var /* [auto-meaningful-name] */o$current$style$width = o.current.style.width
        return n > e.resizeColumnNumber && !o$current$style$width ? (o.current.style.width = "100%", o.current.style.height = "100%", t.api.setDomLayout("normal"), void (-1 !== d.context.scrollToRowIndex && t.api.ensureIndexVisible(d.context.scrollToRowIndex))) : n <= 14 && o$current$style$width ? (o.current.style.removeProperty("width"), o.current.style.removeProperty("height"), t.api.setDomLayout("autoHeight"), void (-1 !== d.context.scrollToRowIndex && t.api.ensureIndexVisible(d.context.scrollToRowIndex))) : void (-1 !== d.context.scrollToRowIndex && t.api.ensureIndexVisible(d.context.scrollToRowIndex))
      }
    },
    getRowNodeId: function (e) {
      return e.rowId
    },
    navigateToNextCell: function (e) {
      var /* [auto-meaningful-name] */e$nextCellPosition = e.nextCellPosition
      var /* [auto-meaningful-name] */e$previousCellPosition = e.previousCellPosition
      return e$nextCellPosition ? (e$previousCellPosition = e$nextCellPosition, (e$nextCellPosition.rowPinned || -1 === e$nextCellPosition.rowIndex) && (e$previousCellPosition.rowIndex = e.previousCellPosition.rowIndex), "indexColumn" !== e$nextCellPosition.column.getColId() && "addColumn" !== e$nextCellPosition.column.getColId() || (e$previousCellPosition.column = e.previousCellPosition.column), e$previousCellPosition) : e$previousCellPosition
    },
    frameworkComponents: {
      agColumnHeader: function (t) {
        return React.createElement(NI, Object.assign({}, t, {
          useType: e.columnUseType,
          allowEditHeader: e.allowEditHeader,
          editableCallback: u,
          setSelectedContent: function (e) {
            i.current = e
          }
        }))
      },
      indexCellRenderer: function (e) {
        return React.createElement(RI, Object.assign({}, e, {
          setSelectedContent: function (e) {
            i.current = e
          }
        }))
      },
      pinnedRow: function (e) {
        return React.createElement(kI, Object.assign({}, e, {
          limitRow: 500
        }))
      },
      baseCellRenderer: function (e) {
        return React.createElement(xI, e)
      }
    }
  }
  var p = {
    values: ["true", "false"]
  }
  return React.createElement("div", {
    style: {
      width: "100%",
      height: "100%"
    }
  }, React.createElement(Module_188.a, {
    useCapture: true
  }, React.createElement(Module_188.b, {
    keys: {
      osx: "command+c",
      windows: "control+c"
    },
    callback: function () {
      if (c) {
        n(Src_editor_redux_common_actions.ri("", ""))
        var e = c.getFocusedCell()
        if (e) {
          var t
          var o = null === (t = c.getModel().getRow(e.rowIndex)) || undefined === t ? undefined : t.id
          var a = e.column.getColId()
          if (o && "indexColumn" !== a) {
            EI(c, e.rowIndex, a)
            n(Src_editor_redux_common_actions.ni(o, a))
            c.clearFocusedCell()
            return void n(Src_editor_redux_common_actions.mj({
              message: useIntl$formatMessage({
                id: "copySuccess"
              })
            }))
          }
        }
        if (!i.current.rowId && i.current.columnId) {
          OI(c, i.current.columnId)
          n(Src_editor_redux_common_actions.ni("", i.current.columnId))
          return void n(Src_editor_redux_common_actions.mj({
            message: useIntl$formatMessage({
              id: "copySuccess"
            })
          }))
        }
        if (i.current.rowId && !i.current.columnId) {
          var s
          var l = null === (s = c.getRowNode(i.current.rowId)) || undefined === s ? undefined : s.rowIndex
          if (undefined !== l && null !== l) {
            wI(c, l)
            n(Src_editor_redux_common_actions.ni(i.current.rowId, ""))
            n(Src_editor_redux_common_actions.mj({
              message: useIntl$formatMessage({
                id: "copySuccess"
              })
            }))
          }
        }
      }
    },
    disabled: "grid" !== t
  }), React.createElement(Module_188.b, {
    keys: {
      osx: "command+v",
      windows: "control+v"
    },
    callback: function () {
      if (c) {
        var e = c.getFocusedCell()
        if (e) {
          var t = e.column.getColId()
          if ("indexColumn" !== t) {
            var /* [auto-meaningful-name] */e$rowIndex = e.rowIndex
            return void navigator.clipboard.readText().then(function (e) {
              if (CI(c, e, t, e$rowIndex)) {
                n(Src_editor_redux_common_actions.mj({
                  message: useIntl$formatMessage({
                    id: "pasteColumnOutOfRange"
                  })
                }))
              }
            })
          }
        }
        if (i.current.rowId || !i.current.columnId) {
          if (i.current.rowId && !i.current.columnId) {
            navigator.clipboard.readText().then(function (e) {
              var t
              var o = TI(c)
              var a = null === (t = c.getRowNode(i.current.rowId)) || undefined === t ? undefined : t.rowIndex
              if (undefined !== a && null !== a) {
                if (CI(c, e, o, a)) {
                  n(Src_editor_redux_common_actions.mj({
                    message: useIntl$formatMessage({
                      id: "pasteColumnOutOfRange"
                    })
                  }))
                }
              }
            })
          }
        } else {
          navigator.clipboard.readText().then(function (e) {
            var /* [auto-meaningful-name] */i$current$columnId = i.current.columnId
            if (CI(c, e, i$current$columnId, 0)) {
              n(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "pasteColumnOutOfRange"
                })
              }))
            }
          })
        }
      }
    },
    disabled: "grid" !== t
  }), React.createElement(Module_188.b, {
    keys: {
      osx: "command+z",
      windows: "control+z"
    },
    callback: function () {
      if (c) {
        c.undoCellEditing()
      }
    },
    disabled: "grid" !== t
  }), React.createElement(Module_188.b, {
    keys: {
      osx: "command+y",
      windows: "control+y"
    },
    callback: function () {
      if (c) {
        c.redoCellEditing()
      }
    },
    disabled: "grid" !== t
  }), React.createElement(Module_188.b, {
    keys: {
      osx: "escape",
      windows: "escape"
    },
    callback: function () {
      if (null === c || undefined === c ? undefined : c.getFocusedCell()) {
        if (!(null === c || undefined === c)) {
          c.clearFocusedCell()
        }
      }
      n(Src_editor_redux_common_actions.ri("", ""))
      n(Src_editor_redux_common_actions.ni("", ""))
    },
    disabled: "grid" !== t
  })), React.createElement("div", {
    ref: o,
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
    valueGetter: function (e) {
      var /* [auto-meaningful-name] */e$node = e.node
      return e$node && null !== e$node.rowIndex ? e$node.rowIndex + 1 : ""
    },
    cellRenderer: "indexCellRenderer",
    pinnedRowCellRenderer: "pinnedRow"
  }), Object.entries(e.header).map(function (e) {
    var t = Module_10.a(e, 2)
    var n = t[0]
    var r = t[1]
    return "boolean" === r.type ? React.createElement(AgGridReact.AgGridColumn, {
      colId: n,
      headerName: r.field,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: p,
      field: n,
      key: n,
      type: r.type,
      editable: u,
      resizable: true,
      minWidth: 150,
      flex: 1,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    }) : React.createElement(AgGridReact.AgGridColumn, {
      colId: n,
      headerName: r.field,
      field: n,
      key: n,
      type: r.type,
      editable: u,
      resizable: true,
      minWidth: 150,
      flex: 1,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    })
  }), React.createElement(AgGridReact.AgGridColumn, {
    colId: "addColumn",
    headerName: "",
    field: "addColumn",
    key: "add",
    editable: false,
    resizable: false,
    width: 60,
    pinned: "right",
    cellRenderer: "baseCellRenderer",
    pinnedRowCellRenderer: "pinnedRow"
  }))))
}, function (e, t) {
  return t.visible === e.visible && t.id === e.id && t.data === e.data && t.header === e.header
})
export { DI }
