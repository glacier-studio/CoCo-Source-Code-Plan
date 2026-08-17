/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2643__part-1
 */

"use strict"

import { c } from "./2643__part-0"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../../../106"
import * as /* [auto-meaningful-name] */Module_434 from /* 434 */"../../../434"
import * as /* [auto-meaningful-name] */Module_142 from /* 142 */"../../../142"
import * as /* [auto-meaningful-name] */Module_339 from /* 339 */"../../../339"
var /* [auto-meaningful-name] */$constructor = {}.constructor
function p(e) {
  if (null == e || "object" !== typeof e) {
    return e
  }
  if (Array.isArray(e)) {
    return e.map(p)
  }
  if (e.constructor !== $constructor) {
    return e
  }
  var t = {}
  for (var n in e) t[n] = p(e[n])
  return t
}
function _(e, t, n) {
  if (undefined === e) {
    e = "unnamed"
  }
  var /* [auto-meaningful-name] */n$jss = n.jss
  var i = p(t)
  var o = n$jss.plugins.onCreateRule(e, i, n)
  return o || (e[0], null)
}
var A = function (e, t) {
  for (var n = "", r = 0; r < e.length && "!important" !== e[r]; r++) {
    if (n) {
      n += t
    }
    n += e[r]
  }
  return n
}
var g = function (e, t) {
  if (undefined === t) {
    t = false
  }
  if (!Array.isArray(e)) {
    return e
  }
  var n = ""
  if (Array.isArray(e[0])) {
    for (var r = 0; r < e.length && "!important" !== e[r]; r++) {
      if (n) {
        n += ", "
      }
      n += A(e[r], " ")
    }
  } else {
    n = A(e, ", ")
  }
  if (!(t || "!important" !== e[e.length - 1])) {
    n += " !important"
  }
  return n
}
function v(e, t) {
  for (var n = "", r = 0; r < t; r++) {
    n += "  "
  }
  return n + e
}
function m(e, t, n) {
  if (undefined === n) {
    n = {}
  }
  var r = ""
  if (!t) {
    return r
  }
  var /* [auto-meaningful-name] */n$indent = n.indent
  var o = undefined === n$indent ? 0 : n$indent
  var /* [auto-meaningful-name] */t$fallbacks = t.fallbacks
  if (e) {
    o++
  }
  if (t$fallbacks) {
    if (Array.isArray(t$fallbacks)) {
      for (var s = 0; s < t$fallbacks.length; s++) {
        var c = t$fallbacks[s]
        for (var u in c) {
          var l = c[u]
          if (null != l) {
            if (r) {
              r += "\n"
            }
            r += v(u + ": " + g(l) + ";", o)
          }
        }
      }
    } else {
      for (var f in t$fallbacks) {
        var d = t$fallbacks[f]
        if (null != d) {
          if (r) {
            r += "\n"
          }
          r += v(f + ": " + g(d) + ";", o)
        }
      }
    }
  }
  for (var h in t) {
    var p = t[h]
    if (null != p && "fallbacks" !== h) {
      if (r) {
        r += "\n"
      }
      r += v(h + ": " + g(p) + ";", o)
    }
  }
  return (r || n.allowEmpty) && e ? (r && (r = "\n" + r + "\n"), v(e + " {" + r, --o) + v("}", o)) : r
}
var y = /([[\].#*$><+~=|^:(),"'`\s])/g
var b = "undefined" !== typeof CSS && CSS.escape
var w = function (e) {
  return b ? b(e) : e.replace(y, "\\$1")
}
var E = function () {
  function e(e, t, n) {
    this.type = "style"
    this.key = undefined
    this.isProcessed = false
    this.style = undefined
    this.renderer = undefined
    this.renderable = undefined
    this.options = undefined
    var /* [auto-meaningful-name] */n$sheet = n.sheet
    var /* [auto-meaningful-name] */n$Renderer = n.Renderer
    this.key = e
    this.options = n
    this.style = t
    if (n$sheet) {
      this.renderer = n$sheet.renderer
    } else {
      if (n$Renderer) {
        this.renderer = new n$Renderer()
      }
    }
  }
  e.prototype.prop = function (e, t, n) {
    if (undefined === t) {
      return this.style[e]
    }
    var r = !!n && n.force
    if (!r && this.style[e] === t) {
      return this
    }
    var i = t
    if (!(n && false === n.process)) {
      i = this.options.jss.plugins.onChangeValue(t, e, this)
    }
    var o = null == i || false === i
    var a = e in this.style
    if (o && !a && !r) {
      return this
    }
    var s = o && a
    if (s) {
      delete this.style[e]
    } else {
      this.style[e] = i
    }
    if (this.renderable && this.renderer) {
      if (s) {
        this.renderer.removeProperty(this.renderable, e)
      } else {
        this.renderer.setProperty(this.renderable, e, i)
      }
      return this
    }
    var /* [auto-meaningful-name] */this$options$sheet = this.options.sheet
    if (this$options$sheet) {
      this$options$sheet.attached
    }
    return this
  }
  return e
}()
var x = function (e) {
  function t(t, n, r) {
    var i;
    (i = e.call(this, t, n, r) || this).selectorText = undefined
    i.id = undefined
    i.renderable = undefined
    var /* [auto-meaningful-name] */r$selector = r.selector
    var /* [auto-meaningful-name] */r$scoped = r.scoped
    var /* [auto-meaningful-name] */r$sheet = r.sheet
    var /* [auto-meaningful-name] */r$generateId = r.generateId
    if (r$selector) {
      i.selectorText = r$selector
    } else {
      if (false !== r$scoped) {
        i.id = r$generateId(Module_142.a(Module_142.a(i)), r$sheet)
        i.selectorText = "." + w(i.id)
      }
    }
    return i
  }
  Module_434.a(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.applyTo = function (e) {
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    if (this$renderer) {
      var n = this.toJSON()
      for (var r in n) this$renderer.setProperty(e, r, n[r])
    }
    return this
  }
  t$prototype.toJSON = function () {
    var e = {}
    for (var t in this.style) {
      var n = this.style[t]
      if ("object" !== typeof n) {
        e[t] = n
      } else {
        if (Array.isArray(n)) {
          e[t] = g(n)
        }
      }
    }
    return e
  }
  t$prototype.toString = function (e) {
    var /* [auto-meaningful-name] */this$options$sheet = this.options.sheet
    var n = !!this$options$sheet && this$options$sheet.options.link ? Module_19.a({}, e, {
      allowEmpty: true
    }) : e
    return m(this.selectorText, this.style, n)
  }
  Module_106.a(t, [
    {
      key: "selector",
      set: function (e) {
        if (e !== this.selectorText) {
          this.selectorText = e
          var /* [auto-meaningful-name] */this$renderer = this.renderer
          var /* [auto-meaningful-name] */this$renderable = this.renderable
          if (this$renderable && this$renderer) {
            if (!this$renderer.setSelector(this$renderable, e)) {
              this$renderer.replaceRule(this$renderable, this)
            }
          }
        }
      },
      get: function () {
        return this.selectorText
      }
    }
  ])
  return t
}(E)
var C = {
  onCreateRule: function (e, t, n) {
    return "@" === e[0] || n.parent && "keyframes" === n.parent.type ? null : new x(e, t, n)
  }
}
var O = {
  indent: 1,
  children: true
}
var k = /@([\w-]+)/
var S = function () {
  function e(e, t, n) {
    this.type = "conditional"
    this.at = undefined
    this.key = undefined
    this.query = undefined
    this.rules = undefined
    this.options = undefined
    this.isProcessed = false
    this.renderable = undefined
    this.key = e
    var r = e.match(k)
    for (var o in this.at = r ? r[1] : "unknown", this.query = n.name || "@" + this.at, this.options = n, this.rules = new $(Module_19.a({}, n, {
      parent: this
    })), t) this.rules.add(o, t[o])
    this.rules.process()
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.getRule = function (e) {
    return this.rules.get(e)
  }
  e$prototype.indexOf = function (e) {
    return this.rules.indexOf(e)
  }
  e$prototype.addRule = function (e, t, n) {
    var r = this.rules.add(e, t, n)
    return r ? (this.options.jss.plugins.onProcessRule(r), r) : null
  }
  e$prototype.toString = function (e) {
    if (undefined === e) {
      e = O
    }
    if (null == e.indent) {
      e.indent = O.indent
    }
    if (null == e.children) {
      e.children = O.children
    }
    if (false === e.children) {
      return this.query + " {}"
    }
    var t = this.rules.toString(e)
    return t ? this.query + " {\n" + t + "\n}" : ""
  }
  return e
}()
var T = /@media|@supports\s+/
var B = {
  onCreateRule: function (e, t, n) {
    return T.test(e) ? new S(e, t, n) : null
  }
}
var D = {
  indent: 1,
  children: true
}
var I = /@keyframes\s+([\w-]+)/
var R = function () {
  function e(e, t, n) {
    this.type = "keyframes"
    this.at = "@keyframes"
    this.key = undefined
    this.name = undefined
    this.id = undefined
    this.rules = undefined
    this.options = undefined
    this.isProcessed = false
    this.renderable = undefined
    var r = e.match(I)
    if (r && r[1]) {
      this.name = r[1]
    } else {
      this.name = "noname"
    }
    this.key = this.type + "-" + this.name
    this.options = n
    var /* [auto-meaningful-name] */n$scoped = n.scoped
    var /* [auto-meaningful-name] */n$sheet = n.sheet
    var /* [auto-meaningful-name] */n$generateId = n.generateId
    for (var c in this.id = false === n$scoped ? this.name : w(n$generateId(this, n$sheet)), this.rules = new $(Module_19.a({}, n, {
      parent: this
    })), t) this.rules.add(c, t[c], Module_19.a({}, n, {
      parent: this
    }))
    this.rules.process()
  }
  e.prototype.toString = function (e) {
    if (undefined === e) {
      e = D
    }
    if (null == e.indent) {
      e.indent = D.indent
    }
    if (null == e.children) {
      e.children = D.children
    }
    if (false === e.children) {
      return this.at + " " + this.id + " {}"
    }
    var t = this.rules.toString(e)
    if (t) {
      t = "\n" + t + "\n"
    }
    return this.at + " " + this.id + " {" + t + "}"
  }
  return e
}()
var F = /@keyframes\s+/
var P = /\$([\w-]+)/g
var N = function (e, t) {
  return "string" === typeof e ? e.replace(P, function (e, n) {
    return n in t ? t[n] : e
  }) : e
}
var M = function (e, t, n) {
  var r = e[t]
  var i = N(r, n)
  if (i !== r) {
    e[t] = i
  }
}
var L = {
  onCreateRule: function (e, t, n) {
    return "string" === typeof e && F.test(e) ? new R(e, t, n) : null
  },
  onProcessStyle: function (e, t, n) {
    return "style" === t.type && n ? ("animation-name" in e && M(e, "animation-name", n.keyframes), "animation" in e && M(e, "animation", n.keyframes), e) : e
  },
  onChangeValue: function (e, t, n) {
    var /* [auto-meaningful-name] */n$options$sheet = n.options.sheet
    if (!n$options$sheet) {
      return e
    }
    switch (t) {
      case "animation":
      case "animation-name":
        return N(e, n$options$sheet.keyframes)
      default:
        return e
    }
  }
}
var j = function (e) {
  function t() {
    for (var t, /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), i = 0; i < arguments$length; i++) {
      r[i] = arguments[i]
    }
    (t = e.call.apply(e, [this].concat(r)) || this).renderable = undefined
    return t
  }
  Module_434.a(t, e)
  t.prototype.toString = function (e) {
    var /* [auto-meaningful-name] */this$options$sheet = this.options.sheet
    var n = !!this$options$sheet && this$options$sheet.options.link ? Module_19.a({}, e, {
      allowEmpty: true
    }) : e
    return m(this.key, this.style, n)
  }
  return t
}(E)
var U = {
  onCreateRule: function (e, t, n) {
    return n.parent && "keyframes" === n.parent.type ? new j(e, t, n) : null
  }
}
var H = function () {
  function e(e, t, n) {
    this.type = "font-face"
    this.at = "@font-face"
    this.key = undefined
    this.style = undefined
    this.options = undefined
    this.isProcessed = false
    this.renderable = undefined
    this.key = e
    this.style = t
    this.options = n
  }
  e.prototype.toString = function (e) {
    if (Array.isArray(this.style)) {
      for (var t = "", n = 0; n < this.style.length; n++) {
        t += m(this.at, this.style[n])
        if (this.style[n + 1]) {
          t += "\n"
        }
      }
      return t
    }
    return m(this.at, this.style, e)
  }
  return e
}()
var V = /@font-face/
var G = {
  onCreateRule: function (e, t, n) {
    return V.test(e) ? new H(e, t, n) : null
  }
}
var z = function () {
  function e(e, t, n) {
    this.type = "viewport"
    this.at = "@viewport"
    this.key = undefined
    this.style = undefined
    this.options = undefined
    this.isProcessed = false
    this.renderable = undefined
    this.key = e
    this.style = t
    this.options = n
  }
  e.prototype.toString = function (e) {
    return m(this.key, this.style, e)
  }
  return e
}()
var Q = {
  onCreateRule: function (e, t, n) {
    return "@viewport" === e || "@-ms-viewport" === e ? new z(e, t, n) : null
  }
}
var W = function () {
  function e(e, t, n) {
    this.type = "simple"
    this.key = undefined
    this.value = undefined
    this.options = undefined
    this.isProcessed = false
    this.renderable = undefined
    this.key = e
    this.value = t
    this.options = n
  }
  e.prototype.toString = function (e) {
    if (Array.isArray(this.value)) {
      for (var t = "", n = 0; n < this.value.length; n++) {
        t += this.key + " " + this.value[n] + ";"
        if (this.value[n + 1]) {
          t += "\n"
        }
      }
      return t
    }
    return this.key + " " + this.value + ";"
  }
  return e
}()
var K = {
  "@charset": true,
  "@import": true,
  "@namespace": true
}
var X = [
  C, B, L, U, G, Q, {
    onCreateRule: function (e, t, n) {
      return e in K ? new W(e, t, n) : null
    }
  }
]
var Y = {
  process: true
}
var q = {
  force: true,
  process: true
}
var $ = function () {
  function e(e) {
    this.map = {}
    this.raw = {}
    this.index = []
    this.counter = 0
    this.options = undefined
    this.classes = undefined
    this.keyframes = undefined
    this.options = e
    this.classes = e.classes
    this.keyframes = e.keyframes
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.add = function (e, t, n) {
    var /* [auto-meaningful-name] */this$options = this.options
    var /* [auto-meaningful-name] */this$options$parent = this$options.parent
    var /* [auto-meaningful-name] */this$options$sheet = this$options.sheet
    var /* [auto-meaningful-name] */this$options$jss = this$options.jss
    var /* [auto-meaningful-name] */this$options$Renderer = this$options.Renderer
    var /* [auto-meaningful-name] */this$options$generateId = this$options.generateId
    var /* [auto-meaningful-name] */this$options$scoped = this$options.scoped
    var f = Module_19.a({
      classes: this.classes,
      parent: this$options$parent,
      sheet: this$options$sheet,
      jss: this$options$jss,
      Renderer: this$options$Renderer,
      generateId: this$options$generateId,
      scoped: this$options$scoped,
      name: e,
      keyframes: this.keyframes,
      selector: undefined
    }, n)
    var d = e
    if (e in this.raw) {
      d = e + "-d" + this.counter++
    }
    this.raw[d] = t
    if (d in this.classes) {
      f.selector = "." + w(this.classes[d])
    }
    var h = _(d, t, f)
    if (!h) {
      return null
    }
    this.register(h)
    var p = undefined === f.index ? this.index.length : f.index
    this.index.splice(p, 0, h)
    return h
  }
  e$prototype.get = function (e) {
    return this.map[e]
  }
  e$prototype.remove = function (e) {
    this.unregister(e)
    delete this.raw[e.key]
    this.index.splice(this.index.indexOf(e), 1)
  }
  e$prototype.indexOf = function (e) {
    return this.index.indexOf(e)
  }
  e$prototype.process = function () {
    var /* [auto-meaningful-name] */this$options$jss$plugins = this.options.jss.plugins
    this.index.slice(0).forEach(this$options$jss$plugins.onProcessRule, this$options$jss$plugins)
  }
  e$prototype.register = function (e) {
    this.map[e.key] = e
    if (e instanceof x) {
      this.map[e.selector] = e
      if (e.id) {
        this.classes[e.key] = e.id
      }
    } else {
      if (e instanceof R && this.keyframes) {
        this.keyframes[e.name] = e.id
      }
    }
  }
  e$prototype.unregister = function (e) {
    delete this.map[e.key]
    if (e instanceof x) {
      delete this.map[e.selector]
      delete this.classes[e.key]
    } else {
      if (e instanceof R) {
        delete this.keyframes[e.name]
      }
    }
  }
  e$prototype.update = function () {
    var e
    var t
    var n
    if ("string" === typeof (arguments.length <= 0 ? undefined : arguments[0])) {
      e = arguments.length <= 0 ? undefined : arguments[0]
      t = arguments.length <= 1 ? undefined : arguments[1]
      n = arguments.length <= 2 ? undefined : arguments[2]
    } else {
      t = arguments.length <= 0 ? undefined : arguments[0]
      n = arguments.length <= 1 ? undefined : arguments[1]
      e = null
    }
    if (e) {
      this.updateOne(this.map[e], t, n)
    } else {
      for (var r = 0; r < this.index.length; r++) {
        this.updateOne(this.index[r], t, n)
      }
    }
  }
  e$prototype.updateOne = function (t, n, r) {
    if (undefined === r) {
      r = Y
    }
    var /* [auto-meaningful-name] */this$options = this.options
    var /* [auto-meaningful-name] */this$options$jss$plugins = this$options.jss.plugins
    var /* [auto-meaningful-name] */this$options$sheet = this$options.sheet
    if (t.rules instanceof e) {
      t.rules.update(n, r)
    } else {
      var s = t
      var /* [auto-meaningful-name] */s$style = s.style
      this$options$jss$plugins.onUpdate(n, t, this$options$sheet, r)
      if (r.process && s$style && s$style !== s.style) {
        for (var u in this$options$jss$plugins.onProcessStyle(s.style, s, this$options$sheet), s.style) {
          var l = s.style[u]
          if (l !== s$style[u]) {
            s.prop(u, l, q)
          }
        }
        for (var f in s$style) {
          var d = s.style[f]
          var h = s$style[f]
          if (null == d && d !== h) {
            s.prop(f, null, q)
          }
        }
      }
    }
  }
  e$prototype.toString = function (e) {
    for (var t = "", /* [auto-meaningful-name] */this$options$sheet = this.options.sheet, r = !!this$options$sheet && this$options$sheet.options.link, i = 0; i < this.index.length; i++) {
      var o = this.index[i].toString(e)
      if (o || r) {
        if (t) {
          t += "\n"
        }
        t += o
      }
    }
    return t
  }
  return e
}()
var J = function () {
  function e(e, t) {
    for (var n in this.options = undefined, this.deployed = undefined, this.attached = undefined, this.rules = undefined, this.renderer = undefined, this.classes = undefined, this.keyframes = undefined, this.queue = undefined, this.attached = false, this.deployed = false, this.classes = {}, this.keyframes = {}, this.options = Module_19.a({}, t, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    }), t.Renderer && (this.renderer = new t.Renderer(this)), this.rules = new $(this.options), e) this.rules.add(n, e[n])
    this.rules.process()
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.attach = function () {
    if (!this.attached) {
      if (this.renderer) {
        this.renderer.attach()
      }
      this.attached = true
      if (!this.deployed) {
        this.deploy()
      }
    }
    return this
  }
  e$prototype.detach = function () {
    return this.attached ? (this.renderer && this.renderer.detach(), this.attached = false, this) : this
  }
  e$prototype.addRule = function (e, t, n) {
    var /* [auto-meaningful-name] */this$queue = this.queue
    if (this.attached && !this$queue) {
      this.queue = []
    }
    var i = this.rules.add(e, t, n)
    return i ? (this.options.jss.plugins.onProcessRule(i), this.attached ? this.deployed ? (this$queue ? this$queue.push(i) : (this.insertRule(i), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = undefined)), i) : i : (this.deployed = false, i)) : null
  }
  e$prototype.insertRule = function (e) {
    if (this.renderer) {
      this.renderer.insertRule(e)
    }
  }
  e$prototype.addRules = function (e, t) {
    var n = []
    for (var r in e) {
      var i = this.addRule(r, e[r], t)
      if (i) {
        n.push(i)
      }
    }
    return n
  }
  e$prototype.getRule = function (e) {
    return this.rules.get(e)
  }
  e$prototype.deleteRule = function (e) {
    var t = "object" === typeof e ? e : this.rules.get(e)
    return !(!t || this.attached && !t.renderable) && (this.rules.remove(t), !(this.attached && t.renderable && this.renderer) || this.renderer.deleteRule(t.renderable))
  }
  e$prototype.indexOf = function (e) {
    return this.rules.indexOf(e)
  }
  e$prototype.deploy = function () {
    if (this.renderer) {
      this.renderer.deploy()
    }
    this.deployed = true
    return this
  }
  e$prototype.update = function () {
    var /* [auto-meaningful-name] */this$rules;
    (this$rules = this.rules).update.apply(this$rules, arguments)
    return this
  }
  e$prototype.updateOne = function (e, t, n) {
    this.rules.updateOne(e, t, n)
    return this
  }
  e$prototype.toString = function (e) {
    return this.rules.toString(e)
  }
  return e
}()
var Z = function () {
  function e() {
    this.plugins = {
      internal: [],
      external: []
    }
    this.registry = undefined
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.onCreateRule = function (e, t, n) {
    for (var r = 0; r < this.registry.onCreateRule.length; r++) {
      var i = this.registry.onCreateRule[r](e, t, n)
      if (i) {
        return i
      }
    }
    return null
  }
  e$prototype.onProcessRule = function (e) {
    if (!e.isProcessed) {
      for (var /* [auto-meaningful-name] */e$options$sheet = e.options.sheet, n = 0; n < this.registry.onProcessRule.length; n++) {
        this.registry.onProcessRule[n](e, e$options$sheet)
      }
      if (e.style) {
        this.onProcessStyle(e.style, e, e$options$sheet)
      }
      e.isProcessed = true
    }
  }
  e$prototype.onProcessStyle = function (e, t, n) {
    for (var r = 0; r < this.registry.onProcessStyle.length; r++) {
      t.style = this.registry.onProcessStyle[r](t.style, t, n)
    }
  }
  e$prototype.onProcessSheet = function (e) {
    for (var t = 0; t < this.registry.onProcessSheet.length; t++) {
      this.registry.onProcessSheet[t](e)
    }
  }
  e$prototype.onUpdate = function (e, t, n, r) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](e, t, n, r)
    }
  }
  e$prototype.onChangeValue = function (e, t, n) {
    for (var r = e, i = 0; i < this.registry.onChangeValue.length; i++) {
      r = this.registry.onChangeValue[i](r, t, n)
    }
    return r
  }
  e$prototype.use = function (e, t) {
    if (undefined === t) {
      t = {
        queue: "external"
      }
    }
    var n = this.plugins[t.queue]
    if (-1 === n.indexOf(e)) {
      n.push(e)
      this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (e, t) {
        for (var n in t) if (n in e) {
          e[n].push(t[n])
        }
        return e
      }, {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []
      })
    }
  }
  return e
}()
var ee = new (function () {
  function e() {
    this.registry = []
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.add = function (e) {
    var /* [auto-meaningful-name] */this$registry = this.registry
    var /* [auto-meaningful-name] */e$options$index = e.options.index
    if (-1 === this$registry.indexOf(e)) {
      if (0 === this$registry.length || e$options$index >= this.index) {
        this$registry.push(e)
      } else {
        for (var r = 0; r < this$registry.length; r++) {
          if (this$registry[r].options.index > e$options$index) {
            return void this$registry.splice(r, 0, e)
          }
        }
      }
    }
  }
  e$prototype.reset = function () {
    this.registry = []
  }
  e$prototype.remove = function (e) {
    var t = this.registry.indexOf(e)
    this.registry.splice(t, 1)
  }
  e$prototype.toString = function (e) {
    for (var t = undefined === e ? {} : e, /* [auto-meaningful-name] */t$attached = t.attached, r = Module_339.a(t, ["attached"]), i = "", o = 0; o < this.registry.length; o++) {
      var a = this.registry[o]
      if (!(null != t$attached && a.attached !== t$attached)) {
        if (i) {
          i += "\n"
        }
        i += a.toString(r)
      }
    }
    return i
  }
  Module_106.a(e, [
    {
      key: "index",
      get: function () {
        return 0 === this.registry.length ? 0 : this.registry[this.registry.length - 1].options.index
      }
    }
  ])
  return e
}())()
var te = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window && window.Math === Math ? window : "undefined" !== typeof self && self.Math === Math ? self : Function("return this")()
var /* [auto-meaningful-name] */_2f1acc6c3a606b082e5eef5e54414ffb = "2f1acc6c3a606b082e5eef5e54414ffb"
if (null == te[_2f1acc6c3a606b082e5eef5e54414ffb]) {
  te[_2f1acc6c3a606b082e5eef5e54414ffb] = 0
}
var re = te[_2f1acc6c3a606b082e5eef5e54414ffb]++
var ie = function (e) {
  if (undefined === e) {
    e = {}
  }
  var t = 0
  return function (n, r) {
    t += 1
    var i = ""
    var o = ""
    if (r) {
      if (r.options.classNamePrefix) {
        o = r.options.classNamePrefix
      }
      if (null != r.options.jss.id) {
        i = String(r.options.jss.id)
      }
    }
    return e.minify ? "" + (o || "c") + re + i + t : o + n.key + "-" + re + (i ? "-" + i : "") + "-" + t
  }
}
var oe = function (e) {
  var t
  return function () {
    if (!t) {
      t = e()
    }
    return t
  }
}
var ae = function (e, t) {
  try {
    return e.attributeStyleMap ? e.attributeStyleMap.get(t) : e.style.getPropertyValue(t)
  } catch (n) {
    return ""
  }
}
var se = function (e, t, n) {
  try {
    var r = n
    if (Array.isArray(n) && (r = g(n, true), "!important" === n[n.length - 1])) {
      e.style.setProperty(t, r, "important")
      return true
    }
    if (e.attributeStyleMap) {
      e.attributeStyleMap.set(t, r)
    } else {
      e.style.setProperty(t, r)
    }
  } catch (i) {
    return false
  }
  return true
}
var ce = function (e, t) {
  try {
    if (e.attributeStyleMap) {
      e.attributeStyleMap.delete(t)
    } else {
      e.style.removeProperty(t)
    }
  } catch (n) {}
}
var ue = function (e, t) {
  e.selectorText = t
  return e.selectorText === t
}
var le = oe(function () {
  return document.querySelector("head")
})
function fe(e) {
  var /* [auto-meaningful-name] */ee$registry = ee.registry
  if (ee$registry.length > 0) {
    var n = function (e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n]
        if (r.attached && r.options.index > t.index && r.options.insertionPoint === t.insertionPoint) {
          return r
        }
      }
      return null
    }(ee$registry, e)
    if (n && n.renderer) {
      return {
        parent: n.renderer.element.parentNode,
        node: n.renderer.element
      }
    }
    if ((n = function (e, t) {
      for (var n = e.length - 1; n >= 0; n--) {
        var r = e[n]
        if (r.attached && r.options.insertionPoint === t.insertionPoint) {
          return r
        }
      }
      return null
    }(ee$registry, e)) && n.renderer) {
      return {
        parent: n.renderer.element.parentNode,
        node: n.renderer.element.nextSibling
      }
    }
  }
  var /* [auto-meaningful-name] */e$insertionPoint = e.insertionPoint
  if (e$insertionPoint && "string" === typeof e$insertionPoint) {
    var i = function (e) {
      for (var t = le(), n = 0; n < t.childNodes.length; n++) {
        var r = t.childNodes[n]
        if (8 === r.nodeType && r.nodeValue.trim() === e) {
          return r
        }
      }
      return null
    }(e$insertionPoint)
    if (i) {
      return {
        parent: i.parentNode,
        node: i.nextSibling
      }
    }
  }
  return false
}
var de = oe(function () {
  var e = document.querySelector("meta[property=\"csp-nonce\"]")
  return e ? e.getAttribute("content") : null
})
var he = function (e, t, n) {
  try {
    if ("insertRule" in e) {
      e.insertRule(t, n)
    } else if ("appendRule" in e) {
      e.appendRule(t)
    }
  } catch (r) {
    return false
  }
  return e.cssRules[n]
}
var pe = function (e, t) {
  var /* [auto-meaningful-name] */e$cssRules$length = e.cssRules.length
  return undefined === t || t > e$cssRules$length ? e$cssRules$length : t
}
var _e = function () {
  function e(e) {
    this.getPropertyValue = ae
    this.setProperty = se
    this.removeProperty = ce
    this.setSelector = ue
    this.element = undefined
    this.sheet = undefined
    this.hasInsertedRules = false
    this.cssRules = []
    if (e) {
      ee.add(e)
    }
    this.sheet = e
    var t = this.sheet ? this.sheet.options : {}
    var /* [auto-meaningful-name] */t$media = t.media
    var /* [auto-meaningful-name] */t$meta = t.meta
    var /* [auto-meaningful-name] */t$element = t.element
    this.element = t$element || function () {
      var e = document.createElement("style")
      e.textContent = "\n"
      return e
    }()
    this.element.setAttribute("data-jss", "")
    if (t$media) {
      this.element.setAttribute("media", t$media)
    }
    if (t$meta) {
      this.element.setAttribute("data-meta", t$meta)
    }
    var o = de()
    if (o) {
      this.element.setAttribute("nonce", o)
    }
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.attach = function () {
    if (!this.element.parentNode && this.sheet) {
      !function (e, t) {
        var /* [auto-meaningful-name] */t$insertionPoint = t.insertionPoint
        var r = fe(t)
        if (false !== r && r.parent) {
          r.parent.insertBefore(e, r.node)
        } else if (t$insertionPoint && "number" === typeof t$insertionPoint.nodeType) {
          var i = t$insertionPoint
          var /* [auto-meaningful-name] */i$parentNode = i.parentNode
          if (i$parentNode) {
            i$parentNode.insertBefore(e, i.nextSibling)
          }
        } else {
          le().appendChild(e)
        }
      }(this.element, this.sheet.options)
      var e = Boolean(this.sheet && this.sheet.deployed)
      if (this.hasInsertedRules && e) {
        this.hasInsertedRules = false
        this.deploy()
      }
    }
  }
  e$prototype.detach = function () {
    if (this.sheet) {
      var /* [auto-meaningful-name] */this$element$parentNode = this.element.parentNode
      if (this$element$parentNode) {
        this$element$parentNode.removeChild(this.element)
      }
      if (this.sheet.options.link) {
        this.cssRules = []
        this.element.textContent = "\n"
      }
    }
  }
  e$prototype.deploy = function () {
    var /* [auto-meaningful-name] */this$sheet = this.sheet
    if (this$sheet) {
      if (this$sheet.options.link) {
        this.insertRules(this$sheet.rules)
      } else {
        this.element.textContent = "\n" + this$sheet.toString() + "\n"
      }
    }
  }
  e$prototype.insertRules = function (e, t) {
    for (var n = 0; n < e.index.length; n++) {
      this.insertRule(e.index[n], n, t)
    }
  }
  e$prototype.insertRule = function (e, t, n) {
    if (undefined === n) {
      n = this.element.sheet
    }
    if (e.rules) {
      var r = e
      var i = n
      if ("conditional" === e.type || "keyframes" === e.type) {
        var o = pe(n, t)
        if (false === (i = he(n, r.toString({
          children: false
        }), o))) {
          return false
        }
        this.refCssRule(e, o, i)
      }
      this.insertRules(r.rules, i)
      return i
    }
    var a = e.toString()
    if (!a) {
      return false
    }
    var s = pe(n, t)
    var c = he(n, a, s)
    return false !== c && (this.hasInsertedRules = true, this.refCssRule(e, s, c), c)
  }
  e$prototype.refCssRule = function (e, t, n) {
    e.renderable = n
    if (e.options.parent instanceof J) {
      this.cssRules[t] = n
    }
  }
  e$prototype.deleteRule = function (e) {
    var /* [auto-meaningful-name] */this$element$sheet = this.element.sheet
    var n = this.indexOf(e)
    return -1 !== n && (this$element$sheet.deleteRule(n), this.cssRules.splice(n, 1), true)
  }
  e$prototype.indexOf = function (e) {
    return this.cssRules.indexOf(e)
  }
  e$prototype.replaceRule = function (e, t) {
    var n = this.indexOf(e)
    return -1 !== n && (this.element.sheet.deleteRule(n), this.cssRules.splice(n, 1), this.insertRule(t, n))
  }
  e$prototype.getRules = function () {
    return this.element.sheet.cssRules
  }
  return e
}()
var Ae = 0
var ge = function () {
  function e(e) {
    this.id = Ae++
    this.version = "10.7.1"
    this.plugins = new Z()
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: ie,
      Renderer: c ? _e : null,
      plugins: []
    }
    this.generateId = ie({
      minify: false
    })
    for (var t = 0; t < X.length; t++) {
      this.plugins.use(X[t], {
        queue: "internal"
      })
    }
    this.setup(e)
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.setup = function (e) {
    if (undefined === e) {
      e = {}
    }
    if (e.createGenerateId) {
      this.options.createGenerateId = e.createGenerateId
    }
    if (e.id) {
      this.options.id = Module_19.a({}, this.options.id, e.id)
    }
    if (e.createGenerateId || e.id) {
      this.generateId = this.options.createGenerateId(this.options.id)
    }
    if (null != e.insertionPoint) {
      this.options.insertionPoint = e.insertionPoint
    }
    if ("Renderer" in e) {
      this.options.Renderer = e.Renderer
    }
    if (e.plugins) {
      this.use.apply(this, e.plugins)
    }
    return this
  }
  e$prototype.createStyleSheet = function (e, t) {
    if (undefined === t) {
      t = {}
    }
    var /* [auto-meaningful-name] */t$index = t.index
    if ("number" !== typeof t$index) {
      t$index = 0 === ee.index ? 0 : ee.index + 1
    }
    var r = new J(e, Module_19.a({}, t, {
      jss: this,
      generateId: t.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: t$index
    }))
    this.plugins.onProcessSheet(r)
    return r
  }
  e$prototype.removeStyleSheet = function (e) {
    e.detach()
    ee.remove(e)
    return this
  }
  e$prototype.createRule = function (e, t, n) {
    if (undefined === t) {
      t = {}
    }
    if (undefined === n) {
      n = {}
    }
    if ("object" === typeof e) {
      return this.createRule(undefined, e, t)
    }
    var r = Module_19.a({}, n, {
      name: e,
      jss: this,
      Renderer: this.options.Renderer
    })
    if (!r.generateId) {
      r.generateId = this.generateId
    }
    if (!r.classes) {
      r.classes = {}
    }
    if (!r.keyframes) {
      r.keyframes = {}
    }
    var o = _(e, t, r)
    if (o) {
      this.plugins.onProcessRule(o)
    }
    return o
  }
  e$prototype.use = function () {
    for (var e = this, /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), r = 0; r < arguments$length; r++) {
      n[r] = arguments[r]
    }
    n.forEach(function (t) {
      e.plugins.use(t)
    })
    return this
  }
  return e
}()
var ve = "object" === typeof CSS && null != CSS && "number" in CSS
var me = function (e) {
  return new ge(e)
}
me()
export { _ }
export { g }
export { $ }
export { ve }
export { me }
