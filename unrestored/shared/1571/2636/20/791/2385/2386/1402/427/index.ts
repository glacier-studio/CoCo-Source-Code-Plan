/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：427
 */

"use strict"

var r = require(/* 819 */"../../../../../../207/787/819")
var i = require(/* 1 */"regenerator-runtime")
var o = require(/* 449 */"../../../../449")
var a = require(/* 333 */"../333/index")
var s = require(/* 1403 */"./1403")
var /* [auto-meaningful-name] */s$format = s.format
var /* [auto-meaningful-name] */s$inspect = s.inspect
var /* [auto-meaningful-name] */require_402_$$_402$codes$ERR_INVALID_ARG_TYPE = require(/* 402 */"../402").codes.ERR_INVALID_ARG_TYPE
var f = require(/* 311 */"../311")
var /* [auto-meaningful-name] */f$kResistStopPropagation = f.kResistStopPropagation
var /* [auto-meaningful-name] */f$AggregateError = f.AggregateError
var /* [auto-meaningful-name] */f$SymbolDispose = f.SymbolDispose
var _ = globalThis.AbortSignal || require(/* 857 */"../1159/857").AbortSignal
var A = globalThis.AbortController || require(/* 857 */"../1159/857").AbortController
var /* [auto-meaningful-name] */Object$getPrototypeOfOI$markFunctionEReturnI$wrapFunctionEForSwitchE$prevE$nextCase0CaseEndReturnE$stopE$constructor = Object.getPrototypeOf(o(i.mark(function e() {
  return i.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
        case "end":
          return e.stop()
      }
    }
  }, e)
}))).constructor
var v = globalThis.Blob || a.Blob
var m = "undefined" !== typeof v ? function (e) {
  return e instanceof v
} : function (e) {
  return false
}
var y = function (e, t) {
  if (undefined !== e && (null === e || "object" !== typeof e || !("aborted" in e))) {
    throw new require_402_$$_402$codes$ERR_INVALID_ARG_TYPE(t, "AbortSignal", e)
  }
}
module.exports = {
  AggregateError: f$AggregateError,
  kEmptyObject: Object.freeze({}),
  once: function (e) {
    var t = false
    return function () {
      if (!t) {
        t = true
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), i = 0; i < arguments$length; i++) {
          r[i] = arguments[i]
        }
        e.apply(this, r)
      }
    }
  },
  createDeferredPromise: function () {
    var e
    var t
    return {
      promise: new Promise(function (n, r) {
        e = n
        t = r
      }),
      resolve: e,
      reject: t
    }
  },
  promisify: function (e) {
    return new Promise(function (t, n) {
      e(function (e) {
        if (e) {
          return n(e)
        }
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length > 1 ? arguments$length - 1 : 0), o = 1; o < arguments$length; o++) {
          i[o - 1] = arguments[o]
        }
        return t.apply(undefined, i)
      })
    })
  },
  debuglog: function () {
    return function () {}
  },
  format: s$format,
  inspect: s$inspect,
  types: {
    isAsyncFunction: function (e) {
      return e instanceof Object$getPrototypeOfOI$markFunctionEReturnI$wrapFunctionEForSwitchE$prevE$nextCase0CaseEndReturnE$stopE$constructor
    },
    isArrayBufferView: function (e) {
      return ArrayBuffer.isView(e)
    }
  },
  isBlob: m,
  deprecate: function (e, t) {
    return e
  },
  addAbortListener: require(/* 983 */"../986/983").addAbortListener || function (e, t) {
    if (undefined === e) {
      throw new require_402_$$_402$codes$ERR_INVALID_ARG_TYPE("signal", "AbortSignal", e)
    }
    var n
    y(e, "signal");
    (function (e, t) {
      if ("function" !== typeof e) {
        throw new require_402_$$_402$codes$ERR_INVALID_ARG_TYPE(t, "Function", e)
      }
    })(t, "listener")
    if (e.aborted) {
      queueMicrotask(function () {
        return t()
      })
    } else {
      e.addEventListener("abort", t, r({
        __proto__: null,
        once: true
      }, f$kResistStopPropagation, true))
      n = function () {
        e.removeEventListener("abort", t)
      }
    }
    return r({
      __proto__: null
    }, f$SymbolDispose, function () {
      var e
      if (!(null === (e = n) || undefined === e)) {
        e()
      }
    })
  },
  AbortSignalAny: _.any || function (e) {
    if (1 === e.length) {
      return e[0]
    }
    var t = new A()
    var n = function () {
      return t.abort()
    }
    e.forEach(function (e) {
      y(e, "signals")
      e.addEventListener("abort", n, {
        once: true
      })
    })
    t.signal.addEventListener("abort", function () {
      e.forEach(function (e) {
        return e.removeEventListener("abort", n)
      })
    }, {
      once: true
    })
    return t.signal
  }
}
module.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom")
