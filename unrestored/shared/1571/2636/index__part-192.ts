/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-192
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
import { Provider, connect } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useRef, useEffect, useLayoutEffect, useContext } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_434 from /* 434 */"./434"
import * as /* [auto-meaningful-name] */Redux from /* 156 */"redux"
function lN(e, t) {
  var n = useState(function () {
    return {
      inputs: t,
      result: e()
    }
  })[0]
  var r = useRef(true)
  var o = useRef(n)
  var i = r.current || Boolean(t && o.current.inputs && function (e, t) {
    if (e.length !== t.length) {
      return false
    }
    for (var n = 0; n < e.length; n++) {
      if (e[n] !== t[n]) {
        return false
      }
    }
    return true
  }(t, o.current.inputs)) ? o.current : {
      inputs: t,
      result: e()
    }
  useEffect(function () {
    r.current = false
    o.current = i
  }, [i])
  return i.result
}
var uN = lN
var dN = function (e, t) {
  return lN(function () {
    return e
  }, t)
}
var pN = function (e) {
  var /* [auto-meaningful-name] */e$top = e.top
  var /* [auto-meaningful-name] */e$right = e.right
  var /* [auto-meaningful-name] */e$bottom = e.bottom
  var /* [auto-meaningful-name] */e$left = e.left
  return {
    top: e$top,
    right: e$right,
    bottom: e$bottom,
    left: e$left,
    width: e$right - e$left,
    height: e$bottom - e$top,
    x: e$left,
    y: e$top,
    center: {
      x: (e$right + e$left) / 2,
      y: (e$bottom + e$top) / 2
    }
  }
}
var fN = function (e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  }
}
var hN = function (e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  }
}
var mN = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}
var gN = function (e) {
  var /* [auto-meaningful-name] */e$borderBox = e.borderBox
  var /* [auto-meaningful-name] */e$margin = e.margin
  var r = undefined === e$margin ? mN : e$margin
  var /* [auto-meaningful-name] */e$border = e.border
  var i = undefined === e$border ? mN : e$border
  var /* [auto-meaningful-name] */e$padding = e.padding
  var s = undefined === e$padding ? mN : e$padding
  var c = pN(fN(e$borderBox, r))
  var l = pN(hN(e$borderBox, i))
  var u = pN(hN(l, s))
  return {
    marginBox: c,
    borderBox: pN(e$borderBox),
    paddingBox: l,
    contentBox: u,
    margin: r,
    border: i,
    padding: s
  }
}
var _N = function (e) {
  var t = e.slice(0, -2)
  if ("px" !== e.slice(-2)) {
    return 0
  }
  var n = Number(t)
  if (isNaN(n)) {
    (function (e, t) {
      if (!e) {
        throw new Error("Invariant failed")
      }
    })(false)
  }
  return n
}
var vN = function (e, t) {
  var n
  var r
  var /* [auto-meaningful-name] */e$borderBox = e.borderBox
  var /* [auto-meaningful-name] */e$border = e.border
  var /* [auto-meaningful-name] */e$margin = e.margin
  var /* [auto-meaningful-name] */e$padding = e.padding
  r = t
  var c = {
    top: (n = e$borderBox).top + r.y,
    left: n.left + r.x,
    bottom: n.bottom + r.y,
    right: n.right + r.x
  }
  return gN({
    borderBox: c,
    border: e$border,
    margin: e$margin,
    padding: e$padding
  })
}
var bN = function (e, t) {
  if (undefined === t) {
    t = {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  }
  return vN(e, t)
}
var yN = function (e, t) {
  var n = {
    top: _N(t.marginTop),
    right: _N(t.marginRight),
    bottom: _N(t.marginBottom),
    left: _N(t.marginLeft)
  }
  var r = {
    top: _N(t.paddingTop),
    right: _N(t.paddingRight),
    bottom: _N(t.paddingBottom),
    left: _N(t.paddingLeft)
  }
  var o = {
    top: _N(t.borderTopWidth),
    right: _N(t.borderRightWidth),
    bottom: _N(t.borderBottomWidth),
    left: _N(t.borderLeftWidth)
  }
  return gN({
    borderBox: e,
    margin: n,
    padding: r,
    border: o
  })
}
var EN = function (e) {
  var t = e.getBoundingClientRect()
  var n = window.getComputedStyle(e)
  return yN(t, n)
}
var ON = Number.isNaN || function (e) {
  return "number" === typeof e && e !== e
}
function wN(e, t) {
  if (e.length !== t.length) {
    return false
  }
  for (var n = 0; n < e.length; n++) {
    r = e[n]
    o = t[n]
    if (!(r === o || ON(r) && ON(o))) {
      return false
    }
  }
  var r
  var o
  return true
}
var CN = function (e, t) {
  var n
  if (undefined === t) {
    t = wN
  }
  var r
  var o = []
  var i = false
  return function () {
    for (var a = [], s = 0; s < arguments.length; s++) {
      a[s] = arguments[s]
    }
    if (!(i && n === this && t(a, o))) {
      r = e.apply(this, a)
      i = true
      n = this
      o = a
    }
    return r
  }
}
var TN = function (e) {
  var t = []
  var n = null
  var r = function () {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
      o[i] = arguments[i]
    }
    t = o
    if (!n) {
      n = requestAnimationFrame(function () {
        n = null
        e.apply(undefined, t)
      })
    }
  }
  r.cancel = function () {
    if (n) {
      cancelAnimationFrame(n)
      n = null
    }
  }
  return r
}
function SN(e, t) {}
SN.bind(null, "warn")
SN.bind(null, "error")
function AN() {}
function IN(e, t, n) {
  var r = t.map(function (t) {
    var r
    var /* [auto-meaningful-name] */t$options
    r = n
    t$options = t.options
    var i = Module_19.a({}, r, {}, t$options)
    e.addEventListener(t.eventName, t.fn, i)
    return function () {
      e.removeEventListener(t.eventName, t.fn, i)
    }
  })
  return function () {
    r.forEach(function (e) {
      e()
    })
  }
}
function jN(e) {
  this.message = e
}
function NN(e, t) {
  if (!e) {
    throw new jN("Invariant failed")
  }
}
jN.prototype.toString = function () {
  return this.message
}
var RN = function (e) {
  function t() {
    for (var t, /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      r[o] = arguments[o]
    }
    (t = e.call.apply(e, [this].concat(r)) || this).callbacks = null
    t.unbind = AN
    t.onWindowError = function (e) {
      var n = t.getCallbacks()
      if (n.isDragging()) {
        n.tryAbort()
      }
      if (e.error instanceof jN) {
        e.preventDefault()
      }
    }
    t.getCallbacks = function () {
      if (!t.callbacks) {
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>")
      }
      return t.callbacks
    }
    t.setCallbacks = function (e) {
      t.callbacks = e
    }
    return t
  }
  Module_434.a(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.componentDidMount = function () {
    this.unbind = IN(window, [
      {
        eventName: "error",
        fn: this.onWindowError
      }
    ])
  }
  t$prototype.componentDidCatch = function (e) {
    if (!(e instanceof jN)) {
      throw e
    }
    this.setState({})
  }
  t$prototype.componentWillUnmount = function () {
    this.unbind()
  }
  t$prototype.render = function () {
    return this.props.children(this.setCallbacks)
  }
  return t
}(React.Component)
var kN = function (e) {
  return e + 1
}
var xN = function (e, t) {
  var n = e.droppableId === t.droppableId
  var r = kN(e.index)
  var o = kN(t.index)
  return n ? "\n      You have moved the item from position " + r + "\n      to position " + o + "\n    " : "\n    You have moved the item from position " + r + "\n    in list " + e.droppableId + "\n    to list " + t.droppableId + "\n    in position " + o + "\n  "
}
var DN = function (e, t, n) {
  return t.droppableId === n.droppableId ? "\n      The item " + e + "\n      has been combined with " + n.draggableId : "\n      The item " + e + "\n      in list " + t.droppableId + "\n      has been combined with " + n.draggableId + "\n      in list " + n.droppableId + "\n    "
}
var MN = function (e) {
  return "\n  The item has returned to its starting position\n  of " + kN(e.index) + "\n"
}
var /* [auto-meaningful-name] */_nPressSpaceBarToStartADrag$_nWhenDraggingYouCanUseTheArrowKeysToMoveTheItemAroundAndEscapeToCancel$_nSomeScreenReadersMayRequireYouToBeInFocusModeOrToUseYourPassThroughKey_n = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n"
var PN = function (e) {
  return "\n  You have lifted an item in position " + kN(e.source.index) + "\n"
}
var BN = function (e) {
  var /* [auto-meaningful-name] */e$destination = e.destination
  if (e$destination) {
    return xN(e.source, e$destination)
  }
  var /* [auto-meaningful-name] */e$combine = e.combine
  return e$combine ? DN(e.draggableId, e.source, e$combine) : "You are over an area that cannot be dropped on"
}
var FN = function (e) {
  if ("CANCEL" === e.reason) {
    return "\n      Movement cancelled.\n      " + MN(e.source) + "\n    "
  }
  var /* [auto-meaningful-name] */e$destination = e.destination
  var /* [auto-meaningful-name] */e$combine = e.combine
  return e$destination ? "\n      You have dropped the item.\n      " + xN(e.source, e$destination) + "\n    " : e$combine ? "\n      You have dropped the item.\n      " + DN(e.draggableId, e.source, e$combine) + "\n    " : "\n    The item has been dropped while not over a drop area.\n    " + MN(e.source) + "\n  "
}
var GN = {
  x: 0,
  y: 0
}
var WN = function (e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  }
}
var UN = function (e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  }
}
var HN = function (e, t) {
  return e.x === t.x && e.y === t.y
}
var VN = function (e) {
  return {
    x: 0 !== e.x ? -e.x : 0,
    y: 0 !== e.y ? -e.y : 0
  }
}
var zN = function (e, t, n) {
  var r
  if (undefined === n) {
    n = 0
  }
  (r = {})[e] = t
  r["x" === e ? "y" : "x"] = n
  return r
}
var YN = function (e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}
var KN = function (e, t) {
  return Math.min.apply(Math, t.map(function (t) {
    return YN(e, t)
  }))
}
var qN = function (e) {
  return function (t) {
    return {
      x: e(t.x),
      y: e(t.y)
    }
  }
}
var XN = function (e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  }
}
var QN = function (e) {
  return [
    {
      x: e.left,
      y: e.top
    }, {
      x: e.right,
      y: e.top
    }, {
      x: e.left,
      y: e.bottom
    }, {
      x: e.right,
      y: e.bottom
    }
  ]
}
var ZN = function (e, t) {
  return t && t.shouldClipSubject ? function (e, t) {
    var n = pN({
      top: Math.max(t.top, e.top),
      right: Math.min(t.right, e.right),
      bottom: Math.min(t.bottom, e.bottom),
      left: Math.max(t.left, e.left)
    })
    return n.width <= 0 || n.height <= 0 ? null : n
  }(t.pageMarginBox, e) : pN(e)
}
var JN = function (e) {
  var /* [auto-meaningful-name] */e$page = e.page
  var /* [auto-meaningful-name] */e$withPlaceholder = e.withPlaceholder
  var /* [auto-meaningful-name] */e$axis = e.axis
  var /* [auto-meaningful-name] */e$frame = e.frame
  var i = function (e, t, n) {
    var r
    return n && n.increasedBy ? Module_19.a({}, e, ((r = {})[t.end] = e[t.end] + n.increasedBy[t.line], r)) : e
  }(function (e, t) {
    return t ? XN(e, t.scroll.diff.displacement) : e
  }(e$page.marginBox, e$frame), e$axis, e$withPlaceholder)
  return {
    page: e$page,
    withPlaceholder: e$withPlaceholder,
    active: ZN(i, e$frame)
  }
}
var $N = function (e, t) {
  if (!e.frame) {
    NN(false)
  }
  var /* [auto-meaningful-name] */e$frame = e.frame
  var r = UN(t, e$frame.scroll.initial)
  var o = VN(r)
  var i = Module_19.a({}, e$frame, {
    scroll: {
      initial: e$frame.scroll.initial,
      current: t,
      diff: {
        value: r,
        displacement: o
      },
      max: e$frame.scroll.max
    }
  })
  var a = JN({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: i
  })
  return Module_19.a({}, e, {
    frame: i,
    subject: a
  })
}
function eR(e) {
  return Object.values ? Object.values(e) : Object.keys(e).map(function (t) {
    return e[t]
  })
}
function tR(e, t) {
  if (e.findIndex) {
    return e.findIndex(t)
  }
  for (var n = 0; n < e.length; n++) {
    if (t(e[n])) {
      return n
    }
  }
  return -1
}
function nR(e, t) {
  if (e.find) {
    return e.find(t)
  }
  var n = tR(e, t)
  return -1 !== n ? e[n] : undefined
}
function rR(e) {
  return Array.prototype.slice.call(e)
}
var oR = CN(function (e) {
  return e.reduce(function (e, t) {
    e[t.descriptor.id] = t
    return e
  }, {})
})
var iR = CN(function (e) {
  return e.reduce(function (e, t) {
    e[t.descriptor.id] = t
    return e
  }, {})
})
var aR = CN(function (e) {
  return eR(e)
})
var sR = CN(function (e) {
  return eR(e)
})
var cR = CN(function (e, t) {
  return sR(t).filter(function (t) {
    return e === t.descriptor.droppableId
  }).sort(function (e, t) {
    return e.descriptor.index - t.descriptor.index
  })
})
function lR(e) {
  return e.at && "REORDER" === e.at.type ? e.at.destination : null
}
function uR(e) {
  return e.at && "COMBINE" === e.at.type ? e.at.combine : null
}
var dR = CN(function (e, t) {
  return t.filter(function (t) {
    return t.descriptor.id !== e.descriptor.id
  })
})
var pR = function (e, t) {
  return e.descriptor.droppableId === t.descriptor.id
}
var fR = {
  point: GN,
  value: 0
}
var hR = {
  invisible: {},
  visible: {},
  all: []
}
var mR = {
  displaced: hR,
  displacedBy: fR,
  at: null
}
var gR = function (e, t) {
  return function (n) {
    return e <= n && n <= t
  }
}
var _R = function (e) {
  var t = gR(e.top, e.bottom)
  var n = gR(e.left, e.right)
  return function (r) {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right)) {
      return true
    }
    var o = t(r.top) || t(r.bottom)
    var i = n(r.left) || n(r.right)
    if (o && i) {
      return true
    }
    var a = r.top < e.top && r.bottom > e.bottom
    var s = r.left < e.left && r.right > e.right
    return !(!a || !s) || a && i || s && o
  }
}
var vR = function (e) {
  var t = gR(e.top, e.bottom)
  var n = gR(e.left, e.right)
  return function (e) {
    return t(e.top) && t(e.bottom) && n(e.left) && n(e.right)
  }
}
var bR = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}
var yR = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
}
var ER = function (e) {
  var /* [auto-meaningful-name] */e$target = e.target
  var /* [auto-meaningful-name] */e$destination = e.destination
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$withDroppableDisplacement = e.withDroppableDisplacement
  var /* [auto-meaningful-name] */e$isVisibleThroughFrameFn = e.isVisibleThroughFrameFn
  var a = e$withDroppableDisplacement ? function (e, t) {
    var n = t.frame ? t.frame.scroll.diff.displacement : GN
    return XN(e, n)
  }(e$target, e$destination) : e$target
  return function (e, t, n) {
    return !!t.subject.active && n(t.subject.active)(e)
  }(a, e$destination, e$isVisibleThroughFrameFn) && function (e, t, n) {
    return n(t)(e)
  }(a, e$viewport, e$isVisibleThroughFrameFn)
}
var OR = function (e) {
  return ER(Module_19.a({}, e, {
    isVisibleThroughFrameFn: _R
  }))
}
var wR = function (e) {
  return ER(Module_19.a({}, e, {
    isVisibleThroughFrameFn: vR
  }))
}
function CR(e) {
  var /* [auto-meaningful-name] */e$afterDragging = e.afterDragging
  var /* [auto-meaningful-name] */e$destination = e.destination
  var /* [auto-meaningful-name] */e$displacedBy = e.displacedBy
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$forceShouldAnimate = e.forceShouldAnimate
  var /* [auto-meaningful-name] */e$last = e.last
  return e$afterDragging.reduce(function (e, t) {
    var s = function (e, t) {
      var /* [auto-meaningful-name] */e$page$marginBox = e.page.marginBox
      var r = {
        top: t.point.y,
        right: 0,
        bottom: 0,
        left: t.point.x
      }
      return pN(fN(e$page$marginBox, r))
    }(t, e$displacedBy)
    var /* [auto-meaningful-name] */t$descriptor$id = t.descriptor.id
    e.all.push(t$descriptor$id)
    if (!OR({
      target: s,
      destination: e$destination,
      viewport: e$viewport,
      withDroppableDisplacement: true
    })) {
      e.invisible[t.descriptor.id] = true
      return e
    }
    var l = {
      draggableId: t$descriptor$id,
      shouldAnimate: function (e, t, n) {
        if ("boolean" === typeof n) {
          return n
        }
        if (!t) {
          return true
        }
        var /* [auto-meaningful-name] */t$invisible = t.invisible
        var /* [auto-meaningful-name] */t$visible = t.visible
        if (t$invisible[e]) {
          return false
        }
        var i = t$visible[e]
        return !i || i.shouldAnimate
      }(t$descriptor$id, e$last, e$forceShouldAnimate)
    }
    e.visible[t$descriptor$id] = l
    return e
  }, {
    all: [],
    visible: {},
    invisible: {}
  })
}
function TR(e) {
  var /* [auto-meaningful-name] */e$insideDestination = e.insideDestination
  var /* [auto-meaningful-name] */e$inHomeList = e.inHomeList
  var /* [auto-meaningful-name] */e$displacedBy = e.displacedBy
  var /* [auto-meaningful-name] */e$destination = e.destination
  var i = function (e, t) {
    if (!e.length) {
      return 0
    }
    var /* [auto-meaningful-name] */eE$length1$descriptor$index = e[e.length - 1].descriptor.index
    return t.inHomeList ? eE$length1$descriptor$index : eE$length1$descriptor$index + 1
  }(e$insideDestination, {
    inHomeList: e$inHomeList
  })
  return {
    displaced: hR,
    displacedBy: e$displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: e$destination.descriptor.id,
        index: i
      }
    }
  }
}
function SR(e) {
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var /* [auto-meaningful-name] */e$insideDestination = e.insideDestination
  var /* [auto-meaningful-name] */e$destination = e.destination
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$displacedBy = e.displacedBy
  var /* [auto-meaningful-name] */e$last = e.last
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$forceShouldAnimate = e.forceShouldAnimate
  var l = pR(e$draggable, e$destination)
  if (null == e$index) {
    return TR({
      insideDestination: e$insideDestination,
      inHomeList: l,
      displacedBy: e$displacedBy,
      destination: e$destination
    })
  }
  var u = nR(e$insideDestination, function (e) {
    return e.descriptor.index === e$index
  })
  if (!u) {
    return TR({
      insideDestination: e$insideDestination,
      inHomeList: l,
      displacedBy: e$displacedBy,
      destination: e$destination
    })
  }
  var d = dR(e$draggable, e$insideDestination)
  var p = e$insideDestination.indexOf(u)
  return {
    displaced: CR({
      afterDragging: d.slice(p),
      destination: e$destination,
      displacedBy: e$displacedBy,
      last: e$last,
      viewport: e$viewport.frame,
      forceShouldAnimate: e$forceShouldAnimate
    }),
    displacedBy: e$displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: e$destination.descriptor.id,
        index: e$index
      }
    }
  }
}
function AR(e, t) {
  return Boolean(t.effected[e])
}
var IR = function (e) {
  var /* [auto-meaningful-name] */e$isMovingForward = e.isMovingForward
  var /* [auto-meaningful-name] */e$isInHomeList = e.isInHomeList
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var /* [auto-meaningful-name] */e$draggables = e.draggables
  var /* [auto-meaningful-name] */e$destination = e.destination
  var /* [auto-meaningful-name] */e$insideDestination = e.insideDestination
  var /* [auto-meaningful-name] */e$previousImpact = e.previousImpact
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$afterCritical = e.afterCritical
  var /* [auto-meaningful-name] */e$previousImpact$at = e$previousImpact.at
  if (!e$previousImpact$at) {
    NN(false)
  }
  if ("REORDER" === e$previousImpact$at.type) {
    var d = function (e) {
      var /* [auto-meaningful-name] */e$isMovingForward1 = e.isMovingForward
      var /* [auto-meaningful-name] */e$isInHomeList1 = e.isInHomeList
      var /* [auto-meaningful-name] */e$insideDestination1 = e.insideDestination
      var /* [auto-meaningful-name] */e$location = e.location
      if (!e$insideDestination1.length) {
        return null
      }
      var /* [auto-meaningful-name] */e$location$index = e$location.index
      var a = e$isMovingForward1 ? e$location$index + 1 : e$location$index - 1
      var /* [auto-meaningful-name] */e$insideDestination10$descriptor$index = e$insideDestination1[0].descriptor.index
      var /* [auto-meaningful-name] */e$insideDestination1E$insideDestination1$length1$descriptor$index = e$insideDestination1[e$insideDestination1.length - 1].descriptor.index
      return a < e$insideDestination10$descriptor$index || a > (e$isInHomeList1 ? e$insideDestination1E$insideDestination1$length1$descriptor$index : e$insideDestination1E$insideDestination1$length1$descriptor$index + 1) ? null : a
    }({
      isMovingForward: e$isMovingForward,
      isInHomeList: e$isInHomeList,
      location: e$previousImpact$at.destination,
      insideDestination: e$insideDestination
    })
    return null == d ? null : SR({
      draggable: e$draggable,
      insideDestination: e$insideDestination,
      destination: e$destination,
      viewport: e$viewport,
      last: e$previousImpact.displaced,
      displacedBy: e$previousImpact.displacedBy,
      index: d
    })
  }
  var p = function (e) {
    var /* [auto-meaningful-name] */e$isMovingForward1 = e.isMovingForward
    var /* [auto-meaningful-name] */e$destination1 = e.destination
    var /* [auto-meaningful-name] */e$draggables1 = e.draggables
    var /* [auto-meaningful-name] */e$combine = e.combine
    var /* [auto-meaningful-name] */e$afterCritical1 = e.afterCritical
    if (!e$destination1.isCombineEnabled) {
      return null
    }
    var /* [auto-meaningful-name] */e$combine$draggableId = e$combine.draggableId
    var /* [auto-meaningful-name] */e$draggables1E$combine$draggableId$descriptor$index = e$draggables1[e$combine$draggableId].descriptor.index
    return AR(e$combine$draggableId, e$afterCritical1) ? e$isMovingForward1 ? e$draggables1E$combine$draggableId$descriptor$index : e$draggables1E$combine$draggableId$descriptor$index - 1 : e$isMovingForward1 ? e$draggables1E$combine$draggableId$descriptor$index + 1 : e$draggables1E$combine$draggableId$descriptor$index
  }({
    isMovingForward: e$isMovingForward,
    destination: e$destination,
    displaced: e$previousImpact.displaced,
    draggables: e$draggables,
    combine: e$previousImpact$at.combine,
    afterCritical: e$afterCritical
  })
  return null == p ? null : SR({
    draggable: e$draggable,
    insideDestination: e$insideDestination,
    destination: e$destination,
    viewport: e$viewport,
    last: e$previousImpact.displaced,
    displacedBy: e$previousImpact.displacedBy,
    index: p
  })
}
var jR = function (e) {
  var /* [auto-meaningful-name] */e$afterCritical = e.afterCritical
  var /* [auto-meaningful-name] */e$impact = e.impact
  var /* [auto-meaningful-name] */e$draggables = e.draggables
  var o = uR(e$impact)
  if (!o) {
    NN(false)
  }
  var /* [auto-meaningful-name] */o$draggableId = o.draggableId
  var /* [auto-meaningful-name] */e$draggablesO$draggableId$page$borderBox$center = e$draggables[o$draggableId].page.borderBox.center
  var s = function (e) {
    var /* [auto-meaningful-name] */e$displaced = e.displaced
    var /* [auto-meaningful-name] */e$afterCritical1 = e.afterCritical
    var /* [auto-meaningful-name] */e$combineWith = e.combineWith
    var /* [auto-meaningful-name] */e$displacedBy = e.displacedBy
    var i = Boolean(e$displaced.visible[e$combineWith] || e$displaced.invisible[e$combineWith])
    return AR(e$combineWith, e$afterCritical1) ? i ? GN : VN(e$displacedBy.point) : i ? e$displacedBy.point : GN
  }({
    displaced: e$impact.displaced,
    afterCritical: e$afterCritical,
    combineWith: o$draggableId,
    displacedBy: e$impact.displacedBy
  })
  return WN(e$draggablesO$draggableId$page$borderBox$center, s)
}
var NR = function (e, t) {
  return t.margin[e.start] + t.borderBox[e.size] / 2
}
var RR = function (e, t, n) {
  return t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2
}
var kR = function (e) {
  var /* [auto-meaningful-name] */e$axis = e.axis
  var /* [auto-meaningful-name] */e$moveRelativeTo = e.moveRelativeTo
  var /* [auto-meaningful-name] */e$isMoving = e.isMoving
  return zN(e$axis.line, e$moveRelativeTo.marginBox[e$axis.end] + NR(e$axis, e$isMoving), RR(e$axis, e$moveRelativeTo.marginBox, e$isMoving))
}
var xR = function (e) {
  var /* [auto-meaningful-name] */e$axis = e.axis
  var /* [auto-meaningful-name] */e$moveRelativeTo = e.moveRelativeTo
  var /* [auto-meaningful-name] */e$isMoving = e.isMoving
  return zN(e$axis.line, e$moveRelativeTo.marginBox[e$axis.start] - function (e, t) {
    return t.margin[e.end] + t.borderBox[e.size] / 2
  }(e$axis, e$isMoving), RR(e$axis, e$moveRelativeTo.marginBox, e$isMoving))
}
var DR = function (e) {
  var /* [auto-meaningful-name] */e$impact = e.impact
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var /* [auto-meaningful-name] */e$draggables = e.draggables
  var /* [auto-meaningful-name] */e$droppable = e.droppable
  var /* [auto-meaningful-name] */e$afterCritical = e.afterCritical
  var a = cR(e$droppable.descriptor.id, e$draggables)
  var /* [auto-meaningful-name] */e$draggable$page = e$draggable.page
  var /* [auto-meaningful-name] */e$droppable$axis = e$droppable.axis
  if (!a.length) {
    return function (e) {
      var /* [auto-meaningful-name] */e$axis = e.axis
      var /* [auto-meaningful-name] */e$moveInto = e.moveInto
      var /* [auto-meaningful-name] */e$isMoving = e.isMoving
      return zN(e$axis.line, e$moveInto.contentBox[e$axis.start] + NR(e$axis, e$isMoving), RR(e$axis, e$moveInto.contentBox, e$isMoving))
    }({
      axis: e$droppable$axis,
      moveInto: e$droppable.page,
      isMoving: e$draggable$page
    })
  }
  var /* [auto-meaningful-name] */e$impact$displaced = e$impact.displaced
  var /* [auto-meaningful-name] */e$impact$displacedBy = e$impact.displacedBy
  var d = e$impact$displaced.all[0]
  if (d) {
    var p = e$draggables[d]
    if (AR(d, e$afterCritical)) {
      return xR({
        axis: e$droppable$axis,
        moveRelativeTo: p.page,
        isMoving: e$draggable$page
      })
    }
    var f = vN(p.page, e$impact$displacedBy.point)
    return xR({
      axis: e$droppable$axis,
      moveRelativeTo: f,
      isMoving: e$draggable$page
    })
  }
  var h = a[a.length - 1]
  if (h.descriptor.id === e$draggable.descriptor.id) {
    return e$draggable$page.borderBox.center
  }
  if (AR(h.descriptor.id, e$afterCritical)) {
    var m = vN(h.page, VN(e$afterCritical.displacedBy.point))
    return kR({
      axis: e$droppable$axis,
      moveRelativeTo: m,
      isMoving: e$draggable$page
    })
  }
  return kR({
    axis: e$droppable$axis,
    moveRelativeTo: h.page,
    isMoving: e$draggable$page
  })
}
var MR = function (e, t) {
  var /* [auto-meaningful-name] */e$frame = e.frame
  return e$frame ? WN(t, e$frame.scroll.diff.displacement) : t
}
var LR = function (e) {
  var t = function (e) {
    var /* [auto-meaningful-name] */e$impact = e.impact
    var /* [auto-meaningful-name] */e$draggable = e.draggable
    var /* [auto-meaningful-name] */e$droppable = e.droppable
    var /* [auto-meaningful-name] */e$draggables = e.draggables
    var /* [auto-meaningful-name] */e$afterCritical = e.afterCritical
    var /* [auto-meaningful-name] */e$draggable$page$borderBox$center = e$draggable.page.borderBox.center
    var /* [auto-meaningful-name] */e$impact$at = e$impact.at
    return e$droppable && e$impact$at ? "REORDER" === e$impact$at.type ? DR({
      impact: e$impact,
      draggable: e$draggable,
      draggables: e$draggables,
      droppable: e$droppable,
      afterCritical: e$afterCritical
    }) : jR({
      impact: e$impact,
      draggables: e$draggables,
      afterCritical: e$afterCritical
    }) : e$draggable$page$borderBox$center
  }(e)
  var /* [auto-meaningful-name] */e$droppable = e.droppable
  return e$droppable ? MR(e$droppable, t) : t
}
var PR = function (e, t) {
  var n = UN(t, e.scroll.initial)
  var r = VN(n)
  return {
    frame: pN({
      top: t.y,
      bottom: t.y + e.frame.height,
      left: t.x,
      right: t.x + e.frame.width
    }),
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: t,
      diff: {
        value: n,
        displacement: r
      }
    }
  }
}
function BR(e, t) {
  return e.map(function (e) {
    return t[e]
  })
}
var FR = function (e) {
  var /* [auto-meaningful-name] */e$pageBorderBoxCenter = e.pageBorderBoxCenter
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var r = function (e, t) {
    return WN(e.scroll.diff.displacement, t)
  }(e.viewport, e$pageBorderBoxCenter)
  var o = UN(r, e$draggable.page.borderBox.center)
  return WN(e$draggable.client.borderBox.center, o)
}
var GR = function (e) {
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var /* [auto-meaningful-name] */e$destination = e.destination
  var /* [auto-meaningful-name] */e$newPageBorderBoxCenter = e.newPageBorderBoxCenter
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$withDroppableDisplacement = e.withDroppableDisplacement
  var /* [auto-meaningful-name] */e$onlyOnMainAxis = e.onlyOnMainAxis
  var s = undefined !== e$onlyOnMainAxis && e$onlyOnMainAxis
  var c = UN(e$newPageBorderBoxCenter, e$draggable.page.borderBox.center)
  var l = {
    target: XN(e$draggable.page.borderBox, c),
    destination: e$destination,
    withDroppableDisplacement: e$withDroppableDisplacement,
    viewport: e$viewport
  }
  return s ? function (e) {
    return ER(Module_19.a({}, e, {
      isVisibleThroughFrameFn: (e$destination$axis = e.destination.axis, function (e) {
        var n = gR(e.top, e.bottom)
        var r = gR(e.left, e.right)
        return function (e) {
          return e$destination$axis === bR ? n(e.top) && n(e.bottom) : r(e.left) && r(e.right)
        }
      })
    }))
    var /* [auto-meaningful-name] */e$destination$axis
  }(l) : wR(l)
}
var WR = function (e) {
  var /* [auto-meaningful-name] */e$isMovingForward = e.isMovingForward
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var /* [auto-meaningful-name] */e$destination = e.destination
  var /* [auto-meaningful-name] */e$draggables = e.draggables
  var /* [auto-meaningful-name] */e$previousImpact = e.previousImpact
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$previousPageBorderBoxCenter = e.previousPageBorderBoxCenter
  var /* [auto-meaningful-name] */e$previousClientSelection = e.previousClientSelection
  var /* [auto-meaningful-name] */e$afterCritical = e.afterCritical
  if (!e$destination.isEnabled) {
    return null
  }
  var u = cR(e$destination.descriptor.id, e$draggables)
  var d = pR(e$draggable, e$destination)
  var p = function (e) {
    var /* [auto-meaningful-name] */e$isMovingForward1 = e.isMovingForward
    var /* [auto-meaningful-name] */e$draggable1 = e.draggable
    var /* [auto-meaningful-name] */e$destination1 = e.destination
    var /* [auto-meaningful-name] */e$insideDestination = e.insideDestination
    var /* [auto-meaningful-name] */e$previousImpact1 = e.previousImpact
    if (!e$destination1.isCombineEnabled) {
      return null
    }
    if (!lR(e$previousImpact1)) {
      return null
    }
    function a(e) {
      var t = {
        type: "COMBINE",
        combine: {
          draggableId: e,
          droppableId: e$destination1.descriptor.id
        }
      }
      return Module_19.a({}, e$previousImpact1, {
        at: t
      })
    }
    var /* [auto-meaningful-name] */e$previousImpact1$displaced$all = e$previousImpact1.displaced.all
    var c = e$previousImpact1$displaced$all.length ? e$previousImpact1$displaced$all[0] : null
    if (e$isMovingForward1) {
      return c ? a(c) : null
    }
    var l = dR(e$draggable1, e$insideDestination)
    if (!c) {
      return l.length ? a(l[l.length - 1].descriptor.id) : null
    }
    var u = tR(l, function (e) {
      return e.descriptor.id === c
    })
    if (-1 === u) {
      NN(false)
    }
    var d = u - 1
    return d < 0 ? null : a(l[d].descriptor.id)
  }({
    isMovingForward: e$isMovingForward,
    draggable: e$draggable,
    destination: e$destination,
    insideDestination: u,
    previousImpact: e$previousImpact
  }) || IR({
    isMovingForward: e$isMovingForward,
    isInHomeList: d,
    draggable: e$draggable,
    draggables: e$draggables,
    destination: e$destination,
    insideDestination: u,
    previousImpact: e$previousImpact,
    viewport: e$viewport,
    afterCritical: e$afterCritical
  })
  if (!p) {
    return null
  }
  var f = LR({
    impact: p,
    draggable: e$draggable,
    droppable: e$destination,
    draggables: e$draggables,
    afterCritical: e$afterCritical
  })
  if (GR({
    draggable: e$draggable,
    destination: e$destination,
    newPageBorderBoxCenter: f,
    viewport: e$viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  })) {
    return {
      clientSelection: FR({
        pageBorderBoxCenter: f,
        draggable: e$draggable,
        viewport: e$viewport
      }),
      impact: p,
      scrollJumpRequest: null
    }
  }
  var h = UN(f, e$previousPageBorderBoxCenter)
  return {
    clientSelection: e$previousClientSelection,
    impact: function (e) {
      var /* [auto-meaningful-name] */e$impact = e.impact
      var /* [auto-meaningful-name] */e$viewport1 = e.viewport
      var /* [auto-meaningful-name] */e$destination1 = e.destination
      var /* [auto-meaningful-name] */e$draggables1 = e.draggables
      var /* [auto-meaningful-name] */e$maxScrollChange = e.maxScrollChange
      var a = PR(e$viewport1, WN(e$viewport1.scroll.current, e$maxScrollChange))
      var s = e$destination1.frame ? $N(e$destination1, WN(e$destination1.frame.scroll.current, e$maxScrollChange)) : e$destination1
      var /* [auto-meaningful-name] */e$impact$displaced = e$impact.displaced
      var l = CR({
        afterDragging: BR(e$impact$displaced.all, e$draggables1),
        destination: e$destination1,
        displacedBy: e$impact.displacedBy,
        viewport: a.frame,
        last: e$impact$displaced,
        forceShouldAnimate: false
      })
      var u = CR({
        afterDragging: BR(e$impact$displaced.all, e$draggables1),
        destination: s,
        displacedBy: e$impact.displacedBy,
        viewport: e$viewport1.frame,
        last: e$impact$displaced,
        forceShouldAnimate: false
      })
      var d = {}
      var p = {}
      var f = [e$impact$displaced, l, u]
      e$impact$displaced.all.forEach(function (e) {
        var t = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n].visible[e]
            if (r) {
              return r
            }
          }
          return null
        }(e, f)
        if (t) {
          p[e] = t
        } else {
          d[e] = true
        }
      })
      return Module_19.a({}, e$impact, {
        displaced: {
          all: e$impact$displaced.all,
          invisible: d,
          visible: p
        }
      })
    }({
      impact: p,
      viewport: e$viewport,
      destination: e$destination,
      draggables: e$draggables,
      maxScrollChange: h
    }),
    scrollJumpRequest: h
  }
}
var UR = function (e) {
  var /* [auto-meaningful-name] */e$subject$active = e.subject.active
  if (!e$subject$active) {
    NN(false)
  }
  return e$subject$active
}
var HR = function (e, t) {
  var /* [auto-meaningful-name] */e$page$borderBox$center = e.page.borderBox.center
  return AR(e.descriptor.id, t) ? UN(e$page$borderBox$center, t.displacedBy.point) : e$page$borderBox$center
}
var VR = function (e, t) {
  var /* [auto-meaningful-name] */e$page$borderBox = e.page.borderBox
  return AR(e.descriptor.id, t) ? XN(e$page$borderBox, VN(t.displacedBy.point)) : e$page$borderBox
}
var zR = CN(function (e, t) {
  var n = t[e.line]
  return {
    value: n,
    point: zN(e.line, n)
  }
})
var YR = function (e, t) {
  return Module_19.a({}, e, {
    scroll: Module_19.a({}, e.scroll, {
      max: t
    })
  })
}
var KR = function (e, t, n) {
  var /* [auto-meaningful-name] */e$frame = e.frame
  if (pR(t, e)) {
    NN(false)
  }
  if (e.subject.withPlaceholder) {
    NN(false)
  }
  var /* [auto-meaningful-name] */zRE$axisT$displaceBy$point = zR(e.axis, t.displaceBy).point
  var i = function (e, t, n) {
    var /* [auto-meaningful-name] */e$axis = e.axis
    if ("virtual" === e.descriptor.mode) {
      return zN(e$axis.line, t[e$axis.line])
    }
    var o = e.subject.page.contentBox[e$axis.size]
    var i = cR(e.descriptor.id, n).reduce(function (e, t) {
      return e + t.client.marginBox[e$axis.size]
    }, 0) + t[e$axis.line] - o
    return i <= 0 ? null : zN(e$axis.line, i)
  }(e, zRE$axisT$displaceBy$point, n)
  var a = {
    placeholderSize: zRE$axisT$displaceBy$point,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  }
  if (!e$frame) {
    var s = JN({
      page: e.subject.page,
      withPlaceholder: a,
      axis: e.axis,
      frame: e.frame
    })
    return Module_19.a({}, e, {
      subject: s
    })
  }
  var c = i ? WN(e$frame.scroll.max, i) : e$frame.scroll.max
  var l = YR(e$frame, c)
  var u = JN({
    page: e.subject.page,
    withPlaceholder: a,
    axis: e.axis,
    frame: l
  })
  return Module_19.a({}, e, {
    subject: u,
    frame: l
  })
}
var qR = function (e) {
  var /* [auto-meaningful-name] */e$isMovingForward = e.isMovingForward
  var /* [auto-meaningful-name] */e$previousPageBorderBoxCenter = e.previousPageBorderBoxCenter
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var /* [auto-meaningful-name] */e$isOver = e.isOver
  var /* [auto-meaningful-name] */e$draggables = e.draggables
  var /* [auto-meaningful-name] */e$droppables = e.droppables
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$afterCritical = e.afterCritical
  var l = function (e) {
    var /* [auto-meaningful-name] */e$isMovingForward1 = e.isMovingForward
    var /* [auto-meaningful-name] */e$pageBorderBoxCenter = e.pageBorderBoxCenter
    var /* [auto-meaningful-name] */e$source = e.source
    var /* [auto-meaningful-name] */e$droppables1 = e.droppables
    var /* [auto-meaningful-name] */e$viewport1 = e.viewport
    var /* [auto-meaningful-name] */e$source$subject$active = e$source.subject.active
    if (!e$source$subject$active) {
      return null
    }
    var /* [auto-meaningful-name] */e$source$axis = e$source.axis
    var c = gR(e$source$subject$active[e$source$axis.start], e$source$subject$active[e$source$axis.end])
    var l = aR(e$droppables1).filter(function (e) {
      return e !== e$source
    }).filter(function (e) {
      return e.isEnabled
    }).filter(function (e) {
      return Boolean(e.subject.active)
    }).filter(function (e) {
      return _R(e$viewport1.frame)(UR(e))
    }).filter(function (e) {
      var n = UR(e)
      return e$isMovingForward1 ? e$source$subject$active[e$source$axis.crossAxisEnd] < n[e$source$axis.crossAxisEnd] : n[e$source$axis.crossAxisStart] < e$source$subject$active[e$source$axis.crossAxisStart]
    }).filter(function (e) {
      var t = UR(e)
      var n = gR(t[e$source$axis.start], t[e$source$axis.end])
      return c(t[e$source$axis.start]) || c(t[e$source$axis.end]) || n(e$source$subject$active[e$source$axis.start]) || n(e$source$subject$active[e$source$axis.end])
    }).sort(function (e, n) {
      var r = UR(e)[e$source$axis.crossAxisStart]
      var o = UR(n)[e$source$axis.crossAxisStart]
      return e$isMovingForward1 ? r - o : o - r
    }).filter(function (e, t, n) {
      return UR(e)[e$source$axis.crossAxisStart] === UR(n[0])[e$source$axis.crossAxisStart]
    })
    if (!l.length) {
      return null
    }
    if (1 === l.length) {
      return l[0]
    }
    var u = l.filter(function (e) {
      return gR(UR(e)[e$source$axis.start], UR(e)[e$source$axis.end])(e$pageBorderBoxCenter[e$source$axis.line])
    })
    return 1 === u.length ? u[0] : u.length > 1 ? u.sort(function (e, t) {
      return UR(e)[e$source$axis.start] - UR(t)[e$source$axis.start]
    })[0] : l.sort(function (e, t) {
      var r = KN(e$pageBorderBoxCenter, QN(UR(e)))
      var o = KN(e$pageBorderBoxCenter, QN(UR(t)))
      return r !== o ? r - o : UR(e)[e$source$axis.start] - UR(t)[e$source$axis.start]
    })[0]
  }({
    isMovingForward: e$isMovingForward,
    pageBorderBoxCenter: e$previousPageBorderBoxCenter,
    source: e$isOver,
    droppables: e$droppables,
    viewport: e$viewport
  })
  if (!l) {
    return null
  }
  var u = cR(l.descriptor.id, e$draggables)
  var d = function (e) {
    var /* [auto-meaningful-name] */e$previousPageBorderBoxCenter1 = e.previousPageBorderBoxCenter
    var /* [auto-meaningful-name] */e$moveRelativeTo = e.moveRelativeTo
    var /* [auto-meaningful-name] */e$insideDestination = e.insideDestination
    var /* [auto-meaningful-name] */e$draggable1 = e.draggable
    var /* [auto-meaningful-name] */e$draggables1 = e.draggables
    var /* [auto-meaningful-name] */e$destination = e.destination
    var /* [auto-meaningful-name] */e$viewport1 = e.viewport
    var /* [auto-meaningful-name] */e$afterCritical1 = e.afterCritical
    if (!e$moveRelativeTo) {
      if (e$insideDestination.length) {
        return null
      }
      var l = {
        displaced: hR,
        displacedBy: fR,
        at: {
          type: "REORDER",
          destination: {
            droppableId: e$destination.descriptor.id,
            index: 0
          }
        }
      }
      var u = LR({
        impact: l,
        draggable: e$draggable1,
        droppable: e$destination,
        draggables: e$draggables1,
        afterCritical: e$afterCritical1
      })
      var d = pR(e$draggable1, e$destination) ? e$destination : KR(e$destination, e$draggable1, e$draggables1)
      return GR({
        draggable: e$draggable1,
        destination: d,
        newPageBorderBoxCenter: u,
        viewport: e$viewport1.frame,
        withDroppableDisplacement: false,
        onlyOnMainAxis: true
      }) ? l : null
    }
    var p = Boolean(e$previousPageBorderBoxCenter1[e$destination.axis.line] <= e$moveRelativeTo.page.borderBox.center[e$destination.axis.line])
    var f = function () {
      var /* [auto-meaningful-name] */e$moveRelativeTo$descriptor$index = e$moveRelativeTo.descriptor.index
      return e$moveRelativeTo.descriptor.id === e$draggable1.descriptor.id || p ? e$moveRelativeTo$descriptor$index : e$moveRelativeTo$descriptor$index + 1
    }()
    var h = zR(e$destination.axis, e$draggable1.displaceBy)
    return SR({
      draggable: e$draggable1,
      insideDestination: e$insideDestination,
      destination: e$destination,
      viewport: e$viewport1,
      displacedBy: h,
      last: hR,
      index: f
    })
  }({
    previousPageBorderBoxCenter: e$previousPageBorderBoxCenter,
    destination: l,
    draggable: e$draggable,
    draggables: e$draggables,
    moveRelativeTo: function (e) {
      var /* [auto-meaningful-name] */e$pageBorderBoxCenter = e.pageBorderBoxCenter
      var /* [auto-meaningful-name] */e$viewport1 = e.viewport
      var /* [auto-meaningful-name] */e$destination = e.destination
      var /* [auto-meaningful-name] */e$insideDestination = e.insideDestination
      var /* [auto-meaningful-name] */e$afterCritical1 = e.afterCritical
      return e$insideDestination.filter(function (e) {
        return wR({
          target: VR(e, e$afterCritical1),
          destination: e$destination,
          viewport: e$viewport1.frame,
          withDroppableDisplacement: true
        })
      }).sort(function (e, n) {
        var o = YN(e$pageBorderBoxCenter, MR(e$destination, HR(e, e$afterCritical1)))
        var a = YN(e$pageBorderBoxCenter, MR(e$destination, HR(n, e$afterCritical1)))
        return o < a ? -1 : a < o ? 1 : e.descriptor.index - n.descriptor.index
      })[0] || null
    }({
      pageBorderBoxCenter: e$previousPageBorderBoxCenter,
      viewport: e$viewport,
      destination: l,
      insideDestination: u,
      afterCritical: e$afterCritical
    }),
    insideDestination: u,
    viewport: e$viewport,
    afterCritical: e$afterCritical
  })
  if (!d) {
    return null
  }
  var p = LR({
    impact: d,
    draggable: e$draggable,
    droppable: l,
    draggables: e$draggables,
    afterCritical: e$afterCritical
  })
  return {
    clientSelection: FR({
      pageBorderBoxCenter: p,
      draggable: e$draggable,
      viewport: e$viewport
    }),
    impact: d,
    scrollJumpRequest: null
  }
}
var XR = function (e) {
  var t = e.at
  return t ? "REORDER" === t.type ? t.destination.droppableId : t.combine.droppableId : null
}
var QR = function (e) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$type = e.type
  var r = function (e, t) {
    var n = XR(e)
    return n ? t[n] : null
  }(e$state.impact, e$state.dimensions.droppables)
  var o = Boolean(r)
  var i = e$state.dimensions.droppables[e$state.critical.droppable.id]
  var a = r || i
  var /* [auto-meaningful-name] */a$axis$direction = a.axis.direction
  var c = "vertical" === a$axis$direction && ("MOVE_UP" === e$type || "MOVE_DOWN" === e$type) || "horizontal" === a$axis$direction && ("MOVE_LEFT" === e$type || "MOVE_RIGHT" === e$type)
  if (c && !o) {
    return null
  }
  var l = "MOVE_DOWN" === e$type || "MOVE_RIGHT" === e$type
  var u = e$state.dimensions.draggables[e$state.critical.draggable.id]
  var /* [auto-meaningful-name] */e$state$current$page$borderBoxCenter = e$state.current.page.borderBoxCenter
  var /* [auto-meaningful-name] */e$state$dimensions = e$state.dimensions
  var /* [auto-meaningful-name] */e$state$dimensions$draggables = e$state$dimensions.draggables
  var /* [auto-meaningful-name] */e$state$dimensions$droppables = e$state$dimensions.droppables
  return c ? WR({
    isMovingForward: l,
    previousPageBorderBoxCenter: e$state$current$page$borderBoxCenter,
    draggable: u,
    destination: a,
    draggables: e$state$dimensions$draggables,
    viewport: e$state.viewport,
    previousClientSelection: e$state.current.client.selection,
    previousImpact: e$state.impact,
    afterCritical: e$state.afterCritical
  }) : qR({
    isMovingForward: l,
    previousPageBorderBoxCenter: e$state$current$page$borderBoxCenter,
    draggable: u,
    isOver: a,
    draggables: e$state$dimensions$draggables,
    droppables: e$state$dimensions$droppables,
    viewport: e$state.viewport,
    afterCritical: e$state.afterCritical
  })
}
function ZR(e) {
  return "DRAGGING" === e.phase || "COLLECTING" === e.phase
}
function JR(e) {
  var t = gR(e.top, e.bottom)
  var n = gR(e.left, e.right)
  return function (e) {
    return t(e.y) && n(e.x)
  }
}
function $R(e) {
  var /* [auto-meaningful-name] */e$pageBorderBox = e.pageBorderBox
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var /* [auto-meaningful-name] */e$droppables = e.droppables
  var o = aR(e$droppables).filter(function (e) {
    if (!e.isEnabled) {
      return false
    }
    var n
    var r
    var /* [auto-meaningful-name] */e$subject$active = e.subject.active
    if (!e$subject$active) {
      return false
    }
    r = e$subject$active
    if (!((n = e$pageBorderBox).left < r.right && n.right > r.left && n.top < r.bottom && n.bottom > r.top)) {
      return false
    }
    if (JR(e$subject$active)(e$pageBorderBox.center)) {
      return true
    }
    var /* [auto-meaningful-name] */e$axis = e.axis
    var a = e$subject$active.center[e$axis.crossAxisLine]
    var s = e$pageBorderBox[e$axis.crossAxisStart]
    var c = e$pageBorderBox[e$axis.crossAxisEnd]
    var l = gR(e$subject$active[e$axis.crossAxisStart], e$subject$active[e$axis.crossAxisEnd])
    var u = l(s)
    var d = l(c)
    return !u && !d || (u ? s < a : c > a)
  })
  return o.length ? 1 === o.length ? o[0].descriptor.id : function (e) {
    var /* [auto-meaningful-name] */e$pageBorderBox1 = e.pageBorderBox
    var /* [auto-meaningful-name] */e$draggable1 = e.draggable
    var /* [auto-meaningful-name] */e$candidates = e.candidates
    var /* [auto-meaningful-name] */e$draggable1$page$borderBox$center = e$draggable1.page.borderBox.center
    var i = e$candidates.map(function (e) {
      var /* [auto-meaningful-name] */e$axis = e.axis
      var r = zN(e.axis.line, e$pageBorderBox1.center[e$axis.line], e.page.borderBox.center[e$axis.crossAxisLine])
      return {
        id: e.descriptor.id,
        distance: YN(e$draggable1$page$borderBox$center, r)
      }
    }).sort(function (e, t) {
      return t.distance - e.distance
    })
    return i[0] ? i[0].id : null
  }({
    pageBorderBox: e$pageBorderBox,
    draggable: e$draggable,
    candidates: o
  }) : null
}
var ek = function (e, t) {
  return pN(XN(e, t))
}
function tk(e) {
  var /* [auto-meaningful-name] */e$displaced = e.displaced
  var n = e.id
  return Boolean(e$displaced.visible[n] || e$displaced.invisible[n])
}
var nk = function (e) {
  var /* [auto-meaningful-name] */e$pageOffset = e.pageOffset
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var /* [auto-meaningful-name] */e$draggables = e.draggables
  var /* [auto-meaningful-name] */e$droppables = e.droppables
  var /* [auto-meaningful-name] */e$previousImpact = e.previousImpact
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$afterCritical = e.afterCritical
  var c = ek(e$draggable.page.borderBox, e$pageOffset)
  var l = $R({
    pageBorderBox: c,
    draggable: e$draggable,
    droppables: e$droppables
  })
  if (!l) {
    return mR
  }
  var u = e$droppables[l]
  var d = cR(u.descriptor.id, e$draggables)
  var p = function (e, t) {
    var /* [auto-meaningful-name] */e$frame = e.frame
    return e$frame ? ek(t, e$frame.scroll.diff.value) : t
  }(u, c)
  return function (e) {
    var /* [auto-meaningful-name] */e$draggable1 = e.draggable
    var /* [auto-meaningful-name] */e$pageBorderBoxWithDroppableScroll = e.pageBorderBoxWithDroppableScroll
    var /* [auto-meaningful-name] */e$previousImpact1 = e.previousImpact
    var /* [auto-meaningful-name] */e$destination = e.destination
    var /* [auto-meaningful-name] */e$insideDestination = e.insideDestination
    var /* [auto-meaningful-name] */e$afterCritical1 = e.afterCritical
    if (!e$destination.isCombineEnabled) {
      return null
    }
    var /* [auto-meaningful-name] */e$destination$axis = e$destination.axis
    var c = zR(e$destination.axis, e$draggable1.displaceBy)
    var /* [auto-meaningful-name] */c$value = c.value
    var u = e$pageBorderBoxWithDroppableScroll[e$destination$axis.start]
    var d = e$pageBorderBoxWithDroppableScroll[e$destination$axis.end]
    var p = nR(dR(e$draggable1, e$insideDestination), function (e) {
      var /* [auto-meaningful-name] */e$descriptor$id = e.descriptor.id
      var /* [auto-meaningful-name] */e$page$borderBox = e.page.borderBox
      var o = e$page$borderBox[e$destination$axis.size] / 4
      var i = AR(e$descriptor$id, e$afterCritical1)
      var c = tk({
        displaced: e$previousImpact1.displaced,
        id: e$descriptor$id
      })
      return i ? c ? d > e$page$borderBox[e$destination$axis.start] + o && d < e$page$borderBox[e$destination$axis.end] - o : u > e$page$borderBox[e$destination$axis.start] - c$value + o && u < e$page$borderBox[e$destination$axis.end] - c$value - o : c ? d > e$page$borderBox[e$destination$axis.start] + c$value + o && d < e$page$borderBox[e$destination$axis.end] + c$value - o : u > e$page$borderBox[e$destination$axis.start] + o && u < e$page$borderBox[e$destination$axis.end] - o
    })
    return p ? {
      displacedBy: c,
      displaced: e$previousImpact1.displaced,
      at: {
        type: "COMBINE",
        combine: {
          draggableId: p.descriptor.id,
          droppableId: e$destination.descriptor.id
        }
      }
    } : null
  }({
    pageBorderBoxWithDroppableScroll: p,
    draggable: e$draggable,
    previousImpact: e$previousImpact,
    destination: u,
    insideDestination: d,
    afterCritical: e$afterCritical
  }) || function (e) {
    var /* [auto-meaningful-name] */e$pageBorderBoxWithDroppableScroll = e.pageBorderBoxWithDroppableScroll
    var /* [auto-meaningful-name] */e$draggable1 = e.draggable
    var /* [auto-meaningful-name] */e$destination = e.destination
    var /* [auto-meaningful-name] */e$insideDestination = e.insideDestination
    var /* [auto-meaningful-name] */e$last = e.last
    var /* [auto-meaningful-name] */e$viewport1 = e.viewport
    var /* [auto-meaningful-name] */e$afterCritical1 = e.afterCritical
    var /* [auto-meaningful-name] */e$destination$axis = e$destination.axis
    var l = zR(e$destination.axis, e$draggable1.displaceBy)
    var /* [auto-meaningful-name] */l$value = l.value
    var d = e$pageBorderBoxWithDroppableScroll[e$destination$axis.start]
    var p = e$pageBorderBoxWithDroppableScroll[e$destination$axis.end]
    var f = function (e) {
      var /* [auto-meaningful-name] */e$draggable2 = e.draggable
      var /* [auto-meaningful-name] */e$closest = e.closest
      var /* [auto-meaningful-name] */e$inHomeList = e.inHomeList
      return e$closest ? e$inHomeList && e$closest.descriptor.index > e$draggable2.descriptor.index ? e$closest.descriptor.index - 1 : e$closest.descriptor.index : null
    }({
      draggable: e$draggable1,
      closest: nR(dR(e$draggable1, e$insideDestination), function (e) {
        var /* [auto-meaningful-name] */e$descriptor$id = e.descriptor.id
        var n = e.page.borderBox.center[e$destination$axis.line]
        var r = AR(e$descriptor$id, e$afterCritical1)
        var o = tk({
          displaced: e$last,
          id: e$descriptor$id
        })
        return r ? o ? p <= n : d < n - l$value : o ? p <= n + l$value : d < n
      }),
      inHomeList: pR(e$draggable1, e$destination)
    })
    return SR({
      draggable: e$draggable1,
      insideDestination: e$insideDestination,
      destination: e$destination,
      viewport: e$viewport1,
      last: e$last,
      displacedBy: l,
      index: f
    })
  }({
    pageBorderBoxWithDroppableScroll: p,
    draggable: e$draggable,
    destination: u,
    insideDestination: d,
    last: e$previousImpact.displaced,
    viewport: e$viewport,
    afterCritical: e$afterCritical
  })
}
var rk = function (e, t) {
  var n
  return Module_19.a({}, e, ((n = {})[t.descriptor.id] = t, n))
}
var ok = function (e) {
  var /* [auto-meaningful-name] */e$previousImpact = e.previousImpact
  var /* [auto-meaningful-name] */e$impact = e.impact
  var /* [auto-meaningful-name] */e$droppables = e.droppables
  var o = XR(e$previousImpact)
  var i = XR(e$impact)
  if (!o) {
    return e$droppables
  }
  if (o === i) {
    return e$droppables
  }
  var a = e$droppables[o]
  if (!a.subject.withPlaceholder) {
    return e$droppables
  }
  var s = function (e) {
    var /* [auto-meaningful-name] */e$subject$withPlaceholder = e.subject.withPlaceholder
    if (!e$subject$withPlaceholder) {
      NN(false)
    }
    var /* [auto-meaningful-name] */e$frame = e.frame
    if (!e$frame) {
      var r = JN({
        page: e.subject.page,
        axis: e.axis,
        frame: null,
        withPlaceholder: null
      })
      return Module_19.a({}, e, {
        subject: r
      })
    }
    var /* [auto-meaningful-name] */e$subject$withPlaceholder$oldFrameMaxScroll = e$subject$withPlaceholder.oldFrameMaxScroll
    if (!e$subject$withPlaceholder$oldFrameMaxScroll) {
      NN(false)
    }
    var i = YR(e$frame, e$subject$withPlaceholder$oldFrameMaxScroll)
    var a = JN({
      page: e.subject.page,
      axis: e.axis,
      frame: i,
      withPlaceholder: null
    })
    return Module_19.a({}, e, {
      subject: a,
      frame: i
    })
  }(a)
  return rk(e$droppables, s)
}
var ik = function (e) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$clientSelection = e.clientSelection
  var /* [auto-meaningful-name] */e$dimensions = e.dimensions
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$impact = e.impact
  var /* [auto-meaningful-name] */e$scrollJumpRequest = e.scrollJumpRequest
  var s = e$viewport || e$state.viewport
  var c = e$dimensions || e$state.dimensions
  var l = e$clientSelection || e$state.current.client.selection
  var u = UN(l, e$state.initial.client.selection)
  var d = {
    offset: u,
    selection: l,
    borderBoxCenter: WN(e$state.initial.client.borderBoxCenter, u)
  }
  var p = {
    selection: WN(d.selection, s.scroll.current),
    borderBoxCenter: WN(d.borderBoxCenter, s.scroll.current),
    offset: WN(d.offset, s.scroll.diff.value)
  }
  var f = {
    client: d,
    page: p
  }
  if ("COLLECTING" === e$state.phase) {
    return Module_19.a({
      phase: "COLLECTING"
    }, e$state, {
      dimensions: c,
      viewport: s,
      current: f
    })
  }
  var h = c.draggables[e$state.critical.draggable.id]
  var m = e$impact || nk({
    pageOffset: p.offset,
    draggable: h,
    draggables: c.draggables,
    droppables: c.droppables,
    previousImpact: e$state.impact,
    viewport: s,
    afterCritical: e$state.afterCritical
  })
  var g = function (e) {
    var /* [auto-meaningful-name] */e$draggable = e.draggable
    var /* [auto-meaningful-name] */e$draggables = e.draggables
    var /* [auto-meaningful-name] */e$droppables = e.droppables
    var /* [auto-meaningful-name] */e$previousImpact = e.previousImpact
    var /* [auto-meaningful-name] */e$impact1 = e.impact
    var a = ok({
      previousImpact: e$previousImpact,
      impact: e$impact1,
      droppables: e$droppables
    })
    var s = XR(e$impact1)
    if (!s) {
      return a
    }
    var c = e$droppables[s]
    if (pR(e$draggable, c)) {
      return a
    }
    if (c.subject.withPlaceholder) {
      return a
    }
    var l = KR(c, e$draggable, e$draggables)
    return rk(a, l)
  }({
    draggable: h,
    impact: m,
    previousImpact: e$state.impact,
    draggables: c.draggables,
    droppables: c.droppables
  })
  return Module_19.a({}, e$state, {
    current: f,
    dimensions: {
      draggables: c.draggables,
      droppables: g
    },
    impact: m,
    viewport: s,
    scrollJumpRequest: e$scrollJumpRequest || null,
    forceShouldAnimate: !e$scrollJumpRequest && null
  })
}
var ak = function (e) {
  var /* [auto-meaningful-name] */e$impact = e.impact
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$draggables = e.draggables
  var /* [auto-meaningful-name] */e$destination = e.destination
  var /* [auto-meaningful-name] */e$forceShouldAnimate = e.forceShouldAnimate
  var /* [auto-meaningful-name] */e$impact$displaced = e$impact.displaced
  var s = CR({
    afterDragging: function (e, t) {
      return e.map(function (e) {
        return t[e]
      })
    }(e$impact$displaced.all, e$draggables),
    destination: e$destination,
    displacedBy: e$impact.displacedBy,
    viewport: e$viewport.frame,
    forceShouldAnimate: e$forceShouldAnimate,
    last: e$impact$displaced
  })
  return Module_19.a({}, e$impact, {
    displaced: s
  })
}
var sk = function (e) {
  var /* [auto-meaningful-name] */e$impact = e.impact
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var /* [auto-meaningful-name] */e$droppable = e.droppable
  var /* [auto-meaningful-name] */e$draggables = e.draggables
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$afterCritical = e.afterCritical
  var s = LR({
    impact: e$impact,
    draggable: e$draggable,
    draggables: e$draggables,
    droppable: e$droppable,
    afterCritical: e$afterCritical
  })
  return FR({
    pageBorderBoxCenter: s,
    draggable: e$draggable,
    viewport: e$viewport
  })
}
var ck = function (e) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$dimensions = e.dimensions
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  if ("SNAP" !== e$state.movementMode) {
    NN(false)
  }
  var /* [auto-meaningful-name] */e$state$impact = e$state.impact
  var i = e$viewport || e$state.viewport
  var a = e$dimensions || e$state.dimensions
  var /* [auto-meaningful-name] */a$draggables = a.draggables
  var /* [auto-meaningful-name] */a$droppables = a.droppables
  var l = a$draggables[e$state.critical.draggable.id]
  var u = XR(e$state$impact)
  if (!u) {
    NN(false)
  }
  var d = a$droppables[u]
  var p = ak({
    impact: e$state$impact,
    viewport: i,
    destination: d,
    draggables: a$draggables
  })
  var f = sk({
    impact: p,
    draggable: l,
    droppable: d,
    draggables: a$draggables,
    viewport: i,
    afterCritical: e$state.afterCritical
  })
  return ik({
    impact: p,
    clientSelection: f,
    state: e$state,
    dimensions: a,
    viewport: i
  })
}
var lk = function (e) {
  var /* [auto-meaningful-name] */e$draggable = e.draggable
  var /* [auto-meaningful-name] */e$home = e.home
  var /* [auto-meaningful-name] */e$draggables = e.draggables
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var i = zR(e$home.axis, e$draggable.displaceBy)
  var a = cR(e$home.descriptor.id, e$draggables)
  var s = a.indexOf(e$draggable)
  if (-1 === s) {
    NN(false)
  }
  var /* [auto-meaningful-name] */e$draggable$descriptor
  var l = a.slice(s + 1)
  var u = l.reduce(function (e, t) {
    e[t.descriptor.id] = true
    return e
  }, {})
  var d = {
    inVirtualList: "virtual" === e$home.descriptor.mode,
    displacedBy: i,
    effected: u
  }
  return {
    impact: {
      displaced: CR({
        afterDragging: l,
        destination: e$home,
        displacedBy: i,
        last: null,
        viewport: e$viewport.frame,
        forceShouldAnimate: false
      }),
      displacedBy: i,
      at: {
        type: "REORDER",
        destination: (e$draggable$descriptor = e$draggable.descriptor, {
          index: e$draggable$descriptor.index,
          droppableId: e$draggable$descriptor.droppableId
        })
      }
    },
    afterCritical: d
  }
}
var uk = function (e) {
  0
}
var dk = function (e) {
  0
}
var pk = function (e) {
  var /* [auto-meaningful-name] */e$additions = e.additions
  var /* [auto-meaningful-name] */e$updatedDroppables = e.updatedDroppables
  var /* [auto-meaningful-name] */e$viewport = e.viewport
  var /* [auto-meaningful-name] */e$viewport$scroll$diff$value = e$viewport.scroll.diff.value
  return e$additions.map(function (e) {
    var /* [auto-meaningful-name] */e$descriptor$droppableId = e.descriptor.droppableId
    var /* [auto-meaningful-name] */functionEVar_AutoMeaningfulName_e$frameE$frameIfE$frameNNFalseReturnE$frameE$updatedDroppablesE$descriptor$droppableId$scroll$diff$value = function (e) {
      var /* [auto-meaningful-name] */e$frame = e.frame
      if (!e$frame) {
        NN(false)
      }
      return e$frame
    }(e$updatedDroppables[e$descriptor$droppableId]).scroll.diff.value
    return function (e) {
      var /* [auto-meaningful-name] */e$draggable = e.draggable
      var /* [auto-meaningful-name] */e$offset = e.offset
      var /* [auto-meaningful-name] */e$initialWindowScroll = e.initialWindowScroll
      var o = vN(e$draggable.client, e$offset)
      var i = bN(o, e$initialWindowScroll)
      return Module_19.a({}, e$draggable, {
        placeholder: Module_19.a({}, e$draggable.placeholder, {
          client: o
        }),
        client: o,
        page: i
      })
    }({
      draggable: e,
      offset: WN(e$viewport$scroll$diff$value, functionEVar_AutoMeaningfulName_e$frameE$frameIfE$frameNNFalseReturnE$frameE$updatedDroppablesE$descriptor$droppableId$scroll$diff$value),
      initialWindowScroll: e$viewport.scroll.initial
    })
  })
}
var fk = function (e) {
  return "SNAP" === e.movementMode
}
var hk = function (e, t, n) {
  var r = function (e, t) {
    return {
      draggables: e.draggables,
      droppables: rk(e.droppables, t)
    }
  }(e.dimensions, t)
  return !fk(e) || n ? ik({
    state: e,
    dimensions: r
  }) : ck({
    state: e,
    dimensions: r
  })
}
function mk(e) {
  return e.isDragging && "SNAP" === e.movementMode ? Module_19.a({
    phase: "DRAGGING"
  }, e, {
    scrollJumpRequest: null
  }) : e
}
var gk = {
  phase: "IDLE",
  completed: null,
  shouldFlush: false
}
var _k = function (e, t) {
  if (undefined === e) {
    e = gk
  }
  if ("FLUSH" === t.type) {
    return Module_19.a({}, gk, {
      shouldFlush: true
    })
  }
  if ("INITIAL_PUBLISH" === t.type) {
    if ("IDLE" !== e.phase) {
      NN(false)
    }
    var /* [auto-meaningful-name] */t$payload = t.payload
    var /* [auto-meaningful-name] */t$payload$critical = t$payload.critical
    var /* [auto-meaningful-name] */t$payload$clientSelection = t$payload.clientSelection
    var /* [auto-meaningful-name] */t$payload$viewport = t$payload.viewport
    var /* [auto-meaningful-name] */t$payload$dimensions = t$payload.dimensions
    var /* [auto-meaningful-name] */t$payload$movementMode = t$payload.movementMode
    var c = t$payload$dimensions.draggables[t$payload$critical.draggable.id]
    var l = t$payload$dimensions.droppables[t$payload$critical.droppable.id]
    var u = {
      selection: t$payload$clientSelection,
      borderBoxCenter: c.client.borderBox.center,
      offset: GN
    }
    var d = {
      client: u,
      page: {
        selection: WN(u.selection, t$payload$viewport.scroll.initial),
        borderBoxCenter: WN(u.selection, t$payload$viewport.scroll.initial),
        offset: WN(u.selection, t$payload$viewport.scroll.diff.value)
      }
    }
    var p = aR(t$payload$dimensions.droppables).every(function (e) {
      return !e.isFixedOnPage
    })
    var f = lk({
      draggable: c,
      home: l,
      draggables: t$payload$dimensions.draggables,
      viewport: t$payload$viewport
    })
    var /* [auto-meaningful-name] */f$impact = f.impact
    return {
      phase: "DRAGGING",
      isDragging: true,
      critical: t$payload$critical,
      movementMode: t$payload$movementMode,
      dimensions: t$payload$dimensions,
      initial: d,
      current: d,
      isWindowScrollAllowed: p,
      impact: f$impact,
      afterCritical: f.afterCritical,
      onLiftImpact: f$impact,
      viewport: t$payload$viewport,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    }
  }
  if ("COLLECTION_STARTING" === t.type) {
    return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase ? e : ("DRAGGING" !== e.phase && NN(false), Module_19.a({
      phase: "COLLECTING"
    }, e, {
      phase: "COLLECTING"
    }))
  }
  if ("PUBLISH_WHILE_DRAGGING" === t.type) {
    if ("COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase) {
      NN(false)
    }
    return function (e) {
      var /* [auto-meaningful-name] */e$state = e.state
      var /* [auto-meaningful-name] */e$published = e.published
      uk()
      var r = e$published.modified.map(function (e) {
        var n = e$state.dimensions.droppables[e.droppableId]
        return $N(n, e.scroll)
      })
      var o = Module_19.a({}, e$state.dimensions.droppables, {}, oR(r))
      var i = iR(pk({
        additions: e$published.additions,
        updatedDroppables: o,
        viewport: e$state.viewport
      }))
      var a = Module_19.a({}, e$state.dimensions.draggables, {}, i)
      e$published.removals.forEach(function (e) {
        delete a[e]
      })
      var s = {
        droppables: o,
        draggables: a
      }
      var c = XR(e$state.impact)
      var l = c ? s.droppables[c] : null
      var u = s.draggables[e$state.critical.draggable.id]
      var d = s.droppables[e$state.critical.droppable.id]
      var p = lk({
        draggable: u,
        home: d,
        draggables: a,
        viewport: e$state.viewport
      })
      var /* [auto-meaningful-name] */p$impact = p.impact
      var /* [auto-meaningful-name] */p$afterCritical = p.afterCritical
      var m = l && l.isCombineEnabled ? e$state.impact : p$impact
      var g = nk({
        pageOffset: e$state.current.page.offset,
        draggable: s.draggables[e$state.critical.draggable.id],
        draggables: s.draggables,
        droppables: s.droppables,
        previousImpact: m,
        viewport: e$state.viewport,
        afterCritical: p$afterCritical
      })
      dk()
      var _ = Module_19.a({
        phase: "DRAGGING"
      }, e$state, {
        phase: "DRAGGING",
        impact: g,
        onLiftImpact: p$impact,
        dimensions: s,
        afterCritical: p$afterCritical,
        forceShouldAnimate: false
      })
      return "COLLECTING" === e$state.phase ? _ : Module_19.a({
        phase: "DROP_PENDING"
      }, _, {
        phase: "DROP_PENDING",
        reason: e$state.reason,
        isWaiting: false
      })
    }({
      state: e,
      published: t.payload
    })
  }
  if ("MOVE" === t.type) {
    if ("DROP_PENDING" === e.phase) {
      return e
    }
    if (!ZR(e)) {
      NN(false)
    }
    var /* [auto-meaningful-name] */t$payload$client = t.payload.client
    return HN(t$payload$client, e.current.client.selection) ? e : ik({
      state: e,
      clientSelection: t$payload$client,
      impact: fk(e) ? e.impact : null
    })
  }
  if ("UPDATE_DROPPABLE_SCROLL" === t.type) {
    if ("DROP_PENDING" === e.phase) {
      return mk(e)
    }
    if ("COLLECTING" === e.phase) {
      return mk(e)
    }
    if (!ZR(e)) {
      NN(false)
    }
    var /* [auto-meaningful-name] */t$payload1 = t.payload
    var /* [auto-meaningful-name] */t$payload1$id = t$payload1.id
    var /* [auto-meaningful-name] */t$payload1$newScroll = t$payload1.newScroll
    var b = e.dimensions.droppables[t$payload1$id]
    if (!b) {
      return e
    }
    var y = $N(b, t$payload1$newScroll)
    return hk(e, y, false)
  }
  if ("UPDATE_DROPPABLE_IS_ENABLED" === t.type) {
    if ("DROP_PENDING" === e.phase) {
      return e
    }
    if (!ZR(e)) {
      NN(false)
    }
    var /* [auto-meaningful-name] */t$payload2 = t.payload
    var /* [auto-meaningful-name] */t$payload2$id = t$payload2.id
    var /* [auto-meaningful-name] */t$payload2$isEnabled = t$payload2.isEnabled
    var C = e.dimensions.droppables[t$payload2$id]
    if (!C) {
      NN(false)
    }
    if (C.isEnabled === t$payload2$isEnabled) {
      NN(false)
    }
    var T = Module_19.a({}, C, {
      isEnabled: t$payload2$isEnabled
    })
    return hk(e, T, true)
  }
  if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === t.type) {
    if ("DROP_PENDING" === e.phase) {
      return e
    }
    if (!ZR(e)) {
      NN(false)
    }
    var /* [auto-meaningful-name] */t$payload3 = t.payload
    var /* [auto-meaningful-name] */t$payload3$id = t$payload3.id
    var /* [auto-meaningful-name] */t$payload3$isCombineEnabled = t$payload3.isCombineEnabled
    var j = e.dimensions.droppables[t$payload3$id]
    if (!j) {
      NN(false)
    }
    if (j.isCombineEnabled === t$payload3$isCombineEnabled) {
      NN(false)
    }
    var N = Module_19.a({}, j, {
      isCombineEnabled: t$payload3$isCombineEnabled
    })
    return hk(e, N, true)
  }
  if ("MOVE_BY_WINDOW_SCROLL" === t.type) {
    if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase) {
      return e
    }
    if (!ZR(e)) {
      NN(false)
    }
    if (!e.isWindowScrollAllowed) {
      NN(false)
    }
    var /* [auto-meaningful-name] */t$payload$newScroll = t.payload.newScroll
    if (HN(e.viewport.scroll.current, t$payload$newScroll)) {
      return mk(e)
    }
    var k = PR(e.viewport, t$payload$newScroll)
    return fk(e) ? ck({
      state: e,
      viewport: k
    }) : ik({
      state: e,
      viewport: k
    })
  }
  if ("UPDATE_VIEWPORT_MAX_SCROLL" === t.type) {
    if (!ZR(e)) {
      return e
    }
    var /* [auto-meaningful-name] */t$payload$maxScroll = t.payload.maxScroll
    if (HN(t$payload$maxScroll, e.viewport.scroll.max)) {
      return e
    }
    var D = Module_19.a({}, e.viewport, {
      scroll: Module_19.a({}, e.viewport.scroll, {
        max: t$payload$maxScroll
      })
    })
    return Module_19.a({
      phase: "DRAGGING"
    }, e, {
      viewport: D
    })
  }
  if ("MOVE_UP" === t.type || "MOVE_DOWN" === t.type || "MOVE_LEFT" === t.type || "MOVE_RIGHT" === t.type) {
    if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) {
      return e
    }
    if ("DRAGGING" !== e.phase) {
      NN(false)
    }
    var M = QR({
      state: e,
      type: t.type
    })
    return M ? ik({
      state: e,
      impact: M.impact,
      clientSelection: M.clientSelection,
      scrollJumpRequest: M.scrollJumpRequest
    }) : e
  }
  if ("DROP_PENDING" === t.type) {
    var /* [auto-meaningful-name] */t$payload$reason = t.payload.reason
    if ("COLLECTING" !== e.phase) {
      NN(false)
    }
    return Module_19.a({
      phase: "DROP_PENDING"
    }, e, {
      phase: "DROP_PENDING",
      isWaiting: true,
      reason: t$payload$reason
    })
  }
  if ("DROP_ANIMATE" === t.type) {
    var /* [auto-meaningful-name] */t$payload4 = t.payload
    var /* [auto-meaningful-name] */t$payload4$completed = t$payload4.completed
    var /* [auto-meaningful-name] */t$payload4$dropDuration = t$payload4.dropDuration
    var /* [auto-meaningful-name] */t$payload4$newHomeClientOffset = t$payload4.newHomeClientOffset
    if ("DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase) {
      NN(false)
    }
    return {
      phase: "DROP_ANIMATING",
      completed: t$payload4$completed,
      dropDuration: t$payload4$dropDuration,
      newHomeClientOffset: t$payload4$newHomeClientOffset,
      dimensions: e.dimensions
    }
  }
  return "DROP_COMPLETE" === t.type ? {
    phase: "IDLE",
    completed: t.payload.completed,
    shouldFlush: false
  } : e
}
var vk = function (e) {
  return {
    type: "PUBLISH_WHILE_DRAGGING",
    payload: e
  }
}
var bk = function () {
  return {
    type: "COLLECTION_STARTING",
    payload: null
  }
}
var yk = function (e) {
  return {
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: e
  }
}
var Ek = function (e) {
  return {
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: e
  }
}
var Ok = function (e) {
  return {
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: e
  }
}
var wk = function (e) {
  return {
    type: "MOVE",
    payload: e
  }
}
var Ck = function () {
  return {
    type: "MOVE_UP",
    payload: null
  }
}
var Tk = function () {
  return {
    type: "MOVE_DOWN",
    payload: null
  }
}
var Sk = function () {
  return {
    type: "MOVE_RIGHT",
    payload: null
  }
}
var Ak = function () {
  return {
    type: "MOVE_LEFT",
    payload: null
  }
}
var Ik = function (e) {
  return {
    type: "DROP_COMPLETE",
    payload: e
  }
}
var jk = function (e) {
  return {
    type: "DROP",
    payload: e
  }
}
var Nk = function () {
  return {
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  }
}
var /* [auto-meaningful-name] */CubicBezier$21$11 = "cubic-bezier(.2,1,.1,1)"
var kk = {
  drop: 0,
  combining: .7
}
var xk = {
  drop: .75
}
var Dk = .2 + "s " + "cubic-bezier(0.2, 0, 0, 1)"
var Mk = {
  fluid: "opacity " + Dk,
  snap: "transform " + Dk + ", opacity " + Dk,
  drop: function (e) {
    var t = e + "s " + CubicBezier$21$11
    return "transform " + t + ", opacity " + t
  },
  outOfTheWay: "transform " + Dk,
  placeholder: "height " + Dk + ", width " + Dk + ", margin " + Dk
}
var Lk = function (e) {
  return HN(e, GN) ? null : "translate(" + e.x + "px, " + e.y + "px)"
}
var Pk = Lk
var Bk = function (e, t) {
  var n = Lk(e)
  return n ? t ? n + " scale(" + xk.drop + ")" : n : null
}
var Fk = .33
var Gk = .55
var Wk = Gk - Fk
var Uk = function (e) {
  var /* [auto-meaningful-name] */e$getState = e.getState
  var /* [auto-meaningful-name] */e$dispatch = e.dispatch
  return function (e) {
    return function (r) {
      if ("DROP" === r.type) {
        var o = e$getState()
        var /* [auto-meaningful-name] */r$payload$reason = r.payload.reason
        if ("COLLECTING" !== o.phase) {
          if ("IDLE" !== o.phase) {
            if ("DROP_PENDING" === o.phase && o.isWaiting) {
              NN(false)
            }
            if ("DRAGGING" !== o.phase && "DROP_PENDING" !== o.phase) {
              NN(false)
            }
            var /* [auto-meaningful-name] */o$critical = o.critical
            var /* [auto-meaningful-name] */o$dimensions = o.dimensions
            var c = o$dimensions.draggables[o.critical.draggable.id]
            var l = function (e) {
              var /* [auto-meaningful-name] */e$draggables = e.draggables
              var /* [auto-meaningful-name] */e$reason = e.reason
              var /* [auto-meaningful-name] */e$lastImpact = e.lastImpact
              var /* [auto-meaningful-name] */e$home = e.home
              var /* [auto-meaningful-name] */e$viewport = e.viewport
              var /* [auto-meaningful-name] */e$onLiftImpact = e.onLiftImpact
              return e$lastImpact.at && "DROP" === e$reason ? "REORDER" === e$lastImpact.at.type ? {
                impact: e$lastImpact,
                didDropInsideDroppable: true
              } : {
                impact: Module_19.a({}, e$lastImpact, {
                  displaced: hR
                }),
                didDropInsideDroppable: true
              } : {
                impact: ak({
                  draggables: e$draggables,
                  impact: e$onLiftImpact,
                  destination: e$home,
                  viewport: e$viewport,
                  forceShouldAnimate: true
                }),
                didDropInsideDroppable: false
              }
            }({
              reason: r$payload$reason,
              lastImpact: o.impact,
              afterCritical: o.afterCritical,
              onLiftImpact: o.onLiftImpact,
              home: o.dimensions.droppables[o.critical.droppable.id],
              viewport: o.viewport,
              draggables: o.dimensions.draggables
            })
            var /* [auto-meaningful-name] */l$impact = l.impact
            var /* [auto-meaningful-name] */l$didDropInsideDroppable = l.didDropInsideDroppable
            var p = l$didDropInsideDroppable ? lR(l$impact) : null
            var f = l$didDropInsideDroppable ? uR(l$impact) : null
            var h = {
              index: o$critical.draggable.index,
              droppableId: o$critical.droppable.id
            }
            var m = {
              draggableId: c.descriptor.id,
              type: c.descriptor.type,
              source: h,
              reason: r$payload$reason,
              mode: o.movementMode,
              destination: p,
              combine: f
            }
            var g = function (e) {
              var /* [auto-meaningful-name] */e$impact = e.impact
              var /* [auto-meaningful-name] */e$draggable = e.draggable
              var /* [auto-meaningful-name] */e$dimensions = e.dimensions
              var /* [auto-meaningful-name] */e$viewport = e.viewport
              var /* [auto-meaningful-name] */e$afterCritical = e.afterCritical
              var /* [auto-meaningful-name] */e$dimensions$draggables = e$dimensions.draggables
              var /* [auto-meaningful-name] */e$dimensions$droppables = e$dimensions.droppables
              var c = XR(e$impact)
              var l = c ? e$dimensions$droppables[c] : null
              var u = e$dimensions$droppables[e$draggable.descriptor.droppableId]
              var d = sk({
                impact: e$impact,
                draggable: e$draggable,
                draggables: e$dimensions$draggables,
                afterCritical: e$afterCritical,
                droppable: l || u,
                viewport: e$viewport
              })
              return UN(d, e$draggable.client.borderBox.center)
            }({
              impact: l$impact,
              draggable: c,
              dimensions: o$dimensions,
              viewport: o.viewport,
              afterCritical: o.afterCritical
            })
            var _ = {
              critical: o.critical,
              afterCritical: o.afterCritical,
              result: m,
              impact: l$impact
            }
            if (!HN(o.current.client.offset, g) || Boolean(m.combine)) {
              var v = function (e) {
                var /* [auto-meaningful-name] */e$current = e.current
                var /* [auto-meaningful-name] */e$destination = e.destination
                var /* [auto-meaningful-name] */e$reason = e.reason
                var o = YN(e$current, e$destination)
                if (o <= 0) {
                  return Fk
                }
                if (o >= 1500) {
                  return Gk
                }
                var i = Fk + Wk * (o / 1500)
                return Number(("CANCEL" === e$reason ? .6 * i : i).toFixed(2))
              }({
                current: o.current.client.offset,
                destination: g,
                reason: r$payload$reason
              })
              e$dispatch(function (e) {
                return {
                  type: "DROP_ANIMATE",
                  payload: e
                }
              }({
                newHomeClientOffset: g,
                dropDuration: v,
                completed: _
              }))
            } else {
              e$dispatch(Ik({
                completed: _
              }))
            }
          }
        } else {
          e$dispatch(function (e) {
            return {
              type: "DROP_PENDING",
              payload: e
            }
          }({
            reason: r$payload$reason
          }))
        }
      } else {
        e(r)
      }
    }
  }
}
var Hk = function () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  }
}
function Vk(e) {
  var /* [auto-meaningful-name] */e$onWindowScroll = e.onWindowScroll
  var n
  var r = TN(function () {
    e$onWindowScroll(Hk())
  })
  n = r
  var o = {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function (e) {
      if (!(e.target !== window && e.target !== window.document)) {
        n()
      }
    }
  }
  var i = AN
  function a() {
    return i !== AN
  }
  return {
    start: function () {
      if (a()) {
        NN(false)
      }
      i = IN(window, [o])
    },
    stop: function () {
      if (!a()) {
        NN(false)
      }
      r.cancel()
      i()
      i = AN
    },
    isActive: a
  }
}
var zk = function (e) {
  var t = Vk({
    onWindowScroll: function (t) {
      e.dispatch({
        type: "MOVE_BY_WINDOW_SCROLL",
        payload: {
          newScroll: t
        }
      })
    }
  })
  return function (e) {
    return function (n) {
      if (!(t.isActive() || "INITIAL_PUBLISH" !== n.type)) {
        t.start()
      }
      if (t.isActive() && function (e) {
        return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type
      }(n)) {
        t.stop()
      }
      e(n)
    }
  }
}
var Yk = function () {
  var e = []
  return {
    add: function (t) {
      var n = setTimeout(function () {
        return function (t) {
          var n = tR(e, function (e) {
            return e.timerId === t
          })
          if (-1 === n) {
            NN(false)
          }
          e.splice(n, 1)[0].callback()
        }(n)
      })
      var r = {
        timerId: n,
        callback: t
      }
      e.push(r)
    },
    flush: function () {
      if (e.length) {
        var t = [].concat(e)
        e.length = 0
        t.forEach(function (e) {
          clearTimeout(e.timerId)
          e.callback()
        })
      }
    }
  }
}
var Kk = function (e, t) {
  uk()
  t()
  dk()
}
var qk = function (e, t) {
  return {
    draggableId: e.draggable.id,
    type: e.droppable.type,
    source: {
      droppableId: e.droppable.id,
      index: e.draggable.index
    },
    mode: t
  }
}
var Xk = function (e, t, n, r) {
  if (e) {
    var o = function (e) {
      var t = false
      var n = false
      var r = setTimeout(function () {
        n = true
      })
      var o = function (o) {
        if (!(t || n)) {
          t = true
          e(o)
          clearTimeout(r)
        }
      }
      o.wasCalled = function () {
        return t
      }
      return o
    }(n)
    e(t, {
      announce: o
    })
    if (!o.wasCalled()) {
      n(r(t))
    }
  } else {
    n(r(t))
  }
}
var Qk = function (e, t) {
  var n = function (e, t) {
    var n = Yk()
    var r = null
    var o = function (n) {
      if (!r) {
        NN(false)
      }
      r = null
      Kk(0, function () {
        return Xk(e().onDragEnd, n, t, FN)
      })
    }
    return {
      beforeCapture: function (t, n) {
        if (r) {
          NN(false)
        }
        Kk(0, function () {
          var /* [auto-meaningful-name] */e$onBeforeCapture = e().onBeforeCapture
          if (e$onBeforeCapture) {
            e$onBeforeCapture({
              draggableId: t,
              mode: n
            })
          }
        })
      },
      beforeStart: function (t, n) {
        if (r) {
          NN(false)
        }
        Kk(0, function () {
          var /* [auto-meaningful-name] */e$onBeforeDragStart = e().onBeforeDragStart
          if (e$onBeforeDragStart) {
            e$onBeforeDragStart(qk(t, n))
          }
        })
      },
      start: function (o, i) {
        if (r) {
          NN(false)
        }
        var a = qk(o, i)
        r = {
          mode: i,
          lastCritical: o,
          lastLocation: a.source,
          lastCombine: null
        }
        n.add(function () {
          Kk(0, function () {
            return Xk(e().onDragStart, a, t, PN)
          })
        })
      },
      update: function (o, i) {
        var a = lR(i)
        var s = uR(i)
        if (!r) {
          NN(false)
        }
        var c = !function (e, t) {
          if (e === t) {
            return true
          }
          var n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index
          var r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type
          return n && r
        }(o, r.lastCritical)
        if (c) {
          r.lastCritical = o
        }
        var /* [auto-meaningful-name] */r$lastLocation
        var u
        r$lastLocation = r.lastLocation
        u = a
        var d = !(null == r$lastLocation && null == u || null != r$lastLocation && null != u && r$lastLocation.droppableId === u.droppableId && r$lastLocation.index === u.index)
        if (d) {
          r.lastLocation = a
        }
        var p = !function (e, t) {
          return null == e && null == t || null != e && null != t && e.draggableId === t.draggableId && e.droppableId === t.droppableId
        }(r.lastCombine, s)
        if (p) {
          r.lastCombine = s
        }
        if (c || d || p) {
          var f = Module_19.a({}, qk(o, r.mode), {
            combine: s,
            destination: a
          })
          n.add(function () {
            Kk(0, function () {
              return Xk(e().onDragUpdate, f, t, BN)
            })
          })
        }
      },
      flush: function () {
        if (!r) {
          NN(false)
        }
        n.flush()
      },
      drop: o,
      abort: function () {
        if (r) {
          var e = Module_19.a({}, qk(r.lastCritical, r.mode), {
            combine: null,
            destination: null,
            reason: "CANCEL"
          })
          o(e)
        }
      }
    }
  }(e, t)
  return function (e) {
    return function (t) {
      return function (r) {
        if ("BEFORE_INITIAL_CAPTURE" !== r.type) {
          if ("INITIAL_PUBLISH" === r.type) {
            var /* [auto-meaningful-name] */r$payload$critical = r.payload.critical
            n.beforeStart(r$payload$critical, r.payload.movementMode)
            t(r)
            return void n.start(r$payload$critical, r.payload.movementMode)
          }
          if ("DROP_COMPLETE" === r.type) {
            var /* [auto-meaningful-name] */r$payload$completed$result = r.payload.completed.result
            n.flush()
            t(r)
            return void n.drop(r$payload$completed$result)
          }
          t(r)
          if ("FLUSH" !== r.type) {
            var a = e.getState()
            if ("DRAGGING" === a.phase) {
              n.update(a.critical, a.impact)
            }
          } else {
            n.abort()
          }
        } else {
          n.beforeCapture(r.payload.draggableId, r.payload.movementMode)
        }
      }
    }
  }
}
var Zk = function (e) {
  return function (t) {
    return function (n) {
      if ("DROP_ANIMATION_FINISHED" === n.type) {
        var r = e.getState()
        if ("DROP_ANIMATING" !== r.phase) {
          NN(false)
        }
        e.dispatch(Ik({
          completed: r.completed
        }))
      } else {
        t(n)
      }
    }
  }
}
var Jk = function (e) {
  var t = null
  var n = null
  return function (r) {
    return function (o) {
      if (!("FLUSH" !== o.type && "DROP_COMPLETE" !== o.type && "DROP_ANIMATION_FINISHED" !== o.type)) {
        if (n) {
          cancelAnimationFrame(n)
          n = null
        }
        if (t) {
          t()
          t = null
        }
      }
      r(o)
      if ("DROP_ANIMATE" === o.type) {
        var i = {
          eventName: "scroll",
          options: {
            capture: true,
            passive: false,
            once: true
          },
          fn: function () {
            if ("DROP_ANIMATING" === e.getState().phase) {
              e.dispatch({
                type: "DROP_ANIMATION_FINISHED",
                payload: null
              })
            }
          }
        }
        n = requestAnimationFrame(function () {
          n = null
          t = IN(window, [i])
        })
      }
    }
  }
}
var $k = function (e) {
  return function (t) {
    return function (n) {
      t(n)
      if ("PUBLISH_WHILE_DRAGGING" === n.type) {
        var r = e.getState()
        if ("DROP_PENDING" === r.phase) {
          if (!r.isWaiting) {
            e.dispatch(jk({
              reason: r.reason
            }))
          }
        }
      }
    }
  }
}
var /* [auto-meaningful-name] */Redux$compose = Redux.compose
var tx = function (e) {
  var t
  var /* [auto-meaningful-name] */e$dimensionMarshal = e.dimensionMarshal
  var /* [auto-meaningful-name] */e$focusMarshal = e.focusMarshal
  var /* [auto-meaningful-name] */e$styleMarshal = e.styleMarshal
  var /* [auto-meaningful-name] */e$getResponders = e.getResponders
  var /* [auto-meaningful-name] */e$announce = e.announce
  var /* [auto-meaningful-name] */e$autoScroller = e.autoScroller
  return Redux.createStore(_k, Redux$compose(Redux.applyMiddleware((t = e$styleMarshal, function () {
    return function (e) {
      return function (n) {
        if ("INITIAL_PUBLISH" === n.type) {
          t.dragging()
        }
        if ("DROP_ANIMATE" === n.type) {
          t.dropping(n.payload.completed.result.reason)
        }
        if (!("FLUSH" !== n.type && "DROP_COMPLETE" !== n.type)) {
          t.resting()
        }
        e(n)
      }
    }
  }), function (e) {
    return function () {
      return function (t) {
        return function (n) {
          if (!("DROP_COMPLETE" !== n.type && "FLUSH" !== n.type && "DROP_ANIMATE" !== n.type)) {
            e.stopPublishing()
          }
          t(n)
        }
      }
    }
  }(e$dimensionMarshal), function (e) {
    return function (t) {
      var /* [auto-meaningful-name] */t$getState = t.getState
      var /* [auto-meaningful-name] */t$dispatch = t.dispatch
      return function (t) {
        return function (o) {
          if ("LIFT" === o.type) {
            var /* [auto-meaningful-name] */o$payload = o.payload
            var /* [auto-meaningful-name] */o$payload$id = o$payload.id
            var /* [auto-meaningful-name] */o$payload$clientSelection = o$payload.clientSelection
            var /* [auto-meaningful-name] */o$payload$movementMode = o$payload.movementMode
            var l = t$getState()
            if ("DROP_ANIMATING" === l.phase) {
              t$dispatch(Ik({
                completed: l.completed
              }))
            }
            if ("IDLE" !== t$getState().phase) {
              NN(false)
            }
            t$dispatch({
              type: "FLUSH",
              payload: null
            })
            t$dispatch({
              type: "BEFORE_INITIAL_CAPTURE",
              payload: {
                draggableId: o$payload$id,
                movementMode: o$payload$movementMode
              }
            })
            var u = {
              draggableId: o$payload$id,
              scrollOptions: {
                shouldPublishImmediately: "SNAP" === o$payload$movementMode
              }
            }
            var d = e.startPublishing(u)
            var /* [auto-meaningful-name] */d$critical = d.critical
            var /* [auto-meaningful-name] */d$dimensions = d.dimensions
            var /* [auto-meaningful-name] */d$viewport = d.viewport
            t$dispatch(function (e) {
              return {
                type: "INITIAL_PUBLISH",
                payload: e
              }
            }({
              critical: d$critical,
              dimensions: d$dimensions,
              clientSelection: o$payload$clientSelection,
              movementMode: o$payload$movementMode,
              viewport: d$viewport
            }))
          } else {
            t(o)
          }
        }
      }
    }
  }(e$dimensionMarshal), Uk, Zk, Jk, $k, function (e) {
    return function (t) {
      return function (n) {
        return function (r) {
          if (function (e) {
            return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type
          }(r)) {
            e.stop()
            return void n(r)
          }
          if ("INITIAL_PUBLISH" === r.type) {
            n(r)
            var o = t.getState()
            if ("DRAGGING" !== o.phase) {
              NN(false)
            }
            return void e.start(o)
          }
          n(r)
          e.scroll(t.getState())
        }
      }
    }
  }(e$autoScroller), zk, function (e) {
    var t = false
    return function () {
      return function (n) {
        return function (r) {
          if ("INITIAL_PUBLISH" === r.type) {
            t = true
            e.tryRecordFocus(r.payload.critical.draggable.id)
            n(r)
            return void e.tryRestoreFocusRecorded()
          }
          n(r)
          if (t) {
            if ("FLUSH" === r.type) {
              t = false
              return void e.tryRestoreFocusRecorded()
            }
            if ("DROP_COMPLETE" === r.type) {
              t = false
              var /* [auto-meaningful-name] */r$payload$completed$result = r.payload.completed.result
              if (r$payload$completed$result.combine) {
                e.tryShiftRecord(r$payload$completed$result.draggableId, r$payload$completed$result.combine.draggableId)
              }
              e.tryRestoreFocusRecorded()
            }
          }
        }
      }
    }
  }(e$focusMarshal), Qk(e$getResponders, e$announce))))
}
var nx = function (e) {
  var /* [auto-meaningful-name] */e$scrollHeight = e.scrollHeight
  var /* [auto-meaningful-name] */e$scrollWidth = e.scrollWidth
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$width = e.width
  var i = UN({
    x: e$scrollWidth,
    y: e$scrollHeight
  }, {
    x: e$width,
    y: e$height
  })
  return {
    x: Math.max(0, i.x),
    y: Math.max(0, i.y)
  }
}
var rx = function () {
  var /* [auto-meaningful-name] */document$documentElement = document.documentElement
  if (!document$documentElement) {
    NN(false)
  }
  return document$documentElement
}
var ox = function () {
  var e = rx()
  return nx({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  })
}
var ix = function (e) {
  var /* [auto-meaningful-name] */e$critical = e.critical
  var /* [auto-meaningful-name] */e$scrollOptions = e.scrollOptions
  var /* [auto-meaningful-name] */e$registry = e.registry
  uk()
  var o = function () {
    var e = Hk()
    var t = ox()
    var n = e.y
    var r = e.x
    var o = rx()
    var /* [auto-meaningful-name] */o$clientWidth = o.clientWidth
    var /* [auto-meaningful-name] */o$clientHeight = o.clientHeight
    return {
      frame: pN({
        top: n,
        left: r,
        right: r + o$clientWidth,
        bottom: n + o$clientHeight
      }),
      scroll: {
        initial: e,
        current: e,
        max: t,
        diff: {
          value: GN,
          displacement: GN
        }
      }
    }
  }()
  var /* [auto-meaningful-name] */o$scroll$current = o.scroll.current
  var /* [auto-meaningful-name] */e$critical$droppable = e$critical.droppable
  var s = e$registry.droppable.getAllByType(e$critical$droppable.type).map(function (e) {
    return e.callbacks.getDimensionAndWatchScroll(o$scroll$current, e$scrollOptions)
  })
  var c = e$registry.draggable.getAllByType(e$critical.draggable.type).map(function (e) {
    return e.getDimension(o$scroll$current)
  })
  var l = {
    draggables: iR(c),
    droppables: oR(s)
  }
  dk()
  return {
    dimensions: l,
    critical: e$critical,
    viewport: o
  }
}
function ax(e, t, n) {
  return n.descriptor.id !== t.id && n.descriptor.type === t.type && "virtual" === e.droppable.getById(n.descriptor.droppableId).descriptor.mode
}
var sx = function (e, t) {
  var n = null
  var r = function (e) {
    var /* [auto-meaningful-name] */e$registry = e.registry
    var /* [auto-meaningful-name] */e$callbacks = e.callbacks
    var r = {
      additions: {},
      removals: {},
      modified: {}
    }
    var o = null
    var i = function () {
      if (!o) {
        e$callbacks.collectionStarting()
        o = requestAnimationFrame(function () {
          o = null
          uk()
          var e = r
          var /* [auto-meaningful-name] */e$additions = e.additions
          var /* [auto-meaningful-name] */e$removals = e.removals
          var /* [auto-meaningful-name] */e$modified = e.modified
          var c = Object.keys(e$additions).map(function (e) {
            return e$registry.draggable.getById(e).getDimension(GN)
          }).sort(function (e, t) {
            return e.descriptor.index - t.descriptor.index
          })
          var l = Object.keys(e$modified).map(function (e) {
            return {
              droppableId: e,
              scroll: e$registry.droppable.getById(e).callbacks.getScrollWhileDragging()
            }
          })
          var u = {
            additions: c,
            removals: Object.keys(e$removals),
            modified: l
          }
          r = {
            additions: {},
            removals: {},
            modified: {}
          }
          dk()
          e$callbacks.publish(u)
        })
      }
    }
    return {
      add: function (e) {
        var /* [auto-meaningful-name] */e$descriptor$id = e.descriptor.id
        r.additions[e$descriptor$id] = e
        r.modified[e.descriptor.droppableId] = true
        if (r.removals[e$descriptor$id]) {
          delete r.removals[e$descriptor$id]
        }
        i()
      },
      remove: function (e) {
        var /* [auto-meaningful-name] */e$descriptor = e.descriptor
        r.removals[e$descriptor.id] = true
        r.modified[e$descriptor.droppableId] = true
        if (r.additions[e$descriptor.id]) {
          delete r.additions[e$descriptor.id]
        }
        i()
      },
      stop: function () {
        if (o) {
          cancelAnimationFrame(o)
          o = null
          r = {
            additions: {},
            removals: {},
            modified: {}
          }
        }
      }
    }
  }({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  })
  var o = function (t) {
    if (!n) {
      NN(false)
    }
    var /* [auto-meaningful-name] */n$critical$draggable = n.critical.draggable
    if ("ADDITION" === t.type && ax(e, n$critical$draggable, t.value)) {
      r.add(t.value)
    }
    if ("REMOVAL" === t.type && ax(e, n$critical$draggable, t.value)) {
      r.remove(t.value)
    }
  }
  return {
    updateDroppableIsEnabled: function (r, o) {
      if (!e.droppable.exists(r)) {
        NN(false)
      }
      if (n) {
        t.updateDroppableIsEnabled({
          id: r,
          isEnabled: o
        })
      }
    },
    updateDroppableIsCombineEnabled: function (r, o) {
      if (n) {
        if (!e.droppable.exists(r)) {
          NN(false)
        }
        t.updateDroppableIsCombineEnabled({
          id: r,
          isCombineEnabled: o
        })
      }
    },
    scrollDroppable: function (t, r) {
      if (n) {
        e.droppable.getById(t).callbacks.scroll(r)
      }
    },
    updateDroppableScroll: function (r, o) {
      if (n) {
        if (!e.droppable.exists(r)) {
          NN(false)
        }
        t.updateDroppableScroll({
          id: r,
          newScroll: o
        })
      }
    },
    startPublishing: function (t) {
      if (n) {
        NN(false)
      }
      var r = e.draggable.getById(t.draggableId)
      var i = e.droppable.getById(r.descriptor.droppableId)
      var a = {
        draggable: r.descriptor,
        droppable: i.descriptor
      }
      var s = e.subscribe(o)
      n = {
        critical: a,
        unsubscribe: s
      }
      return ix({
        critical: a,
        registry: e,
        scrollOptions: t.scrollOptions
      })
    },
    stopPublishing: function () {
      if (n) {
        r.stop()
        var /* [auto-meaningful-name] */n$critical$droppable = n.critical.droppable
        e.droppable.getAllByType(n$critical$droppable.type).forEach(function (e) {
          return e.callbacks.dragStopped()
        })
        n.unsubscribe()
        n = null
      }
    }
  }
}
var cx = function (e, t) {
  return "IDLE" === e.phase || "DROP_ANIMATING" === e.phase && e.completed.result.draggableId !== t && "DROP" === e.completed.result.reason
}
var lx = function (e) {
  window.scrollBy(e.x, e.y)
}
var ux = CN(function (e) {
  return aR(e).filter(function (e) {
    return !!e.isEnabled && !!e.frame
  })
})
var dx = function (e) {
  var /* [auto-meaningful-name] */e$center = e.center
  var /* [auto-meaningful-name] */e$destination = e.destination
  var /* [auto-meaningful-name] */e$droppables = e.droppables
  if (e$destination) {
    var o = e$droppables[e$destination]
    return o.frame ? o : null
  }
  return function (e, t) {
    return nR(ux(t), function (t) {
      if (!t.frame) {
        NN(false)
      }
      return JR(t.frame.pageMarginBox)(e)
    })
  }(e$center, e$droppables)
}
var px = .25
var fx = .05
var hx = 28
var mx = function (e) {
  return Math.pow(e, 2)
}
var gx = {
  stopDampeningAt: 1200,
  accelerateAt: 360
}
var _x = function (e) {
  var /* [auto-meaningful-name] */e$startOfRange = e.startOfRange
  var /* [auto-meaningful-name] */e$endOfRange = e.endOfRange
  var /* [auto-meaningful-name] */e$current = e.current
  var o = e$endOfRange - e$startOfRange
  return 0 === o ? 0 : (e$current - e$startOfRange) / o
}
var /* [auto-meaningful-name] */gx$accelerateAt = gx.accelerateAt
var /* [auto-meaningful-name] */gx$stopDampeningAt = gx.stopDampeningAt
var yx = function (e) {
  var /* [auto-meaningful-name] */e$distanceToEdge = e.distanceToEdge
  var /* [auto-meaningful-name] */e$thresholds = e.thresholds
  var /* [auto-meaningful-name] */e$dragStartTime = e.dragStartTime
  var /* [auto-meaningful-name] */e$shouldUseTimeDampening = e.shouldUseTimeDampening
  var i = function (e, t) {
    if (e > t.startScrollingFrom) {
      return 0
    }
    if (e <= t.maxScrollValueAt) {
      return hx
    }
    if (e === t.startScrollingFrom) {
      return 1
    }
    var n = _x({
      startOfRange: t.maxScrollValueAt,
      endOfRange: t.startScrollingFrom,
      current: e
    })
    var r = hx * mx(1 - n)
    return Math.ceil(r)
  }(e$distanceToEdge, e$thresholds)
  return 0 === i ? 0 : e$shouldUseTimeDampening ? Math.max(function (e, t) {
    var n = t
    var r = gx$stopDampeningAt
    var o = Date.now() - n
    if (o >= gx$stopDampeningAt) {
      return e
    }
    if (o < gx$accelerateAt) {
      return 1
    }
    var i = _x({
      startOfRange: gx$accelerateAt,
      endOfRange: r,
      current: o
    })
    var a = e * mx(i)
    return Math.ceil(a)
  }(i, e$dragStartTime), 1) : i
}
var Ex = function (e) {
  var /* [auto-meaningful-name] */e$container = e.container
  var /* [auto-meaningful-name] */e$distanceToEdges = e.distanceToEdges
  var /* [auto-meaningful-name] */e$dragStartTime = e.dragStartTime
  var /* [auto-meaningful-name] */e$axis = e.axis
  var /* [auto-meaningful-name] */e$shouldUseTimeDampening = e.shouldUseTimeDampening
  var a = function (e, t) {
    return {
      startScrollingFrom: e[t.size] * px,
      maxScrollValueAt: e[t.size] * fx
    }
  }(e$container, e$axis)
  return e$distanceToEdges[e$axis.end] < e$distanceToEdges[e$axis.start] ? yx({
    distanceToEdge: e$distanceToEdges[e$axis.end],
    thresholds: a,
    dragStartTime: e$dragStartTime,
    shouldUseTimeDampening: e$shouldUseTimeDampening
  }) : -1 * yx({
    distanceToEdge: e$distanceToEdges[e$axis.start],
    thresholds: a,
    dragStartTime: e$dragStartTime,
    shouldUseTimeDampening: e$shouldUseTimeDampening
  })
}
var Ox = qN(function (e) {
  return 0 === e ? 0 : e
})
var wx = function (e) {
  var /* [auto-meaningful-name] */e$dragStartTime = e.dragStartTime
  var /* [auto-meaningful-name] */e$container = e.container
  var /* [auto-meaningful-name] */e$subject = e.subject
  var /* [auto-meaningful-name] */e$center = e.center
  var /* [auto-meaningful-name] */e$shouldUseTimeDampening = e.shouldUseTimeDampening
  var a = {
    top: e$center.y - e$container.top,
    right: e$container.right - e$center.x,
    bottom: e$container.bottom - e$center.y,
    left: e$center.x - e$container.left
  }
  var s = Ex({
    container: e$container,
    distanceToEdges: a,
    dragStartTime: e$dragStartTime,
    axis: bR,
    shouldUseTimeDampening: e$shouldUseTimeDampening
  })
  var c = Ex({
    container: e$container,
    distanceToEdges: a,
    dragStartTime: e$dragStartTime,
    axis: yR,
    shouldUseTimeDampening: e$shouldUseTimeDampening
  })
  var l = Ox({
    x: c,
    y: s
  })
  if (HN(l, GN)) {
    return null
  }
  var u = function (e) {
    var /* [auto-meaningful-name] */e$container1 = e.container
    var /* [auto-meaningful-name] */e$subject1 = e.subject
    var /* [auto-meaningful-name] */e$proposedScroll = e.proposedScroll
    var o = e$subject1.height > e$container1.height
    var i = e$subject1.width > e$container1.width
    return i || o ? i && o ? null : {
      x: i ? 0 : e$proposedScroll.x,
      y: o ? 0 : e$proposedScroll.y
    } : e$proposedScroll
  }({
    container: e$container,
    subject: e$subject,
    proposedScroll: l
  })
  return u ? HN(u, GN) ? null : u : null
}
var Cx = qN(function (e) {
  return 0 === e ? 0 : e > 0 ? 1 : -1
})
var Tx = function () {
  var e = function (e, t) {
    return e < 0 ? e : e > t ? e - t : 0
  }
  return function (t) {
    var /* [auto-meaningful-name] */t$current = t.current
    var /* [auto-meaningful-name] */t$max = t.max
    var /* [auto-meaningful-name] */t$change = t.change
    var i = WN(t$current, t$change)
    var a = {
      x: e(i.x, t$max.x),
      y: e(i.y, t$max.y)
    }
    return HN(a, GN) ? null : a
  }
}()
var Sx = function (e) {
  var /* [auto-meaningful-name] */e$max = e.max
  var /* [auto-meaningful-name] */e$current = e.current
  var /* [auto-meaningful-name] */e$change = e.change
  var o = {
    x: Math.max(e$current.x, e$max.x),
    y: Math.max(e$current.y, e$max.y)
  }
  var i = Cx(e$change)
  var a = Tx({
    max: o,
    current: e$current,
    change: i
  })
  return !a || 0 !== i.x && 0 === a.x || 0 !== i.y && 0 === a.y
}
var Ax = function (e, t) {
  return Sx({
    current: e.scroll.current,
    max: e.scroll.max,
    change: t
  })
}
var Ix = function (e, t) {
  var /* [auto-meaningful-name] */e$frame = e.frame
  return !!e$frame && Sx({
    current: e$frame.scroll.current,
    max: e$frame.scroll.max,
    change: t
  })
}
var jx = function (e) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$dragStartTime = e.dragStartTime
  var /* [auto-meaningful-name] */e$shouldUseTimeDampening = e.shouldUseTimeDampening
  var /* [auto-meaningful-name] */e$scrollWindow = e.scrollWindow
  var /* [auto-meaningful-name] */e$scrollDroppable = e.scrollDroppable
  var /* [auto-meaningful-name] */e$state$current$page$borderBoxCenter = e$state.current.page.borderBoxCenter
  var /* [auto-meaningful-name] */e$state$dimensions$draggablesE$state$critical$draggable$id$page$marginBox = e$state.dimensions.draggables[e$state.critical.draggable.id].page.marginBox
  if (e$state.isWindowScrollAllowed) {
    var c = function (e) {
      var /* [auto-meaningful-name] */e$viewport = e.viewport
      var /* [auto-meaningful-name] */e$subject = e.subject
      var /* [auto-meaningful-name] */e$center = e.center
      var /* [auto-meaningful-name] */e$dragStartTime1 = e.dragStartTime
      var /* [auto-meaningful-name] */e$shouldUseTimeDampening1 = e.shouldUseTimeDampening
      var a = wx({
        dragStartTime: e$dragStartTime1,
        container: e$viewport.frame,
        subject: e$subject,
        center: e$center,
        shouldUseTimeDampening: e$shouldUseTimeDampening1
      })
      return a && Ax(e$viewport, a) ? a : null
    }({
      dragStartTime: e$dragStartTime,
      viewport: e$state.viewport,
      subject: e$state$dimensions$draggablesE$state$critical$draggable$id$page$marginBox,
      center: e$state$current$page$borderBoxCenter,
      shouldUseTimeDampening: e$shouldUseTimeDampening
    })
    if (c) {
      return void e$scrollWindow(c)
    }
  }
  var l = dx({
    center: e$state$current$page$borderBoxCenter,
    destination: XR(e$state.impact),
    droppables: e$state.dimensions.droppables
  })
  if (l) {
    var u = function (e) {
      var /* [auto-meaningful-name] */e$droppable = e.droppable
      var /* [auto-meaningful-name] */e$subject = e.subject
      var /* [auto-meaningful-name] */e$center = e.center
      var /* [auto-meaningful-name] */e$dragStartTime1 = e.dragStartTime
      var /* [auto-meaningful-name] */e$shouldUseTimeDampening1 = e.shouldUseTimeDampening
      var /* [auto-meaningful-name] */e$droppable$frame = e$droppable.frame
      if (!e$droppable$frame) {
        return null
      }
      var s = wx({
        dragStartTime: e$dragStartTime1,
        container: e$droppable$frame.pageMarginBox,
        subject: e$subject,
        center: e$center,
        shouldUseTimeDampening: e$shouldUseTimeDampening1
      })
      return s && Ix(e$droppable, s) ? s : null
    }({
      dragStartTime: e$dragStartTime,
      droppable: l,
      subject: e$state$dimensions$draggablesE$state$critical$draggable$id$page$marginBox,
      center: e$state$current$page$borderBoxCenter,
      shouldUseTimeDampening: e$shouldUseTimeDampening
    })
    if (u) {
      e$scrollDroppable(l.descriptor.id, u)
    }
  }
}
var Nx = function (e) {
  var /* [auto-meaningful-name] */e$move = e.move
  var /* [auto-meaningful-name] */e$scrollDroppable = e.scrollDroppable
  var /* [auto-meaningful-name] */e$scrollWindow = e.scrollWindow
  var o = function (e, t) {
    if (!Ix(e, t)) {
      return t
    }
    var r = function (e, t) {
      var /* [auto-meaningful-name] */e$frame = e.frame
      return e$frame && Ix(e, t) ? Tx({
        current: e$frame.scroll.current,
        max: e$frame.scroll.max,
        change: t
      }) : null
    }(e, t)
    if (!r) {
      e$scrollDroppable(e.descriptor.id, t)
      return null
    }
    var o = UN(t, r)
    e$scrollDroppable(e.descriptor.id, o)
    return UN(t, o)
  }
  var i = function (e, t, n) {
    if (!e) {
      return n
    }
    if (!Ax(t, n)) {
      return n
    }
    var o = function (e, t) {
      if (!Ax(e, t)) {
        return null
      }
      var /* [auto-meaningful-name] */e$scroll$max = e.scroll.max
      var /* [auto-meaningful-name] */e$scroll$current = e.scroll.current
      return Tx({
        current: e$scroll$current,
        max: e$scroll$max,
        change: t
      })
    }(t, n)
    if (!o) {
      e$scrollWindow(n)
      return null
    }
    var i = UN(n, o)
    e$scrollWindow(i)
    return UN(n, i)
  }
  return function (e) {
    var /* [auto-meaningful-name] */e$scrollJumpRequest = e.scrollJumpRequest
    if (e$scrollJumpRequest) {
      var r = XR(e.impact)
      if (!r) {
        NN(false)
      }
      var a = o(e.dimensions.droppables[r], e$scrollJumpRequest)
      if (a) {
        var /* [auto-meaningful-name] */e$viewport = e.viewport
        var c = i(e.isWindowScrollAllowed, e$viewport, a)
        if (c) {
          (function (e, n) {
            var r = WN(e.current.client.selection, n)
            e$move({
              client: r
            })
          })(e, c)
        }
      }
    }
  }
}
var Rx = function (e) {
  var /* [auto-meaningful-name] */e$scrollDroppable = e.scrollDroppable
  var /* [auto-meaningful-name] */e$scrollWindow = e.scrollWindow
  var /* [auto-meaningful-name] */e$move = e.move
  var o = function (e) {
    var /* [auto-meaningful-name] */e$scrollWindow1 = e.scrollWindow
    var /* [auto-meaningful-name] */e$scrollDroppable1 = e.scrollDroppable
    var r = TN(e$scrollWindow1)
    var o = TN(e$scrollDroppable1)
    var i = null
    var a = function (e) {
      if (!i) {
        NN(false)
      }
      var t = i
      var /* [auto-meaningful-name] */t$shouldUseTimeDampening = t.shouldUseTimeDampening
      var /* [auto-meaningful-name] */t$dragStartTime = t.dragStartTime
      jx({
        state: e,
        scrollWindow: r,
        scrollDroppable: o,
        dragStartTime: t$dragStartTime,
        shouldUseTimeDampening: t$shouldUseTimeDampening
      })
    }
    return {
      start: function (e) {
        uk()
        if (i) {
          NN(false)
        }
        var t = Date.now()
        var n = false
        var r = function () {
          n = true
        }
        jx({
          state: e,
          dragStartTime: 0,
          shouldUseTimeDampening: false,
          scrollWindow: r,
          scrollDroppable: r
        })
        i = {
          dragStartTime: t,
          shouldUseTimeDampening: n
        }
        dk()
        if (n) {
          a(e)
        }
      },
      stop: function () {
        if (i) {
          r.cancel()
          o.cancel()
          i = null
        }
      },
      scroll: a
    }
  }({
    scrollWindow: e$scrollWindow,
    scrollDroppable: e$scrollDroppable
  })
  var i = Nx({
    move: e$move,
    scrollWindow: e$scrollWindow,
    scrollDroppable: e$scrollDroppable
  })
  return {
    scroll: function (e) {
      if ("DRAGGING" === e.phase) {
        if ("FLUID" !== e.movementMode) {
          if (e.scrollJumpRequest) {
            i(e)
          }
        } else {
          o.scroll(e)
        }
      }
    },
    start: o.start,
    stop: o.stop
  }
}
var kx = function () {
  var /* [auto-meaningful-name] */DataRbdDragHandle = "data-rbd-drag-handle"
  return {
    base: DataRbdDragHandle,
    draggableId: DataRbdDragHandle + "-draggable-id",
    contextId: DataRbdDragHandle + "-context-id"
  }
}()
var xx = function () {
  var /* [auto-meaningful-name] */DataRbdDraggable = "data-rbd-draggable"
  return {
    base: DataRbdDraggable,
    contextId: DataRbdDraggable + "-context-id",
    id: DataRbdDraggable + "-id"
  }
}()
var Dx = function () {
  var /* [auto-meaningful-name] */DataRbdDroppable = "data-rbd-droppable"
  return {
    base: DataRbdDroppable,
    contextId: DataRbdDroppable + "-context-id",
    id: DataRbdDroppable + "-id"
  }
}()
var Mx = {
  contextId: "data-rbd-scroll-container-context-id"
}
var Lx = function (e, t) {
  return e.map(function (e) {
    var n = e.styles[t]
    return n ? e.selector + " { " + n + " }" : ""
  }).join(" ")
}
var Px = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? useLayoutEffect : useEffect
var Bx = function () {
  var e = document.querySelector("head")
  if (!e) {
    NN(false)
  }
  return e
}
var Fx = function (e) {
  var t = document.createElement("style")
  if (e) {
    t.setAttribute("nonce", e)
  }
  t.type = "text/css"
  return t
}
function Gx(e, t) {
  var n = uN(function () {
    return function (e) {
      var t
      t = e
      var n = function (e) {
        return "[" + e + "=\"" + t + "\"]"
      }
      var r = function () {
        var /* [auto-meaningful-name] */_nCursorWebkitGrab_nCursorGrab_n = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    "
        return {
          selector: n(kx.contextId),
          styles: {
            always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
            resting: _nCursorWebkitGrab_nCursorGrab_n,
            dragging: "pointer-events: none;",
            dropAnimating: _nCursorWebkitGrab_nCursorGrab_n
          }
        }
      }()
      var o = [
        function () {
          var e = "\n      transition: " + Mk.outOfTheWay + ";\n    "
          return {
            selector: n(xx.contextId),
            styles: {
              dragging: e,
              dropAnimating: e,
              userCancel: e
            }
          }
        }(), r, {
          selector: n(Dx.contextId),
          styles: {
            always: "overflow-anchor: none;"
          }
        }, {
          selector: "body",
          styles: {
            dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
          }
        }
      ]
      return {
        always: Lx(o, "always"),
        resting: Lx(o, "resting"),
        dragging: Lx(o, "dragging"),
        dropAnimating: Lx(o, "dropAnimating"),
        userCancel: Lx(o, "userCancel")
      }
    }(e)
  }, [e])
  var r = useRef(null)
  var o = useRef(null)
  var i = dN(CN(function (e) {
    var /* [auto-meaningful-name] */o$current = o.current
    if (!o$current) {
      NN(false)
    }
    o$current.textContent = e
  }), [])
  var a = dN(function (e) {
    var /* [auto-meaningful-name] */r$current = r.current
    if (!r$current) {
      NN(false)
    }
    r$current.textContent = e
  }, [])
  Px(function () {
    if (r.current || o.current) {
      NN(false)
    }
    var s = Fx(t)
    var c = Fx(t)
    r.current = s
    o.current = c
    s.setAttribute("data-rbd-always", e)
    c.setAttribute("data-rbd-dynamic", e)
    Bx().appendChild(s)
    Bx().appendChild(c)
    a(n.always)
    i(n.resting)
    return function () {
      var e = function (e) {
        var /* [auto-meaningful-name] */e$current = e.current
        if (!e$current) {
          NN(false)
        }
        Bx().removeChild(e$current)
        e.current = null
      }
      e(r)
      e(o)
    }
  }, [t, a, i, n.always, n.resting, e])
  var s = dN(function () {
    return i(n.dragging)
  }, [i, n.dragging])
  var c = dN(function (e) {
    i("DROP" !== e ? n.userCancel : n.dropAnimating)
  }, [i, n.dropAnimating, n.userCancel])
  var l = dN(function () {
    if (o.current) {
      i(n.resting)
    }
  }, [i, n.resting])
  return uN(function () {
    return {
      dragging: s,
      dropping: c,
      resting: l
    }
  }, [s, c, l])
}
var Wx = function (e) {
  return e && e.ownerDocument ? e.ownerDocument.defaultView : window
}
function Ux(e) {
  return e instanceof Wx(e).HTMLElement
}
function Hx(e, t) {
  var n = "[" + kx.contextId + "=\"" + e + "\"]"
  var r = rR(document.querySelectorAll(n))
  if (!r.length) {
    return null
  }
  var o = nR(r, function (e) {
    return e.getAttribute(kx.draggableId) === t
  })
  return o && Ux(o) ? o : null
}
function Vx() {
  var e = {
    draggables: {},
    droppables: {}
  }
  var t = []
  function n(e) {
    if (t.length) {
      t.forEach(function (t) {
        return t(e)
      })
    }
  }
  function r(t) {
    return e.draggables[t] || null
  }
  function o(t) {
    return e.droppables[t] || null
  }
  return {
    draggable: {
      register: function (t) {
        e.draggables[t.descriptor.id] = t
        n({
          type: "ADDITION",
          value: t
        })
      },
      update: function (t, n) {
        var r = e.draggables[n.descriptor.id]
        if (r && r.uniqueId === t.uniqueId) {
          delete e.draggables[n.descriptor.id]
          e.draggables[t.descriptor.id] = t
        }
      },
      unregister: function (t) {
        var /* [auto-meaningful-name] */t$descriptor$id = t.descriptor.id
        var i = r(t$descriptor$id)
        if (i && t.uniqueId === i.uniqueId) {
          delete e.draggables[t$descriptor$id]
          n({
            type: "REMOVAL",
            value: t
          })
        }
      },
      getById: function (e) {
        var t = r(e)
        if (!t) {
          NN(false)
        }
        return t
      },
      findById: r,
      exists: function (e) {
        return Boolean(r(e))
      },
      getAllByType: function (t) {
        return eR(e.draggables).filter(function (e) {
          return e.descriptor.type === t
        })
      }
    },
    droppable: {
      register: function (t) {
        e.droppables[t.descriptor.id] = t
      },
      unregister: function (t) {
        var n = o(t.descriptor.id)
        if (n && t.uniqueId === n.uniqueId) {
          delete e.droppables[t.descriptor.id]
        }
      },
      getById: function (e) {
        var t = o(e)
        if (!t) {
          NN(false)
        }
        return t
      },
      findById: o,
      exists: function (e) {
        return Boolean(o(e))
      },
      getAllByType: function (t) {
        return eR(e.droppables).filter(function (e) {
          return e.descriptor.type === t
        })
      }
    },
    subscribe: function (e) {
      t.push(e)
      return function () {
        var n = t.indexOf(e)
        if (-1 !== n) {
          t.splice(n, 1)
        }
      }
    },
    clean: function () {
      e.draggables = {}
      e.droppables = {}
      t.length = 0
    }
  }
}
var zx = React.createContext(null)
var Yx = function () {
  var /* [auto-meaningful-name] */document$body = document.body
  if (!document$body) {
    NN(false)
  }
  return document$body
}
var Kx = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}
var qx = 0
var Xx = {
  separator: "::"
}
function Qx(e, t) {
  if (undefined === t) {
    t = Xx
  }
  return uN(function () {
    return "" + e + t.separator + qx++
  }, [t.separator, e])
}
var Zx = React.createContext(null)
function Jx(e) {
  0
}
function $x(e, t) {
  Jx()
}
function eD() {
  $x()
}
function tD(e) {
  var t = useRef(e)
  useEffect(function () {
    t.current = e
  })
  return t
}
var nD;
(nD = {})[13] = true
nD[9] = true
var rD = nD
var oD = function (e) {
  if (rD[e.keyCode]) {
    e.preventDefault()
  }
}
var iD = function () {
  var /* [auto-meaningful-name] */Visibilitychange = "visibilitychange"
  return "undefined" === typeof document ? Visibilitychange : nR([Visibilitychange, "ms" + Visibilitychange, "webkit" + Visibilitychange, "moz" + Visibilitychange, "o" + Visibilitychange], function (e) {
    return "on" + e in document
  }) || Visibilitychange
}()
var aD
var sD = {
  type: "IDLE"
}
function cD(e) {
  var /* [auto-meaningful-name] */e$cancel = e.cancel
  var /* [auto-meaningful-name] */e$completed = e.completed
  var /* [auto-meaningful-name] */e$getPhase = e.getPhase
  var /* [auto-meaningful-name] */e$setPhase = e.setPhase
  return [
    {
      eventName: "mousemove",
      fn: function (e) {
        var /* [auto-meaningful-name] */e$button = e.button
        var /* [auto-meaningful-name] */e$clientX = e.clientX
        var /* [auto-meaningful-name] */e$clientY = e.clientY
        if (0 === e$button) {
          var a = {
            x: e$clientX,
            y: e$clientY
          }
          var s = e$getPhase()
          if ("DRAGGING" === s.type) {
            e.preventDefault()
            return void s.actions.move(a)
          }
          if ("PENDING" !== s.type) {
            NN(false)
          }
          var /* [auto-meaningful-name] */s$point = s.point
          l = s$point
          u = a
          if (Math.abs(u.x - l.x) >= 5 || Math.abs(u.y - l.y) >= 5) {
            var l
            var u
            e.preventDefault()
            var d = s.actions.fluidLift(a)
            e$setPhase({
              type: "DRAGGING",
              actions: d
            })
          }
        }
      }
    }, {
      eventName: "mouseup",
      fn: function (e) {
        var o = e$getPhase()
        if ("DRAGGING" === o.type) {
          e.preventDefault()
          o.actions.drop({
            shouldBlockNextClick: true
          })
          e$completed()
        } else {
          e$cancel()
        }
      }
    }, {
      eventName: "mousedown",
      fn: function (e) {
        if ("DRAGGING" === e$getPhase().type) {
          e.preventDefault()
        }
        e$cancel()
      }
    }, {
      eventName: "keydown",
      fn: function (e) {
        if ("PENDING" !== e$getPhase().type) {
          return 27 === e.keyCode ? (e.preventDefault(), void e$cancel()) : void oD(e)
        }
        e$cancel()
      }
    }, {
      eventName: "resize",
      fn: e$cancel
    }, {
      eventName: "scroll",
      options: {
        passive: true,
        capture: false
      },
      fn: function () {
        if ("PENDING" === e$getPhase().type) {
          e$cancel()
        }
      }
    }, {
      eventName: "webkitmouseforcedown",
      fn: function (e) {
        var n = e$getPhase()
        if ("IDLE" === n.type) {
          NN(false)
        }
        if (n.actions.shouldRespectForcePress()) {
          e$cancel()
        } else {
          e.preventDefault()
        }
      }
    }, {
      eventName: iD,
      fn: e$cancel
    }
  ]
}
function lD() {}
(aD = {})[34] = true
aD[33] = true
aD[36] = true
aD[35] = true
var uD = aD
function dD(e, t) {
  function n() {
    t()
    e.cancel()
  }
  return [
    {
      eventName: "keydown",
      fn: function (r) {
        return 27 === r.keyCode ? (r.preventDefault(), void n()) : 32 === r.keyCode ? (r.preventDefault(), t(), void e.drop()) : 40 === r.keyCode ? (r.preventDefault(), void e.moveDown()) : 38 === r.keyCode ? (r.preventDefault(), void e.moveUp()) : 39 === r.keyCode ? (r.preventDefault(), void e.moveRight()) : 37 === r.keyCode ? (r.preventDefault(), void e.moveLeft()) : void (uD[r.keyCode] ? r.preventDefault() : oD(r))
      }
    }, {
      eventName: "mousedown",
      fn: n
    }, {
      eventName: "mouseup",
      fn: n
    }, {
      eventName: "click",
      fn: n
    }, {
      eventName: "touchstart",
      fn: n
    }, {
      eventName: "resize",
      fn: n
    }, {
      eventName: "wheel",
      fn: n,
      options: {
        passive: true
      }
    }, {
      eventName: iD,
      fn: n
    }
  ]
}
var pD = {
  type: "IDLE"
}
var fD = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
}
function hD(e, t) {
  var /* [auto-meaningful-name] */t$target = t.target
  return !!Ux(t$target) && function e(t, n) {
    if (null == n) {
      return false
    }
    if (Boolean(fD[n.tagName.toLowerCase()])) {
      return true
    }
    var r = n.getAttribute("contenteditable")
    return "true" === r || "" === r || n !== t && e(t, n.parentElement)
  }(e, t$target)
}
var mD = function (e) {
  return pN(e.getBoundingClientRect()).center
}
var gD = "undefined" === typeof document ? "matches" : nR(["matches", "msMatchesSelector", "webkitMatchesSelector"], function (e) {
  return e in Element.prototype
}) || "matches"
function _D(e, t) {
  return e.closest ? e.closest(t) : function e(t, n) {
    return null == t ? null : t[gD](n) ? t : e(t.parentElement, n)
  }(e, t)
}
function vD(e, t) {
  var n
  var /* [auto-meaningful-name] */t$target = t.target
  if (!((n = t$target) instanceof Wx(n).Element)) {
    return null
  }
  var o = _D(t$target, function (e) {
    return "[" + kx.contextId + "=\"" + e + "\"]"
  }(e))
  return o && Ux(o) ? o : null
}
function bD(e) {
  e.preventDefault()
}
function yD(e) {
  var /* [auto-meaningful-name] */e$expected = e.expected
  var /* [auto-meaningful-name] */e$phase = e.phase
  var /* [auto-meaningful-name] */e$isLockActive = e.isLockActive
  e.shouldWarn
  return !!e$isLockActive() && e$expected === e$phase
}
function ED(e) {
  var /* [auto-meaningful-name] */e$lockAPI = e.lockAPI
  var /* [auto-meaningful-name] */e$store = e.store
  var /* [auto-meaningful-name] */e$registry = e.registry
  var /* [auto-meaningful-name] */e$draggableId = e.draggableId
  if (e$lockAPI.isClaimed()) {
    return false
  }
  var i = e$registry.draggable.findById(e$draggableId)
  return !!i && !!i.options.isEnabled && !!cx(e$store.getState(), e$draggableId)
}
function OD(e) {
  var /* [auto-meaningful-name] */e$lockAPI = e.lockAPI
  var /* [auto-meaningful-name] */e$contextId = e.contextId
  var /* [auto-meaningful-name] */e$store = e.store
  var /* [auto-meaningful-name] */e$registry = e.registry
  var /* [auto-meaningful-name] */e$draggableId = e.draggableId
  var /* [auto-meaningful-name] */e$forceSensorStop = e.forceSensorStop
  var /* [auto-meaningful-name] */e$sourceEvent = e.sourceEvent
  if (!ED({
    lockAPI: e$lockAPI,
    store: e$store,
    registry: e$registry,
    draggableId: e$draggableId
  })) {
    return null
  }
  var c = e$registry.draggable.getById(e$draggableId)
  var l = function (e, t) {
    var n = "[" + xx.contextId + "=\"" + e + "\"]"
    var r = nR(rR(document.querySelectorAll(n)), function (e) {
      return e.getAttribute(xx.id) === t
    })
    return r && Ux(r) ? r : null
  }(e$contextId, c.descriptor.id)
  if (!l) {
    return null
  }
  if (e$sourceEvent && !c.options.canDragInteractiveElements && hD(l, e$sourceEvent)) {
    return null
  }
  var u = e$lockAPI.claim(e$forceSensorStop || AN)
  var /* [auto-meaningful-name] */PRE_DRAG = "PRE_DRAG"
  function p() {
    return c.options.shouldRespectForcePress
  }
  function f() {
    return e$lockAPI.isActive(u)
  }
  var h = function (e, t) {
    if (yD({
      expected: e,
      phase: PRE_DRAG,
      isLockActive: f,
      shouldWarn: true
    })) {
      e$store.dispatch(t())
    }
  }.bind(null, "DRAGGING")
  function m(e) {
    function n() {
      e$lockAPI.release()
      PRE_DRAG = "COMPLETED"
    }
    function o(t, o) {
      if (undefined === o) {
        o = {
          shouldBlockNextClick: false
        }
      }
      e.cleanup()
      if (o.shouldBlockNextClick) {
        var i = IN(window, [
          {
            eventName: "click",
            fn: bD,
            options: {
              once: true,
              passive: false,
              capture: true
            }
          }
        ])
        setTimeout(i)
      }
      n()
      e$store.dispatch(jk({
        reason: t
      }))
    }
    if ("PRE_DRAG" !== PRE_DRAG) {
      n()
      if ("PRE_DRAG" !== PRE_DRAG) {
        NN(false)
      }
    }
    e$store.dispatch(function (e) {
      return {
        type: "LIFT",
        payload: e
      }
    }(e.liftActionArgs))
    PRE_DRAG = "DRAGGING"
    return Module_19.a({
      isActive: function () {
        return yD({
          expected: "DRAGGING",
          phase: PRE_DRAG,
          isLockActive: f,
          shouldWarn: false
        })
      },
      shouldRespectForcePress: p,
      drop: function (e) {
        return o("DROP", e)
      },
      cancel: function (e) {
        return o("CANCEL", e)
      }
    }, e.actions)
  }
  return {
    isActive: function () {
      return yD({
        expected: "PRE_DRAG",
        phase: PRE_DRAG,
        isLockActive: f,
        shouldWarn: false
      })
    },
    shouldRespectForcePress: p,
    fluidLift: function (e) {
      var t = TN(function (e) {
        h(function () {
          return wk({
            client: e
          })
        })
      })
      var n = m({
        liftActionArgs: {
          id: e$draggableId,
          clientSelection: e,
          movementMode: "FLUID"
        },
        cleanup: function () {
          return t.cancel()
        },
        actions: {
          move: t
        }
      })
      return Module_19.a({}, n, {
        move: t
      })
    },
    snapLift: function () {
      var e = {
        moveUp: function () {
          return h(Ck)
        },
        moveRight: function () {
          return h(Sk)
        },
        moveDown: function () {
          return h(Tk)
        },
        moveLeft: function () {
          return h(Ak)
        }
      }
      return m({
        liftActionArgs: {
          id: e$draggableId,
          clientSelection: mD(l),
          movementMode: "SNAP"
        },
        cleanup: AN,
        actions: e
      })
    },
    abort: function () {
      if (yD({
        expected: "PRE_DRAG",
        phase: PRE_DRAG,
        isLockActive: f,
        shouldWarn: true
      })) {
        e$lockAPI.release()
      }
    }
  }
}
var wD = [
  function (e) {
    var t = useRef(sD)
    var n = useRef(AN)
    var r = uN(function () {
      return {
        eventName: "mousedown",
        fn: function (t) {
          if (!t.defaultPrevented && 0 === t.button && !(t.ctrlKey || t.metaKey || t.shiftKey || t.altKey)) {
            var r = e.findClosestDraggableId(t)
            if (r) {
              var o = e.tryGetLock(r, a, {
                sourceEvent: t
              })
              if (o) {
                t.preventDefault()
                var i = {
                  x: t.clientX,
                  y: t.clientY
                }
                n.current()
                l(o, i)
              }
            }
          }
        }
      }
    }, [e])
    var o = uN(function () {
      return {
        eventName: "webkitmouseforcewillbegin",
        fn: function (t) {
          if (!t.defaultPrevented) {
            var n = e.findClosestDraggableId(t)
            if (n) {
              var r = e.findOptionsForDraggable(n)
              if (r) {
                if (!r.shouldRespectForcePress) {
                  if (e.canGetLock(n)) {
                    t.preventDefault()
                  }
                }
              }
            }
          }
        }
      }
    }, [e])
    var i = dN(function () {
      n.current = IN(window, [o, r], {
        passive: false,
        capture: true
      })
    }, [o, r])
    var a = dN(function () {
      if ("IDLE" !== t.current.type) {
        t.current = sD
        n.current()
        i()
      }
    }, [i])
    var s = dN(function () {
      var /* [auto-meaningful-name] */t$current = t.current
      a()
      if ("DRAGGING" === t$current.type) {
        t$current.actions.cancel({
          shouldBlockNextClick: true
        })
      }
      if ("PENDING" === t$current.type) {
        t$current.actions.abort()
      }
    }, [a])
    var c = dN(function () {
      var e = cD({
        cancel: s,
        completed: a,
        getPhase: function () {
          return t.current
        },
        setPhase: function (e) {
          t.current = e
        }
      })
      n.current = IN(window, e, {
        capture: true,
        passive: false
      })
    }, [s, a])
    var l = dN(function (e, n) {
      if ("IDLE" !== t.current.type) {
        NN(false)
      }
      t.current = {
        type: "PENDING",
        point: n,
        actions: e
      }
      c()
    }, [c])
    Px(function () {
      i()
      return function () {
        n.current()
      }
    }, [i])
  }, function (e) {
    var t = useRef(lD)
    var n = uN(function () {
      return {
        eventName: "keydown",
        fn: function (n) {
          if (!n.defaultPrevented && 32 === n.keyCode) {
            var o = e.findClosestDraggableId(n)
            if (o) {
              var i = e.tryGetLock(o, c, {
                sourceEvent: n
              })
              if (i) {
                n.preventDefault()
                var a = true
                var s = i.snapLift()
                t.current()
                t.current = IN(window, dD(s, c), {
                  capture: true,
                  passive: false
                })
              }
            }
          }
          function c() {
            if (!a) {
              NN(false)
            }
            a = false
            t.current()
            r()
          }
        }
      }
    }, [e])
    var r = dN(function () {
      t.current = IN(window, [n], {
        passive: false,
        capture: true
      })
    }, [n])
    Px(function () {
      r()
      return function () {
        t.current()
      }
    }, [r])
  }, function (e) {
    var t = useRef(pD)
    var n = useRef(AN)
    var r = dN(function () {
      return t.current
    }, [])
    var o = dN(function (e) {
      t.current = e
    }, [])
    var i = uN(function () {
      return {
        eventName: "touchstart",
        fn: function (t) {
          if (!t.defaultPrevented) {
            var r = e.findClosestDraggableId(t)
            if (r) {
              var o = e.tryGetLock(r, s, {
                sourceEvent: t
              })
              if (o) {
                var i = t.touches[0]
                var a = {
                  x: i.clientX,
                  y: i.clientY
                }
                n.current()
                d(o, a)
              }
            }
          }
        }
      }
    }, [e])
    var a = dN(function () {
      n.current = IN(window, [i], {
        capture: true,
        passive: false
      })
    }, [i])
    var s = dN(function () {
      var /* [auto-meaningful-name] */t$current = t.current
      if ("IDLE" !== t$current.type) {
        if ("PENDING" === t$current.type) {
          clearTimeout(t$current.longPressTimerId)
        }
        o(pD)
        n.current()
        a()
      }
    }, [a, o])
    var c = dN(function () {
      var /* [auto-meaningful-name] */t$current = t.current
      s()
      if ("DRAGGING" === t$current.type) {
        t$current.actions.cancel({
          shouldBlockNextClick: true
        })
      }
      if ("PENDING" === t$current.type) {
        t$current.actions.abort()
      }
    }, [s])
    var l = dN(function () {
      var e = {
        capture: true,
        passive: false
      }
      var t = {
        cancel: c,
        completed: s,
        getPhase: r
      }
      var o = IN(window, function (e) {
        var /* [auto-meaningful-name] */e$cancel = e.cancel
        var /* [auto-meaningful-name] */e$completed = e.completed
        var /* [auto-meaningful-name] */e$getPhase = e.getPhase
        return [
          {
            eventName: "touchmove",
            options: {
              capture: false
            },
            fn: function (e) {
              var n = e$getPhase()
              if ("DRAGGING" === n.type) {
                n.hasMoved = true
                var o = e.touches[0]
                var i = {
                  x: o.clientX,
                  y: o.clientY
                }
                e.preventDefault()
                n.actions.move(i)
              } else {
                e$cancel()
              }
            }
          }, {
            eventName: "touchend",
            fn: function (e) {
              var o = e$getPhase()
              if ("DRAGGING" === o.type) {
                e.preventDefault()
                o.actions.drop({
                  shouldBlockNextClick: true
                })
                e$completed()
              } else {
                e$cancel()
              }
            }
          }, {
            eventName: "touchcancel",
            fn: function (e) {
              if ("DRAGGING" === e$getPhase().type) {
                e.preventDefault()
                e$cancel()
              } else {
                e$cancel()
              }
            }
          }, {
            eventName: "touchforcechange",
            fn: function (e) {
              var n = e$getPhase()
              if ("IDLE" === n.type) {
                NN(false)
              }
              var o = e.touches[0]
              if (o && o.force >= .15) {
                var i = n.actions.shouldRespectForcePress()
                if ("PENDING" !== n.type) {
                  return i ? n.hasMoved ? void e.preventDefault() : void e$cancel() : void e.preventDefault()
                }
                if (i) {
                  e$cancel()
                }
              }
            }
          }, {
            eventName: iD,
            fn: e$cancel
          }
        ]
      }(t), e)
      var i = IN(window, function (e) {
        var /* [auto-meaningful-name] */e$cancel = e.cancel
        var /* [auto-meaningful-name] */e$getPhase = e.getPhase
        return [
          {
            eventName: "orientationchange",
            fn: e$cancel
          }, {
            eventName: "resize",
            fn: e$cancel
          }, {
            eventName: "contextmenu",
            fn: function (e) {
              e.preventDefault()
            }
          }, {
            eventName: "keydown",
            fn: function (e) {
              if ("DRAGGING" === e$getPhase().type) {
                if (27 === e.keyCode) {
                  e.preventDefault()
                }
                e$cancel()
              } else {
                e$cancel()
              }
            }
          }, {
            eventName: iD,
            fn: e$cancel
          }
        ]
      }(t), e)
      n.current = function () {
        o()
        i()
      }
    }, [c, r, s])
    var u = dN(function () {
      var e = r()
      if ("PENDING" !== e.type) {
        NN(false)
      }
      var t = e.actions.fluidLift(e.point)
      o({
        type: "DRAGGING",
        actions: t,
        hasMoved: false
      })
    }, [r, o])
    var d = dN(function (e, t) {
      if ("IDLE" !== r().type) {
        NN(false)
      }
      var n = setTimeout(u, 120)
      o({
        type: "PENDING",
        point: t,
        actions: e,
        longPressTimerId: n
      })
      l()
    }, [l, r, o, u])
    Px(function () {
      a()
      return function () {
        n.current()
        var e = r()
        if ("PENDING" === e.type) {
          clearTimeout(e.longPressTimerId)
          o(pD)
        }
      }
    }, [r, a, o])
    Px(function () {
      return IN(window, [
        {
          eventName: "touchmove",
          fn: function () {},
          options: {
            capture: false,
            passive: false
          }
        }
      ])
    }, [])
  }
]
function CD(e) {
  var /* [auto-meaningful-name] */e$contextId = e.contextId
  var /* [auto-meaningful-name] */e$store = e.store
  var /* [auto-meaningful-name] */e$registry = e.registry
  var /* [auto-meaningful-name] */e$customSensors = e.customSensors
  var /* [auto-meaningful-name] */e$enableDefaultSensors = e.enableDefaultSensors
  var a = [].concat(e$enableDefaultSensors ? wD : [], e$customSensors || [])
  var s = useState(function () {
    return function () {
      var e = null
      function t() {
        if (!e) {
          NN(false)
        }
        e = null
      }
      return {
        isClaimed: function () {
          return Boolean(e)
        },
        isActive: function (t) {
          return t === e
        },
        claim: function (t) {
          if (e) {
            NN(false)
          }
          var n = {
            abandon: t
          }
          e = n
          return n
        },
        release: t,
        tryAbandon: function () {
          if (e) {
            e.abandon()
            t()
          }
        }
      }
    }()
  })[0]
  var c = dN(function (e, t) {
    if (e.isDragging && !t.isDragging) {
      s.tryAbandon()
    }
  }, [s])
  Px(function () {
    var e = e$store.getState()
    return e$store.subscribe(function () {
      var t = e$store.getState()
      c(e, t)
      e = t
    })
  }, [s, e$store, c])
  Px(function () {
    return s.tryAbandon
  }, [s.tryAbandon])
  var l = dN(function (e) {
    return ED({
      lockAPI: s,
      registry: e$registry,
      store: e$store,
      draggableId: e
    })
  }, [s, e$registry, e$store])
  var u = dN(function (e, o, i) {
    return OD({
      lockAPI: s,
      registry: e$registry,
      contextId: e$contextId,
      store: e$store,
      draggableId: e,
      forceSensorStop: o,
      sourceEvent: i && i.sourceEvent ? i.sourceEvent : null
    })
  }, [e$contextId, s, e$registry, e$store])
  var d = dN(function (e) {
    return function (e, t) {
      var n = vD(e, t)
      return n ? n.getAttribute(kx.draggableId) : null
    }(e$contextId, e)
  }, [e$contextId])
  var p = dN(function (e) {
    var t = e$registry.draggable.findById(e)
    return t ? t.options : null
  }, [e$registry.draggable])
  var h = dN(function () {
    if (s.isClaimed()) {
      s.tryAbandon()
      if ("IDLE" !== e$store.getState().phase) {
        e$store.dispatch({
          type: "FLUSH",
          payload: null
        })
      }
    }
  }, [s, e$store])
  var m = dN(s.isClaimed, [s])
  var g = uN(function () {
    return {
      canGetLock: l,
      tryGetLock: u,
      findClosestDraggableId: d,
      findOptionsForDraggable: p,
      tryReleaseLock: h,
      isLockClaimed: m
    }
  }, [l, u, d, p, h, m])
  Jx()
  for (var _ = 0; _ < a.length; _++) {
    a[_](g)
  }
}
function TD(e) {
  if (!e.current) {
    NN(false)
  }
  return e.current
}
function SD(e) {
  var /* [auto-meaningful-name] */e$contextId = e.contextId
  var /* [auto-meaningful-name] */e$setCallbacks = e.setCallbacks
  var /* [auto-meaningful-name] */e$sensors = e.sensors
  var /* [auto-meaningful-name] */e$nonce = e.nonce
  var /* [auto-meaningful-name] */e$dragHandleUsageInstructions = e.dragHandleUsageInstructions
  var a = useRef(null)
  eD()
  var s = tD(e)
  var c = dN(function () {
    return function (e) {
      return {
        onBeforeCapture: e.onBeforeCapture,
        onBeforeDragStart: e.onBeforeDragStart,
        onDragStart: e.onDragStart,
        onDragEnd: e.onDragEnd,
        onDragUpdate: e.onDragUpdate
      }
    }(s.current)
  }, [s])
  var l = function (e) {
    var t = uN(function () {
      return function (e) {
        return "rbd-announcement-" + e
      }(e)
    }, [e])
    var n = useRef(null)
    useEffect(function () {
      var e = document.createElement("div")
      n.current = e
      e.id = t
      e.setAttribute("aria-live", "assertive")
      e.setAttribute("aria-atomic", "true")
      Module_19.a(e.style, Kx)
      Yx().appendChild(e)
      return function () {
        setTimeout(function () {
          var t = Yx()
          if (t.contains(e)) {
            t.removeChild(e)
          }
          if (e === n.current) {
            n.current = null
          }
        })
      }
    }, [t])
    return dN(function (e) {
      var /* [auto-meaningful-name] */n$current = n.current
      if (n$current) {
        n$current.textContent = e
      }
    }, [])
  }(e$contextId)
  var u = function (e) {
    var /* [auto-meaningful-name] */e$contextId1 = e.contextId
    var /* [auto-meaningful-name] */e$text = e.text
    var r = Qx("hidden-text", {
      separator: "-"
    })
    var o = uN(function () {
      return "rbd-hidden-text-" + (e = {
        contextId: e$contextId1,
        uniqueId: r
      }).contextId + "-" + e.uniqueId
      var e
    }, [r, e$contextId1])
    useEffect(function () {
      var e = document.createElement("div")
      e.id = o
      e.textContent = e$text
      e.style.display = "none"
      Yx().appendChild(e)
      return function () {
        var t = Yx()
        if (t.contains(e)) {
          t.removeChild(e)
        }
      }
    }, [o, e$text])
    return o
  }({
    contextId: e$contextId,
    text: e$dragHandleUsageInstructions
  })
  var d = Gx(e$contextId, e$nonce)
  var p = dN(function (e) {
    TD(a).dispatch(e)
  }, [])
  var m = uN(function () {
    return Redux.bindActionCreators({
      publishWhileDragging: vk,
      updateDroppableScroll: yk,
      updateDroppableIsEnabled: Ek,
      updateDroppableIsCombineEnabled: Ok,
      collectionStarting: bk
    }, p)
  }, [p])
  var g = function () {
    var e = uN(Vx, [])
    useEffect(function () {
      return function () {
        requestAnimationFrame(e.clean)
      }
    }, [e])
    return e
  }()
  var v = uN(function () {
    return sx(g, m)
  }, [g, m])
  var b = uN(function () {
    return Rx(Module_19.a({
      scrollWindow: lx,
      scrollDroppable: v.scrollDroppable
    }, Redux.bindActionCreators({
      move: wk
    }, p)))
  }, [v.scrollDroppable, p])
  var y = function (e) {
    var t = useRef({})
    var n = useRef(null)
    var r = useRef(null)
    var o = useRef(false)
    var i = dN(function (e, n) {
      var r = {
        id: e,
        focus: n
      }
      t.current[e] = r
      return function () {
        var /* [auto-meaningful-name] */t$current = t.current
        if (t$current[e] !== r) {
          delete t$current[e]
        }
      }
    }, [])
    var a = dN(function (t) {
      var n = Hx(e, t)
      if (n && n !== document.activeElement) {
        n.focus()
      }
    }, [e])
    var s = dN(function (e, t) {
      if (n.current === e) {
        n.current = t
      }
    }, [])
    var c = dN(function () {
      if (!r.current) {
        if (o.current) {
          r.current = requestAnimationFrame(function () {
            r.current = null
            var /* [auto-meaningful-name] */n$current = n.current
            if (n$current) {
              a(n$current)
            }
          })
        }
      }
    }, [a])
    var l = dN(function (e) {
      n.current = null
      var /* [auto-meaningful-name] */document$activeElement = document.activeElement
      if (document$activeElement && document$activeElement.getAttribute(kx.draggableId) === e) {
        n.current = e
      }
    }, [])
    Px(function () {
      o.current = true
      return function () {
        o.current = false
        var /* [auto-meaningful-name] */r$current = r.current
        if (r$current) {
          cancelAnimationFrame(r$current)
        }
      }
    }, [])
    return uN(function () {
      return {
        register: i,
        tryRecordFocus: l,
        tryRestoreFocusRecorded: c,
        tryShiftRecord: s
      }
    }, [i, l, c, s])
  }(e$contextId)
  var E = uN(function () {
    return tx({
      announce: l,
      autoScroller: b,
      dimensionMarshal: v,
      focusMarshal: y,
      getResponders: c,
      styleMarshal: d
    })
  }, [l, b, v, y, c, d])
  a.current = E
  var O = dN(function () {
    var e = TD(a)
    if ("IDLE" !== e.getState().phase) {
      e.dispatch({
        type: "FLUSH",
        payload: null
      })
    }
  }, [])
  var w = dN(function () {
    var e = TD(a).getState()
    return e.isDragging || "DROP_ANIMATING" === e.phase
  }, [])
  e$setCallbacks(uN(function () {
    return {
      isDragging: w,
      tryAbort: O
    }
  }, [w, O]))
  var C = dN(function (e) {
    return cx(TD(a).getState(), e)
  }, [])
  var T = dN(function () {
    return ZR(TD(a).getState())
  }, [])
  var S = uN(function () {
    return {
      marshal: v,
      focus: y,
      contextId: e$contextId,
      canLift: C,
      isMovementAllowed: T,
      dragHandleUsageInstructionsId: u,
      registry: g
    }
  }, [e$contextId, v, u, y, C, T, g])
  CD({
    contextId: e$contextId,
    store: E,
    registry: g,
    customSensors: e$sensors,
    enableDefaultSensors: false !== e.enableDefaultSensors
  })
  useEffect(function () {
    return O
  }, [O])
  return React.createElement(Zx.Provider, {
    value: S
  }, React.createElement(Provider, {
    context: zx,
    store: E
  }, e.children))
}
var AD = 0
function ID(e) {
  var t = uN(function () {
    return "" + AD++
  }, [])
  var n = e.dragHandleUsageInstructions || _nPressSpaceBarToStartADrag$_nWhenDraggingYouCanUseTheArrowKeysToMoveTheItemAroundAndEscapeToCancel$_nSomeScreenReadersMayRequireYouToBeInFocusModeOrToUseYourPassThroughKey_n
  return React.createElement(RN, null, function (r) {
    return React.createElement(SD, {
      nonce: e.nonce,
      contextId: t,
      setCallbacks: r,
      dragHandleUsageInstructions: n,
      enableDefaultSensors: e.enableDefaultSensors,
      sensors: e.sensors,
      onBeforeCapture: e.onBeforeCapture,
      onBeforeDragStart: e.onBeforeDragStart,
      onDragStart: e.onDragStart,
      onDragUpdate: e.onDragUpdate,
      onDragEnd: e.onDragEnd
    }, e.children)
  })
}
var jD = function (e) {
  return function (t) {
    return e === t
  }
}
var ND = jD("scroll")
var RD = jD("auto")
jD("visible")
var kD = function (e, t) {
  return t(e.overflowX) || t(e.overflowY)
}
var xD = function (e) {
  var t = window.getComputedStyle(e)
  var n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  }
  return kD(n, ND) || kD(n, RD)
}
var DD = function e(t) {
  return null == t || t === document.body || t === document.documentElement ? null : xD(t) ? t : e(t.parentElement)
}
var MD = function (e) {
  return {
    x: e.scrollLeft,
    y: e.scrollTop
  }
}
var LD = function (e) {
  return {
    closestScrollable: DD(e),
    isFixedOnPage: function e(t) {
      return !!t && ("fixed" === window.getComputedStyle(t).position || e(t.parentElement))
    }(e)
  }
}
var PD = function (e) {
  var /* [auto-meaningful-name] */e$ref = e.ref
  var /* [auto-meaningful-name] */e$descriptor = e.descriptor
  var /* [auto-meaningful-name] */e$env = e.env
  var /* [auto-meaningful-name] */e$windowScroll = e.windowScroll
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$isDropDisabled = e.isDropDisabled
  var /* [auto-meaningful-name] */e$isCombineEnabled = e.isCombineEnabled
  var /* [auto-meaningful-name] */e$shouldClipSubject = e.shouldClipSubject
  var /* [auto-meaningful-name] */e$env$closestScrollable = e$env.closestScrollable
  var u = function (e, t) {
    var n = EN(e)
    if (!t) {
      return n
    }
    if (e !== t) {
      return n
    }
    var r = n.paddingBox.top - t.scrollTop
    var o = n.paddingBox.left - t.scrollLeft
    var i = r + t.scrollHeight
    var a = o + t.scrollWidth
    var s = fN({
      top: r,
      right: a,
      bottom: i,
      left: o
    }, n.border)
    return gN({
      borderBox: s,
      margin: n.margin,
      border: n.border,
      padding: n.padding
    })
  }(e$ref, e$env$closestScrollable)
  var d = bN(u, e$windowScroll)
  var p = function () {
    if (!e$env$closestScrollable) {
      return null
    }
    var e = EN(e$env$closestScrollable)
    var t = {
      scrollHeight: e$env$closestScrollable.scrollHeight,
      scrollWidth: e$env$closestScrollable.scrollWidth
    }
    return {
      client: e,
      page: bN(e, e$windowScroll),
      scroll: MD(e$env$closestScrollable),
      scrollSize: t,
      shouldClipSubject: e$shouldClipSubject
    }
  }()
  return function (e) {
    var /* [auto-meaningful-name] */e$descriptor1 = e.descriptor
    var /* [auto-meaningful-name] */e$isEnabled = e.isEnabled
    var /* [auto-meaningful-name] */e$isCombineEnabled1 = e.isCombineEnabled
    var /* [auto-meaningful-name] */e$isFixedOnPage = e.isFixedOnPage
    var /* [auto-meaningful-name] */e$direction1 = e.direction
    var /* [auto-meaningful-name] */e$client = e.client
    var /* [auto-meaningful-name] */e$page = e.page
    var /* [auto-meaningful-name] */e$closest = e.closest
    var l = function () {
      if (!e$closest) {
        return null
      }
      var /* [auto-meaningful-name] */e$closest$scrollSize = e$closest.scrollSize
      var /* [auto-meaningful-name] */e$closest$client = e$closest.client
      var n = nx({
        scrollHeight: e$closest$scrollSize.scrollHeight,
        scrollWidth: e$closest$scrollSize.scrollWidth,
        height: e$closest$client.paddingBox.height,
        width: e$closest$client.paddingBox.width
      })
      return {
        pageMarginBox: e$closest.page.marginBox,
        frameClient: e$closest$client,
        scrollSize: e$closest$scrollSize,
        shouldClipSubject: e$closest.shouldClipSubject,
        scroll: {
          initial: e$closest.scroll,
          current: e$closest.scroll,
          max: n,
          diff: {
            value: GN,
            displacement: GN
          }
        }
      }
    }()
    var u = "vertical" === e$direction1 ? bR : yR
    return {
      descriptor: e$descriptor1,
      isCombineEnabled: e$isCombineEnabled1,
      isFixedOnPage: e$isFixedOnPage,
      axis: u,
      isEnabled: e$isEnabled,
      client: e$client,
      page: e$page,
      frame: l,
      subject: JN({
        page: e$page,
        withPlaceholder: null,
        axis: u,
        frame: l
      })
    }
  }({
    descriptor: e$descriptor,
    isEnabled: !e$isDropDisabled,
    isCombineEnabled: e$isCombineEnabled,
    isFixedOnPage: e$env.isFixedOnPage,
    direction: e$direction,
    client: u,
    page: d,
    closest: p
  })
}
var BD = {
  passive: false
}
var FD = {
  passive: true
}
var GD = function (e) {
  return e.shouldPublishImmediately ? BD : FD
}
function WD(e) {
  var t = useContext(e)
  if (!t) {
    NN(false)
  }
  return t
}
var UD = function (e) {
  return e && e.env.closestScrollable || null
}
function HD() {}
var VD = {
  width: 0,
  height: 0,
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}
var zD = function (e) {
  var /* [auto-meaningful-name] */e$isAnimatingOpenOnMount = e.isAnimatingOpenOnMount
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var /* [auto-meaningful-name] */e$animate = e.animate
  var o = function (e) {
    var /* [auto-meaningful-name] */e$isAnimatingOpenOnMount1 = e.isAnimatingOpenOnMount
    var /* [auto-meaningful-name] */e$placeholder1 = e.placeholder
    var /* [auto-meaningful-name] */e$animate1 = e.animate
    return e$isAnimatingOpenOnMount1 || "close" === e$animate1 ? VD : {
      height: e$placeholder1.client.borderBox.height,
      width: e$placeholder1.client.borderBox.width,
      margin: e$placeholder1.client.margin
    }
  }({
    isAnimatingOpenOnMount: e$isAnimatingOpenOnMount,
    placeholder: e$placeholder,
    animate: e$animate
  })
  return {
    display: e$placeholder.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: "none" !== e$animate ? Mk.placeholder : null
  }
}
var YD = React.memo(function (e) {
  var t = useRef(null)
  var n = dN(function () {
    if (t.current) {
      clearTimeout(t.current)
      t.current = null
    }
  }, [])
  var /* [auto-meaningful-name] */e$animate = e.animate
  var /* [auto-meaningful-name] */e$onTransitionEnd = e.onTransitionEnd
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$contextId = e.contextId
  var s = useState("open" === e.animate)
  var c = s[0]
  var l = s[1]
  useEffect(function () {
    return c ? "open" !== e$animate ? (n(), l(false), HD) : t.current ? HD : (t.current = setTimeout(function () {
      t.current = null
      l(false)
    }), n) : HD
  }, [e$animate, c, n])
  var u = dN(function (e) {
    if ("height" === e.propertyName) {
      e$onTransitionEnd()
      if ("close" === e$animate) {
        e$onClose()
      }
    }
  }, [e$animate, e$onClose, e$onTransitionEnd])
  var d = zD({
    isAnimatingOpenOnMount: c,
    animate: e.animate,
    placeholder: e.placeholder
  })
  return React.createElement(e.placeholder.tagName, {
    style: d,
    "data-rbd-placeholder-context-id": e$contextId,
    onTransitionEnd: u,
    ref: e.innerRef
  })
})
var KD = React.createContext(null)
var qD = function (e) {
  function t() {
    for (var t, /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      r[o] = arguments[o]
    }
    (t = e.call.apply(e, [this].concat(r)) || this).state = {
      isVisible: Boolean(t.props.on),
      data: t.props.on,
      animate: t.props.shouldAnimate && t.props.on ? "open" : "none"
    }
    t.onClose = function () {
      if ("close" === t.state.animate) {
        t.setState({
          isVisible: false
        })
      }
    }
    return t
  }
  Module_434.a(t, e)
  t.getDerivedStateFromProps = function (e, t) {
    return e.shouldAnimate ? e.on ? {
      isVisible: true,
      data: e.on,
      animate: "open"
    } : t.isVisible ? {
      isVisible: true,
      data: t.data,
      animate: "close"
    } : {
      isVisible: false,
      animate: "close",
      data: null
    } : {
      isVisible: Boolean(e.on),
      data: e.on,
      animate: "none"
    }
  }
  t.prototype.render = function () {
    if (!this.state.isVisible) {
      return null
    }
    var e = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    }
    return this.props.children(e)
  }
  return t
}(React.PureComponent)
var XD = 5e3
var QD = 4500
var ZD = function (e, t) {
  return t ? Mk.drop(t.duration) : e ? Mk.snap : Mk.fluid
}
var JD = function (e, t) {
  return e ? t ? kk.drop : kk.combining : null
}
function $D(e) {
  return "DRAGGING" === e.type ? function (e) {
    var /* [auto-meaningful-name] */e$dimension$client = e.dimension.client
    var /* [auto-meaningful-name] */e$offset = e.offset
    var /* [auto-meaningful-name] */e$combineWith = e.combineWith
    var /* [auto-meaningful-name] */e$dropping = e.dropping
    var i = Boolean(e$combineWith)
    var a = function (e) {
      return null != e.forceShouldAnimate ? e.forceShouldAnimate : "SNAP" === e.mode
    }(e)
    var s = Boolean(e$dropping)
    var c = s ? Bk(e$offset, i) : Pk(e$offset)
    return {
      position: "fixed",
      top: e$dimension$client.marginBox.top,
      left: e$dimension$client.marginBox.left,
      boxSizing: "border-box",
      width: e$dimension$client.borderBox.width,
      height: e$dimension$client.borderBox.height,
      transition: ZD(a, e$dropping),
      transform: c,
      opacity: JD(i, s),
      zIndex: s ? QD : XD,
      pointerEvents: "none"
    }
  }(e) : {
    transform: Pk((t = e).offset),
    transition: t.shouldAnimateDisplacement ? null : "none"
  }
  var t
}
function eM(e) {
  var t = Qx("draggable")
  var /* [auto-meaningful-name] */e$descriptor = e.descriptor
  var /* [auto-meaningful-name] */e$registry = e.registry
  var /* [auto-meaningful-name] */e$getDraggableRef = e.getDraggableRef
  var /* [auto-meaningful-name] */e$canDragInteractiveElements = e.canDragInteractiveElements
  var /* [auto-meaningful-name] */e$shouldRespectForcePress = e.shouldRespectForcePress
  var /* [auto-meaningful-name] */e$isEnabled = e.isEnabled
  var c = uN(function () {
    return {
      canDragInteractiveElements: e$canDragInteractiveElements,
      shouldRespectForcePress: e$shouldRespectForcePress,
      isEnabled: e$isEnabled
    }
  }, [e$canDragInteractiveElements, e$isEnabled, e$shouldRespectForcePress])
  var l = dN(function (e) {
    var t = e$getDraggableRef()
    if (!t) {
      NN(false)
    }
    return function (e, t, n) {
      if (undefined === n) {
        n = GN
      }
      var r = window.getComputedStyle(t)
      var o = t.getBoundingClientRect()
      var i = yN(o, r)
      var a = bN(i, n)
      return {
        descriptor: e,
        placeholder: {
          client: i,
          tagName: t.tagName.toLowerCase(),
          display: r.display
        },
        displaceBy: {
          x: i.marginBox.width,
          y: i.marginBox.height
        },
        client: i,
        page: a
      }
    }(e$descriptor, t, e)
  }, [e$descriptor, e$getDraggableRef])
  var u = uN(function () {
    return {
      uniqueId: t,
      descriptor: e$descriptor,
      options: c,
      getDimension: l
    }
  }, [e$descriptor, l, c, t])
  var d = useRef(u)
  var p = useRef(true)
  Px(function () {
    e$registry.draggable.register(d.current)
    return function () {
      return e$registry.draggable.unregister(d.current)
    }
  }, [e$registry.draggable])
  Px(function () {
    if (p.current) {
      p.current = false
    } else {
      var /* [auto-meaningful-name] */d$current = d.current
      d.current = u
      e$registry.draggable.update(u, d$current)
    }
  }, [u, e$registry.draggable])
}
function tM(e, t, n) {
  $x()
}
function nM(e) {
  e.preventDefault()
}
var rM = function (e, t) {
  return e === t
}
var oM = function (e) {
  var /* [auto-meaningful-name] */e$combine = e.combine
  var /* [auto-meaningful-name] */e$destination = e.destination
  return e$destination ? e$destination.droppableId : e$combine ? e$combine.droppableId : null
}
function iM(e) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  }
}
var aM = {
  mapped: {
    type: "SECONDARY",
    offset: GN,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: iM(null)
  }
}
var sM = {
  dropAnimationFinished: Nk
}
var cM = connect(function () {
  var e = function () {
    var e = CN(function (e, t) {
      return {
        x: e,
        y: t
      }
    })
    var t = CN(function (e, t, n, r, o) {
      return {
        isDragging: true,
        isClone: t,
        isDropAnimating: Boolean(o),
        dropAnimation: o,
        mode: e,
        draggingOver: n,
        combineWith: r,
        combineTargetFor: null
      }
    })
    var n = CN(function (e, n, r, o, i, a, s) {
      return {
        mapped: {
          type: "DRAGGING",
          dropping: null,
          draggingOver: i,
          combineWith: a,
          mode: n,
          offset: e,
          dimension: r,
          forceShouldAnimate: s,
          snapshot: t(n, o, i, a, null)
        }
      }
    })
    return function (r, o) {
      if (r.isDragging) {
        if (r.critical.draggable.id !== o.draggableId) {
          return null
        }
        var /* [auto-meaningful-name] */r$current$client$offset = r.current.client.offset
        var a = r.dimensions.draggables[o.draggableId]
        var s = XR(r.impact)
        var c = (r$impact = r.impact).at && "COMBINE" === r$impact.at.type ? r$impact.at.combine.draggableId : null
        var /* [auto-meaningful-name] */r$forceShouldAnimate = r.forceShouldAnimate
        return n(e(r$current$client$offset.x, r$current$client$offset.y), r.movementMode, a, o.isClone, s, c, r$forceShouldAnimate)
      }
      var /* [auto-meaningful-name] */r$impact
      if ("DROP_ANIMATING" === r.phase) {
        var /* [auto-meaningful-name] */r$completed = r.completed
        if (r$completed.result.draggableId !== o.draggableId) {
          return null
        }
        var /* [auto-meaningful-name] */o$isClone = o.isClone
        var f = r.dimensions.draggables[o.draggableId]
        var /* [auto-meaningful-name] */r$completed$result = r$completed.result
        var /* [auto-meaningful-name] */r$completed$result$mode = r$completed$result.mode
        var g = oM(r$completed$result)
        var _ = function (e) {
          return e.combine ? e.combine.draggableId : null
        }(r$completed$result)
        var v = {
          duration: r.dropDuration,
          curve: CubicBezier$21$11,
          moveTo: r.newHomeClientOffset,
          opacity: _ ? kk.drop : null,
          scale: _ ? xk.drop : null
        }
        return {
          mapped: {
            type: "DRAGGING",
            offset: r.newHomeClientOffset,
            dimension: f,
            dropping: v,
            draggingOver: g,
            combineWith: _,
            mode: r$completed$result$mode,
            forceShouldAnimate: null,
            snapshot: t(r$completed$result$mode, o$isClone, g, _, v)
          }
        }
      }
      return null
    }
  }()
  var t = function () {
    var e = CN(function (e, t) {
      return {
        x: e,
        y: t
      }
    })
    var t = CN(iM)
    var n = CN(function (e, n, r) {
      if (undefined === n) {
        n = null
      }
      return {
        mapped: {
          type: "SECONDARY",
          offset: e,
          combineTargetFor: n,
          shouldAnimateDisplacement: r,
          snapshot: t(n)
        }
      }
    })
    var r = function (e) {
      return e ? n(GN, e, true) : null
    }
    var o = function (t, o, i, a) {
      var s = i.displaced.visible[t]
      var c = Boolean(a.inVirtualList && a.effected[t])
      var l = uR(i)
      var u = l && l.draggableId === t ? o : null
      if (!s) {
        if (!c) {
          return r(u)
        }
        if (i.displaced.invisible[t]) {
          return null
        }
        var d = VN(a.displacedBy.point)
        var p = e(d.x, d.y)
        return n(p, u, true)
      }
      if (c) {
        return r(u)
      }
      var /* [auto-meaningful-name] */i$displacedBy$point = i.displacedBy.point
      var h = e(i$displacedBy$point.x, i$displacedBy$point.y)
      return n(h, u, s.shouldAnimate)
    }
    return function (e, t) {
      if (e.isDragging) {
        return e.critical.draggable.id === t.draggableId ? null : o(t.draggableId, e.critical.draggable.id, e.impact, e.afterCritical)
      }
      if ("DROP_ANIMATING" === e.phase) {
        var /* [auto-meaningful-name] */e$completed = e.completed
        return e$completed.result.draggableId === t.draggableId ? null : o(t.draggableId, e$completed.result.draggableId, e$completed.impact, e$completed.afterCritical)
      }
      return null
    }
  }()
  return function (n, r) {
    return e(n, r) || t(n, r) || aM
  }
}, sM, null, {
  context: zx,
  pure: true,
  areStatePropsEqual: rM
})(function (e) {
  var t = useRef(null)
  var n = dN(function (e) {
    t.current = e
  }, [])
  var r = dN(function () {
    return t.current
  }, [])
  var o = WD(Zx)
  var /* [auto-meaningful-name] */o$contextId = o.contextId
  var /* [auto-meaningful-name] */o$dragHandleUsageInstructionsId = o.dragHandleUsageInstructionsId
  var /* [auto-meaningful-name] */o$registry = o.registry
  var c = WD(KD)
  var /* [auto-meaningful-name] */c$type = c.type
  var /* [auto-meaningful-name] */c$droppableId = c.droppableId
  var d = uN(function () {
    return {
      id: e.draggableId,
      index: e.index,
      type: c$type,
      droppableId: c$droppableId
    }
  }, [e.draggableId, e.index, c$type, c$droppableId])
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$draggableId = e.draggableId
  var /* [auto-meaningful-name] */e$isEnabled = e.isEnabled
  var /* [auto-meaningful-name] */e$shouldRespectForcePress = e.shouldRespectForcePress
  var /* [auto-meaningful-name] */e$canDragInteractiveElements = e.canDragInteractiveElements
  var /* [auto-meaningful-name] */e$isClone = e.isClone
  var /* [auto-meaningful-name] */e$mapped = e.mapped
  var /* [auto-meaningful-name] */e$dropAnimationFinished = e.dropAnimationFinished
  tM()
  Jx()
  if (!e$isClone) {
    eM(uN(function () {
      return {
        descriptor: d,
        registry: o$registry,
        getDraggableRef: r,
        canDragInteractiveElements: e$canDragInteractiveElements,
        shouldRespectForcePress: e$shouldRespectForcePress,
        isEnabled: e$isEnabled
      }
    }, [d, o$registry, r, e$canDragInteractiveElements, e$shouldRespectForcePress, e$isEnabled]))
  }
  var E = uN(function () {
    return e$isEnabled ? {
      tabIndex: 0,
      role: "button",
      "aria-describedby": o$dragHandleUsageInstructionsId,
      "data-rbd-drag-handle-draggable-id": e$draggableId,
      "data-rbd-drag-handle-context-id": o$contextId,
      draggable: false,
      onDragStart: nM
    } : null
  }, [o$contextId, o$dragHandleUsageInstructionsId, e$draggableId, e$isEnabled])
  var O = dN(function (e) {
    if ("DRAGGING" === e$mapped.type && e$mapped.dropping && "transform" === e.propertyName) {
      e$dropAnimationFinished()
    }
  }, [e$dropAnimationFinished, e$mapped])
  var w = uN(function () {
    var e = $D(e$mapped)
    var t = "DRAGGING" === e$mapped.type && e$mapped.dropping ? O : null
    return {
      innerRef: n,
      draggableProps: {
        "data-rbd-draggable-context-id": o$contextId,
        "data-rbd-draggable-id": e$draggableId,
        style: e,
        onTransitionEnd: t
      },
      dragHandleProps: E
    }
  }, [o$contextId, E, e$draggableId, e$mapped, O, n])
  var C = uN(function () {
    return {
      draggableId: d.id,
      type: d.type,
      source: {
        index: d.index,
        droppableId: d.droppableId
      }
    }
  }, [d.droppableId, d.id, d.index, d.type])
  return e$children(w, e$mapped.snapshot, C)
})
function lM(e) {
  return WD(KD).isUsingCloneFor !== e.draggableId || e.isClone ? React.createElement(cM, e) : null
}
function uM(e) {
  var t = "boolean" !== typeof e.isDragDisabled || !e.isDragDisabled
  var n = Boolean(e.disableInteractiveElementBlocking)
  var r = Boolean(e.shouldRespectForcePress)
  return React.createElement(lM, Module_19.a({}, e, {
    isClone: false,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }))
}
var dM = function (e, t) {
  return e === t.droppable.type
}
var pM = function (e, t) {
  return t.draggables[e.draggable.id]
}
var fM = {
  updateViewportMaxScroll: function (e) {
    return {
      type: "UPDATE_VIEWPORT_MAX_SCROLL",
      payload: e
    }
  }
}
var hM = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: function () {
    if (!document.body) {
      NN(false)
    }
    return document.body
  }
}
var mM = connect(function () {
  var e = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  }
  var t = Module_19.a({}, e, {
    shouldAnimatePlaceholder: false
  })
  var n = CN(function (e) {
    return {
      draggableId: e.id,
      type: e.type,
      source: {
        index: e.index,
        droppableId: e.droppableId
      }
    }
  })
  var r = CN(function (r, o, i, a, s, c) {
    var /* [auto-meaningful-name] */s$descriptor$id = s.descriptor.id
    if (s.descriptor.droppableId === r) {
      var u = c ? {
        render: c,
        dragging: n(s.descriptor)
      } : null
      var d = {
        isDraggingOver: i,
        draggingOverWith: i ? s$descriptor$id : null,
        draggingFromThisWith: s$descriptor$id,
        isUsingPlaceholder: true
      }
      return {
        placeholder: s.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: d,
        useClone: u
      }
    }
    if (!o) {
      return t
    }
    if (!a) {
      return e
    }
    var p = {
      isDraggingOver: i,
      draggingOverWith: s$descriptor$id,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    }
    return {
      placeholder: s.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot: p,
      useClone: null
    }
  })
  return function (n, o) {
    var /* [auto-meaningful-name] */o$droppableId = o.droppableId
    var /* [auto-meaningful-name] */o$type = o.type
    var s = !o.isDropDisabled
    var /* [auto-meaningful-name] */o$renderClone = o.renderClone
    if (n.isDragging) {
      var /* [auto-meaningful-name] */n$critical = n.critical
      if (!dM(o$type, n$critical)) {
        return t
      }
      var u = pM(n$critical, n.dimensions)
      var d = XR(n.impact) === o$droppableId
      return r(o$droppableId, s, d, d, u, o$renderClone)
    }
    if ("DROP_ANIMATING" === n.phase) {
      var /* [auto-meaningful-name] */n$completed = n.completed
      if (!dM(o$type, n$completed.critical)) {
        return t
      }
      var f = pM(n$completed.critical, n.dimensions)
      return r(o$droppableId, s, oM(n$completed.result) === o$droppableId, XR(n$completed.impact) === o$droppableId, f, o$renderClone)
    }
    if ("IDLE" === n.phase && n.completed && !n.shouldFlush) {
      var /* [auto-meaningful-name] */n$completed1 = n.completed
      if (!dM(o$type, n$completed1.critical)) {
        return t
      }
      var m = XR(n$completed1.impact) === o$droppableId
      var g = Boolean(n$completed1.impact.at && "COMBINE" === n$completed1.impact.at.type)
      var _ = n$completed1.critical.droppable.id === o$droppableId
      return m ? g ? e : t : _ ? e : t
    }
    return t
  }
}, fM, null, {
  context: zx,
  pure: true,
  areStatePropsEqual: rM
})(function (e) {
  var t = useContext(Zx)
  if (!t) {
    NN(false)
  }
  var /* [auto-meaningful-name] */t$contextId = t.contextId
  var /* [auto-meaningful-name] */t$isMovementAllowed = t.isMovementAllowed
  var o = useRef(null)
  var i = useRef(null)
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$droppableId = e.droppableId
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$ignoreContainerClipping = e.ignoreContainerClipping
  var /* [auto-meaningful-name] */e$isDropDisabled = e.isDropDisabled
  var /* [auto-meaningful-name] */e$isCombineEnabled = e.isCombineEnabled
  var /* [auto-meaningful-name] */e$snapshot = e.snapshot
  var /* [auto-meaningful-name] */e$useClone = e.useClone
  var /* [auto-meaningful-name] */e$updateViewportMaxScroll = e.updateViewportMaxScroll
  var /* [auto-meaningful-name] */e$getContainerForClone = e.getContainerForClone
  var E = dN(function () {
    return o.current
  }, [])
  var O = dN(function (e) {
    o.current = e
  }, [])
  dN(function () {
    return i.current
  }, [])
  var w = dN(function (e) {
    i.current = e
  }, [])
  $x()
  var C = dN(function () {
    if (t$isMovementAllowed()) {
      e$updateViewportMaxScroll({
        maxScroll: ox()
      })
    }
  }, [t$isMovementAllowed, e$updateViewportMaxScroll])
  !function (e) {
    var t = useRef(null)
    var n = WD(Zx)
    var r = Qx("droppable")
    var /* [auto-meaningful-name] */n$registry = n.registry
    var /* [auto-meaningful-name] */n$marshal = n.marshal
    var a = tD(e)
    var s = uN(function () {
      return {
        id: e.droppableId,
        type: e.type,
        mode: e.mode
      }
    }, [e.droppableId, e.mode, e.type])
    var c = useRef(s)
    var l = uN(function () {
      return CN(function (e, n) {
        if (!t.current) {
          NN(false)
        }
        var r = {
          x: e,
          y: n
        }
        n$marshal.updateDroppableScroll(s.id, r)
      })
    }, [s.id, n$marshal])
    var u = dN(function () {
      var /* [auto-meaningful-name] */t$current = t.current
      return t$current && t$current.env.closestScrollable ? MD(t$current.env.closestScrollable) : GN
    }, [])
    var d = dN(function () {
      var e = u()
      l(e.x, e.y)
    }, [u, l])
    var p = uN(function () {
      return TN(d)
    }, [d])
    var h = dN(function () {
      var /* [auto-meaningful-name] */t$current = t.current
      var n = UD(t$current)
      if (!(t$current && n)) {
        NN(false)
      }
      if (t$current.scrollOptions.shouldPublishImmediately) {
        d()
      } else {
        p()
      }
    }, [p, d])
    var m = dN(function (e, r) {
      if (t.current) {
        NN(false)
      }
      var /* [auto-meaningful-name] */a$current = a.current
      var i = a$current.getDroppableRef()
      if (!i) {
        NN(false)
      }
      var c = LD(i)
      var l = {
        ref: i,
        descriptor: s,
        env: c,
        scrollOptions: r
      }
      t.current = l
      var u = PD({
        ref: i,
        descriptor: s,
        env: c,
        windowScroll: e,
        direction: a$current.direction,
        isDropDisabled: a$current.isDropDisabled,
        isCombineEnabled: a$current.isCombineEnabled,
        shouldClipSubject: !a$current.ignoreContainerClipping
      })
      var /* [auto-meaningful-name] */c$closestScrollable = c.closestScrollable
      if (c$closestScrollable) {
        c$closestScrollable.setAttribute(Mx.contextId, n.contextId)
        c$closestScrollable.addEventListener("scroll", h, GD(l.scrollOptions))
      }
      return u
    }, [n.contextId, s, h, a])
    var g = dN(function () {
      var /* [auto-meaningful-name] */t$current = t.current
      var n = UD(t$current)
      if (!(t$current && n)) {
        NN(false)
      }
      return MD(n)
    }, [])
    var _ = dN(function () {
      var /* [auto-meaningful-name] */t$current = t.current
      if (!t$current) {
        NN(false)
      }
      var n = UD(t$current)
      t.current = null
      if (n) {
        p.cancel()
        n.removeAttribute(Mx.contextId)
        n.removeEventListener("scroll", h, GD(t$current.scrollOptions))
      }
    }, [h, p])
    var v = dN(function (e) {
      var /* [auto-meaningful-name] */t$current = t.current
      if (!t$current) {
        NN(false)
      }
      var r = UD(t$current)
      if (!r) {
        NN(false)
      }
      r.scrollTop += e.y
      r.scrollLeft += e.x
    }, [])
    var b = uN(function () {
      return {
        getDimensionAndWatchScroll: m,
        getScrollWhileDragging: g,
        dragStopped: _,
        scroll: v
      }
    }, [_, m, g, v])
    var y = uN(function () {
      return {
        uniqueId: r,
        descriptor: s,
        callbacks: b
      }
    }, [b, s, r])
    Px(function () {
      c.current = y.descriptor
      n$registry.droppable.register(y)
      return function () {
        if (t.current) {
          _()
        }
        n$registry.droppable.unregister(y)
      }
    }, [b, s, _, y, n$marshal, n$registry.droppable])
    Px(function () {
      if (t.current) {
        n$marshal.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled)
      }
    }, [e.isDropDisabled, n$marshal])
    Px(function () {
      if (t.current) {
        n$marshal.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled)
      }
    }, [e.isCombineEnabled, n$marshal])
  }({
    droppableId: e$droppableId,
    type: e$type,
    mode: e$mode,
    direction: e$direction,
    isDropDisabled: e$isDropDisabled,
    isCombineEnabled: e$isCombineEnabled,
    ignoreContainerClipping: e$ignoreContainerClipping,
    getDroppableRef: E
  })
  var T = React.createElement(qD, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, function (e) {
    var /* [auto-meaningful-name] */e$onClose = e.onClose
    var /* [auto-meaningful-name] */e$data = e.data
    var /* [auto-meaningful-name] */e$animate = e.animate
    return React.createElement(YD, {
      placeholder: e$data,
      onClose: e$onClose,
      innerRef: w,
      animate: e$animate,
      contextId: t$contextId,
      onTransitionEnd: C
    })
  })
  var S = uN(function () {
    return {
      innerRef: O,
      placeholder: T,
      droppableProps: {
        "data-rbd-droppable-id": e$droppableId,
        "data-rbd-droppable-context-id": t$contextId
      }
    }
  }, [t$contextId, e$droppableId, T, O])
  var A = e$useClone ? e$useClone.dragging.draggableId : null
  var I = uN(function () {
    return {
      droppableId: e$droppableId,
      type: e$type,
      isUsingCloneFor: A
    }
  }, [e$droppableId, A, e$type])
  return React.createElement(KD.Provider, {
    value: I
  }, e$children(S, e$snapshot), function () {
    if (!e$useClone) {
      return null
    }
    var /* [auto-meaningful-name] */e$useClone$dragging = e$useClone.dragging
    var /* [auto-meaningful-name] */e$useClone$render = e$useClone.render
    var n = React.createElement(lM, {
      draggableId: e$useClone$dragging.draggableId,
      index: e$useClone$dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function (n, r) {
      return e$useClone$render(n, r, e$useClone$dragging)
    })
    return ReactDom.createPortal(n, e$getContainerForClone())
  }())
})
mM.defaultProps = hM
export { ID }
export { uM }
export { mM }
