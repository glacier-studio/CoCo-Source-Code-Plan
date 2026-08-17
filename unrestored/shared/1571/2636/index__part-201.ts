/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-201
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_754 from /* 754 */"./754"
import /* [auto-meaningful-name] */Module_7541 from /* 754 */"./754"
import * as /* [auto-meaningful-name] */Module_1530 from /* 1530 */"./1530"
import /* [auto-meaningful-name] */Module_15301 from /* 1530 */"./1530"
import * as /* [auto-meaningful-name] */Module_1531 from /* 1531 */"./1531"
import /* [auto-meaningful-name] */Module_15311 from /* 1531 */"./1531"
var bL = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useState(!function () {
    var e = navigator.userAgent.toLowerCase()
    return e.includes("chrome") && !e.includes("qqbrowser") && !e.includes("opr") && !e.includes("se") && !e.includes("metasr") && /Google Inc/.test(navigator.vendor)
  }())
  var n = Module_10.a(t, 2)
  var r = n[0]
  var o = n[1]
  return r ? React.createElement("div", {
    className: Module_7541.container
  }, React.createElement("div", {
    className: Module_7541.wrapper
  }, React.createElement("img", {
    src: Module_15301,
    className: Module_7541.codemaoImg,
    alt: "codemao"
  }), React.createElement("span", {
    className: Module_7541.compatibility
  }, useIntl$formatMessage({
    id: "ChromeTips.compatibility"
  })), React.createElement("img", {
    src: Module_15311,
    className: Module_7541.chromeImg,
    alt: "chrome"
  }), React.createElement("a", {
    href: "https://shequ.codemao.cn/download",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "coco-button coco-button-primary"
  }, useIntl$formatMessage({
    id: "ChromeTips.download"
  })), React.createElement("span", {
    className: Module_7541.close,
    onClick: function () {
      return o(false)
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-close-btn"
  })))) : null
})
export { bL }
