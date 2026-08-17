/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2527
 */

var r = require(/* 1178 */"../../../../../../../../../../../253/2568/2569/2570/994/2490/1178/index")
function i(e, t) {
  if ("function" != typeof e || null != t && "function" != typeof t) {
    throw new TypeError("Expected a function")
  }
  var n = function n() {
    var r = arguments
    var i = t ? t.apply(this, r) : r[0]
    var /* [auto-meaningful-name] */n$cache = n.cache
    if (n$cache.has(i)) {
      return n$cache.get(i)
    }
    var a = e.apply(this, r)
    n.cache = n$cache.set(i, a) || n$cache
    return a
  }
  n.cache = new (i.Cache || r)()
  return n
}
i.Cache = r
module.exports = i
