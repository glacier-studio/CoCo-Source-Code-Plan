(function (r) {
  exports.log = function () {
    var e;
    return "object" === typeof console && console.log && (e = console).log.apply(e, arguments);
  };
  exports.formatArgs = function (t) {
    t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
      return;
    }
    var n = "color: " + this.color;
    t.splice(1, 0, n, "color: inherit");
    var r = 0;
    var i = 0;
    t[0].replace(/%[a-zA-Z%]/g, function (e) {
      if ("%%" !== e) {
        r++;
        if ("%c" === e) {
          i = r;
        }
      }
    });
    t.splice(i, 0, n);
  };
  exports.save = function (e) {
    try {
      if (e) {
        exports.storage.setItem("debug", e);
      } else {
        exports.storage.removeItem("debug");
      }
    } catch (n) {}
  };
  exports.load = function () {
    var e;
    try {
      e = exports.storage.getItem("debug");
    } catch (n) {}
    if (!e && "undefined" !== typeof r && "env" in r) {
      e = Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0
      }).DEBUG;
    }
    return e;
  };
  exports.useColors = function () {
    if ("undefined" !== typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) {
      return !0;
    }
    if ("undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return !1;
    }
    return "undefined" !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  };
  exports.storage = function () {
    try {
      return localStorage;
    } catch (e) {}
  }();
  exports.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  module.exports = require("./2252/index")(exports);
  module.exports.formatters.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return "[UnexpectedJSONParseError]: " + t.message;
    }
  };
}).call(this, require("../../../../../3272/3198/1187/368"));