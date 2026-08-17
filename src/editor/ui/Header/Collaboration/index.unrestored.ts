/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-14
 */

"use strict"

import { se, le, de, fe, ge } from "../../../../../unrestored/shared/1571/2636/index__part-5"
import { _t, vt, bt, yt } from "../../../../../unrestored/shared/1571/2636/index__part-13"
import /* [auto-meaningful-name] */Module_136 from /* 136 */"../../../../../unrestored/shared/1571/2636/136"
import * as /* [auto-meaningful-name] */Module_100 from /* 100 */"../../../../../unrestored/shared/1571/2636/100"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"../../../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */Shared_player_audit from /* 288 */"../../../../shared/player/audit"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../../../unrestored/shared/1571/2636/97/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useEffect, useRef, useCallback } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Shared_widget_custom_type from /* 78 */"../../../../shared/widget/custom/type"
var wt = function (e) {
  var t
  var /* [auto-meaningful-name] */e$permission
  var r = useState(false)
  var o = Module_10.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = function () {
    a(false)
  }
  useEffect(function () {
    if (!e.parentVisible) {
      a(false)
    }
  }, [e.parentVisible])
  return e.isAuthor ? React.createElement(Module_1213.a, {
    placement: "bottom",
    content: (t = e.id, e$permission = e.permission, React.createElement("div", {
      className: Module_136.permissionDialog
    }, React.createElement("div", {
      onClick: function () {
        return e.handleChangePermission(Module_18.c.Edit, t, c)
      },
      className: Module_136.item
    }, React.createElement(Shared_ui_components_index.j, {
      type: "icon-selected",
      className: Classnames(Module_136.icon, e$permission === Module_18.c.Edit && Module_136.selected)
    }), React.createElement("span", null, useIntl$formatMessage({
      id: "OT.dialogCanEdit"
    }))), React.createElement("div", {
      onClick: function () {
        return e.handleChangePermission(Module_18.c.ReadOnly, t, c)
      },
      className: Module_136.item
    }, React.createElement(Shared_ui_components_index.j, {
      type: "icon-selected",
      className: Classnames(Module_136.icon, e$permission === Module_18.c.ReadOnly && Module_136.selected)
    }), React.createElement("span", null, useIntl$formatMessage({
      id: "OT.dialogReadOnly"
    }))), React.createElement("div", {
      onClick: function () {
        return e.handleRemovePermission(t, c)
      },
      className: Classnames(Module_136.item, Module_136.remove)
    }, React.createElement("span", null, useIntl$formatMessage({
      id: "OT.dialogRemove"
    }))))),
    trigger: "click",
    visible: i,
    onVisibleChange: function (e) {
      a(e)
    }
  }, React.createElement("div", {
    className: Module_136.edit_role
  }, React.createElement("span", null, e.permission === Module_18.c.Edit ? useIntl$formatMessage({
    id: "OT.edit"
  }) : useIntl$formatMessage({
    id: "OT.readonly"
  })), React.createElement("div", {
    className: Module_136.icon
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-dropdown-down",
    className: Module_136.icon
  })))) : React.createElement("div", {
    className: Classnames(Module_136.edit_role, Module_136.disabled)
  }, React.createElement("span", null, e.permission === Module_18.c.Edit ? useIntl$formatMessage({
    id: "OT.edit"
  }) : useIntl$formatMessage({
    id: "OT.readonly"
  })), React.createElement("div", {
    className: Module_136.icon
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-dropdown-down",
    className: Module_136.icon
  })))
}
var Ct = React.memo(function () {
  var e = useSelector(function (e) {
    return e.project
  })
  var t = e.id
  var /* [auto-meaningful-name] */e$title = e.title
  var r = useSelector(function (e) {
    return e.oTState.cooperationUserList
  })
  var o = useSelector(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var i = useSelector(function (e) {
    return e.common.userInfo
  })
  var a = useSelector(function (e) {
    return e.oTState.isAuthor
  })
  var s = useSelector(function (e) {
    return e.oTState.collWorkId
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var l = useSelector(function (e) {
    return e.common.isProjectModified
  })
  if (0 === r.size && i) {
    r = r.push({
      id: i.id,
      avatar_url: i.avatar_url,
      nickname: i.nickname,
      is_author: true,
      edit_permission: 1
    })
  }
  var u = Module_97.a(t)
  var d = useSelector(function (e) {
    return e.oTState.editorInviteUrl
  })
  var p = useSelector(function (e) {
    return e.oTState.readOnlyInviteUrl
  })
  var m = useDispatch()
  var g = useState(false)
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = useState(Module_18.c.Edit)
  var C = Module_10.a(w, 2)
  var T = C[0]
  var j = C[1]
  var R = useRef(null)
  var k = useState(false)
  var x = Module_10.a(k, 2)
  var D = x[0]
  var M = x[1]
  function L() {
    return (L = Module_7.a(RegeneratorRuntime.mark(function e() {
      var n
      var r
      var /* [auto-meaningful-name] */e$sent
      var a
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              n = Module_9.Eb(Module_9.j.EXTENSION).filter(function (e) {
                return !Shared_widget_custom_type.e(e.type)
              })
              e.next = 3
              return Shared_player_audit.b()
            case 3:
              if (e.sent.includes(Number(t)) || !(n.length > 0)) {
                e.next = 8
                break
              }
              y(false)
              m(Redux_common_actions.zh({
                allowText: useIntl$formatMessage({
                  id: "know"
                }),
                title: "",
                content: React.createElement("div", null, "作品使用了未审核的自定义控件，需将控件提交至", React.createElement("a", {
                  href: Shared_tools_index.b,
                  target: "__blank",
                  rel: "noopener noreferrer"
                }, "Coco控件商城-投稿"), "，并等待审核通过后才能进行协作。"),
                cancelBtnVisible: false
              }))
              return e.abrupt("return")
            case 8:
              if (r = t, y(true), !u || l) {
                e.next = 14
                break
              }
              r = t
              e.next = 17
              break
            case 14:
              e.next = 16
              return Redux_common_actions.Nf(m, Redux_common_actions.tg({
                isUpdate: u,
                isAutoSave: true
              }))
            case 16:
              r = e.sent
            case 17:
              if (!(Module_9.Y().length > 0)) {
                e.next = 22
                break
              }
              y(false)
              m(Redux_common_actions.zh({
                allowText: "确定",
                title: "提示",
                content: "作品中含有云数据库控件，暂时无法协作",
                cancelBtnVisible: false
              }))
              return e.abrupt("return")
            case 22:
              if (d) {
                e.next = 33
                break
              }
              if (e.t0 = r !== s, !e.t0) {
                e.next = 27
                break
              }
              e.next = 27
              return se(r)
            case 27:
              m(Module_100.o(r))
              e.next = 30
              return fe(r, Module_18.c.Edit)
            case 30:
              e$sent = e.sent
              a = Shared_tools_index.x(r, e$sent)
              m(Module_100.p(a))
            case 33:
              Module_141.a("InviteCollaborationClick", {
                authorId: (null === i || undefined === i ? undefined : i.id) || "",
                nickName: (null === i || undefined === i ? undefined : i.nickname) || ""
              })
            case 34:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  var P = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(n, r, o) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              ge(r, t, n).then(function () {
                var /* [auto-meaningful-name] */R$current
                le(t).then(function () {
                  var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
                    return RegeneratorRuntime.wrap(function (e) {
                      for (;;) {
                        switch (e.prev = e.next) {
                          case 0:
                            m(Module_100.s(t))
                          case 1:
                          case "end":
                            return e.stop()
                        }
                      }
                    }, e)
                  }))
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                }())
                if (!(null === (R$current = R.current) || undefined === R$current)) {
                  R$current.hideContent()
                }
                o()
              })
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n, r) {
      return e.apply(this, arguments)
    }
  }()
  var B = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(n, r) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              de(t, n).then(function () {
                var /* [auto-meaningful-name] */R$current
                if (!(null === (R$current = R.current) || undefined === R$current)) {
                  R$current.hideContent()
                }
                r()
              })
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }()
  var F = React.createElement("div", {
    className: Module_136.content
  }, a && React.createElement("div", {
    className: Module_136.header
  }, React.createElement(Shared_ui_components_index.d, {
    className: Module_136.shareButton,
    onClick: function () {
      return L.apply(this, arguments)
    }
  }, React.createElement(Shared_ui_components_index.j, {
    className: Module_136.invitationIcon,
    type: "icon-ot-invitation"
  }), useIntl$formatMessage({
    id: "OT.inviteFriend"
  }))), React.createElement("ul", {
    className: Module_136.list
  }, r.map(function (e, t) {
    return React.createElement("li", {
      key: t
    }, React.createElement("div", {
      className: Classnames(Module_136.headerPhotoBorder),
      key: e.id,
      style: {
        marginRight: "8px",
        borderColor: o.get(e.id)
      }
    }, React.createElement("div", {
      className: Module_136.headPhoto,
      style: {
        backgroundImage: "url(".concat(e.avatar_url, ")")
      }
    })), React.createElement("div", {
      className: Module_136.name
    }, React.createElement("p", null, e.nickname), React.createElement("span", null, e.id)), (n = e.id, e$is_author = e.is_author, e$edit_permission = e.edit_permission, e$is_author ? React.createElement("div", {
      className: Module_136.role
    }, React.createElement("div", null, useIntl$formatMessage({
      id: "OT.creator"
    }))) : React.createElement(wt, {
      isAuthor: a,
      permission: e$edit_permission,
      id: n,
      handleChangePermission: P,
      handleRemovePermission: B,
      parentVisible: D
    })))
    var n
    var /* [auto-meaningful-name] */e$is_author
    var /* [auto-meaningful-name] */e$edit_permission
  })))
  var G = useCallback(function () {
    return T === Module_18.c.Edit ? d : T === Module_18.c.ReadOnly ? p : ""
  }, [d, p, T])
  var W = useCallback(function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(n) {
      var /* [auto-meaningful-name] */e$sent
      var o
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (n !== Module_18.c.Edit) {
                e.next = 3
                break
              }
              j(n)
              return e.abrupt("return")
            case 3:
              if (n !== Module_18.c.ReadOnly) {
                e.next = 14
                break
              }
              if (p) {
                e.next = 13
                break
              }
              e.next = 7
              return fe(t, Module_18.c.ReadOnly)
            case 7:
              e$sent = e.sent
              o = Shared_tools_index.x(t, e$sent)
              m(Module_100.r(o))
              j(n)
              e.next = 14
              break
            case 13:
              j(n)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [m, t, p])
  return React.createElement("div", {
    style: {
      height: "100%"
    }
  }, React.createElement(Shared_ui_components_index.r, {
    content: F,
    className: Module_136.oTButton,
    onOpen: function () {
      return M(true)
    },
    onClose: function () {
      return M(false)
    },
    ref: R
  }, React.createElement(Module_748.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: useIntl$formatMessage({
      id: "OT.coll"
    }),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: -4
    }
  }, React.createElement("div", {
    className: Classnames(Module_136.collIconWrapper, D && Module_136.activeCollIconWrapper)
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-collaborate-active",
    className: Module_136.collIcon
  })))), React.createElement(Shared_ui_components_index.f, {
    className: Module_136.shareOtDialog,
    visible: b,
    title: useIntl$formatMessage({
      id: "OT.copyCollInvitationUrl"
    }),
    onClose: function () {
      y(false)
    }
  }, React.createElement("div", {
    className: Module_136.dialogMain
  }, React.createElement("div", {
    className: Module_136.text
  }, useIntl$formatMessage({
    id: "OT.expiration"
  })), React.createElement("div", {
    onClick: function () {
      return W(Module_18.c.Edit)
    },
    className: Classnames(Module_136.tab, T === Module_18.c.Edit && Module_136.selected)
  }, useIntl$formatMessage({
    id: "OT.editor"
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "OT.editorRules"
  })), T === Module_18.c.Edit && React.createElement("div", {
    className: Module_136.icon
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-selected"
  }))), React.createElement("div", {
    onClick: function () {
      return W(Module_18.c.ReadOnly)
    },
    className: Classnames(Module_136.tab, T === Module_18.c.ReadOnly && Module_136.selected)
  }, useIntl$formatMessage({
    id: "OT.reader"
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "OT.readerRules"
  })), T === Module_18.c.ReadOnly && React.createElement("div", {
    className: Module_136.icon
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-selected"
  })))), G() ? React.createElement(Shared_ui_components_index.d, {
    className: Module_136.copy,
    type: "primary",
    onClick: function () {
      var e = document.createElement("input")
      var t = T === Module_18.c.Edit ? "".concat(G(), " 点击链接，一起进入《").concat(e$title, "》的协同创作吧~") : "".concat(G(), " 点击链接，查看《").concat(e$title, "》的作品内容吧~")
      e.setAttribute("value", t)
      document.body.append(e)
      e.select()
      document.execCommand("Copy")
      document.body.removeChild(e)
      m(Redux_common_actions.mj({
        type: "success",
        message: useIntl$formatMessage({
          id: "OT.copySuccess"
        }),
        showCloseIcon: false
      }))
      y(false)
    }
  }, useIntl$formatMessage({
    id: "OT.copyLink"
  })) : React.createElement(Shared_ui_components_index.d, {
    className: Module_136.loadingBtn,
    type: "primary"
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-loading2"
  }))))
})
var St = React.memo(function () {
  var e = useSelector(function (e) {
    return e.project.id
  })
  var t = useState(false)
  var n = Module_10.a(t, 2)
  var r = n[0]
  var o = n[1]
  var i = useState(false)
  var a = Module_10.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useDispatch()
  var u = useSelector(function (e) {
    return e.oTState.collWorkId
  })
  useEffect(function () {
    if (u) {
      c(true)
      le(u).then(function () {
        var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  l(Module_100.s(t))
                case 1:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        }))
        return function (t) {
          return e.apply(this, arguments)
        }
      }())
      Module_24.a.init(u).then(function () {
        c(false)
      })
    } else {
      c(false)
      Module_24.a.disconnect()
    }
  }, [l, u])
  return React.createElement(React.Fragment, null, React.createElement(yt, null), React.createElement(Ct, null), React.createElement(vt, {
    visible: r,
    onClose: function () {
      o(false)
    }
  }), React.createElement(bt, {
    visible: s
  }), Module_97.a(e) && React.createElement(_t, null))
})
export { St }
