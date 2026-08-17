/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1406
 */

"use strict"

var r = require(/* 1 */"regenerator-runtime")
var i = require(/* 449 */"../../../449")
var /* [auto-meaningful-name] */require_1159_$_1159_index$pipeline = require(/* 1159 */"./1159/index").pipeline
var a = require(/* 584 */"./584/index")
var /* [auto-meaningful-name] */require_769_$_769$destroyer = require(/* 769 */"./769").destroyer
var c = require(/* 583 */"./583")
var /* [auto-meaningful-name] */c$isNodeStream = c.isNodeStream
var /* [auto-meaningful-name] */c$isReadable = c.isReadable
var /* [auto-meaningful-name] */c$isWritable = c.isWritable
var /* [auto-meaningful-name] */c$isWebStream = c.isWebStream
var /* [auto-meaningful-name] */c$isTransformStream = c.isTransformStream
var /* [auto-meaningful-name] */c$isWritableStream = c.isWritableStream
var /* [auto-meaningful-name] */c$isReadableStream = c.isReadableStream
var A = require(/* 402 */"./402")
var /* [auto-meaningful-name] */A$AbortError = A.AbortError
var /* [auto-meaningful-name] */A$codes = A.codes
var /* [auto-meaningful-name] */A$codes$ERR_INVALID_ARG_VALUE = A$codes.ERR_INVALID_ARG_VALUE
var /* [auto-meaningful-name] */A$codes$ERR_MISSING_ARGS = A$codes.ERR_MISSING_ARGS
var b = require(/* 650 */"./650")
module.exports = function () {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
    t[n] = arguments[n]
  }
  if (0 === t.length) {
    throw new A$codes$ERR_MISSING_ARGS("streams")
  }
  if (1 === t.length) {
    return a.from(t[0])
  }
  var c
  var A
  var v
  var w
  var E
  var x = [].concat(t)
  if ("function" === typeof t[0]) {
    t[0] = a.from(t[0])
  }
  if ("function" === typeof t[t.length - 1]) {
    var C = t.length - 1
    t[C] = a.from(t[C])
  }
  for (var O = 0; O < t.length; ++O) {
    if (c$isNodeStream(t[O]) || c$isWebStream(t[O])) {
      if (O < t.length - 1 && !(c$isReadable(t[O]) || c$isReadableStream(t[O]) || c$isTransformStream(t[O]))) {
        throw new A$codes$ERR_INVALID_ARG_VALUE("streams[".concat(O, "]"), x[O], "must be readable")
      }
      if (O > 0 && !(c$isWritable(t[O]) || c$isWritableStream(t[O]) || c$isTransformStream(t[O]))) {
        throw new A$codes$ERR_INVALID_ARG_VALUE("streams[".concat(O, "]"), x[O], "must be writable")
      }
    }
  }
  function k(e) {
    var t = w
    w = null
    if (t) {
      t(e)
    } else {
      if (e) {
        E.destroy(e)
      } else {
        if (!(D || B)) {
          E.destroy()
        }
      }
    }
  }
  var S = t[0]
  var T = require_1159_$_1159_index$pipeline(t, k)
  var B = !!(c$isWritable(S) || c$isWritableStream(S) || c$isTransformStream(S))
  var D = !!(c$isReadable(T) || c$isReadableStream(T) || c$isTransformStream(T))
  E = new a({
    writableObjectMode: !(null === S || undefined === S || !S.writableObjectMode),
    readableObjectMode: !(null === T || undefined === T || !T.readableObjectMode),
    writable: B,
    readable: D
  })
  if (B) {
    if (c$isNodeStream(S)) {
      E._write = function (e, t, n) {
        if (S.write(e, t)) {
          n()
        } else {
          c = n
        }
      }
      E._final = function (e) {
        S.end()
        A = e
      }
      S.on("drain", function () {
        if (c) {
          var e = c
          c = null
          e()
        }
      })
    } else if (c$isWebStream(S)) {
      var I = c$isTransformStream(S) ? S.writable : S
      var R = I.getWriter()
      E._write = function () {
        var e = i(r.mark(function e(t, n, i) {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.prev = 0
                  e.next = 3
                  return R.ready
                case 3:
                  R.write(t).catch(function () {})
                  i()
                  e.next = 10
                  break
                case 7:
                  e.prev = 7
                  e.t0 = e.catch(0)
                  i(e.t0)
                case 10:
                case "end":
                  return e.stop()
              }
            }
          }, e, null, [[0, 7]])
        }))
        return function (t, n, r) {
          return e.apply(this, arguments)
        }
      }()
      E._final = function () {
        var e = i(r.mark(function e(t) {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.prev = 0
                  e.next = 3
                  return R.ready
                case 3:
                  R.close().catch(function () {})
                  A = t
                  e.next = 10
                  break
                case 7:
                  e.prev = 7
                  e.t0 = e.catch(0)
                  t(e.t0)
                case 10:
                case "end":
                  return e.stop()
              }
            }
          }, e, null, [[0, 7]])
        }))
        return function (t) {
          return e.apply(this, arguments)
        }
      }()
    }
    var F = c$isTransformStream(T) ? T.readable : T
    b(F, function () {
      if (A) {
        var e = A
        A = null
        e()
      }
    })
  }
  if (D) {
    if (c$isNodeStream(T)) {
      T.on("readable", function () {
        if (v) {
          var e = v
          v = null
          e()
        }
      })
      T.on("end", function () {
        E.push(null)
      })
      E._read = function () {
        for (;;) {
          var e = T.read()
          if (null === e) {
            return void (v = E._read)
          }
          if (!E.push(e)) {
            return
          }
        }
      }
    } else if (c$isWebStream(T)) {
      var P = c$isTransformStream(T) ? T.readable : T
      var N = P.getReader()
      E._read = i(r.mark(function e() {
        var /* [auto-meaningful-name] */e$sent
        var /* [auto-meaningful-name] */e$sent$value
        var /* [auto-meaningful-name] */e$sent$done
        return r.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.prev = 1
                e.next = 4
                return N.read()
              case 4:
                if (e$sent = e.sent, e$sent$value = e$sent.value, e$sent$done = e$sent.done, E.push(e$sent$value)) {
                  e.next = 9
                  break
                }
                return e.abrupt("return")
              case 9:
                if (!e$sent$done) {
                  e.next = 12
                  break
                }
                E.push(null)
                return e.abrupt("return")
              case 12:
                e.next = 17
                break
              case 14:
                e.prev = 14
                e.t0 = e.catch(1)
                return e.abrupt("return")
              case 17:
                e.next = 0
                break
              case 19:
              case "end":
                return e.stop()
            }
          }
        }, e, null, [[1, 14]])
      }))
    }
  }
  E._destroy = function (e, t) {
    if (!(e || null === w)) {
      e = new A$AbortError()
    }
    v = null
    c = null
    A = null
    if (null === w) {
      t(e)
    } else {
      w = t
      if (c$isNodeStream(T)) {
        require_769_$_769$destroyer(T, e)
      }
    }
  }
  return E
}
