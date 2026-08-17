/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：15__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_454 from /* 454 */"../454/index"
function j() {
  var /* [auto-meaningful-name] */navigator$userAgent = navigator.userAgent
  return !!["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"].find(function (t) {
    return navigator$userAgent.includes(t)
  })
}
function N() {
  return navigator.userAgent.includes("Chrome")
}
function R() {
  var e = navigator.userAgent.indexOf("Chrome") > -1
  return navigator.userAgent.indexOf("Safari") > -1 && !e
}
export { j }
export { N }
export { R }
