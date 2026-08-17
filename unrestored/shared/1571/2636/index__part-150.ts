/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-150
 */

"use strict"

import { jg, Ng, Rg, kg, xg, Dg, Mg, Bg, Fg, Gg, Wg, Ug, Hg, Vg, zg, Yg, Kg, qg, Xg, Qg, Zg, Jg, $g } from "./index__part-79"
import { ZC } from "./index__part-143"
import { nT } from "./index__part-144"
import { iT } from "./index__part-145"
import { pT } from "./index__part-146"
import { ST } from "./index__part-148"
import { kT } from "../../../../src/editor/ui/EditArea/BlockEditor/FlyoutComponents/index"
import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"./43"
import * as /* [auto-meaningful-name] */Module_1523 from /* 1523 */"./1523/index"
import * as /* [auto-meaningful-name] */Module_207 from /* 207 */"./207/index"
import * as /* [auto-meaningful-name] */Module_1522 from /* 1522 */"./1522"
import * as /* [auto-meaningful-name] */Module_301 from /* 301 */"./301/index"
import /* [auto-meaningful-name] */Module_99 from /* 99 */"./99"
import * as /* [auto-meaningful-name] */Module_1022 from /* 1022 */"./1022/index"
import * as /* [auto-meaningful-name] */Module_1058 from /* 1058 */"./1058/index"
import * as /* [auto-meaningful-name] */Module_1205 from /* 1205 */"./1205/index"
var yg
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"./238"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26/index"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"./24/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useStore, useDispatch, useSelector, batch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState, useLayoutEffect, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* 2611 */"./2611"
var xT = memo(function () {
  var e = useStore()
  var t = useDispatch()
  var n = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var r = useSelector(function (e) {
    return e.project.globalWidgetIds
  })
  var o = useRef()
  var i = useRef(null)
  var a = useSelector(function (e) {
    return e.common.blockyToolboxPinned
  })
  var s = useSelector(function (e) {
    return e.block.palette
  })
  var c = useSelector(function (e) {
    return e.uiConfig.workspace
  }) === Module_18.j.ReadOnly
  var l = useState(false)
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = Module_238.d()
  useLayoutEffect(function () {
    var /* [auto-meaningful-name] */e$getState
    var /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index$Blink
    e$getState = e.getState
    yg = e$getState
    Module_301.e({
      getWidgetListByType: jg,
      getButtonTypeById: Module_9.T,
      getPrimitiveVariableList: Dg,
      getArrayVariableList: Mg,
      getObjectVariableList: Bg,
      getBroadcastList: zg,
      getScreenList: Yg,
      getImageFiles: Ng,
      getIconFiles: Rg,
      getLocalDocumentFieldList: Ug,
      getCloudDocumentFieldList: Vg,
      getActorActionList: kg,
      getLocalDocumentList: Fg,
      getCloudDocumentList: Hg,
      getCloudDBList: Gg,
      getCloudDBColumnList: Wg,
      getCloudDictKeyList: Jg,
      getActorStyleList: xg,
      dispatchAction: function (e) {
        t(e)
      },
      getSoundFiles: Kg,
      getSliderVisible: qg,
      getListViewerChildWidgetList: Xg,
      getGlobalGridList: Qg,
      getTableDataColumnList: Zg,
      getCloudTableColumnList: $g
    })
    Module_26.j(Module_301.b())
    Src_shared_packages_Crc_blink_src_index$Blink = Src_shared_packages_Crc_blink_src_index.Blink
    Module_1022.DEFAULT_THEME_CONFIG.block_color.PARAM_BLOCK_COLOR = {
      fill: "#3ca9ff",
      border: "rgba(0, 0, 0, 0.15)"
    }
    Src_shared_packages_Crc_blink_src_index$Blink.theme.register("cocoBlinkTheme", Module_1022.DEFAULT_THEME_CONFIG)
    Src_shared_packages_Crc_blink_src_index$Blink.theme.apply("cocoBlinkTheme")
    Module_1205.init_extensions(Src_shared_packages_Crc_blink_src_index.Blink)
    Module_1205.init_basic_blocks(Src_shared_packages_Crc_blink_src_index.Blink)
    Module_301.d()
    Module_26.u()
    var a = document.getElementById("coco_workspace")
    if (a) {
      var s
      var c = Module_26.k(a, {
        toolbox: Module_26.g.getConfig()
      })
      i.current = c
      Module_26.i()
      var l = null === (s = c.get_toolbox()) || undefined === s ? undefined : s.flyout
      if (l) {
        var u = l.get_svg_root()
        if (!u) {
          return
        }
        var d = document.createElementNS("http://www.w3.org/2000/svg", "path")
        d.setAttribute("class", "pinButton")
        d.setAttribute("id", "flyoutPinButton")
        d.setAttribute("fill", "#B1A3BF")
        d.setAttribute("transform", "translate(".concat(u.width.baseVal.value - 22, ", 17) translate(-14, -12.727922)"))
        d.addEventListener("mousedown", function () {
          t(Src_editor_redux_common_actions.ci(l.is_auto_close()))
        })
        o.current = function (e) {
          l.set_auto_close(!e)
          var t = c.get_toolbox()
          if (e && !(null === t || undefined === t ? undefined : t.get_selected())) {
            if (!(null === t || undefined === t)) {
              t.set_selected_item(null === t || undefined === t ? undefined : t.get_children()[0])
            }
          }
        }
        var p = document.createElementNS("http://www.w3.org/2000/svg", "title")
        p.setAttribute("id", "flyoutPinTitle")
        d.appendChild(p)
        u.appendChild(d)
      }
      a.addEventListener("click", function () {
        batch(function () {
          t(Src_editor_redux_common_actions.fj(false))
        })
      })
      document.addEventListener("mousedown", function (e) {
        var t = Module_26.z.getDebuggingBlock()
        if (t) {
          var n = document.querySelectorAll(".".concat("DevToolCloseButton"))
          var /* [auto-meaningful-name] */e$target = e.target
          var o = true
          n.forEach(function (e) {
            if (e.contains(e$target)) {
              o = false
            }
          })
          if (o) {
            t.set_glow_stack(false)
          }
        }
      })
      c.add_change_listener(function (e) {
        if (!Src_shared_packages_Crc_blink_src_index.I.AllUIEvents.includes(e.type)) {
          t(Src_editor_redux_common_actions.Fi(true))
        }
      })
      var f = function () {
        var e = c.get_toolbox()
        if (l && e && !l.is_auto_close()) {
          var t = e.get_selected()
          if (t && "toolbox-function" === t.get_name()) {
            e.refresh_selection()
          }
        }
      }
      var h = function (e) {
        var t
        f()
        var /* [auto-meaningful-name] */e$procName = e.procName
        var /* [auto-meaningful-name] */e$callDisabled = e.callDisabled
        var /* [auto-meaningful-name] */e$callReturnDisabled = e.callReturnDisabled
        var i = Module_43.a()
        if (i) {
          var a = Module_26.z.getWorkspaceDataByScreenId(i)
          var s = Lodash.cloneDeep(null === (t = Module_24.a.getDoc()) || undefined === t ? undefined : t.blockly[i].workspaceJson)
          if ((null === a || undefined === a ? undefined : a.getProcedureManager()) && s) {
            var c = Module_1058.effect_of_update_disabled(e$procName, e$callDisabled, e$callReturnDisabled, s)
            if (!(null === c || undefined === c)) {
              c.unshift("workspaceJson")
            }
            if (!(null === c || undefined === c)) {
              c.unshift(i)
            }
            if (!(null === c || undefined === c)) {
              c.unshift("blockly")
            }
            if (c) {
              Module_24.a.applyClient(c)
            }
          }
        }
      }
      var m = function (e) {
        var t
        var /* [auto-meaningful-name] */e$type = e.type
        var /* [auto-meaningful-name] */e$procName = e.procName
        var /* [auto-meaningful-name] */e$changeValue = e.changeValue
        f()
        var i = Module_43.a()
        if (i) {
          var a = Module_26.z.getWorkspaceDataByScreenId(i)
          var s = Lodash.cloneDeep(null === (t = Module_24.a.getDoc()) || undefined === t ? undefined : t.blockly[i].workspaceJson)
          if ((null === a || undefined === a ? undefined : a.getProcedureManager()) && s) {
            var c = Module_1058.effect_of_update_param(e$type, e$procName, e$changeValue, s)
            if (!(null === c || undefined === c)) {
              c.unshift("workspaceJson")
            }
            if (!(null === c || undefined === c)) {
              c.unshift(i)
            }
            if (!(null === c || undefined === c)) {
              c.unshift("blockly")
            }
            if (c) {
              Module_24.a.applyClient(c)
            }
          }
        }
      }
      var g = function (e) {
        var t
        var /* [auto-meaningful-name] */e$oldName = e.oldName
        var /* [auto-meaningful-name] */e$newName = e.newName
        f()
        var o = Module_43.a()
        if (o) {
          var i = Module_26.z.getWorkspaceDataByScreenId(o)
          var a = Lodash.cloneDeep(null === (t = Module_24.a.getDoc()) || undefined === t ? undefined : t.blockly[o].workspaceJson)
          if ((null === i || undefined === i ? undefined : i.getProcedureManager()) && a) {
            var s = Module_1058.effect_of_rename_proc(e$oldName, e$newName, a)
            if (!(null === s || undefined === s)) {
              s.unshift("workspaceJson")
            }
            if (!(null === s || undefined === s)) {
              s.unshift(o)
            }
            if (!(null === s || undefined === s)) {
              s.unshift("blockly")
            }
            if (s) {
              Module_24.a.applyClient(s)
            }
          }
        }
      }
      Module_26.z.eventBus.addEventListener(Module_207.a.PROCEDURE_UPDATE_DISABLED, h)
      Module_26.z.eventBus.addEventListener(Module_207.a.PROCEDURE_UPDATE_PARAM, m)
      Module_26.z.eventBus.addEventListener(Module_207.a.PROCEDURE_UPDATE_NAME, g)
      return function () {
        Module_26.z.eventBus.addEventListener(Module_207.a.PROCEDURE_UPDATE_DISABLED, h)
        Module_26.z.eventBus.addEventListener(Module_207.a.PROCEDURE_UPDATE_PARAM, m)
        Module_26.z.eventBus.addEventListener(Module_207.a.PROCEDURE_UPDATE_NAME, g)
      }
    }
  }, [t, e.getState])
  useEffect(function () {
    var e = document.getElementById("flyoutPinTitle")
    if (e) {
      e.textContent = a ? "取消固定" : "固定积木盒"
    }
    var t = document.getElementById("flyoutPinButton")
    if (t) {
      t.setAttribute("d", a ? "M9.15577592,17.2392524 L5.06297721,20.4147076 C4.70227021,20.6945177 4.19785796,20.6945258 3.83714196,20.4147273 C3.43192131,20.1004077 3.33455068,19.5363182 3.59372852,19.1079382 L3.65989022,19.0116658 L6.83434436,14.9178209 L9.15577592,17.2392524 Z M20.3646197,9.65036959 C20.9113538,10.1971036 20.9113538,11.0835346 20.3646197,11.6302686 C20.1218167,11.8730716 19.7995995,12.0169534 19.4601513,12.0377089 L19.3137999,12.0389952 L16.6753335,11.9234077 L15.1656605,13.4344949 L15.1929541,13.519627 C15.8378006,15.6025933 15.7355553,17.9090334 14.8538223,19.3047339 L14.7343905,19.4815237 L14.6114034,19.6410045 C14.3705913,19.9334098 13.9468452,19.977261 13.6528215,19.7574674 L13.5760844,19.6909757 L4.38369629,10.4985875 C4.09149216,10.2063834 4.1146799,9.72597265 4.43366749,9.46326859 C5.71969782,8.40415094 8.1029879,8.19707328 10.2941761,8.80516618 L10.5561141,8.88204778 L10.6401771,8.90901148 L12.1498501,7.3993385 L12.0356743,4.76081383 C12.0062869,4.08490357 12.46121,3.50012765 13.0928937,3.34199504 L13.230848,3.314762 L13.3735408,3.3013231 C13.716592,3.28640783 14.0513403,3.39807488 14.3155633,3.61212075 L14.4243024,3.71005223 L20.3646197,9.65036959 Z" : "M20.3646197,9.65036959 C20.9113538,10.1971036 20.9113538,11.0835346 20.3646197,11.6302686 C20.1218167,11.8730716 19.7995995,12.0169534 19.4601513,12.0377089 L19.3137999,12.0389952 L16.6753335,11.9234077 L15.1656605,13.4344949 L15.1929541,13.519627 C15.8365817,15.5986557 15.7359392,17.9003142 14.8588143,19.296809 L14.7343905,19.4815237 L14.6114034,19.6410045 C14.3725815,19.9309932 13.9538368,19.9765192 13.6601378,19.7628628 L13.5760844,19.6909757 L10.264499,16.3793902 L5.06297721,20.4147076 C4.73232912,20.6712002 4.28092872,20.6925814 3.93014831,20.4788477 L3.83714196,20.4147273 C3.43431906,20.1022676 3.33571377,19.542985 3.58916517,19.1155567 L3.65989022,19.0116658 L7.69416581,13.809057 L4.38369629,10.4985875 C4.11584251,10.2307337 4.11300549,9.80473412 4.36009442,9.53324526 L4.43366749,9.46326859 C5.71764017,8.40584553 8.09536418,8.19773811 10.2836569,8.80225359 L10.5561141,8.88204778 L10.6401771,8.90901148 L12.1498501,7.3993385 L12.0356743,4.76081383 C12.0061557,4.08188611 12.4652814,3.49490825 13.1013643,3.33990273 L13.230848,3.314762 L13.3735408,3.3013231 C13.716592,3.28640783 14.0513403,3.39807488 14.3155633,3.61212075 L14.4243024,3.71005223 L20.3646197,9.65036959 Z M19.3746703,10.6403191 L13.4343529,4.70000172 L13.5619581,7.64623485 C13.5687488,7.80302336 13.5226581,7.95633577 13.4329307,8.08241141 L13.3575976,8.17148997 L11.3201204,10.2090424 C11.1255942,10.4035758 10.8351564,10.4661295 10.5777959,10.3689223 C9.1099716,9.81451301 7.44730234,9.72992079 6.28856036,10.0674657 L6.06373804,10.140589 L6.0213556,10.1563478 L13.917617,18.0526093 L13.9340267,18.011087 C14.3079367,16.9772883 14.3038769,15.446777 13.8809465,14.0183469 L13.7907634,13.7341994 L13.7061027,13.4978109 C13.6211157,13.2727094 13.6583376,13.0223134 13.7991897,12.8329274 L13.8658454,12.7557489 L15.9037176,10.7165389 C16.0147335,10.60545 16.1589865,10.5357397 16.312665,10.5166735 L16.4293191,10.5120144 L19.3746703,10.6403191 Z")
    }
    if (o.current) {
      o.current(a)
    }
  }, [a])
  var g = Module_238.a()
  useEffect(function () {
    var e = Src_shared_tools_index.p(function () {
      Module_26.z.resizeWorkspace()
    }, 500)
    window.addEventListener("resize", e)
    return function () {
      window.removeEventListener("resize", e)
    }
  }, [])
  useEffect(function () {
    Module_26.g.update(m)
  }, [m])
  useEffect(function () {
    Module_26.g.updateGlobalWidget(r)
  }, [r])
  useEffect(function () {
    Module_26.g.updateAnyWidget(g)
  }, [g])
  useEffect(function () {
    Module_26.g.changeSelectWidgetCategoryStyle(n || (null === m || undefined === m ? undefined : m.id))
  }, [n, m])
  useEffect(function () {
    function e(e) {
      p(e)
      t(Src_editor_redux_common_actions.ji(e))
    }
    function n() {
      t(Src_editor_redux_common_actions.gh())
    }
    Module_26.z.eventBus.addEventListener(Module_207.a.FLYOUT_CHANGE, e)
    Module_26.z.eventBus.addEventListener(Module_207.a.DELETE_BLOCK, n)
    return function () {
      Module_26.z.eventBus.removeEventListener(Module_207.a.FLYOUT_CHANGE, e)
      Module_26.z.eventBus.removeEventListener(Module_207.a.DELETE_BLOCK, n)
    }
  }, [t])
  var v = useRef(null)
  useEffect(function () {
    var /* [auto-meaningful-name] */v$current = v.current
    if (v$current) {
      var n = function () {
        setTimeout(function () {
          var e = new Event("mousedown", {
            bubbles: true,
            cancelable: true
          })
          document.body.dispatchEvent(e)
        }, 0)
        t(Src_editor_redux_common_actions.ki("blockly"))
      }
      v$current.addEventListener("mousedown", n, true)
      return function () {
        return v$current.removeEventListener("mousedown", n, true)
      }
    }
  }, [v, t])
  return React.createElement("div", {
    className: Module_99.wrapper
  }, React.createElement("div", {
    className: Classnames(!d && Module_99.upper)
  }), React.createElement("div", {
    id: "coco_workspace",
    className: Classnames(Module_99.blocklyWorkspace, c && Module_99.readonly),
    onWheel: function () {
      if (e.getState().block.dropdown.visible) {
        t(Src_editor_redux_common_actions.gh())
      }
      if (e.getState().block.slider.visible) {
        t(Src_editor_redux_common_actions.ih())
      }
    },
    ref: v
  }), s.visible && React.createElement(Src_shared_ui_components_index.q, {
    value: s.value,
    onClose: s.setValue,
    onChange: s.selectValue,
    style: {
      position: "fixed",
      zIndex: 100,
      top: s.top,
      left: s.left,
      boxShadow: "0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%)"
    }
  }), React.createElement(kT, null), React.createElement(ST, null), React.createElement(ZC, null), React.createElement(nT, null), React.createElement(iT, null), React.createElement(Module_1522.a, null), React.createElement(Module_1523.a, null), React.createElement(pT, null))
})
export { yg }
export { xT }
