/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-214
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_77 from /* 77 */"./77"
import * as /* [auto-meaningful-name] */Module_149 from /* 149 */"./149"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"./133/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector, useDispatch, batch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_249 from /* 249 */"./249"
import /* [auto-meaningful-name] */Module_2491 from /* 249 */"./249"
var MP = memo(function (e) {
  var /* [auto-meaningful-name] */e$onUploadFileChange = e.onUploadFileChange
  var /* [auto-meaningful-name] */e$onResourceLibraryClick = e.onResourceLibraryClick
  var /* [auto-meaningful-name] */e$fileId = e.fileId
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = useState(false)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState("")
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  useEffect(function () {
    var e
    if (Src_shared_tools_index.U(e$fileId)) {
      e = e$fileId
    } else {
      var t = Module_9.hb(e$fileId)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
    }
    if (!e) {
      switch (e$type) {
        case Module_77.a.HANDLE:
          e = Module_149.c
          break
        case Module_77.a.BACKGROUND:
          e = Module_149.a
          break
        case Module_77.a.TRACK:
          e = Module_149.g
          break
        default:
          e = Module_149.a
      }
    }
    m(e)
  }, [e$fileId, e$type])
  var g = function () {
    l(false)
  }
  var _ = function (e) {
    e$onUploadFileChange(e, e$type)
  }
  var v = function () {
    e$onResourceLibraryClick(e$type)
  }
  return React.createElement("div", {
    className: Module_2491.imageItemBox
  }, React.createElement("img", {
    alt: e$fileId,
    src: p,
    className: e$type === Module_77.a.HANDLE ? Module_2491.handleImage : Module_2491.image
  }), React.createElement("div", {
    className: Module_2491.cover
  }, React.createElement(Module_1213.a, {
    content: React.createElement("div", {
      className: Module_2491.imagePopover,
      onClick: g
    }, React.createElement(Src_shared_ui_components_index.B, {
      className: Module_2491.content,
      onChange: _,
      accept: Module_133.f
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-upload"
    }), React.createElement("span", {
      className: Module_2491.contentTitle
    }, useIntl$formatMessage({
      id: "Resource.upload"
    }))), React.createElement("div", {
      className: Module_2491.content,
      onClick: v
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-open-resource-library"
    }), React.createElement("span", {
      className: Module_2491.contentTitle
    }, useIntl$formatMessage({
      id: "Resource.ImageLibrary"
    })))),
    placement: "bottomLeft",
    trigger: "click",
    visible: c,
    onVisibleChange: function (e) {
      l(e)
    }
  }, React.createElement("div", {
    className: Module_2491.replaceBtn
  }, useIntl$formatMessage({
    id: "Resource.Replace"
  })))))
})
var LP = memo(function () {
  var e = useSelector(function (e) {
    return e.common.sliderImageDialogInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$handleImageFileId = e.handleImageFileId
  var /* [auto-meaningful-name] */e$handleImageRatio = e.handleImageRatio
  var /* [auto-meaningful-name] */e$handleImageDirection = e.handleImageDirection
  var /* [auto-meaningful-name] */e$backgroundImageFileId = e.backgroundImageFileId
  var /* [auto-meaningful-name] */e$backgroundImageDirection = e.backgroundImageDirection
  var /* [auto-meaningful-name] */e$trackImageFileId = e.trackImageFileId
  var /* [auto-meaningful-name] */e$trackImageDirection = e.trackImageDirection
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var p = useDispatch()
  var m = useState("")
  var g = Module_10.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useState(e$handleImageRatio)
  var E = Module_10.a(y, 2)
  var O = E[0]
  var w = E[1]
  var C = useState(e$handleImageDirection)
  var T = Module_10.a(C, 2)
  var A = T[0]
  var j = T[1]
  var R = useState("")
  var k = Module_10.a(R, 2)
  var x = k[0]
  var D = k[1]
  var M = useState(e$backgroundImageDirection)
  var L = Module_10.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = useState("")
  var G = Module_10.a(F, 2)
  var W = G[0]
  var U = G[1]
  var H = useState(e$trackImageDirection)
  var V = Module_10.a(H, 2)
  var K = V[0]
  var q = V[1]
  var X = useState(true)
  var Q = Module_10.a(X, 2)
  var Z = Q[0]
  var J = Q[1]
  var $ = useState("")
  var ee = Module_10.a($, 2)
  var ne = ee[0]
  var re = ee[1]
  var oe = useState("")
  var ie = Module_10.a(oe, 2)
  var ae = ie[0]
  var se = ie[1]
  var ce = useState("")
  var le = Module_10.a(ce, 2)
  var ue = le[0]
  var de = le[1]
  var pe = useState("")
  var fe = Module_10.a(pe, 2)
  var he = fe[0]
  var me = fe[1]
  var ge = useState("")
  var _e = Module_10.a(ge, 2)
  var ve = _e[0]
  var be = _e[1]
  useEffect(function () {
    var e
    if (Src_shared_tools_index.U(v)) {
      e = v
    } else {
      var t = Module_9.hb(v)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
    }
    de(e || Module_149.c)
  }, [v])
  useEffect(function () {
    var e
    if (Src_shared_tools_index.U(x)) {
      e = x
    } else {
      var t = Module_9.hb(x)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl) || Module_149.a
    }
    me(e)
    Src_shared_tools_index.gb(e, e$backgroundImageDirection === Module_77.b.HORIZONTAL ? -90 : 90).then(function (e) {
      return se(e)
    }).catch(function () {
      return se("")
    })
  }, [x, e$backgroundImageDirection])
  useEffect(function () {
    var e
    if (Src_shared_tools_index.U(W)) {
      e = W
    } else {
      var t = Module_9.hb(W)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl) || Module_149.g
    }
    be(e)
    Src_shared_tools_index.gb(e, K === Module_77.b.HORIZONTAL ? -90 : 90).then(function (e) {
      return re(e)
    }).catch(function () {
      return re("")
    })
  }, [K, W])
  useEffect(function () {
    if (e$visible) {
      w(e$handleImageRatio)
      B(e$backgroundImageDirection)
      q(e$trackImageDirection)
    }
  }, [e$backgroundImageDirection, e$handleImageRatio, e$trackImageDirection, e$visible])
  useEffect(function () {
    if (e$direction === Module_77.b.HORIZONTAL) {
      J(true)
    } else {
      J(false)
    }
  }, [e$direction])
  useEffect(function () {
    if (e$visible) {
      b(e$handleImageFileId)
      U(e$trackImageFileId)
      D(e$backgroundImageFileId)
    }
  }, [e$backgroundImageFileId, e$handleImageFileId, e$trackImageFileId, e$visible])
  var ye = function (e, t) {
    switch (t) {
      case Module_77.a.BACKGROUND:
        D(e.id)
        B(e$direction)
        break
      case Module_77.a.TRACK:
        U(e.id)
        q(e$direction)
        break
      case Module_77.a.HANDLE:
        b(e.id)
        j(e$direction)
    }
  }
  var Ee = function (e, t) {
    if (e) {
      p(Src_editor_redux_common_actions.Zf(e, function (e) {
        ye(e[0], t)
      }))
    }
  }
  var Oe = function (e) {
    p(Src_editor_redux_common_actions.wj(Module_68.c.ImageLibrary, function (t) {
      var n = t[0]
      ye(n, e)
      p(Src_editor_redux_common_actions.sh())
    }))
  }
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: e$visible,
    className: Module_2491.sliderImageDialog,
    title: useIntl$formatMessage({
      id: "slider.custom"
    }),
    onClose: function () {
      p(Src_editor_redux_common_actions.Gj({
        visible: false
      }))
    },
    footer: React.createElement(Src_shared_ui_components_index.d, {
      type: "primary",
      onClick: function () {
        batch(function () {
          p(Src_editor_redux_common_actions.Lg(e$widgetId, "handleImageFileId", v))
          p(Src_editor_redux_common_actions.Lg(e$widgetId, "handleImageRatio", O))
          p(Src_editor_redux_common_actions.Lg(e$widgetId, "handleImageDirection", A))
          p(Src_editor_redux_common_actions.Lg(e$widgetId, "backgroundImageFileId", x))
          p(Src_editor_redux_common_actions.Lg(e$widgetId, "backgroundImageDirection", P))
          p(Src_editor_redux_common_actions.Lg(e$widgetId, "trackImageFileId", W))
          p(Src_editor_redux_common_actions.Lg(e$widgetId, "trackImageDirection", K))
          p(Src_editor_redux_common_actions.Gj({
            visible: false
          }))
        })
      }
    }, useIntl$formatMessage({
      id: "confirm"
    }))
  }, React.createElement("div", {
    className: Module_2491.sliderImage
  }, React.createElement("div", {
    className: Module_2491.sliderPreview
  }, React.createElement("span", {
    className: Module_2491.title
  }, useIntl$formatMessage({
    id: "slider.preview"
  })), React.createElement("div", {
    className: Module_2491.previewBox
  }, React.createElement("div", {
    className: Module_2491.backgroundImage,
    style: {
      width: Z ? 176 : 20,
      height: Z ? 20 : 176,
      backgroundImage: "url(".concat(P === e$direction ? he : ae, ")")
    }
  }, React.createElement("div", {
    className: Module_2491.trackImageBox,
    style: {
      width: Z ? 88 : 20,
      height: Z ? 20 : 88
    }
  }, React.createElement("div", {
    className: Module_2491.trackImage,
    style: {
      width: Z ? 176 : 20,
      height: Z ? 20 : 176,
      backgroundImage: "url(".concat(K === e$direction ? ve : ne, ")")
    }
  }))), React.createElement("div", {
    className: Classnames(Module_2491.handleImage, A !== e$direction && Module_2491.vertical),
    style: {
      width: 20 * O,
      height: 20 * O,
      backgroundImage: "url(".concat(ue, ")")
    }
  }))), React.createElement("div", {
    className: Module_2491.imageInfo
  }, React.createElement("span", {
    className: Module_2491.title
  }, useIntl$formatMessage({
    id: "slider.replaceImage"
  })), React.createElement("div", {
    className: Module_2491.imageList
  }, React.createElement("div", {
    className: Module_2491.imageItem
  }, React.createElement(MP, {
    onUploadFileChange: Ee,
    onResourceLibraryClick: Oe,
    fileId: x,
    type: Module_77.a.BACKGROUND
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "slider.backgroundImage"
  }))), React.createElement("div", {
    className: Module_2491.imageItem
  }, React.createElement(MP, {
    onUploadFileChange: Ee,
    onResourceLibraryClick: Oe,
    fileId: W,
    type: Module_77.a.TRACK
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "slider.trackImage"
  }))), React.createElement("div", {
    className: Module_2491.imageItem
  }, React.createElement(MP, {
    onUploadFileChange: Ee,
    onResourceLibraryClick: Oe,
    fileId: v,
    type: Module_77.a.HANDLE
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "slider.handleImage"
  })))), React.createElement("span", {
    className: Module_2491.title
  }, useIntl$formatMessage({
    id: "slider.handleSize"
  })), React.createElement("div", {
    className: Module_2491.handleSize
  }, React.createElement(Src_shared_ui_components_index.x, {
    value: Math.round(100 * O),
    min: 10,
    max: 300,
    onChange: function (e) {
      w(e / 100)
    },
    isShowRightInput: true,
    inputAfter: "%"
  }), React.createElement("div", {
    className: Module_2491.sizeLabel
  }, React.createElement("span", null, useIntl$formatMessage({
    id: "smallSize"
  })), React.createElement("span", null, useIntl$formatMessage({
    id: "largeSize"
  })))))))
})
export { LP }
