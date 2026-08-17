/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：650
 */

"use strict"

var r
var i = require(/* 298 */"process")
var o = require(/* 402 */"./402")
var /* [auto-meaningful-name] */o$AbortError = o.AbortError
var /* [auto-meaningful-name] */o$codes = o.codes
var /* [auto-meaningful-name] */o$codes$ERR_INVALID_ARG_TYPE = o$codes.ERR_INVALID_ARG_TYPE
var /* [auto-meaningful-name] */o$codes$ERR_STREAM_PREMATURE_CLOSE = o$codes.ERR_STREAM_PREMATURE_CLOSE
var l = require(/* 427 */"./427/index")
var /* [auto-meaningful-name] */l$kEmptyObject = l.kEmptyObject
var /* [auto-meaningful-name] */l$once = l.once
var h = require(/* 858 */"./986/858")
var /* [auto-meaningful-name] */h$validateAbortSignal = h.validateAbortSignal
var /* [auto-meaningful-name] */h$validateFunction = h.validateFunction
var /* [auto-meaningful-name] */h$validateObject = h.validateObject
var /* [auto-meaningful-name] */h$validateBoolean = h.validateBoolean
var v = require(/* 311 */"./311")
var /* [auto-meaningful-name] */v$Promise = v.Promise
var /* [auto-meaningful-name] */v$PromisePrototypeThen = v.PromisePrototypeThen
var /* [auto-meaningful-name] */v$SymbolDispose = v.SymbolDispose
var w = require(/* 583 */"./583")
var /* [auto-meaningful-name] */w$isClosed = w.isClosed
var /* [auto-meaningful-name] */w$isReadable = w.isReadable
var /* [auto-meaningful-name] */w$isReadableNodeStream = w.isReadableNodeStream
var /* [auto-meaningful-name] */w$isReadableStream = w.isReadableStream
var /* [auto-meaningful-name] */w$isReadableFinished = w.isReadableFinished
var /* [auto-meaningful-name] */w$isReadableErrored = w.isReadableErrored
var /* [auto-meaningful-name] */w$isWritable = w.isWritable
var /* [auto-meaningful-name] */w$isWritableNodeStream = w.isWritableNodeStream
var /* [auto-meaningful-name] */w$isWritableStream = w.isWritableStream
var /* [auto-meaningful-name] */w$isWritableFinished = w.isWritableFinished
var /* [auto-meaningful-name] */w$isWritableErrored = w.isWritableErrored
var /* [auto-meaningful-name] */w$isNodeStream = w.isNodeStream
var /* [auto-meaningful-name] */w$willEmitClose = w.willEmitClose
var /* [auto-meaningful-name] */w$kIsClosedPromise = w.kIsClosedPromise
function M(e) {
  return e.setHeader && "function" === typeof e.abort
}
var L = function () {}
function j(e, t, o) {
  var /* [auto-meaningful-name] */t$readable
  var /* [auto-meaningful-name] */t$writable
  if (2 === arguments.length) {
    o = t
    t = l$kEmptyObject
  } else {
    if (null == t) {
      t = l$kEmptyObject
    } else {
      h$validateObject(t, "options")
    }
  }
  h$validateFunction(o, "callback")
  h$validateAbortSignal(t.signal, "options.signal")
  o = l$once(o)
  if (w$isReadableStream(e) || w$isWritableStream(e)) {
    return U(e, t, o)
  }
  if (!w$isNodeStream(e)) {
    throw new o$codes$ERR_INVALID_ARG_TYPE("stream", ["ReadableStream", "WritableStream", "Stream"], e)
  }
  var h = null !== (t$readable = t.readable) && undefined !== t$readable ? t$readable : w$isReadableNodeStream(e)
  var g = null !== (t$writable = t.writable) && undefined !== t$writable ? t$writable : w$isWritableNodeStream(e)
  var /* [auto-meaningful-name] */e$_writableState = e._writableState
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  var y = function () {
    if (!e.writable) {
      j()
    }
  }
  var w = w$willEmitClose(e) && w$isReadableNodeStream(e) === h && w$isWritableNodeStream(e) === g
  var N = w$isWritableFinished(e, false)
  var j = function () {
    N = true
    if (e.destroyed) {
      w = false
    }
    if (!w || e.readable && !h) {
      if (!(h && !H)) {
        o.call(e)
      }
    }
  }
  var H = w$isReadableFinished(e, false)
  var V = function () {
    H = true
    if (e.destroyed) {
      w = false
    }
    if (!w || e.writable && !g) {
      if (!(g && !N)) {
        o.call(e)
      }
    }
  }
  var G = function (t) {
    o.call(e, t)
  }
  var z = w$isClosed(e)
  var Q = function () {
    z = true
    var t = w$isWritableErrored(e) || w$isReadableErrored(e)
    return t && "boolean" !== typeof t ? o.call(e, t) : h && !H && w$isReadableNodeStream(e, true) && !w$isReadableFinished(e, false) ? o.call(e, new o$codes$ERR_STREAM_PREMATURE_CLOSE()) : !g || N || w$isWritableFinished(e, false) ? void o.call(e) : o.call(e, new o$codes$ERR_STREAM_PREMATURE_CLOSE())
  }
  var W = function () {
    z = true
    var t = w$isWritableErrored(e) || w$isReadableErrored(e)
    if (t && "boolean" !== typeof t) {
      return o.call(e, t)
    }
    o.call(e)
  }
  var K = function () {
    e.req.on("finish", j)
  }
  if (M(e)) {
    e.on("complete", j)
    if (!w) {
      e.on("abort", Q)
    }
    if (e.req) {
      K()
    } else {
      e.on("request", K)
    }
  } else {
    if (g && !e$_writableState) {
      e.on("end", y)
      e.on("close", y)
    }
  }
  if (!(w || "boolean" !== typeof e.aborted)) {
    e.on("aborted", Q)
  }
  e.on("end", V)
  e.on("finish", j)
  if (false !== t.error) {
    e.on("error", G)
  }
  e.on("close", Q)
  if (z) {
    i.nextTick(Q)
  } else {
    if (null !== e$_writableState && undefined !== e$_writableState && e$_writableState.errorEmitted || null !== e$_readableState && undefined !== e$_readableState && e$_readableState.errorEmitted) {
      if (!w) {
        i.nextTick(W)
      }
    } else {
      if ((h || w && !w$isReadable(e) || !N && false !== w$isWritable(e)) && (g || w && !w$isWritable(e) || !H && false !== w$isReadable(e))) {
        if (e$_readableState && e.req && e.aborted) {
          i.nextTick(W)
        }
      } else {
        i.nextTick(W)
      }
    }
  }
  var X = function () {
    o = L
    e.removeListener("aborted", Q)
    e.removeListener("complete", j)
    e.removeListener("abort", Q)
    e.removeListener("request", K)
    if (e.req) {
      e.req.removeListener("finish", j)
    }
    e.removeListener("end", y)
    e.removeListener("close", y)
    e.removeListener("finish", j)
    e.removeListener("end", V)
    e.removeListener("error", G)
    e.removeListener("close", Q)
  }
  if (t.signal && !z) {
    var Y = function () {
      var n = o
      X()
      n.call(e, new o$AbortError(undefined, {
        cause: t.signal.reason
      }))
    }
    if (t.signal.aborted) {
      i.nextTick(Y)
    } else {
      var q = (r = r || require(/* 427 */"./427/index").addAbortListener)(t.signal, Y)
      var $ = o
      o = l$once(function () {
        q[v$SymbolDispose]()
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), r = 0; r < arguments$length; r++) {
          n[r] = arguments[r]
        }
        $.apply(e, n)
      })
    }
  }
  return X
}
function U(e, t, o) {
  var s = false
  var c = L
  if (t.signal) {
    c = function () {
      s = true
      o.call(e, new o$AbortError(undefined, {
        cause: t.signal.reason
      }))
    }
    if (t.signal.aborted) {
      i.nextTick(c)
    } else {
      var u = (r = r || require(/* 427 */"./427/index").addAbortListener)(t.signal, c)
      var l = o
      o = l$once(function () {
        u[v$SymbolDispose]()
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), r = 0; r < arguments$length; r++) {
          n[r] = arguments[r]
        }
        l.apply(e, n)
      })
    }
  }
  var f = function () {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), r = 0; r < arguments$length; r++) {
      n[r] = arguments[r]
    }
    if (!s) {
      i.nextTick(function () {
        return o.apply(e, n)
      })
    }
  }
  v$PromisePrototypeThen(e[w$kIsClosedPromise].promise, f, f)
  return L
}
module.exports = j
module.exports.finished = function (e, t) {
  var n
  var r = false
  if (null === t) {
    t = l$kEmptyObject
  }
  if (null !== (n = t) && undefined !== n && n.cleanup) {
    h$validateBoolean(t.cleanup, "cleanup")
    r = t.cleanup
  }
  return new v$Promise(function (n, i) {
    var o = j(e, t, function (e) {
      if (r) {
        o()
      }
      if (e) {
        i(e)
      } else {
        n()
      }
    })
  })
}
