/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：269__part-6
 */

"use strict"

import { I } from "./index__part-2"
import { Ae } from "./index__part-5"
import * as /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import * as /* [auto-meaningful-name] */Module_2684 from /* 2684 */"../../../552/1214/316/2684/index"
import * as /* [auto-meaningful-name] */Module_391 from /* 391 */"./391"
import * as /* [auto-meaningful-name] */Module_107 from /* 107 */"../../../107"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../../../40/index"
import * as /* [auto-meaningful-name] */Module_690 from /* 690 */"../../../552/1214/690/index"
import * as /* [auto-meaningful-name] */Module_287 from /* 287 */"../../../552/1214/316/287"
import * as /* [auto-meaningful-name] */Module_233 from /* 233 */"../699/233"
import * as /* [auto-meaningful-name] */Module_1547 from /* 1547 */"./1547"
import * as /* [auto-meaningful-name] */Module_154 from /* 154 */"../699/154/index"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../54"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_98 from /* 98 */"../98"
import { forwardRef, useRef, Children, isValidElement, cloneElement, createElement, useState, useCallback, useImperativeHandle, useEffect, Fragment } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_697 from /* 697 */"./697"
var ve = {
  vertical: "top",
  horizontal: "right"
}
var me = {
  vertical: "top",
  horizontal: "left"
}
var ye = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$autoFocus = e.autoFocus
  var r = undefined === e$autoFocus || e$autoFocus
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$disableAutoFocusItem = e.disableAutoFocusItem
  var f = undefined !== e$disableAutoFocusItem && e$disableAutoFocusItem
  var /* [auto-meaningful-name] */e$MenuListProps = e.MenuListProps
  var h = undefined === e$MenuListProps ? {} : e$MenuListProps
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$onEntering = e.onEntering
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$PaperProps = e.PaperProps
  var v = undefined === e$PaperProps ? {} : e$PaperProps
  var /* [auto-meaningful-name] */e$PopoverClasses = e.PopoverClasses
  var /* [auto-meaningful-name] */e$transitionDuration = e.transitionDuration
  var b = undefined === e$transitionDuration ? "auto" : e$transitionDuration
  var /* [auto-meaningful-name] */e$TransitionProps = e.TransitionProps
  var /* [auto-meaningful-name] */E$TransitionPropsUndefinedE$TransitionPropsE$TransitionProps$onEntering = (e$TransitionProps = undefined === e$TransitionProps ? {} : e$TransitionProps).onEntering
  var x = Module_54.a(e$TransitionProps, ["onEntering"])
  var /* [auto-meaningful-name] */e$variant = e.variant
  var O = undefined === e$variant ? "selectedMenu" : e$variant
  var k = Module_54.a(e, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"])
  var S = Module_690.a()
  var T = r && !f && e$open
  var B = useRef(null)
  var D = useRef(null)
  var I = -1
  Children.map(e$children, function (e, t) {
    if (isValidElement(e)) {
      if (!e.props.disabled) {
        if ("menu" !== O && e.props.selected || -1 === I) {
          I = t
        }
      }
    }
  })
  var R = Children.map(e$children, function (e, t) {
    return t === I ? cloneElement(e, {
      ref: function (t) {
        D.current = ReactDom.findDOMNode(t)
        Module_697.a(e.ref, t)
      }
    }) : e
  })
  return createElement(Module_2684.a, Module_19.a({
    getContentAnchorEl: function () {
      return D.current
    },
    classes: e$PopoverClasses,
    onClose: e$onClose,
    TransitionProps: Module_19.a({
      onEntering: function (e, t) {
        if (B.current) {
          B.current.adjustStyleForScrollbar(e, S)
        }
        if (e$onEntering) {
          e$onEntering(e, t)
        }
        if (E$TransitionPropsUndefinedE$TransitionPropsE$TransitionProps$onEntering) {
          E$TransitionPropsUndefinedE$TransitionPropsE$TransitionProps$onEntering(e, t)
        }
      }
    }, x),
    anchorOrigin: "rtl" === S.direction ? ve : me,
    transformOrigin: "rtl" === S.direction ? ve : me,
    PaperProps: Module_19.a({}, v, {
      classes: Module_19.a({}, v.classes, {
        root: e$classes.paper
      })
    }),
    open: e$open,
    ref: t,
    transitionDuration: b
  }, k), createElement(Ae, Module_19.a({
    onKeyDown: function (e) {
      if ("Tab" === e.key) {
        e.preventDefault()
        if (e$onClose) {
          e$onClose(e, "tabKeyDown")
        }
      }
    },
    actions: B,
    autoFocus: r && (-1 === I || f),
    autoFocusItem: T,
    variant: O
  }, h, {
    className: Module_98.a(e$classes.list, h.className)
  }), R))
})
var be = Module_154.a({
  paper: {
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  },
  list: {
    outline: 0
  }
}, {
  name: "MuiMenu"
})(ye)
function we(e, t) {
  return "object" === Module_107.a(t) && null !== t ? e === t : String(e) === String(t)
}
var Ee = forwardRef(function (e, t) {
  var n = e["aria-label"]
  var /* [auto-meaningful-name] */e$autoFocus = e.autoFocus
  var /* [auto-meaningful-name] */e$autoWidth = e.autoWidth
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$displayEmpty = e.displayEmpty
  var /* [auto-meaningful-name] */e$IconComponent = e.IconComponent
  var /* [auto-meaningful-name] */e$inputRef = e.inputRef
  var /* [auto-meaningful-name] */e$labelId = e.labelId
  var /* [auto-meaningful-name] */e$MenuProps = e.MenuProps
  var y = undefined === e$MenuProps ? {} : e$MenuProps
  var /* [auto-meaningful-name] */e$multiple = e.multiple
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$onBlur = e.onBlur
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$onFocus = e.onFocus
  var /* [auto-meaningful-name] */e$onOpen = e.onOpen
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$readOnly = e.readOnly
  var /* [auto-meaningful-name] */e$renderValue = e.renderValue
  var /* [auto-meaningful-name] */e$SelectDisplayProps = e.SelectDisplayProps
  var P = undefined === e$SelectDisplayProps ? {} : e$SelectDisplayProps
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  e.type
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$variant = e.variant
  var j = undefined === e$variant ? "standard" : e$variant
  var U = Module_54.a(e, ["aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"])
  var H = function (e) {
    var /* [auto-meaningful-name] */e$controlled = e.controlled
    var /* [auto-meaningful-name] */e$default = e.default
    e.name
    e.state
    var /* [auto-meaningful-name] */useRefUndefinedE$controlled$current = useRef(undefined !== e$controlled).current
    var o = useState(e$default)
    var a = o[0]
    var s = o[1]
    return [
      useRefUndefinedE$controlled$current ? e$controlled : a, useCallback(function (e) {
        if (!useRefUndefinedE$controlled$current) {
          s(e)
        }
      }, [])
    ]
  }({
    controlled: e$value,
    default: e$defaultValue,
    name: "Select"
  })
  var V = Module_40.a(H, 2)
  var G = V[0]
  var z = V[1]
  var Q = useRef(null)
  var W = useState(null)
  var K = W[0]
  var X = W[1]
  var /* [auto-meaningful-name] */useRefNullE$open$current = useRef(null != e$open).current
  var q = useState()
  var $ = q[0]
  var J = q[1]
  var Z = useState(false)
  var ee = Z[0]
  var te = Z[1]
  var re = Module_287.a(t, e$inputRef)
  useImperativeHandle(re, function () {
    return {
      focus: function () {
        K.focus()
      },
      node: Q.current,
      value: G
    }
  }, [K, G])
  useEffect(function () {
    if (e$autoFocus && K) {
      K.focus()
    }
  }, [e$autoFocus, K])
  useEffect(function () {
    if (K) {
      var e = Module_391.a(K).getElementById(e$labelId)
      if (e) {
        var t = function () {
          if (getSelection().isCollapsed) {
            K.focus()
          }
        }
        e.addEventListener("click", t)
        return function () {
          e.removeEventListener("click", t)
        }
      }
    }
  }, [e$labelId, K])
  var oe
  var /* [auto-meaningful-name] */e$props$children
  var se = function (e, t) {
    if (e) {
      if (e$onOpen) {
        e$onOpen(t)
      }
    } else {
      if (e$onClose) {
        e$onClose(t)
      }
    }
    if (!useRefNullE$open$current) {
      J(e$autoWidth ? null : K.clientWidth)
      te(e)
    }
  }
  var ce = Children.toArray(e$children)
  var ue = function (e) {
    return function (t) {
      var n
      if (!e$multiple) {
        se(false, t)
      }
      if (e$multiple) {
        n = Array.isArray(G) ? G.slice() : []
        var r = G.indexOf(e.props.value)
        if (-1 === r) {
          n.push(e.props.value)
        } else {
          n.splice(r, 1)
        }
      } else {
        n = e.props.value
      }
      if (e.props.onClick) {
        e.props.onClick(t)
      }
      if (G !== n) {
        z(n)
        if (e$onChange) {
          t.persist()
          Object.defineProperty(t, "target", {
            writable: true,
            value: {
              value: n,
              name: e$name
            }
          })
          e$onChange(t, e)
        }
      }
    }
  }
  var le = null !== K && (useRefNullE$open$current ? e$open : ee)
  delete U["aria-invalid"]
  var fe = []
  var de = false
  if (I({
    value: G
  }) || e$displayEmpty) {
    if (e$renderValue) {
      oe = e$renderValue(G)
    } else {
      de = true
    }
  }
  var he = ce.map(function (e) {
    if (!isValidElement(e)) {
      return null
    }
    var t
    if (e$multiple) {
      if (!Array.isArray(G)) {
        throw new Error(Module_1547.a(2))
      }
      if ((t = G.some(function (t) {
        return we(t, e.props.value)
      })) && de) {
        fe.push(e.props.children)
      }
    } else if ((t = we(G, e.props.value)) && de) {
      e$props$children = e.props.children
    }
    if (t) {
      true
    }
    return cloneElement(e, {
      "aria-selected": t ? "true" : undefined,
      onClick: ue(e),
      onKeyUp: function (t) {
        if (" " === t.key) {
          t.preventDefault()
        }
        if (e.props.onKeyUp) {
          e.props.onKeyUp(t)
        }
      },
      role: "option",
      selected: t,
      value: undefined,
      "data-value": e.props.value
    })
  })
  if (de) {
    oe = e$multiple ? fe.join(", ") : e$props$children
  }
  var pe
  var _e = $
  if (!e$autoWidth && useRefNullE$open$current && K) {
    _e = K.clientWidth
  }
  pe = "undefined" !== typeof e$tabIndex ? e$tabIndex : e$disabled ? null : 0
  var Ae = P.id || (e$name ? "mui-component-select-".concat(e$name) : undefined)
  return createElement(Fragment, null, createElement("div", Module_19.a({
    className: Module_98.a(e$classes.root, e$classes.select, e$classes.selectMenu, e$classes[j], e$className, e$disabled && e$classes.disabled),
    ref: X,
    tabIndex: pe,
    role: "button",
    "aria-disabled": e$disabled ? "true" : undefined,
    "aria-expanded": le ? "true" : undefined,
    "aria-haspopup": "listbox",
    "aria-label": n,
    "aria-labelledby": [e$labelId, Ae].filter(Boolean).join(" ") || undefined,
    onKeyDown: function (e) {
      if (!e$readOnly) {
        if (-1 !== [" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(e.key)) {
          e.preventDefault()
          se(true, e)
        }
      }
    },
    onMouseDown: e$disabled || e$readOnly ? null : function (e) {
      if (0 === e.button) {
        e.preventDefault()
        K.focus()
        se(true, e)
      }
    },
    onBlur: function (e) {
      if (!le && e$onBlur) {
        e.persist()
        Object.defineProperty(e, "target", {
          writable: true,
          value: {
            value: G,
            name: e$name
          }
        })
        e$onBlur(e)
      }
    },
    onFocus: e$onFocus
  }, P, {
    id: Ae
  }), function (e) {
    return null == e || "string" === typeof e && !e.trim()
  }(oe) ? createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "&#8203;"
      }
    }) : oe), createElement("input", Module_19.a({
    value: Array.isArray(G) ? G.join(",") : G,
    name: e$name,
    ref: Q,
    "aria-hidden": true,
    onChange: function (e) {
      var t = ce.map(function (e) {
        return e.props.value
      }).indexOf(e.target.value)
      if (-1 !== t) {
        var n = ce[t]
        z(n.props.value)
        if (e$onChange) {
          e$onChange(e, n)
        }
      }
    },
    tabIndex: -1,
    className: e$classes.nativeInput,
    autoFocus: e$autoFocus
  }, U)), createElement(e$IconComponent, {
    className: Module_98.a(e$classes.icon, e$classes["icon".concat(Module_233.a(j))], le && e$classes.iconOpen, e$disabled && e$classes.disabled)
  }), createElement(be, Module_19.a({
    id: "menu-".concat(e$name || ""),
    anchorEl: K,
    open: le,
    onClose: function (e) {
      se(false, e)
    }
  }, y, {
    MenuListProps: Module_19.a({
      "aria-labelledby": e$labelId,
      role: "listbox",
      disableListWrap: true
    }, y.MenuListProps),
    PaperProps: Module_19.a({}, y.PaperProps, {
      style: Module_19.a({
        minWidth: _e
      }, null != y.PaperProps ? y.PaperProps.style : null)
    })
  }), he))
})
export { Ee }
