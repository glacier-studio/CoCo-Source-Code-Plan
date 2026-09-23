/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1347
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ElementDragger = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 258 */"@kitten-team/gl-matrix")
var o = require(/* 125 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 195 */"../../../123/195/index")
var s = function () {
  function e(e, t) {
    this.parent_before_drag = undefined
    this._delete_area = a.DeleteArea.DELETE_AREA_NONE
    this._would_delete_block = false
    this._was_outside = false
    this._was_workspace = true
    this.redo_stack_before_drag = []
    this.undo_stack_before_drag = []
    this._dragging_block = e
    this._workspace = t
    this._start_xy = e.get_relative_to_surface_xy()
  }
  e.prototype.update_cursor_during_block_drag = function (e) {
    if (undefined != this._workspace && undefined != this._dragging_block) {
      if (this._dragging_block.is_deletable()) {
        this._would_delete_block = this._delete_area === a.DeleteArea.DELETE_AREA_TOOLBOX
        this._dragging_block.set_delete_style(this._would_delete_block)
        this._dragging_block.set_mouse_through_style(e)
      }
    } else {
      console.error("Block dragger has been disposed.")
    }
  }
  e.prototype.start_block_drag = function (e) {
    if (undefined == this._workspace || undefined == this._dragging_block) {
      throw new Error("Block dragger has been disposed.")
    }
    if (!(this.redo_stack_before_drag || this.undo_stack_before_drag)) {
      this.redo_stack_before_drag = this._workspace.get_redo_stack().slice()
      this.undo_stack_before_drag = this._workspace.get_undo_stack().slice()
    }
    if (!this.events.get_group()) {
      this.events.set_group(true)
    }
    this._workspace.set_resizes_enabled(false)
    this.tooltip.hide()
    var t = this.pixels_to_workspace_units(e)
    var n = i.vec2.create()
    i.vec2.add(n, this._start_xy, t)
    this._dragging_block.translate(n)
    this._dragging_block.set_dragging(true)
    this._dragging_block.bring_to_front()
    this._dragging_block.move_to_drag_surface()
    if (this._dragging_block.is_deletable()) {
      var r = this._workspace.get_toolbox()
      if (undefined != r) {
        r.add_delete_style()
      }
    }
    if (this.events.is_enabled()) {
      var /* [auto-meaningful-name] */this$_workspace$current_gesture_ = this._workspace.current_gesture_
      this.events.fire(this.start_drag_event_factory({
        block: this._dragging_block,
        is_from_flyout: (null === this$_workspace$current_gesture_ || undefined === this$_workspace$current_gesture_ ? undefined : this$_workspace$current_gesture_.is_start_from_flyout()) || false
      }))
    }
  }
  e.prototype.drag_block = function (e, t) {
    if (undefined == this._workspace || undefined == this._dragging_block) {
      throw new Error("Block dragger has been disposed.")
    }
    var n = this.pixels_to_workspace_units(t)
    var r = i.vec2.create()
    i.vec2.add(r, this._start_xy, n)
    this._dragging_block.move_during_drag(r)
    this.drag_related(n)
    this.handle_dragging_around_delete_area(e)
    this.handle_dragging_around_blocks_area(e)
    this.handle_dragging_around_workspace(e)
    return n
  }
  e.prototype.handle_dragging_around_delete_area = function (e) {
    if (undefined == this._workspace || undefined == this._dragging_block) {
      throw new Error("Block dragger has been disposed.")
    }
    var t
    var n = this._workspace.is_delete_area(e)
    if (!!n !== !!this._delete_area && this.events.is_enabled()) {
      t = this.drag_area_change_event_factory({
        block: this._dragging_block,
        area: a.DragArea.DELETE_AREA,
        is_in: !!n
      })
    }
    this._delete_area = n
    this.events.fire(t)
  }
  e.prototype.handle_dragging_around_blocks_area = function (e) {
    if (undefined == this._workspace || undefined == this._dragging_block) {
      throw new Error("Block dragger has been disposed.")
    }
    var t
    var n = !this._workspace.is_inside_blocks_area(e)
    if (n !== this._was_outside) {
      if (this.events.is_enabled()) {
        t = this.drag_area_change_event_factory({
          block: this._dragging_block,
          area: a.DragArea.INJECTION_DIV,
          is_in: !n
        })
      }
      this._was_outside = n
    }
    this.update_cursor_during_block_drag(n)
    this.events.fire(t)
  }
  e.prototype.handle_dragging_around_workspace = function (e) {
    if (undefined == this._workspace || undefined == this._dragging_block) {
      throw new Error("Block dragger has been disposed.")
    }
    var t
    var n = this._workspace.is_inside_workspace_area(e)
    if (n !== this._was_workspace) {
      if (this.events.is_enabled()) {
        t = this.drag_area_change_event_factory({
          block: this._dragging_block,
          area: a.DragArea.WORKSPACE,
          is_in: n
        })
      }
      this._was_workspace = n
    }
    this.events.fire(t)
  }
  e.prototype.maybe_delete_block = function () {
    if (undefined == this._workspace || undefined == this._dragging_block) {
      throw new Error("Block dragger has been disposed.")
    }
    if (!this._dragging_block.is_deletable()) {
      return false
    }
    if (this._would_delete_block) {
      if (this.events.is_enabled()) {
        var e = this.move_event_factory({
          block: this._dragging_block
        })
        e.set_old_coord(this._start_xy)
        e.record_new()
        this.events.fire(e)
      }
      this._dragging_block.dispose(false, true)
    }
    return this._would_delete_block
  }
  e.prototype.pixels_to_workspace_units = function (e) {
    var t = i.vec2.create()
    if (undefined == this._workspace) {
      console.error("Block dragger has been disposed.")
      return i.vec2.create()
    }
    var n = this._workspace.get_scale()
    i.vec2.scale(t, e, 1 / n)
    return t
  }
  e.prototype.dispose = function () {
    this._dragging_block = undefined
    this._workspace = undefined
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.block_animations)], e.prototype, "block_animations", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.tooltip)], e.prototype, "tooltip", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.DragAreaChangeEvent)], e.prototype, "drag_area_change_event_factory", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.EndDragEvent)], e.prototype, "end_drag_event_factory", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.MoveEvent)], e.prototype, "move_event_factory", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.StartDragEvent)], e.prototype, "start_drag_event_factory", undefined)
  return e
}()
exports.ElementDragger = s
