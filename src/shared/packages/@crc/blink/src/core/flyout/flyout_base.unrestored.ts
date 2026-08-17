/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2161
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Flyout = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 258 */"@kitten-team/gl-matrix")
var a = require(/* 125 */"../../../../../../../../unrestored/shared/1571/2636/1058/125")
var s = require(/* 195 */"../../../../../../../../unrestored/shared/1571/2636/123/195/index")
var c = require(/* 123 */"../../../../../../../../unrestored/shared/1571/2636/123/index")
var u = function () {
  function e(e) {
    var t = this
    this.listeners_ = []
    this.containerVisible_ = true
    this.permanently_disabled_ = []
    this.reflow_wrapper = undefined
    this.buttons_ = []
    this.cached_blocks = new Map()
    this.cached_buttons = new Map()
    this.default_button_gap = 12
    this.horizontalLayout_ = false
    this.is_visible_ = false
    this.width_ = 0
    this.height_ = 0
    this.event_wrappers_ = []
    this.drag_angle_range_ = 50
    this.auto_close = true
    this.bind_transition_end_event = function () {
      if (t.svg_group && t.targetWorkspace_) {
        t.transition_end_wrapper = t.events.bind_event_with_checks(t.svg_group, "transitionend", t, function (e) {
          if (t.targetWorkspace_ && "transform" === e.propertyName && t.events.is_enabled()) {
            var n = t.ui_event_factory({
              type: s.UIEventType.FLYOUT_SHOW,
              workspace_id: t.targetWorkspace_.id,
              old_value: !t.is_visible_,
              new_value: t.is_visible_
            })
            t.events.fire(n)
          }
        })
      }
    }
    e.get_metrics = this.get_metrics.bind(this)
    e.set_metrics = this.set_metrics.bind(this)
    e.has_categories = false
    e.in_flyout = true
    this.workspace_ = this.workspace_factory(e)
    this.workspace_.set_scale(e.zoomOptions.startScale)
    this.RTL = !!e.RTL
    this.toolboxPosition_ = e.toolboxPosition
    this.flyout_corner_radius = e.flyout.corner_radius || this.theme.renderer.FLYOUT_CORNER_RADIUS
    this.padding_top = e.flyout.padding.top
    this.padding_bottom = e.flyout.padding.bottom
    this.padding_left = e.flyout.padding.left
    this.padding_right = e.flyout.padding.right
  }
  e.prototype.get_workspace = function () {
    return this.workspace_
  }
  e.prototype.get_buttons_ = function () {
    return this.buttons_
  }
  e.prototype.set_corner_radius = function (e) {
    this.flyout_corner_radius = e
  }
  e.prototype.filter_for_capacity = function () {
    if (this.targetWorkspace_) {
      for (var e = this.targetWorkspace_.remaining_capacity(), t = this.workspace_.get_top_blocks(false), n = 0; n < t.length; n++) {
        var r = t[n]
        if (-1 == this.permanently_disabled_.indexOf(r)) {
          var i = r.get_descendants()
          r.set_disabled(i.length > e)
        }
      }
    }
  }
  e.prototype.reflow = function () {
    if (this.reflow_wrapper) {
      this.workspace_.remove_change_listener(this.reflow_wrapper)
    }
    var e = this.workspace_.get_top_blocks(false)
    this.reflow_internal(e)
    if (this.reflow_wrapper) {
      this.workspace_.add_change_listener(this.reflow_wrapper)
    }
  }
  e.prototype.set_visible = function (e) {
    var t = e != this.is_visible_
    this.is_visible_ = e
    if (t) {
      this.update_display()
    }
  }
  e.prototype.update_display = function () {
    var e = this.is_visible()
    if (this.scrollbar_) {
      this.scrollbar_.set_container_visible(e)
    }
    return e
  }
  e.prototype.block_mouse_down = function (e) {
    var t = this
    var n = this
    return function (r) {
      if (t.targetWorkspace_) {
        var i = t.targetWorkspace_.get_gesture(r)
        if (i) {
          i.set_start_block(e)
          i.handle_flyout_start(r, n)
        }
      }
    }
  }
  e.prototype.get_svg_root = function () {
    return this.svg_group
  }
  e.prototype.get_background = function () {
    return this.svg_background_
  }
  e.prototype.get_scrollbar = function () {
    return this.scrollbar_
  }
  e.prototype.is_scrollable = function () {
    return !!this.scrollbar_ && this.scrollbar_.is_visible()
  }
  e.prototype.is_horizontal = function () {
    return this.horizontalLayout_
  }
  e.prototype.is_visible = function () {
    return this.is_visible_ && this.containerVisible_
  }
  e.prototype.get_width = function () {
    return this.width_
  }
  e.prototype.get_height = function () {
    return this.height_
  }
  e.prototype.set_auto_close = function (e) {
    if (e !== this.auto_close) {
      this.auto_close = e
      if (this.targetWorkspace_) {
        this.utils.svg_resize(this.targetWorkspace_)
      }
      if (this.svg_group) {
        if (e) {
          (0, c.add_class_if_necessary)(this.svg_group, "blocklyFlyoutAutoClose");
          (0, c.remove_class_if_necessary)(this.svg_group, "blocklyFlyoutPinned")
        } else {
          (0, c.remove_class_if_necessary)(this.svg_group, "blocklyFlyoutAutoClose");
          (0, c.add_class_if_necessary)(this.svg_group, "blocklyFlyoutPinned")
        }
      }
    }
  }
  e.prototype.is_auto_close = function () {
    return this.auto_close
  }
  e.prototype.create_dom = function (e) {
    this.svg_group = (0, c.create_svg_element)(e, {
      class: this.auto_close ? "blocklyFlyout blocklyFlyoutHidden blocklyFlyoutAutoClose" : "blocklyFlyout blocklyFlyoutHidden blocklyFlyoutPinned",
      width: 0,
      height: 0
    })
    this.svg_background_ = (0, c.create_svg_element)("path", {
      class: "blocklyFlyoutBackground"
    }, this.svg_group)
    this.svg_background_.style.fill = this.theme.flyout.BACKGROUND_COLOR.toString()
    this.svg_group.appendChild(this.create_workspace_with_padding_top(this.padding_top))
    return this.svg_group
  }
  e.prototype.create_workspace_with_padding_top = function (e) {
    var t = this.workspace_.create_dom()
    this.set_padding_top(e)
    return t
  }
  e.prototype.set_padding_top = function (e) {
    if (this.workspace_ && this.workspace_.svg_group) {
      if ("number" === typeof e) {
        this.workspace_.svg_group.style.transform = ""
        this.workspace_.svg_group.setAttribute("transform", "translate(0, " + e + ")")
      } else {
        this.workspace_.svg_group.removeAttribute("transform")
        this.workspace_.svg_group.style.transform = "translate(0, " + e + ")"
      }
    }
  }
  e.prototype.dispose = function () {
    this.hide()
    this.unbind_scroll_events()
    if (this.transition_end_wrapper) {
      this.events.unbind_event(this.transition_end_wrapper)
      delete this.transition_end_wrapper
    }
    if (this.scrollbar_) {
      this.scrollbar_.dispose()
      delete this.scrollbar_
    }
    if (this.workspace_) {
      this.workspace_.set_target_workspace(undefined)
      this.workspace_.dispose()
    }
    if (this.svg_group) {
      (0, c.remove_node)(this.svg_group)
      delete this.svg_group
    }
    delete this.svg_background_
    delete this.targetWorkspace_
    this.cached_blocks.forEach(function (e) {
      return e.dispose()
    })
    this.cached_blocks.clear()
    this.cached_buttons.forEach(function (e) {
      return e.dispose()
    })
    this.cached_buttons.clear()
  }
  e.prototype.add_block_listeners = function (e, t) {
    this.listeners_.push(this.events.bind_event_with_checks(e, "mousedown", undefined, this.block_mouse_down(t)))
  }
  e.prototype.xml_to_flyout_dom = function (e, t, n, r) {
    if (undefined === r) {
      r = this.workspace_
    }
    if (!this.targetWorkspace_) {
      throw new Error("Trying to construct flyout dom before setting target workspace. ")
    }
    var i = e.tagName.toUpperCase()
    if (i) {
      switch (i) {
        case "BLOCK":
          var o = this.xml.dom_to_text(e),
            a = this.cached_blocks.get(o)
          if (a) {
            a.retach(r)
          } else {
            a = this.xml.dom_to_block(e, r)
            if (this.check_if_cache_block(e)) {
              this.cached_blocks.set(o, a)
            }
          }
          if (a.disabled) {
            this.permanently_disabled_.push(a)
          }
          t.push({
            type: "block",
            block: a,
            inline: "true" === e.getAttribute("layout_inline")
          })
          var /* [auto-meaningful-name] */this$targetWorkspace_$options$flyout$blocks$default_gap = this.targetWorkspace_.options.flyout.blocks.default_gap
          if (a.is_starting_block() && n.length > 0 && n[n.length - 1] === s) {
            var c = this.targetWorkspace_.options.flyout.blocks.head_block_offset[1]
            n[n.length - 1] += c
          }
          var u = e.getAttribute("gap")
          return void n.push(u ? parseInt(u) <= 10 ? s : parseInt(u) : s)
        case "SEP":
          var l = e.getAttribute("gap")
          return void (l && n.length > 0 && (n[n.length - 1] = parseInt(l, 10)))
        case "BUTTON":
        case "LABEL":
          var f = new XMLSerializer().serializeToString(e),
            d = this.cached_buttons.get(f)
          if (d) {
            d.retach(r)
          } else {
            d = this.flyout_button_factory({
              workspace: r,
              target_workspace: this.targetWorkspace_,
              xml: e,
              is_label: "LABEL" === i,
              flyout_padding_left: this.padding_left,
              flyout_padding_right: this.padding_right
            })
            this.cached_buttons.set(f, d)
          }
          t.push({
            type: "button",
            button: d
          })
          return void n.push(this.default_button_gap)
      }
    }
  }
  e.prototype.show = function (e) {
    var t = this
    if (this.workspace_ && this.svg_group) {
      var n
      this.events.disable()
      this.workspace_.set_resizes_enabled(false)
      this.hide()
      this.clear_old_blocks()
      if ("string" == typeof e) {
        var r = this.workspace_.get_target_workspace()
        if (!r) {
          return void console.error("Workspace has no target workspace.")
        }
        var i = r.get_toolbox_category_callback(e)
        n = i ? i(this.workspace_.get_target_workspace()) : []
      } else {
        n = e
      }
      this.set_visible(true)
      this.permanently_disabled_.length = 0
      for (var o = [], a = [], s = 0; s < n.length; s++) {
        var u = n[s]
        this.xml_to_flyout_dom(u, o, a)
      }
      this.layout_(o, a)
      if (this.svg_background_) {
        this.listeners_.push(this.events.bind_event_with_checks(this.svg_background_, "mouseover", this, function () {
          for (var e = t.workspace_.get_top_blocks(false), n = 0; n < e.length; n++) {
            e[n].remove_select()
          }
        }))
      } else {
        console.warn("Flyout background svg not found.")
      }
      this.reset_size()
      this.workspace_.set_resizes_enabled(true)
      this.reflow()
      this.filter_for_capacity()
      this.position()
      this.reflow_wrapper = this.reflow.bind(this)
      if (this.reflow_wrapper) {
        this.workspace_.add_change_listener(this.reflow_wrapper)
      }
      if (!this.auto_close && this.targetWorkspace_) {
        this.utils.svg_resize(this.targetWorkspace_)
      }
      this.events.enable();
      (0, c.add_class_if_necessary)(this.svg_group, "blocklyFlyoutVisible");
      (0, c.remove_class_if_necessary)(this.svg_group, "blocklyFlyoutHidden")
    } else {
      console.error("Workspace has not been init.")
    }
  }
  e.prototype.check_if_cache_block = function (e) {
    return "true" !== e.getAttribute("uncache")
  }
  e.prototype.hide = function () {
    var e = this
    if (this.is_visible() && this.targetWorkspace_ && this.svg_group) {
      this.set_visible(false)
      this.listeners_.forEach(function (t) {
        return e.events.unbind_event(t)
      })
      this.listeners_.length = 0
      this.position()
      if (this.reflow_wrapper) {
        this.workspace_.remove_change_listener(this.reflow_wrapper)
        this.reflow_wrapper = undefined
      }
      if (!this.auto_close) {
        this.utils.svg_resize(this.targetWorkspace_)
      }
      (0, c.add_class_if_necessary)(this.svg_group, "blocklyFlyoutHidden");
      (0, c.remove_class_if_necessary)(this.svg_group, "blocklyFlyoutVisible")
    }
  }
  e.prototype.clear_old_blocks = function () {
    if (this.workspace_) {
      !function (e) {
        for (var t = e.get_top_blocks(false), n = 0; n < t.length; n++) {
          var r = t[n]
          if (r.get_workspace() == e) {
            r.detach()
          }
        }
      }(this.workspace_)
      for (var e = 0; e < this.buttons_.length; e++) {
        this.buttons_[e].detach()
      }
      this.buttons_.length = 0
    } else {
      console.error("Workspace has not been init.")
    }
  }
  e.prototype.position_at = function (e, t, n, r) {
    if (this.svg_group) {
      this.svg_group.setAttribute("width", e.toString())
      this.svg_group.setAttribute("height", t.toString())
      this.utils.set_transform_style(this.svg_group, n, r)
    }
    if (this.scrollbar_) {
      var i = o.vec2.fromValues(n, r)
      this.scrollbar_.set_origin(i)
      this.scrollbar_.resize()
    }
  }
  e.prototype.set_container_visible = function (e) {
    if (this.svg_group) {
      var t = e != this.containerVisible_
      this.containerVisible_ = e
      if (t) {
        var n = this.update_display()
        this.svg_group.style.display = n ? "block" : "none"
      }
    }
  }
  e.prototype.scroll_to_start = function () {
    if (this.targetWorkspace_ && this.targetWorkspace_.options.flyout_scrollable) {
      if (this.scrollbar_) {
        this.scrollbar_.set(0)
      } else {
        console.error("Cannot scroll flyout before scrollbar is initialized. ", "Make sure Flyout.init() is called before trying to scroll. ")
      }
    }
  }
  e.prototype.create_block = function (e, t, n) {
    if (!this.targetWorkspace_) {
      throw new Error("Trying to create block from flyout before target workspace set. ")
    }
    var r
    this.events.disable()
    this.targetWorkspace_.set_resizes_enabled(false)
    try {
      e.remove_hover()
      r = this.place_new_block(e, n)
    } finally {
      this.events.enable()
      this.utils.hide_chaff()
    }
    if (this.events.is_enabled()) {
      if (!this.events.get_group()) {
        this.events.set_group(true)
      }
      if (undefined != r && this.events.is_enabled()) {
        this.events.fire(this.create_event_factory({
          block: r,
          source: t ? "flyout:click" : "flyout:drag"
        }))
      }
    }
    if (this.auto_close) {
      this.hide()
    }
    return r
  }
  e.prototype.init = function (e) {
    this.targetWorkspace_ = e
    if (!this.workspace_) {
      throw new Error("this.workspace_ can not be undefined")
    }
    this.workspace_.set_target_workspace(e)
    if (e.options.flyout_scrollable) {
      this.scrollbar_ = this.scrollbar_factory(this.workspace_, this.horizontalLayout_, false, "blocklyFlyoutScrollbar", e.options.flyout_show_scrollbars)
      this.bind_scroll_events()
    }
    this.bind_transition_end_event()
    this.hide()
    if (!this.auto_close) {
      this.targetWorkspace_.add_change_listener(this.filter_for_capacity.bind(this))
    }
    this.workspace_.get_gesture = this.targetWorkspace_.get_gesture.bind(this.targetWorkspace_)
  }
  e.prototype.unbind_scroll_events = function () {
    var e = this
    this.event_wrappers_.forEach(function (t) {
      return e.events.unbind_event(t)
    })
    this.event_wrappers_ = []
  }
  e.prototype.bind_scroll_events = function () {
    if (!this.svg_group || !this.svg_background_) {
      throw new Error("Trying to bind scroll event for flyout before svg init. ")
    }
    this.event_wrappers_.push(this.events.bind_event_with_checks(this.svg_group, "wheel", this, this.wheel_))
    this.event_wrappers_.push(this.events.bind_event_with_checks(this.svg_background_, "mousedown", this, this.on_mouse_down))
  }
  e.prototype.init_flyout_button = function (e, t, n, r) {
    var i = e.get_svg_group() || e.create_dom(r)
    if ("number" === typeof t && "number" === typeof n) {
      e.move_to(t, n)
    }
    e.show("none" !== e.default_display)
    this.listeners_.push(this.events.bind_event_with_checks(i, "mousedown", this, "fixed" !== e.position ? this.on_mouse_down : function () {}))
    this.buttons_.push(e)
    return i
  }
  e.prototype.on_mouse_down = function (e) {
    if (this.is_visible() && this.targetWorkspace_) {
      var t = this.targetWorkspace_.get_gesture(e)
      if (t) {
        t.handle_flyout_start(e, this)
      }
    }
  }
  e.prototype.clear_cached_blocks = function () {
    this.cached_blocks.clear()
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.utils)], e.prototype, "utils", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.xml)], e.prototype, "xml", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.theme)], e.prototype, "theme", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.CreateEvent)], e.prototype, "create_event_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.UIEvent)], e.prototype, "ui_event_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.FlyoutButton)], e.prototype, "flyout_button_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.WorkspaceSvg)], e.prototype, "workspace_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Scrollbar)], e.prototype, "scrollbar_factory", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Flyout = u
