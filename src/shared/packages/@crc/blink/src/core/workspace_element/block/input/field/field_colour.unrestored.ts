/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：735
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldColour = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../../../../../../unrestored/shared/1571/2636/1058/125")
var a = require(/* 123 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/index")
var s = require(/* 214 */"../../../../../../../../../../../unrestored/shared/1571/2636/1022/214")
var c = require(/* 723 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/723")
var u = require(/* 293 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/293")
var l = function (e) {
  function t(t) {
    var r = e.call(this, t.colour, t.opt_validator) || this
    r.field_type = "FieldColour"
    r.colour_ = n.OVERRIDE_COLOR || "#cc33cc"
    r.size_ = new u.Size(40, 30)
    r.colour_ = t.colour
    return r
  }
  var n;
  (0, r.__extends)(t, e)
  n = t
  t.prototype.init = function () {
    var /* [auto-meaningful-name] */this$field_group
    var n = this
    e.prototype.init.call(this, false)
    if (!this.border_rect) {
      this.border_rect = (0, a.create_svg_element)("rect", {
        rx: 4,
        ry: 4
      }, this.field_group)
    }
    this.border_rect.setAttribute("width", String(this.size_.width))
    this.border_rect.setAttribute("height", String(this.size_.height))
    this.border_rect.setAttribute("stroke", "#fff")
    this.border_rect.setAttribute("stroke-width", "1.5")
    this.border_rect.setAttribute("rx", "15")
    this.border_rect.setAttribute("ry", "15")
    this.border_rect.addEventListener("mouseover", function () {
      if (n.runtime_data.editing !== n && n.border_rect) {
        n.border_rect.setAttribute("stroke-width", "3")
      }
    })
    this.border_rect.addEventListener("mouseleave", function () {
      if (n.runtime_data.editing !== n && n.border_rect) {
        n.border_rect.setAttribute("stroke-width", "1.5")
      }
    })
    if (!this.background_transparent_element) {
      this.background_transparent_element = (0, a.create_svg_element)("rect", {
        rx: 15,
        ry: 15,
        width: 40,
        height: 30,
        fill: "url(#transparentPattern)"
      })
      if (!(null === (this$field_group = this.field_group) || undefined === this$field_group)) {
        this$field_group.insertBefore(this.background_transparent_element, this.border_rect)
      }
    }
    this.set_value(this.get_value())
  }
  t.prototype.get_value = function () {
    return this.colour_
  }
  t.prototype.set_value = function (e) {
    var /* [auto-meaningful-name] */this$border_rect
    var n
    if (this.source_block && this.events.is_enabled() && this.colour_ != e) {
      n = this.change_event_factory("field", {
        block: this.source_block,
        old_value: this.colour_,
        new_value: e,
        name: this.name
      })
    }
    this.colour_ = e
    if (!(null === (this$border_rect = this.border_rect) || undefined === this$border_rect)) {
      this$border_rect.setAttribute("fill", this.colour_)
    }
    if (n) {
      this.events.fire(n)
    }
  }
  t.prototype.render_ = function () {
    if (!(0, s.is_nil)(this.field_group)) {
      if (this.border_rect) {
        this.field_group.appendChild(this.border_rect)
      }
    }
  }
  t.prototype.show_editor = function () {
    var /* [auto-meaningful-name] */this$source_block
    var t = this
    this.widget_div.show(this, this.widget_dispose.bind(this))
    if (this.border_rect) {
      this.border_rect.setAttribute("stroke-width", "3")
      this.border_rect.setAttribute("filter", "url(#hiblur)")
    }
    var r = document.createElement("div")
    r.classList.add("color_selector", "clearfix")
    n.COLOURS.forEach(function (e) {
      var t = document.createElement("i")
      t.classList.add("color_selector_item")
      t.dataset.value = e
      t.style.background = e
      r.appendChild(t)
    })
    var i = (0, a.get_viewport_size)()
    var o = (0, c.get_viewport_page_offset)(document)
    var u = this.get_absolute_xy()
    var l = this.get_scaled_bbox()
    this.widget_div.DIV.appendChild(r)
    var f = (0, c.get_size)(r)
    if (u[1] + f.height + l.height >= i.height + o[1]) {
      u[1] -= f.height - 1
    } else {
      u[1] += l.height - 1
    }
    if (u[0] > i.width + o[0] - f.width) {
      u[0] = i.width + o[0] - f.width
    }
    this.widget_div.position(u[0], u[1], i, o, null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.RTL)
    r.addEventListener("click", function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      if (e$target.classList.contains("color_selector_item")) {
        var /* [auto-meaningful-name] */e$target$dataset$value = e$target.dataset.value
        t.widget_div.hide()
        if (t.source_block) {
          e$target$dataset$value = t.call_validator(e$target$dataset$value)
        }
        if (!(0, s.is_nil)(e$target$dataset$value)) {
          t.set_value(e$target$dataset$value)
        }
      }
    })
  }
  t.prototype.widget_dispose = function () {
    this.focus(false)
    if (this.border_rect) {
      this.border_rect.setAttribute("stroke-width", "1.5")
      this.border_rect.removeAttribute("filter")
    }
    this.events.set_group(false)
  }
  t.prototype.layout = function (e, t) {
    if (undefined != this.field_group) {
      e[0] += this.render_sep
      this.field_group.setAttribute("transform", "translate(" + e[0] + ", " + (e[1] + (t - this.size_.height) / 2) + ")")
      e[0] += this.size_.width
    }
  }
  t.COLUMNS = 7
  t.COLOURS = ["#ffffff", "#cccccc", "#c0c0c0", "#999999", "#666666", "#333333", "#000000", "#ffcccc", "#ff6666", "#ff0000", "#cc0000", "#990000", "#660000", "#330000", "#ffcc99", "#ff9966", "#ff9900", "#ff6600", "#cc6600", "#993300", "#663300", "#ffff99", "#ffff66", "#ffcc66", "#ffcc33", "#cc9933", "#996633", "#663333", "#ffffcc", "#ffff33", "#ffff00", "#ffcc00", "#999900", "#666600", "#333300", "#99ff99", "#66ff99", "#33ff33", "#33cc00", "#009900", "#006600", "#003300", "#99ffff", "#33ffff", "#66cccc", "#00cccc", "#339999", "#336666", "#003333", "#ccffff", "#66ffff", "#33ccff", "#3366ff", "#3333ff", "#000099", "#000066", "#ccccff", "#9999ff", "#6666cc", "#6633ff", "#6600cc", "#333399", "#330099", "#ffccff", "#ff99ff", "#cc66cc", "#cc33cc", "#993399", "#663366", "#330033"];
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.widget_div)], t.prototype, "widget_div", undefined)
  return t = n = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 503 */"./field").Field)
exports.FieldColour = l
