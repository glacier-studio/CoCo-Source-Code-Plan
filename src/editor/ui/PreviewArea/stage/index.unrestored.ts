/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-33
 */

"use strict"

import { fd, hd, md, gd, _d } from "../../../../../unrestored/shared/1571/2636/index__part-31"
import { Wd } from "../../../../../unrestored/shared/1571/2636/index__part-32"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"../../../../../unrestored/shared/1571/2636/60"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"../../../../../unrestored/shared/1571/2636/49"
import * as /* [auto-meaningful-name] */Module_452 from /* 452 */"../../../../../unrestored/shared/1571/2636/452/index"
import /* [auto-meaningful-name] */Styles_module_css from /* 279 */"../styles.module.css"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"../../../../../unrestored/shared/1571/2636/75"
import * as /* [auto-meaningful-name] */Widget_builtIn_types from /* 5 */"../../../widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../../../../../unrestored/shared/1571/2636/90"
import * as /* [auto-meaningful-name] */Shared_widget_custom_type from /* 78 */"../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../../unrestored/shared/1571/2636/11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_188 from /* 188 */"../../../../../unrestored/shared/1571/2636/188"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_932 from /* 932 */"../../../../../unrestored/shared/1571/2636/932"
import /* [auto-meaningful-name] */Module_9321 from /* 932 */"../../../../../unrestored/shared/1571/2636/932"
var Vd = function (e) {
  var t
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var i = Module_238.d()
  if (!o) {
    return i ? React.createElement("div", {
      className: Module_9321.container
    }, React.createElement("div", null, i.get("title"))) : null
  }
  var a = Module_9.Bb(o)
  if (!a) {
    return null
  }
  var s = Module_9.Fb(o)
  if (null === (t = Module_9.Db(a.type)) || undefined === t ? undefined : t.isInvisibleWidget) {
    return null
  }
  if (a.type === Widget_builtIn_types.a || a.type === Widget_builtIn_types.c) {
    return React.createElement("div", {
      className: Module_9321.container
    }, React.createElement("div", null, s), React.createElement("div", null, useIntl$formatMessage({
      id: "relativeCoordinate"
    }), " X:", e$position.x, " Y:", e$position.y))
  }
  var c = a.parentId ? Module_9.Bb(a.parentId) : undefined
  return (null === c || undefined === c ? undefined : c.type) && [Widget_builtIn_types.x, Widget_builtIn_types.A].includes(c.type) ? React.createElement("div", {
    className: Module_9321.container
  }, React.createElement("div", null, s), React.createElement("div", null, "X: - Y: -")) : React.createElement("div", {
    className: Module_9321.container
  }, React.createElement("div", null, s), React.createElement("div", null, "X:", e$position.x, " Y:", e$position.y))
}
var zd = React.memo(function () {
  var e
  var t = useRef(null)
  var n = useRef(null)
  var r = null === (e = Module_238.d()) || undefined === e ? undefined : e.id
  var o = useRef(Module_60.d.NONE)
  var i = useDispatch()
  var a = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var s = useSelector(function (e) {
    return e.common.previewAreaUpdatedAt
  })
  var c = useSelector(function (e) {
    return e.common.stageState.isActorDragging
  })
  var l = useSelector(function (e) {
    return e.common.stageScale
  })
  var u = useSelector(function (e) {
    return e.project.focusedWorkspaceArea
  })
  var d = useState({
    x: 0,
    y: 0
  })
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = Module_238.d()
  var b = a ? Module_9.Bb(a) : undefined
  var y = null === b || undefined === b ? undefined : b.type
  var w = y ? Module_9.Db(y) : null
  var T = null === b || undefined === b ? undefined : b.position
  useEffect(function () {
    if (T) {
      g(T)
    }
  }, [T])
  var A = useState(undefined)
  var j = Module_10.a(A, 2)
  var R = j[0]
  var x = j[1]
  var M = useState([])
  var L = Module_10.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = useState([])
  var G = Module_10.a(F, 2)
  var W = G[0]
  var U = G[1]
  var H = useRef([])
  var V = useSelector(function (e) {
    return e.uiConfig.stage
  }) === Module_18.j.ReadOnly
  var z = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var /* [auto-meaningful-name] */n$current
      var o
      var /* [auto-meaningful-name] */t$dataTransfer
      var s
      var c
      var u
      var d
      var p
      var f
      var h
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (t.persist(), n$current = n.current, o = null === n$current || undefined === n$current ? undefined : n$current.getClientRects()[0], t$dataTransfer = t.dataTransfer, !o || !v) {
                e.next = 20
                break
              }
              if (s = t$dataTransfer.getData("widget/action"), c = t$dataTransfer.getData("widget/type"), u = t$dataTransfer.getData("widget/dragging-offset-x"), d = t$dataTransfer.getData("widget/dragging-offset-y"), p = Math.ceil((t.clientX - o.x - parseInt(u)) / l), f = Math.ceil((t.clientY - o.y - parseInt(d)) / l), h = {
                x: p,
                y: f
              }, c !== Widget_builtIn_types.c && c !== Widget_builtIn_types.a) {
                e.next = 14
                break
              }
              return e.abrupt("return")
            case 14:
              if (s !== Widget_builtIn_types.r.CREATE) {
                e.next = 20
                break
              }
              if (i(Redux_common_actions.ki("screen")), !Shared_widget_custom_type.e(c)) {
                e.next = 19
                break
              }
              e.next = 19
              return Redux_common_actions.Nf(i, Redux_common_actions.lg(c))
            case 19:
              i(Redux_common_actions.hg(v.id, c, h))
            case 20:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  useEffect(function () {
    x(v ? Module_452.b(v.toJSON()) : undefined)
  }, [v, s])
  var q = useRef()
  var X = function () {
    if (a && r) {
      i(Redux_common_actions.Mf(a, r))
    }
  }
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement("div", {
    ref: t,
    className: Classnames(Styles_module_css.stage, Module_11.a({}, Styles_module_css.isActorDragging, c)),
    onDrop: z,
    onDragOver: function (e) {
      e.preventDefault()
    }
  }, React.createElement(Wd, null), V && React.createElement(md, null), React.createElement(Module_188.a, {
    useCapture: true
  }, React.createElement(Module_188.b, {
    keys: {
      osx: "command+c",
      windows: "control+c"
    },
    callback: function () {
      if (a) {
        var e = Module_9.Bb(a)
        var t = Module_9.Db((null === e || undefined === e ? undefined : e.type) || "")
        var n = Module_9.qb(a)
        if (!(!t || t.isInvisibleWidget || (null === n || undefined === n ? undefined : n.type) && [Widget_builtIn_types.x, Widget_builtIn_types.A].includes(n.type))) {
          q.current = a
        }
      }
    },
    disabled: "screen" !== u
  }), React.createElement(Module_188.b, {
    keys: {
      osx: "command+v",
      windows: "control+v"
    },
    callback: function () {
      if (q.current) {
        var e = undefined
        if (q.current.startsWith(Widget_builtIn_types.a) || q.current.startsWith(Widget_builtIn_types.c)) {
          var t
          if (!a) {
            return
          }
          var n = Module_9.Bb(a)
          if (!n) {
            return
          }
          if (n.type === Widget_builtIn_types.f) {
            e = n.id
          } else {
            if (!n.parentId || (null === (t = Module_9.Bb(n.parentId)) || undefined === t ? undefined : t.type) !== Widget_builtIn_types.f) {
              return
            }
            var r
            e = null === (r = Module_9.Bb(n.parentId)) || undefined === r ? undefined : r.id
          }
        }
        i(Redux_common_actions.Ef(Module_9.w(q.current, true, e), null === v || undefined === v ? undefined : v.id))
      }
    },
    disabled: "screen" !== u
  }), React.createElement(Module_188.b, {
    keys: ["backspace", "del", "delete"],
    callback: function () {
      if (a) {
        var e = Module_9.qb(a)
        if ((null === e || undefined === e ? undefined : e.type) && [Widget_builtIn_types.x, Widget_builtIn_types.A].includes(e.type)) {
          return
        }
        var t = Module_9.Fb(a)
        var n = useIntl$formatMessage({
          id: "deleteWidget"
        }) + "“" + Module_190.f(t, 10) + "”?"
        var o = Module_26.z.checkFieldValueIsSelected("WIDGET_ID", a)
        var s = Module_26.z.checkSomeFieldValueIsSelected("WIDGET_ID", Module_9.U(a))
        if (o || s) {
          i(Redux_common_actions.zh({
            onConfirm: X,
            allowText: useIntl$formatMessage({
              id: "delete"
            }),
            title: n,
            isDangerous: true,
            content: useIntl$formatMessage({
              id: s ? "deleteParentWidgetTips" : "deleteWidgetTips"
            })
          }))
        } else {
          if (r) {
            i(Redux_common_actions.Mf(a, r))
          }
        }
      }
    },
    disabled: "screen" !== u
  })), React.createElement("div", {
    ref: n,
    className: Styles_module_css.appZone,
    id: "COCO_APP_ZONE",
    onMouseDown: function (e) {
      o.current = Module_60.d.NONE
      var /* [auto-meaningful-name] */e$target = e.target
      var n = e$target.closest("." + Module_90.b)
      var r = e$target.closest(".coco-widget-editor")
      var s = e$target.closest(".select-box")
      i(Redux_common_actions.ki("screen"))
      if (!(s || r)) {
        setTimeout(function () {
          var /* [auto-meaningful-name] */Module_49$oTHelper$customEvent
          var /* [auto-meaningful-name] */Module_49$oTHelper$customEvent$emit
          if (n) {
            if (n.id !== a) {
              i(Redux_common_actions.ug(n.id))
              o.current = Module_60.d.DRAG
            } else {
              o.current = Module_60.d.CLICK
            }
          } else {
            i(Redux_common_actions.ug(undefined))
          }
          if (!(null === (Module_49$oTHelper$customEvent = Module_49.oTHelper.customEvent) || undefined === Module_49$oTHelper$customEvent || null === (Module_49$oTHelper$customEvent$emit = Module_49$oTHelper$customEvent.emit) || undefined === Module_49$oTHelper$customEvent$emit)) {
            Module_49$oTHelper$customEvent$emit.focusItem("widget", null === n || undefined === n ? undefined : n.id)
          }
        }, 0)
      }
    },
    onMouseUp: function (e) {
      if (0 === e.button) {
        var t = e.target instanceof HTMLElement && a ? e.target.closest("#".concat(a)) : null
        if (t instanceof HTMLElement) {
          if (o.current === Module_60.d.CLICK) {
            t.dataset.clickType = Module_60.d.CLICK
          } else {
            t.dataset.clickType = Module_60.d.NONE
          }
        }
      }
    },
    onMouseMove: function () {
      if (o.current === Module_60.d.CLICK) {
        o.current = Module_60.d.DRAG
      }
    },
    style: {
      transform: "scale(".concat(l, ")")
    }
  }, React.createElement(Vd, {
    position: m
  }), c && React.createElement(hd, null), R, React.createElement(fd, {
    onMoveStart: function () {
      if (v) {
        var /* [auto-meaningful-name] */v$widgetIds = v.widgetIds
        var t = []
        e.forEach(function (e) {
          var n = Module_9.Bb(e)
          if (n && !n.parentId) {
            var /* [auto-meaningful-name] */n$position = n.position
            var /* [auto-meaningful-name] */n$size = n.size
            var i = r.x
            var a = r.y
            var /* [auto-meaningful-name] */o$width = o.width
            var /* [auto-meaningful-name] */o$height = o.height
            var l = {
              id: n.id,
              width: s,
              height: c,
              left: i,
              top: a,
              right: i + s,
              bottom: a + c,
              center: i + s / 2,
              middle: a + c / 2
            }
            t.push(l)
          }
        })
        var /* [auto-meaningful-name] */Module_75$e = Module_75.e
        var /* [auto-meaningful-name] */Module_75$d = Module_75.d
        t.push({
          id: v.id,
          width: n,
          height: r,
          left: 0,
          top: 0,
          right: 0 + n,
          bottom: 0 + r,
          center: 0 + n / 2,
          middle: 0 + r / 2
        })
        H.current = t
      }
    },
    onMouseMove: function (e, t) {
      var n = H.current.find(function (t) {
        return t.id === e
      })
      if (!n) {
        return t
      }
      g(Module_6.a({}, t))
      var r = H.current.filter(function (t) {
        return t.id !== e
      })
      var o = function (e, t, n) {
        var r = _d(e, t, n, "x")
        var o = r.v
        var /* [auto-meaningful-name] */r$lines = r.lines
        var a = _d(e, t, n, "y")
        var s = a.v
        var /* [auto-meaningful-name] */a$lines = a.lines
        if (r$lines.length && a$lines.length) {
          r$lines.forEach(function (e) {
            var r = n.find(function (t) {
              return t.id === e.id
            })
            if (r) {
              var i = gd({
                x: o,
                y: s
              }, t, r, "x")
              var /* [auto-meaningful-name] */i$length = i.length
              var /* [auto-meaningful-name] */i$origin = i.origin
              e.length = a
              e.origin = o$lines$hLines
            }
          })
          a$lines.forEach(function (e) {
            var r = n.find(function (t) {
              return t.id === e.id
            })
            if (r) {
              var i = gd({
                x: o,
                y: s
              }, t, r, "y")
              var /* [auto-meaningful-name] */i$length = i.length
              var /* [auto-meaningful-name] */i$origin = i.origin
              e.length = a
              e.origin = o$lines$hLines
            }
          })
        }
        return {
          position: {
            x: o,
            y: s
          },
          lines: {
            hLines: a$lines,
            vLines: r$lines
          }
        }
      }(Module_6.a({}, t), n, r)
      var /* [auto-meaningful-name] */o$position = o.position
      var /* [auto-meaningful-name] */o$lines = o.lines
      var /* [auto-meaningful-name] */o$lines$vLines = o$lines.vLines
      var /* [auto-meaningful-name] */o$lines$hLines = o$lines.hLines
      U(o$lines$vLines)
      B(o$lines$hLines)
      return o$position
    },
    onMoveEnd: function () {
      o.current = Module_60.d.DRAG
      U([])
      B([])
    },
    hidden: !a || !(null === b || undefined === b ? undefined : b.visible) || !!(null === b || undefined === b ? undefined : b.parentId) || (null === w || undefined === w ? undefined : w.isInvisibleWidget) || c && y === Widget_builtIn_types.f
  }), React.createElement(React.Fragment, null, W.map(function (e, t) {
    var /* [auto-meaningful-name] */e$length = e.length
    var /* [auto-meaningful-name] */e$value = e.value
    var /* [auto-meaningful-name] */e$origin = e.origin
    return React.createElement("span", {
      className: Styles_module_css.guideLine,
      key: "v-".concat(t),
      style: {
        left: e$value,
        top: e$origin,
        height: e$length,
        width: 1
      }
    })
  }), P.map(function (e, t) {
    var /* [auto-meaningful-name] */e$length = e.length
    var /* [auto-meaningful-name] */e$value = e.value
    var /* [auto-meaningful-name] */e$origin = e.origin
    return React.createElement("span", {
      className: Styles_module_css.guideLine,
      key: "h-".concat(t),
      style: {
        top: e$value,
        left: e$origin,
        width: e$length,
        height: 1
      }
    })
  }))))
})
export { zd }
