/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：986
 */

"use strict"

var r = require(/* 500 */"../../../../../../207/787/500")
var i = require(/* 1 */"regenerator-runtime")
var o = require(/* 399 */"../../../../../../207/787/399/index")
var a = require(/* 984 */"./984/index")
var s = require(/* 985 */"./985/index")
var c = require(/* 298 */"process")
var u = require(/* 311 */"../311")
var /* [auto-meaningful-name] */u$ArrayPrototypeIndexOf = u.ArrayPrototypeIndexOf
var /* [auto-meaningful-name] */u$NumberIsInteger = u.NumberIsInteger
var /* [auto-meaningful-name] */u$NumberIsNaN = u.NumberIsNaN
var /* [auto-meaningful-name] */u$NumberParseInt = u.NumberParseInt
var /* [auto-meaningful-name] */u$ObjectDefineProperties = u.ObjectDefineProperties
var /* [auto-meaningful-name] */u$ObjectKeys = u.ObjectKeys
var /* [auto-meaningful-name] */u$ObjectSetPrototypeOf = u.ObjectSetPrototypeOf
var /* [auto-meaningful-name] */u$Promise = u.Promise
var /* [auto-meaningful-name] */u$SafeSet = u.SafeSet
var /* [auto-meaningful-name] */u$SymbolAsyncDispose = u.SymbolAsyncDispose
var /* [auto-meaningful-name] */u$SymbolAsyncIterator = u.SymbolAsyncIterator
var /* [auto-meaningful-name] */u$Symbol = u.Symbol
module.exports = J
J.ReadableState = $
var /* [auto-meaningful-name] */require_983_$_983$EventEmitter = require(/* 983 */"./983").EventEmitter
var E = require(/* 1160 */"../1160")
var /* [auto-meaningful-name] */E$Stream = E.Stream
var /* [auto-meaningful-name] */E$prependListener = E.prependListener
var /* [auto-meaningful-name] */require_333_$$_333_index$Buffer = require(/* 333 */"../333/index").Buffer
var /* [auto-meaningful-name] */require_987_$$_987$addAbortSignal = require(/* 987 */"../987").addAbortSignal
var S = require(/* 650 */"../650")
var T = require(/* 427 */"../427/index").debuglog("stream", function (e) {
  T = e
})
var B = require(/* 2389 */"./2389")
var D = require(/* 769 */"../769")
var I = require(/* 988 */"../988")
var /* [auto-meaningful-name] */I$getHighWaterMark = I.getHighWaterMark
var /* [auto-meaningful-name] */I$getDefaultHighWaterMark = I.getDefaultHighWaterMark
var P = require(/* 402 */"../402")
var /* [auto-meaningful-name] */P$aggregateTwoErrors = P.aggregateTwoErrors
var /* [auto-meaningful-name] */P$codes = P.codes
var /* [auto-meaningful-name] */P$codes$ERR_INVALID_ARG_TYPE = P$codes.ERR_INVALID_ARG_TYPE
var /* [auto-meaningful-name] */P$codes$ERR_METHOD_NOT_IMPLEMENTED = P$codes.ERR_METHOD_NOT_IMPLEMENTED
var /* [auto-meaningful-name] */P$codes$ERR_OUT_OF_RANGE = P$codes.ERR_OUT_OF_RANGE
var /* [auto-meaningful-name] */P$codes$ERR_STREAM_PUSH_AFTER_EOF = P$codes.ERR_STREAM_PUSH_AFTER_EOF
var /* [auto-meaningful-name] */P$codes$ERR_STREAM_UNSHIFT_AFTER_END_EVENT = P$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT
var /* [auto-meaningful-name] */P$AbortError = P.AbortError
var /* [auto-meaningful-name] */require_858_$_858$validateObject = require(/* 858 */"./858").validateObject
var Q = u$Symbol("kPaused")
var /* [auto-meaningful-name] */require_2390_$_2390_index$StringDecoder = require(/* 2390 */"./2390/index").StringDecoder
var K = require(/* 1407 */"./1407")
u$ObjectSetPrototypeOf(J.prototype, E$Stream.prototype)
u$ObjectSetPrototypeOf(J, E$Stream)
var X = function () {}
var /* [auto-meaningful-name] */D$errorOrDestroy = D.errorOrDestroy
function q(e) {
  return {
    enumerable: false,
    get: function () {
      return 0 !== (this.state & e)
    },
    set: function (t) {
      if (t) {
        this.state |= e
      } else {
        this.state &= ~e
      }
    }
  }
}
function $(e, t, r) {
  if ("boolean" !== typeof r) {
    r = t instanceof require(/* 584 */"../584/index")
  }
  this.state = 6192
  if (e && e.objectMode) {
    this.state |= 1
  }
  if (r && e && e.readableObjectMode) {
    this.state |= 1
  }
  this.highWaterMark = e ? I$getHighWaterMark(this, e, "readableHighWaterMark", r) : I$getDefaultHighWaterMark(false)
  this.buffer = new B()
  this.length = 0
  this.pipes = []
  this.flowing = null
  this[Q] = null
  if (e && false === e.emitClose) {
    this.state &= -2049
  }
  if (e && false === e.autoDestroy) {
    this.state &= -4097
  }
  this.errored = null
  this.defaultEncoding = e && e.defaultEncoding || "utf8"
  this.awaitDrainWriters = null
  this.decoder = null
  this.encoding = null
  if (e && e.encoding) {
    this.decoder = new require_2390_$_2390_index$StringDecoder(e.encoding)
    this.encoding = e.encoding
  }
}
function J(e) {
  var t = this
  if (!(this instanceof J)) {
    return new J(e)
  }
  var r = this instanceof require(/* 584 */"../584/index")
  this._readableState = new $(e, this, r)
  if (e) {
    if ("function" === typeof e.read) {
      this._read = e.read
    }
    if ("function" === typeof e.destroy) {
      this._destroy = e.destroy
    }
    if ("function" === typeof e.construct) {
      this._construct = e.construct
    }
    if (e.signal && !r) {
      require_987_$$_987$addAbortSignal(e.signal, this)
    }
  }
  E$Stream.call(this, e)
  D.construct(this, function () {
    if (t._readableState.needReadable) {
      oe(t, t._readableState)
    }
  })
}
function Z(e, t, n, r) {
  T("readableAddChunk", t)
  var i
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  if (0 === (1 & e$_readableState.state)) {
    if ("string" === typeof t) {
      n = n || e$_readableState.defaultEncoding
      if (e$_readableState.encoding !== n) {
        if (r && e$_readableState.encoding) {
          t = require_333_$$_333_index$Buffer.from(t, n).toString(e$_readableState.encoding)
        } else {
          t = require_333_$$_333_index$Buffer.from(t, n)
          n = ""
        }
      }
    } else {
      if (t instanceof require_333_$$_333_index$Buffer) {
        n = ""
      } else {
        if (E$Stream._isUint8Array(t)) {
          t = E$Stream._uint8ArrayToBuffer(t)
          n = ""
        } else {
          if (null != t) {
            i = new P$codes$ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], t)
          }
        }
      }
    }
  }
  if (i) {
    D$errorOrDestroy(e, i)
  } else if (null === t) {
    e$_readableState.state &= -9;
    (function (e, t) {
      T("onEofChunk")
      if (t.ended) {
        return
      }
      if (t.decoder) {
        var n = t.decoder.end()
        if (n && n.length) {
          t.buffer.push(n)
          t.length += t.objectMode ? 1 : n.length
        }
      }
      t.ended = true
      if (t.sync) {
        re(e)
      } else {
        t.needReadable = false
        t.emittedReadable = true
        ie(e)
      }
    })(e, e$_readableState)
  } else if (0 !== (1 & e$_readableState.state) || t && t.length > 0) {
    if (r) {
      if (0 !== (4 & e$_readableState.state)) {
        D$errorOrDestroy(e, new P$codes$ERR_STREAM_UNSHIFT_AFTER_END_EVENT())
      } else {
        if (e$_readableState.destroyed || e$_readableState.errored) {
          return false
        }
        ee(e, e$_readableState, t, true)
      }
    } else if (e$_readableState.ended) {
      D$errorOrDestroy(e, new P$codes$ERR_STREAM_PUSH_AFTER_EOF())
    } else {
      if (e$_readableState.destroyed || e$_readableState.errored) {
        return false
      }
      e$_readableState.state &= -9
      if (e$_readableState.decoder && !n) {
        t = e$_readableState.decoder.write(t)
        if (e$_readableState.objectMode || 0 !== t.length) {
          ee(e, e$_readableState, t, false)
        } else {
          oe(e, e$_readableState)
        }
      } else {
        ee(e, e$_readableState, t, false)
      }
    }
  } else if (!r) {
    e$_readableState.state &= -9
    oe(e, e$_readableState)
  }
  return !e$_readableState.ended && (e$_readableState.length < e$_readableState.highWaterMark || 0 === e$_readableState.length)
}
function ee(e, t, n, r) {
  if (t.flowing && 0 === t.length && !t.sync && e.listenerCount("data") > 0) {
    if (0 !== (65536 & t.state)) {
      t.awaitDrainWriters.clear()
    } else {
      t.awaitDrainWriters = null
    }
    t.dataEmitted = true
    e.emit("data", n)
  } else {
    t.length += t.objectMode ? 1 : n.length
    if (r) {
      t.buffer.unshift(n)
    } else {
      t.buffer.push(n)
    }
    if (0 !== (64 & t.state)) {
      re(e)
    }
  }
  oe(e, t)
}
u$ObjectDefineProperties($.prototype, {
  objectMode: q(1),
  ended: q(2),
  endEmitted: q(4),
  reading: q(8),
  constructed: q(16),
  sync: q(32),
  needReadable: q(64),
  emittedReadable: q(128),
  readableListening: q(256),
  resumeScheduled: q(512),
  errorEmitted: q(1024),
  emitClose: q(2048),
  autoDestroy: q(4096),
  destroyed: q(8192),
  closed: q(16384),
  closeEmitted: q(32768),
  multiAwaitDrain: q(65536),
  readingMore: q(1 << 17),
  dataEmitted: q(1 << 18)
})
J.prototype.destroy = D.destroy
J.prototype._undestroy = D.undestroy
J.prototype._destroy = function (e, t) {
  t(e)
}
J.prototype[require_983_$_983$EventEmitter.captureRejectionSymbol] = function (e) {
  this.destroy(e)
}
J.prototype[u$SymbolAsyncDispose] = function () {
  var e
  var t = this
  if (!this.destroyed) {
    e = this.readableEnded ? null : new P$AbortError()
    this.destroy(e)
  }
  return new u$Promise(function (n, r) {
    return S(t, function (t) {
      return t && t !== e ? r(t) : n(null)
    })
  })
}
J.prototype.push = function (e, t) {
  return Z(this, e, t, false)
}
J.prototype.unshift = function (e, t) {
  return Z(this, e, t, true)
}
J.prototype.isPaused = function () {
  var /* [auto-meaningful-name] */this$_readableState = this._readableState
  return true === this$_readableState[Q] || false === this$_readableState.flowing
}
J.prototype.setEncoding = function (e) {
  var t = new require_2390_$_2390_index$StringDecoder(e)
  this._readableState.decoder = t
  this._readableState.encoding = this._readableState.decoder.encoding
  var n
  var /* [auto-meaningful-name] */this$_readableState$buffer = this._readableState.buffer
  var i = ""
  var a = o(this$_readableState$buffer)
  try {
    for (a.s(); !(n = a.n()).done;) {
      var /* [auto-meaningful-name] */n$value = n.value
      i += t.write(n$value)
    }
  } catch (c) {
    a.e(c)
  } finally {
    a.f()
  }
  this$_readableState$buffer.clear()
  if ("" !== i) {
    this$_readableState$buffer.push(i)
  }
  this._readableState.length = i.length
  return this
}
var te
function ne(e, t) {
  return e <= 0 || 0 === t.length && t.ended ? 0 : 0 !== (1 & t.state) ? 1 : u$NumberIsNaN(e) ? t.flowing && t.length ? t.buffer.first().length : t.length : e <= t.length ? e : t.ended ? t.length : 0
}
function re(e) {
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  T("emitReadable", e$_readableState.needReadable, e$_readableState.emittedReadable)
  e$_readableState.needReadable = false
  if (!e$_readableState.emittedReadable) {
    T("emitReadable", e$_readableState.flowing)
    e$_readableState.emittedReadable = true
    c.nextTick(ie, e)
  }
}
function ie(e) {
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  T("emitReadable_", e$_readableState.destroyed, e$_readableState.length, e$_readableState.ended)
  if (!(e$_readableState.destroyed || e$_readableState.errored || !e$_readableState.length && !e$_readableState.ended)) {
    e.emit("readable")
    e$_readableState.emittedReadable = false
  }
  e$_readableState.needReadable = !e$_readableState.flowing && !e$_readableState.ended && e$_readableState.length <= e$_readableState.highWaterMark
  le(e)
}
function oe(e, t) {
  if (!t.readingMore && t.constructed) {
    t.readingMore = true
    c.nextTick(ae, e, t)
  }
}
function ae(e, t) {
  for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
    var /* [auto-meaningful-name] */t$length = t.length
    T("maybeReadMore read 0")
    e.read(0)
    if (t$length === t.length) {
      break
    }
  }
  t.readingMore = false
}
function se(e) {
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  e$_readableState.readableListening = e.listenerCount("readable") > 0
  if (e$_readableState.resumeScheduled && false === e$_readableState[Q]) {
    e$_readableState.flowing = true
  } else {
    if (e.listenerCount("data") > 0) {
      e.resume()
    } else {
      if (!e$_readableState.readableListening) {
        e$_readableState.flowing = null
      }
    }
  }
}
function ce(e) {
  T("readable nexttick read 0")
  e.read(0)
}
function ue(e, t) {
  T("resume", t.reading)
  if (!t.reading) {
    e.read(0)
  }
  t.resumeScheduled = false
  e.emit("resume")
  le(e)
  if (t.flowing && !t.reading) {
    e.read(0)
  }
}
function le(e) {
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  for (T("flow", e$_readableState.flowing); e$_readableState.flowing && null !== e.read();) {
    ;
  }
}
function fe(e, t) {
  if ("function" !== typeof e.read) {
    e = J.wrap(e, {
      objectMode: true
    })
  }
  var n = function (e, t) {
    return de.apply(this, arguments)
  }(e, t)
  n.stream = e
  return n
}
function de() {
  return (de = s(i.mark(function e(t, n) {
    var r
    var o
    var s
    var c
    var u
    return i.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = function (e) {
              if (this === t) {
                r()
                r = X
              } else {
                r = e
              }
            }
            r = X
            t.on("readable", o)
            c = S(t, {
              writable: false
            }, function (e) {
              s = e ? P$aggregateTwoErrors(s, e) : null
              r()
              r = X
            })
            e.prev = 4
          case 5:
            if (null === (u = t.destroyed ? null : t.read())) {
              e.next = 12
              break
            }
            e.next = 10
            return u
          case 10:
            e.next = 22
            break
          case 12:
            if (!s) {
              e.next = 16
              break
            }
            throw s
          case 16:
            if (null !== s) {
              e.next = 20
              break
            }
            return e.abrupt("return")
          case 20:
            e.next = 22
            return a(new u$Promise(o))
          case 22:
            e.next = 5
            break
          case 24:
            e.next = 30
            break
          case 26:
            e.prev = 26
            e.t0 = e.catch(4)
            throw s = P$aggregateTwoErrors(s, e.t0)
          case 30:
            e.prev = 30
            if (!s && false === (null === n || undefined === n ? undefined : n.destroyOnReturn) || undefined !== s && !t._readableState.autoDestroy) {
              t.off("readable", o)
              c()
            } else {
              D.destroyer(t, null)
            }
            return e.finish(30)
          case 33:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[4, 26, 30, 33]])
  }))).apply(this, arguments)
}
function he(e, t) {
  return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n)
  var n
}
function pe(e) {
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  T("endReadable", e$_readableState.endEmitted)
  if (!e$_readableState.endEmitted) {
    e$_readableState.ended = true
    c.nextTick(_e, e$_readableState, e)
  }
}
function _e(e, t) {
  T("endReadableNT", e.endEmitted, e.length)
  if (!e.errored && !e.closeEmitted && !e.endEmitted && 0 === e.length) {
    e.endEmitted = true
    t.emit("end")
    if (t.writable && false === t.allowHalfOpen) {
      c.nextTick(Ae, t)
    } else if (e.autoDestroy) {
      var /* [auto-meaningful-name] */t$_writableState = t._writableState
      if (!t$_writableState || t$_writableState.autoDestroy && (t$_writableState.finished || false === t$_writableState.writable)) {
        t.destroy()
      }
    }
  }
}
function Ae(e) {
  if (e.writable && !e.writableEnded && !e.destroyed) {
    e.end()
  }
}
function ge() {
  if (undefined === te) {
    te = {}
  }
  return te
}
J.prototype.read = function (e) {
  T("read", e)
  if (undefined === e) {
    e = NaN
  } else {
    if (!u$NumberIsInteger(e)) {
      e = u$NumberParseInt(e, 10)
    }
  }
  var /* [auto-meaningful-name] */this$_readableState = this._readableState
  var n = e
  if (e > this$_readableState.highWaterMark) {
    this$_readableState.highWaterMark = function (e) {
      if (e > 1073741824) {
        throw new P$codes$ERR_OUT_OF_RANGE("size", "<= 1GiB", e)
      }
      e--
      e |= e >>> 1
      e |= e >>> 2
      e |= e >>> 4
      e |= e >>> 8
      e |= e >>> 16
      return ++e
    }(e)
  }
  if (0 !== e) {
    this$_readableState.state &= -129
  }
  if (0 === e && this$_readableState.needReadable && ((0 !== this$_readableState.highWaterMark ? this$_readableState.length >= this$_readableState.highWaterMark : this$_readableState.length > 0) || this$_readableState.ended)) {
    T("read: emitReadable", this$_readableState.length, this$_readableState.ended)
    if (0 === this$_readableState.length && this$_readableState.ended) {
      pe(this)
    } else {
      re(this)
    }
    return null
  }
  if (0 === (e = ne(e, this$_readableState)) && this$_readableState.ended) {
    if (0 === this$_readableState.length) {
      pe(this)
    }
    return null
  }
  var r
  var i = 0 !== (64 & this$_readableState.state)
  T("need readable", i)
  if (0 === this$_readableState.length || this$_readableState.length - e < this$_readableState.highWaterMark) {
    T("length less than watermark", i = true)
  }
  if (this$_readableState.ended || this$_readableState.reading || this$_readableState.destroyed || this$_readableState.errored || !this$_readableState.constructed) {
    T("reading, ended or constructing", i = false)
  } else if (i) {
    T("do read")
    this$_readableState.state |= 40
    if (0 === this$_readableState.length) {
      this$_readableState.state |= 64
    }
    try {
      this._read(this$_readableState.highWaterMark)
    } catch (o) {
      D$errorOrDestroy(this, o)
    }
    this$_readableState.state &= -33
    if (!this$_readableState.reading) {
      e = ne(n, this$_readableState)
    }
  }
  if (null === (r = e > 0 ? he(e, this$_readableState) : null)) {
    this$_readableState.needReadable = this$_readableState.length <= this$_readableState.highWaterMark
    e = 0
  } else {
    this$_readableState.length -= e
    if (this$_readableState.multiAwaitDrain) {
      this$_readableState.awaitDrainWriters.clear()
    } else {
      this$_readableState.awaitDrainWriters = null
    }
  }
  if (0 === this$_readableState.length) {
    if (!this$_readableState.ended) {
      this$_readableState.needReadable = true
    }
    if (n !== e && this$_readableState.ended) {
      pe(this)
    }
  }
  if (!(null === r || this$_readableState.errorEmitted || this$_readableState.closeEmitted)) {
    this$_readableState.dataEmitted = true
    this.emit("data", r)
  }
  return r
}
J.prototype._read = function (e) {
  throw new P$codes$ERR_METHOD_NOT_IMPLEMENTED("_read()")
}
J.prototype.pipe = function (e, t) {
  var n = this
  var /* [auto-meaningful-name] */this$_readableState = this._readableState
  if (1 === this$_readableState.pipes.length) {
    if (!this$_readableState.multiAwaitDrain) {
      this$_readableState.multiAwaitDrain = true
      this$_readableState.awaitDrainWriters = new u$SafeSet(this$_readableState.awaitDrainWriters ? [this$_readableState.awaitDrainWriters] : [])
    }
  }
  this$_readableState.pipes.push(e)
  T("pipe count=%d opts=%j", this$_readableState.pipes.length, t)
  var i
  var o = (!t || false !== t.end) && e !== c.stdout && e !== c.stderr ? s : _
  function a(t, o) {
    T("onunpipe")
    if (t === n && o && false === o.hasUnpiped) {
      o.hasUnpiped = true;
      (function () {
        T("cleanup")
        e.removeListener("close", h)
        e.removeListener("finish", p)
        if (i) {
          e.removeListener("drain", i)
        }
        e.removeListener("error", d)
        e.removeListener("unpipe", a)
        n.removeListener("end", s)
        n.removeListener("end", _)
        n.removeListener("data", f)
        u = true
        if (i && this$_readableState.awaitDrainWriters && (!e._writableState || e._writableState.needDrain)) {
          i()
        }
      })()
    }
  }
  function s() {
    T("onend")
    e.end()
  }
  if (this$_readableState.endEmitted) {
    c.nextTick(o)
  } else {
    n.once("end", o)
  }
  e.on("unpipe", a)
  var u = false
  function l() {
    if (!u) {
      if (1 === this$_readableState.pipes.length && this$_readableState.pipes[0] === e) {
        T("false write response, pause", 0)
        this$_readableState.awaitDrainWriters = e
        this$_readableState.multiAwaitDrain = false
      } else {
        if (this$_readableState.pipes.length > 1 && this$_readableState.pipes.includes(e)) {
          T("false write response, pause", this$_readableState.awaitDrainWriters.size)
          this$_readableState.awaitDrainWriters.add(e)
        }
      }
      n.pause()
    }
    if (!i) {
      i = function (e, t) {
        return function () {
          var /* [auto-meaningful-name] */e$_readableState = e._readableState
          if (e$_readableState.awaitDrainWriters === t) {
            T("pipeOnDrain", 1)
            e$_readableState.awaitDrainWriters = null
          } else {
            if (e$_readableState.multiAwaitDrain) {
              T("pipeOnDrain", e$_readableState.awaitDrainWriters.size)
              e$_readableState.awaitDrainWriters.delete(t)
            }
          }
          if (!(e$_readableState.awaitDrainWriters && 0 !== e$_readableState.awaitDrainWriters.size || !e.listenerCount("data"))) {
            e.resume()
          }
        }
      }(n, e)
      e.on("drain", i)
    }
  }
  function f(t) {
    T("ondata")
    var n = e.write(t)
    T("dest.write", n)
    if (false === n) {
      l()
    }
  }
  function d(t) {
    T("onerror", t)
    _()
    e.removeListener("error", d)
    if (0 === e.listenerCount("error")) {
      var n = e._writableState || e._readableState
      if (n && !n.errorEmitted) {
        D$errorOrDestroy(e, t)
      } else {
        e.emit("error", t)
      }
    }
  }
  function h() {
    e.removeListener("finish", p)
    _()
  }
  function p() {
    T("onfinish")
    e.removeListener("close", h)
    _()
  }
  function _() {
    T("unpipe")
    n.unpipe(e)
  }
  n.on("data", f)
  E$prependListener(e, "error", d)
  e.once("close", h)
  e.once("finish", p)
  e.emit("pipe", n)
  if (true === e.writableNeedDrain) {
    l()
  } else {
    if (!this$_readableState.flowing) {
      T("pipe resume")
      n.resume()
    }
  }
  return e
}
J.prototype.unpipe = function (e) {
  var /* [auto-meaningful-name] */this$_readableState = this._readableState
  if (0 === this$_readableState.pipes.length) {
    return this
  }
  if (!e) {
    var /* [auto-meaningful-name] */this$_readableState$pipes = this$_readableState.pipes
    this$_readableState.pipes = []
    this.pause()
    for (var r = 0; r < this$_readableState$pipes.length; r++) {
      this$_readableState$pipes[r].emit("unpipe", this, {
        hasUnpiped: false
      })
    }
    return this
  }
  var i = u$ArrayPrototypeIndexOf(this$_readableState.pipes, e)
  if (!(-1 === i)) {
    this$_readableState.pipes.splice(i, 1)
    if (0 === this$_readableState.pipes.length) {
      this.pause()
    }
    e.emit("unpipe", this, {
      hasUnpiped: false
    })
  }
  return this
}
J.prototype.on = function (e, t) {
  var n = E$Stream.prototype.on.call(this, e, t)
  var /* [auto-meaningful-name] */this$_readableState = this._readableState
  if ("data" === e) {
    this$_readableState.readableListening = this.listenerCount("readable") > 0
    if (false !== this$_readableState.flowing) {
      this.resume()
    }
  } else {
    if ("readable" === e) {
      if (!(this$_readableState.endEmitted || this$_readableState.readableListening)) {
        this$_readableState.readableListening = this$_readableState.needReadable = true
        this$_readableState.flowing = false
        this$_readableState.emittedReadable = false
        T("on readable", this$_readableState.length, this$_readableState.reading)
        if (this$_readableState.length) {
          re(this)
        } else {
          if (!this$_readableState.reading) {
            c.nextTick(ce, this)
          }
        }
      }
    }
  }
  return n
}
J.prototype.addListener = J.prototype.on
J.prototype.removeListener = function (e, t) {
  var n = E$Stream.prototype.removeListener.call(this, e, t)
  if ("readable" === e) {
    c.nextTick(se, this)
  }
  return n
}
J.prototype.off = J.prototype.removeListener
J.prototype.removeAllListeners = function (e) {
  var t = E$Stream.prototype.removeAllListeners.apply(this, arguments)
  if (!("readable" !== e && undefined !== e)) {
    c.nextTick(se, this)
  }
  return t
}
J.prototype.resume = function () {
  var /* [auto-meaningful-name] */this$_readableState = this._readableState
  if (!this$_readableState.flowing) {
    T("resume")
    this$_readableState.flowing = !this$_readableState.readableListening;
    (function (e, t) {
      if (!t.resumeScheduled) {
        t.resumeScheduled = true
        c.nextTick(ue, e, t)
      }
    })(this, this$_readableState)
  }
  this$_readableState[Q] = false
  return this
}
J.prototype.pause = function () {
  T("call pause flowing=%j", this._readableState.flowing)
  if (false !== this._readableState.flowing) {
    T("pause")
    this._readableState.flowing = false
    this.emit("pause")
  }
  this._readableState[Q] = true
  return this
}
J.prototype.wrap = function (e) {
  var t = this
  var n = false
  e.on("data", function (r) {
    if (!t.push(r) && e.pause) {
      n = true
      e.pause()
    }
  })
  e.on("end", function () {
    t.push(null)
  })
  e.on("error", function (e) {
    D$errorOrDestroy(t, e)
  })
  e.on("close", function () {
    t.destroy()
  })
  e.on("destroy", function () {
    t.destroy()
  })
  this._read = function () {
    if (n && e.resume) {
      n = false
      e.resume()
    }
  }
  for (var r = u$ObjectKeys(e), i = 1; i < r.length; i++) {
    var o = r[i]
    if (undefined === this[o] && "function" === typeof e[o]) {
      this[o] = e[o].bind(e)
    }
  }
  return this
}
J.prototype[u$SymbolAsyncIterator] = function () {
  return fe(this)
}
J.prototype.iterator = function (e) {
  if (undefined !== e) {
    require_858_$_858$validateObject(e, "options")
  }
  return fe(this, e)
}
u$ObjectDefineProperties(J.prototype, {
  readable: {
    __proto__: null,
    get: function () {
      var /* [auto-meaningful-name] */this$_readableState = this._readableState
      return !!this$_readableState && false !== this$_readableState.readable && !this$_readableState.destroyed && !this$_readableState.errorEmitted && !this$_readableState.endEmitted
    },
    set: function (e) {
      if (this._readableState) {
        this._readableState.readable = !!e
      }
    }
  },
  readableDidRead: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return this._readableState.dataEmitted
    }
  },
  readableAborted: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return !(false === this._readableState.readable || !this._readableState.destroyed && !this._readableState.errored || this._readableState.endEmitted)
    }
  },
  readableHighWaterMark: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return this._readableState.highWaterMark
    }
  },
  readableBuffer: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return this._readableState && this._readableState.buffer
    }
  },
  readableFlowing: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return this._readableState.flowing
    },
    set: function (e) {
      if (this._readableState) {
        this._readableState.flowing = e
      }
    }
  },
  readableLength: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return this._readableState.length
    }
  },
  readableObjectMode: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return !!this._readableState && this._readableState.objectMode
    }
  },
  readableEncoding: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return this._readableState ? this._readableState.encoding : null
    }
  },
  errored: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return this._readableState ? this._readableState.errored : null
    }
  },
  closed: {
    __proto__: null,
    get: function () {
      return !!this._readableState && this._readableState.closed
    }
  },
  destroyed: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return !!this._readableState && this._readableState.destroyed
    },
    set: function (e) {
      if (this._readableState) {
        this._readableState.destroyed = e
      }
    }
  },
  readableEnded: {
    __proto__: null,
    enumerable: false,
    get: function () {
      return !!this._readableState && this._readableState.endEmitted
    }
  }
})
u$ObjectDefineProperties($.prototype, {
  pipesCount: {
    __proto__: null,
    get: function () {
      return this.pipes.length
    }
  },
  paused: {
    __proto__: null,
    get: function () {
      return false !== this[Q]
    },
    set: function (e) {
      this[Q] = !!e
    }
  }
})
J._fromList = he
J.from = function (e, t) {
  return K(J, e, t)
}
J.fromWeb = function (e, t) {
  return ge().newStreamReadableFromReadableStream(e, t)
}
J.toWeb = function (e, t) {
  return ge().newReadableStreamFromStreamReadable(e, t)
}
J.wrap = function (e, t) {
  var n
  var /* [auto-meaningful-name] */e$readableObjectMode
  return new J(r(r({
    objectMode: null === (n = null !== (e$readableObjectMode = e.readableObjectMode) && undefined !== e$readableObjectMode ? e$readableObjectMode : e.objectMode) || undefined === n || n
  }, t), {}, {
    destroy: function (t, n) {
      D.destroyer(e, t)
      n(t)
    }
  })).wrap(e)
}
