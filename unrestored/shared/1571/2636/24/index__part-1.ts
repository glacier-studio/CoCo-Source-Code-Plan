/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：24__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../27"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../39"
import * as /* [auto-meaningful-name] */OtJson1 from /* 31 */"ot-json1"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Immutable from /* 66 */"immutable"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_390 from /* 390 */"../390"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_100 from /* 100 */"../100"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../18"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../25/index"
import * as /* [auto-meaningful-name] */Module_304 from /* 304 */"./304"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"../49"
import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"../43"
import * as /* [auto-meaningful-name] */Module_243 from /* 243 */"./243"
var T = function () {
  function e() {
    Module_27.a(this, e)
    this._doc = null
    this._previousDoc = null
  }
  Module_39.a(e, [
    {
      key: "setDoc",
      value: function (e) {
        this._previousDoc = this._doc
        this._doc = e
      }
    }, {
      key: "getDoc",
      value: function () {
        if (this._doc) {
          return this._doc
        }
        console.error("error:the doc is null")
      }
    }, {
      key: "getPreviousDoc",
      value: function () {
        return this._previousDoc
      }
    }, {
      key: "setPreviousDoc",
      value: function (e) {
        return this._previousDoc = e
      }
    }, {
      key: "onGetSnapShort",
      value: function (e) {
        Module_43.f(Lodash.cloneDeep(e))
      }
    }, {
      key: "applyServerOp2IDE",
      value: function (e) {
        var t = this
        if (Module_243.c(e)) {
          e.forEach(function (e) {
            t.handleServerOp2IDE(e)
          })
        } else {
          this.handleServerOp2IDE(e)
        }
      }
    }, {
      key: "handleServerOp2IDE",
      value: function (e) {
        var t = this
        var n = OtJson1.type.apply(this._doc, e)
        if (n && e) {
          this.setDoc(n)
          if ("blockly" !== e[0]) {
            var r = new Map()
            var o = Module_243.b(e)
            var /* [auto-meaningful-name] */o$picks = o.picks
            var /* [auto-meaningful-name] */o$drops = o.drops
            o$picks.forEach(function (e) {
              if (Module_243.f(e.op)) {
                r.set(e.op.p, Module_304.a({
                  path: ["$"].concat(Module_25.a(e.path)),
                  json: t._previousDoc
                })[0])
              }
              Object.entries(Module_49.oTHelper).forEach(function (t) {
                var n = Module_10.a(t, 2)[1]
                if (n && n.serverOp && n.serverOp.pick) {
                  n.serverOp.pick(e)
                }
              })
            })
            o$drops.forEach(function (e) {
              if (Module_243.d(e.op)) {
                var t = r.get(e.op.d)
                e.op = {
                  i: t
                }
              }
              Object.entries(Module_49.oTHelper).forEach(function (t) {
                var n = Module_10.a(t, 2)[1]
                if (n && n.serverOp && n.serverOp.drop) {
                  n.serverOp.drop(e)
                }
              })
            })
          } else {
            var /* [auto-meaningful-name] */Module_49$oTHelper$blink
            if (!(null === (Module_49$oTHelper$blink = Module_49.oTHelper.blink) || undefined === Module_49$oTHelper$blink)) {
              Module_49$oTHelper$blink.serverOp.applyServerOp(e)
            }
          }
        }
      }
    }, {
      key: "applyOpFromIDE",
      value: function (e) {
        var t = OtJson1.type.apply(this._doc, e)
        if (t) {
          this.setDoc(t)
        }
      }
    }
  ])
  return e
}()
var /* [auto-meaningful-name] */Set_doc = "set_doc"
var /* [auto-meaningful-name] */Set_doc_ack = "set_doc_ack"
var I = "join"
var /* [auto-meaningful-name] */Join_ack = "join_ack"
var /* [auto-meaningful-name] */Operation = "operation"
var /* [auto-meaningful-name] */Operation_ack = "operation_ack"
var /* [auto-meaningful-name] */Operation_relay = "operation_relay"
var /* [auto-meaningful-name] */Get_online_user_list_ack = "get_online_user_list_ack"
var /* [auto-meaningful-name] */Svr_user_status_change = "svr_user_status_change"
var /* [auto-meaningful-name] */Svr_coll_user_change = "svr_coll_user_change"
var /* [auto-meaningful-name] */Svr_coll_user_eliminated = "svr_coll_user_eliminated"
var /* [auto-meaningful-name] */Svr_save_work = "svr_save_work"
var /* [auto-meaningful-name] */Svr_edit_permit_change = "svr_edit_permit_change"
var /* [auto-meaningful-name] */Set_doc_relay = "set_doc_relay"
var /* [auto-meaningful-name] */User_focus_on_pos = "user_focus_on_pos"
var /* [auto-meaningful-name] */User_focus_on_pos_ack = "user_focus_on_pos_ack"
var /* [auto-meaningful-name] */User_focus_on_pos_relay = "user_focus_on_pos_relay"
export { T }
export { Set_doc as S }
export { Set_doc_ack as A }
export { I }
export { Join_ack as j }
export { Operation as N }
export { Operation_ack as R }
export { Operation_relay as k }
export { Get_online_user_list_ack as x }
export { Svr_user_status_change as D }
export { Svr_coll_user_change as M }
export { Svr_coll_user_eliminated as L }
export { Svr_save_work as P }
export { Svr_edit_permit_change as B }
export { Set_doc_relay as F }
export { User_focus_on_pos as G }
export { User_focus_on_pos_ack as W }
export { User_focus_on_pos_relay as U }
