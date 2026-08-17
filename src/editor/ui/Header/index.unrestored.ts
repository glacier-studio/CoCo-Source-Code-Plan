/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-22
 */

"use strict"

import { B, G, H } from "../../../../unrestored/shared/1571/2636/index__part-2"
import { Q } from "../../../../unrestored/shared/1571/2636/index__part-3"
import { Pe } from "../Dialogs/ProjectDialog/index"
import { Ge } from "../../../../unrestored/shared/1571/2636/index__part-9"
import { Ze } from "./UserAvatar/index"
import { Xe, ot } from "../../../../unrestored/shared/1571/2636/index__part-11"
import { St } from "./Collaboration/index"
import { Dt } from "../../../../unrestored/shared/1571/2636/index__part-15"
import { Gt } from "../../../../unrestored/shared/1571/2636/index__part-16"
import { on } from "./Share/MenuItem"
import { dn, pn, fn } from "../../../../unrestored/shared/1571/2636/index__part-20"
import { gn } from "../../../../unrestored/shared/1571/2636/index__part-21"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../unrestored/shared/1571/2636/9"
import /* [auto-meaningful-name] */Styles_module_css from /* 161 */"./styles.module.css"
import * as /* [auto-meaningful-name] */Module_276 from /* 276 */"../../../../unrestored/shared/1571/2636/276"
import * as /* [auto-meaningful-name] */Shared_widget_custom_load from /* 34 */"../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../../unrestored/shared/1571/2636/97/index"
import * as /* [auto-meaningful-name] */Module_454 from /* 454 */"../../../../unrestored/shared/1571/2636/454/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_627 from /* 627 */"../../../../unrestored/shared/1571/2636/627/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useEffect, useRef, useCallback } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../../../unrestored/shared/1571/2636/47"
import * as /* [auto-meaningful-name] */Module_1053 from /* 1053 */"../../../../unrestored/shared/1571/2636/1053"
import /* [auto-meaningful-name] */Module_10531 from /* 1053 */"../../../../unrestored/shared/1571/2636/1053"
var yn = function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useSelector(function (e) {
    return e.uiConfig.header
  })
  var n = useSelector(function (e) {
    return e.cloudSpace.cloudDictList
  })
  var r = useSelector(function (e) {
    return e.cloudSpace.cloudTableList
  })
  var o = useState(false)
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  useEffect(function () {
    s(false)
    d(false)
    var e
    var t = Module_47.a(n)
    try {
      for (t.s(); !(e = t.n()).done;) {
        var /* [auto-meaningful-name] */e$value = e.value
        if (o.prod_capacity >= Module_9.a * Module_9.c) {
          d(true)
          break
        }
        if (o.prod_capacity >= Module_9.b * Module_9.c) {
          s(true)
        }
      }
    } catch (l) {
      t.e(l)
    } finally {
      t.f()
    }
    var i
    var a = Module_47.a(r)
    try {
      for (a.s(); !(i = a.n()).done;) {
        var /* [auto-meaningful-name] */i$value = i.value
        if (c.prod_capacity >= Module_9.a * Module_9.d) {
          d(true)
          break
        }
        if (c.prod_capacity >= Module_9.b * Module_9.d) {
          s(true)
        }
      }
    } catch (l) {
      a.e(l)
    } finally {
      a.f()
    }
  }, [n, r])
  if (t.cloudSpaceManager === Module_18.j.Hide) {
    return null
  }
  var p = useIntl$formatMessage(u ? {
    id: "cloudSpace.outMaxLimit"
  } : a ? {
    id: "cloudSpace.outWarnLimit"
  } : {
    id: "cloudSpace.cloudSpace"
  })
  return React.createElement(Module_748.a, {
    placement: "bottom",
    trigger: ["hover"],
    title: p,
    overlayInnerStyle: {
      position: "relative",
      top: -7
    }
  }, React.createElement("div", {
    onClick: function () {
      window.open("".concat(Shared_tools_index.A(), "/"), "_blank")
    },
    className: Classnames(Module_10531.cloudSpaceManager)
  }, p === useIntl$formatMessage({
    id: "cloudSpace.outMaxLimit"
  }) && React.createElement("div", {
    className: Module_10531.cloudIconError
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-cloud-manager-error"
  })), p === useIntl$formatMessage({
    id: "cloudSpace.outWarnLimit"
  }) && React.createElement("div", {
    className: Module_10531.cloudIconWarn
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-cloud-manager-warn"
  })), p === useIntl$formatMessage({
    id: "cloudSpace.cloudSpace"
  }) && React.createElement("div", null, React.createElement(Shared_ui_components_index.j, {
    type: "icon-cloud-manager-normal"
  }))))
}
var En = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var n = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = useState(false)
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useRef()
  var m = useSelector(function (e) {
    return e.common.userInfo
  })
  var g = useSelector(function (e) {
    return e.common.saving
  })
  var v = useSelector(function (e) {
    return e.oTState.isAuthor
  })
  var b = useSelector(function (e) {
    return e.cloudSpace.checkedTimeStamp
  })
  var y = useSelector(function (e) {
    return e.common.stageRulerVisible
  })
  var w = useSelector(function (e) {
    return e.common.stageVisible
  })
  var C = useSelector(function (e) {
    return e.common.cloudDBManagerDialogVisible
  })
  var T = useSelector(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */T$isPackaging = T.isPackaging
  var /* [auto-meaningful-name] */T$packageQrCodeVisible = T.packageQrCodeVisible
  var /* [auto-meaningful-name] */T$packageDialogVisible = T.packageDialogVisible
  var D = useSelector(function (e) {
    return e.common.lastSavedTime
  })
  var M = useSelector(function (e) {
    return e.common.isProjectModified
  })
  var L = useSelector(function (e) {
    return e.project.playing
  })
  var P = useSelector(function (e) {
    return e.project.id
  })
  var F = useSelector(function (e) {
    return e.project.title
  })
  var W = useSelector(function (e) {
    return e.project.jsonFrom
  })
  var U = Module_97.a(P)
  var V = useRef(null)
  var X = useRef(null)
  var J = useRef(null)
  var $ = useState(false)
  var ee = Module_10.a($, 2)
  var ne = ee[0]
  var re = ee[1]
  var oe = useSelector(function (e) {
    return e.uiConfig.header
  })
  var ie = useState(false)
  var ae = Module_10.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = undefined !== Shared_tools_index.N(window.location.href).archiveId
  useEffect(function () {
    re(false)
  }, [P])
  useEffect(function () {
    if (se) {
      we(false, true)
    }
  }, [b])
  useEffect(function () {
    function e() {
      if (V.current) {
        clearTimeout(V.current)
      }
    }
    if (U) {
      e()
    } else {
      V.current = window.setTimeout(function () {
        re(true)
      }, 18e4)
    }
    return e
  }, [P, U])
  var ue = useState(false)
  var de = Module_10.a(ue, 2)
  var pe = de[0]
  var fe = de[1]
  var he = useSelector(function (e) {
    return e.common.collAutoSave
  })
  var me = useSelector(function (e) {
    return e.common.historyArchiveId
  })
  var ge = useSelector(function (e) {
    return e.oTState.collWorkId
  })
  useEffect(function () {
    !function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : H.PURPLE
      var t = G(e)
      var n = ""
      for (var r in t) if (t[r]) {
        n += "".concat(B[r], ": ").concat(t[r], "; ")
      }
      document.body.setAttribute("style", n)
    }()
    n(Redux_common_actions.Tf())
    n(Redux_common_actions.Xf())
  }, [n])
  var _e = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (m) {
                e.next = 3
                break
              }
              n(Redux_common_actions.Ch())
              return e.abrupt("return")
            case 3:
              if (!T$isPackaging) {
                e.next = 6
                break
              }
              n(Redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "package.packagePending"
                }),
                type: "success"
              }))
              return e.abrupt("return")
            case 6:
              e.prev = 6
              e.next = 9
              return Redux_common_actions.Nf(n, Redux_common_actions.Vf())
            case 9:
              e.next = 14
              break
            case 11:
              e.prev = 11
              e.t0 = e.catch(6)
              d(true)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[6, 11]])
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var ve = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.next = 2
              return we(false)
            case 2:
              e$sent = e.sent
              if (p.current) {
                p.current()
              }
              p.current = null
              if (e$sent) {
                n(Redux_common_actions.dj(Module_18.j.Hide))
                setTimeout(function () {
                  return Oe()
                }, 100)
              }
            case 6:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var ye = function () {
    if (p.current) {
      p.current()
    }
    p.current = null
    n(Redux_common_actions.dj(Module_18.j.Hide))
    setTimeout(function () {
      return Oe()
    }, 100)
  }
  var Ee = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (U || !M) {
                e.next = 3
                break
              }
              n(Redux_common_actions.Ri({
                visible: true,
                openFrom: "backHome",
                onSave: ve,
                onImport: ye
              }))
              return e.abrupt("return")
            case 3:
              if (!U || !M) {
                e.next = 9
                break
              }
              e.next = 6
              return we(true)
            case 6:
              if (e.sent) {
                e.next = 9
                break
              }
              return e.abrupt("return")
            case 9:
              n(Redux_common_actions.dj(Module_18.j.Hide))
              setTimeout(function () {
                return Oe()
              }, 100)
            case 11:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var Oe = function () {
    window.location.href = Shared_tools_index.B()
  }
  var we = useCallback(function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t, o) {
      var i
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (m) {
                e.next = 3
                break
              }
              n(Redux_common_actions.Ch())
              return e.abrupt("return")
            case 3:
              if (!g) {
                e.next = 5
                break
              }
              return e.abrupt("return")
            case 5:
              if (J.current) {
                clearTimeout(J.current)
              }
              if (!t) {
                J.current = window.setTimeout(function () {
                  n(Redux_common_actions.Qi(true))
                }, 6e3)
              }
              s(false)
              i = true
              e.prev = 9
              e.next = 12
              return Redux_common_actions.Nf(n, Redux_common_actions.tg({
                isUpdate: U,
                isAutoSave: t,
                isNeedReport: o
              }))
            case 12:
              if (!t) {
                n(Redux_common_actions.mj({
                  message: useIntl$formatMessage({
                    id: "saveProject.successTips"
                  }),
                  type: "success"
                }))
              }
              fe(false)
              e.next = 21
              break
            case 16:
              e.prev = 16
              e.t0 = e.catch(9)
              if (e.t0.message === Module_276.a.CLOUD_SPACE_DATA_ERROR) {
                n(Redux_common_actions.Cf(true))
                ce(true)
              } else {
                if (e.t0.message !== Module_276.a.USER_CANCEL_SAVE && e.t0.message !== Module_276.a.USER_NOT_LOGIN) {
                  if (t) {
                    fe(true)
                  } else {
                    s(true)
                  }
                }
              }
              n(Redux_common_actions.Si(false))
              i = false
            case 21:
              if (J.current) {
                clearTimeout(J.current)
                n(Redux_common_actions.Qi(false))
              }
              return e.abrupt("return", i)
            case 23:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[9, 16]])
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }(), [n, useIntl$formatMessage, U, g, m])
  useEffect(function () {
    function e() {
      if (X.current) {
        clearTimeout(X.current)
        X.current = null
      }
    }
    if (ge || oe.save === Module_18.j.Hide || oe.save === Module_18.j.ReadOnly) {
      e()
    } else if (U && M) {
      if (!X.current) {
        if (U && M) {
          X.current = window.setTimeout(function () {
            we(true)
            e()
          }, 3e5)
        }
        return e
      }
    } else {
      e()
    }
  }, [U, M, we, ge, oe.save])
  useEffect(function () {
    if (!g) {
      if (me) {
        if (M) {
          Module_7.a(RegeneratorRuntime.mark(function e() {
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return we(true)
                  case 2:
                    n(Redux_common_actions.sg(me))
                  case 3:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          }))()
        } else {
          n(Redux_common_actions.sg(me))
        }
      }
    }
  }, [M, me, we, n, g])
  useEffect(function () {
    if (he && M) {
      we(true).then(function () {
        n(Redux_common_actions.di(false))
      }).catch(function (e) {
        console.error(e)
        n(Redux_common_actions.di(false))
      })
    }
  }, [M, we, he, n])
  var Ce = function (e) {
    switch (e) {
      case "EXPORT_PROJECT_AS_JSON":
        n(Redux_common_actions.Of(true))
        Module_141.a("SaveToComputerClick", {
          workId: P,
          workName: F
        })
        break
      case "CREATE_NEW_PROJECT":
        n(Redux_common_actions.Ah(Module_18.f.CREATE_PROJECT))
        break
      case "OPEN_MY_PROJECT":
        if (!m) {
          return void n(Redux_common_actions.Ch())
        }
        n(Redux_common_actions.Ah(Module_18.f.MY_PROJECT))
        break
      case "SAVE_AS":
        n(Redux_common_actions.tg({
          isUpdate: false,
          isAutoSave: false,
          isNeedReport: true,
          isSaveAs: true
        }))
        break
      case "HISTORY":
        return void n(Redux_common_actions.tj(true))
      case "IMPORT_EXTENSION_WIDGET":
        break
      case "OPEN_LOCAL_FILE":
        n(Redux_common_actions.Gi(false))
    }
  }
  var Te = useCallback(function (e) {
    if (M) {
      n(Redux_common_actions.Ri({
        visible: true,
        openFrom: "",
        onSave: function () {
          var e = Module_7.a(RegeneratorRuntime.mark(function e() {
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return we(false)
                  case 2:
                    if (p.current) {
                      p.current()
                    }
                    p.current = null
                  case 4:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          }))
          return function () {
            return e.apply(this, arguments)
          }
        }(),
        onImport: function () {
          if (p.current) {
            p.current()
          }
          p.current = null
        }
      }))
      p.current = function () {
        n(Redux_common_actions.Gf(e))
      }
    } else {
      n(Redux_common_actions.Gf(e))
    }
    var t = (null === e || undefined === e ? undefined : e.editPermission) === Module_18.c.ReadOnly ? Module_18.c.ReadOnly : Module_18.c.Edit
    n(Redux_common_actions.Ci(t))
  }, [n, we, M])
  var Se = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(t && t.length > 0)) {
                e.next = 10
                break
              }
              n = t[0]
              e.next = 4
              return Module_454.i(n)
            case 4:
              if (e$sent = e.sent) {
                e.next = 8
                break
              }
              console.error("file load failed")
              return e.abrupt("return")
            case 8:
              Te({
                json: e$sent,
                isAuthor: true,
                sourceTag: Module_18.g.LOCAL,
                jsonFrom: Module_18.d.LOCAL_FILE
              })
              Module_141.a("OpenComputerFileClick")
            case 10:
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
  var Ae = function () {
    n(Redux_common_actions.Gi(true))
  }
  var Ie = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var o
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent$title
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(t && t.length > 0)) {
                e.next = 13
                break
              }
              o = t[0]
              e.prev = 2
              e.next = 5
              return Shared_widget_custom_load.t(o, false)
            case 5:
              e$sent = e.sent
              e$sent$title = e$sent.title
              n(Redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "HeaderDropdown.importExtensionSuccess"
                }, {
                  title: e$sent$title
                }),
                type: "info"
              }))
              e.next = 13
              break
            case 10:
              e.prev = 10
              e.t0 = e.catch(2)
              console.error(e.t0)
            case 13:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[2, 10]])
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  var je = function (e) {
    if (!L) {
      switch (e) {
        case "STAGE_RULER":
          n(Redux_common_actions.Wi(!y))
          break
        case "STAGE_AREA":
          n(Redux_common_actions.Yi(!w))
      }
    }
  }
  useEffect(function () {
    if (oe.preventLeave === Module_18.j.Show) {
      window.onbeforeunload = function (e) {
        if (e) {
          e.returnValue = "你要离开网页吗？"
        }
        return "你要离开网页吗？"
      }
    } else {
      window.onbeforeunload = function () {}
    }
  }, [oe.preventLeave])
  useEffect(function () {
    window.addEventListener("message", Q.handle)
  }, [n])
  var Ne = oe.file.openLocalFile === Module_18.j.Show
  var Re = oe.file.exportLocalFile === Module_18.j.Show && v
  var ke = oe.file.saveAs === Module_18.j.Show && v
  var xe = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!Module_627.a.isLoaded()) {
                e.next = 3
                break
              }
              n(Redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "coursePlayingTips"
                })
              }))
              return e.abrupt("return")
            case 3:
              n(Redux_common_actions.fi(true))
            case 4:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var De = function () {
    window.open("".concat(Shared_tools_index.B(), "/about/"), "_blank")
  }
  return React.createElement("div", {
    className: Styles_module_css.wrapper,
    "data-html2canvas-ignore": "true"
  }, React.createElement("div", {
    className: Styles_module_css.left
  }, !le && oe.logo !== Module_18.j.Hide && React.createElement(Module_748.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: useIntl$formatMessage({
      id: "back"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: -7
    }
  }, React.createElement("div", {
    className: Styles_module_css.logoBox,
    id: "logo",
    onClick: Ee
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-dropdown-down",
    className: Styles_module_css.back
  }), React.createElement("div", {
    className: Styles_module_css.logo
  }))), !le && oe.cutLine === Module_18.j.Show && React.createElement("div", {
    className: Styles_module_css.logoCutLine
  }), React.createElement("div", {
    className: Styles_module_css.menu
  }, Object.values(oe.file).includes(Module_18.j.Show) && !le && React.createElement(Shared_ui_components_index.g, {
    className: Styles_module_css.fileDropdown,
    overlay: React.createElement(Shared_ui_components_index.l, {
      onClick: Ce
    }, oe.file.newProject === Module_18.j.Show && React.createElement(Shared_ui_components_index.m, {
      value: "CREATE_NEW_PROJECT"
    }, React.createElement("div", {
      className: Styles_module_css.itemContent
    }, useIntl$formatMessage({
      id: "HeaderDropdown.newProject"
    }))), oe.file.openMyProject === Module_18.j.Show && React.createElement(Shared_ui_components_index.m, {
      value: "OPEN_MY_PROJECT"
    }, React.createElement("div", {
      className: Styles_module_css.itemContent
    }, useIntl$formatMessage({
      id: "HeaderDropdown.openProject"
    }))), ke && React.createElement(Shared_ui_components_index.m, {
      value: "SAVE_AS"
    }, React.createElement("div", {
      className: Styles_module_css.itemContent
    }, useIntl$formatMessage({
      id: "HeaderDropdown.saveAs"
    }))), React.createElement("div", {
      className: Styles_module_css.line
    }), oe.file.showHistory === Module_18.j.Show && v && React.createElement(Shared_ui_components_index.m, {
      value: "HISTORY"
    }, React.createElement("div", {
      className: Styles_module_css.itemContent
    }, useIntl$formatMessage({
      id: "HeaderDropdown.history"
    }))), !ge && React.createElement(Shared_ui_components_index.m, {
      value: "IMPORT_EXTENSION_WIDGET"
    }, React.createElement(Shared_ui_components_index.B, {
      onChange: Ie,
      accept: ".js,.jsx",
      className: Classnames(Styles_module_css.itemUploadButton)
    }, useIntl$formatMessage({
      id: "HeaderDropdown.importExtension"
    }))), (Re || Re) && React.createElement("div", {
      className: Styles_module_css.line
    }), Ne && React.createElement(Shared_ui_components_index.m, {
      value: "OPEN_LOCAL_FILE"
    }, React.createElement(Shared_ui_components_index.B, {
      onChange: Se,
      onCancel: Ae,
      accept: ".json",
      className: Classnames(Styles_module_css.itemUploadButton)
    }, useIntl$formatMessage({
      id: "HeaderDropdown.openLocalFile"
    }))), Re && React.createElement(Shared_ui_components_index.m, {
      value: "EXPORT_PROJECT_AS_JSON"
    }, React.createElement("div", {
      className: Styles_module_css.itemContent
    }, useIntl$formatMessage({
      id: "HeaderDropdown.exportProjectAsJson"
    }))))
  }, React.createElement(Module_748.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    trigger: ["hover", "click"],
    title: useIntl$formatMessage({
      id: "file"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: "6px",
      left: "5px"
    }
  }, React.createElement("div", {
    className: Styles_module_css.toolTipsBox
  }, React.createElement(Shared_ui_components_index.j, {
    className: "coco-header-menuIcon",
    type: "icon-file"
  })))), Object.values(oe.tutorial).includes(Module_18.j.Show) && !le && React.createElement(Shared_ui_components_index.g, {
    overlay: React.createElement(Shared_ui_components_index.l, null, oe.tutorial.releaseInfo === Module_18.j.Show && React.createElement(Shared_ui_components_index.m, {
      value: "courseVideo"
    }, React.createElement("div", {
      className: Styles_module_css.itemLinkContent,
      onClick: xe
    }, React.createElement("span", {
      className: Styles_module_css.link
    }, useIntl$formatMessage({
      id: "courseVideo"
    })))), oe.tutorial.tutorial === Module_18.j.Show && React.createElement(Shared_ui_components_index.m, {
      value: "tutorial"
    }, React.createElement("div", {
      className: Styles_module_css.itemLinkContent
    }, React.createElement("a", {
      href: "https://codemao-guide.yuque.com/bfiekm/sbo5kh",
      target: "_blank",
      rel: "noopener noreferrer",
      className: Styles_module_css.link
    }, useIntl$formatMessage({
      id: "seeTutorial"
    })))), React.createElement("div", {
      className: Styles_module_css.line
    }), oe.tutorial.feedback === Module_18.j.Show && React.createElement(Shared_ui_components_index.m, {
      value: "feedback"
    }, React.createElement("div", {
      className: Styles_module_css.itemLinkContent
    }, React.createElement("a", {
      href: "https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd",
      target: "_blank",
      rel: "noopener noreferrer",
      className: Styles_module_css.link
    }, useIntl$formatMessage({
      id: "feedback"
    })))), oe.tutorial.releaseInfo === Module_18.j.Show && React.createElement(Shared_ui_components_index.m, {
      value: "releaseInfo"
    }, React.createElement("div", {
      className: Styles_module_css.itemLinkContent,
      onClick: function () {
        return n(Redux_common_actions.vj(true))
      }
    }, React.createElement("span", {
      className: Styles_module_css.link
    }, useIntl$formatMessage({
      id: "releaseInfo"
    })))), oe.tutorial.about === Module_18.j.Show && React.createElement(Shared_ui_components_index.m, {
      value: "aboutUs"
    }, React.createElement("div", {
      className: Styles_module_css.itemLinkContent,
      onClick: De
    }, React.createElement("span", {
      className: Styles_module_css.link
    }, useIntl$formatMessage({
      id: "aboutUs"
    })))))
  }, React.createElement(Module_748.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    trigger: ["hover", "click"],
    title: useIntl$formatMessage({
      id: "help"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: "6px",
      left: "5px"
    }
  }, React.createElement("div", {
    className: Styles_module_css.toolTipsBox
  }, React.createElement(Shared_ui_components_index.j, {
    className: "coco-header-menuIcon",
    type: "icon-help-circle-active"
  })))), Object.values(oe.help).includes(Module_18.j.Show) && !le && React.createElement(Shared_ui_components_index.g, {
    overlay: React.createElement(Shared_ui_components_index.l, {
      onClick: je
    }, oe.help.ruler === Module_18.j.Show && React.createElement(Shared_ui_components_index.m, {
      value: "STAGE_RULER"
    }, React.createElement("div", {
      className: Classnames(Styles_module_css.itemContent, L && Styles_module_css.disabled)
    }, useIntl$formatMessage(y ? {
      id: "HeaderDropdown.hideRuler"
    } : {
      id: "HeaderDropdown.showRuler"
    }))), oe.help.stage === Module_18.j.Show && React.createElement(Shared_ui_components_index.m, {
      value: "STAGE_AREA"
    }, React.createElement("div", {
      className: Classnames(Styles_module_css.itemContent, L && Styles_module_css.disabled)
    }, useIntl$formatMessage(w ? {
      id: "HeaderDropdown.hideWidgetAndStage"
    } : {
      id: "HeaderDropdown.showWidgetAndStage"
    }))))
  }, React.createElement(Module_748.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    trigger: ["hover", "click"],
    title: useIntl$formatMessage({
      id: "setting"
    }),
    overlayInnerStyle: {
      position: "relative",
      top: "6px",
      left: "5px"
    }
  }, React.createElement("div", {
    className: Styles_module_css.toolTipsBox
  }, React.createElement(Shared_ui_components_index.j, {
    className: "coco-header-menuIcon",
    type: "icon-settings"
  }))))), !le && oe.cloudDBManager === Module_18.j.Show && React.createElement(Module_748.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: useIntl$formatMessage({
      id: "cloudDBManager"
    }),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: -7
    }
  }, React.createElement("div", {
    className: Classnames(Styles_module_css.iconWrapper, Styles_module_css.cloudIconWrapper, C && Styles_module_css.activeIconWrapper),
    onClick: function () {
      n(m ? Redux_common_actions.jj(true) : Redux_common_actions.Ch())
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-database-manage-active",
    className: Styles_module_css.databaseIcon
  }))), React.createElement(yn, null)), React.createElement("div", {
    className: Styles_module_css.center
  }, e$children), React.createElement("div", {
    className: Styles_module_css.right
  }, !le && oe.coll === Module_18.j.Show && React.createElement("div", {
    className: Styles_module_css.otWrapper
  }, React.createElement(St, null)), !le && oe.package === Module_18.j.Show && v && React.createElement(Shared_ui_components_index.g, {
    className: Styles_module_css.shareMenu,
    overlay: React.createElement(Shared_ui_components_index.l, null, React.createElement(Shared_ui_components_index.m, null, React.createElement(on, {
      target: "community"
    })), React.createElement(Shared_ui_components_index.m, null, React.createElement(on, {
      target: "others"
    })))
  }, React.createElement(Module_748.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: useIntl$formatMessage({
      id: "Publish.share"
    }),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: -4
    }
  }, React.createElement("div", {
    className: Classnames(Styles_module_css.shareWrapper)
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-share",
    className: Styles_module_css.icon
  })))), !le && oe.cutLine === Module_18.j.Show && React.createElement("div", {
    className: Styles_module_css.cutLine
  }), !le && oe.save === Module_18.j.Show && React.createElement(Module_748.a, {
    placement: "bottom",
    title: function () {
      if (!D) {
        return useIntl$formatMessage({
          id: "MyProject.notSaved"
        })
      }
      var e = D
      var t = Date.now()
      var n = t - e
      var o = Shared_tools_index.G(t, 0)
      var i = Shared_tools_index.G(t, -1)
      var a = Shared_tools_index.G(t, -2)
      var s = new Date(e)
      var c = ""
      var l = "".concat(useIntl$formatMessage({
        id: "MyProject.lastSaved"
      }), " ")
      if (n < 6e4) {
        c = "".concat(useIntl$formatMessage({
          id: "MyProject.justSaved"
        }))
      } else if (n < 36e5) {
        var u = Math.ceil(n / 60 / 1e3)
        u = Math.max(u, 1)
        u = Math.min(u, 59)
        c = l + (c = "".concat(u).concat(useIntl$formatMessage({
          id: "MyProject.minute"
        })).concat(useIntl$formatMessage({
          id: "MyProject.ago"
        })))
      } else if (n < 216e5 || e > o) {
        var d = Math.floor(n / 36e5)
        var p = Math.floor(n % 36e5 / 6e4)
        if (d) {
          c += "".concat(d).concat(useIntl$formatMessage({
            id: "MyProject.hour"
          }))
        }
        if (p) {
          c += "".concat(p).concat(useIntl$formatMessage({
            id: "MyProject.minute"
          }))
        }
        c = l + (c += useIntl$formatMessage({
          id: "MyProject.ago"
        }))
      } else if (e > i) {
        c = l + (c = useIntl$formatMessage({
          id: "MyProject.yesterday"
        }) + Shared_tools_index.K(s))
      } else {
        if (e > a) {
          c = l + (c = useIntl$formatMessage({
            id: "MyProject.theDayBeforeYesterday"
          }) + Shared_tools_index.K(s))
        } else {
          c = "".concat(s.getFullYear()).concat(useIntl$formatMessage({
            id: "MyProject.year"
          }))
          c += "".concat(s.getMonth() + 1).concat(useIntl$formatMessage({
            id: "MyProject.month"
          }))
          c = l + (c += "".concat(s.getDate()).concat(useIntl$formatMessage({
            id: "MyProject.day"
          })))
        }
      }
      return c
    }(),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: "8px"
    }
  }, React.createElement(Shared_ui_components_index.d, {
    onClick: function () {
      we(false, true)
    },
    className: Classnames(Styles_module_css.saveBtn, g && Styles_module_css.saving)
  }, React.createElement("span", {
    className: Styles_module_css.saveText
  }, useIntl$formatMessage({
    id: "save"
  })), React.createElement("span", {
    className: Styles_module_css.savingIcon
  }, React.createElement(Ge, {
    stroke: "#6e4ff4"
  })))), !le && oe.package === Module_18.j.Show && v && React.createElement(Shared_ui_components_index.d, {
    className: Styles_module_css.packageBtn,
    onClick: _e,
    disabled: T$isPackaging
  }, useIntl$formatMessage({
    id: "package"
  })), T$packageDialogVisible && React.createElement(Dt, null), T$packageQrCodeVisible && React.createElement(Gt, null), !le && oe.userInfo === Module_18.j.Show && React.createElement(Ze, null), React.createElement("div", {
    className: Classnames(Styles_module_css.saveTipsWrapper, W !== Module_18.d.OTHER && ne && !U && Styles_module_css.show)
  }, useIntl$formatMessage({
    id: "MyProject.newSaveTips"
  }), React.createElement("div", {
    className: Styles_module_css.closeSaveTips,
    onClick: function () {
      return re(false)
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-close"
  }))), pe && React.createElement(ot, {
    type: Xe.ERROR,
    message: useIntl$formatMessage({
      id: "MyProject.autoSaveErrorTips"
    }),
    onClose: function () {
      fe(false)
    }
  }), React.createElement(Pe, {
    importProjectJson: Te
  }), React.createElement(gn, null)), React.createElement(dn, {
    visible: a,
    onClose: function () {
      s(false)
    },
    save: function () {
      we(false)
    }
  }), React.createElement(fn, {
    visible: u,
    onClose: function () {
      d(false)
    },
    save: function () {
      d(false)
      _e()
    }
  }), React.createElement(pn, null))
})
export { En }
