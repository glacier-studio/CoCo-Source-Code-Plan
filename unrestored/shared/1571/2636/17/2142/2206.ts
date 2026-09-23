/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2206
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Input = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 214 */"../../1022/214")
var s = function () {
  function e(e) {
    this.field_width = 0
    this.field_height = 0
    this.margin_left = this.theme.renderer.SEP_SPACE_X
    this.render_width = 0
    this.render_height = 0
    this.width = 0
    this.height = 0
    this.visible_ = true
    this.setCheck = this.set_check
    this.appendField = this.append_field
    this.type = e.type
    this.name = e.name
    this.source_block = e.block
    this.connection = e.connection
    this.fieldRow = []
  }
  e.prototype.is_visible = function () {
    return this.visible_
  }
  e.prototype.init = function () {
    if (undefined != this.source_block) {
      var e = this.source_block.get_workspace()
      if (undefined != e && e.rendered) {
        for (var t = 0; t < this.fieldRow.length; t++) {
          this.fieldRow[t].init()
        }
      }
    } else {
      console.warn("Trying to init an input without its source block.")
    }
  }
  e.prototype.dispose = function () {
    for (var e = 0; e < this.fieldRow.length; e++) {
      this.fieldRow[e].dispose()
    }
    if (this.connection) {
      this.connection.dispose()
    }
    delete this.source_block
  }
  e.prototype.set_visible = function (e) {
    var t = []
    if (this.visible_ == e) {
      return t
    }
    this.visible_ = e
    for (var n = 0; n < this.fieldRow.length; n++) {
      var r = this.fieldRow[n]
      if (!r.opt_is_head_) {
        r.set_visible(e)
      }
    }
    if (this.connection) {
      if (e) {
        t = this.connection.unhide_all()
      } else {
        this.connection.hide_all()
      }
      var i = this.connection.targetBlock()
      if (i) {
        i.set_visible_as_child(e)
      }
    }
    return t
  }
  e.prototype.set_check = function (e) {
    if (!this.connection) {
      throw new Error("This input does not have a connection.")
    }
    this.connection.set_check(e)
    return this
  }
  e.prototype.append_field = function (e, t) {
    this.insert_field_at(this.fieldRow.length, e, t)
    return this
  }
  e.prototype.insert_field_at = function (e, t, n) {
    if (e < 0 || e > this.fieldRow.length) {
      throw new Error("index " + e + " out of bounds.")
    }
    return t || n ? ((0, a.is_string)(t) && (t = this.field_label_factory({
      text: this.utils.replace_message_references(t)
    })), t.source_block = this.source_block, undefined != n && (t.name = n), undefined != this.source_block && this.source_block.rendered && t.init(), (0, a.is_field_dropdown)(t) && t.prefix_field && (e = this.insert_field_at(e, t.prefix_field)), this.fieldRow.splice(e, 0, t), ++e, (0, a.is_field_dropdown)(t) && t.suffix_field && (e = this.insert_field_at(e, t.suffix_field)), undefined != this.source_block && this.source_block.rendered && this.source_block.render(), e) : 0
  }
  e.prototype.remove_field = function (e) {
    for (var /* [auto-meaningful-name] */this$source_block, /* [auto-meaningful-name] */this$source_block1, r = 0, /* [auto-meaningful-name] */this$fieldRow$length = this.fieldRow.length; r < this$fieldRow$length; r++) {
      var o = this.fieldRow[r]
      if (o.name === e) {
        o.dispose()
        this.fieldRow.splice(r, 1)
        if (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.rendered) {
          if (!(null === (this$source_block1 = this.source_block) || undefined === this$source_block1)) {
            this$source_block1.render()
          }
        }
        return true
      }
    }
    return false
  }
  e.prototype.get_field = function (e) {
    for (var t = 0, /* [auto-meaningful-name] */this$fieldRow$length = this.fieldRow.length; t < this$fieldRow$length; t++) {
      var r = this.fieldRow[t]
      if (r.name === e) {
        return r
      }
    }
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.utils)], e.prototype, "utils", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], e.prototype, "theme", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.FieldLabel)], e.prototype, "field_label_factory", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Input = s
