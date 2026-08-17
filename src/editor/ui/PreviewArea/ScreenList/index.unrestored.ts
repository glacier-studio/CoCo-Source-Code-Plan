/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-26
 */

"use strict"

import { Pn } from "../../../../../unrestored/shared/1571/2636/index__part-24"
import { Xn, Zn, Jn, er, tr, nr, rr, or, ar, sr, cr, lr, ur, dr, pr, hr, mr, gr, wr, Nr, Rr, kr, xr, Dr, Mr, Lr, Pr, Br, Fr, Gr, Wr } from "../../../../../unrestored/shared/1571/2636/index__part-25"
import { Cv } from "../WidgetList/index"
import /* [auto-meaningful-name] */Module_702 from /* 702 */"../../../../../unrestored/shared/1571/2636/702"
import * as /* [auto-meaningful-name] */Module_142 from /* 142 */"../../../../../unrestored/shared/1571/2636/142"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../../../../../unrestored/shared/1571/2636/120"
import * as /* [auto-meaningful-name] */Module_362 from /* 362 */"../../../../../unrestored/shared/1571/2636/362"
import * as /* [auto-meaningful-name] */Module_388 from /* 388 */"../../../../../unrestored/shared/1571/2636/388"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../../../../../unrestored/shared/1571/2636/106"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../../../../../unrestored/shared/1571/2636/103"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../../../../../unrestored/shared/1571/2636/35"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../../../../../unrestored/shared/1571/2636/40/index"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../../../unrestored/shared/1571/2636/19"
import * as /* [auto-meaningful-name] */Module_295 from /* 295 */"../../../../../unrestored/shared/1571/2636/295"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../../unrestored/shared/1571/2636/11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import { useDispatch, useSelector, batch } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useState, useImperativeHandle, useEffect, createRef, createElement, Component, useLayoutEffect, memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_553 from /* 553 */"../../../../../unrestored/shared/1571/2636/553"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */Styles_module_css from /* 212 */"./styles.module.css"
import /* [auto-meaningful-name] */Styles_module_css1 from /* 212 */"./styles.module.css"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../../../../../unrestored/shared/1571/2636/53"
import * as /* [auto-meaningful-name] */Module_1511 from /* 1511 */"../../../../../unrestored/shared/1571/2636/1511"
import /* [auto-meaningful-name] */Module_15111 from /* 1511 */"../../../../../unrestored/shared/1571/2636/1511"
var Xr = React.forwardRef(function (e, t) {
  var n = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$checkValueIsRepeat = e.checkValueIsRepeat
  var /* [auto-meaningful-name] */e$renameInputValue = e.renameInputValue
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$value = e.value
  var l = useRef(e$value)
  var u = useState(e$value)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState(false)
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  var E = useRef(null)
  var O = useRef(true)
  var w = useRef(null)
  useImperativeHandle(t, function () {
    return {
      focus: function () {
        var /* [auto-meaningful-name] */w$current
        return null === (w$current = w.current) || undefined === w$current ? undefined : w$current.focus()
      },
      blur: function () {
        var /* [auto-meaningful-name] */w$current
        return null === (w$current = w.current) || undefined === w$current ? undefined : w$current.blur()
      },
      select: function () {
        var /* [auto-meaningful-name] */w$current
        return null === (w$current = w.current) || undefined === w$current ? undefined : w$current.select()
      }
    }
  })
  useEffect(function () {
    m(e$value)
  }, [e$value])
  var C = function () {
    if (E.current) {
      window.clearTimeout(E.current)
    }
    y(true)
    E.current = window.setTimeout(function () {
      y(false)
      E.current = null
    }, 600)
  }
  var T = function () {
    if (w.current) {
      var /* [auto-meaningful-name] */w$current$value = w.current.value
      var t = Module_190.b(e)
      if (t > Module_53.i) {
        C()
      }
      if (O.current) {
        if (!e.match(Module_53.D)) {
          m(l.current)
          return void C()
        }
        y(false)
        var /* [auto-meaningful-name] */l$current = l.current
        var r = Module_190.b(n)
        if (t <= Module_53.i || t < r) {
          m(e)
          return void (l.current = e)
        }
        if (t > r && r >= Module_53.i) {
          m(l.current)
          return void C()
        }
        y(false)
        for (var o = -1, i = 0; i < e.length; i++) {
          if (e[i] !== n[i]) {
            o = i
            break
          }
        }
        if (o > -1) {
          for (var a = n, s = o; s < e.length; s++) {
            var c = n.slice(0, o) + e.slice(o, s) + n.slice(o)
            if (Module_190.b(c) > Module_53.i) {
              break
            }
            a = c
          }
          m(a)
          l.current = a
        }
      } else {
        m(e)
      }
    }
  }
  return React.createElement("input", {
    className: Classnames(Module_15111.input, e$className, {
      "coco-input-warning-animation": b
    }),
    ref: w,
    value: p,
    onBlur: function () {
      if (e.onBlur) {
        e.onBlur()
      }
      var t = p.trim()
      if (t) {
        m(t)
        if (t !== e$value) {
          if (e$checkValueIsRepeat(t)) {
            var s = e$renameInputValue(t)
            return void (s && m(s))
          }
          e$onChange(t)
        }
      } else {
        n(Redux_common_actions.mj({
          message: useIntl$formatMessage({
            id: "blankInputValue"
          }),
          type: "error",
          showCloseIcon: false
        }))
        m(e$value)
      }
    },
    onChange: T,
    onCompositionEnd: function () {
      O.current = true
      T()
    },
    onCompositionStart: function () {
      O.current = false
    },
    onKeyDown: function (e) {
      var /* [auto-meaningful-name] */w$current = w.current
      if (w$current && 13 === e.keyCode) {
        w$current.blur()
      }
    }
  })
})
var Qr = function (e) {
  var /* [auto-meaningful-name] */e$screenId = e.screenId
  var n = useSelector(function (e) {
    return e.oTState.onlineCooperationUserList
  })
  var r = useSelector(function (e) {
    return e.oTState.userFocusOTInfoList
  })
  var o = useState([])
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  useEffect(function () {
    var e = r.filter(function (e) {
      return e.path.screenId === e$screenId
    })
    s(n.filter(function (t) {
      return e.some(function (e) {
        return e.userId === t.id
      })
    }).toJSON())
  }, [n, e$screenId, r])
  if (!a.length) {
    return null
  }
  var c = a.map(function (e) {
    return e.nickname
  }).join(" ")
  return React.createElement("div", {
    className: Styles_module_css1.collaboration,
    title: c
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-collaborate"
  }))
}
var Zr = function (e) {
  var t
  var n
  var r = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    withRef: false
  }
  n = t = function (t) {
    function n() {
      var e
      var t
      Module_103.a(this, n)
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
        o[i] = arguments[i]
      }
      t = Module_388.a(this, (e = Module_362.a(n)).call.apply(e, [this].concat(o)))
      Module_35.a(Module_142.a(Module_142.a(t)), "wrappedInstance", createRef())
      return t
    }
    Module_120.a(n, t)
    Module_106.a(n, [
      {
        key: "componentDidMount",
        value: function () {
          ReactDom.findDOMNode(this).sortableHandle = true
        }
      }, {
        key: "getWrappedInstance",
        value: function () {
          Module_702(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call")
          return this.wrappedInstance.current
        }
      }, {
        key: "render",
        value: function () {
          var t = r.withRef ? this.wrappedInstance : null
          return createElement(e, Module_19.a({
            ref: t
          }, this.props))
        }
      }
    ])
    return n
  }(Component)
  Module_35.a(t, "displayName", sr("sortableHandle", e))
  return n
}(function (e) {
  var /* [auto-meaningful-name] */e$screen = e.screen
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$title = e.title
  var o = useDispatch()
  return React.createElement("div", {
    className: Styles_module_css1.snapshotContainer,
    onClick: function () {
      o(Redux_common_actions.vg(e$index))
    }.bind(null, e$index)
  }, e$screen.snapshot && React.createElement("img", {
    src: e$screen.snapshot,
    className: Styles_module_css1.snapshot,
    alt: e$title,
    draggable: false
  }))
})
var Jr = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$screen = e.screen
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$onDeleteIconClick = e.onDeleteIconClick
  var /* [auto-meaningful-name] */e$updateCanEdit = e.updateCanEdit
  var /* [auto-meaningful-name] */e$canEdit = e.canEdit
  var /* [auto-meaningful-name] */e$readonly = e.readonly
  var /* [auto-meaningful-name] */e$showDeleteIcon = e.showDeleteIcon
  var c = Module_238.e(e$screen.id)
  var l = useSelector(function (e) {
    return e.project.screens
  })
  var u = useSelector(function (e) {
    return e.oTState.collWorkId
  })
  var /* [auto-meaningful-name] */e$screen$title = e$screen.title
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var m = useDispatch()
  var g = useRef(null)
  var v = useRef(null)
  useEffect(function () {
    if (e$selected && v.current) {
      v.current.scrollIntoView()
    }
  }, [e$selected])
  useEffect(function () {
    var /* [auto-meaningful-name] */g$current
    var /* [auto-meaningful-name] */g$current1
    if (e$canEdit) {
      if (!(null === g || undefined === g || null === (g$current = g.current) || undefined === g$current)) {
        g$current.focus()
      }
      if (!(null === g || undefined === g || null === (g$current1 = g.current) || undefined === g$current1)) {
        g$current1.select()
      }
    }
  }, [e$canEdit])
  return React.createElement("div", {
    ref: v,
    className: Classnames(Styles_module_css1.item, Module_11.a({}, Styles_module_css1.selected, e$selected)),
    key: e$screen.id
  }, React.createElement("div", {
    className: Styles_module_css1.view
  }, React.createElement(Zr, {
    screen: e$screen,
    index: c,
    title: e$screen$title
  }), React.createElement(React.Fragment, null, !e$canEdit && React.createElement(React.Fragment, null, e$showDeleteIcon && !e$readonly && React.createElement("div", {
    className: Styles_module_css1.delete,
    onClick: function (e) {
      e.stopPropagation()
      e$onDeleteIconClick(e$screen)
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-delete-bold"
  })), !e$readonly && React.createElement("div", {
    className: Styles_module_css1.copy,
    onClick: function (e) {
      if (l.size > 98) {
        m(Redux_common_actions.mj({
          showPrefixIcon: false,
          message: useIntl$formatMessage({
            id: "screeMaxSize"
          })
        }))
      } else {
        e.stopPropagation()
        m(Redux_common_actions.vg(c))
        m(Redux_common_actions.Df(e$screen.id))
      }
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-copy"
  })), !!u && React.createElement(Qr, {
    screenId: e$screen.id
  })), React.createElement("div", {
    className: Styles_module_css1.index
  }, c + 1))), React.createElement("div", {
    className: Styles_module_css1.titleBox
  }, e$canEdit && !e$readonly ? React.createElement(Xr, {
    value: e$screen$title,
    checkValueIsRepeat: function (e) {
      return Module_9.r(e$screen.id, e)
    },
    onChange: function (e) {
      var n
      m(Redux_common_actions.Jg(e$screen.id, "title", e))
      if (!(null === (n = Module_26.g.getToolbox()) || undefined === n)) {
        n.refresh_selection()
      }
    },
    ref: g,
    renameInputValue: function (e) {
      var n
      var r = Module_9.Ob(e$screen.id, e, l)
      m(Redux_common_actions.Jg(e$screen.id, "title", r))
      if (!(null === (n = Module_26.g.getToolbox()) || undefined === n)) {
        n.refresh_selection()
      }
      return r
    },
    onBlur: function () {
      e$updateCanEdit(false)
    },
    className: Styles_module_css1.editName
  }) : React.createElement("p", {
    onClick: function (e) {
      if (!e$readonly) {
        e$updateCanEdit(true)
      }
    },
    style: {
      display: e$canEdit ? "none" : "block"
    },
    className: Styles_module_css1.canNotEdit
  }, e$screen$title)))
})
var $r = function (e) {
  var t
  var n
  var r = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    withRef: false
  }
  n = t = function (t) {
    function n() {
      var e
      var t
      Module_103.a(this, n)
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
        o[i] = arguments[i]
      }
      t = Module_388.a(this, (e = Module_362.a(n)).call.apply(e, [this].concat(o)))
      Module_35.a(Module_142.a(Module_142.a(t)), "wrappedInstance", createRef())
      return t
    }
    Module_120.a(n, t)
    Module_106.a(n, [
      {
        key: "componentDidMount",
        value: function () {
          this.register()
        }
      }, {
        key: "componentDidUpdate",
        value: function (e) {
          if (this.node) {
            if (e.index !== this.props.index) {
              this.node.sortableInfo.index = this.props.index
            }
            if (e.disabled !== this.props.disabled) {
              this.node.sortableInfo.disabled = this.props.disabled
            }
          }
          if (e.collection !== this.props.collection) {
            this.unregister(e.collection)
            this.register()
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.unregister()
        }
      }, {
        key: "register",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$collection = this$props.collection
          var /* [auto-meaningful-name] */this$props$disabled = this$props.disabled
          var /* [auto-meaningful-name] */this$props$index = this$props.index
          var o = ReactDom.findDOMNode(this)
          o.sortableInfo = {
            collection: this$props$collection,
            disabled: this$props$disabled,
            index: this$props$index,
            manager: this.context.manager
          }
          this.node = o
          this.ref = {
            node: o
          }
          this.context.manager.add(this$props$collection, this.ref)
        }
      }, {
        key: "unregister",
        value: function () {
          var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props.collection
          this.context.manager.remove(e, this.ref)
        }
      }, {
        key: "getWrappedInstance",
        value: function () {
          Module_702(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call")
          return this.wrappedInstance.current
        }
      }, {
        key: "render",
        value: function () {
          var t = r.withRef ? this.wrappedInstance : null
          return createElement(e, Module_19.a({
            ref: t
          }, Zn(this.props, Wr)))
        }
      }
    ])
    return n
  }(Component)
  Module_35.a(t, "displayName", sr("sortableElement", e))
  Module_35.a(t, "contextType", Fr)
  Module_35.a(t, "propTypes", Gr)
  Module_35.a(t, "defaultProps", {
    collection: 0
  })
  return n
}(function (e) {
  var /* [auto-meaningful-name] */e$screen = e.screen
  var /* [auto-meaningful-name] */e$screenIndex = e.screenIndex
  var /* [auto-meaningful-name] */e$currentScreenIndex = e.currentScreenIndex
  var /* [auto-meaningful-name] */e$updateCanEdit = e.updateCanEdit
  var /* [auto-meaningful-name] */e$editDomIndex = e.editDomIndex
  var /* [auto-meaningful-name] */e$screensSize = e.screensSize
  var s = Module_295.a(e, ["screen", "screenIndex", "currentScreenIndex", "updateCanEdit", "editDomIndex", "screensSize"])
  return React.createElement(Jr, Object.assign({
    key: e$screen.id,
    screen: e$screen,
    canEdit: e$editDomIndex === e$screenIndex,
    updateCanEdit: function (e) {
      e$updateCanEdit(e, e$screenIndex)
    },
    selected: e$currentScreenIndex === e$screenIndex,
    showDeleteIcon: e$screensSize > 1
  }, s))
})
var eo = function (e) {
  var t
  var n
  var r = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    withRef: false
  }
  n = t = function (t) {
    function n(e) {
      var t
      Module_103.a(this, n)
      t = Module_388.a(this, Module_362.a(n).call(this, e))
      Module_35.a(Module_142.a(Module_142.a(t)), "state", {})
      Module_35.a(Module_142.a(Module_142.a(t)), "handleStart", function (e) {
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$distance = t$props.distance
        var /* [auto-meaningful-name] */t$props$shouldCancelStart = t$props.shouldCancelStart
        if (2 !== e.button && !t$props$shouldCancelStart(e)) {
          t.touched = true
          t.position = lr(e)
          var i = rr(e.target, function (e) {
            return null != e.sortableInfo
          })
          if (i && i.sortableInfo && t.nodeIsChild(i) && !t.state.sorting) {
            var /* [auto-meaningful-name] */t$props$useDragHandle = t.props.useDragHandle
            var /* [auto-meaningful-name] */i$sortableInfo = i.sortableInfo
            var /* [auto-meaningful-name] */s$index = s.index
            var /* [auto-meaningful-name] */s$collection = s.collection
            if (s.disabled) {
              return
            }
            if (a && !rr(e.target, Rr)) {
              return
            }
            t.manager.active = {
              collection: l,
              index: c
            }
            if (!(ur(e) || e.target.tagName !== wr)) {
              e.preventDefault()
            }
            if (!t$props$distance) {
              if (0 === t.props.pressDelay) {
                t.handlePress(e)
              } else {
                t.pressTimer = setTimeout(function () {
                  return t.handlePress(e)
                }, t.props.pressDelay)
              }
            }
          }
        }
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "nodeIsChild", function (e) {
        return e.sortableInfo.manager === t.manager
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "handleMove", function (e) {
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$distance = t$props.distance
        var /* [auto-meaningful-name] */t$props$pressThreshold = t$props.pressThreshold
        if (!t.state.sorting && t.touched && !t._awaitingUpdateBeforeSortStart) {
          var i = lr(e)
          var a = {
            x: t.position.x - i.x,
            y: t.position.y - i.y
          }
          var s = Math.abs(a.x) + Math.abs(a.y)
          t.delta = a
          if (t$props$distance || t$props$pressThreshold && !(s >= t$props$pressThreshold)) {
            if (t$props$distance && s >= t$props$distance && t.manager.isActive()) {
              t.handlePress(e)
            }
          } else {
            clearTimeout(t.cancelTimer)
            t.cancelTimer = setTimeout(t.cancel, 0)
          }
        }
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "handleEnd", function () {
        t.touched = false
        t.cancel()
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "cancel", function () {
        var /* [auto-meaningful-name] */t$props$distance = t.props.distance
        if (!t.state.sorting) {
          if (!t$props$distance) {
            clearTimeout(t.pressTimer)
          }
          t.manager.active = null
        }
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "handlePress", function (e) {
        try {
          var n = t.manager.getActive()
          var r = function () {
            if (n) {
              var r = function () {
                var /* [auto-meaningful-name] */p$sortableInfo$index = p.sortableInfo.index
                var r = ar(p)
                var o = gr(t.container)
                var l = t.scrollContainer.getBoundingClientRect()
                var m = a({
                  index: p$sortableInfo$index,
                  node: p,
                  collection: React1
                })
                t.node = p
                t.margin = r
                t.gridGap = o
                t.width = m.width
                t.height = m.height
                t.marginOffset = {
                  x: t.margin.left + t.margin.right + t.gridGap.x,
                  y: Math.max(t.margin.top, t.margin.bottom, t.gridGap.y)
                }
                t.boundingClientRect = p.getBoundingClientRect()
                t.containerBoundingRect = l
                t.index = p$sortableInfo$index
                t.newIndex = p$sortableInfo$index
                t.axis = {
                  x: i.indexOf("x") >= 0,
                  y: i.indexOf("y") >= 0
                }
                t.offsetEdge = dr(p, t.container)
                t.initialOffset = lr(React ? Pn({}, e, {
                  pageX: t.boundingClientRect.left,
                  pageY: t.boundingClientRect.top
                }) : e)
                t.initialScroll = {
                  left: t.scrollContainer.scrollLeft,
                  top: t.scrollContainer.scrollTop
                }
                t.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                }
                t.helper = t.helperContainer.appendChild(Nr(p))
                er(t.helper, {
                  boxSizing: "border-box",
                  height: "".concat(t.height, "px"),
                  left: "".concat(t.boundingClientRect.left - r.left, "px"),
                  pointerEvents: "none",
                  position: "fixed",
                  top: "".concat(t.boundingClientRect.top - r.top, "px"),
                  width: "".concat(t.width, "px")
                })
                if (React) {
                  t.helper.focus()
                }
                if (c) {
                  t.sortableGhost = p
                  er(p, {
                    opacity: 0,
                    visibility: "hidden"
                  })
                }
                t.minTranslate = {}
                t.maxTranslate = {}
                if (React) {
                  var g = d ? {
                    top: 0,
                    left: 0,
                    width: t.contentWindow.innerWidth,
                    height: t.contentWindow.innerHeight
                  } : t.containerBoundingRect
                  var /* [auto-meaningful-name] */g$top = g.top
                  var /* [auto-meaningful-name] */g$left = g.left
                  var /* [auto-meaningful-name] */g$width = g.width
                  var y = _ + g.height
                  var E = v + b
                  if (t.axis.x) {
                    t.minTranslate.x = v - t.boundingClientRect.left
                    t.maxTranslate.x = E - (t.boundingClientRect.left + t.width)
                  }
                  if (t.axis.y) {
                    t.minTranslate.y = _ - t.boundingClientRect.top
                    t.maxTranslate.y = y - (t.boundingClientRect.top + t.height)
                  }
                } else {
                  if (t.axis.x) {
                    t.minTranslate.x = (d ? 0 : l.left) - t.boundingClientRect.left - t.width / 2
                    t.maxTranslate.x = (d ? t.contentWindow.innerWidth : l.left + l.width) - t.boundingClientRect.left - t.width / 2
                  }
                  if (t.axis.y) {
                    t.minTranslate.y = (d ? 0 : l.top) - t.boundingClientRect.top - t.height / 2
                    t.maxTranslate.y = (d ? t.contentWindow.innerHeight : l.top + l.height) - t.boundingClientRect.top - t.height / 2
                  }
                }
                if (s) {
                  s.split(" ").forEach(function (e) {
                    return t.helper.classList.add(e)
                  })
                }
                t.listenerNode = e.touches ? e.target : t.contentWindow
                if (React) {
                  t.listenerNode.addEventListener("wheel", t.handleKeyEnd, true)
                  t.listenerNode.addEventListener("mousedown", t.handleKeyEnd, true)
                  t.listenerNode.addEventListener("keydown", t.handleKeyDown)
                } else {
                  Jn.move.forEach(function (e) {
                    return t.listenerNode.addEventListener(e, t.handleSortMove, false)
                  })
                  Jn.end.forEach(function (e) {
                    return t.listenerNode.addEventListener(e, t.handleSortEnd, false)
                  })
                }
                t.setState({
                  sorting: true,
                  sortingIndex: p$sortableInfo$index
                })
                if (u) {
                  u({
                    node: p,
                    index: p$sortableInfo$index,
                    collection: React1,
                    isKeySorting: React,
                    nodes: t.manager.getOrderedRefs(),
                    helper: t.helper
                  }, e)
                }
                if (React) {
                  t.keyMove(0)
                }
              }
              var /* [auto-meaningful-name] */t$props = t.props
              var /* [auto-meaningful-name] */o$axis = o.axis
              var /* [auto-meaningful-name] */o$getHelperDimensions = o.getHelperDimensions
              var /* [auto-meaningful-name] */o$helperClass = o.helperClass
              var /* [auto-meaningful-name] */o$hideSortableGhost = o.hideSortableGhost
              var /* [auto-meaningful-name] */o$updateBeforeSortStart = o.updateBeforeSortStart
              var /* [auto-meaningful-name] */o$onSortStart = o.onSortStart
              var /* [auto-meaningful-name] */o$useWindowAsScrollContainer = o.useWindowAsScrollContainer
              var /* [auto-meaningful-name] */n$node = n.node
              var /* [auto-meaningful-name] */n$collection = n.collection
              var /* [auto-meaningful-name] */t$manager$isKeySorting = t.manager.isKeySorting
              var m = function () {
                if ("function" === typeof l) {
                  t._awaitingUpdateBeforeSortStart = true
                  var n = Br(function () {
                    var /* [auto-meaningful-name] */p$sortableInfo$index = p.sortableInfo.index
                    return Promise.resolve(l({
                      collection: React1,
                      index: p$sortableInfo$index,
                      node: p,
                      isKeySorting: React
                    }, e)).then(function () {})
                  }, function (e, n) {
                    t._awaitingUpdateBeforeSortStart = false
                    if (e) {
                      throw n
                    }
                    return n
                  })
                  if (n && n.then) {
                    return n.then(function () {})
                  }
                }
              }()
              return m && m.then ? m.then(r) : r()
            }
          }()
          return Promise.resolve(r && r.then ? r.then(function () {}) : undefined)
        } catch (o) {
          return Promise.reject(o)
        }
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "handleSortMove", function (e) {
        var /* [auto-meaningful-name] */t$props$onSortMove = t.props.onSortMove
        if ("function" === typeof e.preventDefault && e.cancelable) {
          e.preventDefault()
        }
        t.updateHelperPosition(e)
        t.animateNodes()
        t.autoscroll()
        if (t$props$onSortMove) {
          t$props$onSortMove(e)
        }
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "handleSortEnd", function (e) {
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$hideSortableGhost = t$props.hideSortableGhost
        var /* [auto-meaningful-name] */t$props$onSortEnd = t$props.onSortEnd
        var /* [auto-meaningful-name] */t$manager = t.manager
        var /* [auto-meaningful-name] */t$manager$active$collection = t$manager.active.collection
        var /* [auto-meaningful-name] */t$manager$isKeySorting = t$manager.isKeySorting
        var c = t.manager.getOrderedRefs()
        if (t.listenerNode) {
          if (t$manager$isKeySorting) {
            t.listenerNode.removeEventListener("wheel", t.handleKeyEnd, true)
            t.listenerNode.removeEventListener("mousedown", t.handleKeyEnd, true)
            t.listenerNode.removeEventListener("keydown", t.handleKeyDown)
          } else {
            Jn.move.forEach(function (e) {
              return t.listenerNode.removeEventListener(e, t.handleSortMove)
            })
            Jn.end.forEach(function (e) {
              return t.listenerNode.removeEventListener(e, t.handleSortEnd)
            })
          }
        }
        t.helper.parentNode.removeChild(t.helper)
        if (t$props$hideSortableGhost && t.sortableGhost) {
          er(t.sortableGhost, {
            opacity: "",
            visibility: ""
          })
        }
        for (var l = 0, /* [auto-meaningful-name] */c$length = c.length; l < c$length; l++) {
          var d = c[l]
          var /* [auto-meaningful-name] */d$node = d.node
          d.edgeOffset = null
          d.boundingClientRect = null
          tr(p, null)
          nr(p, null)
          d.translate = null
        }
        t.autoScroller.clear()
        t.manager.active = null
        t.manager.isKeySorting = false
        t.setState({
          sorting: false,
          sortingIndex: null
        })
        if ("function" === typeof t$props$onSortEnd) {
          t$props$onSortEnd({
            collection: t$manager$active$collection,
            newIndex: t.newIndex,
            oldIndex: t.index,
            isKeySorting: t$manager$isKeySorting,
            nodes: c
          }, e)
        }
        t.touched = false
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "autoscroll", function () {
        var /* [auto-meaningful-name] */t$props$disableAutoscroll = t.props.disableAutoscroll
        var /* [auto-meaningful-name] */t$manager$isKeySorting = t.manager.isKeySorting
        if (t$props$disableAutoscroll) {
          t.autoScroller.clear()
        } else {
          if (t$manager$isKeySorting) {
            var r = Pn({}, t.translate)
            var o = 0
            var i = 0
            if (t.axis.x) {
              r.x = Math.min(t.maxTranslate.x, Math.max(t.minTranslate.x, t.translate.x))
              o = t.translate.x - r.x
            }
            if (t.axis.y) {
              r.y = Math.min(t.maxTranslate.y, Math.max(t.minTranslate.y, t.translate.y))
              i = t.translate.y - r.y
            }
            t.translate = r
            tr(t.helper, t.translate)
            t.scrollContainer.scrollLeft += o
            return void (t.scrollContainer.scrollTop += i)
          }
          t.autoScroller.update({
            height: t.height,
            maxTranslate: t.maxTranslate,
            minTranslate: t.minTranslate,
            translate: t.translate,
            width: t.width
          })
        }
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "onAutoScroll", function (e) {
        t.translate.x += e.left
        t.translate.y += e.top
        t.animateNodes()
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "handleKeyDown", function (e) {
        var /* [auto-meaningful-name] */e$keyCode = e.keyCode
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$shouldCancelStart = t$props.shouldCancelStart
        var /* [auto-meaningful-name] */t$props$keyCodes = t$props.keyCodes
        var a = Pn({}, Dr, undefined === t$props$keyCodes ? {} : t$props$keyCodes)
        if (!(t.manager.active && !t.manager.isKeySorting || !(t.manager.active || a.lift.includes(e$keyCode) && !t$props$shouldCancelStart(e) && t.isValidSortingTarget(e)))) {
          e.stopPropagation()
          e.preventDefault()
          if (a.lift.includes(e$keyCode) && !t.manager.active) {
            t.keyLift(e)
          } else {
            if (a.drop.includes(e$keyCode) && t.manager.active) {
              t.keyDrop(e)
            } else {
              if (a.cancel.includes(e$keyCode)) {
                t.newIndex = t.manager.active.index
                t.keyDrop(e)
              } else {
                if (a.up.includes(e$keyCode)) {
                  t.keyMove(-1)
                } else {
                  if (a.down.includes(e$keyCode)) {
                    t.keyMove(1)
                  }
                }
              }
            }
          }
        }
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "keyLift", function (e) {
        var /* [auto-meaningful-name] */e$target = e.target
        var /* [auto-meaningful-name] */rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo = rr(e$target, function (e) {
          return null != e.sortableInfo
        }).sortableInfo
        var /* [auto-meaningful-name] */rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo$index = rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo.index
        var /* [auto-meaningful-name] */rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo$collection = rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo.collection
        t.initialFocusedNode = e$target
        t.manager.isKeySorting = true
        t.manager.active = {
          index: rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo$index,
          collection: rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo$collection
        }
        t.handlePress(e)
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "keyMove", function (e) {
        var n = t.manager.getOrderedRefs()
        var /* [auto-meaningful-name] */nN$length1$node$sortableInfo$index = n[n.length - 1].node.sortableInfo.index
        var o = t.newIndex + e
        var /* [auto-meaningful-name] */t$newIndex = t.newIndex
        if (!(o < 0 || o > nN$length1$node$sortableInfo$index)) {
          t.prevIndex = t$newIndex
          t.newIndex = o
          var a = pr(t.newIndex, t.prevIndex, t.index)
          var s = n.find(function (e) {
            return e.node.sortableInfo.index === a
          })
          var /* [auto-meaningful-name] */s$node = s.node
          var /* [auto-meaningful-name] */t$containerScrollDelta = t.containerScrollDelta
          var u = s.boundingClientRect || cr(c, l)
          var d = s.translate || {
            x: 0,
            y: 0
          }
          var p = u.top + d.y - l.top
          var f = u.left + d.x - l.left
          var h = t$newIndex < o
          var m = h && t.axis.x ? c.offsetWidth - t.width : 0
          var g = h && t.axis.y ? c.offsetHeight - t.height : 0
          t.handleSortMove({
            pageX: f + m,
            pageY: p + g,
            ignoreTransition: 0 === e
          })
        }
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "keyDrop", function (e) {
        t.handleSortEnd(e)
        if (t.initialFocusedNode) {
          t.initialFocusedNode.focus()
        }
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "handleKeyEnd", function (e) {
        if (t.manager.active) {
          t.keyDrop(e)
        }
      })
      Module_35.a(Module_142.a(Module_142.a(t)), "isValidSortingTarget", function (e) {
        var /* [auto-meaningful-name] */t$props$useDragHandle = t.props.useDragHandle
        var /* [auto-meaningful-name] */e$target = e.target
        var o = rr(e$target, function (e) {
          return null != e.sortableInfo
        })
        return o && o.sortableInfo && !o.sortableInfo.disabled && (t$props$useDragHandle ? Rr(e$target) : e$target.sortableInfo)
      })
      var r = new Xn()
      Pr(e)
      t.manager = r
      t.wrappedInstance = createRef()
      t.sortableContextValue = {
        manager: r
      }
      t.events = {
        end: t.handleEnd,
        move: t.handleMove,
        start: t.handleStart
      }
      return t
    }
    Module_120.a(n, t)
    Module_106.a(n, [
      {
        key: "componentDidMount",
        value: function () {
          var e = this
          var /* [auto-meaningful-name] */this$props$useWindowAsScrollContainer = this.props.useWindowAsScrollContainer
          var n = this.getContainer()
          Promise.resolve(n).then(function (n) {
            e.container = n
            e.document = e.container.ownerDocument || document
            var r = e.props.contentWindow || e.document.defaultView || window
            e.contentWindow = "function" === typeof r ? r() : r
            e.scrollContainer = this$props$useWindowAsScrollContainer ? e.document.scrollingElement || e.document.documentElement : mr(e.container) || e.container
            e.autoScroller = new kr(e.scrollContainer, e.onAutoScroll)
            Object.keys(e.events).forEach(function (t) {
              return Jn[t].forEach(function (n) {
                return e.container.addEventListener(n, e.events[t], false)
              })
            })
            e.container.addEventListener("keydown", e.handleKeyDown)
          })
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          var e = this
          if (this.helper && this.helper.parentNode) {
            this.helper.parentNode.removeChild(this.helper)
          }
          if (this.container) {
            Object.keys(this.events).forEach(function (t) {
              return Jn[t].forEach(function (n) {
                return e.container.removeEventListener(n, e.events[t])
              })
            })
            this.container.removeEventListener("keydown", this.handleKeyDown)
          }
        }
      }, {
        key: "updateHelperPosition",
        value: function (e) {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$lockAxis = this$props.lockAxis
          var /* [auto-meaningful-name] */this$props$lockOffset = this$props.lockOffset
          var /* [auto-meaningful-name] */this$props$lockToContainerEdges = this$props.lockToContainerEdges
          var /* [auto-meaningful-name] */this$props$transitionDuration = this$props.transitionDuration
          var /* [auto-meaningful-name] */this$props$keyboardSortingTransitionDuration = this$props.keyboardSortingTransitionDuration
          var s = undefined === this$props$keyboardSortingTransitionDuration ? this$props$transitionDuration : this$props$keyboardSortingTransitionDuration
          var /* [auto-meaningful-name] */this$manager$isKeySorting = this.manager.isKeySorting
          var /* [auto-meaningful-name] */e$ignoreTransition = e.ignoreTransition
          var u = lr(e)
          var d = {
            x: u.x - this.initialOffset.x,
            y: u.y - this.initialOffset.y
          }
          d.y -= window.pageYOffset - this.initialWindowScroll.top
          d.x -= window.pageXOffset - this.initialWindowScroll.left
          this.translate = d
          if (this$props$lockToContainerEdges) {
            var p = hr({
              height: this.height,
              lockOffset: this$props$lockOffset,
              width: this.width
            })
            var f = Module_40.a(p, 2)
            var h = f[0]
            var m = f[1]
            var g = {
              x: this.width / 2 - h.x,
              y: this.height / 2 - h.y
            }
            var _ = {
              x: this.width / 2 - m.x,
              y: this.height / 2 - m.y
            }
            d.x = or(this.minTranslate.x + g.x, this.maxTranslate.x - _.x, d.x)
            d.y = or(this.minTranslate.y + g.y, this.maxTranslate.y - _.y, d.y)
          }
          if ("x" === this$props$lockAxis) {
            d.y = 0
          } else {
            if ("y" === this$props$lockAxis) {
              d.x = 0
            }
          }
          if (this$manager$isKeySorting && s && !e$ignoreTransition) {
            nr(this.helper, s)
          }
          tr(this.helper, d)
        }
      }, {
        key: "animateNodes",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$transitionDuration = this$props.transitionDuration
          var /* [auto-meaningful-name] */this$props$hideSortableGhost = this$props.hideSortableGhost
          var /* [auto-meaningful-name] */this$props$onSortOver = this$props.onSortOver
          var /* [auto-meaningful-name] */this$containerScrollDelta = this.containerScrollDelta
          var /* [auto-meaningful-name] */this$windowScrollDelta = this.windowScrollDelta
          var a = this.manager.getOrderedRefs()
          var s = this.offsetEdge.left + this.translate.x + this$containerScrollDelta.left
          var c = this.offsetEdge.top + this.translate.y + this$containerScrollDelta.top
          var /* [auto-meaningful-name] */this$manager$isKeySorting = this.manager.isKeySorting
          var /* [auto-meaningful-name] */this$newIndex = this.newIndex
          this.newIndex = null
          for (var d = 0, /* [auto-meaningful-name] */a$length = a.length; d < a$length; d++) {
            var /* [auto-meaningful-name] */aD$node = a[d].node
            var /* [auto-meaningful-name] */React1$sortableInfo$index = React1.sortableInfo.index
            var /* [auto-meaningful-name] */React1$offsetWidth = React1.offsetWidth
            var /* [auto-meaningful-name] */React1$offsetHeight = React1.offsetHeight
            var _ = {
              height: this.height > g ? g / 2 : this.height / 2,
              width: this.width > ReactDom ? ReactDom / 2 : this.width / 2
            }
            var v = this$manager$isKeySorting && React > this.index && React <= this$newIndex
            var b = this$manager$isKeySorting && React < this.index && React >= this$newIndex
            var y = {
              x: 0,
              y: 0
            }
            var /* [auto-meaningful-name] */aD$edgeOffset = a[d].edgeOffset
            if (!E) {
              E = dr(React1, this.container)
              a[d].edgeOffset = E
              if (this$manager$isKeySorting) {
                a[d].boundingClientRect = cr(React1, this$containerScrollDelta)
              }
            }
            var O = d < a.length - 1 && a[d + 1]
            var w = d > 0 && a[d - 1]
            if (O && !O.edgeOffset) {
              O.edgeOffset = dr(O.node, this.container)
              if (this$manager$isKeySorting) {
                O.boundingClientRect = cr(O.node, this$containerScrollDelta)
              }
            }
            if (React !== this.index) {
              if (this$props$transitionDuration) {
                nr(React1, this$props$transitionDuration)
              }
              if (this.axis.x) {
                if (this.axis.y) {
                  if (b || React < this.index && (s + this$windowScrollDelta.left - _.width <= E.left && c + this$windowScrollDelta.top <= E.top + _.height || c + this$windowScrollDelta.top + _.height <= E.top)) {
                    y.x = this.width + this.marginOffset.x
                    if (E.left + y.x > this.containerBoundingRect.width - _.width && O) {
                      y.x = O.edgeOffset.left - E.left
                      y.y = O.edgeOffset.top - E.top
                    }
                    if (null === this.newIndex) {
                      this.newIndex = React
                    }
                  } else {
                    if (v || React > this.index && (s + this$windowScrollDelta.left + _.width >= E.left && c + this$windowScrollDelta.top + _.height >= E.top || c + this$windowScrollDelta.top + _.height >= E.top + g)) {
                      y.x = -(this.width + this.marginOffset.x)
                      if (E.left + y.x < this.containerBoundingRect.left + _.width && w) {
                        y.x = w.edgeOffset.left - E.left
                        y.y = w.edgeOffset.top - E.top
                      }
                      this.newIndex = React
                    }
                  }
                } else {
                  if (v || React > this.index && s + this$windowScrollDelta.left + _.width >= E.left) {
                    y.x = -(this.width + this.marginOffset.x)
                    this.newIndex = React
                  } else {
                    if (b || React < this.index && s + this$windowScrollDelta.left <= E.left + _.width) {
                      y.x = this.width + this.marginOffset.x
                      if (null == this.newIndex) {
                        this.newIndex = React
                      }
                    }
                  }
                }
              } else {
                if (this.axis.y) {
                  if (v || React > this.index && c + this$windowScrollDelta.top + _.height >= E.top) {
                    y.y = -(this.height + this.marginOffset.y)
                    this.newIndex = React
                  } else {
                    if (b || React < this.index && c + this$windowScrollDelta.top <= E.top + _.height) {
                      y.y = this.height + this.marginOffset.y
                      if (null == this.newIndex) {
                        this.newIndex = React
                      }
                    }
                  }
                }
              }
              tr(React1, y)
              a[d].translate = y
            } else {
              if (this$props$hideSortableGhost) {
                this.sortableGhost = React1
                er(React1, {
                  opacity: 0,
                  visibility: "hidden"
                })
              }
            }
          }
          if (null == this.newIndex) {
            this.newIndex = this.index
          }
          if (this$manager$isKeySorting) {
            this.newIndex = this$newIndex
          }
          var C = this$manager$isKeySorting ? this.prevIndex : this$newIndex
          if (this$props$onSortOver && this.newIndex !== C) {
            this$props$onSortOver({
              collection: this.manager.active.collection,
              index: this.index,
              newIndex: this.newIndex,
              oldIndex: C,
              isKeySorting: this$manager$isKeySorting,
              nodes: a,
              helper: this.helper
            })
          }
        }
      }, {
        key: "getWrappedInstance",
        value: function () {
          Module_702(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call")
          return this.wrappedInstance.current
        }
      }, {
        key: "getContainer",
        value: function () {
          var /* [auto-meaningful-name] */this$props$getContainer = this.props.getContainer
          return "function" !== typeof this$props$getContainer ? ReactDom.findDOMNode(this) : this$props$getContainer(r.withRef ? this.getWrappedInstance() : undefined)
        }
      }, {
        key: "render",
        value: function () {
          var t = r.withRef ? this.wrappedInstance : null
          return createElement(Fr.Provider, {
            value: this.sortableContextValue
          }, createElement(e, Module_19.a({
            ref: t
          }, Zn(this.props, Lr))))
        }
      }, {
        key: "helperContainer",
        get: function () {
          var /* [auto-meaningful-name] */this$props$helperContainer = this.props.helperContainer
          return "function" === typeof this$props$helperContainer ? this$props$helperContainer() : this.props.helperContainer || this.document.body
        }
      }, {
        key: "containerScrollDelta",
        get: function () {
          return this.props.useWindowAsScrollContainer ? {
            left: 0,
            top: 0
          } : {
            left: this.scrollContainer.scrollLeft - this.initialScroll.left,
            top: this.scrollContainer.scrollTop - this.initialScroll.top
          }
        }
      }, {
        key: "windowScrollDelta",
        get: function () {
          return {
            left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
            top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
          }
        }
      }
    ])
    return n
  }(Component)
  Module_35.a(t, "displayName", sr("sortableList", e))
  Module_35.a(t, "defaultProps", Mr)
  Module_35.a(t, "propTypes", xr)
  return n
}(function (e) {
  var /* [auto-meaningful-name] */e$screens = e.screens
  var n = Module_295.a(e, ["screens"])
  var /* [auto-meaningful-name] */e$screens$size = e$screens.size
  var o = useRef(null)
  var i = useRef(0)
  var a = function () {
    if (o.current) {
      i.current = o.current.scrollLeft
    }
  }
  var s = function (e) {
    var /* [auto-meaningful-name] */o$current
    if (0 === e.deltaX && 0 !== e.deltaY) {
      e.preventDefault()
      if (!(null === (o$current = o.current) || undefined === o$current)) {
        o$current.scrollBy({
          left: Math.round(e.deltaY) / 2,
          behavior: "smooth"
        })
      }
    }
  }
  useLayoutEffect(function () {
    if (o.current) {
      var /* [auto-meaningful-name] */o$current = o.current
      o.current.scrollLeft = i.current
      o.current.addEventListener("scroll", a)
      o.current.addEventListener("wheel", s)
      return function () {
        e.removeEventListener("scroll", a)
        e.removeEventListener("wheel", s)
      }
    }
  })
  return React.createElement("div", {
    className: Styles_module_css1.list,
    ref: o
  }, e$screens.map(function (e, t) {
    return React.createElement($r, Object.assign({
      key: e.id,
      screen: e,
      index: t,
      screenIndex: t,
      screensSize: e$screens$size
    }, n))
  }))
})
var to = memo(function () {
  var /* [auto-meaningful-name] */n$current
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useRef(null)
  var r = useSelector(function (e) {
    return e.project.screens
  })
  var o = useSelector(function (e) {
    return e.common.stageWidth
  })
  var i = useState(-1)
  var a = Module_10.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useState(0)
  var u = Module_10.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = useState(0)
  var g = Module_10.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useState(false)
  var E = Module_10.a(y, 2)
  var O = E[0]
  var w = E[1]
  var C = useRef()
  var T = useRef(null)
  var A = useSelector(function (e) {
    return e.project.currentScreenIndex
  })
  var j = useSelector(function (e) {
    return e.project.playing
  })
  var R = Module_238.d()
  var k = useSelector(function (e) {
    return e.uiConfig.screenPanel
  }) === Module_18.j.ReadOnly
  var x = useDispatch()
  useEffect(function () {
    var e = document.createElement("div")
    e.id = "_cocoScreenListDragContainer"
    document.body.appendChild(e)
  }, [])
  useEffect(function () {
    if (null === R || undefined === R ? undefined : R.id) {
      setTimeout(function () {
        var e = document.getElementById(R.id)
        if (e) {
          Module_553.a(e, 1).then(function (e) {
            x(Redux_common_actions.Xj(R.id, e))
          }).catch(function (e) {
            return console.error(e)
          })
        }
      }, 100)
    }
  }, [R, x])
  useEffect(function () {
    b(j ? o + Cv : o)
  }, [j, o])
  useEffect(function () {
    var e = function (e) {
      var /* [auto-meaningful-name] */n$current1
      var /* [auto-meaningful-name] */n$current2
      var /* [auto-meaningful-name] */e$target = e.target
      var i = null === (n$current1 = n.current) || undefined === n$current1 ? undefined : n$current1.target
      if (i && !(i.contains(e$target) || e$target.closest(".".concat(Styles_module_css1.deleteScreenDialog)) || e$target.closest(".".concat(Styles_module_css1.snapshotContainer)))) {
        if (!(null === (n$current2 = n.current) || undefined === n$current2)) {
          n$current2.hideContent()
        }
      }
    }
    document.body.addEventListener("click", e)
    document.body.addEventListener("mousedown", e)
    return function () {
      document.body.removeEventListener("click", e)
      document.body.removeEventListener("mousedown", e)
    }
  }, [null === (n$current = n.current) || undefined === n$current ? undefined : n$current.visible])
  useEffect(function () {
    var e = document.getElementById("screen_index_".concat(A))
    if (e) {
      e.scrollIntoView({
        block: "end",
        inline: "nearest"
      })
    }
  }, [A])
  var D = function () {
    if (T.current) {
      p(T.current.scrollLeft)
    }
  }
  var M = function (e) {
    var /* [auto-meaningful-name] */T$current
    if (0 === e.deltaX && 0 !== e.deltaY) {
      e.preventDefault()
      if (!(null === (T$current = T.current) || undefined === T$current)) {
        T$current.scrollBy({
          left: Math.round(e.deltaY) / 2,
          behavior: "smooth"
        })
      }
    }
  }
  useLayoutEffect(function () {
    if (T.current) {
      var /* [auto-meaningful-name] */T$current = T.current
      T.current.addEventListener("scroll", D)
      T.current.addEventListener("wheel", M)
      return function () {
        n$current.removeEventListener("scroll", D)
        n$current.removeEventListener("wheel", M)
      }
    }
  })
  if (!R) {
    return null
  }
  var L = function (e) {
    var n = r.find(function (t) {
      return t.id === e
    })
    if (n) {
      C.current = n
      var o = n.get("title")
      var i = useIntl$formatMessage({
        id: "deleteScreen"
      }) + "“" + Module_190.f(o, 10) + "”?"
      x(Redux_common_actions.zh({
        onClose: B,
        onConfirm: F,
        title: i,
        isDangerous: true,
        content: useIntl$formatMessage({
          id: "deleteScreenTips"
        }),
        allowText: useIntl$formatMessage({
          id: "delete"
        }),
        className: Styles_module_css1.deleteScreenDialog
      }))
    }
  }
  var P = function (e) {
    x(Redux_common_actions.ng(e))
  }
  var B = function () {
    C.current = undefined
  }
  var F = function () {
    var /* [auto-meaningful-name] */C$current
    var t = null === (C$current = C.current) || undefined === C$current ? undefined : C$current.get("id")
    if (t) {
      x(Redux_common_actions.ng(t))
    }
  }
  var G = React.createElement(React.Fragment, null, React.createElement("div", {
    className: Styles_module_css1.closeIconBox,
    onClick: function () {
      var /* [auto-meaningful-name] */n$current1
      if (!(null === (n$current1 = n.current) || undefined === n$current1)) {
        n$current1.hideContent()
      }
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-close"
  })), React.createElement("section", {
    className: Styles_module_css1.popoverBody,
    style: {
      width: v + 2
    },
    "data-html2canvas-ignore": "true"
  }, React.createElement(eo, {
    screens: r,
    editDomIndex: s,
    currentScreenIndex: A,
    readonly: k,
    updateCanEdit: function (e, t) {
      c(e ? t : -1)
    },
    onDeleteIconClick: function (e) {
      if (!function (e, t) {
        return 0 === t.get("widgetIds").length && Module_26.z.isEmptyWorkspace(e.id, t.id)
      }(R, e)) {
        L(e.id)
      } else {
        P(e.id)
      }
    },
    axis: "x",
    onSortEnd: function (e) {
      var /* [auto-meaningful-name] */e$oldIndex = e.oldIndex
      var /* [auto-meaningful-name] */e$newIndex = e.newIndex
      if (e$oldIndex === e$newIndex) {
        x(Redux_common_actions.vg(e$newIndex))
        return void Module_141.a("ScreenItemClick", {
          screenId: r.getIn([e$newIndex, "id"]),
          screenName: r.getIn([e$newIndex, "title"])
        })
      }
      batch(function () {
        var e
        x(Redux_common_actions.Fi(true))
        x(Redux_common_actions.yh(e$oldIndex, e$newIndex))
        x(Redux_common_actions.vg(e$newIndex))
        if (!(null === (e = Module_26.g.getToolbox()) || undefined === e)) {
          e.refresh_selection()
        }
      })
    },
    helperClass: Styles_module_css1.dragItem,
    helperContainer: document.getElementById("_cocoScreenListDragContainer") || document.body,
    useDragHandle: true
  }), !k && React.createElement("div", {
    className: Styles_module_css1.addScreen,
    onClick: function () {
      if (r.size > 98) {
        x(Redux_common_actions.mj({
          showPrefixIcon: false,
          message: useIntl$formatMessage({
            id: "screeMaxSize"
          })
        }))
      } else {
        x(Redux_common_actions.Hf())
        c(r.size)
      }
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-add2",
    className: Styles_module_css1.addBtn
  }))))
  var W = function (e) {
    x(Redux_common_actions.vg(e))
  }
  return React.createElement("div", {
    className: Styles_module_css1.wrapper,
    style: {
      left: j ? 0 : Cv,
      width: v
    }
  }, React.createElement("div", {
    className: Classnames(Styles_module_css1.stageMask, O && Styles_module_css1.visible)
  }), React.createElement(Shared_ui_components_index.r, {
    content: G,
    onOpen: function () {
      w(true)
    },
    onHide: function () {
      w(false)
    },
    autoClose: false,
    ref: n
  }, React.createElement("div", {
    className: Classnames(Styles_module_css1.screenIconBox, !j && Styles_module_css1.line)
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-screen-manage",
    className: Styles_module_css1.screenIcon
  }), React.createElement("span", {
    className: Styles_module_css1.screenText
  }, useIntl$formatMessage({
    id: "screenManage"
  })))), !j && React.createElement("div", {
    className: Styles_module_css1.screenIndexBox
  }, React.createElement("div", {
    className: Classnames(Styles_module_css1.prev, d <= 0 && Styles_module_css1.hide),
    onClick: function () {
      var /* [auto-meaningful-name] */T$current
      if (!(null === (T$current = T.current) || undefined === T$current)) {
        T$current.scrollBy({
          left: -190,
          behavior: "smooth"
        })
      }
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-pick-up",
    className: Styles_module_css1.prevIcon
  })), React.createElement("div", {
    className: Classnames(Styles_module_css1.next, d + v - 108 >= 38 * r.size && Styles_module_css1.hide),
    onClick: function () {
      var /* [auto-meaningful-name] */T$current
      if (!(null === (T$current = T.current) || undefined === T$current)) {
        T$current.scrollBy({
          left: 190,
          behavior: "smooth"
        })
      }
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-pick-up",
    className: Styles_module_css1.nextIcon
  })), React.createElement("div", {
    className: Styles_module_css1.screenIndexList,
    ref: T
  }, r.map(function (e, t) {
    return React.createElement("div", {
      id: "screen_index_".concat(t),
      className: Classnames(Styles_module_css1.index, A === t && Styles_module_css1.active),
      key: t,
      onClick: W.bind(null, t)
    }, t + 1)
  }))))
})
export { Xr }
export { to }
