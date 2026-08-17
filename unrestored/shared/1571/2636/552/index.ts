/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：552
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import { memo, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_487 from /* 487 */"../551/487/index"
import * as /* [auto-meaningful-name] */Module_488 from /* 488 */"../551/488/index"
import * as /* [auto-meaningful-name] */Module_278 from /* 278 */"../551/278"
import * as /* [auto-meaningful-name] */Module_1214 from /* 1214 */"./1214/index"
import { useSelector } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../90"
import * as /* [auto-meaningful-name] */Module_235 from /* 235 */"../235"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../28/index"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../53"
import * as /* [auto-meaningful-name] */Module_438 from /* 438 */"./438"
import /* [auto-meaningful-name] */Module_4381 from /* 438 */"./438"
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
  var A = useRef(null)
  var I = new Date(e$attributes$timeStamp)
  var j = useSelector(function (e) {
    var /* [auto-meaningful-name] */e$project
    return null === e || undefined === e || null === (e$project = e.project) || undefined === e$project ? undefined : e$project.playing
  })
  var N = useRef(false)
  var R = function (e) {
    if (N.current) {
      e.preventDefault()
    }
  }
  useEffect(function () {
    if (Module_28.b() && Module_28.h()) {
      document.body.addEventListener("touchmove", R, {
        passive: false
      })
    }
    return function () {
      if (Module_28.b() && Module_28.h()) {
        document.body.removeEventListener("touchmove", R)
      }
    }
  })
  return React1.createElement("div", {
    id: t,
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.J,
    "data-min-width": Module_235.l,
    "data-max-width": Module_235.j,
    "data-min-height": Module_235.k,
    "data-max-height": Module_235.i,
    className: Classnames1(Module_90.b, Module_11.a({}, Module_4381.hide, !e$visible), Module_4381.timePicker),
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
    ref: A
  }, React1.createElement(Module_278.a, {
    utils: Module_487.a,
    locale: Module_488.a
  }, React1.createElement(Module_1214.a, {
    value: I,
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
        id: "time-picker-".concat(t),
        onClick: function () {
          if (null === e || undefined === e ? undefined : e.onClick) {
            e.onClick()
          }
        }
      }, (null === e || undefined === e ? undefined : e.value) || "")
    },
    cancelLabel: "取消",
    okLabel: "确定",
    onOpen: function () {
      N.current = true
    },
    onClose: function () {
      N.current = false
    }
  })), undefined !== j && !j && React1.createElement("div", {
    className: Classnames1(Module_4381.mask),
    onClick: function () {
      var e
      var /* [auto-meaningful-name] */A$current = A.current
      if (A$current) {
        if (A$current.dataset.clickType === Module_53.h.CLICK) {
          if (!(null === (e = document.getElementById("time-picker-".concat(t))) || undefined === e)) {
            e.click()
          }
        }
      }
    }
  }))
})
export { _a as a }
export default _a
