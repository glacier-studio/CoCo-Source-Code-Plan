/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：15__part-4
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
var B = {}
function F(e, t) {
  return G.apply(this, arguments)
}
function G() {
  return (G = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = new FontFace(t, "url(".concat(n, ")"))
            e.next = 3
            return r.load()
          case 3:
            document.fonts.add(r)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function W(e, t, n) {
  var r = null
  return n ? function () {
    if (r) {
      window.clearTimeout(r)
    }
    if (!r) {
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
        o[i] = arguments[i]
      }
      e.apply(this, o)
    }
    r = window.setTimeout(function () {
      r = null
    }, t)
  } : function () {
    for (var n = this, /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), a = 0; a < arguments$length; a++) {
      i[a] = arguments[a]
    }
    if (r) {
      window.clearTimeout(r)
    }
    r = window.setTimeout(function () {
      return e.apply(n, i)
    }, t)
  }
}
function U(e) {
  if ("object" === typeof e) {
    var t = Array.isArray(e) ? [] : {}
    Object.entries(e).forEach(function (e) {
      var n = Module_10.a(e, 2)
      var o = n[0]
      var i = n[1]
      t[o] = U(i)
    })
    return t
  }
  return e
}
function H(e) {
  return new Promise(function (t) {
    setTimeout(function () {
      t()
    }, e)
  })
}
function V(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("script")
    r.onload = function () {
      t(null)
    }
    r.src = e
    document.head.appendChild(r)
  })
}
function z(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("link")
    r.setAttribute("rel", "stylesheet")
    r.onload = function () {
      t(null)
    }
    r.onerror = function () {
      n()
    }
    r.setAttribute("href", e)
    document.head.appendChild(r)
  })
}
function Y(e, t) {
  if (e && t) {
    var n = e.getClientRects()[0]
    var r = t.getClientRects()[0]
    return {
      left: n.x - r.x,
      top: n.y - r.y
    }
  }
}
function K(e) {
  return e && e.replace ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;") : e
}
export { B }
export { F }
export { W }
export { U }
export { H }
export { V }
export { z }
export { Y }
export { K }
