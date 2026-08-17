/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：769
 */

"use strict"

var r = require(/* 298 */"process")
var i = require(/* 402 */"./402")
var /* [auto-meaningful-name] */i$aggregateTwoErrors = i.aggregateTwoErrors
var /* [auto-meaningful-name] */i$codes$ERR_MULTIPLE_CALLBACK = i.codes.ERR_MULTIPLE_CALLBACK
var /* [auto-meaningful-name] */i$AbortError = i.AbortError
var /* [auto-meaningful-name] */require_311_$_311$Symbol = require(/* 311 */"./311").Symbol
var u = require(/* 583 */"./583")
var /* [auto-meaningful-name] */u$kIsDestroyed = u.kIsDestroyed
var /* [auto-meaningful-name] */u$isDestroyed = u.isDestroyed
var /* [auto-meaningful-name] */u$isFinished = u.isFinished
var /* [auto-meaningful-name] */u$isServerRequest = u.isServerRequest
var p = require_311_$_311$Symbol("kDestroy")
var _ = require_311_$_311$Symbol("kConstruct")
function A(e, t, n) {
  if (e) {
    e.stack
    if (t && !t.errored) {
      t.errored = e
    }
    if (n && !n.errored) {
      n.errored = e
    }
  }
}
function g(e, t, n) {
  var i = false
  function o(t) {
    if (!i) {
      i = true
      var /* [auto-meaningful-name] */e$_readableState = e._readableState
      var /* [auto-meaningful-name] */e$_writableState = e._writableState
      A(t, e$_writableState, e$_readableState)
      if (e$_writableState) {
        e$_writableState.closed = true
      }
      if (e$_readableState) {
        e$_readableState.closed = true
      }
      if ("function" === typeof n) {
        n(t)
      }
      if (t) {
        r.nextTick(v, e, t)
      } else {
        r.nextTick(m, e)
      }
    }
  }
  try {
    e._destroy(t || null, o)
  } catch (t) {
    o(t)
  }
}
function v(e, t) {
  y(e, t)
  m(e)
}
function m(e) {
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  var /* [auto-meaningful-name] */e$_writableState = e._writableState
  if (e$_writableState) {
    e$_writableState.closeEmitted = true
  }
  if (e$_readableState) {
    e$_readableState.closeEmitted = true
  }
  if (null !== e$_writableState && undefined !== e$_writableState && e$_writableState.emitClose || null !== e$_readableState && undefined !== e$_readableState && e$_readableState.emitClose) {
    e.emit("close")
  }
}
function y(e, t) {
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  var /* [auto-meaningful-name] */e$_writableState = e._writableState
  if (!(null !== e$_writableState && undefined !== e$_writableState && e$_writableState.errorEmitted || null !== e$_readableState && undefined !== e$_readableState && e$_readableState.errorEmitted)) {
    if (e$_writableState) {
      e$_writableState.errorEmitted = true
    }
    if (e$_readableState) {
      e$_readableState.errorEmitted = true
    }
    e.emit("error", t)
  }
}
function b(e, t, n) {
  var /* [auto-meaningful-name] */e$_readableState = e._readableState
  var /* [auto-meaningful-name] */e$_writableState = e._writableState
  if (null !== e$_writableState && undefined !== e$_writableState && e$_writableState.destroyed || null !== e$_readableState && undefined !== e$_readableState && e$_readableState.destroyed) {
    return this
  }
  if (null !== e$_readableState && undefined !== e$_readableState && e$_readableState.autoDestroy || null !== e$_writableState && undefined !== e$_writableState && e$_writableState.autoDestroy) {
    e.destroy(t)
  } else {
    if (t) {
      t.stack
      if (e$_writableState && !e$_writableState.errored) {
        e$_writableState.errored = t
      }
      if (e$_readableState && !e$_readableState.errored) {
        e$_readableState.errored = t
      }
      if (n) {
        r.nextTick(y, e, t)
      } else {
        y(e, t)
      }
    }
  }
}
function w(e) {
  var t = false
  function n(n) {
    if (t) {
      b(e, null !== n && undefined !== n ? n : new i$codes$ERR_MULTIPLE_CALLBACK())
    } else {
      t = true
      var /* [auto-meaningful-name] */e$_readableState = e._readableState
      var /* [auto-meaningful-name] */e$_writableState = e._writableState
      var s = e$_writableState || e$_readableState
      if (e$_readableState) {
        e$_readableState.constructed = true
      }
      if (e$_writableState) {
        e$_writableState.constructed = true
      }
      if (s.destroyed) {
        e.emit(p, n)
      } else {
        if (n) {
          b(e, n, true)
        } else {
          r.nextTick(E, e)
        }
      }
    }
  }
  try {
    e._construct(function (e) {
      r.nextTick(n, e)
    })
  } catch (i) {
    r.nextTick(n, i)
  }
}
function E(e) {
  e.emit(_)
}
function x(e) {
  return (null === e || undefined === e ? undefined : e.setHeader) && "function" === typeof e.abort
}
function C(e) {
  e.emit("close")
}
function O(e, t) {
  e.emit("error", t)
  r.nextTick(C, e)
}
module.exports = {
  construct: function (e, t) {
    if ("function" === typeof e._construct) {
      var /* [auto-meaningful-name] */e$_readableState = e._readableState
      var /* [auto-meaningful-name] */e$_writableState = e._writableState
      if (e$_readableState) {
        e$_readableState.constructed = false
      }
      if (e$_writableState) {
        e$_writableState.constructed = false
      }
      e.once(_, t)
      if (!(e.listenerCount(_) > 1)) {
        r.nextTick(w, e)
      }
    }
  },
  destroyer: function (e, t) {
    if (e && !u$isDestroyed(e)) {
      if (!(t || u$isFinished(e))) {
        t = new i$AbortError()
      }
      if (u$isServerRequest(e)) {
        e.socket = null
        e.destroy(t)
      } else {
        if (x(e)) {
          e.abort()
        } else {
          if (x(e.req)) {
            e.req.abort()
          } else {
            if ("function" === typeof e.destroy) {
              e.destroy(t)
            } else {
              if ("function" === typeof e.close) {
                e.close()
              } else {
                if (t) {
                  r.nextTick(O, e, t)
                } else {
                  r.nextTick(C, e)
                }
              }
            }
          }
        }
      }
      if (!e.destroyed) {
        e[u$kIsDestroyed] = true
      }
    }
  },
  destroy: function (e, t) {
    var /* [auto-meaningful-name] */this$_readableState = this._readableState
    var /* [auto-meaningful-name] */this$_writableState = this._writableState
    var i = this$_writableState || this$_readableState
    return null !== this$_writableState && undefined !== this$_writableState && this$_writableState.destroyed || null !== this$_readableState && undefined !== this$_readableState && this$_readableState.destroyed ? ("function" === typeof t && t(), this) : (A(e, this$_writableState, this$_readableState), this$_writableState && (this$_writableState.destroyed = true), this$_readableState && (this$_readableState.destroyed = true), i.constructed ? g(this, e, t) : this.once(p, function (n) {
      g(this, i$aggregateTwoErrors(n, e), t)
    }), this)
  },
  undestroy: function () {
    var /* [auto-meaningful-name] */this$_readableState = this._readableState
    var /* [auto-meaningful-name] */this$_writableState = this._writableState
    if (this$_readableState) {
      this$_readableState.constructed = true
      this$_readableState.closed = false
      this$_readableState.closeEmitted = false
      this$_readableState.destroyed = false
      this$_readableState.errored = null
      this$_readableState.errorEmitted = false
      this$_readableState.reading = false
      this$_readableState.ended = false === this$_readableState.readable
      this$_readableState.endEmitted = false === this$_readableState.readable
    }
    if (this$_writableState) {
      this$_writableState.constructed = true
      this$_writableState.destroyed = false
      this$_writableState.closed = false
      this$_writableState.closeEmitted = false
      this$_writableState.errored = null
      this$_writableState.errorEmitted = false
      this$_writableState.finalCalled = false
      this$_writableState.prefinished = false
      this$_writableState.ended = false === this$_writableState.writable
      this$_writableState.ending = false === this$_writableState.writable
      this$_writableState.finished = false === this$_writableState.writable
    }
  },
  errorOrDestroy: b
}
