/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-26
 */

import * as React from "react"

import { Pn } from "../../../../../unrestored/shared/1571/2636/index__part-24"
import { Xn, Zn, Jn, er, tr, nr, rr, or, ar, sr, cr, lr, ur, dr, pr, hr, mr, gr, wr, Nr, Rr, kr, xr, Dr, Mr, Lr, Pr, Br, Fr, Gr, Wr } from "../../../../../unrestored/shared/1571/2636/index__part-25"
import { widgetListWidth } from ".."
import /* [auto-meaningful-name] */Unrestored_shared_1571_2636_702 from "../../../../../unrestored/shared/1571/2636/702"
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
import * as CommonActions from "../../../redux/common/actions"
import { asyncCreateProjectScreenAction, asyncRemoveProjectScreenAction, asyncSetProjectCurrentScreenIndexAction, moveProjectScreenAction, setProjectModifiedAction, showCommonToastInfoAction, updateProjectScreenSnapshotAction } from "../../../redux/common/actions"
import { IconFont, Popover } from "../../../../shared/ui/components"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../../unrestored/shared/1571/2636/11"
import classNames from "classnames"
import { useIntl } from "react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import { batch, useDispatch, useSelector } from "react-redux"
import * as /* [auto-meaningful-name] */ReactDom from "react-dom"
import * as /* [auto-meaningful-name] */Module_553 from /* 553 */"../../../../../unrestored/shared/1571/2636/553"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../unrestored/shared/1571/2636/238"
import styles from "./styles.module.css"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../../../../../unrestored/shared/1571/2636/53"
import /* [auto-meaningful-name] */Module_1511 from /* 1511 */"../../../../../unrestored/shared/1571/2636/1511"
import type { IPopoverRef } from "../../../../shared/ui/components/Popover"

const WidgetInput = React.forwardRef(function (e, t) {
  var n = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$checkValueIsRepeat = e.checkValueIsRepeat
  var /* [auto-meaningful-name] */e$renameInputValue = e.renameInputValue
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$value = e.value
  var l = React.useRef(e$value)
  var u = React.useState(e$value)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = React.useState(false)
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  var E = React.useRef(null)
  var O = React.useRef(true)
  var w = React.useRef(null)
  React.useImperativeHandle(t, function () {
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
  React.useEffect(function () {
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
      var t = Module_190.b(w$current$value)
      if (t > Module_53.i) {
        C()
      }
      if (O.current) {
        if (!w$current$value.match(Module_53.D)) {
          m(l.current)
          return void C()
        }
        y(false)
        var /* [auto-meaningful-name] */l$current = l.current
        var r = Module_190.b(l$current)
        if (t <= Module_53.i || t < r) {
          m(w$current$value)
          return void (l.current = w$current$value)
        }
        if (t > r && r >= Module_53.i) {
          m(l.current)
          return void C()
        }
        y(false)
        for (var o = -1, i = 0; i < w$current$value.length; i++) {
          if (w$current$value[i] !== l$current[i]) {
            o = i
            break
          }
        }
        if (o > -1) {
          for (var a = l$current, s = o; s < w$current$value.length; s++) {
            var c = l$current.slice(0, o) + w$current$value.slice(o, s) + l$current.slice(o)
            if (Module_190.b(c) > Module_53.i) {
              break
            }
            a = c
          }
          m(a)
          l.current = a
        }
      } else {
        m(w$current$value)
      }
    }
  }
  return <input
    className={classNames(Module_1511.input, e$className, {
      "coco-input-warning-animation": b
    })}
    ref={w}
    value={p}
    onBlur={function () {
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
        n(CommonActions.showCommonToastInfoAction({
          message: useIntl$formatMessage({
            id: "blankInputValue"
          }),
          type: "error",
          showCloseIcon: false
        }))
        m(e$value)
      }
    }}
    onChange={T}
    onCompositionEnd={function () {
      O.current = true
      T()
    }}
    onCompositionStart={function () {
      O.current = false
    }}
    onKeyDown={function (e) {
      var /* [auto-meaningful-name] */w$current = w.current
      if (w$current && 13 === e.keyCode) {
        w$current.blur()
      }
    }}
  />
})
var Qr = function (e) {
  var /* [auto-meaningful-name] */e$screenId = e.screenId
  var n = useSelector(function (e) {
    return e.oTState.onlineCooperationUserList
  })
  var r = useSelector(function (e) {
    return e.oTState.userFocusOTInfoList
  })
  var o = React.useState([])
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  React.useEffect(function () {
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
  return <div
    className={styles.collaboration}
    title={c}
  >
    <IconFont type="icon-collaborate" />
  </div>
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
      Module_35.a(Module_142.a(Module_142.a(t)), "wrappedInstance", React.createRef())
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
          Unrestored_shared_1571_2636_702(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call")
          return this.wrappedInstance.current
        }
      }, {
        key: "render",
        value: function () {
          var t = r.withRef ? this.wrappedInstance : null
          return React.createElement(e, Module_19.a({
            ref: t
          }, this.props))
        }
      }
    ])
    return n
  }(React.Component)
  Module_35.a(t, "displayName", sr("sortableHandle", e))
  return n
}(function (e) {
  var /* [auto-meaningful-name] */e$screen = e.screen
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$title = e.title
  var o = useDispatch()
  return <div
    className={styles.snapshotContainer}
    onClick={function () {
      o(CommonActions.vg(e$index))
    }.bind(null, e$index)}
  >
    {e$screen.snapshot && <img
      src={e$screen.snapshot}
      className={styles.snapshot}
      alt={e$title}
      draggable={false}
    />}
  </div>
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
  const formatMessage = useIntl().formatMessage
  const dispatch = useDispatch()
  var g = React.useRef(null)
  var v = React.useRef(null)
  React.useEffect(function () {
    if (e$selected && v.current) {
      v.current.scrollIntoView()
    }
  }, [e$selected])
  React.useEffect(function () {
    var /* [auto-meaningful-name] */g$current
    var /* [auto-meaningful-name] */_g$current
    if (e$canEdit) {
      if (!(null === g || undefined === g || null === (g$current = g.current) || undefined === g$current)) {
        g$current.focus()
      }
      if (!(null === g || undefined === g || null === (_g$current = g.current) || undefined === _g$current)) {
        _g$current.select()
      }
    }
  }, [e$canEdit])
  return <div
    ref={v}
    className={classNames(styles.item, Module_11.a({}, styles.selected, e$selected))}
    key={e$screen.id}
  >
    {<div
      className={styles.view}
    >
      {<Zr
        screen={e$screen}
        index={c}
        title={e$screen$title}
      />}
      {<>
        {!e$canEdit && <>
          {e$showDeleteIcon && !e$readonly && <div
            className={styles.delete}
            onClick={function (e) {
              e.stopPropagation()
              e$onDeleteIconClick(e$screen)
            }}
          >
            {<IconFont
              type={"icon-delete-bold"}
            />}
          </div>}
          {!e$readonly && <div
            className={styles.copy}
            onClick={(event) => {
              if (l.size > 98) {
                dispatch(CommonActions.showCommonToastInfoAction({
                  showPrefixIcon: false,
                  message: formatMessage({
                    id: "screeMaxSize"
                  })
                }))
              } else {
                event.stopPropagation()
                dispatch(CommonActions.vg(c))
                dispatch(CommonActions.Df(e$screen.id))
              }
            }}
          >
            <IconFont type="icon-copy"></IconFont>
          </div>}
          {!!u && <Qr
            screenId={e$screen.id}
          />}
        </>}
        {<div
          className={styles.index}
        >
          {c + 1}
        </div>}
      </>}
    </div>}
    {<div
      className={styles.titleBox}
    >
      {e$canEdit && !e$readonly ? <WidgetInput
        value={e$screen$title}
        checkValueIsRepeat={function (e) {
          return Module_9.r(e$screen.id, e)
        }}
        onChange={function (e) {
          var n
          dispatch(CommonActions.Jg(e$screen.id, "title", e))
          if (!(null === (n = Module_26.g.getToolbox()) || undefined === n)) {
            n.refresh_selection()
          }
        }}
        ref={g}
        renameInputValue={function (e) {
          var n
          var r = Module_9.Ob(e$screen.id, e, l)
          dispatch(CommonActions.Jg(e$screen.id, "title", r))
          if (!(null === (n = Module_26.g.getToolbox()) || undefined === n)) {
            n.refresh_selection()
          }
          return r
        }}
        onBlur={function () {
          e$updateCanEdit(false)
        }}
        className={styles.editName}
      /> : <p
        onClick={function (e) {
          if (!e$readonly) {
            e$updateCanEdit(true)
          }
        }}
        style={{
          display: e$canEdit ? "none" : "block"
        }}
        className={styles.canNotEdit}
      >
        {e$screen$title}
      </p>}
    </div>}
  </div>
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
      Module_35.a(Module_142.a(Module_142.a(t)), "wrappedInstance", React.createRef())
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
          Unrestored_shared_1571_2636_702(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call")
          return this.wrappedInstance.current
        }
      }, {
        key: "render",
        value: function () {
          var t = r.withRef ? this.wrappedInstance : null
          return React.createElement(e, Module_19.a({
            ref: t
          }, Zn(this.props, Wr)))
        }
      }
    ])
    return n
  }(React.Component)
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

var InnerScreenList = function (e) {
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
            var /* [auto-meaningful-name] */i$sortableInfo$index = i$sortableInfo.index
            var /* [auto-meaningful-name] */i$sortableInfo$collection = i$sortableInfo.collection
            if (i$sortableInfo.disabled) {
              return
            }
            if (t$props$useDragHandle && !rr(e.target, Rr)) {
              return
            }
            t.manager.active = {
              collection: i$sortableInfo$collection,
              index: i$sortableInfo$index
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
                var /* [auto-meaningful-name] */n$node$sortableInfo$index = n$node.sortableInfo.index
                var r = ar(n$node)
                var o = gr(t.container)
                var l = t.scrollContainer.getBoundingClientRect()
                var m = t$props$getHelperDimensions({
                  index: n$node$sortableInfo$index,
                  node: n$node,
                  collection: n$collection
                })
                t.node = n$node
                t.margin = r
                t.gridGap = o
                t.width = m.width
                t.height = m.height
                t.marginOffset = {
                  x: t.margin.left + t.margin.right + t.gridGap.x,
                  y: Math.max(t.margin.top, t.margin.bottom, t.gridGap.y)
                }
                t.boundingClientRect = n$node.getBoundingClientRect()
                t.containerBoundingRect = l
                t.index = n$node$sortableInfo$index
                t.newIndex = n$node$sortableInfo$index
                t.axis = {
                  x: t$props$axis.indexOf("x") >= 0,
                  y: t$props$axis.indexOf("y") >= 0
                }
                t.offsetEdge = dr(n$node, t.container)
                t.initialOffset = lr(t$manager$isKeySorting ? Pn({}, e, {
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
                t.helper = t.helperContainer.appendChild(Nr(n$node))
                er(t.helper, {
                  boxSizing: "border-box",
                  height: "".concat(t.height, "px"),
                  left: "".concat(t.boundingClientRect.left - r.left, "px"),
                  pointerEvents: "none",
                  position: "fixed",
                  top: "".concat(t.boundingClientRect.top - r.top, "px"),
                  width: "".concat(t.width, "px")
                })
                if (t$manager$isKeySorting) {
                  t.helper.focus()
                }
                if (t$props$hideSortableGhost) {
                  t.sortableGhost = n$node
                  er(n$node, {
                    opacity: 0,
                    visibility: "hidden"
                  })
                }
                t.minTranslate = {}
                t.maxTranslate = {}
                if (t$manager$isKeySorting) {
                  var g = t$props$useWindowAsScrollContainer ? {
                    top: 0,
                    left: 0,
                    width: t.contentWindow.innerWidth,
                    height: t.contentWindow.innerHeight
                  } : t.containerBoundingRect
                  var /* [auto-meaningful-name] */g$top = g.top
                  var /* [auto-meaningful-name] */g$left = g.left
                  var /* [auto-meaningful-name] */g$width = g.width
                  var y = g$top + g.height
                  var E = g$left + g$width
                  if (t.axis.x) {
                    t.minTranslate.x = g$left - t.boundingClientRect.left
                    t.maxTranslate.x = E - (t.boundingClientRect.left + t.width)
                  }
                  if (t.axis.y) {
                    t.minTranslate.y = g$top - t.boundingClientRect.top
                    t.maxTranslate.y = y - (t.boundingClientRect.top + t.height)
                  }
                } else {
                  if (t.axis.x) {
                    t.minTranslate.x = (t$props$useWindowAsScrollContainer ? 0 : l.left) - t.boundingClientRect.left - t.width / 2
                    t.maxTranslate.x = (t$props$useWindowAsScrollContainer ? t.contentWindow.innerWidth : l.left + l.width) - t.boundingClientRect.left - t.width / 2
                  }
                  if (t.axis.y) {
                    t.minTranslate.y = (t$props$useWindowAsScrollContainer ? 0 : l.top) - t.boundingClientRect.top - t.height / 2
                    t.maxTranslate.y = (t$props$useWindowAsScrollContainer ? t.contentWindow.innerHeight : l.top + l.height) - t.boundingClientRect.top - t.height / 2
                  }
                }
                if (t$props$helperClass) {
                  t$props$helperClass.split(" ").forEach(function (e) {
                    return t.helper.classList.add(e)
                  })
                }
                t.listenerNode = e.touches ? e.target : t.contentWindow
                if (t$manager$isKeySorting) {
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
                  sortingIndex: n$node$sortableInfo$index
                })
                if (t$props$onSortStart) {
                  t$props$onSortStart({
                    node: n$node,
                    index: n$node$sortableInfo$index,
                    collection: n$collection,
                    isKeySorting: t$manager$isKeySorting,
                    nodes: t.manager.getOrderedRefs(),
                    helper: t.helper
                  }, e)
                }
                if (t$manager$isKeySorting) {
                  t.keyMove(0)
                }
              }
              var /* [auto-meaningful-name] */t$props = t.props
              var /* [auto-meaningful-name] */t$props$axis = t$props.axis
              var /* [auto-meaningful-name] */t$props$getHelperDimensions = t$props.getHelperDimensions
              var /* [auto-meaningful-name] */t$props$helperClass = t$props.helperClass
              var /* [auto-meaningful-name] */t$props$hideSortableGhost = t$props.hideSortableGhost
              var /* [auto-meaningful-name] */t$props$updateBeforeSortStart = t$props.updateBeforeSortStart
              var /* [auto-meaningful-name] */t$props$onSortStart = t$props.onSortStart
              var /* [auto-meaningful-name] */t$props$useWindowAsScrollContainer = t$props.useWindowAsScrollContainer
              var /* [auto-meaningful-name] */n$node = n.node
              var /* [auto-meaningful-name] */n$collection = n.collection
              var /* [auto-meaningful-name] */t$manager$isKeySorting = t.manager.isKeySorting
              var m = function () {
                if ("function" === typeof t$props$updateBeforeSortStart) {
                  t._awaitingUpdateBeforeSortStart = true
                  var n = Br(function () {
                    var /* [auto-meaningful-name] */n$node$sortableInfo$index = n$node.sortableInfo.index
                    return Promise.resolve(t$props$updateBeforeSortStart({
                      collection: n$collection,
                      index: n$node$sortableInfo$index,
                      node: n$node,
                      isKeySorting: t$manager$isKeySorting
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
          tr(d$node, null)
          nr(d$node, null)
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
          var u = s.boundingClientRect || cr(s$node, t$containerScrollDelta)
          var d = s.translate || {
            x: 0,
            y: 0
          }
          var p = u.top + d.y - t$containerScrollDelta.top
          var f = u.left + d.x - t$containerScrollDelta.left
          var h = t$newIndex < o
          var m = h && t.axis.x ? s$node.offsetWidth - t.width : 0
          var g = h && t.axis.y ? s$node.offsetHeight - t.height : 0
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
      t.wrappedInstance = React.createRef()
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
            var /* [auto-meaningful-name] */aD$node$sortableInfo$index = aD$node.sortableInfo.index
            var /* [auto-meaningful-name] */aD$node$offsetWidth = aD$node.offsetWidth
            var /* [auto-meaningful-name] */aD$node$offsetHeight = aD$node.offsetHeight
            var _ = {
              height: this.height > aD$node$offsetHeight ? aD$node$offsetHeight / 2 : this.height / 2,
              width: this.width > aD$node$offsetWidth ? aD$node$offsetWidth / 2 : this.width / 2
            }
            var v = this$manager$isKeySorting && aD$node$sortableInfo$index > this.index && aD$node$sortableInfo$index <= this$newIndex
            var b = this$manager$isKeySorting && aD$node$sortableInfo$index < this.index && aD$node$sortableInfo$index >= this$newIndex
            var y = {
              x: 0,
              y: 0
            }
            var /* [auto-meaningful-name] */aD$edgeOffset = a[d].edgeOffset
            if (!aD$edgeOffset) {
              aD$edgeOffset = dr(aD$node, this.container)
              a[d].edgeOffset = aD$edgeOffset
              if (this$manager$isKeySorting) {
                a[d].boundingClientRect = cr(aD$node, this$containerScrollDelta)
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
            if (aD$node$sortableInfo$index !== this.index) {
              if (this$props$transitionDuration) {
                nr(aD$node, this$props$transitionDuration)
              }
              if (this.axis.x) {
                if (this.axis.y) {
                  if (b || aD$node$sortableInfo$index < this.index && (s + this$windowScrollDelta.left - _.width <= aD$edgeOffset.left && c + this$windowScrollDelta.top <= aD$edgeOffset.top + _.height || c + this$windowScrollDelta.top + _.height <= aD$edgeOffset.top)) {
                    y.x = this.width + this.marginOffset.x
                    if (aD$edgeOffset.left + y.x > this.containerBoundingRect.width - _.width && O) {
                      y.x = O.edgeOffset.left - aD$edgeOffset.left
                      y.y = O.edgeOffset.top - aD$edgeOffset.top
                    }
                    if (null === this.newIndex) {
                      this.newIndex = aD$node$sortableInfo$index
                    }
                  } else {
                    if (v || aD$node$sortableInfo$index > this.index && (s + this$windowScrollDelta.left + _.width >= aD$edgeOffset.left && c + this$windowScrollDelta.top + _.height >= aD$edgeOffset.top || c + this$windowScrollDelta.top + _.height >= aD$edgeOffset.top + aD$node$offsetHeight)) {
                      y.x = -(this.width + this.marginOffset.x)
                      if (aD$edgeOffset.left + y.x < this.containerBoundingRect.left + _.width && w) {
                        y.x = w.edgeOffset.left - aD$edgeOffset.left
                        y.y = w.edgeOffset.top - aD$edgeOffset.top
                      }
                      this.newIndex = aD$node$sortableInfo$index
                    }
                  }
                } else {
                  if (v || aD$node$sortableInfo$index > this.index && s + this$windowScrollDelta.left + _.width >= aD$edgeOffset.left) {
                    y.x = -(this.width + this.marginOffset.x)
                    this.newIndex = aD$node$sortableInfo$index
                  } else {
                    if (b || aD$node$sortableInfo$index < this.index && s + this$windowScrollDelta.left <= aD$edgeOffset.left + _.width) {
                      y.x = this.width + this.marginOffset.x
                      if (null == this.newIndex) {
                        this.newIndex = aD$node$sortableInfo$index
                      }
                    }
                  }
                }
              } else {
                if (this.axis.y) {
                  if (v || aD$node$sortableInfo$index > this.index && c + this$windowScrollDelta.top + _.height >= aD$edgeOffset.top) {
                    y.y = -(this.height + this.marginOffset.y)
                    this.newIndex = aD$node$sortableInfo$index
                  } else {
                    if (b || aD$node$sortableInfo$index < this.index && c + this$windowScrollDelta.top <= aD$edgeOffset.top + _.height) {
                      y.y = this.height + this.marginOffset.y
                      if (null == this.newIndex) {
                        this.newIndex = aD$node$sortableInfo$index
                      }
                    }
                  }
                }
              }
              tr(aD$node, y)
              a[d].translate = y
            } else {
              if (this$props$hideSortableGhost) {
                this.sortableGhost = aD$node
                er(aD$node, {
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
          Unrestored_shared_1571_2636_702(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call")
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
          return <Fr.Provider
            value={this.sortableContextValue}
          >
            {React.createElement(e, Module_19.a({
              ref: t
            }, Zn(this.props, Lr)))}
          </Fr.Provider>
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
  }(React.Component)
  Module_35.a(t, "displayName", sr("sortableList", e))
  Module_35.a(t, "defaultProps", Mr)
  Module_35.a(t, "propTypes", xr)
  return n
}(function (e) {
  var /* [auto-meaningful-name] */e$screens = e.screens
  var n = Module_295.a(e, ["screens"])
  var /* [auto-meaningful-name] */e$screens$size = e$screens.size
  var o = React.useRef(null)
  var i = React.useRef(0)
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
  React.useLayoutEffect(function () {
    if (o.current) {
      var /* [auto-meaningful-name] */o$current = o.current
      o.current.scrollLeft = i.current
      o.current.addEventListener("scroll", a)
      o.current.addEventListener("wheel", s)
      return function () {
        o$current.removeEventListener("scroll", a)
        o$current.removeEventListener("wheel", s)
      }
    }
  })
  return <div
    className={styles.list}
    ref={o}
  >
    {e$screens.map(function (e, t) {
      return React.createElement($r, Object.assign({
        key: e.id,
        screen: e,
        index: t,
        screenIndex: t,
        screensSize: e$screens$size
      }, n))
    })}
  </div>
})

export const ScreenList = React.memo(() => {

  const { formatMessage } = useIntl()

  const popoverRef = React.useRef<IPopoverRef>(null)

  const screens = useSelector((state) => state.project.screens)
  const stageWidth = useSelector((state) => state.common.stageWidth)

  const [editDomIndex, setEditDomIndex] = React.useState(-1)
  const [d, p] = React.useState(0)
  const [width, setWidth] = React.useState(0)
  const [stageMaskVisible, setStageMaskVisible] = React.useState(false)
  const screenToDelete = React.useRef()
  const screenIndexListElementRef = React.useRef<HTMLDivElement>(null)

  const currentScreenIndex = useSelector((state) => state.project.currentScreenIndex)
  const playing = useSelector((state) => state.project.playing)
  const currentScreen = Module_238.d()
  const isReadonly = useSelector((state) => state.uiConfig.screenPanel) === Module_18.j.ReadOnly

  const dispatch = useDispatch()

  React.useEffect(() => {
    const element = document.createElement("div")
    element.id = "_cocoScreenListDragContainer"
    document.body.appendChild(element)
  }, [])

  React.useEffect(() => {
    if (!currentScreen?.id) {
      return
    }
    setTimeout(() => {
      const currentScreenElement = document.getElementById(currentScreen.id)
      if (!currentScreenElement) {
        return
      }
      Module_553.a(currentScreenElement, 1)
        .then((screenSnapshot) => {
          dispatch(updateProjectScreenSnapshotAction(currentScreen.id, screenSnapshot))
        })
        .catch((error) => console.error(error))
    }, 100)
  }, [currentScreen, dispatch])

  React.useEffect(() => {
    setWidth(playing ? stageWidth + widgetListWidth : stageWidth)
  }, [playing, stageWidth])

  React.useEffect(() => {
    function close(event: PointerEvent | MouseEvent) {
      const { target } = event as (PointerEvent | MouseEvent) & { target: Element }
      const popoverElement = popoverRef.current?.target
      if (popoverElement && !(
        popoverElement.contains(target) ||
        target.closest(`.${styles.deleteScreenDialog}`) ||
        target.closest(`.${styles.snapshotContainer}`)
      )) {
        popoverRef.current?.hideContent()
      }
    }
    document.body.addEventListener("click", close)
    document.body.addEventListener("mousedown", close)
    return () => {
      document.body.removeEventListener("click", close)
      document.body.removeEventListener("mousedown", close)
    }
  }, [popoverRef.current?.visible])

  React.useEffect(function () {
    const screenElement = document.getElementById(`screen_index_${currentScreenIndex}`)
    if (screenElement) {
      screenElement.scrollIntoView({
        block: "end",
        inline: "nearest"
      })
    }
  }, [currentScreenIndex])

  function handleScroll() {
    if (screenIndexListElementRef.current) {
      p(screenIndexListElementRef.current.scrollLeft)
    }
  }

  function handleWheel(event: WheelEvent) {
    if (event.deltaX === 0 && event.deltaY !== 0) {
      event.preventDefault()
      screenIndexListElementRef.current?.scrollBy({
        left: Math.round(event.deltaY) / 2,
        behavior: "smooth"
      })
    }
  }

  React.useLayoutEffect(() => {
    if (!screenIndexListElementRef.current) {
      return
    }
    const screenIndexListElement = screenIndexListElementRef.current
    screenIndexListElementRef.current.addEventListener("scroll", handleScroll)
    screenIndexListElementRef.current.addEventListener("wheel", handleWheel)
    return function () {
      screenIndexListElement.removeEventListener("scroll", handleScroll)
      screenIndexListElement.removeEventListener("wheel", handleWheel)
    }
  })

  if (!currentScreen) {
    return null
  }

  function deleteScreenConfirm(id: string) {
    const screen = screens.find((screen)  => screen.id === id)
    if (!screen) {
      return
    }
    screenToDelete.current = screen
    const title = screen.get("title")
    const message = formatMessage({ id: "deleteScreen" }) + "“" + Module_190.f(title, 10) + "”?"
    dispatch(CommonActions.openConfirmDialogAction({
      onClose: cancelDeleteScreen,
      onConfirm: confirmDeleteScreen,
      title: message,
      isDangerous: true,
      content: formatMessage({
        id: "deleteScreenTips"
      }),
      allowText: formatMessage({
        id: "delete"
      }),
      className: styles.deleteScreenDialog
    }))
  }

  function deleteScreenNoConfirm(id) {
    dispatch(asyncRemoveProjectScreenAction(id))
  }

  function cancelDeleteScreen() {
    screenToDelete.current = undefined
  }

  function confirmDeleteScreen() {
    const id = screenToDelete.current?.get("id")
    if (id) {
      dispatch(asyncRemoveProjectScreenAction(id))
    }
  }

  const PopoverContent = <>
    <div
      className={styles.closeIconBox}
      onClick={() => { popoverRef.current?.hideContent() }}
    >
      <IconFont type="icon-close" />
    </div>
    <section
      className={styles.popoverBody}
      style={{ width: width + 2 }}
      data-html2canvas-ignore="true"
    >
      <InnerScreenList
        screens={screens}
        editDomIndex={editDomIndex}
        currentScreenIndex={currentScreenIndex}
        readonly={isReadonly}
        updateCanEdit={(e, t) => { setEditDomIndex(e ? t : -1) }}
        onDeleteIconClick={(screen) => {
          if (
            screen.get("widgetIds").length === 0 &&
            Module_26.z.isEmptyWorkspace(currentScreen.id, screen.id)
          ) {
            deleteScreenNoConfirm(screen.id)
          } else {
            deleteScreenConfirm(screen.id)
          }
        }}
        axis="x"
        onSortEnd={({ oldIndex, newIndex }) => {
          if (oldIndex === newIndex) {
            dispatch(asyncSetProjectCurrentScreenIndexAction(newIndex))
            Module_141.a("ScreenItemClick", {
              screenId: screens.getIn([newIndex, "id"]),
              screenName: screens.getIn([newIndex, "title"])
            })
            return
          }
          batch(() => {
            dispatch(setProjectModifiedAction(true))
            dispatch(moveProjectScreenAction(oldIndex, newIndex))
            dispatch(asyncSetProjectCurrentScreenIndexAction(newIndex))
            Module_26.g.getToolbox()?.refresh_selection()
          })
        }}
        helperClass={styles.dragItem}
        helperContainer={document.getElementById("_cocoScreenListDragContainer") || document.body}
        useDragHandle={true}
      />
      {!isReadonly && <div
        className={styles.addScreen}
        onClick={function () {
          if (screens.size > 98) {
            dispatch(showCommonToastInfoAction({
              showPrefixIcon: false,
              message: formatMessage({ id: "screeMaxSize" })
            }))
          } else {
            dispatch(asyncCreateProjectScreenAction())
            setEditDomIndex(screens.size)
          }
        }}
      >
        <IconFont type="icon-add2" className={styles.addBtn} />
      </div>}
    </section>
  </>

  function setCurrentScreenIndex(index: number) {
    dispatch(asyncSetProjectCurrentScreenIndexAction(index))
  }

  return <div
    className={styles.wrapper}
    style={{
      left: playing ? 0 : widgetListWidth,
      width
    }}
  >
    <div className={classNames(styles.stageMask, stageMaskVisible && styles.visible)} />
    <Popover
      content={PopoverContent}
      onOpen={() => { setStageMaskVisible(true) }}
      onHide={() => { setStageMaskVisible(false) }}
      autoClose={false}
      ref={popoverRef}
    >
      <div
        className={classNames(styles.screenIconBox, !playing && styles.line)}
      >
        <IconFont type="icon-screen-manage" className={styles.screenIcon} />
        <span className={styles.screenText}>{formatMessage({ id: "screenManage" })}</span>
      </div>
    </Popover>
    {!playing && <div className={styles.screenIndexBox}>
      <div
        className={classNames(styles.prev, d <= 0 && styles.hide)}
        onClick={() => {
          screenIndexListElementRef.current?.scrollBy({
            left: -190,
            behavior: "smooth"
          })
        }}
      >
        <IconFont type="icon-pick-up" className={styles.prevIcon} />
      </div>
      <div
        className={classNames(styles.next, d + width - 108 >= 38 * screens.size && styles.hide)}
        onClick={() => {
          screenIndexListElementRef.current?.scrollBy({
            left: 190,
            behavior: "smooth"
          })
        }}
      >
        <IconFont type="icon-pick-up" className={styles.nextIcon} />
      </div>
      <div className={styles.screenIndexList} ref={screenIndexListElementRef}>
        {screens.map((__screen, index) =>  <div
          id={`screen_index_${index}`}
          className={classNames(styles.index, currentScreenIndex === index && styles.active)}
          key={index}
          onClick={setCurrentScreenIndex.bind(null, index)}
        >{index + 1}</div>)}
      </div>
    </div>}
  </div>
})

export { WidgetInput as Xr }
