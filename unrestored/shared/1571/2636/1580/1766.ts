/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1766
 */

"use strict"

var r = require(/* 257 */"./1754/257/index")
var /* [auto-meaningful-name] */require_401_$_1754_401$map = require(/* 401 */"./1754/401").map
var i = require(/* 962 */"./1775/962")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray;
(0, r.exportTypedArrayMethod)("map", function (e) {
  return require_401_$_1754_401$map(r$aTypedArray(this), e, arguments.length > 1 ? arguments[1] : undefined, function (e, t) {
    return new (i(e))(t)
  })
})
