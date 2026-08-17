/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：551
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import { memo, useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_487 from /* 487 */"./487/index"
import * as /* [auto-meaningful-name] */Module_488 from /* 488 */"./488/index"
import * as /* [auto-meaningful-name] */Module_278 from /* 278 */"./278"
import * as /* [auto-meaningful-name] */Module_1211 from /* 1211 */"./1211/index"
import { useSelector } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../90"
import * as /* [auto-meaningful-name] */Module_234 from /* 234 */"../234"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../53"
import * as /* [auto-meaningful-name] */Module_437 from /* 437 */"./437"
import /* [auto-meaningful-name] */Module_4371 from /* 437 */"./437"
var _a
_a = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$onDatePickerChange = e.onDatePickerChange
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
  var /* [auto-meaningful-name] */e$attributes$timeStamp = e$attributes.timeStamp
  var S = useRef(null)
  var A = new Date(e$attributes$timeStamp)
  var I = useSelector(function (e) {
    var /* [auto-meaningful-name] */e$project
    return null === e || undefined === e || null === (e$project = e.project) || undefined === e$project ? undefined : e$project.playing
  })
  return React1.createElement("div", {
    id: t,
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.n,
    "data-min-width": Module_234.l,
    "data-max-width": Module_234.j,
    "data-min-height": Module_234.k,
    "data-max-height": Module_234.i,
    className: Classnames1(Module_90.b, Module_11.a({}, Module_4371.hide, !e$visible), Module_4371.dataPicker),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      textAlign: "center",
      fontSize: e$attributes$fontSize,
      color: Color1(e$attributes$color).toString(),
      backgroundColor: Color1(e$attributes$backgroundColor).toString(),
      borderRadius: "18px"
    },
    ref: S
  }, React1.createElement(Module_278.a, {
    utils: Module_487.a,
    locale: Module_488.a
  }, React1.createElement(Module_1211.a, {
    format: "yyyy年MM月dd日",
    value: A,
    onChange: function (e) {
      if (e && e$onDatePickerChange) {
        e$onDatePickerChange(e)
      }
    },
    TextFieldComponent: function (e) {
      return React1.createElement("div", {
        style: {
          textAlign: "center",
          fontSize: e$attributes$fontSize,
          color: e$attributes$color,
          backgroundColor: e$attributes$backgroundColor,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "18px"
        },
        id: "date-picker-".concat(t),
        onClick: function () {
          if (null === e || undefined === e ? undefined : e.onClick) {
            e.onClick()
          }
        }
      }, (null === e || undefined === e ? undefined : e.value) || "")
    },
    cancelLabel: "取消",
    okLabel: "确定"
  })), undefined !== I && !I && React1.createElement("div", {
    className: Classnames1(Module_4371.mask),
    onClick: function () {
      var e
      var /* [auto-meaningful-name] */S$current = S.current
      if (S$current) {
        if (S$current.dataset.clickType === Module_53.h.CLICK) {
          if (!(null === (e = document.getElementById("date-picker-".concat(t))) || undefined === e)) {
            e.click()
          }
        }
      }
    }
  }))
})
export { _a as a }
export default _a
