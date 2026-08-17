/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：738__part-3
 */

"use strict"

import { d, p, h, g } from "./index__part-0"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_Iconfont_index from /* 94 */"../../../../../src/shared/ui/components/Iconfont/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useIntl } from /* 710 */"react-intl"
var Y = [
  {
    type: "SHAKE",
    icon: "icon-phone-shake",
    iconSelected: "icon-phone-shake-selected",
    name: "emulator.shake"
  }, {
    type: "ROTATION",
    icon: "icon-phone-rotation",
    iconSelected: "icon-phone-rotation-selected",
    name: "emulator.rotation"
  }, {
    type: "POSITION",
    icon: "icon-phone-move",
    iconSelected: "icon-phone-move-selected",
    name: "emulator.position",
    spaceLine: true
  }, {
    type: "DIAL_CALL",
    icon: "icon-phone-dial-call",
    iconSelected: "icon-phone-dial-call-selected",
    name: "emulator.dialCall"
  }, {
    type: "RECEIVE_CALL",
    icon: "icon-phone-receive-call",
    iconSelected: "icon-phone-receive-call-selected",
    name: "emulator.receiveCall",
    spaceLine: true
  }, {
    type: "RECEIVE_SMS",
    icon: "icon-phone-receive-sms",
    iconSelected: "icon-phone-receive-sms-selected",
    name: "emulator.receiveSms"
  }
]
var K = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement("div", {
    className: Classnames("emulator-channel-item", e$selected && "selected")
  }, React.createElement("div", {
    className: "emulator-icon"
  }, e$icon && React.createElement(Src_shared_ui_components_Iconfont_index.a, {
    type: e$icon
  })), React.createElement("div", {
    className: "emulator-text"
  }, useIntl$formatMessage({
    id: e$name
  })))
})
var q = React.memo(function () {
  var e = useDispatch()
  var t = useSelector(function (e) {
    return e
  })
  return React.createElement("div", {
    className: "emulator-channel-list-wrapper"
  }, React.createElement("ul", {
    className: "emulator-channel-list"
  }, Y.map(function (n) {
    var /* [auto-meaningful-name] */n$type = n.type
    var /* [auto-meaningful-name] */n$icon = n.icon
    var /* [auto-meaningful-name] */n$name = n.name
    var /* [auto-meaningful-name] */n$iconSelected = n.iconSelected
    var /* [auto-meaningful-name] */n$spaceLine = n.spaceLine
    return React.createElement("li", {
      key: n$type,
      onClick: function () {
        return function (n) {
          if (t.visiblePanel === n) {
            e(g(""))
            e(h({
              visiblePanel: ""
            }))
          } else {
            if ("SHAKE" === n) {
              e(d({
                x: 0,
                y: 0,
                z: 0
              }))
              e(p({
                x: 0,
                y: 0,
                z: 0
              }))
            }
            e(g(n))
            e(h({
              visiblePanel: n
            }))
          }
        }(n$type)
      },
      className: Classnames("emulator-channel-item-wrapper", n$type === t.visiblePanel && "selected")
    }, React.createElement(K, {
      key: n$type,
      icon: n$type === t.visiblePanel ? n$iconSelected : n$icon,
      name: n$name,
      type: n$type,
      selected: n$type === t.visiblePanel
    }), n$spaceLine && React.createElement("div", {
      className: "space-line"
    }))
  })))
})
export { q }
