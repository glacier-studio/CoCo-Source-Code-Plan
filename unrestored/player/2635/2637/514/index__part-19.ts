/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-19
 */

"use strict"

import /* [auto-meaningful-name] */Module_71 from /* 71 */"./71"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
var ce
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../../../shared/1571/2636/20/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_70 from /* 70 */"../../../../shared/1571/2636/738/70"
import * as /* [auto-meaningful-name] */Module_219 from /* 219 */"../../../../shared/1571/2636/37/219/index"
import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"../../../../shared/1571/2636/48/72"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../shared/1571/2636/10/index"
import { useIntl } from /* 710 */"react-intl"
var ye = memo(function () {
  var t = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useSelector(function (t) {
    return t.emulatorPhoneInfo
  })
  var r = useState(0)
  var i = Module_10.a(r, 2)
  var o = i[0]
  var a = i[1]
  useEffect(function () {
    if (ce) {
      clearInterval(ce)
    }
    if (n.callingPageVisible && n.callStatus === Module_70.b.OFFHOOK) {
      var t = 0
      ce = setInterval(function () {
        t++
        a(t)
      }, 1e3)
    }
    return function () {
      if (ce) {
        clearInterval(ce)
      }
      a(0)
    }
  }, [n.callingPageVisible, n.callStatus])
  var s = function (t) {
    var e = Math.floor(t % 86400 % 3600 / 60)
    var n = Math.floor(t % 86400 % 3600 % 60)
    return "".concat(e < 10 ? "0" : "").concat(e, " : ").concat(n < 10 ? "0" : "").concat(n)
  }
  var u = function () {
    t(Module_72.s({
      callingPageVisible: false,
      callStatus: Module_70.b.IDEL
    }))
    Module_20.emitWidgetEvent(Module_70.c, "onPhoneCallEnd", n.phoneDialWidgetId, Module_70.a.DIAL_OUT_CALL_END)
    Module_219.b({
      phoneCallInfo: {
        callType: "dialOutCall",
        callStatus: Module_70.b.IDEL
      }
    })
  }
  var l = function () {
    Module_20.emitWidgetEventType(Module_70.c, "onPhoneCallEnd", n.callStatus === Module_70.b.RINGING ? Module_70.a.INCOMING_CALL_REFUSE_END : Module_70.a.INCOMING_CALL_CONNECT_END)
    t(Module_72.s({
      callingPageVisible: false,
      callStatus: Module_70.b.IDEL
    }))
    Module_219.b({
      phoneCallInfo: {
        callStatus: Module_70.b.IDEL
      }
    })
  }
  var d = function () {
    t(Module_72.s({
      callStatus: Module_70.b.OFFHOOK
    }))
    Module_20.emitWidgetEventType(Module_70.c, "onConnectReceivePhoneCall")
    Module_219.b({
      phoneCallInfo: {
        callStatus: Module_70.b.OFFHOOK
      }
    })
  }
  return React.createElement("div", {
    className: Classnames(Module_71.callingBox, !n.callingPageVisible && Module_71.callingBoxHide)
  }, "dialOutCall" === n.callType && React.createElement(React.Fragment, null, React.createElement("div", {
    className: Module_71.phoneNumber
  }, n.phoneNumber), n.callStatus === Module_70.b.RINGING && React.createElement("div", {
    className: Module_71.phoneStatus
  }, useIntl$formatMessage({
    id: "emulator.onRinging"
  })), n.callStatus === Module_70.b.OFFHOOK && React.createElement("div", {
    className: Module_71.phoneStatus
  }, s(o)), React.createElement("div", {
    className: Classnames(Module_71.callBtnBox, Module_71.flexCC)
  }, React.createElement("div", {
    className: Module_71.callBtnItemBox,
    onClick: u
  }, React.createElement("div", {
    className: Classnames(Module_71.callBtnItem, Module_71.callEnd)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-call-disconnect"
  })), React.createElement("span", {
    className: Module_71.callBtnText
  }, useIntl$formatMessage({
    id: "emulator.callEnd"
  }))))), "incomingCall" === n.callType && React.createElement(React.Fragment, null, React.createElement("div", {
    className: Module_71.phoneNumber
  }, n.phoneNumber), n.callStatus === Module_70.b.RINGING && React.createElement("div", {
    className: Module_71.phoneStatus
  }, useIntl$formatMessage({
    id: "emulator.phoneNumber"
  })), n.callStatus === Module_70.b.OFFHOOK && React.createElement("div", {
    className: Module_71.phoneStatus
  }, s(o)), React.createElement("div", {
    className: Classnames(Module_71.callBtnBox, n.callStatus === Module_70.b.RINGING ? Module_71.flexSC : Module_71.flexCC)
  }, React.createElement("div", {
    className: Module_71.callBtnItemBox,
    onClick: l
  }, React.createElement("div", {
    className: Classnames(Module_71.callBtnItem, Module_71.callEnd)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-call-disconnect"
  })), React.createElement("span", {
    className: Module_71.callBtnText
  }, n.callStatus === Module_70.b.RINGING ? useIntl$formatMessage({
    id: "emulator.callRefuse"
  }) : useIntl$formatMessage({
    id: "emulator.callEnd"
  }))), n.callStatus === Module_70.b.RINGING && React.createElement("div", {
    className: Module_71.callBtnItemBox,
    onClick: d
  }, React.createElement("div", {
    className: Classnames(Module_71.callBtnItem, Module_71.callConnect)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-call-dial"
  })), React.createElement("span", {
    className: Module_71.callBtnText
  }, useIntl$formatMessage({
    id: "emulator.callConnect"
  }))))))
})
export { ye }
