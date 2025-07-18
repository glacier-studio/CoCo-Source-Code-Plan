!function (e, t) {
  if (true) {
    module.exports = t();
  } else {
    if ("function" == typeof define && define.amd) {
      define(t);
    } else {
      e.ReactIntlLocaleData = e.ReactIntlLocaleData || {};
      e.ReactIntlLocaleData.zh = t();
    }
  }
}(this, function () {
  "use strict";

  return [{
    locale: "zh",
    pluralRuleFunction: function (e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      hour: {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      "hour-short": {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      minute: {
        displayName: "分钟",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      "minute-short": {
        displayName: "分",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒钟后"
          },
          past: {
            other: "{0}秒钟前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hans",
    parentLocale: "zh"
  }, {
    locale: "zh-Hans-HK",
    parentLocale: "zh-Hans",
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      hour: {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      "hour-short": {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      minute: {
        displayName: "分钟",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      "minute-short": {
        displayName: "分",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hans-MO",
    parentLocale: "zh-Hans",
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      hour: {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      "hour-short": {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      minute: {
        displayName: "分钟",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      "minute-short": {
        displayName: "分",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hans-SG",
    parentLocale: "zh-Hans",
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      hour: {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      "hour-short": {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      minute: {
        displayName: "分钟",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      "minute-short": {
        displayName: "分",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hant",
    pluralRuleFunction: function (e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0} 年後"
          },
          past: {
            other: "{0} 年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0} 年後"
          },
          past: {
            other: "{0} 年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下個月",
          "-1": "上個月"
        },
        relativeTime: {
          future: {
            other: "{0} 個月後"
          },
          past: {
            other: "{0} 個月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下個月",
          "-1": "上個月"
        },
        relativeTime: {
          future: {
            other: "{0} 個月後"
          },
          past: {
            other: "{0} 個月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0} 天後"
          },
          past: {
            other: "{0} 天前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0} 天後"
          },
          past: {
            other: "{0} 天前"
          }
        }
      },
      hour: {
        displayName: "小時",
        relative: {
          0: "這一小時"
        },
        relativeTime: {
          future: {
            other: "{0} 小時後"
          },
          past: {
            other: "{0} 小時前"
          }
        }
      },
      "hour-short": {
        displayName: "小時",
        relative: {
          0: "這一小時"
        },
        relativeTime: {
          future: {
            other: "{0} 小時後"
          },
          past: {
            other: "{0} 小時前"
          }
        }
      },
      minute: {
        displayName: "分鐘",
        relative: {
          0: "這一分鐘"
        },
        relativeTime: {
          future: {
            other: "{0} 分鐘後"
          },
          past: {
            other: "{0} 分鐘前"
          }
        }
      },
      "minute-short": {
        displayName: "分鐘",
        relative: {
          0: "這一分鐘"
        },
        relativeTime: {
          future: {
            other: "{0} 分鐘後"
          },
          past: {
            other: "{0} 分鐘前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "現在"
        },
        relativeTime: {
          future: {
            other: "{0} 秒後"
          },
          past: {
            other: "{0} 秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "現在"
        },
        relativeTime: {
          future: {
            other: "{0} 秒後"
          },
          past: {
            other: "{0} 秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hant-HK",
    parentLocale: "zh-Hant",
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "下年",
          "-1": "上年"
        },
        relativeTime: {
          future: {
            other: "{0} 年後"
          },
          past: {
            other: "{0} 年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "下年",
          "-1": "上年"
        },
        relativeTime: {
          future: {
            other: "{0} 年後"
          },
          past: {
            other: "{0} 年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下個月",
          "-1": "上個月"
        },
        relativeTime: {
          future: {
            other: "{0} 個月後"
          },
          past: {
            other: "{0} 個月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下個月",
          "-1": "上個月"
        },
        relativeTime: {
          future: {
            other: "{0} 個月後"
          },
          past: {
            other: "{0} 個月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今日",
          1: "明日",
          2: "後日",
          "-2": "前日",
          "-1": "昨日"
        },
        relativeTime: {
          future: {
            other: "{0} 日後"
          },
          past: {
            other: "{0} 日前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今日",
          1: "明日",
          2: "後日",
          "-2": "前日",
          "-1": "昨日"
        },
        relativeTime: {
          future: {
            other: "{0} 日後"
          },
          past: {
            other: "{0} 日前"
          }
        }
      },
      hour: {
        displayName: "小時",
        relative: {
          0: "這個小時"
        },
        relativeTime: {
          future: {
            other: "{0} 小時後"
          },
          past: {
            other: "{0} 小時前"
          }
        }
      },
      "hour-short": {
        displayName: "小時",
        relative: {
          0: "這個小時"
        },
        relativeTime: {
          future: {
            other: "{0} 小時後"
          },
          past: {
            other: "{0} 小時前"
          }
        }
      },
      minute: {
        displayName: "分鐘",
        relative: {
          0: "這分鐘"
        },
        relativeTime: {
          future: {
            other: "{0} 分鐘後"
          },
          past: {
            other: "{0} 分鐘前"
          }
        }
      },
      "minute-short": {
        displayName: "分鐘",
        relative: {
          0: "這分鐘"
        },
        relativeTime: {
          future: {
            other: "{0} 分鐘後"
          },
          past: {
            other: "{0} 分鐘前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "現在"
        },
        relativeTime: {
          future: {
            other: "{0} 秒後"
          },
          past: {
            other: "{0} 秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "現在"
        },
        relativeTime: {
          future: {
            other: "{0} 秒後"
          },
          past: {
            other: "{0} 秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hant-MO",
    parentLocale: "zh-Hant-HK"
  }];
});

/***/