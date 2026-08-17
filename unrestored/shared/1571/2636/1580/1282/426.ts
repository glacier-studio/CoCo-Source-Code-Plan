/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：426
 */

var r
var o
var i
var a = require(/* 1238 */"../1778/1238")
var s = require(/* 194 */"../1648/194")
var c = require(/* 231 */"./231")
var l = require(/* 425 */"../1780/425")
var u = require(/* 334 */"../1648/334")
var d = require(/* 1076 */"../1686/1079/1076")
var p = require(/* 946 */"../1581/946")
var f = require(/* 827 */"../1581/827")
var /* [auto-meaningful-name] */s$WeakMap = s.WeakMap
if (a || d.state) {
  var m = d.state || (d.state = new s$WeakMap())
  var /* [auto-meaningful-name] */m$get = m.get
  var /* [auto-meaningful-name] */m$has = m.has
  var /* [auto-meaningful-name] */m$set = m.set
  r = function (e, t) {
    if (m$has.call(m, e)) {
      throw new TypeError("Object already initialized")
    }
    t.facade = e
    m$set.call(m, e, t)
    return t
  }
  o = function (e) {
    return m$get.call(m, e) || {}
  }
  i = function (e) {
    return m$has.call(m, e)
  }
} else {
  var b = p("state")
  f[b] = true
  r = function (e, t) {
    if (u(e, b)) {
      throw new TypeError("Object already initialized")
    }
    t.facade = e
    l(e, b, t)
    return t
  }
  o = function (e) {
    return u(e, b) ? e[b] : {}
  }
  i = function (e) {
    return u(e, b)
  }
}
module.exports = {
  set: r,
  get: o,
  has: i,
  enforce: function (e) {
    return i(e) ? o(e) : r(e, {})
  },
  getterFor: function (e) {
    return function (t) {
      var n
      if (!c(t) || (n = o(t)).type !== e) {
        throw TypeError("Incompatible receiver, " + e + " required")
      }
      return n
    }
  }
}
