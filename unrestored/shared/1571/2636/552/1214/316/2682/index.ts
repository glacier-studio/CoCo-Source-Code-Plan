/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2682
 */

"use strict"

var r = require(/* 54 */"../../../../54")
var i = require(/* 19 */"../../../../19")
var o = require(/* 0 */"react")
var a = require(/* 80 */"react-dom")
require(/* 50 */"../../../../50/index")
var s = require(/* 2645 */"../../690/2645")
var c = require(/* 2677 */"../../../../551/1211/699/154/2677")
var u = require(/* 391 */"../../../../551/1211/269/391")
var l = require(/* 697 */"../../../../551/1211/269/697")
var f = require(/* 287 */"../287")
var d = "undefined" !== typeof window ? o.useLayoutEffect : o.useEffect
var h = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$container = e.container
  var /* [auto-meaningful-name] */e$disablePortal = e.disablePortal
  var s = undefined !== e$disablePortal && e$disablePortal
  var /* [auto-meaningful-name] */e$onRendered = e.onRendered
  var u = o.useState(null)
  var h = u[0]
  var p = u[1]
  var _ = f.a(o.isValidElement(e$children) ? e$children.ref : null, t)
  d(function () {
    if (!s) {
      p(function (e) {
        e = "function" === typeof e ? e() : e
        return a.findDOMNode(e)
      }(e$container) || document.body)
    }
  }, [e$container, s])
  d(function () {
    if (h && !s) {
      l.a(t, h)
      return function () {
        l.a(t, null)
      }
    }
  }, [t, h, s])
  d(function () {
    if (e$onRendered && (h || s)) {
      e$onRendered()
    }
  }, [e$onRendered, h, s])
  return s ? o.isValidElement(e$children) ? o.cloneElement(e$children, {
    ref: _
  }) : e$children : h ? a.createPortal(e$children, h) : h
})
var p = require(/* 922 */"../2684/922")
var _ = require(/* 563 */"./563")
var A = require(/* 1026 */"../../../../551/1211/709/798/1026")
var g = require(/* 103 */"../../../../103")
var v = require(/* 106 */"../../../../106")
var m = require(/* 79 */"../../../../79/index")
var y = require(/* 1028 */"../../../../551/1211/269/1028")
var b = require(/* 1027 */"../2684/1027")
function w(e, t) {
  if (t) {
    e.setAttribute("aria-hidden", "true")
  } else {
    e.removeAttribute("aria-hidden")
  }
}
function E(e) {
  return parseInt(window.getComputedStyle(e)["padding-right"], 10) || 0
}
function x(e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : []
  var i = arguments.length > 4 ? arguments[4] : undefined
  var o = [t, n].concat(m.a(r))
  var a = ["TEMPLATE", "SCRIPT", "STYLE"];
  [].forEach.call(e.children, function (e) {
    if (1 === e.nodeType && -1 === o.indexOf(e) && -1 === a.indexOf(e.tagName)) {
      w(e, i)
    }
  })
}
function C(e, t) {
  var n = -1
  e.some(function (e, r) {
    return !!t(e) && (n = r, true)
  })
  return n
}
function O(e, t) {
  var n
  var r = []
  var i = []
  var /* [auto-meaningful-name] */e$container = e.container
  if (!t.disableScrollLock) {
    if (function (e) {
      var t = u.a(e)
      return t.body === e ? b.a(t).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
    }(e$container)) {
      var a = y.a()
      r.push({
        value: e$container.style.paddingRight,
        key: "padding-right",
        el: e$container
      })
      e$container.style["padding-right"] = "".concat(E(e$container) + a, "px")
      n = u.a(e$container).querySelectorAll(".mui-fixed");
      [].forEach.call(n, function (e) {
        i.push(e.style.paddingRight)
        e.style.paddingRight = "".concat(E(e) + a, "px")
      })
    }
    var /* [auto-meaningful-name] */e$container$parentElement = e$container.parentElement
    var c = "HTML" === e$container$parentElement.nodeName && "scroll" === window.getComputedStyle(e$container$parentElement)["overflow-y"] ? e$container$parentElement : e$container
    r.push({
      value: c.style.overflow,
      key: "overflow",
      el: c
    })
    c.style.overflow = "hidden"
  }
  return function () {
    if (n) {
      [].forEach.call(n, function (e, t) {
        if (i[t]) {
          e.style.paddingRight = i[t]
        } else {
          e.style.removeProperty("padding-right")
        }
      })
    }
    r.forEach(function (e) {
      var /* [auto-meaningful-name] */e$value = e.value
      var n = e.el
      var /* [auto-meaningful-name] */e$key = e.key
      if (e$value) {
        n.style.setProperty(e$key, e$value)
      } else {
        n.style.removeProperty(e$key)
      }
    })
  }
}
var k = function () {
  function e() {
    g.a(this, e)
    this.modals = []
    this.containers = []
  }
  v.a(e, [
    {
      key: "add",
      value: function (e, t) {
        var n = this.modals.indexOf(e)
        if (-1 !== n) {
          return n
        }
        n = this.modals.length
        this.modals.push(e)
        if (e.modalRef) {
          w(e.modalRef, false)
        }
        var r = function (e) {
          var t = [];
          [].forEach.call(e.children, function (e) {
            if (e.getAttribute && "true" === e.getAttribute("aria-hidden")) {
              t.push(e)
            }
          })
          return t
        }(t)
        x(t, e.mountNode, e.modalRef, r, true)
        var i = C(this.containers, function (e) {
          return e.container === t
        })
        return -1 !== i ? (this.containers[i].modals.push(e), n) : (this.containers.push({
          modals: [e],
          container: t,
          restore: null,
          hiddenSiblingNodes: r
        }), n)
      }
    }, {
      key: "mount",
      value: function (e, t) {
        var n = C(this.containers, function (t) {
          return -1 !== t.modals.indexOf(e)
        })
        var r = this.containers[n]
        if (!r.restore) {
          r.restore = O(r, t)
        }
      }
    }, {
      key: "remove",
      value: function (e) {
        var t = this.modals.indexOf(e)
        if (-1 === t) {
          return t
        }
        var n = C(this.containers, function (t) {
          return -1 !== t.modals.indexOf(e)
        })
        var r = this.containers[n]
        r.modals.splice(r.modals.indexOf(e), 1)
        this.modals.splice(t, 1)
        if (0 === r.modals.length) {
          if (r.restore) {
            r.restore()
          }
          if (e.modalRef) {
            w(e.modalRef, true)
          }
          x(r.container, e.mountNode, e.modalRef, r.hiddenSiblingNodes, false)
          this.containers.splice(n, 1)
        } else {
          var i = r.modals[r.modals.length - 1]
          if (i.modalRef) {
            w(i.modalRef, false)
          }
        }
        return t
      }
    }, {
      key: "isTopModal",
      value: function (e) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === e
      }
    }
  ])
  return e
}()
var S = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$disableAutoFocus = e.disableAutoFocus
  var r = undefined !== e$disableAutoFocus && e$disableAutoFocus
  var /* [auto-meaningful-name] */e$disableEnforceFocus = e.disableEnforceFocus
  var s = undefined !== e$disableEnforceFocus && e$disableEnforceFocus
  var /* [auto-meaningful-name] */e$disableRestoreFocus = e.disableRestoreFocus
  var l = undefined !== e$disableRestoreFocus && e$disableRestoreFocus
  var /* [auto-meaningful-name] */e$getDoc = e.getDoc
  var /* [auto-meaningful-name] */e$isEnabled = e.isEnabled
  var /* [auto-meaningful-name] */e$open = e.open
  var _ = o.useRef()
  var A = o.useRef(null)
  var g = o.useRef(null)
  var v = o.useRef()
  var m = o.useRef(null)
  var y = o.useCallback(function (e) {
    m.current = a.findDOMNode(e)
  }, [])
  var b = f.a(e$children.ref, y)
  var w = o.useRef()
  o.useEffect(function () {
    w.current = e$open
  }, [e$open])
  if (!w.current && e$open && "undefined" !== typeof window) {
    v.current = e$getDoc().activeElement
  }
  o.useEffect(function () {
    if (e$open) {
      var e = u.a(m.current)
      if (!(r || !m.current || m.current.contains(e.activeElement))) {
        if (!m.current.hasAttribute("tabIndex")) {
          m.current.setAttribute("tabIndex", -1)
        }
        m.current.focus()
      }
      var t = function () {
        if (null !== m.current) {
          if (e.hasFocus() && !s && e$isEnabled() && !_.current) {
            if (m.current && !m.current.contains(e.activeElement)) {
              m.current.focus()
            }
          } else {
            _.current = false
          }
        }
      }
      var n = function (t) {
        if (!s && e$isEnabled() && 9 === t.keyCode && e.activeElement === m.current) {
          _.current = true
          if (t.shiftKey) {
            g.current.focus()
          } else {
            A.current.focus()
          }
        }
      }
      e.addEventListener("focus", t, true)
      e.addEventListener("keydown", n, true)
      var i = setInterval(function () {
        t()
      }, 50)
      return function () {
        clearInterval(i)
        e.removeEventListener("focus", t, true)
        e.removeEventListener("keydown", n, true)
        if (!l) {
          if (v.current && v.current.focus) {
            v.current.focus()
          }
          v.current = null
        }
      }
    }
  }, [r, s, l, e$isEnabled, e$open])
  return o.createElement(o.Fragment, null, o.createElement("div", {
    tabIndex: 0,
    ref: A,
    "data-test": "sentinelStart"
  }), o.cloneElement(e$children, {
    ref: b
  }), o.createElement("div", {
    tabIndex: 0,
    ref: g,
    "data-test": "sentinelEnd"
  }))
}
var T = {
  root: {
    zIndex: -1,
    position: "fixed",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
  },
  invisible: {
    backgroundColor: "transparent"
  }
}
var B = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$invisible = e.invisible
  var a = undefined !== e$invisible && e$invisible
  var /* [auto-meaningful-name] */e$open = e.open
  var c = r.a(e, ["invisible", "open"])
  return e$open ? o.createElement("div", i.a({
    "aria-hidden": true,
    ref: t
  }, c, {
    style: i.a({}, T.root, a ? T.invisible : {}, c.style)
  })) : null
})
var D = new k()
var I = o.forwardRef(function (e, t) {
  var n = s.a()
  var l = c.a({
    name: "MuiModal",
    props: i.a({}, e),
    theme: n
  })
  var /* [auto-meaningful-name] */l$BackdropComponent = l.BackdropComponent
  var g = undefined === l$BackdropComponent ? B : l$BackdropComponent
  var /* [auto-meaningful-name] */l$BackdropProps = l.BackdropProps
  var /* [auto-meaningful-name] */l$children = l.children
  var /* [auto-meaningful-name] */l$closeAfterTransition = l.closeAfterTransition
  var b = undefined !== l$closeAfterTransition && l$closeAfterTransition
  var /* [auto-meaningful-name] */l$container = l.container
  var /* [auto-meaningful-name] */l$disableAutoFocus = l.disableAutoFocus
  var C = undefined !== l$disableAutoFocus && l$disableAutoFocus
  var /* [auto-meaningful-name] */l$disableBackdropClick = l.disableBackdropClick
  var k = undefined !== l$disableBackdropClick && l$disableBackdropClick
  var /* [auto-meaningful-name] */l$disableEnforceFocus = l.disableEnforceFocus
  var I = undefined !== l$disableEnforceFocus && l$disableEnforceFocus
  var /* [auto-meaningful-name] */l$disableEscapeKeyDown = l.disableEscapeKeyDown
  var F = undefined !== l$disableEscapeKeyDown && l$disableEscapeKeyDown
  var /* [auto-meaningful-name] */l$disablePortal = l.disablePortal
  var N = undefined !== l$disablePortal && l$disablePortal
  var /* [auto-meaningful-name] */l$disableRestoreFocus = l.disableRestoreFocus
  var L = undefined !== l$disableRestoreFocus && l$disableRestoreFocus
  var /* [auto-meaningful-name] */l$disableScrollLock = l.disableScrollLock
  var U = undefined !== l$disableScrollLock && l$disableScrollLock
  var /* [auto-meaningful-name] */l$hideBackdrop = l.hideBackdrop
  var V = undefined !== l$hideBackdrop && l$hideBackdrop
  var /* [auto-meaningful-name] */l$keepMounted = l.keepMounted
  var z = undefined !== l$keepMounted && l$keepMounted
  var /* [auto-meaningful-name] */l$manager = l.manager
  var W = undefined === l$manager ? D : l$manager
  var /* [auto-meaningful-name] */l$onBackdropClick = l.onBackdropClick
  var /* [auto-meaningful-name] */l$onClose = l.onClose
  var /* [auto-meaningful-name] */l$onEscapeKeyDown = l.onEscapeKeyDown
  var /* [auto-meaningful-name] */l$onRendered = l.onRendered
  var /* [auto-meaningful-name] */l$open = l.open
  var J = r.a(l, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"])
  var Z = o.useState(true)
  var ee = Z[0]
  var te = Z[1]
  var ne = o.useRef({})
  var re = o.useRef(null)
  var ie = o.useRef(null)
  var oe = f.a(ie, t)
  var ae = function (e) {
    return !!e.children && e.children.props.hasOwnProperty("in")
  }(l)
  var se = function () {
    return u.a(re.current)
  }
  var ce = function () {
    ne.current.modalRef = ie.current
    ne.current.mountNode = re.current
    return ne.current
  }
  var ue = function () {
    W.mount(ce(), {
      disableScrollLock: U
    })
    ie.current.scrollTop = 0
  }
  var le = _.a(function () {
    var e = function (e) {
      e = "function" === typeof e ? e() : e
      return a.findDOMNode(e)
    }(l$container) || se().body
    W.add(ce(), e)
    if (ie.current) {
      ue()
    }
  })
  var fe = o.useCallback(function () {
    return W.isTopModal(ce())
  }, [W])
  var de = _.a(function (e) {
    re.current = e
    if (e) {
      if (l$onRendered) {
        l$onRendered()
      }
      if (l$open && fe()) {
        ue()
      } else {
        w(ie.current, true)
      }
    }
  })
  var he = o.useCallback(function () {
    W.remove(ce())
  }, [W])
  o.useEffect(function () {
    return function () {
      he()
    }
  }, [he])
  o.useEffect(function () {
    if (l$open) {
      le()
    } else {
      if (!(ae && b)) {
        he()
      }
    }
  }, [l$open, he, ae, b, le])
  if (!z && !l$open && (!ae || ee)) {
    return null
  }
  var pe = function (e) {
    return {
      root: {
        position: "fixed",
        zIndex: e.zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
      },
      hidden: {
        visibility: "hidden"
      }
    }
  }(n || {
    zIndex: A.a
  })
  var _e = {}
  if (undefined === l$children.props.tabIndex) {
    _e.tabIndex = l$children.props.tabIndex || "-1"
  }
  if (ae) {
    _e.onEnter = p.a(function () {
      te(false)
    }, l$children.props.onEnter)
    _e.onExited = p.a(function () {
      te(true)
      if (b) {
        he()
      }
    }, l$children.props.onExited)
  }
  return o.createElement(h, {
    ref: de,
    container: l$container,
    disablePortal: N
  }, o.createElement("div", i.a({
    ref: oe,
    onKeyDown: function (e) {
      if ("Escape" === e.key && fe()) {
        if (l$onEscapeKeyDown) {
          l$onEscapeKeyDown(e)
        }
        if (!F) {
          e.stopPropagation()
          if (l$onClose) {
            l$onClose(e, "escapeKeyDown")
          }
        }
      }
    },
    role: "presentation"
  }, J, {
    style: i.a({}, pe.root, !l$open && ee ? pe.hidden : {}, J.style)
  }), V ? null : o.createElement(g, i.a({
    open: l$open,
    onClick: function (e) {
      if (e.target === e.currentTarget) {
        if (l$onBackdropClick) {
          l$onBackdropClick(e)
        }
        if (!k && l$onClose) {
          l$onClose(e, "backdropClick")
        }
      }
    }
  }, l$BackdropProps)), o.createElement(S, {
    disableEnforceFocus: I,
    disableAutoFocus: C,
    disableRestoreFocus: L,
    getDoc: se,
    isEnabled: fe,
    open: l$open
  }, o.cloneElement(l$children, _e))))
})
exports.a = I
