/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-118
 */

"use strict"

import { hb, mb } from "./index__part-94"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_77 from /* 77 */"./77"
import * as /* [auto-meaningful-name] */Module_149 from /* 149 */"./149"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_223 from /* 223 */"./223"
import /* [auto-meaningful-name] */Module_2231 from /* 223 */"./223"
var AO = [
  {
    value: Module_77.d.TEMPLATE,
    label: "slider.template"
  }, {
    value: Module_77.d.IMAGE,
    label: "slider.image"
  }
]
var IO = [
  {
    value: Module_77.c.DEFAULT,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Module_2231.default,
        style: {
          background: e
        }
      }, React.createElement("div", {
        className: Module_2231.handle,
        style: {
          borderColor: e
        }
      }))
    }
  }, {
    value: Module_77.c.PRIMARY,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Module_2231.primary,
        style: {
          background: e
        }
      }, React.createElement("div", {
        className: Module_2231.handle,
        style: {
          color: e,
          borderColor: e
        }
      }))
    }
  }
]
var jO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sliderType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var a = useSelector(function (e) {
    return e.resource.resourceLibraryUpdateAt
  })
  var s = e$getValue(n) || Module_77.d.TEMPLATE
  var c = e$getValue("mode")
  var l = e$getValue("color")
  var u = e$getValue("handleImageFileId") || Module_149.c
  var d = e$getValue("handleImageRatio") || 1.5
  var p = e$getValue("direction") || Module_77.b.HORIZONTAL
  var m = e$getValue("handleImageDirection") || Module_77.b.HORIZONTAL
  var g = e$getValue("backgroundImageFileId") || Module_149.a
  var v = e$getValue("trackImageFileId") || Module_149.g
  var b = e$getValue("backgroundImageDirection") || Module_77.b.HORIZONTAL
  var y = e$getValue("trackImageDirection") || Module_77.b.HORIZONTAL
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var O = useDispatch()
  var w = useState("")
  var C = Module_10.a(w, 2)
  var T = C[0]
  var A = C[1]
  var j = useState("")
  var R = Module_10.a(j, 2)
  var k = R[0]
  var x = R[1]
  var D = useState("")
  var M = Module_10.a(D, 2)
  var L = M[0]
  var P = M[1]
  var B = useState("")
  var F = Module_10.a(B, 2)
  var G = F[0]
  var W = F[1]
  var U = useState("")
  var H = Module_10.a(U, 2)
  var V = H[0]
  var K = H[1]
  function q(e) {
    if (e !== s && e$onChange) {
      e$onChange(n, e)
    }
  }
  useEffect(function () {
    var e
    if (Src_shared_tools_index.U(u)) {
      e = u
    } else {
      var t = Module_9.hb(u)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
    }
    P(e || Module_149.c)
  }, [u, a])
  useEffect(function () {
    var e
    if (Src_shared_tools_index.U(g)) {
      e = g
    } else {
      var t = Module_9.hb(g)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl) || Module_149.a
    }
    W(e)
    if (b === Module_77.b.VERTICAL) {
      Src_shared_tools_index.gb(e, 90).then(function (e) {
        return x(e)
      }).catch(function () {
        return x("")
      })
    }
  }, [b, g, a])
  useEffect(function () {
    var e
    if (Src_shared_tools_index.U(v)) {
      e = v
    } else {
      var t = Module_9.hb(v)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl) || Module_149.g
    }
    K(e)
    if (y === Module_77.b.VERTICAL) {
      Src_shared_tools_index.gb(e, 90).then(function (e) {
        return A(e)
      }).catch(function () {
        return A("")
      })
    }
  }, [v, y, a])
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_2231.formItemWrapper, Module_2231.sliderMode, "changeSliderType")
  }, React.createElement("div", {
    className: "coco-form-item coco-form-item-horizontal"
  }, useIntl$formatMessage({
    id: "slider.background"
  }), React.createElement("div", {
    className: Module_2231.sliderType
  }, AO.map(function (e) {
    return React.createElement("div", {
      key: e.value,
      onClick: q.bind(null, e.value),
      className: Classnames(Module_2231.typeItem, s === e.value && Module_2231.active)
    }, useIntl$formatMessage({
      id: e.label
    }))
  }))), s === Module_77.d.TEMPLATE && React.createElement("div", {
    className: Module_2231.templateBox
  }, React.createElement("div", {
    className: Module_2231.templateMode
  }, React.createElement(hb, {
    value: c,
    modeList: IO,
    onChange: function (e) {
      if (e !== c && e$onChange) {
        e$onChange("mode", e)
      }
    },
    params: [l]
  }, IO.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(l))
  }))), React.createElement("div", {
    className: Module_2231.templateColor
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "templateColor"
  })), React.createElement(mb, {
    width: 42,
    keyName: "color",
    onChange: e$onChange,
    color: l
  }))), s === Module_77.d.IMAGE && React.createElement("div", {
    className: Module_2231.imageBox
  }, React.createElement("div", {
    className: Module_2231.backgroundImage,
    style: {
      width: 254,
      height: 20,
      backgroundImage: "url(".concat(b === Module_77.b.HORIZONTAL ? G : k, ")")
    }
  }, React.createElement("div", {
    className: Module_2231.trackImageBox,
    style: {
      width: 127
    }
  }, React.createElement("div", {
    className: Module_2231.trackImage,
    style: {
      width: 254,
      backgroundImage: "url(".concat(y === Module_77.b.HORIZONTAL ? V : T, ")")
    }
  }))), React.createElement("div", {
    className: Classnames(Module_2231.handleImage, m === Module_77.b.VERTICAL && Module_2231.rotate),
    style: {
      width: 20 * d,
      height: 20 * d,
      backgroundImage: "url(".concat(L, ")")
    }
  }), React.createElement("div", {
    className: Module_2231.cover
  }, React.createElement("div", {
    className: Module_2231.editBtn,
    onClick: function () {
      O(Src_editor_redux_common_actions.Gj({
        visible: true,
        widgetId: e$widgetId,
        direction: p,
        handleImageFileId: Module_9.hb(u) ? u : Module_149.c,
        handleImageRatio: d,
        handleImageDirection: m,
        backgroundImageFileId: Module_9.hb(g) ? g : Module_149.a,
        backgroundImageDirection: b,
        trackImageFileId: Module_9.hb(v) ? v : Module_149.g,
        trackImageDirection: y
      }))
    }
  }, useIntl$formatMessage({
    id: "edit"
  })))))
})
var NO = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var r = e$getValue("maxValue")
  var o = e$getValue("minValue")
  var i = e$getValue("step")
  var a = e$getValue("value")
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  function c(e) {
    e$onChange("minValue", Number(e))
  }
  function l(e) {
    e$onChange("maxValue", Number(e))
  }
  function u(e) {
    e$onChange("step", Number(e))
  }
  function d(e) {
    e$onChange("value", Number(e))
  }
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_2231.formItemWrapper, Module_2231.sliderRangeFormItem, Module_2231.typeSelector, "changeSliderMode"),
    align: "vertical",
    label: useIntl$formatMessage({
      id: "numberValue"
    })
  }, React.createElement("div", {
    className: Classnames(Module_2231.firstRow, Module_2231.row)
  }, React.createElement(Src_shared_ui_components_index.o, {
    label: useIntl$formatMessage({
      id: "minValue"
    }),
    type: "number",
    defaultValue: o,
    max: a,
    min: Module_53.r,
    onBlur: c,
    onStep: c,
    rules: [
      {
        rule: Module_53.w(9)
      }
    ]
  }), React.createElement("div", {
    className: Module_2231.space
  }), React.createElement(Src_shared_ui_components_index.o, {
    label: useIntl$formatMessage({
      id: "maxValue"
    }),
    type: "number",
    defaultValue: r,
    min: a,
    max: Module_53.n,
    onBlur: l,
    onStep: l,
    rules: a >= 0 ? [
      {
        rule: Module_53.v
      }, {
        rule: Module_53.w(9)
      }
    ] : [
      {
        rule: Module_53.w(9)
      }
    ]
  })), React.createElement("div", {
    className: Module_2231.row
  }, React.createElement(Src_shared_ui_components_index.o, {
    label: useIntl$formatMessage({
      id: "gap"
    }),
    type: "number",
    defaultValue: i,
    min: 1,
    max: Math.max(r - o, 1),
    onBlur: u,
    onStep: u,
    rules: [
      {
        rule: Module_53.v
      }, {
        rule: Module_53.w(9)
      }
    ]
  }), React.createElement("div", {
    className: Module_2231.space
  }), React.createElement(Src_shared_ui_components_index.o, {
    label: useIntl$formatMessage({
      id: "initialValue"
    }),
    type: "number",
    defaultValue: a,
    onBlur: d,
    onStep: d,
    min: o,
    max: r,
    rules: o >= 0 ? [
      {
        rule: Module_53.v
      }, {
        rule: Module_53.w(9)
      }
    ] : [
      {
        rule: Module_53.w(9)
      }
    ]
  })))
})
var RO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "direction" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = e$getValue(n) || Module_77.b.HORIZONTAL
  var a = e$getValue("size")
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement(Src_shared_ui_components_index.i, {
    align: "vertical",
    className: Classnames(Module_2231.formItemWrapper, Module_2231.sliderDirection, "changeSliderDirection"),
    label: useIntl$formatMessage({
      id: "direction"
    })
  }, React.createElement(Src_shared_ui_components_index.s, {
    className: Classnames(Module_2231.radioWrapper, Module_2231.sizeRadioBox),
    value: i,
    onChange: function (e) {
      if (e !== i) {
        if (e$onChange) {
          e$onChange(n, e)
        }
        if (e === Module_77.b.HORIZONTAL) {
          var t = {
            width: a.height,
            height: a.width
          }
          if (e$onChange) {
            e$onChange("size", t)
          }
        }
        if (e === Module_77.b.VERTICAL) {
          var o = {
            width: a.height,
            height: a.width
          }
          if (e$onChange) {
            e$onChange("size", o)
          }
        }
      }
    }
  }, React.createElement(Src_shared_ui_components_index.t, {
    value: Module_77.b.HORIZONTAL,
    key: Module_77.b.HORIZONTAL
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: i === Module_77.b.HORIZONTAL ? "icon-horizontal-active" : "icon-horizontal",
    className: Module_2231.alignIcon
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "horizontal"
  }))), React.createElement(Src_shared_ui_components_index.t, {
    value: Module_77.b.VERTICAL,
    key: Module_77.b.VERTICAL
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: i === Module_77.b.VERTICAL ? "icon-vertical-active" : "icon-vertical",
    className: Module_2231.alignIcon
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "vertical"
  })))))
})
var kO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fontSize" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$formConfig$multiple = e$formConfig.multiple
  var s = undefined === e$formConfig$multiple ? 1 : e$formConfig$multiple
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var /* [auto-meaningful-name] */e$formConfig$min = e$formConfig.min
  var /* [auto-meaningful-name] */e$formConfig$max = e$formConfig.max
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var p = e$getValue(n)
  p = Math.ceil(p * s)
  var f = function (e) {
    return Src_shared_tools_index.p(function (e) {
      var t = parseInt(e)
      e$onChange(n, t /= s)
    }, e)
  }
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, "changeFontSize"),
    label: useIntl$formatMessage({
      id: e$formConfig$label || "fontSize"
    })
  }, React.createElement(Src_shared_ui_components_index.n, {
    className: "coco-number-inputRow",
    style: {
      width: 80
    },
    type: "number",
    min: e$formConfig$min,
    max: e$formConfig$max,
    defaultValue: p,
    onChange: f(200),
    onStep: f(0)
  }))
})
export { jO }
export { NO }
export { RO }
export { kO }
