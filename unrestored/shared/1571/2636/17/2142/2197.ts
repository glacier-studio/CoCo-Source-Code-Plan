/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2197
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.WorkspaceDragSurfaceSvg = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 123 */"../../123/index")
var s = require(/* 537 */"../../123/537")
var c = function () {
  function e(e, t) {
    this.previous_sibling_ = undefined
    this.container_ = e
    this.SVG_ = (0, a.create_svg_element)("svg", {
      xmlns: s.SVG_NS,
      "xmlns:html": s.HTML_NS,
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      version: "1.1",
      class: "blocklyWsDragSurface"
    })
    if (t) {
      (0, a.insert_after)(this.SVG_, t)
    } else {
      this.container_.appendChild(this.SVG_)
    }
  }
  e.prototype.get_svg = function () {
    return this.SVG_
  }
  e.prototype.translate_surface = function (e, t) {
    e = Number(e.toFixed(0))
    t = Number(t.toFixed(0))
    this.SVG_.style.display = "block";
    (0, a.set_css_transform)(this.SVG_, "translate3d(" + e + "px, " + t + "px, 0px)")
  }
  e.prototype.set_contents_and_show = function (e, t, n, r) {
    if (!this.SVG_) {
      throw new Error("No Svg Element")
    }
    if (0 !== this.SVG_.childNodes.length) {
      console.error("Already dragging a block.")
    }
    this.previous_sibling_ = n
    this.SVG_.style.display = "none"
    var i = document.createDocumentFragment()
    i.appendChild(e)
    if (t) {
      i.appendChild(t)
    }
    if (i.firstElementChild) {
      i.firstElementChild.setAttribute("transform", "translate(0, 0) scale(" + r + ")")
    }
    if (i.lastElementChild) {
      i.lastElementChild.setAttribute("transform", "translate(0, 0) scale(" + r + ")")
    }
    this.SVG_.appendChild(i)
    this.SVG_.style.display = "block"
  }
  e.prototype.get_surface_translation = function () {
    return this.utils.get_relative_xy(this.SVG_)
  }
  e.prototype.clear_and_hide = function (e) {
    if (!this.SVG_) {
      throw new Error("No Svg_")
    }
    var t = this.SVG_.childNodes[0]
    var n = this.SVG_.childNodes[1]
    if (!t || !n || !(0, a.has_class)(t, "blocklyBlockCanvas") || !(0, a.has_class)(n, "blocklyBubbleCanvas")) {
      throw new Error("Couldn't clear and hide the drag surface.  A node was missing.")
    }
    if (undefined != this.previous_sibling_) {
      (0, a.insert_after)(t, this.previous_sibling_)
    } else {
      e.insertBefore(t, e.firstChild)
    }
    (0, a.insert_after)(n, t)
    this.SVG_.style.display = "none"
    if (0 != this.SVG_.childNodes.length) {
      console.error("Drag surface was not cleared.")
    }
    (0, a.set_css_transform)(this.SVG_, "")
    this.previous_sibling_ = undefined
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.utils)], e.prototype, "utils", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.WorkspaceDragSurfaceSvg = c
