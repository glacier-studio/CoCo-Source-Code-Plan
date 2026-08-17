/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1763
 */

"use strict"

var r = require(/* 194 */"./1648/194")
var o = require(/* 257 */"./1754/257/index")
var i = require(/* 949 */"./949/index")
var a = require(/* 246 */"./1782/246/index")("iterator")
var /* [auto-meaningful-name] */r$Uint8Array = r.Uint8Array
var /* [auto-meaningful-name] */i$values = i.values
var /* [auto-meaningful-name] */i$keys = i.keys
var /* [auto-meaningful-name] */i$entries = i.entries
var /* [auto-meaningful-name] */o$aTypedArray = o.aTypedArray
var /* [auto-meaningful-name] */o$exportTypedArrayMethod = o.exportTypedArrayMethod
var f = r$Uint8Array && r$Uint8Array.prototype[a]
var h = !!f && ("values" == f.name || undefined == f.name)
var m = function () {
  return i$values.call(o$aTypedArray(this))
}
o$exportTypedArrayMethod("entries", function () {
  return i$entries.call(o$aTypedArray(this))
})
o$exportTypedArrayMethod("keys", function () {
  return i$keys.call(o$aTypedArray(this))
})
o$exportTypedArrayMethod("values", m, !h)
o$exportTypedArrayMethod(a, m, !h)
