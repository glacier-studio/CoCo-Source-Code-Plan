/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：374
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldTextInput = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../../../../../../unrestored/shared/1571/2636/1058/125")
var a = require(/* 293 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/293")
var s = require(/* 123 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/index")
var c = require(/* 478 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/478")
var u = function (e) {
  function t(t) {
    var n = e.call(this, t.text, t.opt_validator) || this
    n.field_type = "FieldTextInput"
    n.spellcheck_ = true
    n.is_composition_inputting = false
    n.on_start_composition = function () {
      n.is_composition_inputting = true
    }
    n.on_end_composition = function () {
      n.is_composition_inputting = false
    }
    n.size_ = new a.Size(0, 30)
    return n
  }
  var n;
  (0, r.__extends)(t, e)
  n = t
  t.prototype.resize_editor = function () {
    var e
    if (this.source_block && this.workspace_) {
      var t
      var n
      var /* [auto-meaningful-name] */this$widget_div$DIV = this.widget_div.DIV
      if (this.field_group && this$widget_div$DIV) {
        if (this.source_block.is_shadow()) {
          t = {
            width: this.source_block.width,
            height: this.source_block.height
          }
          n = (0, s.get_page_offset)(this.source_block.svg_group)
        } else {
          t = (0, s.get_size_attr)(this.border_rect || this.field_group)
          n = (0, s.get_page_offset)(this.field_group)
        }
        this$widget_div$DIV.style.width = t.width + "px"
        this$widget_div$DIV.style.height = t.height + "px"
        this$widget_div$DIV.style.left = n[0] + "px"
        this$widget_div$DIV.style.top = n[1] + "px"
        this$widget_div$DIV.style.transformOrigin = "top left"
        this$widget_div$DIV.style.transform = "scale(" + (null !== (e = this.workspace_.get_scale()) && undefined !== e ? e : 1) + ")"
      }
    }
  }
  t.prototype.show_editor = function (e, t) {
    var n = this
    if (!this.source_block) {
      throw new ReferenceError("source_block is undefined")
    }
    this.workspace_ = this.source_block.get_workspace()
    this.widget_div.show(this, function () {
      n.focus(false)
      if (t) {
        t()
      }
      n.widget_dispose()()
    })
    if (undefined == this.widget_div.DIV) {
      throw new Error("DIV is undefined")
    }
    this.html_input = this.widget_create()
    this.bind_input_events()
    this.html_input.focus()
    this.html_input.select()
    return this.html_input
  }
  t.prototype.update_width = function () {
    if (this.text_element && this.source_block) {
      var e = this.utils.get_cached_width(this.text_element)
      if (!this.source_block.is_shadow()) {
        var t = e >= this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD ? this.theme.renderer.TEXT_PADDING_IN_FIELD : (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD + 2 * this.theme.renderer.TEXT_PADDING_IN_FIELD - e) / 2
        this.text_element.setAttribute("x", "" + t)
        e += 2 * t
      }
      this.size_.width = e
    }
  }
  t.prototype.update_height = function () {
    var /* [auto-meaningful-name] */this$text_element
    e.prototype.update_height.call(this)
    if (!(null === (this$text_element = this.text_element) || undefined === this$text_element)) {
      this$text_element.setAttribute("y", String(this.size_.height / 2))
    }
  }
  t.prototype.layout = function (e, t) {
    if (this.field_group && this.text_element) {
      e[0] += this.render_sep
      this.field_group.setAttribute("transform", "translate(" + e[0] + ", " + (e[1] + (t - this.size_.height) / 2) + ")")
      e[0] += this.size_.width
    }
  }
  t.prototype.validate_ = function () {
    var e = "true"
    if (this.html_input) {
      if (this.source_block) {
        e = this.call_validator(this.html_input.value)
      }
      if (undefined == e) {
        (0, s.add_class)(this.html_input, "blocklyInvalidInput")
      } else {
        (0, s.remove_class)(this.html_input, "blocklyInvalidInput")
      }
    }
  }
  t.prototype.widget_dispose = function (e) {
    var t = this
    return function () {
      var /* [auto-meaningful-name] */t$source_block
      var /* [auto-meaningful-name] */t$workspace_
      if (t.source_block && t.workspace_ && t.html_input) {
        if (!e) {
          e = t.html_input.value
        }
        var i
        var o = t.events.get_group()
        t.events.set_group(o || true)
        if (e !== t.html_input.defaultValue && t.events.is_enabled()) {
          i = t.change_event_factory("field", {
            block: t.source_block,
            old_value: t.html_input.defaultValue,
            new_value: e,
            name: t.name
          })
        }
        t.set_text(e)
        if (null === (t$source_block = t.source_block) || undefined === t$source_block ? undefined : t$source_block.rendered) {
          t.source_block.render()
        }
        if (t.html_input.onKeyDownWrapper_) {
          t.events.unbind_event(t.html_input.onKeyDownWrapper_)
        }
        if (t.html_input.onKeyUpWrapper_) {
          t.events.unbind_event(t.html_input.onKeyUpWrapper_)
        }
        if (t.html_input.onKeyPressWrapper_) {
          t.events.unbind_event(t.html_input.onKeyPressWrapper_)
        }
        if (t.html_input.onInputWrapper_) {
          t.events.unbind_event(t.html_input.onInputWrapper_ || [])
        }
        if (t.html_input.onWorkspaceChangeWrapper_) {
          if (!(null === (t$workspace_ = t.workspace_) || undefined === t$workspace_)) {
            t$workspace_.remove_change_listener(t.html_input.onWorkspaceChangeWrapper_)
          }
        }
        if (t.html_input.on_composition_start_wrapper_) {
          t.events.unbind_event(t.html_input.on_composition_start_wrapper_)
        }
        if (t.html_input.on_composition_end_wrapper_) {
          t.events.unbind_event(t.html_input.on_composition_end_wrapper_)
        }
        delete t.html_input
        var /* [auto-meaningful-name] */t$widget_div$DIV$style = t.widget_div.DIV.style
        t$widget_div$DIV$style.width = "auto"
        t$widget_div$DIV$style.height = "auto"
        t$widget_div$DIV$style.fontSize = ""
        t$widget_div$DIV$style.transition = ""
        t$widget_div$DIV$style.boxShadow = ""
        t$widget_div$DIV$style.borderRadius = ""
        if (i) {
          t.events.fire(i)
        }
        t.events.set_group(false)
      }
    }
  }
  t.prototype.on_html_input_keydown = function (e) {
    var /* [auto-meaningful-name] */this$source_block
    if (this.html_input) {
      if (13 == e.keyCode) {
        this.widget_div.hide()
      } else {
        if (27 == e.keyCode) {
          this.html_input.value = this.html_input.defaultValue
          this.widget_div.hide()
        } else {
          if (9 == e.keyCode) {
            this.widget_div.hide()
            if (!(null === (this$source_block = this.source_block) || undefined === this$source_block)) {
              this$source_block.tab(this, !e.shiftKey)
            }
            e.preventDefault()
          }
        }
      }
    }
  }
  t.prototype.on_html_input_change = function () {
    var /* [auto-meaningful-name] */this$source_block
    if (this.html_input) {
      var /* [auto-meaningful-name] */this$html_input$value = this.html_input.value
      if (this$html_input$value !== this.html_input.oldValue_) {
        this.html_input.oldValue_ = this$html_input$value
        this.set_value(this$html_input$value)
        this.validate_()
      } else {
        if (c.is.webkit()) {
          if (!(null === (this$source_block = this.source_block) || undefined === this$source_block)) {
            this$source_block.render()
          }
        }
      }
      this.resize_editor()
    }
  }
  t.prototype.widget_create = function (e, t) {
    var /* [auto-meaningful-name] */this$source_block$parent_block
    if (undefined === e) {
      e = "input"
    }
    if (undefined === t) {
      t = "blocklyHtmlInput"
    }
    var /* [auto-meaningful-name] */this$widget_div$DIV = this.widget_div.DIV
    if (!this.source_block || !this.workspace_ || !this$widget_div$DIV) {
      throw new Error("Trying to create a field editor without a source block.")
    }
    var o = (0, s.create_dom)(e, t)
    o.setAttribute("spellcheck", String(this.spellcheck_))
    o.style.fontSize = n.FONTSIZE + "pt"
    o.value = o.defaultValue = this.text_
    o.oldValue_ = undefined
    o.style.webkitAppearance = "none"
    this$widget_div$DIV.appendChild(o)
    this.resize_editor()
    this.validate_()
    if ("dark" === this.source_block.workspace.options.theme) {
      return o
    }
    if (this.source_block.is_shadow()) {
      this$widget_div$DIV.style.borderRadius = n.FONTSIZE + "pt"
      o.style.borderRadius = n.FONTSIZE + "pt"
      var a = (null === (this$source_block$parent_block = this.source_block.parent_block) || undefined === this$source_block$parent_block ? undefined : this$source_block$parent_block.get_colour()) || "#fff"
      o.style.boxShadow = "inset " + a + " 0px 0px 0px 2px"
    } else {
      this$widget_div$DIV.style.borderRadius = "4px"
      o.style.borderRadius = "4px"
      a = this.source_block.get_colour() || "#fff"
      o.style.boxShadow = "inset " + a + " 0px 0px 0px 2px"
    }
    this$widget_div$DIV.style.transition = "box-shadow 0.25s ease 0s"
    this$widget_div$DIV.style.boxShadow = "rgba(255, 255, 255, 1) 0px 0px 0px 3px"
    return o
  }
  t.prototype.bind_input_events = function () {
    var /* [auto-meaningful-name] */this$workspace_
    if (this.html_input) {
      this.html_input.onKeyDownWrapper_ = this.events.bind_event_with_checks(this.html_input, "keydown", this, this.on_html_input_keydown)
      this.html_input.onKeyUpWrapper_ = this.events.bind_event_with_checks(this.html_input, "keyup", this, this.on_html_input_change)
      this.html_input.onKeyPressWrapper_ = this.events.bind_event_with_checks(this.html_input, "keypress", this, this.on_html_input_change)
      this.html_input.onInputWrapper_ = this.events.bind_event(this.html_input, "input", this, this.on_html_input_change)
      this.html_input.onWorkspaceChangeWrapper_ = this.resize_editor.bind(this)
      if (!(null === (this$workspace_ = this.workspace_) || undefined === this$workspace_)) {
        this$workspace_.add_change_listener(this.html_input.onWorkspaceChangeWrapper_)
      }
      this.html_input.on_composition_start_wrapper_ = this.events.bind_event_with_checks(this.html_input, "compositionstart", this, this.on_start_composition)
      this.html_input.on_composition_end_wrapper_ = this.events.bind_event_with_checks(this.html_input, "compositionend", this, this.on_end_composition)
    }
  }
  t.prototype.set_spell_check = function (e) {
    this.spellcheck_ = e
  }
  t.prototype.set_value = function (t) {
    if (undefined != t) {
      if (this.source_block) {
        var n = this.call_validator(t)
        if (undefined != n) {
          t = n
        }
      }
      e.prototype.set_value.call(this, t)
    }
  }
  t.prototype.init = function () {
    var /* [auto-meaningful-name] */this$source_block
    e.prototype.init.call(this, true)
    if (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.is_shadow()) {
      this.source_block.get_svg_root().classList.add("blocklyShadowTextInput")
    }
    if (this.field_group) {
      this.field_group.classList.add("blocklyFieldTextInput")
    }
  }
  t.FONTSIZE = 12;
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.widget_div)], t.prototype, "widget_div", undefined)
  return t = n = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 503 */"./field").Field)
exports.FieldTextInput = u
