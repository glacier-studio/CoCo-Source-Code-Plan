/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2751
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.findElPosition = r
exports.getPointerPosition = function (e, t) {
  var n = {}
  var a = r(e)
  var /* [auto-meaningful-name] */e$offsetWidth = e.offsetWidth
  var /* [auto-meaningful-name] */e$offsetHeight = e.offsetHeight
  var /* [auto-meaningful-name] */a$top = a.top
  var /* [auto-meaningful-name] */a$left = a.left
  var /* [auto-meaningful-name] */t$pageY = t.pageY
  var /* [auto-meaningful-name] */t$pageX = t.pageX
  if (t.changedTouches) {
    t$pageX = t.changedTouches[0].pageX
    t$pageY = t.changedTouches[0].pageY
  }
  n.y = Math.max(0, Math.min(1, (a$top - t$pageY + e$offsetHeight) / e$offsetHeight))
  n.x = Math.max(0, Math.min(1, (t$pageX - a$left) / e$offsetWidth))
  return n
}
exports.blurNode = function (e) {
  var t = (0, a.findDOMNode)(e)
  if (t && t.blur) {
    t.blur()
  }
}
exports.focusNode = function (e) {
  var t = (0, a.findDOMNode)(e)
  if (t && t.focus) {
    t.focus()
  }
}
exports.hasClass = function (e, t) {
  for (var n = e.className.split(" "), a = 0; a < n.length; a++) {
    if (n[a].toLowerCase() === t.toLowerCase()) {
      return true
    }
  }
  return false
}
var a = require(/* 80 */"react-dom")
function r(e) {
  var t
  if (e.getBoundingClientRect && e.parentNode) {
    t = e.getBoundingClientRect()
  }
  if (!t) {
    return {
      left: 0,
      top: 0
    }
  }
  var n = document
  var /* [auto-meaningful-name] */n$body = n.body
  var /* [auto-meaningful-name] */n$documentElement = n.documentElement
  var o = n$documentElement.clientLeft || n$body.clientLeft || 0
  var i = window.pageXOffset || n$body.scrollLeft
  var l = t.left + i - o
  var u = n$documentElement.clientTop || n$body.clientTop || 0
  var s = window.pageYOffset || n$body.scrollTop
  var d = t.top + s - u
  return {
    left: Math.round(l),
    top: Math.round(d)
  }
}
