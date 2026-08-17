/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2388
 */

var r = require(/* 1405 */"../984/1405")
function i(e) {
  var t
  var n
  function i(t, n) {
    try {
      var a = e[t](n)
      var /* [auto-meaningful-name] */a$value = a.value
      var c = a$value instanceof r
      Promise.resolve(c ? a$value.wrapped : a$value).then(function (e) {
        if (c) {
          i("return" === t ? "return" : "next", e)
        } else {
          o(a.done ? "return" : "normal", e)
        }
      }, function (e) {
        i("throw", e)
      })
    } catch (u) {
      o("throw", u)
    }
  }
  function o(e, r) {
    switch (e) {
      case "return":
        t.resolve({
          value: r,
          done: true
        })
        break
      case "throw":
        t.reject(r)
        break
      default:
        t.resolve({
          value: r,
          done: false
        })
    }
    if (t = t.next) {
      i(t.key, t.arg)
    } else {
      n = null
    }
  }
  this._invoke = function (e, r) {
    return new Promise(function (o, a) {
      var s = {
        key: e,
        arg: r,
        resolve: o,
        reject: a,
        next: null
      }
      if (n) {
        n = n.next = s
      } else {
        t = n = s
        i(e, r)
      }
    })
  }
  if ("function" !== typeof e.return) {
    this.return = undefined
  }
}
if ("function" === typeof Symbol && Symbol.asyncIterator) {
  i.prototype[Symbol.asyncIterator] = function () {
    return this
  }
}
i.prototype.next = function (e) {
  return this._invoke("next", e)
}
i.prototype.throw = function (e) {
  return this._invoke("throw", e)
}
i.prototype.return = function (e) {
  return this._invoke("return", e)
}
module.exports = i
