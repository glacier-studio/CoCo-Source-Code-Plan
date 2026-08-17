/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2256
 */

"use strict"

var r = require(/* 1136 */"../1136/index")
var i = require(/* 765 */"../765/index")
var o = require(/* 1138 */"../1138")
var a = require(/* 1366 */"../1366")
var s = require(/* 1367 */"./1367")
var /* [auto-meaningful-name] */i$ucs2length = i.ucs2length
var u = require(/* 1137 */"./1137")
var /* [auto-meaningful-name] */o$Validation = o.Validation
function f(e, t, n) {
  var r = h.call(this, e, t, n)
  return r >= 0 ? {
    index: r,
    compiling: true
  } : (r = this._compilations.length, this._compilations[r] = {
    schema: e,
    root: t,
    baseId: n
  }, {
    index: r,
    compiling: false
  })
}
function d(e, t, n) {
  var r = h.call(this, e, t, n)
  if (r >= 0) {
    this._compilations.splice(r, 1)
  }
}
function h(e, t, n) {
  for (var r = 0; r < this._compilations.length; r++) {
    var i = this._compilations[r]
    if (i.schema == e && i.root == t && i.baseId == n) {
      return r
    }
  }
  return -1
}
function p(e, t) {
  return "var pattern" + e + " = new RegExp(" + i.toQuotedString(t[e]) + ");"
}
function _(e) {
  return "var default" + e + " = defaults[" + e + "];"
}
function A(e, t) {
  return undefined === t[e] ? "" : "var refVal" + e + " = refVal[" + e + "];"
}
function g(e) {
  return "var customRule" + e + " = customRules[" + e + "];"
}
function v(e, t) {
  if (!e.length) {
    return ""
  }
  for (var n = "", r = 0; r < e.length; r++) {
    n += t(r, e)
  }
  return n
}
module.exports = function e(t, n, h, m) {
  var y = this
  var /* [auto-meaningful-name] */this$_opts = this._opts
  var w = [undefined]
  var E = {}
  var x = []
  var C = {}
  var O = []
  var k = {}
  var S = []
  n = n || {
    schema: t,
    refVal: w,
    refs: E
  }
  var T = f.call(this, t, n, m)
  var B = this._compilations[T.index]
  if (T.compiling) {
    return B.callValidate = function e() {
      var /* [auto-meaningful-name] */B$validate = B.validate
      var n = B$validate.apply(this, arguments)
      e.errors = B$validate.errors
      return n
    }
  }
  var /* [auto-meaningful-name] */this$_formats = this._formats
  var /* [auto-meaningful-name] */this$RULES = this.RULES
  try {
    var R = P(t, n, h, m)
    B.validate = R
    var /* [auto-meaningful-name] */B$callValidate = B.callValidate
    if (B$callValidate) {
      B$callValidate.schema = R.schema
      B$callValidate.errors = null
      B$callValidate.refs = R.refs
      B$callValidate.refVal = R.refVal
      B$callValidate.root = R.root
      B$callValidate.$async = R.$async
      if (this$_opts.sourceCode) {
        B$callValidate.source = R.source
      }
    }
    return R
  } finally {
    d.call(this, t, n, m)
  }
  function P(t, a, f, d) {
    var h = !a || a && a.schema == t
    if (a.schema != n.schema) {
      return e.call(y, t, a, f, d)
    }
    var m
    var C = true === t.$async
    var k = s({
      isTop: true,
      schema: t,
      isRoot: h,
      baseId: d,
      root: a,
      schemaPath: "",
      errSchemaPath: "#",
      errorPath: "\"\"",
      MissingRefError: o.MissingRef,
      RULES: this$RULES,
      validate: s,
      util: i,
      resolve: r,
      resolveRef: N,
      usePattern: j,
      useDefault: U,
      useCustomRule: H,
      opts: this$_opts,
      formats: this$_formats,
      logger: y.logger,
      self: y
    })
    k = v(w, A) + v(x, p) + v(O, _) + v(S, g) + k
    if (this$_opts.processCode) {
      k = this$_opts.processCode(k, t)
    }
    try {
      m = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", k)(y, this$RULES, this$_formats, n, w, O, S, u, i$ucs2length, o$Validation)
      w[0] = m
    } catch (T) {
      y.logger.error("Error compiling schema, function code:", k)
      throw T
    }
    m.schema = t
    m.errors = null
    m.refs = E
    m.refVal = w
    m.root = h ? m : a
    if (C) {
      m.$async = true
    }
    if (true === this$_opts.sourceCode) {
      m.source = {
        code: k,
        patterns: x,
        defaults: O
      }
    }
    return m
  }
  function N(t, i, o) {
    i = r.url(t, i)
    var a
    var s
    var c = E[i]
    if (undefined !== c) {
      return L(a = w[c], s = "refVal[" + c + "]")
    }
    if (!o && n.refs) {
      var u = n.refs[i]
      if (undefined !== u) {
        return L(a = n.refVal[u], s = M(i, a))
      }
    }
    s = M(i)
    var l = r.call(y, P, n, i)
    if (undefined === l) {
      var f = h && h[i]
      if (f) {
        l = r.inlineRef(f, this$_opts.inlineRefs) ? f : e.call(y, f, n, h, t)
      }
    }
    if (undefined !== l) {
      (function (e, t) {
        var n = E[e]
        w[n] = t
      })(i, l)
      return L(l, s)
    }
    !function (e) {
      delete E[e]
    }(i)
  }
  function M(e, t) {
    var /* [auto-meaningful-name] */w$length = w.length
    w[w$length] = t
    E[e] = w$length
    return "refVal" + w$length
  }
  function L(e, t) {
    return "object" == typeof e || "boolean" == typeof e ? {
      code: t,
      schema: e,
      inline: true
    } : {
      code: t,
      $async: e && !!e.$async
    }
  }
  function j(e) {
    var t = C[e]
    if (undefined === t) {
      t = C[e] = x.length
      x[t] = e
    }
    return "pattern" + t
  }
  function U(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
        return "" + e
      case "string":
        return i.toQuotedString(e)
      case "object":
        if (null === e) {
          return "null"
        }
        var t = a(e),
          n = k[t]
        if (undefined === n) {
          n = k[t] = O.length
          O[n] = e
        }
        return "default" + n
    }
  }
  function H(e, t, n, r) {
    if (false !== y._opts.validateSchema) {
      var /* [auto-meaningful-name] */e$definition$dependencies = e.definition.dependencies
      if (e$definition$dependencies && !e$definition$dependencies.every(function (e) {
        return Object.prototype.hasOwnProperty.call(n, e)
      })) {
        throw new Error("parent schema must have all required keywords: " + e$definition$dependencies.join(","))
      }
      var /* [auto-meaningful-name] */e$definition$validateSchema = e.definition.validateSchema
      if (e$definition$validateSchema) {
        if (!e$definition$validateSchema(t)) {
          var a = "keyword schema is invalid: " + y.errorsText(e$definition$validateSchema.errors)
          if ("log" != y._opts.validateSchema) {
            throw new Error(a)
          }
          y.logger.error(a)
        }
      }
    }
    var s
    var /* [auto-meaningful-name] */e$definition$compile = e.definition.compile
    var /* [auto-meaningful-name] */e$definition$inline = e.definition.inline
    var /* [auto-meaningful-name] */e$definition$macro = e.definition.macro
    if (e$definition$compile) {
      s = e$definition$compile.call(y, t, n, r)
    } else if (e$definition$macro) {
      s = e$definition$macro.call(y, t, n, r)
      if (false !== this$_opts.validateSchema) {
        y.validateSchema(s, true)
      }
    } else if (e$definition$inline) {
      s = e$definition$inline.call(y, r, e.keyword, t, n)
    } else if (!(s = e.definition.validate)) {
      return
    }
    if (undefined === s) {
      throw new Error("custom keyword \"" + e.keyword + "\"failed to compile")
    }
    var /* [auto-meaningful-name] */S$length = S.length
    S[S$length] = s
    return {
      code: "customRule" + S$length,
      validate: s
    }
  }
}
