/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：988
 */

"use strict"

var r = require(/* 311 */"./311")
var /* [auto-meaningful-name] */r$MathFloor = r.MathFloor
var /* [auto-meaningful-name] */r$NumberIsInteger = r.NumberIsInteger
var /* [auto-meaningful-name] */require_858_$_986_858$validateInteger = require(/* 858 */"./986/858").validateInteger
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_INVALID_ARG_VALUE = require(/* 402 */"./402").codes.ERR_INVALID_ARG_VALUE
var c = 16384
var u = 16
function l(e) {
  return e ? u : c
}
module.exports = {
  getHighWaterMark: function (e, t, n, r) {
    var a = function (e, t, n) {
      return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null
    }(t, r, n)
    if (null != a) {
      if (!r$NumberIsInteger(a) || a < 0) {
        var c = r ? "options.".concat(n) : "options.highWaterMark"
        throw new require_402_$_402$codes$ERR_INVALID_ARG_VALUE(c, a)
      }
      return r$MathFloor(a)
    }
    return l(e.objectMode)
  },
  getDefaultHighWaterMark: l,
  setDefaultHighWaterMark: function (e, t) {
    require_858_$_986_858$validateInteger(t, "value", 0)
    if (e) {
      u = t
    } else {
      c = t
    }
  }
}
