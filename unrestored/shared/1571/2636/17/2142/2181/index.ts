/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2181
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Utils = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 258 */"@kitten-team/gl-matrix")
var a = require(/* 2182 */"./2182")
var s = require(/* 1350 */"./1350")
var c = require(/* 2183 */"./2183")
var u = require(/* 125 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var l = require(/* 195 */"../../../123/195/index")
var f = require(/* 975 */"../../499/975")
var d = require(/* 293 */"../../../123/293")
var h = require(/* 214 */"../../../1022/214")
var p = require(/* 499 */"../../499/index")
var _ = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/
var A = /transform:\s*translate\(\s*([-+\d.e]+)px(([ ,]\s*([-+\d.e]+)\s*)px)*\)?/
var g = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/
var v = /scale\(\s*([-+\d.e]+)\s*\)/
var m = function () {
  function e() {
    var e = this
    this.is_3d_supported_cached_ = undefined
    this.string_to_dom = function (e) {
      if (window.ActiveXObject) {
        var t = new window.ActiveXObject("Microsoft.XMLDOM")
        t.async = "false"
        t.loadXML(e)
        return t
      }
      var n = new DOMParser().parseFromString(e, "text/xml")
      if (!(n && n.firstChild && n.firstChild === n.lastChild)) {
        console.error("string_to_dom did not obtain a valid XML tree.")
      }
      return n.firstChild
    }
    this.cached_shadow_dom = new Map()
    this.shadow_type_map = {
      text: "<shadow type=\"text\"><field name=\"TEXT\"></field></shadow>",
      math_number: "<shadow type=\"math_number\"><field name=\"NUM\"></field></shadow>",
      logic_empty: "<empty type=\"logic_empty\"><field name=\"BOOL\"></field></empty>",
      lists_get: "<shadow type=\"lists_get\"><field name=\"VAR\"></field></shadow>"
    }
    this.get_shadow_dom = function (t, n, r, i) {
      var o
      var a = null === (o = e.cached_shadow_dom.get(e.shadow_type_map[t])) || undefined === o ? undefined : o.cloneNode(true)
      if (!a) {
        a = e.string_to_dom(e.shadow_type_map[t])
        e.cached_shadow_dom.set(e.shadow_type_map[t], a)
      }
      if (r) {
        Object.keys(r).forEach(function (e) {
          a.setAttribute(e, r[e])
        })
      }
      if (a.firstElementChild) {
        if (undefined != n) {
          a.firstElementChild.textContent = n
        }
        if (i) {
          Object.keys(i).forEach(function (e) {
            a.firstElementChild.setAttribute(e, i[e])
          })
        }
      }
      return a
    }
    this.try_parse_shadow = function (t) {
      var n = t.match(/^<shadow[^<]+type="([^"]+)"[^>]*>[^<]*<field[^>]*>(.*)<\/field>[^<]*<\/shadow>$/) || t.match(/^<empty[^<]+type="([^"]+)"/) || []
      var r = n[1]
      var i = n[2]
      if (r && e.shadow_type_map[r]) {
        return e.get_shadow_dom(r, i, e.parse_attrs((t.match(/^<shadow ([^>]*)>/) || t.match(/^<empty ([^>]*)>/) || [])[1]), e.parse_attrs((t.match(/<field ([^>]*)>/) || [])[1]))
      }
    }
    this.string_to_dom_with_shadow_cache = function (t) {
      var n = e.try_parse_shadow(t)
      if (n) {
        return n
      }
      if (!(n = e.string_to_dom(t))) {
        throw Error("Cannot convert string to xml. " + t)
      }
      return n
    }
    this.cache_reference = 0
    this.cached_widths = new Map()
    this.cached_style = ""
  }
  e.prototype.hide_chaff = function (e, t) {
    for (var n = 0, /* [auto-meaningful-name] */this$runtime_data$hide_chaff_effects = this.runtime_data.hide_chaff_effects; n < this$runtime_data$hide_chaff_effects.length; n++) {
      (0, this$runtime_data$hide_chaff_effects[n])()
    }
    this.widget_div.hide(t)
    if (!e) {
      var /* [auto-meaningful-name] */this$workspace_db$current = this.workspace_db.current
      var o = this$workspace_db$current && this$workspace_db$current.get_toolbox()
      if (o && o.flyout && o.flyout.is_auto_close()) {
        o.clear_selection()
      }
    }
  }
  e.prototype.gen_uid = function () {
    return (0, d.gen_uid)()
  }
  e.prototype.is_3d_supported = function () {
    if (undefined != this.is_3d_supported_cached_) {
      return this.is_3d_supported_cached_
    }
    if (!window.getComputedStyle) {
      return false
    }
    var e = document.createElement("p")
    var t = "none"
    var n = {
      webkitTransform: "-webkit-transform",
      OTransform: "-o-transform",
      msTransform: "-ms-transform",
      MozTransform: "-moz-transform",
      transform: "transform"
    }
    for (var r in document.body.insertBefore(e, null), n) if (undefined != e.style.getPropertyValue(n[r])) {
      e.style.setProperty(n[r], "translate3d(1px,1px,1px)")
      var i = window.getComputedStyle(e)
      if (!i) {
        document.body.removeChild(e)
        return false
      }
      t = i.getPropertyValue(n[r])
    }
    document.body.removeChild(e)
    this.is_3d_supported_cached_ = "none" !== t
    return this.is_3d_supported_cached_
  }
  e.prototype.run_after_page_load = function (e) {
    if (!document) {
      throw new Error("Blockly.utils.run_after_page_load() requires browser document.")
    }
    if ("complete" === document.readyState) {
      e()
    } else {
      var t = setInterval(function () {
        if ("complete" === document.readyState) {
          clearInterval(t)
          e()
        }
      }, 10)
    }
  }
  e.prototype.svg_resize = function (e) {
    for (var t = e, /* [auto-meaningful-name] */t$get_options$parentWorkspace = t.get_options().parentWorkspace; t$get_options$parentWorkspace;) {
      t$get_options$parentWorkspace = (t = t$get_options$parentWorkspace).get_options().parentWorkspace
    }
    var r = t.get_parent_svg()
    var i = t.get_injection_div()
    if (i) {
      var o = t.get_toolbox()
      var a = (null === o || undefined === o ? undefined : o.get_width()) || 0
      var s = (null === o || undefined === o ? undefined : o.get_height()) || 0
      var c = t.get_flyout()
      if (c && c.is_visible() && !c.is_auto_close()) {
        a += c.get_width()
      }
      var /* [auto-meaningful-name] */i$offsetWidth = i.offsetWidth
      var /* [auto-meaningful-name] */i$offsetHeight = i.offsetHeight
      if (!(i$offsetWidth < a || i$offsetHeight < s)) {
        var d = i$offsetWidth
        if (t.options.toolboxPosition === l.TOOLBOX_POSITION.LEFT) {
          d -= a
          t.offset[0] = a
        }
        if (t.options.toolboxPosition === l.TOOLBOX_POSITION.RIGHT) {
          d -= a
        }
        var h = i$offsetHeight
        if (t.options.toolboxPosition === l.TOOLBOX_POSITION.TOP) {
          h -= s
          t.offset[1] = s
        }
        if (t.options.toolboxPosition === l.TOOLBOX_POSITION.BOTTOM) {
          h -= s
        }
        if (r.cachedWidth_ != d) {
          r.setAttribute("width", d + "px")
          r.cachedWidth_ = d
        }
        if (r.cachedHeight_ != h) {
          r.setAttribute("height", h + "px")
          r.cachedHeight_ = h
        }
        t.resize()
        this.set_transform_style(r, e.offset[0], e.offset[1])
      }
    }
  }
  e.prototype.set_language = function (e) {
    switch (undefined === e && (e = "zh"), e) {
      case "en":
        Object.assign(this.Msg, a.en)
        break
      case "zh":
        Object.assign(this.Msg, s.zh_hans)
        break
      case "tw":
        Object.assign(this.Msg, c.zh_hant)
    }
  }
  e.prototype.get_scale = function (e) {
    var t = 1
    var n = e.getAttribute("transform")
    if (undefined != n) {
      var r = n.match(v)
      if (r && r[1]) {
        t = parseFloat(r[1])
      }
    }
    return t
  }
  e.prototype.get_relative_xy = function (e) {
    var t = o.vec2.create()
    var n = e.getAttribute("x")
    var r = e.getAttribute("y")
    if (n) {
      t[0] = parseInt(n, 10)
    }
    if (r) {
      t[1] = parseInt(r, 10)
    }
    var i = e.getAttribute("transform")
    var a = undefined != i && i.match(_)
    if (a) {
      t[0] += parseFloat(a[1])
      if (a[3]) {
        t[1] += parseFloat(a[3])
      }
    }
    var s = e.getAttribute("style")
    if (s && s.indexOf("translate") > -1) {
      var c = s.match(A)
      if (c) {
        t[0] += parseFloat(c[1])
        if (c[4]) {
          t[1] += parseFloat(c[4])
        }
      } else {
        if (c = s.match(g)) {
          t[0] += parseFloat(c[1])
          if (c[3]) {
            t[1] += parseFloat(c[3])
          }
        }
      }
    }
    return t
  }
  e.prototype.get_injection_div_xy = function (e) {
    for (var t = o.vec2.create(), n = e; n instanceof Element;) {
      var r = this.get_relative_xy(n)
      var i = this.get_scale(n)
      o.vec2.scaleAndAdd(t, r, t, i)
      if (-1 != (" " + (n.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) {
        break
      }
      n = n.parentNode
    }
    return t
  }
  e.prototype.common_word_suffix = function (e) {
    if (!e.length) {
      return 0
    }
    if (1 == e.length) {
      return e[0].length
    }
    for (var t = 0, n = 0, r = (0, f.shortest_string_length)(e); n < r; n++) {
      for (var i = e[0].substr(-n - 1, 1), o = 1; o < e.length; o++) {
        if (i != e[o].substr(-n - 1, 1)) {
          return t
        }
      }
      if (" " == i) {
        t = n + 1
      }
    }
    for (o = 1; o < e.length; o++) {
      if ((i = e[o].charAt(e[o].length - n - 1)) && " " != i) {
        return t
      }
    }
    return r
  }
  e.prototype.common_word_prefix = function (e) {
    if (!e.length) {
      return 0
    }
    if (1 == e.length) {
      return e[0].length
    }
    for (var t = 0, n = 0, r = (0, f.shortest_string_length)(e); n < r; n++) {
      for (var i = e[0][n], o = 1; o < e.length; o++) {
        if (i != e[o][n]) {
          return t
        }
      }
      if (" " == i) {
        t = n + 1
      }
    }
    for (o = 1; o < e.length; o++) {
      if ((i = e[o][n]) && " " != i) {
        return t
      }
    }
    return r
  }
  e.prototype.is_target_input = function (e) {
    var /* [auto-meaningful-name] */e$target = e.target
    return "textarea" == e$target.type || "text" == e$target.type || "number" == e$target.type || "email" == e$target.type || "password" == e$target.type || "search" == e$target.type || "tel" == e$target.type || "url" == e$target.type || e$target.isContentEditable
  }
  e.prototype.check_message_references = function (e) {
    for (var t = true, n = /%{BKY_([a-zA-Z][a-zA-Z0-9_]*)}/g, r = n.exec(e); r;) {
      var i = r[1]
      if (undefined == this.Msg[i]) {
        console.warn("WARNING: No message string for %{BKY_" + i + "}.")
        t = false
      }
      e = e.substring(r.index + i.length + 1)
      r = n.exec(e)
    }
    return t
  }
  e.prototype.mouse_to_svg = function (e, t, n) {
    var r = t.createSVGPoint()
    if (!(r.x = e.clientX, r.y = e.clientY, n)) {
      n = t.getScreenCTM().inverse()
    }
    return r.matrixTransform(n)
  }
  e.prototype.is_right_button = function (e) {
    return !(!e.ctrlKey || !p.is.mac()) || 2 == e.button
  }
  e.prototype.confirm = function (e, t) {
    t(window.confirm(e))
  }
  e.prototype.replace_message_references = function (e) {
    return this.tokenize_interpolation(e).reduce(function (e, t) {
      return "number" === typeof t ? e + "%" + t : "" + e + t
    }, "")
  }
  e.prototype.tokenize_interpolation = function (e) {
    var t = []
    var n = e.split("")
    n.push("")
    for (var /* [auto-meaningful-name] */l$TokenizationState$BaseCase = l.TokenizationState.BaseCase, i = [], o = "", a = "", s = 0; s < n.length; s++) {
      var c = n[s]
      switch (l$TokenizationState$BaseCase) {
        case l.TokenizationState.BaseCase:
          if ("%" === c) {
            if (a = i.join("")) {
              t.push(a)
            }
            i.length = 0
            l$TokenizationState$BaseCase = l.TokenizationState.PercentFound
            break
          }
          i.push(c)
          break
        case l.TokenizationState.PercentFound:
          if ("%" === c) {
            i.push(c)
            l$TokenizationState$BaseCase = l.TokenizationState.BaseCase
            break
          }
          if ("0" <= c && c <= "9") {
            l$TokenizationState$BaseCase = l.TokenizationState.DigitFound
            o = c
            if (a = i.join("")) {
              t.push(a)
            }
            i.length = 0
            break
          }
          if ("{" == c) {
            l$TokenizationState$BaseCase = l.TokenizationState.MsgRefFound
            break
          }
          i.push("%", c)
          l$TokenizationState$BaseCase = l.TokenizationState.BaseCase
          break
        case l.TokenizationState.DigitFound:
          if ("0" <= c && c <= "9") {
            o += c
            break
          }
          t.push(parseInt(o, 10))
          s--
          l$TokenizationState$BaseCase = l.TokenizationState.BaseCase
          break
        case l.TokenizationState.MsgRefFound:
          if ("" === c) {
            i.splice(0, 0, "%{")
            s--
            l$TokenizationState$BaseCase = l.TokenizationState.BaseCase
            break
          }
          if ("}" !== c) {
            i.push(c)
            break
          }
          var u = i.join("")
          if (/[A-Z]\w*/i.test(u)) {
            var f = u.toUpperCase()
            var d = f.startsWith("BKY_") ? f.substring(4) : undefined
            var p = d && d in this.Msg ? this.Msg[d] : undefined
            if (undefined !== p) {
              if ((0, h.is_string)(p)) {
                Array.prototype.push.apply(t, this.tokenize_interpolation(p))
              } else {
                t.push(String(p))
              }
            } else {
              t.push("%{" + u + "}")
            }
            i.length = 0
            l$TokenizationState$BaseCase = l.TokenizationState.BaseCase
          } else {
            t.push("%{" + u + "}")
            i.length = 0
            l$TokenizationState$BaseCase = l.TokenizationState.BaseCase
          }
      }
    }
    if (a = i.join("")) {
      t.push(a)
    }
    var _ = []
    i.length = 0
    for (var A = 0; A < t.length; ++A) {
      if ("string" === typeof t[A]) {
        i.push(t[A])
      } else {
        if (a = i.join("")) {
          _.push(a)
        }
        i.length = 0
        _.push(t[A])
      }
    }
    if (a = i.join("")) {
      _.push(a)
    }
    i.length = 0
    return _
  }
  e.prototype.get_svg_size = function (e) {
    return {
      width: e.cachedWidth_,
      height: e.cachedHeight_
    }
  }
  e.prototype.set_transform_style = function (e, t, n, r) {
    if ("number" === typeof t || "number" === typeof n || "number" === typeof r) {
      var i = e.style.transform || e.style.webkitTransform || "translate(0px, 0px) scale(1)"
      var a = i
      if ("number" === typeof t || "number" === typeof n) {
        var s = o.vec2.fromValues(0, 0)
        var c = undefined != a && a.match(_)
        if (c) {
          s[0] = parseFloat(c[1])
          s[1] = parseFloat(c[3])
        }
        var u = "number" === typeof t ? t : s[0]
        var l = "number" === typeof n ? n : s[1]
        if (u !== s[0] || l !== s[1]) {
          var f = "translate(" + u + "px, " + l + "px)"
          a = a.replace(/translate\([^)]+\)/, f)
        }
      }
      if ("number" === typeof r) {
        a = a.replace(/scale\([^)]+\)/, "scale(" + r + ")")
      }
      if (a !== i) {
        e.style.transform = a
        e.style.webkitTransform = a
      }
    }
  }
  e.prototype.parse_attrs = function (e) {
    var t = {}
    if (!e) {
      return t
    }
    try {
      e.split(/\s/).forEach(function (e) {
        if (!(e.length < 2)) {
          var n = e.split("=")
          var r = n[0]
          var i = n[1]
          t[r] = i.slice(1, i.length - 1)
        }
      })
    } catch (n) {
      console.error("Parsing shadow attribute error: " + n)
    }
    return t
  }
  e.prototype.dom_to_string = function (e) {
    return new XMLSerializer().serializeToString(e)
  }
  e.prototype.start_text_cache = function () {
    this.cache_reference++
  }
  e.prototype.stop_text_cache = function () {
    this.cache_reference--
    if (!this.cache_reference) {
      this.cached_widths.clear()
      this.cached_style = ""
    }
  }
  e.prototype.measure_text = function (e, t) {
    if (!this.canvas_context) {
      var n = document.createElement("canvas")
      n.style.display = "none"
      document.body.appendChild(n)
      this.canvas_context = n.getContext("2d")
    }
    this.canvas_context.font = t
    return this.canvas_context.measureText(e).width
  }
  e.prototype.get_cached_width = function (e) {
    var t = this
    var n = e.textContent + "\n" + e.className.baseVal
    var r = this.cached_widths.get(n) || 0
    if (r) {
      return r
    }
    try {
      if (!this.cached_style) {
        var i = function (e) {
          var n = window.getComputedStyle(e)
          t.cached_style = n.fontWeight + " " + n.fontSize + " " + n.fontFamily
        }
        if (document.body.contains(e)) {
          i(e)
        } else {
          for (var o = e; o.parentNode && "text" !== o.tagName.toLowerCase();) {
            o = o.parentNode
          }
          var a = o.cloneNode(true)
          document.body.appendChild(a)
          i(a)
          document.body.removeChild(a)
        }
      }
      r = this.measure_text(e.textContent || "", this.cached_style)
    } catch (c) {
      console.warn(c)
      var /* [auto-meaningful-name] */e$textContent = e.textContent
      return undefined == e$textContent ? 0 : 8 * e$textContent.length
    }
    this.cached_widths.set(n, r)
    return r
  };
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.Msg)], e.prototype, "Msg", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.runtime_data)], e.prototype, "runtime_data", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.widget_div)], e.prototype, "widget_div", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.workspace_db)], e.prototype, "workspace_db", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Utils = m
