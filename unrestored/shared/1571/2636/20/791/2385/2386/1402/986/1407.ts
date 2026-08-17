/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1407
 */

"use strict"

var r = require(/* 1 */"regenerator-runtime")
var i = require(/* 449 */"../../../../449")
var o = require(/* 500 */"../../../../../../207/787/500")
var a = require(/* 298 */"process")
var s = require(/* 311 */"../311")
var /* [auto-meaningful-name] */s$PromisePrototypeThen = s.PromisePrototypeThen
var /* [auto-meaningful-name] */s$SymbolAsyncIterator = s.SymbolAsyncIterator
var /* [auto-meaningful-name] */s$SymbolIterator = s.SymbolIterator
var /* [auto-meaningful-name] */require_333_$$_333_index$Buffer = require(/* 333 */"../333/index").Buffer
var /* [auto-meaningful-name] */require_402_$$_402$codes = require(/* 402 */"../402").codes
var /* [auto-meaningful-name] */require_402_$$_402$codes$ERR_INVALID_ARG_TYPE = require_402_$$_402$codes.ERR_INVALID_ARG_TYPE
var /* [auto-meaningful-name] */require_402_$$_402$codes$ERR_STREAM_NULL_VALUES = require_402_$$_402$codes.ERR_STREAM_NULL_VALUES
module.exports = function (e, t, n) {
  var s
  var d
  if ("string" === typeof t || t instanceof require_333_$$_333_index$Buffer) {
    return new e(o(o({
      objectMode: true
    }, n), {}, {
      read: function () {
        this.push(t)
        this.push(null)
      }
    }))
  }
  if (t && t[s$SymbolAsyncIterator]) {
    d = true
    s = t[s$SymbolAsyncIterator]()
  } else {
    if (!t || !t[s$SymbolIterator]) {
      throw new require_402_$$_402$codes$ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], t)
    }
    d = false
    s = t[s$SymbolIterator]()
  }
  var _ = new e(o({
    objectMode: true,
    highWaterMark: 1
  }, n))
  var A = false
  function g() {
    return (g = i(r.mark(function e(t) {
      var n
      var i
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent$value
      var /* [auto-meaningful-name] */e$sent$done
      var /* [auto-meaningful-name] */e$sent1
      var /* [auto-meaningful-name] */e$sent1$value
      return r.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (n = undefined !== t && null !== t, i = "function" === typeof s.throw, !n || !i) {
                e.next = 12
                break
              }
              e.next = 5
              return s.throw(t)
            case 5:
              e$sent = e.sent
              e$sent$value = e$sent.value
              e$sent$done = e$sent.done
              e.next = 10
              return e$sent$value
            case 10:
              if (!e$sent$done) {
                e.next = 12
                break
              }
              return e.abrupt("return")
            case 12:
              if ("function" !== typeof s.return) {
                e.next = 19
                break
              }
              e.next = 15
              return s.return()
            case 15:
              e$sent1 = e.sent
              e$sent1$value = e$sent1.value
              e.next = 19
              return e$sent1$value
            case 19:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  function v() {
    return (v = i(r.mark(function e() {
      var t
      var /* [auto-meaningful-name] */t$value
      var i
      return r.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (e.prev = 0, !d) {
                e.next = 7
                break
              }
              e.next = 4
              return s.next()
            case 4:
              e.t0 = e.sent
              e.next = 8
              break
            case 7:
              e.t0 = s.next()
            case 8:
              if (t = e.t0, t$value = t.value, !t.done) {
                e.next = 15
                break
              }
              _.push(null)
              e.next = 33
              break
            case 15:
              if (!t$value || "function" !== typeof t$value.then) {
                e.next = 21
                break
              }
              e.next = 18
              return t$value
            case 18:
              e.t1 = e.sent
              e.next = 22
              break
            case 21:
              e.t1 = t$value
            case 22:
              if (null !== (i = e.t1)) {
                e.next = 28
                break
              }
              A = false
              throw new require_402_$$_402$codes$ERR_STREAM_NULL_VALUES()
            case 28:
              if (!_.push(i)) {
                e.next = 32
                break
              }
              return e.abrupt("continue", 39)
            case 32:
              A = false
            case 33:
              e.next = 38
              break
            case 35:
              e.prev = 35
              e.t2 = e.catch(0)
              _.destroy(e.t2)
            case 38:
              return e.abrupt("break", 41)
            case 39:
              e.next = 0
              break
            case 41:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[0, 35]])
    }))).apply(this, arguments)
  }
  _._read = function () {
    if (!A) {
      A = true;
      (function () {
        v.apply(this, arguments)
      })()
    }
  }
  _._destroy = function (e, t) {
    s$PromisePrototypeThen(function (e) {
      return g.apply(this, arguments)
    }(e), function () {
      return a.nextTick(t, e)
    }, function (n) {
      return a.nextTick(t, n || e)
    })
  }
  return _
}
