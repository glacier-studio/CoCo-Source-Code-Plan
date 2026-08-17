/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1139
 */

"use strict"

var r = require(/* 180 */"../../../../../180")
var i = require(/* 204 */"../../../../../204")
var o = require(/* 283 */"../../../../../../../1058/1393/1143/283/index")
var a = require(/* 284 */"../../../../../../../1058/1393/1143/284/index")
var s = require(/* 853 */"../../1140/853")
module.exports = function (e) {
  o(n, e)
  var t = a(n)
  function n(e) {
    var i
    r(this, n);
    (i = t.call(this)).cursor = e
    return i
  }
  i(n, [
    {
      key: "moveNext",
      value: function () {
        var e = this.cursor.moveNext()
        this.current = this.cursor.current
        return e
      }
    }
  ])
  return n
}(s)
