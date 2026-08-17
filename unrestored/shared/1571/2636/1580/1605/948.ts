/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：948
 */

var r = require(/* 246 */"../1782/246/index")("iterator")
var o = false
try {
  var i = 0
  var a = {
    next: function () {
      return {
        done: !!i++
      }
    },
    return: function () {
      o = true
    }
  }
  a[r] = function () {
    return this
  }
  Array.from(a, function () {
    throw 2
  })
} catch (s) {}
module.exports = function (e, t) {
  if (!t && !o) {
    return false
  }
  var n = false
  try {
    var i = {}
    i[r] = function () {
      return {
        next: function () {
          return {
            done: n = true
          }
        }
      }
    }
    e(i)
  } catch (s) {}
  return n
}
