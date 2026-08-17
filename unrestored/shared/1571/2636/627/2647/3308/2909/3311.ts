/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3311
 */

"use strict"

var a = require(/* 571 */"../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : l
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case i.USER_ACTIVATE:
      return (0, r.default)({}, e, {
        userActivity: t.activity
      })
    case i.PLAYER_ACTIVATE:
      return (0, r.default)({}, e, {
        isActive: t.activity
      })
    case i.FULLSCREEN_CHANGE:
      return (0, r.default)({}, e, {
        isFullscreen: !!t.isFullscreen
      })
    case o.SEEKING_TIME:
      return (0, r.default)({}, e, {
        seekingTime: t.time
      })
    case o.END_SEEKING:
      return (0, r.default)({}, e, {
        seekingTime: 0
      })
    case o.LOAD_START:
      return (0, r.default)({}, e, t.videoProps, {
        hasStarted: false,
        ended: false
      })
    case o.CAN_PLAY:
      return (0, r.default)({}, e, t.videoProps, {
        waiting: false
      })
    case o.WAITING:
      return (0, r.default)({}, e, t.videoProps, {
        waiting: true
      })
    case o.CAN_PLAY_THROUGH:
    case o.PLAYING:
      return (0, r.default)({}, e, t.videoProps, {
        waiting: false
      })
    case o.PLAY:
      return (0, r.default)({}, e, t.videoProps, {
        ended: false,
        paused: false,
        autoPaused: false,
        waiting: false,
        hasStarted: true
      })
    case o.PAUSE:
      return (0, r.default)({}, e, t.videoProps, {
        paused: true
      })
    case o.END:
      return (0, r.default)({}, e, t.videoProps, {
        ended: true
      })
    case o.SEEKING:
      return (0, r.default)({}, e, t.videoProps, {
        seeking: true
      })
    case o.SEEKED:
      return (0, r.default)({}, e, t.videoProps, {
        seeking: false
      })
    case o.ERROR:
      return (0, r.default)({}, e, t.videoProps, {
        error: "UNKNOWN ERROR",
        ended: true
      })
    case o.DURATION_CHANGE:
    case o.TIME_UPDATE:
    case o.VOLUME_CHANGE:
    case o.PROGRESS_CHANGE:
    case o.RATE_CHANGE:
    case o.SUSPEND:
    case o.ABORT:
    case o.EMPTIED:
    case o.STALLED:
    case o.LOADED_META_DATA:
    case o.LOADED_DATA:
    case o.RESIZE:
      return (0, r.default)({}, e, t.videoProps)
    default:
      return e
  }
}
var r = a(require(/* 2708 */"../3309/2708"))
var o = require(/* 2780 */"../2780")
var i = require(/* 2750 */"../2750")
var l = {
  currentSrc: null,
  duration: 0,
  currentTime: 0,
  seekingTime: 0,
  buffered: null,
  waiting: false,
  seeking: false,
  paused: true,
  autoPaused: false,
  ended: false,
  playbackRate: 1,
  muted: false,
  volume: 1,
  readyState: 0,
  networkState: 0,
  videoWidth: 0,
  videoHeight: 0,
  hasStarted: false,
  userActivity: true,
  isActive: false,
  isFullscreen: false
}
