/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-128
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_557 from /* 557 */"./557"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_147 from /* 147 */"./147"
import * as /* [auto-meaningful-name] */Module_1520 from /* 1520 */"./1520"
import /* [auto-meaningful-name] */Module_15201 from /* 1520 */"./1520"
import * as /* [auto-meaningful-name] */Module_421 from /* 421 */"./421"
import /* [auto-meaningful-name] */Module_4211 from /* 421 */"./421"
var Tw = {
  columns: [],
  rows: []
}
var Sw = memo(function (e) {
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var r = e$getValue("cloudDbId")
  var o = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = Module_9.Bb(e$widgetId)
  var s = useState(Tw)
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState(true)
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useRef(false)
  useEffect(function () {
    return function () {
      v.current = true
    }
  }, [])
  useEffect(function () {
    if (a && r) {
      u(Tw)
      g(true)
      Promise.all([Module_147.e(r, "dev"), Module_147.f(r, "dev", 0, 500)]).then(function (e) {
        var t = Module_10.a(e, 2)
        var n = t[0]
        var r = t[1]
        g(false)
        if (n) {
          var o = n.columns.map(function (e) {
            return e.name
          })
          var i = n.columns.map(function (e) {
            return e.id
          })
          var a = r ? r.map(function (e) {
            var t = []
            i.forEach(function (n) {
              if (e.values[n]) {
                t.push(e.values[n])
              } else {
                t.push("")
              }
            })
            return {
              id: e.record_id,
              value: t
            }
          }) : []
          if (!v.current) {
            u({
              columns: o,
              rows: a
            })
          }
        }
      }).catch(function (e) {
        console.error(e)
      })
    }
  }, [r, a])
  if (!a) {
    return React.createElement(React.Fragment, null)
  }
  function b() {
    if (a) {
      o(Src_editor_redux_common_actions.Xh(""))
      o(Src_editor_redux_common_actions.ij(e$getValue("name"), true, r, false, function () {}))
    }
  }
  var y = function (e) {
    var /* [auto-meaningful-name] */e$index = e.index
    var /* [auto-meaningful-name] */e$style = e.style
    var r = l.rows[e$index - 1]
    var /* [auto-meaningful-name] */l$columns = l.columns
    return 0 === e$index ? React.createElement("div", {
      className: Module_4211.listItem,
      key: e$index,
      style: e$style
    }, l$columns.map(function (e, t) {
      return React.createElement("div", {
        className: Module_4211.column,
        key: "".concat(e, "-").concat(t)
      }, e)
    })) : React.createElement("div", {
      className: Module_4211.listItem,
      key: e$index,
      style: e$style
    }, r.value.map(function (e, t) {
      return React.createElement("div", {
        className: Module_4211.row,
        key: "".concat(r.id, "-").concat(e, "-").concat(t)
      }, React.createElement("span", {
        title: String(e)
      }, String(e)))
    }))
  }
  return React.createElement("div", {
    className: Classnames(Module_4211.formItemWrapper, Module_4211.cloudDBList)
  }, m ? React.createElement("div", {
    className: Module_4211.loadingArea
  }, React.createElement("img", {
    src: Module_15201,
    alt: "loading"
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "cloudDBWidget.loading"
  }))) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: Module_4211.title
  }, React.createElement("div", null, useIntl$formatMessage({
    id: "cloudDBWidget.data"
  }), React.createElement(Module_1213.a, {
    content: React.createElement("div", {
      className: Module_4211.btnContent
    }, React.createElement("div", null, " ", useIntl$formatMessage({
      id: "cloudDBWidget.tipsContent"
    }))),
    placement: "rightTop",
    trigger: "click"
  }, React.createElement("div", {
    className: Module_4211.btn
  }, "?"))), React.createElement("div", {
    className: Module_4211.editBtnBox
  }, React.createElement(Src_shared_ui_components_index.d, {
    className: Module_4211.editBtn,
    onClick: b
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-storage-edit"
  })))), React.createElement("div", {
    className: Module_4211.list
  }, React.createElement("div", {
    className: Module_4211.itemWrapper
  }, l.columns && l.columns.length > 0 && React.createElement(Module_557.a, {
    width: l.columns.length >= 5 ? 100 * l.columns.length : "auto",
    height: 32 * (l.rows.length > 15 ? 14.5 : l.rows.length + 1),
    itemCount: l.rows.length + 1,
    renderItem: y,
    itemSize: 32,
    className: "VirtualList"
  })))))
})
export { Sw }
