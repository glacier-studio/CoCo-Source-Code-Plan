/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2549
 */

var r = require(/* 1182 */"./1182/index")
var i = require(/* 2550 */"./2550")
var o = require(/* 2551 */"./2551")
var a = require(/* 2552 */"./2552")
var s = require(/* 1457 */"../../../../../../253/2568/2569/2570/2571/1457")
module.exports = function (e, t, n) {
  var /* [auto-meaningful-name] */e$constructor = e.constructor
  switch (t) {
    case "[object ArrayBuffer]":
      return r(e)
    case "[object Boolean]":
    case "[object Date]":
      return new e$constructor(+e)
    case "[object DataView]":
      return i(e, n)
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return s(e, n)
    case "[object Map]":
      return new e$constructor()
    case "[object Number]":
    case "[object String]":
      return new e$constructor(e)
    case "[object RegExp]":
      return o(e)
    case "[object Set]":
      return new e$constructor()
    case "[object Symbol]":
      return a(e)
  }
}
