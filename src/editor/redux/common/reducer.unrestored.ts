/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Redux from /* 156 */"redux"
import * as /* [auto-meaningful-name] */Module_489 from /* 489 */"../../../../unrestored/shared/1571/2636/48/489"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */Immutable from /* 66 */"immutable"
import * as /* [auto-meaningful-name] */Actions from /* 2 */"./actions"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Shared_widget_custom_type from /* 78 */"../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_77 from /* 77 */"../../../../unrestored/shared/1571/2636/77"
var p = window.localStorage.getItem("LANGUAGE") || navigator.language
var f = {
  visible: false,
  onClose: undefined,
  onConfirm: undefined,
  title: "",
  content: ""
}
var h = {
  type: Module_18.e.camera,
  visible: false,
  onClose: undefined,
  onConfirm: undefined
}
var m = {
  visible: false,
  onClose: undefined,
  onConfirm: undefined,
  title: "",
  content: "",
  cancelBtnVisible: false,
  confirmBtnVisible: false
}
var g = {
  visible: false,
  onConfirm: undefined,
  content: ""
}
var _ = {
  visible: false,
  onClose: undefined,
  onSelect: undefined,
  autoClose: true,
  value: ""
}
var v = {
  visible: false,
  importFailResults: [],
  fileType: "image"
}
var b = {
  visible: false
}
var y = {
  visible: false,
  selected: Module_18.f.CREATE_PROJECT
}
var E = {
  visible: false,
  grid: {
    id: "",
    name: "",
    header: {},
    data: []
  }
}
var O = {
  visible: false,
  widgetId: ""
}
function w(e) {
  var /* [auto-meaningful-name] */e$blockyToolboxPinned = e.blockyToolboxPinned
  var /* [auto-meaningful-name] */e$stageRulerVisible = e.stageRulerVisible
  localStorage.setItem("userConfig", JSON.stringify({
    blockyToolboxPinned: e$blockyToolboxPinned,
    stageRulerVisible: e$stageRulerVisible
  }))
  return e
}
var C = Immutable.Record(Module_6.a(Module_6.a({
  language: p,
  editAreaUpdatedAt: 0,
  previewAreaUpdatedAt: 0,
  extensionListUpdateAt: 0,
  commonToastInfo: {
    visible: false
  },
  confirmDialogInfo: f,
  permissionDialogInfo: h,
  richTextEditorDialogInfo: g,
  iconLibraryDialog: _,
  userInfo: null,
  userInfoFetchDone: false,
  importFailToastInfo: v,
  stageToast: b,
  stageState: {
    isActorDragging: false
  },
  projectDialog: y,
  gridDialog: E,
  gridStatus: {
    copiedContent: {
      rowId: "",
      columnId: ""
    },
    selectedContent: {
      rowId: "",
      columnId: ""
    },
    editingHeader: "",
    errorHeaders: [],
    animationHeaders: [],
    errorCells: {},
    isCustomWidth: false
  },
  tableDataDialog: E,
  createTableDataDialog: O,
  widgetMallVisible: false,
  isProjectModified: false,
  isProjectFinishedOpen: false,
  lastSavedTime: undefined,
  projectSaveProgressDialog: {
    visible: false,
    progress: 10
  },
  consoleMessages: Immutable.List(),
  consoleHeight: 0,
  saving: false,
  widgetAttributeVisible: false,
  rightSideActiveMenu: undefined,
  signInDialogInfo: {
    visible: false
  },
  stageScale: 1,
  stageWidth: 412,
  stageVisible: true,
  isHoverBlockArea: false,
  collAutoSave: false,
  historyArchiveId: "",
  editPermission: Module_18.c.Edit,
  historyDialogVisible: false,
  myExtensionWidgets: [],
  blockImageDialogInfo: {
    visible: false,
    imgSrc: ""
  },
  releaseInfoDialogVisible: false,
  cloudDBGridDialogInfo: {
    widgetName: "",
    visible: false,
    cloudDBId: "",
    isProd: false,
    callback: function () {}
  },
  cloudDBManagerDialogVisible: false,
  cloudDBPublishDialogInfo: {
    visible: false,
    type: "",
    callback: function () {}
  },
  sliderImageDialogInfo: {
    visible: false,
    widgetId: "",
    direction: Module_77.b.HORIZONTAL,
    handleImageFileId: "",
    handleImageRatio: 1.5,
    handleImageDirection: Module_77.b.HORIZONTAL,
    backgroundImageFileId: "",
    backgroundImageDirection: Module_77.b.HORIZONTAL,
    trackImageFileId: "",
    trackImageDirection: Module_77.b.HORIZONTAL
  },
  switchImageDialogInfo: {
    visible: false,
    widgetId: "",
    imageOpenFileId: "",
    imageCloseFileId: ""
  },
  isOffLine: false,
  templateList: [],
  courseList: [],
  courseDialogVisible: false,
  projectSavePrompt: {
    visible: false,
    openFrom: ""
  }
}, function () {
  var e = localStorage.getItem("userConfig")
  var t = {
    blockyToolboxPinned: false,
    stageRulerVisible: true
  }
  if (e) {
    try {
      var n = JSON.parse(e)
      Object.assign(t, n)
    } catch (r) {}
  }
  return t
}()), {}, {
  floatMiniIcons: {
    fixedIcons: [],
    temporaryIcons: []
  }
}))()
function T(e, t) {
  return e.consoleMessages.push(Immutable.Record(t.payload)())
}
function S(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  return e.setIn(["gridStatus", "copiedContent"], Module_6.a({}, t$payload))
}
function A(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  return e.setIn(["gridStatus", "selectedContent"], Module_6.a({}, t$payload))
}
function I(e, t) {
  var /* [auto-meaningful-name] */t$payload$columnId = t.payload.columnId
  return e.setIn(["gridStatus", "editingHeader"], t$payload$columnId)
}
function j(e, t) {
  var /* [auto-meaningful-name] */t$payload$columnIds = t.payload.columnIds
  return e.setIn(["gridStatus", "errorHeaders"], t$payload$columnIds)
}
function N(e, t) {
  var /* [auto-meaningful-name] */t$payload$errorCells = t.payload.errorCells
  return e.setIn(["gridStatus", "errorCells"], t$payload$errorCells)
}
function R(e, t) {
  var /* [auto-meaningful-name] */t$payload$columnIds = t.payload.columnIds
  return e.setIn(["gridStatus", "animationHeaders"], t$payload$columnIds)
}
function k(e, t) {
  var /* [auto-meaningful-name] */t$payload$widgets = t.payload.widgets
  return e.update("myExtensionWidgets", function (e) {
    return t$payload$widgets.concat(e)
  })
}
function x(e, t) {
  var /* [auto-meaningful-name] */t$payload$widgetTypes = t.payload.widgetTypes
  return e.update("myExtensionWidgets", function (e) {
    return e.filter(function (e) {
      return !t$payload$widgetTypes.includes(Shared_widget_custom_type.c(e.type, true))
    })
  })
}
function D(e, t) {
  var /* [auto-meaningful-name] */t$payload$name = t.payload.name
  return e.floatMiniIcons.temporaryIcons.find(function (e) {
    return e.name === t$payload$name
  }) ? (console.error("float icon name existed!"), e) : e.setIn(["floatMiniIcons", "temporaryIcons"], [].concat(Module_25.a(e.floatMiniIcons.temporaryIcons), [t.payload]))
}
function M(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$icon = t$payload.icon
  var s = e.floatMiniIcons.temporaryIcons.findIndex(function (e) {
    return e.name === t$payload$name
  })
  return s >= 0 ? (e.floatMiniIcons.temporaryIcons.splice(s, 1, Module_6.a(Module_6.a({}, Actions.fh), t$payload$icon)), e.setIn(["floatMiniIcons", "temporaryIcons"], Module_25.a(e.floatMiniIcons.temporaryIcons))) : D(e, {
    type: Actions.d,
    payload: Module_6.a(Module_6.a({}, Actions.fh), t$payload$icon)
  })
}
function L(e, t) {
  var n = e.floatMiniIcons.temporaryIcons.filter(function (e) {
    return e.name !== t.payload
  })
  return e.setIn(["floatMiniIcons", "temporaryIcons"], n)
}
function P(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$visible = t$payload.visible
  var a = e.floatMiniIcons.temporaryIcons.find(function (e) {
    return e.name === t$payload$name
  })
  if (a) {
    a.visible = t$payload$visible
  }
  return e.setIn(["floatMiniIcons", "temporaryIcons"], Module_25.a(e.floatMiniIcons.temporaryIcons))
}
function B(e, t) {
  return e.setIn(["isProjectFinishedOpen"], t.payload)
}
var F = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : C
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Actions.dd:
      return e.set("language", t.payload.language)
    case Actions.Se:
      return e.set("previewAreaUpdatedAt", Date.now())
    case Actions.Qe:
      return e.set("editAreaUpdatedAt", Date.now())
    case Actions.Re:
      return e.set("extensionListUpdateAt", Date.now())
    case Actions.re:
      return e.set("commonToastInfo", Module_6.a({
        visible: true
      }, t.payload))
    case Actions.pc:
      return e.set("commonToastInfo", {
        visible: false
      })
    case Actions.Ec:
      return e.set("confirmDialogInfo", Module_6.a({
        visible: true
      }, t.payload))
    case Actions.Wb:
      return e.set("confirmDialogInfo", m)
    case Actions.Ke:
      return e.set("permissionDialogInfo", t.payload)
    case Actions.Fc:
      return e.set("iconLibraryDialog", Module_6.a({
        visible: true
      }, t.payload))
    case Actions.Yb:
      return e.set("iconLibraryDialog", _)
    case Actions.nd:
      return e.set("userInfoFetchDone", true)
    case Actions.he:
      return e.set("userInfo", t.payload).set("userInfoFetchDone", true)
    case Actions.Ae:
      return e.set("importFailToastInfo", Module_6.a({
        visible: true
      }, t.payload))
    case Actions.xc:
      return e.set("importFailToastInfo", Module_6.a({}, v))
    case Actions.De:
      return e.set("stageToast", {
        visible: true,
        toast: t.payload.toast,
        showIcon: t.payload.showIcon || false
      })
    case Actions.zc:
      return e.set("stageToast", b)
    case Actions.cd:
      return e.setIn(["stageState", "isActorDragging"], t.payload)
    case Actions.Gc:
      return e.set("projectDialog", {
        visible: true,
        selected: t.payload.selected
      })
    case Actions.Zb:
      return e.set("projectDialog", Module_6.a({}, y))
    case Actions.Rd:
      return e.set("isProjectModified", t.payload)
    case Actions.Qd:
      return e.set("lastSavedTime", t.payload)
    case Actions.Vd:
      return e.setIn(["projectSaveProgressDialog", "visible"], t.payload)
    case Actions.Ud:
      return e.setIn(["projectSaveProgressDialog", "progress"], t.payload)
    case Actions.Xd:
      return e.set("saving", t.payload)
    case Actions.n:
      return e.set("consoleMessages", T(e, t))
    case Actions.Tb:
      return e.set("consoleMessages", Immutable.List())
    case Actions.kd:
      return e.set("consoleHeight", t.payload)
    case Actions.bc:
      return e.set("signInDialogInfo", {
        visible: false
      })
    case Actions.Ic:
      return e.set("signInDialogInfo", {
        visible: true,
        onSuccess: t.payload.onSuccess
      })
    case Actions.be:
      return w(e.set("stageRulerVisible", t.payload))
    case Actions.ee:
      return e.set("stageWidth", t.payload)
    case Actions.de:
      return e.set("stageVisible", t.payload)
    case Actions.Ad:
      return e.set("isHoverBlockArea", t.payload)
    case Actions.gd:
      return w(e.set("blockyToolboxPinned", t.payload))
    case Actions.ie:
      return e.set("widgetAttributeVisible", t.payload)
    case Actions.ae:
      return e.set("rightSideActiveMenu", t.payload)
    case Actions.td:
      return S(e, t)
    case Actions.xd:
      return A(e, t)
    case Actions.ud:
      return I(e, t)
    case Actions.wd:
      return j(e, t)
    case Actions.vd:
      return N(e, t)
    case Actions.rd:
      return R(e, t)
    case Actions.sd:
      return e.setIn(["gridStatus", "isCustomWidth"], t.payload)
    case Actions.ce:
      return e.set("stageScale", t.payload)
    case Actions.id:
      return e.set("collAutoSave", t.payload)
    case Actions.yd:
      return e.set("historyArchiveId", t.payload)
    case Actions.Od:
      return e.set("editPermission", t.payload)
    case Actions.ze:
      return e.set("historyDialogVisible", t.payload)
    case Actions.ye:
      return e.set("gridDialog", Module_6.a({
        visible: true
      }, t.payload))
    case Actions.wc:
      return e.set("gridDialog", Module_6.a({}, E))
    case Actions.Ee:
      return e.set("tableDataDialog", Module_6.a({
        visible: true
      }, t.payload))
    case Actions.Ac:
      return e.set("tableDataDialog", Module_6.a({}, E))
    case Actions.te:
      return e.set("createTableDataDialog", Module_6.a({
        visible: true
      }, t.payload))
    case Actions.rc:
      return e.set("createTableDataDialog", Module_6.a({}, O))
    case Actions.je:
      return e.set("widgetMallVisible", t.payload)
    case Actions.Wc:
      return e.set("myExtensionWidgets", t.payload.widgets)
    case Actions.g:
      return k(e, t)
    case Actions.Oc:
      return x(e, t)
    case Actions.hd:
      return e.set("blockImageDialogInfo", {
        visible: t.payload.visible,
        imgSrc: t.payload.imgSrc
      })
    case Actions.Be:
      return e.set("releaseInfoDialogVisible", t.payload)
    case Actions.ne:
      return e.set("cloudDBGridDialogInfo", {
        widgetName: t.payload.widgetName,
        visible: t.payload.visible,
        cloudDBId: t.payload.cloudDBId,
        isProd: t.payload.isProd,
        callback: t.payload.callback
      })
    case Actions.oe:
      return e.set("cloudDBManagerDialogVisible", t.payload)
    case Actions.pe:
      return e.set("cloudDBPublishDialogInfo", {
        visible: t.payload.visible,
        type: t.payload.type,
        callback: t.payload.callback
      })
    case Actions.Bd:
      return e.set("isOffLine", t.payload)
    case Actions.Me:
      return e.set("sliderImageDialogInfo", Module_6.a({}, t.payload))
    case Actions.ac:
      return e.set("richTextEditorDialogInfo", g)
    case Actions.Hc:
      return e.set("richTextEditorDialogInfo", Module_6.a({
        visible: true
      }, t.payload))
    case Actions.Ne:
      return e.set("switchImageDialogInfo", Module_6.a({}, t.payload))
    case Actions.ge:
      return e.set("templateList", t.payload)
    case Actions.md:
      return e.set("courseList", t.payload)
    case Actions.ld:
      return e.set("courseDialogVisible", t.payload)
    case Actions.Wd:
      return e.set("projectSavePrompt", t.payload)
    case Actions.d:
      return D(e, t)
    case Actions.Mc:
      return L(e, t)
    case Actions.Uc:
      return M(e, t)
    case Actions.od:
      return P(e, t)
    case Actions.Sd:
      return B(e, t)
    default:
      return e
  }
}
export { F }
