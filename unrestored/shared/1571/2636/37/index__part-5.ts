/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-5
 */

"use strict"

import { F } from "../../../../../src/editor/redux/common/reducer"
import { Ce, Ie } from "./index__part-1"
import { Pe } from "./index__part-2"
import { We, et } from "./index__part-3"
import { rt } from "./index__part-4"
import * as /* [auto-meaningful-name] */Immutable from /* 66 */"immutable"
import * as /* [auto-meaningful-name] */Redux from /* 156 */"redux"
import * as /* [auto-meaningful-name] */Module_162 from /* 162 */"../162"
var it = Immutable.Record({
  cloudDictList: [],
  cloudTableList: [],
  initialRefDictIds: Immutable.Set(),
  initialRefTableIds: Immutable.Set(),
  checkedTimeStamp: new Date().getTime(),
  cloudDictKeysList: Immutable.List([]),
  cloudTableColumnList: Immutable.List([]),
  cloudTableDataList: Immutable.List([])
})()
function at(e, t) {
  return e.setIn(["cloudDictList"], t.payload)
}
function st(e, t) {
  e.setIn(["initialRefDictIds"], []).setIn(["initialRefTableIds"], [])
  return e
}
function ct(e, t) {
  return e.setIn(["cloudTableList"], t.payload)
}
function lt(e, t) {
  var n = Immutable.Set(t.payload)
  return e.setIn(["initialRefDictIds"], n)
}
function ut(e, t) {
  var n = Immutable.Set(t.payload)
  return e.setIn(["initialRefTableIds"], n)
}
function dt(e, t) {
  var n = e.initialRefDictIds.concat(new Set(t.payload))
  return e.setIn(["initialRefDictIds"], n)
}
function pt(e, t) {
  var n = e.initialRefDictIds.filter(function (e) {
    return !t.payload.includes(e)
  })
  return e.setIn(["initialRefDictIds"], n)
}
function ft(e, t) {
  var n = e.initialRefTableIds.concat(new Set(t.payload))
  return e.setIn(["initialRefTableIds"], n)
}
function ht(e, t) {
  var n = e.initialRefTableIds.filter(function (e) {
    return !t.payload.includes(e)
  })
  return e.setIn(["initialRefTableIds"], n)
}
function mt(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$data = t$payload.data
  var i = e.cloudDictKeysList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["cloudDictKeysList", i, "data"], t$payload$data) : e.update("cloudDictKeysList", function (e) {
    return e.push({
      id: t$payload$id,
      data: t$payload$data
    })
  })
}
function gt(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$columns = t$payload.columns
  var i = e.cloudTableList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["cloudTableList", i, "columns"], t$payload$columns) : e
}
function _t(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$columns = t$payload.columns
  var i = e.cloudTableColumnList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["cloudTableColumnList", i, "columns"], t$payload$columns) : e.update("cloudTableColumnList", function (e) {
    return e.push({
      id: t$payload$id,
      columns: t$payload$columns
    })
  })
}
function vt(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var r = e.cloudTableColumnList.findIndex(function (e) {
    return e.id === t$payload
  })
  return r > -1 ? e.deleteIn(["cloudTableColumnList", r]) : e
}
function bt(e, t) {
  return e.setIn(["checkedTimeStamp"], t.payload)
}
function yt(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$data = t$payload.data
  var i = e.cloudTableDataList.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return i > -1 ? e.setIn(["cloudTableDataList", i, "data"], t$payload$data) : e.update("cloudTableDataList", function (e) {
    return e.push({
      id: t$payload$id,
      data: t$payload$data
    })
  })
}
var Et = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : it
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Module_162.s:
      return at(e, t)
    case Module_162.t:
      return ct(e, t)
    case Module_162.m:
      return st(e)
    case Module_162.x:
      return lt(e, t)
    case Module_162.y:
      return ut(e, t)
    case Module_162.a:
      return dt(e, t)
    case Module_162.b:
      return ft(e, t)
    case Module_162.o:
      return pt(e, t)
    case Module_162.p:
      return ht(e, t)
    case Module_162.q:
      return bt(e, t)
    case Module_162.r:
      return mt(e, t)
    case Module_162.w:
      return gt(e, t)
    case Module_162.u:
      return _t(e, t)
    case Module_162.n:
      return vt(e, t)
    case Module_162.v:
      return yt(e, t)
    default:
      return e
  }
}
var Ot = Redux.combineReducers({
  common: F,
  project: Ce,
  block: Ie,
  dataWatch: Pe,
  oTState: We,
  resource: et,
  uiConfig: rt,
  cloudSpace: Et
})
export { Ot }
