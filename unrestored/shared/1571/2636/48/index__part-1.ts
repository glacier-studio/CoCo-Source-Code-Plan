/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：48__part-1
 */

"use strict"

import { f } from "./index__part-0"
import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"./72"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Module_345 from /* 345 */"./345"
import * as /* [auto-meaningful-name] */Module_489 from /* 489 */"./489"
import * as /* [auto-meaningful-name] */Redux from /* 156 */"redux"
import * as /* [auto-meaningful-name] */Immutable from /* 66 */"immutable"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"./3/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import * as /* [auto-meaningful-name] */Module_210 from /* 210 */"./210"
import * as /* [auto-meaningful-name] */Module_128 from /* 128 */"../20/128"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../14"
import * as /* [auto-meaningful-name] */Module_87 from /* 87 */"./87"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../28/index"
import * as /* [auto-meaningful-name] */Module_117 from /* 117 */"./117"
var C = "".concat(Module_128.a.serverHost, "/coconut")
var T = Module_28.e() ? 0 : 1
function S(e) {
  return A.apply(this, arguments)
}
function A() {
  return (A = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return Module_117.a("dictId=".concat(t))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return Module_210.a.get(C + "/webdb/try/dict/".concat(t, "/keys"), {
              headers: Module_6.a({
                env: T,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, Module_87.a())
            })
          case 8:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 12:
            Module_14.a.condition(false, {
              type: "error",
              message: "网络通讯异常，无法获取所有键或者键值对个数"
            })
            throw new TypeError(e$sent1$data.msg)
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20
              break
            }
            throw e.t0
          case 20:
            Module_14.a.condition(false, {
              type: "error",
              message: "网络通讯异常，无法获取所有键或者键值对个数"
            })
            throw new Error("网络错误")
          case 22:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 16]])
  }))).apply(this, arguments)
}
function I(e) {
  return j.apply(this, arguments)
}
function j() {
  return (j = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return Module_117.a("dictId=".concat(t))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return Module_210.a.delete(C + "/webdb/try/dict/clear/".concat(t), {
              headers: Module_6.a({
                env: T,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, Module_87.a())
            })
          case 8:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", e$sent1$data.success)
          case 12:
            Module_14.a.condition(false, {
              type: "error",
              message: "无法清空所有键值对"
            })
            throw new TypeError(e$sent1$data.msg)
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20
              break
            }
            throw e.t0
          case 20:
            Module_14.a.condition(false, {
              type: "error",
              message: "网络通讯异常，无法清空所有键值对"
            })
            throw new Error("网络错误")
          case 22:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 16]])
  }))).apply(this, arguments)
}
function N(e, t, n) {
  return R.apply(this, arguments)
}
function R() {
  return (R = Module_7.a(RegeneratorRuntime1.mark(function e(t, n, r) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return Module_117.a("dictId=".concat(t, "&key=").concat(n))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return Module_210.a.get(C + "/webdb/try/dict/".concat(t, "/getvalue"), {
              params: {
                key: n
              },
              headers: Module_6.a({
                env: T,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, Module_87.a())
            })
          case 8:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 12:
            if (r && Module_14.a.condition(false, {
              type: "error",
              messageId: "keyNotExists",
              values: {
                key: n
              }
            }), 40400912 !== e$sent1$data.code) {
              e.next = 15
              break
            }
            return e.abrupt("return", [])
          case 15:
            throw new TypeError(e$sent1$data.msg)
          case 18:
            if (e.prev = 18, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 22
              break
            }
            throw e.t0
          case 22:
            Module_14.a.condition(false, {
              type: "error",
              messageId: "notNetwork",
              values: {
                type: "获取",
                key: n
              }
            })
            throw new Error("网络错误")
          case 24:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 18]])
  }))).apply(this, arguments)
}
function k(e, t, n, r) {
  return x.apply(this, arguments)
}
function x() {
  return (x = Module_7.a(RegeneratorRuntime1.mark(function e(t, n, r, o) {
    var i
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            i = {
              key: n.toString(),
              type: o,
              value: r.toString()
            }
            e.next = 4
            return Module_117.a("".concat(JSON.stringify(i)))
          case 4:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 9
            return Module_210.a.post(C + "/webdb/try/dict/".concat(t, "/set"), {
              key: n,
              type: o,
              value: r
            }, {
              headers: Module_6.a({
                env: T,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, Module_87.a())
            })
          case 9:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 13
              break
            }
            return e.abrupt("return", e$sent1$data.success)
          case 13:
            if (40400914 === e$sent1$data.code) {
              Module_14.a.condition(false, {
                type: "error",
                message: e$sent1$data.msg
              })
            } else {
              Module_14.a.condition(false, {
                type: "error",
                messageId: "keyNotExists",
                values: {
                  key: n
                }
              })
            }
            throw new TypeError(e$sent1$data.msg)
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 21
              break
            }
            throw e.t0
          case 21:
            Module_14.a.condition(false, {
              type: "error",
              messageId: "notNetwork",
              values: {
                type: "添加或者更新",
                key: n
              }
            })
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 17]])
  }))).apply(this, arguments)
}
function D(e, t, n) {
  return M.apply(this, arguments)
}
function M() {
  return (M = Module_7.a(RegeneratorRuntime1.mark(function e(t, n, r) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return Module_117.a("dictId=".concat(t, "&id=").concat(r, "&key=").concat(n))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return Module_210.a.delete(C + "/webdb/try/dict/".concat(t, "/remove?key=").concat(n, "&id=").concat(r), {
              headers: Module_6.a({
                env: T,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, Module_87.a())
            })
          case 8:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", e$sent1$data.success)
          case 12:
            Module_14.a.condition(false, {
              type: "error",
              messageId: "keyNotExists",
              values: {
                key: n
              }
            })
            throw new TypeError(e$sent1$data.msg)
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20
              break
            }
            throw e.t0
          case 20:
            Module_14.a.condition(false, {
              type: "error",
              messageId: "deleteNotNetwork",
              values: {
                type: "删除",
                key: n
              }
            })
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 22:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 16]])
  }))).apply(this, arguments)
}
var L = RegeneratorRuntime1.mark(V)
var P = RegeneratorRuntime1.mark(z)
var B = RegeneratorRuntime1.mark(Y)
var F = RegeneratorRuntime1.mark(K)
var G = RegeneratorRuntime1.mark(q)
var W = RegeneratorRuntime1.mark(Q)
var U = RegeneratorRuntime1.mark(Z)
var H = RegeneratorRuntime1.mark(J)
function V(e) {
  var /* [auto-meaningful-name] */e$resolve
  var /* [auto-meaningful-name] */e$reject
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$documentId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */e$payload$fieldType
  var /* [auto-meaningful-name] */l$sent
  return RegeneratorRuntime1.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$resolve = e.resolve
          e$reject = e.reject
          e$payload = e.payload
          e$payload$documentId = e$payload.documentId
          e$payload$key = e$payload.key
          e$payload$value = e$payload.value
          e$payload$fieldType = e$payload.fieldType
          l.prev = 2
          l.next = 5
          return Module_3.b(k, e$payload$documentId, e$payload$key, e$payload$value, e$payload$fieldType)
        case 5:
          l$sent = l.sent
          return l.abrupt("return", e$resolve(l$sent))
        case 9:
          l.prev = 9
          l.t0 = l.catch(2)
          e$reject(l.t0.message)
        case 12:
        case "end":
          return l.stop()
      }
    }
  }, L, null, [[2, 9]])
}
function z(e) {
  var /* [auto-meaningful-name] */e$resolve
  var /* [auto-meaningful-name] */e$reject
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$documentId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */c$sent
  return RegeneratorRuntime1.wrap(function (c) {
    for (;;) {
      switch (c.prev = c.next) {
        case 0:
          e$resolve = e.resolve
          e$reject = e.reject
          e$payload = e.payload
          e$payload$documentId = e$payload.documentId
          e$payload$key = e$payload.key
          e$payload$id = e$payload.id
          c.prev = 2
          c.next = 5
          return Module_3.b(D, e$payload$documentId, e$payload$key, e$payload$id)
        case 5:
          c$sent = c.sent
          return c.abrupt("return", e$resolve(c$sent))
        case 9:
          c.prev = 9
          c.t0 = c.catch(2)
          e$reject(c.t0.message)
        case 12:
        case "end":
          return c.stop()
      }
    }
  }, P, null, [[2, 9]])
}
function Y(e) {
  var /* [auto-meaningful-name] */e$resolve
  var /* [auto-meaningful-name] */e$reject
  var /* [auto-meaningful-name] */e$payload$documentId
  var /* [auto-meaningful-name] */i$sent
  return RegeneratorRuntime1.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          e$resolve = e.resolve
          e$reject = e.reject
          e$payload$documentId = e.payload.documentId
          i.prev = 2
          i.next = 5
          return Module_3.b(I, e$payload$documentId)
        case 5:
          i$sent = i.sent
          return i.abrupt("return", e$resolve(i$sent))
        case 9:
          i.prev = 9
          i.t0 = i.catch(2)
          e$reject(i.t0.message)
        case 12:
        case "end":
          return i.stop()
      }
    }
  }, B, null, [[2, 9]])
}
function K(e) {
  var /* [auto-meaningful-name] */e$resolve
  var /* [auto-meaningful-name] */e$reject
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$documentId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$isConsole
  var /* [auto-meaningful-name] */c$sent
  return RegeneratorRuntime1.wrap(function (c) {
    for (;;) {
      switch (c.prev = c.next) {
        case 0:
          e$resolve = e.resolve
          e$reject = e.reject
          e$payload = e.payload
          e$payload$documentId = e$payload.documentId
          e$payload$key = e$payload.key
          e$payload$isConsole = e$payload.isConsole
          c.prev = 2
          c.next = 5
          return Module_3.b(N, e$payload$documentId, e$payload$key, e$payload$isConsole)
        case 5:
          c$sent = c.sent
          return c.abrupt("return", e$resolve(c$sent))
        case 9:
          c.prev = 9
          c.t0 = c.catch(2)
          e$reject(c.t0.message)
        case 12:
        case "end":
          return c.stop()
      }
    }
  }, F, null, [[2, 9]])
}
function q(e) {
  var /* [auto-meaningful-name] */e$resolve
  var /* [auto-meaningful-name] */e$reject
  var /* [auto-meaningful-name] */e$payload$documentId
  var /* [auto-meaningful-name] */i$sent
  return RegeneratorRuntime1.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          e$resolve = e.resolve
          e$reject = e.reject
          e$payload$documentId = e.payload.documentId
          i.prev = 2
          i.next = 5
          return Module_3.b(S, e$payload$documentId)
        case 5:
          i$sent = i.sent
          return i.abrupt("return", e$resolve(i$sent))
        case 9:
          i.prev = 9
          i.t0 = i.catch(2)
          e$reject(i.t0.message)
        case 12:
        case "end":
          return i.stop()
      }
    }
  }, G, null, [[2, 9]])
}
var X = {
  ASYNC_SET_CLOUD_DOC_FIELD_VALUE: V,
  ASYNC_CLEAR_CLOUD_DOC_ALL_FIELD_VALUE: Y,
  ASYNC_DELETE_CLOUD_DOC_FIELD_VALUE: z,
  ASYNC_GET_CLOUD_DOC_FIELD_VALUE: K,
  ASYNC_GET_CLOUD_DOC_ALL_FIELD_VALUE: q
}
function Q() {
  return RegeneratorRuntime1.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return Module_3.g([Module_72.a, Module_72.b, Module_72.d, Module_72.c, Module_72.e], Z)
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, W)
}
function Z(e) {
  var t
  return RegeneratorRuntime1.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          if (!(t = X[e.type])) {
            n.next = 4
            break
          }
          n.next = 4
          return Module_3.b(t, e)
        case 4:
        case "end":
          return n.stop()
      }
    }
  }, U)
}
function J() {
  return RegeneratorRuntime1.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return Module_3.a([Module_3.d(Q)])
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, H)
}
var $
var ee = Module_489.a()
var te = Redux.createStore(f)
var ne = false
try {
  $ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.compose
  ne = false
} catch (ae) {
  $ = undefined
}
function re(e) {
  var t = new Map()
  for (var n in e) t.set(n, e[n])
  return t
}
function oe(e) {
  var /* [auto-meaningful-name] */e$screenList = e.screenList
  var /* [auto-meaningful-name] */e$widgetMap = e.widgetMap
  var /* [auto-meaningful-name] */e$variableMap = e.variableMap
  var /* [auto-meaningful-name] */e$imageFileMap = e.imageFileMap
  var /* [auto-meaningful-name] */e$soundFileMap = e.soundFileMap
  var /* [auto-meaningful-name] */e$iconFileMap = e.iconFileMap
  var /* [auto-meaningful-name] */e$initialScreenId = e.initialScreenId
  var /* [auto-meaningful-name] */e$version = e.version
  Module_345.c(e$widgetMap, e$version)
  var p = {
    screenList: Immutable.List(e$screenList),
    widgetMap: Immutable.Map(e$widgetMap),
    variableMap: e$variableMap ? re(e$variableMap) : undefined,
    imageFileMap: e$imageFileMap ? re(e$imageFileMap) : undefined,
    soundFileMap: e$soundFileMap ? re(e$soundFileMap) : undefined,
    iconFileMap: e$iconFileMap ? re(e$iconFileMap) : undefined,
    currentScreenId: e$initialScreenId
  }
  te = ne && $ ? Redux.createStore(f, p, $(Redux.applyMiddleware(ee))) : Redux.createStore(f, p, Redux.applyMiddleware(ee))
  ee.run(J)
  return te
}
function ie() {
  return te
}
export { oe }
export { ie }
