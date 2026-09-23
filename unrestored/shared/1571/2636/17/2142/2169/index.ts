/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2169
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.BlockAnimations = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 258 */"@kitten-team/gl-matrix")
var a = require(/* 125 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var s = require(/* 123 */"../../../123/index")
var c = require(/* 579 */"../../../1022/579")
var u = require(/* 763 */"./763")
var l = function () {
  function e() {
    this.disconnectUiEffectTimeoutId = 0
  }
  e.prototype.dispose_ui_effect = function (e) {
    var t = e.get_workspace()
    var n = e.get_svg_root()
    var r = t.get_injection_div()
    t.get_audio_manager().play("delete")
    if (n && r) {
      var i = this.utils.get_injection_div_xy(n)
      var o = t.get_scale()
      var a = (0, s.create_svg_element)("svg", {
        class: "blocklyBlockDisposeWrapper"
      })
      a.style.transformOrigin = "left top"
      a.style.overflow = "visible"
      this.utils.set_transform_style(a, i[0], i[1], o)
      var c = (0, s.clone_node)(n, true)
      c.setAttribute("transform", "")
      a.appendChild(c)
      r.appendChild(a)
      var u = function e() {
        (0, s.remove_node)(a)
        c.removeEventListener("webkitAnimationEnd", e)
        c.removeEventListener("animationend", e)
        clearTimeout(l)
      }
      c.addEventListener("webkitAnimationEnd", u)
      c.addEventListener("animationend", u)
      var l = window.setTimeout(u, 500)
      var f = e.get_height_width()
      c.setAttribute("transform-origin", (f.width / 2 - this.theme.renderer.BLOCK_LEFT_TOP[0]) * o + "px " + (f.height / 2 - this.theme.renderer.BLOCK_LEFT_TOP[1]) * o + "px")
      c.classList.add("blocklyBlockDispose")
      return c
    }
    console.warn("UI effects cannot be played without svg group or injection div.")
  }
  e.prototype.connection_ui_effect = function (e) {
    var t = e.get_svg_root()
    if (undefined == t) {
      throw new ReferenceError("Cannot connect ui effect to block without svg root.")
    }
    var n = e.get_workspace()
    n.get_audio_manager().play("click")
    if (!(n.get_scale() < 1)) {
      var r = n.get_svg_xy(t)
      if (e.output_connection) {
        o.vec2.add(r, r, [-3 * n.get_scale(), 13 * n.get_scale()])
      } else {
        if (e.previous_connection) {
          o.vec2.add(r, r, [0 * n.get_scale(), 3 * n.get_scale()])
        }
      }
      var i = e.workspace.options.notch ? e.workspace.get_scale() * (this.theme.renderer.NOTCH_WIDTH / 2 + this.theme.renderer.NTOCH_START_PADDING) : 0
      var a = (0, s.create_svg_element)("circle", {
        cx: r[0] + i,
        cy: r[1],
        r: 0,
        fill: "#fff"
      }, n.get_parent_svg())
      this.connection_ui_step(a, Date.now(), n.get_scale())
    }
  }
  e.prototype.connection_ui_step = function (e, t, n) {
    var r = this
    var i = (Date.now() - t) / 150
    if (i > 1) {
      (0, s.remove_node)(e)
    } else {
      e.setAttribute("r", String(15 * i * n))
      e.style.opacity = String(1 - i)
      window.setTimeout(function () {
        r.connection_ui_step(e, t, n)
      }, 10)
    }
  }
  e.prototype.disconnect_ui_effect = function (e) {
    e.workspace.get_audio_manager().play("disconnect")
    if (!(e.workspace.get_scale() < 1)) {
      if (e.svg_group && e.use_drag_surface) {
        e.svg_group.classList.add("dd")
        this.disconnectUiEffectTimeoutId = window.setTimeout(function () {
          e.svg_group.classList.remove("dd")
          var t = e.svg_group.getAttribute("transform")
          e.svg_group.setAttribute("transform", (undefined == t ? "" : t) + "skewX(0)")
        }, 100)
      }
    }
  }
  e.prototype.disconnect_ui_effect_stop = function (e) {
    clearTimeout(this.disconnectUiEffectTimeoutId)
    e.svg_group.classList.remove("dd")
    var t = e.svg_group.getAttribute("transform")
    e.svg_group.setAttribute("transform", undefined == t ? "" : t)
  }
  e.prototype.toolbox_click_effect = function () {}
  e.prototype.block_flash_effect = function (e, t) {
    var /* [auto-meaningful-name] */e$svg_path
    var /* [auto-meaningful-name] */e$svg_path1
    var /* [auto-meaningful-name] */e$svg_path2
    var /* [auto-meaningful-name] */e$svg_path3
    var /* [auto-meaningful-name] */e$svg_path4
    var /* [auto-meaningful-name] */e$svg_path5
    var /* [auto-meaningful-name] */e$svg_path6
    if (t) {
      var d = e.get_colour()
      var h = (0, c.rgb_to_hsv)(d.r, d.g, d.b)
      var p = (0, c.hsv_to_rgb)({
        h: h.h,
        s: h.s + 20,
        v: h.v - 15
      })
      var _ = new c.Color({
        r: p[0],
        g: p[1],
        b: p[2],
        a: d.a
      })
      var A = d.toString()
      var g = _.toString()
      var v = (0, s.create_svg_element)("animate", {
        id: "BlockFlashAnimation",
        attributeName: "fill",
        attributeType: "XML",
        values: A + " ; " + g + " ; " + A,
        dur: "1s",
        repeatCount: "indefinite",
        keyTimes: "0 ; 0.5; 1",
        calcMode: "spline",
        keySplines: "0.25,0.1,0.25,1;0.25,0.1,0.25,1"
      })
      if (!(null === (e$svg_path = e.svg_path) || undefined === e$svg_path)) {
        e$svg_path.removeAttribute("fill")
      }
      if (e.is_starting_block()) {
        if (y = e.get_svg_root().querySelector(".blockly_head_icon_wrapper")) {
          y.removeAttribute("fill")
        }
      }
      if (e.is_output_block() && e.parent_block) {
        if (!(null === (e$svg_path1 = e.svg_path) || undefined === e$svg_path1)) {
          e$svg_path1.setAttribute("stroke", "#FFFFFF")
        }
        if (!(null === (e$svg_path2 = e.svg_path) || undefined === e$svg_path2)) {
          e$svg_path2.setAttribute("stroke-width", "2px")
        }
      } else {
        e.get_svg_root().setAttribute("filter", "url(#" + u.FILTER.FOCUSED + ")")
      }
      return void e.get_svg_root().appendChild(v)
    }
    var m = e.svg_group.querySelector("#BlockFlashAnimation")
    if (m) {
      e.svg_group.removeChild(m)
    }
    if (!(null === (e$svg_path3 = e.svg_path) || undefined === e$svg_path3)) {
      e$svg_path3.removeAttribute("filter")
    }
    var y
    var b = e.get_colour().toString()
    if (!(null === (e$svg_path4 = e.svg_path) || undefined === e$svg_path4)) {
      e$svg_path4.setAttribute("fill", b)
    }
    if (e.is_starting_block()) {
      if (y = e.get_svg_root().querySelector(".blockly_head_icon_wrapper")) {
        y.setAttribute("fill", b)
        y.removeAttribute("filter")
      }
    }
    if (!(null === (e$svg_path5 = e.svg_path) || undefined === e$svg_path5)) {
      e$svg_path5.setAttribute("stroke", e.get_border_colour().toString())
    }
    if (!(null === (e$svg_path6 = e.svg_path) || undefined === e$svg_path6)) {
      e$svg_path6.setAttribute("stroke-width", e.get_stroke_width())
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.utils)], e.prototype, "utils", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.theme)], e.prototype, "theme", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.BlockAnimations = l
