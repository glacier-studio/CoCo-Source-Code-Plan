/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-137
 */

"use strict"

import { py } from "./index__part-102"
var Mw
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, memo, useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_368 from /* 368 */"./368"
import /* [auto-meaningful-name] */Module_3681 from /* 368 */"./368"
function aC() {
  var e = useDispatch()
  var t = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var n = Module_9.Bb(t || "")
  var r = (null === n || undefined === n ? undefined : n.type) === Src_editor_widget_builtIn_types.j ? "cloudDictList" : "cloudTableList"
  var o = useSelector(function (e) {
    return e.cloudSpace[r]
  })
  var i = useState(false)
  var a = Module_10.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = undefined
  if ((null === n || undefined === n ? undefined : n.type) === Src_editor_widget_builtIn_types.j) {
    l = n.attributes.cloudDictId
  }
  if ((null === n || undefined === n ? undefined : n.type) === Src_editor_widget_builtIn_types.k) {
    l = n.attributes.cloudTableId
  }
  if (l === Module_9.i) {
    l = undefined
  }
  if (!n) {
    return {
      dataSourceId: l,
      cloudDataSources: o,
      bindDataSourceId: function () {}
    }
  }
  var u = function () {
    var t = Module_7.a(RegeneratorRuntime.mark(function t(n) {
      var r
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.next = 2
              return Src_editor_redux_common_actions.Nf(e, Src_editor_redux_common_actions.Pf(n))
            case 2:
              if (!(null === (r = Module_26.g.getToolbox()) || undefined === r)) {
                r.refresh_selection()
              }
            case 3:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }()
  var d = function () {
    var t = Module_7.a(RegeneratorRuntime.mark(function t(n) {
      var r
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.next = 2
              return Src_editor_redux_common_actions.Nf(e, Src_editor_redux_common_actions.Rf(n, false))
            case 2:
              if (!(null === (r = Module_26.g.getToolbox()) || undefined === r)) {
                r.refresh_selection()
              }
            case 3:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }()
  return {
    dataSourceId: l,
    cloudDataSources: o,
    bindDataSourceId: function (t) {
      var r = ""
      if (n.type === Src_editor_widget_builtIn_types.j) {
        r = "cloudDictId"
        if (t) {
          u(t)
        }
        Module_26.r(n.id)
      }
      if (n.type === Src_editor_widget_builtIn_types.k) {
        r = "cloudTableId"
        Module_26.s(n.id)
        if (t) {
          d(t)
        }
      }
      e(Src_editor_redux_common_actions.Lg(n.id, r, t, true, true, true))
    },
    addItemHover: s,
    onMouseOver: function () {
      c(true)
    },
    onMouseOut: function () {
      c(false)
    }
  }
}
function sC() {
  return useSelector(function (e) {
    return e.oTState.isAuthor
  })
}
function cC() {
  var e = function (e) {
    window.open("".concat(Src_shared_tools_index.A(), "/dashboard/dict/").concat(e), "_blank")
  }
  var t = function (e) {
    window.open("".concat(Src_shared_tools_index.A(), "/dashboard/table/").concat(e), "_blank")
  }
  return {
    handleVisitCloudSpace: function (e) {
      if (e) {
        window.open("".concat(Src_shared_tools_index.A(), "/dashboard/?createType=").concat(e), "_blank")
      } else {
        window.open("".concat(Src_shared_tools_index.A(), "/"), "_blank")
      }
    },
    handleVisitDataSource: function () {
      var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "dict"
      var r = arguments.length > 1 ? arguments[1] : undefined
      if (!r) {
        return window.open("".concat(Src_shared_tools_index.A()), "_blank")
      }
      if ("dict" === n) {
        e(r)
      }
      if ("table" === n) {
        t(r)
      }
    }
  }
}
!function (e) {
  e.Dict = "Dict"
  e.Table = "Table"
}(Mw || (Mw = {}))
var /* [auto-meaningful-name] */py$Option = py.Option
var uC = memo(function (e) {
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = useDispatch()
  var o = Module_9.Bb(e$widgetId)
  var i = useRef(null)
  var a = aC()
  var /* [auto-meaningful-name] */a$dataSourceId = a.dataSourceId
  var /* [auto-meaningful-name] */a$cloudDataSources = a.cloudDataSources
  var /* [auto-meaningful-name] */a$bindDataSourceId = a.bindDataSourceId
  var /* [auto-meaningful-name] */a$addItemHover = a.addItemHover
  var /* [auto-meaningful-name] */a$onMouseOut = a.onMouseOut
  var /* [auto-meaningful-name] */a$onMouseOver = a.onMouseOver
  var m = sC()
  var g = cC()
  var /* [auto-meaningful-name] */g$handleVisitCloudSpace = g.handleVisitCloudSpace
  var /* [auto-meaningful-name] */g$handleVisitDataSource = g.handleVisitDataSource
  var y = useSelector(function (e) {
    return e.common.userInfo
  })
  var E = useState(false)
  var O = Module_10.a(E, 2)
  var w = O[0]
  var C = O[1]
  if (!o) {
    return React.createElement(React.Fragment, null)
  }
  var T = function () {
    C(false)
    r(Src_editor_redux_common_actions.Ch())
  }
  var j = React.createElement(py, {
    disabled: !m,
    optionLabelProp: "label",
    open: w,
    listItemHeight: 40,
    listHeight: 200,
    allowClear: true,
    onDropdownVisibleChange: function (e) {
      return C(e)
    },
    ref: i,
    dropdownRender: function (e) {
      var t = React.createElement(React.Fragment, null, React.createElement("div", {
        onMouseOut: a$onMouseOut,
        onMouseOver: a$onMouseOver,
        className: Classnames(Module_3681.addDict),
        onClick: function () {
          var /* [auto-meaningful-name] */i$current
          if (!(null === i || undefined === i || null === (i$current = i.current) || undefined === i$current)) {
            i$current.blur()
          }
          g$handleVisitCloudSpace(Mw.Dict)
        }
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-add"
      }), React.createElement("div", {
        className: Module_3681.newText
      }, useIntl$formatMessage({
        id: "cloudSpace.newDict"
      })), React.createElement("div", {
        className: Module_3681.suffixIcon
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-return-arrow"
      }))), a$cloudDataSources.length > 0 ? React.createElement("div", {
        className: Classnames(Module_3681.line, a$addItemHover ? Module_3681.hideLine : "")
      }) : "", a$cloudDataSources.length > 0 ? React.createElement("div", null, e) : "")
      var r = React.createElement(Src_shared_ui_components_index.d, {
        type: "primary",
        onClick: T
      }, useIntl$formatMessage({
        id: "cloudSpace.needLogin"
      }))
      return React.createElement("div", {
        className: Classnames("cloudDictDropdown", y ? "" : Module_3681.unLoginDropdown, a$addItemHover ? "addBtnActive" : "")
      }, y ? t : r)
    },
    value: a$dataSourceId,
    defaultValue: undefined,
    onChange: function (e) {
      C(false)
      a$bindDataSourceId(e || Module_9.i)
    },
    dropdownClassName: Module_3681.cloudSpaceAntSelectDropdown,
    placeholder: useIntl$formatMessage({
      id: "cloudSpace.ChooseDataSource"
    })
  }, a$cloudDataSources.map(function (e) {
    return React.createElement(py$Option, {
      label: e.name,
      value: e.id,
      key: e.id
    }, React.createElement("div", {
      className: Classnames(Module_3681.optionRenderBox)
    }, React.createElement("div", {
      className: Classnames(Module_3681.prefixIcon, "spaceCloud-select-icon")
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-widget-cloud-dict"
    })), React.createElement("div", {
      className: Classnames(Module_3681.dictName, a$dataSourceId === e.id ? Module_3681.optionSelected : "")
    }, React.createElement("div", {
      className: Module_3681.nameText
    }, e.name)), React.createElement("div", {
      className: Module_3681.suffixIcon,
      onClick: function (t) {
        g$handleVisitDataSource("dict", e.id)
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-return-arrow"
    }))))
  }))
  return React.createElement("div", {
    className: Classnames(Module_3681.formItemWrapper, Module_3681.dictFields)
  }, React.createElement("div", {
    className: Module_3681.title
  }, React.createElement("div", null, useIntl$formatMessage({
    id: "cloudSpace.DataSource"
  }))), React.createElement("div", {
    className: Module_3681.bindSource
  }, m ? j : React.createElement(Module_748.a, {
    placement: "bottom",
    title: useIntl$formatMessage({
      id: "cloudSpace.onlyAuthorCanEdit"
    })
  }, j)))
})
export { Mw }
export { aC }
export { sC }
export { cC }
export { uC }
