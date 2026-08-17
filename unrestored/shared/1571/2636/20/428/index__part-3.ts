/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-3
 */

"use strict"

import { z } from "./index__part-2"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../47"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Module_91 from /* 91 */"../../91"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"../../68"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../48/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../9"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../../37/index"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../../64/index"
import * as /* [auto-meaningful-name] */Module_143 from /* 143 */"../../37/143"
function te(e) {
  return String(e)
}
function ne(e, t) {
  return "@".concat(e, "_").concat(t)
}
function re(e) {
  return "@__INITIALIZED__".concat(e)
}
function oe(e) {
  var t = {}
  for (var n in e) if (!(e[n].type !== Src_editor_widget_builtIn_types.y && e[n].type !== Src_editor_widget_builtIn_types.B)) {
    (function () {
      var r = []
      e[n].attributes.fields.forEach(function (e) {
        return e.key && r.push(e)
      })
      t[n] = r
    })()
  }
  return t
}
function ie(e, t) {
  var n = oe(t)
  var r = []
  for (var o in n) {
    var i = n[o]
    var a = ce(e, o)
    if (i && !a) {
      r.push([ne(e, o), JSON.stringify(i)])
    }
  }
  Module_143.a.multiSet(r)
}
function ae(e) {
  var t = Module_9.Bb(e)
  var n = []
  t.attributes.fields.forEach(function (e) {
    return n.push(e)
  })
  var /* [auto-meaningful-name] */Module_37$d$getState$project$id = Module_37.d.getState().project.id
  if (t) {
    var o = ne(Module_37$d$getState$project$id, t.id)
    if (Module_143.a.getItem(o)) {
      Module_143.a.setItem(o, JSON.stringify(n))
    }
    Module_91.a({
      type: Module_68.b.PLAYER_DATA_WATCH,
      data: {
        screenId: Module_48.a().getState().currentScreenId,
        tab: Src_editor_widget_builtIn_types.B,
        id: t.id,
        value: n
      }
    })
  }
}
function se(e) {
  var t = Module_143.a.getAllKeys().filter(function (t) {
    return 0 === t.indexOf("@".concat(e, "_"))
  })
  t.push(re(e))
  Module_143.a.multiRemove(t)
}
function ce(e, t) {
  var n = ne(e, t)
  var r = Module_143.a.getItem(n)
  if (r) {
    try {
      var o = JSON.parse(r)
      if (Array.isArray(o)) {
        return o
      }
      if ("object" === typeof o) {
        var i = []
        for (var a in o) i.push({
          id: Module_64.a("DOC_KEY"),
          key: a,
          value: o[a],
          type: "string"
        })
        Module_143.a.setItem(n, JSON.stringify(i))
        return i
      }
    } catch (s) {
      Module_143.a.removeItem(n)
    }
  }
}
function le(e, t, n) {
  var r
  var o = ce(e, t)
  if (!o) {
    return ""
  }
  n = null === (r = n) || undefined === r ? undefined : r.toString()
  var i = o.find(function (e) {
    return e.key === n
  })
  return i ? i.value : (Module_14.a.condition(false, {
    type: "error",
    messageId: "keyNotExists",
    values: {
      key: n
    }
  }), console.error("getLocalDocumentFieldItem error.", "appId:", e, "docId:", t, "key:", n, "document:", o), "")
}
function ue(e, t, n, r) {
  return de.apply(this, arguments)
}
function de() {
  return (de = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    var i
    var a
    var s
    var c
    var l
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("string" === typeof r || "number" === typeof r) {
              e.next = 3
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "localStorageInvalidKeyType",
              widgetId: n
            })
            return e.abrupt("return")
          case 3:
            if (r = r.toString(), i = "number" === typeof o || "string" === typeof o, Module_14.a.condition(i, {
              type: "error",
              messageId: "localStorageInvalidValueType",
              widgetId: n,
              values: {
                key: r
              }
            }), i) {
              e.next = 8
              break
            }
            return e.abrupt("return")
          case 8:
            if (!(a = ce(t, n))) {
              e.next = 27
              break
            }
            if ((s = a.find(function (e) {
              return e.key === r
            })) || (s = {
              id: Module_64.a("DOC_KEY"),
              key: r,
              value: "",
              type: "string"
            }, a.push(s)), !Lodash.isNumber(o)) {
              e.next = 16
              break
            }
            e.t0 = o
            e.next = 22
            break
          case 16:
            e.next = 18
            return z(o)
          case 18:
            if (e.t1 = e.sent, e.t1) {
              e.next = 21
              break
            }
            e.t1 = o
          case 21:
            e.t0 = e.t1
          case 22:
            s.value = e.t0
            c = ne(t, n)
            Module_143.a.setItem(ne(t, n), JSON.stringify(a))
            l = Module_143.a.getItem(c)
            Module_91.a({
              type: Module_68.b.PLAYER_DATA_WATCH,
              data: {
                screenId: Module_48.a().getState().currentScreenId,
                tab: Src_editor_widget_builtIn_types.B,
                id: n,
                value: l ? JSON.parse(l) : ""
              }
            })
          case 27:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function pe(e, t, n) {
  var r
  var o = ce(e, t)
  n = null === (r = n) || undefined === r ? undefined : r.toString()
  Module_14.a.condition(null === o || undefined === o ? undefined : o.find(function (e) {
    return e.key === n
  }), {
    type: "error",
    messageId: "keyNotExists",
    values: {
      key: n
    }
  })
  if (o) {
    var i = o.findIndex(function (e) {
      return e.key === te(n)
    })
    if (i >= 0) {
      o.splice(i, 1)
    }
    var a = ne(e, t)
    Module_143.a.setItem(a, JSON.stringify(o))
    Module_91.a({
      type: Module_68.b.PLAYER_DATA_WATCH,
      data: {
        screenId: Module_48.a().getState().currentScreenId,
        tab: "",
        id: t,
        value: o
      }
    })
  }
}
function fe(e, t) {
  var n = ce(e, t)
  return n ? n.map(function (e) {
    return e.key
  }) : []
}
function he(e, t) {
  return fe(e, t).length
}
function me(e, t, n) {
  return fe(e, t).includes(te(n))
}
function ge(e, t) {
  var n = ne(e, t)
  if (Module_143.a.getItem(n)) {
    try {
      Module_143.a.setItem(n, JSON.stringify([]))
      Module_91.a({
        type: Module_68.b.PLAYER_DATA_WATCH,
        data: {
          screenId: Module_48.a().getState().currentScreenId,
          tab: Src_editor_widget_builtIn_types.B,
          id: t,
          value: Module_143.a.getItem(n)
        }
      })
    } catch (r) {}
  }
}
function _e(e, t) {
  var n
  var r = Module_47.a(t)
  try {
    for (r.s(); !(n = r.n()).done;) {
      var o = ne(e, n.value)
      if (Module_143.a.getItem(o)) {
        try {
          Module_143.a.removeItem(o)
        } catch (i) {}
      }
    }
  } catch (a) {
    r.e(a)
  } finally {
    r.f()
  }
}
var ve = {
  "zh-CN": {
    weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  },
  "zh-TW": {
    weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  },
  "en-US": {
    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }
}
function be() {
  return ye() + " " + Ee()
}
function ye() {
  var e = new Date()
  var t = e.getFullYear()
  var n = e.getMonth() + 1
  var r = e.getDate()
  n = n < 10 ? "0" + n : n
  r = r < 10 ? "0" + r : r
  return "".concat(t, "-").concat(n, "-").concat(r)
}
function Ee() {
  var e = new Date()
  var t = e.getHours()
  var n = e.getMinutes()
  var r = e.getSeconds()
  n = n < 10 ? "0" + n : n
  r = r < 10 ? "0" + r : r
  return "".concat(t = t < 10 ? "0" + t : t, ":").concat(n, ":").concat(r)
}
function Oe() {
  return new Date().getFullYear()
}
function we() {
  return new Date().getMonth() + 1
}
function Ce() {
  return new Date().getDate()
}
function Te() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "zh-CN"
  return ve[e].weekdays[new Date().getDay()]
}
function Se() {
  return new Date().getDay() || 7
}
function Ae() {
  return new Date().getHours()
}
function Ie() {
  return new Date().getMinutes()
}
function je() {
  return new Date().getSeconds()
}
export { ne }
export { re }
export { oe }
export { ie }
export { ae }
export { se }
export { ce }
export { le }
export { ue }
export { pe }
export { fe }
export { he }
export { me }
export { ge }
export { _e }
export { be }
export { ye }
export { Ee }
export { Oe }
export { we }
export { Ce }
export { Te }
export { Se }
export { Ae }
export { Ie }
export { je }
