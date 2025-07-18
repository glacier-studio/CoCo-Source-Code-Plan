!function (e, a) {
  if (true) {
    module.exports = a();
  } else {
    if ("function" == typeof define && define.amd) {
      define(a);
    } else {
      e.ReactIntlLocaleData = e.ReactIntlLocaleData || {};
      e.ReactIntlLocaleData.en = a();
    }
  }
}(this, function () {
  "use strict";

  return [{
    locale: "en",
    pluralRuleFunction: function (e, a) {
      var t = String(e).split(".");
      var o = !t[1];
      var n = Number(t[0]) == e;
      var r = n && t[0].slice(-1);
      var i = n && t[0].slice(-2);
      return a ? 1 == r && 11 != i ? "one" : 2 == r && 12 != i ? "two" : 3 == r && 13 != i ? "few" : "other" : 1 == e && o ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr.",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr.",
            other: "in {0} yr."
          },
          past: {
            one: "{0} yr. ago",
            other: "{0} yr. ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo.",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo.",
            other: "in {0} mo."
          },
          past: {
            one: "{0} mo. ago",
            other: "{0} mo. ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr.",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr.",
            other: "in {0} hr."
          },
          past: {
            one: "{0} hr. ago",
            other: "{0} hr. ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min.",
            other: "in {0} min."
          },
          past: {
            one: "{0} min. ago",
            other: "{0} min. ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec.",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec.",
            other: "in {0} sec."
          },
          past: {
            one: "{0} sec. ago",
            other: "{0} sec. ago"
          }
        }
      }
    }
  }, {
    locale: "en-001",
    parentLocale: "en",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr",
            other: "in {0} yr"
          },
          past: {
            one: "{0} yr ago",
            other: "{0} yr ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo",
            other: "in {0} mo"
          },
          past: {
            one: "{0} mo ago",
            other: "{0} mo ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr",
            other: "in {0} hr"
          },
          past: {
            one: "{0} hr ago",
            other: "{0} hr ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min",
            other: "in {0} min"
          },
          past: {
            one: "{0} min ago",
            other: "{0} min ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec",
            other: "in {0} sec"
          },
          past: {
            one: "{0} sec ago",
            other: "{0} sec ago"
          }
        }
      }
    }
  }, {
    locale: "en-150",
    parentLocale: "en-001"
  }, {
    locale: "en-AG",
    parentLocale: "en-001"
  }, {
    locale: "en-AI",
    parentLocale: "en-001"
  }, {
    locale: "en-AS",
    parentLocale: "en"
  }, {
    locale: "en-AT",
    parentLocale: "en-150"
  }, {
    locale: "en-AU",
    parentLocale: "en-001",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr",
            other: "in {0} yrs"
          },
          past: {
            one: "{0} yr ago",
            other: "{0} yrs ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo.",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo.",
            other: "in {0} mo."
          },
          past: {
            one: "{0} mo. ago",
            other: "{0} mo. ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr",
            other: "in {0} hrs"
          },
          past: {
            one: "{0} hr ago",
            other: "{0} hrs ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min.",
            other: "in {0} mins"
          },
          past: {
            one: "{0} min. ago",
            other: "{0} mins ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec.",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec.",
            other: "in {0} secs"
          },
          past: {
            one: "{0} sec. ago",
            other: "{0} secs ago"
          }
        }
      }
    }
  }, {
    locale: "en-BB",
    parentLocale: "en-001"
  }, {
    locale: "en-BE",
    parentLocale: "en-001"
  }, {
    locale: "en-BI",
    parentLocale: "en"
  }, {
    locale: "en-BM",
    parentLocale: "en-001"
  }, {
    locale: "en-BS",
    parentLocale: "en-001"
  }, {
    locale: "en-BW",
    parentLocale: "en-001"
  }, {
    locale: "en-BZ",
    parentLocale: "en-001"
  }, {
    locale: "en-CA",
    parentLocale: "en-001",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr.",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr.",
            other: "in {0} yrs."
          },
          past: {
            one: "{0} yr. ago",
            other: "{0} yrs. ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo.",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo.",
            other: "in {0} mos."
          },
          past: {
            one: "{0} mo. ago",
            other: "{0} mos. ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr.",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr.",
            other: "in {0} hrs."
          },
          past: {
            one: "{0} hr. ago",
            other: "{0} hrs. ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min.",
            other: "in {0} mins."
          },
          past: {
            one: "{0} min. ago",
            other: "{0} mins. ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec.",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec.",
            other: "in {0} secs."
          },
          past: {
            one: "{0} sec. ago",
            other: "{0} secs. ago"
          }
        }
      }
    }
  }, {
    locale: "en-CC",
    parentLocale: "en-001"
  }, {
    locale: "en-CH",
    parentLocale: "en-150"
  }, {
    locale: "en-CK",
    parentLocale: "en-001"
  }, {
    locale: "en-CM",
    parentLocale: "en-001"
  }, {
    locale: "en-CX",
    parentLocale: "en-001"
  }, {
    locale: "en-CY",
    parentLocale: "en-001"
  }, {
    locale: "en-DE",
    parentLocale: "en-150"
  }, {
    locale: "en-DG",
    parentLocale: "en-001"
  }, {
    locale: "en-DK",
    parentLocale: "en-150"
  }, {
    locale: "en-DM",
    parentLocale: "en-001"
  }, {
    locale: "en-Dsrt",
    pluralRuleFunction: function (e, a) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "en-ER",
    parentLocale: "en-001"
  }, {
    locale: "en-FI",
    parentLocale: "en-150"
  }, {
    locale: "en-FJ",
    parentLocale: "en-001"
  }, {
    locale: "en-FK",
    parentLocale: "en-001"
  }, {
    locale: "en-FM",
    parentLocale: "en-001"
  }, {
    locale: "en-GB",
    parentLocale: "en-001"
  }, {
    locale: "en-GD",
    parentLocale: "en-001"
  }, {
    locale: "en-GG",
    parentLocale: "en-001"
  }, {
    locale: "en-GH",
    parentLocale: "en-001"
  }, {
    locale: "en-GI",
    parentLocale: "en-001"
  }, {
    locale: "en-GM",
    parentLocale: "en-001"
  }, {
    locale: "en-GU",
    parentLocale: "en"
  }, {
    locale: "en-GY",
    parentLocale: "en-001"
  }, {
    locale: "en-HK",
    parentLocale: "en-001"
  }, {
    locale: "en-IE",
    parentLocale: "en-001"
  }, {
    locale: "en-IL",
    parentLocale: "en-001"
  }, {
    locale: "en-IM",
    parentLocale: "en-001"
  }, {
    locale: "en-IN",
    parentLocale: "en-001"
  }, {
    locale: "en-IO",
    parentLocale: "en-001"
  }, {
    locale: "en-JE",
    parentLocale: "en-001"
  }, {
    locale: "en-JM",
    parentLocale: "en-001"
  }, {
    locale: "en-KE",
    parentLocale: "en-001"
  }, {
    locale: "en-KI",
    parentLocale: "en-001"
  }, {
    locale: "en-KN",
    parentLocale: "en-001"
  }, {
    locale: "en-KY",
    parentLocale: "en-001"
  }, {
    locale: "en-LC",
    parentLocale: "en-001"
  }, {
    locale: "en-LR",
    parentLocale: "en-001"
  }, {
    locale: "en-LS",
    parentLocale: "en-001"
  }, {
    locale: "en-MG",
    parentLocale: "en-001"
  }, {
    locale: "en-MH",
    parentLocale: "en"
  }, {
    locale: "en-MO",
    parentLocale: "en-001"
  }, {
    locale: "en-MP",
    parentLocale: "en"
  }, {
    locale: "en-MS",
    parentLocale: "en-001"
  }, {
    locale: "en-MT",
    parentLocale: "en-001"
  }, {
    locale: "en-MU",
    parentLocale: "en-001"
  }, {
    locale: "en-MW",
    parentLocale: "en-001"
  }, {
    locale: "en-MY",
    parentLocale: "en-001"
  }, {
    locale: "en-NA",
    parentLocale: "en-001"
  }, {
    locale: "en-NF",
    parentLocale: "en-001"
  }, {
    locale: "en-NG",
    parentLocale: "en-001"
  }, {
    locale: "en-NL",
    parentLocale: "en-150"
  }, {
    locale: "en-NR",
    parentLocale: "en-001"
  }, {
    locale: "en-NU",
    parentLocale: "en-001"
  }, {
    locale: "en-NZ",
    parentLocale: "en-001"
  }, {
    locale: "en-PG",
    parentLocale: "en-001"
  }, {
    locale: "en-PH",
    parentLocale: "en-001"
  }, {
    locale: "en-PK",
    parentLocale: "en-001"
  }, {
    locale: "en-PN",
    parentLocale: "en-001"
  }, {
    locale: "en-PR",
    parentLocale: "en"
  }, {
    locale: "en-PW",
    parentLocale: "en-001"
  }, {
    locale: "en-RW",
    parentLocale: "en-001"
  }, {
    locale: "en-SB",
    parentLocale: "en-001"
  }, {
    locale: "en-SC",
    parentLocale: "en-001"
  }, {
    locale: "en-SD",
    parentLocale: "en-001"
  }, {
    locale: "en-SE",
    parentLocale: "en-150"
  }, {
    locale: "en-SG",
    parentLocale: "en-001",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr",
        relative: {
          0: "this yr",
          1: "next yr",
          "-1": "last yr"
        },
        relativeTime: {
          future: {
            one: "in {0} yr",
            other: "in {0} yr"
          },
          past: {
            one: "{0} yr ago",
            other: "{0} yr ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mth",
        relative: {
          0: "this mth",
          1: "next mth",
          "-1": "last mth"
        },
        relativeTime: {
          future: {
            one: "in {0} mth",
            other: "in {0} mth"
          },
          past: {
            one: "{0} mth ago",
            other: "{0} mth ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr",
            other: "in {0} hr"
          },
          past: {
            one: "{0} hr ago",
            other: "{0} hr ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min",
            other: "in {0} min"
          },
          past: {
            one: "{0} min ago",
            other: "{0} min ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec",
            other: "in {0} sec"
          },
          past: {
            one: "{0} sec ago",
            other: "{0} sec ago"
          }
        }
      }
    }
  }, {
    locale: "en-SH",
    parentLocale: "en-001"
  }, {
    locale: "en-SI",
    parentLocale: "en-150"
  }, {
    locale: "en-SL",
    parentLocale: "en-001"
  }, {
    locale: "en-SS",
    parentLocale: "en-001"
  }, {
    locale: "en-SX",
    parentLocale: "en-001"
  }, {
    locale: "en-SZ",
    parentLocale: "en-001"
  }, {
    locale: "en-Shaw",
    pluralRuleFunction: function (e, a) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "en-TC",
    parentLocale: "en-001"
  }, {
    locale: "en-TK",
    parentLocale: "en-001"
  }, {
    locale: "en-TO",
    parentLocale: "en-001"
  }, {
    locale: "en-TT",
    parentLocale: "en-001"
  }, {
    locale: "en-TV",
    parentLocale: "en-001"
  }, {
    locale: "en-TZ",
    parentLocale: "en-001"
  }, {
    locale: "en-UG",
    parentLocale: "en-001"
  }, {
    locale: "en-UM",
    parentLocale: "en"
  }, {
    locale: "en-US",
    parentLocale: "en"
  }, {
    locale: "en-VC",
    parentLocale: "en-001"
  }, {
    locale: "en-VG",
    parentLocale: "en-001"
  }, {
    locale: "en-VI",
    parentLocale: "en"
  }, {
    locale: "en-VU",
    parentLocale: "en-001"
  }, {
    locale: "en-WS",
    parentLocale: "en-001"
  }, {
    locale: "en-ZA",
    parentLocale: "en-001"
  }, {
    locale: "en-ZM",
    parentLocale: "en-001"
  }, {
    locale: "en-ZW",
    parentLocale: "en-001"
  }];
});

/***/