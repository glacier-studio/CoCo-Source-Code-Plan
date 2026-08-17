/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1127
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Controller = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../1058/125")
var a = require(/* 123 */"../../../123/index")
var s = function () {
  function e() {
    this.container = (0, a.create_dom)("div", {
      style: "position: fixed",
      class: "blocklyWidgetDiv"
    })
    this.container.style.display = "none"
  }
  e.prototype.show = function (e, t) {}
  e.prototype.hide = function () {
    this.container.style.display = "none"
  }
  e.prototype.update_value = function (e) {}
  e.prototype.position = function () {
    if (this.owner && this.container) {
      var /* [auto-meaningful-name] */this$owner$source_block = this.owner.source_block
      if (this$owner$source_block) {
        var t = this$owner$source_block.get_workspace().get_scale() || 1
        this.container.style.transformOrigin = "top left"
        this.container.style.transform = "scale(" + t + ")"
        var n = (this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_FIELD + 1) * t
        var /* [auto-meaningful-name] */this$container$getBoundingClientRect$width = this.container.getBoundingClientRect().width
        if (!this$owner$source_block.is_shadow()) {
          var i = this.owner.get_absolute_xy()
          var o = this.owner.get_size()
          var s = o.width * t
          var c = o.height * t
          var u = i[0] + s / 2 - this$container$getBoundingClientRect$width / 2
          var l = i[1] + c + n
          this.container.style.left = u + "px"
          return void (this.container.style.top = l + "px")
        }
        var /* [auto-meaningful-name] */this$owner$source_block$svg_group = this$owner$source_block.svg_group
        var d = (0, a.get_page_offset)(this$owner$source_block$svg_group)
        var h = this$owner$source_block.width * t
        var p = this$owner$source_block.height * t
        var _ = d[0] + h / 2 - this$container$getBoundingClientRect$width / 2
        var A = d[1] + p + n
        this.container.style.left = _ + "px"
        this.container.style.top = A + "px"
      }
    }
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], e.prototype, "theme", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Controller = s
