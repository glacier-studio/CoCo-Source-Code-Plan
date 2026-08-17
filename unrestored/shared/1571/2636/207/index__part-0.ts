/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：207__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../27"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../39"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_209 from /* 209 */"./209/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../4"
import * as /* [auto-meaningful-name] */Module_301 from /* 301 */"../301/index"
import * as /* [auto-meaningful-name] */Module_430 from /* 430 */"./430"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_139 from /* 139 */"./139"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../47"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../25/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import * as /* [auto-meaningful-name] */Module_787 from /* 787 */"./787/index"
var E = ["loopFinitely", "loopConditionally", "loopInfinitely", "loopStep", "loopStepClosedRange", "listForEach"]
var O = ["breakLoop", "continueLoop"]
var w = {
  create: function (e) {
    var t = []
    var n = false
    var r = function () {
      return t.length > 0 ? t[t.length - 1] : null
    }
    return {
      onCodePathStart: function () {
        var e
        t.push({
          inLoop: (null === (e = r()) || undefined === e ? undefined : e.inLoop) || n
        })
        n = false
      },
      onCodePathEnd: function () {
        t.pop()
      },
      CallExpression: function (t) {
        if (function (e) {
          if ("CallExpression" !== e.type) {
            return false
          }
          var /* [auto-meaningful-name] */e$callee = e.callee
          return "MemberExpression" === e$callee.type && "Identifier" === e$callee.object.type && "Identifier" === e$callee.property.type && !e$callee.computed && 0 !== e.arguments.length && ("FunctionExpression" === e.arguments[0].type || "ArrowFunctionExpression" === e.arguments[0].type) && "asyncScheduler" === e$callee.object.name && E.includes(e$callee.property.name)
        }(t)) {
          n = true
        } else if (function (e) {
          if ("CallExpression" !== e.type) {
            return false
          }
          var /* [auto-meaningful-name] */e$callee = e.callee
          return "MemberExpression" === e$callee.type && "Identifier" === e$callee.object.type && "Identifier" === e$callee.property.type && !e$callee.computed && "asyncScheduler" === e$callee.object.name && O.includes(e$callee.property.name)
        }(t)) {
          var o
          if (!(null === (o = r()) || undefined === o ? undefined : o.inLoop)) {
            e.report({
              message: "Loop control call is not in loop context",
              node: t
            })
          }
        }
      }
    }
  }
}
var C = /([^=]+)=([^;]+);?/g
var T = {
  create: function (e) {
    var t = e.getSourceCode()
    var /* [auto-meaningful-name] */e$options0$screen = e.options[0].screen
    var r = e.options[1]
    var o = new Set(e$options0$screen.widgetIds.concat(e$options0$screen.invisibleWidgetIds, r))
    return {
      Program: function () {
        t.getAllComments().filter(function (e) {
          return "Block" === e.type
        }).forEach(function (t) {
          var /* [auto-meaningful-name] */functionEForVarTVarNC$execEIfNBreakTN1$trimN2$trimReturnTT$value$widgetId = function (e) {
            for (var t = {};;) {
              var n = C.exec(e)
              if (!n) {
                break
              }
              t[n[1].trim()] = n[2].trim()
            }
            return t
          }(t.value).widgetId
          if (!(undefined === functionEForVarTVarNC$execEIfNBreakTN1$trimN2$trimReturnTT$value$widgetId || o.has(functionEForVarTVarNC$execEIfNBreakTN1$trimN2$trimReturnTT$value$widgetId))) {
            e.report({
              message: "Widget ".concat(functionEForVarTVarNC$execEIfNBreakTN1$trimN2$trimReturnTT$value$widgetId, " not exists"),
              loc: t.loc
            })
          }
        })
      }
    }
  }
}
var S = new Module_787.Linter()
S.defineRule("no-loop-control-outside-loop", w)
S.defineRule("widgets-must-exists", T)
var A = Module_11.a({
  "consistent-return": "warn"
}, "no-loop-control-outside-loop", "error")
function I(e, t, n, r) {
  var o = {
    Coco: true,
    asyncScheduler: true
  }
  if (!(null === r || undefined === r)) {
    r.forEach(function (e) {
      o[e] = true
    })
  }
  return S.verify(e, {
    globals: o,
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: "module",
      ecmaFeatures: {}
    },
    rules: Module_6.a(Module_6.a({}, A), {}, Module_11.a({}, "widgets-must-exists", [
      "error", {
        screen: t
      }, n
    ])),
    env: {
      es2017: true
    }
  })
}
export { I }
