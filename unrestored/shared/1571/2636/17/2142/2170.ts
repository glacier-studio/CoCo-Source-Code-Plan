/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2170
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ContextMenu = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 195 */"../../123/195/index")
var s = require(/* 123 */"../../123/index")
var c = require(/* 723 */"../../123/723")
var u = require(/* 1126 */"../499/1126")
var l = function () {
  function e() {
    this.current_block = undefined
    this.disabled = false
  }
  e.prototype.set_disabled = function (e) {
    this.disabled = e
  }
  e.prototype.show = function (e, t, n) {
    var /* [auto-meaningful-name] */this$tooltip
    var /* [auto-meaningful-name] */this$workspace_db$current
    var /* [auto-meaningful-name] */this$current_block
    if (!this.disabled) {
      this.widget_div.show(this, undefined)
      if (!(null === (this$tooltip = this.tooltip) || undefined === this$tooltip)) {
        this$tooltip.hide()
      }
      if (Array.isArray(t)) {
        t = {
          source: "",
          options: t
        }
      }
      if (t.options.length) {
        var s = this.populate_(t)
        this.position_(s, e, n)
        if (this.events.is_enabled()) {
          this.events.fire(this.ui_event_factory({
            type: a.UIEventType.CONTEXT_MENU_OPEN,
            workspace_id: (null === (this$workspace_db$current = this.workspace_db.current) || undefined === this$workspace_db$current ? undefined : this$workspace_db$current.id) || "",
            old_value: false,
            new_value: true,
            block_id: null === (this$current_block = this.current_block) || undefined === this$current_block ? undefined : this$current_block.id
          }))
        }
        window.setTimeout(function () {
          s.focus()
        }, 0)
      } else {
        this.hide()
      }
    }
  }
  e.prototype.populate_ = function (e) {
    var t = this
    var n = document.createElement("div")
    n.setAttribute("tabindex", "-1")
    n.classList.add("menu-wrapper")
    for (var /* [auto-meaningful-name] */e$options = e.options, i = function (i) {
        var o = e$options[i]
        var a = document.createElement("div")
        a.classList.add("menu-item")
        a.setAttribute("name", o.name)
        if (!o.enabled) {
          a.classList.add("menu_item_disable")
        }
        if (o.enabled) {
          a.classList.add("menu_item_enable")
        }
        if (o.icon) {
          var c = undefined
          if ("string" === typeof o.icon) {
            (c = new Image()).src = o.icon
            c.alt = o.text
            c.style.verticalAlign = "middle"
            c.draggable = false
          } else {
            c = (0, s.create_svg_element)("svg", {
              width: 16,
              height: 16
            })
            var u = (0, s.clone_node)(o.icon, true)
            c.appendChild(u)
          }
          c.style.marginRight = "8px"
          a.appendChild(c)
        }
        var l = document.createElement("span")
        l.innerText = o.text
        a.appendChild(l)
        if (o.selected) {
          a.classList.add("menu_item_selected")
        }
        if (o.attr) {
          o.attr.forEach(function (e) {
            var t = e[0]
            var n = e[1]
            if ("class" !== t) {
              a.setAttribute(t, n)
            } else {
              a.classList.add(n)
            }
          })
        }
        n.appendChild(a)
        a.addEventListener("click", function () {
          var /* [auto-meaningful-name] */t$workspace_db$current
          if (o.enabled) {
            t.hide()
            o.callback()
            if (t.events.is_enabled()) {
              t.events.fire(t.contextmenu_option_event_factory({
                workspace_id: (null === (t$workspace_db$current = t.workspace_db.current) || undefined === t$workspace_db$current ? undefined : t$workspace_db$current.id) || "",
                option_name: o.name,
                source: e.source
              }))
            }
          }
        })
      }, o = 0; o < e$options.length; o++) {
      i(o)
    }
    return n
  }
  e.prototype.position_ = function (e, t, n) {
    var r = (0, s.get_viewport_bbox)()
    var i = {
      top: t.clientY,
      bottom: t.clientY,
      left: t.clientX,
      right: t.clientX
    }
    this.create_widget(e)
    var o = (0, c.get_size)(e)
    o.height = e.scrollHeight
    if (n) {
      (0, c.adjust_bboxes_for_rtl)(r, i, o)
    }
    this.widget_div.position_with_anchor(r, i, o, n)
    e.focus()
  }
  e.prototype.create_widget = function (e) {
    this.widget_div.DIV.appendChild(e)
    e.classList.add("blocklyContextMenu")
    this.events.bind_event_with_checks(e, "contextmenu", undefined, u.no_event)
  }
  e.prototype.hide = function () {
    var /* [auto-meaningful-name] */this$workspace_db$current
    var /* [auto-meaningful-name] */this$current_block
    this.widget_div.hide_if_owner(this)
    if (this.events.is_enabled()) {
      this.events.fire(this.ui_event_factory({
        type: a.UIEventType.CONTEXT_MENU_OPEN,
        workspace_id: (null === (this$workspace_db$current = this.workspace_db.current) || undefined === this$workspace_db$current ? undefined : this$workspace_db$current.id) || "",
        old_value: true,
        new_value: false,
        block_id: null === (this$current_block = this.current_block) || undefined === this$current_block ? undefined : this$current_block.id
      }))
    }
    this.current_block = undefined
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.widget_div)], e.prototype, "widget_div", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.tooltip)], e.prototype, "tooltip", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.workspace_db)], e.prototype, "workspace_db", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.ContextMenuOptionEvent)], e.prototype, "contextmenu_option_event_factory", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.UIEvent)], e.prototype, "ui_event_factory", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.ContextMenu = l
