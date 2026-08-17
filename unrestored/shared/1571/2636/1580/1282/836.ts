/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：836
 */

var r = require(/* 1086 */"../1681/1086")
var o = require(/* 714 */"../1648/714")
var i = require(/* 246 */"../1782/246/index")("toStringTag")
var a = "Arguments" == o(function () {
  return arguments
}())
module.exports = r ? o : function (e) {
  var t
  var n
  var r
  return undefined === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
    try {
      return e[t]
    } catch (n) {}
  }(t = Object(e), i)) ? n : a ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r
}
