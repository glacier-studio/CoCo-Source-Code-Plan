/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2227
 */

"use strict"

var r = require(/* 573 */"../../../1058/1393/573")
var i = require(/* 2230 */"./2230")
var o = require(/* 2233 */"./2233/index")
var a = require(/* 1131 */"./1131")
var s = require(/* 978 */"./978")
var /* [auto-meaningful-name] */require_1358_$_1358$Scope = require(/* 1358 */"./1358").Scope
var /* [auto-meaningful-name] */require_2237_$_2237$version = require(/* 2237 */"./2237").version
module.exports = {
  version: require_2237_$_2237$version,
  Reference: a,
  Variable: s,
  Scope: require_1358_$_1358$Scope,
  ScopeManager: i,
  analyze: function (e, t) {
    var n = function e(t, n) {
      function r(e) {
        return "object" === typeof e && e instanceof Object && !(e instanceof Array) && !(e instanceof RegExp)
      }
      for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
        var o = n[i]
        if (r(o)) {
          if (r(t[i])) {
            e(t[i], o)
          } else {
            t[i] = e({}, o)
          }
        } else {
          t[i] = o
        }
      }
      return t
    }({
      optimistic: false,
      directive: false,
      nodejsScope: false,
      impliedStrict: false,
      sourceType: "script",
      ecmaVersion: 5,
      childVisitorKeys: null,
      fallback: "iteration"
    }, t)
    var a = new i(n)
    new o(n, a).visit(e)
    r(null === a.__currentScope, "currentScope should be null.")
    return a
  }
}
