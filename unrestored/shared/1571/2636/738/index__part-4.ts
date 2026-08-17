/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：738__part-4
 */

"use strict"

import { h, g, _ } from "./index__part-0"
import { P } from "./index__part-1"
import { V } from "./index__part-2"
import { q } from "./index__part-3"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../../src/shared/ui/language"
import { IntlProvider } from /* 2681 */"react-intl"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_70 from /* 70 */"./70"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_302 from /* 302 */"./302"
import * as /* [auto-meaningful-name] */Module_113 from /* 113 */"./113"
import /* [auto-meaningful-name] */Module_1131 from /* 113 */"./113"
var J = function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useSelector(function (e) {
    return e.phoneCallInfo
  })
  return React.createElement("div", {
    className: Module_1131.dialCall
  }, React.createElement("div", {
    className: Module_1131.deviceBox
  }, n.callStatus === Module_70.b.IDEL && React.createElement("div", {
    className: Module_1131.callStatus
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-call-idle",
    className: Module_1131.noCallIcon
  }), React.createElement("div", null, useIntl$formatMessage({
    id: "emulator.noCall"
  }))), n.callStatus !== Module_70.b.IDEL && React.createElement("div", {
    className: Module_1131.callStatus
  }, React.createElement("div", {
    className: Module_1131.phoneNumber
  }, n.dialOutPhoneNumber), n.callStatus === Module_70.b.RINGING && React.createElement("div", null, useIntl$formatMessage({
    id: "emulator.incomingNumber"
  })), n.callStatus === Module_70.b.OFFHOOK && React.createElement("div", null, useIntl$formatMessage({
    id: "emulator.onCalling"
  })))), React.createElement("div", {
    className: Classnames(Module_1131.callBtnBox, Module_1131.flexSC)
  }, React.createElement("div", {
    className: "dialOutCall" === n.callType && n.callStatus !== Module_70.b.IDEL ? Module_1131.active : ""
  }, React.createElement("div", {
    id: "emulatorDialCallEnd",
    className: Classnames(Module_1131.callBtnItem, Module_1131.callEnd),
    onClick: function () {
      if ("dialOutCall" === n.callType && n.callStatus !== Module_70.b.IDEL) {
        Module_302.press("emulatorDialCallEnd")
        e(h({
          onPhoneCallEnd: {
            callingPageVisible: false,
            callType: "dialOutCall",
            callStatus: Module_70.b.IDEL
          }
        }))
        e(_({
          callStatus: Module_70.b.IDEL
        }))
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-call-disconnect"
  })), React.createElement("span", {
    className: Module_1131.callBtnText
  }, useIntl$formatMessage({
    id: "emulator.callEndByOtherSide"
  }))), React.createElement("div", {
    className: "dialOutCall" === n.callType && n.callStatus === Module_70.b.RINGING ? Module_1131.active : ""
  }, React.createElement("div", {
    id: "emulatorDialCallConnect",
    className: Classnames(Module_1131.callBtnItem, Module_1131.callConnect),
    onClick: function () {
      if ("dialOutCall" === n.callType && n.callStatus === Module_70.b.RINGING) {
        Module_302.press("emulatorDialCallConnect")
        e(h({
          onPhoneCallConnect: {
            callType: "dialOutCall",
            callStatus: Module_70.b.OFFHOOK
          }
        }))
        e(_({
          callStatus: Module_70.b.OFFHOOK
        }))
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-call-dial"
  })), React.createElement("span", {
    className: Module_1131.callBtnText
  }, useIntl$formatMessage({
    id: "emulator.callConnectByOtherSide"
  })))))
}
var $ = function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useSelector(function (e) {
    return e.phoneCallInfo
  })
  var a = useState(n.incomingPhoneNumber)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  return React.createElement("div", {
    className: Module_1131.receiveCall
  }, React.createElement("div", {
    className: Module_1131.deviceBox
  }, React.createElement("div", {
    className: Module_1131.callStatus
  }, React.createElement("div", {
    className: Module_1131.phoneNumber
  }, c), n.callStatus === Module_70.b.IDEL && React.createElement("div", null, useIntl$formatMessage({
    id: "emulator.callNumber"
  })), n.callStatus === Module_70.b.RINGING && React.createElement("div", null, useIntl$formatMessage({
    id: "emulator.onRinging"
  })), n.callStatus === Module_70.b.OFFHOOK && React.createElement("div", null, useIntl$formatMessage({
    id: "emulator.onCalling"
  })))), React.createElement("div", {
    className: Module_1131.phoneNumberBox
  }, React.createElement("div", {
    className: Module_1131.phoneNumber
  }, useIntl$formatMessage({
    id: "emulator.incomingNumber"
  })), React.createElement(Src_shared_ui_components_index.k, {
    warning: !c,
    defaultValue: c,
    placeholder: useIntl$formatMessage({
      id: "emulator.incomingNumberPlaceHolder"
    }),
    onChange: function (e) {
      l(e)
    }
  }), React.createElement("div", {
    className: Module_1131.warning
  }, !c && React.createElement("span", null, useIntl$formatMessage({
    id: "emulator.incomingNumberPlaceHolder"
  })))), React.createElement("div", {
    className: Classnames(Module_1131.callBtnBox, Module_1131.flexSC)
  }, React.createElement("div", {
    className: "incomingCall" === n.callType && n.callStatus !== Module_70.b.IDEL ? Module_1131.active : ""
  }, React.createElement("div", {
    id: "emulatorReceiveCallEnd",
    className: Classnames(Module_1131.callBtnItem, Module_1131.callEnd),
    onClick: function () {
      if ("incomingCall" === n.callType && n.callStatus !== Module_70.b.IDEL) {
        Module_302.press("emulatorReceiveCallEnd")
        e(h({
          onPhoneCallEnd: {
            callingPageVisible: false,
            callType: "incomingCall",
            callStatus: Module_70.b.IDEL
          }
        }))
        e(_({
          callStatus: Module_70.b.IDEL
        }))
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-call-disconnect"
  })), React.createElement("span", {
    className: Module_1131.callBtnText
  }, useIntl$formatMessage({
    id: "emulator.callEndByOtherSide"
  }))), React.createElement("div", {
    className: n.callStatus === Module_70.b.IDEL && c ? Module_1131.active : ""
  }, React.createElement("div", {
    id: "emulatorReceiveCallConnect",
    className: Classnames(Module_1131.callBtnItem, Module_1131.callConnect),
    onClick: function () {
      if (n.callStatus === Module_70.b.IDEL && c) {
        Module_302.press("emulatorReceiveCallConnect")
        e(h({
          onReceivePhoneCall: {
            callingPageVisible: true,
            phoneNumber: c,
            callType: "incomingCall",
            callStatus: Module_70.b.RINGING
          }
        }))
        e(_({
          incomingPhoneNumber: c,
          callType: "incomingCall",
          callStatus: Module_70.b.RINGING
        }))
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-call-dial"
  })), React.createElement("span", {
    className: Module_1131.callBtnText
  }, useIntl$formatMessage({
    id: "emulator.callByOtherSide"
  })))))
}
var ee = function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useState("123 4567 8901")
  var a = Module_10.a(n, 2)
  var s = a[0]
  var c = a[1]
  var l = useState(useIntl$formatMessage({
    id: "emulator.smsContentDefault"
  }))
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  return React.createElement("div", {
    className: Module_1131.ReceiveSms
  }, React.createElement("div", {
    className: Module_1131.phoneNumberBox
  }, React.createElement("div", {
    className: Module_1131.phoneNumber
  }, useIntl$formatMessage({
    id: "emulator.smsNumber"
  })), React.createElement(Src_shared_ui_components_index.k, {
    defaultValue: s,
    warning: !s,
    placeholder: useIntl$formatMessage({
      id: "emulator.smsNumberPlaceHolder"
    }),
    onChange: function (e) {
      c(e)
    },
    maxLength: 20
  }), React.createElement("div", {
    className: Module_1131.warning
  }, !s && React.createElement("span", null, useIntl$formatMessage({
    id: "emulator.smsNumberPlaceHolder"
  })))), React.createElement("div", {
    className: Module_1131.phoneNumberBox
  }, React.createElement("div", {
    className: Module_1131.phoneNumber
  }, useIntl$formatMessage({
    id: "emulator.smsContent"
  })), React.createElement(Src_shared_ui_components_index.A, {
    defaultValue: d,
    rows: 10,
    maxLength: 200,
    placeholder: useIntl$formatMessage({
      id: "emulator.smsContentPlaceHolder"
    }),
    onChange: function (e) {
      p(e.target.value)
    }
  }), React.createElement("div", {
    className: Module_1131.textAreaWarning
  }, !d && React.createElement("span", null, useIntl$formatMessage({
    id: "emulator.smsContentPlaceHolder"
  })))), React.createElement("div", {
    id: "emulatorReceiveSms",
    onClick: function () {
      if (s && d) {
        Module_302.press("emulatorReceiveSms")
        e(h({
          onReceiveSms: {
            receiveSmsPageVisible: true,
            receiveSmsNumber: s,
            receiveSmsContent: d
          }
        }))
      }
    },
    className: Classnames(Module_1131.receiveSmsBtn, (!s || !d) && Module_1131.disabled)
  }, useIntl$formatMessage({
    id: "emulator.receiveSms"
  })))
}
var te = ["SHAKE", "ROTATION", "POSITION"]
var ne = function (e) {
  var /* [auto-meaningful-name] */e$messageWindow = e.messageWindow
  var n = useDispatch()
  var a = useSelector(function (e) {
    return e.visiblePanel
  })
  var s = useSelector(function (e) {
    return e.language
  })
  var c = useRef(null)
  useEffect(function () {
    if (e$messageWindow) {
      n(function (e) {
        return {
          type: "SET_EMIT_EVENT",
          payload: e
        }
      }(e$messageWindow))
    }
  }, [n, e$messageWindow])
  useEffect(function () {
    var e = function (e) {
      var /* [auto-meaningful-name] */e$data = e.data
      var /* [auto-meaningful-name] */e$data$type = e$data.type
      var /* [auto-meaningful-name] */e$data$data = e$data.data
      if ("EMULATOR" === e$data$type) {
        Object.keys(e$data$data).forEach(function (e) {
          !function (e, t) {
            switch (e) {
              case "ready":
                n({
                  type: "PUSH_ALL_DATA",
                  payload: undefined
                })
            }
          }(e, e$data$data[e])
        })
      }
      if ("TO_EMULATOR" === e$data$type) {
        Object.keys(e$data$data).forEach(function (e) {
          if ("playing" === e) {
            n(_({
              callStatus: Module_70.b.IDEL
            }))
          }
          if ("phoneCallInfo" === e) {
            n(_(e$data$data[e]))
          }
        })
      }
    }
    var t = function (e) {
      n(g(""))
      n(h({
        visiblePanel: ""
      }))
    }
    window.addEventListener("click", t)
    window.addEventListener("message", e)
    return function () {
      window.removeEventListener("message", e)
      window.removeEventListener("click", t)
    }
  }, [n])
  return React.createElement(IntlProvider, {
    locale: s,
    messages: Src_shared_ui_language.e[s] || Src_shared_ui_language.e[Src_shared_ui_language.b]
  }, React.createElement("div", {
    className: "emulator-wrapper",
    ref: c,
    onClick: function (e) {
      if (e.target !== c.current) {
        e.stopPropagation()
      }
    }
  }, React.createElement(q, null), React.createElement("div", {
    className: Classnames("emulator-panel-wrapper", a && "visible")
  }, React.createElement("div", {
    className: "emulator-contentWrapper"
  }, a && te.includes(a) && React.createElement(P, null), React.createElement(V, null), "DIAL_CALL" === a && React.createElement(J, null), "RECEIVE_CALL" === a && React.createElement($, null), "RECEIVE_SMS" === a && React.createElement(ee, null)))))
}
export { ne }
