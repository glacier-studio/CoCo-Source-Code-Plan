/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：487
 */

"use strict"

var r = require(/* 169 */"./169")
var i = require(/* 109 */"./109")
var o = require(/* 104 */"../488/104")
function a(e, t) {
  o.a(2, arguments)
  var n = i.a(e)
  var a = r.a(t)
  return isNaN(a) ? new Date(NaN) : a ? (n.setDate(n.getDate() + a), n) : n
}
function s(e, t) {
  o.a(2, arguments)
  var n = i.a(e)
  var a = r.a(t)
  if (isNaN(a)) {
    return new Date(NaN)
  }
  if (!a) {
    return n
  }
  var s = n.getDate()
  var c = new Date(n.getTime())
  c.setMonth(n.getMonth() + a + 1, 0)
  var u = c.getDate()
  return s >= u ? c : (n.setFullYear(c.getFullYear(), c.getMonth(), s), n)
}
function c(e, t) {
  o.a(2, arguments)
  var n = r.a(t)
  return s(e, 12 * n)
}
function u(e) {
  o.a(1, arguments)
  var t = i.a(e)
  t.setHours(23, 59, 59, 999)
  return t
}
function l(e, t) {
  o.a(1, arguments)
  var n = t || {}
  var /* [auto-meaningful-name] */n$locale = n.locale
  var s = n$locale && n$locale.options && n$locale.options.weekStartsOn
  var c = null == s ? 0 : r.a(s)
  var u = null == n.weekStartsOn ? c : r.a(n.weekStartsOn)
  if (!(u >= 0 && u <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")
  }
  var l = i.a(e)
  var f = l.getDay()
  var d = 6 + (f < u ? -7 : 0) - (f - u)
  l.setDate(l.getDate() + d)
  l.setHours(23, 59, 59, 999)
  return l
}
function f(e) {
  o.a(1, arguments)
  var t = i.a(e)
  var n = t.getFullYear()
  t.setFullYear(n + 1, 0, 0)
  t.setHours(23, 59, 59, 999)
  return t
}
function d(e) {
  o.a(1, arguments)
  var t = i.a(e)
  return !isNaN(t)
}
var h = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}
var p = require(/* 700 */"../488/700")
var _ = {
  date: p.a({
    formats: {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy"
    },
    defaultWidth: "full"
  }),
  time: p.a({
    formats: {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a"
    },
    defaultWidth: "full"
  }),
  dateTime: p.a({
    formats: {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}
var A = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}
var g = require(/* 492 */"../488/492")
var v = {
  ordinalNumber: function (e, t) {
    var n = Number(e)
    var r = n % 100
    if (r > 20 || r < 10) {
      switch (r % 10) {
        case 1:
          return n + "st"
        case 2:
          return n + "nd"
        case 3:
          return n + "rd"
      }
    }
    return n + "th"
  },
  era: g.a({
    values: {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"]
    },
    defaultWidth: "wide"
  }),
  quarter: g.a({
    values: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    },
    defaultWidth: "wide",
    argumentCallback: function (e) {
      return Number(e) - 1
    }
  }),
  month: g.a({
    values: {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    defaultWidth: "wide"
  }),
  day: g.a({
    values: {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    defaultWidth: "wide"
  }),
  dayPeriod: g.a({
    values: {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      }
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      }
    },
    defaultFormattingWidth: "wide"
  })
}
var m = require(/* 1025 */"../488/1025")
var y = require(/* 493 */"../488/493")
var b = {
  code: "en-US",
  formatDistance: function (e, t, n) {
    var r
    n = n || {}
    r = "string" === typeof h[e] ? h[e] : 1 === t ? h[e].one : h[e].other.replace("{{count}}", t)
    return n.addSuffix ? n.comparison > 0 ? "in " + r : r + " ago" : r
  },
  formatLong: _,
  formatRelative: function (e, t, n, r) {
    return A[e]
  },
  localize: v,
  match: {
    ordinalNumber: m.a({
      matchPattern: /^(\d+)(th|st|nd|rd)?/i,
      parsePattern: /\d+/i,
      valueCallback: function (e) {
        return parseInt(e, 10)
      }
    }),
    era: y.a({
      matchPatterns: {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^b/i, /^(a|c)/i]
      },
      defaultParseWidth: "any"
    }),
    quarter: y.a({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/1/i, /2/i, /3/i, /4/i]
      },
      defaultParseWidth: "any",
      valueCallback: function (e) {
        return e + 1
      }
    }),
    month: y.a({
      matchPatterns: {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
      },
      defaultParseWidth: "any"
    }),
    day: y.a({
      matchPatterns: {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
      },
      defaultParseWidth: "any"
    }),
    dayPeriod: y.a({
      matchPatterns: {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i
        }
      },
      defaultParseWidth: "any"
    })
  },
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}
function w(e, t) {
  o.a(2, arguments)
  var n = i.a(e).getTime()
  var a = r.a(t)
  return new Date(n + a)
}
function E(e, t) {
  o.a(2, arguments)
  var n = r.a(t)
  return w(e, -n)
}
function x(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t;) {
    r = "0" + r
  }
  return n + r
}
var C = {
  y: function (e, t) {
    var n = e.getUTCFullYear()
    var r = n > 0 ? n : 1 - n
    return x("yy" === t ? r % 100 : r, t.length)
  },
  M: function (e, t) {
    var n = e.getUTCMonth()
    return "M" === t ? String(n + 1) : x(n + 1, 2)
  },
  d: function (e, t) {
    return x(e.getUTCDate(), t.length)
  },
  a: function (e, t) {
    var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am"
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase()
      case "aaa":
        return n
      case "aaaaa":
        return n[0]
      case "aaaa":
      default:
        return "am" === n ? "a.m." : "p.m."
    }
  },
  h: function (e, t) {
    return x(e.getUTCHours() % 12 || 12, t.length)
  },
  H: function (e, t) {
    return x(e.getUTCHours(), t.length)
  },
  m: function (e, t) {
    return x(e.getUTCMinutes(), t.length)
  },
  s: function (e, t) {
    return x(e.getUTCSeconds(), t.length)
  },
  S: function (e, t) {
    var /* [auto-meaningful-name] */t$length = t.length
    var r = e.getUTCMilliseconds()
    return x(Math.floor(r * Math.pow(10, t$length - 3)), t.length)
  }
}
function O(e) {
  o.a(1, arguments)
  var t = 1
  var n = i.a(e)
  var r = n.getUTCDay()
  var a = (r < t ? 7 : 0) + r - t
  n.setUTCDate(n.getUTCDate() - a)
  n.setUTCHours(0, 0, 0, 0)
  return n
}
function k(e) {
  o.a(1, arguments)
  var t = i.a(e)
  var n = t.getUTCFullYear()
  var r = new Date(0)
  r.setUTCFullYear(n + 1, 0, 4)
  r.setUTCHours(0, 0, 0, 0)
  var a = O(r)
  var s = new Date(0)
  s.setUTCFullYear(n, 0, 4)
  s.setUTCHours(0, 0, 0, 0)
  var c = O(s)
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
}
function S(e) {
  o.a(1, arguments)
  var t = k(e)
  var n = new Date(0)
  n.setUTCFullYear(t, 0, 4)
  n.setUTCHours(0, 0, 0, 0)
  var r = O(n)
  return r
}
function T(e) {
  o.a(1, arguments)
  var t = i.a(e)
  var n = O(t).getTime() - S(t).getTime()
  return Math.round(n / 6048e5) + 1
}
var B = require(/* 436 */"../488/436")
function D(e, t) {
  o.a(1, arguments)
  var n = i.a(e, t)
  var a = n.getUTCFullYear()
  var s = t || {}
  var /* [auto-meaningful-name] */s$locale = s.locale
  var u = s$locale && s$locale.options && s$locale.options.firstWeekContainsDate
  var l = null == u ? 1 : r.a(u)
  var f = null == s.firstWeekContainsDate ? l : r.a(s.firstWeekContainsDate)
  if (!(f >= 1 && f <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively")
  }
  var d = new Date(0)
  d.setUTCFullYear(a + 1, 0, f)
  d.setUTCHours(0, 0, 0, 0)
  var h = B.a(d, t)
  var p = new Date(0)
  p.setUTCFullYear(a, 0, f)
  p.setUTCHours(0, 0, 0, 0)
  var _ = B.a(p, t)
  return n.getTime() >= h.getTime() ? a + 1 : n.getTime() >= _.getTime() ? a : a - 1
}
function I(e, t) {
  o.a(1, arguments)
  var n = t || {}
  var /* [auto-meaningful-name] */n$locale = n.locale
  var a = n$locale && n$locale.options && n$locale.options.firstWeekContainsDate
  var s = null == a ? 1 : r.a(a)
  var c = null == n.firstWeekContainsDate ? s : r.a(n.firstWeekContainsDate)
  var u = D(e, t)
  var l = new Date(0)
  l.setUTCFullYear(u, 0, c)
  l.setUTCHours(0, 0, 0, 0)
  var f = B.a(l, t)
  return f
}
function R(e, t) {
  o.a(1, arguments)
  var n = i.a(e)
  var r = B.a(n, t).getTime() - I(n, t).getTime()
  return Math.round(r / 6048e5) + 1
}
var /* [auto-meaningful-name] */Midnight = "midnight"
var P = "noon"
var /* [auto-meaningful-name] */Morning = "morning"
var /* [auto-meaningful-name] */Afternoon = "afternoon"
var /* [auto-meaningful-name] */Evening = "evening"
var /* [auto-meaningful-name] */Night = "night"
function U(e, t) {
  var n = e > 0 ? "-" : "+"
  var r = Math.abs(e)
  var i = Math.floor(r / 60)
  var o = r % 60
  if (0 === o) {
    return n + String(i)
  }
  var a = t || ""
  return n + String(i) + a + x(o, 2)
}
function H(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + x(Math.abs(e) / 60, 2) : V(e, t)
}
function V(e, t) {
  var n = t || ""
  var r = e > 0 ? "-" : "+"
  var i = Math.abs(e)
  return r + x(Math.floor(i / 60), 2) + n + x(i % 60, 2)
}
var G = {
  G: function (e, t, n) {
    var r = e.getUTCFullYear() > 0 ? 1 : 0
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, {
          width: "abbreviated"
        })
      case "GGGGG":
        return n.era(r, {
          width: "narrow"
        })
      case "GGGG":
      default:
        return n.era(r, {
          width: "wide"
        })
    }
  },
  y: function (e, t, n) {
    if ("yo" === t) {
      var r = e.getUTCFullYear()
      var i = r > 0 ? r : 1 - r
      return n.ordinalNumber(i, {
        unit: "year"
      })
    }
    return C.y(e, t)
  },
  Y: function (e, t, n, r) {
    var i = D(e, r)
    var o = i > 0 ? i : 1 - i
    return "YY" === t ? x(o % 100, 2) : "Yo" === t ? n.ordinalNumber(o, {
      unit: "year"
    }) : x(o, t.length)
  },
  R: function (e, t) {
    return x(k(e), t.length)
  },
  u: function (e, t) {
    return x(e.getUTCFullYear(), t.length)
  },
  Q: function (e, t, n) {
    var r = Math.ceil((e.getUTCMonth() + 1) / 3)
    switch (t) {
      case "Q":
        return String(r)
      case "QQ":
        return x(r, 2)
      case "Qo":
        return n.ordinalNumber(r, {
          unit: "quarter"
        })
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        })
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        })
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  q: function (e, t, n) {
    var r = Math.ceil((e.getUTCMonth() + 1) / 3)
    switch (t) {
      case "q":
        return String(r)
      case "qq":
        return x(r, 2)
      case "qo":
        return n.ordinalNumber(r, {
          unit: "quarter"
        })
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        })
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        })
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        })
    }
  },
  M: function (e, t, n) {
    var r = e.getUTCMonth()
    switch (t) {
      case "M":
      case "MM":
        return C.M(e, t)
      case "Mo":
        return n.ordinalNumber(r + 1, {
          unit: "month"
        })
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        })
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        })
      case "MMMM":
      default:
        return n.month(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  L: function (e, t, n) {
    var r = e.getUTCMonth()
    switch (t) {
      case "L":
        return String(r + 1)
      case "LL":
        return x(r + 1, 2)
      case "Lo":
        return n.ordinalNumber(r + 1, {
          unit: "month"
        })
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        })
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        })
      case "LLLL":
      default:
        return n.month(r, {
          width: "wide",
          context: "standalone"
        })
    }
  },
  w: function (e, t, n, r) {
    var i = R(e, r)
    return "wo" === t ? n.ordinalNumber(i, {
      unit: "week"
    }) : x(i, t.length)
  },
  I: function (e, t, n) {
    var r = T(e)
    return "Io" === t ? n.ordinalNumber(r, {
      unit: "week"
    }) : x(r, t.length)
  },
  d: function (e, t, n) {
    return "do" === t ? n.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : C.d(e, t)
  },
  D: function (e, t, n) {
    var r = function (e) {
      o.a(1, arguments)
      var t = i.a(e)
      var n = t.getTime()
      t.setUTCMonth(0, 1)
      t.setUTCHours(0, 0, 0, 0)
      var r = t.getTime()
      var a = n - r
      return Math.floor(a / 864e5) + 1
    }(e)
    return "Do" === t ? n.ordinalNumber(r, {
      unit: "dayOfYear"
    }) : x(r, t.length)
  },
  E: function (e, t, n) {
    var r = e.getUTCDay()
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        })
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        })
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        })
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  e: function (e, t, n, r) {
    var i = e.getUTCDay()
    var o = (i - r.weekStartsOn + 8) % 7 || 7
    switch (t) {
      case "e":
        return String(o)
      case "ee":
        return x(o, 2)
      case "eo":
        return n.ordinalNumber(o, {
          unit: "day"
        })
      case "eee":
        return n.day(i, {
          width: "abbreviated",
          context: "formatting"
        })
      case "eeeee":
        return n.day(i, {
          width: "narrow",
          context: "formatting"
        })
      case "eeeeee":
        return n.day(i, {
          width: "short",
          context: "formatting"
        })
      case "eeee":
      default:
        return n.day(i, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  c: function (e, t, n, r) {
    var i = e.getUTCDay()
    var o = (i - r.weekStartsOn + 8) % 7 || 7
    switch (t) {
      case "c":
        return String(o)
      case "cc":
        return x(o, t.length)
      case "co":
        return n.ordinalNumber(o, {
          unit: "day"
        })
      case "ccc":
        return n.day(i, {
          width: "abbreviated",
          context: "standalone"
        })
      case "ccccc":
        return n.day(i, {
          width: "narrow",
          context: "standalone"
        })
      case "cccccc":
        return n.day(i, {
          width: "short",
          context: "standalone"
        })
      case "cccc":
      default:
        return n.day(i, {
          width: "wide",
          context: "standalone"
        })
    }
  },
  i: function (e, t, n) {
    var r = e.getUTCDay()
    var i = 0 === r ? 7 : r
    switch (t) {
      case "i":
        return String(i)
      case "ii":
        return x(i, t.length)
      case "io":
        return n.ordinalNumber(i, {
          unit: "day"
        })
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        })
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        })
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        })
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  a: function (e, t, n) {
    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am"
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        })
      case "aaa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase()
      case "aaaaa":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        })
      case "aaaa":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  b: function (e, t, n) {
    var r
    var i = e.getUTCHours()
    switch (r = 12 === i ? P : 0 === i ? Midnight : i / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        })
      case "bbb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase()
      case "bbbbb":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        })
      case "bbbb":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  B: function (e, t, n) {
    var r
    var i = e.getUTCHours()
    switch (r = i >= 17 ? Evening : i >= 12 ? Afternoon : i >= 4 ? Morning : Night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        })
      case "BBBBB":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        })
      case "BBBB":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        })
    }
  },
  h: function (e, t, n) {
    if ("ho" === t) {
      var r = e.getUTCHours() % 12
      if (0 === r) {
        r = 12
      }
      return n.ordinalNumber(r, {
        unit: "hour"
      })
    }
    return C.h(e, t)
  },
  H: function (e, t, n) {
    return "Ho" === t ? n.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : C.H(e, t)
  },
  K: function (e, t, n) {
    var r = e.getUTCHours() % 12
    return "Ko" === t ? n.ordinalNumber(r, {
      unit: "hour"
    }) : x(r, t.length)
  },
  k: function (e, t, n) {
    var r = e.getUTCHours()
    if (0 === r) {
      r = 24
    }
    return "ko" === t ? n.ordinalNumber(r, {
      unit: "hour"
    }) : x(r, t.length)
  },
  m: function (e, t, n) {
    return "mo" === t ? n.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : C.m(e, t)
  },
  s: function (e, t, n) {
    return "so" === t ? n.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : C.s(e, t)
  },
  S: function (e, t) {
    return C.S(e, t)
  },
  X: function (e, t, n, r) {
    var i = (r._originalDate || e).getTimezoneOffset()
    if (0 === i) {
      return "Z"
    }
    switch (t) {
      case "X":
        return H(i)
      case "XXXX":
      case "XX":
        return V(i)
      case "XXXXX":
      case "XXX":
      default:
        return V(i, ":")
    }
  },
  x: function (e, t, n, r) {
    var i = (r._originalDate || e).getTimezoneOffset()
    switch (t) {
      case "x":
        return H(i)
      case "xxxx":
      case "xx":
        return V(i)
      case "xxxxx":
      case "xxx":
      default:
        return V(i, ":")
    }
  },
  O: function (e, t, n, r) {
    var i = (r._originalDate || e).getTimezoneOffset()
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + U(i, ":")
      case "OOOO":
      default:
        return "GMT" + V(i, ":")
    }
  },
  z: function (e, t, n, r) {
    var i = (r._originalDate || e).getTimezoneOffset()
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + U(i, ":")
      case "zzzz":
      default:
        return "GMT" + V(i, ":")
    }
  },
  t: function (e, t, n, r) {
    var i = r._originalDate || e
    return x(Math.floor(i.getTime() / 1e3), t.length)
  },
  T: function (e, t, n, r) {
    return x((r._originalDate || e).getTime(), t.length)
  }
}
function z(e, t) {
  switch (e) {
    case "P":
      return t.date({
        width: "short"
      })
    case "PP":
      return t.date({
        width: "medium"
      })
    case "PPP":
      return t.date({
        width: "long"
      })
    case "PPPP":
    default:
      return t.date({
        width: "full"
      })
  }
}
function Q(e, t) {
  switch (e) {
    case "p":
      return t.time({
        width: "short"
      })
    case "pp":
      return t.time({
        width: "medium"
      })
    case "ppp":
      return t.time({
        width: "long"
      })
    case "pppp":
    default:
      return t.time({
        width: "full"
      })
  }
}
var W = {
  p: Q,
  P: function (e, t) {
    var n
    var r = e.match(/(P+)(p+)?/)
    var i = r[1]
    var o = r[2]
    if (!o) {
      return z(e, t)
    }
    switch (i) {
      case "P":
        n = t.dateTime({
          width: "short"
        })
        break
      case "PP":
        n = t.dateTime({
          width: "medium"
        })
        break
      case "PPP":
        n = t.dateTime({
          width: "long"
        })
        break
      case "PPPP":
      default:
        n = t.dateTime({
          width: "full"
        })
    }
    return n.replace("{{date}}", z(i, t)).replace("{{time}}", Q(o, t))
  }
}
function K(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()))
  t.setUTCFullYear(e.getFullYear())
  return e.getTime() - t.getTime()
}
var X = ["D", "DD"]
var Y = ["YY", "YYYY"]
function q(e) {
  return -1 !== X.indexOf(e)
}
function $(e) {
  return -1 !== Y.indexOf(e)
}
function J(e, t, n) {
  if ("YYYY" === e) {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"))
  }
  if ("YY" === e) {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"))
  }
  if ("D" === e) {
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"))
  }
  if ("DD" === e) {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"))
  }
}
var Z = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
var ee = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
var te = /^'([^]*?)'?$/
var ne = /''/g
var re = /[a-zA-Z]/
function ie(e) {
  return e.match(te)[1].replace(ne, "'")
}
function oe(e, t) {
  o.a(2, arguments)
  var n = i.a(e)
  var r = i.a(t)
  return n.getTime() > r.getTime()
}
function ae(e, t) {
  o.a(2, arguments)
  var n = i.a(e)
  var r = i.a(t)
  return n.getTime() < r.getTime()
}
function se(e) {
  o.a(1, arguments)
  var t = i.a(e)
  t.setHours(0, 0, 0, 0)
  return t
}
function ce(e) {
  o.a(1, arguments)
  var t = i.a(e)
  t.setMinutes(0, 0, 0)
  return t
}
function ue(e, t) {
  if (null == e) {
    throw new TypeError("assign requires that input parameter not be null or undefined")
  }
  for (var n in t = t || {}) if (Object.prototype.hasOwnProperty.call(t, n)) {
    e[n] = t[n]
  }
  return e
}
function le(e, t, n) {
  o.a(2, arguments)
  var a = n || {}
  var /* [auto-meaningful-name] */a$locale = a.locale
  var c = a$locale && a$locale.options && a$locale.options.weekStartsOn
  var u = null == c ? 0 : r.a(c)
  var l = null == a.weekStartsOn ? u : r.a(a.weekStartsOn)
  if (!(l >= 0 && l <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")
  }
  var f = i.a(e)
  var d = r.a(t)
  var h = f.getUTCDay()
  var p = d % 7
  var _ = (p + 7) % 7
  var A = (_ < l ? 7 : 0) + d - h
  f.setUTCDate(f.getUTCDate() + A)
  return f
}
var fe = /^(1[0-2]|0?\d)/
var de = /^(3[0-1]|[0-2]?\d)/
var he = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/
var pe = /^(5[0-3]|[0-4]?\d)/
var _e = /^(2[0-3]|[0-1]?\d)/
var Ae = /^(2[0-4]|[0-1]?\d)/
var ge = /^(1[0-1]|0?\d)/
var ve = /^(1[0-2]|0?\d)/
var me = /^[0-5]?\d/
var ye = /^[0-5]?\d/
var be = /^\d/
var we = /^\d{1,2}/
var Ee = /^\d{1,3}/
var xe = /^\d{1,4}/
var Ce = /^-?\d+/
var Oe = /^-?\d/
var ke = /^-?\d{1,2}/
var Se = /^-?\d{1,3}/
var Te = /^-?\d{1,4}/
var Be = /^([+-])(\d{2})(\d{2})?|Z/
var De = /^([+-])(\d{2})(\d{2})|Z/
var Ie = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/
var Re = /^([+-])(\d{2}):(\d{2})|Z/
var Fe = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
function Pe(e, t, n) {
  var r = t.match(e)
  if (!r) {
    return null
  }
  var i = parseInt(r[0], 10)
  return {
    value: n ? n(i) : i,
    rest: t.slice(r[0].length)
  }
}
function Ne(e, t) {
  var n = t.match(e)
  return n ? "Z" === n[0] ? {
    value: 0,
    rest: t.slice(1)
  } : {
    value: ("+" === n[1] ? 1 : -1) * (36e5 * (n[2] ? parseInt(n[2], 10) : 0) + 6e4 * (n[3] ? parseInt(n[3], 10) : 0) + 1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
    rest: t.slice(n[0].length)
  } : null
}
function Me(e, t) {
  return Pe(Ce, e, t)
}
function Le(e, t, n) {
  switch (e) {
    case 1:
      return Pe(be, t, n)
    case 2:
      return Pe(we, t, n)
    case 3:
      return Pe(Ee, t, n)
    case 4:
      return Pe(xe, t, n)
    default:
      return Pe(new RegExp("^\\d{1," + e + "}"), t, n)
  }
}
function je(e, t, n) {
  switch (e) {
    case 1:
      return Pe(Oe, t, n)
    case 2:
      return Pe(ke, t, n)
    case 3:
      return Pe(Se, t, n)
    case 4:
      return Pe(Te, t, n)
    default:
      return Pe(new RegExp("^-?\\d{1," + e + "}"), t, n)
  }
}
function Ue(e) {
  switch (e) {
    case "morning":
      return 4
    case "evening":
      return 17
    case "pm":
    case "noon":
    case "afternoon":
      return 12
    case "am":
    case "midnight":
    case "night":
    default:
      return 0
  }
}
function He(e, t) {
  var n
  var r = t > 0
  var i = r ? t : 1 - t
  if (i <= 50) {
    n = e || 100
  } else {
    var o = i + 50
    n = e + 100 * Math.floor(o / 100) - (e >= o % 100 ? 100 : 0)
  }
  return r ? n : 1 - n
}
var Ve = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var Ge = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function ze(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}
var Qe = {
  G: {
    priority: 140,
    parse: function (e, t, n, r) {
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(e, {
            width: "abbreviated"
          }) || n.era(e, {
            width: "narrow"
          })
        case "GGGGG":
          return n.era(e, {
            width: "narrow"
          })
        case "GGGG":
        default:
          return n.era(e, {
            width: "wide"
          }) || n.era(e, {
            width: "abbreviated"
          }) || n.era(e, {
            width: "narrow"
          })
      }
    },
    set: function (e, t, n, r) {
      t.era = n
      e.setUTCFullYear(n, 0, 1)
      e.setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["R", "u", "t", "T"]
  },
  y: {
    priority: 130,
    parse: function (e, t, n, r) {
      var i = function (e) {
        return {
          year: e,
          isTwoDigitYear: "yy" === t
        }
      }
      switch (t) {
        case "y":
          return Le(4, e, i)
        case "yo":
          return n.ordinalNumber(e, {
            unit: "year",
            valueCallback: i
          })
        default:
          return Le(t.length, e, i)
      }
    },
    validate: function (e, t, n) {
      return t.isTwoDigitYear || t.year > 0
    },
    set: function (e, t, n, r) {
      var i = e.getUTCFullYear()
      if (n.isTwoDigitYear) {
        var o = He(n.year, i)
        e.setUTCFullYear(o, 0, 1)
        e.setUTCHours(0, 0, 0, 0)
        return e
      }
      var a = "era" in t && 1 !== t.era ? 1 - n.year : n.year
      e.setUTCFullYear(a, 0, 1)
      e.setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]
  },
  Y: {
    priority: 130,
    parse: function (e, t, n, r) {
      var i = function (e) {
        return {
          year: e,
          isTwoDigitYear: "YY" === t
        }
      }
      switch (t) {
        case "Y":
          return Le(4, e, i)
        case "Yo":
          return n.ordinalNumber(e, {
            unit: "year",
            valueCallback: i
          })
        default:
          return Le(t.length, e, i)
      }
    },
    validate: function (e, t, n) {
      return t.isTwoDigitYear || t.year > 0
    },
    set: function (e, t, n, r) {
      var i = D(e, r)
      if (n.isTwoDigitYear) {
        var o = He(n.year, i)
        e.setUTCFullYear(o, 0, r.firstWeekContainsDate)
        e.setUTCHours(0, 0, 0, 0)
        return B.a(e, r)
      }
      var a = "era" in t && 1 !== t.era ? 1 - n.year : n.year
      e.setUTCFullYear(a, 0, r.firstWeekContainsDate)
      e.setUTCHours(0, 0, 0, 0)
      return B.a(e, r)
    },
    incompatibleTokens: ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]
  },
  R: {
    priority: 130,
    parse: function (e, t, n, r) {
      return je("R" === t ? 4 : t.length, e)
    },
    set: function (e, t, n, r) {
      var i = new Date(0)
      i.setUTCFullYear(n, 0, 4)
      i.setUTCHours(0, 0, 0, 0)
      return O(i)
    },
    incompatibleTokens: ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
  },
  u: {
    priority: 130,
    parse: function (e, t, n, r) {
      return je("u" === t ? 4 : t.length, e)
    },
    set: function (e, t, n, r) {
      e.setUTCFullYear(n, 0, 1)
      e.setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]
  },
  Q: {
    priority: 120,
    parse: function (e, t, n, r) {
      switch (t) {
        case "Q":
        case "QQ":
          return Le(t.length, e)
        case "Qo":
          return n.ordinalNumber(e, {
            unit: "quarter"
          })
        case "QQQ":
          return n.quarter(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.quarter(e, {
            width: "narrow",
            context: "formatting"
          })
        case "QQQQQ":
          return n.quarter(e, {
            width: "narrow",
            context: "formatting"
          })
        case "QQQQ":
        default:
          return n.quarter(e, {
            width: "wide",
            context: "formatting"
          }) || n.quarter(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.quarter(e, {
            width: "narrow",
            context: "formatting"
          })
      }
    },
    validate: function (e, t, n) {
      return t >= 1 && t <= 4
    },
    set: function (e, t, n, r) {
      e.setUTCMonth(3 * (n - 1), 1)
      e.setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
  },
  q: {
    priority: 120,
    parse: function (e, t, n, r) {
      switch (t) {
        case "q":
        case "qq":
          return Le(t.length, e)
        case "qo":
          return n.ordinalNumber(e, {
            unit: "quarter"
          })
        case "qqq":
          return n.quarter(e, {
            width: "abbreviated",
            context: "standalone"
          }) || n.quarter(e, {
            width: "narrow",
            context: "standalone"
          })
        case "qqqqq":
          return n.quarter(e, {
            width: "narrow",
            context: "standalone"
          })
        case "qqqq":
        default:
          return n.quarter(e, {
            width: "wide",
            context: "standalone"
          }) || n.quarter(e, {
            width: "abbreviated",
            context: "standalone"
          }) || n.quarter(e, {
            width: "narrow",
            context: "standalone"
          })
      }
    },
    validate: function (e, t, n) {
      return t >= 1 && t <= 4
    },
    set: function (e, t, n, r) {
      e.setUTCMonth(3 * (n - 1), 1)
      e.setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
  },
  M: {
    priority: 110,
    parse: function (e, t, n, r) {
      var i = function (e) {
        return e - 1
      }
      switch (t) {
        case "M":
          return Pe(fe, e, i)
        case "MM":
          return Le(2, e, i)
        case "Mo":
          return n.ordinalNumber(e, {
            unit: "month",
            valueCallback: i
          })
        case "MMM":
          return n.month(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.month(e, {
            width: "narrow",
            context: "formatting"
          })
        case "MMMMM":
          return n.month(e, {
            width: "narrow",
            context: "formatting"
          })
        case "MMMM":
        default:
          return n.month(e, {
            width: "wide",
            context: "formatting"
          }) || n.month(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.month(e, {
            width: "narrow",
            context: "formatting"
          })
      }
    },
    validate: function (e, t, n) {
      return t >= 0 && t <= 11
    },
    set: function (e, t, n, r) {
      e.setUTCMonth(n, 1)
      e.setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]
  },
  L: {
    priority: 110,
    parse: function (e, t, n, r) {
      var i = function (e) {
        return e - 1
      }
      switch (t) {
        case "L":
          return Pe(fe, e, i)
        case "LL":
          return Le(2, e, i)
        case "Lo":
          return n.ordinalNumber(e, {
            unit: "month",
            valueCallback: i
          })
        case "LLL":
          return n.month(e, {
            width: "abbreviated",
            context: "standalone"
          }) || n.month(e, {
            width: "narrow",
            context: "standalone"
          })
        case "LLLLL":
          return n.month(e, {
            width: "narrow",
            context: "standalone"
          })
        case "LLLL":
        default:
          return n.month(e, {
            width: "wide",
            context: "standalone"
          }) || n.month(e, {
            width: "abbreviated",
            context: "standalone"
          }) || n.month(e, {
            width: "narrow",
            context: "standalone"
          })
      }
    },
    validate: function (e, t, n) {
      return t >= 0 && t <= 11
    },
    set: function (e, t, n, r) {
      e.setUTCMonth(n, 1)
      e.setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]
  },
  w: {
    priority: 100,
    parse: function (e, t, n, r) {
      switch (t) {
        case "w":
          return Pe(pe, e)
        case "wo":
          return n.ordinalNumber(e, {
            unit: "week"
          })
        default:
          return Le(t.length, e)
      }
    },
    validate: function (e, t, n) {
      return t >= 1 && t <= 53
    },
    set: function (e, t, n, a) {
      return B.a(function (e, t, n) {
        o.a(2, arguments)
        var a = i.a(e)
        var s = r.a(t)
        var c = R(a, n) - s
        a.setUTCDate(a.getUTCDate() - 7 * c)
        return a
      }(e, n, a), a)
    },
    incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]
  },
  I: {
    priority: 100,
    parse: function (e, t, n, r) {
      switch (t) {
        case "I":
          return Pe(pe, e)
        case "Io":
          return n.ordinalNumber(e, {
            unit: "week"
          })
        default:
          return Le(t.length, e)
      }
    },
    validate: function (e, t, n) {
      return t >= 1 && t <= 53
    },
    set: function (e, t, n, a) {
      return O(function (e, t) {
        o.a(2, arguments)
        var n = i.a(e)
        var a = r.a(t)
        var s = T(n) - a
        n.setUTCDate(n.getUTCDate() - 7 * s)
        return n
      }(e, n, a), a)
    },
    incompatibleTokens: ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
  },
  d: {
    priority: 90,
    subPriority: 1,
    parse: function (e, t, n, r) {
      switch (t) {
        case "d":
          return Pe(de, e)
        case "do":
          return n.ordinalNumber(e, {
            unit: "date"
          })
        default:
          return Le(t.length, e)
      }
    },
    validate: function (e, t, n) {
      var r = ze(e.getUTCFullYear())
      var i = e.getUTCMonth()
      return r ? t >= 1 && t <= Ge[i] : t >= 1 && t <= Ve[i]
    },
    set: function (e, t, n, r) {
      e.setUTCDate(n)
      e.setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]
  },
  D: {
    priority: 90,
    subPriority: 1,
    parse: function (e, t, n, r) {
      switch (t) {
        case "D":
        case "DD":
          return Pe(he, e)
        case "Do":
          return n.ordinalNumber(e, {
            unit: "date"
          })
        default:
          return Le(t.length, e)
      }
    },
    validate: function (e, t, n) {
      return ze(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
    },
    set: function (e, t, n, r) {
      e.setUTCMonth(0, n)
      e.setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]
  },
  E: {
    priority: 90,
    parse: function (e, t, n, r) {
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.day(e, {
            width: "short",
            context: "formatting"
          }) || n.day(e, {
            width: "narrow",
            context: "formatting"
          })
        case "EEEEE":
          return n.day(e, {
            width: "narrow",
            context: "formatting"
          })
        case "EEEEEE":
          return n.day(e, {
            width: "short",
            context: "formatting"
          }) || n.day(e, {
            width: "narrow",
            context: "formatting"
          })
        case "EEEE":
        default:
          return n.day(e, {
            width: "wide",
            context: "formatting"
          }) || n.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.day(e, {
            width: "short",
            context: "formatting"
          }) || n.day(e, {
            width: "narrow",
            context: "formatting"
          })
      }
    },
    validate: function (e, t, n) {
      return t >= 0 && t <= 6
    },
    set: function (e, t, n, r) {
      (e = le(e, n, r)).setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["D", "i", "e", "c", "t", "T"]
  },
  e: {
    priority: 90,
    parse: function (e, t, n, r) {
      var i = function (e) {
        var t = 7 * Math.floor((e - 1) / 7)
        return (e + r.weekStartsOn + 6) % 7 + t
      }
      switch (t) {
        case "e":
        case "ee":
          return Le(t.length, e, i)
        case "eo":
          return n.ordinalNumber(e, {
            unit: "day",
            valueCallback: i
          })
        case "eee":
          return n.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.day(e, {
            width: "short",
            context: "formatting"
          }) || n.day(e, {
            width: "narrow",
            context: "formatting"
          })
        case "eeeee":
          return n.day(e, {
            width: "narrow",
            context: "formatting"
          })
        case "eeeeee":
          return n.day(e, {
            width: "short",
            context: "formatting"
          }) || n.day(e, {
            width: "narrow",
            context: "formatting"
          })
        case "eeee":
        default:
          return n.day(e, {
            width: "wide",
            context: "formatting"
          }) || n.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.day(e, {
            width: "short",
            context: "formatting"
          }) || n.day(e, {
            width: "narrow",
            context: "formatting"
          })
      }
    },
    validate: function (e, t, n) {
      return t >= 0 && t <= 6
    },
    set: function (e, t, n, r) {
      (e = le(e, n, r)).setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]
  },
  c: {
    priority: 90,
    parse: function (e, t, n, r) {
      var i = function (e) {
        var t = 7 * Math.floor((e - 1) / 7)
        return (e + r.weekStartsOn + 6) % 7 + t
      }
      switch (t) {
        case "c":
        case "cc":
          return Le(t.length, e, i)
        case "co":
          return n.ordinalNumber(e, {
            unit: "day",
            valueCallback: i
          })
        case "ccc":
          return n.day(e, {
            width: "abbreviated",
            context: "standalone"
          }) || n.day(e, {
            width: "short",
            context: "standalone"
          }) || n.day(e, {
            width: "narrow",
            context: "standalone"
          })
        case "ccccc":
          return n.day(e, {
            width: "narrow",
            context: "standalone"
          })
        case "cccccc":
          return n.day(e, {
            width: "short",
            context: "standalone"
          }) || n.day(e, {
            width: "narrow",
            context: "standalone"
          })
        case "cccc":
        default:
          return n.day(e, {
            width: "wide",
            context: "standalone"
          }) || n.day(e, {
            width: "abbreviated",
            context: "standalone"
          }) || n.day(e, {
            width: "short",
            context: "standalone"
          }) || n.day(e, {
            width: "narrow",
            context: "standalone"
          })
      }
    },
    validate: function (e, t, n) {
      return t >= 0 && t <= 6
    },
    set: function (e, t, n, r) {
      (e = le(e, n, r)).setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]
  },
  i: {
    priority: 90,
    parse: function (e, t, n, r) {
      var i = function (e) {
        return 0 === e ? 7 : e
      }
      switch (t) {
        case "i":
        case "ii":
          return Le(t.length, e)
        case "io":
          return n.ordinalNumber(e, {
            unit: "day"
          })
        case "iii":
          return n.day(e, {
            width: "abbreviated",
            context: "formatting",
            valueCallback: i
          }) || n.day(e, {
            width: "short",
            context: "formatting",
            valueCallback: i
          }) || n.day(e, {
            width: "narrow",
            context: "formatting",
            valueCallback: i
          })
        case "iiiii":
          return n.day(e, {
            width: "narrow",
            context: "formatting",
            valueCallback: i
          })
        case "iiiiii":
          return n.day(e, {
            width: "short",
            context: "formatting",
            valueCallback: i
          }) || n.day(e, {
            width: "narrow",
            context: "formatting",
            valueCallback: i
          })
        case "iiii":
        default:
          return n.day(e, {
            width: "wide",
            context: "formatting",
            valueCallback: i
          }) || n.day(e, {
            width: "abbreviated",
            context: "formatting",
            valueCallback: i
          }) || n.day(e, {
            width: "short",
            context: "formatting",
            valueCallback: i
          }) || n.day(e, {
            width: "narrow",
            context: "formatting",
            valueCallback: i
          })
      }
    },
    validate: function (e, t, n) {
      return t >= 1 && t <= 7
    },
    set: function (e, t, n, a) {
      (e = function (e, t) {
        o.a(2, arguments)
        var n = r.a(t)
        if (n % 7 === 0) {
          n -= 7
        }
        var a = 1
        var s = i.a(e)
        var c = s.getUTCDay()
        var u = n % 7
        var l = (u + 7) % 7
        var f = (l < a ? 7 : 0) + n - c
        s.setUTCDate(s.getUTCDate() + f)
        return s
      }(e, n, a)).setUTCHours(0, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]
  },
  a: {
    priority: 80,
    parse: function (e, t, n, r) {
      switch (t) {
        case "a":
        case "aa":
        case "aaa":
          return n.dayPeriod(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
        case "aaaaa":
          return n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
        case "aaaa":
        default:
          return n.dayPeriod(e, {
            width: "wide",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
      }
    },
    set: function (e, t, n, r) {
      e.setUTCHours(Ue(n), 0, 0, 0)
      return e
    },
    incompatibleTokens: ["b", "B", "H", "K", "k", "t", "T"]
  },
  b: {
    priority: 80,
    parse: function (e, t, n, r) {
      switch (t) {
        case "b":
        case "bb":
        case "bbb":
          return n.dayPeriod(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
        case "bbbbb":
          return n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
        case "bbbb":
        default:
          return n.dayPeriod(e, {
            width: "wide",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
      }
    },
    set: function (e, t, n, r) {
      e.setUTCHours(Ue(n), 0, 0, 0)
      return e
    },
    incompatibleTokens: ["a", "B", "H", "K", "k", "t", "T"]
  },
  B: {
    priority: 80,
    parse: function (e, t, n, r) {
      switch (t) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
        case "BBBBB":
          return n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
        case "BBBB":
        default:
          return n.dayPeriod(e, {
            width: "wide",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
      }
    },
    set: function (e, t, n, r) {
      e.setUTCHours(Ue(n), 0, 0, 0)
      return e
    },
    incompatibleTokens: ["a", "b", "t", "T"]
  },
  h: {
    priority: 70,
    parse: function (e, t, n, r) {
      switch (t) {
        case "h":
          return Pe(ve, e)
        case "ho":
          return n.ordinalNumber(e, {
            unit: "hour"
          })
        default:
          return Le(t.length, e)
      }
    },
    validate: function (e, t, n) {
      return t >= 1 && t <= 12
    },
    set: function (e, t, n, r) {
      var i = e.getUTCHours() >= 12
      if (i && n < 12) {
        e.setUTCHours(n + 12, 0, 0, 0)
      } else {
        if (i || 12 !== n) {
          e.setUTCHours(n, 0, 0, 0)
        } else {
          e.setUTCHours(0, 0, 0, 0)
        }
      }
      return e
    },
    incompatibleTokens: ["H", "K", "k", "t", "T"]
  },
  H: {
    priority: 70,
    parse: function (e, t, n, r) {
      switch (t) {
        case "H":
          return Pe(_e, e)
        case "Ho":
          return n.ordinalNumber(e, {
            unit: "hour"
          })
        default:
          return Le(t.length, e)
      }
    },
    validate: function (e, t, n) {
      return t >= 0 && t <= 23
    },
    set: function (e, t, n, r) {
      e.setUTCHours(n, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["a", "b", "h", "K", "k", "t", "T"]
  },
  K: {
    priority: 70,
    parse: function (e, t, n, r) {
      switch (t) {
        case "K":
          return Pe(ge, e)
        case "Ko":
          return n.ordinalNumber(e, {
            unit: "hour"
          })
        default:
          return Le(t.length, e)
      }
    },
    validate: function (e, t, n) {
      return t >= 0 && t <= 11
    },
    set: function (e, t, n, r) {
      if (e.getUTCHours() >= 12 && n < 12) {
        e.setUTCHours(n + 12, 0, 0, 0)
      } else {
        e.setUTCHours(n, 0, 0, 0)
      }
      return e
    },
    incompatibleTokens: ["a", "b", "h", "H", "k", "t", "T"]
  },
  k: {
    priority: 70,
    parse: function (e, t, n, r) {
      switch (t) {
        case "k":
          return Pe(Ae, e)
        case "ko":
          return n.ordinalNumber(e, {
            unit: "hour"
          })
        default:
          return Le(t.length, e)
      }
    },
    validate: function (e, t, n) {
      return t >= 1 && t <= 24
    },
    set: function (e, t, n, r) {
      var i = n <= 24 ? n % 24 : n
      e.setUTCHours(i, 0, 0, 0)
      return e
    },
    incompatibleTokens: ["a", "b", "h", "H", "K", "t", "T"]
  },
  m: {
    priority: 60,
    parse: function (e, t, n, r) {
      switch (t) {
        case "m":
          return Pe(me, e)
        case "mo":
          return n.ordinalNumber(e, {
            unit: "minute"
          })
        default:
          return Le(t.length, e)
      }
    },
    validate: function (e, t, n) {
      return t >= 0 && t <= 59
    },
    set: function (e, t, n, r) {
      e.setUTCMinutes(n, 0, 0)
      return e
    },
    incompatibleTokens: ["t", "T"]
  },
  s: {
    priority: 50,
    parse: function (e, t, n, r) {
      switch (t) {
        case "s":
          return Pe(ye, e)
        case "so":
          return n.ordinalNumber(e, {
            unit: "second"
          })
        default:
          return Le(t.length, e)
      }
    },
    validate: function (e, t, n) {
      return t >= 0 && t <= 59
    },
    set: function (e, t, n, r) {
      e.setUTCSeconds(n, 0)
      return e
    },
    incompatibleTokens: ["t", "T"]
  },
  S: {
    priority: 30,
    parse: function (e, t, n, r) {
      return Le(t.length, e, function (e) {
        return Math.floor(e * Math.pow(10, 3 - t.length))
      })
    },
    set: function (e, t, n, r) {
      e.setUTCMilliseconds(n)
      return e
    },
    incompatibleTokens: ["t", "T"]
  },
  X: {
    priority: 10,
    parse: function (e, t, n, r) {
      switch (t) {
        case "X":
          return Ne(Be, e)
        case "XX":
          return Ne(De, e)
        case "XXXX":
          return Ne(Ie, e)
        case "XXXXX":
          return Ne(Fe, e)
        case "XXX":
        default:
          return Ne(Re, e)
      }
    },
    set: function (e, t, n, r) {
      return t.timestampIsSet ? e : new Date(e.getTime() - n)
    },
    incompatibleTokens: ["t", "T", "x"]
  },
  x: {
    priority: 10,
    parse: function (e, t, n, r) {
      switch (t) {
        case "x":
          return Ne(Be, e)
        case "xx":
          return Ne(De, e)
        case "xxxx":
          return Ne(Ie, e)
        case "xxxxx":
          return Ne(Fe, e)
        case "xxx":
        default:
          return Ne(Re, e)
      }
    },
    set: function (e, t, n, r) {
      return t.timestampIsSet ? e : new Date(e.getTime() - n)
    },
    incompatibleTokens: ["t", "T", "X"]
  },
  t: {
    priority: 40,
    parse: function (e, t, n, r) {
      return Me(e)
    },
    set: function (e, t, n, r) {
      return [
        new Date(1e3 * n), {
          timestampIsSet: true
        }
      ]
    },
    incompatibleTokens: "*"
  },
  T: {
    priority: 20,
    parse: function (e, t, n, r) {
      return Me(e)
    },
    set: function (e, t, n, r) {
      return [
        new Date(n), {
          timestampIsSet: true
        }
      ]
    },
    incompatibleTokens: "*"
  }
}
var We = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
var Ke = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
var Xe = /^'([^]*?)'?$/
var Ye = /''/g
var qe = /\S/
var $e = /[a-zA-Z]/
function Je(e, t) {
  if (t.timestampIsSet) {
    return e
  }
  var n = new Date(0)
  n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
  n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())
  return n
}
function Ze(e) {
  return e.match(Xe)[1].replace(Ye, "'")
}
function et(e) {
  o.a(1, arguments)
  var t = i.a(e)
  var n = t.getFullYear()
  var r = t.getMonth()
  var a = new Date(0)
  a.setFullYear(n, r + 1, 0)
  a.setHours(0, 0, 0, 0)
  return a.getDate()
}
function tt(e) {
  o.a(1, arguments)
  var t = i.a(e)
  t.setDate(1)
  t.setHours(0, 0, 0, 0)
  return t
}
function nt(e) {
  o.a(1, arguments)
  var t = i.a(e)
  var n = t.getMonth()
  t.setFullYear(t.getFullYear(), n + 1, 0)
  t.setHours(23, 59, 59, 999)
  return t
}
function rt(e, t) {
  o.a(1, arguments)
  var n = t || {}
  var /* [auto-meaningful-name] */n$locale = n.locale
  var s = n$locale && n$locale.options && n$locale.options.weekStartsOn
  var c = null == s ? 0 : r.a(s)
  var u = null == n.weekStartsOn ? c : r.a(n.weekStartsOn)
  if (!(u >= 0 && u <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")
  }
  var l = i.a(e)
  var f = l.getDay()
  var d = (f < u ? 7 : 0) + f - u
  l.setDate(l.getDate() - d)
  l.setHours(0, 0, 0, 0)
  return l
}
function it(e) {
  o.a(1, arguments)
  var t = i.a(e)
  var n = new Date(0)
  n.setFullYear(t.getFullYear(), 0, 1)
  n.setHours(0, 0, 0, 0)
  return n
}
var ot = function () {
  function e(e) {
    var /* [auto-meaningful-name] */UndefinedEE$locale = (undefined === e ? {} : e).locale
    this.yearFormat = "yyyy"
    this.yearMonthFormat = "MMMM yyyy"
    this.dateTime12hFormat = "MMMM do hh:mm aaaa"
    this.dateTime24hFormat = "MMMM do HH:mm"
    this.time12hFormat = "hh:mm a"
    this.time24hFormat = "HH:mm"
    this.dateFormat = "MMMM do"
    this.locale = UndefinedEE$locale
  }
  e.prototype.addDays = function (e, t) {
    return a(e, t)
  }
  e.prototype.isValid = function (e) {
    return d(this.date(e))
  }
  e.prototype.getDiff = function (e, t) {
    return function (e, t) {
      o.a(2, arguments)
      var n = i.a(e)
      var r = i.a(t)
      return n.getTime() - r.getTime()
    }(e, this.date(t))
  }
  e.prototype.isAfter = function (e, t) {
    return oe(e, t)
  }
  e.prototype.isBefore = function (e, t) {
    return ae(e, t)
  }
  e.prototype.startOfDay = function (e) {
    return se(e)
  }
  e.prototype.endOfDay = function (e) {
    return u(e)
  }
  e.prototype.getHours = function (e) {
    return function (e) {
      o.a(1, arguments)
      var t = i.a(e)
      var n = t.getHours()
      return n
    }(e)
  }
  e.prototype.setHours = function (e, t) {
    return function (e, t) {
      o.a(2, arguments)
      var n = i.a(e)
      var a = r.a(t)
      n.setHours(a)
      return n
    }(e, t)
  }
  e.prototype.setMinutes = function (e, t) {
    return function (e, t) {
      o.a(2, arguments)
      var n = i.a(e)
      var a = r.a(t)
      n.setMinutes(a)
      return n
    }(e, t)
  }
  e.prototype.getSeconds = function (e) {
    return function (e) {
      o.a(1, arguments)
      var t = i.a(e)
      var n = t.getSeconds()
      return n
    }(e)
  }
  e.prototype.setSeconds = function (e, t) {
    return function (e, t) {
      o.a(2, arguments)
      var n = i.a(e)
      var a = r.a(t)
      n.setSeconds(a)
      return n
    }(e, t)
  }
  e.prototype.isSameDay = function (e, t) {
    return function (e, t) {
      o.a(2, arguments)
      var n = se(e)
      var r = se(t)
      return n.getTime() === r.getTime()
    }(e, t)
  }
  e.prototype.isSameMonth = function (e, t) {
    return function (e, t) {
      o.a(2, arguments)
      var n = i.a(e)
      var r = i.a(t)
      return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
    }(e, t)
  }
  e.prototype.isSameYear = function (e, t) {
    return function (e, t) {
      o.a(2, arguments)
      var n = i.a(e)
      var r = i.a(t)
      return n.getFullYear() === r.getFullYear()
    }(e, t)
  }
  e.prototype.isSameHour = function (e, t) {
    return function (e, t) {
      o.a(2, arguments)
      var n = ce(e)
      var r = ce(t)
      return n.getTime() === r.getTime()
    }(e, t)
  }
  e.prototype.startOfMonth = function (e) {
    return tt(e)
  }
  e.prototype.endOfMonth = function (e) {
    return nt(e)
  }
  e.prototype.getYear = function (e) {
    return function (e) {
      o.a(1, arguments)
      var t = i.a(e)
      var n = t.getFullYear()
      return n
    }(e)
  }
  e.prototype.setYear = function (e, t) {
    return function (e, t) {
      o.a(2, arguments)
      var n = i.a(e)
      var a = r.a(t)
      return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(a), n)
    }(e, t)
  }
  e.prototype.date = function (e) {
    return "undefined" === typeof e ? new Date() : null === e ? null : new Date(e)
  }
  e.prototype.parse = function (e, t) {
    return "" === e ? null : function (e, t, n, a) {
      o.a(3, arguments)
      var s = String(e)
      var c = String(t)
      var u = a || {}
      var l = u.locale || b
      if (!l.match) {
        throw new RangeError("locale must contain match property")
      }
      var f = l.options && l.options.firstWeekContainsDate
      var d = null == f ? 1 : r.a(f)
      var h = null == u.firstWeekContainsDate ? d : r.a(u.firstWeekContainsDate)
      if (!(h >= 1 && h <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively")
      }
      var p = l.options && l.options.weekStartsOn
      var _ = null == p ? 0 : r.a(p)
      var A = null == u.weekStartsOn ? _ : r.a(u.weekStartsOn)
      if (!(A >= 0 && A <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")
      }
      if ("" === c) {
        return "" === s ? i.a(n) : new Date(NaN)
      }
      var g
      var v = {
        firstWeekContainsDate: h,
        weekStartsOn: A,
        locale: l
      }
      var m = [
        {
          priority: 10,
          subPriority: -1,
          set: Je,
          index: 0
        }
      ]
      var y = c.match(Ke).map(function (e) {
        var t = e[0]
        return "p" === t || "P" === t ? (0, W[t])(e, l.formatLong, v) : e
      }).join("").match(We)
      var w = []
      for (g = 0; g < y.length; g++) {
        var x = y[g]
        if (!u.useAdditionalWeekYearTokens && $(x)) {
          J(x, c, e)
        }
        if (!u.useAdditionalDayOfYearTokens && q(x)) {
          J(x, c, e)
        }
        var C = x[0]
        var O = Qe[C]
        if (O) {
          var /* [auto-meaningful-name] */O$incompatibleTokens = O.incompatibleTokens
          if (Array.isArray(O$incompatibleTokens)) {
            for (var S = undefined, T = 0; T < w.length; T++) {
              var /* [auto-meaningful-name] */wT$token = w[T].token
              if (-1 !== O$incompatibleTokens.indexOf(wT$token) || wT$token === C) {
                S = w[T]
                break
              }
            }
            if (S) {
              throw new RangeError("The format string mustn't contain `".concat(S.fullToken, "` and `").concat(x, "` at the same time"))
            }
          } else if ("*" === O.incompatibleTokens && w.length) {
            throw new RangeError("The format string mustn't contain `".concat(x, "` and any other token at the same time"))
          }
          w.push({
            token: C,
            fullToken: x
          })
          var D = O.parse(s, x, l.match, v)
          if (!D) {
            return new Date(NaN)
          }
          m.push({
            priority: O.priority,
            subPriority: O.subPriority || 0,
            set: O.set,
            validate: O.validate,
            value: D.value,
            index: m.length
          })
          s = D.rest
        } else {
          if (C.match($e)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + C + "`")
          }
          if ("''" === x) {
            x = "'"
          } else {
            if ("'" === C) {
              x = Ze(x)
            }
          }
          if (0 !== s.indexOf(x)) {
            return new Date(NaN)
          }
          s = s.slice(x.length)
        }
      }
      if (s.length > 0 && qe.test(s)) {
        return new Date(NaN)
      }
      var I = m.map(function (e) {
        return e.priority
      }).sort(function (e, t) {
        return t - e
      }).filter(function (e, t, n) {
        return n.indexOf(e) === t
      }).map(function (e) {
        return m.filter(function (t) {
          return t.priority === e
        }).sort(function (e, t) {
          return t.subPriority - e.subPriority
        })
      }).map(function (e) {
        return e[0]
      })
      var R = i.a(n)
      if (isNaN(R)) {
        return new Date(NaN)
      }
      var F = E(R, K(R))
      var P = {}
      for (g = 0; g < I.length; g++) {
        var N = I[g]
        if (N.validate && !N.validate(F, N.value, v)) {
          return new Date(NaN)
        }
        var M = N.set(F, P, N.value, v)
        if (M[0]) {
          F = M[0]
          ue(P, M[1])
        } else {
          F = M
        }
      }
      return F
    }(e, t, new Date(), {
      locale: this.locale
    })
  }
  e.prototype.format = function (e, t) {
    return function (e, t, n) {
      o.a(2, arguments)
      var a = String(t)
      var s = n || {}
      var c = s.locale || b
      var u = c.options && c.options.firstWeekContainsDate
      var l = null == u ? 1 : r.a(u)
      var f = null == s.firstWeekContainsDate ? l : r.a(s.firstWeekContainsDate)
      if (!(f >= 1 && f <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively")
      }
      var h = c.options && c.options.weekStartsOn
      var p = null == h ? 0 : r.a(h)
      var _ = null == s.weekStartsOn ? p : r.a(s.weekStartsOn)
      if (!(_ >= 0 && _ <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")
      }
      if (!c.localize) {
        throw new RangeError("locale must contain localize property")
      }
      if (!c.formatLong) {
        throw new RangeError("locale must contain formatLong property")
      }
      var A = i.a(e)
      if (!d(A)) {
        throw new RangeError("Invalid time value")
      }
      var g = K(A)
      var v = E(A, g)
      var m = {
        firstWeekContainsDate: f,
        weekStartsOn: _,
        locale: c,
        _originalDate: A
      }
      var y = a.match(ee).map(function (e) {
        var t = e[0]
        return "p" === t || "P" === t ? (0, W[t])(e, c.formatLong, m) : e
      }).join("").match(Z).map(function (n) {
        if ("''" === n) {
          return "'"
        }
        var r = n[0]
        if ("'" === r) {
          return ie(n)
        }
        var i = G[r]
        if (i) {
          if (!s.useAdditionalWeekYearTokens && $(n)) {
            J(n, t, e)
          }
          if (!s.useAdditionalDayOfYearTokens && q(n)) {
            J(n, t, e)
          }
          return i(v, n, c.localize, m)
        }
        if (r.match(re)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + r + "`")
        }
        return n
      }).join("")
      return y
    }(e, t, {
      locale: this.locale
    })
  }
  e.prototype.isEqual = function (e, t) {
    return null === e && null === t || function (e, t) {
      o.a(2, arguments)
      var n = i.a(e)
      var r = i.a(t)
      return n.getTime() === r.getTime()
    }(e, t)
  }
  e.prototype.isNull = function (e) {
    return null === e
  }
  e.prototype.isAfterDay = function (e, t) {
    return oe(e, u(t))
  }
  e.prototype.isBeforeDay = function (e, t) {
    return ae(e, se(t))
  }
  e.prototype.isBeforeYear = function (e, t) {
    return ae(e, it(t))
  }
  e.prototype.isAfterYear = function (e, t) {
    return oe(e, f(t))
  }
  e.prototype.formatNumber = function (e) {
    return e
  }
  e.prototype.getMinutes = function (e) {
    return e.getMinutes()
  }
  e.prototype.getMonth = function (e) {
    return e.getMonth()
  }
  e.prototype.setMonth = function (e, t) {
    return function (e, t) {
      o.a(2, arguments)
      var n = i.a(e)
      var a = r.a(t)
      var s = n.getFullYear()
      var c = n.getDate()
      var u = new Date(0)
      u.setFullYear(s, a, 15)
      u.setHours(0, 0, 0, 0)
      var l = et(u)
      n.setMonth(a, Math.min(c, l))
      return n
    }(e, t)
  }
  e.prototype.getMeridiemText = function (e) {
    return "am" === e ? "AM" : "PM"
  }
  e.prototype.getNextMonth = function (e) {
    return s(e, 1)
  }
  e.prototype.getPreviousMonth = function (e) {
    return s(e, -1)
  }
  e.prototype.getMonthArray = function (e) {
    for (var t = [it(e)]; t.length < 12;) {
      var n = t[t.length - 1]
      t.push(this.getNextMonth(n))
    }
    return t
  }
  e.prototype.mergeDateAndTime = function (e, t) {
    return this.setMinutes(this.setHours(e, this.getHours(t)), this.getMinutes(t))
  }
  e.prototype.getWeekdays = function () {
    var e = this
    var t = new Date()
    return function (e, t) {
      o.a(1, arguments)
      var n = e || {}
      var r = i.a(n.start)
      var a = i.a(n.end)
      var s = a.getTime()
      if (!(r.getTime() <= s)) {
        throw new RangeError("Invalid interval")
      }
      var c = []
      var u = r
      u.setHours(0, 0, 0, 0)
      var l = t && "step" in t ? Number(t.step) : 1
      if (l < 1 || isNaN(l)) {
        throw new RangeError("`options.step` must be a number greater than 1")
      }
      for (; u.getTime() <= s;) {
        c.push(i.a(u))
        u.setDate(u.getDate() + l)
        u.setHours(0, 0, 0, 0)
      }
      return c
    }({
      start: rt(t, {
        locale: this.locale
      }),
      end: l(t, {
        locale: this.locale
      })
    }).map(function (t) {
      return e.format(t, "EEEEEE")
    })
  }
  e.prototype.getWeekArray = function (e) {
    for (var t = rt(tt(e), {
        locale: this.locale
      }), n = l(nt(e), {
        locale: this.locale
      }), r = 0, i = t, o = []; ae(i, n);) {
      var s = Math.floor(r / 7)
      o[s] = o[s] || []
      o[s].push(i)
      i = a(i, 1)
      r += 1
    }
    return o
  }
  e.prototype.getYearRange = function (e, t) {
    for (var n = it(e), r = f(t), i = [], o = n; ae(o, r);) {
      i.push(o)
      o = c(o, 1)
    }
    return i
  }
  e.prototype.getCalendarHeaderText = function (e) {
    return this.format(e, this.yearMonthFormat)
  }
  e.prototype.getYearText = function (e) {
    return this.format(e, "yyyy")
  }
  e.prototype.getDatePickerHeaderText = function (e) {
    return this.format(e, "EEE, MMM d")
  }
  e.prototype.getDateTimePickerHeaderText = function (e) {
    return this.format(e, "MMM d")
  }
  e.prototype.getMonthText = function (e) {
    return this.format(e, "MMMM")
  }
  e.prototype.getDayText = function (e) {
    return this.format(e, "d")
  }
  e.prototype.getHourText = function (e, t) {
    return this.format(e, t ? "hh" : "HH")
  }
  e.prototype.getMinuteText = function (e) {
    return this.format(e, "mm")
  }
  e.prototype.getSecondText = function (e) {
    return this.format(e, "ss")
  }
  return e
}()
exports.a = ot
