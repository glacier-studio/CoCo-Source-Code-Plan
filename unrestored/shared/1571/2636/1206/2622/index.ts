/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2622
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.checkIfSuccess = function (e) {
  return e.status === a.EStatus.Success
}
exports.createWood3IframeApi = function (e, t) {
  return (0, o.createIframeApi)(s, e, t)
}
exports.createWood3ParentApi = function (e, t) {
  return (0, o.createIframeApi)(c, e, t)
}
exports.getWood3CppIframeUrl = function (e) {
  return "".concat((0, i.getServiceOrigin)(e, "turtle-tool.codemao.cn"), "/cpp")
}
exports.getNctWood3CppIframeUrl = function (e) {
  return "".concat((0, i.getServiceOrigin)(e, "nct-turtle-tool.codemao.cn"), "/cpp")
}
exports.getWood3TeacherCppIframeUrl = function (e) {
  return "".concat((0, i.getServiceOrigin)(e, "turtle-tool.codemao.cn"), "/teacher/cpp")
}
exports.getWood3PlayerUrl = function (e, t) {
  return "".concat((0, i.getServiceOrigin)(e, "turtle-tool.codemao.cn"), "/player/").concat(t)
}
exports.getWood3CodelabCppIframeUrl = function (e) {
  return "".concat((0, i.getServiceOrigin)(e, "turtle-plus.codemao.cn"), "/codelab/cpp")
}
exports.getWood3CodelabTeacherCppIframeUrl = function (e) {
  return "".concat((0, i.getServiceOrigin)(e, "turtle-plus.codemao.cn"), "/teacher/cpp")
}
exports.getWood3ViewerUrl = function (e, t, n, r) {
  var o = []
  if (undefined !== t) {
    o.push("work_id=".concat(t))
  }
  if (undefined !== n) {
    o.push("work_url=".concat(n))
  }
  if (undefined !== r) {
    o.push("work_name=".concat(r))
  }
  return "".concat((0, i.getServiceOrigin)(e, "turtle-tool.codemao.cn"), "/viewer?action=load_work&").concat(o.join("&"))
}
var r = require(/* 772 */"../772")
var o = require(/* 773 */"../773/index")
var i = require(/* 885 */"../2620/885")
var a = require(/* 2623 */"./2623")
var s = new r.ApiSpec("wood3", {
  configure: new r.MethodType(),
  loadWork: new r.MethodType(),
  saveWork: new r.MethodType(),
  shareWork: new r.MethodType(),
  startWork: new r.MethodType(),
  stopWork: new r.MethodType(),
  getWorkUrl: new r.MethodType(),
  getCurrentTextFileContent: new r.MethodType(),
  setCurrentTextFileContent: new r.MethodType(),
  downloadCurrentTextFile: new r.MethodType(),
  executeRegExp: new r.MethodType(),
  getRegExpConfigJson: new r.MethodType(),
  setCourseInfo: new r.MethodType(),
  setAuthToken: new r.MethodType(),
  setQuestionInfo: new r.MethodType(),
  generateWorkUrlFromFileContent: new r.MethodType(),
  checkIsValidWorkUrl: new r.MethodType(),
  runOJMultiCases: new r.MethodType(),
  resetEditorStatus: new r.MethodType(),
  getAiMatchTimeLimit: new r.MethodType(),
  checkIfWorkChanged: new r.MethodType(),
  checkIfRegExpChanged: new r.MethodType(),
  onMessage: new r.MethodType()
})
var c = new r.ApiSpec(s.namespace, {
  onEvent: new r.MethodType(),
  getClipboardContent: new r.MethodType()
})
