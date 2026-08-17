/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1122
 */

module.exports = {
  indexOf: function (e, t) {
    var n
    var /* [auto-meaningful-name] */e$length
    if (Array.prototype.indexOf) {
      return e.indexOf(t)
    }
    for (n = 0, e$length = e.length; n < e$length; n++) {
      if (e[n] === t) {
        return n
      }
    }
    return -1
  },
  forEach: function (e, t, n) {
    var r
    var /* [auto-meaningful-name] */e$length
    if (Array.prototype.forEach) {
      return e.forEach(t, n)
    }
    for (r = 0, e$length = e.length; r < e$length; r++) {
      t.call(n, e[r], r, e)
    }
  },
  trim: function (e) {
    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
  },
  spaceIndex: function (e) {
    var t = /\s|\n|\t/.exec(e)
    return t ? t.index : -1
  }
}
