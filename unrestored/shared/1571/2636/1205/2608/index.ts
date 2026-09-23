/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2608
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.init_color_blocks = undefined
var r = require(/* 93 */"tslib")
var o = require(/* 579 */"../../1022/579")
var i = require(/* 484 */"../../301/484")
var a = (0, r.__importStar)(require(/* 536 */"../../17/536"))
var s = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var c = require(/* 581 */"../2610/581")
var l = require(/* 1466 */"./1466")
function u(e, t) {
  var n
  var r
  var o
  var i
  var a
  return (null === (n = e.get_input_target_block(t)) || undefined === n ? undefined : n.get_field_value("NUM")) || (null === (a = null === (i = null === (o = null === (r = e.get_input_target_block(t)) || undefined === r ? undefined : r.output_connection) || undefined === o ? undefined : o.target_connection) || undefined === i ? undefined : i.get_shadow_dom()) || undefined === a ? undefined : a.textContent)
}
exports.init_color_blocks = function (e) {
  function t(e) {
    var t
    switch (e.format_) {
      case a.EColorFormat.ColorPalette:
        if (n = e.get_field("COLOR_PALETTE")) {
          e.color_ = new o.Color(n.get_value())
        }
        return e.color_
      case a.EColorFormat.ColorString:
        var n
        if (n = null === (t = e.get_input_target_block("COLOR_STRING")) || undefined === t ? undefined : t.get_field("TEXT")) {
          e.color_ = new o.Color(n.get_value())
        }
        return e.color_
      case a.EColorFormat.HSVA:
        var r = u(e, "H"),
          i = u(e, "S"),
          s = u(e, "V"),
          c = u(e, "A"),
          l = (0, o.hsv_to_rgb)({
            h: parseFloat(r || "0") % 360,
            s: parseFloat(i || "0"),
            v: parseFloat(s || "0")
          })
        e.color_.r = Math.round(l[0])
        e.color_.g = Math.round(l[1])
        e.color_.b = Math.round(l[2])
        e.color_.a = parseFloat(c || "100") / 100
        return e.color_
      case a.EColorFormat.RGBA:
        var d = u(e, "R"),
          p = u(e, "G"),
          f = u(e, "B")
        c = u(e, "A")
        e.color_.r = Math.round(parseFloat(d || "0"))
        e.color_.g = Math.round(parseFloat(p || "0"))
        e.color_.b = Math.round(parseFloat(f || "0"))
        e.color_.a = parseFloat(c || "100") / 100
        return e.color_
      default:
        return e.color_
    }
  }
  function n(e) {
    var t = (0, o.rgb_to_hsv)(e.r, e.g, e.b)
    return [t.h.toFixed(0), t.s.toFixed(0), t.v.toFixed(0), (100 * e.a).toFixed(0)]
  }
  function r(e) {
    return [e.r.toFixed(0), e.g.toFixed(0), e.b.toFixed(0), (100 * e.a).toFixed(0)]
  }
  e.define_block_with_object("color_picker", {
    init: function () {
      var c = e.di_container.get(s.BINDING.FieldColour)({
        colour: "#E8308C"
      })
      this.append_dummy_input("COLOR_PALETTE").append_field(c, "COLOR_PALETTE")
      var d = e.di_container.get(s.BINDING.FieldButton)({
        src: l.icon_setting,
        height: 20,
        width: 20,
        opt_callback: function (s) {
          !function (s, c) {
            var /* [auto-meaningful-name] */s$source_block = s.source_block
            if (!s$source_block) {
              return
            }
            t(s$source_block)
            var d = document.createElement("div")
            d.classList.add("color-menu")
            if (s.source_block) {
              d.classList.add(s.source_block.type)
            }
            var p = document.createElement("div")
            p.classList.add("color-menu-title")
            var f = document.createElement("div")
            f.innerText = c
            p.appendChild(f)
            d.appendChild(p)
            Object.values(a.EColorFormat).filter(function (e) {
              return !isNaN(Number(e))
            }).forEach(function (i) {
              !function (i, s, c, l) {
                var d = document.createElement("div")
                d.classList.add("color-menu-item")
                if (i.format_ === c) {
                  d.classList.add("color-menu-item-selected")
                }
                var p = function (e, t, i) {
                  switch (t) {
                    case a.EColorFormat.ColorString:
                      return "  <div class=\"color-menu-item-content\">\n        <div class=\"color-string\">\n        “" + (0, o.rgba_to_hex)(e).toUpperCase() + "”\n        </div>\n      </div>"
                    case a.EColorFormat.HSVA:
                      var s = n(e),
                        c = s[0],
                        l = s[1],
                        d = s[2],
                        p = s[3]
                      return "  <div class=\"color-menu-item-content\">\n        <div class=\"color-hsva\">\n          H\n          <div>" + (u(i, "H") || c) + "</div>\n          S\n          <div>" + (u(i, "S") || l) + "</div>\n          V\n          <div>" + (u(i, "V") || d) + "</div>\n          A\n          <div>" + (u(i, "A") || p) + "</div>\n        </div>\n      </div>"
                    case a.EColorFormat.RGBA:
                      var f = r(e),
                        h = f[0],
                        m = f[1],
                        g = f[2]
                      p = f[3]
                      return "  <div class=\"color-menu-item-content\">\n        <div class=\"color-rgba\">\n          R\n          <div>" + (u(i, "R") || h) + "</div>\n          G\n          <div>" + (u(i, "G") || m) + "</div>\n          B\n          <div>" + (u(i, "B") || g) + "</div>\n          A\n          <div>" + (u(i, "A") || p) + "</div>\n        </div>\n      </div>"
                    case a.EColorFormat.ColorPalette:
                    default:
                      return "<div class=\"color-menu-item-content\">\n          <div class=\"color-palette\">\n            <div style=\"background-color: " + e + ";\"></div>\n          </div>\n        </div>"
                  }
                }(t(i), c, i)
                d.innerHTML = p
                d.addEventListener("mousedown", function (t) {
                  var /* [auto-meaningful-name] */i$addMutation
                  t.stopImmediatePropagation()
                  t.preventDefault()
                  e.widget_div.hide_if_owner(s)
                  e.tooltip.hide()
                  var r = String(i.format_)
                  if (!(null === (i$addMutation = i.addMutation) || undefined === i$addMutation)) {
                    i$addMutation.call(i, c, r)
                  }
                })
                l.appendChild(d)
              }(s$source_block, s, i, d)
            })
            e.widget_div.show(s, function () {
              s.focus(false)
            })
            var /* [auto-meaningful-name] */e$widget_div$DIV = e.widget_div.DIV
            if (!(null === e$widget_div$DIV || undefined === e$widget_div$DIV)) {
              e$widget_div$DIV.appendChild(d)
            }
            s.source_block.workspace.options.dropdown.menu.align = "center"
            var m = (0, i.position_dropdown)(d, s)
            e.widget_div.position(m[0], m[1])
          }(s, e.Msg.SELECT_COLOR_PARAM_TYPE)
        },
        has_circle: true
      })
      this.append_dummy_input("BUTTON").append_field(d, "BUTTON")
      this.set_output(true, ["String", "Color"])
      this.set_inputs_inline(true)
      this.set_colour(e.theme.block_color.PURPLE_1.fill)
      this.format_ = a.EColorFormat.ColorPalette
      this.color_ = new o.Color("#E8308C")
      e.extensions.apply("param_color_block", this)
    },
    addMutation: function (t, n) {
      if (undefined !== t && "string" !== typeof t) {
        this.updateShape_(t)
        var /* [auto-meaningful-name] */e$di_container = e.di_container
        var o = e$di_container.get(s.BINDING.events)
        if (o.is_enabled()) {
          var i = e$di_container.get(s.BINDING.ChangeEvent)("mutation", {
            block: this,
            old_value: undefined,
            new_value: t,
            name: n
          })
          o.fire(i)
        }
      }
    },
    removeMutation: function (t, n) {
      if (undefined !== n) {
        this.updateShape_(parseInt(n))
        var /* [auto-meaningful-name] */e$di_container = e.di_container
        var o = e$di_container.get(s.BINDING.events)
        if (o.is_enabled()) {
          var i = e$di_container.get(s.BINDING.ChangeEvent)("mutation", {
            block: this,
            old_value: undefined,
            new_value: n,
            name: t
          })
          o.fire(i)
        }
      }
    },
    updateShape_: function (i, l) {
      var u = this
      if (this.format_ !== i) {
        switch (l || t(this), this.format_) {
          case a.EColorFormat.ColorPalette:
            this.remove_input("COLOR_PALETTE")
            break
          case a.EColorFormat.ColorString:
            this.remove_input("COLOR_STRING")
            break
          case a.EColorFormat.HSVA:
            ["H", "S", "V", "A"].forEach(function (e) {
              return u.remove_input(e)
            })
            break
          case a.EColorFormat.RGBA:
            ["R", "G", "B", "A"].forEach(function (e) {
              return u.remove_input(e)
            })
        }
        switch (i) {
          case a.EColorFormat.ColorPalette:
            var g = e.di_container.get(s.BINDING.FieldColour)
            this.append_dummy_input("COLOR_PALETTE", 0).append_field(g({
              colour: this.color_.toString()
            }), "COLOR_PALETTE")
            this.format_ = a.EColorFormat.ColorPalette
            break
          case a.EColorFormat.ColorString:
            this.append_shadow_input("COLOR_STRING", (0, c.text_shadow)((0, o.rgba_to_hex)(this.color_).toUpperCase()), 0).set_check("String")
            this.format_ = a.EColorFormat.ColorString
            break
          case a.EColorFormat.HSVA:
            var _ = n(this.color_),
              v = _[0],
              b = _[1],
              y = _[2],
              E = _[3]
            this.append_shadow_input("H", m(v, _03601False, h), 0).set_check("Number").append_field("H")
            this.append_shadow_input("S", (0, c.number_shadow)(b, _01001), 1).set_check("Number").append_field("S")
            this.append_shadow_input("V", (0, c.number_shadow)(y, _01001), 2).set_check("Number").append_field("V")
            this.append_shadow_input("A", (0, c.number_shadow)(E, _01001), 3).set_check("Number").append_field("A");
            ["H", "S", "V", "A"].forEach(function (e) {
              u.get_shadow_field(e).set_controller_option({
                type: a.ControllerType.COLOR_PICKER,
                color_format: a.EColorControllerFormat.HSVA,
                line: e
              })
            })
            this.format_ = a.EColorFormat.HSVA
            break
          case a.EColorFormat.RGBA:
            var O = r(this.color_),
              w = O[0],
              C = O[1],
              T = O[2]
            E = O[3]
            this.append_shadow_input("R", (0, c.number_shadow)(w, _02551), 0).set_check("Number").append_field("R")
            this.append_shadow_input("G", (0, c.number_shadow)(C, _02551), 1).set_check("Number").append_field("G")
            this.append_shadow_input("B", (0, c.number_shadow)(T, _02551), 2).set_check("Number").append_field("B")
            this.append_shadow_input("A", (0, c.number_shadow)(E, _01001), 3).set_check("Number").append_field("A");
            ["R", "G", "B", "A"].forEach(function (e) {
              u.get_shadow_field(e).set_controller_option({
                type: a.ControllerType.COLOR_PICKER,
                color_format: a.EColorControllerFormat.RGBA,
                line: e
              })
            })
            this.format_ = a.EColorFormat.RGBA
        }
        this.render()
      }
    },
    domToMutation: function (e) {
      if (e) {
        var t = parseInt(e.getAttribute("format") || "1")
        var n = new o.Color(e.getAttribute("color") || "#E8308C")
        this.color_ = n
        this.updateShape_(t, n)
      }
    },
    mutationToDom: function () {
      var e = document.createElement("mutation")
      e.setAttribute("format", String(this.format_))
      var n = t(this)
      if (n) {
        e.setAttribute("color", n.toString())
      }
      return e
    }
  })
  Object.assign(e.blocks_xml, {
    color_picker: "<block type=\"color_picker\">\n      <mutation format=\"1\" color=\"#E8308C\"></mutation>\n      <field name=\"COLOR_PALETTE\">#E8308C</field>\n    </block>"
  })
}
var /* [auto-meaningful-name] */_03601False = "0,360,1,false"
var /* [auto-meaningful-name] */_02551 = "0,255,1,"
var /* [auto-meaningful-name] */_01001 = "0,100,1,"
var h = "360"
var m = function (e, t, n) {
  return "<shadow type=\"math_number\"><field name=\"NUM\" constraints=\"" + t + "\" exceptions=\"" + n + "\">" + e + "</field></shadow>"
}
