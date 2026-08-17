/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：949
 */

"use strict"

var r = require(/* 441 */"../1718/441")
var o = require(/* 637 */"../1598/637")
var i = require(/* 834 */"./834")
var a = require(/* 426 */"../1282/426")
var s = require(/* 1087 */"../1274/1087")
var /* [auto-meaningful-name] */a$set = a.set
var l = a.getterFor("Array Iterator")
module.exports = s(Array, "Array", function (e, t) {
  a$set(this, {
    type: "Array Iterator",
    target: r(e),
    index: 0,
    kind: t
  })
}, function () {
  var e = l(this)
  var /* [auto-meaningful-name] */e$target = e.target
  var /* [auto-meaningful-name] */e$kind = e.kind
  var r = e.index++
  return !e$target || r >= e$target.length ? (e.target = undefined, {
    value: undefined,
    done: true
  }) : "keys" == e$kind ? {
    value: r,
    done: false
  } : "values" == e$kind ? {
    value: e$target[r],
    done: false
  } : {
    value: [r, e$target[r]],
    done: false
  }
}, "values")
i.Arguments = i.Array
o("keys")
o("values")
o("entries")
