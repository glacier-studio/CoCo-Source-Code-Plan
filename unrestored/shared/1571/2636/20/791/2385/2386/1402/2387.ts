/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2387
 */

"use strict"

var r = require(/* 819 */"../../../../../207/787/819")
var i = require(/* 180 */"../../../../../207/787/180")
var o = require(/* 283 */"../../../../../1058/1393/1143/283/index")
var a = require(/* 284 */"../../../../../1058/1393/1143/284/index")
var s = require(/* 1 */"regenerator-runtime")
var c = require(/* 449 */"../../../449")
var u = require(/* 1404 */"./1159/1404")
var l = require(/* 984 */"./986/984/index")
var f = require(/* 985 */"./986/985/index")
function d(e) {
  var t
  var n
  var r
  var i = 2
  for ("undefined" !== typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); i--;) {
    if (n && null != (t = e[n])) {
      return t.call(e)
    }
    if (r && null != (t = e[r])) {
      return new h(t.call(e))
    }
    n = "@@asyncIterator"
    r = "@@iterator"
  }
  throw new TypeError("Object is not async iterable")
}
function h(e) {
  function t(e) {
    if (Object(e) !== e) {
      return Promise.reject(new TypeError(e + " is not an object."))
    }
    var /* [auto-meaningful-name] */e$done = e.done
    return Promise.resolve(e.value).then(function (e) {
      return {
        value: e,
        done: e$done
      }
    })
  }
  (h = function (e) {
    this.s = e
    this.n = e.next
  }).prototype = {
    s: null,
    n: null,
    next: function () {
      return t(this.n.apply(this.s, arguments))
    },
    return: function (e) {
      var /* [auto-meaningful-name] */this$s$return = this.s.return
      return undefined === this$s$return ? Promise.resolve({
        value: e,
        done: true
      }) : t(this$s$return.apply(this.s, arguments))
    },
    throw: function (e) {
      var /* [auto-meaningful-name] */this$s$return = this.s.return
      return undefined === this$s$return ? Promise.reject(e) : t(this$s$return.apply(this.s, arguments))
    }
  }
  return new h(e)
}
var p = globalThis.AbortController || require(/* 857 */"./1159/857").AbortController
var _ = require(/* 402 */"./402")
var /* [auto-meaningful-name] */_$codes = _.codes
var /* [auto-meaningful-name] */_$codes$ERR_INVALID_ARG_VALUE = _$codes.ERR_INVALID_ARG_VALUE
var /* [auto-meaningful-name] */_$codes$ERR_INVALID_ARG_TYPE = _$codes.ERR_INVALID_ARG_TYPE
var /* [auto-meaningful-name] */_$codes$ERR_MISSING_ARGS = _$codes.ERR_MISSING_ARGS
var /* [auto-meaningful-name] */_$codes$ERR_OUT_OF_RANGE = _$codes.ERR_OUT_OF_RANGE
var /* [auto-meaningful-name] */_$AbortError = _.AbortError
var w = require(/* 858 */"./986/858")
var /* [auto-meaningful-name] */w$validateAbortSignal = w.validateAbortSignal
var /* [auto-meaningful-name] */w$validateInteger = w.validateInteger
var /* [auto-meaningful-name] */w$validateObject = w.validateObject
var O = require(/* 311 */"./311").Symbol("kWeak")
var k = require(/* 311 */"./311").Symbol("kResistStopPropagation")
var /* [auto-meaningful-name] */require_650_$_650$finished = require(/* 650 */"./650").finished
var T = require(/* 1406 */"./1406")
var /* [auto-meaningful-name] */require_987_$_987$addAbortSignalNoValidate = require(/* 987 */"./987").addAbortSignalNoValidate
var D = require(/* 583 */"./583")
var /* [auto-meaningful-name] */D$isWritable = D.isWritable
var /* [auto-meaningful-name] */D$isNodeStream = D.isNodeStream
var /* [auto-meaningful-name] */require_427_$_427_index$deprecate = require(/* 427 */"./427/index").deprecate
var P = require(/* 311 */"./311")
var /* [auto-meaningful-name] */P$ArrayPrototypePush = P.ArrayPrototypePush
var /* [auto-meaningful-name] */P$Boolean = P.Boolean
var /* [auto-meaningful-name] */P$MathFloor = P.MathFloor
var /* [auto-meaningful-name] */P$Number = P.Number
var /* [auto-meaningful-name] */P$NumberIsNaN = P.NumberIsNaN
var /* [auto-meaningful-name] */P$Promise = P.Promise
var /* [auto-meaningful-name] */P$PromiseReject = P.PromiseReject
var /* [auto-meaningful-name] */P$PromiseResolve = P.PromiseResolve
var /* [auto-meaningful-name] */P$PromisePrototypeThen = P.PromisePrototypeThen
var /* [auto-meaningful-name] */P$Symbol = P.Symbol
var W = P$Symbol("kEmpty")
var K = P$Symbol("kEof")
function X(e, t) {
  if ("function" !== typeof e) {
    throw new _$codes$ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], e)
  }
  if (null != t) {
    w$validateObject(t, "options")
  }
  if (null != (null === t || undefined === t ? undefined : t.signal)) {
    w$validateAbortSignal(t.signal, "options.signal")
  }
  var r = 1
  if (null != (null === t || undefined === t ? undefined : t.concurrency)) {
    r = P$MathFloor(t.concurrency)
  }
  var i = r - 1
  if (null != (null === t || undefined === t ? undefined : t.highWaterMark)) {
    i = P$MathFloor(t.highWaterMark)
  }
  w$validateInteger(r, "options.concurrency", 1)
  w$validateInteger(i, "options.highWaterMark", 0)
  i += r
  return function () {
    var o = f(s.mark(function o() {
      var a
      var u
      var f
      var h
      var p
      var _
      var A
      var g
      var v
      var m
      var y
      var w
      var E
      var /* [auto-meaningful-name] */o$sent
      return s.wrap(function (o) {
        for (;;) {
          switch (o.prev = o.next) {
            case 0:
              E = function () {
                return (E = c(s.mark(function t() {
                  var n
                  var o
                  var c
                  var l
                  var /* [auto-meaningful-name] */t$sent
                  var /* [auto-meaningful-name] */t$sent1
                  var E
                  var x
                  return s.wrap(function (t) {
                    for (;;) {
                      switch (t.prev = t.next) {
                        case 0:
                          t.prev = 0
                          n = true
                          o = false
                          t.prev = 3
                          l = d(u)
                        case 5:
                          t.next = 7
                          return l.next()
                        case 7:
                          t$sent = t.sent
                          n = t$sent.done
                          t.next = 11
                          return t$sent.value
                        case 11:
                          if (t$sent1 = t.sent, n) {
                            t.next = 38
                            break
                          }
                          if (E = t$sent1, !A) {
                            t.next = 16
                            break
                          }
                          return t.abrupt("return")
                        case 16:
                          if (!a.aborted) {
                            t.next = 18
                            break
                          }
                          throw new _$AbortError()
                        case 18:
                          if (t.prev = 18, (E = e(E, h)) !== W) {
                            t.next = 22
                            break
                          }
                          return t.abrupt("continue", 35)
                        case 22:
                          E = P$PromiseResolve(E)
                          t.next = 28
                          break
                        case 25:
                          t.prev = 25
                          t.t0 = t.catch(18)
                          E = P$PromiseReject(t.t0)
                        case 28:
                          if (g += 1, P$PromisePrototypeThen(E, m, v), f.push(E), p && (p(), p = null), A || !(f.length >= i || g >= r)) {
                            t.next = 35
                            break
                          }
                          t.next = 35
                          return new P$Promise(function (e) {
                            _ = e
                          })
                        case 35:
                          n = true
                          t.next = 5
                          break
                        case 38:
                          t.next = 44
                          break
                        case 40:
                          t.prev = 40
                          t.t1 = t.catch(3)
                          o = true
                          c = t.t1
                        case 44:
                          if (t.prev = 44, t.prev = 45, n || null == l.return) {
                            t.next = 49
                            break
                          }
                          t.next = 49
                          return l.return()
                        case 49:
                          if (t.prev = 49, !o) {
                            t.next = 52
                            break
                          }
                          throw c
                        case 52:
                          return t.finish(49)
                        case 53:
                          return t.finish(44)
                        case 54:
                          f.push(K)
                          t.next = 62
                          break
                        case 57:
                          t.prev = 57
                          t.t2 = t.catch(0)
                          x = P$PromiseReject(t.t2)
                          P$PromisePrototypeThen(x, m, v)
                          f.push(x)
                        case 62:
                          t.prev = 62
                          A = true
                          if (p) {
                            p()
                            p = null
                          }
                          return t.finish(62)
                        case 66:
                        case "end":
                          return t.stop()
                      }
                    }
                  }, t, null, [[0, 57, 62, 66], [3, 40, 44, 54], [18, 25], [45,, 49, 53]])
                }))).apply(this, arguments)
              }
              w = function () {
                return E.apply(this, arguments)
              }
              y = function () {
                if (_ && !A && g < r && f.length < i) {
                  _()
                  _ = null
                }
              }
              m = function () {
                g -= 1
                y()
              }
              v = function () {
                A = true
                m()
              }
              a = require(/* 427 */"./427/index").AbortSignalAny([null === t || undefined === t ? undefined : t.signal].filter(P$Boolean))
              u = this
              f = []
              h = {
                signal: a
              }
              A = false
              g = 0
              w()
              o.prev = 12
            case 13:
              0
            case 14:
              if (!(f.length > 0)) {
                o.next = 29
                break
              }
              o.next = 17
              return l(f[0])
            case 17:
              if ((o$sent = o.sent) !== K) {
                o.next = 20
                break
              }
              return o.abrupt("return")
            case 20:
              if (!a.aborted) {
                o.next = 22
                break
              }
              throw new _$AbortError()
            case 22:
              if (o$sent === W) {
                o.next = 25
                break
              }
              o.next = 25
              return o$sent
            case 25:
              f.shift()
              y()
              o.next = 14
              break
            case 29:
              o.next = 31
              return l(new P$Promise(function (e) {
                p = e
              }))
            case 31:
              o.next = 13
              break
            case 33:
              o.prev = 33
              A = true
              if (_) {
                _()
                _ = null
              }
              return o.finish(33)
            case 37:
            case "end":
              return o.stop()
          }
        }
      }, o, this, [[12,, 33, 37]])
    }))
    return function () {
      return o.apply(this, arguments)
    }
  }().call(this)
}
function Y(e) {
  return q.apply(this, arguments)
}
function q() {
  return (q = c(s.mark(function e(t) {
    var n
    var r
    var i
    var o
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var l = arguments
    return s.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = l.length > 1 && undefined !== l[1] ? l[1] : undefined
            r = true
            i = false
            e.prev = 3
            a = d(ee.call(this, t, n))
          case 5:
            e.next = 7
            return a.next()
          case 7:
            e$sent = e.sent
            r = e$sent.done
            e.next = 11
            return e$sent.value
          case 11:
            if (e$sent1 = e.sent, r) {
              e.next = 18
              break
            }
            e$sent1
            return e.abrupt("return", true)
          case 15:
            r = true
            e.next = 5
            break
          case 18:
            e.next = 24
            break
          case 20:
            e.prev = 20
            e.t0 = e.catch(3)
            i = true
            o = e.t0
          case 24:
            if (e.prev = 24, e.prev = 25, r || null == a.return) {
              e.next = 29
              break
            }
            e.next = 29
            return a.return()
          case 29:
            if (e.prev = 29, !i) {
              e.next = 32
              break
            }
            throw o
          case 32:
            return e.finish(29)
          case 33:
            return e.finish(24)
          case 34:
            return e.abrupt("return", false)
          case 35:
          case "end":
            return e.stop()
        }
      }
    }, e, this, [[3, 20, 24, 34], [25,, 29, 33]])
  }))).apply(this, arguments)
}
function $() {
  return ($ = c(s.mark(function e(t) {
    var n
    var r = arguments
    return s.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = r.length > 1 && undefined !== r[1] ? r[1] : undefined, "function" === typeof t) {
              e.next = 3
              break
            }
            throw new _$codes$ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], t)
          case 3:
            e.next = 5
            return Y.call(this, c(s.mark(function e() {
              var n = arguments
              return s.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      e.next = 2
                      return t.apply(undefined, n)
                    case 2:
                      return e.abrupt("return", !e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            })), n)
          case 5:
            return e.abrupt("return", !e.sent)
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e, this)
  }))).apply(this, arguments)
}
function J() {
  return (J = c(s.mark(function e(t, n) {
    var r
    var i
    var o
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var l
    return s.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = true
            i = false
            e.prev = 2
            a = d(ee.call(this, t, n))
          case 4:
            e.next = 6
            return a.next()
          case 6:
            e$sent = e.sent
            r = e$sent.done
            e.next = 10
            return e$sent.value
          case 10:
            if (e$sent1 = e.sent, r) {
              e.next = 17
              break
            }
            l = e$sent1
            return e.abrupt("return", l)
          case 14:
            r = true
            e.next = 4
            break
          case 17:
            e.next = 23
            break
          case 19:
            e.prev = 19
            e.t0 = e.catch(2)
            i = true
            o = e.t0
          case 23:
            if (e.prev = 23, e.prev = 24, r || null == a.return) {
              e.next = 28
              break
            }
            e.next = 28
            return a.return()
          case 28:
            if (e.prev = 28, !i) {
              e.next = 31
              break
            }
            throw o
          case 31:
            return e.finish(28)
          case 32:
            return e.finish(23)
          case 33:
            return e.abrupt("return", undefined)
          case 34:
          case "end":
            return e.stop()
        }
      }
    }, e, this, [[2, 19, 23, 33], [24,, 28, 32]])
  }))).apply(this, arguments)
}
function Z() {
  return (Z = c(s.mark(function e(t, n) {
    var r
    var i
    var o
    var a
    var u
    var l
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return s.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (i = function () {
              return (i = c(s.mark(function e(n, r) {
                return s.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        e.next = 2
                        return t(n, r)
                      case 2:
                        return e.abrupt("return", W)
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }
                }, e)
              }))).apply(this, arguments)
            }, r = function (e, t) {
              return i.apply(this, arguments)
            }, "function" === typeof t) {
              e.next = 4
              break
            }
            throw new _$codes$ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], t)
          case 4:
            o = true
            a = false
            e.prev = 6
            l = d(X.call(this, r, n))
          case 8:
            e.next = 10
            return l.next()
          case 10:
            e$sent = e.sent
            o = e$sent.done
            e.next = 14
            return e$sent.value
          case 14:
            if (e$sent1 = e.sent, o) {
              e.next = 21
              break
            }
            e$sent1
          case 18:
            o = true
            e.next = 8
            break
          case 21:
            e.next = 27
            break
          case 23:
            e.prev = 23
            e.t0 = e.catch(6)
            a = true
            u = e.t0
          case 27:
            if (e.prev = 27, e.prev = 28, o || null == l.return) {
              e.next = 32
              break
            }
            e.next = 32
            return l.return()
          case 32:
            if (e.prev = 32, !a) {
              e.next = 35
              break
            }
            throw u
          case 35:
            return e.finish(32)
          case 36:
            return e.finish(27)
          case 37:
          case "end":
            return e.stop()
        }
      }
    }, e, this, [[6, 23, 27, 37], [28,, 32, 36]])
  }))).apply(this, arguments)
}
function ee(e, t) {
  if ("function" !== typeof e) {
    throw new _$codes$ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], e)
  }
  function n() {
    return (n = c(s.mark(function t(n, r) {
      return s.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.next = 2
              return e(n, r)
            case 2:
              if (!t.sent) {
                t.next = 4
                break
              }
              return t.abrupt("return", n)
            case 4:
              return t.abrupt("return", W)
            case 5:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))).apply(this, arguments)
  }
  return X.call(this, function (e, t) {
    return n.apply(this, arguments)
  }, t)
}
var te = function (e) {
  o(n, e)
  var t = a(n)
  function n() {
    var e
    i(this, n);
    (e = t.call(this, "reduce")).message = "Reduce of an empty stream requires an initial value"
    return e
  }
  return n
}(_$codes$ERR_MISSING_ARGS)
function ne() {
  return (ne = c(s.mark(function e(t, n, i) {
    var /* [auto-meaningful-name] */i$signal
    var a
    var c
    var u
    var /* [auto-meaningful-name] */u$signal
    var f
    var h
    var _
    var A
    var g
    var m
    var y
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var T
    var /* [auto-meaningful-name] */i$signal1
    var D = arguments
    return s.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("function" === typeof t) {
              e.next = 2
              break
            }
            throw new _$codes$ERR_INVALID_ARG_TYPE("reducer", ["Function", "AsyncFunction"], t)
          case 2:
            if (null != i && w$validateObject(i, "options"), null != (null === i || undefined === i ? undefined : i.signal) && w$validateAbortSignal(i.signal, "options.signal"), a = D.length > 1, null === i || undefined === i || null === (i$signal = i.signal) || undefined === i$signal || !i$signal.aborted) {
              e.next = 11
              break
            }
            c = new _$AbortError(undefined, {
              cause: i.signal.reason
            })
            this.once("error", function () {})
            e.next = 10
            return require_650_$_650$finished(this.destroy(c))
          case 10:
            throw c
          case 11:
            u = new p()
            u$signal = u.signal
            if (null !== i && undefined !== i && i.signal) {
              r(f = {
                once: true
              }, O, this)
              r(f, k, true)
              h = f
              i.signal.addEventListener("abort", function () {
                return u.abort()
              }, h)
            }
            _ = false
            e.prev = 15
            A = true
            g = false
            e.prev = 18
            y = d(this)
          case 20:
            e.next = 22
            return y.next()
          case 22:
            e$sent = e.sent
            A = e$sent.done
            e.next = 26
            return e$sent.value
          case 26:
            if (e$sent1 = e.sent, A) {
              e.next = 43
              break
            }
            if (T = e$sent1, _ = true, null === i || undefined === i || null === (i$signal1 = i.signal) || undefined === i$signal1 || !i$signal1.aborted) {
              e.next = 32
              break
            }
            throw new _$AbortError()
          case 32:
            if (a) {
              e.next = 37
              break
            }
            n = T
            a = true
            e.next = 40
            break
          case 37:
            e.next = 39
            return t(n, T, {
              signal: u$signal
            })
          case 39:
            n = e.sent
          case 40:
            A = true
            e.next = 20
            break
          case 43:
            e.next = 49
            break
          case 45:
            e.prev = 45
            e.t0 = e.catch(18)
            g = true
            m = e.t0
          case 49:
            if (e.prev = 49, e.prev = 50, A || null == y.return) {
              e.next = 54
              break
            }
            e.next = 54
            return y.return()
          case 54:
            if (e.prev = 54, !g) {
              e.next = 57
              break
            }
            throw m
          case 57:
            return e.finish(54)
          case 58:
            return e.finish(49)
          case 59:
            if (_ || a) {
              e.next = 61
              break
            }
            throw new te()
          case 61:
            e.prev = 61
            u.abort()
            return e.finish(61)
          case 64:
            return e.abrupt("return", n)
          case 65:
          case "end":
            return e.stop()
        }
      }
    }, e, this, [[15,, 61, 64], [18, 45, 49, 59], [50,, 54, 58]])
  }))).apply(this, arguments)
}
function re() {
  return (re = c(s.mark(function e(t) {
    var n
    var r
    var i
    var o
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var l
    var /* [auto-meaningful-name] */t$signal
    return s.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (null != t) {
              w$validateObject(t, "options")
            }
            if (null != (null === t || undefined === t ? undefined : t.signal)) {
              w$validateAbortSignal(t.signal, "options.signal")
            }
            n = []
            r = true
            i = false
            e.prev = 5
            a = d(this)
          case 7:
            e.next = 9
            return a.next()
          case 9:
            e$sent = e.sent
            r = e$sent.done
            e.next = 13
            return e$sent.value
          case 13:
            if (e$sent1 = e.sent, r) {
              e.next = 22
              break
            }
            if (l = e$sent1, null === t || undefined === t || null === (t$signal = t.signal) || undefined === t$signal || !t$signal.aborted) {
              e.next = 18
              break
            }
            throw new _$AbortError(undefined, {
              cause: t.signal.reason
            })
          case 18:
            P$ArrayPrototypePush(n, l)
          case 19:
            r = true
            e.next = 7
            break
          case 22:
            e.next = 28
            break
          case 24:
            e.prev = 24
            e.t0 = e.catch(5)
            i = true
            o = e.t0
          case 28:
            if (e.prev = 28, e.prev = 29, r || null == a.return) {
              e.next = 33
              break
            }
            e.next = 33
            return a.return()
          case 33:
            if (e.prev = 33, !i) {
              e.next = 36
              break
            }
            throw o
          case 36:
            return e.finish(33)
          case 37:
            return e.finish(28)
          case 38:
            return e.abrupt("return", n)
          case 39:
          case "end":
            return e.stop()
        }
      }
    }, e, this, [[5, 24, 28, 38], [29,, 33, 37]])
  }))).apply(this, arguments)
}
function ie(e) {
  e = P$Number(e)
  if (P$NumberIsNaN(e)) {
    return 0
  }
  if (e < 0) {
    throw new _$codes$ERR_OUT_OF_RANGE("number", ">= 0", e)
  }
  return e
}
module.exports.streamReturningOperators = {
  asIndexedPairs: require_427_$_427_index$deprecate(function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : undefined
    if (null != e) {
      w$validateObject(e, "options")
    }
    if (null != (null === e || undefined === e ? undefined : e.signal)) {
      w$validateAbortSignal(e.signal, "options.signal")
    }
    return function () {
      var t = f(s.mark(function t() {
        var n
        var r
        var i
        var o
        var a
        var /* [auto-meaningful-name] */t$sent
        var /* [auto-meaningful-name] */t$sent1
        var f
        var /* [auto-meaningful-name] */e$signal
        return s.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                n = 0
                r = true
                i = false
                t.prev = 3
                a = d(this)
              case 5:
                t.next = 7
                return l(a.next())
              case 7:
                t$sent = t.sent
                r = t$sent.done
                t.next = 11
                return l(t$sent.value)
              case 11:
                if (t$sent1 = t.sent, r) {
                  t.next = 21
                  break
                }
                if (f = t$sent1, null === e || undefined === e || null === (e$signal = e.signal) || undefined === e$signal || !e$signal.aborted) {
                  t.next = 16
                  break
                }
                throw new _$AbortError({
                  cause: e.signal.reason
                })
              case 16:
                t.next = 18
                return [n++, f]
              case 18:
                r = true
                t.next = 5
                break
              case 21:
                t.next = 27
                break
              case 23:
                t.prev = 23
                t.t0 = t.catch(3)
                i = true
                o = t.t0
              case 27:
                if (t.prev = 27, t.prev = 28, r || null == a.return) {
                  t.next = 32
                  break
                }
                t.next = 32
                return l(a.return())
              case 32:
                if (t.prev = 32, !i) {
                  t.next = 35
                  break
                }
                throw o
              case 35:
                return t.finish(32)
              case 36:
                return t.finish(27)
              case 37:
              case "end":
                return t.stop()
            }
          }
        }, t, this, [[3, 23, 27, 37], [28,, 32, 36]])
      }))
      return function () {
        return t.apply(this, arguments)
      }
    }().call(this)
  }, "readable.asIndexedPairs will be removed in a future version."),
  drop: function (e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : undefined
    if (null != t) {
      w$validateObject(t, "options")
    }
    if (null != (null === t || undefined === t ? undefined : t.signal)) {
      w$validateAbortSignal(t.signal, "options.signal")
    }
    e = ie(e)
    return function () {
      var n = f(s.mark(function n() {
        var /* [auto-meaningful-name] */t$signal
        var i
        var o
        var a
        var c
        var /* [auto-meaningful-name] */n$sent
        var /* [auto-meaningful-name] */n$sent1
        var h
        var /* [auto-meaningful-name] */t$signal1
        return s.wrap(function (n) {
          for (;;) {
            switch (n.prev = n.next) {
              case 0:
                if (null === t || undefined === t || null === (t$signal = t.signal) || undefined === t$signal || !t$signal.aborted) {
                  n.next = 2
                  break
                }
                throw new _$AbortError()
              case 2:
                i = true
                o = false
                n.prev = 4
                c = d(this)
              case 6:
                n.next = 8
                return l(c.next())
              case 8:
                n$sent = n.sent
                i = n$sent.done
                n.next = 12
                return l(n$sent.value)
              case 12:
                if (n$sent1 = n.sent, i) {
                  n.next = 23
                  break
                }
                if (h = n$sent1, null === t || undefined === t || null === (t$signal1 = t.signal) || undefined === t$signal1 || !t$signal1.aborted) {
                  n.next = 17
                  break
                }
                throw new _$AbortError()
              case 17:
                if (!(e-- <= 0)) {
                  n.next = 20
                  break
                }
                n.next = 20
                return h
              case 20:
                i = true
                n.next = 6
                break
              case 23:
                n.next = 29
                break
              case 25:
                n.prev = 25
                n.t0 = n.catch(4)
                o = true
                a = n.t0
              case 29:
                if (n.prev = 29, n.prev = 30, i || null == c.return) {
                  n.next = 34
                  break
                }
                n.next = 34
                return l(c.return())
              case 34:
                if (n.prev = 34, !o) {
                  n.next = 37
                  break
                }
                throw a
              case 37:
                return n.finish(34)
              case 38:
                return n.finish(29)
              case 39:
              case "end":
                return n.stop()
            }
          }
        }, n, this, [[4, 25, 29, 39], [30,, 34, 38]])
      }))
      return function () {
        return n.apply(this, arguments)
      }
    }().call(this)
  },
  filter: ee,
  flatMap: function (e, t) {
    var n = X.call(this, e, t)
    return function () {
      var e = f(s.mark(function e() {
        var t
        var r
        var i
        var o
        var /* [auto-meaningful-name] */e$sent
        var /* [auto-meaningful-name] */e$sent1
        var f
        return s.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                t = true
                r = false
                e.prev = 2
                o = d(n)
              case 4:
                e.next = 6
                return l(o.next())
              case 6:
                e$sent = e.sent
                t = e$sent.done
                e.next = 10
                return l(e$sent.value)
              case 10:
                if (e$sent1 = e.sent, t) {
                  e.next = 17
                  break
                }
                f = e$sent1
                return e.delegateYield(u(d(f), l), "t0", 14)
              case 14:
                t = true
                e.next = 4
                break
              case 17:
                e.next = 23
                break
              case 19:
                e.prev = 19
                e.t1 = e.catch(2)
                r = true
                i = e.t1
              case 23:
                if (e.prev = 23, e.prev = 24, t || null == o.return) {
                  e.next = 28
                  break
                }
                e.next = 28
                return l(o.return())
              case 28:
                if (e.prev = 28, !r) {
                  e.next = 31
                  break
                }
                throw i
              case 31:
                return e.finish(28)
              case 32:
                return e.finish(23)
              case 33:
              case "end":
                return e.stop()
            }
          }
        }, e, null, [[2, 19, 23, 33], [24,, 28, 32]])
      }))
      return function () {
        return e.apply(this, arguments)
      }
    }().call(this)
  },
  map: X,
  take: function (e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : undefined
    if (null != t) {
      w$validateObject(t, "options")
    }
    if (null != (null === t || undefined === t ? undefined : t.signal)) {
      w$validateAbortSignal(t.signal, "options.signal")
    }
    e = ie(e)
    return function () {
      var n = f(s.mark(function n() {
        var /* [auto-meaningful-name] */t$signal
        var i
        var o
        var a
        var c
        var /* [auto-meaningful-name] */n$sent
        var /* [auto-meaningful-name] */n$sent1
        var h
        var /* [auto-meaningful-name] */t$signal1
        return s.wrap(function (n) {
          for (;;) {
            switch (n.prev = n.next) {
              case 0:
                if (null === t || undefined === t || null === (t$signal = t.signal) || undefined === t$signal || !t$signal.aborted) {
                  n.next = 2
                  break
                }
                throw new _$AbortError()
              case 2:
                i = true
                o = false
                n.prev = 4
                c = d(this)
              case 6:
                n.next = 8
                return l(c.next())
              case 8:
                n$sent = n.sent
                i = n$sent.done
                n.next = 12
                return l(n$sent.value)
              case 12:
                if (n$sent1 = n.sent, i) {
                  n.next = 25
                  break
                }
                if (h = n$sent1, null === t || undefined === t || null === (t$signal1 = t.signal) || undefined === t$signal1 || !t$signal1.aborted) {
                  n.next = 17
                  break
                }
                throw new _$AbortError()
              case 17:
                if (!(e-- > 0)) {
                  n.next = 20
                  break
                }
                n.next = 20
                return h
              case 20:
                if (!(e <= 0)) {
                  n.next = 22
                  break
                }
                return n.abrupt("return")
              case 22:
                i = true
                n.next = 6
                break
              case 25:
                n.next = 31
                break
              case 27:
                n.prev = 27
                n.t0 = n.catch(4)
                o = true
                a = n.t0
              case 31:
                if (n.prev = 31, n.prev = 32, i || null == c.return) {
                  n.next = 36
                  break
                }
                n.next = 36
                return l(c.return())
              case 36:
                if (n.prev = 36, !o) {
                  n.next = 39
                  break
                }
                throw a
              case 39:
                return n.finish(36)
              case 40:
                return n.finish(31)
              case 41:
              case "end":
                return n.stop()
            }
          }
        }, n, this, [[4, 27, 31, 41], [32,, 36, 40]])
      }))
      return function () {
        return n.apply(this, arguments)
      }
    }().call(this)
  },
  compose: function (e, t) {
    if (null != t) {
      w$validateObject(t, "options")
    }
    if (null != (null === t || undefined === t ? undefined : t.signal)) {
      w$validateAbortSignal(t.signal, "options.signal")
    }
    if (D$isNodeStream(e) && !D$isWritable(e)) {
      throw new _$codes$ERR_INVALID_ARG_VALUE("stream", e, "must be writable")
    }
    var n = T(this, e)
    if (null !== t && undefined !== t && t.signal) {
      require_987_$_987$addAbortSignalNoValidate(t.signal, n)
    }
    return n
  }
}
module.exports.promiseReturningOperators = {
  every: function (e) {
    return $.apply(this, arguments)
  },
  forEach: function (e, t) {
    return Z.apply(this, arguments)
  },
  reduce: function (e, t, n) {
    return ne.apply(this, arguments)
  },
  toArray: function (e) {
    return re.apply(this, arguments)
  },
  some: Y,
  find: function (e, t) {
    return J.apply(this, arguments)
  }
}
