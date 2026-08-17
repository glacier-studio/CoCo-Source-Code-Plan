/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1686
 */

"use strict"

var r
var o
var i
var /* [auto-meaningful-name] */W$then
var s = require(/* 86 */"../1650/86/index")
var c = require(/* 533 */"../1724/533")
var l = require(/* 194 */"../1648/194")
var u = require(/* 476 */"../1282/476")
var d = require(/* 1265 */"../1692/1265")
var p = require(/* 400 */"../1648/400")
var f = require(/* 760 */"../1282/760")
var h = require(/* 638 */"../1706/638")
var m = require(/* 534 */"../1282/534")
var g = require(/* 759 */"../1707/759")
var _ = require(/* 231 */"../1282/231")
var v = require(/* 443 */"../1774/443")
var b = require(/* 639 */"../1282/639")
var y = require(/* 1079 */"./1079/index")
var E = require(/* 838 */"./838/index")
var O = require(/* 948 */"../1605/948")
var w = require(/* 956 */"../1723/956")
var /* [auto-meaningful-name] */require_1093_$$_1783_1093_index$set = require(/* 1093 */"../1783/1093/index").set
var T = require(/* 1267 */"../1784/1267/index")
var S = require(/* 1268 */"../1692/1268")
var A = require(/* 1689 */"./1689")
var I = require(/* 1269 */"./1269")
var j = require(/* 1690 */"./1690")
var N = require(/* 426 */"../1282/426")
var R = require(/* 829 */"../1648/829")
var k = require(/* 246 */"../1782/246/index")
var x = require(/* 1691 */"./1691")
var D = require(/* 758 */"../1784/758")
var M = require(/* 633 */"../1774/633")
var L = k("species")
var /* [auto-meaningful-name] */_Promise = "Promise"
var /* [auto-meaningful-name] */N$get = N.get
var /* [auto-meaningful-name] */N$set = N.set
var G = N.getterFor(_Promise)
var W = d && d.prototype
var U = d
var H = W
var /* [auto-meaningful-name] */l$TypeError = l.TypeError
var /* [auto-meaningful-name] */l$document = l.document
var /* [auto-meaningful-name] */l$process = l.process
var K = I.f
var q = K
var X = !!(l$document && l$document.createEvent && l.dispatchEvent)
var Q = "function" == typeof PromiseRejectionEvent
var Z = false
var J = R(_Promise, function () {
  var e = y(U)
  var t = e !== String(U)
  if (!t && 66 === M) {
    return true
  }
  if (c && !H.finally) {
    return true
  }
  if (M >= 51 && /native code/.test(e)) {
    return false
  }
  var n = new U(function (e) {
    e(1)
  })
  var r = function (e) {
    e(function () {}, function () {})
  };
  (n.constructor = {})[L] = r
  return !(Z = n.then(function () {}) instanceof r) || !t && x && !Q
})
var $ = J || !O(function (e) {
  U.all(e).catch(function () {})
})
var ee = function (e) {
  var /* [auto-meaningful-name] */e$then
  return !(!_(e) || "function" != typeof (e$then = e.then)) && e$then
}
var te = function (e, t) {
  if (!e.notified) {
    e.notified = true
    var /* [auto-meaningful-name] */e$reactions = e.reactions
    T(function () {
      for (var /* [auto-meaningful-name] */e$value = e.value, o = 1 == e.state, i = 0; e$reactions.length > i;) {
        var a
        var s
        var c
        var l = e$reactions[i++]
        var u = o ? l.ok : l.fail
        var /* [auto-meaningful-name] */l$resolve = l.resolve
        var /* [auto-meaningful-name] */l$reject = l.reject
        var /* [auto-meaningful-name] */l$domain = l.domain
        try {
          if (u) {
            if (!o) {
              if (2 === e.rejection) {
                ie(e)
              }
              e.rejection = 1
            }
            if (true === u) {
              a = e$value
            } else {
              if (l$domain) {
                l$domain.enter()
              }
              a = u(e$value)
              if (l$domain) {
                l$domain.exit()
                c = true
              }
            }
            if (a === l.promise) {
              l$reject(l$TypeError("Promise-chain cycle"))
            } else {
              if (s = ee(a)) {
                s.call(a, l$resolve, l$reject)
              } else {
                l$resolve(a)
              }
            }
          } else {
            l$reject(e$value)
          }
        } catch (h) {
          if (l$domain && !c) {
            l$domain.exit()
          }
          l$reject(h)
        }
      }
      e.reactions = []
      e.notified = false
      if (t && !e.rejection) {
        re(e)
      }
    })
  }
}
var ne = function (e, t, n) {
  var r
  var o
  if (X) {
    (r = l$document.createEvent("Event")).promise = t
    r.reason = n
    r.initEvent(e, false, true)
    l.dispatchEvent(r)
  } else {
    r = {
      promise: t,
      reason: n
    }
  }
  if (!Q && (o = l["on" + e])) {
    o(r)
  } else {
    if ("unhandledrejection" === e) {
      A("Unhandled promise rejection", n)
    }
  }
}
var re = function (e) {
  require_1093_$$_1783_1093_index$set.call(l, function () {
    var t
    var /* [auto-meaningful-name] */e$facade = e.facade
    var /* [auto-meaningful-name] */e$value = e.value
    if (oe(e) && (t = j(function () {
      if (D) {
        l$process.emit("unhandledRejection", e$value, e$facade)
      } else {
        ne("unhandledrejection", e$facade, e$value)
      }
    }), e.rejection = D || oe(e) ? 2 : 1, t.error)) {
      throw t.value
    }
  })
}
var oe = function (e) {
  return 1 !== e.rejection && !e.parent
}
var ie = function (e) {
  require_1093_$$_1783_1093_index$set.call(l, function () {
    var /* [auto-meaningful-name] */e$facade = e.facade
    if (D) {
      l$process.emit("rejectionHandled", e$facade)
    } else {
      ne("rejectionhandled", e$facade, e.value)
    }
  })
}
var ae = function (e, t, n) {
  return function (r) {
    e(t, r, n)
  }
}
var se = function (e, t, n) {
  if (!e.done) {
    e.done = true
    if (n) {
      e = n
    }
    e.value = t
    e.state = 2
    te(e, true)
  }
}
var ce = function e(t, n, r) {
  if (!t.done) {
    t.done = true
    if (r) {
      t = r
    }
    try {
      if (t.facade === n) {
        throw l$TypeError("Promise can't be resolved itself")
      }
      var o = ee(n)
      if (o) {
        T(function () {
          var r = {
            done: false
          }
          try {
            o.call(n, ae(e, r, t), ae(se, r, t))
          } catch (i) {
            se(r, i, t)
          }
        })
      } else {
        t.value = n
        t.state = 1
        te(t, false)
      }
    } catch (i) {
      se({
        done: false
      }, i, t)
    }
  }
}
if (J && (H = (U = function (e) {
  b(this, U, _Promise)
  v(e)
  r.call(this)
  var t = N$get(this)
  try {
    e(ae(ce, t), ae(se, t))
  } catch (n) {
    se(t, n)
  }
}).prototype, (r = function (e) {
  N$set(this, {
    type: _Promise,
    done: false,
    notified: false,
    parent: false,
    reactions: [],
    rejection: false,
    state: 0,
    value: undefined
  })
}).prototype = f(H, {
  then: function (e, t) {
    var n = G(this)
    var r = K(w(this, U))
    r.ok = "function" != typeof e || e
    r.fail = "function" == typeof t && t
    r.domain = D ? l$process.domain : undefined
    n.parent = true
    n.reactions.push(r)
    if (0 != n.state) {
      te(n, false)
    }
    return r.promise
  },
  catch: function (e) {
    return this.then(undefined, e)
  }
}), o = function () {
  var e = new r()
  var t = N$get(e)
  this.promise = e
  this.resolve = ae(ce, t)
  this.reject = ae(se, t)
}, I.f = K = function (e) {
  return e === U || e === i ? new o(e) : q(e)
}, !c && "function" == typeof d && W !== Object.prototype)) {
  W$then = W.then
  if (!Z) {
    p(W, "then", function (e, t) {
      var n = this
      return new U(function (e, t) {
        W$then.call(n, e, t)
      }).then(e, t)
    }, {
      unsafe: true
    })
    p(W, "catch", H.catch, {
      unsafe: true
    })
  }
  try {
    delete W.constructor
  } catch (le) {}
  if (h) {
    h(W, H)
  }
}
s({
  global: true,
  wrap: true,
  forced: J
}, {
  Promise: U
})
m(U, _Promise, false, true)
g(_Promise)
i = u(_Promise)
s({
  target: _Promise,
  stat: true,
  forced: J
}, {
  reject: function (e) {
    var t = K(this)
    t.reject.call(undefined, e)
    return t.promise
  }
})
s({
  target: _Promise,
  stat: true,
  forced: c || J
}, {
  resolve: function (e) {
    return S(c && this === i ? U : this, e)
  }
})
s({
  target: _Promise,
  stat: true,
  forced: $
}, {
  all: function (e) {
    var t = this
    var n = K(t)
    var /* [auto-meaningful-name] */n$resolve = n.resolve
    var /* [auto-meaningful-name] */n$reject = n.reject
    var i = j(function () {
      var n = v(t.resolve)
      var i = []
      var a = 0
      var s = 1
      E(e, function (e) {
        var c = a++
        var l = false
        i.push(undefined)
        s++
        n.call(t, e).then(function (e) {
          if (!l) {
            l = true
            i[c] = e
            if (! --s) {
              n$resolve(i)
            }
          }
        }, n$reject)
      })
      if (! --s) {
        n$resolve(i)
      }
    })
    if (i.error) {
      n$reject(i.value)
    }
    return n.promise
  },
  race: function (e) {
    var t = this
    var n = K(t)
    var /* [auto-meaningful-name] */n$reject = n.reject
    var o = j(function () {
      var o = v(t.resolve)
      E(e, function (e) {
        o.call(t, e).then(n.resolve, n$reject)
      })
    })
    if (o.error) {
      n$reject(o.value)
    }
    return n.promise
  }
})
