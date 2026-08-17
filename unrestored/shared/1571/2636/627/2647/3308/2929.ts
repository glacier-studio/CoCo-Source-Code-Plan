/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2929
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
var u = {
  player: r.default.object,
  className: r.default.string
}
function s(e) {
  var /* [auto-meaningful-name] */e$player = e.player
  var /* [auto-meaningful-name] */e$player$currentTime = e$player.currentTime
  var /* [auto-meaningful-name] */e$player$duration = e$player.duration
  var /* [auto-meaningful-name] */e$className = e.className
  var u = (0, l.formatTime)(e$player$currentTime, e$player$duration)
  return o.default.createElement("div", {
    className: (0, i.default)("video-react-current-time video-react-time-control video-react-control", e$className)
  }, o.default.createElement("div", {
    className: "video-react-current-time-display",
    "aria-live": "off"
  }, o.default.createElement("span", {
    className: "video-react-control-text"
  }, "Current Time "), u))
}
s.propTypes = u
s.displayName = "CurrentTimeDisplay"
var d = s
exports.default = d
