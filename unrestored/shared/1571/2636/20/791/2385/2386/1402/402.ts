/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：402
 */

"use strict"

var r = require(/* 399 */"../../../../../207/787/399/index")
var i = require(/* 974 */"../../../2393/2395/989/1162/974/index")
var o = require(/* 180 */"../../../../../207/787/180")
var a = require(/* 204 */"../../../../../207/787/204")
var s = require(/* 283 */"../../../../../1058/1393/1143/283/index")
var c = require(/* 284 */"../../../../../1058/1393/1143/284/index")
var u = require(/* 711 */"../../../../../207/787/711/index")
var l = require(/* 1403 */"./427/1403")
var /* [auto-meaningful-name] */l$format = l.format
var /* [auto-meaningful-name] */l$inspect = l.inspect
var /* [auto-meaningful-name] */require_311_$_311$AggregateError = require(/* 311 */"./311").AggregateError
var p = globalThis.AggregateError || require_311_$_311$AggregateError
var _ = Symbol("kIsNodeError")
var A = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"]
var g = /^([A-Z][a-z0-9]*)+$/
var v = {}
function m(e, t) {
  if (!e) {
    throw new v.ERR_INTERNAL_ASSERTION(t)
  }
}
function y(e) {
  for (var t = "", /* [auto-meaningful-name] */e$length = e.length, r = "-" === e[0] ? 1 : 0; e$length >= r + 4; e$length -= 3) {
    t = "_".concat(e.slice(e$length - 3, e$length)).concat(t)
  }
  return "".concat(e.slice(0, e$length)).concat(t)
}
function b(e, t, n) {
  if ("function" === typeof t) {
    m(t.length <= n.length, "Code: ".concat(e, "; The provided arguments length (").concat(n.length, ") does not match the required ones (").concat(t.length, ")."))
    return t.apply(undefined, u(n))
  }
  var /* [auto-meaningful-name] */T$match_DfijoOs_g$length = (t.match(/%[dfijoOs]/g) || []).length
  m(T$match_DfijoOs_g$length === n.length, "Code: ".concat(e, "; The provided arguments length (").concat(n.length, ") does not match the required ones (").concat(T$match_DfijoOs_g$length, ")."))
  return 0 === n.length ? t : l$format.apply(undefined, [t].concat(u(n)))
}
function w(e, t, n) {
  if (!n) {
    n = Error
  }
  var r = function (n) {
    s(i, n)
    var r = c(i)
    function i() {
      o(this, i)
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, a = new Array(arguments$length), s = 0; s < arguments$length; s++) {
        a[s] = arguments[s]
      }
      return r.call(this, b(e, t, a))
    }
    a(i, [
      {
        key: "toString",
        value: function () {
          return "".concat(this.name, " [").concat(e, "]: ").concat(this.message)
        }
      }
    ])
    return i
  }(n)
  Object.defineProperties(r.prototype, {
    name: {
      value: n.name,
      writable: true,
      enumerable: false,
      configurable: true
    },
    toString: {
      value: function () {
        return "".concat(this.name, " [").concat(e, "]: ").concat(this.message)
      },
      writable: true,
      enumerable: false,
      configurable: true
    }
  })
  r.prototype.code = e
  r.prototype[_] = true
  v[e] = r
}
function E(e) {
  var t = "__node_internal_" + e.name
  Object.defineProperty(e, "name", {
    value: t
  })
  return e
}
var x = function (e) {
  s(n, e)
  var t = c(n)
  function n() {
    var e
    var r = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "The operation was aborted"
    var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : undefined
    o(this, n)
    if (undefined !== i && "object" !== typeof i) {
      throw new v.ERR_INVALID_ARG_TYPE("options", "Object", i)
    }
    (e = t.call(this, r, i)).code = "ABORT_ERR"
    e.name = "AbortError"
    return e
  }
  return n
}(i(Error))
w("ERR_ASSERTION", "%s", Error)
w("ERR_INVALID_ARG_TYPE", function (e, t, n) {
  m("string" === typeof e, "'name' must be a string")
  if (!Array.isArray(t)) {
    t = [t]
  }
  var i = "The "
  if (e.endsWith(" argument")) {
    i += "".concat(e, " ")
  } else {
    i += "\"".concat(e, "\" ").concat(e.includes(".") ? "property" : "argument", " ")
  }
  i += "must be "
  var o
  var a = []
  var s = []
  var c = []
  var u = r(t)
  try {
    for (u.s(); !(o = u.n()).done;) {
      var /* [auto-meaningful-name] */o$value = o.value
      m("string" === typeof o$value, "All expected entries have to be of type string")
      if (A.includes(o$value)) {
        a.push(o$value.toLowerCase())
      } else {
        if (g.test(o$value)) {
          s.push(o$value)
        } else {
          m("object" !== o$value, "The value \"object\" should be written as \"Object\"")
          c.push(o$value)
        }
      }
    }
  } catch (w) {
    u.e(w)
  } finally {
    u.f()
  }
  if (s.length > 0) {
    var f = a.indexOf("object")
    if (-1 !== f) {
      a.splice(a, f, 1)
      s.push("Object")
    }
  }
  if (a.length > 0) {
    switch (a.length) {
      case 1:
        i += "of type ".concat(a[0])
        break
      case 2:
        i += "one of type ".concat(a[0], " or ").concat(a[1])
        break
      default:
        var h = a.pop()
        i += "one of type ".concat(a.join(", "), ", or ").concat(h)
    }
    if (s.length > 0 || c.length > 0) {
      i += " or "
    }
  }
  if (s.length > 0) {
    switch (s.length) {
      case 1:
        i += "an instance of ".concat(s[0])
        break
      case 2:
        i += "an instance of ".concat(s[0], " or ").concat(s[1])
        break
      default:
        var p = s.pop()
        i += "an instance of ".concat(s.join(", "), ", or ").concat(p)
    }
    if (c.length > 0) {
      i += " or "
    }
  }
  switch (c.length) {
    case 0:
      break
    case 1:
      if (c[0].toLowerCase() !== c[0]) {
        i += "an "
      }
      i += "".concat(c[0])
      break
    case 2:
      i += "one of ".concat(c[0], " or ").concat(c[1])
      break
    default:
      var _ = c.pop()
      i += "one of ".concat(c.join(", "), ", or ").concat(_)
  }
  if (null == n) {
    i += ". Received ".concat(n)
  } else if ("function" === typeof n && n.name) {
    i += ". Received function ".concat(n.name)
  } else if ("object" === typeof n) {
    var /* [auto-meaningful-name] */n$constructor
    if (null !== (n$constructor = n.constructor) && undefined !== n$constructor && n$constructor.name) {
      i += ". Received an instance of ".concat(n.constructor.name)
    } else {
      var y = l$inspect(n, {
        depth: -1
      })
      i += ". Received ".concat(y)
    }
  } else {
    var b = l$inspect(n, {
      colors: false
    })
    if (b.length > 25) {
      b = "".concat(b.slice(0, 25), "...")
    }
    i += ". Received type ".concat(typeof n, " (").concat(b, ")")
  }
  return i
}, TypeError)
w("ERR_INVALID_ARG_VALUE", function (e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : "is invalid"
  var r = l$inspect(t)
  if (r.length > 128) {
    r = r.slice(0, 128) + "..."
  }
  var i = e.includes(".") ? "property" : "argument"
  return "The ".concat(i, " '").concat(e, "' ").concat(n, ". Received ").concat(r)
}, TypeError)
w("ERR_INVALID_RETURN_VALUE", function (e, t, n) {
  var /* [auto-meaningful-name] */n$constructor
  var i = null !== n && undefined !== n && null !== (n$constructor = n.constructor) && undefined !== n$constructor && n$constructor.name ? "instance of ".concat(n.constructor.name) : "type ".concat(typeof n)
  return "Expected ".concat(e, " to be returned from the \"").concat(t, "\"") + " function but got ".concat(i, ".")
}, TypeError)
w("ERR_MISSING_ARGS", function () {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
    t[n] = arguments[n]
  }
  var r
  m(t.length > 0, "At least one arg needs to be specified")
  var /* [auto-meaningful-name] */t$length = t.length
  switch (t = (Array.isArray(t) ? t : [t]).map(function (e) {
    return "\"".concat(e, "\"")
  }).join(" or "), t$length) {
    case 1:
      r += "The ".concat(t[0], " argument")
      break
    case 2:
      r += "The ".concat(t[0], " and ").concat(t[1], " arguments")
      break
    default:
      var o = t.pop()
      r += "The ".concat(t.join(", "), ", and ").concat(o, " arguments")
  }
  return "".concat(r, " must be specified")
}, TypeError)
w("ERR_OUT_OF_RANGE", function (e, t, n) {
  var r
  m(t, "Missing \"range\" argument")
  if (Number.isInteger(n) && Math.abs(n) > Math.pow(2, 32)) {
    r = y(String(n))
  } else if ("bigint" === typeof n) {
    r = String(n)
    var i = Math.pow(BigInt(2), BigInt(32))
    if (n > i || n < -i) {
      r = y(r)
    }
    r += "n"
  } else {
    r = l$inspect(n)
  }
  return "The value of \"".concat(e, "\" is out of range. It must be ").concat(t, ". Received ").concat(r)
}, RangeError)
w("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error)
w("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error)
w("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error)
w("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error)
w("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error)
w("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError)
w("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error)
w("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error)
w("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error)
w("ERR_STREAM_WRITE_AFTER_END", "write after end", Error)
w("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError)
module.exports = {
  AbortError: x,
  aggregateTwoErrors: E(function (e, t) {
    if (e && t && e !== t) {
      if (Array.isArray(t.errors)) {
        t.errors.push(e)
        return t
      }
      var n = new p([t, e], t.message)
      n.code = t.code
      return n
    }
    return e || t
  }),
  hideStackFrames: E,
  codes: v
}
