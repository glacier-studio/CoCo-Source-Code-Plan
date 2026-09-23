/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-7
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../unrestored/shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../unrestored/shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_225 from /* 225 */"../../../unrestored/shared/1571/2636/301/225"
import * as /* [auto-meaningful-name] */Module_203 from /* 203 */"../../../unrestored/shared/1571/2636/301/203"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../../unrestored/shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../../unrestored/shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */Module_327 from /* 327 */"../../shared/packages/@crc/blink/src/core/workspace_element/block/input/field/field_number"
import * as /* [auto-meaningful-name] */Module_123 from /* 123 */"../../../unrestored/shared/1571/2636/123/index"
import * as /* [auto-meaningful-name] */Module_484 from /* 484 */"../../../unrestored/shared/1571/2636/301/484"
var Ne = function (e) {
  Module_58.a(n, e)
  var t = Module_59.a(n)
  function n(e) {
    var r
    var o
    Module_27.a(this, n);
    (o = t.call(this, Module_6.a(Module_6.a({}, e), {}, {
      opt_value: e.opt_value || (null === (r = e.get_options()[0]) || undefined === r ? undefined : r.value) || 0
    }, e.numberOptions))).dropdownConfig = e
    o.arrow = undefined
    o.menu_items = []
    o.menu = undefined
    o.padding_x = 0
    o.text_margin = 0
    return o
  }
  Module_39.a(n, [
    {
      key: "render_text_element",
      value: function () {
        if (this.text_element && this.field_group) {
          Module_123.remove_children(this.text_element)
          this.text_element.appendChild(document.createTextNode(this.get_display_text()))
          var e = this.utils.get_cached_width(this.text_element)
          this.text_margin = e < this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD ? (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD - e) / 2 : 0
          this.size_.width += this.text_margin
          this.text_element.setAttribute("y", String(this.size_.height / 2))
          this.text_element.setAttribute("x", String(this.size_.width - 3))
          this.size_.width += e + this.text_margin
        }
      }
    }, {
      key: "render_arrow",
      value: function () {
        var e = this
        if (this.field_group && this.source_block) {
          if (!this.arrow) {
            this.arrow = Module_484.draw_arrow(this.source_block.workspace.options.dropdown.arrow_type)
            this.field_group.appendChild(this.arrow)
          }
          this.size_.width += this.source_block.workspace.options.dropdown.padding
          this.arrow.setAttribute("transform", "translate(".concat(this.size_.width, ", ").concat(this.size_.height / 2 - 7, ")"))
          this.size_.width += this.source_block.workspace.options.dropdown.padding - 2
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
    }, {
      key: "show_editor",
      value: function () {
        var e = Module_225.a(Module_203.a(n.prototype), "show_editor", this).call(this)
        if (!this.source_block) {
          return e
        }
        var t = this.source_block.workspace.get_scale()
        e.style.paddingLeft = "".concat((this.padding_x + this.text_margin) * t, "px")
        e.style.textAlign = "start"
        this.menu = this.create_dropdown_element()
        return e
      }
    }, {
      key: "on_html_input_change",
      value: function () {
        Module_225.a(Module_203.a(n.prototype), "on_html_input_change", this).call(this)
        if (this.html_input) {
          var /* [auto-meaningful-name] */this$workspace_
          var t = (null === (this$workspace_ = this.workspace_) || undefined === this$workspace_ ? undefined : this$workspace_.get_scale()) || 1
          this.html_input.style.paddingLeft = "".concat((this.padding_x + this.text_margin) * t, "px")
        }
        this.highlight_matched()
      }
    }, {
      key: "create_dropdown_element",
      value: function () {
        var e = this
        this.menu_items = []
        var t = document.createElement("div")
        t.classList.add("menu-wrapper")
        for (var n = this.dropdownConfig.get_options(), r = function (r) {
            var o = n[r].value.toString()
            var i = document.createElement("div")
            i.classList.add("menu-item")
            i.dataset.value = o
            i.innerText = o
            i.setAttribute("tabindex", "-1")
            i.style.outline = "none"
            if (o === e.get_value()) {
              i.classList.add("menu_item_selected")
            }
            t.appendChild(i)
            i.style.minWidth = "".concat(172, "px")
            i.addEventListener("click", function () {
              e.set_html_input_value(o)
              e.set_value(o)
              e.widget_div.hide()
            })
            e.menu_items.push(i)
          }, o = 0; o < n.length; o++) {
          r(o)
        }
        t.classList.add("blocklyDropdownMenu")
        var i = Module_123.create_dom("div", {
          style: "position: fixed",
          class: "blocklyWidgetDiv"
        })
        i.appendChild(t)
        document.body.appendChild(i)
        i.style.display = "block"
        var a = Module_484.position_dropdown(t, this)
        i.style.left = "".concat(a[0], "px")
        i.style.top = "".concat(a[1], "px")
        return i
      }
    }, {
      key: "highlight_matched",
      value: function () {
        var e = this
        if (this.menu) {
          for (var t = function (t, n) {
              var r = e.menu_items[t]
              if (e.get_value() === r.dataset.value) {
                r.classList.add("menu-item-hover")
                var o = r.getBoundingClientRect()
                var i = e.menu.getBoundingClientRect()
                var a = o.top < i.top
                var s = o.bottom > i.bottom
                if (a || s) {
                  requestAnimationFrame(function () {
                    if (e.menu) {
                      r.scrollIntoView(a)
                      if (!e.menu.classList.contains("scroll-smooth")) {
                        e.menu.classList.add("scroll-smooth")
                      }
                    }
                  })
                }
              } else {
                r.classList.remove("menu-item-hover")
              }
            }, n = 0, /* [auto-meaningful-name] */this$menu_items$length = this.menu_items.length; n < this$menu_items$length; n++) {
            t(n)
          }
        }
      }
    }, {
      key: "render_",
      value: function () {
        this.size_.width = 0
        if (this.visible_ && this.field_group && this.source_block) {
          this.size_.width = this.padding_x
          this.update_height()
          this.render_text_element()
          this.render_arrow()
        }
      }
    }, {
      key: "widget_dispose",
      value: function () {
        var e = this
        return function () {
          Module_225.a(Module_203.a(n.prototype), "widget_dispose", e).call(e)()
          if (e.menu) {
            Module_123.remove_node(e.menu)
          }
          e.menu_items = []
          e.menu = undefined
          e.widget_div.hide()
        }
      }
    }, {
      key: "dispose",
      value: function () {
        Module_225.a(Module_203.a(n.prototype), "dispose", this).call(this)
        if (this.menu) {
          Module_123.remove_node(this.menu)
        }
        this.widget_div.hide_if_owner(this)
      }
    }
  ])
  return n
}(Module_327.FieldNumber)
Ne.field_type = "field_coco_number_dropdown"
export { Ne }
