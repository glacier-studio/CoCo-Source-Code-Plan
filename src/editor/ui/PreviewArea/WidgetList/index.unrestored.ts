/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-87
 */

"use strict"

import { we } from "../../../../../unrestored/shared/1571/2636/index__part-6"
import { Rn } from "../Player/index"
import { to } from "../ScreenList/index"
import { lo } from "../../../../../unrestored/shared/1571/2636/index__part-27"
import { zd } from "../stage/index"
import { sv, gv } from "./item"
import * as /* [auto-meaningful-name] */Shared_ui_components_Iconfont_index from /* 94 */"../../../../shared/ui/components/Iconfont/index"
import /* [auto-meaningful-name] */Styles_module_css from /* 196 */"./styles.module.css"
import /* [auto-meaningful-name] */Styles_module_css1 from /* 279 */"../styles.module.css"
import * as /* [auto-meaningful-name] */ContextMenu_index from /* 1512 */"../ContextMenu/index"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"../../../../../unrestored/shared/1571/2636/75"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../../../../../unrestored/shared/1571/2636/90"
import * as /* [auto-meaningful-name] */Animejs from /* 205 */"animejs"
import * as /* [auto-meaningful-name] */Shared_widget_custom_type from /* 78 */"../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect, useRef, useLayoutEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1514 from /* 1514 */"../../../../../unrestored/shared/1571/2636/1514"
import /* [auto-meaningful-name] */Module_15141 from /* 1514 */"../../../../../unrestored/shared/1571/2636/1514"
var bv = memo(function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useSelector(function (e) {
    return e.common.userInfo
  })
  var r = useDispatch()
  return React.createElement(Shared_ui_components_index.d, {
    className: Styles_module_css.widgetMallBtn,
    onClick: function () {
      var e = function () {
        r(Redux_common_actions.gj(true))
      }
      if (n) {
        e()
      } else {
        r(Redux_common_actions.Ch(e))
      }
    }
  }, React.createElement(Shared_ui_components_Iconfont_index.a, {
    type: "icon-shop",
    className: Styles_module_css.shopIcon
  }), !e.singleColumn && React.createElement("span", null, useIntl$formatMessage({
    id: "Widget.widgetMall"
  })))
})
var yv
var Ev = React.memo(function (e) {
  var t = useSelector(function (e) {
    return e.common.myExtensionWidgets
  })
  var n = useSelector(function (e) {
    return e.common.userInfo
  })
  var r = useDispatch()
  var o = []
  var i = []
  var a = function (e) {
    return {
      icon: e.icon,
      title: e.widgetName,
      previewAreaWidgetTitle: "",
      type: Shared_widget_custom_type.c(e.type, true),
      isInvisibleWidget: e.isInvisibleWidget,
      widgetServerId: e.id
    }
  }
  t.forEach(function (e) {
    if (e.isInvisibleWidget) {
      i.push(a(e))
    } else {
      o.push(a(e))
    }
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState(true)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = Module_238.c()
  var y = Module_9.Eb(Module_9.j.EXTENSION).filter(function (e) {
    return !Shared_widget_custom_type.e(e.type)
  })
  useEffect(function () {
    var e = function () {
      var e = Module_7.a(RegeneratorRuntime.mark(function e() {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return Redux_common_actions.Nf(r, Redux_common_actions.eg())
              case 2:
                d(false)
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
    if (n) {
      d(true)
      e()
    } else {
      r(Redux_common_actions.Sh([]))
    }
  }, [r, n])
  useEffect(function () {
    if (0 === y.length && 0 === o.length && 0 === i.length) {
      v(true)
    } else {
      v(false)
    }
  }, [y, o, i])
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: Styles_module_css.scrollExtension
  }, !u && g && React.createElement("div", {
    className: Styles_module_css.noExtensionWidgets
  }, React.createElement("div", {
    className: Styles_module_css.noExtensionWidgetsWrapper
  }, !e.singleColumn && React.createElement(we, {
    type: "image-text",
    text: React.createElement(React.Fragment, null, useIntl$formatMessage({
      id: "Widget.emptyTip1"
    }), React.createElement("br", null), useIntl$formatMessage({
      id: "Widget.emptyTip2"
    }))
  }), React.createElement(bv, {
    singleColumn: e.singleColumn
  }))), !u && React.createElement(React.Fragment, null, React.createElement(sv, {
    configList: i,
    title: "ExtensionWidget.category.function"
  }), React.createElement(sv, {
    configList: o,
    title: "ExtensionWidget.category.ui"
  }), React.createElement(sv, {
    key: b,
    configList: y,
    title: "ExtensionWidget.category.extension"
  })), u && React.createElement("div", {
    className: Styles_module_css.loading,
    style: {
      height: "100%"
    }
  }, React.createElement("img", {
    src: Module_15141,
    alt: "loading"
  }))), React.createElement("div", {
    className: Styles_module_css.widgetMallBtnContainer
  }, !g && React.createElement(bv, {
    singleColumn: e.singleColumn
  })))
})
!function (e) {
  e.BASIC = "BASIC"
  e.EXTENSION = "EXTENSION"
}(yv || (yv = {}))
var Ov = React.memo(function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useSelector(function (e) {
    return e.uiConfig.widgetEditor
  }) === Module_18.j.ReadOnly
  var r = useSelector(function (e) {
    return !!e.oTState.collWorkId
  })
  var o = useState(yv.BASIC)
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  return React.createElement("div", {
    className: Classnames(Styles_module_css.tabContainer, e.singleColumn ? Styles_module_css.singleColumn : Styles_module_css.doubleColumn, n && Styles_module_css.readonly)
  }, React.createElement("div", {
    className: Styles_module_css.tabNav
  }, React.createElement("div", {
    onClick: function () {
      s(yv.BASIC)
    },
    className: Classnames(Styles_module_css.tab, a === yv.BASIC && Styles_module_css.activeTab)
  }, React.createElement("div", null, useIntl$formatMessage({
    id: "Widget.basic"
  }))), React.createElement("div", {
    onClick: function () {
      s(yv.EXTENSION)
    },
    className: Classnames(Styles_module_css.tab, a === yv.EXTENSION && Styles_module_css.activeTab)
  }, React.createElement("div", null, useIntl$formatMessage({
    id: "Widget.extension"
  })))), React.createElement("div", {
    className: Styles_module_css.tabContent
  }, React.createElement("div", {
    className: Classnames(Styles_module_css.tabContentBox, a !== yv.BASIC && Styles_module_css.hide)
  }, React.createElement(gv, {
    isOT: r
  })), React.createElement("div", {
    className: Classnames(Styles_module_css.tabContentBox, a !== yv.EXTENSION && Styles_module_css.hide)
  }, React.createElement(Ev, {
    singleColumn: e.singleColumn
  }))))
})
var wv = React.memo(function () {
  var e = useSelector(function (e) {
    return e.common.stageToast
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$toast = e.toast
  var r = undefined === e$toast ? "" : e$toast
  var /* [auto-meaningful-name] */e$showIcon = e.showIcon
  var i = undefined !== e$showIcon && e$showIcon
  var a = useDispatch()
  var s = useRef(null)
  useEffect(function () {
    if (s.current) {
      clearTimeout(s.current)
    }
    if (e$visible) {
      s.current = window.setTimeout(function () {
        a(Redux_common_actions.th())
      }, 3e3)
    }
  }, [a, e$visible, r])
  return e$visible ? React.createElement("div", {
    className: Styles_module_css1.toastWrapper
  }, React.createElement("span", {
    className: Styles_module_css1.toast
  }, i && React.createElement(Shared_ui_components_index.j, {
    type: "icon-alert-success",
    className: Styles_module_css1.icon
  }), r)) : null
})
var Cv = window.innerWidth > 1300 ? 144 : 92
var Tv = 92 === Cv
var Sv = React.memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useDispatch()
  var n = useRef(null)
  var r = useRef(null)
  var o = useSelector(function (e) {
    return e.project.playing
  })
  var i = useSelector(function (e) {
    return e.common.stageVisible
  })
  var a = useSelector(function (e) {
    return e.common.isHoverBlockArea
  })
  var s = useState(0)
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState(false)
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  useEffect(function () {
    var /* [auto-meaningful-name] */n$current = n.current
    var r = function (e) {
      var n
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */e$clientX = e.clientX
      var /* [auto-meaningful-name] */e$clientY = e.clientY
      var a = e$target.closest("." + Module_90.b)
      var s = (null === a || undefined === a ? undefined : a.id) || ""
      var c = null === a || undefined === a ? undefined : a.classList.contains(Module_90.a)
      if (!c) {
        e.preventDefault()
      }
      if (!a || c || (null === (n = Module_9.Bb(s)) || undefined === n ? undefined : n.parentId)) {
        t(Redux_common_actions.Wg())
      } else {
        t(Redux_common_actions.Og({
          position: {
            x: e$clientX,
            y: e$clientY
          },
          visible: true,
          widgetId: a.id
        }))
      }
    }
    if (n$current) {
      n$current.addEventListener("contextmenu", r)
    }
    return function () {
      if (n$current) {
        n$current.removeEventListener("contextmenu", r)
      }
    }
  }, [t, n])
  useLayoutEffect(function () {
    if (r.current) {
      var e = Math.max(window.innerWidth / 3, 514)
      r.current.style.width = "".concat(e, "px")
      u(e + 1)
      t(Redux_common_actions.Zi(e - Cv))
      if (n.current) {
        var /* [auto-meaningful-name] */n$current$offsetWidth = n.current.offsetWidth
        var /* [auto-meaningful-name] */n$current$offsetHeight = n.current.offsetHeight
        var a = .8 * o / Module_75.e
        var s = (i - 80) / Module_75.d
        var c = Math.min(a, s, 1)
        c = Math.max(c, .7)
        t(Redux_common_actions.Xi(c))
      }
    }
  }, [t])
  useLayoutEffect(function () {
    if (r.current && n.current) {
      var e = n.current.offsetWidth + Cv
      e = Math.max(e, 514)
      Animejs.default({
        targets: "#previewAreaWrapper",
        width: e,
        easing: "easeInOutSine",
        duration: 300
      })
    }
  }, [])
  return React.createElement("div", {
    id: "previewAreaWrapper",
    className: Styles_module_css1.wrapper,
    ref: r,
    style: {
      marginLeft: i || o ? 0 : -l
    }
  }, React.createElement("section", {
    className: Styles_module_css1.body
  }, React.createElement(React.Fragment, null, React.createElement("aside", {
    style: {
      width: "".concat(Cv, "px")
    },
    className: Styles_module_css1.side
  }, React.createElement(Ov, {
    singleColumn: Tv
  })), React.createElement(to, null), React.createElement("main", {
    className: Styles_module_css1.main,
    ref: n
  }, React.createElement(zd, null), React.createElement(wv, null), React.createElement(ContextMenu_index.a, null)), !o && React.createElement(Module_748.a, {
    placement: "bottom",
    title: useIntl$formatMessage({
      id: i ? "HeaderDropdown.hideWidgetAndStage" : "HeaderDropdown.showWidgetAndStage"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    className: Classnames(Styles_module_css1.foldBtn, i ? Styles_module_css1.hide : Styles_module_css1.show, (m || a) && Styles_module_css1.visible),
    onClick: function () {
      t(Redux_common_actions.Yi(!i))
    },
    onMouseEnter: function () {
      return g(true)
    },
    onMouseLeave: function () {
      return g(false)
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-double-arrow"
  })))), React.createElement(Rn, null)), !o && React.createElement(lo, {
    onDrag: function (e) {
      t(Redux_common_actions.Zi(e - Cv))
    },
    onDragEnd: function (e) {
      u(e + 1)
      t(Redux_common_actions.Zi(e - Cv))
    },
    onEnter: function () {
      return t(Redux_common_actions.ui(true))
    },
    onLeave: function () {
      return t(Redux_common_actions.ui(false))
    },
    previewAreaRef: r
  }))
})
export { Cv }
export { Sv }
