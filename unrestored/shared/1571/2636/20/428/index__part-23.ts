/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-23
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_87 from /* 87 */"../../48/87"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../6"
import * as /* [auto-meaningful-name] */Module_128 from /* 128 */"../128"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_210 from /* 210 */"../../48/210"
import * as /* [auto-meaningful-name] */Module_117 from /* 117 */"../../48/117"
var gp = "".concat(Module_128.a.serverHost, "/coconut")
function _p(e, t, n) {
  return vp.apply(this, arguments)
}
function vp() {
  return (vp = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    var o
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response$data
    var /* [auto-meaningful-name] */e$t0$response
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            o = {
              key: n.toString(),
              type: "string",
              value: r
            }
            e.next = 4
            return Module_117.a("".concat(JSON.stringify(o)))
          case 4:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 9
            return Module_210.a.post(gp + "/webdb/try/dict/".concat(t, "/set"), {
              key: n,
              type: "string",
              value: r
            }, {
              headers: Module_6.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, Module_87.a())
            })
          case 9:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 15
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 15:
            if (40400914 === e$sent1$data.code) {
              e$sent1$data.msg = "容量已达上限"
            }
            throw new Error(e$sent1$data.msg)
          case 17:
            e.next = 25
            break
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), !(null === (e$t0$response = e.t0.response) || undefined === e$t0$response || null === (e$t0$response$data = e$t0$response.data) || undefined === e$t0$response$data ? undefined : e$t0$response$data.msg)) {
              e.next = 24
              break
            }
            throw new Error(JSON.stringify(null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.data))
          case 24:
            throw new Error(JSON.stringify({
              code: null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.status,
              msg: e.t0.message
            }))
          case 25:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 19]])
  }))).apply(this, arguments)
}
function bp(e, t) {
  return yp.apply(this, arguments)
}
function yp() {
  return (yp = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response$data
    var /* [auto-meaningful-name] */e$t0$response
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return Module_117.a("dictId=".concat(t, "&id=&key=").concat(n))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return Module_210.a.delete(gp + "/webdb/try/dict/".concat(t, "/remove?key=").concat(n, "&id="), {
              headers: Module_6.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, Module_87.a())
            })
          case 8:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 14
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 14:
            throw new Error(e$sent1$data.msg)
          case 15:
            e.next = 23
            break
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(null === (e$t0$response = e.t0.response) || undefined === e$t0$response || null === (e$t0$response$data = e$t0$response.data) || undefined === e$t0$response$data ? undefined : e$t0$response$data.msg)) {
              e.next = 22
              break
            }
            throw new Error(JSON.stringify(null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.data))
          case 22:
            throw new Error(JSON.stringify({
              code: null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.status,
              msg: e.t0.message
            }))
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 17]])
  }))).apply(this, arguments)
}
function Ep(e, t) {
  return Op.apply(this, arguments)
}
function Op() {
  return (Op = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response$data
    var /* [auto-meaningful-name] */e$t0$response
    return RegeneratorRuntime.wrap(function (e) {
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
            return Module_210.a.get(gp + "/webdb/try/dict/".concat(t, "/getvalue"), {
              params: {
                key: n
              },
              headers: Module_6.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, Module_87.a())
            })
          case 8:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 14
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 14:
            throw new Error(e$sent1$data.msg)
          case 15:
            e.next = 23
            break
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(null === (e$t0$response = e.t0.response) || undefined === e$t0$response || null === (e$t0$response$data = e$t0$response.data) || undefined === e$t0$response$data ? undefined : e$t0$response$data.msg)) {
              e.next = 22
              break
            }
            throw new Error(JSON.stringify(null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.data))
          case 22:
            throw new Error(JSON.stringify({
              code: null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.status,
              msg: e.t0.message
            }))
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 17]])
  }))).apply(this, arguments)
}
function wp(e) {
  return Cp.apply(this, arguments)
}
function Cp() {
  return (Cp = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response$data
    var /* [auto-meaningful-name] */e$t0$response
    return RegeneratorRuntime.wrap(function (e) {
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
            return Module_210.a.get(gp + "/webdb/try/dict/".concat(t, "/keys"), {
              headers: Module_6.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, Module_87.a())
            })
          case 8:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 14
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 14:
            throw new Error(e$sent1$data.msg)
          case 15:
            e.next = 23
            break
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(null === (e$t0$response = e.t0.response) || undefined === e$t0$response || null === (e$t0$response$data = e$t0$response.data) || undefined === e$t0$response$data ? undefined : e$t0$response$data.msg)) {
              e.next = 22
              break
            }
            throw new Error(JSON.stringify(null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.data))
          case 22:
            throw new Error(JSON.stringify({
              code: null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.status,
              msg: e.t0.message
            }))
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 17]])
  }))).apply(this, arguments)
}
function Tp(e) {
  return Sp.apply(this, arguments)
}
function Sp() {
  return (Sp = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response$data
    var /* [auto-meaningful-name] */e$t0$response
    return RegeneratorRuntime.wrap(function (e) {
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
            return Module_210.a.delete(gp + "/webdb/try/dict/clear/".concat(t), {
              headers: Module_6.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, Module_87.a())
            })
          case 8:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 14
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 14:
            throw new Error(e$sent1$data.msg)
          case 15:
            e.next = 23
            break
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(null === (e$t0$response = e.t0.response) || undefined === e$t0$response || null === (e$t0$response$data = e$t0$response.data) || undefined === e$t0$response$data ? undefined : e$t0$response$data.msg)) {
              e.next = 22
              break
            }
            throw new Error(JSON.stringify(null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.data))
          case 22:
            throw new Error(JSON.stringify({
              code: null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.status,
              msg: e.t0.message
            }))
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 17]])
  }))).apply(this, arguments)
}
export { _p }
export { bp }
export { Ep }
export { wp }
export { Tp }
