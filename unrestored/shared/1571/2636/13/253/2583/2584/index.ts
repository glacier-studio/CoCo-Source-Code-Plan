/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2584
 */

var r = require(/* 1461 */"../../2588/1461/index")
var i = require(/* 479 */"./479")
module.exports = function (e, t, n) {
  var o = true
  var a = true
  if ("function" != typeof e) {
    throw new TypeError("Expected a function")
  }
  if (i(n)) {
    o = "leading" in n ? !!n.leading : o
    a = "trailing" in n ? !!n.trailing : a
  }
  return r(e, t, {
    leading: o,
    maxWait: t,
    trailing: a
  })
}
