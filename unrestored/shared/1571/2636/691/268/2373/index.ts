/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2373
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require(/* 448 */"./448")
var i = require(/* 359 */"../359")
exports.injectable = function () {
  return function (e) {
    if (Reflect.hasOwnMetadata(i.PARAM_TYPES, e)) {
      throw new Error(r.DUPLICATED_INJECTABLE_DECORATOR)
    }
    var t = Reflect.getMetadata(i.DESIGN_PARAM_TYPES, e) || []
    Reflect.defineMetadata(i.PARAM_TYPES, t, e)
    return e
  }
}
