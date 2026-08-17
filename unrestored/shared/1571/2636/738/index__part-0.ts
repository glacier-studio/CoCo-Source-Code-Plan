/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：738__part-0
 */

"use strict"

import /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import /* 16 */"react-redux"
import /* 719 */"../719"
import * as /* [auto-meaningful-name] */Redux from /* 156 */"redux"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Immutable from /* 66 */"immutable"
import * as /* [auto-meaningful-name] */Module_62 from /* 62 */"./62"
import * as /* [auto-meaningful-name] */Module_70 from /* 70 */"./70"
var d = function (e) {
  return {
    type: "SET_ROTATION",
    payload: e
  }
}
var p = function (e) {
  return {
    type: "SET_POSITION",
    payload: e
  }
}
var f = function (e) {
  return {
    type: "SET_ADDITIONAL_ACCELERATION",
    payload: e
  }
}
var h = function (e) {
  return {
    type: "PUSH_EVENT",
    payload: e
  }
}
var m = function (e) {
  return {
    type: "SET_ANGULAR_VELOCITY",
    payload: e
  }
}
var g = function (e) {
  return {
    type: "SET_VISIBLE_PANEL",
    payload: e
  }
}
var _ = function (e) {
  return {
    type: "SET_PHONE_CALL_INFO",
    payload: e
  }
}
var v = {
  x: 0,
  y: 0,
  z: 0
}
var b = new Module_62.O(0, 0, 9.81)
var y = new Module_62.O(0, 50, 0)
var E = 2 * Math.PI / 360
var O = window.localStorage.getItem("LANGUAGE") || navigator.language
var w = function (e) {
  return function (t) {
    if (e) {
      e.postMessage({
        type: "EMULATOR",
        data: t
      }, "*")
    }
  }
}
var C = Immutable.Record({
  language: O,
  acceleration: {
    x: b.x,
    y: b.y,
    z: b.z
  },
  rotation: v,
  additionalAcceleration: v,
  position: v,
  angularVelocity: v,
  magneticField: {
    x: y.x,
    y: y.y,
    z: y.z
  },
  emitEvent: w(null),
  visiblePanel: null,
  phoneCallInfo: {
    dialOutPhoneNumber: "123 4567 8901",
    incomingPhoneNumber: "123 4567 8901",
    callType: "",
    callStatus: Module_70.b.IDEL
  }
})()
var T = function (e) {
  var /* [auto-meaningful-name] */e$rotation = e.rotation
  var /* [auto-meaningful-name] */e$rotation$x = e$rotation.x
  var /* [auto-meaningful-name] */e$rotation$y = e$rotation.y
  var /* [auto-meaningful-name] */e$rotation$z = e$rotation.z
  var /* [auto-meaningful-name] */e$additionalAcceleration = e.additionalAcceleration
  var /* [auto-meaningful-name] */e$additionalAcceleration$x = e$additionalAcceleration.x
  var /* [auto-meaningful-name] */e$additionalAcceleration$y = e$additionalAcceleration.y
  var /* [auto-meaningful-name] */e$additionalAcceleration$z = e$additionalAcceleration.z
  var u = new Module_62.k(-e$rotation$x * E, -e$rotation$y * E, -e$rotation$z * E, "ZYX")
  var d = new Module_62.O(e$additionalAcceleration$x, e$additionalAcceleration$y, e$additionalAcceleration$z).add(b)
  var p = new Module_62.O().copy(y)
  var f = function (e) {
    var t = e.applyEuler(u)
    return {
      x: t.x,
      y: t.y,
      z: t.z
    }
  }
  var h = f(d)
  var m = f(p)
  e.emitEvent({
    accelerometerUpdate: h,
    magnetometerUpdate: m
  })
  return e.set("acceleration", h).set("magneticField", m)
}
var S = function (e) {
  e.emitEvent({
    accelerometerUpdate: e.acceleration,
    magnetometerUpdate: e.magneticField
  })
  return e
}
var A = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : C
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case "SET_EMIT_EVENT":
      return e.set("emitEvent", w(t.payload))
    case "PUSH_EVENT":
      e.emitEvent(t.payload)
      return e
    case "PUSH_ALL_DATA":
      return S(e)
    case "SET_ROTATION":
      return T(e.set("rotation", t.payload))
    case "SET_POSITION":
      return e.set("position", t.payload)
    case "SET_ADDITIONAL_ACCELERATION":
      return T(e.set("additionalAcceleration", t.payload))
    case "SET_MAGNETIC_FIELD":
      return T(e.set("magneticField", t.payload))
    case "SET_ANGULAR_VELOCITY":
      return e.set("angularVelocity", t.payload)
    case "SET_VISIBLE_PANEL":
      return e.set("visiblePanel", t.payload)
    case "SET_PHONE_CALL_INFO":
      return e.set("phoneCallInfo", Module_6.a(Module_6.a({}, e.phoneCallInfo), t.payload))
    default:
      return e
  }
}
var I = Redux.createStore(A)
export { d }
export { p }
export { f }
export { h }
export { m }
export { g }
export { _ }
export { I }
