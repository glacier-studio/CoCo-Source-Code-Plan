/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1523
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../25/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import { memo, useRef, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_557 from /* 557 */"../557"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"../1213"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_155 from /* 155 */"./155"
import /* [auto-meaningful-name] */Module_1551 from /* 155 */"./155"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../64/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"../68"
import * as /* [auto-meaningful-name] */Module_796 from /* 796 */"../796/index"
import * as /* [auto-meaningful-name] */Module_1524 from /* 1524 */"./1524"
var T = {
  visible: false,
  position: {
    x: 0,
    y: 0
  },
  type: "string",
  index: -1
}
function S(t, n) {
  setImmediate(function () {
    t.focus()
    t.selectionEnd = t.selectionStart = n ? 0 : t.value.length
  })
}
var _a
_a = memo(function () {
  var e = useSelector(function (e) {
    return e.block.storageDialogInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$widget = e.widget
  var /* [auto-meaningful-name] */e$dbName = e.dbName
  var /* [auto-meaningful-name] */e$maxKeyLength = e.maxKeyLength
  var /* [auto-meaningful-name] */e$data = e.data
  var /* [auto-meaningful-name] */e$onSave = e.onSave
  var j = null === e$widget || undefined === e$widget ? undefined : e$widget.type
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var R = useRef(-1)
  var k = useRef(-1)
  var x = useDispatch()
  var D = useState([])
  var M = Module_10.a(D, 2)
  var L = M[0]
  var P = M[1]
  var B = useState([])
  var F = Module_10.a(B, 2)
  var G = F[0]
  var W = F[1]
  var U = useState(-1)
  var H = Module_10.a(U, 2)
  var V = H[0]
  var z = H[1]
  var Y = useState(-1)
  var K = Module_10.a(Y, 2)
  var q = K[0]
  var X = K[1]
  var Q = useState(0)
  var Z = Module_10.a(Q, 2)
  var J = Z[0]
  var $ = Z[1]
  var ee = useState(false)
  var te = Module_10.a(ee, 2)
  var ne = te[0]
  var re = te[1]
  var oe = useState(false)
  var ie = Module_10.a(oe, 2)
  var ae = ie[0]
  var se = ie[1]
  var ce = useState(false)
  var le = Module_10.a(ce, 2)
  var ue = le[0]
  var de = le[1]
  var pe = useState(false)
  var fe = Module_10.a(pe, 2)
  var he = fe[0]
  var me = fe[1]
  var ge = useState(T)
  var _e = Module_10.a(ge, 2)
  var ve = _e[0]
  var be = _e[1]
  function ye(e) {
    var t = 2 * e
    var n = document.querySelector(".".concat("STORAGE_KEY_VALUE_INPUT_SERIAL_" + t, " input"))
    if (n instanceof HTMLInputElement) {
      R.current = t
      S(n, false)
    }
  }
  function Ee() {
    return {
      value: "",
      key: Module_9.ac("key1", G.map(function (e) {
        return e.key
      })),
      type: "string",
      id: Module_64.a("DOC_KEY")
    }
  }
  function Oe(e) {
    G.splice(e, 1)
    W(Module_25.a(G))
  }
  function we(e, t, n) {
    if (G.find(function (n, r) {
      return r !== e && t.trim() === n.key
    })) {
      n.target.value = G[e].key
      return void P([])
    }
    G[e].key = t.trim()
    W(Module_25.a(G))
  }
  function Ce(e, t) {
    if (G.find(function (n, r) {
      return r !== e && t.trim() === n.key
    })) {
      P([e])
      x(Src_editor_redux_common_actions.mj({
        showPrefixIcon: false,
        message: useIntl$formatMessage({
          id: "repeatKeyToastMsg"
        })
      }))
    } else {
      P([])
    }
  }
  function Te(e, t) {
    if (Ae(t)) {
      G[e].type = "number"
    } else {
      G[e].type = "string"
    }
    G[e].value = t
    W(Module_25.a(G))
  }
  function Se() {
    if (e$onSave) {
      e$onSave(G)
    }
    x(Src_editor_redux_common_actions.uh())
  }
  function Ae(e) {
    return "" !== e && !isNaN(Number(e))
  }
  function Ie(e, t) {
    R.current = 2 * e + t
  }
  function je(e) {
    X(e)
  }
  function Ne(e, t) {
    G[e].type = t
    W(Module_25.a(G))
  }
  function Re(e) {
    var /* [auto-meaningful-name] */e$target = e.target
    if (e$target instanceof HTMLInputElement) {
      e$target.select()
    }
  }
  function ke(e, t) {
    var /* [auto-meaningful-name] */t$currentTarget = t.currentTarget
    var r = t$currentTarget.getClientRects()[0]
    var o = t$currentTarget.closest(".coco-dialog-content")
    if (o) {
      var i = o.getClientRects()[0]
      var a = {
        x: r.left - i.left - 98,
        y: r.top - i.top
      }
      be({
        visible: true,
        position: a,
        type: G[e].type,
        index: e,
        onSelect: Ne
      })
    }
  }
  useEffect(function () {
    W(Lodash.cloneDeep(e$data))
  }, [e$data])
  useEffect(function () {
    me(false)
  }, [e$visible])
  useEffect(function () {
    function e(t) {
      var /* [auto-meaningful-name] */t$target = t.target
      if (!(t$target.closest("." + Module_1551.typeSelectionList) || t$target.closest("." + Module_1551.typeFlag))) {
        be(Module_6.a({}, T))
        document.removeEventListener("mousemove", e)
      }
    }
    if (ve.visible) {
      document.addEventListener("mousemove", e)
    }
    return function () {
      document.removeEventListener("mousemove", e)
    }
  }, [ve])
  useEffect(function () {
    var e = {}
    G.forEach(function (t, n) {
      G.slice(n + 1, G.length).forEach(function (r, o) {
        if (r.key && r.key === t.key) {
          e[o + n + 1] = true
          e[n] = true
        }
      })
    })
    P(Object.keys(e).map(function (e) {
      return Number(e)
    }))
  }, [G])
  useEffect(function () {
    ye(V)
  }, [V])
  var xe = function (e) {
    re(e)
  }
  var De = function () {
    re(false)
    x(Src_editor_redux_common_actions.wj(Module_68.c.ImageLibrary, function (e) {
      var t = e[0]
      if (null === t || undefined === t ? undefined : t.id) {
        G[q].value = t.id
        W(Module_25.a(G))
      }
    }))
  }
  var Me = function () {
    re(false)
    x(Src_editor_redux_common_actions.wj(Module_68.c.IconLibrary, function (e) {
      var t = e[0]
      if (null === t || undefined === t ? undefined : t.name) {
        G[q].value = t.name + ".svg"
        W(Module_25.a(G))
      }
    }))
  }
  var Le = function () {
    re(false)
    x(Src_editor_redux_common_actions.wj(Module_68.c.SoundLibrary, function (e) {
      var t = e[0]
      if (null === t || undefined === t ? undefined : t.name) {
        G[q].value = t.name
        W(Module_25.a(G))
      }
    }))
  }
  var Pe = function (e) {
    if (e) {
      se(false)
      de(false)
    }
  }
  var Be = function (e) {
    e.preventDefault()
    k.current = q
    se(true)
  }
  var Fe = function (e) {
    e.preventDefault()
    k.current = q
    de(true)
  }
  function Ge(e) {
    var /* [auto-meaningful-name] */GK$current$key = G[k.current].key
    if ("value" === e) {
      GK$current$key = G[k.current].value.toString()
    }
    navigator.clipboard.writeText(GK$current$key)
  }
  function We(e) {
    navigator.clipboard.readText().then(function (t) {
      if ("value" === e) {
        G[k.current].value = t.trim()
        return void W(Module_25.a(G))
      }
      if (G.find(function (e, n) {
        return n !== k.current && t.trim() === e.key
      })) {
        x(Src_editor_redux_common_actions.mj({
          showPrefixIcon: false,
          message: useIntl$formatMessage({
            id: "repeatKeyToastMsg"
          })
        }))
      } else {
        G[k.current].key = t.trim()
        W(Module_25.a(G))
      }
    })
  }
  function Ue(e) {
    if (e$maxKeyLength && G.length >= e$maxKeyLength) {
      x(Src_editor_redux_common_actions.mj({
        message: useIntl$formatMessage({
          id: "cloudDbOverTheMaxKeyTips"
        })
      }))
    } else {
      var t = "prev" === e ? k.current : k.current + 1
      G.splice(t, 0, Ee())
      W(G.concat([]))
      $(t - 1)
      ye(t)
    }
  }
  function He(e) {
    if ("value" === e) {
      G[k.current].value = ""
      return void W(Module_25.a(G))
    }
    if (G.find(function (e, t) {
      return t !== k.current && "" === e.key
    })) {
      x(Src_editor_redux_common_actions.mj({
        showPrefixIcon: false,
        message: useIntl$formatMessage({
          id: "repeatKeyToastMsg"
        })
      }))
    } else {
      G[k.current].key = ""
      W(Module_25.a(G))
    }
  }
  useEffect(function () {
    if (ae || ue) {
      document.addEventListener("mousedown", function e() {
        se(false)
        de(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [ae, ue])
  return React1.createElement(Src_shared_ui_components_index.f, {
    className: Module_1551.editListDialog,
    visible: e$visible,
    withPortal: true,
    onClose: function () {
      if (Lodash.isEqual(G, e$data)) {
        x(Src_editor_redux_common_actions.uh())
      } else {
        me(true)
      }
    }
  }, React1.createElement("div", {
    className: Module_1551.dialogTitle
  }, e$dbName, React1.createElement("span", {
    className: Module_1551.defaultData
  }, "— ", useIntl$formatMessage({
    id: "StorageDialog.defaultData"
  }))), React1.createElement(Module_1524.a, ve), React1.createElement("div", {
    className: Module_1551.list
  }, React1.createElement("div", {
    className: Module_1551.summary
  }, React1.createElement("div", {
    className: Module_1551.count
  }, React1.createElement("span", null, useIntl$formatMessage({
    id: "keyValueTotal"
  }), "："), G.length || "0")), React1.createElement("div", {
    className: Module_1551.listHeader
  }, React1.createElement("div", {
    className: Module_1551.column1
  }, useIntl$formatMessage({
    id: "key"
  })), React1.createElement("div", {
    className: Module_1551.column2
  }, useIntl$formatMessage({
    id: "value"
  })), React1.createElement("div", {
    className: Module_1551.column3
  })), React1.createElement("div", {
    className: Module_1551.dataList,
    onKeyDown: function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */R$current = R.current
      if (e$target instanceof HTMLInputElement && R$current > -1 && e$target.selectionEnd === e$target.selectionStart) {
        var /* [auto-meaningful-name] */e$keyCode = e.keyCode
        var o = R$current
        var i = true
        if (38 === e$keyCode) {
          o -= 2
        } else {
          if (40 === e$keyCode) {
            o += 2
          } else {
            if (37 === e$keyCode && 0 === e$target.selectionStart) {
              o -= 1
              i = false
            } else {
              if (39 === e$keyCode && e$target.selectionEnd === e$target.value.length) {
                o += 1
              }
            }
          }
        }
        if (R$current !== o) {
          var a = document.querySelector(".".concat("STORAGE_KEY_VALUE_INPUT_SERIAL_" + o, " input"))
          if (a && a instanceof HTMLInputElement) {
            R.current = o
            S(a, i)
          }
        }
      }
    }
  }, G.length > 0 && React1.createElement(Module_557.a, {
    width: "auto",
    height: 36 * Math.min(G.length, 12),
    itemCount: G.length,
    renderItem: function (e) {
      var /* [auto-meaningful-name] */e$index = e.index
      var /* [auto-meaningful-name] */e$style = e.style
      return React1.createElement("div", {
        className: Module_1551.listItem,
        key: e$index,
        style: e$style,
        onMouseEnter: je.bind(null, e$index)
      }, React1.createElement(Module_1213.a, {
        placement: "rightTop",
        trigger: "click",
        onVisibleChange: Pe,
        visible: ae && k.current === e$index,
        content: React1.createElement("div", {
          className: Module_1551.rowMenuWrapper,
          style: {
            marginTop: 13
          }
        }, React1.createElement("div", {
          onMouseDown: Ge.bind(null, "key"),
          className: Module_1551.menuItem
        }, useIntl$formatMessage({
          id: "copyGridData"
        })), React1.createElement("div", {
          onMouseDown: We.bind(null, "key"),
          className: Module_1551.menuItem
        }, useIntl$formatMessage({
          id: "pasteGridData"
        })), React1.createElement("div", {
          onMouseDown: Ue.bind(null, "prev"),
          className: Classnames1(Module_1551.menuItem, Module_1551.borderTop)
        }, useIntl$formatMessage({
          id: "insertPrevRow"
        })), React1.createElement("div", {
          onMouseDown: Ue.bind(null, "next"),
          className: Classnames1(Module_1551.menuItem, Module_1551.borderBottom)
        }, useIntl$formatMessage({
          id: "insertNextRow"
        })), React1.createElement("div", {
          onMouseDown: He.bind(null, "key"),
          className: Classnames1(Module_1551.menuItem, Module_1551.deleteOption)
        }, useIntl$formatMessage({
          id: "clearData"
        })))
      }, React1.createElement("div", {
        className: Module_1551.column1,
        onContextMenu: Be
      }, React1.createElement(Src_shared_ui_components_index.k, {
        type: "text",
        isTrimmed: true,
        className: Classnames1(Module_1551.listInput, "STORAGE_KEY_VALUE_INPUT_SERIAL_" + 2 * e$index, L.includes(e$index) && Module_1551.error),
        maxLength: 150,
        onClick: Re,
        defaultValue: G[e$index].key,
        onFocus: Ie.bind(null, e$index, 0),
        onBlur: we.bind(null, e$index),
        onChange: Ce.bind(null, e$index),
        dependency: G[e$index].key
      }))), React1.createElement(Module_1213.a, {
        placement: "rightTop",
        trigger: "click",
        onVisibleChange: Pe,
        visible: ue && k.current === e$index,
        content: React1.createElement("div", {
          className: Module_1551.rowMenuWrapper,
          style: {
            marginTop: 13
          }
        }, React1.createElement("div", {
          onMouseDown: Ge.bind(null, "value"),
          className: Module_1551.menuItem
        }, useIntl$formatMessage({
          id: "copyGridData"
        })), React1.createElement("div", {
          onMouseDown: We.bind(null, "value"),
          className: Module_1551.menuItem
        }, useIntl$formatMessage({
          id: "pasteGridData"
        })), React1.createElement("div", {
          onMouseDown: Ue.bind(null, "prev"),
          className: Classnames1(Module_1551.menuItem, Module_1551.borderTop)
        }, useIntl$formatMessage({
          id: "insertPrevRow"
        })), React1.createElement("div", {
          onMouseDown: Ue.bind(null, "next"),
          className: Classnames1(Module_1551.menuItem, Module_1551.borderBottom)
        }, useIntl$formatMessage({
          id: "insertNextRow"
        })), React1.createElement("div", {
          onMouseDown: He.bind(null, "value"),
          className: Classnames1(Module_1551.menuItem, Module_1551.deleteOption)
        }, useIntl$formatMessage({
          id: "clearData"
        })))
      }, React1.createElement("div", {
        className: Module_1551.column2,
        onContextMenu: Fe
      }, function (e) {
        return j && j === Src_editor_widget_builtIn_types.B ? "" : Ae(G[e].value) && React1.createElement("div", {
          className: Module_1551.typeFlag,
          onMouseEnter: ke.bind(null, e)
        }, React1.createElement(Src_shared_ui_components_index.j, {
          type: "icon-corner-right-top"
        }))
      }(e$index), React1.createElement(Src_shared_ui_components_index.k, {
        type: "text",
        onFocus: Ie.bind(null, e$index, 1),
        className: Classnames1(Module_1551.listInput, "STORAGE_KEY_VALUE_INPUT_SERIAL_" + (2 * e$index + 1)),
        maxLength: 8e3,
        isTrimmed: true,
        defaultValue: G[e$index].value,
        onBlur: Te.bind(null, e$index),
        onClick: Re,
        dependency: G[e$index].value
      }), q === e$index && j === Src_editor_widget_builtIn_types.B && React1.createElement(Module_1213.a, {
        key: e$index,
        placement: "rightTop",
        onVisibleChange: xe,
        visible: ne,
        content: React1.createElement("div", {
          className: Module_1551.menuWrapper,
          style: {
            marginTop: 4
          }
        }, React1.createElement("div", {
          onMouseDown: De,
          className: Module_1551.resourceMenuItem
        }, React1.createElement(Src_shared_ui_components_index.j, {
          type: "icon-Image",
          className: Module_1551.resourceMenuIcon
        }), useIntl$formatMessage({
          id: "Resource.ImageLibrary"
        })), React1.createElement("div", {
          onMouseDown: Me,
          className: Module_1551.resourceMenuItem
        }, React1.createElement(Src_shared_ui_components_index.j, {
          type: "icon-Icon",
          className: Module_1551.resourceMenuIcon
        }), useIntl$formatMessage({
          id: "Resource.IconLibrary"
        })), React1.createElement("div", {
          onMouseDown: Le,
          className: Module_1551.resourceMenuItem
        }, React1.createElement(Src_shared_ui_components_index.j, {
          type: "icon-Sound",
          className: Module_1551.resourceMenuIcon
        }), useIntl$formatMessage({
          id: "Resource.SoundLibrary"
        })))
      }, React1.createElement("div", {
        className: Module_1551.addBox
      }, React1.createElement(Src_shared_ui_components_index.j, {
        type: "icon-add"
      }))))), React1.createElement("div", {
        className: Classnames1(Module_1551.inputClose, Module_1551.column3),
        onClick: Oe.bind(null, e$index)
      }, React1.createElement(Src_shared_ui_components_index.j, {
        type: "icon-close"
      })))
    },
    itemSize: 36,
    scrollToIndex: J,
    className: "VirtualList"
  })), React1.createElement("div", {
    className: Classnames1(Module_1551.addRow, G.length > 12 && Module_1551.shadow),
    onClick: function () {
      if (e$maxKeyLength && G.length >= e$maxKeyLength) {
        x(Src_editor_redux_common_actions.mj({
          message: useIntl$formatMessage({
            id: "cloudDbOverTheMaxKeyTips"
          })
        }))
      } else {
        G.push(Ee())
        W(G.concat([]))
        z(G.length - 1)
        $(G.length - 1)
      }
    }
  }, React1.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  }))), he && React1.createElement(Module_796.b, {
    onCancel: function () {
      x(Src_editor_redux_common_actions.uh())
    },
    onOk: Se
  }), React1.createElement("div", {
    className: Module_1551.footer
  }, j && j === Src_editor_widget_builtIn_types.B ? React1.createElement("span", null, useIntl$formatMessage({
    id: "storageDialogTips"
  })) : React1.createElement("span", null, useIntl$formatMessage({
    id: "deprecatedStorageDialogTips"
  })), React1.createElement(Src_shared_ui_components_index.d, {
    className: Classnames1(Module_1551.save, false),
    type: "primary",
    onClick: Se
  }, useIntl$formatMessage({
    id: "save"
  }), false)))
})
export { _a as a }
export default _a
