/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2199
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldButton = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 214 */"../../../../../../../../../../../unrestored/shared/1571/2636/1022/214")
var a = require(/* 123 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/index")
var s = require(/* 499 */"../../../../../../../../../../../unrestored/shared/1571/2636/17/499/index")
var c = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.field_type = "FieldButton"
    n.image_width = n.width_
    n.image_height = n.height_
    n.has_circle = t.has_circle
    n.click_handler_ = t.opt_callback
    if (n.has_circle) {
      n.image_width = .6 * n.width_
      n.image_height = .6 * n.height_
    }
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.update_height = function () {
    this.size_.height = this.height_
  }
  t.prototype.init = function () {
    var e = this
    if (!this.field_group) {
      this.field_group = (0, a.create_svg_element)("g", {
        class: "fieldButton",
        cursor: "default"
      }, undefined)
      if (!this.visible_) {
        this.field_group.style.display = "none"
      }
      if (this.has_circle) {
        this.circle_element = (0, a.create_svg_element)("rect", {
          width: this.width_,
          height: this.height_,
          rx: this.width_ / 2,
          ry: this.width_ / 2,
          stroke: "rgba(0, 0, 0, .15)",
          fill: "rgba(255, 255, 255, .15)"
        }, this.field_group)
        this.events.bind_event_with_checks(this.field_group, "mousedown", this, function () {
          if (e.circle_element) {
            e.circle_element.style.fill = "rgba(0, 0, 0, .15)"
          }
        })
      }
      if ("string" === typeof this.src_) {
        this.image_element = (0, a.create_svg_element)("image", {
          height: this.image_height + "px",
          width: this.image_width + "px"
        }, this.field_group)
        this.set_value(this.src_)
      } else {
        this.image_element = (0, a.create_svg_element)("g", {
          height: this.height_ + "px",
          width: this.width_ + "px"
        }, this.field_group)
        this.image_element.appendChild(this.src_)
      }
      if (s.is.firefox()) {
        this.rect_element = (0, a.create_svg_element)("rect", {
          height: this.height_ + "px",
          width: this.width_ + "px",
          "fill-opacity": 0
        }, this.field_group)
      }
      if (undefined == this.source_block) {
        throw new ReferenceError("Field should have source block when init.")
      }
      this.source_block.get_svg_root().appendChild(this.field_group)
      this.events.bind_event_with_checks(this.field_group, "mouseup", this, this.on_click)
      this.mouse_down_wrapper = this.events.bind_event_with_checks(this.field_group, "mousedown", this, this.on_mouse_down)
    }
  }
  t.prototype.on_click = function (e) {
    if (this.source_block) {
      if (this.circle_element) {
        this.circle_element.style.fill = "rgba(255, 255, 255, .15)"
      }
      var t = this.source_block.get_workspace().get_gesture(e)
      if (t && t.is_dragging_block) {
        t.handle_up(e)
      } else {
        if (!(this.source_block.is_in_flyout || this.utils.is_right_button(e))) {
          if (t) {
            t.update_is_mutation_click(true)
            t.handle_up(e)
          }
          if (this.click_handler_) {
            this.click_handler_(this)
          }
        }
      }
    }
  }
  t.prototype.get_img_scale = function () {
    return 1
  }
  t.prototype.layout = function (e, t) {
    if (this.source_block && (e[0] += this.render_sep, !(0, o.is_nil)(this.image_element))) {
      var n = this.get_img_scale()
      var r = Number(((1 - n) * this.size_.width / 2).toFixed(2))
      var i = this.source_block.previous_connection ? 4 * r : 3 * r
      var a = 1.5 * r
      var s = (this.width_ - this.image_width) / 2
      var c = (this.height_ - this.image_height) / 2
      if (this.circle_element) {
        this.circle_element.setAttribute("transform", "scale(" + n + ") translate(" + (e[0] + i) + ", " + (e[1] + t / 2 - this.height_ / 2 + a) + ")")
      }
      this.image_element.setAttribute("transform", "scale(" + n + ") translate(" + (e[0] + i + s) + ", " + (e[1] + t / 2 - this.height_ / 2 + a + c) + ")")
      e[0] += this.size_.width
    }
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 544 */"./field_image").FieldImage)
exports.FieldButton = c
