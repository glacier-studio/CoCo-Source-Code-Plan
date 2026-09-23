/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2211
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.RenderedConnection = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = (0, r.__importDefault)(require(/* 205 */"animejs"))
var a = require(/* 258 */"@kitten-team/gl-matrix")
var s = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var c = require(/* 195 */"../../123/195/index")
var u = require(/* 214 */"../../1022/214")
var l = require(/* 123 */"../../123/index")
var f = require(/* 537 */"../../123/537")
var d = function () {
  function e(e) {
    var t = this
    this.x_ = 0
    this.y_ = 0
    this.hidden_ = false
    this.in_db = false
    this.shadow_dom = undefined
    this.can_connect_to_previous = function (e) {
      if (t.target_connection) {
        return false
      }
      if (-1 != t.runtime_data.dragging_connections.indexOf(e)) {
        return false
      }
      var n = t.source_block.get_first_statement_connection()
      var r = undefined != n
      var i = t == n
      var o = t == t.source_block.next_connection
      if (r && !i && !o) {
        return false
      }
      var a = undefined != t.source_block.previous_connection
      if (i && a) {
        return true
      }
      if (o || i && !a) {
        if (!e.target_connection) {
          return true
        }
        var s = e.targetBlock()
        return !!s && !!s.is_insertion_marker() && !s.get_previous_block()
      }
      return false
    }
    this.source_block = e.source
    this.type = e.type
    this.context = e.context
    var n = e.source.get_workspace()
    if (n && n.connectionDBList) {
      this.db_ = n.connectionDBList[e.type]
      this.db_opposite = n.connectionDBList[c.OPPOSITE_TYPE[e.type]]
      this.hidden_ = !this.db_
    }
    this.offset_in_block = a.vec2.create()
  }
  var t
  t = e
  e.connect_reciprocally = function (e, t) {
    if (!(e && t)) {
      console.error("Cannot connect undefined connections.")
    }
    e.target_connection = t
    t.target_connection = e
  }
  e.prototype.get_targe_connection = function () {
    return this.target_connection
  }
  e.prototype.move_to = function (e) {
    var /* [auto-meaningful-name] */this$db_
    var /* [auto-meaningful-name] */this$db_1
    if (this.in_db) {
      if (!(null === (this$db_ = this.db_) || undefined === this$db_)) {
        this$db_.remove_connection(this)
      }
    }
    this.x_ = e[0]
    this.y_ = e[1]
    if (!(this.hidden_ || null === (this$db_1 = this.db_) || undefined === this$db_1)) {
      this$db_1.add_connection(this)
    }
  }
  e.prototype.move_by = function (e) {
    this.move_to(a.vec2.fromValues(e[0] + this.x_, e[1] + this.y_))
  }
  e.prototype.highlight = function () {
    var /* [auto-meaningful-name] */this$workspace_db$current
    var t = null === (this$workspace_db$current = this.workspace_db.current) || undefined === this$workspace_db$current ? undefined : this$workspace_db$current.get_options().connection_effect
    var n = t ? t.color : "#fff"
    if (this.type == c.CONNECTION_TYPE.INPUT_VALUE || this.type === c.CONNECTION_TYPE.OUTPUT_VALUE) {
      this.highlight_input(n)
    } else {
      if (this.type === c.CONNECTION_TYPE.NEXT_STATEMENT) {
        this.highlight_statement(n, true)
      } else {
        if (this.type === c.CONNECTION_TYPE.PREVIOUS_STATEMENT) {
          this.highlight_statement(n, false)
        }
      }
    }
  }
  e.prototype.highlight_input = function (e) {
    var n = this.source_block.get_relative_to_surface_xy()
    var r = this.x_ - n[0]
    var i = this.y_ - n[1]
    var o = ""
    if (this.target_connection) {
      var /* [auto-meaningful-name] */this$target_connection$source_block$svg_path = this.target_connection.source_block.svg_path
      var s = undefined
      if (undefined != this$target_connection$source_block$svg_path) {
        s = this$target_connection$source_block$svg_path.getAttribute("d")
      }
      if ("string" === typeof s) {
        o = s
      }
    }
    t.highlighted_path = (0, l.create_svg_element)("path", {
      filter: "url(#blur-1px)",
      class: "blocklyHighlightedConnectionCover",
      transform: "translate(" + r + ", " + i + ")",
      fill: e,
      d: o
    }, this.source_block.get_svg_root())
  }
  e.prototype.highlight_statement = function (e, n) {
    var /* [auto-meaningful-name] */this$source_block = this.source_block
    var i = this.offset_in_block[0]
    var a = n ? this.offset_in_block[1] - 1 : -3
    t.highlighted_path = (0, l.create_svg_element)("g", {
      class: "g_blockly_next_statement_underline",
      transform: "translate(0, " + a + ")"
    }, this.source_block.get_svg_root());
    (0, l.create_svg_element)("circle", {
      r: "4",
      cx: i,
      cy: "2",
      fill: e
    }, t.highlighted_path);
    (0, l.create_svg_element)("circle", {
      r: "8",
      cx: i,
      cy: "2",
      fill: e,
      "fill-opacity": "0.3",
      filter: "url(#blur-1px)"
    }, t.highlighted_path)
    var s = (0, l.create_svg_element)("rect", {
      x: i,
      y: "0",
      rx: "2",
      width: "0",
      height: "3",
      fill: e
    }, t.highlighted_path)
    var c = this.get_path_top_length(this$source_block) - i || this$source_block.width - this$source_block.block_renderer.padding_r - i
    if (this.offset_in_block[1] >= 80) {
      c = 75
    }
    if ("controls_if" === this.source_block.type) {
      if (this.offset_in_block[1] >= 100) {
        c = 55
      }
      if (this.offset_in_block[1] >= 140) {
        c = 75
      }
    }
    (0, o.default)({
      targets: s,
      width: {
        value: c,
        duration: 200,
        easing: "easeOutQuad"
      }
    })
  }
  e.prototype.get_path_top_length = function (e) {
    var t = e.get_svg_root().querySelector("path")
    if (t) {
      var n = t.getAttribute("d").match(/H\s.*?\s/gi)
      if (undefined == n) {
        return 0
      }
      var r = n.map(function (e) {
        return e.match(/\d+(.\d+)?/g)
      })
      return Math.max.apply(Math, r)
    }
    return 0
  }
  e.prototype.unhighlight = function () {
    if (t.highlighted_path) {
      (0, l.remove_node)(t.highlighted_path)
      delete t.highlighted_path
    }
  }
  e.prototype.set_offset_in_block = function (e, t) {
    this.offset_in_block[0] = e
    this.offset_in_block[1] = t
  }
  e.prototype.move_to_offset = function (e) {
    this.move_to(a.vec2.fromValues(e[0] + this.offset_in_block[0], e[1] + this.offset_in_block[1]))
  }
  e.prototype.tighten = function () {
    if (undefined == this.target_connection) {
      throw new ReferenceError("Target connection not found.")
    }
    var e = this.target_connection.get_xy()
    a.vec2.sub(e, e, [this.x_, this.y_])
    if (0 !== e[0] || 0 !== e[1]) {
      var t = this.targetBlock()
      var n = t.get_svg_root()
      var r = this.utils.get_relative_xy(n)
      a.vec2.sub(r, r, e)
      n.setAttribute("transform", "translate(" + r[0] + ", " + r[1] + ")")
      t.move_connections(a.vec2.negate(e, e))
    }
  }
  e.prototype.targetBlock = function () {
    if (this.is_connected() && undefined != this.target_connection) {
      return this.target_connection.get_source_block()
    }
  }
  e.prototype.closest = function (e, t) {
    return this.db_opposite ? this.db_opposite.search_for_closest(this, e, t) : {
      connection: undefined,
      radius: e
    }
  }
  e.prototype.connect_to_inferior = function (e) {
    (function (e) {
      var /* [auto-meaningful-name] */e$target_connection
      var r
      var i = this
      var o = this
      var a = o.get_source_block()
      var s = e.get_source_block()
      var u = false
      if (o == a.get_first_statement_connection()) {
        u = true
      }
      if (e.is_connected()) {
        if (u) {
          e$target_connection = e.target_connection
        }
        e.disconnect()
      }
      if (o.is_connected()) {
        var l = o.targetBlock()
        var f = o.get_shadow_dom()
        o.set_shadow_dom(undefined)
        if (l && l.is_shadow()) {
          this.events.disable()
          f = s.is_shadow() ? this.xml.block_to_dom(s) : this.xml.block_to_dom(l)
          l.dispose()
          l = undefined
          this.events.enable()
        } else if (o.type == c.CONNECTION_TYPE.NEXT_STATEMENT) {
          if (l && !l.previous_connection) {
            throw new Error("Orphan block does not have a previous connection.")
          }
          for (var d = s; d.next_connection;) {
            var h = d.get_next_block()
            if (!h || h.is_shadow()) {
              if (l && l.previous_connection && l.previous_connection.check_type(d.next_connection)) {
                d.next_connection.connect(l.previous_connection)
                l = undefined
              }
              break
            }
            d = h
          }
        }
        if (l && (o.disconnect(), this.events.is_record_undo())) {
          var p = this.events.get_group()
          window.setTimeout(function () {
            if (i.events.get_group() && i.events.get_group() !== p) {
              console.error("current group " + i.events.get_group() + ", blocking scheduled bump")
            } else {
              if (l && l.get_workspace() && !l.get_parent()) {
                i.events.set_group(p)
                if (l.output_connection) {
                  l.output_connection.bump_away_from(o)
                } else {
                  if (l.previous_connection) {
                    l.previous_connection.bump_away_from(o)
                  }
                }
                i.events.set_group(false)
              }
            }
          }, this.theme.blink_params.BUMP_DELAY)
        }
        if (f) {
          o.set_shadow_dom(f)
        }
      }
      if (u && e$target_connection && a.previous_connection) {
        e$target_connection.connect(a.previous_connection)
      }
      s.visibility_for_undo = s.get_visibility()
      if (this.events.is_enabled()) {
        r = this.move_event_factory({
          block: s
        })
      }
      t.connect_reciprocally(o, e)
      s.set_parent(a)
      if (r) {
        r.record_new()
        this.events.fire(r)
      }
    }).call(this, e)
    var n = this.get_source_block()
    var r = e.get_source_block()
    if (n.rendered) {
      n.update_disabled()
      n.update_collapsed()
    }
    if (r.rendered) {
      r.update_disabled()
    }
    if (n.rendered && r.rendered) {
      if (this.type == c.CONNECTION_TYPE.NEXT_STATEMENT || this.type == c.CONNECTION_TYPE.PREVIOUS_STATEMENT) {
        r.render()
      } else {
        n.render()
      }
    }
  }
  e.prototype.disconnect_internal = function (e, t) {
    var n
    if (this.events.is_enabled()) {
      n = this.move_event_factory({
        block: t
      })
    }
    var /* [auto-meaningful-name] */this$target_connection = this.target_connection
    if (this$target_connection) {
      this$target_connection.target_connection = undefined
      this.target_connection = undefined
      t.set_parent(undefined)
      if (n) {
        n.record_new()
        this.events.fire(n)
      }
      if (t.visibility_for_undo && this.events.is_undoing()) {
        t.set_chunk_visibility(t.visibility_for_undo)
        t.update_chunk_visibility()
        t.visibility_for_undo = undefined
      }
      if (e.is_rendered()) {
        e.render()
      }
      if (t.is_rendered()) {
        t.update_disabled()
        t.render()
      }
    }
  }
  e.prototype.respawn_shadow = function () {
    var /* [auto-meaningful-name] */this$target_connection
    var t = this.get_source_block()
    var n = this.get_shadow_dom()
    if (t.get_workspace() && !this.is_connected() && n) {
      this.events.disable()
      var r = "color_picker" === n.getAttribute("type") ? this.xml.dom_to_block(n, t.get_workspace()) : this.xml.dom_to_block_headless(n, t.get_workspace())
      n.setAttribute("id", r.id)
      this.set_shadow_dom(n)
      if (r.output_connection) {
        this.connect(r.output_connection)
      } else {
        if (!r.previous_connection) {
          throw new Error("Child block does not have output or previous statement.")
        }
        this.connect(r.previous_connection)
      }
      this.xml.parse_fields(n, r)
      if (t.rendered) {
        r.init_svg()
        r.render()
      }
      if (this.type === c.CONNECTION_TYPE.INPUT_VALUE && this.source_block.is_collapsed()) {
        if (!(null === (this$target_connection = this.target_connection) || undefined === this$target_connection)) {
          this$target_connection.hide_all()
        }
        r.set_visible_as_child(false)
      }
      this.events.enable()
    }
  }
  e.prototype.neighbours_ = function (e) {
    var /* [auto-meaningful-name] */this$db_opposite
    return (null === (this$db_opposite = this.db_opposite) || undefined === this$db_opposite ? undefined : this$db_opposite.get_neighbours(this, e)) || []
  }
  e.prototype.bump_away_from = function (e) {
    if (this.source_block.is_stack_connectable() && e.get_source_block().is_stack_connectable()) {
      var t = this.source_block.get_workspace()
      if (!t || !t.is_dragging()) {
        var n = this.source_block.get_root_block()
        if (!n.is_in_flyout) {
          var r = false
          if (!n.is_movable()) {
            if (!(n = e.get_source_block().get_root_block()).is_movable()) {
              return
            }
            e = this
            r = true
          }
          var i = this.runtime_data.selected == n
          if (!i) {
            n.add_select()
          }
          var o = e.x_ + this.theme.blink_params.SNAP_RADIUS - this.x_
          var s = e.y_ + this.theme.blink_params.SNAP_RADIUS - this.y_
          if (r) {
            s = -s
          }
          if (n.RTL) {
            o = -o
          }
          n.move_by(a.vec2.fromValues(o, s))
          if (!i) {
            n.remove_select()
          }
        }
      }
    }
  }
  e.prototype.unhide_all = function () {
    this.set_hidden(false)
    var e = []
    if (this.type != c.CONNECTION_TYPE.INPUT_VALUE && this.type != c.CONNECTION_TYPE.NEXT_STATEMENT) {
      return e
    }
    var t = this.targetBlock()
    if (t) {
      var n = undefined
      if (t.is_collapsed()) {
        n = []
        if (t.output_connection) {
          n.push(t.output_connection)
        }
        if (t.next_connection) {
          n.push(t.next_connection)
        }
        if (t.previous_connection) {
          n.push(t.previous_connection)
        }
      } else {
        n = t.get_connections(true)
      }
      for (var r = 0; r < n.length; r++) {
        e.push.apply(e, n[r].unhide_all())
      }
      if (!e.length) {
        e[0] = t
      }
    }
    return e
  }
  e.prototype.hide_all = function () {
    var /* [auto-meaningful-name] */i$warning
    this.set_hidden(true)
    if (this.target_connection) {
      var t = this.targetBlock()
      if (undefined == t) {
        throw new Error("target_block should not be undefined")
      }
      for (var n = t.get_descendants(), r = 0; r < n.length; r++) {
        for (var i = n[r], o = i.get_connections(true), a = 0; a < o.length; a++) {
          o[a].set_hidden(true)
        }
        if (!(null === (i$warning = i.warning) || undefined === i$warning)) {
          i$warning.set_expanded(false)
        }
      }
    }
  }
  e.prototype.is_connection_allowed = function (e, t) {
    return !!e.source_block.is_stack_connectable() && !(this.distance_from(e) > t) && function (e) {
      if (e.get_source_block().is_insertion_marker()) {
        return false
      }
      if (!e.get_source_block().is_rendered()) {
        return false
      }
      if (f.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(e.get_source_block().type) && e.get_source_block().is_collapsed()) {
        return false
      }
      if (e.get_source_block().get_collapsed_surround_parent()) {
        return false
      }
      if ("procedures_2_defnoreturn" == e.source_block.type && e.target_connection && "procedures_2_stable_parameter" == e.target_connection.source_block.type) {
        return false
      }
      if (e.target_connection && e.target_connection.source_block.is_shadow() && "param" === e.target_connection.source_block.element_type) {
        return false
      }
      if (this.can_connect_with_reason(e) != c.CONNECTABLE_TYPE.CAN_CONNECT) {
        return false
      }
      switch (e.type) {
        case c.CONNECTION_TYPE.PREVIOUS_STATEMENT:
          return this.can_connect_to_previous(e)
        case c.CONNECTION_TYPE.OUTPUT_VALUE:
          return false
        case c.CONNECTION_TYPE.INPUT_VALUE:
          if ((t = e.targetBlock()) && e.target_connection && !t.is_movable() && !t.is_shadow()) {
            return false
          }
          break
        case c.CONNECTION_TYPE.NEXT_STATEMENT:
          var t
          if ((t = e.targetBlock()) && e.is_connected_to_non_insertion_marker() && !this.source_block.next_connection && !t.is_shadow() && t.next_connection) {
            return false
          }
          break
        default:
          throw new Error("Unknown connection type in is_connection_allowed")
      }
      if (-1 != this.runtime_data.dragging_connections.indexOf(e)) {
        return false
      }
      return true
    }.call(this, e)
  }
  e.prototype.distance_from = function (e) {
    var t = this.x_ - e.x_
    var n = this.y_ - e.y_
    return Math.sqrt(t * t + n * n)
  }
  e.prototype.get_shadow_dom = function () {
    if (this.shadow_dom) {
      if ("string" === typeof this.shadow_dom) {
        this.shadow_dom = this.utils.string_to_dom(this.shadow_dom)
      }
      return this.shadow_dom
    }
  }
  e.prototype.get_shadow_string = function () {
    return this.shadow_dom && "string" !== typeof this.shadow_dom ? this.xml.dom_to_text(this.shadow_dom) : this.shadow_dom
  }
  e.prototype.set_shadow_dom = function (e) {
    this.shadow_dom = e
  }
  e.prototype.set_shadow_from_string = function (e) {
    this.shadow_dom = e
  }
  e.prototype.connect = function (e, t) {
    if (undefined === t) {
      t = false
    }
    if (this.target_connection == e) {
      return false
    }
    var n = true
    try {
      this.check_connection(e)
    } catch (o) {
      if (!t) {
        console.error(o)
      }
      n = false
    }
    if (!n) {
      return false
    }
    var r = this.is_superior() ? this : e
    var i = this.is_superior() ? e : this
    r.connect_to_inferior(i)
    i.source_block.update_layer_colour()
    return true
  }
  e.prototype.on_check_changed = function () {
    if (this.is_connected() && this.target_connection && !this.check_type(this.target_connection)) {
      var e = this.is_superior() ? this.targetBlock() : this.source_block
      if (undefined == e) {
        throw new ReferenceError("Connection source block not found.")
      }
      e.unplug()
      this.source_block.bump_neighbours()
    }
  }
  e.prototype.get_output_shape = function () {
    return this.check_ && 1 == this.check_.length && "Boolean" == this.check_[0] ? c.OutputShape.HEXAGONAL : c.OutputShape.ROUND
  }
  e.prototype.get_xy = function () {
    return a.vec2.fromValues(this.x_, this.y_)
  }
  e.prototype.set_hidden = function (e) {
    this.hidden_ = e
    if (this.db_) {
      if (e && this.in_db) {
        this.db_.remove_connection(this)
      } else {
        if (!(e || this.in_db)) {
          this.db_.add_connection(this)
        }
      }
    }
  }
  e.prototype.get_source_block = function () {
    return this.source_block
  }
  e.prototype.dispose = function () {
    if (this.is_connected()) {
      throw new Error("Disconnect connection before disposing of it.")
    }
    if (this.in_db && this.db_) {
      this.db_.remove_connection(this)
    }
    delete this.db_
    delete this.db_opposite
  }
  e.prototype.is_connected_to_non_insertion_marker = function () {
    var e = this.targetBlock()
    return !!e && !e.is_insertion_marker()
  }
  e.prototype.disconnect = function () {
    var e
    var t
    var n
    var /* [auto-meaningful-name] */this$target_connection = this.target_connection
    if (this$target_connection) {
      if (this$target_connection.target_connection !== this) {
        console.error("Target connection not connected to source connection.")
      }
      if (this.is_superior()) {
        e = this.source_block
        t = this$target_connection.get_source_block()
        n = this
      } else {
        e = this$target_connection.get_source_block()
        t = this.source_block
        n = this$target_connection
      }
      this.disconnect_internal(e, t)
      n.respawn_shadow()
      t.update_layer_colour()
    }
  }
  e.prototype.set_check = function (e) {
    if (e) {
      this.check_ = (0, u.is_array)(e) ? e : [e]
      this.on_check_changed()
    } else {
      this.check_ = undefined
    }
    return this
  }
  e.prototype.is_connected = function () {
    return !!this.target_connection
  }
  e.prototype.check_type = function (e) {
    if (!this.check_ || !e.check_) {
      return true
    }
    for (var t = 0; t < this.check_.length; t++) {
      if (-1 != e.check_.indexOf(this.check_[t])) {
        return true
      }
    }
    return false
  }
  e.prototype.check_connection = function (e) {
    switch (this.can_connect_with_reason(e)) {
      case c.CONNECTABLE_TYPE.CAN_CONNECT:
        break
      case c.CONNECTABLE_TYPE.REASON_SELF_CONNECTION:
        throw new Error("Attempted to connect a block to itself.")
      case c.CONNECTABLE_TYPE.REASON_DIFFERENT_WORKSPACES:
        throw new Error("Blocks not on same workspace.")
      case c.CONNECTABLE_TYPE.REASON_WRONG_TYPE:
        throw new Error("Attempt to connect incompatible types.")
      case c.CONNECTABLE_TYPE.REASON_TARGET_NULL:
        throw new Error("Target connection is undefined.")
      case c.CONNECTABLE_TYPE.REASON_CHECKS_FAILED:
        var /* [auto-meaningful-name] */ConnectionChecksFailed$ = "Connection checks failed. "
        throw ConnectionChecksFailed$ += this + " expected " + this.check_ + ", found " + e.check_
      case c.CONNECTABLE_TYPE.REASON_SHADOW_PARENT:
        throw new Error("Connecting non-shadow to shadow block.")
      default:
        throw new Error("Unknown connection failure: this should never happen!")
    }
  }
  e.prototype.can_connect_with_reason = function (e) {
    return e ? (this.is_superior() ? (t = this.source_block, n = e.get_source_block()) : (n = this.source_block, t = e.get_source_block()), t && t === n ? c.CONNECTABLE_TYPE.REASON_SELF_CONNECTION : e.type !== c.OPPOSITE_TYPE[this.type] ? c.CONNECTABLE_TYPE.REASON_WRONG_TYPE : t && n && t.get_workspace() !== n.get_workspace() ? c.CONNECTABLE_TYPE.REASON_DIFFERENT_WORKSPACES : this.check_type(e) ? t.is_shadow() && !n.is_shadow() && "param_color" !== t.element_type ? c.CONNECTABLE_TYPE.REASON_SHADOW_PARENT : c.CONNECTABLE_TYPE.CAN_CONNECT : c.CONNECTABLE_TYPE.REASON_CHECKS_FAILED) : c.CONNECTABLE_TYPE.REASON_TARGET_NULL
    var t
    var n
  }
  e.prototype.is_superior = function () {
    return this.type == c.CONNECTION_TYPE.INPUT_VALUE || this.type == c.CONNECTION_TYPE.NEXT_STATEMENT
  }
  e.prototype.remove_shadow = function () {
    if (this.is_superior()) {
      this.set_shadow_dom(undefined)
      var e = this.targetBlock()
      if (e && e.is_shadow()) {
        this.events.disable()
        this.disconnect_internal(this.source_block, e)
        e.dispose()
        this.events.enable()
      }
    }
  };
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.runtime_data)], e.prototype, "runtime_data", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.utils)], e.prototype, "utils", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.xml)], e.prototype, "xml", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.theme)], e.prototype, "theme", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.workspace_db)], e.prototype, "workspace_db", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.MoveEvent)], e.prototype, "move_event_factory", undefined)
  return e = t = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.RenderedConnection = d
