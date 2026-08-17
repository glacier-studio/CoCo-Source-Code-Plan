/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2187
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.SliderController = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 293 */"../../../123/293")
var a = require(/* 579 */"../../../1022/579")
var s = function (e) {
  function t() {
    var t = e.call(this) || this
    t.base_color = new a.Color("#000000")
    t.left_text = ""
    t.right_text = ""
    t.min = 0
    t.max = 100
    t.slider_width = 140
    return t
  }
  (0, r.__extends)(t, e)
  t.prototype.show = function (e, t) {
    var /* [auto-meaningful-name] */e$source_block
    if ("number" === typeof e.min_ && "number" === typeof e.max_) {
      var r = (null === (e$source_block = e.source_block) || undefined === e$source_block ? undefined : e$source_block.is_shadow()) ? e.source_block.parent_block : e.source_block
      if (r) {
        if (!this.slider) {
          this.init()
        }
        this.owner = e
        this.min = e.min_
        this.max = e.max_
        this.left_text = t.left_text
        this.right_text = t.right_text
        this.base_color = r.get_colour()
        this.update_slider()
        this.container.style.display = "block"
        this.position()
      }
    }
  }
  t.prototype.init = function () {
    this.slider = document.createElement("div")
    this.slider.classList.add("blockly-controller", "slider-controller")
    this.slider.setAttribute("tabindex", "-1")
    this.left_text_ele = document.createElement("span")
    this.left_text_ele.classList.add("slider-text")
    this.left_text_ele.innerText = this.left_text
    this.slider.appendChild(this.left_text_ele)
    var e = document.createElement("div")
    e.classList.add("slider-wrapper")
    this.slider.appendChild(e)
    this.slider_rail = document.createElement("div")
    this.slider_rail.classList.add("slider-rail")
    this.slider_rail.style.backgroundColor = this.base_color.toString()
    e.appendChild(this.slider_rail)
    this.slider_track = document.createElement("div")
    this.slider_track.classList.add("slider-track")
    this.slider_track.style.backgroundColor = this.base_color.toString()
    e.appendChild(this.slider_track)
    this.slider_handle = document.createElement("div")
    this.slider_handle.classList.add("slider-handle")
    this.slider_handle.style.backgroundColor = this.base_color.toString()
    e.appendChild(this.slider_handle)
    this.right_text_ele = document.createElement("span")
    this.right_text_ele.classList.add("slider-text")
    this.right_text_ele.innerText = this.right_text
    this.slider.appendChild(this.right_text_ele)
    this.slider_handle.addEventListener("mousedown", this.bind_slider_event.bind(this))
    e.addEventListener("mousedown", this.bind_slider_event.bind(this))
    e.addEventListener("mouseup", this.set_slider_handle_position.bind(this))
    this.container.appendChild(this.slider)
    document.body.appendChild(this.container)
  }
  t.prototype.update_slider = function () {
    if (this.slider_track && this.slider_handle && this.slider_rail && this.left_text_ele && this.right_text_ele && this.owner) {
      this.slider_handle.style.backgroundColor = this.base_color.toString()
      var e = new a.Color({
        r: this.base_color.r,
        g: this.base_color.g,
        b: this.base_color.b,
        a: .6
      })
      this.slider_track.style.backgroundColor = e.toString()
      var t = new a.Color({
        r: this.base_color.r,
        g: this.base_color.g,
        b: this.base_color.b,
        a: .2
      })
      this.slider_rail.style.backgroundColor = t.toString()
      this.left_text_ele.innerText = this.left_text
      this.right_text_ele.innerText = this.right_text
      var n = this.field_to_slider_value(Number(this.owner.get_value()))
      this.set_slider_value(n)
    }
  }
  t.prototype.update_value = function (e) {
    var t = this.field_to_slider_value(e)
    this.set_slider_value(t)
  }
  t.prototype.field_to_slider_value = function (e) {
    var t = (0, o.clamp)(e, this.min, this.max)
    var n = this.min < 0 ? t - this.min : t
    var r = this.max - this.min
    return Math.round(n / r * this.slider_width)
  }
  t.prototype.bind_slider_event = function () {
    var e = this
    if (this.slider_rail) {
      this.slider_rail_left = this.slider_rail.getBoundingClientRect().left
      var t = this.move_slider_handle.bind(this)
      document.addEventListener("mousemove", t)
      document.addEventListener("mouseup", function n() {
        e.slider_rail_left = undefined
        document.removeEventListener("mousemove", t)
        document.removeEventListener("mouseup", n)
      })
    }
  }
  t.prototype.move_slider_handle = function (e) {
    e.stopPropagation()
    this.update_slider_and_field_value(e.clientX)
  }
  t.prototype.set_slider_handle_position = function (e) {
    if (this.slider_rail) {
      this.slider_rail_left = this.slider_rail.getBoundingClientRect().left
      this.update_slider_and_field_value(e.clientX)
    }
  }
  t.prototype.update_slider_and_field_value = function (e) {
    var /* [auto-meaningful-name] */this$owner
    var n
    if (this.slider_rail_left) {
      var r = (null === (n = null === (this$owner = this.owner) || undefined === this$owner ? undefined : this$owner.source_block) || undefined === n ? undefined : n.get_workspace().get_scale()) || 1
      var i = (e - this.slider_rail_left) / r
      var a = (0, o.clamp)(i, 0, this.slider_width)
      var s = this.max - this.min
      var c = this.min + Math.round(a / this.slider_width * s)
      this.set_slider_value(a)
      if (this.owner) {
        this.owner.set_html_input_value(c.toString())
        this.owner.on_html_input_change()
      }
    }
  }
  t.prototype.set_slider_value = function (e) {
    if (this.slider_handle && this.slider_track) {
      this.slider_handle.style.left = e + "px"
      this.slider_track.style.width = e + "px"
    }
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 1127 */"./1127").Controller)
exports.SliderController = s
