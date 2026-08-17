/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1583
 */

var r = require(/* 231 */"../../1282/231")
var o = require(/* 830 */"../../1581/830")
var i = require(/* 246 */"../../1782/246/index")("species")
module.exports = function (e) {
  var t
  if (o(e)) {
    if ("function" != typeof (t = e.constructor) || t !== Array && !o(t.prototype)) {
      if (r(t) && null === (t = t[i])) {
        t = undefined
      }
    } else {
      t = undefined
    }
  }
  return undefined === t ? Array : t
}
