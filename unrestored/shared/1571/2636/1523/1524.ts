/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1524
 */

"use strict"

import { useIntl } from /* 710 */"react-intl"
import /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_155 from /* 155 */"./155"
import /* [auto-meaningful-name] */Module_1551 from /* 155 */"./155"
var _a
_a = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  function d(e) {
    if (e$onSelect) {
      e$onSelect(e$index, e)
    }
  }
  return React1.createElement("div", {
    className: Module_1551.typeSelectionList,
    style: {
      left: e$position.x,
      top: e$position.y,
      display: e$visible ? "block" : "none"
    }
  }, React1.createElement("div", {
    onClick: d.bind(null, "number"),
    className: Classnames1("number" === e$type && Module_1551.active)
  }, useIntl$formatMessage({
    id: "storageItemNumber"
  })), React1.createElement("div", {
    onClick: d.bind(null, "string"),
    className: Classnames1("string" === e$type && Module_1551.active)
  }, useIntl$formatMessage({
    id: "storageItemString"
  })))
}
export { _a as a }
export default _a
