/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-8
 */

"use strict"

import { xl } from "../../../../../src/editor/redux/store"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../47"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_127 from /* 127 */"../127"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_storage from /* 96 */"../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_shop from /* 183 */"../../../../../src/shared/widget/custom/shop"
import * as /* [auto-meaningful-name] */Module_376 from /* 376 */"./376"
import * as /* [auto-meaningful-name] */Module_219 from /* 219 */"./219/index"
import * as /* [auto-meaningful-name] */Module_147 from /* 147 */"../147"
import * as /* [auto-meaningful-name] */Module_515 from /* 515 */"./515"
import /* [auto-meaningful-name] */Module_5151 from /* 515 */"./515"
import * as /* [auto-meaningful-name] */Module_410 from /* 410 */"../410"
import * as /* [auto-meaningful-name] */Module_345 from /* 345 */"../48/345"
import * as /* [auto-meaningful-name] */Module_375 from /* 375 */"../97/375"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_restrict from /* 232 */"../../../../../src/shared/widget/custom/restrict"
import * as /* [auto-meaningful-name] */Module_144 from /* 144 */"../144"
import * as /* [auto-meaningful-name] */Module_392 from /* 392 */"../392/index"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../20/index"
import * as /* [auto-meaningful-name] */Module_174 from /* 174 */"../174"
import * as /* [auto-meaningful-name] */Module_143 from /* 143 */"./143"
import * as /* [auto-meaningful-name] */Module_110 from /* 110 */"../110"
function Ln() {
  var /* [auto-meaningful-name] */t$common$userInfo
  var t = xl.getState()
  var /* [auto-meaningful-name] */t$project$id = t.project.id
  var r = null === (t$common$userInfo = t.common.userInfo) || undefined === t$common$userInfo ? undefined : t$common$userInfo.id
  return "".concat("DATA_WATCH_VARIABLE_LIST", "_").concat(r, "_").concat(t$project$id)
}
function Pn() {
  var /* [auto-meaningful-name] */xl$getState$dataWatch$variableList = xl.getState().dataWatch.variableList
  var t = []
  try {
    var n
    var r = Module_47.a(xl$getState$dataWatch$variableList)
    try {
      for (r.s(); !(n = r.n()).done;) {
        var /* [auto-meaningful-name] */n$value = n.value
        t.push({
          id: n$value.id,
          name: n$value.name,
          screenId: n$value.screenId,
          isWatching: n$value.isWatching,
          type: n$value.type
        })
      }
    } catch (a) {
      r.e(a)
    } finally {
      r.f()
    }
    var i = JSON.stringify(t)
    Module_143.a.setItem(Ln(), i)
  } catch (s) {
    console.error("cache data watch failed", s)
  }
}
function Bn() {
  var e = Ln()
  var t = Module_143.a.getItem(e)
  var n = []
  try {
    if (t) {
      n = JSON.parse(t)
    }
  } catch (r) {
    console.error(r)
  }
  return n
}
function Fn(e) {
  var t
  var n = xl.getState()
  var /* [auto-meaningful-name] */n$project$screens = n.project.screens
  var /* [auto-meaningful-name] */n$project$id = n.project.id
  var i = []
  var a = Module_47.a(e)
  try {
    var s = function () {
      var /* [auto-meaningful-name] */t$value = t.value
      if (!t$value.isWatching) {
        return "continue"
      }
      if ("GLOBAL" !== t$value.screenId) {
        var a = n$project$screens.find(function (t) {
          return t.id === t$value.screenId
        })
        if (!a) {
          return "break"
        }
        var /* [auto-meaningful-name] */a$primitiveVariables = a.primitiveVariables
        var /* [auto-meaningful-name] */a$arrayVariables = a.arrayVariables
        var /* [auto-meaningful-name] */a$objectVariables = a.objectVariables
        if ("LIST" === t$value.type) {
          var u = a$arrayVariables.find(function (t) {
            return t.id === t$value.id
          })
          if (u) {
            i.push(Module_110.a("PRIMITIVE", u, {
              screenId: a.id
            }))
          }
        }
        if ("DICT" === t$value.type) {
          var d = a$objectVariables.find(function (t) {
            return t.id === t$value.id
          })
          if (d) {
            i.push(Module_110.a("DICT", d, {
              screenId: a.id
            }))
          }
        }
        if ("PRIMITIVE" === t$value.type) {
          var p = a$primitiveVariables.find(function (t) {
            return t.id === t$value.id
          })
          if (p) {
            i.push(Module_110.a("PRIMITIVE", p, {
              screenId: a.id
            }))
          }
        }
      } else {
        var /* [auto-meaningful-name] */n$project = n.project
        var /* [auto-meaningful-name] */n$project$globalWidgetIds = n$project.globalWidgetIds
        var /* [auto-meaningful-name] */n$project$globalObjectList = n$project.globalObjectList
        var /* [auto-meaningful-name] */n$project$globalVariableList = n$project.globalVariableList
        var /* [auto-meaningful-name] */n$project$globalArrayList = n$project.globalArrayList
        if ("LIST" === t$value.type) {
          var v = n$project$globalArrayList.find(function (t) {
            return t.id === t$value.id
          })
          if (v) {
            i.push(Module_110.a("LIST", v))
          }
        }
        if ("DICT" === t$value.type) {
          var b = n$project$globalObjectList.find(function (t) {
            return t.id === t$value.id
          })
          if (b) {
            i.push(Module_110.a("DICT", b))
          }
        }
        if ("PRIMITIVE" === t$value.type) {
          var y = n$project$globalVariableList.find(function (t) {
            return t.id === t$value.id
          })
          if (y) {
            i.push(Module_110.a("PRIMITIVE", y))
          }
        }
        if (n$project$globalWidgetIds.includes(t$value.id)) {
          var E = Module_9.Bb(t$value.id)
          if (t$value.type === Src_editor_widget_builtIn_types.B || t$value.type === Src_editor_widget_builtIn_types.y) {
            var O = Module_20.getLocalDocumentObject(n$project$id, t$value.id) || E.attributes.fields
            i.push(Module_110.a(t$value.type, {
              id: t$value.id,
              name: t$value.name,
              value: O,
              defaultValue: "no-use"
            }))
          } else if (t$value.type === Src_editor_widget_builtIn_types.G) {
            i.push(Module_110.a(Src_editor_widget_builtIn_types.G, {
              id: t$value.id,
              name: t$value.name,
              value: {
                header: [],
                data: []
              },
              defaultValue: "no-use"
            }))
          }
        }
      }
    }
    for (a.s(); !(t = a.n()).done;) {
      var l = s()
      if ("continue" !== l && "break" === l) {
        break
      }
    }
  } catch (f) {
    a.e(f)
  } finally {
    a.f()
  }
  for (var u = 0, d = i; u < d.length; u++) {
    var p = d[u]
    xl.dispatch(Src_editor_redux_common_actions.Pj(p.id, "isWatching", true))
    xl.dispatch(Src_editor_redux_common_actions.Pj(p.id, "selected", true))
  }
}
function Gn() {
  var e = Ln()
  return Module_143.a.removeItem(e)
}
export { Pn }
export { Bn }
export { Fn }
export { Gn }
