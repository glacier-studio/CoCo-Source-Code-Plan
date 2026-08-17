/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：689
 */

"use strict"

var r = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
exports.a = function (e) {
  return "string" === typeof e && r.test(e)
}
