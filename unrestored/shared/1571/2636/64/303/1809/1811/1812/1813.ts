/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1813
 */

"use strict"

var r
var i = "object" === typeof window && (window.crypto || window.msCrypto)
r = i && i.getRandomValues ? function (e) {
  return i.getRandomValues(new Uint8Array(e))
} : function (e) {
  for (var t = [], n = 0; n < e; n++) {
    t.push(Math.floor(256 * Math.random()))
  }
  return t
}
module.exports = r
