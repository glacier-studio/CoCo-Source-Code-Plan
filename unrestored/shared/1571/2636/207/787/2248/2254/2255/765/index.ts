/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：765
 */

"use strict"

function r(e, t, n, r) {
  var i = r ? " !== " : " === "
  var o = r ? " || " : " && "
  var a = r ? "!" : ""
  var s = r ? "" : "!"
  switch (e) {
    case "null":
      return t + i + "null"
    case "array":
      return a + "Array.isArray(" + t + ")"
    case "object":
      return "(" + a + t + o + "typeof " + t + i + "\"object\"" + o + s + "Array.isArray(" + t + "))"
    case "integer":
      return "(typeof " + t + i + "\"number\"" + o + s + "(" + t + " % 1)" + o + t + i + t + (n ? o + a + "isFinite(" + t + ")" : "") + ")"
    case "number":
      return "(typeof " + t + i + "\"" + e + "\"" + (n ? o + a + "isFinite(" + t + ")" : "") + ")"
    default:
      return "typeof " + t + i + "\"" + e + "\""
  }
}
module.exports = {
  copy: function (e, t) {
    for (var n in t = t || {}, e) t[n] = e[n]
    return t
  },
  checkDataType: r,
  checkDataTypes: function (e, t, n) {
    switch (e.length) {
      case 1:
        return r(e[0], t, n, true)
      default:
        var i = "",
          a = o(e)
        for (var s in a.array && a.object && (i = a.null ? "(" : "(!" + t + " || ", i += "typeof " + t + " !== \"object\")", delete a.null, delete a.array, delete a.object), a.number && delete a.integer, a) i += (i ? " && " : "") + r(s, t, n, true)
        return i
    }
  },
  coerceToTypes: function (e, t) {
    if (Array.isArray(t)) {
      for (var n = [], r = 0; r < t.length; r++) {
        var o = t[r]
        if (i[o] || "array" === e && "array" === o) {
          n[n.length] = o
        }
      }
      if (n.length) {
        return n
      }
    } else {
      if (i[t]) {
        return [t]
      }
      if ("array" === e && "array" === t) {
        return ["array"]
      }
    }
  },
  toHash: o,
  getProperty: c,
  escapeQuotes: u,
  equal: require(/* 1137 */"../2256/1137"),
  ucs2length: require(/* 2258 */"./2258"),
  varOccurences: function (e, t) {
    t += "[^0-9]"
    var n = e.match(new RegExp(t, "g"))
    return n ? n.length : 0
  },
  varReplace: function (e, t, n) {
    t += "([^0-9])"
    n = n.replace(/\$/g, "$$$$")
    return e.replace(new RegExp(t, "g"), n + "$1")
  },
  schemaHasRules: function (e, t) {
    if ("boolean" == typeof e) {
      return !e
    }
    for (var n in e) if (t[n]) {
      return true
    }
  },
  schemaHasRulesExcept: function (e, t, n) {
    if ("boolean" == typeof e) {
      return !e && "not" != n
    }
    for (var r in e) if (r != n && t[r]) {
      return true
    }
  },
  schemaUnknownRules: function (e, t) {
    if ("boolean" == typeof e) {
      return
    }
    for (var n in e) if (!t[n]) {
      return n
    }
  },
  toQuotedString: l,
  getPathExpr: function (e, t, n, r) {
    return h(e, n ? "'/' + " + t + (r ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : r ? "'[' + " + t + " + ']'" : "'[\\'' + " + t + " + '\\']'")
  },
  getPath: function (e, t, n) {
    var r = l(n ? "/" + p(t) : c(t))
    return h(e, r)
  },
  getData: function (e, t, n) {
    var r
    var i
    var o
    var a
    if ("" === e) {
      return "rootData"
    }
    if ("/" == e[0]) {
      if (!f.test(e)) {
        throw new Error("Invalid JSON-pointer: " + e)
      }
      i = e
      o = "rootData"
    } else {
      if (!(a = e.match(d))) {
        throw new Error("Invalid JSON-pointer: " + e)
      }
      r = +a[1]
      if ("#" == (i = a[2])) {
        if (r >= t) {
          throw new Error("Cannot access property/index " + r + " levels up, current level is " + t)
        }
        return n[t - r]
      }
      if (r > t) {
        throw new Error("Cannot access data " + r + " levels up, current level is " + t)
      }
      o = "data" + (t - r || "")
      if (!i) {
        return o
      }
    }
    for (var s = o, u = i.split("/"), l = 0; l < u.length; l++) {
      var h = u[l]
      if (h) {
        o += c(_(h))
        s += " && " + o
      }
    }
    return s
  },
  unescapeFragment: function (e) {
    return _(decodeURIComponent(e))
  },
  unescapeJsonPointer: _,
  escapeFragment: function (e) {
    return encodeURIComponent(p(e))
  },
  escapeJsonPointer: p
}
var i = o(["string", "number", "integer", "boolean", "null"])
function o(e) {
  for (var t = {}, n = 0; n < e.length; n++) {
    t[e[n]] = true
  }
  return t
}
var a = /^[a-z$_][a-z$_0-9]*$/i
var s = /'|\\/g
function c(e) {
  return "number" == typeof e ? "[" + e + "]" : a.test(e) ? "." + e : "['" + u(e) + "']"
}
function u(e) {
  return e.replace(s, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t")
}
function l(e) {
  return "'" + u(e) + "'"
}
var f = /^\/(?:[^~]|~0|~1)*$/
var d = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/
function h(e, t) {
  return "\"\"" == e ? t : (e + " + " + t).replace(/([^\\])' \+ '/g, "$1")
}
function p(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1")
}
function _(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~")
}
