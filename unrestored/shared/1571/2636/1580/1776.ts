/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1776
 */

"use strict"

var r = require(/* 194 */"./1648/194")
var o = require(/* 257 */"./1754/257/index")
var i = require(/* 168 */"./1648/168")
var /* [auto-meaningful-name] */r$Int8Array = r.Int8Array
var /* [auto-meaningful-name] */o$aTypedArray = o.aTypedArray
var /* [auto-meaningful-name] */o$exportTypedArrayMethod = o.exportTypedArrayMethod
var /* [auto-meaningful-name] */$toLocaleString = [].toLocaleString
var /* [auto-meaningful-name] */$slice = [].slice
var d = !!r$Int8Array && i(function () {
  $toLocaleString.call(new r$Int8Array(1))
})
o$exportTypedArrayMethod("toLocaleString", function () {
  return $toLocaleString.apply(d ? $slice.call(o$aTypedArray(this)) : o$aTypedArray(this), arguments)
}, i(function () {
  return [1, 2].toLocaleString() != new r$Int8Array([1, 2]).toLocaleString()
}) || !i(function () {
  r$Int8Array.prototype.toLocaleString.call([1, 2])
}))
