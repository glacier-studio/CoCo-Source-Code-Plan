/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2525
 */

var r = require(/* 2526 */"./2526/index")
var i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
var o = /\\(\\)?/g
var a = r(function (e) {
  var t = []
  if (46 === e.charCodeAt(0)) {
    t.push("")
  }
  e.replace(i, function (e, n, r, i) {
    t.push(r ? i.replace(o, "$1") : n || e)
  })
  return t
})
module.exports = a
