/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：716
 */

"use strict"

var r = require(/* 632 */"../1581/632")
var o = require(/* 300 */"../1648/300/index")
var i = require(/* 631 */"../1282/631")
module.exports = function (e, t, n) {
  var a = r(t)
  if (a in e) {
    o.f(e, a, i(0, n))
  } else {
    e[a] = n
  }
}
