/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1136
 */

"use strict"

var r = require(/* 2257 */"./2257")
var i = require(/* 1137 */"../2256/1137")
var o = require(/* 765 */"../765/index")
var a = require(/* 1365 */"../1365")
var s = require(/* 2259 */"./2259")
function c(e, t, n) {
  var r = this._refs[n]
  if ("string" == typeof r) {
    if (!this._refs[r]) {
      return c.call(this, e, t, r)
    }
    r = this._refs[r]
  }
  if ((r = r || this._schemas[n]) instanceof a) {
    return p(r.schema, this._opts.inlineRefs) ? r.schema : r.validate || this._compile(r)
  }
  var /* [auto-meaningful-name] */l$schema
  var o
  var /* [auto-meaningful-name] */l$baseId
  var l = u.call(this, t, n)
  if (l) {
    l$schema = l.schema
    t = l.root
    l$baseId = l.baseId
  }
  if (l$schema instanceof a) {
    o = l$schema.validate || e.call(this, l$schema.schema, t, undefined, l$baseId)
  } else {
    if (undefined !== l$schema) {
      o = p(l$schema, this._opts.inlineRefs) ? l$schema : e.call(this, l$schema, t, undefined, l$baseId)
    }
  }
  return o
}
function u(e, t) {
  var n = r.parse(t)
  var i = A(n)
  var o = _(this._getId(e.schema))
  if (0 === Object.keys(e.schema).length || i !== o) {
    var s = v(i)
    var c = this._refs[s]
    if ("string" == typeof c) {
      return l.call(this, e, c, n)
    }
    if (c instanceof a) {
      if (!c.validate) {
        this._compile(c)
      }
      e = c
    } else {
      if (!((c = this._schemas[s]) instanceof a)) {
        return
      }
      if (!c.validate) {
        this._compile(c)
      }
      if (s == v(t)) {
        return {
          schema: c,
          root: e,
          baseId: o
        }
      }
      e = c
    }
    if (!e.schema) {
      return
    }
    o = _(this._getId(e.schema))
  }
  return d.call(this, n, o, e.schema, e)
}
function l(e, t, n) {
  var r = u.call(this, e, t)
  if (r) {
    var /* [auto-meaningful-name] */r$schema = r.schema
    var /* [auto-meaningful-name] */r$baseId = r.baseId
    e = r.root
    var a = this._getId(r$schema)
    if (a) {
      r$baseId = m(r$baseId, a)
    }
    return d.call(this, n, r$baseId, r$schema, e)
  }
}
module.exports = c
c.normalizeId = v
c.fullPath = _
c.url = m
c.ids = function (e) {
  var t = v(this._getId(e))
  var n = {
    "": t
  }
  var a = {
    "": _(t, false)
  }
  var c = {}
  var u = this
  s(e, {
    allKeys: true
  }, function (e, t, s, l, f, d, h) {
    if ("" !== t) {
      var p = u._getId(e)
      var _ = n[l]
      var A = a[l] + "/" + f
      if (undefined !== h) {
        A += "/" + ("number" == typeof h ? h : o.escapeFragment(h))
      }
      if ("string" == typeof p) {
        p = _ = v(_ ? r.resolve(_, p) : p)
        var g = u._refs[p]
        if ("string" == typeof g) {
          g = u._refs[g]
        }
        if (g && g.schema) {
          if (!i(e, g.schema)) {
            throw new Error("id \"" + p + "\" resolves to more than one schema")
          }
        } else if (p != v(A)) {
          if ("#" == p[0]) {
            if (c[p] && !i(e, c[p])) {
              throw new Error("id \"" + p + "\" resolves to more than one schema")
            }
            c[p] = e
          } else {
            u._refs[p] = A
          }
        }
      }
      n[t] = _
      a[t] = A
    }
  })
  return c
}
c.inlineRef = p
c.schema = u
var f = o.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"])
function d(e, t, n, r) {
  e.fragment = e.fragment || ""
  if ("/" == e.fragment.slice(0, 1)) {
    for (var i = e.fragment.split("/"), a = 1; a < i.length; a++) {
      var s = i[a]
      if (s) {
        if (undefined === (n = n[s = o.unescapeFragment(s)])) {
          break
        }
        var c
        if (!f[s] && ((c = this._getId(n)) && (t = m(t, c)), n.$ref)) {
          var l = m(t, n.$ref)
          var d = u.call(this, r, l)
          if (d) {
            n = d.schema
            r = d.root
            t = d.baseId
          }
        }
      }
    }
    return undefined !== n && n !== r.schema ? {
      schema: n,
      root: r,
      baseId: t
    } : undefined
  }
}
var h = o.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"])
function p(e, t) {
  return false !== t && (undefined === t || true === t ? function e(t) {
    var n
    if (Array.isArray(t)) {
      for (var r = 0; r < t.length; r++) {
        if ("object" == typeof (n = t[r]) && !e(n)) {
          return false
        }
      }
    } else {
      for (var i in t) {
        if ("$ref" == i) {
          return false
        }
        if ("object" == typeof (n = t[i]) && !e(n)) {
          return false
        }
      }
    }
    return true
  }(e) : t ? function e(t) {
    var n
    var r = 0
    if (Array.isArray(t)) {
      for (var i = 0; i < t.length; i++) {
        if ("object" == typeof (n = t[i])) {
          r += e(n)
        }
        if (r == 1 / 0) {
          return 1 / 0
        }
      }
    } else {
      for (var o in t) {
        if ("$ref" == o) {
          return 1 / 0
        }
        if (h[o]) {
          r++
        } else if ("object" == typeof (n = t[o]) && (r += e(n) + 1), r == 1 / 0) {
          return 1 / 0
        }
      }
    }
    return r
  }(e) <= t : undefined)
}
function _(e, t) {
  if (false !== t) {
    e = v(e)
  }
  return A(r.parse(e))
}
function A(e) {
  return r.serialize(e).split("#")[0] + "#"
}
var g = /#\/?$/
function v(e) {
  return e ? e.replace(g, "") : ""
}
function m(e, t) {
  t = v(t)
  return r.resolve(e, t)
}
