/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-220
 */

"use strict"

import { v } from "../../../unrestored/shared/1571/2636/index__part-1"
import { pB, fB, hB, mB } from "./PreviewArea/Player/PermissionDialog/index"
var /* [auto-meaningful-name] */navigator$serviceWorker
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */Shared_env from /* 57 */"../../shared/env"
import { Provider } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import /* 1186 */"../../../unrestored/shared/1571/2636/1186"
import /* 2632 */"../../../unrestored/shared/1571/2636/2632"
import /* 2633 */"../../../unrestored/shared/1571/2636/2633"
if (["staging", "production", "prod"].includes(Shared_env.b())) {
  setInterval(function () {}, 100)
}
ReactDom.render(React.createElement(Provider, {
  store: Module_37.d
}, React.createElement(pB, null)), document.getElementById("root"));
(function (e) {
  if ("serviceWorker" in navigator) {
    if (new URL("", window.location.href).origin !== window.location.origin) {
      return
    }
    window.addEventListener("load", function () {
      if (hB) {
        !function (e, t) {
          fetch(e, {
            headers: {
              "Service-Worker": "script"
            }
          }).then(function (n) {
            var r = n.headers.get("content-type")
            if (404 === n.status || null != r && -1 === r.indexOf("javascript")) {
              navigator.serviceWorker.ready.then(function (e) {
                e.unregister().then(function () {
                  window.location.reload()
                })
              })
            } else {
              mB(e, t)
            }
          }).catch(function () {
            console.error("No internet connection found. App is running in offline mode.")
          })
        }("/main.sw.js", e)
        navigator.serviceWorker.ready.then(function () {})
      } else {
        mB("/editor/main.sw.js", e)
      }
    })
  }
})({
  swUrl: v
})
if (!(null === (navigator$serviceWorker = navigator.serviceWorker) || undefined === navigator$serviceWorker)) {
  navigator$serviceWorker.getRegistration().then(function (e) {
    if ((null === e || undefined === e ? undefined : e.active) && !navigator.serviceWorker.controller) {
      window.location.reload()
    }
    if (!(e || window.localStorage.getItem("HAS_RELOADED"))) {
      window.localStorage.setItem("HAS_RELOADED", JSON.stringify(true))
      window.location.reload()
    }
  })
}
fB(console.info)
