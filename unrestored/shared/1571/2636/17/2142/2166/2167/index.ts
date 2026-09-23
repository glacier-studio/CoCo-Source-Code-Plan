/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2167
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.onKeyDown_ = exports.Inject = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 258 */"@kitten-team/gl-matrix")
var o = require(/* 125 */"../../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 195 */"../../../../123/195/index")
var s = require(/* 763 */"../../2169/763")
var c = require(/* 1351 */"../../2188/1351")
var u = require(/* 214 */"../../../../1022/214")
var l = (0, r.__importStar)(require(/* 123 */"../../../../123/index"))
var f = require(/* 2168 */"./2168")
var d = require(/* 499 */"../../../499/index")
var h = require(/* 648 */"../../../../1205/2609/648")
exports.Inject = function (e, t) {
  if ((0, u.is_string)(e)) {
    e = document.getElementById(e) || document.querySelector(e) || undefined
  }
  if ((0, u.is_nil)(e) || !l.contains(document, e)) {
    throw new ReferenceError("Error: container is not in current document.")
  }
  var n = (0, o.get_instance)()
  var r = n.get(o.BINDING.Options)(t || {})
  var s = l.create_dom("div", "injectionDiv")
  s.classList.add(r.theme)
  e.appendChild(s)
  var c = _.call(this, s, r)
  var d = function (e, t, n, r, s) {
    t.parentWorkspace = undefined
    var c = (0, o.get_instance)()
    var u = c.get(o.BINDING.WorkspaceSvg)(t, n, r, s)
    if (undefined != t.zoomOptions.startScale) {
      u.set_scale(t.zoomOptions.startScale)
    }
    e.appendChild(u.create_dom("blocklyMainBackground"))
    if (!t.has_categories && t.toolbox_config) {
      var d = u.add_flyout("svg")
      if (undefined == d) {
        throw new Error("Add flyout failed.")
      }
      l.insert_after(d, e)
    }
    var p = c.get(o.BINDING.Blink)
    u.translate(0, 0)
    p.mainWorkspace = u
    if (!t.readOnly && !t.ws_scrollable) {
      u.add_change_listener(function (e) {
        var n = e.type === a.BlockEventType.MOVE || e.type === a.BlockEventType.CREATE && "flyout:drag" !== e.source || e.type === a.UIEventType.FLYOUT_SHOW
        if (!u.is_dragging() && n) {
          var r = u.get_metrics()
          var o = r.viewLeft + r.absoluteLeft - u.offset[0]
          var s = r.viewTop + r.absoluteTop - u.offset[1]
          var c = r.contentTop < s
          var l = r.contentLeft < (t.RTL ? r.viewLeft : o)
          var f = r.contentTop + r.contentHeight > r.viewHeight + s
          var d = r.contentLeft + r.contentWidth > (t.RTL ? r.viewWidth : r.viewWidth + o)
          if (c || l || f || d) {
            for (var h = u.get_top_elements(false), p = 0; p < h.length; p++) {
              var _ = h[p]
              var A = _.get_relative_to_surface_xy()
              var g = _.get_height_width()
              var v = s - A[1]
              if (v > 0) {
                _.move_by(i.vec2.fromValues(0, v + 25))
              }
              var m = s + r.viewHeight - A[1] - g.height
              if (m < 0) {
                _.move_by(i.vec2.fromValues(0, m))
              }
              var y = o - A[0] - (t.RTL ? g.width : 0)
              if (y > 0) {
                _.move_by(i.vec2.fromValues(y + 25, 0))
              }
              var b = o + r.viewWidth - A[0] - (t.RTL ? 0 : g.width)
              if (b < 0) {
                _.move_by(i.vec2.fromValues(b, 0))
              }
            }
          }
        }
      })
    }
    if ("simplified" === t.comment_type) {
      u.add_change_listener(function (e) {
        if (e.type === a.BlockEventType.MOVE) {
          var t = u.get_block_by_id(e.get_block_id())
          if (!t) {
            return
          }
          var n = e.get_old_loc()
          var r = e.get_new_loc()
          if (n.parent_id) {
            var i = (0, h.get_nested_blocks_with_comment)(t)[0]
            if (i && i.comment && i.rendered) {
              i.comment.init_svg(true)
            }
            var o = u.get_block_by_id(n.parent_id)
            if (!o) {
              return
            }
            var s = (0, h.get_outer_block)(o)
            if ((c = (0, h.get_nested_blocks_with_comment)(s)[0]) && c.comment && c.rendered) {
              c.comment.init_svg(true)
            }
          }
          if (r.parent_id) {
            var c
            s = (0, h.get_outer_block)(t)
            if ((c = (0, h.get_nested_blocks_with_comment)(s)[0]) && c.comment && c.rendered) {
              c.comment.init_svg(true)
            }
          }
        }
      })
    }
    p.utils.svg_resize(u)
    p.widget_div.create_dom()
    if (t.tooltip) {
      p.tooltip.create_dom()
    }
    if (t.pinch) {
      p.runtime_data.register_finger_events()
    } else {
      p.runtime_data.cancel_gesture_when_multi_touch()
    }
    if (t.degrade_translate) {
      u.degrade_translate = t.degrade_translate
    }
    if (t.timer) {
      p.timer = new f.TimerHandler()
    }
    return u
  }(c, r, n.get(o.BINDING.BlockDragSurfaceSvg)(s), n.get(o.BINDING.WorkspaceDragSurfaceSvg)(s, c), s)
  A.call(this, d)
  this.mainWorkspace = d
  var g = n.get(o.BINDING.utils)
  g.svg_resize(d)
  if (r.auto_resize) {
    p((0, u.debounce)(function () {
      return g.svg_resize(d)
    }, r.auto_resize.delay), e)
  }
  return d
}
var p = function (e, t) {
  return (0, r.__awaiter)(undefined, undefined, undefined, function () {
    var i
    return (0, r.__generator)(this, function (o) {
      switch (o.label) {
        case 0:
          return [
            4, Promise.resolve().then(function () {
              return (0, r.__importStar)(require(/* 462 */"resize-observer-polyfill"))
            })
          ]
        case 1:
          return [4, o.sent().default]
        case 2:
          i = o.sent()
          new i(e).observe(t)
          return [2]
      }
    })
  })
}
function _(e, t) {
  var n = (0, o.get_instance)()
  e.setAttribute("dir", "LTR")
  n.get(o.BINDING.css).inject(t.hasCss, t.pathToMedia)
  var r = l.create_svg_element("svg", {
    class: "blocklySvg"
  }, e)
  var i = l.create_svg_element("defs", {}, r)
  var a = String(Math.random()).substring(2)
  if (!t.readOnly) {
    (0, s.inject_extra_filters)(i)
  }
  (0, s.inject_comment_filters)(i);
  (0, c.inject_icon_symbols)(i)
  var f = l.create_svg_element("filter", {
    id: "blur-1px"
  }, i)
  l.create_svg_element("feGaussianBlur", {
    in: "SourceGraphic",
    stdDeviation: "1"
  }, f)
  var d = l.create_svg_element("filter", {
    id: "hiblur",
    "color-interpolation-filters": "sRGB"
  }, i)
  l.create_svg_element("feColorMatrix", {
    type: "luminanceToAlpha",
    in: "SourceGraphic",
    result: "lumMap"
  }, d)
  var h = l.create_svg_element("feComponentTransfer", {
    in: "lumMap",
    result: "highlightMask"
  }, d)
  l.create_svg_element("feFuncA", {
    type: "discrete",
    tableValues: "0 0 0 0 0 0 0 1"
  }, h)
  l.create_svg_element("feComposite", {
    operator: "in",
    in: "SourceGraphic",
    in2: "highlightMask",
    result: "highlights"
  }, d)
  l.create_svg_element("feGaussianBlur", {
    in: "highlights",
    stdDeviation: "3",
    result: "highBlur"
  }, d)
  l.create_svg_element("feComposite", {
    operator: "over",
    in: "highBlur",
    in2: "SourceGraphic",
    result: "final"
  }, d)
  var p = l.create_svg_element("pattern", {
    id: "transparentPattern",
    x: 0,
    y: 0,
    width: 12,
    height: 12,
    patternUnits: "userSpaceOnUse"
  }, i)
  l.create_svg_element("rect", {
    x: 0,
    y: 0,
    width: 7,
    height: 7,
    style: "fill:#FFFFFF"
  }, p)
  l.create_svg_element("rect", {
    x: 6,
    y: 0,
    width: 7,
    height: 7,
    style: "fill:#EFEFEF"
  }, p)
  l.create_svg_element("rect", {
    x: 0,
    y: 6,
    width: 7,
    height: 7,
    style: "fill:#EFEFEF"
  }, p)
  l.create_svg_element("rect", {
    x: 6,
    y: 6,
    width: 7,
    height: 7,
    style: "fill:#FFFFFF"
  }, p)
  var _ = l.create_svg_element("filter", {
    id: "blocklyEmbossFilter" + a
  }, i)
  l.create_svg_element("feGaussianBlur", {
    in: "SourceAlpha",
    stdDeviation: 1,
    result: "blur"
  }, _)
  var A = l.create_svg_element("feSpecularLighting", {
    in: "blur",
    surfaceScale: 1,
    specularConstant: .5,
    specularExponent: 10,
    "lighting-color": "white",
    result: "specOut"
  }, _)
  l.create_svg_element("fePointLight", {
    x: -5e3,
    y: -1e4,
    z: 2e4
  }, A)
  l.create_svg_element("feComposite", {
    in: "specOut",
    in2: "SourceAlpha",
    operator: "in",
    result: "specOut"
  }, _)
  l.create_svg_element("feComposite", {
    in: "SourceGraphic",
    in2: "specOut",
    operator: "arithmetic",
    k1: 0,
    k2: 1,
    k3: 1,
    k4: 0
  }, _)
  t.embossFilterId = _.id
  var g = l.create_svg_element("pattern", {
    id: "blocklyDisabledPattern" + a,
    patternUnits: "userSpaceOnUse",
    width: 12,
    height: 12
  }, i)
  l.create_svg_element("rect", {
    width: 12,
    height: 12,
    fill: this.theme.disabled_color.fill
  }, g)
  t.disabledPatternId = g.id
  t.svg_defs = i
  t.svg_rnd = a
  if (t.custom_svg_defs) {
    t.custom_svg_defs.forEach(function (e) {
      i.appendChild((0, u.is_string)(e) ? l.parse_to_SVG(e) : e)
    })
  }
  return r
}
function A(e) {
  var t = (0, o.get_instance)()
  var n = t.get(o.BINDING.events)
  var r = t.get(o.BINDING.utils)
  var i = e.get_parent_svg()
  if (undefined != i && i.parentNode) {
    n.bind_event_with_checks(i.parentNode, "contextmenu", undefined, function (e) {
      if (!r.is_target_input(e)) {
        e.preventDefault()
      }
    })
  }
  var s = n.bind_event_with_checks(window, "resize", undefined, function () {
    r.hide_chaff(true)
    r.svg_resize(e)
  })
  e.set_resize_handler_wrapper(s)
  g.call(this)
  var c = e.get_options()
  if (undefined != c.toolbox_config) {
    var l = e.get_toolbox()
    var f = e.get_flyout()
    if ((0, u.is_nil)(l)) {
      if (c.toolbox_config instanceof Element && !(0, u.is_nil)(f)) {
        f.init(e)
        f.show(c.toolbox_config.children)
        f.scroll_to_start()
        e.scroll_xy[0] = f.get_width()
        if (c.toolboxPosition == a.TOOLBOX_POSITION.RIGHT) {
          e.scroll_xy[0] *= -1
        }
        e.translate(e.scroll_xy[0], 0)
      }
    } else {
      l.init()
    }
  }
  if (c.ws_scrollable) {
    var d = t.get(o.BINDING.ScrollbarPair)(e, c.ws_show_scrollbars)
    e.set_scrollbar(d)
    d.resize()
  }
  if (c.hasSounds) {
    (function (e, t) {
      var n = (0, o.get_instance)().get(o.BINDING.events)
      var r = t.get_audio_manager()
      if (!r) {
        throw new ReferenceError("audioMgr is undefined")
      }
      ["click", "disconnect", "delete"].forEach(function (t) {
        r.load(["" + e + t + ".mp3", "" + e + t + ".wav", "" + e + t + ".ogg"], t)
      })
      var i = []
      var a = function () {
        for (var e = i.pop(); e;) {
          n.unbind_event(e)
          e = i.pop()
        }
        r.preload()
      }
      i.push(n.bind_event_with_checks(document, "mousemove", undefined, a, true))
      i.push(n.bind_event_with_checks(document, "touchstart", undefined, a, true))
    })(c.pathToMedia, e)
  }
}
function g() {
  var e = this
  if (!this.runtime_data.document_events_bound) {
    var t = (0, o.get_instance)()
    var n = t.get(o.BINDING.events)
    var r = t.get(o.BINDING.touch_manager)
    n.bind_event_with_checks(document, "keydown", undefined, v.bind(this))
    n.bind_event_with_checks(document, "touchend", undefined, r.long_stop.bind(r))
    n.bind_event_with_checks(document, "touchcancel", undefined, r.long_stop.bind(r))
    if (d.is.ipad()) {
      n.bind_event_with_checks(window, "orientationchange", document, function () {
        e.utils.svg_resize(e.mainWorkspace)
      })
    }
  }
  this.runtime_data.document_events_bound = true
}
function v(e) {
  if (!this.mainWorkspace.get_options().readOnly && !this.utils.is_target_input(e) && this.mainWorkspace.get_hotkey_enable()) {
    var t = false
    if (27 == e.keyCode) {
      this.utils.hide_chaff()
    } else if (8 == e.keyCode || 46 == e.keyCode) {
      e.preventDefault()
      if (this.mainWorkspace.is_dragging()) {
        return
      }
      if (this.runtime_data.selected && this.runtime_data.selected.is_deletable()) {
        t = true
      }
    } else if (e.altKey || e.ctrlKey || e.metaKey) {
      if (this.mainWorkspace.is_dragging()) {
        return
      }
      if (this.runtime_data.selected && this.runtime_data.selected.is_deletable() && this.runtime_data.selected.is_movable()) {
        if (67 == e.keyCode) {
          this.utils.hide_chaff()
          this.runtime_data.clipboard.copy(this.runtime_data.selected)
        } else {
          if (88 == e.keyCode) {
            this.runtime_data.clipboard.copy(this.runtime_data.selected)
            t = true
          }
        }
      }
      if (86 == e.keyCode) {
        var n = this.runtime_data.clipboard.get_content()
        if (n) {
          var r = this.events.get_group()
          this.events.set_group(r || true)
          if (Array.isArray(n)) {
            this.mainWorkspace.paste_extend(n, undefined, true)
          } else {
            this.mainWorkspace.paste(n, undefined, true)
          }
          this.events.set_group(r)
        }
      } else if (90 == e.keyCode) {
        this.utils.hide_chaff()
        this.mainWorkspace.undo(e.shiftKey)
      }
    }
    if (t) {
      r = this.events.get_group()
      this.events.set_group(r || true)
      this.utils.hide_chaff()
      if (this.runtime_data.selected) {
        this.runtime_data.selected.dispose(false, true)
      }
      this.events.set_group(r)
    }
  }
}
exports.onKeyDown_ = v
