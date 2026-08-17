/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-172
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_623 from /* 623 */"./623"
import /* [auto-meaningful-name] */Module_6231 from /* 623 */"./623"
import * as /* [auto-meaningful-name] */Module_1527 from /* 1527 */"./1527"
import /* [auto-meaningful-name] */Module_15271 from /* 1527 */"./1527"
var hI = memo(function (e) {
  var t = useSelector(function (e) {
    return e.common.importFailToastInfo
  })
  var /* [auto-meaningful-name] */t$visible = t.visible
  var /* [auto-meaningful-name] */t$importFailResults = t.importFailResults
  var /* [auto-meaningful-name] */t$fileType = t.fileType
  var i = useDispatch()
  var a = useState([])
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var d = useState(false)
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState("importImageFailTitle")
  var b = Module_10.a(v, 2)
  var y = b[0]
  var w = b[1]
  function C() {
    i(Src_editor_redux_common_actions.rh())
  }
  useEffect(function () {
    function e() {
      return (e = Module_7.a(RegeneratorRuntime.mark(function e() {
        var t
        var o
        var i
        var a
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (t = [], !t$visible) {
                  e.next = 14
                  break
                }
                o = 0
              case 3:
                if (!(o < t$importFailResults.length)) {
                  e.next = 14
                  break
                }
                i = t$importFailResults[o]
                a = Src_shared_tools_index.ob(i.file)
                e.next = 8
                return Src_shared_tools_index.c(i.file)
              case 8:
                if (!e.sent) {
                  a = Module_15271
                }
                t.push({
                  url: a,
                  message: i.message,
                  name: i.file.name
                })
              case 11:
                o++
                e.next = 3
                break
              case 14:
                l(t)
              case 15:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))).apply(this, arguments)
    }
    g(false);
    (function () {
      e.apply(this, arguments)
    })()
  }, [t$importFailResults, t$visible])
  useEffect(function () {
    if ("sound" === t$fileType) {
      w("importSoundFailTitle")
    } else {
      if ("image" === t$fileType) {
        w("importImageFailTitle")
      }
    }
  }, [t$fileType])
  return React.createElement("div", {
    className: Classnames(Module_6231.importFailToast, Module_11.a({}, Module_6231.extensional, m)),
    style: {
      display: t$visible ? "block" : "none"
    }
  }, React.createElement("div", {
    className: Module_6231.title
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-warning"
  }), React.createElement("p", null, t$importFailResults.length, " ", useIntl$formatMessage({
    id: y
  })), React.createElement("span", {
    className: "showImportFailDetail",
    onClick: function () {
      g(true)
    }
  }, useIntl$formatMessage({
    id: "importFailDetail"
  })), React.createElement("span", {
    onClick: C
  }, useIntl$formatMessage({
    id: "close"
  }))), m && React.createElement(React.Fragment, null, React.createElement("ul", {
    className: Module_6231.main
  }, c.map(function (e) {
    return React.createElement("li", {
      key: e.name
    }, React.createElement("div", {
      className: Module_6231.left
    }, React.createElement("div", {
      className: Module_6231.imgBox
    }, React.createElement("img", {
      src: e.url,
      alt: ""
    })), React.createElement("span", null, e.name)), React.createElement("div", {
      className: Module_6231.errorMessage
    }, e.message))
  })), React.createElement(Src_shared_ui_components_index.d, {
    type: "primary",
    className: Module_6231.confirmButton,
    onClick: C
  }, useIntl$formatMessage({
    id: "know"
  }))))
})
export { hI }
