/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2490
 */

var r = require(/* 995 */"../995/index")
var i = require(/* 1177 */"./1177/index")
var o = require(/* 1178 */"./1178/index")
module.exports = function (e, t) {
  var /* [auto-meaningful-name] */this$__data__ = this.__data__
  if (this$__data__ instanceof r) {
    var /* [auto-meaningful-name] */this$__data__$__data__ = this$__data__.__data__
    if (!i || this$__data__$__data__.length < 199) {
      this$__data__$__data__.push([e, t])
      this.size = ++this$__data__.size
      return this
    }
    this$__data__ = this.__data__ = new o(this$__data__$__data__)
  }
  this$__data__.set(e, t)
  this.size = this$__data__.size
  return this
}
