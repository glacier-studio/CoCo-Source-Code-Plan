/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-149
 */

"use strict"

import { Sg } from "../../../../../../unrestored/shared/1571/2636/index__part-79"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../../../../../../unrestored/shared/1571/2636/64/index"
import * as /* [auto-meaningful-name] */Shared_packages_Crc_blink_src_index from /* 17 */"../../../../../shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"../../../../../../unrestored/shared/1571/2636/49"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../../../unrestored/shared/1571/2636/25/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Shared_ui_language from /* 23 */"../../../../../shared/ui/language"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1525 from /* 1525 */"../../../../../../unrestored/shared/1571/2636/1525"
import /* [auto-meaningful-name] */Module_15251 from /* 1525 */"../../../../../../unrestored/shared/1571/2636/1525"
import * as /* [auto-meaningful-name] */VariablePanel_styles_module_css from /* 236 */"./VariablePanel/styles.module.css"
import /* [auto-meaningful-name] */VariablePanel_styles_module_css1 from /* 236 */"./VariablePanel/styles.module.css"
var RT = memo(function (e) {
  var /* [auto-meaningful-name] */e$variableType = e.variableType
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = useState(true)
  var o = Module_10.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = useState("")
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState("")
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState("")
  var b = Module_10.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = useState(false)
  var w = Module_10.a(O, 2)
  var C = w[0]
  var j = w[1]
  var R = useState([])
  var k = Module_10.a(R, 2)
  var D = k[0]
  var M = k[1]
  var L = useState([])
  var P = Module_10.a(L, 2)
  var B = P[0]
  var F = P[1]
  var G = useState([])
  var W = Module_10.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = useDispatch()
  var q = Module_238.d()
  var X = useSelector(function (e) {
    return e.common.language
  })
  var Q = useSelector(function (e) {
    return e.project.globalVariableList
  })
  var Z = useSelector(function (e) {
    return e.project.globalArrayList
  })
  var J = useSelector(function (e) {
    return e.project.globalObjectList
  })
  var $ = useSelector(function (e) {
    return e.project.screens
  })
  useEffect(function () {
    if (q) {
      M(q.primitiveVariables)
      F(q.arrayVariables)
      H(q.objectVariables)
      if (e$variableType === Module_18.b.PRIMITIVE && 0 === q.primitiveVariables.length && 0 === Q.length || e$variableType === Module_18.b.ARRAY && 0 === q.arrayVariables.length && 0 === Z.length || e$variableType === Module_18.b.OBJECT && 0 === q.objectVariables.length && 0 === J.length) {
        a(false)
      } else {
        a(true)
      }
    }
  }, [q, e$variableType, Q, Z, J])
  useEffect(function () {
    var e = Shared_packages_Crc_blink_src_index.Blink.mainWorkspace && Module_26.g.getToolbox()
    if (e) {
      var t
      var n
      var r = null === (t = e.get_selected()) || undefined === t ? undefined : t.get_name()
      if ("toolbox-primitive" === r || "toolbox-array" === r || "toolbox-object" === r) {
        if (!(null === (n = Module_26.g.getToolbox()) || undefined === n)) {
          n.refresh_selection()
        }
      }
    }
  }, [i, B, D, U, C, y, Q, Z, J, l])
  var ee = function () {
    if (q) {
      if (e$variableType === Module_18.b.PRIMITIVE) {
        var e = Module_64.a("VARIABLE")
        V(Redux_common_actions.nj({
          title: "addPrimitiveVariableName",
          placeholder: useIntl$formatMessage({
            id: "addPrimitiveVariableNamePlaceholder"
          }),
          onConfirm: function (t, n) {
            V(Redux_common_actions.uf(n, e, t, 0, q.id, 0))
          },
          validators: [
            {
              validator: function (e, t) {
                var n = q.primitiveVariables.concat(Q)
                if (t === Module_18.i.GLOBAL) {
                  $.forEach(function (e) {
                    n = n.concat(e.primitiveVariables)
                  })
                }
                return !n.some(function (t) {
                  return t.name === e
                })
              },
              message: useIntl$formatMessage({
                id: "primitiveVariableNameRepeat"
              })
            }
          ].concat(Module_25.a(Sg(useIntl$formatMessage)))
        }))
      } else if (e$variableType === Module_18.b.ARRAY) {
        var r = Module_64.a("ARRAY")
        V(Redux_common_actions.nj({
          title: "addArrayVariableName",
          placeholder: useIntl$formatMessage({
            id: "addArrayVariableNamePlaceholder"
          }),
          onConfirm: function (e, t) {
            V(Redux_common_actions.of(t, r, e, [], q.id, 0))
          },
          validators: [
            {
              validator: function (e, t) {
                var n = q.arrayVariables.concat(Z)
                if (t === Module_18.i.GLOBAL) {
                  $.forEach(function (e) {
                    n = n.concat(e.arrayVariables)
                  })
                }
                return !n.some(function (t) {
                  return t.name === e
                })
              },
              message: useIntl$formatMessage({
                id: "arrayVariableNameRepeat"
              })
            }
          ].concat(Module_25.a(Sg(useIntl$formatMessage)))
        }))
      } else if (e$variableType === Module_18.b.OBJECT) {
        var o = Module_64.a("OBJECT")
        V(Redux_common_actions.nj({
          title: "object.createNewObject",
          placeholder: useIntl$formatMessage({
            id: "object.createNewObjectNamePlaceholder"
          }),
          onConfirm: function (e, t) {
            V(Redux_common_actions.tf({
              scopeType: t,
              id: o,
              name: e,
              defaultValue: {},
              screenId: q.id,
              index: 0
            }))
          },
          validators: [
            {
              validator: function (e, t) {
                var n = q.objectVariables.concat(J)
                if (t === Module_18.i.GLOBAL) {
                  $.forEach(function (e) {
                    n = n.concat(e.objectVariables)
                  })
                }
                return !n.some(function (t) {
                  return t.name === e
                })
              },
              message: useIntl$formatMessage({
                id: "object.nameRepeat"
              })
            }
          ].concat(Module_25.a(Sg(useIntl$formatMessage)))
        }))
      }
    }
  }
  var ne = function (e, n) {
    var r
    var o
    if (e$variableType === Module_18.b.PRIMITIVE) {
      u(l !== e ? e : "")
    }
    if (e$variableType === Module_18.b.ARRAY && (q || Z.length > 0)) {
      if (r = n === Module_18.i.GLOBAL ? Z.find(function (t) {
        return t.id === e
      }) : B.find(function (t) {
        return t.id === e
      })) {
        V(Redux_common_actions.qj({
          array: r,
          arrayType: n
        }))
      }
    }
    if (e$variableType === Module_18.b.OBJECT) {
      if (o = n === Module_18.i.GLOBAL ? J.find(function (t) {
        return t.id === e
      }) : U.find(function (t) {
        return t.id === e
      })) {
        V(Redux_common_actions.rj({
          variable: o,
          scopeType: n
        }))
      }
    }
  }
  var re = function (e, n, r, o) {
    if (q) {
      var /* [auto-meaningful-name] */e$name = e.name
      g("")
      if (r !== i) {
        if (!Shared_tools_index.j(r)) {
          if ("" !== r && r[0].match(/[0-9_]/)) {
            V(Redux_common_actions.mj({
              message: Shared_ui_language.c(X, "invalidVariableFirstChar")
            }))
          }
          return void V(Redux_common_actions.mj({
            message: Shared_ui_language.c(X, "invalidVariableName")
          }))
        }
        if (function (e, n) {
          if (e$variableType === Module_18.b.PRIMITIVE) {
            var r = D.concat(Q)
            if (n === Module_18.i.GLOBAL) {
              $.forEach(function (e) {
                r = r.concat(e.primitiveVariables)
              })
            }
            return r.some(function (t) {
              return t.name === e
            })
          }
          if (e$variableType === Module_18.b.ARRAY) {
            var o = B.concat(Z)
            if (n === Module_18.i.GLOBAL) {
              $.forEach(function (e) {
                o = o.concat(e.arrayVariables)
              })
            }
            return o.some(function (t) {
              return t.name === e
            })
          }
          if (e$variableType === Module_18.b.OBJECT) {
            var i = U.concat(J)
            if (n === Module_18.i.GLOBAL) {
              $.forEach(function (e) {
                i = i.concat(e.objectVariables)
              })
            }
            return i.some(function (t) {
              return t.name === e
            })
          }
          return false
        }(r, n)) {
          var a
          switch (e$variableType) {
            case Module_18.b.PRIMITIVE:
              a = "primitiveVariableNameRepeat"
              break
            case Module_18.b.ARRAY:
              a = "arrayVariableNameRepeat"
              break
            case Module_18.b.OBJECT:
              a = "object.nameRepeat"
              break
            default:
              throw Error("Unreachable branch")
          }
          V(Redux_common_actions.mj({
            message: Shared_ui_language.c(X, a)
          }))
          return void o.target.focus()
        }
        if (e$variableType === Module_18.b.PRIMITIVE) {
          Redux_common_actions.Nf(V, Redux_common_actions.Hg(n, e.id, "name", r, q.id))
        } else {
          if (e$variableType === Module_18.b.ARRAY) {
            Redux_common_actions.Nf(V, Redux_common_actions.yg(n, e.id, "name", r, q.id))
          } else {
            if (e$variableType === Module_18.b.OBJECT) {
              V(Redux_common_actions.Gg({
                scopeType: n,
                id: e.id,
                key: "name",
                value: r,
                screenId: q.id
              }))
            }
          }
        }
      }
    }
  }
  var oe = function (e, t) {
    return React.createElement(Shared_ui_components_index.k, {
      type: "text",
      className: VariablePanel_styles_module_css1.valueInput,
      maxLength: 20,
      defaultValue: e.defaultValue,
      onFocus: function (e) {
        return e.target.select()
      },
      onBlur: function (n) {
        !function (e, t, n) {
          if (q) {
            var r = e
            if (r) {
              r = Shared_tools_index.mb(r)
            }
            V(Redux_common_actions.Hg(n, t.id, "defaultValue", r, q.id))
          }
        }(n, e, t)
      },
      onKeyDown: ie
    })
  }
  var ie = function (e) {
    if (13 === e.keyCode) {
      e.currentTarget.blur()
    }
  }
  var ae = function (e) {
    g(e)
  }
  useEffect(function () {
    if (m) {
      var e = document.querySelector(".".concat("VARIABLE_ID_" + m, " input"))
      if (e && e instanceof HTMLInputElement) {
        e.focus()
      }
    }
  }, [m])
  var se = function (e, n) {
    if (q) {
      if (e$variableType === Module_18.b.PRIMITIVE) {
        Redux_common_actions.Nf(V, Redux_common_actions.Lf(n, e.id, q.id))
      } else {
        if (e$variableType === Module_18.b.ARRAY) {
          Redux_common_actions.Nf(V, Redux_common_actions.If(n, e.id, q.id))
        } else {
          if (e$variableType === Module_18.b.OBJECT) {
            V(Redux_common_actions.Kf(n, e.id, q.id))
          }
        }
      }
    }
  }
  var ce = function (e) {
    var /* [auto-meaningful-name] */e$item = e.item
    var /* [auto-meaningful-name] */e$type = e.type
    if (!q) {
      return React.createElement("div", null)
    }
    return React.createElement("div", {
      className: Classnames(VariablePanel_styles_module_css1.itemWrap, y === e$item.id && VariablePanel_styles_module_css1.select),
      id: e$item.id,
      key: e$item.id,
      onClick: function () {
        var /* [auto-meaningful-name] */Module_49$oTHelper$customEvent
        var /* [auto-meaningful-name] */Module_49$oTHelper$customEvent$emit
        E(e$item.id)
        if (!(null === (Module_49$oTHelper$customEvent = Module_49.oTHelper.customEvent) || undefined === Module_49$oTHelper$customEvent || null === (Module_49$oTHelper$customEvent$emit = Module_49$oTHelper$customEvent.emit) || undefined === Module_49$oTHelper$customEvent$emit)) {
          Module_49$oTHelper$customEvent$emit.focusItem("dynamicData", e$item.id)
        }
      }
    }, React.createElement("div", {
      className: VariablePanel_styles_module_css1.item
    }, React.createElement("div", {
      className: Classnames(VariablePanel_styles_module_css1.name)
    }, m === e$item.id ? React.createElement(Shared_ui_components_index.k, {
      type: "text",
      className: Classnames(VariablePanel_styles_module_css1.nameInput, "".concat("VARIABLE_ID_" + e$item.id)),
      maxLength: 20,
      defaultValue: e$item.name,
      onBlur: re.bind(null, e$item, e$type),
      onKeyDown: ie
    }) : React.createElement("div", {
      className: Classnames(VariablePanel_styles_module_css1.nameInputWrapper)
    }, React.createElement("div", {
      onClick: ae.bind(null, e$item.id),
      className: Classnames(VariablePanel_styles_module_css1.noEditing)
    }, e$item.name), React.createElement("div", {
      className: Classnames(VariablePanel_styles_module_css1.itemBtn, VariablePanel_styles_module_css1.delete),
      onClick: se.bind(null, e$item, e$type)
    }, React.createElement(Shared_ui_components_index.j, {
      type: "icon-close"
    })), React.createElement(Module_748.a, {
      placement: "bottom",
      trigger: ["hover", "click"],
      title: useIntl$formatMessage({
        id: e$variableType === Module_18.b.PRIMITIVE ? "editDefaultValue" : "edit"
      })
    }, React.createElement("div", {
      className: VariablePanel_styles_module_css1.itemBtn,
      onClick: ne.bind(null, e$item.id, e$type)
    }, e$variableType === Module_18.b.PRIMITIVE && React.createElement(Shared_ui_components_index.j, {
      type: "icon-fold-left",
      className: Classnames(VariablePanel_styles_module_css1.itemExpand, l === e$item.id && VariablePanel_styles_module_css1.active)
    }), e$variableType === Module_18.b.ARRAY && React.createElement(Shared_ui_components_index.j, {
      type: "icon-list"
    }), e$variableType === Module_18.b.OBJECT && React.createElement(Shared_ui_components_index.j, {
      type: "icon-list"
    })))))), e$variableType === Module_18.b.PRIMITIVE && y === e$item.id && l === e$item.id && React.createElement("div", {
      className: VariablePanel_styles_module_css1.detail
    }, useIntl$formatMessage({
      id: "initValue"
    }), oe(e$item, e$type)))
  }
  return React.createElement("div", {
    id: e.labelType,
    className: VariablePanel_styles_module_css1.wrapper
  }, function () {
    var e
    switch (e$variableType) {
      case Module_18.b.PRIMITIVE:
        e = "variable"
        break
      case Module_18.b.OBJECT:
        e = "object"
        break
      case Module_18.b.ARRAY:
        e = "list"
    }
    return React.createElement("div", {
      className: VariablePanel_styles_module_css1.addBtn,
      onClick: ee
    }, React.createElement(Shared_ui_components_index.j, {
      type: "icon-add",
      className: VariablePanel_styles_module_css1.addIcon
    }), useIntl$formatMessage({
      id: e
    }))
  }(), !i && React.createElement("div", {
    className: VariablePanel_styles_module_css1.line
  }), !C && (e$variableType === Module_18.b.PRIMITIVE ? React.createElement("div", {
    className: VariablePanel_styles_module_css1.content
  }, Q.length ? React.createElement("div", {
    className: VariablePanel_styles_module_css1.variableTitle
  }, useIntl$formatMessage({
    id: "globalVariable"
  })) : null, Q.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: Module_18.i.GLOBAL
    })
  }), D.length > 0 ? React.createElement("div", {
    className: VariablePanel_styles_module_css1.variableTitle
  }, useIntl$formatMessage({
    id: "screenVariable"
  })) : null, D.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: Module_18.i.SCREEN
    })
  })) : e$variableType === Module_18.b.ARRAY ? React.createElement("div", {
    className: VariablePanel_styles_module_css1.content
  }, Z.length > 0 ? React.createElement("div", {
    className: VariablePanel_styles_module_css1.variableTitle
  }, useIntl$formatMessage({
    id: "globalArray"
  })) : null, Z.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: Module_18.i.GLOBAL
    })
  }), B.length > 0 ? React.createElement("div", {
    className: VariablePanel_styles_module_css1.variableTitle
  }, useIntl$formatMessage({
    id: "screenArray"
  })) : null, B.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: Module_18.i.SCREEN
    })
  })) : e$variableType === Module_18.b.OBJECT ? React.createElement("div", {
    className: VariablePanel_styles_module_css1.content
  }, J.length > 0 ? React.createElement("div", {
    className: VariablePanel_styles_module_css1.variableTitle
  }, useIntl$formatMessage({
    id: "object.globalObject"
  })) : null, J.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: Module_18.i.GLOBAL
    })
  }), U.length > 0 ? React.createElement("div", {
    className: VariablePanel_styles_module_css1.variableTitle
  }, useIntl$formatMessage({
    id: "object.screenObject"
  })) : null, U.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: Module_18.i.SCREEN
    })
  })) : undefined), i && React.createElement("div", {
    className: VariablePanel_styles_module_css1.footer
  }, C && React.createElement("div", {
    className: VariablePanel_styles_module_css1.ellipse
  }, "..."), React.createElement("div", {
    className: VariablePanel_styles_module_css1.expand
  }, React.createElement("div", {
    className: VariablePanel_styles_module_css1.foldBtn,
    onClick: function () {
      return j(!C)
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-fold",
    className: C ? VariablePanel_styles_module_css1.expandIcon : VariablePanel_styles_module_css1.foldIcon
  })))))
})
var kT = memo(function () {
  return React.createElement("div", {
    className: Module_15251.wrapper
  }, React.createElement(RT, {
    variableType: Module_18.b.PRIMITIVE,
    labelType: Module_26.b.PRIMITIVE
  }), React.createElement(RT, {
    variableType: Module_18.b.ARRAY,
    labelType: Module_26.b.ARRAY
  }), React.createElement(RT, {
    variableType: Module_18.b.OBJECT,
    labelType: Module_26.b.OBJECT
  }))
})
export { kT }
