/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1764
 */

"use strict"

var r = require(/* 257 */"./1754/257/index")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray
var /* [auto-meaningful-name] */r$exportTypedArrayMethod = r.exportTypedArrayMethod
var /* [auto-meaningful-name] */$join = [].join
r$exportTypedArrayMethod("join", function (e) {
  return $join.apply(r$aTypedArray(this), arguments)
})
