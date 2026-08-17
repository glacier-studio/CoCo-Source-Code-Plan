/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：488
 */

"use strict"

var r = {
  lessThanXSeconds: {
    one: "不到 1 秒",
    other: "不到 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分钟",
  lessThanXMinutes: {
    one: "不到 1 分钟",
    other: "不到 {{count}} 分钟"
  },
  xMinutes: {
    one: "1 分钟",
    other: "{{count}} 分钟"
  },
  xHours: {
    one: "1 小时",
    other: "{{count}} 小时"
  },
  aboutXHours: {
    one: "大约 1 小时",
    other: "大约 {{count}} 小时"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大约 1 个星期",
    other: "大约 {{count}} 个星期"
  },
  xWeeks: {
    one: "1 个星期",
    other: "{{count}} 个星期"
  },
  aboutXMonths: {
    one: "大约 1 个月",
    other: "大约 {{count}} 个月"
  },
  xMonths: {
    one: "1 个月",
    other: "{{count}} 个月"
  },
  aboutXYears: {
    one: "大约 1 年",
    other: "大约 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超过 1 年",
    other: "超过 {{count}} 年"
  },
  almostXYears: {
    one: "将近 1 年",
    other: "将近 {{count}} 年"
  }
}
var i = require(/* 700 */"./700")
var o = {
  date: i.a({
    formats: {
      full: "y'年'M'月'd'日' EEEE",
      long: "y'年'M'月'd'日'",
      medium: "yyyy-MM-dd",
      short: "yy-MM-dd"
    },
    defaultWidth: "full"
  }),
  time: i.a({
    formats: {
      full: "zzzz a h:mm:ss",
      long: "z a h:mm:ss",
      medium: "a h:mm:ss",
      short: "a h:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: i.a({
    formats: {
      full: "{{date}} {{time}}",
      long: "{{date}} {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}
var a = require(/* 436 */"./436")
var s = require(/* 104 */"./104")
function c(e, t, n, r) {
  return function (e, t, n) {
    s.a(2, arguments)
    var r = a.a(e, n)
    var i = a.a(t, n)
    return r.getTime() === i.getTime()
  }(e, t, n) ? r : e.getTime() > t.getTime() ? "'下个'" + r : "'上个'" + r
}
var u = {
  lastWeek: c,
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: c,
  other: "PP p"
}
var l = require(/* 492 */"./492")
var f = {
  ordinalNumber: function (e, t) {
    var n = Number(e)
    switch (String((t || {}).unit)) {
      case "date":
        return n.toString() + "日"
      case "hour":
        return n.toString() + "时"
      case "minute":
        return n.toString() + "分"
      case "second":
        return n.toString() + "秒"
      default:
        return "第 " + n.toString()
    }
  },
  era: l.a({
    values: {
      narrow: ["前", "公元"],
      abbreviated: ["前", "公元"],
      wide: ["公元前", "公元"]
    },
    defaultWidth: "wide"
  }),
  quarter: l.a({
    values: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["第一刻", "第二刻", "第三刻", "第四刻"],
      wide: ["第一刻钟", "第二刻钟", "第三刻钟", "第四刻钟"]
    },
    defaultWidth: "wide",
    argumentCallback: function (e) {
      return Number(e) - 1
    }
  }),
  month: l.a({
    values: {
      narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
      abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    },
    defaultWidth: "wide"
  }),
  day: l.a({
    values: {
      narrow: ["日", "一", "二", "三", "四", "五", "六"],
      short: ["日", "一", "二", "三", "四", "五", "六"],
      abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
    },
    defaultWidth: "wide"
  }),
  dayPeriod: l.a({
    values: {
      narrow: {
        am: "上",
        pm: "下",
        midnight: "凌晨",
        noon: "午",
        morning: "早",
        afternoon: "下午",
        evening: "晚",
        night: "夜"
      },
      abbreviated: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜间"
      },
      wide: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜间"
      }
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: {
        am: "上",
        pm: "下",
        midnight: "凌晨",
        noon: "午",
        morning: "早",
        afternoon: "下午",
        evening: "晚",
        night: "夜"
      },
      abbreviated: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜间"
      },
      wide: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜间"
      }
    },
    defaultFormattingWidth: "wide"
  })
}
var d = require(/* 1025 */"./1025")
var h = require(/* 493 */"./493")
var p = {
  code: "zh-CN",
  formatDistance: function (e, t, n) {
    var i
    n = n || {}
    i = "string" === typeof r[e] ? r[e] : 1 === t ? r[e].one : r[e].other.replace("{{count}}", t)
    return n.addSuffix ? n.comparison > 0 ? i + "内" : i + "前" : i
  },
  formatLong: o,
  formatRelative: function (e, t, n, r) {
    var i = u[e]
    return "function" === typeof i ? i(t, n, r, "eeee p") : i
  },
  localize: f,
  match: {
    ordinalNumber: d.a({
      matchPattern: /^(\u7b2c\s*)?\d+(\u65e5|\u65f6|\u5206|\u79d2)?/i,
      parsePattern: /\d+/i,
      valueCallback: function (e) {
        return parseInt(e, 10)
      }
    }),
    era: h.a({
      matchPatterns: {
        narrow: /^(\u524d)/i,
        abbreviated: /^(\u524d)/i,
        wide: /^(\u516c\u5143\u524d|\u516c\u5143)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^(\u524d)/i, /^(\u516c\u5143)/i]
      },
      defaultParseWidth: "any"
    }),
    quarter: h.a({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b/i,
        wide: /^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b\u949f/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/(1|\u4e00)/i, /(2|\u4e8c)/i, /(3|\u4e09)/i, /(4|\u56db)/i]
      },
      defaultParseWidth: "any",
      valueCallback: function (e) {
        return e + 1
      }
    }),
    month: h.a({
      matchPatterns: {
        narrow: /^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])/i,
        abbreviated: /^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00]|\d|1[12])\u6708/i,
        wide: /^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])\u6708/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^\u4e00/i, /^\u4e8c/i, /^\u4e09/i, /^\u56db/i, /^\u4e94/i, /^\u516d/i, /^\u4e03/i, /^\u516b/i, /^\u4e5d/i, /^\u5341(?!(\u4e00|\u4e8c))/i, /^\u5341\u4e00/i, /^\u5341\u4e8c/i],
        any: [/^\u4e00|1/i, /^\u4e8c|2/i, /^\u4e09|3/i, /^\u56db|4/i, /^\u4e94|5/i, /^\u516d|6/i, /^\u4e03|7/i, /^\u516b|8/i, /^\u4e5d|9/i, /^\u5341(?!(\u4e00|\u4e8c))|10/i, /^\u5341\u4e00|11/i, /^\u5341\u4e8c|12/i]
      },
      defaultParseWidth: "any"
    }),
    day: h.a({
      matchPatterns: {
        narrow: /^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,
        short: /^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,
        abbreviated: /^\u5468[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,
        wide: /^\u661f\u671f[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/\u65e5/i, /\u4e00/i, /\u4e8c/i, /\u4e09/i, /\u56db/i, /\u4e94/i, /\u516d/i]
      },
      defaultParseWidth: "any"
    }),
    dayPeriod: h.a({
      matchPatterns: {
        any: /^(\u4e0a\u5348?|\u4e0b\u5348?|\u5348\u591c|[\u4e2d\u6b63]\u5348|\u65e9\u4e0a?|\u4e0b\u5348|\u665a\u4e0a?|\u51cc\u6668|)/i
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^\u4e0a\u5348?/i,
          pm: /^\u4e0b\u5348?/i,
          midnight: /^\u5348\u591c/i,
          noon: /^[\u4e2d\u6b63]\u5348/i,
          morning: /^\u65e9\u4e0a/i,
          afternoon: /^\u4e0b\u5348/i,
          evening: /^\u665a\u4e0a?/i,
          night: /^\u51cc\u6668/i
        }
      },
      defaultParseWidth: "any"
    })
  },
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}
exports.a = p
