/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：347
 */

"use strict"

export { callMethod } from "../../../../unrestored/shared/1571/2636/20/index"
export { getProperty } from "../../../../unrestored/shared/1571/2636/20/index"
export { onWidgetEvent } from "../../../../unrestored/shared/1571/2636/20/index"
export { setProperty } from "../../../../unrestored/shared/1571/2636/20/index"
export { ne as require }
export { ie as clearExternalModules }
export { re as requireExternalModule }
export { oe as getExternalModules }
export { ee as modules }
var r = {}
Object.defineProperty(r, "setHeader", {
  get: function () {
    return v
  }
})
Object.defineProperty(r, "setDataSerializer", {
  get: function () {
    return b
  }
})
Object.defineProperty(r, "setRequestTimeout", {
  get: function () {
    return y
  }
})
Object.defineProperty(r, "getCookieString", {
  get: function () {
    return E
  }
})
Object.defineProperty(r, "setCookie", {
  get: function () {
    return O
  }
})
Object.defineProperty(r, "clearCookies", {
  get: function () {
    return w
  }
})
Object.defineProperty(r, "removeCookies", {
  get: function () {
    return C
  }
})
Object.defineProperty(r, "post", {
  get: function () {
    return S
  }
})
Object.defineProperty(r, "get", {
  get: function () {
    return A
  }
})
Object.defineProperty(r, "put", {
  get: function () {
    return I
  }
})
Object.defineProperty(r, "patch", {
  get: function () {
    return j
  }
})
Object.defineProperty(r, "head", {
  get: function () {
    return N
  }
})
Object.defineProperty(r, "options", {
  get: function () {
    return R
  }
})
Object.defineProperty(r, "downloadFile", {
  get: function () {
    return k
  }
})
Object.defineProperty(r, "uploadFile", {
  get: function () {
    return x
  }
})
Object.defineProperty(r, "abort", {
  get: function () {
    return D
  }
})
var o = {}
Object.defineProperty(o, "wsConnect", {
  get: function () {
    return G
  }
})
Object.defineProperty(o, "wsSend", {
  get: function () {
    return W
  }
})
Object.defineProperty(o, "wsClose", {
  get: function () {
    return U
  }
})
var i = {}
Object.defineProperty(i, "isStepCountingAvailable", {
  get: function () {
    return V
  }
})
Object.defineProperty(i, "requestPermission", {
  get: function () {
    return z
  }
})
Object.defineProperty(i, "startStepperUpdates", {
  get: function () {
    return Y
  }
})
Object.defineProperty(i, "stopStepperUpdates", {
  get: function () {
    return K
  }
})
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import /* [auto-meaningful-name] */Lodash1 from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Qrcode from /* 556 */"qrcode"
import /* [auto-meaningful-name] */Qrcode1 from /* 556 */"qrcode"
import * as /* [auto-meaningful-name] */Vikadata_vika from /* 793 */"@vikadata/vika"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Html2canvas from /* 414 */"html2canvas"
import /* [auto-meaningful-name] */Html2canvas1 from /* 414 */"html2canvas"
import * as /* [auto-meaningful-name] */AntdMobile from /* 198 */"antd-mobile"
import * as /* [auto-meaningful-name] */Module_393 from /* 393 */"../../../../unrestored/shared/1571/2636/34/347/393"
var _ = window.cordova && window.cordova.plugin && window.cordova.plugin.http || {}
function v(e, t, n) {
  _.setHeader(e, t, n)
}
function b(e) {
  _.setDataSerializer(e)
}
function y(e) {
  _.setRequestTimeout(e)
}
function E(e) {
  return _.getCookieString(e)
}
function O(e, t, n) {
  _.setCookie(e, t, n || {})
}
function w() {
  _.clearCookies()
}
function C(e, t) {
  _.removeCookies(e, t)
}
function T() {}
function S(e, t, n, r, o) {
  return _.post(e, t, n, r || T, o || T)
}
function A(e, t, n, r, o) {
  return _.get(e, t || {}, n || {}, r || T, o || T)
}
function I(e, t, n, r, o) {
  return _.put(e, t, n, r || T, o || T)
}
function j(e, t, n, r, o) {
  return _.patch(e, t, n, r || T, o || T)
}
function N(e, t, n, r, o) {
  return _.head(e, t, n, r || T, o || T)
}
function R(e, t, n, r, o) {
  return _.options(e, t, n, r || T, o || T)
}
function k(e, t, n, r, o, i) {
  return _.downloadFile(e, t, n, r, o || T, i || T)
}
function x(e, t, n, r, o, i, a) {
  return _.uploadFile(e, t, n, r, o, i || T, a || T)
}
function D(e) {
  return _.abort(e)
}
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../../unrestored/shared/1571/2636/28/index"
if (!Module_28.d()) {
  var L = {}
  var P = function (e) {
    var t = L[e]
    t.onmessage = undefined
    t.onclose = undefined
    L[e] = undefined
  }
  var B = {
    wsConnect: function (e, t, n, r) {
      var o
      var i = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      var a = new WebSocket(e.url)
      if (e.timeout && e.timeout > 0) {
        o = setTimeout(function () {
          a.close()
        }, e.timeout)
      }
      a.onopen = function () {
        if (o) {
          clearTimeout(o)
        }
        L[i] = a;
        (function (e, t, n) {
          var r = L[e]
          r.onmessage = function (n) {
            t({
              webSocketId: e,
              message: n.data,
              callbackMethod: "onMessage"
            })
          }
          r.onclose = function (t) {
            n({
              webSocketId: e,
              code: t.code,
              reason: t.reason,
              callbackMethod: "onClose"
            })
            P(e)
          }
        })(i, t, t)
        n({
          webSocketId: i,
          code: 0
        })
      }
      a.onerror = function () {
        r({
          webSocketId: i,
          code: 1006,
          reason: "Error connecting to " + e.url,
          callbackMethod: "onFail"
        })
      }
    },
    wsSend: function (e, t) {
      var n = L[e]
      if (n) {
        n.send(t)
      }
    },
    wsClose: function (e, t, n) {
      var r = L[e]
      if (r) {
        r.close(t, n)
        P(e)
      }
    }
  }
  window.CordovaWebsocketPlugin = B
}
import * as /* [auto-meaningful-name] */Tools_index from /* 15 */"../../tools/index"
function G(e, t, n, r) {
  var /* [auto-meaningful-name] */e$url
  if (!((null === (e$url = e.url) || undefined === e$url ? undefined : e$url.includes("codemao.cn")) || Tools_index.O(e.url || ""))) {
    window.CordovaWebsocketPlugin.wsConnect(e, function (e) {
      t(e)
    }, function (e) {
      n(e)
    }, function (e) {
      r(e)
    })
  }
}
function W(e, t) {
  window.CordovaWebsocketPlugin.wsSend(e, t)
}
function U(e, t, n) {
  t = t || 1e3
  n = n || "bye"
  window.CordovaWebsocketPlugin.wsClose(e, t, n)
}
import * as /* [auto-meaningful-name] */Module_346 from /* 346 */"../../../../unrestored/shared/1571/2636/34/347/346"
function V() {
  return new Promise(function (e) {
    window.stepper.isStepCountingAvailable().then(function (t) {
      if (t) {
        console.log("isStepCountingAvailable Available !")
        e(true)
      } else {
        console.log("isStepCountingAvailable Not available :-S")
        e(false)
      }
    }).catch(function (t) {
      console.error("isStepCountingAvailable error", t)
      e(false)
    })
  })
}
function z() {
  return new Promise(function (e) {
    window.stepper.requestPermission().then(function (t) {
      if (t) {
        console.log("requestPermission Authorized !")
        e(true)
      } else {
        console.log("requestPermission Denied :-S")
        e(false)
      }
    }).catch(function (t) {
      console.error("requestPermission error", t)
      e(false)
    })
  })
}
function Y(e, t, n) {
  window.stepper.startStepperUpdates(e, t, n, {})
}
function K() {
  window.stepper.stopStepperUpdates()
}
import * as /* [auto-meaningful-name] */Axios from /* 129 */"axios"
var X = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(Axios).a.create()
X.interceptors.request.use(function (e) {
  var t = e.url || ""
  if (e.baseURL) {
    t = e.baseURL + t.slice(1)
  }
  return Tools_index.Y(t) ? e : Promise.reject(new Error("auth failed"))
}, function (e) {
  return Promise.reject(e)
})
var Q = X
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../../../unrestored/shared/1571/2636/20/index"
import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../../../unrestored/shared/1571/2636/34/347/112"
var $ = {
  isNative: Module_28.d,
  filterXss: Module_28.i,
  getWidgetImageUrl: Module_112.b,
  openLoginPage: Module_28.q
}
var ee = new Map()
var te = {
  "crypto-js": {
    url: "https://static.bcmcdn.com/appcraft/modules/crypto-js/4.1.1/crypto-js.js",
    ref: "CryptoJS"
  }
}
function ne(e) {
  if (te[e]) {
    var /* [auto-meaningful-name] */teE$ref = te[e].ref
    return window[t]
  }
  switch (e) {
    case "http":
      return r
    case "lodash":
      return Lodash1
    case "qrcode":
      return Qrcode1
    case "pedometer":
      return Module_393
    case "websocket":
      return o
    case "brightness":
      return Module_346
    case "stepper":
      return i
    case "axios":
      return Q
    case "utils":
      return $
    case "vika":
      return Vikadata_vika.Vika
    case "antd-mobile":
      return AntdMobile
    case "color":
      return Color1
    case "html2canvas":
      return Html2canvas1
    default:
      return {}
  }
}
function re(e) {
  if (te[e]) {
    var /* [auto-meaningful-name] */teE$url = te[e].url
    ee.set(e, t)
  }
}
function oe() {
  return Array.from(ee.values())
}
function ie() {
  ee.clear()
}
