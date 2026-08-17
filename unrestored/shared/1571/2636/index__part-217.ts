/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-217
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_392 from /* 392 */"./392/index"
import * as /* [auto-meaningful-name] */Module_2646 from /* 2646 */"./2646/index"
import /* [auto-meaningful-name] */Module_266 from /* 266 */"./266"
import /* [auto-meaningful-name] */Axios from /* 129 */"axios"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"./141/index"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"./97/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_627 from /* 627 */"./627/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_188 from /* 188 */"./188"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_475 from /* 475 */"./475"
import /* [auto-meaningful-name] */Module_4751 from /* 475 */"./475"
var ZP = memo(function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useSelector(function (e) {
    return e.common.courseList
  })
  var r = useSelector(function (e) {
    return e.common.courseDialogVisible
  })
  var o = useSelector(function (e) {
    return e.common.isProjectModified
  })
  var i = useSelector(function (e) {
    return e.project.id
  })
  var a = Module_97.a(i)
  var s = function () {
    var t = Module_7.a(RegeneratorRuntime.mark(function t(n) {
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (!o || !a) {
                t.next = 9
                break
              }
              t.prev = 1
              t.next = 4
              return Src_editor_redux_common_actions.Nf(e, Src_editor_redux_common_actions.tg({
                isUpdate: a,
                isAutoSave: true,
                isNeedReport: false
              }))
            case 4:
              t.next = 9
              break
            case 6:
              t.prev = 6
              t.t0 = t.catch(1)
              return t.abrupt("return")
            case 9:
              if (!o || a) {
                t.next = 12
                break
              }
              e(Src_editor_redux_common_actions.Ri({
                visible: true,
                openFrom: "course",
                onSave: function () {
                  var t = Module_7.a(RegeneratorRuntime.mark(function t() {
                    return RegeneratorRuntime.wrap(function (t) {
                      for (;;) {
                        switch (t.prev = t.next) {
                          case 0:
                            t.prev = 0
                            t.next = 3
                            return Src_editor_redux_common_actions.Nf(e, Src_editor_redux_common_actions.tg({
                              isUpdate: a,
                              isAutoSave: true,
                              isNeedReport: false
                            }))
                          case 3:
                            c(n)
                            t.next = 8
                            break
                          case 6:
                            t.prev = 6
                            t.t0 = t.catch(0)
                          case 8:
                          case "end":
                            return t.stop()
                        }
                      }
                    }, t, null, [[0, 6]])
                  }))
                  return function () {
                    return t.apply(this, arguments)
                  }
                }(),
                onImport: function () {
                  c(n)
                }
              }))
              return t.abrupt("return")
            case 12:
              c(n)
            case 13:
            case "end":
              return t.stop()
          }
        }
      }, t, null, [[1, 6]])
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }()
  var c = function () {
    var t = Module_7.a(RegeneratorRuntime.mark(function t(r) {
      var o
      var /* [auto-meaningful-name] */o$bcmUrl
      var /* [auto-meaningful-name] */o$title
      var /* [auto-meaningful-name] */o$videoUrl
      var /* [auto-meaningful-name] */t$sent
      var /* [auto-meaningful-name] */t$sent$data
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (l(), o = n.find(function (e) {
                return e.id === r
              })) {
                t.next = 5
                break
              }
              e(Src_editor_redux_common_actions.mj({
                message: "未获取到教程信息"
              }))
              return t.abrupt("return")
            case 5:
              o$bcmUrl = o.bcmUrl
              o$title = o.title
              o$videoUrl = o.videoUrl
              t.next = 8
              return Axios.get(o$bcmUrl)
            case 8:
              if ((t$sent = t.sent).data) {
                t$sent$data = t$sent.data
                e(Src_editor_redux_common_actions.Gf({
                  json: t$sent$data,
                  jsonFrom: Module_18.d.COURSE,
                  sourceTag: Module_18.g.COURSE,
                  sourceId: r.toString()
                }))
              }
              Module_627.a.load({
                onPlayerInit: function () {},
                title: React.createElement("div", null, React.createElement("span", {
                  style: {
                    position: "relative",
                    right: 5
                  }
                }, React.createElement(Module_2646.a, {
                  size: "esm",
                  type: "transparent-fb",
                  width: 26,
                  height: 14,
                  onClick: Module_7.a(RegeneratorRuntime.mark(function t() {
                    return RegeneratorRuntime.wrap(function (t) {
                      for (;;) {
                        switch (t.prev = t.next) {
                          case 0:
                            Module_627.a.close({
                              closeAnimationPos: {
                                x: 150,
                                y: 30
                              }
                            })
                            e(Src_editor_redux_common_actions.fi(true))
                          case 2:
                          case "end":
                            return t.stop()
                        }
                      }
                    }, t)
                  }))
                }, React.createElement(Src_shared_ui_components_index.j, {
                  type: "icon-btn-fallback",
                  className: "coco-video-back"
                }))), o$title),
                videoSrc: o$videoUrl,
                autoPlay: true,
                zIndex: 3,
                useConfirmMask: true,
                confirmPercent: .9,
                onMinimizeBtnClick: function () {
                  Module_627.a.hide()
                  e(Src_editor_redux_common_actions.Qh(Module_392.a, {
                    name: Module_392.a,
                    content: React.createElement(Module_392.b, null),
                    visible: true
                  }))
                },
                onClose: function () {
                  Module_627.a.close({
                    closeAnimationPos: {
                      x: 150,
                      y: 30
                    }
                  })
                }
              })
              Module_141.a("CourseClick", {
                courseId: r
              })
            case 12:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }()
  var l = function () {
    e(Src_editor_redux_common_actions.fi(false))
  }
  return React.createElement(Src_shared_ui_components_index.f, {
    title: useIntl$formatMessage({
      id: "courseVideo"
    }),
    withPortal: true,
    visible: r,
    className: Module_4751.courseDialog,
    onClose: l
  }, React.createElement("div", {
    className: Module_4751.courseList
  }, n.map(function (e) {
    return React.createElement("div", {
      className: Module_4751.courseItem,
      key: e.id,
      onClick: function () {
        return s(e.id)
      }
    }, React.createElement("div", {
      className: Module_4751.courseImage
    }, React.createElement("div", {
      className: Module_4751.image,
      style: {
        backgroundImage: "url(".concat(e.preview, ")")
      }
    }), React.createElement("div", {
      className: Module_4751.mask
    }, React.createElement("div", {
      className: Module_4751.playBox
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-sound-play"
    })))), React.createElement("div", {
      className: Module_4751.courseName
    }, e.title), React.createElement("div", {
      className: Module_4751.courseDesc
    }, e.courseIntro))
  }), React.createElement("div", {
    className: Module_4751.courseMore
  }, React.createElement("div", {
    className: Module_4751.moreImage
  }), React.createElement("div", {
    className: Module_4751.moreTips
  }, useIntl$formatMessage({
    id: "moreCourseTips"
  })))))
})
var JP = memo(function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useDispatch()
  var r = useSelector(function (e) {
    return e.common.projectSavePrompt
  })
  var /* [auto-meaningful-name] */r$visible = r.visible
  var /* [auto-meaningful-name] */r$openFrom = r.openFrom
  var /* [auto-meaningful-name] */r$onSave = r.onSave
  var /* [auto-meaningful-name] */r$onImport = r.onImport
  var c = function () {
    if (r$onSave) {
      r$onSave()
    }
    l()
  }
  var l = function () {
    n(Src_editor_redux_common_actions.Ri({
      visible: false,
      openFrom: ""
    }))
  }
  var /* [auto-meaningful-name] */WhetherKeepWorksTitle = "whetherKeepWorksTitle"
  if ("backHome" === r$openFrom) {
    WhetherKeepWorksTitle = "whetherKeepWorksTitleWhenBackHome"
  } else {
    if ("course" === r$openFrom) {
      WhetherKeepWorksTitle = "whetherKeepWorksTitleWhenOpenCourse"
    }
  }
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: r$visible,
    showCloseButton: false,
    onClose: l,
    maskClosable: false,
    className: Classnames(Module_266.dialog, Module_266.dialogSecondary)
  }, React.createElement("h3", null, useIntl$formatMessage({
    id: WhetherKeepWorksTitle
  })), React.createElement("span", null, useIntl$formatMessage({
    id: "whetherKeepWorksDescription"
  })), React.createElement(Module_188.a, null, React.createElement(Module_188.b, {
    keys: "enter",
    callback: c
  })), React.createElement("div", {
    className: Classnames(Module_266.dialogButtons)
  }, React.createElement(Src_shared_ui_components_index.d, {
    onClick: l,
    className: Module_266.cancel
  }, useIntl$formatMessage({
    id: "cancel"
  })), React.createElement(Src_shared_ui_components_index.d, {
    onClick: function () {
      if (r$onImport) {
        r$onImport()
      }
      l()
    },
    className: Module_266.denyButton
  }, useIntl$formatMessage({
    id: "notSave"
  })), React.createElement(Src_shared_ui_components_index.d, {
    type: "primary",
    onClick: c
  }, useIntl$formatMessage({
    id: "save"
  }))))
})
export { ZP }
export { JP }
