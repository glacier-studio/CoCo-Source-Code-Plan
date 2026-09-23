/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2198
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.WorkspaceSvg = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 258 */"@kitten-team/gl-matrix")
var a = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var s = require(/* 195 */"../../123/195/index")
var c = require(/* 648 */"../../1205/2609/648")
var u = require(/* 293 */"../../123/293")
var l = require(/* 123 */"../../123/index")
var f = require(/* 975 */"../499/975")
var d = require(/* 214 */"../../1022/214")
var h = require(/* 478 */"../../123/478")
var p = function () {
  function e(e, t, n, r) {
    this.connectionDBList = []
    this.degrade_translate = undefined
    this.MAX_UNDO = 1024
    this.SCAN_ANGLE = 3
    this.listeners_ = []
    this.blockDB_ = new Map()
    this.workspace_comment_db = new Map()
    this.undo_stack_ = []
    this.redo_stack_ = []
    this.top_blocks_ = []
    this.top_comments = []
    this.is_clearing = false
    this.is_drag_surface_active_ = false
    this.cached_parent_svg_ = undefined
    this.flyout_ = undefined
    this.toolbox_ = undefined
    this.inverse_screen_CTM_ = undefined
    this.inverse_screen_CTM_dirty_ = true
    this.blocks_area_ = undefined
    this.workspace_area_ = undefined
    this.workspace_area_dirty_ = true
    this.delete_area_flyout = undefined
    this.is_flyout_rect_dirty_ = true
    this.toolbox_category_callbacks_ = {}
    this.last_recorded_page_scroll_ = undefined
    this.resize_handler_wrapper_ = undefined
    this.rendered = true
    this.is_flyout = false
    this.resizes_enabled_ = true
    this.toolbox_refresh_enabled_ = true
    this.scroll_xy = o.vec2.create()
    this.content_offset_by_view = o.vec2.create()
    this.drag_delta_xy_ = o.vec2.create()
    this.scale = 1
    this.current_gesture_ = undefined
    this.workspace_drag_surface_ = undefined
    this.injection_div_ = undefined
    this.flyout_button_callbacks_ = {}
    this.custom_flyout_buttons = new Map()
    this.svg_group = undefined
    this.svg_bubble_canvas_ = undefined
    this.target_workspace = undefined
    this.event_dict = new Map()
    this.custom_change_events_ = new Map()
    this.pre_paste = []
    this.pre_paste_extend = []
    this.gestures_enabled = true
    this.offset = o.vec2.fromValues(0, 0)
    this.is_hotkey_enable = true
    this.id = e.id || (0, u.gen_uid)()
    this.workspace_db.add(this)
    this.options = e
    this.RTL = !!this.options.RTL
    this.toolbox_position = this.options.toolboxPosition
    this.is_flyout = e.in_flyout
    this.top_blocks_ = []
    this.top_comments = []
    this.listeners_ = []
    this.undo_stack_ = []
    this.redo_stack_ = []
    this.get_metrics = e.get_metrics || this.get_metrics
    this.set_metrics = e.set_metrics || this.set_metrics
    this.init_connection_db()
    if (t) {
      this.block_drag_surface_ = t
    }
    if (n) {
      this.workspace_drag_surface_ = n
    }
    if (r) {
      this.injection_div_ = r
    }
    this.audio_manager_ = this.workspace_audio_factory(e.parentWorkspace)
    if (!e.in_flyout && e.svg_defs && e.svg_rnd) {
      this.grid_ = this.grid_factory(e)
    }
  }
  var t
  t = e
  e.prototype.get_element_from_db = function (e) {
    return this.blockDB_.get(e) || this.workspace_comment_db.get(e)
  }
  e.prototype.get_options = function () {
    return this.options
  }
  e.prototype.get_undo_stack = function () {
    return this.undo_stack_
  }
  e.prototype.set_undo_stack = function (e) {
    this.undo_stack_ = e
  }
  e.prototype.get_redo_stack = function () {
    return this.redo_stack_
  }
  e.prototype.set_redo_stack = function (e) {
    this.redo_stack_ = e
  }
  e.prototype.get_toolbox = function () {
    return this.toolbox_
  }
  e.prototype.get_flyout = function () {
    return this.flyout_ ? this.flyout_ : this.toolbox_ ? this.toolbox_.flyout : undefined
  }
  e.prototype.get_workspace_area = function () {
    var e = this.get_parent_svg()
    if (this.workspace_area_dirty_ && undefined != e) {
      this.workspace_area_ = e.getBoundingClientRect()
      this.workspace_area_dirty_ = false
    }
    return this.workspace_area_
  }
  e.prototype.get_delete_area_flyout = function () {
    if (!this.is_flyout_rect_dirty_) {
      return this.delete_area_flyout
    }
    var e = this.flyout_ || this.toolbox_ && this.toolbox_.flyout
    if (e && e.is_visible() && "none" !== this.get_options().delete_area) {
      this.delete_area_flyout = e.get_client_rect()
    } else {
      this.delete_area_flyout = undefined
    }
    this.is_flyout_rect_dirty_ = false
    return this.delete_area_flyout
  }
  e.prototype.get_block_drag_surface = function () {
    return this.block_drag_surface_
  }
  e.prototype.is_resizes_enabled = function () {
    return this.resizes_enabled_
  }
  e.prototype.get_scale = function () {
    return this.scale
  }
  e.prototype.get_delete_area_toolbox = function () {
    return this.delete_area_toolbox_
  }
  e.prototype.get_scrollbar = function () {
    return this._scrollbar
  }
  e.prototype.set_scrollbar = function (e) {
    this._scrollbar = e
  }
  e.prototype.get_workspace_drag_surface = function () {
    return this.workspace_drag_surface_
  }
  Object.defineProperty(e.prototype, "use_workspace_drag_surface_", {
    get: function () {
      return this.degrade_translate ? this.blockDB_.size < this.degrade_translate : !!this.workspace_drag_surface_
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.get_target_workspace = function () {
    return this.target_workspace
  }
  e.prototype.set_target_workspace = function (e) {
    this.target_workspace = e
  }
  e.prototype.init_connection_db = function () {
    this.connectionDBList[s.CONNECTION_TYPE.INPUT_VALUE] = this.connection_db_factory()
    this.connectionDBList[s.CONNECTION_TYPE.OUTPUT_VALUE] = this.connection_db_factory()
    this.connectionDBList[s.CONNECTION_TYPE.NEXT_STATEMENT] = this.connection_db_factory()
    this.connectionDBList[s.CONNECTION_TYPE.PREVIOUS_STATEMENT] = this.connection_db_factory()
  }
  e.prototype.remaining_capacity = function () {
    return isNaN(this.options.maxBlocks) ? 1 / 0 : this.options.maxBlocks - this.get_all_blocks().length
  }
  e.prototype.undo = function (e) {
    var t = e ? this.redo_stack_ : this.undo_stack_
    var n = e ? this.undo_stack_ : this.redo_stack_
    var r = t.pop()
    if (r) {
      for (var i = [r], /* [auto-meaningful-name] */r$_group = r._group; t.length && r$_group && r$_group == t[t.length - 1]._group;) {
        var a = t.pop()
        if (a) {
          i.push(a)
        }
      }
      for (var s = 0; s < i.length; s++) {
        var c = i[s]
        n.push(c)
      }
      var u = this.events.filter(i, !!e)
      this.events.set_record_undo(false)
      this.events.set_undoing(true)
      this.set_resizes_enabled(false)
      try {
        if (r$_group) {
          this.events.set_group(r$_group)
        }
        for (s = 0; s < u.length; s++) {
          var l = u[s]
          if (l.run) {
            l.run(!!e)
          }
        }
        if (r$_group) {
          this.events.set_group(false)
        }
      } catch (f) {
        console.error(f)
      } finally {
        this.set_resizes_enabled(true)
        this.events.set_undoing(false)
        this.events.set_record_undo(true)
      }
    }
  }
  e.prototype.clear_undo = function () {
    this.undo_stack_.length = 0
    this.redo_stack_.length = 0
    this.events.clear_pending_undo()
  }
  e.prototype.get_all_blocks = function () {
    for (var e = this.get_top_blocks(false), t = 0; t < e.length; t++) {
      e.push.apply(e, e[t].get_children())
    }
    return e
  }
  e.prototype.add_top_block = function (e) {
    this.top_blocks_.push(e)
  }
  e.prototype.add_top_comment = function (e) {
    this.top_comments.push(e)
  }
  e.prototype.get_top_blocks = function (e, t) {
    if (undefined === t) {
      t = false
    }
    var n = this.top_blocks_.filter(function (e) {
      return !e.parent_group
    })
    if (t) {
      n = n.filter(function (e) {
        return e.get_visibility() === s.BlockVisibility.VISIBLE
      })
    }
    if (e && n.length > 1) {
      var r = Math.sin((0, u.to_radians)(this.SCAN_ANGLE))
      if (this.RTL) {
        r *= -1
      }
      n.sort(function (e, t) {
        var n = e.get_relative_to_surface_xy()
        var i = t.get_relative_to_surface_xy()
        return n[1] + r * n[0] - (i[1] + r * i[0])
      })
    }
    return n
  }
  e.prototype.get_last_block = function () {
    var e = this.get_top_blocks(true)
    var t = e[e.length - 1]
    if (t) {
      for (var n = t.get_full_next_block(); n;) {
        n = (t = n).get_full_next_block()
      }
      return t
    }
  }
  e.prototype.get_top_comments = function (e, t) {
    if (undefined === t) {
      t = false
    }
    var n = this.top_comments.slice()
    if (t) {
      n = n.filter(function (e) {
        return e.get_visibility() === s.BlockVisibility.VISIBLE
      })
    }
    if (e && n.length > 1) {
      var r = Math.sin((0, u.to_radians)(this.SCAN_ANGLE))
      if (this.RTL) {
        r *= -1
      }
      n.sort(function (e, t) {
        var n = e.get_relative_to_surface_xy()
        var i = t.get_relative_to_surface_xy()
        return n[1] + r * n[0] - (i[1] + r * i[0])
      })
    }
    return n
  }
  e.prototype.get_top_elements = function (e, t) {
    if (undefined === t) {
      t = false
    }
    var n = this.top_comments.slice()
    n = n.concat(this.top_blocks_.filter(function (e) {
      return !e.parent_group
    }))
    if (t) {
      n = n.filter(function (e) {
        return e.get_visibility() === s.BlockVisibility.VISIBLE
      })
    }
    if (e && n.length > 1) {
      var r = Math.sin((0, u.to_radians)(this.SCAN_ANGLE))
      if (this.RTL) {
        r *= -1
      }
      n.sort(function (e, t) {
        var n = e.get_relative_to_surface_xy()
        var i = t.get_relative_to_surface_xy()
        return n[1] + r * n[0] - (i[1] + r * i[0])
      })
    }
    return n
  }
  e.prototype.remove_change_listener = function (e) {
    (0, f.remove)(this.listeners_, e)
  }
  e.prototype.remove_top_block = function (e) {
    if (!(0, f.remove)(this.top_blocks_, e)) {
      throw new Error("Block " + e.type + " [" + e.id + "] not present in workspace's list of top-most blocks.")
    }
  }
  e.prototype.remove_top_comment = function (e) {
    if (!(0, f.remove)(this.top_comments, e)) {
      throw new Error("Comment " + e.get_text() + " [" + e.id + "] not present in workspace's list of top-most comments.")
    }
  }
  e.prototype.fire_change_listener = function (e) {
    if (e.is_record_undo() && this.events.is_record_undo()) {
      for (this.undo_stack_.push(e), this.redo_stack_.length = 0; this.undo_stack_.length > this.MAX_UNDO && this.MAX_UNDO >= 0;) {
        this.undo_stack_.shift()
      }
    }
    for (var t = this.listeners_.slice(), n = 0; n < t.length; n++) {
      (0, t[n])(e)
    }
    var r = this.event_dict.get("common")
    if (r) {
      r(e)
    }
    var i = this.event_dict.get(e.type)
    if (i) {
      i(e)
    }
    if (s.AllUIEvents.includes(e.type)) {
      var o = this.event_dict.get(s.BlockEventType.UI)
      if (o) {
        o(e)
      }
    }
  }
  e.prototype.get_block_by_id = function (e) {
    var t = this.blockDB_.get(e)
    var n = this.get_flyout()
    if (!t && undefined != n) {
      var r = n.get_workspace()
      if (undefined != r) {
        t = r.blockDB_.get(e)
      }
    }
    return t || undefined
  }
  e.prototype.add_change_listener = function (e, t) {
    if (undefined === t) {
      t = true
    }
    if (t) {
      this.listeners_.push(e)
    } else {
      this.listeners_.unshift(e)
    }
    return e
  }
  e.prototype.add_event_listener = function (e, t) {
    this.event_dict.set(e, t)
  }
  e.prototype.add_custom_change_event = function (e, t) {
    this.custom_change_events_.set(e, t)
  }
  e.prototype.get_change_event = function (e) {
    return this.custom_change_events_.get(e)
  }
  e.prototype.create_dom = function (e) {
    this.svg_group = (0, l.create_svg_element)("g", {
      class: "blocklyWorkspace"
    })
    if (e) {
      this.svg_background_ = (0, l.create_svg_element)("rect", {
        height: "100%",
        width: "100%",
        class: e
      }, this.svg_group)
    }
    if ("blocklyMainBackground" == e && this.grid_ && this.svg_background_) {
      this.svg_background_.style.fill = "url(#" + this.grid_.get_pattern_id() + ")"
    }
    this.svg_block_canvas_ = (0, l.create_svg_element)("g", {
      class: "blocklyBlockCanvas"
    }, this.svg_group)
    this.svg_bubble_canvas_ = (0, l.create_svg_element)("g", {
      class: "blocklyBubbleCanvas"
    }, this.svg_group)
    if (!this.is_flyout) {
      this.events.bind_event_with_checks(this.svg_group, "mousedown", this, this.on_mouse_down)
      if (this.options.ws_scrollable) {
        this.events.bind_event_with_checks(this.svg_group, "wheel", this, this.on_wheel_scroll)
      }
    }
    if (this.options.has_categories) {
      this.toolbox_ = this.toolbox_factory(this)
    }
    this.record_delete_areas()
    return this.svg_group
  }
  e.prototype.paste = function (e, t, n) {
    if (undefined === n) {
      n = false
    }
    if (e) {
      (0, l.reset_all_block_id)(e)
    }
    this._paste(e, t, n, false)
  }
  e.prototype._paste = function (e, t, n, r) {
    var i
    if (undefined === n) {
      n = false
    }
    if (undefined === r) {
      r = true
    }
    this.runtime_data.set_pasting(true)
    try {
      for (var a = 0; a < this.pre_paste.length; a++) {
        if (e) {
          e = (i = this.pre_paste[a].call(this, e, t, n || false, r)).xml_block
          t = i.mouse_position
          n = i.is_move_to_default
        }
      }
      if (!e) {
        return
      }
      if (!this.rendered || e.getElementsByTagName("block").length >= this.remaining_capacity()) {
        return
      }
      if (this.current_gesture_) {
        this.current_gesture_.cancel()
      }
      this.events.disable()
      var /* [auto-meaningful-name] */this$resizes_enabled_ = this.resizes_enabled_
      if (this$resizes_enabled_) {
        this.set_resizes_enabled(false)
      }
      var u = undefined
      var l = t || {
        x: 0,
        y: 0
      }
      try {
        u = this.xml.dom_to_workspace_element(e, this)
        if ((0, d.is_block_svg)(u)) {
          u = u.parent_group || u
        }
        if (!u) {
          return
        }
        var f = undefined
        var h = undefined
        if (t) {
          l = t
          u.move_by(o.vec2.fromValues(t.x, t.y))
        } else {
          if (n) {
            var p = this.get_origin_offset_in_pixels()
            var _ = this.get_paste_offset()
            f = (_.left - p[0]) / this.scale
            h = (_.top - p[1]) / this.scale
          } else {
            var A = e.getAttribute("x")
            var g = e.getAttribute("y")
            if (!A || !g) {
              return
            }
            f = parseInt(A, 10)
            h = parseInt(g, 10)
          }
          if (isNaN(f) || isNaN(h)) {
            throw Error()
          }
          if (this.RTL) {
            f = -f
          }
          var v = undefined
          do {
            v = false
            var m = this.get_all_blocks().slice()
            m = m.concat(this.top_comments.slice())
            for (a = 0; a < m.length; a++) {
              var y = m[a].get_relative_to_surface_xy()
              if (Math.abs(f - y[0]) <= 1 && Math.abs(h - y[1]) <= 1) {
                v = true
                break
              }
            }
            if (!v) {
              var b = (0, d.is_block_svg)(u) ? u.get_connections(false) : []
              for (a = 0; a < b.length; a++) {
                if (b[a].closest(this.theme.blink_params.SNAP_RADIUS, o.vec2.fromValues(f, h)).connection) {
                  v = true
                  break
                }
              }
            }
            if (v) {
              f += this.theme.blink_params.SNAP_RADIUS
              h += 2 * this.theme.blink_params.SNAP_RADIUS
            }
          } while (v)
          l = {
            x: f,
            y: h
          }
          u.move_by(o.vec2.fromValues(f, h))
        }
      } finally {
        this.events.enable()
        if (this$resizes_enabled_) {
          this.set_resizes_enabled(true)
        }
      }
      u.select()
      var w = this.events.get_group()
      this.events.set_group(w || true)
      if (!(!this.events.is_enabled() || (0, d.is_block_svg)(u) && u.is_shadow())) {
        this.events.fire(this.create_event_factory({
          block: u
        }))
      }
      if ((0, d.is_block_svg)(u)) {
        (0, c.fire_block_onchange)(u)
        if (u.parent_group) {
          this.events.fire(this.change_event_factory("group_block", {
            block: u,
            old_value: undefined,
            new_value: [u.parent_group.id, u.parent_group.group_name, u.parent_group.group_stop_at || ""]
          }))
        }
      }
      this.events.set_group(w || false)
      u.bring_to_front()
      return l
    } finally {
      this.runtime_data.set_pasting(false)
    }
  }
  e.prototype.set_pre_paste = function (e) {
    this.pre_paste.push(e)
  }
  e.prototype.set_pre_paste_extend = function (e) {
    this.pre_paste_extend.push(e)
  }
  e.prototype.paste_extend = function (e, t, n) {
    var r
    if (undefined === n) {
      n = false
    }
    var i = this.events.get_group()
    this.events.set_group(i || true)
    this.runtime_data.set_pasting(true);
    (0, l.reset_all_block_id)(e)
    for (var o = 0; o < this.pre_paste_extend.length; o++) {
      e = (r = this.pre_paste_extend[o].call(this, e, t, n || false)).xml_blocks
      t = r.mouse_position
      n = r.is_move_to_default
    }
    if (e.length <= 1) {
      if (e[0]) {
        this._paste(e[0], t, n, true)
      }
      return void this.events.set_group(i)
    }
    var a = function (e) {
      var t = e.getAttribute("x")
      var n = e.getAttribute("y")
      return {
        x: parseInt(t || "0", 10),
        y: parseInt(n || "0", 10)
      }
    }
    var /* [auto-meaningful-name] */this$resizes_enabled_ = this.resizes_enabled_
    if (this$resizes_enabled_) {
      this.set_resizes_enabled(false)
    }
    if (t) {
      this._paste(e[0], t, n)
    } else {
      t = this._paste(e[0], undefined, n) || {
        x: 0,
        y: 0
      }
    }
    for (o = 1, c = a(e[0]), u = t.x - c.x, f = t.y - c.y, e$length = e.length, undefined; o < e$length; o++) {
      var c
      var u
      var f
      var /* [auto-meaningful-name] */e$length
      var h = e[o]
      var p = a(e[o])
      var _ = {
        x: p.x + u,
        y: p.y + f
      }
      this._paste(h, _, false)
    }
    this.runtime_data.set_pasting(false)
    this.events.set_group(i)
    if (this$resizes_enabled_) {
      this.set_resizes_enabled(true)
    }
  }
  e.prototype.get_paste_offset = function () {
    var e = {
      left: 40,
      top: 30
    }
    var t = (0, l.get_translate)(this.get_parent_svg())
    e.left += t.x
    return e
  }
  e.prototype.record_delete_areas = function () {
    this.is_flyout_rect_dirty_ = true
    if ("none" === this.get_options().delete_area) {
      this.delete_area_toolbox_ = undefined
      return void (this.delete_area_flyout = undefined)
    }
    if (this.flyout_) {
      this.delete_area_toolbox_ = this.flyout_.get_client_rect()
    } else {
      if (this.toolbox_) {
        this.delete_area_toolbox_ = this.toolbox_.get_client_rect()
      } else {
        this.delete_area_toolbox_ = undefined
      }
    }
  }
  e.prototype.is_delete_area = function (e) {
    var t = o.vec2.fromValues(e.clientX, e.clientY)
    var n = this.get_delete_area_flyout()
    return this.delete_area_toolbox_ && this.delete_area_toolbox_.contains(t) || n && n.contains(t) ? s.DeleteArea.DELETE_AREA_TOOLBOX : s.DeleteArea.DELETE_AREA_NONE
  }
  e.prototype.set_gestures_enabled = function (e) {
    if (this.gestures_enabled !== e) {
      if (this.options.pinch) {
        if (e) {
          this.runtime_data.register_finger_events()
        } else {
          this.runtime_data.unregister_finger_events()
        }
      }
      this.gestures_enabled = e
    }
  }
  e.prototype.is_gestures_enabled = function () {
    return this.gestures_enabled
  }
  e.prototype.on_wheel_scroll = function (e) {
    if (this.current_gesture_) {
      this.current_gesture_.cancel()
    }
    if (this.gestures_enabled) {
      var t = 1 === e.deltaMode ? 15 : 1
      if (e.ctrlKey) {
        var n = h.is.mac() ? 50 : 100
        var r = -e.deltaY / n * t
        var i = this.utils.mouse_to_svg(e, this.get_parent_svg(), this.get_inverse_screen_ctm())
        this.zoom(i.x, i.y, r)
      } else {
        this.widget_div.hide(true)
        var o = this.scroll_xy[0] - e.deltaX * t
        var a = this.scroll_xy[1] - e.deltaY * t
        if (e.shiftKey && 0 === e.deltaX) {
          o = this.scroll_xy[0] - e.deltaY * t
          a = this.scroll_xy[1]
        }
        this.start_drag_metrics = this.get_metrics()
        this.scroll(o, a)
      }
      e.preventDefault()
    }
  }
  e.prototype.show_context_menu = function (e) {
    var t = this
    if (!this.options.readOnly && !this.is_flyout) {
      var n = this.utils.mouse_to_svg(e, this.get_parent_svg(), this.get_inverse_screen_ctm())
      var r = this.get_origin_offset_in_pixels()
      var i = (0, l.get_translate)(this.get_parent_svg())
      var o = {
        x: (n.x + i.x - r[0]) / this.scale,
        y: (n.y + i.y - r[1]) / this.scale
      }
      var a = []
      this.options.context_menu.workspace.forEach(function (e) {
        if ("number" === typeof e) {
          switch (e) {
            case s.WorkspaceOptionType.CLEAN_UP:
              return t.add_clean_up_option(a)
            case s.WorkspaceOptionType.PASTE:
              return t.add_paste_option(a, o)
            case s.WorkspaceOptionType.DELETE_ALL:
              return t.add_delete_all_blocks_option(a)
            case s.WorkspaceOptionType.COPY_ALL:
              return t.add_copy_all_blocks_option(a)
            case s.WorkspaceOptionType.GLOBAL_COMMENT:
              return t.add_global_comment_option(a, o)
            default:
              return console.warn("Undefined workspace menu option: " + e)
          }
        }
        var n = e(t)
        if (n) {
          a.push(n)
        }
      })
      var c = {
        source: "workspace",
        options: a
      }
      this.context_menu.show(e, c, this.RTL)
    }
  }
  e.prototype.add_paste_option = function (e, t) {
    var n = this
    var r = this.runtime_data.clipboard.get_content()
    e.push({
      text: this.Msg.PASTE,
      name: "paste",
      enabled: undefined != r,
      callback: function () {
        if (r) {
          if (Array.isArray(r)) {
            n.paste_extend(r, t)
          } else {
            n.paste(r, t)
          }
        }
      }
    })
  }
  e.prototype.add_clean_up_option = function (e) {
    if (this._scrollbar) {
      var t = this.get_top_elements(true)
      var n = {
        text: this.Msg.CLEAN_UP,
        name: "clean_up",
        enabled: t.length > 1,
        callback: this.clean_up.bind(this)
      }
      e.push(n)
    }
  }
  e.prototype.add_delete_all_blocks_option = function (e, t, n) {
    var r = this
    if (undefined === t) {
      t = true
    }
    var i = this.get_top_elements(true, t)
    var o = []
    function a(e) {
      if ((0, d.is_block_svg)(e)) {
        if (e.is_deletable()) {
          o = o.concat(e.get_descendants())
        } else {
          for (var t = e.get_children(), n = 0; n < t.length; n++) {
            a(t[n])
          }
        }
      } else if (e.is_deletable()) {
        o = o.concat([e])
      }
    }
    for (var s = 0; s < i.length; s++) {
      a(i[s])
    }
    var u = this.events.get_group()
    var l = function e() {
      if ("" === u) {
        r.events.set_group(true)
        u = r.events.get_group()
      } else {
        r.events.set_group(u)
      }
      var t = o.shift()
      if (t) {
        if (t.workspace) {
          t.dispose(false, true)
          window.setTimeout(e, 10)
        } else {
          e()
        }
      }
      r.events.set_group(false)
    }
    var f = (0, c.cal_num_blocks)(o)
    var h = {
      text: this.Msg.DELETE_X_BLOCKS.replace("%1", String(f)),
      name: "delete_all",
      enabled: f > 0,
      callback: function () {
        if (r.current_gesture_) {
          r.current_gesture_.cancel()
        }
        if (!n || f < 2) {
          l()
        } else {
          n(l)
        }
      }
    }
    e.push(h)
  }
  e.prototype.add_copy_all_blocks_option = function (e, t) {
    var n = this
    if (undefined === t) {
      t = true
    }
    var r = this.get_top_elements(true, t)
    var i = 0
    r.forEach(function (e) {
      if ((0, d.is_block_svg)(e)) {
        i += (0, c.cal_num_blocks)(e.get_descendants())
      } else {
        i++
      }
    })
    e.push({
      text: this.Msg.COPY_ALL.replace("%1", String(i)),
      name: "copy_all",
      enabled: i > 0,
      callback: function () {
        n.runtime_data.clipboard.copy_all(r)
      }
    })
  }
  e.prototype.add_global_comment_option = function (e, t) {
    var n = this
    if ("simplified" !== this.options.comment_type) {
      var r = {
        text: this.Msg.GLOBAL_COMMENT,
        name: "global_comment",
        enabled: true,
        callback: function () {
          var e = n.events.get_group()
          n.events.set_group(e || true)
          var r = n.new_workspace_comment(t)
          r.init_svg()
          r.set_expanded(true)
          r.focus()
          n.events.set_group(e)
        }
      }
      e.push(r)
    } else {
      console.warn("Trying to create global comment when using simplified comment. Ignoring this command. ")
    }
  }
  e.prototype.new_workspace_comment = function (e, t) {
    return this.workspace_comment_factory({
      workspace: this,
      type: this.options.comment_type,
      position: e,
      opt_id: t
    })
  }
  e.prototype.update_toolbox = function (e) {
    var t = "string" === typeof e ? this.xml.text_to_dom(e) : e
    if (undefined != t) {
      if (!this.options.toolbox_config) {
        throw new Error("Existing toolbox is undefined.  Can't create new toolbox.")
      }
      if (t.getElementsByTagName("category").length) {
        if (!this.toolbox_) {
          throw new Error("Existing toolbox has no categories.  Can't change mode.")
        }
        this.options.toolbox_config = t
        this.toolbox_.populate(t)
      } else {
        if (!this.flyout_) {
          throw new Error("Existing toolbox has categories.  Can't change mode.")
        }
        this.options.toolbox_config = t
        this.flyout_.show(t.childNodes)
      }
    } else if (this.options.toolbox_config) {
      throw new Error("Can't nullify an existing toolbox.")
    }
  }
  e.prototype.translate = function (e, t) {
    if (this.use_workspace_drag_surface_ && this.is_drag_surface_active_ && this.workspace_drag_surface_) {
      this.workspace_drag_surface_.translate_surface(e + this.offset[0], t + this.offset[1])
    } else {
      var n = "translate(" + e + ", " + t + ") scale(" + this.scale + ")"
      if (undefined != this.svg_block_canvas_) {
        this.svg_block_canvas_.setAttribute("transform", n)
      }
      if (undefined != this.svg_bubble_canvas_) {
        this.svg_bubble_canvas_.setAttribute("transform", n)
      }
    }
    if (this.block_drag_surface_) {
      this.block_drag_surface_.translate_and_scale_group(e + this.offset[0], t + this.offset[1], this.scale)
    }
  }
  e.prototype.new_block = function (e, t) {
    return this.block_factory({
      workspace: this,
      id: t,
      prototype_name: e
    })
  }
  e.prototype.get_svg_xy = function (e) {
    var t = o.vec2.create()
    var n = e
    var r = 1
    var i = this.get_canvas()
    var a = this.get_bubble_canvas()
    if (undefined != i && i.contains(n) || undefined != a && a.contains(n)) {
      r = this.scale
    }
    do {
      var s = this.utils.get_relative_xy(n)
      if (!(n != this.get_canvas() && n != this.get_bubble_canvas())) {
        r = 1
      }
      o.vec2.scaleAndAdd(t, t, s, r)
      n = n.parentNode
    } while (n && n != this.get_parent_svg())
    return t
  }
  e.prototype.resize = function () {
    if (this.toolbox_) {
      this.toolbox_.position()
    }
    if (this.flyout_) {
      this.flyout_.position()
    }
    if (this._scrollbar) {
      this._scrollbar.resize()
    } else {
      this.translate(this.scroll_xy[0], this.scroll_xy[1])
    }
    this.update_screen_calculations()
  }
  e.prototype.update_screen_calculations = function () {
    this.inverse_screen_CTM_dirty_ = true
    this.workspace_area_dirty_ = true
    this.record_cached_areas()
  }
  e.prototype.record_cached_areas = function () {
    this.record_blocks_area_()
    this.record_delete_areas()
  }
  e.prototype.record_blocks_area_ = function () {
    var e = this.get_injection_div()
    this.blocks_area_ = e ? e.getBoundingClientRect() : undefined
  }
  e.prototype.get_canvas = function () {
    return this.svg_block_canvas_
  }
  e.prototype.is_dragging = function () {
    return this.current_gesture_ && this.current_gesture_.is_dragging()
  }
  e.prototype.set_resizes_enabled = function (e) {
    var t = !this.resizes_enabled_ && e
    this.resizes_enabled_ = e
    if (t) {
      this.resize_contents()
    }
  }
  e.prototype.cancel_current_gesture = function () {
    if (this.current_gesture_) {
      this.current_gesture_.cancel()
    }
  }
  e.prototype.get_audio_manager = function () {
    return this.audio_manager_
  }
  e.prototype.get_gesture = function (e) {
    var t = "mousedown" == e.type || "touchstart" == e.type
    var /* [auto-meaningful-name] */this$current_gesture_ = this.current_gesture_
    return this$current_gesture_ ? t && this$current_gesture_.has_started() ? void this$current_gesture_.cancel() : this$current_gesture_ : t ? (this.current_gesture_ = this.gesture_factory({
      event: e,
      workspace: this
    }), this.current_gesture_) : undefined
  }
  e.prototype.get_grid = function () {
    return this.grid_
  }
  e.prototype.is_inside_workspace_area = function (e) {
    var t = o.vec2.fromValues(e.clientX, e.clientY)
    var n = this.get_workspace_area()
    return !!n && (0, u.contains)(n, t)
  }
  e.prototype.is_inside_blocks_area = function (e) {
    var t = o.vec2.fromValues(e.clientX, e.clientY)
    return !!(this.is_delete_area(e) || this.blocks_area_ && (0, u.contains)(this.blocks_area_, t))
  }
  e.prototype.setup_drag_surface = function () {
    if (this.use_workspace_drag_surface_ && this.workspace_drag_surface_ && !this.is_drag_surface_active_) {
      if (undefined == this.svg_block_canvas_) {
        throw new ReferenceError("Block Canvas not found when draging.")
      }
      this.is_drag_surface_active_ = true
      var e = this.svg_block_canvas_.previousSibling || undefined
      if (undefined != this.get_parent_svg()) {
        var t = this.utils.get_relative_xy(this.svg_block_canvas_)
        if (this.workspace_drag_surface_) {
          this.workspace_drag_surface_.set_contents_and_show(this.svg_block_canvas_, this.svg_bubble_canvas_, e, this.scale)
          this.workspace_drag_surface_.translate_surface(t[0] + this.offset[0], t[1] + this.offset[1])
        }
      }
    }
  }
  e.prototype.reset_drag_surface = function () {
    if (this.use_workspace_drag_surface_ && this.workspace_drag_surface_) {
      this.is_drag_surface_active_ = false
      var e = this.workspace_drag_surface_.get_surface_translation()
      this.workspace_drag_surface_.clear_and_hide(this.svg_group)
      var t = "translate(" + (e[0] - this.offset[0]) + ", " + (e[1] - this.offset[1]) + ") scale(" + this.scale + ")"
      if (undefined != this.svg_block_canvas_) {
        this.svg_block_canvas_.setAttribute("transform", t)
      }
      if (undefined != this.svg_bubble_canvas_) {
        this.svg_bubble_canvas_.setAttribute("transform", t)
      }
    }
  }
  e.prototype.refresh_toolbox_selection = function () {
    if (this.toolbox_) {
      if (this.toolbox_.flyout && !this.current_gesture_ && this.toolbox_refresh_enabled_) {
        this.toolbox_.refresh_selection()
      }
    } else {
      var /* [auto-meaningful-name] */this$target_workspace = this.target_workspace
      var t = null === this$target_workspace || undefined === this$target_workspace ? undefined : this$target_workspace.get_toolbox()
      if (this$target_workspace && t && t.flyout && !this$target_workspace.current_gesture_ && this$target_workspace.get_toolbox_refresh_enabled) {
        t.refresh_selection()
      }
    }
  }
  e.prototype.register_toolbox_category_callback = function (e, t) {
    if (this.toolbox_category_callbacks_) {
      this.toolbox_category_callbacks_[e] = t
    }
  }
  e.prototype.get_parent_svg = function () {
    if (this.cached_parent_svg_) {
      return this.cached_parent_svg_
    }
    for (var /* [auto-meaningful-name] */this$svg_group = this.svg_group; this$svg_group;) {
      if ("svg" == this$svg_group.tagName) {
        this.cached_parent_svg_ = this$svg_group
        return this$svg_group
      }
      this$svg_group = this$svg_group.parentNode
    }
    throw new Error("Workspace may not been init.")
  }
  e.prototype.get_blocks_bounding_box = function () {
    var e = this.get_top_blocks(false)
    this.workspace_comment_db.forEach(function (t) {
      e.push(t)
    })
    if (!e.length) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }
    }
    for (var t = e[0].get_bounding_rectangle(), n = 1; n < e.length; n++) {
      var r = e[n].get_bounding_rectangle()
      if (r.topLeft[0] < t.topLeft[0]) {
        t.topLeft[0] = r.topLeft[0]
      }
      if (r.bottomRight[0] > t.bottomRight[0]) {
        t.bottomRight[0] = r.bottomRight[0]
      }
      if (r.topLeft[1] < t.topLeft[1]) {
        t.topLeft[1] = r.topLeft[1]
      }
      if (r.bottomRight[1] > t.bottomRight[1]) {
        t.bottomRight[1] = r.bottomRight[1]
      }
    }
    return {
      x: t.topLeft[0],
      y: t.topLeft[1],
      width: t.bottomRight[0] - t.topLeft[0],
      height: t.bottomRight[1] - t.topLeft[1]
    }
  }
  e.prototype.set_resize_handler_wrapper = function (e) {
    this.resize_handler_wrapper_ = e
  }
  e.prototype.resize_contents = function () {
    if (this.resizes_enabled_ && this.rendered) {
      if (this._scrollbar) {
        this._scrollbar.resize()
      }
      this.inverse_screen_CTM_dirty_ = true
    }
  }
  e.prototype.get_bubble_canvas = function () {
    return this.svg_bubble_canvas_
  }
  e.prototype.add_flyout = function (e) {
    var t = Object.assign({}, this.options, {
      parentWorkspace: this
    })
    this.flyout_ = this.flyout_factory(t)
    return this.flyout_.create_dom(e)
  }
  e.prototype.get_toolbox_category_callback = function (e) {
    return this.toolbox_category_callbacks_ ? this.toolbox_category_callbacks_[e] : undefined
  }
  e.prototype.update_screen_calculations_if_scrolled = function () {
    var e = (0, l.get_document_scroll)()
    if (!(undefined != this.last_recorded_page_scroll_ && o.vec2.equals(this.last_recorded_page_scroll_, e))) {
      this.last_recorded_page_scroll_ = e
      this.update_screen_calculations()
    }
  }
  e.prototype.mark_focused = function () {
    if (this.options.parentWorkspace instanceof t) {
      this.options.parentWorkspace.mark_focused()
    } else {
      this.Blink.mainWorkspace = this
      this.set_browser_focus()
    }
  }
  e.prototype.set_browser_focus = function () {
    if (document.activeElement) {
      document.activeElement.blur()
    }
    try {
      this.get_parent_svg().focus()
    } catch (t) {
      try {
        if (e = this.get_parent_svg()) {
          e.setActive()
        }
      } catch (t) {
        var e
        if (e = this.get_parent_svg()) {
          e.focus()
        }
      }
    }
  }
  e.prototype.get_inverse_screen_ctm = function () {
    var e = this.get_parent_svg()
    if (this.inverse_screen_CTM_dirty_ && undefined != e) {
      var t = e.getScreenCTM()
      if (t) {
        this.inverse_screen_CTM_ = t.inverse()
        this.inverse_screen_CTM_dirty_ = false
      }
    }
    return this.inverse_screen_CTM_
  }
  e.prototype.get_origin_offset_in_pixels = function () {
    if (undefined == this.svg_block_canvas_) {
      throw new ReferenceError("Block Canvas not found when get origin offset.")
    }
    return this.utils.get_injection_div_xy(this.svg_block_canvas_)
  }
  e.prototype.get_injection_div = function () {
    return this.injection_div_
  }
  e.prototype.dispose = function () {
    var /* [auto-meaningful-name] */this$grid_
    this.rendered = false
    if (this.current_gesture_) {
      this.current_gesture_.cancel()
    }
    this.listeners_.length = 0
    this.clear()
    this.workspace_db.remove(this)
    if (this.svg_group) {
      (0, l.remove_node)(this.svg_group)
      this.svg_group = undefined
    }
    this.svg_block_canvas_ = undefined
    this.svg_bubble_canvas_ = undefined
    if (this.toolbox_) {
      this.toolbox_.dispose()
      this.toolbox_ = undefined
    }
    if (this.flyout_) {
      this.flyout_.dispose()
      this.flyout_ = undefined
    }
    if (this._scrollbar) {
      this._scrollbar.dispose()
      delete this._scrollbar
    }
    if (!(null === (this$grid_ = this.grid_) || undefined === this$grid_)) {
      this$grid_.dispose()
    }
    this.grid_ = undefined
    this.toolbox_category_callbacks_ = {}
    this.flyout_button_callbacks_ = {}
    this.custom_flyout_buttons.clear()
    if (!this.options.parentWorkspace) {
      var t = this.get_parent_svg()
      if (undefined == t) {
        throw new ReferenceError()
      }
      var /* [auto-meaningful-name] */t$parentNode = t.parentNode
      if (undefined != t$parentNode) {
        (0, l.remove_node)(t$parentNode)
      }
    }
    if (this.resize_handler_wrapper_) {
      this.events.unbind_event(this.resize_handler_wrapper_)
      this.resize_handler_wrapper_ = undefined
    }
  }
  e.prototype.set_visible = function (e) {
    if (this._scrollbar) {
      this._scrollbar.set_container_visible(e)
    }
    var t = this.get_flyout()
    if (undefined != t) {
      t.set_container_visible(e)
    }
    var n = this.get_parent_svg()
    if (undefined == n) {
      throw new ReferenceError("Workspace may not been init.")
    }
    n.style.display = e ? "block" : "none"
    if (this.toolbox_) {
      this.toolbox_.html_div.style.display = e ? "block" : "none"
    }
    if (e) {
      for (var r = this.get_all_blocks(), i = r.length - 1; i >= 0; i--) {
        r[i].render(false)
      }
      this.resize()
    } else {
      this.utils.hide_chaff(true)
    }
  }
  e.prototype.glow_stack = function (e, t) {
    var n = this.get_block_by_id(e)
    if (!n) {
      throw new Error("Tried to glow stack on block that does not exist.")
    }
    n.set_glow_stack(t)
  }
  e.prototype.on_mouse_down = function (e) {
    var t = this.get_gesture(e)
    if (t) {
      t.handle_ws_start(e, this)
    }
  }
  e.prototype.start_drag = function (e, t) {
    var n = this.utils.mouse_to_svg(e, this.get_parent_svg(), this.get_inverse_screen_ctm())
    n.x /= this.scale
    n.y /= this.scale
    var r = o.vec2.fromValues(n.x, n.y)
    this.drag_delta_xy_ = o.vec2.sub(t, t, r)
  }
  e.prototype.move_drag = function (e) {
    var t = this.utils.mouse_to_svg(e, this.get_parent_svg(), this.get_inverse_screen_ctm())
    t.x /= this.scale
    t.y /= this.scale
    var n = o.vec2.fromValues(t.x, t.y)
    return o.vec2.fromValues(this.drag_delta_xy_[0] + n[0], this.drag_delta_xy_[1] + n[1])
  }
  e.prototype.is_draggable = function () {
    return !!this._scrollbar
  }
  e.prototype.clean_up = function (e) {
    this.set_resizes_enabled(false)
    var t = this.events.get_group()
    this.events.set_group(t || true)
    for (var n = this.get_top_elements(true), r = o.vec2.fromValues(0, 0), i = 0; i < n.length; i++) {
      n[i].sort(r)
    }
    if (e && this._scrollbar) {
      var a = this.get_metrics()
      var s = -a.contentLeft - e[0]
      var c = -a.contentTop - e[1]
      this._scrollbar.set(s, c)
    }
    this.events.set_group(t)
    this.set_resizes_enabled(true)
  }
  e.prototype.zoom = function (e, t, n) {
    var /* [auto-meaningful-name] */this$options$zoomOptions$scaleSpeed = this.options.zoomOptions.scaleSpeed
    var i = Math.pow(this$options$zoomOptions$scaleSpeed, n)
    var a = Math.max(this.options.zoomOptions.minScale, Math.min(this.scale * i, this.options.zoomOptions.maxScale))
    i = a / this.scale
    if (this.scale != a) {
      if (this._scrollbar && this.svg_block_canvas_) {
        var s = this.svg_block_canvas_.getCTM()
        if (!s) {
          return void console.error("Get Canvas CTM failed.")
        }
        var c = this.get_parent_svg().createSVGPoint()
        c.x = e
        c.y = t
        e = (c = c.matrixTransform(s.inverse())).x
        t = c.y
        var u = s.translate(e * (1 - i), t * (1 - i)).scale(i)
        o.vec2.set(this.scroll_xy, u.e, u.f)
      }
      this.set_scale(a)
    }
  }
  e.prototype.zoom_center = function (e) {
    var t = this.get_metrics()
    var n = t.viewWidth / 2
    var r = t.viewHeight / 2
    this.zoom(n, r, e)
  }
  e.prototype.zoom_to_fit = function () {
    var e = this.get_metrics()
    var t = this.get_blocks_bounding_box()
    var /* [auto-meaningful-name] */t$width = t.width
    var /* [auto-meaningful-name] */t$height = t.height
    if (t$width) {
      var /* [auto-meaningful-name] */e$viewWidth = e.viewWidth
      var /* [auto-meaningful-name] */e$viewHeight = e.viewHeight
      if (this.flyout_) {
        e$viewWidth -= this.flyout_.get_width()
      }
      if (!this._scrollbar) {
        t$width += e.contentLeft
        t$height += e.contentTop
      }
      var a = e$viewWidth / t$width
      var s = e$viewHeight / t$height
      this.set_scale(Math.min(a, s))
      this.scroll_center()
    }
  }
  e.prototype.scroll_center = function () {
    if (this._scrollbar) {
      this.widget_div.hide(true)
      this.utils.hide_chaff(false)
      var e = this.get_metrics()
      var t = (e.contentWidth - e.viewWidth) / 2
      if (this.flyout_) {
        t -= this.flyout_.get_width() / 2
      }
      var n = (e.contentHeight - e.viewHeight) / 2
      this._scrollbar.set(t, n)
    }
  }
  e.prototype.center_on_block = function (e) {
    if (this._scrollbar) {
      var t = this.get_block_by_id(e)
      if (t) {
        var n = t.get_relative_to_surface_xy()
        var r = t.get_height_width()
        var i = n[1] + r.height / 2
        var o = this.RTL ? -1 : 1
        var a = n[0] + o * r.width / 2
        var /* [auto-meaningful-name] */this$scale = this.scale
        var c = a * this$scale
        var u = i * this$scale
        var l = this.get_metrics()
        var f = c - l.contentLeft
        var d = u - l.contentTop
        var h = f - l.viewWidth / 2
        var p = d - l.viewHeight / 2
        this.utils.hide_chaff()
        this._scrollbar.set(h, p)
      }
    }
  }
  e.prototype.set_scale = function (e) {
    var /* [auto-meaningful-name] */this$grid_
    var n
    e = Math.max(this.options.zoomOptions.minScale, Math.min(e, this.options.zoomOptions.maxScale))
    if (!this.rendered) {
      this.scale = e
    }
    if (this.events.is_enabled()) {
      n = this.ui_event_factory({
        type: s.UIEventType.SCALE,
        workspace_id: this.id,
        old_value: this.scale,
        new_value: e
      })
    }
    this.scale = e
    this.events.fire(n)
    if (!(null === (this$grid_ = this.grid_) || undefined === this$grid_)) {
      this$grid_.set_scale(this.scale)
    }
    if (this._scrollbar) {
      this._scrollbar.resize()
    } else {
      this.translate(this.scroll_xy[0], this.scroll_xy[1])
    }
    this.utils.hide_chaff(false, true)
    var r = function (t) {
      var n = t.getAttribute("transform")
      var r = "scale(" + e + ")"
      t.setAttribute("transform", n ? n.replace(/scale\([0-9\.]+\)/, r) : r)
    }
    if (this.svg_block_canvas_) {
      r(this.svg_block_canvas_)
    }
    if (this.svg_bubble_canvas_) {
      r(this.svg_bubble_canvas_)
    }
    if (this.block_drag_surface_) {
      this.block_drag_surface_.set_scale(e)
    }
    if (this.flyout_) {
      this.flyout_.reflow()
    }
  }
  e.prototype.scroll = function (e, t) {
    if (this._scrollbar && this.start_drag_metrics) {
      var /* [auto-meaningful-name] */this$start_drag_metrics = this.start_drag_metrics
      e = Math.min(e, -this$start_drag_metrics.contentLeft)
      t = Math.min(t, -this$start_drag_metrics.contentTop)
      e = Math.max(e, this$start_drag_metrics.viewWidth - this$start_drag_metrics.contentLeft - this$start_drag_metrics.contentWidth)
      t = Math.max(t, this$start_drag_metrics.viewHeight - this$start_drag_metrics.contentTop - this$start_drag_metrics.contentHeight)
      this.widget_div.hide(true)
      this._scrollbar.set(-e - this$start_drag_metrics.contentLeft, -t - this$start_drag_metrics.contentTop)
    }
  }
  e.getDimensionsPx_ = function (e) {
    var t = 0
    var n = 0
    if (e) {
      t = e.get_width()
      n = e.get_height()
    }
    return {
      width: t,
      height: n
    }
  }
  e.getContentDimensions_ = function (e, t) {
    return e._scrollbar ? this.getContentDimensionsBounded_(e, t) : this.getContentDimensionsExact_(e)
  }
  e.getContentDimensionsExact_ = function (e) {
    var t = e.get_blocks_bounding_box()
    var n = e.get_scale()
    var r = t.width * n
    var i = t.height * n
    var o = t.x * n
    var a = t.y * n
    return {
      left: o,
      top: a,
      right: o + r,
      bottom: a + i,
      width: r,
      height: i
    }
  }
  e.getContentDimensionsBounded_ = function (e, t) {
    var n = this.getContentDimensionsExact_(e)
    var r = t.width || 0
    var i = t.height || 0
    var o = r
    var a = i
    var /* [auto-meaningful-name] */e$options$workspace$content_margin = e.options.workspace.content_margin
    if ("number" === typeof e$options$workspace$content_margin) {
      o = e$options$workspace$content_margin
      a = e$options$workspace$content_margin
    } else {
      var c = e$options$workspace$content_margin.match(/[0-9]+%/)
      var u = c && c[0] && parseFloat(c[0]) / 100
      if ("number" !== typeof u || isNaN(u)) {
        console.error("option workspace.content_margin is not a valid percentage. Using default value (50%).")
        u = .5
      }
      o = r * u
      a = i * u
    }
    var l = Math.min(n.left - o, n.right - r)
    var f = Math.max(n.right + o, n.left + r)
    var d = Math.min(n.top - a, n.bottom - i)
    return {
      left: l,
      top: d,
      height: Math.max(n.bottom + a, n.top + i) - d,
      width: f - l
    }
  }
  e.prototype.get_metrics = function () {
    var e = t.getDimensionsPx_(this.toolbox_)
    var n = this.flyout_ || this.toolbox_ && this.toolbox_.flyout
    var r = n && !n.is_auto_close() && n.is_visible() ? t.getDimensionsPx_(n) : {
      width: 0,
      height: 0
    }
    var i = this.utils.get_svg_size(this.get_parent_svg())
    var o = t.getContentDimensions_(this, i)
    var a = 0
    if (this.toolbox_ && this.toolbox_position == s.TOOLBOX_POSITION.LEFT) {
      a += e.width
      a += r.width
    }
    var c = 0
    if (this.toolbox_ && this.toolbox_position == s.TOOLBOX_POSITION.TOP) {
      c = e.height
      c += r.height
    }
    return {
      absoluteTop: c,
      absoluteLeft: a,
      contentHeight: o.height,
      contentWidth: o.width,
      contentTop: o.top,
      contentLeft: o.left,
      viewHeight: i.height || 0,
      viewWidth: i.width || 0,
      viewTop: -this.scroll_xy[1],
      viewLeft: -this.scroll_xy[0],
      flyoutWidth: r.width,
      flyoutHeight: r.height,
      toolboxWidth: e.width,
      toolboxHeight: e.height,
      toolboxPosition: this.toolbox_position
    }
  }
  e.prototype.set_metrics = function (e) {
    var /* [auto-meaningful-name] */this$grid_
    if (!this.get_scrollbar()) {
      throw new Error("Attempt to set top level workspace scroll without scrollbars.")
    }
    var n = this.get_metrics()
    if ((0, d.is_number)(e.x)) {
      this.content_offset_by_view[0] = e.x
      this.scroll_xy[0] = -n.contentLeft - e.x
    }
    if ((0, d.is_number)(e.y)) {
      this.content_offset_by_view[1] = e.y
      this.scroll_xy[1] = -n.contentTop - e.y
    }
    var r = this.scroll_xy[0]
    var i = this.scroll_xy[1]
    this.translate(r, i)
    if (!(null === (this$grid_ = this.grid_) || undefined === this$grid_)) {
      this$grid_.move_to(r, i)
    }
  }
  e.prototype.set_toolbox_refresh_enabled = function (e) {
    var t = !this.toolbox_refresh_enabled_ && e
    this.toolbox_refresh_enabled_ = e
    if (t) {
      this.refresh_toolbox_selection()
    }
  }
  e.prototype.get_toolbox_refresh_enabled = function () {
    return this.toolbox_refresh_enabled_
  }
  e.prototype.clear = function (e) {
    if (undefined === e) {
      e = true
    }
    this.set_resizes_enabled(false)
    this.is_clearing = true
    var t = this.events.get_group()
    for (t || this.events.set_group(true), e && this.widget_div && this.widget_div.hide(true), e && this.Blink.tooltip && this.Blink.tooltip.hide(); this.top_blocks_.length;) {
      this.top_blocks_[0].dispose()
    }
    for (; this.top_comments.length;) {
      this.top_comments[0].dispose()
    }
    if (!t) {
      this.events.set_group(false)
    }
    this.is_clearing = false
    this.set_resizes_enabled(true)
  }
  e.prototype.register_button_callback = function (e, t) {
    if (!(0, d.is_func)(t)) {
      console.error("Button callbacks must be functions.")
    }
    if (this.flyout_button_callbacks_) {
      this.flyout_button_callbacks_[e] = t
    }
  }
  e.prototype.get_button_callback = function (e) {
    return this.flyout_button_callbacks_ ? this.flyout_button_callbacks_[e] : undefined
  }
  e.prototype.remove_button_callback = function (e) {
    if (this.flyout_button_callbacks_) {
      this.flyout_button_callbacks_[e] = undefined
    }
  }
  e.prototype.remove_toolbox_category_callback = function (e) {
    if (this.toolbox_category_callbacks_) {
      this.toolbox_category_callbacks_[e] = undefined
    }
  }
  e.prototype.clear_gesture = function () {
    this.current_gesture_ = undefined
  }
  e.prototype.register_flyout_button = function (e, t) {
    this.custom_flyout_buttons.set(e, t)
  }
  e.prototype.get_custom_flyout_button = function (e) {
    return this.custom_flyout_buttons.get(e)
  }
  e.prototype.set_read_only = function (e) {
    this.options.readOnly = e
  }
  e.prototype.set_hotkey_enable = function (e) {
    this.is_hotkey_enable = e
  }
  e.prototype.get_hotkey_enable = function () {
    return this.is_hotkey_enable
  }
  e.prototype.show_external_comment_editor = function (e) {
    return (0, r.__awaiter)(this, undefined, undefined, function () {
      return (0, r.__generator)(this, function (t) {
        return [2, window.prompt("Enter comment text", e) || ""]
      })
    })
  }
  e.prototype.register_comment_editor = function (e) {
    this.show_external_comment_editor = e
  }
  e.prototype.for_each_element_in_stack = function (e, t, n) {
    var r
    if (undefined === n) {
      n = false
    }
    var i = this.Blink.mainWorkspace.get_element_from_db(e)
    if (!(null === (r = null === i || undefined === i ? undefined : i.get_top_parent()) || undefined === r)) {
      r.for_each_descendant_element(t, n)
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Blink)], e.prototype, "Blink", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Msg)], e.prototype, "Msg", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.utils)], e.prototype, "utils", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.context_menu)], e.prototype, "context_menu", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.xml)], e.prototype, "xml", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.widget_div)], e.prototype, "widget_div", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.runtime_data)], e.prototype, "runtime_data", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.theme)], e.prototype, "theme", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.workspace_db)], e.prototype, "workspace_db", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.UIEvent)], e.prototype, "ui_event_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.ChangeEvent)], e.prototype, "change_event_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.CreateEvent)], e.prototype, "create_event_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.WorkspaceComment)], e.prototype, "workspace_comment_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.BlockSvg)], e.prototype, "block_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Toolbox)], e.prototype, "toolbox_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.VerticalFlyout)], e.prototype, "flyout_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Gesture)], e.prototype, "gesture_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.ConnectionDB)], e.prototype, "connection_db_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.WorkspaceAudio)], e.prototype, "workspace_audio_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Grid)], e.prototype, "grid_factory", undefined)
  return e = t = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.WorkspaceSvg = p
