/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-15
 */

"use strict"

import { Ge } from "./index__part-9"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"./97/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_197 from /* 197 */"./197/index"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"./133/index"
import * as /* [auto-meaningful-name] */Module_467 from /* 467 */"./467"
import * as /* [auto-meaningful-name] */Module_199 from /* 199 */"./199"
import /* [auto-meaningful-name] */Module_1991 from /* 199 */"./199"
var kt = ["https://static.bcmcdn.com/appcraft/package/icon01.png", "https://static.bcmcdn.com/appcraft/package/icon02.png", "https://static.bcmcdn.com/appcraft/package/icon03.png", "https://static.bcmcdn.com/appcraft/package/icon04.png", "https://static.bcmcdn.com/appcraft/package/icon05.png", "https://static.bcmcdn.com/appcraft/package/icon06.png", "https://static.bcmcdn.com/appcraft/package/icon07.png", "https://static.bcmcdn.com/appcraft/package/icon08.png"]
var xt = ["https://static.bcmcdn.com/appcraft/package/splash01.png", "https://static.bcmcdn.com/appcraft/package/splash02.png", "https://static.bcmcdn.com/appcraft/package/splash03.png", "https://static.bcmcdn.com/appcraft/package/splash04.png", "https://static.bcmcdn.com/appcraft/package/splash05.png"]
var Dt = memo(function () {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var t = useDispatch()
  var n = useRef(null)
  var r = useRef(null)
  var o = useRef(null)
  var i = useSelector(function (e) {
    return e.project
  })
  var a = i.id
  var /* [auto-meaningful-name] */i$packageDialogVisible = i.packageDialogVisible
  var /* [auto-meaningful-name] */i$packageInfo = i.packageInfo
  var /* [auto-meaningful-name] */i$packageCompleteVisible = i.packageCompleteVisible
  var /* [auto-meaningful-name] */i$isPackaging = i.isPackaging
  var d = useSelector(function (e) {
    return e.common.saving
  })
  var p = useState(i$packageInfo.apkIcon || "https://static.bcmcdn.com/appcraft/package/icon00.png")
  var m = Module_10.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = useState(i$packageInfo.apkSplash || "https://static.bcmcdn.com/appcraft/package/splash01.png")
  var y = Module_10.a(b, 2)
  var w = y[0]
  var C = y[1]
  var T = useState(40)
  var A = Module_10.a(T, 2)
  var j = A[0]
  var R = A[1]
  var k = useState("")
  var x = Module_10.a(k, 2)
  var D = x[0]
  var M = x[1]
  var L = useState(false)
  var P = Module_10.a(L, 2)
  var B = P[0]
  var F = P[1]
  var G = useState(false)
  var W = Module_10.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = useState(false)
  var K = Module_10.a(V, 2)
  var q = K[0]
  var X = K[1]
  var Q = useState(false)
  var J = Module_10.a(Q, 2)
  var $ = J[0]
  var ne = J[1]
  var re = useState(true)
  var oe = Module_10.a(re, 2)
  var ie = oe[0]
  var ae = oe[1]
  var se = function () {
    var n = Module_7.a(RegeneratorRuntime.mark(function n() {
      var /* [auto-meaningful-name] */i$packageInfo$apkName
      var o
      var i
      var s
      var /* [auto-meaningful-name] */n$sent
      var /* [auto-meaningful-name] */n$sent1
      var /* [auto-meaningful-name] */n$sent2
      var /* [auto-meaningful-name] */n$sent3
      var m
      var _
      var v
      var b
      return RegeneratorRuntime.wrap(function (n) {
        for (;;) {
          switch (n.prev = n.next) {
            case 0:
              if (!i$isPackaging && !d) {
                n.next = 2
                break
              }
              return n.abrupt("return")
            case 2:
              n.prev = 2
              o = Module_97.a(a)
              n.next = 6
              return Src_editor_redux_common_actions.Nf(t, Src_editor_redux_common_actions.tg({
                isUpdate: o,
                isAutoSave: true,
                isNeedReport: true
              }))
            case 6:
              n.next = 12
              break
            case 8:
              n.prev = 8
              n.t0 = n.catch(2)
              t(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "Publish.projectSaveFail"
                }),
                type: "error"
              }))
              return n.abrupt("return")
            case 12:
              if (null === (i$packageInfo$apkName = i$packageInfo.apkName) || undefined === i$packageInfo$apkName ? undefined : i$packageInfo$apkName.trim()) {
                n.next = 14
                break
              }
              return n.abrupt("return")
            case 14:
              if (i = g, s = w, g.startsWith("http")) {
                n.next = 31
                break
              }
              n.next = 19
              return Src_shared_tools_index.f(g, "apkIcon.png")
            case 19:
              n$sent = n.sent
              n.prev = 20
              n.next = 23
              return Module_197.e(n$sent)
            case 23:
              if ((n$sent1 = n.sent).url) {
                i = n$sent1.url
              }
              n.next = 31
              break
            case 27:
              n.prev = 27
              n.t1 = n.catch(20)
              t(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "package.uploadIconFailed"
                })
              }))
              throw n.t1
            case 31:
              if (w.startsWith("http")) {
                n.next = 55
                break
              }
              n.next = 34
              return Src_shared_tools_index.f(w, "apkSplash.png")
            case 34:
              n$sent2 = n.sent
              n.prev = 35
              n.next = 38
              return Module_197.e(n$sent2)
            case 38:
              if (!(n$sent3 = n.sent).url) {
                n.next = 49
                break
              }
              n.next = 42
              return Module_467.a(n$sent3.url)
            case 42:
              if (!n.sent) {
                n.next = 47
                break
              }
              s = n$sent3.url
              n.next = 49
              break
            case 47:
              t(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "package.checkSplashFailed"
                })
              }))
              return n.abrupt("return")
            case 49:
              n.next = 55
              break
            case 51:
              n.prev = 51
              n.t2 = n.catch(35)
              t(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "package.uploadSplashFailed"
                })
              }))
              throw n.t2
            case 55:
              t(Src_editor_redux_common_actions.Ji({
                apkIcon: i,
                apkSplash: s
              }))
              m = Module_9.kb()
              _ = 0
              v = Object.values(m)
            case 58:
              if (!(_ < v.length)) {
                n.next = 66
                break
              }
              if ((b = v[_]).cdnUrl && "http" === b.cdnUrl.slice(0, 4)) {
                n.next = 63
                break
              }
              t(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "waitForAssetUploading"
                })
              }))
              return n.abrupt("return")
            case 63:
              _++
              n.next = 58
              break
            case 66:
              t(Src_editor_redux_common_actions.Li(true))
              t(Src_editor_redux_common_actions.Ki(0))
              Src_editor_redux_common_actions.Nf(t, Src_editor_redux_common_actions.jg())
            case 69:
            case "end":
              return n.stop()
          }
        }
      }, n, null, [[2, 8], [20, 27], [35, 51]])
    }))
    return function () {
      return n.apply(this, arguments)
    }
  }()
  var ce = function (n) {
    var /* [auto-meaningful-name] */n$target$files
    if (null === (n$target$files = n.target.files) || undefined === n$target$files ? undefined : n$target$files.item(0)) {
      var /* [auto-meaningful-name] */n$target = n.target
      var i = URL.createObjectURL(n.target.files.item(0))
      var a = new FileReader()
      a.onloadend = function () {
        for (var n = new Uint8Array(a.result).subarray(0, 4), r = "", s = 0; s < n.length; s++) {
          r += n[s].toString(16)
        }
        if (["8950", "ffd8", "424d"].find(function (e) {
          return 0 === r.indexOf(e)
        })) {
          v(i)
        } else {
          t(Src_editor_redux_common_actions.mj({
            showPrefixIcon: false,
            message: useIntl$formatMessage({
              id: "package.iconMimeTypeNotSupport"
            }),
            duration: 4e3
          }))
          n$target.value = ""
        }
      }
      a.onerror = function () {
        v(i)
      }
      a.readAsArrayBuffer(n.target.files.item(0))
    }
  }
  var le = function (n) {
    var /* [auto-meaningful-name] */n$target$files
    if (null === (n$target$files = n.target.files) || undefined === n$target$files ? undefined : n$target$files.item(0)) {
      var /* [auto-meaningful-name] */n$target = n.target
      var i = URL.createObjectURL(n.target.files.item(0))
      var a = new FileReader()
      a.onloadend = function () {
        for (var n = new Uint8Array(a.result).subarray(0, 4), r = "", s = 0; s < n.length; s++) {
          r += n[s].toString(16)
        }
        if (["8950", "ffd8", "424d"].find(function (e) {
          return 0 === r.indexOf(e)
        })) {
          C(i)
        } else {
          t(Src_editor_redux_common_actions.mj({
            showPrefixIcon: false,
            message: useIntl$formatMessage({
              id: "package.splashMimeTypeNotSupport"
            }),
            duration: 4e3
          }))
          n$target.value = ""
        }
      }
      a.onerror = function () {
        C(i)
      }
      a.readAsArrayBuffer(n.target.files.item(0))
    }
  }
  var ue = function () {
    var /* [auto-meaningful-name] */o$current
    if (!ie) {
      if (!(null === (o$current = o.current) || undefined === o$current)) {
        o$current.scrollBy({
          left: -108,
          behavior: "smooth"
        })
      }
      ae(true)
    }
  }
  var de = function () {
    var /* [auto-meaningful-name] */o$current
    if (ie) {
      if (!(null === (o$current = o.current) || undefined === o$current)) {
        o$current.scrollBy({
          left: 108,
          behavior: "smooth"
        })
      }
      ae(false)
    }
  }
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: i$packageDialogVisible,
    withPortal: true,
    className: Module_1991.packageEditorContainer,
    title: React.createElement("h3", null, useIntl$formatMessage({
      id: "package.packageProjectDialogTitle"
    })),
    footer: function () {
      var /* [auto-meaningful-name] */i$packageInfo$apkName
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Module_1991.plateFormTips
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-android-fill"
      }), useIntl$formatMessage({
        id: "package.plateFormTips"
      })), React.createElement("div", {
        className: Module_1991.footer
      }, React.createElement(Src_shared_ui_components_index.d, {
        type: "primary",
        disabled: (!(null === (i$packageInfo$apkName = i$packageInfo.apkName) || undefined === i$packageInfo$apkName ? undefined : i$packageInfo$apkName.trim()) || !g || !!D) && !i$isPackaging && !d,
        onClick: se
      }, d || i$isPackaging ? React.createElement(Ge, null) : React.createElement("span", null, useIntl$formatMessage({
        id: "package"
      })))))
    }(),
    onClose: function () {
      if (i$packageCompleteVisible) {
        t(Src_editor_redux_common_actions.Li(true))
      }
      t(Src_editor_redux_common_actions.Ii(false))
    }
  }, React.createElement("div", {
    className: Module_1991.packageContent
  }, React.createElement("div", {
    className: Module_1991.leftContent
  }, React.createElement("div", {
    className: Module_1991.packageProjectTitle
  }, React.createElement("div", {
    className: Module_1991.packageItemLabel
  }, useIntl$formatMessage({
    id: "package.projectTitle"
  })), React.createElement(Src_shared_ui_components_index.k, {
    type: "text",
    defaultValue: i$packageInfo.apkName,
    onBlur: function (e, n) {
      t(Src_editor_redux_common_actions.Ji({
        apkName: n.target.value
      }))
    },
    onChange: function (e) {
      var t
      var n = (null === (t = e.match(/[\u4e00-\u9fa5]/gi)) || undefined === t ? undefined : t.length) || 0
      R(40 - n)
      if (e.length > j) {
        M("package.apkNameMaxLengthTips")
      } else {
        M("")
      }
    },
    warning: !!D
  }), React.createElement("div", {
    className: Module_1991.warningTips
  }, D ? useIntl$formatMessage({
    id: D
  }) : "")), React.createElement("div", {
    className: Module_1991.packageItemLabel
  }, useIntl$formatMessage({
    id: "package.projectIcon"
  })), React.createElement("div", {
    className: Module_1991.packageIconBox,
    onMouseEnter: function () {
      if (!U) {
        F(true)
      }
    },
    onBlur: function () {
      F(false)
    },
    onMouseLeave: function () {
      F(false)
    }
  }, React.createElement("img", {
    className: Module_1991.packageIcon,
    src: g,
    alt: ""
  }), React.createElement(Module_1213.a, {
    content: React.createElement("div", {
      className: Module_1991.iconPopover
    }, React.createElement("div", null, useIntl$formatMessage({
      id: "package.recommendProjectIcon"
    })), React.createElement("div", {
      className: Module_1991.packageIconWrapper
    }, kt.map(function (e) {
      return React.createElement("img", {
        className: Classnames(Module_1991.packageIconItem, g === e && Module_1991.active),
        src: e,
        alt: "DEFAULT_ICON",
        key: e,
        onClick: function () {
          return v(e)
        }
      })
    })), React.createElement("input", {
      style: {
        display: "none"
      },
      ref: n,
      type: "file",
      alt: "upload image",
      accept: Module_133.d,
      onChange: ce
    }), React.createElement("div", {
      className: Module_1991.uploadIconBtn,
      onClick: function () {
        if (n.current) {
          n.current.click()
        }
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-upload-image"
    }), useIntl$formatMessage({
      id: "uploadFileByLocal"
    })), React.createElement("div", {
      className: Module_1991.iconSizeTips
    }, useIntl$formatMessage({
      id: "package.projectIconSizeTips"
    }))),
    placement: "rightTop",
    trigger: "click",
    visible: U,
    overlayClassName: Module_1991.imagePopover,
    onVisibleChange: function (e) {
      H(e)
      if (e) {
        F(false)
      }
    }
  }, React.createElement("div", {
    className: Classnames(Module_1991.cover, B && Module_1991.visible)
  }, React.createElement("div", {
    className: Module_1991.replaceBtn
  }, useIntl$formatMessage({
    id: "package.replace"
  })))))), React.createElement("div", {
    className: Module_1991.rightContent
  }, React.createElement("div", {
    className: Module_1991.packageItemLabel
  }, useIntl$formatMessage({
    id: "package.projectSplashImage"
  })), React.createElement("div", {
    className: Module_1991.splashImageBox,
    onMouseEnter: function () {
      if (!$) {
        X(true)
      }
    },
    onBlur: function () {
      X(false)
    },
    onMouseLeave: function () {
      X(false)
    }
  }, React.createElement("img", {
    className: Module_1991.splashImage,
    src: w,
    alt: ""
  }), !/splash\d+/.test(w) && React.createElement("img", {
    className: Module_1991.signImage,
    src: "https://static.bcmcdn.com/appcraft/package/logo-sign.png",
    alt: "coco"
  }), React.createElement(Module_1213.a, {
    content: React.createElement("div", {
      className: Module_1991.splashPopover
    }, React.createElement("div", {
      className: Module_1991.splashTitle
    }, React.createElement("span", null, useIntl$formatMessage({
      id: "package.recommendSplashImage"
    })), React.createElement("div", {
      className: Module_1991.pageBtnBox
    }, React.createElement("div", {
      onClick: ue,
      className: Classnames(Module_1991.pageBtn, Module_1991.prev, ie && Module_1991.disable)
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-arrow-down"
    })), React.createElement("div", {
      onClick: de,
      className: Classnames(Module_1991.pageBtn, Module_1991.next, !ie && Module_1991.disable)
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-arrow-down"
    })))), React.createElement("div", {
      className: Module_1991.packageSplashWrapper,
      ref: o
    }, xt.map(function (e) {
      return React.createElement("img", {
        className: Classnames(Module_1991.packageIconItem, w === e && Module_1991.active),
        src: e,
        alt: "DEFAULT_ICON",
        key: e,
        onClick: function () {
          return C(e)
        }
      })
    })), React.createElement("input", {
      style: {
        display: "none"
      },
      ref: r,
      type: "file",
      alt: "upload image",
      accept: Module_133.e,
      onChange: le
    }), React.createElement("div", {
      className: Module_1991.uploadIconBtn,
      onClick: function () {
        if (r.current) {
          r.current.click()
        }
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-upload-image"
    }), useIntl$formatMessage({
      id: "uploadFileByLocal"
    })), React.createElement("div", {
      className: Module_1991.iconSizeTips
    }, useIntl$formatMessage({
      id: "package.projectSplashSizeTips"
    }))),
    placement: "rightTop",
    trigger: "click",
    visible: $,
    overlayClassName: Module_1991.imagePopover,
    onVisibleChange: function (e) {
      ne(e)
      if (e) {
        X(false)
      }
    }
  }, React.createElement("div", {
    className: Classnames(Module_1991.cover, q && Module_1991.visible)
  }, React.createElement("div", {
    className: Module_1991.replaceBtn
  }, useIntl$formatMessage({
    id: "package.replace"
  }))))))))
})
export { Dt }
