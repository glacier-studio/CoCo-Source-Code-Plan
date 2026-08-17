/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-215
 */

"use strict"

var RP
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"./238"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1538 from /* 1538 */"./1538"
import /* [auto-meaningful-name] */Module_15381 from /* 1538 */"./1538"
import * as /* [auto-meaningful-name] */Module_1539 from /* 1539 */"./1539"
import /* [auto-meaningful-name] */Module_15391 from /* 1539 */"./1539"
import * as /* [auto-meaningful-name] */Module_1540 from /* 1540 */"./1540"
import /* [auto-meaningful-name] */Module_15401 from /* 1540 */"./1540"
import * as /* [auto-meaningful-name] */Module_282 from /* 282 */"./282"
import /* [auto-meaningful-name] */Module_2821 from /* 282 */"./282"
!function (e) {
  e.TABLE_DATA = "TABLE_DATA"
  e.CLOUD_SPACE_TABLE = "CLOUD_SPACE_TABLE"
}(RP || (RP = {}))
var zP = memo(function () {
  var e = useSelector(function (e) {
    return e.common.createTableDataDialog
  })
  var t = useSelector(function (e) {
    return e.oTState.isAuthor
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onConfirm = e.onConfirm
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var i = useState(RP.TABLE_DATA)
  var a = Module_10.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useState(false)
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = useDispatch()
  var g = Module_238.d()
  useEffect(function () {
    if (e$visible) {
      p(false)
      c(RP.TABLE_DATA)
    }
  }, [e$visible])
  var v = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (s !== RP.CLOUD_SPACE_TABLE) {
                e.next = 3
                break
              }
              p(true)
              return e.abrupt("return")
            case 3:
              e.next = 5
              return Src_editor_redux_common_actions.Nf(m, Src_editor_redux_common_actions.hg((null === g || undefined === g ? undefined : g.id) || "", Src_editor_widget_builtIn_types.G, {
                x: 0,
                y: 0
              }))
            case 5:
              e$sent = e.sent
              if (e$onConfirm) {
                e$onConfirm(e$sent)
              }
              m(Src_editor_redux_common_actions.mh())
            case 8:
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
  var b = function (e) {
    if (t || e !== RP.CLOUD_SPACE_TABLE) {
      c(e)
    }
  }
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: e$visible,
    withPortal: true,
    onClose: function () {
      m(Src_editor_redux_common_actions.mh())
    }
  }, d && React.createElement(React.Fragment, null, React.createElement("div", {
    className: Module_2821.tableDataTitle
  }, React.createElement("div", {
    onClick: function () {
      p(false)
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-arrow-down",
    className: Module_2821.backIcon
  })), useIntl$formatMessage({
    id: "ListViewerWidget.createCloudTable"
  })), React.createElement("div", {
    className: Module_2821.cloudSpaceTipsContent
  }, React.createElement("div", {
    className: Module_2821.imageBox
  }, React.createElement("img", {
    className: Module_2821.logoImage,
    src: Module_15381,
    alt: ""
  }), React.createElement("img", {
    className: Module_2821.arrowImage,
    src: Module_15391,
    alt: ""
  }), React.createElement("img", {
    className: Module_2821.logoImage,
    src: Module_15401,
    alt: ""
  })), React.createElement("div", null, useIntl$formatMessage({
    id: "ListViewerWidget.toCloudSpaceDomainTips"
  }))), React.createElement("div", {
    className: Classnames(Module_2821.confirmBox, Module_2821.cloudSpaceConfirm)
  }, React.createElement(Src_shared_ui_components_index.d, {
    onClick: function () {
      window.open("".concat(Src_shared_tools_index.A(), "/dashboard/?createType=Table"), "_blank")
      m(Src_editor_redux_common_actions.mh())
    },
    type: "primary"
  }, useIntl$formatMessage({
    id: "ListViewerWidget.toCloudSpaceDomain"
  })))), !d && React.createElement(React.Fragment, null, React.createElement("p", {
    className: Module_2821.tableDataTitle
  }, useIntl$formatMessage({
    id: "ListViewerWidget.createDataSource"
  })), React.createElement("div", {
    className: Module_2821.tableDataList
  }, React.createElement("div", {
    onClick: b.bind(null, RP.TABLE_DATA),
    className: Classnames(Module_2821.tableDataItem, Module_2821.yellow, RP.TABLE_DATA === s && Module_2821.active)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-source-table-data",
    className: Module_2821.icon
  }), React.createElement("div", {
    className: Module_2821.name
  }, useIntl$formatMessage({
    id: "ListViewerWidget.tableData"
  })), React.createElement("div", {
    className: Module_2821.desc
  }, useIntl$formatMessage({
    id: "ListViewerWidget.tableDataDesc"
  }))), React.createElement("div", {
    onClick: b.bind(null, RP.CLOUD_SPACE_TABLE),
    className: Classnames(Module_2821.tableDataItem, t ? Module_2821.blue : Module_2821.disable, RP.CLOUD_SPACE_TABLE === s && Module_2821.active)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-source-cloud-data",
    className: Module_2821.icon
  }), t ? React.createElement("div", {
    className: Module_2821.name
  }, useIntl$formatMessage({
    id: "ListViewerWidget.cloudTable"
  })) : React.createElement(Module_748.a, {
    placement: "bottom",
    title: useIntl$formatMessage({
      id: "ListViewerWidget.cloudTableOtTips"
    })
  }, React.createElement("div", {
    className: Module_2821.name
  }, useIntl$formatMessage({
    id: "ListViewerWidget.cloudTable"
  }), React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-locked"
  }))), React.createElement("div", {
    className: Module_2821.desc
  }, useIntl$formatMessage({
    id: "ListViewerWidget.cloudTableDesc"
  })))), React.createElement("div", {
    className: Module_2821.confirmBox
  }, React.createElement(Src_shared_ui_components_index.d, {
    onClick: v,
    type: "primary"
  }, useIntl$formatMessage({
    id: "confirm"
  })))))
})
export { zP }
