/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-102
 */

"use strict"

import { Nb, kb } from "./index__part-95"
import { Yb } from "./index__part-97"
import { Zb } from "./index__part-99"
import { ty } from "./index__part-100"
import { ay } from "./index__part-101"
import * as /* [auto-meaningful-name] */Module_1044 from /* 1044 */"./1044"
import * as /* [auto-meaningful-name] */Module_803 from /* 803 */"./803"
import * as /* [auto-meaningful-name] */Module_610 from /* 610 */"./610"
import * as /* [auto-meaningful-name] */Module_801 from /* 801 */"./801/index"
import * as /* [auto-meaningful-name] */Module_486 from /* 486 */"./486"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"./35"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useContext, useMemo, createElement, forwardRef, memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_517 from /* 517 */"./517"
import * as /* [auto-meaningful-name] */Module_435 from /* 435 */"./435"
var ly = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var uy = function (e, t) {
  var n
  var r
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$bordered = e.bordered
  var a = undefined === e$bordered || e$bordered
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
  var /* [auto-meaningful-name] */e$dropdownClassName = e.dropdownClassName
  var /* [auto-meaningful-name] */e$listHeight = e.listHeight
  var d = undefined === e$listHeight ? 256 : e$listHeight
  var /* [auto-meaningful-name] */e$listItemHeight = e.listItemHeight
  var h = undefined === e$listItemHeight ? 24 : e$listItemHeight
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$notFoundContent = e.notFoundContent
  var _ = ly(e, ["prefixCls", "bordered", "className", "getPopupContainer", "dropdownClassName", "listHeight", "listItemHeight", "size", "notFoundContent"])
  var v = useContext(Module_801.b)
  var /* [auto-meaningful-name] */v$getPopupContainer = v.getPopupContainer
  var /* [auto-meaningful-name] */v$getPrefixCls = v.getPrefixCls
  var /* [auto-meaningful-name] */v$renderEmpty = v.renderEmpty
  var /* [auto-meaningful-name] */v$direction = v.direction
  var /* [auto-meaningful-name] */v$virtual = v.virtual
  var /* [auto-meaningful-name] */v$dropdownMatchSelectWidth = v.dropdownMatchSelectWidth
  var T = useContext(Module_517.b)
  var S = v$getPrefixCls("select", e$prefixCls)
  var A = v$getPrefixCls()
  var I = useMemo(function () {
    var /* [auto-meaningful-name] */_$mode = _.mode
    if ("combobox" !== _$mode) {
      return "SECRET_COMBOBOX_MODE_DO_NOT_USE" === _$mode ? "combobox" : _$mode
    }
  }, [_.mode])
  var j = "multiple" === I || "tags" === I
  r = undefined !== e$notFoundContent ? e$notFoundContent : "combobox" === I ? null : v$renderEmpty("Select")
  var R = function (e) {
    var /* [auto-meaningful-name] */e$suffixIcon = e.suffixIcon
    var /* [auto-meaningful-name] */e$clearIcon = e.clearIcon
    var /* [auto-meaningful-name] */e$menuItemSelectedIcon = e.menuItemSelectedIcon
    var /* [auto-meaningful-name] */e$removeIcon = e.removeIcon
    var /* [auto-meaningful-name] */e$loading = e.loading
    var /* [auto-meaningful-name] */e$multiple = e.multiple
    var /* [auto-meaningful-name] */e$prefixCls1 = e.prefixCls
    var c = e$clearIcon
    if (!e$clearIcon) {
      c = createElement(Module_1044.a, null)
    }
    var l = null
    if (undefined !== e$suffixIcon) {
      l = e$suffixIcon
    } else if (e$loading) {
      l = createElement(Module_610.a, {
        spin: true
      })
    } else {
      var u = "".concat(e$prefixCls1, "-suffix")
      l = function (e) {
        var /* [auto-meaningful-name] */e$open = e.open
        var /* [auto-meaningful-name] */e$showSearch = e.showSearch
        return e$open && e$showSearch ? createElement(ay, {
          className: u
        }) : createElement(Zb, {
          className: u
        })
      }
    }
    return {
      clearIcon: c,
      suffixIcon: l,
      itemIcon: undefined !== e$menuItemSelectedIcon ? e$menuItemSelectedIcon : e$multiple ? createElement(ty, null) : null,
      removeIcon: undefined !== e$removeIcon ? e$removeIcon : createElement(Module_803.a, null)
    }
  }(Module_19.a(Module_19.a({}, _), {
    multiple: j,
    prefixCls: S
  }))
  var /* [auto-meaningful-name] */R$suffixIcon = R.suffixIcon
  var /* [auto-meaningful-name] */R$itemIcon = R.itemIcon
  var /* [auto-meaningful-name] */R$removeIcon = R.removeIcon
  var /* [auto-meaningful-name] */R$clearIcon = R.clearIcon
  var L = Module_486.a(_, ["suffixIcon", "itemIcon"])
  var P = Classnames(e$dropdownClassName, Module_35.a({}, "".concat(S, "-dropdown-").concat(v$direction), "rtl" === v$direction))
  var B = e$size || T
  var F = Classnames((n = {}, Module_35.a(n, "".concat(S, "-lg"), "large" === B), Module_35.a(n, "".concat(S, "-sm"), "small" === B), Module_35.a(n, "".concat(S, "-rtl"), "rtl" === v$direction), Module_35.a(n, "".concat(S, "-borderless"), !a), n), e$className)
  return createElement(Yb, Module_19.a({
    ref: t,
    virtual: v$virtual,
    dropdownMatchSelectWidth: v$dropdownMatchSelectWidth
  }, L, {
    transitionName: Module_435.b(A, "slide-up", _.transitionName),
    listHeight: d,
    listItemHeight: h,
    mode: I,
    prefixCls: S,
    direction: v$direction,
    inputIcon: R$suffixIcon,
    menuItemSelectedIcon: R$itemIcon,
    removeIcon: R$removeIcon,
    clearIcon: R$clearIcon,
    notFoundContent: r,
    className: F,
    getPopupContainer: e$getPopupContainer || v$getPopupContainer,
    dropdownClassName: P
  }))
}
var dy = forwardRef(uy)
dy.SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE"
dy.Option = Nb
dy.OptGroup = kb
var py = dy
var fy = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var /* [auto-meaningful-name] */e$fontFamily = e.fontFamily
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var i = useDispatch()
  var a = useState(Src_shared_tools_index.db)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useSelector(function (e) {
    return e.common.isOffLine
  })
  var d = useSelector(function (e) {
    return e.resource.fontFileList
  })
  useEffect(function () {
    d.forEach(function () {
      var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (c[t.id] || !t.cdnUrl) {
                  e.next = 5
                  break
                }
                e.next = 3
                return Src_shared_tools_index.bb(t.id, t.cdnUrl)
              case 3:
                Src_shared_tools_index.db[t.id] = true
                l(Src_shared_tools_index.db)
              case 5:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function (t) {
        return e.apply(this, arguments)
      }
    }())
  }, [d, c])
  var p = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(n) {
      var a
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (a = d.find(function (e) {
                return e.id === n
              }), !u || c[n] || !(null === a || undefined === a ? undefined : a.cdnUrl)) {
                e.next = 4
                break
              }
              i(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "download.offline"
                }),
                type: "error"
              }))
              return e.abrupt("return")
            case 4:
              if (e$onChange && e$onChange(e$keyName, n), c[n] || !(null === a || undefined === a ? undefined : a.cdnUrl)) {
                e.next = 11
                break
              }
              e.next = 8
              return Src_shared_tools_index.bb(n, a.cdnUrl)
            case 8:
              Src_shared_tools_index.db[n] = true
              l(Src_shared_tools_index.db)
              i(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "download.success"
                }),
                type: "success"
              }))
            case 11:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  return React.createElement(py, {
    className: Module_88.fontFamilyWrapper,
    value: e$fontFamily,
    optionLabelProp: "label",
    onChange: p,
    suffixIcon: React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-dropdown-down"
    })
  }, d.map(function (e, t) {
    return React.createElement(py.Option, {
      key: t,
      value: e.id,
      label: e.name,
      className: Module_88.option
    }, React.createElement("div", {
      className: Classnames(u && !c[e.id] && e.cdnUrl && Module_88.disabled),
      style: {
        fontFamily: e.id
      }
    }, e.name), React.createElement("div", {
      className: Module_88.iconBox
    }, e.id === e$fontFamily ? React.createElement(Src_shared_ui_components_index.j, {
      className: Module_88.selectedIcon,
      type: "icon-selected"
    }) : React.createElement(React.Fragment, null)))
  }))
})
export { py }
export { fy }
