/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-187
 */

"use strict"

import { fj, hj } from "./index__part-181"
import * as /* [auto-meaningful-name] */Module_431 from /* 431 */"./431/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_308 from /* 308 */"./308"
import /* [auto-meaningful-name] */Module_3081 from /* 308 */"./308"
var /* [auto-meaningful-name] */Module_431$a$AudioPlayer = Module_431.a.AudioPlayer
var Wj = {}
var Uj = {}
var Hj = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$md5 = e.md5
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$isPlaying = e.isPlaying
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var /* [auto-meaningful-name] */e$isAdded = e.isAdded
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var u = useState(0)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  function g(e) {
    e.stopPropagation()
    if (e$isPlaying) {
      if (Uj[t]) {
        Uj[t].stop()
      }
      return void _(false)
    }
    m(0)
    if (!Uj[t]) {
      Uj[t] = Module_431$a$AudioPlayer.load(t, e$cdnUrl || "", true)
    }
    Uj[t].play()
    Uj[t].on("play", function () {
      var e = 0
      Wj[t] = setInterval(function () {
        e++
        m(e)
      }, 1e3)
      _(true)
    })
    Uj[t].on("end", function () {
      return _(false)
    })
    Uj[t].on("loaderror", function () {
      _(false)
      Uj[t] = null
    })
  }
  function _(n) {
    e.setSoundPlayingId(n ? e.id : "")
    if (!n && Wj[t]) {
      clearInterval(Wj[t])
    }
  }
  useEffect(function () {
    return function () {
      if (e$isPlaying && Wj[t]) {
        if (Uj[t]) {
          Uj[t].stop()
        }
        if (Uj[t]) {
          Uj[t].off("play")
        }
        if (Uj[t]) {
          Uj[t].off("end")
        }
        if (Uj[t]) {
          Uj[t].off("loaderror")
        }
        clearInterval(Wj[t])
      }
    }
  }, [e$isPlaying, t])
  return React.createElement("li", {
    key: t,
    className: Classnames(Module_3081.soundMallItem, e$isSelect && Module_3081.selected),
    onClick: function (a) {
      if (!e$isAdded) {
        e.selectHandler({
          id: t,
          md5: e$md5,
          cdnUrl: e$cdnUrl,
          name: e$name,
          duration: e$duration,
          type: fj.Sound,
          selectFrom: hj.Mall
        }, a)
      }
    }
  }, React.createElement("div", {
    className: Module_3081.playArea
  }, e$isPlaying ? React.createElement("div", {
    className: Module_3081.soundPauseIconBox,
    onClick: g
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-sound-pause",
    className: Module_3081.soundPauseIcon
  }), React.createElement("div", {
    className: Classnames(Module_3081.progressWrapper, Module_3081.rightWrapper)
  }, React.createElement("div", {
    className: Classnames(Module_3081.circleProgress, Module_3081.rightCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  })), React.createElement("div", {
    className: Classnames(Module_3081.progressWrapper, Module_3081.leftWrapper)
  }, React.createElement("div", {
    className: Classnames(Module_3081.circleProgress, Module_3081.leftCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  }))) : React.createElement("div", {
    className: Module_3081.soundIconBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-music",
    className: Module_3081.soundDefaultIcon
  }), React.createElement("div", {
    className: Module_3081.soundPlayIconBox,
    onClick: g
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-sound-play",
    className: Module_3081.soundPlayIcon
  }))), React.createElement("div", {
    className: Module_3081.duration
  }, Src_shared_tools_index.w(e$isPlaying ? p : e$duration))), React.createElement("div", {
    className: Module_3081.infoArea
  }, React.createElement("div", {
    className: Module_3081.nameArea
  }, e$name), e$isAdded ? React.createElement("div", {
    className: Module_3081.add
  }, useIntl$formatMessage({
    id: "Resource.Added"
  })) : React.createElement("div", {
    className: Classnames(Module_3081.btn, Module_3081.unselect)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-style-selected"
  }))))
})
export { Hj }
