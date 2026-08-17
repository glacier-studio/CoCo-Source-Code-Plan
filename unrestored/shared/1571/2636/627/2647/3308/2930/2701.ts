/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2701
 */

"use strict"

var a = require(/* 571 */"../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.formatTime = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : e
  var n = Math.floor(e % 60)
  var a = Math.floor(e / 60 % 60)
  var r = Math.floor(e / 3600)
  var o = Math.floor(t / 60 % 60)
  var i = Math.floor(t / 3600)
  if (u(e) || e === 1 / 0) {
    r = "-"
    a = "-"
    n = "-"
  }
  r = r > 0 || i > 0 ? "".concat(r, ":") : ""
  a = "".concat((r || o >= 10) && a < 10 ? "0".concat(a) : a, ":")
  n = n < 10 ? "0".concat(n) : n
  return r + a + n
}
exports.isVideoChild = function (e) {
  if (e.props && e.props.isVideoChild) {
    return true
  }
  return "source" === e.type || "track" === e.type
}
exports.mergeAndSortChildren = function (e, t, n) {
  var a = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 1
  var r = l.default.Children.toArray(t)
  n.order
  var u = (0, i.default)(n, ["order"])
  return r.filter(function (e) {
    return !e.props.disabled
  }).concat(e.filter(function (e) {
    return !s(r, function (t) {
      return d(t, e)
    })
  })).map(function (t) {
    var n = s(e, function (e) {
      return d(e, t)
    })
    var a = n ? n.props : {}
    var r = (0, o.default)({}, u, a, t.props)
    return l.default.cloneElement(t, r, t.props.children)
  }).sort(function (e, t) {
    return (e.props.order || a) - (t.props.order || a)
  })
}
exports.deprecatedWarning = function (e, t) {
  console.warn("WARNING: ".concat(e, " will be deprecated soon! Please use ").concat(t, " instead."))
}
exports.throttle = function (e, t) {
  var n = arguments
  var a = false
  return function () {
    if (!a) {
      e.apply(undefined, (0, r.default)(n))
      a = true
      setTimeout(function () {
        a = false
      }, t)
    }
  }
}
exports.mediaProperties = undefined
var r = a(require(/* 1552 */"../../../../13/780/1286/1552/index"))
var o = a(require(/* 2708 */"../3309/2708"))
var i = a(require(/* 1216 */"../../../../13/780/1794/1216/index"))
var l = a(require(/* 0 */"react"))
var u = Number.isNaN || function (e) {
  return e !== e
}
var s = function (e, t) {
  return e.filter(t)[0]
}
var d = function (e, t) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */t$type = t.type
  return "string" === typeof e$type || "string" === typeof t$type ? e$type === t$type : "function" === typeof e$type && "function" === typeof t$type && e$type.displayName === t$type.displayName
}
exports.mediaProperties = ["error", "src", "srcObject", "currentSrc", "crossOrigin", "networkState", "preload", "buffered", "readyState", "seeking", "currentTime", "duration", "paused", "defaultPlaybackRate", "playbackRate", "played", "seekable", "ended", "autoplay", "loop", "mediaGroup", "controller", "controls", "volume", "muted", "defaultMuted", "audioTracks", "videoTracks", "textTracks", "width", "height", "videoWidth", "videoHeight", "poster"]
