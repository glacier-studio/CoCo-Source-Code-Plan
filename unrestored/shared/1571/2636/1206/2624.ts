/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2624
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.createCodemaoLoginIframeApi = function (e, t) {
  return (0, o.createIframeApi)(a, e, t)
}
exports.createCodemaoLoginParentApi = function (e, t) {
  return (0, o.createIframeApi)(s, e, t)
}
exports.getCodemaoLoginIframeUrl = function (e) {
  var t = new URLSearchParams()
  if (undefined !== e.onlyLogin) {
    t.set("onlyLogin", String(e.onlyLogin))
  }
  if (undefined !== e.language) {
    t.set("language", e.language)
  }
  if (undefined !== e.disableThirdParty) {
    t.set("disableThirdParty", String(e.disableThirdParty))
  }
  if (undefined !== e.ageLimit) {
    t.set("ageLimit", String(e.ageLimit))
  }
  if (undefined !== e.pageView) {
    t.set("pageView", e.pageView)
  }
  if (undefined !== e.headImg && e.headImg.startsWith("http")) {
    t.set("headImg", e.headImg)
  }
  if (undefined !== e.theme) {
    t.set("theme", e.theme)
  }
  if (undefined !== e.env) {
    t.set("env", e.env)
  }
  if (undefined !== e.pid) {
    t.set("pid", e.pid)
  }
  if (undefined !== e.productCode) {
    t.set("productCode", e.productCode)
  }
  if (undefined !== e.platform) {
    t.set("platform", e.platform)
  }
  if (e && Array.isArray(e.params)) {
    e.params.forEach(function (e) {
      var /* [auto-meaningful-name] */e$type = e.type
      var /* [auto-meaningful-name] */e$value = e.value
      if (!t.has(e$type)) {
        t.set(e$type, e$value)
      }
    })
  }
  var n = t.toString()
  var r = n ? "?".concat(n) : ""
  return (0, i.getServiceOrigin)("development" === e.env ? "dev" : e.env, "shequ.codemao.cn/codemao_login".concat(r))
}
var r = require(/* 772 */"./772")
var o = require(/* 773 */"./773/index")
var i = require(/* 885 */"./2620/885")
var a = new r.ApiSpec("codemao-login", {})
var s = new r.ApiSpec(a.namespace, {
  onEvent: new r.MethodType()
})
