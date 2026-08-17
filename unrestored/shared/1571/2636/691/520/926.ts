/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：926
 */

"use strict"

var r = require(/* 521 */"../217/521")
function i(e) {
  for (var t, n = []; !(t = e.next()).done;) {
    n.push(t.value)
  }
  return n
}
function o(e, t, n) {
  for (var r = 0, /* [auto-meaningful-name] */n$length = n.length; r < n$length;) {
    if (e(t, n[r])) {
      return true
    }
    r += 1
  }
  return false
}
function a(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e)
}
var s = "function" === typeof Object.is ? Object.is : function (e, t) {
  return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
}
var c = require(/* 394 */"../523/394")
var /* [auto-meaningful-name] */Object$prototype$toString = Object.prototype.toString
var l = function () {
  return "[object Arguments]" === Object$prototype$toString.call(arguments) ? function (e) {
    return "[object Arguments]" === Object$prototype$toString.call(e)
  } : function (e) {
    return a("callee", e)
  }
}()
var f = !{
  toString: null
}.propertyIsEnumerable("toString")
var d = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]
var h = function () {
  return arguments.propertyIsEnumerable("length")
}()
var p = function (e, t) {
  for (var n = 0; n < e.length;) {
    if (e[n] === t) {
      return true
    }
    n += 1
  }
  return false
}
var _ = "function" !== typeof Object.keys || h ? c.a(function (e) {
  if (Object(e) !== e) {
    return []
  }
  var t
  var n
  var r = []
  var i = h && l(e)
  for (t in e) if (!(!a(t, e) || i && "length" === t)) {
    r[r.length] = t
  }
  if (f) {
    for (n = d.length - 1; n >= 0;) {
      if (a(t = d[n], e) && !p(r, t)) {
        r[r.length] = t
      }
      n -= 1
    }
  }
  return r
}) : c.a(function (e) {
  return Object(e) !== e ? [] : Object.keys(e)
})
var A = require(/* 921 */"../523/921")
function g(e, t, n, r) {
  var a = i(e)
  function s(e, t) {
    return v(e, t, n.slice(), r.slice())
  }
  return !o(function (e, t) {
    return !o(s, t, e)
  }, i(t), a)
}
function v(e, t, n, r) {
  if (s(e, t)) {
    return true
  }
  var i = A.a(e)
  if (i !== A.a(t)) {
    return false
  }
  if (null == e || null == t) {
    return false
  }
  if ("function" === typeof e["fantasy-land/equals"] || "function" === typeof t["fantasy-land/equals"]) {
    return "function" === typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](t) && "function" === typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](e)
  }
  if ("function" === typeof e.equals || "function" === typeof t.equals) {
    return "function" === typeof e.equals && e.equals(t) && "function" === typeof t.equals && t.equals(e)
  }
  switch (i) {
    case "Arguments":
    case "Array":
    case "Object":
      if ("function" === typeof e.constructor && "Promise" === function (e) {
        var t = String(e).match(/^function (\w*)/)
        return null == t ? "" : t[1]
      }(e.constructor)) {
        return e === t
      }
      break
    case "Boolean":
    case "Number":
    case "String":
      if (typeof e !== typeof t || !s(e.valueOf(), t.valueOf())) {
        return false
      }
      break
    case "Date":
      if (!s(e.valueOf(), t.valueOf())) {
        return false
      }
      break
    case "Error":
      return e.name === t.name && e.message === t.message
    case "RegExp":
      if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode) {
        return false
      }
  }
  for (var o = n.length - 1; o >= 0;) {
    if (n[o] === e) {
      return r[o] === t
    }
    o -= 1
  }
  switch (i) {
    case "Map":
      return e.size === t.size && g(e.entries(), t.entries(), n.concat([e]), r.concat([t]))
    case "Set":
      return e.size === t.size && g(e.values(), t.values(), n.concat([e]), r.concat([t]))
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break
    default:
      return false
  }
  var c = _(e)
  if (c.length !== _(t).length) {
    return false
  }
  var u = n.concat([e])
  var l = r.concat([t])
  for (o = c.length - 1; o >= 0;) {
    var f = c[o]
    if (!a(f, t) || !v(t[f], e[f], u, l)) {
      return false
    }
    o -= 1
  }
  return true
}
var m = r.a(function (e, t) {
  return v(e, t, [], [])
})
exports.a = m
