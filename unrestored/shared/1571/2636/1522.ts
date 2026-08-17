/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1522
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { memo, useRef, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import { useIntl } from /* 710 */"react-intl"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_99 from /* 99 */"./99"
import /* [auto-meaningful-name] */Module_991 from /* 99 */"./99"
import * as /* [auto-meaningful-name] */Module_188 from /* 188 */"./188"
var _a
_a = memo(function () {
  var t = useSelector(function (e) {
    return e.block.get("commonInputDialog")
  })
  var /* [auto-meaningful-name] */t$visible = t.visible
  var /* [auto-meaningful-name] */t$title = t.title
  var /* [auto-meaningful-name] */t$placeholder = t.placeholder
  var /* [auto-meaningful-name] */t$defaultValue = t.defaultValue
  var /* [auto-meaningful-name] */t$maxLength = t.maxLength
  var _ = undefined === t$maxLength ? 1 / 0 : t$maxLength
  var /* [auto-meaningful-name] */t$validator = t.validator
  var /* [auto-meaningful-name] */t$confirmCallback = t.confirmCallback
  var /* [auto-meaningful-name] */t$cancelCallback = t.cancelCallback
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var O = useRef(null)
  var w = useDispatch()
  var C = useState("")
  var T = Module_10.a(C, 2)
  var S = T[0]
  var A = T[1]
  var I = useState(t$defaultValue || "")
  var j = Module_10.a(I, 2)
  var N = j[0]
  var R = j[1]
  useEffect(function () {
    var /* [auto-meaningful-name] */O$current
    R(t$defaultValue || "")
    if (t$visible) {
      if (!(null === (O$current = O.current) || undefined === O$current)) {
        O$current.focus()
      }
      setImmediate(function () {
        var /* [auto-meaningful-name] */O$current1
        if (!(null === (O$current1 = O.current) || undefined === O$current1)) {
          O$current1.select()
        }
      })
      A("")
    }
  }, [t$visible, t$defaultValue])
  var k = function () {
    if (!(null === t$cancelCallback || undefined === t$cancelCallback)) {
      t$cancelCallback.call(null)
    }
    w(Src_editor_redux_common_actions.jh())
  }
  var x = function () {
    if (!S && N) {
      if (!(null === t$confirmCallback || undefined === t$confirmCallback)) {
        t$confirmCallback.call(null, N)
      }
      w(Src_editor_redux_common_actions.jh())
    }
  }
  return React1.createElement(Src_shared_ui_components_index.f, {
    visible: t$visible,
    className: Classnames1(Module_991.nameDialog),
    onClose: k,
    withPortal: true
  }, React1.createElement(Module_188.a, {
    useCapture: true
  }, React1.createElement(Module_188.b, {
    keys: "enter",
    callback: x
  })), React1.createElement("p", {
    className: Module_991.dialogTitle
  }, t$title && useIntl$formatMessage({
    id: t$title
  }) || ""), React1.createElement("div", {
    className: Module_991.inputWrapper
  }, React1.createElement("span", null, useIntl$formatMessage({
    id: "name"
  })), React1.createElement(Src_shared_ui_components_index.k, {
    ref: O,
    warning: !!S,
    placeholder: t$placeholder && useIntl$formatMessage({
      id: t$placeholder
    }),
    onChange: function (e) {
      var t = null === t$validator || undefined === t$validator ? undefined : t$validator.call(null, e)
      R(e)
      A(t || "")
    },
    maxLength: _,
    value: N
  }), S && React1.createElement("div", {
    className: Module_991.warningTips
  }, " ", useIntl$formatMessage({
    id: S
  }))), React1.createElement("div", {
    className: Module_991.confirmBox
  }, React1.createElement(Src_shared_ui_components_index.d, {
    onClick: k
  }, useIntl$formatMessage({
    id: "cancel"
  })), React1.createElement(Src_shared_ui_components_index.d, {
    onClick: x,
    type: "primary",
    disabled: !!S || !N
  }, useIntl$formatMessage({
    id: "confirm"
  }))))
})
export { _a as a }
export default _a
