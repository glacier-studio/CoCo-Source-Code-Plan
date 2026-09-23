/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2180
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.TouchManager = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 214 */"../../1022/214")
var s = function () {
  function e() {
    this._touch_identifier = undefined
    this.TOUCH_MAP = a.BrowserFeature.TOUCH_ENABLED ? {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"]
    } : {}
    this._long_pid = 0
    this.is_touch_event = function (e) {
      return e.type.startsWith("touch")
    }
  }
  e.prototype.long_start = function (e, t) {
    this.long_stop()
    if (1 == e.changedTouches.length) {
      this._long_pid = window.setTimeout(function () {
        var n = e
        n.button = 2
        n.clientX = e.changedTouches[0].clientX
        n.clientY = e.changedTouches[0].clientY
        if (t) {
          t.handle_right_click(n)
        }
      }, this.theme.blink_params.LONGPRESS)
    }
  }
  e.prototype.long_stop = function () {
    if (this._long_pid) {
      clearTimeout(this._long_pid)
      this._long_pid = 0
    }
  }
  e.prototype.clear_touch_identifier = function () {
    this._touch_identifier = undefined
  }
  e.prototype.should_handle_event = function (e) {
    return !this.is_mouse_or_touch_event(e) || this.check_touch_identifier(e)
  }
  e.prototype.get_touch_identifier_from_event = function (e) {
    var t = this.is_touch_event(e) && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].identifier
    return t || "mouse"
  }
  e.prototype.check_touch_identifier = function (e) {
    var t = this.get_touch_identifier_from_event(e)
    return undefined != this._touch_identifier ? this._touch_identifier == t : ("mousedown" == e.type || "touchstart" == e.type) && (this._touch_identifier = t, true)
  }
  e.prototype.set_client_from_touch = function (e) {
    if (this.is_touch_event(e)) {
      var t = e.changedTouches[0]
      e.clientX = t.clientX
      e.clientY = t.clientY
    }
  }
  e.prototype.is_mouse_or_touch_event = function (e) {
    return e.type.startsWith("touch") || e.type.startsWith("mouse")
  }
  e.prototype.split_event_by_touches = function (e) {
    var t = []
    if (this.is_touch_event(e)) {
      for (var n = 0; n < e.changedTouches.length; n++) {
        var r = Object.assign({}, e, {
          type: e.type,
          changedTouches: [e.changedTouches[n]],
          target: e.target,
          stopPropagation: function () {
            e.stopPropagation()
          },
          preventDefault: function () {
            if (0 != e.cancelable) {
              e.preventDefault()
            }
          }
        })
        t[n] = r
      }
    } else {
      t.push(e)
    }
    return t
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], e.prototype, "theme", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.TouchManager = s
