/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2920
 */

"use strict"

var a = require(/* 571 */"../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = s
var r = a(require(/* 50 */"../../../50/index"))
var o = a(require(/* 0 */"react"))
var i = a(require(/* 8 */"classnames"))
var l = require(/* 2701 */"./2930/2701")
var u = {
  currentTime: r.default.number,
  duration: r.default.number,
  percentage: r.default.string,
  className: r.default.string
}
function s(e) {
  var /* [auto-meaningful-name] */e$currentTime = e.currentTime
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$percentage = e.percentage
  var /* [auto-meaningful-name] */e$className = e.className
  return o.default.createElement("div", {
    "data-current-time": (0, l.formatTime)(e$currentTime, e$duration),
    className: (0, i.default)("video-react-play-progress video-react-slider-bar", e$className),
    style: {
      width: e$percentage
    }
  }, o.default.createElement("span", {
    className: "video-react-control-text"
  }, "Progress: ".concat(e$percentage)))
}
s.propTypes = u
s.displayName = "PlayProgressBar"
