/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：207__part-1
 */

"use strict"

import { I } from "./index__part-0"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../25/index"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../47"
import * as /* [auto-meaningful-name] */Module_139 from /* 139 */"./139"
import * as /* [auto-meaningful-name] */Module_209 from /* 209 */"./209/index"
import * as /* [auto-meaningful-name] */Module_323 from /* 323 */"../323"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../55"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../28/index"
var k = ["Coco", "AsyncScheduler", "asyncScheduler"]
function x(e) {
  var t = /Expected to return a value at the end of async function '(.+)'./.exec(e)
  if (t) {
    return t[1]
  }
}
var D = new RegExp("return \\/\\* blockId=(\\w+);blockType=".concat(Module_209.PROCEDURE_BLOCK_TYPES.RETURN, " \\*\\/"))
function M(e, t) {
  var n = new RegExp("await (?:Coco.tryExecute\\()?".concat(e.map(function (e) {
    return e.replace(/\$/g, "\\$")
  }).join("|"), " \\/\\* blockId=(\\w+);blockType=").concat(Module_209.PROCEDURE_BLOCK_TYPES.CALL_RETURN, " \\*\\/")).exec(t)
  if (n) {
    return n[1]
  }
}
function L(e, t, n, r, o, i) {
  var a = e + "\n\n" + t
  var s = a.split(/\n{2,}/)
  var c = o.id
  var l = [].concat(k, Module_25.a(n))
  var u = function (e) {
    var t = D.exec(e)
    if (t) {
      return t[1]
    }
  }(e)
  if (u) {
    throw new Module_139.b(Module_139.a.RETURN_NOT_IN_FUNCTION, c, u, "returnNotInFunction")
  }
  var d
  var p = Module_47.a(s)
  try {
    for (p.s(); !(d = p.n()).done;) {
      var /* [auto-meaningful-name] */d$value = d.value
      if (d$value.trim().length) {
        var h
        var v = I(d$value, o, i, l)
        var b = Module_47.a(v)
        try {
          for (b.s(); !(h = b.n()).done;) {
            var /* [auto-meaningful-name] */h$value = h.value
            var E = Module_323.a(d$value, h$value)
            if ("no-undef" === h$value.ruleId) {
              throw new Module_139.b(Module_139.a.NO_UNDEF, c, E.blockId, "noUndef", E)
            }
            if ("consistent-return" === h$value.ruleId) {
              var O = x(h$value.message)
              var w = O ? r.get(O) : undefined
              if (w) {
                w.consistentReturn = false
              }
            } else {
              if ("no-loop-control-outside-loop" === h$value.ruleId) {
                throw new Module_139.b(Module_139.a.LOOP_CONTROL_NOT_IN_LOOP, c, E.blockId, "loopControlOutsideLoop", E)
              }
              if ("widgets-must-exists" === h$value.ruleId) {
                Module_55.b.push({
                  type: "warning",
                  message: Module_28.o("widgetNotExists"),
                  screenId: c,
                  blockId: E.blockId
                })
              }
            }
          }
        } catch (S) {
          b.e(S)
        } finally {
          b.f()
        }
      }
    }
  } catch (S) {
    p.e(S)
  } finally {
    p.f()
  }
  var C = []
  var T = []
  r.forEach(function (e, t) {
    if (e.hasReturn) {
      if (!e.consistentReturn) {
        C.push(t)
      }
    } else {
      T.push(t)
    }
  })
  if (u = M(T, a)) {
    throw new Module_139.b(Module_139.a.NO_RETURN_FUNCTION, c, u, "noReturnFunction")
  }
  if (u = M(C, a)) {
    throw new Module_139.b(Module_139.a.BRANCH_RETURN_FUNCTION, c, u, "branchReturnFunction")
  }
}
export { L }
