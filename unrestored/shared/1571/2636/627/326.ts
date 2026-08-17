/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：326
 */

"use strict"

function r(e, t, n, r, i, o, a) {
  try {
    var s = e[o](a)
    var /* [auto-meaningful-name] */s$value = s.value
  } catch (u) {
    return void n(u)
  }
  if (s.done) {
    t(s$value)
  } else {
    Promise.resolve(s$value).then(r, i)
  }
}
function i(e) {
  return function () {
    var t = this
    var n = arguments
    return new Promise(function (i, o) {
      var a = e.apply(t, n)
      function s(e) {
        r(a, i, o, s, c, "next", e)
      }
      function c(e) {
        r(a, i, o, s, c, "throw", e)
      }
      s(undefined)
    })
  }
}
export { i as a }
export default i
