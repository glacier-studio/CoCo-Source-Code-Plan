/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-207
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_348 from /* 348 */"./348"
import /* [auto-meaningful-name] */Module_3481 from /* 348 */"./348"
var zL = memo(function (e) {
  var t = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = function () {
    var r = Module_7.a(RegeneratorRuntime.mark(function r(o) {
      var i
      var a
      return RegeneratorRuntime.wrap(function (r) {
        for (;;) {
          switch (r.prev = r.next) {
            case 0:
              if (o && 0 !== o.length) {
                r.next = 2
                break
              }
              return r.abrupt("return")
            case 2:
              i = o[0]
              a = function () {
                var r = Module_7.a(RegeneratorRuntime.mark(function r(o) {
                  var /* [auto-meaningful-name] */r$sent
                  var a
                  var s
                  return RegeneratorRuntime.wrap(function (r) {
                    for (;;) {
                      switch (r.prev = r.next) {
                        case 0:
                          if (5242880, !(Number(o.size) > 5242880)) {
                            r.next = 4
                            break
                          }
                          t(Src_editor_redux_common_actions.mj({
                            message: useIntl$formatMessage({
                              id: "cloudGrid.FileSizeLimit"
                            })
                          }))
                          return r.abrupt("return", false)
                        case 4:
                          r.prev = 4
                          r.next = 7
                          return Src_shared_tools_index.fb(o)
                        case 7:
                          if (!(r$sent = r.sent)) {
                            r.next = 23
                            break
                          }
                          if (!((a = Object.keys(r$sent.header)).length > 10)) {
                            r.next = 13
                            break
                          }
                          t(Src_editor_redux_common_actions.mj({
                            message: useIntl$formatMessage({
                              id: "cloudGrid.FileColumnSizeLimit"
                            })
                          }))
                          return r.abrupt("return")
                        case 13:
                          if (s = a.map(function (e) {
                            return r$sent.header[e].field
                          }), new Set(s).size === s.length) {
                            r.next = 17
                            break
                          }
                          t(Src_editor_redux_common_actions.mj({
                            message: useIntl$formatMessage({
                              id: "cloudGrid.FileColumnNameRepeat"
                            })
                          }))
                          return r.abrupt("return")
                        case 17:
                          if (r$sent.data = r$sent.data.filter(function (e) {
                            return Object.keys(e).length > 1
                          }), !(r$sent.data.length > 500)) {
                            r.next = 21
                            break
                          }
                          t(Src_editor_redux_common_actions.mj({
                            message: useIntl$formatMessage({
                              id: "cloudGrid.FileRowSizeLimit"
                            })
                          }))
                          return r.abrupt("return")
                        case 21:
                          e.handleSetGridInfo(r$sent.data, r$sent.header)
                          t(Src_editor_redux_common_actions.mj({
                            message: useIntl$formatMessage({
                              id: "cloudGrid.fileImportSuccess"
                            })
                          }))
                        case 23:
                          r.next = 29
                          break
                        case 25:
                          r.prev = 25
                          r.t0 = r.catch(4)
                          console.info(r.t0)
                          if ("cell length larger than 1000" === r.t0.error) {
                            t(Src_editor_redux_common_actions.mj({
                              message: useIntl$formatMessage({
                                id: "cloudGrid.FileCellSizeLimit"
                              })
                            }))
                          }
                        case 29:
                        case "end":
                          return r.stop()
                      }
                    }
                  }, r, null, [[4, 25]])
                }))
                return function (e) {
                  return r.apply(this, arguments)
                }
              }()
              if (0 === e.getColumnInfo().length) {
                a(i)
              } else {
                t(Src_editor_redux_common_actions.zh({
                  onConfirm: function () {
                    a(i)
                  },
                  allowText: useIntl$formatMessage({
                    id: "confirm"
                  }),
                  title: useIntl$formatMessage({
                    id: "cloudGrid.importCoverTitle"
                  }),
                  content: useIntl$formatMessage({
                    id: "cloudGrid.importCoverTitleContent"
                  })
                }))
              }
            case 5:
            case "end":
              return r.stop()
          }
        }
      }, r)
    }))
    return function (e) {
      return r.apply(this, arguments)
    }
  }()
  return React.createElement(Src_shared_ui_components_index.B, {
    onChange: r,
    accept: ".xlsx, .xls, .csv",
    className: Module_3481.uploadButton
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "cloudGrid.FileImport"
  })))
})
export { zL }
