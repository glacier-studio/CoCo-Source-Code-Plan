/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2583
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Saturation = undefined
var r = function () {
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
var i = require(/* 0 */"react")
var o = u(i)
var a = u(require(/* 101 */"../../797/101/index"))
var s = u(require(/* 2584 */"./2584/index"))
var c = function (e) {
  if (e && e.__esModule) {
    return e
  }
  var t = {}
  if (null != e) {
    for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
      t[n] = e[n]
    }
  }
  t.default = e
  return t
}(require(/* 2587 */"./2587"))
function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var l = exports.Saturation = function (e) {
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
        n.throttle(n.props.onChange, c.calculateChange(e, n.props.hsl, n.container), e)
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
    n.throttle = (0, s.default)(function (e, t, n) {
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
  r(t, [
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
        var u = (0, a.default)({
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
        return o.default.createElement("div", {
          style: u.color,
          ref: function (t) {
            return e.container = t
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        }, o.default.createElement("style", null, "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "), o.default.createElement("div", {
          style: u.white,
          className: "saturation-white"
        }, o.default.createElement("div", {
          style: u.black,
          className: "saturation-black"
        }), o.default.createElement("div", {
          style: u.pointer
        }, this.props.pointer ? o.default.createElement(this.props.pointer, this.props) : o.default.createElement("div", {
          style: u.circle
        }))))
      }
    }
  ])
  return t
}(i.PureComponent || i.Component)
exports.default = l
