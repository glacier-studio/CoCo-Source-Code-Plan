/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1137
 */

"use strict"

module.exports = function e(t, n) {
  if (t === n) {
    return true
  }
  if (t && n && "object" == typeof t && "object" == typeof n) {
    if (t.constructor !== n.constructor) {
      return false
    }
    var r
    var i
    var o
    if (Array.isArray(t)) {
      if ((r = t.length) != n.length) {
        return false
      }
      for (i = r; 0 !== i--;) {
        if (!e(t[i], n[i])) {
          return false
        }
      }
      return true
    }
    if (t.constructor === RegExp) {
      return t.source === n.source && t.flags === n.flags
    }
    if (t.valueOf !== Object.prototype.valueOf) {
      return t.valueOf() === n.valueOf()
    }
    if (t.toString !== Object.prototype.toString) {
      return t.toString() === n.toString()
    }
    if ((r = (o = Object.keys(t)).length) !== Object.keys(n).length) {
      return false
    }
    for (i = r; 0 !== i--;) {
      if (!Object.prototype.hasOwnProperty.call(n, o[i])) {
        return false
      }
    }
    for (i = r; 0 !== i--;) {
      var a = o[i]
      if (!e(t[a], n[a])) {
        return false
      }
    }
    return true
  }
  return t !== t && n !== n
}
