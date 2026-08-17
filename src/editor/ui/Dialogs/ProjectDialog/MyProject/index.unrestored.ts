/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-7
 */

"use strict"

import { ne } from "../../../../../../unrestored/shared/1571/2636/index__part-4"
import { de } from "../../../../../../unrestored/shared/1571/2636/index__part-5"
import { we } from "../../../../../../unrestored/shared/1571/2636/index__part-6"
var Oe
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */Module_297 from /* 297 */"../../../../../../unrestored/shared/1571/2636/297"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"../../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../../../unrestored/shared/1571/2636/25/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Shared_ui_language from /* 23 */"../../../../../shared/ui/language"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useCallback, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Shared_player_audit from /* 288 */"../../../../../shared/player/audit"
import * as /* [auto-meaningful-name] */Styles_module_css from /* 418 */"./styles.module.css"
import /* [auto-meaningful-name] */Styles_module_css1 from /* 418 */"./styles.module.css"
!function (e) {
  e.SELF = "self"
  e.COLL = "coll"
  e.PUBLISHED = "published"
  e.UNPUBLISHED = "unpublished"
}(Oe || (Oe = {}))
var Ae = [Oe.SELF, Oe.COLL, Oe.PUBLISHED, Oe.UNPUBLISHED]
var Ie = {
  self: "MyProject.noCreateProjectTips",
  coll: "MyProject.noCollProjectTips",
  published: "MyProject.noPublishProjectTips",
  unpublished: "MyProject.noCreateProjectTips"
}
function je(e) {
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$type = e.type
  return "loaded" === e$type ? React.createElement(React.Fragment, null) : "emptyList" === e$type ? React.createElement("div", {
    className: Styles_module_css1.emptyContainer
  }, React.createElement(we, {
    text: e$title
  })) : React.createElement(React.Fragment, null)
}
function Ne(e) {
  var t
  var /* [auto-meaningful-name] */e$project = e.project
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onDelete = e.onDelete
  var /* [auto-meaningful-name] */e$filterType = e.filterType
  var /* [auto-meaningful-name] */e$status = e.status
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  function c() {
    var e = []
    if (e$filterType === Oe.COLL) {
      e.push("deleteCollProject")
    } else {
      if (!e$project.publishedTime) {
        e.push("deleteProject")
      }
    }
    return e
  }
  return React.createElement("div", {
    className: Classnames(Styles_module_css1.item),
    onClick: function () {
      e$onClick(e$project.id, e$project.name, e$project.updateTime)
    },
    key: e$project.id
  }, React.createElement("div", {
    className: Styles_module_css1.cover
  }, React.createElement("img", {
    src: null === (t = e$project.coverUrl || e$project.previewUrl) || undefined === t ? undefined : t.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/"),
    alt: e$project.name
  })), React.createElement(Shared_ui_components_index.a, {
    className: Styles_module_css1.name,
    text: e$project.name
  }), React.createElement("p", {
    className: Styles_module_css1.time
  }, React.createElement(ne, {
    time: e$project.updateTime,
    currentTime: e$project.serverTime
  })), !!c().length && React.createElement("div", {
    className: Styles_module_css1.menuContainer,
    onClick: function (e) {
      e.stopPropagation()
    }
  }, React.createElement(Module_1213.a, {
    placement: "rightTop",
    trigger: "click",
    overlayClassName: Styles_module_css1.menuPopover,
    zIndex: 100,
    content: React.createElement("div", {
      className: Styles_module_css1.menuContent
    }, React.createElement(Shared_ui_components_index.l, {
      onClick: function (e) {
        if (!("deleteProject" !== e && "deleteCollProject" !== e)) {
          e$onDelete(e$project.id, e$project.name, e$project.isCollWork || e$filterType === Oe.COLL)
        }
      }
    }, c().map(function (e, t) {
      return React.createElement(Shared_ui_components_index.m, {
        value: e,
        key: t
      }, React.createElement("span", null, useIntl$formatMessage({
        id: "MyProject." + e
      })))
    })))
  }, React.createElement("div", null, React.createElement(Shared_ui_components_index.j, {
    type: "icon-more"
  })))), React.createElement("div", {
    className: Styles_module_css1.badgeWrapper
  }, (e$project.isCollWork || e$filterType === Oe.COLL) && "loaded" === e$status && React.createElement(Shared_ui_components_index.j, {
    type: "icon-collaborator"
  }), !!e$project.publishedTime && React.createElement(Shared_ui_components_index.j, {
    type: "icon-publish"
  })))
}
var Re = memo(function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$importProjectJson = e.importProjectJson
  var r = useState([])
  var o = Module_10.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = useState("loaded")
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useSelector(function (e) {
    return e.common.language
  })
  var p = useSelector(function (e) {
    return e.common.userInfo
  })
  var m = useSelector(function (e) {
    return e.project.id
  })
  var g = useState(Oe.SELF)
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = useDispatch()
  var C = useRef(0)
  var A = useRef(1)
  var j = useRef(false)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var k = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t, r, o) {
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent$data
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.prev = 0
              e.next = 3
              return Module_297.d(t)
            case 3:
              if (e$sent = e.sent, !(e$sent$data = e$sent.data)) {
                e.next = 16
                break
              }
              e.next = 8
              return Shared_player_audit.b()
            case 8:
              if (!(!e.sent.includes(Number(t)) && !e$sent$data.is_author && e$sent$data.is_coll_work && e$sent$data.content && e$sent$data.content.unsafeExtensionWidgetList && e$sent$data.content.unsafeExtensionWidgetList.length > 0)) {
                e.next = 12
                break
              }
              w(Redux_common_actions.zh({
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
            case 12:
              e$importProjectJson({
                json: e$sent$data.content,
                projectId: t,
                lastSavedTime: 1e3 * e$sent$data.updated_at,
                isCollWork: e$sent$data.is_coll_work,
                isAuthor: e$sent$data.is_author,
                editPermission: e$sent$data.edit_permission,
                jsonFrom: e$sent$data.is_coll_work ? Module_18.d.OTHER : Module_18.d.MY_WORK
              })
              Module_141.a("OpenWork", {
                workId: t,
                workType: b === Oe.COLL ? 2 : 1,
                isSuccess: true,
                failReason: ""
              })
              e.next = 17
              break
            case 16:
              w(Redux_common_actions.Uf({
                code: e$sent.code
              }))
            case 17:
              e.next = 23
              break
            case 19:
              e.prev = 19
              e.t0 = e.catch(0)
              console.error("getProjectJson error", e.t0)
              Module_141.a("OpenWork", {
                workId: t,
                workType: b === Oe.COLL ? 2 : 1,
                isSuccess: false,
                failReason: e.t0.message
              })
            case 23:
              w(Redux_common_actions.Xg())
            case 24:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[0, 19]])
    }))
    return function (t, n, r) {
      return e.apply(this, arguments)
    }
  }()
  var D = useCallback(function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!j.current) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              if (j.current = true, u("loading"), b !== Oe.COLL) {
                e.next = 10
                break
              }
              e.next = 7
              return P(t)
            case 7:
              t = e.sent
              e.next = 26
              break
            case 10:
              if (b !== Oe.SELF) {
                e.next = 16
                break
              }
              e.next = 13
              return M(t)
            case 13:
              t = e.sent
              e.next = 26
              break
            case 16:
              if (b !== Oe.PUBLISHED) {
                e.next = 22
                break
              }
              e.next = 19
              return M(t, true)
            case 19:
              t = e.sent
              e.next = 26
              break
            case 22:
              if (b !== Oe.UNPUBLISHED) {
                e.next = 26
                break
              }
              e.next = 25
              return M(t, false)
            case 25:
              t = e.sent
            case 26:
              F(t)
              j.current = false
            case 28:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [b])
  function M(e, t) {
    return L.apply(this, arguments)
  }
  function L() {
    return (L = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(A.current < C.current)) {
                e.next = 2
                break
              }
              return e.abrupt("return", t)
            case 2:
              e.next = 4
              return Module_297.c(C.current, 20, n)
            case 4:
              e$sent = e.sent
              C.current += 20
              A.current = e$sent.total
              return e.abrupt("return", [].concat(Module_25.a(t), Module_25.a(e$sent.list)))
            case 8:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  function P(e) {
    return B.apply(this, arguments)
  }
  function B() {
    return (B = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(A.current < 20 * C.current)) {
                e.next = 2
                break
              }
              return e.abrupt("return", t)
            case 2:
              C.current++
              e.next = 5
              return Module_297.b(C.current, 20)
            case 5:
              e$sent = e.sent
              A.current = e$sent.total
              return e.abrupt("return", [].concat(Module_25.a(t), Module_25.a(e$sent.list)))
            case 8:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  useEffect(function () {
    if (e$visible) {
      C.current = 0
      j.current = false
      D([])
    }
  }, [D, e$visible])
  if (!e$visible) {
    return null
  }
  function F(e) {
    a(e)
    if (0 === e.length) {
      u("emptyList")
    } else {
      u("loaded")
    }
  }
  var G = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var r
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!p || b !== Oe.COLL) {
                e.next = 6
                break
              }
              e.next = 3
              return de(t, p.id)
            case 3:
              n = e.sent
              e.next = 10
              break
            case 6:
              e.next = 8
              return Module_297.a(t)
            case 8:
              if (n = e.sent) {
                w(Redux_common_actions.mj({
                  message: Shared_ui_language.c(d, "MyProject.deleteProjectSuccess").toString()
                }))
              }
            case 10:
              if (n) {
                if ((r = i.findIndex(function (e) {
                  return e.id === t
                })) > -1) {
                  i.splice(r, 1)
                  F(Module_25.a(i))
                  if (m === t) {
                    w(Redux_common_actions.Gf())
                  }
                }
              } else {
                w(Redux_common_actions.mj({
                  message: Shared_ui_language.c(d, "MyProject.deleteProjectError").toString(),
                  duration: 1e3,
                  type: "error"
                }))
              }
            case 11:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  function W(e, t, n) {
    if (b === Oe.COLL) {
      w(Redux_common_actions.zh({
        onConfirm: G.bind(null, e),
        allowText: useIntl$formatMessage({
          id: "MyProject.quitCollWorkConfirmText"
        }),
        title: useIntl$formatMessage({
          id: "MyProject.quitCollWorkTitle"
        }, {
          name: Module_190.f(t)
        }),
        content: useIntl$formatMessage({
          id: "MyProject.quitCollWorkDescription"
        }),
        isDangerous: true
      }))
    } else {
      G(e)
    }
  }
  var U = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              y(t)
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
  }()
  return React.createElement("div", null, React.createElement("div", {
    className: Styles_module_css1.filter
  }, Ae.map(function (e) {
    return React.createElement("div", {
      key: e,
      onClick: U.bind(null, e),
      className: Classnames(Styles_module_css1.filterItem, b === e && Styles_module_css1.active)
    }, useIntl$formatMessage({
      id: "MyProject.".concat(e)
    }))
  })), React.createElement("div", {
    className: Styles_module_css1.container
  }, React.createElement(je, {
    title: useIntl$formatMessage({
      id: Ie[b]
    }),
    type: l
  }), i.length > 0 && React.createElement("div", {
    className: Styles_module_css1.main
  }, React.createElement(Shared_ui_components_index.v, {
    offsetY: 300,
    height: 450,
    onScrollBottom: function () {
      D(i)
    }
  }, i.map(function (e) {
    return React.createElement(Ne, {
      status: l,
      key: e.id,
      project: e,
      onClick: k,
      onDelete: W,
      filterType: b
    })
  })))))
})
export { Re }
