/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：773
 */

"use strict"

var r = require(/* 1 */"regenerator-runtime")
var o = this && this.__awaiter || function (e, t, n, r) {
  return new (n || (n = Promise))(function (o, i) {
    function a(e) {
      try {
        c(r.next(e))
      } catch (t) {
        i(t)
      }
    }
    function s(e) {
      try {
        c(r.throw(e))
      } catch (t) {
        i(t)
      }
    }
    function c(e) {
      if (e.done) {
        o(e.value)
      } else {
        (function (e) {
          return e instanceof n ? e : new n(function (t) {
            t(e)
          })
        })(e.value).then(a, s)
      }
    }
    c((r = r.apply(e, t || [])).next())
  })
}
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.createIframeApi = function (e, t, n) {
  var s = this
  var /* [auto-meaningful-name] */n$getWindow = n.getWindow
  var /* [auto-meaningful-name] */n$targetOrigin = n.targetOrigin
  var u = undefined === n$targetOrigin ? "*" : n$targetOrigin
  var d = new Map()
  var p = function (n) {
    return o(s, undefined, undefined, r.mark(function o() {
      var /* [auto-meaningful-name] */n$data
      var /* [auto-meaningful-name] */n$source
      var l
      var p
      var /* [auto-meaningful-name] */n$data$content
      var /* [auto-meaningful-name] */n$data$content$type
      var m
      var /* [auto-meaningful-name] */n$data$content$payload
      var _
      var v
      var b
      return r.wrap(function (r) {
        for (;;) {
          switch (r.prev = r.next) {
            case 0:
              if (n$data = n.data, n$source = n.source, (l = n$getWindow()) && n$data.signal && n$data.id && n$data.content) {
                r.next = 4
                break
              }
              return r.abrupt("return")
            case 4:
              if (n$data.signal !== "".concat(e.namespace, ".").concat("_iframe_response")) {
                r.next = 9
                break
              }
              if (!(null === (p = d.get(n$data.id)) || undefined === p)) {
                p.resolve(n$data.content)
              }
              d.delete(n$data.id)
              return r.abrupt("return")
            case 9:
              if (n$data.signal !== "".concat(e.namespace, ".").concat("_iframe_request") || l !== n$source) {
                r.next = 26
                break
              }
              if (n$data$content = n$data.content, n$data$content$type = n$data$content.type, m = undefined === n$data$content$type ? "" : n$data$content$type, n$data$content$payload = n$data$content.payload, _ = undefined === n$data$content$payload ? {} : n$data$content$payload, v = m.startsWith(e.namespace) ? m.slice(e.namespace.length + 1) : "", !(t[v] instanceof Function)) {
                r.next = 25
                break
              }
              r.prev = 13
              r.next = 16
              return t[v](_)
            case 16:
              b = r.sent
              r.next = 22
              break
            case 19:
              r.prev = 19
              r.t0 = r.catch(13)
              b = r.t0
            case 22:
              l.postMessage({
                id: n$data.id,
                signal: "".concat(e.namespace, ".").concat("_iframe_response"),
                content: b
              }, u)
              r.next = 26
              break
            case 25:
              l.postMessage({
                id: n$data.id,
                signal: "".concat(e.namespace, ".").concat("_iframe_response"),
                content: {
                  status: a.Status.Failed,
                  message: "Not Implemented"
                }
              }, u)
            case 26:
            case "end":
              return r.stop()
          }
        }
      }, o, null, [[13, 19]])
    }))
  }
  var f = {}
  var h = function (t) {
    f[t] = function (n) {
      return new Promise(function (r) {
        var o
        var a = (0, i.v4)()
        if (!(null === (o = n$getWindow()) || undefined === o)) {
          o.postMessage({
            id: a,
            signal: "".concat(e.namespace, ".").concat("_iframe_request"),
            content: {
              type: "".concat(e.namespace, ".").concat(t),
              payload: n
            }
          }, u)
        }
        d.set(a, {
          resolve: r
        })
      })
    }
  }
  for (var m in e.methods) h(m)
  window.addEventListener("message", p)
  return {
    api: f,
    dispose: function () {
      d.clear()
      window.removeEventListener("message", p)
    }
  }
}
var i = require(/* 655 */"./655")
var a = require(/* 1185 */"../1185")
