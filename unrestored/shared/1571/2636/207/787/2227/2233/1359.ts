/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1359
 */

"use strict"

var r = require(/* 283 */"../../../../1058/1393/1143/283/index")
var i = require(/* 284 */"../../../../1058/1393/1143/284/index")
var o = require(/* 180 */"../../180")
var a = require(/* 978 */"../978")
var s = function e(t, n, r, i, a, s) {
  o(this, e)
  this.type = t
  this.name = n
  this.node = r
  this.parent = i
  this.index = a
  this.kind = s
}
var c = function (e) {
  r(n, e)
  var t = i(n)
  function n(e, r, i, s) {
    var c
    o(this, n);
    (c = t.call(this, a.Parameter, e, r, null, i, null)).rest = s
    return c
  }
  return n
}(s)
module.exports = {
  ParameterDefinition: c,
  Definition: s
}
