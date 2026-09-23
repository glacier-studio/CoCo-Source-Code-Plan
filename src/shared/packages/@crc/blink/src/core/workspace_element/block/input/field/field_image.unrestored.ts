/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：544
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldImage = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 214 */"../../../../../../../../../../../unrestored/shared/1571/2636/1022/214")
var a = require(/* 293 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/293")
var s = require(/* 123 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/index")
var c = function (e) {
  function t(t) {
    var r = e.call(this, t.opt_alt) || this
    r.field_type = "FieldImage"
    r.editable = false
    r.src_ = t.src
    r.width_ = isNaN(Number(t.width)) ? n.DEFAULT_WIDTH : Number(t.width)
    r.height_ = isNaN(Number(t.height)) ? r.width_ : Number(t.height)
    r.size_ = new a.Size(r.width_, r.height_ + 2 * r.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_VALUE_BLOCK)
    r.text_ = ""
    r.tag = t.opt_tag || undefined
    return r
  }
  var n;
  (0, r.__extends)(t, e)
  n = t
  t.prototype.update_width = function () {
    this.size_.width = this.width_
  }
  t.prototype.update_height = function () {
    this.size_.height = this.height_ + 2 * this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_VALUE_BLOCK
  }
  t.prototype.set_value = function (e) {
    if (undefined != e) {
      this.src_ = e
      if (this.image_element) {
        this.image_element.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e || "")
      }
    }
  }
  t.prototype.init = function () {
    if (!this.field_group) {
      this.field_group = (0, s.create_svg_element)("g", {})
      if (!this.visible_) {
        this.field_group.style.display = "none"
      }
      if ("string" === typeof this.src_) {
        this.image_element = (0, s.create_svg_element)("image", {
          height: this.height_ + "px",
          width: this.width_ + "px"
        }, this.field_group)
        this.set_value(this.src_)
      } else {
        this.image_element = this.src_
        this.field_group.appendChild(this.image_element)
      }
      if (undefined == this.source_block) {
        throw new ReferenceError("Field should have source block before init.")
      }
      if (undefined != this.source_block) {
        var e = this.source_block.get_svg_root()
        if (undefined == e) {
          throw new ReferenceError("Field should have svg root before init.")
        }
        e.appendChild(this.field_group)
      }
    }
  }
  t.prototype.layout = function (e, t) {
    if (this.source_block && (e[0] += this.render_sep, !(0, o.is_nil)(this.image_element))) {
      if ("quote_left" === this.tag || "quote_right" === this.tag) {
        var n = "quote_left" == this.tag ? e[0] - 4 : e[0] - 6
        this.image_element.classList.add("blocklyQuote")
        return void this.image_element.setAttribute("transform", "translate(" + n + ", " + (e[1] + 6) + ")")
      }
      var r = this.get_img_scale()
      var i = Number(((1 - r) * this.size_.width / 2).toFixed(2))
      var a = this.source_block.previous_connection ? 4 * i : 3 * i
      var s = 1.5 * i
      this.image_element.setAttribute("transform", "scale(" + r + ") translate(" + (e[0] + a) + ", " + (e[1] + t / 2 - this.height_ / 2 + s) + ")")
      e[0] += this.size_.width
    }
  }
  t.prototype.get_img_scale = function () {
    return 1
  }
  t.prototype.on_mouse_down = function (e) {
    e.preventDefault()
    e.stopPropagation()
    if (this.source_block && this.source_block.get_workspace() && !this.source_block.is_in_flyout) {
      if (this.tooltip) {
        this.tooltip.hide()
      }
      var t = this.source_block.get_workspace().get_gesture(e)
      if (t) {
        t.set_start_field(this)
      }
    }
  }
  t.DEFAULT_WIDTH = 20
  return t = n = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 503 */"../../../../../../../../../../../unrestored/shared/1571/2636/301/503").Field)
exports.FieldImage = c
