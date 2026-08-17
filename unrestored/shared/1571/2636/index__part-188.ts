/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-188
 */

"use strict"

import { fj, hj } from "./index__part-181"
import { Rj } from "./index__part-184"
var jj
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_528 from /* 528 */"./528"
import /* [auto-meaningful-name] */Module_5281 from /* 528 */"./528"
var Yj = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$md5 = e.md5
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var /* [auto-meaningful-name] */e$isAdded = e.isAdded
  var /* [auto-meaningful-name] */e$frameMap = e.frameMap
  var /* [auto-meaningful-name] */e$urls = e.urls
  var /* [auto-meaningful-name] */e$canShowMultiply = e.canShowMultiply
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var d = useState(false)
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  var _ = e$urls && e$urls.length > 1
  var v = useRef(null)
  var b = e$cdnUrl
  if (e$frameMap && e$frameMap[e$cdnUrl]) {
    b = e$frameMap[e$cdnUrl].frames[0]
  }
  var y = useState(b)
  var E = Module_10.a(y, 2)
  var O = E[0]
  var w = E[1]
  var C = function (o, i) {
    e.selectHandler({
      id: t,
      md5: e$md5,
      cdnUrl: i,
      name: e$name,
      urls: e$urls,
      type: fj.Image,
      selectFrom: hj.Mall
    }, o)
  }
  var T = function () {
    if (e$urls) {
      var e = document.getElementById(t)
      if (e) {
        var n = 0 === e$urls.findIndex(function (e) {
          return e === O
        }) ? 1 : 0
        jj = setInterval(function () {
          e.setAttribute("src", "".concat(e$urls[n % e$urls.length], "?imageMogr2/thumbnail/!200x200r/blur/1x0/quality/100|imageslim"))
          n++
        }, 200)
      }
    }
  }
  var A = function () {
    if (e$urls) {
      var e = document.getElementById(t)
      if (e) {
        clearInterval(jj)
        e.setAttribute("src", O)
      }
    }
  }
  var j = Src_shared_tools_index.I(e$cdnUrl)
  return React.createElement(Rj, {
    getTooltipContainer: function (e) {
      return (null === v || undefined === v ? undefined : v.current) ? null === v || undefined === v ? undefined : v.current : e
    },
    visible: m,
    urls: e$urls,
    onVisibleChange: function (e) {
      if (!(!_ || e$isAdded || e$canShowMultiply)) {
        g(e)
      }
    },
    handleGroupItemClick: function (e, t) {
      if (!e$isAdded) {
        w(t)
        C(e, t)
      }
    },
    isGroupItemSelected: function (e) {
      return e$isSelect && e === O
    }
  }, React.createElement("li", {
    ref: v,
    onClick: function (e) {
      if (!(e$isAdded || _ && !e$canShowMultiply)) {
        C(e, e$cdnUrl)
      }
    },
    key: t,
    className: Classnames(Module_5281.imageMallItem, e$isSelect && Module_5281.selected)
  }, React.createElement("div", {
    className: Module_5281.playArea,
    onMouseOver: function () {
      if (_) {
        T()
      } else {
        w(e$cdnUrl)
      }
    },
    onMouseOut: function () {
      if (_) {
        A()
      } else {
        w(b)
      }
    }
  }, React.createElement("img", {
    id: t,
    alt: e$name,
    src: "".concat(O, "?imageMogr2/thumbnail/!200x200r/blur/1x0/quality/100|imageslim")
  })), React.createElement("div", {
    className: Module_5281.infoArea
  }, React.createElement("div", {
    className: Module_5281.nameArea
  }, e$name), _ && React.createElement("div", {
    className: Module_5281.groupIcon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-group"
  })), e$isAdded ? React.createElement("div", {
    className: Module_5281.add
  }, useIntl$formatMessage({
    id: "Resource.Added"
  })) : React.createElement("div", {
    className: Classnames(Module_5281.btn, Module_5281.unselect)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-style-selected"
  })), React.createElement("div", {
    className: Module_5281.materialTypeIcon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-material-".concat(j.substr(1))
  })))))
})
export { Yj }
