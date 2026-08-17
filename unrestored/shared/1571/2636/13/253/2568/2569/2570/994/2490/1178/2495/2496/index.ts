/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2496
 */

var r = require(/* 2497 */"./2497")
var i = require(/* 2498 */"./2498")
var o = require(/* 2499 */"./2499")
var a = require(/* 2500 */"./2500")
var s = require(/* 2501 */"./2501/index")
function c(e) {
  var t = -1
  var n = null == e ? 0 : e.length
  for (this.clear(); ++t < n;) {
    var r = e[t]
    this.set(r[0], r[1])
  }
}
c.prototype.clear = r
c.prototype.delete = i
c.prototype.get = o
c.prototype.has = a
c.prototype.set = s
module.exports = c
