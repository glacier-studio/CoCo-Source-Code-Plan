/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-142
 */

"use strict"

import { wy } from "../../../../../unrestored/shared/1571/2636/index__part-105"
import { FC } from "../../../../../unrestored/shared/1571/2636/index__part-141"
import /* [auto-meaningful-name] */Styles_module_css from /* 420 */"./styles.module.css"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../../../../../unrestored/shared/1571/2636/33"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Shared_widget_custom_load from /* 34 */"../../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from "react-intl"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1057 from /* 1057 */"../../../../../unrestored/shared/1571/2636/1057"
import /* [auto-meaningful-name] */Module_10571 from /* 1057 */"../../../../../unrestored/shared/1571/2636/1057"
var UC = memo(function (e) {
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$editConfig = e.editConfig
  var /* [auto-meaningful-name] */e$widgetIcon = e.widgetIcon
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var i = Module_33.Cb(e$widgetId)
  var a = e$editConfig.some(function (e) {
    return !Array.isArray(e) && "HelpUrl" === e.type
  })
  var s = Module_238.b()
  var c = useDispatch()
  if (!i || !i.type) {
    return null
  }
  function l(e) {
    var t = i
    return e in t ? t[e] : t.attributes && e in t.attributes ? t.attributes[e] : undefined
  }
  var u = function (e, n) {
    var /* [auto-meaningful-name] */e$type = e.type
    var /* [auto-meaningful-name] */e$key = e.key
    var s = FC[e$type]
    var u = "".concat(e$widgetId, "-").concat(e$type, "-").concat(e$key || "")
    if (s) {
      return React.createElement(s, {
        key: u,
        widgetId: e$widgetId,
        keyName: e$key,
        icon: e$widgetIcon,
        onChange: function (e, n) {
          !function (e, n, r) {
            var i = true
            if (Shared_widget_custom_load.q(e$widgetType)) {
              if (!(Module_33.k.includes(e) && Module_33.l.includes(r))) {
                i = false
              }
            }
            c(Redux_common_actions.Lg(e$widgetId, e, n, undefined, undefined, undefined, i))
          }(e, n, e$type)
        },
        getValue: l,
        formConfig: e,
        renderInline: n
      })
    }
  }
  return React.createElement(Shared_ui_components_index.h, {
    className: Classnames(Module_10571.formGroup, a && Module_10571.formGroupHasHelpUrl),
    "data-updated-at": s
  }, React.createElement("div", null, function e(n, r) {
    return n.map(function (n, o) {
      return Array.isArray(n) ? React.createElement(Shared_ui_components_index.u, {
        key: "".concat(e$widgetId, "-").concat(o),
        className: Module_10571.formItemWrapper,
        align: "middle",
        justify: "space-between"
      }, e(n, true)) : u(n, r)
    })
  }(e$editConfig, false)))
})
var HC = memo(function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var r = useSelector(function (e) {
    return e.common.widgetAttributeVisible
  })
  var o = useSelector(function (e) {
    return e.common.consoleHeight
  })
  var i = useSelector(function (e) {
    return e.common.blockyToolboxPinned
  })
  var a = n ? Module_9.Bb(n) : undefined
  var s = useSelector(function (e) {
    return e.uiConfig.widgetEditor
  }) === Module_18.j.ReadOnly
  var c = function () {
    var t
    if (!(e(Redux_common_actions.fj(false)), i)) {
      Module_26.g.setSelectedItem()
      if (!(null === (t = Module_26.g.getToolbox()) || undefined === t)) {
        t.flyout.hide()
      }
    }
  }
  if (n && !a) {
    e(Redux_common_actions.fj(false))
    return null
  }
  if (null === a || undefined === a ? undefined : a.type) {
    var /* [auto-meaningful-name] */a$type = a.type
    var u = Module_9.Db(a$type)
    if (u) {
      var /* [auto-meaningful-name] */u$editConfig = u.editConfig
      var /* [auto-meaningful-name] */u$icon = u.icon
      var /* [auto-meaningful-name] */u$childWidgetEditConfig = u.childWidgetEditConfig
      var m = a.parentId && u$childWidgetEditConfig ? u$childWidgetEditConfig : u$editConfig
      return React.createElement("div", {
        className: Classnames(Styles_module_css.wrapper, !r && Styles_module_css.hide),
        style: {
          bottom: o + 8
        }
      }, React.createElement("div", {
        className: Styles_module_css.header
      }, React.createElement("h3", {
        className: Styles_module_css.title
      }, useIntl$formatMessage({
        id: "property"
      })), React.createElement("div", {
        onClick: c,
        className: Styles_module_css.close
      }, React.createElement(Shared_ui_components_index.j, {
        type: "icon-close-bold"
      }))), React.createElement("div", {
        className: Classnames(Styles_module_css.content, s && Styles_module_css.readonly)
      }, React.createElement(UC, {
        widgetId: a.id,
        widgetType: a.type,
        editConfig: m,
        widgetIcon: u$icon
      })))
    }
  }
  return React.createElement("div", {
    className: Classnames(Styles_module_css.wrapper, !r && Styles_module_css.hide),
    style: {
      bottom: o + 8
    }
  }, React.createElement("div", {
    className: Styles_module_css.header
  }, React.createElement("h3", {
    className: Styles_module_css.title
  }, useIntl$formatMessage({
    id: "property"
  })), React.createElement("div", {
    onClick: c,
    className: Styles_module_css.close
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-close-bold"
  }))), React.createElement("div", {
    className: Classnames(Styles_module_css.content, s && Styles_module_css.readonly)
  }, React.createElement(wy, null)))
})
export { HC }
