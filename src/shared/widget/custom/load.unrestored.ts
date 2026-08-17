/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：34
 */

"use strict"

export { B as e }
export { U as r }
export { V as v }
export { z as s }
export { q as t }
export { Z as u }
export { $ as x }
export { te as w }
export { re as k }
export { oe as l }
export { ae as p }
export { se as n }
export { ce as m }
export { le as o }
export { ue as j }
export { de as h }
export { pe as f }
export { fe as g }
export { he as i }
export { M as c }
export { P as d }
export { d as q } from "./type"
export { widget as a }
export { ge as b }
var r
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../unrestored/shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Module_465 from /* 465 */"../../../../unrestored/shared/1571/2636/34/465"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */AntdMobile from /* 198 */"antd-mobile"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Utils_network_axiosWithCredentials from /* 41 */"../../utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */Module_228 from /* 228 */"../../../../unrestored/shared/1571/2636/228/index"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"../../../../unrestored/shared/1571/2636/60"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Ui_language from /* 23 */"../../ui/language"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"../../../../unrestored/shared/1571/2636/49"
import * as /* [auto-meaningful-name] */ExternalModule from /* 347 */"./external-module"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */Editor_redux_common_actions from /* 2 */"../../../editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Tools_index from /* 15 */"../../tools/index"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../../../../unrestored/shared/1571/2636/53"
import * as I from /* 183 */"./shop"
import * as /* [auto-meaningful-name] */Restrict from /* 232 */"./restrict"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../unrestored/shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../../../unrestored/shared/1571/2636/20/index"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../../unrestored/shared/1571/2636/55"
import * as /* [auto-meaningful-name] */Module_85 from /* 85 */"../../../../unrestored/shared/1571/2636/34/85"
import * as D from /* 78 */"./type"
var M = function () {
  function e(t) {
    Module_27.a(this, e)
    this.__widgetId = undefined
    this.__widgetType = undefined
    this.__widgetId = t.__widgetId
    this.__widgetType = t.__widgetType
  }
  Module_39.a(e, [
    {
      key: "emit",
      value: function (e) {
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
          n[r - 1] = arguments[r]
        }
        Module_20.emitWidgetEvent.apply(undefined, [this.__widgetType, e, this.__widgetId].concat(n))
      }
    }, {
      key: "widgetLog",
      value: function (e) {
        var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
        var n = e
        if (!D.d(this.__widgetType)) {
          n = Module_85.b(this.__widgetType, e)
        }
        Module_55.b.widgetLog({
          widgetId: this.__widgetId,
          widgetType: this.__widgetType,
          message: n,
          values: t
        })
      }
    }, {
      key: "widgetWarn",
      value: function (e) {
        var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
        var n = e
        if (!D.d(this.__widgetType)) {
          n = Module_85.b(this.__widgetType, e)
        }
        Module_55.b.widgetWarn({
          widgetId: this.__widgetId,
          widgetType: this.__widgetType,
          message: n,
          values: t
        })
      }
    }, {
      key: "widgetError",
      value: function (e) {
        var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
        var n = e
        if (!D.d(this.__widgetType)) {
          n = Module_85.b(this.__widgetType, e)
        }
        Module_55.b.widgetError({
          widgetId: this.__widgetId,
          widgetType: this.__widgetType,
          message: n,
          values: t
        })
      }
    }, {
      key: "widgetInterrupt",
      value: function (e) {
        throw Error(e)
      }
    }
  ])
  return e
}()
import * as /* [auto-meaningful-name] */_Storage from /* 96 */"./storage"
!function (e) {
  e[e.EVENTORDER = 1e4] = "EVENTORDER"
  e[e.METHODORDER = 2e4] = "METHODORDER"
  e[e.SETORDER = 3e4] = "SETORDER"
  e[e.GETORDER = 4e4] = "GETORDER"
}(r || (r = {}))
var P = function () {
  function e(t) {
    Module_27.a(this, e)
    this.__widgetId = undefined
    this.__widgetType = undefined
    this.__width = undefined
    this.__height = undefined
    this.__widgetId = t.__widgetId
    this.__widgetType = t.__widgetType
    this.__width = t.__width
    this.__height = t.__height
  }
  Module_39.a(e, [
    {
      key: "emit",
      value: function (e) {
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
          n[r - 1] = arguments[r]
        }
        Module_20.emitWidgetEvent.apply(undefined, [this.__widgetType, e, this.__widgetId].concat(n))
      }
    }, {
      key: "setProps",
      value: function (e) {
        try {
          for (var t in e) Module_20.setProperty(this.__widgetId, t, e[t])
        } catch (n) {
          console.error("setProps error", n)
        }
      }
    }, {
      key: "widgetLog",
      value: function (e) {
        var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
        var n = e
        if (!D.d(this.__widgetType)) {
          n = Module_85.b(this.__widgetType, e)
        }
        Module_55.b.widgetLog({
          widgetId: this.__widgetId,
          widgetType: this.__widgetType,
          message: n,
          values: t
        })
      }
    }, {
      key: "widgetWarn",
      value: function (e) {
        var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
        var n = e
        if (!D.d(this.__widgetType)) {
          n = Module_85.b(this.__widgetType, e)
        }
        Module_55.b.widgetWarn({
          widgetId: this.__widgetId,
          widgetType: this.__widgetType,
          message: n,
          values: t
        })
      }
    }, {
      key: "widgetError",
      value: function (e) {
        var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
        var n = e
        if (!D.d(this.__widgetType)) {
          n = Module_85.b(this.__widgetType, e)
        }
        Module_55.b.widgetError({
          widgetId: this.__widgetId,
          widgetType: this.__widgetType,
          message: n,
          values: t
        })
      }
    }, {
      key: "render",
      value: function () {
        return null
      }
    }
  ])
  return e
}()
var B = function (e, t, n, o) {
  var i = []
  var a = []
  var s = []
  var c = []
  var l = []
  var u = []
  var d = []
  n.methods.forEach(function (n) {
    var /* [auto-meaningful-name] */n$key = n.key
    var /* [auto-meaningful-name] */n$blockOptions = n.blockOptions
    var s = undefined === n$blockOptions ? {} : n$blockOptions
    if (false !== s.generateBlock) {
      var c = s.order || r.METHODORDER + l.length + 1
      var u = ""
      if (s.line) {
        var p = "flyout-line-".concat(t, "-method-").concat(n$key)
        d.push({
          lineLabel: p,
          text: s.line
        })
        u = "<label type=\"".concat(p, "\"></label>")
      }
      u += "\n    <block type=\"widget_method\" uncache=\"true\">\n      <mutation\n        widget_type=\"".concat(t, "\"\n        is_any_widget=\"").concat(o, "\"\n        method=\"").concat(n$key, "\">\n      </mutation>\n      <field name=\"WIDGET_ID\">").concat(e, "</field>\n    </block>")
      if (s.space) {
        u += "<sep gap=\"".concat(s.space, "\"></sep>")
      }
      l.push({
        xml: u,
        order: c
      })
    }
  })
  n.properties.forEach(function (n) {
    var /* [auto-meaningful-name] */h$getter
    var /* [auto-meaningful-name] */h$getter1
    var /* [auto-meaningful-name] */h$getter2
    var /* [auto-meaningful-name] */h$getter3
    var /* [auto-meaningful-name] */n$key = n.key
    var /* [auto-meaningful-name] */n$blockOptions = n.blockOptions
    var h = undefined === n$blockOptions ? {} : n$blockOptions
    if (false !== h.generateBlock && false !== (null === (h$getter = h.getter) || undefined === h$getter ? undefined : h$getter.generateBlock)) {
      var m = (null === (h$getter1 = h.getter) || undefined === h$getter1 ? undefined : h$getter1.order) || r.GETORDER + i.length + 1
      var g = ""
      if (null === (h$getter2 = h.getter) || undefined === h$getter2 ? undefined : h$getter2.line) {
        var _ = "flyout-line-".concat(t, "-property-").concat(n$key, "-getter")
        d.push({
          lineLabel: _,
          text: h.getter.line
        })
        g = "<label type=\"".concat(_, "\"></label>")
      }
      g += "\n      <block type=\"widget_get\" uncache=\"true\">\n        <mutation\n          widget_type=\"".concat(t, "\"\n          is_any_widget=\"").concat(o, "\"\n          property=\"").concat(n$key, "\">\n        </mutation>\n        <field name=\"WIDGET_ID\">").concat(e, "</field>\n      </block>")
      if (null === (h$getter3 = h.getter) || undefined === h$getter3 ? undefined : h$getter3.space) {
        g += "<sep gap=\"".concat(h.getter.space, "\"></sep>")
      }
      if ("__visible" === n$key || "__disabled" === n$key) {
        a.push({
          xml: g,
          order: m + 1e3
        })
      } else {
        i.push({
          xml: g,
          order: m
        })
      }
    }
  })
  n.properties.forEach(function (n) {
    var /* [auto-meaningful-name] */m$setter
    var /* [auto-meaningful-name] */m$setter1
    var /* [auto-meaningful-name] */m$setter2
    var /* [auto-meaningful-name] */m$setter3
    var /* [auto-meaningful-name] */n$key = n.key
    var /* [auto-meaningful-name] */n$readonly = n.readonly
    var /* [auto-meaningful-name] */n$blockOptions = n.blockOptions
    var m = undefined === n$blockOptions ? {} : n$blockOptions
    var g = true
    if (n$readonly) {
      g = false
    }
    if ("boolean" === typeof m.generateBlock) {
      g = m.generateBlock
    }
    if (m.setter) {
      g = true
    }
    if (false === (null === (m$setter = m.setter) || undefined === m$setter ? undefined : m$setter.generateBlock)) {
      g = false
    }
    if (g) {
      var _ = (null === (m$setter1 = m.setter) || undefined === m$setter1 ? undefined : m$setter1.order) || r.SETORDER + s.length + 1
      var v = ""
      if (null === (m$setter2 = m.setter) || undefined === m$setter2 ? undefined : m$setter2.line) {
        var b = "flyout-line-".concat(t, "-property-").concat(n$key, "-setter")
        d.push({
          lineLabel: b,
          text: m.setter.line
        })
        v = "<label type=\"".concat(b, "\"></label>")
      }
      v += "\n      <block type=\"widget_set\" uncache=\"true\">\n        <mutation\n          widget_type=\"".concat(t, "\"\n          is_any_widget=\"").concat(o, "\"\n          property=\"").concat(n$key, "\">\n        </mutation>\n        <field name=\"WIDGET_ID\">").concat(e, "</field>\n      </block>")
      if (null === (m$setter3 = m.setter) || undefined === m$setter3 ? undefined : m$setter3.space) {
        v += "<sep gap=\"".concat(m.setter.space, "\"></sep>")
      }
      if ("__visible" === n$key || "__disabled" === n$key) {
        c.push({
          xml: v,
          order: _ + 1e3
        })
      } else {
        s.push({
          xml: v,
          order: _
        })
      }
    }
  })
  n.events.forEach(function (n) {
    var /* [auto-meaningful-name] */n$key = n.key
    var /* [auto-meaningful-name] */n$blockOptions = n.blockOptions
    var s = undefined === n$blockOptions ? {} : n$blockOptions
    var c = s.order || r.EVENTORDER + u.length + 1
    var l = ""
    if (s.line) {
      var p = "flyout-line-".concat(t, "-event-").concat(n$key)
      d.push({
        lineLabel: p,
        text: s.line
      })
      l = "<label type=\"".concat(p, "\"></label>")
    }
    l += "\n    <block type=\"widget_event\" uncache=\"true\">\n      <mutation\n        widget_type=\"".concat(t, "\"\n        is_any_widget=\"").concat(o, "\"\n        event=\"").concat(n$key, "\">\n      </mutation>\n      <field name=\"WIDGET_ID\">").concat(e, "</field>\n    </block>")
    u.push({
      xml: l,
      order: c
    })
  })
  if (u.length) {
    u.push({
      xml: Module_9.k,
      order: r.EVENTORDER + 9999
    })
  }
  if (l.length) {
    l.push({
      xml: Module_9.k,
      order: r.METHODORDER + 9999
    })
  }
  if (c.length) {
    s.push.apply(s, c)
  }
  if (s.length) {
    s.push({
      xml: Module_9.k,
      order: r.SETORDER + 9999
    })
  }
  if (a.length) {
    a.unshift({
      xml: Module_9.k,
      order: r.GETORDER + 500
    })
  }
  Module_9.x(d, t)
  return [].concat(u, l, s, i, a).sort(function (e, t) {
    return e.order - t.order
  }).map(function (e) {
    return e.xml
  })
}
function F() {}
function G(e, t) {
  var /* [auto-meaningful-name] */e$docs
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$properties = e.properties
  var /* [auto-meaningful-name] */e$isGlobalWidget = e.isGlobalWidget
  var s = undefined === e$isGlobalWidget || e$isGlobalWidget
  var /* [auto-meaningful-name] */e$isInvisibleWidget = e.isInvisibleWidget
  var l = undefined === e$isInvisibleWidget || e$isInvisibleWidget
  var /* [auto-meaningful-name] */e$contentTextField = e.contentTextField
  var p = {}
  var f = [
    {
      type: "WidgetTitle",
      hasDisableOrVisible: e$properties.some(function (e) {
        return "__disabled" === e.key || "__visible" === e.key
      })
    }
  ]
  var h = [
    {
      type: "VisibleSwitch"
    }
  ]
  if (!l) {
    f.push(h)
  }
  var m = l ? {
    width: 0,
    height: 0
  } : {
    width: 100,
    height: 60
  }
  var g = [Module_53.s, Module_53.o]
  var _ = [Module_53.q, Module_53.m]
  e$properties.forEach(function (e) {
    var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
    var /* [auto-meaningful-name] */e$valueType = e.valueType
    var /* [auto-meaningful-name] */e$editorType = e.editorType
    var /* [auto-meaningful-name] */e$hidePropertyEditor = e.hidePropertyEditor
    var /* [auto-meaningful-name] */e$key = e.key
    var /* [auto-meaningful-name] */e$readonly = e.readonly
    var /* [auto-meaningful-name] */e$dropdown = e.dropdown
    var /* [auto-meaningful-name] */e$label = e.label
    var /* [auto-meaningful-name] */e$unit = e.unit
    var /* [auto-meaningful-name] */e$validators = e.validators
    if ("__disabled" === e$key) {
      h.push({
        type: "DisabledSwitch"
      })
    }
    if ("__width" === e$key) {
      m.width = e$defaultValue
      var v = e$validators
      if (undefined !== (null === v || undefined === v ? undefined : v.greaterThan)) {
        g[0] = ae(v)
      }
      return void (undefined !== (null === v || undefined === v ? undefined : v.lessThan) && (g[1] = se(v)))
    }
    if ("__height" === e$key) {
      m.height = e$defaultValue
      var b = e$validators
      if (undefined !== (null === b || undefined === b ? undefined : b.greaterThan)) {
        _[0] = ae(b)
      }
      return void (undefined !== (null === b || undefined === b ? undefined : b.lessThan) && (_[1] = se(b)))
    }
    var y
    if (!["__position", "__size", "__opacity", "__visible", "__disabled"].includes(e$key)) {
      p[e$key] = e$defaultValue
      if (y = e$editorType || (e$dropdown ? "Select" : function (e, t) {
        var n
        var r = ""
        if (Array.isArray(e)) {
          var o = typeof t
          r = "number" !== o && "string" !== o && "boolean" !== o || !e.includes(o) ? e[0] : o
        } else {
          r = e
        }
        switch (r) {
          case "string":
            n = "TextInput"
            break
          case "number":
            n = "InputNumber"
            break
          case "boolean":
            n = "AntSwitch"
            break
          case "color":
            n = "Color"
            break
          default:
            n = "TextInput"
        }
        return n
      }(e$valueType, e$defaultValue))) {
        if (!e$readonly && !e$hidePropertyEditor) {
          var E = {
            type: y,
            label: D.d(e$type) ? Module_85.b(e$type, e$key) : Module_85.b(e$type, e$label),
            key: e$key,
            addonAfter: e$unit
          }
          if (e$dropdown) {
            if (D.d(e$type)) {
              E.dropdown = e$dropdown
            } else {
              E.dropdown = e$dropdown.map(function (e) {
                return {
                  label: Module_85.a(e$type, e.label) || e.label,
                  value: e.value
                }
              })
            }
          }
          f.push(E)
        }
      } else {
        console.error("Property type ".concat(e$valueType, " is not supported."))
      }
    }
  })
  if (!l) {
    f.push({
      type: "WidgetOpacity"
    })
    f.push({
      type: "Size",
      label: "",
      key: "size",
      sizeRange: [g, _]
    })
    f.push({
      type: "Coordinate",
      label: "",
      key: "position"
    })
  }
  if (null === (e$docs = e.docs) || undefined === e$docs ? undefined : e$docs.url) {
    var /* [auto-meaningful-name] */e$docs$url = e.docs.url
    f.push({
      type: "HelpUrl",
      url: v
    })
  }
  var b = Module_85.c(e$type)
  return {
    type: e$type,
    icon: e$icon,
    title: e$contentTextField ? "" : b,
    contentTextField: e$contentTextField,
    hasAnyWidget: !!e.hasAnyWidget,
    previewAreaWidgetTitle: b,
    component: t,
    widget: {
      size: m,
      isGlobalWidget: s,
      attributes: Module_6.a({}, p)
    },
    editConfig: f,
    isInvisibleWidget: l,
    blockConfig: {
      type: e$type,
      category: {
        iconId: e$icon,
        blocks: e$type
      },
      getTemplate: function (t) {
        return B(t, e$type, e, false)
      },
      blockDeclareGroup: {
        setBlockGroupSnippet: F,
        setBlockGroupProfile: F
      },
      renameBlocksInfo: {
        blocksList: ["widget_event", "widget_method", "widget_get", "widget_set"],
        fieldName: "WIDGET_ID"
      },
      topBlocks: [],
      categoryClass: {
        text: "",
        iconId: "",
        blocks: []
      }
    }
  }
}
function W(e) {
  return "antd-mobile" === e ? AntdMobile : "color" === e ? Color1 : undefined
}
function U(e, t) {
  return H.apply(this, arguments)
}
function H() {
  return (H = Module_7.a(RegeneratorRuntime1.mark(function e(t, r) {
    var o
    var u
    var d
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$default
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$transformSync
    var /* [auto-meaningful-name] */https__static$bcmcdn$com_appcraft_modules_
    var /* [auto-meaningful-name] */https__static$codemao$cn_appcraft_modules_
    var y
    var E
    var O
    var C
    var /* [auto-meaningful-name] */CD$types
    var /* [auto-meaningful-name] */C$widget
    var I = arguments
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            O = function () {
              return (O = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
                return RegeneratorRuntime1.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        if (!t.startsWith(https__static$bcmcdn$com_appcraft_modules_) && !t.startsWith(https__static$codemao$cn_appcraft_modules_)) {
                          e.next = 4
                          break
                        }
                        return e.abrupt("return", Tools_index.cb(t))
                      case 4:
                        return e.abrupt("return", Promise.resolve())
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }
                }, e)
              }))).apply(this, arguments)
            }
            E = function (e) {
              return O.apply(this, arguments)
            }
            u = I.length > 2 && undefined !== I[2] ? I[2] : W
            d = {}
            e.next = 6
            return import(/* 3324 */"@babel/preset-react")
          case 6:
            e$sent = e.sent
            e$sent$default = e$sent.default
            e.next = 10
            return import(/* 2720 */"@babel/core")
          case 10:
            e$sent1 = e.sent
            e$sent1$transformSync = e$sent1.transformSync
            t = (null === (o = e$sent1$transformSync(t, {
              presets: [e$sent$default]
            })) || undefined === o ? undefined : o.code) || ""
            ExternalModule.clearExternalModules()
            Module_465.a(Function, ["require", "exports", "InvisibleWidget", "VisibleWidget", "React"].concat(Module_25.a(Restrict.b), [t])).apply(undefined, [
              ExternalModule.requireExternalModule, {}, function () {
                return function e() {
                  Module_27.a(this, e)
                }
              }(), function () {
                return function e() {
                  Module_27.a(this, e)
                }
              }(), React1
            ].concat(Module_25.a(Restrict.c)))
            https__static$bcmcdn$com_appcraft_modules_ = "https://static.bcmcdn.com/appcraft/modules/"
            https__static$codemao$cn_appcraft_modules_ = "https://static.codemao.cn/appcraft/modules/"
            y = ExternalModule.getExternalModules()
            e.next = 21
            return Promise.all(y.map(function (e) {
              return E(e)
            }))
          case 21:
            Module_465.a(Function, ["require", "exports", "InvisibleWidget", "VisibleWidget", "React"].concat(Module_25.a(Restrict.b), [t])).apply(undefined, [u, d, M, P, React1].concat(Module_25.a(Restrict.c)))
            CD$types = (C = d).types
            C$widget = C.widget
            if (!CD$types.isInvisibleWidget) {
              if (!CD$types.properties.some(function (e) {
                return "__opacity" === e.key
              })) {
                CD$types.properties.push({
                  key: "__opacity",
                  label: "",
                  valueType: "number",
                  defaultValue: Module_60.j,
                  validators: {
                    greaterThan: Module_60.r,
                    lessThan: Module_60.j,
                    isInteger: true
                  }
                })
              }
              if (!CD$types.properties.some(function (e) {
                return "__position" === e.key
              })) {
                CD$types.properties.push({
                  key: "__position",
                  label: "",
                  valueType: "number",
                  defaultValue: 100
                })
              }
              if (!CD$types.properties.some(function (e) {
                return "__visible" === e.key
              })) {
                CD$types.properties.push({
                  key: "__visible",
                  label: "",
                  valueType: "boolean",
                  defaultValue: true
                })
              }
            }
            CD$types.type = D.c(CD$types.type, r)
            return e.abrupt("return", {
              types: CD$types,
              widget: C$widget
            })
          case 27:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function V(e, t, n) {
  var /* [auto-meaningful-name] */e$widget = e.widget
  var /* [auto-meaningful-name] */e$types = e.types
  var /* [auto-meaningful-name] */e$types$title = e$types.title
  var /* [auto-meaningful-name] */e$types$type = e$types.type
  var s = function () {
    Module_85.e(e$types)
    var e = G(e$types, e$widget)
    Module_9.Nb(Module_9.j.EXTENSION, [e])
    Module_228.c(e.type)
    if (t) {
      t()
    }
  }
  if (_Storage.g(e$types$type)) {
    var c = D.f(e$types$type, false)
    Module_37.a(Editor_redux_common_actions.zh({
      onConfirm: s,
      onCancel: n,
      allowText: Ui_language.c(Ui_language.b, "ExtensionWidget.overwrite").toString(),
      title: Ui_language.c(Ui_language.b, "ExtensionWidget.dialogTitle", {
        title: e$types$title,
        type: c
      }).toString(),
      isDangerous: true
    }))
  } else {
    s()
  }
}
function z(e, t) {
  var /* [auto-meaningful-name] */e$types = e.types
  var /* [auto-meaningful-name] */e$messages = e.messages
  if (!e$types.isInvisibleWidget) {
    if (!e$types.properties.some(function (e) {
      return "__opacity" === e.key
    })) {
      e$types.properties.push({
        key: "__opacity",
        label: "",
        valueType: "number",
        defaultValue: Module_60.j,
        validators: {
          greaterThan: Module_60.r,
          lessThan: Module_60.j,
          isInteger: true
        }
      })
    }
    if (!e$types.properties.some(function (e) {
      return "__position" === e.key
    })) {
      e$types.properties.push({
        key: "__position",
        label: "",
        valueType: "number",
        defaultValue: 100
      })
    }
    if (!e$types.properties.some(function (e) {
      return "__visible" === e.key
    })) {
      e$types.properties.push({
        key: "__visible",
        label: "",
        valueType: "boolean",
        defaultValue: true
      })
    }
  }
  Module_85.d(e$types, e$messages)
  var o = G(e$types, t)
  _Storage.a({
    types: e$types,
    type: e$types.type,
    code: ""
  })
  return o
}
function Y(e, t) {
  return K.apply(this, arguments)
}
function K() {
  return (K = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$types
    var /* [auto-meaningful-name] */e$sent$widget
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return U(t, n)
          case 2:
            e$sent = e.sent
            e$sent$types = e$sent.types
            e$sent$widget = e$sent.widget
            return e.abrupt("return", new Promise(function (e, r) {
              V({
                types: e$sent$types,
                widget: e$sent$widget
              }, function () {
                var /* [auto-meaningful-name] */e$sent$types$type = e$sent$types.type
                if (!n) {
                  var /* [auto-meaningful-name] */Module_49$oTHelper$extensionWidget
                  _Storage.a({
                    type: e$sent$types$type,
                    types: e$sent$types,
                    code: t
                  })
                  var a = {
                    type: e$sent$types$type,
                    code: t
                  }
                  if (!(null === (Module_49$oTHelper$extensionWidget = Module_49.oTHelper.extensionWidget) || undefined === Module_49$oTHelper$extensionWidget)) {
                    Module_49$oTHelper$extensionWidget.clientOp.addUnsafeExtensionWidget(a)
                  }
                }
                Module_37.a(Editor_redux_common_actions.Rj())
                e(e$sent$types)
              }, function () {
                r("User cancel import widget")
              })
            }))
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function q(e, t) {
  return X.apply(this, arguments)
}
function X() {
  return (X = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return new Promise(function (e, n) {
              var r = new FileReader()
              r.readAsText(t)
              r.onload = function () {
                e(r.result)
              }
              r.onerror = n
            })
          case 2:
            e$sent = e.sent
            if (!n) {
              Q(e$sent)
            }
            e.next = 6
            return Y(e$sent, n)
          case 6:
            e$sent1 = e.sent
            return e.abrupt("return", e$sent1)
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Q(e) {
  if (/getElementsByClassName\([\s\S]*readonly[\s\S]*\)/i.test(e)) {
    throw new Error("file getElementsByClassName(*readonly*) not allow")
  }
  var t = []
  Restrict.a.forEach(function (n) {
    if (e.includes(n)) {
      t.push(n)
    }
  })
  if (t.length > 0) {
    Module_37.a(Editor_redux_common_actions.zh({
      allowText: Ui_language.c(Ui_language.b, "cloudDb.know").toString(),
      title: "error",
      content: "自定义控件存在问题，不支持导入",
      cancelBtnVisible: false
    }))
    throw new Error("file ".concat(t.join("，"), " not allow"))
  }
}
function Z(e, t) {
  return J.apply(this, arguments)
}
function J() {
  return (J = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$type
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t.startsWith("https")) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            r = "".concat(t, "?t=").concat(Math.random())
            e.next = 5
            return Utils_network_axiosWithCredentials.a.get(r, {
              responseType: "blob",
              withCredentials: false
            })
          case 5:
            e$sent = e.sent
            e.next = 8
            return q(e$sent.data, true)
          case 8:
            e$sent1 = e.sent
            e$sent1$type = e$sent1.type
            _Storage.b({
              id: n,
              type: e$sent1$type,
              types: e$sent1,
              cdnUrl: t
            })
            return e.abrupt("return", e$sent1)
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function $(e, t) {
  return ee.apply(this, arguments)
}
function ee() {
  return (ee = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var o
    var a
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (o = function () {
              return (o = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
                var /* [auto-meaningful-name] */e$sent
                var /* [auto-meaningful-name] */e$sent$types
                var /* [auto-meaningful-name] */e$sent$widget
                var /* [auto-meaningful-name] */e$sent$types$type
                return RegeneratorRuntime1.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        e.next = 2
                        return U(t, false)
                      case 2:
                        e$sent = e.sent
                        e$sent$types = e$sent.types
                        e$sent$widget = e$sent.widget
                        V({
                          types: e$sent$types,
                          widget: e$sent$widget
                        })
                        e$sent$types$type = e$sent$types.type
                        _Storage.a({
                          type: e$sent$types$type,
                          types: e$sent$types,
                          code: t
                        })
                      case 8:
                      case "end":
                        return e.stop()
                    }
                  }
                }, e)
              }))).apply(this, arguments)
            }, r = function (e) {
              return o.apply(this, arguments)
            }, Module_9.u(Module_9.j.EXTENSION), _Storage.c(), !n.length) {
              e.next = 7
              break
            }
            e.next = 7
            return Promise.all(n.map(function (e) {
              var /* [auto-meaningful-name] */e$code = e.code
              return r(e$code)
            }))
          case 7:
            if (Module_37.a(Editor_redux_common_actions.Rj()), !(a = t.filter(function (e) {
              return e.cdnUrl.startsWith("https") && e.id
            })).length) {
              e.next = 11
              break
            }
            return e.abrupt("return", Promise.all(a.map(function (e) {
              return Z(e.cdnUrl, e.id)
            })))
          case 11:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function te(e, t, n) {
  return ne.apply(this, arguments)
}
function ne() {
  return (ne = Module_7.a(RegeneratorRuntime1.mark(function e(t, n, r) {
    var o
    var a
    var s
    var c
    var l
    var u
    var d
    var p
    var /* [auto-meaningful-name] */e$sent
    var h
    var /* [auto-meaningful-name] */e$sent1
    var g
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            for (a in o = {}, n) {
              s = n[a]
              if (D.e(s.type)) {
                o[s.type] = true
              }
            }
            for (c in r) {
              l = r[c]
              if (D.e(l.type)) {
                o[l.type] = true
              }
            }
            if (t.forEach(function (e) {
              o[e.type] = false
              delete o[e.type]
            }), !(Object.keys(o).length > 0)) {
              e.next = 26
              break
            }
            u = []
            d = 1
            p = 100
            e.next = 10
            return I.e(d, p)
          case 10:
            if (e$sent = e.sent, u = u.concat(e$sent.items), !((h = Math.ceil(e$sent.total / p)) > 1)) {
              e.next = 23
              break
            }
            d += 1
          case 15:
            if (!(d <= h)) {
              e.next = 23
              break
            }
            e.next = 18
            return I.e(d, p)
          case 18:
            e$sent1 = e.sent
            u = u.concat(e$sent1.items)
          case 20:
            d++
            e.next = 15
            break
          case 23:
            g = []
            u.forEach(function (e) {
              var t = "".concat(D.a).concat(e.widget_code)
              if (o[t] && e.resource_url.startsWith("https")) {
                g.push({
                  id: e.id,
                  type: t,
                  cdnUrl: e.resource_url
                })
              }
            })
            return e.abrupt("return", Promise.all(g.map(function (e) {
              return Z(e.cdnUrl, e.id)
            })))
          case 26:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function re(e) {
  var t = _Storage.f(e)
  return t ? Module_85.a(e, t.types.title) : ""
}
function oe(e, t) {
  var n = _Storage.f(e)
  if (null === n || undefined === n ? undefined : n.types) {
    return n.types.properties.find(function (e) {
      return e.key === t
    })
  }
}
function ie(e, t) {
  var n = _Storage.f(e)
  if (null === n || undefined === n ? undefined : n.types) {
    var r = n.types.properties.find(function (e) {
      return e.key === t
    })
    if (r) {
      if ("number" === r.valueType && r.validators) {
        return r.validators
      }
    }
  }
}
function ae(e) {
  var t
  if (undefined !== e.greaterThan) {
    t = "number" === typeof e.greaterThan ? e.greaterThan : e.greaterThan.value
  }
  return t
}
function se(e) {
  var t
  if (undefined !== e.lessThan) {
    t = "number" === typeof e.lessThan ? e.lessThan : e.lessThan.value
  }
  return t
}
function ce(e, t) {
  var n = ie(e, t)
  if (n) {
    return se(n)
  }
}
function le(e, t) {
  var n = ie(e, t)
  if (n) {
    return ae(n)
  }
}
function ue(e, t) {
  var n = _Storage.f(e)
  if (null === n || undefined === n ? undefined : n.types) {
    return n.types.methods.find(function (e) {
      return e.key === t
    })
  }
}
function de(e, t) {
  var n = _Storage.f(e)
  if (null === n || undefined === n ? undefined : n.types) {
    return n.types.events.find(function (e) {
      return e.key === t
    })
  }
}
function pe(e, t) {
  var n = new Set()
  var r = t || e
  if ((r = Array.isArray(r) ? r : [r]).includes("string")) {
    r.push("number", "boolean", "object", "array")
  }
  if (r.includes("color") || r.includes("image") || r.includes("icon") || r.includes("richTextString")) {
    r.push("string")
  }
  r.forEach(function (e) {
    n.add(Lodash.upperFirst("".concat(e)))
  })
  return Array.from(n)
}
function fe(e) {
  var t = new Set()
  var n = Array.isArray(e) ? e : [e]
  if (n.includes("color") || n.includes("image")) {
    n.push("string")
  }
  n.forEach(function (e) {
    t.add(Lodash.upperFirst("".concat(e)))
  })
  return Array.from(t)
}
function he(e, t) {
  return "".concat(e, "_").concat(t)
}
var /* [auto-meaningful-name] */widget = "widget"
var ge = "控件"
export default widget
