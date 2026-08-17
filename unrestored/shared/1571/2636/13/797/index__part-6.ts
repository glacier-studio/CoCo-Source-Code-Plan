/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：797__part-6
 */

"use strict"

import { d, g, b } from "./index__part-0"
import { B } from "./index__part-1"
import { z, Z, ee, ae, _e, Ae, Pe, Le } from "./index__part-2"
import { ze, tt, at, st, ct, ut } from "./index__part-3"
import { Et, Bt, Ut, qt, on, hn, bn, wn, xn } from "./index__part-5"
import * as /* [auto-meaningful-name] */Module_740 from /* 740 */"./740/index"
import * as /* [auto-meaningful-name] */Module_325 from /* 325 */"./325"
import /* [auto-meaningful-name] */Module_50 from /* 50 */"../../50/index"
import /* [auto-meaningful-name] */Module_101 from /* 101 */"./101/index"
import * as /* [auto-meaningful-name] */Module_1011 from /* 101 */"./101/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { PureComponent, Component } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_226 from /* 226 */"../../15/226"
import /* [auto-meaningful-name] */Module_2261 from /* 226 */"../../15/226"
var kn = function (e) {
  var t = 0
  var n = 0
  xn(["r", "g", "b", "a", "h", "s", "l", "v"], function (r) {
    if (e[r] && (t += 1, isNaN(e[r]) || (n += 1), "s" === r || "l" === r)) {
      if (/^\d+%$/.test(e[r])) {
        n += 1
      }
    }
  })
  return t === n && e
}
var Sn = function (e, t) {
  var n = e.hex ? Module_2261(e.hex) : Module_2261(e)
  var r = n.toHsl()
  var i = n.toHsv()
  var o = n.toRgb()
  var a = n.toHex()
  if (0 === r.s) {
    r.h = t || 0
    i.h = t || 0
  }
  return {
    hsl: r,
    hex: "000000" === a && 0 === o.a ? "transparent" : "#" + a,
    rgb: o,
    hsv: i,
    oldHue: e.h || t || r.h,
    source: e.source
  }
}
var Tn = function (e) {
  if ("transparent" === e) {
    return true
  }
  var t = "#" === String(e).charAt(0) ? 1 : 0
  return e.length !== 4 + t && e.length < 7 + t && Module_2261(e).isValid()
}
var Bn = function (e) {
  if (!e) {
    return "#fff"
  }
  var t = Sn(e)
  return "transparent" === t.hex ? "rgba(0,0,0,0.4)" : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128 ? "#000" : "#fff"
}
var Dn = function (e, t) {
  var n = e.replace("°", "")
  return Module_2261(t + " (" + n + ")")._ok
}
var In = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var Rn = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      r.enumerable = r.enumerable || false
      r.configurable = true
      if ("value" in r) {
        r.writable = true
      }
      Object.defineProperty(e, r.key, r)
    }
  }
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
var Fn = function (e) {
  var t = function (t) {
    function n(e) {
      !function (e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }(this, n)
      var t = function (e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
      }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this))
      t.handleChange = function (e, n) {
        if (kn(e)) {
          var r = Sn(e, e.h || t.state.oldHue)
          t.setState(r)
          if (t.props.onChangeComplete) {
            t.debounce(t.props.onChangeComplete, r, n)
          }
          if (t.props.onChange) {
            t.props.onChange(r, n)
          }
        }
      }
      t.handleSwatchHover = function (e, n) {
        if (kn(e)) {
          var r = Sn(e, e.h || t.state.oldHue)
          if (t.props.onSwatchHover) {
            t.props.onSwatchHover(r, n)
          }
        }
      }
      t.state = In({}, Sn(e.color, 0))
      t.debounce = hn(function (e, t, n) {
        e(t, n)
      }, 100)
      return t
    }
    (function (e, t) {
      if ("function" !== typeof t && null !== t) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t)
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t)
        } else {
          e.__proto__ = t
        }
      }
    })(n, t)
    Rn(n, [
      {
        key: "render",
        value: function () {
          var t = {}
          if (this.props.onSwatchHover) {
            t.onSwatchHover = this.handleSwatchHover
          }
          return React.createElement(e, In({}, this.props, this.state, {
            onChange: this.handleChange
          }, t))
        }
      }
    ], [
      {
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          return In({}, Sn(e.color, t.oldHue))
        }
      }
    ])
    return n
  }(PureComponent || Component)
  t.propTypes = In({}, e.propTypes)
  t.defaultProps = In({}, e.defaultProps, {
    color: {
      h: 250,
      s: .5,
      l: .2,
      a: 1
    }
  })
  return t
}
var Pn = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var Nn = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      r.enumerable = r.enumerable || false
      r.configurable = true
      if ("value" in r) {
        r.writable = true
      }
      Object.defineProperty(e, r.key, r)
    }
  }
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
function Mn(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
function Ln(e, t) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return !t || "object" !== typeof t && "function" !== typeof t ? e : t
}
function jn(e, t) {
  if ("function" !== typeof t && null !== t) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof t)
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (t) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(e, t)
    } else {
      e.__proto__ = t
    }
  }
}
var Un = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var Hn = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "span"
  return function (n) {
    function r() {
      var e
      var t
      var n
      Mn(this, r)
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = Array(arguments$length), a = 0; a < arguments$length; a++) {
        o[a] = arguments[a]
      }
      t = n = Ln(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(o)))
      n.state = {
        focus: false
      }
      n.handleFocus = function () {
        return n.setState({
          focus: true
        })
      }
      n.handleBlur = function () {
        return n.setState({
          focus: false
        })
      }
      return Ln(n, t)
    }
    jn(r, n)
    Nn(r, [
      {
        key: "render",
        value: function () {
          return React.createElement(t, {
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          }, React.createElement(e, Pn({}, this.props, this.state)))
        }
      }
    ])
    return r
  }(React.Component)
}(function (e) {
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var o = undefined === e$onClick ? function () {} : e$onClick
  var /* [auto-meaningful-name] */e$onHover = e.onHover
  var /* [auto-meaningful-name] */e$title = e.title
  var u = undefined === e$title ? e$color : e$title
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$focus = e.focus
  var /* [auto-meaningful-name] */e$focusStyle = e.focusStyle
  var p = undefined === e$focusStyle ? {} : e$focusStyle
  var _ = "transparent" === e$color
  var A = Module_101({
    default: {
      swatch: Un({
        background: e$color,
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        outline: "none"
      }, e$style, e$focus ? p : {})
    }
  })
  var g = {}
  if (e$onHover) {
    g.onMouseOver = function (e) {
      return e$onHover(e$color, e)
    }
  }
  return React.createElement("div", Un({
    style: A.swatch,
    onClick: function (e) {
      return o(e$color, e)
    },
    title: u,
    tabIndex: 0,
    onKeyDown: function (e) {
      return 13 === e.keyCode && o(e$color, e)
    }
  }, g), e$children, _ && React.createElement(d, {
    borderRadius: A.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }))
})
var Vn = function (e) {
  var /* [auto-meaningful-name] */e$direction = e.direction
  var n = Module_101({
    default: {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    vertical: {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, {
    vertical: "vertical" === e$direction
  })
  return React.createElement("div", {
    style: n.picker
  })
}
var Gn = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var zn = function (e) {
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$renderers = e.renderers
  var /* [auto-meaningful-name] */e$pointer = e.pointer
  var /* [auto-meaningful-name] */e$className = e.className
  var h = undefined === e$className ? "" : e$className
  var p = Module_101({
    default: {
      picker: {
        position: "relative",
        width: e$width,
        height: e$height
      },
      alpha: {
        radius: "2px",
        style: e$style
      }
    }
  })
  return React.createElement("div", {
    style: p.picker,
    className: "alpha-picker " + h
  }, React.createElement(g, Gn({}, p.alpha, {
    rgb: e$rgb,
    hsl: e$hsl,
    pointer: e$pointer,
    renderers: e$renderers,
    onChange: e$onChange,
    direction: e$direction
  })))
}
zn.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: Vn
}
Fn(zn)
var Qn = function (e, t) {
  for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) {
    i[n] = t(e[n], n, e)
  }
  return i
}
var Wn = function (e) {
  this.__data__.set(e, "__lodash_hash_undefined__")
  return this
}
var Kn = function (e) {
  return this.__data__.has(e)
}
function Xn(e) {
  var t = -1
  var n = null == e ? 0 : e.length
  for (this.__data__ = new Pe(); ++t < n;) {
    this.add(e[t])
  }
}
Xn.prototype.add = Xn.prototype.push = Wn
Xn.prototype.has = Kn
var Yn = Xn
var qn = function (e, t) {
  for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) {
    if (t(e[n], n, e)) {
      return true
    }
  }
  return false
}
var $n = function (e, t) {
  return e.has(t)
}
var Jn = function (e, t, n, r, i, o) {
  var a = 1 & n
  var /* [auto-meaningful-name] */e$length = e.length
  var /* [auto-meaningful-name] */t$length = t.length
  if (e$length != t$length && !(a && t$length > e$length)) {
    return false
  }
  var u = o.get(e)
  var l = o.get(t)
  if (u && l) {
    return u == t && l == e
  }
  var f = -1
  var d = true
  var h = 2 & n ? new Yn() : undefined
  for (o.set(e, t), o.set(t, e); ++f < e$length;) {
    var p = e[f]
    var _ = t[f]
    if (r) {
      var A = a ? r(_, p, f, t, e, o) : r(p, _, f, e, t, o)
    }
    if (undefined !== A) {
      if (A) {
        continue
      }
      d = false
      break
    }
    if (h) {
      if (!qn(t, function (e, t) {
        if (!$n(h, t) && (p === e || i(p, e, n, r, o))) {
          return h.push(t)
        }
      })) {
        d = false
        break
      }
    } else if (p !== _ && !i(p, _, n, r, o)) {
      d = false
      break
    }
  }
  o.delete(e)
  o.delete(t)
  return d
}
var Zn = function (e) {
  var t = -1
  var n = Array(e.size)
  e.forEach(function (e, r) {
    n[++t] = [r, e]
  })
  return n
}
var er = function (e) {
  var t = -1
  var n = Array(e.size)
  e.forEach(function (e) {
    n[++t] = e
  })
  return n
}
var tr = z ? z.prototype : undefined
var nr = tr ? tr.valueOf : undefined
var rr = function (e, t, n, r, i, o, a) {
  switch (n) {
    case "[object DataView]":
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
        return false
      }
      e = e.buffer
      t = t.buffer
    case "[object ArrayBuffer]":
      return !(e.byteLength != t.byteLength || !o(new ze(e), new ze(t)))
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return B(+e, +t)
    case "[object Error]":
      return e.name == t.name && e.message == t.message
    case "[object RegExp]":
    case "[object String]":
      return e == t + ""
    case "[object Map]":
      var s = Zn
    case "[object Set]":
      var c = 1 & r
      if (s || (s = er), e.size != t.size && !c) {
        return false
      }
      var u = a.get(e)
      if (u) {
        return u == t
      }
      r |= 2
      a.set(e, t)
      var l = Jn(s(e), s(t), r, i, o, a)
      a.delete(e)
      return l
    case "[object Symbol]":
      if (nr) {
        return nr.call(e) == nr.call(t)
      }
  }
  return false
}
var ir = function (e, t) {
  for (var n = -1, /* [auto-meaningful-name] */t$length = t.length, /* [auto-meaningful-name] */e$length = e.length; ++n < t$length;) {
    e[e$length + n] = t[n]
  }
  return e
}
var or = function (e, t, n) {
  var r = t(e)
  return st(e) ? r : ir(r, n(e))
}
var ar = function (e, t) {
  for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
    var a = e[n]
    if (t(a, n, e)) {
      o[i++] = a
    }
  }
  return o
}
var sr = function () {
  return []
}
var /* [auto-meaningful-name] */Object$prototype$propertyIsEnumerable = Object.prototype.propertyIsEnumerable
var /* [auto-meaningful-name] */Object$getOwnPropertySymbols = Object.getOwnPropertySymbols
var lr = Object$getOwnPropertySymbols ? function (e) {
  return null == e ? [] : (e = Object(e), ar(Object$getOwnPropertySymbols(e), function (t) {
    return Object$prototype$propertyIsEnumerable.call(e, t)
  }))
} : sr
var fr = function (e) {
  return or(e, bn, lr)
}
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
var hr = function (e, t, n, r, i, o) {
  var a = 1 & n
  var s = fr(e)
  var /* [auto-meaningful-name] */s$length = s.length
  if (s$length != fr(t).length && !a) {
    return false
  }
  for (var u = s$length; u--;) {
    var l = s[u]
    if (!(a ? l in t : Object$prototype$hasOwnProperty.call(t, l))) {
      return false
    }
  }
  var f = o.get(e)
  var d = o.get(t)
  if (f && d) {
    return f == t && d == e
  }
  var h = true
  o.set(e, t)
  o.set(t, e)
  for (var p = a; ++u < s$length;) {
    var _ = e[l = s[u]]
    var A = t[l]
    if (r) {
      var g = a ? r(A, _, l, t, e, o) : r(_, A, l, e, t, o)
    }
    if (!(undefined === g ? _ === A || i(_, A, n, r, o) : g)) {
      h = false
      break
    }
    if (!p) {
      p = "constructor" == l
    }
  }
  if (h && !p) {
    var /* [auto-meaningful-name] */e$constructor = e.constructor
    var /* [auto-meaningful-name] */t$constructor = t.constructor
    if (!(e$constructor == t$constructor || !("constructor" in e) || !("constructor" in t) || "function" == typeof e$constructor && e$constructor instanceof e$constructor && "function" == typeof t$constructor && t$constructor instanceof t$constructor)) {
      h = false
    }
  }
  o.delete(e)
  o.delete(t)
  return h
}
var pr = _e(Module_325.a, "DataView")
var _r = _e(Module_325.a, "Promise")
var Ar = _e(Module_325.a, "Set")
var gr = _e(Module_325.a, "WeakMap")
var vr = ae(pr)
var mr = ae(Ae)
var yr = ae(_r)
var br = ae(Ar)
var wr = ae(gr)
var Er = Z
if (pr && "[object DataView]" != Er(new pr(new ArrayBuffer(1))) || Ae && "[object Map]" != Er(new Ae()) || _r && "[object Promise]" != Er(_r.resolve()) || Ar && "[object Set]" != Er(new Ar()) || gr && "[object WeakMap]" != Er(new gr())) {
  Er = function (e) {
    var t = Z(e)
    var n = "[object Object]" == t ? e.constructor : undefined
    var r = n ? ae(n) : ""
    if (r) {
      switch (r) {
        case vr:
          return "[object DataView]"
        case mr:
          return "[object Map]"
        case yr:
          return "[object Promise]"
        case br:
          return "[object Set]"
        case wr:
          return "[object WeakMap]"
      }
    }
    return t
  }
}
var xr = Er
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty1 = Object.prototype.hasOwnProperty
var Or = function (e, t, n, r, i, o) {
  var a = st(e)
  var s = st(t)
  var c = a ? "[object Array]" : xr(e)
  var u = s ? "[object Array]" : xr(t)
  var l = "[object Object]" == (c = "[object Arguments]" == c ? "[object Object]" : c)
  var f = "[object Object]" == (u = "[object Arguments]" == u ? "[object Object]" : u)
  var d = c == u
  if (d && Module_740.a(e)) {
    if (!Module_740.a(t)) {
      return false
    }
    a = true
    l = false
  }
  if (d && !l) {
    if (!o) {
      o = new Le()
    }
    return a || Et(e) ? Jn(e, t, n, r, i, o) : rr(e, t, c, n, r, i, o)
  }
  if (!(1 & n)) {
    var h = l && Object$prototype$hasOwnProperty1.call(e, "__wrapped__")
    var p = f && Object$prototype$hasOwnProperty1.call(t, "__wrapped__")
    if (h || p) {
      var _ = h ? e.value() : e
      var A = p ? t.value() : t
      if (!o) {
        o = new Le()
      }
      return i(_, A, n, r, o)
    }
  }
  return !!d && (o || (o = new Le()), hr(e, t, n, r, i, o))
}
var kr = function e(t, n, r, i, o) {
  return t === n || (null == t || null == n || !tt(t) && !tt(n) ? t !== t && n !== n : Or(t, n, r, i, e, o))
}
var Sr = function (e, t, n, r) {
  var /* [auto-meaningful-name] */n$length = n.length
  var o = n$length
  var a = !r
  if (null == e) {
    return !o
  }
  for (e = Object(e); n$length--;) {
    var s = n[n$length]
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) {
      return false
    }
  }
  for (; ++n$length < o;) {
    var c = (s = n[n$length])[0]
    var u = e[c]
    var l = s[1]
    if (a && s[2]) {
      if (undefined === u && !(c in e)) {
        return false
      }
    } else {
      var f = new Le()
      if (r) {
        var d = r(u, l, c, e, t, f)
      }
      if (!(undefined === d ? kr(l, u, 3, r, f) : d)) {
        return false
      }
    }
  }
  return true
}
var Tr = function (e) {
  return e === e && !ee(e)
}
var Br = function (e) {
  for (var t = bn(e), /* [auto-meaningful-name] */t$length = t.length; t$length--;) {
    var r = t[t$length]
    var i = e[r]
    t[t$length] = [r, i, Tr(i)]
  }
  return t
}
var Dr = function (e, t) {
  return function (n) {
    return null != n && n[e] === t && (undefined !== t || e in Object(n))
  }
}
var Ir = function (e) {
  var t = Br(e)
  return 1 == t.length && t[0][2] ? Dr(t[0][0], t[0][1]) : function (n) {
    return n === e || Sr(n, e, t)
  }
}
var Rr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
var Fr = /^\w*$/
var Pr = function (e, t) {
  if (st(e)) {
    return false
  }
  var n = typeof e
  return !("number" != n && "symbol" != n && "boolean" != n && null != e && !on(e)) || Fr.test(e) || !Rr.test(e) || null != t && e in Object(t)
}
function Nr(e, t) {
  if ("function" != typeof e || null != t && "function" != typeof t) {
    throw new TypeError("Expected a function")
  }
  var n = function n() {
    var r = arguments
    var i = t ? t.apply(this, r) : r[0]
    var /* [auto-meaningful-name] */n$cache = n.cache
    if (n$cache.has(i)) {
      return n$cache.get(i)
    }
    var a = e.apply(this, r)
    n.cache = n$cache.set(i, a) || n$cache
    return a
  }
  n.cache = new (Nr.Cache || Pe)()
  return n
}
Nr.Cache = Pe
var Mr = Nr
var Lr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
var jr = /\\(\\)?/g
var Ur = function (e) {
  var t = Mr(e, function (e) {
    if (500 === t$cache.size) {
      t$cache.clear()
    }
    return e
  })
  var /* [auto-meaningful-name] */t$cache = t.cache
  return t
}(function (e) {
  var t = []
  if (46 === e.charCodeAt(0)) {
    t.push("")
  }
  e.replace(Lr, function (e, n, r, i) {
    t.push(r ? i.replace(jr, "$1") : n || e)
  })
  return t
})
var Hr = z ? z.prototype : undefined
var Vr = Hr ? Hr.toString : undefined
var Gr = function e(t) {
  if ("string" == typeof t) {
    return t
  }
  if (st(t)) {
    return Qn(t, e) + ""
  }
  if (on(t)) {
    return Vr ? Vr.call(t) : ""
  }
  var n = t + ""
  return "0" == n && 1 / t == -1 / 0 ? "-0" : n
}
var zr = function (e) {
  return null == e ? "" : Gr(e)
}
var Qr = function (e, t) {
  return st(e) ? e : Pr(e, t) ? [e] : Ur(zr(e))
}
var Wr = function (e) {
  if ("string" == typeof e || on(e)) {
    return e
  }
  var t = e + ""
  return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}
var Kr = function (e, t) {
  for (var n = 0, /* [auto-meaningful-name] */TQrTE$length = (t = Qr(t, e)).length; null != e && n < TQrTE$length;) {
    e = e[Wr(t[n++])]
  }
  return n && n == TQrTE$length ? e : undefined
}
var Xr = function (e, t, n) {
  var r = null == e ? undefined : Kr(e, t)
  return undefined === r ? n : r
}
var Yr = function (e, t) {
  return null != e && t in Object(e)
}
var qr = function (e, t, n) {
  for (var r = -1, /* [auto-meaningful-name] */TQrTE$length = (t = Qr(t, e)).length, o = false; ++r < TQrTE$length;) {
    var a = Wr(t[r])
    if (!(o = null != e && n(e, a))) {
      break
    }
    e = e[a]
  }
  return o || ++r != TQrTE$length ? o : !!(TQrTE$length = null == e ? 0 : e.length) && ct(TQrTE$length) && Bt(a, TQrTE$length) && (st(e) || at(e))
}
var $r = function (e, t) {
  return null != e && qr(e, t, Yr)
}
var Jr = function (e, t) {
  return Pr(e) && Tr(t) ? Dr(Wr(e), t) : function (n) {
    var r = Xr(n, e)
    return undefined === r && r === t ? $r(n, e) : kr(t, r, 3)
  }
}
var Zr = function (e) {
  return function (t) {
    return null == t ? undefined : t[e]
  }
}
var ei = function (e) {
  return function (t) {
    return Kr(t, e)
  }
}
var ti = function (e) {
  return Pr(e) ? Zr(Wr(e)) : ei(e)
}
var ni = function (e) {
  return "function" == typeof e ? e : null == e ? Ut : "object" == typeof e ? st(e) ? Jr(e[0], e[1]) : Ir(e) : ti(e)
}
var ri = function (e, t) {
  var n = -1
  var r = ut(e) ? Array(e.length) : []
  wn(e, function (e, i, o) {
    r[++n] = t(e, i, o)
  })
  return r
}
var ii = function (e, t) {
  return (st(e) ? Qn : ri)(e, ni(t, 3))
}
var oi = function (e) {
  var /* [auto-meaningful-name] */e$colors = e.colors
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var o = Module_101({
    default: {
      swatches: {
        marginRight: "-10px"
      },
      swatch: {
        width: "22px",
        height: "22px",
        float: "left",
        marginRight: "10px",
        marginBottom: "10px",
        borderRadius: "4px"
      },
      clear: {
        clear: "both"
      }
    }
  })
  return React.createElement("div", {
    style: o.swatches
  }, ii(e$colors, function (e) {
    return React.createElement(Hn, {
      key: e,
      color: e,
      style: o.swatch,
      onClick: e$onClick,
      onHover: e$onSwatchHover,
      focusStyle: {
        boxShadow: "0 0 4px " + e
      }
    })
  }), React.createElement("div", {
    style: o.clear
  }))
}
var ai = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$colors = e.colors
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$triangle = e.triangle
  var /* [auto-meaningful-name] */e$styles = e.styles
  var l = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var h = undefined === e$className ? "" : e$className
  var p = "transparent" === e$hex
  var _ = function (e, n) {
    if (Tn(e)) {
      e$onChange({
        hex: e,
        source: "hex"
      }, n)
    }
  }
  var A = Module_101(qt({
    default: {
      card: {
        width: e$width,
        background: "#fff",
        boxShadow: "0 1px rgba(0,0,0,.1)",
        borderRadius: "6px",
        position: "relative"
      },
      head: {
        height: "110px",
        background: e$hex,
        borderRadius: "6px 6px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      },
      body: {
        padding: "10px"
      },
      label: {
        fontSize: "18px",
        color: Bn(e$hex),
        position: "relative"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 10px 10px 10px",
        borderColor: "transparent transparent " + e$hex + " transparent",
        position: "absolute",
        top: "-10px",
        left: "50%",
        marginLeft: "-10px"
      },
      input: {
        width: "100%",
        fontSize: "12px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "22px",
        boxShadow: "inset 0 0 0 1px #ddd",
        borderRadius: "4px",
        padding: "0 7px",
        boxSizing: "border-box"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      }
    }
  }, l), {
    "hide-triangle": "hide" === e$triangle
  })
  return React.createElement("div", {
    style: A.card,
    className: "block-picker " + h
  }, React.createElement("div", {
    style: A.triangle
  }), React.createElement("div", {
    style: A.head
  }, p && React.createElement(d, {
    borderRadius: "6px 6px 0 0"
  }), React.createElement("div", {
    style: A.label
  }, e$hex)), React.createElement("div", {
    style: A.body
  }, React.createElement(oi, {
    colors: e$colors,
    onClick: _,
    onSwatchHover: e$onSwatchHover
  }), React.createElement(b, {
    style: {
      input: A.input
    },
    value: e$hex,
    onChange: _
  })))
}
ai.propTypes = {
  width: Module_50.oneOfType([Module_50.string, Module_50.number]),
  colors: Module_50.arrayOf(Module_50.string),
  triangle: Module_50.oneOf(["top", "hide"]),
  styles: Module_50.object
}
ai.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {}
}
Fn(ai)
var si = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  a100: "#ff8a80",
  a200: "#ff5252",
  a400: "#ff1744",
  a700: "#d50000"
}
var ci = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
  a100: "#ff80ab",
  a200: "#ff4081",
  a400: "#f50057",
  a700: "#c51162"
}
var ui = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  a100: "#ea80fc",
  a200: "#e040fb",
  a400: "#d500f9",
  a700: "#aa00ff"
}
var li = {
  50: "#ede7f6",
  100: "#d1c4e9",
  200: "#b39ddb",
  300: "#9575cd",
  400: "#7e57c2",
  500: "#673ab7",
  600: "#5e35b1",
  700: "#512da8",
  800: "#4527a0",
  900: "#311b92",
  a100: "#b388ff",
  a200: "#7c4dff",
  a400: "#651fff",
  a700: "#6200ea"
}
var fi = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  a100: "#8c9eff",
  a200: "#536dfe",
  a400: "#3d5afe",
  a700: "#304ffe"
}
var di = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  a100: "#82b1ff",
  a200: "#448aff",
  a400: "#2979ff",
  a700: "#2962ff"
}
var hi = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  a100: "#80d8ff",
  a200: "#40c4ff",
  a400: "#00b0ff",
  a700: "#0091ea"
}
var pi = {
  50: "#e0f7fa",
  100: "#b2ebf2",
  200: "#80deea",
  300: "#4dd0e1",
  400: "#26c6da",
  500: "#00bcd4",
  600: "#00acc1",
  700: "#0097a7",
  800: "#00838f",
  900: "#006064",
  a100: "#84ffff",
  a200: "#18ffff",
  a400: "#00e5ff",
  a700: "#00b8d4"
}
var _i = {
  50: "#e0f2f1",
  100: "#b2dfdb",
  200: "#80cbc4",
  300: "#4db6ac",
  400: "#26a69a",
  500: "#009688",
  600: "#00897b",
  700: "#00796b",
  800: "#00695c",
  900: "#004d40",
  a100: "#a7ffeb",
  a200: "#64ffda",
  a400: "#1de9b6",
  a700: "#00bfa5"
}
var Ai = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  a100: "#b9f6ca",
  a200: "#69f0ae",
  a400: "#00e676",
  a700: "#00c853"
}
var gi = {
  50: "#f1f8e9",
  100: "#dcedc8",
  200: "#c5e1a5",
  300: "#aed581",
  400: "#9ccc65",
  500: "#8bc34a",
  600: "#7cb342",
  700: "#689f38",
  800: "#558b2f",
  900: "#33691e",
  a100: "#ccff90",
  a200: "#b2ff59",
  a400: "#76ff03",
  a700: "#64dd17"
}
var vi = {
  50: "#f9fbe7",
  100: "#f0f4c3",
  200: "#e6ee9c",
  300: "#dce775",
  400: "#d4e157",
  500: "#cddc39",
  600: "#c0ca33",
  700: "#afb42b",
  800: "#9e9d24",
  900: "#827717",
  a100: "#f4ff81",
  a200: "#eeff41",
  a400: "#c6ff00",
  a700: "#aeea00"
}
var mi = {
  50: "#fffde7",
  100: "#fff9c4",
  200: "#fff59d",
  300: "#fff176",
  400: "#ffee58",
  500: "#ffeb3b",
  600: "#fdd835",
  700: "#fbc02d",
  800: "#f9a825",
  900: "#f57f17",
  a100: "#ffff8d",
  a200: "#ffff00",
  a400: "#ffea00",
  a700: "#ffd600"
}
var yi = {
  50: "#fff8e1",
  100: "#ffecb3",
  200: "#ffe082",
  300: "#ffd54f",
  400: "#ffca28",
  500: "#ffc107",
  600: "#ffb300",
  700: "#ffa000",
  800: "#ff8f00",
  900: "#ff6f00",
  a100: "#ffe57f",
  a200: "#ffd740",
  a400: "#ffc400",
  a700: "#ffab00"
}
var bi = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  a100: "#ffd180",
  a200: "#ffab40",
  a400: "#ff9100",
  a700: "#ff6d00"
}
var wi = {
  50: "#fbe9e7",
  100: "#ffccbc",
  200: "#ffab91",
  300: "#ff8a65",
  400: "#ff7043",
  500: "#ff5722",
  600: "#f4511e",
  700: "#e64a19",
  800: "#d84315",
  900: "#bf360c",
  a100: "#ff9e80",
  a200: "#ff6e40",
  a400: "#ff3d00",
  a700: "#dd2c00"
}
var Ei = {
  50: "#efebe9",
  100: "#d7ccc8",
  200: "#bcaaa4",
  300: "#a1887f",
  400: "#8d6e63",
  500: "#795548",
  600: "#6d4c41",
  700: "#5d4037",
  800: "#4e342e",
  900: "#3e2723"
}
var xi = {
  50: "#eceff1",
  100: "#cfd8dc",
  200: "#b0bec5",
  300: "#90a4ae",
  400: "#78909c",
  500: "#607d8b",
  600: "#546e7a",
  700: "#455a64",
  800: "#37474f",
  900: "#263238"
}
var Ci = function (e) {
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$hover = e.hover
  var /* [auto-meaningful-name] */e$active = e.active
  var /* [auto-meaningful-name] */e$circleSize = e.circleSize
  var /* [auto-meaningful-name] */e$circleSpacing = e.circleSpacing
  var l = Module_101({
    default: {
      swatch: {
        width: e$circleSize,
        height: e$circleSize,
        marginRight: e$circleSpacing,
        marginBottom: e$circleSpacing,
        transform: "scale(1)",
        transition: "100ms transform ease"
      },
      Swatch: {
        borderRadius: "50%",
        background: "transparent",
        boxShadow: "inset 0 0 0 " + (e$circleSize / 2 + 1) + "px " + e$color,
        transition: "100ms box-shadow ease"
      }
    },
    hover: {
      swatch: {
        transform: "scale(1.2)"
      }
    },
    active: {
      Swatch: {
        boxShadow: "inset 0 0 0 3px " + e$color
      }
    }
  }, {
    hover: e$hover,
    active: e$active
  })
  return React.createElement("div", {
    style: l.swatch
  }, React.createElement(Hn, {
    style: l.Swatch,
    color: e$color,
    onClick: e$onClick,
    onHover: e$onSwatchHover,
    focusStyle: {
      boxShadow: l.Swatch.boxShadow + ", 0 0 5px " + e$color
    }
  }))
}
Ci.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
}
var Oi = Module_1011.handleHover(Ci)
var ki = function (e) {
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$colors = e.colors
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$circleSize = e.circleSize
  var /* [auto-meaningful-name] */e$styles = e.styles
  var l = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$circleSpacing = e.circleSpacing
  var /* [auto-meaningful-name] */e$className = e.className
  var h = undefined === e$className ? "" : e$className
  var p = Module_101(qt({
    default: {
      card: {
        width: e$width,
        display: "flex",
        flexWrap: "wrap",
        marginRight: -e$circleSpacing,
        marginBottom: -e$circleSpacing
      }
    }
  }, l))
  var _ = function (e, t) {
    return e$onChange({
      hex: e,
      source: "hex"
    }, t)
  }
  return React.createElement("div", {
    style: p.card,
    className: "circle-picker " + h
  }, ii(e$colors, function (e) {
    return React.createElement(Oi, {
      key: e,
      color: e,
      onClick: _,
      onSwatchHover: e$onSwatchHover,
      active: e$hex === e.toLowerCase(),
      circleSize: e$circleSize,
      circleSpacing: e$circleSpacing
    })
  }))
}
ki.propTypes = {
  width: Module_50.oneOfType([Module_50.string, Module_50.number]),
  circleSize: Module_50.number,
  circleSpacing: Module_50.number,
  styles: Module_50.object
}
ki.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [si[500], ci[500], ui[500], li[500], fi[500], di[500], hi[500], pi[500], _i[500], Ai[500], gi[500], vi[500], mi[500], yi[500], bi[500], wi[500], Ei[500], xi[500]],
  styles: {}
}
Fn(ki)
var Si = function (e) {
  return undefined === e
}
export { Tn }
export { Bn }
export { Dn }
export { Fn }
export { Hn }
export { ii }
export { si }
export { ci }
export { ui }
export { li }
export { fi }
export { di }
export { hi }
export { pi }
export { _i }
export { Ai }
export { gi }
export { vi }
export { mi }
export { yi }
export { bi }
export { wi }
export { Ei }
export { xi }
export { Si }
