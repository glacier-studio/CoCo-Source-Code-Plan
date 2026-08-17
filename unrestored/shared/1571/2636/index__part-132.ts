/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-132
 */

"use strict"

import { mb } from "./index__part-94"
import { fy } from "./index__part-102"
import { TE } from "./index__part-109"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_704 from /* 704 */"./704"
import /* [auto-meaningful-name] */Module_7041 from /* 704 */"./704"
var Hw = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var r = e$getValue("content")
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var i = Src_shared_tools_index.p(function (e) {
    e$onChange("content", e)
  }, 60)
  return React.createElement("div", {
    className: Classnames(Module_7041.formItemWrapper, Module_7041.wrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: Module_7041.labelWrapper
  }, useIntl$formatMessage({
    id: "content"
  })), React.createElement(React.Fragment, null, React.createElement("div", null, React.createElement(Src_shared_ui_components_index.A, {
    defaultValue: r,
    rows: 3,
    onChange: function (e) {
      i(e.target.value)
    }
  })), React.createElement("div", {
    className: Module_7041.fontWrapper
  }, React.createElement("div", {
    className: Module_7041.fontFamily
  }, React.createElement(fy, {
    keyName: "fontFamily",
    onChange: e$onChange,
    fontFamily: e$getValue("fontFamily")
  })), React.createElement("div", {
    className: Module_7041.fontSize
  }, React.createElement(TE, {
    keyName: "fontSize",
    onChange: e$onChange,
    formConfig: Module_6.a(Module_6.a({}, e.formConfig), {}, {
      label: "fontSize",
      max: Module_60.f,
      min: Module_60.n
    }),
    rules: [
      {
        rule: Module_53.w(4)
      }, {
        rule: Module_53.v
      }
    ],
    value: e$getValue("fontSize")
  })), React.createElement("div", {
    className: Module_7041.colorPicker
  }, React.createElement(mb, {
    width: 43,
    keyName: "color",
    onChange: e$onChange,
    color: e$getValue("color")
  })))))
})
export { Hw }
