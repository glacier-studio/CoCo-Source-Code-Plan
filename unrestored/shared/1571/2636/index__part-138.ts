/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-138
 */

"use strict"

import { py } from "./index__part-102"
import { Mw, aC, sC, cC } from "./index__part-137"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_357 from /* 357 */"./357"
import /* [auto-meaningful-name] */Module_3571 from /* 357 */"./357"
var /* [auto-meaningful-name] */py$Option = py.Option
var hC = memo(function (e) {
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = Module_9.Bb(e$widgetId)
  var o = useRef(null)
  var i = useDispatch()
  var a = useSelector(function (e) {
    return e.common.userInfo
  })
  var s = aC()
  var /* [auto-meaningful-name] */s$dataSourceId = s.dataSourceId
  var /* [auto-meaningful-name] */s$cloudDataSources = s.cloudDataSources
  var /* [auto-meaningful-name] */s$bindDataSourceId = s.bindDataSourceId
  var /* [auto-meaningful-name] */s$addItemHover = s.addItemHover
  var /* [auto-meaningful-name] */s$onMouseOut = s.onMouseOut
  var /* [auto-meaningful-name] */s$onMouseOver = s.onMouseOver
  var g = sC()
  var v = cC()
  var /* [auto-meaningful-name] */v$handleVisitCloudSpace = v.handleVisitCloudSpace
  var /* [auto-meaningful-name] */v$handleVisitDataSource = v.handleVisitDataSource
  var E = useState(false)
  var O = Module_10.a(E, 2)
  var w = O[0]
  var C = O[1]
  if (!r) {
    return React.createElement(React.Fragment, null)
  }
  var T = function () {
    C(false)
    i(Src_editor_redux_common_actions.Ch())
  }
  var j = React.createElement(py, {
    open: w,
    listItemHeight: 40,
    listHeight: 200,
    allowClear: true,
    onDropdownVisibleChange: function (e) {
      return C(e)
    },
    disabled: !g,
    optionLabelProp: "label",
    ref: o,
    dropdownRender: function (e) {
      var t = React.createElement(React.Fragment, null, React.createElement("div", {
        onMouseOut: s$onMouseOut,
        onMouseOver: s$onMouseOver,
        className: Classnames(Module_3571.optionItem, Module_3571.addTable),
        onClick: function () {
          var /* [auto-meaningful-name] */o$current
          if (!(null === o || undefined === o || null === (o$current = o.current) || undefined === o$current)) {
            o$current.blur()
          }
          v$handleVisitCloudSpace(Mw.Table)
        }
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-add"
      }), React.createElement("div", {
        className: Module_3571.newText
      }, useIntl$formatMessage({
        id: "cloudSpace.newTable"
      })), React.createElement("div", {
        className: Module_3571.suffixIcon
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-return-arrow"
      }))), s$cloudDataSources.length > 0 ? React.createElement("div", {
        className: Classnames(Module_3571.line, s$addItemHover ? Module_3571.hideLine : "")
      }) : "", s$cloudDataSources.length > 0 ? React.createElement("div", null, e) : "")
      var r = React.createElement(Src_shared_ui_components_index.d, {
        type: "primary",
        onClick: T
      }, useIntl$formatMessage({
        id: "cloudSpace.needLogin"
      }))
      return React.createElement("div", {
        className: Classnames("cloudTableDropdown", a ? "" : Module_3571.unLoginDropdown, s$addItemHover ? "addBtnActive" : "")
      }, a ? t : r)
    },
    value: s$dataSourceId,
    defaultValue: undefined,
    onChange: function (e) {
      C(false)
      s$bindDataSourceId(e || Module_9.i)
    },
    dropdownClassName: Module_3571.cloudSpaceAntSelectDropdown,
    placeholder: useIntl$formatMessage({
      id: "cloudSpace.ChooseDataSource"
    })
  }, s$cloudDataSources.map(function (e) {
    return React.createElement(py$Option, {
      label: e.name,
      value: e.id,
      key: e.id
    }, React.createElement("div", {
      className: Classnames(Module_3571.optionRenderBox)
    }, React.createElement("div", {
      className: Classnames(Module_3571.prefixIcon, "spaceCloud-select-icon")
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-widget-cloud-table"
    })), React.createElement("div", {
      className: Classnames(Module_3571.tableName, s$dataSourceId === e.id ? Module_3571.optionSelected : "")
    }, React.createElement("div", {
      className: Module_3571.nameText
    }, e.name)), React.createElement("div", {
      className: Module_3571.suffixIcon,
      onClick: function (t) {
        return v$handleVisitDataSource("table", e.id)
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-return-arrow"
    }))))
  }))
  return React.createElement("div", {
    className: Classnames(Module_3571.formItemWrapper, Module_3571.tableFields)
  }, React.createElement("div", {
    className: Module_3571.title
  }, React.createElement("div", null, useIntl$formatMessage({
    id: "cloudSpace.DataSource"
  }))), React.createElement("div", {
    className: Module_3571.bindSource
  }, g ? j : React.createElement(Module_748.a, {
    placement: "bottom",
    title: useIntl$formatMessage({
      id: "cloudSpace.onlyAuthorCanEdit"
    })
  }, j)))
})
export { hC }
