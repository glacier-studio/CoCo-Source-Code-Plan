/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：761
 */

var r = require(/* 424 */"../../1720/424")
var o = require(/* 310 */"../../1282/310")
var i = "[" + require(/* 954 */"./954") + "]"
var a = RegExp("^" + i + i + "*")
var s = RegExp(i + i + "*$")
var c = function (e) {
  return function (t) {
    var n = o(r(t))
    if (1 & e) {
      n = n.replace(a, "")
    }
    if (2 & e) {
      n = n.replace(s, "")
    }
    return n
  }
}
module.exports = {
  start: c(1),
  end: c(2),
  trim: c(3)
}
