/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2191
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Toolbox = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 195 */"../../../123/195/index")
var s = require(/* 387 */"../../../207/734/387")
var c = require(/* 123 */"../../../123/index")
var u = require(/* 214 */"../../../1022/214")
var l = require(/* 293 */"../../../123/293")
var f = require(/* 1353 */"./1353")
var d = require(/* 2192 */"./2192")
var h = function (e) {
  function t(t) {
    var n = e.call(this) || this
    n.get_node_from_event_ = function (e) {
      for (var /* [auto-meaningful-name] */e$target = e.target; undefined != e$target;) {
        var r = n.find_node_by_name(e$target.id)
        if (undefined != r) {
          return r
        }
        if (e$target == n.children_container_) {
          break
        }
        e$target = e$target.parentNode
      }
    }
    var /* [auto-meaningful-name] */t$options = t.options
    n.workspace_ = t
    n.toolbox_position = t.get_options().toolboxPosition
    var i = Object.assign({}, n.workspace_.options, {
      disabledPatternId: t$options.disabledPatternId,
      parentWorkspace: t,
      RTL: t.RTL,
      toolboxPosition: t$options.toolboxPosition,
      blockly_type: t$options.blockly_type,
      id: undefined
    })
    n.flyout = n.vertical_flyout_factory(i)
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.get_flyout = function () {
    return this.flyout
  }
  t.prototype.get_width = function () {
    return this.html_div ? this.html_div.offsetWidth : 0
  }
  t.prototype.get_height = function () {
    return this.html_div ? this.html_div.offsetHeight : 0
  }
  t.prototype.get_workspace_id = function () {
    if (this.workspace_) {
      return this.workspace_.id
    }
  }
  t.prototype.init = function () {
    var e = this
    if (this.workspace_) {
      var /* [auto-meaningful-name] */this$workspace_ = this.workspace_
      var n = this$workspace_.get_options()
      var r = this.workspace_.get_workspace_drag_surface()
      var i = r && r.get_svg()
      if (undefined != i) {
        this.html_div = (0, c.create_dom)("div", "blocklyToolboxDiv")
        this.html_div.setAttribute("dir", this$workspace_.RTL ? "RTL" : "LTR")
        if (undefined !== n.toolbox_background_class) {
          this.html_div.classList.add(n.toolbox_background_class)
        } else {
          this.html_div.style.background = this.theme.flyout.BACKGROUND_COLOR.toString()
        }
        this.children_container_ = document.createElement("div")
        this.children_container_.className = "blocklyTreeRoot";
        (0, s.assert)(n.toolbox_config, "Toolbox is not defined.")
        this.populate(n.toolbox_config)
        this.html_div.appendChild(this.children_container_);
        (0, c.insert_after)(this.html_div, i);
        (0, c.insert_before)(this.flyout.create_dom("svg"), this.html_div)
        this.flyout.init(this$workspace_)
        this.position()
        this.events.bind_event(this.html_div, "mousedown", this, function () {
          e.mousedown_time = Date.now()
        })
        this.events.bind_event(this.html_div, "touchmove", this, function () {
          e.mousedown_time = undefined
        })
        var o = (0, u.throttle)(function (t) {
          return e.handle_mousedown(t)
        }, 200)
        this.events.bind_event(this.html_div, "mouseup", this, function (t) {
          if (e.mousedown_time && Date.now() - e.mousedown_time < 200) {
            o(t)
          }
          e.mousedown_time = undefined
        })
      } else {
        console.warn("Ref SVG not Found.")
      }
    }
  }
  t.prototype.handle_mousedown = function (e) {
    if (this.utils.is_right_button(e) || e.target == this.html_div) {
      this.utils.hide_chaff(false)
      return void this.touch_manager.clear_touch_identifier()
    }
    this.utils.hide_chaff(true)
    var t = this.get_node_from_event_(e)
    if (t && !t.is_disabled()) {
      if (t.is_selected()) {
        this.clear_selection()
      } else {
        if (t.is_selectable()) {
          this.set_selected_item(t)
        }
      }
      t.set_expanded(!t.is_expanded())
      this.block_animations.toolbox_click_effect()
    }
    this.touch_manager.clear_touch_identifier()
  }
  t.prototype.populate = function (e) {
    this.remove_children()
    if (this.workspace_) {
      if (Array.isArray(e)) {
        this.build_by_config(e)
      } else {
        this.sync_trees_(e)
      }
      this.workspace_.resize_contents()
    }
  }
  t.prototype.build_by_config = function (e) {
    var t = this
    e.forEach(function (e) {
      var n = new d.TreeNode(e)
      t.add(n)
    })
  }
  t.prototype.sync_nodes_ = function (e, t) {
    for (var n, r = 0, i = undefined; r < e.childNodes.length; r++) {
      if ((i = e.childNodes[r]) instanceof Element) {
        switch (i.tagName.toUpperCase()) {
          case "SEP":
            if (undefined == n) {
              break
            }
            var o = i.getAttribute("gap")
            if (undefined != o) {
              n.setAttribute("gap", o)
            }
            break
          case "BLOCK":
          case "SHADOW":
          case "LABEL":
          case "BUTTON":
            t.push_block(i)
            n = i
        }
      }
    }
  }
  t.prototype.sync_trees_ = function (e) {
    for (var t, n, r = 0, i = undefined; r < e.childNodes.length; r++) {
      if ((i = e.childNodes[r]) instanceof Element) {
        switch (i.tagName.toUpperCase()) {
          case "CATEGORY":
            var o = i.getAttribute("name")
            if (undefined == o) {
              throw new ReferenceError("Child node does not have name.")
            }
            var a = i.getAttribute("text") || undefined,
              s = i.getAttribute("color"),
              c = s && (null === (t = this.theme.get_color(s)) || undefined === t ? undefined : t.fill.toString()) || s || undefined,
              u = i.getAttribute("flyout_background") || undefined,
              l = i.getAttribute("element_classname") || undefined,
              f = i.getAttribute("element_disabled_classname") || undefined,
              h = i.getAttribute("element_classname_selected") || undefined,
              p = i.getAttribute("element_style") || undefined,
              _ = i.getAttribute("element_selected_style") || undefined,
              A = i.getAttribute("icon") || undefined,
              g = i.getAttribute("selected_icon") || undefined,
              v = i.getAttribute("icon_html") || undefined,
              m = i.getAttribute("icon_selected_html") || undefined,
              y = new d.TreeNode({
                text: a,
                name: o,
                color: c,
                secondary_color: u,
                element: {
                  unselected_classname: l,
                  disabled_classname: f,
                  selected_classname: h,
                  style: p,
                  selected_style: _
                },
                icon: {
                  style: A,
                  selected_style: g,
                  html: v,
                  selected_html: m
                }
              }),
              b = i.getAttribute("custom")
            if (b && 0 === i.childElementCount) {
              y.set_blocks(b)
              y.get_element().dataset.custom = b
            } else {
              this.sync_nodes_(i, y)
              if (0 === y.get_blocks().length) {
                y.set_disabled(true)
              }
            }
            n = i
            this.add(y)
            break
          case "SEP":
            if (console.error("TreeSeparator is not implemented currently. "), undefined == n) {
              break
            }
        }
      }
    }
  }
  t.prototype.position = function () {
    if (undefined != this.html_div) {
      if (this.workspace_) {
        if (undefined != this.workspace_.get_parent_svg()) {
          if (this.toolbox_position == a.TOOLBOX_POSITION.RIGHT) {
            this.html_div.style.top = "0"
            this.html_div.style.right = "0"
          } else {
            this.html_div.style.top = "0"
            this.html_div.style.left = "0"
          }
          this.flyout.position()
        } else {
          console.warn("Parent SVG not Found.")
        }
      }
    }
  }
  t.prototype.get_client_rect = function () {
    if (undefined != this.html_div) {
      var e = this.html_div.getBoundingClientRect()
      var /* [auto-meaningful-name] */this$workspace_$get_options$delete_area_margin = this.workspace_.get_options().delete_area_margin
      var /* [auto-meaningful-name] */e$left = e.left
      var /* [auto-meaningful-name] */e$top = e.top
      var /* [auto-meaningful-name] */e$width = e.width
      var /* [auto-meaningful-name] */e$height = e.height
      return new l.Rect(e$left - this$workspace_$get_options$delete_area_margin[3], e$top - this$workspace_$get_options$delete_area_margin[0], e$width + this$workspace_$get_options$delete_area_margin[1] + this$workspace_$get_options$delete_area_margin[3], e$height + this$workspace_$get_options$delete_area_margin[0] + this$workspace_$get_options$delete_area_margin[2])
    }
  }
  t.prototype.add_delete_style = function () {
    (0, c.add_class)(this.html_div, "blocklyToolboxDelete")
  }
  t.prototype.remove_delete_style = function () {
    (0, c.remove_class)(this.html_div, "blocklyToolboxDelete")
  }
  t.prototype.dispose = function () {
    e.prototype.dispose.call(this)
    this.flyout.dispose();
    (0, c.remove_node)(this.html_div)
    this.workspace_ = undefined
  }
  t.prototype.get_selected = function () {
    return this.selected_node
  }
  t.prototype.get_last_selected = function () {
    return this.last_selected_node
  }
  t.prototype.set_selected_item = function (e) {
    var /* [auto-meaningful-name] */this$workspace_
    var /* [auto-meaningful-name] */this$workspace_1
    var /* [auto-meaningful-name] */this$selected_node = this.selected_node
    if (e !== this$selected_node) {
      if (this.events.is_enabled()) {
        this.events.fire(this.ui_event_factory({
          type: a.UIEventType.CATEGORY_WILL_CHANGE,
          workspace_id: (null === (this$workspace_ = this.workspace_) || undefined === this$workspace_ ? undefined : this$workspace_.id) || "",
          old_value: this$selected_node,
          new_value: e
        }))
      }
      if (this$selected_node) {
        this$selected_node.unselect()
      }
      var i = []
      if (e) {
        e.select()
        i = e.get_blocks(true)
      }
      if (e && i && i.length > 0) {
        var o = e.get_flyout_background_color()
        if (o) {
          var s = this.flyout.get_background()
          if (s) {
            s.style.fill = o
          }
        }
        this.flyout.show(i)
        if (this.last_selected_node !== e) {
          this.flyout.scroll_to_start()
        }
      } else {
        this.flyout.hide()
      }
      if (e) {
        this.last_selected_node = e
      }
      this.selected_node = e
      if (this.events.is_enabled()) {
        this.events.fire(this.ui_event_factory({
          type: a.UIEventType.CATEGORY,
          workspace_id: (null === (this$workspace_1 = this.workspace_) || undefined === this$workspace_1 ? undefined : this$workspace_1.id) || "",
          old_value: this$selected_node,
          new_value: e
        }))
      }
    }
  }
  t.prototype.clear_selection = function () {
    this.set_selected_item()
  }
  t.prototype.refresh_selection = function () {
    if (undefined != this.selected_node) {
      var e = this.selected_node.get_blocks()
      if (undefined != e) {
        this.flyout.show(e)
      }
    }
  }
  t.prototype.find_node_by_name = function (e) {
    if (e) {
      for (var t = 0; t < this.children_.length; t++) {
        var n = this.children_[t]
        if (n.get_name() === e) {
          return n
        }
        var r = n.find_node_by_name(e)
        if (r) {
          return r
        }
      }
    }
  }
  t.prototype.new_node = function (e) {
    return new d.TreeNode(e)
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], t.prototype, "events", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.utils)], t.prototype, "utils", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.touch_manager)], t.prototype, "touch_manager", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.block_animations)], t.prototype, "block_animations", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], t.prototype, "theme", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.VerticalFlyout)], t.prototype, "vertical_flyout_factory", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.UIEvent)], t.prototype, "ui_event_factory", undefined)
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(f.BaseNode)
exports.Toolbox = h
