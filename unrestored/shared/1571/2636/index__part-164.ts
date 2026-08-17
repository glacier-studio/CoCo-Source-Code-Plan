/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-164
 */

"use strict"

import { fA } from "./index__part-163"
import * as /* [auto-meaningful-name] */Module_431 from /* 431 */"./431/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"./190"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_341 from /* 341 */"./341"
import /* [auto-meaningful-name] */Module_3411 from /* 341 */"./341"
var /* [auto-meaningful-name] */Module_431$a$AudioPlayer = Module_431.a.AudioPlayer
var bA = {}
var yA = {}
var EA = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$source = e.source
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$isPlaying = e.isPlaying
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = useDispatch()
  var l = useState(0)
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  function m(e) {
    c(Src_editor_redux_common_actions.og(e))
  }
  function g(n) {
    e.setSoundPlayingId(n ? e.id : "")
    if (!n && bA[t]) {
      clearInterval(bA[t])
    }
  }
  function v(e) {
    var t = Src_shared_tools_index.I(e)
    return [e.slice(0, e.lastIndexOf(t)), t]
  }
  useEffect(function () {
    return function () {
      if (e$isPlaying && bA[t]) {
        if (yA[t]) {
          yA[t].stop()
        }
        if (yA[t]) {
          yA[t].off("play")
        }
        if (yA[t]) {
          yA[t].off("end")
        }
        if (yA[t]) {
          yA[t].off("loaderror")
        }
        clearInterval(bA[t])
      }
    }
  }, [e$isPlaying, t])
  return React.createElement("li", {
    key: t,
    className: Module_3411.SoundLayoutItem
  }, React.createElement("div", {
    className: Module_3411.soundBoxWrapper
  }, React.createElement("div", {
    className: Module_3411.delete,
    onClick: function (e) {
      var t = Module_9.ub("SOUND_FILE_ID", e)
      if (t.length > 0 || Module_9.Yb(e)) {
        c(Src_editor_redux_common_actions.zh({
          isDangerous: true,
          onConfirm: m.bind(null, e),
          allowText: useIntl$formatMessage({
            id: "delete"
          }),
          title: useIntl$formatMessage({
            id: "deleteSoundFileTitle"
          }, {
            name: Module_190.f(e$name || "", 10)
          }),
          content: useIntl$formatMessage({
            id: "deleteSoundFileTips"
          }, {
            name: t.join("、")
          })
        }))
      } else {
        m(e)
      }
    }.bind(null, t)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-delete"
  })), React.createElement("div", {
    className: Module_3411.soundBox,
    onClick: function (e) {
      e.stopPropagation()
      if (e$isPlaying) {
        if (yA[t]) {
          yA[t].stop()
        }
        return void g(false)
      }
      p(0)
      if (!yA[t]) {
        yA[t] = Module_431$a$AudioPlayer.load(t, e$cdnUrl || e$source || "", true)
      }
      yA[t].play()
      yA[t].on("play", function () {
        var e = 0
        bA[t] = setInterval(function () {
          e++
          p(e)
        }, 1e3)
        g(true)
      })
      yA[t].on("end", function () {
        return g(false)
      })
      yA[t].on("loaderror", function () {
        g(false)
        yA[t] = null
      })
    }
  }, React.createElement("audio", {
    src: e$cdnUrl || e$source,
    preload: "none"
  }), e$isPlaying ? React.createElement("div", {
    className: Module_3411.soundPauseIconBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-sound-pause",
    className: Module_3411.soundDefaultIcon
  }), React.createElement("div", {
    className: Classnames(Module_3411.progressWrapper, Module_3411.rightWrapper)
  }, React.createElement("div", {
    className: Classnames(Module_3411.circleProgress, Module_3411.rightCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  })), React.createElement("div", {
    className: Classnames(Module_3411.progressWrapper, Module_3411.leftWrapper)
  }, React.createElement("div", {
    className: Classnames(Module_3411.circleProgress, Module_3411.leftCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  }))) : React.createElement("div", {
    className: Module_3411.soundIconBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-music",
    className: Module_3411.soundDefaultIcon
  }), React.createElement("div", {
    className: Module_3411.soundPlayIconBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-sound-play",
    className: Module_3411.soundPlayIcon
  })))), React.createElement("div", {
    className: Module_3411.soundDuration
  }, Src_shared_tools_index.w(e$isPlaying ? d : e$duration))), React.createElement("div", {
    className: Module_3411.fileItemName
  }, React.createElement(fA, {
    suffix: v(e$name)[1],
    isTrimmed: true,
    defaultValue: v(e$name)[0],
    onBlur: function (e, n, r, o) {
      if (r) {
        if (r === e || function (e) {
          return Module_9.xb().some(function (t) {
            return t.name === e
          })
        }(r + n)) {
          o.target.value = e
          if (r !== e) {
            c(Src_editor_redux_common_actions.mj({
              message: useIntl$formatMessage({
                id: "renameFileNameRepeatTips"
              })
            }))
          }
        } else {
          if (yA[t]) {
            yA[t].stop()
          }
          g(false)
          c(Src_editor_redux_common_actions.qg(t, e + n, r + n))
        }
      } else {
        o.target.value = e
      }
    }.bind(null, v(e$name)[0], v(e$name)[1])
  })))
})
export { EA }
