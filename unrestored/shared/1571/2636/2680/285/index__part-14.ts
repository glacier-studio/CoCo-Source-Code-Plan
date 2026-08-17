/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-14
 */

"use strict"

import { pe } from "./index__part-4"
import { Ee } from "./index__part-5"
import { Vt } from "./index__part-10"
import { ln } from "./index__part-11"
import { An } from "./index__part-12"
import { vn } from "./index__part-13"
var yn
var mn
import * as /* [auto-meaningful-name] */Module_924 from /* 924 */"../../224/924/index"
import * as /* [auto-meaningful-name] */Module_1033 from /* 1033 */"../../1048/1033"
import * as /* [auto-meaningful-name] */Module_517 from /* 517 */"../../517"
import * as /* [auto-meaningful-name] */Module_801 from /* 801 */"../../801/index"
import * as /* [auto-meaningful-name] */Module_694 from /* 694 */"../../801/694/index"
import * as /* [auto-meaningful-name] */Module_792 from /* 792 */"../../224/792"
import { useCallback, useRef, useMemo, createElement, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../19"
import * as /* [auto-meaningful-name] */Module_609 from /* 609 */"../609"
var wn = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "form"]
function En() {
  return mn || "ant"
}
function xn() {
  return yn || "anticon"
}
var Cn = function () {
  return {
    getPrefixCls: function (e, t) {
      return t || (e ? "".concat(En(), "-").concat(e) : En())
    },
    getIconPrefixCls: xn,
    getRootPrefixCls: function (e, t) {
      return e || mn || (t && t.includes("-") ? t.replace(/^(.*)-[^-]*$/, "$1") : En())
    }
  }
}
var On = function (e) {
  var /* [auto-meaningful-name] */e$locale$Form
  var /* [auto-meaningful-name] */Module_609$a$Form
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$csp = e.csp
  var /* [auto-meaningful-name] */e$autoInsertSpaceInButton = e.autoInsertSpaceInButton
  var /* [auto-meaningful-name] */e$form = e.form
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$componentSize = e.componentSize
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$space = e.space
  var /* [auto-meaningful-name] */e$virtual = e.virtual
  var /* [auto-meaningful-name] */e$dropdownMatchSelectWidth = e.dropdownMatchSelectWidth
  var /* [auto-meaningful-name] */e$legacyLocale = e.legacyLocale
  var /* [auto-meaningful-name] */e$parentContext = e.parentContext
  var /* [auto-meaningful-name] */e$iconPrefixCls = e.iconPrefixCls
  var m = useCallback(function (t, n) {
    var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
    if (n) {
      return n
    }
    var i = e$prefixCls || e$parentContext.getPrefixCls("")
    return t ? "".concat(i, "-").concat(t) : i
  }, [e$parentContext.getPrefixCls, e.prefixCls])
  var y = Module_19.a(Module_19.a({}, e$parentContext), {
    csp: e$csp,
    autoInsertSpaceInButton: e$autoInsertSpaceInButton,
    locale: e$locale || e$legacyLocale,
    direction: e$direction,
    space: e$space,
    virtual: e$virtual,
    dropdownMatchSelectWidth: e$dropdownMatchSelectWidth,
    getPrefixCls: m
  })
  wn.forEach(function (t) {
    var n = e[t]
    if (n) {
      y[t] = n
    }
  })
  var b = function (e, t, n) {
    var r = useRef({})
    if (!("value" in r.current && !n(r.current.condition, t))) {
      r.current.value = e()
      r.current.condition = t
    }
    return r.current.value
  }(function () {
    return y
  }, y, function (e, t) {
    var n = Object.keys(e)
    var r = Object.keys(t)
    return n.length !== r.length || n.some(function (n) {
      return e[n] !== t[n]
    })
  })
  var w = useMemo(function () {
    return {
      prefixCls: e$iconPrefixCls,
      csp: e$csp
    }
  }, [e$iconPrefixCls])
  var E = e$children
  var x = {}
  if (e$locale) {
    x = (null === (e$locale$Form = e$locale.Form) || undefined === e$locale$Form ? undefined : e$locale$Form.defaultValidateMessages) || (null === (Module_609$a$Form = Module_609.a.Form) || undefined === Module_609$a$Form ? undefined : Module_609$a$Form.defaultValidateMessages) || {}
  }
  if (e$form && e$form.validateMessages) {
    x = Module_19.a(Module_19.a({}, x), e$form.validateMessages)
  }
  if (Object.keys(x).length > 0) {
    E = createElement(pe, {
      validateMessages: x
    }, e$children)
  }
  if (e$locale) {
    E = createElement(Ee, {
      locale: e$locale,
      _ANT_MARK__: "internalMark"
    }, E)
  }
  if (e$iconPrefixCls) {
    E = createElement(Module_792.a.Provider, {
      value: w
    }, E)
  }
  if (e$componentSize) {
    E = createElement(Module_517.a, {
      size: e$componentSize
    }, E)
  }
  return createElement(Module_801.b.Provider, {
    value: b
  }, E)
}
var kn = function (e) {
  useEffect(function () {
    if (e.direction) {
      Vt.config({
        rtl: "rtl" === e.direction
      })
      ln.config({
        rtl: "rtl" === e.direction
      })
    }
  }, [e.direction])
  return createElement(Module_694.a, null, function (t, n, o) {
    return createElement(Module_801.a, null, function (t) {
      return createElement(On, Module_19.a({
        parentContext: t,
        legacyLocale: o
      }, e))
    })
  })
}
kn.ConfigContext = Module_801.b
kn.SizeContext = Module_517.b
kn.config = function (e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$iconPrefixCls = e.iconPrefixCls
  var /* [auto-meaningful-name] */e$theme = e.theme
  if (undefined !== e$prefixCls) {
    mn = e$prefixCls
  }
  if (undefined !== e$iconPrefixCls) {
    yn = e$iconPrefixCls
  }
  if (e$theme) {
    (function (e, t) {
      var n = {}
      var r = function (e, t) {
        var n = e.clone()
        return (n = (null === t || undefined === t ? undefined : t(n)) || n).toRgbString()
      }
      var i = function (e, t) {
        var i = new An(e)
        var o = Module_924.a(i.toRgbString())
        n["".concat(t, "-color")] = r(i)
        n["".concat(t, "-color-disabled")] = o[1]
        n["".concat(t, "-color-hover")] = o[4]
        n["".concat(t, "-color-active")] = o[7]
        n["".concat(t, "-color-outline")] = i.clone().setAlpha(.2).toRgbString()
        n["".concat(t, "-color-deprecated-bg")] = o[1]
        n["".concat(t, "-color-deprecated-border")] = o[3]
      }
      if (t.primaryColor) {
        i(t.primaryColor, "primary")
        var o = new An(t.primaryColor)
        var a = Module_924.a(o.toRgbString())
        a.forEach(function (e, t) {
          n["primary-".concat(t + 1)] = e
        })
        n["primary-color-deprecated-l-35"] = r(o, function (e) {
          return e.lighten(35)
        })
        n["primary-color-deprecated-l-20"] = r(o, function (e) {
          return e.lighten(20)
        })
        n["primary-color-deprecated-t-20"] = r(o, function (e) {
          return e.tint(20)
        })
        n["primary-color-deprecated-t-50"] = r(o, function (e) {
          return e.tint(50)
        })
        n["primary-color-deprecated-f-12"] = r(o, function (e) {
          return e.setAlpha(.12 * e.getAlpha())
        })
        var s = new An(a[0])
        n["primary-color-active-deprecated-f-30"] = r(s, function (e) {
          return e.setAlpha(.3 * e.getAlpha())
        })
        n["primary-color-active-deprecated-d-02"] = r(s, function (e) {
          return e.darken(2)
        })
      }
      if (t.successColor) {
        i(t.successColor, "success")
      }
      if (t.warningColor) {
        i(t.warningColor, "warning")
      }
      if (t.errorColor) {
        i(t.errorColor, "error")
      }
      if (t.infoColor) {
        i(t.infoColor, "info")
      }
      var c = Object.keys(n).map(function (t) {
        return "--".concat(e, "-").concat(t, ": ").concat(n[t], ";")
      })
      Module_1033.a("\n  :root {\n    ".concat(c.join("\n"), "\n  }\n  "), "".concat(vn, "-dynamic-theme"))
    })(En(), e$theme)
  }
}
export { Cn }
export { kn }
