/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-16
 */

"use strict"

var Tt
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"./141/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1036 from /* 1036 */"./1036/index"
import /* [auto-meaningful-name] */Module_10361 from /* 1036 */"./1036/index"
import * as /* [auto-meaningful-name] */Module_1508 from /* 1508 */"./1508/index"
import * as /* [auto-meaningful-name] */Module_356 from /* 356 */"./356"
import /* [auto-meaningful-name] */Module_3561 from /* 356 */"./356"
var Gt = memo(function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useState(false)
  var r = Module_10.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = useState("")
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState(false)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useSelector(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */g$isPackaging = g.isPackaging
  var /* [auto-meaningful-name] */g$packageQrCodeVisible = g.packageQrCodeVisible
  var /* [auto-meaningful-name] */g$packageUrl = g.packageUrl
  var /* [auto-meaningful-name] */g$packageInfo = g.packageInfo
  var /* [auto-meaningful-name] */g$packageInfo$startTimeTamp = g$packageInfo.startTimeTamp
  var /* [auto-meaningful-name] */g$packageInfo$expireTime = g$packageInfo.expireTime
  var A = useSelector(function (e) {
    return e.project.id
  })
  var j = useSelector(function (e) {
    return e.common.userInfo
  })
  useEffect(function () {
    if (g$packageUrl && g$packageInfo) {
      var e = Src_shared_tools_index.B()
      var t = "".concat(e, "/download/?url=").concat(encodeURIComponent(g$packageUrl || ""), "&icon=").concat(encodeURIComponent(g$packageInfo.apkIcon || ""), "&name=").concat(g$packageInfo.apkName || "", "&projectId=").concat(A, "&version=").concat(g$packageInfo.version, "&expireTime=").concat(g$packageInfo.expireTime, "&startTimeTamp=").concat(g$packageInfo.startTimeTamp)
      l(t)
      m(false)
    }
  }, [g$packageUrl, g$packageInfo, A])
  useEffect(function () {
    if (Tt) {
      clearInterval(Tt)
    }
    if ("number" === typeof g$packageInfo$expireTime && "number" === typeof g$packageInfo$startTimeTamp) {
      Tt = setInterval(function () {
        if (Date.now() - g$packageInfo$startTimeTamp > 1e3 * g$packageInfo$expireTime) {
          m(true)
          if (Tt) {
            clearInterval(Tt)
          }
        }
      }, 2e3)
    }
  }, [g$packageInfo$startTimeTamp, g$packageInfo$expireTime])
  var R = function () {
    if (Tt) {
      clearInterval(Tt)
    }
    e(Src_editor_redux_common_actions.Mi(false))
    e(Src_editor_redux_common_actions.Li(true))
  }
  var k = function () {
    var n = Module_7.a(RegeneratorRuntime.mark(function n() {
      return RegeneratorRuntime.wrap(function (n) {
        for (;;) {
          switch (n.prev = n.next) {
            case 0:
              if (j) {
                n.next = 3
                break
              }
              e(Src_editor_redux_common_actions.Ch())
              return n.abrupt("return")
            case 3:
              if (!g$isPackaging) {
                n.next = 6
                break
              }
              e(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "package.packagePending"
                }),
                type: "success"
              }))
              return n.abrupt("return")
            case 6:
              n.prev = 6
              n.next = 9
              return Src_editor_redux_common_actions.Nf(e, Src_editor_redux_common_actions.Vf())
            case 9:
              R()
              n.next = 14
              break
            case 12:
              n.prev = 12
              n.t0 = n.catch(6)
            case 14:
            case "end":
              return n.stop()
          }
        }
      }, n, null, [[6, 12]])
    }))
    return function () {
      return n.apply(this, arguments)
    }
  }()
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: g$packageQrCodeVisible,
    className: Module_3561.packageQrCodeDialog,
    withPortal: true,
    onClose: R
  }, React.createElement("div", {
    className: Module_3561.packageInfo
  }, React.createElement("img", {
    src: g$packageInfo.apkIcon,
    className: Module_3561.packageIcon,
    alt: ""
  }), React.createElement("div", null, React.createElement("div", {
    className: Module_3561.packageTitle
  }, g$packageInfo.apkName), React.createElement(Module_1508.CopyToClipboard, {
    text: "com.codemao.coco.apk_".concat(A),
    onCopy: function () {
      e(Src_editor_redux_common_actions.mj({
        message: useIntl$formatMessage({
          id: "package.appidCopied"
        }),
        showPrefixIcon: false
      }))
    }
  }, React.createElement("div", {
    className: Classnames(Module_3561.packageInfoItem, Module_3561.packageAppId)
  }, "APP ID：com.codemao.coco.apk_", A, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-copy",
    className: Module_3561.copyIcon
  }))), React.createElement("div", {
    className: Module_3561.packageInfoItem
  }, "Version Code：", g$packageInfo.version))), React.createElement("div", {
    className: Module_3561.qrCodeWrapper
  }, g$packageUrl && React.createElement("div", {
    className: Module_3561.qrcode
  }, React.createElement(Module_10361, {
    value: c,
    size: 200,
    imageSettings: {
      width: 54,
      height: 54,
      src: "https://static.bcmcdn.com/coco/image/share-dialog/qrlogo.png"
    }
  }), p && React.createElement("div", {
    className: Module_3561.mask,
    onClick: k
  }, "二维码已过期", React.createElement("br", null), "若需扫码，请重新打包")), React.createElement("p", {
    className: Module_3561.apkText
  }, " ", useIntl$formatMessage({
    id: "package.apkText"
  })), g$packageInfo.expireTime && React.createElement("p", {
    className: Module_3561.apkText
  }, "（二维码仅", Math.round(g$packageInfo.expireTime / 60), "分钟内有效）")), React.createElement("div", {
    className: Module_3561.footerWrapper
  }, React.createElement("div", {
    className: Module_3561.footerBtn,
    onClick: function () {
      if (g$packageUrl) {
        document.body.querySelectorAll(".".concat(Module_3561.iframeDownloader)).forEach(function (e) {
          return e.remove()
        })
        var e = document.createElement("iframe")
        e.src = g$packageUrl
        e.classList.add(Module_3561.iframeDownloader)
        document.body.appendChild(e)
        i(true)
        Download = "download"
        Module_141.a("InstallShareApk", {
          workId: A,
          apkName: g$packageInfo.apkName || "",
          isScanCode: false,
          isCopyApkLink: "copyLink" === Download,
          isDownloadPackage: "download" === Download
        })
      }
      var /* [auto-meaningful-name] */Download
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-package-download",
    className: Module_3561.qrBtn
  }), React.createElement("p", null, useIntl$formatMessage(o ? {
    id: "package.downloaded"
  } : {
    id: "package.download"
  })))))
})
export { Gt }
