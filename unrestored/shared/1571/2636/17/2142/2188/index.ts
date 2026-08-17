/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2188
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.AngleController = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 1351 */"./1351")
var a = require(/* 123 */"../../../123/index")
var s = require(/* 579 */"../../../1022/579")
var c = function (e) {
  function t() {
    var t = e.call(this) || this
    t.pointer_elements = []
    t.base_color = new s.Color("#000000")
    t.mod = undefined
    t.center_position = undefined
    t.base_line_height = 1
    t.angle_interval = 15
    t.min_degree = -180
    t.max_degree = 180
    return t
  }
  (0, r.__extends)(t, e)
  t.prototype.show = function (e, t) {
    var /* [auto-meaningful-name] */e$source_block
    var /* [auto-meaningful-name] */this$owner
    var i
    var o = (null === (e$source_block = e.source_block) || undefined === e$source_block ? undefined : e$source_block.is_shadow()) ? e.source_block.parent_block : e.source_block
    if (o && (this.angle_scale || this.init(), this.owner = e, this.mod = e.mod_, this.base_color = o.get_colour(), this.update_angle_scale(), this.container.style.display = "block", this.position(), this.base_line)) {
      var a = (null === (i = null === (this$owner = this.owner) || undefined === this$owner ? undefined : this$owner.source_block) || undefined === i ? undefined : i.get_workspace().get_scale()) || 1
      var s = this.base_line.getBoundingClientRect()
      this.center_position = {
        left: s.left,
        top: s.top + this.base_line_height / 2 * a
      }
    }
  }
  t.prototype.init = function () {
    this.angle_scale = document.createElement("div")
    this.angle_scale.classList.add("blockly-controller", "angle-controller")
    this.angle_scale.setAttribute("tabindex", "-1")
    var e = (0, a.create_svg_element)("svg", {
      class: "blocklyIcon degree-mark-major"
    }, this.angle_scale)
    this.degree_mark_major = (0, a.create_svg_element)("use", {}, e)
    this.degree_mark_major.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + o.SYMBOL.DEGREE_MARK_MAJOR)
    var t = (0, a.create_svg_element)("svg", {
      class: "blocklyIcon degree-mark-minor"
    }, this.angle_scale)
    this.degree_mark_minor = (0, a.create_svg_element)("use", {}, t)
    this.degree_mark_minor.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + o.SYMBOL.DEGREE_MARK_MINOR)
    var n = document.createElement("div")
    n.classList.add("wrapper")
    this.angle_scale.appendChild(n)
    var r = document.createElement("div")
    r.classList.add("grey-circle")
    n.appendChild(r)
    this.mask = document.createElement("div")
    this.mask.classList.add("mask-wrapper")
    n.appendChild(this.mask)
    this.mask_top_clip = document.createElement("div")
    this.mask_top_clip.classList.add("mask-clip")
    this.mask.appendChild(this.mask_top_clip)
    this.mask_bottom_clip = document.createElement("div")
    this.mask_bottom_clip.classList.add("mask-clip")
    this.mask.appendChild(this.mask_bottom_clip)
    var i = document.createElement("div")
    i.classList.add("white-circle")
    this.mask.appendChild(i)
    this.base_line = document.createElement("div")
    this.base_line.classList.add("base-line")
    n.appendChild(this.base_line)
    this.center = document.createElement("div")
    this.center.classList.add("center")
    n.appendChild(this.center)
    this.pointer = document.createElement("div")
    this.pointer.classList.add("pointer")
    n.appendChild(this.pointer)
    var s = document.createElement("div")
    s.classList.add("pointer-line")
    this.pointer.appendChild(s)
    this.pointer_elements.push(s)
    var c = document.createElement("div")
    c.classList.add("pointer-arrow-wrapper")
    this.pointer.appendChild(c)
    var u = document.createElement("div")
    u.classList.add("pointer-arrow-circle")
    c.appendChild(u)
    this.pointer_elements.push(u)
    var l = (0, a.create_svg_element)("svg", {
      class: "blocklyIcon pointer-icon"
    }, u)
    var f = (0, a.create_svg_element)("use", {}, l)
    f.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + o.SYMBOL.DEGREE_POINTER)
    f.setAttribute("fill", "#ffffff")
    this.angle_scale.addEventListener("mousedown", this.bind_angle_event.bind(this))
    this.angle_scale.addEventListener("mouseup", this.set_pointer_position.bind(this))
    this.container.appendChild(this.angle_scale)
    document.body.appendChild(this.container)
  }
  t.prototype.update_angle_scale = function () {
    var e = this
    if (this.degree_mark_major && this.degree_mark_minor && this.base_line && this.center && this.pointer && this.mask && this.owner) {
      this.degree_mark_major.style.fill = this.base_color.toString()
      this.base_line.style.backgroundColor = this.base_color.toString()
      this.center.style.backgroundColor = this.base_color.toString()
      this.pointer_elements.forEach(function (t) {
        return t.style.backgroundColor = e.base_color.toString()
      })
      var t = new s.Color({
        r: this.base_color.r,
        g: this.base_color.g,
        b: this.base_color.b,
        a: .4
      })
      this.degree_mark_minor.style.fill = t.toString()
      var n = new s.Color({
        r: this.base_color.r,
        g: this.base_color.g,
        b: this.base_color.b,
        a: .2
      })
      this.mask.style.backgroundColor = n.toString()
      var r = this.field_to_angle_value(Number(this.owner.get_value()))
      this.set_angle_value(r)
    }
  }
  t.prototype.update_value = function (e) {
    var t = this.field_to_angle_value(e)
    this.set_angle_value(t)
  }
  t.prototype.field_to_angle_value = function (e) {
    var t = this.max_degree - this.min_degree
    var n = e % t
    if (true === this.mod) {
      if (n <= this.min_degree) {
        n += t
      } else {
        if (n > this.max_degree) {
          n -= t
        }
      }
    } else {
      if (n < this.min_degree) {
        n += t
      } else {
        if (n >= this.max_degree) {
          n -= t
        }
      }
    }
    return Math.round(n)
  }
  t.prototype.bind_angle_event = function () {
    var e = this.move_pointer.bind(this)
    document.addEventListener("mousemove", e)
    document.addEventListener("mouseup", function t() {
      document.removeEventListener("mousemove", e)
      document.removeEventListener("mouseup", t)
    })
  }
  t.prototype.move_pointer = function (e) {
    e.stopPropagation()
    this.update_angle_and_field_value(e.clientX, e.clientY)
  }
  t.prototype.set_pointer_position = function (e) {
    this.update_angle_and_field_value(e.clientX, e.clientY)
  }
  t.prototype.update_angle_and_field_value = function (e, t) {
    if (this.center_position) {
      var n = t
      var r = e - this.center_position.left
      var i = this.center_position.top - n
      var o = Math.atan2(i, r) / Math.PI * 180
      o = Math.round(o / this.angle_interval) * this.angle_interval
      if (undefined !== this.mod) {
        if (this.mod && o === this.min_degree) {
          o += this.angle_interval
        }
        if (!(this.mod || o !== this.max_degree)) {
          o -= this.angle_interval
        }
      }
      this.set_angle_value(o)
      if (this.owner) {
        this.owner.set_html_input_value(o.toString())
        this.owner.on_html_input_change()
      }
    }
  }
  t.prototype.set_angle_value = function (e) {
    if (this.pointer && this.mask_top_clip && this.mask_bottom_clip) {
      this.pointer.style.transform = "translateY(-50%) rotate(" + -e + "deg)"
      if (e > 0) {
        this.mask_top_clip.style.transform = "rotate(-" + e + "deg)"
        this.mask_bottom_clip.style.transform = "rotate(180deg)"
      } else {
        this.mask_top_clip.style.transform = "rotate(0deg)"
        this.mask_bottom_clip.style.transform = "rotate(" + (180 - e) + "deg)"
      }
    }
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 1127 */"../2187/1127").Controller)
exports.AngleController = c
