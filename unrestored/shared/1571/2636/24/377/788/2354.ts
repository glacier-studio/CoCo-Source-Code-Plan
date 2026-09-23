/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2354
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.TransformToOp = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 31 */"ot-json1")
var o = require(/* 1393 */"../../../1058/1393/index")
var a = (0, r.__importStar)(require(/* 536 */"../../../17/536"))
var s = require(/* 125 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var c = require(/* 293 */"../../../123/293")
var u = require(/* 976 */"../../../17/499/976")
var l = require(/* 1155 */"../737/1155")
var f = function () {
  function e(e, t) {
    var n = this
    this.generate_op_callback = t
    this.current_event_group = ""
    this.cached_events = []
    this.plugins = new Set()
    this.warn = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n]
      }
      console.warn.apply(console, (0, r.__spreadArray)(["Warn when transform to op ", "[" + e + "]: "], t, false))
    }
    this.error = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n]
      }
      console.error.apply(console, (0, r.__spreadArray)(["Error when transform to op ", "[" + e + "]: "], t, false))
    }
    this.event_listener = function (e) {
      if (n.Blink.events.is_listener_enabled()) {
        if (e.type === a.GroupEventType.GroupStart) {
          if ("" !== n.current_event_group && 0 !== n.cached_events.length) {
            n.warn("Receiving GroupStart", "Starting a new event group before existing group " + n.current_event_group + " closes. ")
            n.handle_event_group()
          }
          return void (n.current_event_group = e._group)
        }
        if (e.type === a.GroupEventType.GroupEnd) {
          if (e._group !== n.current_event_group && 0 !== n.cached_events.length) {
            n.warn("Receiving GroupEnd", "Ending group " + e._group + " while current processing group is " + n.current_event_group + ". Cached events is going to be handled and both group are going to be closed. ")
          }
          n.current_event_group = ""
          return void n.handle_event_group()
        }
        if (e.type === a.GroupEventType.GroupCancel) {
          if (e._group !== n.current_event_group && 0 !== n.cached_events.length) {
            n.warn("Receiving GroupCancel", "Canceling group " + e._group + " while current processing group is " + n.current_event_group + ". Cached events is going to be handled and both group are going to be closed. ")
            n.handle_event_group()
          }
          n.current_event_group = ""
          return void (n.cached_events = [])
        }
        if (e.type === a.BlockEventType.CREATE || e.type === a.BlockEventType.MOVE || e.type === a.BlockEventType.DELETE || e.type === a.BlockEventType.CHANGE) {
          switch (e._group) {
            case "":
              var t = n.handle_single_event([e], 0)
              if (!t) {
                return
              }
              return void n.apply_op_to_doc(t)
            case n.current_event_group:
              return void n.cached_events.push(e)
            default:
              n.error("Receiving Block Event", "Receive event " + e + " when group " + n.current_event_group + " is not finished. This event would be ignored. ")
          }
        }
      }
    }
    this.get_current_ws_json = function () {
      return n.cached_json ? n.cached_json : e()
    }
  }
  e.prototype.apply_op_to_doc = function (e) {
    try {
      try {
        this.plugins.forEach(function (t) {
          t.before_apply_op_to_doc(e)
        })
      } catch (t) {
        this.error("Before apply op to doc", t)
        throw Error("Should reverse")
      }
      try {
        this.generate_op_callback.call(this, [e])
      } catch (t) {
        this.error("Applying op to doc", t)
        throw Error("Should reverse")
      }
      try {
        this.plugins.forEach(function (t) {
          t.after_apply_op_to_doc(e)
        })
      } catch (t) {
        this.error("After apply op to doc", t)
      }
    } catch (t) {
      this.refresh()
    }
  }
  e.prototype.refresh = function () {
    var /* [auto-meaningful-name] */this$Blink$mainWorkspace = this.Blink.mainWorkspace
    if (this$Blink$mainWorkspace) {
      try {
        this.Blink.events.disable()
        this$Blink$mainWorkspace.clear()
        this.reset()
        var t = this.get_current_ws_json()
        this.Blink.json.json_to_workspace(t, this$Blink$mainWorkspace)
      } catch (n) {
        this.error("Refreshing workspace", n)
      } finally {
        this.Blink.events.enable()
      }
    }
  }
  e.prototype.handle_single_event = function (e, t) {
    var n = e[t]
    try {
      this.plugins.forEach(function (e) {
        e.before_handle_single_event(n)
      })
    } catch (n) {
      this.error("Before handle single event", n)
      return null
    }
    switch (n.type) {
      case a.BlockEventType.CREATE:
        return this.generate_create_op(n.get_element_json())
      case a.BlockEventType.DELETE:
        return this.generate_delete_op(n.ids)
      case a.BlockEventType.MOVE:
        return this.generate_move_event_op(e, t)
      case a.BlockEventType.CHANGE:
        return this.generate_change_event_op(n)
      default:
        return null
    }
  }
  e.prototype.handle_event_group = function () {
    var e = this
    try {
      this.plugins.forEach(function (t) {
        t.before_handle_event_group(e.cached_events)
      })
    } catch (s) {
      return void this.error("Before handle event group", s)
    }
    var t = this.Blink.events.filter(this.cached_events, true)
    var n = (0, l.filter_events)(t)
    this.cached_events = []
    if (n && 0 !== n.length) {
      if (this.cached_json) {
        this.error("Handle event group", "Handling multi event groups at a time. ")
        this.cached_json = undefined
      }
      this.cached_json = this.get_current_ws_json()
      var r = null
      try {
        for (var i = 0; i < n.length; i++) {
          var a = this.handle_single_event(n, i)
          this.cached_json = o.type.apply(this.cached_json, a)
          r = o.type.compose(r, a)
        }
      } catch (s) {
        this.error("Generating group op", s)
        this.refresh()
      }
      this.cached_json = undefined
      this.apply_op_to_doc(r)
    }
  }
  e.prototype.start = function () {
    this.Blink.mainWorkspace.remove_change_listener(this.event_listener)
    this.Blink.mainWorkspace.add_change_listener(this.event_listener, false)
  }
  e.prototype.stop = function () {
    this.Blink.mainWorkspace.remove_change_listener(this.event_listener)
  }
  e.prototype.reset = function () {
    this.current_event_group = ""
    this.cached_events = []
    this.cached_json = undefined
  }
  e.prototype.register_plugins = function (e) {
    var t = this
    e.forEach(function (e) {
      return t.plugins.add(e)
    })
  }
  e.prototype.generate_create_op = function (e) {
    var t = null
    try {
      Object.keys(e.blocks).forEach(function (n) {
        var r = e.blocks[n]
        var a = ["blocks", r.id]
        t = o.type.compose(t, (0, i.insertOp)(a, r))
      })
      Object.keys(e.connections).forEach(function (n) {
        var r = e.connections[n]
        var a = ["connections", n]
        for (var s in t = o.type.compose(t, (0, i.insertOp)(a, {})), r) {
          var c = ["connections", n, s]
          t = o.type.compose(t, (0, i.insertOp)(c, r[s]))
        }
      })
      Object.keys(e.comments).forEach(function (n) {
        var r = e.comments[n]
        var a = ["comments", r.id]
        t = o.type.compose(t, (0, i.insertOp)(a, r))
      })
    } catch (n) {
      this.error("Generating Create Op", e, n)
    }
    return t
  }
  e.prototype.generate_delete_op = function (e, t) {
    var n = this
    try {
      var r = t || this.get_current_ws_json()
      var i = []
      e.forEach(function (e) {
        if (r.comments[e]) {
          n.delete_comment(e, i)
        } else {
          n.delete_block(r, e, i)
        }
      })
      return i.reduce(o.type.compose, null)
    } catch (a) {
      this.error("Generating Delete Op", a)
      return null
    }
  }
  e.prototype.delete_comment = function (e, t) {
    var n = ["comments", e]
    t.push((0, i.removeOp)(n))
  }
  e.prototype.delete_block = function (e, t, n) {
    var r = ["connections", t]
    n.push((0, i.removeOp)(r))
    var o = ["blocks", t]
    n.push((0, i.removeOp)(o))
    var a = e.blocks[t]
    if (!a) {
      throw Error("Cannot find block " + t + " in json.")
    }
    if (a.comment) {
      this.delete_comment(a.comment, n)
    }
  }
  e.prototype.generate_move_event_op = function (e, t) {
    try {
      var n = e[t]
      var r = n.get_block_id()
      var i = n.get_old_loc()
      var s = n.get_new_loc()
      if (this.get_current_ws_json().comments[r]) {
        return this.generate_move_op("comments", r, i.coordinate, s.coordinate)
      }
      var c = []
      if (i.parent_id) {
        var u = true
        if (i.input_name) {
          for (var l = t + 1; l < e.length; l++) {
            if ((f = e[l]).type === a.BlockEventType.MOVE && f.get_new_loc().parent_id === i.parent_id && f.get_new_loc().input_name === i.input_name) {
              u = false
              break
            }
            if (f.type === a.BlockEventType.CHANGE && "mutation" === f.element && f.get_block_id() === i.parent_id) {
              u = false
              break
            }
          }
        }
        c.push(this.generate_disconnect_op(r, i.parent_id, u ? i.input_name : undefined))
      }
      if (s.coordinate) {
        c.push(this.generate_move_op("blocks", r, i.coordinate, s.coordinate))
      }
      if (s.parent_id) {
        u = true
        if (s.input_name) {
          for (l = t - 1; l >= 0; l--) {
            var f
            if ((f = e[l]).type === a.BlockEventType.MOVE) {
              var d = f.get_old_loc()
              if (d.parent_id === s.parent_id && d.input_name === s.input_name) {
                u = false
                break
              }
            }
          }
        }
        c.push(this.generate_connect_op(r, s.parent_id, s.input_name, undefined, u))
      }
      return c.reduce(o.type.compose, null)
    } catch (f) {
      this.error("Generating Move Event Op", e[t], f)
      return null
    }
  }
  e.prototype.generate_move_op = function (e, t, n, r) {
    try {
      if (!r) {
        throw Error("Invalid move data on element " + t)
      }
      var o = true
      if (n && "boolean" !== typeof n) {
        o = [n[0], n[1]]
      }
      var a = [r[0], r[1]]
      var s = [e, t, "location"]
      return (0, i.replaceOp)(s, o, a)
    } catch (c) {
      this.error("Generating Move Op", c)
      return null
    }
  }
  e.prototype.generate_disconnect_op = function (e, t, n, r) {
    try {
      var a = []
      var s = ["blocks", e, "parent_id"]
      a.push((0, i.replaceOp)(s, t, null))
      var c = (r || this.get_current_ws_json()).connections[t]
      var u = c[e]
      if (!u) {
        throw Error("Cannot find old connection between block " + t + " and " + e)
      }
      Object.keys(c).forEach(function (e) {
        var n = c[e]
        if ("next" === n.type && "next" === u.type || "input" === n.type && "input" === u.type && u.input_name === n.input_name) {
          a.push((0, i.removeOp)(["connections", t, e]))
        }
      })
      if (n) {
        a.push.apply(a, this.respawn_shadow(t, n, r))
      }
      return a.reduce(o.type.compose, null)
    } catch (l) {
      this.error("Generating Disconnect Op", l)
      return null
    }
  }
  e.prototype.generate_connect_op = function (e, t, n, r, a) {
    if (undefined === a) {
      a = true
    }
    try {
      var s = []
      var c = ["blocks", e, "parent_id"]
      s.push((0, i.replaceOp)(c, true, t))
      if (!n) {
        var u = ["connections", t, e]
        var l = {
          type: "next"
        }
        s.push((0, i.insertOp)(u, l))
        return s.reduce(o.type.compose, null)
      }
      var f = (r || this.get_current_ws_json()).blocks[t]
      if (f) {
        var d = f.shadows[n] ? "value" : "statement"
        u = ["connections", t, e]
        l = {
          type: "input",
          input_type: d,
          input_name: n
        }
        s.push((0, i.insertOp)(u, l))
        if (a && "value" === d) {
          s.push.apply(s, this.delete_shadow(t, n, r))
        }
      } else {
        var u = ["connections", t, e]
        var l = {
          type: "input",
          input_type: "statement",
          input_name: n
        }
        s.push((0, i.insertOp)(u, l))
      }
      return s.reduce(o.type.compose, null)
    } catch (h) {
      this.error("Generating Connect Op", h)
      return null
    }
  }
  e.prototype.generate_change_event_op = function (e, t) {
    if (e.type !== a.BlockEventType.CHANGE) {
      return null
    }
    var /* [auto-meaningful-name] */e$element = e.element
    try {
      switch (e$element) {
        case "comment":
          var r = e.get_new_comment()
          if (r) {
            return this.generate_create_block_comment_op(e.get_block_id(), r)
          }
          var i = e.get_old_value().getAttribute("id") || ""
          return this.generate_delete_block_comment_op(e.get_block_id(), i)
        case "mutation":
        case "change_procedure_param":
          var o = e.get_new_json()
          if (!o) {
            throw Error("Invalid mutate event. ")
          }
          return this.generate_mutate_op(e.get_block_id(), o, t)
        case "field":
        case "procedure_rename":
          var s = e.get_name(),
            c = e.get_new_value()
          if ("string" !== typeof s || "string" !== typeof c) {
            throw Error("invalid edit field event.")
          }
          return this.generate_edit_field_op(e.get_block_id(), s, c, t)
        case "comment_text":
          var l = e.get_old_value(),
            f = e.get_new_value()
          if ("string" !== typeof l || "string" !== typeof f) {
            throw Error("Invalid edit comment event")
          }
          return this.generate_edit_comment_op(e.get_block_id(), l, f)
        case "collapsed":
          var d = e.get_new_value()
          if ("boolean" !== typeof d) {
            throw Error("Invalid collapse block event")
          }
          return this.generate_collapse_block_op(e.get_block_id(), d)
        case "comment_expand":
          var h = e.get_new_value()
          if ("boolean" !== typeof h) {
            throw Error("Invalid expand comment event")
          }
          return this.generate_comment_expand_op(e.get_block_id(), h)
        case "comment_color":
          var p = e.get_old_value(),
            _ = e.get_new_value()
          if ("string" !== typeof p || "string" !== typeof _) {
            throw Error("Invalid change comment color event")
          }
          return this.generate_change_comment_color_op(e.get_block_id(), p, _)
        case "comment_resize":
          var A = e.get_old_value(),
            g = e.get_new_value()
          if ("string" !== typeof A || "string" !== typeof g) {
            throw Error("Invalid resize comment event")
          }
          return this.generate_comment_resize_op(e.get_block_id(), A, g)
        case "disabled":
          var v = e.get_new_value()
          if ("boolean" !== typeof v) {
            throw Error("invalid disabled event")
          }
          return this.generate_disabled_op(e.get_block_id(), v)
        case "field_default_value":
          var m = e.get_name(),
            y = e.get_new_value()
          if ("string" !== typeof m || "boolean" !== typeof y) {
            throw Error("invalid field default value event. ")
          }
          return this.generate_field_extra_attr_op(e.get_block_id(), m, "has_been_edited", y)
        case "visibility":
          var b = e.get_new_value(),
            w = e.get_old_value()
          if ("string" !== typeof w || "string" !== typeof b) {
            throw Error("invalid visibility event. ")
          }
          var E = (0, u.parse_visibility)(b),
            x = (0, u.parse_visibility)(w)
          if (!E || !x) {
            throw Error("invalid visibility event. ")
          }
          return this.generate_visibility_op(e.get_block_id(), x, E)
        default:
          throw Error("unimplemented event type " + e$element)
      }
    } catch (C) {
      this.error("Generating Change Op", C)
      return null
    }
  }
  e.prototype.generate_create_block_comment_op = function (e, t) {
    var n = t.id
    var r = []
    var a = ["comments", n]
    var s = (0, i.insertOp)(a, t)
    r.push(s)
    var c = ["blocks", e, "comment"]
    var u = (0, i.replaceOp)(c, null, n)
    r.push(u)
    return r.reduce(o.type.compose, null)
  }
  e.prototype.generate_delete_block_comment_op = function (e, t) {
    var n = []
    var r = ["blocks", e, "comment"]
    n.push((0, i.replaceOp)(r, t, null))
    var a = ["comments", t]
    n.push((0, i.removeOp)(a))
    return n.reduce(o.type.compose, null)
  }
  e.prototype.generate_mutate_op = function (e, t, n) {
    var r = n || this.get_current_ws_json()
    var a = this.Blink.json.get_block_data_by_id(r, e)
    var s = t
    var c = []
    var u = {}
    if (a) {
      var /* [auto-meaningful-name] */a$blocksE$parent_id = a.blocks[e].parent_id
      if (a$blocksE$parent_id) {
        var f = ["connections", a$blocksE$parent_id, e]
        var d = (0, i.removeOp)(f)
        c.push(d)
        u[a$blocksE$parent_id] = u[a$blocksE$parent_id] || {}
        u[a$blocksE$parent_id][e] = r.connections[a$blocksE$parent_id][e]
      }
      Object.keys(a.blocks).forEach(function (e) {
        var t = ["connections", e]
        c.push((0, i.removeOp)(t))
        var n = ["blocks", e]
        c.push((0, i.removeOp)(n))
      })
      Object.keys(a.comments).forEach(function (e) {
        var t = ["comments", e]
        c.push((0, i.removeOp)(t))
      })
    }
    Object.keys(s.blocks).forEach(function (e) {
      var t = s.blocks[e]
      var n = ["blocks", t.id]
      c.push((0, i.insertOp)(n, t))
    })
    Object.keys(s.connections).forEach(function (e) {
      var t = s.connections[e]
      var n = ["connections", e]
      for (var r in c.push((0, i.insertOp)(n, {})), t) {
        var o = ["connections", e, r]
        c.push((0, i.insertOp)(o, t[r]))
      }
    })
    Object.keys(s.comments).forEach(function (e) {
      var t = s.comments[e]
      var n = ["comments", t.id]
      c.push((0, i.insertOp)(n, t))
    })
    Object.keys(u).forEach(function (e) {
      Object.keys(u[e]).forEach(function (t) {
        c.push((0, i.insertOp)(["connections", e, t], u[e][t]))
      })
    })
    return c.reduce(o.type.compose, null)
  }
  e.prototype.generate_edit_field_op = function (e, t, n, r) {
    var a
    var s = null === (a = this.Blink.mainWorkspace.get_block_by_id(e)) || undefined === a ? undefined : a.get_field(t)
    if (!s) {
      return null
    }
    var u = t
    if ("NUM" === t && s.allow_text && !(0, c.is_valid_number)(n)) {
      u = "TEXT"
    }
    var /* [auto-meaningful-name] */RThis$get_current_ws_json$blocksE$fields = (r || this.get_current_ws_json()).blocks[e].fields
    var f = ["blocks", e, "fields", u]
    if (undefined !== RThis$get_current_ws_json$blocksE$fields[u]) {
      return (0, i.replaceOp)(f, true, n)
    }
    var d = {
      TEXT: "NUM",
      NUM: "TEXT"
    }[u]
    if (d && undefined !== RThis$get_current_ws_json$blocksE$fields[d]) {
      var h = ["blocks", e, "fields", d]
      return [(0, i.removeOp)(h), (0, i.insertOp)(f, n)].reduce(o.type.compose, null)
    }
    return (0, i.insertOp)(f, n)
  }
  e.prototype.generate_comment_expand_op = function (e, t) {
    var n = ["comments", e, "pinned"]
    return (0, i.replaceOp)(n, !t, t)
  }
  e.prototype.generate_change_comment_color_op = function (e, t, n) {
    var r = ["comments", e, "color_theme"]
    return (0, i.replaceOp)(r, t, n)
  }
  e.prototype.generate_comment_resize_op = function (e, t, n) {
    var r = ["comments", e, "size"]
    return (0, i.replaceOp)(r, t, n)
  }
  e.prototype.generate_collapse_block_op = function (e, t) {
    var n = ["blocks", e, "collapsed"]
    return (0, i.replaceOp)(n, !t, t)
  }
  e.prototype.generate_edit_comment_op = function (e, t, n) {
    var r = ["comments", e, "text"]
    return (0, i.replaceOp)(r, t, n)
  }
  e.prototype.generate_disabled_op = function (e, t) {
    var n = ["blocks", e, "disabled"]
    return (0, i.replaceOp)(n, !t, t)
  }
  e.prototype.generate_field_extra_attr_op = function (e, t, n, r) {
    var o = ["blocks", e, "field_extra_attr", t, n]
    return (0, i.replaceOp)(o, null, r)
  }
  e.prototype.generate_visibility_op = function (e, t, n) {
    var r = ["blocks", e, "visible"]
    return (0, i.replaceOp)(r, t, n)
  }
  e.prototype.respawn_shadow = function (e, t, n) {
    var r = []
    var o = (n || this.get_current_ws_json()).blocks[e]
    if (!o) {
      throw Error("Cannot find block " + e + " in json.")
    }
    var a = o.shadows[t]
    if (!a) {
      return []
    }
    var s = this.Blink.utils.string_to_dom(a)
    var c = s.getAttribute("id") || ""
    var u = this.Blink.json.block_dom_to_json(s).blocks[c]
    u.parent_id = e
    var l = ["blocks", c]
    r.push((0, i.insertOp)(l, u))
    var f = ["connections", c]
    r.push((0, i.insertOp)(f, {}))
    var d = ["connections", e, c]
    var h = {
      type: "input",
      input_type: "value",
      input_name: t
    }
    var p = (0, i.insertOp)(d, h)
    r.push(p)
    return r
  }
  e.prototype.delete_shadow = function (e, t, n) {
    var r = []
    var o = n || this.get_current_ws_json()
    var a = this.Blink.json.get_block_data_by_id(o, e)
    if (!a) {
      return []
    }
    for (var s = a.connections[e], c = Object.keys(s), u = function (n) {
        var u = s[c[n]]
        if ("input" === u.type && u.input_name === t) {
          var f = c[n]
          var d = o.blocks[f]
          if (!d) {
            throw Error("Cannot find block " + f + " in json.")
          }
          if (!d.is_shadow) {
            return {
              value: []
            }
          }
          var h = ["blocks", f]
          r.push((0, i.removeOp)(h))
          var p = ["connections", f]
          r.push((0, i.removeOp)(p))
          var _ = ["connections", e, f]
          r.push((0, i.removeOp)(_))
          var A = undefined
          var g = {}
          Object.keys(d.fields).forEach(function (e) {
            A = d.fields[e]
            if (d.field_extra_attr[e]) {
              g = d.field_extra_attr[e]
            }
          })
          var v = a.blocks[e].shadows[t]
          var m = l.Blink.utils.string_to_dom(v)
          m.setAttribute("id", f)
          var y = m.childNodes[0]
          if (undefined !== A && "field" === y.nodeName) {
            y.textContent = A
          }
          Object.keys(g).forEach(function (e) {
            var t = g[e]
            y.setAttribute(e, JSON.stringify(t))
          })
          var b = l.Blink.xml.dom_to_text(m)
          if (b !== v) {
            var w = ["blocks", e, "shadows", t]
            r.push((0, i.replaceOp)(w, v, b))
          }
          return "break"
        }
      }, l = this, f = 0; f < c.length; f++) {
      var d = u(f)
      if ("object" === typeof d) {
        return d.value
      }
      if ("break" === d) {
        break
      }
    }
    return r
  };
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.Blink)], e.prototype, "Blink", undefined)
  return e
}()
exports.TransformToOp = f
