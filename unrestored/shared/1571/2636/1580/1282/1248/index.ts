/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1248
 */

"use strict"

var /* [auto-meaningful-name] */require_1249_$_1249$IteratorPrototype = require(/* 1249 */"./1249").IteratorPrototype
var o = require(/* 577 */"../../1648/577")
var i = require(/* 631 */"../631")
var a = require(/* 534 */"../534")
var s = require(/* 834 */"../../949/834")
var c = function () {
  return this
}
module.exports = function (e, t, n) {
  var l = t + " Iterator"
  e.prototype = o(require_1249_$_1249$IteratorPrototype, {
    next: i(1, n)
  })
  a(e, l, false, true)
  s[l] = c
  return e
}
