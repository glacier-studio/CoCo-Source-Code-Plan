/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1393
 */

"use strict"

var r = require(/* 399 */"../../207/787/399/index")
var i = require(/* 572 */"../../207/787/572/index")
var o = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.editOp = exports.replaceOp = exports.insertOp = exports.moveOp = exports.removeOp = exports.type = undefined
var a = o(require(/* 1379 */"./1379"))
var s = o(require(/* 1380 */"./1380"))
var c = require(/* 1143 */"./1143/index")
var u = require(/* 1144 */"./1144")
var /* [auto-meaningful-name] */ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE = Object({
  NODE_ENV: "production",
  PUBLIC_URL: "",
  WDS_SOCKET_HOST: undefined,
  WDS_SOCKET_PATH: undefined,
  WDS_SOCKET_PORT: undefined
}).JSON1_RELEASE_MODE
var f = ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE ? function () {} : require(/* 2355 */"./2355/index").default
function d(e, t) {
  if (ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    if (!e) {
      throw new Error(t)
    }
  } else {
    require(/* 573 */"./573")(e, t)
  }
}
var h = false
exports.type = {
  name: "json1",
  uri: "http://sharejs.org/types/JSONv1",
  readCursor: c.readCursor,
  writeCursor: c.writeCursor,
  create: function (e) {
    return e
  },
  isNoop: function (e) {
    return null == e
  },
  setDebug: function (e) {
    h = e
    f.quiet = !e
  },
  registerSubtype: C,
  checkValidOp: R,
  normalize: F,
  apply: function (e, t) {
    f.quiet = !h
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("apply")
      f("snapshot", e)
      f("op", t)
      f("repro: apply(".concat(JSON.stringify(e), ", ").concat(JSON.stringify(t), ")"))
    }
    R(t)
    if (null === t) {
      return e
    }
    var n = []
    e = function e(t, r) {
      for (var i = [], o = 0; o < r.length; o++) {
        var a = r[o]
        if (Array.isArray(a)) {
          break
        }
        if ("object" !== typeof a) {
          i.push(t)
          t = E(t, a)
        }
      }
      for (var s = r.length - 1; s >= o; s--) {
        t = e(t, r[s])
      }
      for (--o; o >= 0; o--) {
        var c = r[o]
        if ("object" !== typeof c) {
          var u = i.pop()
          var l = E(u, c)
          t = t === l ? u : undefined === t ? m(u, c) : b(u, c, t)
        } else if (g(c)) {
          d(undefined !== t, "Cannot pick up or remove undefined")
          if (null != c.p) {
            n[c.p] = t
          }
          t = undefined
        }
      }
      return t
    }(e, t)
    f("--- after pick phase ---")
    f("held", n, "snapshot", e)
    e = function e(t, r) {
      var i = t
      var o = 0
      var a = {
        root: t
      }
      var s = 0
      var c = a
      var u = "root"
      function l() {
        for (; s < o; s++) {
          var e = r[s]
          if ("object" !== typeof e) {
            d(w(c, u))
            c = c[u] = A(c[u])
            u = e
          }
        }
      }
      for (; o < r.length; o++) {
        var f = r[o]
        if (Array.isArray(f)) {
          var h = e(i, f)
          if (h !== i && undefined !== h) {
            l()
            i = c[u] = h
          }
        } else if ("object" === typeof f) {
          if (null != f.d) {
            l()
            i = y(c, u, n[f.d])
          } else {
            if (undefined !== f.i) {
              l()
              i = y(c, u, f.i)
            }
          }
          var p = S(f)
          if (p) {
            l()
            i = c[u] = p.apply(i, T(f))
          } else if (undefined !== f.e) {
            throw Error("Subtype " + f.et + " undefined")
          }
        } else {
          i = E(i, f)
        }
      }
      return a.root
    }(e, t)
    f("-> apply returning snapshot", e)
    return e
  },
  transformPosition: function (e, t) {
    f("transformPosition", e, t)
    P()
    e = e.slice()
    R(t)
    for (var n, r, i = c.readCursor(t), o = false, a = [], s = function (t) {
        var s = e[t]
        var u = i.getComponent()
        f("pick phase", t, ":", s, u)
        if (u) {
          if (undefined !== u.r) {
            o = true
          } else {
            if (null != u.p) {
              o = false
              n = u.p
              r = t
            }
          }
        }
        if (t >= e.length) {
          return "break"
        }
        var l = 0
        var d = c.advancer(i, undefined, function (e, t) {
          if (g(t)) {
            l++
          }
        })
        a.unshift(d)
        var h = d(s)
        if ("number" === typeof s) {
          e[t] -= l
        }
        return h ? undefined : "break"
      }, u = 0;; u++) {
      if ("break" === s(u)) {
        break
      }
    }
    a.forEach(function (e) {
      return e.end()
    })
    N()
    f("after pick phase. Remove", o, "pi", r, "pas", n, "po", e)
    if (o) {
      f("item removed. Bailing!")
      return null
    }
    var d = function () {
      P()
      var t = 0
      if (null != n) {
        var o = i.getPath()
        t = o.length
        if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
          f("path", e, "pi", r, "r", o)
        }
        e = o.concat(e.slice(r))
      }
      if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
        f("handleDrop at path", e, "read cursor", i.getPath())
      }
      for (var a = function () {
        var n = e[t]
        var r = p(i)
        var o = S(r)
        if (o) {
          var a = T(r)
          f("Embedded edit", a, o)
          if (o.transformPosition) {
            e[t] = o.transformPosition(e[t], a)
          }
          return "break"
        }
        var s = 0
        var u = c.advancer(i, function (e, t) {
          return v(t) ? ~(e - s) : e - s
        }, function (e, t) {
          if (v(t)) {
            s++
          }
        })(n)
        if ("number" === typeof n) {
          e[t] += s
        }
        if (!u) {
          return "break"
        }
      }; t < e.length; t++) {
        if ("break" === a()) {
          break
        }
      }
      N()
    }
    if (null != n) {
      i.eachDrop(null, function (e) {
        if (e === n) {
          d()
        }
      })
    } else {
      d()
    }
    f("-> transformPosition returning", e)
    return e
  },
  compose: M,
  tryTransform: H,
  transform: function (e, t, n) {
    var r = H(e, t, n)
    if (r.ok) {
      return r.result
    }
    V(r.conflict)
  },
  makeInvertible: j,
  invert: L,
  invertWithDoc: function (e, t) {
    return L(j(e, t))
  },
  RM_UNEXPECTED_CONTENT: u.ConflictType.RM_UNEXPECTED_CONTENT,
  DROP_COLLISION: u.ConflictType.DROP_COLLISION,
  BLACKHOLE: u.ConflictType.BLACKHOLE,
  transformNoConflict: function (e, t, n) {
    return K(function () {
      return true
    }, e, t, n)
  },
  typeAllowingConflictsPred: function (e) {
    return Object.assign(Object.assign({}, exports.type), {
      transform: function (t, n, r) {
        return K(e, t, n, r)
      }
    })
  }
}
var p = function (e) {
  return e ? e.getComponent() : null
}
function _(e) {
  return e && "object" === typeof e && !Array.isArray(e)
}
var A = function (e) {
  return Array.isArray(e) ? e.slice() : null !== e && "object" === typeof e ? Object.assign({}, e) : e
}
var g = function (e) {
  return e && (null != e.p || undefined !== e.r)
}
var v = function (e) {
  return e && (null != e.d || undefined !== e.i)
}
function m(e, t) {
  d(null != e)
  if ("number" === typeof t) {
    d(Array.isArray(e), "Invalid key - child is not an array");
    (e = e.slice()).splice(t, 1)
  } else {
    d(_(e), "Invalid key - child is not an object")
    delete (e = Object.assign({}, e))[t]
  }
  return e
}
function y(e, t, n) {
  if ("number" === typeof t) {
    d(null != e, "Container is missing for key")
    d(Array.isArray(e), "Cannot use numerical key for object container")
    d(e.length >= t, "Cannot insert into out of bounds index")
    e.splice(t, 0, n)
  } else {
    d(_(e), "Cannot insert into missing item")
    d(undefined === e[t], "Trying to overwrite value at key. Your op needs to remove it first")
    e[t] = n
  }
  return n
}
exports.removeOp = function (e) {
  var t = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1]
  return c.writeCursor().writeAtPath(e, "r", t).get()
}
exports.moveOp = function (e, t) {
  return c.writeCursor().writeMove(e, t).get()
}
exports.insertOp = function (e, t) {
  return c.writeCursor().writeAtPath(e, "i", t).get()
}
exports.replaceOp = function (e, t, n) {
  return c.writeCursor().at(e, function (e) {
    e.write("r", t)
    e.write("i", n)
  }).get()
}
exports.editOp = function (e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] && arguments[3]
  return c.writeCursor().at(e, function (e) {
    return B(e, t, n, r)
  }).get()
}
var b = function (e, t, n) {
  (e = A(e))[t] = n
  return e
}
var w = function (e, t) {
  return null != e && ("number" === typeof t ? Array.isArray(e) : "object" === typeof e)
}
var E = function (e, t) {
  return w(e, t) ? e[t] : undefined
}
var x = {}
function C(e) {
  var t = e.type ? e.type : e
  if (t.name) {
    x[t.name] = t
  }
  if (t.uri) {
    x[t.uri] = t
  }
}
var O = function (e) {
  var t = x[e]
  if (t) {
    return t
  }
  throw Error("Missing type: " + e)
}
C(require(/* 1381 */"./1381/index"))
var k = function (e, t) {
  return e + t
}
C({
  name: "number",
  apply: k,
  compose: k,
  invert: function (e) {
    return -e
  },
  transform: function (e) {
    return e
  }
})
var S = function (e) {
  return null == e ? null : e.et ? O(e.et) : e.es ? x["text-unicode"] : null != e.ena ? x.number : null
}
var T = function (e) {
  return e.es ? e.es : null != e.ena ? e.ena : e.e
}
var B = function (e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] && arguments[3]
  var o = "string" === typeof t ? [O(t), t] : [t, t.name]
  var a = i(o, 2)
  var s = a[0]
  var c = a[1]
  if (!(!r && s.isNoop && s.isNoop(n))) {
    if ("number" === c) {
      e.write("ena", n)
    } else {
      if ("text-unicode" === c) {
        e.write("es", n)
      } else {
        e.write("et", c)
        e.write("e", n)
      }
    }
  }
}
function D(e) {
  d("number" === typeof e)
  d(e >= 0)
  d(e === (0 | e))
}
function I(e) {
  if ("number" === typeof e) {
    D(e)
  } else {
    d("string" === typeof e)
  }
}
function R(e) {
  if (null !== e) {
    var t = new Set()
    var n = new Set()
    var r = function (e) {
      var r = true
      var i = false
      for (var o in e) {
        var a = e[o]
        r = false
        d("p" === o || "r" === o || "d" === o || "i" === o || "e" === o || "es" === o || "ena" === o || "et" === o, "Invalid component item '" + o + "'")
        if ("p" === o) {
          D(a)
          d(!t.has(a))
          t.add(a)
          d(undefined === e.r)
        } else if ("d" === o) {
          D(a)
          d(!n.has(a))
          n.add(a)
          d(undefined === e.i)
        } else if ("e" === o || "es" === o || "ena" === o) {
          d(!i)
          i = true
          var s = S(e)
          d(s, "Missing type in edit")
          if (s.checkValidOp) {
            s.checkValidOp(T(e))
          }
        }
      }
      d(!r)
    }
    !function e(t, n, i) {
      if (!Array.isArray(t)) {
        throw Error("Op must be null or a list")
      }
      if (0 === t.length) {
        throw Error("Empty descent")
      }
      if (!n) {
        I(t[0])
      }
      for (var o = 1, a = 0, s = 0, u = 0; u < t.length; u++) {
        var l = t[u]
        d(null != l)
        if (Array.isArray(l)) {
          var f = e(l, false, i)
          if (a) {
            var h = typeof s
            var p = typeof f
            if (h === p) {
              d(s < f, "descent keys are not in order")
            } else {
              d("number" === h && "string" === p)
            }
          }
          s = f
          a++
          o = 3
        } else if ("object" === typeof l) {
          d(1 === o, "Prev not scalar - instead ".concat(o))
          r(l)
          o = 2
        } else {
          d(3 !== o)
          I(l)
          d(c.isValidPathItem(l), "Invalid path key")
          o = 1
        }
      }
      d(1 !== a, "Operation makes multiple descents. Remove some []")
      d(2 === o || 3 === o)
      return t[0]
    }(e, true, false)
    d(t.size === n.size, "Mismatched picks and drops in op")
    for (var i = 0; i < t.size; i++) {
      d(t.has(i))
      d(n.has(i))
    }
  }
}
function F(e) {
  var t = 0
  var n = []
  var r = c.writeCursor()
  r.mergeTree(e, function (e, r) {
    var i
    var o = S(e)
    if (o) {
      var a = T(e)
      B(r, o, o.normalize ? o.normalize(a) : a)
    }
    for (var s = 0, c = ["r", "p", "i", "d"]; s < c.length; s++) {
      var u = c[s]
      if (undefined !== e[u]) {
        var l = "p" === u || "d" === u ? (i = e[u], null == n[i] && (n[i] = t++), n[i]) : e[u]
        r.write(u, l)
      }
    }
  })
  return r.get()
}
var P = function () {
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    f.prefix++
  }
}
var N = function () {
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    f.prefix--
  }
}
function M(e, t) {
  if (h && !ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    f("composing:")
    f("  op1:", e)
    f("  op2:", t)
  }
  R(e)
  R(t)
  if (null == e) {
    return t
  }
  if (null == t) {
    return e
  }
  var n = 0
  var r = c.readCursor(e)
  var i = c.readCursor(t)
  var o = c.writeCursor()
  var a = []
  var s = []
  var u = []
  var _ = []
  var A = []
  var m = []
  var y = new Set()
  var b = {}
  var w = function (e, t) {
    if (null != t) {
      if (null == b[e]) {
        b[e] = new Set()
      }
      var n = t.getPath().map(function (e, t) {
        return "".concat(t, ":").concat(e)
      }).join(".")
      if (b[e].has(n)) {
        throw Error("non-unique descent: ".concat(e, " ").concat(n))
      }
      b[e].add(n)
    }
  }
  r.traverse(null, function (e) {
    if (null != e.p) {
      u[e.p] = r.clone()
    }
  })
  i.traverse(null, function (e) {
    if (null != e.d) {
      _[e.d] = i.clone()
    }
  })
  var E = c.writeCursor()
  !function e(t, r, i, o, h, b, E, x) {
    d(r || i)
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("xfBoundary", h, !!t && t.getPath(), !!r && r.getPath(), !!i && i.getPath(), !!o && o.getPath(), "lit:", h, "rmParent:", b)
    }
    P()
    var C = p(r)
    var O = p(i)
    var k = !!O && undefined !== O.r
    var D = !!C && undefined !== C.i
    var I = C ? C.d : null
    var R = O ? O.p : null
    f("pick2Slot", R, "drop1Slot", I)
    var F = (b || k) && null == R
    if (null != R) {
      f("teleporting via c2 pick2Slot", R)
      o = _[R]
      if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
        f("r2Drop", o && o.getPath())
      }
      E = s[R] = new c.WriteCursor()
    } else if (O && undefined !== O.r) {
      o = null
    } else {
      var M = p(o)
      if (M && null != M.d) {
        o = null
      }
    }
    var L
    var j = p(o)
    if (null != I) {
      f("teleporting via c1 drop1Slot", I)
      t = u[I]
      x = a[I] = new c.WriteCursor()
      if (F) {
        f("Cancelling op1 move", I, "rmParent", b, "rmHere", k)
        if (b && !k) {
          x.write("r", true)
        }
      } else {
        var U = A[I] = n++
        f("assigning slot", U, "to op1 slot", I)
        E.write("d", U)
      }
    } else if (C && undefined !== C.i) {
      t = null
    } else {
      var H = p(t)
      if (H && null != H.p) {
        t = null
      }
    }
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      w("r1Pick", t)
      w("r1Drop", r)
      w("r2Pick", i)
      w("r2Drop", o)
    }
    if (D) {
      d(undefined === h)
      L = C.i
    } else {
      L = h
    }
    if (undefined !== L) {
      f("litOut", L)
    }
    var V = (null == R ? !D || b || k : undefined === L) ? null : E.getComponent()
    f(V ? "insComponent" : "no insComponent - this insert will be discarded", D && !b && !k && null == R, null != R && undefined !== L)
    if (null != R) {
      if (undefined !== h || D) {
        ;
      } else {
        var G = null != I ? A[I] : n++
        m[R] = G
        f("assigning slot", G, "to op2 slot", I)
        x.write("p", G)
      }
    } else if (k) {
      if (!(D || undefined !== h)) {
        f("keeping write here r=", O.r)
        x.write("r", O.r)
      }
    }
    var z = F ? null : S(C)
    var Q = S(j)
    f("components", C, j)
    if (z || Q) {
      f("types", z && z.name, Q && Q.name)
    }
    if (z && Q) {
      d(z === Q)
      var W = T(C)
      var K = T(j)
      var X = z.compose(W, K)
      f("compose ->", X)
      B(E, z, X)
      y.add(j)
    } else if (z) {
      f("copying edit type1", C)
      B(E, z, T(C))
    } else {
      if (Q) {
        f("copying edit type2", j)
        B(E, Q, T(j))
        y.add(j)
      }
    }
    var Y = "object" === typeof L && null != L
    var q = false
    var $ = 0
    var J = 0
    var Z = 0
    var ee = 0
    var te = 0
    var ne = c.advancer(o, function (e, t) {
      return v(t) ? ee - e - 1 : e - ee
    }, function (e, t) {
      if (v(t)) {
        ee++
      }
    })
    var re = c.advancer(t, function (e, t) {
      return g(t) ? $ - e - 1 : e - $
    }, function (e, t) {
      if (g(t)) {
        $++
      }
    })
    c.eachChildOf(r, i, function (t, n, r) {
      var i
      var o
      var a = t
      var s = t
      var c = t
      if ("number" === typeof t) {
        var u = t + Z
        o = ne(u)
        s = u + ee
        var l = t + J
        i = re(l)
        if (v(p(o))) {
          i = null
        }
        a = l + $
        c = t + te
        f("p1PickOff", $, "p1DropOff", J, "p2PickOff", Z, "p2DropOff", ee, "litOff", te)
        f("inKey", t, "-> p1 mid", l, "-> p1 final", a)
        f("inKey", t, "-> p2 mid", u, "-> p2 final", s)
        d(a >= 0, "p1PickKey is negative")
        d(s >= 0, "p2DropKey is negative")
        var h = v(p(n))
        var _ = g(p(r))
        if (h || _ && !F) {
          te--
        }
        if (h) {
          J--
        }
        if (_) {
          Z--
        }
      } else {
        i = re(t)
        o = ne(t)
      }
      f("->", "p1pick", a, "inkey", t, "p2drop", s, "litKey", c)
      x.descend(a)
      E.descend(s)
      var A = Y && !v(p(n)) ? L[c] : undefined
      f("_lit", A, L, c)
      var m
      var y
      var b
      var w = e(i, n, r, o, A, F, E, x)
      if (Y && !F) {
        f("_litResult", w)
        if (A !== w) {
          if (!q) {
            L = Array.isArray(L) ? L.slice() : Object.assign({}, L)
            q = true
          }
          m = L
          b = w
          if ("number" === typeof (y = c)) {
            d(Array.isArray(m))
            d(y < m.length)
          } else {
            d(!Array.isArray(m))
            d(undefined !== m[y])
          }
          if (undefined === b) {
            if ("number" === typeof y) {
              m.splice(y, 1)
            } else {
              delete m[y]
            }
          } else {
            m[y] = b
          }
          f("litOut ->", L)
        }
      } else {
        d(undefined === w)
      }
      E.ascend()
      x.ascend()
    })
    re.end()
    ne.end()
    N()
    if (null != V) {
      V.i = L
    } else if (!b && !k && null == R) {
      return L
    }
  }(r, r.clone(), i, i.clone(), undefined, false, o, E)
  o.reset()
  o.mergeTree(E.get())
  o.reset()
  f("intermediate op", o.get())
  f("heldPickWrites", a.map(function (e) {
    return e.get()
  }))
  f("heldDropWrites", s.map(function (e) {
    return e.get()
  }))
  r.traverse(o, function (e, t) {
    var n = e.p
    if (null != n) {
      var r = A[n]
      if (null != r) {
        f("writing pick slot", r)
        t.write("p", r)
      }
      var i = a[n]
      if (i) {
        f("merge pick write", i.get())
      }
      if (i) {
        t.mergeTree(i.get())
      }
    } else if (undefined !== e.r) {
      t.write("r", e.r)
    }
  })
  o.reset()
  f("intermediate op with picks", o.get())
  i.traverse(o, function (e, t) {
    var n = e.d
    if (null != n) {
      var r = m[n]
      if (null != r) {
        t.write("d", r)
      }
      var i = s[n]
      if (i) {
        t.mergeTree(i.get())
      }
    } else if (undefined !== e.i) {
      t.write("i", e.i)
    }
    var o = S(e)
    if (o && !y.has(e)) {
      B(t, o, T(e))
    }
  })
  var x = o.get()
  f("-> compose returning", x)
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    R(x)
  }
  return x
}
function L(e) {
  if (null == e) {
    return null
  }
  var t
  var n = new c.ReadCursor(e)
  var i = new c.WriteCursor()
  var o = []
  var a = []
  f("inverting", e);
  (function e(n, i, a) {
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("invertSimple", n.getPath(), a)
    }
    P()
    var s
    var c = n.getComponent()
    var u = false
    if (c) {
      if (null != c.p) {
        i.write("d", c.p)
        o[c.p] = n.clone()
      }
      if (undefined !== c.r) {
        i.write("i", c.r)
      }
      if (null != c.d) {
        i.write("p", c.d)
        a = undefined
      }
      if (undefined !== c.i) {
        a = s = c.i
      }
      var d = S(c)
      if (d) {
        f("found edit", c, a)
        if (undefined === a) {
          if (!t) {
            t = new Set()
          }
          t.add(c)
        } else {
          f("baking edit into subDoc", a, T(c))
          a = d.apply(a, T(c))
          u = true
        }
      }
    }
    var h
    var p = 0
    var _ = r(n)
    try {
      for (_.s(); !(h = _.n()).done;) {
        var /* [auto-meaningful-name] */h$value = h.value
        i.descend(h$value)
        var m = "number" === typeof h$value ? h$value - p : h$value
        var y = E(a, m)
        if (v(n.getComponent())) {
          p++
        }
        var b = e(n, i, y)
        f("key", h$value, "raw", m, y, b, "subdoc", a)
        if (undefined !== a && undefined !== b) {
          if (!u) {
            u = true
            a = A(a)
          }
          if (!w(a, m)) {
            throw Error("Cannot modify child - invalid operation")
          }
          a[m] = b
        }
        i.ascend()
      }
    } catch (x) {
      _.e(x)
    } finally {
      _.f()
    }
    N()
    if (undefined === s) {
      return u ? a : undefined
    }
    i.write("r", a)
  })(n, i, undefined)
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    f("invert after pass 1", i.get())
  }
  if (t) {
    i.reset();
    (function e(n, i, s) {
      if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
        f("invXE", null === n || undefined === n ? undefined : n.getPath(), i.getPath(), s.getPath())
      }
      P()
      var u = i.getComponent()
      if (u) {
        var d = u.d
        if (null != d) {
          f("teleporting to drop slot", d)
          n = o[d]
          s = a[d] = c.writeCursor()
        }
        if (t.has(u)) {
          var h = S(u)
          if (!h.invert) {
            throw Error("Cannot invert subtype ".concat(h.name))
          }
          if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
            f("inverting subtype", h.name, T(u))
          }
          B(s, h, h.invert(T(u)))
        }
      }
      var p
      var _ = 0
      var A = 0
      var m = c.advancer(n, function (e, t) {
        return g(t) ? _ - e - 1 : e - _
      }, function (e, t) {
        if (g(t)) {
          _++
        }
      })
      var y = r(i)
      try {
        for (y.s(); !(p = y.n()).done;) {
          var /* [auto-meaningful-name] */p$value = p.value
          if ("number" === typeof p$value) {
            var w = p$value - A
            var E = m(w)
            var x = w + _
            f("descend", p$value, w, x, "dropOff", A, "pickOff", _)
            s.descend(x)
            e(E, i, s)
            if (v(i.getComponent())) {
              A++
            }
            s.ascend()
          } else {
            s.descend(p$value)
            e(m(p$value), i, s)
            s.ascend()
          }
        }
      } catch (C) {
        y.e(C)
      } finally {
        y.f()
      }
      m.end()
      N()
    })(n.clone(), n, i)
    if (a.length) {
      if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
        f("Merging held writes", a.map(function (e) {
          return e.get()
        }))
      }
      i.reset()
      n.traverse(i, function (e, t) {
        f("traverse", e)
        var n = e.p
        if (null != n) {
          f("merging slot", n)
          var r = a[n]
          if (r) {
            f("merge", r.get())
          }
          if (r) {
            t.mergeTree(r.get())
          }
        }
      })
    }
  }
  var s = i.get()
  f("-> invert returning:", s)
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    R(s)
  }
  return s
}
function j(e, t) {
  f("makeInvertible", e, t)
  if (null == e || !function e(t, n) {
    return t.some(function (t) {
      return "object" === typeof t && (Array.isArray(t) ? e(t, n) : n(t))
    })
  }(e, function (e) {
    var t
    return undefined !== e.r || null != (null === (t = S(e)) || undefined === t ? undefined : t.makeInvertible)
  })) {
    return e
  }
  var n = new c.ReadCursor(e)
  var i = new c.WriteCursor()
  var o = false
  var a = []
  var u = [];
  (function e(t, n, i) {
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("traversePick", t.getPath(), i)
    }
    P()
    var c = t.getComponent()
    var h = false
    if (c) {
      if (null != c.d) {
        n.write("d", c.d)
      }
      if (undefined !== c.i) {
        n.write("i", c.i)
      }
      var p = c.p
      if (null != p) {
        a[p] = t.clone()
        d(undefined !== i, "Operation picks up at an invalid key")
        u[p] = i
        n.write("p", c.p)
      }
      if (undefined !== c.r && undefined === i) {
        throw Error("Invalid doc / op in makeInvertible: removed item missing from doc")
      }
      var _ = S(c)
      if (_) {
        if (_.makeInvertible) {
          o = true
        } else {
          B(n, _, T(c), true)
        }
      }
    }
    var g
    var v = 0
    var y = r(t)
    try {
      for (y.s(); !(g = y.n()).done;) {
        var /* [auto-meaningful-name] */g$value = g.value
        n.descend(g$value)
        var w = "number" === typeof g$value ? g$value - v : g$value
        var x = E(i, w)
        var C = e(t, n, x)
        if (x !== C) {
          f("childOut != childIn", x, C, g$value, w)
          if (!h) {
            h = true
            i = A(i)
          }
          if (undefined === C) {
            i = m(i, w)
            if ("number" === typeof g$value) {
              v++
            }
          } else {
            i[w] = C
          }
          f("subDoc ->", i)
        }
        n.ascend()
      }
    } catch (O) {
      y.e(O)
    } finally {
      y.f()
    }
    if (c) {
      if (undefined !== c.r) {
        f("write r", i)
        n.write("r", s.default(i))
        i = undefined
      } else {
        if (null != c.p) {
          i = undefined
        }
      }
    }
    f("tp returning", i)
    N()
    return i
  })(n, i, t)
  f("after traversePick", i.get())
  if (o) {
    i.reset();
    (function e(t, n, i, o, s) {
      if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
        f("traverseDrop", null === t || undefined === t ? undefined : t.getPath(), n.getPath(), i.getPath(), o)
      }
      P()
      var d = n.getComponent()
      if (d) {
        if (undefined !== d.i) {
          o = d.i
          s = true
          f("using inserted subdoc", o)
        } else {
          if (null != d.d) {
            o = u[d.d]
            t = a[d.d]
            s = false
            f("teleporting to pick", d.d, o)
          }
        }
        var h = S(d)
        if (h && h.makeInvertible) {
          var p = T(d)
          f("makeInvertible on child", p, o)
          B(i, h, h.makeInvertible(p, o), true)
        }
      }
      var _
      var A = 0
      var m = 0
      var y = c.advancer(t, function (e, t) {
        return g(t) ? A - e - 1 : e - A
      }, function (e, t) {
        if (g(t)) {
          A++
        }
      })
      var b = r(n)
      try {
        for (b.s(); !(_ = b.n()).done;) {
          var /* [auto-meaningful-name] */_$value = _.value
          if ("number" === typeof _$value) {
            var x = _$value - m
            var C = y(x)
            var O = x + A
            f("key", _$value, "mid", x, "raw", O, "isLiteral", s)
            var k = E(o, s ? x : O)
            i.descend(_$value)
            e(C, n, i, k, s)
            if (v(n.getComponent())) {
              m++
            }
            i.ascend()
          } else {
            var D = E(o, _$value)
            i.descend(_$value)
            e(y(_$value), n, i, D, s)
            i.ascend()
          }
        }
      } catch (I) {
        b.e(I)
      } finally {
        b.f()
      }
      y.end()
      N()
    })(n.clone(), n, i, t, false)
  }
  var h = i.get()
  f("-> makeInvertible returning", h)
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    R(h)
  }
  return h
}
var U = function e(t) {
  if (null == t) {
    return null
  }
  for (var n = t.slice(), r = 0; r < t.length; r++) {
    var i = n[r]
    if (Array.isArray(i)) {
      n[r] = e(i)
    }
  }
  return n
}
function H(e, n, i) {
  d("left" === i || "right" === i, "Direction must be left or right")
  var o = "left" === i ? 0 : 1
  f.quiet = !h
  f.prefix = 0
  if (null == n) {
    return {
      ok: true,
      result: e
    }
  }
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE && h) {
    f("transforming " + i + ":")
    f("op1", e)
    f("op2", n)
    f("repro: transform(".concat([e, n, i].map(function (e) {
      return JSON.stringify(e)
    }).join(", "), ")"))
  }
  R(e)
  R(n)
  var _ = {}
  var A = function (e, t) {
    if (null != t) {
      if (null == _[e]) {
        _[e] = new Set()
      }
      var n = t.getPath().map(function (e, t) {
        return "".concat(t, ":").concat(e)
      }).join(".")
      if (_[e].has(n)) {
        throw Error("non-unique descent: ".concat(e, " ").concat(n))
      }
      _[e].add(n)
    }
  }
  var m = null
  var y = []
  var b = []
  var w = []
  var E = []
  var x = []
  var C = []
  var O = []
  var k = []
  var D = []
  var I = []
  var F = []
  var M = []
  var L = []
  var j = []
  var H = []
  var V = 0
  var G = c.readCursor(e)
  var z = c.readCursor(n)
  var Q = c.writeCursor();
  (function e(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null
    var i = arguments.length > 2 ? arguments[2] : undefined
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("scanOp2Pick", "r1Pick", n && n.getPath(), "r2Pick", t.getPath(), "removed1:", i && i.getPath())
    }
    P()
    var o = p(n)
    if (o) {
      if (undefined !== o.r) {
        i = n.clone()
      } else {
        if (null != o.p) {
          i = null
          C[o.p] = t.clone()
        }
      }
    }
    var a
    var s = t.getComponent()
    if (s && null != (a = s.p)) {
      f("c2", s, "rm", !!i)
      x[a] = n ? n.clone() : null
      w[a] = t.clone()
      if (i) {
        I[a] = true
        D[a] = i
        f("Cancelled op2 slot", a)
      }
      if (o && null != o.p) {
        j[a] = o.p
      }
    }
    var u
    var d = c.advancer(n)
    var h = r(t)
    try {
      for (h.s(); !(u = h.n()).done;) {
        var /* [auto-meaningful-name] */u$value = u.value
        f("->", u$value)
        e(t, d(u$value), i)
      }
    } catch (A) {
      h.e(A)
    } finally {
      h.f()
    }
    d.end()
    N()
  })(z, G, null)
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    f("op1PickAtOp2Pick", j)
    f("cancelledOp2", I)
    f("held op2 pick", C.map(function (e) {
      return !!e
    }))
  }
  (function e(n, i, a, s, d) {
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("scanOp2Drop", "r1Pick", n && n.getPath(), i && i.getPath(), "r2Drop", a.getPath(), "pickSlot1", s, "removed:", d && d.getPath())
    }
    P()
    var h
    var _ = a.getComponent()
    var A = false
    if (_) {
      if (null != (h = _.d)) {
        E[h] = a.clone()
        if (null != s) {
          if (null == H[s]) {
            H[s] = []
          }
          H[s].push(h)
        }
        f("tele r2Pick to op2 slot2", h, !!I[h])
        n = x[h] || null
        i = w[h] || null
        if (I[h]) {
          if (d) {
            F[h] = true
          }
          d = D[h] || null
        } else {
          if (!(!d || 1 !== o && null != j[h])) {
            f("conflicting op2 move because drop destination removed", h)
            if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
              f("path", a.getPath(), i.getPath())
            }
            if (null == m) {
              m = {
                type: u.ConflictType.RM_UNEXPECTED_CONTENT,
                op1: exports.removeOp(d.getPath()),
                op2: exports.moveOp(i.getPath(), a.getPath())
              }
            }
          }
        }
        A = true
      } else {
        if (undefined !== _.i) {
          n = i = null
          A = true
          if (d) {
            f("Conflicting op2 drop because op1 remove")
            if (null == m) {
              m = {
                type: u.ConflictType.RM_UNEXPECTED_CONTENT,
                op1: exports.removeOp(d.getPath()),
                op2: exports.insertOp(a.getPath(), _.i)
              }
            }
          }
        }
      }
    }
    var v = p(n)
    if (v) {
      if (undefined !== v.r) {
        d = n.clone()
      } else {
        if (null != v.p) {
          f("Marking pickSlot1", v.p)
          s = v.p
          d = null
        }
      }
    }
    var y = S(_)
    if (y && d) {
      f("rm / edit conflict")
      if (null == m) {
        m = {
          type: u.ConflictType.RM_UNEXPECTED_CONTENT,
          op1: exports.removeOp(d.getPath()),
          op2: exports.editOp(a.getPath(), y, T(_), true)
        }
      }
    }
    var b
    var C = 0
    var O = 0
    var k = c.advancer(i, function (e, t) {
      return g(t) ? C - e - 1 : e - C
    }, function (e, t) {
      if (g(t)) {
        C++
      }
    })
    var B = c.advancer(n)
    var R = r(a)
    try {
      for (R.s(); !(b = R.n()).done;) {
        var /* [auto-meaningful-name] */b$value = b.value
        f("key ->", b$value)
        if ("number" === typeof b$value) {
          var L = b$value - O
          f("p2Mid", L)
          var U = k(L)
          var V = L + C
          f("raw", V)
          var G = B(V)
          f("key", b$value, "p2DropOff", O, "p2PickOff", C)
          f("-> p2drop", b$value, "p2Mid", L, !!U, "raw", V, !!G)
          O += +e(G, U, a, s, d)
        } else {
          f("-> k", b$value)
          var z = k(b$value)
          e(B(b$value), z, a, s, d)
        }
      }
    } catch (Q) {
      R.e(Q)
    } finally {
      R.f()
    }
    k.end()
    B.end()
    N()
    return A
  })(G, z, z.clone(), null, null)
  f("held op2 drop", E.map(function (e) {
    return e && e.get()
  }))
  if (m) {
    f("returning conflict 4", m)
    return {
      ok: false,
      conflict: m
    }
  }
  f("discarded op2 drop", F.map(function (e) {
    return !!e
  }))
  f("op1PicksOp2DropSlots", H)
  var W = []
  var K = null
  f("---- pick ----");
  (function e(t, n, i, a, s) {
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("writeOp1Pick", "r1Pick", t.getPath(), "r2Pick", n && n.getPath(), "r2Drop", i && i.getPath(), "w", a.getPath(), "removed2", s && s.getPath())
    }
    P()
    var u = false
    var h = p(n)
    if (g(h)) {
      var _ = h.p
      if (null != _) {
        if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
          f("teleporting via op2 slot2", _, "to", E[_].getPath())
        }
        i = E[_]
        a = M[_] = c.writeCursor()
        u = true
        s = null
      } else {
        i = null
        s = n.clone()
      }
    } else if (v(p(i))) {
      i = null
    }
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      A("op1pick r1Pick", t)
      A("op1pick r2Pick", n)
      A("op1pick r2Drop", i)
    }
    var m = t.getComponent()
    if (m) {
      var b = m.p
      if (null != b) {
        if (s) {
          k[b] = s
        }
        f("considering slot", b, "removed2", !!s, "iAmMoved", u)
        if (s || 1 === o && u) {
          f("cancelling p1 move", b)
          W[b] = null
        } else {
          f("holding pick component")
          W[b] = a.getComponent()
        }
        y[b] = t.clone()
        if (i) {
          O[b] = i.clone()
        }
      } else {
        if (undefined !== m.r) {
          if (!s) {
            f("copying remove")
            a.write("r", true)
          }
          if (s || u) {
            f("Cancelling remove", m, !!s, u)
            if (null == K) {
              K = new Set()
            }
            K.add(m)
          }
        }
      }
    }
    var w = 0
    var x = 0
    var C = c.advancer(n, undefined, function (e, t) {
      if (g(t)) {
        w++
        f("r2Pick++", w, e, t)
      }
    })
    var S = c.advancer(i, function (e, t) {
      return v(t) ? ~(e - x) : e - x
    }, function (e, t) {
      if (v(t)) {
        x++
        f("r2Drop++", x, e, t)
      }
    })
    f("children", "2p", !!n, "2d", !!i)
    if (t) {
      var T
      var B = r(t)
      try {
        for (B.s(); !(T = B.n()).done;) {
          var /* [auto-meaningful-name] */T$value = T.value
          f("-> k", T$value)
          if ("string" === typeof T$value) {
            var I = C(T$value)
            var R = S(T$value)
            a.descend(T$value)
            e(t, I, R, a, s)
            a.ascend()
          } else {
            var F = C(T$value)
            var L = T$value - w
            var j = g(p(F)) ? null : S(L)
            var U = L + x
            f("k" + T$value + " -> m" + L + " -> f" + U)
            d(U >= 0)
            a.descend(U)
            e(t, F, j, a, s)
            a.ascend()
          }
        }
      } catch (H) {
        B.e(H)
      } finally {
        B.f()
      }
    }
    C.end()
    S.end()
    N()
  })(G, z, z.clone(), Q, null)
  Q.reset()
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    f("intermediate result", Q.get())
    f("held picks", y.map(function (e) {
      return e.getComponent() || !!e
    }))
    f("held op2 drops by op1", O.map(function (e) {
      return e.getComponent() || !!e
    }))
    f("held pick writes", M.map(function (e) {
      return e.get()
    }))
    f("pc", W)
  }
  var X = []
  f("----- drop -----");
  (function e(n, h, _, x, D, R) {
    d(h)
    var F = h.getComponent()
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("drop", n && n.getPath(), h.getPath(), _ && _.getPath(), x && x.getPath(), "c:", F, "r:", !!R)
    }
    P()
    var M = p(x)
    var U = false
    var H = function (e, n, r) {
      return e ? exports.moveOp(e.getPath(), n.getPath()) : exports.insertOp(n.getPath(), r.i)
    }
    if (v(F)) {
      var G = F.d
      if (null != G) {
        b[G] = h.clone()
      }
      var z
      var Q = null != G ? W[G] : null
      var Y = false
      if (undefined !== F.i || null != G && Q) {
        f("looking to write", F, M, I)
        if (M && (undefined !== M.i || null != (z = M.d) && !I[z])) {
          if (!((Y = null != z ? null != G && G === j[z] : a.default(M.i, F.i)) || null != z && 1 !== o && null != j[z])) {
            f("Overlapping drop conflict!")
            if (null == m) {
              m = {
                type: u.ConflictType.DROP_COLLISION,
                op1: H(null != G ? y[G] : null, h, F),
                op2: H(null != z ? w[z] : null, x, M)
              }
            }
          }
        }
        f("write", "identical", Y, "removed2", !!R)
        if (!Y) {
          if (R) {
            f("Drop into remove conflict!")
            if (null == m) {
              m = {
                type: u.ConflictType.RM_UNEXPECTED_CONTENT,
                op1: H(null != G ? y[G] : null, h, F),
                op2: exports.removeOp(R.getPath())
              }
            }
          } else {
            if (null != G) {
              f("copying the drop", G, "using new slot", V)
              X[V] = G
              D.write("d", Q.p = V++)
            } else {
              f("copying insert")
              D.write("i", s.default(F.i))
            }
            U = true
          }
        }
      } else if (null != G && !Q) {
        var q = k[G]
        if (q) {
          R = q.clone()
        }
      }
      if (null != G) {
        f("teleporting p1Pick and op2Pick via op1 slot", G)
        n = y[G]
        _ = C[G]
        x = O[G]
        if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
          f("p1Pick", n && n.getPath(), "p2Pick", _ && _.getPath(), "p2Drop", x && x.getPath())
        }
      } else {
        if (undefined !== F.i) {
          n = _ = null
          if (!Y) {
            x = null
          }
        }
      }
    } else if (g(p(n))) {
      n = _ = x = null
    }
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      A("op1drop op2Pick", _)
      A("op1drop op1Pick", n)
      A("op1drop op1Drop", h)
    }
    var $ = p(n)
    var J = p(_)
    if (g(J)) {
      var Z = J.p
      if (undefined !== J.r && (!$ || undefined === $.r) || I[Z]) {
        f("flagging remove")
        x = null
        R = _.clone()
      } else {
        if (null != Z) {
          f("teleporting p2Drop via c2 slot2", Z)
          x = E[Z]
          if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
            f("p2Drop", x && x.getPath())
          }
          if (!(1 !== o && null != j[Z])) {
            f("teleporting write")
            if (!(D = L[Z])) {
              D = L[Z] = c.writeCursor()
            }
            D.reset()
            R = null
          }
        }
      }
    } else if (!v(F) && v(M)) {
      x = null
    }
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      A("op1drop op2Drop", x)
    }
    M = null != x ? x.getComponent() : null
    var ee = S(F)
    if (ee) {
      f("edit:", !!R, F, M)
      var te = T(F)
      if (R) {
        if (null == m) {
          m = {
            type: u.ConflictType.RM_UNEXPECTED_CONTENT,
            op1: exports.editOp(h.getPath(), ee, te, true),
            op2: exports.removeOp(R.getPath())
          }
        }
      } else {
        var ne
        var re = S(M)
        if (re) {
          if (ee !== re) {
            throw Error("Transforming incompatible types")
          }
          var ie = T(M)
          ne = ee.transform(te, ie, i)
        } else {
          ne = s.default(te)
        }
        f("write edit", ne)
        B(D, ee, ne)
      }
    }
    var oe = 0
    var ae = 0
    var se = 0
    var ce = 0
    var ue = 0
    var le = 0
    var fe = null != n && n.descendFirst()
    var de = fe
    var he = c.advancer(_, undefined, function (e, t) {
      if (g(t)) {
        se++
        f("p2Pick++", se, e, t)
      }
    })
    var pe = null != x && x.descendFirst()
    var _e = pe
    f("children.", "1p:", !!n, "1d:", !!h, "2p:", !!_)
    var Ae
    var ge = r(h)
    try {
      for (ge.s(); !(Ae = ge.n()).done;) {
        var /* [auto-meaningful-name] */Ae$value = Ae.value
        f("-> p1Drop looking at child", Ae$value)
        if ("number" === typeof Ae$value) {
          var me = undefined
          f("p1DropEachChild k:", Ae$value, "p1d:", ae, "p1p:", oe, "raw: -", "p2p:", se, "p2d:", ce, "op:", ue, "od:", le)
          var ye = v(h.getComponent())
          var be = Ae$value - ae
          var we = undefined
          for (f("Looking for p2 Pick at k1Mid", be), P(); fe && "number" === typeof (we = n.getKey());) {
            we += oe
            var Ee = n.getComponent()
            var xe = g(Ee)
            f("p1k", we, "k1mid", be, "hp", xe)
            if (we > be || we === be && (!xe || 0 === o && ye)) {
              break
            }
            if (xe) {
              f("p1PickOff--")
              oe--
              var Ce = Ee.p
              f("considering outPickOff--", Ee, K, W[Ce], j.includes(Ce))
              f(null != Ee.d, p(L[Ee.d]), g(p(L[Ee.d])))
              if (!((undefined === Ee.r || K && K.has(Ee)) && (null == Ce || !W[Ce] || 1 !== o && j.includes(Ce)))) {
                f("outPickOff-- from pickup")
                ue--
              }
            }
            fe = n.nextSibling()
          }
          me = fe && we === be ? n : null
          N()
          f("_p1Pick", !!me)
          var Oe = be - oe
          f("ap2p", Oe)
          var ke = he(Oe)
          f("_p2Pick", !!ke, "p2PickOff", se)
          var Se = Oe - se
          var Te = null
          var Be = undefined
          var De = undefined
          for (f("Looking for p2 Drop at p2mid", Se), P(); pe && "number" === typeof (Be = x.getKey());) {
            De = Be - ce
            var Ie = x.getComponent()
            var Re = v(Ie)
            f("p2d looking at child", Be, Ie, "at op2mid", De, "target", Se, "  / raw", Oe, ce, Re, ye)
            if (De > Se) {
              break
            }
            if (De === Se) {
              if (!Re) {
                Te = x
                break
              }
              if (0 === o && ye) {
                Te = x
                break
              }
              var Fe = ke && g(ke.getComponent())
              if (0 === o && Fe) {
                break
              }
            }
            if (Re) {
              var Pe = Ie.d
              f("considering p2Drop", Ie, Pe, I[Pe], j[Pe])
              if (undefined === Ie.i && (I[Pe] || null != j[Pe] && 1 !== o)) {
                if (I[Pe] || null != j[Pe] && 0 === o) {
                  f("skipped because the drop was cancelled")
                  ce++
                  le--
                }
              } else {
                f("p2DropOff++ from drop")
                ce++
              }
            }
            pe = x.nextSibling()
          }
          N()
          f("_p2Drop", !!Te)
          var Ne = Se + ce
          f("->DropEachChild k:", Ae$value, "p1d:", ae, "p1p:", oe, "raw:", Oe, "p2p:", se, "p2d:", ce, "op:", ue, "od:", le)
          var Me = Ne + ue + le
          f("k: " + Ae$value + " -> mid " + be + " -> raw " + Oe + " -> k2Mid " + Se + " -> k2Final " + Ne + " -> descend " + Me)
          d(Me >= 0, "trying to descend to a negative index")
          D.descend(Me)
          if (ye) {
            me = ke = Te = null
            f("omg p1dropoff", ae)
            ae++
          }
          if (e(me, h, ke, Te, D, R)) {
            le++
          }
          D.ascend()
        } else {
          for (var Le = undefined; fe && ("string" !== typeof (Le = n.getKey()) || !(Le > Ae$value || Le === Ae$value));) {
            fe = n.nextSibling()
          }
          for (var je = fe && Le === Ae$value ? n : null, Ue = he(Ae$value), He = undefined; pe && ("string" !== typeof (He = x.getKey()) || !(He > Ae$value || He === Ae$value));) {
            pe = x.nextSibling()
          }
          var Ve = pe && He === Ae$value ? x : null
          D.descend(Ae$value)
          e(je, h, Ue, Ve, D, R)
          D.ascend()
        }
      }
    } catch (Ge) {
      ge.e(Ge)
    } finally {
      ge.f()
    }
    he.end()
    if (de) {
      n.ascend()
    }
    if (_e) {
      x.ascend()
    }
    N()
    return U
  })(G, G.clone(), z, z.clone(), Q, null)
  if (m) {
    f("returning conflict 3", m)
    return {
      ok: false,
      conflict: m
    }
  }
  Q.reset()
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    f("output slot map", X)
    f("merging picks into partial output", Q.get())
    f("held pick writes", M.map(function (e) {
      return e.get()
    }))
  }
  var Y = function (e, t, n) {
    return e.traverse(t, function (t, r) {
      if (null != t.d) {
        n(t.d, e, r)
      }
    })
  }
  if (I.length || M.length) {
    f("merging")
    Y(z, Q, function (e, t, n) {
      if (I[e] && !F[e]) {
        f("removing at held drop2", e)
        n.write("r", true)
      }
      if (M[e]) {
        n.mergeTree(M[e].get())
      }
    })
    Q.reset()
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("after merge", Q.get())
    }
  }
  var q = []
  var $ = []
  if ((L.length || I.length) && !m) {
    f("------ write held picks and drops -----")
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("held drop writes", L.map(function (e) {
        return e.get()
      }))
    }
    var J = c.readCursor(U(Q.get()))
    Y(J, null, function (e, t) {
      q[e] = t.clone()
    })
    L.forEach(function (e) {
      if (e) {
        Y(c.readCursor(e.get()), null, function (e, t) {
          q[e] = t.clone()
        })
      }
    })
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("merging writes into", J.get())
      f("heldOutDropRead", q.map(function (e) {
        return e && e.getPath()
      }))
    }
    (function e(t, n, i, o, a, s) {
      if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
        f("writeHeldOp2Drop", "p2Drop", t.getPath(), "outPick", n && n.getPath(), "outDrop", i && i.getPath(), "pc", a, "rm out", s)
      }
      f.prefix++
      var u = p(n)
      if (u && g(u)) {
        if (null != u.p) {
          a = u
          var d = u.p
          f("teleporting writes to output slot", d, q[d].getPath())
          i = q[d]
          o = $[d] = c.writeCursor()
        } else if (undefined !== u.r) {
          i = null
          s = true
        }
        f("coutp", u)
      } else if (v(p(i))) {
        i = null
      }
      var h
      var _ = t.getComponent()
      if (_ && null != (h = _.d)) {
        f("c2 drop slot", h)
        var m = L[h]
        if (m) {
          f("merge tree", m.get())
          o.mergeTree(m.get())
          i = c.readCursor(m.get())
        }
      }
      if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
        A("outDrop p2Drop", t)
        A("outDrop outPick", n)
      }
      var y
      var b = 0
      var w = 0
      var E = c.advancer(n, undefined, function (e, t) {
        if (g(t)) {
          b--
          f("outPickOff++")
        }
      })
      var x = c.advancer(i, function (e, t) {
        return v(t) ? -(e - w) - 1 : e - w
      }, function (e, t) {
        if (v(t)) {
          w++
          f("outDropOff++")
        }
      })
      var C = r(t)
      try {
        for (C.s(); !(y = C.n()).done;) {
          var /* [auto-meaningful-name] */y$value = y.value
          if ("number" === typeof y$value) {
            var k = E(y$value)
            var S = y$value + b
            var T = x(S)
            var B = S + w
            f("->", y$value, "outPickOff", b, "-> rmid", S, "dropOff", w, "final", B)
            o.descend(B)
            e(t, k, T, o, a, s)
            o.ascend()
          } else {
            f("->", y$value)
            o.descend(y$value)
            e(t, E(y$value), x(y$value), o, a, s)
            o.ascend()
          }
        }
      } catch (D) {
        C.e(D)
      } finally {
        C.f()
      }
      N()
      E.end()
      x.end()
    })(z, J, J.clone(), Q, null, false)
    Q.reset()
    if (m) {
      f("-> xf returning conflict 2", m)
      return {
        ok: false,
        conflict: m
      }
    }
    f("-- after writeHeldOp2Drop", Q.get())
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
      f("held output writes", $.map(function (e) {
        return e.get()
      }))
    }
    if ($.length) {
      var Z = $.map(function (e) {
        return e ? e.get() : null
      })
      var ee = c.readCursor(U(Q.get()))
      Y(ee, Q, function (e, t, n) {
        var r = Z[e]
        if (r) {
          n.mergeTree(r)
          Z[e] = null
        }
      })
      if (Z.find(function (e) {
        return e
      })) {
        f("BLACKHOLE")
        var te = c.writeCursor()
        var ne = c.writeCursor()
        var re = 0
        var ie = 0
        Z.forEach(function (e, t) {
          if (null != e) {
            Y(c.readCursor(e), null, function (e) {
              var t = X[e]
              te.writeMove(y[t].getPath(), b[t].getPath(), re++)
              f("blackhole slot1", t)
              var n = H[t]
              if (n) {
                n.forEach(function (e) {
                  if (!(I[e] || 1 !== o && null != j[e])) {
                    ne.writeMove(w[e].getPath(), E[e].getPath(), ie++)
                  }
                })
              }
            })
          }
        })
        m = {
          type: u.ConflictType.BLACKHOLE,
          op1: te.get(),
          op2: ne.get()
        }
      }
    }
  }
  if (m) {
    f("-> xf returning conflict 5", m)
    f()
    return {
      ok: false,
      conflict: m
    }
  }
  var oe = Q.get()
  f("-> xf returning", oe)
  f()
  if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE) {
    R(oe)
  }
  return {
    ok: true,
    result: oe
  }
}
var V = function (e) {
  var t = new Error("Transform detected write conflict")
  t.conflict = e
  t.type = t.name = "writeConflict"
  throw t
}
var G = function (e) {
  var t = c.writeCursor()
  c.readCursor(e).traverse(t, function (e, t) {
    if (v(e) || S(e)) {
      t.write("r", true)
    }
  })
  return t.get()
}
var z = function (e, t) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$op1 = e.op1
  var /* [auto-meaningful-name] */e$op2 = e.op2
  switch (f("resolving conflict of type", e$type), e$type) {
    case u.ConflictType.DROP_COLLISION:
      return "left" === t ? [null, G(e$op2)] : [G(e$op1), null]
    case u.ConflictType.RM_UNEXPECTED_CONTENT:
      var o = false
      c.readCursor(e$op1).traverse(null, function (e) {
        if (undefined !== e.r) {
          o = true
        }
      })
      return o ? [null, G(e$op2)] : [G(e$op1), null]
    case u.ConflictType.BLACKHOLE:
      return [G(e$op1), G(e$op2)]
    default:
      throw Error("Unrecognised conflict: " + e$type)
  }
}
var Q = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$op1 = e.op1
  return {
    type: e$type,
    op1: e.op2,
    op2: e$op1
  }
}
var W = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$op1 = e.op1
  var /* [auto-meaningful-name] */e$op2 = e.op2
  return {
    type: e$type,
    op1: F(e$op1),
    op2: F(e$op2)
  }
}
function K(e, t, n, r) {
  for (var o = null;;) {
    var s = H(t, n, r)
    if (s.ok) {
      return M(o, s.result)
    }
    var /* [auto-meaningful-name] */s$conflict = s.conflict
    f("detected conflict", s$conflict)
    if (!e(s$conflict)) {
      V(s$conflict)
    }
    if (!ObjectNODE_ENVProductionPUBLIC_URLWDS_SOCKET_HOSTUndefinedWDS_SOCKET_PATHUndefinedWDS_SOCKET_PORTUndefined$JSON1_RELEASE_MODE && s$conflict.type === u.ConflictType.BLACKHOLE) {
      var h = H(n, t, "left" === r ? "right" : "left")
      d(!h.ok)
      try {
        d(a.default(W(h.conflict), W(Q(s$conflict))))
      } catch (v) {
        f.debug = true
        f("Inverted transform conflict", t, n, s$conflict, h.conflict)
        throw v
      }
    }
    var p = z(s$conflict, r)
    var _ = i(p, 2)
    var A = _[0]
    var g = _[1]
    f("Resolve ops", A, g)
    t = M(F(t), A)
    n = M(F(n), g)
    o = M(o, g)
    f("recover from conflict", s$conflict)
    f("op1 ->", t)
    f("op2 ->", n)
  }
}
