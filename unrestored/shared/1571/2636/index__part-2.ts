/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-2
 */

"use strict"

var b
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* 1580 */"./1580/index"
import /* 2681 */"react-intl"
import /* 719 */"./719"
import * as /* [auto-meaningful-name] */Module_188 from /* 188 */"./188"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_627 from /* 627 */"./627/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
!function (e) {
  e[e.COMMON = 0] = "COMMON"
  e[e.GREEN = 1] = "GREEN"
}(b || (b = {}))
var /* [auto-meaningful-name] */PrimaryColor = "--primary-color"
var B = {
  t10: "".concat("--light-text-color"),
  t7: "".concat("--dark-text-color", "-t7"),
  t5: "".concat("--dark-text-color", "-t5"),
  t3: "".concat("--dark-text-color", "-t3"),
  t1: "".concat("--dark-text-color", "-t1"),
  t: "".concat("--dark-text-color", "-t"),
  m2: "".concat(PrimaryColor, "-m2"),
  m1: "".concat(PrimaryColor, "-m1"),
  0: "".concat(PrimaryColor, "-0"),
  1: "".concat(PrimaryColor, "-1"),
  2: "".concat(PrimaryColor, "-2"),
  3: "".concat(PrimaryColor, "-3"),
  4: "".concat(PrimaryColor, "-4"),
  5: "".concat(PrimaryColor, "-5"),
  6: "".concat(PrimaryColor, "-6"),
  7: "".concat(PrimaryColor, "-7"),
  8: "".concat(PrimaryColor, "-8"),
  9: "".concat(PrimaryColor, "-9"),
  c: "".concat("--contrast-color"),
  "c-h": "".concat("--contrast-hover-color"),
  "c-p": "".concat("--contrast-press-color"),
  n1: "".concat("--secondary-color"),
  "n1-h": "".concat("--secondary-hover-color"),
  "n1-p": "".concat("--secondary-press-color"),
  n2: "".concat("--tertiary-color"),
  "n2-h": "".concat("--tertiary-hover-color"),
  "n2-p": "".concat("--tertiary-press-color")
}
var F = {
  N1: [37, 90, 100],
  N2: [30, 90, 100],
  N3: [360, 82, 100],
  N4: [336, 56, 100],
  N5: [292, 72, 100],
  N6: [246, 59, 100],
  N7: [214, 80, 100],
  N8: [204, 84, 100],
  N9: [134, 69, 84]
}
function G(e) {
  var t = function (e) {
    var /* [auto-meaningful-name] */e$primaryColor = e.primaryColor
    var n = {}
    n = e.rule === b.COMMON ? function (e) {
      var t = e[1]
      var n = e[2]
      return {
        t: {
          s: 15 - t,
          b: 15 - n
        },
        t7: {
          s: 15 - t,
          b: 35 - n
        },
        t5: {
          s: 15 - t,
          b: 55 - n
        },
        t3: {
          s: 15 - t,
          b: 75 - n
        },
        t1: {
          s: 7 - t,
          b: 87 - n
        },
        m2: {
          s: 10 * t / 84,
          b: -10
        },
        m1: {
          s: 5 * t / 84,
          b: -5
        },
        0: {},
        1: {
          s: 12 * -t / 84
        },
        2: {
          s: 24 * -t / 84
        },
        3: {
          s: 36 * -t / 84
        },
        4: {
          s: 48 * -t / 84
        },
        5: {
          s: 60 * -t / 84
        },
        6: {
          s: 65 * -t / 84
        },
        7: {
          s: 70 * -t / 84
        },
        8: {
          s: 75 * -t / 84
        },
        9: {
          s: 80 * -t / 84
        }
      }
    }(e$primaryColor) : function (e) {
      var t = e[1]
      var n = e[2]
      return {
        t: {
          s: 15 - t,
          b: 15 - n
        },
        t7: {
          s: 15 - t,
          b: 35 - n
        },
        t5: {
          s: 15 - t,
          b: 55 - n
        },
        t3: {
          s: 15 - t,
          b: 75 - n
        },
        t1: {
          s: 7 - t,
          b: 87 - n
        },
        m2: {
          s: 10,
          b: -10
        },
        m1: {
          s: 5,
          b: -5
        },
        0: {},
        1: {
          s: -4,
          b: 6
        },
        2: {
          s: -8,
          b: 12
        },
        3: {
          s: -40,
          b: 14
        },
        4: {
          s: -47,
          b: 16
        },
        5: {
          s: -54,
          b: 18
        },
        6: {
          s: -61,
          b: 20
        },
        7: {
          s: -68,
          b: 22
        },
        8: {
          s: -75,
          b: 24
        },
        9: {
          s: -82,
          b: 26
        }
      }
    }(e$primaryColor)
    var r = {}
    Object.keys(n).forEach(function (e) {
      var o = n[e]
      r[e] = W(e$primaryColor, o)
    })
    return r
  }(e)
  var n = U(e.extraColor)
  return Module_6.a(Module_6.a(Module_6.a(Module_6.a({}, t), n), e.lightThemeColors), {}, {
    t10: "#ffffff"
  })
}
function W(e, t) {
  var n = Module_25.a(e)
  if (t) {
    var r = t.h
    var o = t.s
    var i = t.b
    if (r) {
      n[0] += r
    }
    if (o) {
      n[1] += o
    }
    if (i) {
      n[2] += i
    }
  }
  return Color1.hsv(n).hex()
}
var U = function (e) {
  var t = {}
  Object.keys(e).forEach(function (n) {
    var r
    var o = e[n]
    var i = Module_10.a(o, 3)
    var a = i[0]
    var s = i[1]
    var c = i[2]
    t = Object.assign(t, (r = {}, Module_11.a(r, n, W(o)), Module_11.a(r, "".concat(n, "-h"), W([a, s + 5, c - 5])), Module_11.a(r, "".concat(n, "-p"), W([a, s + 10, c - 10])), r))
  })
  return t
}
var H = {
  YELLOW: {
    primaryColor: [50, 84, 100],
    lightThemeColors: {
      a1: "#E0E0E0",
      s1: "#A66100",
      s2: "#D97E00",
      m1: "#FFCE1C",
      m2: "#FFBF0F",
      7: "#F0F0F0",
      8: "#F5F5F5",
      9: "#FAFAFA",
      10: "#BF7000"
    },
    extraColor: {
      c: F.N8,
      n1: F.N2,
      n2: F.N6
    },
    rule: b.COMMON
  },
  BLUE: {
    primaryColor: [216, 84, 100],
    extraColor: {
      c: F.N2,
      n1: F.N8,
      n2: F.N9
    },
    rule: b.COMMON
  },
  GREEN: {
    primaryColor: [150, 84, 72],
    extraColor: {
      c: F.N4,
      n1: F.N7,
      n2: F.N1
    },
    rule: b.GREEN
  },
  ORANGE: {
    primaryColor: [22, 82, 100],
    extraColor: {
      c: F.N7,
      n1: F.N1,
      n2: F.N3
    },
    rule: b.COMMON
  },
  PURPLE: {
    primaryColor: [270, 84, 100],
    extraColor: {
      c: F.N1,
      n1: F.N5,
      n2: F.N8
    },
    rule: b.COMMON
  },
  RED: {
    primaryColor: [340, 84, 100],
    extraColor: {
      c: F.N9,
      n1: F.N4,
      n2: F.N2
    },
    rule: b.COMMON
  }
}
export { B }
export { G }
export { H }
