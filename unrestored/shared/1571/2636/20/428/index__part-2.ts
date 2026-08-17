/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../47"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_483 from /* 483 */"../../197/483/index"
import * as /* [auto-meaningful-name] */Axios from /* 129 */"axios"
import /* [auto-meaningful-name] */Axios1 from /* 129 */"axios"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_128 from /* 128 */"../128"
new Module_483.a({
  env: Module_128.a.env,
  projectName: Module_128.a.productCode,
  config: {
    pid: Module_128.a.pid,
    api: Module_128.a.openServiceHost
  }
})
function F(e) {
  return G.apply(this, arguments)
}
function G() {
  return (G = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var o
    var /* [auto-meaningful-name] */o$filename
    var /* [auto-meaningful-name] */o$token
    var s
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$sent1$data$hash
    var /* [auto-meaningful-name] */e$sent1$data$key
    var p = arguments
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = p.length > 1 && undefined !== p[1] ? p[1] : Module_128.a.cdnPath.root
            e.next = 3
            return W(t.type, n)
          case 3:
            e$sent = e.sent
            o = e$sent.data[0]
            o$filename = o.filename
            o$token = o.token;
            (s = new FormData()).append("token", o$token)
            s.append("file", t)
            s.append("key", o$filename)
            e.next = 11
            return Axios1.post(Module_128.a.apiQiniuHost, s)
          case 11:
            e$sent1 = e.sent
            e$sent1$data = e$sent1.data
            e$sent1$data$hash = e$sent1$data.hash
            e$sent1$data$key = e$sent1$data.key
            return e.abrupt("return", "https://static.bcmcdn.com/" + e$sent1$data$key + "?hash=" + e$sent1$data$hash)
          case 14:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function W(e, t) {
  return U.apply(this, arguments)
}
function U() {
  return (U = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var i = arguments
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = i.length > 2 && undefined !== i[2] ? i[2] : 1
            e.next = 3
            return Axios1.get(Module_128.a.apiOverseaServiceHost + "/tiger/kitten/cdn/token/".concat(r), {
              params: {
                type: t,
                prefix: n,
                bucket: "static"
              }
            })
          case 3:
            e$sent = e.sent
            return e.abrupt("return", e$sent.data)
          case 5:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function H(e) {
  return V.apply(this, arguments)
}
function V() {
  return (V = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e, n) {
              if (Src_shared_tools_index.T(t)) {
                var r = Src_shared_tools_index.m(t)
                if (r) {
                  e(r)
                }
              } else if (Src_shared_tools_index.P(t)) {
                Src_shared_tools_index.e(t).then(function (t) {
                  return e(t)
                })
              } else {
                if (Src_shared_tools_index.S(t)) {
                  window.resolveLocalFileSystemURL(t, function (t) {
                    t.file(function () {
                      var t = Module_7.a(RegeneratorRuntime1.mark(function t(n) {
                        var r
                        return RegeneratorRuntime1.wrap(function (t) {
                          for (;;) {
                            switch (t.prev = t.next) {
                              case 0:
                                (r = new FileReader()).onloadend = function () {
                                  if (this.result) {
                                    var t = new Blob([this.result], {
                                      type: n.type
                                    })
                                    if (t) {
                                      e(t)
                                    }
                                  }
                                }
                                r.readAsArrayBuffer(n)
                              case 3:
                              case "end":
                                return t.stop()
                            }
                          }
                        }, t)
                      }))
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    }(), function () {
                      console.error("load file error")
                    })
                  })
                } else {
                  e(null)
                }
              }
            }))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function z(e) {
  return Y.apply(this, arguments)
}
function Y() {
  return (Y = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return H(t)
          case 2:
            if (!(e$sent = e.sent)) {
              e.next = 13
              break
            }
            e.prev = 4
            e.next = 7
            return F(e$sent, Module_128.a.cdnPath.playerUnstable)
          case 7:
            return e.abrupt("return", e.sent)
          case 10:
            e.prev = 10
            e.t0 = e.catch(4)
            console.error("图片上传失败")
          case 13:
            return e.abrupt("return", null)
          case 14:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[4, 10]])
  }))).apply(this, arguments)
}
export { z }
