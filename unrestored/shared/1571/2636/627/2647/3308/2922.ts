/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2922
 */

"use strict"

var a = require(/* 571 */"../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var r = a(require(/* 50 */"../../../50/index"))
var o = a(require(/* 0 */"react"))
var i = a(require(/* 8 */"classnames"))
var l = require(/* 2701 */"./2930/2701")
function u(e) {
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$mouseTime = e.mouseTime
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$text = e.text
  if (!e$mouseTime.time) {
    return null
  }
  var u = e$text || (0, l.formatTime)(e$mouseTime.time, e$duration)
  return o.default.createElement("div", {
    className: (0, i.default)("video-react-mouse-display", e$className),
    style: {
      left: "".concat(e$mouseTime.position, "px")
    },
    "data-current-time": u
  })
}
u.propTypes = {
  duration: r.default.number,
  mouseTime: r.default.object,
  className: r.default.string
}
u.displayName = "MouseTimeDisplay"
var s = u
exports.default = s
