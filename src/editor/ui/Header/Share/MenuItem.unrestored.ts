/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-18
 */

"use strict"

import { Ge } from "../../../../../unrestored/shared/1571/2636/index__part-9"
import { Zt, Jt } from "./Dialogs/Community"
import * as /* [auto-meaningful-name] */Shared_widget_custom_restrict from /* 232 */"../../../../shared/widget/custom/restrict"
import * as /* [auto-meaningful-name] */Shared_widget_custom_storage from /* 96 */"../../../../shared/widget/custom/storage"
import /* [auto-meaningful-name] */Module_1510 from /* 1510 */"../../../../../unrestored/shared/1571/2636/1510"
import /* [auto-meaningful-name] */Module_1509 from /* 1509 */"../../../../../unrestored/shared/1571/2636/1509"
import /* [auto-meaningful-name] */Module_1036 from /* 1036 */"../../../../../unrestored/shared/1571/2636/1036/index"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"../../../../../unrestored/shared/1571/2636/133/index"
import * as /* [auto-meaningful-name] */Module_197 from /* 197 */"../../../../../unrestored/shared/1571/2636/197/index"
import * as /* [auto-meaningful-name] */Shared_widget_custom_type from /* 78 */"../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Shared_player_audit from /* 288 */"../../../../shared/player/audit"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../../../unrestored/shared/1571/2636/97/index"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useRef, useCallback, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1052 from /* 1052 */"../../../../../unrestored/shared/1571/2636/1052"
import /* [auto-meaningful-name] */Module_10521 from /* 1052 */"../../../../../unrestored/shared/1571/2636/1052"
import * as /* [auto-meaningful-name] */Module_281 from /* 281 */"../../../../../unrestored/shared/1571/2636/281"
import /* [auto-meaningful-name] */Module_2811 from /* 281 */"../../../../../unrestored/shared/1571/2636/281"
var rn = function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var r = useSelector(function (e) {
    return e.project.projectShareInfo
  })
  var o = useSelector(function (e) {
    return e.project.id
  })
  var i = useSelector(function (e) {
    return e.common.userInfo
  })
  var a = useSelector(function (e) {
    return e.project.projectSource
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = useDispatch()
  var l = useState(false)
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = useState(false)
  var g = Module_10.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useState("")
  var w = Module_10.a(y, 2)
  var C = w[0]
  var T = w[1]
  var A = useState(false)
  var j = Module_10.a(A, 2)
  var R = j[0]
  var k = j[1]
  var x = useState(false)
  var D = Module_10.a(x, 2)
  var M = D[0]
  var L = D[1]
  var P = useState(false)
  var B = Module_10.a(P, 2)
  var F = B[0]
  var G = B[1]
  var W = useRef(false)
  var U = useCallback(function (e, t) {
    Module_141.a("WorkShare", {
      workId: o,
      workName: r.title,
      workTag: "",
      sourceTag: a.tag,
      sourceId: a.id,
      authorId: (null === i || undefined === i ? undefined : i.id) || "",
      nickName: (null === i || undefined === i ? undefined : i.nickname) || "",
      isSuccess: e,
      failReason: t
    })
  }, [o, a, r.title, i])
  var H = useCallback(Module_7.a(RegeneratorRuntime.mark(function e() {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!F && !R) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            e.prev = 2
            e.next = 5
            return Redux_common_actions.Nf(c, Redux_common_actions.Fh(r))
          case 5:
            if (Module_97.a(o)) {
              T(Shared_tools_index.J(o))
            }
            k(false)
            L(false)
            U(true, "")
            e.next = 21
            break
          case 11:
            if (e.prev = 11, e.t0 = e.catch(2), "40500104" !== e.t0.message) {
              e.next = 18
              break
            }
            c(Redux_common_actions.mj({
              message: "分享失败，作品使用了未审核的自定义控件",
              type: "error"
            }))
            k(false)
            e$onClose()
            return e.abrupt("return")
          case 18:
            c(Redux_common_actions.mj({
              message: useIntl$formatMessage({
                id: "Publish.shareQRError"
              }).toString(),
              type: "error"
            }))
            k(false)
            U(false, e.t0.message)
          case 21:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[2, 11]])
  })), [c, useIntl$formatMessage, R, e$onClose, o, r, U, F])
  function V() {
    return (V = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent1
      var /* [auto-meaningful-name] */e$sent1$url
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!t || !t[0]) {
                e.next = 22
                break
              }
              e.prev = 1
              n = t[0]
              L(true)
              G(true)
              e.next = 7
              return Shared_tools_index.u(n)
            case 7:
              if (!(e$sent = e.sent)) {
                e.next = 14
                break
              }
              e.next = 11
              return Module_197.e(e$sent)
            case 11:
              e$sent1 = e.sent
              e$sent1$url = e$sent1.url
              c(Redux_common_actions.Ti({
                img: e$sent1$url
              }))
            case 14:
              e.next = 19
              break
            case 16:
              e.prev = 16
              e.t0 = e.catch(1)
              c(Redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "Publish.coverImageUploadFail"
                }).toString(),
                type: "error"
              }))
            case 19:
              e.prev = 19
              G(false)
              return e.finish(19)
            case 22:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[1, 16, 19, 22]])
    }))).apply(this, arguments)
  }
  function K() {
    return (K = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (Module_190.a(C)) {
                b(true)
                c(Redux_common_actions.mj({
                  message: useIntl$formatMessage({
                    id: "Publish.copyLinkSuccess"
                  }).toString(),
                  duration: 1e3,
                  type: "success"
                }))
              } else {
                c(Redux_common_actions.mj({
                  message: useIntl$formatMessage({
                    id: "Publish.copyLinkFailure"
                  }).toString(),
                  duration: 1e3,
                  type: "error"
                }))
              }
            case 2:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  useEffect(function () {
    if (e$visible) {
      if (!W.current) {
        k(true)
        H()
      }
      W.current = true
    } else {
      W.current = false
      L(false)
      p(false)
      b(false)
    }
  }, [H, e$visible])
  return React.createElement(Shared_ui_components_index.f, {
    onClose: e$onClose,
    className: Module_2811.shareToOthers,
    title: useIntl$formatMessage({
      id: "Publish.shareToOthers"
    }),
    withPortal: true,
    visible: e$visible
  }, React.createElement("div", {
    className: Module_2811.qrWrapper
  }, (R || M || F) && React.createElement("div", {
    className: Module_2811.blocking
  }, React.createElement("div", {
    className: Module_2811.iconWrapper
  }, M ? React.createElement("div", {
    onClick: function () {
      W.current = false
      k(true)
      L(false)
      b(false)
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-refresh",
    className: Module_2811.refreshIcon
  })) : React.createElement(Ge, null)), React.createElement("span", null, useIntl$formatMessage(M ? {
    id: "Publish.refreshQrCode"
  } : {
    id: "Publish.creatingQrCode"
  }))), React.createElement("div", {
    className: Module_2811.qrCode
  }, React.createElement(Module_1036, {
    value: C,
    size: 168,
    level: "M",
    imageSettings: {
      width: 54,
      height: 54,
      src: "https://static.bcmcdn.com/coco/image/share-dialog/qrlogo.png"
    }
  })), React.createElement("div", {
    className: Module_2811.message
  }, R || M ? "" : useIntl$formatMessage({
    id: "Publish.shareQrCode"
  })), React.createElement("div", {
    className: Module_2811.shareLinkWrapper
  }, React.createElement("div", {
    className: Module_2811.link
  }, C), React.createElement("div", {
    className: Classnames(Module_2811.copyBtn, v && Module_2811.copied, (R || M || F) && Module_2811.disabled),
    onClick: function () {
      return K.apply(this, arguments)
    }
  }, useIntl$formatMessage(v ? {
    id: "Publish.shareLinkCopied"
  } : {
    id: "Publish.copyShareLink"
  })))), React.createElement("div", {
    className: Module_2811.lineWrapper
  }, React.createElement("div", {
    className: Module_2811.line
  }), React.createElement("div", {
    className: Module_2811.settings,
    onClick: function () {
      return p(!d)
    }
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "Publish.moreSettings"
  })), React.createElement(Shared_ui_components_index.j, {
    type: "icon-dropdown-down",
    className: Classnames(Module_2811.settingsIcon, d && Module_2811.rotateSettingsIcon)
  })), React.createElement("div", {
    className: Module_2811.line
  })), React.createElement("div", {
    className: Classnames(Module_2811.settingWrapper, !d && Module_2811.invisible)
  }, React.createElement("div", {
    className: Module_2811.workInfo
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement("p", {
    className: Module_2811.title
  }, useIntl$formatMessage({
    id: "Publish.shareTitle"
  }), React.createElement("span", {
    className: Module_2811.required
  }, "*")), React.createElement(Shared_ui_components_index.k, {
    defaultValue: r.title,
    maxLength: 20,
    placeholder: useIntl$formatMessage({
      id: "Publish.inputPublishName"
    }),
    onBlur: function (e, t) {
      if (e !== r.title) {
        if ("" !== e) {
          L(true)
          c(Redux_common_actions.Ti({
            title: e
          }))
        } else {
          t.target.value = r.title
        }
      }
    },
    isTrimmed: true
  })), React.createElement("li", null, React.createElement("p", {
    className: Module_2811.title
  }, useIntl$formatMessage({
    id: "Publish.shareDescription"
  })), React.createElement(Shared_ui_components_index.A, {
    defaultValue: r.desc,
    maxLength: 25,
    placeholder: useIntl$formatMessage({
      id: "Publish.inputShareDescription"
    }),
    rows: 3,
    onBlur: function (e) {
      if (e.target.value !== r.desc) {
        L(true)
        c(Redux_common_actions.Ti({
          desc: e.target.value
        }))
      }
    }
  })))), React.createElement("div", null, React.createElement("p", {
    className: Module_2811.title
  }, useIntl$formatMessage({
    id: "Publish.workCover"
  })), React.createElement(Shared_ui_components_index.c, {
    width: 140,
    height: 138,
    sourceImage: r.img
  }), React.createElement("div", {
    className: Module_2811.changePoster
  }, React.createElement(Shared_ui_components_index.B, {
    onChange: function (e) {
      return V.apply(this, arguments)
    },
    accept: Module_133.f
  }, useIntl$formatMessage({
    id: "Publish.changeWorkCover"
  }))))))
}
var on = function (e) {
  var /* [auto-meaningful-name] */e$target = e.target
  var n = {
    icon: "community" === e$target ? Module_1509 : Module_1510,
    message: "community" === e$target ? "Publish.shareToCommunity" : "Publish.shareToOthers",
    dialogType: "community" === e$target ? Zt.SHARE_COMMUNITY_DIALOG : Zt.SHARE_QR_DIALOG
  }
  var r = useState(Zt.NONE)
  var o = Module_10.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = useSelector(function (e) {
    return e.common.userInfo
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var l = useSelector(function (e) {
    return e.project.id
  })
  var u = useSelector(function (e) {
    return e.project.globalWidgetIds
  })
  var d = useDispatch()
  function p() {
    return (p = Module_7.a(RegeneratorRuntime.mark(function e() {
      var t
      var r
      var o
      var i
      var p
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (s) {
                e.next = 3
                break
              }
              d(Redux_common_actions.Ch())
              return e.abrupt("return")
            case 3:
              if (t = {}, u.forEach(function (e) {
                var n = Module_9.Bb(e)
                if (n) {
                  t[e] = n
                }
              }), r = new Set(), o = new Set(), Object.values(t).forEach(function (e) {
                var /* [auto-meaningful-name] */e$type = e.type
                var n = Shared_widget_custom_storage.f(e$type)
                if (e$type.includes(Shared_widget_custom_type.b) && n) {
                  var i = n
                  Shared_widget_custom_restrict.a.forEach(function (e) {
                    var /* [auto-meaningful-name] */i$code
                    if (null === (i$code = i.code) || undefined === i$code ? undefined : i$code.includes(e)) {
                      o.add(e)
                      r.add(n.types.title)
                    }
                  })
                }
              }), !o.size) {
                e.next = 11
                break
              }
              d(Redux_common_actions.zh({
                allowText: useIntl$formatMessage({
                  id: "cloudDb.know"
                }),
                title: "error",
                content: useIntl$formatMessage({
                  id: "Play.widgetNotSupportsForbiddenKeywords"
                }, {
                  widgetTypeNames: Array.from(r).join("、"),
                  keywords: Array.from(o).join("、")
                }),
                cancelBtnVisible: false
              }))
              return e.abrupt("return")
            case 11:
              i = Module_9.Eb(Module_9.j.EXTENSION).filter(function (e) {
                return !Shared_widget_custom_type.e(e.type)
              })
              e.next = 14
              return Shared_player_audit.b()
            case 14:
              if (e.sent.includes(Number(l)) || !(i.length > 0)) {
                e.next = 18
                break
              }
              d(Redux_common_actions.zh({
                allowText: useIntl$formatMessage({
                  id: "know"
                }),
                title: "",
                content: React.createElement("div", null, "作品使用了未审核的自定义控件，需将控件提交至", React.createElement("a", {
                  href: Shared_tools_index.b,
                  target: "__blank",
                  rel: "noopener noreferrer"
                }, "Coco控件商城-投稿"), "，并等待审核通过后才能进行分享。"),
                cancelBtnVisible: false
              }))
              return e.abrupt("return")
            case 18:
              p = function () {
                a(n.dialogType)
              }
              if (n.dialogType === Zt.SHARE_QR_DIALOG) {
                Redux_common_actions.Nf(d, Redux_common_actions.Wf(p))
              } else {
                if (Module_9.Y().length > 0 && "true" !== localStorage.getItem("cloudDBPublishGuide")) {
                  d(Redux_common_actions.kj(true, "share", p))
                } else {
                  p()
                }
              }
            case 20:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  function m() {
    return g.apply(this, arguments)
  }
  function g() {
    return (g = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.prev = 0
              e.next = 3
              return Redux_common_actions.Nf(d, Redux_common_actions.tg({
                isUpdate: Module_97.a(l),
                isAutoSave: true
              }))
            case 3:
              e.next = 5
              return d(Redux_common_actions.kh())
            case 5:
              return e.abrupt("return", true)
            case 8:
              e.prev = 8
              e.t0 = e.catch(0)
              e.next = 12
              return d(Redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "Publish.projectSaveFail"
                }),
                type: "error"
              }))
            case 12:
              return e.abrupt("return", false)
            case 13:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[0, 8]])
    }))).apply(this, arguments)
  }
  function v() {
    a(Zt.NONE)
  }
  return React.createElement("div", null, React.createElement("div", {
    onClick: function () {
      return p.apply(this, arguments)
    },
    className: Module_10521.shareBtn
  }, React.createElement("img", {
    src: n.icon,
    alt: e$target,
    className: Module_10521.shareIcon
  }), React.createElement("span", {
    className: Module_10521.shareMessage
  }, useIntl$formatMessage({
    id: n.message
  }))), React.createElement(Jt, {
    onClose: v,
    onConfirm: m,
    visible: i === Zt.SHARE_COMMUNITY_DIALOG
  }), React.createElement(rn, {
    onClose: v,
    onConfirm: m,
    visible: i === Zt.SHARE_QR_DIALOG
  }))
}
export { on }
