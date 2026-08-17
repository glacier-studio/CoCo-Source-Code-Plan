/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：28__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_784 from /* 784 */"./784/index"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_303 from /* 303 */"../64/303/index"
import /* [auto-meaningful-name] */Module_3031 from /* 303 */"../64/303/index"
import * as /* [auto-meaningful-name] */AntdMobile from /* 198 */"antd-mobile"
import * as /* [auto-meaningful-name] */Module_657 from /* 657 */"./657"
import * as /* [auto-meaningful-name] */Axios from /* 129 */"axios"
import /* [auto-meaningful-name] */Axios1 from /* 129 */"axios"
import * as /* [auto-meaningful-name] */Module_128 from /* 128 */"../20/128"
function m() {
  return g.apply(this, arguments)
}
function g() {
  return (g = Module_7.a(RegeneratorRuntime1.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Axios1.get("".concat(Module_128.a.tigerHost, "/tiger/v3/web/accounts/profile"), {
              withCredentials: true
            })
          case 2:
            e$sent = e.sent
            return e.abrupt("return", e$sent.data)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export { m }
