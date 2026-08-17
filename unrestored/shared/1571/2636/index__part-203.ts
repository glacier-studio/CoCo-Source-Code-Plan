/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-203
 */

"use strict"

import { we } from "./index__part-6"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_Iconfont_index from /* 94 */"../../../../src/shared/ui/components/Iconfont/index"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"./177"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useCallback, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_193 from /* 193 */"./193"
import /* [auto-meaningful-name] */Module_1931 from /* 193 */"./193"
var SL = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$item$data
  var n = useState(false)
  var r = Module_10.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement("div", {
    className: Module_1931.item
  }, React.createElement("div", {
    onClick: function () {
      i(!o)
    },
    className: Module_1931.date
  }, React.createElement("div", {
    className: Module_1931.text
  }, " ", e.item.date), React.createElement("div", {
    className: Classnames(Module_1931.icon, o && Module_1931.fold)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-dropdown-down"
  }))), !o && (e$item$data = e.item.data, React.createElement("ul", null, e$item$data.map(function (t) {
    return React.createElement("li", {
      className: Classnames(Module_1931.data, e.selectedId === t.id && Module_1931.selected),
      key: t.id
    }, React.createElement("div", {
      className: Module_1931.icon
    }, React.createElement("div", {
      className: Module_1931.dot_area
    }, React.createElement("div", {
      className: Module_1931.dot
    })), React.createElement("div", {
      className: Module_1931.line_area
    }, React.createElement("div", {
      className: Classnames(Module_1931.line, e.selectedId === t.id && Module_1931.selected)
    }))), React.createElement("div", {
      className: Module_1931.details
    }, React.createElement("div", {
      className: Classnames(Module_1931.time, e.selectedId === t.id && Module_1931.selected)
    }, t.time), React.createElement("div", {
      className: Module_1931.type
    }, t.saveInfo.saveType === Module_60.b.ByUser ? React.createElement(React.Fragment, null, React.createElement("img", {
      src: t.saveInfo.avatarUrl,
      className: Module_1931.avatar,
      alt: ""
    }), React.createElement("div", {
      className: Classnames(Module_1931.text, Module_1931.name)
    }, t.saveInfo.name), React.createElement("div", {
      className: Classnames(Module_1931.save_text, Module_1931.save_type)
    }, useIntl$formatMessage({
      id: "History.save"
    }))) : React.createElement("div", {
      className: Classnames(Module_1931.save_text, Module_1931.save_type)
    }, useIntl$formatMessage({
      id: "History.autoSave"
    })))), React.createElement("div", {
      className: Module_1931.button_area
    }, React.createElement(Module_748.a, {
      placement: "bottom",
      title: useIntl$formatMessage({
        id: "History.fallback"
      }),
      trigger: ["hover", "click"]
    }, React.createElement("div", {
      onClick: function () {
        n = t.id
        e.setSelected("")
        return void a(Src_editor_redux_common_actions.si(n))
        var n
      },
      className: Module_1931.button
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-btn-fallback",
      className: Module_1931.icon
    }))), React.createElement(Module_748.a, {
      placement: "bottom",
      title: useIntl$formatMessage({
        id: "History.overview"
      }),
      trigger: ["hover", "click"]
    }, React.createElement("div", {
      className: Classnames(Module_1931.button, t.id === e.selectedId && Module_1931.selected),
      onClick: function () {
        e.setSelected(t.id)
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-btn-overview",
      className: Module_1931.icon
    })))))
  }))))
})
var AL = React.memo(function () {
  var e = useState("")
  var t = Module_10.a(e, 2)
  var n = t[0]
  var r = t[1]
  var o = useSelector(function (e) {
    return e.common.historyDialogVisible
  })
  var i = useSelector(function (e) {
    return e.project.id
  })
  var a = useState([])
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState([])
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var b = useState(undefined)
  var y = Module_10.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = useState(false)
  var C = Module_10.a(w, 2)
  var T = C[0]
  var A = C[1]
  var j = function (e) {
    r(e)
  }
  var R = useCallback(function () {
    r("")
    g(Src_editor_redux_common_actions.tj(false))
  }, [g])
  var k = function (e) {
    return e < 10 ? "0".concat(e) : String(e)
  }
  var x = useCallback(function (e) {
    var t = new Date(e)
    return {
      date: "".concat(t.getFullYear(), "年").concat(t.getMonth() + 1, "月").concat(t.getDate(), "日"),
      time: "".concat(k(t.getHours()), ":").concat(k(t.getMinutes()), ":").concat(k(t.getSeconds()))
    }
  }, [])
  useEffect(function () {
    if (i !== E) {
      l([])
      m([])
      r("")
      O(i)
      R()
    }
  }, [i, E, R])
  useEffect(function () {
    A(false)
  }, [n])
  useEffect(function () {
    if (E && o) {
      if (E.includes(Module_60.v)) {
        l([])
        m([])
        return void r("")
      }
      Module_177.f(E).then(function (e) {
        if (0 === e.length) {
          l([])
          m([])
          return void r("")
        }
        l(e)
        var t = {}
        e.forEach(function (e) {
          var n = x(e.create_time)
          var /* [auto-meaningful-name] */n$date = n.date
          var /* [auto-meaningful-name] */n$time = n.time
          if (!t[n$date]) {
            t[n$date] = []
          }
          t[n$date].push({
            id: e.id,
            time: n$time,
            saveInfo: {
              name: e.nickname,
              avatarUrl: e.avatar_url,
              saveType: e.save_type
            }
          })
        })
        var n = Object.keys(t).map(function (e) {
          return {
            date: e,
            data: t[e]
          }
        })
        m(n)
      }).catch(function () {
        l([])
        m([])
        r("")
        g(Src_editor_redux_common_actions.mj({
          message: useIntl$formatMessage({
            id: "History.fetchError"
          }).toString(),
          type: "error"
        }))
      })
    }
  }, [o, E, x, g, useIntl$formatMessage])
  var D = function () {
    return React.createElement("div", {
      className: Classnames(Module_1931.historyBar, "" === n && Module_1931.fixedBar)
    }, React.createElement("div", {
      className: Module_1931.header
    }, useIntl$formatMessage({
      id: "History.historyVersion"
    }), React.createElement("div", {
      onClick: R
    }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
      className: Module_1931.icon,
      type: "icon-close"
    }))), React.createElement("div", {
      className: Module_1931.content
    }, 0 === p.length ? React.createElement("div", {
      className: Module_1931.empty
    }, React.createElement(we, {
      type: "image-text",
      text: useIntl$formatMessage({
        id: "History.noVersion"
      })
    })) : React.createElement("ul", null, p.map(function (e) {
      return React.createElement(SL, {
        key: e.date,
        item: e,
        selectedId: n,
        setSelected: j
      })
    }))))
  }
  return o ? "" !== n ? function () {
    var e = "?archiveId=".concat(n)
    var t = origin + "/editor" + e
    return React.createElement("div", {
      className: Module_1931.historyDialog
    }, React.createElement("div", {
      className: Module_1931.historyPreview
    }, React.createElement("div", {
      className: Module_1931.previewDialog
    }, T && React.createElement(React.Fragment, null, React.createElement("div", {
      className: Module_1931.previewHeader
    }, React.createElement("p", {
      className: Module_1931.projectName
    }, function () {
      var e
      return (null === (e = c.find(function (e) {
        return e.id === n
      })) || undefined === e ? undefined : e.work_name) || ""
    }()), React.createElement("p", {
      className: Module_1931.projectTime
    }, function () {
      var e
      var t = null === (e = c.find(function (e) {
        return e.id === n
      })) || undefined === e ? undefined : e.create_time
      if (!t) {
        return ""
      }
      var r = x(t)
      return "版本：".concat(r.date, " ").concat(r.time)
    }())), React.createElement("div", {
      onClick: function () {
        return r("")
      },
      className: Module_1931.close
    }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
      type: "icon-close",
      className: Module_1931.icon
    }))), React.createElement("div", {
      className: Module_1931.previewIframe
    }, React.createElement("iframe", {
      title: "previewAppCraft",
      height: "100%",
      width: "100%",
      allow: "geolocation, microphone, camera",
      src: t,
      onLoad: function () {
        return A(true)
      }
    })))), D())
  }() : D() : null
})
export { AL }
