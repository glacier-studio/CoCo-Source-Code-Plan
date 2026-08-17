/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1770
 */

"use strict"

var r = require(/* 257 */"./1754/257/index")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray
var /* [auto-meaningful-name] */r$exportTypedArrayMethod = r.exportTypedArrayMethod
var /* [auto-meaningful-name] */Math$floor = Math.floor
r$exportTypedArrayMethod("reverse", function () {
  for (var e, /* [auto-meaningful-name] */r$aTypedArrayThis$length = r$aTypedArray(this).length, n = Math$floor(r$aTypedArrayThis$length / 2), r = 0; r < n;) {
    e = this[r]
    this[r++] = this[--r$aTypedArrayThis$length]
    this[r$aTypedArrayThis$length] = e
  }
  return this
})
