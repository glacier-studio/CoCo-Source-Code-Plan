/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2620
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.createNekoIframeApi = function (e, t) {
  return (0, o.createIframeApi)(s, e, t)
}
exports.createNekoParentApi = function (e, t) {
  return (0, o.createIframeApi)(c, e, t)
}
exports.getNekoIframeUrl = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : a.EKnType.KN
  var n = arguments.length > 2 ? arguments[2] : undefined
  var r = ""
  if (n) {
    n.forEach(function (e, t) {
      var /* [auto-meaningful-name] */e$type = e.type
      var /* [auto-meaningful-name] */e$value = e.value
      r += 0 === t ? "?" : "&"
      r += "".concat(e$type, "=").concat(e$value)
    })
  }
  return (0, i.getServiceOrigin)(e, "".concat(t, ".codemao.cn/editor").concat(r))
}
var r = require(/* 772 */"../772")
var o = require(/* 773 */"../773/index")
var i = require(/* 885 */"./885")
var a = require(/* 2621 */"./2621")
var s = new r.ApiSpec("neko", {
  loadWork: new r.MethodType(),
  saveWork: new r.MethodType(),
  setConfigurations: new r.MethodType(),
  setUserData: new r.MethodType(),
  setWxViewParameter: new r.MethodType(),
  setVisualViewport: new r.MethodType(),
  setStageState: new r.MethodType(),
  checkHasBlockType: new r.MethodType(),
  bcmCompare: new r.MethodType(),
  blocksCategoryType: new r.MethodType(),
  highLightBlocks: new r.MethodType(),
  cancelHighLightBlocks: new r.MethodType(),
  workspaceJsonContainText: new r.MethodType(),
  getBlockCount: new r.MethodType(),
  openHistoryBackupDialog: new r.MethodType(),
  getBcmChangeState: new r.MethodType(),
  getTargetIframe: new r.MethodType(),
  runnerStage: new r.MethodType(),
  selectEntity: new r.MethodType(),
  changeTheatre: new r.MethodType(),
  bcmRuleCompare: new r.MethodType(),
  loadRuleSdk: new r.MethodType(),
  showBackPackPage: new r.MethodType(),
  hideBackPackPage: new r.MethodType(),
  startGuide: new r.MethodType(),
  closeGuide: new r.MethodType(),
  getGuidanceFinished: new r.MethodType(),
  getCurrentGuidanceStep: new r.MethodType(),
  playGuideBgm: new r.MethodType(),
  stopGuideBgm: new r.MethodType()
})
var c = new r.ApiSpec(s.namespace, {
  onEvent: new r.MethodType()
})
