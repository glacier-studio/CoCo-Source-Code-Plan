/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：922
 */

"use strict"

function r() {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
    t[n] = arguments[n]
  }
  return t.reduce(function (e, t) {
    return null == t ? e : function () {
      for (var /* [auto-meaningful-name] */arguments$length1 = arguments.length, r = new Array(arguments$length1), i = 0; i < arguments$length1; i++) {
        r[i] = arguments[i]
      }
      e.apply(this, r)
      t.apply(this, r)
    }
  }, function () {})
}
export { r as a }
export default r
