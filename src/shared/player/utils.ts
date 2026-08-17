/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：28__part-1
 */

"use strict"

import { m } from "../../../unrestored/shared/1571/2636/28/index__part-0"
import * as /* [auto-meaningful-name] */Module_128 from /* 128 */"../../../unrestored/shared/1571/2636/20/128"
import * as /* [auto-meaningful-name] */Module_657 from /* 657 */"../../../unrestored/shared/1571/2636/28/657"
import * as /* [auto-meaningful-name] */AntdMobile from "antd-mobile"
import /* [auto-meaningful-name] */Module_303 from /* 303 */"../../../unrestored/shared/1571/2636/64/303/index"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */Module_784 from /* 784 */"../../../unrestored/shared/1571/2636/28/784/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../../unrestored/shared/1571/2636/20/index"
function v(e) {
  return e + "_" + Module_303.generate()
}
function b() {
  var e = document.getElementById("rootPlayer")
  return e ? e.clientHeight / e.clientWidth : 640 / 360
}
function y() {
  return "undefined" === typeof window
}
function E(e) {
  return Lodash.isPlainObject(e) ? JSON.stringify(e) : (null === e || undefined === e ? undefined : e.toString()) || ""
}
function O(e) {
  return "%{COCO_player/".concat(e, "}")
}
function getPlatform() {
  var /* [auto-meaningful-name] */navigator$userAgent = navigator.userAgent
  return navigator$userAgent.indexOf("Android") > -1 || navigator$userAgent.indexOf("Linux") > -1 ? "Android" : navigator$userAgent.indexOf("iPhone") > -1 ? "ios" : "web"
}
function C() {
  return window.location.pathname.includes("/editor-player.html")
}
function T() {
  var /* [auto-meaningful-name] */navigator$userAgent = navigator.userAgent
  return navigator$userAgent.includes("Android") || navigator$userAgent.includes("Linux")
}
function S() {
  var /* [auto-meaningful-name] */navigator$userAgent = navigator.userAgent
  return /\sQQ\/\d/.test(navigator$userAgent)
}

export function isOnMobileDevice() {
  return getPlatform() !== "web"
}

export function isOnCordova() {
  return navigator.userAgent.toLowerCase().includes("cordova")
}

export function isOnWeb() {
  return getPlatform() === "web"
}

function N(e) {
  return Module_657.findIndex(function (t) {
    return e.includes(t)
  }) > -1
}
function R(e) {
  var t = e ? new Date(e) : new Date()
  var n = t.getFullYear()
  var r = t.getMonth() + 1
  var o = t.getDate()
  var i = t.getHours()
  var a = t.getMinutes()
  var s = "".concat(n, "-").concat(r < 10 ? "0" + r : r, "-").concat(o < 10 ? "0" + o : o)
  var c = "".concat(i < 10 ? "0" + i : i, ":").concat(a < 10 ? "0" + a : a, ":").concat("00")
  return {
    dateTime: "".concat(s, " ").concat(c),
    date: s,
    time: c,
    y: n,
    m: r,
    d: o,
    h: i,
    min: a,
    s: 0
  }
}
function k(e, t, n) {
  var r
  var /* [auto-meaningful-name] */t$defaultMode
  var i = ""
  if (t) {
    i = n ? null === (r = t[n]) || undefined === r ? undefined : r[e] : null === (t$defaultMode = t.defaultMode) || undefined === t$defaultMode ? undefined : t$defaultMode[e]
  }
  return i || ""
}
function x(e) {
  return Module_784.filterXSS(e)
}
function D() {
  switch (Module_128.a.env) {
    case "dev":
      return "development"
    case "test":
      return "test"
    case "staging":
      return "staging"
    case "prod":
    default:
      return "production"
  }
}
function M() {
  return L.apply(this, arguments)
}
function L() {
  return (L = Module_7.a(RegeneratorRuntime.mark(function e() {
    var t
    var /* [auto-meaningful-name] */e$sent
    var r = arguments
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = r.length > 0 && undefined !== r[0] && r[0]
            e.prev = 1
            e.next = 4
            return m()
          case 4:
            if (!(null === (e$sent = e.sent) || undefined === e$sent ? undefined : e$sent.id)) {
              e.next = 9
              break
            }
            if (t) {
              AntdMobile.Toast.show({
                content: "已登录"
              })
            }
            Module_20.setUserId(null === e$sent || undefined === e$sent ? undefined : e$sent.id)
            return e.abrupt("return", null === e$sent || undefined === e$sent ? undefined : e$sent.id)
          case 9:
            e.next = 13
            break
          case 11:
            e.prev = 11
            e.t0 = e.catch(1)
          case 13:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[1, 11]])
  }))).apply(this, arguments)
}
function P() {
  return B.apply(this, arguments)
}
function B() {
  return (B = Module_7.a(RegeneratorRuntime.mark(function e() {
    var t
    var n
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return M(true)
          case 2:
            if (!e.sent) {
              e.next = 5
              break
            }
            return e.abrupt("return")
          case 5:
            t = "".concat(Module_128.a.shequHost, "/codemao_login?onlyLogin=false&language=zh&disableThirdParty=true&ageLimit=false&pageView=login&theme=violet&env=").concat(D(), "&pid=7KeVbBdw&productCode=appcraft&platform=mobile");
            (n = document.createElement("iframe")).src = t
            n.title = "codemao-login iframe"
            n.style.cssText = "position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 999;\n  "
            document.body.appendChild(n)
            e.next = 13
            return new Promise(function (e) {
              var t = setTimeout(function () {
                if (n) {
                  n.remove()
                }
                e(false)
                window.removeEventListener("message", r)
              }, 5e3)
              function r(o) {
                var /* [auto-meaningful-name] */o$data$signal
                if (null === (o$data$signal = o.data.signal) || undefined === o$data$signal ? undefined : o$data$signal.startsWith("codemao-login")) {
                  var /* [auto-meaningful-name] */o$data$content
                  var s = null === (o$data$content = o.data.content) || undefined === o$data$content ? undefined : o$data$content.payload
                  switch (null === s || undefined === s ? undefined : s.event) {
                    case "IFRAME_READY":
                      if (t) {
                        clearTimeout(t)
                      }
                      break
                    case "PASSWORD_LOGIN_SUCCESS":
                      if (n) {
                        n.remove()
                      }
                      AntdMobile.Toast.show({
                        content: "登录成功"
                      })
                      M()
                      e(true)
                      window.removeEventListener("message", r)
                      break
                    case "PASSWORD_LOGIN_FAILURE":
                      AntdMobile.Toast.show({
                        content: "登录失败"
                      })
                      break
                    case "SMS_LOGIN_SUCCESS":
                      if (n) {
                        n.remove()
                      }
                      AntdMobile.Toast.show({
                        content: "登录成功"
                      })
                      M()
                      e(true)
                      window.removeEventListener("message", r)
                      break
                    case "SMS_LOGIN_FAILURE":
                      AntdMobile.Toast.show({
                        content: "登录失败"
                      })
                      break
                    case "THIRD_PARTY_LOGIN_SUCCESS":
                      if (n) {
                        n.remove()
                      }
                      AntdMobile.Toast.show({
                        content: "登录成功"
                      })
                      M()
                      e(true)
                      window.removeEventListener("message", r)
                      break
                    case "THIRD_PARTY_LOGIN_FAILURE":
                      AntdMobile.Toast.show({
                        content: "登录失败"
                      })
                      break
                    case "REGISTER_SUCCESS":
                      if (n) {
                        n.remove()
                      }
                      AntdMobile.Toast.show({
                        content: "注册成功"
                      })
                      M()
                      e(true)
                      window.removeEventListener("message", r)
                      break
                    case "REGISTER_FAILURE":
                      AntdMobile.Toast.show({
                        content: "注册失败"
                      })
                      break
                    case "REGISTER_CONFIRM":
                      break
                    case "CLOSE_ANIMATION_END":
                      if (n) {
                        n.remove()
                      }
                      e(false)
                      AntdMobile.Toast.show({
                        content: "登录页面已关闭"
                      })
                      window.removeEventListener("message", r)
                      break
                    case "REPORT":
                      break
                    default:
                      console.info("未知事件:", s)
                  }
                }
              }
              window.addEventListener("message", r)
            })
          case 13:
            return e.abrupt("return", e.sent)
          case 14:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
Module_303.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_")
export { v }
export { b }
export { y }
export { E }
export { O }
export { getPlatform as w }
export { C }
export { T }
export { S }
export { isOnMobileDevice as A }
export { isOnCordova as I }
export { isOnWeb as j }
export { N }
export { R }
export { k }
export { x }
export { P }
