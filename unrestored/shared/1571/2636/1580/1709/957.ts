/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：957
 */

"use strict"

var r = require(/* 240 */"../1282/240")
module.exports = function () {
  var e = r(this)
  var t = ""
  if (e.global) {
    t += "g"
  }
  if (e.ignoreCase) {
    t += "i"
  }
  if (e.multiline) {
    t += "m"
  }
  if (e.dotAll) {
    t += "s"
  }
  if (e.unicode) {
    t += "u"
  }
  if (e.sticky) {
    t += "y"
  }
  return t
}
