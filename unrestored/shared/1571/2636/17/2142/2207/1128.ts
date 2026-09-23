/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1128
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.BlockRenderer = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 195 */"../../../123/195/index")
var o = require(/* 125 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 123 */"../../../123/index")
var s = function () {
  function e(e) {
    this.edge_width = this.theme.renderer.BLOCK_EDGE_WIDTH
    this.padding_l = this.theme.renderer.ROW_PADDING
    this.padding_r = this.theme.renderer.ROW_PADDING
    this.min_height = this.theme.renderer.MIN_HEIGHT
    this.CORNER_LEFT_TOP = "a " + this.theme.renderer.CORNER_RADIUS + " " + this.theme.renderer.CORNER_RADIUS + " 0 0 1 " + this.theme.renderer.CORNER_RADIUS + " -" + this.theme.renderer.CORNER_RADIUS
    this.CORNER_LEFT_BOTTOM = "a " + this.theme.renderer.CORNER_RADIUS + " " + this.theme.renderer.CORNER_RADIUS + " 0 0 1 -" + this.theme.renderer.CORNER_RADIUS + " -" + this.theme.renderer.CORNER_RADIUS
    if (e.is_render_notch()) {
      this.padding_l = this.theme.renderer.NTOCH_START_PADDING + this.theme.renderer.NOTCH_OFFSET_BETWEEN_PADDING_AND_ROUND_CORNER + this.theme.renderer.NOTCH_WIDTH
      this.padding_r = this.theme.renderer.ROW_PADDING + 8
    }
  }
  e.prototype.min_width = function (e) {
    return (e && e.is_render_notch() || e) && this.theme.renderer.MIN_WIDTH
  }
  e.prototype.render_path_start = function (e, t) {
    e.push("m 0," + this.theme.renderer.CORNER_RADIUS)
    e.push(this.CORNER_LEFT_TOP)
    if (t.is_render_notch() && undefined != t.previous_connection) {
      this.render_path_notch_top(e)
    }
  }
  e.prototype.render_path_notch_top = function (e) {
    e.push("H", "" + this.theme.renderer.NTOCH_START_PADDING)
    e.push(this.theme.renderer.NOTCH_PATH_LEFT)
  }
  e.prototype.render_path_notch_bottom = function (e) {
    e.push("H", "" + (this.theme.renderer.NTOCH_START_PADDING + this.theme.renderer.NOTCH_WIDTH + this.theme.renderer.NOTCH_OFFSET_BETWEEN_PADDING_AND_ROUND_CORNER))
    e.push(this.theme.renderer.NOTCH_PATH_RIGHT)
  }
  e.prototype.render_edge_shape_right = function (e, t, n, r, i) {
    if (undefined === n) {
      n = true
    }
    var o = i ? Math.min(i / 2, this.edge_width) : this.edge_width
    var /* [auto-meaningful-name] */t$height = t.height
    e.push("a " + o + " " + o + " 0 0 1 " + o + " " + o)
    if (0 == n) {
      e.push("V " + (t$height - this.min_height / 2))
    } else {
      if (r[1] > 2 * o && !i) {
        e.push("v " + (r[1] - 2 * o))
      }
      if (i) {
        e.push("v " + (i - 2 * o))
      }
    }
    e.push("a " + o + " " + o + " 0 0 1 -" + o + " " + o)
  }
  e.prototype.render_edge_shape_collapsed_right = function (e, t) {
    var /* [auto-meaningful-name] */t$height = t.height
    e.push(this.theme.renderer.COLLAPSED_PATH)
    e.push("v " + (t$height - this.min_height + t.height / 2))
  }
  e.prototype.render_edge_shape_group_right = function (e, t) {
    var n = t.height - 5.5 - 3.5
    e.push("h " + this.theme.renderer.GROUP_RIGHT_EDGE_WIDTH + "\n      " + this.theme.renderer.GROUP_TOP_RIGHT_PATH + "\n      l -8.6 " + n + "\n      " + this.theme.renderer.GROUP_BOTTOM_RIGHT_PATH)
  }
  e.prototype.render_path_end = function (e, t) {
    var n = t.is_render_notch() ? this.theme.renderer.CORNER_RADIUS : this.theme.renderer.CORNER_RADIUS_END_BLOCK_WITHOUD_NOTCH
    if (t.is_ending_block()) {
      e.push("H", n.toString())
      return void e.push("a", n + "," + n + " 0 0,1 -" + n + ",-" + n)
    }
    e.push("H " + this.theme.renderer.CORNER_RADIUS)
    e.push(this.CORNER_LEFT_BOTTOM)
  }
  e.prototype.get_decoration_path = function (e, t, n, r, i) {
    var o = r - 28 * e
    var s = i ? 12 : 8
    return (0, a.create_svg_element)("path", {
      d: "\n        m " + (this.theme.renderer.STATEMENT_MIN_WIDTH + 4 * e) + " " + (s + 8 * e) + ",\n        h " + o + ",\n        v 20, a 20 20 0 0 1 -20 20,\n        h -" + (o - 22) + ",\n        a 2 2 0 0 1 -2 -2, z",
      fill: t.toString(),
      stroke: n.toString(),
      class: "decoration_for_collapsed_blocks"
    })
  }
  e.prototype.render_group_decoration_blocks = function (e) {
    if (!e.svg_path) {
      return 0
    }
    e.decoration_block_paths.forEach(a.remove_node)
    e.decoration_block_paths.length = 0
    var /* [auto-meaningful-name] */e$origin_block = e.origin_block
    var n = e$origin_block.get_full_next_block()
    var r = Math.min(this.theme.renderer.EXECUTION_GROUP_DECORATION_WIDTH, e.width - this.theme.renderer.STATEMENT_MIN_WIDTH - this.theme.renderer.EXECUTION_GROUP_DECORATION_RIGHT_MARGIN)
    if (n) {
      var i = this.get_decoration_path(1, n.get_original_colour(), n.get_border_colour(), r, false)
      e.decoration_block_paths.unshift(i)
      e.svg_group.insertBefore(i, e.svg_path)
    }
    var o = this.get_decoration_path(0, e$origin_block.get_original_colour(), e$origin_block.get_border_colour(), r, !n)
    e.decoration_block_paths.unshift(o)
    e.svg_group.insertBefore(o, e.svg_path)
    return 0
  }
  e.prototype.render_group_bottom = function (e) {
    e.push("H " + (this.theme.renderer.STATEMENT_MIN_WIDTH + this.theme.renderer.C_BLOCK_INNER_CORNOR_RADIUS))
    e.push(this.theme.renderer.C_BLOCK_INNER_CORNOR_LEFT_TOP)
    e.push("v " + (this.theme.renderer.INPUT_MIN_HEIGHT_STATEMENT - 2 * this.theme.renderer.C_BLOCK_INNER_CORNOR_RADIUS))
    e.push(this.theme.renderer.C_BLOCK_INNER_CORNOR_LEFT_BOTTOM)
    e.push(this.theme.renderer.GROUP_EXTRA_ROW_RIGHT)
  }
  e.prototype.get_field_padding_y = function () {
    return this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_FIELD
  }
  e.prototype.get_block_padding_y = function (e) {
    return e !== i.InputType.VALUE ? this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_STATEMENT_BLOCK : this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_VALUE_BLOCK
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], e.prototype, "theme", undefined)
  return e
}()
exports.BlockRenderer = s
