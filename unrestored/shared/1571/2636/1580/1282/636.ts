/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：636
 */

var r = require(/* 443 */"../1774/443")
module.exports = function (e, t, n) {
  r(e)
  if (undefined === t) {
    return e
  }
  switch (n) {
    case 0:
      return function () {
        return e.call(t)
      }
    case 1:
      return function (n) {
        return e.call(t, n)
      }
    case 2:
      return function (n, r) {
        return e.call(t, n, r)
      }
    case 3:
      return function (n, r, o) {
        return e.call(t, n, r, o)
      }
  }
  return function () {
    return e.apply(t, arguments)
  }
}
