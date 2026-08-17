/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1249
 */

"use strict"

var r
var o
var i
var a = require(/* 168 */"../../1648/168")
var s = require(/* 497 */"../../1705/497")
var c = require(/* 425 */"../../1780/425")
var l = require(/* 334 */"../../1648/334")
var u = require(/* 246 */"../../1782/246/index")
var d = require(/* 533 */"../../1724/533")
var p = u("iterator")
var f = false
if ([].keys) {
  if ("next" in (i = [].keys())) {
    if ((o = s(s(i))) !== Object.prototype) {
      r = o
    }
  } else {
    f = true
  }
}
var h = undefined == r || a(function () {
  var e = {}
  return r[p].call(e) !== e
})
if (h) {
  r = {}
}
if (!(d && !h || l(r, p))) {
  c(r, p, function () {
    return this
  })
}
module.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: f
}
