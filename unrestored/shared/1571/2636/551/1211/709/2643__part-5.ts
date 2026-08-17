/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2643__part-5
 */

"use strict"

import { be } from "./2643__part-2"
import { tn, rn } from "./2643__part-4"
import * as /* [auto-meaningful-name] */Module_2645 from /* 2645 */"../../../552/1214/690/2645"
import * as /* [auto-meaningful-name] */Module_2674 from /* 2674 */"../269/2674"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../54"
import /* 107 */"../../../107"
import * as /* [auto-meaningful-name] */Module_2675 from /* 2675 */"./798/2675"
function an(e) {
  var t = "function" === typeof e
  return {
    create: function (n, r) {
      var o
      try {
        o = t ? e(n) : e
      } catch (c) {
        throw c
      }
      if (!r || !n.overrides || !n.overrides[r]) {
        return o
      }
      var a = n.overrides[r]
      var s = Module_19.a({}, o)
      Object.keys(a).forEach(function (e) {
        s[e] = Module_2675.a(s[e], a[e])
      })
      return s
    },
    options: {}
  }
}
var sn = {}
function cn(e, t, n) {
  var /* [auto-meaningful-name] */e$state = e.state
  if (e.stylesOptions.disableGeneration) {
    return t || {}
  }
  if (!e$state.cacheClasses) {
    e$state.cacheClasses = {
      value: null,
      lastProp: null,
      lastJSS: {}
    }
  }
  var i = false
  if (e$state.classes !== e$state.cacheClasses.lastJSS) {
    e$state.cacheClasses.lastJSS = e$state.classes
    i = true
  }
  if (t !== e$state.cacheClasses.lastProp) {
    e$state.cacheClasses.lastProp = t
    i = true
  }
  if (i) {
    e$state.cacheClasses.value = Module_2674.a({
      baseClasses: e$state.cacheClasses.lastJSS,
      newClasses: t,
      Component: n
    })
  }
  return e$state.cacheClasses.value
}
function un(e, t) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$theme = e.theme
  var /* [auto-meaningful-name] */e$stylesOptions = e.stylesOptions
  var /* [auto-meaningful-name] */e$stylesCreator = e.stylesCreator
  var /* [auto-meaningful-name] */e$name = e.name
  if (!e$stylesOptions.disableGeneration) {
    var c = be.get(e$stylesOptions.sheetsManager, e$stylesCreator, e$theme)
    if (!c) {
      c = {
        refs: 0,
        staticSheet: null,
        dynamicStyles: null
      }
      be.set(e$stylesOptions.sheetsManager, e$stylesCreator, e$theme, c)
    }
    var u = Module_19.a({}, e$stylesCreator.options, e$stylesOptions, {
      theme: e$theme,
      flip: "boolean" === typeof e$stylesOptions.flip ? e$stylesOptions.flip : "rtl" === e$theme.direction
    })
    u.generateId = u.serverGenerateClassName || u.generateClassName
    var /* [auto-meaningful-name] */e$stylesOptions$sheetsRegistry = e$stylesOptions.sheetsRegistry
    if (0 === c.refs) {
      var f
      if (e$stylesOptions.sheetsCache) {
        f = be.get(e$stylesOptions.sheetsCache, e$stylesCreator, e$theme)
      }
      var d = e$stylesCreator.create(e$theme, e$name)
      if (!f) {
        (f = e$stylesOptions.jss.createStyleSheet(d, Module_19.a({
          link: false
        }, u))).attach()
        if (e$stylesOptions.sheetsCache) {
          be.set(e$stylesOptions.sheetsCache, e$stylesCreator, e$theme, f)
        }
      }
      if (e$stylesOptions$sheetsRegistry) {
        e$stylesOptions$sheetsRegistry.add(f)
      }
      c.staticSheet = f
      c.dynamicStyles = function e(t) {
        var n = null
        for (var r in t) {
          var i = t[r]
          var o = typeof i
          if ("function" === o) {
            if (!n) {
              n = {}
            }
            n[r] = i
          } else if ("object" === o && null !== i && !Array.isArray(i)) {
            var a = e(i)
            if (a) {
              if (!n) {
                n = {}
              }
              n[r] = a
            }
          }
        }
        return n
      }(d)
    }
    if (c.dynamicStyles) {
      var h = e$stylesOptions.jss.createStyleSheet(c.dynamicStyles, Module_19.a({
        link: true
      }, u))
      h.update(t)
      h.attach()
      e$state.dynamicSheet = h
      e$state.classes = Module_2674.a({
        baseClasses: c.staticSheet.classes,
        newClasses: h.classes
      })
      if (e$stylesOptions$sheetsRegistry) {
        e$stylesOptions$sheetsRegistry.add(h)
      }
    } else {
      e$state.classes = c.staticSheet.classes
    }
    c.refs += 1
  }
}
function ln(e, t) {
  var /* [auto-meaningful-name] */e$state = e.state
  if (e$state.dynamicSheet) {
    e$state.dynamicSheet.update(t)
  }
}
function fn(e) {
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$theme = e.theme
  var /* [auto-meaningful-name] */e$stylesOptions = e.stylesOptions
  var /* [auto-meaningful-name] */e$stylesCreator = e.stylesCreator
  if (!e$stylesOptions.disableGeneration) {
    var o = be.get(e$stylesOptions.sheetsManager, e$stylesCreator, e$theme)
    o.refs -= 1
    var /* [auto-meaningful-name] */e$stylesOptions$sheetsRegistry = e$stylesOptions.sheetsRegistry
    if (0 === o.refs) {
      be.delete(e$stylesOptions.sheetsManager, e$stylesCreator, e$theme)
      e$stylesOptions.jss.removeStyleSheet(o.staticSheet)
      if (e$stylesOptions$sheetsRegistry) {
        e$stylesOptions$sheetsRegistry.remove(o.staticSheet)
      }
    }
    if (e$state.dynamicSheet) {
      e$stylesOptions.jss.removeStyleSheet(e$state.dynamicSheet)
      if (e$stylesOptions$sheetsRegistry) {
        e$stylesOptions$sheetsRegistry.remove(e$state.dynamicSheet)
      }
    }
  }
}
function dn(e, t) {
  var n
  var r = React.useRef([])
  var i = React.useMemo(function () {
    return {}
  }, t)
  if (r.current !== i) {
    r.current = i
    n = e()
  }
  React.useEffect(function () {
    return function () {
      if (n) {
        n()
      }
    }
  }, [i])
}
function hn(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  var /* [auto-meaningful-name] */t$name = t.name
  var /* [auto-meaningful-name] */t$classNamePrefix = t.classNamePrefix
  var /* [auto-meaningful-name] */t$Component = t.Component
  var /* [auto-meaningful-name] */t$defaultTheme = t.defaultTheme
  var u = undefined === t$defaultTheme ? sn : t$defaultTheme
  var l = Module_54.a(t, ["name", "classNamePrefix", "Component", "defaultTheme"])
  var f = an(e)
  var d = t$name || t$classNamePrefix || "makeStyles"
  f.options = {
    index: rn(),
    name: t$name,
    meta: d,
    classNamePrefix: d
  }
  var h = function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
    var t = Module_2645.a() || u
    var r = Module_19.a({}, React.useContext(tn), l)
    var o = React.useRef()
    var c = React.useRef()
    dn(function () {
      var i = {
        name: t$name,
        state: {},
        stylesCreator: f,
        stylesOptions: r,
        theme: t
      }
      un(i, e)
      c.current = false
      o.current = i
      return function () {
        fn(i)
      }
    }, [t, f])
    React.useEffect(function () {
      if (c.current) {
        ln(o.current, e)
      }
      c.current = true
    })
    var d = cn(o.current, e.classes, t$Component)
    return d
  }
  return h
}
export { hn }
