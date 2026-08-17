/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-117
 */

"use strict"

import { rb } from "./index__part-92"
import { lb } from "./index__part-93"
import { hb, mb } from "./index__part-94"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37/index"
import * as /* [auto-meaningful-name] */Module_163 from /* 163 */"./163"
import * as /* [auto-meaningful-name] */Module_131 from /* 131 */"./131"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_254 from /* 254 */"./254"
import /* [auto-meaningful-name] */Module_2541 from /* 254 */"./254"
var yO = [
  {
    value: Module_163.c.DEFAULT,
    renderContent: function () {
      return React.createElement("div", {
        className: Module_2541.default
      }, React.createElement("div", {
        className: Module_2541.handle
      }))
    }
  }, {
    value: Module_163.c.PRIMARY,
    renderContent: function () {
      return React.createElement("div", {
        className: Module_2541.primary
      }, React.createElement("div", {
        className: Module_2541.handle
      }))
    }
  }
]
var EO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "mode" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_2541.formItemWrapper, Module_2541.typeSelector, Module_2541.switchType, "changeSwitchMode"),
    label: useIntl$formatMessage({
      id: "style"
    })
  }, React.createElement(lb, {
    modeList: yO,
    value: o,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    }
  }, yO.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.p, {
      value: e.value,
      key: e.value
    }, e.renderContent())
  })))
})
var OO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = Object.values(Src_editor_widget_builtIn_types.s)
  var a = e$getValue(n)
  var s = e$getValue("size")
  var /* [auto-meaningful-name] */s$height = s.height
  var /* [auto-meaningful-name] */s$width = s.width
  return React.createElement(rb, {
    sizeType: a,
    sizeTypeList: i,
    width: s$width,
    height: s$height,
    onSizeTypeChange: function (e) {
      e$onChange(n, e)
    }
  })
})
var wO = [
  {
    value: Module_163.c.DEFAULT,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Classnames(Module_2541.default, "switch-default"),
        style: {
          backgroundColor: Src_shared_tools_index.hb(e, .3)
        }
      }, React.createElement("div", {
        className: Module_2541.handle,
        style: {
          backgroundColor: e
        }
      }))
    }
  }, {
    value: Module_163.c.PRIMARY,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Classnames(Module_2541.primary, "switch-primary"),
        style: {
          backgroundColor: e
        }
      }, React.createElement("div", {
        className: Module_2541.handle
      }))
    }
  }
]
var CO = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var i = e$getValue("color")
  var a = e$getValue("backgroundMode") || Module_163.a.TEMPLATE
  var s = e$getValue("mode") || Module_163.c.DEFAULT
  var c = e$getValue("backgroundOpenImage") || Module_131.b
  var l = e$getValue("backgroundCloseImage") || Module_131.a
  var u = c
  var d = Module_9.hb(c)
  if (!Src_shared_tools_index.U(c) && d) {
    u = (null === d || undefined === d ? undefined : d.source) || (null === d || undefined === d ? undefined : d.cdnUrl)
  }
  return React.createElement("div", {
    className: Classnames(Module_2541.formItemWrapper, Module_2541.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: Module_2541.backgroundLabel
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "background"
  })), React.createElement("div", {
    className: Module_2541.modeActionWrapper
  }, React.createElement("div", {
    className: Classnames(Module_2541.modeTemplate, a === Module_163.a.TEMPLATE && Module_2541.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", Module_163.a.TEMPLATE)
    }
  }, useIntl$formatMessage({
    id: "template"
  })), React.createElement("div", {
    className: Classnames(Module_2541.modeImage, a === Module_163.a.IMAGE && Module_2541.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", Module_163.a.IMAGE)
    }
  }, useIntl$formatMessage({
    id: "image"
  })))), a === Module_163.a.TEMPLATE && React.createElement("div", {
    className: Module_2541.backgroundWrapper
  }, React.createElement("div", {
    className: Module_2541.templateMode
  }, React.createElement(hb, {
    modeList: wO,
    value: s,
    onChange: function (e) {
      e$onChange("mode", e)
    },
    params: [i]
  }, wO.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(i))
  }))), React.createElement("div", {
    className: Module_2541.templateColor
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "templateColor"
  })), React.createElement(mb, {
    width: 43,
    keyName: "color",
    onChange: e$onChange,
    color: i
  }))), a === Module_163.a.IMAGE && React.createElement(React.Fragment, null, React.createElement("div", {
    className: Module_2541.backgroundWrapper
  }, React.createElement("div", {
    className: Module_2541.backgroundImage
  }, React.createElement("img", {
    src: u,
    alt: ""
  })), React.createElement("div", {
    className: Module_2541.cover
  }, React.createElement("div", {
    className: Module_2541.editBtn,
    onClick: function () {
      Module_37.a(Src_editor_redux_common_actions.Hj({
        visible: true,
        widgetId: e$widgetId,
        imageCloseFileId: l,
        imageOpenFileId: c
      }))
    }
  }, useIntl$formatMessage({
    id: "edit"
  })))), React.createElement("div", {
    style: {
      marginTop: 10,
      marginBottom: 3
    }
  }, React.createElement(Src_shared_ui_components_index.s, {
    className: Classnames(Module_2541.radioWrapper, Module_2541.sizeRadioBox),
    value: e$getValue("imageResizeMode") || Module_163.b.CONTAIN,
    onChange: function (e) {
      e$onChange("imageResizeMode", e)
    }
  }, React.createElement(Src_shared_ui_components_index.t, {
    value: Module_163.b.CONTAIN
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-contain"
  }), useIntl$formatMessage({
    id: "".concat(Module_163.b.CONTAIN)
  })), React.createElement(Src_shared_ui_components_index.t, {
    value: Module_163.b.STRETCH
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-stretch"
  }), useIntl$formatMessage({
    id: "".concat(Module_163.b.STRETCH)
  }))))))
})
export { EO }
export { OO }
export { CO }
