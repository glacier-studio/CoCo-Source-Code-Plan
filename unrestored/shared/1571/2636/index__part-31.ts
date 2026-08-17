/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-31
 */

"use strict"

import { No, Ro, ko, xo, vi, Ci, Ti, ki, Ki, $i, ea, Ba, Wa, Ku } from "./index__part-28"
import { od, id } from "./index__part-29"
import { ld } from "./index__part-30"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import /* [auto-meaningful-name] */Src_editor_ui_PreviewArea_styles_module_css from /* 279 */"../../../../src/editor/ui/PreviewArea/styles.module.css"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector, batch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useState, useEffect, createElement, PureComponent, version, Component } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* 2602 */"./2602"
var ud = ["n", "nw", "ne", "s", "se", "sw", "e", "w"]
var dd = ["e", "w"]
var pd = ["n", "s"]
var fd = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$hidden = e.hidden
  var /* [auto-meaningful-name] */e$onMoveStart = e.onMoveStart
  var /* [auto-meaningful-name] */e$onMouseMove = e.onMouseMove
  var /* [auto-meaningful-name] */e$onMoveEnd = e.onMoveEnd
  var i = useDispatch()
  var a = React.useRef(null)
  var s = useRef({})
  var c = useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState(ud)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = React.useState()
  var y = Module_10.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var C = useSelector(function (e) {
    return e.common.previewAreaUpdatedAt
  })
  useEffect(function () {
    setTimeout(function () {
      var /* [auto-meaningful-name] */a$current
      return null === (a$current = a.current) || undefined === a$current ? undefined : a$current.moveable.updateRect()
    }, 0)
  }, [C])
  useEffect(function () {
    function e() {
      var /* [auto-meaningful-name] */a$current
      if (!(null === (a$current = a.current) || undefined === a$current)) {
        a$current.moveable.updateRect()
      }
    }
    window.addEventListener("resize", e)
    return function () {
      window.removeEventListener("resize", e)
    }
  }, [])
  useEffect(function () {
    setTimeout(function () {
      var e
      if (w) {
        var t = document.getElementById(w)
        if (t) {
          e = t
        }
      }
      O(e)
    })
  }, [w])
  useEffect(function () {
    if (E) {
      var e = "true" === E.dataset.lockHeight
      var t = "true" === E.dataset.lockWidth
      v(e && t ? [] : e ? dd : t ? pd : ud)
    }
  }, [E])
  return e$hidden ? null : React.createElement(Ku, {
    ref: a,
    target: E,
    origin: false,
    draggable: true,
    resizable: true,
    className: "select-box",
    renderDirections: g,
    keepRatio: false,
    ables: [od, id, ld],
    props: {
      MoveableRightAddon: true,
      MoveableBottomAddon: true,
      WidgetSize: u
    },
    onDragStart: function (e) {
      if (function (e) {
        if (e.target) {
          var t = e.target.getBoundingClientRect()
          if (e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom) {
            return true
          }
        }
        return false
      }(e)) {
        return false
      }
      e$onMoveStart()
    },
    onDrag: function (e) {
      var /* [auto-meaningful-name] */e$target$id = e.target.id
      e.target.style.transform = e.transform
      var n = {
        x: Math.round(e.left),
        y: Math.round(e.top)
      }
      e$onMouseMove(e$target$id, Module_6.a({}, n))
    },
    onDragEnd: function (e) {
      var /* [auto-meaningful-name] */e$lastEvent = e.lastEvent
      e.target.style.transform = ""
      var /* [auto-meaningful-name] */e$target$id = e.target.id
      if (e$lastEvent) {
        var r = Math.round(e$lastEvent.left)
        var a = Math.round(e$lastEvent.top)
        i(Src_editor_redux_common_actions.Lg(e$target$id, "position", {
          x: r,
          y: a
        }, true, true))
      }
      e$onMoveEnd()
    },
    onResizeStart: function (e) {
      d(true)
      s.current = {}
      var /* [auto-meaningful-name] */e$target$id = e.target.id
      var n = Module_9.Bb(e$target$id)
      if (n && n.type === Src_editor_widget_builtIn_types.H) {
        if (document.activeElement && "TEXTAREA" === document.activeElement.tagName.toUpperCase()) {
          document.activeElement.blur()
        }
        if (n.attributes.sizeAdaptive & Src_editor_widget_builtIn_types.q.AUTO_HEIGHT && 0 !== e.direction[1]) {
          i(Src_editor_redux_common_actions.Lg(e$target$id, "sizeAdaptive", Src_editor_widget_builtIn_types.q.FIXED, true, true))
        }
      }
    },
    onResize: function (e) {
      var /* [auto-meaningful-name] */e$target$dataset = e.target.dataset
      var /* [auto-meaningful-name] */e$target$id = e.target.id
      var r = Module_9.Bb(e$target$id)
      if (r) {
        var o = r.type === Src_editor_widget_builtIn_types.H && r.attributes.sizeAdaptive & Src_editor_widget_builtIn_types.q.AUTO_HEIGHT
        var a = "true" === e$target$dataset.lockWidth
        var c = "true" === e$target$dataset.lockHeight
        var l = Number(e$target$dataset.minWidth) || Module_60.u
        var u = Number(e$target$dataset.maxWidth) || Module_60.l
        var d = Number(e$target$dataset.minHeight) || Module_60.p
        var p = Number(e$target$dataset.maxHeight) || Module_60.g
        var f = Math.round(e.width)
        var h = Math.round(e.height)
        if (!a) {
          if (u) {
            f = Math.min(u, f)
          }
          if (l) {
            f = Math.max(l, f)
          }
          e.target.style.width = "".concat(f, "px")
        }
        if (!(c || o)) {
          if (p) {
            h = Math.min(p, h)
          }
          if (d) {
            h = Math.max(d, h)
          }
          e.target.style.height = "".concat(h, "px")
        }
        if (0 === e.direction[1] && o) {
          var m = e.drag.translate[0]
          e.target.style.transform = "translate(".concat(m, "px, 0)")
          s.current[e$target$id] = {
            width: f,
            height: h,
            translate: [m, 0]
          }
        } else {
          e.target.style.transform = e.drag.transform
          s.current[e$target$id] = {
            width: f,
            height: h,
            translate: e.drag.beforeTranslate
          }
        }
        e.target.style.transform = e.drag.transform
        s.current[e$target$id] = {
          width: f,
          height: h,
          translate: e.drag.beforeTranslate
        }
        if (!(!r || (null === r || undefined === r ? undefined : r.type) !== Src_editor_widget_builtIn_types.z && (null === r || undefined === r ? undefined : r.type) !== Src_editor_widget_builtIn_types.E && (null === r || undefined === r ? undefined : r.type) !== Src_editor_widget_builtIn_types.w && (null === r || undefined === r ? undefined : r.type) !== Src_editor_widget_builtIn_types.F)) {
          Lodash.throttle(function () {
            if (undefined !== f || undefined !== h) {
              var e = {
                width: f,
                height: h
              }
              i(Src_editor_redux_common_actions.Lg(e$target$id, "size", e, true, true))
            }
          }, 500)()
        }
      }
    },
    onResizeEnd: function (e) {
      d(false)
      var /* [auto-meaningful-name] */e$target$id = e.target.id
      var n = Module_9.Bb(e$target$id)
      var r = s.current[e$target$id]
      if (r && n) {
        var /* [auto-meaningful-name] */r$width = r.width
        var /* [auto-meaningful-name] */r$height = r.height
        var /* [auto-meaningful-name] */r$translate = r.translate
        batch(function () {
          if (r$translate) {
            var /* [auto-meaningful-name] */n$position = n.position
            var s = Math.round(r$translate[0])
            var l = Math.round(r$translate[1])
            n$position.x += s
            n$position.y += l
            e.target.style.left = "".concat(n$position.x, "px")
            e.target.style.top = "".concat(n$position.y, "px")
            e.target.style.transform = ""
            i(Src_editor_redux_common_actions.Lg(e$target$id, "position", n$position, true, true))
          }
          if (undefined !== r$width || undefined !== r$height) {
            var u = {
              width: r$width,
              height: r$height
            }
            i(Src_editor_redux_common_actions.Lg(e$target$id, "size", u, true, true))
          }
        })
      }
    }
  })
})
var hd = React.memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useDispatch()
  return React.createElement("div", {
    className: Src_editor_ui_PreviewArea_styles_module_css.stageMask,
    onDrop: function () {
      var /* [auto-meaningful-name] */Src_editor_ui_PreviewArea_styles_module_css$canvasFlash = Src_editor_ui_PreviewArea_styles_module_css.canvasFlash
      var r = useIntl$formatMessage({
        id: "StageToast.addActorToCanvasTips"
      })
      t(Src_editor_redux_common_actions.xj(r))
      var o = document.querySelectorAll("[data-widget-type=\"CANVAS_WIDGET\"][data-role=\"WIDGET\"]")
      if (o) {
        o.forEach(function (e) {
          if (!e.classList.contains(Src_editor_ui_PreviewArea_styles_module_css$canvasFlash)) {
            e.classList.add(Src_editor_ui_PreviewArea_styles_module_css$canvasFlash)
            setTimeout(function () {
              try {
                e.classList.remove(Src_editor_ui_PreviewArea_styles_module_css$canvasFlash)
              } catch (t) {
                console.error("Canvas widget remove flush class error")
              }
            }, 2e3)
          }
        })
      }
    }
  })
})
var md = React.memo(function () {
  return React.createElement("div", {
    className: Src_editor_ui_PreviewArea_styles_module_css.stageReadOnlyMask
  })
})
var gd = function (e, t, n, r) {
  var o = e.x
  var i = e.y
  var /* [auto-meaningful-name] */t$height = t.height
  var /* [auto-meaningful-name] */t$width = t.width
  var /* [auto-meaningful-name] */n$left = n.left
  var /* [auto-meaningful-name] */n$right = n.right
  var u = {
    x: [n.top, n.bottom, i, i + t$height],
    y: [n$left, n$right, o, o + t$width]
  }
  return {
    length: function (e) {
      var t = e.sort(function (e, t) {
        return e - t
      })
      return t[t.length - 1] - t[0]
    }(u[r]),
    origin: Math.min.apply(Math, Module_25.a(u[r]))
  }
}
var _d = function (e, t, n, r) {
  var o = {}
  n.forEach(function (n) {
    (function (e, t, n, r) {
      var o = e.x
      var i = e.y
      var /* [auto-meaningful-name] */t$width = t.width
      var /* [auto-meaningful-name] */t$height = t.height
      var /* [auto-meaningful-name] */n$left = n.left
      var /* [auto-meaningful-name] */n$right = n.right
      var /* [auto-meaningful-name] */n$top = n.top
      var /* [auto-meaningful-name] */n$bottom = n.bottom
      var /* [auto-meaningful-name] */n$center = n.center
      var /* [auto-meaningful-name] */n$middle = n.middle
      var h = gd({
        x: o,
        y: i
      }, t, n, r)
      var /* [auto-meaningful-name] */h$origin = h.origin
      var /* [auto-meaningful-name] */h$length = h.length
      var _ = "x" === r ? [o, o + t$width / 2, o + t$width] : [i, i + t$height / 2, i + t$height]
      var v = [];
      ("x" === r ? [n$left, n$center, n$right] : [n$top, n$middle, n$bottom]).forEach(function (e) {
        _.forEach(function (t) {
          var n = {
            near: false,
            dist: Number.MAX_SAFE_INTEGER,
            value: 0,
            length: h$length,
            origin: h$origin
          }
          n.dist = t - e
          n.value = e
          if (Math.abs(n.dist) < 2) {
            n.near = true
          }
          v.push(n)
        })
      })
      return v
    })(e, t, n, r).forEach(function (e) {
      var /* [auto-meaningful-name] */e$near = e.near
      var /* [auto-meaningful-name] */e$dist = e.dist
      var /* [auto-meaningful-name] */e$value = e.value
      var /* [auto-meaningful-name] */e$origin = e.origin
      var /* [auto-meaningful-name] */e$length = e.length
      if (e$near) {
        (function (e, t, n) {
          if (Array.isArray(e[t])) {
            e[t].push(n)
          } else {
            e[t] = [n]
          }
        })(o, e$dist, {
          id: n.id,
          value: e$value,
          origin: e$origin,
          length: e$length
        })
      }
    })
  })
  var i = Object.entries(o)
  if (i.length) {
    var a = i.sort(function (e, t) {
      var n = Module_10.a(e, 1)[0]
      var r = Module_10.a(t, 1)[0]
      var o = parseInt(n)
      var i = parseInt(r)
      return Math.abs(o) - Math.abs(i)
    })
    var s = Module_10.a(a[0], 2)
    var c = s[0]
    var l = s[1]
    var u = parseInt(c)
    return {
      v: e[r] - u,
      dist: u,
      lines: l,
      indices: l.map(function (e) {
        return e.id
      })
    }
  }
  return {
    v: e[r],
    dist: 0,
    lines: [],
    indices: []
  }
}
var vd = function (e, t) {
  return (vd = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var bd = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.state = {
      scrollPos: 0
    }
    t.width = 0
    t.height = 0
    return t
  }
  !function (e, t) {
    function n() {
      this.constructor = e
    }
    vd(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  }(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.render = function () {
    return createElement("canvas", {
      ref: ko(this, "canvasElement"),
      style: this.props.style
    })
  }
  t$prototype.componentDidMount = function () {
    var e = this.canvasElement.getContext("2d")
    this.canvasContext = e
    this.resize()
  }
  t$prototype.componentDidUpdate = function () {
    this.resize()
  }
  t$prototype.scroll = function (e) {
    this.draw(e)
  }
  t$prototype.resize = function () {
    var /* [auto-meaningful-name] */this$canvasElement = this.canvasElement
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$width = this$props.width
    var /* [auto-meaningful-name] */this$props$height = this$props.height
    var /* [auto-meaningful-name] */this$props$scrollPos = this$props.scrollPos
    this.width = this$props$width || this$canvasElement.offsetWidth
    this.height = this$props$height || this$canvasElement.offsetHeight
    this$canvasElement.width = 2 * this.width
    this$canvasElement.height = 2 * this.height
    this.draw(this$props$scrollPos)
  }
  t$prototype.draw = function (e) {
    if (undefined === e) {
      e = this.state.scrollPos
    }
    var /* [auto-meaningful-name] */this$props = this.props
    var n = this$props
    var /* [auto-meaningful-name] */n$unit = n.unit
    var /* [auto-meaningful-name] */n$zoom = n.zoom
    var /* [auto-meaningful-name] */n$type = n.type
    var /* [auto-meaningful-name] */n$backgroundColor = n.backgroundColor
    var /* [auto-meaningful-name] */n$lineColor = n.lineColor
    var /* [auto-meaningful-name] */n$textColor = n.textColor
    var /* [auto-meaningful-name] */n$direction = n.direction
    var /* [auto-meaningful-name] */n$negativeRuler = n.negativeRuler
    var d = undefined === n$negativeRuler || n$negativeRuler
    var /* [auto-meaningful-name] */n$textFormat = n.textFormat
    var /* [auto-meaningful-name] */this$width = this.width
    var /* [auto-meaningful-name] */this$height = this.height
    this.state.scrollPos = e
    var /* [auto-meaningful-name] */this$canvasContext = this.canvasContext
    var g = "horizontal" === n$type
    var _ = "start" === n$direction
    var v = false !== d
    var b = this$props.textAlign || "left"
    var y = "vertical" === n$type ? [-10, -5] : [5, -10]
    var E = g ? this$height : this$width
    var O = vi("" + (this$props.mainLineSize || "100%"), E)
    var w = vi("" + (this$props.longLineSize || 10), E)
    var C = vi("" + (this$props.shortLineSize || 7), E)
    if ("transparent" === n$backgroundColor) {
      this$canvasContext.clearRect(0, 0, 2 * this$width, 2 * this$height)
    } else {
      this$canvasContext.rect(0, 0, 2 * this$width, 2 * this$height)
      this$canvasContext.fillStyle = n$backgroundColor
      this$canvasContext.fill()
    }
    this$canvasContext.save()
    this$canvasContext.scale(2, 2)
    this$canvasContext.strokeStyle = n$lineColor
    this$canvasContext.lineWidth = 1
    this$canvasContext.font = "10px sans-serif"
    this$canvasContext.fillStyle = n$textColor
    if (_) {
      this$canvasContext.textBaseline = "top"
    }
    this$canvasContext.translate(.5, 0)
    this$canvasContext.beginPath()
    for (var T = g ? this$width : this$height, S = n$zoom * n$unit, A = Math.floor(e * n$zoom / S), I = Math.ceil((e * n$zoom + T) / S) - A, j = Math.max(["left", "center", "right"].indexOf(b) - 1, -1), N = 0; N <= I; ++N) {
      var R = N + A
      if (v || !(R < 0)) {
        for (var k = (R * n$unit - e) * n$zoom, x = 0; x < 10; ++x) {
          var D = k + x / 10 * S
          if (!(D < 0 || D >= T)) {
            var M = 0 === x ? O : x % 5 === 0 ? w : C
            var L = g ? [D, _ ? 0 : this$height - M] : [_ ? 0 : this$width - M, D]
            var P = L[0]
            var B = L[1]
            var F = g ? [P, B + M] : [P + M, B]
            var G = F[0]
            var W = F[1]
            this$canvasContext.moveTo(P, B)
            this$canvasContext.lineTo(G, W)
          }
        }
        if (k >= -S && k < T + n$unit * n$zoom) {
          var U = g ? [k + -3 * j, _ ? 17 : this$height - 17] : [_ ? 17 : this$width - 17, k + 3 * j]
          var H = U[0]
          var V = U[1]
          var z = "" + R * n$unit
          if (n$textFormat) {
            z = n$textFormat(R * n$unit)
          }
          this$canvasContext.textAlign = b
          if (g) {
            this$canvasContext.fillText(z, H + y[0], V + y[1])
          } else {
            this$canvasContext.save()
            this$canvasContext.translate(H + y[0], V + y[1])
            this$canvasContext.rotate(-Math.PI / 2)
            this$canvasContext.fillText(z, 0, 0)
            this$canvasContext.restore()
          }
        }
      }
    }
    this$canvasContext.stroke()
    this$canvasContext.restore()
  }
  t.defaultProps = {
    type: "horizontal",
    zoom: 1,
    width: 0,
    height: 0,
    unit: 50,
    negativeRuler: true,
    mainLineSize: "100%",
    longLineSize: 10,
    shortLineSize: 7,
    direction: "end",
    style: {
      width: "100%",
      height: "100%"
    },
    backgroundColor: "#333333",
    textColor: "#ffffff",
    lineColor: "#777777"
  }
  return t
}(PureComponent)
var yd = ["type", "width", "height", "unit", "zoom", "style", "backgroundColor", "lineColor", "textColor", "direction", "textFormat", "scrollPos", "textAlign", "mainLineSize", "longLineSize", "shortLineSize", "negativeRuler"]
var Ed = bd
var Od = function (e, t) {
  return (Od = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function wd(e, t) {
  function n() {
    this.constructor = e
  }
  Od(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var Cd = function () {
  return (Cd = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o]
      }
    }
    return e
  }).apply(this, arguments)
}
var Td = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.injectResult = null
    t.tag = "div"
    return t
  }
  wd(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.render = function () {
    var e
    var /* [auto-meaningful-name] */_Element
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$className = this$props.className
    var o = undefined === this$props$className ? "" : this$props$className
    this$props.cspNonce
    var /* [auto-meaningful-name] */this$props$portalContainer = this$props.portalContainer
    var a = function (e, t) {
      var n = {}
      for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r]
      }
      if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
          if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
            n[r[o]] = e[r[o]]
          }
        }
      }
      return n
    }(this$props, ["className", "cspNonce", "portalContainer"])
    var /* [auto-meaningful-name] */this$injector$className = this.injector.className
    var /* [auto-meaningful-name] */this$tag = this.tag
    var l = {}
    if ((version || "").indexOf("simple") > -1 && this$props$portalContainer) {
      l = {
        portalContainer: this$props$portalContainer
      }
    }
    return createElement(this$tag, Cd({
      ref: (e = this, _Element = "element", function (n) {
        if (n) {
          e[_Element] = n
        }
      }),
      "data-styled-id": this$injector$className,
      className: o + " " + this$injector$className
    }, l, a))
  }
  t$prototype.componentDidMount = function () {
    this.injectResult = this.injector.inject(this.element, {
      nonce: this.props.cspNonce
    })
  }
  t$prototype.componentWillUnmount = function () {
    this.injectResult.destroy()
    this.injectResult = null
  }
  t$prototype.getElement = function () {
    return this.element
  }
  return t
}(Component)
var Sd = function (e, t) {
  var n = Wa(t)
  return function (t) {
    function r() {
      var r = null !== t && t.apply(this, arguments) || this
      r.injector = n
      r.tag = e
      return r
    }
    wd(r, t)
    return r
  }(Td)
}
var Ad = function (e, t) {
  return (Ad = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var Id = function () {
  return (Id = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o]
      }
    }
    return e
  }).apply(this, arguments)
}
function jd() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e[t] = arguments[t]
  }
  return No.apply(undefined, ["scena-"].concat(e))
}
jd("ruler")
var Nd = jd("guide", "adder")
var Rd = jd("guides")
var kd = jd("guide")
var xd = jd("dragging")
var Dd = jd("display-drag")
var Md = Ro("scena-", "\n{\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\ncanvas {\n    position: relative;\n}\n.guide-origin {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    top: 0;\n    left: 0;\n    opacity: 0;\n}\n.guides {\n    position: absolute;\n    top: 0;\n    left: 0;\n    will-change: transform;\n    z-index: 2000;\n}\n.display-drag {\n    position: absolute;\n    will-change: transform;\n    z-index: 2000;\n    font-weight: bold;\n    font-size: 12px;\n    display: none;\n    left: 20px;\n    top: -20px;\n    color: #f33;\n}\n:host.horizontal .guides {\n    width: 100%;\n    height: 0;\n    top: 30px;\n}\n:host.vertical .guides {\n    height: 100%;\n    width: 0;\n    left: 30px;\n}\n.guide {\n    position: absolute;\n    background: #f33;\n    z-index: 2;\n}\n.guide.dragging:before {\n    position: absolute;\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n:host.horizontal .guide {\n    width: 100%;\n    height: 1px;\n    cursor: row-resize;\n}\n:host.vertical .guide {\n    width: 1px;\n    height: 100%;\n    cursor: col-resize;\n}\n.mobile :host.horizontal .guide {\n    transform: scale(1, 2);\n}\n.mobile :host.vertical .guide {\n    transform: scale(2, 1);\n}\n:host.horizontal .guide:before {\n    height: 20px;\n}\n:host.vertical .guide:before {\n    width: 20px;\n}\n.adder {\n    display: none;\n}\n.adder.dragging {\n    display: block;\n}\n");
["className", "rulerStyle", "snapThreshold", "snaps", "displayDragPos", "cspNonce", "dragPosFormat", "defaultGuides", "showGuides"].concat(yd)
var Ld = Sd("div", Md)
var Pd = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.state = {
      guides: []
    }
    t.scrollPos = 0
    t.guideElements = []
    t.onDragStart = function (e) {
      var /* [auto-meaningful-name] */e$datas = e.datas
      var /* [auto-meaningful-name] */e$inputEvent = e.inputEvent
      var /* [auto-meaningful-name] */t$props$onDragStart = t.props.onDragStart
      Ci(e$datas.target, xd)
      t.onDrag(e)
      t$props$onDragStart(Id({}, e, {
        dragElement: e$datas.target
      }))
      e$inputEvent.stopPropagation()
      e$inputEvent.preventDefault()
    }
    t.onDrag = function (e) {
      var n = t.movePos(e)
      t.props.onDrag(Id({}, e, {
        dragElement: e.datas.target
      }))
      return n
    }
    t.onDragEnd = function (e) {
      var /* [auto-meaningful-name] */e$datas = e.datas
      var /* [auto-meaningful-name] */e$isDouble = e.isDouble
      var /* [auto-meaningful-name] */e$distX = e.distX
      var /* [auto-meaningful-name] */e$distY = e.distY
      var a = t.movePos(e)
      var /* [auto-meaningful-name] */t$state$guides = t.state.guides
      var /* [auto-meaningful-name] */t$props = t.props
      var /* [auto-meaningful-name] */t$props$onChangeGuides = t$props.onChangeGuides
      var /* [auto-meaningful-name] */t$props$zoom = t$props.zoom
      var /* [auto-meaningful-name] */t$props$displayDragPos = t$props.displayDragPos
      var /* [auto-meaningful-name] */t$props$digit = t$props.digit
      var /* [auto-meaningful-name] */t$props$lockGuides = t$props.lockGuides
      var h = parseFloat((a / t$props$zoom).toFixed(t$props$digit || 0))
      if (t$props$displayDragPos) {
        t.displayElement.style.cssText += "display: none;"
      }
      Ti(e$datas.target, xd)
      t.props.onDragEnd(Id({}, e, {
        dragElement: e$datas.target
      }))
      if (e$datas.fromRuler) {
        if (a >= t.scrollPos && t$state$guides.indexOf(h) < 0) {
          t.setState({
            guides: t$state$guides.concat([h])
          }, function () {
            t$props$onChangeGuides({
              guides: t.state.guides,
              distX: e$distX,
              distY: e$distY,
              isAdd: true,
              isRemove: false,
              isChange: false
            })
          })
        }
      } else {
        var m = e$datas.target.getAttribute("data-index")
        var g = false
        var _ = false
        t$state$guides = t$state$guides.slice()
        if (e$isDouble || h < t.scrollPos) {
          if (t$props$lockGuides && (true === t$props$lockGuides || t$props$lockGuides.indexOf("remove") > -1)) {
            return
          }
          t$state$guides.splice(m, 1)
          g = true
        } else {
          if (t$state$guides.indexOf(h) > -1) {
            return
          }
          if (t$props$lockGuides && (true === t$props$lockGuides || t$props$lockGuides.indexOf("change") > -1)) {
            return
          }
          t$state$guides[m] = h
          _ = true
        }
        t.setState({
          guides: t$state$guides
        }, function () {
          var /* [auto-meaningful-name] */t$state$guides1 = t.state.guides
          t$props$onChangeGuides({
            distX: e$distX,
            distY: e$distY,
            guides: t$state$guides1,
            isAdd: false,
            isChange: _,
            isRemove: g
          })
        })
      }
    }
    return t
  }
  !function (e, t) {
    function n() {
      this.constructor = e
    }
    Ad(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  }(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.render = function () {
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$className = this$props.className
    var /* [auto-meaningful-name] */this$props$type = this$props.type
    var /* [auto-meaningful-name] */this$props$zoom = this$props.zoom
    var /* [auto-meaningful-name] */this$props$style = this$props.style
    var /* [auto-meaningful-name] */this$props$rulerStyle = this$props.rulerStyle
    var /* [auto-meaningful-name] */this$props$displayDragPos = this$props.displayDragPos
    var /* [auto-meaningful-name] */this$props$cspNonce = this$props.cspNonce
    var /* [auto-meaningful-name] */this$props$dragGuideStyle = this$props.dragGuideStyle
    var /* [auto-meaningful-name] */this$props$portalContainer = this$props.portalContainer
    var /* [auto-meaningful-name] */this$props1 = this.props
    var d = this.getTranslateName()
    var p = {}
    yd.forEach(function (e) {
      if ("style" !== e) {
        p[e] = this$props1[e]
      }
    })
    return createElement(Ld, {
      ref: ko(this, "manager"),
      cspNonce: this$props$cspNonce,
      className: jd("manager", this$props$type) + " " + this$props$className,
      portalContainer: this$props$portalContainer,
      style: this$props$style
    }, createElement("div", {
      className: jd("guide-origin"),
      ref: ko(this, "originElement")
    }), createElement(Ed, Id({
      ref: ko(this, "ruler"),
      style: this$props$rulerStyle
    }, p)), createElement("div", {
      className: Rd,
      ref: ko(this, "guidesElement"),
      style: {
        transform: d + "(" + -this.scrollPos * this$props$zoom + "px)"
      }
    }, this$props$displayDragPos && createElement("div", {
      className: Dd,
      ref: ko(this, "displayElement"),
      style: this$props$dragGuideStyle
    }), createElement("div", {
      className: Nd,
      ref: ko(this, "adderElement")
    }), this.renderGuides()))
  }
  t$prototype.renderGuides = function () {
    var e = this
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$type = this$props.type
    var /* [auto-meaningful-name] */this$props$zoom = this$props.zoom
    var /* [auto-meaningful-name] */this$props$showGuides = this$props.showGuides
    var /* [auto-meaningful-name] */this$props$guideStyle = this$props.guideStyle
    var a = this.getTranslateName()
    var /* [auto-meaningful-name] */this$state$guides = this.state.guides
    this.guideElements = []
    if (this$props$showGuides) {
      return this$state$guides.map(function (t, o) {
        return createElement("div", {
          className: jd("guide", this$props$type),
          ref: xo(e, "guideElements", o),
          key: o,
          "data-index": o,
          "data-pos": t,
          style: Id({}, this$props$guideStyle, {
            transform: a + "(" + t * this$props$zoom + "px) translateZ(0px)"
          })
        })
      })
    }
  }
  t$prototype.componentDidMount = function () {
    var e = this
    this.gesto = new Ba(this.manager.getElement(), {
      container: document.body
    }).on("dragStart", function (t) {
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$type = e$props.type
      var /* [auto-meaningful-name] */e$props$zoom = e$props.zoom
      var /* [auto-meaningful-name] */e$props$lockGuides = e$props.lockGuides
      if (true !== e$props$lockGuides) {
        var /* [auto-meaningful-name] */t$inputEvent$target = t.inputEvent.target
        var /* [auto-meaningful-name] */t$datas = t.datas
        var /* [auto-meaningful-name] */e$ruler$canvasElement = e.ruler.canvasElement
        var /* [auto-meaningful-name] */e$guidesElement = e.guidesElement
        var u = "horizontal" === e$props$type
        var d = e.originElement.getBoundingClientRect()
        var p = function (e, t) {
          if (undefined === t) {
            t = document.body
          }
          for (var n = e, r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; n;) {
            r = Ki($i(getComputedStyle(n).transform), r)
            if (n === t) {
              break
            }
            n = n.parentElement
          }
          (r = ki(r, 4))[12] = 0
          r[13] = 0
          r[14] = 0
          return r
        }(e.manager.getElement())
        var f = ea(p, [t.clientX - d.left, t.clientY - d.top])
        f[0] -= e$guidesElement.offsetLeft
        f[1] -= e$guidesElement.offsetTop
        f[u ? 1 : 0] += e.scrollPos * e$props$zoom
        t$datas.offsetPos = f
        t$datas.matrix = p
        var h
        var m
        var g = e$props$lockGuides && e$props$lockGuides.indexOf("add") > -1
        var _ = e$props$lockGuides && e$props$lockGuides.indexOf("remove") > -1
        var v = e$props$lockGuides && e$props$lockGuides.indexOf("change") > -1
        if (t$inputEvent$target === e$ruler$canvasElement) {
          if (g) {
            return void t.stop()
          }
          t$datas.fromRuler = true
          t$datas.target = e.adderElement
        } else {
          m = kd
          if (!((h = t$inputEvent$target).classList ? h.classList.contains(m) : h.className.match(new RegExp("(\\s|^)" + m + "(\\s|$)")))) {
            t.stop()
            return false
          }
          if (_ && v) {
            return void t.stop()
          }
          t$datas.target = t$inputEvent$target
        }
        e.onDragStart(t)
      } else {
        t.stop()
      }
    }).on("drag", this.onDrag).on("dragEnd", this.onDragEnd)
    this.setState({
      guides: this.props.defaultGuides || []
    })
  }
  t$prototype.componentWillUnmount = function () {
    this.gesto.unset()
  }
  t$prototype.componentDidUpdate = function (e) {
    if (e.defaultGuides !== this.props.defaultGuides) {
      this.setState({
        guides: this.props.defaultGuides || []
      })
    }
  }
  t$prototype.loadGuides = function (e) {
    this.setState({
      guides: e
    })
  }
  t$prototype.getGuides = function () {
    return this.state.guides
  }
  t$prototype.scrollGuides = function (e) {
    var /* [auto-meaningful-name] */this$props$zoom = this.props.zoom
    var /* [auto-meaningful-name] */this$guidesElement = this.guidesElement
    this.scrollPos = e
    this$guidesElement.style.transform = this.getTranslateName() + "(" + -e * this$props$zoom + "px)"
    var /* [auto-meaningful-name] */this$state$guides = this.state.guides
    this.guideElements.forEach(function (t, n) {
      if (t) {
        t.style.display = -e + this$state$guides[n] < 0 ? "none" : "block"
      }
    })
  }
  t$prototype.resize = function () {
    this.ruler.resize()
  }
  t$prototype.scroll = function (e) {
    this.ruler.scroll(e)
  }
  t$prototype.movePos = function (e) {
    var /* [auto-meaningful-name] */e$datas = e.datas
    var /* [auto-meaningful-name] */e$distX = e.distX
    var /* [auto-meaningful-name] */e$distY = e.distY
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$type = this$props.type
    var /* [auto-meaningful-name] */this$props$zoom = this$props.zoom
    var /* [auto-meaningful-name] */this$props$snaps = this$props.snaps
    var /* [auto-meaningful-name] */this$props$snapThreshold = this$props.snapThreshold
    var /* [auto-meaningful-name] */this$props$displayDragPos = this$props.displayDragPos
    var /* [auto-meaningful-name] */this$props$digit = this$props.digit
    var d = this$props.dragPosFormat || function (e) {
      return e
    }
    var p = "horizontal" === this$props$type
    var f = ea(e$datas.matrix, [e$distX, e$distY])
    var /* [auto-meaningful-name] */e$datas$offsetPos = e$datas.offsetPos
    var m = f[0] + e$datas$offsetPos[0]
    var g = f[1] + e$datas$offsetPos[1]
    var _ = Math.round(p ? g : m)
    var v = parseFloat((_ / this$props$zoom).toFixed(this$props$digit || 0))
    var b = this$props$snaps.slice().sort(function (e, t) {
      return Math.abs(v - e) - Math.abs(v - t)
    })
    if (b.length && Math.abs(b[0] * this$props$zoom - _) < this$props$snapThreshold) {
      _ = (v = b[0]) * this$props$zoom
    }
    if (this$props$displayDragPos) {
      var y = "horizontal" === this$props$type ? [m, _] : [_, g]
      this.displayElement.style.cssText += "display: block;transform: translate(-50%, -50%) translate(" + y.map(function (e) {
        return e + "px"
      }).join(", ") + ")"
      this.displayElement.innerHTML = "" + d(v)
    }
    e$datas.target.setAttribute("data-pos", v)
    e$datas.target.style.transform = this.getTranslateName() + "(" + _ + "px)"
    return _
  }
  t$prototype.getTranslateName = function () {
    return "horizontal" === this.props.type ? "translateY" : "translateX"
  }
  t.defaultProps = {
    className: "",
    type: "horizontal",
    zoom: 1,
    style: {},
    snapThreshold: 5,
    snaps: [],
    digit: 0,
    onChangeGuides: function () {},
    onDragStart: function () {},
    onDrag: function () {},
    onDragEnd: function () {},
    displayDragPos: false,
    dragPosFormat: function (e) {
      return e
    },
    defaultGuides: [],
    lockGuides: false,
    showGuides: true,
    guideStyle: {},
    dragGuideStyle: {},
    portalContainer: null
  }
  return t
}(PureComponent)
export { fd }
export { hd }
export { md }
export { gd }
export { _d }
export { Pd }
