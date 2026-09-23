/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2212
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.WorkspaceComment = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 258 */"@kitten-team/gl-matrix")
var a = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var s = require(/* 195 */"../../123/195/index")
var c = require(/* 763 */"./2169/763")
var u = require(/* 537 */"../../123/537")
var l = require(/* 123 */"../../123/index")
var f = require(/* 293 */"../../123/293")
var d = require(/* 214 */"../../1022/214")
var h = require(/* 977 */"./977")
var p = [214, 126]
var _ = [140, 68]
var A = [40, 40]
var g = function (e) {
  function t(t, n, r, i) {
    var a = e.call(this, t) || this
    a.element_type = "comment"
    a.SIZE = 24
    a.width = A[0]
    a.height = A[1]
    a.left_top_offset = [-12, -12]
    a.color_theme = "BLUE"
    a.text_ = ""
    a.bubble_width_ = p[0]
    a.bubble_height_ = p[1]
    a.parent_width_ = 0
    a.relative_position_ = o.vec2.create()
    a.expanded_ = false
    a.prev_text_l = 0
    a.is_textarea_focused = false
    a.auto_layout_ = true
    a.parent_block_ = n
    var s = a.workspace.is_resizes_enabled()
    a.workspace.set_resizes_enabled(false)
    a.events.disable()
    a.id = undefined != i ? i : (0, f.gen_uid)()
    a.svg_group.classList.add("blocklyWorkspaceComment")
    a.update_movable()
    if (n) {
      if (n.is_rendered()) {
        a.parent_width_ = n.first_row_width
        a.relative_position_ = o.vec2.fromValues(a.parent_width_ + 60, n.first_row_height / 2)
      }
      a.deletable_ = false
    }
    var c = undefined
    if (r) {
      if (a.parent_block_) {
        c = (0, d.clone_deep)(a.get_relative_position())
        a.set_relative_position(o.vec2.fromValues(r.x, r.y))
        var u = a.parent_block_.get_relative_to_surface_xy()
        a.translate(o.vec2.add(u, u, a.relative_position_))
      } else {
        a.translate(o.vec2.fromValues(r.x, r.y))
      }
    }
    t.workspace_comment_db.set(a.id, a)
    if (!n) {
      t.add_top_comment(a)
    }
    a.init_events()
    a.events.enable()
    if (a.events.is_enabled()) {
      if (a.parent_block_) {
        var l = a.change_event_factory("comment", {
          block: a.parent_block_,
          old_value: undefined,
          new_value: a.id
        })
        a.events.fire(l)
      } else {
        a.events.fire(a.create_event_factory({
          block: a
        }))
      }
      if (r && a.parent_block_) {
        var h = a.move_event_factory({
          block: a
        })
        h.set_record_undo(false)
        if (c) {
          h.set_old_coord(c)
        }
        h.record_new()
        a.events.fire(h)
      }
    }
    a.workspace.set_resizes_enabled(s)
    return a
  }
  (0, r.__extends)(t, e)
  t.prototype.init_svg = function () {
    var e
    if (this.parent_block_ && !this.svg_line_) {
      this.svg_line_ = (0, l.create_svg_element)("line", {
        class: "blocklyCommentLine",
        x1: 0,
        y1: 0
      }, this.svg_group)
      this.svg_line_.style.stroke = s.THEME_COLOR_MAP[this.color_theme].toString()
    }
    if (!this.svg_icon) {
      this.svg_icon = (0, l.create_svg_element)("g", {
        class: "blocklyCommentGroup",
        filter: "url(#" + c.FILTER.BOXSHADOW + ")"
      })
      this.draw_icon(this.svg_icon)
      this.events.bind_event_with_checks(this.svg_icon, "mouseup", this, this.on_icon_click)
    }
    this.reposition()
    if (this.expanded_) {
      this.show_editor()
    } else {
      this.update_icon()
    }
    this.rendered = true
    if (!(null === (e = this.workspace.get_canvas()) || undefined === e)) {
      e.appendChild(this.svg_group)
    }
  }
  t.prototype.update_icon = function () {
    if (this.svg_icon) {
      this.svg_icon.setAttribute("transform", "translate(" + this.left_top_offset[0] + ", " + this.left_top_offset[1] + ")")
      if (!this.expanded_) {
        this.svg_group.appendChild(this.svg_icon)
      }
    }
  }
  t.prototype.get_icon = function () {
    return this.svg_icon
  }
  t.prototype.draw_line = function () {
    if (this.parent_block_ && this.svg_group && this.svg_line_) {
      var e = this.compute_line_connect_position()
      if (e[0] !== Number(this.svg_line_.getAttribute("x2"))) {
        this.svg_line_.setAttribute("x2", "" + e[0])
      }
      if (e[1] !== Number(this.svg_line_.getAttribute("y2"))) {
        this.svg_line_.setAttribute("y2", "" + e[1])
      }
    }
  }
  t.prototype.draw_icon = function (e, t, n) {
    t = t || this.SIZE
    n = n || "url(#CommentLinearGradient-" + this.color_theme + ")";
    (0, l.create_svg_element)("circle", {
      class: "blocklyCommentShape",
      r: t / 2,
      cx: t / 2,
      cy: t / 2,
      fill: n
    }, e);
    (0, l.create_svg_element)("path", {
      class: "blocklyCommentSymbol",
      transform: "scale(" + t / 24 + ") translate(4,4)",
      d: "M6.98347343,1.49411736 C7.33446274,1.16471383 7.86095956,1 8.38745638,1 C8.91395321,1 9.44045003,1.16471383 9.79146505,1.49411736 C10.2301953,1.82354502 10.4057028,2.23529341 10.4057028,2.72941077 C10.4057028,3.22352813 10.2301953,3.63530065 9.79146505,3.96470418 C9.35270913,4.29413184 8.91395321,4.45882154 8.38745638,4.45882154 C7.86095956,4.45882154 7.33446274,4.29413184 6.89573253,3.96470418 C6.54471751,3.63530065 6.28146909,3.22352813 6.28146909,2.72941077 C6.3692357,2.23529341 6.54471751,1.82354502 6.98347343,1.49411736 L6.98347343,1.49411736 Z M10.3500141,14.3956806 C9.75084061,14.5982168 9.33065616,14.744752 9.08946072,14.8352862 C8.6507048,15 8.21197458,15 7.68547776,15 C6.89573253,15 6.19372819,14.8352862 5.75497227,14.4235378 C5.31624206,14.0117653 5.05299365,13.5999928 5.05299365,13.0235305 C5.05299365,12.7764719 5.05299365,12.611758 5.14073455,12.3646994 C5.14073455,12.1176407 5.22847545,11.870582 5.31624206,11.6235233 L6.19372819,8.90587781 C6.28146909,8.65881913 6.3692357,8.41176045 6.3692357,8.16470177 C6.4569766,7.91764308 6.4569766,7.75295338 6.4569766,7.5058947 C6.4569766,7.17646704 6.3692357,6.92940836 6.19372819,6.76471866 C6.01822068,6.60000483 5.75497227,6.60000483 5.31624206,6.60000483 C5.05299365,6.60000483 4.87748614,6.60000483 4.61423772,6.68234968 C4.52669943,6.70973993 4.43188454,6.73712818 4.32979305,6.76451443 C4.19006969,6.80197087 4.04642345,6.71909078 4.00894402,6.57937358 C4.00300701,6.55724137 4,6.53442576 4,6.51151108 C4,6.30823881 4.12437054,6.12566505 4.31352762,6.05123915 C5.07451793,5.75187496 5.58425502,5.57793699 5.84273888,5.52942525 C6.3692357,5.36471142 6.80796592,5.28236657 7.33446274,5.28236657 C8.12420797,5.28236657 8.82621231,5.44705627 9.26496823,5.85882878 C9.70369844,6.18823231 9.96694685,6.68234968 9.96694685,7.25883602 L9.96694685,7.91764308 C9.96694685,8.24707075 9.87920595,8.49412943 9.79146505,8.74118811 L8.91395321,11.4588336 C8.82621231,11.7058923 8.73847141,11.952951 8.73847141,12.2000097 C8.6507048,12.4470683 8.6507048,12.694127 8.6507048,12.8588167 C8.6507048,13.1882444 8.73847141,13.4353031 8.91395321,13.5999928 C9.08946072,13.7647066 9.35270913,13.7647066 9.87920595,13.7647066 C10.0547135,13.7647066 10.3179619,13.7647066 10.5812103,13.6823617 C10.6420133,13.6633368 10.7063269,13.6443129 10.7741511,13.6252899 C10.8691243,13.5986609 10.967707,13.6540565 10.9943439,13.7490274 C11.0075127,13.7959791 11.0009105,13.8462737 10.97607,13.8882359 C10.8348216,14.1268423 10.6126922,14.3068868 10.3500141,14.3956806 Z"
    }, e)
  }
  t.prototype.on_icon_click = function (e) {
    if (!(this.workspace.is_dragging() || this.utils.is_right_button(e))) {
      this.set_expanded(true)
    }
  }
  t.prototype.get_bounding_rectangle = function () {
    var t = e.prototype.get_bounding_rectangle.call(this)
    var /* [auto-meaningful-name] */t$topLeft = t.topLeft
    var /* [auto-meaningful-name] */t$bottomRight = t.bottomRight
    return {
      topLeft: o.vec2.add(o.vec2.create(), t$topLeft, this.left_top_offset),
      bottomRight: o.vec2.add(o.vec2.create(), t$bottomRight, this.left_top_offset)
    }
  }
  t.prototype.get_parent_block = function () {
    return this.parent_block_
  }
  t.prototype.get_top_parent = function () {
    return this.get_root_block() || this
  }
  t.prototype.get_root_block = function () {
    for (var /* [auto-meaningful-name] */this$parent_block_ = this.parent_block_; null === this$parent_block_ || undefined === this$parent_block_ ? undefined : this$parent_block_.parent_block;) {
      this$parent_block_ = this$parent_block_.parent_block
    }
    return this$parent_block_
  }
  t.prototype.dispose = function (t, n) {
    var r
    if (this.events.is_enabled()) {
      r = this.parent_block_ ? this.change_event_factory("comment", {
        block: this.parent_block_,
        old_value: this.xml.comment_to_dom_with_xy(this),
        new_value: undefined
      }) : this.delete_event_factory({
        block: this
      })
    }
    this.workspace.workspace_comment_db.delete(this.id)
    if (!this.parent_block_) {
      this.workspace.remove_top_comment(this)
    }
    e.prototype.dispose.call(this, t, n && !this.parent_block_)
    this.events.fire(r)
  }
  t.prototype.show_context_menu = function (e) {
    var t = this
    if (!this.workspace.get_options().readOnly && this.context_menu && !this.is_in_flyout) {
      var n = function (e) {
        var n = (0, l.create_svg_element)("g", {
          width: 16,
          height: 16
        })
        t.draw_icon(n, 16, s.THEME_COLOR_MAP[e].toString())
        return n
      }
      var r = function (e) {
        var /* [auto-meaningful-name] */t$color_theme = t.color_theme
        if (t$color_theme !== e) {
          t.set_color_theme(e)
          if (t.events.is_enabled()) {
            t.events.fire(t.change_event_factory("comment_color", {
              block: t,
              old_value: t$color_theme,
              new_value: e
            }))
          }
        }
      }
      var i = [
        {
          text: this.Msg.BLUE_COMMENT,
          name: "comment_set_color_blue",
          enabled: true,
          callback: r.bind(this, "BLUE"),
          icon: n("BLUE"),
          selected: "BLUE" === this.color_theme
        }, {
          text: this.Msg.GREEN_COMMENT,
          name: "comment_set_color_green",
          enabled: true,
          callback: r.bind(this, "GREEN"),
          icon: n("GREEN"),
          selected: "GREEN" === this.color_theme
        }, {
          text: this.Msg.YELLOW_COMMENT,
          name: "comment_set_color_yellow",
          enabled: true,
          callback: r.bind(this, "YELLOW"),
          icon: n("YELLOW"),
          selected: "YELLOW" === this.color_theme
        }, {
          text: this.Msg.RED_COMMENT,
          name: "comment_set_color_red",
          enabled: true,
          callback: r.bind(this, "RED"),
          icon: n("RED"),
          selected: "RED" === this.color_theme
        }, {
          text: this.Msg.DELETE_COMMENT,
          name: "comment_delete",
          enabled: true,
          callback: function () {
            if (t.parent_block_) {
              t.parent_block_.set_comment_text(undefined)
            } else {
              t.dispose(undefined, true)
            }
          }
        }
      ]
      this.context_menu.current_block = this
      this.context_menu.show(e, {
        source: "block",
        options: i
      }, this.RTL)
    }
  }
  t.prototype.get_color_theme = function () {
    return this.color_theme
  }
  t.prototype.get_colour = function () {
    return s.THEME_COLOR_MAP[this.color_theme]
  }
  t.prototype.set_color_theme = function (e, t) {
    var n = this
    if (e !== this.color_theme) {
      if ((0, d.is_comment_theme)(e)) {
        var r = s.THEME_COLOR_MAP[this.color_theme]
        this.color_theme = e
        var i
        var o = s.THEME_COLOR_MAP[this.color_theme]
        if (this.svg_line_) {
          this.svg_line_.style.stroke = o.toString()
        }
        if (this.bubble_) {
          this.bubble_.style.background = "linear-gradient(to bottom, " + o + " 4px, #fff 4px)"
          if (this.expanded_ && !t && this.empty_border) {
            this.empty_border.classList.add("blocklyCommentBorder")
            this.empty_border.style.backgroundColor = r.toString()
            this.empty_border.addEventListener("animationend", function () {
              if (n.empty_border) {
                n.empty_border.classList.remove("blocklyCommentBorder")
                n.empty_border.style.backgroundColor = "transparent"
              }
            })
          }
        }
        if (this.svg_icon) {
          if (i = this.svg_icon.querySelector("circle")) {
            i.setAttribute("fill", "url(#CommentLinearGradient-" + this.color_theme + ")")
          }
        }
        if (this.sub_icon) {
          if (i = this.sub_icon.querySelector("circle")) {
            i.setAttribute("fill", o.toString())
          }
        }
      } else {
        console.warn("Trying to set invalid color theme: " + e)
      }
    }
  }
  t.prototype.move_by = function (e) {
    var t
    if (this.events.is_enabled()) {
      t = this.move_event_factory({
        block: this
      })
    }
    var n = this.get_relative_to_surface_xy()
    this.translate(o.vec2.add(this.location_, n, e))
    if (this.parent_block_) {
      o.vec2.add(this.relative_position_, this.relative_position_, e)
      this.draw_line()
    }
    if (t) {
      t.record_new()
    }
    if (this.rendered) {
      this.workspace.resize_contents()
    }
    if (t) {
      this.events.fire(t)
    }
  }
  t.prototype.sort = function (e) {
    var t = this.get_relative_to_surface_xy()
    var n = o.vec2.fromValues(e[0] + 20, e[1] + 20)
    this.move_by(o.vec2.sub(t, n, t))
    o.vec2.add(e, e, [0, this.get_height_width().height + this.theme.renderer.MIN_HEIGHT])
  }
  t.prototype.get_text = function () {
    return this.text_
  }
  t.prototype.set_text = function (e) {
    var t
    if (this.text_ != e) {
      if (this.events.is_enabled()) {
        t = this.change_event_factory("comment_text", {
          block: this,
          old_value: this.text_,
          new_value: e
        })
      }
      this.text_ = e
    }
    if (this.textarea_) {
      this.textarea_.value = e
    }
    this.text_layout()
    if (t) {
      this.events.fire(t)
    }
  }
  t.prototype.get_bubble_size = function () {
    return {
      width: this.bubble_width_,
      height: this.bubble_height_
    }
  }
  t.prototype.set_bubble_size = function (e, t) {
    if ((e = Math.max(_[0], e)) !== this.bubble_width_) {
      this.bubble_width_ = e
      if (this.bubble_) {
        this.bubble_.setAttribute("width", "" + e)
      }
      if (this.bubble_shadow_) {
        this.bubble_shadow_.setAttribute("width", "" + e)
      }
      if (this.expanded_) {
        this.width = e
      }
    }
    if ((t = Math.max(_[1], t)) !== this.bubble_height_) {
      this.bubble_height_ = t
      if (this.bubble_) {
        this.bubble_.setAttribute("height", "" + t)
      }
      if (this.bubble_shadow_) {
        this.bubble_shadow_.setAttribute("height", "" + t)
      }
      if (this.expanded_) {
        this.height = t
      }
    }
  }
  t.prototype.get_relative_position = function () {
    return this.parent_block_ ? this.relative_position_ : this.location_
  }
  t.prototype.set_relative_position = function (e) {
    this.relative_position_ = e
  }
  t.prototype.set_expanded = function (e) {
    var t
    if (e != this.expanded_) {
      this.expanded_ = e
      if (this.rendered) {
        if (this.events.is_enabled()) {
          t = this.change_event_factory("comment_expand", {
            block: this,
            old_value: !e,
            new_value: e
          })
        }
        if (e) {
          this.show_editor()
        } else {
          this.hide_editor()
        }
        this.update_visibility()
        this.events.fire(t)
        this.workspace.resize_contents()
      }
    }
  }
  t.prototype.is_expanded = function () {
    return this.expanded_
  }
  t.prototype.update_visibility = function () {
    if (this.parent_block_) {
      var /* [auto-meaningful-name] */this$parent_block_ = this.parent_block_
      if ((0, d.is_block_svg)(this$parent_block_)) {
        this$parent_block_ = this$parent_block_.get_root_block()
      }
      var t = this$parent_block_.get_visibility();
      (0, l.update_visibility_class)(this.svg_group, t)
    }
  }
  t.prototype.reposition = function () {
    if (this.parent_block_ && this.parent_block_.is_rendered()) {
      var e = this.parent_block_.get_relative_to_surface_xy()
      if (this.parent_width_ && this.parent_width_ !== this.parent_block_.first_row_width) {
        if (this.relative_position_[0] > this.parent_width_ / 2) {
          this.relative_position_[0] -= this.parent_width_
          this.relative_position_[0] += this.parent_block_.first_row_width
        }
      }
      this.parent_width_ = this.parent_block_.first_row_width
      this.translate(o.vec2.add(e, e, this.relative_position_))
      this.draw_line()
    }
  }
  t.prototype.show_editor = function () {
    var e = this
    if (this.svg_icon) {
      (0, l.remove_node)(this.svg_icon)
    }
    this.left_top_offset = [-20, -20]
    if (!this.bubble_ || !this.bubble_shadow_) {
      this.bubble_ = (0, l.create_svg_element)("foreignObject", {
        width: this.bubble_width_,
        height: this.bubble_height_,
        class: "blocklyCommentBubble",
        transform: "translate(" + this.left_top_offset[0] + ", " + this.left_top_offset[1] + ")"
      })
      this.bubble_.style.background = "linear-gradient(to bottom, " + s.THEME_COLOR_MAP[this.color_theme] + " 4px, #fff 4px)"
      this.empty_border = document.createElement("div")
      this.empty_border.classList.add("blockCommentEmptyBorder")
      this.bubble_.appendChild(this.empty_border)
      var t = document.createElement("div")
      t.classList.add("blocklyCommentBubbleLabel")
      var n = document.createElement("div")
      this.sub_icon = (0, l.create_svg_element)("svg", {
        width: 14,
        height: 14,
        class: "blocklyCommentBubbleIcon"
      }, n)
      this.draw_icon(this.sub_icon, 14, s.THEME_COLOR_MAP[this.color_theme].toString())
      var r = document.createElement("div")
      r.textContent = this.Msg.COMMENT
      n.appendChild(r)
      t.appendChild(n)
      var i = (0, l.create_svg_element)("svg", {
        width: 12,
        height: 12,
        class: "blocklyCommentBubbleClose"
      }, t);
      (0, l.create_svg_element)("path", {
        d: "m8,4 l3.834 3.834 c0.352,0.352 0.352,0.92 0,1.278 l-0.32,0.32 c-0.352,0.352 -0.92,0.352 -1.278,0 l-2.926,-2.926 l-2.926,2.926 c-0.352,0.352 -0.92,0.352 -1.278,0 l-0.32,-0.32 c-0.352,-0.352 -0.352,-0.92 0,-1.278 l3.834,-3.834 q 0.6892,-0.8 1.3784,0 z"
      }, i)
      t.appendChild(i)
      this.textarea_ = document.createElementNS(u.HTML_NS, "textarea")
      this.textarea_.classList.add("blocklyCommentTextarea")
      this.textarea_.placeholder = this.parent_block_ ? this.Msg.WHATS_THIS : this.Msg.SAY_SOMETHING
      this.events.bind_event_with_checks(this.textarea_, "mousedown", this, this.textarea_mouse_down)
      this.events.bind_event_with_checks(this.textarea_, "blur", this, function (t) {
        t.stopPropagation()
        t.preventDefault()
        if (e.textarea_) {
          e.set_text(e.textarea_.value || "")
        }
        e.is_textarea_focused = false
      })
      this.events.bind_event_with_checks(this.textarea_, "input", this, function (t) {
        t.stopPropagation()
        t.preventDefault()
        e.text_layout()
      })
      this.events.bind_event_with_checks(i, "mousedown", this, function (e) {
        e.stopPropagation()
        e.preventDefault()
        this.set_expanded(false)
      })
      var o = document.createElement("div")
      o.classList.add("blocklyCommentTopContainer")
      var a = document.createElement("div")
      a.classList.add("blocklyCommentMainContainer")
      a.appendChild(t)
      a.appendChild(this.textarea_)
      this.bubble_.appendChild(o)
      o.appendChild(a)
      var f = document.createElement("div")
      f.classList.add("blocklyCommentBottomContainer")
      this.bubble_.appendChild(f)
      var d = this.create_resize_controllers()
      if (d) {
        o.appendChild(d.ew_resize)
        f.appendChild(d.ns_resize)
        f.appendChild(d.nwse_resize)
      }
      this.bubble_shadow_ = (0, l.create_svg_element)("rect", {
        width: this.bubble_width_,
        height: this.bubble_height_,
        filter: "url(#" + c.FILTER.BOXSHADOW + ")",
        transform: "translate(" + this.left_top_offset[0] + ", " + this.left_top_offset[1] + ")"
      })
    }
    if (this.textarea_) {
      this.textarea_.value = this.text_
    }
    this.svg_group.appendChild(this.bubble_shadow_)
    this.svg_group.appendChild(this.bubble_)
    this.height = this.bubble_height_
    this.width = this.bubble_width_
    this.bring_to_front()
  }
  t.prototype.text_layout = function () {
    if (this.textarea_ && this.auto_layout_) {
      if (this.textarea_.value.length >= this.prev_text_l) {
        var e = this.textarea_.scrollHeight + 52
        this.set_bubble_size(this.bubble_width_, Math.max(e, p[1]))
        return void (this.prev_text_l = this.textarea_.value.length)
      }
      this.set_bubble_size(this.bubble_width_, p[1])
      this.prev_text_l = 0
      this.text_layout()
    }
  }
  t.prototype.hide_editor = function () {
    if (this.bubble_shadow_) {
      (0, l.remove_node)(this.bubble_shadow_)
    }
    if (this.bubble_) {
      (0, l.remove_node)(this.bubble_)
    }
    this.width = A[0]
    this.height = A[1]
    this.left_top_offset = [-12, -12]
    this.update_icon()
  }
  t.prototype.textarea_mouse_down = function (e) {
    var t = this
    if (this.textarea_) {
      if (this.is_textarea_focused) {
        e.stopPropagation()
      } else {
        this.bring_to_front()
        var n = this.events.bind_event_with_checks(this.textarea_, "mouseup", this, function () {
          if (t.textarea_) {
            t.textarea_.focus()
          }
          t.is_textarea_focused = true
          t.select()
          t.events.unbind_event(n)
          t.workspace.cancel_current_gesture()
          t.touch_manager.clear_touch_identifier()
        })
      }
    }
  }
  t.prototype.create_resize_controllers = function () {
    if (this.bubble_) {
      var e = {
        ew_resize: document.createElement("div"),
        ns_resize: document.createElement("div"),
        nwse_resize: document.createElement("div")
      }
      e.ew_resize.classList.add("blocklyCommentEWResize")
      this.events.bind_event_with_checks(e.ew_resize, "mousedown", this, this.resize_mouse_down.bind(this, "ew"))
      e.ns_resize.classList.add("blocklyCommentNSResize")
      this.events.bind_event_with_checks(e.ns_resize, "mousedown", this, this.resize_mouse_down.bind(this, "ns"))
      e.nwse_resize.classList.add("blocklyCommentNWSEResize")
      this.events.bind_event_with_checks(e.nwse_resize, "mousedown", this, this.resize_mouse_down.bind(this, "nwse"))
      return e
    }
  }
  t.prototype.unbind_resize_events = function () {
    if (this.on_mouseup_wrapper) {
      this.events.unbind_event(this.on_mouseup_wrapper)
      this.on_mouseup_wrapper = undefined
    }
    if (this.on_mousemove_wrapper) {
      this.events.unbind_event(this.on_mousemove_wrapper)
      this.on_mousemove_wrapper = undefined
    }
  }
  t.prototype.resize_mouse_down = function (e, t) {
    this.bring_to_front()
    this.select()
    t.stopPropagation()
    t.preventDefault()
    if (!this.utils.is_right_button(t)) {
      this.workspace.start_drag(t, o.vec2.fromValues(this.bubble_width_, this.bubble_height_))
      this.select()
      this.size_before_resize = [this.bubble_width_, this.bubble_height_]
      this.on_mouseup_wrapper = this.events.bind_event_with_checks(document, "mouseup", this, this.bubble_mouse_up)
      this.on_mousemove_wrapper = this.events.bind_event_with_checks(document, "mousemove", this, this.resize_mouse_move.bind(this, e))
    }
  }
  t.prototype.resize_mouse_move = function (e, t) {
    this.auto_layout_ = false
    var n = this.workspace.move_drag(t)
    if (e.indexOf("e") > -1 && e.indexOf("w") > -1) {
      this.set_bubble_size(n[0], this.bubble_height_)
    }
    if (e.indexOf("n") > -1 && e.indexOf("s") > -1) {
      this.set_bubble_size(this.bubble_width_, n[1])
    }
  }
  t.prototype.bubble_mouse_up = function () {
    this.touch_manager.clear_touch_identifier()
    this.unbind_resize_events()
    if (this.size_before_resize && (this.size_before_resize[0] !== this.bubble_width_ || this.size_before_resize[1] !== this.bubble_height_) && this.events.is_enabled()) {
      this.events.fire(this.change_event_factory("comment_resize", {
        block: this,
        old_value: this.size_before_resize,
        new_value: [this.bubble_width_, this.bubble_height_]
      }))
    }
    this.size_before_resize = undefined
  }
  t.prototype.is_auto_layout = function () {
    return this.auto_layout_
  }
  t.prototype.set_auto_layout = function (e) {
    this.auto_layout_ = e
  }
  t.prototype.focus = function () {
    var e
    var t
    this.set_expanded(true)
    if (this.textarea_) {
      var n = (0, l.get_viewport_size)()
      if (this.textarea_.getBoundingClientRect().left >= n.width) {
        var r = this.get_relative_to_surface_xy()[0] + this.left_top_offset[0]
        var i = this.workspace.get_metrics()
        var o = this.workspace.get_scale()
        r = r * o - i.contentLeft
        r -= i.viewWidth
        r += this.bubble_width_ * o
        if (!(null === (t = null === (e = this.workspace.get_scrollbar()) || undefined === e ? undefined : e.h_scroll) || undefined === t)) {
          t.set(r)
        }
        this.textarea_.focus()
      } else {
        this.textarea_.focus()
      }
    }
  }
  Object.defineProperty(t.prototype, "use_drag_surface", {
    get: function () {
      return !!this.workspace.get_block_drag_surface() && !this.parent_block_
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.compute_line_connect_position = function () {
    var e = o.vec2.scale(o.vec2.create(), this.relative_position_, -1)
    if (!this.parent_block_ || !this.parent_block_.rendered) {
      return e
    }
    var t = o.vec2.create()
    t[1] = this.parent_block_.first_row_height / 2
    var /* [auto-meaningful-name] */this$parent_block_$first_row_width = this.parent_block_.first_row_width
    var r = this.relative_position_[0] > this$parent_block_$first_row_width / 2
    if (r) {
      t[0] += this$parent_block_$first_row_width
    }
    if (this.parent_block_.is_starting_block() && !r) {
      t[0] -= 22
    }
    return o.vec2.add(e, e, t)
  }
  t.prototype.cancel_operation = function () {
    if (this.is_textarea_focused) {
      this.textarea_.value = this.text_
      this.textarea_.blur()
    }
    if (this.size_before_resize) {
      this.set_bubble_size(this.size_before_resize[0], this.size_before_resize[1])
      this.bubble_mouse_up()
    }
    this.unselect()
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.touch_manager)], t.prototype, "touch_manager", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Msg)], t.prototype, "Msg", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.xml)], t.prototype, "xml", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.json)], t.prototype, "json", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.ChangeEvent)], t.prototype, "change_event_factory", undefined)
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(h.WorkspaceElement)
exports.WorkspaceComment = g
