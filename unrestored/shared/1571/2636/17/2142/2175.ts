/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2175
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Extensions = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 195 */"../../123/195/index")
var s = require(/* 852 */"../499/852")
var c = require(/* 214 */"../../1022/214")
var u = function () {
  function e() {
    this.extensions = {}
    this.mutators = {}
    this.MUTATOR_PROPERTIES_ = ["domToMutation", "mutationToDom"]
  }
  e.prototype.register = function (e, t) {
    if ((0, s.string_is_empty_or_whitespace)(e)) {
      throw new Error("Error when registering extension \"" + e + "\": invalid extension name. ")
    }
    if (this.extensions[e]) {
      console.error("Error when registering extension \"" + e + "\": extension existed.")
    } else {
      this.extensions[e] = t
    }
  }
  e.prototype.register_mixin = function (e, t) {
    var n = this.check_existed_mutator_property(t)
    if (n) {
      throw Error("Error when registering extension \"" + e + "\": Trying to register mixin with mutator property: " + n + ". ")
    }
    this.register(e, function () {
      this.mixin(t)
    })
  }
  e.prototype.unregister = function (e) {
    if (e in this.extensions) {
      delete this.extensions[e]
    }
  }
  e.prototype.register_mutator = function (e, t, n) {
    for (var r = 0; r < this.MUTATOR_PROPERTIES_.length; r++) {
      var i = this.MUTATOR_PROPERTIES_[r]
      if (!t.hasOwnProperty(i)) {
        throw new Error("Error when registering mutator \"" + e + "\": missing required property \"" + i + "\". ")
      }
      if (!(0, c.is_func)(t[i])) {
        throw new Error("Error when registering mutator \"" + e + "\": required property \"" + i + "\" must be a function. ")
      }
    }
    this.mutators[e] = function () {
      this.mixin(t)
      if (n) {
        n.apply(this)
      }
    }
  }
  e.prototype.unregister_mutator = function (e) {
    if (e in this.mutators) {
      delete this.mutators[e]
    }
  }
  e.prototype.apply = function (e, t) {
    var n = "Error when applying extension \"" + e + "\": "
    var r = this.extensions[e]
    if (!(0, c.is_func)(r)) {
      throw new Error(n + "extension not found.")
    }
    var i = this.get_mutator_properties(t)
    r.apply(t)
    if (!this.mutator_properties_match(i, t)) {
      throw new Error(n + "mutation properties changed when applying a non-mutator extension.")
    }
  }
  e.prototype.apply_mutator = function (e, t) {
    var n = "Error when applying mutator \"" + e + "\": "
    var r = this.mutators[e]
    if (!(0, c.is_func)(r)) {
      throw new Error(n + "mutator not found.")
    }
    var i = this.check_existed_mutator_property(t)
    if (i) {
      throw Error(n + "mutation property " + i + " already existed on block " + t)
    }
    r.apply(t)
    var o = this.check_absent_mutator_property(t)
    if (o) {
      throw new Error(n + "applied a mutator didn't add \"" + o + "\"")
    }
  }
  e.prototype.check_existed_mutator_property = function (e) {
    for (var t = 0; t < this.MUTATOR_PROPERTIES_.length; t++) {
      var n = this.MUTATOR_PROPERTIES_[t]
      if (e.hasOwnProperty(n)) {
        return n
      }
    }
  }
  e.prototype.check_absent_mutator_property = function (e) {
    for (var t = 0; t < this.MUTATOR_PROPERTIES_.length; t++) {
      var n = this.MUTATOR_PROPERTIES_[t]
      if (!e.hasOwnProperty(n)) {
        return n
      }
    }
  }
  e.prototype.get_mutator_properties = function (e) {
    for (var t = [], n = 0; n < this.MUTATOR_PROPERTIES_.length; n++) {
      t.push(e[this.MUTATOR_PROPERTIES_[n]])
    }
    return t
  }
  e.prototype.mutator_properties_match = function (e, t) {
    var n = this.get_mutator_properties(t)
    if (n.length != e.length) {
      return false
    }
    for (var r = 0; r < n.length; r++) {
      if (e[r] != n[r]) {
        return false
      }
    }
    return true
  }
  e.prototype.build_tooltip_for_dropdown = function (e, t) {
    var n = this
    var r = []
    if (document) {
      this.utils.run_after_page_load(function () {
        for (var e in t) n.utils.check_message_references(t[e])
      })
    }
    var i = this
    return function () {
      var n = this
      if (this.type && -1 === r.indexOf(this.type)) {
        i.check_dropdown_options_in_table(this, e, t)
        r.push(this.type)
      }
      this.set_tooltip(function () {
        var o = n.get_field_value(e)
        var a = o ? t[o] : undefined
        if (undefined == a) {
          if (-1 === r.indexOf(n.type)) {
            var s = "No tooltip mapping for value " + o + " of field " + e
            if (undefined != n.type) {
              s += " of block type " + n.type
            }
            console.warn(s + ".")
          }
        } else {
          a = i.utils.replace_message_references(a)
        }
        return a || ""
      })
    }
  }
  e.prototype.check_dropdown_options_in_table = function (e, t, n) {
    var r = e.get_field(t)
    if (r && (0, c.is_func)(r.is_dynamic) && !r.is_dynamic()) {
      for (var i = r.get_options(), o = 0; o < i.length; ++o) {
        var s = i[o][a.OptionTypes.VALUE]
        if (!(undefined != s && undefined != n[s])) {
          console.warn("No tooltip mapping for value " + s + " of field " + t + " of block type " + e.type)
        }
      }
    }
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.utils)], e.prototype, "utils", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Extensions = u
