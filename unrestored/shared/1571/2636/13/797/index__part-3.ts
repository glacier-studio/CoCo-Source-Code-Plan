/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：797__part-3
 */

"use strict"

import { Z, ee, te } from "./index__part-2"
import * as /* [auto-meaningful-name] */Module_325 from /* 325 */"./325"
import * as /* [auto-meaningful-name] */Module_1505 from /* 1505 */"./1505"
var /* [auto-meaningful-name] */Module_325$a$Uint8Array = Module_325.a.Uint8Array
var Qe = function (e) {
  var t = new e.constructor(e.byteLength)
  new Module_325$a$Uint8Array(t).set(new Module_325$a$Uint8Array(e))
  return t
}
var We = function (e, t) {
  var n = t ? Qe(e.buffer) : e.buffer
  return new e.constructor(n, e.byteOffset, e.length)
}
var Ke = function (e, t) {
  var n = -1
  var /* [auto-meaningful-name] */e$length = e.length
  for (t || (t = Array(e$length)); ++n < e$length;) {
    t[n] = e[n]
  }
  return t
}
var /* [auto-meaningful-name] */Object$create = Object.create
var Ye = function () {
  function e() {}
  return function (t) {
    if (!ee(t)) {
      return {}
    }
    if (Object$create) {
      return Object$create(t)
    }
    e.prototype = t
    var n = new e()
    e.prototype = undefined
    return n
  }
}()
var qe = function (e, t) {
  return function (n) {
    return e(t(n))
  }
}
var $e = qe(Object.getPrototypeOf, Object)
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var Ze = function (e) {
  var t = e && e.constructor
  return e === ("function" == typeof t && t.prototype || Object$prototype)
}
var et = function (e) {
  return "function" != typeof e.constructor || Ze(e) ? {} : Ye($e(e))
}
var tt = function (e) {
  return null != e && "object" == typeof e
}
var nt = function (e) {
  return tt(e) && "[object Arguments]" == Z(e)
}
var /* [auto-meaningful-name] */Object$prototype1 = Object.prototype
var /* [auto-meaningful-name] */Object$prototype1$hasOwnProperty = Object$prototype1.hasOwnProperty
var /* [auto-meaningful-name] */Object$prototype1$propertyIsEnumerable = Object$prototype1.propertyIsEnumerable
var at = nt(function () {
  return arguments
}()) ? nt : function (e) {
    return tt(e) && Object$prototype1$hasOwnProperty.call(e, "callee") && !Object$prototype1$propertyIsEnumerable.call(e, "callee")
  }
var /* [auto-meaningful-name] */Array$isArray = Array.isArray
var ct = function (e) {
  return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}
var ut = function (e) {
  return null != e && ct(e.length) && !te(e)
}
var lt = function (e) {
  return tt(e) && ut(e)
}
export { Module_325$a$Uint8Array as ze }
export { We }
export { Ke }
export { qe }
export { $e }
export { Ze }
export { et }
export { tt }
export { at }
export { Array$isArray as st }
export { ct }
export { ut }
export { lt }
