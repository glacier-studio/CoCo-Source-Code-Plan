/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-29
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"./133/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector, batch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import /* [auto-meaningful-name] */Lodash1 from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Module_381 from /* 381 */"./381"
import /* [auto-meaningful-name] */Module_3811 from /* 381 */"./381"
var $u = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useDispatch()
  var n = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  return React.createElement("div", {
    className: Module_3811.imageAddon
  }, React.createElement(Src_shared_ui_components_index.B, {
    onChange: function (e) {
      if (e && n) {
        t(Src_editor_redux_common_actions.Zf(e, function (e) {
          t(Src_editor_redux_common_actions.Yf(e[0], n))
        }))
      }
    },
    accept: Module_133.f,
    tooltip: useIntl$formatMessage({
      id: "uploadFileByLocal"
    })
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-upload-image",
    className: Classnames(Module_3811.item)
  })), React.createElement("div", {
    className: Module_3811.gap
  }), React.createElement(Module_748.a, {
    placement: "right",
    title: useIntl$formatMessage({
      id: "resourceLibrary"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      if (n) {
        t(Src_editor_redux_common_actions.wj(Module_68.c.ImageLibrary, function (e) {
          batch(function () {
            var r = Module_9.hb(e[0].id)
            if (r) {
              t(Src_editor_redux_common_actions.Yf(r, n))
            }
            t(Src_editor_redux_common_actions.sh())
          })
        }))
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-image-library",
    className: Classnames(Module_3811.item)
  }))))
})
var ed = memo(function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useSelector(function (e) {
    return e.common.widgetAttributeVisible
  })
  return React.createElement(Module_748.a, {
    placement: "right",
    title: useIntl$formatMessage({
      id: "edit"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      var t = !n
      batch(function () {
        e(Src_editor_redux_common_actions.fj(t))
        if (t) {
          e(Src_editor_redux_common_actions.Fj(false))
        }
      })
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-attribute",
    className: Classnames(Module_3811.iconButton, Module_3811.editIcon)
  })))
})
var td = function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var n = useSelector(function (e) {
    return e.common.previewAreaUpdatedAt
  })
  var r = useState(0)
  var o = Module_10.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = Module_9.Bb(t || "")
  var c = useDispatch()
  if (!s || s.type !== Src_editor_widget_builtIn_types.C && s.type !== Src_editor_widget_builtIn_types.g) {
    return React.createElement(React.Fragment, null)
  }
  var /* [auto-meaningful-name] */s$attributes$options = s.attributes.options
  return React.createElement("div", {
    "data-should-update": n,
    className: Module_3811.radioActions,
    "data-should-update-area": i
  }, React.createElement(Module_748.a, {
    placement: "bottom",
    title: useIntl$formatMessage({
      id: "deleteOption"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      if (s && s$attributes$options.length > 1) {
        a(Date.now())
        c(Src_editor_redux_common_actions.Lg(s.id, "options", s$attributes$options.slice(0, -1)))
      }
    },
    className: Classnames(Module_11.a({}, Module_3811.disabled, 1 === s$attributes$options.length))
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-minus"
  }))), React.createElement(Module_748.a, {
    placement: "bottom",
    title: useIntl$formatMessage({
      id: "addOption"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      if (s && s$attributes$options.length < 8) {
        s$attributes$options.push({
          content: "",
          state: "none"
        })
        c(Src_editor_redux_common_actions.Lg(s.id, "options", s$attributes$options))
        a(Date.now())
      }
    },
    className: Classnames(Module_11.a({}, Module_3811.disabled, 8 === s$attributes$options.length))
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  }))))
}
var nd = function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  return React.createElement(Module_748.a, {
    placement: "right",
    title: useIntl$formatMessage({
      id: "refresh"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      if (n) {
        e(Src_editor_redux_common_actions.Lg(n, "refreshTimestamp", Date.now(), true, false))
      }
    },
    className: Module_3811.webViewAction
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-refresh",
    className: Classnames(Module_3811.iconButton)
  })))
}
var rd = function () {
  var e = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var t = Module_9.Bb(e || "")
  return t ? React.createElement("div", {
    className: Module_3811.addonBox
  }, React.createElement(ed, null), t.type === Src_editor_widget_builtIn_types.v && React.createElement($u, null), t.type === Src_editor_widget_builtIn_types.L && React.createElement(nd, null)) : React.createElement(React.Fragment, null)
}
var od = {
  name: "MoveableRightAddon",
  render: function (e) {
    var t = e.getRect()
    return React.createElement("div", {
      key: "MoveableRightAddon",
      style: {
        position: "absolute",
        left: t.width + 10,
        top: 0
      }
    }, React.createElement(rd, null))
  }
}
var id = {
  name: "MoveableBottomAddon",
  render: function (e) {
    var t = e.getRect()
    return React.createElement("div", {
      key: "MoveableBottomAddon",
      style: {
        position: "absolute",
        left: t.width - 50,
        top: t.height + 10
      }
    }, React.createElement(td, null))
  }
}
var ad = memo(rd)
export { od }
export { id }
export { ad }
