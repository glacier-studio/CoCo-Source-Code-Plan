/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-169
 */

"use strict"

import { GS } from "./index__part-158"
import { XA } from "./index__part-168"
import * as /* [auto-meaningful-name] */Module_110 from /* 110 */"./110"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useState, useImperativeHandle } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_237 from /* 237 */"./237"
import /* [auto-meaningful-name] */Module_2371 from /* 237 */"./237"
function JA(e, t) {
  var n = e.filter(function (e) {
    return "GLOBAL" !== e.screenId
  })
  var r = e.filter(function (e) {
    return "GLOBAL" === e.screenId
  })
  var o = n.sort(function (e, n) {
    return t.findIndex(function (t) {
      return t.id === e.screenId
    }) - t.findIndex(function (e) {
      return e.id === n.screenId
    })
  })
  return [].concat(Module_25.a(r), Module_25.a(o))
}
var $A = React.memo(React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = useDispatch()
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$setVisible = e.setVisible
  var a = useRef(null)
  var s = function () {
    var e = useSelector(function (e) {
      return e.dataWatch.variableList
    })
    var t = useSelector(function (e) {
      return e.project.screens
    })
    return {
      Primitives: JA(e.filter(function (e) {
        return "PRIMITIVE" === e.type
      }), t),
      Lists: JA(e.filter(function (e) {
        return "LIST" === e.type
      }), t),
      Dictionaries: JA(e.filter(function (e) {
        return "DICT" === e.type
      }), t),
      TableDataWidgets: JA(e.filter(function (e) {
        return e.type === Src_editor_widget_builtIn_types.G
      }), t),
      LocalStorageWidgets: JA(e.filter(function (e) {
        return e.type === Src_editor_widget_builtIn_types.B || e.type === Src_editor_widget_builtIn_types.y
      }), t),
      variableList: e
    }
  }()
  var c = useState("")
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useRef({})
  var /* [auto-meaningful-name] */s$Primitives = s.Primitives
  var /* [auto-meaningful-name] */s$Lists = s.Lists
  var /* [auto-meaningful-name] */s$Dictionaries = s.Dictionaries
  var /* [auto-meaningful-name] */s$LocalStorageWidgets = s.LocalStorageWidgets
  var /* [auto-meaningful-name] */s$TableDataWidgets = s.TableDataWidgets
  var /* [auto-meaningful-name] */s$variableList = s.variableList
  var O = useSelector(function (e) {
    return e.project.screens
  })
  var w = function (e) {
    r(Src_editor_redux_common_actions.Pj(e.id, "selected", true))
    p.current[e.id] = Date.now()
  }
  var C = function (e) {
    r(Src_editor_redux_common_actions.Pj(e.id, "selected", false))
    delete p.current[e.id]
  }
  var T = function (e, t) {
    if (0 === t.length) {
      return null
    }
    var r = Module_110.b(e)
    var o = t.map(function (e) {
      return A(e)
    }).filter(function (e) {
      return e
    })
    return 0 !== o.length ? React.createElement("div", {
      className: Module_2371.type
    }, React.createElement("div", {
      className: Module_2371.icon
    }, React.createElement("div", {
      className: Module_2371.categoryIcon,
      style: {
        color: r.color,
        fontSize: r.fontSize
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: r.class
    })), React.createElement("span", {
      className: Module_2371.text
    }, useIntl$formatMessage({
      id: r.text
    }))), o) : undefined
  }
  var A = function (e) {
    if (u && !e.name.toLowerCase().includes(u.toLowerCase())) {
      return null
    }
    var t
    var n = O.findIndex(function (t) {
      return t.id === e.screenId
    })
    var r = null
    if (n >= 0) {
      r = React.createElement("div", {
        className: Module_2371.screenInfoBox
      }, React.createElement("div", {
        className: Module_2371.screenTitle
      }, React.createElement("div", {
        className: Module_2371.screenTitleText
      }, null === (t = O.get(n)) || undefined === t ? undefined : t.title)), React.createElement("div", {
        className: Module_2371.screenIconBox
      }, GS(n)))
    }
    return React.createElement("div", {
      className: Module_2371.option,
      key: e.id,
      onClick: function () {
        if (e.selected) {
          C(e)
        } else {
          w(e)
        }
      }
    }, React.createElement("div", {
      className: Module_2371.checkbox
    }, React.createElement(XA, {
      checked: e.selected,
      onChange: function (t) {
        if (t.target) {
          if (t.target.checked) {
            w(e)
          } else {
            C(e)
          }
        }
      }
    })), React.createElement("div", {
      className: Module_2371.name
    }, React.createElement("div", {
      className: Module_2371.nameText
    }, e.name)), r)
  }
  var j = function () {
    s$variableList.forEach(function (e) {
      r(Src_editor_redux_common_actions.Pj(e.id, "selected", e.isWatching))
    })
    e$setVisible(false)
  }
  useImperativeHandle(t, function () {
    return {
      cancel: j
    }
  })
  if (!e$visible) {
    return null
  }
  return React.createElement("div", {
    className: Module_2371.container,
    ref: a
  }, React.createElement("div", {
    className: Module_2371.leftSelect
  }, React.createElement("div", {
    className: Module_2371.searchInputBox
  }, React.createElement(Src_shared_ui_components_index.k, {
    value: u,
    className: Classnames(Module_2371.searchInput),
    onClearCallback: function () {
      d("")
    },
    placeholder: useIntl$formatMessage({
      id: "DataWatch.search"
    }),
    onChange: function (e) {
      d(e)
    },
    clearButtonVisible: !!u,
    before: React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-material-search"
    })
  })), function () {
    if (0 === s$variableList.size) {
      return React.createElement("div", {
        className: Module_2371.empty
      }, useIntl$formatMessage({
        id: "DataWatch.noData"
      }))
    }
    var e = T("PRIMITIVE", s$Primitives)
    var t = T("LIST", s$Lists)
    var r = T("DICT", s$Dictionaries)
    var o = T("LOCAL_STORAGE_WIDGET", s$LocalStorageWidgets)
    var i = T("TABLE_DATA_WIDGET", s$TableDataWidgets)
    return s$variableList.find(function (e) {
      return e.name.toLowerCase().includes(u.toLowerCase())
    }) ? React.createElement("div", {
        className: Module_2371.renderSelectBox
      }, e, t, r, o, i) : React.createElement("div", {
        className: Module_2371.empty
      }, useIntl$formatMessage({
        id: "DataWatch.searchEmpty"
      }))
  }()), React.createElement("div", {
    className: Module_2371.rightSelected
  }, React.createElement("div", {
    className: Module_2371.addedTitle
  }, "已添加数据"), React.createElement("div", {
    className: Module_2371.selectedItems
  }, s$variableList.filter(function (e) {
    return e.selected
  }).sort(function (e, t) {
    return p.current[e.id] - p.current[t.id]
  }).map(function (e) {
    return function (e) {
      var t
      var n = Module_110.b(e.type)
      var r = O.findIndex(function (t) {
        return t.id === e.screenId
      })
      var o = null
      if (r >= 0) {
        o = React.createElement("div", {
          className: Module_2371.screenInfoBox
        }, React.createElement("div", {
          className: Module_2371.screenTitle
        }, React.createElement("div", {
          className: Module_2371.screenTitleText
        }, null === (t = O.get(r)) || undefined === t ? undefined : t.title)), React.createElement("div", {
          className: Module_2371.screenIconBox
        }, GS(r)))
      }
      return React.createElement("div", {
        className: Classnames(Module_2371.option, Module_2371.selectedBox),
        key: e.id
      }, React.createElement("div", {
        className: Module_2371.categoryIcon,
        style: {
          color: n.color,
          fontSize: n.fontSize
        }
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: n.class
      })), React.createElement("div", {
        className: Module_2371.name
      }, React.createElement("div", {
        className: Module_2371.nameText
      }, e.name)), o, React.createElement("div", {
        onClick: function () {
          return C(e)
        },
        className: Classnames(Module_2371.closeIcon, "watchItemCloseIcon")
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-close"
      })))
    }(e)
  })), React.createElement("div", {
    className: Module_2371.actions
  }, React.createElement(Src_shared_ui_components_index.d, {
    style: {
      width: "84px",
      marginRight: "14px"
    },
    onClick: j
  }, useIntl$formatMessage({
    id: "DataWatch.cancel"
  })), React.createElement(Src_shared_ui_components_index.d, {
    style: {
      width: "84px"
    },
    type: "primary",
    onClick: function () {
      s$variableList.forEach(function (e) {
        r(Src_editor_redux_common_actions.Pj(e.id, "isWatching", e.selected))
      })
      e$setVisible(false)
    }
  }, useIntl$formatMessage({
    id: "DataWatch.confirm"
  })))))
}))
export { $A }
