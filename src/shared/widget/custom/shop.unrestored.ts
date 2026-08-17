/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：183
 */

"use strict"

export { p as d }
export { h as e }
export { g as c }
export { v as b }
export { y as g }
export { O as a }
export { w as f }
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../../../../unrestored/shared/1571/2636/64/index"
import * as c from /* 78 */"./type"
import * as /* [auto-meaningful-name] */Utils_network_axiosWithCredentials from /* 41 */"../../utils/network/axios-with-credentials"
import * as u from /* 57 */"../../env"
var d = "".concat(u.a.serverHost, "/coconut")
function p() {
  return f.apply(this, arguments)
}
function f() {
  return (f = Module_7.a(RegeneratorRuntime1.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Utils_network_axiosWithCredentials.a.get(d + "/web/widget/labels")
          case 2:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            e$sent$data$data = e$sent$data.data
            return e.abrupt("return", e$sent$data$data)
          case 7:
            throw Error(e$sent$data.msg)
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function h(e, t, n) {
  return m.apply(this, arguments)
}
function m() {
  return (m = Module_7.a(RegeneratorRuntime1.mark(function e(t, n, r) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Utils_network_axiosWithCredentials.a.get(d + "/web/widget/list", {
              params: {
                label_id: r,
                current_page: t,
                page_size: n
              }
            })
          case 2:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            e$sent$data$data = e$sent$data.data
            return e.abrupt("return", e$sent$data$data)
          case 7:
            throw Error(e$sent$data.msg)
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function g(e, t, n) {
  return _.apply(this, arguments)
}
function _() {
  return (_ = Module_7.a(RegeneratorRuntime1.mark(function e(t, n, r) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var s
    var /* [auto-meaningful-name] */e$sent$data$data$items
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Utils_network_axiosWithCredentials.a.get(d + "/web/user/widget/list", {
              params: {
                widget_type: r,
                current_page: t,
                page_size: n
              }
            })
          case 2:
            if (e$sent = e.sent, e$sent$data = e$sent.data, s = [], 200 !== e$sent$data.code) {
              e.next = 9
              break
            }
            e$sent$data$data$items = e$sent$data.data.items
            if (Array.isArray(e$sent$data$data$items)) {
              e$sent$data$data$items.forEach(function (e) {
                var t = {
                  id: e.id,
                  type: e.widget_code,
                  widgetName: e.widget_name,
                  icon: e.icon,
                  cdnUrl: e.resource_url,
                  isInvisibleWidget: 2 === e.widget_type
                }
                s.push(t)
              })
            }
            return e.abrupt("return", {
              list: s,
              total: e$sent$data.data.total
            })
          case 9:
            throw Error(e$sent$data.msg)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function v(e) {
  return b.apply(this, arguments)
}
function b() {
  return (b = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Utils_network_axiosWithCredentials.a.post(d + "/web/widget/buy", {
              widget_ids: t
            })
          case 2:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 6
              break
            }
            return e.abrupt("return", e$sent$data.success)
          case 6:
            throw Error(e$sent$data.msg)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function y(e) {
  return E.apply(this, arguments)
}
function E() {
  return (E = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = t.join(",")
            e.next = 3
            return Utils_network_axiosWithCredentials.a.delete(d + "/web/widget/remove", {
              params: {
                widget_ids: n
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.success)
          case 7:
            throw Error(e$sent$data.msg)
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function O(e, t) {
  var n = Module_9.Db(e)
  if (n) {
    var r
    if (!(t || (r = localStorage.getItem("guestId")))) {
      r = Module_64.a("GUEST")
      localStorage.setItem("guestId", r)
    }
    var o = 1
    if (c.e(e)) {
      o = 2
      e = e.replace(c.a, "")
    } else {
      if (c.d(e)) {
        o = 3
      }
    }
    Utils_network_axiosWithCredentials.a.post(u.a.serverHost + "/data-center/widget", {
      widget_code: e,
      widget_type: n.isInvisibleWidget ? 2 : 1,
      source_type: o,
      user_id: t ? t + "" : r
    })
  }
}
function w(e) {
  return C.apply(this, arguments)
}
function C() {
  return (C = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$data$totalList
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Utils_network_axiosWithCredentials.a.get(u.a.serverHost + "/data-center/widget/total", {
              params: {
                widget_code_list: t.join(",")
              }
            })
          case 2:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            e$sent$data$data$totalList = e$sent$data.data.totalList
            return e.abrupt("return", e$sent$data$data$totalList)
          case 7:
            throw Error(e$sent$data.msg)
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export default O
