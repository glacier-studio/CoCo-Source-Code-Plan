/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2317
 */

var FieldImage
var n
function r(e) {
  var t
  if (null == (t = e[0])) {
    throw new Error("Unexpected end of input.")
  }
  return t
}
function i(e) {
  var n
  n = r(e)
  if (!FieldImage.test(n)) {
    throw new Error("Expected text, got '" + n + "' instead.")
  }
  return e.shift()
}
function o(e, t) {
  var n
  if ((n = r(e)) !== t) {
    throw new Error("Expected '" + t + "', got '" + n + "' instead.")
  }
  return e.shift()
}
function a(e, t) {
  return e[0] === t ? e.shift() : null
}
function s(e) {
  var t
  t = i(e)
  o(e, ":")
  return [t, l(e)]
}
function c(e) {
  switch (e[0]) {
    case "[":
      return function (e) {
        var t
        o(e, "[")
        if ("]" === r(e)) {
          throw new Error("Must specify type of Array - eg. [Type], got [] instead.")
        }
        t = l(e)
        o(e, "]")
        return {
          structure: "array",
          of: t
        }
      }(e)
    case "(":
      return function (e) {
        var t
        t = []
        o(e, "(")
        if (")" === r(e)) {
          throw new Error("Tuple must be of at least length 1 - eg. (Type), got () instead.")
        }
        for (; t.push(l(e)), a(e, ","), ")" !== r(e);) {
          ;
        }
        o(e, ")")
        return {
          structure: "tuple",
          of: t
        }
      }(e)
    case "{":
      return function (e) {
        var t
        var n
        var i
        var c
        var u
        for (t = {}, o(e, "{"), n = false;;) {
          if (a(e, "...")) {
            n = true
            break
          }
          c = (i = s(e))[0]
          u = i[1]
          t[c] = u
          a(e, ",")
          if ("}" === r(e)) {
            break
          }
        }
        o(e, "}")
        return {
          structure: "fields",
          of: t,
          subset: n
        }
      }(e)
  }
}
function u(e) {
  var n
  var a
  var s
  var u
  if ((a = "*" === (n = r(e))) || FieldImage.test(n)) {
    s = a ? o(e, "*") : i(e)
    return (u = c(e)) ? (u.type = s, u) : {
      type: s
    }
  }
  if (!(u = c(e))) {
    throw new Error("Unexpected character: " + n)
  }
  return u
}
function l(e) {
  var t
  var n
  var i
  var o
  var /* [auto-meaningful-name] */OUE$type
  if ("::" === r(e)) {
    throw new Error("No comment before comment separator '::' found.")
  }
  for (null != (t = e[1]) && "::" === t && (e.shift(), e.shift()), n = [], i = {}, "Maybe" === r(e) && (e.shift(), n = [
    {
      type: "Undefined"
    }, {
      type: "Null"
    }
  ], i = {
    Undefined: true,
    Null: true
  }); i[OUE$type = (o = u(e)).type] || n.push(o), i[OUE$type] = true, a(e, "|");) {
    ;
  }
  return n
}
FieldImage = /[\$\w]+/
n = RegExp("\\.\\.\\.|::|->|" + FieldImage.source + "|\\S", "g")
module.exports = function (e) {
  var t
  if (!e.length) {
    throw new Error("No type specified.")
  }
  if (function (e, t) {
    var n = -1
    var r = t.length >>> 0
    for (; ++n < r;) {
      if (e === t[n]) {
        return true
      }
    }
    return false
  }("->", t = e.match(n) || [])) {
    throw new Error("Function types are not supported. To validate that something is a function, you may use 'Function'.")
  }
  try {
    return l(t)
  } catch (r) {
    throw new Error(r.message + " - Remaining tokens: " + JSON.stringify(t) + " - Initial input: '" + e + "'")
  }
}
