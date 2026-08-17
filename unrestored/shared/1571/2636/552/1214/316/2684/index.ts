/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2684
 */

"use strict"

var r = require(/* 19 */"../../../../19")
var i = require(/* 54 */"../../../../54")
var o = require(/* 0 */"react")
require(/* 50 */"../../../../50/index")
var a = require(/* 80 */"react-dom")
var s = require(/* 1029 */"../../../../551/1211/269/1029")
var c = require(/* 98 */"../../../../551/1211/98")
var u = require(/* 391 */"../../../../551/1211/269/391")
var l = require(/* 1027 */"./1027")
var f = require(/* 922 */"./922")
var d = require(/* 154 */"../../../../551/1211/699/154/index")
var h = require(/* 2682 */"../2682/index")
var p = require(/* 40 */"../../../../40/index")
var _ = require(/* 1546 */"../../../../551/1211/699/1546")
var A = require(/* 690 */"../../690/index")
var g = require(/* 701 */"../701")
var v = require(/* 287 */"../287")
function m(e) {
  return "scale(".concat(e, ", ").concat(Math.pow(e, 2), ")")
}
var y = {
  entering: {
    opacity: 1,
    transform: m(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}
var b = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$disableStrictModeCompat = e.disableStrictModeCompat
  var s = undefined !== e$disableStrictModeCompat && e$disableStrictModeCompat
  var c = e.in
  var /* [auto-meaningful-name] */e$onEnter = e.onEnter
  var /* [auto-meaningful-name] */e$onEntered = e.onEntered
  var /* [auto-meaningful-name] */e$onEntering = e.onEntering
  var /* [auto-meaningful-name] */e$onExit = e.onExit
  var /* [auto-meaningful-name] */e$onExited = e.onExited
  var /* [auto-meaningful-name] */e$onExiting = e.onExiting
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$timeout = e.timeout
  var x = undefined === e$timeout ? "auto" : e$timeout
  var /* [auto-meaningful-name] */e$TransitionComponent = e.TransitionComponent
  var O = undefined === e$TransitionComponent ? _.a : e$TransitionComponent
  var k = i.a(e, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"])
  var S = o.useRef()
  var T = o.useRef()
  var B = A.a()
  var D = B.unstable_strictMode && !s
  var I = o.useRef(null)
  var R = v.a(e$children.ref, t)
  var F = v.a(D ? I : undefined, R)
  var P = function (e) {
    return function (t, n) {
      if (e) {
        var r = D ? [I.current, t] : [t, n]
        var i = p.a(r, 2)
        var o = i[0]
        var a = i[1]
        if (undefined === a) {
          e(o)
        } else {
          e(o, a)
        }
      }
    }
  }
  var N = P(e$onEntering)
  var M = P(function (e, t) {
    g.b(e)
    var n
    var r = g.a({
      style: e$style,
      timeout: x
    }, {
      mode: "enter"
    })
    var /* [auto-meaningful-name] */r$duration = r.duration
    var /* [auto-meaningful-name] */r$delay = r.delay
    if ("auto" === x) {
      n = B.transitions.getAutoHeightDuration(e.clientHeight)
      T.current = n
    } else {
      n = r$duration
    }
    e.style.transition = [
      B.transitions.create("opacity", {
        duration: n,
        delay: r$delay
      }), B.transitions.create("transform", {
        duration: .666 * n,
        delay: r$delay
      })
    ].join(",")
    if (e$onEnter) {
      e$onEnter(e, t)
    }
  })
  var L = P(e$onEntered)
  var j = P(e$onExiting)
  var U = P(function (e) {
    var t
    var n = g.a({
      style: e$style,
      timeout: x
    }, {
      mode: "exit"
    })
    var /* [auto-meaningful-name] */n$duration = n.duration
    var /* [auto-meaningful-name] */n$delay = n.delay
    if ("auto" === x) {
      t = B.transitions.getAutoHeightDuration(e.clientHeight)
      T.current = t
    } else {
      t = n$duration
    }
    e.style.transition = [
      B.transitions.create("opacity", {
        duration: t,
        delay: n$delay
      }), B.transitions.create("transform", {
        duration: .666 * t,
        delay: n$delay || .333 * t
      })
    ].join(",")
    e.style.opacity = "0"
    e.style.transform = m(.75)
    if (e$onExit) {
      e$onExit(e)
    }
  })
  var H = P(e$onExited)
  o.useEffect(function () {
    return function () {
      clearTimeout(S.current)
    }
  }, [])
  return o.createElement(O, r.a({
    appear: true,
    in: c,
    nodeRef: D ? I : undefined,
    onEnter: M,
    onEntered: L,
    onEntering: N,
    onExit: U,
    onExited: H,
    onExiting: j,
    addEndListener: function (e, t) {
      var n = D ? e : t
      if ("auto" === x) {
        S.current = setTimeout(n, T.current || 0)
      }
    },
    timeout: "auto" === x ? null : x
  }, k), function (e, t) {
    return o.cloneElement(e$children, r.a({
      style: r.a({
        opacity: 0,
        transform: m(.75),
        visibility: "exited" !== e || c ? undefined : "hidden"
      }, y[e], e$style, e$children.props.style),
      ref: F
    }, t))
  })
})
b.muiSupportAuto = true
var w = b
var E = require(/* 2676 */"../2676")
function x(e, t) {
  var n = 0
  if ("number" === typeof t) {
    n = t
  } else {
    if ("center" === t) {
      n = e.height / 2
    } else {
      if ("bottom" === t) {
        n = e.height
      }
    }
  }
  return n
}
function C(e, t) {
  var n = 0
  if ("number" === typeof t) {
    n = t
  } else {
    if ("center" === t) {
      n = e.width / 2
    } else {
      if ("right" === t) {
        n = e.width
      }
    }
  }
  return n
}
function O(e) {
  return [e.horizontal, e.vertical].map(function (e) {
    return "number" === typeof e ? "".concat(e, "px") : e
  }).join(" ")
}
function k(e) {
  return "function" === typeof e ? e() : e
}
var S = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$action = e.action
  var /* [auto-meaningful-name] */e$anchorEl = e.anchorEl
  var /* [auto-meaningful-name] */e$anchorOrigin = e.anchorOrigin
  var _ = undefined === e$anchorOrigin ? {
    vertical: "top",
    horizontal: "left"
  } : e$anchorOrigin
  var /* [auto-meaningful-name] */e$anchorPosition = e.anchorPosition
  var /* [auto-meaningful-name] */e$anchorReference = e.anchorReference
  var v = undefined === e$anchorReference ? "anchorEl" : e$anchorReference
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$container = e.container
  var /* [auto-meaningful-name] */e$elevation = e.elevation
  var B = undefined === e$elevation ? 8 : e$elevation
  var /* [auto-meaningful-name] */e$getContentAnchorEl = e.getContentAnchorEl
  var /* [auto-meaningful-name] */e$marginThreshold = e.marginThreshold
  var R = undefined === e$marginThreshold ? 16 : e$marginThreshold
  var /* [auto-meaningful-name] */e$onEnter = e.onEnter
  var /* [auto-meaningful-name] */e$onEntered = e.onEntered
  var /* [auto-meaningful-name] */e$onEntering = e.onEntering
  var /* [auto-meaningful-name] */e$onExit = e.onExit
  var /* [auto-meaningful-name] */e$onExited = e.onExited
  var /* [auto-meaningful-name] */e$onExiting = e.onExiting
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$PaperProps = e.PaperProps
  var V = undefined === e$PaperProps ? {} : e$PaperProps
  var /* [auto-meaningful-name] */e$transformOrigin = e.transformOrigin
  var z = undefined === e$transformOrigin ? {
    vertical: "top",
    horizontal: "left"
  } : e$transformOrigin
  var /* [auto-meaningful-name] */e$TransitionComponent = e.TransitionComponent
  var W = undefined === e$TransitionComponent ? w : e$TransitionComponent
  var /* [auto-meaningful-name] */e$transitionDuration = e.transitionDuration
  var X = undefined === e$transitionDuration ? "auto" : e$transitionDuration
  var /* [auto-meaningful-name] */e$TransitionProps = e.TransitionProps
  var q = undefined === e$TransitionProps ? {} : e$TransitionProps
  var $ = i.a(e, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"])
  var J = o.useRef()
  var Z = o.useCallback(function (e) {
    if ("anchorPosition" === v) {
      return e$anchorPosition
    }
    var t = k(e$anchorEl)
    var n = (t && 1 === t.nodeType ? t : u.a(J.current).body).getBoundingClientRect()
    var r = 0 === e ? _.vertical : "center"
    return {
      top: n.top + x(n, r),
      left: n.left + C(n, _.horizontal)
    }
  }, [e$anchorEl, _.horizontal, _.vertical, e$anchorPosition, v])
  var ee = o.useCallback(function (e) {
    var t = 0
    if (e$getContentAnchorEl && "anchorEl" === v) {
      var n = e$getContentAnchorEl(e)
      if (n && e.contains(n)) {
        var r = function (e, t) {
          for (var n = t, r = 0; n && n !== e;) {
            r += (n = n.parentElement).scrollTop
          }
          return r
        }(e, n)
        t = n.offsetTop + n.clientHeight / 2 - r || 0
      }
      0
    }
    return t
  }, [_.vertical, v, e$getContentAnchorEl])
  var te = o.useCallback(function (e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
    return {
      vertical: x(e, z.vertical) + t,
      horizontal: C(e, z.horizontal)
    }
  }, [z.horizontal, z.vertical])
  var ne = o.useCallback(function (e) {
    var t = ee(e)
    var n = {
      width: e.offsetWidth,
      height: e.offsetHeight
    }
    var r = te(n, t)
    if ("none" === v) {
      return {
        top: null,
        left: null,
        transformOrigin: O(r)
      }
    }
    var i = Z(t)
    var o = i.top - r.vertical
    var a = i.left - r.horizontal
    var s = o + n.height
    var c = a + n.width
    var u = l.a(k(e$anchorEl))
    var f = u.innerHeight - R
    var h = u.innerWidth - R
    if (o < R) {
      var p = o - R
      o -= p
      r.vertical += p
    } else if (s > f) {
      var _ = s - f
      o -= _
      r.vertical += _
    }
    if (a < R) {
      var A = a - R
      a -= A
      r.horizontal += A
    } else if (c > h) {
      var g = c - h
      a -= g
      r.horizontal += g
    }
    return {
      top: "".concat(Math.round(o), "px"),
      left: "".concat(Math.round(a), "px"),
      transformOrigin: O(r)
    }
  }, [e$anchorEl, v, Z, ee, te, R])
  var re = o.useCallback(function () {
    var /* [auto-meaningful-name] */J$current = J.current
    if (J$current) {
      var t = ne(J$current)
      if (null !== t.top) {
        J$current.style.top = t.top
      }
      if (null !== t.left) {
        J$current.style.left = t.left
      }
      J$current.style.transformOrigin = t.transformOrigin
    }
  }, [ne])
  var ie = o.useCallback(function (e) {
    J.current = a.findDOMNode(e)
  }, [])
  o.useEffect(function () {
    if (e$open) {
      re()
    }
  })
  o.useImperativeHandle(e$action, function () {
    return e$open ? {
      updatePosition: function () {
        re()
      }
    } : null
  }, [e$open, re])
  o.useEffect(function () {
    if (e$open) {
      var e = s.a(function () {
        re()
      })
      window.addEventListener("resize", e)
      return function () {
        e.clear()
        window.removeEventListener("resize", e)
      }
    }
  }, [e$open, re])
  var oe = X
  if (!("auto" !== X || W.muiSupportAuto)) {
    oe = undefined
  }
  var ae = e$container || (e$anchorEl ? u.a(k(e$anchorEl)).body : undefined)
  return o.createElement(h.a, r.a({
    container: ae,
    open: e$open,
    ref: t,
    BackdropProps: {
      invisible: true
    },
    className: c.a(e$classes.root, e$className)
  }, $), o.createElement(W, r.a({
    appear: true,
    in: e$open,
    onEnter: e$onEnter,
    onEntered: e$onEntered,
    onExit: e$onExit,
    onExited: e$onExited,
    onExiting: e$onExiting,
    timeout: oe
  }, q, {
    onEntering: f.a(function (e, t) {
      if (e$onEntering) {
        e$onEntering(e, t)
      }
      re()
    }, q.onEntering)
  }), o.createElement(E.a, r.a({
    elevation: B,
    ref: ie
  }, V, {
    className: c.a(e$classes.paper, V.className)
  }), e$children)))
})
exports.a = d.a({
  root: {},
  paper: {
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0
  }
}, {
  name: "MuiPopover"
})(S)
