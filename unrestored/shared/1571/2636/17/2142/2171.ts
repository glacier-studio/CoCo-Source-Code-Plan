/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2171
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Css = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = function () {
  function e() {
    this.style_sheet = undefined
    this.current_cursor = ""
    this.media_path = ""
    this.Cursor = {
      OPEN: "handopen",
      CLOSED: "handclosed",
      DELETE: "handdelete"
    }
  }
  e.prototype.inject = function (e, t) {
    if (!this.style_sheet) {
      var /* [auto-meaningful-name] */$blocklyDraggable_n = ".blocklyDraggable {}\n"
      if (e) {
        $blocklyDraggable_n += this.CONTENT
      }
      this.media_path = t.replace(/[\\\/]$/, "")
      $blocklyDraggable_n = $blocklyDraggable_n.replace(/<<<PATH>>>/g, this.media_path)
      var r = document.createElement("style")
      if (document.head) {
        document.head.insertBefore(r, document.head.firstChild)
      } else {
        var i = document.createElement("head")
        i.insertBefore(r, i.firstChild)
        document.appendChild(i)
      }
      var o = document.createTextNode($blocklyDraggable_n)
      r.appendChild(o)
      this.style_sheet = r.sheet
    }
  }
  e.prototype.set_cursor = function (e) {
    if (this.current_cursor != e) {
      this.current_cursor = e
      for (var t = "url('" + this.media_path + "/" + e + ".cur), auto", n = document.getElementsByClassName("blocklyToolboxDiv"), r = 0; r < n.length; r++) {
        var i = n[r]
        if (e == this.Cursor.DELETE) {
          i.style.cursor = t
        } else {
          i.style.cursor = ""
        }
      }
    }
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.css_content)], e.prototype, "CONTENT", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Css = a
