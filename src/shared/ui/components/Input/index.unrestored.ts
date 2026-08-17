/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：294
 */

import "./index__part-0"
import "./index__part-1"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_Iconfont_index from /* 94 */"../Iconfont/index"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../53"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useRef, useEffect, useImperativeHandle, useCallback } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../47"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
var r
var _a
_a = React.memo(React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$warning = e.warning
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onBlur = e.onBlur
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
  var /* [auto-meaningful-name] */e$onFocus = e.onFocus
  var /* [auto-meaningful-name] */e$onCompositionStart = e.onCompositionStart
  var /* [auto-meaningful-name] */e$onCompositionEnd = e.onCompositionEnd
  var /* [auto-meaningful-name] */e$onClearCallback = e.onClearCallback
  var /* [auto-meaningful-name] */e$before = e.before
  var /* [auto-meaningful-name] */e$after = e.after
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$max = e.max
  var /* [auto-meaningful-name] */e$min = e.min
  var /* [auto-meaningful-name] */e$maxLength = e.maxLength
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$type = e.type
  var k = undefined === e$type ? "text" : e$type
  var /* [auto-meaningful-name] */e$dependency = e.dependency
  var /* [auto-meaningful-name] */e$rules = e.rules
  var /* [auto-meaningful-name] */e$readOnly = e.readOnly
  var L = undefined !== e$readOnly && e$readOnly
  var /* [auto-meaningful-name] */e$isTrimmed = e.isTrimmed
  var B = undefined !== e$isTrimmed && e$isTrimmed
  var /* [auto-meaningful-name] */e$clearButtonVisible = e.clearButtonVisible
  var G = useState(false)
  var W = Module_10.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = useState(false)
  var z = Module_10.a(V, 2)
  var Y = z[0]
  var K = z[1]
  var q = useRef(null)
  var X = useRef("")
  var Q = useState(!!e$defaultValue || !!e$value)
  var Z = Module_10.a(Q, 2)
  var J = Z[0]
  var $ = Z[1]
  var ee = useRef(true)
  useEffect(function () {
    var /* [auto-meaningful-name] */q$current = q.current
    if (undefined === e$value && q$current) {
      q$current.value = undefined === e$defaultValue ? "" : e$defaultValue.toString().substr(0, e$maxLength || 1 / 0)
      $(!q$current.value)
    }
  }, [q, e$dependency, e$value, e$defaultValue])
  useEffect(function () {
    var /* [auto-meaningful-name] */q$current = q.current
    if (undefined !== e$value && q$current) {
      q$current.value = e$value.toString().substr(0, e$maxLength)
    }
  }, [q, e$value, e$maxLength])
  useImperativeHandle(t, function () {
    var /* [auto-meaningful-name] */q$current
    return {
      input: q.current,
      value: (null === (q$current = q.current) || undefined === q$current ? undefined : q$current.value) || "",
      focus: function () {
        var /* [auto-meaningful-name] */q$current1
        return null === (q$current1 = q.current) || undefined === q$current1 ? undefined : q$current1.focus()
      },
      blur: function () {
        var /* [auto-meaningful-name] */q$current1
        return null === (q$current1 = q.current) || undefined === q$current1 ? undefined : q$current1.blur()
      },
      select: function () {
        var /* [auto-meaningful-name] */q$current1
        return null === (q$current1 = q.current) || undefined === q$current1 ? undefined : q$current1.select()
      }
    }
  })
  var te = function (e) {
    var /* [auto-meaningful-name] */q$current = q.current
    if (q$current) {
      var /* [auto-meaningful-name] */q$current$value = q$current.value
      if (e$rules) {
        var r = function (e, t, n) {
          var r
          var o = Module_47.a(n)
          try {
            for (o.s(); !(r = o.n()).done;) {
              var /* [auto-meaningful-name] */r$value = r.value
              if (!e.match(r$value.rule)) {
                return {
                  status: "fail",
                  value: t,
                  massage: r$value.message
                }
              }
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
          return {
            status: "success",
            value: e
          }
        }(q$current$value, X.current, e$rules)
        if ("fail" === r.status) {
          re(r)
          return void (q$current.value = r.value)
        }
      }
      if (Module_53.u.test(q$current$value)) {
        q$current.value = "-"
      } else {
        var o = function (e, t) {
          var /* [auto-meaningful-name] */Success = "success"
          if (!Module_53.x.test(e)) {
            Success = "fail"
          }
          var r = parseFloat(e)
          if (t && r > t) {
            Success = "fail"
            r = t
          }
          return {
            status: Success,
            value: isNaN(r) ? "" : r.toString()
          }
        }(q$current$value, e$max)
        re(o)
        q$current.value = o.value
        if (!(e$min && Number(o.value) < e$min)) {
          if (e$onChange) {
            e$onChange(o.value || "0", e)
          }
        }
      }
    }
  }
  var ne = function () {
    var /* [auto-meaningful-name] */q$current = q.current
    if (q$current) {
      var /* [auto-meaningful-name] */q$current$value = q$current.value
      var n = q$current$value
      var r = function (e, t, n, r) {
        var /* [auto-meaningful-name] */t$current = t.current
        if ("" !== e) {
          if (r) {
            var a
            var s = Module_47.a(r)
            try {
              for (s.s(); !(a = s.n()).done;) {
                var /* [auto-meaningful-name] */a$value = a.value
                if (!e.match(a$value.rule)) {
                  return {
                    status: "fail",
                    value: t$current,
                    massage: a$value.message
                  }
                }
              }
            } catch (h) {
              s.e(h)
            } finally {
              s.f()
            }
          }
          if (n && (e.length <= n || e.length < t$current.length)) {
            t.current = e
            return {
              status: "success",
              value: e
            }
          }
          if (undefined !== n && e.length > t$current.length) {
            return {
              status: "fail",
              value: t$current,
              massage: "The maximum support length is exceeded"
            }
          }
        }
        for (var l = -1, u = 0; u < e.length; u++) {
          if (e[u] !== t$current[u]) {
            l = u
            break
          }
        }
        if (l > -1 && undefined !== n) {
          for (var d = t$current, p = l; p < e.length; p++) {
            var f = t$current.slice(0, l) + e.slice(l, p) + t$current.slice(l)
            if (f.length > n) {
              break
            }
            d = f
          }
          t.current = d
          return {
            status: "success",
            value: d
          }
        }
        return {
          status: "success",
          value: e
        }
      }(q$current$value, X, e$maxLength, e$rules)
      n = r.value
      if (!ee.current) {
        n = q$current$value
      }
      q$current.value = n
      re(r)
      return n
    }
  }
  var re = function (e) {
    if ("fail" === e.status) {
      if (!r) {
        K(true)
        r = setTimeout(function () {
          K(false)
          r = null
        }, 600)
      }
    } else {
      K(false)
    }
  }
  var oe = useCallback(function (e) {
    H(true)
    if (e$onFocus) {
      e$onFocus(e)
    }
  }, [e$onFocus])
  var ie = useCallback(function (e) {
    H(false)
    var /* [auto-meaningful-name] */q$current = q.current
    if (q$current) {
      var /* [auto-meaningful-name] */q$current$value = q$current.value
      var /* [auto-meaningful-name] */q$current$value1 = q$current.value
      if ("number" === k) {
        q$current$value1 = function (e, t, n) {
          var r = parseFloat(e) || 0
          if (undefined !== n) {
            r = Math.max(r, n)
          }
          if (undefined !== t) {
            r = Math.min(r, t)
          }
          return r.toString()
        }(q$current$value, e$max, e$min)
      }
      if (B) {
        q$current$value1 = q$current$value1.trim()
      }
      q$current.value = q$current$value1
      if (q$current$value1 !== q$current$value && e$onChange) {
        e$onChange(q$current$value1, e)
      }
      if (e$onBlur) {
        e$onBlur(q$current$value1, e)
      }
    }
  }, [q, k, B, e$onBlur, e$onChange, e$max, e$min])
  var ae = {
    disabled: e$disabled,
    placeholder: e$placeholder,
    value: e$value
  }
  return React.createElement("div", {
    className: Classnames("coco-input", e$className, {
      "coco-input-focus": U,
      "coco-input-disabled": e$disabled,
      "coco-input-warning": e$warning,
      "coco-input-warning-animation": Y
    }),
    style: e$style
  }, e$before, React.createElement("input", Object.assign({
    ref: q,
    onChange: function (e) {
      $(!e.currentTarget.value)
      if ("number" === k) {
        te(e)
      } else {
        (function (e) {
          var t = ne()
          if (undefined !== t && e$onChange) {
            e$onChange(t, e)
          }
        })(e)
      }
    },
    onFocus: oe,
    onBlur: ie,
    onClick: e$onClick,
    onMouseDown: e$onMouseDown,
    onKeyDown: function (e) {
      var /* [auto-meaningful-name] */q$current = q.current
      if (q$current) {
        if (13 === e.keyCode) {
          q$current.blur()
        }
        if (e$onKeyDown) {
          e$onKeyDown(e)
        }
      }
    },
    readOnly: L,
    onCompositionStart: function () {
      ee.current = false
      if (e$onCompositionStart) {
        e$onCompositionStart()
      }
    },
    onCompositionEnd: function (e) {
      ee.current = true
      ne()
      if (e$onCompositionEnd) {
        e$onCompositionEnd(e)
      }
    }
  }, ae)), e$clearButtonVisible && !J && React.createElement("div", {
    onMouseDown: function (e) {
      var /* [auto-meaningful-name] */q$current = q.current
      e.stopPropagation()
      e.preventDefault()
      if (q$current) {
        q$current.value = ""
        q$current.focus()
        $(true)
        if (e$onClearCallback) {
          e$onClearCallback()
        }
      }
    },
    className: "coco-input-clear-button"
  }, React.createElement(Src_shared_ui_components_Iconfont_index.a, {
    type: "icon-close"
  })), e$after)
}))
export { _a as a }
export default _a
