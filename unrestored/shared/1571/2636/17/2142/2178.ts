/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2178
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.RuntimeData = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = (0, r.__importStar)(require(/* 562 */"hammerjs"))
var a = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var s = require(/* 123 */"../../123/index")
var c = function () {
  function e() {
    var e = this
    this.selected = undefined
    this.editing = undefined
    this.pasting_count = 0
    this.dragging_connections = []
    this.hide_chaff_effects = []
    this.document_events_bound = false
    this.before_scale = 1
    this.pinch_listener = function (t) {
      var /* [auto-meaningful-name] */e$workspace_db$current = e.workspace_db.current
      if (e$workspace_db$current.current_gesture_) {
        e$workspace_db$current.current_gesture_.cancel()
      }
      var /* [auto-meaningful-name] */t$scale = t.scale
      if (t$scale - e.before_scale > .08) {
        e$workspace_db$current.mark_focused()
        e$workspace_db$current.zoom_center(.5)
        e.before_scale = t$scale
      } else {
        if (t$scale - e.before_scale < -.08) {
          e$workspace_db$current.mark_focused()
          e$workspace_db$current.zoom_center(-.5)
          e.before_scale = t$scale
        }
      }
    }
    this.pinchend_listener = function () {
      e.before_scale = 1
    }
    this.clipboard = new u()
  }
  e.prototype.set_pasting = function (e) {
    if (e) {
      this.pasting_count++
    } else {
      this.pasting_count--
    }
  }
  e.prototype.is_pasting = function () {
    return this.pasting_count
  }
  e.prototype.register_finger_events = function () {
    if (!this.hammer_manager) {
      var e = document.querySelector(".blocklySvg")
      this.hammer_manager = new o.Manager(e)
    }
    if (!this.pinch_recognizer) {
      this.pinch_recognizer = new o.Pinch()
    }
    this.hammer_manager.add(this.pinch_recognizer)
    this.hammer_manager.on("pinch", this.pinch_listener)
    this.hammer_manager.on("pinchend", this.pinchend_listener)
  }
  e.prototype.unregister_finger_events = function () {
    var /* [auto-meaningful-name] */this$hammer_manager
    var /* [auto-meaningful-name] */this$hammer_manager1
    var /* [auto-meaningful-name] */this$hammer_manager2
    if (this.pinch_recognizer) {
      if (!(null === (this$hammer_manager = this.hammer_manager) || undefined === this$hammer_manager)) {
        this$hammer_manager.remove(this.pinch_recognizer)
      }
    }
    if (!(null === (this$hammer_manager1 = this.hammer_manager) || undefined === this$hammer_manager1)) {
      this$hammer_manager1.off("pinch", this.pinch_listener)
    }
    if (!(null === (this$hammer_manager2 = this.hammer_manager) || undefined === this$hammer_manager2)) {
      this$hammer_manager2.off("pinchend", this.pinchend_listener)
    }
  }
  e.prototype.cancel_gesture_when_multi_touch = function () {
    var /* [auto-meaningful-name] */this$workspace_db$current
    var t = this
    if (!(null === (this$workspace_db$current = this.workspace_db.current) || undefined === this$workspace_db$current)) {
      this$workspace_db$current.get_parent_svg().addEventListener("touchmove", function (e) {
        var /* [auto-meaningful-name] */t$workspace_db$current = t.workspace_db.current
        if (e.touches.length > 1 && t$workspace_db$current.current_gesture_) {
          t$workspace_db$current.current_gesture_.cancel()
        }
      })
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.workspace_db)], e.prototype, "workspace_db", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.RuntimeData = c
var u = function () {
  function e() {}
  e.prototype.get_content = function () {
    if (this.content) {
      return Array.isArray(this.content) ? this.content.map(function (e) {
        return (0, s.clone_node)(e, true)
      }) : (0, s.clone_node)(this.content, true)
    }
  }
  e.prototype.copy = function (e) {
    var t = this.xml.workspace_element_to_dom_with_xy(e)
    this.content = t
    return t
  }
  e.prototype.copy_all = function (e) {
    var t = this
    var n = e.map(function (e) {
      return t.xml.workspace_element_to_dom_with_xy(e)
    })
    this.content = n
    return n
  }
  e.prototype.duplicate = function (e) {
    var t = this.copy(e)
    e.get_workspace().paste((0, s.clone_node)(t, true))
    return t
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.xml)], e.prototype, "xml", undefined)
  return e
}()
