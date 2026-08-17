/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1581
 */

"use strict"

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 194 */"../1648/194")
var i = require(/* 476 */"../1282/476")
var a = require(/* 533 */"../1724/533")
var s = require(/* 271 */"../1648/271")
var c = require(/* 1075 */"./1075")
var l = require(/* 168 */"../1648/168")
var u = require(/* 334 */"../1648/334")
var d = require(/* 830 */"./830")
var p = require(/* 231 */"../1282/231")
var f = require(/* 757 */"../1648/757")
var h = require(/* 240 */"../1282/240")
var m = require(/* 309 */"../1771/309")
var g = require(/* 441 */"../1718/441")
var _ = require(/* 632 */"./632")
var v = require(/* 310 */"../1282/310")
var b = require(/* 631 */"../1282/631")
var y = require(/* 577 */"../1648/577")
var E = require(/* 831 */"./831/index")
var O = require(/* 635 */"../1648/635")
var w = require(/* 1083 */"./1083")
var C = require(/* 1082 */"./1082")
var T = require(/* 386 */"../1648/386")
var S = require(/* 300 */"../1648/300/index")
var A = require(/* 944 */"./944")
var I = require(/* 425 */"../1780/425")
var j = require(/* 400 */"../1648/400")
var N = require(/* 945 */"./945")
var R = require(/* 946 */"./946")
var k = require(/* 827 */"./827")
var x = require(/* 826 */"./826")
var D = require(/* 246 */"../1782/246/index")
var M = require(/* 1243 */"./1243")
var L = require(/* 442 */"./442/index")
var P = require(/* 534 */"../1282/534")
var B = require(/* 426 */"../1282/426")
var /* [auto-meaningful-name] */require_401_$$_1754_401$forEach = require(/* 401 */"../1754/401").forEach
var G = R("hidden")
var W = D("toPrimitive")
var /* [auto-meaningful-name] */B$set = B.set
var H = B.getterFor("Symbol")
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */o$Symbol = o.Symbol
var Y = i("JSON", "stringify")
var K = T.f
var q = S.f
var X = w.f
var Q = A.f
var Z = N("symbols")
var J = N("op-symbols")
var $ = N("string-to-symbol-registry")
var ee = N("symbol-to-string-registry")
var te = N("wks")
var /* [auto-meaningful-name] */o$QObject = o.QObject
var re = !o$QObject || !o$QObject.prototype || !o$QObject.prototype.findChild
var oe = s && l(function () {
  return 7 != y(q({}, "a", {
    get: function () {
      return q(this, "a", {
        value: 7
      }).a
    }
  })).a
}) ? function (e, t, n) {
    var r = K(Object$prototype, t)
    if (r) {
      delete Object$prototype[t]
    }
    q(e, t, n)
    if (r && e !== Object$prototype) {
      q(Object$prototype, t, r)
    }
  } : q
var ie = function (e, t) {
  var n = Z[e] = y(o$Symbol.prototype)
  B$set(n, {
    type: "Symbol",
    tag: e,
    description: t
  })
  if (!s) {
    n.description = t
  }
  return n
}
var ae = function (e, t, n) {
  if (e === Object$prototype) {
    ae(J, t, n)
  }
  h(e)
  var r = _(t)
  h(n)
  return u(Z, r) ? (n.enumerable ? (u(e, G) && e[G][r] && (e[G][r] = false), n = y(n, {
    enumerable: b(0, false)
  })) : (u(e, G) || q(e, G, b(1, {})), e[G][r] = true), oe(e, r, n)) : q(e, r, n)
}
var se = function (e, t) {
  h(e)
  var n = g(t)
  var r = E(n).concat(de(n))
  require_401_$$_1754_401$forEach(r, function (t) {
    if (!(s && !ce.call(n, t))) {
      ae(e, t, n[t])
    }
  })
  return e
}
var ce = function (e) {
  var t = _(e)
  var n = Q.call(this, t)
  return !(this === Object$prototype && u(Z, t) && !u(J, t)) && (!(n || !u(this, t) || !u(Z, t) || u(this, G) && this[G][t]) || n)
}
var le = function (e, t) {
  var n = g(e)
  var r = _(t)
  if (n !== Object$prototype || !u(Z, r) || u(J, r)) {
    var o = K(n, r)
    if (!(!o || !u(Z, r) || u(n, G) && n[G][r])) {
      o.enumerable = true
    }
    return o
  }
}
var ue = function (e) {
  var t = X(g(e))
  var n = []
  require_401_$$_1754_401$forEach(t, function (e) {
    if (!(u(Z, e) || u(k, e))) {
      n.push(e)
    }
  })
  return n
}
var de = function (e) {
  var t = e === Object$prototype
  var n = X(t ? J : g(e))
  var r = []
  require_401_$$_1754_401$forEach(n, function (e) {
    if (!(!u(Z, e) || t && !u(Object$prototype, e))) {
      r.push(Z[e])
    }
  })
  return r
}
if (!c) {
  j((o$Symbol = function () {
    if (this instanceof o$Symbol) {
      throw TypeError("Symbol is not a constructor")
    }
    var e = arguments.length && undefined !== arguments[0] ? v(arguments[0]) : undefined
    var t = x(e)
    var n = function e(n) {
      if (this === Object$prototype) {
        e.call(J, n)
      }
      if (u(this, G) && u(this[G], t)) {
        this[G][t] = false
      }
      oe(this, t, b(1, n))
    }
    if (s && re) {
      oe(Object$prototype, t, {
        configurable: true,
        set: n
      })
    }
    return ie(t, e)
  }).prototype, "toString", function () {
    return H(this).tag
  })
  j(o$Symbol, "withoutSetter", function (e) {
    return ie(x(e), e)
  })
  A.f = ce
  S.f = ae
  T.f = le
  O.f = w.f = ue
  C.f = de
  M.f = function (e) {
    return ie(D(e), e)
  }
  if (s) {
    q(o$Symbol.prototype, "description", {
      configurable: true,
      get: function () {
        return H(this).description
      }
    })
    if (!a) {
      j(Object$prototype, "propertyIsEnumerable", ce, {
        unsafe: true
      })
    }
  }
}
r({
  global: true,
  wrap: true,
  forced: !c,
  sham: !c
}, {
  Symbol: o$Symbol
})
require_401_$$_1754_401$forEach(E(te), function (e) {
  L(e)
})
r({
  target: "Symbol",
  stat: true,
  forced: !c
}, {
  for: function (e) {
    var t = v(e)
    if (u($, t)) {
      return $[t]
    }
    var n = o$Symbol(t)
    $[t] = n
    ee[n] = t
    return n
  },
  keyFor: function (e) {
    if (!f(e)) {
      throw TypeError(e + " is not a symbol")
    }
    if (u(ee, e)) {
      return ee[e]
    }
  },
  useSetter: function () {
    re = true
  },
  useSimple: function () {
    re = false
  }
})
r({
  target: "Object",
  stat: true,
  forced: !c,
  sham: !s
}, {
  create: function (e, t) {
    return undefined === t ? y(e) : se(y(e), t)
  },
  defineProperty: ae,
  defineProperties: se,
  getOwnPropertyDescriptor: le
})
r({
  target: "Object",
  stat: true,
  forced: !c
}, {
  getOwnPropertyNames: ue,
  getOwnPropertySymbols: de
})
r({
  target: "Object",
  stat: true,
  forced: l(function () {
    C.f(1)
  })
}, {
  getOwnPropertySymbols: function (e) {
    return C.f(m(e))
  }
})
if (Y) {
  r({
    target: "JSON",
    stat: true,
    forced: !c || l(function () {
      var e = o$Symbol()
      return "[null]" != Y([e]) || "{}" != Y({
        a: e
      }) || "{}" != Y(Object(e))
    })
  }, {
    stringify: function (e, t, n) {
      for (var r, o = [e], i = 1; arguments.length > i;) {
        o.push(arguments[i++])
      }
      r = t
      if ((p(t) || undefined !== e) && !f(e)) {
        if (!d(t)) {
          t = function (e, t) {
            if ("function" == typeof r) {
              t = r.call(this, e, t)
            }
            if (!f(t)) {
              return t
            }
          }
        }
        o[1] = t
        return Y.apply(null, o)
      }
    }
  })
}
if (!o$Symbol.prototype[W]) {
  I(o$Symbol.prototype, W, o$Symbol.prototype.valueOf)
}
P(o$Symbol, "Symbol")
k[G] = true
