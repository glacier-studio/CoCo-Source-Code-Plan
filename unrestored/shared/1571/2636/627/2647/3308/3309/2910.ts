/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2910
 */

"use strict"

var a = require(/* 571 */"../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var r = a(require(/* 1066 */"../../../../13/780/1066"))
var o = a(require(/* 1067 */"../../../../13/780/1067"))
var i = new (function () {
  function e() {
    (0, r.default)(this, e)
  }
  (0, o.default)(e, [
    {
      key: "request",
      value: function (e) {
        if (e.requestFullscreen) {
          e.requestFullscreen()
        } else {
          if (e.webkitRequestFullscreen) {
            e.webkitRequestFullscreen()
          } else {
            if (e.mozRequestFullScreen) {
              e.mozRequestFullScreen()
            } else {
              if (e.msRequestFullscreen) {
                e.msRequestFullscreen()
              }
            }
          }
        }
      }
    }, {
      key: "exit",
      value: function () {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else {
          if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
          } else {
            if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen()
            } else {
              if (document.msExitFullscreen) {
                document.msExitFullscreen()
              }
            }
          }
        }
      }
    }, {
      key: "addEventListener",
      value: function (e) {
        document.addEventListener("fullscreenchange", e)
        document.addEventListener("webkitfullscreenchange", e)
        document.addEventListener("mozfullscreenchange", e)
        document.addEventListener("MSFullscreenChange", e)
      }
    }, {
      key: "removeEventListener",
      value: function (e) {
        document.removeEventListener("fullscreenchange", e)
        document.removeEventListener("webkitfullscreenchange", e)
        document.removeEventListener("mozfullscreenchange", e)
        document.removeEventListener("MSFullscreenChange", e)
      }
    }, {
      key: "isFullscreen",
      get: function () {
        return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
      }
    }, {
      key: "enabled",
      get: function () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled
      }
    }
  ])
  return e
}())()
exports.default = i
