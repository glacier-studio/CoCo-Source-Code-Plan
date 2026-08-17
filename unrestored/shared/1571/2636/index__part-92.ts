/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-92
 */

"use strict"

import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"./133/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_419 from /* 419 */"./419"
import /* [auto-meaningful-name] */Module_4191 from /* 419 */"./419"
var nb = memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$onUploadFileChange = e.onUploadFileChange
  var /* [auto-meaningful-name] */e$onResourceLibraryClick = e.onResourceLibraryClick
  var /* [auto-meaningful-name] */e$onDelete = e.onDelete
  var /* [auto-meaningful-name] */e$fileId = e.fileId
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState(false)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var _ = m[1]
  if (Src_shared_tools_index.U(e$fileId)) {
    t = e$fileId
  } else {
    var v = Module_9.hb(e$fileId)
    t = (null === v || undefined === v ? undefined : v.source) || (null === v || undefined === v ? undefined : v.cdnUrl)
  }
  var b = function (e) {
    _(e)
  }
  var y = function () {
    _(false)
  }
  var E = function () {
    return React.createElement(Module_1213.a, {
      content: React.createElement("div", {
        className: Module_4191.imagePopover,
        onClick: y
      }, React.createElement(Src_shared_ui_components_index.B, {
        className: Module_4191.content,
        onChange: e$onUploadFileChange,
        accept: Module_133.f
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-upload"
      }), React.createElement("span", {
        className: Module_4191.contentTitle
      }, useIntl$formatMessage({
        id: "Resource.upload"
      }))), React.createElement("div", {
        className: Module_4191.content,
        onClick: e$onResourceLibraryClick
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-open-resource-library"
      }), React.createElement("span", {
        className: Module_4191.contentTitle
      }, useIntl$formatMessage({
        id: "Resource.ImageLibrary"
      })))),
      placement: "bottomLeft",
      trigger: "click",
      visible: g,
      onVisibleChange: b
    }, React.createElement("div", {
      className: Module_4191.imageBtn
    }, useIntl$formatMessage({
      id: "Resource.Replace"
    })))
  }
  return React.createElement("div", {
    className: Module_4191.imageWrapper
  }, React.createElement("div", {
    tabIndex: -1,
    className: Classnames(Module_4191.imageBox),
    style: e$style,
    onMouseEnter: function () {
      d(true)
    },
    onBlur: function () {
      d(false)
    },
    onMouseLeave: function () {
      if (!g) {
        d(false)
        _(false)
      }
    }
  }, t && React.createElement(React.Fragment, null, React.createElement("img", {
    alt: e$fileId,
    src: t
  }), React.createElement("div", {
    className: Classnames(Module_4191.cover, u && Module_4191.visible)
  }, e$onDelete && React.createElement("div", {
    className: Module_4191.imageDelete,
    onClick: e$onDelete
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-delete"
  })), E())), !t && React.createElement(React.Fragment, null, React.createElement("div", {
    className: Module_4191.picDefault
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-pic-default"
  })), React.createElement("div", {
    className: Classnames(Module_4191.cover, u && Module_4191.visible)
  }, E()))))
})
var rb = memo(function (e) {
  var /* [auto-meaningful-name] */e$sizeType = e.sizeType
  var /* [auto-meaningful-name] */e$sizeTypeList = e.sizeTypeList
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$minWidth = e.minWidth
  var /* [auto-meaningful-name] */e$maxWidth = e.maxWidth
  var /* [auto-meaningful-name] */e$onWidthChange = e.onWidthChange
  var /* [auto-meaningful-name] */e$onSizeTypeChange = e.onSizeTypeChange
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var u = !Lodash.isFunction(e$onWidthChange)
  var d = function (e) {
    return Src_shared_tools_index.p(function (e) {
      if (!u) {
        if (e$onWidthChange) {
          e$onWidthChange(e)
        }
      }
    }, e)
  }
  return React.createElement("div", {
    className: Classnames(Module_88.formItemWrapper, Module_88.changeSizeFormItemWrapper)
  }, React.createElement("div", {
    className: Module_88.formInputNumberRow
  }, React.createElement("p", {
    className: "coco-form-item-label"
  }, useIntl$formatMessage({
    id: "size"
  })), React.createElement(Src_shared_ui_components_index.i, {
    className: "changeWidth"
  }, React.createElement(Src_shared_ui_components_index.n, {
    disabled: u,
    type: "number",
    className: Module_88.justifyInputContent,
    defaultValue: e$width,
    onChange: d(200),
    onStep: d(0),
    min: e$minWidth,
    max: e$maxWidth,
    rules: [
      {
        rule: Module_53.v
      }
    ],
    before: React.createElement("span", {
      style: {
        color: "var(--dark-text-color-t5)"
      }
    }, useIntl$formatMessage({
      id: "width"
    }))
  })), React.createElement(Src_shared_ui_components_index.i, null, React.createElement(Src_shared_ui_components_index.n, {
    disabled: true,
    type: "number",
    value: e$height,
    className: Module_88.justifyInputContent,
    before: React.createElement("span", null, useIntl$formatMessage({
      id: "height"
    }))
  }))), React.createElement("div", {
    className: Module_88.space
  }), React.createElement(Src_shared_ui_components_index.i, {
    className: "changeSizeFormItemWrapper"
  }, React.createElement(Src_shared_ui_components_index.s, {
    className: Classnames(Module_88.radioWrapper, Module_88.sizeRadioBox),
    value: e$sizeType,
    onChange: e$onSizeTypeChange
  }, e$sizeTypeList.map(function (e) {
    return React.createElement(Src_shared_ui_components_index.t, {
      value: e,
      key: e
    }, useIntl$formatMessage({
      id: e.toLocaleLowerCase() + "Size"
    }))
  }))))
})
export { nb }
export { rb }
