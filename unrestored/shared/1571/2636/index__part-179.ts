/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-179
 */

"use strict"

import { rj } from "./index__part-178"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"./48/index"
import * as /* [auto-meaningful-name] */Module_91 from /* 91 */"./91"
import * as /* [auto-meaningful-name] */Module_796 from /* 796 */"./796/index"
import * as /* [auto-meaningful-name] */Module_174 from /* 174 */"./174"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"./20/index"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_814 from /* 814 */"./814"
import /* [auto-meaningful-name] */Module_8141 from /* 814 */"./814"
var aj = memo(function () {
  var e = useSelector(function (e) {
    return e.common.tableDataDialog
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
  var k = useState(false)
  var x = Module_10.a(k, 2)
  var M = x[0]
  var L = x[1]
  var P = useState(2)
  var B = Module_10.a(P, 2)
  var F = B[0]
  var G = B[1]
  var W = useState(2)
  var U = Module_10.a(W, 2)
  var H = U[0]
  var V = U[1]
  useEffect(function () {
    if (e$visible) {
      a(Src_editor_redux_common_actions.ki("grid"))
      E(e$grid.name)
      T(Lodash.cloneDeep(e$grid.header))
      R(Lodash.cloneDeep(e$grid.data))
      L(false)
      G(e$grid.data.length)
      V(Object.keys(e$grid.header).length - 2)
    }
  }, [a, e$visible, e$grid])
  var K = function () {
    var e = {}
    var t = []
    if (!(null === m || undefined === m)) {
      m.getColumnDefs().map(function (t) {
        var /* [auto-meaningful-name] */t$colId = t.colId
        var /* [auto-meaningful-name] */t$headerName = t.headerName
        var /* [auto-meaningful-name] */t$width = t.width
        if (t$colId && t$headerName) {
          e[t$colId] = {
            field: t$headerName,
            width: t$width
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
  var q = function () {
    a(Src_editor_redux_common_actions.oi(""))
    a(Src_editor_redux_common_actions.ri("", ""))
    a(Src_editor_redux_common_actions.ni("", ""))
    a(Src_editor_redux_common_actions.mi(false))
  }
  var X = function () {
    q()
    if (e$onClose) {
      e$onClose(e$grid.id, {
        newName: undefined,
        deleteColumnIdList: undefined,
        isCreateNewGrid: e$isCreateNewGrid
      })
    }
    a(Src_editor_redux_common_actions.wh())
  }
  var Q = function () {
    if (!(null === m || undefined === m)) {
      m.stopEditing()
    }
    var e = K()
    var /* [auto-meaningful-name] */e$header = e.header
    var /* [auto-meaningful-name] */e$data = e.data
    q()
    var s = false
    var c = []
    if (!Lodash.isEqual(e$header, e$grid.header)) {
      s = true
    }
    if (s || !Lodash.isEqual(e$data, e$grid.data)) {
      if (s) {
        var l = Object.keys(e$header)
        for (var u in e$grid.header) if (!l.includes(u)) {
          c.push(u)
        }
      }
      a(Src_editor_redux_common_actions.Lg(e$grid.id, "db", {
        header: e$header,
        data: e$data
      }, false, false, true))
    }
    if (null === c || undefined === c ? undefined : c.length) {
      a(Src_editor_redux_common_actions.rg(e$grid.id, c))
      c.forEach(function (e) {
        Module_26.q(Module_26.c.TABLE_DATA_COLUMN, e)
      })
    }
    if (s) {
      for (var d in e$header) Module_26.m(Module_26.c.TABLE_DATA_COLUMN, d, e$header[d].field)
      Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
        if ("table_data_insert_row_data" === e.type && e.get_field_value("WIDGET_ID") === e$grid.id && e.updateShape_) {
          e.updateShape_(e$grid.id)
        }
      })
    }
    Module_174.a.get(e$grid.id).then(function (e) {
      if (e) {
        Module_20.TableDataSynchronizeIndexedDB(e$grid.id, e$grid, Module_6.a({
          id: e$grid.id,
          name: e$grid.name
        }, K())).then(function (e) {
          Module_91.a({
            type: Module_68.b.PLAYER_DATA_WATCH,
            data: {
              screenId: Module_48.a().getState().currentScreenId,
              tab: Src_editor_widget_builtIn_types.G,
              id: e$grid.id,
              value: e
            }
          })
        })
      } else {
        Module_91.a({
          type: Module_68.b.PLAYER_DATA_WATCH,
          data: {
            screenId: Module_48.a().getState().currentScreenId,
            tab: Src_editor_widget_builtIn_types.G,
            id: e$grid.id,
            value: Module_6.a({
              id: e$grid.id,
              name: e$grid.name
            }, K())
          }
        })
      }
    })
    if (e$onClose) {
      e$onClose(e$grid.id, {
        newName: "",
        deleteColumnIdList: c,
        isCreateNewGrid: e$isCreateNewGrid,
        columnChanged: s,
        header: e$header
      })
    }
    a(Src_editor_redux_common_actions.wh())
  }
  var Z = React.createElement("div", {
    className: Module_8141.footer
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "gridSupportTypeTips"
  })), React.createElement(Src_shared_ui_components_index.d, {
    type: "primary",
    disabled: l,
    onClick: Q
  }, useIntl$formatMessage({
    id: "save"
  })))
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: e$visible,
    className: Module_8141.tableDataDialog,
    title: React.createElement("div", null, y, React.createElement("span", {
      className: Module_8141.defaultData
    }, "— ", useIntl$formatMessage({
      id: "TableDataWidget.data"
    }))),
    footer: Z,
    onClose: function () {
      if (!(null === m || undefined === m)) {
        m.stopEditing()
      }
      var e = K()
      var /* [auto-meaningful-name] */e$header = e.header
      var /* [auto-meaningful-name] */e$data = e.data
      if (Lodash.isEqual(e$data, e$grid.data) && Lodash.isEqual(e$header, e$grid.header)) {
        X()
      } else {
        L(true)
      }
    }
  }, React.createElement("div", {
    className: Module_8141.rowAndColumnCount
  }, React.createElement("span", {
    className: Module_8141.itemCount
  }, useIntl$formatMessage({
    id: "column"
  }), ": ", H), React.createElement("span", null, useIntl$formatMessage({
    id: "row"
  }), ": ", F)), e$visible && React.createElement(rj, {
    id: e$grid.id,
    header: C,
    data: N,
    onGridReady: function (e) {
      g(e)
    },
    handleRowDataUpdate: function (e) {
      G(e.api.getDisplayedRowCount())
    },
    handleGridColumnChange: function (e) {
      V(e.length - 2)
    },
    visible: e$visible,
    allowEditHeader: true,
    columnUseType: false,
    resizeColumnNumber: 13,
    setSaveDisabled: function (e) {
      u(e)
    }
  }), M && React.createElement(Module_796.a, {
    onCancel: X,
    onOk: Q
  }))
})
export { aj }
