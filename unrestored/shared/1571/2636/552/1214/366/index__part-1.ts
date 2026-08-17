/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：366__part-1
 */

"use strict"

var r
import { createElement, Component } from /* 0 */"react"
import /* 50 */"../../../50/index"
import * as /* [auto-meaningful-name] */Module_98 from /* 98 */"../../../551/1211/98"
import * as /* [auto-meaningful-name] */Module_1550 from /* 1550 */"./1550"
import * as /* [auto-meaningful-name] */Module_154 from /* 154 */"../../../551/1211/699/154/index"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../../../103"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../../../106"
import * as /* [auto-meaningful-name] */Module_388 from /* 388 */"../../../388"
import * as /* [auto-meaningful-name] */Module_362 from /* 362 */"../../../362"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../../../120"
!function (e) {
  e.HOURS = "hours"
  e.MINUTES = "minutes"
  e.SECONDS = "seconds"
}(r || (r = {}))
var h = r
var p = function (e) {
  function t() {
    var e
    var n
    Module_103.a(this, t)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      i[o] = arguments[o]
    }
    (n = Module_388.a(this, (e = Module_362.a(t)).call.apply(e, [this].concat(i)))).state = {
      toAnimateTransform: false,
      previousType: undefined
    }
    n.getAngleStyle = function () {
      var /* [auto-meaningful-name] */n$props = n.props
      var /* [auto-meaningful-name] */n$props$value = n$props.value
      var /* [auto-meaningful-name] */n$props$isInner = n$props.isInner
      var /* [auto-meaningful-name] */n$props$type = n$props.type
      var o = 360 / (n$props$type === h.HOURS ? 12 : 60) * n$props$value
      if (n$props$type === h.HOURS && n$props$value > 12) {
        o -= 360
      }
      return {
        height: n$props$isInner ? "26%" : "40%",
        transform: "rotateZ(".concat(o, "deg)")
      }
    }
    return n
  }
  Module_120.a(t, e)
  Module_106.a(t, [
    {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$classes = this$props.classes
        var /* [auto-meaningful-name] */this$props$hasSelected = this$props.hasSelected
        return createElement("div", {
          style: this.getAngleStyle(),
          className: Module_98.a(this$props$classes.pointer, this.state.toAnimateTransform && this$props$classes.animateTransform)
        }, createElement("div", {
          className: Module_98.a(this$props$classes.thumb, this$props$hasSelected && this$props$classes.noPoint)
        }))
      }
    }
  ])
  return t
}(Component)
p.getDerivedStateFromProps = function (e, t) {
  return e.type !== t.previousType ? {
    toAnimateTransform: true,
    previousType: e.type
  } : {
    toAnimateTransform: false,
    previousType: e.type
  }
}
var _ = Module_154.a(function (e) {
  return Module_1550.a({
    pointer: {
      width: 2,
      backgroundColor: e.palette.primary.main,
      position: "absolute",
      left: "calc(50% - 1px)",
      bottom: "50%",
      transformOrigin: "center bottom 0px"
    },
    animateTransform: {
      transition: e.transitions.create(["transform", "height"])
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: e.palette.primary.contrastText,
      borderRadius: "100%",
      position: "absolute",
      top: -21,
      left: -15,
      border: "14px solid ".concat(e.palette.primary.main),
      boxSizing: "content-box"
    },
    noPoint: {
      backgroundColor: e.palette.primary.main
    }
  })
}, {
  name: "MuiPickersClockPointer"
})(p)
var A = {
  x: 130,
  y: 130
}
var g = A.x - A.x
var v = 0 - A.y
var m = function (e, t, n) {
  var r = t - A.x
  var i = n - A.y
  var o = Math.atan2(g, v) - Math.atan2(r, i)
  var a = 57.29577951308232 * o
  a = Math.round(a / e) * e
  a %= 360
  var s = Math.floor(a / e) || 0
  var c = Math.pow(r, 2) + Math.pow(i, 2)
  return {
    value: s,
    distance: Math.sqrt(c)
  }
}
var y = function (e, t, n) {
  var r = m(30, e, t)
  var /* [auto-meaningful-name] */r$value = r.value
  var /* [auto-meaningful-name] */r$distance = r.distance
  r$value = r$value || 12
  if (n) {
    r$value %= 12
  } else {
    if (r$distance < 90) {
      r$value += 12
      r$value %= 24
    }
  }
  return r$value
}
var b = function (e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 1
  var r = 6 * n
  var i = m(r, e, t)
  var /* [auto-meaningful-name] */i$value = i.value
  return i$value = i$value * n % 60
}
var w = function (e, t) {
  return t.getHours(e) >= 12 ? "pm" : "am"
}
var E = function (e, t, n, r) {
  if (n && (r.getHours(e) >= 12 ? "pm" : "am") !== t) {
    var i = "am" === t ? r.getHours(e) - 12 : r.getHours(e) + 12
    return r.setHours(e, i)
  }
  return e
}
var x = function (e) {
  function t() {
    var e
    var n
    Module_103.a(this, t)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      i[o] = arguments[o]
    }
    (n = Module_388.a(this, (e = Module_362.a(t)).call.apply(e, [this].concat(i)))).isMoving = false
    n.handleTouchMove = function (e) {
      n.isMoving = true
      n.setTime(e)
    }
    n.handleTouchEnd = function (e) {
      if (n.isMoving) {
        n.setTime(e, true)
        n.isMoving = false
      }
    }
    n.handleMove = function (e) {
      e.preventDefault()
      e.stopPropagation()
      if ("undefined" === typeof e.buttons ? 1 === e.nativeEvent.which : 1 === e.buttons) {
        n.setTime(e.nativeEvent, false)
      }
    }
    n.handleMouseUp = function (e) {
      if (n.isMoving) {
        n.isMoving = false
      }
      n.setTime(e.nativeEvent, true)
    }
    n.hasSelected = function () {
      var /* [auto-meaningful-name] */n$props = n.props
      var /* [auto-meaningful-name] */n$props$type = n$props.type
      var /* [auto-meaningful-name] */n$props$value = n$props.value
      return n$props$type === h.HOURS || n$props$value % 5 === 0
    }
    return n
  }
  Module_120.a(t, e)
  Module_106.a(t, [
    {
      key: "setTime",
      value: function (e) {
        var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
        var /* [auto-meaningful-name] */e$offsetX = e.offsetX
        var /* [auto-meaningful-name] */e$offsetY = e.offsetY
        if ("undefined" === typeof e$offsetX) {
          var i = e.target.getBoundingClientRect()
          e$offsetX = e.changedTouches[0].clientX - i.left
          e$offsetY = e.changedTouches[0].clientY - i.top
        }
        var o = this.props.type === h.SECONDS || this.props.type === h.MINUTES ? b(e$offsetX, e$offsetY, this.props.minutesStep) : y(e$offsetX, e$offsetY, Boolean(this.props.ampm))
        this.props.onChange(o, t)
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$classes = this$props.classes
        var /* [auto-meaningful-name] */this$props$value = this$props.value
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$type = this$props.type
        var a = !this$props.ampm && this$props$type === h.HOURS && (this$props$value < 1 || this$props$value > 12)
        return createElement("div", {
          className: this$props$classes.container
        }, createElement("div", {
          className: this$props$classes.clock
        }, createElement("div", {
          role: "menu",
          tabIndex: -1,
          className: this$props$classes.squareMask,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd,
          onMouseUp: this.handleMouseUp,
          onMouseMove: this.handleMove
        }), createElement("div", {
          className: this$props$classes.pin
        }), createElement(_, {
          type: this$props$type,
          value: this$props$value,
          isInner: a,
          hasSelected: this.hasSelected()
        }), this$props$children))
      }
    }
  ])
  return t
}(Component)
x.defaultProps = {
  ampm: false,
  minutesStep: 1
}
var C = Module_154.a(function (e) {
  return Module_1550.a({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      margin: "".concat(e.spacing(2), "px 0 ").concat(e.spacing(1), "px")
    },
    clock: {
      backgroundColor: "rgba(0,0,0,.07)",
      borderRadius: "50%",
      height: 260,
      width: 260,
      position: "relative",
      pointerEvents: "none"
    },
    squareMask: {
      width: "100%",
      height: "100%",
      position: "absolute",
      pointerEvents: "auto",
      outline: "none",
      touchActions: "none",
      userSelect: "none",
      "&:active": {
        cursor: "move"
      }
    },
    pin: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: e.palette.primary.main,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  })
}, {
  name: "MuiPickersClock"
})(x)
export { h }
export { w }
export { E }
export { C }
