/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1282
 */

"use strict"

require(/* 949 */"../949/index")
var r = require(/* 86 */"../1650/86/index")
var o = require(/* 476 */"./476")
var i = require(/* 1281 */"./1281")
var a = require(/* 400 */"../1648/400")
var s = require(/* 760 */"./760")
var c = require(/* 534 */"./534")
var l = require(/* 1248 */"./1248/index")
var u = require(/* 426 */"./426")
var d = require(/* 639 */"./639")
var p = require(/* 334 */"../1648/334")
var f = require(/* 636 */"./636")
var h = require(/* 836 */"./836")
var m = require(/* 240 */"./240")
var g = require(/* 231 */"./231")
var _ = require(/* 310 */"./310")
var v = require(/* 577 */"../1648/577")
var b = require(/* 631 */"./631")
var y = require(/* 947 */"./947")
var E = require(/* 835 */"./835")
var O = require(/* 246 */"../1782/246/index")
var w = o("fetch")
var C = o("Request")
var T = C && C.prototype
var S = o("Headers")
var A = O("iterator")
var /* [auto-meaningful-name] */u$set = u.set
var j = u.getterFor("URLSearchParams")
var N = u.getterFor("URLSearchParamsIterator")
var R = /\+/g
var k = Array(4)
var x = function (e) {
  return k[e - 1] || (k[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
}
var D = function (e) {
  try {
    return decodeURIComponent(e)
  } catch (t) {
    return e
  }
}
var M = function (e) {
  var t = e.replace(R, " ")
  var n = 4
  try {
    return decodeURIComponent(t)
  } catch (r) {
    for (; n;) {
      t = t.replace(x(n--), D)
    }
    return t
  }
}
var L = /[!'()~]|%20/g
var P = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+"
}
var B = function (e) {
  return P[e]
}
var F = function (e) {
  return encodeURIComponent(e).replace(L, B)
}
var G = function (e, t) {
  if (t) {
    for (var n, r, o = t.split("&"), i = 0; i < o.length;) {
      if ((n = o[i++]).length) {
        r = n.split("=")
        e.push({
          key: M(r.shift()),
          value: M(r.join("="))
        })
      }
    }
  }
}
var W = function (e) {
  this.entries.length = 0
  G(this.entries, e)
}
var U = function (e, t) {
  if (e < t) {
    throw TypeError("Not enough arguments")
  }
}
var H = l(function (e, t) {
  u$set(this, {
    type: "URLSearchParamsIterator",
    iterator: y(j(e).entries),
    kind: t
  })
}, "Iterator", function () {
  var e = N(this)
  var /* [auto-meaningful-name] */e$kind = e.kind
  var n = e.iterator.next()
  var /* [auto-meaningful-name] */n$value = n.value
  if (!n.done) {
    n.value = "keys" === e$kind ? n$value.key : "values" === e$kind ? n$value.value : [n$value.key, n$value.value]
  }
  return n
})
var V = function () {
  d(this, V, "URLSearchParams")
  var e
  var t
  var /* [auto-meaningful-name] */TYLE$next
  var r
  var o
  var /* [auto-meaningful-name] */OYMR$value$next
  var a
  var s
  var c
  var l = arguments.length > 0 ? arguments[0] : undefined
  var u = this
  var f = []
  u$set(u, {
    type: "URLSearchParams",
    entries: f,
    updateURL: function () {},
    updateSearchParams: W
  })
  if (undefined !== l) {
    if (g(l)) {
      if ("function" === typeof (e = E(l))) {
        for (TYLE$next = (t = y(l, e)).next; !(r = TYLE$next.call(t)).done;) {
          if ((a = (OYMR$value$next = (o = y(m(r.value))).next).call(o)).done || (s = OYMR$value$next.call(o)).done || !OYMR$value$next.call(o).done) {
            throw TypeError("Expected sequence with length 2")
          }
          f.push({
            key: _(a.value),
            value: _(s.value)
          })
        }
      } else {
        for (c in l) if (p(l, c)) {
          f.push({
            key: c,
            value: _(l[c])
          })
        }
      }
    } else {
      G(f, "string" === typeof l ? "?" === l.charAt(0) ? l.slice(1) : l : _(l))
    }
  }
}
var /* [auto-meaningful-name] */V$prototype = V.prototype
s(V$prototype, {
  append: function (e, t) {
    U(arguments.length, 2)
    var n = j(this)
    n.entries.push({
      key: _(e),
      value: _(t)
    })
    n.updateURL()
  },
  delete: function (e) {
    U(arguments.length, 1)
    for (var t = j(this), /* [auto-meaningful-name] */t$entries = t.entries, r = _(e), o = 0; o < t$entries.length;) {
      if (t$entries[o].key === r) {
        t$entries.splice(o, 1)
      } else {
        o++
      }
    }
    t.updateURL()
  },
  get: function (e) {
    U(arguments.length, 1)
    for (var /* [auto-meaningful-name] */jThis$entries = j(this).entries, n = _(e), r = 0; r < jThis$entries.length; r++) {
      if (jThis$entries[r].key === n) {
        return jThis$entries[r].value
      }
    }
    return null
  },
  getAll: function (e) {
    U(arguments.length, 1)
    for (var /* [auto-meaningful-name] */jThis$entries = j(this).entries, n = _(e), r = [], o = 0; o < jThis$entries.length; o++) {
      if (jThis$entries[o].key === n) {
        r.push(jThis$entries[o].value)
      }
    }
    return r
  },
  has: function (e) {
    U(arguments.length, 1)
    for (var /* [auto-meaningful-name] */jThis$entries = j(this).entries, n = _(e), r = 0; r < jThis$entries.length;) {
      if (jThis$entries[r++].key === n) {
        return true
      }
    }
    return false
  },
  set: function (e, t) {
    U(arguments.length, 1)
    for (var n, r = j(this), /* [auto-meaningful-name] */r$entries = r.entries, i = false, a = _(e), s = _(t), c = 0; c < r$entries.length; c++) {
      if ((n = r$entries[c]).key === a) {
        if (i) {
          r$entries.splice(c--, 1)
        } else {
          i = true
          n.value = s
        }
      }
    }
    if (!i) {
      r$entries.push({
        key: a,
        value: s
      })
    }
    r.updateURL()
  },
  sort: function () {
    var e
    var t
    var n
    var r = j(this)
    var /* [auto-meaningful-name] */r$entries = r.entries
    var i = r$entries.slice()
    for (r$entries.length = 0, n = 0; n < i.length; n++) {
      for (e = i[n], t = 0; t < n; t++) {
        if (r$entries[t].key > e.key) {
          r$entries.splice(t, 0, e)
          break
        }
      }
      if (t === n) {
        r$entries.push(e)
      }
    }
    r.updateURL()
  },
  forEach: function (e) {
    for (var t, /* [auto-meaningful-name] */jThis$entries = j(this).entries, r = f(e, arguments.length > 1 ? arguments[1] : undefined, 3), o = 0; o < jThis$entries.length;) {
      r((t = jThis$entries[o++]).value, t.key, this)
    }
  },
  keys: function () {
    return new H(this, "keys")
  },
  values: function () {
    return new H(this, "values")
  },
  entries: function () {
    return new H(this, "entries")
  }
}, {
  enumerable: true
})
a(V$prototype, A, V$prototype.entries)
a(V$prototype, "toString", function () {
  for (var e, /* [auto-meaningful-name] */jThis$entries = j(this).entries, n = [], r = 0; r < jThis$entries.length;) {
    e = jThis$entries[r++]
    n.push(F(e.key) + "=" + F(e.value))
  }
  return n.join("&")
}, {
  enumerable: true
})
c(V, "URLSearchParams")
r({
  global: true,
  forced: !i
}, {
  URLSearchParams: V
})
if (!i && "function" == typeof S) {
  var Y = function (e) {
    if (g(e)) {
      var t
      var /* [auto-meaningful-name] */e$body = e.body
      if ("URLSearchParams" === h(e$body)) {
        if (!(t = e.headers ? new S(e.headers) : new S()).has("content-type")) {
          t.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")
        }
        return v(e, {
          body: b(0, String(e$body)),
          headers: b(0, t)
        })
      }
    }
    return e
  }
  if ("function" == typeof w) {
    r({
      global: true,
      enumerable: true,
      forced: true
    }, {
      fetch: function (e) {
        return w(e, arguments.length > 1 ? Y(arguments[1]) : {})
      }
    })
  }
  if ("function" == typeof C) {
    var K = function (e) {
      d(this, K, "Request")
      return new C(e, arguments.length > 1 ? Y(arguments[1]) : {})
    }
    T.constructor = K
    K.prototype = T
    r({
      global: true,
      forced: true
    }, {
      Request: K
    })
  }
}
module.exports = {
  URLSearchParams: V,
  getState: j
}
