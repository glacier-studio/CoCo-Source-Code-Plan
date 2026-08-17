/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-146
 */

"use strict"

import { Ag } from "./index__part-79"
import /* [auto-meaningful-name] */Module_99 from /* 99 */"./99"
import * as /* [auto-meaningful-name] */Module_135 from /* 135 */"./135"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"./133/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState, useEffect, useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1522 from /* 1522 */"./1522"
import * as /* [auto-meaningful-name] */Module_207 from /* 207 */"./207/index"
import * as /* [auto-meaningful-name] */Module_1523 from /* 1523 */"./1523/index"
import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"./43"
import * as /* [auto-meaningful-name] */Module_1059 from /* 1059 */"./1059"
import /* [auto-meaningful-name] */Module_10591 from /* 1059 */"./1059"
var pT = memo(function () {
  var e = useRef(null)
  var t = useDispatch()
  var n = useState(100)
  var r = Module_10.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = useSelector(function (e) {
    return e.block.slider
  })
  useEffect(function () {
    var e = parseInt(a.value)
    e = (e = e > a.max ? a.max : e) < a.min ? a.min : e
    i(e)
  }, [a])
  useEffect(function () {
    function n(r) {
      var /* [auto-meaningful-name] */r$target = r.target
      var /* [auto-meaningful-name] */e$current = e.current
      if (!("blocklyHtmlInput" === r$target.className || e$current && e$current.contains(r$target))) {
        t(Src_editor_redux_common_actions.ih())
        document.body.removeEventListener("mousedown", n, {
          capture: true
        })
      }
    }
    if (a.visible) {
      document.body.addEventListener("mousedown", n, {
        capture: true
      })
    }
    return function () {
      document.body.removeEventListener("mousedown", n, {
        capture: true
      })
    }
  }, [t, a])
  return React.createElement("div", {
    ref: e,
    className: Module_10591.sliderWrapper,
    style: {
      position: "fixed",
      top: a.top + 4,
      left: a.left - 70,
      zIndex: 2
    }
  }, React.createElement("span", {
    className: Module_10591.leftSliderText
  }, a.minText), React.createElement(Src_shared_ui_components_index.x, {
    value: o,
    min: a.min,
    max: a.max,
    onChange: function (e) {
      i(e)
      setTimeout(function () {
        return a.setValue(e + "")
      }, 0)
    }
  }), React.createElement("span", {
    className: Module_10591.rightSliderText
  }, a.maxText))
})
var fT = memo(function (e) {
  var /* [auto-meaningful-name] */e$options = e.options
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = useDispatch()
  var o = useSelector(function (e) {
    return e.block.dropdown
  })
  var i = useMemo(function () {
    return e$options.some(function (e) {
      var /* [auto-meaningful-name] */e$icon
      var n
      return Src_shared_packages_Crc_blink_src_index.BU.base.is_old_dropdown_option(e) ? "string" === typeof (null === (n = e[2]) || undefined === n ? undefined : n.src) : "basic" === e.type && "string" === typeof (null === (e$icon = e.icon) || undefined === e$icon ? undefined : e$icon.src)
    })
  }, [e$options])
  return React.createElement(Src_shared_ui_components_index.w, {
    className: Classnames(Module_99.dynamicDataList, i && Module_99.imageTextDataList),
    open: o.visible,
    value: o.value,
    onChange: function (e) {
      if (e !== __EMPTY_VALUE__) {
        o.setValue(e)
      }
      r(Src_editor_redux_common_actions.gh())
    }
  }, e$options.map(function (e, t) {
    var r
    if (Src_shared_packages_Crc_blink_src_index.BU.base.is_old_dropdown_option(e)) {
      return e[1] === Module_9.h && e[0] === Module_9.g ? React.createElement("div", {
        className: Module_99.nullItem,
        key: t
      }, useIntl$formatMessage({
        id: "closeHeadline"
      })) : React.createElement(Src_shared_ui_components_index.p, {
        value: e[1],
        key: t,
        className: Module_99.dropdownOption
      }, e[2] && "string" === typeof (null === (r = e[2]) || undefined === r ? undefined : r.src) && React.createElement("div", {
        className: Module_99.dropdownImageBox
      }, React.createElement("img", {
        src: e[2].src,
        className: Module_99.image,
        alt: ""
      })), React.createElement("span", null, e[0]))
    }
    if ("line" === e.type) {
      return React.createElement("div", {
        className: Module_99.line,
        key: t
      })
    }
    if ("basic" === e.type) {
      var /* [auto-meaningful-name] */e$icon
      var /* [auto-meaningful-name] */e$icon1
      if (e.value === Module_9.h && e.text === Module_9.g) {
        return
      }
      return "DROPDOWN_ADD_BUTTON" === e.value ? React.createElement(Src_shared_ui_components_index.p, {
        value: __EMPTY_VALUE__,
        key: t
      }, React.createElement("div", {
        className: Module_99.addOption,
        onClick: e.callback
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-add"
      }), React.createElement("span", null, e.text))) : React.createElement(Src_shared_ui_components_index.p, {
        value: e.value,
        key: t,
        className: Module_99.dropdownOption
      }, "string" === typeof (null === (e$icon = e.icon) || undefined === e$icon ? undefined : e$icon.src) && React.createElement("div", {
        className: Module_99.dropdownImageBox
      }, React.createElement("img", {
        src: e.icon.src,
        className: Module_99.image,
        alt: ""
      })), "object" === typeof (null === (e$icon1 = e.icon) || undefined === e$icon1 ? undefined : e$icon1.src) && React.createElement("div", {
        className: Module_99.dropdownIconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-screen-variable"
      })), React.createElement("span", null, e.text))
    }
  }))
})
var hT = memo(function (e) {
  var /* [auto-meaningful-name] */e$group = e.group
  var /* [auto-meaningful-name] */e$group$name = e$group.name
  var /* [auto-meaningful-name] */e$group$options = e$group.options
  var o = useRef(null)
  var i = useSelector(function (e) {
    return e.block.dropdown
  })
  var a = useState("right")
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState(false)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = e$group$options.some(function (e) {
    return "value" in e && e.value === i.value || Array.isArray(e) && e[1] === i.value
  })
  var v = useMemo(function () {
    return Lodash.debounce(m, 100)
  }, [])
  return React.createElement("div", {
    ref: o,
    style: {
      position: "relative"
    },
    onMouseEnter: function () {
      v(function () {
        return true
      })
      var /* [auto-meaningful-name] */o$current = o.current
      if (o$current) {
        var t = o$current.getClientRects()[0]
        if (t.x + t.width + t.width < window.innerWidth) {
          l("right")
        } else {
          l("left")
        }
      }
    },
    onMouseLeave: function () {
      v(function () {
        return false
      })
    }
  }, React.createElement(Src_shared_ui_components_index.p, {
    value: __EMPTY_VALUE__,
    className: Classnames(g && "selected", p && "hovered")
  }, React.createElement("span", null, e$group$name)), React.createElement("div", {
    style: {
      position: "absolute",
      top: 7,
      right: 2
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-fold-left",
    className: Module_99.icon
  })), React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: "right" === c ? "100%" : undefined,
      right: "left" === c ? "100%" : undefined,
      visibility: p ? "visible" : "hidden"
    }
  }, React.createElement("div", {
    style: {
      position: "fixed",
      boxShadow: "0px 0px 6px 0px rgb(177 163 191 / 30%)",
      transform: "left" === c ? "translateX(-100%)" : undefined
    }
  }, React.createElement(fT, {
    options: e$group$options
  }))))
})
var /* [auto-meaningful-name] */__EMPTY_VALUE__ = "__EMPTY_VALUE__"
var gT = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useDispatch()
  var n = useSelector(function (e) {
    return e.block.dropdown
  })
  var r = useSelector(function (e) {
    return e.project.currentScreenIndex
  })
  var o = useMemo(function () {
    return n.options.some(function (e) {
      var /* [auto-meaningful-name] */e$icon
      var n
      return Src_shared_packages_Crc_blink_src_index.BU.base.is_old_dropdown_option(e) ? "string" === typeof (null === (n = e[2]) || undefined === n ? undefined : n.src) : "basic" === e.type && "string" === typeof (null === (e$icon = e.icon) || undefined === e$icon ? undefined : e$icon.src)
    })
  }, [n])
  return React.createElement(Src_shared_ui_components_index.w, {
    className: Classnames(Module_99.dynamicDataList, o && Module_99.imageTextDataList),
    open: n.visible,
    value: n.value,
    onChange: function (e) {
      if (e !== __EMPTY_VALUE__) {
        n.setValue(e)
      }
      t(Src_editor_redux_common_actions.gh())
    }
  }, n.options.map(function (t, o) {
    var i
    if (Src_shared_packages_Crc_blink_src_index.BU.base.is_old_dropdown_option(t)) {
      return t[1] === Module_9.h && t[0] === Module_9.g ? React.createElement("div", {
        className: Module_99.nullItem
      }, useIntl$formatMessage({
        id: "closeHeadline"
      })) : React.createElement(Src_shared_ui_components_index.p, {
        value: t[1],
        key: o,
        className: Module_99.dropdownOption
      }, t[2] && "string" === typeof (null === (i = t[2]) || undefined === i ? undefined : i.src) && React.createElement("div", {
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
        key: o
      })
    }
    if ("group" === t.type) {
      return React.createElement(hT, {
        key: o,
        group: t
      })
    }
    if ("basic" === t.type) {
      var /* [auto-meaningful-name] */t$icon
      var /* [auto-meaningful-name] */t$icon1
      if (t.value === Module_9.h && t.text === Module_9.g) {
        return
      }
      return "DROPDOWN_ADD_BUTTON" === t.value ? React.createElement(Src_shared_ui_components_index.p, {
        value: __EMPTY_VALUE__,
        key: o
      }, React.createElement("div", {
        className: Module_99.addOption,
        onClick: t.callback
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-add"
      }), React.createElement("span", null, t.text))) : t.value === Ag.NO_BIND_DATA_SOURCE ? React.createElement("div", {
        className: Module_99.optionTips,
        key: Ag.NO_BIND_DATA_SOURCE
      }, React.createElement("span", null, t.text)) : t.value === Ag.EMPTY_KEYS_DATA ? React.createElement("div", {
        className: Module_99.optionTips,
        key: Ag.EMPTY_KEYS_DATA
      }, React.createElement("span", null, t.text)) : t.value === Ag.FETCH_DATA_FAILED ? React.createElement("div", {
        className: Module_99.optionTips,
        key: Ag.FETCH_DATA_FAILED
      }, React.createElement("span", null, t.text), React.createElement("div", {
        className: Module_99.btn,
        onClick: t.callback
      }, useIntl$formatMessage({
        id: "retry"
      }))) : React.createElement(Src_shared_ui_components_index.p, {
        value: t.value,
        key: o,
        className: Module_99.dropdownOption
      }, "string" === typeof (null === (t$icon = t.icon) || undefined === t$icon ? undefined : t$icon.src) && React.createElement("div", {
        className: Module_99.dropdownImageBox
      }, React.createElement("img", {
        src: t.icon.src,
        className: Module_99.image,
        alt: ""
      })), "object" === typeof (null === (t$icon1 = t.icon) || undefined === t$icon1 ? undefined : t$icon1.src) && React.createElement("div", {
        className: Classnames(Module_99.dropdownIconBox, n.showCurrentScreenIndex && Module_99.showCurrentScreenBg)
      }, React.createElement(Src_shared_ui_components_index.j, {
        className: "coco-iconfont-screen-bg",
        type: r > 8 ? "icon-screen-variable-plus" : "icon-screen-variable"
      }), React.createElement("div", {
        className: Module_99.screenIconBox
      }, React.createElement("div", {
        className: Module_99.screenIconText
      }, n.showCurrentScreenIndex && r + 1))), React.createElement("span", null, t.text))
    }
  }))
})
var _T = memo(function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var n = useSelector(function (e) {
    return e.block.dropdown
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = useDispatch()
  return React.createElement("ul", {
    className: Module_99.imageEntryList,
    style: {
      display: n.visible ? "block" : "none"
    }
  }, React.createElement("li", {
    onClick: function () {
      o(Src_editor_redux_common_actions.wj(e$type === Module_18.a.IMAGE_DROPDOWN ? Module_68.c.ImageLibrary : Module_68.c.IconLibrary, function (e) {
        var t = e[0]
        n.setValue(t.id)
        o(Src_editor_redux_common_actions.sh())
      }))
    }
  }, useIntl$formatMessage({
    id: e$type === Module_18.a.IMAGE_DROPDOWN ? "selectByLibrary" : "selectByIconLibrary"
  })), React.createElement("li", null, React.createElement(Src_shared_ui_components_index.B, {
    onChange: function (e) {
      if (e) {
        var r = e$type === Module_18.a.IMAGE_DROPDOWN ? Src_editor_redux_common_actions.Zf : Src_editor_redux_common_actions.rf
        o(r(e, function (e) {
          var t = e[0]
          n.setValue(t.id)
          o(Src_editor_redux_common_actions.gh())
        }))
      }
    },
    accept: e$type === Module_18.a.IMAGE_DROPDOWN ? Module_133.f : Module_133.c
  }, useIntl$formatMessage({
    id: "uploadFileByLocal"
  }))), n.blockInfo.emptyImageVisible && React.createElement("li", {
    onClick: function () {
      n.setValue(Module_9.f)
      o(Src_editor_redux_common_actions.gh())
    }
  }, useIntl$formatMessage({
    id: "emptyImage"
  })))
})
var vT = memo(function () {
  var e = useSelector(function (e) {
    return e.block.dropdown
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useDispatch()
  return React.createElement("ul", {
    className: Module_99.imageEntryList,
    style: {
      display: e.visible ? "block" : "none"
    }
  }, React.createElement("li", {
    onClick: function () {
      n(Src_editor_redux_common_actions.wj(Module_68.c.SoundLibrary, function (t) {
        var r = t[0]
        e.setValue(r.id)
        n(Src_editor_redux_common_actions.sh())
      }))
    }
  }, useIntl$formatMessage({
    id: "selectByLibrary"
  })), React.createElement("li", null, React.createElement(Src_shared_ui_components_index.B, {
    onChange: function (t) {
      if (t) {
        n(Src_editor_redux_common_actions.wf(t, function (t) {
          var r = t[0]
          e.setValue(r.id)
          n(Src_editor_redux_common_actions.gh())
        }))
      }
    },
    accept: Module_135.h
  }, useIntl$formatMessage({
    id: "uploadFileByLocal"
  }))))
})
export { pT }
export { gT }
export { _T }
export { vT }
