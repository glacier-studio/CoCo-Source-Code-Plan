/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1159
 */

var r = require(/* 449 */"../../../../449")
var i = require(/* 1 */"regenerator-runtime")
var o = require(/* 985 */"../986/985/index")
var a = require(/* 984 */"../986/984/index")
var s = require(/* 1404 */"./1404")
function c(e) {
  var t
  var n
  var r
  var i = 2
  for ("undefined" !== typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); i--;) {
    if (n && null != (t = e[n])) {
      return t.call(e)
    }
    if (r && null != (t = e[r])) {
      return new u(t.call(e))
    }
    n = "@@asyncIterator"
    r = "@@iterator"
  }
  throw new TypeError("Object is not async iterable")
}
function u(e) {
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
  (u = function (e) {
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
  return new u(e)
}
var l
var f
var d
var h = require(/* 298 */"process")
var p = require(/* 311 */"../311")
var /* [auto-meaningful-name] */p$ArrayIsArray = p.ArrayIsArray
var /* [auto-meaningful-name] */p$Promise = p.Promise
var /* [auto-meaningful-name] */p$SymbolAsyncIterator = p.SymbolAsyncIterator
var /* [auto-meaningful-name] */p$SymbolDispose = p.SymbolDispose
var m = require(/* 650 */"../650")
var /* [auto-meaningful-name] */require_427_$$_427_index$once = require(/* 427 */"../427/index").once
var b = require(/* 769 */"../769")
var w = require(/* 584 */"../584/index")
var E = require(/* 402 */"../402")
var /* [auto-meaningful-name] */E$aggregateTwoErrors = E.aggregateTwoErrors
var /* [auto-meaningful-name] */E$codes = E.codes
var /* [auto-meaningful-name] */E$codes$ERR_INVALID_ARG_TYPE = E$codes.ERR_INVALID_ARG_TYPE
var /* [auto-meaningful-name] */E$codes$ERR_INVALID_RETURN_VALUE = E$codes.ERR_INVALID_RETURN_VALUE
var /* [auto-meaningful-name] */E$codes$ERR_MISSING_ARGS = E$codes.ERR_MISSING_ARGS
var /* [auto-meaningful-name] */E$codes$ERR_STREAM_DESTROYED = E$codes.ERR_STREAM_DESTROYED
var /* [auto-meaningful-name] */E$codes$ERR_STREAM_PREMATURE_CLOSE = E$codes.ERR_STREAM_PREMATURE_CLOSE
var /* [auto-meaningful-name] */E$AbortError = E.AbortError
var I = require(/* 858 */"../986/858")
var /* [auto-meaningful-name] */I$validateFunction = I.validateFunction
var /* [auto-meaningful-name] */I$validateAbortSignal = I.validateAbortSignal
var P = require(/* 583 */"../583")
var /* [auto-meaningful-name] */P$isIterable = P.isIterable
var /* [auto-meaningful-name] */P$isReadable = P.isReadable
var /* [auto-meaningful-name] */P$isReadableNodeStream = P.isReadableNodeStream
var /* [auto-meaningful-name] */P$isNodeStream = P.isNodeStream
var /* [auto-meaningful-name] */P$isTransformStream = P.isTransformStream
var /* [auto-meaningful-name] */P$isWebStream = P.isWebStream
var /* [auto-meaningful-name] */P$isReadableStream = P.isReadableStream
var /* [auto-meaningful-name] */P$isReadableFinished = P.isReadableFinished
var z = globalThis.AbortController || require(/* 857 */"./857").AbortController
function Q(e, t, n) {
  var r = false
  e.on("close", function () {
    r = true
  })
  return {
    destroy: function (t) {
      if (!r) {
        r = true
        b.destroyer(e, t || new E$codes$ERR_STREAM_DESTROYED("pipe"))
      }
    },
    cleanup: m(e, {
      readable: t,
      writable: n
    }, function (e) {
      r = !e
    })
  }
}
function W(e) {
  I$validateFunction(e[e.length - 1], "streams[stream.length - 1]")
  return e.pop()
}
function K(e) {
  if (P$isIterable(e)) {
    return e
  }
  if (P$isReadableNodeStream(e)) {
    return function (e) {
      return X.apply(this, arguments)
    }(e)
  }
  throw new E$codes$ERR_INVALID_ARG_TYPE("val", ["Readable", "Iterable", "AsyncIterable"], e)
}
function X() {
  return (X = o(i.mark(function e(t) {
    return i.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!f) {
              f = require(/* 986 */"../986/index")
            }
            return e.delegateYield(s(c(f.prototype[p$SymbolAsyncIterator].call(t)), a), "t0", 2)
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Y(e, t, n, r) {
  return q.apply(this, arguments)
}
function q() {
  return (q = r(i.mark(function e(t, n, r, o) {
    var /* [auto-meaningful-name] */o$end
    var s
    var u
    var l
    var f
    var d
    var h
    var p
    var _
    var g
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var b
    return i.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (o$end = o.end, u = null, l = function (e) {
              if (e) {
                s = e
              }
              if (u) {
                var t = u
                u = null
                t()
              }
            }, f = function () {
              return new p$Promise(function (e, t) {
                if (s) {
                  t(s)
                } else {
                  u = function () {
                    if (s) {
                      t(s)
                    } else {
                      e()
                    }
                  }
                }
              })
            }, n.on("drain", l), d = m(n, {
              readable: false
            }, l), e.prev = 6, !n.writableNeedDrain) {
              e.next = 10
              break
            }
            e.next = 10
            return f()
          case 10:
            h = true
            p = false
            e.prev = 12
            g = c(t)
          case 14:
            e.next = 16
            return g.next()
          case 16:
            e$sent = e.sent
            h = e$sent.done
            e.next = 20
            return e$sent.value
          case 20:
            if (e$sent1 = e.sent, h) {
              e.next = 29
              break
            }
            if (b = e$sent1, n.write(b)) {
              e.next = 26
              break
            }
            e.next = 26
            return f()
          case 26:
            h = true
            e.next = 14
            break
          case 29:
            e.next = 35
            break
          case 31:
            e.prev = 31
            e.t0 = e.catch(12)
            p = true
            _ = e.t0
          case 35:
            if (e.prev = 35, e.prev = 36, h || null == g.return) {
              e.next = 40
              break
            }
            e.next = 40
            return g.return()
          case 40:
            if (e.prev = 40, !p) {
              e.next = 43
              break
            }
            throw _
          case 43:
            return e.finish(40)
          case 44:
            return e.finish(35)
          case 45:
            if (!o$end) {
              e.next = 49
              break
            }
            n.end()
            e.next = 49
            return f()
          case 49:
            r()
            e.next = 55
            break
          case 52:
            e.prev = 52
            e.t1 = e.catch(6)
            r(s !== e.t1 ? E$aggregateTwoErrors(s, e.t1) : e.t1)
          case 55:
            e.prev = 55
            d()
            n.off("drain", l)
            return e.finish(55)
          case 59:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[6, 52, 55, 59], [12, 31, 35, 45], [36,, 40, 44]])
  }))).apply(this, arguments)
}
function $(e, t, n, r) {
  return J.apply(this, arguments)
}
function J() {
  return (J = r(i.mark(function e(t, n, r, o) {
    var /* [auto-meaningful-name] */o$end
    var s
    var u
    var l
    var f
    var d
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var _
    return i.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o$end = o.end
            if (P$isTransformStream(n)) {
              n = n.writable
            }
            s = n.getWriter()
            e.prev = 3
            u = true
            l = false
            e.prev = 6
            d = c(t)
          case 8:
            e.next = 10
            return d.next()
          case 10:
            e$sent = e.sent
            u = e$sent.done
            e.next = 14
            return e$sent.value
          case 14:
            if (e$sent1 = e.sent, u) {
              e.next = 23
              break
            }
            _ = e$sent1
            e.next = 19
            return s.ready
          case 19:
            s.write(_).catch(function () {})
          case 20:
            u = true
            e.next = 8
            break
          case 23:
            e.next = 29
            break
          case 25:
            e.prev = 25
            e.t0 = e.catch(6)
            l = true
            f = e.t0
          case 29:
            if (e.prev = 29, e.prev = 30, u || null == d.return) {
              e.next = 34
              break
            }
            e.next = 34
            return d.return()
          case 34:
            if (e.prev = 34, !l) {
              e.next = 37
              break
            }
            throw f
          case 37:
            return e.finish(34)
          case 38:
            return e.finish(29)
          case 39:
            e.next = 41
            return s.ready
          case 41:
            if (!o$end) {
              e.next = 44
              break
            }
            e.next = 44
            return s.close()
          case 44:
            r()
            e.next = 58
            break
          case 47:
            e.prev = 47
            e.t1 = e.catch(3)
            e.prev = 49
            e.next = 52
            return s.abort(e.t1)
          case 52:
            r(e.t1)
            e.next = 58
            break
          case 55:
            e.prev = 55
            e.t2 = e.catch(49)
            r(e.t2)
          case 58:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[3, 47], [6, 25, 29, 39], [30,, 34, 38], [49, 55]])
  }))).apply(this, arguments)
}
function Z(e, t, r) {
  if (1 === e.length && p$ArrayIsArray(e[0])) {
    e = e[0]
  }
  if (e.length < 2) {
    throw new E$codes$ERR_MISSING_ARGS("streams")
  }
  var i
  var o
  var a
  var s = new z()
  var /* [auto-meaningful-name] */s$signal = s.signal
  var u = null === r || undefined === r ? undefined : r.signal
  var f = []
  function p() {
    E(new E$AbortError())
  }
  I$validateAbortSignal(u, "options.signal")
  d = d || require(/* 427 */"../427/index").addAbortListener
  if (u) {
    i = d(u, p)
  }
  var A
  var g = []
  var y = 0
  function b(e) {
    E(e, 0 === --y)
  }
  function E(e, n) {
    var r
    if (!(!e || o && "ERR_STREAM_PREMATURE_CLOSE" !== o.code)) {
      o = e
    }
    if (o || n) {
      for (; g.length;) {
        g.shift()(o)
      }
      if (!(null === (r = i) || undefined === r)) {
        r[p$SymbolDispose]()
      }
      s.abort()
      if (n) {
        if (!o) {
          f.forEach(function (e) {
            return e()
          })
        }
        h.nextTick(t, o, a)
      }
    }
  }
  for (var x = function (t) {
      var i = e[t]
      var o = t < e.length - 1
      var s = t > 0
      var u = o || false !== (null === r || undefined === r ? undefined : r.end)
      var d = t === e.length - 1
      if (P$isNodeStream(i)) {
        var p = function (e) {
          if (e && "AbortError" !== e.name && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
            b(e)
          }
        }
        if (u) {
          var _ = Q(i, o, s)
          var /* [auto-meaningful-name] */_$destroy = _.destroy
          var /* [auto-meaningful-name] */_$cleanup = _.cleanup
          g.push(_$destroy)
          if (P$isReadable(i) && d) {
            f.push(_$cleanup)
          }
        }
        i.on("error", p)
        if (P$isReadable(i) && d) {
          f.push(function () {
            i.removeListener("error", p)
          })
        }
      }
      if (0 === t) {
        if ("function" === typeof i) {
          A = i({
            signal: s$signal
          })
          if (!P$isIterable(A)) {
            throw new E$codes$ERR_INVALID_RETURN_VALUE("Iterable, AsyncIterable or Stream", "source", A)
          }
        } else {
          A = P$isIterable(i) || P$isReadableNodeStream(i) || P$isTransformStream(i) ? i : w.from(i)
        }
      } else if ("function" === typeof i) {
        A = P$isTransformStream(A) ? K(null === (T = A) || undefined === T ? undefined : T.readable) : K(A)
        A = i(A, {
          signal: s$signal
        })
        if (o) {
          if (!P$isIterable(A, true)) {
            throw new E$codes$ERR_INVALID_RETURN_VALUE("AsyncIterable", "transform[".concat(t - 1, "]"), A)
          }
        } else {
          if (!l) {
            l = require(/* 1408 */"../1408")
          }
          var x = new l({
            objectMode: true
          })
          var C = null === (I = A) || undefined === I ? undefined : I.then
          if ("function" === typeof C) {
            y++
            C.call(A, function (e) {
              a = e
              if (null != e) {
                x.write(e)
              }
              if (u) {
                x.end()
              }
              h.nextTick(b)
            }, function (e) {
              x.destroy(e)
              h.nextTick(b, e)
            })
          } else if (P$isIterable(A, true)) {
            y++
            Y(A, x, b, {
              end: u
            })
          } else {
            if (!P$isReadableStream(A) && !P$isTransformStream(A)) {
              throw new E$codes$ERR_INVALID_RETURN_VALUE("AsyncIterable or Promise", "destination", A)
            }
            var S = A.readable || A
            y++
            Y(S, x, b, {
              end: u
            })
          }
          var D = Q(A = x, false, true)
          var /* [auto-meaningful-name] */D$destroy = D.destroy
          var /* [auto-meaningful-name] */D$cleanup = D.cleanup
          g.push(D$destroy)
          if (d) {
            f.push(D$cleanup)
          }
        }
      } else if (P$isNodeStream(i)) {
        if (P$isReadableNodeStream(A)) {
          y += 2
          var P = function (e, t, n, r) {
            var /* [auto-meaningful-name] */r$end = r.end
            var o = false
            t.on("close", function () {
              if (!o) {
                n(new E$codes$ERR_STREAM_PREMATURE_CLOSE())
              }
            })
            e.pipe(t, {
              end: false
            })
            if (r$end) {
              var a = function () {
                o = true
                t.end()
              }
              if (P$isReadableFinished(e)) {
                h.nextTick(a)
              } else {
                e.once("end", a)
              }
            } else {
              n()
            }
            m(e, {
              readable: true,
              writable: false
            }, function (t) {
              var /* [auto-meaningful-name] */e$_readableState = e._readableState
              if (t && "ERR_STREAM_PREMATURE_CLOSE" === t.code && e$_readableState && e$_readableState.ended && !e$_readableState.errored && !e$_readableState.errorEmitted) {
                e.once("end", n).once("error", n)
              } else {
                n(t)
              }
            })
            return m(t, {
              readable: false,
              writable: true
            }, n)
          }(A, i, b, {
            end: u
          })
          if (P$isReadable(i) && d) {
            f.push(P)
          }
        } else if (P$isTransformStream(A) || P$isReadableStream(A)) {
          var z = A.readable || A
          y++
          Y(z, i, b, {
            end: u
          })
        } else {
          if (!P$isIterable(A)) {
            throw new E$codes$ERR_INVALID_ARG_TYPE("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], A)
          }
          y++
          Y(A, i, b, {
            end: u
          })
        }
        A = i
      } else if (P$isWebStream(i)) {
        if (P$isReadableNodeStream(A)) {
          y++
          $(K(A), i, b, {
            end: u
          })
        } else if (P$isReadableStream(A) || P$isIterable(A)) {
          y++
          $(A, i, b, {
            end: u
          })
        } else {
          if (!P$isTransformStream(A)) {
            throw new E$codes$ERR_INVALID_ARG_TYPE("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], A)
          }
          y++
          $(A.readable, i, b, {
            end: u
          })
        }
        A = i
      } else {
        A = w.from(i)
      }
    }, C = 0; C < e.length; C++) {
    var T
    var I
    x(C)
  }
  if (null !== s$signal && undefined !== s$signal && s$signal.aborted || null !== u && undefined !== u && u.aborted) {
    h.nextTick(p)
  }
  return A
}
module.exports = {
  pipelineImpl: Z,
  pipeline: function () {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
      t[n] = arguments[n]
    }
    return Z(t, require_427_$$_427_index$once(W(t)))
  }
}
