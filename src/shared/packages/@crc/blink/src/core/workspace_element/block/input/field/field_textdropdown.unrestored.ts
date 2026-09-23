/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2204
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FieldTextDropdown = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 123 */"../../../../../../../../../../../unrestored/shared/1571/2636/123/index")
var a = require(/* 374 */"./field_textinput")
var s = require(/* 484 */"../../../../../../../../../../../unrestored/shared/1571/2636/301/484")
var c = function (e) {
  function t(t) {
    var n
    var r = e.call(this, {
      text: (null === (n = t()[0]) || undefined === n ? undefined : n.value) || ""
    }) || this
    r.get_options = t
    r.field_type = "FieldTextDropdown"
    r.menu_items = []
    r.padding_x = 10
    r.text_margin = 0
    return r
  }
  (0, r.__extends)(t, e)
  t.prototype.render_ = function () {
    var /* [auto-meaningful-name] */this$border_rect
    var /* [auto-meaningful-name] */this$border_rect1
    this.size_.width = 0
    if (this.visible_ && this.field_group && this.source_block) {
      this.size_.width = this.padding_x
      this.update_height()
      this.render_text_element()
      this.render_arrow()
      if (!(null === (this$border_rect = this.border_rect) || undefined === this$border_rect)) {
        this$border_rect.setAttribute("width", String(this.size_.width))
      }
      if (!(null === (this$border_rect1 = this.border_rect) || undefined === this$border_rect1)) {
        this$border_rect1.setAttribute("height", String(this.size_.height))
      }
    }
  }
  t.prototype.render_text_element = function () {
    if (this.text_element && this.field_group) {
      (0, o.remove_children)(this.text_element)
      this.text_element.appendChild(document.createTextNode(this.get_display_text()))
      var e = this.utils.get_cached_width(this.text_element)
      this.text_margin = e < this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD ? (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD - e) / 2 : 0
      this.size_.width += this.text_margin
      this.text_element.setAttribute("y", String(this.size_.height / 2))
      this.text_element.setAttribute("x", String(this.size_.width))
      this.size_.width += e + this.text_margin
    }
  }
  t.prototype.render_arrow = function () {
    var e = this
    if (this.field_group && this.source_block) {
      if (!this.arrow) {
        this.arrow = (0, s.draw_arrow)(this.source_block.workspace.options.dropdown.arrow_type)
        this.field_group.appendChild(this.arrow)
      }
      this.size_.width += this.source_block.workspace.options.dropdown.padding
      this.arrow.setAttribute("transform", "translate(" + this.size_.width + ", " + (this.size_.height / 2 - 7) + ")")
      this.size_.width += 12 + this.source_block.workspace.options.dropdown.padding
      if (this.source_block.is_shadow()) {
        var t = function () {
          var /* [auto-meaningful-name] */e$source_block
          var n = null === (e$source_block = e.source_block) || undefined === e$source_block ? undefined : e$source_block.get_parent()
          if (n && e.arrow) {
            e.arrow.style.fill = n.get_colour().toString()
          }
        }
        if (this.events.is_record_undo()) {
          t()
        } else {
          window.setTimeout(t)
        }
      } else {
        this.arrow.style.fill = this.source_block.get_colour().toString()
      }
    }
  }
  t.prototype.widget_dispose = function () {
    var t = this
    return function () {
      e.prototype.widget_dispose.call(t)()
      if (t.menu) {
        (0, o.remove_node)(t.menu)
      }
      t.menu_items = []
      t.menu = undefined
    }
  }
  t.prototype.show_editor = function () {
    var t = e.prototype.show_editor.call(this)
    if (!this.source_block) {
      return t
    }
    var n = this.source_block.workspace.get_scale()
    t.style.paddingLeft = (this.padding_x + this.text_margin) * n + "px"
    t.style.textAlign = "start"
    this.menu = this.create_dropdown_element()
    return t
  }
  t.prototype.create_dropdown_element = function () {
    var e = this
    this.menu_items = []
    var t = document.createElement("div")
    t.classList.add("menu-wrapper")
    for (var n = this.get_options(), r = function (r) {
        var o = n[r]
        var a = document.createElement("div")
        a.classList.add("menu-item")
        a.dataset.value = o.value
        a.innerText = o.value
        a.setAttribute("tabindex", "-1")
        a.style.outline = "none"
        if (o.value === i.get_value()) {
          a.classList.add("menu_item_selected")
        }
        t.appendChild(a)
        a.style.minWidth = "172px"
        a.addEventListener("click", function () {
          e.set_html_input_value(o.value)
          e.widget_div.hide()
        })
        i.menu_items.push(a)
      }, i = this, a = 0; a < n.length; a++) {
      r(a)
    }
    t.classList.add("blocklyDropdownMenu")
    var c = (0, o.create_dom)("div", {
      style: "position: fixed",
      class: "blocklyWidgetDiv"
    })
    c.appendChild(t)
    document.body.appendChild(c)
    c.style.display = "block"
    var u = (0, s.position_dropdown)(t, this)
    c.style.left = u[0] + "px"
    c.style.top = u[1] + "px"
    return c
  }
  t.prototype.highlight_matched = function () {
    var e = this
    if (this.menu) {
      for (var t = function (t, r) {
          var i = n.menu_items[t]
          if (n.get_value() === i.dataset.value) {
            i.classList.add("menu-item-hover")
            var o = i.getBoundingClientRect()
            var a = n.menu.getBoundingClientRect()
            var s = o.top < a.top
            var c = o.bottom > a.bottom
            if (s || c) {
              requestAnimationFrame(function () {
                if (e.menu) {
                  i.scrollIntoView(s)
                  if (!e.menu.classList.contains("scroll-smooth")) {
                    e.menu.classList.add("scroll-smooth")
                  }
                }
              })
            }
          } else {
            i.classList.remove("menu-item-hover")
          }
        }, n = this, r = 0, /* [auto-meaningful-name] */this$menu_items$length = this.menu_items.length; r < this$menu_items$length; r++) {
        t(r)
      }
    }
  }
  t.prototype.dispose = function () {
    e.prototype.dispose.call(this)
    if (this.menu) {
      (0, o.remove_node)(this.menu)
    }
    this.widget_div.hide_if_owner(this)
  }
  t.prototype.on_html_input_change = function () {
    e.prototype.on_html_input_change.call(this)
    this.html_input.style.paddingLeft = (this.padding_x + this.text_margin) * this.workspace_.get_scale() + "px"
    this.highlight_matched()
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(a.FieldTextInput)
exports.FieldTextDropdown = c
