/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2468
 */

var r = require(/* 861 */"./861")
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object$prototype.hasOwnProperty
var /* [auto-meaningful-name] */Object$prototype$toString = Object$prototype.toString
var s = r ? r.toStringTag : undefined
module.exports = function (e) {
  var t = Object$prototype$hasOwnProperty.call(e, s)
  var n = e[s]
  try {
    e[s] = undefined
    var r = true
  } catch (c) {}
  var i = Object$prototype$toString.call(e)
  if (r) {
    if (t) {
      e[s] = n
    } else {
      delete e[s]
    }
  }
  return i
}
