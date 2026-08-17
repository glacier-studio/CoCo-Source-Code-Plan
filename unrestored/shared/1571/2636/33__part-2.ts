/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：33__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Module_85 from /* 85 */"./34/85"
var z = ["Size", "Coordinate", "VisibleSwitch", "WidgetOpacity"]
var Y = ["size", "position", "visible", "opacity"]
var K = {
  key: "__opacity",
  label: "",
  valueType: "number",
  defaultValue: 100,
  validators: {
    lessThan: Module_60.j,
    greaterThan: Module_60.r,
    isInteger: true
  }
}
var q = {
  key: "__visible",
  label: "",
  valueType: "boolean",
  defaultValue: true
}
var X = {
  key: "__disabled",
  label: "",
  valueType: "boolean",
  defaultValue: false
}
function Q(e) {
  var /* [auto-meaningful-name] */e$property = e.property
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */Widget_get = "widget_get"
  if (e.isSetProperty) {
    Widget_get = "widget_set"
  }
  return "<block type=\"".concat(Widget_get, "\" uncache=\"true\">\n    <mutation property=\"").concat(e$property, "\" widget_type=\"").concat(e$widgetType, "\"></mutation>\n    <field name=\"WIDGET_ID\">").concat(e$widgetId, "</field>\n  </block>")
}
function Z(e) {
  var /* [auto-meaningful-name] */e$property = e.property
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  return "<block type=\"widget_method\" uncache=\"true\">\n  <mutation\n    widget_type=\"".concat(e$widgetType, "\"\n    method=\"").concat(e$property, "\">\n  </mutation>\n  <field name=\"WIDGET_ID\">").concat(e$widgetId, "</field>\n</block>")
}
function J(e, t) {
  var n = "flyout-line-".concat(t)
  var r = document.getElementById(n)
  if (!r) {
    (r = document.createElement("div")).id = n
    r.style.display = "none"
  }
  e.forEach(function (e) {
    var n
    var /* [auto-meaningful-name] */e$lineLabel = e.lineLabel
    var /* [auto-meaningful-name] */e$text = e.text
    var a = document.getElementById(e$lineLabel)
    if (!a) {
      (a = document.createElement("div")).id = e$lineLabel
      a.style.display = "flex"
      a.style.alignItems = "center"
      a.style.width = "".concat(Module_53.b + 40, "px")
      var s = document.createElement("div")
      s.style.width = "6px"
      s.style.height = "6px"
      s.style.borderRadius = "50%"
      s.style.backgroundColor = "#82778C"
      var c = document.createElement("div")
      c.style.fontSize = "14px"
      c.style.fontFamily = "NotoSansCJKsc-Medium, NotoSansCJKsc"
      c.style.color = "#82778C"
      c.style.marginLeft = "8px"
      var l = Module_85.a(t, e$text) || e$text
      c.innerText = l
      var u = document.createElement("div")
      u.style.flex = "1"
      u.style.height = "1px"
      u.style.backgroundColor = "#F2F2F2"
      u.style.marginLeft = "8px"
      a.appendChild(s)
      a.appendChild(c)
      a.appendChild(u)
      if (!(null === (n = r) || undefined === n)) {
        n.appendChild(a)
      }
      Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.register_flyout_button(e$lineLabel, function () {
        var e = document.createElementNS(Module_53.c, "foreignObject")
        e.style.overflow = "visible"
        var t = document.getElementById(e$lineLabel)
        if (t) {
          var /* [auto-meaningful-name] */t$clientWidth = t.clientWidth
          var /* [auto-meaningful-name] */t$clientHeight = t.clientHeight
          e.setAttribute("width", "".concat(t$clientWidth))
          e.setAttribute("height", "".concat(t$clientHeight))
          e.appendChild(t)
        }
        return {
          svg_group: e,
          update_callback: function (t) {
            var n = e.querySelector("#".concat(e$lineLabel))
            if (n) {
              var /* [auto-meaningful-name] */n$clientWidth = n.clientWidth
              var /* [auto-meaningful-name] */n$clientHeight = n.clientHeight
              n$clientWidth /= Module_53.d
              n$clientHeight /= Module_53.d
              e.setAttribute("width", "".concat(n$clientWidth))
              e.setAttribute("height", "".concat(n$clientHeight))
              t.width = n$clientWidth
              t.height = n$clientHeight
            }
          }
        }
      })
    }
  })
  document.body.append(r)
}
function $(e) {
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$lineId = e.lineId
  var o = "flyout-line-".concat(e$widgetType, "-").concat(e$lineId)
  J([
    {
      lineLabel: o,
      text: e$title
    }
  ], e$widgetType)
  return "<label type=\"".concat(o, "\"></label>")
}
export { z }
export { Y }
export { K }
export { q }
export { X }
export { Q }
export { Z }
export { J }
export { $ }
