/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1257
 */

var r = require(/* 477 */"../../1720/477")
var o = require(/* 256 */"../../1775/256")
module.exports = function (e) {
  if (undefined === e) {
    return 0
  }
  var t = r(e)
  var n = o(t)
  if (t !== n) {
    throw RangeError("Wrong length or index")
  }
  return n
}
