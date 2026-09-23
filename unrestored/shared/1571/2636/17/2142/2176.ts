/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2176
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Json = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 258 */"@kitten-team/gl-matrix")
var a = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var s = require(/* 195 */"../../123/195/index")
var c = require(/* 387 */"../../207/734/387")
var u = require(/* 293 */"../../123/293")
var l = require(/* 214 */"../../1022/214")
var f = require(/* 123 */"../../123/index")
var d = require(/* 976 */"../499/976")
var h = function () {
  function e() {}
  e.prototype.comment_to_json = function (e) {
    var t = e.get_parent_block()
    var n = e.get_bubble_size()
    var r = e.get_relative_position()
    return {
      id: e.id,
      parent_id: undefined === t ? null : t.id,
      text: e.get_text(),
      pinned: e.is_expanded(),
      size: [n.width, n.height],
      location: [r[0], r[1]],
      auto_layout: e.is_auto_layout(),
      color_theme: e.get_color_theme()
    }
  }
  e.prototype.comment_dom_to_json = function (e, t, n) {
    if ("comment" !== e.tagName.toLowerCase()) {
      throw Error("Trying to convert a non-comment dom into comment json.")
    }
    var r = {
      id: t || e.getAttribute("id") || (0, u.gen_uid)(),
      parent_id: n || null,
      text: e.textContent || "",
      pinned: "true" === e.getAttribute("pinned"),
      auto_layout: "true" === e.getAttribute("auto_layout"),
      size: null,
      location: null,
      color_theme: null
    }
    var i = parseInt(e.getAttribute("w") || "", 10)
    var o = parseInt(e.getAttribute("h") || "", 10)
    if (!(isNaN(i) || isNaN(o))) {
      r.size = [i, o]
    }
    var a = parseFloat(e.getAttribute("relativeleft_") || "")
    var s = parseFloat(e.getAttribute("relativetop_") || "")
    if (!(isNaN(a) || isNaN(s))) {
      r.location = [a, s]
    }
    var c = e.getAttribute("color_theme")
    if ((0, l.is_comment_theme)(c)) {
      r.color_theme = c
    }
    return r
  }
  e.prototype.merge_workspace_data = function (e, t) {
    function n(e, t) {
      Object.keys(t).forEach(function (n) {
        e[n] = t[n]
      })
    }
    n(e.blocks, t.blocks)
    n(e.connections, t.connections)
    n(e.comments, t.comments)
  }
  e.prototype.block_to_json = function (e) {
    var t = this
    var n = {
      blocks: {},
      connections: {},
      comments: {}
    }
    n.connections[e.id] = {}
    var r = {}
    var i = {}
    var o = {}
    var a = {}
    e.inputList.map(function (c) {
      var /* [auto-meaningful-name] */c$connection
      var /* [auto-meaningful-name] */c$connection1
      c.fieldRow.forEach(function (e) {
        if (e.editable && "string" === typeof e.name) {
          if ((0, l.is_field_number)(e)) {
            var t = undefined
            t = e.allow_text && !(0, u.is_valid_number)(e.get_value()) ? "TEXT" : e.name
            r[t] = e.get_value()
            i[t] = {
              min: e.min_,
              max: e.max_,
              precision: e.precision_,
              mod: e.mod_ || null
            }
            var n = e.get_controller_option()
            if (n) {
              if (undefined === o[e.name]) {
                o[e.name] = {}
              }
              o[t].controller_type = n.type
              if (n.type === s.ControllerType.SLIDER) {
                o[t].left_text = n.left_text
                o[t].right_text = n.right_text
              } else {
                if (n.type === s.ControllerType.COLOR_PICKER) {
                  o[t].color_format = n.color_format
                  o[t].line = n.line
                }
              }
            }
          } else if ((0, l.is_field_default_value)(e)) {
            r[e.name] = e.get_value()
            if (undefined === o[e.name]) {
              o[e.name] = {}
            }
            o[e.name].has_been_edited = e.get_has_been_edited()
          } else {
            r[e.name] = e.get_value()
          }
        }
      })
      if (c.name) {
        var h = null === (c$connection = c.connection) || undefined === c$connection ? undefined : c$connection.get_shadow_string()
        a[c.name] = h || ""
      }
      var p = null === (c$connection1 = c.connection) || undefined === c$connection1 ? undefined : c$connection1.targetBlock()
      if (p) {
        var _ = t.block_to_json(p)
        t.merge_workspace_data(n, _)
        n.connections[e.id][p.id] = {
          type: "input",
          input_type: c.type === s.InputType.VALUE ? "value" : "statement",
          input_name: c.name
        }
      }
    })
    if (e.comment) {
      n.comments[e.comment.id] = this.comment_to_json(e.comment)
    }
    var c = e.get_location()
    var f = e.mutation_to_string()
    n.blocks[e.id] = {
      type: e.type,
      id: e.id,
      comment: undefined === e.comment ? null : e.comment.id,
      is_shadow: e.is_shadow(),
      collapsed: e.is_collapsed(),
      disabled: e.disabled,
      deletable: e.deletable_,
      movable: e.movable_,
      editable: e.editable_,
      visible: e.visibility_,
      location: [c[0], c[1]],
      shadows: a,
      fields: r,
      field_constraints: i,
      field_extra_attr: o,
      mutation: f,
      is_output: !!e.output_connection,
      parent_id: undefined === e.parent_block ? null : e.parent_block.id
    }
    var d = e.get_next_block()
    if (d) {
      var h = this.block_to_json(d)
      this.merge_workspace_data(n, h)
      n.connections[e.id][d.id] = {
        type: "next"
      }
    }
    return n
  }
  e.prototype.workspace_to_json = function (e) {
    var t = this
    var n = {
      blocks: {},
      connections: {},
      comments: {}
    }
    e.get_top_blocks(false).forEach(function (e) {
      var r = t.block_to_json(e)
      t.merge_workspace_data(n, r)
    })
    e.get_top_comments(false).forEach(function (e) {
      n.comments[e.id] = t.comment_to_json(e)
    })
    return n
  }
  e.prototype.json_to_block_headless = function (e, t, n) {
    if (undefined === n) {
      n = true
    }
    var r = t.new_block(e.type, e.id)
    return this.parse_block_data(e, r, n)
  }
  e.prototype.parse_block_data = function (e, t, n) {
    if (undefined === n) {
      n = true
    }
    if (null !== e.is_shadow) {
      t.set_shadow(e.is_shadow)
    }
    if (null !== e.collapsed) {
      t.set_collapsed(e.collapsed)
    }
    if (null !== e.disabled) {
      t.set_disabled(e.disabled)
    }
    t.set_deletable(e.deletable)
    t.set_movable(e.movable)
    t.set_editable(e.editable)
    var r = (0, d.parse_visibility)(e.visible)
    if (r) {
      t.set_visibility(r)
    }
    if (e.type !== t.type) {
      console.warn("Trying to set invalid block data to block: ", t)
    }
    t.string_to_mutation(e.mutation)
    t.inputList.forEach(function (t) {
      var n
      t.fieldRow.forEach(function (t) {
        if (t.editable && undefined !== t.name) {
          var /* [auto-meaningful-name] */t$name = t.name
          if ((0, l.is_field_number)(t)) {
            if (undefined === e.fields.NUM && undefined !== e.fields.TEXT) {
              t$name = "TEXT"
              t.set_allow_text(true)
            }
            var r
            var i = e.field_constraints[t$name]
            if (undefined !== i) {
              t.set_constraints(i.min, i.max, i.precision)
              if (null !== i.mod) {
                t.mod_ = i.mod
              }
            }
            if (undefined !== (r = e.field_extra_attr && e.field_extra_attr[t$name]) && undefined !== r.controller_type) {
              if ("SLIDER" === r.controller_type) {
                t.set_controller_option({
                  type: s.ControllerType.SLIDER,
                  left_text: r.left_text || "",
                  right_text: r.right_text || ""
                })
              } else {
                if (r.controller_type === s.ControllerType.COLOR_PICKER) {
                  t.set_controller_option({
                    type: s.ControllerType.COLOR_PICKER,
                    color_format: r.color_format,
                    line: r.line
                  })
                } else {
                  t.set_controller_option({
                    type: s.ControllerType.ANGLE_SCALE
                  })
                }
              }
            }
          }
          if ((0, l.is_field_default_value)(t)) {
            if (undefined !== (r = e.field_extra_attr && e.field_extra_attr[t$name]) && undefined !== r.has_been_edited) {
              var /* [auto-meaningful-name] */r$has_been_edited = r.has_been_edited
              t.set_has_been_edited(r$has_been_edited)
            }
          }
          var a = e.fields[t$name]
          if (undefined !== a) {
            if (undefined !== t.call_validator(a) && "FieldImage" !== t.field_type) {
              t.set_value(a)
            }
          }
        }
      })
      if (t.connection && e.shadows[t.name]) {
        if (null === (n = t.connection.targetBlock()) || undefined === n ? undefined : n.is_shadow()) {
          t.connection.remove_shadow()
        }
        t.connection.set_shadow_from_string(e.shadows[t.name])
      }
    })
    if (e.location && n) {
      t.move_by(o.vec2.fromValues(e.location[0], e.location[1]))
    }
    return t
  }
  e.prototype.comment_json_to_dom = function (e) {
    var t = (0, f.create_dom)("comment", undefined, e.text)
    if (null !== e.color_theme) {
      t.setAttribute("pinned", "" + (e.pinned || false))
    }
    if (e.size) {
      t.setAttribute("h", "" + e.size[1])
      t.setAttribute("w", "" + e.size[0])
    }
    if (e.location) {
      t.setAttribute("relativeleft_", "" + e.location[0])
      t.setAttribute("relativetop_", "" + e.location[1])
    }
    if (null !== e.auto_layout) {
      t.setAttribute("auto_layout", "" + e.auto_layout)
    }
    if (e.color_theme) {
      t.setAttribute("color_theme", "" + e.color_theme)
    }
    t.setAttribute("id", e.id)
    return t
  }
  e.prototype.json_to_comment_headless = function (e, t) {
    var n
    if (e.parent_id) {
      var r = t.get_block_by_id(e.parent_id)
      if (!r) {
        throw Error("Comment parent block not found")
      }
      r.set_comment_text("", e.id);
      (0, c.assert)(r.comment, "Create block comment failed.")
      n = r.comment
    } else {
      n = t.new_workspace_comment(undefined, e.id)
    }
    if (null !== e.text) {
      n.set_text(e.text)
    }
    if (null !== e.pinned) {
      n.set_expanded(e.pinned)
    }
    if (e.size) {
      n.set_bubble_size(e.size[0], e.size[1])
    }
    if (e.location) {
      n.set_relative_position(o.vec2.fromValues(e.location[0], e.location[1]))
      if (!n.get_parent_block()) {
        n.move_by(o.vec2.fromValues(e.location[0], e.location[1]))
      }
    }
    if (null !== e.auto_layout) {
      n.set_auto_layout(e.auto_layout)
    }
    var /* [auto-meaningful-name] */e$color_theme = e.color_theme
    if ((0, l.is_comment_theme)(e$color_theme)) {
      n.set_color_theme(e$color_theme, true)
    }
    return n
  }
  e.prototype.json_to_workspace_headless = function (e, t) {
    var n = this
    var /* [auto-meaningful-name] */e$blocks = e.blocks
    var /* [auto-meaningful-name] */e$connections = e.connections
    var /* [auto-meaningful-name] */e$comments = e.comments
    var a = []
    if (e$blocks) {
      Object.keys(e$blocks).forEach(function (e) {
        n.json_to_block_headless(e$blocks[e], t, false)
        a.push(e)
      })
    }
    if (e$connections) {
      var s = []
      Object.keys(e$connections).forEach(function (e) {
        Object.keys(e$connections[e]).forEach(function (o) {
          var a = e$connections[e][o]
          var c = t.get_block_by_id(e)
          var u = t.get_block_by_id(o)
          if (c && u) {
            var l
            var f
            if ("next" === a.type) {
              l = c.next_connection
              f = u.previous_connection
            } else {
              var d = c.get_input(a.input_name)
              l = d && d.connection
              f = u.output_connection || u.previous_connection
            }
            if (!l || !f) {
              return u.is_shadow() ? (u.dispose(), void console.error("Connected connection not found. Shadow block disposed.")) : void console.error("Connected connection not found.")
            }
            if (f.context) {
              s.push({
                inferior: f,
                superior: l
              })
            } else {
              n.try_connect(f, l, e$blocks)
            }
          } else {
            console.error("Connected block not found. ")
          }
        })
      })
      s.forEach(function (e) {
        n.try_connect(e.inferior, e.superior, e$blocks)
      })
      a.forEach(function (e) {
        var n
        if (!(null === (n = t.get_block_by_id(e)) || undefined === n)) {
          n.respawn_all_shadows()
        }
      })
    }
    if (e$comments) {
      Object.keys(e$comments).forEach(function (e) {
        n.json_to_comment_headless(e$comments[e], t)
        a.push(e)
      })
    }
    return a
  }
  e.prototype.try_connect = function (e, t, n) {
    if (t.connect(e, true)) {
      if (n && e.source_block.is_shadow()) {
        this.parse_block_data(n[e.source_block.id], e.source_block, false)
      }
    } else {
      if (this.runtime_data.is_pasting()) {
        e.source_block.dispose(false, false)
      } else {
        for (var r = e.source_block.get_descendants(false), i = r.length - 1; i >= 0; i--) {
          r[i].init_svg()
          r[i].update_collapsed()
          r[i].render(false)
        }
      }
      t.respawn_shadow()
    }
  }
  e.prototype.json_to_workspace = function (e, t) {
    var n = this.events.get_group()
    if (!n) {
      this.events.set_group(true)
    }
    var r = t.is_resizes_enabled()
    if (r) {
      t.set_resizes_enabled(false)
    }
    this.utils.start_text_cache()
    var i = []
    try {
      this.events.disable()
      i = this.json_to_workspace_headless(e, t)
      if (t.rendered) {
        this.render_blocks_and_comments(t, i, e.blocks || {})
      }
    } catch (o) {
      throw new Error("Something wrong with json data. Unable to convert it to workspace.")
    } finally {
      this.events.enable()
      if (!n) {
        this.events.set_group(false)
      }
      if (r) {
        t.set_resizes_enabled(true)
      }
      this.utils.stop_text_cache()
    }
    return i
  }
  e.prototype.render_blocks_and_comments = function (e, t, n) {
    var r = this
    e.get_top_blocks(false).forEach(function (e) {
      if (!(t.indexOf(e.id) < 0)) {
        r.events.disable()
        try {
          e.set_connections_hidden(true)
          for (var i = e.get_descendants(false), a = i.length - 1; a >= 0; a--) {
            i[a].init_svg()
          }
          for (a = i.length - 1; a >= 0; a--) {
            i[a].update_collapsed()
            i[a].render(false)
          }
          for (a = i.length - 1; a >= 0; a--) {
            var s = i[a]
            if (s.comment) {
              s.comment.init_svg()
            }
          }
          var c = n[e.id]
          if (c.location) {
            e.move_by(o.vec2.fromValues(c.location[0], c.location[1]))
          }
          window.setTimeout(function () {
            if (undefined != e && undefined != e.get_workspace()) {
              e.set_connections_hidden(false)
            }
          }, 1)
        } finally {
          e.update_disabled()
          r.events.enable()
        }
        if (r.events.is_enabled()) {
          r.events.fire(r.create_event_factory({
            block: e
          }))
        }
      }
    })
    e.get_top_comments(false).forEach(function (e) {
      if (!(t.indexOf(e.id) < 0)) {
        e.init_svg()
      }
    })
  }
  e.prototype.reset_element_ids = function (e) {
    var t = JSON.stringify(e)
    function n(e, t, n) {
      return e.replace(new RegExp(function (e) {
        return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
      }(t), "g"), n)
    }
    Object.keys(e.blocks).forEach(function (e) {
      t = n(t, e, (0, u.gen_uid)())
    })
    Object.keys(e.comments).forEach(function (e) {
      t = n(t, e, (0, u.gen_uid)())
    })
    return JSON.parse(t)
  }
  e.prototype.get_block_data_by_id = function (e, t) {
    var n = function (e, t) {
      r.blocks[t] = e.blocks[t]
      r.connections[t] = e.connections[t]
      var /* [auto-meaningful-name] */e$blocksT$comment = e.blocks[t].comment
      if (e$blocksT$comment) {
        r.comments[e$blocksT$comment] = e.comments[e$blocksT$comment]
      }
    }
    var r = {
      blocks: {},
      connections: {},
      comments: {}
    }
    var i = [];
    (function e(t, n) {
      var r = n[t]
      if (undefined !== r && (i.push(t), Object.keys(r).length)) {
        for (var o in r) e(o, n)
      }
    })(t, e.connections)
    if (i.length) {
      for (var o = 0, a = i; o < a.length; o++) {
        n(e, a[o])
      }
      return r
    }
  }
  e.prototype.workspace_dom_to_json = function (e) {
    var t
    var n = {
      blocks: {},
      connections: {},
      comments: {}
    }
    var r = new Set()
    Array.from(e.querySelectorAll("block")).forEach(function (e) {
      var t = e.getAttribute("id")
      if (t) {
        r.add(t)
      }
    })
    for (var /* [auto-meaningful-name] */e$childNodes$length = e.childNodes.length, o = 0; o < e$childNodes$length; o++) {
      if (e.childNodes[o].nodeType !== s.NodeType.TEXT) {
        var a = e.childNodes[o]
        var c = a.tagName.toLowerCase()
        if ("block" === c) {
          var l = this.block_dom_to_json(a, undefined, r)
          this.merge_workspace_data(n, l)
        } else if ("comment" === c) {
          var f = a.getAttribute("id") || (0, u.gen_uid)()
          var d = this.comment_dom_to_json(a, f)
          l = {
            blocks: {},
            connections: {},
            comments: (t = {}, t[f] = d, t)
          }
          this.merge_workspace_data(n, l)
        } else {
          console.error(c + " cannot be a top-level element.")
        }
      }
    }
    return n
  }
  e.prototype.block_dom_to_json = function (e, t, n) {
    if (undefined === n) {
      n = new Set()
    }
    var r = {
      blocks: {},
      connections: {},
      comments: {}
    }
    var i = e.nodeName.toLowerCase()
    var o = e.getAttribute("id") || ""
    r.connections[o] = {}
    for (var a = e.getAttribute("x") || "0", c = e.getAttribute("y") || "0", l = null, f = "", h = {}, p = {}, _ = {}, A = {}, /* [auto-meaningful-name] */e$childNodes$length = e.childNodes.length, v = 0; v < e$childNodes$length; v++) {
      if (e.childNodes[v].nodeType !== s.NodeType.TEXT) {
        var m = e.childNodes[v]
        var y = m.tagName.toLowerCase()
        if ("field" !== y) {
          if ("comment" !== y) {
            if ("mutation" !== y) {
              if ("value" !== y) {
                if ("statement" !== y) {
                  if ("next" !== y) {
                    ;
                  } else {
                    if ("true" === m.getAttribute("last_next_in_stack")) {
                      continue
                    }
                    for (b = 0; b < m.childNodes.length; b++) {
                      if (m.childNodes[b].nodeType !== s.NodeType.TEXT) {
                        if ("block" === (k = (O = m.childNodes[b]).tagName.toLowerCase())) {
                          w = O.getAttribute("id") || ""
                          r.connections[o][w] = {
                            type: "next"
                          }
                          B = this.block_dom_to_json(O, o, n)
                          this.merge_workspace_data(r, B)
                        }
                      }
                    }
                  }
                } else {
                  for (var b = 0; b < m.childNodes.length; b++) {
                    if (m.childNodes[b].nodeType !== s.NodeType.TEXT) {
                      h[E = m.getAttribute("name") || ""] = ""
                      if ("block" === (k = (O = m.childNodes[b]).tagName.toLowerCase())) {
                        var w = O.getAttribute("id") || ""
                        r.connections[o][w] = {
                          type: "input",
                          input_type: "statement",
                          input_name: E
                        }
                        B = this.block_dom_to_json(O, o, n)
                        this.merge_workspace_data(r, B)
                      }
                    }
                  }
                }
              } else {
                for (var E = m.getAttribute("name") || "", x = undefined, C = undefined, b = 0; b < m.childNodes.length; b++) {
                  if (m.childNodes[b].nodeType !== s.NodeType.TEXT) {
                    var O
                    var k
                    if ("shadow" === (k = (O = m.childNodes[b]).tagName.toLowerCase()) || "empty" === k) {
                      var S = O.getAttribute("id")
                      if (S && n.has(S)) {
                        O.setAttribute("id", this.utils.gen_uid())
                      }
                      h[E] = this.utils.dom_to_string(O)
                      x = O
                    }
                    if ("block" === k) {
                      C = O
                    }
                  }
                }
                if (C) {
                  var T = C.getAttribute("id") || ""
                  r.connections[o][T] = {
                    type: "input",
                    input_type: "value",
                    input_name: E
                  }
                  var B = this.block_dom_to_json(C, o, n)
                  this.merge_workspace_data(r, B)
                } else if (x) {
                  T = x.getAttribute("id") || ""
                  r.connections[o][T] = {
                    type: "input",
                    input_type: "value",
                    input_name: E
                  }
                  var B = this.block_dom_to_json(x, o, n)
                  this.merge_workspace_data(r, B)
                }
              }
            } else {
              f = this.utils.dom_to_string(m)
            }
          } else {
            l = m.getAttribute("id") || (0, u.gen_uid)()
            var D = this.comment_dom_to_json(m, l, o)
            r.comments[l] = D
          }
        } else {
          var I = m.getAttribute("name") || ""
          p[I] = m.textContent || ""
          var R = m.getAttribute("constraints")
          if (null !== R) {
            _[I] = (0, d.parse_constraints)(R)
          }
          var F = m.getAttribute("has_been_edited")
          if (null !== F) {
            A[I] = {
              has_been_edited: "true" === F
            }
          }
        }
      }
    }
    r.blocks[o] = {
      type: e.getAttribute("type") || "",
      id: o,
      is_shadow: "block" !== i,
      collapsed: "true" === e.getAttribute("collapsed"),
      disabled: "true" === e.getAttribute("disabled"),
      deletable: "false" !== e.getAttribute("deletable"),
      movable: "false" !== e.getAttribute("movable"),
      editable: "false" !== e.getAttribute("editable") && "empty" !== i,
      visible: e.getAttribute("visible") || "",
      location: [parseInt(a), parseInt(c)],
      shadows: h,
      fields: p,
      field_constraints: _,
      field_extra_attr: A,
      comment: l,
      mutation: f,
      parent_id: t || null,
      is_output: null
    }
    return r
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.utils)], e.prototype, "utils", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.runtime_data)], e.prototype, "runtime_data", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.CreateEvent)], e.prototype, "create_event_factory", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Json = h
