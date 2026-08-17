/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1234
 */

var r = require(/* 231 */"../../1282/231")
var o = require(/* 757 */"../757")
var i = require(/* 1236 */"./1236")
var a = require(/* 246 */"../../1782/246/index")("toPrimitive")
module.exports = function (e, t) {
  if (!r(e) || o(e)) {
    return e
  }
  var n
  var s = e[a]
  if (undefined !== s) {
    if (undefined === t) {
      t = "default"
    }
    n = s.call(e, t)
    if (!r(n) || o(n)) {
      return n
    }
    throw TypeError("Can't convert object to primitive value")
  }
  if (undefined === t) {
    t = "number"
  }
  return i(e, t)
}
