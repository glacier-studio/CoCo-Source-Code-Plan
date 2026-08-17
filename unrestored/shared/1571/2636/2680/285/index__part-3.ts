/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-3
 */

"use strict"

import { y, b, E, x } from "./index__part-0"
import { B } from "./index__part-1"
import { I } from "./index__part-2"
import * as /* [auto-meaningful-name] */Module_107 from /* 107 */"../../107"
import * as /* [auto-meaningful-name] */Module_1019 from /* 1019 */"./1019"
import * as /* [auto-meaningful-name] */Module_326 from /* 326 */"../../627/326"
import /* [auto-meaningful-name] */Module_216 from /* 216 */"../../627/216"
import * as /* [auto-meaningful-name] */Module_241 from /* 241 */"../../241/index"
import * as /* [auto-meaningful-name] */Module_140 from /* 140 */"../../140"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../../120"
import * as /* [auto-meaningful-name] */Module_142 from /* 142 */"../../142"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../../106"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../../103"
import * as /* [auto-meaningful-name] */Module_79 from /* 79 */"../../79/index"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"../../21"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../../35"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../54"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { isValidElement, cloneElement, createElement, Fragment, Component, useContext, useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../19"
import * as /* [auto-meaningful-name] */Module_783 from /* 783 */"../../522/783"
function F(e, t, n, r) {
  if (!t.length) {
    return n
  }
  var i
  var o = Module_783.a(t)
  var a = o[0]
  var s = o.slice(1)
  i = e || "number" !== typeof a ? Array.isArray(e) ? Module_79.a(e) : Module_21.a({}, e) : []
  if (r && undefined === n && 1 === s.length) {
    delete i[a][s[0]]
  } else {
    i[a] = F(i[a], s, n, r)
  }
  return i
}
function P(e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] && arguments[3]
  return t.length && r && undefined === n && !I(e, t.slice(0, -1)) ? e : F(e, t, n, r)
}
function N(e) {
  return x(e)
}
function M(e, t) {
  return I(e, t)
}
function L(e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] && arguments[3]
  var i = P(e, t, n, r)
  return i
}
function j(e, t) {
  var n = {}
  t.forEach(function (t) {
    var r = M(e, t)
    n = L(n, t, r)
  })
  return n
}
function U(e, t) {
  return e && e.some(function (e) {
    return z(e, t)
  })
}
function H(e) {
  return "object" === Module_107.a(e) && null !== e && Object.getPrototypeOf(e) === Object.prototype
}
function V(e, t) {
  var n = Array.isArray(e) ? Module_79.a(e) : Module_21.a({}, e)
  return t ? (Object.keys(t).forEach(function (e) {
    var r = n[e]
    var i = t[e]
    var o = H(r) && H(i)
    n[e] = o ? V(r, i || {}) : i
  }), n) : n
}
function G(e) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
    n[r - 1] = arguments[r]
  }
  return n.reduce(function (e, t) {
    return V(e, t)
  }, e)
}
function z(e, t) {
  return !(!e || !t || e.length !== t.length) && e.every(function (e, n) {
    return t[n] === e
  })
}
function Q(e) {
  var t = arguments.length <= 1 ? undefined : arguments[1]
  return t && t.target && e in t.target ? t.target[e] : t
}
function W(e, t, n) {
  var /* [auto-meaningful-name] */e$length = e.length
  if (t < 0 || t >= e$length || n < 0 || n >= e$length) {
    return e
  }
  var i = e[t]
  var o = t - n
  return o > 0 ? [].concat(Module_79.a(e.slice(0, n)), [i], Module_79.a(e.slice(n, t)), Module_79.a(e.slice(t + 1, e$length))) : o < 0 ? [].concat(Module_79.a(e.slice(0, t)), Module_79.a(e.slice(t + 1, n + 1)), [i], Module_79.a(e.slice(n + 1, e$length))) : e
}
var /* [auto-meaningful-name] */Module_1019$a = Module_1019.a
function X(e, t) {
  return e.replace(/\$\{\w+\}/g, function (e) {
    var n = e.slice(2, -1)
    return t[n]
  })
}
function Y(e, t, n, r, i) {
  return q.apply(this, arguments)
}
function q() {
  return (q = Module_326.a(Module_216.mark(function e(t, n, r, o, a) {
    var s
    var f
    var d
    var h
    var p
    var /* [auto-meaningful-name] */e$sent
    var A
    var g
    return Module_216.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            delete (s = Module_21.a({}, r)).ruleIndex
            f = null
            if (s && "array" === s.type && s.defaultField) {
              f = s.defaultField
              delete s.defaultField
            }
            d = new Module_1019$a(Module_35.a({}, t, [s]))
            h = G({}, B, o.validateMessages)
            d.messages(h)
            p = []
            e.prev = 8
            e.next = 11
            return Promise.resolve(d.validate(Module_35.a({}, t, n), Module_21.a({}, o)))
          case 11:
            e.next = 16
            break
          case 13:
            e.prev = 13
            e.t0 = e.catch(8)
            if (e.t0.errors) {
              p = e.t0.errors.map(function (e, t) {
                var /* [auto-meaningful-name] */e$message = e.message
                return isValidElement(e$message) ? cloneElement(e$message, {
                  key: "error_".concat(t)
                }) : e$message
              })
            } else {
              console.error(e.t0)
              p = [h.default]
            }
          case 16:
            if (p.length || !f) {
              e.next = 21
              break
            }
            e.next = 19
            return Promise.all(n.map(function (e, n) {
              return Y("".concat(t, ".").concat(n), e, f, o, a)
            }))
          case 19:
            e$sent = e.sent
            return e.abrupt("return", e$sent.reduce(function (e, t) {
              return [].concat(Module_79.a(e), Module_79.a(t))
            }, []))
          case 21:
            A = Module_21.a(Module_21.a({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, a)
            g = p.map(function (e) {
              return "string" === typeof e ? X(e, A) : e
            })
            return e.abrupt("return", g)
          case 24:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[8, 13]])
  }))).apply(this, arguments)
}
function $(e, t, n, r, i, o) {
  var a
  var s = e.join(".")
  var c = n.map(function (e, t) {
    var /* [auto-meaningful-name] */e$validator = e.validator
    var r = Module_21.a(Module_21.a({}, e), {}, {
      ruleIndex: t
    })
    if (e$validator) {
      r.validator = function (e, t, r) {
        var i = false
        var o = e$validator(e, t, function () {
          for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
            t[n] = arguments[n]
          }
          Promise.resolve().then(function () {
            y(!i, "Your validator function has already return a promise. `callback` will be ignored.")
            if (!i) {
              r.apply(undefined, t)
            }
          })
        })
        i = o && "function" === typeof o.then && "function" === typeof o.catch
        y(i, "`callback` is deprecated. Please return a promise instead.")
        if (i) {
          o.then(function () {
            r()
          }).catch(function (e) {
            r(e || " ")
          })
        }
      }
    }
    return r
  }).sort(function (e, t) {
    var /* [auto-meaningful-name] */e$warningOnly = e.warningOnly
    var /* [auto-meaningful-name] */e$ruleIndex = e.ruleIndex
    var /* [auto-meaningful-name] */t$warningOnly = t.warningOnly
    var /* [auto-meaningful-name] */t$ruleIndex = t.ruleIndex
    return !!e$warningOnly === !!t$warningOnly ? e$ruleIndex - t$ruleIndex : e$warningOnly ? 1 : -1
  })
  if (true === i) {
    a = new Promise(function () {
      var e = Module_326.a(Module_216.mark(function e(n, i) {
        var a
        var u
        var /* [auto-meaningful-name] */e$sent
        return Module_216.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                a = 0
              case 1:
                if (!(a < c.length)) {
                  e.next = 12
                  break
                }
                u = c[a]
                e.next = 5
                return Y(s, t, u, r, o)
              case 5:
                if (!(e$sent = e.sent).length) {
                  e.next = 9
                  break
                }
                i([
                  {
                    errors: e$sent,
                    rule: u
                  }
                ])
                return e.abrupt("return")
              case 9:
                a += 1
                e.next = 1
                break
              case 12:
                n([])
              case 13:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function (t, n) {
        return e.apply(this, arguments)
      }
    }())
  } else {
    var l = c.map(function (e) {
      return Y(s, t, e, r, o).then(function (t) {
        return {
          errors: t,
          rule: e
        }
      })
    })
    a = (i ? function (e) {
      return Z.apply(this, arguments)
    }(l) : function (e) {
      return J.apply(this, arguments)
    }(l)).then(function (e) {
      return Promise.reject(e)
    })
  }
  a.catch(function (e) {
    return e
  })
  return a
}
function J() {
  return (J = Module_326.a(Module_216.mark(function e(t) {
    return Module_216.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Promise.all(t).then(function (e) {
              var t
              return (t = []).concat.apply(t, Module_79.a(e))
            }))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Z() {
  return (Z = Module_326.a(Module_216.mark(function e(t) {
    var n
    return Module_216.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = 0
            return e.abrupt("return", new Promise(function (e) {
              t.forEach(function (r) {
                r.then(function (r) {
                  if (r.errors.length) {
                    e([r])
                  }
                  if ((n += 1) === t.length) {
                    e([])
                  }
                })
              })
            }))
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
var ee = ["name"]
var te = []
function ne(e, t, n, r, i, o) {
  return "function" === typeof e ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== i
}
var re = function (e) {
  Module_120.a(n, e)
  var t = Module_140.a(n)
  function n(e) {
    var r
    Module_103.a(this, n);
    (r = t.call(this, e)).state = {
      resetCount: 0
    }
    r.cancelRegisterFunc = null
    r.mounted = false
    r.touched = false
    r.dirty = false
    r.validatePromise = null
    r.prevValidating = undefined
    r.errors = te
    r.warnings = te
    r.cancelRegister = function () {
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$preserve = r$props.preserve
      var /* [auto-meaningful-name] */r$props$isListField = r$props.isListField
      var /* [auto-meaningful-name] */r$props$name = r$props.name
      if (r.cancelRegisterFunc) {
        r.cancelRegisterFunc(r$props$isListField, r$props$preserve, N(r$props$name))
      }
      r.cancelRegisterFunc = null
    }
    r.getNamePath = function () {
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$name = r$props.name
      var /* [auto-meaningful-name] */r$props$fieldContext$prefixName = r$props.fieldContext.prefixName
      var i = undefined === r$props$fieldContext$prefixName ? [] : r$props$fieldContext$prefixName
      return undefined !== r$props$name ? [].concat(Module_79.a(i), Module_79.a(r$props$name)) : []
    }
    r.getRules = function () {
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$rules = r$props.rules
      var n = undefined === r$props$rules ? [] : r$props$rules
      var /* [auto-meaningful-name] */r$props$fieldContext = r$props.fieldContext
      return n.map(function (e) {
        return "function" === typeof e ? e(r$props$fieldContext) : e
      })
    }
    r.refresh = function () {
      if (r.mounted) {
        r.setState(function (e) {
          return {
            resetCount: e.resetCount + 1
          }
        })
      }
    }
    r.triggerMetaEvent = function (e) {
      var /* [auto-meaningful-name] */r$props$onMetaChange = r.props.onMetaChange
      if (!(null === r$props$onMetaChange || undefined === r$props$onMetaChange)) {
        r$props$onMetaChange(Module_21.a(Module_21.a({}, r.getMeta()), {}, {
          destroy: e
        }))
      }
    }
    r.onStoreChange = function (e, t, n) {
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$shouldUpdate = r$props.shouldUpdate
      var /* [auto-meaningful-name] */r$props$dependencies = r$props.dependencies
      var s = undefined === r$props$dependencies ? [] : r$props$dependencies
      var /* [auto-meaningful-name] */r$props$onReset = r$props.onReset
      var /* [auto-meaningful-name] */n$store = n.store
      var l = r.getNamePath()
      var f = r.getValue(e)
      var d = r.getValue(n$store)
      var h = t && U(t, l)
      switch ("valueUpdate" === n.type && "external" === n.source && f !== d && (r.touched = true, r.dirty = true, r.validatePromise = null, r.errors = te, r.warnings = te, r.triggerMetaEvent()), n.type) {
        case "reset":
          if (!t || h) {
            r.touched = false
            r.dirty = false
            r.validatePromise = null
            r.errors = te
            r.warnings = te
            r.triggerMetaEvent()
            if (!(null === r$props$onReset || undefined === r$props$onReset)) {
              r$props$onReset()
            }
            return void r.refresh()
          }
          break
        case "setField":
          if (h) {
            var /* [auto-meaningful-name] */n$data = n.data
            if ("touched" in n$data) {
              r.touched = n$data.touched
            }
            if ("validating" in n$data && !("originRCField" in n$data)) {
              r.validatePromise = n$data.validating ? Promise.resolve([]) : null
            }
            if ("errors" in n$data) {
              r.errors = n$data.errors || te
            }
            if ("warnings" in n$data) {
              r.warnings = n$data.warnings || te
            }
            r.dirty = true
            r.triggerMetaEvent()
            return void r.reRender()
          }
          if (r$props$shouldUpdate && !l.length && ne(r$props$shouldUpdate, e, n$store, f, d, n)) {
            return void r.reRender()
          }
          break
        case "dependenciesUpdate":
          if (s.map(N).some(function (e) {
            return U(n.relatedFields, e)
          })) {
            return void r.reRender()
          }
          break
        default:
          if (h || (!s.length || l.length || r$props$shouldUpdate) && ne(r$props$shouldUpdate, e, n$store, f, d, n)) {
            return void r.reRender()
          }
      }
      if (true === r$props$shouldUpdate) {
        r.reRender()
      }
    }
    r.validateRules = function (e) {
      var t = r.getNamePath()
      var n = r.getValue()
      var i = Promise.resolve().then(function () {
        if (!r.mounted) {
          return []
        }
        var /* [auto-meaningful-name] */r$props = r.props
        var /* [auto-meaningful-name] */r$props$validateFirst = r$props.validateFirst
        var s = undefined !== r$props$validateFirst && r$props$validateFirst
        var /* [auto-meaningful-name] */r$props$messageVariables = r$props.messageVariables
        var /* [auto-meaningful-name] */E$triggerName = (e || {}).triggerName
        var f = r.getRules()
        if (E$triggerName) {
          f = f.filter(function (e) {
            var /* [auto-meaningful-name] */e$validateTrigger = e.validateTrigger
            return !e$validateTrigger || x(e$validateTrigger).includes(E$triggerName)
          })
        }
        var d = $(t, n, f, e, s, r$props$messageVariables)
        d.catch(function (e) {
          return e
        }).then(function () {
          var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : te
          if (r.validatePromise === i) {
            r.validatePromise = null
            var t = []
            var n = []
            e.forEach(function (e) {
              var /* [auto-meaningful-name] */e$rule$warningOnly = e.rule.warningOnly
              var /* [auto-meaningful-name] */e$errors = e.errors
              var o = undefined === e$errors ? te : e$errors
              if (e$rule$warningOnly) {
                n.push.apply(n, Module_79.a(o))
              } else {
                t.push.apply(t, Module_79.a(o))
              }
            })
            r.errors = t
            r.warnings = n
            r.triggerMetaEvent()
            r.reRender()
          }
        })
        return d
      })
      r.validatePromise = i
      r.dirty = true
      r.errors = te
      r.warnings = te
      r.triggerMetaEvent()
      r.reRender()
      return i
    }
    r.isFieldValidating = function () {
      return !!r.validatePromise
    }
    r.isFieldTouched = function () {
      return r.touched
    }
    r.isFieldDirty = function () {
      return !(!r.dirty && undefined === r.props.initialValue) || undefined !== (0, r.props.fieldContext.getInternalHooks(b).getInitialValue)(r.getNamePath())
    }
    r.getErrors = function () {
      return r.errors
    }
    r.getWarnings = function () {
      return r.warnings
    }
    r.isListField = function () {
      return r.props.isListField
    }
    r.isList = function () {
      return r.props.isList
    }
    r.isPreserve = function () {
      return r.props.preserve
    }
    r.getMeta = function () {
      r.prevValidating = r.isFieldValidating()
      return {
        touched: r.isFieldTouched(),
        validating: r.prevValidating,
        errors: r.errors,
        warnings: r.warnings,
        name: r.getNamePath()
      }
    }
    r.getOnlyChild = function (e) {
      if ("function" === typeof e) {
        var t = r.getMeta()
        return Module_21.a(Module_21.a({}, r.getOnlyChild(e(r.getControlled(), t, r.props.fieldContext))), {}, {
          isFunction: true
        })
      }
      var n = function e(t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
        var r = []
        React.Children.forEach(t, function (t) {
          if (undefined !== t && null !== t || n.keepEmpty) {
            if (Array.isArray(t)) {
              r = r.concat(e(t))
            } else {
              if (Module_241.isFragment(t) && t.props) {
                r = r.concat(e(t.props.children, n))
              } else {
                r.push(t)
              }
            }
          }
        })
        return r
      }(e)
      return 1 === n.length && isValidElement(n[0]) ? {
        child: n[0],
        isFunction: false
      } : {
        child: n,
        isFunction: false
      }
    }
    r.getValue = function (e) {
      var /* [auto-meaningful-name] */r$props$fieldContext$getFieldsValue = r.props.fieldContext.getFieldsValue
      var n = r.getNamePath()
      return M(e || r$props$fieldContext$getFieldsValue(true), n)
    }
    r.getControlled = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$trigger = r$props.trigger
      var /* [auto-meaningful-name] */r$props$validateTrigger = r$props.validateTrigger
      var /* [auto-meaningful-name] */r$props$getValueFromEvent = r$props.getValueFromEvent
      var /* [auto-meaningful-name] */r$props$normalize = r$props.normalize
      var /* [auto-meaningful-name] */r$props$valuePropName = r$props.valuePropName
      var /* [auto-meaningful-name] */r$props$getValueProps = r$props.getValueProps
      var /* [auto-meaningful-name] */r$props$fieldContext = r$props.fieldContext
      var d = undefined !== r$props$validateTrigger ? r$props$validateTrigger : r$props$fieldContext.validateTrigger
      var h = r.getNamePath()
      var /* [auto-meaningful-name] */r$props$fieldContext$getInternalHooks = r$props$fieldContext.getInternalHooks
      var /* [auto-meaningful-name] */r$props$fieldContext$getFieldsValue = r$props$fieldContext.getFieldsValue
      var A = r$props$fieldContext$getInternalHooks(b)
      var /* [auto-meaningful-name] */A$dispatch = A.dispatch
      var v = r.getValue()
      var m = r$props$getValueProps || function (e) {
        return Module_35.a({}, r$props$valuePropName, e)
      }
      var y = e[r$props$trigger]
      var w = Module_21.a(Module_21.a({}, e), m(v))
      w[r$props$trigger] = function () {
        var e
        r.touched = true
        r.dirty = true
        r.triggerMetaEvent()
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), i = 0; i < arguments$length; i++) {
          n[i] = arguments[i]
        }
        e = r$props$getValueFromEvent ? r$props$getValueFromEvent.apply(undefined, n) : Q.apply(undefined, [r$props$valuePropName].concat(n))
        if (r$props$normalize) {
          e = r$props$normalize(e, v, r$props$fieldContext$getFieldsValue(true))
        }
        A$dispatch({
          type: "updateValue",
          namePath: h,
          value: e
        })
        if (y) {
          y.apply(undefined, n)
        }
      }
      var E = x(d || [])
      E.forEach(function (e) {
        var t = w[e]
        w[e] = function () {
          if (t) {
            t.apply(undefined, arguments)
          }
          var /* [auto-meaningful-name] */r$props$rules = r.props.rules
          if (r$props$rules && r$props$rules.length) {
            A$dispatch({
              type: "validateField",
              namePath: h,
              triggerName: e
            })
          }
        }
      })
      return w
    }
    if (e.fieldContext) {
      (0, (0, e.fieldContext.getInternalHooks)(b).initEntityValue)(Module_142.a(r))
    }
    return r
  }
  Module_106.a(n, [
    {
      key: "componentDidMount",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$shouldUpdate = this$props.shouldUpdate
        var /* [auto-meaningful-name] */this$props$fieldContext = this$props.fieldContext
        this.mounted = true
        if (this$props$fieldContext) {
          var /* [auto-meaningful-name] */_0This$props$fieldContext$getInternalHooksB$registerField = (0, this$props$fieldContext.getInternalHooks)(b).registerField
          this.cancelRegisterFunc = _0This$props$fieldContext$getInternalHooksB$registerField(this)
        }
        if (true === this$props$shouldUpdate) {
          this.reRender()
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.cancelRegister()
        this.triggerMetaEvent(true)
        this.mounted = false
      }
    }, {
      key: "reRender",
      value: function () {
        if (this.mounted) {
          this.forceUpdate()
        }
      }
    }, {
      key: "render",
      value: function () {
        var e
        var /* [auto-meaningful-name] */this$state$resetCount = this.state.resetCount
        var /* [auto-meaningful-name] */this$props$children = this.props.children
        var r = this.getOnlyChild(this$props$children)
        var /* [auto-meaningful-name] */r$child = r.child
        if (r.isFunction) {
          e = r$child
        } else {
          if (isValidElement(r$child)) {
            e = cloneElement(r$child, this.getControlled(r$child.props))
          } else {
            y(!r$child, "`children` of Field is not validate ReactElement.")
            e = r$child
          }
        }
        return createElement(Fragment, {
          key: this$state$resetCount
        }, e)
      }
    }
  ])
  return n
}(Component)
re.contextType = E
re.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
}
var ie = function (e) {
  var /* [auto-meaningful-name] */e$name = e.name
  var n = Module_54.a(e, ee)
  var o = useContext(E)
  var a = undefined !== e$name ? N(e$name) : undefined
  var c = "keep"
  if (!n.isListField) {
    c = "_".concat((a || []).join("_"))
  }
  return createElement(re, Module_19.a({
    key: c,
    name: a
  }, n, {
    fieldContext: o
  }))
}
var oe = function (e) {
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$initialValue = e.initialValue
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$rules = e.rules
  var /* [auto-meaningful-name] */e$validateTrigger = e.validateTrigger
  var s = useContext(E)
  var /* [auto-meaningful-name] */useRefKeysId0$current = useRef({
    keys: [],
    id: 0
  }).current
  if ("function" !== typeof e$children) {
    y(false, "Form.List only accepts function as children.")
    return null
  }
  var f = N(s.prefixName) || []
  var d = [].concat(Module_79.a(f), Module_79.a(N(e$name)))
  return createElement(E.Provider, {
    value: Module_21.a(Module_21.a({}, s), {}, {
      prefixName: d
    })
  }, createElement(ie, {
    name: [],
    shouldUpdate: function (e, t, n) {
      return "internal" !== n.source && e !== t
    },
    rules: e$rules,
    validateTrigger: e$validateTrigger,
    initialValue: e$initialValue,
    isList: true
  }, function (e, t) {
    var /* [auto-meaningful-name] */e$value = e.value
    var i = undefined === e$value ? [] : e$value
    var /* [auto-meaningful-name] */e$onChange = e.onChange
    var /* [auto-meaningful-name] */s$getFieldValue = s.getFieldValue
    var u = function () {
      return s$getFieldValue(d || []) || []
    }
    var f = {
      add: function (e, t) {
        var n = u()
        if (t >= 0 && t <= n.length) {
          useRefKeysId0$current.keys = [].concat(Module_79.a(useRefKeysId0$current.keys.slice(0, t)), [useRefKeysId0$current.id], Module_79.a(useRefKeysId0$current.keys.slice(t)))
          e$onChange([].concat(Module_79.a(n.slice(0, t)), [e], Module_79.a(n.slice(t))))
        } else {
          useRefKeysId0$current.keys = [].concat(Module_79.a(useRefKeysId0$current.keys), [useRefKeysId0$current.id])
          e$onChange([].concat(Module_79.a(n), [e]))
        }
        useRefKeysId0$current.id += 1
      },
      remove: function (e) {
        var t = u()
        var n = new Set(Array.isArray(e) ? e : [e])
        if (!(n.size <= 0)) {
          useRefKeysId0$current.keys = useRefKeysId0$current.keys.filter(function (e, t) {
            return !n.has(t)
          })
          e$onChange(t.filter(function (e, t) {
            return !n.has(t)
          }))
        }
      },
      move: function (e, t) {
        if (e !== t) {
          var n = u()
          if (!(e < 0 || e >= n.length || t < 0 || t >= n.length)) {
            useRefKeysId0$current.keys = W(useRefKeysId0$current.keys, e, t)
            e$onChange(W(n, e, t))
          }
        }
      }
    }
    var h = i || []
    if (!Array.isArray(h)) {
      h = []
    }
    return e$children(h.map(function (e, t) {
      var n = useRefKeysId0$current.keys[t]
      if (undefined === n) {
        useRefKeysId0$current.keys[t] = useRefKeysId0$current.id
        n = useRefKeysId0$current.keys[t]
        useRefKeysId0$current.id += 1
      }
      return {
        name: t,
        key: n,
        isListField: true
      }
    }), f, t)
  }))
}
export { N }
export { M }
export { L }
export { j }
export { U }
export { G }
export { z }
export { ie }
export { oe }
