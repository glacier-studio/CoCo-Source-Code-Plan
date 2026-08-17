/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1751
 */

"use strict"

var r = require(/* 257 */"../1754/257/index")
var o = require(/* 1244 */"./1244")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("copyWithin", function (e, t) {
  return o.call(r$aTypedArray(this), e, t, arguments.length > 2 ? arguments[2] : undefined)
})
