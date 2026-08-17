/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1772
 */

"use strict"

var r = require(/* 257 */"./1754/257/index")
var o = require(/* 962 */"./1775/962")
var i = require(/* 168 */"./1648/168")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray
var /* [auto-meaningful-name] */r$exportTypedArrayMethod = r.exportTypedArrayMethod
var /* [auto-meaningful-name] */$slice = [].slice
r$exportTypedArrayMethod("slice", function (e, t) {
  for (var n = $slice.call(r$aTypedArray(this), e, t), r = o(this), i = 0, /* [auto-meaningful-name] */n$length = n.length, l = new r(n$length); n$length > i;) {
    l[i] = n[i++]
  }
  return l
}, i(function () {
  new Int8Array(1).slice()
}))
