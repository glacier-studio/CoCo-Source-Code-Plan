/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-122
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_621 from /* 621 */"./621"
import /* [auto-meaningful-name] */Module_6211 from /* 621 */"./621"
var JO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fields" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var i = e$getValue(n)
  var a = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = Module_9.Bb(e$widgetId)
  if (!c) {
    return React.createElement(React.Fragment, null)
  }
  return React.createElement("div", {
    className: Classnames(Module_6211.formItemWrapper, Module_6211.storageFields)
  }, React.createElement("div", {
    className: Module_6211.title
  }, React.createElement("div", null, useIntl$formatMessage({
    id: "initialData"
  })), React.createElement("span", {
    className: Module_6211.fieldsLength
  }, "键值对:", i.length)), React.createElement("div", {
    className: Module_6211.imageBox
  }, React.createElement("img", {
    className: Module_6211.image,
    src: "https://static.bcmcdn.com/coco/image/edit_localstorage_data_image.png",
    alt: "微数据库"
  }), React.createElement("div", {
    className: Module_6211.edit
  }, React.createElement("div", {
    className: Module_6211.btn,
    onClick: function () {
      if (c.type === Src_editor_widget_builtIn_types.y) {
        (function () {
          if (!c) {
            return
          }
          a(Src_editor_redux_common_actions.yj({
            title: "微数据库",
            widget: c,
            dbName: c.title,
            maxKeyLength: 2e3,
            data: i,
            onSave: function (e) {
              e.forEach(function (e) {
                if (e.key || e.value) {
                  e.value = "number" === e.type ? Number(e.value) : e.value
                }
              })
              a(Src_editor_redux_common_actions.Fg(e$widgetId, Module_25.a(e)))
            }
          }))
        })()
      } else {
        if (c.type === Src_editor_widget_builtIn_types.l) {
          (function () {
            if (!c || c.type !== Src_editor_widget_builtIn_types.l) {
              return
            }
            a(Src_editor_redux_common_actions.yj({
              title: "云微数据库",
              dbName: c.title,
              widget: c,
              maxKeyLength: 2e3,
              data: i,
              onSave: function (e) {
                a(Src_editor_redux_common_actions.Cg(e$widgetId, Module_25.a(e)))
              }
            }))
          })()
        } else {
          if (c.type === Src_editor_widget_builtIn_types.B) {
            (function () {
              if (!c) {
                return
              }
              a(Src_editor_redux_common_actions.yj({
                title: "微数据库",
                dbName: c.title,
                widget: c,
                maxKeyLength: 2e3,
                data: i,
                onSave: function (e) {
                  e.forEach(function (e) {
                    if (e.key || e.value) {
                      e.value = "number" === e.type ? Number(e.value) : e.value
                    }
                  })
                  a(Src_editor_redux_common_actions.Fg(e$widgetId, Module_25.a(e)))
                }
              }))
            })()
          }
        }
      }
    }
  }, useIntl$formatMessage({
    id: "edit"
  })))))
})
export { JO }
