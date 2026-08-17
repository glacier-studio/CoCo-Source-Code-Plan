/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：738__part-2
 */

"use strict"

import { d, p, h } from "./index__part-0"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_Iconfont_index from /* 94 */"../../../../../src/shared/ui/components/Iconfont/index"
var W = {
  rotation: [
    {
      title: "X 旋转",
      prop: "x",
      icon: "icon-phone-rotation-x",
      min: -180,
      max: 180,
      unit: "°"
    }, {
      title: "Y 旋转",
      prop: "y",
      icon: "icon-phone-rotation-y",
      min: -180,
      max: 180,
      unit: "°"
    }, {
      title: "Z 旋转",
      prop: "z",
      icon: "icon-phone-rotation-z",
      min: -180,
      max: 180,
      unit: "°"
    }
  ],
  position: [
    {
      title: "X 移动",
      prop: "x",
      icon: "icon-phone-move-x",
      min: -6,
      max: 6,
      unit: React.createElement("span", {
        className: "emulator-meterUnit"
      }, "m")
    }, {
      title: "Y 移动",
      prop: "y",
      icon: "icon-phone-move-y",
      min: -6,
      max: 6,
      unit: React.createElement("span", {
        className: "emulator-meterUnit"
      }, "m")
    }, {
      title: "Z 移动",
      prop: "z",
      icon: "icon-phone-move-z",
      min: -6,
      max: 6,
      unit: React.createElement("span", {
        className: "emulator-meterUnit"
      }, "m")
    }
  ]
}
var U = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$style = e.style
  var r = useDispatch()
  var a = useSelector(function (e) {
    return e[e$type]
  })
  var c = function (e) {
    switch (e$type) {
      case "rotation":
        return function (t) {
          r(d(Module_6.a(Module_6.a({}, a), {}, Module_11.a({}, e, t))))
        }
      case "position":
        return function (t) {
          r(p(Module_6.a(Module_6.a({}, a), {}, Module_11.a({}, e, t))))
        }
    }
  }
  var l = W[e$type]
  return React.createElement("div", {
    className: "emulator-sensors",
    style: e$style
  }, React.createElement(Src_shared_ui_components_index.h, {
    className: "emulator-sensor-form"
  }, l.map(function (e) {
    var /* [auto-meaningful-name] */e$title = e.title
    var /* [auto-meaningful-name] */e$prop = e.prop
    var /* [auto-meaningful-name] */e$icon = e.icon
    var /* [auto-meaningful-name] */e$max = e.max
    var /* [auto-meaningful-name] */e$min = e.min
    var /* [auto-meaningful-name] */e$unit = e.unit
    return React.createElement("div", {
      key: e$prop
    }, React.createElement("div", {
      className: "emulator-sensor-item-title"
    }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
      className: "emulator-icon",
      type: e$icon
    }), React.createElement("span", {
      className: "emulator-sensor-direction"
    }, e$title)), React.createElement("div", {
      className: "emulator-form-slider-wrapper"
    }, React.createElement(Src_shared_ui_components_index.x, {
      className: "emulator-formControl",
      min: e$min,
      max: e$max,
      value: a[e$prop],
      onChange: c(e$prop),
      isShowRightInput: true,
      inputAfter: e$unit
    })))
  })))
}
var H = function (e) {
  var /* [auto-meaningful-name] */e$style = e.style
  var n = useDispatch()
  return React.createElement("div", {
    className: "emulator-sensors",
    style: e$style
  }, React.createElement("div", {
    className: "emulator-shakeBtnWrapper",
    onClick: function () {
      var e
      var t = 33
      n(h({
        shake: null
      }))
      window.requestAnimationFrame(function r(o) {
        if (undefined === e) {
          e = o
        }
        var i = o - e
        if (t <= 33 && t >= -33) {
          t -= 3
        } else {
          t = 33
        }
        n(d({
          x: 0,
          y: 0,
          z: t
        }))
        if (i < 1e3) {
          window.requestAnimationFrame(r)
        } else {
          n(d({
            x: 0,
            y: 0,
            z: 0
          }))
        }
      })
    }
  }, React.createElement("div", {
    className: "emulator-shakeBtn"
  }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
    type: "icon-phone-shake-selected"
  }), React.createElement("p", {
    className: "emulator-shakeBtnName"
  }, "摇一摇"))))
}
var V = function () {
  var e = useSelector(function (e) {
    return e.visiblePanel
  })
  var t = function (t) {
    return e === t ? {
      display: "block"
    } : {
      display: "none"
    }
  }
  return React.createElement(React.Fragment, null, React.createElement(U, {
    type: "rotation",
    style: t("ROTATION")
  }), React.createElement(U, {
    type: "position",
    style: t("POSITION")
  }), React.createElement(H, {
    style: t("SHAKE")
  }))
}
export { V }
