/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1809
 */

"use strict"

var r = require(/* 965 */"./965/index")
var i = require(/* 1811 */"./1811/index")
var o = require(/* 1815 */"./1815")
var a = require(/* 1816 */"./1816") || 0
function s() {
  return i(a)
}
module.exports = s
module.exports.generate = s
module.exports.seed = function (t) {
  r.seed(t)
  return module.exports
}
module.exports.worker = function (t) {
  a = t
  return module.exports
}
module.exports.characters = function (e) {
  if (undefined !== e) {
    r.characters(e)
  }
  return r.shuffled()
}
module.exports.isValid = o
