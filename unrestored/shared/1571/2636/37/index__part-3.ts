/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../53"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Immutable from /* 66 */"immutable"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Module_100 from /* 100 */"../100"
var Fe = Immutable.Record({
  editorInviteUrl: "",
  readOnlyInviteUrl: "",
  cooperationUserList: Immutable.List([]),
  onlineCooperationUserList: Immutable.List([]),
  userFocusOTInfoList: Immutable.List([]),
  onlineCooperationUserColorRecord: Immutable.Record({})(),
  isAuthor: true,
  collWorkId: null
})()
function Ge(e, t) {
  t.payload.list.sort(function (e) {
    return 0 - Number(e.is_author)
  })
  return e.set("cooperationUserList", Immutable.List(t.payload.list))
}
var We = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Fe
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Module_100.h:
      return Ge(e, t)
    case Module_100.j:
      return e.set("onlineCooperationUserList", Immutable.List(t.payload.list))
    case Module_100.e:
      return e.set("editorInviteUrl", t.payload.url)
    case Module_100.g:
      return e.set("readOnlyInviteUrl", t.payload.url)
    case Module_100.f:
      return e.set("isAuthor", t.payload.isAuthor)
    case Module_100.d:
      return e.set("collWorkId", t.payload.id)
    case Module_100.k:
      return e.set("userFocusOTInfoList", t.payload.list)
    case Module_100.i:
      return e.set("onlineCooperationUserColorRecord", Immutable.Record(t.payload.colors)())
    case Module_100.c:
      return Fe
    default:
      return e
  }
}
var Ue = {
  visible: false,
  multiple: false,
  mode: require(/* 68 */"../68").c.ResourceLibrary,
  sidebarType: undefined,
  setTab: undefined
}
var He = Immutable.Record({
  resourceLibraryDialogInfo: Ue,
  resourceLibraryDialogVisible: false,
  resourceLibraryUpdateAt: 0,
  imageFileList: Immutable.List([]),
  iconFileList: Immutable.List([]),
  soundFileList: Immutable.List([]),
  fontFileList: Immutable.List(Module_53.a)
})()
function Ve(e, t) {
  return e.update("imageFileList", function (e) {
    return e.splice(0, 0, t.payload.imageFile)
  })
}
function ze(e, t) {
  var /* [auto-meaningful-name] */t$payload$id = t.payload.id
  var r = e.imageFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return r > -1 ? e.update("imageFileList", function (e) {
    return e.delete(r)
  }) : e
}
function Ye(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$soundFiles = t$payload.soundFiles
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  if (undefined !== t$payload$index) {
    return e.update("soundFileList", function (e) {
      return e.splice(t$payload$index, 0, t$payload$soundFiles[0])
    })
  }
  var i = e
  t$payload$soundFiles.forEach(function (e) {
    i = i.update("soundFileList", function (t) {
      return t.push(e)
    })
  })
  return i
}
function Ke(e, t) {
  var /* [auto-meaningful-name] */t$payload$id = t.payload.id
  var r = e.soundFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return r > -1 ? e.update("soundFileList", function (e) {
    return e.delete(r)
  }) : e
}
function qe(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$cdnUrl = t$payload.cdnUrl
  var i = e.soundFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["soundFileList", i, "cdnUrl"], t$payload$cdnUrl) : e
}
function Xe(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var i = e.soundFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["soundFileList", i, "name"], t$payload$name) : e
}
function Qe(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$iconFiles = t$payload.iconFiles
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  var i = e
  return undefined !== t$payload$index ? e.update("iconFileList", function (e) {
    return e.splice(t$payload$index, 0, t$payload$iconFiles[0])
  }) : (t$payload$iconFiles.forEach(function (e) {
    i = i.update("iconFileList", function (t) {
      return t.push(e)
    })
  }), i)
}
function Ze(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$cdnUrl = t$payload.cdnUrl
  var i = e.iconFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["iconFileList", i, "cdnUrl"], t$payload$cdnUrl) : e
}
function Je(e, t) {
  var /* [auto-meaningful-name] */t$payload$id = t.payload.id
  var r = e.iconFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return r > -1 ? e.update("iconFileList", function (e) {
    return e.delete(r)
  }) : e
}
function $e(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var i = e.iconFileList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["iconFileList", i, "name"], t$payload$name) : e
}
var et = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : He
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Src_editor_redux_common_actions.Ce:
      return e.set("resourceLibraryDialogInfo", Module_6.a({
        visible: true
      }, t.payload))
    case Src_editor_redux_common_actions.yc:
      return e.set("resourceLibraryDialogInfo", Module_6.a({}, Ue))
    case Src_editor_redux_common_actions.Le:
      return e.set("resourceLibraryDialogVisible", t.payload.visible)
    case Src_editor_redux_common_actions.Xe:
      return e.set("resourceLibraryUpdateAt", Date.now())
    case Src_editor_redux_common_actions.f:
      return Ve(e, t)
    case Src_editor_redux_common_actions.hc:
      return ze(e, t)
    case Src_editor_redux_common_actions.Zc:
      return e.set("soundFileList", Immutable.List(t.payload.soundFileList))
    case Src_editor_redux_common_actions.m:
      return Ye(e, t)
    case Src_editor_redux_common_actions.Sb:
      return qe(e, t)
    case Src_editor_redux_common_actions.Rc:
      return Ke(e, t)
    case Src_editor_redux_common_actions.Tc:
      return Xe(e, t)
    case Src_editor_redux_common_actions.e:
      return Qe(e, t)
    case Src_editor_redux_common_actions.Qb:
      return Ze(e, t)
    case Src_editor_redux_common_actions.Nc:
      return Je(e, t)
    case Src_editor_redux_common_actions.Vc:
      return e.set("iconFileList", Immutable.List(t.payload.iconFileList))
    case Src_editor_redux_common_actions.Sc:
      return $e(e, t)
    default:
      return e
  }
}
export { We }
export { et }
