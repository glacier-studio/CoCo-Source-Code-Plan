/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-148
 */

"use strict"

import { gT, _T, vT } from "./index__part-146"
import { OT } from "./index__part-147"
import /* [auto-meaningful-name] */Module_99 from /* 99 */"./99"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useMemo, useRef, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_935 from /* 935 */"./935"
import /* [auto-meaningful-name] */Module_9351 from /* 935 */"./935"
var TT = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useDispatch()
  var n = useSelector(function (e) {
    return e.block.dropdown
  })
  var r = useMemo(function () {
    return n.options.some(function (e) {
      var /* [auto-meaningful-name] */e$icon
      var n
      return Src_shared_packages_Crc_blink_src_index.BU.base.is_old_dropdown_option(e) ? "string" === typeof (null === (n = e[2]) || undefined === n ? undefined : n.src) : "basic" === e.type && "string" === typeof (null === (e$icon = e.icon) || undefined === e$icon ? undefined : e$icon.src)
    })
  }, [n])
  return React.createElement(Src_shared_ui_components_index.w, {
    className: Classnames(Module_99.dynamicDataList, r && Module_99.imageTextDataList),
    open: n.visible,
    value: n.value,
    onChange: function (e) {
      if ("__EMPTY_VALUE__" !== e) {
        n.setValue(e)
      }
      t(Src_editor_redux_common_actions.gh())
    }
  }, n.options.map(function (t, n) {
    var r
    if (Src_shared_packages_Crc_blink_src_index.BU.base.is_old_dropdown_option(t)) {
      return t[1] === Module_9.h && t[0] === Module_9.g ? React.createElement("div", {
        className: Module_99.nullItem
      }, useIntl$formatMessage({
        id: "closeHeadline"
      })) : React.createElement(Src_shared_ui_components_index.p, {
        value: t[1],
        key: n,
        className: Module_99.dropdownOption
      }, t[2] && "string" === typeof (null === (r = t[2]) || undefined === r ? undefined : r.src) && React.createElement("div", {
        className: Module_99.dropdownImageBox
      }, React.createElement("img", {
        src: t[2].src,
        className: Module_99.image,
        alt: ""
      })), React.createElement("span", null, t[0]))
    }
    if ("line" === t.type) {
      return React.createElement("div", {
        className: Module_99.line,
        key: n
      })
    }
    if ("basic" === t.type) {
      var /* [auto-meaningful-name] */t$icon
      var /* [auto-meaningful-name] */t$icon1
      if (t.value === Module_9.h && t.text === Module_9.g) {
        return
      }
      return React.createElement(Src_shared_ui_components_index.p, {
        value: t.value,
        key: n,
        className: Module_99.dropdownOption
      }, "nextScreen" !== t.value && "prevScreen" !== t.value && React.createElement("div", {
        className: Module_9351.screenIndex
      }, n + 1, "."), ("nextScreen" === t.value || "prevScreen" === t.value) && React.createElement("div", {
        className: Module_9351.screenIndex
      }, ""), "string" === typeof (null === (t$icon = t.icon) || undefined === t$icon ? undefined : t$icon.src) && React.createElement("div", {
        className: Module_99.dropdownImageBox
      }, "nextScreen" === t.value && React.createElement(Src_shared_ui_components_index.j, {
        className: Module_9351.dropdownImageScreen,
        type: "icon-prev-screen"
      }), "prevScreen" === t.value && React.createElement(Src_shared_ui_components_index.j, {
        className: Module_9351.dropdownImageScreen,
        type: "icon-next-screen"
      }), React.createElement("img", {
        src: t.icon.src,
        className: Module_99.image,
        alt: ""
      })), "object" === typeof (null === (t$icon1 = t.icon) || undefined === t$icon1 ? undefined : t$icon1.src) && React.createElement("div", {
        className: Module_99.dropdownIconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-screen-variable"
      })), React.createElement("span", null, t.text))
    }
  }))
})
var ST = memo(function () {
  var e = useRef(null)
  var t = useDispatch()
  var n = useSelector(function (e) {
    return e.block.dropdown
  })
  var /* [auto-meaningful-name] */n$position = n.position
  var /* [auto-meaningful-name] */n$blockInfo = n.blockInfo
  var i = useState(0)
  var a = Module_10.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useState(-1e3)
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  useEffect(function () {
    if (n.visible) {
      if (n$position.top > window.innerHeight / 2 && e.current) {
        var /* [auto-meaningful-name] */e$current$clientHeight = e.current.clientHeight
        var i = n$position.top - e$current$clientHeight * n$blockInfo.scale - n$blockInfo.blockHeight
        c(i)
      } else {
        c(n$position.top)
      }
      if (e.current && n$position.left + e.current.clientWidth > window.innerWidth) {
        var a = n$position.left - e.current.clientWidth + n$blockInfo.fieldWidth
        p(a)
      } else {
        p(n$position.left)
      }
      if (e.current) {
        e.current.focus()
      }
    }
  })
  useEffect(function () {
    function r(n) {
      var /* [auto-meaningful-name] */n$target = n.target
      var /* [auto-meaningful-name] */e$current = e.current
      if (!(e$current && e$current.contains(n$target))) {
        t(Src_editor_redux_common_actions.gh())
        document.body.removeEventListener("mousedown", r, {
          capture: true
        })
      }
    }
    if (n.visible) {
      document.body.addEventListener("mousedown", r, {
        capture: true
      })
    }
    return function () {
      document.body.removeEventListener("mousedown", r, {
        capture: true
      })
    }
  }, [t, n])
  return React.createElement("div", {
    ref: e,
    className: Module_99.blockDropdown,
    style: {
      position: "fixed",
      top: s,
      left: d,
      transformOrigin: "left top",
      transform: "scale(".concat(n.blockInfo.scale, ")"),
      zIndex: 2
    }
  }, [Module_18.a.IMAGE_DROPDOWN, Module_18.a.ICON_DROPDOWN].includes(n.type) && React.createElement(_T, {
    type: n.type
  }), n.type === Module_18.a.SOUND_DROPDOWN && React.createElement(vT, null), n.type === Module_18.a.DYNAMIC_DROPDOWN && React.createElement(gT, null), n.type === Module_18.a.ACTOR_STYLE_DROPDOWN && React.createElement(OT, null), n.type === Module_18.a.SCREEN_DROPDOWN && React.createElement(TT, null))
})
export { ST }
