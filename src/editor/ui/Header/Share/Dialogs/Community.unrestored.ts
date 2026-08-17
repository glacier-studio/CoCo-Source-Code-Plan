/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-17
 */

"use strict"

import { Ge } from "../../../../../../unrestored/shared/1571/2636/index__part-9"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"../../../../../../unrestored/shared/1571/2636/133/index"
import * as /* [auto-meaningful-name] */Module_197 from /* 197 */"../../../../../../unrestored/shared/1571/2636/197/index"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../../../../unrestored/shared/1571/2636/97/index"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../../../unrestored/shared/1571/2636/6"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1509 from /* 1509 */"../../../../../../unrestored/shared/1571/2636/1509"
import /* [auto-meaningful-name] */Module_15091 from /* 1509 */"../../../../../../unrestored/shared/1571/2636/1509"
import * as /* [auto-meaningful-name] */Module_1510 from /* 1510 */"../../../../../../unrestored/shared/1571/2636/1510"
import /* [auto-meaningful-name] */Module_15101 from /* 1510 */"../../../../../../unrestored/shared/1571/2636/1510"
import * as /* [auto-meaningful-name] */Shared_widget_custom_storage from /* 96 */"../../../../../shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */Shared_widget_custom_restrict from /* 232 */"../../../../../shared/widget/custom/restrict"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"../../../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */Module_328 from /* 328 */"../../../../../../unrestored/shared/1571/2636/328"
import * as /* [auto-meaningful-name] */Module_930 from /* 930 */"../../../../../../unrestored/shared/1571/2636/930"
import /* [auto-meaningful-name] */Module_9301 from /* 930 */"../../../../../../unrestored/shared/1571/2636/930"
var Zt
var Jt = memo(function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$onConfirm = e.onConfirm
  var o = useSelector(function (e) {
    return e.project.id
  })
  var i = useSelector(function (e) {
    return e.project.title
  })
  var a = useState(false)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useRef(null)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var p = useDispatch()
  var m = useState({
    name: i,
    description: "",
    operation: ""
  })
  var g = Module_10.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useSelector(function (e) {
    var t
    return null === (t = e.project.screens.get(0)) || undefined === t ? undefined : t.snapshot
  })
  var w = useSelector(function (e) {
    return e.project.projectSource
  })
  useEffect(function () {
    var /* [auto-meaningful-name] */u$current
    if (e$visible) {
      if (!(null === (u$current = u.current) || undefined === u$current)) {
        u$current.setScale(1)
      }
    }
  }, [e$visible])
  useEffect(function () {
    b({
      description: "",
      operation: "",
      name: i
    })
  }, [i])
  var C = useState("")
  var T = Module_10.a(C, 2)
  var A = T[0]
  var j = T[1]
  var N = useState(y || "")
  var R = Module_10.a(N, 2)
  var k = R[0]
  var x = R[1]
  function M() {
    return (M = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (t && t[0]) {
                j(t[0])
              }
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  function L() {
    return (L = Module_7.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */u$current
      var /* [auto-meaningful-name] */u$current$target
      var i
      var a
      var s
      var f
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent1
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!c) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              l(true)
              e.next = 5
              return e$onConfirm()
            case 5:
              if (e.sent) {
                e.next = 9
                break
              }
              l(false)
              return e.abrupt("return")
            case 9:
              if (i = null === (u$current = u.current) || undefined === u$current || null === (u$current$target = u$current.target) || undefined === u$current$target ? undefined : u$current$target.getImageScaledToCanvas(), a = "", !i) {
                e.next = 19
                break
              }
              if (s = i.toDataURL("image/png"), !(f = Shared_tools_index.m(s))) {
                e.next = 19
                break
              }
              e.next = 17
              return Module_197.e(f)
            case 17:
              e$sent = e.sent
              a = e$sent.url
            case 19:
              e.prev = 19
              e.next = 22
              return Redux_common_actions.Nf(p, Redux_common_actions.Eh(v.name, v.description, v.operation, a))
            case 22:
              e$sent1 = e.sent
              p(Redux_common_actions.mj({
                type: "success",
                message: useIntl$formatMessage({
                  id: "Publish.publishSuccess"
                }),
                showCloseIcon: false
              }))
              window.open(Shared_tools_index.F(e$sent1))
              e$onClose()
              P(v, true, "")
              e.next = 38
              break
            case 29:
              if (e.prev = 29, e.t0 = e.catch(19), "40500104" !== e.t0.message) {
                e.next = 36
                break
              }
              p(Redux_common_actions.mj({
                message: "分享失败，作品使用了未审核的自定义控件",
                type: "error"
              }))
              l(false)
              e$onClose()
              return e.abrupt("return")
            case 36:
              p(Redux_common_actions.mj({
                type: "error",
                message: useIntl$formatMessage({
                  id: "Publish.publishFail"
                }),
                showCloseIcon: false
              }))
              P(v, false, e.t0.message)
            case 38:
              l(false)
            case 39:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[19, 29]])
    }))).apply(this, arguments)
  }
  function P(e, t, n) {
    Module_141.a("WorkPublish", {
      workId: o,
      workName: e.name,
      workType: "APP工匠",
      workDescription: e.description,
      sourceTag: w.tag,
      sourceId: w.id,
      isSuccess: t,
      failReason: n
    })
  }
  useEffect(function () {
    if (e$visible) {
      if (Module_97.a(o)) {
        Module_177.j(o).then(function (e) {
          var /* [auto-meaningful-name] */e$data = e.data
          b({
            name: e$data.name,
            description: e$data.description === Module_328.a ? "" : e$data.description || "",
            operation: e$data.operation === Module_328.b ? "" : e$data.operation || ""
          })
          if (e$data.cover_url) {
            j(e$data.cover_url)
          } else {
            x(y || "")
          }
        })
      } else {
        x(y || "")
      }
    } else {
      j("")
    }
  }, [e$visible])
  return React.createElement(Shared_ui_components_index.f, {
    onClose: e$onClose,
    className: Module_9301.publishDialog,
    visible: e$visible,
    withPortal: true,
    title: useIntl$formatMessage({
      id: "Publish.publish"
    })
  }, React.createElement("main", null, React.createElement("div", null, React.createElement(Shared_ui_components_index.c, {
    ref: u,
    width: 340,
    height: 340,
    sourceImage: A || k
  }), React.createElement("div", {
    className: Module_9301.changePoster
  }, React.createElement(Shared_ui_components_index.B, {
    onChange: function (e) {
      return M.apply(this, arguments)
    },
    accept: Module_133.f
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-player-upload-file"
  }), useIntl$formatMessage({
    id: "Publish.changeWorkCover"
  })))), React.createElement("div", {
    className: Module_9301.right
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement("p", null, useIntl$formatMessage({
    id: "Publish.publishName"
  }), React.createElement("span", {
    className: Module_9301.required
  }, "*")), React.createElement(Shared_ui_components_index.k, {
    defaultValue: v.name,
    maxLength: 20,
    placeholder: useIntl$formatMessage({
      id: "Publish.inputPublishName"
    }),
    onChange: function (e, t) {
      b(Module_6.a(Module_6.a({}, v), {}, {
        name: e
      }))
    },
    isTrimmed: true
  })), React.createElement("li", null, React.createElement("p", null, useIntl$formatMessage({
    id: "Publish.publishDescription"
  })), React.createElement(Shared_ui_components_index.A, {
    defaultValue: v.description,
    maxLength: 200,
    placeholder: useIntl$formatMessage({
      id: "Publish.inputPublishDescription"
    }),
    rows: 5,
    onChange: function (e) {
      b(Module_6.a(Module_6.a({}, v), {}, {
        description: e.target.value
      }))
    }
  })), React.createElement("li", null, React.createElement("p", null, useIntl$formatMessage({
    id: "Publish.publishOperation"
  })), React.createElement(Shared_ui_components_index.A, {
    defaultValue: v.operation,
    maxLength: 200,
    placeholder: useIntl$formatMessage({
      id: "Publish.inputPublishOperation"
    }),
    rows: 5,
    onChange: function (e) {
      b(Module_6.a(Module_6.a({}, v), {}, {
        operation: e.target.value
      }))
    }
  }))))), React.createElement("footer", null, React.createElement(Shared_ui_components_index.d, {
    type: "primary",
    onClick: function () {
      return L.apply(this, arguments)
    },
    disabled: !v.name
  }, c ? React.createElement(Ge, null) : useIntl$formatMessage({
    id: "Publish.publish"
  }))))
})
!function (e) {
  e.NONE = "NONE"
  e.SHARE_COMMUNITY_DIALOG = "SHARE_COMMUNITY_DIALOG"
  e.SHARE_QR_DIALOG = "SHARE_QR_DIALOG"
}(Zt || (Zt = {}))
export { Zt }
export { Jt }
