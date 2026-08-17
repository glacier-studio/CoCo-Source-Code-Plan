/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2618
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.createWoodIframeApi = function (e, t) {
  return (0, o.createIframeApi)(a, e, t)
}
exports.createWoodParentApi = function (e, t) {
  return (0, o.createIframeApi)(s, e, t)
}
exports.getWoodIframeUrl = function (e) {
  return "".concat((0, i.getServiceOrigin)(e, "lunar-turtle.codemao.cn"), "?sidebar=true")
}
var r = require(/* 772 */"./772")
var o = require(/* 773 */"./773/index")
var i = require(/* 885 */"./2620/885")
var a = new r.ApiSpec("wood", {
  setCurrentWoodProjectById: new r.MethodType(),
  setCurrentWoodProjectByUrl: new r.MethodType(),
  saveCurrentWoodProject: new r.MethodType(),
  checkIfCurrentWoodProjectEmpty: new r.MethodType(),
  checkIfCurrentWoodProjectChanged: new r.MethodType(),
  checkIfCurrentWoodProjectChangedByUrl: new r.MethodType(),
  clearEditorMarkLine: new r.MethodType(),
  resetEditorStatus: new r.MethodType(),
  setVirtualKeyboardPresetWord: new r.MethodType(),
  setRegExpConfig: new r.MethodType(),
  getRegExpMatchResult: new r.MethodType(),
  markEditorRegExpLine: new r.MethodType(),
  setCourseReportInfo: new r.MethodType(),
  showSettingsDialog: new r.MethodType(),
  hideSettingsDialog: new r.MethodType(),
  setSideBarButtons: new r.MethodType(),
  getSideBarButtonRect: new r.MethodType(),
  setSideBarWidth: new r.MethodType(),
  getSideBarWidth: new r.MethodType(),
  setWxViewParameter: new r.MethodType()
})
var s = new r.ApiSpec(a.namespace, {
  onEvent: new r.MethodType()
})
