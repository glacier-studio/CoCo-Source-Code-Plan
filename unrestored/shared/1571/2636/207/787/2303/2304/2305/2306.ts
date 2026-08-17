/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2306
 */

"use strict"

var r = require(/* 180 */"../../../180")
var i = require(/* 204 */"../../../204")
var o = require(/* 573 */"../../../../../1058/1393/573")
var a = require(/* 1141 */"../../1141")
function s(e) {
  return e.reachable
}
function c(e, t, n, r) {
  for (var /* [auto-meaningful-name] */e$segmentsList = e.segmentsList, o = t >= 0 ? t : e$segmentsList.length + t, a = n >= 0 ? n : e$segmentsList.length + n, s = [], c = 0; c < e.count; ++c) {
    for (var u = [], l = o; l <= a; ++l) {
      u.push(e$segmentsList[l][c])
    }
    s.push(r(e.idGenerator.next(), u))
  }
  return s
}
function u(e, t) {
  for (var n = t; n.length > e.count;) {
    for (var r = [], i = 0, o = n.length / 2 | 0; i < o; ++i) {
      r.push(a.newNext(e.idGenerator.next(), [n[i], n[i + o]]))
    }
    n = r
  }
  return n
}
var l = function () {
  function e(t, n, i) {
    r(this, e)
    this.idGenerator = t
    this.upper = n
    this.count = i
    this.segmentsList = []
  }
  i(e, [
    {
      key: "head",
      get: function () {
        var /* [auto-meaningful-name] */this$segmentsList = this.segmentsList
        return 0 === this$segmentsList.length ? [] : this$segmentsList[this$segmentsList.length - 1]
      }
    }, {
      key: "empty",
      get: function () {
        return 0 === this.segmentsList.length
      }
    }, {
      key: "reachable",
      get: function () {
        var /* [auto-meaningful-name] */this$head = this.head
        return this$head.length > 0 && this$head.some(s)
      }
    }, {
      key: "makeNext",
      value: function (e, t) {
        return c(this, e, t, a.newNext)
      }
    }, {
      key: "makeUnreachable",
      value: function (e, t) {
        return c(this, e, t, a.newUnreachable)
      }
    }, {
      key: "makeDisconnected",
      value: function (e, t) {
        return c(this, e, t, a.newDisconnected)
      }
    }, {
      key: "add",
      value: function (e) {
        o(e.length >= this.count, "".concat(e.length, " >= ").concat(this.count))
        this.segmentsList.push(u(this, e))
      }
    }, {
      key: "replaceHead",
      value: function (e) {
        o(e.length >= this.count, "".concat(e.length, " >= ").concat(this.count))
        this.segmentsList.splice(-1, 1, u(this, e))
      }
    }, {
      key: "addAll",
      value: function (e) {
        o(e.count === this.count)
        for (var /* [auto-meaningful-name] */e$segmentsList = e.segmentsList, n = 0; n < e$segmentsList.length; ++n) {
          this.segmentsList.push(e$segmentsList[n])
        }
      }
    }, {
      key: "clear",
      value: function () {
        this.segmentsList = []
      }
    }
  ], [
    {
      key: "newRoot",
      value: function (t) {
        var n = new e(t, null, 1)
        n.add([a.newRoot(t.next())])
        return n
      }
    }, {
      key: "newEmpty",
      value: function (t, n) {
        return new e(t.idGenerator, t, (n ? 2 : 1) * t.count)
      }
    }
  ])
  return e
}()
module.exports = l
