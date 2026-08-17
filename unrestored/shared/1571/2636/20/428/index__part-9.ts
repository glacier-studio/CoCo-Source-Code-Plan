/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../34/347/112"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../10/index"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"../../60"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../28/index"
import * as /* [auto-meaningful-name] */Module_313 from /* 313 */"./313"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../11"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_storage from /* 96 */"../../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_85 from /* 85 */"../../34/85"
function fo(e) {
  var /* [auto-meaningful-name] */e$ruleKey = e.ruleKey
  var /* [auto-meaningful-name] */e$ruleOptions = e.ruleOptions
  var /* [auto-meaningful-name] */e$inputValue = e.inputValue
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var /* [auto-meaningful-name] */e$label = e.label
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var s = {
    label: Module_85.a(e$widgetType, e$label)
  }
  if ("object" === typeof e$ruleOptions && e$ruleOptions.message) {
    e$ruleOptions.message = Module_85.b(e$widgetType, e$ruleOptions.message)
  }
  return Module_14.a.validate({
    ruleKey: e$ruleKey,
    ruleOptions: e$ruleOptions,
    inputValue: e$inputValue,
    values: s,
    widgetId: e$widgetId
  })
}
function ho(e, t) {
  Module_12.l(e, t)
}
function mo(e, t) {
  var n = Module_12.b(e)
  if (n) {
    var r = Src_shared_widget_custom_load.m(n.type, "__width")
    var o = Src_shared_widget_custom_load.o(n.type, "__width")
    var i = false
    if ("number" === typeof t) {
      if ("number" === typeof r && t > r) {
        i = true
      }
      if ("number" === typeof o && t < o) {
        i = true
      }
    }
    if (i) {
      Module_14.a.log({
        type: "warning",
        messageId: "valueOutOfRange",
        widgetId: e
      })
    } else {
      Module_12.k(e, {
        width: t
      })
    }
  }
}
function go(e, t) {
  var n = Module_12.b(e)
  if (n) {
    var r = Src_shared_widget_custom_load.m(n.type, "__height")
    var o = Src_shared_widget_custom_load.o(n.type, "__height")
    var i = false
    if ("number" === typeof t) {
      if ("number" === typeof r && t > r) {
        i = true
      }
      if ("number" === typeof o && t < o) {
        i = true
      }
    }
    if (i) {
      Module_14.a.log({
        type: "warning",
        messageId: "valueOutOfRange",
        widgetId: e
      })
    } else {
      Module_12.k(e, {
        height: t
      })
    }
  }
}
function _o(e, t) {
  Module_12.j(e, {
    x: t
  })
}
function vo(e, t) {
  Module_12.j(e, {
    y: t
  })
}
function bo(e, t) {
  var n = Math.max(Math.min(Math.round(t), Module_60.j), Module_60.r)
  Module_12.i(e, n)
  if (t < 0 || t > 100) {
    Module_14.a.log({
      type: "warning",
      messageId: "opacityValueOutOfRange",
      widgetId: e
    })
  }
}
function yo(e, t, n) {
  Module_12.h(e, Module_11.a({}, t, n))
}
function Eo(e, t, n) {
  var r = Module_28.p(n)
  Module_12.h(e, Module_11.a({}, t, r))
}
function Oo(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.width
}
function wo(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.height
}
function Co(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x
}
function To(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y
}
function So(e) {
  var t
  var n = null === (t = Module_12.b(e)) || undefined === t ? undefined : t.opacity
  return undefined !== n ? n : Module_60.j
}
function Ao(e) {
  return Module_12.g(e)
}
function Io(e) {
  var t
  return !(null === (t = Module_12.d(e)) || undefined === t ? undefined : t.disabled)
}
function jo(e, t) {
  var n
  return null === (n = Module_12.d(e)) || undefined === n ? undefined : n[t]
}
var No = new Map()
function Ro(e, t) {
  No.set(e, t)
}
function ko(e) {
  return No.get(e)
}
function xo() {
  return Array.from(No.values())
}
var Do = function (e, t) {
  var n = Module_12.b(e)
  if (n) {
    var r = Src_shared_widget_custom_storage.f(n.type)
    if (!(null === r || undefined === r ? undefined : r.types.isInvisibleWidget)) {
      var o = Src_shared_widget_custom_load.l(n.type, t)
      return function (e, t) {
        switch (t) {
          case "color":
            try {
              return Src_shared_tools_index.l(Color(e))
            } catch (n) {
              return e
            }
          default:
            return e
        }
      }(jo(e, t), null === o || undefined === o ? undefined : o.valueType) || ""
    }
  }
  var i = ko(e)
  return (null === i || undefined === i ? undefined : i.hasOwnProperty(t)) ? i[t] : ""
}
var Mo = function (e, t, n) {
  var r = ko(e)
  var o = Module_12.b(e)
  if (o) {
    var s = Src_shared_widget_custom_load.l(o.type, t)
    if (s) {
      var /* [auto-meaningful-name] */s$valueType = s.valueType
      var /* [auto-meaningful-name] */s$validators = s.validators
      var /* [auto-meaningful-name] */s$label = s.label
      if ("string" === s$valueType || "multilineString" === s$valueType) {
        if ("string" !== typeof n) {
          n = Module_28.p(n)
        }
        if (s$validators) {
          var d = Src_shared_tools_index.q(s$validators)
          if (!Object.entries(d).every(function (t) {
            var r = Module_10.a(t, 2)
            var i = r[0]
            var a = r[1]
            return fo({
              ruleKey: "string.".concat(i),
              ruleOptions: a,
              widgetType: o.type,
              label: s$label,
              inputValue: n,
              widgetId: e
            })
          })) {
            return
          }
        }
      } else if ("number" === s$valueType) {
        var p
        if ("number" !== typeof n) {
          return void Module_14.a.log({
            type: "error",
            widgetId: e,
            messageId: "argNotNumber",
            values: {
              name: ""
            }
          })
        }
        if (null === (p = s$validators) || undefined === p ? undefined : p.isInteger) {
          n = Math.round(n)
        }
        if (s$validators) {
          var f = Src_shared_tools_index.q(s$validators)
          if (!Object.entries(f).every(function (t) {
            var r = Module_10.a(t, 2)
            var i = r[0]
            var a = r[1]
            return fo({
              ruleKey: "number.".concat(i),
              ruleOptions: a,
              widgetType: o.type,
              label: s$label,
              inputValue: n,
              widgetId: e
            })
          })) {
            return
          }
        }
      } else if ("color" === s$valueType) {
        if (!Src_shared_tools_index.pb(n)) {
          return void Module_14.a.log({
            type: "warning",
            messageId: "argNotColor",
            widgetId: e
          })
        }
      } else if ("image" === s$valueType) {
        if (!Module_112.d(n)) {
          return void Module_14.a.log({
            type: "warning",
            messageId: "imageNotExists",
            widgetId: e
          })
        }
      } else if ("icon" === s$valueType) {
        if (!Module_112.c(n)) {
          return void Module_14.a.log({
            type: "warning",
            messageId: "imageNotExists",
            widgetId: e
          })
        }
      }
    }
    if (r) {
      r[t] = n
    } else {
      console.error("setProperty getWidgetInstance error", e, t, n)
    }
    var h = Src_shared_widget_custom_storage.f(o.type)
    if (h) {
      if (!h.types.isInvisibleWidget) {
        yo(e, t, n)
      }
    } else {
      console.error("setProperty widgetManger.getWidget error", e, t, n)
    }
  } else {
    console.error("setProperty widget is null", e, t, n)
  }
}
var Lo = function (e, t, n) {
  var /* [auto-meaningful-name] */s$blockOptions
  var /* [auto-meaningful-name] */s$blockOptions$setter
  var i = Module_12.b(e)
  if (i) {
    var s = Src_shared_widget_custom_load.l(i.type, t)
    var c = null === s || undefined === s || null === (s$blockOptions = s.blockOptions) || undefined === s$blockOptions || null === (s$blockOptions$setter = s$blockOptions.setter) || undefined === s$blockOptions$setter ? undefined : s$blockOptions$setter.func
    if ("function" === typeof c) {
      try {
        c({
          setProperty: Mo,
          getProperty: Do,
          id: e,
          key: t,
          value: n
        })
      } catch (l) {
        console.error("setProperty call setter function error", l)
      }
    } else {
      Mo(e, t, n)
    }
  } else {
    console.error("setProperty widget is null", e, t, n)
  }
}
function Po(e, t) {
  return Bo.apply(this, arguments)
}
function Bo() {
  return (Bo = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */h$length
    var o
    var s
    var c
    var l
    var u
    var d
    var p
    var /* [auto-meaningful-name] */e$sent
    var h = arguments
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            for (h$length = h.length, o = new Array(h$length > 2 ? h$length - 2 : 0), s = 2; s < h$length; s++) {
              o[s - 2] = h[s]
            }
            if (c = ko(t)) {
              e.next = 5
              break
            }
            console.error("callMethod getWidgetInstance error", t, n)
            return e.abrupt("return")
          case 5:
            if (l = Module_12.b(t)) {
              e.next = 9
              break
            }
            (u = console).error.apply(u, ["callMethod widget is null", t, n].concat(o))
            return e.abrupt("return")
          case 9:
            if (d = Src_shared_widget_custom_load.j(l.type, n)) {
              e.next = 13
              break
            }
            (p = console).error.apply(p, ["callMethod getWidgetMethod error", t, n].concat(o))
            return e.abrupt("return")
          case 13:
            if (d.params.forEach(function (e, t) {
              var /* [auto-meaningful-name] */e$valueType = e.valueType
              var r = o[t]
              if (!("string" !== e$valueType && "multilineString" !== e$valueType)) {
                if ("string" !== typeof r) {
                  o[t] = Module_28.p(r)
                }
              }
            }), e.prev = 14, "function" !== typeof c[n]) {
              e.next = 20
              break
            }
            e.next = 18
            return c[n].apply(c, o)
          case 18:
            e$sent = e.sent
            return e.abrupt("return", e$sent)
          case 20:
            e.next = 25
            break
          case 22:
            e.prev = 22
            e.t0 = e.catch(14)
            console.error("callMethod error:", e.t0, "methodName", n)
          case 25:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[14, 22]])
  }))).apply(this, arguments)
}
function Fo(e, t) {
  for (var n in t) {
    var r = t[n]
    Mo(e, n, r)
  }
}
var Go = new Map()
var Wo = new Map()
function Uo(e) {
  return Go.get(e)
}
function Ho(e, t) {
  return Go.set(e, t)
}
function Vo(e) {
  var t = Go.get(e)
  if (t) {
    Wo.delete(t)
    Go.delete(e)
  }
}
function zo(e, t) {
  Wo.set(e, t)
}
function Yo(e) {
  return Wo.get(e)
}
function Ko(e) {
  var t = Uo(e)
  if (t) {
    var n = t.actors.get_actor(e)
    var /* [auto-meaningful-name] */n$is_error = n.is_error
    var /* [auto-meaningful-name] */n$value = n.value
    if (!n$is_error(n$value)) {
      return n$value
    }
    console.error("get_actor error")
  }
}
function qo(e) {
  var t = Uo(e)
  if (t) {
    t.actors.get_actor_ids().forEach(function (e) {
      var n = t.actors.get_actor(e)
      var /* [auto-meaningful-name] */n$is_error = n.is_error
      var /* [auto-meaningful-name] */n$value = n.value
      if (n$is_error(n$value)) {
        console.error("clearCanvasBrush get_actor error", e)
      } else {
        n$value.get_brush().clear()
      }
    })
  }
}
function Xo(e) {
  return Qo.apply(this, arguments)
}
function Qo() {
  return (Qo = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = Uo(t)) {
              e.next = 3
              break
            }
            return e.abrupt("return")
          case 3:
            e.next = 5
            return Src_shared_tools_index.lb(20)
          case 5:
            e.next = 7
            return n.get_screenshot()
          case 7:
            e$sent = e.sent
            return e.abrupt("return", e$sent)
          case 9:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Zo(e, t) {
  if (Uo(e)) {
    if (Module_112.d(t)) {
      yo(e, "backgroundImage", t)
    } else {
      Module_14.a.log({
        messageId: "imageNotExists",
        type: "error",
        widgetId: e
      })
    }
  } else {
    console.error("Stage is null")
  }
}
function Jo(e) {
  return jo(e, "backgroundImage")
}
var $o = new Set()
function ei(e) {
  $o.add(e)
}
function ti(e) {
  $o.delete(e)
}
function ni() {
  $o.clear()
}
function ri(e) {
  return $o.has(e)
}
export { ho }
export { mo }
export { go }
export { _o }
export { vo }
export { bo }
export { yo }
export { Eo }
export { Oo }
export { wo }
export { Co }
export { To }
export { So }
export { Ao }
export { Io }
export { jo }
export { Ro }
export { ko }
export { xo }
export { Do }
export { Mo }
export { Lo }
export { Po }
export { Fo }
export { Uo }
export { Ho }
export { Vo }
export { zo }
export { Yo }
export { Ko }
export { qo }
export { Xo }
export { Zo }
export { Jo }
export { ei }
export { ti }
export { ni }
export { ri }
