/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2318
 */

var FieldImage
var /* [auto-meaningful-name] */t$any
var /* [auto-meaningful-name] */t$all
var /* [auto-meaningful-name] */t$isItNaN
var a
var s
var c
var /* [auto-meaningful-name] */$toString = {}.toString
function l(e, t) {
  if (!(e instanceof Object)) {
    return false
  }
  switch (t.structure) {
    case "fields":
      return function (e, t) {
        var n
        var r
        var i
        var o
        var a
        var s
        var c
        for (i in n = {}, r = 0, e) {
          n[i] = true
          r++
        }
        for (a in o = 0, s = t.of) {
          c = s[a]
          if (!d(e[a], c)) {
            return false
          }
          if (n[a]) {
            o++
          }
        }
        return t.subset || r === o
      }(e, t)
    case "array":
      return function (e, t) {
        return t$all(function (e) {
          return d(e, t.of)
        }, e)
      }(e, t)
    case "tuple":
      return function (e, t) {
        var n
        var r
        var i
        var /* [auto-meaningful-name] */IT$of$length
        var a
        for (n = 0, r = 0, IT$of$length = (i = t.of).length; r < IT$of$length; ++r) {
          a = i[r]
          if (!d(e[n], a)) {
            return false
          }
          n++
        }
        return e.length <= n
      }(e, t)
  }
}
function f(e, t) {
  var /* [auto-meaningful-name] */t$type
  var /* [auto-meaningful-name] */t$structure
  var i
  var o
  t$type = t.type
  t$structure = t.structure
  if (t$type) {
    return "*" === t$type || ((i = c[t$type] || a[t$type]) ? i.typeOf === $toString.call(e).slice(8, -1) && i.validate(e) : t$type === $toString.call(e).slice(8, -1) && (!t$structure || l(e, t)))
  }
  if (t$structure) {
    return (!(o = s[t$structure]) || o === $toString.call(e).slice(8, -1)) && l(e, t)
  }
  throw new Error("No type defined. Input: " + e + ".")
}
function d(e, t) {
  if ("Array" !== $toString.call(t).slice(8, -1)) {
    throw new Error("Types must be in an array. Input: " + e + ".")
  }
  return t$any(function (t) {
    return f(e, t)
  }, t)
}
FieldImage = require(/* 1377 */"../2310/1377/index")
t$any = FieldImage.any
t$all = FieldImage.all
t$isItNaN = FieldImage.isItNaN
a = {
  Number: {
    typeOf: "Number",
    validate: function (e) {
      return !t$isItNaN(e)
    }
  },
  NaN: {
    typeOf: "Number",
    validate: t$isItNaN
  },
  Int: {
    typeOf: "Number",
    validate: function (e) {
      return !t$isItNaN(e) && e % 1 === 0
    }
  },
  Float: {
    typeOf: "Number",
    validate: function (e) {
      return !t$isItNaN(e)
    }
  },
  Date: {
    typeOf: "Date",
    validate: function (e) {
      return !t$isItNaN(e.getTime())
    }
  }
}
s = {
  array: "Array",
  tuple: "Array"
}
module.exports = function (e, t, n) {
  if (null == n) {
    n = {}
  }
  c = n.customTypes || {}
  return d(t, e)
}
