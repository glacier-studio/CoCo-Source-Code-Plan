/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：197
 */

"use strict"

export { _ as a }
export { v as e }
export { y as c }
export { w as b }
export { A as f }
export { j as d }
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../47"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../27"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../58/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../59/index"
import * as /* [auto-meaningful-name] */Module_274 from /* 274 */"./274"
import * as /* [auto-meaningful-name] */Module_483 from /* 483 */"./483/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../64/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_env from /* 57 */"../../../../../src/shared/env"
var g = new Module_483.a({
  env: Src_shared_env.a.env,
  projectName: Src_shared_env.a.productCode,
  config: {
    pid: Src_shared_env.a.pid,
    api: Src_shared_env.a.openServiceHost
  }
})
var _ = function (e) {
  Module_58.a(n, e)
  var t = Module_59.a(n)
  function n(e, r) {
    var o
    Module_27.a(this, n);
    (o = t.call(this, r)).uploadResult = e
    return o
  }
  return n
}(Module_274.a(Error))
function v(e) {
  return b.apply(this, arguments)
}
function b() {
  return (b = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var a = arguments
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = a.length > 1 && undefined !== a[1] ? a[1] : "IMAGE"
            r = t instanceof File ? t.name : ""
            e.next = 4
            return new Promise(function (e, o) {
              g.create(t, {
                filename: "".concat(Src_shared_env.a.productCode, "/").concat(Module_64.a(n), "_").concat(Date.now()) + Src_shared_tools_index.I(r),
                onsuccess: function (t) {
                  return e(t)
                },
                onerror: function (e) {
                  return o(e)
                }
              }).then(function (e) {
                return null === e || undefined === e ? undefined : e.start()
              }).catch(function (e) {
                return o(e)
              })
            })
          case 4:
            e$sent = e.sent
            return e.abrupt("return", e$sent)
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function y(e, t) {
  var n
  var r = []
  var o = Module_47.a(e)
  try {
    for (o.s(); !(n = o.n()).done;) {
      var /* [auto-meaningful-name] */n$value = n.value
      r.push(E(n$value, t))
    }
  } catch (s) {
    o.e(s)
  } finally {
    o.f()
  }
  return Promise.all(r)
}
function E(e, t) {
  return O.apply(this, arguments)
}
function O() {
  return (O = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */t$cdnUrl
    var /* [auto-meaningful-name] */t$source
    var a
    var /* [auto-meaningful-name] */e$sent
    var c
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t$cdnUrl = t.cdnUrl, t$source = t.source, !t || t$cdnUrl || !t$source) {
              e.next = 16
              break
            }
            if (a = null, !Src_shared_tools_index.R(t$source)) {
              e.next = 7
              break
            }
            a = Src_shared_tools_index.o(t$source, t.id)
            e.next = 11
            break
          case 7:
            if (!Src_shared_tools_index.P(t$source)) {
              e.next = 11
              break
            }
            e.next = 10
            return Src_shared_tools_index.f(t$source, t.id)
          case 10:
            a = e.sent
          case 11:
            if (!a) {
              e.next = 16
              break
            }
            e.next = 14
            return v(a)
          case 14:
            if (e$sent = e.sent) {
              c = e$sent.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/")
              Module_9.bc(t.id, c)
              if (t.groupId && undefined !== t.groupImageIndex) {
                Module_9.cc(t.groupId, t.groupImageIndex, c)
              }
              t.cdnUrl = c
              if (n) {
                n(t)
              }
            }
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function w(e, t) {
  return C.apply(this, arguments)
}
function C() {
  return (C = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var a
    var s
    var /* [auto-meaningful-name] */s$value
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = []
            a = Module_47.a(t)
            try {
              for (a.s(); !(s = a.n()).done;) {
                s$value = s.value
                r.push(T(s$value, n))
              }
            } catch (o) {
              a.e(o)
            } finally {
              a.f()
            }
            e.next = 5
            return Promise.all(r)
          case 5:
            return e.abrupt("return", e.sent)
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function T(e, t) {
  return S.apply(this, arguments)
}
function S() {
  return (S = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */t$cdnUrl
    var /* [auto-meaningful-name] */t$source
    var a
    var /* [auto-meaningful-name] */e$sent
    var c
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t$cdnUrl = t.cdnUrl, t$source = t.source, !t || t$cdnUrl || !t$source) {
              e.next = 16
              break
            }
            if (a = null, !Src_shared_tools_index.R(t$source)) {
              e.next = 7
              break
            }
            a = Src_shared_tools_index.o(t$source, t.id)
            e.next = 11
            break
          case 7:
            if (!Src_shared_tools_index.P(t$source)) {
              e.next = 11
              break
            }
            e.next = 10
            return Src_shared_tools_index.g(t$source, t.id)
          case 10:
            a = e.sent
          case 11:
            if (!a) {
              e.next = 16
              break
            }
            e.next = 14
            return v(a)
          case 14:
            if (e$sent = e.sent) {
              c = e$sent.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/")
              t.cdnUrl = c
              if (n) {
                n(t)
              }
            }
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function A(e) {
  return I.apply(this, arguments)
}
function I() {
  return (I = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var a
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = Src_shared_tools_index.m(t), "screenshot.png", !n) {
              e.next = 10
              break
            }
            r = new File([n], "screenshot.png", {
              type: n.type
            })
            e.next = 6
            return v(r)
          case 6:
            if (!(e$sent = e.sent)) {
              e.next = 10
              break
            }
            a = e$sent.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/")
            return e.abrupt("return", a)
          case 10:
            return e.abrupt("return", "")
          case 11:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function j(e, t) {
  var n
  var r = []
  var o = Module_47.a(e)
  try {
    for (o.s(); !(n = o.n()).done;) {
      var /* [auto-meaningful-name] */n$value = n.value
      r.push(N(n$value, t))
    }
  } catch (s) {
    o.e(s)
  } finally {
    o.f()
  }
  return Promise.all(r)
}
function N(e, t) {
  return R.apply(this, arguments)
}
function R() {
  return (R = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */t$cdnUrl
    var /* [auto-meaningful-name] */t$source
    var a
    var /* [auto-meaningful-name] */e$sent
    var c
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t$cdnUrl = t.cdnUrl, t$source = t.source, !t || t$cdnUrl || !t$source) {
              e.next = 16
              break
            }
            if (a = null, !Src_shared_tools_index.R(t$source)) {
              e.next = 7
              break
            }
            a = Src_shared_tools_index.o(t$source, t.name)
            e.next = 11
            break
          case 7:
            if (!Src_shared_tools_index.P(t$source)) {
              e.next = 11
              break
            }
            e.next = 10
            return Src_shared_tools_index.f(t$source, t.name)
          case 10:
            a = e.sent
          case 11:
            if (!a) {
              e.next = 16
              break
            }
            e.next = 14
            return v(a, "SOUND")
          case 14:
            if (e$sent = e.sent) {
              c = e$sent.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/")
              t.cdnUrl = c
              if (n) {
                n(t)
              }
            }
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export default _
