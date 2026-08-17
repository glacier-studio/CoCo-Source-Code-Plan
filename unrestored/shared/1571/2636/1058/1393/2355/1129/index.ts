/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1129
 */

var r = Object.getOwnPropertyDescriptors || function (e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r])
  }
  return n
}
var i = /%[sdj%]/g
exports.format = function (e) {
  if (!g(e)) {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t.push(s(arguments[n]))
    }
    return t.join(" ")
  }
  n = 1
  for (var r = arguments, /* [auto-meaningful-name] */r$length = r.length, a = String(e).replace(i, function (e) {
      if ("%%" === e) {
        return "%"
      }
      if (n >= r$length) {
        return e
      }
      switch (e) {
        case "%s":
          return String(r[n++])
        case "%d":
          return Number(r[n++])
        case "%j":
          try {
            return JSON.stringify(r[n++])
          } catch (t) {
            return "[Circular]"
          }
        default:
          return e
      }
    }), c = r[n]; n < r$length; c = r[++n]) {
    if (_(c) || !y(c)) {
      a += " " + c
    } else {
      a += " " + s(c)
    }
  }
  return a
}
exports.deprecate = function (n, r) {
  if ("undefined" !== typeof process && true === process.noDeprecation) {
    return n
  }
  if ("undefined" === typeof process) {
    return function () {
      return exports.deprecate(n, r).apply(this, arguments)
    }
  }
  var i = false
  return function () {
    if (!i) {
      if (process.throwDeprecation) {
        throw new Error(r)
      }
      if (process.traceDeprecation) {
        console.trace(r)
      } else {
        console.error(r)
      }
      i = true
    }
    return n.apply(this, arguments)
  }
}
var o
var a = {}
function s(e, n) {
  var r = {
    seen: [],
    stylize: u
  }
  if (arguments.length >= 3) {
    r.depth = arguments[2]
  }
  if (arguments.length >= 4) {
    r.colors = arguments[3]
  }
  if (p(n)) {
    r.showHidden = n
  } else {
    if (n) {
      exports._extend(r, n)
    }
  }
  if (v(r.showHidden)) {
    r.showHidden = false
  }
  if (v(r.depth)) {
    r.depth = 2
  }
  if (v(r.colors)) {
    r.colors = false
  }
  if (v(r.customInspect)) {
    r.customInspect = true
  }
  if (r.colors) {
    r.stylize = c
  }
  return l(r, e, r.depth)
}
function c(e, t) {
  var n = s.styles[t]
  return n ? "\u001b[" + s.colors[n][0] + "m" + e + "\u001b[" + s.colors[n][1] + "m" : e
}
function u(e, t) {
  return e
}
function l(e, n, r) {
  if (e.customInspect && n && E(n.inspect) && n.inspect !== exports.inspect && (!n.constructor || n.constructor.prototype !== n)) {
    var i = n.inspect(r, e)
    if (!g(i)) {
      i = l(e, i, r)
    }
    return i
  }
  var o = function (e, t) {
    if (v(t)) {
      return e.stylize("undefined", "undefined")
    }
    if (g(t)) {
      var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'"
      return e.stylize(n, "string")
    }
    if (A(t)) {
      return e.stylize("" + t, "number")
    }
    if (p(t)) {
      return e.stylize("" + t, "boolean")
    }
    if (_(t)) {
      return e.stylize("null", "null")
    }
  }(e, n)
  if (o) {
    return o
  }
  var a = Object.keys(n)
  var s = function (e) {
    var t = {}
    e.forEach(function (e, n) {
      t[e] = true
    })
    return t
  }(a)
  if (e.showHidden) {
    a = Object.getOwnPropertyNames(n)
  }
  if (w(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) {
    return f(n)
  }
  if (0 === a.length) {
    if (E(n)) {
      var c = n.name ? ": " + n.name : ""
      return e.stylize("[Function" + c + "]", "special")
    }
    if (m(n)) {
      return e.stylize(RegExp.prototype.toString.call(n), "regexp")
    }
    if (b(n)) {
      return e.stylize(Date.prototype.toString.call(n), "date")
    }
    if (w(n)) {
      return f(n)
    }
  }
  var u
  var y = ""
  var x = false
  var C = ["{", "}"]
  if (h(n)) {
    x = true
    C = ["[", "]"]
  }
  if (E(n)) {
    y = " [Function" + (n.name ? ": " + n.name : "") + "]"
  }
  if (m(n)) {
    y = " " + RegExp.prototype.toString.call(n)
  }
  if (b(n)) {
    y = " " + Date.prototype.toUTCString.call(n)
  }
  if (w(n)) {
    y = " " + f(n)
  }
  return 0 !== a.length || x && 0 != n.length ? r < 0 ? m(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), u = x ? function (e, t, n, r, i) {
    for (var o = [], a = 0, /* [auto-meaningful-name] */t$length = t.length; a < t$length; ++a) {
      if (S(t, String(a))) {
        o.push(d(e, t, n, r, String(a), true))
      } else {
        o.push("")
      }
    }
    i.forEach(function (i) {
      if (!i.match(/^\d+$/)) {
        o.push(d(e, t, n, r, i, true))
      }
    })
    return o
  }(e, n, r, s, a) : a.map(function (t) {
    return d(e, n, r, s, t, x)
  }), e.seen.pop(), function (e, t, n) {
    if (e.reduce(function (e, t) {
      if (t.indexOf("\n") >= 0) {
        0
      }
      return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
    }, 0) > 60) {
      return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1]
    }
    return n[0] + t + " " + e.join(", ") + " " + n[1]
  }(u, y, C)) : C[0] + y + C[1]
}
function f(e) {
  return "[" + Error.prototype.toString.call(e) + "]"
}
function d(e, t, n, r, i, o) {
  var a
  var s
  var c
  if ((c = Object.getOwnPropertyDescriptor(t, i) || {
    value: t[i]
  }).get) {
    s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special")
  } else {
    if (c.set) {
      s = e.stylize("[Setter]", "special")
    }
  }
  if (!S(r, i)) {
    a = "[" + i + "]"
  }
  if (!s) {
    if (e.seen.indexOf(c.value) < 0) {
      if ((s = _(n) ? l(e, c.value, null) : l(e, c.value, n - 1)).indexOf("\n") > -1) {
        s = o ? s.split("\n").map(function (e) {
          return "  " + e
        }).join("\n").substr(2) : "\n" + s.split("\n").map(function (e) {
          return "   " + e
        }).join("\n")
      }
    } else {
      s = e.stylize("[Circular]", "special")
    }
  }
  if (v(a)) {
    if (o && i.match(/^\d+$/)) {
      return s
    }
    if ((a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      a = a.substr(1, a.length - 2)
      a = e.stylize(a, "name")
    } else {
      a = a.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'")
      a = e.stylize(a, "string")
    }
  }
  return a + ": " + s
}
function h(e) {
  return Array.isArray(e)
}
function p(e) {
  return "boolean" === typeof e
}
function _(e) {
  return null === e
}
function A(e) {
  return "number" === typeof e
}
function g(e) {
  return "string" === typeof e
}
function v(e) {
  return undefined === e
}
function m(e) {
  return y(e) && "[object RegExp]" === x(e)
}
function y(e) {
  return "object" === typeof e && null !== e
}
function b(e) {
  return y(e) && "[object Date]" === x(e)
}
function w(e) {
  return y(e) && ("[object Error]" === x(e) || e instanceof Error)
}
function E(e) {
  return "function" === typeof e
}
function x(e) {
  return Object.prototype.toString.call(e)
}
function C(e) {
  return e < 10 ? "0" + e.toString(10) : e.toString(10)
}
exports.debuglog = function (n) {
  if (v(o)) {
    o = Object({
      NODE_ENV: "production",
      PUBLIC_URL: "",
      WDS_SOCKET_HOST: undefined,
      WDS_SOCKET_PATH: undefined,
      WDS_SOCKET_PORT: undefined
    }).NODE_DEBUG || ""
  }
  n = n.toUpperCase()
  if (!a[n]) {
    if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
      var /* [auto-meaningful-name] */process$pid = process.pid
      a[n] = function () {
        var e = exports.format.apply(exports, arguments)
        console.error("%s %d: %s", n, process$pid, e)
      }
    } else {
      a[n] = function () {}
    }
  }
  return a[n]
}
exports.inspect = s
s.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
}
s.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
}
exports.isArray = h
exports.isBoolean = p
exports.isNull = _
exports.isNullOrUndefined = function (e) {
  return null == e
}
exports.isNumber = A
exports.isString = g
exports.isSymbol = function (e) {
  return "symbol" === typeof e
}
exports.isUndefined = v
exports.isRegExp = m
exports.isObject = y
exports.isDate = b
exports.isError = w
exports.isFunction = E
exports.isPrimitive = function (e) {
  return null === e || "boolean" === typeof e || "number" === typeof e || "string" === typeof e || "symbol" === typeof e || "undefined" === typeof e
}
exports.isBuffer = require(/* 2228 */"./2228")
var O = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
function k() {
  var e = new Date()
  var t = [C(e.getHours()), C(e.getMinutes()), C(e.getSeconds())].join(":")
  return [e.getDate(), O[e.getMonth()], t].join(" ")
}
function S(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
}
exports.log = function () {
  console.log("%s - %s", k(), exports.format.apply(exports, arguments))
}
exports.inherits = require(/* 2229 */"./2229")
exports._extend = function (e, t) {
  if (!t || !y(t)) {
    return e
  }
  for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length; n$length--;) {
    e[n[n$length]] = t[n[n$length]]
  }
  return e
}
var T = "undefined" !== typeof Symbol ? Symbol("util.promisify.custom") : undefined
function B(e, t) {
  if (!e) {
    var n = new Error("Promise was rejected with a falsy value")
    n.reason = e
    e = n
  }
  return t(e)
}
exports.promisify = function (e) {
  if ("function" !== typeof e) {
    throw new TypeError("The \"original\" argument must be of type Function")
  }
  if (T && e[T]) {
    var t
    if ("function" !== typeof (t = e[T])) {
      throw new TypeError("The \"util.promisify.custom\" argument must be of type Function")
    }
    Object.defineProperty(t, T, {
      value: t,
      enumerable: false,
      writable: false,
      configurable: true
    })
    return t
  }
  function t() {
    for (var t, n, r = new Promise(function (e, r) {
        t = e
        n = r
      }), i = [], o = 0; o < arguments.length; o++) {
      i.push(arguments[o])
    }
    i.push(function (e, r) {
      if (e) {
        n(e)
      } else {
        t(r)
      }
    })
    try {
      e.apply(this, i)
    } catch (a) {
      n(a)
    }
    return r
  }
  Object.setPrototypeOf(t, Object.getPrototypeOf(e))
  if (T) {
    Object.defineProperty(t, T, {
      value: t,
      enumerable: false,
      writable: false,
      configurable: true
    })
  }
  return Object.defineProperties(t, r(e))
}
exports.promisify.custom = T
exports.callbackify = function (t) {
  if ("function" !== typeof t) {
    throw new TypeError("The \"original\" argument must be of type Function")
  }
  function n() {
    for (var n = [], r = 0; r < arguments.length; r++) {
      n.push(arguments[r])
    }
    var i = n.pop()
    if ("function" !== typeof i) {
      throw new TypeError("The last argument must be of type Function")
    }
    var o = this
    var a = function () {
      return i.apply(o, arguments)
    }
    t.apply(this, n).then(function (t) {
      process.nextTick(a, null, t)
    }, function (t) {
      process.nextTick(B, t, a)
    })
  }
  Object.setPrototypeOf(n, Object.getPrototypeOf(t))
  Object.defineProperties(n, r(t))
  return n
}
