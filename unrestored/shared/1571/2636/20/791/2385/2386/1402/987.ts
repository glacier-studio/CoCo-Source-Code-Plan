/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：987
 */

"use strict"

var r
var /* [auto-meaningful-name] */require_311_$_311$SymbolDispose = require(/* 311 */"./311").SymbolDispose
var o = require(/* 402 */"./402")
var /* [auto-meaningful-name] */o$AbortError = o.AbortError
var /* [auto-meaningful-name] */o$codes = o.codes
var c = require(/* 583 */"./583")
var /* [auto-meaningful-name] */c$isNodeStream = c.isNodeStream
var /* [auto-meaningful-name] */c$isWebStream = c.isWebStream
var /* [auto-meaningful-name] */c$kControllerErrorFunction = c.kControllerErrorFunction
var d = require(/* 650 */"./650")
var /* [auto-meaningful-name] */o$codes$ERR_INVALID_ARG_TYPE = o$codes.ERR_INVALID_ARG_TYPE
module.exports.addAbortSignal = function (t, n) {
  (function (e, t) {
    if ("object" !== typeof e || !("aborted" in e)) {
      throw new o$codes$ERR_INVALID_ARG_TYPE(t, "AbortSignal", e)
    }
  })(t, "signal")
  if (!c$isNodeStream(n) && !c$isWebStream(n)) {
    throw new o$codes$ERR_INVALID_ARG_TYPE("stream", ["ReadableStream", "WritableStream", "Stream"], n)
  }
  return module.exports.addAbortSignalNoValidate(t, n)
}
module.exports.addAbortSignalNoValidate = function (e, t) {
  if ("object" !== typeof e || !("aborted" in e)) {
    return t
  }
  var o = c$isNodeStream(t) ? function () {
    t.destroy(new o$AbortError(undefined, {
      cause: e.reason
    }))
  } : function () {
    t[c$kControllerErrorFunction](new o$AbortError(undefined, {
      cause: e.reason
    }))
  }
  if (e.aborted) {
    o()
  } else {
    var s = (r = r || require(/* 427 */"./427/index").addAbortListener)(e, o)
    d(t, s[require_311_$_311$SymbolDispose])
  }
  return t
}
