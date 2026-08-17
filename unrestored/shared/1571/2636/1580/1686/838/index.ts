/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：838
 */

var r = require(/* 240 */"../../1282/240")
var o = require(/* 1085 */"../../1785/1246/1085")
var i = require(/* 256 */"../../1775/256")
var a = require(/* 636 */"../../1282/636")
var s = require(/* 947 */"../../1282/947")
var c = require(/* 835 */"../../1282/835")
var l = require(/* 1247 */"./1247")
var u = function (e, t) {
  this.stopped = e
  this.result = t
}
module.exports = function (e, t, n) {
  var d
  var p
  var f
  var h
  var m
  var /* [auto-meaningful-name] */d$next
  var _
  var v = n && n.that
  var b = !(!n || !n.AS_ENTRIES)
  var y = !(!n || !n.IS_ITERATOR)
  var E = !(!n || !n.INTERRUPTED)
  var O = a(t, v, 1 + b + E)
  var w = function (e) {
    if (d) {
      l(d, "normal", e)
    }
    return new u(true, e)
  }
  var C = function (e) {
    return b ? (r(e), E ? O(e[0], e[1], w) : O(e[0], e[1])) : E ? O(e, w) : O(e)
  }
  if (y) {
    d = e
  } else {
    if ("function" != typeof (p = c(e))) {
      throw TypeError("Target is not iterable")
    }
    if (o(p)) {
      for (f = 0, h = i(e.length); h > f; f++) {
        if ((m = C(e[f])) && m instanceof u) {
          return m
        }
      }
      return new u(false)
    }
    d = s(e, p)
  }
  for (d$next = d.next; !(_ = d$next.call(d)).done;) {
    try {
      m = C(_.value)
    } catch (T) {
      l(d, "throw", T)
    }
    if ("object" == typeof m && m && m instanceof u) {
      return m
    }
  }
  return new u(false)
}
