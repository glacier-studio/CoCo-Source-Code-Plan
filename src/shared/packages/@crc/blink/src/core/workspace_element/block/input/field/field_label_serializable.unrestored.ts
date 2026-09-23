/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2201
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldLabelSerializable = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.editable = true
    n.field_type = "FieldLabelSerializable"
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.get_display_text = function () {
    var /* [auto-meaningful-name] */this$text_ = this.text_
    if (this$text_.length > this.max_display_length) {
      this$text_ = this$text_.substring(0, this.max_display_length - 2) + "…"
    }
    return this$text_ = this$text_.replace(/\s/g, " ")
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 658 */"./field_label").FieldLabel)
exports.FieldLabelSerializable = o
