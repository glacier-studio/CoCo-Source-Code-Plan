/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2200
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldIcon = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 123 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/index")
var a = require(/* 499 */"../../../../../../../../../../../unrestored/shared/1571/2636/17/499/index")
var s = require(/* 293 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/293")
var c = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.field_type = "FieldIcon"
    n.width_ = n.theme.renderer.HEAD_ICON_WIDTH
    n.height_ = n.theme.renderer.HEAD_ICON_WIDTH
    n.size_ = new s.Size(0, 0)
    n.opt_is_head_ = t.opt_is_head || false
    n.set_value(n.utils.replace_message_references(t.src))
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.is_head = function () {
    return this.opt_is_head_
  }
  t.prototype.init = function () {
    if (!this.field_group) {
      if (false === this.opt_is_head_ && undefined != this.source_block) {
        if ("*" === this.text_ || "" === this.text_) {
          return
        }
        this.size_ = new s.Size(this.width_, this.height_)
      }
      this.field_group = (0, o.create_svg_element)("g", {
        transform: "translate(-" + this.theme.renderer.HEAD_ICON_WRAP_WIDTH / 2 + ", -" + (this.theme.renderer.HEAD_ICON_WRAP_WIDTH - this.theme.renderer.MIN_HEIGHT) + ")"
      })
      if (!this.visible_) {
        this.field_group.style.display = "none"
      }
      var e = this.theme.renderer.HEAD_ICON_WRAP_WIDTH / 2;
      (0, o.create_svg_element)("circle", {
        cx: e,
        cy: e,
        r: e,
        fill: undefined != this.source_block ? this.source_block.get_colour() : "",
        stroke: undefined != this.source_block ? this.source_block.get_border_colour() : this.theme.block_color.DEFAULT.border,
        class: "blockly_head_icon_wrapper"
      }, this.field_group)
      this.image_element = (0, o.create_svg_element)("image", {
        height: this.height_ + "px",
        width: this.width_ + "px",
        x: e - this.width_ / 2,
        y: e - this.height_ / 2,
        class: "blockly_head_icon"
      }, this.field_group)
      this.set_value(this.src_)
      if (a.is.Gecko()) {
        (0, o.create_svg_element)("rect", {
          height: this.height_ + "px",
          width: this.width_ + "px",
          "fill-opacity": 0
        }, this.field_group)
      }
      if (undefined == this.source_block) {
        throw new ReferenceError("Field should have source block when init.")
      }
      var t = this.source_block.get_svg_root()
      if (undefined == t) {
        throw new ReferenceError("Field should have svg root when init.")
      }
      t.appendChild(this.field_group)
    }
  }
  t.prototype.layout = function (e) {
    return e
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 544 */"./field_image").FieldImage)
exports.FieldIcon = c
