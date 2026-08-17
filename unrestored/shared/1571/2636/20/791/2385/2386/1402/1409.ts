/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1409
 */

"use strict"

var r = require(/* 500 */"../../../../../207/787/500")
var i = require(/* 311 */"./311")
var /* [auto-meaningful-name] */i$ObjectSetPrototypeOf = i.ObjectSetPrototypeOf
var /* [auto-meaningful-name] */i$Symbol = i.Symbol
module.exports = f
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_METHOD_NOT_IMPLEMENTED = require(/* 402 */"./402").codes.ERR_METHOD_NOT_IMPLEMENTED
var c = require(/* 584 */"./584/index")
var /* [auto-meaningful-name] */require_988_$_988$getHighWaterMark = require(/* 988 */"./988").getHighWaterMark
i$ObjectSetPrototypeOf(f.prototype, c.prototype)
i$ObjectSetPrototypeOf(f, c)
var l = i$Symbol("kCallback")
function f(e) {
  if (!(this instanceof f)) {
    return new f(e)
  }
  var t = e ? require_988_$_988$getHighWaterMark(this, e, "readableHighWaterMark", true) : null
  if (0 === t) {
    e = r(r({}, e), {}, {
      highWaterMark: null,
      readableHighWaterMark: t,
      writableHighWaterMark: e.writableHighWaterMark || 0
    })
  }
  c.call(this, e)
  this._readableState.sync = false
  this[l] = null
  if (e) {
    if ("function" === typeof e.transform) {
      this._transform = e.transform
    }
    if ("function" === typeof e.flush) {
      this._flush = e.flush
    }
  }
  this.on("prefinish", h)
}
function d(e) {
  var t = this
  if ("function" !== typeof this._flush || this.destroyed) {
    this.push(null)
    if (e) {
      e()
    }
  } else {
    this._flush(function (n, r) {
      if (n) {
        if (e) {
          e(n)
        } else {
          t.destroy(n)
        }
      } else {
        if (null != r) {
          t.push(r)
        }
        t.push(null)
        if (e) {
          e()
        }
      }
    })
  }
}
function h() {
  if (this._final !== d) {
    d.call(this)
  }
}
f.prototype._final = d
f.prototype._transform = function (e, t, n) {
  throw new require_402_$_402$codes$ERR_METHOD_NOT_IMPLEMENTED("_transform()")
}
f.prototype._write = function (e, t, n) {
  var r = this
  var /* [auto-meaningful-name] */this$_readableState = this._readableState
  var /* [auto-meaningful-name] */this$_writableState = this._writableState
  var /* [auto-meaningful-name] */this$_readableState$length = this$_readableState.length
  this._transform(e, t, function (e, t) {
    if (e) {
      n(e)
    } else {
      if (null != t) {
        r.push(t)
      }
      if (this$_writableState.ended || this$_readableState$length === this$_readableState.length || this$_readableState.length < this$_readableState.highWaterMark) {
        n()
      } else {
        r[l] = n
      }
    }
  })
}
f.prototype._read = function () {
  if (this[l]) {
    var e = this[l]
    this[l] = null
    e()
  }
}
