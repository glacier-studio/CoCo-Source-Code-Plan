/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1584
 */

"use strict"

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 271 */"../1648/271")
var i = require(/* 194 */"../1648/194")
var a = require(/* 334 */"../1648/334")
var s = require(/* 231 */"../1282/231")
var /* [auto-meaningful-name] */require_300_$$_1648_300_index$f = require(/* 300 */"../1648/300/index").f
var l = require(/* 1239 */"./1239")
var /* [auto-meaningful-name] */i$Symbol = i.Symbol
if (o && "function" == typeof i$Symbol && (!("description" in i$Symbol.prototype) || undefined !== i$Symbol().description)) {
  var d = {}
  var p = function () {
    var e = arguments.length < 1 || undefined === arguments[0] ? undefined : String(arguments[0])
    var t = this instanceof p ? new i$Symbol(e) : undefined === e ? i$Symbol() : i$Symbol(e)
    if ("" === e) {
      d[t] = true
    }
    return t
  }
  l(p, i$Symbol)
  var f = p.prototype = i$Symbol.prototype
  f.constructor = p
  var /* [auto-meaningful-name] */f$toString = f.toString
  var m = "Symbol(test)" == String(i$Symbol("test"))
  var g = /^Symbol\((.*)\)[^)]+$/
  require_300_$$_1648_300_index$f(f, "description", {
    configurable: true,
    get: function () {
      var e = s(this) ? this.valueOf() : this
      var t = f$toString.call(e)
      if (a(d, e)) {
        return ""
      }
      var n = m ? t.slice(7, -1) : t.replace(g, "$1")
      return "" === n ? undefined : n
    }
  })
  r({
    global: true,
    forced: true
  }, {
    Symbol: p
  })
}
