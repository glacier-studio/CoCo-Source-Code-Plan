/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2309
 */

var FieldImage
var r
var /* [auto-meaningful-name] */require_1378_$_1378_index$parseType
var o
var a
FieldImage = require(/* 2310 */"./2310/index")
r = require(/* 2316 */"./2316")
require_1378_$_1378_index$parseType = require(/* 1378 */"./1378/index").parseType
o = function (e, n, i) {
  if (null == i) {
    i = {}
  }
  if (null == i.explicit) {
    i.explicit = false
  }
  if (null == i.customTypes) {
    i.customTypes = {}
  }
  return r(FieldImage(e, n, i), e, i)
}
a = function (e, t, n) {
  return o(require_1378_$_1378_index$parseType(e), t, n)
}
module.exports = {
  VERSION: "0.3.0",
  parse: a,
  parsedTypeParse: o
}
