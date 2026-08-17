/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3312
 */

"use strict"

var a = require(/* 571 */"../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : i
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case o.OPERATE:
      return (0, r.default)({}, e, {
        count: e.count + 1,
        operation: (0, r.default)({}, e.operation, t.operation)
      })
    default:
      return e
  }
}
var r = a(require(/* 2708 */"../3309/2708"))
var o = require(/* 2750 */"../2750")
var i = {
  count: 0,
  operation: {
    action: "",
    source: ""
  }
}
