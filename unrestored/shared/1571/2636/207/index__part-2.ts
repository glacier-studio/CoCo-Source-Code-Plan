/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：207__part-2
 */

"use strict"

import { L } from "./index__part-1"
var P
import * as /* [auto-meaningful-name] */Module_139 from /* 139 */"./139"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_430 from /* 430 */"./430"
import * as /* [auto-meaningful-name] */Module_301 from /* 301 */"../../../../../src/editor/block/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../4"
import * as /* [auto-meaningful-name] */Module_209 from /* 209 */"./209/index"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../27"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_734 from /* 734 */"./734/index"
var F = function () {
  function e(t, n, r, o, i, s) {
    Module_27.a(this, e)
    this._undoStack = []
    this._redoStack = []
    this._screenId = undefined
    this._workspaceJson = undefined
    this._workspaceOffset = undefined
    this._procedureManager = undefined
    this._screenId = t
    this._procedureManager = new Module_209.ProcedureManager(o, i, s)
    this._workspaceJson = n ? Module_734.load_from_json(this._procedureManager, n, false) : {
      blocks: {},
      connections: {},
      comments: {}
    }
    this._workspaceOffset = r || {
      x: 0,
      y: 0
    }
  }
  Module_39.a(e, [
    {
      key: "getScreenId",
      value: function () {
        return this._screenId
      }
    }, {
      key: "getWorkspaceJson",
      value: function () {
        return this._workspaceJson
      }
    }, {
      key: "setWorkspaceJson",
      value: function (e) {
        this._workspaceJson = e
      }
    }, {
      key: "getUndoStack",
      value: function () {
        return this._undoStack
      }
    }, {
      key: "getRedoStack",
      value: function () {
        return this._redoStack
      }
    }, {
      key: "setWorkspaceOffset",
      value: function (e) {
        this._workspaceOffset = e
      }
    }, {
      key: "getWorkspaceOffset",
      value: function () {
        return this._workspaceOffset
      }
    }, {
      key: "getProcedureManager",
      value: function () {
        return this._procedureManager
      }
    }
  ])
  return e
}()
function G(e, t, n) {
  var r = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  r.innerHTML = "<animate id=".concat("@_ANIMATION_SVG_ID_@", " attributeName=\"fill\" attributeType=\"XML\" values=\"").concat(e, " ; ").concat(t, " ; ").concat(n, "\" dur=\"1s\" repeatCount=\"indefinite\" keyTimes=\"0 ; 0.5; 1\" calcMode=\"spline\" keySplines=\"0.25,0.1,0.25,1;0.25,0.1,0.25,1\"></animate>")
  return r.firstChild
}
!function (e) {
  e[e.FLYOUT_CHANGE = 0] = "FLYOUT_CHANGE"
  e[e.COMMON_BLOCKS = 1] = "COMMON_BLOCKS"
  e[e.WORKSPACE_SCALE_CHANGE = 2] = "WORKSPACE_SCALE_CHANGE"
  e[e.DELETE_BLOCK = 3] = "DELETE_BLOCK"
  e[e.SELECT_WIDGET_CATEGORY = 4] = "SELECT_WIDGET_CATEGORY"
  e[e.LINT_ERROR = 5] = "LINT_ERROR"
  e[e.STOP_WARNING_ANIMATION = 6] = "STOP_WARNING_ANIMATION"
  e[e.PROCEDURE_UPDATE_DISABLED = 7] = "PROCEDURE_UPDATE_DISABLED"
  e[e.PROCEDURE_UPDATE_PARAM = 8] = "PROCEDURE_UPDATE_PARAM"
  e[e.PROCEDURE_UPDATE_NAME = 9] = "PROCEDURE_UPDATE_NAME"
}(P || (P = {}))
var W = {
  listeners: {},
  addEventListener: function (e, t) {
    if (this.listeners[e]) {
      this.listeners[e].push(t)
    } else {
      this.listeners[e] = [t]
    }
  },
  emit: function (e, t) {
    if (this.listeners[e]) {
      this.listeners[e].forEach(function (e) {
        return e(t)
      })
    }
  },
  removeEventListener: function (e, t) {
    var n = this.listeners[e]
    if (n) {
      if (t) {
        n.splice(n.indexOf(t), 1)
      } else {
        delete this.listeners[e]
      }
    }
  }
}
var U = function () {
  function e() {
    var t = this
    Module_27.a(this, e)
    this._currentScreenId = "__NOT_EXIST__"
    this._currentProjectId = "__NOT_EXIST__"
    this.debuggingBlock = undefined
    this.workspaceDataMap = new Map()
    this.jsGenerator = Module_301.c()
    this.eventBus = undefined
    this.getCurrentScreenId = function () {
      return t._currentScreenId
    }
    this._moveBlockToViewArea = function () {
      var e = Module_7.a(RegeneratorRuntime.mark(function e(n, r) {
        var i
        var a
        var s
        var l
        var u
        var d
        var p
        var /* [auto-meaningful-name] */r$type
        var /* [auto-meaningful-name] */r$offset
        var /* [auto-meaningful-name] */r$origin
        var /* [auto-meaningful-name] */r$offset$x
        var /* [auto-meaningful-name] */r$offset$y
        var b
        var y
        var E
        var O
        var w
        var C
        var T
        var S
        var A
        var I
        var j
        var N
        var R
        var k
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (!(i = t.getBlockById(n))) {
                  e.next = 32
                  break
                }
                a = i.get_relative_to_surface_xy()[0]
                s = i.get_relative_to_surface_xy()[1]
                l = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_metrics()
                u = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_scale()
                d = a * u
                p = s * u
                r$type = r.type
                r$offset = r.offset
                r$origin = r.origin
                r$offset$x = r$offset.x
                r$offset$y = r$offset.y
                b = "percent" === r$type ? r$offset$x * l.viewWidth : r$offset$x
                y = "percent" === r$type ? r$offset$y * l.viewHeight : r$offset$y
                E = 0
                O = 0
                if ("center" === r$origin) {
                  w = i.get_height_width()
                  E = u * w.width / 2
                  O = u * w.height / 2
                }
                C = l.viewLeft + E - l.contentLeft
                T = l.viewTop + O - l.contentTop
                S = d - b + E - l.contentLeft
                A = p - y + O - l.contentTop
                j = (S - C) / (I = 10)
                N = (A - T) / I
                if (R = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_scrollbar()) {
                  R.set(S, A)
                }
                k = 0
              case 25:
                if (!(k < I)) {
                  e.next = 32
                  break
                }
                k++
                if (R) {
                  R.set(C + k * j, T + k * N)
                }
                e.next = 30
                return Src_shared_tools_index.lb(5)
              case 30:
                e.next = 25
                break
              case 32:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function (t, n) {
        return e.apply(this, arguments)
      }
    }()
    this.playWarningAnimation = function () {
      var e = Module_7.a(RegeneratorRuntime.mark(function e(n) {
        var r
        var /* [auto-meaningful-name] */r$svg_path
        var a
        var s
        var c
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                t.stopWarningAnimation(false)
                e.next = 3
                return t._moveBlockToViewArea(n, {
                  type: "percent",
                  offset: {
                    x: .15,
                    y: .35
                  },
                  origin: "top-left"
                })
              case 3:
                if (r = t.getBlockById(n)) {
                  e.next = 6
                  break
                }
                return e.abrupt("return")
              case 6:
                if (r$svg_path = r.svg_path) {
                  e.next = 9
                  break
                }
                return e.abrupt("return")
              case 9:
                if (!document.body.contains(r$svg_path)) {
                  e.next = 21
                  break
                }
                if (a = r$svg_path.getAttribute("fill")) {
                  e.next = 13
                  break
                }
                return e.abrupt("return")
              case 13:
                if (a.indexOf("url(#blocklyDisabledPattern") > -1) {
                  a = "#686d76"
                }
                s = r.get_svg_root()
                r$svg_path.setAttribute("filter", "url(#".concat(Module_430.b.blocklyFocusedShadowFilterId, ")"))
                r$svg_path.setAttribute("fill-backups", a)
                if (Src_shared_tools_index.Q()) {
                  r$svg_path.removeAttribute("fill")
                }
                r$svg_path.setAttribute("id", "@_BLOCK_SVG_PATH_ID_@")
                if (c = G(Src_shared_tools_index.ib(a, 0), Src_shared_tools_index.ib(a, .2), Src_shared_tools_index.ib(a, 0))) {
                  s.appendChild(c)
                }
              case 21:
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
    this.stopWarningAnimation = function () {
      var e = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0]
      var n = document.getElementById("@_BLOCK_SVG_PATH_ID_@")
      var r = document.getElementById("@_ANIMATION_SVG_ID_@")
      if (n) {
        var o = n.getAttribute("fill-backups") || "#000000"
        n.setAttribute("fill", o)
        n.removeAttribute("filter")
        n.removeAttribute("fill-backups")
        n.removeAttribute("id")
      }
      if (r) {
        r.remove()
      }
      if (e) {
        t.eventBus.emit(P.STOP_WARNING_ANIMATION)
      }
    }
    this.eventBus = W
  }
  Module_39.a(e, [
    {
      key: "getWorkspaceDataByScreenId",
      value: function (e) {
        return this.workspaceDataMap.get(e)
      }
    }, {
      key: "setCurrentProjectId",
      value: function (e) {
        this._currentProjectId = e
      }
    }, {
      key: "getCurrentProjectId",
      value: function () {
        return this._currentProjectId
      }
    }, {
      key: "getDebuggingBlock",
      value: function () {
        return this.debuggingBlock
      }
    }, {
      key: "setDebuggingBlock",
      value: function (e) {
        this.debuggingBlock = e
      }
    }, {
      key: "getCurrentScreenWorkspaceData",
      value: function () {
        return this.workspaceDataMap.get(this._currentScreenId)
      }
    }, {
      key: "rerenderCurrentScreenWorkspaceData",
      value: function () {
        var e = this.workspaceDataMap.get(this._currentScreenId)
        if (e) {
          this._renderWorkspaceByData(e)
        }
      }
    }, {
      key: "selectWorkspaceByScreenId",
      value: function (e) {
        var t = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1]
        var n = this.workspaceDataMap.get(e)
        if (n) {
          if (t) {
            this.updateCurrentWorkspaceData()
          }
          this._currentScreenId = e
          this._renderWorkspaceByData(n)
        }
      }
    }, {
      key: "addWorkspaceData",
      value: function (e) {
        var t = this
        if (!this.workspaceDataMap.get(e.screenId)) {
          var n = new F(e.screenId, e.workspaceJson, e.workspaceOffset, function (e, n, r) {
            t.eventBus.emit(P.PROCEDURE_UPDATE_DISABLED, {
              procName: e,
              callDisabled: n,
              callreturnDisabled: r
            })
          }, function (e, n, r) {
            t.eventBus.emit(P.PROCEDURE_UPDATE_PARAM, {
              type: e,
              procName: n,
              changeValue: r
            })
          }, function (e, n) {
            t.eventBus.emit(P.PROCEDURE_UPDATE_NAME, {
              oldName: e,
              newName: n
            })
          })
          this.workspaceDataMap.set(e.screenId, n)
          return n
        }
      }
    }, {
      key: "removeWorkspaceByScreenId",
      value: function (e) {
        this.workspaceDataMap.delete(e)
      }
    }, {
      key: "clearAll",
      value: function () {
        this.workspaceDataMap.clear()
        this.jsGenerator.clearAllDynamicValues()
        Src_shared_packages_Crc_blink_src_index.Blink.events.disable()
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.clear()
        Src_shared_packages_Crc_blink_src_index.Blink.events.enable()
      }
    }, {
      key: "updateCurrentWorkspaceData",
      value: function () {
        var /* [auto-meaningful-name] */this$_currentScreenId = this._currentScreenId
        var t = this.getWorkspaceDataByScreenId(this$_currentScreenId)
        if (t) {
          var n = Src_shared_packages_Crc_blink_src_index.Blink.json.workspace_to_json(Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace)
          t.setWorkspaceJson(n)
          var r = {
            x: Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.scroll_xy[0],
            y: Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.scroll_xy[1]
          }
          t.setWorkspaceOffset(r)
        }
      }
    }, {
      key: "setWorkspaceDataByScreenId",
      value: function (e, t) {
        var n = this.getWorkspaceDataByScreenId(e)
        if (n) {
          if (t.workspaceJson) {
            n.setWorkspaceJson(t.workspaceJson)
          }
          if (t.workspaceOffset) {
            n.setWorkspaceOffset(t.workspaceOffset)
          }
        }
        return n
      }
    }, {
      key: "copyWorkspaceData",
      value: function (e, t, n, r, o, i) {
        this.updateCurrentWorkspaceData()
        var a = this.workspaceDataMap.get(e)
        if (!a) {
          throw Error("Trying to copy screen from invalid id: ".concat(e, ". "))
        }
        var s = Src_shared_packages_Crc_blink_src_index.Blink.json.reset_element_ids(a.getWorkspaceJson())
        var l = {
          x: Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.scroll_xy[0],
          y: Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.scroll_xy[1]
        }
        if (s) {
          var /* [auto-meaningful-name] */s$blocks = s.blocks
          for (var d in s$blocks) {
            var /* [auto-meaningful-name] */s$blocksD$fields = s$blocks[d].fields
            if (s$blocksD$fields.WIDGET_ID) {
              var f = n.get(s$blocksD$fields.WIDGET_ID)
              if (f) {
                s$blocksD$fields.WIDGET_ID = f
              }
            } else if (s$blocksD$fields.VAR) {
              var h = r.get(s$blocksD$fields.VAR)
              if (h) {
                s$blocksD$fields.VAR = h
              }
            } else if (s$blocksD$fields.ARRAY) {
              var m = o.get(s$blocksD$fields.ARRAY)
              if (m) {
                s$blocksD$fields.ARRAY = m
              }
            } else if (s$blocksD$fields.OBJECT) {
              var g = i.get(s$blocksD$fields.OBJECT)
              if (g) {
                s$blocksD$fields.OBJECT = g
              }
            }
          }
        }
        var _ = {
          screenId: t,
          workspaceJson: s,
          workspaceOffset: l
        }
        this.addWorkspaceData(_)
        return _
      }
    }, {
      key: "getWorkspacesRecord",
      value: function () {
        var e = {}
        this.updateCurrentWorkspaceData()
        this.workspaceDataMap.forEach(function (t, n) {
          e[n] = {
            screenId: t.getScreenId(),
            workspaceJson: t.getWorkspaceJson(),
            workspaceOffset: t.getWorkspaceOffset()
          }
        })
        return e
      }
    }, {
      key: "generateAllWorkspaceCodes",
      value: function (e) {
        var t = this
        var n = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
        var r = []
        var o = this.getCurrentProjectId()
        this.workspaceDataMap.forEach(function (i, a) {
          var s = e.find(function (e) {
            return e.id === a
          })
          if (!s) {
            throw new Error("Screen not exists")
          }
          var c = t.generateWorkspaceCode(o, s, n)
          r.push(c)
        })
        return r.join("\n")
      }
    }, {
      key: "checkDisabledBlocks",
      value: function (e, t) {
        var n = this
        var /* [auto-meaningful-name] */e$blocks = e.blocks
        var o = []
        Object.keys(e$blocks).forEach(function (e) {
          var t = n.getBlockById(e)
          if (t && t.disabled) {
            var r = t.get_top_parent()
            if (Src_shared_packages_Crc_blink_src_index.BU.base.is_block_svg(r) && r.is_starting_block()) {
              o.push(t)
            }
          }
        })
        o.forEach(function (e) {
          if (e.type === Module_209.PROCEDURE_BLOCK_TYPES.CALL_NORETURN) {
            throw new Module_139.b(Module_139.a.FUNCTION_IS_UNDEF, t, e.id, "functionIsUndefined")
          }
          if (e.type === Module_209.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
            throw new Module_139.b(Module_139.a.NO_RETURN_FUNCTION, t, e.id, "noReturnFunction")
          }
          if ("param" === e.element_type) {
            if (e.type === Module_209.PROCEDURE_BLOCK_TYPES.PARAM) {
              throw new Module_139.b(Module_139.a.PARAMETER_NOT_IN_FUNCTION, t, e.id, "parameterNotInFunction")
            }
            throw new Module_139.b(Module_139.a.PARAM_NOT_IN_CONTEXT, t, e.id, "paramNotInContext")
          }
        })
      }
    }, {
      key: "generateWorkspaceCode",
      value: function (e, t, n) {
        var r = t.id
        var o = this.getWorkspaceDataByScreenId(r)
        if (!o) {
          return ""
        }
        var i = Module_9.eb()
        var a = o.getProcedureManager()
        if (n) {
          this.checkDisabledBlocks(o.getWorkspaceJson(), r)
        }
        var s = o.getWorkspaceJson()
        var c = []
        var d = new Map()
        a.get_all_procedure_names().forEach(function (e) {
          var t = a.get_procedure_by_name(e)
          if (t) {
            var n = Module_4.f(e, r)
            c.push(n)
            d.set(n, {
              blockId: t.def_id,
              hasReturn: !!t.return_count,
              consistentReturn: true
            })
          }
        })
        this.jsGenerator.setDynamicValue("__CURRENT_SCREEN_ID__", r)
        this.jsGenerator.setDynamicValue("__CURRENT_PROJECT_ID__", e)
        var p = Module_9.zb()
        var f = this.jsGenerator.workspaceToCode(s, function (e) {
          return p.has(e)
        })
        var m = this.jsGenerator.workspaceToCode(s, function (e) {
          return e === Module_209.PROCEDURE_BLOCK_TYPES.DEF
        })
        L(f, m, c, d, t, i)
        return "Coco.setWorkId && Coco.setWorkId(".concat(JSON.stringify(e), ");") + m + "\n" + f
      }
    }, {
      key: "isEmptyWorkspace",
      value: function (e, t) {
        if (e !== t) {
          var n = this.workspaceDataMap.get(t)
          return 0 === Object.keys((null === n || undefined === n ? undefined : n.getWorkspaceJson().blocks) || {}).length
        }
        return 0 === Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().length
      }
    }, {
      key: "replaceWorkspaces",
      value: function (e) {
        var t = this
        for (var n in this.clearAll(), e) {
          var r = e[n]
          this.workspaceDataMap.set(n, new F(r.screenId, r.workspaceJson, r.workspaceOffset, function (e, n, r) {
            t.eventBus.emit(P.PROCEDURE_UPDATE_DISABLED, {
              procName: e,
              callDisabled: n,
              callreturnDisabled: r
            })
          }, function (e, n, r) {
            t.eventBus.emit(P.PROCEDURE_UPDATE_PARAM, {
              type: e,
              procName: n,
              changeValue: r
            })
          }, function (e, n) {
            t.eventBus.emit(P.PROCEDURE_UPDATE_NAME, {
              oldName: e,
              newName: n
            })
          }))
        }
      }
    }, {
      key: "disabledShortcut",
      value: function () {
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.set_hotkey_enable(false)
      }
    }, {
      key: "ableShortcut",
      value: function () {
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.set_hotkey_enable(true)
      }
    }, {
      key: "resizeWorkspace",
      value: function () {
        Src_shared_packages_Crc_blink_src_index.Blink.utils.svg_resize(Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace)
      }
    }, {
      key: "unselectCurrentBlock",
      value: function () {
        var /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index$Blink$runtime_data
        var /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index$Blink$runtime_data$selected
        if (!(null === (Src_shared_packages_Crc_blink_src_index$Blink$runtime_data = Src_shared_packages_Crc_blink_src_index.Blink.runtime_data) || undefined === Src_shared_packages_Crc_blink_src_index$Blink$runtime_data || null === (Src_shared_packages_Crc_blink_src_index$Blink$runtime_data$selected = Src_shared_packages_Crc_blink_src_index$Blink$runtime_data.selected) || undefined === Src_shared_packages_Crc_blink_src_index$Blink$runtime_data$selected)) {
          Src_shared_packages_Crc_blink_src_index$Blink$runtime_data$selected.unselect()
        }
      }
    }, {
      key: "getBlocklyClientRectById",
      value: function (e) {
        var t = this.getBlockById(e)
        if (t) {
          return t.get_svg_root().getClientRects()[0]
        }
      }
    }, {
      key: "addBlocklySvgRootClassName",
      value: function (e, t) {
        var n = this.getBlockById(e)
        if (n) {
          n.get_svg_root().classList.add(t)
        }
      }
    }, {
      key: "removeBlocklySvgRootClassName",
      value: function (e, t) {
        var n = this.getBlockById(e)
        if (n) {
          n.get_svg_root().classList.remove(t)
        }
      }
    }, {
      key: "getBlockById",
      value: function (e) {
        return Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_block_by_id(e)
      }
    }, {
      key: "getField",
      value: function (e, t) {
        var n = this.getBlockById(e)
        return n && n.get_field(t)
      }
    }, {
      key: "getFieldValue",
      value: function (e) {
        return e.get_value()
      }
    }, {
      key: "checkFieldValueIsSelected",
      value: function (e, t) {
        return Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().some(function (n) {
          return n.get_field_value(e) === t
        })
      }
    }, {
      key: "checkSomeFieldValueIsSelected",
      value: function (e, t) {
        return Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().some(function (n) {
          var r = n.get_field_value(e)
          return !!r && t.includes(r)
        })
      }
    }, {
      key: "checkOtherScreenFieldValueIsSelected",
      value: function (e, t) {
        var n = {}
        this.workspaceDataMap.forEach(function (r, o) {
          var /* [auto-meaningful-name] */r$getWorkspaceJson$blocks = r.getWorkspaceJson().blocks
          for (var a in r$getWorkspaceJson$blocks) {
            var /* [auto-meaningful-name] */r$getWorkspaceJson$blocksA$fields = r$getWorkspaceJson$blocks[a].fields
            for (var c in r$getWorkspaceJson$blocksA$fields) if (c === e && r$getWorkspaceJson$blocksA$fields[c] === t) {
              n[o] = true
              break
            }
          }
        })
        return Object.keys(n)
      }
    }, {
      key: "replaceFieldValue",
      value: function (e, t, n, r) {
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
          var i
          if (o.type === e && o.get_field_value(t) === n) {
            if (!(null === (i = o.get_field(t)) || undefined === i)) {
              i.set_value(r)
            }
          }
        })
      }
    }, {
      key: "replaceTextValue",
      value: function (e, t, n, r) {
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
          var i
          var a
          if (o.type === e && (null === (i = o.get_field(t)) || undefined === i ? undefined : i.get_text()) === n) {
            if (!(null === (a = o.get_field(t)) || undefined === a)) {
              a.set_text(r)
            }
          }
        })
      }
    }, {
      key: "_renderWorkspaceByData",
      value: function (e) {
        Src_shared_packages_Crc_blink_src_index.Blink.events.disable()
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.clear()
        var t = e.getWorkspaceJson()
        var n = e.getWorkspaceOffset()
        Src_shared_packages_Crc_blink_src_index.Blink.json.json_to_workspace(t, Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace)
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
          if (!("param" !== e.element_type || e.deletable_)) {
            e.set_deletable(true)
          }
        })
        this._setWorkspaceOffset(n || {
          x: 0,
          y: 0
        })
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.set_undo_stack(e.getUndoStack())
        Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.set_redo_stack(e.getRedoStack())
        Src_shared_packages_Crc_blink_src_index.Blink.events.enable()
      }
    }, {
      key: "_setWorkspaceOffset",
      value: function (e) {
        var t = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_metrics()
        var n = {
          x: e.x,
          y: e.y
        }
        var r = Math.min(n.x, -t.contentLeft)
        var o = Math.min(n.y, -t.contentTop)
        r = Math.max(r, t.viewWidth - t.contentLeft - t.contentWidth)
        o = Math.max(o, t.viewHeight - t.contentTop - t.contentHeight)
        r = -n.x - t.contentLeft
        o = -n.y - t.contentTop
        var i = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_scrollbar()
        if (i) {
          i.set(r, o)
        }
      }
    }, {
      key: "hasBlockByList",
      value: function (e) {
        var t = false
        this.workspaceDataMap.forEach(function (n) {
          if (!t) {
            var /* [auto-meaningful-name] */n$getWorkspaceJson$blocks = n.getWorkspaceJson().blocks
            t = Object.values(n$getWorkspaceJson$blocks).some(function (t) {
              return e.includes(t.type)
            })
          }
        })
        return t
      }
    }, {
      key: "hasCloudBlock",
      value: function () {
        var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "cloudRoom"
        var t = ["room_create_room", "room_create_nickname", "room_get_room_list", "room_enter_room", "room_send_message"]
        var n = ["cloud_document_set_field_item", "cloud_document_remove_field_item", "cloud_document_clear_all_field_items", "cloud_document_get_field_item", "cloud_document_get_field_key_count", "cloud_document_get_all_field_keys", "cloud_document_check_if_field_key_exists"]
        var r = ["cloudDB_insert", "cloudDB_delete", "cloudDB_update", "cloudDB_query_by_column", "cloudDB_query_by_count", "cloudDB_error"]
        var o = ["cloud_space_dict_on_error", "cloud_space_dict_set_key_value", "cloud_space_dict_delete_key", "cloud_space_dict_get_key_value", "cloud_space_dict_get_key_count", "cloud_space_dict_get_all_keys", "cloud_space_dict_clear_data"]
        var i = ["cloudTable_insert", "cloudTable_delete", "cloudTable_update", "cloudTable_query_by_column", "cloudTable_query_by_count", "cloudTable_clear_all"]
        var a = false
        if ("cloudRoom" === e) {
          a = this.hasBlockByList(t)
        }
        if ("cloudStorage" === e) {
          a = this.hasBlockByList(n)
        }
        if ("cloudDB" === e) {
          a = this.hasBlockByList(r)
        }
        if ("cloudDict" === e) {
          a = this.hasBlockByList(o)
        }
        if ("cloudTable" === e) {
          a = this.hasBlockByList(i)
        }
        return a
      }
    }, {
      key: "refreshProcedureToolbox",
      value: function () {
        var e = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_toolbox()
        var t = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_flyout()
        if (t && e && !t.is_auto_close()) {
          var n = e.get_selected()
          if (n && "toolbox-function" === n.get_name()) {
            e.refresh_selection()
          }
        }
      }
    }
  ])
  return e
}()
export { P }
export { U }
