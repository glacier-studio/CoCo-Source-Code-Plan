/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：833
 */

var r = require(/* 168 */"../1648/168")
var o = require(/* 246 */"../1782/246/index")
var i = require(/* 633 */"../1774/633")
var a = o("species")
module.exports = function (e) {
  return i >= 51 || !r(function () {
    var t = [];
    (t.constructor = {})[a] = function () {
      return {
        foo: 1
      }
    }
    return 1 !== t[e](Boolean).foo
  })
}
