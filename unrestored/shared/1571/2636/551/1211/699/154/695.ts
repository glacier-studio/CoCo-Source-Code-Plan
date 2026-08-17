/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：695
 */

"use strict"

var r = require(/* 241 */"../../../../241/index")
var i = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
}
var o = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
}
var a = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
}
var s = {}
function c(e) {
  return r.isMemo(e) ? a : s[e.$$typeof] || i
}
s[r.ForwardRef] = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
}
s[r.Memo] = a
var /* [auto-meaningful-name] */Object$defineProperty = Object.defineProperty
var /* [auto-meaningful-name] */Object$getOwnPropertyNames = Object.getOwnPropertyNames
var /* [auto-meaningful-name] */Object$getOwnPropertySymbols = Object.getOwnPropertySymbols
var /* [auto-meaningful-name] */Object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
var /* [auto-meaningful-name] */Object$getPrototypeOf = Object.getPrototypeOf
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
module.exports = function e(t, n, r) {
  if ("string" !== typeof n) {
    if (Object$prototype) {
      var i = Object$getPrototypeOf(n)
      if (i && i !== Object$prototype) {
        e(t, i, r)
      }
    }
    var a = Object$getOwnPropertyNames(n)
    if (Object$getOwnPropertySymbols) {
      a = a.concat(Object$getOwnPropertySymbols(n))
    }
    for (var s = c(t), _ = c(n), A = 0; A < a.length; ++A) {
      var g = a[A]
      if (!o[g] && (!r || !r[g]) && (!_ || !_[g]) && (!s || !s[g])) {
        var v = Object$getOwnPropertyDescriptor(n, g)
        try {
          Object$defineProperty(t, g, v)
        } catch (m) {}
      }
    }
  }
  return t
}
