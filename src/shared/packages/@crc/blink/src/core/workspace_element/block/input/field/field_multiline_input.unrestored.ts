/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2202
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldMultilineInput = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 123 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/index")
var a = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.padding_y = 3
    n.line_height = 22
    n.padding_x = 0
    n.field_type = "FieldMultilineInput"
    n.max_length = t.max_length
    n.max_width = t.max_width
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.get_display_text = function () {
    return this.text_ ? this.text_ : " "
  }
  t.prototype.render_ = function () {
    var /* [auto-meaningful-name] */this$border_rect
    var /* [auto-meaningful-name] */this$border_rect1
    var n = this
    if (this.visible_ && this.text_element && this.source_block) {
      (0, o.remove_children)(this.text_element)
      this.text_element.setAttribute("text-anchor", "start")
      this.text_element.setAttribute("dominant-baseline", "central")
      var r = this.get_display_text()
      this.utils.start_text_cache()
      var i = 0
      var a = (0, o.create_svg_element)("tspan")
      this.text_element.appendChild(a)
      for (var s = 0, c = Array.from(r), u = 0; u < c.length; u++) {
        a.textContent = c.slice(s, u + 1).join("").replace(/\n/g, "").replace(/\s/g, " ")
        var l = this.utils.get_cached_width(a)
        i = Math.max(i, l)
        var f = c[u]
        var d = c[u + 1]
        var h = undefined !== this.max_width && l >= this.max_width && undefined !== c[u + 1]
        if ("\n" === f || h) {
          a = (0, o.create_svg_element)("tspan")
          this.text_element.appendChild(a)
          if (h && "\n" === d) {
            u++
          }
          s = u + 1
        }
      }
      this.utils.stop_text_cache()
      this.padding_x = 0
      if (!this.source_block.is_shadow()) {
        this.padding_x = i >= this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD ? this.theme.renderer.TEXT_PADDING_IN_FIELD : (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD + 2 * this.theme.renderer.TEXT_PADDING_IN_FIELD - i) / 2
      }
      var /* [auto-meaningful-name] */this$padding_y = this.padding_y
      Array.from(this.text_element.children).forEach(function (e) {
        e.setAttribute("x", "" + n.padding_x)
        e.setAttribute("y", "" + (this$padding_y + n.line_height / 2))
        this$padding_y += n.line_height
      })
      this$padding_y += this.padding_y
      this.size_.height = this$padding_y
      this.size_.width = i + 2 * this.padding_x
      if (!(null === (this$border_rect = this.border_rect) || undefined === this$border_rect)) {
        this$border_rect.setAttribute("width", String(this.size_.width))
      }
      if (!(null === (this$border_rect1 = this.border_rect) || undefined === this$border_rect1)) {
        this$border_rect1.setAttribute("height", String(this.size_.height))
      }
    } else {
      this.size_.width = 0
    }
  }
  t.prototype.widget_create = function () {
    if (!this.source_block) {
      throw new Error("[FieldMultilineInput] Trying to create widget before init on a block. ")
    }
    this.html_input = e.prototype.widget_create.call(this, "textarea", "blocklyHtmlTextarea")
    this.html_input.style.lineHeight = this.line_height + "px"
    this.html_input.style.paddingTop = this.source_block.is_shadow() && this.source_block.height <= this.theme.renderer.MIN_HEIGHT_SHADOW ? (this.source_block.height - this.line_height) / 2 + "px" : this.padding_y + "px"
    if (this.source_block.is_shadow()) {
      this.html_input.style.paddingLeft = "23px"
      this.html_input.style.paddingRight = 23 * .8 + "px"
    } else {
      this.html_input.style.paddingLeft = this.padding_x + "px"
      this.html_input.style.paddingRight = .8 * this.padding_x + "px"
    }
    return this.html_input
  }
  t.prototype.on_html_input_keydown = function (t) {
    if ("Enter" !== t.key) {
      e.prototype.on_html_input_keydown.call(this, t)
    }
  }
  t.prototype.on_html_input_change = function () {
    if (this.html_input && this.source_block) {
      if (!this.is_composition_inputting && this.max_length && this.html_input.value.length > this.max_length) {
        this.html_input.value = this.html_input.value.substr(0, this.max_length)
      }
      e.prototype.on_html_input_change.call(this)
      this.html_input.style.paddingTop = this.source_block.is_shadow() && this.source_block.height <= this.theme.renderer.MIN_HEIGHT_SHADOW ? (this.source_block.height - this.line_height) / 2 + "px" : this.padding_y + "px"
      if (!this.source_block.is_shadow()) {
        this.html_input.style.paddingLeft = this.padding_x + "px"
        this.html_input.style.paddingRight = this.padding_x + "px"
      }
    }
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 374 */"./field_textinput").FieldTextInput)
exports.FieldMultilineInput = a
