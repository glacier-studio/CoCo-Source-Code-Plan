/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1548
 */

"use strict"

var r = require(/* 19 */"../../../../19")
var i = require(/* 54 */"../../../../54")
var o = require(/* 0 */"react")
require(/* 50 */"../../../../50/index")
var a = require(/* 80 */"react-dom")
var s = require(/* 98 */"../../98")
var c = require(/* 287 */"../../../../552/1214/316/287")
var u = require(/* 563 */"../../../../552/1214/316/2682/563")
var l = require(/* 154 */"../154/index")
var f = true
var d = false
var h = null
var p = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
}
function _(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey)) {
    f = true
  }
}
function A() {
  f = false
}
function g() {
  if ("hidden" === this.visibilityState && d) {
    f = true
  }
}
function v(e) {
  var /* [auto-meaningful-name] */e$target = e.target
  try {
    return e$target.matches(":focus-visible")
  } catch (n) {}
  return f || function (e) {
    var /* [auto-meaningful-name] */e$type = e.type
    var /* [auto-meaningful-name] */e$tagName = e.tagName
    return !("INPUT" !== e$tagName || !p[e$type] || e.readOnly) || "TEXTAREA" === e$tagName && !e.readOnly || !!e.isContentEditable
  }(e$target)
}
function m() {
  d = true
  window.clearTimeout(h)
  h = window.setTimeout(function () {
    d = false
  }, 100)
}
function y() {
  return {
    isFocusVisible: v,
    onBlurVisible: m,
    ref: o.useCallback(function (e) {
      var /* [auto-meaningful-name] */n$ownerDocument
      var n = a.findDOMNode(e)
      if (null != n) {
        (n$ownerDocument = n.ownerDocument).addEventListener("keydown", _, true)
        n$ownerDocument.addEventListener("mousedown", A, true)
        n$ownerDocument.addEventListener("pointerdown", A, true)
        n$ownerDocument.addEventListener("touchstart", A, true)
        n$ownerDocument.addEventListener("visibilitychange", g, true)
      }
    }, [])
  }
}
var b = require(/* 79 */"../../../../79/index")
var w = require(/* 2683 */"../2683/index")
var E = "undefined" === typeof window ? o.useEffect : o.useLayoutEffect
var x = function (e) {
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$pulsate = e.pulsate
  var r = undefined !== e$pulsate && e$pulsate
  var /* [auto-meaningful-name] */e$rippleX = e.rippleX
  var /* [auto-meaningful-name] */e$rippleY = e.rippleY
  var /* [auto-meaningful-name] */e$rippleSize = e.rippleSize
  var l = e.in
  var /* [auto-meaningful-name] */e$onExited = e.onExited
  var d = undefined === e$onExited ? function () {} : e$onExited
  var /* [auto-meaningful-name] */e$timeout = e.timeout
  var p = o.useState(false)
  var _ = p[0]
  var A = p[1]
  var g = s.a(e$classes.ripple, e$classes.rippleVisible, r && e$classes.ripplePulsate)
  var v = {
    width: e$rippleSize,
    height: e$rippleSize,
    top: -e$rippleSize / 2 + e$rippleY,
    left: -e$rippleSize / 2 + e$rippleX
  }
  var m = s.a(e$classes.child, _ && e$classes.childLeaving, r && e$classes.childPulsate)
  var y = u.a(d)
  E(function () {
    if (!l) {
      A(true)
      var e = setTimeout(y, e$timeout)
      return function () {
        clearTimeout(e)
      }
    }
  }, [y, l, e$timeout])
  return o.createElement("span", {
    className: g,
    style: v
  }, o.createElement("span", {
    className: m
  }))
}
var C = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$center = e.center
  var a = undefined !== e$center && e$center
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var l = i.a(e, ["center", "classes", "className"])
  var f = o.useState([])
  var d = f[0]
  var h = f[1]
  var p = o.useRef(0)
  var _ = o.useRef(null)
  o.useEffect(function () {
    if (_.current) {
      _.current()
      _.current = null
    }
  }, [d])
  var A = o.useRef(false)
  var g = o.useRef(null)
  var v = o.useRef(null)
  var m = o.useRef(null)
  o.useEffect(function () {
    return function () {
      clearTimeout(g.current)
    }
  }, [])
  var y = o.useCallback(function (e) {
    var /* [auto-meaningful-name] */e$pulsate = e.pulsate
    var /* [auto-meaningful-name] */e$rippleX = e.rippleX
    var /* [auto-meaningful-name] */e$rippleY = e.rippleY
    var /* [auto-meaningful-name] */e$rippleSize = e.rippleSize
    var a = e.cb
    h(function (e) {
      return [].concat(b.a(e), [
        o.createElement(x, {
          key: p.current,
          classes: e$classes,
          timeout: 550,
          pulsate: e$pulsate,
          rippleX: e$rippleX,
          rippleY: e$rippleY,
          rippleSize: e$rippleSize
        })
      ])
    })
    p.current += 1
    _.current = a
  }, [e$classes])
  var E = o.useCallback(function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var n = arguments.length > 2 ? arguments[2] : undefined
    var /* [auto-meaningful-name] */t$pulsate = t.pulsate
    var i = undefined !== t$pulsate && t$pulsate
    var /* [auto-meaningful-name] */t$center = t.center
    var s = undefined === t$center ? a || t.pulsate : t$center
    var /* [auto-meaningful-name] */t$fakeElement = t.fakeElement
    var u = undefined !== t$fakeElement && t$fakeElement
    if ("mousedown" === e.type && A.current) {
      A.current = false
    } else {
      if ("touchstart" === e.type) {
        A.current = true
      }
      var l
      var f
      var d
      var h = u ? null : m.current
      var p = h ? h.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }
      if (s || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches) {
        l = Math.round(p.width / 2)
        f = Math.round(p.height / 2)
      } else {
        var _ = e.touches ? e.touches[0] : e
        var /* [auto-meaningful-name] */_$clientX = _.clientX
        var /* [auto-meaningful-name] */_$clientY = _.clientY
        l = Math.round(_$clientX - p.left)
        f = Math.round(_$clientY - p.top)
      }
      if (s) {
        if ((d = Math.sqrt((2 * Math.pow(p.width, 2) + Math.pow(p.height, 2)) / 3)) % 2 === 0) {
          d += 1
        }
      } else {
        var E = 2 * Math.max(Math.abs((h ? h.clientWidth : 0) - l), l) + 2
        var x = 2 * Math.max(Math.abs((h ? h.clientHeight : 0) - f), f) + 2
        d = Math.sqrt(Math.pow(E, 2) + Math.pow(x, 2))
      }
      if (e.touches) {
        if (null === v.current) {
          v.current = function () {
            y({
              pulsate: i,
              rippleX: l,
              rippleY: f,
              rippleSize: d,
              cb: n
            })
          }
          g.current = setTimeout(function () {
            if (v.current) {
              v.current()
              v.current = null
            }
          }, 80)
        }
      } else {
        y({
          pulsate: i,
          rippleX: l,
          rippleY: f,
          rippleSize: d,
          cb: n
        })
      }
    }
  }, [a, y])
  var C = o.useCallback(function () {
    E({}, {
      pulsate: true
    })
  }, [E])
  var O = o.useCallback(function (e, t) {
    clearTimeout(g.current)
    if ("touchend" === e.type && v.current) {
      e.persist()
      v.current()
      v.current = null
      return void (g.current = setTimeout(function () {
        O(e, t)
      }))
    }
    v.current = null
    h(function (e) {
      return e.length > 0 ? e.slice(1) : e
    })
    _.current = t
  }, [])
  o.useImperativeHandle(t, function () {
    return {
      pulsate: C,
      start: E,
      stop: O
    }
  }, [C, E, O])
  return o.createElement("span", r.a({
    className: s.a(e$classes.root, e$className),
    ref: m
  }, l), o.createElement(w.a, {
    component: null,
    exit: true
  }, d))
})
var O = l.a(function (e) {
  return {
    root: {
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit"
    },
    ripple: {
      opacity: 0,
      position: "absolute"
    },
    rippleVisible: {
      opacity: .3,
      transform: "scale(1)",
      animation: "$enter ".concat(550, "ms ").concat(e.transitions.easing.easeInOut)
    },
    ripplePulsate: {
      animationDuration: "".concat(e.transitions.duration.shorter, "ms")
    },
    child: {
      opacity: 1,
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: "currentColor"
    },
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(550, "ms ").concat(e.transitions.easing.easeInOut)
    },
    childPulsate: {
      position: "absolute",
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(e.transitions.easing.easeInOut, " 200ms infinite")
    },
    "@keyframes enter": {
      "0%": {
        transform: "scale(0)",
        opacity: .1
      },
      "100%": {
        transform: "scale(1)",
        opacity: .3
      }
    },
    "@keyframes exit": {
      "0%": {
        opacity: 1
      },
      "100%": {
        opacity: 0
      }
    },
    "@keyframes pulsate": {
      "0%": {
        transform: "scale(1)"
      },
      "50%": {
        transform: "scale(0.92)"
      },
      "100%": {
        transform: "scale(1)"
      }
    }
  }
}, {
  flip: false,
  name: "MuiTouchRipple"
})(o.memo(C))
var k = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$action = e.action
  var /* [auto-meaningful-name] */e$buttonRef = e.buttonRef
  var /* [auto-meaningful-name] */e$centerRipple = e.centerRipple
  var d = undefined !== e$centerRipple && e$centerRipple
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$component = e.component
  var g = undefined === e$component ? "button" : e$component
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var m = undefined !== e$disabled && e$disabled
  var /* [auto-meaningful-name] */e$disableRipple = e.disableRipple
  var w = undefined !== e$disableRipple && e$disableRipple
  var /* [auto-meaningful-name] */e$disableTouchRipple = e.disableTouchRipple
  var x = undefined !== e$disableTouchRipple && e$disableTouchRipple
  var /* [auto-meaningful-name] */e$focusRipple = e.focusRipple
  var k = undefined !== e$focusRipple && e$focusRipple
  var /* [auto-meaningful-name] */e$focusVisibleClassName = e.focusVisibleClassName
  var /* [auto-meaningful-name] */e$onBlur = e.onBlur
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onFocus = e.onFocus
  var /* [auto-meaningful-name] */e$onFocusVisible = e.onFocusVisible
  var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
  var /* [auto-meaningful-name] */e$onKeyUp = e.onKeyUp
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onMouseLeave = e.onMouseLeave
  var /* [auto-meaningful-name] */e$onMouseUp = e.onMouseUp
  var /* [auto-meaningful-name] */e$onTouchEnd = e.onTouchEnd
  var /* [auto-meaningful-name] */e$onTouchMove = e.onTouchMove
  var /* [auto-meaningful-name] */e$onTouchStart = e.onTouchStart
  var /* [auto-meaningful-name] */e$onDragLeave = e.onDragLeave
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  var G = undefined === e$tabIndex ? 0 : e$tabIndex
  var /* [auto-meaningful-name] */e$TouchRippleProps = e.TouchRippleProps
  var /* [auto-meaningful-name] */e$type = e.type
  var W = undefined === e$type ? "button" : e$type
  var K = i.a(e, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"])
  var X = o.useRef(null)
  var Y = o.useRef(null)
  var q = o.useState(false)
  var $ = q[0]
  var J = q[1]
  if (m && $) {
    J(false)
  }
  var Z = y()
  var /* [auto-meaningful-name] */Z$isFocusVisible = Z.isFocusVisible
  var /* [auto-meaningful-name] */Z$onBlurVisible = Z.onBlurVisible
  var /* [auto-meaningful-name] */Z$ref = Z.ref
  function re(e, t) {
    var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : x
    return u.a(function (r) {
      if (t) {
        t(r)
      }
      if (!n && Y.current) {
        Y.current[e](r)
      }
      return true
    })
  }
  o.useImperativeHandle(e$action, function () {
    return {
      focusVisible: function () {
        J(true)
        X.current.focus()
      }
    }
  }, [])
  o.useEffect(function () {
    if ($ && k && !w) {
      Y.current.pulsate()
    }
  }, [w, k, $])
  var ie = re("start", e$onMouseDown)
  var oe = re("stop", e$onDragLeave)
  var ae = re("stop", e$onMouseUp)
  var se = re("stop", function (e) {
    if ($) {
      e.preventDefault()
    }
    if (e$onMouseLeave) {
      e$onMouseLeave(e)
    }
  })
  var ce = re("start", e$onTouchStart)
  var ue = re("stop", e$onTouchEnd)
  var le = re("stop", e$onTouchMove)
  var fe = re("stop", function (e) {
    if ($) {
      Z$onBlurVisible(e)
      J(false)
    }
    if (e$onBlur) {
      e$onBlur(e)
    }
  }, false)
  var de = u.a(function (e) {
    if (!X.current) {
      X.current = e.currentTarget
    }
    if (Z$isFocusVisible(e)) {
      J(true)
      if (e$onFocusVisible) {
        e$onFocusVisible(e)
      }
    }
    if (e$onFocus) {
      e$onFocus(e)
    }
  })
  var he = function () {
    var e = a.findDOMNode(X.current)
    return g && "button" !== g && !("A" === e.tagName && e.href)
  }
  var pe = o.useRef(false)
  var _e = u.a(function (e) {
    if (k && !pe.current && $ && Y.current && " " === e.key) {
      pe.current = true
      e.persist()
      Y.current.stop(e, function () {
        Y.current.start(e)
      })
    }
    if (e.target === e.currentTarget && he() && " " === e.key) {
      e.preventDefault()
    }
    if (e$onKeyDown) {
      e$onKeyDown(e)
    }
    if (e.target === e.currentTarget && he() && "Enter" === e.key && !m) {
      e.preventDefault()
      if (e$onClick) {
        e$onClick(e)
      }
    }
  })
  var Ae = u.a(function (e) {
    if (k && " " === e.key && Y.current && $ && !e.defaultPrevented) {
      pe.current = false
      e.persist()
      Y.current.stop(e, function () {
        Y.current.pulsate(e)
      })
    }
    if (e$onKeyUp) {
      e$onKeyUp(e)
    }
    if (e$onClick && e.target === e.currentTarget && he() && " " === e.key && !e.defaultPrevented) {
      e$onClick(e)
    }
  })
  var ge = g
  if ("button" === ge && K.href) {
    ge = "a"
  }
  var ve = {}
  if ("button" === ge) {
    ve.type = W
    ve.disabled = m
  } else {
    if (!("a" === ge && K.href)) {
      ve.role = "button"
    }
    ve["aria-disabled"] = m
  }
  var me = c.a(e$buttonRef, t)
  var ye = c.a(Z$ref, X)
  var be = c.a(me, ye)
  var we = o.useState(false)
  var Ee = we[0]
  var xe = we[1]
  o.useEffect(function () {
    xe(true)
  }, [])
  var Ce = Ee && !w && !m
  return o.createElement(ge, r.a({
    className: s.a(e$classes.root, e$className, $ && [e$classes.focusVisible, e$focusVisibleClassName], m && e$classes.disabled),
    onBlur: fe,
    onClick: e$onClick,
    onFocus: de,
    onKeyDown: _e,
    onKeyUp: Ae,
    onMouseDown: ie,
    onMouseLeave: se,
    onMouseUp: ae,
    onDragLeave: oe,
    onTouchEnd: ue,
    onTouchMove: le,
    onTouchStart: ce,
    ref: be,
    tabIndex: m ? -1 : G
  }, ve, K), e$children, Ce ? o.createElement(O, r.a({
    ref: Y,
    center: d
  }, e$TouchRippleProps)) : null)
})
exports.a = l.a({
  root: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    "&$disabled": {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  },
  disabled: {},
  focusVisible: {}
}, {
  name: "MuiButtonBase"
})(k)
