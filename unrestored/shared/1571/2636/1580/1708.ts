/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1708
 */

var r = require(/* 271 */"./1648/271")
var o = require(/* 300 */"./1648/300/index")
var i = require(/* 957 */"./1709/957")
var a = require(/* 168 */"./1648/168")
if (r && a(function () {
  return "sy" !== Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call({
    dotAll: true,
    sticky: true
  })
})) {
  o.f(RegExp.prototype, "flags", {
    configurable: true,
    get: i
  })
}
