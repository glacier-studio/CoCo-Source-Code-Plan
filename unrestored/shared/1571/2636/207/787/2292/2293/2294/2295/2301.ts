/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2301
 */

"use strict"

var r = require(/* 180 */"../../../../180")
var i = require(/* 204 */"../../../../204")
var o = require(/* 712 */"../../../../../../1058/1393/1143/712/index")
var a = require(/* 532 */"../../../../../../1058/1393/1143/532")
var s = require(/* 283 */"../../../../../../1058/1393/1143/283/index")
var c = require(/* 284 */"../../../../../../1058/1393/1143/284/index")
var u = require(/* 1139 */"./2300/1139")
module.exports = function (e) {
  s(n, e)
  var t = c(n)
  function n(e, i) {
    var o
    r(this, n);
    (o = t.call(this, e)).count = i
    return o
  }
  i(n, [
    {
      key: "moveNext",
      value: function () {
        for (; this.count > 0;) {
          this.count -= 1
          if (!o(a(n.prototype), "moveNext", this).call(this)) {
            return false
          }
        }
        return o(a(n.prototype), "moveNext", this).call(this)
      }
    }
  ])
  return n
}(u)
