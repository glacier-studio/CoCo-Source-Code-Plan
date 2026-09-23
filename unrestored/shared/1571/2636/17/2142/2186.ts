/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2186
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Xml = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 258 */"@kitten-team/gl-matrix")
var a = require(/* 195 */"../../123/195/index")
var s = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var c = require(/* 214 */"../../1022/214")
var u = require(/* 387 */"../../207/734/387")
var l = require(/* 293 */"../../123/293")
var f = (0, r.__importStar)(require(/* 123 */"../../123/index"))
var d = function () {
  function e() {
    this.grouped_blocks = []
    this.scoped_connections = []
  }
  e.prototype.workspace_to_dom = function (e, t) {
    for (var n = f.create_dom("xml"), r = e.get_top_blocks(true), i = 0; i < r.length; i++) {
      var o = r[i]
      if (!(o.is_insertion_marker() || o.parent_group)) {
        n.appendChild(this.block_to_dom_with_xy(o, t))
      }
    }
    var a = e.get_top_comments(true)
    for (i = 0; i < a.length; i++) {
      var s = a[i]
      n.appendChild(this.comment_to_dom_with_xy(s, t))
    }
    return n
  }
  e.prototype.dom_to_workspace = function (e, t) {
    var n = []
    this.utils.start_text_cache()
    var /* [auto-meaningful-name] */e$childNodes$length = e.childNodes.length
    var i = this.events.get_group()
    if (!i) {
      this.events.set_group(true)
    }
    var a = t.is_resizes_enabled()
    if (a) {
      t.set_resizes_enabled(false)
    }
    try {
      for (var s = 0; s < e$childNodes$length; s++) {
        var u = e.childNodes[s]
        var l = u.nodeName.toLowerCase()
        var f = undefined
        if ("block" == l || "shadow" == l && !this.events.is_record_undo() || "empty" == l && !this.events.is_record_undo()) {
          f = this.dom_to_block(u, t)
        } else {
          if ("shadow" === l || "empty" === l) {
            console.error("Shadow block cannot be a top-level block.")
          } else {
            if ("comment" === l) {
              f = this.dom_to_workspace_comment(u, t)
            }
          }
        }
        if (f) {
          n.push(f.id)
          var d = parseInt(u.getAttribute("x") || "0", 10)
          var h = parseInt(u.getAttribute("y") || "0", 10)
          if (!(isNaN(d) || isNaN(h))) {
            d = t.RTL ? 0 - d : d
            if ((0, c.is_block_svg)(f) && f.parent_group) {
              f.parent_group.move_by(o.vec2.fromValues(d, h))
            } else {
              f.move_by(o.vec2.fromValues(d, h))
            }
          }
        }
      }
    } finally {
      if (!i) {
        this.events.set_group(false)
      }
      this.utils.stop_text_cache()
    }
    if (a) {
      t.set_resizes_enabled(true)
    }
    return n
  }
  e.prototype.block_to_dom = function (e, t) {
    var /* [auto-meaningful-name] */e$next_connection
    var /* [auto-meaningful-name] */e$next_connection1
    var i
    var o
    if ((0, c.is_block_group)(e)) {
      i = this.block_to_dom(e.origin_block, t)
      var s = e.get_field_value(a.BLOCK_GROUP_NAME_FIELD_NAME);
      (0, u.assert)("string" === typeof s)
      i.setAttribute(a.BLOCK_GROUP_NAME_XML_TAG, s)
      i.setAttribute(a.BLOCK_GROUP_ID_XML_TAG, e.id)
      if (e.group_type !== a.BlockGroupType.EXECUTION) {
        return i
      }
      var l = null === (e$next_connection = e.next_connection) || undefined === e$next_connection ? undefined : e$next_connection.targetBlock()
      var d = l && this.block_to_dom(l, t)
      if (d) {
        d.setAttribute(a.BLOCK_GROUP_STOPPED_XML_TAG, "true")
        var h = i.querySelector("next[" + a.LAST_NEXT_XML_TAG + "=\"true\"]")
        if (!(null === h || undefined === h)) {
          h.removeAttribute(a.LAST_NEXT_XML_TAG)
        }
        if (!(null === h || undefined === h)) {
          h.appendChild(d)
        }
      }
      return i
    }
    (i = e.is_shadow() ? e.is_editable() ? f.create_dom("shadow") : f.create_dom("empty") : f.create_dom("block")).setAttribute("type", e.type)
    if (!t) {
      i.setAttribute("id", e.id)
    }
    if (e.mutationToDom) {
      var p = e.mutationToDom()
      if (p && (p.hasChildNodes() || p.hasAttributes())) {
        i.appendChild(p)
      }
    }
    for (var _ = 0; _ < e.inputList.length; _++) {
      for (var A = e.inputList[_], g = 0; g < A.fieldRow.length; g++) {
        var v = A.fieldRow[g]
        this.field_to_dom(v, i)
      }
    }
    if (e.parent_group) {
      if (e.parent_group.comment) {
        i.appendChild(this.comment_to_dom(e.parent_group.comment))
      }
      i.setAttribute("visible", e.parent_group.visibility_)
    } else {
      if (e.comment) {
        i.appendChild(this.comment_to_dom(e.comment))
      }
      i.setAttribute("visible", e.visibility_)
    }
    if (e.data) {
      var m = f.create_dom("data", undefined, e.data)
      i.appendChild(m)
    }
    for (_ = 0; _ < e.inputList.length; _++) {
      var y = true
      if ((A = e.inputList[_]).type != a.InputType.DUMMY && A.connection) {
        var b = A.connection.targetBlock()
        if (A.type == a.InputType.VALUE) {
          o = f.create_dom("value")
        } else {
          if (A.type == a.InputType.STATEMENT) {
            o = f.create_dom("statement")
          }
        }
        var w = A.connection.get_shadow_dom()
        if (!(!w || b && b.is_shadow())) {
          if (o) {
            o.appendChild(this.clone_shadow(w))
          }
        }
        if (b) {
          if (o) {
            o.appendChild(this.block_to_dom(b, t))
          }
          y = false
        }
        if (o) {
          o.setAttribute("name", A.name)
        }
        if (!y) {
          i.appendChild(o)
        }
      }
    }
    if (e.inputs_inline_default != e.inputs_inline) {
      i.setAttribute("inline", String(e.inputs_inline))
    }
    if (e.is_collapsed()) {
      i.setAttribute("collapsed", String(true))
    }
    if (e.disabled) {
      i.setAttribute("disabled", String(true))
    }
    if (!e.deletable_) {
      i.setAttribute("deletable", String(false))
    }
    if (!e.movable_) {
      i.setAttribute("movable", String(false))
    }
    if (!e.editable_) {
      i.setAttribute("editable", String(false))
    }
    var E = null === (e$next_connection1 = e.next_connection) || undefined === e$next_connection1 ? undefined : e$next_connection1.targetBlock()
    if (E) {
      var x = f.create_dom("next", undefined, this.block_to_dom(E, t))
      i.appendChild(x)
    } else if (e.next_connection) {
      var C = e.get_root_block()
      if (e.next_connection === C.last_connection_in_stack()) {
        (x = f.create_dom("next")).setAttribute("" + a.LAST_NEXT_XML_TAG, "true")
        i.appendChild(x)
      }
    }
    var O = e.next_connection && e.next_connection.get_shadow_dom()
    if (!(!O || E && E.is_shadow())) {
      if (o) {
        o.appendChild(this.clone_shadow(O))
      }
    }
    return i
  }
  e.prototype.field_to_dom = function (e, t) {
    if (e.name && e.editable) {
      var n = f.create_dom("field", undefined, String(e.get_value()))
      var /* [auto-meaningful-name] */e$name = e.name
      if ((0, c.is_field_number)(e)) {
        e$name = this.field_number_to_dom(e, n)
      }
      if ((0, c.is_field_default_value)(e)) {
        this.field_default_value_to_dom(e, n)
      }
      n.setAttribute("name", e$name)
      t.appendChild(n)
    }
  }
  e.prototype.field_number_to_dom = function (e, t) {
    var n = [e.min_, e.max_, e.precision_, e.mod_].join(",")
    t.setAttribute("constraints", n)
    if (undefined != e.exceptions) {
      var r = e.exceptions.join(",")
      t.setAttribute("exceptions", r)
    }
    var i = e.get_controller_option()
    if (i) {
      var o = undefined
      o = i.type === a.ControllerType.SLIDER ? [i.type, i.left_text, i.right_text].join(",") : i.type === a.ControllerType.COLOR_PICKER ? [i.type, i.color_format, i.line].join(",") : i.type
      t.setAttribute("controller", o)
    }
    var /* [auto-meaningful-name] */e$name = e.name
    if (e.allow_text) {
      t.setAttribute("allow_text", "true")
      if (!(0, l.is_valid_number)(e.get_value())) {
        e$name = "TEXT"
      }
    }
    return e$name
  }
  e.prototype.field_default_value_to_dom = function (e, t) {
    var n = e.get_has_been_edited()
    t.setAttribute("has_been_edited", String(n))
  }
  e.prototype.clone_shadow = function (e) {
    for (var t, n = e = f.clone_node(e, true); n;) {
      if (n.firstChild) {
        n = n.firstChild
      } else {
        for (; n && !n.nextSibling;) {
          t = n
          n = n.parentNode
          if (t.nodeType == a.NodeType.TEXT && "" == t.data.trim() && n.firstChild != t) {
            f.remove_node(t)
          }
        }
        if (n) {
          t = n
          n = n.nextSibling
          if (t.nodeType == a.NodeType.TEXT && "" == t.data.trim()) {
            f.remove_node(t)
          }
        }
      }
    }
    return e
  }
  e.prototype.dom_to_block = function (e, t) {
    var n
    this.events.disable()
    try {
      n = this.dom_to_block_headless(e, t)
      var r = this.scoped_connections.slice()
      this.scoped_connections.length = 0
      for (var i = 0; i < r.length; i++) {
        var o = r[i]
        var a = o[0]
        var s = o[1]
        if (!s.connect(a, true)) {
          this.handle_unconnectable_child_block(a.source_block, s)
        }
      }
      if (t.rendered) {
        n.set_connections_hidden(true)
        var c = n.get_descendants(false)
        for (i = c.length - 1; i >= 0; i--) {
          c[i].respawn_all_shadows()
        }
        for (i = (c = n.get_descendants(false)).length - 1; i >= 0; i--) {
          c[i].init_svg()
        }
        for (i = c.length - 1; i >= 0; i--) {
          c[i].update_collapsed()
          c[i].render(false)
        }
        for (i = c.length - 1; i >= 0; i--) {
          if ((l$block = c[i]).comment) {
            l$block.comment.init_svg()
          }
        }
        var u = this.grouped_blocks.slice()
        this.grouped_blocks.length = 0
        for (i = u.length - 1; i >= 0; i--) {
          var l = u[i]
          var /* [auto-meaningful-name] */l$block = l.block
          var d = l.id
          var /* [auto-meaningful-name] */l$name = l.name
          var /* [auto-meaningful-name] */l$group_stop_at = l.group_stop_at
          l$block.hide_into_group(l$name, {
            id: d,
            group_stop_at: l$group_stop_at
          })
        }
        window.setTimeout(function () {
          if (undefined != n && undefined != n.get_workspace()) {
            n.set_connections_hidden(false)
            for (var e = 0, t = u; e < t.length; e++) {
              t[e].block.set_connections_hidden(false)
            }
          }
        }, 1)
        n.update_disabled()
      }
    } finally {
      this.events.enable()
    }
    if (this.events.is_enabled()) {
      this.events.fire(this.create_event_factory({
        block: n
      }))
    }
    return n
  }
  e.prototype.dom_to_block_headless = function (e, t, n) {
    var r = e.getAttribute("type")
    if (undefined == r) {
      throw new ReferenceError("Block type unspecified.")
    }
    var i = e.getAttribute("id") || n || undefined
    var o = e.nodeName.toLowerCase()
    var s = t.new_block(r, i)
    var c = e.getAttribute(a.BLOCK_GROUP_ID_XML_TAG)
    if (c && t.get_block_by_id(c)) {
      c = (0, l.gen_uid)()
    }
    var u = e.getAttribute(a.BLOCK_GROUP_NAME_XML_TAG)
    if ("true" === e.getAttribute(a.BLOCK_GROUP_STOPPED_XML_TAG)) {
      for (var f = this.grouped_blocks.length - 1; f >= 0; f--) {
        var d = this.grouped_blocks[f]
        if (!(d.block.is_starting_block() || d.block.is_output_block() || undefined !== d.group_stop_at)) {
          d.group_stop_at = c || s.id
        }
      }
    }
    if (c && u) {
      this.grouped_blocks.push({
        block: s,
        id: c,
        name: u
      })
    }
    for (f = 0; f < e.childNodes.length; f++) {
      var h = e.childNodes[f]
      if (h.nodeType != a.NodeType.TEXT) {
        for (var p = undefined, _ = undefined, A = 0; A < h.childNodes.length; A++) {
          var g = h.childNodes[A]
          if (g.nodeType == a.NodeType.ELEMENT) {
            var v = g.nodeName.toLowerCase()
            if ("block" == v) {
              _ = g
            } else {
              if (!("shadow" != v && "empty" !== v)) {
                p = g
              }
            }
          }
        }
        switch (h.nodeName.toLowerCase()) {
          case "mutation":
            if (s.domToMutation) {
              s.domToMutation(h)
              if (undefined != s.init_svg) {
                s.init_svg()
              }
            }
            break
          case "comment":
            s.set_comment_text("", h.getAttribute("id") || undefined)
            this.parse_comment_attributes(h, s.comment)
            break
          case "data":
            s.data = h.textContent
            break
          case "title":
          case "field":
            this.parse_child_field(h, s)
            break
          case "value":
          case "statement":
            var m = h.getAttribute("name"),
              y = s.get_input(m)
            if (!y || !y.connection) {
              console.warn("Ignoring non-existent input " + m + " in block " + r)
              break
            }
            this.parse_connection(t, y.connection, p, _)
            break
          case "next":
            if (!s.next_connection) {
              console.error("Trying to connect to invalid next connect: " + s)
              break
            }
            this.parse_connection(t, s.next_connection, p, _)
            break
          default:
            console.warn("Ignoring unknown tag: " + h.nodeName)
        }
      }
    }
    var b = e.getAttribute("inline")
    if (b) {
      s.set_inputs_inline("true" == b)
    }
    var w = e.getAttribute("disabled")
    if (w) {
      s.set_disabled("true" == w)
    }
    var E = e.getAttribute("deletable")
    if (E) {
      s.set_deletable("true" == E)
    }
    var x = e.getAttribute("movable")
    if (x) {
      s.set_movable("true" == x)
    }
    var C = e.getAttribute("editable")
    if (C) {
      s.set_editable("true" == C)
    }
    var O = e.getAttribute("visible")
    if (O) {
      var k = undefined
      k = "false" === O || O === a.BlockVisibility.TRANSLUCENT ? a.BlockVisibility.TRANSLUCENT : "hidden" === O ? a.BlockVisibility.HIDDEN : a.BlockVisibility.VISIBLE
      s.set_chunk_visibility(k)
    }
    if ("shadow" === o || "empty" === o) {
      var S = s.get_children()
      for (f = 0; f < S.length; f++) {
        if (!S[f].is_shadow()) {
          console.error("Shadow block not allowed non-shadow child.")
        }
      }
      s.set_shadow(true)
      if ("empty" === o) {
        s.set_editable(false)
      }
    }
    var T = e.getAttribute("collapsed")
    if (T) {
      s.set_collapsed("true" == T)
    }
    return s
  }
  e.prototype.parse_fields = function (e, t) {
    for (var n = 0; n < e.childNodes.length; n++) {
      var r = e.childNodes[n]
      if (r.nodeType !== a.NodeType.TEXT) {
        if ("field" === r.nodeName.toLowerCase()) {
          this.parse_child_field(r, t)
        }
      }
    }
  }
  e.prototype.parse_connection = function (e, t, n, r) {
    var i
    if (n) {
      if (null === (i = t.targetBlock()) || undefined === i ? undefined : i.is_shadow()) {
        t.remove_shadow()
      }
      t.set_shadow_dom(n)
    }
    if (r) {
      var o = this.dom_to_block_headless(r, e, undefined)
      var a = o.output_connection || o.previous_connection
      if (a) {
        if (a.context) {
          this.scoped_connections.push([a, t])
        } else {
          if (!t.connect(a, true)) {
            this.handle_unconnectable_child_block(o, t)
          }
        }
      } else {
        console.error("Child block does not have output or previous statement.")
      }
    }
  }
  e.prototype.handle_unconnectable_child_block = function (e, t) {
    if (this.runtime_data.is_pasting()) {
      e.dispose(false, false)
    } else {
      for (var n = e.get_descendants(false), r = n.length - 1; r >= 0; r--) {
        n[r].init_svg()
        n[r].update_collapsed()
        n[r].render(false)
      }
    }
    t.respawn_shadow()
  }
  e.prototype.parse_child_field = function (e, t) {
    var n = e.getAttribute("name")
    if (undefined != n) {
      if ("true" === e.getAttribute("allow_text") && "NUM" !== n) {
        n = "NUM"
      }
      var r = t.get_field(n)
      if (r) {
        var /* [auto-meaningful-name] */e$textContent = e.textContent
        if ((0, c.is_field_number)(r)) {
          var o = e.getAttribute("constraints")
          if (o) {
            var s = o.split(",")
            r.set_constraints(s[0], s[1], s[2])
            if (s[3]) {
              r.set_mod(s[3])
            }
          }
          var u = e.getAttribute("exceptions")
          if (u) {
            var l = []
            l = u.split(",").map(function (e) {
              return +e
            })
            r.set_exceptions(l)
          }
          var f = e.getAttribute("allow_text")
          var d = undefined
          if (f) {
            d = "true" === f
          }
          if (r.set_allow_text) {
            r.set_allow_text(d)
          }
          var h = e.getAttribute("controller")
          if (h) {
            var p = undefined
            p = "SLIDER" === (l = h.split(","))[0] ? {
              type: a.ControllerType.SLIDER,
              left_text: l[1],
              right_text: l[2]
            } : "COLOR_PICKER" === l[0] ? {
              type: a.ControllerType.COLOR_PICKER,
              color_format: l[1],
              line: l[2]
            } : {
              type: a.ControllerType.ANGLE_SCALE
            }
            r.set_controller_option(p)
          }
        }
        if ((0, c.is_field_default_value)(r)) {
          var _ = e.getAttribute("has_been_edited")
          if (_) {
            r.set_has_been_edited("true" === _)
          }
        }
        var A = r.call_validator(e$textContent)
        if (undefined != A && "FieldImage" !== r.field_type) {
          r.set_value(A)
        }
      }
    }
  }
  e.prototype.dom_to_text = function (e) {
    return this.utils.dom_to_string(e)
  }
  e.prototype.text_to_dom = function (e) {
    return this.utils.string_to_dom(e)
  }
  e.prototype.block_to_dom_with_xy = function (e, t) {
    var /* [auto-meaningful-name] */e$parent_group
    var r = this.block_to_dom(e, t)
    var i = (null === (e$parent_group = e.parent_group) || undefined === e$parent_group ? undefined : e$parent_group.get_relative_to_surface_xy()) || e.get_relative_to_surface_xy()
    r.setAttribute("x", String(Math.round(i[0])))
    r.setAttribute("y", String(Math.round(i[1])))
    return r
  }
  e.prototype.filter_undefined_blocks = function (e, t) {
    if (undefined === t) {
      t = false
    }
    for (var n = false, r = e.querySelectorAll("block"), i = 0; i < r.length; i++) {
      var o = r[i]
      var a = o.getAttribute("type")
      if (!this.Blink.Blocks[a]) {
        if (!n) {
          n = true
        }
        var /* [auto-meaningful-name] */o$parentElement = o.parentElement
        switch (o$parentElement.nodeName) {
          case "NEXT":
            o$parentElement.parentElement.removeChild(o$parentElement)
            break
          case "VALUE":
          case "STATEMENT":
          case "DIV":
          default:
            o$parentElement.removeChild(o)
        }
      }
    }
    return t ? {
      xml: e,
      deleted: n
    } : e
  }
  e.prototype.comment_to_dom_with_xy = function (e, t) {
    var n = this.comment_to_dom(e, t)
    var r = e.get_relative_to_surface_xy()
    n.setAttribute("x", String(Math.round(r[0])))
    n.setAttribute("y", String(Math.round(r[1])))
    return n
  }
  e.prototype.dom_to_workspace_comment = function (e, t) {
    var n = e.getAttribute("id") || undefined
    var r = t.new_workspace_comment(undefined, n)
    this.parse_comment_attributes(e, r)
    r.init_svg()
    return r
  }
  e.prototype.comment_to_dom = function (e, t) {
    var n = e.get_text()
    var r = f.create_dom("comment", undefined, n)
    r.setAttribute("pinned", String(e.is_expanded()))
    var i = e.get_bubble_size()
    r.setAttribute("h", String(i.height))
    r.setAttribute("w", String(i.width))
    var o = e.get_relative_position()
    r.setAttribute("relativeleft_", "" + o[0])
    r.setAttribute("relativetop_", "" + o[1])
    r.setAttribute("auto_layout", String(e.is_auto_layout()))
    r.setAttribute("color_theme", String(e.get_color_theme()))
    if (!t) {
      r.setAttribute("id", e.id)
    }
    return r
  }
  e.prototype.parse_comment_attributes = function (e, t) {
    if (t) {
      t.set_text(e.textContent || "")
      var n = e.getAttribute("pinned")
      if (n) {
        t.set_expanded("true" == n)
      }
      var r = parseInt(e.getAttribute("w") || "", 10)
      var i = parseInt(e.getAttribute("h") || "", 10)
      if (!(isNaN(r) || isNaN(i))) {
        t.set_bubble_size(r, i)
      }
      var a = parseFloat(e.getAttribute("relativeleft_") || "")
      var s = parseFloat(e.getAttribute("relativetop_") || "")
      if (!(isNaN(a) || isNaN(s))) {
        t.set_relative_position(o.vec2.fromValues(a, s))
      }
      var u = e.getAttribute("auto_layout")
      if (u) {
        t.set_auto_layout("true" === u)
      }
      var l = e.getAttribute("color_theme")
      if ((0, c.is_comment_theme)(l)) {
        t.set_color_theme(l, true)
      }
    }
  }
  e.prototype.dom_to_workspace_element = function (e, t) {
    var n = e.tagName.toLowerCase()
    return "block" === n ? this.dom_to_block(e, t) : "comment" === n ? this.dom_to_workspace_comment(e, t) : void console.error("Undefined workspace element: " + e)
  }
  e.prototype.workspace_element_to_dom = function (e, t) {
    return (0, c.is_block_svg)(e) ? this.block_to_dom(e, t) : (0, c.is_workspace_comment)(e) ? this.comment_to_dom(e, t) : (console.error("Undefined workspace element: " + e), f.create_dom("element"))
  }
  e.prototype.workspace_element_to_dom_with_xy = function (e, t) {
    return (0, c.is_block_svg)(e) ? this.block_to_dom_with_xy(e, t) : (0, c.is_workspace_comment)(e) ? this.comment_to_dom_with_xy(e, t) : (console.error("Undefined workspace element: " + e), f.create_dom("element"))
  };
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.Blink)], e.prototype, "Blink", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.utils)], e.prototype, "utils", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.runtime_data)], e.prototype, "runtime_data", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.CreateEvent)], e.prototype, "create_event_factory", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Xml = d
