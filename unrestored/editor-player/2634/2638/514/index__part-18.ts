/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-18
 */

"use strict"

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
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_externalModule from /* 347 */"../../../../../src/shared/widget/custom/external-module"
import /* 1187 */"./1187"
import /* 1188 */"./1188"
import /* 2681 */"react-intl"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_71 from /* 71 */"./71"
import /* [auto-meaningful-name] */Module_711 from /* 71 */"./71"
var ge = [
  {
    number: 1,
    letter: ""
  }, {
    number: 2,
    letter: "ABC"
  }, {
    number: 3,
    letter: "DEF"
  }, {
    number: 4,
    letter: "GHI"
  }, {
    number: 5,
    letter: "JKL"
  }, {
    number: 6,
    letter: "MNO"
  }, {
    number: 7,
    letter: "PQRS"
  }, {
    number: 8,
    letter: "TUV"
  }, {
    number: 9,
    letter: "XYZ"
  }, {
    number: "*",
    letter: ""
  }, {
    number: 0,
    letter: "+"
  }, {
    number: "#",
    letter: ""
  }
]
var ve = memo(function () {
  var t = useDispatch()
  var e = useSelector(function (t) {
    return t.emulatorPhoneInfo
  })
  var n = useState("")
  var r = Module_10.a(n, 2)
  var i = r[0]
  var o = r[1]
  useEffect(function () {
    o(e.phoneNumber)
  }, [e.phoneNumber])
  var a = function (t) {
    o(i + "" + t)
  }
  return React.createElement("div", {
    className: Classnames(Module_711.dialerBox, !e.dialPageVisible && Module_711.dialerBoxHide)
  }, React.createElement("div", {
    className: Module_711.backBox,
    onClick: function () {
      t(Module_72.s({
        dialPageVisible: false
      }))
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-nav-back"
  })), React.createElement("div", {
    className: Module_711.dialNumber
  }, i), React.createElement("div", {
    className: Module_711.numberBox
  }, ge.map(function (t) {
    return React.createElement("div", {
      key: t.number,
      className: Classnames(Module_711.keyItem, Module_711.numberKey),
      onClick: a.bind(null, t.number)
    }, React.createElement("div", {
      className: Module_711.number
    }, t.number), React.createElement("div", {
      className: Module_711.letter
    }, t.letter))
  }), React.createElement("div", {
    className: Classnames(Module_711.keyItem, Module_711.white)
  }), React.createElement("div", {
    className: Classnames(Module_711.keyItem, Module_711.callBtn),
    onClick: function () {
      if (i) {
        t(Module_72.s({
          dialPageVisible: false,
          callingPageVisible: true,
          callType: "dialOutCall",
          phoneNumber: i,
          callStatus: Module_70.b.RINGING
        }))
        Module_20.emitWidgetEvent(Module_70.c, "onPhoneCallStart", e.phoneDialWidgetId)
        Module_219.b({
          phoneCallInfo: {
            callType: "dialOutCall",
            dialOutPhoneNumber: i,
            callStatus: Module_70.b.RINGING
          }
        })
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-call-dial"
  })), React.createElement("div", {
    className: Classnames(Module_711.keyItem, Module_711.white)
  }, React.createElement("div", {
    className: Module_711.deleteBtn,
    onClick: function () {
      if (i) {
        o(i.substr(0, i.length - 1))
      }
    }
  }, "x"))))
})
export { ve }
