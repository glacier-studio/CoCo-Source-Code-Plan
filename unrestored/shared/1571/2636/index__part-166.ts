/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-166
 */

"use strict"

import { fA } from "./index__part-163"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"./190"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import { useIntl } from /* 710 */"react-intl"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_752 from /* 752 */"./752"
import /* [auto-meaningful-name] */Module_7521 from /* 752 */"./752"
var IA = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$source = e.source
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = useDispatch()
  var s = function (e) {
    a(Src_editor_redux_common_actions.mg(e))
  }
  return React.createElement("div", {
    className: Module_7521.iconLayoutItem
  }, React.createElement("div", {
    className: Module_7521.iconBox
  }, React.createElement("div", {
    onClick: function () {
      if (Module_9.ub("ICON_FILE_ID", t).length > 0 || Module_9.Hb(t)) {
        a(Src_editor_redux_common_actions.zh({
          isDangerous: true,
          onConfirm: s.bind(null, t),
          allowText: useIntl$formatMessage({
            id: "delete"
          }),
          title: useIntl$formatMessage({
            id: "deleteIconFileTitle"
          }, {
            name: Module_190.f(e$name || "", 10)
          }),
          content: useIntl$formatMessage({
            id: "deleteIconFileTips"
          })
        }))
      } else {
        s(t)
      }
    },
    className: Module_7521.delete
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-delete",
    className: Module_7521.iconDelete
  })), React.createElement("div", {
    className: Module_7521.content
  }, React.createElement("img", {
    draggable: "false",
    alt: e$name,
    src: e$cdnUrl || e$source
  }))), React.createElement("div", {
    className: Module_7521.fileItemName
  }, React.createElement(fA, {
    suffix: ".svg",
    isTrimmed: true,
    defaultValue: e$name,
    onBlur: function (e, n, r) {
      if (n) {
        if (n === e || function (e) {
          return Module_9.gb().some(function (t) {
            return t.name === e
          })
        }(n)) {
          r.target.value = e
          if (n !== e) {
            a(Src_editor_redux_common_actions.mj({
              message: useIntl$formatMessage({
                id: "renameFileNameRepeatTips"
              }),
              duration: 2e3
            }))
          }
        } else {
          a(Src_editor_redux_common_actions.pg(t, e, n))
        }
      } else {
        r.target.value = e
      }
    }.bind(null, e$name)
  })))
})
export { IA }
