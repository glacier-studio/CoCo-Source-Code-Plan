/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-189
 */

"use strict"

import { fj, hj } from "./index__part-181"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_625 from /* 625 */"./625"
import /* [auto-meaningful-name] */Module_6251 from /* 625 */"./625"
var Xj = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$md5 = e.md5
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var /* [auto-meaningful-name] */e$isAdded = e.isAdded
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement("li", {
    onClick: function (i) {
      if (!e$isAdded) {
        e.selectHandler({
          id: t,
          md5: e$md5,
          name: e$name,
          cdnUrl: e$cdnUrl,
          type: fj.Icon,
          selectFrom: hj.Mall
        }, i)
      }
    },
    key: t,
    className: Classnames(Module_6251.iconMallItem, e$isSelect && Module_6251.selected)
  }, React.createElement("div", {
    className: Module_6251.playArea
  }, React.createElement("img", {
    alt: e$name,
    src: e$cdnUrl
  })), React.createElement("div", {
    className: Module_6251.infoArea
  }, React.createElement("div", {
    className: Module_6251.nameArea
  }, e$name), e$isAdded ? React.createElement("div", {
    className: Module_6251.add
  }, useIntl$formatMessage({
    id: "Resource.Added"
  })) : React.createElement("div", {
    className: Classnames(Module_6251.btn, Module_6251.unselect)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-style-selected"
  }))))
})
export { Xj }
