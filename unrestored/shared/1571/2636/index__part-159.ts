/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-159
 */

"use strict"

import { we } from "./index__part-6"
import { GS } from "./index__part-158"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37/index"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"./20/index"
import /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"./47"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"./190"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_568 from /* 568 */"./568"
import /* [auto-meaningful-name] */Module_5681 from /* 568 */"./568"
import * as /* [auto-meaningful-name] */Module_110 from /* 110 */"./110"
import * as /* [auto-meaningful-name] */Module_174 from /* 174 */"./174"
import * as /* [auto-meaningful-name] */Module_496 from /* 496 */"./496"
import /* [auto-meaningful-name] */Module_4961 from /* 496 */"./496"
import * as /* [auto-meaningful-name] */Module_384 from /* 384 */"./384"
import /* [auto-meaningful-name] */Module_3841 from /* 384 */"./384"
var QS = function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var /* [auto-meaningful-name] */e$watchItem = e.watchItem
  var r = useSelector(function (e) {
    return e.project.playing
  })
  var o = useSelector(function (e) {
    return e.project.screens
  })
  var i = o.findIndex(function (e) {
    return e.id === e$watchItem.screenId
  })
  var a = undefined
  if (i >= 0) {
    a = o.get(i)
  }
  var s = function () {
    Module_37.a(Src_editor_redux_common_actions.Pj(e$watchItem.id, "isWatching", false))
    Module_37.a(Src_editor_redux_common_actions.Pj(e$watchItem.id, "selected", false))
  }
  var c = function () {
    Module_37.a(Src_editor_redux_common_actions.Pj(e$watchItem.id, "isFold", true))
  }
  var l = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (e$watchItem.type !== Src_editor_widget_builtIn_types.B && e$watchItem.type !== Src_editor_widget_builtIn_types.y || Module_20.resetLocalStorage(e$watchItem.id), e$watchItem.type !== Src_editor_widget_builtIn_types.G) {
                e.next = 4
                break
              }
              e.next = 4
              return Module_20.resetTableDataIndexedDB(e$watchItem.id)
            case 4:
              Module_37.a(Src_editor_redux_common_actions.pj("".concat(e$watchItem.name), true))
            case 5:
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
  if (e$watchItem.isFold) {
    return null
  }
  var u = []
  var d = e$watchItem[r ? "value" : "defaultValue"]
  if ("LIST" === e$watchItem.type) {
    for (var p = 0; p < d.length; p++) {
      u.push({
        key: (p + 1).toString(),
        value: Module_190.e(d[p])
      })
    }
  }
  if ("DICT" === e$watchItem.type) {
    for (var f in d) u.push({
      key: f,
      value: Module_190.e(d[f], false)
    })
  }
  if (e$watchItem.type === Src_editor_widget_builtIn_types.B || e$watchItem.type === Src_editor_widget_builtIn_types.y) {
    if (Array.isArray(e$watchItem.value)) {
      var m
      var g = Module_47.a(e$watchItem.value)
      try {
        for (g.s(); !(m = g.n()).done;) {
          var /* [auto-meaningful-name] */m$value = m.value
          u.push({
            key: m$value.key,
            value: Module_190.e(m$value.value)
          })
        }
      } catch (y) {
        g.e(y)
      } finally {
        g.f()
      }
    } else if ("object" === typeof e$watchItem.value) {
      for (var b in e$watchItem.value) u.push({
        key: b,
        value: Module_190.e(e$watchItem.value[b])
      })
    }
  }
  if (e$watchItem.type === Src_editor_widget_builtIn_types.G) {
    u.push({
      key: "cache",
      value: JSON.stringify(e$watchItem.value)
    })
  }
  return React.createElement("div", {
    className: Module_3841.container
  }, function () {
    var e = null
    if (!(e$watchItem.type !== Src_editor_widget_builtIn_types.B && e$watchItem.type !== Src_editor_widget_builtIn_types.y)) {
      e = React.createElement(Module_748.a, {
        placement: "bottom",
        trigger: ["hover"],
        title: useIntl$formatMessage({
          id: "resetData"
        })
      }, React.createElement("div", {
        className: Module_3841.resetAction,
        onClick: l
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-resetData"
      })))
    }
    return React.createElement("div", {
      className: Classnames(Module_3841.flexSc, Module_3841.header)
    }, React.createElement("div", {
      className: Module_3841.name
    }, React.createElement("div", {
      className: Module_3841.screenIcon
    }, a ? GS(i, a) : ""), React.createElement("div", {
      className: Module_3841.title
    }, e$watchItem.name)), React.createElement("div", {
      className: Module_3841.action
    }, r ? "" : e, React.createElement("div", {
      className: Module_3841.closeAction,
      onClick: s
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-close-datawatch"
    })), React.createElement("div", {
      className: Module_3841.unFoldAction,
      onClick: c
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-open"
    }))))
  }(), React.createElement("div", {
    className: Module_3841.content
  }, u.map(function (e) {
    return React.createElement("div", {
      className: Module_3841.line,
      key: e.key
    }, React.createElement("div", {
      className: Module_3841.lineKey
    }, React.createElement(Module_748.a, {
      placement: "bottom",
      trigger: ["hover"],
      title: e.key
    }, React.createElement("div", {
      className: Module_3841.lineKeyText
    }, e.key))), React.createElement("div", {
      className: Module_3841.lineValue
    }, React.createElement(Module_748.a, {
      placement: "bottom",
      trigger: ["hover"],
      title: e.value
    }, React.createElement("div", {
      className: Module_3841.text
    }, Module_190.e(e.value)))))
  })))
}
var ZS = function (e) {
  var /* [auto-meaningful-name] */e$watchItem = e.watchItem
  var n = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = useSelector(function (e) {
    return e.project.screens
  })
  var i = useSelector(function (e) {
    return e.project.playing
  })
  var a = o.findIndex(function (e) {
    return e.id === e$watchItem.screenId
  })
  var s = undefined
  if (a >= 0) {
    s = o.get(a)
  }
  var c = Module_110.b(e$watchItem.type)
  var l = c.foldIcon && e$watchItem.isFold
  var u = function () {
    if (e$watchItem.type !== Src_editor_widget_builtIn_types.G) {
      n(Src_editor_redux_common_actions.Pj(e$watchItem.id, "isFold", false))
    } else {
      n(Src_editor_redux_common_actions.aj(true, e$watchItem.id))
    }
  }
  var d = function () {
    n(Src_editor_redux_common_actions.Pj(e$watchItem.id, "isWatching", false))
    n(Src_editor_redux_common_actions.Pj(e$watchItem.id, "selected", false))
  }
  useEffect(function () {
    if (e$watchItem.type === Src_editor_widget_builtIn_types.G) {
      Module_174.a.get(e$watchItem.id).then(function (e) {
        if (e) {
          n(Src_editor_redux_common_actions.Pj(e$watchItem.id, "value", e))
        }
      })
    }
  }, [n, e$watchItem.id, e$watchItem.type])
  var p = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (e$watchItem.type !== Src_editor_widget_builtIn_types.B && e$watchItem.type !== Src_editor_widget_builtIn_types.y || Module_20.resetLocalStorage(e$watchItem.id), e$watchItem.type !== Src_editor_widget_builtIn_types.G) {
                e.next = 4
                break
              }
              e.next = 4
              return Module_20.resetTableDataIndexedDB(e$watchItem.id)
            case 4:
              n(Src_editor_redux_common_actions.pj("".concat(e$watchItem.name), true))
            case 5:
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
  var m = null
  if (!(e$watchItem.type !== Src_editor_widget_builtIn_types.B && e$watchItem.type !== Src_editor_widget_builtIn_types.y)) {
    m = React.createElement(Module_748.a, {
      placement: "bottom",
      trigger: ["hover"],
      title: useIntl$formatMessage({
        id: "resetData"
      })
    }, React.createElement("div", {
      className: Module_4961.resetAction,
      onClick: p
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-resetData"
    })))
  }
  var g = function () {
    var e = function (e, t) {
      var n = t ? "value" : "defaultValue"
      if (!(e.type !== Src_editor_widget_builtIn_types.B && e.type !== Src_editor_widget_builtIn_types.G && e.type !== Src_editor_widget_builtIn_types.y)) {
        n = "value"
      }
      var r = Lodash.cloneDeep(e[n])
      var o = []
      if ("TABLE_DATA_WIDGET" === e.type) {
        for (var i in r.header) o.push(r.header[i].field)
      }
      var a = {}
      var s = ""
      var c = new Set()
      var l = function (e, t) {
        if ("object" === typeof t && null !== t) {
          if (c.has(t)) {
            try {
              return JSON.parse(JSON.stringify(t))
            } catch (n) {
              return Array.isArray(t) ? "[...]" : "{...}"
            }
          }
          c.add(t)
        }
        return t
      }
      switch (e.type) {
        case "PRIMITIVE":
        case "LIST":
        case "DICT":
          s = JSON.stringify(r, l).replaceAll("\"[...]\"", "[...]").replaceAll("\"{...}\"", "{...}")
          break
        case Src_editor_widget_builtIn_types.B:
        case Src_editor_widget_builtIn_types.y:
          if (Array.isArray(r)) {
            var u
            var d = Module_47.a(r)
            try {
              for (d.s(); !(u = d.n()).done;) {
                var /* [auto-meaningful-name] */u$value = u.value
                a[u$value.key] = Module_190.e(u$value.value)
              }
            } catch (f) {
              d.e(f)
            } finally {
              d.f()
            }
          } else if ("object" === typeof r) {
            a = r
          }
          s = JSON.stringify(a, l)
          break
        case Src_editor_widget_builtIn_types.G:
          s = "Column names: " + o.join(",")
      }
      return s
    }(e$watchItem, i)
    return React.createElement("div", {
      className: Module_4961.itemBox
    }, React.createElement("div", {
      className: Module_4961.name
    }, React.createElement("div", {
      className: Module_4961.screenIcon
    }, s ? GS(a, s) : ""), React.createElement(Module_748.a, {
      placement: "bottom",
      trigger: ["hover"],
      title: e$watchItem.name
    }, React.createElement("div", {
      className: Module_4961.nameText
    }, e$watchItem.name))), React.createElement("div", {
      className: Module_4961.value
    }, React.createElement("div", {
      className: Module_4961.valueText
    }, React.createElement(Module_748.a, {
      placement: "bottom",
      trigger: ["hover"],
      title: e
    }, e))), React.createElement("div", {
      className: Module_4961.action
    }, i ? "" : m, React.createElement("div", {
      className: Module_4961.closeAction,
      onClick: d
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-close-datawatch"
    })), l ? React.createElement("div", {
      className: Module_4961.foldAction,
      onClick: u
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: c.foldIcon
    })) : ""))
  }
  return React.createElement("div", {
    className: Module_4961.container
  }, e$watchItem.isFold ? g() : "", e$watchItem.type !== Src_editor_widget_builtIn_types.G || e$watchItem.isFold ? "" : g(), React.createElement(QS, {
    watchItem: e$watchItem
  }))
}
var JS = function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useSelector(function (e) {
    return e.dataWatch.variableList
  })
  var n = function (e) {
    return {
      PRIMITIVE: e.filter(function (e) {
        return "PRIMITIVE" === e.type
      }),
      LIST: e.filter(function (e) {
        return "LIST" === e.type
      }),
      DICT: e.filter(function (e) {
        return "DICT" === e.type
      }),
      TABLE_DATA_WIDGET: e.filter(function (e) {
        return "TABLE_DATA_WIDGET" === e.type
      }),
      LOCAL_STORAGE: e.filter(function (e) {
        return e.type === Src_editor_widget_builtIn_types.y || e.type === Src_editor_widget_builtIn_types.B
      })
    }
  }(t.filter(function (e) {
    return e.isWatching
  }))
  var /* [auto-meaningful-name] */n$PRIMITIVE = n.PRIMITIVE
  var /* [auto-meaningful-name] */n$LIST = n.LIST
  var /* [auto-meaningful-name] */n$DICT = n.DICT
  var /* [auto-meaningful-name] */n$TABLE_DATA_WIDGET = n.TABLE_DATA_WIDGET
  var /* [auto-meaningful-name] */n$LOCAL_STORAGE = n.LOCAL_STORAGE
  var c = function (t, n) {
    if (0 === n.size) {
      return ""
    }
    var r = n.filter(function (e) {
      return "GLOBAL" === e.screenId
    })
    var o = n.filter(function (e) {
      return "GLOBAL" !== e.screenId
    })
    var i = [].concat(Module_25.a(r), Module_25.a(o))
    var a = Module_110.b(t)
    return React.createElement("div", {
      className: Module_5681.watchBox
    }, React.createElement("div", {
      className: Module_5681.category
    }, React.createElement("div", {
      className: Module_5681.categoryIcon,
      style: {
        color: a.color,
        fontSize: a.fontSize
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: a.class
    })), React.createElement("div", {
      className: Module_5681.categoryText
    }, useIntl$formatMessage({
      id: a.text
    }))), i.map(function (e) {
      return React.createElement(ZS, {
        watchItem: e,
        key: e.id
      })
    }))
  }
  return 0 === t.size ? React.createElement("div", {
    className: Classnames(Module_5681.noData),
    style: {
      visibility: "hidden"
    }
  }, React.createElement(we, null), React.createElement("span", {
    className: Module_5681.emptyText
  }, useIntl$formatMessage({
    id: "DataWatch.unable"
  }))) : 0 === t.filter(function (e) {
    return e.isWatching
  }).size ? React.createElement("div", {
      className: Classnames(Module_5681.noData),
      style: {
        visibility: "hidden"
      }
    }, React.createElement(we, null), React.createElement("span", {
      className: Module_5681.emptyText
    }, useIntl$formatMessage({
      id: "DataWatch.empty"
    }))) : React.createElement("div", {
      className: Classnames(Module_5681.list)
    }, c("PRIMITIVE", n$PRIMITIVE), c("LIST", n$LIST), c("DICT", n$DICT), c("LOCAL_STORAGE_WIDGET", n$LOCAL_STORAGE), c("TABLE_DATA_WIDGET", n$TABLE_DATA_WIDGET))
}
export { JS }
