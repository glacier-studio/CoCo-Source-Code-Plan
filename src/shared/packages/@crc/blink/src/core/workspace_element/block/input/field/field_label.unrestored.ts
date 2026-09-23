/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：658
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldLabel = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 293 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/293")
var a = require(/* 123 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/index")
var s = require(/* 478 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/478")
var c = function (e) {
  function t(t) {
    var n = e.call(this, t.text) || this
    n.editable = false
    n.field_type = "FieldLabel"
    n.size_ = new o.Size(0, n.theme.renderer.SHADOW_FIELD_HEIGHT)
    n.class_ = t.opt_class
    n.set_value(t.text)
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.init = function () {
    if (!this.text_element) {
      if (s.is.safari() || s.is.mobile()) {
        this.text_element = (0, a.create_svg_element)("text", {
          class: "blocklyText",
          "font-size": this.theme.font.SIZE,
          dy: ".4em"
        })
      } else {
        this.text_element = (0, a.create_svg_element)("text", {
          class: "blocklyText",
          "font-size": this.theme.font.SIZE,
          "dominant-baseline": "central"
        })
      }
      if (this.class_) {
        (0, a.add_class)(this.text_element, this.class_)
      }
      if (!this.visible_) {
        this.text_element.style.display = "none"
      }
      if (undefined == this.source_block) {
        throw new ReferenceError("Field should have source block when init.")
      }
      if (undefined != this.source_block) {
        var e = this.source_block.get_svg_root()
        if (undefined == e) {
          throw new ReferenceError("Field should have svg root when init.")
        }
        e.appendChild(this.text_element)
      }
      if (this.source_block) {
        this.render_()
      }
    }
  }
  t.prototype.layout = function (e, t) {
    e[0] += this.render_sep
    if (this.text_element) {
      this.text_element.setAttribute("transform", "translate(" + e[0] + "," + (e[1] + t / 2) + ")")
      e[0] += this.size_.width
    }
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 503 */"./field").Field)
exports.FieldLabel = c
