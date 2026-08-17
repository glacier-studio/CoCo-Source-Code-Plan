/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1160
 */

"use strict"

var r = require(/* 311 */"./311")
var /* [auto-meaningful-name] */r$ArrayIsArray = r.ArrayIsArray
var /* [auto-meaningful-name] */r$ObjectSetPrototypeOf = r.ObjectSetPrototypeOf
var /* [auto-meaningful-name] */require_983_$_986_983$EventEmitter = require(/* 983 */"./986/983").EventEmitter
function s(e) {
  require_983_$_986_983$EventEmitter.call(this, e)
}
function c(e, t, n) {
  if ("function" === typeof e.prependListener) {
    return e.prependListener(t, n)
  }
  if (e._events && e._events[t]) {
    if (r$ArrayIsArray(e._events[t])) {
      e._events[t].unshift(n)
    } else {
      e._events[t] = [n, e._events[t]]
    }
  } else {
    e.on(t, n)
  }
}
r$ObjectSetPrototypeOf(s.prototype, require_983_$_986_983$EventEmitter.prototype)
r$ObjectSetPrototypeOf(s, require_983_$_986_983$EventEmitter)
s.prototype.pipe = function (e, t) {
  var n = this
  function r(t) {
    if (e.writable && false === e.write(t) && n.pause) {
      n.pause()
    }
  }
  function i() {
    if (n.readable && n.resume) {
      n.resume()
    }
  }
  n.on("data", r)
  e.on("drain", i)
  if (!(e._isStdio || t && false === t.end)) {
    n.on("end", s)
    n.on("close", u)
  }
  var o = false
  function s() {
    if (!o) {
      o = true
      e.end()
    }
  }
  function u() {
    if (!o) {
      o = true
      if ("function" === typeof e.destroy) {
        e.destroy()
      }
    }
  }
  function l(e) {
    f()
    if (0 === require_983_$_986_983$EventEmitter.listenerCount(this, "error")) {
      this.emit("error", e)
    }
  }
  function f() {
    n.removeListener("data", r)
    e.removeListener("drain", i)
    n.removeListener("end", s)
    n.removeListener("close", u)
    n.removeListener("error", l)
    e.removeListener("error", l)
    n.removeListener("end", f)
    n.removeListener("close", f)
    e.removeListener("close", f)
  }
  c(n, "error", l)
  c(e, "error", l)
  n.on("end", f)
  n.on("close", f)
  e.on("close", f)
  e.emit("pipe", n)
  return e
}
module.exports = {
  Stream: s,
  prependListener: c
}
