/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2214
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Options = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 214 */"../../1022/214")
var a = require(/* 478 */"../../123/478")
var s = require(/* 644 */"../../../../../../src/shared/packages/@crc/blink/src/core/di/container")
var c = require(/* 646 */"../../../../../../src/shared/packages/@crc/blink/src/core/di/di_symbols")
var u = require(/* 195 */"../../123/195/index")
var l = function () {
  function e(e) {
    this.disabledPatternId = ""
    this.embossFilterId = ""
    this.pinch = undefined
    this.notch = undefined
    this.degrade_translate = undefined
    this.tooltip = undefined
    this.timer = undefined
    this.toolbox_background_class = undefined
    this.in_flyout = false
    var t
    var n
    var r
    var i
    var o
    var a = !!e.readOnly
    var l = false
    if (a) {
      l = false
      t = false
      n = false
      r = false
      i = false
    } else {
      if (e.toolbox) {
        if ("string" == typeof e.toolbox) {
          o = (0, s.get_instance)().get(c.BINDING.xml).text_to_dom(e.toolbox)
        } else {
          o = e.toolbox
        }
        l = o instanceof Element ? !(!o || !o.getElementsByTagName("category").length) : o.length > 0
      }
      if (undefined == (t = e.collapse)) {
        t = l
      }
      if (undefined == (n = e.comments)) {
        n = l
      }
      if (undefined == (r = e.disable)) {
        r = l
      }
      i = undefined == e.sounds || e.sounds
    }
    var f
    var d
    var h
    var p
    var _
    var A = !!e.rtl
    var /* [auto-meaningful-name] */e$horizontalLayout = e.horizontalLayout
    if (undefined == e$horizontalLayout) {
      e$horizontalLayout = false
    }
    if ("number" === typeof e.toolboxPosition) {
      f = e.toolboxPosition
    } else {
      var v = "end" !== e.toolboxPosition
      f = e$horizontalLayout ? v ? u.TOOLBOX_POSITION.TOP : u.TOOLBOX_POSITION.BOTTOM : v === A ? u.TOOLBOX_POSITION.RIGHT : u.TOOLBOX_POSITION.LEFT
    }
    if (undefined !== e.scrollbars) {
      d = e.scrollbars
      h = e.scrollbars
      p = e.scrollbars
      _ = e.scrollbars
    } else {
      if (undefined == (d = e.scrollable ? e.scrollable.workspace : undefined)) {
        d = l
      }
      if (undefined == (h = e.scrollable ? e.scrollable.flyout : undefined)) {
        h = l
      }
      if (undefined == (p = e.show_scrollbars ? e.show_scrollbars.workspace : undefined)) {
        p = l
      }
      if (undefined == (_ = e.show_scrollbars ? e.show_scrollbars.flyout : undefined)) {
        _ = l
      }
    }
    var /* [auto-meaningful-name] */e$css = e.css
    if (undefined == e$css) {
      e$css = true
    }
    var y
    var b
    var /* [auto-meaningful-name] */Https__static$codemao$cn_blockly_media_ = "https://static.codemao.cn/blockly/media/"
    if (e.media) {
      Https__static$codemao$cn_blockly_media_ = e.media
    }
    y = undefined == e.oneBasedIndex || !!e.oneBasedIndex
    b = undefined != e.blockly_type ? e.blockly_type : "default"
    this.RTL = A
    this.oneBasedIndex = y
    this.collapse = t
    this.comments = n
    this.comment_type = e.comment_type || "normal"
    this.disable = r
    this.readOnly = a
    this.maxBlocks = e.maxBlocks || 1 / 0
    this.pathToMedia = Https__static$codemao$cn_blockly_media_
    this.has_categories = l
    this.ws_scrollable = d
    this.ws_show_scrollbars = p
    this.flyout_scrollable = h
    this.flyout_show_scrollbars = _
    this.hasSounds = i
    this.hasCss = e$css
    this.horizontalLayout = e$horizontalLayout
    this.toolbox_config = o
    this.gridOptions = this.parse_grid_options(e)
    this.zoomOptions = this.parse_zoom_options(e)
    this.toolboxPosition = f
    this.blockly_type = b
    this.connection_effect = this.parse_connection_effect_options(e)
    this.field_max_length = e.field_max_length
    this.pinch = e.pinch
    this.notch = e.notch
    this.degrade_translate = e.degrade_translate
    this.tooltip = e.tooltip
    this.timer = e.timer
    this.toolbox_background_class = e.toolbox_background_class
    this.id = e.id
    this.flyout = this.parse_flyout_options(e.flyout)
    this.custom_svg_defs = e.custom_svg_defs
    this.delete_area_margin = this.parse_delete_area_margin(e, f)
    this.workspace = {
      content_margin: e.workspace && e.workspace.content_margin || "50%"
    }
    this.theme = "string" === typeof e.theme ? e.theme : "light"
    this.dropdown = this.parse_dropdown_options(e)
    this.delete_area = e.delete_area || "default"
    this.block_group = this.parse_block_group_options(e)
    this.auto_resize = this.parse_auto_resize_options(e)
    this.context_menu = this.parse_context_menu_options(e)
  }
  e.prototype.parse_zoom_options = function (e) {
    var t = e.zoom || {}
    return {
      controls: undefined != t.controls && t.controls,
      wheel: undefined != t.wheel && t.wheel,
      startScale: undefined == t.startScale ? 1 : t.startScale,
      maxScale: undefined == t.maxScale ? 3 : t.maxScale,
      minScale: undefined == t.minScale ? .3 : t.minScale,
      scaleSpeed: undefined == t.scaleSpeed ? 1.2 : t.scaleSpeed
    }
  }
  e.prototype.parse_grid_options = function (e) {
    var t = e.grid || {}
    return {
      spacing: t.spacing || 35,
      step: undefined === t.step ? 4 : t.step,
      snap: !!t.spacing && !!t.snap
    }
  }
  e.prototype.parse_connection_effect_options = function (e) {
    if (e.connection_effect) {
      var t = e.connection_effect || {}
      return {
        type: t.type,
        color: t.color
      }
    }
  }
  e.prototype.parse_dropdown_options = function (e) {
    var t = e.dropdown && e.dropdown.menu || {}
    var n = e.dropdown || {}
    return {
      padding: "number" === typeof n.padding ? n.padding : 6,
      arrow_type: n.arrow_type || "line",
      menu: {
        align: t.align || (a.is.mobile() || a.is.ipad() ? "center" : "first"),
        scalable: "boolean" != typeof t.scalable || t.scalable
      }
    }
  }
  e.prototype.parse_delete_area_margin = function (e, t) {
    var /* [auto-meaningful-name] */e$delete_area_margin = e.delete_area_margin
    return Array.isArray(e$delete_area_margin) ? e$delete_area_margin : ("undefined" === typeof e$delete_area_margin && (e$delete_area_margin = 1e7), t === u.TOOLBOX_POSITION.LEFT ? [e$delete_area_margin, 0, e$delete_area_margin, e$delete_area_margin] : t === u.TOOLBOX_POSITION.TOP ? [e$delete_area_margin, e$delete_area_margin, 0, e$delete_area_margin] : t === u.TOOLBOX_POSITION.RIGHT ? [e$delete_area_margin, e$delete_area_margin, e$delete_area_margin, 0] : [0, e$delete_area_margin, e$delete_area_margin, e$delete_area_margin])
  }
  e.prototype.parse_flyout_options = function (e) {
    var t = {
      auto_close: true,
      fixed_width: undefined,
      min_width: undefined,
      max_width: undefined,
      corner_radius: 0,
      padding: {
        top: 15,
        bottom: 20,
        left: 30,
        right: 30
      },
      blocks: {
        default_gap: 16,
        head_block_offset: [0, 0]
      }
    }
    return (0, o.parse_attr_deep)(t, e)
  }
  e.prototype.parse_block_group_options = function (e) {
    if (e.block_group) {
      return true === e.block_group ? {} : e.block_group
    }
  }
  e.prototype.parse_auto_resize_options = function (e) {
    if (e.auto_resize) {
      return true === e.auto_resize ? {
        delay: 0
      } : e.auto_resize
    }
  }
  e.prototype.parse_context_menu_options = function (e) {
    var /* [auto-meaningful-name] */e$context_menu
    var /* [auto-meaningful-name] */e$context_menu1
    var r = [u.WorkspaceOptionType.PASTE, u.WorkspaceOptionType.CLEAN_UP, u.WorkspaceOptionType.DELETE_ALL, u.WorkspaceOptionType.COPY_ALL, u.WorkspaceOptionType.GLOBAL_COMMENT]
    var i = [u.BlockOptionType.COPY_AND_PASTE, u.BlockOptionType.COPY, u.BlockOptionType.ADD_COMMENT, u.BlockOptionType.COLLAPSE, u.BlockOptionType.DELETE, u.BlockOptionType.SET_GROUP]
    return {
      workspace: (null === (e$context_menu = e.context_menu) || undefined === e$context_menu ? undefined : e$context_menu.workspace) || r,
      block: (null === (e$context_menu1 = e.context_menu) || undefined === e$context_menu1 ? undefined : e$context_menu1.block) || i
    }
  }
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Options = l
