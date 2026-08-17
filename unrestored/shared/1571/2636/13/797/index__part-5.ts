/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：797__part-5
 */

"use strict"

import { B } from "./index__part-1"
import { Z, ee, te, Le, je, Ue, He, Ve } from "./index__part-2"
import { We, Ke, qe, Ze, et, tt, at, st, ut, lt } from "./index__part-3"
import { gt, mt, yt } from "./index__part-4"
import * as /* [auto-meaningful-name] */Module_740 from /* 740 */"./740/index"
import * as /* [auto-meaningful-name] */Module_1505 from /* 1505 */"./1505"
import * as /* [auto-meaningful-name] */Module_325 from /* 325 */"./325"
import /* [auto-meaningful-name] */Module_50 from /* 50 */"../../50/index"
import /* [auto-meaningful-name] */Module_101 from /* 101 */"./101/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { PureComponent, Component } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1199 from /* 1199 */"./1199/index"
var wt = Module_1199.a && Module_1199.a.isTypedArray
var Et = wt ? yt(wt) : mt
var xt = function (e, t) {
  if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) {
    return e[t]
  }
}
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
var Ot = function (e, t, n) {
  var r = e[t]
  if (!(Object$prototype$hasOwnProperty.call(e, t) && B(r, n) && (undefined !== n || t in e))) {
    Ue(e, t, n)
  }
}
var kt = function (e, t, n, r) {
  var i = !n
  if (!n) {
    n = {}
  }
  for (var o = -1, /* [auto-meaningful-name] */t$length = t.length; ++o < t$length;) {
    var s = t[o]
    var c = r ? r(n[s], e[s], s, n, e) : undefined
    if (undefined === c) {
      c = e[s]
    }
    if (i) {
      Ue(n, s, c)
    } else {
      Ot(n, s, c)
    }
  }
  return n
}
var St = function (e, t) {
  for (var n = -1, r = Array(e); ++n < e;) {
    r[n] = t(n)
  }
  return r
}
var Tt = /^(?:0|[1-9]\d*)$/
var Bt = function (e, t) {
  var n = typeof e
  return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && Tt.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty1 = Object.prototype.hasOwnProperty
var It = function (e, t) {
  var n = st(e)
  var r = !n && at(e)
  var i = !n && !r && Module_740.a(e)
  var o = !n && !r && !i && Et(e)
  var a = n || r || i || o
  var s = a ? St(e.length, String) : []
  var /* [auto-meaningful-name] */s$length = s.length
  for (var u in e) if (!(!t && !Object$prototype$hasOwnProperty1.call(e, u) || a && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Bt(u, s$length)))) {
    s.push(u)
  }
  return s
}
var Rt = function (e) {
  var t = []
  if (null != e) {
    for (var n in Object(e)) t.push(n)
  }
  return t
}
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty2 = Object.prototype.hasOwnProperty
var Pt = function (e) {
  if (!ee(e)) {
    return Rt(e)
  }
  var t = Ze(e)
  var n = []
  for (var r in e) if ("constructor" != r || !t && Object$prototype$hasOwnProperty2.call(e, r)) {
    n.push(r)
  }
  return n
}
var Nt = function (e) {
  return ut(e) ? It(e, true) : Pt(e)
}
var Mt = function (e) {
  return kt(e, Nt(e))
}
var Lt = function (e, t, n, r, i, o, a) {
  var s = xt(e, n)
  var c = xt(t, n)
  var u = a.get(c)
  if (u) {
    He(e, n, u)
  } else {
    var l = o ? o(s, c, n + "", e, t, a) : undefined
    var f = undefined === l
    if (f) {
      var d = st(c)
      var h = !d && Module_740.a(c)
      var p = !d && !h && Et(c)
      l = c
      if (d || h || p) {
        if (st(s)) {
          l = s
        } else {
          if (lt(s)) {
            l = Ke(s)
          } else {
            if (h) {
              f = false
              l = Module_1505.a(c, true)
            } else {
              if (p) {
                f = false
                l = We(c, true)
              } else {
                l = []
              }
            }
          }
        }
      } else {
        if (gt(c) || at(c)) {
          l = s
          if (at(s)) {
            l = Mt(s)
          } else {
            if (!(ee(s) && !te(s))) {
              l = et(c)
            }
          }
        } else {
          f = false
        }
      }
    }
    if (f) {
      a.set(c, l)
      i(l, c, r, o, a)
      a.delete(c)
    }
    He(e, n, l)
  }
}
var jt = function e(t, n, r, i, o) {
  if (t !== n) {
    Ve(n, function (a, s) {
      if (!o) {
        o = new Le()
      }
      if (ee(a)) {
        Lt(t, n, s, r, e, i, o)
      } else {
        var c = i ? i(xt(t, s), a, s + "", t, n, o) : undefined
        if (undefined === c) {
          c = a
        }
        He(t, s, c)
      }
    }, Nt)
  }
}
var Ut = function (e) {
  return e
}
var Ht = function (e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t)
    case 1:
      return e.call(t, n[0])
    case 2:
      return e.call(t, n[0], n[1])
    case 3:
      return e.call(t, n[0], n[1], n[2])
  }
  return e.apply(t, n)
}
var /* [auto-meaningful-name] */Math$max = Math.max
var Gt = function (e, t, n) {
  t = Math$max(undefined === t ? e.length - 1 : t, 0)
  return function () {
    for (var r = arguments, i = -1, o = Math$max(r.length - t, 0), a = Array(o); ++i < o;) {
      a[i] = r[t + i]
    }
    i = -1
    for (var s = Array(t + 1); ++i < t;) {
      s[i] = r[i]
    }
    s[t] = n(a)
    return Ht(e, this, s)
  }
}
var zt = function (e) {
  return function () {
    return e
  }
}
var Qt = je ? function (e, t) {
  return je(e, "toString", {
    configurable: true,
    enumerable: false,
    value: zt(t),
    writable: true
  })
} : Ut
var /* [auto-meaningful-name] */Date$now = Date.now
var Kt = function (e) {
  var t = 0
  var n = 0
  return function () {
    var r = Date$now()
    var i = 16 - (r - n)
    n = r
    if (i > 0) {
      if (++t >= 800) {
        return arguments[0]
      }
    } else {
      t = 0
    }
    return e.apply(undefined, arguments)
  }
}(Qt)
var Xt = function (e, t) {
  return Kt(Gt(e, t, Ut), e + "")
}
var Yt = function (e, t, n) {
  if (!ee(n)) {
    return false
  }
  var r = typeof t
  return !!("number" == r ? ut(n) && Bt(t, n.length) : "string" == r && t in n) && B(n[t], e)
}
var qt = function (e) {
  return Xt(function (t, n) {
    var r = -1
    var /* [auto-meaningful-name] */n$length = n.length
    var o = n$length > 1 ? n[n$length - 1] : undefined
    var a = n$length > 2 ? n[2] : undefined
    for (o = e.length > 3 && "function" == typeof o ? (n$length--, o) : undefined, a && Yt(n[0], n[1], a) && (o = n$length < 3 ? undefined : o, n$length = 1), t = Object(t); ++r < n$length;) {
      var s = n[r]
      if (s) {
        e(t, s, r, o)
      }
    }
    return t
  })
}(function (e, t, n) {
  jt(e, t, n)
})
var $t = function (e) {
  var /* [auto-meaningful-name] */e$zDepth = e.zDepth
  var /* [auto-meaningful-name] */e$radius = e.radius
  var /* [auto-meaningful-name] */e$background = e.background
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$styles = e.styles
  var c = undefined === e$styles ? {} : e$styles
  var u = Module_101(qt({
    default: {
      wrap: {
        position: "relative",
        display: "inline-block"
      },
      content: {
        position: "relative"
      },
      bg: {
        absolute: "0px 0px 0px 0px",
        boxShadow: "0 " + e$zDepth + "px " + 4 * e$zDepth + "px rgba(0,0,0,.24)",
        borderRadius: e$radius,
        background: e$background
      }
    },
    "zDepth-0": {
      bg: {
        boxShadow: "none"
      }
    },
    "zDepth-1": {
      bg: {
        boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
      }
    },
    "zDepth-2": {
      bg: {
        boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
      }
    },
    "zDepth-3": {
      bg: {
        boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
      }
    },
    "zDepth-4": {
      bg: {
        boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
      }
    },
    "zDepth-5": {
      bg: {
        boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
      }
    },
    square: {
      bg: {
        borderRadius: "0"
      }
    },
    circle: {
      bg: {
        borderRadius: "50%"
      }
    }
  }, c), {
    "zDepth-1": 1 === e$zDepth
  })
  return React.createElement("div", {
    style: u.wrap
  }, React.createElement("div", {
    style: u.bg
  }), React.createElement("div", {
    style: u.content
  }, e$children))
}
$t.propTypes = {
  background: Module_50.string,
  zDepth: Module_50.oneOf([0, 1, 2, 3, 4, 5]),
  radius: Module_50.number,
  styles: Module_50.object
}
$t.defaultProps = {
  background: "#fff",
  zDepth: 1,
  radius: 2,
  styles: {}
}
var Jt = $t
var Zt = function () {
  return Module_325.a.Date.now()
}
var en = /\s/
var tn = function (e) {
  for (var /* [auto-meaningful-name] */e$length = e.length; e$length-- && en.test(e.charAt(e$length));) {
    ;
  }
  return e$length
}
var nn = /^\s+/
var rn = function (e) {
  return e ? e.slice(0, tn(e) + 1).replace(nn, "") : e
}
var on = function (e) {
  return "symbol" == typeof e || tt(e) && "[object Symbol]" == Z(e)
}
var an = /^[-+]0x[0-9a-f]+$/i
var sn = /^0b[01]+$/i
var cn = /^0o[0-7]+$/i
var un = parseInt
var ln = function (e) {
  if ("number" == typeof e) {
    return e
  }
  if (on(e)) {
    return NaN
  }
  if (ee(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e
    e = ee(t) ? t + "" : t
  }
  if ("string" != typeof e) {
    return 0 === e ? e : +e
  }
  e = rn(e)
  var n = sn.test(e)
  return n || cn.test(e) ? un(e.slice(2), n ? 2 : 8) : an.test(e) ? NaN : +e
}
var /* [auto-meaningful-name] */Math$max1 = Math.max
var /* [auto-meaningful-name] */Math$min = Math.min
var hn = function (e, t, n) {
  var r
  var i
  var o
  var a
  var s
  var c
  var u = 0
  var l = false
  var f = false
  var d = true
  if ("function" != typeof e) {
    throw new TypeError("Expected a function")
  }
  function h(t) {
    var n = r
    var o = i
    r = i = undefined
    u = t
    return a = e.apply(o, n)
  }
  function p(e) {
    u = e
    s = setTimeout(A, t)
    return l ? h(e) : a
  }
  function _(e) {
    var n = e - c
    return undefined === c || n >= t || n < 0 || f && e - u >= o
  }
  function A() {
    var e = Zt()
    if (_(e)) {
      return g(e)
    }
    s = setTimeout(A, function (e) {
      var n = t - (e - c)
      return f ? Math$min(n, o - (e - u)) : n
    }(e))
  }
  function g(e) {
    s = undefined
    return d && r ? h(e) : (r = i = undefined, a)
  }
  function v() {
    var e = Zt()
    var n = _(e)
    r = arguments
    i = this
    c = e
    if (n) {
      if (undefined === s) {
        return p(c)
      }
      if (f) {
        clearTimeout(s)
        s = setTimeout(A, t)
        return h(c)
      }
    }
    if (undefined === s) {
      s = setTimeout(A, t)
    }
    return a
  }
  t = ln(t) || 0
  if (ee(n)) {
    l = !!n.leading
    o = (f = "maxWait" in n) ? Math$max1(ln(n.maxWait) || 0, t) : o
    d = "trailing" in n ? !!n.trailing : d
  }
  v.cancel = function () {
    if (undefined !== s) {
      clearTimeout(s)
    }
    u = 0
    r = c = i = s = undefined
  }
  v.flush = function () {
    return undefined === s ? a : g(Zt())
  }
  return v
}
var pn = function (e, t, n) {
  var r = true
  var i = true
  if ("function" != typeof e) {
    throw new TypeError("Expected a function")
  }
  if (ee(n)) {
    r = "leading" in n ? !!n.leading : r
    i = "trailing" in n ? !!n.trailing : i
  }
  return hn(e, t, {
    leading: r,
    maxWait: t,
    trailing: i
  })
}
var _n = function () {
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
var An = function (e) {
  function t(e) {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }(this, t)
    var n = function (e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
    n.handleChange = function (e) {
      if ("function" === typeof n.props.onChange) {
        n.throttle(n.props.onChange, function (e, t, n) {
          var r = n.getBoundingClientRect()
          var /* [auto-meaningful-name] */r$width = r.width
          var /* [auto-meaningful-name] */r$height = r.height
          var a = "number" === typeof e.pageX ? e.pageX : e.touches[0].pageX
          var s = "number" === typeof e.pageY ? e.pageY : e.touches[0].pageY
          var c = a - (n.getBoundingClientRect().left + window.pageXOffset)
          var u = s - (n.getBoundingClientRect().top + window.pageYOffset)
          if (c < 0) {
            c = 0
          } else {
            if (c > r$width) {
              c = r$width
            }
          }
          if (u < 0) {
            u = 0
          } else {
            if (u > r$height) {
              u = r$height
            }
          }
          var l = c / r$width
          var f = 1 - u / r$height
          return {
            h: t.h,
            s: l,
            v: f,
            a: t.a,
            source: "hsv"
          }
        }(e, n.props.hsl, n.container), e)
      }
    }
    n.handleMouseDown = function (e) {
      n.handleChange(e)
      var t = n.getContainerRenderWindow()
      t.addEventListener("mousemove", n.handleChange)
      t.addEventListener("mouseup", n.handleMouseUp)
    }
    n.handleMouseUp = function () {
      n.unbindEventListeners()
    }
    n.throttle = pn(function (e, t, n) {
      e(t, n)
    }, 50)
    return n
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
  })(t, e)
  _n(t, [
    {
      key: "componentWillUnmount",
      value: function () {
        this.throttle.cancel()
        this.unbindEventListeners()
      }
    }, {
      key: "getContainerRenderWindow",
      value: function () {
        for (var /* [auto-meaningful-name] */this$container = this.container, t = window; !t.document.contains(this$container) && t.parent !== t;) {
          t = t.parent
        }
        return t
      }
    }, {
      key: "unbindEventListeners",
      value: function () {
        var e = this.getContainerRenderWindow()
        e.removeEventListener("mousemove", this.handleChange)
        e.removeEventListener("mouseup", this.handleMouseUp)
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var t = this.props.style || {}
        var /* [auto-meaningful-name] */t$color = t.color
        var /* [auto-meaningful-name] */t$white = t.white
        var /* [auto-meaningful-name] */t$black = t.black
        var /* [auto-meaningful-name] */t$pointer = t.pointer
        var /* [auto-meaningful-name] */t$circle = t.circle
        var u = Module_101({
          default: {
            color: {
              absolute: "0px 0px 0px 0px",
              background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
              borderRadius: this.props.radius
            },
            white: {
              absolute: "0px 0px 0px 0px",
              borderRadius: this.props.radius
            },
            black: {
              absolute: "0px 0px 0px 0px",
              boxShadow: this.props.shadow,
              borderRadius: this.props.radius
            },
            pointer: {
              position: "absolute",
              top: -100 * this.props.hsv.v + 100 + "%",
              left: 100 * this.props.hsv.s + "%",
              cursor: "default"
            },
            circle: {
              width: "4px",
              height: "4px",
              boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
              borderRadius: "50%",
              cursor: "hand",
              transform: "translate(-2px, -2px)"
            }
          },
          custom: {
            color: t$color,
            white: t$white,
            black: t$black,
            pointer: t$pointer,
            circle: t$circle
          }
        }, {
          custom: !!this.props.style
        })
        return React.createElement("div", {
          style: u.color,
          ref: function (t) {
            return e.container = t
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        }, React.createElement("style", null, "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "), React.createElement("div", {
          style: u.white,
          className: "saturation-white"
        }, React.createElement("div", {
          style: u.black,
          className: "saturation-black"
        }), React.createElement("div", {
          style: u.pointer
        }, this.props.pointer ? React.createElement(this.props.pointer, this.props) : React.createElement("div", {
          style: u.circle
        }))))
      }
    }
  ])
  return t
}(PureComponent || Component)
var gn = function (e, t) {
  for (var n = -1, r = null == e ? 0 : e.length; ++n < r && false !== t(e[n], n, e);) {
    ;
  }
  return e
}
var vn = qe(Object.keys, Object)
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty3 = Object.prototype.hasOwnProperty
var yn = function (e) {
  if (!Ze(e)) {
    return vn(e)
  }
  var t = []
  for (var n in Object(e)) if (Object$prototype$hasOwnProperty3.call(e, n) && "constructor" != n) {
    t.push(n)
  }
  return t
}
var bn = function (e) {
  return ut(e) ? It(e) : yn(e)
}
var wn = function (e, t) {
  return function (n, r) {
    if (null == n) {
      return n
    }
    if (!ut(n)) {
      return e(n, r)
    }
    for (var /* [auto-meaningful-name] */n$length = n.length, o = t ? n$length : -1, a = Object(n); (t ? o-- : ++o < n$length) && false !== r(a[o], o, a);) {
      ;
    }
    return n
  }
}(function (e, t) {
  return e && Ve(e, t, bn)
})
var En = function (e) {
  return "function" == typeof e ? e : Ut
}
var xn = function (e, t) {
  return (st(e) ? gn : wn)(e, En(t))
}
export { Et }
export { Bt }
export { Ut }
export { qt }
export { Jt }
export { on }
export { hn }
export { An }
export { bn }
export { wn }
export { xn }
