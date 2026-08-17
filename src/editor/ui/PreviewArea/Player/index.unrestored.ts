/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-23
 */

"use strict"

import { Q } from "../../../../../unrestored/shared/1571/2636/index__part-3"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Shared_widget_custom_load from /* 34 */"../../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Shared_ui_language from /* 23 */"../../../../shared/ui/language"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useRef, useCallback, useEffect, useLayoutEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Animejs from /* 205 */"animejs"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../../../../../unrestored/shared/1571/2636/90"
import * as /* [auto-meaningful-name] */Module_738 from /* 738 */"../../../../../unrestored/shared/1571/2636/738/index"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"../../../../../unrestored/shared/1571/2636/68"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../../../unrestored/shared/1571/2636/55"
import * as /* [auto-meaningful-name] */Widget_builtIn_types from /* 5 */"../../../widget/built-in/types"
import * as /* [auto-meaningful-name] */Index_module_css from /* 618 */"./index.module.css"
import /* [auto-meaningful-name] */Index_module_css1 from /* 618 */"./index.module.css"
var Nn = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$vibrating = e.vibrating
  var /* [auto-meaningful-name] */e$scale = e.scale
  return React.createElement("div", {
    className: Classnames(Index_module_css1.deviceFrameContainer, Index_module_css1.galaxy5),
    style: {
      transform: "scale(".concat(e$scale, ")")
    }
  }, React.createElement("div", {
    className: Classnames(Index_module_css1.deviceFrame, {
      vibrate: e$vibrating
    })
  }, e$children, React.createElement("div", {
    className: Index_module_css1.mask
  })))
})
var Rn = React.memo(function () {
  var e = useSelector(function (e) {
    return e.project.playing
  })
  var t = useSelector(function (e) {
    return e.project.playedAt
  })
  var n = useSelector(function (e) {
    return e.project.id
  })
  var r = useSelector(function (e) {
    return e.common.language
  })
  var o = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = useState(false)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useRef()
  var d = useRef()
  var p = useRef(null)
  var m = useRef(null)
  var g = useRef(null)
  var v = useState(null)
  var b = Module_10.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = useState(1)
  var w = Module_10.a(O, 2)
  var C = w[0]
  var A = w[1]
  var j = function (e) {
    var t = Date.now() + e.data.duration
    if (!(d.current && d.current >= t)) {
      l(true)
      window.clearTimeout(u.current)
      u.current = window.setTimeout(function () {
        return l(false)
      }, e.data.duration)
      d.current = t
    }
  }
  function N() {
    window.clearTimeout(u.current)
    d.current = 0
    l(false)
  }
  var R = useCallback(function (e) {
    var /* [auto-meaningful-name] */e$data = e.data
    var /* [auto-meaningful-name] */e$data$id = e$data.id
    var /* [auto-meaningful-name] */e$data$tab = e$data.tab
    var /* [auto-meaningful-name] */e$data$value = e$data.value
    o(Redux_common_actions.Pj(e$data$id, "value", e$data$value))
    if (!(e$data$tab !== Widget_builtIn_types.B && e$data$tab !== Widget_builtIn_types.G)) {
      o(Redux_common_actions.Pj(e$data$id, "defaultValue", e$data$value))
    }
  }, [o])
  var k = useCallback(function (e) {
    var /* [auto-meaningful-name] */e$data$type = e.data.type
    localStorage.removeItem("".concat(e$data$type, "DialogPermission"))
    o(Redux_common_actions.Ej({
      type: e$data$type,
      visible: true,
      onConfirm: function () {
        localStorage.setItem("".concat(e$data$type, "DialogPermission"), "true")
      },
      onDeny: function () {
        localStorage.setItem("".concat(e$data$type, "DialogPermission"), "false")
      }
    }))
  }, [o])
  var x = useCallback(function (e) {
    var /* [auto-meaningful-name] */e$data = e.data
    var n = ""
    var /* [auto-meaningful-name] */e$data$widgetType = e$data.widgetType
    var /* [auto-meaningful-name] */e$data$widgetId = e$data.widgetId
    e$data.message = e$data.message || ""
    if (!e$data$widgetType && e$data$widgetId) {
      var c = Module_9.Bb(e$data$widgetId)
      if (c) {
        e$data$widgetType = c.type
      }
    }
    if (e$data$widgetType) {
      var l = Module_9.Db(e$data$widgetType)
      var u = useIntl$formatMessage({
        id: (null === l || undefined === l ? undefined : l.title) || (null === l || undefined === l ? undefined : l.previewAreaWidgetTitle)
      })
      if (u) {
        n += "【".concat(u, "】")
      }
    }
    if (e$data$widgetId) {
      var d = Module_9.Fb(e$data$widgetId)
      if (d) {
        n += "".concat(d, " ")
      }
    }
    if (e$data.msgType === Module_55.a) {
      if (e$data$widgetType && !Shared_widget_custom_load.q(e$data$widgetType)) {
        e$data.message = Shared_ui_language.d(e$data.message, e$data.values)
      }
    } else {
      e$data.message = Shared_ui_language.f(r, e$data.message, e$data.values)
    }
    if (n) {
      e$data.message = "".concat(n).concat(e$data.message)
    }
    o(Redux_common_actions.nf(e$data))
    if (!("error" !== e$data.type && "customError" !== e$data.type && "lintError" !== e$data.type)) {
      Module_141.a("ConsoleDetail", {
        errorMessage: e$data.message,
        warningMessage: ""
      })
    }
    if ("warning" === e$data.type) {
      Module_141.a("ConsoleDetail", {
        errorMessage: "",
        warningMessage: e$data.message
      })
    }
  }, [o, useIntl$formatMessage, r])
  useEffect(function () {
    Q.add(Module_68.b.DEVICE_VIBRATE, j)
    Q.add(Module_68.b.DEVICE_NOT_VIBRATE, N)
    Q.add(Module_68.b.PLAYER_DATA_WATCH, R)
    Q.add(Module_68.b.RUNTIME_LOG, x)
    Q.add(Module_68.b.PLAYER_PERMISSION, k)
  }, [x, R, k])
  useEffect(function () {
    function e() {
      o(Redux_common_actions.vi(!navigator.onLine))
    }
    window.addEventListener("online", e)
    window.addEventListener("offline", e)
    return function () {
      window.removeEventListener("online", e)
      window.removeEventListener("offline", e)
    }
  }, [o])
  useEffect(function () {
    if (!e) {
      if (u.current) {
        window.clearTimeout(u.current)
      }
      d.current = 0
      l(false)
    }
  }, [e, o])
  useLayoutEffect(function () {
    if (e && p.current && m.current) {
      var /* [auto-meaningful-name] */p$current$clientWidth = p.current.clientWidth
      var /* [auto-meaningful-name] */p$current$clientHeight = p.current.clientHeight
      var r = Math.min((t - 208) / 384, (n - 20) / 700, 1)
      r = Math.floor(10 * r) / 10
      var o = t / 2 + 192 * (r = Math.max(r, .7))
      if (g.current) {
        g.current.style.left = "".concat(o, "px")
      }
      A(r)
    }
  }, [e])
  var D = window.location.search.split("?")[1]
  var M = new URLSearchParams(D).get("archiveId")
  var L = M ? "?&archiveId=".concat(M) : ""
  var P = "#id=".concat(n, "&ts=").concat(t, "&emulator=1")
  return React.createElement("div", {
    style: {
      display: e ? undefined : "none"
    },
    className: Index_module_css1.wrapper,
    ref: p
  }, React.createElement("div", {
    className: Index_module_css1.deviceFrameWrapper
  }, React.createElement(Nn, {
    vibrating: c && e,
    scale: C
  }, e && React.createElement("iframe", {
    ref: function (e) {
      m.current = e
      E((null === e || undefined === e ? undefined : e.contentWindow) || null)
    },
    title: "Coco Player",
    sandbox: "allow-forms allow-modals allow-popups allow-same-origin allow-scripts",
    src: "".concat("/editor/editor-player.html").concat(L).concat(P)
  }))), React.createElement("div", {
    className: Index_module_css1.emulatorWrapper,
    ref: g
  }, React.createElement(Module_738.a, {
    messageWindow: y
  })))
})
export { Rn }
