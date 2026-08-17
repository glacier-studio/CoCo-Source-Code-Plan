/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1268
 */

var r = require(/* 240 */"../1282/240")
var o = require(/* 231 */"../1282/231")
var i = require(/* 1269 */"../1686/1269")
module.exports = function (e, t) {
  r(e)
  if (o(t) && t.constructor === e) {
    return t
  }
  var n = i.f(e);
  (0, n.resolve)(t)
  return n.promise
}
