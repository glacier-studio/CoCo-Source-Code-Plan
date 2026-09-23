/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2192
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.TreeNode = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 125 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var o = require(/* 214 */"../../../1022/214")
var a = require(/* 123 */"../../../123/index")
var s = function (e) {
  function t(n) {
    var r = e.call(this) || this
    r.DEFAULT_CLASSNAMES = {
      NORMAL: "blocklyTreeRow",
      SELECTED: "blocklyTreeSelected",
      DISABLED: "blockly_toolbox_disabled"
    }
    r.blocks = []
    var i = {
      text: undefined,
      name: "",
      color: "",
      secondary_color: r.theme.flyout.BACKGROUND_COLOR.toString(),
      element: {
        unselected_classname: "",
        disabled_classname: "",
        selected_classname: "",
        style: "",
        selected_style: ""
      },
      icon: {
        style: undefined,
        selected_style: undefined,
        html: undefined,
        selected_html: undefined,
        font_id: undefined,
        selected_font_id: undefined
      },
      children: [],
      blocks: [],
      selectable: true
    }
    if (n.text) {
      n.text = r.utils.replace_message_references(n.text)
    }
    r.config_ = (0, o.parse_attr_deep)(i, n)
    r.init()
    r.name_ = r.config_.name || (0, o.unique_id)("treenode_")
    r.selectable_ = r.config_.selectable
    r.blocks = "string" === typeof r.config_.blocks ? r.config_.blocks : Array.from(r.config_.blocks)
    Array.from(r.config_.children).forEach(function (e) {
      var n = new t(e)
      r.add(n)
    })
    return r
  }
  (0, r.__extends)(t, e)
  t.prototype.get_element = function () {
    return this.element_
  }
  t.prototype.get_color = function () {
    return this.config_.color
  }
  t.prototype.get_flyout_background_color = function () {
    return this.config_.secondary_color
  }
  t.prototype.init = function () {
    this.html_div = document.createElement("div")
    this.html_div.className = "blocklyTreeNode"
    this.element_ = document.createElement("div")
    this.element_.id = this.config_.name
    this.element_.setAttribute("role", "treeitem")
    this.element_.setAttribute("name", this.config_.name)
    this.icon_el = document.createElement("div")
    this.icon_el.className = "blocklyTreeIcon"
    if (this.config_.icon.font_id) {
      (0, a.create_font_icon)(this.config_.icon.font_id, this.icon_el)
    } else {
      if (this.config_.icon.html) {
        this.icon_el.innerHTML = this.config_.icon.html
      }
    }
    if (this.config_.icon.style) {
      this.icon_el.setAttribute("style", this.config_.icon.style)
    }
    this.element_.appendChild(this.icon_el)
    if (this.config_.color) {
      this.element_.style.color = this.config_.color
      this.element_.dataset.color = this.config_.color
    }
    if (this.config_.element.style) {
      this.element_.setAttribute("style", this.config_.element.style)
    }
    if (undefined != this.config_.text) {
      var e = document.createElement("div")
      e.classList.add("blocklyTreeLabel")
      e.textContent = this.config_.text
      this.element_.appendChild(e)
    }
    this.children_container_ = document.createElement("div")
    this.children_container_.className = "blocklyTreeChildren"
    this.html_div.appendChild(this.element_)
    this.html_div.appendChild(this.children_container_)
    this.element_.className = this.get_node_classname()
    this.set_expanded(false)
  }
  t.prototype.get_blocks = function (e) {
    return this.blocks
  }
  t.prototype.set_blocks = function (e) {
    if ("string" === typeof e || Array.isArray(e)) {
      this.blocks = e
    } else {
      this.blocks = Array.from(e)
    }
  }
  t.prototype.push_block = function (e) {
    if ("string" === typeof this.blocks) {
      throw Error("Trying to add block to a node with custom key")
    }
    this.blocks.push(e)
  }
  t.prototype.select = function () {
    if (!this.disabled_) {
      this.selected_ = true
      this.update_node()
    }
  }
  t.prototype.unselect = function () {
    this.selected_ = false
    this.update_node()
  }
  t.prototype.set_disabled = function (e) {
    if (e !== this.disabled_) {
      this.disabled_ = e
      this.update_node()
    }
  }
  t.prototype.get_node_classname = function () {
    return this.disabled_ ? "\n        " + this.DEFAULT_CLASSNAMES.NORMAL + "\n        " + this.DEFAULT_CLASSNAMES.DISABLED + "\n        " + this.config_.element.disabled_classname + "\n      " : this.is_selected() ? "\n        " + this.DEFAULT_CLASSNAMES.NORMAL + "\n        " + this.DEFAULT_CLASSNAMES.SELECTED + "\n        " + this.config_.element.selected_classname + "\n      " : "\n      " + this.DEFAULT_CLASSNAMES.NORMAL + "\n      " + this.config_.element.unselected_classname + "\n    "
  }
  t.prototype.update_node = function () {
    this.element_.className = this.get_node_classname()
    if (this.is_selected()) {
      this.element_.style.backgroundColor = this.get_color()
      if (this.config_.element.selected_style) {
        this.element_.setAttribute("style", this.config_.element.selected_style)
      }
      if (undefined != this.config_.icon.selected_style) {
        this.icon_el.setAttribute("style", this.config_.icon.selected_style)
      }
      if (undefined != this.config_.icon.selected_font_id) {
        (0, a.remove_children)(this.icon_el);
        (0, a.create_font_icon)(this.config_.icon.selected_font_id, this.icon_el)
      } else {
        if (undefined != this.config_.icon.selected_html) {
          this.icon_el.innerHTML = this.config_.icon.selected_html
        }
      }
      return void this.element_.setAttribute("aria-selected", "true")
    }
    this.element_.style.backgroundColor = ""
    if (this.config_.element.style && this.config_.element.selected_style) {
      this.element_.setAttribute("style", this.config_.element.style)
    }
    if (this.config_.icon.style && this.config_.icon.selected_style) {
      this.icon_el.setAttribute("style", this.config_.icon.style)
    }
    if (this.config_.icon.font_id && this.config_.icon.selected_font_id) {
      (0, a.remove_children)(this.icon_el);
      (0, a.create_font_icon)(this.config_.icon.font_id, this.icon_el)
    } else {
      if (this.config_.icon.html && this.config_.icon.selected_html) {
        this.icon_el.innerHTML = this.config_.icon.html
      }
    }
    this.element_.setAttribute("aria-selected", "false")
  }
  t.prototype.dispose = function () {
    if (this.parent_) {
      var e = this.parent_.get_children()
      var t = e.indexOf(this)
      e.splice(t, 1)
    }
    this.html_div.remove()
    this.set_tree(undefined)
  }
  t.prototype.find_node_by_name = function (e) {
    if (this.name_ === e) {
      return this
    }
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
  };
  (0, r.__decorate)([(0, i.lazy_inject)(i.BINDING.theme)], t.prototype, "theme", undefined);
  (0, r.__decorate)([(0, i.lazy_inject)(i.BINDING.utils)], t.prototype, "utils", undefined)
  return t
}(require(/* 1353 */"./1353").BaseNode)
exports.TreeNode = s
