/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1464
 */

var r = require(/* 1465 */"./1465")
function o(e, t) {
  if (undefined == e.length) {
    throw new Error(e.length + "/" + t)
  }
  for (var n = 0; n < e.length && 0 == e[n];) {
    n++
  }
  this.num = new Array(e.length - n + t)
  for (var r = 0; r < e.length - n; r++) {
    this.num[r] = e[r + n]
  }
}
o.prototype = {
  get: function (e) {
    return this.num[e]
  },
  getLength: function () {
    return this.num.length
  },
  multiply: function (e) {
    for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++) {
      for (var i = 0; i < e.getLength(); i++) {
        t[n + i] ^= r.gexp(r.glog(this.get(n)) + r.glog(e.get(i)))
      }
    }
    return new o(t, 0)
  },
  mod: function (e) {
    if (this.getLength() - e.getLength() < 0) {
      return this
    }
    for (var t = r.glog(this.get(0)) - r.glog(e.get(0)), n = new Array(this.getLength()), i = 0; i < this.getLength(); i++) {
      n[i] = this.get(i)
    }
    for (i = 0; i < e.getLength(); i++) {
      n[i] ^= r.gexp(r.glog(e.get(i)) + t)
    }
    return new o(n, 0).mod(e)
  }
}
module.exports = o
