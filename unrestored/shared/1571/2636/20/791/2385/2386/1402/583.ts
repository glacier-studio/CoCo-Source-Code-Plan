/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：583
 */

"use strict"

var r = require(/* 311 */"./311")
var /* [auto-meaningful-name] */r$SymbolAsyncIterator = r.SymbolAsyncIterator
var /* [auto-meaningful-name] */r$SymbolIterator = r.SymbolIterator
var /* [auto-meaningful-name] */r$SymbolFor = r.SymbolFor
var s = r$SymbolFor("nodejs.stream.destroyed")
var c = r$SymbolFor("nodejs.stream.errored")
var u = r$SymbolFor("nodejs.stream.readable")
var l = r$SymbolFor("nodejs.stream.writable")
var f = r$SymbolFor("nodejs.stream.disturbed")
var d = r$SymbolFor("nodejs.webstream.isClosedPromise")
var h = r$SymbolFor("nodejs.webstream.controllerErrorFunction")
function p(e) {
  var /* [auto-meaningful-name] */e$_readableState
  var n = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
  return !(!e || "function" !== typeof e.pipe || "function" !== typeof e.on || n && ("function" !== typeof e.pause || "function" !== typeof e.resume) || e._writableState && false === (null === (e$_readableState = e._readableState) || undefined === e$_readableState ? undefined : e$_readableState.readable) || e._writableState && !e._readableState)
}
function _(e) {
  var /* [auto-meaningful-name] */e$_writableState
  return !(!e || "function" !== typeof e.write || "function" !== typeof e.on || e._readableState && false === (null === (e$_writableState = e._writableState) || undefined === e$_writableState ? undefined : e$_writableState.writable))
}
function A(e) {
  return e && (e._readableState || e._writableState || "function" === typeof e.write && "function" === typeof e.on || "function" === typeof e.pipe && "function" === typeof e.on)
}
function g(e) {
  return !(!e || A(e) || "function" !== typeof e.pipeThrough || "function" !== typeof e.getReader || "function" !== typeof e.cancel)
}
function v(e) {
  return !(!e || A(e) || "function" !== typeof e.getWriter || "function" !== typeof e.abort)
}
function m(e) {
  return !(!e || A(e) || "object" !== typeof e.readable || "object" !== typeof e.writable)
}
function y(e) {
  if (!A(e)) {
    return null
  }
  var /* [auto-meaningful-name] */e$_writableState = e._writableState
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  var r = e$_writableState || e$_readableState
  return !!(e.destroyed || e[s] || null !== r && undefined !== r && r.destroyed)
}
function b(e) {
  if (!_(e)) {
    return null
  }
  if (true === e.writableEnded) {
    return true
  }
  var /* [auto-meaningful-name] */e$_writableState = e._writableState
  return (null === e$_writableState || undefined === e$_writableState || !e$_writableState.errored) && ("boolean" !== typeof (null === e$_writableState || undefined === e$_writableState ? undefined : e$_writableState.ended) ? null : e$_writableState.ended)
}
function w(e, t) {
  if (!p(e)) {
    return null
  }
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  return (null === e$_readableState || undefined === e$_readableState || !e$_readableState.errored) && ("boolean" !== typeof (null === e$_readableState || undefined === e$_readableState ? undefined : e$_readableState.endEmitted) ? null : !!(e$_readableState.endEmitted || false === t && true === e$_readableState.ended && 0 === e$_readableState.length))
}
function E(e) {
  return e && null != e[u] ? e[u] : "boolean" !== typeof (null === e || undefined === e ? undefined : e.readable) ? null : !y(e) && p(e) && e.readable && !w(e)
}
function x(e) {
  return e && null != e[l] ? e[l] : "boolean" !== typeof (null === e || undefined === e ? undefined : e.writable) ? null : !y(e) && _(e) && e.writable && !b(e)
}
function C(e) {
  return "boolean" === typeof e._closed && "boolean" === typeof e._defaultKeepAlive && "boolean" === typeof e._removedConnection && "boolean" === typeof e._removedContLen
}
function O(e) {
  return "boolean" === typeof e._sent100 && C(e)
}
module.exports = {
  isDestroyed: y,
  kIsDestroyed: s,
  isDisturbed: function (e) {
    var t
    return !(!e || !(null !== (t = e[f]) && undefined !== t ? t : e.readableDidRead || e.readableAborted))
  },
  kIsDisturbed: f,
  isErrored: function (e) {
    var t
    var n
    var r
    var i
    var o
    var a
    var /* [auto-meaningful-name] */e$_readableState
    var /* [auto-meaningful-name] */e$_writableState
    var /* [auto-meaningful-name] */e$_readableState1
    var /* [auto-meaningful-name] */e$_writableState1
    return !(!e || !(null !== (t = null !== (n = null !== (r = null !== (i = null !== (o = null !== (a = e[c]) && undefined !== a ? a : e.readableErrored) && undefined !== o ? o : e.writableErrored) && undefined !== i ? i : null === (e$_readableState = e._readableState) || undefined === e$_readableState ? undefined : e$_readableState.errorEmitted) && undefined !== r ? r : null === (e$_writableState = e._writableState) || undefined === e$_writableState ? undefined : e$_writableState.errorEmitted) && undefined !== n ? n : null === (e$_readableState1 = e._readableState) || undefined === e$_readableState1 ? undefined : e$_readableState1.errored) && undefined !== t ? t : null === (e$_writableState1 = e._writableState) || undefined === e$_writableState1 ? undefined : e$_writableState1.errored))
  },
  kIsErrored: c,
  isReadable: E,
  kIsReadable: u,
  kIsClosedPromise: d,
  kControllerErrorFunction: h,
  kIsWritable: l,
  isClosed: function (e) {
    if (!A(e)) {
      return null
    }
    if ("boolean" === typeof e.closed) {
      return e.closed
    }
    var /* [auto-meaningful-name] */e$_writableState = e._writableState
    var /* [auto-meaningful-name] */e$_readableState = e._readableState
    return "boolean" === typeof (null === e$_writableState || undefined === e$_writableState ? undefined : e$_writableState.closed) || "boolean" === typeof (null === e$_readableState || undefined === e$_readableState ? undefined : e$_readableState.closed) ? (null === e$_writableState || undefined === e$_writableState ? undefined : e$_writableState.closed) || (null === e$_readableState || undefined === e$_readableState ? undefined : e$_readableState.closed) : "boolean" === typeof e._closed && C(e) ? e._closed : null
  },
  isDuplexNodeStream: function (e) {
    return !(!e || "function" !== typeof e.pipe || !e._readableState || "function" !== typeof e.on || "function" !== typeof e.write)
  },
  isFinished: function (e, t) {
    return A(e) ? !!y(e) || (false === (null === t || undefined === t ? undefined : t.readable) || !E(e)) && (false === (null === t || undefined === t ? undefined : t.writable) || !x(e)) : null
  },
  isIterable: function (e, t) {
    return null != e && (true === t ? "function" === typeof e[r$SymbolAsyncIterator] : false === t ? "function" === typeof e[r$SymbolIterator] : "function" === typeof e[r$SymbolAsyncIterator] || "function" === typeof e[r$SymbolIterator])
  },
  isReadableNodeStream: p,
  isReadableStream: g,
  isReadableEnded: function (e) {
    if (!p(e)) {
      return null
    }
    if (true === e.readableEnded) {
      return true
    }
    var /* [auto-meaningful-name] */e$_readableState = e._readableState
    return !(!e$_readableState || e$_readableState.errored) && ("boolean" !== typeof (null === e$_readableState || undefined === e$_readableState ? undefined : e$_readableState.ended) ? null : e$_readableState.ended)
  },
  isReadableFinished: w,
  isReadableErrored: function (e) {
    var t
    var /* [auto-meaningful-name] */e$_readableState
    return A(e) ? e.readableErrored ? e.readableErrored : null !== (t = null === (e$_readableState = e._readableState) || undefined === e$_readableState ? undefined : e$_readableState.errored) && undefined !== t ? t : null : null
  },
  isNodeStream: A,
  isWebStream: function (e) {
    return g(e) || v(e) || m(e)
  },
  isWritable: x,
  isWritableNodeStream: _,
  isWritableStream: v,
  isWritableEnded: b,
  isWritableFinished: function (e, t) {
    if (!_(e)) {
      return null
    }
    if (true === e.writableFinished) {
      return true
    }
    var /* [auto-meaningful-name] */e$_writableState = e._writableState
    return (null === e$_writableState || undefined === e$_writableState || !e$_writableState.errored) && ("boolean" !== typeof (null === e$_writableState || undefined === e$_writableState ? undefined : e$_writableState.finished) ? null : !!(e$_writableState.finished || false === t && true === e$_writableState.ended && 0 === e$_writableState.length))
  },
  isWritableErrored: function (e) {
    var t
    var /* [auto-meaningful-name] */e$_writableState
    return A(e) ? e.writableErrored ? e.writableErrored : null !== (t = null === (e$_writableState = e._writableState) || undefined === e$_writableState ? undefined : e$_writableState.errored) && undefined !== t ? t : null : null
  },
  isServerRequest: function (e) {
    var /* [auto-meaningful-name] */e$req
    return "boolean" === typeof e._consuming && "boolean" === typeof e._dumped && undefined === (null === (e$req = e.req) || undefined === e$req ? undefined : e$req.upgradeOrConnect)
  },
  isServerResponse: O,
  willEmitClose: function (e) {
    if (!A(e)) {
      return null
    }
    var /* [auto-meaningful-name] */e$_writableState = e._writableState
    var /* [auto-meaningful-name] */e$_readableState = e._readableState
    var r = e$_writableState || e$_readableState
    return !r && O(e) || !!(r && r.autoDestroy && r.emitClose && false === r.closed)
  },
  isTransformStream: m
}
