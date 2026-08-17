/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1161
 */

"use strict"

var r = require(/* 298 */"process")
var i = require(/* 311 */"./311")
var /* [auto-meaningful-name] */i$ArrayPrototypeSlice = i.ArrayPrototypeSlice
var /* [auto-meaningful-name] */i$Error = i.Error
var /* [auto-meaningful-name] */i$FunctionPrototypeSymbolHasInstance = i.FunctionPrototypeSymbolHasInstance
var /* [auto-meaningful-name] */i$ObjectDefineProperty = i.ObjectDefineProperty
var /* [auto-meaningful-name] */i$ObjectDefineProperties = i.ObjectDefineProperties
var /* [auto-meaningful-name] */i$ObjectSetPrototypeOf = i.ObjectSetPrototypeOf
var /* [auto-meaningful-name] */i$StringPrototypeToLowerCase = i.StringPrototypeToLowerCase
var /* [auto-meaningful-name] */i$Symbol = i.Symbol
var /* [auto-meaningful-name] */i$SymbolHasInstance = i.SymbolHasInstance
module.exports = M
M.WritableState = P
var /* [auto-meaningful-name] */require_983_$_986_983$EventEmitter = require(/* 983 */"./986/983").EventEmitter
var /* [auto-meaningful-name] */require_1160_$_1160$Stream = require(/* 1160 */"./1160").Stream
var /* [auto-meaningful-name] */require_333_$_333_index$Buffer = require(/* 333 */"./333/index").Buffer
var g = require(/* 769 */"./769")
var /* [auto-meaningful-name] */require_987_$_987$addAbortSignal = require(/* 987 */"./987").addAbortSignal
var m = require(/* 988 */"./988")
var /* [auto-meaningful-name] */m$getHighWaterMark = m.getHighWaterMark
var /* [auto-meaningful-name] */m$getDefaultHighWaterMark = m.getDefaultHighWaterMark
var /* [auto-meaningful-name] */require_402_$_402$codes = require(/* 402 */"./402").codes
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_INVALID_ARG_TYPE = require_402_$_402$codes.ERR_INVALID_ARG_TYPE
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_METHOD_NOT_IMPLEMENTED = require_402_$_402$codes.ERR_METHOD_NOT_IMPLEMENTED
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_MULTIPLE_CALLBACK = require_402_$_402$codes.ERR_MULTIPLE_CALLBACK
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_STREAM_CANNOT_PIPE = require_402_$_402$codes.ERR_STREAM_CANNOT_PIPE
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_STREAM_DESTROYED = require_402_$_402$codes.ERR_STREAM_DESTROYED
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_STREAM_ALREADY_FINISHED = require_402_$_402$codes.ERR_STREAM_ALREADY_FINISHED
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_STREAM_NULL_VALUES = require_402_$_402$codes.ERR_STREAM_NULL_VALUES
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_STREAM_WRITE_AFTER_END = require_402_$_402$codes.ERR_STREAM_WRITE_AFTER_END
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_UNKNOWN_ENCODING = require_402_$_402$codes.ERR_UNKNOWN_ENCODING
var /* [auto-meaningful-name] */g$errorOrDestroy = g.errorOrDestroy
function R() {}
i$ObjectSetPrototypeOf(M.prototype, require_1160_$_1160$Stream.prototype)
i$ObjectSetPrototypeOf(M, require_1160_$_1160$Stream)
var F = i$Symbol("kOnFinished")
function P(e, t, r) {
  if ("boolean" !== typeof r) {
    r = t instanceof require(/* 584 */"./584/index")
  }
  this.objectMode = !(!e || !e.objectMode)
  if (r) {
    this.objectMode = this.objectMode || !(!e || !e.writableObjectMode)
  }
  this.highWaterMark = e ? m$getHighWaterMark(this, e, "writableHighWaterMark", r) : m$getDefaultHighWaterMark(false)
  this.finalCalled = false
  this.needDrain = false
  this.ending = false
  this.ended = false
  this.finished = false
  this.destroyed = false
  var i = !(!e || false !== e.decodeStrings)
  this.decodeStrings = !i
  this.defaultEncoding = e && e.defaultEncoding || "utf8"
  this.length = 0
  this.writing = false
  this.corked = 0
  this.sync = true
  this.bufferProcessing = false
  this.onwrite = H.bind(undefined, t)
  this.writecb = null
  this.writelen = 0
  this.afterWriteTickInfo = null
  N(this)
  this.pendingcb = 0
  this.constructed = true
  this.prefinished = false
  this.errorEmitted = false
  this.emitClose = !e || false !== e.emitClose
  this.autoDestroy = !e || false !== e.autoDestroy
  this.errored = null
  this.closed = false
  this.closeEmitted = false
  this[F] = []
}
function N(e) {
  e.buffered = []
  e.bufferedIndex = 0
  e.allBuffers = true
  e.allNoop = true
}
function M(e) {
  var t = this
  var r = this instanceof require(/* 584 */"./584/index")
  if (!r && !i$FunctionPrototypeSymbolHasInstance(M, this)) {
    return new M(e)
  }
  this._writableState = new P(e, this, r)
  if (e) {
    if ("function" === typeof e.write) {
      this._write = e.write
    }
    if ("function" === typeof e.writev) {
      this._writev = e.writev
    }
    if ("function" === typeof e.destroy) {
      this._destroy = e.destroy
    }
    if ("function" === typeof e.final) {
      this._final = e.final
    }
    if ("function" === typeof e.construct) {
      this._construct = e.construct
    }
    if (e.signal) {
      require_987_$_987$addAbortSignal(e.signal, this)
    }
  }
  require_1160_$_1160$Stream.call(this, e)
  g.construct(this, function () {
    var /* [auto-meaningful-name] */t$_writableState = t._writableState
    if (!t$_writableState.writing) {
      Q(t, t$_writableState)
    }
    X(t, t$_writableState)
  })
}
function L(e, t, n, i) {
  var o
  var /* [auto-meaningful-name] */e$_writableState = e._writableState
  if ("function" === typeof n) {
    i = n
    n = e$_writableState.defaultEncoding
  } else {
    if (n) {
      if ("buffer" !== n && !require_333_$_333_index$Buffer.isEncoding(n)) {
        throw new require_402_$_402$codes$ERR_UNKNOWN_ENCODING(n)
      }
    } else {
      n = e$_writableState.defaultEncoding
    }
    if ("function" !== typeof i) {
      i = R
    }
  }
  if (null === t) {
    throw new require_402_$_402$codes$ERR_STREAM_NULL_VALUES()
  }
  if (!e$_writableState.objectMode) {
    if ("string" === typeof t) {
      if (false !== e$_writableState.decodeStrings) {
        t = require_333_$_333_index$Buffer.from(t, n)
        n = "buffer"
      }
    } else if (t instanceof require_333_$_333_index$Buffer) {
      n = "buffer"
    } else {
      if (!require_1160_$_1160$Stream._isUint8Array(t)) {
        throw new require_402_$_402$codes$ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], t)
      }
      t = require_1160_$_1160$Stream._uint8ArrayToBuffer(t)
      n = "buffer"
    }
  }
  if (e$_writableState.ending) {
    o = new require_402_$_402$codes$ERR_STREAM_WRITE_AFTER_END()
  } else {
    if (e$_writableState.destroyed) {
      o = new require_402_$_402$codes$ERR_STREAM_DESTROYED("write")
    }
  }
  return o ? (r.nextTick(i, o), g$errorOrDestroy(e, o, true), o) : (e$_writableState.pendingcb++, function (e, t, n, r, i) {
    var o = t.objectMode ? 1 : n.length
    t.length += o
    var a = t.length < t.highWaterMark
    if (!a) {
      t.needDrain = true
    }
    if (t.writing || t.corked || t.errored || !t.constructed) {
      t.buffered.push({
        chunk: n,
        encoding: r,
        callback: i
      })
      if (t.allBuffers && "buffer" !== r) {
        t.allBuffers = false
      }
      if (t.allNoop && i !== R) {
        t.allNoop = false
      }
    } else {
      t.writelen = o
      t.writecb = i
      t.writing = true
      t.sync = true
      e._write(n, r, t.onwrite)
      t.sync = false
    }
    return a && !t.errored && !t.destroyed
  }(e, e$_writableState, t, n, i))
}
function j(e, t, n, r, i, o, a) {
  t.writelen = r
  t.writecb = a
  t.writing = true
  t.sync = true
  if (t.destroyed) {
    t.onwrite(new require_402_$_402$codes$ERR_STREAM_DESTROYED("write"))
  } else {
    if (n) {
      e._writev(i, t.onwrite)
    } else {
      e._write(i, o, t.onwrite)
    }
  }
  t.sync = false
}
function U(e, t, n, r) {
  --t.pendingcb
  r(n)
  z(t)
  g$errorOrDestroy(e, n)
}
function H(e, t) {
  var /* [auto-meaningful-name] */e$_writableState = e._writableState
  var /* [auto-meaningful-name] */e$_writableState$sync = e$_writableState.sync
  var /* [auto-meaningful-name] */e$_writableState$writecb = e$_writableState.writecb
  if ("function" === typeof e$_writableState$writecb) {
    e$_writableState.writing = false
    e$_writableState.writecb = null
    e$_writableState.length -= e$_writableState.writelen
    e$_writableState.writelen = 0
    if (t) {
      t.stack
      if (!e$_writableState.errored) {
        e$_writableState.errored = t
      }
      if (e._readableState && !e._readableState.errored) {
        e._readableState.errored = t
      }
      if (e$_writableState$sync) {
        r.nextTick(U, e, e$_writableState, t, e$_writableState$writecb)
      } else {
        U(e, e$_writableState, t, e$_writableState$writecb)
      }
    } else {
      if (e$_writableState.buffered.length > e$_writableState.bufferedIndex) {
        Q(e, e$_writableState)
      }
      if (e$_writableState$sync) {
        if (null !== e$_writableState.afterWriteTickInfo && e$_writableState.afterWriteTickInfo.cb === e$_writableState$writecb) {
          e$_writableState.afterWriteTickInfo.count++
        } else {
          e$_writableState.afterWriteTickInfo = {
            count: 1,
            cb: e$_writableState$writecb,
            stream: e,
            state: e$_writableState
          }
          r.nextTick(V, e$_writableState.afterWriteTickInfo)
        }
      } else {
        G(e, e$_writableState, 1, e$_writableState$writecb)
      }
    }
  } else {
    g$errorOrDestroy(e, new require_402_$_402$codes$ERR_MULTIPLE_CALLBACK())
  }
}
function V(e) {
  var /* [auto-meaningful-name] */e$stream = e.stream
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$count = e.count
  var i = e.cb
  e$state.afterWriteTickInfo = null
  return G(e$stream, e$state, e$count, i)
}
function G(e, t, n, r) {
  for (!t.ending && !e.destroyed && 0 === t.length && t.needDrain && (t.needDrain = false, e.emit("drain")); n-- > 0;) {
    t.pendingcb--
    r()
  }
  if (t.destroyed) {
    z(t)
  }
  X(e, t)
}
function z(e) {
  if (!e.writing) {
    for (var /* [auto-meaningful-name] */e$bufferedIndex = e.bufferedIndex; e$bufferedIndex < e.buffered.length; ++e$bufferedIndex) {
      var /* [auto-meaningful-name] */e$errored
      var r = e.buffered[e$bufferedIndex]
      var /* [auto-meaningful-name] */r$chunk = r.chunk
      var /* [auto-meaningful-name] */r$callback = r.callback
      var a = e.objectMode ? 1 : r$chunk.length
      e.length -= a
      r$callback(null !== (e$errored = e.errored) && undefined !== e$errored ? e$errored : new require_402_$_402$codes$ERR_STREAM_DESTROYED("write"))
    }
    for (var s = e[F].splice(0), c = 0; c < s.length; c++) {
      var /* [auto-meaningful-name] */e$errored1
      s[c](null !== (e$errored1 = e.errored) && undefined !== e$errored1 ? e$errored1 : new require_402_$_402$codes$ERR_STREAM_DESTROYED("end"))
    }
    N(e)
  }
}
function Q(e, t) {
  if (!(t.corked || t.bufferProcessing || t.destroyed) && t.constructed) {
    var /* [auto-meaningful-name] */t$buffered = t.buffered
    var /* [auto-meaningful-name] */t$bufferedIndex = t.bufferedIndex
    var /* [auto-meaningful-name] */t$objectMode = t.objectMode
    var a = t$buffered.length - t$bufferedIndex
    if (a) {
      var s = t$bufferedIndex
      t.bufferProcessing = true
      if (a > 1 && e._writev) {
        t.pendingcb -= a - 1
        var c = t.allNoop ? R : function (e) {
          for (var t = s; t < t$buffered.length; ++t) {
            t$buffered[t].callback(e)
          }
        }
        var u = t.allNoop && 0 === s ? t$buffered : i$ArrayPrototypeSlice(t$buffered, s)
        u.allBuffers = t.allBuffers
        j(e, t, true, t.length, u, "", c)
        N(t)
      } else {
        do {
          var l = t$buffered[s]
          var /* [auto-meaningful-name] */l$chunk = l.chunk
          var /* [auto-meaningful-name] */l$encoding = l.encoding
          var /* [auto-meaningful-name] */l$callback = l.callback
          t$buffered[s++] = null
          j(e, t, false, t$objectMode ? 1 : l$chunk.length, l$chunk, l$encoding, l$callback)
        } while (s < t$buffered.length && !t.writing)
        if (s === t$buffered.length) {
          N(t)
        } else {
          if (s > 256) {
            t$buffered.splice(0, s)
            t.bufferedIndex = 0
          } else {
            t.bufferedIndex = s
          }
        }
      }
      t.bufferProcessing = false
    }
  }
}
function W(e) {
  return e.ending && !e.destroyed && e.constructed && 0 === e.length && !e.errored && 0 === e.buffered.length && !e.finished && !e.writing && !e.errorEmitted && !e.closeEmitted
}
function K(e, t) {
  if (!(t.prefinished || t.finalCalled)) {
    if ("function" !== typeof e._final || t.destroyed) {
      t.prefinished = true
      e.emit("prefinish")
    } else {
      t.finalCalled = true;
      (function (e, t) {
        var n = false
        function i(i) {
          if (n) {
            g$errorOrDestroy(e, null !== i && undefined !== i ? i : require_402_$_402$codes$ERR_MULTIPLE_CALLBACK())
          } else if (n = true, t.pendingcb--, i) {
            for (var o = t[F].splice(0), a = 0; a < o.length; a++) {
              o[a](i)
            }
            g$errorOrDestroy(e, i, t.sync)
          } else if (W(t)) {
            t.prefinished = true
            e.emit("prefinish")
            t.pendingcb++
            r.nextTick(Y, e, t)
          }
        }
        t.sync = true
        t.pendingcb++
        try {
          e._final(i)
        } catch (o) {
          i(o)
        }
        t.sync = false
      })(e, t)
    }
  }
}
function X(e, t, n) {
  if (W(t)) {
    K(e, t)
    if (0 === t.pendingcb) {
      if (n) {
        t.pendingcb++
        r.nextTick(function (e, t) {
          if (W(t)) {
            Y(e, t)
          } else {
            t.pendingcb--
          }
        }, e, t)
      } else {
        if (W(t)) {
          t.pendingcb++
          Y(e, t)
        }
      }
    }
  }
}
function Y(e, t) {
  t.pendingcb--
  t.finished = true
  for (var n = t[F].splice(0), r = 0; r < n.length; r++) {
    n[r]()
  }
  e.emit("finish")
  if (t.autoDestroy) {
    var /* [auto-meaningful-name] */e$_readableState = e._readableState
    if (!e$_readableState || e$_readableState.autoDestroy && (e$_readableState.endEmitted || false === e$_readableState.readable)) {
      e.destroy()
    }
  }
}
P.prototype.getBuffer = function () {
  return i$ArrayPrototypeSlice(this.buffered, this.bufferedIndex)
}
i$ObjectDefineProperty(P.prototype, "bufferedRequestCount", {
  __proto__: null,
  get: function () {
    return this.buffered.length - this.bufferedIndex
  }
})
i$ObjectDefineProperty(M, i$SymbolHasInstance, {
  __proto__: null,
  value: function (e) {
    return !!i$FunctionPrototypeSymbolHasInstance(this, e) || this === M && e && e._writableState instanceof P
  }
})
M.prototype.pipe = function () {
  g$errorOrDestroy(this, new require_402_$_402$codes$ERR_STREAM_CANNOT_PIPE())
}
M.prototype.write = function (e, t, n) {
  return true === L(this, e, t, n)
}
M.prototype.cork = function () {
  this._writableState.corked++
}
M.prototype.uncork = function () {
  var /* [auto-meaningful-name] */this$_writableState = this._writableState
  if (this$_writableState.corked) {
    this$_writableState.corked--
    if (!this$_writableState.writing) {
      Q(this, this$_writableState)
    }
  }
}
M.prototype.setDefaultEncoding = function (e) {
  if ("string" === typeof e) {
    e = i$StringPrototypeToLowerCase(e)
  }
  if (!require_333_$_333_index$Buffer.isEncoding(e)) {
    throw new require_402_$_402$codes$ERR_UNKNOWN_ENCODING(e)
  }
  this._writableState.defaultEncoding = e
  return this
}
M.prototype._write = function (e, t, n) {
  if (!this._writev) {
    throw new require_402_$_402$codes$ERR_METHOD_NOT_IMPLEMENTED("_write()")
  }
  this._writev([
    {
      chunk: e,
      encoding: t
    }
  ], n)
}
M.prototype._writev = null
M.prototype.end = function (e, t, n) {
  var i
  var /* [auto-meaningful-name] */this$_writableState = this._writableState
  if ("function" === typeof e) {
    n = e
    e = null
    t = null
  } else {
    if ("function" === typeof t) {
      n = t
      t = null
    }
  }
  if (null !== e && undefined !== e) {
    var s = L(this, e, t)
    if (s instanceof i$Error) {
      i = s
    }
  }
  if (this$_writableState.corked) {
    this$_writableState.corked = 1
    this.uncork()
  }
  if (!i) {
    if (this$_writableState.errored || this$_writableState.ending) {
      if (this$_writableState.finished) {
        i = new require_402_$_402$codes$ERR_STREAM_ALREADY_FINISHED("end")
      } else {
        if (this$_writableState.destroyed) {
          i = new require_402_$_402$codes$ERR_STREAM_DESTROYED("end")
        }
      }
    } else {
      this$_writableState.ending = true
      X(this, this$_writableState, true)
      this$_writableState.ended = true
    }
  }
  if ("function" === typeof n) {
    if (i || this$_writableState.finished) {
      r.nextTick(n, i)
    } else {
      this$_writableState[F].push(n)
    }
  }
  return this
}
i$ObjectDefineProperties(M.prototype, {
  closed: {
    __proto__: null,
    get: function () {
      return !!this._writableState && this._writableState.closed
    }
  },
  destroyed: {
    __proto__: null,
    get: function () {
      return !!this._writableState && this._writableState.destroyed
    },
    set: function (e) {
      if (this._writableState) {
        this._writableState.destroyed = e
      }
    }
  },
  writable: {
    __proto__: null,
    get: function () {
      var /* [auto-meaningful-name] */this$_writableState = this._writableState
      return !!this$_writableState && false !== this$_writableState.writable && !this$_writableState.destroyed && !this$_writableState.errored && !this$_writableState.ending && !this$_writableState.ended
    },
    set: function (e) {
      if (this._writableState) {
        this._writableState.writable = !!e
      }
    }
  },
  writableFinished: {
    __proto__: null,
    get: function () {
      return !!this._writableState && this._writableState.finished
    }
  },
  writableObjectMode: {
    __proto__: null,
    get: function () {
      return !!this._writableState && this._writableState.objectMode
    }
  },
  writableBuffer: {
    __proto__: null,
    get: function () {
      return this._writableState && this._writableState.getBuffer()
    }
  },
  writableEnded: {
    __proto__: null,
    get: function () {
      return !!this._writableState && this._writableState.ending
    }
  },
  writableNeedDrain: {
    __proto__: null,
    get: function () {
      var /* [auto-meaningful-name] */this$_writableState = this._writableState
      return !!this$_writableState && !this$_writableState.destroyed && !this$_writableState.ending && this$_writableState.needDrain
    }
  },
  writableHighWaterMark: {
    __proto__: null,
    get: function () {
      return this._writableState && this._writableState.highWaterMark
    }
  },
  writableCorked: {
    __proto__: null,
    get: function () {
      return this._writableState ? this._writableState.corked : 0
    }
  },
  writableLength: {
    __proto__: null,
    get: function () {
      return this._writableState && this._writableState.length
    }
  },
  errored: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return this._writableState ? this._writableState.errored : null
    }
  },
  writableAborted: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return !(false === this._writableState.writable || !this._writableState.destroyed && !this._writableState.errored || this._writableState.finished)
    }
  }
})
var q
var /* [auto-meaningful-name] */g$destroy = g.destroy
function J() {
  if (undefined === q) {
    q = {}
  }
  return q
}
M.prototype.destroy = function (e, t) {
  var /* [auto-meaningful-name] */this$_writableState = this._writableState
  if (!this$_writableState.destroyed && (this$_writableState.bufferedIndex < this$_writableState.buffered.length || this$_writableState[F].length)) {
    r.nextTick(z, this$_writableState)
  }
  g$destroy.call(this, e, t)
  return this
}
M.prototype._undestroy = g.undestroy
M.prototype._destroy = function (e, t) {
  t(e)
}
M.prototype[require_983_$_986_983$EventEmitter.captureRejectionSymbol] = function (e) {
  this.destroy(e)
}
M.fromWeb = function (e, t) {
  return J().newStreamWritableFromWritableStream(e, t)
}
M.toWeb = function (e) {
  return J().newWritableStreamFromStreamWritable(e)
}
