/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-114
 */

"use strict"

import { nb, rb } from "./index__part-92"
import { lb } from "./index__part-93"
import { hb, mb } from "./index__part-94"
import { fy } from "./index__part-102"
import { gy, _y } from "./index__part-103"
import { yy } from "./index__part-104"
import { TE } from "./index__part-109"
var sE
import * as /* [auto-meaningful-name] */Module_114 from /* 114 */"./114"
import * as /* [auto-meaningful-name] */Module_82 from /* 82 */"./82"
import * as /* [auto-meaningful-name] */Module_83 from /* 83 */"./83"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_175 from /* 175 */"./175"
import /* [auto-meaningful-name] */Module_1751 from /* 175 */"./175"
var $E = [
  {
    value: Module_83.b.CONTAINED_TEXT,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Classnames(Module_1751.contentButton, Module_1751.typeItem),
        style: {
          backgroundColor: e,
          color: Src_shared_tools_index.Z(e) ? Src_shared_tools_index.a : "#ffffff"
        }
      }, "Text")
    }
  }, {
    value: Module_83.b.OUTLINED_TEXT,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Classnames(Module_1751.outlinedButton, Module_1751.typeItem),
        style: {
          color: e,
          background: Src_shared_tools_index.Z(e) ? Src_shared_tools_index.a : "#ffffff"
        }
      }, "Text")
    }
  }, {
    value: Module_83.b.CONTAINED_ICON,
    style: {
      width: "70px"
    },
    renderContent: function (e, t) {
      return React.createElement("div", {
        style: {
          backgroundColor: e,
          color: Src_shared_tools_index.Z(e) ? Src_shared_tools_index.a : "#ffffff"
        },
        className: Classnames(Module_1751.IconButton, Module_1751.contentButton, Module_1751.typeItem)
      }, React.createElement(Src_shared_ui_components_index.z, {
        icon: t
      }))
    }
  }, {
    value: Module_83.b.OUTLINED_ICON,
    style: {
      width: "70px"
    },
    renderContent: function (e, t) {
      return React.createElement("div", {
        style: {
          color: e,
          background: Src_shared_tools_index.Z(e) ? Src_shared_tools_index.a : "#ffffff"
        },
        className: Classnames(Module_1751.IconButton, Module_1751.outlinedButton, Module_1751.typeItem)
      }, React.createElement(Src_shared_ui_components_index.z, {
        icon: t
      }))
    }
  }
]
sE = {}
Module_11.a(sE, Module_83.a.TEXT, [Module_83.c.SMALL, Module_83.c.MEDIUM, Module_83.c.LARGE])
Module_11.a(sE, Module_83.a.ICON, [Module_83.c.TINY, Module_83.c.SMALL, Module_83.c.MEDIUM, Module_83.c.LARGE, Module_83.c.HUGE])
var eO = sE
var tO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "mode" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = e$getValue(n)
  var s = e$getValue("sizeType")
  var c = e$getValue("color")
  var l = e$getValue("iconId")
  var u = e$getValue("text")
  var d = Module_33.O(a)
  var p = useDispatch()
  var m = useState()
  var g = Module_10.a(m, 2)
  var v = g[0]
  var b = g[1]
  useEffect(function () {
    var e = Module_9.fb(l)
    b(e)
  }, [l])
  var y = function () {
    p(Src_editor_redux_common_actions.wj(Module_68.c.IconLibrary, function (e) {
      if (e && e.length > 0) {
        e$onChange("iconId", e[0].id)
      }
    }))
  }
  var E = Src_shared_tools_index.p(function (e) {
    e$onChange("text", e)
  }, 200)
  var O = function (e, t) {
    E(e)
  }
  var w = function (e, t) {
    E(e)
  }
  return React.createElement(React.Fragment, null, React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_1751.formItemWrapper, Module_1751.typeSelector, Module_1751.buttonModeSelector, "changeButtonMode"),
    label: useIntl$formatMessage({
      id: "mode"
    })
  }, React.createElement(lb, {
    modeList: $E,
    value: a,
    onChange: function (e) {
      if (Module_33.O(e) === Module_83.a.TEXT) {
        if (s === Module_83.c.TINY) {
          e$onChange("sizeType", Module_83.c.SMALL)
        }
        if (s === Module_83.c.HUGE) {
          e$onChange("sizeType", Module_83.c.LARGE)
        }
      }
      e$onChange("mode", e)
    },
    params: [c, v]
  }, $E.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(c, v))
  }))), d === Module_83.a.TEXT ? React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_1751.formItemWrapper, Module_1751.cocoInputTitleContent),
    label: useIntl$formatMessage({
      id: "content"
    })
  }, React.createElement(Src_shared_ui_components_index.k, {
    className: "coco-input-text",
    onChange: O,
    onBlur: w,
    isTrimmed: true,
    defaultValue: u
  })) : React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_1751.formItemWrapper, Module_1751.typeSelector, "changeIcon"),
    label: useIntl$formatMessage({
      id: "icon"
    })
  }, React.createElement("div", {
    onClick: y,
    className: Module_1751.buttonTypeIconBox
  }, React.createElement(Src_shared_ui_components_index.z, {
    icon: v
  }), React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-up",
    className: Classnames("coco-select-arrow")
  }))))
})
var nO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = e$getValue(n)
  var a = e$getValue("size")
  var s = e$getValue("mode")
  var c = Module_33.O(s)
  var l = Module_33.Q(i, s)
  var /* [auto-meaningful-name] */l$height = l.height
  var /* [auto-meaningful-name] */l$minWidth = l.minWidth
  var /* [auto-meaningful-name] */l$maxWidth = l.maxWidth
  return React.createElement(rb, {
    sizeType: i,
    sizeTypeList: eO[c],
    width: null === a || undefined === a ? undefined : a.width,
    height: l$height,
    minWidth: l$minWidth,
    maxWidth: l$maxWidth,
    onWidthChange: function (e) {
      var t = Math.max(l$minWidth, Math.min(l$maxWidth, Number(e)))
      e$onChange("size", {
        width: t
      })
    },
    onSizeTypeChange: function (e) {
      e$onChange(n, e)
      var t = Module_33.Q(e, s)
      e$onChange("size", {
        height: t.height,
        width: Math.max(a.width, t.minWidth)
      })
    }
  })
})
var rO = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = e$getValue("textVisible")
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: Classnames(Module_1751.formItemWrapper, Module_1751.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: Module_1751.labelWrapper
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "text"
  })), React.createElement("div", {
    className: Module_1751.actionWrapper,
    onClick: function () {
      e$onChange("textVisible", !o)
    }
  }, e$getValue("textVisible") ? React.createElement("div", {
    className: Module_1751.actionButton
  }) : React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  }))), o && React.createElement(React.Fragment, null, React.createElement(_y, Object.assign({}, e, {
    keyName: "text",
    formConfig: Module_6.a(Module_6.a({}, e.formConfig), {}, {
      emitOnChange: true
    })
  })), React.createElement("div", {
    className: Module_1751.fontWrapper
  }, React.createElement("div", {
    className: Module_1751.fontFamily
  }, React.createElement(fy, {
    keyName: "fontFamily",
    onChange: e$onChange,
    fontFamily: e$getValue("fontFamily")
  })), React.createElement("div", {
    className: Module_1751.maxFontSize
  }, React.createElement(TE, {
    keyName: "maxFontSize",
    onChange: e$onChange,
    rules: [
      {
        rule: Module_53.v
      }
    ],
    formConfig: Module_6.a(Module_6.a({}, e.formConfig), {}, {
      label: "fontSize",
      min: e$getValue("allowMinFontSize"),
      max: e$getValue("allowMaxFontSize")
    }),
    value: e$getValue("maxFontSize")
  })), React.createElement("div", {
    className: Module_1751.ColorPicker
  }, React.createElement(mb, {
    width: 43,
    keyName: "textColor",
    onChange: e$onChange,
    color: e$getValue("textColor")
  }))), React.createElement("div", {
    className: Module_1751.alignWrapper
  }, React.createElement(gy, {
    keyName: "textAlign",
    onChange: e$onChange,
    textAlign: e$getValue("textAlign")
  })))))
})
var oO = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = e$getValue("iconVisible")
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: Classnames(Module_1751.formItemWrapper, Module_1751.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: Module_1751.labelWrapper
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "icon"
  })), React.createElement("div", {
    className: Module_1751.actionWrapper,
    onClick: function () {
      e$onChange("iconVisible", !o)
    }
  }, e$getValue("iconVisible") ? React.createElement("div", {
    className: Module_1751.actionButton
  }) : React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  }))), o && React.createElement("div", {
    className: Module_1751.iconWrapper
  }, React.createElement(yy, {
    onChange: e$onChange,
    iconId: e$getValue("iconId"),
    color: e$getValue("iconColor")
  }), React.createElement(mb, {
    width: 43,
    keyName: "iconColor",
    onChange: e$onChange,
    color: e$getValue("iconColor")
  }))))
})
var iO = function (e) {
  return React.createElement("div", {
    className: Module_1751.backgroundTypeItem,
    style: e
  }, "Text")
}
var aO = [
  {
    value: Module_114.b.RECTANGLE_FILL,
    renderContent: function (e) {
      return iO({
        color: "#FFFFFF",
        backgroundColor: e,
        borderRadius: "8px"
      })
    }
  }, {
    value: Module_114.b.RECTANGLE_OUTLINE,
    renderContent: function (e) {
      return iO({
        color: "#1D1D1F",
        border: "2px solid ".concat(e),
        borderRadius: "8px"
      })
    }
  }, {
    value: Module_114.b.CIRCLE_FILL,
    renderContent: function (e) {
      return iO({
        color: "#FFFFFF",
        backgroundColor: e,
        borderRadius: "16px"
      })
    }
  }, {
    value: Module_114.b.CIRCLE_OUTLINE,
    renderContent: function (e) {
      return iO({
        color: "#1D1D1F",
        border: "2px solid ".concat(e),
        borderRadius: "16px"
      })
    }
  }
]
var sO = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = e$getValue("backgroundColor")
  var i = e$getValue("backgroundMode")
  var a = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var s = useDispatch()
  var c = e$getValue("backgroundImage")
  return React.createElement("div", {
    className: Classnames(Module_1751.formItemWrapper, Module_1751.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: Module_1751.labelWrapper
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "background"
  })), React.createElement("div", {
    className: Module_1751.modeActionWrapper
  }, React.createElement("div", {
    className: Classnames(Module_1751.modeTemplate, i === Module_114.a.TEMPLATE && Module_1751.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", Module_114.a.TEMPLATE)
    }
  }, useIntl$formatMessage({
    id: "template"
  })), React.createElement("div", {
    className: Classnames(Module_1751.modeImage, i === Module_114.a.IMAGE && Module_1751.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", Module_114.a.IMAGE)
    }
  }, useIntl$formatMessage({
    id: "image"
  })))), i === Module_114.a.TEMPLATE && React.createElement("div", {
    className: Module_1751.backgroundWrapper
  }, React.createElement("div", {
    className: Module_1751.templateMode
  }, React.createElement(hb, {
    modeList: aO,
    value: e$getValue("templateMode"),
    onChange: function (e) {
      e$onChange("templateMode", e)
    },
    params: [o]
  }, aO.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(o))
  }))), React.createElement("div", {
    className: Module_1751.templateColor
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "templateColor"
  })), React.createElement(mb, {
    width: 43,
    keyName: "backgroundColor",
    onChange: e$onChange,
    color: e$getValue("backgroundColor")
  }))), i === Module_114.a.IMAGE && React.createElement(React.Fragment, null, React.createElement("div", {
    className: Module_1751.backgroundWrapper
  }, React.createElement(nb, {
    onUploadFileChange: function (e) {
      if (e && a) {
        s(Src_editor_redux_common_actions.Zf(e, function (e) {
          s(Src_editor_redux_common_actions.Yf(e[0], a))
        }))
      }
    },
    onResourceLibraryClick: function () {
      s(Src_editor_redux_common_actions.wj(Module_68.c.ImageLibrary, function (e) {
        var t = e[0]
        if (a) {
          s(Src_editor_redux_common_actions.Yf(t, a))
        }
        s(Src_editor_redux_common_actions.sh())
      }))
    },
    fileId: Module_9.hb(c) ? c : Module_82.f,
    style: {
      height: 90,
      padding: "12px"
    }
  })), React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, React.createElement(Src_shared_ui_components_index.s, {
    className: Classnames(Module_1751.radioWrapper, Module_1751.sizeRadioBox),
    value: e$getValue("imageResizeMode"),
    onChange: function (e) {
      e$onChange("imageResizeMode", e)
    }
  }, React.createElement(Src_shared_ui_components_index.t, {
    value: Module_114.c.CONTAIN
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-contain"
  }), useIntl$formatMessage({
    id: "".concat(Module_114.c.CONTAIN)
  })), React.createElement(Src_shared_ui_components_index.t, {
    value: Module_114.c.STRETCH
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-stretch"
  }), useIntl$formatMessage({
    id: "".concat(Module_114.c.STRETCH)
  }))))))
})
export { tO }
export { nO }
export { rO }
export { oO }
export { sO }
