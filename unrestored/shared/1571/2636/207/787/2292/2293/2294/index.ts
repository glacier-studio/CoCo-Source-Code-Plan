/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2294
 */

"use strict"

var r = require(/* 180 */"../../../180")
var i = require(/* 204 */"../../../204")
var o = require(/* 573 */"../../../../../1058/1393/573")
var /* [auto-meaningful-name] */require_1374_$$_1374$isCommentToken = require(/* 1374 */"../1374").isCommentToken
var s = require(/* 2295 */"./2295/index")
var c = require(/* 1140 */"./1140/index")
var u = require(/* 2302 */"./2302")
var l = require(/* 854 */"./854")
var f = Symbol("tokens")
var d = Symbol("comments")
var h = Symbol("indexMap")
function p(e, t, n, r, i, a, s) {
  var c = false
  var u = 0
  var l = null
  if ("number" === typeof s) {
    u = 0 | s
  } else {
    if ("function" === typeof s) {
      l = s
    } else {
      if (s) {
        c = !!s.includeComments
        u = 0 | s.skip
        l = s.filter || null
      }
    }
  }
  o(u >= 0, "options.skip should be zero or a positive integer.")
  o(!l || "function" === typeof l, "options.filter should be a function.")
  return e.createCursor(t, n, r, i, a, c, l, u, -1)
}
function _(e, t, n, r, i, a, s) {
  var c = false
  var u = 0
  var l = false
  var f = null
  if ("number" === typeof s) {
    u = 0 | s
    l = true
  } else {
    if ("function" === typeof s) {
      f = s
    } else {
      if (s) {
        c = !!s.includeComments
        u = 0 | s.count
        l = "number" === typeof s.count
        f = s.filter || null
      }
    }
  }
  o(u >= 0, "options.count should be zero or a positive integer.")
  o(!f || "function" === typeof f, "options.filter should be a function.")
  return e.createCursor(t, n, r, i, a, c, f, 0, l ? u : -1)
}
function A(e, t, n, r, i, o, a) {
  return "undefined" === typeof o && "undefined" === typeof a ? new c(e, t, n, r, i) : "number" === typeof o || "undefined" === typeof o ? new u(e, t, n, r, i, 0 | o, 0 | a) : _(s.forward, e, t, n, r, i, o)
}
function g(e) {
  for (var t = [], n = e.getOneToken(); n && require_1374_$$_1374$isCommentToken(n);) {
    t.push(n)
    n = e.getOneToken()
  }
  return t
}
module.exports = function () {
  function e(t, n) {
    r(this, e)
    this[f] = t
    this[d] = n
    this[h] = function (e, t) {
      for (var n = Object.create(null), r = 0, i = 0, o = 0, a = null; r < e.length || i < t.length;) {
        for (o = i < t.length ? t[i].range[0] : Number.MAX_SAFE_INTEGER; r < e.length && (a = e[r].range)[0] < o;) {
          n[a[0]] = r
          n[a[1] - 1] = r
          r += 1
        }
        for (o = r < e.length ? e[r].range[0] : Number.MAX_SAFE_INTEGER; i < t.length && (a = t[i].range)[0] < o;) {
          n[a[0]] = r
          n[a[1] - 1] = r
          i += 1
        }
      }
      return n
    }(t, n)
  }
  i(e, [
    {
      key: "getTokenByRangeStart",
      value: function (e, t) {
        var n = t && t.includeComments
        var r = s.forward.createBaseCursor(this[f], this[d], this[h], e, -1, n).getOneToken()
        return r && r.range[0] === e ? r : null
      }
    }, {
      key: "getFirstToken",
      value: function (e, t) {
        return p(s.forward, this[f], this[d], this[h], e.range[0], e.range[1], t).getOneToken()
      }
    }, {
      key: "getLastToken",
      value: function (e, t) {
        return p(s.backward, this[f], this[d], this[h], e.range[0], e.range[1], t).getOneToken()
      }
    }, {
      key: "getTokenBefore",
      value: function (e, t) {
        return p(s.backward, this[f], this[d], this[h], -1, e.range[0], t).getOneToken()
      }
    }, {
      key: "getTokenAfter",
      value: function (e, t) {
        return p(s.forward, this[f], this[d], this[h], e.range[1], -1, t).getOneToken()
      }
    }, {
      key: "getFirstTokenBetween",
      value: function (e, t, n) {
        return p(s.forward, this[f], this[d], this[h], e.range[1], t.range[0], n).getOneToken()
      }
    }, {
      key: "getLastTokenBetween",
      value: function (e, t, n) {
        return p(s.backward, this[f], this[d], this[h], e.range[1], t.range[0], n).getOneToken()
      }
    }, {
      key: "getTokenOrCommentBefore",
      value: function (e, t) {
        return this.getTokenBefore(e, {
          includeComments: true,
          skip: t
        })
      }
    }, {
      key: "getTokenOrCommentAfter",
      value: function (e, t) {
        return this.getTokenAfter(e, {
          includeComments: true,
          skip: t
        })
      }
    }, {
      key: "getFirstTokens",
      value: function (e, t) {
        return _(s.forward, this[f], this[d], this[h], e.range[0], e.range[1], t).getAllTokens()
      }
    }, {
      key: "getLastTokens",
      value: function (e, t) {
        return _(s.backward, this[f], this[d], this[h], e.range[0], e.range[1], t).getAllTokens().reverse()
      }
    }, {
      key: "getTokensBefore",
      value: function (e, t) {
        return _(s.backward, this[f], this[d], this[h], -1, e.range[0], t).getAllTokens().reverse()
      }
    }, {
      key: "getTokensAfter",
      value: function (e, t) {
        return _(s.forward, this[f], this[d], this[h], e.range[1], -1, t).getAllTokens()
      }
    }, {
      key: "getFirstTokensBetween",
      value: function (e, t, n) {
        return _(s.forward, this[f], this[d], this[h], e.range[1], t.range[0], n).getAllTokens()
      }
    }, {
      key: "getLastTokensBetween",
      value: function (e, t, n) {
        return _(s.backward, this[f], this[d], this[h], e.range[1], t.range[0], n).getAllTokens().reverse()
      }
    }, {
      key: "getTokens",
      value: function (e, t, n) {
        return A(this[f], this[d], this[h], e.range[0], e.range[1], t, n).getAllTokens()
      }
    }, {
      key: "getTokensBetween",
      value: function (e, t, n) {
        return A(this[f], this[d], this[h], e.range[1], t.range[0], n, n).getAllTokens()
      }
    }, {
      key: "commentsExistBetween",
      value: function (e, t) {
        var n = l.search(this[d], e.range[1])
        return n < this[d].length && this[d][n].range[1] <= t.range[0]
      }
    }, {
      key: "getCommentsBefore",
      value: function (e) {
        return g(_(s.backward, this[f], this[d], this[h], -1, e.range[0], {
          includeComments: true
        })).reverse()
      }
    }, {
      key: "getCommentsAfter",
      value: function (e) {
        return g(_(s.forward, this[f], this[d], this[h], e.range[1], -1, {
          includeComments: true
        }))
      }
    }, {
      key: "getCommentsInside",
      value: function (e) {
        return this.getTokens(e, {
          includeComments: true,
          filter: require_1374_$$_1374$isCommentToken
        })
      }
    }
  ])
  return e
}()
