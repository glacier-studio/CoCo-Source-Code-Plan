/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2205
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldDefaultValue = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../../../../../../unrestored/shared/1571/2636/1058/125")
var a = require(/* 123 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/index")
var s = function (e) {
  function t(t) {
    var n = e.call(this, {
      text: t.enable_empty ? t.default_value : t.default_value || "0",
      opt_validator: t.opt_validator
    }) || this
    n.has_been_edited = false
    n.enable_empty = false
    n.field_type = "FieldDefaultValue"
    if (undefined !== t.enable_empty) {
      n.enable_empty = t.enable_empty
    }
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.get_has_been_edited = function () {
    return this.has_been_edited
  }
  t.prototype.set_has_been_edited = function (e) {
    if (e !== this.has_been_edited) {
      if (this.source_block && this.events.is_enabled()) {
        var t = this.events.get_group()
        this.events.set_group(t || true)
        this.events.fire(this.change_event_factory("field_default_value", {
          block: this.source_block,
          old_value: this.has_been_edited,
          new_value: e,
          name: this.name
        }))
      }
      this.has_been_edited = e
      this.rerender()
    }
  }
  t.prototype.rerender = function () {
    if (this.text_element) {
      if (this.has_been_edited) {
        (0, a.remove_class_if_necessary)(this.text_element, "blocklyTextDefault")
      } else {
        (0, a.add_class)(this.text_element, "blocklyTextDefault")
      }
    }
  }
  t.prototype.on_html_input_change = function () {
    this.set_has_been_edited(true)
    e.prototype.on_html_input_change.call(this)
  }
  t.prototype.get_validated_value = function (e, t) {
    return this.enable_empty || e ? e : t
  }
  t.prototype.widget_dispose = function () {
    var t = this
    return function () {
      if (t.html_input) {
        var n = t.get_validated_value(t.html_input.value, t.html_input.defaultValue)
        e.prototype.widget_dispose.call(t, n)()
      }
    }
  }
  t.prototype.init = function () {
    e.prototype.init.call(this)
    if (this.text_element) {
      if (!this.has_been_edited) {
        (0, a.add_class)(this.text_element, "blocklyTextDefault")
      }
    }
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.widget_div)], t.prototype, "widget_div", undefined)
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 374 */"./field_textinput").FieldTextInput)
exports.FieldDefaultValue = s
