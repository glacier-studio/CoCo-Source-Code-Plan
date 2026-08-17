/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：33__part-1
 */

"use strict"

import { Se } from "../../../../unrestored/shared/1571/2636/33__part-3"
var r
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../unrestored/shared/1571/2636/11"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../../../unrestored/shared/1571/2636/47"
import * as /* [auto-meaningful-name] */Module_42 from /* 42 */"../../../../unrestored/shared/1571/2636/42/index"
import * as /* [auto-meaningful-name] */BuiltIn_types from /* 5 */"../built-in/types"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../../../../unrestored/shared/1571/2636/64/index"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_83 from /* 83 */"../../../../unrestored/shared/1571/2636/83"
import * as /* [auto-meaningful-name] */Module_314 from /* 314 */"../../../../unrestored/shared/1571/2636/314"
import * as /* [auto-meaningful-name] */Module_95 from /* 95 */"../../../../unrestored/shared/1571/2636/95"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"../../../../unrestored/shared/1571/2636/133/index"
import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"../../../../unrestored/shared/1571/2636/75"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../../../../unrestored/shared/1571/2636/53"
!function (e) {
  e[e.UI = 0] = "UI"
  e[e.STAGE = 1] = "STAGE"
  e[e.MEDIA = 2] = "MEDIA"
  e[e.SENSOR = 3] = "SENSOR"
  e[e.DATE = 4] = "DATE"
  e[e.LOCAL_STORAGE = 5] = "LOCAL_STORAGE"
  e[e.CLOUD_STORAGE = 6] = "CLOUD_STORAGE"
  e[e.NETWORK = 7] = "NETWORK"
  e[e.EXTENSION = 8] = "EXTENSION"
  e[e.DATABASE = 9] = "DATABASE"
  e[e.SOCIAL = 10] = "SOCIAL"
  e[e.CLOUD_SPACE = 11] = "CLOUD_SPACE"
}(r || (r = {}))
var T = new Map()
var S = new Map()
function A(e, t) {
  t.forEach(function (t) {
    var /* [auto-meaningful-name] */t$type = t.type
    if (T.has(t$type)) {
      console.error("Component ".concat(t$type, " is registered"))
    } else {
      T.set(t$type, t)
      var r = S.get(e) || []
      r.push(t)
      S.set(e, r)
    }
  })
}
function I() {
  var e = []
  T.forEach(function (t) {
    e.push(t)
  })
  return e
}
function j() {
  var e = []
  T.forEach(function (t) {
    return e.push(t.type)
  })
  return e
}
function N(e) {
  return T.get(e)
}
function R(e) {
  return S.get(e) || []
}
function k(e) {
  var t
  if (!(null === (t = S.get(e)) || undefined === t)) {
    t.forEach(function (t) {
      !function (e, t) {
        if (T.has(t)) {
          T.delete(t)
          var n = (S.get(e) || []).filter(function (e) {
            return e.type !== t
          })
          S.set(e, n)
        } else {
          console.error("Component ".concat(t, " is not registered"))
        }
      }(e, t.type)
    })
  }
  S.delete(e)
}
function x() {
  var e = []
  Module_42.g.forEach(function (t) {
    if (!(t.type !== BuiltIn_types.y && t.type !== BuiltIn_types.B)) {
      e.push({
        id: t.id,
        title: t.title
      })
    }
  })
  return e
}
function D() {
  var e = []
  Module_42.g.forEach(function (t) {
    if (t.type === BuiltIn_types.l) {
      e.push({
        id: t.id,
        title: t.title
      })
    }
  })
  return e
}
function M() {
  var e = []
  Module_42.g.forEach(function (t) {
    if (t.type === BuiltIn_types.h) {
      e.push({
        id: t.id,
        title: t.title
      })
    }
  })
  return e
}
function L(e) {
  var t = Se(e)
  if (t && (t.type === BuiltIn_types.y || t.type === BuiltIn_types.B || t.type === BuiltIn_types.l)) {
    var /* [auto-meaningful-name] */t$attributes$fields = t.attributes.fields
    return undefined === n ? [] : n
  }
  return []
}
function P(e) {
  var t = Se(e)
  return t && t.type === BuiltIn_types.l ? t.attributes.cloudDbId : null
}
function B(e) {
  var t = Se(e)
  return t && t.type === BuiltIn_types.h ? t.attributes.columns : []
}
function F(e) {
  var t = Se(e)
  return t && t.type === BuiltIn_types.h ? t.attributes.cloudDbId : null
}
function G(e) {
  var t = Se(e)
  return t && t.type === BuiltIn_types.k ? t.attributes.cloudTableId : null
}
function W(e) {
  var t = Se(e)
  return t && t.type === BuiltIn_types.j ? t.attributes.cloudDictId : null
}
export { r }
export { A }
export { I }
export { j }
export { N }
export { R }
export { k }
export { x }
export { D }
export { M }
export { L }
export { P }
export { B }
export { F }
export { G }
export { W }
