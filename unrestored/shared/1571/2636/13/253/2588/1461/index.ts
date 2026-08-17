/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1461
 */

var r = require(/* 479 */"../../2583/2584/479")
var i = require(/* 2585 */"./2585/index")
var o = require(/* 2586 */"./2586/index")
var /* [auto-meaningful-name] */Math$max = Math.max
var /* [auto-meaningful-name] */Math$min = Math.min
module.exports = function (e, t, n) {
  var c
  var u
  var l
  var f
  var d
  var h
  var p = 0
  var _ = false
  var A = false
  var g = true
  if ("function" != typeof e) {
    throw new TypeError("Expected a function")
  }
  function v(t) {
    var n = c
    var r = u
    c = u = undefined
    p = t
    return f = e.apply(r, n)
  }
  function m(e) {
    p = e
    d = setTimeout(b, t)
    return _ ? v(e) : f
  }
  function y(e) {
    var n = e - h
    return undefined === h || n >= t || n < 0 || A && e - p >= l
  }
  function b() {
    var e = i()
    if (y(e)) {
      return w(e)
    }
    d = setTimeout(b, function (e) {
      var n = t - (e - h)
      return A ? Math$min(n, l - (e - p)) : n
    }(e))
  }
  function w(e) {
    d = undefined
    return g && c ? v(e) : (c = u = undefined, f)
  }
  function E() {
    var e = i()
    var n = y(e)
    c = arguments
    u = this
    h = e
    if (n) {
      if (undefined === d) {
        return m(h)
      }
      if (A) {
        clearTimeout(d)
        d = setTimeout(b, t)
        return v(h)
      }
    }
    if (undefined === d) {
      d = setTimeout(b, t)
    }
    return f
  }
  t = o(t) || 0
  if (r(n)) {
    _ = !!n.leading
    l = (A = "maxWait" in n) ? Math$max(o(n.maxWait) || 0, t) : l
    g = "trailing" in n ? !!n.trailing : g
  }
  E.cancel = function () {
    if (undefined !== d) {
      clearTimeout(d)
    }
    p = 0
    c = h = u = d = undefined
  }
  E.flush = function () {
    return undefined === d ? f : w(i())
  }
  return E
}
