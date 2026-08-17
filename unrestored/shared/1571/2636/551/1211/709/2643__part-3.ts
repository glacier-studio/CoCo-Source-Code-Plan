/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2643__part-3
 */

"use strict"

import { _, $, ve } from "./2643__part-1"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_2645 from /* 2645 */"../../../552/1214/690/2645"
import /* 50 */"../../../50/index"
var Ee = "function" === typeof Symbol && Symbol.for ? Symbol.for("mui.nested") : "__THEME_NESTED__"
var xe = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"]
var Ce = Date.now()
var Oe = "fnValues" + Ce
var ke = "fnStyle" + ++Ce
var Se = function () {
  return {
    onCreateRule: function (e, t, n) {
      if ("function" !== typeof t) {
        return null
      }
      var r = _(e, {}, n)
      r[ke] = t
      return r
    },
    onProcessStyle: function (e, t) {
      if (Oe in t || ke in t) {
        return e
      }
      var n = {}
      for (var r in e) {
        var i = e[r]
        if ("function" === typeof i) {
          delete e[r]
          n[r] = i
        }
      }
      t[Oe] = n
      return e
    },
    onUpdate: function (e, t, n, r) {
      var i = t
      var o = i[ke]
      if (o) {
        i.style = o(e) || {}
      }
      var a = i[Oe]
      if (a) {
        for (var s in a) i.prop(s, a[s](e), r)
      }
    }
  }
}
var /* [auto-meaningful-name] */Global = "@global"
var Be = function () {
  function e(e, t, n) {
    for (var r in this.type = "global", this.at = Global, this.rules = undefined, this.options = undefined, this.key = undefined, this.isProcessed = false, this.key = e, this.options = n, this.rules = new $(Module_19.a({}, n, {
      parent: this
    })), t) this.rules.add(r, t[r])
    this.rules.process()
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.getRule = function (e) {
    return this.rules.get(e)
  }
  e$prototype.addRule = function (e, t, n) {
    var r = this.rules.add(e, t, n)
    if (r) {
      this.options.jss.plugins.onProcessRule(r)
    }
    return r
  }
  e$prototype.indexOf = function (e) {
    return this.rules.indexOf(e)
  }
  e$prototype.toString = function () {
    return this.rules.toString()
  }
  return e
}()
var De = function () {
  function e(e, t, n) {
    this.type = "global"
    this.at = Global
    this.options = undefined
    this.rule = undefined
    this.isProcessed = false
    this.key = undefined
    this.key = e
    this.options = n
    var r = e.substr("@global ".length)
    this.rule = n.jss.createRule(r, t, Module_19.a({}, n, {
      parent: this
    }))
  }
  e.prototype.toString = function (e) {
    return this.rule ? this.rule.toString(e) : ""
  }
  return e
}()
var Ie = /\s*,\s*/g
function Re(e, t) {
  for (var n = e.split(Ie), r = "", i = 0; i < n.length; i++) {
    r += t + " " + n[i].trim()
    if (n[i + 1]) {
      r += ", "
    }
  }
  return r
}
var Fe = function () {
  return {
    onCreateRule: function (e, t, n) {
      if (!e) {
        return null
      }
      if (e === Global) {
        return new Be(e, t, n)
      }
      if ("@" === e[0] && "@global " === e.substr(0, "@global ".length)) {
        return new De(e, t, n)
      }
      var /* [auto-meaningful-name] */n$parent = n.parent
      if (n$parent && ("global" === n$parent.type || n$parent.options.parent && "global" === n$parent.options.parent.type)) {
        n.scoped = false
      }
      if (false === n.scoped) {
        n.selector = e
      }
      return null
    },
    onProcessRule: function (e, t) {
      if ("style" === e.type && t) {
        (function (e, t) {
          var /* [auto-meaningful-name] */e$options = e.options
          var /* [auto-meaningful-name] */e$style = e.style
          var o = e$style ? e$style[Global] : null
          if (o) {
            for (var a in o) t.addRule(a, o[a], Module_19.a({}, e$options, {
              selector: Re(a, e.selector)
            }))
            delete e$style[Global]
          }
        })(e, t);
        (function (e, t) {
          var /* [auto-meaningful-name] */e$options = e.options
          var /* [auto-meaningful-name] */e$style = e.style
          for (var o in e$style) if ("@" === o[0] && o.substr(0, Global.length) === Global) {
            var a = Re(o.substr(Global.length), e.selector)
            t.addRule(a, e$style[o], Module_19.a({}, e$options, {
              selector: a
            }))
            delete e$style[o]
          }
        })(e, t)
      }
    }
  }
}
var Pe = /\s*,\s*/g
var Ne = /&/g
var Me = /\$([\w-]+)/g
var Le = function () {
  function e(e, t) {
    return function (n, r) {
      var i = e.getRule(r) || t && t.getRule(r)
      return i ? (i = i).selector : r
    }
  }
  function t(e, t) {
    for (var n = t.split(Pe), r = e.split(Pe), i = "", o = 0; o < n.length; o++) {
      for (var a = n[o], s = 0; s < r.length; s++) {
        var c = r[s]
        if (i) {
          i += ", "
        }
        i += -1 !== c.indexOf("&") ? c.replace(Ne, a) : a + " " + c
      }
    }
    return i
  }
  function n(e, t, n) {
    if (n) {
      return Module_19.a({}, n, {
        index: n.index + 1
      })
    }
    var /* [auto-meaningful-name] */e$options$nestingLevel = e.options.nestingLevel
    e$options$nestingLevel = undefined === e$options$nestingLevel ? 1 : e$options$nestingLevel + 1
    var o = Module_19.a({}, e.options, {
      nestingLevel: e$options$nestingLevel,
      index: t.indexOf(e) + 1
    })
    delete o.name
    return o
  }
  return {
    onProcessStyle: function (r, o, a) {
      if ("style" !== o.type) {
        return r
      }
      var s
      var c
      var u = o
      var /* [auto-meaningful-name] */u$options$parent = u.options.parent
      for (var f in r) {
        var d = -1 !== f.indexOf("&")
        var h = "@" === f[0]
        if (d || h) {
          s = n(u, u$options$parent, s)
          if (d) {
            var p = t(f, u.selector)
            if (!c) {
              c = e(u$options$parent, a)
            }
            p = p.replace(Me, c)
            u$options$parent.addRule(p, r[f], Module_19.a({}, s, {
              selector: p
            }))
          } else if (h) {
            u$options$parent.addRule(f, {}, s).addRule(u.key, r[f], {
              selector: u.selector
            })
          }
          delete r[f]
        }
      }
      return r
    }
  }
}
var je = /[A-Z]/g
var Ue = /^ms-/
var He = {}
function Ve(e) {
  return "-" + e.toLowerCase()
}
var Ge = function (e) {
  if (He.hasOwnProperty(e)) {
    return He[e]
  }
  var t = e.replace(je, Ve)
  return He[e] = Ue.test(t) ? "-" + t : t
}
function ze(e) {
  var t = {}
  for (var n in e) {
    t[0 === n.indexOf("--") ? n : Ge(n)] = e[n]
  }
  if (e.fallbacks) {
    if (Array.isArray(e.fallbacks)) {
      t.fallbacks = e.fallbacks.map(ze)
    } else {
      t.fallbacks = ze(e.fallbacks)
    }
  }
  return t
}
var Qe = function () {
  return {
    onProcessStyle: function (e) {
      if (Array.isArray(e)) {
        for (var t = 0; t < e.length; t++) {
          e[t] = ze(e[t])
        }
        return e
      }
      return ze(e)
    },
    onChangeValue: function (e, t, n) {
      if (0 === t.indexOf("--")) {
        return e
      }
      var r = Ge(t)
      return t === r ? e : (n.prop(r, e), null)
    }
  }
}
var We = ve && CSS ? CSS.px : "px"
var Ke = ve && CSS ? CSS.ms : "ms"
var Xe = ve && CSS ? CSS.percent : "%"
function Ye(e) {
  var t = /(-[a-z])/g
  var n = function (e) {
    return e[1].toUpperCase()
  }
  var r = {}
  for (var i in e) {
    r[i] = e[i]
    r[i.replace(t, n)] = e[i]
  }
  return r
}
var qe = Ye({
  "animation-delay": Ke,
  "animation-duration": Ke,
  "background-position": We,
  "background-position-x": We,
  "background-position-y": We,
  "background-size": We,
  border: We,
  "border-bottom": We,
  "border-bottom-left-radius": We,
  "border-bottom-right-radius": We,
  "border-bottom-width": We,
  "border-left": We,
  "border-left-width": We,
  "border-radius": We,
  "border-right": We,
  "border-right-width": We,
  "border-top": We,
  "border-top-left-radius": We,
  "border-top-right-radius": We,
  "border-top-width": We,
  "border-width": We,
  "border-block": We,
  "border-block-end": We,
  "border-block-end-width": We,
  "border-block-start": We,
  "border-block-start-width": We,
  "border-block-width": We,
  "border-inline": We,
  "border-inline-end": We,
  "border-inline-end-width": We,
  "border-inline-start": We,
  "border-inline-start-width": We,
  "border-inline-width": We,
  "border-start-start-radius": We,
  "border-start-end-radius": We,
  "border-end-start-radius": We,
  "border-end-end-radius": We,
  margin: We,
  "margin-bottom": We,
  "margin-left": We,
  "margin-right": We,
  "margin-top": We,
  "margin-block": We,
  "margin-block-end": We,
  "margin-block-start": We,
  "margin-inline": We,
  "margin-inline-end": We,
  "margin-inline-start": We,
  padding: We,
  "padding-bottom": We,
  "padding-left": We,
  "padding-right": We,
  "padding-top": We,
  "padding-block": We,
  "padding-block-end": We,
  "padding-block-start": We,
  "padding-inline": We,
  "padding-inline-end": We,
  "padding-inline-start": We,
  "mask-position-x": We,
  "mask-position-y": We,
  "mask-size": We,
  height: We,
  width: We,
  "min-height": We,
  "max-height": We,
  "min-width": We,
  "max-width": We,
  bottom: We,
  left: We,
  top: We,
  right: We,
  inset: We,
  "inset-block": We,
  "inset-block-end": We,
  "inset-block-start": We,
  "inset-inline": We,
  "inset-inline-end": We,
  "inset-inline-start": We,
  "box-shadow": We,
  "text-shadow": We,
  "column-gap": We,
  "column-rule": We,
  "column-rule-width": We,
  "column-width": We,
  "font-size": We,
  "font-size-delta": We,
  "letter-spacing": We,
  "text-decoration-thickness": We,
  "text-indent": We,
  "text-stroke": We,
  "text-stroke-width": We,
  "word-spacing": We,
  motion: We,
  "motion-offset": We,
  outline: We,
  "outline-offset": We,
  "outline-width": We,
  perspective: We,
  "perspective-origin-x": Xe,
  "perspective-origin-y": Xe,
  "transform-origin": Xe,
  "transform-origin-x": Xe,
  "transform-origin-y": Xe,
  "transform-origin-z": Xe,
  "transition-delay": Ke,
  "transition-duration": Ke,
  "vertical-align": We,
  "flex-basis": We,
  "shape-margin": We,
  size: We,
  gap: We,
  grid: We,
  "grid-gap": We,
  "row-gap": We,
  "grid-row-gap": We,
  "grid-column-gap": We,
  "grid-template-rows": We,
  "grid-template-columns": We,
  "grid-auto-rows": We,
  "grid-auto-columns": We,
  "box-shadow-x": We,
  "box-shadow-y": We,
  "box-shadow-blur": We,
  "box-shadow-spread": We,
  "font-line-height": We,
  "text-shadow-x": We,
  "text-shadow-y": We,
  "text-shadow-blur": We
})
function $e(e, t, n) {
  if (null == t) {
    return t
  }
  if (Array.isArray(t)) {
    for (var r = 0; r < t.length; r++) {
      t[r] = $e(e, t[r], n)
    }
  } else if ("object" === typeof t) {
    if ("fallbacks" === e) {
      for (var i in t) t[i] = $e(i, t[i], n)
    } else {
      for (var o in t) t[o] = $e(e + "-" + o, t[o], n)
    }
  } else if ("number" === typeof t && false === isNaN(t)) {
    var a = n[e] || qe[e]
    return !a || 0 === t && a === We ? t.toString() : "function" === typeof a ? a(t).toString() : "" + t + a
  }
  return t
}
var Je = function (e) {
  if (undefined === e) {
    e = {}
  }
  var t = Ye(e)
  return {
    onProcessStyle: function (e, n) {
      if ("style" !== n.type) {
        return e
      }
      for (var r in e) e[r] = $e(r, e[r], t)
      return e
    },
    onChangeValue: function (e, n) {
      return $e(n, e, t)
    }
  }
}
export { Ee }
export { xe }
export { Se }
export { Fe }
export { Le }
export { Qe }
export { Je }
