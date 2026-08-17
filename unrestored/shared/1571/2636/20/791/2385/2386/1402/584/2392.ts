/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2392
 */

var r = require(/* 1 */"regenerator-runtime")
var i = require(/* 449 */"../../../../449")
var o = require(/* 180 */"../../../../../../207/787/180")
var a = require(/* 283 */"../../../../../../1058/1393/1143/283/index")
var s = require(/* 284 */"../../../../../../1058/1393/1143/284/index")
var c = require(/* 984 */"../986/984/index")
var u = require(/* 985 */"../986/985/index")
var l = require(/* 298 */"process")
var f = require(/* 333 */"../333/index")
var d = require(/* 583 */"../583")
var /* [auto-meaningful-name] */d$isReadable = d.isReadable
var /* [auto-meaningful-name] */d$isWritable = d.isWritable
var /* [auto-meaningful-name] */d$isIterable = d.isIterable
var /* [auto-meaningful-name] */d$isNodeStream = d.isNodeStream
var /* [auto-meaningful-name] */d$isReadableNodeStream = d.isReadableNodeStream
var /* [auto-meaningful-name] */d$isWritableNodeStream = d.isWritableNodeStream
var /* [auto-meaningful-name] */d$isDuplexNodeStream = d.isDuplexNodeStream
var /* [auto-meaningful-name] */d$isReadableStream = d.isReadableStream
var /* [auto-meaningful-name] */d$isWritableStream = d.isWritableStream
var w = require(/* 650 */"../650")
var E = require(/* 402 */"../402")
var /* [auto-meaningful-name] */E$AbortError = E.AbortError
var /* [auto-meaningful-name] */E$codes = E.codes
var /* [auto-meaningful-name] */E$codes$ERR_INVALID_ARG_TYPE = E$codes.ERR_INVALID_ARG_TYPE
var /* [auto-meaningful-name] */E$codes$ERR_INVALID_RETURN_VALUE = E$codes.ERR_INVALID_RETURN_VALUE
var /* [auto-meaningful-name] */require_769_$$_769$destroyer = require(/* 769 */"../769").destroyer
var T = require(/* 584 */"./index")
var B = require(/* 986 */"../986/index")
var D = require(/* 1161 */"../1161")
var /* [auto-meaningful-name] */require_427_$$_427_index$createDeferredPromise = require(/* 427 */"../427/index").createDeferredPromise
var R = require(/* 1407 */"../986/1407")
var F = globalThis.Blob || f.Blob
var P = "undefined" !== typeof F ? function (e) {
  return e instanceof F
} : function (e) {
  return false
}
var N = globalThis.AbortController || require(/* 857 */"../1159/857").AbortController
var /* [auto-meaningful-name] */require_311_$$_311$FunctionPrototypeCall = require(/* 311 */"../311").FunctionPrototypeCall
var L = function (e) {
  "use strict"

  a(n, e)
  var t = s(n)
  function n(e) {
    var r
    o(this, n)
    r = t.call(this, e)
    if (false === (null === e || undefined === e ? undefined : e.readable)) {
      r._readableState.readable = false
      r._readableState.ended = true
      r._readableState.endEmitted = true
    }
    if (false === (null === e || undefined === e ? undefined : e.writable)) {
      r._writableState.writable = false
      r._writableState.ending = true
      r._writableState.ended = true
      r._writableState.finished = true
    }
    return r
  }
  return n
}(T)
function j(e) {
  var t
  var n
  var r
  var i
  var o
  var a = e.readable && "function" !== typeof e.readable.read ? B.wrap(e.readable) : e.readable
  var /* [auto-meaningful-name] */e$writable = e.writable
  var c = !!d$isReadable(a)
  var u = !!d$isWritable(e$writable)
  function l(e) {
    var t = i
    i = null
    if (t) {
      t(e)
    } else {
      if (e) {
        o.destroy(e)
      }
    }
  }
  o = new L({
    readableObjectMode: !(null === a || undefined === a || !a.readableObjectMode),
    writableObjectMode: !(null === e$writable || undefined === e$writable || !e$writable.writableObjectMode),
    readable: c,
    writable: u
  })
  if (u) {
    w(e$writable, function (e) {
      u = false
      if (e) {
        require_769_$$_769$destroyer(a, e)
      }
      l(e)
    })
    o._write = function (e, n, r) {
      if (e$writable.write(e, n)) {
        r()
      } else {
        t = r
      }
    }
    o._final = function (e) {
      e$writable.end()
      n = e
    }
    e$writable.on("drain", function () {
      if (t) {
        var e = t
        t = null
        e()
      }
    })
    e$writable.on("finish", function () {
      if (n) {
        var e = n
        n = null
        e()
      }
    })
  }
  if (c) {
    w(a, function (e) {
      c = false
      if (e) {
        require_769_$$_769$destroyer(a, e)
      }
      l(e)
    })
    a.on("readable", function () {
      if (r) {
        var e = r
        r = null
        e()
      }
    })
    a.on("end", function () {
      o.push(null)
    })
    o._read = function () {
      for (;;) {
        var e = a.read()
        if (null === e) {
          return void (r = o._read)
        }
        if (!o.push(e)) {
          return
        }
      }
    }
  }
  o._destroy = function (e, o) {
    if (!(e || null === i)) {
      e = new E$AbortError()
    }
    r = null
    t = null
    n = null
    if (null === i) {
      o(e)
    } else {
      i = o
      require_769_$$_769$destroyer(e$writable, e)
      require_769_$$_769$destroyer(a, e)
    }
  }
  return o
}
module.exports = function e(t, n) {
  if (d$isDuplexNodeStream(t)) {
    return t
  }
  if (d$isReadableNodeStream(t)) {
    return j({
      readable: t
    })
  }
  if (d$isWritableNodeStream(t)) {
    return j({
      writable: t
    })
  }
  if (d$isNodeStream(t)) {
    return j({
      writable: false,
      readable: false
    })
  }
  if (d$isReadableStream(t)) {
    return j({
      readable: B.fromWeb(t)
    })
  }
  if (d$isWritableStream(t)) {
    return j({
      writable: D.fromWeb(t)
    })
  }
  if ("function" === typeof t) {
    var o = function (e) {
      var t = require_427_$$_427_index$createDeferredPromise()
      var /* [auto-meaningful-name] */t$promise = t.promise
      var /* [auto-meaningful-name] */t$resolve = t.resolve
      var o = new N()
      var /* [auto-meaningful-name] */o$signal = o.signal
      return {
        value: e(u(r.mark(function e() {
          var t
          var /* [auto-meaningful-name] */e$sent
          var /* [auto-meaningful-name] */e$sent$chunk
          var /* [auto-meaningful-name] */e$sent$done
          var /* [auto-meaningful-name] */e$sent$cb
          var d
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = t$promise
                  t$promise = null
                  e.next = 5
                  return c(t)
                case 5:
                  if (e$sent = e.sent, e$sent$chunk = e$sent.chunk, e$sent$done = e$sent.done, e$sent$cb = e$sent.cb, l.nextTick(e$sent$cb), !e$sent$done) {
                    e.next = 12
                    break
                  }
                  return e.abrupt("return")
                case 12:
                  if (!o$signal.aborted) {
                    e.next = 14
                    break
                  }
                  throw new E$AbortError(undefined, {
                    cause: o$signal.reason
                  })
                case 14:
                  d = require_427_$$_427_index$createDeferredPromise()
                  t$promise = d.promise
                  t$resolve = d.resolve
                  e.next = 19
                  return e$sent$chunk
                case 19:
                  e.next = 0
                  break
                case 21:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        }))(), {
          signal: o$signal
        }),
        write: function (e, t, n) {
          var r = t$resolve
          t$resolve = null
          r({
            chunk: e,
            done: false,
            cb: n
          })
        },
        final: function (e) {
          var t = t$resolve
          t$resolve = null
          t({
            done: true,
            cb: e
          })
        },
        destroy: function (e, t) {
          o.abort()
          t(e)
        }
      }
    }(t)
    var /* [auto-meaningful-name] */o$value = o.value
    var /* [auto-meaningful-name] */o$write = o.write
    var /* [auto-meaningful-name] */o$final = o.final
    var /* [auto-meaningful-name] */o$destroy = o.destroy
    if (d$isIterable(o$value)) {
      return R(L, o$value, {
        objectMode: true,
        write: o$write,
        final: o$final,
        destroy: o$destroy
      })
    }
    var h = null === o$value || undefined === o$value ? undefined : o$value.then
    if ("function" === typeof h) {
      var p
      var w = require_311_$$_311$FunctionPrototypeCall(h, o$value, function (e) {
        if (null != e) {
          throw new E$codes$ERR_INVALID_RETURN_VALUE("nully", "body", e)
        }
      }, function (e) {
        require_769_$$_769$destroyer(p, e)
      })
      return p = new L({
        objectMode: true,
        readable: false,
        write: o$write,
        final: function (e) {
          o$final(i(r.mark(function t() {
            return r.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    t.prev = 0
                    t.next = 3
                    return w
                  case 3:
                    l.nextTick(e, null)
                    t.next = 9
                    break
                  case 6:
                    t.prev = 6
                    t.t0 = t.catch(0)
                    l.nextTick(e, t.t0)
                  case 9:
                  case "end":
                    return t.stop()
                }
              }
            }, t, null, [[0, 6]])
          })))
        },
        destroy: o$destroy
      })
    }
    throw new E$codes$ERR_INVALID_RETURN_VALUE("Iterable, AsyncIterable or AsyncFunction", n, o$value)
  }
  if (P(t)) {
    return e(t.arrayBuffer())
  }
  if (d$isIterable(t)) {
    return R(L, t, {
      objectMode: true,
      writable: false
    })
  }
  if (d$isReadableStream(null === t || undefined === t ? undefined : t.readable) && d$isWritableStream(null === t || undefined === t ? undefined : t.writable)) {
    return L.fromWeb(t)
  }
  if ("object" === typeof (null === t || undefined === t ? undefined : t.writable) || "object" === typeof (null === t || undefined === t ? undefined : t.readable)) {
    return j({
      readable: null !== t && undefined !== t && t.readable ? d$isReadableNodeStream(null === t || undefined === t ? undefined : t.readable) ? null === t || undefined === t ? undefined : t.readable : e(t.readable) : undefined,
      writable: null !== t && undefined !== t && t.writable ? d$isWritableNodeStream(null === t || undefined === t ? undefined : t.writable) ? null === t || undefined === t ? undefined : t.writable : e(t.writable) : undefined
    })
  }
  var E
  var C = null === t || undefined === t ? undefined : t.then
  if ("function" === typeof C) {
    require_311_$$_311$FunctionPrototypeCall(C, t, function (e) {
      if (null != e) {
        E.push(e)
      }
      E.push(null)
    }, function (e) {
      require_769_$$_769$destroyer(E, e)
    })
    return E = new L({
      objectMode: true,
      writable: false,
      read: function () {}
    })
  }
  throw new E$codes$ERR_INVALID_ARG_TYPE(n, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], t)
}
