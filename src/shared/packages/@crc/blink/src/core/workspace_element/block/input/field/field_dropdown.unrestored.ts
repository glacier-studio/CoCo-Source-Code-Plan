/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：736
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldDropdown = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../../../../../../unrestored/shared/1571/2636/1058/125")
var a = require(/* 195 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/195/index")
var s = require(/* 123 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/index")
var c = require(/* 478 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/478")
var u = require(/* 214 */"../../../../../../../../../../../unrestored/shared/1571/2636/1022/214")
var l = require(/* 387 */"../../../../../../../../../../../unrestored/shared/1571/2636/207/734/387")
var f = require(/* 723 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/723")
var d = require(/* 293 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/293")
var h = require(/* 503 */"./field")
var p = require(/* 484 */"../../../../../../../../../../../unrestored/shared/1571/2636/301/484")
var _ = function (e) {
  function t(t) {
    var n = e.call(this, undefined, t.opt_validator) || this
    n.field_type = "FieldDropdown"
    n.value_ = "?"
    n.prefix_field = undefined
    n.suffix_field = undefined
    n.generate_customized_dropdown = undefined
    n.menu_generator = t.menu_generator
    n.menu_generator_advanced = t.menu_generator_advanced
    for (var r = n.get_advanced_options() ? n.get_expanded_advanced_options() : n.get_basic_options(), i = (0, u.is_func)(t.selected_index) ? t.selected_index() : t.selected_index || 0; r[i] && (!n.get_option_value(r[i]) || n.get_option_callback(r[i]));) {
      i++
    }
    var o = r[i] && n.get_option_value(r[i]) || "?"
    n.trim_options()
    n.set_value(o)
    n.onchange = t.opt_onchange
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.init = function () {
    if (this.source_block) {
      this.arrow_ = (0, p.draw_arrow)(this.source_block.workspace.options.dropdown.arrow_type)
      e.prototype.init.call(this)
      if (this.source_block.is_shadow()) {
        this.source_block.get_svg_root().classList.add("blocklyShadowDropdown")
      }
      if (this.field_group) {
        this.field_group.classList.add("blocklyFieldDropdown")
      }
    }
  }
  t.prototype.bind_field_click_event = function () {
    if (this.source_block) {
      if (this.source_block.is_shadow()) {
        var t = this.source_block.get_svg_root()
        this.mouse_down_wrapper = this.events.bind_event_with_checks(t, "mouseup", this, this.on_mouse_down)
      } else {
        e.prototype.bind_field_click_event.call(this)
      }
    }
  }
  t.prototype.render_ = function () {
    var /* [auto-meaningful-name] */this$border_rect
    var /* [auto-meaningful-name] */this$border_rect1
    if (this.visible_ && this.source_block) {
      if (this.field_group && this.arrow_) {
        (0, s.remove_children)(this.field_group)
        var /* [auto-meaningful-name] */this$source_block$workspace$options$dropdown$padding = this.source_block.workspace.options.dropdown.padding
        var r = this.source_block.workspace.options.dropdown.padding + 6
        this.size_.width = this.border_rect ? this$source_block$workspace$options$dropdown$padding : r
        this.update_height()
        this.render_border()
        this.render_image_element()
        this.render_text_element()
        this.field_group.appendChild(this.arrow_)
        this.size_.width += this$source_block$workspace$options$dropdown$padding
        var i = this.border_rect ? this.size_.width : this.size_.width - 2
        var o = this.size_.height / 2 - 7
        this.arrow_.setAttribute("transform", "translate(" + i + ", " + o + ")")
        this.size_.width += 12 + this$source_block$workspace$options$dropdown$padding
        this.change_editor_style(false)
        if (this.source_block.is_shadow()) {
          this.render_shadow_style()
        } else {
          this.render_not_shadow_style()
        }
        if (!(null === (this$border_rect = this.border_rect) || undefined === this$border_rect)) {
          this$border_rect.setAttribute("height", String(this.size_.height))
        }
        if (!(null === (this$border_rect1 = this.border_rect) || undefined === this$border_rect1)) {
          this$border_rect1.setAttribute("width", String(this.size_.width))
        }
      }
    } else {
      this.size_.width = 0
    }
  }
  t.prototype.render_border = function () {
    if (this.field_group && this.border_rect) {
      this.field_group.appendChild(this.border_rect)
    }
  }
  t.prototype.render_not_shadow_style = function () {
    if (this.source_block && this.arrow_) {
      this.arrow_.style.fill = this.source_block.get_colour().toString()
    }
  }
  t.prototype.render_shadow_style = function () {
    var e = this
    var t = function () {
      var t = e.source_block && e.source_block.get_parent()
      if (t && e.arrow_) {
        e.arrow_.style.fill = t.get_colour().toString()
      }
    }
    if (this.events.is_record_undo()) {
      t()
    } else {
      window.setTimeout(t)
    }
  }
  t.prototype.render_text_element = function () {
    var e = this.get_display_text()
    if (e.trim()) {
      var t
      if (c.is.safari() || c.is.mobile()) {
        this.text_element = (0, s.create_svg_element)("text", {
          class: "blocklyText",
          dy: ".4em",
          "font-size": this.theme.font.SIZE
        }, this.field_group)
      } else {
        this.text_element = (0, s.create_svg_element)("text", {
          class: "blocklyText",
          "dominant-baseline": "central",
          "font-size": this.theme.font.SIZE
        }, this.field_group)
      }
      var n = document.createTextNode(e)
      this.text_element.appendChild(n)
      this.text_element.setAttribute("text-anchor", "start")
      this.text_element.setAttribute("y", String(this.size_.height / 2))
      var r = this.border_rect ? this.size_.width : this.size_.width - 2
      this.text_element.setAttribute("x", String(r))
      t = this.utils.get_cached_width(this.text_element)
      t = this.update_min_width(t)
      this.size_.width += t
      return t
    }
  }
  t.prototype.update_min_width = function (e) {
    if (!this.text_element) {
      return 20
    }
    if (e >= 20) {
      return e
    }
    var t = this.text_element.getAttribute("x")
    var n = (20 - e) / 2
    this.text_element.setAttribute("x", String(Number(t) + n))
    return 20
  }
  t.prototype.render_image_element = function () {
    var /* [auto-meaningful-name] */this$image_json;
    (0, l.assert)(this.field_group)
    if (this.image_json && !(null === (this$image_json = this.image_json) || undefined === this$image_json ? undefined : this$image_json.is_hide)) {
      this.image_element = this.create_image(this.image_json)
      this.field_group.appendChild(this.image_element)
      this.image_element.setAttribute("x", "" + this.size_.width)
      this.image_element.setAttribute("y", "" + (this.size_.height - Number(this.image_element.getAttribute("height"))) / 2)
      var t = "number" === typeof this.image_json.margin_right ? this.image_json.margin_right : 2
      this.size_.width += Number(this.image_element.getAttribute("width")) + t
    }
  }
  t.prototype.get_value = function () {
    return this.value_
  }
  t.prototype.show_editor = function () {
    var e = this
    if (this.source_block) {
      if (this.source_block.show_editor) {
        this.source_block.show_editor(function (t) {
          e.set_value(t)
        }, this.value_)
      } else {
        var t
        if (!this.show_editor_extend(this)) {
          this.change_editor_style(true)
          if (this.generate_customized_dropdown) {
            t = this.generate_customized_dropdown()
          } else {
            t = this.create_dropdown_element(this.get_advanced_options() || this.get_basic_options(), this.name)
            this.update_widget_div_position(t)
          }
        }
      }
    }
  }
  t.prototype.create_image = function (e) {
    var t = "string" === typeof e.src ? (0, s.create_svg_element)("image", {
      "xlink:href": e.src,
      width: "100%",
      height: "100%"
    }) : "number" === typeof e.src ? (0, s.get_num_g)(e.src) : (0, s.clone_node)(e.src, true)
    var n = e.width || t.getAttribute("width") || 16
    var r = e.height || Number(t.getAttribute("height")) || 16
    var i = (0, s.create_svg_element)("svg", {
      width: n,
      height: r
    })
    i.appendChild(t)
    return i
  }
  t.prototype.create_menu_item_div = function (e, t, n, r, i, o, a) {
    var c = this
    if (undefined === o) {
      o = true
    }
    var u = (0, s.create_div_element)()
    if (n) {
      var l = this.create_image(n)
      var f = "number" === typeof n.margin_right ? n.margin_right : 2
      l.style.marginRight = f + "px"
      u.appendChild(l)
    }
    var d = document.createElement("span")
    d.innerText = e
    u.appendChild(d)
    u.classList.add("menu-item")
    if (!o) {
      u.classList.add("menu_item_disable")
    }
    if (r) {
      u.classList.add("menu_button")
    }
    u.dataset.value = t
    if (t === this.value_) {
      u.classList.add("menu_item_selected")
      if (!(null === i || undefined === i)) {
        i.classList.add("menu_item_selected")
      }
    }
    if (a) {
      u.tooltip = a
      this.tooltip.bind_mouse_event(u)
    }
    u.addEventListener("click", function (e) {
      if (o) {
        e.stopImmediatePropagation()
        e.preventDefault()
        if (r) {
          r.call(c.set_value.bind(c))
        } else {
          if (undefined !== t) {
            c.set_value(t)
          }
        }
        c.widget_div.hide_if_owner(c)
        c.tooltip.hide()
        c.events.set_group(false)
      }
    })
    if (r || undefined !== t && o) {
      u.addEventListener("touchstart", function () {
        u.classList.add("menu_touch_effect")
      })
      u.addEventListener("touchend", function () {
        u.classList.remove("menu_touch_effect")
      })
    }
    return u
  }
  t.prototype.create_menu_item = function (e, t) {
    var n = this
    if (!(0, u.is_old_dropdown_option)(e) && "basic" === e.type) {
      return this.create_menu_item_div(e.text, e.value, e.icon, e.callback, t, e.enabled, e.tooltip)
    }
    if (!(0, u.is_old_dropdown_option)(e) && "group" === e.type) {
      var r = this.create_menu_item_div(e.name, undefined, undefined, undefined, t)
      r.classList.add("menu_group")
      r.dataset.group_key = e.value || (0, d.gen_uid)()
      var i = this.create_dropdown_element(e.options, undefined, r)
      i.classList.add("menu_group_children")
      i.dataset.group_key = r.dataset.group_key
      r.addEventListener("mouseover", function (e) {
        e.stopPropagation()
        n.update_group_children_div_position(i, r)
        r.classList.add("menu_group_expanded")
      })
      var o = function (e) {
        e.stopPropagation()
        if (!(e.relatedTarget && ((0, s.is_parent)(i, e.relatedTarget) || (0, s.is_parent)(r, e.relatedTarget)))) {
          (0, s.remove_node)(i)
          r.classList.remove("menu_group_expanded")
        }
      }
      r.addEventListener("mouseout", o)
      i.addEventListener("mouseout", o)
      return r
    }
    if (!(0, u.is_old_dropdown_option)(e) && "image_plus" === e.type) {
      var c = undefined === e.index ? undefined : "number" === typeof e.index ? {
        src: e.index
      } : e.index
      var l = this.create_menu_item_div(e.text || "", e.value, c, e.callback, t, e.enabled, e.tooltip)
      l.classList.add("menu_item_image_plus")
      var f = this.create_image(e.image_plus)
      var h = document.createElement("div")
      h.classList.add("image_plus")
      h.appendChild(f)
      if (l.lastElementChild) {
        (0, s.insert_before)(h, l.lastElementChild)
      }
      return l
    }
    if (!(0, u.is_old_dropdown_option)(e) && "line" === e.type) {
      var p = document.createElement("div")
      p.classList.add("dropdown_divider")
      return p
    }
    return this.create_menu_item_div(e[a.OptionTypes.TEXT], e[a.OptionTypes.VALUE], e[a.OptionTypes.ICON], e[a.OptionTypes.TRIGGER_EVENT], t)
  }
  t.prototype.create_dropdown_element = function (e, t, n) {
    var r = document.createElement("div")
    r.classList.add("blocklyDropdownMenu")
    r.classList.add("menu-wrapper")
    if (this.source_block) {
      r.classList.add(this.source_block.type)
    }
    if (t) {
      r.classList.add(t)
    }
    for (var i = 0; i < e.length; i++) {
      r.appendChild(this.create_menu_item(e[i], n))
    }
    return r
  }
  t.prototype.update_group_children_div_position = function (e, t) {
    document.body.appendChild(e)
    var n = (0, f.get_size)(e)
    var r = (0, f.get_size)(t)
    var i = t.getBoundingClientRect()
    var /* [auto-meaningful-name] */i$left = i.left
    var /* [auto-meaningful-name] */i$top = i.top
    var s = parseFloat((0, f.get_computed_style)(e, "padding-top")) || 0
    var c = parseFloat((0, f.get_computed_style)(e, "padding-bottom")) || 0
    if (i$top + n.height - s >= window.innerHeight) {
      var u = e.lastElementChild && (0, f.get_size)(e.lastElementChild).height || 0
      i$top -= n.height
      i$top += c
      i$top += u
    } else {
      i$top -= s
    }
    if (i$left + r.width + n.width >= window.innerWidth) {
      i$left -= n.width
    } else {
      i$left += r.width
    }
    e.style.left = i$left + "px"
    e.style.top = i$top + "px"
  }
  t.prototype.update_widget_div_position = function (e) {
    var t = this
    this.widget_div.show(this, function () {
      t.focus(false)
      t.change_editor_style(false)
      Array.from(document.querySelectorAll(".menu_group_children")).forEach(function (e) {
        return (0, s.remove_node)(e)
      })
    })
    var /* [auto-meaningful-name] */this$widget_div$DIV = this.widget_div.DIV
    if (!(null === this$widget_div$DIV || undefined === this$widget_div$DIV)) {
      this$widget_div$DIV.appendChild(e)
    }
    var r = (0, p.position_dropdown)(e, this)
    this.widget_div.position(r[0], r[1])
  }
  t.prototype.show_editor_extend = function (e) {
    return false
  }
  t.prototype.change_editor_style = function (e) {
    if (this.source_block) {
      if (e) {
        if (!this.source_block.is_shadow() && this.field_group) {
          this.field_group.setAttribute("data-showing", "true")
        }
        return void (this.source_block.is_shadow() && this.source_block.svg_group.setAttribute("data-showing", "true"))
      }
      if (this.field_group) {
        this.field_group.removeAttribute("data-showing")
      }
      if (this.source_block.is_shadow()) {
        this.source_block.svg_group.removeAttribute("data-showing")
      }
    }
  }
  t.prototype.set_value = function (e) {
    if (this.get_advanced_options() || this.get_basic_options()) {
      if (undefined != e) {
        var t = this.get_option(e)
        var n = t && this.get_option_text(t) || ""
        if (e !== this.value_ || n !== this.text_) {
          var r
          var i = this.events.get_group()
          if (this.source_block) {
            if (this.events.is_enabled()) {
              if (!i) {
                this.events.set_group(true)
              }
              r = this.change_event_factory("field", {
                block: this.source_block,
                old_value: this.value_,
                new_value: e,
                name: this.name
              })
            }
            if (this.onchange) {
              this.onchange(e)
            }
          }
          this.value_ = e
          if (t) {
            var o = this.get_option_icon(t)
            if (!(o === this.image_json && n === this.text_)) {
              this.image_json = o
              this.text_ = n
              this.force_rerender()
            }
            return void (this.events.is_enabled() && r && (this.events.fire(r), this.events.set_group(i)))
          }
          this.value_ = "?"
          this.image_json = undefined
          this.set_text("?")
          if (this.events.is_enabled() && r) {
            this.events.fire(r)
            this.events.set_group(i)
          }
        } else {
          this.change_editor_style(false)
        }
      } else {
        this.change_editor_style(false)
      }
    }
  }
  t.prototype.set_text = function (e, t) {
    if (e !== this.text_ || t && t !== this.image_json) {
      this.text_ = e
      if (t) {
        this.image_json = t
      }
      this.force_rerender()
    }
  }
  t.prototype.trim_options = function () {
    this.prefix_field = undefined
    this.suffix_field = undefined
    if (!this.is_dynamic()) {
      for (var e = this.get_options(), t = false, n = 0; n < e.length; n++) {
        var r = e[n][0]
        if ("string" == typeof r) {
          e[n][0] = this.utils.replace_message_references(r)
        } else {
          if (r && undefined != r.alt) {
            r.alt = this.utils.replace_message_references(r.alt)
          }
          t = true
        }
      }
      if (!(t || e.length < 2)) {
        var i = []
        for (n = 0; n < e.length; n++) {
          i.push(e[n][0])
        }
        var o = this.utils.common_word_prefix(i)
        var a = this.utils.common_word_suffix(i)
        if (o || a) {
          if (o) {
            this.prefix_field = i[0].substring(0, o - 1)
          }
          if (a) {
            this.suffix_field = i[0].substr(1 - a)
          }
          var s = []
          for (n = 0; n < e.length; n++) {
            var c = e[n][0]
            var u = e[n][1]
            c = c.substring(o, c.length - a)
            s[n] = [c, u, undefined, undefined, undefined]
          }
          this.menu_generator = s
        }
      }
    }
  }
  t.prototype.get_basic_options = function () {
    return (0, u.is_func)(this.menu_generator) ? this.menu_generator.call(this) : this.menu_generator
  }
  t.prototype.get_advanced_options = function () {
    if (this.menu_generator_advanced) {
      return (0, u.is_func)(this.menu_generator_advanced) ? this.menu_generator_advanced.call(this) : this.menu_generator_advanced
    }
  }
  t.prototype.get_options = function () {
    var e = this.get_advanced_options()
    if (!e) {
      return this.get_basic_options()
    }
    var t = []
    e.forEach(function e(n) {
      if ((0, u.is_old_dropdown_option)(n)) {
        t.push(n)
      } else {
        if ("group" === n.type) {
          n.options.forEach(e)
        }
      }
    })
    return t
  }
  t.prototype.get_expanded_advanced_options = function () {
    var e = this.get_advanced_options()
    if (!e) {
      return []
    }
    var t = []
    e.forEach(function e(n) {
      if ((0, u.is_old_dropdown_option)(n) || "group" !== n.type) {
        t.push(n)
      } else {
        n.options.forEach(e)
      }
    })
    return t
  }
  t.prototype.get_option = function (e) {
    var t = this
    return function n(r) {
      for (var i = 0; i < r.length; i++) {
        var o = r[i]
        if ((0, u.is_old_dropdown_option)(o) || "group" !== o.type) {
          if (t.get_option_value(o) === e) {
            return o
          }
        } else {
          var a = n(o.options)
          if (a) {
            return a
          }
        }
      }
    }(this.get_advanced_options() || this.get_basic_options())
  }
  t.prototype.get_option_value = function (e) {
    if ((0, u.is_old_dropdown_option)(e)) {
      return e[a.OptionTypes.VALUE]
    }
    switch (e.type) {
      case "image_plus":
      case "basic":
        return e.value
      default:
        return
    }
  }
  t.prototype.get_option_text = function (e) {
    if ((0, u.is_old_dropdown_option)(e)) {
      return e[a.OptionTypes.TEXT]
    }
    switch (e.type) {
      case "group":
        return e.name
      case "image_plus":
      case "basic":
        return e.text
      default:
        return
    }
  }
  t.prototype.get_option_icon = function (e) {
    if ((0, u.is_old_dropdown_option)(e)) {
      return e[a.OptionTypes.ICON]
    }
    switch (e.type) {
      case "image_plus":
        return undefined === e.index ? undefined : "number" === typeof e.index ? {
          src: e.index
        } : e.index
      case "basic":
        return e.icon
      default:
        return
    }
  }
  t.prototype.get_option_callback = function (e) {
    if ((0, u.is_old_dropdown_option)(e)) {
      return e[a.OptionTypes.TRIGGER_EVENT]
    }
    switch (e.type) {
      case "basic":
      case "image_plus":
        return e.callback
      default:
        return
    }
  }
  t.prototype.update_btn_style = function () {}
  t.prototype.register_dropdown = function (e) {
    this.generate_customized_dropdown = e
  }
  t.prototype.is_dynamic = function () {
    return this.menu_generator_advanced ? (0, u.is_func)(this.menu_generator_advanced) : (0, u.is_func)(this.menu_generator)
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.widget_div)], t.prototype, "widget_div", undefined)
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(h.Field)
exports.FieldDropdown = _
