/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1404
 */

module.exports = function (e, t) {
  var n = {}
  var r = false
  function i(n, i) {
    r = true
    i = new Promise(function (t) {
      t(e[n](i))
    })
    return {
      done: false,
      value: t(i)
    }
  }
  if ("function" === typeof Symbol && Symbol.iterator) {
    n[Symbol.iterator] = function () {
      return this
    }
  }
  n.next = function (e) {
    return r ? (r = false, e) : i("next", e)
  }
  if ("function" === typeof e.throw) {
    n.throw = function (e) {
      if (r) {
        r = false
        throw e
      }
      return i("throw", e)
    }
  }
  if ("function" === typeof e.return) {
    n.return = function (e) {
      return r ? (r = false, e) : i("return", e)
    }
  }
  return n
}
