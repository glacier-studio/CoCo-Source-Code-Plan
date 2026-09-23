/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：125
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.lazy_inject = exports.get_instance = exports.BINDING = undefined
var r = require(/* 646 */"./di_symbols")
Object.defineProperty(exports, "BINDING", {
  enumerable: true,
  get: function () {
    return r.BINDING
  }
})
var i = require(/* 644 */"./container")
Object.defineProperty(exports, "get_instance", {
  enumerable: true,
  get: function () {
    return i.get_instance
  }
})
Object.defineProperty(exports, "lazy_inject", {
  enumerable: true,
  get: function () {
    return i.lazy_inject
  }
})
