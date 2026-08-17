/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：858
 */

"use strict"

var r = require(/* 311 */"../311")
var /* [auto-meaningful-name] */r$ArrayIsArray = r.ArrayIsArray
var /* [auto-meaningful-name] */r$ArrayPrototypeIncludes = r.ArrayPrototypeIncludes
var /* [auto-meaningful-name] */r$ArrayPrototypeJoin = r.ArrayPrototypeJoin
var /* [auto-meaningful-name] */r$ArrayPrototypeMap = r.ArrayPrototypeMap
var /* [auto-meaningful-name] */r$NumberIsInteger = r.NumberIsInteger
var /* [auto-meaningful-name] */r$NumberIsNaN = r.NumberIsNaN
var /* [auto-meaningful-name] */r$NumberMAX_SAFE_INTEGER = r.NumberMAX_SAFE_INTEGER
var /* [auto-meaningful-name] */r$NumberMIN_SAFE_INTEGER = r.NumberMIN_SAFE_INTEGER
var /* [auto-meaningful-name] */r$NumberParseInt = r.NumberParseInt
var /* [auto-meaningful-name] */r$ObjectPrototypeHasOwnProperty = r.ObjectPrototypeHasOwnProperty
var /* [auto-meaningful-name] */r$RegExpPrototypeExec = r.RegExpPrototypeExec
var /* [auto-meaningful-name] */r$String = r.String
var /* [auto-meaningful-name] */r$StringPrototypeToUpperCase = r.StringPrototypeToUpperCase
var /* [auto-meaningful-name] */r$StringPrototypeTrim = r.StringPrototypeTrim
var v = require(/* 402 */"../402")
var /* [auto-meaningful-name] */v$hideStackFrames = v.hideStackFrames
var /* [auto-meaningful-name] */v$codes = v.codes
var /* [auto-meaningful-name] */v$codes$ERR_SOCKET_BAD_PORT = v$codes.ERR_SOCKET_BAD_PORT
var /* [auto-meaningful-name] */v$codes$ERR_INVALID_ARG_TYPE = v$codes.ERR_INVALID_ARG_TYPE
var /* [auto-meaningful-name] */v$codes$ERR_INVALID_ARG_VALUE = v$codes.ERR_INVALID_ARG_VALUE
var /* [auto-meaningful-name] */v$codes$ERR_OUT_OF_RANGE = v$codes.ERR_OUT_OF_RANGE
var /* [auto-meaningful-name] */v$codes$ERR_UNKNOWN_SIGNAL = v$codes.ERR_UNKNOWN_SIGNAL
var /* [auto-meaningful-name] */require_427_$$_427_index$normalizeEncoding = require(/* 427 */"../427/index").normalizeEncoding
var /* [auto-meaningful-name] */require_427_$$_427_index$types = require(/* 427 */"../427/index").types
var /* [auto-meaningful-name] */require_427_$$_427_index$types$isAsyncFunction = require_427_$$_427_index$types.isAsyncFunction
var /* [auto-meaningful-name] */require_427_$$_427_index$types$isArrayBufferView = require_427_$$_427_index$types.isArrayBufferView
var B = {}
var D = /^[0-7]+$/
var I = v$hideStackFrames(function (e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : r$NumberMIN_SAFE_INTEGER
  var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : r$NumberMAX_SAFE_INTEGER
  if ("number" !== typeof e) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "number", e)
  }
  if (!r$NumberIsInteger(e)) {
    throw new v$codes$ERR_OUT_OF_RANGE(t, "an integer", e)
  }
  if (e < n || e > r) {
    throw new v$codes$ERR_OUT_OF_RANGE(t, ">= ".concat(n, " && <= ").concat(r), e)
  }
})
var R = v$hideStackFrames(function (e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : -2147483648
  var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 2147483647
  if ("number" !== typeof e) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "number", e)
  }
  if (!r$NumberIsInteger(e)) {
    throw new v$codes$ERR_OUT_OF_RANGE(t, "an integer", e)
  }
  if (e < n || e > r) {
    throw new v$codes$ERR_OUT_OF_RANGE(t, ">= ".concat(n, " && <= ").concat(r), e)
  }
})
var F = v$hideStackFrames(function (e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] && arguments[2]
  if ("number" !== typeof e) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "number", e)
  }
  if (!r$NumberIsInteger(e)) {
    throw new v$codes$ERR_OUT_OF_RANGE(t, "an integer", e)
  }
  var r = n ? 1 : 0
  var i = 4294967295
  if (e < r || e > i) {
    throw new v$codes$ERR_OUT_OF_RANGE(t, ">= ".concat(r, " && <= ").concat(i), e)
  }
})
function P(e, t) {
  if ("string" !== typeof e) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "string", e)
  }
}
var N = v$hideStackFrames(function (e, t, n) {
  if (!r$ArrayPrototypeIncludes(n, e)) {
    var r = r$ArrayPrototypeJoin(r$ArrayPrototypeMap(n, function (e) {
      return "string" === typeof e ? "'".concat(e, "'") : r$String(e)
    }), ", ")
    throw new v$codes$ERR_INVALID_ARG_VALUE(t, e, "must be one of: " + r)
  }
})
function M(e, t) {
  if ("boolean" !== typeof e) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "boolean", e)
  }
}
function L(e, t, n) {
  return null != e && r$ObjectPrototypeHasOwnProperty(e, t) ? e[t] : n
}
var j = v$hideStackFrames(function (e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null
  var r = L(n, "allowArray", false)
  var o = L(n, "allowFunction", false)
  var a = L(n, "nullable", false)
  if (!a && null === e || !r && r$ArrayIsArray(e) || "object" !== typeof e && (!o || "function" !== typeof e)) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "Object", e)
  }
})
var U = v$hideStackFrames(function (e, t) {
  if (null != e && "object" !== typeof e && "function" !== typeof e) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "a dictionary", e)
  }
})
var H = v$hideStackFrames(function (e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 0
  if (!r$ArrayIsArray(e)) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "Array", e)
  }
  if (e.length < n) {
    var r = "must be longer than ".concat(n)
    throw new v$codes$ERR_INVALID_ARG_VALUE(t, e, r)
  }
})
var V = v$hideStackFrames(function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "buffer"
  if (!require_427_$$_427_index$types$isArrayBufferView(e)) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, ["Buffer", "TypedArray", "DataView"], e)
  }
})
var G = v$hideStackFrames(function (e, t) {
  if (undefined !== e && (null === e || "object" !== typeof e || !("aborted" in e))) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "AbortSignal", e)
  }
})
var z = v$hideStackFrames(function (e, t) {
  if ("function" !== typeof e) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "Function", e)
  }
})
var Q = v$hideStackFrames(function (e, t) {
  if ("function" !== typeof e || require_427_$$_427_index$types$isAsyncFunction(e)) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "Function", e)
  }
})
var W = v$hideStackFrames(function (e, t) {
  if (undefined !== e) {
    throw new v$codes$ERR_INVALID_ARG_TYPE(t, "undefined", e)
  }
})
var K = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/
function X(e, t) {
  if ("undefined" === typeof e || !r$RegExpPrototypeExec(K, e)) {
    throw new v$codes$ERR_INVALID_ARG_VALUE(t, e, "must be an array or string of format \"</styles.css>; rel=preload; as=style\"")
  }
}
module.exports = {
  isInt32: function (e) {
    return e === (0 | e)
  },
  isUint32: function (e) {
    return e === e >>> 0
  },
  parseFileMode: function (e, t, n) {
    if ("undefined" === typeof e) {
      e = n
    }
    if ("string" === typeof e) {
      if (null === r$RegExpPrototypeExec(D, e)) {
        throw new v$codes$ERR_INVALID_ARG_VALUE(t, e, "must be a 32-bit unsigned integer or an octal string")
      }
      e = r$NumberParseInt(e, 8)
    }
    F(e, t)
    return e
  },
  validateArray: H,
  validateStringArray: function (e, t) {
    H(e, t)
    for (var n = 0; n < e.length; n++) {
      P(e[n], "".concat(t, "[").concat(n, "]"))
    }
  },
  validateBooleanArray: function (e, t) {
    H(e, t)
    for (var n = 0; n < e.length; n++) {
      M(e[n], "".concat(t, "[").concat(n, "]"))
    }
  },
  validateAbortSignalArray: function (e, t) {
    H(e, t)
    for (var n = 0; n < e.length; n++) {
      var r = e[n]
      var i = "".concat(t, "[").concat(n, "]")
      if (null == r) {
        throw new v$codes$ERR_INVALID_ARG_TYPE(i, "AbortSignal", r)
      }
      G(r, i)
    }
  },
  validateBoolean: M,
  validateBuffer: V,
  validateDictionary: U,
  validateEncoding: function (e, t) {
    var n = require_427_$$_427_index$normalizeEncoding(t)
    var /* [auto-meaningful-name] */e$length = e.length
    if ("hex" === n && e$length % 2 !== 0) {
      throw new v$codes$ERR_INVALID_ARG_VALUE("encoding", t, "is invalid for data of length ".concat(e$length))
    }
  },
  validateFunction: z,
  validateInt32: R,
  validateInteger: I,
  validateNumber: function (e, t) {
    var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : undefined
    var r = arguments.length > 3 ? arguments[3] : undefined
    if ("number" !== typeof e) {
      throw new v$codes$ERR_INVALID_ARG_TYPE(t, "number", e)
    }
    if (null != n && e < n || null != r && e > r || (null != n || null != r) && r$NumberIsNaN(e)) {
      throw new v$codes$ERR_OUT_OF_RANGE(t, "".concat(null != n ? ">= ".concat(n) : "").concat(null != n && null != r ? " && " : "").concat(null != r ? "<= ".concat(r) : ""), e)
    }
  },
  validateObject: j,
  validateOneOf: N,
  validatePlainFunction: Q,
  validatePort: function (e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "Port"
    var n = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2]
    if ("number" !== typeof e && "string" !== typeof e || "string" === typeof e && 0 === r$StringPrototypeTrim(e).length || +e !== +e >>> 0 || e > 65535 || 0 === e && !n) {
      throw new v$codes$ERR_SOCKET_BAD_PORT(t, e, n)
    }
    return 0 | e
  },
  validateSignalName: function (e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "signal"
    P(e, t)
    if (undefined === B[e]) {
      if (undefined !== B[r$StringPrototypeToUpperCase(e)]) {
        throw new v$codes$ERR_UNKNOWN_SIGNAL(e + " (signals must use all capital letters)")
      }
      throw new v$codes$ERR_UNKNOWN_SIGNAL(e)
    }
  },
  validateString: P,
  validateUint32: F,
  validateUndefined: W,
  validateUnion: function (e, t, n) {
    if (!r$ArrayPrototypeIncludes(n, e)) {
      throw new v$codes$ERR_INVALID_ARG_TYPE(t, "('".concat(r$ArrayPrototypeJoin(n, "|"), "')"), e)
    }
  },
  validateAbortSignal: G,
  validateLinkHeaderValue: function (e) {
    if ("string" === typeof e) {
      X(e, "hints")
      return e
    }
    if (r$ArrayIsArray(e)) {
      var /* [auto-meaningful-name] */e$length = e.length
      var n = ""
      if (0 === e$length) {
        return n
      }
      for (var r = 0; r < e$length; r++) {
        var o = e[r]
        X(o, "hints")
        n += o
        if (r !== e$length - 1) {
          n += ", "
        }
      }
      return n
    }
    throw new v$codes$ERR_INVALID_ARG_VALUE("hints", e, "must be an array or string of format \"</styles.css>; rel=preload; as=style\"")
  }
}
