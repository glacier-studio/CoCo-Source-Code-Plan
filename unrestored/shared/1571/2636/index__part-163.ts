/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-163
 */

"use strict"

import { dA } from "./index__part-162"
import /* [auto-meaningful-name] */Module_355 from /* 355 */"./355"
var sA
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"./64/index"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"./47"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"./133/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"./190"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_294 from /* 294 */"../../../../src/shared/ui/components/Input/index"
import /* 2612 */"./2612"
var fA = memo(function (e) {
  var t = useState(false)
  var n = Module_10.a(t, 2)
  var r = n[0]
  var o = n[1]
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$editableMode = e.editableMode
  var s = undefined === e$editableMode ? "click" : e$editableMode
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$onBlur = e.onBlur
  var /* [auto-meaningful-name] */e$suffix = e.suffix
  var d = useRef(null)
  useEffect(function () {
    if (r) {
      var /* [auto-meaningful-name] */d$current = d.current
      if (!(null === d$current || undefined === d$current)) {
        d$current.focus()
      }
      if (!(null === d$current || undefined === d$current)) {
        d$current.select()
      }
    }
  }, [r])
  return React.createElement("div", {
    className: "coco-advanced-input"
  }, React.createElement("div", {
    onClick: function () {
      if ("click" === s) {
        o(true)
      }
    },
    onDoubleClick: function () {
      if ("double" === s) {
        o(true)
      }
    },
    className: Classnames(r && "coco-advanced-input-hide", "coco-advanced-input-disabled")
  }, e$value || e$defaultValue, e$suffix && e$suffix), React.createElement(Module_294.a, Object.assign({
    className: Classnames(!r && "coco-advanced-input-hide", "coco-advanced-input-able")
  }, e, {
    ref: d,
    onBlur: function (e, t) {
      o(false)
      if (e$onBlur) {
        e$onBlur(e, t)
      }
    }
  })))
})
var hA = function (e) {
  var /* [auto-meaningful-name] */e$item = e.item
  var /* [auto-meaningful-name] */e$handleDelete = e.handleDelete
  var /* [auto-meaningful-name] */e$handleBlur = e.handleBlur
  var /* [auto-meaningful-name] */e$item$cdnUrl = e$item.cdnUrl
  var /* [auto-meaningful-name] */e$item$urls = e$item.urls
  var /* [auto-meaningful-name] */e$item$id = e$item.id
  var s = useState(e$item$urls && e$item$urls.length > 1 ? e$item$urls[0] : e$item$cdnUrl)
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = e$item$urls && e$item$urls.length > 1
  var p = "library" + e$item$id
  function m(e) {
    var t = Src_shared_tools_index.I(e)
    return [e.slice(0, e.lastIndexOf(t)), t]
  }
  return React.createElement("li", null, React.createElement("div", {
    className: Module_355.imageBoxWrapper
  }, React.createElement("div", {
    className: Module_355.delete,
    onClick: e$handleDelete.bind(null, e$item.id)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-delete"
  })), e$item.urls && e$item.urls.length > 1 && React.createElement("div", {
    className: Module_355.groupIcon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-group"
  })), React.createElement("div", {
    className: Module_355.imageBox,
    onMouseOver: function () {
      if (d) {
        (function () {
          if (e$item$urls && d) {
            var e = document.getElementById(p)
            if (e) {
              var t = 0 === e$item$urls.findIndex(function (e) {
                return e === l
              }) ? 1 : 0
              sA = setInterval(function () {
                var n = e$item$urls[t % e$item$urls.length]
                e.setAttribute("src", "".concat(n).concat(Src_shared_tools_index.X(n) ? "?imageMogr2/thumbnail/!200x200r/blur/1x0/quality/100|imageslim" : "", " "))
                t++
              }, 200)
            }
          }
        })()
      } else {
        u(e$item$cdnUrl)
      }
    },
    onMouseOut: function () {
      if (d) {
        (function () {
          if (e$item$urls && d) {
            var e = document.getElementById(p)
            if (e) {
              clearInterval(sA)
              e.setAttribute("src", l)
            }
          }
        })()
      } else {
        u(e$item$cdnUrl)
      }
    }
  }, React.createElement("img", {
    id: p,
    src: l || e$item.source,
    alt: e$item$id
  }))), React.createElement("div", {
    className: Module_355.fileItemName
  }, React.createElement(fA, {
    suffix: m(e$item.id)[1],
    isTrimmed: true,
    defaultValue: m(e$item.id)[0],
    onBlur: e$handleBlur.bind(null, m(e$item.id)[0], m(e$item.id)[1])
  })))
}
var mA = function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useDispatch()
  var r = Module_25.a(Module_9.jb()).reverse()
  function o(e) {
    n(Src_editor_redux_common_actions.Jf(e.id))
    var t
    var r = Module_9.K(e.id)
    var o = []
    var i = Module_47.a(r)
    try {
      var a = function () {
        var /* [auto-meaningful-name] */t$value = t.value
        var i = Module_25.a(t$value.attributes.actionList)
        i.forEach(function (t) {
          return t.styleList.forEach(function (n, i) {
            if (n.source === e.id) {
              t.styleList[i] = {
                id: Module_64.a("STYLE"),
                source: ""
              }
              if (t$value.attributes.selectedStyleId === n.id) {
                o.push([t$value.id, t.styleList[i].id])
              }
            }
          })
        })
        n(Src_editor_redux_common_actions.Lg(t$value.id, "actionList", i))
      }
      for (i.s(); !(t = i.n()).done;) {
        a()
      }
    } catch (s) {
      i.e(s)
    } finally {
      i.f()
    }
    setTimeout(function () {
      var e
      var t = Module_47.a(o)
      try {
        for (t.s(); !(e = t.n()).done;) {
          var r = Module_10.a(e.value, 2)
          var i = r[0]
          var a = r[1]
          n(Src_editor_redux_common_actions.Lg(i, "selectedStyleId", a))
        }
      } catch (s) {
        t.e(s)
      } finally {
        t.f()
      }
    }, 100)
  }
  function i(e) {
    var r
    var i
    var a
    var s = Module_9.hb(e)
    var c = (null === (r = s) || undefined === r ? undefined : r.urls) && s.urls.length > 1
    if (s) {
      var l = [s]
      if (c) {
        l.push.apply(l, Module_25.a(Module_9.Ab(s.id)))
        var u = Module_9.vb(s)
        if (u) {
          s = u
        }
      }
      var d = Module_9.ub("IMAGE_FILE_ID", s.id).length > 0 || Module_9.Ib(s.id) || Module_9.Lb(s.id)
      var p = useIntl$formatMessage({
        id: c ? "deleteImageGroupFileTitle" : "deleteImageFileTitle"
      }, {
        name: Module_190.f((c ? null === (i = s) || undefined === i ? undefined : i.groupId : null === (a = s) || undefined === a ? undefined : a.id) || "", 10)
      })
      var f = useIntl$formatMessage({
        id: c ? "deleteImageGroupFileTips" : "deleteImageFileTips"
      })
      var h = function () {
        if (c) {
          l.forEach(function (e) {
            o(e)
          })
        } else {
          if (s) {
            o(s)
          }
        }
      }
      if (d) {
        n(Src_editor_redux_common_actions.zh({
          isDangerous: true,
          onConfirm: h,
          allowText: useIntl$formatMessage({
            id: "delete"
          }),
          title: p,
          content: f
        }))
      } else {
        h()
      }
    }
  }
  function a(e, r, o, i) {
    if (o) {
      if (o === e || Module_9.Jb(o + r)) {
        i.target.value = e
        if (o !== e) {
          n(Src_editor_redux_common_actions.mj({
            message: useIntl$formatMessage({
              id: "renameFileNameRepeatTips"
            }),
            duration: 2e3
          }))
        }
      } else {
        n(Src_editor_redux_common_actions.zf(o + r, e + r))
      }
    } else {
      i.target.value = e
    }
  }
  return React.createElement("div", {
    className: Module_355.imageLayout
  }, React.createElement("div", {
    className: Module_355.imageLayoutMain
  }, React.createElement(dA, {
    isReadOnly: e.readOnly,
    isEmpty: 0 === r.length
  }, React.createElement("div", {
    className: Module_355.imageLayoutList
  }, React.createElement("ul", null, React.createElement("li", {
    className: Module_355.uploadItem
  }, React.createElement(Src_shared_ui_components_index.B, {
    onChange: function (e) {
      if (e) {
        n(Src_editor_redux_common_actions.Zf(e, undefined, true))
      }
    },
    multiple: true,
    accept: Module_133.f
  }, React.createElement("div", {
    className: Module_355.content
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add2",
    className: Module_355.icon
  }), React.createElement("div", {
    className: Module_355.name
  }, useIntl$formatMessage({
    id: "Resource.upload"
  }))))), r.filter(function (e) {
    return !e.groupId
  }).map(function (e) {
    return React.createElement(hA, {
      key: e.id,
      item: e,
      handleBlur: a,
      handleDelete: i
    })
  }))))))
}
export { fA }
export { mA }
