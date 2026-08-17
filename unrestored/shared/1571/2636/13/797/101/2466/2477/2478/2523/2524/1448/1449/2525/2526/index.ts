/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2526
 */

var r = require(/* 2527 */"./2527")
module.exports = function (e) {
  var t = r(e, function (e) {
    if (500 === t$cache.size) {
      t$cache.clear()
    }
    return e
  })
  var /* [auto-meaningful-name] */t$cache = t.cache
  return t
}
