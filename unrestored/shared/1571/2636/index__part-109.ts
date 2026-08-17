/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-109
 */

"use strict"

import { $v } from "./index__part-91"
import { nb } from "./index__part-92"
import { hb, mb } from "./index__part-94"
import { fy } from "./index__part-102"
import { gy } from "./index__part-103"
import /* [auto-meaningful-name] */Module_202 from /* 202 */"./202"
import /* [auto-meaningful-name] */Module_747 from /* 747 */"./747"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"./76"
import * as /* [auto-meaningful-name] */Module_95 from /* 95 */"./95"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_539 from /* 539 */"./539"
var TE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fontSize" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$width = e.width
  var s = undefined === e$width ? 74 : e$width
  var /* [auto-meaningful-name] */e$rules = e.rules
  var /* [auto-meaningful-name] */e$formConfig$multiple = e$formConfig.multiple
  var u = undefined === e$formConfig$multiple ? 1 : e$formConfig$multiple
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var /* [auto-meaningful-name] */e$formConfig$min = e$formConfig.min
  var /* [auto-meaningful-name] */e$formConfig$max = e$formConfig.max
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var g = Math.ceil(e$value * u)
  var _ = function (e) {
    return Src_shared_tools_index.p(function (e) {
      var t = parseInt(e)
      e$onChange(n, t /= u)
    }, e)
  }
  return React.createElement(Module_539.a, {
    label: useIntl$formatMessage({
      id: e$formConfig$label
    }),
    className: "coco-number-inputRow",
    style: {
      width: s
    },
    type: "number",
    min: e$formConfig$min,
    max: e$formConfig$max,
    rules: e$rules,
    defaultValue: g,
    onChange: _(200),
    onStep: _(0)
  })
})
var SE = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement("div", {
    className: Classnames(Module_202.formItemWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: Module_202.labelWrapper
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "text"
  }) + useIntl$formatMessage({
    id: "setting"
  }))), React.createElement("div", {
    className: Module_202.fontWrapper
  }, React.createElement("div", {
    className: Module_202.fontFamily
  }, React.createElement(fy, {
    keyName: "fontFamily",
    onChange: e$onChange,
    fontFamily: e$getValue("fontFamily") || Module_95.f
  })), React.createElement("div", {
    className: Module_202.fontSize
  }, React.createElement(TE, {
    keyName: "fontSize",
    onChange: e$onChange,
    formConfig: Module_6.a(Module_6.a({}, e.formConfig), {}, {
      label: "fontSize",
      max: Module_53.l,
      min: Module_53.p
    }),
    value: e$getValue("fontSize") || Module_95.g,
    rules: [
      {
        rule: Module_53.w(4)
      }, {
        rule: Module_53.v
      }
    ],
    width: 86
  }))), React.createElement("div", {
    className: Module_202.alignWrapper
  }, React.createElement(gy, {
    keyName: "textAlign",
    onChange: e$onChange,
    textAlign: e$getValue("textAlign") || "left"
  })))
})
var AE = function (e) {
  return React.createElement("div", {
    className: Module_202.backgroundTypeWrapper
  }, React.createElement("div", {
    className: Module_202.backgroundTypeItem,
    style: e
  }, React.createElement("div", null)))
}
var IE = [
  {
    value: Module_76.c.OUTLINED_NORMAL,
    renderContent: function (e) {
      return AE({
        background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "4px",
        border: "2px solid ".concat(Color(e).alpha(.5).toString())
      })
    }
  }, {
    value: Module_76.c.CONTAINED_NORMAL,
    renderContent: function (e) {
      return AE({
        background: Color(e).alpha(.14).toString(),
        borderRadius: "4px"
      })
    }
  }, {
    value: Module_76.c.CONTAINED_ROUND,
    renderContent: function (e) {
      return AE({
        background: Color(e).alpha(.14).toString(),
        borderRadius: "14px"
      })
    }
  }, {
    value: Module_76.c.OUTLINED_FLAT,
    renderContent: function (e) {
      return AE({
        borderBottom: "2px solid ".concat(Color(e).alpha(.5).toString())
      })
    }
  }
]
var jE = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = e$getValue("backgroundColor") || Module_95.c
  var i = e$getValue("backgroundMode") || Module_76.a.TEMPLATE
  var a = e$getValue("templateMode") || Module_76.c.OUTLINED_NORMAL
  var s = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var c = useDispatch()
  var l = e$getValue("backgroundImage") || Module_95.a
  return React.createElement("div", {
    className: Classnames(Module_202.formItemWrapper, Module_202.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: Module_202.backgroundLabel
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "background"
  })), React.createElement("div", {
    className: Module_202.modeActionWrapper
  }, React.createElement("div", {
    className: Classnames(Module_202.modeTemplate, i === Module_76.a.TEMPLATE && Module_202.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", Module_76.a.TEMPLATE)
    }
  }, useIntl$formatMessage({
    id: "template"
  })), React.createElement("div", {
    className: Classnames(Module_202.modeImage, i === Module_76.a.IMAGE && Module_202.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", Module_76.a.IMAGE)
    }
  }, useIntl$formatMessage({
    id: "image"
  })))), i === Module_76.a.TEMPLATE && React.createElement("div", {
    className: Module_202.backgroundWrapper
  }, React.createElement("div", {
    className: Module_202.templateMode
  }, React.createElement(hb, {
    modeList: IE,
    value: a,
    onChange: function (e) {
      e$onChange("templateMode", e)
    },
    params: [o]
  }, IE.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(o))
  }))), React.createElement("div", {
    className: Module_202.templateColor
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "templateColor"
  })), React.createElement(mb, {
    width: 43,
    keyName: "backgroundColor",
    onChange: e$onChange,
    color: o
  }))), i === Module_76.a.IMAGE && React.createElement(React.Fragment, null, React.createElement("div", {
    className: Module_202.backgroundWrapper
  }, React.createElement(nb, {
    onUploadFileChange: function (e) {
      if (e && s) {
        c(Src_editor_redux_common_actions.Zf(e, function (e) {
          c(Src_editor_redux_common_actions.Yf(e[0], s))
        }))
      }
    },
    onResourceLibraryClick: function () {
      c(Src_editor_redux_common_actions.wj(Module_68.c.ImageLibrary, function (e) {
        var t = e[0]
        if (s) {
          c(Src_editor_redux_common_actions.Yf(t, s))
        }
        c(Src_editor_redux_common_actions.sh())
      }))
    },
    fileId: Module_9.hb(l) ? l : Module_95.a,
    style: {
      height: 90,
      padding: "12px"
    }
  })), React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, React.createElement(Src_shared_ui_components_index.s, {
    className: Classnames(Module_202.radioWrapper, Module_202.sizeRadioBox),
    value: e$getValue("imageResizeMode") || Module_76.b.CONTAIN,
    onChange: function (e) {
      e$onChange("imageResizeMode", e)
    }
  }, React.createElement(Src_shared_ui_components_index.t, {
    value: Module_76.b.CONTAIN
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-contain"
  }), useIntl$formatMessage({
    id: "".concat(Module_76.b.CONTAIN)
  })), React.createElement(Src_shared_ui_components_index.t, {
    value: Module_76.b.STRETCH
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-stretch"
  }), useIntl$formatMessage({
    id: "".concat(Module_76.b.STRETCH)
  }))))))
})
var NE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fileId" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var /* [auto-meaningful-name] */e$formConfig$stillImageShowResizeMode = e$formConfig.stillImageShowResizeMode
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var l = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var u = useDispatch()
  var d = e$getValue(n)
  var p = Module_9.hb(d)
  var f = (null === p || undefined === p ? undefined : p.source) || (null === p || undefined === p ? undefined : p.cdnUrl)
  var m = e$getValue("resizeMode")
  var g = e$formConfig$stillImageShowResizeMode || f
  return React.createElement(React.Fragment, null, React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_747.formItemWrapper, Module_747.changeImageWrapper),
    align: "vertical",
    label: useIntl$formatMessage({
      id: e$formConfig$label || "image"
    })
  }, React.createElement(nb, {
    onUploadFileChange: function (e) {
      if (e && l) {
        u(Src_editor_redux_common_actions.Zf(e, function (e) {
          u(Src_editor_redux_common_actions.Yf(e[0], l))
        }))
      }
    },
    onResourceLibraryClick: function () {
      u(Src_editor_redux_common_actions.wj(Module_68.c.ImageLibrary, function (e) {
        var t = e[0]
        if (l) {
          u(Src_editor_redux_common_actions.Yf(t, l))
        }
        u(Src_editor_redux_common_actions.sh())
      }))
    },
    onDelete: function () {
      e$onChange(n, "")
    },
    fileId: d
  })), g && React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_747.formItemWrapper, Module_747.imageResizeMode, "changeImageResizeMode"),
    label: useIntl$formatMessage({
      id: "adapt"
    }),
    align: "vertical"
  }, React.createElement(Src_shared_ui_components_index.i, {
    className: "changeSizeFormItemWrapper"
  }, React.createElement($v, {
    mode: m,
    onModeChange: function (e) {
      if (e$onChange) {
        e$onChange("resizeMode", e)
      }
    }
  }))))
})
var RE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "position" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig$label = e.formConfig.label
  var a = undefined === e$formConfig$label ? "coordinate" : e$formConfig$label
  var s = e$getValue(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var l = Module_6.a({}, s)
  var u = function (e) {
    return function (t, r) {
      l[t] = parseInt(r);
      (function (e) {
        return Lodash.debounce(function (e) {
          e$onChange(n, e)
        }, e)
      })(e)(l)
    }
  }
  return React.createElement(Src_shared_ui_components_index.i, {
    align: "vertical",
    className: "".concat(Module_88.formItemWrapper, " ").concat(Module_88.formInputNumberRow)
  }, React.createElement("p", {
    className: "coco-form-item-label"
  }, useIntl$formatMessage({
    id: a || "coordinate"
  })), React.createElement("div", {
    className: Module_88.formInputNumberRow
  }, React.createElement(Src_shared_ui_components_index.i, {
    className: "changeLeft"
  }, React.createElement(Src_shared_ui_components_index.o, {
    label: "x",
    type: "number",
    defaultValue: Math.round(s.x),
    className: "".concat(Module_88.justifyInputContent, " coco-number-inputRow"),
    rules: [
      {
        rule: Module_53.w(9)
      }
    ],
    onChange: function (e) {
      u(50)("x", e)
    },
    min: Module_60.s,
    max: Module_60.k,
    onStep: function (e) {
      u(0)("x", e)
    }
  })), React.createElement(Src_shared_ui_components_index.i, {
    className: "changeTop"
  }, React.createElement(Src_shared_ui_components_index.o, {
    label: "y",
    type: "number",
    defaultValue: Math.round(s.y),
    className: "".concat(Module_88.justifyInputContent, " coco-number-inputRow"),
    min: Module_60.s,
    max: Module_60.k,
    rules: [
      {
        rule: Module_53.w(9)
      }
    ],
    onChange: function (e, t) {
      u(50)("y", e)
    },
    onStep: function (e, t) {
      u(0)("y", e)
    }
  }))))
})
var kE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "content" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var s = useRef(null)
  var c = e$getValue(n)
  var l = useIntl$formatMessage({
    id: e$formConfig.label || "content"
  })
  var u = Src_shared_tools_index.p(function (e) {
    e$onChange(n, e)
  }, 60)
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, "changeContent"),
    label: l,
    align: "vertical"
  }, React.createElement(Src_shared_ui_components_index.A, {
    ref: s,
    defaultValue: c,
    rows: 3,
    onChange: function (e) {
      var /* [auto-meaningful-name] */e$target$value = e.target.value
      u(e$target$value)
    }
  }))
})
export { TE }
export { SE }
export { jE }
export { NE }
export { RE }
export { kE }
