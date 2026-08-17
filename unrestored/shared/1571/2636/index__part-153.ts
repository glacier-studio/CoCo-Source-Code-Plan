/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-153
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_207 from /* 207 */"./207/index"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_320 from /* 320 */"./320"
import /* [auto-meaningful-name] */Module_3201 from /* 320 */"./320"
var QT = React.memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useState(Module_26.f)
  var n = Module_10.a(t, 2)
  var r = n[0]
  var o = n[1]
  var i = useSelector(function (e) {
    return e.uiConfig.workspace
  }) === Module_18.j.ReadOnly
  var a = useSelector(function (e) {
    return e.common.consoleHeight
  })
  var s = useState({
    undo: true,
    redo: true,
    zoomOut: false,
    zoomIn: false,
    cleanUp: false
  })
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  useEffect(function () {
    function e(e) {
      o(e)
      u({
        undo: l.undo,
        redo: l.redo,
        zoomIn: e >= Module_26.d,
        zoomOut: e <= Module_26.e,
        cleanUp: i
      })
    }
    function t(e) {
      var /* [auto-meaningful-name] */e$canUndo = e.canUndo
      var /* [auto-meaningful-name] */e$canRedo = e.canRedo
      u({
        zoomIn: l.zoomIn,
        zoomOut: l.zoomOut,
        undo: !e$canUndo,
        redo: !e$canRedo,
        cleanUp: i
      })
      Module_26.z.stopWarningAnimation()
    }
    Module_26.z.eventBus.addEventListener(Module_207.a.WORKSPACE_SCALE_CHANGE, e)
    Module_26.z.eventBus.addEventListener(Module_207.a.COMMON_BLOCKS, t)
    return function () {
      Module_26.z.eventBus.removeEventListener(Module_207.a.COMMON_BLOCKS, t)
      Module_26.z.eventBus.removeEventListener(Module_207.a.WORKSPACE_SCALE_CHANGE, e)
    }
  }, [l.redo, l.undo, l.zoomIn, l.zoomOut, i])
  useEffect(function () {
    u({
      undo: i,
      redo: i,
      cleanUp: i,
      zoomIn: l.zoomIn,
      zoomOut: l.zoomOut
    })
    Src_shared_packages_Crc_blink_src_index.Blink.context_menu.set_disabled(i)
  }, [i, l.zoomIn, l.zoomOut])
  useEffect(function () {
    var /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index$Blink$mainWorkspace$clean_up = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.clean_up
    Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.clean_up = function () {
      Src_shared_packages_Crc_blink_src_index$Blink$mainWorkspace$clean_up.call(this, Src_shared_packages_Crc_blink_src_index.vec2.fromValues(100, 50))
    }
  }, [])
  var d = function (e) {
    if (!("undo" !== e || l.undo)) {
      Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.undo()
    }
    if (!("redo" !== e || l.redo)) {
      Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.undo(true)
    }
  }
  var p = [.5, .75, 1, 1.25, 1.5, 1.75, 2]
  var m = function (e) {
    var t = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_scale()
    var n = Math.round(t / Module_26.f * 100) / 100
    var r = "inc" === e ? p.filter(function (e) {
      return e > n
    }) : p.filter(function (e) {
      return e < n
    })
    var o = Src_shared_tools_index.z(n, r)
    if (null != o) {
      o *= Module_26.f
      Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.set_scale(o)
    }
  }
  return React.createElement("div", {
    className: Module_3201.wrapper,
    style: {
      bottom: a + 18
    }
  }, React.createElement("div", {
    className: Module_3201.undoRedoWrapper
  }, React.createElement(Module_748.a, {
    placement: "top",
    title: useIntl$formatMessage({
      id: "BlockEditor.undo"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: Module_3201.iconWrapper,
    onClick: function () {
      d("undo")
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-undo",
    className: Classnames(Module_3201.icon, Module_3201.undo, l.undo && Module_3201.disable)
  }))), React.createElement(Module_748.a, {
    placement: "top",
    title: useIntl$formatMessage({
      id: "BlockEditor.redo"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: Module_3201.iconWrapper,
    onClick: function () {
      if (!l.redo) {
        d("redo")
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-undo",
    className: Classnames(Module_3201.icon, Module_3201.redo, l.redo && Module_3201.disable)
  })))), React.createElement("div", {
    className: Module_3201.zoomWrapper
  }, React.createElement(Module_748.a, {
    placement: "top",
    title: useIntl$formatMessage({
      id: "BlockEditor.dec"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: Module_3201.iconWrapper,
    onClick: function () {
      if (!l.zoomOut) {
        m("dec")
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-zoom-out",
    className: Classnames(Module_3201.icon, l.zoomOut && Module_3201.disable)
  }))), React.createElement(Module_748.a, {
    placement: "top",
    title: useIntl$formatMessage({
      id: "BlockEditor.percent"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: Module_3201.percent,
    onClick: function () {
      if (Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_scale() !== Module_26.f) {
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.set_scale(Module_26.f)
      }
    }
  }, "".concat(Src_shared_tools_index.eb(r, Module_26.f, 0), "%"))), React.createElement(Module_748.a, {
    placement: "top",
    title: useIntl$formatMessage({
      id: "BlockEditor.inc"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: Module_3201.iconWrapper,
    onClick: function () {
      if (!l.zoomIn) {
        m("inc")
      }
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-zoom-in",
    className: Classnames(Module_3201.icon, l.zoomIn && Module_3201.disable)
  })))), React.createElement("div", {
    className: Module_3201.cleanUpWrapper,
    onClick: function () {
      if (!l.cleanUp) {
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.clean_up(Src_shared_packages_Crc_blink_src_index.vec2.fromValues(100, 50))
      }
    }
  }, React.createElement(Module_748.a, {
    placement: "top",
    title: useIntl$formatMessage({
      id: "BlockEditor.cleanup"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: Module_3201.iconWrapper
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-clean-up",
    className: Classnames(Module_3201.icon, l.cleanUp && Module_3201.disable)
  })))))
})
export { QT }
