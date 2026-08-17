/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-89
 */

"use strict"

import { Mv } from "../../../../../../unrestored/shared/1571/2636/index__part-88"
import * as /* [auto-meaningful-name] */Shared_ui_components_Iconfont_index from /* 94 */"../../../../../shared/ui/components/Iconfont/index"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"../../../../../../unrestored/shared/1571/2636/49"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */Widget_builtIn_types from /* 5 */"../../../../widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"../../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../../../unrestored/shared/1571/2636/11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../../unrestored/shared/1571/2636/10/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Styles_module_css from /* 150 */"./styles.module.css"
import /* [auto-meaningful-name] */Styles_module_css1 from /* 150 */"./styles.module.css"
var Bv = memo(function (e) {
  var t
  var n = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$onDelete = e.onDelete
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$toggleAttributeVisible = e.toggleAttributeVisible
  var /* [auto-meaningful-name] */e$onCopyToCurrentScreen = e.onCopyToCurrentScreen
  var /* [auto-meaningful-name] */e$onHide = e.onHide
  var /* [auto-meaningful-name] */e$onShow = e.onShow
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isChildren = e.isChildren
  var /* [auto-meaningful-name] */e$isLast = e.isLast
  var /* [auto-meaningful-name] */e$className = e.className
  var E = undefined === e$className ? "" : e$className
  var /* [auto-meaningful-name] */e$readonly = e.readonly
  var w = undefined !== e$readonly && e$readonly
  var /* [auto-meaningful-name] */e$isInvisibleWidget = e.isInvisibleWidget
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var A = useRef(null)
  var j = useSelector(function (e) {
    return e.block.flyoutVisible
  })
  var R = useState(true)
  var x = Module_10.a(R, 2)
  var D = x[0]
  var M = x[1]
  var L = useState(false)
  var P = Module_10.a(L, 2)
  var B = P[0]
  var F = P[1]
  useEffect(function () {
    var e = function e() {
      F(false)
      document.removeEventListener("click", e, true)
      document.removeEventListener("contextmenu", e, true)
    }
    if (B) {
      document.addEventListener("click", e, true)
      document.addEventListener("contextmenu", e, true)
    }
    return function () {
      document.removeEventListener("click", e, true)
      document.removeEventListener("contextmenu", e, true)
    }
  }, [B])
  useEffect(function () {
    if (e$selected && A.current) {
      A.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  }, [e$selected])
  var G = function (e) {
    e.stopPropagation()
    e$onDelete(n)
  }
  var W = function () {
    e$onCopyToCurrentScreen(n)
  }
  return React.createElement("div", {
    className: Classnames(Styles_module_css1.itemWrapper, E)
  }, React.createElement(Module_1213.a, {
    placement: "bottomLeft",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        F(false)
      }
    },
    visible: B,
    arrowPointAtCenter: true,
    overlayClassName: "popoverOverlay",
    content: function () {
      return React.createElement("div", {
        className: Styles_module_css1.popoverWrapper,
        onContextMenu: function (e) {
          return e.preventDefault()
        }
      }, !e$isInvisibleWidget && React.createElement("div", {
        className: Styles_module_css1.menuItem,
        onMouseDown: W
      }, useIntl$formatMessage({
        id: "copyAndPaste"
      })), React.createElement("div", {
        className: Classnames(Styles_module_css1.menuItem, Styles_module_css1.delete),
        onMouseDown: G
      }, useIntl$formatMessage({
        id: "delete"
      })))
    }
  }, React.createElement("div", {
    ref: A,
    className: Classnames(Styles_module_css1.item, (t = {}, Module_11.a(t, Styles_module_css1.selected, e$selected && j), Module_11.a(t, Styles_module_css1.selectedLight, e$selected && !j), Module_11.a(t, Styles_module_css1.children, e$isChildren), Module_11.a(t, Styles_module_css1.parent, !!e$children), Module_11.a(t, Styles_module_css1.expanded, D), Module_11.a(t, Styles_module_css1.notLast, !e$isLast && e$isChildren), t)),
    onContextMenu: function (e) {
      e.preventDefault()
      if (!(w || e$type !== Widget_builtIn_types.c && e$type !== Widget_builtIn_types.a && e$isChildren)) {
        F(true)
      }
    },
    onClick: function () {
      e$onSelect(n)
    }
  }, React.createElement("div", {
    className: Styles_module_css1.left
  }, React.createElement("span", {
    className: Styles_module_css1.foldIconContainer,
    onClick: function (e) {
      M(!D)
      e.stopPropagation()
    }
  }, React.createElement(Shared_ui_components_Iconfont_index.a, {
    type: "icon-fold-left",
    className: Styles_module_css1.foldIcon
  })), Shared_tools_index.X(e$icon) ? React.createElement("img", {
    className: Classnames(Styles_module_css1.widgetIcon, Styles_module_css1.widgetUrlIcon),
    src: e$icon,
    alt: e$title,
    draggable: false
  }) : React.createElement(Shared_ui_components_Iconfont_index.a, {
    type: e$icon,
    className: Styles_module_css1.widgetIcon
  }), React.createElement("span", {
    className: Classnames(Styles_module_css1.label, !e$visible && Styles_module_css1.labelGray)
  }, e$title)), React.createElement("div", {
    className: Styles_module_css1.right
  }, !e$isInvisibleWidget && e$type !== Widget_builtIn_types.c && React.createElement("div", {
    onClick: function (e) {
      e.stopPropagation()
      if (!e$visible) {
        e$onShow(n)
      } else {
        e$onHide(n)
      }
    },
    className: Classnames(Styles_module_css1.controlIcon, Styles_module_css1.seeIcon)
  }, React.createElement(Shared_ui_components_Iconfont_index.a, {
    type: e$visible ? "icon-see" : "icon-see-disable"
  })), React.createElement("div", {
    onClick: function (e) {
      e.stopPropagation()
      e$toggleAttributeVisible(n)
    },
    className: Styles_module_css1.controlIcon
  }, React.createElement(Shared_ui_components_Iconfont_index.a, {
    type: "icon-attribute"
  }))))), D && e$children)
})
var Fv = memo(function () {
  var /* [auto-meaningful-name] */u$invisibleWidgetIds
  var t
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = useDispatch()
  var o = useRef()
  var i = useSelector(function (e) {
    return e.common.editAreaUpdatedAt
  })
  var a = useSelector(function (e) {
    return e.common.widgetAttributeVisible
  })
  var s = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var c = useSelector(function (e) {
    return e.project.globalWidgetIds
  })
  var l = useSelector(function (e) {
    return e.block.flyoutVisible
  })
  var u = Module_238.d()
  var d = useState(false)
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState(false)
  var b = Module_10.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = useState(false)
  var w = Module_10.a(O, 2)
  var C = w[0]
  var T = w[1]
  var A = useState(false)
  var j = Module_10.a(A, 2)
  var R = j[0]
  var D = j[1]
  var M = useSelector(function (e) {
    return e.uiConfig.widgetEditor
  }) === Module_18.j.ReadOnly
  if (!u) {
    return null
  }
  var L = function (e) {
    var t
    var n
    r(Redux_common_actions.ug(e))
    if (s === e && a) {
      r(Redux_common_actions.fj(false))
    } else {
      if (s === e && l) {
        Module_26.g.setSelectedItem()
        if (!(null === (t = Module_26.g.getToolbox()) || undefined === t)) {
          t.flyout.hide()
        }
      } else {
        Module_26.g.setSelectedItem(null === (n = Module_26.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(e))
      }
    }
  }
  var P = function (e) {
    var t
    var n
    if (!(r(Redux_common_actions.ug(e)), s === e && l)) {
      Module_26.g.setSelectedItem(null === (t = Module_26.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(e))
    }
    if (s === e && a) {
      r(Redux_common_actions.fj(false))
      if (!(null === (n = Module_26.g.getToolbox()) || undefined === n)) {
        n.refresh_selection()
      }
    } else {
      r(Redux_common_actions.fj(true))
    }
  }
  var B = function (e) {
    r(Redux_common_actions.Lg(e, "visible", true, true, true))
  }
  var F = function (e) {
    r(Redux_common_actions.Lg(e, "visible", false, true, true))
  }
  var G = function (e) {
    r(Redux_common_actions.Ef(Module_9.w(e)))
  }
  var W = function (e) {
    var t = Module_9.Bb(e)
    if (t) {
      var i = Module_9.Fb(t.id || "")
      var a = useIntl$formatMessage({
        id: "deleteWidget"
      }) + "“" + Module_190.f(i, 10) + "”?"
      if (t.type === Widget_builtIn_types.h) {
        o.current = Module_9.Bb(e)
        return void r(Redux_common_actions.zh({
          onConfirm: H,
          onClose: V,
          allowText: useIntl$formatMessage({
            id: "delete"
          }),
          isDangerous: true,
          title: a,
          content: useIntl$formatMessage({
            id: "cloudDB.DeleteWidgetsTips"
          })
        }))
      }
      var s = Module_26.z.checkFieldValueIsSelected("WIDGET_ID", e)
      var c = Module_26.z.checkSomeFieldValueIsSelected("WIDGET_ID", Module_9.U(e))
      if (s || c) {
        o.current = Module_9.Bb(e)
        r(Redux_common_actions.zh({
          onConfirm: H,
          onClose: V,
          allowText: useIntl$formatMessage({
            id: "delete"
          }),
          isDangerous: true,
          title: a,
          content: useIntl$formatMessage({
            id: c ? "deleteParentWidgetTips" : "deleteWidgetTips"
          })
        }))
      } else {
        r(Redux_common_actions.Mf(e, u.id))
        o.current = undefined
      }
    }
  }
  var U = function (e) {
    var t
    var n
    var o = e
    r(Redux_common_actions.ug(o))
    if (s === o && l) {
      Module_26.g.setSelectedItem()
      if (!(null === (t = Module_26.g.getToolbox()) || undefined === t)) {
        t.flyout.hide()
      }
    } else {
      Module_26.g.setSelectedItem(null === (n = Module_26.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(o))
    }
  }
  var H = function () {
    var /* [auto-meaningful-name] */o$current
    var t = null === (o$current = o.current) || undefined === o$current ? undefined : o$current.id
    if (t) {
      r(Redux_common_actions.Mf(t, u.id))
    }
  }
  var V = function () {
    o.current = undefined
  }
  var q = []
  var X = []
  var Q = []
  var Z = []
  var J = new Map()
  u.widgetIds.forEach(function (e) {
    var t = Module_9.Bb(e)
    if (t) {
      if (t && !t.parentId) {
        J.set(e, {
          widget: t
        })
      }
      var /* [auto-meaningful-name] */t$type = t.type
      if (t && !Z.includes(r)) {
        var o = Module_9.Db(t.type)
        if (o && o.hasAnyWidget) {
          Z.push(r)
          Q.push({
            type: "ANY_".concat(r),
            icon: o.icon,
            title: useIntl$formatMessage({
              id: "anyWidgetAny"
            }) + useIntl$formatMessage({
              id: o.title || o.previewAreaWidgetTitle
            })
          })
        }
      }
    }
  })
  J.forEach(function (e) {
    if (!(e.widget.type !== Widget_builtIn_types.f && e.widget.type !== Widget_builtIn_types.x && e.widget.type !== Widget_builtIn_types.A)) {
      e.widget.widgetIds.forEach(function (t) {
        var n = Module_9.Bb(t)
        if (n) {
          if (!e.children) {
            e.children = []
          }
          e.children.push({
            widget: n
          })
        }
      })
    }
    q.push(e)
    X.push(e.widget.id)
  })
  var $ = []
  var ee = []
  if (!(null === (u$invisibleWidgetIds = u.invisibleWidgetIds) || undefined === u$invisibleWidgetIds)) {
    u$invisibleWidgetIds.forEach(function (e) {
      var t = Module_9.Bb(e)
      if (t) {
        $.push({
          widget: t
        })
        ee.push(t.id)
      }
    })
  }
  var ne = []
  var re = []
  c.forEach(function (e) {
    var t = Module_9.Bb(e)
    if (t && t.type !== Widget_builtIn_types.m) {
      ne.push({
        widget: t
      })
      re.push(t.id)
    }
  })
  var oe
  var ie = function (e, t, n) {
    return React.createElement(React.Fragment, null, e.reverse().map(function (r, o) {
      var i
      var /* [auto-meaningful-name] */r$widget = r.widget
      var /* [auto-meaningful-name] */r$children = r.children
      return React.createElement(Bv, {
        className: t,
        id: r$widget.id,
        icon: (null === (i = Module_9.Db(r$widget.type)) || undefined === i ? undefined : i.icon) || "",
        type: r$widget.type,
        title: Module_9.Fb(r$widget.id),
        visible: r$widget.visible,
        readonly: M,
        key: r$widget.id,
        selected: s === r$widget.id,
        onDelete: W,
        onHide: F,
        onSelect: L,
        onShow: B,
        onCopyToCurrentScreen: G,
        toggleAttributeVisible: P,
        isLast: o === (null === e || undefined === e ? undefined : e.length) - 1,
        isDragAndDeleteDisabled: null === n || undefined === n ? undefined : n.isDragAndDeleteDisabled,
        isInvisibleWidget: null === n || undefined === n ? undefined : n.isInvisibleWidget,
        isChildren: !!(null === n || undefined === n ? undefined : n.parentId)
      }, r$children && ae(r$children, {
        parentId: r$widget.id,
        isGlobalWidget: null === n || undefined === n ? undefined : n.isGlobalWidget,
        isInvisibleWidget: null === n || undefined === n ? undefined : n.isInvisibleWidget,
        isDragAndDeleteDisabled: r$widget.type === Widget_builtIn_types.x || r$widget.type === Widget_builtIn_types.A
      }))
    }))
  }
  var ae = function (e, t) {
    var n = (null === t || undefined === t ? undefined : t.parentId) ? "SubReactDragListViewItem" : "ReactDragListViewItem"
    var o = ".".concat(n)
    return (null === t || undefined === t ? undefined : t.isInvisibleWidget) || (null === t || undefined === t ? undefined : t.isGlobalWidget) || (null === t || undefined === t ? undefined : t.isDragAndDeleteDisabled) || M ? ie(e, n, t) : React.createElement(Mv, {
      nodeSelector: o,
      handleSelector: o,
      onDragEnd: function (e, n) {
        if (!M) {
          (function (e, t, n) {
            if (!(e < 0 || t < 0)) {
              if (null === n || undefined === n ? undefined : n.parentId) {
                var o = Module_9.Bb(null === n || undefined === n ? undefined : n.parentId)
                var /* [auto-meaningful-name] */o$widgetIds = o.widgetIds
                var a = i.length - e - 1
                var s = i.length - t - 1
                var c = i.splice(a, 1)
                var l = Module_10.a(c, 1)[0]
                var d = Module_25.a(i)
                d.splice(s, 0, l)
                r(Redux_common_actions.Mg(u.id, o.id, d, true, true, true))
              } else {
                var /* [auto-meaningful-name] */Module_49$oTHelper$widget
                var f = X
                var h = f.length - e - 1
                var m = f.length - t - 1
                var g = f[h]
                var _ = f[m]
                var /* [auto-meaningful-name] */u$widgetIds = u.widgetIds
                var b = v.indexOf(_)
                var y = v.indexOf(g)
                if (b < 0 || y < 0) {
                  return
                }
                v.splice(y, 1)
                v.splice(b, 0, g)
                r(Redux_common_actions.Bj(u.id, Module_25.a(v), null === n || undefined === n ? undefined : n.isInvisibleWidget))
                if (!(null === (Module_49$oTHelper$widget = Module_49.oTHelper.widget) || undefined === Module_49$oTHelper$widget)) {
                  Module_49$oTHelper$widget.clientOp.moveWidget(u.id, y, b)
                }
              }
            }
          })(e, n, t)
        }
      },
      lineClassName: Styles_module_css1.dragLine
    }, ie(e, n, t))
  }
  return React.createElement("div", {
    className: Styles_module_css1.wrapper
  }, React.createElement("div", {
    className: Styles_module_css1.list,
    "data-updated-at": i
  }, React.createElement("div", {
    className: Styles_module_css1.widgetCategory,
    onClick: function () {
      g(!m)
    }
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "components"
  })), React.createElement(Shared_ui_components_index.j, {
    type: "icon-fold",
    className: m ? Styles_module_css1.fold : Styles_module_css1.unFold
  })), !m && ae(q), !m && React.createElement("div", {
    className: Classnames(Styles_module_css1.item, Styles_module_css1.screenItem, (t = {}, Module_11.a(t, Styles_module_css1.selected, !s && l), Module_11.a(t, Styles_module_css1.selectedLight, !s && !l), t)),
    onContextMenu: function (e) {
      return e.preventDefault()
    },
    onClick: function () {
      var e
      var t
      r(Redux_common_actions.ug(undefined))
      if (s || !a) {
        if (!s && l) {
          Module_26.g.setSelectedItem()
          if (!(null === (e = Module_26.g.getToolbox()) || undefined === e)) {
            e.flyout.hide()
          }
        } else {
          Module_26.g.setSelectedItem(null === (t = Module_26.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(u.id))
        }
      } else {
        r(Redux_common_actions.fj(false))
      }
    }
  }, React.createElement("div", {
    className: Styles_module_css1.left
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-screen",
    className: Styles_module_css1.widgetIcon
  }), React.createElement("span", {
    className: Styles_module_css1.label
  }, u.title)), React.createElement("div", {
    className: Styles_module_css1.right
  }, React.createElement("div", {
    onClick: function (e) {
      var t
      e.stopPropagation()
      r(Redux_common_actions.ug(undefined))
      Module_26.g.setSelectedItem(null === (t = Module_26.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(u.id))
      r(!s && a ? Redux_common_actions.fj(false) : Redux_common_actions.fj(true))
    },
    className: Classnames(Styles_module_css1.controlIcon, Styles_module_css1.attributeIcon)
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-attribute"
  })), React.createElement("div", {
    className: Styles_module_css1.screenBottomIcon
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-screen-bottom"
  })))), ee.length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: Styles_module_css1.widgetCategory,
    onClick: function () {
      E(!y)
    }
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "invisibleWidgetList"
  })), React.createElement(Shared_ui_components_index.j, {
    type: "icon-fold",
    className: y ? Styles_module_css1.fold : Styles_module_css1.unFold
  })), !y && ae($, {
    isInvisibleWidget: true
  })), re.length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: Styles_module_css1.widgetCategory,
    onClick: function () {
      T(!C)
    }
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "globalWidgetList"
  })), React.createElement(Shared_ui_components_index.j, {
    type: "icon-fold",
    className: C ? Styles_module_css1.fold : Styles_module_css1.unFold
  })), !C && ae(ne, {
    isGlobalWidget: true,
    isInvisibleWidget: true
  })), Q.length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: Styles_module_css1.widgetCategory,
    onClick: function () {
      D(!R)
    }
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "anyWidgetList"
  })), React.createElement(Shared_ui_components_index.j, {
    type: "icon-fold",
    className: R ? Styles_module_css1.fold : Styles_module_css1.unFold
  })), !R && (oe = Q, React.createElement("div", {
    onContextMenu: function (e) {
      return e.preventDefault()
    }
  }, oe.reverse().map(function (e) {
    var t
    var /* [auto-meaningful-name] */e$type = e.type
    var /* [auto-meaningful-name] */e$icon = e.icon
    var /* [auto-meaningful-name] */e$title = e.title
    return React.createElement("div", {
      onClick: U.bind(null, e$type),
      key: e$type,
      className: Classnames(Styles_module_css1.item, (t = {}, Module_11.a(t, Styles_module_css1.selected, s === e$type && l), Module_11.a(t, Styles_module_css1.selectedLight, s === e$type && !l), Module_11.a(t, Styles_module_css1.parent, false), t))
    }, React.createElement("div", {
      className: Classnames(Styles_module_css1.left, Styles_module_css1.anyWidget)
    }, Shared_tools_index.X(e$icon) ? React.createElement("img", {
      className: Classnames(Styles_module_css1.widgetIcon, Styles_module_css1.widgetUrlIcon),
      src: e$icon,
      alt: e$title,
      draggable: false
    }) : React.createElement(Shared_ui_components_index.j, {
      type: e$icon,
      className: Styles_module_css1.widgetIcon
    }), React.createElement("span", {
      className: Classnames(Styles_module_css1.label)
    }, e$title)))
  }))))))
})
export { Fv }
