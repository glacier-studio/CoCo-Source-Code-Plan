/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1395
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require(/* 448 */"../../2373/448")
exports.isStackOverflowExeption = function (e) {
  return e instanceof RangeError || e.message === r.STACK_OVERFLOW
}
