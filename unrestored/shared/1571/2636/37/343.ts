/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：343
 */

"use strict"

export { SET_UI_CONFIG as a }
export { o as d }
export { UPDATE_UI_CONFIG as c }
export { a as f }
export { SET_UI_PREVENT_LEAVE_CONFIG as b }
export { c as e }
var /* [auto-meaningful-name] */SET_UI_CONFIG = "SET_UI_CONFIG"
var o = function (e) {
  return {
    payload: e,
    type: SET_UI_CONFIG
  }
}
var /* [auto-meaningful-name] */UPDATE_UI_CONFIG = "UPDATE_UI_CONFIG"
var a = function (e) {
  return {
    payload: e,
    type: UPDATE_UI_CONFIG
  }
}
var /* [auto-meaningful-name] */SET_UI_PREVENT_LEAVE_CONFIG = "SET_UI_PREVENT_LEAVE_CONFIG"
var c = function (e) {
  return {
    payload: e,
    type: SET_UI_PREVENT_LEAVE_CONFIG
  }
}
export default SET_UI_CONFIG
