/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2474
 */

var r = require(/* 727 */"../../../../../../797/101/2466/2467/727/index")
var i = require(/* 1171 */"../../../../../../797/101/2466/2477/2536/771/1171")
var o = require(/* 538 */"../../../../../../797/101/2466/2467/538")
var a = {}
a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = true
a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = false
module.exports = function (e) {
  return o(e) && i(e.length) && !!a[r(e)]
}
