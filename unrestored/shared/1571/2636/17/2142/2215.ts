/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2215
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ScrollbarPair = exports.Scrollbar = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 258 */"@kitten-team/gl-matrix")
var a = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var s = require(/* 195 */"../../123/195/index")
var c = require(/* 123 */"../../123/index")
var u = function () {
  function e(e, n, r, i, a) {
    if (undefined === r) {
      r = false
    }
    if (undefined === i) {
      i = ""
    }
    if (undefined === a) {
      a = true
    }
    this.origin_ = o.vec2.create()
    this.size_ratio_ = 0
    this.start_drag_handle = 0
    this.handle_position_ = 0
    this.start_drag_mouse = 0
    this.handle_length_ = 0
    this.scroll_view_size_ = 0
    this.scroll_content_size_ = 0
    this.container_visible_ = true
    this.is_visible_ = true
    this.workspace_ = e
    this.pair_ = r || false
    this.horizontal_ = n
    this.old_host_metrics_ = undefined
    var s = "blocklyScrollbar" + (this.horizontal_ ? "Horizontal" : "Vertical")
    if (i) {
      s += " " + i
    }
    this.outer_svg_ = (0, c.create_svg_element)("svg", {
      class: s
    })
    this.svg_group = (0, c.create_svg_element)("g", {}, this.outer_svg_)
    this.svg_background_ = (0, c.create_svg_element)("rect", {
      class: "blocklyScrollbarBackground"
    }, this.svg_group)
    var u = Math.floor((t.scrollbar_thickness - 5) / 2)
    this.svg_handle_ = (0, c.create_svg_element)("rect", {
      class: "blocklyScrollbarHandle",
      rx: u,
      ry: u
    }, this.svg_group)
    if (n) {
      this.svg_background_.setAttribute("height", t.scrollbar_thickness.toString())
      this.outer_svg_.setAttribute("height", t.scrollbar_thickness.toString())
      this.svg_handle_.setAttribute("height", (t.scrollbar_thickness - 9).toString())
      this.svg_handle_.setAttribute("y", "5")
      this.length_attribute_ = "width"
      this.position_attribute_ = "x"
    } else {
      this.svg_background_.setAttribute("width", t.scrollbar_thickness.toString())
      this.outer_svg_.setAttribute("width", t.scrollbar_thickness.toString())
      this.svg_handle_.setAttribute("width", (t.scrollbar_thickness - 9).toString())
      this.svg_handle_.setAttribute("x", "5")
      this.length_attribute_ = "height"
      this.position_attribute_ = "y"
    }
    (0, c.insert_after)(this.outer_svg_, this.workspace_.get_parent_svg())
    this.on_mouse_down_bar_wrapper_ = this.events.bind_event_with_checks(this.svg_background_, "mousedown", this, this.on_mouse_down_bar)
    this.on_mouse_down_handle_wrapper_ = this.events.bind_event_with_checks(this.svg_handle_, "mousedown", this, this.on_mousedown_handle)
    this.position_ = o.vec2.fromValues(0, 0)
    this.opt_visible = a
    if (!a) {
      this.update_display()
    }
  }
  var t
  t = e
  e.prototype.resize_view = function (e) {
    var n = this.horizontal_ ? e.viewWidth - 1 : e.viewHeight - 1
    if (this.pair_) {
      n -= t.scrollbar_thickness
    }
    this.set_scroll_view_size(Math.max(0, n))
    var r = e.absoluteLeft + .5
    var i = e.absoluteTop + .5
    if (this.horizontal_) {
      i += e.viewHeight - t.scrollbar_thickness - 1
    } else {
      r += e.viewWidth - t.scrollbar_thickness - 1
    }
    this.set_position(r, i)
    this.resize_content(e)
  }
  e.prototype.resize_content = function (e) {
    var /* [auto-meaningful-name] */this$workspace_
    this.scroll_content_size_ = this.horizontal_ ? e.contentWidth : e.contentHeight
    if (!this.pair_) {
      this.set_visible(this.scroll_view_size_ < this.scroll_content_size_)
    }
    this.size_ratio_ = this.scroll_view_size_ / this.scroll_content_size_
    if (this.size_ratio_ == -1 / 0 || this.size_ratio_ == 1 / 0 || isNaN(this.size_ratio_)) {
      this.size_ratio_ = 0
    }
    var n = this.scroll_view_size_ * this.size_ratio_
    this.set_handle_length(Math.max(0, n))
    var r = {}
    if (this.horizontal_) {
      r.x = this.constrain_target_pos(e.viewLeft - e.contentLeft)
      this.set_handle_position(r.x * this.size_ratio_)
    } else {
      r.y = this.constrain_target_pos(e.viewTop - e.contentTop)
      this.set_handle_position(r.y * this.size_ratio_)
    }
    if (!(null === (this$workspace_ = this.workspace_) || undefined === this$workspace_)) {
      this$workspace_.set_metrics(r)
    }
  }
  e.prototype.set_handle_length = function (e) {
    var /* [auto-meaningful-name] */this$svg_handle_
    this.handle_length_ = e
    if (!(null === (this$svg_handle_ = this.svg_handle_) || undefined === this$svg_handle_)) {
      this$svg_handle_.setAttribute(this.length_attribute_, String(this.handle_length_))
    }
  }
  e.prototype.set_visible = function (e) {
    var t = e != this.is_visible()
    if (this.pair_) {
      throw new Error("Unable to toggle visibility of paired scrollbars.")
    }
    this.is_visible_ = e
    if (t) {
      this.update_display()
    }
  }
  e.prototype.set_position = function (e, t) {
    if (this.outer_svg_) {
      this.position_[0] = e
      this.position_[1] = t
      var n = "translate(" + (this.position_[0] + this.origin_[0]) + "px, " + (this.position_[1] + this.origin_[1]) + "px)";
      (0, c.set_css_transform)(this.outer_svg_, n)
    }
  }
  e.prototype.set_scroll_view_size = function (e) {
    var /* [auto-meaningful-name] */this$outer_svg_
    var /* [auto-meaningful-name] */this$svg_background_
    this.scroll_view_size_ = e
    if (!(null === (this$outer_svg_ = this.outer_svg_) || undefined === this$outer_svg_)) {
      this$outer_svg_.setAttribute(this.length_attribute_, String(this.scroll_view_size_))
    }
    if (!(null === (this$svg_background_ = this.svg_background_) || undefined === this$svg_background_)) {
      this$svg_background_.setAttribute(this.length_attribute_, String(this.scroll_view_size_))
    }
  }
  e.prototype.dispose = function () {
    this.clean_up()
    if (this.on_mouse_down_bar_wrapper_) {
      this.events.unbind_event(this.on_mouse_down_bar_wrapper_)
      this.on_mouse_down_bar_wrapper_ = undefined
    }
    if (this.on_mouse_down_handle_wrapper_) {
      this.events.unbind_event(this.on_mouse_down_handle_wrapper_)
      this.on_mouse_down_handle_wrapper_ = undefined
    }
    if (this.outer_svg_) {
      (0, c.remove_node)(this.outer_svg_)
    }
    delete this.outer_svg_
    delete this.svg_group
    delete this.svg_background_
    delete this.svg_handle_
    delete this.workspace_
  }
  e.prototype.metrics_are_equivalent = function (e, t) {
    return !(!e || !t) && e.viewWidth == t.viewWidth && e.viewHeight == t.viewHeight && e.viewLeft == t.viewLeft && e.viewTop == t.viewTop && e.absoluteTop == t.absoluteTop && e.absoluteLeft == t.absoluteLeft && e.contentWidth == t.contentWidth && e.contentHeight == t.contentHeight && e.contentLeft == t.contentLeft && e.contentTop == t.contentTop
  }
  e.prototype.set_origin = function (e) {
    this.origin_ = e
  }
  e.prototype.is_visible = function () {
    return this.is_visible_
  }
  e.prototype.set_container_visible = function (e) {
    var t = e != this.container_visible_
    this.container_visible_ = e
    if (t) {
      this.update_display()
    }
  }
  e.prototype.update_display = function () {
    if (undefined == this.outer_svg_) {
      throw new Error("outerSvg_ is undefined")
    }
    if (this.opt_visible && this.is_visible() && this.container_visible_) {
      this.outer_svg_.setAttribute("display", "block")
    } else {
      this.outer_svg_.setAttribute("display", "none")
    }
  }
  e.prototype.on_mouse_move_handle = function (e) {
    var t = (this.horizontal_ ? e.clientX : e.clientY) - this.start_drag_mouse
    var n = (this.start_drag_handle + t) / this.size_ratio_
    this.set(n)
  }
  e.prototype.on_mouse_up_handle = function () {
    var /* [auto-meaningful-name] */this$workspace_
    if (!(null === (this$workspace_ = this.workspace_) || undefined === this$workspace_)) {
      this$workspace_.reset_drag_surface()
    }
    this.touch_manager.clear_touch_identifier()
    this.clean_up()
  }
  e.prototype.on_mousedown_handle = function (e) {
    var /* [auto-meaningful-name] */this$workspace_
    var /* [auto-meaningful-name] */this$workspace_1
    if (!(null === (this$workspace_ = this.workspace_) || undefined === this$workspace_)) {
      this$workspace_.mark_focused()
    }
    this.clean_up()
    if (this.utils.is_right_button(e)) {
      e.stopPropagation()
    } else {
      this.start_drag_handle = this.handle_position_
      if (!(null === (this$workspace_1 = this.workspace_) || undefined === this$workspace_1)) {
        this$workspace_1.setup_drag_surface()
      }
      this.start_drag_mouse = this.horizontal_ ? e.clientX : e.clientY
      t.on_mouse_up_wrapper_ = this.events.bind_event_with_checks(document, "mouseup", this, this.on_mouse_up_handle)
      t.on_mouse_move_wrapper_ = this.events.bind_event_with_checks(document, "mousemove", this, this.on_mouse_move_handle)
      e.stopPropagation()
      e.preventDefault()
    }
  }
  e.prototype.clean_up = function () {
    this.utils.hide_chaff(true)
    if (t.on_mouse_up_wrapper_) {
      this.events.unbind_event(t.on_mouse_up_wrapper_)
      t.on_mouse_up_wrapper_ = undefined
    }
    if (t.on_mouse_move_wrapper_) {
      this.events.unbind_event(t.on_mouse_move_wrapper_)
      t.on_mouse_move_wrapper_ = undefined
    }
  }
  e.prototype.on_mouse_down_bar = function (e) {
    if (!this.workspace_ || !this.svg_handle_) {
      throw new Error("this.workspace_ is undefined")
    }
    this.workspace_.mark_focused()
    this.touch_manager.clear_touch_identifier()
    this.clean_up()
    if (this.utils.is_right_button(e)) {
      e.stopPropagation()
    } else {
      var t = this.utils.mouse_to_svg(e, this.workspace_.get_parent_svg(), this.workspace_.get_inverse_screen_ctm())
      var n = this.horizontal_ ? t.x : t.y
      var r = this.utils.get_injection_div_xy(this.svg_handle_)
      var i = this.horizontal_ ? r[0] : r[1]
      var /* [auto-meaningful-name] */this$handle_position_ = this.handle_position_
      var a = .95 * this.handle_length_
      if (n <= i) {
        this$handle_position_ -= a
      } else {
        if (n >= i + this.handle_length_) {
          this$handle_position_ += a
        }
      }
      var s = this$handle_position_ / this.size_ratio_
      this.set(s)
      e.stopPropagation()
      e.preventDefault()
    }
  }
  e.prototype.set_handle_position = function (e) {
    if (this.svg_handle_) {
      this.handle_position_ = e
      if ("y" == this.position_attribute_) {
        (0, c.set_css_transform)(this.svg_handle_, "translate3d(0px, " + this.handle_position_ + "px, 0px)")
      } else {
        if ("x" == this.position_attribute_) {
          (0, c.set_css_transform)(this.svg_handle_, "translate3d(" + this.handle_position_ + "px, 0px, 0px)")
        }
      }
    }
  }
  e.prototype.constrain_target_pos = function (e) {
    return Math.max(0, Math.min(e, this.scroll_content_size_ - this.scroll_view_size_))
  }
  e.prototype.set = function (e) {
    if (this.workspace_) {
      var t = this.workspace_.content_offset_by_view[this.horizontal_ ? 0 : 1]
      if ((e = this.constrain_target_pos(e)) !== t) {
        this.set_handle_position(e * this.size_ratio_)
        var n = {}
        if (this.horizontal_) {
          n.x = e
        } else {
          n.y = e
        }
        this.workspace_.set_metrics(n)
        var r = this.horizontal_ ? s.UIEventType.H_SCROLLBAR_SET : s.UIEventType.V_SCROLLBAR_SET
        if (this.events.is_enabled()) {
          this.events.fire(this.ui_event_factory({
            type: r,
            workspace_id: this.workspace_.id,
            old_value: t,
            new_value: e
          }))
        }
      }
    }
  }
  e.prototype.set_block_offset_by_view = function (e) {
    if (this.workspace_) {
      var t = this.workspace_.content_offset_by_view[this.horizontal_ ? 0 : 1]
      var n = {}
      var r = this.workspace_.get_metrics()
      if (this.horizontal_) {
        e = this.constrain_target_pos(-r.contentLeft - e)
        n.x = e
      } else {
        e = this.constrain_target_pos(-r.contentTop - e)
        n.y = e
      }
      if (e !== t) {
        this.workspace_.set_metrics(n)
        var /* [auto-meaningful-name] */this$workspace_$content_offset_by_view = this.workspace_.content_offset_by_view
        if (this.horizontal_) {
          this.set_handle_position(this$workspace_$content_offset_by_view[0] * this.size_ratio_)
        } else {
          this.set_handle_position(this$workspace_$content_offset_by_view[1] * this.size_ratio_)
        }
        var o = this.horizontal_ ? s.UIEventType.H_SCROLLBAR_SET : s.UIEventType.V_SCROLLBAR_SET
        if (this.events.is_enabled()) {
          this.events.fire(this.ui_event_factory({
            type: o,
            workspace_id: this.workspace_.id,
            old_value: t,
            new_value: e
          }))
        }
      }
    }
  }
  e.prototype.resize = function (e) {
    if (this.workspace_) {
      var t = e || this.workspace_.get_metrics()
      if (t && t.viewWidth && t.viewHeight) {
        if (!(this.old_host_metrics_ && this.metrics_are_equivalent(t, this.old_host_metrics_))) {
          this.old_host_metrics_ = t
          this.resize_view(t)
        }
      }
    }
  }
  e.scrollbar_thickness = 15;
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.utils)], e.prototype, "utils", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.touch_manager)], e.prototype, "touch_manager", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.UIEvent)], e.prototype, "ui_event_factory", undefined)
  return e = t = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Scrollbar = u
var l = function () {
  function e(e, t) {
    if (undefined === t) {
      t = true
    }
    this.old_host_metrics_ = undefined
    this.workspace_ = e
    this.h_scroll = new u(e, true, true, "blocklyMainWorkspaceScrollbar", t)
    this.v_scroll = new u(e, false, true, "blocklyMainWorkspaceScrollbar", t)
  }
  e.prototype.set_container_visible = function (e) {
    var /* [auto-meaningful-name] */this$h_scroll
    var /* [auto-meaningful-name] */this$v_scroll
    if (!(null === (this$h_scroll = this.h_scroll) || undefined === this$h_scroll)) {
      this$h_scroll.set_container_visible(e)
    }
    if (!(null === (this$v_scroll = this.v_scroll) || undefined === this$v_scroll)) {
      this$v_scroll.set_container_visible(e)
    }
  }
  e.prototype.dispose = function () {
    var /* [auto-meaningful-name] */this$h_scroll
    var /* [auto-meaningful-name] */this$v_scroll
    delete this.workspace_
    this.old_host_metrics_ = undefined
    if (!(null === (this$h_scroll = this.h_scroll) || undefined === this$h_scroll)) {
      this$h_scroll.dispose()
    }
    delete this.h_scroll
    if (!(null === (this$v_scroll = this.v_scroll) || undefined === this$v_scroll)) {
      this$v_scroll.dispose()
    }
    delete this.v_scroll
  }
  e.prototype.resize = function () {
    var /* [auto-meaningful-name] */this$h_scroll
    var /* [auto-meaningful-name] */this$v_scroll
    if (this.workspace_) {
      var n = this.workspace_.get_metrics()
      if (n) {
        var r = false
        var i = false
        if (this.old_host_metrics_ && this.old_host_metrics_.viewWidth == n.viewWidth && this.old_host_metrics_.viewHeight == n.viewHeight && this.old_host_metrics_.absoluteTop == n.absoluteTop && this.old_host_metrics_.absoluteLeft == n.absoluteLeft) {
          if (!(this.old_host_metrics_ && this.old_host_metrics_.contentWidth == n.contentWidth && this.old_host_metrics_.viewLeft == n.viewLeft && this.old_host_metrics_.contentLeft == n.contentLeft)) {
            r = true
          }
          if (!(this.old_host_metrics_ && this.old_host_metrics_.contentHeight == n.contentHeight && this.old_host_metrics_.viewTop == n.viewTop && this.old_host_metrics_.contentTop == n.contentTop)) {
            i = true
          }
        } else {
          r = true
          i = true
        }
        if (r) {
          if (!(null === (this$h_scroll = this.h_scroll) || undefined === this$h_scroll)) {
            this$h_scroll.resize(n)
          }
        }
        if (i) {
          if (!(null === (this$v_scroll = this.v_scroll) || undefined === this$v_scroll)) {
            this$v_scroll.resize(n)
          }
        }
        this.old_host_metrics_ = n
      }
    }
  }
  e.prototype.set = function (e, t) {
    if (this.h_scroll && this.v_scroll && this.workspace_) {
      var /* [auto-meaningful-name] */this$workspace_$content_offset_by_view = this.workspace_.content_offset_by_view
      var r = {
        x: this.h_scroll.constrain_target_pos(e),
        y: this.v_scroll.constrain_target_pos(t)
      }
      if (!(r.x === this$workspace_$content_offset_by_view[0] && r.y === this$workspace_$content_offset_by_view[1])) {
        this.workspace_.set_metrics(r)
        this.h_scroll.set_handle_position(r.x * this.h_scroll.size_ratio_)
        this.v_scroll.set_handle_position(r.y * this.v_scroll.size_ratio_)
        if (this.events.is_enabled()) {
          this.events.fire(this.ui_event_factory({
            type: s.UIEventType.H_SCROLLBAR_SET,
            workspace_id: this.workspace_.id,
            old_value: this$workspace_$content_offset_by_view[0],
            new_value: r.x
          }))
          this.events.fire(this.ui_event_factory({
            type: s.UIEventType.V_SCROLLBAR_SET,
            workspace_id: this.workspace_.id,
            old_value: this$workspace_$content_offset_by_view[1],
            new_value: r.y
          }))
        }
      }
    }
  }
  e.prototype.set_block_offset_by_view = function (e, t) {
    if (this.h_scroll && this.v_scroll && this.workspace_) {
      var /* [auto-meaningful-name] */this$workspace_$content_offset_by_view = this.workspace_.content_offset_by_view
      var r = this.workspace_.get_metrics()
      var i = {
        x: this.h_scroll.constrain_target_pos(-r.contentLeft - e),
        y: this.v_scroll.constrain_target_pos(-r.contentTop - t)
      }
      if (!(i.x === this$workspace_$content_offset_by_view[0] && i.y === this$workspace_$content_offset_by_view[1])) {
        this.workspace_.set_metrics(i)
        this.h_scroll.set_handle_position(i.x * this.h_scroll.size_ratio_)
        this.v_scroll.set_handle_position(i.y * this.v_scroll.size_ratio_)
        if (this.events.is_enabled()) {
          this.events.fire(this.ui_event_factory({
            type: s.UIEventType.H_SCROLLBAR_SET,
            workspace_id: this.workspace_.id,
            old_value: this$workspace_$content_offset_by_view[0],
            new_value: i.x
          }))
          this.events.fire(this.ui_event_factory({
            type: s.UIEventType.V_SCROLLBAR_SET,
            workspace_id: this.workspace_.id,
            old_value: this$workspace_$content_offset_by_view[1],
            new_value: i.y
          }))
        }
      }
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.utils)], e.prototype, "utils", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.UIEvent)], e.prototype, "ui_event_factory", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.ScrollbarPair = l
