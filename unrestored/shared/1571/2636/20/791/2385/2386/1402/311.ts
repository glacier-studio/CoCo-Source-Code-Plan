/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：311
 */

"use strict"

var r = require(/* 180 */"../../../../../207/787/180")
var i = require(/* 283 */"../../../../../1058/1393/1143/283/index")
var o = require(/* 284 */"../../../../../1058/1393/1143/284/index")
var a = function (e) {
  i(n, e)
  var t = o(n)
  function n(e) {
    var i
    r(this, n)
    if (!Array.isArray(e)) {
      throw new TypeError("Expected input to be an Array, got ".concat(typeof e))
    }
    for (var o = "", a = 0; a < e.length; a++) {
      o += "    ".concat(e[a].stack, "\n")
    }
    (i = t.call(this, o)).name = "AggregateError"
    i.errors = e
    return i
  }
  return n
}(require(/* 974 */"../../../2393/2395/989/1162/974/index")(Error))
module.exports = {
  AggregateError: a,
  ArrayIsArray: function (e) {
    return Array.isArray(e)
  },
  ArrayPrototypeIncludes: function (e, t) {
    return e.includes(t)
  },
  ArrayPrototypeIndexOf: function (e, t) {
    return e.indexOf(t)
  },
  ArrayPrototypeJoin: function (e, t) {
    return e.join(t)
  },
  ArrayPrototypeMap: function (e, t) {
    return e.map(t)
  },
  ArrayPrototypePop: function (e, t) {
    return e.pop(t)
  },
  ArrayPrototypePush: function (e, t) {
    return e.push(t)
  },
  ArrayPrototypeSlice: function (e, t, n) {
    return e.slice(t, n)
  },
  Error: Error,
  FunctionPrototypeCall: function (e, t) {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), i = 2; i < arguments$length; i++) {
      r[i - 2] = arguments[i]
    }
    return e.call.apply(e, [t].concat(r))
  },
  FunctionPrototypeSymbolHasInstance: function (e, t) {
    return Function.prototype[Symbol.hasInstance].call(e, t)
  },
  MathFloor: Math.floor,
  Number: Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties: function (e, t) {
    return Object.defineProperties(e, t)
  },
  ObjectDefineProperty: function (e, t, n) {
    return Object.defineProperty(e, t, n)
  },
  ObjectGetOwnPropertyDescriptor: function (e, t) {
    return Object.getOwnPropertyDescriptor(e, t)
  },
  ObjectKeys: function (e) {
    return Object.keys(e)
  },
  ObjectSetPrototypeOf: function (e, t) {
    return Object.setPrototypeOf(e, t)
  },
  Promise: Promise,
  PromisePrototypeCatch: function (e, t) {
    return e.catch(t)
  },
  PromisePrototypeThen: function (e, t, n) {
    return e.then(t, n)
  },
  PromiseReject: function (e) {
    return Promise.reject(e)
  },
  PromiseResolve: function (e) {
    return Promise.resolve(e)
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest: function (e, t) {
    return e.test(t)
  },
  SafeSet: Set,
  String: String,
  StringPrototypeSlice: function (e, t, n) {
    return e.slice(t, n)
  },
  StringPrototypeToLowerCase: function (e) {
    return e.toLowerCase()
  },
  StringPrototypeToUpperCase: function (e) {
    return e.toUpperCase()
  },
  StringPrototypeTrim: function (e) {
    return e.trim()
  },
  Symbol: Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
  SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
  TypedArrayPrototypeSet: function (e, t, n) {
    return e.set(t, n)
  },
  Boolean: Boolean,
  Uint8Array: Uint8Array
}
