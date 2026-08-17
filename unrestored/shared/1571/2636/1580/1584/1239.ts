/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1239
 */

var r = require(/* 334 */"../1648/334")
var o = require(/* 1080 */"../1703/1080")
var i = require(/* 386 */"../1648/386")
var a = require(/* 300 */"../1648/300/index")
module.exports = function (e, t) {
  for (var n = o(t), s = a.f, c = i.f, l = 0; l < n.length; l++) {
    var u = n[l]
    if (!r(e, u)) {
      s(e, u, c(t, u))
    }
  }
}
