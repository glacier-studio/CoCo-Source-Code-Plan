/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：965
 */

"use strict"

var r
var i
var o
var a = require(/* 1810 */"./1810")
var /* [auto-meaningful-name] */_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"
function c() {
  o = false
}
function u(e) {
  if (e) {
    if (e !== r) {
      if (e.length !== _0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_.length) {
        throw new Error("Custom alphabet for shortid must be " + _0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_.length + " unique characters. You submitted " + e.length + " characters: " + e)
      }
      var t = e.split("").filter(function (e, t, n) {
        return t !== n.lastIndexOf(e)
      })
      if (t.length) {
        throw new Error("Custom alphabet for shortid must be " + _0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_.length + " unique characters. These characters were not unique: " + t.join(", "))
      }
      r = e
      c()
    }
  } else if (r !== _0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_) {
    r = _0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_
    c()
  }
}
function l() {
  return o || (o = function () {
    if (!r) {
      u(_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_)
    }
    for (var e, t = r.split(""), n = [], i = a.nextValue(); t.length > 0;) {
      i = a.nextValue()
      e = Math.floor(i * t.length)
      n.push(t.splice(e, 1)[0])
    }
    return n.join("")
  }())
}
module.exports = {
  get: function () {
    return r || _0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_
  },
  characters: function (e) {
    u(e)
    return r
  },
  seed: function (e) {
    a.seed(e)
    if (i !== e) {
      c()
      i = e
    }
  },
  lookup: function (e) {
    return l()[e]
  },
  shuffled: l
}
