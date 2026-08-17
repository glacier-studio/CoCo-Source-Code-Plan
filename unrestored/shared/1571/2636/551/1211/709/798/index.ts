/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：798
 */

"use strict"

var r = require(/* 35 */"../../../../35")
var i = require(/* 54 */"../../../../54")
var o = require(/* 2675 */"./2675")
var a = require(/* 19 */"../../../../19")
var s = ["xs", "sm", "md", "lg", "xl"]
function c(e) {
  var /* [auto-meaningful-name] */e$values = e.values
  var n = undefined === e$values ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : e$values
  var /* [auto-meaningful-name] */e$unit = e.unit
  var o = undefined === e$unit ? "px" : e$unit
  var /* [auto-meaningful-name] */e$step = e.step
  var u = undefined === e$step ? 5 : e$step
  var l = i.a(e, ["values", "unit", "step"])
  function f(e) {
    var t = "number" === typeof n[e] ? n[e] : e
    return "@media (min-width:".concat(t).concat(o, ")")
  }
  function d(e, t) {
    var r = s.indexOf(t)
    return r === s.length - 1 ? f(e) : "@media (min-width:".concat("number" === typeof n[e] ? n[e] : e).concat(o, ") and ") + "(max-width:".concat((-1 !== r && "number" === typeof n[s[r + 1]] ? n[s[r + 1]] : t) - u / 100).concat(o, ")")
  }
  return a.a({
    keys: s,
    values: n,
    up: f,
    down: function (e) {
      var t = s.indexOf(e) + 1
      var r = n[s[t]]
      return t === s.length ? f("xs") : "@media (max-width:".concat(("number" === typeof r && t > 0 ? r : e) - u / 100).concat(o, ")")
    },
    between: d,
    only: function (e) {
      return d(e, e)
    },
    width: function (e) {
      return n[e]
    }
  }, l)
}
function u(e, t, n) {
  var i
  return a.a({
    gutters: function () {
      var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
      console.warn(["Material-UI: theme.mixins.gutters() is deprecated.", "You can use the source of the mixin directly:", "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n"))
      return a.a({
        paddingLeft: t(2),
        paddingRight: t(2)
      }, n, r.a({}, e.up("sm"), a.a({
        paddingLeft: t(3),
        paddingRight: t(3)
      }, n[e.up("sm")])))
    },
    toolbar: (i = {
      minHeight: 56
    }, r.a(i, "".concat(e.up("xs"), " and (orientation: landscape)"), {
      minHeight: 48
    }), r.a(i, e.up("sm"), {
      minHeight: 64
    }), i)
  }, n)
}
var l = require(/* 1547 */"../../269/1547")
var f = {
  black: "#000",
  white: "#fff"
}
var d = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#d5d5d5",
  A200: "#aaaaaa",
  A400: "#303030",
  A700: "#616161"
}
var h = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  A100: "#8c9eff",
  A200: "#536dfe",
  A400: "#3d5afe",
  A700: "#304ffe"
}
var p = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
  A100: "#ff80ab",
  A200: "#ff4081",
  A400: "#f50057",
  A700: "#c51162"
}
var _ = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}
var A = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}
var g = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}
var v = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}
var m = require(/* 396 */"../../269/396")
var y = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: f.white,
    default: d[50]
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: .04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: .08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: .38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: .12,
    activatedOpacity: .12
  }
}
var b = {
  text: {
    primary: f.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: d[800],
    default: "#303030"
  },
  action: {
    active: f.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: .08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: .16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: .38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: .12,
    activatedOpacity: .24
  }
}
function w(e, t, n, r) {
  var i = r.light || r
  var o = r.dark || 1.5 * r
  if (!e[t]) {
    if (e.hasOwnProperty(n)) {
      e[t] = e[n]
    } else {
      if ("light" === t) {
        e.light = m.e(e.main, i)
      } else {
        if ("dark" === t) {
          e.dark = m.b(e.main, o)
        }
      }
    }
  }
}
function E(e) {
  var /* [auto-meaningful-name] */e$primary = e.primary
  var n = undefined === e$primary ? {
    light: h[300],
    main: h[500],
    dark: h[700]
  } : e$primary
  var /* [auto-meaningful-name] */e$secondary = e.secondary
  var s = undefined === e$secondary ? {
    light: p.A200,
    main: p.A400,
    dark: p.A700
  } : e$secondary
  var /* [auto-meaningful-name] */e$error = e.error
  var u = undefined === e$error ? {
    light: _[300],
    main: _[500],
    dark: _[700]
  } : e$error
  var /* [auto-meaningful-name] */e$warning = e.warning
  var x = undefined === e$warning ? {
    light: A[300],
    main: A[500],
    dark: A[700]
  } : e$warning
  var /* [auto-meaningful-name] */e$info = e.info
  var O = undefined === e$info ? {
    light: g[300],
    main: g[500],
    dark: g[700]
  } : e$info
  var /* [auto-meaningful-name] */e$success = e.success
  var S = undefined === e$success ? {
    light: v[300],
    main: v[500],
    dark: v[700]
  } : e$success
  var /* [auto-meaningful-name] */e$type = e.type
  var B = undefined === e$type ? "light" : e$type
  var /* [auto-meaningful-name] */e$contrastThreshold = e.contrastThreshold
  var I = undefined === e$contrastThreshold ? 3 : e$contrastThreshold
  var /* [auto-meaningful-name] */e$tonalOffset = e.tonalOffset
  var F = undefined === e$tonalOffset ? .2 : e$tonalOffset
  var P = i.a(e, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"])
  function N(e) {
    return m.d(e, b.text.primary) >= I ? b.text.primary : y.text.primary
  }
  var M = function (e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 500
    var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 300
    var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 700
    if (!(e = a.a({}, e)).main && e[t]) {
      e.main = e[t]
    }
    if (!e.main) {
      throw new Error(l.a(4, t))
    }
    if ("string" !== typeof e.main) {
      throw new Error(l.a(5, JSON.stringify(e.main)))
    }
    w(e, "light", n, F)
    w(e, "dark", r, F)
    if (!e.contrastText) {
      e.contrastText = N(e.main)
    }
    return e
  }
  var L = {
    dark: b,
    light: y
  }
  return o.a(a.a({
    common: f,
    type: B,
    primary: M(n),
    secondary: M(s, "A400", "A200", "A700"),
    error: M(u),
    warning: M(x),
    info: M(O),
    success: M(S),
    grey: d,
    contrastThreshold: I,
    getContrastText: N,
    augmentColor: M,
    tonalOffset: F
  }, L[B]), P)
}
function x(e) {
  return Math.round(1e5 * e) / 1e5
}
function C(e) {
  return x(e)
}
var O = {
  textTransform: "uppercase"
}
function k(e, t) {
  var n = "function" === typeof t ? t(e) : t
  var /* [auto-meaningful-name] */n$fontFamily = n.fontFamily
  var s = undefined === n$fontFamily ? "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif" : n$fontFamily
  var /* [auto-meaningful-name] */n$fontSize = n.fontSize
  var u = undefined === n$fontSize ? 14 : n$fontSize
  var /* [auto-meaningful-name] */n$fontWeightLight = n.fontWeightLight
  var f = undefined === n$fontWeightLight ? 300 : n$fontWeightLight
  var /* [auto-meaningful-name] */n$fontWeightRegular = n.fontWeightRegular
  var h = undefined === n$fontWeightRegular ? 400 : n$fontWeightRegular
  var /* [auto-meaningful-name] */n$fontWeightMedium = n.fontWeightMedium
  var _ = undefined === n$fontWeightMedium ? 500 : n$fontWeightMedium
  var /* [auto-meaningful-name] */n$fontWeightBold = n.fontWeightBold
  var g = undefined === n$fontWeightBold ? 700 : n$fontWeightBold
  var /* [auto-meaningful-name] */n$htmlFontSize = n.htmlFontSize
  var m = undefined === n$htmlFontSize ? 16 : n$htmlFontSize
  var /* [auto-meaningful-name] */n$allVariants = n.allVariants
  var /* [auto-meaningful-name] */n$pxToRem = n.pxToRem
  var w = i.a(n, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"])
  var E = u / 14
  var k = n$pxToRem || function (e) {
    return "".concat(e / m * E, "rem")
  }
  var S = function (e, t, n, r, i) {
    return a.a({
      fontFamily: s,
      fontWeight: e,
      fontSize: k(t),
      lineHeight: n
    }, "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif" === s ? {
      letterSpacing: "".concat(x(r / t), "em")
    } : {}, i, n$allVariants)
  }
  var T = {
    h1: S(f, 96, 1.167, -1.5),
    h2: S(f, 60, 1.2, -.5),
    h3: S(h, 48, 1.167, 0),
    h4: S(h, 34, 1.235, .25),
    h5: S(h, 24, 1.334, 0),
    h6: S(_, 20, 1.6, .15),
    subtitle1: S(h, 16, 1.75, .15),
    subtitle2: S(_, 14, 1.57, .1),
    body1: S(h, 16, 1.5, .15),
    body2: S(h, 14, 1.43, .15),
    button: S(_, 14, 1.75, .4, O),
    caption: S(h, 12, 1.66, .4),
    overline: S(h, 12, 2.66, 1, O)
  }
  return o.a(a.a({
    htmlFontSize: m,
    pxToRem: k,
    round: C,
    fontFamily: s,
    fontSize: u,
    fontWeightLight: f,
    fontWeightRegular: h,
    fontWeightMedium: _,
    fontWeightBold: g
  }, T), w, {
    clone: false
  })
}
function S() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(.2, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(.14, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(.12, ")")].join(",")
}
var T = ["none", S(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), S(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), S(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), S(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), S(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), S(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), S(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), S(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), S(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), S(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), S(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), S(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), S(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), S(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), S(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), S(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), S(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), S(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), S(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), S(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), S(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), S(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), S(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), S(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)]
var B = {
  borderRadius: 4
}
var D = require(/* 40 */"../../../../40/index")
require(/* 79 */"../../../../79/index")
var I = require(/* 107 */"../../../../107")
require(/* 50 */"../../../../50/index")
var R = function (e, t) {
  return t ? o.a(e, t, {
    clone: false
  }) : e
}
var F = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}
var P = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: function (e) {
    return "@media (min-width:".concat(F[e], "px)")
  }
}
var N = {
  m: "margin",
  p: "padding"
}
var M = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}
var L = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}
var j = function (e) {
  var t = {}
  return function (n) {
    if (undefined === t[n]) {
      t[n] = e(n)
    }
    return t[n]
  }
}(function (e) {
  if (e.length > 2) {
    if (!L[e]) {
      return [e]
    }
    e = L[e]
  }
  var t = e.split("")
  var n = D.a(t, 2)
  var r = n[0]
  var i = n[1]
  var o = N[r]
  var a = M[i] || ""
  return Array.isArray(a) ? a.map(function (e) {
    return o + e
  }) : [o + a]
})
var U = ["m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY"]
function H(e) {
  var t = e.spacing || 8
  return "number" === typeof t ? function (e) {
    return t * e
  } : Array.isArray(t) ? function (e) {
    return t[e]
  } : "function" === typeof t ? t : function () {}
}
function V(e, t) {
  return function (n) {
    return e.reduce(function (e, r) {
      e[r] = function (e, t) {
        if ("string" === typeof t || null == t) {
          return t
        }
        var n = e(Math.abs(t))
        return t >= 0 ? n : "number" === typeof n ? -n : "-".concat(n)
      }(t, n)
      return e
    }, {})
  }
}
function G(e) {
  var t = H(e.theme)
  return Object.keys(e).map(function (n) {
    if (-1 === U.indexOf(n)) {
      return null
    }
    var r = V(j(n), t)
    var i = e[n]
    return function (e, t, n) {
      if (Array.isArray(t)) {
        var r = e.theme.breakpoints || P
        return t.reduce(function (e, i, o) {
          e[r.up(r.keys[o])] = n(t[o])
          return e
        }, {})
      }
      if ("object" === I.a(t)) {
        var i = e.theme.breakpoints || P
        return Object.keys(t).reduce(function (e, r) {
          e[i.up(r)] = n(t[r])
          return e
        }, {})
      }
      return n(t)
    }(e, i, r)
  }).reduce(R, {})
}
G.propTypes = {}
G.filterProps = U
function z() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 8
  if (e.mui) {
    return e
  }
  var t = H({
    spacing: e
  })
  var n = function () {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), r = 0; r < arguments$length; r++) {
      n[r] = arguments[r]
    }
    return 0 === n.length ? t(1) : 1 === n.length ? t(n[0]) : n.map(function (e) {
      if ("string" === typeof e) {
        return e
      }
      var n = t(e)
      return "number" === typeof n ? "".concat(n, "px") : n
    }).join(" ")
  }
  Object.defineProperty(n, "unit", {
    get: function () {
      return e
    }
  })
  n.mui = true
  return n
}
var Q = require(/* 696 */"../../../../552/1214/316/696")
var W = require(/* 1026 */"./1026")
function K() {
  for (var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}, /* [auto-meaningful-name] */e$breakpoints = e.breakpoints, n = undefined === e$breakpoints ? {} : e$breakpoints, /* [auto-meaningful-name] */e$mixins = e.mixins, a = undefined === e$mixins ? {} : e$mixins, /* [auto-meaningful-name] */e$palette = e.palette, l = undefined === e$palette ? {} : e$palette, /* [auto-meaningful-name] */e$spacing = e.spacing, /* [auto-meaningful-name] */e$typography = e.typography, h = undefined === e$typography ? {} : e$typography, p = i.a(e, ["breakpoints", "mixins", "palette", "spacing", "typography"]), _ = E(l), A = c(n), g = z(e$spacing), v = o.a({
      breakpoints: A,
      direction: "ltr",
      mixins: u(A, g, a),
      overrides: {},
      palette: _,
      props: {},
      shadows: T,
      typography: k(_, h),
      spacing: g,
      shape: B,
      transitions: Q.a,
      zIndex: W.a
    }, p), /* [auto-meaningful-name] */arguments$length = arguments.length, y = new Array(arguments$length > 1 ? arguments$length - 1 : 0), b = 1; b < arguments$length; b++) {
    y[b - 1] = arguments[b]
  }
  return v = y.reduce(function (e, t) {
    return o.a(e, t)
  }, v)
}
var X = K()
exports.a = X
