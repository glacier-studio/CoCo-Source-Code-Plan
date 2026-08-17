/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-121
 */

"use strict"

var cE
import * as /* [auto-meaningful-name] */Module_135 from /* 135 */"./135"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_431 from /* 431 */"./431/index"
import * as /* [auto-meaningful-name] */Module_213 from /* 213 */"./213"
import /* [auto-meaningful-name] */Module_2131 from /* 213 */"./213"
var /* [auto-meaningful-name] */Module_431$a$AudioPlayer = Module_431.a.AudioPlayer
var YO = ""
var KO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fileId" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var a = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var s = useDispatch()
  var c = useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState(false)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = useState(undefined)
  var y = Module_10.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = useState(false)
  var C = Module_10.a(w, 2)
  var T = C[0]
  var A = C[1]
  var j = e$getValue(n)
  function R(e) {
    if (e && a) {
      s(Src_editor_redux_common_actions.wf(e, function (e) {
        s(Src_editor_redux_common_actions.ag(e[0], a))
        if (cE) {
          cE.stop()
        }
        d(false)
      }))
    }
  }
  function k() {
    s(Src_editor_redux_common_actions.wj(Module_68.c.SoundLibrary, function (e) {
      var t = e[0]
      e$onChange(n, t.id)
      s(Src_editor_redux_common_actions.sh())
      if (cE) {
        cE.stop()
      }
      d(false)
    }))
  }
  function x(e) {
    e.stopPropagation()
    if (E) {
      if (u) {
        if (cE) {
          cE.stop()
        }
        return void d(false)
      }
      if (!cE) {
        cE = Module_431$a$AudioPlayer.load(E.id, E.cdnUrl || E.source || "", true)
      }
      cE.play()
      cE.on("play", function () {
        return d(true)
      })
      cE.on("end", function () {
        return d(false)
      })
      cE.on("loaderror", function () {
        d(false)
        cE = null
      })
    }
  }
  useEffect(function () {
    return function () {
      if (cE) {
        cE.stop()
      }
      if (cE) {
        cE.off("play")
      }
      if (cE) {
        cE.off("end")
      }
      if (cE) {
        cE.off("loaderror")
      }
    }
  }, [])
  useEffect(function () {
    if (cE) {
      cE.stop()
    }
    d(false)
    var e = Module_9.wb(j)
    O(e)
    if (j !== YO) {
      cE = null
    }
    YO = j
  }, [j])
  var D = function (e) {
    A(e)
  }
  var M = function () {
    A(false)
  }
  var L = function () {
    return React.createElement(Module_1213.a, {
      content: React.createElement("div", {
        className: Module_2131.soundPopover,
        onClick: M
      }, React.createElement(Src_shared_ui_components_index.B, {
        className: Module_2131.content,
        onChange: R,
        accept: Module_135.h
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-upload"
      }), React.createElement("span", null, useIntl$formatMessage({
        id: "Resource.upload"
      }))), React.createElement("div", {
        className: Module_2131.content,
        onClick: k
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-open-resource-library"
      }), React.createElement("span", null, useIntl$formatMessage({
        id: "Resource.SoundLibrary"
      })))),
      placement: "bottomLeft",
      trigger: "click",
      visible: T,
      onVisibleChange: D
    }, React.createElement("div", {
      className: Module_2131.soundBtn
    }, useIntl$formatMessage({
      id: "Resource.Replace"
    })))
  }
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_2131.formItemWrapper, Module_2131.changeSoundFile)
  }, React.createElement("div", {
    className: Module_2131.title
  }, useIntl$formatMessage({
    id: "AudioWidget.source"
  })), React.createElement("div", {
    className: Module_2131.soundBox
  }, React.createElement("div", {
    tabIndex: -1,
    className: Classnames(Module_2131.soundInfo, (null === E || undefined === E ? undefined : E.id) && Module_2131.soundBgGround),
    onMouseEnter: function () {
      v(true)
    },
    onBlur: function () {
      v(false)
    },
    onMouseLeave: function () {
      if (!T) {
        v(false)
        A(false)
      }
    }
  }, (null === E || undefined === E ? undefined : E.id) ? React.createElement(React.Fragment, null, React.createElement(React.Fragment, null, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-sound",
    className: Module_2131.iconSound
  }), React.createElement("div", {
    className: Module_2131.soundName
  }, null === E || undefined === E ? undefined : E.name), React.createElement("div", {
    className: Module_2131.soundDuration
  }, Src_shared_tools_index.w(null === E || undefined === E ? undefined : E.duration))), React.createElement("div", {
    className: Classnames(Module_2131.playCover, (g || u) && Module_2131.visible)
  }, React.createElement("div", {
    className: Module_2131.soundDelate,
    onClick: function () {
      if (cE) {
        cE.stop()
      }
      d(false)
      e$onChange(n, "")
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-delete"
  })), React.createElement("div", {
    className: Module_2131.soundPlayBox,
    onClick: x
  }, u ? React.createElement("div", {
    className: Module_2131.soundPauseIconBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-sound-pause",
    className: Module_2131.soundDefaultIcon
  }), React.createElement("div", {
    className: Classnames(Module_2131.progressWrapper, Module_2131.rightWrapper)
  }, React.createElement("div", {
    className: Classnames(Module_2131.circleProgress, Module_2131.rightCircle),
    style: {
      animationDuration: "".concat(null === E || undefined === E ? undefined : E.duration, "s")
    }
  })), React.createElement("div", {
    className: Classnames(Module_2131.progressWrapper, Module_2131.leftWrapper)
  }, React.createElement("div", {
    className: Classnames(Module_2131.circleProgress, Module_2131.leftCircle),
    style: {
      animationDuration: "".concat(null === E || undefined === E ? undefined : E.duration, "s")
    }
  }))) : React.createElement("div", {
    className: Module_2131.soundIconBox
  }, React.createElement("div", {
    className: Module_2131.soundPlayIconBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-sound-play",
    className: Module_2131.soundPlayIcon
  })))), React.createElement("div", {
    className: Module_2131.soundName
  }, null === E || undefined === E ? undefined : E.name), L())) : React.createElement(React.Fragment, null, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-sound",
    className: Module_2131.iconDefaultSound
  }), React.createElement("div", {
    className: Classnames(Module_2131.cover, g && Module_2131.visible)
  }, L())))))
})
var qO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "audioVolume" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement("div", {
    className: Classnames(Module_2131.formItemWrapper, "changeAudioVolume")
  }, React.createElement("div", {
    className: "coco-form-item-label"
  }, useIntl$formatMessage({
    id: "AudioWidget.volume"
  })), React.createElement(Src_shared_ui_components_index.x, {
    className: Module_2131.volumeSlider,
    value: o,
    min: Module_135.g,
    max: Module_135.f,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    isShowRightInput: true
  }))
})
var XO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "audioRate" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement("div", {
    className: Classnames(Module_2131.formItemWrapper, "changeAudioVolume")
  }, React.createElement("div", {
    className: "coco-form-item-label"
  }, useIntl$formatMessage({
    id: "AudioWidget.rate"
  })), React.createElement(Src_shared_ui_components_index.x, {
    className: Module_2131.volumeSlider,
    value: o,
    min: Module_135.e,
    max: Module_135.d,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    isShowRightInput: true
  }))
})
export { KO }
export { qO }
export { XO }
