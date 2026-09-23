/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2173
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.InsertionMarkerManager = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 195 */"../../123/195/index")
var s = function () {
  function e() {
    this.top_block = undefined
    this._workspace = undefined
    this.last_on_stack = undefined
    this.last_marker = undefined
    this.closest_connection = undefined
    this.first_marker = undefined
    this.local_connection = undefined
    this.would_delete_block_ = false
    this.marker_connection = undefined
    this.highlighting_block = false
    this.highlighted_block = undefined
    this._available_connections = []
  }
  e.prototype.init = function (e) {
    this.runtime_data.selected = e
    this.top_block = e
    this._workspace = e.get_workspace()
    if (!this.top_block.output_connection) {
      this.first_marker = this.create_marker_block(this.top_block)
    }
    this._available_connections = this._init_available_connections(e)
  }
  e.prototype.create_marker_block = function (e) {
    var t
    var /* [auto-meaningful-name] */e$type = e.type
    this.events.disable()
    try {
      if (undefined == this._workspace) {
        throw new ReferenceError("Trying to create marker before init the insertion marker manager.")
      }
      (t = this.block_factory({
        prototype_name: e$type,
        workspace: this._workspace,
        is_insertion_marker: true
      })).set_insertion_marker(true)
      if (0 === t.inputList.length) {
        t.appendDummyInput()
      }
      t.init_svg()
    } finally {
      this.events.enable()
    }
    return t
  }
  e.prototype.would_delete_block = function () {
    return this.would_delete_block_
  }
  e.prototype._init_available_connections = function (e) {
    var t = e.get_connections(false)
    var n = e.last_connection_in_stack()
    if (n) {
      t.push(n)
      this.last_on_stack = n
      this.last_marker = this.create_marker_block(n.get_source_block())
    }
    return t.filter(function (e) {
      return e.in_db
    })
  }
  e.prototype.get_start_radius = function () {
    return this.closest_connection && this.local_connection ? this.theme.blink_params.CONNECTING_SNAP_RADIUS : this.theme.blink_params.SNAP_RADIUS
  }
  e.prototype._get_candidate = function (e) {
    for (var t = this.get_start_radius(), n = undefined, r = undefined, i = 0; i < this._available_connections.length; i++) {
      var o = this._available_connections[i]
      var a = o.closest(t, e)
      if (a.connection) {
        n = a.connection
        r = o
        t = a.radius
      }
    }
    return {
      closest: n,
      local: r,
      radius: t
    }
  }
  e.prototype.should_delete = function (e, t) {
    if (undefined == this.top_block) {
      throw new ReferenceError("Deleting block not found.")
    }
    var n = e && !!e.closest && t !== a.DeleteArea.DELETE_AREA_TOOLBOX
    return !!t && !this.top_block.get_parent() && this.top_block.is_deletable() && !n
  }
  e.prototype.should_update_previews = function (e, t) {
    var /* [auto-meaningful-name] */e$local = e.local
    var /* [auto-meaningful-name] */e$closest = e.closest
    var /* [auto-meaningful-name] */e$radius = e.radius
    if (!e$local || !e$closest) {
      return !(!this.local_connection || !this.closest_connection)
    }
    if (e$local.type === a.CONNECTION_TYPE.OUTPUT_VALUE) {
      return true
    }
    if (this.local_connection && this.closest_connection) {
      if (this.closest_connection == e$closest) {
        return false
      }
      var o = this.local_connection.get_xy()[0] + t[0] - this.closest_connection.get_xy()[0]
      var s = this.local_connection.get_xy()[1] + t[1] - this.closest_connection.get_xy()[1]
      var c = Math.sqrt(o * o + s * s)
      return !(e$closest && e$radius > c - this.theme.blink_params.CURRENT_CONNECTION_PREFERENCE)
    }
    return !this.local_connection && !this.closest_connection || (console.error("Only one of localConnection_ and closestConnection_ was set."), console.error("Returning true from shouldUpdatePreviews, but it's not clear why."), true)
  }
  e.prototype.unhighlight_block = function () {
    var /* [auto-meaningful-name] */this$closest_connection = this.closest_connection
    var /* [auto-meaningful-name] */this$highlighted_block = this.highlighted_block
    if (undefined == this$closest_connection || undefined == this$highlighted_block) {
      throw new ReferenceError("Connection not found for unhighlight.")
    }
    this$highlighted_block.highlight_for_replacement(false)
    this.highlighted_block = undefined
    this.highlighting_block = false
  }
  e.prototype.disconnect_marker = function () {
    if (this.marker_connection) {
      var /* [auto-meaningful-name] */this$marker_connection = this.marker_connection
      var t = this$marker_connection.get_source_block()
      var /* [auto-meaningful-name] */t$next_connection = t.next_connection
      var /* [auto-meaningful-name] */t$previous_connection = t.previous_connection
      if (this$marker_connection != t$next_connection || t$previous_connection && t$previous_connection.get_targe_connection()) {
        if (this$marker_connection.type == a.CONNECTION_TYPE.NEXT_STATEMENT && this$marker_connection != t$next_connection) {
          var i = this$marker_connection.get_targe_connection()
          if (undefined == i) {
            throw new ReferenceError("Connection not found when disconnect marker.")
          }
          i.get_source_block().unplug(false)
          var o = t$previous_connection ? t$previous_connection.get_targe_connection() : undefined
          t.unplug(true)
          if (o) {
            o.connect(i)
          }
        } else {
          t.unplug(true)
        }
      } else {
        var s = this$marker_connection.targetBlock()
        if (undefined == s) {
          throw new ReferenceError("Target block not found when disconnect marger.")
        }
        s.unplug(false)
      }
      if (this$marker_connection.get_targe_connection()) {
        throw new Error("markerConnection_ still connected at the end of disconnectInsertionMarker")
      }
      this.marker_connection = undefined
      var c = t.get_svg_root()
      if (undefined != c) {
        c.setAttribute("visibility", "hidden")
      }
    }
  }
  e.prototype.hide_preview = function () {
    if (this.highlighting_block) {
      this.unhighlight_block()
    } else {
      if (this.marker_connection) {
        this.disconnect_marker()
      }
    }
  }
  e.prototype.maybe_hide_preview = function (e) {
    if (!e.closest) {
      this.hide_preview()
    }
    var t = this.closest_connection && this.local_connection
    var n = this.closest_connection != e.closest
    var r = this.local_connection != e.local
    if (t && (n || r || this.would_delete_block_)) {
      this.hide_preview()
    }
    this.marker_connection = undefined
    this.closest_connection = undefined
    this.local_connection = undefined
  }
  e.prototype.should_replace = function () {
    var /* [auto-meaningful-name] */this$closest_connection = this.closest_connection
    var /* [auto-meaningful-name] */this$local_connection = this.local_connection
    if (undefined == this$local_connection) {
      throw new ReferenceError("Local connection not found when trying replace/insert block.")
    }
    if (undefined == this.top_block) {
      throw new ReferenceError("Block not found when trying replace/insert block.")
    }
    return this$local_connection.type == a.CONNECTION_TYPE.OUTPUT_VALUE || this$local_connection != this$local_connection.get_source_block().get_first_statement_connection() && !(this.top_block.next_connection || this$local_connection.type != a.CONNECTION_TYPE.PREVIOUS_STATEMENT || undefined == this$closest_connection || !this$closest_connection.is_connected())
  }
  e.prototype.highlight_block = function () {
    var /* [auto-meaningful-name] */this$closest_connection = this.closest_connection
    var /* [auto-meaningful-name] */this$local_connection = this.local_connection
    if (undefined != this$closest_connection && undefined != this$local_connection) {
      var n = this$closest_connection.targetBlock()
      if (n) {
        this.highlighted_block = n
        n.highlight_for_replacement(true)
      }
      this.highlighting_block = true
    }
  }
  e.prototype.connect_marker = function () {
    var /* [auto-meaningful-name] */this$local_connection = this.local_connection
    var /* [auto-meaningful-name] */this$closest_connection = this.closest_connection
    if (undefined != this$closest_connection) {
      var n = this.last_on_stack && this$local_connection == this.last_on_stack ? this.last_marker : this.first_marker
      if (undefined != n && undefined != this$local_connection) {
        var r = n.get_matching_connection(this$local_connection.get_source_block(), this$local_connection)
        if (undefined != r) {
          if (r == this.marker_connection) {
            throw new Error("Made it to connect_marker even though the marker isn't changing")
          }
          n.render()
          var i = n.get_svg_root()
          if (undefined != i) {
            i.setAttribute("visibility", "visible")
          }
          n.position_new_block(n, r, this$closest_connection)
          r.connect(this$closest_connection)
          this.marker_connection = r
        }
      }
    }
  }
  e.prototype.show_preview = function () {
    if (this.should_replace()) {
      this.highlight_block()
    } else {
      this.connect_marker()
    }
  }
  e.prototype.maybe_show_preview = function (e) {
    if (!this.would_delete_block_) {
      var /* [auto-meaningful-name] */e$closest = e.closest
      var /* [auto-meaningful-name] */e$local = e.local
      if (e$closest) {
        if (!(e$closest == this.closest_connection || e$closest.source_block.is_insertion_marker())) {
          this.closest_connection = e$closest
          this.local_connection = e$local
          this.show_preview()
        }
      }
    }
  }
  e.prototype.update = function (e, t) {
    var n = this._get_candidate(e)
    this.would_delete_block_ = this.should_delete(n, t)
    if (this.would_delete_block_ || this.should_update_previews(n, e)) {
      this.events.disable()
      this.maybe_hide_preview(n)
      this.maybe_show_preview(n)
      this.events.enable()
    }
  }
  e.prototype.apply_connections = function () {
    var /* [auto-meaningful-name] */this$highlighted_block$output_connection
    var /* [auto-meaningful-name] */this$highlighted_block$previous_connection
    if (undefined == this.top_block) {
      throw new ReferenceError("Top block not found when applying connections.")
    }
    if (this.highlighting_block && this.highlighted_block) {
      this.closest_connection = (null === (this$highlighted_block$output_connection = this.highlighted_block.output_connection) || undefined === this$highlighted_block$output_connection ? undefined : this$highlighted_block$output_connection.target_connection) || (null === (this$highlighted_block$previous_connection = this.highlighted_block.previous_connection) || undefined === this$highlighted_block$previous_connection ? undefined : this$highlighted_block$previous_connection.target_connection)
    } else {
      if (this.marker_connection) {
        this.closest_connection = this.marker_connection.target_connection
      }
    }
    if (this.closest_connection) {
      this.events.disable()
      this.hide_preview()
      this.events.enable()
      if (this.local_connection) {
        this.local_connection.connect(this.closest_connection)
      }
      if (this.top_block.is_rendered()) {
        if (this.local_connection) {
          var n = this.local_connection.is_superior() ? this.closest_connection : this.local_connection
          this.block_animations.connection_ui_effect(n.get_source_block())
        }
        this.top_block.get_root_block().bring_to_front()
      }
      return true
    }
    return false
  }
  e.prototype.dispose = function () {
    this.top_block = undefined
    this._workspace = undefined
    this._available_connections.length = 0
    this.closest_connection = undefined
    this.local_connection = undefined
    this.events.disable()
    try {
      if (this.first_marker) {
        this.first_marker.dispose()
        this.first_marker = undefined
      }
      if (this.last_marker) {
        this.last_marker.dispose()
        this.last_marker = undefined
      }
    } finally {
      this.events.enable()
    }
    this.highlighted_block = undefined
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.block_animations)], e.prototype, "block_animations", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.runtime_data)], e.prototype, "runtime_data", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], e.prototype, "theme", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.BlockSvg)], e.prototype, "block_factory", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.InsertionMarkerManager = s
