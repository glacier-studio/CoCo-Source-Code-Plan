/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：584
 */

"use strict"

var r = require(/* 500 */"../../../../../../207/787/500")
var i = require(/* 311 */"../311")
var /* [auto-meaningful-name] */i$ObjectDefineProperties = i.ObjectDefineProperties
var /* [auto-meaningful-name] */i$ObjectGetOwnPropertyDescriptor = i.ObjectGetOwnPropertyDescriptor
var /* [auto-meaningful-name] */i$ObjectKeys = i.ObjectKeys
var /* [auto-meaningful-name] */i$ObjectSetPrototypeOf = i.ObjectSetPrototypeOf
module.exports = A
var u
var l
var f = require(/* 986 */"../986/index")
var d = require(/* 1161 */"../1161")
i$ObjectSetPrototypeOf(A.prototype, f.prototype)
i$ObjectSetPrototypeOf(A, f)
for (var h = i$ObjectKeys(d.prototype), p = 0; p < h.length; p++) {
  var _ = h[p]
  if (!A.prototype[_]) {
    A.prototype[_] = d.prototype[_]
  }
}
function A(e) {
  if (!(this instanceof A)) {
    return new A(e)
  }
  f.call(this, e)
  d.call(this, e)
  if (e) {
    this.allowHalfOpen = false !== e.allowHalfOpen
    if (false === e.readable) {
      this._readableState.readable = false
      this._readableState.ended = true
      this._readableState.endEmitted = true
    }
    if (false === e.writable) {
      this._writableState.writable = false
      this._writableState.ending = true
      this._writableState.ended = true
      this._writableState.finished = true
    }
  } else {
    this.allowHalfOpen = true
  }
}
function g() {
  if (undefined === u) {
    u = {}
  }
  return u
}
i$ObjectDefineProperties(A.prototype, {
  writable: r({
    __proto__: null
  }, i$ObjectGetOwnPropertyDescriptor(d.prototype, "writable")),
  writableHighWaterMark: r({
    __proto__: null
  }, i$ObjectGetOwnPropertyDescriptor(d.prototype, "writableHighWaterMark")),
  writableObjectMode: r({
    __proto__: null
  }, i$ObjectGetOwnPropertyDescriptor(d.prototype, "writableObjectMode")),
  writableBuffer: r({
    __proto__: null
  }, i$ObjectGetOwnPropertyDescriptor(d.prototype, "writableBuffer")),
  writableLength: r({
    __proto__: null
  }, i$ObjectGetOwnPropertyDescriptor(d.prototype, "writableLength")),
  writableFinished: r({
    __proto__: null
  }, i$ObjectGetOwnPropertyDescriptor(d.prototype, "writableFinished")),
  writableCorked: r({
    __proto__: null
  }, i$ObjectGetOwnPropertyDescriptor(d.prototype, "writableCorked")),
  writableEnded: r({
    __proto__: null
  }, i$ObjectGetOwnPropertyDescriptor(d.prototype, "writableEnded")),
  writableNeedDrain: r({
    __proto__: null
  }, i$ObjectGetOwnPropertyDescriptor(d.prototype, "writableNeedDrain")),
  destroyed: {
    __proto__: null,
    get: function () {
      return undefined !== this._readableState && undefined !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
    },
    set: function (e) {
      if (this._readableState && this._writableState) {
        this._readableState.destroyed = e
        this._writableState.destroyed = e
      }
    }
  }
})
A.fromWeb = function (e, t) {
  return g().newStreamDuplexFromReadableWritablePair(e, t)
}
A.toWeb = function (e) {
  return g().newReadableWritablePairFromDuplex(e)
}
A.from = function (e) {
  if (!l) {
    l = require(/* 2392 */"./2392")
  }
  return l(e, "body")
}
