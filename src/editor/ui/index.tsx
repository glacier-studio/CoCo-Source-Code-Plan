/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-220
 */

import { v } from "../../../unrestored/shared/1571/2636/index__part-1"
import { App, fB, isDevelopment, registerServiceWorker } from "./App"
import { store } from "../redux/store"
import * as /* [auto-meaningful-name] */Shared_env from "../../shared/env"
import { Provider } from "react-redux"
import ReactDom from "react-dom"
import React from "react"
import "../../../unrestored/shared/1571/2636/1186"
import "../../../unrestored/shared/1571/2636/2632"
import "../../../unrestored/shared/1571/2636/2633"

if (["staging", "production", "prod"].includes(Shared_env.b())) {
  setInterval(() => {}, 100)
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

;((serviceWorkerInfo) => {
  if ("serviceWorker" in navigator) {
    if (new URL("", window.location.href).origin !== window.location.origin) {
      return
    }
    window.addEventListener("load", () => {
      if (isDevelopment) {
        const swUrl = "/main.sw.js"
        fetch(swUrl, {
          headers: {
            "Service-Worker": "script"
          }
        }).then((response) => {
          const contentType = response.headers.get("content-type")
          if (
            response.status === 404 ||
            (contentType != null && contentType.indexOf("javascript") === -1)
          ) {
            navigator.serviceWorker.ready.then((registration) => {
              registration.unregister().then(() => { window.location.reload() })
            })
          } else {
            registerServiceWorker(swUrl, serviceWorkerInfo)
          }
        }).catch(() => {
          console.error("No internet connection found. App is running in offline mode.")
        })
        navigator.serviceWorker.ready.then(() => {})
      } else {
        registerServiceWorker("/editor/main.sw.js", serviceWorkerInfo)
      }
    })
  }
})({ swUrl: v })

navigator.serviceWorker?.getRegistration().then((registration) => {
  if (registration?.active && !navigator.serviceWorker.controller) {
    window.location.reload()
  }
  if (!(registration || window.localStorage.getItem("HAS_RELOADED"))) {
    window.localStorage.setItem("HAS_RELOADED", JSON.stringify(true))
    window.location.reload()
  }
})

fB(console.info)
