/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2750
 */

"use strict"

var a = require(/* 571 */"../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.handleFullscreenChange = function (e) {
  return {
    type: "video-react/FULLSCREEN_CHANGE",
    isFullscreen: e
  }
}
exports.activate = function (e) {
  return {
    type: "video-react/PLAYER_ACTIVATE",
    activity: e
  }
}
exports.userActivate = function (e) {
  return {
    type: "video-react/USER_ACTIVATE",
    activity: e
  }
}
exports.play = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {
    action: "play",
    source: ""
  }
  this.video.play()
  return {
    type: VideoReact_OPERATE,
    operation: e
  }
}
exports.pause = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {
    action: "pause",
    source: ""
  }
  this.video.pause()
  return {
    type: VideoReact_OPERATE,
    operation: e
  }
}
exports.togglePlay = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {
    action: "toggle-play",
    source: ""
  }
  this.video.togglePlay()
  return {
    type: VideoReact_OPERATE,
    operation: e
  }
}
exports.seek = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    action: "seek",
    source: ""
  }
  this.video.seek(e)
  return {
    type: VideoReact_OPERATE,
    operation: t
  }
}
exports.forward = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    action: "forward-".concat(e),
    source: ""
  }
  this.video.forward(e)
  return {
    type: VideoReact_OPERATE,
    operation: t
  }
}
exports.replay = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    action: "replay-".concat(e),
    source: ""
  }
  this.video.replay(e)
  return {
    type: VideoReact_OPERATE,
    operation: t
  }
}
exports.changeRate = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    action: "change-rate",
    source: ""
  }
  this.video.playbackRate = e
  return {
    type: VideoReact_OPERATE,
    operation: t
  }
}
exports.changeVolume = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    action: "change-volume",
    source: ""
  }
  var n = e
  if (e < 0) {
    n = 0
  }
  if (e > 1) {
    n = 1
  }
  this.video.volume = n
  return {
    type: VideoReact_OPERATE,
    operation: t
  }
}
exports.mute = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    action: e ? "muted" : "unmuted",
    source: ""
  }
  this.video.muted = e
  return {
    type: VideoReact_OPERATE,
    operation: t
  }
}
exports.toggleFullscreen = function (e) {
  if (r.default.enabled) {
    if (r.default.isFullscreen) {
      r.default.exit()
    } else {
      r.default.request(this.rootElement)
    }
    return {
      type: VideoReact_OPERATE,
      operation: {
        action: "toggle-fullscreen",
        source: ""
      }
    }
  }
  return {
    type: "video-react/FULLSCREEN_CHANGE",
    isFullscreen: !e.isFullscreen
  }
}
exports.USER_ACTIVATE = exports.PLAYER_ACTIVATE = exports.FULLSCREEN_CHANGE = exports.OPERATE = undefined
var r = a(require(/* 2910 */"./3309/2910"))
var /* [auto-meaningful-name] */VideoReact_OPERATE = "video-react/OPERATE"
exports.OPERATE = VideoReact_OPERATE
exports.FULLSCREEN_CHANGE = "video-react/FULLSCREEN_CHANGE"
exports.PLAYER_ACTIVATE = "video-react/PLAYER_ACTIVATE"
exports.USER_ACTIVATE = "video-react/USER_ACTIVATE"
