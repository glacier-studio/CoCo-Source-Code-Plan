/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-79
 */

"use strict"

import { yg } from "./index__part-150"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"./64/index"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"./53"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_123 from /* 123 */"./123/index"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37/index"
function Sg(e) {
  var t = Module_37.b()
  return [
    {
      validator: function (e) {
        return !!e
      },
      message: e ? e({
        id: "invalidVariableNoValue"
      }) : Src_shared_ui_language.c(t, "invalidVariableNoValue")
    }, {
      validator: function (e) {
        return Module_53.A.test(e)
      },
      message: e ? e({
        id: "invalidVariableFirstChar"
      }) : Src_shared_ui_language.c(t, "invalidVariableFirstChar")
    }, {
      validator: function (e) {
        return Module_53.B.test(e)
      },
      message: e ? e({
        id: "invalidVariableName"
      }) : Src_shared_ui_language.c(t, "invalidVariableName")
    }, {
      validator: function (e) {
        return e.length <= 20
      },
      message: e ? e({
        id: "invalidVariableMaxLengthTips"
      }) : Src_shared_ui_language.c(t, "invalidVariableMaxLengthTips")
    }
  ]
}
var Ag
var Ig = {
  type: "basic",
  value: Module_9.h,
  text: Module_9.g
}
function jg(e, t) {
  var /* [auto-meaningful-name] */c$invisibleWidgetIds
  var r = yg()
  var /* [auto-meaningful-name] */r$project = r.project
  var /* [auto-meaningful-name] */r$project$screens = r$project.screens
  var /* [auto-meaningful-name] */r$project$currentScreenIndex = r$project.currentScreenIndex
  var /* [auto-meaningful-name] */r$project$globalWidgetIds = r$project.globalWidgetIds
  var c = r$project$screens.get(r$project$currentScreenIndex)
  var /* [auto-meaningful-name] */r$common$language = r.common.language
  var u = []
  if (c && c.widgetIds.length > 0) {
    c.widgetIds.forEach(function (n) {
      var r = Module_9.dc.get(n)
      if (r && r.type === e) {
        if (r.parentId && (e === Src_editor_widget_builtIn_types.H || e === Src_editor_widget_builtIn_types.v)) {
          return
        }
        if (t && t !== r.parentId) {
          return
        }
        u.push([Module_9.Fb(r.id) || Src_shared_ui_language.c(r$common$language, "untitled"), n])
      }
    })
  }
  if (c && (null === (c$invisibleWidgetIds = c.invisibleWidgetIds) || undefined === c$invisibleWidgetIds ? undefined : c$invisibleWidgetIds.length) > 0) {
    c.invisibleWidgetIds.forEach(function (t) {
      var n = Module_9.dc.get(t)
      if (n && n.type === e) {
        u.push([Module_9.Fb(n.id) || Src_shared_ui_language.c(r$common$language, "untitled"), t])
      }
    })
  }
  if ((null === r$project$globalWidgetIds || undefined === r$project$globalWidgetIds ? undefined : r$project$globalWidgetIds.length) > 0) {
    r$project$globalWidgetIds.forEach(function (t) {
      var n = Module_9.dc.get(t)
      if (n && n.type === e) {
        u.push([Module_9.Fb(n.id) || Src_shared_ui_language.c(r$common$language, "untitled"), t])
      }
    })
  }
  if (0 === u.length) {
    u.push([Module_9.g, Module_9.h])
  }
  return u
}
function Ng() {
  var /* [auto-meaningful-name] */yg$common$language = yg().common.language
  var t = []
  Module_9.jb().forEach(function (e) {
    t.push({
      type: "basic",
      text: e.id,
      value: e.id
    })
  })
  var n = Src_shared_ui_language.c(yg$common$language, "emptyImage")
  var r = {
    type: "basic",
    value: Module_9.f,
    text: n
  }
  t.push(Ig)
  t.push(r)
  return t
}
function Rg() {
  var e = []
  Module_9.gb().forEach(function (t) {
    e.push({
      type: "basic",
      text: t.name + ".svg",
      value: t.id
    })
  })
  e.push(Ig)
  return e
}
function kg(e) {
  var /* [auto-meaningful-name] */yg$common$language = yg().common.language
  var n = []
  if (e) {
    var r = Module_9.Bb(e)
    if (r) {
      var /* [auto-meaningful-name] */r$attributes$actionList = r.attributes.actionList;
      (undefined === r$attributes$actionList ? [] : r$attributes$actionList).forEach(function (e) {
        n.push({
          type: "basic",
          text: e.name,
          value: e.id
        })
      })
    }
  }
  var i = {
    type: "basic",
    text: Src_shared_ui_language.c(yg$common$language, "ActorStyleDialog.addAction"),
    value: "DROPDOWN_ADD_BUTTON",
    callback: function () {}
  }
  return [].concat(n, [i])
}
function xg(e, t) {
  var n = []
  if (e) {
    var r = Module_9.Bb(e)
    if (r) {
      var o
      var /* [auto-meaningful-name] */r$attributes$actionList = r.attributes.actionList
      var a = undefined === r$attributes$actionList ? [] : r$attributes$actionList
      var s = a.find(function (e) {
        return e.id === t
      })
      if (!(null === (o = s = s || a[0]) || undefined === o)) {
        o.styleList.forEach(function (e, t) {
          n.push({
            type: "basic",
            text: "造型".concat(t + 1),
            value: e.id,
            icon: Lg("rgb(231, 108, 234)", t + 1)
          })
        })
      }
    }
  }
  if (!n.length) {
    n.push(Ig)
  }
  var /* [auto-meaningful-name] */yg$common$language = yg().common.language
  var l = {
    type: "basic",
    text: Src_shared_ui_language.c(yg$common$language, "actorAddStyle"),
    value: "DROPDOWN_ADD_BUTTON",
    callback: function () {}
  }
  return [].concat(n, [l])
}
function Dg(e) {
  var t = yg()
  var /* [auto-meaningful-name] */t$project = t.project
  var /* [auto-meaningful-name] */t$project$screens = t$project.screens
  var /* [auto-meaningful-name] */t$project$currentScreenIndex = t$project.currentScreenIndex
  var /* [auto-meaningful-name] */t$project$globalVariableList = t$project.globalVariableList
  var a = t$project$screens.get(t$project$currentScreenIndex)
  if (!a) {
    return []
  }
  var /* [auto-meaningful-name] */t$common$language = t.common.language
  var c = []
  if (t$project$globalVariableList && t$project$globalVariableList.length) {
    t$project$globalVariableList.forEach(function (e) {
      c.push({
        type: "basic",
        text: e.name,
        value: e.id
      })
    })
    c.push({
      type: "line"
    })
  }
  if (a.primitiveVariables.length) {
    var l = Pg(t$project$currentScreenIndex + 1, "#ffbb55", .8)
    a.primitiveVariables.forEach(function (e) {
      c.push({
        type: "basic",
        text: e.name,
        value: e.id,
        icon: {
          src: l.src,
          width: l.width,
          height: l.height,
          margin_right: 4
        }
      })
    })
    c.push({
      type: "line"
    })
  }
  if (!c.length) {
    c.push(Ig)
  }
  var u = {
    type: "basic",
    text: Src_shared_ui_language.c(t$common$language, "addPrimitiveVariableName"),
    value: "DROPDOWN_ADD_BUTTON",
    callback: function () {
      Module_37.a(Src_editor_redux_common_actions.nj({
        title: "addPrimitiveVariableName",
        placeholder: Src_shared_ui_language.c(t$common$language, "addPrimitiveVariableNamePlaceholder"),
        onConfirm: function (t, n) {
          Module_37.a(Src_editor_redux_common_actions.uf(n, Module_64.a("VARIABLE"), t, 0, a.id, 0, function (t) {
            e.set_value(t)
          }))
        },
        validators: [
          {
            validator: function (e, t) {
              var n = a.primitiveVariables.concat(t$project$globalVariableList)
              if (t === Module_18.i.GLOBAL) {
                t$project$screens.forEach(function (e) {
                  n = n.concat(e.primitiveVariables)
                })
              }
              return !n.some(function (t) {
                return t.name === e
              })
            },
            message: Src_shared_ui_language.c(t$common$language, "primitiveVariableNameRepeat")
          }
        ].concat(Module_25.a(Sg()))
      }))
    }
  }
  return [].concat(c, [u])
}
function Mg(e) {
  var t = yg()
  var /* [auto-meaningful-name] */t$project = t.project
  var /* [auto-meaningful-name] */t$project$screens = t$project.screens
  var /* [auto-meaningful-name] */t$project$currentScreenIndex = t$project.currentScreenIndex
  var /* [auto-meaningful-name] */t$project$globalArrayList = t$project.globalArrayList
  var a = t$project$screens.get(t$project$currentScreenIndex)
  if (!a) {
    return []
  }
  var /* [auto-meaningful-name] */t$common$language = t.common.language
  var c = []
  if (t$project$globalArrayList && t$project$globalArrayList.length) {
    t$project$globalArrayList.forEach(function (e) {
      c.push({
        type: "basic",
        text: e.name,
        value: e.id
      })
    })
    c.push({
      type: "line"
    })
  }
  if (a.arrayVariables.length) {
    var l = Pg(t$project$currentScreenIndex + 1, "#f9cc37", 1)
    a.arrayVariables.forEach(function (e) {
      c.push({
        type: "basic",
        text: e.name,
        value: e.id,
        icon: {
          src: l.src,
          width: l.width,
          height: l.height,
          margin_right: 4
        }
      })
    })
    c.push({
      type: "line"
    })
  }
  if (!c.length) {
    c.push(Ig)
  }
  var u = {
    type: "basic",
    text: Src_shared_ui_language.c(t$common$language, "addArrayVariableName"),
    value: "DROPDOWN_ADD_BUTTON",
    callback: function () {
      Module_37.a(Src_editor_redux_common_actions.nj({
        title: "addArrayVariableName",
        placeholder: Src_shared_ui_language.c(t$common$language, "addArrayVariableNamePlaceholder"),
        onConfirm: function (t, n) {
          Module_37.a(Src_editor_redux_common_actions.of(n, Module_64.a("VARIABLE"), t, [], a.id, 0, function (t) {
            e.set_value(t)
          }))
        },
        validators: [
          {
            validator: function (e, t) {
              var n = a.arrayVariables.concat(t$project$globalArrayList)
              if (t === Module_18.i.GLOBAL) {
                t$project$screens.forEach(function (e) {
                  n = n.concat(e.arrayVariables)
                })
              }
              return !n.some(function (t) {
                return t.name === e
              })
            },
            message: Src_shared_ui_language.c(t$common$language, "arrayVariableNameRepeat")
          }
        ].concat(Module_25.a(Sg()))
      }))
    }
  }
  return [].concat(c, [u])
}
!function (e) {
  e.NO_BIND_DATA_SOURCE = "NO_BIND_DATA_SOURCE"
  e.EMPTY_KEYS_DATA = "EMPTY_KEYS_DATA"
  e.FETCH_DATA_FAILED = "FETCH_DATA_FAILED"
}(Ag || (Ag = {}))
function Lg(e, t) {
  var n = Module_123.create_svg_element("g", {
    class: "blocklyVariableDropdownIcon",
    "data-icon-id": "#icon-screen-variable"
  })
  var /* [auto-meaningful-name] */T0$toString$length = (t || 0).toString().length
  var o = 16 + 4 * T0$toString$length
  var i = 10 + T0$toString$length
  var a = t ? t > 999 ? 999 : t : ""
  n.innerHTML = "\n    <svg style=\"fill:".concat(e, "\" class=\"icon\" aria-hidden=\"true\">\n      <text class=\"blocklyText\" dominant-baseline=\"central\" text-anchor=\"middle\" style=\"fill:").concat(e, ";font-size:14px;font-weight: 900;\" y=\"8.75\" x=\"").concat(i, "\">").concat(a, ".</text>\n    </svg>\n  ")
  return {
    src: n,
    width: o,
    height: 16
  }
}
function Pg(e, t, n) {
  var r = Module_123.create_svg_element("g", {
    "data-icon-id": "__CUSTOM__".concat("broadcast_scene_index"),
    "font-size": "16"
  })
  var o = e > 9 ? 20 : 24
  var i = e > 9 ? 20 : 24
  r.innerHTML = "\n    <svg style=\"fill:".concat(t, "\" opacity=\"").concat(n, "\" aria-hidden=\"true\">\n      <use xlink:href=\"").concat(e > 9 ? "#icon-screen-variable-plus" : "#icon-screen-variable", "\"></use>\n        <g fill='#fff' transform=\"translate(").concat(i / 2, ", ").concat(o / 2, ") scale(0.625 0.625)\" >\n          <text dominant-baseline=\"middle\" text-anchor=\"middle\" font-family=\"sans-serif\">").concat(e, "</text>\n        </g>\n    </svg>\n  ")
  return {
    src: r,
    width: i,
    height: o
  }
}
function Bg(e) {
  var t = yg()
  var /* [auto-meaningful-name] */t$project = t.project
  var /* [auto-meaningful-name] */t$project$screens = t$project.screens
  var /* [auto-meaningful-name] */t$project$currentScreenIndex = t$project.currentScreenIndex
  var /* [auto-meaningful-name] */t$project$globalObjectList = t$project.globalObjectList
  var a = t$project$screens.get(t$project$currentScreenIndex)
  if (!a) {
    return []
  }
  var /* [auto-meaningful-name] */t$common$language = t.common.language
  var c = []
  if (t$project$globalObjectList && t$project$globalObjectList.length) {
    t$project$globalObjectList.forEach(function (e) {
      c.push({
        type: "basic",
        text: e.name,
        value: e.id
      })
    })
    c.push({
      type: "line"
    })
  }
  if (a.objectVariables.length) {
    var l = Pg(t$project$currentScreenIndex + 1, "#a073ff", .6)
    a.objectVariables.forEach(function (e) {
      c.push({
        type: "basic",
        text: e.name,
        value: e.id,
        icon: {
          src: l.src,
          width: l.width,
          height: l.height,
          margin_right: 4
        }
      })
    })
    c.push({
      type: "line"
    })
  }
  if (!c.length) {
    c.push(Ig)
  }
  var u = {
    type: "basic",
    text: Src_shared_ui_language.c(t$common$language, "object.createNewObject"),
    value: "DROPDOWN_ADD_BUTTON",
    callback: function () {
      Module_37.a(Src_editor_redux_common_actions.nj({
        title: "object.createNewObject",
        placeholder: Src_shared_ui_language.c(t$common$language, "object.createNewObjectNamePlaceholder"),
        onConfirm: function (t, n) {
          Module_37.a(Src_editor_redux_common_actions.tf({
            scopeType: n,
            id: Module_64.a("OBJECT"),
            name: t,
            defaultValue: {},
            screenId: a.id,
            index: 0,
            setBlockValue: function (t) {
              e.set_value(t)
            }
          }))
        },
        validators: [
          {
            validator: function (e, t) {
              var n = a.objectVariables.concat(t$project$globalObjectList)
              if (t === Module_18.i.GLOBAL) {
                t$project$screens.forEach(function (e) {
                  n = n.concat(e.arrayVariables)
                })
              }
              return !n.some(function (t) {
                return t.name === e
              })
            },
            message: Src_shared_ui_language.c(t$common$language, "object.nameRepeat")
          }
        ].concat(Module_25.a(Sg()))
      }))
    }
  }
  return [].concat(c, [u])
}
function Fg() {
  var e = []
  Module_9.pb().forEach(function (t) {
    e.push({
      type: "basic",
      text: t.title,
      value: t.id
    })
  })
  return e
}
function Gg() {
  var e = []
  Module_9.X().forEach(function (t) {
    e.push({
      type: "basic",
      text: t.title,
      value: t.id
    })
  })
  return e
}
function Wg(e, t) {
  var n = []
  return e ? (Module_9.V(e).slice().forEach(function (e) {
    if (e.id) {
      n.push({
        type: "basic",
        text: e.name,
        value: e.id
      })
    }
  }), n.length || n.push(Ig), [].concat(n)) : [Ig]
}
function Ug(e, t) {
  var /* [auto-meaningful-name] */yg$common$language = yg().common.language
  var r = []
  if (!e) {
    return [Ig]
  }
  var o = Module_9.yb(e)
  o.slice().reverse().forEach(function (e) {
    if (e.key) {
      r.push({
        type: "basic",
        text: e.key,
        value: e.id
      })
    }
  })
  if (!r.length) {
    r.push(Ig)
  }
  var i = {
    type: "basic",
    text: Src_shared_ui_language.c(yg$common$language, "addDocKey"),
    value: "DROPDOWN_ADD_BUTTON",
    callback: function () {
      Module_37.a(Src_editor_redux_common_actions.nj({
        title: "addDocKey",
        placeholder: Src_shared_ui_language.c(yg$common$language, "addDocKeyPlaceholder"),
        onConfirm: function (n) {
          if (o) {
            var r
            var i = Module_64.a("DOC_KEY")
            var a = o.concat([
              {
                id: i,
                value: "",
                key: n,
                type: "string"
              }
            ])
            Module_37.a(Src_editor_redux_common_actions.Lg(e, "fields", a, false, true))
            if (t) {
              t.set_value(i)
            }
            Module_37.a(Src_editor_redux_common_actions.Qj())
            if (!(null === (r = Module_26.g.getToolbox()) || undefined === r)) {
              r.refresh_selection()
            }
          }
        },
        validators: [
          {
            validator: function (e) {
              return !!o && !o.some(function (t) {
                return t.key === e
              })
            },
            message: Src_shared_ui_language.c(yg$common$language, "storageKeyExisted")
          }
        ],
        inputLength: 150
      }))
    }
  }
  return [].concat(r, [i])
}
function Hg() {
  var e = []
  Module_9.bb().forEach(function (t) {
    e.push({
      type: "basic",
      text: t.title,
      value: t.id
    })
  })
  return e
}
function Vg(e, t) {
  var n = yg()
  var /* [auto-meaningful-name] */n$common$language = n.common.language
  var o = []
  if (!e) {
    return [Ig]
  }
  var i = Module_9.yb(e)
  i.slice().reverse().forEach(function (e) {
    if (e.key) {
      o.push({
        type: "basic",
        text: e.key,
        value: e.key
      })
    }
  })
  if (!o.length) {
    o.push(Ig)
  }
  var a = function (e) {
    if (t) {
      t.set_value(e)
    }
  }
  var /* [auto-meaningful-name] */n$common$userInfo = n.common.userInfo
  var c = {
    type: "basic",
    text: Src_shared_ui_language.c(n$common$language, "addDocKey"),
    value: "DROPDOWN_ADD_BUTTON",
    callback: function () {
      if (n$common$userInfo) {
        Module_37.a(Src_editor_redux_common_actions.nj({
          title: "addDocKey",
          placeholder: Src_shared_ui_language.c(n$common$language, "addDocKeyPlaceholder"),
          onConfirm: function (t) {
            if (i) {
              var n
              var r = Module_64.a("DOC_KEY")
              var o = i.concat([
                {
                  id: r,
                  value: "",
                  key: t,
                  type: "string"
                }
              ])
              Module_37.a(Src_editor_redux_common_actions.Cg(e, o, a))
              if (!(null === (n = Module_26.g.getToolbox()) || undefined === n)) {
                n.refresh_selection()
              }
            }
          },
          validators: [
            {
              validator: function (e) {
                return !!i && !i.some(function (t) {
                  return t.key === e
                })
              },
              message: Src_shared_ui_language.c(n$common$language, "storageKeyExisted")
            }
          ],
          inputLength: 150
        }))
      } else {
        Module_37.a(Src_editor_redux_common_actions.Ch())
      }
    }
  }
  return [].concat(o, [c])
}
function zg(e) {
  var t = yg()
  var /* [auto-meaningful-name] */t$project = t.project
  var /* [auto-meaningful-name] */t$project$screens = t$project.screens
  var /* [auto-meaningful-name] */t$project$currentScreenIndex = t$project.currentScreenIndex
  var i = t$project$screens.get(t$project$currentScreenIndex)
  if (!i) {
    return []
  }
  var /* [auto-meaningful-name] */t$common$language = t.common.language
  var s = Pg(t$project$currentScreenIndex + 1, "#608fee", .6)
  var c = []
  if (i.broadcasts.length) {
    i.broadcasts.forEach(function (e) {
      c.push({
        type: "basic",
        text: e,
        value: e,
        icon: {
          src: s.src,
          width: s.width,
          height: s.height,
          margin_right: 4
        }
      })
    })
  } else {
    c.push(Ig)
  }
  var l = {
    type: "basic",
    text: Src_shared_ui_language.c(t$common$language, "addBroadcast"),
    value: "DROPDOWN_ADD_BUTTON",
    callback: function () {
      Module_37.a(Src_editor_redux_common_actions.nj({
        title: Src_shared_ui_language.c(t$common$language, "addBroadcastTitle", {
          scene: i ? i.title : ""
        }),
        placeholder: Src_shared_ui_language.c(t$common$language, "addBroadcastTitlePlaceholder"),
        tips: Src_shared_ui_language.c(t$common$language, "addBroadcastOnlyCurrentScreenTips"),
        onConfirm: function (t) {
          var n
          Module_37.a(Src_editor_redux_common_actions.pf(t, i.id, 0, function (t) {
            e.set_value(t)
          }))
          if (!(null === (n = Module_26.g.getToolbox()) || undefined === n)) {
            n.refresh_selection()
          }
        },
        validators: [
          {
            validator: function (e) {
              return !i.broadcasts.includes(e.trim())
            },
            message: Src_shared_ui_language.c(t$common$language, "broadcastExisted")
          }, {
            validator: function (e) {
              return "" !== e.trim()
            },
            message: Src_shared_ui_language.c(t$common$language, "broadcastCannotBeSpace")
          }, {
            validator: function (e) {
              return Module_53.t.test(e)
            },
            message: Src_shared_ui_language.c(t$common$language, "broadcastInvalid")
          }
        ]
      }))
    }
  }
  return [].concat(c, [l])
}
function Yg() {
  var /* [auto-meaningful-name] */yg$project$screens = yg().project.screens
  var t = []
  yg$project$screens.forEach(function (e, n) {
    t.push({
      type: "basic",
      text: e.title,
      value: e.id,
      icon: Lg("#608fee", n + 1),
      snapshot: {
        width: 40,
        height: 40,
        src: e.snapshot
      }
    })
  })
  return t
}
function Kg() {
  var /* [auto-meaningful-name] */yg$resource$soundFileList = yg().resource.soundFileList
  var t = []
  if (yg$resource$soundFileList.size) {
    yg$resource$soundFileList.forEach(function (e) {
      t.push({
        type: "basic",
        text: e.name,
        value: e.id
      })
    })
  } else {
    t.push(Ig)
  }
  return t
}
function qg() {
  return yg().block.slider.visible
}
function Xg(e, t) {
  var n = []
  if (e) {
    var r = Module_9.Bb(e)
    if (r) {
      var /* [auto-meaningful-name] */i$attributes
      var i = r
      if (null === (i$attributes = i.attributes) || undefined === i$attributes ? undefined : i$attributes.templateSlotMap) {
        Object.keys(i.attributes.templateSlotMap).reverse().forEach(function (e) {
          var r = Module_9.Bb(i.attributes.templateSlotMap[e].widgetId)
          if (!(t && t !== (null === r || undefined === r ? undefined : r.type))) {
            n.push({
              type: "basic",
              text: i.attributes.templateSlotMap[e].label,
              value: e
            })
          }
        })
      }
    }
  }
  return n
}
function Qg(e) {
  var t = yg()
  var /* [auto-meaningful-name] */t$project$globalWidgetIds = t.project.globalWidgetIds
  var /* [auto-meaningful-name] */t$common$language = t.common.language
  var o = []
  var i = []
  t$project$globalWidgetIds.forEach(function (e) {
    var t = Module_9.Bb(e)
    if ((null === t || undefined === t ? undefined : t.type) === Src_editor_widget_builtIn_types.m) {
      i.push(t)
    }
  })
  if (i.length) {
    i.forEach(function (e) {
      o.push({
        type: "basic",
        text: e.title,
        value: e.id
      })
    })
  } else {
    o.push(Ig)
  }
  var a = {
    type: "basic",
    text: Src_shared_ui_language.c(t$common$language, "addGridName"),
    value: "DROPDOWN_ADD_BUTTON",
    callback: function () {
      Module_37.a(Src_editor_redux_common_actions.nj({
        title: Src_shared_ui_language.c(t$common$language, "addGridName"),
        placeholder: Src_shared_ui_language.c(t$common$language, "addGridNamePlaceholder"),
        onConfirm: function () {
          var t = Module_7.a(RegeneratorRuntime.mark(function t(n) {
            var r
            return RegeneratorRuntime.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    Module_37.a(Src_editor_redux_common_actions.hg("", Src_editor_widget_builtIn_types.m, {
                      x: 0,
                      y: 0
                    }, {
                      name: n
                    }, function (t) {
                      e.set_value(t)
                    }))
                    if (!(null === (r = Module_26.g.getToolbox()) || undefined === r)) {
                      r.refresh_selection()
                    }
                  case 2:
                  case "end":
                    return t.stop()
                }
              }
            }, t)
          }))
          return function (e) {
            return t.apply(this, arguments)
          }
        }(),
        validators: [
          {
            validator: function (e) {
              var t = []
              t$project$globalWidgetIds.forEach(function (e) {
                var n = Module_9.dc.get(e)
                if ((null === n || undefined === n ? undefined : n.type) === Src_editor_widget_builtIn_types.m) {
                  t.push(n)
                }
              })
              return !t.some(function (t) {
                return t.title === e
              })
            },
            message: Src_shared_ui_language.c(t$common$language, "gridNameRepeat")
          }
        ].concat(Module_25.a(Sg()))
      }))
    }
  }
  return [].concat(o, [a])
}
function Zg(e) {
  if (!e) {
    return [Ig]
  }
  var t = Module_9.Bb(e)
  if (!t) {
    return [Ig]
  }
  var n = []
  if (t.type === Src_editor_widget_builtIn_types.G) {
    for (var r in t.attributes.db.header) n.push({
      type: "basic",
      text: t.attributes.db.header[r].field,
      value: r
    })
  }
  return n
}
function Jg(e, t) {
  var n
  var r = [Ig]
  if (!e) {
    return r
  }
  var o = yg()
  var /* [auto-meaningful-name] */o$common$language = o.common.language
  var a = Module_9.Z(e)
  if (!a) {
    var s = {
      type: "basic",
      value: Ag.NO_BIND_DATA_SOURCE,
      text: Src_shared_ui_language.c(o$common$language, "cloudSpace.NotBindDataSource")
    }
    r.push(s)
    return r
  }
  var c = null === (n = o.cloudSpace.cloudDictKeysList.find(function (e) {
    return e.id === a
  })) || undefined === n ? undefined : n.data
  if (!c) {
    var l = function () {
      var e = Module_7.a(RegeneratorRuntime.mark(function e() {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return Src_editor_redux_common_actions.Nf(Module_37.a, Src_editor_redux_common_actions.Pf(a, true))
              case 2:
                if (!(null === t || undefined === t)) {
                  t.show_editor()
                }
              case 3:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function () {
        return e.apply(this, arguments)
      }
    }()
    var u = {
      type: "basic",
      value: Ag.FETCH_DATA_FAILED,
      text: Src_shared_ui_language.c(o$common$language, "cloudSpace.fetchDataFailed"),
      callback: l
    }
    r.push(u)
    return r
  }
  if (0 === c.length) {
    var d = {
      type: "basic",
      value: Ag.EMPTY_KEYS_DATA,
      text: Src_shared_ui_language.c(o$common$language, "cloudSpace.emptyKeysData")
    }
    r.push(d)
    return r
  }
  c.slice().forEach(function (e) {
    r.push({
      type: "basic",
      text: e.key,
      value: e.key
    })
  })
  return r
}
function $g(e, t) {
  if (!e) {
    return [Ig]
  }
  var n = yg()
  var /* [auto-meaningful-name] */n$common$language = n.common.language
  var o = Module_9.db(e)
  if (!o) {
    var i = {
      type: "basic",
      value: Ag.NO_BIND_DATA_SOURCE,
      text: Src_shared_ui_language.c(n$common$language, "cloudSpace.NotBindDataSource")
    }
    return [Ig, i]
  }
  var a = n.cloudSpace.cloudTableColumnList.find(function (e) {
    return e.id === o
  })
  if (!a) {
    var s = function () {
      var e = Module_7.a(RegeneratorRuntime.mark(function e() {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return Src_editor_redux_common_actions.Nf(Module_37.a, Src_editor_redux_common_actions.Rf(o, true))
              case 2:
                if (!(null === t || undefined === t)) {
                  t.show_editor()
                }
              case 3:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function () {
        return e.apply(this, arguments)
      }
    }()
    var c = {
      type: "basic",
      value: Ag.FETCH_DATA_FAILED,
      text: Src_shared_ui_language.c(n$common$language, "cloudSpace.fetchDataFailed"),
      callback: s
    }
    return [Ig, c]
  }
  if (0 === a.columns.length) {
    var l = {
      type: "basic",
      value: Ag.EMPTY_KEYS_DATA,
      text: Src_shared_ui_language.c(n$common$language, "cloudSpace.emptyColumnsData")
    }
    return [Ig, l]
  }
  var u = [Ig]
  a.columns.forEach(function (e) {
    u.push({
      type: "basic",
      text: e.name,
      value: e.name
    })
  })
  return u
}
export { Sg }
export { Ag }
export { jg }
export { Ng }
export { Rg }
export { kg }
export { xg }
export { Dg }
export { Mg }
export { Bg }
export { Fg }
export { Gg }
export { Wg }
export { Ug }
export { Hg }
export { Vg }
export { zg }
export { Yg }
export { Kg }
export { qg }
export { Xg }
export { Qg }
export { Zg }
export { Jg }
export { $g }
