/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2213
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.SimplifiedWorkspaceComment = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 258 */"@kitten-team/gl-matrix")
var a = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var s = require(/* 195 */"../../123/195/index")
var c = require(/* 123 */"../../123/index")
var u = require(/* 214 */"../../1022/214")
var l = require(/* 293 */"../../123/293")
var f = require(/* 648 */"../../1205/2609/648")
var d = require(/* 763 */"./2169/763")
var h = function (e) {
  function t(t, n, r, i) {
    var a = e.call(this, t) || this
    a.element_type = "comment"
    a.icon_size = 32
    a.h_distance = -6
    a.icon_offset = 4
    a.icon_limit = 3
    a.text_ = ""
    a.width = a.icon_size
    a.height = a.icon_size
    a.left_top_offset = [-a.icon_size / 2, -a.icon_size / 2]
    a.bubble_width_ = 214
    a.bubble_height_ = 126
    a.auto_layout_ = true
    a.relative_position_ = o.vec2.create()
    a.expanded_ = false
    a.color_theme = "BLUE"
    a.is_textarea_focused = false
    a.parent_block_ = n
    a.base_block = n
    var s = a.workspace.is_resizes_enabled()
    a.workspace.set_resizes_enabled(false)
    a.events.disable()
    a.id = undefined != i ? i : (0, l.gen_uid)()
    a.svg_group.classList.add("blocklyWorkspaceComment")
    a.update_movable()
    if (n) {
      a.deletable_ = false
    }
    if (r) {
      a.translate(o.vec2.fromValues(r.x, r.y))
    }
    t.workspace_comment_db.set(a.id, a)
    if (!n) {
      t.add_top_comment(a)
    }
    a.init_events()
    a.events.enable()
    if (a.events.is_enabled()) {
      if (a.parent_block_) {
        a.events.fire(a.change_event_factory("comment", {
          block: a.parent_block_,
          old_value: undefined,
          new_value: a.id
        }))
      } else {
        a.events.fire(a.create_event_factory({
          block: a
        }))
      }
    }
    a.workspace.set_resizes_enabled(s)
    return a
  }
  (0, r.__extends)(t, e)
  t.prototype.get_icon = function () {
    return this.svg_icon
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
    if (t) {
      this.events.fire(t)
    }
    this.comment_bubble.update_bubble("edit", this)
  }
  t.prototype.init_svg = function (e) {
    var t
    var n
    var r = this
    if (this.parent_block_) {
      var i = (0, f.get_outer_block)(this.parent_block_)
      this.base_block = i
      var o = (0, f.get_nested_blocks_with_comment)(i)
      var a = o[0]
      if (a !== this.parent_block_) {
        if (!(null === (t = null === a || undefined === a ? undefined : a.comment) || undefined === t)) {
          t.init_svg(true)
        }
        return void (this.svg_icon || (this.svg_icon = (0, c.create_svg_element)("g", {}, this.svg_group), this.reposition()))
      }
      o.forEach(function (e) {
        var t
        if (e !== r.parent_block_ && e.comment && e.comment.rendered) {
          e.comment.rendered = false
          if (!(null === (t = r.workspace.get_canvas()) || undefined === t)) {
            t.removeChild(e.comment.svg_group)
          }
        }
      })
      if (this.svg_icon) {
        this.svg_group.removeChild(this.svg_icon)
      }
      this.svg_icon = (0, c.create_svg_element)("g", {}, this.svg_group)
      for (var s = o.length > this.icon_limit ? this.icon_limit - 1 : o.length - 1, u = s; u >= 0; u--) {
        var l = o[u]
        var d = (0, c.create_svg_element)("g", {
          class: "blocklySimplifiedCommentIcon"
        }, this.svg_icon)
        this.draw_icon(d, l.get_colour().toString())
        var h = this.icon_offset * (s - u)
        d.setAttribute("transform", "translate(" + (this.left_top_offset[0] - h) + ", " + this.left_top_offset[1] + ")")
      }
      this.events.bind_event_with_checks(this.svg_icon, "mouseup", this, this.on_icon_click)
      this.reposition()
      this.rendered = true
      if (!(null === (n = this.workspace.get_canvas()) || undefined === n)) {
        n.appendChild(this.svg_group)
      }
      this.update_visibility()
      if (this.events.is_record_undo() && this.events.is_enabled() && !e && 1 === this.svg_icon.childElementCount) {
        var /* [auto-meaningful-name] */this$svg_icon$firstElementChild = this.svg_icon.firstElementChild
        this$svg_icon$firstElementChild.style.opacity = "0"
        setTimeout(this.comment_bubble.animate_once.bind(this, this$svg_icon$firstElementChild, "createCommentAnimation", function () {
          this$svg_icon$firstElementChild.style.opacity = ""
        }))
      }
    }
  }
  t.prototype.draw_icon = function (e, t) {
    t = t || "#608FEE";
    (0, c.create_svg_element)("rect", {
      width: this.icon_size,
      height: this.icon_size,
      fill: "none",
      stroke: "none"
    }, e);
    (0, c.create_svg_element)("path", {
      d: "M10,4 L20,4 C24.418278,4 28,7.581722 28,12 L28,21 L28,21 L30.2365586,27.7096759 C30.4112064,28.2336192 30.1280464,28.7999392 29.6041031,28.974587 C29.3524967,29.0584558 29.0778786,29.0389393 28.8406617,28.9203309 L19,24 L19,24 L10,24 C5.581722,24 2,20.418278 2,16 L2,12 C2,7.581722 5.581722,4 10,4 Z",
      fill: t
    }, e);
    (0, c.create_svg_element)("circle", {
      fill: "#fff",
      cx: 8,
      cy: 14,
      r: 2
    }, e);
    (0, c.create_svg_element)("circle", {
      fill: "#fff",
      cx: 15,
      cy: 14,
      r: 2
    }, e);
    (0, c.create_svg_element)("circle", {
      fill: "#fff",
      cx: 22,
      cy: 14,
      r: 2
    }, e)
    e.setAttribute("filter", "url(#" + d.FILTER.SURROUND_SHADOW_DARK + ")")
    e.setAttribute("transform-origin", this.icon_size + " " + this.icon_size)
  }
  t.prototype.reposition = function () {
    var e = this.base_block || this.parent_block_
    if (e && e.rendered) {
      var t = this.h_distance - this.icon_size / 2
      if (e.is_starting_block()) {
        t -= 22
      }
      this.relative_position_ = o.vec2.fromValues(t, e.first_row_height / 2)
      var n = e.get_relative_to_surface_xy()
      this.translate(o.vec2.add(n, n, this.relative_position_))
    }
  }
  t.prototype.show_editor = function () {
    return (0, r.__awaiter)(this, undefined, undefined, function () {
      var e
      return (0, r.__generator)(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, this.workspace.show_external_comment_editor(this.text_)]
          case 1:
            if (!(undefined == (e = t.sent()))) {
              this.set_text(e)
            }
            return [2]
        }
      })
    })
  }
  t.prototype.focus = function () {
    this.show_editor()
  }
  t.prototype.on_icon_click = function (e) {
    if (!(this.workspace.is_dragging() || this.utils.is_right_button(e))) {
      this.comment_bubble.popup(this)
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
  t.prototype.dispose = function () {
    var t
    var n = this
    this.comment_bubble.update_bubble("remove", this)
    if (this.events.is_enabled()) {
      t = this.parent_block_ ? this.change_event_factory("comment", {
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
    e.prototype.dispose.call(this)
    this.events.fire(t)
    setTimeout(function () {
      if (n.parent_block_) {
        var e = (0, f.get_outer_block)(n.parent_block_)
        var t = (0, f.get_nested_blocks_with_comment)(e)[0]
        if (t && t.comment && t.rendered) {
          t.comment.init_svg(true)
        }
      }
    })
  }
  t.prototype.show_context_menu = function (e) {}
  t.prototype.on_mouse_down = function (t) {
    if (!this.parent_block_) {
      e.prototype.on_mouse_down.call(this, t)
    }
  }
  t.prototype.sort = function (e) {
    if (this.rendered) {
      var t = this.get_relative_to_surface_xy()
      var n = o.vec2.fromValues(e[0] + this.icon_size / 2, e[1] + this.icon_size / 2)
      this.move_by(o.vec2.sub(t, n, t))
      o.vec2.add(e, e, [0, this.get_height_width().height + this.theme.renderer.MIN_HEIGHT])
    }
  }
  t.prototype.get_bubble_size = function () {
    return {
      width: this.bubble_width_,
      height: this.bubble_height_
    }
  }
  t.prototype.set_bubble_size = function (e, t) {
    this.bubble_width_ = e
    this.bubble_height_ = t
  }
  t.prototype.is_auto_layout = function () {
    return this.auto_layout_
  }
  t.prototype.set_auto_layout = function (e) {
    this.auto_layout_ = e
  }
  t.prototype.get_relative_position = function () {
    return this.parent_block_ ? this.relative_position_ : this.location_
  }
  t.prototype.set_relative_position = function (e) {
    this.relative_position_ = e
  }
  t.prototype.set_expanded = function (e) {
    this.expanded_ = e
  }
  t.prototype.is_expanded = function () {
    return this.expanded_
  }
  t.prototype.update_visibility = function () {
    if (this.parent_block_) {
      var /* [auto-meaningful-name] */this$parent_block_ = this.parent_block_
      if ((0, u.is_block_svg)(this$parent_block_)) {
        this$parent_block_ = this$parent_block_.get_root_block()
      }
      var t = this$parent_block_.get_visibility();
      (0, c.update_visibility_class)(this.svg_group, t)
    }
  }
  t.prototype.get_color_theme = function () {
    return this.color_theme
  }
  t.prototype.set_color_theme = function (e) {
    if (e !== this.color_theme) {
      this.color_theme = e
    }
  }
  t.prototype.get_colour = function () {
    return s.THEME_COLOR_MAP[this.color_theme]
  }
  t.prototype.draw_line = function () {}
  t.prototype.cancel_operation = function () {};
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.xml)], t.prototype, "xml", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.ChangeEvent)], t.prototype, "change_event_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.SimplifiedCommentBubble)], t.prototype, "comment_bubble", undefined)
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 977 */"./977").WorkspaceElement)
exports.SimplifiedWorkspaceComment = h
